import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export const maxDuration = 10;

export async function POST(req: NextRequest) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await req.json();

    // Verify HMAC signature only — Firestore update is done client-side
    const secret = process.env.RAZORPAY_KEY_SECRET!;
    const body = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(body)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return NextResponse.json({ success: false, error: "Invalid signature" }, { status: 400 });
    }

    return NextResponse.json({ success: true, paymentId: razorpay_payment_id });
  } catch (err) {
    console.error("Book payment verification failed:", err);
    return NextResponse.json({ success: false, error: "Verification failed" }, { status: 500 });
  }
}
