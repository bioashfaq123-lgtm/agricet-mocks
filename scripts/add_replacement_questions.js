/**
 * Adds replacement questions to files that had duplicates removed.
 * Questions are inserted as proper TypeScript object literals.
 */
const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "../src/data/questions");

function q(id, subject, lec, lecNo, question, options, correct, explanation, difficulty) {
  const opts = options.map(o => `"${o.replace(/"/g, '\\"')}"`).join(", ");
  const q2 = question.replace(/"/g, '\\"').replace(/\n/g, "\\n");
  const e2 = explanation.replace(/"/g, '\\"');
  return `  {
    id: "${id}",
    subject: "${subject}",
    lecture: "${lec}",
    lectureNo: ${lecNo},
    question: "${q2}",
    options: [${opts}],
    correct: ${correct},
    explanation: "${e2}",
    difficulty: "${difficulty}"
  }`;
}

function addToFile(fname, blocks) {
  const fpath = path.join(dir, fname);
  let content = fs.readFileSync(fpath, "utf8");
  // Handle both "];" and "] as Question[];" endings
  let closeIdx = content.lastIndexOf("] as Question[];");
  if (closeIdx === -1) closeIdx = content.lastIndexOf("];");
  // Ensure there's a comma before the insert point (handle last-element-no-trailing-comma)
  let prefix = content.substring(0, closeIdx);
  const trimmed = prefix.trimEnd();
  if (trimmed.endsWith("}") && !trimmed.endsWith("},")) {
    prefix = trimmed + ",\n";
  }
  const insert = blocks.join(",\n") + ",\n";
  content = prefix + insert + content.substring(closeIdx);
  fs.writeFileSync(fpath, content, "utf8");
  console.log(`  Added ${blocks.length} questions to ${fname}`);
}

// ─── DA-282: Horticulture (10 new questions d282_201–d282_210) ───────────────
addToFile("da-282.ts", [
  q("d282_201","da-282","lecture-1",1,
    "Climacteric fruits show a characteristic rise in respiration rate at ripening and can be harvested mature-green. Which of the following is a climacteric fruit?",
    ["Grape","Citrus","Mango","Watermelon"],2,
    "Mango is a classic climacteric fruit — it shows a sharp ethylene-triggered rise in respiration during ripening and can ripen off the tree. Grape, citrus, and watermelon are non-climacteric fruits that must ripen on the plant.",
    "medium"),
  q("d282_202","da-282","lecture-2",2,
    "Polyembryony — occurrence of more than one embryo in a seed — is a common characteristic feature of which fruit crop?",
    ["Papaya","Mango","Banana","Guava"],1,
    "Mango (Mangifera indica) commonly exhibits polyembryony. Many mango varieties produce seeds with multiple embryos: one zygotic embryo (sexual) and several nucellar (apomictic) embryos that are clones of the mother plant.",
    "medium"),
  q("d282_203","da-282","lecture-3",3,
    "The Brix value (°Bx) measured by a refractometer in fruit quality assessment indicates:",
    ["Fruit firmness in kg/cm²","Total soluble solids (TSS) percentage","Titratable acidity percentage","Moisture content percentage"],1,
    "Brix (°Bx) measured by a refractometer indicates the Total Soluble Solids (TSS) — mainly sugars — in fruit juice, expressed as a percentage. It is a key maturity and quality index for fruits like grapes, mangoes, and citrus.",
    "easy"),
  q("d282_204","da-282","lecture-4",4,
    "Rejuvenation pruning in horticulture is practiced to:",
    ["Reduce transplant shock in young seedlings","Restore productivity of old unproductive orchards by heavy pruning of main branches","Stimulate rooting in nursery cuttings","Enhance bud initiation in flower crops"],1,
    "Rejuvenation pruning involves heavy pruning of main branches in old, unproductive orchards (mango, guava, citrus) to stimulate new vigorous vegetative growth and restore their fruit-bearing capacity.",
    "medium"),
  q("d282_205","da-282","lecture-5",5,
    "Which chemical is used for artificial/uniform ripening of banana at commercial scale?",
    ["Gibberellic acid (GA3)","Ethephon (Ethrel)","Maleic hydrazide","Cycocel (CCC)"],1,
    "Ethephon (Ethrel / 2-chloroethylphosphonic acid) releases ethylene on application and is used commercially for uniform ripening of bananas. It is applied as a post-harvest dip or spray at 500-1000 ppm.",
    "medium"),
  q("d282_206","da-282","lecture-6",6,
    "The National Horticulture Mission (NHM) was launched by the Government of India in:",
    ["1997-98","2001-02","2005-06","2010-11"],2,
    "The National Horticulture Mission (NHM) was launched in 2005-06 under the 10th Five-Year Plan to promote holistic growth of the horticulture sector — covering fruits, vegetables, flowers, spices, plantation crops and medicinal/aromatic plants.",
    "medium"),
  q("d282_207","da-282","lecture-7",7,
    "In vegetable processing, blanching before freezing or canning is done to:",
    ["Improve colour by adding pigments","Inactivate deteriorative enzymes and reduce microbial load","Increase the sugar content of vegetables","Tenderise vegetable tissue for easy packing"],1,
    "Blanching (brief exposure to boiling water or steam, 2-5 min) before freezing or canning inactivates enzymes like peroxidase and lipoxygenase that cause off-colour, off-flavour, and texture degradation, and also reduces surface microbial load.",
    "medium"),
  q("d282_208","da-282","lecture-8",8,
    "Which growth regulator is used to break dormancy of potato tubers and induce early sprouting?",
    ["Maleic hydrazide","Gibberellic acid (GA3)","NAA (Naphthalene Acetic Acid)","Ethephon"],1,
    "Gibberellic acid (GA3) at 1-5 ppm is used to break dormancy of potato seed tubers and promote early, uniform sprouting. Conversely, maleic hydrazide (MH) suppresses sprouting during long-term cold storage.",
    "hard"),
  q("d282_209","da-282","lecture-9",9,
    "The scientific (botanical) name of strawberry is:",
    ["Fragaria x ananassa","Rubus idaeus","Vaccinium corymbosum","Ribes nigrum"],0,
    "The cultivated garden strawberry is Fragaria × ananassa, a hybrid of two wild species (F. virginiana × F. chiloensis). Rubus idaeus is raspberry, Vaccinium corymbosum is blueberry, and Ribes nigrum is blackcurrant.",
    "easy"),
  q("d282_210","da-282","lecture-10",10,
    "India ranks first in the world in production of which fruit crop?",
    ["Citrus","Grapes","Banana","Apple"],2,
    "India is the world's largest producer of bananas, contributing about 26% of global production. India is also the top producer of mangoes and papayas. China leads in citrus, grapes, and apples.",
    "easy")
]);

// ─── DA-241: Agricultural Economics (1 new question d241_200) ─────────────────
addToFile("da-241.ts", [
  q("d241_200","da-241","lecture-1",1,
    "Minimum Support Price (MSP) in Indian agricultural policy is announced by:",
    ["State governments based on local market surveys","Central Government on the recommendation of CACP (Commission for Agricultural Costs and Prices)","RBI based on inflation targets","FCI based on procurement needs"],1,
    "MSP is announced by the Central Government of India based on the recommendations of CACP (Commission for Agricultural Costs and Prices), which considers cost of production, demand-supply situation, inter-crop price parity, and terms of trade. CACP recommends MSP for 23 mandated crops.",
    "medium")
]);

// ─── DA-171: Plant Pathology (1 new question d171x_039) ──────────────────────
addToFile("da-171.ts", [
  q("d171x_039","da-171","lecture-1",1,
    "Rice blast disease is caused by:",
    ["Xanthomonas oryzae pv. oryzae","Rhizoctonia solani","Magnaporthe oryzae (Pyricularia oryzae)","Helminthosporium oryzae"],2,
    "Rice blast disease is caused by Magnaporthe oryzae (anamorph: Pyricularia oryzae). It is the most destructive disease of rice worldwide, causing leaf blast, node blast, and neck blast (which destroys the panicle). Blast-resistant varieties and tricyclazole fungicide are used for management.",
    "easy")
]);

// ─── DA-132: Entomology (1 new question d132x_011) ───────────────────────────
addToFile("da-132.ts", [
  q("d132x_011","da-132","lecture-1",1,
    "American bollworm (Helicoverpa armigera) attacking cotton and chickpea belongs to the order:",
    ["Coleoptera","Hemiptera","Lepidoptera","Diptera"],2,
    "Helicoverpa armigera (American bollworm / gram pod borer) belongs to Order Lepidoptera, Family Noctuidae. It is a highly polyphagous pest attacking cotton bolls, chickpea pods, tomato fruits, and many other crops. The larvae are the damaging stage.",
    "easy")
]);

// ─── DA-262: Computer Applications (2 new questions d262_199–d262_200) ────────
addToFile("da-262.ts", [
  q("d262_199","da-262","lecture-1",1,
    "RAM (Random Access Memory) differs from ROM (Read Only Memory) in that:",
    ["RAM is permanent storage while ROM is temporary","RAM is volatile (loses data when power is off) while ROM is non-volatile","RAM stores only the operating system while ROM stores user data","RAM is slower than ROM in data access speed"],1,
    "RAM is volatile memory — data is lost when power is off. It is used for temporary working memory during program execution. ROM is non-volatile — data is permanently stored (e.g., BIOS/UEFI firmware) and retained without power. Modern RAM (DDR4) is actually faster than ROM.",
    "easy"),
  q("d262_200","da-262","lecture-2",2,
    "An IPv4 address consists of:",
    ["32 bits arranged as 4 groups of 8 bits each (e.g., 192.168.1.1)","64 bits arranged as 8 groups of 8 bits","16 bits arranged as 2 groups of 8 bits","128 bits arranged as 16 groups of 8 bits"],0,
    "An IPv4 (Internet Protocol version 4) address consists of 32 bits, written as four decimal octets (0-255) separated by dots, e.g., 192.168.1.1. IPv6 uses 128 bits written as 8 groups of 4 hexadecimal digits.",
    "medium")
]);

// ─── DA-262-lectures (2 new questions d262x_040–d262x_041) ───────────────────
addToFile("da-262-lectures.ts", [
  q("d262x_040","da-262","lecture-1",1,
    "URL stands for:",
    ["Universal Resource Locator","Uniform Resource Locator","Unified Remote Link","Universal Remote Link"],1,
    "URL stands for Uniform Resource Locator. It is the complete web address used to locate a specific resource on the internet (e.g., https://www.example.com/page). It includes the protocol (http/https), domain name, and path.",
    "easy"),
  q("d262x_041","da-262","lecture-2",2,
    "System software differs from application software in that system software:",
    ["Is written in high-level languages while application software uses machine code","Manages hardware resources and provides a platform; application software performs specific end-user tasks","Is always free while application software is always paid","Only runs on servers while application software runs on personal computers"],1,
    "System software (OS, device drivers, BIOS, utilities) manages hardware resources, memory, and processes, and provides a platform for other software. Application software (word processors, browsers, spreadsheets) performs specific tasks for end users and runs on top of the system software.",
    "easy")
]);

// ─── DA-201: Commercial Crops (1 new question d201x_101) ─────────────────────
addToFile("da-201.ts", [
  q("d201x_101","da-201","lecture-6",6,
    "FCV (Flue Cured Virginia) tobacco used for cigarettes is primarily grown in India in:",
    ["Uttar Pradesh and Bihar","Andhra Pradesh and Karnataka","Rajasthan and Gujarat","West Bengal and Odisha"],1,
    "FCV (Flue Cured Virginia) tobacco is primarily grown in Andhra Pradesh (Guntur, Krishna, West Godavari districts) and Karnataka (Mysore region). Andhra Pradesh accounts for about 75% of India's FCV tobacco production. Tobacco Board of India is headquartered at Guntur.",
    "medium")
]);

// ─── DA-101.ts: Agronomy (2 new questions d101x_048–d101x_049) ───────────────
addToFile("da-101.ts", [
  q("d101x_048","da-101","lecture-1",1,
    "Precision farming involves:",
    ["Uniform application of inputs across the entire field irrespective of spatial variation","Site-specific management of inputs based on spatial variability within a field using GPS and GIS","Farming only in small precision-measured plots of exactly one acre","Using high-precision hand tools instead of machinery"],1,
    "Precision farming (precision agriculture) involves site-specific management — applying inputs (fertilizers, water, pesticides) at the right time, right place, and right rate based on spatial variability in soil properties and crop needs within a field, using GPS, GIS, and remote sensing technologies.",
    "medium"),
  q("d101x_049","da-101","lecture-2",2,
    "A watershed in the context of land and water conservation refers to:",
    ["A large water storage tank used for supplemental irrigation","An area of land that drains all surface and subsurface water to a common outlet point","The catchment area only upstream of a dam or reservoir","The quantity of water lost from a crop through transpiration"],1,
    "A watershed (drainage basin / catchment) is an area of land from which all surface runoff and subsurface drainage flows to a common outlet (stream, river, lake). Watershed management treats the entire land-water system as a unit to conserve soil and water.",
    "medium")
]);

// ─── DA-101-lectures (2 new questions d101x_048–d101x_049) ───────────────────
addToFile("da-101-lectures.ts", [
  q("d101x_048","da-101","lecture-1",1,
    "Zero tillage (no-till) farming primarily benefits soil health by:",
    ["Increasing soil bulk density for better drainage","Preserving soil aggregate structure, organic matter, and beneficial soil organisms","Eliminating all weed seeds from the plough layer","Reducing soil pH to levels optimal for most crops"],1,
    "Zero (no) tillage avoids soil inversion and disturbance, thereby preserving soil aggregate structure, maintaining organic matter content, conserving moisture, and protecting beneficial organisms like earthworms and soil microbes. It also reduces soil erosion and fuel costs.",
    "medium"),
  q("d101x_049","da-101","lecture-2",2,
    "The critical period for crop-weed competition in most field crops is approximately:",
    ["At flowering stage only","First 30-45 days after sowing during early vegetative stage","Last 30 days before harvest","Throughout the entire crop growth period equally"],1,
    "The critical period for crop-weed competition is the growth stage during which weeds must be controlled to prevent significant yield loss. For most field crops this is the first 30-45 days after sowing/emergence when crops are small and most susceptible to competition for light, water, and nutrients.",
    "medium")
]);

// ─── DA-102.ts: Crop Agronomy (3 new questions d102x_072–d102x_074) ──────────
addToFile("da-102.ts", [
  q("d102x_072","da-102","lecture-1",1,
    "The phenomenon of lodging in cereal crops refers to:",
    ["Failure of crop to germinate due to poor seedbed preparation","Permanent displacement of stems from their vertical position due to wind or rain","Yellowing of leaves due to nitrogen deficiency","Early senescence of flag leaf before grain filling is complete"],1,
    "Lodging is the permanent displacement of crop stems (leaning or falling) from their vertical position due to wind, rain, or heavy panicle weight. It reduces yield by reducing photosynthesis and making harvest difficult. Semi-dwarf varieties with strong culms are more lodging-resistant.",
    "medium"),
  q("d102x_073","da-102","lecture-6",6,
    "Maize (Zea mays) is classified as a C4 crop because it:",
    ["Uses only the Calvin (C3) cycle with low photorespiration","Uses the C4 (Hatch-Slack) pathway concentrating CO2 in bundle sheath cells, giving superior photosynthetic efficiency at high light and temperature","Opens stomata only at night to fix CO2 (CAM pathway)","Has a special C2 pathway intermediate between C3 and C4"],1,
    "Maize is a C4 plant — it uses the Hatch-Slack pathway to concentrate CO2 in bundle sheath cells, suppressing photorespiration and giving 5-10% higher photosynthetic efficiency than C3 crops at high light and temperature. This makes maize one of the highest-yielding grain crops.",
    "medium"),
  q("d102x_074","da-102","lecture-10",10,
    "Blackgram and greengram fix atmospheric nitrogen through symbiosis with which microorganism?",
    ["Azospirillum brasilense (free-living associative fixer)","Rhizobium / Bradyrhizobium species forming root nodules","Frankia species forming actinorhizal nodules","Anabaena azollae (blue-green algae)"],1,
    "Blackgram (Vigna mungo) and greengram (Vigna radiata) fix atmospheric nitrogen through symbiosis with Bradyrhizobium / Rhizobium bacteria that form nodules on roots. This biological nitrogen fixation can contribute 40-100 kg N/ha per season, reducing fertilizer requirements.",
    "easy")
]);

// ─── DA-111.ts: Plant Breeding (3 new questions d111x_071–d111x_073) ─────────
addToFile("da-111.ts", [
  q("d111x_071","da-111","lecture-8",8,
    "Breeder seed in the seed production chain is produced by:",
    ["State seed corporations under government supervision","The original plant breeder or designated institution under direct supervision of the breeder","Certified seed producers registered with NSC","Farmers selected by the State Agriculture Department"],1,
    "Breeder seed is produced by or under the direct supervision of the plant breeder (agricultural university or research institution) who developed the variety. It is the progeny of nucleus seed and is the source for foundation seed production. It has the highest genetic purity.",
    "medium"),
  q("d111x_072","da-111","lecture-9",9,
    "A test cross in genetics (crossing a dominant-phenotype individual with a homozygous recessive parent) is used to:",
    ["Produce commercial hybrid seed for farmers","Determine whether the dominant-phenotype individual is homozygous (AA) or heterozygous (Aa)","Increase heterozygosity of the breeding population","Estimate general combining ability (GCA) of inbred lines"],1,
    "A test cross (dominant phenotype × homozygous recessive aabb...) reveals the genotype of the dominant parent. If progeny ratio is 1:1 (dominant:recessive), the tested parent is heterozygous (Aa); if all progeny show dominant phenotype, the tested parent is homozygous (AA).",
    "hard"),
  q("d111x_073","da-111","lecture-10",10,
    "Heterosis (hybrid vigour) is defined as the:",
    ["Uniform performance of all plants in a pure line variety","Superiority of F1 hybrids over the better parent for yield and vigour","Inbreeding depression observed after selfing cross-pollinated crops","Additive gene effects accumulating over generations of selection"],1,
    "Heterosis (hybrid vigour), coined by G.H. Shull (1914), is the superiority of F1 hybrids over the better parent (or mid-parent) in traits like yield, growth rate, disease resistance, and adaptability. It is commercially exploited in maize, sorghum, bajra, cotton, and vegetable hybrids.",
    "easy")
]);

// ─── DA-122-lectures (1 new question d122x_070) ──────────────────────────────
addToFile("da-122-lectures.ts", [
  q("d122x_070","da-122","lecture-20",20,
    "Copper sulphate (CuSO4) is applied as a fertilizer to correct which micronutrient deficiency?",
    ["Manganese deficiency in acidic soils","Copper deficiency especially in organic/peaty soils and newly reclaimed soils","Boron deficiency in oilseed crops","Zinc deficiency in rice causing Khaira disease"],1,
    "Copper sulphate (CuSO4.5H2O, blue vitriol) is used to correct copper (Cu) deficiency. Copper deficiency is most common in organic/peaty soils, sandy soils, and newly reclaimed soils. It causes reclamation disease in cereals and dieback in citrus and other fruit crops.",
    "hard")
]);

// ─── DA-281-lectures (1 new question d281l_168) ──────────────────────────────
addToFile("da-281-lectures.ts", [
  q("d281l_168","da-281","lecture-1",1,
    "Late blight of potato and tomato is caused by:",
    ["Alternaria solani (Early blight)","Phytophthora infestans (water mould/oomycete)","Fusarium oxysporum (wilt)","Sclerotium rolfsii (collar rot)"],1,
    "Late blight of potato and tomato is caused by Phytophthora infestans, an oomycete (water mould). It was responsible for the Irish Potato Famine (1845-49). It thrives in cool, moist conditions. Early blight is caused by Alternaria solani. Mancozeb and metalaxyl are used for management.",
    "easy")
]);

// ─── DA-282-lectures (1 new question d282l_169) ──────────────────────────────
addToFile("da-282-lectures.ts", [
  q("d282l_169","da-282","lecture-1",1,
    "Stone grafting (epicotyl grafting) in mango is best performed during which season in India?",
    ["Post-monsoon (October-November)","Summer (March-May) when fresh seeds are available and sap is actively flowing","Winter (December-January) for best callus formation","Rainy season (July-August) for highest humidity and success rates"],1,
    "Stone grafting (epicotyl grafting) in mango is performed in summer (March-May) when fresh mango seeds (stones) are available from the fruit season. Freshly germinated seedlings used as rootstock are grafted immediately; warm temperatures promote rapid callus formation giving 80-90% success.",
    "hard")
]);

console.log("\nAll replacement questions added successfully.");
