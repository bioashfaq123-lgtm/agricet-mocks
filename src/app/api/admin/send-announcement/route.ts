import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { adminDb } from "@/lib/firebase-admin";
import admin from "firebase-admin";

export const maxDuration = 60;

const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL || "bioashfaq123@gmail.com";

function announcementHtml() {
  return `
  <div style="max-width:600px;margin:0 auto;font-family:Arial,Helvetica,sans-serif;color:#111827;">
    <div style="background:#0B5E37;border-radius:16px;padding:26px 22px;text-align:center;color:#fff;">
      <p style="margin:0 0 6px;font-size:13px;color:#9DECC0;font-weight:700;letter-spacing:1px;">AgriCareer Academy</p>
      <div style="display:inline-block;background:#fff;color:#15803d;font-weight:800;font-size:14px;padding:6px 16px;border-radius:999px;">&#128308; FREE Live Mock Test</div>
      <h1 style="margin:16px 0 4px;font-size:30px;font-weight:900;">AGRICET 2026</h1>
      <p style="margin:0;font-size:16px;color:#BBF7D0;font-weight:700;">Free all-Telangana live mock test</p>
    </div>

    <div style="background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:20px;margin-top:14px;text-align:center;">
      <p style="margin:0 0 6px;font-size:22px;font-weight:800;color:#0B5E37;">Friday, 19 June 2026</p>
      <p style="margin:0 0 14px;font-size:15px;color:#15803d;font-weight:700;">8 PM IST onwards (open till 12 PM, 20 June)</p>
      <p style="margin:0;font-size:16px;font-weight:700;">100 questions &middot; 100 minutes &middot; All-Telangana ranking</p>
    </div>

    <div style="background:#FEF3C7;border:1px solid #F59E0B;border-radius:16px;padding:16px 18px;margin-top:14px;">
      <p style="margin:0 0 6px;font-size:16px;font-weight:800;color:#92400E;">&#128231; Sign in with your email to attend</p>
      <p style="margin:0;font-size:14px;color:#78350F;line-height:1.6;">
        Log in (or create your free account) <b>before</b> the test. Your result &mdash; with the full answer key and
        explanations &mdash; is sent to your registered email afterwards. The test can be attempted <b>once per student</b>.
      </p>
    </div>

    <div style="text-align:center;margin:20px 0;">
      <a href="https://agricet-mocks-8mry.vercel.app/" style="display:inline-block;background:#FBBF24;color:#422006;font-weight:800;font-size:16px;padding:13px 30px;border-radius:12px;text-decoration:none;">Register &amp; attend &mdash; it's free &rarr;</a>
      <p style="margin:10px 0 0;font-size:13px;color:#6b7280;">https://agricet-mocks-8mry.vercel.app/</p>
    </div>

    <div style="background:#fef2f2;border:1px solid #fecaca;border-radius:14px;padding:16px;text-align:center;">
      <p style="margin:0 0 10px;font-size:14px;color:#374151;">Get more free mock tests &amp; tips on YouTube:</p>
      <a href="https://www.youtube.com/@AgriCareerAcademy" style="display:inline-block;background:#dc2626;color:#fff;font-weight:800;padding:10px 24px;border-radius:10px;text-decoration:none;font-size:14px;">&#9654; Subscribe @AgriCareerAcademy</a>
    </div>

    <p style="text-align:center;color:#9ca3af;font-size:12px;margin-top:22px;">
      You are receiving this because you registered on AgriCareer Academy mock tests.<br/>&mdash; Team AgriCareer Academy
    </p>
  </div>`;
}

export async function POST(req: NextRequest) {
  // ── Admin auth ──
  const authHeader = req.headers.get("Authorization") ?? "";
  const idToken = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;
  if (!idToken) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const decoded = await admin.auth().verifyIdToken(idToken);
    if (decoded.email !== ADMIN_EMAIL) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  } catch {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  if (!gmailUser || !gmailPass) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }
  if (!adminDb) return NextResponse.json({ error: "Admin DB unavailable" }, { status: 500 });

  // ── Collect unique, valid recipient emails ──
  const snap = await adminDb.collection("users").get();
  const seen = new Set<string>();
  for (const d of snap.docs) {
    const e = (d.data().email ?? "").toString().trim().toLowerCase();
    if (e && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e)) seen.add(e);
  }
  const emails = [...seen];
  if (emails.length === 0) return NextResponse.json({ recipients: 0, batches: 0 });

  // ── Send in BCC batches (<=90 per message to stay under Gmail's limit) ──
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailPass },
    pool: true,
    maxConnections: 1,
  });
  const html = announcementHtml();
  const subject = "🔴 FREE Live Mock Test — 19th June, 8 PM IST | AGRICET 2026";
  const CHUNK = 90;
  let sent = 0, batches = 0;
  for (let i = 0; i < emails.length; i += CHUNK) {
    const bcc = emails.slice(i, i + CHUNK);
    try {
      await transporter.sendMail({
        from: `"AgriCareer Academy" <${gmailUser}>`,
        to: gmailUser,
        bcc,
        subject,
        html,
      });
      sent += bcc.length;
      batches++;
    } catch (e) {
      console.error("send-announcement: batch failed", e);
    }
  }
  transporter.close();
  return NextResponse.json({ recipients: emails.length, sent, batches });
}
