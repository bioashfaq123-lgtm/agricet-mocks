"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight, CheckCircle, X, AlertCircle, Clock } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { PYQ_2025, PYQ_2024, PYQ_2023, PYQ_2023_AP, PREVIOUS_YEAR_PAPERS } from "@/data/previousYearPapers";

export default function PreviousYearTestPage() {
  const params   = useParams();
  const router   = useRouter();
  const { user, userData } = useAuth();
  const paperId  = params.year as string;   // e.g. "2025", "2023", "2023ap"

  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers]       = useState<Record<string, number>>({});
  const [finished, setFinished]     = useState(false);
  const paper = PREVIOUS_YEAR_PAPERS.find(p => p.id === paperId);
  const [timeLeft, setTimeLeft]     = useState((paper?.duration ?? 100) * 60);

  // Pick the question array for the requested paper ID
  const questions =
    paperId === "2025"   ? PYQ_2025 :
    paperId === "2024"   ? PYQ_2024 :
    paperId === "2023"   ? PYQ_2023 :
    paperId === "2023ap" ? PYQ_2023_AP :
    [];

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(t => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(timer);
  }, []);

  // Free papers accessible without paid subscription; others require paid access
  const isFreeAccess = paper?.isFree ?? false;
  if (!user || (!userData?.isPaid && !isFreeAccess)) {
    router.push("/dashboard");
    return null;
  }

  // Guard: if no questions loaded yet, show a message
  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="card p-8 max-w-md w-full text-center">
          <div className="text-5xl mb-4">🔧</div>
          <h2 className="text-xl font-black text-gray-900 mb-2">{paper?.title ?? "Question Paper"}</h2>
          <p className="text-gray-500 text-sm mb-6">Questions are being processed and will be available very soon. Please check back in a little while!</p>
          <Link href="/previous-years" className="btn-primary w-full text-center block mb-3">Back to Papers</Link>
          <Link href="/dashboard" className="text-gray-500 text-sm hover:underline">← Dashboard</Link>
        </div>
      </div>
    );
  }

  const formatTime = (s: number) => `${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`;
  const current  = questions[currentIdx];
  const answered = answers[current?.id];

  if (finished) {
    const hasAnswerKey = questions.some(q => q.correct >= 0);
    const correct = hasAnswerKey ? questions.filter(q => answers[q.id] === q.correct).length : 0;
    const attempted = Object.keys(answers).length;
    const score = hasAnswerKey && questions.length > 0 ? Math.round((correct / questions.length) * 100) : null;
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="card p-8 max-w-md w-full text-center">
          <div className="text-4xl mb-4">📋</div>
          <h2 className="text-xl font-black text-gray-900 mb-2">{paper?.title ?? `AGRICET ${paper?.year} Paper`}</h2>
          {score !== null ? (
            <>
              <div className="text-4xl font-black text-primary-600 mb-6">{score}%</div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-green-50 rounded-xl p-4">
                  <div className="text-2xl font-black text-green-700">{correct}</div>
                  <div className="text-xs text-gray-500">Correct</div>
                </div>
                <div className="bg-red-50 rounded-xl p-4">
                  <div className="text-2xl font-black text-red-600">{questions.length - correct}</div>
                  <div className="text-xs text-gray-500">Incorrect</div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="text-4xl font-black text-primary-600 mb-3">{attempted}/{questions.length}</div>
              <p className="text-gray-500 text-sm mb-6">Questions attempted (answer key not yet available)</p>
            </>
          )}
          <Link href="/previous-years" className="btn-primary w-full text-center block mb-3">Back to Papers</Link>
          <Link href="/dashboard" className="text-gray-500 text-sm hover:underline">← Dashboard</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/previous-years" className="text-gray-400 hover:text-gray-600"><ChevronLeft className="w-5 h-5" /></Link>
            <span className="text-sm font-medium">📋 {paper?.title ?? `AGRICET ${paper?.year} Paper`}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">{Object.keys(answers).length}/{questions.length}</span>
            <div className={`flex items-center gap-1.5 font-mono font-bold px-3 py-1 rounded-lg text-sm ${timeLeft < 600 ? "bg-red-100 text-red-600" : "bg-primary-100 text-primary-700"}`}>
              <Clock className="w-4 h-4" />{formatTime(timeLeft)}
            </div>
            <button onClick={() => setFinished(true)} className="bg-red-100 text-red-600 px-3 py-1.5 rounded-lg text-sm font-medium">Submit</button>
          </div>
        </div>
        <div className="h-1 bg-gray-100">
          <div className="h-full bg-primary-500 transition-all" style={{ width: `${(Object.keys(answers).length / questions.length) * 100}%` }} />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-6">
        <div className="card p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-primary-100 text-primary-600 font-bold">Q {currentIdx + 1}</span>
            <span className="text-gray-400 text-sm">of {questions.length}</span>
            <span className="badge bg-blue-100 text-blue-700 text-xs ml-2">{current?.subject}</span>
          </div>

          <p className="text-gray-900 font-medium text-lg leading-relaxed mb-6">{current?.question}</p>

          {/* correct === -1 means answer key not yet available (review-only mode) */}
          {(() => {
            const hasKey = (current?.correct ?? -1) >= 0;
            return (
              <div className="space-y-3">
                {current?.options.map((opt, idx) => {
                  let cls = "option-card";
                  if (answered !== undefined && hasKey) {
                    if (idx === current!.correct) cls = "option-card option-correct";
                    else if (idx === answered)    cls = "option-card option-wrong";
                    else                          cls = "option-card opacity-50";
                  } else if (answered !== undefined) {
                    // review-only: just highlight selected
                    cls = idx === answered ? "option-card ring-2 ring-primary-400" : "option-card opacity-60";
                  }
                  return (
                    <button key={idx}
                      onClick={() => answered === undefined && setAnswers(p => ({ ...p, [current!.id]: idx }))}
                      disabled={answered !== undefined}
                      className={`${cls} w-full text-left flex items-center gap-3`}>
                      <span className="w-7 h-7 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold">{String.fromCharCode(65+idx)}</span>
                      <span>{opt}</span>
                      {answered !== undefined && hasKey && idx === current!.correct && <CheckCircle className="w-5 h-5 text-green-600 ml-auto" />}
                      {answered !== undefined && hasKey && idx === answered && idx !== current!.correct && <X className="w-5 h-5 text-red-500 ml-auto" />}
                    </button>
                  );
                })}
              </div>
            );
          })()}

          {answered !== undefined && (current?.correct ?? -1) < 0 && (
            <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-700 text-sm flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              Answer key for this paper will be added soon. Practice navigating the questions for now!
            </div>
          )}

          {answered !== undefined && (current?.correct ?? -1) >= 0 && current?.explanation && (
            <div className="mt-5 p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700 font-semibold text-sm">Explanation</span>
              </div>
              <p className="text-blue-800 text-sm leading-relaxed">{current.explanation}</p>
            </div>
          )}

          <div className="flex justify-between mt-6 pt-4 border-t border-gray-100">
            <button onClick={() => setCurrentIdx(i => Math.max(0, i-1))} disabled={currentIdx===0}
              className="flex items-center gap-2 text-gray-500 hover:text-primary-600 disabled:opacity-30 text-sm font-medium">
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>
            {currentIdx < questions.length - 1 ? (
              <button onClick={() => setCurrentIdx(i => i+1)}
                className="btn-primary py-2 px-5 text-sm flex items-center gap-2">
                Next <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button onClick={() => setFinished(true)}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-5 rounded-xl text-sm flex items-center gap-2">
                <CheckCircle className="w-4 h-4" /> Finish
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
