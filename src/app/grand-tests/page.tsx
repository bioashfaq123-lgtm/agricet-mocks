"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Trophy, Clock, BookOpen, Zap, ChevronRight, BarChart2, Lock } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { GRAND_TESTS } from "@/data/grandTestMeta";

const difficultyConfig = {
  Mixed:  { label: "Mixed",  color: "bg-blue-100 text-blue-700" },
  Medium: { label: "Medium", color: "bg-amber-100 text-amber-700" },
  Hard:   { label: "Hard",   color: "bg-red-100 text-red-600" },
};

export default function GrandTestsPage() {
  const { user, userData, loading } = useAuth();
  const router = useRouter();

  // Wait for Firebase auth to finish loading before redirecting
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin w-10 h-10 border-4 border-primary-600 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!user) { router.push("/login"); return null; }

  const isPaid = userData?.isPaid ?? false;

  // All grand tests require a paid subscription
  const FREE_COUNT = 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Header ── */}
      <div className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/dashboard" className="text-gray-400 hover:text-gray-600">
            <ChevronRight className="w-5 h-5 rotate-180" />
          </Link>
          <Trophy className="w-5 h-5 text-amber-500" />
          <h1 className="text-base font-black text-gray-900">Grand Mock Tests</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6 space-y-5">
        {/* Banner */}
        <div className="rounded-2xl bg-gradient-to-br from-primary-600 via-primary-700 to-indigo-800 p-6 text-white shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <Trophy className="w-7 h-7 text-amber-300" />
            <h2 className="text-xl font-black">10 Full-Length Grand Tests</h2>
          </div>
          <p className="text-primary-100 text-sm leading-relaxed">
            100 questions · 100 minutes · All 17 AGRICET subjects · PJTSAU standard
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <div className="flex items-center gap-1.5 bg-white/15 rounded-lg px-3 py-1.5 text-xs font-semibold">
              <BookOpen className="w-3.5 h-3.5" />1000 Questions
            </div>
            <div className="flex items-center gap-1.5 bg-white/15 rounded-lg px-3 py-1.5 text-xs font-semibold">
              <Clock className="w-3.5 h-3.5" />100 min / Test
            </div>
            <div className="flex items-center gap-1.5 bg-white/15 rounded-lg px-3 py-1.5 text-xs font-semibold">
              <Zap className="w-3.5 h-3.5" />Explanations Included
            </div>
            <div className="flex items-center gap-1.5 bg-white/15 rounded-lg px-3 py-1.5 text-xs font-semibold">
              <BarChart2 className="w-3.5 h-3.5" />Score Analysis
            </div>
          </div>
        </div>

        {/* Tests Grid */}
        <div className="grid gap-3">
          {GRAND_TESTS.map((test, idx) => {
            const isFree   = idx < FREE_COUNT;
            const locked   = !isPaid && !isFree;
            const diff     = difficultyConfig[test.difficulty];

            return (
              <div
                key={test.id}
                className={`card p-5 flex items-center gap-4 transition-all ${locked ? "opacity-70" : "hover:shadow-md hover:-translate-y-0.5"}`}
              >
                {/* Number circle */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg flex-shrink-0 ${
                  locked ? "bg-gray-100 text-gray-400" : "bg-primary-100 text-primary-700"
                }`}>
                  {idx + 1}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-black text-gray-900 text-base">{test.title}</h3>
                    {test.badge && (
                      <span className="text-xs font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
                        {test.badge}
                      </span>
                    )}
                    {isFree && !locked && (
                      <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                        FREE
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed mb-2 line-clamp-2">{test.description}</p>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />{test.totalQuestions} Questions
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />{test.duration} min
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${diff.color}`}>
                      {diff.label}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                {locked ? (
                  <div className="flex flex-col items-center gap-1 flex-shrink-0">
                    <Lock className="w-5 h-5 text-gray-400" />
                    <span className="text-xs text-gray-400 font-medium">Pro</span>
                  </div>
                ) : (
                  <Link
                    href={`/grand-tests/${test.id}`}
                    className="btn-primary py-2 px-4 text-sm flex-shrink-0 flex items-center gap-1.5"
                  >
                    Start <ChevronRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* Upgrade banner for non-paid users */}
        {!isPaid && (
          <div className="card p-5 border-2 border-amber-200 bg-amber-50 text-center">
            <div className="text-2xl mb-2">🔓</div>
            <h3 className="font-black text-gray-900 mb-1">Unlock All 10 Grand Tests</h3>
            <p className="text-gray-500 text-sm mb-4">
              Get unlimited access to all grand tests, PYQs, subject tests, and more with Pro.
            </p>
            <Link href="/dashboard" className="btn-primary inline-flex items-center gap-2 px-6">
              Upgrade to Pro <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
