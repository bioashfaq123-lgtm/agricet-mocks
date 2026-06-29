"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { BookOpen, CheckCircle, ArrowLeft, Trophy, Lock } from "lucide-react";
import { GRAND_TEST_13 } from "@/data/grandTest13";
import { getTe } from "@/data/translations";
import { getLiveStatus } from "@/lib/liveTest";

const letter = (i: number) => String.fromCharCode(65 + i);

export default function AnswerKeyPage() {
  // Default LOCKED; reveal only after the client confirms the live window has
  // ended — so the answer key can never leak before/during the exam.
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(getLiveStatus() === "ended"); }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-800 to-blue-600 text-white">
        <div className="max-w-3xl mx-auto px-4 py-8 text-center">
          <p className="text-blue-200 font-bold text-xs tracking-widest mb-1">NALANDA STUDY CIRCLE, JAGTIAL</p>
          <h1 className="text-2xl sm:text-3xl font-black flex items-center justify-center gap-2">
            <BookOpen className="w-7 h-7 text-blue-200" /> Answer Key &amp; Explanations
          </h1>
          <p className="text-blue-100 text-sm mt-1">FREE Live AGRICET Mock Test (28 June 2026) — {GRAND_TEST_13.length} questions</p>
          {open && (
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              <Link href="/ranking" className="inline-flex items-center gap-2 bg-amber-400 text-gray-900 text-sm font-black px-4 py-2 rounded-xl hover:bg-amber-300">
                <Trophy className="w-4 h-4" /> Overall Ranking
              </Link>
              <Link href="/grand-tests/gtlive" className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white text-sm font-bold px-4 py-2 rounded-xl">
                Practise this test
              </Link>
            </div>
          )}
        </div>
      </div>

      {!open ? (
        <div className="max-w-md mx-auto px-4 py-16 text-center">
          <Lock className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h2 className="text-lg font-black text-gray-800 mb-2">Available after the test closes</h2>
          <p className="text-gray-500 text-sm mb-6">
            The full answer key with explanations (in English &amp; Telugu) will be published here after the
            FREE Live Mock Test window ends — <b>12 PM (noon) on 29 June 2026</b>.
          </p>
          <Link href="/grand-tests" className="btn-primary inline-block px-6 py-2.5 text-sm">← Back to Grand Tests</Link>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto px-4 py-6 space-y-4">
          {GRAND_TEST_13.map(q => {
            const te = getTe(q.id);
            return (
              <div key={q.id} className="bg-white rounded-2xl border border-gray-200 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-green-100 text-green-700 font-black text-xs w-7 h-7 rounded-full flex items-center justify-center shrink-0">{q.qNo}</span>
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wide">{q.subject.replace(/-/g, " ")}</span>
                </div>
                <p className="font-semibold text-gray-900 text-sm leading-relaxed whitespace-pre-line">{q.question}</p>
                {te?.q && <p className="te-text text-sm leading-relaxed mb-3 mt-1">{te.q}</p>}

                {q.matchTable && (
                  <div className="overflow-x-auto mb-3 mt-2">
                    <table className="w-full text-xs border border-gray-200 rounded-lg">
                      <thead className="bg-gray-50 text-gray-500">
                        <tr>{q.matchTable.headers.map((h, i) => (
                          <th key={i} className="text-left px-3 py-2 font-bold border-b border-gray-200">
                            {h}
                            {te?.mt?.headers?.[i] && <span className="te-text block font-semibold">{te.mt.headers[i]}</span>}
                          </th>
                        ))}</tr>
                      </thead>
                      <tbody>
                        {q.matchTable.rows.map((row, ri) => (
                          <tr key={ri} className="border-b border-gray-100 last:border-0">
                            {row.map((c, ci) => (
                              <td key={ci} className="px-3 py-2 text-gray-700 align-top">
                                {c}
                                {te?.mt?.rows?.[ri]?.[ci] && <span className="te-text block">{te.mt.rows[ri][ci]}</span>}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                <div className="space-y-1.5 mt-2">
                  {q.options.map((opt, i) => {
                    const correct = i === q.correct;
                    return (
                      <div key={i} className={`flex items-start gap-2 text-sm rounded-lg px-3 py-2 ${correct ? "bg-green-50 border border-green-300" : "bg-gray-50 border border-gray-100"}`}>
                        <span className={`font-bold ${correct ? "text-green-700" : "text-gray-500"}`}>{letter(i)}.</span>
                        <span className={correct ? "text-green-900 font-semibold" : "text-gray-700"}>
                          {opt}
                          {te?.o?.[i] && <span className="te-text block">{te.o[i]}</span>}
                        </span>
                        {correct && <CheckCircle className="w-4 h-4 text-green-600 ml-auto shrink-0 mt-0.5" />}
                      </div>
                    );
                  })}
                </div>

                {q.explanation && (
                  <div className="mt-3 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg px-4 py-3">
                    <span className="text-xs font-bold text-blue-700">Explanation: </span>
                    <span className="text-xs text-blue-900 leading-relaxed">{q.explanation}</span>
                    {te?.e && <span className="te-text block text-xs mt-1">{te.e}</span>}
                  </div>
                )}
              </div>
            );
          })}

          <div className="text-center pt-2 pb-8">
            <Link href="/grand-tests" className="inline-flex items-center gap-2 text-gray-400 text-sm hover:underline">
              <ArrowLeft className="w-4 h-4" /> Back to Grand Tests
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
