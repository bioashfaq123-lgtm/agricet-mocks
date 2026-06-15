/**
 * Full audit of all DA-111 questions - prints every question with
 * its current correct option and explanation so we can verify each one.
 */
const fs = require("fs");
const path = require("path");

function extractAll(file) {
  const content = fs.readFileSync(file, "utf8");
  const lines = content.split("\n");
  const questions = [];
  let i = 0;
  while (i < lines.length) {
    const idMatch = lines[i].match(/id:\s*"([^"]+)"/);
    if (!idMatch) { i++; continue; }
    const id = idMatch[1];
    let opts = null, correct = -1, expl = "", question = "";
    for (let j = i + 1; j < Math.min(i + 30, lines.length); j++) {
      if (!question) {
        const qm = lines[j].match(/question:\s*"((?:[^"\\]|\\.)*)"/);
        if (qm) question = qm[1].replace(/\\n/g, " ").substring(0, 80);
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
        if (matches.length === 4) opts = matches;
      }
      const cm = lines[j].match(/correct:\s*(\d)/);
      if (cm && correct === -1) correct = parseInt(cm[1]);
      const em = lines[j].match(/explanation:\s*"((?:[^"\\]|\\.)*)"/);
      if (em && !expl) expl = em[1].substring(0, 120);
      if (j > i + 2 && /^\s+id:\s*"/.test(lines[j])) break;
    }
    if (opts && correct >= 0 && question) {
      questions.push({ id, question, opts, correct, expl });
    }
    i++;
  }
  return questions;
}

function audit(file) {
  const qs = extractAll(file);
  const issues = [];
  for (const q of qs) {
    const correctOpt = q.opts[q.correct];
    const expl = q.expl.toLowerCase();
    const corrSnip = correctOpt.replace(/[()]/g, "").toLowerCase();
    // Check first 20 significant chars appear in explanation
    const words = corrSnip.split(/\s+/).filter(w => w.length > 3);
    const inExpl = words.length > 0 && words.slice(0, 3).some(w => expl.includes(w));
    if (!inExpl) {
      // Check if another option is clearly in the explanation
      let suggested = -1;
      let suggestedOpt = "";
      for (let oi = 0; oi < 4; oi++) {
        if (oi === q.correct) continue;
        const otherSnip = q.opts[oi].replace(/[()]/g, "").toLowerCase();
        const otherWords = otherSnip.split(/\s+/).filter(w => w.length > 3);
        if (otherWords.length > 0 && otherWords.slice(0, 2).every(w => expl.includes(w))) {
          suggested = oi;
          suggestedOpt = q.opts[oi];
          break;
        }
      }
      issues.push({ ...q, correctOpt, suggested, suggestedOpt });
    }
  }
  return { total: qs.length, issues };
}

const files = ["da-111-lectures.ts", "da-111.ts"];
for (const f of files) {
  const fpath = path.join(__dirname, "../src/data/questions", f);
  console.log(`\n${"=".repeat(60)}`);
  console.log(`FILE: ${f}`);
  console.log("=".repeat(60));
  const { total, issues } = audit(fpath);
  console.log(`Total questions: ${total} | Potential issues: ${issues.length}\n`);
  for (const q of issues) {
    console.log(`[${q.id}]`);
    console.log(`  Q: ${q.question}`);
    console.log(`  A (current correct:${q.correct}): "${q.correctOpt}"`);
    if (q.suggested >= 0) {
      console.log(`  SUGGESTED correct:${q.suggested}: "${q.suggestedOpt}"`);
    } else {
      console.log(`  (No clear alternative found in explanation)`);
    }
    console.log(`  Expl: ${q.expl}`);
    console.log();
  }
}
