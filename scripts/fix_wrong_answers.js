/**
 * Fixes questions where the correct answer index clearly contradicts the explanation.
 *
 * High-confidence fix criteria:
 * 1. The current correct option does NOT appear in the explanation at all
 * 2. The suggested option appears in the explanation (not just as a counter-example)
 * 3. The explanation doesn't start with or emphasize the current correct option
 *
 * Uses the mismatches found by audit_answers.js as input.
 */
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "../src/data/questions");
const mismatches = JSON.parse(fs.readFileSync(path.join(__dirname, "answer_mismatches.json"), "utf8"));

// Phrases that indicate the mentioned option is WRONG (don't fix if present)
const negationPhrases = ["is not", "does not", "are not", "cannot", "should not", "incorrect", "wrong", "false", "negative"];

let totalFixed = 0;

for (const [fname, questions] of Object.entries(mismatches)) {
  const fpath = path.join(dir, fname);
  if (!fs.existsSync(fpath)) continue;

  let content = fs.readFileSync(fpath, "utf8");
  let fileFixed = 0;

  for (const q of questions) {
    const { id, currentCorrect, currentOpt, suggestedCorrect, suggestedOpt, explanation } = q;
    const expl = explanation.toLowerCase();

    // === High-confidence verification ===

    // 1. The current correct option should NOT appear in the explanation at all
    const currentSnip = currentOpt.toLowerCase().replace(/[()]/g, "").trim();
    const currentWords = currentSnip.split(/\s+/).filter(w => w.length > 4);
    const currentInExpl = currentWords.length > 0 && currentWords.every(w => expl.includes(w));

    // 2. The suggested option should appear in the explanation
    const suggestedSnip = suggestedOpt.toLowerCase().replace(/[()]/g, "").trim();
    const suggestedInExpl = expl.includes(suggestedSnip.substring(0, 15));

    // 3. Explanation shouldn't be negating the suggested option
    const hasNegation = negationPhrases.some(neg => {
      const idx = expl.indexOf(suggestedSnip.substring(0, 15));
      if (idx === -1) return false;
      const context = expl.substring(Math.max(0, idx - 20), idx + 30);
      return negationPhrases.some(neg => context.includes(neg));
    });

    // 4. Special: for "As per DA-XXX notes: X is..." explanations,
    //    the answer should be THE THING X IS (not X itself)
    //    These can be verified by checking if suggestedOpt is in the explanation
    const isNotesFormat = expl.startsWith("as per da-");

    // Confidence check
    let shouldFix = false;

    if (isNotesFormat && suggestedInExpl && !hasNegation) {
      // For "As per DA-X notes" explanations, trust the suggested fix more
      // unless the current option also clearly matches
      if (!currentInExpl || currentWords.length === 0) {
        shouldFix = true;
      }
    } else if (suggestedInExpl && !hasNegation) {
      // For non-notes format: only fix if current option doesn't appear at all
      if (!currentInExpl || currentWords.length === 0) {
        shouldFix = true;
      }
    }

    // Extra safety: don't fix "Both A and B", "All of the above" type answers
    // as those need manual review
    if (currentOpt.toLowerCase().includes("both") || currentOpt.toLowerCase().includes("all of") ||
        suggestedOpt.toLowerCase().includes("both") || suggestedOpt.toLowerCase().includes("all of")) {
      shouldFix = false;
    }

    if (!shouldFix) continue;

    // Find and replace the specific question's correct value in the file
    // Look for the id + correct pattern within ~15 lines
    const idPattern = `id: "${id}"`;
    const idIdx = content.indexOf(idPattern);
    if (idIdx === -1) continue;

    // Find 'correct: N' within 500 chars after the id
    const searchArea = content.substring(idIdx, idIdx + 600);
    const correctPattern = new RegExp(`correct:\\s*${currentCorrect}`, "");
    const correctMatch = searchArea.match(correctPattern);
    if (!correctMatch) continue;

    const correctPos = idIdx + searchArea.indexOf(correctMatch[0]);
    const before = content.substring(0, correctPos);
    const after = content.substring(correctPos + correctMatch[0].length);
    const newCorrect = `correct: ${suggestedCorrect}`;
    content = before + newCorrect + after;

    console.log(`✓ [${id}] correct:${currentCorrect}→${suggestedCorrect}  "${currentOpt}" → "${suggestedOpt}"`);
    fileFixed++;
  }

  if (fileFixed > 0) {
    fs.writeFileSync(fpath, content, "utf8");
    console.log(`  → Saved ${fname} (${fileFixed} fixes)\n`);
    totalFixed += fileFixed;
  }
}

console.log(`\nTotal fixes applied: ${totalFixed}`);
