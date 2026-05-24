import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import fs from "fs";
import path from "path";

export const dynamic    = "force-dynamic"; // never statically render — always runs server-side
export const maxDuration = 10;

// Client calls /api/download-book?token=<hmac>
// Token = HMAC-SHA256(userId + "|book", RAZORPAY_KEY_SECRET)
// This avoids server-side Firestore reads (which fail due to security rules)

export async function GET(req: NextRequest) {
  try {
    const token  = req.nextUrl.searchParams.get("token");
    const userId = req.nextUrl.searchParams.get("userId");

    if (!token || !userId) {
      return NextResponse.json({ error: "Missing parameters" }, { status: 400 });
    }

    // Verify the token — only someone who received it from verify-book-payment can have it
    const secret   = process.env.RAZORPAY_KEY_SECRET ?? "";
    const expected = crypto
      .createHmac("sha256", secret)
      .update(`${userId}|book`)
      .digest("hex");

    if (token !== expected) {
      return NextResponse.json({ error: "Invalid token" }, { status: 403 });
    }

    // Locate the PDF — try multiple paths for local dev vs Vercel
    const candidates = [
      path.join(process.cwd(), "private", "agricet-book.pdf"),
      path.join(process.cwd(), ".next", "server", "private", "agricet-book.pdf"),
      "/var/task/private/agricet-book.pdf",
    ];

    let fileBuffer: Buffer | null = null;
    for (const p of candidates) {
      if (fs.existsSync(p)) {
        fileBuffer = fs.readFileSync(p);
        break;
      }
    }

    if (!fileBuffer) {
      console.error("PDF not found. Tried:", candidates);
      return NextResponse.json({ error: "File not found on server" }, { status: 404 });
    }

    return new NextResponse(fileBuffer.buffer as ArrayBuffer, {
      status: 200,
      headers: {
        "Content-Type":        "application/pdf",
        "Content-Disposition": 'attachment; filename="AGRICET_Objective_Book.pdf"',
        "Content-Length":      fileBuffer.byteLength.toString(),
        "Cache-Control":       "private, no-cache",
      },
    });
  } catch (err) {
    console.error("Book download error:", err);
    return NextResponse.json({ error: "Download failed" }, { status: 500 });
  }
}
