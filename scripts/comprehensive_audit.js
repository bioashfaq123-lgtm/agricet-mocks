/**
 * Single comprehensive audit combining all signals with number normalisation.
 * For EVERY non-Match/non-Assertion question it scores each option against the
 * explanation and reports any where the marked option is NOT the best match,
 * sorted by confidence (gap). Number words -> digits, trailing zeros stripped,
 * so "two"/"2" and "0.20"/"0.2" match. Question type is shown to aid review.
 */
const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "../src/data/questions");

const NUMWORDS = { zero:0,one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,eleven:11,twelve:12,thirteen:13,fourteen:14,fifteen:15,sixteen:16,seventeen:17,eighteen:18,nineteen:19,twenty:20,thirty:30,forty:40,fifty:50,sixty:60,seventy:70,eighty:80,ninety:90,hundred:100,thousand:1000 };
function normNum(s) {
  let t = s.toLowerCase();
  for (const [w, d] of Object.entries(NUMWORDS)) t = t.replace(new RegExp("\\b" + w + "\\b", "g"), " " + d + " ");
  return t;
}
const stripZeros = n => n.replace(/(\.\d*?)0+\b/, "$1").replace(/\.$/, "").replace(/^(\d+)\.0$/, "$1");
const numsOf = s => (s.match(/\d+(?:\.\d+)?/g) || []).map(stripZeros);

const stop = new Set("the and for with that from this are was its their which when what into only also than then due can not but all any these those such used use using more most some other same each per both cent over under within during because where while they them one two after before first second third type kind based given level value between among lowest highest about approximately generally usually mainly primarily called known defined refers means used".split(" "));
const words = s => normNum(s).toLowerCase().replace(/[^a-z0-9]/g, " ").split(/\s+/).filter(w => w.length >= 4 && !stop.has(w));

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
    if (opts.length >= 4 && correct >= 0 && q) qs.push({ id, q, opts, correct, expl, file: path.basename(file) });
    i++;
  }
  return qs;
}

function score(opt, exWords, exNums, exNorm) {
  const w = words(opt), n = numsOf(opt);
  let s = w.filter(x => exWords.has(x)).length;
  for (const num of n) { if (exNums.has(num) || exNorm.includes(num)) s += 3; else s -= 3; }
  return s;
}

const files = fs.readdirSync(dir).filter(f => /^da-\d/.test(f) && f.endsWith(".ts"));
const flags = [];
for (const f of files) {
  for (const q of parse(path.join(dir, f))) {
    if (/Match|Assertion/i.test(q.q)) continue;
    const exNorm = normNum(q.expl).toLowerCase();
    const exWords = new Set(words(q.expl));
    const exNums = new Set(numsOf(q.expl));
    const scores = q.opts.map(o => score(o, exWords, exNums, exNorm));
    const cs = scores[q.correct];
    const best = Math.max(...scores);
    const bestIdx = scores.indexOf(best);
    if (bestIdx === q.correct) continue;
    const gap = best - cs;
    const isExcl = /\bnot\b|except|false|incorrect/i.test(q.q);
    const hasAllBoth = q.opts.some(o => /all of the above|none of the above|both a and|both of/i.test(o));
    flags.push({ ...q, scores, cs, best, bestIdx, gap, isExcl, hasAllBoth });
  }
}
flags.sort((a, b) => b.gap - a.gap);
console.log("Total questions where marked != best-match: " + flags.length + "\n");
for (const q of flags) {
  const tag = q.isExcl ? "[NOT/EXCEPT]" : q.hasAllBoth ? "[ALL/BOTH]" : "[normal]";
  console.log(`gap=${q.gap} ${tag} [${q.id}] ${q.file}`);
  console.log(`  Q: ${q.q.slice(0, 80)}`);
  q.opts.forEach((o, i) => console.log(`    ${i === q.correct ? ">>" : (i === q.bestIdx ? "??" : "  ")}${i}(${q.scores[i]}): ${o.slice(0, 60)}`));
  console.log(`  EXP: ${q.expl.slice(0, 120)}`);
}
