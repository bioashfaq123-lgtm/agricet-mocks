/**
 * Fills english-communication lectures 4 (Active/Passive Voice) and 5
 * (Direct/Indirect Speech) which were empty. Re-tags previously mis-tagged
 * da-263 questions to their correct lecture, and adds a few new source-based
 * questions so both lectures have proper coverage.
 */
const fs = require("fs");
const path = require("path");
const file = path.join(__dirname, "../src/data/questions/da-263-lectures.ts");
const stop = new Set("the and for with that from this are was its their which when what into only also than then due can not but all any these those such used use using more most some other same each per both cent".split(" "));
const words = s => s.toLowerCase().replace(/[^a-z]/g, " ").split(/\s+/).filter(w => w.length >= 3 && !stop.has(w));

let content = fs.readFileSync(file, "utf8");

// 1) Re-tag mis-tagged questions to correct lecture
const RETAG = { d263l_203: 1, d263l_204: 5, d263l_205: 4, d263l_206: 4, d263l_207: 4 };
let retagged = 0;
for (const [id, n] of Object.entries(RETAG)) {
  const idIdx = content.indexOf(`id: "${id}"`);
  if (idIdx === -1) { console.log("not found " + id); continue; }
  let end = content.indexOf('id: "', idIdx + 10); if (end === -1) end = content.length;
  let block = content.substring(idIdx, end);
  const before = block;
  block = block.replace(/lecture:\s*"lecture-\d+"/, `lecture: "lecture-${n}"`).replace(/lectureNo:\s*\d+/, `lectureNo: ${n}`);
  if (block !== before) { content = content.substring(0, idIdx) + block + content.substring(end); retagged++; }
}
fs.writeFileSync(file, content, "utf8");
console.log("Re-tagged " + retagged + " da-263 questions");

// 2) Add new questions for lectures 4 and 5
const Q = (id, n, question, options, correct, explanation) => ({ id, subject: "da-263", lecture: "lecture-" + n, lectureNo: n, question, options, correct, explanation });
const NEW = [
  Q("d263l_208", 4, "Convert to passive voice: 'Shah Jehan built the Taj Mahal.' The correct passive form is:",
    ["The Taj Mahal was built by Shah Jehan", "The Taj Mahal is building by Shah Jehan", "Shah Jehan was built the Taj Mahal", "The Taj Mahal has build by Shah Jehan"], 0,
    "As per DA-263 notes (passive voice): 'Shah Jehan built the Taj Mahal' becomes 'The Taj Mahal was built by Shah Jehan' in the passive voice."),
  Q("d263l_209", 4, "In the passive sentence 'The Guide was written by R.K. Narayan', the subject of the active voice would be:",
    ["The Guide", "The reader", "A publisher", "R.K. Narayan"], 3,
    "As per DA-263 notes (passive voice): 'The Guide was written by R.K. Narayan' — the agent (doer) is R.K. Narayan, who would be the subject in the active voice ('R.K. Narayan wrote The Guide')."),
  Q("d263l_210", 5, "In direct speech, the exact words of the speaker are enclosed within:",
    ["Brackets ( )", "Quotation marks", "Hyphens", "Full stops"], 1,
    "As per DA-263 notes: In direct speech, the actual words spoken by a person are placed within quotation marks (\\\" \\\")."),
  Q("d263l_211", 5, "When direct speech is changed to indirect speech after a reporting verb in the past tense, the tense of the reported verb is generally:",
    ["Kept unchanged in present tense", "Changed to future tense", "Changed (back-shifted) to the past tense", "Removed completely"], 2,
    "As per DA-263 notes: In indirect (reported) speech, after a verb of saying in the past tense, the reported verb is back-shifted — present tense changes to the corresponding past tense."),
];
let problems = 0;
for (const q of NEW) {
  if (new Set(q.options).size !== 4) { console.log("DUP opts " + q.id); problems++; }
  const ex = q.explanation.toLowerCase();
  if (!words(q.options[q.correct]).some(w => ex.includes(w))) { console.log("ANSWER NOT IN EXPL " + q.id); problems++; }
}
const pos=[0,0,0,0]; NEW.forEach(q=>pos[q.correct]++); console.log("New positions: "+pos.join("/"));
if (problems) { console.log(problems + " problems — not writing new ones"); process.exit(1); }
function ser(q){ const opts=q.options.map(o=>JSON.stringify(o)).join(", ");
  return "  {\n    id: "+JSON.stringify(q.id)+",\n    subject: \"da-263\",\n    lecture: "+JSON.stringify(q.lecture)+",\n    lectureNo: "+q.lectureNo+",\n    question: "+JSON.stringify(q.question)+",\n    options: ["+opts+"],\n    correct: "+q.correct+",\n    explanation: "+JSON.stringify(q.explanation)+"\n  }"; }
content = fs.readFileSync(file, "utf8");
const closeIdx = content.lastIndexOf("];");
let prefix = content.substring(0, closeIdx).replace(/\s*$/, ""); if (!prefix.endsWith(",")) prefix += ",";
content = prefix + "\n" + NEW.map(ser).join(",\n") + "\n];\n";
fs.writeFileSync(file, content, "utf8");
console.log("Added " + NEW.length + " new da-263 questions (lectures 4,5)");
