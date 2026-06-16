const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "../src/data/questions");
const stop = new Set("the and for with that from this are was its their which when what into only also than then due can not but all any these those such used use using more most some other same each per both cent".split(" "));
const words = s => s.toLowerCase().replace(/[^a-z]/g, " ").split(/\s+/).filter(w => w.length >= 3 && !stop.has(w));
const nums = s => (s.toLowerCase().match(/\d+/g) || []);
function Q(id, subj, lectureNo, question, options, correct, explanation){ return { id, subject: subj, lecture: "lecture-"+lectureNo, lectureNo, question, options, correct, explanation }; }

// DA-263 English Communication (d263l_201+)
const da263 = [
  Q("d263l_201","da-263",1,"The words 'a', 'an' and 'the' belong to which part of speech?",
    ["Articles","Pronouns","Prepositions","Conjunctions"],0,
    "As per DA-263 notes: 'A', 'an' and 'the' are called the articles; 'a' or 'an' is the indefinite article and 'the' is the definite article."),
  Q("d263l_202","da-263",1,"In English grammar, 'a' and 'an' are known as the:",
    ["Definite article","Indefinite article","Demonstrative article","Possessive article"],1,
    "As per DA-263 notes: 'A' or 'an' is called the indefinite article and 'the' is called the definite article."),
  Q("d263l_203","da-263",2,"Nouns which we can count (e.g., book, pen, boy) are called:",
    ["Abstract nouns","Material nouns","Countable (count) nouns","Collective nouns"],2,
    "As per DA-263 notes: Nouns which we can count are called count (countable) nouns, while nouns which we cannot count are called uncount nouns."),
  Q("d263l_204","da-263",2,"When the actual words of a speaker are reported within quotation marks, it is called:",
    ["Indirect speech","Reported speech","Passive voice","Direct speech"],3,
    "As per DA-263 notes: Reporting the actual words of the speaker (within quotation marks) is called direct speech; reporting in one's own words is indirect or reported speech."),
  Q("d263l_205","da-263",3,"In the sentence 'Penicillin was discovered by Alexander Fleming', the scientist credited with the discovery is:",
    ["Alexander Fleming","John Baird","Lewis Waterman","Edward Jenner"],0,
    "As per DA-263 notes (passive voice example): Penicillin was discovered by Alexander Fleming."),
  Q("d263l_206","da-263",3,"As per the passive-voice example in the notes, Television was invented by:",
    ["Thomas Edison","John Baird","Alexander Fleming","Graham Bell"],1,
    "As per DA-263 notes (passive voice example): John Baird invented Television in 1925, i.e., Television was invented by John Baird in 1925."),
  Q("d263l_207","da-263",3,"According to the notes, the Fountain pen was invented in 1884 by:",
    ["John Baird","Alexander Fleming","Waterman","Biro"],2,
    "As per DA-263 notes (passive voice example): Waterman invented the Fountain pen in 1884; i.e., the fountain pen was invented by Waterman in 1884."),
];

// DA-281 Forestry / Agroforestry (d281l_202+)
const da281 = [
  Q("d281l_202","da-281",1,"The first National Forest Policy of India was enunciated on 19th October of which year?",
    ["1894","1864","1927","1952"],0,
    "As per DA-281 notes: The first forest policy of India was enunciated on 19th October, 1894."),
  Q("d281l_203","da-281",2,"The upper branchy part of a tree above the bole, comprising branches and foliage, is defined as the:",
    ["Bole","Crown","Buttress","Canopy gap"],1,
    "As per DA-281 notes: Crown is defined as the upper branchy part of a tree above the bole comprising of branches and foliage springing from the bole."),
  Q("d281l_204","da-281",2,"The lower portion of the stem up to the point where the main branches are given off is known as the:",
    ["Crown","Taper","Bole","Buttress"],2,
    "As per DA-281 notes: The lower portion of the stem up to the point where the main branches are given off is known as the bole."),
  Q("d281l_205","da-281",3,"The theory and practice of raising forest crops is known as:",
    ["Sericulture","Horticulture","Olericulture","Silviculture"],3,
    "As per DA-281 notes: Silviculture is the theory and practice of raising forest crops."),
  Q("d281l_206","da-281",3,"The symbiotic composite structure formed by the association of fungal hyphae with plant rootlets is called:",
    ["Mycorrhiza","Rhizobium nodule","Lichen","Haustorium"],0,
    "As per DA-281 notes: The composite structure of fungus and invaded rootlets is called Mycorrhiza."),
  Q("d281l_207","da-281",4,"Growing of plants for beautification of the surroundings is known as:",
    ["Social forestry","Bio-aesthetic plantation","Agro-forestry","Farm forestry"],1,
    "As per DA-281 notes: Growing of plants for beautification of the surroundings is known as bio-aesthetic plantation."),
  Q("d281l_208","da-281",1,"Against the world average of 1.6 hectares, the per capita forest area available in India is only about:",
    ["1.0 ha","0.5 ha","0.11 ha","2.5 ha"],2,
    "As per DA-281 notes: As compared to the world average of 1.6 hectares per capita forest area, India has only 0.11 ha per capita forest area."),
];

// DA-282 Horticulture / Plant Propagation (d282l_202+)
const da282 = [
  Q("d282l_202","da-282",1,"The arrangement of plants in an orchard is known as the:",
    ["Lay-out","Spacing","Pruning","Training"],0,
    "As per DA-282 notes: The arrangement of plants in the orchard is known as the lay-out."),
  Q("d282l_203","da-282",2,"The bud or part that develops into the framework, branches, flowers and fruits of a grafted plant is termed the:",
    ["Rootstock","Scion","Interstock","Sucker"],1,
    "As per DA-282 notes: The bud which develops framework branches, flowers and fruits is termed the scion, while the supporting stem and root portion is the rootstock."),
  Q("d282l_204","da-282",2,"The portion that provides the supportive stem and root system to a grafted/budded plant is termed the:",
    ["Scion","Bud","Root stock (stock)","Bulbil"],2,
    "As per DA-282 notes: The portion over which the bud is united, which provides the supportive stem and root system, is termed the root stock or stock."),
  Q("d282l_205","da-282",2,"The process of connecting a scion (a single bud) and a rootstock so that they unite and grow as one plant is called:",
    ["Layering","Cutting","Grafting","Budding"],3,
    "As per DA-282 notes: The process of connecting a scion, which is a bud, and a rootstock so that they unite and grow successfully as one plant is termed budding."),
  Q("d282l_206","da-282",3,"The small bulb-like structures produced in the aerial portion of the stem are termed:",
    ["Bulbils","Offsets","Corms","Tubers"],0,
    "As per DA-282 notes: The bulblets which are produced in the aerial portion of the stem are termed bulbils; full-grown bulblets are termed offsets."),
  Q("d282l_207","da-282",4,"Mango seedlings take 8-10 years to come to bearing, whereas grafted mango trees bear in about:",
    ["8-10 years","3-4 years","15-20 years","1 year"],1,
    "As per DA-282 notes: Mango seedlings take 8-10 years to come to bearing, compared with 3-4 years for grafted trees."),
  Q("d282l_208","da-282",1,"Based on depth, black soils are classified as shallow (30 cm or less), medium (30-100 cm) and deep when the depth is:",
    ["Less than 10 cm","Exactly 30 cm","Over 100 cm","50 cm"],2,
    "As per DA-282 notes: Black soils are distinguished into shallow (30 cm or less), medium (30-100 cm) and deep (over 100 cm)."),
];

// DA-291 Agricultural Extension & Rural Development (d291l_201+)
const da291 = [
  Q("d291l_201","da-291",1,"Education is defined as the process of bringing a desirable change in the:",
    ["Behaviour of a human being","Soil fertility status","Market price of produce","Climate of a region"],0,
    "As per DA-291 notes: Education is the process of bringing desirable change in the behaviour of human beings."),
  Q("d291l_202","da-291",1,"The hierarchically structured education system running from kindergarten through the university is called:",
    ["Informal education","Formal education","Non-formal education","Distance education"],1,
    "As per DA-291 notes: Formal education refers to the hierarchically structured education system running from kindergarten through the university."),
  Q("d291l_203","da-291",1,"Organized and systematic educational activity carried on outside the framework of the formal system for a particular group is called:",
    ["Formal education","Incidental education","Non-formal education","Primary education"],2,
    "As per DA-291 notes: Non-formal education is the organized and systematic education activity carried on outside the framework of the formal system to provide selected learning to a particular group."),
  Q("d291l_204","da-291",2,"In formal education attendance is compulsory, whereas in non-formal education participation is:",
    ["Compulsory","Penalised","Prohibited","Voluntary"],3,
    "As per DA-291 notes: In formal education attendance is compulsory, while in non-formal education participation is voluntary."),
  Q("d291l_205","da-291",3,"In agricultural extension, 'PRA' stands for:",
    ["Participatory Rural Appraisal","Public Resource Allocation","Planned Rural Administration","Primary Rural Agency"],0,
    "As per DA-291 notes: PRA stands for Participatory Rural Appraisal, a method with salient features, principles and techniques used in rural development."),
  Q("d291l_206","da-291",1,"Education that is lifelong, incidental, spontaneous and not pre-planned, gained from daily experiences, is called:",
    ["Formal education","Informal education","Non-formal education","Technical education"],1,
    "As per DA-291 notes: Informal education is a lifelong process which is incidental and spontaneous, not pre-planned, and not imparted by any specialized agency."),
];

const ALL = { "da-263": da263, "da-281": da281, "da-282": da282, "da-291": da291 };

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
