/**
 * Dump questions of a given id-prefix from a question file for manual review.
 * Usage: node scripts/dump_series.js <file> <idRegex> <from> <to> [mode]
 *   mode: "reg" (default, skip Match/Assertion), "ma" (only Match/Assertion), "all"
 * Prints: [id] question => marked option   /   EXP: explanation
 */
const fs = require("fs");
const path = require("path");
const [, , file, idRe, fromS, toS, mode = "reg"] = process.argv;
const from = parseInt(fromS || "0"), to = parseInt(toS || "9999");
const rx = new RegExp(idRe);

function parse(fp) {
  const c = fs.readFileSync(fp, "utf8");
  const lines = c.split("\n");
  const qs = []; let i = 0;
  while (i < lines.length) {
    const idm = lines[i].match(/id:\s*"([^"]+)"/);
    if (!idm) { i++; continue; }
    const id = idm[1];
    if (!rx.test(id)) { i++; continue; }
    let q = "", opts = [], correct = -1, expl = "";
    for (let j = i + 1; j < Math.min(i + 45, lines.length); j++) {
      if (!q) { const m = lines[j].match(/question:\s*"((?:[^"\\]|\\.)*)"/); if (m) q = m[1]; }
      if (opts.length === 0 && /options:\s*\[/.test(lines[j])) {
        let b = "", d = 0;
        for (let k = j; k < Math.min(j + 14, lines.length); k++) { b += lines[k]; for (const ch of lines[k]) { if (ch === "[") d++; if (ch === "]") d--; } if (d === 0) break; }
        const re = /"((?:[^"\\]|\\.)*)"/g; let m; const f = []; while ((m = re.exec(b)) !== null) f.push(m[1]); opts = f.slice(0, 4);
      }
      if (correct === -1) { const m = lines[j].match(/correct:\s*(\d)/); if (m) correct = parseInt(m[1]); }
      if (!expl) { const m = lines[j].match(/explanation:\s*"((?:[^"\\]|\\.)*)"/); if (m) expl = m[1]; }
      if (j > i + 2 && /^\s+id:\s*"/.test(lines[j])) break;
    }
    if (opts.length >= 4 && correct >= 0) qs.push({ id, q, opts, correct, expl });
    i++;
  }
  return qs;
}

let qs = parse(path.join(__dirname, "../src/data/questions/", file));
const isMA = q => /Match|Assertion/i.test(q.q);
if (mode === "reg") qs = qs.filter(q => !isMA(q));
else if (mode === "ma") qs = qs.filter(isMA);
// numeric index within the series (by trailing number)
qs = qs.filter(q => { const n = parseInt((q.id.match(/(\d+)$/) || [0, 0])[1]); return n >= from && n <= to; });
console.log("count:", qs.length);
for (const q of qs) {
  console.log("[" + q.id + "] " + q.q.replace(/\\n/g, " ").slice(0, 56) + " => [" + q.correct + "] " + q.opts[q.correct].slice(0, 36));
  console.log("   EXP: " + q.expl.replace(/\\n/g, " ").slice(0, 90));
}
