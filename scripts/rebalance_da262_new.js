/**
 * Rebalances correct-answer positions for d262l_109-126 (round-robin) and
 * verifies answers still match explanations.
 */
const fs = require("fs");
const path = require("path");
const file = path.join(__dirname, "../src/data/questions/da-262-lectures.ts");
const stop = new Set("the and for with that from this are was its their which when what into only also than then due can not but all any these those such used use using more most some other same each per both cent".split(" "));
const words = s => s.toLowerCase().replace(/[^a-z]/g, " ").split(/\s+/).filter(w => w.length >= 3 && !stop.has(w));

let content = fs.readFileSync(file, "utf8");
let t = 0;
for (let i = 109; i <= 126; i++) {
  const id = "d262l_" + i;
  const idIdx = content.indexOf(`id: "${id}"`);
  if (idIdx === -1) continue;
  let end = content.indexOf('id: "', idIdx + 10);
  if (end === -1) end = content.length;
  let block = content.substring(idIdx, end);
  const om = block.match(/options:\s*\[([\s\S]*?)\],(\s*\n\s*)correct:\s*(\d)/);
  if (!om) continue;
  const opts = []; const re = /"((?:[^"\\]|\\.)*)"/g; let m;
  while ((m = re.exec(om[1])) !== null) opts.push(m[1]);
  const correct = parseInt(om[3]);
  const target = (t++) % 4;
  if (correct === target) continue;
  const correctText = opts[correct];
  opts[correct] = opts[target];
  opts[target] = correctText;
  const optsStr = opts.map(o => JSON.stringify(o)).join(", ");
  block = block.replace(/options:\s*\[[\s\S]*?\],(\s*\n\s*)correct:\s*\d/, `options: [${optsStr}],$1correct: ${target}`);
  content = content.substring(0, idIdx) + block + content.substring(end);
}
fs.writeFileSync(file, content, "utf8");

// verify
const pos = [0, 0, 0, 0]; let bad = 0;
for (let i = 109; i <= 126; i++) {
  const idx = content.indexOf(`id: "d262l_${i}"`);
  if (idx === -1) continue;
  const area = content.substring(idx, idx + 800);
  const om = area.match(/options:\s*\[([\s\S]*?)\],\s*\n\s*correct:/);
  const cm = area.match(/correct:\s*(\d)/);
  const em = area.match(/explanation:\s*"((?:[^"\\]|\\.)*)"/);
  const opts = []; const re = /"((?:[^"\\]|\\.)*)"/g; let m;
  while ((m = re.exec(om[1])) !== null) opts.push(m[1]);
  const correct = parseInt(cm[1]); pos[correct]++;
  if (new Set(opts).size !== 4) { console.log("DUP opts d262l_" + i); bad++; }
  if (!words(opts[correct]).some(w => em[1].toLowerCase().includes(w))) { console.log("MISMATCH d262l_" + i + ": " + opts[correct]); bad++; }
}
console.log("Rebalanced d262l_109-126 -> A/B/C/D=" + pos.join("/") + ", problems=" + bad);
