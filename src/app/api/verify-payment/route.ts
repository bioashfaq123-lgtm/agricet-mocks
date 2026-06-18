import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import Razorpay from "razorpay";
import { adminDb } from "@/lib/firebase-admin";

export const maxDuration = 10;

export async function POST(req: NextRequest) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await req.json();

    const secret = process.env.RAZORPAY_KEY_SECRET!;
    const body = `${razorpay_order_id}|${razorpay_payment_id}`;

    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(body)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return NextResponse.json({ success: false, error: "Invalid signature" }, { status: 400 });
    }

    // ── Server-authoritative grant ──────────────────────────────────────────
    // Grant access here via the Admin SDK, tied to the user_id stored in the
    // Razorpay ORDER notes at creation time (never a client-supplied uid). This
    // means access no longer depends on the client-side Firestore write, so the
    // Firestore security rules can safely forbid clients from setting isPaid
    // themselves. Wrapped so any failure still returns success — the webhook is
    // the backstop grant path. Idempotent (skips if already paid).
    try {
      if (adminDb && process.env.RAZORPAY_KEY_ID) {
        const razorpay = new Razorpay({ key_id: process.env.RAZORPAY_KEY_ID, key_secret: secret });
        const order = await razorpay.orders.fetch(razorpay_order_id);
        const notes = (order?.notes ?? {}) as Record<string, string>;
        const uid = notes.user_id;
        if (uid) {
          const ref = adminDb.collection("users").doc(uid);
          const snap = await ref.get();
          if (snap.exists && !snap.data()?.isPaid) {
            await ref.update({
              isPaid: true,
              paymentId: razorpay_payment_id,
              orderId: razorpay_order_id,
              paidAt: new Date().toISOString(),
              grantedBy: "verify",
            });
          }
        }
      }
    } catch (grantErr) {
      console.error("verify-payment: server-side grant failed (webhook will back it up):", grantErr);
    }

    return NextResponse.json({ success: true, paymentId: razorpay_payment_id });
  } catch (err) {
    console.error("Payment verification failed:", err);
    return NextResponse.json({ success: false, error: "Verification failed" }, { status: 500 });
  }
}
