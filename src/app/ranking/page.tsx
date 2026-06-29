"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Trophy, ArrowLeft, BookOpen, Lock } from "lucide-react";

interface Row { rank: number; name: string; score: number; correct: number; total: number; }

export default function RankingPage() {
  const [open, setOpen] = useState<boolean | null>(null);
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/live-ranking", { cache: "no-store" });
        const j = await res.json();
        setOpen(!!j.open);
        setRows(Array.isArray(j.docs) ? j.docs : []);
      } catch {
        setOpen(true); setRows([]);
      } finally { setLoading(false); }
    })();
  }, []);

  const medal = (r: number) => r === 1 ? "🥇" : r === 2 ? "🥈" : r === 3 ? "🥉" : "";

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-amber-600 to-yellow-700 text-white">
        <div className="max-w-3xl mx-auto px-4 py-8 text-center">
          <p className="text-amber-100 font-bold text-xs tracking-widest mb-1">NALANDA STUDY CIRCLE, JAGTIAL</p>
          <h1 className="text-2xl sm:text-3xl font-black flex items-center justify-center gap-2">
            <Trophy className="w-7 h-7 text-white" /> Overall Ranking
          </h1>
          <p className="text-amber-100 text-sm mt-1">FREE Live AGRICET Mock Test — 28 June 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-6">
        {loading ? (
          <div className="py-20 text-center">
            <div className="animate-spin w-9 h-9 border-4 border-amber-500 border-t-transparent rounded-full mx-auto" />
          </div>
        ) : open === false ? (
          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
            <Lock className="w-11 h-11 text-gray-300 mx-auto mb-3" />
            <h2 className="text-lg font-black text-gray-800 mb-2">Ranking will be published after the test closes</h2>
            <p className="text-gray-500 text-sm mb-6">
              The overall All-Telangana ranking will appear here after the FREE Live Mock Test window ends —
              <b> 12 PM (noon) on 29 June 2026</b>.
            </p>
            <Link href="/grand-tests" className="btn-primary inline-block px-6 py-2.5 text-sm">← Back to Grand Tests</Link>
          </div>
        ) : rows.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
            <Trophy className="w-11 h-11 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500 text-sm">The ranking will appear here shortly.</p>
          </div>
        ) : (
          <>
            <p className="text-center text-gray-500 text-sm mb-4">{rows.length} students ranked · sorted by score</p>
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wide">
                  <tr>
                    <th className="text-center px-4 py-3 w-16">Rank</th>
                    <th className="text-left px-4 py-3">Student</th>
                    <th className="text-center px-4 py-3 w-24">Score</th>
                    <th className="text-center px-4 py-3 w-24 hidden sm:table-cell">Correct</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {rows.map(r => (
                    <tr key={r.rank} className={r.rank <= 3 ? "bg-amber-50/50" : "hover:bg-gray-50/60"}>
                      <td className="px-4 py-2.5 text-center font-black text-gray-700">{medal(r.rank)} {r.rank}</td>
                      <td className="px-4 py-2.5 font-semibold text-gray-900">{r.name}</td>
                      <td className="px-4 py-2.5 text-center">
                        <span className={`font-bold px-2.5 py-1 rounded-full text-xs ${
                          r.score >= 70 ? "bg-green-100 text-green-700" : r.score >= 50 ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-700"
                        }`}>{r.score}%</span>
                      </td>
                      <td className="px-4 py-2.5 text-center text-gray-500 hidden sm:table-cell">{r.correct}/{r.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        <div className="flex flex-wrap gap-2 justify-center pt-6 pb-8">
          <Link href="/my-result" className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-4 py-2 rounded-lg"><Trophy className="w-4 h-4" /> My Result</Link>
          <Link href="/answer-key" className="inline-flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-bold px-4 py-2 rounded-lg"><BookOpen className="w-4 h-4" /> Answer Key</Link>
          <Link href="/grand-tests" className="inline-flex items-center gap-1.5 text-gray-400 text-sm hover:underline px-4 py-2"><ArrowLeft className="w-4 h-4" /> Grand Tests</Link>
        </div>
      </div>
    </div>
  );
}
