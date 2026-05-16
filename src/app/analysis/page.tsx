"use client";
import Link from "next/link";
import { TrendingUp, TrendingDown, Minus, AlertCircle, BookOpen, BarChart2, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";

// ── Subject data grouped by DA course code ────────────────────────────────────
// Raw question counts per year (total = 100 each year)
// Topics merged into their DA parent courses:
//   agronomy + meteorology + crop-physiology → DA-101/102/201
//   genetics + seed-technology              → DA-111
const SUBJECTS = [
  {
    codes: "DA-101, DA-102, DA-201",
    label: "Agronomy, Crop Production & Meteorology",
    short: "Agronomy",
    icon: "🌾",
    y2023: 10,  // agronomy(9) + meteorology(1)
    y2024: 22,  // agronomy(18) + meteorology(3) + crop-physiology(1)
    y2025: 18,  // agronomy(14) + meteorology(4)
  },
  {
    codes: "DA-121, DA-122",
    label: "Soil Science, Fertility & Water Conservation",
    short: "Soil Science",
    icon: "🌱",
    y2023: 16,
    y2024: 13,
    y2025: 10,
  },
  {
    codes: "DA-131, DA-132",
    label: "General Entomology & Crop Pest Management",
    short: "Entomology",
    icon: "🐛",
    y2023: 16,
    y2024: 8,
    y2025: 13,
  },
  {
    codes: "DA-281, DA-282",
    label: "Horticultural Crops & Forestry",
    short: "Horticulture",
    icon: "🌿",
    y2023: 9,
    y2024: 14,
    y2025: 13,
  },
  {
    codes: "DA-291",
    label: "Agricultural Extension & Rural Development",
    short: "Extension",
    icon: "📢",
    y2023: 9,
    y2024: 11,
    y2025: 11,
  },
  {
    codes: "DA-151",
    label: "Farm Power & Machinery",
    short: "Farm Machinery",
    icon: "🚜",
    y2023: 8,
    y2024: 7,
    y2025: 6,
  },
  {
    codes: "DA-252",
    label: "Survey, Levelling & Field Measurements",
    short: "Irrigation & Survey",
    icon: "💧",
    y2023: 8,
    y2024: 2,
    y2025: 6,
  },
  {
    codes: "DA-241",
    label: "Agricultural Economics",
    short: "Economics",
    icon: "💰",
    y2023: 6,
    y2024: 8,
    y2025: 6,
  },
  {
    codes: "DA-171",
    label: "Plant Pathology & Microbiology",
    short: "Plant Pathology",
    icon: "🍄",
    y2023: 7,
    y2024: 6,
    y2025: 5,
  },
  {
    codes: "DA-111",
    label: "Plant Breeding, Genetics & Seed Technology",
    short: "Seed Technology",
    icon: "🌻",
    y2023: 4,  // genetics(1) + seed-technology(3)
    y2024: 5,  // genetics(2) + seed-technology(3)
    y2025: 8,  // genetics(3) + seed-technology(5)
  },
  {
    codes: "DA-262",
    label: "Computer Applications in Agriculture",
    short: "Computers",
    icon: "💻",
    y2023: 4,
    y2024: 2,
    y2025: 2,
  },
  {
    codes: "DA-263",
    label: "Communication Skills in English",
    short: "English",
    icon: "📝",
    y2023: 3,
    y2024: 2,
    y2025: 2,
  },
];

const YEARS = [2023, 2024, 2025];

function avg(s: typeof SUBJECTS[0]) {
  return +((s.y2023 + s.y2024 + s.y2025) / 3).toFixed(1);
}

function trend(s: typeof SUBJECTS[0]) {
  const d = s.y2025 - s.y2023;
  if (d >= 3) return "up";
  if (d <= -3) return "down";
  return "stable";
}

function cellBg(n: number) {
  if (n >= 13) return "bg-[#1e3a5f] text-white font-black";
  if (n >= 8)  return "bg-[#1d4ed8] text-white font-bold";
  if (n >= 4)  return "bg-[#bfdbfe] text-[#1e3a5f] font-semibold border border-[#93c5fd]";
  return "bg-[#f1f5f9] text-[#64748b] border border-[#e2e8f0]";
}

function barCol(n: number) {
  if (n >= 13) return "bg-[#1e3a5f]";
  if (n >= 8)  return "bg-[#1d4ed8]";
  if (n >= 4)  return "bg-[#60a5fa]";
  return "bg-[#cbd5e1]";
}

const sorted = [...SUBJECTS].sort((a, b) => avg(b) - avg(a));
const maxQ   = 22;  // highest single-year count (Agronomy 2024)

export default function AnalysisPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 py-8">

        {/* Breadcrumb + Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
            <Link href="/previous-years" className="hover:text-primary-600">Previous Papers</Link>
            <ChevronRight className="w-3 h-3" />
            <span>Subject Weightage</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-gray-900">
            📊 Subject-wise Question Analysis
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Number of questions from each DA subject · AGRICET 2023, 2024 &amp; 2025 · 100 Qs per paper
          </p>
        </div>

        {/* Summary totals */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { year: 2023, bg: "from-[#334155] to-[#0f172a]" },
            { year: 2024, bg: "from-[#1d4ed8] to-[#1e3a5f]" },
            { year: 2025, bg: "from-[#1e3a5f] to-[#0f172a]" },
          ].map(({ year, bg }) => (
            <div key={year} className={`rounded-2xl bg-gradient-to-br ${bg} text-white p-4 text-center`}>
              <p className="text-sm font-medium opacity-80">AGRICET {year}</p>
              <p className="text-3xl font-black mt-1">100</p>
              <p className="text-xs opacity-70 mt-0.5">Total Questions</p>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-3 mb-4 text-xs font-semibold">
          <span className="text-gray-500 mr-1">Weightage:</span>
          {[
            { label: "13+ Qs — Very High", cls: "bg-[#1e3a5f] text-white" },
            { label: "8–12 Qs — High",     cls: "bg-[#1d4ed8] text-white" },
            { label: "4–7 Qs — Medium",    cls: "bg-[#bfdbfe] text-[#1e3a5f] border border-[#93c5fd]" },
            { label: "1–3 Qs — Low",       cls: "bg-[#f1f5f9] text-[#64748b] border border-[#e2e8f0]" },
          ].map(l => (
            <span key={l.label} className={`px-2 py-0.5 rounded-lg ${l.cls}`}>{l.label}</span>
          ))}
        </div>

        {/* ── DESKTOP TABLE ── */}
        <div className="hidden md:block card overflow-hidden mb-8 shadow">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-900 text-white text-xs uppercase tracking-wider">
                <th className="text-left px-4 py-3">DA Course Code</th>
                <th className="text-left px-4 py-3">Subject</th>
                <th className="text-center px-3 py-3 w-20">2023<br/><span className="font-normal opacity-60 normal-case">(Qs)</span></th>
                <th className="text-center px-3 py-3 w-20">2024<br/><span className="font-normal opacity-60 normal-case">(Qs)</span></th>
                <th className="text-center px-3 py-3 w-20">2025<br/><span className="font-normal opacity-60 normal-case">(Qs)</span></th>
                <th className="text-center px-3 py-3 w-20">Avg<br/><span className="font-normal opacity-60 normal-case">(Qs)</span></th>
                <th className="text-center px-3 py-3 w-20">Trend</th>
                <th className="px-4 py-3 w-36">Year-wise Bar</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((s, i) => {
                const a = avg(s);
                const t = trend(s);
                return (
                  <tr
                    key={s.codes}
                    className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-primary-50 transition-colors`}
                  >
                    {/* Course codes */}
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-1">
                        {s.codes.split(", ").map(c => (
                          <span key={c} className="inline-block bg-[#1e3a5f] text-white rounded-md px-2 py-0.5 text-xs font-bold tracking-wide">
                            {c}
                          </span>
                        ))}
                      </div>
                    </td>

                    {/* Subject name */}
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{s.icon}</span>
                        <span className="font-semibold text-gray-800 leading-tight">{s.label}</span>
                      </div>
                    </td>

                    {/* Year counts */}
                    {[s.y2023, s.y2024, s.y2025].map((v, j) => (
                      <td key={j} className="text-center px-3 py-3">
                        <span className={`inline-block rounded-lg px-2 py-1 text-sm min-w-[2.5rem] ${cellBg(v)}`}>
                          {v}
                        </span>
                      </td>
                    ))}

                    {/* Avg */}
                    <td className="text-center px-3 py-3">
                      <span className="font-black text-gray-900 text-base">{a}</span>
                    </td>

                    {/* Trend */}
                    <td className="text-center px-3 py-3">
                      {t === "up"     && <span className="inline-flex items-center gap-1 text-[#166534] font-bold text-xs bg-[#dcfce7] border border-[#86efac] px-2 py-1 rounded-full"><TrendingUp className="w-3 h-3"/>Rising</span>}
                      {t === "down"   && <span className="inline-flex items-center gap-1 text-[#1e3a5f] font-bold text-xs bg-[#dbeafe] border border-[#93c5fd] px-2 py-1 rounded-full"><TrendingDown className="w-3 h-3"/>Falling</span>}
                      {t === "stable" && <span className="inline-flex items-center gap-1 text-[#475569] font-bold text-xs bg-[#f1f5f9] border border-[#e2e8f0] px-2 py-1 rounded-full"><Minus className="w-3 h-3"/>Stable</span>}
                    </td>

                    {/* Mini bar chart */}
                    <td className="px-4 py-3">
                      <div className="flex gap-1.5 items-end h-8">
                        {[s.y2023, s.y2024, s.y2025].map((v, j) => (
                          <div key={j} className="flex-1 flex flex-col items-center gap-1">
                            <span className="text-gray-400" style={{ fontSize: "9px" }}>{v}</span>
                            <div
                              className={`w-full rounded-sm ${barCol(v)}`}
                              style={{ height: `${Math.max(3, (v / maxQ) * 22)}px` }}
                            />
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-1.5 mt-0.5">
                        {["23","24","25"].map(y => (
                          <p key={y} className="flex-1 text-center text-gray-300" style={{ fontSize: "8px" }}>{y}</p>
                        ))}
                      </div>
                    </td>
                  </tr>
                );
              })}

              {/* Totals row */}
              <tr className="bg-gray-900 text-white font-black text-sm">
                <td className="px-4 py-3" colSpan={2}>TOTAL</td>
                <td className="text-center px-3 py-3">100</td>
                <td className="text-center px-3 py-3">100</td>
                <td className="text-center px-3 py-3">100</td>
                <td className="text-center px-3 py-3">100</td>
                <td colSpan={2} />
              </tr>
            </tbody>
          </table>
        </div>

        {/* ── MOBILE CARDS ── */}
        <div className="md:hidden space-y-3 mb-8">
          {sorted.map((s) => {
            const a = avg(s);
            const t = trend(s);
            return (
              <div key={s.codes} className="card p-4">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-2 flex-1 min-w-0">
                    <span className="text-xl mt-0.5">{s.icon}</span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap gap-1 mb-1">
                        {s.codes.split(", ").map(c => (
                          <span key={c} className="bg-[#1e3a5f] text-white rounded px-1.5 py-0.5 text-xs font-bold tracking-wide">
                            {c}
                          </span>
                        ))}
                      </div>
                      <p className="font-bold text-gray-900 text-sm leading-snug">{s.label}</p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 ml-2">
                    <p className="font-black text-gray-900 text-lg leading-none">{a}</p>
                    <p className="text-xs text-gray-400">avg/yr</p>
                    <div className="mt-1">
                      {t === "up"     && <span className="text-[#166534] text-xs font-bold flex items-center gap-0.5 justify-end"><TrendingUp className="w-3 h-3"/>Rising</span>}
                      {t === "down"   && <span className="text-[#1d4ed8] text-xs font-bold flex items-center gap-0.5 justify-end"><TrendingDown className="w-3 h-3"/>Falling</span>}
                      {t === "stable" && <span className="text-[#475569] text-xs font-bold flex items-center gap-0.5 justify-end"><Minus className="w-3 h-3"/>Stable</span>}
                    </div>
                  </div>
                </div>

                {/* Year columns */}
                <div className="grid grid-cols-3 gap-2">
                  {([["2023", s.y2023], ["2024", s.y2024], ["2025", s.y2025]] as [string, number][]).map(([yr, v]) => (
                    <div key={yr} className="text-center">
                      <p className="text-xs text-gray-400 mb-1 font-medium">{yr}</p>
                      <div className={`rounded-xl py-2 text-lg font-black ${cellBg(v)}`}>{v}</div>
                      <p className="text-xs text-gray-400 mt-0.5">questions</p>
                      <div className="mt-1 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                        <div className={`h-full ${barCol(v)}`} style={{ width: `${Math.min(100, (v / maxQ) * 100)}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Strategy Box */}
        <div className="rounded-2xl border border-[#93c5fd] bg-[#eff6ff] p-5 mb-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#1d4ed8] flex-shrink-0 mt-0.5" />
            <div className="w-full">
              <h3 className="font-black text-[#0f172a] mb-3">📌 Smart Study Strategy — based on this data</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 border border-[#bfdbfe]">
                  <p className="font-bold text-[#1e3a5f] mb-2 text-sm">🔵 Must-Study Subjects (~55–60 Qs)</p>
                  <ul className="space-y-1 text-xs text-gray-700">
                    <li className="flex justify-between"><span>🌾 DA-101/102/201 Agronomy</span><strong>avg 16.7 Qs</strong></li>
                    <li className="flex justify-between"><span>🌱 DA-121/122 Soil Science</span><strong>avg 13 Qs</strong></li>
                    <li className="flex justify-between"><span>🐛 DA-131/132 Entomology</span><strong>avg 12.3 Qs</strong></li>
                    <li className="flex justify-between"><span>🌿 DA-281/282 Horticulture</span><strong>avg 12 Qs</strong></li>
                    <li className="flex justify-between"><span>📢 DA-291 Extension</span><strong>avg 10.3 Qs</strong></li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-4 border border-[#bfdbfe]">
                  <p className="font-bold text-[#1d4ed8] mb-2 text-sm">🔷 High Priority Subjects (~25–30 Qs)</p>
                  <ul className="space-y-1 text-xs text-gray-700">
                    <li className="flex justify-between"><span>🚜 DA-151 Farm Machinery</span><strong>avg 7 Qs</strong></li>
                    <li className="flex justify-between"><span>💰 DA-241 Economics</span><strong>avg 6.7 Qs</strong></li>
                    <li className="flex justify-between"><span>💧 DA-252 Survey & Irrigation</span><strong>avg 5.3 Qs</strong></li>
                    <li className="flex justify-between"><span>🍄 DA-171 Plant Pathology</span><strong>avg 6 Qs</strong></li>
                    <li className="flex justify-between"><span>🌻 DA-111 Plant Breeding</span><strong>avg 5.7 Qs</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/previous-years"
            className="flex-1 flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold px-5 py-3 rounded-xl transition-all hover:scale-105 shadow">
            <BookOpen className="w-4 h-4" /> Practice PYQ Papers
          </Link>
          <Link href="/dashboard"
            className="flex-1 flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold px-5 py-3 rounded-xl transition-all hover:scale-105 shadow">
            <BarChart2 className="w-4 h-4" /> Go to Dashboard
          </Link>
        </div>

      </div>
    </div>
  );
}
