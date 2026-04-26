"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Leaf, Mail, Lock, User, CheckCircle } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import toast from "react-hot-toast";

const PERKS = [
  "10 free MCQs — no payment needed",
  "Full access for just ₹199 (one-time)",
  "3,400+ AGRICET-standard questions",
  "Previous year papers (2023–2025)",
];

export default function SignupPage() {
  const [name, setName]         = useState("");
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm]   = useState("");
  const [showPw, setShowPw]     = useState(false);
  const [loading, setLoading]   = useState(false);
  const { signup }              = useAuth();
  const router                  = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password || !confirm) { toast.error("Please fill all fields"); return; }
    if (password.length < 6) { toast.error("Password must be at least 6 characters"); return; }
    if (password !== confirm) { toast.error("Passwords do not match"); return; }
    setLoading(true);
    try {
      await signup(name.trim(), email.trim(), password);
      toast.success("Account created! Welcome to AGRICET MOCKS 🌱");
      router.push("/dashboard");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "";
      if (msg.includes("email-already-in-use")) toast.error("Email already registered. Please login.");
      else if (msg.includes("invalid-email"))   toast.error("Please enter a valid email address.");
      else toast.error("Sign up failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 items-center">
        {/* Left Panel */}
        <div className="hidden md:block">
          <Link href="/" className="inline-flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="font-black text-2xl text-gray-900">AGRICET MOCKS</span>
          </Link>
          <h2 className="text-3xl font-black text-gray-900 mb-3">
            Crack AGRICET &<br />
            <span className="text-primary-600">Secure Your Seat</span>
          </h2>
          <p className="text-gray-500 mb-8">Join 12,500+ students preparing for BSc (Hons) Agriculture admission.</p>
          <ul className="space-y-4">
            {PERKS.map((p) => (
              <li key={p} className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 p-4 bg-primary-50 rounded-2xl">
            <p className="text-primary-700 font-semibold text-sm">🏆 94% of our students who complete all mock tests crack AGRICET!</p>
          </div>
        </div>

        {/* Form */}
        <div className="card p-8">
          <div className="md:hidden text-center mb-6">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <span className="font-black text-lg text-gray-900">AGRICET MOCKS</span>
            </Link>
          </div>
          <h1 className="text-xl font-bold text-gray-900 mb-6">Create Free Account</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type="text" value={name} onChange={e => setName(e.target.value)}
                  placeholder="Your full name" className="input-field pl-10" required />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com" className="input-field pl-10" required />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type={showPw ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)}
                  placeholder="Min 6 characters" className="input-field pl-10 pr-10" required />
                <button type="button" onClick={() => setShowPw(!showPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showPw ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type="password" value={confirm} onChange={e => setConfirm(e.target.value)}
                  placeholder="Re-enter password" className="input-field pl-10" required />
              </div>
            </div>

            <button type="submit" disabled={loading}
              className="btn-primary w-full py-3.5 text-base mt-2 disabled:opacity-60 disabled:cursor-not-allowed">
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  Creating account...
                </span>
              ) : "Create Free Account"}
            </button>
          </form>

          <p className="text-center text-xs text-gray-400 mt-4">
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </p>

          <div className="mt-5 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link href="/login" className="text-primary-600 font-semibold hover:underline">Login here</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
