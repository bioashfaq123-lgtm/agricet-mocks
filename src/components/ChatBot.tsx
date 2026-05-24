"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { X, Send, Loader2, ChevronDown } from "lucide-react";

/* ── Custom robot SVG that matches the be10x style ─────────────────── */
function RobotIcon({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Antenna */}
      <line x1="28" y1="5" x2="28" y2="11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="28" cy="4" r="2.5" fill="#38bdf8"/>

      {/* Head */}
      <rect x="14" y="11" width="28" height="20" rx="6" fill="white"/>

      {/* Visor panel */}
      <rect x="18" y="16" width="20" height="9" rx="3.5" fill="#0f172a"/>
      {/* Eyes */}
      <circle cx="23" cy="20.5" r="3" fill="#38bdf8"/>
      <circle cx="33" cy="20.5" r="3" fill="#38bdf8"/>
      {/* Eye glow */}
      <circle cx="23" cy="20.5" r="1.5" fill="white" opacity="0.6"/>
      <circle cx="33" cy="20.5" r="1.5" fill="white" opacity="0.6"/>

      {/* Mouth line */}
      <rect x="23" y="28" width="10" height="2" rx="1" fill="#cbd5e1"/>

      {/* Body */}
      <rect x="16" y="33" width="24" height="15" rx="5" fill="white"/>
      {/* Body detail dots */}
      <circle cx="23" cy="40" r="2" fill="#bae6fd"/>
      <circle cx="33" cy="40" r="2" fill="#bae6fd"/>

      {/* LEFT arm raised up */}
      <path d="M14 33 Q8 28 6 20" stroke="white" strokeWidth="4.5" strokeLinecap="round"/>
      {/* Hand/palm */}
      <circle cx="6" cy="18" r="4.5" fill="white"/>
      {/* Fingers */}
      <line x1="3" y1="14" x2="2" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <line x1="6" y1="13" x2="6" y2="9"  stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <line x1="9" y1="14" x2="10" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round"/>

      {/* RIGHT arm (down) */}
      <path d="M40 36 Q46 36 47 40" stroke="white" strokeWidth="4.5" strokeLinecap="round"/>
      <circle cx="47" cy="42" r="4" fill="white"/>

      {/* Legs */}
      <rect x="19" y="46" width="7" height="5" rx="2.5" fill="#e2e8f0"/>
      <rect x="30" y="46" width="7" height="5" rx="2.5" fill="#e2e8f0"/>
    </svg>
  );
}

interface Message {
  role: "user" | "assistant";
  content: string;
  sources?: string[];
  webSearch?: boolean;
}

const SUGGESTED_QUESTIONS = [
  "What is the difference between Kharif and Rabi crops?",
  "Explain the process of photosynthesis",
  "What are the symptoms of nitrogen deficiency in plants?",
  "What is the T&V system of agricultural extension?",
  "Explain the stages of crop growth",
  "What is integrated pest management?",
];

export default function ChatBot() {
  const [isOpen, setIsOpen]             = useState(false);
  const [messages, setMessages]         = useState<Message[]>([]);
  const [input, setInput]               = useState("");
  const [loading, setLoading]           = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [showTooltip, setShowTooltip]   = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef  = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const sendMessage = useCallback(async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    setInput("");
    setShowSuggestions(false);
    const userMsg: Message = { role: "user", content: trimmed };
    setMessages(prev => [...prev, userMsg]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: trimmed,
          history: messages.slice(-6),
        }),
      });

      const data = await res.json();

      if (data.error) {
        // Always show friendly message — never show raw technical errors to students
        const friendlyError =
          data.error.includes("Too many requests") || data.error.includes("rate_limit")
            ? "I'm receiving too many questions right now. Please wait a moment and try again! 🙏"
            : "Sorry, I couldn't get an answer right now. Please try again in a moment!";
        setMessages(prev => [...prev, {
          role: "assistant",
          content: friendlyError,
        }]);
      } else {
        setMessages(prev => [...prev, {
          role: "assistant",
          content: data.answer,
          sources: data.sources,
          webSearch: data.webSearch,
        }]);
      }
    } catch {
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "Sorry, there was a connection error. Please try again.",
      }]);
    } finally {
      setLoading(false);
    }
  }, [loading, messages]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const clearChat = () => {
    setMessages([]);
    setShowSuggestions(true);
  };

  return (
    <>
      {/* Floating button + tooltip wrapper */}
      <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-2">

        {/* Tooltip bubble — shown until dismissed or chat opened */}
        {showTooltip && !isOpen && (
          <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 max-w-[190px] text-sm text-gray-700 font-medium leading-snug animate-fade-in">
            Have doubts? We&apos;re here to help!
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-1.5 right-1.5 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            {/* Tail pointing down-right */}
            <span className="absolute -bottom-2 right-5 w-4 h-4 bg-white border-r border-b border-gray-100 rotate-45 rounded-sm" />
          </div>
        )}

        {/* Dark circular robot button */}
        <button
          onClick={() => { setIsOpen(v => !v); setShowTooltip(false); }}
          className="w-16 h-16 rounded-full bg-gray-900 hover:bg-gray-800 shadow-2xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 relative"
          aria-label="Open AI Study Assistant"
        >
          {isOpen ? (
            <X className="w-7 h-7 text-white" />
          ) : (
            <RobotIcon size={46} />
          )}
          {/* Green online dot */}
          {!isOpen && (
            <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-gray-900" />
          )}
        </button>
      </div>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-50 w-[calc(100vw-2rem)] max-w-sm sm:max-w-md bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col"
          style={{ height: "clamp(400px, 65vh, 600px)" }}>

          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-gray-900 rounded-t-2xl text-white">
            <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
              <RobotIcon size={28} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm leading-none">AGRICET Study Assistant</p>
              <p className="text-xs text-white/80 mt-0.5">Ask doubts from 17 PJTSAU subjects</p>
            </div>
            <div className="flex items-center gap-2">
              {messages.length > 0 && (
                <button
                  onClick={clearChat}
                  className="text-white/70 hover:text-white text-xs px-2 py-1 rounded-lg hover:bg-white/10 transition-colors"
                >
                  Clear
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
              >
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages area */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">

            {/* Welcome message */}
            {messages.length === 0 && (
              <div className="text-center py-2">
                <div className="flex justify-center mb-2">
                  <div className="w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center shadow-lg">
                    <RobotIcon size={40} />
                  </div>
                </div>
                <p className="text-gray-700 text-sm font-medium">Hi! I&apos;m your AGRICET study assistant.</p>
                <p className="text-gray-500 text-xs mt-1">
                  Ask any doubt from DA-101 to DA-291.<br />
                  I&apos;ll answer from your PJTSAU theory notes.
                </p>
              </div>
            )}

            {/* Suggested questions */}
            {showSuggestions && messages.length === 0 && (
              <div className="space-y-1.5">
                <p className="text-xs text-gray-400 font-medium px-1">Try asking:</p>
                {SUGGESTED_QUESTIONS.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(q)}
                    className="w-full text-left text-xs text-primary-700 bg-primary-50 hover:bg-primary-100 border border-primary-200 rounded-lg px-3 py-2 transition-colors leading-relaxed"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Chat messages */}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-primary-600 text-white rounded-br-sm"
                    : "bg-gray-100 text-gray-800 rounded-bl-sm"
                }`}>
                  {/* Format assistant messages with basic markdown */}
                  {msg.role === "assistant" ? (
                    <div className="space-y-1.5">
                      {msg.content.split('\n').map((line, li) => (
                        line.startsWith('• ') || line.startsWith('- ') ? (
                          <div key={li} className="flex items-start gap-1.5">
                            <span className="text-primary-600 mt-0.5 flex-shrink-0">•</span>
                            <span>{line.replace(/^[•\-]\s*/, '')}</span>
                          </div>
                        ) : line.trim() ? (
                          <p key={li}>{line}</p>
                        ) : null
                      ))}
                      {(msg.sources && msg.sources.length > 0 || msg.webSearch) && (
                        <p className="text-xs text-gray-500 mt-2 pt-2 border-t border-gray-200">
                          {msg.sources && msg.sources.length > 0 && `📚 ${msg.sources.join(", ")}`}
                          {msg.webSearch && (
                            <span className="ml-1 inline-flex items-center gap-0.5 bg-blue-100 text-blue-700 rounded px-1.5 py-0.5">
                              🌐 Web Search
                            </span>
                          )}
                        </p>
                      )}
                    </div>
                  ) : (
                    <p>{msg.content}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Loading indicator */}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-primary-600" />
                  <span className="text-sm text-gray-500">Thinking...</span>
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input area */}
          <div className="px-3 py-3 border-t border-gray-100">
            <div className="flex items-end gap-2 bg-gray-50 rounded-xl border border-gray-200 px-3 py-2 focus-within:border-primary-400 focus-within:ring-1 focus-within:ring-primary-200 transition-all">
              <textarea
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask your agricultural doubt..."
                rows={1}
                disabled={loading}
                className="flex-1 bg-transparent resize-none text-sm text-gray-800 placeholder-gray-400 focus:outline-none max-h-24 disabled:opacity-50"
                style={{ lineHeight: "1.5" }}
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={loading || !input.trim()}
                className="w-8 h-8 rounded-lg bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 text-white flex items-center justify-center transition-colors flex-shrink-0 mb-0.5"
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </button>
            </div>
            <p className="text-center text-xs text-gray-400 mt-1.5">Press Enter to send · Shift+Enter for new line</p>
          </div>
        </div>
      )}
    </>
  );
}
