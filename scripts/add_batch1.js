/**
 * Adds new source-verified questions to multiple subjects' lecture banks.
 * Each correct answer is a fact stated in the matching source PDF.
 * Self-checks every question (4 distinct options, valid index, answer
 * keyword/number present in explanation, balanced positions) before writing.
 */
const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "../src/data/questions");

const stop = new Set("the and for with that from this are was its their which when what into only also than then due can not but all any these those such used use using more most some other same each per both cent".split(" "));
const words = s => s.toLowerCase().replace(/[^a-z]/g, " ").split(/\s+/).filter(w => w.length >= 3 && !stop.has(w));
const nums = s => (s.toLowerCase().match(/\d+/g) || []);

// helper to build a question
function Q(id, subj, lectureNo, question, options, correct, explanation) {
  return { id, subject: subj, lecture: "lecture-" + lectureNo, lectureNo, question, options, correct, explanation };
}

// ---------- DA-101 Agricultural Meteorology (d101l_141+) ----------
const da101 = [
  Q("d101l_141","da-101",1,"Meteorology is defined as the science of:",
    ["The atmosphere and its phenomena","The soil and its physical properties","Ocean currents and tides only","Plant growth and development"],0,
    "As per DA-101 notes: Meteorology is defined as 'the science of the atmosphere'."),
  Q("d101l_142","da-101",1,"The branch of science dealing with the factors that determine and control the distribution of climate over the earth's surface is:",
    ["Agronomy","Climatology","Edaphology","Hydrology"],1,
    "As per DA-101 notes: Climatology is defined as the science dealing with the factors which determine and control the distribution of climate over the earth's surface."),
  Q("d101l_143","da-101",2,"The lowermost layer of the atmosphere, called the 'seat of weather phenomena', is the:",
    ["Stratosphere","Mesosphere","Troposphere","Ionosphere"],2,
    "As per DA-101 notes: The troposphere is the lowermost layer and is called the 'seat of weather phenomena' as almost all weather changes occur here."),
  Q("d101l_144","da-101",2,"The stratosphere is known as the:",
    ["Seat of weather phenomena","Seat of photochemical reactions","Seat of magnetic storms","Seat of solar radiation"],1,
    "As per DA-101 notes: The stratosphere is called the 'seat of photochemical reactions'. The troposphere is the seat of weather phenomena."),
  Q("d101l_145","da-101",3,"The average adiabatic lapse rate of the atmosphere is approximately:",
    ["1.0 degrees C per kilometre","6.5 degrees C per kilometre","10 degrees C per kilometre","0.1 degrees C per kilometre"],1,
    "As per DA-101 notes: The average adiabatic lapse rate is 6.5 degrees C per kilometre (assumed as 0.5 degrees C per 100 m)."),
  Q("d101l_146","da-101",4,"The Campbell-Stokes sunshine recorder was invented in 1853 by:",
    ["Sir George Gabriel Stokes","John Francis Campbell","Edmund Halley","John Dalton"],1,
    "As per DA-101 notes: The sunshine recorder was invented by John Francis Campbell in 1853 and modified in 1879 by Sir George Gabriel Stokes."),
  Q("d101l_147","da-101",5,"The thermal concept explaining the origin of the monsoon was proposed in 1636 by:",
    ["Halley","Flohn","Koppen","Thornthwaite"],0,
    "As per DA-101 notes: The 'Thermal concept' of the monsoon proposed by Halley in 1636 is of more practical relevance than other concepts."),
  Q("d101l_148","da-101",6,"The Indian Meteorological Department (IMD) was established in the year:",
    ["1875","1947","1901","1924"],0,
    "As per DA-101 notes: The Indian Meteorological Department was established in 1875 (at Pune)."),
  Q("d101l_149","da-101",6,"Tornadoes that occur over water bodies are known as:",
    ["Whirlwinds","Waterspouts","Cyclones","Typhoons"],1,
    "As per DA-101 notes: The tornadoes occurring on water are known as 'waterspouts'."),
  Q("d101l_150","da-101",7,"The anti-clockwise movement of air, associated with adverse climatic situations, is called:",
    ["Veering wind","Backing wind","Geostrophic wind","Trade wind"],1,
    "As per DA-101 notes: Clockwise movement of air is 'veering wind' and anti-clockwise movement is 'backing wind'; adverse climatic situations occur in backing wind."),
];

// ---------- DA-102 Crop Production / Rice (d102l_151+) ----------
const da102 = [
  Q("d102l_151","da-102",1,"In India, rice cultivation extends across the latitude range of:",
    ["8 to 35 degrees N","20 to 40 degrees N","0 to 10 degrees N","35 to 50 degrees N"],0,
    "As per DA-102 notes: Rice cultivation in India extends from 8 to 35 degrees N latitude and from sea level to as high as 3000 metres."),
  Q("d102l_152","da-102",2,"The favourable temperature range for blooming (flowering) in rice is:",
    ["15 to 20 degrees C","26.5 to 29.5 degrees C","35 to 40 degrees C","5 to 10 degrees C"],1,
    "As per DA-102 notes: The temperature requirement for blooming in rice is in the range of 26.5 to 29.5 degrees C."),
  Q("d102l_153","da-102",2,"At the time of ripening of the rice crop, the optimum temperature should be:",
    ["30 to 35 degrees C","20 to 25 degrees C","10 to 15 degrees C","40 to 45 degrees C"],1,
    "As per DA-102 notes: At the time of ripening of rice, the temperature should be between 20-25 degrees C."),
  Q("d102l_154","da-102",3,"In rice cultivation, puddling of the field should ideally be completed before transplanting by:",
    ["15 days","2 months","1 day","45 days"],0,
    "As per DA-102 notes: Land preparation for transplanting - puddling should be done before 15 days of transplanting (or completed 2 days before in black cotton soils)."),
  Q("d102l_155","da-102",4,"In the System of Rice Intensification (SRI), the nursery area required to plant one hectare is about:",
    ["1000 m2","100 m2","10 m2","5000 m2"],1,
    "As per DA-102 notes: In SRI, prepare a 100 m2 nursery to plant 1 ha area, using much less seed than conventional methods."),
  Q("d102l_156","da-102",4,"For seed treatment of paddy, the recommended dose of Carbendazim is:",
    ["3 g per kg of seed","30 g per kg of seed","0.3 g per kg of seed","100 g per kg of seed"],0,
    "As per DA-102 notes: Seed treatment - 3 grams of Carbendazim should be mixed with 1 kg paddy seeds, and sowing done after 24 hours in nursery."),
  Q("d102l_157","da-102",5,"In rice nursery management, seedlings older than how many days should not be planted?",
    ["30 days","60 days","90 days","120 days"],1,
    "As per DA-102 notes: For healthy nursery raising, nursery/seedlings beyond 60 days should not be planted."),
  Q("d102l_158","da-102",6,"Minor millets can be safely stored without pest and disease infestation for a period of:",
    ["2-3 years","6 months","10-12 years","1 month"],0,
    "As per DA-102 notes: In storage, minor millets are safely stored for 2-3 years without any pest and disease infestation."),
];

// ---------- DA-121 Soil Science (d121l_151+) ----------
const da121 = [
  Q("d121l_151","da-121",1,"Soil separates are defined as individual size groups of mineral soil particles which are:",
    ["2 mm or less in diameter","More than 5 mm in diameter","Exactly 1 cm in diameter","Larger than gravel"],0,
    "As per DA-121 notes: Soil separates may be defined as the individual size groups of mineral soil particles which are 2 mm or less in diameter."),
  Q("d121l_152","da-121",1,"According to the soil-separate size limits, the clay fraction has a particle size of:",
    ["Less than 0.002 mm","2.0 to 0.2 mm","0.2 to 0.02 mm","More than 2 mm"],0,
    "As per DA-121 notes: The clay fraction is less than 0.002 mm in size and forms the decisive fraction of the soil with most influence on soil behaviour."),
  Q("d121l_153","da-121",2,"Available soil water is defined as the portion of water retained in the soil between:",
    ["Field capacity and permanent wilting point","Saturation and field capacity","Hygroscopic coefficient and oven-dry","Maximum water-holding capacity and saturation"],0,
    "As per DA-121 notes: Available water is defined as that portion of water which is retained in the soil between field capacity and the permanent wilting point."),
  Q("d121l_154","da-121",3,"The study of living organisms in the soil (from Greek bios = life, logos = study) is called:",
    ["Soil physics","Soil biology","Soil chemistry","Pedology"],1,
    "As per DA-121 notes: From the Greek words bios = life and logos = study, the study of living organisms in soil is called soil biology."),
  Q("d121l_155","da-121",4,"The ratio of the weight of organic carbon to the weight of total nitrogen in soil or organic material is known as the:",
    ["C:N ratio","Base saturation","Exchange capacity","Bulk density"],0,
    "As per DA-121 notes: The ratio of the weight of organic carbon to the weight of total nitrogen in a soil or organic material is known as the C:N ratio."),
  Q("d121l_156","da-121",4,"The microbial conversion of organic forms of C, N, P and S to inorganic (mineral) forms is called:",
    ["Immobilization","Mineralization","Nitrification","Humification"],1,
    "As per DA-121 notes: Mineralization is the conversion of organic forms of C, N, P and S to inorganic or mineral forms as a result of microbial decomposition."),
  Q("d121l_157","da-121",4,"Denitrification is defined as the microbial reduction of nitrate and nitrite with the release and loss of:",
    ["Molecular nitrogen","Carbon dioxide","Sulphur dioxide","Ammonia"],0,
    "As per DA-121 notes: Denitrification is the microbial reduction of nitrate and nitrite with the release and loss of molecular nitrogen."),
  Q("d121l_158","da-121",5,"Soil particles that possess colloidal properties are generally less than which size?",
    ["0.001 mm","2 mm","0.5 mm","0.1 mm"],0,
    "As per DA-121 notes: Soil particles less than 0.001 mm in size possess colloidal properties and are known as soil colloids."),
  Q("d121l_159","da-121",2,"When two or three colours occur in patches within a soil, the condition is called:",
    ["Mottling","Leaching","Gleization","Eluviation"],0,
    "As per DA-121 notes: Frequently two or three colours occur in patches in a soil, which is called 'mottling'."),
];

// ---------- DA-122 Manures & Fertilizers (d122l_151+) ----------
const da122 = [
  Q("d122l_151","da-122",1,"Compost prepared using farm organic wastes with fresh dung and/or urine-soaked earth as a starter is called:",
    ["Urban compost","Rural compost","Green manure","Vermicompost"],1,
    "As per DA-122 notes: Compost prepared using farm organic wastes and fresh dung and/or urine soaked earth as a starter is called Rural Compost."),
  Q("d122l_152","da-122",2,"The popular household biogas unit promoted in villages is commonly called:",
    ["Gruha Lakshmi","Surya Jyoti","Annapurna","Kamadhenu"],0,
    "As per DA-122 notes: The biogas unit is popularly called as 'Gruha Lakshmi', helping village development."),
  Q("d122l_153","da-122",3,"In the symbiotic association in root nodules, Rhizobium fixes atmospheric nitrogen to the extent of:",
    ["25-50 kg nitrogen per acre","200-300 kg nitrogen per acre","2-5 kg nitrogen per acre","1-2 kg nitrogen per acre"],0,
    "As per DA-122 notes: Rhizobium fixes 25-50 kg nitrogen per acre in their root nodules, reducing nitrogen loss from soil."),
  Q("d122l_154","da-122",4,"In vermicomposting, the turnover (out-turn) of compost obtained from the residue is approximately:",
    ["50 per cent","75 per cent","25 per cent","100 per cent"],1,
    "As per DA-122 notes: The turnover of vermicompost is 75% (of 1000 kg material accommodated in the pit, the out-turn is 750 kg)."),
  Q("d122l_155","da-122",5,"The symbiotic association of Azolla pinnata and Anabaena azollae is termed the:",
    ["Rhizobium-legume symbiosis","Azolla-Anabaena complex","Mycorrhizal association","Frankia complex"],1,
    "As per DA-122 notes: The symbiotic association of Azolla pinnata and Anabaena azollae is termed the Azolla-Anabaena complex; it is used as green manure for rice."),
  Q("d122l_156","da-122",5,"Azolla is recommended as a green manure for rice mainly because of its large biomass and high nitrogen content of:",
    ["4-6 per cent N","0.5-1 per cent N","10-12 per cent N","20-25 per cent N"],0,
    "As per DA-122 notes: Azolla is recommended as green manure because of its large biomass and high N content (4-6% N) for submerged rice fields."),
  Q("d122l_157","da-122",6,"Green leaf manuring should be carried out before sowing of the main crop by about:",
    ["15-20 days","2-3 months","1 day","90 days"],0,
    "As per DA-122 notes: In dry and rainfed areas, green leaf manuring should be done 15-20 days prior to sowing of the main crop."),
  Q("d122l_158","da-122",7,"To neutralise the acidity caused by 100 kg of ammonium sulphate, the quantity of calcium carbonate required is:",
    ["110 kg","10 kg","250 kg","50 kg"],0,
    "As per DA-122 notes: To neutralize the acidity, for every 100 kg of ammonium sulphate, 110 kg of calcium carbonate is required."),
  Q("d122l_159","da-122",6,"The oil cake known as 'castor pomace' is:",
    ["Neem cake","Castor cake","Mustard cake","Cotton seed cake"],1,
    "As per DA-122 notes: Among non-edible oil cakes, castor cake is also called castor pomace."),
];

const ALL = { "da-101": da101, "da-102": da102, "da-121": da121, "da-122": da122 };

// ---- self-check ----
let problems = 0;
for (const [subj, qs] of Object.entries(ALL)) {
  const pos = [0,0,0,0];
  for (const q of qs) {
    if (q.options.length !== 4) { console.log("BAD opts "+q.id); problems++; }
    if (new Set(q.options).size !== 4) { console.log("DUP opts "+q.id); problems++; }
    if (q.correct < 0 || q.correct > 3) { console.log("BAD correct "+q.id); problems++; }
    pos[q.correct]++;
    const opt = q.options[q.correct], ex = q.explanation.toLowerCase(), exn = ex.replace(/\s+/g,"");
    const wHit = words(opt).some(w => ex.includes(w));
    const nHit = nums(opt).every(n => ex.includes(n) || exn.includes(n));
    const ok = nums(opt).length ? nHit : wHit;
    if (!ok) { console.log("ANSWER NOT IN EXPLANATION "+q.id+" :: "+opt); problems++; }
  }
  console.log(subj+": "+qs.length+" Qs, positions "+pos.join("/"));
}
if (problems) { console.log("\n"+problems+" problems — NOT writing."); process.exit(1); }

// ---- append ----
function ser(q){
  const opts = q.options.map(o=>JSON.stringify(o)).join(", ");
  return "  {\n"+
    `    id: ${JSON.stringify(q.id)},\n    subject: ${JSON.stringify(q.subject)},\n    lecture: ${JSON.stringify(q.lecture)},\n    lectureNo: ${q.lectureNo},\n`+
    `    question: ${JSON.stringify(q.question)},\n    options: [${opts}],\n    correct: ${q.correct},\n    explanation: ${JSON.stringify(q.explanation)}\n  }`;
}
for (const [subj, qs] of Object.entries(ALL)) {
  const file = path.join(dir, subj + "-lectures.ts");
  let content = fs.readFileSync(file, "utf8");
  const closeIdx = content.lastIndexOf("];");
  let prefix = content.substring(0, closeIdx).replace(/\s*$/,"");
  if (!prefix.endsWith(",")) prefix += ",";
  content = prefix + "\n" + qs.map(ser).join(",\n") + "\n];\n";
  fs.writeFileSync(file, content, "utf8");
  console.log("Appended "+qs.length+" to "+subj+"-lectures.ts");
}
