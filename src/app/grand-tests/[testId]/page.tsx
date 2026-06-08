"use client";
import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ChevronLeft, ChevronRight, CheckCircle, X, AlertCircle,
  Clock, LayoutGrid, Trophy, RotateCcw,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { GRAND_TESTS, GrandTestQuestion } from "@/data/grandTestMeta";
import { GRAND_TEST_1  } from "@/data/grandTest1";
import { GRAND_TEST_2  } from "@/data/grandTest2";
import { GRAND_TEST_3  } from "@/data/grandTest3";
import { GRAND_TEST_4  } from "@/data/grandTest4";
import { GRAND_TEST_5  } from "@/data/grandTest5";
import { GRAND_TEST_6  } from "@/data/grandTest6";
import { GRAND_TEST_7  } from "@/data/grandTest7";
import { GRAND_TEST_8  } from "@/data/grandTest8";
import { GRAND_TEST_9  } from "@/data/grandTest9";
import { GRAND_TEST_10 } from "@/data/grandTest10";
import { GRAND_TEST_LIVE } from "@/data/grandTestLive";

const TEST_DATA: Record<string, GrandTestQuestion[]> = {
  gt1:    GRAND_TEST_1,
  gt2:    GRAND_TEST_2,
  gt3:    GRAND_TEST_3,
  gt4:    GRAND_TEST_4,
  gt5:    GRAND_TEST_5,
  gt6:    GRAND_TEST_6,
  gt7:    GRAND_TEST_7,
  gt8:    GRAND_TEST_8,
  gt9:    GRAND_TEST_9,
  gt10:   GRAND_TEST_10,
  gtlive: GRAND_TEST_LIVE,
};

const FREE_IDS: string[] = ["gtlive"]; // Live mock test is free for all

// subject → short colour label
const SUBJECT_COLORS: Record<string, string> = {
  "agronomy":               "bg-green-100 text-green-700",
  "kharif-crops":           "bg-lime-100 text-lime-700",
  "rabi-crops":             "bg-yellow-100 text-yellow-700",
  "genetics":               "bg-purple-100 text-purple-700",
  "seed-technology":        "bg-teal-100 text-teal-700",
  "soil-science":           "bg-amber-100 text-amber-700",
  "soil-fertility":         "bg-orange-100 text-orange-700",
  "entomology":             "bg-pink-100 text-pink-700",
  "crop-pests":             "bg-rose-100 text-rose-700",
  "farm-machinery":         "bg-cyan-100 text-cyan-700",
  "plant-pathology":        "bg-red-100 text-red-700",
  "agricultural-economics": "bg-blue-100 text-blue-700",
  "surveying":              "bg-indigo-100 text-indigo-700",
  "forestry":               "bg-emerald-100 text-emerald-700",
  "horticulture":           "bg-fuchsia-100 text-fuchsia-700",
  "extension":              "bg-sky-100 text-sky-700",
  "agro-meteorology":       "bg-violet-100 text-violet-700",
  "english":                "bg-stone-100 text-stone-700",
};

function formatSubject(s: string) {
  return s.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
}

function formatTime(secs: number) {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

// ── Live test window (IST = UTC+5:30) ───────────────────────────────────────
// June 8 2026  20:00 IST → UTC 14:30  |  22:00 IST → UTC 16:30  (extended due to live technical issue)
const LIVE_START_UTC = new Date("2026-06-08T14:30:00Z"); // 8 PM IST
const LIVE_END_UTC   = new Date("2026-06-08T18:30:00Z"); // 12:00 AM IST (re-extended for late joiners)

function getLiveStatus(): "before" | "live" | "ended" {
  const now = new Date();
  if (now < LIVE_START_UTC) return "before";
  if (now > LIVE_END_UTC)   return "ended";
  return "live";
}

function useCountdown(target: Date) {
  const [diff, setDiff] = useState(() => Math.max(0, target.getTime() - Date.now()));
  useEffect(() => {
    const t = setInterval(() => setDiff(Math.max(0, target.getTime() - Date.now())), 1000);
    return () => clearInterval(t);
  }, [target]);
  const totalSecs = Math.floor(diff / 1000);
  const d = Math.floor(totalSecs / 86400);
  const h = Math.floor((totalSecs % 86400) / 3600);
  const m = Math.floor((totalSecs % 3600) / 60);
  const s = totalSecs % 60;
  return { d, h, m, s };
}

export default function GrandTestPage() {
  const params   = useParams();
  const router   = useRouter();
  const { user, userData, loading } = useAuth();
  const testId   = params.testId as string;

  const meta      = GRAND_TESTS.find(t => t.id === testId);
  const questions = TEST_DATA[testId] ?? [];

  const isFree    = FREE_IDS.includes(testId);
  const isLive    = testId === "gtlive";
  const isPaid    = userData?.isPaid ?? false;
  const liveStatus = getLiveStatus();

  const [currentIdx, setCurrentIdx]   = useState(0);
  const [answers, setAnswers]         = useState<Record<string, number>>({});
  const [finished, setFinished]       = useState(false);
  const [showNavigator, setShowNavigator] = useState(false);
  const [timeLeft, setTimeLeft]       = useState((meta?.duration ?? 100) * 60);

  const countdown = useCountdown(LIVE_START_UTC);

  // Timer
  useEffect(() => {
    if (finished) return;
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) { setFinished(true); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [finished]);

  // ── For the FREE LIVE mock test only: persist the attempt + email results ──
  // NOTE: must be declared unconditionally at top level (Rules of Hooks) —
  // calling useEffect inside `if (finished) {...}` caused a hook-count mismatch
  // ("Rendering more hooks than during the previous render") which crashed the
  // page with "Application error: a client-side exception has occurred" for
  // every student as soon as they finished the test.
  useEffect(() => {
    if (!finished || testId !== "gtlive" || !user) return;
    let cancelled = false;
    (async () => {
      try {
        const attemptedNow = Object.keys(answers).length;
        const correct   = questions.filter(q => answers[q.id] === q.correct).length;
        const wrong     = attemptedNow - correct;
        const unattempted = questions.length - attemptedNow;
        const score     = Math.round((correct / questions.length) * 100);

        const name = userData?.name ?? user.displayName ?? "Student";
        const to   = userData?.email ?? user.email ?? "";

        // ── Primary path: server-side API persists the attempt (via Admin SDK,
        // bypassing Firestore security rules) AND emails the result. This must not
        // depend on the client being able to write directly to Firestore — direct
        // client writes can silently fail (permission-denied) under strict rules,
        // which would otherwise block both the save AND the email. ──
        if (to) {
          try {
            const res = await fetch("/api/send-live-results", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                to,
                name,
                uid: user.uid,
                score, correct, wrong, unattempted,
                total: questions.length,
                answers,
                questions: questions.map(q => ({
                  qNo: q.qNo,
                  question: q.question,
                  options: q.options,
                  correct: q.correct,
                  chosen: answers[q.id] ?? null,
                  explanation: q.explanation,
                })),
              }),
            });
            if (!res.ok) console.error("send-live-results API returned non-OK:", res.status);
          } catch (apiErr) {
            console.error("send-live-results API call failed:", apiErr);
          }
        }
        if (cancelled) return;

        // ── Best-effort client-side write as a fallback (in case the Admin SDK
        // is ever unavailable). Wrapped separately so its failure can never block
        // the API call / email above. ──
        try {
          await addDoc(collection(db, "liveTestAttempts"), {
            uid: user.uid,
            name,
            email: to,
            score, correct, wrong, unattempted,
            total: questions.length,
            answers,
            emailSent: true,
            completedAt: serverTimestamp(),
          });
        } catch (writeErr) {
          console.error("Client-side liveTestAttempts write failed (expected if rules restrict it):", writeErr);
        }
      } catch (e) {
        console.error("Failed to save/email live test result:", e);
      }
    })();
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished]);

  // Auth / access guard — wait for Firebase to finish loading first
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin w-10 h-10 border-4 border-primary-600 border-t-transparent rounded-full" />
      </div>
    );
  }
  if (!user && !isFree) { router.push("/login"); return null; }
  if (user && !isPaid && !isFree) { router.push("/grand-tests"); return null; }

  // ── Date-gate for live test ──────────────────────────────────────────────
  if (isLive && liveStatus === "before") {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="text-6xl mb-4">⏳</div>
          <h1 className="text-2xl font-black text-white mb-1">FREE Live Mock Test</h1>
          <p className="text-gray-400 text-sm mb-6">AGRICET 2026 · All Telangana Rank · 100 Questions</p>

          <div className="bg-gray-800 rounded-2xl p-6 mb-6 border border-gray-700">
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">Test starts in</p>
            <div className="grid grid-cols-4 gap-3">
              {[{v: countdown.d, l:"Days"},{v: countdown.h, l:"Hours"},{v: countdown.m, l:"Mins"},{v: countdown.s, l:"Secs"}].map(({v,l}) => (
                <div key={l} className="bg-gray-900 rounded-xl p-3 border border-gray-600">
                  <div className="text-3xl font-black text-green-400">{String(v).padStart(2,"0")}</div>
                  <div className="text-gray-500 text-xs mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-green-900/30 border border-green-700 rounded-xl p-4 mb-6 text-left space-y-2">
            <div className="flex items-center gap-2 text-green-400 text-sm">
              <span>📅</span><span className="font-semibold">Date: 8th June 2026 (Monday)</span>
            </div>
            <div className="flex items-center gap-2 text-green-400 text-sm">
              <span>⏰</span><span className="font-semibold">Time: 8:00 PM – 12:00 AM IST</span>
            </div>
            <div className="flex items-center gap-2 text-green-400 text-sm">
              <span>📝</span><span className="font-semibold">100 Questions · 100 Minutes</span>
            </div>
            <div className="flex items-center gap-2 text-green-400 text-sm">
              <span>🏆</span><span className="font-semibold">All Telangana Ranking</span>
            </div>
            <div className="flex items-center gap-2 text-green-400 text-sm">
              <span>💰</span><span className="font-semibold">Absolutely FREE</span>
            </div>
          </div>

          <Link href="/grand-tests" className="text-sm text-gray-500 hover:text-gray-300">
            ← Back to Grand Tests
          </Link>
        </div>
      </div>
    );
  }

  if (isLive && liveStatus === "ended") {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="text-6xl mb-4">🏁</div>
          <h1 className="text-2xl font-black text-white mb-2">Live Mock Test Has Ended</h1>
          <p className="text-gray-400 text-sm mb-6">
            The FREE Live Mock Test conducted on 8th June 2026 has concluded.<br/>
            Thank you to all students who participated!
          </p>
          <div className="bg-gray-800 rounded-xl p-4 mb-6 text-left text-sm text-gray-300 space-y-1 border border-gray-700">
            <p>📅 Conducted: 8th June 2026, 8 PM – 12:00 AM IST</p>
            <p>📝 100 Questions · 100 Minutes</p>
            <p>🌐 agricet-mocks-8mry.vercel.app</p>
          </div>
          <Link href="/grand-tests" className="btn-primary inline-block px-6 py-3">
            Explore More Tests →
          </Link>
        </div>
      </div>
    );
  }
  if (!meta || questions.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="card p-8 max-w-md w-full text-center">
          <div className="text-5xl mb-4">🔧</div>
          <p className="text-gray-500 mb-4">Test not found.</p>
          <Link href="/grand-tests" className="btn-primary block">← Back to Grand Tests</Link>
        </div>
      </div>
    );
  }

  const current   = questions[currentIdx];

  // Defensive guard — if for any reason the current question can't be resolved
  // (bad index, empty data, race condition on slow connections), show a
  // friendly loading state instead of crashing with "Application error".
  if (!current) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin w-10 h-10 border-4 border-primary-600 border-t-transparent rounded-full" />
      </div>
    );
  }

  const answered  = answers[current?.id];
  const attempted = Object.keys(answers).length;

  const handleAnswer = useCallback((idx: number) => {
    if (answers[current.id] !== undefined) return;
    setAnswers(prev => ({ ...prev, [current.id]: idx }));
  }, [answers, current]);

  // ── Score Screen ──────────────────────────────────────────────────────────
  if (finished) {
    const correct   = questions.filter(q => answers[q.id] === q.correct).length;
    const wrong     = attempted - correct;
    const score     = Math.round((correct / questions.length) * 100);
    const unattempted = questions.length - attempted;

    const grade =
      score >= 85 ? "🏆 Excellent!" :
      score >= 70 ? "🎉 Great Work!" :
      score >= 55 ? "👍 Good Effort!" :
      score >= 40 ? "📚 Keep Practising!" :
                    "💪 Don't Give Up!";

    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="card p-8 max-w-lg w-full">
          <div className="text-center mb-6">
            <div className="text-5xl mb-2">
              {score >= 70 ? "🏆" : score >= 50 ? "📊" : "📚"}
            </div>
            <h2 className="text-xl font-black text-gray-900">{meta.title} — Completed!</h2>
            <p className="text-gray-500 text-sm mt-1">{grade}</p>
          </div>

          {/* Score ring */}
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 rounded-full border-8 border-primary-200 flex flex-col items-center justify-center"
              style={{ borderColor: score >= 70 ? "#16a34a" : score >= 50 ? "#d97706" : "#dc2626" }}>
              <span className="text-3xl font-black text-gray-900">{score}%</span>
              <span className="text-xs text-gray-500">{correct}/{questions.length}</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-green-50 rounded-xl p-3 text-center">
              <div className="text-2xl font-black text-green-700">{correct}</div>
              <div className="text-xs text-gray-500 mt-0.5">Correct</div>
            </div>
            <div className="bg-red-50 rounded-xl p-3 text-center">
              <div className="text-2xl font-black text-red-600">{wrong}</div>
              <div className="text-xs text-gray-500 mt-0.5">Wrong</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <div className="text-2xl font-black text-gray-500">{unattempted}</div>
              <div className="text-xs text-gray-500 mt-0.5">Skipped</div>
            </div>
          </div>

          {/* Time info */}
          <div className="bg-blue-50 rounded-xl p-3 text-center mb-6">
            <span className="text-sm text-blue-700 font-medium">
              Time used: {formatTime((meta.duration * 60) - timeLeft)} / {formatTime(meta.duration * 60)}
            </span>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => {
                setAnswers({}); setCurrentIdx(0); setFinished(false);
                setTimeLeft(meta.duration * 60);
              }}
              className="btn-outline w-full flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" /> Retry Test
            </button>
            <Link href="/grand-tests" className="btn-primary w-full text-center flex items-center justify-center gap-2">
              <Trophy className="w-4 h-4" /> All Grand Tests
            </Link>
            <Link href="/dashboard" className="block text-center text-gray-400 text-sm hover:underline">
              ← Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ── Main Test UI ──────────────────────────────────────────────────────────
  const subjectColor = SUBJECT_COLORS[current?.subject] ?? "bg-gray-100 text-gray-600";
  const isLastQ      = currentIdx === questions.length - 1;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Sticky Top Bar ── */}
      <div className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between gap-2">
          {/* Left */}
          <div className="flex items-center gap-2 min-w-0">
            <Link href="/grand-tests" className="text-gray-400 hover:text-gray-600 flex-shrink-0">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <span className="text-sm font-bold text-gray-700 truncate hidden sm:block">
              🏆 {meta.title}
            </span>
          </div>

          {/* Centre */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500 font-medium">{attempted}/{questions.length}</span>
            <div className={`flex items-center gap-1.5 font-mono font-bold px-3 py-1.5 rounded-lg text-sm ${
              timeLeft < 600 ? "bg-red-100 text-red-600 animate-pulse" : "bg-primary-100 text-primary-700"
            }`}>
              <Clock className="w-4 h-4" />{formatTime(timeLeft)}
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowNavigator(v => !v)}
              className="flex items-center gap-1.5 text-gray-500 hover:text-primary-600 text-sm font-medium px-2 py-1.5 rounded-lg hover:bg-primary-50"
              title="Question Navigator"
            >
              <LayoutGrid className="w-4 h-4" />
              <span className="hidden sm:inline">Navigator</span>
            </button>
            <button
              onClick={() => setFinished(true)}
              className="bg-red-100 hover:bg-red-200 text-red-700 font-semibold px-3 py-1.5 rounded-lg text-sm transition-colors"
            >
              Submit
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-gray-100">
          <div
            className="h-full bg-primary-500 transition-all duration-300"
            style={{ width: `${(attempted / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* ── Layout ── */}
      <div className="max-w-5xl mx-auto px-4 py-5 flex gap-5">

        {/* ── Question Panel ── */}
        <div className="flex-1 min-w-0">
          <div className="card p-6">
            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1 bg-primary-100 text-primary-700 font-bold text-sm px-3 py-1 rounded-full">
                Q {currentIdx + 1}
              </span>
              <span className="text-gray-400 text-sm">of {questions.length}</span>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${subjectColor}`}>
                {formatSubject(current?.subject ?? "")}
              </span>
            </div>

            {/* Question text */}
            <p className="text-gray-900 font-semibold text-base sm:text-lg leading-relaxed mb-3">
              {current?.question}
            </p>

            {/* Optional match-the-following table */}
            {current?.matchTable && (
              <div className="overflow-x-auto mb-6 rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-primary-50">
                      {current.matchTable.headers.map((h, i) => (
                        <th key={i} className="text-left font-bold text-primary-800 px-3 py-2.5 border-b border-gray-200">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {current.matchTable.rows.map((row, ri) => (
                      <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        {row.map((cell, ci) => (
                          <td key={ci} className="px-3 py-2.5 text-gray-700 border-b border-gray-100 last:border-b-0">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Options */}
            <div className="space-y-3">
              {current?.options?.map((opt, idx) => {
                let cls = "w-full text-left flex items-start gap-3 px-4 py-3.5 rounded-xl border-2 transition-all cursor-pointer ";
                if (answered === undefined) {
                  cls += "border-gray-200 hover:border-primary-400 hover:bg-primary-50 bg-white";
                } else if (idx === current.correct) {
                  cls += "border-green-400 bg-green-50 text-green-900";
                } else if (idx === answered && idx !== current.correct) {
                  cls += "border-red-400 bg-red-50 text-red-900";
                } else {
                  cls += "border-gray-100 bg-gray-50 opacity-50";
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    disabled={answered !== undefined}
                    className={cls}
                  >
                    <span className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 ${
                      answered === undefined ? "border-gray-300 text-gray-500"
                      : idx === current.correct ? "border-green-500 text-green-700 bg-green-100"
                      : idx === answered ? "border-red-500 text-red-700 bg-red-100"
                      : "border-gray-200 text-gray-400"
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="flex-1 leading-relaxed text-sm sm:text-base pt-0.5">{opt}</span>
                    {answered !== undefined && idx === current.correct && (
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    )}
                    {answered !== undefined && idx === answered && idx !== current.correct && (
                      <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            {answered !== undefined && current?.explanation && (
              <div className="mt-5 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span className="text-blue-700 font-bold text-sm">Explanation</span>
                </div>
                <p className="text-blue-900 text-sm leading-relaxed">{current.explanation}</p>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
              <button
                onClick={() => setCurrentIdx(i => Math.max(0, i - 1))}
                disabled={currentIdx === 0}
                className="flex items-center gap-2 text-gray-500 hover:text-primary-600 disabled:opacity-30 text-sm font-semibold px-3 py-2 rounded-xl hover:bg-primary-50 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>

              <div className="flex items-center gap-2">
                {answered === undefined && (
                  <button
                    onClick={() => setCurrentIdx(i => Math.min(questions.length - 1, i + 1))}
                    className="text-gray-400 hover:text-gray-600 text-sm px-3 py-2 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    Skip
                  </button>
                )}
                {!isLastQ ? (
                  <button
                    onClick={() => setCurrentIdx(i => i + 1)}
                    className="btn-primary py-2 px-5 text-sm flex items-center gap-2"
                  >
                    Next <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => setFinished(true)}
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-5 rounded-xl text-sm flex items-center gap-2 transition-colors"
                  >
                    <CheckCircle className="w-4 h-4" /> Finish Test
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── Navigator Panel (desktop always visible; mobile toggled) ── */}
        <div className={`${showNavigator ? "block" : "hidden"} lg:block w-64 flex-shrink-0`}>
          <div className="card p-4 sticky top-20">
            <h3 className="font-bold text-gray-700 text-sm mb-3 flex items-center gap-2">
              <LayoutGrid className="w-4 h-4" /> Questions
            </h3>

            {/* Legend */}
            <div className="flex flex-wrap gap-2 mb-3 text-xs">
              <span className="flex items-center gap-1 text-gray-500"><span className="w-3 h-3 rounded bg-green-400 inline-block" />Correct</span>
              <span className="flex items-center gap-1 text-gray-500"><span className="w-3 h-3 rounded bg-red-400 inline-block" />Wrong</span>
              <span className="flex items-center gap-1 text-gray-500"><span className="w-3 h-3 rounded bg-gray-200 inline-block" />Not attempted</span>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-5 gap-1.5 max-h-96 overflow-y-auto pr-1">
              {questions.map((q, idx) => {
                const ans = answers[q.id];
                let btnCls = "w-9 h-9 rounded-lg text-xs font-bold transition-all ";
                if (idx === currentIdx) {
                  btnCls += "ring-2 ring-primary-500 ring-offset-1 ";
                }
                if (ans === undefined) {
                  btnCls += "bg-gray-100 text-gray-500 hover:bg-primary-100 hover:text-primary-600";
                } else if (ans === q.correct) {
                  btnCls += "bg-green-400 text-white";
                } else {
                  btnCls += "bg-red-400 text-white";
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => { setCurrentIdx(idx); setShowNavigator(false); }}
                    className={btnCls}
                    title={`Q${idx + 1} — ${formatSubject(q.subject)}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {/* Summary stats */}
            <div className="mt-3 pt-3 border-t border-gray-100 grid grid-cols-3 gap-2 text-center text-xs">
              <div>
                <div className="font-black text-green-600">
                  {questions.filter(q => answers[q.id] === q.correct).length}
                </div>
                <div className="text-gray-400">Correct</div>
              </div>
              <div>
                <div className="font-black text-red-500">
                  {Object.keys(answers).length - questions.filter(q => answers[q.id] === q.correct).length}
                </div>
                <div className="text-gray-400">Wrong</div>
              </div>
              <div>
                <div className="font-black text-gray-400">
                  {questions.length - Object.keys(answers).length}
                </div>
                <div className="text-gray-400">Left</div>
              </div>
            </div>

            <button
              onClick={() => setFinished(true)}
              className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-xl text-sm transition-colors"
            >
              Submit Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
