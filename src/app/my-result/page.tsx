"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/contexts/AuthContext";
import { GRAND_TEST_13 } from "@/data/grandTest13";
import { getTe } from "@/data/translations";
import { getLiveStatus } from "@/lib/liveTest";
import { BookOpen, CheckCircle, XCircle, AlertCircle, Trophy, ArrowLeft, Lock } from "lucide-react";

const letter = (i: number) => String.fromCharCode(65 + i);

interface Attempt {
  score: number;
  correct: number;
  wrong: number;
  unattempted: number;
  total: number;
  answers: Record<string, number>;
}

export default function MyResultPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const [attempt, setAttempt]   = useState<Attempt | null>(null);
  const [fetching, setFetching] = useState(true);
  // Personal answer review unlocks only after the live window closes.
  const [reviewOpen, setReviewOpen] = useState(false);

  useEffect(() => { setReviewOpen(getLiveStatus() === "ended"); }, []);

  useEffect(() => {
    if (loading) return;
    if (!user) { router.push("/login"); return; }
    (async () => {
      try {
        const snap = await getDocs(
          query(collection(db, "liveTestAttempts"), where("uid", "==", user.uid))
        );
        if (!snap.empty) {
          // A student may (rarely) have more than one attempt doc — show the best.
          const docs = snap.docs.map(d => d.data() as Partial<Attempt>);
          docs.sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
          const d = docs[0];
          setAttempt({
            score: d.score ?? 0,
            correct: d.correct ?? 0,
            wrong: d.wrong ?? 0,
            unattempted: d.unattempted ?? 0,
            total: d.total ?? GRAND_TEST_13.length,
            answers: d.answers ?? {},
          });
        }
      } catch (e) {
        console.error("Failed to load your result:", e);
      } finally {
        setFetching(false);
      }
    })();
  }, [user, loading, router]);

  if (loading || fetching) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin w-10 h-10 border-4 border-primary-600 border-t-transparent rounded-full" />
      </div>
    );
  }

  // No attempt found for this student.
  if (!attempt) {
    const status = getLiveStatus();
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 max-w-md text-center">
          <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h2 className="text-lg font-black text-gray-800 mb-2">No live-test result yet</h2>
          <p className="text-gray-500 text-sm mb-6">
            {status === "live"
              ? "You haven't attempted the FREE Live Mock Test yet. The test is live now — go attempt it!"
              : status === "before"
              ? "The FREE Live Mock Test hasn't started yet. It opens at 8 PM on 28 June 2026."
              : "We couldn't find a live-test attempt for your account."}
          </p>
          <Link href={status === "live" ? "/grand-tests/gtlive" : "/grand-tests"} className="btn-primary inline-block px-6 py-2.5 text-sm">
            {status === "live" ? "Start the Live Test →" : "← Back to Grand Tests"}
          </Link>
        </div>
      </div>
    );
  }

  const { score, correct, wrong, unattempted, total } = attempt;
  const grade =
    score >= 85 ? "🏆 Excellent!" :
    score >= 70 ? "🎉 Great Work!" :
    score >= 55 ? "👍 Good Effort!" :
    score >= 40 ? "📚 Keep Practising!" :
                  "💪 Don't Give Up!";
  const ring = score >= 70 ? "#16a34a" : score >= 50 ? "#d97706" : "#dc2626";

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-800 to-blue-600 text-white">
        <div className="max-w-3xl mx-auto px-4 py-8 text-center">
          <p className="text-blue-200 font-bold text-xs tracking-widest mb-1">NALANDA STUDY CIRCLE, JAGTIAL</p>
          <h1 className="text-2xl sm:text-3xl font-black flex items-center justify-center gap-2">
            <Trophy className="w-7 h-7 text-amber-300" /> My Live Test Result
          </h1>
          <p className="text-blue-100 text-sm mt-1">FREE Live AGRICET Mock Test — 28 June 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
        {/* Score card */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
          <p className="text-gray-500 text-sm mb-4 font-semibold">{grade}</p>
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 rounded-full border-8 flex flex-col items-center justify-center" style={{ borderColor: ring }}>
              <span className="text-3xl font-black text-gray-900">{score}%</span>
              <span className="text-xs text-gray-500">{correct}/{total}</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
            <div className="bg-green-50 rounded-xl p-3">
              <div className="text-2xl font-black text-green-700">{correct}</div>
              <div className="text-xs text-gray-500 mt-0.5">Correct</div>
            </div>
            <div className="bg-red-50 rounded-xl p-3">
              <div className="text-2xl font-black text-red-600">{wrong}</div>
              <div className="text-xs text-gray-500 mt-0.5">Wrong</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="text-2xl font-black text-gray-500">{unattempted}</div>
              <div className="text-xs text-gray-500 mt-0.5">Skipped</div>
            </div>
          </div>
        </div>

        {/* Personal answer review — only after the window closes */}
        {!reviewOpen ? (
          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
            <Lock className="w-10 h-10 text-gray-300 mx-auto mb-3" />
            <h3 className="font-black text-gray-800 mb-1">Answer review unlocks after the test closes</h3>
            <p className="text-gray-500 text-sm">
              Your question-by-question review with the correct answers &amp; explanations (English &amp; Telugu)
              will appear here after the live window ends — <b>12 PM (noon) on 29 June 2026</b>.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="font-black text-gray-800 text-lg px-1">Your question-by-question review</h3>
            {GRAND_TEST_13.map(q => {
              const te = getTe(q.id);
              const chosen = attempt.answers[q.id];
              const skipped = chosen === undefined || chosen === null;
              const isCorrect = chosen === q.correct;
              return (
                <div key={q.id} className="bg-white rounded-2xl border border-gray-200 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-blue-100 text-blue-700 font-black text-xs w-7 h-7 rounded-full flex items-center justify-center shrink-0">{q.qNo}</span>
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wide">{q.subject.replace(/-/g, " ")}</span>
                    <span className={`ml-auto inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full ${
                      skipped ? "bg-gray-100 text-gray-500" : isCorrect ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                    }`}>
                      {skipped ? <><AlertCircle className="w-3 h-3" /> Skipped</> : isCorrect ? <><CheckCircle className="w-3 h-3" /> Correct</> : <><XCircle className="w-3 h-3" /> Wrong</>}
                    </span>
                  </div>
                  <p className="font-semibold text-gray-900 text-sm leading-relaxed whitespace-pre-line">{q.question}</p>
                  {te?.q && <p className="te-text text-sm leading-relaxed mb-3 mt-1">{te.q}</p>}

                  {q.matchTable && (
                    <div className="overflow-x-auto mb-3 mt-2">
                      <table className="w-full text-xs border border-gray-200 rounded-lg">
                        <thead className="bg-gray-50 text-gray-500">
                          <tr>{q.matchTable.headers.map((h, i) => <th key={i} className="text-left px-3 py-2 font-bold border-b border-gray-200">{h}</th>)}</tr>
                        </thead>
                        <tbody>
                          {q.matchTable.rows.map((row, ri) => (
                            <tr key={ri} className="border-b border-gray-100 last:border-0">
                              {row.map((c, ci) => <td key={ci} className="px-3 py-2 text-gray-700 align-top">{c}</td>)}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  <div className="space-y-1.5 mt-2">
                    {q.options.map((opt, i) => {
                      const isAnswer = i === q.correct;
                      const isChosenWrong = i === chosen && !isCorrect;
                      let cls = "bg-gray-50 border border-gray-100";
                      if (isAnswer) cls = "bg-green-50 border border-green-300";
                      else if (isChosenWrong) cls = "bg-red-50 border border-red-300";
                      return (
                        <div key={i} className={`flex items-start gap-2 text-sm rounded-lg px-3 py-2 ${cls}`}>
                          <span className={`font-bold ${isAnswer ? "text-green-700" : isChosenWrong ? "text-red-700" : "text-gray-500"}`}>{letter(i)}.</span>
                          <span className={isAnswer ? "text-green-900 font-semibold" : isChosenWrong ? "text-red-900" : "text-gray-700"}>
                            {opt}
                            {te?.o?.[i] && <span className="te-text block">{te.o[i]}</span>}
                          </span>
                          {isAnswer && <CheckCircle className="w-4 h-4 text-green-600 ml-auto shrink-0 mt-0.5" />}
                          {isChosenWrong && <XCircle className="w-4 h-4 text-red-500 ml-auto shrink-0 mt-0.5" />}
                        </div>
                      );
                    })}
                  </div>

                  {q.explanation && (
                    <div className="mt-3 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg px-4 py-3">
                      <span className="text-xs font-bold text-blue-700">Explanation: </span>
                      <span className="text-xs text-blue-900 leading-relaxed">{q.explanation}</span>
                      {te?.e && <span className="te-text block text-xs mt-1">{te.e}</span>}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* About the website + ₹199 upgrade promo */}
        <div className="bg-gradient-to-br from-green-700 to-emerald-800 rounded-2xl p-6 text-white">
          <h3 className="text-base font-black mb-1">🌾 Want to practise more questions like these?</h3>
          <p className="text-green-100 text-xs leading-relaxed mb-3">
            Get <b>topic-wise &amp; subject-wise mock tests</b> across all <b>17 Diploma subjects</b> — with <b>3400+ MCQs</b>,
            previous-year papers, detailed <b>answer key &amp; explanations</b>, and full <b>English + తెలుగు</b> support.
            Unlock everything with a one-time payment of just <b className="text-amber-300 text-base">₹199</b> — no recurring fees.
          </p>
          <Link href="/dashboard" className="block w-full text-center bg-white text-green-700 font-black px-5 py-2.5 rounded-xl text-sm hover:bg-green-50 transition-all">
            🔓 Subscribe ₹199 — Unlock Full Access
          </Link>
        </div>

        <div className="text-center pt-2 pb-8">
          <Link href="/grand-tests" className="inline-flex items-center gap-2 text-gray-400 text-sm hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Grand Tests
          </Link>
        </div>
      </div>
    </div>
  );
}
