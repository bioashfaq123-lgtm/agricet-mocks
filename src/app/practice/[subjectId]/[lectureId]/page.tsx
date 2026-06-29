"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight, CheckCircle, X, AlertCircle, BookOpen, RotateCcw } from "lucide-react";
import { doc, updateDoc, addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/contexts/AuthContext";
import { SUBJECTS } from "@/data/subjects";
import { getLecture } from "@/data/lectures";
import { ALL_QUESTIONS } from "@/data/questions";
import { getTe } from "@/data/translations";
import Bilingual from "@/components/Bilingual";
import LanguageToggle from "@/components/LanguageToggle";
import ExplainButton from "@/components/ExplainButton";
import { Question } from "@/types";

export default function LecturePracticePage() {
  const params    = useParams();
  const router    = useRouter();
  const { user, userData, refreshUserData } = useAuth();

  const subjectId = params.subjectId as string;
  const lectureId = params.lectureId as string;

  const subject   = SUBJECTS.find(s => s.id === subjectId);
  const lecture   = getLecture(subjectId, lectureId);
  const isPaid    = userData?.isPaid ?? false;
  const hasAccess = !user ? subjectId === "da-102" : (isPaid || subjectId === "da-102");

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers]       = useState<Record<string, number>>({});
  const [revealed, setRevealed]     = useState<Record<string, boolean>>({});
  const [finished, setFinished]     = useState(false);
  const [loading, setLoading]       = useState(true);
  // Ensures each completed lecture practice is saved to Firestore only once.
  const savedRef = useRef(false);

  useEffect(() => {
    if (!hasAccess) { router.push("/dashboard"); return; }
    if (!lecture)   { router.push(`/lectures/${subjectId}`); return; }

    const allQs = ALL_QUESTIONS[subjectId] ?? [];
    const lectureQs = allQs.filter(q => q.lecture === lectureId);
    // Shuffle
    const shuffled = [...lectureQs].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    setLoading(false);
  }, [subjectId, lectureId, hasAccess, lecture, router]);

  const handleAnswer = (qId: string, optIdx: number) => {
    if (answers[qId] !== undefined) return;
    setAnswers(prev => ({ ...prev, [qId]: optIdx }));
    setRevealed(prev => ({ ...prev, [qId]: true }));
  };

  const handleFinish = useCallback(async () => {
    setFinished(true);
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Record the practice attempt so it shows up in the student's progress and
    // in the admin dashboard (Tests / Accuracy). Saved once per completion.
    if (!user || savedRef.current) return;
    const total = questions.length;
    if (total === 0) return;
    savedRef.current = true;

    let correct = 0;
    questions.forEach(q => { if (answers[q.id] === q.correct) correct++; });
    const attempted = Object.keys(answers).length;
    const score = Math.round((correct / total) * 100);

    try {
      await addDoc(collection(db, "testResults"), {
        userId: user.uid, subjectId, lectureId, score, correct, total,
        attempted, incorrect: attempted - correct,
        mode: "lecture-practice", completedAt: serverTimestamp(),
      });
      const prev = userData?.progress?.[subjectId];
      const newProgress = {
        attempted: (prev?.attempted ?? 0) + total,
        correct:   (prev?.correct   ?? 0) + correct,
        lastScore: score,
        bestScore: Math.max(prev?.bestScore ?? 0, score),
        testCount: (prev?.testCount ?? 0) + 1,
        lastAttempted: new Date(),
      };
      await updateDoc(doc(db, "users", user.uid), {
        [`progress.${subjectId}`]: newProgress,
      });
      await refreshUserData();
    } catch (e) {
      console.error("Error saving practice result:", e);
    }
  }, [user, questions, answers, subjectId, lectureId, userData, refreshUserData]);

  const handleRestart = () => {
    setAnswers({});
    setRevealed({});
    setCurrentIdx(0);
    setFinished(false);
    savedRef.current = false; // a fresh run can be saved again
    const allQs = ALL_QUESTIONS[subjectId] ?? [];
    const shuffled = [...allQs.filter(q => q.lecture === lectureId)].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-10 h-10 border-4 border-primary-600 border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-gray-600">Loading lecture questions...</p>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="card p-8 max-w-md text-center">
          <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-800 mb-2">Questions Coming Soon</h2>
          <p className="text-gray-500 text-sm mb-6">
            Lecture-wise questions for <strong>{lecture?.title}</strong> will be added soon. Try the full subject test for now.
          </p>
          <Link href={`/lectures/${subjectId}`} className="btn-primary py-2 px-6 text-sm">
            ← Back to Lectures
          </Link>
        </div>
      </div>
    );
  }

  // Score screen
  if (finished) {
    let correct = 0;
    questions.forEach(q => { if (answers[q.id] === q.correct) correct++; });
    const total     = questions.length;
    const score     = Math.round((correct / total) * 100);
    const attempted = Object.keys(answers).length;

    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-lg mx-auto">
          {/* Score card */}
          <div className="card p-8 text-center mb-6">
            <div className="text-5xl mb-2">
              {score >= 80 ? "🏆" : score >= 60 ? "👍" : "📚"}
            </div>
            <h2 className="text-2xl font-black text-gray-900 mb-1">
              {score >= 80 ? "Excellent!" : score >= 60 ? "Good Job!" : "Keep Practicing!"}
            </h2>
            <p className="text-gray-500 text-sm mb-6">{lecture?.title}</p>
            <div className="text-6xl font-black text-primary-600 mb-1">{score}%</div>
            <p className="text-gray-600 text-sm">{correct}/{total} correct</p>

            <div className="grid grid-cols-3 gap-3 mt-6">
              <div className="bg-green-50 rounded-xl p-3">
                <div className="text-xl font-black text-green-600">{correct}</div>
                <div className="text-xs text-gray-500">Correct</div>
              </div>
              <div className="bg-red-50 rounded-xl p-3">
                <div className="text-xl font-black text-red-500">{attempted - correct}</div>
                <div className="text-xs text-gray-500">Wrong</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-3">
                <div className="text-xl font-black text-gray-600">{total - attempted}</div>
                <div className="text-xs text-gray-500">Skipped</div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 flex-wrap">
            <button onClick={handleRestart}
              className="flex-1 flex items-center justify-center gap-2 btn-primary py-3 text-sm">
              <RotateCcw className="w-4 h-4" /> Retry Lecture
            </button>
            <Link href={`/lectures/${subjectId}`}
              className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-xl text-sm hover:border-primary-400 transition-colors">
              <BookOpen className="w-4 h-4" /> More Lectures
            </Link>
          </div>

          {/* Review answers */}
          <div className="mt-6">
            <h3 className="font-bold text-gray-800 mb-3 text-sm">Review All Answers</h3>
            <div className="space-y-4">
              {questions.map((q, i) => {
                const userAns = answers[q.id];
                const isCorrect = userAns === q.correct;
                const qte = getTe(q.id);
                return (
                  <div key={q.id} className="card p-4">
                    <div className="flex items-start gap-2 mb-3">
                      {userAns !== undefined
                        ? isCorrect
                          ? <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          : <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        : <AlertCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      }
                      <div className="text-sm font-medium text-gray-800 leading-relaxed">
                        <span className="text-gray-400 mr-1">Q{i + 1}.</span>
                        <Bilingual as="span" en={q.question} te={qte?.q} teClassName="mt-1 font-semibold" />
                      </div>
                    </div>
                    <div className="space-y-1.5 mb-3">
                      {q.options.map((opt, idx) => {
                        let cls = "text-xs px-3 py-1.5 rounded-lg w-full text-left ";
                        if (idx === q.correct)              cls += "bg-green-100 text-green-800 font-medium";
                        else if (idx === userAns)           cls += "bg-red-100 text-red-700";
                        else                                cls += "bg-gray-50 text-gray-600";
                        return <div key={idx} className={cls}>{String.fromCharCode(65+idx)}. <Bilingual as="span" en={opt} te={qte?.o?.[idx]} teClassName="mt-0.5" /></div>;
                      })}
                    </div>
                    {q.explanation && (
                      <div className="flex gap-2 p-2.5 bg-blue-50 rounded-lg">
                        <AlertCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <Bilingual as="p" className="text-xs text-blue-700 leading-relaxed" en={q.explanation} te={qte?.e} teClassName="mt-1" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Practice screen
  const current    = questions[currentIdx];
  const te         = current ? getTe(current.id) : undefined;
  const isAnswered = answers[current?.id] !== undefined;
  const answered   = answers[current?.id];
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <Link href={`/lectures/${subjectId}`} className="text-gray-400 hover:text-gray-600 flex-shrink-0">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <div className="min-w-0">
              <p className="text-xs text-gray-500 leading-none">{subject?.icon} {subject?.code}</p>
              <p className="text-sm font-bold text-gray-900 truncate leading-tight">{lecture?.title}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <LanguageToggle />
            <span className="text-sm text-gray-500 hidden sm:inline">{answeredCount}/{questions.length}</span>
            <button onClick={handleFinish}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-3 py-1.5 rounded-lg text-xs transition-colors">
              Finish
            </button>
          </div>
        </div>
        {/* Progress */}
        <div className="h-1 bg-gray-100">
          <div className="h-full bg-primary-500 transition-all duration-300"
            style={{ width: `${(answeredCount / questions.length) * 100}%` }} />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-6 grid md:grid-cols-3 gap-6">
        {/* Question */}
        <div className="md:col-span-2">
          <div className="card p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="badge bg-primary-100 text-primary-600 font-bold">Q {currentIdx + 1}</span>
              <span className="text-gray-400 text-sm">of {questions.length}</span>
            </div>

            <Bilingual
              as="p"
              en={current?.question ?? ""}
              te={te?.q}
              className="text-gray-900 font-medium text-base leading-relaxed mb-6 whitespace-pre-line"
              teClassName="mt-1 font-semibold"
            />

            {/* Options */}
            <div className="space-y-3">
              {current?.options.map((opt, idx) => {
                let cls = "option-card";
                if (isAnswered) {
                  if (idx === current.correct)                        cls = "option-card option-correct";
                  else if (idx === answered && idx !== current.correct) cls = "option-card option-wrong";
                  else                                                cls = "option-card opacity-60";
                }
                return (
                  <button key={idx} onClick={() => handleAnswer(current.id, idx)}
                    disabled={isAnswered}
                    className={`${cls} w-full text-left flex items-center gap-3 disabled:cursor-not-allowed`}>
                    <span className="w-7 h-7 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <Bilingual as="span" className="text-sm" en={opt} te={te?.o?.[idx]} teClassName="mt-0.5" />
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
            {revealed[current?.id] && current?.explanation && (
              <div className="mt-5 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-blue-600" />
                  <span className="text-blue-700 font-semibold text-sm">Explanation</span>
                </div>
                <Bilingual as="p" className="text-blue-800 text-sm leading-relaxed" en={current.explanation} te={te?.e} teClassName="mt-1" />
                <ExplainButton
                  question={current.question}
                  options={current.options}
                  correctIndex={current.correct}
                  userIndex={answered ?? null}
                  explanation={current.explanation}
                  subjectId={current.subject}
                />
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
                <button onClick={handleFinish}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-xl text-sm transition-colors">
                  <CheckCircle className="w-4 h-4" /> Finish Lecture
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Question navigator */}
        <div className="md:col-span-1">
          <div className="card p-4 sticky top-20">
            <h3 className="font-semibold text-gray-700 text-sm mb-3">
              📖 {lecture?.title}
            </h3>
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
            <div className="space-y-1 text-xs text-gray-500">
              <div className="flex items-center gap-2"><span className="w-3 h-3 bg-green-500 rounded-sm"/><span>Correct</span></div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 bg-red-400 rounded-sm"/><span>Wrong</span></div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 bg-primary-600 rounded-sm"/><span>Current</span></div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 bg-gray-100 rounded-sm border"/><span>Not answered</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
