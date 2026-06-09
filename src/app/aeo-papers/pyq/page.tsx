"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { ChevronLeft, ChevronRight, BookOpen, Calendar, Clock, FileText, ZoomIn, ZoomOut } from "lucide-react";
import Link from "next/link";

const PAPERS = [
  {
    id: "p1",
    label: "Paper 1 – General Studies",
    labelTelugu: "పేపర్ 1 – జనరల్ స్టడీస్",
    year: "2016",
    date: "04 June 2016",
    time: "10:00 AM – 12:30 PM",
    subject: "General Studies & General Abilities",
    totalPages: 30,
    totalQuestions: 150,
    color: "blue",
    description: "TGPSC AEO 2016 Paper 1 — General Studies, Reasoning, English, Current Affairs & Telangana GK",
    note: "Questions in Telugu. ✅ Green tick = Correct answer.",
  },
  {
    id: "p2",
    label: "Paper 2 – Agriculture",
    labelTelugu: "పేపర్ 2 – వ్యవసాయం",
    year: "2016",
    date: "04 June 2016",
    time: "02:30 PM – 05:00 PM",
    subject: "Agriculture (Diploma Level)",
    totalPages: 24,
    totalQuestions: 150,
    color: "green",
    description: "TGPSC AEO 2016 Paper 2 — Agriculture Diploma Syllabus: Agronomy, Soil Science, Horticulture, Entomology",
    note: "Questions in Telugu. ✅ Green tick = Correct answer.",
  },
  {
    id: "p3",
    label: "Paper 2 – Agriculture (2017)",
    labelTelugu: "పేపర్ 2 – వ్యవసాయం (2017)",
    year: "2017",
    date: "13 March 2017",
    time: "02:30 PM – 05:00 PM",
    subject: "Agriculture Diploma Level",
    totalPages: 22,
    totalQuestions: 150,
    color: "emerald",
    description: "TGPSC AEO 2017 Paper 2 — Agriculture Diploma Syllabus: detailed agronomy, crop science & extension",
    note: "Questions in Telugu. ✅ Green tick = Correct answer.",
  },
];

const colorMap: Record<string, { bg: string; border: string; badge: string; btn: string; activePill: string }> = {
  blue:    { bg: "bg-blue-50",    border: "border-blue-200",    badge: "bg-blue-600 text-white",   btn: "bg-blue-600 hover:bg-blue-700 text-white",    activePill: "bg-blue-600 text-white" },
  green:   { bg: "bg-green-50",   border: "border-green-200",   badge: "bg-green-600 text-white",  btn: "bg-green-600 hover:bg-green-700 text-white",   activePill: "bg-green-600 text-white" },
  emerald: { bg: "bg-emerald-50", border: "border-emerald-200", badge: "bg-emerald-600 text-white",btn: "bg-emerald-600 hover:bg-emerald-700 text-white",activePill: "bg-emerald-600 text-white" },
};

export default function AEOPYQPage() {
  const [selectedPaper, setSelectedPaper] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(100);

  const paper = PAPERS[selectedPaper];
  const c = colorMap[paper.color];

  const handlePaperChange = (idx: number) => {
    setSelectedPaper(idx);
    setCurrentPage(1);
    setZoom(100);
  };

  const imgSrc = `/aeo-papers/${paper.id}/${paper.id}_page${String(currentPage).padStart(2, "0")}.png`;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3 flex-wrap">
          <Link href="/aeo-papers" className="text-gray-500 hover:text-gray-700">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <BookOpen className="w-5 h-5 text-gray-500" />
          <span className="font-bold text-gray-800 text-sm">AEO Previous Year Question Papers</span>
          <span className="text-gray-400 text-sm hidden sm:inline">— Original Exam Papers with Answers</span>
          <div className="ml-auto">
            <Link
              href="/aeo-papers/pyq/practice"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold text-xs px-4 py-2 rounded-xl transition-colors shadow"
            >
              🎯 Practice Test (English)
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">

        {/* Paper selector tabs */}
        <div className="flex gap-2 flex-wrap mb-6">
          {PAPERS.map((p, i) => (
            <button
              key={p.id}
              onClick={() => handlePaperChange(i)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all border ${
                i === selectedPaper
                  ? `${colorMap[p.color].activePill} border-transparent shadow`
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* Sidebar — paper info */}
          <div className="lg:col-span-1 space-y-4">

            {/* Paper info card */}
            <div className={`rounded-2xl border ${c.border} ${c.bg} p-4`}>
              <span className={`inline-block text-xs font-bold px-2 py-0.5 rounded-full ${c.badge} mb-3`}>
                {paper.year} Exam
              </span>
              <h2 className="font-black text-gray-900 text-base leading-snug mb-1">{paper.label}</h2>
              <p className="text-xs text-gray-500 italic mb-3">{paper.labelTelugu}</p>

              <div className="space-y-1.5 text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                  <span>{paper.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                  <span>{paper.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                  <span>{paper.subject}</span>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-white/60 flex gap-4 text-xs">
                <div className="text-center">
                  <div className="font-black text-gray-900 text-lg">{paper.totalQuestions}</div>
                  <div className="text-gray-500">Questions</div>
                </div>
                <div className="text-center">
                  <div className="font-black text-gray-900 text-lg">{paper.totalPages}</div>
                  <div className="text-gray-500">Pages</div>
                </div>
              </div>

              <div className="mt-3 bg-green-100 rounded-xl px-3 py-2 text-xs text-green-800">
                ✅ <strong>Green tick</strong> = Correct answer marked by TSPSC
              </div>
            </div>

            {/* Page navigation list */}
            <div className="bg-white rounded-2xl border border-gray-200 p-3">
              <p className="text-xs font-bold text-gray-600 mb-2 uppercase tracking-wide">Jump to Page</p>
              <div className="grid grid-cols-5 gap-1 max-h-48 overflow-y-auto">
                {Array.from({ length: paper.totalPages }, (_, i) => i + 1).map(p => (
                  <button
                    key={p}
                    onClick={() => setCurrentPage(p)}
                    className={`text-xs py-1.5 rounded-lg font-medium transition-all ${
                      p === currentPage
                        ? `${c.activePill} shadow-sm`
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl border border-gray-200 p-4 text-xs text-gray-600 leading-relaxed">
              <p className="font-semibold text-gray-800 mb-1">About this paper</p>
              <p>{paper.description}</p>
            </div>
          </div>

          {/* Main viewer */}
          <div className="lg:col-span-3 space-y-3">

            {/* Viewer toolbar */}
            <div className="bg-white rounded-2xl border border-gray-200 px-4 py-3 flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-40 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-sm font-bold text-gray-700">
                  Page <span className="text-blue-600">{currentPage}</span> / {paper.totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(p => Math.min(paper.totalPages, p + 1))}
                  disabled={currentPage === paper.totalPages}
                  className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-40 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Zoom:</span>
                <button
                  onClick={() => setZoom(z => Math.max(60, z - 10))}
                  className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <span className="text-xs font-bold w-10 text-center">{zoom}%</span>
                <button
                  onClick={() => setZoom(z => Math.min(200, z + 10))}
                  className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setZoom(100)}
                  className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* Page image */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="overflow-auto p-2" style={{ maxHeight: "80vh" }}>
                <div style={{ width: `${zoom}%`, minWidth: "300px" }}>
                  <img
                    src={imgSrc}
                    alt={`${paper.label} — Page ${currentPage}`}
                    className="w-full h-auto rounded-xl"
                    style={{ imageRendering: "high-quality" }}
                  />
                </div>
              </div>
            </div>

            {/* Prev / Next buttons */}
            <div className="flex justify-between gap-3">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-40 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" /> Previous Page
              </button>
              <button
                onClick={() => setCurrentPage(p => Math.min(paper.totalPages, p + 1))}
                disabled={currentPage === paper.totalPages}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold ${c.btn} disabled:opacity-40 transition-colors`}
              >
                Next Page <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
