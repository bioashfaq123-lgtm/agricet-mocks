"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { BookOpen, CheckCircle, ArrowLeft, Trophy } from "lucide-react";
import { getLiveStatus } from "@/lib/liveTest";
import { GRAND_TEST_LIVE } from "@/data/grandTestLive";

type Status = "before" | "live" | "ended";
const letter = (i: number) => String.fromCharCode(65 + i);

export default function AnswerKeyPage() {
  const [status, setStatus] = useState<Status | null>(null);
  useEffect(() => { setStatus(getLiveStatus()); }, []);

  if (status === null) {
    return <div className="min-h-screen flex items-center justify-center text-gray-400">Loading…</div>;
  }

  if (status !== "ended") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 max-w-md w-full text-center">
          <BookOpen className="w-12 h-12 mx-auto text-blue-400 mb-3" />
          <h1 className="text-xl font-black text-gray-900 mb-2">Answer key not released yet</h1>
          <p className="text-gray-500 text-sm leading-relaxed">
            The full answer key with explanations will be published here <span className="font-bold text-gray-700">after the
            test closes — 12 PM (noon) on 20 June</span>. This keeps the test fair for everyone still taking it.
          </p>
          <Link href="/dashboard" className="inline-flex items-center gap-2 mt-6 text-primary-600 font-semibold text-sm hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-800 to-blue-600 text-white">
        <div className="max-w-3xl mx-auto px-4 py-8 text-center">
          <p className="text-blue-200 font-bold text-xs tracking-widest mb-1">AGRICAREER ACADEMY</p>
          <h1 className="text-2xl sm:text-3xl font-black flex items-center justify-center gap-2">
            <BookOpen className="w-7 h-7 text-blue-200" /> Answer Key &amp; Explanations
          </h1>
          <p className="text-blue-100 text-sm mt-1">AGRICET Free Live Mock Test — {GRAND_TEST_LIVE.length} questions</p>
          <Link href="/ranking" className="inline-flex items-center gap-2 mt-4 bg-white/15 hover:bg-white/25 text-white text-sm font-bold px-4 py-2 rounded-xl">
            <Trophy className="w-4 h-4 text-amber-300" /> View Final Ranking
          </Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-6 space-y-4">
        {GRAND_TEST_LIVE.map(q => (
          <div key={q.id} className="bg-white rounded-2xl border border-gray-200 p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-green-100 text-green-700 font-black text-xs w-7 h-7 rounded-full flex items-center justify-center shrink-0">{q.qNo}</span>
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wide">{q.subject.replace(/-/g, " ")}</span>
            </div>
            <p className="font-semibold text-gray-900 text-sm leading-relaxed whitespace-pre-line mb-3">{q.question}</p>

            {q.matchTable && (
              <div className="overflow-x-auto mb-3">
                <table className="w-full text-xs border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50 text-gray-500">
                    <tr>{q.matchTable.headers.map((h, i) => <th key={i} className="text-left px-3 py-2 font-bold border-b border-gray-200">{h}</th>)}</tr>
                  </thead>
                  <tbody>
                    {q.matchTable.rows.map((row, ri) => (
                      <tr key={ri} className="border-b border-gray-100 last:border-0">
                        {row.map((c, ci) => <td key={ci} className="px-3 py-2 text-gray-700 align-top">{c}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <div className="space-y-1.5">
              {q.options.map((opt, i) => {
                const correct = i === q.correct;
                return (
                  <div key={i} className={`flex items-start gap-2 text-sm rounded-lg px-3 py-2 ${correct ? "bg-green-50 border border-green-300" : "bg-gray-50 border border-gray-100"}`}>
                    <span className={`font-bold ${correct ? "text-green-700" : "text-gray-500"}`}>{letter(i)}.</span>
                    <span className={correct ? "text-green-900 font-semibold" : "text-gray-700"}>{opt}</span>
                    {correct && <CheckCircle className="w-4 h-4 text-green-600 ml-auto shrink-0 mt-0.5" />}
                  </div>
                );
              })}
            </div>

            {q.explanation && (
              <div className="mt-3 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg px-4 py-3">
                <span className="text-xs font-bold text-blue-700">Explanation: </span>
                <span className="text-xs text-blue-900 leading-relaxed">{q.explanation}</span>
              </div>
            )}
          </div>
        ))}

        <div className="text-center pt-2 pb-8">
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-gray-400 text-sm hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
