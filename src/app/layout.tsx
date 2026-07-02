import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/contexts/AuthContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import AppSplashScreen from "@/components/AppSplashScreen";
import ChatBot from "@/components/ChatBot";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import PWAInstallBanner from "@/components/PWAInstallBanner";

// themeColor must be in viewport export (not metadata) — Next.js 14 requirement
export const viewport: Viewport = {
  themeColor: "#16a34a",   // primary green — matches app brand
};

export const metadata: Metadata = {
  title: "AEO & AGRICET Mock Test Series",
  description:
    "Practice all 17 Diploma Agriculture subjects for PJTSAU AGRICET. 3400+ MCQs, PYQ papers 2023-2025, instant results. Prepared by Nalanda Study Circle, Jagtial.",
  keywords: "AGRICET, AEO, Agricultural Extension Officer, TGPSC AEO, mock test, agriculture, BSc Agriculture, PJTSAU, Diploma in Agriculture, Telangana agriculture jobs, Nalanda Study Circle",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "AEO & AGRICET Mock Test Series",
  },
  openGraph: {
    title: "AEO & AGRICET Mock Test Series",
    description: "Practice smart, crack AGRICET, secure your BSc (Hons) Agriculture seat.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="application-name" content="AEO & AGRICET Mock Test Series" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="AEO & AGRICET Mock Test Series" />
        <meta name="theme-color" content="#16a34a" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Telugu:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-gray-50 text-gray-900 antialiased">
        <AuthProvider>
          <LanguageProvider>
          <AnnouncementBanner />
          <PWAInstallBanner />
          <AppSplashScreen>
          {children}
          </AppSplashScreen>
          <ChatBot />
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: { borderRadius: "12px", fontFamily: "Inter, sans-serif" },
              success: { style: { background: "#f0fdf4", color: "#15803d", border: "1px solid #86efac" } },
              error: { style: { background: "#fef2f2", color: "#dc2626", border: "1px solid #fca5a5" } },
            }}
          />
          </LanguageProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
