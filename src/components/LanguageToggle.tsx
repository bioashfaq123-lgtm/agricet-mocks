"use client";
import { useLanguage, Lang } from "@/contexts/LanguageContext";

const OPTS: { v: Lang; label: string }[] = [
  { v: "en",   label: "EN" },
  { v: "te",   label: "తెలుగు" },
  { v: "both", label: "Both" },
];

export default function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();
  return (
    <div className={`inline-flex items-center rounded-lg bg-gray-100 p-0.5 ${className}`}>
      {OPTS.map((o) => (
        <button
          key={o.v}
          onClick={() => setLang(o.v)}
          className={`px-2.5 py-1 rounded-md text-xs font-bold transition-colors ${
            lang === o.v ? "bg-primary-600 text-white shadow-sm" : "text-gray-500 hover:text-gray-700"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
