import { NextRequest, NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";
import admin from "firebase-admin";

const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL || "bioashfaq123@gmail.com";

export async function GET(req: NextRequest) {
  // Verify Firebase ID token from Authorization header
  const authHeader = req.headers.get("Authorization") ?? "";
  const idToken = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;

  if (!idToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const decoded = await admin.auth().verifyIdToken(idToken);
    if (decoded.email !== ADMIN_EMAIL) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
  } catch {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  if (!adminDb) {
    return NextResponse.json({ error: "Admin DB unavailable" }, { status: 500 });
  }

  const snap = await adminDb
    .collection("liveTestAttempts")
    .orderBy("completedAt", "desc")
    .get();

  const all = snap.docs.map(d => {
    const v = d.data();
    return {
      id: d.id,
      uid: v.uid ?? "",
      name: v.name ?? "—",
      email: v.email ?? "",
      score: v.score ?? 0,
      correct: v.correct ?? 0,
      wrong: v.wrong ?? 0,
      unattempted: v.unattempted ?? 0,
      total: v.total ?? 0,
      emailSent: v.emailSent ?? false,
      rating: typeof v.rating === "number" ? v.rating : null,
      completedAt: v.completedAt ? (v.completedAt as admin.firestore.Timestamp).toMillis() : null,
    };
  });

  // ── Safety de-duplication: keep ONE record per student (uid) so the rank list
  // never shows the same person twice, even if two attempt docs exist. Keep the
  // best (highest score; ties broken by the most recent attempt). Records with no
  // uid (legacy/anonymous) are kept as-is, keyed by their doc id. ──
  const bestByKey = new Map<string, typeof all[number]>();
  for (const r of all) {
    const key = r.uid ? `uid:${r.uid}` : `id:${r.id}`;
    const prev = bestByKey.get(key);
    if (!prev ||
        r.score > prev.score ||
        (r.score === prev.score && (r.completedAt ?? 0) > (prev.completedAt ?? 0))) {
      bestByKey.set(key, r);
    }
  }
  const docs = Array.from(bestByKey.values())
    .sort((a, b) => b.score - a.score || (b.completedAt ?? 0) - (a.completedAt ?? 0));

  return NextResponse.json({ docs });
}

// Delete ALL live-test attempt records (admin only). Used to reset the
// attendee/rank list before a new live test. Uses the Admin SDK (bypasses
// Firestore rules). Does not touch user docs or the gtliveAttempted flag.
export async function DELETE(req: NextRequest) {
  const authHeader = req.headers.get("Authorization") ?? "";
  const idToken = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;
  if (!idToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const decoded = await admin.auth().verifyIdToken(idToken);
    if (decoded.email !== ADMIN_EMAIL) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
  } catch {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  if (!adminDb) {
    return NextResponse.json({ error: "Admin DB unavailable" }, { status: 500 });
  }

  const snap = await adminDb.collection("liveTestAttempts").get();
  const docs = snap.docs;
  let deleted = 0;
  for (let i = 0; i < docs.length; i += 450) {
    const batch = adminDb.batch();
    docs.slice(i, i + 450).forEach(d => { batch.delete(d.ref); deleted++; });
    await batch.commit();
  }
  return NextResponse.json({ deleted });
}

// Manually add (or correct) one live-test attempt — admin only. For students
// whose attempt failed to save (closed tab / lost network) but whose score the
// admin has verified. Appears in the ranking like any other attempt.
export async function POST(req: NextRequest) {
  const authHeader = req.headers.get("Authorization") ?? "";
  const idToken = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;
  if (!idToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const decoded = await admin.auth().verifyIdToken(idToken);
    if (decoded.email !== ADMIN_EMAIL) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
  } catch {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
  if (!adminDb) {
    return NextResponse.json({ error: "Admin DB unavailable" }, { status: 500 });
  }

  const body = await req.json().catch(() => null) as
    | { name?: string; email?: string; score?: number; total?: number; correct?: number } | null;
  if (!body || !body.name || typeof body.score !== "number") {
    return NextResponse.json({ error: "name and score are required" }, { status: 400 });
  }

  const total = Number.isFinite(body.total) ? Math.round(body.total as number) : 100;
  const score = Math.max(0, Math.min(100, Math.round(body.score)));
  const correct = Number.isFinite(body.correct)
    ? Math.round(body.correct as number)
    : Math.round((score / 100) * total);
  const wrong = Math.max(0, total - correct);

  const ref = await adminDb.collection("liveTestAttempts").add({
    uid: "",
    name: body.name.trim(),
    email: (body.email ?? "").trim(),
    score, correct, wrong, unattempted: 0, total,
    answers: {},
    emailSent: false,
    manual: true,                 // flag: added by admin, not a real submission
    completedAt: admin.firestore.FieldValue.serverTimestamp(),
  });

  return NextResponse.json({ success: true, id: ref.id });
}
