const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "../src/data/questions");
const stop = new Set("the and for with that from this are was its their which when what into only also than then due can not but all any these those such used use using more most some other same each per both cent".split(" "));
const words = s => s.toLowerCase().replace(/[^a-z]/g, " ").split(/\s+/).filter(w => w.length >= 3 && !stop.has(w));
const nums = s => (s.toLowerCase().match(/\d+/g) || []);
function Q(id, subj, lectureNo, question, options, correct, explanation){ return { id, subject: subj, lecture: "lecture-"+lectureNo, lectureNo, question, options, correct, explanation }; }

// DA-201 Oilseed crops (d201l_158+)
const da201 = [
  Q("d201l_158","da-201",1,"Crops that are cultivated for the production of oils are known as:",
    ["Oilseed crops","Fibre crops","Forage crops","Plantation crops"],0,
    "As per DA-201 notes: The crops that are cultivated for the production of oils are known as oilseed crops."),
  Q("d201l_159","da-201",1,"The Technology Mission on Oilseeds (TMO), which brought a dramatic change in India's oilseed scenario, was initiated in the year:",
    ["1966","1986","1998","2005"],1,
    "As per DA-201 notes: The oilseed scenario in India underwent a dramatic change with the initiation of the TMO (Technology Mission on Oilseeds) in 1986 (May)."),
  Q("d201l_160","da-201",2,"Groundnut, being a legume, can fix atmospheric nitrogen within one season to the extent of about:",
    ["5-10 kg N/ha","20-25 kg N/ha","60-100 kg N/ha","200-250 kg N/ha"],2,
    "As per DA-201 notes: Groundnut is able to fix atmospheric nitrogen at 60-100 kg N/ha within one season."),
  Q("d201l_161","da-201",2,"In groundnut, flowering usually takes place after sowing within:",
    ["5 to 10 days","60 to 70 days","90 to 100 days","24 to 30 days"],3,
    "As per DA-201 notes: In groundnut, flowering usually takes place between 24 to 30 days after sowing."),
  Q("d201l_162","da-201",3,"To break seed dormancy in groundnut, the seed is soaked for 12 hours in a solution of:",
    ["Ethrel","Gibberellic acid","Sodium chloride","Sulphuric acid"],0,
    "As per DA-201 notes: For removal of dormancy in groundnut, the seed is soaked for 12 hours in Ethrel (5 ml/10 lit) solution and then shade dried."),
  Q("d201l_163","da-201",4,"Spreading-type groundnut varieties generally come to maturity in:",
    ["50-60 days","125-135 days","100-105 days","180-200 days"],1,
    "As per DA-201 notes: Bunch and semi-spreading types mature by 100-105 days, whereas the spreading type matures in 125-135 days."),
  Q("d201l_164","da-201",4,"The critical limit of available zinc (Zn) in soil, below which deficiency occurs, is:",
    ["6.0 ppm","2.0 ppm","Less than 0.6 ppm","15 ppm"],2,
    "As per DA-201 notes: The critical limit of available Zn in soil is less than 0.6 ppm; deficiency is corrected by ZnSO4 at 2 kg/ha once in 2 years."),
  Q("d201l_165","da-201",3,"For groundnut, the optimum depth of ploughing during tillage is:",
    ["2-3 cm","5-7 cm","30-40 cm","15-20 cm"],3,
    "As per DA-201 notes: For groundnut, the optimum depth of ploughing is 15-20 cm."),
];

// DA-241 Agricultural Economics (d241l_101+)
const da241 = [
  Q("d241l_101","da-241",1,"In production economics, anything that aids in production is called a:",
    ["Resource","Liability","Revenue","Subsidy"],0,
    "As per DA-241 notes: Anything that aids in production is called a resource."),
  Q("d241l_102","da-241",1,"Resources that remain unchanged irrespective of the level of production are called:",
    ["Variable resources","Fixed resources","Stock resources","Flow resources"],1,
    "As per DA-241 notes: The resources that remain unchanged irrespective of the level of production are called fixed resources, and their costs are fixed costs."),
  Q("d241l_103","da-241",1,"Resources that vary with the level of production are called:",
    ["Fixed resources","Implicit resources","Variable resources","Joint resources"],2,
    "As per DA-241 notes: The resources that vary with the level of production are called variable resources, and their costs are variable costs."),
  Q("d241l_104","da-241",2,"Total product expressed in terms of physical units like kg, quintals or tonnes is termed:",
    ["Total Value Product","Marginal Value Product","Average Revenue","Total Physical Product"],3,
    "As per DA-241 notes: Total product expressed in terms of physical units like kgs, quintals, tonnes is termed Total Physical Product (TPP)."),
  Q("d241l_105","da-241",2,"When Total Physical Product (TPP) is expressed in terms of monetary value, it is called:",
    ["Total Value Product","Total Fixed Cost","Average Physical Product","Net revenue"],0,
    "As per DA-241 notes: The expression of TPP in terms of monetary value is called Total Value Product (TVP)."),
  Q("d241l_106","da-241",3,"The costs of self-owned and self-employed resources of a farmer are known as:",
    ["Explicit costs","Implicit costs","Deflated costs","Historical costs"],1,
    "As per DA-241 notes: Costs of self-owned and self-employed resources are known as implicit costs."),
  Q("d241l_107","da-241",3,"Social costs arising from production activities are also called:",
    ["Fixed costs","Joint costs","Externalities","Establishment costs"],2,
    "As per DA-241 notes: Social costs are also called as externalities."),
  Q("d241l_108","da-241",4,"The amount of money that a firm receives from the sale of certain quantities of a good at various prices is called:",
    ["Cost","Profit","Investment","Revenue"],3,
    "As per DA-241 notes: The amount of money that the firm receives from the sale of certain quantities of a good at various prices is called revenue."),
];

// DA-252 Surveying & Levelling (d252l_101+)
const da252 = [
  Q("d252l_101","da-252",1,"A representation of the ground drawn to a large scale is called a:",
    ["Plan","Map","Chart","Sketch"],0,
    "As per DA-252 notes: The representation is called a map if the scale is small, and a plan if the scale is large."),
  Q("d252l_102","da-252",2,"The operation of measuring distance with the help of a chain or a tape is called:",
    ["Ranging","Chaining","Levelling","Plotting"],1,
    "As per DA-252 notes: The operation of measuring distance with the help of a chain or a tape is called chaining."),
  Q("d252l_103","da-252",2,"In a metric chain, the length of each link is:",
    ["1 metre","0.5 metre","0.2 metre","2 metres"],2,
    "As per DA-252 notes: In a metric chain the length of each link is 0.2 m (20 cm); a 20 m chain has 100 links and a 30 m chain has 150 links."),
  Q("d252l_104","da-252",3,"The Invar tape, used for precise measurements, is made of an alloy of steel (64%) and:",
    ["Copper","Aluminium","Zinc","Nickel (36%)"],3,
    "As per DA-252 notes: The Invar tape is made of an alloy of steel (64%) and nickel (36%) and possesses a very low coefficient of thermal expansion."),
  Q("d252l_105","da-252",3,"In chaining, the chainman at the forward end of the chain is called the:",
    ["Leader (head chainman)","Follower (rear chainman)","Surveyor","Ranger"],0,
    "As per DA-252 notes: The chainman at the forward end of the chain is called the leader or head chainman, while the one at the rear end is the follower or rear chainman."),
  Q("d252l_106","da-252",4,"The operation of establishing intermediate points on a straight line between the terminal points is known as:",
    ["Chaining","Ranging","Offsetting","Booking"],1,
    "As per DA-252 notes: The operation of establishing intermediate points on a straight line between the terminal points is known as ranging."),
  Q("d252l_107","da-252",3,"In a 20 m metric chain, the total number of links provided is:",
    ["50","75","100","200"],2,
    "As per DA-252 notes: A 20 m metric chain is provided with 100 links, and a 30 m chain is divided into 150 links."),
];

// DA-262 Computer Applications (d262l_101+)
const da262 = [
  Q("d262l_101","da-262",1,"The Central Processing Unit (CPU) is often referred to as the:",
    ["Brain of the computer","Memory of the computer","Window of the computer","Gateway of the computer"],0,
    "As per DA-262 notes: The CPU performs all processing and is therefore known as the 'brain' of the computer."),
  Q("d262l_102","da-262",2,"The type of memory from which information can only be read but not written or changed is:",
    ["RAM","ROM","Cache","Register"],1,
    "As per DA-262 notes: ROM is called Read-Only Memory because information can only be read from and not written or changed onto ROM."),
  Q("d262l_103","da-262",2,"Computers that combine the features of both analog and digital computers are known as:",
    ["Super computers","Micro computers","Hybrid computers","Mainframe computers"],2,
    "As per DA-262 notes: Computers which combine the features of analog and digital computers are known as hybrid computers."),
  Q("d262l_104","da-262",3,"The software that manages the resources of a computer system and schedules its operation is called the:",
    ["Application software","Translator","Utility program","Operating system"],3,
    "As per DA-262 notes: The software that manages the resources of a computer system and schedules its operation is called the operating system."),
  Q("d262l_105","da-262",3,"The physical components of a computer are collectively known as:",
    ["Hardware","Software","Firmware","Freeware"],0,
    "As per DA-262 notes: The physical components of the computer are known as hardware, while the programs are software."),
  Q("d262l_106","da-262",4,"Files with the extension .COM or .EXE are called:",
    ["Batch files","Executable files","Text files","System files"],1,
    "As per DA-262 notes: The files with the extension of either .COM or .EXE are called executable files."),
  Q("d262l_107","da-262",4,"In a spreadsheet, the intersection of a row and a column is known as a:",
    ["Range","Sheet","Cell","Field"],2,
    "As per DA-262 notes: An intersection of a row and a column is known as a cell."),
  Q("d262l_108","da-262",5,"In MS-Excel, a document (the whole file) is called a:",
    ["Worksheet","Cell","Database","Workbook"],3,
    "As per DA-262 notes: An Excel document is called a workbook, which contains worksheets made up of cells."),
];

const ALL = { "da-201": da201, "da-241": da241, "da-252": da252, "da-262": da262 };

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
