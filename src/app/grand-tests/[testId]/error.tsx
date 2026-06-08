"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, Home } from "lucide-react";

export default function GrandTestError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Grand test page error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-sm w-full text-center bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
        <div className="text-5xl mb-4">😅</div>
        <h1 className="text-lg font-black text-gray-900 mb-2">Something went wrong</h1>
        <p className="text-gray-500 text-sm mb-6 leading-relaxed">
          A small glitch occurred while loading the test. This is usually temporary —
          please tap the button below to try again. Your progress is safe.
        </p>
        <div className="flex flex-col gap-3">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold px-5 py-3 rounded-xl text-sm transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          <Link
            href="/grand-tests"
            className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold px-5 py-3 rounded-xl text-sm transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to Grand Tests
          </Link>
        </div>
        <p className="text-gray-300 text-xs mt-5">
          Tip: If this keeps happening, try opening the link in Chrome instead of an in-app browser
          (WhatsApp / Telegram / Instagram), and make sure you're logged in.
        </p>
      </div>
    </div>
  );
}
