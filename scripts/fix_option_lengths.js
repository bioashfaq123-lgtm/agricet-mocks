/**
 * Finds questions where the correct option is >40% longer than the average wrong option
 * and rewrites the shorter wrong options to be similar in length by adding meaningful
 * qualifying context — keeping them factually wrong but plausible.
 *
 * Strategy: pads short distractors with a brief phrase that makes them the same
 * approximate length as the correct option without giving away the answer.
 */
const fs = require("fs");
const path = require("path");

const qDir = path.join(__dirname, "../src/data/questions");
// Process the worst lecture files first
const targetFiles = [
  "da-252-lectures.ts",
  "da-122-lectures.ts",
  "da-132-lectures.ts",
  "da-101-lectures.ts",
  "da-201-lectures.ts",
  "da-291-lectures.ts",
  "da-241-lectures.ts",
  "da-151-lectures.ts",
  "da-121-lectures.ts",
  "da-171-lectures.ts",
  "da-282-lectures.ts",
  "da-281-lectures.ts",
  "da-131-lectures.ts",
  "da-102-lectures.ts",
  "da-111-lectures.ts",
  "da-263-lectures.ts",
  "da-262-lectures.ts",
  "entomology.ts",
  "genetics.ts",
  "plant-pathology.ts",
  "seed-technology.ts",
  "economics.ts",
  "computer-applications.ts",
  "agronomy.ts",
  "agronomy2.ts",
  "general-agriculture.ts",
];

// Generic padding phrases that keep an option wrong but more plausible in length
// Applied by picking the one closest in length to reach the target
const padPhrases = [
  " under standard field conditions",
  " as recommended by ICAR guidelines",
  " in irrigated crop production systems",
  " under tropical agricultural conditions",
  " in the context of Indian agriculture",
  " based on conventional agronomic practices",
  " as observed in experimental field trials",
  " during the critical growth period of crops",
  " for rain-fed agricultural conditions only",
  " in dryland and semi-arid farming systems",
  " under controlled experimental conditions",
  " as defined by standard agricultural texts",
  " in the context of crop production science",
  " for commercial crop cultivation practices",
  " under normal soil fertility conditions",
  " as per standard horticultural practices",
  " in the context of integrated farming systems",
  " based on soil and crop management studies",
  " for efficient nutrient use in agriculture",
  " under well-drained fertile soil conditions",
];

function padToLength(text, targetLen) {
  if (text.length >= targetLen * 0.85) return text; // already close enough
  let best = text;
  for (const phrase of padPhrases) {
    const candidate = text + phrase;
    if (Math.abs(candidate.length - targetLen) < Math.abs(best.length - targetLen)) {
      best = candidate;
    }
    if (best.length >= targetLen * 0.85) break;
  }
  return best;
}

let totalFixed = 0;

for (const fname of targetFiles) {
  const fpath = path.join(qDir, fname);
  if (!fs.existsSync(fpath)) continue;
  const lines = fs.readFileSync(fpath, "utf8").split("\n");
  let changed = 0;

  // ── Multi-line format ──
  let i = 0;
  while (i < lines.length) {
    if (/options:\s*\[/.test(lines[i]) && !/correct:/.test(lines[i])) {
      const optStart = i;
      let optEnd = i, depth = 0;
      for (let j = i; j < lines.length; j++) {
        for (const ch of lines[j]) { if (ch==="[") depth++; if (ch==="]") depth--; }
        if (depth === 0) { optEnd = j; break; }
      }
      let correctLine = -1;
      for (let j = optEnd + 1; j < Math.min(optEnd + 6, lines.length); j++) {
        if (/^\s+correct:\s*\d/.test(lines[j])) { correctLine = j; break; }
      }
      if (correctLine === -1) { i = optEnd + 1; continue; }

      const correctIdx = parseInt(lines[correctLine].match(/correct:\s*(\d)/)[1]);
      const optBlock = lines.slice(optStart, optEnd + 1).join("\n");
      const opts = [...optBlock.matchAll(/"((?:[^"\\]|\\.)*)"/g)].map(m => m[1]);

      if (opts.length === 4) {
        const correctLen = opts[correctIdx].length;
        const avgWrong = opts.filter((_, idx) => idx !== correctIdx).reduce((s, o) => s + o.length, 0) / 3;

        if (correctLen > avgWrong * 1.4 && correctLen - avgWrong > 20) {
          const newOpts = opts.map((opt, idx) => {
            if (idx === correctIdx) return opt;
            return padToLength(opt, correctLen);
          });

          // Only update if something actually changed
          if (newOpts.some((o, idx) => o !== opts[idx])) {
            let optIdx = 0;
            for (let ln = optStart; ln <= optEnd; ln++) {
              lines[ln] = lines[ln].replace(/"(?:[^"\\]|\\.)*"/g, () => {
                if (optIdx < 4) return `"${newOpts[optIdx++]}"`;
                return `"${newOpts[optIdx-1]}"`;
              });
            }
            changed++;
          }
        }
      }
      i = optEnd + 1;
    } else { i++; }
  }

  // ── Single-line format ──
  for (let ln = 0; ln < lines.length; ln++) {
    if (!/options:\[/.test(lines[ln]) || !/correct:/.test(lines[ln])) continue;
    const correctMatch = lines[ln].match(/correct:(\d)/);
    if (!correctMatch) continue;
    const correctIdx = parseInt(correctMatch[1]);

    const optStart = lines[ln].indexOf("options:[");
    if (optStart === -1) continue;
    let depth = 0, optEnd = -1;
    for (let ci = optStart + 8; ci < lines[ln].length; ci++) {
      if (lines[ln][ci]==="[") depth++;
      else if (lines[ln][ci]==="]") { depth--; if (depth===0) { optEnd=ci; break; } }
    }
    if (optEnd === -1) continue;

    const optContent = lines[ln].slice(optStart, optEnd + 1);
    const opts = [...optContent.matchAll(/"((?:[^"\\]|\\.)*)"/g)].map(m => m[1]);
    if (opts.length !== 4) continue;

    const correctLen = opts[correctIdx].length;
    const avgWrong = opts.filter((_, idx) => idx !== correctIdx).reduce((s, o) => s + o.length, 0) / 3;

    if (correctLen > avgWrong * 1.4 && correctLen - avgWrong > 20) {
      const newOpts = opts.map((opt, idx) => idx === correctIdx ? opt : padToLength(opt, correctLen));
      if (newOpts.some((o, idx) => o !== opts[idx])) {
        const newOptContent = `options:[${newOpts.map(s => `"${s}"`).join(",")}]`;
        lines[ln] = lines[ln].slice(0, optStart) + newOptContent + lines[ln].slice(optEnd + 1);
        changed++;
      }
    }
  }

  if (changed > 0) {
    fs.writeFileSync(fpath, lines.join("\n"), "utf8");
    totalFixed += changed;
    console.log(`✓ ${fname}: fixed ${changed} questions`);
  } else {
    console.log(`- ${fname}: no changes needed`);
  }
}

console.log(`\nTotal questions fixed: ${totalFixed}`);
