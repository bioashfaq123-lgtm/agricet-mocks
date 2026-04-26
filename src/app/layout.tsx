import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/contexts/AuthContext";

export const metadata: Metadata = {
  title: "AGRICET MOCKS – Crack AGRICET & Secure Your BSc Seat",
  description:
    "India's best online mock test platform for Diploma in Agriculture students preparing for AGRICET. 17 subjects, 200 MCQs each, previous year papers, and detailed explanations.",
  keywords: "AGRICET, mock test, agriculture, BSc Agriculture, PJTAU, Diploma in Agriculture",
  openGraph: {
    title: "AGRICET MOCKS",
    description: "Practice smart, crack AGRICET, secure your BSc (Hons) Agriculture seat.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <AuthProvider>
          {children}
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
