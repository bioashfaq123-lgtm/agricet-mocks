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

      {/* Splash overlay — shows the app icon centered */}
      {visible && (
        <div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden select-none"
          style={{
            transition: "opacity 0.5s ease",
            opacity: fading ? 0 : 1,
            background: "#0a0a0a",
          }}
        >
          <img
            src="/icons/icon-512x512.png"
            alt="AEO & AGRICET Mock Test Series"
            className="splash-icon"
            style={{
              width: "clamp(150px, 46vw, 250px)",
              height: "auto",
              borderRadius: "22%",
              boxShadow: "0 12px 40px rgba(0,0,0,0.55)",
            }}
          />
          {/* Loading dots */}
          <div className="mt-8 flex gap-2">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="splash-dot"
                style={{
                  width: 8, height: 8, borderRadius: "50%", background: "#cc1e1e",
                  animationDelay: `${i * 0.18}s`,
                }}
              />
            ))}
          </div>

          <style>{`
            @keyframes splashPop { 0% { transform: scale(0.82); opacity: 0 } 100% { transform: scale(1); opacity: 1 } }
            @keyframes splashBlink { 0%,80%,100% { opacity: 0.25 } 40% { opacity: 1 } }
            .splash-icon { animation: splashPop 0.55s cubic-bezier(0.2,0.8,0.2,1) both; }
            .splash-dot  { display:inline-block; animation: splashBlink 1s infinite ease-in-out; }
          `}</style>
        </div>
      )}
    </>
  );
}
