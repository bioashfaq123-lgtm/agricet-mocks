/**
 * Rebalances the correct-answer position of a given set of question IDs so the
 * answer is not predictably at A/B. For each subject's list, target positions
 * are assigned round-robin (0,1,2,3,...) and the correct option is swapped into
 * that slot, updating the `correct` index. Only reorders options — content
 * unchanged, so answers still match explanations.
 */
const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "../src/data/questions");

// subject file -> list of ids to rebalance (in order)
const TARGETS = {
  "da-101-lectures.ts": range("d101l_", 141, 150),
  "da-102-lectures.ts": range("d102l_", 151, 158),
  "da-121-lectures.ts": range("d121l_", 151, 159),
  "da-122-lectures.ts": range("d122l_", 151, 159),
};
function range(p, a, b){ const r=[]; for(let i=a;i<=b;i++) r.push(p+String(i).padStart(3,"0")); return r; }

function parseOptions(block){
  const m = block.match(/options:\s*\[([\s\S]*?)\],\s*\n\s*correct:/);
  if(!m) return null;
  const re=/"((?:[^"\\]|\\.)*)"/g; let x; const opts=[];
  while((x=re.exec(m[1]))!==null) opts.push(x[1]);
  return opts.length===4 ? opts : null;
}

for (const [fname, ids] of Object.entries(TARGETS)) {
  const file = path.join(dir, fname);
  let content = fs.readFileSync(file, "utf8");
  let t = 0;
  for (const id of ids) {
    const idIdx = content.indexOf(`id: "${id}"`);
    if (idIdx === -1) { console.log("not found "+id); continue; }
    let end = content.indexOf('id: "', idIdx + 10);
    if (end === -1) end = content.length;
    let block = content.substring(idIdx, end);
    const opts = parseOptions(block);
    const cm = block.match(/correct:\s*(\d)/);
    if (!opts || !cm) { console.log("parse fail "+id); continue; }
    const correct = parseInt(cm[1]);
    const correctText = opts[correct];
    const target = t % 4; t++;
    if (correct === target) continue; // already balanced
    // swap correct option into target slot
    const newOpts = opts.slice();
    newOpts[correct] = newOpts[target];
    newOpts[target] = correctText;
    const optsStr = newOpts.map(o=>JSON.stringify(o)).join(", ");
    block = block.replace(/options:\s*\[[\s\S]*?\],(\s*\n\s*)correct:\s*\d/, `options: [${optsStr}],$1correct: ${target}`);
    content = content.substring(0, idIdx) + block + content.substring(end);
  }
  fs.writeFileSync(file, content, "utf8");
  console.log("rebalanced "+fname);
}
