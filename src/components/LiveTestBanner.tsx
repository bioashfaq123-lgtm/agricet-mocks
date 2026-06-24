"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { LIVE_START_UTC as LIVE_START, LIVE_END_UTC as LIVE_END } from "@/lib/liveTest";

/** FREE Live Mock Test promo banner — countdown → live → practice.
 *  Shared by the homepage and the dashboard so they always match. */
export default function LiveTestBanner() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  // After the test ends — point to the practice paper.
  if (now > LIVE_END) {
    return (
      <div className="rounded-2xl bg-gradient-to-br from-green-700 to-emerald-800 p-5 text-white shadow-xl border-2 border-green-300">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">✅</span>
          <span className="bg-amber-400 text-black text-xs font-black px-2 py-0.5 rounded-full">TEST OVER</span>
        </div>
        <h3 className="text-lg font-black mb-1">FREE Live Mock Test — now open for practice</h3>
        <p className="text-green-100 text-xs mb-4">The 28th June live paper is available to practise any time, with full answer key &amp; explanations.</p>
        <Link href="/grand-tests/gtlive" className="inline-flex items-center gap-2 bg-white text-green-700 font-black px-4 py-2.5 rounded-xl text-sm hover:bg-green-50 transition-all shadow">
          Practise the paper <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  // During the live window — start the test.
  if (now >= LIVE_START && now <= LIVE_END) {
    return (
      <div className="rounded-2xl bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700 p-5 text-white shadow-xl border-2 border-green-300">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">🔴</span>
          <span className="bg-red-500 text-white text-xs font-black px-2 py-0.5 rounded-full animate-pulse">LIVE NOW</span>
          <span className="bg-white/25 text-white text-xs font-bold px-2 py-0.5 rounded-full">100% FREE</span>
        </div>
        <h3 className="text-lg font-black mb-1">FREE Live Mock Test is LIVE!</h3>
        <p className="text-green-100 text-xs mb-2">100 Questions · 100 Minutes · All 17 Subjects · Open till 12 PM IST (29th June)</p>
        <p className="inline-flex items-center gap-1 bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-full mb-4">🌐 Bilingual — English + తెలుగు</p>
        <Link href="/grand-tests/gtlive"
          className="block w-fit bg-white text-green-700 font-black px-5 py-2.5 rounded-xl text-sm hover:bg-green-50 transition-all shadow">
          Start FREE Test Now →
        </Link>
      </div>
    );
  }

  // Before the test — countdown.
  const diff   = Math.max(0, LIVE_START.getTime() - now.getTime());
  const totSec = Math.floor(diff / 1000);
  const d = Math.floor(totSec / 86400);
  const h = Math.floor((totSec % 86400) / 3600);
  const m = Math.floor((totSec % 3600) / 60);
  const s = totSec % 60;
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-5 sm:p-6 text-white shadow-xl border-2 border-green-500">
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-green-500 text-white text-xs font-black px-2 py-0.5 rounded-full">FREE</span>
        <span className="bg-yellow-400 text-black text-xs font-black px-2 py-0.5 rounded-full">UPCOMING</span>
      </div>
      <h3 className="text-lg sm:text-xl font-black text-white mb-1">FREE Live AGRICET Mock Test — 28th June 2026 (Sunday)</h3>
      <p className="text-gray-400 text-xs sm:text-sm mb-2">8 PM (28th) – 12 PM (29th) IST · 100 Questions · All 17 Subjects · Absolutely FREE</p>
      <p className="inline-flex items-center gap-1 bg-green-500/20 text-green-300 border border-green-500/40 text-xs font-bold px-2.5 py-1 rounded-full mb-3">🌐 Bilingual — English + తెలుగు</p>
      <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-3">
        {[{v:d,l:"Days"},{v:h,l:"Hrs"},{v:m,l:"Min"},{v:s,l:"Sec"}].map(({v,l}) => (
          <div key={l} className="bg-gray-700/70 rounded-xl p-2 sm:p-3 text-center border border-gray-600">
            <div className="text-2xl sm:text-3xl font-black text-green-400">{pad(v)}</div>
            <div className="text-gray-400 text-[11px] sm:text-xs">{l}</div>
          </div>
        ))}
      </div>
      <div className="bg-yellow-400/15 border border-yellow-400/40 rounded-xl p-3">
        <p className="text-yellow-300 text-xs font-bold mb-0.5">⚠️ Sign in / create your account before the test starts</p>
        <p className="text-yellow-100/80 text-xs leading-relaxed">
          Full-length paper covering all 17 subjects, with an overall All-Telangana ranking and detailed results
          (answer key &amp; explanations). The test can be attempted <span className="font-bold">once per student</span> during the live window.
        </p>
      </div>
    </div>
  );
}
