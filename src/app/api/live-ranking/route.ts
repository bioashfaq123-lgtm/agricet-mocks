import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";
import admin from "firebase-admin";
import { LIVE_START_UTC, LIVE_END_UTC } from "@/lib/liveTest";

// Public, read-only OVERALL RANKING for the FREE live mock test.
// - Published ONLY after the live window closes (so it can't leak during the
//   one-time attempt).
// - Scoped to attempts completed within the current live window, so attempts
//   from any previous live test cannot appear (no manual clearing needed).
// - Exposes name + score only — never emails or uids.
export const dynamic = "force-dynamic";

export async function GET() {
  if (new Date() < LIVE_END_UTC) {
    return NextResponse.json({ open: false, docs: [] });
  }
  if (!adminDb) {
    return NextResponse.json({ open: true, docs: [] });
  }

  try {
    const snap = await adminDb.collection("liveTestAttempts").get();
    const startMs = LIVE_START_UTC.getTime();
    const endMs = LIVE_END_UTC.getTime();

    const all = snap.docs.map(d => {
      const v = d.data();
      const ms = v.completedAt ? (v.completedAt as admin.firestore.Timestamp).toMillis() : null;
      return {
        id: d.id,
        uid: v.uid ?? "",
        name: v.name ?? "—",
        score: v.score ?? 0,
        correct: v.correct ?? 0,
        total: v.total ?? 0,
        completedAt: ms,
      };
    // Keep every attempt EXCEPT ones that clearly belong to a previous live test
    // (i.e. a real timestamp from before this window opened). Attempts with a
    // missing/unresolved timestamp, or finished right at the deadline, are kept
    // so no genuine attendee is ever dropped from the results.
    }).filter(r => r.completedAt === null || r.completedAt >= startMs);
    void endMs;

    // One row per student (keep best score; ties broken by the earliest attempt).
    const best = new Map<string, typeof all[number]>();
    for (const r of all) {
      const key = r.uid ? `uid:${r.uid}` : `id:${r.id}`;
      const prev = best.get(key);
      if (!prev || r.score > prev.score ||
          (r.score === prev.score && (r.completedAt ?? 0) < (prev.completedAt ?? 0))) {
        best.set(key, r);
      }
    }

    const ranked = Array.from(best.values())
      .sort((a, b) => b.score - a.score || b.correct - a.correct || (a.completedAt ?? 0) - (b.completedAt ?? 0))
      .map((r, i) => ({ rank: i + 1, name: r.name, score: r.score, correct: r.correct, total: r.total }));

    return NextResponse.json({ open: true, docs: ranked });
  } catch {
    return NextResponse.json({ open: true, docs: [] });
  }
}
