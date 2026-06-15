/**
 * Detailed analysis: for every question where the correct option is the
 * LONGEST option, show what it looks like and why it's hard to fix.
 */
const fs = require('fs');
const BASE = 'C:/Users/bioas/Agricet Mock Test Series/src/data/';

const GRAND = Array.from({length:10}, (_,i) => `grandTest${i+1}.ts`);
const AEO   = ['aeo-2016.ts','aeo-2017.ts','aeo-paper1-gs.ts','aeo-paper2-agri.ts','aeo-pyq.ts'];
const ALL   = [...GRAND, ...AEO];

let totalQ = 0, longestIsCorrect = 0;
const fixable = [];   // stripped paren would help
const structural = []; // need to rewrite distractors

const re2 = /"([^"]*)"/g;

function stripParen(text) {
  let t = text.replace(/\s*\([^)]{3,}\)\s*$/, '').trim();
  t = t.replace(/\s*[–\-—]\s*.{5,}$/, '').trim();
  return t;
}

for (const fname of ALL) {
  let content;
  try { content = fs.readFileSync(BASE + fname, 'utf8'); } catch { continue; }

  const optRe  = /options:\s*\[([^\]]+)\]/g;
  const corrRe = /correct:\s*(\d)/g;
  const blocks = []; const corrects = [];
  let m;
  while ((m = optRe.exec(content))  !== null) blocks.push(m[1]);
  while ((m = corrRe.exec(content)) !== null) corrects.push(parseInt(m[1]));

  blocks.forEach((block, idx) => {
    const opts = [];
    re2.lastIndex = 0;
    let m2;
    while ((m2 = re2.exec(block)) !== null) opts.push(m2[1]);
    if (opts.length !== 4) return;
    const c = corrects[idx];
    if (c === undefined || c > 3) return;
    totalQ++;

    const lens = opts.map(o => o.length);
    const correctLen = lens[c];
    const othersMax  = Math.max(...lens.filter((_,j) => j !== c));

    // Is correct the longest?
    if (correctLen <= othersMax) return;

    longestIsCorrect++;
    const ratio = correctLen / Math.max(othersMax, 1);

    // Can stripping paren fix it?
    const stripped = stripParen(opts[c]);
    const strippedRatio = stripped.length / Math.max(othersMax, 1);
    const canStripFix = stripped !== opts[c] && stripped.length >= 3 && strippedRatio <= 1.15;

    // Can expanding short distractors fix it?
    const shortWrongs = opts.filter((_,j) => j !== c && opts[j].split(' ').length <= 3 && opts[j].length <= 20).length;
    const canExpandFix = shortWrongs >= 2;

    const entry = { file: fname, qNum: idx+1, ratio: ratio.toFixed(2),
                    correct: opts[c], wrong: opts.filter((_,j)=>j!==c), canStripFix, canExpandFix };

    if (canStripFix || (ratio > 1.0 && ratio <= 1.3)) fixable.push(entry);
    else structural.push(entry);
  });
}

console.log(`=== LONGEST-OPTION = CORRECT ANALYSIS ===`);
console.log(`Total questions: ${totalQ}`);
console.log(`Correct IS longest option: ${longestIsCorrect}/${totalQ} (${(longestIsCorrect/totalQ*100).toFixed(1)}%)`);
console.log(`  → Fixable by stripping paren: ${fixable.length}`);
console.log(`  → Structural (need distractor rewrite): ${structural.length}`);

console.log(`\n--- TOP STRUCTURAL CASES (hardest to fix, worst ratio) ---`);
structural.sort((a,b)=>b.ratio-a.ratio).slice(0,15).forEach(e=>{
  console.log(`\n[${e.file}] Q${e.qNum} (ratio=${e.ratio})`);
  console.log(`  CORRECT: "${e.correct.slice(0,90)}"`);
  e.wrong.forEach(w => console.log(`  wrong:   "${w.slice(0,90)}"`));
});

console.log(`\n--- FIXABLE CASES (strip trailing text) ---`);
fixable.slice(0,10).forEach(e=>{
  const stripped = stripParen(e.correct);
  console.log(`\n[${e.file}] Q${e.qNum}`);
  console.log(`  Before: "${e.correct.slice(0,90)}"`);
  console.log(`  After:  "${stripped.slice(0,90)}"`);
  e.wrong.forEach(w => console.log(`  wrong:  "${w.slice(0,60)}"`));
});
