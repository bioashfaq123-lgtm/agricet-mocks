"use client";
import { useState } from "react";
import Link from "next/link";
import { Trophy, Search, ArrowLeft, BookOpen } from "lucide-react";
import { LIVE_RANKING } from "@/data/liveRanking";

export default function RankingPage() {
  const [q, setQ] = useState("");
  const rows = LIVE_RANKING;
  const filtered = q.trim()
    ? rows.filter(r => r.name.toLowerCase().includes(q.trim().toLowerCase()))
    : rows;
  const medal = (rank: number) => (rank === 1 ? "🥇" : rank === 2 ? "🥈" : rank === 3 ? "🥉" : null);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-green-800 to-green-600 text-white">
        <div className="max-w-3xl mx-auto px-4 py-8 text-center">
          <p className="text-green-200 font-bold text-xs tracking-widest mb-1">AGRICAREER ACADEMY</p>
          <h1 className="text-2xl sm:text-3xl font-black flex items-center justify-center gap-2">
            <Trophy className="w-7 h-7 text-amber-300" /> Final Ranking
          </h1>
          <p className="text-green-100 text-sm mt-1">AGRICET Free Live Mock Test — All-Telangana</p>
          <p className="text-green-200 text-xs mt-3">{rows.length} students participated</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-6">
        <div className="mb-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={q} onChange={e => setQ(e.target.value)}
              placeholder="Search your name…"
              className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-400 text-xs uppercase tracking-wide">
              <tr>
                <th className="text-center px-4 py-3 w-16">Rank</th>
                <th className="text-left px-4 py-3">Name</th>
                <th className="text-center px-4 py-3">Score</th>
                <th className="text-center px-4 py-3 hidden sm:table-cell">Correct</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map(r => (
                <tr key={r.rank} className={`hover:bg-gray-50/60 ${r.rank <= 3 ? "bg-amber-50/40" : ""}`}>
                  <td className="px-4 py-3 text-center font-black text-gray-700">{medal(r.rank) ?? r.rank}</td>
                  <td className="px-4 py-3 font-semibold text-gray-900">{r.name}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`font-bold px-2.5 py-1 rounded-full text-xs ${
                      r.score >= 70 ? "bg-green-100 text-green-700" : r.score >= 50 ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-700"
                    }`}>{r.score}%</span>
                  </td>
                  <td className="px-4 py-3 text-center text-gray-500 hidden sm:table-cell">{r.correct}/{r.total}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={4} className="px-4 py-10 text-center text-gray-400 text-sm">No name matches “{q}”.</td></tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-6">
          <Link href="/answer-key" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-6 py-3 rounded-xl shadow-sm transition-colors">
            <BookOpen className="w-4 h-4" /> View Full Answer Key &amp; Explanations
          </Link>
        </div>
        <div className="text-center mt-4">
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-gray-400 text-sm hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
