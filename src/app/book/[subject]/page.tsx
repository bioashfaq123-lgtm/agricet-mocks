"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  CheckCircle, ChevronDown, ChevronUp,
  ArrowLeft, Lock, BookOpen, Download, AlertCircle,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import toast from "react-hot-toast";
import bookData from "@/data/bookQuestions.json";

// ─── Types ────────────────────────────────────────────────────────────────────
type SubjectEntry = {
  code: string;
  name: string;
  questions: { id: number; q: string; opts: string[] }[];
  answers: Record<string, string>;
};

const BOOK = bookData as Record<string, SubjectEntry>;

// Valid subject codes
const VALID_CODES = Object.keys(BOOK);

// DA-121 is always free
const FREE_CODE = "da121";

declare global {
  interface Window {
    Razorpay: new (opts: Record<string, unknown>) => { open: () => void };
  }
}
const loadRazorpay = () =>
  new Promise<boolean>((resolve) => {
    if (typeof window !== "undefined" && window.Razorpay) { resolve(true); return; }
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.onload = () => resolve(true); s.onerror = () => resolve(false);
    document.body.appendChild(s);
  });

export default function SubjectPracticePage({
  params,
}: {
  params: { subject: string };
}) {
  const { subject } = params;
  const router = useRouter();
  const { user, userData, refreshUserData } = useAuth();

  const isBookPaid = userData?.isBookPaid === true;
  const isFree     = subject === FREE_CODE;
  const hasAccess  = isFree || isBookPaid;

  const subjectData = BOOK[subject];

  const [selected, setSelected]       = useState<Record<number, number>>({});
  const [showAnswers, setShowAnswers]  = useState(false);
  const [openGroups, setOpenGroups]   = useState<Record<number, boolean>>({ 0: true });
  const [paying, setPaying]           = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [showRetryTips, setShowRetryTips] = useState(false);

  // Redirect if invalid code
  useEffect(() => {
    if (!VALID_CODES.includes(subject)) router.replace("/book");
  }, [subject, router]);

  if (!subjectData) return null;

  const { code, name, questions, answers } = subjectData;

  // Group questions into groups of 25
  const GROUP_SIZE = 25;
  const groups: typeof questions[] = [];
  for (let i = 0; i < questions.length; i += GROUP_SIZE) {
    groups.push(questions.slice(i, i + GROUP_SIZE));
  }

  const toggleGroup = (i: number) =>
    setOpenGroups((g) => ({ ...g, [i]: !g[i] }));

  const attempted = Object.keys(selected).length;
  const score     = questions.filter(
    (q) => ["A", "B", "C", "D"][selected[q.id] ?? -1] === answers[String(q.id)]
  ).length;
  const total = questions.length;

  // ── Payment ──────────────────────────────────────────────────────────────────
  const handleBookPayment = async () => {
    if (!user) { toast.error("Please login to purchase the book."); return; }
    setPaying(true);
    const ok = await loadRazorpay();
    if (!ok) { toast.error("Payment SDK failed to load."); setPaying(false); return; }

    let orderId: string, amount: number, currency: string;
    try {
      const res = await fetch("/api/create-book-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user.uid }),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      orderId = data.orderId; amount = data.amount; currency = data.currency;
    } catch {
      toast.error("Could not initiate payment. Please try again.");
      setPaying(false); return;
    }

    const rzp = new window.Razorpay({
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      order_id: orderId, amount, currency,
      name: "AGRICET MOCKS",
      description: "AGRICET Objective Book – All 17 Subjects",
      prefill: { name: userData?.name ?? "", email: user?.email ?? "" },
      theme: { color: "#16a34a" },
      retry: { enabled: true, max_count: 4 },
      notes: { user_id: user.uid, type: "book" },
      handler: async (response: {
        razorpay_payment_id: string;
        razorpay_order_id: string;
        razorpay_signature: string;
      }) => {
        try {
          const vr = await fetch("/api/verify-book-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id:   response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature:  response.razorpay_signature,
            }),
          });
          const vd = await vr.json();
          if (!vd.success) {
            toast.error(
              `Verification failed. Call +91 90593 36236 (Payment ID: ${response.razorpay_payment_id})`
            );
            setPaying(false); return;
          }
          await updateDoc(doc(db, "users", user.uid), {
            isBookPaid:    true,
            bookPaymentId: response.razorpay_payment_id,
            bookOrderId:   response.razorpay_order_id,
            bookPaidAt:    new Date().toISOString(),
          });
          await refreshUserData();
          toast.success("🎉 Book unlocked! You can now practice all subjects.");
        } catch {
          toast.error("Payment recorded but access update failed. Call +91 90593 36236");
        }
        setPaying(false);
      },
      modal: { ondismiss: () => setPaying(false), confirm_close: true, escape: false, animation: true },
    });
    rzp.open();
  };

  // ── Download ─────────────────────────────────────────────────────────────────
  const handleDownload = async () => {
    if (!user) return;
    setDownloading(true);
    try {
      const tokenRes = await fetch("/api/book-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user.uid }),
      });
      if (!tokenRes.ok) throw new Error("Token fetch failed");
      const { token } = await tokenRes.json();
      const res = await fetch(
        `/api/download-book?userId=${encodeURIComponent(user.uid)}&token=${token}`
      );
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error((err as { error?: string }).error ?? "Download failed");
      }
      const blob = await res.blob();
      const url  = URL.createObjectURL(blob);
      const a    = document.createElement("a");
      a.href = url; a.download = "AGRICET_Objective_Book.pdf"; a.click();
      URL.revokeObjectURL(url);
      toast.success("Download started!");
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Download failed";
      toast.error(`${msg}. Call +91 90593 36236`);
    }
    setDownloading(false);
  };

  // ── Paywall (non-free, not paid) ──────────────────────────────────────────────
  if (!hasAccess) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <div className="bg-gradient-to-br from-green-800 to-green-600 text-white">
          <div className="max-w-3xl mx-auto px-4 py-10 text-center">
            <Link href="/book"
              className="inline-flex items-center gap-1 text-green-200 hover:text-white text-sm mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Subjects
            </Link>
            <div className="inline-flex items-center gap-2 bg-amber-400 text-amber-900 font-bold text-xs px-3 py-1 rounded-full mb-4">
              <Lock className="w-3 h-3" /> {code} — {name}
            </div>
            <h1 className="text-3xl md:text-4xl font-black mb-2">{total} Practice Questions</h1>
            <p className="text-green-100 text-sm">Unlock the full book to practice all 17 subjects</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-10">
          <div className="bg-gradient-to-br from-green-700 to-green-800 rounded-3xl overflow-hidden shadow-xl">
            <div className="p-8 text-center text-white">
              <div className="inline-flex items-center gap-2 bg-amber-400 text-amber-900 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                <Lock className="w-4 h-4" /> Full Book – ₹100 One-time
              </div>
              <h3 className="text-2xl font-black mb-2">Unlock {name}</h3>
              <p className="text-green-200 mb-6 text-sm max-w-md mx-auto">
                Practice all {total} MCQs from {code}. One payment unlocks all 17 subjects + PDF download.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 text-left">
                {[
                  { icon: "📚", title: "All 17 Subjects", desc: "3,400+ MCQs practisable" },
                  { icon: "📅", title: "PYQ Papers",      desc: "2023, 2024 & 2025 papers" },
                  { icon: "⬇️", title: "PDF Download",   desc: "125-page book forever" },
                ].map(f => (
                  <div key={f.title} className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl mb-1">{f.icon}</div>
                    <div className="font-bold text-sm">{f.title}</div>
                    <div className="text-green-200 text-xs mt-0.5">{f.desc}</div>
                  </div>
                ))}
              </div>

              {user ? (
                <div className="space-y-3">
                  <button onClick={handleBookPayment} disabled={paying}
                    className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-amber-900 font-bold px-10 py-3.5 rounded-2xl text-lg transition-all hover:scale-105 disabled:opacity-60 shadow-lg">
                    <BookOpen className="w-5 h-5" />
                    {paying ? "Processing..." : "Unlock Full Book – ₹100"}
                  </button>
                  <p className="text-green-300 text-xs">
                    Payment issues? Call{" "}
                    <a href="tel:+919059336236" className="text-amber-300 underline font-medium">
                      +91 90593 36236
                    </a>
                  </p>

                  {/* Retry Tips */}
                  <button
                    onClick={() => setShowRetryTips(t => !t)}
                    className="inline-flex items-center gap-1.5 text-green-300 hover:text-white text-xs font-medium transition-colors mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Payment failed last time? See tips
                  </button>
                  {showRetryTips && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-left mt-1">
                      {[
                        { icon: "🔄", tip: "Click the button again — each click is a fresh attempt" },
                        { icon: "📱", tip: "Try GPay, PhonePe, or Paytm instead" },
                        { icon: "💰", tip: "Check your bank balance first" },
                        { icon: "⏱️", tip: "Approve the UPI request within 3 minutes" },
                        { icon: "📶", tip: "Use a stable Wi-Fi or mobile data connection" },
                        { icon: "📞", tip: "Still failing? Call +91 90593 36236 — we'll help manually" },
                      ].map(({ icon, tip }) => (
                        <div key={tip} className="flex items-start gap-2 bg-white/10 rounded-lg px-3 py-2">
                          <span>{icon}</span>
                          <span className="text-green-100">{tip}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="text-green-200 text-sm mb-3">Login to unlock the full book</p>
                  <a href="/login"
                    className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-amber-900 font-bold px-8 py-3 rounded-2xl transition-all hover:scale-105">
                    Login to Purchase – ₹100
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Free DA-121 promo */}
          <div className="mt-6 bg-white rounded-2xl border border-green-100 p-5 flex items-center justify-between gap-4">
            <div>
              <p className="font-bold text-gray-800 text-sm">Try DA 121 for free</p>
              <p className="text-gray-500 text-xs mt-0.5">150 Soil Chemistry questions — no login needed</p>
            </div>
            <Link href="/book/da121"
              className="shrink-0 bg-green-600 hover:bg-green-700 text-white font-bold text-sm px-4 py-2 rounded-xl transition-colors">
              Practice Free
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ── Quiz ──────────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-green-800 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-10 text-center">
          <Link href="/book"
            className="inline-flex items-center gap-1 text-green-200 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Subjects
          </Link>
          <div className="inline-flex items-center gap-2 bg-amber-400 text-amber-900 font-bold text-xs px-3 py-1 rounded-full mb-4">
            {isFree ? "✓ Free Sample" : "✓ Unlocked"} — {code}
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-2">{name}</h1>
          <p className="text-green-100 text-sm">
            {total} MCQs · Practice mode · Instant answers
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">

        {/* Controls */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h2 className="text-lg font-bold text-gray-900">{code}: {name}</h2>
            <p className="text-sm text-gray-500 mt-0.5">{total} questions · Answer key included</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {attempted > 0 && (
              <span className="text-sm bg-green-50 text-green-700 border border-green-200 px-3 py-1.5 rounded-lg font-medium">
                {attempted}/{total} attempted · {score} correct
              </span>
            )}
            <button
              onClick={() => setShowAnswers(!showAnswers)}
              className="text-sm bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1.5 rounded-lg font-medium hover:bg-amber-100 transition-colors">
              {showAnswers ? "Hide Answers" : "Show Answer Key"}
            </button>
            <button
              onClick={() => { setSelected({}); setShowAnswers(false); }}
              className="text-sm bg-gray-100 text-gray-600 border border-gray-200 px-3 py-1.5 rounded-lg font-medium hover:bg-gray-200 transition-colors">
              Reset
            </button>
          </div>
        </div>

        {/* Progress bar */}
        {attempted > 0 && (
          <div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full transition-all"
                style={{ width: `${(attempted / total) * 100}%` }}
              />
            </div>
            <p className="text-xs text-gray-400 mt-1">{total - attempted} questions remaining</p>
          </div>
        )}

        {/* Question groups */}
        {groups.map((groupQs, gi) => {
          const groupStart = gi * GROUP_SIZE + 1;
          const groupEnd   = Math.min((gi + 1) * GROUP_SIZE, total);
          const isOpen     = openGroups[gi] ?? false;

          return (
            <div key={gi}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <button
                onClick={() => toggleGroup(gi)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors">
                <span className="font-semibold text-gray-800 text-sm">
                  Questions {groupStart}–{groupEnd}
                </span>
                {isOpen
                  ? <ChevronUp className="w-4 h-4 text-gray-400 shrink-0" />
                  : <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />}
              </button>

              {isOpen && (
                <div className="px-5 pb-5 space-y-5 border-t border-gray-50">
                  {groupQs.map((q) => {
                    const correctLetter = answers[String(q.id)];
                    const correctIdx    = ["A", "B", "C", "D"].indexOf(correctLetter);
                    return (
                      <div key={q.id} className="pt-4">
                        <p className="text-sm font-medium text-gray-800 mb-3">
                          <span className="text-green-600 font-bold mr-1">{q.id}.</span>
                          {q.q}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {q.opts.map((opt, oi) => {
                            const isSel   = selected[q.id] === oi;
                            const isRight = showAnswers && oi === correctIdx;
                            const isWrong = showAnswers && isSel && oi !== correctIdx;
                            return (
                              <button
                                key={oi}
                                onClick={() => setSelected((s) => ({ ...s, [q.id]: oi }))}
                                className={`text-left text-sm px-3 py-2.5 rounded-xl border transition-all ${
                                  isRight
                                    ? "bg-green-50 border-green-400 text-green-800 font-medium"
                                    : isWrong
                                    ? "bg-red-50 border-red-300 text-red-700"
                                    : isSel
                                    ? "bg-primary-50 border-primary-400 text-primary-800 font-medium"
                                    : "bg-gray-50 border-gray-200 text-gray-700 hover:border-primary-300 hover:bg-primary-50"
                                }`}>
                                <span className="font-bold mr-1.5">{["A", "B", "C", "D"][oi]}.</span>
                                {opt}
                              </button>
                            );
                          })}
                        </div>
                        {showAnswers && correctIdx >= 0 && (
                          <p className="text-xs text-green-700 mt-2 font-medium flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" />
                            Answer: {correctLetter}) {q.opts[correctIdx]}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}

        {/* Download CTA for paid users */}
        {isBookPaid && (
          <div className="bg-gradient-to-r from-green-700 to-green-800 rounded-2xl p-6 flex items-center justify-between flex-wrap gap-4">
            <div className="text-white">
              <p className="font-bold">Download the Full PDF Book</p>
              <p className="text-green-200 text-sm mt-0.5">125 pages · All 17 subjects + PYQ papers</p>
            </div>
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-amber-900 font-bold px-6 py-3 rounded-xl transition-all hover:scale-105 disabled:opacity-60">
              <Download className="w-4 h-4" />
              {downloading ? "Downloading..." : "Download PDF"}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
