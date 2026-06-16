/**
 * Re-tags the new DA-111 questions (d111l_153–185) from their source lecture
 * numbers to DA-111's 10 broad lecture topics, so they appear in lecture-wise
 * practice. Updates both `lecture: "lecture-N"` and `lectureNo: N`.
 */
const fs = require("fs");
const path = require("path");
const file = path.join(__dirname, "../src/data/questions/da-111-lectures.ts");

// id -> broad DA-111 lecture (1-10)
// 6=Hybridization&Heterosis(CMS), 7=Mutation&Polyploidy,
// 8=Seed Production Principles(processing/isolation), 9=Seed Testing & Quality,
// 10=Seed Certification & Seed Laws (incl. variety release/tags)
const MAP = {
  d111l_153: 8, d111l_154: 8, d111l_155: 8, d111l_156: 8, d111l_157: 8, // seed processing/separators
  d111l_158: 9, d111l_159: 9, d111l_160: 9, d111l_161: 9, d111l_162: 9, // seed testing
  d111l_163: 9, d111l_164: 9, d111l_165: 9,                              // storability/tetrazolium
  d111l_166: 6, d111l_167: 6, d111l_168: 6, d111l_169: 6,                // male sterility / SI
  d111l_170: 7, d111l_171: 7, d111l_172: 7,                              // mutation
  d111l_173: 6, d111l_174: 6, d111l_175: 6, d111l_176: 6,                // hybridization/emasculation
  d111l_177: 7, d111l_178: 7,                                           // triticale/colchicine (polyploidy)
  d111l_179: 10, d111l_180: 10, d111l_181: 10,                          // variety evaluation/release
  d111l_182: 8,                                                        // genetic purity deterioration
  d111l_183: 10,                                                       // seed tag size (certification)
  d111l_184: 8, d111l_185: 8,                                          // isolation/harvest moisture
};

let content = fs.readFileSync(file, "utf8");
let changed = 0;
for (const [id, lectureNo] of Object.entries(MAP)) {
  const idIdx = content.indexOf(`id: "${id}"`);
  if (idIdx === -1) { console.log("not found " + id); continue; }
  let end = content.indexOf('id: "', idIdx + 10);
  if (end === -1) end = content.length;
  let block = content.substring(idIdx, end);
  const before = block;
  block = block.replace(/lecture:\s*"lecture-\d+"/, `lecture: "lecture-${lectureNo}"`);
  block = block.replace(/lectureNo:\s*\d+/, `lectureNo: ${lectureNo}`);
  if (block !== before) { content = content.substring(0, idIdx) + block + content.substring(end); changed++; }
}
fs.writeFileSync(file, content, "utf8");
console.log("Re-tagged " + changed + " DA-111 questions to broad lectures 1-10");
