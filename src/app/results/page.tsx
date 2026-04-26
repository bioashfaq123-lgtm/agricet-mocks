"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Trophy, CheckCircle, X, Clock, BarChart2, RotateCcw, Home, Star } from "lucide-react";
import { SUBJECTS } from "@/data/subjects";

function ResultsContent() {
  const searchParams = useSearchParams();
  const subjectId  = searchParams.get("subject") ?? "";
  const score      = parseInt(searchParams.get("score")     ?? "0");
  const correct    = parseInt(searchParams.get("correct")   ?? "0");
  const total      = parseInt(searchParams.get("total")     ?? "0");
  const timeTaken  = parseInt(searchParams.get("timeTaken") ?? "0");

  const subject    = SUBJECTS.find(s => s.id === subjectId);
  const incorrect  = total - correct;
  const skipped    = 0;
  const minutes    = Math.floor(timeTaken / 60);
  const seconds    = timeTaken % 60;

  const getScoreColor = () => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-amber-600";
    return "text-red-500";
  };

  const getMessage = () => {
    if (score >= 90) return { emoji: "🏆", msg: "Excellent! You're AGRICET-ready!" };
    if (score >= 75) return { emoji: "🌟", msg: "Great job! Keep it up!" };
    if (score >= 60) return { emoji: "👍", msg: "Good effort! Practice more to improve." };
    return { emoji: "💪", msg: "Keep practicing — you'll get there!" };
  };

  const { emoji, msg } = getMessage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Score Card */}
        <div className="card p-8 text-center mb-6">
          <div className="text-5xl mb-3">{emoji}</div>
          <h1 className="text-2xl font-black text-gray-900 mb-1">Test Complete!</h1>
          <p className="text-gray-500 mb-6">{subject?.icon} {subject?.name}</p>

          {/* Big Score */}
          <div className="relative w-36 h-36 mx-auto mb-6">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="50" fill="none" stroke="#e5e7eb" strokeWidth="12" />
              <circle cx="60" cy="60" r="50" fill="none" stroke="#22c55e" strokeWidth="12"
                strokeDasharray={`${(score / 100) * 314} 314`}
                strokeLinecap="round" className="transition-all duration-1000" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={`text-4xl font-black ${getScoreColor()}`}>{score}%</span>
              <span className="text-xs text-gray-400">Score</span>
            </div>
          </div>

          <p className="text-primary-700 font-semibold mb-8">{msg}</p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-green-50 rounded-2xl p-4">
              <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-black text-green-700">{correct}</div>
              <div className="text-xs text-gray-500">Correct</div>
            </div>
            <div className="bg-red-50 rounded-2xl p-4">
              <X className="w-6 h-6 text-red-500 mx-auto mb-2" />
              <div className="text-2xl font-black text-red-600">{incorrect}</div>
              <div className="text-xs text-gray-500">Incorrect</div>
            </div>
            <div className="bg-blue-50 rounded-2xl p-4">
              <BarChart2 className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-black text-blue-700">{total}</div>
              <div className="text-xs text-gray-500">Total Qs</div>
            </div>
            <div className="bg-amber-50 rounded-2xl p-4">
              <Clock className="w-6 h-6 text-amber-600 mx-auto mb-2" />
              <div className="text-2xl font-black text-amber-700">{minutes}:{String(seconds).padStart(2,"0")}</div>
              <div className="text-xs text-gray-500">Time Taken</div>
            </div>
          </div>

          {/* Performance bar */}
          <div className="text-left mb-2">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Performance</span><span>{score}%</span>
            </div>
            <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
              <div className={`h-full rounded-full transition-all duration-1000 ${score >= 75 ? "bg-green-500" : score >= 50 ? "bg-amber-500" : "bg-red-500"}`}
                style={{ width: `${score}%` }} />
            </div>
          </div>
          <div className="flex justify-between text-xs text-gray-400 mb-6">
            <span>0</span><span>Needs Work &lt;60</span><span>Good 60-80</span><span>Excellent 80+</span>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href={`/test/${subjectId}?mode=practice`}
              className="flex-1 btn-primary text-center flex items-center justify-center gap-2">
              <RotateCcw className="w-4 h-4" /> Retry Practice
            </Link>
            <Link href={`/test/${subjectId}?mode=timed`}
              className="flex-1 btn-secondary text-center flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" /> Timed Test
            </Link>
            <Link href="/dashboard"
              className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl px-4 py-3 transition-colors">
              <Home className="w-4 h-4" /> Dashboard
            </Link>
          </div>
        </div>

        {/* Next Subject Suggestion */}
        <div className="card p-6 text-center bg-primary-50 border border-primary-200">
          <Star className="w-6 h-6 text-primary-600 mx-auto mb-2" />
          <p className="text-primary-800 font-semibold">Practice more subjects to improve your overall AGRICET score!</p>
          <Link href="/dashboard" className="text-primary-600 text-sm hover:underline mt-2 block">
            View all subjects →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="animate-spin w-10 h-10 border-4 border-primary-600 border-t-transparent rounded-full" />
    </div>}>
      <ResultsContent />
    </Suspense>
  );
}
