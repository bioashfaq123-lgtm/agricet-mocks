const fs = require("fs");
const path = require("path");

const qDir = path.join(__dirname, "../src/data/questions");
const files = fs.readdirSync(qDir).filter(f => f.endsWith(".ts") && f !== "index.ts");

let totalQ = 0, biasedQ = 0;
const fileStats = [];

for (const fname of files) {
  const content = fs.readFileSync(path.join(qDir, fname), "utf8");

  // Extract all questions: find options arrays and correct values
  const qBlocks = [];

  // Multi-line format
  const mlRegex = /options:\s*\[([\s\S]*?)\],?\s*\n\s*correct:\s*(\d)/g;
  let m;
  while ((m = mlRegex.exec(content)) !== null) {
    const optStr = m[1];
    const correct = parseInt(m[2]);
    const opts = [...optStr.matchAll(/"((?:[^"\\]|\\.)*)"/g)].map(x => x[1]);
    if (opts.length === 4) qBlocks.push({ opts, correct });
  }

  // Single-line format
  const slRegex = /options:\[(.*?)\],\s*correct:(\d)/g;
  while ((m = slRegex.exec(content)) !== null) {
    const optStr = m[1];
    const correct = parseInt(m[2]);
    const opts = [...optStr.matchAll(/"((?:[^"\\]|\\.)*)"/g)].map(x => x[1]);
    if (opts.length === 4) qBlocks.push({ opts, correct });
  }

  let fileBias = 0;
  for (const { opts, correct } of qBlocks) {
    const correctLen = opts[correct].length;
    const wrongLens = opts.filter((_, i) => i !== correct).map(o => o.length);
    const avgWrong = wrongLens.reduce((a, b) => a + b, 0) / 3;
    // Flag if correct is >40% longer than average wrong option
    if (correctLen > avgWrong * 1.4 && correctLen - avgWrong > 20) fileBias++;
  }

  fileStats.push({ fname, total: qBlocks.length, biased: fileBias, pct: qBlocks.length ? Math.round(fileBias*100/qBlocks.length) : 0 });
  totalQ += qBlocks.length;
  biasedQ += fileBias;
}

fileStats.sort((a, b) => b.pct - a.pct);
console.log("File                          | Total | Biased | %");
console.log("-".repeat(60));
for (const s of fileStats) {
  const flag = s.pct > 20 ? "⚠️ " : "✅ ";
  console.log(`${flag}${s.fname.padEnd(30)}| ${String(s.total).padStart(5)} | ${String(s.biased).padStart(6)} | ${s.pct}%`);
}
console.log(`\nTotal: ${totalQ} questions, ${biasedQ} length-biased (${Math.round(biasedQ*100/totalQ)}%)`);
