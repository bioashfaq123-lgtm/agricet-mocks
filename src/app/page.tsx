"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  BookOpen, Clock, Trophy, ChevronDown, CheckCircle,
  Users, BarChart2, Shield, Zap, Play, ArrowRight, Leaf,
  MessageSquare, Target, Award
} from "lucide-react";
import { SUBJECTS } from "@/data/subjects";
import Navbar from "@/components/Navbar";

const MOTIVATIONAL = [
  "Your agriculture dream starts here 🌱",
  "Practice smart, achieve your goal 🎯",
  "Success in AGRICET is just one mock test away ✅",
  "Join thousands of students cracking AGRICET 🏆",
];

const STATS = [
  { label: "Students Enrolled", value: "12,500+", icon: Users },
  { label: "MCQs Available",    value: "3,400+",  icon: BookOpen },
  { label: "Subjects Covered",  value: "17",      icon: Target },
  { label: "Success Rate",      value: "94%",     icon: Trophy },
];


const FAQS = [
  { q: "What is AGRICET?", a: "AGRICET (Agriculture Common Entrance Test) is conducted by PJTAU (Prof. Jayashankar Telangana State Agricultural University) for admission into BSc (Hons) Agriculture programs. It is open to students who have completed Diploma in Agriculture." },
  { q: "How many questions are in AGRICET?", a: "AGRICET consists of 100 multiple choice questions from subjects covered in the Diploma in Agriculture curriculum. Each question carries 1 mark with no negative marking." },
  { q: "What subjects are covered in this platform?", a: "This platform covers 18 subjects: Principles of Agronomy (DA-101), Crop Production-I Kharif (DA-102), Plant Breeding & Seed Technology (DA-111), Soil Chemistry & Fertility (DA-121), Soil & Water Conservation (DA-122), General Entomology (DA-131), Crop Pests & Management (DA-132), Farm Power & Machinery (DA-151), Plant Pathology & Microbiology (DA-171), Crop Production-II Rabi & Oilseeds (DA-201), Agricultural Economics (DA-241), Survey, Levelling & Field Measurements (DA-252), Forestry & Medicinal Plants (DA-281), Horticultural Crops (DA-282), Agricultural Extension & Rural Development (DA-291), Computer Applications (DA-262), Communication Skills in English (DA-263), and General Agriculture." },
  { q: "Is there a free demo available?", a: "Yes! You can take a free demo test with 10 questions from Agronomy without registration. Full access to all 17 subjects (200 MCQs each) and previous year papers requires a one-time payment of ₹100." },
  { q: "How long is my subscription valid?", a: "Your ₹100 subscription gives you lifetime access to all content — all 17 subjects, 3,400+ MCQs, previous year papers (2023, 2024, 2025), and all future updates." },
  { q: "Can I practice on mobile?", a: "Yes! AGRICET MOCKS is fully responsive and works seamlessly on all devices — mobile phones, tablets, and desktops." },
];

export default function LandingPage() {
  const [motIdx, setMotIdx] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setMotIdx((i) => (i + 1) % MOTIVATIONAL.length), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Announcement Banner */}
      {showBanner && (
        <div className="bg-primary-600 text-white text-center py-2 px-4 text-sm font-medium relative">
          🎉 AGRICET 2025 Question Paper & Key now available! &nbsp;
          <Link href="/test/previous-year/2025" className="underline font-bold">Practice Now →</Link>
          <button onClick={() => setShowBanner(false)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white">✕</button>
        </div>
      )}

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-8xl">🌾</div>
          <div className="absolute top-40 right-20 text-6xl">🌱</div>
          <div className="absolute bottom-20 left-1/4 text-7xl">🌿</div>
          <div className="absolute bottom-10 right-10 text-5xl">🍃</div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Leaf className="w-4 h-4" /> PJTAU-AGRICET Preparation Platform
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">
            Crack AGRICET &<br />
            <span className="text-gold-400">Secure Your BSc (Hons)</span><br />
            Agriculture Seat 🌱
          </h1>
          <div className="h-8 mb-8">
            <p className="text-lg md:text-xl text-primary-100 transition-all duration-500 key={motIdx}">
              {MOTIVATIONAL[motIdx]}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/demo" className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 border-0">
              <Play className="w-5 h-5" /> Try Free Demo Test
            </Link>
            <Link href="/signup" className="inline-flex items-center gap-2 bg-white text-primary-700 font-bold text-lg px-8 py-4 rounded-xl border-2 border-white hover:bg-primary-50 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg">
              Get Full Access – ₹100 <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {STATS.map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur rounded-2xl p-4">
                <s.icon className="w-6 h-6 mx-auto mb-1 text-gold-400" />
                <div className="text-2xl font-black">{s.value}</div>
                <div className="text-xs text-primary-200">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUBJECTS GRID ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title">
            {SUBJECTS.length} Subjects, {SUBJECTS.reduce((s, x) => s + x.totalQuestions, 0).toLocaleString()}+ MCQs
          </h2>
          <p className="section-sub">
            Every Diploma in Agriculture (DA) subject covered — including all 17 PJTSAU Diploma subjects
            (DA-101 to DA-291) with AGRICET-standard questions
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
            {SUBJECTS.map((sub) => (
              <div key={sub.id} className="card p-4 hover:-translate-y-1 cursor-pointer group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{sub.icon}</span>
                  <span className="text-xs font-bold text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">{sub.code}</span>
                </div>
                <h3 className="font-semibold text-sm text-gray-800 group-hover:text-primary-600 transition-colors leading-tight">{sub.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{sub.totalQuestions} MCQs</p>
                <div className="mt-2">
                  <span className="badge bg-primary-50 text-primary-700 text-xs">{sub.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title">Why Choose AGRICET MOCKS?</h2>
          <p className="section-sub">Built specifically for AGRICET aspirants by agriculture experts</p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: BookOpen, title: "AGRICET Standard MCQs", color: "green", desc: "All 3,400+ questions are crafted at PJTAU-AGRICET difficulty level — concept-based, application-oriented, with 4 options and detailed explanations." },
              { icon: Clock,    title: "Timed Mock Tests",       color: "blue",  desc: "Simulate the real AGRICET exam with timed tests. Track your speed, identify weak areas, and improve time management with every attempt." },
              { icon: BarChart2,title: "Performance Analytics",  color: "purple",desc: "Detailed score reports, accuracy percentage, subject-wise analytics, and progress graphs to visualize your improvement over time." },
              { icon: Trophy,   title: "Previous Year Papers",   color: "gold",  desc: "Practice with official AGRICET 2023, 2024 & 2025 question papers with complete answer keys and explanations." },
              { icon: Shield,   title: "Secure Access",          color: "red",   desc: "Single-session login prevents account sharing. Your progress is securely stored and synced across devices." },
              { icon: Zap,      title: "Instant Explanations",   color: "amber", desc: "After each answer, get a clear, detailed explanation covering the concept — helping you learn, not just memorize." },
            ].map((f) => (
              <div key={f.title} className="card p-6 hover:-translate-y-1">
                <div className={`w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4`}>
                  <f.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title">How It Works</h2>
          <div className="mt-12 space-y-0">
            {[
              { step: "1", title: "Sign Up Free",       desc: "Create your account in 30 seconds — just name, email, and password." },
              { step: "2", title: "Try Free Demo",      desc: "Attempt 10 free questions from Agronomy to experience the platform." },
              { step: "3", title: "Subscribe – ₹100",  desc: "One-time payment via Razorpay for lifetime access to all 17 subjects." },
              { step: "4", title: "Practice & Crack",   desc: "Take subject-wise tests, timed mocks, and previous year papers. Track progress." },
            ].map((step, i) => (
              <div key={step.step} className="flex gap-6 items-start pb-8 last:pb-0">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-black text-lg flex-shrink-0">
                  {step.step}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-bold text-gray-900 text-lg">{step.title}</h3>
                  <p className="text-gray-500 mt-1">{step.desc}</p>
                </div>
                {i < 3 && <div className="absolute ml-6 mt-12 w-0.5 h-8 bg-primary-200" style={{ marginLeft: "23px" }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="section-title">Simple, Affordable Pricing</h2>
          <p className="section-sub">One-time payment. Lifetime access. No hidden charges.</p>

          <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Free */}
            <div className="card p-8 border-2 border-gray-200">
              <div className="text-2xl font-black text-gray-400 mb-1">Free Demo</div>
              <div className="text-4xl font-black text-gray-800 mb-6">₹0</div>
              <ul className="space-y-3 text-left mb-8">
                {["10 Free MCQs (Agronomy)","Instant explanations","No registration required","Limited to 1 subject"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-600 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary-500" />{f}
                  </li>
                ))}
              </ul>
              <Link href="/demo" className="btn-secondary w-full text-center block">Try Free Demo</Link>
            </div>

            {/* Paid */}
            <div className="card p-8 border-2 border-primary-500 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                MOST POPULAR
              </div>
              <div className="text-2xl font-black text-primary-600 mb-1">Full Access</div>
              <div className="text-4xl font-black text-gray-800 mb-1">₹100</div>
              <div className="text-sm text-gray-400 line-through mb-6">₹999 (Launch Offer)</div>
              <ul className="space-y-3 text-left mb-8">
                {[
                  "All 17 subjects unlocked",
                  "3,400+ AGRICET-standard MCQs",
                  "Previous year papers (2023-25)",
                  "Timed mock tests",
                  "Performance analytics & dashboard",
                  "Lifetime access",
                  "Mobile + Desktop",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-700 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary-600" />{f}
                  </li>
                ))}
              </ul>
              <Link href="/signup" className="btn-primary w-full text-center block">Get Full Access Now</Link>
            </div>
          </div>
        </div>
      </section>


      {/* ── FAQ ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="mt-10 space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold text-gray-800 hover:text-primary-600 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform flex-shrink-0 ml-4 ${openFaq === i ? "rotate-180 text-primary-600" : "text-gray-400"}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-br from-primary-800 to-primary-600 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-5xl mb-4">🌾</div>
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Start Your AGRICET Journey Today
          </h2>
          <p className="text-primary-200 mb-8 text-lg">
            Join 12,500+ students who are preparing smarter with AGRICET MOCKS
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo" className="inline-flex items-center gap-2 bg-white text-primary-700 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-all hover:scale-105">
              <Play className="w-5 h-5" /> Try Free Demo
            </Link>
            <Link href="/signup" className="inline-flex items-center gap-2 bg-gold-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-gold-600 transition-all hover:scale-105">
              Subscribe – ₹100 <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">A</div>
              <span className="text-white font-bold">AGRICET MOCKS</span>
            </div>
            <p className="text-sm leading-relaxed">The #1 mock test platform for Diploma in Agriculture students preparing for AGRICET exam.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/demo" className="hover:text-primary-400 transition-colors">Free Demo</Link></li>
              <li><Link href="/signup" className="hover:text-primary-400 transition-colors">Sign Up</Link></li>
              <li><Link href="/login" className="hover:text-primary-400 transition-colors">Login</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Subjects</h4>
            <ul className="space-y-2 text-sm">
              {SUBJECTS.slice(0, 5).map(s => (
                <li key={s.id}><span className="hover:text-primary-400 transition-colors cursor-pointer">{s.name}</span></li>
              ))}
              <li className="text-primary-400">+ 12 more subjects</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">About AGRICET</h4>
            <p className="text-sm leading-relaxed">AGRICET is the entrance test conducted by PJTAU for admission to BSc (Hons) Agriculture. Prepare with the best mock tests!</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          © {new Date().getFullYear()} AGRICET MOCKS. All rights reserved. | Designed for AGRICET Aspirants.
        </div>
      </footer>
    </div>
  );
}
