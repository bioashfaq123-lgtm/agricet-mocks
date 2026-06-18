import { NextRequest, NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";

export const maxDuration = 15;

// Stores a student's 1–5 star rating of the live mock test. Mirrors the
// send-live-results pattern (uid in body, Admin SDK write, no token) so it works
// even under strict Firestore rules. Writes the rating onto the student's
// liveTestAttempts record (so the admin dashboard can show an average) and also
// onto the user doc as a backup.
export async function POST(req: NextRequest) {
  try {
    const { uid, rating } = (await req.json().catch(() => ({}))) as { uid?: string; rating?: number };
    const r = Math.round(Number(rating));
    if (!uid || !Number.isFinite(r) || r < 1 || r > 5) {
      return NextResponse.json({ error: "Invalid rating" }, { status: 400 });
    }
    if (!adminDb) return NextResponse.json({ error: "DB unavailable" }, { status: 500 });
    const now = new Date().toISOString();

    try {
      const snap = await adminDb.collection("liveTestAttempts").where("uid", "==", uid).limit(1).get();
      if (!snap.empty) await snap.docs[0].ref.set({ rating: r, ratingAt: now }, { merge: true });
    } catch (e) {
      console.error("live-rating: attempt update failed", e);
    }
    try {
      await adminDb.collection("users").doc(uid).set({ gtliveRating: r, gtliveRatingAt: now }, { merge: true });
    } catch {
      /* backup write — ignore */
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("live-rating error", e);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
