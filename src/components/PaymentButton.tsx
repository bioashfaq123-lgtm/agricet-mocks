"use client";
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/contexts/AuthContext";
import toast from "react-hot-toast";

interface Props {
  userId: string;
  userEmail: string;
  userName: string;
}

declare global {
  interface Window {
    Razorpay: new (opts: Record<string, unknown>) => { open: () => void };
  }
}

const loadRazorpay = () =>
  new Promise<boolean>((resolve) => {
    if (typeof window !== "undefined" && window.Razorpay) { resolve(true); return; }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload  = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });

export default function PaymentButton({ userId, userEmail, userName }: Props) {
  const [loading, setLoading]   = useState(false);
  const { refreshUserData }     = useAuth();

  const handlePayment = async () => {
    setLoading(true);
    const ok = await loadRazorpay();
    if (!ok) { toast.error("Payment SDK failed to load. Check internet connection."); setLoading(false); return; }

    const options = {
      key:         process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount:      10000, // ₹100 in paise
      currency:    "INR",
      name:        "AGRICET MOCKS",
      description: "Lifetime Access – All 17 Subjects",
      image:       "/logo.png",
      prefill:     { name: userName, email: userEmail },
      theme:       { color: "#16a34a" },
      handler: async (response: { razorpay_payment_id: string }) => {
        try {
          // In production: verify signature on server. Here we update directly after success callback.
          await updateDoc(doc(db, "users", userId), {
            isPaid: true,
            paymentId: response.razorpay_payment_id,
            paidAt: new Date().toISOString(),
          });
          await refreshUserData();
          toast.success("🎉 Payment successful! Full access unlocked!");
        } catch (e) {
          toast.error("Payment recorded but access update failed. Contact support.");
        }
        setLoading(false);
      },
      modal: {
        ondismiss: () => setLoading(false),
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <button onClick={handlePayment} disabled={loading}
      className="bg-gold-500 hover:bg-gold-600 text-white font-bold px-6 py-2.5 rounded-xl transition-all hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed text-sm shadow-lg whitespace-nowrap">
      {loading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
          </svg>
          Processing...
        </span>
      ) : "Unlock All – ₹100"}
    </button>
  );
}
