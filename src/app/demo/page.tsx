"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Play, Lock, ArrowRight, Leaf } from "lucide-react";
import { getShuffledQuestions } from "@/data/questions";
import { DEMO_QUESTION_LIMIT, DEMO_SUBJECT_ID } from "@/data/subjects";
import { Question } from "@/types";
import { CheckCircle, X, AlertCircle, ChevronLeft, ChevronRight } from "lucide-react";

export default function DemoPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setQuestions(getShuffledQuestions(DEMO_SUBJECT_ID, DEMO_QUESTION_LIMIT));
  }, []);

  if (!started) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white flex items-center justify-center p-4">
        <div className="card p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Leaf className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-black text-gray-900 mb-2">Free Demo Test</h1>
          <p className="text-gray-500 mb-2">🌾 DA-102 Crop Production-I — 10 Questions</p>
          <p className="text-sm text-gray-400 mb-6">Experience AGRICET MOCKS quality — no signup required!</p>

          <div className="bg-primary-50 rounded-xl p-4 mb-6 text-left space-y-2">
            <p className="text-primary-700 text-sm font-medium">Demo includes:</p>
            <p className="text-primary-600 text-sm">✓ 10 AGRICET-standard MCQs</p>
            <p className="text-primary-600 text-sm">✓ Instant explanations after each answer</p>
            <p className="text-primary-600 text-sm">✓ Score report at the end</p>
          </div>

          <button onClick={() => setStarted(true)} className="btn-primary w-full py-3.5 text-base mb-3">
            <Play className="w-5 h-5 inline mr-2" /> Start Free Demo
          </button>
          <Link href="/signup" className="text-primary-600 text-sm hover:underline">
            Sign up for full access (₹250) →
          </Link>
          <div className="mt-4">
            <Link href="/" className="text-gray-400 text-sm hover:underline">← Back to home</Link>
          </div>
        </div>
      </div>
    );
  }

  if (finished || currentIdx >= questions.length) {
    const correct = questions.filter(q => answers[q.id] === q.correct).length;
    const score = Math.round((correct / questions.length) * 100);
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white flex items-center justify-center p-4">
        <div className="card p-8 max-w-md w-full text-center">
          <div className="text-5xl mb-4">{score >= 70 ? "🎉" : "💪"}</div>
          <h2 className="text-2xl font-black text-gray-900 mb-1">Demo Complete!</h2>
          <p className="text-gray-500 mb-6">Your Score: <span className="text-3xl font-black text-primary-600">{score}%</span></p>
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

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
            <p className="text-amber-700 font-semibold text-sm mb-1">🔓 Want 3,400+ more questions?</p>
            <p className="text-amber-600 text-xs">Get lifetime access to all 17 subjects for just ₹250!</p>
          </div>

          <Link href="/signup" className="btn-primary w-full py-3.5 text-base mb-3 flex items-center justify-center gap-2">
            Get Full Access – ₹250 <ArrowRight className="w-5 h-5" />
          </Link>
          <button onClick={() => { setAnswers({}); setCurrentIdx(0); setFinished(false); setStarted(false); }}
            className="text-gray-500 text-sm hover:underline">Retry Demo</button>
        </div>
      </div>
    );
  }

  const current = questions[currentIdx];
  const answered = answers[current?.id];
  const isAnswered = answered !== undefined;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="w-5 h-5 text-primary-600" />
            <span className="font-bold text-gray-800 text-sm">AGRICET MOCKS</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">{Object.keys(answers).length}/{questions.length}</span>
            <span className="badge bg-green-100 text-green-700 text-xs font-bold">FREE DEMO</span>
          </div>
        </div>
        <div className="h-1 bg-gray-100">
          <div className="h-full bg-primary-500 transition-all" style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }} />
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="card p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-primary-100 text-primary-600 font-bold">Q {currentIdx + 1}</span>
            <span className="text-gray-400 text-sm">of {questions.length} — Agronomy Demo</span>
          </div>

          <p className="text-gray-900 font-medium text-lg leading-relaxed mb-6">{current?.question}</p>

          <div className="space-y-3">
            {current?.options.map((opt, idx) => {
              let cls = "option-card";
              if (isAnswered) {
                if (idx === current.correct) cls = "option-card option-correct";
                else if (idx === answered) cls = "option-card option-wrong";
                else cls = "option-card opacity-50";
              }
              return (
                <button key={idx} onClick={() => !isAnswered && setAnswers(prev => ({ ...prev, [current.id]: idx }))}
                  disabled={isAnswered} className={`${cls} w-full text-left flex items-center gap-3`}>
                  <span className="w-7 h-7 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span>{opt}</span>
                  {isAnswered && idx === current.correct && <CheckCircle className="w-5 h-5 text-green-600 ml-auto" />}
                  {isAnswered && idx === answered && idx !== current.correct && <X className="w-5 h-5 text-red-500 ml-auto" />}
                </button>
              );
            })}
          </div>

          {isAnswered && current?.explanation && (
            <div className="mt-5 p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700 font-semibold text-sm">Explanation</span>
              </div>
              <p className="text-blue-800 text-sm leading-relaxed">{current.explanation}</p>
            </div>
          )}

          <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
            <button onClick={() => setCurrentIdx(i => Math.max(0, i - 1))} disabled={currentIdx === 0}
              className="flex items-center gap-2 text-gray-500 hover:text-primary-600 disabled:opacity-30 text-sm font-medium">
              <ChevronLeft className="w-4 h-4" /> Prev
            </button>
            {currentIdx < questions.length - 1 ? (
              <button onClick={() => isAnswered && setCurrentIdx(i => i + 1)}
                disabled={!isAnswered}
                className="btn-primary py-2 px-5 text-sm flex items-center gap-2 disabled:opacity-40">
                Next <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button onClick={() => setFinished(true)} disabled={!isAnswered}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-5 rounded-xl text-sm flex items-center gap-2 disabled:opacity-40 transition-colors">
                <CheckCircle className="w-4 h-4" /> See Results
              </button>
            )}
          </div>
        </div>

        {/* Upgrade teaser */}
        <div className="mt-6 card p-5 bg-primary-50 border border-primary-200 text-center">
          <Lock className="w-6 h-6 text-primary-600 mx-auto mb-2" />
          <p className="text-primary-800 font-semibold text-sm">16 more subjects locked</p>
          <p className="text-primary-600 text-xs mt-1 mb-3">3,400+ MCQs + Previous Year Papers for ₹250</p>
          <Link href="/signup" className="btn-primary text-sm py-2 inline-block">Unlock Full Access</Link>
        </div>
      </div>
    </div>
  );
}
