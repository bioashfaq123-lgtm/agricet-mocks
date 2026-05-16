"use client";
import Link from "next/link";
import { TrendingUp, TrendingDown, Minus, AlertCircle, BookOpen, BarChart2, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";

// ── Exact data extracted from all 3 PYQ papers ───────────────────────────────
const SUBJECT_DATA = [
  { key: "agronomy",            label: "Agronomy",                       code: "DA-101/102/201", y2023: 9,  y2024: 18, y2025: 14, icon: "🌾" },
  { key: "soil-science",        label: "Soil Science & Fertility",        code: "DA-121/122",     y2023: 16, y2024: 13, y2025: 10, icon: "🌱" },
  { key: "entomology",          label: "Entomology & Pest Management",    code: "DA-131/132",     y2023: 16, y2024: 8,  y2025: 13, icon: "🐛" },
  { key: "horticulture",        label: "Horticulture & Forestry",         code: "DA-281/282",     y2023: 9,  y2024: 14, y2025: 13, icon: "🌿" },
  { key: "extension",           label: "Agricultural Extension",          code: "DA-291",         y2023: 9,  y2024: 11, y2025: 11, icon: "📢" },
  { key: "farm-machinery",      label: "Farm Power & Machinery",          code: "DA-151",         y2023: 8,  y2024: 7,  y2025: 6,  icon: "🚜" },
  { key: "irrigation",          label: "Irrigation & Land Survey",        code: "DA-252",         y2023: 8,  y2024: 2,  y2025: 6,  icon: "💧" },
  { key: "plant-pathology",     label: "Plant Pathology & Microbiology",  code: "DA-171",         y2023: 7,  y2024: 6,  y2025: 5,  icon: "🍄" },
  { key: "economics",           label: "Agricultural Economics",          code: "DA-241",         y2023: 6,  y2024: 8,  y2025: 6,  icon: "💰" },
  { key: "seed-technology",     label: "Plant Breeding & Seed Tech.",     code: "DA-111",         y2023: 3,  y2024: 3,  y2025: 5,  icon: "🌻" },
  { key: "meteorology",         label: "Agro-Meteorology",                code: "DA-101",         y2023: 1,  y2024: 3,  y2025: 4,  icon: "⛅" },
  { key: "genetics",            label: "Genetics",                        code: "DA-111",         y2023: 1,  y2024: 2,  y2025: 3,  icon: "🧬" },
  { key: "computer-applications",label: "Computer Applications",          code: "DA-262",         y2023: 4,  y2024: 2,  y2025: 2,  icon: "💻" },
  { key: "english-communication",label: "English Communication",          code: "DA-263",         y2023: 3,  y2024: 2,  y2025: 2,  icon: "📝" },
  { key: "crop-physiology",     label: "Crop Physiology",                 code: "DA-201",         y2023: 0,  y2024: 1,  y2025: 0,  icon: "🔬" },
];

function avg(s: typeof SUBJECT_DATA[0]) {
  return Math.round(((s.y2023 + s.y2024 + s.y2025) / 3) * 10) / 10;
}

function trend(s: typeof SUBJECT_DATA[0]) {
  const delta = s.y2025 - s.y2023;
  if (delta >= 3)  return "up";
  if (delta <= -3) return "down";
  return "stable";
}

function weightageColor(count: number) {
  if (count >= 13) return "bg-red-100 text-red-700 font-black";
  if (count >= 8)  return "bg-orange-100 text-orange-700 font-bold";
  if (count >= 4)  return "bg-yellow-100 text-yellow-700 font-semibold";
  return "bg-gray-100 text-gray-500";
}

function barColor(count: number) {
  if (count >= 13) return "bg-red-500";
  if (count >= 8)  return "bg-orange-400";
  if (count >= 4)  return "bg-yellow-400";
  return "bg-gray-300";
}

const sorted = [...SUBJECT_DATA].sort((a, b) => avg(b) - avg(a));

export default function AnalysisPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 py-8">

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <Link href="/previous-years" className="hover:text-primary-600">Previous Papers</Link>
            <ChevronRight className="w-3 h-3" />
            <span>Subject Weightage Analysis</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-gray-900">📊 Subject Weightage Analysis</h1>
          <p className="text-gray-500 mt-1">
            Based on official AGRICET papers — 2023, 2024 &amp; 2025 · 100 questions each year
          </p>
        </div>

        {/* Key Insight Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Highest Weightage",  value: "Agronomy",        sub: "Avg 13.7 Qs/year",  color: "red",    icon: "🌾" },
            { label: "Most Consistent",    value: "Extension",       sub: "9–11 Qs every year", color: "green",  icon: "📢" },
            { label: "Rising Trend ↑",     value: "Seed Technology", sub: "3 → 3 → 5 Qs",      color: "blue",   icon: "🌻" },
            { label: "Falling Trend ↓",    value: "Soil Science",    sub: "16 → 13 → 10 Qs",   color: "orange", icon: "🌱" },
          ].map((c) => (
            <div key={c.label} className="card p-4 border-l-4 border-primary-500">
              <div className="text-2xl mb-1">{c.icon}</div>
              <p className="text-xs text-gray-500 font-medium">{c.label}</p>
              <p className="font-black text-gray-900 text-sm leading-tight">{c.value}</p>
              <p className="text-xs text-gray-400 mt-0.5">{c.sub}</p>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-3 mb-4 text-xs font-semibold">
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-red-500 inline-block"/> High (13+ Qs)</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-orange-400 inline-block"/> Medium (8–12 Qs)</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"/> Low (4–7 Qs)</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-gray-300 inline-block"/> Minimal (1–3 Qs)</span>
          <span className="flex items-center gap-1.5 ml-auto text-green-600"><TrendingUp className="w-3 h-3"/> Rising &nbsp;</span>
          <span className="flex items-center gap-1.5 text-red-500"><TrendingDown className="w-3 h-3"/> Falling &nbsp;</span>
          <span className="flex items-center gap-1.5 text-gray-400"><Minus className="w-3 h-3"/> Stable</span>
        </div>

        {/* Main Table — desktop */}
        <div className="card overflow-hidden mb-8 hidden md:block">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="text-left px-4 py-3 font-bold">Subject</th>
                <th className="text-center px-3 py-3 font-bold w-16">2023</th>
                <th className="text-center px-3 py-3 font-bold w-16">2024</th>
                <th className="text-center px-3 py-3 font-bold w-16">2025</th>
                <th className="text-center px-3 py-3 font-bold w-20">Avg</th>
                <th className="text-center px-3 py-3 font-bold w-20">Trend</th>
                <th className="px-4 py-3 font-bold w-40">Visual</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((s, i) => {
                const a = avg(s);
                const t = trend(s);
                return (
                  <tr key={s.key} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-primary-50 transition-colors`}>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{s.icon}</span>
                        <div>
                          <p className="font-semibold text-gray-900 leading-tight">{s.label}</p>
                          <p className="text-xs text-gray-400">{s.code}</p>
                        </div>
                      </div>
                    </td>
                    {[s.y2023, s.y2024, s.y2025].map((v, j) => (
                      <td key={j} className="text-center px-3 py-3">
                        <span className={`inline-block px-2 py-0.5 rounded-lg text-xs ${weightageColor(v)}`}>
                          {v}%
                        </span>
                      </td>
                    ))}
                    <td className="text-center px-3 py-3">
                      <span className="font-black text-gray-900">{a}%</span>
                    </td>
                    <td className="text-center px-3 py-3">
                      {t === "up"     && <span className="inline-flex items-center gap-1 text-green-600 font-bold text-xs"><TrendingUp className="w-3.5 h-3.5"/> Rising</span>}
                      {t === "down"   && <span className="inline-flex items-center gap-1 text-red-500 font-bold text-xs"><TrendingDown className="w-3.5 h-3.5"/> Falling</span>}
                      {t === "stable" && <span className="inline-flex items-center gap-1 text-gray-400 font-bold text-xs"><Minus className="w-3.5 h-3.5"/> Stable</span>}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-1 items-end h-6">
                        {[s.y2023, s.y2024, s.y2025].map((v, j) => (
                          <div key={j} className="flex-1 flex flex-col items-center gap-0.5">
                            <div
                              className={`w-full rounded-sm ${barColor(v)}`}
                              style={{ height: `${Math.max(2, v * 1.2)}px` }}
                            />
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-1 mt-0.5">
                        <p className="flex-1 text-center text-gray-300" style={{fontSize:"8px"}}>23</p>
                        <p className="flex-1 text-center text-gray-300" style={{fontSize:"8px"}}>24</p>
                        <p className="flex-1 text-center text-gray-300" style={{fontSize:"8px"}}>25</p>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="space-y-3 md:hidden mb-8">
          {sorted.map((s) => {
            const a = avg(s);
            const t = trend(s);
            return (
              <div key={s.key} className="card p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{s.icon}</span>
                    <div>
                      <p className="font-bold text-gray-900 text-sm leading-tight">{s.label}</p>
                      <p className="text-xs text-gray-400">{s.code}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-black text-gray-900">Avg {a}%</p>
                    {t === "up"     && <span className="text-green-600 text-xs font-bold flex items-center gap-0.5 justify-end"><TrendingUp className="w-3 h-3"/> Rising</span>}
                    {t === "down"   && <span className="text-red-500 text-xs font-bold flex items-center gap-0.5 justify-end"><TrendingDown className="w-3 h-3"/> Falling</span>}
                    {t === "stable" && <span className="text-gray-400 text-xs font-bold flex items-center gap-0.5 justify-end"><Minus className="w-3 h-3"/> Stable</span>}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[["2023", s.y2023], ["2024", s.y2024], ["2025", s.y2025]].map(([yr, v]) => (
                    <div key={yr} className="text-center">
                      <p className="text-xs text-gray-400 mb-1">{yr}</p>
                      <div className={`rounded-lg py-1 text-xs ${weightageColor(v as number)}`}>{v}%</div>
                      <div className="mt-1 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                        <div className={`h-full ${barColor(v as number)}`} style={{ width: `${Math.min(100, (v as number) * 5)}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Study Strategy Box */}
        <div className="card p-6 border-l-4 border-red-500 bg-red-50 mb-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-black text-gray-900 mb-2">📌 Smart Study Strategy based on this analysis</h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                <div>
                  <p className="font-bold text-red-700 mb-1">🔴 Must-Study (30–40 Qs expected)</p>
                  <ul className="space-y-0.5 text-xs">
                    <li>• <strong>Agronomy</strong> — avg 13.7% — highest weightage</li>
                    <li>• <strong>Soil Science</strong> — avg 13% — always high</li>
                    <li>• <strong>Entomology</strong> — avg 12.3% — very consistent</li>
                    <li>• <strong>Horticulture</strong> — avg 12% — rising trend</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-orange-600 mb-1">🟠 High Priority (20–25 Qs expected)</p>
                  <ul className="space-y-0.5 text-xs">
                    <li>• <strong>Extension</strong> — avg 10.3% — very consistent</li>
                    <li>• <strong>Farm Machinery</strong> — avg 7%</li>
                    <li>• <strong>Economics</strong> — avg 6.7%</li>
                    <li>• <strong>Plant Pathology</strong> — avg 6%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/previous-years"
            className="flex-1 flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold px-5 py-3 rounded-xl transition-all hover:scale-105">
            <BookOpen className="w-4 h-4" /> Practice PYQ Papers
          </Link>
          <Link href="/dashboard"
            className="flex-1 flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold px-5 py-3 rounded-xl transition-all hover:scale-105">
            <BarChart2 className="w-4 h-4" /> Go to Dashboard
          </Link>
        </div>

      </div>
    </div>
  );
}
