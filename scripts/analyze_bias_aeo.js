const fs = require('fs');
const BASE = 'C:/Users/bioas/Agricet Mock Test Series/src/data/';

const FILES = [
  'aeo-2016.ts',
  'aeo-2017.ts',
  'aeo-paper1-gs.ts',
  'aeo-paper2-agri.ts',
  'aeo-pyq.ts',
];

let worstCases = [];
let totalAll = 0, biasedAll = 0;

for (const fname of FILES) {
  let content;
  try { content = fs.readFileSync(BASE + fname, 'utf8'); }
  catch(e) { console.log('SKIP (not found):', fname); continue; }

  const optRe  = /options:\s*\[([^\]]+)\]/g;
  const corrRe = /correct:\s*(\d)/g;
  const optBlocks = [];
  const corrects  = [];
  let m;
  while ((m = optRe.exec(content))  !== null) optBlocks.push(m[1]);
  while ((m = corrRe.exec(content)) !== null) corrects.push(parseInt(m[1]));

  // A/B/C/D distribution
  const dist = [0,0,0,0];
  let biased = 0, total = 0;
  const re2 = /"([^"]*)"/g;

  optBlocks.forEach((block, idx) => {
    const opts = [];
    let m2;
    re2.lastIndex = 0;
    while ((m2 = re2.exec(block)) !== null) opts.push(m2[1]);
    if (opts.length !== 4) return;
    const c = corrects[idx];
    if (c === undefined || c > 3) return;
    total++;
    dist[c]++;
    const lens = opts.map(o => o.length);
    const correctLen = lens[c];
    const othersMax  = Math.max(...lens.filter((_, j) => j !== c));
    const ratio = correctLen / Math.max(othersMax, 1);
    if (ratio > 1.5) {
      biased++;
      biasedAll++;
      worstCases.push({ file: fname, idx, ratio: ratio.toFixed(2), opts, c });
    }
  });

  totalAll += total;
  const pct = total > 0 ? (biased/total*100).toFixed(1) : '0.0';
  console.log(`\n[${fname}]`);
  console.log(`  Questions: ${total}`);
  console.log(`  A/B/C/D distribution: ${dist[0]}/${dist[1]}/${dist[2]}/${dist[3]}`);
  console.log(`  Longest=correct bias (ratio>1.5): ${biased}/${total} (${pct}%)`);
}

console.log(`\n=== TOTAL ACROSS ALL AEO FILES ===`);
console.log(`Longest-option bias: ${biasedAll}/${totalAll} (${(biasedAll/totalAll*100).toFixed(1)}%)`);
console.log(`\nTop 8 worst examples:`);
worstCases.sort((a,b) => b.ratio - a.ratio).slice(0,8).forEach(c => {
  console.log(`  [${c.file}] Q${c.idx+1}: ratio=${c.ratio}`);
  c.opts.forEach((o,i) => console.log(`    ${i===c.c?'[CORRECT]':'[wrong]  '} (${o.length}): ${o.slice(0,80)}`));
});
