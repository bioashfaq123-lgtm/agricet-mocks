"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Trophy, Search, ArrowLeft, BookOpen } from "lucide-react";
import { getLiveStatus } from "@/lib/liveTest";

interface Row { rank: number; name: string; score: number; correct: number; wrong: number; total: number; }
type Status = "before" | "live" | "ended";

export default function RankingPage() {
  const [status, setStatus] = useState<Status | null>(null);
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");

  useEffect(() => { setStatus(getLiveStatus()); }, []);
  useEffect(() => {
    if (status === null) return;
    if (status !== "ended") { setLoading(false); return; }
    fetch("/api/live-ranking")
      .then(r => r.json())
      .then(j => { setRows(j.ranking || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, [status]);

  if (status === null) {
    return <div className="min-h-screen flex items-center justify-center text-gray-400">Loading…</div>;
  }

  if (status !== "ended") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 max-w-md w-full text-center">
          <Trophy className="w-12 h-12 mx-auto text-amber-400 mb-3" />
          <h1 className="text-xl font-black text-gray-900 mb-2">Ranking not published yet</h1>
          <p className="text-gray-500 text-sm leading-relaxed">
            The overall All-Telangana ranking will be published here <span className="font-bold text-gray-700">after the test
            closes — 12 PM (noon) on 20 June</span>. Please check back then.
          </p>
          <Link href="/dashboard" className="inline-flex items-center gap-2 mt-6 text-primary-600 font-semibold text-sm hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

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
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={q} onChange={e => setQ(e.target.value)}
              placeholder="Search your name…"
              className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
            />
          </div>
          <Link href="/answer-key" className="inline-flex items-center justify-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 text-sm font-bold px-4 py-2.5 rounded-xl whitespace-nowrap">
            <BookOpen className="w-4 h-4" /> View Answer Key
          </Link>
        </div>

        {loading ? (
          <div className="py-16 text-center text-gray-400 text-sm">Loading ranking…</div>
        ) : rows.length === 0 ? (
          <div className="py-16 text-center text-gray-400 text-sm">No attempts recorded.</div>
        ) : (
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
        )}

        <div className="text-center mt-6">
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-gray-400 text-sm hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
