// Remove genuinely off-source questions (answer content absent from ALL source
// PDFs, grounding < 60%) from the agriculture subject banks. Language/computer
// subjects (DA-263/DA-262) and general-agriculture are exempt. Re-emits each
// affected file as clean TS. DRY-RUN unless invoked with --apply.
const fs = require("fs"), path = require("path"), ts = require("typescript");

const C = fs.readFileSync("scripts/_sources_corpus.txt", "utf8").toLowerCase().replace(/[^a-z0-9]+/g, " ");
const STOP = new Set(("the a an and or but of to in on for with by from as at is are was were be been being this that these those which what when where who whom whose how why their there they them then than into over under about above below after before during while only also both each every other more most some such very many much same true false correct incorrect statement statements consider following select combination match list given between within because therefore hence thus would could should option options answer reason assertion column columns called used using mainly best type types form forms based first second third above below main major minor unit units").split(/\s+/));
const terms = s => { const o = new Set(); for (const w of s.toLowerCase().replace(/[^a-z0-9\s]+/g," ").split(/\s+/)) if (w.length>=5 && !STOP.has(w) && !/^\d+$/.test(w)) o.add(w); return [...o]; };
function offSource(q) {
  if (!q || !q.options) return false;
  const ansText = q.matchTable ? q.matchTable.rows.flat().join(" ") : q.options[q.correct];
  const a = terms(ansText); if (!a.length) return false;
  const miss = a.filter(t => !C.includes(t));
  return (a.length - miss.length) / a.length < 0.6;   // <60% grounded = off-source
}
function load(file, varName) {
  const js = ts.transpileModule(fs.readFileSync(file,"utf8"), { compilerOptions:{module:"commonjs",target:"es2019"} }).outputText.replace(/require\(["'][^"']*["']\)/g,"({})");
  const tmp = file.replace(/\.ts$/, "._pr.js");
  fs.writeFileSync(tmp, js + `\nmodule.exports=(typeof exports!=="undefined"&&exports.${varName})||[];`);
  const r = require.resolve(path.resolve(tmp)); delete require.cache[r];
  let Q; try { Q = require(r); } finally { fs.unlinkSync(tmp); }
  return Q || [];
}

const FILES = [
  ["src/data/questions/da-101.ts","da101Questions"],["src/data/questions/da-101-lectures.ts","da101LectureQuestions"],
  ["src/data/questions/da-102.ts","da102Questions"],["src/data/questions/da-102-lectures.ts","da102LectureQuestions"],
  ["src/data/questions/da-111.ts","da111Questions"],["src/data/questions/da-111-lectures.ts","da111LectureQuestions"],
  ["src/data/questions/da-121.ts","da121Questions"],["src/data/questions/da-121-lectures.ts","da121LectureQuestions"],
  ["src/data/questions/da-122.ts","da122Questions"],["src/data/questions/da-122-lectures.ts","da122LectureQuestions"],
  ["src/data/questions/da-131.ts","da131Questions"],["src/data/questions/da-131-lectures.ts","da131LectureQuestions"],
  ["src/data/questions/da-132.ts","da132Questions"],["src/data/questions/da-132-lectures.ts","da132LectureQuestions"],
  ["src/data/questions/da-151.ts","da151Questions"],["src/data/questions/da-151-lectures.ts","da151LectureQuestions"],
  ["src/data/questions/da-171.ts","da171Questions"],["src/data/questions/da-171-lectures.ts","da171LectureQuestions"],
  ["src/data/questions/da-201.ts","da201Questions"],["src/data/questions/da-201-lectures.ts","da201LectureQuestions"],
  ["src/data/questions/da-241.ts","da241Questions"],["src/data/questions/da-241-lectures.ts","da241LectureQuestions"],
  ["src/data/questions/da-252.ts","da252Questions"],["src/data/questions/da-252-lectures.ts","da252LectureQuestions"],
  ["src/data/questions/da-281.ts","da281Questions"],["src/data/questions/da-281-lectures.ts","da281LectureQuestions"],
  ["src/data/questions/da-282.ts","da282Questions"],["src/data/questions/da-282-lectures.ts","da282LectureQuestions"],
  ["src/data/questions/da-291.ts","da291Questions"],["src/data/questions/da-291-lectures.ts","da291LectureQuestions"],
];

const apply = process.argv.includes("--apply");
let totalRemoved = 0;
for (const [file, varName] of FILES) {
  const Q = load(file, varName);
  const kept = Q.filter(q => !offSource(q));
  const removed = Q.length - kept.length;
  if (removed > 0) {
    totalRemoved += removed;
    console.log(`${path.basename(file)}: ${Q.length} -> ${kept.length}  (removed ${removed})`);
    if (apply) {
      const out = `import { Question } from "@/types";\n\nexport const ${varName}: Question[] = ${JSON.stringify(kept, null, 2)};\n`;
      fs.writeFileSync(file, out);
    }
  }
}
console.log(`\n${apply ? "REMOVED" : "WOULD REMOVE"} ${totalRemoved} off-source questions.`);
