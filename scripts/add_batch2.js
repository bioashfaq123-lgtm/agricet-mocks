const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "../src/data/questions");
const stop = new Set("the and for with that from this are was its their which when what into only also than then due can not but all any these those such used use using more most some other same each per both cent".split(" "));
const words = s => s.toLowerCase().replace(/[^a-z]/g, " ").split(/\s+/).filter(w => w.length >= 3 && !stop.has(w));
const nums = s => (s.toLowerCase().match(/\d+/g) || []);
function Q(id, subj, lectureNo, question, options, correct, explanation){ return { id, subject: subj, lecture: "lecture-"+lectureNo, lectureNo, question, options, correct, explanation }; }

// DA-131 Entomology (d131l_136+)
const da131 = [
  Q("d131l_136","da-131",1,"Among all known animal species, the proportion that are arthropods is over:",
    ["85 per cent","25 per cent","50 per cent","10 per cent"],0,
    "As per DA-131 notes: Over 85 percent of all known animal species are arthropods, making them the largest group in the animal kingdom."),
  Q("d131l_137","da-131",2,"In insects, the body cavity filled with colourless/white blood (haemolymph) is called the:",
    ["Coelom","Haemocoel","Pericardium","Spiracle"],1,
    "As per DA-131 notes: In insects the body cavity is filled with white coloured blood and is known as the haemocoel."),
  Q("d131l_138","da-131",2,"The grouping of insect body segments into distinct regions (head, thorax, abdomen) is known as:",
    ["Metamerism","Sclerotization","Tagmosis","Moulting"],2,
    "As per DA-131 notes: The grouping of body segments into regions (head, thorax, abdomen) is known as tagmosis."),
  Q("d131l_139","da-131",3,"The labium of an insect mouthpart, also called the lower lip, is also known as the:",
    ["First maxillae","Hypopharynx","Labrum","Second maxillae"],3,
    "As per DA-131 notes: The labium is known as the lower lip and is also called the second maxillae."),
  Q("d131l_140","da-131",4,"Integrated Pest Management (IPM) as a pest management system was first defined by the FAO in the year:",
    ["1967","1914","1985","1947"],0,
    "As per DA-131 notes: According to FAO (1967), IPM was defined as a pest management system in the context of the associated environment and population dynamics of the pest species."),
  Q("d131l_141","da-131",5,"The Destructive Insects and Pests Act, enacted to prevent the introduction of pests into India, was passed in the year:",
    ["1947","1914","1966","1985"],1,
    "As per DA-131 notes: The Government of India passed the 'Destructive Insects and Pests Act of 1914' to prevent the introduction of any insect, fungus or other pest into the country."),
  Q("d131l_142","da-131",5,"The Directorate of Plant Protection, Quarantine and Storage (DPPQS) was established at Faridabad in the year:",
    ["1905","1914","1946","1966"],2,
    "As per DA-131 notes: The Directorate of Plant Protection, Quarantine and Storage (DPPQS) was established at Faridabad in 1946."),
  Q("d131l_143","da-131",5,"The certificate issued to declare that exported plant material is free from pests and diseases is called the:",
    ["Health certificate","Origin certificate","Fumigation certificate","Phytosanitary certificate"],3,
    "As per DA-131 notes: The certificate declaring plant material to be free from pests and diseases is called the 'Phytosanitary certificate'."),
  Q("d131l_144","da-131",6,"The first Quarantine Act in the world came into operation in the USA in the year:",
    ["1905","1914","1946","1875"],0,
    "As per DA-131 notes: The first Quarantine Act in the USA came into operation in 1905."),
  Q("d131l_145","da-131",3,"In the insect abdomen, the last (terminal) segment, as seen in Protura, is known as the:",
    ["Propodaeum","Telson","Pleuron","Notum"],1,
    "As per DA-131 notes: The last segment of the abdomen is known as the telson or tail, as in the case of Protura."),
];

// DA-132 Pests of Crops (d132l_121+)
const da132 = [
  Q("d132l_121","da-132",1,"The scientific name of the Rice Stem Borer is:",
    ["Scirpophaga incertulas","Orseolia oryzae","Nilaparvata lugens","Cnaphalocrocis medinalis"],0,
    "As per DA-132 notes: The scientific name of the Rice Stem Borer is Scirpophaga incertulas; it is a monophagous pest of rice."),
  Q("d132l_122","da-132",1,"The scientific name of the Rice Gall Midge is:",
    ["Dicladispa armigera","Orseolia oryzae","Mythimna separata","Nephotettix nigropictus"],1,
    "As per DA-132 notes: The scientific name of the Rice Gall Midge is Orseolia oryzae; the adult fly is mosquito-like and 3-3.5 mm long."),
  Q("d132l_123","da-132",2,"The Brown Planthopper of rice has the scientific name:",
    ["Cnaphalocrocis medinalis","Amsacta albistriga","Nilaparvata lugens","Oligonychus oryzae"],2,
    "As per DA-132 notes: The scientific name of the Brown Planthopper (BPH) of rice is Nilaparvata lugens."),
  Q("d132l_124","da-132",2,"The scientific name of the Rice Leaf Folder is:",
    ["Scirpophaga incertulas","Nilaparvata lugens","Dicladispa armigera","Cnaphalocrocis medinalis"],3,
    "As per DA-132 notes: The scientific name of the Rice Leaf Folder is Cnaphalocrocis medinalis."),
  Q("d132l_125","da-132",3,"The scientific name of Rice Hispa is:",
    ["Dicladispa armigera","Orseolia oryzae","Mythimna separata","Meloidogyne spp."],0,
    "As per DA-132 notes: The scientific name of Rice Hispa is Dicladispa armigera."),
  Q("d132l_126","da-132",3,"The Rice Green Leafhopper has the scientific name:",
    ["Nilaparvata lugens","Nephotettix nigropictus","Cnaphalocrocis medinalis","Amsacta albistriga"],1,
    "As per DA-132 notes: The scientific name of the Rice Green Leafhopper is Nephotettix nigropictus; it is about 5 mm long with black spots in males."),
  Q("d132l_127","da-132",4,"The Red Hairy Caterpillar, a polyphagous pest, has the scientific name:",
    ["Orseolia oryzae","Dicladispa armigera","Amsacta albistriga","Nilaparvata lugens"],2,
    "As per DA-132 notes: The scientific name of the Red Hairy Caterpillar is Amsacta albistriga (and A. moorei)."),
  Q("d132l_128","da-132",4,"The Root Knot Nematode that attacks many crops belongs to the genus:",
    ["Scirpophaga","Nephotettix","Cnaphalocrocis","Meloidogyne"],3,
    "As per DA-132 notes: The scientific name of the Root Knot Nematode is Meloidogyne spp."),
  Q("d132l_129","da-132",2,"The adult of the rice gall midge resembles which insect and measures about 3-3.5 mm long?",
    ["A mosquito","A honeybee","A butterfly","A grasshopper"],0,
    "As per DA-132 notes: The rice gall midge fly is mosquito-like and is 3-3.5 mm long."),
];

// DA-151 Farm Power & Machinery (d151l_158+)
const da151 = [
  Q("d151l_158","da-151",1,"The power developed by an average pair of bullocks for usual farm work is about:",
    ["1 hp","10 hp","0.1 hp","5 hp"],0,
    "As per DA-151 notes: The power developed by an average pair of bullocks is about 1 hp for usual farm work."),
  Q("d151l_159","da-151",2,"An engine in which the working cycle is completed in two revolutions of the crankshaft is called a:",
    ["Two stroke cycle engine","Four stroke cycle engine","External combustion engine","Rotary engine"],1,
    "As per DA-151 notes: When the cycle is completed in two revolutions of the crankshaft it is called a four stroke cycle engine; in one revolution it is a two stroke cycle engine."),
  Q("d151l_160","da-151",2,"The process of removal of burnt or exhaust gases from the engine cylinder is known as:",
    ["Combustion","Compression","Scavenging","Ignition"],2,
    "As per DA-151 notes: The process of removal of burnt or exhaust gases from the engine cylinder is known as scavenging."),
  Q("d151l_161","da-151",3,"The complete path of power transmission from the engine to the wheels of a tractor is called the:",
    ["Drawbar","Clutch","Differential","Power train"],3,
    "As per DA-151 notes: The complete path of power from the engine to the wheels is called the power train."),
  Q("d151l_162","da-151",4,"The word 'tractor' first appeared on record in a patent in the year:",
    ["1890","1906","1936","1960"],0,
    "As per DA-151 notes: In 1890 the word tractor appeared first on record in a patent issued for a tractor invented by George H. Harris of Chicago."),
  Q("d151l_163","da-151",4,"Tractor manufacturing in India was started in 1960-61 by the first manufacturer:",
    ["Escorts Ltd","M/s Eicher Good Earth","Mahindra & Mahindra","TAFE"],1,
    "As per DA-151 notes: In 1960-61, tractor manufacturing was started in India by the first manufacturer M/s Eicher Good Earth."),
  Q("d151l_164","da-151",5,"Two-wheel tractors used for small farms, hilly areas and gardening are also called:",
    ["Crawler tractors","Garden tractors","Power tillers","Walking ploughs"],2,
    "As per DA-151 notes: Two-wheel tractors are used for small farms, hilly areas and gardening purposes and are called power tillers."),
  Q("d151l_165","da-151",6,"The amount of heat liberated by the complete combustion of a fuel is known as its:",
    ["Flash point","Octane number","Viscosity","Calorific value"],3,
    "As per DA-151 notes: The heat liberated by combustion of a fuel is known as the calorific value or heat value of the fuel."),
  Q("d151l_166","da-151",2,"An engine in which the working cycle is completed in one revolution of the crankshaft is a:",
    ["Two stroke cycle engine","Four stroke cycle engine","Diesel four stroke engine","External combustion engine"],0,
    "As per DA-151 notes: When the cycle is completed in one revolution of the crankshaft it is called a two stroke cycle engine."),
];

// DA-171 Plant Pathology (d171l_201+)
const da171 = [
  Q("d171l_201","da-171",1,"When an entire leaf blade, bud or other plant part dies quickly as a whole, the symptom is known as:",
    ["Blast","Wilt","Canker","Mosaic"],0,
    "As per DA-171 notes: When the entire leaf blade, bud or other plant part is involved resulting in quick death of the part or plant as a whole, it is known as blast."),
  Q("d171l_202","da-171",1,"Smaller galls produced on plant parts, as in black wart of potato, are called:",
    ["Pustules","Warts","Cankers","Scabs"],1,
    "As per DA-171 notes: Smaller galls are called warts, e.g., black wart of potato."),
  Q("d171l_203","da-171",2,"The propagules of a pathogen that cause the initial (primary) infection in a crop are called the:",
    ["Secondary inoculum","Resting spores","Primary inoculum","Vector load"],2,
    "As per DA-171 notes: The initial infection occurring from the sources of pathogen survival is the primary infection, and the propagules that cause it are called the primary inoculum."),
  Q("d171l_204","da-171",2,"The transport of inoculum from one host to another at various distances, resulting in spread of disease, is called:",
    ["Inoculation","Penetration","Colonization","Dispersal of plant pathogens"],3,
    "As per DA-171 notes: The transport of inoculum from one host to another at various distances, resulting in the spread of disease, is called dispersal of plant pathogens."),
  Q("d171l_205","da-171",3,"Direct parasitism, lysis or death of a pathogen by another micro-organism while the pathogen is in its parasitic phase is known as:",
    ["Hyperparasitism","Antibiosis","Competition","Predation"],0,
    "As per DA-171 notes: Hyperparasitism is the direct parasitism or lysis and death of the pathogen by another micro-organism when the pathogen is in its parasitic phase."),
  Q("d171l_206","da-171",4,"Contact fungicides which kill the pathogen present on the host surface when it comes in contact with the host are called:",
    ["Systemics","Eradicants","Protectants","Antibiotics"],2,
    "As per DA-171 notes: Contact fungicides which kill the pathogen present on the host surface when it comes in contact with the host are called protectants."),
  Q("d171l_207","da-171",4,"For controlling sett-borne diseases of sugarcane, hot water treatment of setts is commonly done at:",
    ["80 degrees C for 10 minutes","52 degrees C for 30 minutes","100 degrees C for 5 minutes","30 degrees C for 2 hours"],1,
    "As per DA-171 notes: Hot water treatment of sugarcane setts at 52 degrees C for 30 minutes (followed by steeping in 0.1% carbendazim) controls sett-borne diseases."),
];

const ALL = { "da-131": da131, "da-132": da132, "da-151": da151, "da-171": da171 };

let problems = 0;
for (const [subj, qs] of Object.entries(ALL)) {
  for (const q of qs) {
    if (q.options.length !== 4 || new Set(q.options).size !== 4) { console.log("BAD opts "+q.id); problems++; }
    if (q.correct < 0 || q.correct > 3) { console.log("BAD correct "+q.id); problems++; }
    const opt=q.options[q.correct], ex=q.explanation.toLowerCase(), exn=ex.replace(/\s+/g,"");
    const ok = nums(opt).length ? nums(opt).every(n=>ex.includes(n)||exn.includes(n)) : words(opt).some(w=>ex.includes(w));
    if (!ok) { console.log("ANSWER NOT IN EXPLANATION "+q.id+" :: "+opt); problems++; }
  }
}
if (problems) { console.log("\n"+problems+" problems — NOT writing."); process.exit(1); }
function ser(q){ const opts=q.options.map(o=>JSON.stringify(o)).join(", ");
  return "  {\n    id: "+JSON.stringify(q.id)+",\n    subject: "+JSON.stringify(q.subject)+",\n    lecture: "+JSON.stringify(q.lecture)+",\n    lectureNo: "+q.lectureNo+",\n    question: "+JSON.stringify(q.question)+",\n    options: ["+opts+"],\n    correct: "+q.correct+",\n    explanation: "+JSON.stringify(q.explanation)+"\n  }"; }
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
