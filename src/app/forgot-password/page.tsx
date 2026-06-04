"use client";
import { useState } from "react";
import Link from "next/link";
import { Leaf, Mail, ArrowLeft, CheckCircle } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import toast from "react-hot-toast";

export default function ForgotPasswordPage() {
  const [email, setEmail]   = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent]     = useState(false);
  const { resetPassword }   = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) { toast.error("Please enter your email address"); return; }
    setLoading(true);
    try {
      await resetPassword(email);
      setSent(true);
      toast.success("Reset email sent!");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "";
      if (msg.includes("user-not-found"))
        toast.error("No account found with this email address.");
      else if (msg.includes("invalid-email"))
        toast.error("Please enter a valid email address.");
      else
        toast.error("Failed to send reset email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="font-black text-2xl text-gray-900">AEO & AGRICET Mocks</span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Reset your password</h1>
          <p className="text-gray-500 mt-1">
            {sent ? "Check your inbox for the reset link" : "Enter your email and we'll send a reset link"}
          </p>
        </div>

        <div className="card p-8">
          {sent ? (
            /* ── Success state ── */
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-16 h-16 text-green-500" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Email sent!</h2>
              <p className="text-gray-500 text-sm mb-6">
                We sent a password reset link to{" "}
                <span className="font-semibold text-gray-700">{email}</span>.
                Check your inbox (and spam folder).
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-left">
                <p className="text-amber-700 text-sm font-medium mb-1">📌 Next steps:</p>
                <ol className="text-amber-600 text-sm space-y-1 list-decimal list-inside">
                  <li>Open the email from Firebase / AEO & AGRICET Mocks</li>
                  <li>Click the reset link inside</li>
                  <li>Set a new password</li>
                  <li>Come back and login</li>
                </ol>
              </div>
              <button
                onClick={() => { setSent(false); setEmail(""); }}
                className="text-primary-600 text-sm hover:underline font-medium"
              >
                Try a different email
              </button>
            </div>
          ) : (
            /* ── Form state ── */
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="input-field pl-10"
                    autoComplete="email"
                    required
                    autoFocus
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                    </svg>
                    Sending reset link...
                  </span>
                ) : "Send Reset Link"}
              </button>
            </form>
          )}
        </div>

        {/* Back to login */}
        <div className="text-center mt-6">
          <Link href="/login" className="inline-flex items-center gap-1.5 text-primary-600 text-sm hover:underline font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Login
          </Link>
        </div>

      </div>
    </div>
  );
}
