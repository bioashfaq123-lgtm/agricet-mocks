/**
 * Audits all question files for mismatches between the correct answer and the explanation.
 * Flags questions where the current correct option doesn't appear in the explanation
 * but another option does — likely indicating a wrong correct index.
 */
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "../src/data/questions");
const files = fs.readdirSync(dir).filter(f => f.endsWith(".ts") && f !== "index.ts");

let totalMismatches = 0;
const allMismatches = {};

for (const fname of files) {
  const content = fs.readFileSync(path.join(dir, fname), "utf8");
  const fileMismatches = [];
  const lines = content.split("\n");

  // Parse question blocks line by line
  let i = 0;
  while (i < lines.length) {
    // Look for id: "..." line
    const idMatch = lines[i].match(/id:\s*"([^"]+)"/);
    if (!idMatch) { i++; continue; }

    const id = idMatch[1];
    // Scan forward for options, correct, explanation within next 50 lines
    let opts = null, correctIdx = -1, explanation = "";

    for (let j = i + 1; j < Math.min(i + 60, lines.length); j++) {
      // Multi-line options: find all quoted strings in the options block
      if (opts === null && /options:\s*\[/.test(lines[j])) {
        // Gather the options block (could span multiple lines)
        let block = "";
        let depth = 0;
        for (let k = j; k < Math.min(j + 10, lines.length); k++) {
          block += lines[k];
          for (const ch of lines[k]) {
            if (ch === "[") depth++;
            if (ch === "]") depth--;
          }
          if (depth === 0) break;
        }
        opts = [...block.matchAll(/"((?:[^"\\]|\\.)*)"/g)].map(m => m[1]);
        if (opts.length !== 4) opts = null;
      }

      // correct: N
      if (correctIdx === -1) {
        const cm = lines[j].match(/correct:\s*(\d)/);
        if (cm) correctIdx = parseInt(cm[1]);
      }

      // explanation: "..."
      if (!explanation) {
        const em = lines[j].match(/explanation:\s*"((?:[^"\\]|\\.)*)"/);
        if (em) explanation = em[1];
      }

      // Stop when we hit the next question
      if (j > i + 2 && /^\s+id:\s*"/.test(lines[j])) break;
    }

    if (opts && correctIdx >= 0 && correctIdx <= 3 && explanation) {
      const correctOpt = opts[correctIdx];
      const expl = explanation.toLowerCase();

      // Check if the correct option (first 20 chars) appears in explanation
      const correctSnippet = correctOpt.replace(/[()]/g, "").toLowerCase().substring(0, 20).trim();
      const correctAppearsInExpl = correctSnippet.length > 4 && expl.includes(correctSnippet);

      if (!correctAppearsInExpl) {
        // Check if a different option appears in the explanation
        for (let oi = 0; oi < 4; oi++) {
          if (oi === correctIdx) continue;
          const otherSnippet = opts[oi].replace(/[()]/g, "").toLowerCase().substring(0, 20).trim();
          if (otherSnippet.length > 5 && expl.includes(otherSnippet)) {
            fileMismatches.push({
              id,
              currentCorrect: correctIdx,
              currentOpt: correctOpt,
              suggestedCorrect: oi,
              suggestedOpt: opts[oi],
              opts,
              explanation: explanation.substring(0, 120),
            });
            break;
          }
        }
      }
    }

    i++;
  }

  if (fileMismatches.length > 0) {
    allMismatches[fname] = fileMismatches;
    totalMismatches += fileMismatches.length;
    console.log(`\n=== ${fname} (${fileMismatches.length} suspected mismatches) ===`);
    fileMismatches.slice(0, 8).forEach(m => {
      console.log(`  [${m.id}] correct:${m.currentCorrect} → "${m.currentOpt}"`);
      console.log(`         should be :${m.suggestedCorrect} → "${m.suggestedOpt}"`);
      console.log(`         Expl: ${m.explanation}`);
    });
    if (fileMismatches.length > 8) console.log(`  ... and ${fileMismatches.length - 8} more`);
  }
}

console.log(`\n\nTotal suspected wrong answers: ${totalMismatches} across ${Object.keys(allMismatches).length} files`);

// Save details to a JSON file for fixing
fs.writeFileSync(path.join(__dirname, "answer_mismatches.json"), JSON.stringify(allMismatches, null, 2), "utf8");
console.log("Detailed list saved to scripts/answer_mismatches.json");
