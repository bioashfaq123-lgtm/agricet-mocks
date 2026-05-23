"use client";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, BookOpen, Play, Lock, CheckCircle2 } from "lucide-react";
import { SUBJECTS } from "@/data/subjects";
import { getLecturesForSubject } from "@/data/lectures";
import { ALL_QUESTIONS } from "@/data/questions";
import { useAuth } from "@/contexts/AuthContext";

export default function LectureBrowserPage() {
  const params    = useParams();
  const router    = useRouter();
  const { user, userData } = useAuth();

  const subjectId = params.subjectId as string;
  const subject   = SUBJECTS.find(s => s.id === subjectId);
  const lectures  = getLecturesForSubject(subjectId);
  const allQs     = ALL_QUESTIONS[subjectId] ?? [];

  const isPaid    = userData?.isPaid ?? false;
  const isDemo    = !user;
  const hasAccess = isDemo ? subjectId === "da-102" : (isPaid || subjectId === "da-102");

  if (!subject) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Subject not found.</p>
      </div>
    );
  }

  // Count questions per lecture
  const countByLecture: Record<string, number> = {};
  allQs.forEach(q => {
    if (q.lecture) countByLecture[q.lecture] = (countByLecture[q.lecture] ?? 0) + 1;
  });

  const colorMap: Record<string, string> = {
    green:   "bg-green-50 border-green-200",
    yellow:  "bg-yellow-50 border-yellow-200",
    purple:  "bg-purple-50 border-purple-200",
    stone:   "bg-stone-50 border-stone-200",
    blue:    "bg-blue-50 border-blue-200",
    lime:    "bg-lime-50 border-lime-200",
    orange:  "bg-orange-50 border-orange-200",
    amber:   "bg-amber-50 border-amber-200",
    violet:  "bg-violet-50 border-violet-200",
    gold:    "bg-yellow-50 border-yellow-200",
    indigo:  "bg-indigo-50 border-indigo-200",
    slate:   "bg-slate-50 border-slate-200",
    emerald: "bg-emerald-50 border-emerald-200",
    red:     "bg-red-50 border-red-200",
    rose:    "bg-rose-50 border-rose-200",
  };
  const badgeMap: Record<string, string> = {
    green:   "bg-green-100 text-green-800",
    yellow:  "bg-yellow-100 text-yellow-800",
    purple:  "bg-purple-100 text-purple-800",
    stone:   "bg-stone-100 text-stone-800",
    blue:    "bg-blue-100 text-blue-800",
    lime:    "bg-lime-100 text-lime-800",
    orange:  "bg-orange-100 text-orange-800",
    amber:   "bg-amber-100 text-amber-800",
    violet:  "bg-violet-100 text-violet-800",
    gold:    "bg-yellow-100 text-yellow-800",
    indigo:  "bg-indigo-100 text-indigo-800",
    slate:   "bg-slate-100 text-slate-800",
    emerald: "bg-emerald-100 text-emerald-800",
    red:     "bg-red-100 text-red-800",
    rose:    "bg-rose-100 text-rose-800",
  };

  const cardCls  = colorMap[subject.color]  ?? "bg-gray-50 border-gray-200";
  const badgeCls = badgeMap[subject.color]  ?? "bg-gray-100 text-gray-800";

  const totalLectureQs = Object.values(countByLecture).reduce((a, b) => a + b, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center gap-3">
          <button onClick={() => router.back()} className="text-gray-400 hover:text-gray-600">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-lg">{subject.icon}</span>
          <div>
            <p className="text-sm font-bold text-gray-900 leading-none">{subject.name}</p>
            <p className="text-xs text-gray-500">{subject.code} · Lecture-wise Practice</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="card p-4 text-center">
            <div className="text-2xl font-black text-primary-600">{lectures.length}</div>
            <div className="text-xs text-gray-500 mt-1">Lectures</div>
          </div>
          <div className="card p-4 text-center">
            <div className="text-2xl font-black text-primary-600">{totalLectureQs}</div>
            <div className="text-xs text-gray-500 mt-1">Lecture Questions</div>
          </div>
          <div className="card p-4 text-center">
            <div className="text-2xl font-black text-primary-600">{allQs.length}</div>
            <div className="text-xs text-gray-500 mt-1">Total Questions</div>
          </div>
        </div>

        {/* Access gate */}
        {!hasAccess && (
          <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
            <Lock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 text-sm">Full Access Required</p>
              <p className="text-amber-700 text-xs mt-0.5">Purchase full access (₹100) to practice all lecture-wise questions.</p>
              <Link href="/signup" className="inline-block mt-2 btn-primary text-xs py-1.5 px-3">
                Get Access – ₹100
              </Link>
            </div>
          </div>
        )}

        {/* Also do full test */}
        <div className="mb-6 flex gap-3 flex-wrap">
          <Link href={`/test/${subjectId}?mode=practice`}
            className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-4 py-2.5 rounded-xl text-sm transition-colors">
            <Play className="w-4 h-4" /> Full Practice Test (200 Qs)
          </Link>
          <Link href={`/test/${subjectId}?mode=timed`}
            className="flex items-center gap-2 bg-white border border-gray-300 hover:border-primary-400 text-gray-700 font-semibold px-4 py-2.5 rounded-xl text-sm transition-colors">
            ⏱ Full Timed Test (100 Qs)
          </Link>
        </div>

        {/* Lecture cards */}
        <h2 className="text-lg font-black text-gray-900 mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary-600" />
          Choose a Lecture to Practice
        </h2>

        <div className="space-y-3">
          {lectures.map(lec => {
            const qCount = countByLecture[lec.id] ?? 0;
            const locked = !hasAccess;

            return (
              <div key={lec.id}
                className={`border rounded-xl p-4 transition-all ${cardCls} ${locked ? "opacity-70" : "hover:shadow-md cursor-pointer"}`}
                onClick={() => {
                  if (locked) return;
                  router.push(`/practice/${subjectId}/${lec.id}`);
                }}>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    {/* Lecture number badge */}
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black flex-shrink-0 ${badgeCls}`}>
                      {lec.lectureNo}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-gray-900 text-sm leading-tight">{lec.title}</p>
                      <p className="text-gray-500 text-xs mt-1 leading-relaxed line-clamp-2">{lec.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {qCount > 0 && (
                      <span className="text-xs font-bold text-gray-600 bg-white border border-gray-200 px-2 py-0.5 rounded-lg">
                        {qCount} Qs
                      </span>
                    )}
                    {locked ? (
                      <Lock className="w-4 h-4 text-gray-400" />
                    ) : (
                      <Play className="w-4 h-4 text-primary-600" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 text-center">
          <Link href="/dashboard" className="text-sm text-gray-500 hover:text-primary-600 hover:underline">
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
