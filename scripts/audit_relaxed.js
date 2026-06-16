/**
 * Stricter audit: for every non-Match/non-Assertion question, score each option
 * by how many of its distinctive content words appear in the explanation. Flag
 * when the marked-correct option's score is clearly beaten by another option
 * (gap >= 2). Catches wrong answers the zero-overlap audit misses.
 * Excludes the 35 already-verified false positives by id.
 */
const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "../src/data/questions");

const KNOWN_FP = new Set("d101l_062 d101x_019 d102l_102 d102l_121 d111l_085 d121l_031 d121l_033 d121l_049 d121l_117 d121_030 d121_069 d122l_053 d122l_073 d122l_119 d132l_053 d132l_083 d132x_047 d151l_057 d151_021 d151_095 d241l_026 d241l_069 d241x_012 d241_032 d241_057 d252y_015 d252_092 d262l_038 d262_038 d281l_077 d282_011 d291_043 d291_070".split(" "));

const stop = new Set("the and for with that from this are was its their which when what into only also than then due can not but all any these those such used use using more most some other same each per both cent over under within during because where while they them one two after before first second third type kind based given level value where between among lowest highest about approximately generally usually mainly primarily called known defined".split(" "));
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

function score(opt, ex, exn) {
  const w = words(opt), n = nums(opt);
  let s = w.filter(x => ex.includes(x)).length;
  // numbers count double (strong signal) but only if ALL present
  if (n.length && n.every(x => ex.includes(x) || exn.includes(x))) s += n.length * 2;
  else if (n.length) s -= 1; // a wrong number is a negative signal
  return s;
}

const files = fs.readdirSync(dir).filter(f => /^da-\d/.test(f) && f.endsWith(".ts"));
let flags = 0;
for (const f of files) {
  const qs = parse(path.join(dir, f));
  for (const q of qs) {
    if (/Match|Assertion/i.test(q.q)) continue;
    if (KNOWN_FP.has(q.id)) continue;
    const ex = q.expl.toLowerCase(); if (!ex) continue;
    const exn = ex.replace(/\s+/g, "");
    const scores = q.opts.map(o => score(o, ex, exn));
    const cs = scores[q.correct];
    const max = Math.max(...scores);
    const maxIdx = scores.indexOf(max);
    if (maxIdx !== q.correct && max - cs >= 1 && cs <= 1 && max >= 3) {
      flags++;
      const optLines = q.opts.map((o, i) => `      ${i === q.correct ? ">>" : (i === maxIdx ? "??" : "  ")}${i}(${scores[i]}): ${o}`).join("\n");
      console.log(`#### ${f} [${q.id}]\n  Q: ${q.q}\n${optLines}\n  EXP: ${q.expl}\n`);
    }
  }
}
console.log("Best-match flags (excluding known FPs): " + flags);
