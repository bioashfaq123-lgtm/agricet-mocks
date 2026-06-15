/**
 * Finds duplicate question text within each file (same question asked twice)
 */
const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "../src/data/questions");
const files = fs.readdirSync(dir).filter(f => f.endsWith(".ts") && f !== "index.ts");

for (const fname of files) {
  const content = fs.readFileSync(path.join(dir, fname), "utf8");
  const lines = content.split("\n");
  const questions = new Map(); // question text -> first id
  const dups = [];

  let i = 0;
  while (i < lines.length) {
    const idMatch = lines[i].match(/id:\s*"([^"]+)"/);
    if (!idMatch) { i++; continue; }
    const id = idMatch[1];
    for (let j = i + 1; j < Math.min(i + 15, lines.length); j++) {
      const qm = lines[j].match(/question:\s*"((?:[^"\\]|\\.)*)"/);
      if (qm) {
        const q = qm[1].toLowerCase().trim();
        if (questions.has(q)) {
          dups.push({ id, firstId: questions.get(q), q: q.substring(0, 60) });
        } else {
          questions.set(q, id);
        }
        break;
      }
    }
    i++;
  }

  if (dups.length > 0) {
    console.log(`\n=== ${fname} (${dups.length} duplicates) ===`);
    dups.forEach(d => console.log(`  [${d.id}] duplicate of [${d.firstId}]: "${d.q}"`));
  }
}
