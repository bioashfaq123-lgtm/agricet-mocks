"use client";
import { useState } from "react";

const MESSAGE = "🎉 FREE Live Mock Test on 8th June 2026!  Join Now — Limited Seats!  Practice with real exam conditions.  Don't miss it! 🌱";

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <>
    <div className="relative bg-green-600 text-white text-sm font-semibold overflow-hidden" style={{ height: "36px" }}>
      {/* Scrolling text */}
      <div className="flex items-center h-full">
        <div
          className="whitespace-nowrap"
          style={{
            display: "inline-block",
            animation: "marquee 28s linear infinite",
          }}
        >
          {MESSAGE}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{MESSAGE}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{MESSAGE}
        </div>
      </div>

      {/* Close button */}
      <button
        onClick={() => setVisible(false)}
        aria-label="Close announcement"
        className="absolute right-2 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-lg leading-none"
      >
        ✕
      </button>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>

    {/* Registration link bar */}
    <div className="bg-green-50 border-b border-green-200 text-center py-1.5 px-4 text-sm text-green-800">
      📝 Register for FREE Live Mock Test (8th June) →{" "}
      <a
        href="https://forms.gle/YNr8vqXKBFvTRgXW9"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold underline text-green-700 hover:text-green-900"
      >
        Click here to Register
      </a>
    </div>
    </>
  );
}
