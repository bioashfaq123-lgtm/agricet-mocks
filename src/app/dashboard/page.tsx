"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  BookOpen, Play, Trophy, Clock, BarChart2, Star,
  Lock, CheckCircle, TrendingUp, Award, Zap, ChevronRight
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { SUBJECTS, DEMO_SUBJECT_ID } from "@/data/subjects";
import { PREVIOUS_YEAR_PAPERS } from "@/data/previousYearPapers";
import Navbar from "@/components/Navbar";
import PaymentButton from "@/components/PaymentButton";
import PWAInstallBanner from "@/components/PWAInstallBanner";

// ── Live test date gate ──────────────────────────────────────────────────────
const LIVE_START = new Date("2026-06-08T14:30:00Z"); // 8 PM IST
const LIVE_END   = new Date("2026-06-08T16:10:00Z"); // 9:40 PM IST

function LiveTestBanner() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  if (now > LIVE_END) return null; // Hide after test ends

  if (now >= LIVE_START && now <= LIVE_END) {
    return (
      <div className="mb-6 rounded-2xl bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700 p-5 text-white shadow-xl border-2 border-green-300">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">🔴</span>
          <span className="bg-red-500 text-white text-xs font-black px-2 py-0.5 rounded-full animate-pulse">LIVE NOW</span>
          <span className="bg-white/25 text-white text-xs font-bold px-2 py-0.5 rounded-full">100% FREE</span>
        </div>
        <h3 className="text-lg font-black mb-1">FREE Live Mock Test is LIVE!</h3>
        <p className="text-green-100 text-xs mb-4">100 Questions · 100 Minutes · All Telangana Rank · Ends 9:40 PM IST</p>
        <Link href="/grand-tests/gtlive"
          className="inline-flex items-center gap-2 bg-white text-green-700 font-black px-5 py-2.5 rounded-xl text-sm hover:bg-green-50 transition-all hover:scale-105 shadow">
          Start FREE Test Now <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  // Before test — show countdown
  const diff   = Math.max(0, LIVE_START.getTime() - now.getTime());
  const totSec = Math.floor(diff / 1000);
  const d = Math.floor(totSec / 86400);
  const h = Math.floor((totSec % 86400) / 3600);
  const m = Math.floor((totSec % 3600) / 60);
  const s = totSec % 60;
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="mb-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-5 text-white shadow-xl border-2 border-green-500">
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-green-500 text-white text-xs font-black px-2 py-0.5 rounded-full">FREE</span>
        <span className="bg-yellow-400 text-black text-xs font-black px-2 py-0.5 rounded-full">UPCOMING</span>
      </div>
      <h3 className="text-base font-black text-white mb-1">FREE Live Mock Test — 8th June 2026</h3>
      <p className="text-gray-400 text-xs mb-3">8 PM – 9:40 PM IST · 100 Questions · All Telangana Rank · Absolutely FREE</p>
      <div className="grid grid-cols-4 gap-2 mb-3">
        {[{v:d,l:"Days"},{v:h,l:"Hrs"},{v:m,l:"Min"},{v:s,l:"Sec"}].map(({v,l}) => (
          <div key={l} className="bg-gray-700 rounded-xl p-2 text-center border border-gray-600">
            <div className="text-2xl font-black text-green-400">{pad(v)}</div>
            <div className="text-gray-400 text-xs">{l}</div>
          </div>
        ))}
      </div>
      <p className="text-gray-500 text-xs">📢 Share with friends — Open to all Diploma students across Telangana</p>
    </div>
  );
}

export default function DashboardPage() {
  const { user, userData, loading } = useAuth();
  const router = useRouter();
  const [greeting, setGreeting] = useState("Good morning");

  useEffect(() => {
    if (!loading && !user) router.push("/login");
  }, [user, loading, router]);

  useEffect(() => {
    const h = new Date().getHours();
    if (h < 12) setGreeting("Good morning");
    else if (h < 17) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []);

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin w-10 h-10 border-4 border-primary-600 border-t-transparent rounded-full" />
      </div>
    );
  }

  const isPaid = userData?.isPaid ?? false;
  const progress = userData?.progress ?? {};

  // Stats
  const totalAttempted = Object.values(progress).reduce((a, v) => a + (v.attempted ?? 0), 0);
  const totalCorrect   = Object.values(progress).reduce((a, v) => a + (v.correct ?? 0), 0);
  const accuracy       = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;
  const subjectsDone   = Object.keys(progress).filter(k => (progress[k]?.attempted ?? 0) > 0).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-primary-700 to-primary-500 rounded-2xl p-6 text-white mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-primary-200 text-sm">{greeting},</p>
              <h1 className="text-2xl font-black mt-1">{userData?.name ?? user.email?.split("@")[0]} 🌱</h1>
              <p className="text-primary-100 mt-1 text-sm">
                {isPaid ? "Full access activated — keep practicing!" : "Free account — upgrade to unlock all subjects"}
              </p>
            </div>
          </div>
        </div>

        {/* PWA Install Banner */}
        <PWAInstallBanner />

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Questions Attempted", value: totalAttempted, icon: BookOpen,   color: "blue"   },
            { label: "Accuracy Rate",       value: `${accuracy}%`,  icon: TrendingUp, color: "green"  },
            { label: "Subjects Practiced",  value: subjectsDone,    icon: Award,      color: "purple" },
            { label: "Total Correct",       value: totalCorrect,    icon: CheckCircle,color: "amber"  },
          ].map((s) => (
            <div key={s.label} className="card p-5">
              <div className="flex items-center justify-between mb-3">
                <s.icon className="w-5 h-5 text-primary-600" />
              </div>
              <div className="text-2xl font-black text-gray-900">{s.value}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Subscription Payment Card — shown only to unpaid users */}
        {!isPaid && (
          <div className="mb-6 rounded-2xl overflow-hidden bg-gradient-to-r from-primary-700 to-primary-500 shadow-lg">
            <div className="flex flex-col sm:flex-row items-center gap-5 p-6">
              <div className="text-5xl shrink-0">🔓</div>
              <div className="flex-1 text-center sm:text-left text-white">
                <h3 className="font-black text-lg leading-tight mb-1">
                  Unlock All 17 Subjects + Previous Year Papers
                </h3>
                <p className="text-primary-100 text-sm">
                  3,400+ MCQs · PYQ 2023, 2024 &amp; 2025 · Lifetime access · Just ₹199 one-time
                </p>
                <p className="text-primary-200 text-xs mt-1">
                  Payment issues? Call{" "}
                  <a href="tel:+919059336236" className="text-white font-bold underline">+91 90593 36236</a>
                </p>
              </div>
              <div className="shrink-0">
                <PaymentButton userId={user.uid} userEmail={user.email ?? ""} userName={userData?.name ?? ""} />
              </div>
            </div>
          </div>
        )}

        {/* Objective Book Promo */}
        <div className="mb-8 rounded-2xl overflow-hidden border border-amber-200 bg-gradient-to-r from-amber-50 to-green-50">
          <div className="flex flex-col sm:flex-row items-center gap-4 p-5">
            <div className="text-4xl shrink-0">📗</div>
            <div className="flex-1 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-1 rounded-full mb-1">
                ✨ NEW — Free Sample Inside
              </div>
              <h3 className="font-black text-gray-900 text-base leading-tight">
                AGRICET Best Objective Book — DA 121 Free Practice (150 Qs)
              </h3>
              <p className="text-gray-500 text-xs mt-1">
                Practice Soil Science &amp; Fertility questions free · Unlock all 17 subjects + PYQ Papers for just ₹199
              </p>
            </div>
            <Link href="/book"
              className="shrink-0 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all hover:scale-105 shadow">
              <BookOpen className="w-4 h-4" /> Explore Book
            </Link>
          </div>
        </div>

        {/* ── FREE LIVE MOCK TEST CARD ── */}
        <LiveTestBanner />

        {/* Grand Tests */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">🏆 Grand Mock Tests</h2>
            <Link href="/grand-tests" className="text-primary-600 text-sm font-medium hover:underline flex items-center gap-1">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-primary-600 via-primary-700 to-indigo-800 p-5 text-white shadow-lg flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Trophy className="w-5 h-5 text-amber-300" />
                <h3 className="font-black text-base">10 Full-Length AGRICET Grand Tests</h3>
              </div>
              <p className="text-primary-100 text-sm mb-3">
                100 questions · 100 minutes · All 17 subjects · PJTSAU standard · With explanations
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-white/20 px-2 py-1 rounded-lg font-semibold">1,000 Questions</span>
                <span className="bg-white/20 px-2 py-1 rounded-lg font-semibold">Question Navigator</span>
                <span className="bg-white/20 px-2 py-1 rounded-lg font-semibold">Score Analysis</span>
              </div>
            </div>
            <Link href="/grand-tests"
              className="shrink-0 bg-amber-400 hover:bg-amber-300 text-gray-900 font-black px-5 py-2.5 rounded-xl text-sm flex items-center gap-2 transition-all hover:scale-105 shadow">
              Start Now <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Previous Year Papers */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">📋 Previous Year Papers</h2>
            <Link href="/previous-years" className="text-primary-600 text-sm font-medium hover:underline flex items-center gap-1">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {PREVIOUS_YEAR_PAPERS.filter(p => p.available).map((paper) => (
              <div key={paper.id} className="card p-5 border-l-4 border-primary-500">
                <div className="flex items-center justify-between mb-2">
                  <span className="badge bg-primary-100 text-primary-700 font-bold">{paper.year}</span>
                  <span className="text-xs text-gray-500">{paper.totalQuestions} Qs</span>
                </div>
                <h3 className="font-semibold text-gray-800 text-sm mb-1 leading-snug">{paper.title}</h3>
                <p className="text-xs text-gray-500 mb-4">{paper.duration} minutes</p>
                {isPaid || paper.isFree ? (
                  <Link href={`/test/previous-year/${paper.id}`}
                    className="w-full btn-primary text-center block text-sm py-2">
                    <Play className="w-4 h-4 inline mr-1" /> Start Practice
                  </Link>
                ) : (
                  <button className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-400 rounded-xl py-2 text-sm cursor-not-allowed">
                    <Lock className="w-4 h-4" /> Unlock for ₹199
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Subjects Grid */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">📚 Subject-wise Mock Tests</h2>
            <span className="text-sm text-gray-500">{isPaid ? "All unlocked" : "1 of 14 free"}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SUBJECTS.map((sub) => {
              const subProgress = progress[sub.id];
              const attempted   = subProgress?.attempted ?? 0;
              const correct     = subProgress?.correct ?? 0;
              const lastScore   = subProgress?.lastScore ?? 0;
              const isDemo      = sub.id === DEMO_SUBJECT_ID;
              const hasAccess   = isPaid || isDemo;
              const pct         = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;

              return (
                <div key={sub.id} className={`card p-5 ${!hasAccess ? "opacity-80" : ""}`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{sub.icon}</span>
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-xs font-bold text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">{sub.code}</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 text-sm leading-tight">{sub.name}</h3>
                        <span className="text-xs text-gray-400">{sub.totalQuestions} questions</span>
                      </div>
                    </div>
                    {isDemo && !isPaid && (
                      <span className="badge bg-green-100 text-green-700 text-xs">Free</span>
                    )}
                    {!hasAccess && (
                      <Lock className="w-4 h-4 text-gray-400" />
                    )}
                  </div>

                  {/* Progress bar */}
                  {attempted > 0 && (
                    <div className="mb-3">
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>Last score: {lastScore}%</span>
                        <span>Accuracy: {pct}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary-500 rounded-full transition-all"
                          style={{ width: `${lastScore}%` }}
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col gap-2 mt-2">
                    {hasAccess ? (
                      <>
                        {/* Lecture-wise Practice — primary action */}
                        <Link href={`/lectures/${sub.id}`}
                          className="w-full btn-primary text-center text-xs py-2 flex items-center justify-center gap-1.5">
                          <BookOpen className="w-3 h-3" /> Lecture-wise Practice
                        </Link>
                        {/* Full test row */}
                        <div className="flex gap-2">
                          <Link href={`/test/${sub.id}?mode=practice`}
                            className="flex-1 btn-secondary text-center text-xs py-2 flex items-center justify-center gap-1">
                            <Play className="w-3 h-3" /> Full Practice
                          </Link>
                          <Link href={`/test/${sub.id}?mode=timed`}
                            className="flex-1 btn-secondary text-center text-xs py-2 flex items-center justify-center gap-1">
                            <Clock className="w-3 h-3" /> Timed
                          </Link>
                        </div>
                      </>
                    ) : (
                      <div className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-400 rounded-xl py-2 text-xs">
                        <Lock className="w-3 h-3" /> Unlock with ₹199 plan
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Footer credit */}
      <div className="border-t border-gray-100 bg-white mt-8 py-4 text-center space-y-2">
        <p className="text-sm text-gray-500 font-medium">
          Prepared by{" "}
          <span className="text-primary-700 font-bold">NALANDA STUDY CIRCLE</span>
          ,{" "}
          <span className="text-gray-700 font-semibold">JAGTIAL</span>
        </p>
        <Link href="/promo" className="inline-flex items-center gap-1.5 text-xs text-primary-600 hover:underline font-medium">
          📸 View &amp; Download Promotional Slides
        </Link>
      </div>
    </div>
  );
}
