import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export const maxDuration = 10;

// Generates a download token for a verified book purchaser.
// Token = HMAC-SHA256(userId + "|book", RAZORPAY_KEY_SECRET)
// The download route verifies this same token before serving the PDF.

export async function POST(req: NextRequest) {
  try {
    const { userId } = await req.json();
    if (!userId) {
      return NextResponse.json({ error: "Missing userId" }, { status: 400 });
    }

    const secret = process.env.RAZORPAY_KEY_SECRET ?? "";
    const token  = crypto
      .createHmac("sha256", secret)
      .update(`${userId}|book`)
      .digest("hex");

    return NextResponse.json({ token });
  } catch (err) {
    console.error("book-token error:", err);
    return NextResponse.json({ error: "Token generation failed" }, { status: 500 });
  }
}
