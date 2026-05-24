import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

export const maxDuration = 10;

export async function POST(req: NextRequest) {
  try {
    const { userId } = await req.json().catch(() => ({}));
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });
    const order = await razorpay.orders.create({
      amount: 19900,
      currency: "INR",
      receipt: `book_${Date.now()}`,
      notes: {
        description: "AGRICET Objective Book – Lifetime Access",
        user_id: userId ?? "",
        type: "book",
      },
    });
    return NextResponse.json({ orderId: order.id, amount: order.amount, currency: order.currency });
  } catch (err) {
    console.error("Book order creation failed:", err);
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}
