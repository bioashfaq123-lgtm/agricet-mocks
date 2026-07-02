// All-subjects source-grounding audit. For every DA-subject question (main bank +
// lecture bank), check that the distinctive terms of its correct answer + question
// appear in the source-PDF corpus. Flags off-source questions. Skips general
// agriculture / AEO general-knowledge questions (exempt by the user).
const fs = require("fs"), path = require("path");

const C = fs.readFileSync("scripts/_sources_corpus.txt", "utf8").toLowerCase().replace(/[^a-z0-9]+/g, " ");
const STOP = new Set(("the a an and or but of to in on for with by from as at is are was were be been being this that these those which what when where who whom whose how why their there they them then than into over under about above below after before during while only also both each every other more most some such very many much same true false correct incorrect statement statements consider following select combination match list given between within because therefore hence thus would could should option options answer reason assertion column columns called used using mainly best type types form forms based first second third above below main major minor unit units").split(/\s+/));

function terms(str) {
  const out = new Set();
  for (const w of str.toLowerCase().replace(/[^a-z0-9\s]+/g, " ").split(/\s+/))
    if (w.length >= 5 && !STOP.has(w) && !/^\d+$/.test(w)) out.add(w);
  return [...out];
}
function sciNames(str) {
  const out = new Set(); const re = /([A-Z][a-z]{3,})\s+([a-z]{3,})/g; let m;
  while ((m = re.exec(str))) if (!STOP.has(m[1].toLowerCase())) out.add((m[1] + " " + m[2]).toLowerCase());
  return [...out];
}
const ts = require("typescript");
function load(file, varName) {
  const src = fs.readFileSync(file, "utf8");
  let js = ts.transpileModule(src, { compilerOptions: { module: "commonjs", target: "es2019" } }).outputText;
  js = js.replace(/require\(["'][^"']*["']\)/g, "({})");   // neutralize type imports
  const tmp = file.replace(/\.ts$/, "._gc.js");
  fs.writeFileSync(tmp, js + `\nmodule.exports = (typeof exports!=="undefined" && exports.${varName}) || [];`);
  const resolved = require.resolve(path.resolve(tmp)); delete require.cache[resolved];
  let Q; try { Q = require(resolved); } finally { fs.unlinkSync(tmp); }
  return Q || [];
}

const SUBJECTS = [
  ["da-101","da101Questions","da101LectureQuestions"],
  ["da-102","da102Questions","da102LectureQuestions"],
  ["da-111","da111Questions","da111LectureQuestions"],
  ["da-121","da121Questions","da121LectureQuestions"],
  ["da-122","da122Questions","da122LectureQuestions"],
  ["da-131","da131Questions","da131LectureQuestions"],
  ["da-132","da132Questions","da132LectureQuestions"],
  ["da-151","da151Questions","da151LectureQuestions"],
  ["da-171","da171Questions","da171LectureQuestions"],
  ["da-201","da201Questions","da201LectureQuestions"],
  ["da-241","da241Questions","da241LectureQuestions"],
  ["da-252","da252Questions","da252LectureQuestions"],
  ["da-262","da262Questions","da262LectureQuestions"],
  ["da-263","da263Questions","da263LectureQuestions"],
  ["da-281","da281Questions","da281LectureQuestions"],
  ["da-282","da282Questions","da282LectureQuestions"],
  ["da-291","da291Questions","da291LectureQuestions"],
];

function audit(Q) {
  let flagged = 0, clean = 0; const bad = [];
  for (const q of Q) {
    if (!q || !q.options) continue;
    const ansText = q.matchTable ? q.matchTable.rows.flat().join(" ") : q.options[q.correct];
    const aTerms = terms(ansText);
    const aMiss = aTerms.filter(t => !C.includes(t));
    const sci = sciNames((ansText || "") + " " + (q.question || ""));
    const sciMiss = sci.filter(s => !C.includes(s) && !C.includes(s.split(" ")[0]));
    const ratio = aTerms.length ? (aTerms.length - aMiss.length) / aTerms.length : 1;
    if (ratio < 0.6 || sciMiss.length > 0) { flagged++; bad.push({ id: q.id, q: (q.question||"").slice(0,60), ratio, aMiss, sciMiss }); }
    else clean++;
  }
  return { flagged, clean, bad };
}

let totalFlag = 0, totalClean = 0; const perSubject = [];
for (const [sub, mainVar, lecVar] of SUBJECTS) {
  let Q = [];
  try { Q = Q.concat(load(`src/data/questions/${sub}.ts`, mainVar)); } catch (e) { console.error("load fail", sub, mainVar, e.message); }
  try { Q = Q.concat(load(`src/data/questions/${sub}-lectures.ts`, lecVar)); } catch (e) { console.error("load fail", sub, lecVar, e.message); }
  const r = audit(Q);
  totalFlag += r.flagged; totalClean += r.clean;
  perSubject.push([sub, Q.length, r.flagged, r.bad]);
  console.log(`${sub}: ${Q.length} Qs | flagged ${r.flagged} | clean ${r.clean}`);
}
console.log(`\nTOTAL: flagged ${totalFlag} | clean ${totalClean}`);
// show details for subjects with flags
const showN = process.argv[2] === "-v";
if (showN) for (const [sub, , flg, bad] of perSubject) if (flg) {
  console.log(`\n===== ${sub} flagged (${flg}) =====`);
  bad.slice(0, 40).forEach(b => console.log(`  ${b.id} g=${(b.ratio*100).toFixed(0)}% ${b.sciMiss.length?"SCI:"+b.sciMiss.join(","):""} miss:[${b.aMiss.join(",")}] :: ${b.q}`));
}
