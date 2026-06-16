/**
 * High-precision numeric audit. For each factual question whose options are
 * numeric/quantitative, flags cases where the MARKED option's number(s) do NOT
 * appear in the explanation but exactly one OTHER option's number does — a
 * strong signal the wrong option is marked. Catches things like FCO=1957 vs
 * explanation says 1985.
 */
const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "../src/data/questions");

function parse(file) {
  const content = fs.readFileSync(file, "utf8");
  const lines = content.split("\n");
  const qs = []; let i = 0;
  while (i < lines.length) {
    const idm = lines[i].match(/id:\s*"([^"]+)"/);
    if (!idm) { i++; continue; }
    const id = idm[1];
    let q = "", opts = [], correct = -1, expl = "";
    for (let j = i + 1; j < Math.min(i + 40, lines.length); j++) {
      if (!q) { const m = lines[j].match(/question:\s*"((?:[^"\\]|\\.)*)"/); if (m) q = m[1]; }
      if (opts.length === 0 && /options:\s*\[/.test(lines[j])) {
        let b = "", d = 0;
        for (let k = j; k < Math.min(j + 12, lines.length); k++) { b += lines[k]; for (const ch of lines[k]) { if (ch === "[") d++; if (ch === "]") d--; } if (d === 0) break; }
        const re = /"((?:[^"\\]|\\.)*)"/g; let m; const f = []; while ((m = re.exec(b)) !== null) f.push(m[1]); opts = f.slice(0, 4);
      }
      if (correct === -1) { const m = lines[j].match(/correct:\s*(\d)/); if (m) correct = parseInt(m[1]); }
      if (!expl) { const m = lines[j].match(/explanation:\s*"((?:[^"\\]|\\.)*)"/); if (m) expl = m[1]; }
      if (j > i + 2 && /^\s+id:\s*"/.test(lines[j])) break;
    }
    if (opts.length >= 4 && correct >= 0 && q) qs.push({ id, q, opts, correct, expl });
    i++;
  }
  return qs;
}

// extract numbers (keep decimals); ignore years-in-id etc.
const numsOf = s => (s.match(/\d+(?:\.\d+)?/g) || []);

const files = fs.readdirSync(dir).filter(f => /^da-\d/.test(f) && f.endsWith(".ts"));
let flagged = 0;
for (const f of files) {
  for (const q of parse(path.join(dir, f))) {
    if (/Match|Assertion/i.test(q.q)) continue;
    const exn = q.expl.toLowerCase().replace(/\s+/g, "");
    const ex = q.expl.toLowerCase();
    const inExpl = n => ex.includes(n) || exn.includes(n);
    const correctNums = numsOf(q.opts[q.correct]);
    if (correctNums.length === 0) continue;            // not a numeric option
    // the marked option must be a "pure-ish" numeric option (its numbers carry the meaning)
    const correctHit = correctNums.filter(inExpl).length;
    if (correctHit > 0) continue;                       // marked number present -> fine
    // marked number absent. Is exactly one other option's number present?
    let altIdx = -1, altCount = 0;
    for (let oi = 0; oi < 4; oi++) {
      if (oi === q.correct) continue;
      const on = numsOf(q.opts[oi]);
      if (on.length && on.some(inExpl)) { altIdx = oi; altCount++; }
    }
    if (altCount === 1) {
      flagged++;
      console.log(`[${q.id}] ${f}`);
      console.log(`  Q: ${q.q.slice(0, 70)}`);
      console.log(`  marked[${q.correct}] (num NOT in expl): ${q.opts[q.correct]}`);
      console.log(`  alt[${altIdx}] (num IN expl): ${q.opts[altIdx]}`);
      console.log(`  EXP: ${q.expl.slice(0, 110)}`);
    }
  }
}
console.log(`\nNumeric mismatches (marked num absent, one alt present): ${flagged}`);
