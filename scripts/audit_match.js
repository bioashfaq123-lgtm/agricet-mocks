/**
 * Verifies "Match the following" questions across ALL subjects.
 * Parses the 3 columns, and for each Column-I item checks that the Column-II
 * and Column-III values assigned by the MARKED option are the ones associated
 * with that item in the EXPLANATION prose. Flags likely mismatches.
 */
const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "../src/data/questions");

const stop = new Set("the and for with that from this are was its their which when what into only also than then due can not but all any these those such used use using more most some other same each per both cent column".split(" "));
const words = s => s.toLowerCase().replace(/[^a-z0-9]/g, " ").split(/\s+/).filter(w => w.length >= 4 && !stop.has(w));

function parse(file) {
  const content = fs.readFileSync(file, "utf8");
  const lines = content.split("\n");
  const qs = []; let i = 0;
  while (i < lines.length) {
    const idm = lines[i].match(/id:\s*"([^"]+)"/);
    if (!idm) { i++; continue; }
    const id = idm[1];
    let q = "", opts = [], correct = -1, expl = "";
    for (let j = i + 1; j < Math.min(i + 45, lines.length); j++) {
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

// parse columns from question text
function parseColumns(q) {
  const text = q.replace(/\\n/g, "\n");
  const colI = {}, colII = {}, colIII = {};
  for (const line of text.split("\n")) {
    // split by | into up to 3 cells
    const cells = line.split("|").map(c => c.trim());
    for (const cell of cells) {
      let m;
      if ((m = cell.match(/^([A-D])[.)]\s*(.+)/))) colI[m[1]] = m[2].trim();
      else if ((m = cell.match(/^([1-4])[.)]\s*(.+)/))) colII[m[1]] = m[2].trim();
      else if ((m = cell.match(/^(i{1,3}|iv)[.)]\s*(.+)/i))) colIII[m[1].toLowerCase()] = m[2].trim();
    }
  }
  return { colI, colII, colIII };
}

// parse a mapping option "A-2-ii, B-1-i, ..." -> {A:{n:'2',r:'ii'},...}
function parseMap(opt) {
  const map = {};
  for (const m of opt.matchAll(/([A-D])\s*-\s*([1-4])\s*-\s*(i{1,3}|iv)/gi)) {
    map[m[1].toUpperCase()] = { n: m[2], r: m[3].toLowerCase() };
  }
  return map;
}

const files = fs.readdirSync(dir).filter(f => /^da-\d/.test(f) && f.endsWith(".ts"));
let total = 0, flagged = 0;
for (const f of files) {
  for (const q of parse(path.join(dir, f))) {
    if (!/Match/i.test(q.q)) continue;
    const { colI, colII, colIII } = parseColumns(q.q);
    const map = parseMap(q.opts[q.correct]);
    if (Object.keys(colI).length < 4 || Object.keys(map).length < 4) continue; // can't parse
    total++;
    const ex = q.expl.toLowerCase();
    let suspicious = [];
    for (const L of ["A", "B", "C", "D"]) {
      if (!map[L]) continue;
      const iWords = words(colI[L] || "");
      const iiText = colII[map[L].n] || "";
      const iiiText = colIII[map[L].r] || "";
      // find a distinctive word of colI[L] in explanation; check assigned ii/iii words appear near it
      // simpler: check that for THIS item, the assigned colII or colIII keyword co-occurs with the colI keyword in explanation
      const iiW = words(iiText), iiiW = words(iiiText);
      const iKey = iWords[0];
      if (!iKey || !ex.includes(iKey)) continue; // colI item not findable in expl
      // within a window after iKey in explanation, are ii/iii keywords present?
      const pos = ex.indexOf(iKey);
      const win = ex.slice(pos, pos + 120);
      const iiHit = iiW.length === 0 || iiW.some(w => win.includes(w)) || iiW.some(w => ex.includes(w));
      const iiiHit = iiiW.length === 0 || iiiW.some(w => win.includes(w)) || iiiW.some(w => ex.includes(w));
      // flag only if BOTH assigned values seem absent near the item (strong signal of wrong mapping)
      if (!iiHit && !iiiHit) suspicious.push(`${L}->${map[L].n}/${map[L].r} (${colI[L].slice(0,18)} -> ${iiText.slice(0,18)} / ${iiiText.slice(0,18)})`);
    }
    if (suspicious.length >= 2) {
      flagged++;
      console.log(`[${q.id}] ${f}`);
      console.log("  marked: " + q.opts[q.correct]);
      console.log("  suspicious: " + suspicious.join(" ; "));
      console.log("  exp: " + q.expl.slice(0, 130));
    }
  }
}
console.log(`\nChecked ${total} parseable Match questions | suspicious (>=2 unmatched pairings): ${flagged}`);
