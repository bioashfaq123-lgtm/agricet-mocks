/**
 * Fixes all genuine wrong answers found by the best-match audit (manually
 * verified — each marked option contradicts its explanation). For each [id,
 * needle], finds the option containing needle in EVERY da-* file that has the
 * id and sets `correct` to that option's index. Prints every change.
 */
const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "../src/data/questions");

const FIXES = [
  // da-121 d121x_ series (present in da-121.ts AND da-121-lectures.ts)
  ["d121x_004", "45%"],
  ["d121x_013", "Total volume"],
  ["d121x_015", "1 - BD/PD"],
  ["d121x_019", "gaseous nitrogen"],
  ["d121x_020", "immobilization"],
  ["d121x_021", "10:1"],
  ["d121x_023", "large surface area"],
  ["d121x_024", "Exchange or substitute"],
  ["d121x_028", "6-7.5"],
  ["d121x_035", "Vertisols"],
  ["d121x_039", "Yellowing (chlorosis)"],
  ["d121x_041", "Brown scorching"],
  ["d121x_054", "NO3-"],
  ["d121x_061", "Describe soil color"],
  ["d121x_062", "enters the soil"],
  ["d121x_063", "Compaction"],
  ["d121x_065", "trap long-wave"],
  ["d121x_068", "existing nutrient levels"],
  ["d121x_070", "Basic cations"],
  // other subjects
  ["d171z_004", "Soil-borne fungal pathogens"],
  ["d201x_040", "Linoleic acid"],
  ["d241c_039", "Variable costs"],
  ["d252_014", "Red and white"],
  ["d252_048", "Zero or negligible"],
  ["d252_070", "35°C"],
  ["d291_078", "Issuing of land records"],
];

const files = fs.readdirSync(dir).filter(f => /^da-\d/.test(f) && f.endsWith(".ts"));
let totalFixed = 0;
for (const [id, needle] of FIXES) {
  let found = false;
  for (const file of files) {
    const fp = path.join(dir, file);
    let content = fs.readFileSync(fp, "utf8");
    const idIdx = content.indexOf(`id: "${id}"`);
    if (idIdx === -1) continue;
    found = true;
    let end = content.indexOf('id: "', idIdx + 10);
    if (end === -1) end = content.length;
    let block = content.substring(idIdx, end);
    const om = block.match(/options:\s*\[([\s\S]*?)\],(\s*\n\s*)correct:\s*(\d)/);
    if (!om) { console.log(`  parse fail ${id} in ${file}`); continue; }
    const opts = []; const re = /"((?:[^"\\]|\\.)*)"/g; let m;
    while ((m = re.exec(om[1])) !== null) opts.push(m[1]);
    const target = opts.findIndex(o => o.includes(needle));
    const current = parseInt(om[3]);
    if (target === -1) { console.log(`  '${needle}' NOT FOUND ${id} in ${file}: ${JSON.stringify(opts.map(o=>o.slice(0,22)))}`); continue; }
    if (target === current) { continue; }
    block = block.replace(/(options:\s*\[[\s\S]*?\],\s*\n\s*correct:\s*)\d/, `$1${target}`);
    content = content.substring(0, idIdx) + block + content.substring(end);
    fs.writeFileSync(fp, content, "utf8");
    console.log(`  ${file} [${id}] ${current} -> ${target}  (${opts[target].slice(0,40)})`);
    totalFixed++;
  }
  if (!found) console.log(`  ${id} not found in any file`);
}
console.log("\nTotal answer indices fixed: " + totalFixed);
