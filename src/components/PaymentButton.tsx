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
  const [loadingMsg, setLoadingMsg] = useState("Processing...");
  const { refreshUserData }     = useAuth();

  const handlePayment = async () => {
    setLoading(true);
    setLoadingMsg("Loading...");

    // Safety timeout — if stuck for 90 seconds, unlock the button automatically
    const safetyTimer = setTimeout(() => {
      setLoading(false);
      toast.error(
        "Payment window closed or timed out. If you completed the payment, please wait a few minutes and refresh the page. For help call +91 90593 36236.",
        { duration: 10000 }
      );
    }, 90000);

    // 1. Load Razorpay checkout SDK
    const ok = await loadRazorpay();
    if (!ok) {
      clearTimeout(safetyTimer);
      toast.error("Payment gateway failed to load. Check your internet connection and try again.");
      setLoading(false);
      return;
    }

    // 2. Create order on server
    let orderId: string;
    let amount: number;
    let currency: string;
    try {
      setLoadingMsg("Creating order...");
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); // 15s timeout
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      if (!res.ok) throw new Error(`Order creation failed (${res.status})`);
      const data = await res.json();
      orderId  = data.orderId;
      amount   = data.amount;
      currency = data.currency;
    } catch (err: unknown) {
      clearTimeout(safetyTimer);
      const isAbort = err instanceof Error && err.name === "AbortError";
      toast.error(
        isAbort
          ? "Server took too long to respond. Please check your internet and try again."
          : "Could not initiate payment. Please try again in a moment."
      );
      setLoading(false);
      return;
    }

    // 3. Open Razorpay checkout
    setLoadingMsg("Opening payment...");
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

      // Allow Razorpay to retry internally on failure
      retry: { enabled: true, max_count: 4 },

      notes: { user_id: userId, user_email: userEmail, type: "subscription" },

      // ✅ Payment succeeded — verify signature then grant access
      handler: async (response: {
        razorpay_payment_id: string;
        razorpay_order_id: string;
        razorpay_signature: string;
      }) => {
        clearTimeout(safetyTimer);
        setLoadingMsg("Verifying payment...");
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 20000);
          const verifyRes = await fetch("/api/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id:   response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature:  response.razorpay_signature,
            }),
            signal: controller.signal,
          });
          clearTimeout(timeoutId);
          const verifyData = await verifyRes.json();

          if (!verifyData.success) {
            toast.error(
              "Payment received but verification failed. Your money is safe. " +
              "Call +91 90593 36236 with Payment ID: " + response.razorpay_payment_id,
              { duration: 15000 }
            );
            setLoading(false);
            return;
          }

          // ✅ Verified — update Firestore to grant access
          setLoadingMsg("Activating access...");
          await updateDoc(doc(db, "users", userId), {
            isPaid:    true,
            paymentId: response.razorpay_payment_id,
            orderId:   response.razorpay_order_id,
            paidAt:    new Date().toISOString(),
          });
          await refreshUserData();
          toast.success("🎉 Payment successful! Full access unlocked!", { duration: 8000 });
        } catch (err: unknown) {
          // Firestore update failed AFTER payment was verified — critical error
          const isAbort = err instanceof Error && err.name === "AbortError";
          toast.error(
            isAbort
              ? "Access update timed out. Your payment was received. Please refresh the page or call +91 90593 36236."
              : "Payment done but access update failed. Please refresh the page. If problem persists call +91 90593 36236.",
            { duration: 15000 }
          );
        }
        setLoading(false);
      },

      // ❌ Payment failed — unlock the button so student can retry
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
        clearTimeout(safetyTimer);
        const reason = response.error.description || "";
        const payId  = response.error.metadata?.payment_id || "";
        const r = reason.toLowerCase();

        let msg = "Payment failed. Please try again.";
        if (r.includes("cancel") || r.includes("dismissed")) {
          msg = "Payment cancelled. Click the button again to try.";
        } else if (r.includes("insufficient") || r.includes("funds")) {
          msg = "Insufficient funds. Please try a different UPI ID or card.";
        } else if (r.includes("invalid") && r.includes("vpa")) {
          msg = "Invalid UPI ID. Please check and enter the correct UPI ID.";
        } else if (r.includes("timeout") || r.includes("expired")) {
          msg = "Payment timed out. Please try again.";
        } else if (r.includes("network") || r.includes("connection")) {
          msg = "Network error during payment. Check your internet and try again.";
        } else if (r.includes("bank")) {
          msg = "Bank declined the payment. Try a different payment method.";
        } else if (payId) {
          msg = `Payment not completed (Ref: ${payId}). Please retry or call +91 90593 36236.`;
        }

        toast.error(msg, { duration: 8000 });
        setLoading(false);
      },

      modal: {
        ondismiss: () => {
          clearTimeout(safetyTimer);
          setLoading(false);
        },
        confirm_close: true,
        escape: false,
        animation: true,
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="flex flex-col items-center gap-1.5">
      <button
        onClick={handlePayment}
        disabled={loading}
        className="bg-gold-500 hover:bg-gold-600 text-white font-bold px-6 py-2.5 rounded-xl transition-all hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed text-sm shadow-lg whitespace-nowrap"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
            </svg>
            {loadingMsg}
          </span>
        ) : "Unlock All – ₹199"}
      </button>

      {/* Help text for students who paid but didn't get access */}
      {!loading && (
        <p className="text-xs text-gray-400 text-center">
          Paid but no access?{" "}
          <a
            href="https://wa.me/919059336236?text=I%20paid%20for%20AGRICET%20Mocks%20but%20didn%27t%20get%20access"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline font-medium"
          >
            WhatsApp us
          </a>
        </p>
      )}
    </div>
  );
}
