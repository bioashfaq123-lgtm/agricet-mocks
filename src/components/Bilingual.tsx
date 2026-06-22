"use client";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Renders an English string with its Telugu translation according to the
 * selected language mode. If no Telugu is available, English is always shown.
 *
 *  - "en"   → English only
 *  - "te"   → Telugu only (falls back to English when no translation exists)
 *  - "both" → English, then Telugu underneath (when a translation exists)
 */
export default function Bilingual({
  en,
  te,
  className = "",
  teClassName = "",
  as = "div",
}: {
  en: string;
  te?: string;
  className?: string;
  teClassName?: string;
  as?: "div" | "span" | "p";
}) {
  const { lang } = useLanguage();
  const Tag = as as any;

  const hasTe = !!te && te.trim().length > 0;
  const showEn = lang === "en" || lang === "both" || !hasTe;
  const showTe = (lang === "te" || lang === "both") && hasTe;

  return (
    <Tag className={className}>
      {showEn && <span>{en}</span>}
      {showEn && showTe && <span className="block" style={{ height: 2 }} />}
      {showTe && (
        <span className={`te-text block ${teClassName}`}>{te}</span>
      )}
    </Tag>
  );
}
