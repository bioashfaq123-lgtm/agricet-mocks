/**
 * Fixes the genuine wrong-answer flags found by audit_all_subjects.js
 * (beyond the da-121 batch already fixed). For each, correct option is the one
 * matching the explanation, identified by a distinctive substring.
 */
const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "../src/data/questions");

// [file, id, substring of correct option]
const FIXES = [
  ["da-121.ts", "d121x_058", "die-back of shoots"],
  ["da-121-lectures.ts", "d121x_058", "die-back of shoots"],
  ["da-122-lectures.ts", "d122l_039", "200"],            // explanation says 100-300; closest option is 200-300
  ["da-281-lectures.ts", "d281l_079", "5 million ha"],   // GIM: increase cover by 5 m ha
  ["da-151.ts", "d151_017", "Fluted roller"],
  ["da-252-lectures.ts", "d252z_021", "Concrete (cement"], // explanation: concrete most widely used
  ["da-252.ts", "d252_024", "Length-wise with single"],    // field book opens lengthwise
];

for (const [file, id, needle] of FIXES) {
  const fp = path.join(dir, file);
  let content = fs.readFileSync(fp, "utf8");
  const idIdx = content.indexOf(`id: "${id}"`);
  if (idIdx === -1) { console.log(`  ${id} not in ${file}`); continue; }
  let end = content.indexOf('id: "', idIdx + 10);
  if (end === -1) end = content.length;
  let block = content.substring(idIdx, end);
  const om = block.match(/options:\s*\[([\s\S]*?)\],(\s*\n\s*)correct:\s*(\d)/);
  if (!om) { console.log(`  parse fail ${id}`); continue; }
  const opts = []; const re = /"((?:[^"\\]|\\.)*)"/g; let m;
  while ((m = re.exec(om[1])) !== null) opts.push(m[1]);
  const target = opts.findIndex(o => o.includes(needle));
  const current = parseInt(om[3]);
  if (target === -1) { console.log(`  '${needle}' not found ${id}: ${JSON.stringify(opts.map(o=>o.slice(0,18)))}`); continue; }
  if (target === current) { console.log(`  ${id} already ${target}`); continue; }
  block = block.replace(/(options:\s*\[[\s\S]*?\],\s*\n\s*correct:\s*)\d/, `$1${target}`);
  content = content.substring(0, idIdx) + block + content.substring(end);
  fs.writeFileSync(fp, content, "utf8");
  console.log(`  ${file} [${id}] correct ${current} -> ${target} (${opts[target].slice(0,35)})`);
}
