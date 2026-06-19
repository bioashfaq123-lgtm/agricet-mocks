import { NextRequest, NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";
import admin from "firebase-admin";
import { GRAND_TEST_LIVE } from "@/data/grandTestLive";
import { sendEmail, mailProvider } from "@/lib/mailer";
import { buildResultEmailHtml, ReviewQuestion } from "@/lib/resultEmail";

export const maxDuration = 60;
const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL || "bioashfaq123@gmail.com";
const PER_CALL = 45; // emails per invocation, to stay within the function time limit

interface A {
  id: string;
  ref: FirebaseFirestore.DocumentReference;
  name: string;
  email: string;
  score: number;
  correct: number;
  wrong: number;
  unattempted: number;
  total: number;
  answers: Record<string, number>;
  resultEmailSent: boolean;
}

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get("Authorization") ?? "";
  const idToken = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;
  if (!idToken) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  let adminEmail = "";
  try {
    const decoded = await admin.auth().verifyIdToken(idToken);
    if (decoded.email !== ADMIN_EMAIL) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    adminEmail = decoded.email || ADMIN_EMAIL;
  } catch {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  if (!adminDb) return NextResponse.json({ error: "Admin DB unavailable" }, { status: 500 });
  if (!mailProvider()) {
    return NextResponse.json({ error: "No email service configured. Add RESEND_API_KEY (or BREVO_API_KEY) and MAIL_FROM in Vercel, then redeploy." }, { status: 400 });
  }

  const body = (await req.json().catch(() => ({}))) as { mode?: string };
  const testMode = body?.mode === "test";

  const snap = await adminDb.collection("liveTestAttempts").get();
  const attempts: A[] = snap.docs.map(d => {
    const v = d.data();
    return {
      id: d.id, ref: d.ref,
      name: v.name ?? "Student",
      email: (v.email ?? "").toString().trim(),
      score: v.score ?? 0, correct: v.correct ?? 0, wrong: v.wrong ?? 0,
      unattempted: v.unattempted ?? 0, total: v.total ?? GRAND_TEST_LIVE.length,
      answers: v.answers ?? {},
      resultEmailSent: v.resultEmailSent === true,
    };
  });

  // overall ranking: score desc, then more-correct, then fewer-wrong
  attempts.sort((a, b) => b.score - a.score || b.correct - a.correct || a.wrong - b.wrong);
  const rankOf = new Map<string, number>();
  attempts.forEach((a, i) => rankOf.set(a.id, i + 1));
  const totalStudents = attempts.length;

  const reviewFor = (a: A): ReviewQuestion[] => {
    const out: ReviewQuestion[] = [];
    for (const q of GRAND_TEST_LIVE) {
      const chosen = a.answers && a.answers[q.id] !== undefined ? a.answers[q.id] : null;
      if (chosen !== q.correct) out.push({ qNo: q.qNo, question: q.question, options: q.options, correct: q.correct, chosen, explanation: q.explanation });
    }
    return out;
  };
  const htmlFor = (a: A) => buildResultEmailHtml({
    name: a.name, score: a.score, correct: a.correct, wrong: a.wrong,
    unattempted: a.unattempted, total: a.total,
    rank: rankOf.get(a.id) ?? 0, totalStudents, review: reviewFor(a),
  });
  const subjFor = (a: A) => `Your AGRICET Live Mock Test Result — ${a.score}% | Rank ${rankOf.get(a.id)} of ${totalStudents}`;

  // ── TEST mode: send a single sample to the admin only ──
  if (testMode) {
    const sample = attempts.find(a => a.email.toLowerCase() === adminEmail.toLowerCase()) || attempts[0];
    if (!sample) return NextResponse.json({ error: "No attempts found yet to build a sample." }, { status: 400 });
    try {
      await sendEmail({ to: adminEmail, subject: "[TEST] " + subjFor(sample), html: htmlFor(sample) });
      return NextResponse.json({ ok: true, test: true, sentTo: adminEmail, provider: mailProvider() });
    } catch (e) {
      return NextResponse.json({ error: "Send failed: " + (e as Error).message }, { status: 500 });
    }
  }

  // ── Real send: one batch of up to PER_CALL not-yet-sent students ──
  const emailRe = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  const pending = attempts.filter(a => !a.resultEmailSent && emailRe.test(a.email));
  const batch = pending.slice(0, PER_CALL);
  let sent = 0;
  const failed: string[] = [];
  for (const a of batch) {
    try {
      await sendEmail({ to: a.email, subject: subjFor(a), html: htmlFor(a) });
      await a.ref.set({ resultEmailSent: true, resultEmailAt: new Date().toISOString() }, { merge: true });
      sent++;
      await new Promise(r => setTimeout(r, 150));
    } catch (e) {
      failed.push(a.email + ": " + (e as Error).message);
    }
  }
  return NextResponse.json({
    ok: true, sent, failed: failed.length, failedDetail: failed.slice(0, 4),
    remaining: pending.length - sent, total: totalStudents, provider: mailProvider(),
  });
}
