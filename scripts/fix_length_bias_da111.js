/**
 * Removes "longest-answer is correct" predictability in DA-111 by lengthening
 * short distractors into plausible, comparable-length wrong options.
 * Only DISTRACTOR text is changed — the correct answer and option order are
 * untouched, so the `correct` index stays valid in both files.
 * Replacements are scoped to each question's block to avoid collisions.
 */
const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "../src/data/questions");

// id -> array of [oldDistractor, newDistractor]
const fixes = {
  d111x_032: [
    ["Egg + one sperm nucleus", "Egg cell with one of the two male sperm nuclei"],
    ["Egg + polar nuclei", "Egg cell fusing directly with the two polar nuclei"],
    ["Two sperm nuclei together", "Both male sperm nuclei fusing with each other"],
  ],
  d111x_038: [
    ["Inducing mutations", "Inducing useful mutations using gamma irradiation"],
    ["Creating all new genetic combinations", "Creating entirely new genetic recombinations at random"],
    ["Developing new crop species", "Developing an entirely new crop species by polyploidy"],
  ],
  d111x_039: [
    ["Temperature extremes only", "Only high temperature and drought stress during growth"],
    ["Hormones only", "Growth hormones such as auxins and cytokinins only"],
    ["Natural selection only", "Natural selection acting over many generations only"],
  ],
  d111x_041: [
    ["Weather forecasting", "Long-range seasonal weather forecasting for sowing"],
    ["Chemical analysis of plants", "Quantitative chemical analysis of soil and plant tissue"],
    ["Only disease diagnosis", "Field diagnosis of insect pests and fungal diseases"],
  ],
  d111x_044: [
    ["Physical erosion of soil reducing crop production in crop production", "Physical washing away of fertile topsoil by wind and water erosion"],
    ["Reduction in crop area due to urbanization in field conditions", "Reduction in total cultivated crop area caused by rapid urbanization"],
    ["Mutation-induced loss of genetic information for agricultural purposes", "Loss of stored seed viability inside genebanks due to poor storage"],
  ],
  d111x_045: [
    ["Test herbicides on different varieties", "Test the effect of new herbicides on different crop varieties"],
    ["Measure productivity of different varieties", "Measure and rank the productivity of released crop varieties"],
    ["Produce commercial seeds only", "Multiply and supply commercial certified seed to farmers"],
  ],
  d111x_046: [
    ["ICAR", "Indian Council of Agricultural Research (ICAR), New Delhi"],
    ["NBPGR", "National Bureau of Plant Genetic Resources (NBPGR)"],
    ["NSC", "National Seeds Corporation (NSC), Government of India"],
  ],
  d111x_048: [
    ["State Seed Corporation", "State Seed Corporation under the State Government"],
    ["National Seeds Corporation", "National Seeds Corporation through its regional units"],
    ["Farmers themselves", "Registered progressive farmers in seed villages"],
  ],
  d111x_060: [
    ["Only germination percentage", "Only the final germination percentage measured in the lab"],
    ["Weight of seeds per unit volume", "The bulk weight of a seed lot per unit storage volume"],
    ["The overall physical condition of seed", "The external physical appearance and colour of the seeds"],
  ],
  d111x_061: [
    ["Coating seeds with fungicides", "Coating seeds with protective fungicides before sowing them"],
    ["Storing seeds at high temperature", "Storing seeds at high temperature to break seed dormancy"],
    ["Mechanical scarification of seeds", "Mechanical scarification of hard seed coats before sowing"],
  ],
  d111x_070: [
    ["Produce medicinal compounds", "Produce valuable medicinal and aromatic compounds"],
    ["Improve soil organic matter", "Improve soil organic matter and microbial activity"],
    ["Control weeds naturally", "Suppress weed growth in cropped fields naturally"],
  ],
  d111x_101: [
    ["State seed corporations under government supervision", "State seed corporations operating under direct government supervision"],
    ["Certified seed producers registered with NSC", "Certified seed producers registered and licensed with the NSC"],
    ["Farmers selected by the State Agriculture Department", "Progressive farmers specially selected by the State Agriculture Department"],
  ],
  d111x_102: [
    ["Produce commercial hybrid seed for farmers", "Produce large quantities of commercial hybrid seed for farmers"],
    ["Increase heterozygosity of the breeding population", "Increase the overall heterozygosity of the entire breeding population"],
    ["Estimate general combining ability (GCA) of inbred lines", "Estimate the general combining ability (GCA) of selected inbred lines"],
  ],
  // lecture-only
  d111l_049: [
    ["The trait shows only two discrete phenotypic classes", "The trait shows only two or three discrete phenotypic classes"],
    ["The environment has no effect on phenotype expression", "The surrounding environment has no effect at all on phenotype expression"],
    ["Only one gene controls the trait with complete dominance", "Only a single gene controls the trait showing complete dominance"],
  ],
  d111l_064: [
    ["It requires expensive laboratory equipment for implementation", "It requires costly laboratory equipment and tissue culture facilities"],
    ["It cannot be applied to self-pollinated crop species", "It cannot be applied at all to self-pollinated crop species"],
  ],
  d111l_075: [
    ["Resistance to a specific disease in one target population", "Resistance to one specific disease within a single target population"],
  ],
  d111l_114: [
    ["Opal green — issued as truthfully labelled seed", "Opal green — issued for the truthfully labelled seed class"],
    ["White — issued by the Seed Certification Agency", "White — issued by the agency for the foundation seed class"],
    ["Golden yellow — issued by the producing agency", "Golden yellow — issued by the producing agency for breeder seed"],
  ],
};

function fixFile(filename) {
  const filepath = path.join(dir, filename);
  let content = fs.readFileSync(filepath, "utf8");
  let total = 0;
  for (const [id, pairs] of Object.entries(fixes)) {
    const idIdx = content.indexOf(`id: "${id}"`);
    if (idIdx === -1) continue;
    // Block = from id to next id (or +700 chars)
    let blockEnd = content.indexOf('id: "', idIdx + 10);
    if (blockEnd === -1) blockEnd = idIdx + 700;
    let block = content.substring(idIdx, blockEnd);
    let changed = false;
    for (const [oldT, newT] of pairs) {
      const needle = `"${oldT}"`;
      if (block.includes(needle)) {
        block = block.replace(needle, `"${newT}"`);
        changed = true;
        total++;
      }
    }
    if (changed) {
      content = content.substring(0, idIdx) + block + content.substring(blockEnd);
    }
  }
  fs.writeFileSync(filepath, content, "utf8");
  console.log(`${filename}: ${total} distractor replacements`);
}

fixFile("da-111-lectures.ts");
fixFile("da-111.ts");
console.log("Done.");
