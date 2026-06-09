"use client";
import { useState, useEffect } from "react";
import { Smartphone, X, ChevronDown, ChevronUp } from "lucide-react";

export default function PWAInstallBanner() {
  const [visible, setVisible]   = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [tab, setTab]           = useState<"android" | "iphone">("android");

  useEffect(() => {
    // Hide if already installed as PWA
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone === true;
    if (isStandalone) return;

    // Hide if user dismissed within last 7 days
    const dismissed = localStorage.getItem("pwa_banner_dismissed");
    if (dismissed && Date.now() - Number(dismissed) < 7 * 24 * 60 * 60 * 1000) return;

    // Detect device to pre-select the right tab
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes("iphone") || ua.includes("ipad")) setTab("iphone");

    setVisible(true);
  }, []);

  const dismiss = () => {
    localStorage.setItem("pwa_banner_dismissed", String(Date.now()));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="w-full bg-gradient-to-r from-green-700 to-emerald-600 text-white shadow-md">
      {/* Top strip — always visible */}
      <div className="max-w-5xl mx-auto flex items-center gap-3 px-4 py-2.5">
        {/* Icon */}
        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
          <Smartphone className="w-4 h-4 text-white" />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <span className="font-bold text-sm">
            📲 Install this app on your phone
          </span>
          <span className="hidden sm:inline text-white/80 text-xs ml-2">
            — no Play Store needed, works like a real app!
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => setExpanded((e) => !e)}
            className="inline-flex items-center gap-1 bg-white text-green-700 font-bold text-xs px-3 py-1.5 rounded-full hover:bg-green-50 transition-colors shadow-sm"
          >
            {expanded ? (
              <><ChevronUp className="w-3 h-3" /> Hide</>
            ) : (
              <><ChevronDown className="w-3 h-3" /> How to install</>
            )}
          </button>
          <button
            onClick={dismiss}
            className="text-white/60 hover:text-white transition-colors p-1"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Expandable instructions */}
      {expanded && (
        <div className="border-t border-white/20 bg-white text-gray-900">
          <div className="max-w-2xl mx-auto px-4 py-5">
            {/* Tabs */}
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setTab("android")}
                className={`flex-1 py-2 rounded-xl text-sm font-bold transition-all ${
                  tab === "android"
                    ? "bg-green-600 text-white shadow"
                    : "bg-gray-100 text-gray-600 hover:bg-green-50"
                }`}
              >
                🤖 Android (Chrome)
              </button>
              <button
                onClick={() => setTab("iphone")}
                className={`flex-1 py-2 rounded-xl text-sm font-bold transition-all ${
                  tab === "iphone"
                    ? "bg-green-600 text-white shadow"
                    : "bg-gray-100 text-gray-600 hover:bg-green-50"
                }`}
              >
                 iPhone (Safari)
              </button>
            </div>

            {tab === "android" && (
              <div className="space-y-2">
                {[
                  { step: "1", icon: "🌐", text: "Open this website in Chrome on your Android phone" },
                  { step: "2", icon: "⋮",  text: "Tap the 3-dot menu (⋮) at the top-right of Chrome" },
                  { step: "3", icon: "📲", text: 'Tap "Add to Home screen"' },
                  { step: "4", icon: "✅", text: 'Tap "Add" — the AEO & AGRICET icon appears on your home screen!' },
                ].map((s) => (
                  <div key={s.step} className="flex items-start gap-3 bg-green-50 rounded-xl px-4 py-3 border border-green-100">
                    <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">
                      {s.step}
                    </div>
                    <p className="text-sm text-gray-700 leading-snug">
                      <span className="mr-1">{s.icon}</span> {s.text}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {tab === "iphone" && (
              <div className="space-y-2">
                {[
                  { step: "1", icon: "🧭", text: "Open this website in Safari (the default iPhone browser)" },
                  { step: "2", icon: "⬆️", text: "Tap the Share button (box with arrow ↑) at the bottom" },
                  { step: "3", icon: "📲", text: 'Scroll down and tap "Add to Home Screen"' },
                  { step: "4", icon: "✅", text: 'Tap "Add" (top-right) — the icon is now on your home screen!' },
                ].map((s) => (
                  <div key={s.step} className="flex items-start gap-3 bg-green-50 rounded-xl px-4 py-3 border border-green-100">
                    <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">
                      {s.step}
                    </div>
                    <p className="text-sm text-gray-700 leading-snug">
                      <span className="mr-1">{s.icon}</span> {s.text}
                    </p>
                  </div>
                ))}
                <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mt-2">
                  ⚠️ <strong>iPhone only:</strong> Must use <strong>Safari</strong>. Chrome on iPhone does not support this feature.
                </p>
              </div>
            )}

            <div className="mt-4 bg-green-100 rounded-xl px-4 py-3 flex items-start gap-2">
              <span className="text-lg">🎉</span>
              <p className="text-xs text-green-800 font-medium leading-snug">
                Once installed, open from your home screen — full-screen, faster, and works with slow internet!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
