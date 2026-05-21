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
    options: ["Agros (soil) and Nomos (law)", "Agri (land) and Cultura (science)", "Ager (field) and Cultura (cultivation)", "Ager (crop) and Cultura (growth)"],
    correct: 2,
    explanation: "Agriculture is derived from Latin 'Ager/Agri' meaning field/land and 'Cultura' meaning cultivation or tillage."
  },
  {
    id: "d101l_002",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The term 'Agronomy' is derived from Greek words 'Agros' and 'Nomos'. 'Nomos' means:",
    options: ["Field", "To grow", "To manage", "Soil"],
    correct: 2,
    explanation: "'Agros' means field and 'Nomos' means to manage. So Agronomy means the science of managing fields."
  },
  {
    id: "d101l_003",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Who is known as the 'Father of Agronomy'?",
    options: ["Norman Borlaug", "M.S. Swaminathan", "Pietro de'Crescenzi", "Justus von Liebig"],
    correct: 2,
    explanation: "Pietro de'Crescenzi of Italy (1230–1320 AD) is regarded as the Father of Agronomy for his systematic work on crop production."
  },
  {
    id: "d101l_004",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Who is called the 'Father of Green Revolution in India'?",
    options: ["B.P. Pal", "C. Subramaniam", "Norman Borlaug", "M.S. Swaminathan"],
    correct: 3,
    explanation: "Dr. M.S. Swaminathan is called the Father of Green Revolution in India for his role in introducing high-yielding wheat varieties."
  },
  {
    id: "d101l_005",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "ICAR stands for:",
    options: ["Indian Centre for Agronomy Research", "International Centre for Agriculture and Research", "Integrated Council for Agricultural Resources", "Indian Council of Agricultural Research"],
    correct: 3,
    explanation: "ICAR stands for Indian Council of Agricultural Research, headquartered at New Delhi. It coordinates agricultural research in India."
  },
  {
    id: "d101l_006",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "PJTSAU stands for:",
    options: ["Pradhan Janpada Telangana State Agricultural University", "Pandit Jawaharlal Telangana State Agricultural University", "Professor Jayashankar Telangana State Agricultural University", "Punjab Jawaharlal Technological & Sciences Agricultural University"],
    correct: 2,
    explanation: "PJTSAU stands for Professor Jayashankar Telangana State Agricultural University, located in Hyderabad, Telangana."
  },
  {
    id: "d101l_007",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "ICRISAT is located at:",
    options: ["Patancheru, Hyderabad, India", "Nairobi, Kenya", "Rome, Italy", "Washington DC, USA"],
    correct: 0,
    explanation: "ICRISAT (International Crops Research Institute for the Semi-Arid Tropics) is located at Patancheru near Hyderabad, India."
  },
  {
    id: "d101l_008",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The Central Rice Research Institute (CRRI) is located at:",
    options: ["Cuttack", "Hyderabad", "Karnal", "Coimbatore"],
    correct: 0,
    explanation: "CRRI is located at Cuttack, Odisha. It conducts research on rice improvement and production technologies."
  },
  {
    id: "d101l_009",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Which branch of agriculture deals with the study of crop production and soil management?",
    options: ["Horticulture", "Floriculture", "Agronomy", "Silviculture"],
    correct: 2,
    explanation: "Agronomy is the branch of agriculture that deals with the theory and practice of crop production and soil management."
  },
  {
    id: "d101l_010",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The study of fruits and vegetables as crops is called:",
    options: ["Horticulture", "Olericulture", "Agronomy", "Pomology"],
    correct: 0,
    explanation: "Horticulture includes the study of fruits (Pomology), vegetables (Olericulture), flowers (Floriculture), and ornamental plants."
  },
  {
    id: "d101l_011",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Who is called the 'Father of Indian Agriculture'?",
    options: ["M.S. Swaminathan", "Norman Borlaug", "B.P. Pal", "N.G. Ranga"],
    correct: 0,
    explanation: "Dr. M.S. Swaminathan is widely called the Father of Indian Agriculture due to his transformative contributions to Indian farming."
  },
  {
    id: "d101l_012",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "National Academy of Agricultural Sciences (NAAS) is located at:",
    options: ["Pune", "New Delhi", "Hyderabad", "Bangalore"],
    correct: 1,
    explanation: "NAAS is located at New Delhi and recognizes eminent scientists who have made outstanding contributions to agricultural sciences."
  },
  {
    id: "d101l_013",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The branch of agriculture dealing with the management of forests is called:",
    options: ["Silviculture", "Agronomy", "Horticulture", "Olericulture"],
    correct: 0,
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
    options: ["Karnal, Haryana", "Nagpur, Maharashtra", "Hyderabad, Telangana", "Cuttack, Odisha"],
    correct: 2,
    explanation: "DRR (Directorate of Rice Research), now ICAR-Indian Institute of Rice Research (IIRR), is located at Rajendranagar, Hyderabad."
  },
  {
    id: "d101l_016",
    subject: "da-101",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Who is known as the 'Father of Soil Science'?",
    options: ["M.S. Swaminathan", "C.F. Marbut", "Justus von Liebig", "Dokuchaev"],
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
    options: ["1200–1400 mm", "500–600 mm", "700–800 mm", "900–1000 mm"],
    correct: 3,
    explanation: "Telangana receives an average annual rainfall of about 900–1000 mm, predominantly from the South-West monsoon."
  },
  {
    id: "d101l_019",
    subject: "da-101",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Which of the following is NOT one of the Agro-climatic zones of Telangana?",
    options: ["Northern Telangana Zone (NTZ)", "Southern Telangana Zone (STZ)", "Eastern Telangana Zone (ETZ)", "Central Telangana Zone (CTZ)"],
    correct: 2,
    explanation: "Telangana has four agro-climatic zones: NTZ, CTZ, STZ, and High Altitude zone. There is no Eastern Telangana Zone (ETZ)."
  },
  {
    id: "d101l_020",
    subject: "da-101",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The Northern Telangana Zone (NTZ) includes which of the following districts?",
    options: ["Rangareddy, Mahbubnagar", "Khammam, Bhadradri", "Nizamabad, Karimnagar, Adilabad", "Nalgonda, Suryapet"],
    correct: 2,
    explanation: "NTZ includes Nizamabad, Karimnagar (Rajanna Sircilla), Jagitial, Peddapalli, Mancherial, Nirmal, Adilabad, Kumuram Bheem, and Asifabad districts."
  },
  {
    id: "d101l_021",
    subject: "da-101",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The difference between weather and climate is:",
    options: ["Weather is the atmospheric condition at a place for a short period; climate is the average over 30+ years", "Climate refers to rainfall only; weather refers to temperature only", "Weather and climate are the same", "Weather deals with long-term atmospheric conditions; climate is short-term"],
    correct: 0,
    explanation: "Weather refers to the atmospheric conditions at a particular place for a short period (daily/weekly), whereas climate is the average weather conditions of a place over a long period (30+ years)."
  },
  {
    id: "d101l_022",
    subject: "da-101",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Kharif season in Telangana corresponds to:",
    options: ["June to September", "November to February", "March to May", "October to March"],
    correct: 0,
    explanation: "Kharif (summer/rainy) season corresponds to June–September (SW monsoon). Crops are sown with onset of monsoon and harvested after monsoon."
  },
  {
    id: "d101l_023",
    subject: "da-101",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Rabi season crops are sown in:",
    options: ["February–March", "June–July", "September–November", "April–May"],
    correct: 2,
    explanation: "Rabi crops are sown in October–November after the monsoon recedes and are harvested in February–March."
  },
  {
    id: "d101l_024",
    subject: "da-101",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The instrument used to measure rainfall is:",
    options: ["Thermometer", "Barometer", "Hygrometer", "Rain gauge"],
    correct: 3,
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
    options: ["Southern Telangana Zone", "High Altitude Zone", "Central Telangana Zone", "Northern Telangana Zone"],
    correct: 2,
    explanation: "The Central Telangana Zone (CTZ) is characterized by deep black cotton (vertisol) soils and moderate to good rainfall."
  },
  {
    id: "d101l_027",
    subject: "da-101",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The Zaid season (summer season) extends from:",
    options: ["June to September", "January to February", "October to November", "March to June"],
    correct: 3,
    explanation: "Zaid or summer season extends from March to June. Short-duration crops like watermelon, cucumbers, and some vegetables are grown."
  },
  {
    id: "d101l_028",
    subject: "da-101",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "An agro-climatic zone is defined on the basis of:",
    options: ["Rainfall alone", "Homogeneity in rainfall, temperature, soil type, and cropping pattern", "Soil texture alone", "Temperature alone"],
    correct: 1,
    explanation: "An agro-climatic zone is a relatively homogeneous land unit in terms of climate, soil, hydrology, and cropping pattern."
  },
  {
    id: "d101l_029",
    subject: "da-101",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The instrument used to measure atmospheric humidity is:",
    options: ["Hygrometer", "Thermometer", "Barometer", "Anemometer"],
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
    options: ["Hygrometer", "Wind vane", "Anemometer", "Barometer"],
    correct: 2,
    explanation: "An anemometer measures wind speed. A wind vane measures wind direction."
  },
  {
    id: "d101l_032",
    subject: "da-101",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The phenomenon of 'El Niño' is associated with:",
    options: ["Increased Rabi crop production", "Excess monsoon rainfall in India", "High temperatures in winter", "Deficit monsoon rainfall in India"],
    correct: 3,
    explanation: "El Niño (warming of Pacific Ocean waters) is often associated with weak or deficit South-West monsoon rainfall in India."
  },
  {
    id: "d101l_033",
    subject: "da-101",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The Southern Telangana Zone (STZ) covers which type of soil predominantly?",
    options: ["Red sandy soils and shallow red soils", "Laterite soils", "Deep black cotton soils", "Sandy loam soils"],
    correct: 0,
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
    options: ["Mechanical manipulation of soil for crop production", "Irrigation of soil before sowing", "Removal of weeds from the field", "Application of fertilizers to soil"],
    correct: 0,
    explanation: "Tillage is the mechanical manipulation of soil to create favorable conditions for seed germination, plant growth, and crop production."
  },
  {
    id: "d101l_035",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Primary tillage is done to:",
    options: ["Break the soil to full depth for first working", "Kill weeds between rows", "Prepare a fine seedbed", "Apply fertilizers into the soil"],
    correct: 0,
    explanation: "Primary tillage is the initial soil working operation that breaks and loosens soil to depth, incorporating crop residues and preparing for secondary tillage."
  },
  {
    id: "d101l_036",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Which implement is used for primary tillage?",
    options: ["Mould board plough", "Rotavator", "Cultivator", "Disc harrow"],
    correct: 0,
    explanation: "Mould board plough is used for primary tillage (deep ploughing). It inverts the soil and buries crop residues."
  },
  {
    id: "d101l_037",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Zero tillage means:",
    options: ["Ploughing the soil twice before sowing", "Sowing without any prior soil disturbance", "Subsoiling at 60 cm depth", "Applying herbicides before ploughing"],
    correct: 1,
    explanation: "Zero tillage (no-till farming) involves sowing seeds directly into undisturbed soil without prior ploughing, using a zero-till seed drill."
  },
  {
    id: "d101l_038",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Which of the following is a benefit of zero tillage?",
    options: ["Better weed control by soil inversion", "Incorporation of green manures", "Conservation of soil moisture and reduced erosion", "Deeper root penetration"],
    correct: 2,
    explanation: "Zero tillage conserves soil moisture, reduces wind and water erosion, saves fuel and time, and improves soil organic matter over time."
  },
  {
    id: "d101l_039",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Minimum tillage aims to:",
    options: ["Eliminate all organic matter in soil", "Maximize soil disturbance for best seedbed", "Increase the depth of ploughing", "Reduce the number of tillage operations while maintaining yields"],
    correct: 3,
    explanation: "Minimum tillage reduces tillage operations to a minimum necessary for crop establishment, saving energy, labor, and reducing erosion."
  },
  {
    id: "d101l_040",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "A hard layer formed below the plough depth due to repeated tillage at the same depth is called:",
    options: ["Subsoil layer", "Clay pan", "Surface crust", "Plough sole / Hardpan"],
    correct: 3,
    explanation: "Plough sole or hardpan is a compacted layer formed just below the tillage depth due to repeated ploughing at the same depth, impeding water and root movement."
  },
  {
    id: "d101l_041",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The soil textural class with approximately equal proportions of sand, silt, and clay is:",
    options: ["Silt loam", "Clay loam", "Loam", "Sandy loam"],
    correct: 2,
    explanation: "Loam is the ideal soil textural class with roughly balanced proportions of sand, silt, and clay, offering good drainage and nutrient retention."
  },
  {
    id: "d101l_042",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Which soil is commonly called 'black cotton soil' in Telangana?",
    options: ["Vertisol", "Alfisol", "Inceptisol", "Entisol"],
    correct: 0,
    explanation: "Vertisols are the black cotton soils of Telangana. They are characterized by high clay content (smectite), deep cracks when dry, and high water-holding capacity."
  },
  {
    id: "d101l_043",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Conservation tillage is defined as any tillage system that:",
    options: ["Uses the maximum number of tillage passes", "Leaves at least 30% of crop residue on the soil surface", "Is performed only during drought conditions", "Inverts the soil completely with each pass"],
    correct: 1,
    explanation: "Conservation tillage is any tillage system that leaves at least 30% of the soil surface covered with crop residues to reduce erosion."
  },
  {
    id: "d101l_044",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Deep ploughing (subsoiling) is recommended for:",
    options: ["Preparing a fine seedbed for small seeds", "Incorporating surface-applied fertilizers", "Breaking the hardpan and improving root penetration", "Controlling weeds between rows"],
    correct: 2,
    explanation: "Subsoiling breaks the hardpan below tillage depth, improving root penetration, water infiltration, and drainage in compact soils."
  },
  {
    id: "d101l_045",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Puddling of soil is commonly practiced for:",
    options: ["Irrigated groundnut", "Sugarcane ratoon", "Dryland wheat", "Transplanted rice"],
    correct: 3,
    explanation: "Puddling is the wet tillage of saturated soil to destroy soil structure and reduce percolation losses. It is essential for transplanted rice to maintain standing water."
  },
  {
    id: "d101l_046",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The rotavator is used mainly for:",
    options: ["Secondary tillage – fine seedbed preparation", "Primary deep tillage", "Harvesting operations", "Weed chemical application"],
    correct: 0,
    explanation: "The rotavator (rotary tiller) is used for secondary tillage to break clods and prepare a fine, firm seedbed, especially in hard soils."
  },
  {
    id: "d101l_047",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Bulk density of soil is defined as:",
    options: ["Weight of oven-dry soil per unit bulk volume (including pore space)", "Weight of soil per unit volume of solids only", "Ratio of solid particles to water in soil", "Volume of pores per volume of soil"],
    correct: 0,
    explanation: "Bulk density = mass of oven-dry soil / total volume (solids + pores). Higher bulk density indicates more compaction and less pore space."
  },
  {
    id: "d101l_048",
    subject: "da-101",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The optimum bulk density range for most crop soils is:",
    options: ["1.6–1.8 g/cc", "2.0–2.2 g/cc", "1.1–1.3 g/cc", "0.5–0.8 g/cc"],
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
    options: ["Placed in rows at uniform depth", "Sown by transplanting from nursery", "Scattered uniformly over the entire field surface", "Placed individually in holes at specific intervals"],
    correct: 2,
    explanation: "Broadcasting involves scattering seeds uniformly over the entire field surface by hand or mechanically. It requires more seed and gives uneven distribution."
  },
  {
    id: "d101l_050",
    subject: "da-101",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The recommended seed rate for rice (transplanting method) per acre is:",
    options: ["30–36 kg/acre", "50–60 kg/acre", "20–25 kg/acre", "5–6 kg/acre"],
    correct: 2,
    explanation: "For transplanted rice, 20–25 kg seed/acre is needed for nursery preparation to transplant one acre of main field."
  },
  {
    id: "d101l_051",
    subject: "da-101",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Dibbling is a method of sowing where:",
    options: ["Seeds are sown in continuous furrows", "Seeds are placed individually in small holes made at specific intervals", "Seeds are mixed with sand and broadcast", "Seeds are dropped from a moving machine randomly"],
    correct: 1,
    explanation: "Dibbling is placing one or more seeds individually in holes (dibbles) made at specific intervals in rows, ensuring precise plant population."
  },
  {
    id: "d101l_052",
    subject: "da-101",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The seed rate for maize (hybrid) per acre is approximately:",
    options: ["8–10 kg/acre", "2–3 kg/acre", "25–30 kg/acre", "18–20 kg/acre"],
    correct: 0,
    explanation: "Hybrid maize requires about 8–10 kg seed per acre to achieve the recommended plant population of 33,000–37,000 plants/acre."
  },
  {
    id: "d101l_053",
    subject: "da-101",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The recommended seed rate for wheat per acre is:",
    options: ["60–70 kg/acre", "10–15 kg/acre", "80–100 kg/acre", "35–40 kg/acre"],
    correct: 3,
    explanation: "Wheat requires 35–40 kg seed per acre (87–100 kg/ha) for optimal plant stands with broadcasting or drilling method."
  },
  {
    id: "d101l_054",
    subject: "da-101",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The method of sowing best suited for paddy (rice) in SRI is:",
    options: ["Direct seeding by drill", "Broadcasting", "Transplanting young single seedlings (8–12 days old)", "Dibbling"],
    correct: 2,
    explanation: "SRI (System of Rice Intensification) uses very young seedlings (8–12 days old, single seedling per hill) transplanted at wider spacing of 25×25 cm."
  },
  {
    id: "d101l_055",
    subject: "da-101",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Optimum seed sowing depth for cotton is:",
    options: ["5–7 cm", "3–4 cm", "0.5–1.0 cm", "1–2 cm"],
    correct: 1,
    explanation: "Cotton seeds are sown at 3–4 cm depth to ensure adequate moisture contact and good germination."
  },
  {
    id: "d101l_056",
    subject: "da-101",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Which of the following sowing methods saves maximum seed?",
    options: ["Broadcasting", "Transplanting", "Drilling", "Dibbling"],
    correct: 3,
    explanation: "Dibbling uses the least seed since individual seeds or small groups are placed at exact spots, eliminating wastage from over-seeding."
  },
  {
    id: "d101l_057",
    subject: "da-101",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Seed treatment with thiram or captan is done to protect seeds from:",
    options: ["Nematodes", "Poor germination due to cold", "Insect pests during germination", "Soil-borne fungal diseases"],
    correct: 3,
    explanation: "Thiram and captan are fungicides used as seed treatment to protect seeds and seedlings from soil-borne fungal pathogens like damping off."
  },
  {
    id: "d101l_058",
    subject: "da-101",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The seed rate for groundnut (pods) per acre is approximately:",
    options: ["5–8 kg/acre", "50–60 kg/acre", "80–100 kg/acre", "20–30 kg/acre"],
    correct: 1,
    explanation: "Groundnut requires about 50–60 kg of pods (or 40–45 kg kernels) per acre depending on variety (bunch or spreading)."
  },
  {
    id: "d101l_059",
    subject: "da-101",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Which sowing method is most suitable for small-seeded crops like sorghum and pearl millet?",
    options: ["Random broadcasting followed by harrowing", "Drilling in rows", "Transplanting", "Dibbling"],
    correct: 1,
    explanation: "Drilling in rows using a seed drill ensures proper depth, spacing, and seed rate for small-seeded crops like sorghum and pearl millet."
  },
  {
    id: "d101l_060",
    subject: "da-101",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The recommended seed depth for small-seeded legumes like blackgram is:",
    options: ["2–3 cm", "5–6 cm", "8–10 cm", "0.5–1 cm"],
    correct: 0,
    explanation: "Small-seeded legumes like blackgram and greengram are sown at 2–3 cm depth to ensure good emergence without excessive energy expenditure."
  },
  {
    id: "d101l_061",
    subject: "da-101",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Relay sowing involves:",
    options: ["Sowing a second crop before the first crop is harvested", "Sowing two crops simultaneously in alternate rows", "Sowing the same crop in a field twice a year", "Transplanting seedlings from nursery into the main field"],
    correct: 0,
    explanation: "Relay sowing involves sowing a second crop into the standing first crop before it is harvested, to save time and utilize residual soil moisture."
  },
  {
    id: "d101l_062",
    subject: "da-101",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The seed rate for cotton (Bt hybrid) per acre is approximately:",
    options: ["50 g/acre", "1 packet (450 g)", "15–20 kg/acre", "5–6 kg/acre"],
    correct: 1,
    explanation: "Bt cotton hybrid seeds are sold in packets of 450 g (one packet per acre), sufficient for the recommended plant population."
  },
  {
    id: "d101l_063",
    subject: "da-101",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Optimum plant population for transplanted rice per hectare is approximately:",
    options: ["5,00,000 hills/ha", "50,000 hills/ha", "2,00,000 hills/ha (at 20×25 cm spacing)", "1,00,000 hills/ha"],
    correct: 2,
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
    options: ["20", "17", "12", "14"],
    correct: 1,
    explanation: "There are 17 essential plant nutrients: C, H, O (from air/water) + N, P, K, Ca, Mg, S (macronutrients) + Fe, Mn, Zn, Cu, B, Mo, Cl, Ni (micronutrients)."
  },
  {
    id: "d101l_065",
    subject: "da-101",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The 'Law of Minimum' was given by:",
    options: ["Justus von Liebig", "C.G. Hopkins", "Blackman", "J.B. Lawes"],
    correct: 0,
    explanation: "Justus von Liebig proposed the Law of Minimum – crop growth is limited by the nutrient in shortest supply relative to crop requirement."
  },
  {
    id: "d101l_066",
    subject: "da-101",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Basal application of fertilizer means:",
    options: ["Application of fertilizer at sowing/planting time in the root zone", "Application of fertilizers through irrigation water", "Foliar spray of nutrients on leaves", "Application of fertilizer after crop establishment"],
    correct: 0,
    explanation: "Basal application involves incorporating fertilizer into the soil at the time of sowing or planting, usually as a band or broadcast before tillage."
  },
  {
    id: "d101l_067",
    subject: "da-101",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Top dressing of fertilizer refers to:",
    options: ["Foliar application of micronutrients", "Applying fertilizer at the time of last ploughing", "Deep placement of phosphate fertilizers", "Applying nitrogen fertilizer to standing crops after establishment"],
    correct: 3,
    explanation: "Top dressing is applying fertilizers (mainly N) to standing crops after establishment (e.g., at tillering, jointing stage) to support vegetative growth."
  },
  {
    id: "d101l_068",
    subject: "da-101",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Fertigation is the practice of:",
    options: ["Dissolving and applying fertilizers through irrigation water (drip/sprinkler)", "Applying fertilizers deep into soil using injection machines", "Broadcasting fertilizers before monsoon rains", "Burning crop residue to release nutrients"],
    correct: 0,
    explanation: "Fertigation is applying water-soluble fertilizers through the irrigation system (drip/sprinkler), ensuring uniform distribution and high efficiency."
  },
  {
    id: "d101l_069",
    subject: "da-101",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Which macronutrient is responsible for nodule formation and biological nitrogen fixation in legumes?",
    options: ["Molybdenum", "Phosphorus", "Potassium", "Calcium"],
    correct: 1,
    explanation: "Phosphorus is critical for nodule development and function in legumes. Mo is an essential micronutrient for nitrogenase enzyme, but P is the key macronutrient."
  },
  {
    id: "d101l_070",
    subject: "da-101",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The recommended NPK dose for irrigated rice in Telangana (per acre) is approximately:",
    options: ["10:5:5 kg/acre", "40:20:20 kg/acre", "60:30:30 kg/acre", "20:10:10 kg/acre"],
    correct: 1,
    explanation: "Irrigated rice in Telangana requires approximately 40:20:20 kg N:P₂O₅:K₂O per acre (100:50:50 kg/ha)."
  },
  {
    id: "d101l_071",
    subject: "da-101",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Foliar spray of nutrients is most effective for:",
    options: ["Micronutrients like Zn, Fe, B, Mn", "Biofertilizers", "Organic manures", "Major nutrients like N, P, K"],
    correct: 0,
    explanation: "Foliar sprays are most effective for micronutrient deficiencies (Zn, Fe, Mn, B) because small quantities are needed and leaf absorption is efficient."
  },
  {
    id: "d101l_072",
    subject: "da-101",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Split application of nitrogen fertilizer is recommended because:",
    options: ["It minimizes leaching losses and improves nitrogen use efficiency", "Urea is not stable and must be applied at once", "It reduces cost of fertilizer purchase", "It saves labor by reducing number of operations"],
    correct: 0,
    explanation: "Split N application reduces leaching and volatilization losses, improves NUE, and matches nitrogen supply with crop demand at critical growth stages."
  },
  {
    id: "d101l_073",
    subject: "da-101",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Nitrogen percentage in urea is:",
    options: ["34%", "46%", "21%", "16%"],
    correct: 1,
    explanation: "Urea (CO(NH₂)₂) contains 46% nitrogen, making it the most concentrated solid nitrogenous fertilizer."
  },
  {
    id: "d101l_074",
    subject: "da-101",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Which nutrient deficiency causes yellowing of older (lower) leaves first?",
    options: ["Calcium deficiency", "Iron deficiency", "Zinc deficiency", "Nitrogen deficiency"],
    correct: 3,
    explanation: "Nitrogen is mobile in plants. Its deficiency shows first on older lower leaves as yellowing (chlorosis) progressing upward."
  },
  {
    id: "d101l_075",
    subject: "da-101",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The nutrient responsible for energy transfer in plants (ATP) and stored as phytin in seeds is:",
    options: ["Nitrogen", "Phosphorus", "Sulfur", "Potassium"],
    correct: 1,
    explanation: "Phosphorus is the key component of ATP (adenosine triphosphate), the primary energy currency of cells, and is stored as phytin in seeds."
  },
  {
    id: "d101l_076",
    subject: "da-101",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "DAP (Di-Ammonium Phosphate) contains nitrogen and phosphorus in approximately:",
    options: ["18% N and 46% P₂O₅", "46% N and 0% P₂O₅", "12% N and 32% P₂O₅", "20% N and 20% P₂O₅"],
    correct: 0,
    explanation: "DAP contains 18% N and 46% P₂O₅, making it the most concentrated phosphatic fertilizer with substantial nitrogen content."
  },
  {
    id: "d101l_077",
    subject: "da-101",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Potassium helps in which of the following functions in plants?",
    options: ["Stomatal regulation and drought tolerance", "Protein synthesis only", "Chlorophyll formation", "Cell division in shoot tips"],
    correct: 0,
    explanation: "Potassium regulates stomatal opening/closing, improves water-use efficiency, enhances drought tolerance, and strengthens cell walls."
  },
  {
    id: "d101l_078",
    subject: "da-101",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Which of the following is a slow-release nitrogen fertilizer?",
    options: ["Neem-coated urea", "Ammonium sulphate", "Calcium ammonium nitrate (CAN)", "Urea"],
    correct: 0,
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
    options: ["A plant growing where it is not wanted and causing economic loss", "Any plant growing in wasteland", "A parasitic plant only", "Any plant that is poisonous to livestock"],
    correct: 0,
    explanation: "A weed is a plant growing where it is not wanted or desired, competing with crops and causing economic loss in yield."
  },
  {
    id: "d101l_080",
    subject: "da-101",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "The critical period of weed competition in most crops is:",
    options: ["During crop flowering", "At harvest time", "At seed filling stage", "First 2–6 weeks after crop emergence"],
    correct: 3,
    explanation: "The critical period of weed competition is the first 2–6 weeks after crop emergence when weeds cause maximum yield loss if not controlled."
  },
  {
    id: "d101l_081",
    subject: "da-101",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Parthenium (congress grass) is classified as:",
    options: ["Broadleaf weed (dicot)", "Sedge weed", "Grass weed", "Aquatic weed"],
    correct: 0,
    explanation: "Parthenium hysterophorus (congress grass / carrot grass) is a broadleaf (dicot) weed that causes allergic reactions in humans."
  },
  {
    id: "d101l_082",
    subject: "da-101",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Which of the following herbicides is used as a pre-emergence herbicide in rice?",
    options: ["2,4-D", "Atrazine", "Butachlor", "Glyphosate"],
    correct: 2,
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
    options: ["Selective broadleaf herbicide", "Non-selective, post-emergence, systemic herbicide", "Selective pre-emergence grass herbicide", "Contact herbicide for sedges"],
    correct: 1,
    explanation: "Glyphosate is a non-selective, systemic, post-emergence herbicide that kills all actively growing plants by inhibiting the EPSPS enzyme."
  },
  {
    id: "d101l_085",
    subject: "da-101",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Cyperus rotundus (purple nutsedge / nutgrass) belongs to which weed category?",
    options: ["Broadleaf weeds", "Grass weeds", "Sedge weeds", "Aquatic weeds"],
    correct: 2,
    explanation: "Cyperus rotundus (nutgrass / motha) is the most problematic sedge weed, belonging to family Cyperaceae. It is very difficult to control due to tubers."
  },
  {
    id: "d101l_086",
    subject: "da-101",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "The Weed Index (WI) measures:",
    options: ["The percentage yield loss caused by weeds", "The economic threshold of weeds", "The number of weed species in a field", "The number of herbicide applications required"],
    correct: 0,
    explanation: "Weed Index = [(Yield in weed-free − Yield in weedy plot) / Yield in weed-free] × 100. It measures % yield reduction due to weed competition."
  },
  {
    id: "d101l_087",
    subject: "da-101",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Atrazine is a selective herbicide commonly used in:",
    options: ["Rice", "Sugarcane only", "Maize (corn)", "Wheat"],
    correct: 2,
    explanation: "Atrazine is a triazine herbicide used as pre-emergence/early post-emergence in maize for controlling broadleaf and grass weeds."
  },
  {
    id: "d101l_088",
    subject: "da-101",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Allelopathy in weed management refers to:",
    options: ["Chemical toxicity of herbicides to weeds", "Mechanical removal of weeds by hand", "Release of chemical substances by one plant that inhibit growth of another", "Biological control using insects"],
    correct: 2,
    explanation: "Allelopathy is the phenomenon where a plant releases chemical compounds (allelochemicals) that inhibit germination or growth of neighboring plants/weeds."
  },
  {
    id: "d101l_089",
    subject: "da-101",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Pendimethalin is used as a:",
    options: ["Systemic grass herbicide", "Non-selective total herbicide", "Pre-plant incorporated or pre-emergence herbicide", "Post-emergence broadleaf herbicide"],
    correct: 2,
    explanation: "Pendimethalin is a pre-emergence dinitroaniline herbicide applied before or at sowing to control annual grasses and broadleaf weeds in many crops."
  },
  {
    id: "d101l_090",
    subject: "da-101",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "The most problematic aquatic weed in rice paddies of Telangana is:",
    options: ["Ageratum conyzoides", "Cyperus difformis", "Parthenium", "Eichhornia crassipes (water hyacinth)"],
    correct: 1,
    explanation: "Cyperus difformis (flat sedge) and Echinochloa species are major paddy weeds, while Eichhornia clogs canals and reservoirs but Cyperus difformis is the key rice-paddy sedge."
  },
  {
    id: "d101l_091",
    subject: "da-101",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Hand weeding is most efficient when done at:",
    options: ["After weeds have set seed", "Pre-germination stage", "At crop maturity", "2–4 leaf stage of weeds"],
    correct: 3,
    explanation: "Hand weeding is most effective when weeds are at 2–4 leaf stage (young), before they establish deep roots or set seeds."
  },
  {
    id: "d101l_092",
    subject: "da-101",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Crop rotation helps in weed management because:",
    options: ["Same crop depletes weed seeds over seasons", "Rotation always involves fallow periods that kill all weeds", "Changing crops disrupts life cycle of weed species adapted to one crop", "Rotation reduces need for any fertilizer"],
    correct: 2,
    explanation: "Crop rotation disrupts the life cycle and adaptation of weed species specific to one crop, preventing build-up of any particular weed population."
  },
  {
    id: "d101l_093",
    subject: "da-101",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "A post-emergence herbicide is applied:",
    options: ["At the time of sowing along with seed", "After both crop and weed have emerged", "Before sowing", "After sowing but before crop emergence"],
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
    options: ["Cotton", "Groundnut", "Wheat", "Rice"],
    correct: 2,
    explanation: "IW:CPE (Irrigation Water to Cumulative Pan Evaporation) ratio of 0.75–1.0 is used for scheduling irrigations in wheat to maximize water use efficiency."
  },
  {
    id: "d101l_095",
    subject: "da-101",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Drip irrigation is most efficient because:",
    options: ["Water is sprayed over large area uniformly", "Water is applied directly to the root zone with minimal losses", "Water is flooded in the entire field", "It uses gravity flow without pumping"],
    correct: 1,
    explanation: "Drip irrigation delivers water slowly and directly to the plant root zone through emitters, minimizing evaporation and runoff losses. Efficiency is 85–95%."
  },
  {
    id: "d101l_096",
    subject: "da-101",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Water Use Efficiency (WUE) is expressed as:",
    options: ["Crop yield per unit of water applied/evapotranspired", "Total water applied divided by crop duration", "Crop yield per unit land area", "Water stored in soil profile"],
    correct: 0,
    explanation: "WUE = Crop yield / Water consumed (evapotranspiration). It indicates how efficiently a crop converts water into dry matter or grain."
  },
  {
    id: "d101l_097",
    subject: "da-101",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "The most critical stage for irrigation in rice is:",
    options: ["At harvest maturity", "At 10 days after transplanting", "Panicle initiation to grain filling stage", "At 30 days after transplanting"],
    correct: 2,
    explanation: "The most critical water requirement for rice is from panicle initiation through grain filling. Water stress at this stage causes spikelet sterility."
  },
  {
    id: "d101l_098",
    subject: "da-101",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Sprinkler irrigation is most suitable for:",
    options: ["Orchards with heavy clay soils", "Undulating terrain with sandy soils and field crops like wheat, groundnut", "Flooded paddy fields", "Deep-flooded sugarcane"],
    correct: 1,
    explanation: "Sprinkler irrigation is ideal for undulating terrain, sandy soils, and crops like wheat, groundnut, and vegetables. Efficiency is 70–80%."
  },
  {
    id: "d101l_099",
    subject: "da-101",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Irrigation efficiency of flood (surface) irrigation is approximately:",
    options: ["40–60%", "95–99%", "85–95%", "70–80%"],
    correct: 0,
    explanation: "Surface/flood irrigation has the lowest efficiency of 40–60% due to deep percolation, runoff, and evaporation losses."
  },
  {
    id: "d101l_100",
    subject: "da-101",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Waterlogging occurs when:",
    options: ["The water table rises and saturates the root zone, restricting oxygen supply", "Soil surface becomes extremely dry", "Rainfall exceeds crop water requirement", "Irrigation intervals are very long"],
    correct: 0,
    explanation: "Waterlogging occurs when the water table rises into the root zone, saturating soil and reducing oxygen availability, causing anaerobic conditions harmful to most crops."
  },
  {
    id: "d101l_101",
    subject: "da-101",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "The critical period of water requirement for groundnut is:",
    options: ["At 15 days after sowing", "At germination only", "At harvest maturity", "Pegging and pod development stages"],
    correct: 3,
    explanation: "For groundnut, the critical irrigation stages are pegging and pod development. Water stress at pegging reduces yield significantly."
  },
  {
    id: "d101l_102",
    subject: "da-101",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Which method of irrigation is recommended for sugarcane?",
    options: ["Pitcher irrigation", "Sub-surface drip only", "Overhead sprinkler only", "Border strip irrigation or furrow irrigation"],
    correct: 3,
    explanation: "Sugarcane is commonly irrigated by furrow irrigation (water flows in furrows between rows) or border strip irrigation, conserving water compared to flood irrigation."
  },
  {
    id: "d101l_103",
    subject: "da-101",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Sub-surface drainage is used to:",
    options: ["Prevent water from entering canals", "Bring water to the root zone from deep water table", "Increase soil moisture retention", "Remove excess water from within the root zone using buried pipes"],
    correct: 3,
    explanation: "Sub-surface drainage removes excess water from within the soil profile using perforated pipes or mole drains buried at depth, preventing waterlogging."
  },
  {
    id: "d101l_104",
    subject: "da-101",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Evapotranspiration (ET) is the sum of:",
    options: ["Rainfall + irrigation", "Canopy interception + deep percolation", "Evaporation from soil surface + transpiration from plants", "Runoff + percolation"],
    correct: 2,
    explanation: "Evapotranspiration (ET) = Evaporation (from soil and water surfaces) + Transpiration (from plant leaves). It represents total water loss from a cropped field."
  },
  {
    id: "d101l_105",
    subject: "da-101",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Micro-irrigation (drip and sprinkler) is promoted under which Government scheme in India?",
    options: ["PMFBY", "Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)", "RKVY", "MGNREGS"],
    correct: 1,
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
    options: ["More than 2000 mm", "Less than 750 mm with no assured irrigation", "Any rainfall with drip irrigation", "750–1500 mm with canal irrigation"],
    correct: 1,
    explanation: "Dryland farming is practiced in rainfed areas with annual rainfall below 750 mm (or up to 1150 mm in some definitions) where irrigation is not available."
  },
  {
    id: "d101l_107",
    subject: "da-101",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "CRIDA stands for:",
    options: ["Crop Research Institute for Dryland Areas", "Central Rice Institute for Dryland Agriculture", "Central Rainfall Institute for Dryland Agriculture", "Central Research Institute for Dryland Agriculture"],
    correct: 3,
    explanation: "CRIDA stands for Central Research Institute for Dryland Agriculture, located at Santoshnagar, Hyderabad, Telangana."
  },
  {
    id: "d101l_108",
    subject: "da-101",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "In-situ moisture conservation in dryland farming refers to:",
    options: ["Conserving rainfall where it falls in the field to maximize its use by the crop", "Spraying chemicals to reduce evaporation from soil", "Storing rainwater in tanks and using it for irrigation", "Using irrigation from nearby river sources"],
    correct: 0,
    explanation: "In-situ moisture conservation involves practices like tied ridges, broad-bed furrows, and mulching to conserve rainwater in the field where it falls."
  },
  {
    id: "d101l_109",
    subject: "da-101",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Broad Bed and Furrow (BBF) system is recommended for:",
    options: ["Dryland crops on Vertisols to manage excess moisture and drought", "Orchards for water harvesting", "Vegetable crops under protected cultivation", "Flooded rice cultivation"],
    correct: 0,
    explanation: "BBF is recommended for Vertisols (black cotton soils) in dryland areas to drain excess water during heavy rains while conserving moisture during dry spells."
  },
  {
    id: "d101l_110",
    subject: "da-101",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Contingency crop planning in dryland farming involves:",
    options: ["Growing high-water-requiring crops in drought years", "Using cloud seeding to ensure rainfall", "Selecting alternative short-duration, drought-tolerant crops if normal sowing fails", "Abandoning cultivation in drought years"],
    correct: 2,
    explanation: "Contingency planning involves selecting alternate drought-tolerant, short-duration crops (e.g., cowpea, horsegram, castor) when normal monsoon onset is delayed."
  },
  {
    id: "d101l_111",
    subject: "da-101",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Watershed management involves:",
    options: ["Diversion of water from one basin to another", "Integrated management of land, water, vegetation in a catchment area to optimize water use", "Irrigation of only the watershed area", "Management of water in reservoirs only"],
    correct: 1,
    explanation: "Watershed management is the process of guiding and organizing land use and other activities in a catchment area to provide desired goods and services without adversely affecting soil and water resources."
  },
  {
    id: "d101l_112",
    subject: "da-101",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Mulching in dryland farming helps to:",
    options: ["Reduce soil evaporation and conserve moisture", "Increase soil temperature uniformly", "Provide additional nitrogen to the crop", "Increase runoff and erosion"],
    correct: 0,
    explanation: "Mulching (covering soil with straw, polythene, or other materials) reduces evaporation from soil surface, conserves moisture, and suppresses weeds."
  },
  {
    id: "d101l_113",
    subject: "da-101",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The practice of collecting runoff water from a small area to irrigate a smaller crop area is called:",
    options: ["Lift irrigation", "Water harvesting", "Sub-surface drainage", "Drip irrigation"],
    correct: 1,
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
    options: ["Support creeper crops", "Mark boundaries of fields", "Prevent surface runoff by blocking furrows at regular intervals", "Guide irrigation water to crop rows"],
    correct: 2,
    explanation: "Tied ridges are formed by placing small earthen ties across furrows at regular intervals to impound rainwater in place and increase in-situ infiltration."
  },
  {
    id: "d101l_116",
    subject: "da-101",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "About what percentage of India's cultivated area is under dryland / rainfed farming?",
    options: ["20–25%", "60–65%", "40–45%", "80–85%"],
    correct: 1,
    explanation: "About 60–65% of India's net sown area (approximately 85 million ha) is under rainfed/dryland farming, which produces nearly 40% of total food grains."
  },
  {
    id: "d101l_117",
    subject: "da-101",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The recommended fertilizer dose for dryland crops is generally:",
    options: ["Zero because moisture is insufficient for nutrient uptake", "Lower than irrigated crops due to limited moisture", "Higher than irrigated crops", "Same as irrigated crops"],
    correct: 1,
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
    options: ["Has equal productivity to sole crops", "Is more productive than growing the crops separately in sole stands", "Has failed and one crop dominated the other", "Is less productive than sole crops"],
    correct: 1,
    explanation: "LER > 1 means intercropping is more efficient in using land resources than growing each crop as a sole crop. LER = 1 means no advantage; < 1 means disadvantage."
  },
  {
    id: "d101l_119",
    subject: "da-101",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Mixed cropping differs from intercropping in that:",
    options: ["Mixed cropping uses same row geometry as sole cropping", "Intercropping means growing crops in sequence, not simultaneously", "There is no difference between the two terms", "Mixed cropping is sowing two or more crops simultaneously without distinct row arrangement; intercropping has defined row patterns"],
    correct: 3,
    explanation: "Mixed cropping involves sowing two or more crops together without specific row arrangement. Intercropping has defined spatial arrangement (alternate rows, paired rows, etc.)."
  },
  {
    id: "d101l_120",
    subject: "da-101",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "A popular intercropping combination in Telangana for kharif season is:",
    options: ["Sunflower + Wheat", "Rice + Maize", "Wheat + Chickpea", "Cotton + Redgram (pigeonpea)"],
    correct: 3,
    explanation: "Cotton + Redgram (pigeonpea) is a common and productive intercropping system in Telangana, with pigeonpea in every 4th or 5th row of cotton."
  },
  {
    id: "d101l_121",
    subject: "da-101",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Relay cropping is defined as:",
    options: ["Growing two crops in alternate rows simultaneously throughout the season", "Sowing a second crop into a standing first crop before harvesting the first", "Mixed cropping with fixed row ratios", "Sequence of crops in a 3-year rotation plan"],
    correct: 1,
    explanation: "Relay cropping is sowing the second crop into the standing first crop before it is harvested, so both crops overlap for part of their life cycles."
  },
  {
    id: "d101l_122",
    subject: "da-101",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The main benefit of crop rotation with legumes is:",
    options: ["Reduction in water use", "Addition of nitrogen to soil through biological N fixation", "Control of all pest species", "Increase in soil phosphorus content"],
    correct: 1,
    explanation: "Legumes in rotation fix atmospheric nitrogen through Rhizobium symbiosis, reducing the nitrogen fertilizer requirement for the subsequent crop."
  },
  {
    id: "d101l_123",
    subject: "da-101",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The cropping intensity formula is:",
    options: ["Net sown area / Number of crops", "Total crops grown / Total land available", "Gross sown area × 100", "(Total area under all crops in a year / Net sown area) × 100"],
    correct: 3,
    explanation: "Cropping intensity = (Gross Cropped Area / Net Sown Area) × 100. If all land is double-cropped, intensity = 200%."
  },
  {
    id: "d101l_124",
    subject: "da-101",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Alley cropping (hedgerow intercropping) involves:",
    options: ["Growing food crops in alleys between rows of trees/shrubs", "Growing crops only in raised beds", "Relay cropping in alternate rows", "Sowing crops in contour furrows for erosion control"],
    correct: 0,
    explanation: "Alley cropping (hedgerow intercropping) grows food crops in the alleys between rows of woody trees/shrubs (like Leucaena, Sesbania) that provide mulch and nitrogen."
  },
  {
    id: "d101l_125",
    subject: "da-101",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The concept of 'companion crops' in intercropping refers to:",
    options: ["Crops grown together that complement each other by having different resource needs", "Two crops that compete intensely for the same resources", "Any two crops grown in sequence", "Only legume crops grown together"],
    correct: 0,
    explanation: "Companion crops are crops with complementary relationships, different rooting depths, canopy structures, or resource requirements that reduce competition and maximize land use."
  },
  {
    id: "d101l_126",
    subject: "da-101",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "A common crop rotation for Telangana vertisols (NTZ/CTZ) is:",
    options: ["Sugarcane → Paddy → Maize (3-year rotation)", "Groundnut → Cotton → Tobacco", "Cotton → Chickpea / Sorghum → Greengram", "Rice → Wheat → Chickpea"],
    correct: 2,
    explanation: "Cotton → Sorghum (or Chickpea in rabi) is a common rotation on vertisols of Telangana, breaking pest cycles and improving soil fertility."
  },
  {
    id: "d101l_127",
    subject: "da-101",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The advantage of sole cropping is:",
    options: ["Better pest control through diversity", "Simpler management and easier mechanization", "Higher LER than intercropping", "Better resource use efficiency"],
    correct: 1,
    explanation: "Sole cropping (growing one crop per field) is simpler to manage, allows full mechanization, and makes pest/disease management uniform and straightforward."
  },
  {
    id: "d101l_128",
    subject: "da-101",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Which of the following best represents a cereal + legume intercropping combination?",
    options: ["Maize + Sorghum", "Rice + Wheat", "Groundnut + Sunflower", "Sorghum + Redgram (pigeonpea)"],
    correct: 3,
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
    options: ["Grain yield / Total biological yield × 100", "Grain weight at harvest / 1000-grain weight", "Total biomass / Grain yield", "Number of grains per panicle / Total spikelets × 100"],
    correct: 0,
    explanation: "Harvest Index = (Economic yield / Biological yield) × 100. It indicates what fraction of total biomass is in the harvestable product (grain)."
  },
  {
    id: "d101l_130",
    subject: "da-101",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The Harvest Index of modern high-yielding rice varieties is approximately:",
    options: ["0.35–0.50", "0.2–0.3", "0.60–0.70", "0.80–0.90"],
    correct: 0,
    explanation: "Modern HYV rice has a Harvest Index of 0.35–0.50, compared to 0.20–0.30 for traditional tall varieties. This improved HI was key to Green Revolution gains."
  },
  {
    id: "d101l_131",
    subject: "da-101",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Physical maturity index for rice is:",
    options: ["When 50% of panicles have emerged", "When 80% of spikelets turn golden/straw colored", "When the flag leaf turns green", "When grain moisture reaches 25%"],
    correct: 1,
    explanation: "Rice is ready for harvest when 80–85% of spikelets turn golden/straw-colored, indicating physiological maturity and maximum grain dry weight."
  },
  {
    id: "d101l_132",
    subject: "da-101",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The safe moisture content for storage of grain cereals (rice, wheat) is:",
    options: ["14% or below", "30–35%", "20–25%", "8–10%"],
    correct: 0,
    explanation: "Cereal grains (rice, wheat, maize) should be stored at 14% moisture content or below to prevent fungal growth, mycotoxin development, and insect damage."
  },
  {
    id: "d101l_133",
    subject: "da-101",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Post-harvest losses in India are estimated at approximately:",
    options: ["2–5%", "50–60%", "30–40%", "10–15%"],
    correct: 3,
    explanation: "Post-harvest losses in India are estimated at 10–15% for cereals and up to 25–40% for fruits and vegetables, due to improper handling, storage, and processing."
  },
  {
    id: "d101l_134",
    subject: "da-101",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Threshing of rice is done when the grain moisture content is:",
    options: ["20–22%", "28–30%", "14–16%", "5–8%"],
    correct: 0,
    explanation: "Rice threshing is done when grain moisture is about 20–22%. If too dry, grains shatter; if too wet, threshing efficiency is poor and grains may be damaged."
  },
  {
    id: "d101l_135",
    subject: "da-101",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The black layer formation in maize grains indicates:",
    options: ["Poor kernel development", "Fungal infection", "Physiological maturity has been reached", "Onset of germination"],
    correct: 2,
    explanation: "The formation of a black layer (abscission layer) at the tip cap of maize kernels indicates physiological maturity – maximum dry matter accumulation."
  },
  {
    id: "d101l_136",
    subject: "da-101",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Combine harvester performs which of the following operations in one pass?",
    options: ["Ploughing, harrowing, and sowing", "Reaping, threshing, and winnowing", "Irrigation and fertilization", "Sowing and fertilizing"],
    correct: 1,
    explanation: "A combine harvester integrates reaping (cutting), threshing (separating grain from straw), and cleaning (winnowing) in one continuous field operation."
  },
  {
    id: "d101l_137",
    subject: "da-101",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Storage of food grains at village level in Telangana is traditionally done in:",
    options: ["Metal bins (PUSA bins)", "Mud bins / earthen structures (Pukka kothi)", "Bamboo baskets only", "Open gunny bags in fields"],
    correct: 1,
    explanation: "Traditional storage in Telangana uses earthen/mud bins (Kothi/Pukka Kothi). Scientific storage uses PUSA bins (metal) or Hapur Tekka to reduce pest losses."
  },
  {
    id: "d101l_138",
    subject: "da-101",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Aflatoxin contamination in stored groundnut is caused by:",
    options: ["Aspergillus flavus", "Claviceps purpurea", "Fusarium moniliforme", "Rhizopus stolonifer"],
    correct: 0,
    explanation: "Aspergillus flavus and A. parasiticus produce aflatoxins in stored groundnut, maize, and other grains, especially under high moisture (>14%) and temperature."
  },
  {
    id: "d101l_139",
    subject: "da-101",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Maturity index for cotton picking is:",
    options: ["When boll moisture falls below 10%", "When the plant reaches 120 cm height", "When leaves turn yellow", "When 50% of bolls open"],
    correct: 3,
    explanation: "Cotton is picked when 50% of bolls on the plant have opened (burst). Multiple pickings (2–3 rounds) are done 7–10 days apart."
  },
  {
    id: "d101l_140",
    subject: "da-101",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The PUSA bin was developed to store food grains at village level and is effective against:",
    options: ["Fungal diseases only", "Temperature fluctuations", "Moisture ingress and grain storage insects/pests", "Rodents only"],
    correct: 2,
    explanation: "PUSA bin is a metallic storage structure developed by IARI that is airtight, protecting grains from moisture, insects, and to some extent rodents."
  },
];
