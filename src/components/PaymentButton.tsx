"use client";
import { useState } from "react";
import { doc, updateDoc, collection, addDoc } from "firebase/firestore";
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
  const [loading, setLoading]         = useState(false);
  const [loadingMsg, setLoadingMsg]   = useState("Processing...");
  const [showManual, setShowManual]   = useState(false);
  const [txnId, setTxnId]             = useState("");
  const [txnSubmitting, setTxnSubmitting] = useState(false);
  const { refreshUserData }           = useAuth();

  // ── Manual UPI payment submission ──
  const handleManualSubmit = async () => {
    const trimmed = txnId.trim();
    if (!trimmed) {
      toast.error("Please enter your Transaction ID.");
      return;
    }
    setTxnSubmitting(true);
    try {
      await addDoc(collection(db, "manualPayments"), {
        userId,
        userEmail,
        userName,
        transactionId: trimmed,
        submittedAt: new Date().toISOString(),
        status: "pending",
      });
      toast.success(
        "✅ Transaction ID submitted! Your access will be activated within a few hours. For urgent help call +91 90593 36236.",
        { duration: 10000 }
      );
      setShowManual(false);
      setTxnId("");
    } catch {
      toast.error("Failed to submit. Please try again or call +91 90593 36236.");
    }
    setTxnSubmitting(false);
  };

  // ── Razorpay payment ──
  const handlePayment = async () => {
    setLoading(true);
    setLoadingMsg("Loading...");

    const safetyTimer = setTimeout(() => {
      setLoading(false);
      toast.error(
        "Payment window closed or timed out. If you completed the payment, please wait a few minutes and refresh the page. For help call +91 90593 36236.",
        { duration: 10000 }
      );
    }, 90000);

    const ok = await loadRazorpay();
    if (!ok) {
      clearTimeout(safetyTimer);
      toast.error("Payment gateway failed to load. Check your internet connection and try again.");
      setLoading(false);
      return;
    }

    let orderId: string;
    let amount: number;
    let currency: string;
    try {
      setLoadingMsg("Creating order...");
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);
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
      retry: { enabled: true, max_count: 4 },
      notes: { user_id: userId, user_email: userEmail, type: "subscription" },

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
    <div className="flex flex-col items-center gap-3 w-full max-w-xs">

      {/* Guidelines for students without bank accounts */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 w-full text-center">
        <p className="text-xs font-semibold text-blue-700 mb-1">📢 Don't have a bank account?</p>
        <p className="text-xs text-blue-600 leading-relaxed">
          Ask your <strong>parents</strong> to pay ₹199 using their{" "}
          <strong>PhonePe</strong>, <strong>Google Pay</strong>, or{" "}
          <strong>bank account / debit card</strong>. Hand them your phone and they can complete the payment for you.
        </p>
      </div>

      {/* Main Razorpay button */}
      <button
        onClick={handlePayment}
        disabled={loading}
        className="bg-gold-500 hover:bg-gold-600 text-white font-bold px-6 py-2.5 rounded-xl transition-all hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed text-sm shadow-lg whitespace-nowrap w-full"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
            </svg>
            {loadingMsg}
          </span>
        ) : "Unlock All – ₹199"}
      </button>

      {/* Manual payment option */}
      {!loading && (
        <div className="w-full text-center">
          <button
            onClick={() => setShowManual(!showManual)}
            className="text-xs text-primary-600 hover:underline font-medium"
          >
            💸 Paid to 9059336236 from another phone? Click here
          </button>

          {showManual && (
            <div className="mt-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-4 text-left">
              <p className="text-xs font-semibold text-amber-800 mb-1">📲 Enter your Transaction ID</p>
              <p className="text-xs text-amber-700 mb-3 leading-relaxed">
                Paid via PhonePe / Google Pay / bank to <strong>+91 90593 36236</strong>?
                Enter the transaction ID shown after payment. We will verify and activate your access shortly.
              </p>
              <input
                type="text"
                value={txnId}
                onChange={(e) => setTxnId(e.target.value)}
                placeholder="e.g. T2506251234567890"
                className="w-full border border-amber-300 rounded-lg px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 mb-3"
              />
              <button
                onClick={handleManualSubmit}
                disabled={txnSubmitting}
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 rounded-lg text-sm transition-all disabled:opacity-60"
              >
                {txnSubmitting ? "Submitting..." : "Submit Transaction ID"}
              </button>
            </div>
          )}
        </div>
      )}

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