/**
 * Finds and fixes questions where the same ID exists in both a -lectures.ts file
 * and a plain .ts file, but the options are in a different order, causing the
 * `correct` index to point to the wrong option in the lectures file.
 *
 * For each mismatch: uses the main .ts file's correct option TEXT as the authority,
 * then finds that text in the lectures file's option array and fixes the index.
 */
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "../src/data/questions");

function extractQuestions(file) {
  const content = fs.readFileSync(file, "utf8");
  const lines = content.split("\n");
  const result = {};
  let i = 0;
  while (i < lines.length) {
    const idMatch = lines[i].match(/id:\s*"([^"]+)"/);
    if (!idMatch) { i++; continue; }
    const id = idMatch[1];
    let opts = null, correct = -1, expl = "";
    for (let j = i + 1; j < Math.min(i + 25, lines.length); j++) {
      if (!opts && /options:\s*\[/.test(lines[j])) {
        let block = "", depth = 0;
        for (let k = j; k < Math.min(j + 10, lines.length); k++) {
          block += lines[k];
          for (const ch of lines[k]) {
            if (ch === "[") depth++;
            if (ch === "]") depth--;
          }
          if (depth === 0) break;
        }
        const matches = [];
        const re = /"((?:[^"\\]|\\.)*)"/g;
        let m;
        while ((m = re.exec(block)) !== null) matches.push(m[1]);
        if (matches.length === 4) opts = matches;
      }
      const cm = lines[j].match(/correct:\s*(\d)/);
      if (cm && correct === -1) correct = parseInt(cm[1]);
      const em = lines[j].match(/explanation:\s*"((?:[^"\\]|\\.)*)"/);
      if (em && !expl) expl = em[1];
      if (j > i + 2 && /^\s+id:\s*"/.test(lines[j])) break;
    }
    if (opts && correct >= 0 && correct <= 3) {
      result[id] = { opts, correct, expl: expl.substring(0, 80) };
    }
    i++;
  }
  return result;
}

function fixFile(lecFile, mainFile, prefix) {
  const lec = extractQuestions(lecFile);
  const main = extractQuestions(mainFile);

  let fixes = [];
  for (const id of Object.keys(lec).sort()) {
    if (!id.startsWith(prefix + "x_")) continue;
    if (!main[id]) continue;
    const lq = lec[id];
    const mq = main[id];
    const lOpt = lq.opts[lq.correct];
    const mOpt = mq.opts[mq.correct];
    if (lOpt === mOpt) continue; // already correct

    // Find the correct option text from main in the lec options
    const newIdx = lq.opts.indexOf(mOpt);
    if (newIdx === -1) {
      console.log(`  [${id}] Cannot fix: "${mOpt}" not found in lectures options`);
      continue;
    }
    fixes.push({ id, from: lq.correct, to: newIdx, correctOpt: mOpt });
  }

  if (fixes.length === 0) {
    console.log(`  No mismatches found for ${prefix}`);
    return 0;
  }

  let content = fs.readFileSync(lecFile, "utf8");
  let fixCount = 0;

  for (const { id, from, to, correctOpt } of fixes) {
    const idIdx = content.indexOf(`id: "${id}"`);
    if (idIdx === -1) continue;
    const area = content.substring(idIdx, idIdx + 500);
    const pat = new RegExp(`correct:\\s*${from}(?=[^0-9])`);
    if (!pat.test(area)) {
      console.log(`  [${id}] Pattern not found in area`);
      continue;
    }
    const newArea = area.replace(pat, `correct: ${to}`);
    content = content.substring(0, idIdx) + newArea + content.substring(idIdx + 500);
    console.log(`  Fixed [${id}] ${from}->${to} ("${correctOpt}")`);
    fixCount++;
  }

  if (fixCount > 0) {
    fs.writeFileSync(lecFile, content, "utf8");
    console.log(`  => Saved ${path.basename(lecFile)} (${fixCount} fixes)\n`);
  }
  return fixCount;
}

// Process all subjects
const pairs = [
  ["da-111-lectures.ts", "da-111.ts", "d111"],
  ["da-101-lectures.ts", "da-101.ts", "d101"],
  ["da-102-lectures.ts", "da-102.ts", "d102"],
  ["da-121-lectures.ts", "da-121.ts", "d121"],
  ["da-122-lectures.ts", "da-122.ts", "d122"],
  ["da-131-lectures.ts", "da-131.ts", "d131"],
  ["da-132-lectures.ts", "da-132.ts", "d132"],
  ["da-151-lectures.ts", "da-151.ts", "d151"],
  ["da-171-lectures.ts", "da-171.ts", "d171"],
  ["da-201-lectures.ts", "da-201.ts", "d201"],
  ["da-241-lectures.ts", "da-241.ts", "d241"],
  ["da-252-lectures.ts", "da-252.ts", "d252"],
  ["da-262-lectures.ts", "da-262.ts", "d262"],
  ["da-263-lectures.ts", "da-263.ts", "d263"],
  ["da-281-lectures.ts", "da-281.ts", "d281"],
  ["da-282-lectures.ts", "da-282.ts", "d282"],
  ["da-291-lectures.ts", "da-291.ts", "d291"],
];

let total = 0;
for (const [lecName, mainName, prefix] of pairs) {
  const lecPath = path.join(dir, lecName);
  const mainPath = path.join(dir, mainName);
  if (!fs.existsSync(lecPath) || !fs.existsSync(mainPath)) continue;
  console.log(`\n=== ${prefix} ===`);
  total += fixFile(lecPath, mainPath, prefix);
}

console.log(`\nTotal fixes applied: ${total}`);
