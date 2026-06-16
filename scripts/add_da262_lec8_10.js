const fs = require("fs");
const path = require("path");
const file = path.join(__dirname, "../src/data/questions/da-262-lectures.ts");
const stop = new Set("the and for with that from this are was its their which when what into only also than then due can not but all any these those such used use using more most some other same each per both cent".split(" "));
const words = s => s.toLowerCase().replace(/[^a-z]/g, " ").split(/\s+/).filter(w => w.length >= 3 && !stop.has(w));
const nums = s => (s.toLowerCase().match(/\d+/g) || []);
const Q = (id, n, question, options, correct, explanation) => ({ id, subject: "da-262", lecture: "lecture-" + n, lectureNo: n, question, options, correct, explanation });

const NEW = [
  // Lecture 8 — Computer Networking Basics (source-grounded)
  Q("d262l_109", 8, "A computer network confined to a single location such as a single building or office is called a:",
    ["Local Area Network (LAN)", "Wide Area Network (WAN)", "Metropolitan Area Network (MAN)", "Internet"], 0,
    "As per DA-262 notes: If a network is confined to a single location, typically a building, it is called a Local Area Network (LAN)."),
  Q("d262l_110", 8, "A network spread over wide areas such as cities, states or countries is called a:",
    ["Local Area Network (LAN)", "Personal Area Network (PAN)", "Wide Area Network (WAN)", "Campus Area Network"], 2,
    "As per DA-262 notes: When a network is located over wide areas such as cities, states, countries it is called a Wide Area Network (WAN)."),
  Q("d262l_111", 8, "A network that is larger than a LAN and typically spans a city is called a:",
    ["Wide Area Network (WAN)", "Metropolitan Area Network (MAN)", "Local Area Network (LAN)", "Home Area Network"], 1,
    "As per DA-262 notes: A Metropolitan Area Network (MAN) is a network that is larger than a LAN, typically covering a city or metropolitan area."),
  Q("d262l_112", 8, "In computer networking, TCP/IP stands for:",
    ["Transfer Control Protocol / Internet Provider", "Total Communication Protocol / Internet Program", "Transmission Control Protocol / Internet Protocol", "Terminal Control Program / Internet Path"], 2,
    "As per DA-262 notes: TCP/IP stands for Transmission Control Protocol / Internet Protocol, the basic communication protocol of the Internet."),
  Q("d262l_113", 8, "The World Wide Web (WWW) uses which protocol for transferring web pages?",
    ["FTP (File Transfer Protocol)", "SMTP (Simple Mail Transfer Protocol)", "TCP (Transmission Control Protocol)", "HTTP (Hyper Text Transfer Protocol)"], 3,
    "As per DA-262 notes: The WWW supports a protocol called HTTP (Hyper Text Transfer Protocol) used to transfer web pages on the World Wide Web."),
  Q("d262l_114", 8, "The peripheral device that allows a computer to connect and communicate over telephone lines by converting digital and analog signals is a:",
    ["Modem", "Scanner", "Plotter", "Router switch"], 0,
    "As per DA-262 notes: A modem is a peripheral device that allows a computer to connect and communicate (over telephone lines) by modulating and demodulating digital and analog signals."),
  // Lecture 9 — Computer Applications in Agriculture (standard facts)
  Q("d262l_115", 9, "In agriculture, GIS stands for:",
    ["Global Information Service", "Geographic Information System", "Grid Imaging Software", "General Internet Server"], 1,
    "As per DA-262 syllabus: GIS stands for Geographic Information System, a computer system used to capture, store, analyse and display spatial/geographic data for applications like soil and crop mapping."),
  Q("d262l_116", 9, "Acquiring information about the earth's surface (crops, soil, water) without being in physical contact with it, usually through satellites, is called:",
    ["Remote sensing", "Data mining", "Word processing", "Tele-conferencing"], 0,
    "As per DA-262 syllabus: Remote sensing is the science of acquiring information about objects on the earth's surface without being in physical contact, commonly using satellites and aerial sensors in agriculture."),
  Q("d262l_117", 9, "The satellite-based system used to determine precise location (latitude/longitude) for precision farming is:",
    ["LAN", "GPS (Global Positioning System)", "HTTP", "RAM"], 1,
    "As per DA-262 syllabus: GPS (Global Positioning System) is a satellite-based navigation system that provides precise location, used in precision agriculture for site-specific field operations."),
  Q("d262l_118", 9, "e-NAM, the online trading platform for agricultural commodities in India, stands for electronic:",
    ["National Agriculture Market", "National Animal Management", "Network of Agri Machinery", "New Agricultural Mission"], 0,
    "As per DA-262 syllabus: e-NAM stands for electronic National Agriculture Market, a pan-India electronic trading portal (launched 2016) that networks agricultural produce market committees (APMCs)."),
  Q("d262l_119", 9, "Site-specific crop management that uses GPS, GIS and remote sensing to apply inputs precisely where needed is called:",
    ["Subsistence farming", "Shifting cultivation", "Precision agriculture", "Mixed farming"], 2,
    "As per DA-262 syllabus: Precision agriculture (precision farming) uses information technology such as GPS, GIS and remote sensing to manage spatial variability and apply inputs precisely, improving efficiency."),
  Q("d262l_120", 9, "A spreadsheet package like MS-Excel is widely used in agriculture mainly for:",
    ["Designing irrigation pumps", "Controlling tractor engines", "Spraying pesticides", "Storing, calculating and analysing farm data"], 3,
    "As per DA-262 syllabus: Spreadsheet software (MS-Excel) is used in agriculture to store, calculate and analyse farm data such as yields, costs and inputs using formulas, functions and charts."),
  // Lecture 10 — Emerging Technologies (standard facts)
  Q("d262l_121", 10, "In emerging technologies, AI stands for:",
    ["Automated Internet", "Artificial Intelligence", "Advanced Information", "Analog Interface"], 1,
    "As per DA-262 syllabus: AI stands for Artificial Intelligence — the capability of machines to perform tasks that normally require human intelligence, increasingly applied in agriculture for disease detection and decision support."),
  Q("d262l_122", 10, "The network of physical devices and sensors connected to the internet to collect and exchange data, used in smart farming, is called:",
    ["Internet of Things (IoT)", "Read Only Memory", "Local Area Network", "Operating System"], 0,
    "As per DA-262 syllabus: IoT (Internet of Things) is a network of internet-connected sensors and devices that collect and exchange data, used in smart/precision farming for monitoring soil moisture, weather and crops."),
  Q("d262l_123", 10, "Unmanned aerial vehicles (UAVs) increasingly used in agriculture for crop monitoring and spraying are commonly known as:",
    ["Routers", "Modems", "Drones", "Servers"], 2,
    "As per DA-262 syllabus: Drones (UAVs - unmanned aerial vehicles) are used in agriculture for aerial crop monitoring, mapping, and spraying of fertilizers and pesticides."),
  Q("d262l_124", 10, "Machine Learning (ML), used in agricultural prediction models, is best described as a subset of:",
    ["Word processing", "Computer hardware", "Spreadsheet software", "Artificial Intelligence"], 3,
    "As per DA-262 syllabus: Machine Learning (ML) is a subset of Artificial Intelligence in which computer systems learn patterns from data to make predictions, used in agriculture for yield and pest forecasting."),
  Q("d262l_125", 10, "Large and complex data sets analysed to reveal patterns and trends (e.g., for agricultural decision-making) are referred to as:",
    ["Big Data", "Floppy disk", "Megabyte", "Cache memory"], 0,
    "As per DA-262 syllabus: Big Data refers to extremely large and complex data sets that are analysed computationally to reveal patterns and trends, supporting data-driven decisions in agriculture."),
  Q("d262l_126", 10, "Satellite and drone imagery analysed over time to monitor crop health relies mainly on the technology of:",
    ["Word processing", "Remote sensing", "Disk formatting", "Keyboarding"], 1,
    "As per DA-262 syllabus: Remote sensing using satellite and drone imagery is used to monitor crop health, vigour and stress over time through analysis of reflected radiation (e.g., NDVI)."),
];

let problems = 0;
const pos = [0,0,0,0];
for (const q of NEW) {
  if (q.options.length !== 4 || new Set(q.options).size !== 4) { console.log("BAD opts " + q.id); problems++; }
  if (q.correct < 0 || q.correct > 3) { console.log("BAD correct " + q.id); problems++; }
  pos[q.correct]++;
  const opt = q.options[q.correct], ex = q.explanation.toLowerCase(), exn = ex.replace(/\s+/g, "");
  const ok = nums(opt).length ? nums(opt).every(n => ex.includes(n) || exn.includes(n)) : words(opt).some(w => ex.includes(w));
  if (!ok) { console.log("ANSWER NOT IN EXPLANATION " + q.id + " :: " + opt); problems++; }
}
console.log("Positions A/B/C/D = " + pos.join("/"));
if (problems) { console.log(problems + " problems — NOT writing."); process.exit(1); }
function ser(q){ const opts=q.options.map(o=>JSON.stringify(o)).join(", ");
  return "  {\n    id: "+JSON.stringify(q.id)+",\n    subject: \"da-262\",\n    lecture: "+JSON.stringify(q.lecture)+",\n    lectureNo: "+q.lectureNo+",\n    question: "+JSON.stringify(q.question)+",\n    options: ["+opts+"],\n    correct: "+q.correct+",\n    explanation: "+JSON.stringify(q.explanation)+"\n  }"; }
let content = fs.readFileSync(file, "utf8");
const closeIdx = content.lastIndexOf("];");
let prefix = content.substring(0, closeIdx).replace(/\s*$/, "");
if (!prefix.endsWith(",")) prefix += ",";
content = prefix + "\n" + NEW.map(ser).join(",\n") + "\n];\n";
fs.writeFileSync(file, content, "utf8");
console.log("Appended " + NEW.length + " questions to da-262-lectures.ts (lectures 8,9,10)");
