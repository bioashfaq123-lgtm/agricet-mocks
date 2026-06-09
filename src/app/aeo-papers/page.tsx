"use client";
import Link from "next/link";
import { Play, Clock, BookOpen, ChevronLeft } from "lucide-react";
import Navbar from "@/components/Navbar";

const PAPERS = [
  {
    paper: "Paper 1",
    id: "aeo-p1-gs",
    title: "General Studies",
    subtitle: "TGPSC AEO Paper 1 — General Studies Practice Paper",
    questions: 150,
    duration: 150,
    color: "blue",
    icon: "📋",
    topics: [
      "Telangana History, Culture & Geography (30 Qs)",
      "Indian Polity & Constitution (20 Qs)",
      "Indian Economy & Agriculture Policy (20 Qs)",
      "General Science & Environment (25 Qs)",
      "Current Affairs & Govt. Schemes (20 Qs)",
      "Mental Ability & Reasoning (25 Qs)",
      "Telangana Govt. Schemes & Current Events (10 Qs)",
    ],
  },
  {
    paper: "Paper 2",
    id: "aeo-p2-agri",
    title: "Agriculture (Diploma Syllabus)",
    subtitle: "TGPSC AEO Paper 2 — Agriculture Diploma Syllabus Practice Paper",
    questions: 150,
    duration: 150,
    color: "green",
    icon: "🌾",
    topics: [
      "Agronomy & Crop Production (30 Qs)",
      "Soil Science & Fertilizers (25 Qs)",
      "Entomology & Pest Management (20 Qs)",
      "Plant Pathology (20 Qs)",
      "Horticulture (20 Qs)",
      "Agricultural Extension & Economics (20 Qs)",
      "Animal Husbandry, Irrigation & Seed Tech (15 Qs)",
    ],
  },
];

const colorMap: Record<string, { bg: string; border: string; badge: string; btn: string; tag: string }> = {
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-300",
    badge: "bg-blue-600 text-white",
    btn: "bg-blue-600 hover:bg-blue-700 text-white",
    tag: "bg-blue-100 text-blue-700",
  },
  green: {
    bg: "bg-green-50",
    border: "border-green-300",
    badge: "bg-green-600 text-white",
    btn: "bg-green-600 hover:bg-green-700 text-white",
    tag: "bg-green-100 text-green-700",
  },
};

export default function AEOPapersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-10">

        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <Link href="/#aeo" className="text-gray-400 hover:text-gray-600">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-black text-gray-900">AEO Practice Papers</h1>
        </div>
        <p className="text-gray-500 mb-8 ml-8">
          TGPSC Agricultural Extension Officer — Practice papers for both papers. No login required.
        </p>

        {/* Exam Structure Banner */}
        <div className="mb-8 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 p-6 text-white shadow-lg">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🏛️</div>
            <div>
              <h2 className="text-xl font-black mb-1">TGPSC AEO Exam Structure</h2>
              <p className="text-orange-100 text-sm mb-4">
                The AEO exam is conducted in <strong className="text-white">two separate papers</strong>.
                Both papers must be appeared in to qualify.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/20 rounded-xl p-3">
                  <div className="font-black text-base mb-1">📋 Paper 1</div>
                  <div className="text-orange-100 text-xs">General Studies<br/>150 Qs · 150 Minutes</div>
                </div>
                <div className="bg-white/20 rounded-xl p-3">
                  <div className="font-black text-base mb-1">🌾 Paper 2</div>
                  <div className="text-orange-100 text-xs">Agriculture Diploma Syllabus<br/>150 Qs · 150 Minutes</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── ACTUAL PYQ PAPERS (PDF-based) ── */}
        <div className="mb-8 rounded-2xl border-2 border-red-200 bg-red-50 p-5">
          <div className="flex items-start gap-4">
            <div className="text-4xl">📄</div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-red-600 text-white text-xs font-black px-2 py-0.5 rounded-full">NEW</span>
                <h2 className="font-black text-gray-900 text-base">Actual Previous Year Papers — Telugu</h2>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Original TSPSC AEO exam papers (2016 & 2017) in Telugu — with correct answers marked in <strong className="text-green-700">green ✅</strong>.
                Paper 1 General Studies + Paper 2 Agriculture — all 3 papers, 150 questions each.
              </p>
              <div className="flex flex-wrap gap-2 mb-4 text-xs text-gray-600">
                <span className="bg-white border border-red-200 px-2 py-1 rounded-lg">📋 AEO 2016 Paper 1 – General Studies</span>
                <span className="bg-white border border-red-200 px-2 py-1 rounded-lg">🌾 AEO 2016 Paper 2 – Agriculture</span>
                <span className="bg-white border border-red-200 px-2 py-1 rounded-lg">🌾 AEO 2017 Paper 2 – Agriculture</span>
              </div>
              <Link
                href="/aeo-papers/pyq"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black text-sm px-5 py-2.5 rounded-xl transition-colors shadow-md"
              >
                📖 View Original PYQ Papers →
              </Link>
            </div>
          </div>
        </div>

        {/* Paper Cards */}
        <div className="space-y-6">
          {PAPERS.map((p) => {
            const c = colorMap[p.color];
            return (
              <div key={p.id}
                className={`rounded-2xl border-2 ${c.border} ${c.bg} p-6 shadow-sm`}>

                {/* Paper Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl ${c.badge}`}>
                      {p.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-black px-3 py-1 rounded-full ${c.badge}`}>{p.paper}</span>
                        <span className="bg-green-500 text-white text-xs font-black px-2 py-0.5 rounded-full">🆓 FREE</span>
                      </div>
                      <h2 className="text-xl font-black text-gray-900">{p.title}</h2>
                      <p className="text-gray-500 text-sm">{p.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-6 mb-5">
                  <span className="flex items-center gap-2 text-sm text-gray-600 font-semibold">
                    <BookOpen className="w-4 h-4" /> {p.questions} Questions
                  </span>
                  <span className="flex items-center gap-2 text-sm text-gray-600 font-semibold">
                    <Clock className="w-4 h-4" /> {p.duration} Minutes
                  </span>
                  <span className="text-sm text-gray-600 font-semibold">
                    ⏱ 1 minute per question
                  </span>
                </div>

                {/* Topics Grid */}
                <div className="mb-5">
                  <p className="text-xs font-black text-gray-500 uppercase tracking-wide mb-3">Topics Covered</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {p.topics.map((t) => (
                      <div key={t} className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold ${c.tag}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current flex-shrink-0"></span>
                        {t}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Link href={`/test/previous-year/${p.id}`}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-black text-base transition-all hover:scale-[1.02] shadow-md ${c.btn}`}>
                  <Play className="w-5 h-5" />
                  Start {p.paper} Practice — Free
                </Link>
              </div>
            );
          })}
        </div>

        {/* Tips */}
        <div className="mt-8 rounded-2xl bg-amber-50 border border-amber-200 p-5">
          <h3 className="font-bold text-amber-800 mb-3">💡 AEO Exam Preparation Tips</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-amber-700">
            <ul className="space-y-1.5">
              <li>• <strong>Paper 1:</strong> Focus on Telangana history, current affairs, and government schemes</li>
              <li>• <strong>Paper 2:</strong> Agricultural Extension and Agronomy carry maximum weightage</li>
              <li>• Time management: 1 minute per question for both papers</li>
            </ul>
            <ul className="space-y-1.5">
              <li>• Revise all 17 Diploma Agriculture subjects for Paper 2</li>
              <li>• Practice AGRICET mock tests — same agriculture syllabus!</li>
              <li>• Both papers are qualifying — attempt both seriously</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link href="/#aeo" className="text-sm text-gray-500 hover:text-orange-600 hover:underline">
            ← Back to AEO Information
          </Link>
        </div>
      </div>
    </div>
  );
}
