/**
 * Pulls clean, testable fact sentences from an extracted source-text file.
 * Usage: node scripts/extract_facts.js <subject>   e.g. da-101
 */
const fs = require("fs");
const path = require("path");
const subj = process.argv[2];
const raw = fs.readFileSync(path.join(__dirname, "../srctext/" + subj + ".txt"), "utf8");

// normalize whitespace, split into sentences
const text = raw.replace(/\r/g, " ").replace(/-\n/g, "").replace(/\n/g, " ").replace(/\s+/g, " ");
const sentences = text.split(/(?<=[.;])\s+/);

const seen = new Set();
const facts = [];
for (let s of sentences) {
  s = s.trim();
  if (s.length < 25 || s.length > 180) continue;
  const key = s.toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 50);
  if (seen.has(key)) continue;
  // strong factual signals
  const hasDef = /\b(is|are|was) (called|known as|defined as|termed)\b|\bknown as the\b|\bcoined by\b|\bdiscovered by\b|\bfather of\b|\bdeveloped by\b|\bproposed by\b|\bcalled as\b/i.test(s);
  const hasNum = /\b\d+(\.\d+)?\s?(%|percent|kg|cm|mm|metres?|meters?|°c|degrees?|days?|years?|hours?|tonnes?|litres?|ha|hectares?|ppm)\b/i.test(s);
  const hasYear = /\b(18|19|20)\d\d\b/.test(s);
  if (hasDef || hasNum || hasYear) {
    seen.add(key);
    facts.push(s);
  }
}
console.log("=== " + subj + " : " + facts.length + " candidate facts ===");
facts.slice(0, 60).forEach((f, i) => console.log((i + 1) + ". " + f));
