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

    // 2. Create order on server
    let orderId: string;
    let amount: number;
    let currency: string;
    try {
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });
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

    // 3. Open Razorpay checkout
    const options = {
      key:         process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      order_id:    orderId,
      amount,
      currency,
      name:        "AGRICET MOCKS",
      description: "Lifetime Access – All 17 Subjects",
      image:       "/logo.png",
      prefill:     { name: userName, email: userEmail, contact: "" },
      theme:       { color: "#16a34a" },

      // Allow user to retry on failure
      retry: { enabled: true, max_count: 4 },

      notes: {
        user_id: userId,
        user_email: userEmail,
        type: "subscription",
      },

      // Called when payment succeeds
      handler: async (response: {
        razorpay_payment_id: string;
        razorpay_order_id: string;
        razorpay_signature: string;
      }) => {
        try {
          // 4. Verify signature on server before granting access
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
            toast.error(
              "Payment received but verification failed. Call helpline: +91 90593 36236 (Payment ID: " +
              response.razorpay_payment_id + ")"
            );
            setLoading(false);
            return;
          }

          // 5. Signature verified — grant access in Firestore
          await updateDoc(doc(db, "users", userId), {
            isPaid:    true,
            paymentId: response.razorpay_payment_id,
            orderId:   response.razorpay_order_id,
            paidAt:    new Date().toISOString(),
          });
          await refreshUserData();
          toast.success("🎉 Payment successful! Full access unlocked!");
        } catch {
          toast.error("Payment done but access update failed. Call +91 90593 36236 for immediate help.");
        }
        setLoading(false);
      },

      // Called when payment FAILS (missing in old code — button stayed stuck in loading)
      "payment.failed": function (response: {
        error: {
          code: string;
          description: string;
          source: string;
          step: string;
          reason: string;
          metadata: { order_id: string; payment_id: string };
        };
      }) {
        const reason = response.error.description || "Payment failed";
        const payId  = response.error.metadata?.payment_id || "";

        // Common reasons and friendly messages
        let msg = `Payment failed: ${reason}.`;
        if (reason.toLowerCase().includes("cancelled") || reason.toLowerCase().includes("canceled")) {
          msg = "Payment was cancelled. Click the button again to retry.";
        } else if (reason.toLowerCase().includes("insufficient") || reason.toLowerCase().includes("funds")) {
          msg = "Insufficient funds. Please try a different UPI ID or payment method.";
        } else if (reason.toLowerCase().includes("invalid") && reason.toLowerCase().includes("vpa")) {
          msg = "Invalid UPI ID. Please check and try again.";
        } else if (reason.toLowerCase().includes("timeout") || reason.toLowerCase().includes("expired")) {
          msg = "Payment timed out. Please try again.";
        } else if (payId) {
          msg = `Payment failed (ID: ${payId}). Please retry or call +91 90593 36236.`;
        }

        toast.error(msg, { duration: 6000 });
        setLoading(false); // Unlock the button so the student can try again
      },

      modal: {
        ondismiss: () => setLoading(false),
        confirm_close: true,
        escape: false,
        animation: true,
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
