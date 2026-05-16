"use client";
import { useEffect, useState } from "react";

export default function AppSplashScreen({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);
  const [fading, setFading]   = useState(false);

  useEffect(() => {
    // Only show in PWA standalone mode
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone === true;

    if (!isStandalone) return;

    // Show only once per session (not on every page navigation)
    if (sessionStorage.getItem("splash_done")) return;
    sessionStorage.setItem("splash_done", "1");

    setVisible(true);

    // Start fade-out after 1.8 s, fully remove after 2.3 s
    const t1 = setTimeout(() => setFading(true),  1800);
    const t2 = setTimeout(() => setVisible(false), 2350);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <>
      {/* Actual app — always rendered underneath */}
      {children}

      {/* Splash overlay */}
      {visible && (
        <div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden select-none"
          style={{
            transition: "opacity 0.5s ease",
            opacity: fading ? 0 : 1,
            background: "#080808",
          }}
        >
          {/* ── Red geometric layers (CSS polygons) ── */}

          {/* Big red top shape */}
          <div
            className="absolute inset-0"
            style={{
              background: "#DC1C1C",
              clipPath: "polygon(0 0, 100% 0, 100% 42%, 55% 50%, 0 28%)",
            }}
          />

          {/* Dark shadow strip */}
          <div
            className="absolute inset-0"
            style={{
              background: "#141414",
              clipPath: "polygon(0 28%, 55% 50%, 59% 55%, 0 33%)",
            }}
          />

          {/* Thin red diagonal stripe */}
          <div
            className="absolute inset-0"
            style={{
              background: "#B01515",
              clipPath: "polygon(0 33%, 46% 50%, 49% 56%, 0 39%)",
            }}
          />

          {/* Dark shadow strip 2 */}
          <div
            className="absolute inset-0"
            style={{
              background: "#0e0e0e",
              clipPath: "polygon(0 39%, 49% 56%, 51% 60%, 0 43%)",
            }}
          />

          {/* ── Text block ── */}
          <div className="relative z-10 flex flex-col items-center text-center px-8">
            <h1
              className="font-black text-white leading-none tracking-wide"
              style={{ fontSize: "clamp(2.8rem, 12vw, 5.5rem)", textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}
            >
              AGRICET
            </h1>
            <p
              className="font-bold text-white mt-1 tracking-wider"
              style={{ fontSize: "clamp(1.1rem, 5vw, 2.2rem)", textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
            >
              MOCK TEST
            </p>
            <p
              className="font-bold text-white tracking-widest"
              style={{ fontSize: "clamp(1.1rem, 5vw, 2.2rem)", textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
            >
              SERIES
            </p>

            {/* Gold underline */}
            <div
              className="mt-4 rounded-full"
              style={{ height: "3px", width: "clamp(120px, 40vw, 280px)", background: "#FFC828" }}
            />

          </div>
        </div>
      )}
    </>
  );
}
