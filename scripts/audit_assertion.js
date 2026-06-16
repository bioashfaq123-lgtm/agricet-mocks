/**
 * Verifies Assertion-Reason questions across ALL subjects.
 * Derives the intended verdict from the explanation and checks the marked
 * option's verdict matches it.
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

// classify an assertion option string into a verdict code
function verdict(s) {
  const t = s.toLowerCase();
  const bothTrue = t.includes("both a and r are true") || (t.includes("both") && t.includes("true"));
  const notExpl = t.includes("not the correct explanation") || t.includes("not a correct explanation") || t.includes("not correct explanation");
  const isExpl = t.includes("correct explanation") && !notExpl;
  if (bothTrue && isExpl) return "BOTH_EXPL";
  if (bothTrue && notExpl) return "BOTH_NOTEXPL";
  if (/a is true but r is false|a true.*r false/.test(t)) return "A_T_R_F";
  if (/a is false but r is true|a false.*r true/.test(t)) return "A_F_R_T";
  if (/both .* false|a is false and r is false/.test(t)) return "BOTH_FALSE";
  return "OTHER";
}
// derive intended verdict from explanation prose
function explVerdict(ex) {
  const t = ex.toLowerCase();
  const bothTrue = t.includes("both a and r are true") || (t.includes("both are true")) || (t.includes("a and r are true"));
  const notExpl = t.includes("not the correct explanation") || t.includes("does not explain") || t.includes("but r is not");
  if (bothTrue && notExpl) return "BOTH_NOTEXPL";
  if (bothTrue && (t.includes("r correctly explains") || t.includes("r explains a") || t.includes("correct explanation") || t.includes("r is the correct"))) return "BOTH_EXPL";
  if (bothTrue) return "BOTH_EXPL"; // default when both true and no "not"
  if (/a is true but r is false|assertion is true.*reason is false/.test(t)) return "A_T_R_F";
  if (/a is false but r is true|assertion is false.*reason is true/.test(t)) return "A_F_R_T";
  return null; // can't determine
}

const files = fs.readdirSync(dir).filter(f => /^da-\d/.test(f) && f.endsWith(".ts"));
let total = 0, flagged = 0;
for (const f of files) {
  for (const q of parse(path.join(dir, f))) {
    if (!/Assertion/i.test(q.q)) continue;
    total++;
    const markedV = verdict(q.opts[q.correct]);
    const exV = explVerdict(q.expl);
    if (exV && markedV !== "OTHER" && markedV !== exV) {
      flagged++;
      console.log(`[${q.id}] ${f}`);
      console.log(`  marked[${q.correct}] verdict=${markedV}: ${q.opts[q.correct]}`);
      console.log(`  expl verdict=${exV}: ${q.expl.slice(0, 110)}`);
    }
  }
}
console.log(`\nChecked ${total} Assertion questions | mismatches: ${flagged}`);
