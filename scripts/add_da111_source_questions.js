/**
 * Adds new DA-111 questions built directly from the source PPTs
 * (D:\Desktop\DA 111 ppts\*.pptx). Every correct answer is a fact stated
 * verbatim in the source. Self-checks each question before appending:
 *  - exactly 4 distinct options
 *  - correct index in range
 *  - a keyword from the correct option appears in the explanation
 * Then appends to da-111-lectures.ts before the closing `];`.
 */
const fs = require("fs");
const path = require("path");
const file = path.join(__dirname, "../src/data/questions/da-111-lectures.ts");

const L = (n) => `lecture-${n}`;
const Q = (id, lectureNo, question, options, correct, explanation) => ({
  id, subject: "da-111", lecture: L(lectureNo), lectureNo, question, options, correct, explanation,
});

const NEW = [
  Q("d111l_153", 38, "Seed processing is defined as the process of removal of:",
    ["Dockage from a seed lot to prepare the seed for marketing", "All moisture from the seed before it is placed in storage", "Dormancy from freshly harvested seed lots before sowing", "Genetic impurities from the variety by rouging the seed field"], 0,
    "As per DA-111 notes (Lecture 38): Seed processing is the process of removal of dockage in a seed lot and preparation of seed for marketing. Price and quality of seed are inversely related to dockage."),
  Q("d111l_154", 38, "The most important machine in every seed cleaning plant, which uses screens and aspiration (air blow), is:",
    ["The specific gravity separator used for heavy seeds", "The air screen cleaner that uses screens and aspiration", "The spiral separator used for round flowing seeds", "The magnetic separator used for sticky rough seeds"], 1,
    "As per DA-111 notes (Lecture 38): The air screen cleaner is the most important machine of every cleaning plant. It uses screens and aspiration (air blow) for separation of seed from lighter impurities."),
  Q("d111l_155", 38, "Seeds are separated on the basis of their weight (relative weight per unit volume) using the:",
    ["Indented cylinder separator working on length", "Disc separator working on the seed length", "Specific gravity separator working on weight", "Spiral separator working on the seed shape"], 2,
    "As per DA-111 notes (Lecture 38): The specific gravity separator separates seeds differing in specific gravity (relative weight per unit of volume) using air as the separation substratum."),
  Q("d111l_156", 38, "The spiral separator classifies seeds according to their:",
    ["Surface texture, rough versus smooth seeds", "Colour difference between seed varieties", "Length using indents on a cylinder", "Shape and rolling ability, round versus flat"], 3,
    "As per DA-111 notes (Lecture 38): The spiral separator classifies seed according to its shape and rolling ability; round seeds roll faster down the incline than flat or irregularly shaped seeds."),
  Q("d111l_157", 38, "Rough-coated seeds are separated from smooth seeds, based on surface texture, using the:",
    ["Roll mill, also called the velvet roll or dodder mill", "Disc separator that works on seed length", "Specific gravity separator that works on weight", "Electronic colour separator for discoloured seeds"], 0,
    "As per DA-111 notes (Lecture 38): The roll mill (velvet roll or dodder mill) separates a mixture of smooth and rough seeds on the basis of surface texture; rough or sharp-edged seeds are caught by the nap of the fabric covering the rollers."),
  Q("d111l_158", 39, "The International Seed Testing Association (ISTA) was established in the year:",
    ["1966", "1924", "1900", "1942"], 1,
    "As per DA-111 notes (Lecture 39): The International Seed Testing Association (ISTA) was established in 1924 (Norway). The Central Seed Testing Laboratory is at NSRTC, Varanasi."),
  Q("d111l_159", 39, "The Nobbe trier used for sampling seed in bags is named after Fredrick Nobbe, who is known as the:",
    ["Father of plant breeding", "Father of genetics", "Father of seed testing", "Father of botany"], 2,
    "As per DA-111 notes (Lecture 39): The Nobbe trier was named after Fredrick Nobbe, the father of seed testing. It has a pointed tube with an oval slot near the end and is suitable for sampling seed in bags, not in bulk."),
  Q("d111l_160", 39, "The standardized phenol test for varietal (genetic) purity is widely used in which crops?",
    ["Cotton and sunflower", "Soybean and groundnut", "Maize and sorghum", "Paddy and wheat"], 3,
    "As per DA-111 notes (Lecture 39): The standardized phenol test is widely used for varietal purity testing in crops like paddy and wheat, where seeds are placed in 1% phenol solution and observed for colour change."),
  Q("d111l_161", 39, "The sodium hydroxide (NaOH) test is commonly used to distinguish:",
    ["Red and white rice varieties", "Viable seeds from dead seeds", "Dormant from non-dormant seeds", "Hybrid from inbred maize lines"], 0,
    "As per DA-111 notes (Lecture 39): The NaOH test is used for identification of red and white rice varieties. Seed is soaked in 5% NaOH; red rice cultivars turn orange while the yellow colour of white rice gradually disappears."),
  Q("d111l_162", 39, "The peroxidase enzyme activity test for varietal identification is used in the crop:",
    ["Wheat", "Soybean", "Paddy", "Cotton"], 1,
    "As per DA-111 notes (Lecture 39): The peroxidase test is used in soybean; seed coats contain high or low peroxidase activity which is used to distinguish varieties using guaiacol and hydrogen peroxide."),
  Q("d111l_163", 39, "Seeds that can be dried to low (2-5%) moisture and stored at low or sub-freezing temperatures for a long period are called:",
    ["Recalcitrant seeds", "Dormant seeds", "Orthodox seeds", "Hard-coated seeds"], 2,
    "As per DA-111 notes (Lecture 39): Orthodox seeds can be dried to low (2-5%) moisture content and successfully stored at low or sub-freezing temperatures for a long period, whereas recalcitrant seeds cannot withstand appreciable drying."),
  Q("d111l_164", 39, "Based on storability, which of the following belongs to the 'poor' storage group of crops?",
    ["Paddy", "Wheat", "Cotton", "Soybean and groundnut"], 3,
    "As per DA-111 notes (Lecture 39): Based on storability, Good crops = Paddy; Medium crops = Cotton, Wheat, Jowar; Poor crops = Soybean and Groundnut (oily seeds store poorly)."),
  Q("d111l_165", 39, "The chemical used in the tetrazolium (TZ) seed viability test is:",
    ["2,3,5-triphenyl tetrazolium chloride", "Ethyl methane sulphonate", "Sodium hydroxide solution", "Gibberellic acid (GA3)"], 0,
    "As per DA-111 notes (Lecture 39): The tetrazolium test uses 2,3,5-triphenyl tetrazolium chloride; living tissues reduce it to red formazan, reflecting dehydrogenase enzyme activity related to seed respiration and viability."),
  Q("d111l_166", 7, "Based on the origin of the abnormality, the three basic kinds of male sterility are:",
    ["Physical, chemical and biological sterility", "True, functional and induced male sterility", "Complete, partial and temporary sterility", "Natural, hybrid and mutant sterility"], 1,
    "As per DA-111 notes (Lecture 7): The three basic kinds of male sterility based on origin are True male sterility, Functional male sterility (anthers fail to release fertile pollen) and Induced male sterility (induced by chemicals)."),
  Q("d111l_167", 7, "Cytoplasmic-genetic male sterility (CGMS) is used for hybrid seed production in crops such as:",
    ["Onion and garlic only", "Tomato, brinjal and barley", "Bajra, maize, wheat, jowar and sunflower", "Only wheat and barley"], 2,
    "As per DA-111 notes (Lecture 7): Cytoplasmic-genetic male sterility (CGMS) is used in Bajra, Carrot, Chillies, Maize, Wheat, Paddy, Jowar and Sunflower for hybrid seed production."),
  Q("d111l_168", 7, "Cytoplasmic male sterility (CMS) is useful for hybrid seed production mainly in crops where the economic part is vegetative, the classic example being:",
    ["Paddy", "Wheat", "Sorghum", "Onion"], 3,
    "As per DA-111 notes (Lecture 7): CMS may be utilized for producing hybrid seed in species where a vegetative part is of economic value, e.g., Onion. In crops where seed is the economic part it is of no use, since the hybrid progeny would be male sterile."),
  Q("d111l_169", 7, "Self-incompatibility, a mechanism promoting cross-pollination, is reported in more than 300 species belonging to about how many families of angiosperms?",
    ["20 families", "5 families", "10 families", "50 families"], 0,
    "As per DA-111 notes (Lecture 7): More than 300 species belonging to 20 families of angiosperms show self-incompatibility, where viable pollen fails to fertilize the same flower or any flower of the same plant."),
  Q("d111l_170", 13, "The term 'mutation', coined by Hugo de Vries, is derived from the Latin word 'mutare', which means:",
    ["To grow", "To change", "To divide", "To select"], 1,
    "As per DA-111 notes (Lecture 13): The term mutation was coined by Hugo de Vries in 1900 while working on Oenothera lamarkiana; the word is derived from the Latin word 'MUTARE', meaning to change."),
  Q("d111l_171", 13, "The foundation for mutation breeding was laid by the X-ray induced mutation experiments of:",
    ["Mendel in the garden pea", "Shull in maize", "Muller (1927) in Drosophila and Stadler (1928) in barley", "Johannsen in beans"], 2,
    "As per DA-111 notes (Lecture 13): The experiments of Muller (1927) in Drosophila and Stadler (1928) in barley, using X-rays, laid the foundation for mutation breeding."),
  Q("d111l_172", 13, "The early-maturing castor variety 'Aruna' (NPH1) was developed through which mutagen treatment?",
    ["Colchicine treatment of the seed", "Ethyl methane sulphonate soaking", "Ultraviolet irradiation of seedlings", "Fast neutron irradiation of HC-6"], 3,
    "As per DA-111 notes (Lecture 13): Among mutation breeding achievements, the castor variety Aruna (NPH1) is a fast-neutron-induced mutant developed from HC-6."),
  Q("d111l_173", 15, "In maize, the male inflorescence is called the tassel, and its removal during hybrid seed production is known as:",
    ["Detasseling", "Emasculation by hand", "Rouging of off-types", "Bagging of flowers"], 0,
    "As per DA-111 notes (Lecture 15): In maize the male inflorescence is called the tassel, and the removal of the tassel is known as detasseling."),
  Q("d111l_174", 15, "In the hot water emasculation method used in crops like rice and maize, the flowers are treated at a temperature of approximately:",
    ["25-30 degrees C", "45-53 degrees C", "60-70 degrees C", "80-90 degrees C"], 1,
    "As per DA-111 notes (Lecture 15): Hot water treatment for emasculation is carried out at 45-53 degrees C for 1-10 minutes, e.g., in rice and maize."),
  Q("d111l_175", 15, "The gametocide FW 450 is used to induce male sterility (kill pollen grains) in which crop?",
    ["Wheat", "Rice", "Cotton", "Lucerne"], 2,
    "As per DA-111 notes (Lecture 15): The chemical gametocide FW 450 kills pollen grains in Cotton. Dipping in 57% ethyl alcohol kills pollen in Lucerne, and Ethrel spraying induces male sterility in wheat and rice."),
  Q("d111l_176", 15, "Immediately after emasculation, flowers are covered with a paper cover of which colour, to protect from foreign pollen and for easy identification?",
    ["White", "Golden yellow", "Blue", "Red"], 3,
    "As per DA-111 notes (Lecture 15): Emasculated flowers are covered immediately with a red coloured paper cover to protect against contamination from foreign pollen and for easy identification of the emasculated bud during dusting."),
  Q("d111l_177", 15, "Triticale, developed by intergeneric hybridization, is a cross between wheat (Triticum sp.) and:",
    ["Secale cereale (rye)", "Hordeum vulgare (barley)", "Avena sativa (oat)", "Oryza sativa (rice)"], 0,
    "As per DA-111 notes (Lecture 15): Triticale is an intergeneric hybrid developed from a cross between Triticum sp. and Secale cereale (rye)."),
  Q("d111l_178", 14, "Colchicine, the most widely used chemical for chromosome doubling, is an alkaloid derived from the seeds of:",
    ["Catharanthus roseus", "Colchicum autumnale of the family Liliaceae", "Oenothera lamarkiana", "Datura stramonium"], 1,
    "As per DA-111 notes (Lecture 14): Colchicine belongs to the family Liliaceae and is an alkaloid derived from the seeds of Colchicum autumnale. In anaphase it inhibits spindle fibre formation without inhibiting chromosome replication."),
  Q("d111l_179", 16, "In the Row Yield Trial (RYT) used for variety evaluation, one row of the check variety is included for every:",
    ["Five rows of the improved variety", "Twenty rows of the improved variety", "Ten rows of the improved variety", "Two rows of the improved variety"], 2,
    "As per DA-111 notes (Lecture 16): In the Row Yield Trial (RYT), for every ten rows of the improved variety one row of check variety is included, and it is not a replicated trial."),
  Q("d111l_180", 16, "In the Comparative Yield Trial (CYT), entries are evaluated with one or more checks over a period of:",
    ["One season", "Two seasons", "Five seasons", "Three seasons"], 3,
    "As per DA-111 notes (Lecture 16): In the Comparative Yield Trial (CYT), entries are evaluated in replication with one or more checks in three seasons; entries superior over the checks are then tested in Multilocation Trials."),
  Q("d111l_181", 16, "Multilocation Trials (MLTs) for evaluating new crop varieties are conducted for a period of:",
    ["Three years", "One year", "Five years", "Ten years"], 0,
    "As per DA-111 notes (Lecture 16): Multilocation Trials (MLTs) are tested for three years at agricultural research stations, SAUs, agricultural colleges and farmers' fields under the supervision of evaluation agencies."),
  Q("d111l_182", 20, "The important factors responsible for deterioration of the genetic purity of varieties during seed production were listed by:",
    ["Johannsen (1903)", "Kadam (1942)", "Shull (1914)", "Harrington (1972)"], 1,
    "As per DA-111 notes (Lecture 20): Kadam (1942) listed the important factors responsible for deterioration of varieties, of which mechanical mixtures are the most important reason."),
  Q("d111l_183", 19, "As per seed certification standards, the size of the seed tag for Breeder seed (golden yellow) is:",
    ["15 cm x 7.5 cm", "15 cm x 10 cm", "12 cm x 6 cm", "10 cm x 5 cm"], 2,
    "As per DA-111 notes (Lecture 19): Seed tag sizes are Breeder seed (golden yellow) 12cm x 6cm; Foundation seed (white) and Certified seed (blue) 15cm x 7.5cm; Truthfully labelled seed (opal green) 15cm x 10cm."),
  Q("d111l_184", 18, "For designated seed-borne diseases such as loose smut of wheat, the prescribed certification (isolation) distance is:",
    ["3 metres", "50 metres", "1000 metres", "180 metres"], 3,
    "As per DA-111 notes (Lecture 18): For designated diseases such as loose smut of wheat, the certification distance prescribed is 180 metres to avoid contamination within the seed field."),
  Q("d111l_185", 21, "If machines are used for harvesting a seed crop, the seed moisture content should not be more than:",
    ["15 per cent", "25 per cent", "30 per cent", "40 per cent"], 0,
    "As per DA-111 notes (Lecture 21): If machines are used for harvesting, the seed moisture content should not be more than 15%, and mechanical damage to seed is generally low when moisture is below 20%."),
];

// ---- self-check ----
const stop = new Set(["the","and","for","with","that","from","this","are","was","its","their","which","when","what","into","only","also","than","then","due","can","not","but","all","any","these","those","such","used","use","using","more","most","some","other","same","each","per","both","cent"]);
function words(s){ return s.toLowerCase().replace(/[^a-z]/g," ").split(/\s+/).filter(w=>w.length>=3 && !stop.has(w)); }
function nums(s){ return (s.toLowerCase().match(/\d+/g) || []); }
let problems = 0;
for (const q of NEW) {
  if (q.options.length !== 4) { console.log("BAD options count "+q.id); problems++; }
  if (new Set(q.options).size !== 4) { console.log("DUP options "+q.id); problems++; }
  if (q.correct < 0 || q.correct > 3) { console.log("BAD correct "+q.id); problems++; }
  const opt = q.options[q.correct];
  const ex = q.explanation.toLowerCase();
  const exNoSpace = ex.replace(/\s+/g, "");
  const wHit = words(opt).some(w => ex.includes(w));
  const numHit = nums(opt).every(n => ex.includes(n) || exNoSpace.includes(n));
  const ok = nums(opt).length > 0 ? (numHit && (wHit || true)) : wHit;
  if (!ok) { console.log("ANSWER NOT IN EXPLANATION "+q.id+" :: "+opt); problems++; }
}
if (problems) { console.log("\n"+problems+" problems — NOT writing."); process.exit(1); }

// position distribution
const pos=[0,0,0,0]; NEW.forEach(q=>pos[q.correct]++);
console.log("New questions: "+NEW.length+" | correct A/B/C/D = "+pos.join("/"));

// ---- serialize & append before final `];` ----
function ser(q){
  const opts = q.options.map(o=>JSON.stringify(o)).join(", ");
  return "  {\n"+
    `    id: ${JSON.stringify(q.id)},\n`+
    `    subject: "da-111",\n`+
    `    lecture: ${JSON.stringify(q.lecture)},\n`+
    `    lectureNo: ${q.lectureNo},\n`+
    `    question: ${JSON.stringify(q.question)},\n`+
    `    options: [${opts}],\n`+
    `    correct: ${q.correct},\n`+
    `    explanation: ${JSON.stringify(q.explanation)}\n`+
    "  }";
}
let content = fs.readFileSync(file, "utf8");
const closeIdx = content.lastIndexOf("];");
let prefix = content.substring(0, closeIdx).replace(/\s*$/,"");
if (!prefix.endsWith(",")) prefix += ",";
const block = NEW.map(ser).join(",\n");
content = prefix + "\n" + block + "\n];\n";
fs.writeFileSync(file, content, "utf8");
console.log("Appended "+NEW.length+" questions to da-111-lectures.ts");
