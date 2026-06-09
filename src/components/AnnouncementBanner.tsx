"use client";
import { useState } from "react";
import Link from "next/link";

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="relative bg-emerald-700 text-white text-sm font-medium text-center py-2 px-10">
      🎉 AGRICET 2025 Official Paper is{" "}
      <span className="font-black underline">FREE to Attempt</span> — No payment needed!&nbsp;
      <Link
        href="/signup"
        className="inline-flex items-center gap-1 bg-white text-emerald-700 font-bold px-3 py-0.5 rounded-full text-xs hover:bg-emerald-50 transition-colors"
      >
        Sign up &amp; Start →
      </Link>
      <button
        onClick={() => setVisible(false)}
        aria-label="Close"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-lg leading-none"
      >
        ✕
      </button>
    </div>
  );
}
