/**
 * Fixes remaining Cannot-Fix option-order mismatches across all subject pairs.
 * Uses fuzzy keyword matching: finds which option in the lectures file
 * best matches the main file's correct option text.
 * Also uses explanation-based verification as a secondary check.
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
    let opts = null, correct = -1, expl = "", question = "";
    for (let j = i + 1; j < Math.min(i + 30, lines.length); j++) {
      if (!question) {
        const qm = lines[j].match(/question:\s*"((?:[^"\\]|\\.)*)"/);
        if (qm) question = qm[1].substring(0, 100);
      }
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
        if (matches.length >= 4) opts = matches.slice(0, 4);
      }
      const cm = lines[j].match(/correct:\s*(\d)/);
      if (cm && correct === -1) correct = parseInt(cm[1]);
      const em = lines[j].match(/explanation:\s*"((?:[^"\\]|\\.)*)"/);
      if (em && !expl) expl = em[1];
      if (j > i + 2 && /^\s+id:\s*"/.test(lines[j])) break;
    }
    if (opts && correct >= 0 && correct <= 3) {
      result[id] = { opts, correct, expl, question };
    }
    i++;
  }
  return result;
}

// Normalize text for fuzzy comparison
function normalize(s) {
  return s.toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Score how well two option strings match
function matchScore(a, b) {
  const na = normalize(a);
  const nb = normalize(b);
  if (na === nb) return 1000;
  const wordsA = na.split(" ").filter(w => w.length > 2);
  const wordsB = new Set(nb.split(" ").filter(w => w.length > 2));
  const shared = wordsA.filter(w => wordsB.has(w));
  return shared.length;
}

// Also score option against explanation
function explanationScore(opt, expl) {
  const nOpt = normalize(opt);
  const nExpl = normalize(expl);
  const words = nOpt.split(" ").filter(w => w.length > 3);
  return words.filter(w => nExpl.includes(w)).length;
}

function fixFile(lecFile, mainFile, prefix) {
  const lec = extractQuestions(lecFile);
  const main = extractQuestions(mainFile);

  let fixes = [];
  for (const id of Object.keys(main).sort()) {
    if (!id.startsWith(prefix + "x_")) continue;
    if (!lec[id]) continue;
    const lq = lec[id];
    const mq = main[id];
    const lOpt = lq.opts[lq.correct];
    const mOpt = mq.opts[mq.correct];
    if (lOpt === mOpt) continue; // already correct

    // Exact match failed — try fuzzy matching
    const exactIdx = lq.opts.indexOf(mOpt);
    if (exactIdx !== -1) continue; // fix_option_order handles this

    // Find best matching option in lectures for main's correct option
    let bestIdx = -1, bestScore = 0;
    for (let oi = 0; oi < lq.opts.length; oi++) {
      const score = matchScore(mOpt, lq.opts[oi]);
      if (score > bestScore) {
        bestScore = score;
        bestIdx = oi;
      }
    }

    // Also check explanation-based scoring for all options
    const explScores = lq.opts.map(o => explanationScore(o, mq.expl));
    const explBestIdx = explScores.indexOf(Math.max(...explScores));

    // Confidence check
    let chosenIdx = -1;
    let method = "";
    if (bestScore >= 3) {
      // Fuzzy match has enough shared keywords
      chosenIdx = bestIdx;
      method = `fuzzy(score=${bestScore})`;
    } else if (bestIdx === explBestIdx && explScores[explBestIdx] >= 2) {
      // Both methods agree and explanation supports it
      chosenIdx = bestIdx;
      method = `fuzzy+expl(score=${bestScore},expl=${explScores[explBestIdx]})`;
    } else if (explScores[explBestIdx] >= 3 && lq.correct !== explBestIdx) {
      // Explanation strongly supports a different option
      chosenIdx = explBestIdx;
      method = `expl-only(score=${explScores[explBestIdx]})`;
    }

    if (chosenIdx !== -1 && chosenIdx !== lq.correct) {
      fixes.push({
        id, from: lq.correct, to: chosenIdx,
        mOpt, lecOpt: lq.opts[chosenIdx],
        method,
        q: lq.question.substring(0, 60)
      });
    } else if (chosenIdx === -1) {
      console.log(`  [${id}] LOW CONFIDENCE - skipping. mOpt="${mOpt.substring(0,40)}" lecOpts=${JSON.stringify(lq.opts.map(o=>o.substring(0,20)))}`);
    }
  }

  if (fixes.length === 0) return 0;

  let content = fs.readFileSync(lecFile, "utf8");
  let fixCount = 0;
  for (const { id, from, to, mOpt, lecOpt, method, q } of fixes) {
    const idIdx = content.indexOf(`id: "${id}"`);
    if (idIdx === -1) continue;
    const area = content.substring(idIdx, idIdx + 600);
    const pat = new RegExp(`correct:\\s*${from}(?=[^0-9])`);
    if (!pat.test(area)) { console.log(`  [${id}] pattern not found`); continue; }
    const newArea = area.replace(pat, `correct: ${to}`);
    content = content.substring(0, idIdx) + newArea + content.substring(idIdx + 600);
    console.log(`  Fixed [${id}] ${from}->${to} via ${method}`);
    console.log(`    Q: ${q}`);
    console.log(`    main correct: "${mOpt.substring(0,50)}"`);
    console.log(`    lec  chosen:  "${lecOpt.substring(0,50)}"`);
    fixCount++;
  }
  if (fixCount > 0) {
    fs.writeFileSync(lecFile, content, "utf8");
    console.log(`  => Saved ${path.basename(lecFile)} (${fixCount} fixes)\n`);
  }
  return fixCount;
}

const pairs = [
  ["da-101-lectures.ts", "da-101.ts", "d101"],
  ["da-102-lectures.ts", "da-102.ts", "d102"],
  ["da-111-lectures.ts", "da-111.ts", "d111"],
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
