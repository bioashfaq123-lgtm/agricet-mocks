import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function POST(req: NextRequest) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, userId } = await req.json();

    if (!userId) {
      return NextResponse.json({ success: false, error: "Missing userId" }, { status: 400 });
    }

    // Verify HMAC signature
    const secret = process.env.RAZORPAY_KEY_SECRET!;
    const body = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(body)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return NextResponse.json({ success: false, error: "Invalid signature" }, { status: 400 });
    }

    // Grant book access in Firestore
    await updateDoc(doc(db, "users", userId), {
      isBookPaid: true,
      bookPaymentId: razorpay_payment_id,
      bookOrderId:   razorpay_order_id,
      bookPaidAt:    new Date().toISOString(),
    });

    return NextResponse.json({ success: true, paymentId: razorpay_payment_id });
  } catch (err) {
    console.error("Book payment verification failed:", err);
    return NextResponse.json({ success: false, error: "Verification failed" }, { status: 500 });
  }
}
