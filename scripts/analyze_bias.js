const fs = require('fs');
const path = 'C:/Users/bioas/Agricet Mock Test Series/src/data/';

let worstCases = [];
let total = 0, biasedCount = 0;
let perTest = {};

for(let i=1;i<=10;i++){
  const content = fs.readFileSync(path+'grandTest'+i+'.ts','utf8');
  const optRe = /options:\s*\[([^\]]+)\]/g;
  const corrRe = /correct:\s*(\d)/g;
  const optBlocks = [];
  const corrects = [];
  let m;
  while((m=optRe.exec(content))!==null) optBlocks.push(m[1]);
  while((m=corrRe.exec(content))!==null) corrects.push(parseInt(m[1]));

  let biased = 0;
  optBlocks.forEach((block, idx) => {
    // parse quoted strings
    const opts = [];
    const re2 = /"([^"]*)"/g;
    let m2;
    while((m2=re2.exec(block))!==null) opts.push(m2[1]);
    if(opts.length!==4) return;
    const c = corrects[idx];
    if(c===undefined || c>3) return;
    total++;
    const lens = opts.map(o=>o.length);
    const correctLen = lens[c];
    const othersMax = Math.max(...lens.filter((_,j)=>j!==c));
    const ratio = correctLen / Math.max(othersMax,1);
    if(ratio > 1.5){
      biasedCount++;
      biased++;
      worstCases.push({gt:i, idx, ratio:ratio.toFixed(2), correctLen, othersMax, opts, c});
    }
  });
  perTest['GT'+i] = biased;
}

console.log('=== LONGEST-OPTION BIAS ANALYSIS ===');
console.log('Correct is 50%+ longer than all wrong options: '+biasedCount+'/'+total+' ('+(biasedCount/total*100).toFixed(1)+'%)');
console.log('Per test:', JSON.stringify(perTest));
console.log('\nTop 5 worst examples:');
worstCases.sort((a,b)=>b.ratio-a.ratio).slice(0,5).forEach(c=>{
  console.log('  GT'+c.gt+' Q'+(c.idx+1)+': ratio='+c.ratio);
  c.opts.forEach((o,i)=>console.log('    '+(i===c.c?'[CORRECT]':'[wrong]  ')+' ('+o.length+'): '+o.slice(0,80)));
});
