import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

// Razorpay sends a webhook when payment is captured
// This ensures access is granted even if the user closes the browser after paying
export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const signature = req.headers.get("x-razorpay-signature") ?? "";
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET ?? "";

    // Verify webhook signature
    if (secret) {
      const expected = crypto
        .createHmac("sha256", secret)
        .update(body)
        .digest("hex");
      if (expected !== signature) {
        return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
      }
    }

    const event = JSON.parse(body);

    // Only process payment.captured events
    if (event.event !== "payment.captured") {
      return NextResponse.json({ status: "ignored" });
    }

    const payment = event.payload?.payment?.entity;
    if (!payment) return NextResponse.json({ error: "No payment entity" }, { status: 400 });

    const userId    = payment.notes?.user_id;
    const paymentId = payment.id;
    const orderId   = payment.order_id;

    if (!userId) {
      console.warn("Webhook: no user_id in notes for payment", paymentId);
      return NextResponse.json({ status: "no_user_id" });
    }

    // Grant access if not already granted
    const userRef  = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists() && !userSnap.data().isPaid) {
      await updateDoc(userRef, {
        isPaid:    true,
        paymentId,
        orderId,
        paidAt:    new Date().toISOString(),
        grantedBy: "webhook",
      });
      console.log(`Webhook: granted access to user ${userId} via payment ${paymentId}`);
    }

    return NextResponse.json({ status: "ok" });
  } catch (err) {
    console.error("Webhook error:", err);
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}
