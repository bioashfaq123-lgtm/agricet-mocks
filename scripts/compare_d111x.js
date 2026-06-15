const fs = require("fs");
const path = require("path");

function extractQuestions(file) {
  const content = fs.readFileSync(file, "utf8");
  const lines = content.split("\n");
  const result = {};
  let i = 0;
  while (i < lines.length) {
    const idMatch = lines[i].match(/id:\s*"(d111x_\d+)"/);
    if (!idMatch) { i++; continue; }
    const id = idMatch[1];
    let opts = null, correct = -1, expl = "";
    for (let j = i + 1; j < Math.min(i + 20, lines.length); j++) {
      if (!opts && /options:\s*\[/.test(lines[j])) {
        let block = "", depth = 0;
        for (let k = j; k < j + 8; k++) {
          block += lines[k];
          for (const ch of lines[k]) {
            if (ch === "[") depth++;
            if (ch === "]") depth--;
          }
          if (depth === 0) break;
        }
        const matches = [];
        let re = /"((?:[^"\\]|\\.)*)"/g, m;
        while ((m = re.exec(block)) !== null) matches.push(m[1]);
        if (matches.length === 4) opts = matches;
      }
      const cm = lines[j].match(/correct:\s*(\d)/);
      if (cm && correct === -1) correct = parseInt(cm[1]);
      const em = lines[j].match(/explanation:\s*"((?:[^"\\]|\\.)*)"/);
      if (em && !expl) expl = em[1];
      if (j > i + 2 && /^\s+id:\s*"/.test(lines[j])) break;
    }
    if (opts && correct >= 0) {
      result[id] = { opts, correct, expl: expl.substring(0, 80) };
    }
    i++;
  }
  return result;
}

const lecFile = path.join(__dirname, "../src/data/questions/da-111-lectures.ts");
const mainFile = path.join(__dirname, "../src/data/questions/da-111.ts");

const lec = extractQuestions(lecFile);
const main = extractQuestions(mainFile);

console.log("=== Option-order mismatches (d111x) ===");
let fixes = [];
for (const id of Object.keys(lec).sort()) {
  if (!main[id]) continue;
  const lq = lec[id];
  const mq = main[id];
  const lOpt = lq.opts[lq.correct];
  const mOpt = mq.opts[mq.correct];
  if (lOpt !== mOpt) {
    // Find which option in lec matches mOpt (the correct one from main)
    const correctOptText = mOpt;
    const newCorrectIdx = lq.opts.indexOf(correctOptText);
    console.log(`[${id}] MISMATCH:`);
    console.log(`  lec: correct:${lq.correct} -> "${lOpt}" WRONG`);
    console.log(`  main: correct:${mq.correct} -> "${mOpt}" CORRECT`);
    console.log(`  Fix lec: ${lq.correct} -> ${newCorrectIdx}`);
    console.log(`  Expl: ${lq.expl}`);
    if (newCorrectIdx >= 0) fixes.push({ id, from: lq.correct, to: newCorrectIdx });
  }
}

if (fixes.length === 0) {
  console.log("No mismatches found!");
} else {
  console.log(`\nTotal: ${fixes.length} fixes needed in da-111-lectures.ts`);
  console.log(JSON.stringify(fixes, null, 2));
}
