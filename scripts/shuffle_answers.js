const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../src/data/questions/da-252-lectures.ts");
let content = fs.readFileSync(filePath, "utf8");

// Target distribution: 0,1,2,3 each ~62-63 times for 250 questions
// We'll assign target positions using a seeded round-robin shuffle
const targetOrder = [];
for (let i = 0; i < 250; i++) targetOrder.push(i % 4);
// Fisher-Yates with fixed seed so it's reproducible
function seededShuffle(arr, seed) {
  let s = seed;
  function next() { s = (s * 1664525 + 1013904223) & 0xffffffff; return (s >>> 0) / 0xffffffff; }
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(next() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
seededShuffle(targetOrder, 42);

// Parse all question blocks
const questionRegex = /(\s*\{[\s\S]*?id:\s*"[^"]+",[\s\S]*?correct:\s*(\d)[\s\S]*?\}(?=\s*[,\n]*\s*\{|\s*\n?\s*\];))/g;

// Instead, let's do a line-by-line approach to safely rewrite options + correct
// Find each question by locating options arrays and correct values

const lines = content.split("\n");
const questions = []; // {optionsStart, optionsEnd, correctLine, options, correct}

let i = 0;
while (i < lines.length) {
  if (/options:\s*\[/.test(lines[i])) {
    const optStart = i;
    let optEnd = i;
    // Find the closing bracket of options array
    let depth = 0;
    for (let j = i; j < lines.length; j++) {
      for (const ch of lines[j]) {
        if (ch === "[") depth++;
        if (ch === "]") depth--;
      }
      if (depth === 0) { optEnd = j; break; }
    }
    // Find correct: line after options
    let correctLine = -1;
    for (let j = optEnd + 1; j < Math.min(optEnd + 5, lines.length); j++) {
      if (/correct:\s*\d/.test(lines[j])) { correctLine = j; break; }
    }
    if (correctLine !== -1) {
      questions.push({ optStart, optEnd, correctLine });
    }
    i = optEnd + 1;
  } else {
    i++;
  }
}

console.log(`Found ${questions.length} questions`);

// For each question, extract options text (the 4 option strings) and current correct index
// Then swap so correct answer goes to targetOrder[qIndex]

for (let q = 0; q < questions.length; q++) {
  const { optStart, optEnd, correctLine } = questions[q];
  const currentCorrect = parseInt(lines[correctLine].match(/correct:\s*(\d)/)[1]);
  const targetCorrect = targetOrder[q];

  if (currentCorrect === targetCorrect) continue; // no change needed

  // Extract the 4 option strings from the options block
  const optBlock = lines.slice(optStart, optEnd + 1).join("\n");
  const optMatches = [...optBlock.matchAll(/"((?:[^"\\]|\\.)*)"/g)].map(m => m[1]);

  if (optMatches.length !== 4) {
    console.warn(`Q${q+1}: found ${optMatches.length} options, skipping`);
    continue;
  }

  const correctText = optMatches[currentCorrect];
  // Swap currentCorrect and targetCorrect positions
  const newOptions = [...optMatches];
  newOptions[currentCorrect] = newOptions[targetCorrect];
  newOptions[targetCorrect] = correctText;

  // Rebuild options lines - replace each quoted string in order
  let idx = 0;
  for (let ln = optStart; ln <= optEnd; ln++) {
    lines[ln] = lines[ln].replace(/"(?:[^"\\]|\\.)*"/g, (match) => {
      if (idx < 4) return `"${newOptions[idx++]}"`;
      return match;
    });
  }

  // Update correct index
  lines[correctLine] = lines[correctLine].replace(/correct:\s*\d/, `correct: ${targetCorrect}`);
}

// Verify new distribution
const newCorrects = lines.filter(l => /^\s+correct:\s*\d/.test(l)).map(l => parseInt(l.match(/correct:\s*(\d)/)[1]));
const dist = [0,0,0,0];
newCorrects.forEach(c => dist[c]++);
console.log("New distribution:", { 0: dist[0], 1: dist[1], 2: dist[2], 3: dist[3] });

fs.writeFileSync(filePath, lines.join("\n"), "utf8");
console.log("Done! File updated.");
