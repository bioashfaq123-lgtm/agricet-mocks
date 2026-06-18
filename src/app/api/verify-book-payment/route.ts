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

    // ── Server-authoritative grant (book access) ────────────────────────────
    // Grants isBookPaid via the Admin SDK, tied to the user_id in the Razorpay
    // ORDER notes (not a client-supplied uid), so access does not depend on the
    // client-side write and the Firestore rules can forbid clients from setting
    // isBookPaid. Wrapped so failure still returns success (webhook backs it up).
    try {
      if (adminDb && process.env.RAZORPAY_KEY_ID) {
        const razorpay = new Razorpay({ key_id: process.env.RAZORPAY_KEY_ID, key_secret: secret });
        const order = await razorpay.orders.fetch(razorpay_order_id);
        const notes = (order?.notes ?? {}) as Record<string, string>;
        const uid = notes.user_id;
        if (uid) {
          const ref = adminDb.collection("users").doc(uid);
          const snap = await ref.get();
          if (snap.exists && !snap.data()?.isBookPaid) {
            await ref.update({
              isBookPaid: true,
              bookPaymentId: razorpay_payment_id,
              bookOrderId: razorpay_order_id,
              bookPaidAt: new Date().toISOString(),
              bookGrantedBy: "verify",
            });
          }
        }
      }
    } catch (grantErr) {
      console.error("verify-book-payment: server-side grant failed (webhook will back it up):", grantErr);
    }

    return NextResponse.json({ success: true, paymentId: razorpay_payment_id });
  } catch (err) {
    console.error("Book payment verification failed:", err);
    return NextResponse.json({ success: false, error: "Verification failed" }, { status: 500 });
  }
}
