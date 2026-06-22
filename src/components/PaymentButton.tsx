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

// ── Direct UPI (FamPay / PhonePe / GPay) payment details ──
const PAY_PHONE  = "9059336236";          // pay-to number — works in every UPI app
const PAY_AMOUNT = 199;
// Set NEXT_PUBLIC_UPI_VPA to the real UPI ID for this number (e.g. "9059336236@ybl",
// "9059336236@paytm", "9059336236@okaxis"). When set, the "Open in UPI app" button
// and the scannable QR appear. Leave empty and only the manual number flow shows —
// so we never render a QR that points at an unverified address.
const UPI_VPA = process.env.NEXT_PUBLIC_UPI_VPA || "";
const UPI_LINK = UPI_VPA
  ? `upi://pay?pa=${UPI_VPA}&pn=${encodeURIComponent("AEO AGRICET Mocks")}&am=${PAY_AMOUNT}.00&cu=INR&tn=${encodeURIComponent("AGRICET Subscription")}`
  : "";
const UPI_QR = UPI_LINK
  ? `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(UPI_LINK)}`
  : "";

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
  const [txnId, setTxnId]             = useState("");
  const [txnSubmitting, setTxnSubmitting] = useState(false);
  const [copied, setCopied]           = useState(false);
  const { refreshUserData }           = useAuth();

  const handleCopyNumber = async () => {
    try {
      await navigator.clipboard.writeText(PAY_PHONE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error(`Copy this number manually: ${PAY_PHONE}`);
    }
  };

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
      name:        "AEO & AGRICET Mocks",
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
          // Access is already granted server-side by /api/verify-payment (Admin
          // SDK). This client write is a best-effort instant-UX optimisation —
          // if Firestore rules forbid clients from setting isPaid, ignore the
          // error; the server grant stands and AuthContext's onSnapshot will
          // sync isPaid to the UI within a moment.
          try {
            await updateDoc(doc(db, "users", userId), {
              isPaid:    true,
              paymentId: response.razorpay_payment_id,
              orderId:   response.razorpay_order_id,
              paidAt:    new Date().toISOString(),
            });
          } catch { /* rules may forbid client isPaid writes — server already granted */ }
          try { await refreshUserData(); } catch { /* onSnapshot will sync */ }
          toast.success("🎉 Payment successful! Full access unlocked!", { duration: 8000 });
        } catch (err: unknown) {
          const isAbort = err instanceof Error && err.name === "AbortError";
          toast.error(
            isAbort
              ? "Verification timed out. Your payment was received — access will activate shortly. If not, call +91 90593 36236 (Payment ID: " + response.razorpay_payment_id + ")."
              : "Payment received but verification couldn't complete here. Access will activate shortly. If not, call +91 90593 36236 (Payment ID: " + response.razorpay_payment_id + ").",
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

      {/* ── FamPay / UPI direct-pay (works when card checkout fails) ── */}
      {!loading && (
        <div className="w-full">
          <div className="flex items-center gap-2 my-1">
            <div className="h-px bg-gray-200 flex-1" />
            <span className="text-[11px] font-bold text-gray-400">OR</span>
            <div className="h-px bg-gray-200 flex-1" />
          </div>

          <div className="bg-violet-50 border border-violet-200 rounded-xl px-4 py-4 text-left w-full">
            <p className="text-sm font-bold text-violet-800 mb-0.5">💳 Pay with FamPay / PhonePe / GPay</p>
            <p className="text-xs text-violet-600 mb-3 leading-relaxed">
              Using <strong>FamPay</strong> or another UPI app? Pay <strong>₹{PAY_AMOUNT}</strong> directly to the
              number below, then enter your transaction ID to unlock access.
            </p>

            {/* Pay-to number with copy */}
            <div className="flex items-center justify-between gap-2 bg-white border border-violet-200 rounded-lg px-3 py-2 mb-3">
              <div>
                <p className="text-[11px] text-gray-400 leading-none mb-0.5">Pay ₹{PAY_AMOUNT} to this number</p>
                <p className="text-base font-black text-gray-800 tracking-wide">{PAY_PHONE}</p>
              </div>
              <button
                onClick={handleCopyNumber}
                className="shrink-0 bg-violet-100 hover:bg-violet-200 text-violet-700 text-xs font-bold px-3 py-1.5 rounded-lg transition-all"
              >
                {copied ? "✓ Copied" : "Copy"}
              </button>
            </div>

            {/* One-tap UPI app intent + QR (shown once UPI_VPA is configured) */}
            {UPI_LINK && (
              <div className="mb-3">
                <a
                  href={UPI_LINK}
                  className="block w-full text-center bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 rounded-lg text-sm transition-all mb-2"
                >
                  📲 Open in FamPay / UPI app — Pay ₹{PAY_AMOUNT}
                </a>
                {UPI_QR && (
                  <div className="flex flex-col items-center">
                    <p className="text-[11px] text-gray-400 mb-1">On a computer? Scan this with FamPay / any UPI app</p>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={UPI_QR} alt="UPI payment QR" width={150} height={150} className="rounded-lg border border-violet-200" />
                  </div>
                )}
              </div>
            )}

            {/* Steps */}
            <ol className="text-xs text-violet-700 list-decimal list-inside space-y-0.5 mb-3">
              <li>Open FamPay (or PhonePe / GPay) → <strong>Pay</strong></li>
              <li>Enter <strong>{PAY_PHONE}</strong> and pay <strong>₹{PAY_AMOUNT}</strong></li>
              <li>Copy the <strong>Transaction ID</strong> and paste it below</li>
            </ol>

            {/* Transaction ID submission */}
            <input
              type="text"
              value={txnId}
              onChange={(e) => setTxnId(e.target.value)}
              placeholder="Transaction ID — e.g. T2506251234567890"
              className="w-full border border-violet-300 rounded-lg px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-violet-400 mb-2"
            />
            <button
              onClick={handleManualSubmit}
              disabled={txnSubmitting}
              className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 rounded-lg text-sm transition-all disabled:opacity-60"
            >
              {txnSubmitting ? "Submitting..." : "Submit Transaction ID & Unlock"}
            </button>
            <p className="text-[11px] text-violet-500 mt-2 text-center">Access is activated after we verify — usually within a few hours.</p>
          </div>
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