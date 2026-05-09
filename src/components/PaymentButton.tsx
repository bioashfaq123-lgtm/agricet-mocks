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

    // 1. Load Razorpay checkout SDK
    const ok = await loadRazorpay();
    if (!ok) {
      toast.error("Payment SDK failed to load. Check your internet connection.");
      setLoading(false);
      return;
    }

    // 2. Create order on server (required for UPI, Netbanking, and all payment methods)
    let orderId: string;
    let amount: number;
    let currency: string;
    try {
      const res = await fetch("/api/create-order", { method: "POST" });
      if (!res.ok) throw new Error("Order creation failed");
      const data = await res.json();
      orderId  = data.orderId;
      amount   = data.amount;
      currency = data.currency;
    } catch {
      toast.error("Could not initiate payment. Please try again.");
      setLoading(false);
      return;
    }

    // 3. Open Razorpay checkout with the order_id
    const options = {
      key:         process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      order_id:    orderId,
      amount,
      currency,
      name:        "AGRICET MOCKS",
      description: "Lifetime Access – All 17 Subjects",
      image:       "/logo.png",
      prefill:     { name: userName, email: userEmail },
      theme:       { color: "#16a34a" },

      handler: async (response: {
        razorpay_payment_id: string;
        razorpay_order_id: string;
        razorpay_signature: string;
      }) => {
        try {
          // 4. Verify payment signature on server before granting access
          const verifyRes = await fetch("/api/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id:   response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature:  response.razorpay_signature,
            }),
          });
          const verifyData = await verifyRes.json();

          if (!verifyData.success) {
            toast.error("Payment verification failed. Call helpline: +91 90593 36236 (Payment ID: " + response.razorpay_payment_id + ")");
            setLoading(false);
            return;
          }

          // 5. Signature verified — grant access in Firestore
          await updateDoc(doc(db, "users", userId), {
            isPaid: true,
            paymentId: response.razorpay_payment_id,
            orderId:   response.razorpay_order_id,
            paidAt:    new Date().toISOString(),
          });
          await refreshUserData();
          toast.success("🎉 Payment successful! Full access unlocked!");
        } catch {
          toast.error("Payment recorded but access update failed. Call +91 90593 36236 for help.");
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
