"use client";
import Link from "next/link";
import { Play, Clock, BookOpen, ChevronLeft, FileText } from "lucide-react";
import { AEO_PAPERS } from "@/data/previousYearPapers";
import Navbar from "@/components/Navbar";

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
          Practice papers based on TGPSC Agricultural Extension Officer exam pattern — No login required
        </p>

        {/* Info Banner */}
        <div className="mb-8 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 p-6 text-white shadow-lg">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🏛️</div>
            <div>
              <h2 className="text-xl font-black mb-1">TGPSC AEO — Agricultural Extension Officer</h2>
              <p className="text-orange-100 text-sm mb-3">
                Practice papers covering the complete AEO exam syllabus — Part A (General Studies &amp; Telangana)
                + Part B (Agriculture Technical). All papers are FREE with no login required.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-white/20 px-3 py-1 rounded-lg font-semibold">✅ 150 Questions Each</span>
                <span className="bg-white/20 px-3 py-1 rounded-lg font-semibold">✅ 150 Minutes</span>
                <span className="bg-white/20 px-3 py-1 rounded-lg font-semibold">✅ TGPSC Standard</span>
                <span className="bg-white/20 px-3 py-1 rounded-lg font-semibold">✅ With Explanations</span>
                <span className="bg-white/20 px-3 py-1 rounded-lg font-semibold">✅ 100% FREE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Exam Pattern Info */}
        <div className="mb-8 grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-5 border border-orange-200 shadow-sm">
            <h3 className="font-black text-gray-900 mb-3">📋 Part A — General Studies (45 Qs)</h3>
            <ul className="text-sm text-gray-600 space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> Telangana History &amp; Culture</li>
              <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> Telangana Geography &amp; Districts</li>
              <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> Indian Polity &amp; Constitution</li>
              <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> Current Affairs &amp; Govt. Schemes</li>
              <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> Aptitude &amp; Reasoning</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-orange-200 shadow-sm">
            <h3 className="font-black text-gray-900 mb-3">🌾 Part B — Agriculture Technical (105 Qs)</h3>
            <ul className="text-sm text-gray-600 space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> Agricultural Extension &amp; Schemes</li>
              <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> Agronomy &amp; Crop Production</li>
              <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> Soil Science &amp; Fertilizers</li>
              <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> Entomology &amp; Plant Pathology</li>
              <li className="flex items-start gap-2"><span className="text-orange-500 font-bold">•</span> Horticulture &amp; Animal Husbandry</li>
            </ul>
          </div>
        </div>

        {/* Papers Grid */}
        <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-orange-500" /> Available Practice Papers
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {AEO_PAPERS.map((paper) => (
            <div key={paper.id}
              className="bg-white rounded-2xl p-6 border-2 border-orange-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-orange-500 text-white text-xs font-black px-3 py-1 rounded-full">AEO</span>
                    <span className="bg-green-500 text-white text-xs font-black px-2 py-0.5 rounded-full">🆓 FREE</span>
                    <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-0.5 rounded-full">{paper.year}</span>
                  </div>
                  <h3 className="font-black text-gray-900 text-base leading-snug">{paper.title}</h3>
                </div>
                <FileText className="w-8 h-8 text-orange-200 flex-shrink-0" />
              </div>

              <p className="text-gray-500 text-sm mb-4 leading-relaxed">{paper.description}</p>

              <div className="flex items-center gap-4 text-sm text-gray-500 mb-5">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-orange-400" />
                  {paper.totalQuestions} Questions
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-orange-400" />
                  {paper.duration} minutes
                </span>
              </div>

              {/* No login required — direct link to test */}
              <Link href={`/test/previous-year/${paper.id}`}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-3 rounded-xl text-center flex items-center justify-center gap-2 transition-colors">
                <Play className="w-4 h-4" /> Start Practice
              </Link>
            </div>
          ))}
        </div>

        {/* Tip Box */}
        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5">
          <h3 className="font-bold text-amber-800 mb-2">💡 AEO Exam Tips</h3>
          <ul className="text-amber-700 text-sm space-y-1.5">
            <li>• <strong>Part A</strong> (General Studies): Focus on Telangana history, current affairs, and government schemes</li>
            <li>• <strong>Part B</strong> (Agriculture): Agricultural Extension and Agronomy carry maximum weightage</li>
            <li>• Practice previous papers to understand the difficulty level and question types</li>
            <li>• Time management is key — 150 Qs in 150 minutes = 1 minute per question</li>
            <li>• Our AGRICET mock tests cover the same agriculture subjects — use them for AEO prep too!</li>
          </ul>
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
