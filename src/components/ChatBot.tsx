"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { X, Send, MessageCircle, Loader2, BookOpen, ChevronDown } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
  sources?: string[];
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
  const [isOpen, setIsOpen]       = useState(false);
  const [messages, setMessages]   = useState<Message[]>([]);
  const [input, setInput]         = useState("");
  const [loading, setLoading]     = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
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
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(v => !v)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary-600 hover:bg-primary-700 text-white shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        aria-label="Open AI Study Assistant"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <MessageCircle className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
          </>
        )}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-50 w-[calc(100vw-2rem)] max-w-sm sm:max-w-md bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col"
          style={{ height: "clamp(400px, 65vh, 600px)" }}>

          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-primary-600 rounded-t-2xl text-white">
            <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-5 h-5" />
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
                <div className="text-3xl mb-2">🌾</div>
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
                      {msg.sources && msg.sources.length > 0 && (
                        <p className="text-xs text-gray-500 mt-2 pt-2 border-t border-gray-200">
                          📚 Source: {msg.sources.join(", ")}
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
