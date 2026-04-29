"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Play, Lock, Clock, BookOpen, ChevronLeft, FileText, Star } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { PREVIOUS_YEAR_PAPERS } from "@/data/previousYearPapers";
import Navbar from "@/components/Navbar";

export default function PreviousYearsPage() {
  const { user, userData } = useAuth();
  const isPaid = userData?.isPaid ?? false;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-2">
          <Link href="/dashboard" className="text-gray-400 hover:text-gray-600"><ChevronLeft className="w-5 h-5" /></Link>
          <h1 className="text-2xl font-black text-gray-900">Previous Year Papers</h1>
        </div>
        <p className="text-gray-500 mb-8 ml-8">Practice with official AGRICET question papers to understand the real exam pattern</p>

        <div className="grid md:grid-cols-2 gap-6">
          {PREVIOUS_YEAR_PAPERS.map((paper) => (
            <div key={paper.year} className={`card p-6 ${!paper.available ? "opacity-60" : ""}`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="badge bg-primary-100 text-primary-700 font-bold text-base px-3 py-1">{paper.year}</span>
                    {paper.available && <span className="badge bg-green-100 text-green-700 text-xs">Available</span>}
                    {!paper.available && <span className="badge bg-gray-100 text-gray-500 text-xs">Coming soon</span>}
                  </div>
                  <h3 className="font-bold text-gray-900 mt-2 leading-snug">{paper.title}</h3>
                </div>
                <FileText className="w-8 h-8 text-primary-300 flex-shrink-0" />
              </div>

              <p className="text-gray-500 text-sm mb-4">{paper.description}</p>

              <div className="flex items-center gap-4 text-sm text-gray-500 mb-5">
                <span className="flex items-center gap-1"><BookOpen className="w-4 h-4" /> {paper.totalQuestions} Questions</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {paper.duration} minutes</span>
              </div>

              {paper.available ? (
                isPaid || !user ? (
                  <Link href={user ? `/test/previous-year/${paper.year}` : "/signup"}
                    className="w-full btn-primary text-center block flex items-center justify-center gap-2">
                    <Play className="w-4 h-4" /> {user ? "Start Practice" : "Sign up to Practice"}
                  </Link>
                ) : (
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2 bg-gray-100 text-gray-400 rounded-xl py-3 text-sm">
                      <Lock className="w-4 h-4" /> Requires Full Access
                    </div>
                    <Link href="/dashboard" className="text-primary-600 text-xs text-center block hover:underline">
                      Upgrade for ₹100 →
                    </Link>
                  </div>
                )
              ) : (
                <button disabled className="w-full bg-gray-100 text-gray-400 rounded-xl py-3 text-sm cursor-not-allowed">
                  Coming Soon
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Info box */}
        <div className="mt-8 card p-6 bg-blue-50 border border-blue-200">
          <div className="flex items-start gap-3">
            <Star className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-800 mb-1">Why practice previous year papers?</h3>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Understand the exact AGRICET question pattern and difficulty level</li>
                <li>• Identify frequently asked topics across subjects</li>
                <li>• Improve time management by practicing at exam speed</li>
                <li>• Build confidence by experiencing real exam questions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
