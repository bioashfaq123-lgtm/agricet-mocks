"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  Trophy, Clock, BookOpen, Zap,
  ChevronRight, BarChart2, Lock, CheckCircle, Star,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { GRAND_TESTS } from "@/data/grandTestMeta";

const difficultyConfig = {
  Mixed:  { label: "Mixed",  color: "bg-blue-100 text-blue-700 border-blue-200" },
  Medium: { label: "Medium", color: "bg-amber-100 text-amber-700 border-amber-200" },
  Hard:   { label: "Hard",   color: "bg-red-100 text-red-600 border-red-200" },
};

const FEATURES = [
  { icon: BookOpen,  text: "1,200 Questions" },
  { icon: Clock,     text: "100 min / Test" },
  { icon: Zap,       text: "Detailed Explanations" },
  { icon: BarChart2, text: "Score & Analysis" },
];

export default function GrandTestsPage() {
  const { user, userData, loading } = useAuth();
  const router = useRouter();

  const isPaid = userData?.isPaid ?? false;
  const tests  = GRAND_TESTS.filter(t => t.id !== "gtlive");

  useEffect(() => {
    if (!loading && !user) router.replace("/login");
  }, [loading, user, router]);

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin w-10 h-10 border-4 border-primary-600 border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Page Header ── */}
      <div className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/dashboard" className="text-gray-400 hover:text-gray-600 transition-colors">
            <ChevronRight className="w-5 h-5 rotate-180" />
          </Link>
          <Trophy className="w-5 h-5 text-amber-500" />
          <h1 className="text-base font-black text-gray-900">Grand Mock Tests</h1>
          <span className="ml-auto text-xs text-gray-400 font-medium">{tests.length} Tests</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6 space-y-5">

        {/* ── Hero Banner ── */}
        <div className="rounded-2xl bg-gradient-to-br from-primary-700 via-primary-800 to-indigo-900 p-6 text-white shadow-lg">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="w-6 h-6 text-amber-300" />
                <h2 className="text-xl font-black">Full-Length Grand Mock Tests</h2>
              </div>
              <p className="text-primary-200 text-sm leading-relaxed">
                100 questions · 100 minutes · All 17 AGRICET subjects · PJTSAU standard
              </p>
            </div>
            {!isPaid && (
              <Link
                href="/dashboard"
                className="flex-shrink-0 bg-amber-400 hover:bg-amber-300 text-gray-900 font-black text-xs px-4 py-2 rounded-xl transition-colors shadow"
              >
                Unlock Pro
              </Link>
            )}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {FEATURES.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2 text-xs font-semibold">
                <Icon className="w-3.5 h-3.5 text-amber-300 flex-shrink-0" />
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* ── Progress Summary (paid users) ── */}
        {isPaid && (
          <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-black text-gray-900">Pro Access Active</p>
              <p className="text-xs text-gray-500">All {tests.length} grand tests unlocked. Attempt anytime, as many times as you want.</p>
            </div>
          </div>
        )}

        {/* ── Tests Grid ── */}
        <div className="space-y-3">
          {tests.map((test, idx) => {
            const locked = !isPaid;
            const diff   = difficultyConfig[test.difficulty];

            return (
              <div
                key={test.id}
                className={`bg-white rounded-2xl border shadow-sm overflow-hidden transition-all ${
                  locked
                    ? "border-gray-100 opacity-80"
                    : "border-gray-100 hover:border-primary-200 hover:shadow-md hover:-translate-y-0.5"
                }`}
              >
                <div className="p-4 flex items-center gap-4">
                  {/* Index */}
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-black text-base flex-shrink-0 ${
                    locked ? "bg-gray-100 text-gray-400" : "bg-primary-50 text-primary-700"
                  }`}>
                    {idx + 1}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-0.5">
                      <h3 className="font-black text-gray-900 text-sm">{test.title}</h3>
                      {test.badge && (
                        <span className="text-xs font-bold bg-amber-50 text-amber-600 border border-amber-200 px-2 py-0.5 rounded-full">
                          {test.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed mb-2 line-clamp-1">{test.description}</p>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <BookOpen className="w-3 h-3" />{test.totalQuestions} Qs
                      </span>
                      <span className="text-gray-200">·</span>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />{test.duration} min
                      </span>
                      <span className="text-gray-200">·</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${diff.color}`}>
                        {diff.label}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  {locked ? (
                    <div className="flex flex-col items-center gap-1 flex-shrink-0 text-center">
                      <Lock className="w-4 h-4 text-gray-300" />
                      <span className="text-xs text-gray-400 font-semibold">Pro</span>
                    </div>
                  ) : (
                    <Link
                      href={`/grand-tests/${test.id}`}
                      className="flex-shrink-0 inline-flex items-center gap-1.5 bg-primary-600 hover:bg-primary-700 text-white font-bold text-xs px-4 py-2 rounded-xl transition-colors shadow-sm"
                    >
                      Start <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Upgrade Banner (free users) ── */}
        {!isPaid && (
          <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 p-6 text-center shadow-sm">
            <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Star className="w-6 h-6 text-amber-500" />
            </div>
            <h3 className="font-black text-gray-900 text-base mb-1">Unlock All {tests.length} Grand Tests</h3>
            <p className="text-gray-500 text-sm mb-4">
              Full access to all grand tests, subject-wise tests, PYQs and more — one-time ₹199.
            </p>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-black px-6 py-3 rounded-xl text-sm transition-colors shadow"
            >
              Upgrade to Pro — ₹199 <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
