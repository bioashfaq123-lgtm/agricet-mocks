import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { adminDb } from "@/lib/firebase-admin";

// Razorpay sends a webhook when payment is captured.
// Uses Firebase Admin SDK (bypasses Firestore security rules).
// Falls back to logging-only if Admin SDK is not configured.
export async function POST(req: NextRequest) {
  try {
    const body      = await req.text();
    const signature = req.headers.get("x-razorpay-signature") ?? "";
    const secret    = process.env.RAZORPAY_WEBHOOK_SECRET ?? "";

    // ── 1. Verify Razorpay signature ──────────────────────────────────────────
    if (secret) {
      const expected = crypto
        .createHmac("sha256", secret)
        .update(body)
        .digest("hex");
      if (expected !== signature) {
        console.error("Webhook: invalid signature");
        return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
      }
    }

    const event = JSON.parse(body);
    console.log("Webhook received:", event.event);

    // ── 2. Only process payment.captured ─────────────────────────────────────
    if (event.event !== "payment.captured") {
      return NextResponse.json({ status: "ignored" });
    }

    const payment = event.payload?.payment?.entity;
    if (!payment) {
      return NextResponse.json({ error: "No payment entity" }, { status: 400 });
    }

    const userId    = payment.notes?.user_id as string | undefined;
    const type      = payment.notes?.type as string | undefined; // "book" or undefined
    const paymentId = payment.id as string;
    const orderId   = payment.order_id as string;

    if (!userId) {
      console.warn("Webhook: no user_id in notes for payment", paymentId);
      return NextResponse.json({ status: "no_user_id" });
    }

    // ── 3. Grant access via Admin SDK (bypasses Firestore security rules) ─────
    if (!adminDb) {
      // Admin SDK not configured — log the payment so admin can grant manually
      console.warn(
        `Webhook: Admin SDK not configured. Manual grant needed — userId=${userId} paymentId=${paymentId} type=${type}`
      );
      return NextResponse.json({ status: "ok_logged_only" });
    }

    const userRef  = adminDb.collection("users").doc(userId);
    const userSnap = await userRef.get();

    if (!userSnap.exists) {
      console.warn(`Webhook: user ${userId} not found in Firestore`);
      return NextResponse.json({ status: "user_not_found" });
    }

    const userData = userSnap.data() ?? {};

    if (type === "book") {
      // Book purchase
      if (!userData.isBookPaid) {
        await userRef.update({
          isBookPaid:    true,
          bookPaymentId: paymentId,
          bookOrderId:   orderId,
          bookPaidAt:    new Date().toISOString(),
          bookGrantedBy: "webhook",
        });
        console.log(`Webhook: granted BOOK access to user ${userId} via ${paymentId}`);
      } else {
        console.log(`Webhook: user ${userId} already has book access — skipped`);
      }
    } else {
      // Subscription / mock test access
      if (!userData.isPaid) {
        await userRef.update({
          isPaid:    true,
          paymentId,
          orderId,
          paidAt:    new Date().toISOString(),
          grantedBy: "webhook",
        });
        console.log(`Webhook: granted SUBSCRIPTION access to user ${userId} via ${paymentId}`);
      } else {
        console.log(`Webhook: user ${userId} already has subscription — skipped`);
      }
    }

    return NextResponse.json({ status: "ok" });
  } catch (err) {
    console.error("Webhook error:", err);
    // Always return 200 to prevent Razorpay from retrying/deactivating
    return NextResponse.json({ status: "error_logged" }, { status: 200 });
  }
}
