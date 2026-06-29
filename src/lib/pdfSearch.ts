// Lightweight keyword retrieval over the chunked source PDFs (pdf-chunks.json).
//
// Every official PJTSAU subject note (da-101 … da-291) is chunked in that file.
// Because a quiz question already knows its exact subjectId, retrieval here is
// scoped to that subject's chunks first — far more precise than guessing the
// subject from keywords. Used by the AI Telugu Doubt-Solver (/api/explain) to
// ground each explanation in the real source material.

import pdfData from "@/data/pdf-chunks.json";

export interface PdfChunk {
  id: string;
  subjectId: string;
  subjectName: string;
  text: string;
}

const ALL_CHUNKS = (pdfData as { chunks: PdfChunk[] }).chunks;

const STOP_WORDS = new Set([
  "the", "and", "is", "in", "of", "a", "an", "to", "for", "with", "what", "how",
  "are", "was", "were", "has", "have", "had", "be", "by", "at", "on", "or", "it",
  "its", "this", "that", "which", "do", "does", "did", "can", "could", "would",
  "should", "will", "may", "might", "from", "into", "about", "also", "more",
  "than", "but", "not", "your", "you", "please", "tell", "me", "give", "explain",
  "define", "describe", "why", "when", "where", "who", "all", "some", "any",
  "each", "both", "few", "most", "other", "such", "only", "own", "same", "so",
  "as", "up", "out", "if", "no", "nor", "yet", "following", "above", "below",
  "correct", "answer", "option", "options", "question", "year", "called",
]);

function tokenize(query: string): string[] {
  return query
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length >= 3 && !STOP_WORDS.has(w));
}

/**
 * Find the source-note chunks most relevant to a quiz question.
 *
 * @param query     question text + correct-answer text
 * @param subjectId the question's subject (e.g. "da-111"); retrieval is scoped
 *                  to this subject when chunks exist for it
 * @param topK      number of chunks to return
 */
export function searchSourceChunks(query: string, subjectId?: string, topK = 4): PdfChunk[] {
  const keywords = tokenize(query);
  if (keywords.length === 0) return [];

  const scoped =
    subjectId && ALL_CHUNKS.some((c) => c.subjectId === subjectId)
      ? ALL_CHUNKS.filter((c) => c.subjectId === subjectId)
      : ALL_CHUNKS;

  const scored = scoped.map((chunk) => {
    const textLower = chunk.text.toLowerCase();
    let score = 0;
    for (const kw of keywords) {
      const count = (textLower.match(new RegExp(kw, "g")) || []).length;
      score += count * 2;
      if (kw.length > 4) {
        const stem = kw.slice(0, -2);
        const partial = (textLower.match(new RegExp(stem, "g")) || []).length - count;
        score += Math.max(0, partial);
      }
    }
    // Coverage bonus: chunks containing MORE distinct keywords rank higher,
    // so a chunk that actually answers the question beats one that merely
    // repeats a single common word many times.
    if (keywords.length >= 2) {
      const uniqueMatched = keywords.filter((kw) => textLower.includes(kw)).length;
      const coverage = uniqueMatched / keywords.length;
      if (coverage >= 1.0) score *= 5.0;
      else if (coverage >= 0.6) score *= 2.0;
      else if (coverage >= 0.4) score *= 1.2;
    }
    return { chunk, score };
  });

  const top = scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map((s) => s.chunk);

  // Expand each hit with its immediate same-subject neighbours so answers that
  // straddle a chunk boundary stay intact.
  const seen = new Set<string>();
  const expanded: PdfChunk[] = [];
  for (const chunk of top) {
    const idx = ALL_CHUNKS.indexOf(chunk);
    for (let ni = idx - 1; ni <= idx + 1; ni++) {
      if (ni < 0 || ni >= ALL_CHUNKS.length) continue;
      const neighbor = ALL_CHUNKS[ni];
      if (neighbor.subjectId !== chunk.subjectId) continue;
      const key = `${neighbor.subjectId}-${ni}`;
      if (seen.has(key)) continue;
      seen.add(key);
      expanded.push(neighbor);
    }
  }
  return expanded;
}

/** Trim a chunk to a manageable number of words for the LLM prompt. */
export function truncateWords(text: string, maxWords = 180): string {
  return text.split(/\s+/).slice(0, maxWords).join(" ");
}
