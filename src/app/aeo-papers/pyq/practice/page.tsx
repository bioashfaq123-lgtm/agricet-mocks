"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ChevronLeft, ChevronRight, CheckCircle, XCircle, RotateCcw, Trophy, BookOpen, Clock, FileImage, Lock } from "lucide-react";
import { pyqP1GS2016 } from "@/data/pyq-p1-gs-2016";
import { pyqP2Agri2016 } from "@/data/pyq-p2-agri-2016";
import { pyqP3Agri2017 } from "@/data/pyq-p3-agri-2017";
import { useAuth } from "@/contexts/AuthContext";

// Returns the original exam page number for a given question index (0-based)
function getPageNum(paperId: string, qIdx: number): number {
  if (paperId === "p1") return Math.min(30, Math.ceil((qIdx + 1) / 5));         // 150 Q / 30 pages = 5/page
  if (paperId === "p2") return Math.min(24, Math.ceil((qIdx + 1) / 6.25));      // 150 Q / 24 pages
  return Math.min(22, Math.ceil((qIdx + 1) / 6.82));                            // 150 Q / 22 pages (p3)
}

const PAPERS = [
  {
    id: "p1",
    label: "Paper 1 – General Studies 2016",
    subtitle: "TSPSC AEO 2016 · General Studies & Abilities · 150 Questions",
    color: "blue",
    icon: "📋",
    data: pyqP1GS2016,
    duration: 150,
    free: false,
  },
  {
    id: "p2",
    label: "Paper 2 – Agriculture 2016",
    subtitle: "TSPSC AEO 2016 · Agriculture Diploma Level · 150 Questions",
    color: "green",
    icon: "🌾",
    data: pyqP2Agri2016,
    duration: 150,
    free: true,
  },
  {
    id: "p3",
    label: "Paper 2 – Agriculture 2017",
    subtitle: "TSPSC AEO 2017 · Agriculture Diploma Level · 150 Questions",
    color: "emerald",
    icon: "🌱",
    data: pyqP3Agri2017,
    duration: 150,
    free: false,
  },
];

const colorMap: Record<string, { badge: string; btn: string; bg: string; border: string; selected: string; correct: string; wrong: string }> = {
  blue:    { badge: "bg-blue-600 text-white",    btn: "bg-blue-600 hover:bg-blue-700 text-white",    bg: "bg-blue-50",    border: "border-blue-200",    selected: "border-blue-500 bg-blue-50",    correct: "border-green-500 bg-green-50", wrong: "border-red-400 bg-red-50" },
  green:   { badge: "bg-green-600 text-white",   btn: "bg-green-600 hover:bg-green-700 text-white",   bg: "bg-green-50",   border: "border-green-200",   selected: "border-green-500 bg-green-50",   correct: "border-green-500 bg-green-50", wrong: "border-red-400 bg-red-50" },
  emerald: { badge: "bg-emerald-600 text-white", btn: "bg-emerald-600 hover:bg-emerald-700 text-white", bg: "bg-emerald-50", border: "border-emerald-200", selected: "border-emerald-500 bg-emerald-50", correct: "border-green-500 bg-green-50", wrong: "border-red-400 bg-red-50" },
};

type Mode = "select" | "test" | "result";

export default function PYQPracticePage() {
  const { userData } = useAuth();
  const isPaid = userData?.isPaid ?? false;

  const [mode, setMode] = useState<Mode>("select");
  const [selectedPaper, setSelectedPaper] = useState(0);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [showTelugu, setShowTelugu] = useState(false);

  const paper = PAPERS[selectedPaper];
  const c = colorMap[paper.color];
  const questions = paper.data;
  const q = questions[currentQ];

  // Timer
  useEffect(() => {
    if (!timerActive || timeLeft <= 0) return;
    const t = setTimeout(() => setTimeLeft(tl => tl - 1), 1000);
    return () => clearTimeout(t);
  }, [timerActive, timeLeft]);

  const startTest = useCallback((paperIdx: number) => {
    setSelectedPaper(paperIdx);
    setCurrentQ(0);
    setAnswers({});
    setSubmitted(false);
    setTimeLeft(PAPERS[paperIdx].duration * 60);
    setTimerActive(true);
    setMode("test");
  }, []);

  const handleAnswer = (optIdx: number) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [currentQ]: optIdx }));
  };

  const handleSubmit = () => {
    setTimerActive(false);
    setSubmitted(true);
    setMode("result");
  };

  const handleRestart = () => {
    setTimerActive(false);
    setMode("select");
  };

  // Score calculation
  const correct = submitted ? questions.filter((q, i) => answers[i] === q.answer).length : 0;
  const attempted = Object.keys(answers).length;
  const pct = submitted ? Math.round((correct / questions.length) * 100) : 0;

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const selectedOpt = answers[currentQ];
  const isAnswered = selectedOpt !== undefined;
  const isCorrect = isAnswered && selectedOpt === q.answer;

  // ── SELECT PAPER ─────────────────────────────────────────────────────────
  if (mode === "select") {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-3xl mx-auto px-4 py-10">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/aeo-papers/pyq" className="text-gray-500 hover:text-gray-700">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-2xl font-black text-gray-900">AEO PYQ Practice Tests</h1>
              <p className="text-gray-500 text-sm">Original exam questions in English · With score & answer key</p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-6 text-sm text-amber-800">
            <strong>📝 Note:</strong> Questions are English translations of the original Telugu exam papers (TSPSC AEO 2016 &amp; 2017). After submitting, you will see the correct answers and your score.
          </div>

          <div className="space-y-4">
            {PAPERS.map((p, i) => {
              const cc = colorMap[p.color];
              const isLocked = !p.free && !isPaid;
              return (
                <div key={p.id} className={`rounded-2xl border-2 ${isLocked ? "border-gray-300 bg-gray-50 opacity-90" : `${cc.border} ${cc.bg}`} p-5 relative`}>
                  {/* FREE / PRO badge */}
                  <div className="absolute top-4 right-4">
                    {p.free
                      ? <span className="bg-green-500 text-white text-xs font-black px-3 py-1 rounded-full">FREE</span>
                      : <span className={`text-xs font-black px-3 py-1 rounded-full flex items-center gap-1 ${isPaid ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-600"}`}>
                          {isPaid ? null : <Lock className="w-3 h-3" />}
                          {isPaid ? "PRO ✅" : "PRO"}
                        </span>
                    }
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{isLocked ? "🔒" : p.icon}</span>
                    <div className="flex-1 pr-16">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${isLocked ? "bg-gray-300 text-gray-600" : cc.badge}`}>
                        {p.id === "p1" ? "GS Paper 1" : p.id === "p2" ? "Agriculture 2016" : "Agriculture 2017"}
                      </span>
                      <h2 className={`font-black text-base mt-1 ${isLocked ? "text-gray-500" : "text-gray-900"}`}>{p.label}</h2>
                      <p className="text-gray-500 text-xs">{p.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-600 mb-4">
                    <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> 150 Questions</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 150 Minutes</span>
                    <span>✅ With answer key</span>
                  </div>
                  {isLocked ? (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-sm text-amber-800">
                        <Lock className="w-4 h-4 flex-shrink-0" />
                        <span>This paper requires a <strong>paid subscription</strong> (₹199 one-time)</span>
                      </div>
                      <Link href="/signup" className="w-full py-3 rounded-xl font-bold text-sm bg-amber-500 hover:bg-amber-600 text-white transition-all hover:scale-[1.01] flex items-center justify-center gap-2">
                        🔓 Subscribe ₹199 to Unlock →
                      </Link>
                    </div>
                  ) : (
                    <button
                      onClick={() => startTest(i)}
                      className={`w-full py-3 rounded-xl font-bold text-sm ${cc.btn} transition-all hover:scale-[1.01]`}
                    >
                      Start Practice Test →
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-6 text-center">
            <Link href="/aeo-papers/pyq" className="text-sm text-gray-500 hover:underline">
              ← View original Telugu papers (image viewer)
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ── RESULT ───────────────────────────────────────────────────────────────
  if (mode === "result") {
    const gradeColor = pct >= 60 ? "text-green-600" : pct >= 40 ? "text-orange-500" : "text-red-600";
    const gradeLabel = pct >= 70 ? "Excellent! 🏆" : pct >= 50 ? "Good Performance 👍" : pct >= 35 ? "Keep Practising 📚" : "Needs More Work 💪";

    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Score card */}
          <div className="rounded-2xl border-2 border-blue-200 bg-white p-8 mb-6 text-center shadow-sm">
            <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
            <h1 className="text-2xl font-black text-gray-900 mb-1">{gradeLabel}</h1>
            <p className="text-gray-500 mb-5">{paper.label}</p>
            <div className={`text-6xl font-black mb-3 ${gradeColor}`}>{pct}%</div>
            <div className="flex justify-center gap-8 text-sm">
              <div className="text-center">
                <div className="font-black text-green-600 text-2xl">{correct}</div>
                <div className="text-gray-500">Correct</div>
              </div>
              <div className="text-center">
                <div className="font-black text-red-500 text-2xl">{attempted - correct}</div>
                <div className="text-gray-500">Wrong</div>
              </div>
              <div className="text-center">
                <div className="font-black text-gray-400 text-2xl">{questions.length - attempted}</div>
                <div className="text-gray-500">Skipped</div>
              </div>
              <div className="text-center">
                <div className="font-black text-gray-800 text-2xl">{questions.length}</div>
                <div className="text-gray-500">Total</div>
              </div>
            </div>
          </div>

          {/* Review answers */}
          <div className="flex gap-3 mb-6 flex-wrap">
            <button onClick={handleRestart} className="flex items-center gap-2 px-4 py-2.5 bg-gray-800 text-white rounded-xl font-bold text-sm hover:bg-gray-700">
              <RotateCcw className="w-4 h-4" /> Try Another Paper
            </button>
            <button
              onClick={() => { setMode("test"); setCurrentQ(0); }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm ${c.btn}`}
            >
              <BookOpen className="w-4 h-4" /> Review All Answers
            </button>
          </div>

          {/* All questions review */}
          <div className="space-y-4">
            {questions.map((question, qi) => {
              const chosen = answers[qi];
              const isCorrectA = chosen === question.answer;
              return (
                <div key={qi} className={`rounded-2xl border-2 p-4 ${chosen === undefined ? "border-gray-200 bg-white" : isCorrectA ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}>
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-xs font-bold bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full flex-shrink-0">Q{question.q}</span>
                    <p className="text-sm font-medium text-gray-800">{question.question}</p>
                    <span className="ml-auto flex-shrink-0">
                      {chosen === undefined ? <span className="text-xs text-gray-400">Skipped</span> :
                        isCorrectA ? <CheckCircle className="w-5 h-5 text-green-500" /> : <XCircle className="w-5 h-5 text-red-500" />}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {question.options.map((opt, oi) => (
                      <div key={oi} className={`px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-2 ${
                        oi === question.answer ? "bg-green-100 border border-green-400 text-green-800" :
                        oi === chosen && !isCorrectA ? "bg-red-100 border border-red-400 text-red-800" :
                        "bg-white border border-gray-200 text-gray-600"
                      }`}>
                        <span className="font-bold flex-shrink-0">{["A","B","C","D"][oi]}.</span>
                        <span>{opt}</span>
                        {oi === question.answer && <CheckCircle className="w-3.5 h-3.5 text-green-600 ml-auto flex-shrink-0" />}
                        {oi === chosen && !isCorrectA && <XCircle className="w-3.5 h-3.5 text-red-500 ml-auto flex-shrink-0" />}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ── TEST MODE ─────────────────────────────────────────────────────────────
  const progress = ((currentQ + 1) / questions.length) * 100;
  const answeredCount = Object.keys(answers).length;
  const timerWarning = timeLeft < 300;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      {/* Top bar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-2 flex items-center gap-3 flex-wrap">
          <button onClick={handleRestart} className="text-gray-500 hover:text-gray-700">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-gray-800 text-xs truncate">{paper.label}</p>
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span>Q {currentQ + 1}/{questions.length}</span>
              <span>Answered: {answeredCount}</span>
            </div>
          </div>
          {/* Timer */}
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-sm ${timerWarning ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-700"}`}>
            <Clock className="w-3.5 h-3.5" />
            {formatTime(timeLeft)}
          </div>
          <button
            onClick={handleSubmit}
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-3 py-1.5 rounded-xl"
          >
            Submit
          </button>
        </div>
        {/* Progress bar */}
        <div className="h-1 bg-gray-100">
          <div className={`h-full transition-all ${c.btn.split(" ")[0]}`} style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">

          {/* Question panel */}
          <div className="lg:col-span-3 space-y-4">
            {/* Question */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
              <div className="flex items-start gap-3 mb-5">
                <span className={`text-xs font-black px-2.5 py-1 rounded-full flex-shrink-0 ${c.badge}`}>Q{q.q}</span>
                <p className="text-base font-semibold text-gray-900 leading-relaxed">{q.question}</p>
              </div>

              <div className="space-y-2.5">
                {q.options.map((opt, oi) => {
                  const isSelected = selectedOpt === oi;
                  const isRevealCorrect = submitted && oi === q.answer;
                  const isRevealWrong = submitted && isSelected && !isCorrect;

                  let cls = "border-2 border-gray-200 bg-white hover:border-gray-400 cursor-pointer";
                  if (submitted) {
                    if (isRevealCorrect) cls = "border-2 border-green-500 bg-green-50 cursor-default";
                    else if (isRevealWrong) cls = "border-2 border-red-400 bg-red-50 cursor-default";
                    else cls = "border-2 border-gray-200 bg-gray-50 cursor-default";
                  } else if (isSelected) {
                    cls = `border-2 ${c.selected} cursor-pointer`;
                  }

                  return (
                    <button
                      key={oi}
                      onClick={() => handleAnswer(oi)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${cls}`}
                    >
                      <span className={`w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full text-xs font-black border-2 ${
                        submitted && isRevealCorrect ? "border-green-500 bg-green-500 text-white" :
                        submitted && isRevealWrong ? "border-red-400 bg-red-400 text-white" :
                        isSelected ? `${c.badge} border-transparent` :
                        "border-gray-300 text-gray-500"
                      }`}>
                        {["A","B","C","D"][oi]}
                      </span>
                      <span className="text-sm font-medium text-gray-800 flex-1">{opt}</span>
                      {submitted && isRevealCorrect && <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />}
                      {submitted && isRevealWrong && <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div className={`mt-4 rounded-xl p-3 text-sm font-medium ${isCorrect ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                  {isCorrect ? "✅ Correct!" : `❌ Incorrect. Correct answer: ${["A","B","C","D"][q.answer]}. ${q.options[q.answer]}`}
                </div>
              )}

              {/* Telugu original page */}
              <div className="mt-4 border-t border-gray-100 pt-4">
                <button
                  onClick={() => setShowTelugu(v => !v)}
                  className="flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <FileImage className="w-4 h-4" />
                  {showTelugu ? "Hide Telugu Original ▲" : "📄 Show Original Telugu Question ▼"}
                </button>
                {showTelugu && (
                  <div className="mt-3 rounded-xl overflow-hidden border border-gray-200">
                    <div className="bg-amber-50 px-3 py-1.5 text-xs text-amber-700 font-semibold border-b border-amber-100">
                      📄 Original Telugu — Page {getPageNum(paper.id, currentQ)} of {paper.id === "p1" ? 30 : paper.id === "p2" ? 24 : 22} · ✅ Green tick = correct answer
                    </div>
                    <img
                      src={`/aeo-papers/${paper.id}/${paper.id}_page${String(getPageNum(paper.id, currentQ)).padStart(2, "0")}.png`}
                      alt={`Telugu original page ${getPageNum(paper.id, currentQ)}`}
                      className="w-full h-auto"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between gap-3">
              <button
                onClick={() => { setCurrentQ(q => Math.max(0, q - 1)); setShowTelugu(false); }}
                disabled={currentQ === 0}
                className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-40"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>
              {currentQ < questions.length - 1 ? (
                <button
                  onClick={() => { setCurrentQ(q => q + 1); setShowTelugu(false); }}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold ${c.btn}`}
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-sm font-semibold"
                >
                  <Trophy className="w-4 h-4" /> Submit Test
                </button>
              )}
            </div>
          </div>

          {/* Question map sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-200 p-3 sticky top-24">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Question Map</p>
              <div className="grid grid-cols-5 gap-1 max-h-80 overflow-y-auto">
                {questions.map((_, qi) => {
                  const isAns = answers[qi] !== undefined;
                  const isCur = qi === currentQ;
                  return (
                    <button
                      key={qi}
                      onClick={() => { setCurrentQ(qi); setShowTelugu(false); }}
                      className={`text-xs py-1.5 rounded-lg font-bold transition-all ${
                        isCur ? `${c.badge} ring-2 ring-offset-1 ring-blue-400` :
                        isAns ? "bg-green-500 text-white" :
                        "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {qi + 1}
                    </button>
                  );
                })}
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100 space-y-1 text-xs text-gray-600">
                <div className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-green-500 flex-shrink-0"></span> Answered ({answeredCount})</div>
                <div className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-gray-200 flex-shrink-0"></span> Not visited ({questions.length - answeredCount})</div>
              </div>
              <button
                onClick={handleSubmit}
                className={`w-full mt-3 py-2 rounded-xl font-bold text-sm ${c.btn}`}
              >
                Submit ({answeredCount}/{questions.length})
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
