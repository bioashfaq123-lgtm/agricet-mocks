/**
 * Fixes genuinely wrong `correct` indices in da-121 (Soil Science) where the
 * marked answer contradicts the (correct) explanation. For each id, the correct
 * option is identified by a distinctive substring; the index is set to that
 * option in BOTH da-121.ts and da-121-lectures.ts.
 */
const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "../src/data/questions");

// id -> distinctive substring of the option that matches the explanation
const FIX = {
  d121x_002: "Dokuchaev",
  d121x_005: "25% water",
  d121x_012: "Granular",
  d121x_026: "Clay and humus",
  d121x_029: "Aluminium",
  d121x_030: "Fe, Mn, Zn",
  d121x_049: "Methane",
  d121x_051: "Sodium chloride and sodium sulphate",
  d121x_052: "Himalayan foothills",
  d121x_055: "H2PO4- and HPO4",
};

for (const file of ["da-121.ts", "da-121-lectures.ts"]) {
  const fp = path.join(dir, file);
  let content = fs.readFileSync(fp, "utf8");
  let fixed = 0;
  for (const [id, needle] of Object.entries(FIX)) {
    const idIdx = content.indexOf(`id: "${id}"`);
    if (idIdx === -1) { console.log(`  ${id} not in ${file}`); continue; }
    let end = content.indexOf('id: "', idIdx + 10);
    if (end === -1) end = content.length;
    let block = content.substring(idIdx, end);
    const om = block.match(/options:\s*\[([\s\S]*?)\],(\s*\n\s*)correct:\s*(\d)/);
    if (!om) { console.log(`  parse fail ${id} ${file}`); continue; }
    const opts = []; const re = /"((?:[^"\\]|\\.)*)"/g; let m;
    while ((m = re.exec(om[1])) !== null) opts.push(m[1]);
    const target = opts.findIndex(o => o.includes(needle));
    const current = parseInt(om[3]);
    if (target === -1) { console.log(`  needle '${needle}' not found for ${id} in ${file} (opts: ${JSON.stringify(opts.map(o=>o.slice(0,20)))})`); continue; }
    if (target === current) continue; // already correct
    const newBlock = block.replace(/(options:\s*\[[\s\S]*?\],\s*\n\s*correct:\s*)\d/, `$1${target}`);
    content = content.substring(0, idIdx) + newBlock + content.substring(end);
    console.log(`  ${file} [${id}] correct ${current} -> ${target} (${opts[target].slice(0,30)})`);
    fixed++;
  }
  fs.writeFileSync(fp, content, "utf8");
  console.log(`${file}: ${fixed} answers fixed\n`);
}
