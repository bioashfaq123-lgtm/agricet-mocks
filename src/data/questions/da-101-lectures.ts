// ===== FILE: da-101-lectures.ts =====
import { Question } from "@/types";

export const da101LectureQuestions: Question[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // LECTURE 1: Introduction to Agriculture & Agronomy
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "d101l_001",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The word 'Agriculture' is derived from which two Latin words?",
    options: ["Agri (land) and Cultura (science)", "Ager (field) and Cultura (cultivation)", "Ager (crop) and Cultura (growth)", "Agros (soil) and Nomos (law)"],
    correct: 1,
    explanation: "Agriculture is derived from Latin 'Ager/Agri' meaning field/land and 'Cultura' meaning cultivation or tillage."
  },
  {
    id: "d101l_002",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The term 'Agronomy' is derived from Greek words 'Agros' and 'Nomos'. 'Nomos' means:",
    options: ["To manage", "Field", "To grow", "Soil"],
    correct: 0,
    explanation: "'Agros' means field and 'Nomos' means to manage. So Agronomy means the science of managing fields."
  },
  {
    id: "d101l_003",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Who is known as the 'Father of Agronomy'?",
    options: ["Justus von Liebig", "M.S. Swaminathan", "Norman Borlaug", "Pietro de'Crescenzi"],
    correct: 3,
    explanation: "Pietro de'Crescenzi of Italy (1230–1320 AD) is regarded as the Father of Agronomy for his systematic work on crop production."
  },
  {
    id: "d101l_004",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Who is called the 'Father of Green Revolution in India'?",
    options: ["C. Subramaniam", "M.S. Swaminathan", "B.P. Pal", "Norman Borlaug"],
    correct: 1,
    explanation: "Dr. M.S. Swaminathan is called the Father of Green Revolution in India for his role in introducing high-yielding wheat varieties."
  },
  {
    id: "d101l_005",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "ICAR stands for:",
    options: ["Integrated Council for Agricultural Resources", "International Centre for Agriculture and Research", "Indian Centre for Agronomy Research", "Indian Council of Agricultural Research"],
    correct: 3,
    explanation: "ICAR stands for Indian Council of Agricultural Research, headquartered at New Delhi. It coordinates agricultural research in India."
  },
  {
    id: "d101l_006",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "PJTSAU stands for:",
    options: ["Pandit Jawaharlal Telangana State Agricultural University", "Pradhan Janpada Telangana State Agricultural University", "Professor Jayashankar Telangana State Agricultural University", "Punjab Jawaharlal Technological & Sciences Agricultural University"],
    correct: 2,
    explanation: "PJTSAU stands for Professor Jayashankar Telangana State Agricultural University, located in Hyderabad, Telangana."
  },
  {
    id: "d101l_007",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "ICRISAT is located at:",
    options: ["Nairobi, Kenya", "Washington DC, USA", "Rome, Italy", "Patancheru, Hyderabad, India"],
    correct: 3,
    explanation: "ICRISAT (International Crops Research Institute for the Semi-Arid Tropics) is located at Patancheru near Hyderabad, India."
  },
  {
    id: "d101l_008",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The Central Rice Research Institute (CRRI) is located at:",
    options: ["Karnal", "Hyderabad", "Coimbatore", "Cuttack"],
    correct: 3,
    explanation: "CRRI is located at Cuttack, Odisha. It conducts research on rice improvement and production technologies."
  },
  {
    id: "d101l_009",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Which branch of agriculture deals with the study of crop production and soil management?",
    options: ["Silviculture", "Floriculture", "Horticulture", "Agronomy"],
    correct: 3,
    explanation: "Agronomy is the branch of agriculture that deals with the theory and practice of crop production and soil management."
  },
  {
    id: "d101l_010",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The study of fruits and vegetables as crops is called:",
    options: ["Horticulture", "Pomology", "Olericulture", "Agronomy"],
    correct: 0,
    explanation: "Horticulture includes the study of fruits (Pomology), vegetables (Olericulture), flowers (Floriculture), and ornamental plants."
  },
  {
    id: "d101l_011",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Who is called the 'Father of Indian Agriculture'?",
    options: ["Norman Borlaug", "N.G. Ranga", "B.P. Pal", "M.S. Swaminathan"],
    correct: 3,
    explanation: "Dr. M.S. Swaminathan is widely called the Father of Indian Agriculture due to his transformative contributions to Indian farming."
  },
  {
    id: "d101l_012",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "National Academy of Agricultural Sciences (NAAS) is located at:",
    options: ["Bangalore", "Hyderabad", "New Delhi", "Pune"],
    correct: 2,
    explanation: "NAAS is located at New Delhi and recognizes eminent scientists who have made outstanding contributions to agricultural sciences."
  },
  {
    id: "d101l_013",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The branch of agriculture dealing with the management of forests is called:",
    options: ["Olericulture", "Silviculture", "Horticulture", "Agronomy"],
    correct: 1,
    explanation: "Silviculture is the branch of agriculture that deals with the cultivation and management of forest trees."
  },
  {
    id: "d101l_014",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The science of rearing silkworms for silk production is called:",
    options: ["Aquaculture", "Sericulture", "Pisciculture", "Apiculture"],
    correct: 1,
    explanation: "Sericulture is the science of rearing silkworms (Bombyx mori) for silk production."
  },
  {
    id: "d101l_015",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "DRR (Directorate of Rice Research) is located at:",
    options: ["Cuttack, Odisha", "Karnal, Haryana", "Hyderabad, Telangana", "Nagpur, Maharashtra"],
    correct: 2,
    explanation: "DRR (Directorate of Rice Research), now ICAR-Indian Institute of Rice Research (IIRR), is located at Rajendranagar, Hyderabad."
  },
  {
    id: "d101l_016",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Who is known as the 'Father of Soil Science'?",
    options: ["M.S. Swaminathan", "Justus von Liebig", "C.F. Marbut", "Dokuchaev"],
    correct: 3,
    explanation: "V.V. Dokuchaev, a Russian scientist, is known as the Father of Soil Science for his pioneering work on pedology."
  },
  {
    id: "d101l_017",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The National Institute of Agricultural Extension Management (MANAGE) is located at:",
    options: ["Hyderabad", "Bhopal", "Anand (Gujarat)", "New Delhi"],
    correct: 0,
    explanation: "MANAGE is located at Hyderabad, Telangana. It provides training in agricultural extension management."
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // LECTURE 2: Weather, Climate & Agro-climatic Zones
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "d101l_018",
    subject: "da-101",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The average annual rainfall of Telangana state is approximately:",
    options: ["900–1000 mm", "1200–1400 mm", "500–600 mm", "700–800 mm"],
    correct: 0,
    explanation: "Telangana receives an average annual rainfall of about 900–1000 mm, predominantly from the South-West monsoon."
  },
  {
    id: "d101l_019",
    subject: "da-101",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Which of the following is NOT one of the Agro-climatic zones of Telangana?",
    options: ["Central Telangana Zone (CTZ)", "Northern Telangana Zone (NTZ)", "Southern Telangana Zone (STZ)", "Eastern Telangana Zone (ETZ)"],
    correct: 3,
    explanation: "Telangana has four agro-climatic zones: NTZ, CTZ, STZ, and High Altitude zone. There is no Eastern Telangana Zone (ETZ)."
  },
  {
    id: "d101l_020",
    subject: "da-101",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The Northern Telangana Zone (NTZ) includes which of the following districts?",
    options: ["Nizamabad, Karimnagar, Adilabad", "Rangareddy, Mahbubnagar", "Nalgonda, Suryapet", "Khammam, Bhadradri"],
    correct: 0,
    explanation: "NTZ includes Nizamabad, Karimnagar (Rajanna Sircilla), Jagitial, Peddapalli, Mancherial, Nirmal, Adilabad, Kumuram Bheem, and Asifabad districts."
  },
  {
    id: "d101l_021",
    subject: "da-101",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The difference between weather and climate is:",
    options: ["Climate refers to rainfall only; weather refers to temperature only", "Weather and climate are the same", "Weather deals with long-term atmospheric conditions; climate is short-term", "Weather is the atmospheric condition at a place for a short period; climate is the average over 30+ years"],
    correct: 3,
    explanation: "Weather refers to the atmospheric conditions at a particular place for a short period (daily/weekly), whereas climate is the average weather conditions of a place over a long period (30+ years)."
  },
  {
    id: "d101l_022",
    subject: "da-101",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Kharif season in Telangana corresponds to:",
    options: ["November to February", "June to September", "October to March", "March to May"],
    correct: 1,
    explanation: "Kharif (summer/rainy) season corresponds to June–September (SW monsoon). Crops are sown with onset of monsoon and harvested after monsoon."
  },
  {
    id: "d101l_023",
    subject: "da-101",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Rabi season crops are sown in:",
    options: ["September–November", "February–March", "April–May", "June–July"],
    correct: 0,
    explanation: "Rabi crops are sown in October–November after the monsoon recedes and are harvested in February–March."
  },
  {
    id: "d101l_024",
    subject: "da-101",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The instrument used to measure rainfall is:",
    options: ["Rain gauge", "Thermometer", "Barometer", "Hygrometer"],
    correct: 0,
    explanation: "Rainfall is measured using a rain gauge. The standard rain gauge used in India has an 8-inch diameter funnel."
  },
  {
    id: "d101l_025",
    subject: "da-101",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "South-West monsoon contributes about what percentage of total annual rainfall in Telangana?",
    options: ["90–95%", "50–60%", "70–80%", "30–40%"],
    correct: 2,
    explanation: "About 70–80% of Telangana's annual rainfall is received from the South-West monsoon (June to September)."
  },
  {
    id: "d101l_026",
    subject: "da-101",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Which zone of Telangana is characterized by deep black cotton soils and moderate rainfall?",
    options: ["Northern Telangana Zone", "Southern Telangana Zone", "Central Telangana Zone", "High Altitude Zone"],
    correct: 2,
    explanation: "The Central Telangana Zone (CTZ) is characterized by deep black cotton (vertisol) soils and moderate to good rainfall."
  },
  {
    id: "d101l_027",
    subject: "da-101",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The Zaid season (summer season) extends from:",
    options: ["March to June", "January to February", "June to September", "October to November"],
    correct: 0,
    explanation: "Zaid or summer season extends from March to June. Short-duration crops like watermelon, cucumbers, and some vegetables are grown."
  },
  {
    id: "d101l_028",
    subject: "da-101",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "An agro-climatic zone is defined on the basis of:",
    options: ["Homogeneity in rainfall, temperature, soil type, and cropping pattern", "Soil texture alone", "Temperature alone", "Rainfall alone"],
    correct: 0,
    explanation: "An agro-climatic zone is a relatively homogeneous land unit in terms of climate, soil, hydrology, and cropping pattern."
  },
  {
    id: "d101l_029",
    subject: "da-101",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The instrument used to measure atmospheric humidity is:",
    options: ["Hygrometer", "Anemometer", "Barometer", "Thermometer"],
    correct: 0,
    explanation: "Hygrometer (or psychrometer) is used to measure relative humidity of the atmosphere."
  },
  {
    id: "d101l_030",
    subject: "da-101",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Which district of Telangana falls in the High Altitude Zone?",
    options: ["Nizamabad", "Mulugu (Bhadrachalam Agency)", "Nalgonda", "Ranga Reddy"],
    correct: 1,
    explanation: "The Tribal / High Altitude Zone of Telangana includes areas like the Agency tracts of Mulugu (Bhadrachalam), Kumuram Bheem-Asifabad districts."
  },
  {
    id: "d101l_031",
    subject: "da-101",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Wind speed is measured by:",
    options: ["Barometer", "Wind vane", "Anemometer", "Hygrometer"],
    correct: 2,
    explanation: "An anemometer measures wind speed. A wind vane measures wind direction."
  },
  {
    id: "d101l_032",
    subject: "da-101",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The phenomenon of 'El Niño' is associated with:",
    options: ["Excess monsoon rainfall in India", "Deficit monsoon rainfall in India", "High temperatures in winter", "Increased Rabi crop production"],
    correct: 1,
    explanation: "El Niño (warming of Pacific Ocean waters) is often associated with weak or deficit South-West monsoon rainfall in India."
  },
  {
    id: "d101l_033",
    subject: "da-101",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The Southern Telangana Zone (STZ) covers which type of soil predominantly?",
    options: ["Laterite soils", "Red sandy soils and shallow red soils", "Sandy loam soils", "Deep black cotton soils"],
    correct: 1,
    explanation: "The Southern Telangana Zone is dominated by red sandy and red loamy soils, covering districts like Mahabubnagar, Nagarkurnool, and Nalgonda."
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // LECTURE 3: Soil Properties & Tillage
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "d101l_034",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Tillage is defined as:",
    options: ["Removal of weeds from the field", "Irrigation of soil before sowing", "Mechanical manipulation of soil for crop production", "Application of fertilizers to soil"],
    correct: 2,
    explanation: "Tillage is the mechanical manipulation of soil to create favorable conditions for seed germination, plant growth, and crop production."
  },
  {
    id: "d101l_035",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Primary tillage is done to:",
    options: ["Break the soil to full depth for first working", "Prepare a fine seedbed", "Kill weeds between rows", "Apply fertilizers into the soil"],
    correct: 0,
    explanation: "Primary tillage is the initial soil working operation that breaks and loosens soil to depth, incorporating crop residues and preparing for secondary tillage."
  },
  {
    id: "d101l_036",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Which implement is used for primary tillage?",
    options: ["Disc harrow", "Mould board plough", "Rotavator", "Cultivator"],
    correct: 1,
    explanation: "Mould board plough is used for primary tillage (deep ploughing). It inverts the soil and buries crop residues."
  },
  {
    id: "d101l_037",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Zero tillage means:",
    options: ["Subsoiling at 60 cm depth", "Ploughing the soil twice before sowing", "Applying herbicides before ploughing", "Sowing without any prior soil disturbance"],
    correct: 3,
    explanation: "Zero tillage (no-till farming) involves sowing seeds directly into undisturbed soil without prior ploughing, using a zero-till seed drill."
  },
  {
    id: "d101l_038",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Which of the following is a benefit of zero tillage?",
    options: ["Deeper root penetration", "Conservation of soil moisture and reduced erosion", "Incorporation of green manures", "Better weed control by soil inversion"],
    correct: 1,
    explanation: "Zero tillage conserves soil moisture, reduces wind and water erosion, saves fuel and time, and improves soil organic matter over time."
  },
  {
    id: "d101l_039",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Minimum tillage aims to:",
    options: ["Maximize soil disturbance for best seedbed", "Eliminate all organic matter in soil", "Reduce the number of tillage operations while maintaining yields", "Increase the depth of ploughing"],
    correct: 2,
    explanation: "Minimum tillage reduces tillage operations to a minimum necessary for crop establishment, saving energy, labor, and reducing erosion."
  },
  {
    id: "d101l_040",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "A hard layer formed below the plough depth due to repeated tillage at the same depth is called:",
    options: ["Subsoil layer", "Surface crust", "Clay pan", "Plough sole / Hardpan"],
    correct: 3,
    explanation: "Plough sole or hardpan is a compacted layer formed just below the tillage depth due to repeated ploughing at the same depth, impeding water and root movement."
  },
  {
    id: "d101l_041",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The soil textural class with approximately equal proportions of sand, silt, and clay is:",
    options: ["Loam", "Clay loam", "Silt loam", "Sandy loam"],
    correct: 0,
    explanation: "Loam is the ideal soil textural class with roughly balanced proportions of sand, silt, and clay, offering good drainage and nutrient retention."
  },
  {
    id: "d101l_042",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Which soil is commonly called 'black cotton soil' in Telangana?",
    options: ["Entisol", "Alfisol", "Inceptisol", "Vertisol"],
    correct: 3,
    explanation: "Vertisols are the black cotton soils of Telangana. They are characterized by high clay content (smectite), deep cracks when dry, and high water-holding capacity."
  },
  {
    id: "d101l_043",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Conservation tillage is defined as any tillage system that:",
    options: ["Inverts the soil completely with each pass", "Leaves at least 30% of crop residue on the soil surface", "Uses the maximum number of tillage passes", "Is performed only during drought conditions"],
    correct: 1,
    explanation: "Conservation tillage is any tillage system that leaves at least 30% of the soil surface covered with crop residues to reduce erosion."
  },
  {
    id: "d101l_044",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Deep ploughing (subsoiling) is recommended for:",
    options: ["Controlling weeds between rows", "Incorporating surface-applied fertilizers", "Breaking the hardpan and improving root penetration", "Preparing a fine seedbed for small seeds"],
    correct: 2,
    explanation: "Subsoiling breaks the hardpan below tillage depth, improving root penetration, water infiltration, and drainage in compact soils."
  },
  {
    id: "d101l_045",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Puddling of soil is commonly practiced for:",
    options: ["Transplanted rice", "Sugarcane ratoon", "Irrigated groundnut", "Dryland wheat"],
    correct: 0,
    explanation: "Puddling is the wet tillage of saturated soil to destroy soil structure and reduce percolation losses. It is essential for transplanted rice to maintain standing water."
  },
  {
    id: "d101l_046",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The rotavator is used mainly for:",
    options: ["Secondary tillage – fine seedbed preparation", "Harvesting operations", "Weed chemical application", "Primary deep tillage"],
    correct: 0,
    explanation: "The rotavator (rotary tiller) is used for secondary tillage to break clods and prepare a fine, firm seedbed, especially in hard soils."
  },
  {
    id: "d101l_047",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Bulk density of soil is defined as:",
    options: ["Ratio of solid particles to water in soil", "Weight of soil per unit volume of solids only", "Weight of oven-dry soil per unit bulk volume (including pore space)", "Volume of pores per volume of soil"],
    correct: 2,
    explanation: "Bulk density = mass of oven-dry soil / total volume (solids + pores). Higher bulk density indicates more compaction and less pore space."
  },
  {
    id: "d101l_048",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The optimum bulk density range for most crop soils is:",
    options: ["0.5–0.8 g/cc", "1.6–1.8 g/cc", "1.1–1.3 g/cc", "2.0–2.2 g/cc"],
    correct: 2,
    explanation: "Most crops grow well in soils with bulk density of 1.1–1.3 g/cc. Above 1.6 g/cc, root penetration becomes difficult."
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // LECTURE 4: Sowing – Methods, Depth & Seed Rate
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "d101l_049",
    subject: "da-101",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "In broadcasting method of sowing, seeds are:",
    options: ["Placed in rows at uniform depth", "Scattered uniformly over the entire field surface", "Sown by transplanting from nursery", "Placed individually in holes at specific intervals"],
    correct: 1,
    explanation: "Broadcasting involves scattering seeds uniformly over the entire field surface by hand or mechanically. It requires more seed and gives uneven distribution."
  },
  {
    id: "d101l_050",
    subject: "da-101",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The recommended seed rate for rice (transplanting method) per acre is:",
    options: ["50–60 kg/acre", "30–36 kg/acre", "5–6 kg/acre", "20–25 kg/acre"],
    correct: 3,
    explanation: "For transplanted rice, 20–25 kg seed/acre is needed for nursery preparation to transplant one acre of main field."
  },
  {
    id: "d101l_051",
    subject: "da-101",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Dibbling is a method of sowing where:",
    options: ["Seeds are dropped from a moving machine randomly", "Seeds are mixed with sand and broadcast", "Seeds are sown in continuous furrows", "Seeds are placed individually in small holes made at specific intervals"],
    correct: 3,
    explanation: "Dibbling is placing one or more seeds individually in holes (dibbles) made at specific intervals in rows, ensuring precise plant population."
  },
  {
    id: "d101l_052",
    subject: "da-101",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The seed rate for maize (hybrid) per acre is approximately:",
    options: ["25–30 kg/acre", "2–3 kg/acre", "18–20 kg/acre", "8–10 kg/acre"],
    correct: 3,
    explanation: "Hybrid maize requires about 8–10 kg seed per acre to achieve the recommended plant population of 33,000–37,000 plants/acre."
  },
  {
    id: "d101l_053",
    subject: "da-101",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The recommended seed rate for wheat per acre is:",
    options: ["80–100 kg/acre", "35–40 kg/acre", "10–15 kg/acre", "60–70 kg/acre"],
    correct: 1,
    explanation: "Wheat requires 35–40 kg seed per acre (87–100 kg/ha) for optimal plant stands with broadcasting or drilling method."
  },
  {
    id: "d101l_054",
    subject: "da-101",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The method of sowing best suited for paddy (rice) in SRI is:",
    options: ["Transplanting young single seedlings (8–12 days old)", "Dibbling", "Broadcasting", "Direct seeding by drill"],
    correct: 0,
    explanation: "SRI (System of Rice Intensification) uses very young seedlings (8–12 days old, single seedling per hill) transplanted at wider spacing of 25×25 cm."
  },
  {
    id: "d101l_055",
    subject: "da-101",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Optimum seed sowing depth for cotton is:",
    options: ["1–2 cm", "3–4 cm", "5–7 cm", "0.5–1.0 cm"],
    correct: 1,
    explanation: "Cotton seeds are sown at 3–4 cm depth to ensure adequate moisture contact and good germination."
  },
  {
    id: "d101l_056",
    subject: "da-101",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Which of the following sowing methods saves maximum seed?",
    options: ["Transplanting", "Dibbling", "Drilling", "Broadcasting"],
    correct: 1,
    explanation: "Dibbling uses the least seed since individual seeds or small groups are placed at exact spots, eliminating wastage from over-seeding."
  },
  {
    id: "d101l_057",
    subject: "da-101",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Seed treatment with thiram or captan is done to protect seeds from:",
    options: ["Soil-borne fungal diseases", "Nematodes", "Poor germination due to cold", "Insect pests during germination"],
    correct: 0,
    explanation: "Thiram and captan are fungicides used as seed treatment to protect seeds and seedlings from soil-borne fungal pathogens like damping off."
  },
  {
    id: "d101l_058",
    subject: "da-101",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The seed rate for groundnut (pods) per acre is approximately:",
    options: ["5–8 kg/acre", "50–60 kg/acre", "20–30 kg/acre", "80–100 kg/acre"],
    correct: 1,
    explanation: "Groundnut requires about 50–60 kg of pods (or 40–45 kg kernels) per acre depending on variety (bunch or spreading)."
  },
  {
    id: "d101l_059",
    subject: "da-101",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Which sowing method is most suitable for small-seeded crops like sorghum and pearl millet?",
    options: ["Random broadcasting followed by harrowing", "Transplanting", "Drilling in rows", "Dibbling"],
    correct: 2,
    explanation: "Drilling in rows using a seed drill ensures proper depth, spacing, and seed rate for small-seeded crops like sorghum and pearl millet."
  },
  {
    id: "d101l_060",
    subject: "da-101",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The recommended seed depth for small-seeded legumes like blackgram is:",
    options: ["0.5–1 cm", "8–10 cm", "2–3 cm", "5–6 cm"],
    correct: 2,
    explanation: "Small-seeded legumes like blackgram and greengram are sown at 2–3 cm depth to ensure good emergence without excessive energy expenditure."
  },
  {
    id: "d101l_061",
    subject: "da-101",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Relay sowing involves:",
    options: ["Sowing a second crop before the first crop is harvested", "Transplanting seedlings from nursery into the main field", "Sowing the same crop in a field twice a year", "Sowing two crops simultaneously in alternate rows"],
    correct: 0,
    explanation: "Relay sowing involves sowing a second crop into the standing first crop before it is harvested, to save time and utilize residual soil moisture."
  },
  {
    id: "d101l_062",
    subject: "da-101",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The seed rate for cotton (Bt hybrid) per acre is approximately:",
    options: ["15–20 kg/acre", "50 g/acre", "1 packet (450 g)", "5–6 kg/acre"],
    correct: 2,
    explanation: "Bt cotton hybrid seeds are sold in packets of 450 g (one packet per acre), sufficient for the recommended plant population."
  },
  {
    id: "d101l_063",
    subject: "da-101",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Optimum plant population for transplanted rice per hectare is approximately:",
    options: ["1,00,000 hills/ha", "5,00,000 hills/ha", "50,000 hills/ha", "2,00,000 hills/ha (at 20×25 cm spacing)"],
    correct: 3,
    explanation: "At 20×25 cm spacing (standard for transplanted rice), 10,000 m²/ha ÷ (0.20 × 0.25 m) = 2,00,000 hills/ha. At 25×25 cm it is 1,60,000/ha."
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // LECTURE 5: Crop Nutrition & Fertilizer Application
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "d101l_064",
    subject: "da-101",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "How many essential nutrients are required by plants for their normal growth?",
    options: ["17", "20", "14", "12"],
    correct: 0,
    explanation: "There are 17 essential plant nutrients: C, H, O (from air/water) + N, P, K, Ca, Mg, S (macronutrients) + Fe, Mn, Zn, Cu, B, Mo, Cl, Ni (micronutrients)."
  },
  {
    id: "d101l_065",
    subject: "da-101",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The 'Law of Minimum' was given by:",
    options: ["C.G. Hopkins", "Blackman", "J.B. Lawes", "Justus von Liebig"],
    correct: 3,
    explanation: "Justus von Liebig proposed the Law of Minimum – crop growth is limited by the nutrient in shortest supply relative to crop requirement."
  },
  {
    id: "d101l_066",
    subject: "da-101",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Basal application of fertilizer means:",
    options: ["Application of fertilizer after crop establishment", "Foliar spray of nutrients on leaves", "Application of fertilizer at sowing/planting time in the root zone", "Application of fertilizers through irrigation water"],
    correct: 2,
    explanation: "Basal application involves incorporating fertilizer into the soil at the time of sowing or planting, usually as a band or broadcast before tillage."
  },
  {
    id: "d101l_067",
    subject: "da-101",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Top dressing of fertilizer refers to:",
    options: ["Applying fertilizer at the time of last ploughing", "Applying nitrogen fertilizer to standing crops after establishment", "Foliar application of micronutrients", "Deep placement of phosphate fertilizers"],
    correct: 1,
    explanation: "Top dressing is applying fertilizers (mainly N) to standing crops after establishment (e.g., at tillering, jointing stage) to support vegetative growth."
  },
  {
    id: "d101l_068",
    subject: "da-101",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Fertigation is the practice of:",
    options: ["Applying fertilizers deep into soil using injection machines", "Broadcasting fertilizers before monsoon rains", "Burning crop residue to release nutrients", "Dissolving and applying fertilizers through irrigation water (drip/sprinkler)"],
    correct: 3,
    explanation: "Fertigation is applying water-soluble fertilizers through the irrigation system (drip/sprinkler), ensuring uniform distribution and high efficiency."
  },
  {
    id: "d101l_069",
    subject: "da-101",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Which macronutrient is responsible for nodule formation and biological nitrogen fixation in legumes?",
    options: ["Potassium", "Molybdenum", "Calcium", "Phosphorus"],
    correct: 3,
    explanation: "Phosphorus is critical for nodule development and function in legumes. Mo is an essential micronutrient for nitrogenase enzyme, but P is the key macronutrient."
  },
  {
    id: "d101l_070",
    subject: "da-101",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The recommended NPK dose for irrigated rice in Telangana (per acre) is approximately:",
    options: ["60:30:30 kg/acre", "40:20:20 kg/acre", "20:10:10 kg/acre", "10:5:5 kg/acre"],
    correct: 1,
    explanation: "Irrigated rice in Telangana requires approximately 40:20:20 kg N:P₂O₅:K₂O per acre (100:50:50 kg/ha)."
  },
  {
    id: "d101l_071",
    subject: "da-101",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Foliar spray of nutrients is most effective for:",
    options: ["Micronutrients like Zn, Fe, B, Mn", "Major nutrients like N, P, K", "Organic manures", "Biofertilizers"],
    correct: 0,
    explanation: "Foliar sprays are most effective for micronutrient deficiencies (Zn, Fe, Mn, B) because small quantities are needed and leaf absorption is efficient."
  },
  {
    id: "d101l_072",
    subject: "da-101",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Split application of nitrogen fertilizer is recommended because:",
    options: ["It reduces cost of fertilizer purchase", "It saves labor by reducing number of operations", "It minimizes leaching losses and improves nitrogen use efficiency", "Urea is not stable and must be applied at once"],
    correct: 2,
    explanation: "Split N application reduces leaching and volatilization losses, improves NUE, and matches nitrogen supply with crop demand at critical growth stages."
  },
  {
    id: "d101l_073",
    subject: "da-101",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Nitrogen percentage in urea is:",
    options: ["34%", "16%", "46%", "21%"],
    correct: 2,
    explanation: "Urea (CO(NH₂)₂) contains 46% nitrogen, making it the most concentrated solid nitrogenous fertilizer."
  },
  {
    id: "d101l_074",
    subject: "da-101",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Which nutrient deficiency causes yellowing of older (lower) leaves first?",
    options: ["Zinc deficiency", "Nitrogen deficiency", "Calcium deficiency", "Iron deficiency"],
    correct: 1,
    explanation: "Nitrogen is mobile in plants. Its deficiency shows first on older lower leaves as yellowing (chlorosis) progressing upward."
  },
  {
    id: "d101l_075",
    subject: "da-101",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The nutrient responsible for energy transfer in plants (ATP) and stored as phytin in seeds is:",
    options: ["Sulfur", "Potassium", "Nitrogen", "Phosphorus"],
    correct: 3,
    explanation: "Phosphorus is the key component of ATP (adenosine triphosphate), the primary energy currency of cells, and is stored as phytin in seeds."
  },
  {
    id: "d101l_076",
    subject: "da-101",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "DAP (Di-Ammonium Phosphate) contains nitrogen and phosphorus in approximately:",
    options: ["18% N and 46% P₂O₅", "12% N and 32% P₂O₅", "46% N and 0% P₂O₅", "20% N and 20% P₂O₅"],
    correct: 0,
    explanation: "DAP contains 18% N and 46% P₂O₅, making it the most concentrated phosphatic fertilizer with substantial nitrogen content."
  },
  {
    id: "d101l_077",
    subject: "da-101",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Potassium helps in which of the following functions in plants?",
    options: ["Cell division in shoot tips", "Protein synthesis only", "Chlorophyll formation", "Stomatal regulation and drought tolerance"],
    correct: 3,
    explanation: "Potassium regulates stomatal opening/closing, improves water-use efficiency, enhances drought tolerance, and strengthens cell walls."
  },
  {
    id: "d101l_078",
    subject: "da-101",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Which of the following is a slow-release nitrogen fertilizer?",
    options: ["Calcium ammonium nitrate (CAN)", "Urea", "Ammonium sulphate", "Neem-coated urea"],
    correct: 3,
    explanation: "Neem-coated urea has a neem oil coating that inhibits nitrification, releasing nitrogen slowly and improving NUE compared to plain urea."
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // LECTURE 6: Weed Management
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "d101l_079",
    subject: "da-101",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "A weed is defined as:",
    options: ["A plant growing where it is not wanted and causing economic loss", "A parasitic plant only", "Any plant that is poisonous to livestock", "Any plant growing in wasteland"],
    correct: 0,
    explanation: "A weed is a plant growing where it is not wanted or desired, competing with crops and causing economic loss in yield."
  },
  {
    id: "d101l_080",
    subject: "da-101",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "The critical period of weed competition in most crops is:",
    options: ["At seed filling stage", "At harvest time", "During crop flowering", "First 2–6 weeks after crop emergence"],
    correct: 3,
    explanation: "The critical period of weed competition is the first 2–6 weeks after crop emergence when weeds cause maximum yield loss if not controlled."
  },
  {
    id: "d101l_081",
    subject: "da-101",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Parthenium (congress grass) is classified as:",
    options: ["Aquatic weed", "Sedge weed", "Grass weed", "Broadleaf weed (dicot)"],
    correct: 3,
    explanation: "Parthenium hysterophorus (congress grass / carrot grass) is a broadleaf (dicot) weed that causes allergic reactions in humans."
  },
  {
    id: "d101l_082",
    subject: "da-101",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Which of the following herbicides is used as a pre-emergence herbicide in rice?",
    options: ["2,4-D", "Glyphosate", "Atrazine", "Butachlor"],
    correct: 3,
    explanation: "Butachlor is a pre-emergence herbicide applied 3–5 days after transplanting in rice fields to control annual grasses and some broadleaf weeds."
  },
  {
    id: "d101l_083",
    subject: "da-101",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "2,4-D is a selective herbicide effective against:",
    options: ["Sedges only", "Narrow-leaf (grass) weeds", "All weeds equally", "Broadleaf (dicot) weeds"],
    correct: 3,
    explanation: "2,4-D is a selective broadleaf herbicide (synthetic auxin) that controls dicotyledonous weeds in cereal crops like rice and wheat."
  },
  {
    id: "d101l_084",
    subject: "da-101",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Glyphosate is classified as:",
    options: ["Contact herbicide for sedges", "Selective pre-emergence grass herbicide", "Selective broadleaf herbicide", "Non-selective, post-emergence, systemic herbicide"],
    correct: 3,
    explanation: "Glyphosate is a non-selective, systemic, post-emergence herbicide that kills all actively growing plants by inhibiting the EPSPS enzyme."
  },
  {
    id: "d101l_085",
    subject: "da-101",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Cyperus rotundus (purple nutsedge / nutgrass) belongs to which weed category?",
    options: ["Sedge weeds", "Grass weeds", "Broadleaf weeds", "Aquatic weeds"],
    correct: 0,
    explanation: "Cyperus rotundus (nutgrass / motha) is the most problematic sedge weed, belonging to family Cyperaceae. It is very difficult to control due to tubers."
  },
  {
    id: "d101l_086",
    subject: "da-101",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "The Weed Index (WI) measures:",
    options: ["The number of weed species in a field", "The number of herbicide applications required", "The economic threshold of weeds", "The percentage yield loss caused by weeds"],
    correct: 3,
    explanation: "Weed Index = [(Yield in weed-free − Yield in weedy plot) / Yield in weed-free] × 100. It measures % yield reduction due to weed competition."
  },
  {
    id: "d101l_087",
    subject: "da-101",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Atrazine is a selective herbicide commonly used in:",
    options: ["Maize (corn)", "Wheat", "Rice", "Sugarcane only"],
    correct: 0,
    explanation: "Atrazine is a triazine herbicide used as pre-emergence/early post-emergence in maize for controlling broadleaf and grass weeds."
  },
  {
    id: "d101l_088",
    subject: "da-101",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Allelopathy in weed management refers to:",
    options: ["Biological control using insects", "Chemical toxicity of herbicides to weeds", "Release of chemical substances by one plant that inhibit growth of another", "Mechanical removal of weeds by hand"],
    correct: 2,
    explanation: "Allelopathy is the phenomenon where a plant releases chemical compounds (allelochemicals) that inhibit germination or growth of neighboring plants/weeds."
  },
  {
    id: "d101l_089",
    subject: "da-101",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Pendimethalin is used as a:",
    options: ["Post-emergence broadleaf herbicide", "Pre-plant incorporated or pre-emergence herbicide", "Non-selective total herbicide", "Systemic grass herbicide"],
    correct: 1,
    explanation: "Pendimethalin is a pre-emergence dinitroaniline herbicide applied before or at sowing to control annual grasses and broadleaf weeds in many crops."
  },
  {
    id: "d101l_090",
    subject: "da-101",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "The most problematic aquatic weed in rice paddies of Telangana is:",
    options: ["Eichhornia crassipes (water hyacinth)", "Ageratum conyzoides", "Parthenium", "Cyperus difformis"],
    correct: 3,
    explanation: "Cyperus difformis (flat sedge) and Echinochloa species are major paddy weeds, while Eichhornia clogs canals and reservoirs but Cyperus difformis is the key rice-paddy sedge."
  },
  {
    id: "d101l_091",
    subject: "da-101",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Hand weeding is most efficient when done at:",
    options: ["Pre-germination stage", "At crop maturity", "After weeds have set seed", "2–4 leaf stage of weeds"],
    correct: 3,
    explanation: "Hand weeding is most effective when weeds are at 2–4 leaf stage (young), before they establish deep roots or set seeds."
  },
  {
    id: "d101l_092",
    subject: "da-101",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Crop rotation helps in weed management because:",
    options: ["Rotation reduces need for any fertilizer", "Same crop depletes weed seeds over seasons", "Rotation always involves fallow periods that kill all weeds", "Changing crops disrupts life cycle of weed species adapted to one crop"],
    correct: 3,
    explanation: "Crop rotation disrupts the life cycle and adaptation of weed species specific to one crop, preventing build-up of any particular weed population."
  },
  {
    id: "d101l_093",
    subject: "da-101",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "A post-emergence herbicide is applied:",
    options: ["At the time of sowing along with seed", "After both crop and weed have emerged", "After sowing but before crop emergence", "Before sowing"],
    correct: 1,
    explanation: "Post-emergence herbicides are applied after both the crop and weeds have emerged from the soil to selectively control weed growth."
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // LECTURE 7: Irrigation & Water Management
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "d101l_094",
    subject: "da-101",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Irrigation scheduling based on IW:CPE ratio of 0.75–1.0 is commonly followed for which crop?",
    options: ["Rice", "Groundnut", "Wheat", "Cotton"],
    correct: 2,
    explanation: "IW:CPE (Irrigation Water to Cumulative Pan Evaporation) ratio of 0.75–1.0 is used for scheduling irrigations in wheat to maximize water use efficiency."
  },
  {
    id: "d101l_095",
    subject: "da-101",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Drip irrigation is most efficient because:",
    options: ["Water is sprayed over large area uniformly", "Water is applied directly to the root zone with minimal losses", "It uses gravity flow without pumping", "Water is flooded in the entire field"],
    correct: 1,
    explanation: "Drip irrigation delivers water slowly and directly to the plant root zone through emitters, minimizing evaporation and runoff losses. Efficiency is 85–95%."
  },
  {
    id: "d101l_096",
    subject: "da-101",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Water Use Efficiency (WUE) is expressed as:",
    options: ["Crop yield per unit land area", "Water stored in soil profile", "Crop yield per unit of water applied/evapotranspired", "Total water applied divided by crop duration"],
    correct: 2,
    explanation: "WUE = Crop yield / Water consumed (evapotranspiration). It indicates how efficiently a crop converts water into dry matter or grain."
  },
  {
    id: "d101l_097",
    subject: "da-101",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "The most critical stage for irrigation in rice is:",
    options: ["At 30 days after transplanting", "At harvest maturity", "Panicle initiation to grain filling stage", "At 10 days after transplanting"],
    correct: 2,
    explanation: "The most critical water requirement for rice is from panicle initiation through grain filling. Water stress at this stage causes spikelet sterility."
  },
  {
    id: "d101l_098",
    subject: "da-101",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Sprinkler irrigation is most suitable for:",
    options: ["Undulating terrain with sandy soils and field crops like wheat, groundnut", "Orchards with heavy clay soils", "Deep-flooded sugarcane", "Flooded paddy fields"],
    correct: 0,
    explanation: "Sprinkler irrigation is ideal for undulating terrain, sandy soils, and crops like wheat, groundnut, and vegetables. Efficiency is 70–80%."
  },
  {
    id: "d101l_099",
    subject: "da-101",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Irrigation efficiency of flood (surface) irrigation is approximately:",
    options: ["95–99%", "40–60%", "85–95%", "70–80%"],
    correct: 1,
    explanation: "Surface/flood irrigation has the lowest efficiency of 40–60% due to deep percolation, runoff, and evaporation losses."
  },
  {
    id: "d101l_100",
    subject: "da-101",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Waterlogging occurs when:",
    options: ["Rainfall exceeds crop water requirement", "Soil surface becomes extremely dry", "Irrigation intervals are very long", "The water table rises and saturates the root zone, restricting oxygen supply"],
    correct: 3,
    explanation: "Waterlogging occurs when the water table rises into the root zone, saturating soil and reducing oxygen availability, causing anaerobic conditions harmful to most crops."
  },
  {
    id: "d101l_101",
    subject: "da-101",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "The critical period of water requirement for groundnut is:",
    options: ["At 15 days after sowing", "Pegging and pod development stages", "At harvest maturity", "At germination only"],
    correct: 1,
    explanation: "For groundnut, the critical irrigation stages are pegging and pod development. Water stress at pegging reduces yield significantly."
  },
  {
    id: "d101l_102",
    subject: "da-101",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Which method of irrigation is recommended for sugarcane?",
    options: ["Sub-surface drip only", "Overhead sprinkler only", "Pitcher irrigation", "Border strip irrigation or furrow irrigation"],
    correct: 3,
    explanation: "Sugarcane is commonly irrigated by furrow irrigation (water flows in furrows between rows) or border strip irrigation, conserving water compared to flood irrigation."
  },
  {
    id: "d101l_103",
    subject: "da-101",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Sub-surface drainage is used to:",
    options: ["Remove excess water from within the root zone using buried pipes", "Increase soil moisture retention", "Prevent water from entering canals", "Bring water to the root zone from deep water table"],
    correct: 0,
    explanation: "Sub-surface drainage removes excess water from within the soil profile using perforated pipes or mole drains buried at depth, preventing waterlogging."
  },
  {
    id: "d101l_104",
    subject: "da-101",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Evapotranspiration (ET) is the sum of:",
    options: ["Rainfall + irrigation", "Evaporation from soil surface + transpiration from plants", "Canopy interception + deep percolation", "Runoff + percolation"],
    correct: 1,
    explanation: "Evapotranspiration (ET) = Evaporation (from soil and water surfaces) + Transpiration (from plant leaves). It represents total water loss from a cropped field."
  },
  {
    id: "d101l_105",
    subject: "da-101",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Micro-irrigation (drip and sprinkler) is promoted under which Government scheme in India?",
    options: ["RKVY", "MGNREGS", "Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)", "PMFBY"],
    correct: 2,
    explanation: "PMKSY (Pradhan Mantri Krishi Sinchayee Yojana) with 'Har Khet Ko Pani' and 'More Crop Per Drop' components promotes micro-irrigation across India."
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // LECTURE 8: Dryland Farming
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "d101l_106",
    subject: "da-101",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Dryland farming is practiced in areas with annual rainfall of:",
    options: ["Any rainfall with drip irrigation", "More than 2000 mm", "750–1500 mm with canal irrigation", "Less than 750 mm with no assured irrigation"],
    correct: 3,
    explanation: "Dryland farming is practiced in rainfed areas with annual rainfall below 750 mm (or up to 1150 mm in some definitions) where irrigation is not available."
  },
  {
    id: "d101l_107",
    subject: "da-101",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "CRIDA stands for:",
    options: ["Central Rice Institute for Dryland Agriculture", "Central Research Institute for Dryland Agriculture", "Central Rainfall Institute for Dryland Agriculture", "Crop Research Institute for Dryland Areas"],
    correct: 1,
    explanation: "CRIDA stands for Central Research Institute for Dryland Agriculture, located at Santoshnagar, Hyderabad, Telangana."
  },
  {
    id: "d101l_108",
    subject: "da-101",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "In-situ moisture conservation in dryland farming refers to:",
    options: ["Conserving rainfall where it falls in the field to maximize its use by the crop", "Spraying chemicals to reduce evaporation from soil", "Using irrigation from nearby river sources", "Storing rainwater in tanks and using it for irrigation"],
    correct: 0,
    explanation: "In-situ moisture conservation involves practices like tied ridges, broad-bed furrows, and mulching to conserve rainwater in the field where it falls."
  },
  {
    id: "d101l_109",
    subject: "da-101",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Broad Bed and Furrow (BBF) system is recommended for:",
    options: ["Vegetable crops under protected cultivation", "Orchards for water harvesting", "Flooded rice cultivation", "Dryland crops on Vertisols to manage excess moisture and drought"],
    correct: 3,
    explanation: "BBF is recommended for Vertisols (black cotton soils) in dryland areas to drain excess water during heavy rains while conserving moisture during dry spells."
  },
  {
    id: "d101l_110",
    subject: "da-101",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Contingency crop planning in dryland farming involves:",
    options: ["Using cloud seeding to ensure rainfall", "Growing high-water-requiring crops in drought years", "Abandoning cultivation in drought years", "Selecting alternative short-duration, drought-tolerant crops if normal sowing fails"],
    correct: 3,
    explanation: "Contingency planning involves selecting alternate drought-tolerant, short-duration crops (e.g., cowpea, horsegram, castor) when normal monsoon onset is delayed."
  },
  {
    id: "d101l_111",
    subject: "da-101",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Watershed management involves:",
    options: ["Integrated management of land, water, vegetation in a catchment area to optimize water use", "Management of water in reservoirs only", "Irrigation of only the watershed area", "Diversion of water from one basin to another"],
    correct: 0,
    explanation: "Watershed management is the process of guiding and organizing land use and other activities in a catchment area to provide desired goods and services without adversely affecting soil and water resources."
  },
  {
    id: "d101l_112",
    subject: "da-101",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Mulching in dryland farming helps to:",
    options: ["Increase runoff and erosion", "Reduce soil evaporation and conserve moisture", "Increase soil temperature uniformly", "Provide additional nitrogen to the crop"],
    correct: 1,
    explanation: "Mulching (covering soil with straw, polythene, or other materials) reduces evaporation from soil surface, conserves moisture, and suppresses weeds."
  },
  {
    id: "d101l_113",
    subject: "da-101",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The practice of collecting runoff water from a small area to irrigate a smaller crop area is called:",
    options: ["Drip irrigation", "Lift irrigation", "Water harvesting", "Sub-surface drainage"],
    correct: 2,
    explanation: "Water harvesting involves collecting and storing rainwater/runoff for supplemental irrigation during dry spells within the dryland farming system."
  },
  {
    id: "d101l_114",
    subject: "da-101",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Which of the following crops is most suitable as a contingency crop during late or failed monsoon in Telangana?",
    options: ["Cotton", "Transplanted rice", "Horsegram (Macrotyloma uniflorum)", "Sugarcane"],
    correct: 2,
    explanation: "Horsegram is the most drought-tolerant grain legume, suitable as contingency crop when monsoon is late or erratic in Telangana dryland areas."
  },
  {
    id: "d101l_115",
    subject: "da-101",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Tied ridges in dryland farming are used to:",
    options: ["Prevent surface runoff by blocking furrows at regular intervals", "Support creeper crops", "Guide irrigation water to crop rows", "Mark boundaries of fields"],
    correct: 0,
    explanation: "Tied ridges are formed by placing small earthen ties across furrows at regular intervals to impound rainwater in place and increase in-situ infiltration."
  },
  {
    id: "d101l_116",
    subject: "da-101",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "About what percentage of India's cultivated area is under dryland / rainfed farming?",
    options: ["80–85%", "60–65%", "40–45%", "20–25%"],
    correct: 1,
    explanation: "About 60–65% of India's net sown area (approximately 85 million ha) is under rainfed/dryland farming, which produces nearly 40% of total food grains."
  },
  {
    id: "d101l_117",
    subject: "da-101",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The recommended fertilizer dose for dryland crops is generally:",
    options: ["Lower than irrigated crops due to limited moisture", "Higher than irrigated crops", "Zero because moisture is insufficient for nutrient uptake", "Same as irrigated crops"],
    correct: 0,
    explanation: "Fertilizer dose for dryland crops is lower than for irrigated crops because limited moisture restricts nutrient uptake and excessive fertilizer can cause osmotic stress."
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // LECTURE 9: Cropping Systems
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "d101l_118",
    subject: "da-101",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Land Equivalent Ratio (LER) > 1 indicates that intercropping:",
    options: ["Is more productive than growing the crops separately in sole stands", "Is less productive than sole crops", "Has equal productivity to sole crops", "Has failed and one crop dominated the other"],
    correct: 0,
    explanation: "LER > 1 means intercropping is more efficient in using land resources than growing each crop as a sole crop. LER = 1 means no advantage; < 1 means disadvantage."
  },
  {
    id: "d101l_119",
    subject: "da-101",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Mixed cropping differs from intercropping in that:",
    options: ["Mixed cropping uses same row geometry as sole cropping", "Mixed cropping is sowing two or more crops simultaneously without distinct row arrangement; intercropping has defined row patterns", "Intercropping means growing crops in sequence, not simultaneously", "There is no difference between the two terms"],
    correct: 1,
    explanation: "Mixed cropping involves sowing two or more crops together without specific row arrangement. Intercropping has defined spatial arrangement (alternate rows, paired rows, etc.)."
  },
  {
    id: "d101l_120",
    subject: "da-101",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "A popular intercropping combination in Telangana for kharif season is:",
    options: ["Wheat + Chickpea", "Sunflower + Wheat", "Cotton + Redgram (pigeonpea)", "Rice + Maize"],
    correct: 2,
    explanation: "Cotton + Redgram (pigeonpea) is a common and productive intercropping system in Telangana, with pigeonpea in every 4th or 5th row of cotton."
  },
  {
    id: "d101l_121",
    subject: "da-101",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Relay cropping is defined as:",
    options: ["Sowing a second crop into a standing first crop before harvesting the first", "Growing two crops in alternate rows simultaneously throughout the season", "Mixed cropping with fixed row ratios", "Sequence of crops in a 3-year rotation plan"],
    correct: 0,
    explanation: "Relay cropping is sowing the second crop into the standing first crop before it is harvested, so both crops overlap for part of their life cycles."
  },
  {
    id: "d101l_122",
    subject: "da-101",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The main benefit of crop rotation with legumes is:",
    options: ["Addition of nitrogen to soil through biological N fixation", "Control of all pest species", "Reduction in water use", "Increase in soil phosphorus content"],
    correct: 0,
    explanation: "Legumes in rotation fix atmospheric nitrogen through Rhizobium symbiosis, reducing the nitrogen fertilizer requirement for the subsequent crop."
  },
  {
    id: "d101l_123",
    subject: "da-101",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The cropping intensity formula is:",
    options: ["Net sown area / Number of crops", "Gross sown area × 100", "Total crops grown / Total land available", "(Total area under all crops in a year / Net sown area) × 100"],
    correct: 3,
    explanation: "Cropping intensity = (Gross Cropped Area / Net Sown Area) × 100. If all land is double-cropped, intensity = 200%."
  },
  {
    id: "d101l_124",
    subject: "da-101",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Alley cropping (hedgerow intercropping) involves:",
    options: ["Relay cropping in alternate rows", "Sowing crops in contour furrows for erosion control", "Growing crops only in raised beds", "Growing food crops in alleys between rows of trees/shrubs"],
    correct: 3,
    explanation: "Alley cropping (hedgerow intercropping) grows food crops in the alleys between rows of woody trees/shrubs (like Leucaena, Sesbania) that provide mulch and nitrogen."
  },
  {
    id: "d101l_125",
    subject: "da-101",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The concept of 'companion crops' in intercropping refers to:",
    options: ["Only legume crops grown together", "Crops grown together that complement each other by having different resource needs", "Any two crops grown in sequence", "Two crops that compete intensely for the same resources"],
    correct: 1,
    explanation: "Companion crops are crops with complementary relationships, different rooting depths, canopy structures, or resource requirements that reduce competition and maximize land use."
  },
  {
    id: "d101l_126",
    subject: "da-101",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "A common crop rotation for Telangana vertisols (NTZ/CTZ) is:",
    options: ["Rice → Wheat → Chickpea", "Sugarcane → Paddy → Maize (3-year rotation)", "Cotton → Chickpea / Sorghum → Greengram", "Groundnut → Cotton → Tobacco"],
    correct: 2,
    explanation: "Cotton → Sorghum (or Chickpea in rabi) is a common rotation on vertisols of Telangana, breaking pest cycles and improving soil fertility."
  },
  {
    id: "d101l_127",
    subject: "da-101",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The advantage of sole cropping is:",
    options: ["Better resource use efficiency", "Simpler management and easier mechanization", "Higher LER than intercropping", "Better pest control through diversity"],
    correct: 1,
    explanation: "Sole cropping (growing one crop per field) is simpler to manage, allows full mechanization, and makes pest/disease management uniform and straightforward."
  },
  {
    id: "d101l_128",
    subject: "da-101",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Which of the following best represents a cereal + legume intercropping combination?",
    options: ["Maize + Sorghum", "Sorghum + Redgram (pigeonpea)", "Groundnut + Sunflower", "Rice + Wheat"],
    correct: 1,
    explanation: "Sorghum + Redgram is a classic cereal-legume intercrop (4:2 or 2:1 row ratio) common in Telangana and AP, where legume fixes nitrogen benefiting the cereal."
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // LECTURE 10: Harvest, Threshing & Post-Harvest
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: "d101l_129",
    subject: "da-101",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Harvest Index (HI) is defined as:",
    options: ["Total biomass / Grain yield", "Number of grains per panicle / Total spikelets × 100", "Grain yield / Total biological yield × 100", "Grain weight at harvest / 1000-grain weight"],
    correct: 2,
    explanation: "Harvest Index = (Economic yield / Biological yield) × 100. It indicates what fraction of total biomass is in the harvestable product (grain)."
  },
  {
    id: "d101l_130",
    subject: "da-101",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The Harvest Index of modern high-yielding rice varieties is approximately:",
    options: ["0.60–0.70", "0.80–0.90", "0.35–0.50", "0.2–0.3"],
    correct: 2,
    explanation: "Modern HYV rice has a Harvest Index of 0.35–0.50, compared to 0.20–0.30 for traditional tall varieties. This improved HI was key to Green Revolution gains."
  },
  {
    id: "d101l_131",
    subject: "da-101",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Physical maturity index for rice is:",
    options: ["When 80% of spikelets turn golden/straw colored", "When grain moisture reaches 25%", "When the flag leaf turns green", "When 50% of panicles have emerged"],
    correct: 0,
    explanation: "Rice is ready for harvest when 80–85% of spikelets turn golden/straw-colored, indicating physiological maturity and maximum grain dry weight."
  },
  {
    id: "d101l_132",
    subject: "da-101",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The safe moisture content for storage of grain cereals (rice, wheat) is:",
    options: ["8–10%", "20–25%", "30–35%", "14% or below"],
    correct: 3,
    explanation: "Cereal grains (rice, wheat, maize) should be stored at 14% moisture content or below to prevent fungal growth, mycotoxin development, and insect damage."
  },
  {
    id: "d101l_133",
    subject: "da-101",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Post-harvest losses in India are estimated at approximately:",
    options: ["2–5%", "30–40%", "10–15%", "50–60%"],
    correct: 2,
    explanation: "Post-harvest losses in India are estimated at 10–15% for cereals and up to 25–40% for fruits and vegetables, due to improper handling, storage, and processing."
  },
  {
    id: "d101l_134",
    subject: "da-101",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Threshing of rice is done when the grain moisture content is:",
    options: ["28–30%", "14–16%", "5–8%", "20–22%"],
    correct: 3,
    explanation: "Rice threshing is done when grain moisture is about 20–22%. If too dry, grains shatter; if too wet, threshing efficiency is poor and grains may be damaged."
  },
  {
    id: "d101l_135",
    subject: "da-101",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The black layer formation in maize grains indicates:",
    options: ["Fungal infection", "Onset of germination", "Physiological maturity has been reached", "Poor kernel development"],
    correct: 2,
    explanation: "The formation of a black layer (abscission layer) at the tip cap of maize kernels indicates physiological maturity – maximum dry matter accumulation."
  },
  {
    id: "d101l_136",
    subject: "da-101",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Combine harvester performs which of the following operations in one pass?",
    options: ["Irrigation and fertilization", "Ploughing, harrowing, and sowing", "Reaping, threshing, and winnowing", "Sowing and fertilizing"],
    correct: 2,
    explanation: "A combine harvester integrates reaping (cutting), threshing (separating grain from straw), and cleaning (winnowing) in one continuous field operation."
  },
  {
    id: "d101l_137",
    subject: "da-101",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Storage of food grains at village level in Telangana is traditionally done in:",
    options: ["Bamboo baskets only", "Open gunny bags in fields", "Mud bins / earthen structures (Pukka kothi)", "Metal bins (PUSA bins)"],
    correct: 2,
    explanation: "Traditional storage in Telangana uses earthen/mud bins (Kothi/Pukka Kothi). Scientific storage uses PUSA bins (metal) or Hapur Tekka to reduce pest losses."
  },
  {
    id: "d101l_138",
    subject: "da-101",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Aflatoxin contamination in stored groundnut is caused by:",
    options: ["Fusarium moniliforme", "Rhizopus stolonifer", "Claviceps purpurea", "Aspergillus flavus"],
    correct: 3,
    explanation: "Aspergillus flavus and A. parasiticus produce aflatoxins in stored groundnut, maize, and other grains, especially under high moisture (>14%) and temperature."
  },
  {
    id: "d101l_139",
    subject: "da-101",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Maturity index for cotton picking is:",
    options: ["When 50% of bolls open", "When boll moisture falls below 10%", "When leaves turn yellow", "When the plant reaches 120 cm height"],
    correct: 0,
    explanation: "Cotton is picked when 50% of bolls on the plant have opened (burst). Multiple pickings (2–3 rounds) are done 7–10 days apart."
  },
  {
    id: "d101l_140",
    subject: "da-101",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The PUSA bin was developed to store food grains at village level and is effective against:",
    options: ["Moisture ingress and grain storage insects/pests", "Fungal diseases only", "Rodents only", "Temperature fluctuations"],
    correct: 0,
    explanation: "PUSA bin is a metallic storage structure developed by IARI that is airtight, protecting grains from moisture, insects, and to some extent rodents."
  },

  // ── BATCH 2: Additional 100 questions from PJTSAU DA-101 Theory Notes ──
  {
    id: "d101x_001",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The first agricultural society in India was established in 1827 at:",
    options: ["Mumbai", "Calcutta", "Madras", "Delhi"],
    correct: 0,
    explanation: "As per DA-101 notes: The first agricultural society in India was established at Calcutta in 1827."
  },
  {
    id: "d101x_002",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The first model agricultural farm in India was established in 1864 at:",
    options: ["Saidapet, Tamil Nadu", "Coimbatore, Tamil Nadu", "Pusa, Bihar", "Nagpur, Maharashtra"],
    correct: 0,
    explanation: "As per DA-101 notes: The first model agricultural farm was established at Saidapet, Tamil Nadu in 1864."
  },
  {
    id: "d101x_003",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "ICRISAT was established in which year?",
    options: ["1972", "1960", "1965", "1979"],
    correct: 1,
    explanation: "As per DA-101 notes: ICRISAT (International Crops Research Institute for Semi-Arid Tropics) was established in 1972 at Hyderabad, India."
  },
  {
    id: "d101x_004",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The Imperial Agricultural Research Institute was established at Pusa, Bihar in:",
    options: ["1926", "1903", "1899", "1912"],
    correct: 2,
    explanation: "As per DA-101 notes: The Imperial Agricultural Research Institute was established at Pusa, Bihar in 1903."
  },
  {
    id: "d101x_005",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "NABARD (National Bank for Agriculture and Rural Development) was established in:",
    options: ["1986", "1974", "1982", "1979"],
    correct: 1,
    explanation: "As per DA-101 notes: NABARD was established in 1982."
  },
  {
    id: "d101x_006",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The first cotton hybrid in India was released in:",
    options: ["1970", "1966", "1980", "1975"],
    correct: 1,
    explanation: "As per DA-101 notes: The first cotton hybrid in India was released in 1975."
  },
  {
    id: "d101x_007",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "NRCWS (National Research Centre for Weed Science) is located at:",
    options: ["Hyderabad, Telangana", "Coimbatore, Tamil Nadu", "Jabalpur, M.P.", "Nagpur, Maharashtra"],
    correct: 0,
    explanation: "As per DA-101 notes: NRCWS is located at Jabalpur, M.P."
  },
  {
    id: "d101x_008",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "NBPGR (National Bureau of Plant Genetic Resources) is located at:",
    options: ["Bangalore", "New Delhi", "Mumbai", "Hyderabad"],
    correct: 1,
    explanation: "As per DA-101 notes: NBPGR is located at New Delhi."
  },
  {
    id: "d101x_009",
    subject: "da-101",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Telangana is divided into how many agro-climatic zones?",
    options: ["Four", "Two", "Five", "Three"],
    correct: 1,
    explanation: "As per DA-101 notes: Telangana is divided into three agro-climatic zones: Northern, Southern, and Central Telangana Zones."
  },
  {
    id: "d101x_010",
    subject: "da-101",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The Northern Telangana Zone has a total geographical area of approximately:",
    options: ["4.0 m. ha.", "9.0 m. ha.", "7.43 m. ha.", "3.86 m. ha."],
    correct: 3,
    explanation: "As per DA-101 notes: The Northern Telangana Zone has a total geographical area of 7.43 m. ha."
  },
  {
    id: "d101x_011",
    subject: "da-101",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The mean annual precipitation in the Northern Telangana Zone ranges from:",
    options: ["700 to 900 mm", "1000 to 1200 mm", "900 to 1150 mm", "809 to 996 mm"],
    correct: 0,
    explanation: "As per DA-101 notes: The Northern Telangana Zone receives mean annual precipitation ranging from 900 to 1150 mm."
  },
  {
    id: "d101x_012",
    subject: "da-101",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "What percentage of rainfall in Northern Telangana Zone is received from South West Monsoon?",
    options: ["77%", "90%", "82%", "88%"],
    correct: 0,
    explanation: "As per DA-101 notes: 82 per cent of rainfall in Northern Telangana Zone comes from the South West Monsoon."
  },
  {
    id: "d101x_013",
    subject: "da-101",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The Central Telangana Zone is an important growing zone for which crop?",
    options: ["Rice", "Cotton", "Groundnut", "Sugarcane"],
    correct: 3,
    explanation: "As per DA-101 notes: The Central Telangana Zone is the important Cotton growing zone of Telangana."
  },
  {
    id: "d101x_014",
    subject: "da-101",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The cropping intensity in the Northern Telangana Zone is:",
    options: ["100%", "110%", "130%", "120%"],
    correct: 0,
    explanation: "As per DA-101 notes: Cropping intensity in the Northern Telangana Zone is 110 per cent."
  },
  {
    id: "d101x_015",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Which layer of the atmosphere is called the 'Seat of weather phenomena'?",
    options: ["Mesosphere", "Stratosphere", "Ionosphere", "Troposphere"],
    correct: 1,
    explanation: "As per DA-101 notes: Troposphere is called the 'Seat of weather phenomena' because all clouds, thunderstorms and cyclones occur here."
  },
  {
    id: "d101x_016",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The mean lapse rate of temperature in the troposphere is:",
    options: ["5°C per km", "3.6°C per km", "8°C per km", "6.5°C per km"],
    correct: 1,
    explanation: "As per DA-101 notes: The mean lapse rate in the troposphere is 6.5°C per km (or 3.6°F per 1000 feet)."
  },
  {
    id: "d101x_017",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The stratosphere extends from the tropopause up to an altitude of approximately:",
    options: ["30-40 km", "50-55 km", "20-30 km", "80 km"],
    correct: 2,
    explanation: "As per DA-101 notes: The stratosphere exists above the tropopause and extends to altitudes of about 50-55 km."
  },
  {
    id: "d101x_018",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The stratosphere is called the 'Seat of photochemical reactions'. Which gas absorbs UV rays in this layer?",
    options: ["Ozone", "Argon", "Carbon dioxide", "Nitrogen"],
    correct: 2,
    explanation: "As per DA-101 notes: Ozone in the stratosphere absorbs ultraviolet radiation from the sun."
  },
  {
    id: "d101x_019",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The Ionosphere is found at a height of approximately:",
    options: ["20-30 km", "50-55 km", "80 km and beyond", "Above 400 km"],
    correct: 0,
    explanation: "As per DA-101 notes: The Ionosphere starts at about 80 km above the earth's surface and extends up to 400 km."
  },
  {
    id: "d101x_020",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Long distance radio communication is possible due to which layer of the atmosphere?",
    options: ["Exosphere", "Troposphere", "Stratosphere", "Ionosphere"],
    correct: 1,
    explanation: "As per DA-101 notes: The ionosphere reflects radio waves, making long-distance radio communication possible."
  },
  {
    id: "d101x_021",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The percentage of Nitrogen in dry atmospheric air by volume is approximately:",
    options: ["20.95%", "0.93%", "78.09%", "75.53%"],
    correct: 0,
    explanation: "As per DA-101 notes: Nitrogen comprises 78.09% of dry air by volume."
  },
  {
    id: "d101x_022",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The percentage of Oxygen in dry atmospheric air by volume is approximately:",
    options: ["23.13%", "15.5%", "78.09%", "20.95%"],
    correct: 1,
    explanation: "As per DA-101 notes: Oxygen comprises 20.95% of dry air by volume."
  },
  {
    id: "d101x_023",
    subject: "da-101",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Which part of the solar spectrum is most effective in photosynthesis?",
    options: ["Infrared rays", "Visible light (400-700 nm)", "X-rays", "Ultraviolet rays"],
    correct: 0,
    explanation: "As per DA-101 notes: Visible light in the wavelength range of 400-700 nm (Photosynthetically Active Radiation) is most effective for photosynthesis."
  },
  {
    id: "d101x_024",
    subject: "da-101",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The instrument used to measure sunshine duration is called:",
    options: ["Hygrometer", "Barometer", "Campbell Stokes sunshine recorder", "Thermometer"],
    correct: 1,
    explanation: "As per DA-101 notes: Campbell Stokes sunshine recorder is used to measure the duration of bright sunshine."
  },
  {
    id: "d101x_025",
    subject: "da-101",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The instrument used to measure soil temperature is:",
    options: ["Barometer", "Hygrometer", "Anemometer", "Soil thermometer"],
    correct: 0,
    explanation: "As per DA-101 notes: Soil thermometer is used to measure soil temperature at different depths."
  },
  {
    id: "d101x_026",
    subject: "da-101",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Relative humidity is defined as the ratio of:",
    options: ["Actual vapour pressure to saturation vapour pressure × 100", "Amount of water vapour to total air volume × 100", "Saturation vapour pressure to actual vapour pressure × 100", "Dew point to dry bulb temperature × 100"],
    correct: 0,
    explanation: "As per DA-101 notes: Relative humidity = (Actual vapour pressure / Saturation vapour pressure) × 100."
  },
  {
    id: "d101x_027",
    subject: "da-101",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The instrument used to measure relative humidity is:",
    options: ["Rain gauge", "Hygrometer (Psychrometer)", "Anemometer", "Barometer"],
    correct: 2,
    explanation: "As per DA-101 notes: Hygrometer (or Psychrometer) is used to measure relative humidity."
  },
  {
    id: "d101x_028",
    subject: "da-101",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Wind speed is measured by:",
    options: ["Hygrometer", "Barometer", "Thermometer", "Anemometer"],
    correct: 0,
    explanation: "As per DA-101 notes: Anemometer is the instrument used to measure wind speed."
  },
  {
    id: "d101x_029",
    subject: "da-101",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Atmospheric pressure is measured by:",
    options: ["Barometer", "Hygrometer", "Lysimeter", "Anemometer"],
    correct: 3,
    explanation: "As per DA-101 notes: Barometer is the instrument used to measure atmospheric pressure."
  },
  {
    id: "d101x_030",
    subject: "da-101",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Rainfall is measured by:",
    options: ["Rain gauge", "Barometer", "Hygrometer", "Lysimeter"],
    correct: 3,
    explanation: "As per DA-101 notes: Rain gauge is used to measure the amount of rainfall."
  },
  {
    id: "d101x_031",
    subject: "da-101",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Primary tillage refers to:",
    options: ["Deep, initial breaking of soil", "Removal of weeds from the soil", "Light surface soil stirring after initial ploughing", "Seed bed preparation for sowing"],
    correct: 2,
    explanation: "As per DA-101 notes: Primary tillage refers to deep initial breaking or turning of the soil, usually done with mouldboard plough or disc plough."
  },
  {
    id: "d101x_032",
    subject: "da-101",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Puddling is done specifically for which crop?",
    options: ["Maize", "Wheat", "Sugarcane", "Rice (Paddy)"],
    correct: 1,
    explanation: "As per DA-101 notes: Puddling is done for transplanting paddy (rice) as it reduces percolation losses and creates an ideal condition for rice growth."
  },
  {
    id: "d101x_033",
    subject: "da-101",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Minimum tillage or conservation tillage is done to:",
    options: ["Reduce soil disturbance and conserve soil moisture", "Maximise soil disturbance", "Facilitate deep ploughing", "Increase weed germination"],
    correct: 1,
    explanation: "As per DA-101 notes: Minimum tillage reduces soil disturbance to the minimum necessary, conserving soil moisture and structure."
  },
  {
    id: "d101x_034",
    subject: "da-101",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "In which sowing method are seeds dropped in a continuous stream in a furrow?",
    options: ["Broadcasting", "Drilling", "Dibbling", "Transplanting"],
    correct: 2,
    explanation: "As per DA-101 notes: In drilling method, seeds are dropped in a continuous stream in furrows opened by a seed drill."
  },
  {
    id: "d101x_035",
    subject: "da-101",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "In which method of sowing, seeds are placed in pre-prepared holes at specific intervals?",
    options: ["Transplanting", "Dibbling", "Drilling", "Broadcasting"],
    correct: 3,
    explanation: "As per DA-101 notes: Dibbling is the method where seeds are placed in holes at definite spacing."
  },
  {
    id: "d101x_036",
    subject: "da-101",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Transplanting as a method of crop establishment is most common for:",
    options: ["Sorghum", "Rice and vegetables", "Maize", "Wheat"],
    correct: 3,
    explanation: "As per DA-101 notes: Transplanting is most commonly used for rice, tobacco, and vegetables where seedlings are first raised in a nursery."
  },
  {
    id: "d101x_037",
    subject: "da-101",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Soil amendments are materials added to soil to improve its:",
    options: ["Only nitrogen content", "Only pH level", "Only water holding capacity", "Physical, chemical and biological properties"],
    correct: 0,
    explanation: "As per DA-101 notes: Soil amendments are materials added to improve the physical, chemical and biological properties of soil."
  },
  {
    id: "d101x_038",
    subject: "da-101",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Gypsum is used as a soil amendment primarily for:",
    options: ["Sandy soils", "Alkaline (Sodic) soils", "Acidic soils", "Saline soils"],
    correct: 2,
    explanation: "As per DA-101 notes: Gypsum (calcium sulphate) is used to reclaim alkaline/sodic soils by replacing sodium with calcium."
  },
  {
    id: "d101x_039",
    subject: "da-101",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Weeds are defined as plants that:",
    options: ["Grow where they are not wanted and compete with crop plants", "Are used as green manure", "Grow where they are wanted", "Are beneficial to crop growth"],
    correct: 2,
    explanation: "As per DA-101 notes: Weeds are plants growing where they are not wanted and compete with crops for nutrients, water, light and space."
  },
  {
    id: "d101x_040",
    subject: "da-101",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Which of the following is a parasitic weed that attacks sugarcane?",
    options: ["Striga (Witch weed)", "Parthenium", "Lantana camara", "Cyperus rotundus"],
    correct: 3,
    explanation: "As per DA-101 notes: Striga (witch weed) is a parasitic weed that attacks sugarcane and other crops by attaching to their roots."
  },
  {
    id: "d101x_041",
    subject: "da-101",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "2,4-D (2,4-Dichlorophenoxyacetic acid) is classified as which type of herbicide?",
    options: ["Non-selective herbicide", "Soil-applied pre-emergence herbicide", "Graminicide", "Selective broadleaf herbicide"],
    correct: 2,
    explanation: "As per DA-101 notes: 2,4-D is a selective herbicide that kills broadleaf weeds without harming grassy crops like wheat and rice."
  },
  {
    id: "d101x_042",
    subject: "da-101",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Herbicides applied before the crop or weeds emerge from the soil are called:",
    options: ["Pre-emergence herbicides", "Post-emergence herbicides", "Contact herbicides", "Systemic herbicides"],
    correct: 1,
    explanation: "As per DA-101 notes: Pre-emergence herbicides are applied to the soil before the crop or weeds emerge."
  },
  {
    id: "d101x_043",
    subject: "da-101",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The critical period of crop-weed competition is the period during which:",
    options: ["Weed control has no effect on crop yield", "Weeds cause maximum damage if not controlled", "Weeds benefit the crop", "Crops are harvested"],
    correct: 1,
    explanation: "As per DA-101 notes: The critical period of crop-weed competition is the period during which weeds cause maximum yield loss if not controlled."
  },
  {
    id: "d101x_044",
    subject: "da-101",
    lecture: "lecture-11",
    lectureNo: 11,
    question: "The water requirement of rice (paddy) per crop season is approximately:",
    options: ["100-200 mm", "1200-1500 mm", "700-1000 mm", "500-600 mm"],
    correct: 3,
    explanation: "As per DA-101 notes: The water requirement of paddy (rice) is approximately 1200-1500 mm per crop season."
  },
  {
    id: "d101x_045",
    subject: "da-101",
    lecture: "lecture-11",
    lectureNo: 11,
    question: "Drip irrigation is also known as:",
    options: ["Flood irrigation", "Furrow irrigation", "Trickle irrigation", "Sprinkler irrigation"],
    correct: 0,
    explanation: "As per DA-101 notes: Drip irrigation is also known as trickle irrigation as water is applied drop by drop near the plant roots."
  },
  {
    id: "d101x_046",
    subject: "da-101",
    lecture: "lecture-11",
    lectureNo: 11,
    question: "Sprinkler irrigation is most suitable for:",
    options: ["Heavy clay soils only", "Waterlogged areas", "Sandy and undulating lands with irregular topography", "Flooded paddy fields"],
    correct: 0,
    explanation: "As per DA-101 notes: Sprinkler irrigation is most suitable for sandy and undulating lands with irregular topography."
  },
  {
    id: "d101x_047",
    subject: "da-101",
    lecture: "lecture-12",
    lectureNo: 12,
    question: "The main objective of drainage is to:",
    options: ["Increase waterlogging", "Reduce crop growth", "Remove excess water from soil to improve aeration", "Increase soil salinity"],
    correct: 3,
    explanation: "As per DA-101 notes: Drainage removes excess water from the soil to improve soil aeration and make land suitable for cultivation."
  },
  {
    id: "d101x_048",
    subject: "da-101",
    lecture: "lecture-12",
    lectureNo: 12,
    question: "Sub-surface drainage (tile drainage) removes excess water from:",
    options: ["Surface of soil", "Air above soil", "Irrigation channels", "Below the soil surface"],
    correct: 0,
    explanation: "As per DA-101 notes: Sub-surface drainage (tile or mole drainage) removes excess water from below the soil surface."
  },
  {
    id: "d101x_049",
    subject: "da-101",
    lecture: "lecture-13",
    lectureNo: 13,
    question: "Harvesting index (HI) is defined as the ratio of:",
    options: ["Total biomass to grain yield", "Shoot weight to root weight", "Total yield to water applied", "Grain yield to total biological yield"],
    correct: 0,
    explanation: "As per DA-101 notes: Harvest Index = Economic yield (grain) / Total biological yield × 100."
  },
  {
    id: "d101x_050",
    subject: "da-101",
    lecture: "lecture-13",
    lectureNo: 13,
    question: "Threshing refers to:",
    options: ["Cutting the crop at maturity", "Drying of harvested crop", "Storage of harvested produce", "Separating grain from the ear head or pod"],
    correct: 0,
    explanation: "As per DA-101 notes: Threshing is the process of separating grain from the ear head or pod after harvesting."
  },
  {
    id: "d101x_051",
    subject: "da-101",
    lecture: "lecture-14",
    lectureNo: 14,
    question: "Dryland agriculture is practiced in areas with annual rainfall less than:",
    options: ["1000 mm", "750 mm", "500 mm", "1200 mm"],
    correct: 3,
    explanation: "As per DA-101 notes: Dryland agriculture is generally practiced in areas receiving less than 750 mm of annual rainfall."
  },
  {
    id: "d101x_052",
    subject: "da-101",
    lecture: "lecture-14",
    lectureNo: 14,
    question: "Which of the following is NOT a characteristic of dryland agriculture?",
    options: ["Uneven distribution of rainfall", "Low productivity per unit area", "Assured irrigation throughout the year", "Moisture stress conditions"],
    correct: 0,
    explanation: "As per DA-101 notes: Dryland agriculture is characterised by dependence on rainfall, not assured irrigation. Irrigation is not available throughout the year."
  },
  {
    id: "d101x_053",
    subject: "da-101",
    lecture: "lecture-14",
    lectureNo: 14,
    question: "Bunding in dryland agriculture is done to:",
    options: ["Conserve rainwater and prevent runoff", "Increase soil erosion", "Reduce infiltration", "Facilitate drainage of excess water"],
    correct: 1,
    explanation: "As per DA-101 notes: Bunding is done to conserve rainwater in situ and prevent surface runoff in dryland areas."
  },
  {
    id: "d101x_054",
    subject: "da-101",
    lecture: "lecture-15",
    lectureNo: 15,
    question: "Water harvesting is defined as:",
    options: ["Diversion of river water", "Irrigation of crops using canals", "Use of underground water for irrigation", "Collection and storage of rainwater runoff for later use"],
    correct: 1,
    explanation: "As per DA-101 notes: Water harvesting is the collection and storage of rainwater from rooftops, catchment areas or fields for later use."
  },
  {
    id: "d101x_055",
    subject: "da-101",
    lecture: "lecture-15",
    lectureNo: 15,
    question: "Contingency crop planning is done when:",
    options: ["Excess rainfall damages crops", "Monsoon fails or is delayed and alternative crops need to be chosen", "Monsoon is normal and timely", "Market prices of crops fall"],
    correct: 2,
    explanation: "As per DA-101 notes: Contingency crop planning involves having an alternative plan when monsoon fails or is delayed, to substitute failed crops with suitable alternatives."
  },
  {
    id: "d101x_056",
    subject: "da-101",
    lecture: "lecture-16",
    lectureNo: 16,
    question: "A watershed is defined as:",
    options: ["A water storage tank for irrigation", "An area that drains into a common outlet", "A method of soil conservation", "A type of crop rotation"],
    correct: 1,
    explanation: "As per DA-101 notes: A watershed (or catchment) is a land area that drains into a common outlet such as a river, lake or reservoir."
  },
  {
    id: "d101x_057",
    subject: "da-101",
    lecture: "lecture-16",
    lectureNo: 16,
    question: "The principle of 'ridges and furrows' in soil conservation aims to:",
    options: ["Reduce soil moisture", "Increase wind erosion", "Break the flow of water and reduce erosion", "Increase surface runoff"],
    correct: 3,
    explanation: "As per DA-101 notes: Ridge and furrow system breaks the flow of water across the slope, reducing runoff and soil erosion."
  },
  {
    id: "d101x_058",
    subject: "da-101",
    lecture: "lecture-17",
    lectureNo: 17,
    question: "Intercropping differs from mixed cropping in that:",
    options: ["Crops are sown at different seasons", "Both crops are sown at the same time without any specific pattern", "Crops are grown in definite row arrangements with distinct inter-row spaces", "Only one crop is sown at a time"],
    correct: 1,
    explanation: "As per DA-101 notes: In intercropping, component crops are grown in definite row arrangements, while in mixed cropping, seeds are mixed and sown without a definite pattern."
  },
  {
    id: "d101x_059",
    subject: "da-101",
    lecture: "lecture-17",
    lectureNo: 17,
    question: "Relay cropping refers to:",
    options: ["Growing two crops sequentially without any overlap", "Growing crops in glasshouses", "Growing only one crop per year", "Sowing the second crop into the standing first crop before its harvest"],
    correct: 0,
    explanation: "As per DA-101 notes: Relay cropping involves sowing the second crop into the standing first crop before it is harvested."
  },
  {
    id: "d101x_060",
    subject: "da-101",
    lecture: "lecture-17",
    lectureNo: 17,
    question: "Multiple cropping refers to:",
    options: ["Growing crops in multiple countries", "Growing more than one crop on the same land in the same year", "Growing the same crop repeatedly", "Growing only one crop per year"],
    correct: 3,
    explanation: "As per DA-101 notes: Multiple cropping refers to growing more than one crop on the same piece of land in the same year."
  },
  {
    id: "d101x_061",
    subject: "da-101",
    lecture: "lecture-18",
    lectureNo: 18,
    question: "Crop rotation helps in:",
    options: ["Maintaining and improving soil fertility and breaking pest cycles", "Increasing pest and disease buildup", "Depleting soil nutrients continuously", "Reducing crop diversity"],
    correct: 2,
    explanation: "As per DA-101 notes: Crop rotation helps maintain soil fertility, break pest and disease cycles, and improve soil structure."
  },
  {
    id: "d101x_062",
    subject: "da-101",
    lecture: "lecture-18",
    lectureNo: 18,
    question: "Which of the following is a principle of crop rotation?",
    options: ["Leguminous crops should never be included", "Always grow the same crop in the same field", "Irrigated crops should always follow irrigated crops", "Deep-rooted crops should follow shallow-rooted crops"],
    correct: 1,
    explanation: "As per DA-101 notes: One principle of crop rotation is that deep-rooted crops should follow shallow-rooted crops for efficient nutrient utilisation from different soil depths."
  },
  {
    id: "d101x_063",
    subject: "da-101",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "Integrated Farming System (IFS) involves:",
    options: ["Growing a single crop throughout the year", "Using only chemical inputs", "Only crop production", "Combining crop production with livestock, fishery and other enterprises"],
    correct: 2,
    explanation: "As per DA-101 notes: IFS combines crop production with livestock, fishery, poultry, mushroom, and other enterprises for better resource utilization and income."
  },
  {
    id: "d101x_064",
    subject: "da-101",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "Sustainable agriculture aims to:",
    options: ["Meet present needs without compromising future generations' ability to meet their needs", "Use maximum chemical fertilisers", "Eliminate traditional farming practices", "Maximise production at any cost"],
    correct: 3,
    explanation: "As per DA-101 notes: Sustainable agriculture aims to produce food to meet present needs while ensuring future generations can also meet their needs, maintaining environmental quality."
  },
  {
    id: "d101x_065",
    subject: "da-101",
    lecture: "lecture-20",
    lectureNo: 20,
    question: "Organic farming relies primarily on:",
    options: ["Synthetic chemical fertilisers and pesticides", "Natural inputs like compost, FYM, biofertilisers and biopesticides", "Genetically modified organisms", "High doses of nitrogen fertilisers"],
    correct: 0,
    explanation: "As per DA-101 notes: Organic farming uses natural inputs like farmyard manure, compost, biofertilisers and biopesticides, avoiding synthetic chemicals."
  },
  {
    id: "d101x_066",
    subject: "da-101",
    lecture: "lecture-20",
    lectureNo: 20,
    question: "The nodule bacteria that fix atmospheric nitrogen in legume root nodules are:",
    options: ["Rhizobium", "Azotobacter", "Blue-green algae", "Azospirillum"],
    correct: 3,
    explanation: "As per DA-101 notes: Rhizobium bacteria form symbiotic association with legume roots and fix atmospheric nitrogen in root nodules."
  },
  {
    id: "d101x_067",
    subject: "da-101",
    lecture: "lecture-20",
    lectureNo: 20,
    question: "VAM (Vesicular Arbuscular Mycorrhizae) is a:",
    options: ["Algal biofertiliser", "Fungal biofertiliser that helps in phosphorus uptake", "Bacterial biofertiliser", "Chemical fertiliser"],
    correct: 2,
    explanation: "As per DA-101 notes: VAM is a fungal biofertiliser (mycorrhizal fungus) that forms association with plant roots and enhances phosphorus uptake."
  },
  {
    id: "d101x_068",
    subject: "da-101",
    lecture: "lecture-21",
    lectureNo: 21,
    question: "Certification of organic farm products in India is done by:",
    options: ["Ministry of Finance", "APEDA and accredited certification agencies", "FCI", "ICAR"],
    correct: 3,
    explanation: "As per DA-101 notes: Certification of organic farming products in India is done by APEDA and accredited certification bodies under the National Programme for Organic Production (NPOP)."
  },
  {
    id: "d101x_069",
    subject: "da-101",
    lecture: "lecture-21",
    lectureNo: 21,
    question: "The National Project on Organic Farming (NPOF) was established at:",
    options: ["Nagpur, Maharashtra", "Ghaziabad, Uttar Pradesh", "Hyderabad, Telangana", "New Delhi"],
    correct: 2,
    explanation: "As per DA-101 notes: The National Project on Organic Farming (NPOF) was established at Ghaziabad, Uttar Pradesh."
  },
  {
    id: "d101x_070",
    subject: "da-101",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The instrument used to measure evaporation is called:",
    options: ["Anemometer", "Barometer", "Psychrometer", "Pan Evaporimeter (Class A pan)"],
    correct: 0,
    explanation: "As per DA-101 notes: Class A pan evaporimeter is used to measure evaporation from open water surface."
  },
  {
    id: "d101x_071",
    subject: "da-101",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Assertion (A): PJTSAU was established after the bifurcation of Andhra Pradesh in 2014.
Reason (R): Before bifurcation, agriculture universities in the combined Andhra Pradesh served both regions.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true but R is NOT the correct explanation of A", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "As per DA-101 notes: PJTSAU was established after Telangana became a separate state in 2014. The earlier university (ANGRAU) served combined AP. Both statements are true and R explains A."
  },
  {
    id: "d101x_072",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Assertion (A): The troposphere is heated from below.
Reason (R): Most solar radiation is first absorbed by the Earth's surface, which then heats the air above it.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true but R is NOT the correct explanation of A", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "As per DA-101 notes: The troposphere is heated from below because most radiation received from the sun is absorbed by the earth's surface, which then radiates heat upward."
  },
  {
    id: "d101x_073",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Assertion (A): The ozone layer protects life on Earth from harmful UV radiation.
Reason (R): Ozone in the stratosphere selectively absorbs ultraviolet rays from the sun.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true but R is NOT the correct explanation of A", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "As per DA-101 notes: The ozone layer in the stratosphere absorbs UV radiation from the sun, thus protecting life on earth. Both A and R are true, R correctly explains A."
  },
  {
    id: "d101x_074",
    subject: "da-101",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Assertion (A): Puddling is beneficial for transplanted paddy cultivation.
Reason (R): Puddling destroys soil structure, reduces percolation losses, and creates anaerobic conditions suitable for paddy growth.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true but R is NOT the correct explanation of A", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "As per DA-101 notes: Puddling is done for transplanted paddy. It reduces percolation, creates anaerobic conditions, and controls weeds. Both A and R are true and R explains A."
  },
  {
    id: "d101x_075",
    subject: "da-101",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Assertion (A): Weeds reduce crop yields significantly.
Reason (R): Weeds compete with crops for nutrients, water, light, and space, reducing the resources available to the crop.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true but R is NOT the correct explanation of A", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "As per DA-101 notes: Weeds cause yield losses by competing with crops for all growth factors. Both A and R are true; R correctly explains A."
  },
  {
    id: "d101x_076",
    subject: "da-101",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Assertion (A): 2,4-D is widely used in wheat fields to control weeds.
Reason (R): 2,4-D is a selective herbicide that kills broadleaf weeds but does not harm grassy crops like wheat.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true but R is NOT the correct explanation of A", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "As per DA-101 notes: 2,4-D is a selective broadleaf herbicide used in wheat fields. Both A and R are true; R correctly explains A."
  },
  {
    id: "d101x_077",
    subject: "da-101",
    lecture: "lecture-11",
    lectureNo: 11,
    question: "Assertion (A): Drip irrigation has the highest water use efficiency among all irrigation methods.
Reason (R): In drip irrigation, water is delivered directly to the root zone, minimising evaporation and runoff losses.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true but R is NOT the correct explanation of A", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "As per DA-101 notes: Drip irrigation has the highest water use efficiency (90-95%) because water is directly applied to the root zone, reducing losses. Both A and R are true."
  },
  {
    id: "d101x_078",
    subject: "da-101",
    lecture: "lecture-12",
    lectureNo: 12,
    question: "Assertion (A): Waterlogging reduces crop productivity.
Reason (R): Excess water in soil displaces air, creating anaerobic conditions that are harmful to most upland crops.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true but R is NOT the correct explanation of A", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "As per DA-101 notes: Waterlogging creates anaerobic conditions by displacing air from soil pores, harming crop roots. Both A and R are true and R explains A."
  },
  {
    id: "d101x_079",
    subject: "da-101",
    lecture: "lecture-14",
    lectureNo: 14,
    question: "Assertion (A): Dryland agriculture is characterised by low and uncertain productivity.
Reason (R): Dryland areas depend entirely on rainfall which is erratic and insufficient, leading to frequent moisture stress.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true but R is NOT the correct explanation of A", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "As per DA-101 notes: Dryland agriculture has low productivity due to dependence on erratic rainfall. Both A and R are true; R correctly explains A."
  },
  {
    id: "d101x_080",
    subject: "da-101",
    lecture: "lecture-17",
    lectureNo: 17,
    question: "Assertion (A): Intercropping results in higher land use efficiency compared to sole cropping.
Reason (R): In intercropping, different crops utilise space, light, and nutrients at different times and depths, improving resource utilisation.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true but R is NOT the correct explanation of A", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "As per DA-101 notes: Intercropping improves LER (Land Equivalent Ratio) by utilizing resources more efficiently. Both A and R are true; R explains A."
  },
  {
    id: "d101x_081",
    subject: "da-101",
    lecture: "lecture-18",
    lectureNo: 18,
    question: "Assertion (A): Including legumes in crop rotation improves soil fertility.
Reason (R): Leguminous crops fix atmospheric nitrogen through Rhizobium symbiosis, enriching the soil with nitrogen for subsequent crops.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true but R is NOT the correct explanation of A", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "As per DA-101 notes: Legumes in rotation fix nitrogen via Rhizobium, improving soil fertility for the next crop. Both A and R are true; R correctly explains A."
  },
  {
    id: "d101x_082",
    subject: "da-101",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "Assertion (A): Integrated Farming System (IFS) improves farm income and reduces risk.
Reason (R): IFS combines crop, livestock and other enterprises so that failure in one enterprise is offset by income from others.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true but R is NOT the correct explanation of A", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "As per DA-101 notes: IFS reduces risk because multiple enterprises provide alternative income sources. Both A and R are true; R correctly explains A."
  },
  {
    id: "d101x_083",
    subject: "da-101",
    lecture: "lecture-20",
    lectureNo: 20,
    question: "Assertion (A): Organic farming does not use any chemical inputs.
Reason (R): Organic farming is based on the principle of using only natural and biological inputs to maintain soil health and crop productivity.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true but R is NOT the correct explanation of A", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "As per DA-101 notes: Organic farming avoids synthetic chemicals. Both A and R are true and R explains the principle behind A."
  },
  {
    id: "d101x_084",
    subject: "da-101",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Assertion (A): Green manuring helps improve soil organic matter and nitrogen content.
Reason (R): Green manure crops (usually legumes) are incorporated into the soil while still green, decomposing to release nutrients.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true but R is NOT the correct explanation of A", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "As per DA-101 notes: Green manuring involves incorporating green plant material into soil while still green, improving organic matter and nitrogen content. Both A and R are true."
  },
  {
    id: "d101x_085",
    subject: "da-101",
    lecture: "lecture-15",
    lectureNo: 15,
    question: "Assertion (A): Watershed management helps control soil erosion and conserve water.
Reason (R): Watershed management treats the entire catchment area through biological and engineering measures to check runoff and erosion.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true but R is NOT the correct explanation of A", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "As per DA-101 notes: Watershed management uses both biological and engineering measures to conserve soil and water in the entire catchment area. Both A and R are true."
  },
  {
    id: "d101x_086",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Match the following research institutes:
     Column-I (Institute)        |  Column-II (Location)        |  Column-III (Crop/Subject)
A.  ICRISAT                      |  1.  Jodhpur, Rajasthan       |  i.   Semi-Arid Tropics crops
B.  CAZRI                        |  2.  Hyderabad, India         |  ii.  Arid Zone Research
C.  SBI                          |  3.  Coimbatore, Tamil Nadu   |  iii. Sugarcane Breeding
D.  CPRI                         |  4.  Simla, H.P.              |  iv.  Potato Research",
    options: ["A-4-i,  B-3-ii,  C-2-iii,  D-1-iv", "A-2-i,  B-1-ii,  C-3-iii,  D-4-iv", "A-1-i,  B-2-ii,  C-4-iii,  D-3-iv", "A-2-ii, B-1-i,   C-3-iv,   D-4-iii"],
    correct: 1,
    explanation: "As per DA-101 notes: ICRISAT-Hyderabad (Semi-Arid Tropics), CAZRI-Jodhpur (Arid Zone), SBI-Coimbatore (Sugarcane), CPRI-Simla (Potato)."
  },
  {
    id: "d101x_087",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Match the following agriculture milestones:
     Column-I (Year)             |  Column-II (Event)           |  Column-III (Significance)
A.  1788                         |  1.  NABARD established       |  i.   Financial institution for agri
B.  1903                         |  2.  First cotton improvement  |  ii.  First systematic crop R&D
C.  1982                         |  3.  Imperial Agri. Res. Inst. |  iii. First research institute
D.  1972                         |  4.  ICRISAT established       |  iv.  Dryland crop research",
    options: ["A-2-ii, B-3-iii, C-1-i,   D-4-iv", "A-4-iv, B-1-i,   C-2-ii,   D-3-iii", "A-1-i,  B-4-ii,  C-3-iii,  D-2-iv", "A-3-i,  B-2-ii,  C-4-iii,  D-1-iv"],
    correct: 0,
    explanation: "As per DA-101 notes: 1788-First cotton improvement; 1903-Imperial Agri Research Institute at Pusa; 1982-NABARD; 1972-ICRISAT established."
  },
  {
    id: "d101x_088",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Match the atmospheric layers:
     Column-I (Layer)            |  Column-II (Height range)    |  Column-III (Feature)
A.  Troposphere                  |  1.  80-400 km                |  i.   Radio wave reflection
B.  Stratosphere                 |  2.  0-14 km                  |  ii.  Weather phenomena
C.  Ionosphere                   |  3.  20-55 km                 |  iii. Photochemical reactions
D.  Exosphere                    |  4.  Above 400 km             |  iv.  H and He gases dominate",
    options: ["A-2-ii, B-3-iii, C-1-i,   D-4-iv", "A-4-iv, B-3-iii, C-1-i,   D-2-ii", "A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-3-iii, B-2-ii, C-4-iv,   D-1-i"],
    correct: 0,
    explanation: "As per DA-101 notes: Troposphere (0-14 km, weather); Stratosphere (20-55 km, photochemical); Ionosphere (80-400 km, radio reflection); Exosphere (above 400 km, H/He)."
  },
  {
    id: "d101x_089",
    subject: "da-101",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Match the meteorological instruments:
     Column-I (Instrument)       |  Column-II (Measures)        |  Column-III (Unit)
A.  Anemometer                   |  1.  Rainfall                 |  i.   mm
B.  Barometer                    |  2.  Wind speed               |  ii.  km/h or m/s
C.  Rain gauge                   |  3.  Sunshine duration        |  iii. Hours
D.  Campbell Stokes recorder     |  4.  Atmospheric pressure     |  iv.  hPa or mb",
    options: ["A-4-iv, B-3-iii, C-2-ii,  D-1-i", "A-2-ii, B-4-iv,  C-1-i,   D-3-iii", "A-3-iii, B-1-i,  C-2-ii,   D-4-iv", "A-1-i,  B-2-ii,  C-3-iii,  D-4-iv"],
    correct: 1,
    explanation: "As per DA-101 notes: Anemometer measures wind speed (km/h); Barometer measures atmospheric pressure (hPa); Rain gauge measures rainfall (mm); Campbell Stokes records sunshine hours."
  },
  {
    id: "d101x_090",
    subject: "da-101",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Match the tillage types:
     Column-I (Tillage type)     |  Column-II (Purpose)         |  Column-III (Tool used)
A.  Primary tillage              |  1.  Seed bed preparation     |  i.   Seed drill
B.  Secondary tillage            |  2.  Deep soil breaking       |  ii.  Mouldboard plough
C.  Puddling                     |  3.  Paddy transplanting      |  iii. Cage wheel tractor
D.  Minimum tillage              |  4.  Reduce soil disturbance  |  iv.  Strip till cultivator",
    options: ["A-2-ii, B-1-i,   C-3-iii,  D-4-iv", "A-3-iii, B-4-iv, C-1-i,    D-2-ii", "A-4-iv, B-3-iii, C-2-ii,   D-1-i", "A-1-i,  B-2-ii,  C-4-iii,  D-3-iv"],
    correct: 0,
    explanation: "As per DA-101 notes: Primary tillage (deep breaking, mouldboard plough); Secondary tillage (seed bed prep); Puddling (paddy transplanting, cage wheel); Minimum tillage (reduce disturbance, strip till)."
  },
  {
    id: "d101x_091",
    subject: "da-101",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Match the sowing methods:
     Column-I (Method)           |  Column-II (Crop example)    |  Column-III (Advantage)
A.  Broadcasting                 |  1.  Rice, vegetables         |  i.   Maximum survival, easy gap filling
B.  Drilling                     |  2.  Wheat, sorghum           |  ii.  Uniform spacing, less seed
C.  Dibbling                     |  3.  Maize, cotton            |  iii. Easy to use, no spacing
D.  Transplanting                |  4.  All small grains         |  iv.  Uniform seed placement",
    options: ["A-1-i,   B-2-ii,  C-3-iii,  D-4-iv", "A-2-ii,  B-1-i,   C-4-iv,   D-3-iii", "A-3-iii, B-4-iv,  C-2-ii,   D-1-i", "A-4-iv,  B-3-iii, C-1-i,    D-2-ii"],
    correct: 2,
    explanation: "As per DA-101 notes: Broadcasting (all small grains, easy no spacing); Drilling (wheat/sorghum, uniform placement); Dibbling (maize/cotton, uniform spacing); Transplanting (rice/vegetables, maximum survival)."
  },
  {
    id: "d101x_092",
    subject: "da-101",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Match the weed characteristics:
     Column-I (Weed type)        |  Column-II (Example)         |  Column-III (Family)
A.  Grassy weed                  |  1.  Cyperus rotundus         |  i.   Cyperaceae
B.  Sedge weed                   |  2.  Echinochloa colonum      |  ii.  Poaceae
C.  Broadleaf (dicot) weed       |  3.  Parthenium hysterophorus |  iii. Asteraceae
D.  Parasitic weed               |  4.  Striga asiatica          |  iv.  Orobanchaceae",
    options: ["A-4-iv, B-3-iii, C-2-ii,   D-1-i", "A-2-ii, B-1-i,   C-3-iii,  D-4-iv", "A-3-iii, B-4-iv, C-1-i,    D-2-ii", "A-1-i,  B-2-ii,  C-4-iv,   D-3-iii"],
    correct: 1,
    explanation: "As per DA-101 notes: Echinochloa colonum is a grassy weed (Poaceae); Cyperus rotundus is a sedge (Cyperaceae); Parthenium is a broadleaf weed (Asteraceae); Striga is a parasitic weed."
  },
  {
    id: "d101x_093",
    subject: "da-101",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Match the herbicide classifications:
     Column-I (Herbicide)        |  Column-II (Type)            |  Column-III (Selectivity)
A.  2,4-D                        |  1.  Non-selective             |  i.   Kills all vegetation
B.  Glyphosate                   |  2.  Selective broadleaf       |  ii.  Kills only broadleaf weeds
C.  Atrazine                     |  3.  Selective grass killer    |  iii. Kills grassy weeds in broadleaf crops
D.  Quizalofop                   |  4.  Selective pre-emergence   |  iv.  Used in maize",
    options: ["A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-4-iv, B-3-iii, C-2-ii,   D-1-i", "A-2-ii, B-1-i,   C-4-iv,   D-3-iii", "A-3-iii, B-4-iv, C-1-i,    D-2-ii"],
    correct: 2,
    explanation: "As per DA-101 notes: 2,4-D is selective broadleaf herbicide; Glyphosate is non-selective; Atrazine is selective pre-emergence (maize); Quizalofop is selective grass killer in broadleaf crops."
  },
  {
    id: "d101x_094",
    subject: "da-101",
    lecture: "lecture-11",
    lectureNo: 11,
    question: "Match the irrigation methods:
     Column-I (Method)           |  Column-II (Water efficiency)|  Column-III (Best suited for)
A.  Flood/Surface irrigation     |  1.  90-95%                   |  i.   Orchards, vegetables
B.  Furrow irrigation            |  2.  70-80%                   |  ii.  Row crops, vegetables
C.  Sprinkler irrigation         |  3.  60-70%                   |  iii. Sandy soils, undulating land
D.  Drip irrigation              |  4.  40-50%                   |  iv.  Flat land, heavy soils",
    options: ["A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-2-ii, B-1-i,   C-4-iv,   D-3-iii", "A-3-iii, B-4-iv, C-1-i,    D-2-ii", "A-4-iv, B-3-ii,  C-2-iii,  D-1-i"],
    correct: 3,
    explanation: "As per DA-101 notes: Flood/Surface irrigation has ~40-50% efficiency (flat land); Furrow ~60-70% (row crops); Sprinkler ~70-80% (undulating/sandy); Drip ~90-95% (orchards, vegetables)."
  },
  {
    id: "d101x_095",
    subject: "da-101",
    lecture: "lecture-17",
    lectureNo: 17,
    question: "Match the cropping systems:
     Column-I (System)           |  Column-II (Definition)      |  Column-III (Advantage)
A.  Monocropping                 |  1.  Two crops in same season |  i.   Maximises resources use
B.  Intercropping                |  2.  Single crop per year     |  ii.  Simple management
C.  Sequence cropping            |  3.  One crop after another   |  iii. Continuous land use
D.  Relay cropping               |  4.  2nd crop sown before 1st harvest |  iv. Time-saving, soil cover",
    options: ["A-4-iv, B-3-iii, C-2-ii,   D-1-i", "A-2-ii, B-1-i,   C-3-iii,  D-4-iv", "A-3-iii, B-4-iv, C-1-i,    D-2-ii", "A-1-i,  B-2-ii,  C-4-iv,   D-3-iii"],
    correct: 1,
    explanation: "As per DA-101 notes: Monocropping (single crop, simple management); Intercropping (two crops same season, maximises resources); Sequence cropping (one after another, continuous use); Relay cropping (2nd sown before 1st harvested)."
  },
  {
    id: "d101x_096",
    subject: "da-101",
    lecture: "lecture-18",
    lectureNo: 18,
    question: "Match the soil conservation measures:
     Column-I (Measure)          |  Column-II (Type)            |  Column-III (Controls)
A.  Contour bunding              |  1.  Biological measure       |  i.   Wind erosion
B.  Windbreaks/shelterbelts      |  2.  Agronomic measure        |  ii.  Water erosion (slopes)
C.  Cover cropping               |  3.  Engineering measure      |  iii. Both wind and water erosion
D.  Terrace farming              |  4.  Engineering measure      |  iv.  Steep slope water erosion",
    options: ["A-2-ii, B-3-i,   C-1-iii,  D-4-iv", "A-3-ii, B-1-i,   C-2-iii,  D-4-iv", "A-4-iv, B-1-i,   C-3-iii,  D-2-ii", "A-1-i,  B-2-ii,  C-3-iii,  D-4-iv"],
    correct: 1,
    explanation: "As per DA-101 notes: Contour bunding (engineering, water erosion on slopes); Windbreaks (biological, wind erosion); Cover cropping (agronomic, both erosion types); Terrace farming (engineering, steep slopes)."
  },
  {
    id: "d101x_097",
    subject: "da-101",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Match the biofertilisers:
     Column-I (Biofertiliser)    |  Column-II (Mode of action)  |  Column-III (Crop/Use)
A.  Rhizobium                    |  1.  Free-living N2 fixation  |  i.   Sugarcane, cereals
B.  Azotobacter                  |  2.  Symbiotic N2 fixation    |  ii.  Leguminous crops
C.  Azospirillum                 |  3.  Associative N2 fixation  |  iii. Sorghum, wheat, maize
D.  VAM (mycorrhiza)             |  4.  Phosphorus solubilisation |  iv.  Fruit crops, vegetables",
    options: ["A-2-ii, B-1-i,   C-3-iii,  D-4-iv", "A-3-iii, B-4-iv, C-1-i,    D-2-ii", "A-4-iv, B-3-iii, C-2-ii,   D-1-i", "A-1-i,  B-2-ii,  C-4-iii,  D-3-iv"],
    correct: 0,
    explanation: "As per DA-101 notes: Rhizobium (symbiotic N2 fixation in legumes); Azotobacter (free-living N2 fixation, sugarcane/cereals); Azospirillum (associative fixation, cereals); VAM (phosphorus enhancement, fruit crops)."
  },
  {
    id: "d101x_098",
    subject: "da-101",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Match PJTSAU Research Stations with their major crops:
     Column-I (Station)          |  Column-II (Location)        |  Column-III (Major Crop)
A.  RARS Polasa                  |  1.  Warangal                 |  i.   Rice, Pulses, Cotton
B.  RARS Warangal                |  2.  Jagtial                  |  ii.  Rice, Sesame
C.  RARS Palem                   |  3.  Palem, Nalgonda          |  iii. Sorghum, Bajra, Castor
D.  ARI Rajendranagar            |  4.  Hyderabad                |  iv.  Rice, Organic farming",
    options: ["A-2-ii, B-1-i,   C-3-iii,  D-4-iv", "A-4-iv, B-3-iii, C-1-i,    D-2-ii", "A-1-i,  B-2-ii,  C-4-iv,   D-3-iii", "A-3-iii, B-4-iv, C-2-ii,   D-1-i"],
    correct: 0,
    explanation: "As per DA-101 notes: RARS Polasa-Jagtial (Rice, Sesame); RARS Warangal (Rice, Pulses, Cotton); RARS Palem (Sorghum, Bajra, Castor); ARI Rajendranagar-Hyderabad (Rice, Organic farming)."
  },
  {
    id: "d101x_099",
    subject: "da-101",
    lecture: "lecture-13",
    lectureNo: 13,
    question: "Match the post-harvest operations:
     Column-I (Operation)        |  Column-II (Definition)      |  Column-III (Equipment)
A.  Harvesting                   |  1.  Separating grain from chaff |  i.  Winnowing fan
B.  Threshing                    |  2.  Cutting crop at maturity   |  ii. Sickle or combine
C.  Winnowing                    |  3.  Separating grain from stem |  iii. Thresher
D.  Drying                       |  4.  Reducing moisture content  |  iv.  Sun drying floor",
    options: ["A-2-ii, B-3-iii, C-1-i,   D-4-iv", "A-4-iv, B-1-i,   C-2-ii,   D-3-iii", "A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-3-iii, B-4-iv, C-2-ii,   D-1-i"],
    correct: 0,
    explanation: "As per DA-101 notes: Harvesting (cutting at maturity, sickle/combine); Threshing (separating grain from stem, thresher); Winnowing (separating grain from chaff, winnowing fan); Drying (reducing moisture, sun drying)."
  },
  {
    id: "d101x_100",
    subject: "da-101",
    lecture: "lecture-20",
    lectureNo: 20,
    question: "Match the organic farming components:
     Column-I (Component)        |  Column-II (Material/Method) |  Column-III (Benefit)
A.  Vermicompost                 |  1.  Trichoderma viride       |  i.   Disease control
B.  Biopesticide                 |  2.  Earthworm-processed waste|  ii.  Improves soil structure
C.  Green manure                 |  3.  Sesbania, Crotalaria     |  iii. Nitrogen enrichment
D.  Compost                      |  4.  FYM + crop residue       |  iv.  Recycles waste nutrients",
    options: ["A-2-ii, B-1-i,   C-3-iii,  D-4-iv", "A-3-iii, B-4-iv, C-1-i,    D-2-ii", "A-4-iv, B-3-iii, C-2-ii,   D-1-i", "A-1-i,  B-2-ii,  C-4-iii,  D-3-iv"],
    correct: 0,
    explanation: "As per DA-101 notes: Vermicompost (earthworm-processed, improves structure); Biopesticide (Trichoderma, disease control); Green manure (Sesbania/Crotalaria, N enrichment); Compost (FYM+residue, recycles nutrients)."
  },

];
