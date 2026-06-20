import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";

export const dynamic = "force-dynamic";

const TOTAL_DEFAULT = 100;

// Public ranking of the live mock test. Returns each participant's rank, name
// and score (NO email/uid — privacy). Read via the Admin SDK because the
// liveTestAttempts collection is admin-only under the Firestore rules.
export async function GET() {
  if (!adminDb) return NextResponse.json({ error: "DB unavailable" }, { status: 500 });
  try {
    const snap = await adminDb.collection("liveTestAttempts").get();
    const rows = snap.docs.map(d => {
      const v = d.data();
      return {
        name: (v.name ?? "Student").toString().trim() || "Student",
        score: typeof v.score === "number" ? v.score : 0,
        correct: typeof v.correct === "number" ? v.correct : 0,
        wrong: typeof v.wrong === "number" ? v.wrong : 0,
        total: typeof v.total === "number" ? v.total : TOTAL_DEFAULT,
      };
    });
    rows.sort((a, b) => b.score - a.score || b.correct - a.correct || a.wrong - b.wrong);
    const ranking = rows.map((r, i) => ({ rank: i + 1, ...r }));
    return NextResponse.json({ count: ranking.length, ranking });
  } catch (e) {
    console.error("live-ranking error", e);
    return NextResponse.json({ error: "Failed to load ranking" }, { status: 500 });
  }
}
