"use client";
import Link from "next/link";
import { Trophy, BookOpen, Clock, Zap, BarChart2, CheckCircle, Star, ArrowRight } from "lucide-react";

/**
 * /promo — Standalone promotional slide page
 * Can be screenshotted at 1280×720 (YouTube thumbnail) or 1080×1080 (Instagram).
 * Linked from the dashboard for easy sharing.
 */
export default function PromoPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 gap-10">

      {/* ── YouTube / 16:9 Slide (1280 × 720 style) ── */}
      <div
        id="yt-slide"
        className="w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl relative"
        style={{ background: "linear-gradient(135deg, #166534 0%, #14532d 40%, #1e1b4b 100%)" }}
      >
        {/* Background decorative shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary-300/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/3 rounded-full blur-3xl" />
          {/* Wheat emoji watermarks */}
          <div className="absolute top-6 left-8 text-6xl opacity-10">🌾</div>
          <div className="absolute bottom-6 right-8 text-5xl opacity-10">🌱</div>
          <div className="absolute top-6 right-32 text-4xl opacity-10">🌿</div>
        </div>

        <div className="relative h-full flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-6">
          {/* Left content */}
          <div className="flex-1 text-white">
            {/* Brand */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-amber-400 rounded-lg flex items-center justify-center text-gray-900 font-black text-sm">A</div>
              <span className="text-xs font-bold text-primary-200 tracking-wider uppercase">NALANDA STUDY CIRCLE · JAGTIAL</span>
            </div>

            {/* Main title */}
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-2">
              AGRICET 2026<br />
              <span className="text-amber-400">Grand Mock Test</span><br />
              Series 🏆
            </h1>

            <p className="text-primary-200 text-sm md:text-base mb-4 max-w-xs leading-relaxed">
              12 Full-Length Tests · 1,200 MCQs · All 17 Subjects · PJTSAU Standard
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                { icon: BookOpen, label: "1,200 Questions" },
                { icon: Clock, label: "100 Min / Test" },
                { icon: Zap, label: "Explanations" },
                { icon: BarChart2, label: "Score Analysis" },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-1.5 bg-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  <f.icon className="w-3 h-3" />
                  {f.label}
                </div>
              ))}
            </div>

            {/* Price badge */}
            <div className="inline-flex items-center gap-3 bg-amber-400 text-gray-900 px-5 py-3 rounded-2xl">
              <div>
                <div className="text-xs font-bold">Full Access (All 17 Subjects + PYQ + Grand Tests)</div>
                <div className="text-2xl font-black">Only ₹199 · Lifetime</div>
              </div>
              <Star className="w-8 h-8 fill-gray-900" />
            </div>
          </div>

          {/* Right — Grand test cards grid */}
          <div className="flex-shrink-0 grid grid-cols-2 gap-3 w-full md:w-64">
            {[
              { n: "Grand Test 1",  badge: "Pro",      sub: "Mixed · 100 Qs", color: "from-emerald-500 to-green-700" },
              { n: "Grand Test 2",  badge: "Pro",      sub: "Mixed · 100 Qs", color: "from-teal-500 to-teal-700" },
              { n: "Grand Test 3",  badge: "Pro",      sub: "Hard · 100 Qs", color: "from-blue-600 to-blue-800" },
              { n: "Grand Test 4",  badge: "Pro",      sub: "Hard · 100 Qs", color: "from-violet-600 to-purple-800" },
              { n: "Grand Test 5",  badge: "Pro",      sub: "Mixed · 100 Qs", color: "from-pink-600 to-rose-800" },
              { n: "Grand Test 6",  badge: "Pro",      sub: "Hard · 100 Qs", color: "from-orange-600 to-red-700" },
              { n: "Grand Test 7",  badge: "Pro",      sub: "Mixed · 100 Qs", color: "from-cyan-600 to-sky-800" },
              { n: "Grand Test 8",  badge: "Pro",      sub: "Hard · 100 Qs", color: "from-indigo-600 to-indigo-900" },
              { n: "Grand Test 9",  badge: "Pro",      sub: "Mixed · 100 Qs", color: "from-lime-600 to-green-800" },
              { n: "Grand Test 10", badge: "Pro",      sub: "Hard · 100 Qs", color: "from-amber-600 to-yellow-800" },
            ].map((t) => (
              <div key={t.n} className={`bg-gradient-to-br ${t.color} rounded-xl p-3 text-white text-center shadow-md`}>
                <div className="text-xs font-black leading-tight">{t.n}</div>
                <div className="text-xs bg-white/25 px-2 py-0.5 rounded-full mt-1 inline-block font-bold">{t.badge}</div>
                <div className="text-xs text-white/70 mt-1">{t.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom URL bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm py-2.5 px-8 flex items-center justify-between">
          <div className="text-white text-xs font-bold tracking-wider">
            🌐 agricet.nalandaclasses.com
          </div>
          <div className="text-primary-200 text-xs">
            Prepared by NALANDA STUDY CIRCLE, JAGTIAL · 📞 +91 90593 36236
          </div>
        </div>
      </div>

      {/* ── Square / Instagram Slide (1080 × 1080 style) ── */}
      <div
        id="sq-slide"
        className="w-full max-w-2xl aspect-square rounded-3xl overflow-hidden shadow-2xl relative"
        style={{ background: "linear-gradient(150deg, #166534 0%, #14532d 50%, #312e81 100%)" }}
      >
        {/* BG decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-72 h-72 bg-amber-400/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl" />
          <div className="absolute top-8 left-8 text-7xl opacity-10">🏆</div>
          <div className="absolute bottom-8 right-8 text-6xl opacity-10">🌾</div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center p-10 text-white text-center">
          {/* Brand */}
          <div className="flex items-center gap-2 mb-5">
            <div className="w-10 h-10 bg-amber-400 rounded-xl flex items-center justify-center text-gray-900 font-black">A</div>
            <div className="text-left">
              <div className="text-xs font-bold text-primary-200">AEO & AGRICET Mock Test Series</div>
              <div className="text-xs text-primary-300">by NALANDA STUDY CIRCLE</div>
            </div>
          </div>

          <Trophy className="w-16 h-16 text-amber-400 mb-4" />

          <h2 className="text-4xl font-black leading-tight mb-2">
            Grand Mock Tests<br />
            <span className="text-amber-400">Now Live! 🎉</span>
          </h2>
          <p className="text-primary-200 text-base mb-6 max-w-sm leading-relaxed">
            12 Full-Length AGRICET Grand Tests<br />
            1,200 Questions · All 17 DA Subjects<br />
            100 Minutes · PJTSAU Standard
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-3 w-full mb-7">
            {[
              { icon: "🏆", text: "12 Grand Tests" },
              { icon: "📊", text: "Score Analysis" },
              { icon: "💡", text: "Explanations" },
              { icon: "⏱️", text: "Auto Timer" },
            ].map((f) => (
              <div key={f.text} className="flex items-center gap-2 bg-white/15 rounded-xl px-4 py-3 text-sm font-semibold">
                <span className="text-base">{f.icon}</span> {f.text}
              </div>
            ))}
          </div>

          {/* Price */}
          <div className="bg-amber-400 text-gray-900 rounded-2xl px-8 py-4 mb-5 w-full">
            <div className="text-xs font-bold mb-0.5">All 17 Subjects + Grand Tests + PYQ Papers</div>
            <div className="text-3xl font-black">₹199 Only — Lifetime Access</div>
          </div>

          {/* URL */}
          <div className="text-primary-300 text-xs font-bold tracking-wider">
            🌐 agricet.nalandaclasses.com · 📞 +91 90593 36236
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-5xl text-center">
        <h2 className="font-black text-gray-900 text-lg mb-2">📸 How to Use These Slides</h2>
        <p className="text-gray-500 text-sm mb-4">
          Screenshot the slides above to use as YouTube thumbnails, WhatsApp status, or Instagram posts.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-center">
            <div className="text-red-600 font-bold text-sm">YouTube Thumbnail</div>
            <div className="text-gray-500 text-xs mt-1">First card — 16:9 wide format</div>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-xl px-4 py-3 text-center">
            <div className="text-purple-600 font-bold text-sm">Instagram Post</div>
            <div className="text-gray-500 text-xs mt-1">Second card — Square 1:1 format</div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-center">
            <div className="text-green-600 font-bold text-sm">WhatsApp Status</div>
            <div className="text-gray-500 text-xs mt-1">Either card works for sharing</div>
          </div>
        </div>
        <div className="mt-5 flex justify-center gap-4">
          <Link href="/dashboard" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-all">
            ← Back to Dashboard
          </Link>
          <Link href="/grand-tests" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-all">
            Start Grand Tests <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
