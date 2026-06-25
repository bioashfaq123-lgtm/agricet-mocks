import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { adminDb } from "@/lib/firebase-admin";
import admin from "firebase-admin";
import { EMAIL_SENDING_PAUSED } from "@/lib/emailConfig";
import { LIVE_EDITION } from "@/lib/liveTest";

export const maxDuration = 30;

interface QuestionResult {
  qNo: number;
  question: string;
  options: string[];
  correct: number;
  chosen: number | null;
  explanation?: string;
}

interface SendResultsBody {
  to: string;
  name: string;
  score: number;
  correct: number;
  wrong: number;
  unattempted: number;
  total: number;
  questions: QuestionResult[];
  uid?: string;
  answers?: Record<string, number>;
}

function letter(i: number) {
  return String.fromCharCode(65 + i);
}

function buildQuestionHtml(q: QuestionResult, idx: number) {
  const wasCorrect = q.chosen === q.correct;
  const wasSkipped = q.chosen === null || q.chosen === undefined;

  const statusBadge = wasSkipped
    ? `<span style="background:#f3f4f6;color:#6b7280;padding:2px 10px;border-radius:999px;font-size:11px;font-weight:700;">SKIPPED</span>`
    : wasCorrect
    ? `<span style="background:#dcfce7;color:#15803d;padding:2px 10px;border-radius:999px;font-size:11px;font-weight:700;">CORRECT</span>`
    : `<span style="background:#fee2e2;color:#b91c1c;padding:2px 10px;border-radius:999px;font-size:11px;font-weight:700;">WRONG</span>`;

  const optionsHtml = q.options.map((opt, i) => {
    let style = "padding:6px 10px;border-radius:8px;margin-bottom:4px;font-size:13px;";
    let prefix = "";
    if (i === q.correct) {
      style += "background:#dcfce7;color:#166534;border:1px solid #86efac;";
      prefix = "✅ ";
    } else if (i === q.chosen) {
      style += "background:#fee2e2;color:#991b1b;border:1px solid #fca5a5;";
      prefix = "❌ ";
    } else {
      style += "background:#f9fafb;color:#6b7280;border:1px solid #f3f4f6;";
    }
    return `<div style="${style}">${prefix}<b>${letter(i)}.</b> ${opt}</div>`;
  }).join("");

  return `
    <div style="border:1px solid #e5e7eb;border-radius:12px;padding:14px;margin-bottom:14px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <span style="font-weight:700;color:#111827;font-size:13px;">Q${idx + 1}.</span>
        ${statusBadge}
      </div>
      <p style="margin:0 0 10px 0;color:#111827;font-size:14px;font-weight:600;line-height:1.5;">${q.question}</p>
      ${optionsHtml}
      ${q.explanation ? `
        <div style="margin-top:10px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:10px;">
          <span style="color:#1d4ed8;font-weight:700;font-size:12px;">💡 Explanation: </span>
          <span style="color:#1e3a8a;font-size:13px;line-height:1.5;">${q.explanation}</span>
        </div>` : ""}
    </div>`;
}

export async function POST(req: NextRequest) {
  try {
    // Gmail creds are needed ONLY for the optional result email. Saving the
    // attempt (the critical path) must never depend on them — so we read them
    // here but do NOT abort if they're missing. The transporter is built later,
    // only when an email actually needs to go out.
    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;

    const body: SendResultsBody = await req.json();
    const { to, name, score, correct, wrong, unattempted, total, questions, uid, answers } = body;

    if (!to || !questions || !Array.isArray(questions)) {
      return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
    }

    // ── Server-side persistence (uses Admin SDK — bypasses client Firestore rules) ──
    // This is the authoritative save: even if the client-side addDoc fails (e.g. due to
    // security rules denying the write), the result still lands in liveTestAttempts so
    // it shows up on the admin dashboard. De-duped by uid (one attempt per student).
    let attemptDocId: string | null = null;
    // True when this student already has a saved attempt — the FIRST attempt is
    // final, so a second submission (e.g. from a second open tab) must NOT
    // overwrite the saved score and must NOT trigger another result email.
    let alreadyAttempted = false;
    if (adminDb) {
      try {
        const existing = uid
          ? await adminDb.collection("liveTestAttempts").where("uid", "==", uid).limit(1).get()
          : null;
        if (existing && !existing.empty) {
          // One attempt per student: keep the existing record untouched.
          attemptDocId = existing.docs[0].id;
          alreadyAttempted = true;
        } else {
          const ref = await adminDb.collection("liveTestAttempts").add({
            uid: uid ?? "",
            name: name ?? "—",
            email: to,
            score, correct, wrong, unattempted, total,
            answers: answers ?? {},
            emailSent: false,
            completedAt: admin.firestore.FieldValue.serverTimestamp(),
          });
          attemptDocId = ref.id;
        }
      } catch (e) {
        console.error("send-live-results: failed to persist attempt via Admin SDK:", e);
      }
    } else {
      console.warn("send-live-results: adminDb unavailable — skipping server-side persistence");
    }

    // ── One-attempt lock: flag the student so the live test cannot be retaken.
    // Written with the Admin SDK so it holds even if client-side writes are
    // denied by security rules. The client reads users/{uid}.gtliveAttempted. ──
    if (adminDb && uid) {
      try {
        await adminDb.collection("users").doc(uid).set({ gtliveAttempted: true, gtliveAttemptedEdition: LIVE_EDITION }, { merge: true });
      } catch (e) {
        console.error("send-live-results: failed to set gtliveAttempted flag:", e);
      }
    }

    const grade =
      score >= 85 ? "🏆 Excellent!" :
      score >= 70 ? "🎉 Great Work!" :
      score >= 55 ? "👍 Good Effort!" :
      score >= 40 ? "📚 Keep Practising!" :
                    "💪 Don't Give Up!";

    const ringColor = score >= 70 ? "#16a34a" : score >= 50 ? "#d97706" : "#dc2626";

    // Only the wrong + skipped questions are shown in detail (keeps email focused & shorter);
    // correct ones are summarised in the score card. Full review available on the website.
    const reviewQuestions = questions.filter(q => q.chosen !== q.correct);
    const questionsHtml = reviewQuestions.map((q, i) => buildQuestionHtml(q, questions.indexOf(q))).join("");

    const html = `
    <div style="font-family:Segoe UI,Arial,sans-serif;max-width:640px;margin:0 auto;background:#f9fafb;padding:24px;">

      <div style="text-align:center;margin-bottom:20px;">
        <div style="display:inline-block;background:#16a34a;color:#fff;font-weight:900;font-size:18px;padding:10px 20px;border-radius:12px;">
          🌾 AgriCareer Academy
        </div>
        <h1 style="font-size:20px;color:#111827;margin:16px 0 4px;">AGRICET Free Live Mock Test — Your Result</h1>
        <p style="color:#6b7280;font-size:14px;margin:0;">Hi ${name}, here's how you performed 👇</p>
      </div>

      <div style="background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:24px;text-align:center;margin-bottom:20px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin:0 auto;">
          <tr>
            <td width="120" height="120" align="center" valign="middle" style="width:120px;height:120px;border-radius:50%;border:8px solid ${ringColor};text-align:center;">
              <div style="font-size:28px;font-weight:900;color:#111827;line-height:1.2;">${score}%</div>
              <div style="font-size:12px;color:#6b7280;line-height:1.2;">${correct}/${total}</div>
            </td>
          </tr>
        </table>
        <p style="margin:14px 0 0;font-weight:700;color:#111827;">${grade}</p>

        <div style="display:flex;justify-content:center;gap:12px;margin-top:18px;flex-wrap:wrap;">
          <div style="background:#f0fdf4;border-radius:12px;padding:12px 18px;min-width:90px;">
            <div style="font-size:22px;font-weight:900;color:#15803d;">${correct}</div>
            <div style="font-size:11px;color:#6b7280;">Correct</div>
          </div>
          <div style="background:#fef2f2;border-radius:12px;padding:12px 18px;min-width:90px;">
            <div style="font-size:22px;font-weight:900;color:#dc2626;">${wrong}</div>
            <div style="font-size:11px;color:#6b7280;">Wrong</div>
          </div>
          <div style="background:#f9fafb;border-radius:12px;padding:12px 18px;min-width:90px;">
            <div style="font-size:22px;font-weight:900;color:#6b7280;">${unattempted}</div>
            <div style="font-size:11px;color:#6b7280;">Skipped</div>
          </div>
        </div>
      </div>

      ${reviewQuestions.length > 0 ? `
      <h2 style="font-size:16px;color:#111827;margin:24px 0 12px;">📋 Review — Questions you missed or skipped</h2>
      ${questionsHtml}
      ` : `<p style="text-align:center;color:#15803d;font-weight:700;margin:24px 0;">🎉 Wow — you got every attempted question correct!</p>`}

      <div style="background:linear-gradient(135deg,#16a34a,#15803d);border-radius:16px;padding:24px;text-align:center;margin-top:28px;color:#fff;">
        <h2 style="margin:0 0 8px;font-size:18px;">🚀 Want to go further?</h2>
        <p style="margin:0 0 16px;font-size:14px;line-height:1.6;opacity:.95;">
          We conduct <b>topic-wise &amp; subject-wise mock tests</b> covering the entire AGRICET &amp; AEO syllabus —
          Agronomy, Genetics, Entomology, Horticulture, Extension, and more — with detailed explanations
          for every question, on our website:
        </p>
        <p style="margin:0 0 18px;font-size:22px;font-weight:900;">Just ₹199 — Full Access</p>
        <a href="https://agricet-mocks-8mry.vercel.app/" style="display:inline-block;background:#fff;color:#15803d;font-weight:800;padding:12px 28px;border-radius:10px;text-decoration:none;font-size:14px;">
          Explore AGRICET Mock Test Series →
        </a>
        <p style="margin:14px 0 0;font-size:12px;opacity:.85;">🔗 https://agricet-mocks-8mry.vercel.app/</p>
      </div>

      <div style="background:#fef2f2;border:1px solid #fecaca;border-radius:16px;padding:20px;text-align:center;margin-top:18px;">
        <h2 style="margin:0 0 8px;font-size:16px;color:#b91c1c;">📺 Subscribe to our YouTube Channel!</h2>
        <p style="margin:0 0 14px;font-size:14px;color:#374151;line-height:1.6;">
          Get more <b>FREE mock tests, exam strategy videos &amp; preparation tips</b> for AGRICET &amp; AEO —
          subscribe to <b>AgriCareer Academy</b> on YouTube so you never miss our next free live mock test!
        </p>
        <a href="https://www.youtube.com/@AgriCareerAcademy" style="display:inline-block;background:#dc2626;color:#fff;font-weight:800;padding:12px 28px;border-radius:10px;text-decoration:none;font-size:14px;">
          ▶ Subscribe on YouTube
        </a>
        <p style="margin:12px 0 0;font-size:12px;color:#6b7280;">🔗 https://www.youtube.com/@AgriCareerAcademy</p>
      </div>

      <p style="text-align:center;color:#9ca3af;font-size:12px;margin-top:24px;">
        Thank you for participating in the AGRICET Free Live Mock Test 🙏<br/>
        — Team AgriCareer Academy
      </p>
    </div>`;

    // Account-safety pause: when paused, skip the actual Gmail send. The attempt
    // and the student's full answers are already persisted above via the Admin
    // SDK, so the result can be e-mailed later from a dedicated email service —
    // no student data is lost. This protects the Gmail account from being
    // flagged/disabled for automated bulk sending.
    // Skip emailing on a repeat submission — the first attempt was already handled.
    // Build the transporter here (not at the top) so a missing Gmail credential
    // can never block the attempt save above.
    if (!EMAIL_SENDING_PAUSED && !alreadyAttempted && gmailUser && gmailPass) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: gmailUser, pass: gmailPass },
      });
      await transporter.sendMail({
        from: `"AgriCareer Academy" <${gmailUser}>`,
        to,
        subject: `📊 Your AGRICET Live Mock Test Result — ${score}% (${correct}/${total} correct)`,
        html,
      });

      if (adminDb && attemptDocId) {
        try {
          await adminDb.collection("liveTestAttempts").doc(attemptDocId).set({ emailSent: true }, { merge: true });
        } catch (e) {
          console.error("send-live-results: failed to mark emailSent:", e);
        }
      }
    }

    // `saved` tells the client whether the attempt was actually persisted on the
    // server (Admin SDK). If false (e.g. Admin SDK not configured), the client
    // does its own fallback write so no attempt is ever lost.
    return NextResponse.json({ success: true, saved: !!attemptDocId, attemptDocId, alreadyAttempted, emailPaused: EMAIL_SENDING_PAUSED });
  } catch (err) {
    console.error("send-live-results failed:", err);
    return NextResponse.json({ success: false, error: "Failed to send result email" }, { status: 500 });
  }
}
