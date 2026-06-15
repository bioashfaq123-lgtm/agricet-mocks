const fs = require("fs");
const path = require("path");

const qDir = path.join(__dirname, "../src/data/questions");
const files = fs.readdirSync(qDir).filter(f => f.endsWith(".ts") && f !== "index.ts");

function makeRng(seed) {
  let s = seed >>> 0;
  return () => { s = (Math.imul(s, 1664525) + 1013904223) >>> 0; return s / 0xffffffff; };
}
function shuffleArray(arr, rng) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Parse quoted strings robustly, handling escaped quotes
function extractStrings(s) {
  const results = [];
  let i = 0;
  while (i < s.length) {
    if (s[i] === '"') {
      let str = "";
      i++;
      while (i < s.length) {
        if (s[i] === '\\' && i + 1 < s.length) { str += s[i] + s[i+1]; i += 2; }
        else if (s[i] === '"') { i++; break; }
        else { str += s[i]; i++; }
      }
      results.push(str);
    } else { i++; }
  }
  return results;
}

let totalFixed = 0;

for (const fname of files) {
  const fpath = path.join(qDir, fname);
  let content = fs.readFileSync(fpath, "utf8");
  const lines = content.split("\n");

  // --- Multi-line format handler ---
  const mlQuestions = [];
  let i = 0;
  while (i < lines.length) {
    if (/options:\s*\[/.test(lines[i]) && !/correct:/.test(lines[i])) {
      const optStart = i;
      let optEnd = i;
      let depth = 0;
      for (let j = i; j < lines.length; j++) {
        for (const ch of lines[j]) {
          if (ch === "[") depth++;
          if (ch === "]") depth--;
        }
        if (depth === 0) { optEnd = j; break; }
      }
      let correctLine = -1;
      for (let j = optEnd + 1; j < Math.min(optEnd + 6, lines.length); j++) {
        if (/^\s+correct:\s*\d/.test(lines[j])) { correctLine = j; break; }
      }
      if (correctLine !== -1) mlQuestions.push({ optStart, optEnd, correctLine });
      i = optEnd + 1;
    } else { i++; }
  }

  // --- Single-line format handler ---
  // Find lines that have options:[...] and correct:N all on one line
  const slLineIdxs = [];
  for (let ln = 0; ln < lines.length; ln++) {
    if (/options:\s*\[/.test(lines[ln]) && /correct:\s*\d/.test(lines[ln])) {
      slLineIdxs.push(ln);
    }
  }

  const totalQ = mlQuestions.length + slLineIdxs.length;
  if (totalQ === 0) continue;

  // Build balanced target distribution
  const targets = [];
  for (let q = 0; q < totalQ; q++) targets.push(q % 4);
  const rng = makeRng(fname.charCodeAt(0) * 31 + fname.length * 17 + totalQ);
  shuffleArray(targets, rng);

  let changed = 0;

  // Process multi-line questions
  for (let q = 0; q < mlQuestions.length; q++) {
    const { optStart, optEnd, correctLine } = mlQuestions[q];
    const currentCorrect = parseInt(lines[correctLine].match(/correct:\s*(\d)/)[1]);
    const targetCorrect = targets[q];
    if (currentCorrect === targetCorrect) continue;

    const optBlock = lines.slice(optStart, optEnd + 1).join("\n");
    const optMatches = [...optBlock.matchAll(/"((?:[^"\\]|\\.)*)"/g)].map(m => m[1]);
    if (optMatches.length !== 4) continue;

    const correctText = optMatches[currentCorrect];
    const newOptions = [...optMatches];
    newOptions[currentCorrect] = newOptions[targetCorrect];
    newOptions[targetCorrect] = correctText;

    let idx = 0;
    for (let ln = optStart; ln <= optEnd; ln++) {
      lines[ln] = lines[ln].replace(/"(?:[^"\\]|\\.)*"/g, () => {
        if (idx < 4) return `"${newOptions[idx++]}"`;
        return `"${newOptions[idx - 1]}"`;
      });
    }
    lines[correctLine] = lines[correctLine].replace(/correct:\s*\d/, `correct: ${targetCorrect}`);
    changed++;
  }

  // Process single-line questions
  for (let q = 0; q < slLineIdxs.length; q++) {
    const ln = slLineIdxs[q];
    const targetCorrect = targets[mlQuestions.length + q];

    // Extract current correct
    const correctMatch = lines[ln].match(/correct:\s*(\d)/);
    if (!correctMatch) continue;
    const currentCorrect = parseInt(correctMatch[1]);
    if (currentCorrect === targetCorrect) continue;

    // Find options array content: between "options:[" and the matching "]"
    const optStart = lines[ln].indexOf("options:[");
    if (optStart === -1) continue;
    let depth = 0, optEnd = -1;
    for (let ci = optStart + "options:".length; ci < lines[ln].length; ci++) {
      if (lines[ln][ci] === "[") depth++;
      else if (lines[ln][ci] === "]") { depth--; if (depth === 0) { optEnd = ci; break; } }
    }
    if (optEnd === -1) continue;

    const optContent = lines[ln].slice(optStart, optEnd + 1);
    const optStrings = extractStrings(optContent);
    if (optStrings.length !== 4) continue;

    const correctText = optStrings[currentCorrect];
    const newOptions = [...optStrings];
    newOptions[currentCorrect] = newOptions[targetCorrect];
    newOptions[targetCorrect] = correctText;

    // Rebuild the options section
    const newOptContent = `options:[${newOptions.map(s => `"${s}"`).join(",")}]`;
    lines[ln] = lines[ln].slice(0, optStart) + newOptContent + lines[ln].slice(optEnd + 1);
    lines[ln] = lines[ln].replace(/correct:\s*\d/, `correct:${targetCorrect}`);
    changed++;
  }

  if (changed > 0) {
    const dist = [0, 0, 0, 0];
    lines.filter(l => /correct:\s*\d/.test(l)).forEach(l => {
      const m = l.match(/correct:\s*(\d)/);
      if (m) dist[parseInt(m[1])]++;
    });
    fs.writeFileSync(fpath, lines.join("\n"), "utf8");
    totalFixed += changed;
    console.log(`✓ ${fname} | ${totalQ} Qs | changed ${changed} | dist: A:${dist[0]} B:${dist[1]} C:${dist[2]} D:${dist[3]}`);
  } else {
    console.log(`- ${fname} | already balanced`);
  }
}

console.log(`\nDone. Total answers shuffled: ${totalFixed}`);
