"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Trophy, Clock, BookOpen, Zap, ChevronRight, BarChart2, Lock } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { GRAND_TESTS } from "@/data/grandTestMeta";

const LIVE_START = new Date("2026-06-08T14:30:00Z");
const LIVE_END   = new Date("2026-06-08T16:10:00Z");

function useLiveBannerState() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  if (now < LIVE_START) {
    const diff = Math.max(0, LIVE_START.getTime() - now.getTime());
    const s = Math.floor(diff / 1000);
    const d = Math.floor(s / 86400);
    const h = Math.floor((s % 86400) / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return { status: "before" as const, d, h, m, s: sec };
  }
  if (now > LIVE_END) return { status: "ended" as const, d:0,h:0,m:0,s:0 };
  return { status: "live" as const, d:0,h:0,m:0,s:0 };
}

const difficultyConfig = {
  Mixed:  { label: "Mixed",  color: "bg-blue-100 text-blue-700" },
  Medium: { label: "Medium", color: "bg-amber-100 text-amber-700" },
  Hard:   { label: "Hard",   color: "bg-red-100 text-red-600" },
};

export default function GrandTestsPage() {
  const { user, userData, loading } = useAuth();
  const router = useRouter();

  // ── ALL hooks must be called before any early return ──
  const liveState = useLiveBannerState();
  const isPaid    = userData?.isPaid ?? false;
  const FREE_TEST_IDS = ["gtlive"];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin w-10 h-10 border-4 border-primary-600 border-t-transparent rounded-full" />
      </div>
    );
  }
  // Non-logged-in users can see the page and take the free live test

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

        {/* ── FREE LIVE MOCK TEST BANNER ── */}
        {liveState.status === "before" && (
          <div className="rounded-2xl bg-gradient-to-br from-gray-800 via-gray-900 to-black p-5 text-white shadow-lg border-2 border-green-500">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-green-500 text-white text-xs font-black px-2 py-0.5 rounded-full">FREE</span>
              <span className="bg-yellow-500 text-black text-xs font-black px-2 py-0.5 rounded-full">UPCOMING</span>
            </div>
            <h2 className="text-lg font-black text-white mb-1">FREE Live Mock Test — 8th June 2026</h2>
            <p className="text-gray-400 text-xs mb-3">8:00 PM – 9:40 PM IST · 100 Questions · 100 Minutes · All Telangana Rank</p>
            <div className="grid grid-cols-4 gap-2 mb-4">
              {[{v:liveState.d,l:"Days"},{v:liveState.h,l:"Hrs"},{v:liveState.m,l:"Min"},{v:liveState.s,l:"Sec"}].map(({v,l})=>(
                <div key={l} className="bg-gray-700 rounded-xl p-2 text-center border border-gray-600">
                  <div className="text-2xl font-black text-green-400">{String(v).padStart(2,"0")}</div>
                  <div className="text-gray-400 text-xs">{l}</div>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-xs">🔒 Test will unlock automatically on 8 June at 8 PM IST</p>
          </div>
        )}

        {liveState.status === "live" && (
          <div className="rounded-2xl bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700 p-5 text-white shadow-lg border-2 border-green-300">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">🔴</span>
              <span className="bg-red-500 text-white text-xs font-black px-2 py-0.5 rounded-full animate-pulse">LIVE NOW</span>
              <span className="bg-white/20 text-white text-xs font-bold px-2 py-0.5 rounded-full">100% FREE</span>
            </div>
            <h2 className="text-lg font-black mb-1">FREE Live Mock Test is LIVE!</h2>
            <p className="text-green-100 text-xs mb-3">Ends at 9:40 PM IST · 100 Questions · 100 Minutes · All Telangana Rank</p>
            <Link href="/grand-tests/gtlive"
              className="inline-flex items-center gap-2 bg-white text-green-700 font-black px-5 py-2 rounded-xl text-sm hover:bg-green-50 transition-colors">
              Start FREE Test Now <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {liveState.status === "ended" && (
          <div className="rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 p-5 text-white shadow-lg border border-gray-500">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">🏁</span>
              <span className="bg-gray-500 text-white text-xs font-black px-2 py-0.5 rounded-full">ENDED</span>
            </div>
            <h2 className="text-lg font-black mb-1">FREE Live Mock Test — Completed</h2>
            <p className="text-gray-300 text-xs">The live test conducted on 8th June 2026 has ended. Thank you for participating!</p>
          </div>
        )}

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
          {GRAND_TESTS.filter(t => t.id !== "gtlive").map((test, idx) => {
            const isFree   = FREE_TEST_IDS.includes(test.id);
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
