"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Clock, ChevronLeft, ChevronRight, Flag, CheckCircle, X, AlertCircle, Leaf } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { getShuffledQuestions } from "@/data/questions";
import { SUBJECTS, DEMO_SUBJECT_ID, DEMO_QUESTION_LIMIT } from "@/data/subjects";
import { Question } from "@/types";
import { doc, updateDoc, addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import toast from "react-hot-toast";

const TEST_DURATION = 100 * 60; // 100 minutes for timed mode (1 min per question)

export default function TestPage() {
  const params       = useParams();
  const searchParams = useSearchParams();
  const router       = useRouter();
  const { user, userData, refreshUserData } = useAuth();

  const subjectId = params.subjectId as string;
  const mode      = (searchParams.get("mode") ?? "practice") as "practice" | "timed";
  const isDemo    = !user;
  const isPaid    = userData?.isPaid ?? false;
  const hasAccess = isDemo ? subjectId === DEMO_SUBJECT_ID : (isPaid || subjectId === DEMO_SUBJECT_ID);

  const subject = SUBJECTS.find(s => s.id === subjectId);

  const [questions, setQuestions]       = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx]     = useState(0);
  const [answers, setAnswers]           = useState<Record<string, number>>({});
  const [revealed, setRevealed]         = useState<Record<string, boolean>>({});
  const [timeLeft, setTimeLeft]         = useState(TEST_DURATION);
  const [testStarted, setTestStarted]   = useState(false);
  const [testEnded, setTestEnded]       = useState(false);
  const [loading, setLoading]           = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const limit = isDemo ? DEMO_QUESTION_LIMIT : 100;

  // Load questions
  useEffect(() => {
    if (!hasAccess) { router.push("/dashboard"); return; }
    const qs = getShuffledQuestions(subjectId, limit);
    setQuestions(qs);
    setLoading(false);
  }, [subjectId, hasAccess, limit, router]);

  // Timer for timed mode
  useEffect(() => {
    if (mode === "timed" && testStarted && !testEnded) {
      timerRef.current = setInterval(() => {
        setTimeLeft(t => {
          if (t <= 1) { endTest(); return 0; }
          return t - 1;
        });
      }, 1000);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [mode, testStarted, testEnded]);

  const endTest = useCallback(async () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setTestEnded(true);

    // Calculate score
    let correct = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correct) correct++;
    });
    const total  = questions.length;
    const score  = Math.round((correct / total) * 100);
    const timeTaken = TEST_DURATION - timeLeft;

    // Save to Firestore if logged in
    if (user) {
      try {
        // Save test result
        await addDoc(collection(db, "testResults"), {
          userId: user.uid, subjectId, score, correct, total,
          incorrect: total - correct, timeTaken,
          mode, completedAt: serverTimestamp(), answers,
        });

        // Update user progress
        const prev = userData?.progress?.[subjectId];
        const newProgress = {
          attempted: (prev?.attempted ?? 0) + total,
          correct:   (prev?.correct   ?? 0) + correct,
          lastScore: score,
          bestScore: Math.max(prev?.bestScore ?? 0, score),
          testCount: (prev?.testCount ?? 0) + 1,
        };
        await updateDoc(doc(db, "users", user.uid), {
          [`progress.${subjectId}`]: newProgress,
        });
        await refreshUserData();
      } catch (e) {
        console.error("Error saving result:", e);
      }
    }

    router.push(`/results?subject=${subjectId}&score=${score}&correct=${correct}&total=${total}&timeTaken=${timeTaken}`);
  }, [questions, answers, timeLeft, user, subjectId, mode, userData, router, refreshUserData]);

  const handleAnswer = (qId: string, optIdx: number) => {
    if (answers[qId] !== undefined) return;
    setAnswers(prev => ({ ...prev, [qId]: optIdx }));
    if (mode === "practice") {
      setRevealed(prev => ({ ...prev, [qId]: true }));
    }
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-10 h-10 border-4 border-primary-600 border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-gray-600">Loading questions...</p>
        </div>
      </div>
    );
  }

  const current   = questions[currentIdx];
  const answered  = answers[current?.id];
  const isAnswered = answered !== undefined;
  const showExp   = revealed[current?.id];
  const answeredCount = Object.keys(answers).length;

  // Start screen for timed mode
  if (mode === "timed" && !testStarted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="card p-8 max-w-md w-full text-center">
          <div className="text-4xl mb-4">{subject?.icon}</div>
          <h1 className="text-2xl font-black text-gray-900 mb-2">{subject?.name}</h1>
          <p className="text-gray-500 mb-6">Timed Mock Test</p>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-primary-50 rounded-xl p-3">
              <div className="text-xl font-black text-primary-700">{limit}</div>
              <div className="text-xs text-gray-500">Questions</div>
            </div>
            <div className="bg-primary-50 rounded-xl p-3">
              <div className="text-xl font-black text-primary-700">100</div>
              <div className="text-xs text-gray-500">Minutes</div>
            </div>
            <div className="bg-primary-50 rounded-xl p-3">
              <div className="text-xl font-black text-primary-700">1</div>
              <div className="text-xs text-gray-500">Mark/Q</div>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-left">
            <p className="text-amber-700 text-sm font-medium mb-1">📌 Instructions:</p>
            <ul className="text-amber-600 text-sm space-y-1">
              <li>• Each question has 4 options</li>
              <li>• No negative marking</li>
              <li>• Explanations shown after test ends</li>
              <li>• Timer starts when you click Start</li>
            </ul>
          </div>
          <button onClick={() => setTestStarted(true)} className="btn-primary w-full py-4 text-lg">
            🚀 Start Test
          </button>
          <Link href="/dashboard" className="block mt-3 text-gray-500 text-sm hover:underline">← Back to Dashboard</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Test Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="text-gray-400 hover:text-gray-600">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <span className="text-sm font-medium text-gray-700">{subject?.icon} {subject?.name}</span>
            <span className="badge bg-primary-100 text-primary-700 text-xs capitalize">{mode}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">{answeredCount}/{questions.length} answered</span>
            {mode === "timed" && (
              <div className={`flex items-center gap-1.5 font-mono font-bold px-3 py-1 rounded-lg text-sm ${timeLeft < 300 ? "bg-red-100 text-red-600" : "bg-primary-100 text-primary-700"}`}>
                <Clock className="w-4 h-4" />
                {formatTime(timeLeft)}
              </div>
            )}
            <button onClick={() => { if (confirm("End test and see results?")) endTest(); }}
              className="bg-red-100 text-red-600 hover:bg-red-200 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors">
              Submit
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-gray-100">
          <div className="h-full bg-primary-500 transition-all duration-300"
            style={{ width: `${(answeredCount / questions.length) * 100}%` }} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6 grid md:grid-cols-3 gap-6">
        {/* Question Panel */}
        <div className="md:col-span-2">
          <div className="card p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="badge bg-primary-100 text-primary-600 font-bold">Q {currentIdx + 1}</span>
              <span className="text-gray-400 text-sm">of {questions.length}</span>
            </div>

            <p className="text-gray-900 font-medium text-base md:text-lg leading-relaxed mb-6">
              {current?.question}
            </p>

            {/* Options */}
            <div className="space-y-3">
              {current?.options.map((opt, idx) => {
                let cls = "option-card";
                if (isAnswered || (mode === "timed" && testEnded)) {
                  if (idx === current.correct) cls = "option-card option-correct";
                  else if (idx === answered && idx !== current.correct) cls = "option-card option-wrong";
                  else cls = "option-card opacity-60";
                } else if (answered === idx) {
                  cls = "option-card option-selected";
                }

                return (
                  <button key={idx} onClick={() => handleAnswer(current.id, idx)}
                    disabled={isAnswered}
                    className={`${cls} w-full text-left flex items-center gap-3 disabled:cursor-not-allowed`}>
                    <span className="w-7 h-7 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-sm md:text-base">{opt}</span>
                    {isAnswered && idx === current.correct && (
                      <CheckCircle className="w-5 h-5 text-green-600 ml-auto flex-shrink-0" />
                    )}
                    {isAnswered && idx === answered && idx !== current.correct && (
                      <X className="w-5 h-5 text-red-500 ml-auto flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            {(showExp || (mode === "timed" && testEnded && isAnswered)) && current?.explanation && (
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-blue-600" />
                  <span className="text-blue-700 font-semibold text-sm">Explanation</span>
                </div>
                <p className="text-blue-800 text-sm leading-relaxed">{current.explanation}</p>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
              <button onClick={() => setCurrentIdx(i => Math.max(0, i - 1))}
                disabled={currentIdx === 0}
                className="flex items-center gap-2 text-gray-600 hover:text-primary-600 disabled:opacity-30 disabled:cursor-not-allowed font-medium text-sm">
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>
              {currentIdx < questions.length - 1 ? (
                <button onClick={() => setCurrentIdx(i => i + 1)}
                  className="flex items-center gap-2 btn-primary py-2 px-4 text-sm">
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button onClick={() => { if (confirm("Submit test?")) endTest(); }}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-xl text-sm transition-colors">
                  <CheckCircle className="w-4 h-4" /> Submit Test
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Question Navigator */}
        <div className="md:col-span-1">
          <div className="card p-4 sticky top-20">
            <h3 className="font-semibold text-gray-700 text-sm mb-3">Question Navigator</h3>
            <div className="grid grid-cols-5 gap-1.5 mb-4">
              {questions.map((q, i) => {
                const ans = answers[q.id];
                let bg = "bg-gray-100 text-gray-600 hover:bg-primary-100";
                if (i === currentIdx) bg = "bg-primary-600 text-white";
                else if (ans !== undefined) {
                  bg = ans === q.correct ? "bg-green-500 text-white" : "bg-red-400 text-white";
                }
                return (
                  <button key={q.id} onClick={() => setCurrentIdx(i)}
                    className={`${bg} w-8 h-8 rounded-lg text-xs font-bold transition-colors`}>
                    {i + 1}
                  </button>
                );
              })}
            </div>
            <div className="space-y-1.5 text-xs text-gray-500">
              <div className="flex items-center gap-2"><span className="w-3 h-3 bg-green-500 rounded-sm flex-shrink-0"/><span>Correct</span></div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 bg-red-400 rounded-sm flex-shrink-0"/><span>Wrong</span></div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 bg-primary-600 rounded-sm flex-shrink-0"/><span>Current</span></div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 bg-gray-100 rounded-sm border flex-shrink-0"/><span>Not visited</span></div>
            </div>

            {isDemo && (
              <div className="mt-4 p-3 bg-amber-50 rounded-xl border border-amber-200">
                <p className="text-amber-700 text-xs font-medium mb-2">🔓 Want more questions?</p>
                <Link href="/signup" className="btn-primary text-xs py-2 text-center block">
                  Get Full Access – ₹100
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
