import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/contexts/AuthContext";
import AppSplashScreen from "@/components/AppSplashScreen";
import ChatBot from "@/components/ChatBot";

export const metadata: Metadata = {
  title: "AGRICET MOCK TEST SERIES",
  description:
    "Practice all 17 Diploma Agriculture subjects for PJTSAU AGRICET. 3400+ MCQs, PYQ papers 2023-2025, instant results. Prepared by Nalanda Study Circle, Jagtial.",
  keywords: "AGRICET, mock test, agriculture, BSc Agriculture, PJTSAU, Diploma in Agriculture, Nalanda Study Circle",
  manifest: "/manifest.json",
  themeColor: "#cc1e1e",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "AGRICET MOCK TEST SERIES",
  },
  openGraph: {
    title: "AGRICET MOCK TEST SERIES",
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
        <meta name="application-name" content="AGRICET MOCK TEST SERIES" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="AGRICET MOCK TEST SERIES" />
        <meta name="theme-color" content="#cc1e1e" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="bg-gray-50 text-gray-900 antialiased">
        <AuthProvider>
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
        </AuthProvider>
      </body>
    </html>
  );
}
