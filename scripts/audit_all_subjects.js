/**
 * Comprehensive answer-vs-explanation audit across ALL subject files.
 * Flags non-Match/non-Assertion questions where the correct option shares NO
 * keyword/number with its explanation but a distractor does — the strongest
 * signal of a genuinely wrong answer (e.g. the earlier d111x_050 case).
 */
const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "../src/data/questions");

const stop = new Set("the and for with that from this are was its their which when what into only also than then due can not but all any these those such used use using more most some other same each per both cent into over under within during because where while they them one two both after before first second third type kind based given".split(" "));
const words = s => s.toLowerCase().replace(/[^a-z]/g, " ").split(/\s+/).filter(w => w.length >= 4 && !stop.has(w));
const nums = s => (s.toLowerCase().match(/\d+(?:\.\d+)?/g) || []);

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

const files = fs.readdirSync(dir).filter(f => /^da-\d/.test(f) && f.endsWith(".ts"));
let totalChecked = 0, totalFlags = 0;
const flagsBySubject = {};
for (const f of files) {
  const qs = parse(path.join(dir, f));
  for (const q of qs) {
    if (/Match|Assertion/i.test(q.q)) continue;
    const opt = q.opts[q.correct];
    if (!opt) continue;
    const ex = q.expl.toLowerCase(), exn = ex.replace(/\s+/g, "");
    if (!ex) continue;
    totalChecked++;
    const cw = words(opt), cn = nums(opt);
    const wHit = cw.some(w => ex.includes(w));
    const nHit = cn.length ? cn.every(n => ex.includes(n) || exn.includes(n)) : true;
    const correctSupported = (cw.length === 0 ? true : wHit) && nHit;
    if (correctSupported) continue;
    // correct answer NOT supported — is a distractor supported?
    let altIdx = -1;
    for (let oi = 0; oi < 4; oi++) {
      if (oi === q.correct) continue;
      const ow = words(q.opts[oi]), on = nums(q.opts[oi]);
      if (ow.length && ow.some(w => ex.includes(w)) && (on.length ? on.every(n => ex.includes(n) || exn.includes(n)) : true)) { altIdx = oi; break; }
    }
    if (altIdx !== -1) {
      totalFlags++;
      const optLines = q.opts.map((o, i) => `        ${i === q.correct ? ">>" : "  "}${i}: ${o}`).join("\n");
      (flagsBySubject[f] = flagsBySubject[f] || []).push(
        `[${q.id}] ${q.q}\n${optLines}\n      EXP: ${q.expl}`);
    }
  }
}
console.log("Checked " + totalChecked + " factual questions across " + files.length + " files");
console.log("Total flags (correct unsupported, distractor supported): " + totalFlags + "\n");
for (const [f, flags] of Object.entries(flagsBySubject)) {
  console.log("#### " + f + " (" + flags.length + ") ####");
  flags.forEach(x => console.log("  " + x));
  console.log();
}
