"use client";
import { useState } from "react";
import { Sparkles, Loader2, AlertCircle } from "lucide-react";

/**
 * AI Telugu Doubt-Solver button.
 *
 * Sits under a question's static explanation. On click it asks the AI to
 * generate a fresh, personalised explanation in Telugu — why the correct
 * option is right, and (when the student answered wrong) why their choice
 * was wrong. Works for every question, even the thousands that have no
 * pre-written Telugu translation.
 */
export default function ExplainButton({
  question,
  options,
  correctIndex,
  userIndex,
  explanation,
  subject,
  subjectId,
}: {
  question: string;
  options: string[];
  correctIndex: number;
  userIndex?: number | null;
  explanation?: string;
  subject?: string;
  subjectId?: string;
}) {
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const ask = async () => {
    if (loading) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question,
          options,
          correctIndex,
          userIndex: userIndex ?? null,
          explanation: explanation ?? "",
          subject: subject ?? "",
          subjectId: subjectId ?? "",
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data?.error ?? "Something went wrong. Please try again.");
      } else {
        setAnswer(data.answer as string);
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-3">
      {!answer && (
        <button
          onClick={ask}
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:from-purple-700 hover:to-indigo-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              తెలుగులో వివరణ సిద్ధమవుతోంది…
            </>
          ) : (
            <>
              <Sparkles className="h-4 w-4" />
              AI తెలుగు వివరణ · Explain in Telugu
            </>
          )}
        </button>
      )}

      {error && (
        <div className="mt-2 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
          <div className="flex-1">
            <span>{error}</span>
            <button
              onClick={ask}
              className="ml-2 font-semibold text-red-800 underline underline-offset-2"
            >
              Retry
            </button>
          </div>
        </div>
      )}

      {answer && (
        <div className="mt-2 rounded-xl border border-purple-200 bg-purple-50 p-4">
          <div className="mb-2 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-bold text-purple-700">
              AI తెలుగు వివరణ
            </span>
          </div>
          <p className="te-text whitespace-pre-line text-sm leading-relaxed text-purple-900">
            {answer}
          </p>
          <button
            onClick={() => {
              setAnswer(null);
              ask();
            }}
            disabled={loading}
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-purple-700 hover:text-purple-900 disabled:opacity-60"
          >
            <Loader2 className={`h-3.5 w-3.5 ${loading ? "animate-spin" : "hidden"}`} />
            మళ్ళీ అడగండి · Regenerate
          </button>
        </div>
      )}
    </div>
  );
}
