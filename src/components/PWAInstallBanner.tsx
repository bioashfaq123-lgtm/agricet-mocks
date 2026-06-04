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
    <div className="mb-6 rounded-2xl border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 shadow-sm overflow-hidden">
      {/* Header row */}
      <div className="flex items-center gap-3 px-5 py-4">
        <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
          <Smartphone className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-black text-gray-900 text-sm leading-tight">
            📲 Install AEO & AGRICET Mock Test Series on your phone!
          </p>
          <p className="text-xs text-gray-500 mt-0.5">
            Works like a real app — no Play Store needed · Opens full-screen · Works faster
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => setExpanded((e) => !e)}
            className="inline-flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
          >
            {expanded ? (
              <><ChevronUp className="w-3.5 h-3.5" /> Hide</>
            ) : (
              <><ChevronDown className="w-3.5 h-3.5" /> How to install</>
            )}
          </button>
          <button
            onClick={dismiss}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Expandable instructions */}
      {expanded && (
        <div className="border-t border-green-200 px-5 pb-5 pt-4">
          {/* Tabs */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setTab("android")}
              className={`flex-1 py-2 rounded-xl text-sm font-bold transition-all ${
                tab === "android"
                  ? "bg-green-600 text-white shadow"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-green-400"
              }`}
            >
              🤖 Android
            </button>
            <button
              onClick={() => setTab("iphone")}
              className={`flex-1 py-2 rounded-xl text-sm font-bold transition-all ${
                tab === "iphone"
                  ? "bg-green-600 text-white shadow"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-green-400"
              }`}
            >
               iPhone
            </button>
          </div>

          {tab === "android" && (
            <div className="space-y-3">
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-2">
                Open in Chrome browser → follow these steps
              </p>
              {[
                { step: "1", icon: "🌐", text: "Open this website in Chrome browser on your Android phone" },
                { step: "2", icon: "⋮",  text: 'Tap the 3-dot menu (⋮) at the top-right corner of Chrome' },
                { step: "3", icon: "📲", text: 'Tap "Add to Home screen"' },
                { step: "4", icon: "✅", text: 'Tap "Add" — the AEO & AGRICET Mock Test Series icon appears on your home screen!' },
              ].map((s) => (
                <div key={s.step} className="flex items-start gap-3 bg-white rounded-xl px-4 py-3 border border-green-100">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">
                    {s.step}
                  </div>
                  <p className="text-sm text-gray-700 leading-snug">
                    <span className="text-lg mr-1">{s.icon}</span> {s.text}
                  </p>
                </div>
              ))}
            </div>
          )}

          {tab === "iphone" && (
            <div className="space-y-3">
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-2">
                Must use Safari browser (not Chrome) on iPhone
              </p>
              {[
                { step: "1", icon: "🧭", text: "Open this website in Safari (the default iPhone browser)" },
                { step: "2", icon: "⬆️", text: "Tap the Share button (box with arrow ↑) at the bottom of Safari" },
                { step: "3", icon: "📲", text: 'Scroll down and tap "Add to Home Screen"' },
                { step: "4", icon: "✅", text: 'Tap "Add" (top-right) — AEO & AGRICET Mock Test Series icon is now on your home screen!' },
              ].map((s) => (
                <div key={s.step} className="flex items-start gap-3 bg-white rounded-xl px-4 py-3 border border-green-100">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">
                    {s.step}
                  </div>
                  <p className="text-sm text-gray-700 leading-snug">
                    <span className="text-lg mr-1">{s.icon}</span> {s.text}
                  </p>
                </div>
              ))}
              <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mt-1">
                ⚠️ <strong>Important:</strong> On iPhone, this only works in <strong>Safari</strong>. If you are using Chrome or any other browser, switch to Safari first.
              </p>
            </div>
          )}

          <div className="mt-4 bg-green-100 rounded-xl px-4 py-3 flex items-start gap-2">
            <span className="text-lg">🎉</span>
            <p className="text-xs text-green-800 font-medium leading-snug">
              Once installed, open AEO & AGRICET Mock Test Series from your home screen — it opens full-screen like a real app, loads faster, and works even with slow internet!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
