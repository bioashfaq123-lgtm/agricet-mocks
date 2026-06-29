"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LIVE_START_UTC as LIVE_START, LIVE_END_UTC as LIVE_END } from "@/lib/liveTest";

/** Compact, always-visible FREE Live Mock Test button shown on EVERY page
 *  (mounted in the root layout). Sits bottom-LEFT so it never collides with
 *  the ChatBot (bottom-right). Adapts by phase: countdown → LIVE → practise.
 *
 *  Hidden only (a) while a student is actually taking the live test, so it
 *  doesn't cover the question UI, and (b) a week after the window closes. */
export default function GlobalLiveTestButton() {
  const [now, setNow] = useState<Date | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  // Avoid hydration mismatch — render nothing until the clock is set client-side.
  if (!now) return null;

  // Don't cover the live test screen itself.
  if (pathname?.startsWith("/grand-tests/gtlive")) return null;

  // Retire the button a week after the test window closes.
  const HIDE_AFTER = new Date(LIVE_END.getTime() + 7 * 24 * 60 * 60 * 1000);
  if (now > HIDE_AFTER) return null;

  const base =
    "fixed bottom-5 left-4 sm:left-5 z-50 flex items-center gap-2 rounded-full font-black shadow-2xl " +
    "px-4 py-3 text-sm transition-transform hover:scale-105 active:scale-95";

  // ── After the window: show results / answer key ──
  if (now > LIVE_END) {
    return (
      <Link href="/answer-key" className={`${base} bg-green-700 text-white border-2 border-green-300`}>
        <span>📊</span>
        <span>Live Test Results &amp; Key</span>
      </Link>
    );
  }

  // ── During the live window: start now ──
  if (now >= LIVE_START && now <= LIVE_END) {
    return (
      <Link
        href="/grand-tests/gtlive"
        className={`${base} bg-gradient-to-r from-red-600 to-rose-600 text-white border-2 border-red-300 animate-pulse`}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
        <span>🔴 LIVE NOW — Start FREE Test</span>
      </Link>
    );
  }

  // ── Before the test: countdown ──
  const diff = Math.max(0, LIVE_START.getTime() - now.getTime());
  const totSec = Math.floor(diff / 1000);
  const d = Math.floor(totSec / 86400);
  const h = Math.floor((totSec % 86400) / 3600);
  const m = Math.floor((totSec % 3600) / 60);
  const s = totSec % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  const countdown = d > 0 ? `${d}d ${pad(h)}h ${pad(m)}m` : `${pad(h)}:${pad(m)}:${pad(s)}`;

  return (
    <Link
      href="/grand-tests/gtlive"
      className={`${base} bg-gray-900 text-white border-2 border-green-500`}
    >
      <span className="bg-green-500 text-white text-[10px] font-black px-1.5 py-0.5 rounded-full">FREE</span>
      <span className="flex flex-col leading-tight">
        <span className="text-[11px] text-green-300 font-bold">Live Test • 28 Jun</span>
        <span className="text-sm font-black tabular-nums">{countdown}</span>
      </span>
    </Link>
  );
}
