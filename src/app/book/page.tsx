"use client";
import { useState } from "react";
import Link from "next/link";
import {
  BookOpen, Lock, Download, CheckCircle,
  Star, ChevronRight,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import toast from "react-hot-toast";

// ── Subject metadata ──────────────────────────────────────────────────────────
const SUBJECTS = [
  { code: "da101", da: "DA 101", name: "Principles of Agronomy",                          qs: 97  },
  { code: "da102", da: "DA 102", name: "Crop Production I – Kharif Crops",                qs: 96  },
  { code: "da111", da: "DA 111", name: "Plant Breeding & Seed Technology",               qs: 97  },
  { code: "da121", da: "DA 121", name: "Soil Chemistry and Fertility",                   qs: 150, free: true },
  { code: "da122", da: "DA 122", name: "Manures and Fertilizers",                        qs: 95  },
  { code: "da131", da: "DA 131", name: "Principles of Entomology",                       qs: 96  },
  { code: "da132", da: "DA 132", name: "Pests of Crops & Their Management",              qs: 94  },
  { code: "da151", da: "DA 151", name: "Farm Power and Machinery",                       qs: 96  },
  { code: "da171", da: "DA 171", name: "Plant Pathology & Crop Diseases",                qs: 96  },
  { code: "da201", da: "DA 201", name: "Crop Production II – Rabi and Commercial Crops", qs: 96  },
  { code: "da241", da: "DA 241", name: "Farm Management and Agricultural Economics",     qs: 96  },
  { code: "da252", da: "DA 252", name: "Land Surveying and Water Engineering",           qs: 96  },
  { code: "da262", da: "DA 262", name: "Computer Applications in Agriculture",           qs: 95  },
  { code: "da263", da: "DA 263", name: "Communication Skills in English",                qs: 97  },
  { code: "da281", da: "DA 281", name: "Forestry Medicinal and Aromatic Plants",         qs: 95  },
  { code: "da282", da: "DA 282", name: "Horticulture",                                   qs: 95  },
  { code: "da291", da: "DA 291", name: "Agricultural Extension & Rural Development",     qs: 97  },
];

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

export default function BookPage() {
  const { user, userData, refreshUserData } = useAuth();
  const isBookPaid = userData?.isBookPaid === true;

  const [paying, setPaying]       = useState(false);
  const [downloading, setDownloading] = useState(false);

  const totalQs = SUBJECTS.reduce((a, s) => a + s.qs, 0);

  // ── Payment ──────────────────────────────────────────────────────────────────
  const handleBookPayment = async () => {
    if (!user) { toast.error("Please login to purchase the book."); return; }
    setPaying(true);
    const ok = await loadRazorpay();
    if (!ok) { toast.error("Payment SDK failed to load."); setPaying(false); return; }

    let orderId: string, amount: number, currency: string;
    try {
      const res = await fetch("/api/create-book-order", { method: "POST" });
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
      description: "AGRICET Objective Book – All 17 Subjects + PYQ Papers",
      prefill: { name: userData?.name ?? "", email: user.email ?? "" },
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
              `Verification failed. Call +91 90593 36236 (ID: ${response.razorpay_payment_id})`
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
          toast.success("🎉 Book unlocked! Practice all 17 subjects now.");
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

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <div className="bg-gradient-to-br from-green-800 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-400 text-amber-900 font-bold text-xs px-3 py-1 rounded-full mb-4">
            <Star className="w-3 h-3" /> AGRICET Objective Book
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-3">Practice All 17 Subjects</h1>
          <p className="text-green-100 text-sm max-w-xl mx-auto">
            {totalQs.toLocaleString()} MCQs from the AGRICET Objective Book — DA 121 is free,
            unlock all 16 other subjects with a one-time ₹100 payment.
          </p>

          {/* Stats strip */}
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto">
            {[
              { n: "17",   l: "Subjects" },
              { n: totalQs.toLocaleString(), l: "Questions" },
              { n: "₹100", l: "One-time" },
            ].map(({ n, l }) => (
              <div key={l} className="bg-white/10 rounded-xl py-3 px-2">
                <div className="text-2xl font-black">{n}</div>
                <div className="text-green-200 text-xs mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">

        {/* ── Payment / Access Banner ─────────────────────────────────────────── */}
        {isBookPaid ? (
          <div className="bg-gradient-to-r from-green-700 to-green-800 rounded-2xl p-6 flex items-center justify-between flex-wrap gap-4">
            <div className="text-white">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span className="font-bold text-lg">Full Book Access Unlocked</span>
              </div>
              <p className="text-green-200 text-sm">Practice all 17 subjects + download the PDF anytime</p>
            </div>
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-amber-900 font-bold px-6 py-3 rounded-xl transition-all hover:scale-105 disabled:opacity-60 shrink-0">
              <Download className="w-4 h-4" />
              {downloading ? "Downloading..." : "Download Full PDF"}
            </button>
          </div>
        ) : (
          <div className="bg-gradient-to-br from-green-700 to-green-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="p-7 text-white">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
                    <Lock className="w-3 h-3" /> 16 Subjects Locked
                  </div>
                  <h3 className="text-xl font-black mb-1">Unlock All 17 Subjects</h3>
                  <p className="text-green-200 text-sm">
                    One payment · All MCQs practisable · PDF download included
                  </p>
                </div>
                <div className="shrink-0 text-center">
                  <div className="text-4xl font-black text-amber-400">₹100</div>
                  <div className="text-green-300 text-xs">one-time · lifetime access</div>
                  {user ? (
                    <button
                      onClick={handleBookPayment}
                      disabled={paying}
                      className="mt-3 inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-amber-900 font-bold px-6 py-2.5 rounded-xl transition-all hover:scale-105 disabled:opacity-60">
                      <BookOpen className="w-4 h-4" />
                      {paying ? "Processing..." : "Unlock Now"}
                    </button>
                  ) : (
                    <a href="/login"
                      className="mt-3 inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-amber-900 font-bold px-6 py-2.5 rounded-xl transition-all hover:scale-105">
                      Login to Buy
                    </a>
                  )}
                  {user && (
                    <p className="text-green-400 text-xs mt-2">
                      Issues?{" "}
                      <a href="tel:+919059336236" className="text-amber-300 underline">
                        +91 90593 36236
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Subject Grid ─────────────────────────────────────────────────────── */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-4">All 17 Subjects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SUBJECTS.map((s) => {
              const unlocked = s.free || isBookPaid;
              return (
                <Link
                  key={s.code}
                  href={`/book/${s.code}`}
                  className={`group flex items-center gap-4 p-4 rounded-2xl border transition-all ${
                    unlocked
                      ? "bg-white border-gray-100 hover:border-green-300 hover:shadow-md"
                      : "bg-gray-50 border-gray-100 hover:border-amber-300 hover:bg-amber-50/30"
                  }`}>
                  {/* Badge */}
                  <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xs text-center ${
                    s.free
                      ? "bg-green-100 text-green-700"
                      : isBookPaid
                      ? "bg-green-50 text-green-600"
                      : "bg-gray-100 text-gray-500"
                  }`}>
                    {s.free ? (
                      <span>FREE</span>
                    ) : isBookPaid ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <Lock className="w-5 h-5" />
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                        s.free
                          ? "bg-amber-100 text-amber-700"
                          : "bg-gray-100 text-gray-600"
                      }`}>
                        {s.da}
                      </span>
                      {s.free && (
                        <span className="text-xs text-green-600 font-medium">Free</span>
                      )}
                    </div>
                    <p className="font-semibold text-gray-800 text-sm mt-1 truncate">{s.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{s.qs} questions</p>
                  </div>

                  {/* Arrow */}
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 ${
                    unlocked ? "text-green-500" : "text-gray-400"
                  }`} />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-xs text-gray-400 pb-4">
          Questions extracted from PJTSAU AGRICET Objective Book · Prepared by{" "}
          <span className="font-semibold text-gray-500">Nalanda Study Circle, Jagtial</span>
        </p>

      </div>
    </div>
  );
}
