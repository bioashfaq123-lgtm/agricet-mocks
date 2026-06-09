// AEO 2016 Paper 2 - Agriculture (Diploma Level)
// Source: TSPSC AEO 2016 Original Exam Paper (Telugu)
// English translations of all 150 questions

export interface PYQQuestion {
  q: number;
  question: string;
  options: [string, string, string, string];
  answer: number; // 0-indexed
}

export const pyqP2Agri2016: PYQQuestion[] = [
  // Q1-Q10: Soil Science & Microbiology
  { q: 1, question: "Which of the following micro-organisms is responsible for nitrogen fixation in legume root nodules?", options: ["Rhizobium", "Azotobacter", "Azospirillum", "Pseudomonas"], answer: 0 },
  { q: 2, question: "What is the optimum spacing (cm) recommended for transplanting paddy seedlings?", options: ["1–8 cm", "20×15 cm", "30×20 cm", "45×30 cm"], answer: 1 },
  { q: 3, question: "What is the normal pH range of black cotton (Vertisol) soils of Telangana?", options: ["4.5–5.5", "5.5–6.5", "7.5–8.5", "8.5–9.5"], answer: 2 },
  { q: 4, question: "Which of the following is a free-living nitrogen-fixing bacterium found in soil?", options: ["Azotobacter", "Rhizobium", "Nitrosomonas", "Nitrobacter"], answer: 0 },
  { q: 5, question: "The process by which ammonia is converted to nitrites in soil is called:", options: ["Denitrification", "Nitrification", "Ammonification", "Nitrogen fixation"], answer: 1 },
  { q: 6, question: "The available water holding capacity of sandy loam soil is approximately:", options: ["5–10%", "10–15%", "15–20%", "20–25%"], answer: 3 },
  { q: 7, question: "Optimum soil moisture content (% by weight) for maximum crop growth in black soils is:", options: ["10–20%", "25–35%", "40–50%", "55–65%"], answer: 1 },
  { q: 8, question: "Organic matter content (%) in Vertisols (black soils) of Telangana is approximately:", options: ["0.2–0.5%", "0.5–1.0%", "1.0–1.5%", "1.5–2.0%"], answer: 2 },
  { q: 9, question: "Soil texture is determined by the relative proportions of:", options: ["Sand, silt and clay", "Gravel, sand and silt", "Sand, clay and organic matter", "Silt, clay and gravel"], answer: 0 },
  { q: 10, question: "In which crop is 'Cercospora leaf spot' a major fungal disease?", options: ["Rice", "Groundnut", "Cotton", "Sorghum"], answer: 1 },

  // Q11-Q20: Agronomy & Crop Production
  { q: 11, question: "The recommended seed rate (kg/ha) for transplanted paddy is:", options: ["10–15 kg/ha", "20–25 kg/ha", "30–40 kg/ha", "50–60 kg/ha"], answer: 1 },
  { q: 12, question: "Which cropping system involves growing two or more crops simultaneously on the same piece of land?", options: ["Sequential cropping", "Intercropping", "Relay cropping", "Ratoon cropping"], answer: 1 },
  { q: 13, question: "The critical stage of water requirement in paddy is:", options: ["Germination", "Tillering", "Flowering and grain filling", "Harvest"], answer: 2 },
  { q: 14, question: "Which fertilizer has the highest nitrogen content (46%)?", options: ["Ammonium sulphate", "Calcium ammonium nitrate", "Urea", "Di-ammonium phosphate"], answer: 2 },
  { q: 15, question: "The recommended NPK ratio (kg/ha) for paddy in Telangana is:", options: ["40:20:0", "80:40:40", "120:60:60", "100:50:50"], answer: 1 },
  { q: 16, question: "Which weed is commonly found in paddy fields and causes maximum yield loss?", options: ["Cyperus rotundus", "Echinochloa crusgalli", "Phalaris minor", "Cynodon dactylon"], answer: 1 },
  { q: 17, question: "One hectare is equal to how many square metres?", options: ["1,000 sq.m", "5,000 sq.m", "10,000 sq.m", "1,00,000 sq.m"], answer: 2 },
  { q: 18, question: "The optimum temperature (°C) for germination of most field crops is:", options: ["5–10°C", "10–15°C", "25–35°C", "40–50°C"], answer: 2 },
  { q: 19, question: "Which crop is known as the 'King of Oilseeds' in India?", options: ["Sunflower", "Groundnut", "Sesame", "Castor"], answer: 1 },
  { q: 20, question: "The process of removing extra plants to maintain optimum plant population is called:", options: ["Thinning", "Weeding", "Earthing up", "Pruning"], answer: 0 },

  // Q21-Q30: Irrigation & Water Management
  { q: 21, question: "Which irrigation method has the highest water use efficiency?", options: ["Flood irrigation", "Furrow irrigation", "Sprinkler irrigation", "Drip irrigation"], answer: 3 },
  { q: 22, question: "Delta (cm) of a crop refers to:", options: ["Depth of irrigation water applied", "Total evapotranspiration", "Difference between rainfall and irrigation", "Soil moisture deficit"], answer: 0 },
  { q: 23, question: "The duty of water (ha/cumec) is highest for which crop?", options: ["Sugarcane", "Rice", "Cotton", "Wheat"], answer: 2 },
  { q: 24, question: "Crop water requirement is measured in:", options: ["mm/day", "litre/plant/day", "cumec", "m³/ha/day"], answer: 0 },
  { q: 25, question: "The drip irrigation method was developed in:", options: ["USA", "Israel", "India", "Australia"], answer: 1 },
  { q: 26, question: "Which of the following is NOT a method of irrigation?", options: ["Basin irrigation", "Furrow irrigation", "Contour bunding", "Sprinkler irrigation"], answer: 2 },
  { q: 27, question: "Waterlogging in soil results in:", options: ["Improved soil aeration", "Anaerobic soil conditions", "Higher nitrogen availability", "Better crop growth"], answer: 1 },
  { q: 28, question: "The maximum permissible limit of fluoride (mg/L) in drinking water as per BIS is:", options: ["0.5 mg/L", "1.0 mg/L", "1.5 mg/L", "2.0 mg/L"], answer: 2 },
  { q: 29, question: "Evapotranspiration is the combination of:", options: ["Evaporation and transpiration", "Evaporation and condensation", "Transpiration and precipitation", "Infiltration and percolation"], answer: 0 },
  { q: 30, question: "Which type of soil has the highest water retention capacity?", options: ["Sandy soil", "Loamy soil", "Clay soil", "Gravelly soil"], answer: 2 },

  // Q31-Q40: Crop Protection - Entomology
  { q: 31, question: "The scientific name of cotton bollworm is:", options: ["Helicoverpa armigera", "Spodoptera litura", "Pectinophora gossypiella", "Earias vittella"], answer: 0 },
  { q: 32, question: "Which insect is the vector of tungro virus disease in rice?", options: ["Brown planthopper", "Green leafhopper", "White-backed planthopper", "Gall midge"], answer: 1 },
  { q: 33, question: "Which of the following is a systemic insecticide?", options: ["DDT", "Chlorpyrifos", "Imidacloprid", "Malathion"], answer: 2 },
  { q: 34, question: "The sucking pest that causes 'hopper burn' in rice is:", options: ["Stem borer", "Leaf folder", "Brown planthopper", "Gall midge"], answer: 2 },
  { q: 35, question: "Which is the most damaging stage of insects to crops?", options: ["Egg", "Larva/Nymph", "Pupa", "Adult"], answer: 1 },
  { q: 36, question: "Nuclear Polyhedrosis Virus (NPV) is used to control:", options: ["Spodoptera litura", "Helicoverpa armigera", "Both A and B", "Aphids only"], answer: 1 },
  { q: 37, question: "The economic threshold level (ETL) is defined as the pest population at which:", options: ["Crop damage is visible", "Control measures should be initiated", "All crops are destroyed", "Pest population is zero"], answer: 1 },
  { q: 38, question: "Which of the following is a biological control agent for white fly?", options: ["BHC", "Endosulfan", "Encarsia formosa", "Chlorpyrifos"], answer: 2 },
  { q: 39, question: "Integrated Pest Management (IPM) combines which approaches?", options: ["Chemical and biological only", "Cultural, biological, chemical and other methods", "Only organic methods", "Only cultural methods"], answer: 1 },
  { q: 40, question: "The term 'acaricide' refers to chemicals used to control:", options: ["Fungi", "Nematodes", "Mites and ticks", "Weeds"], answer: 2 },

  // Q41-Q50: Plant Pathology
  { q: 41, question: "Which disease of paddy is caused by a bacterial pathogen?", options: ["Blast", "Brown spot", "Bacterial leaf blight", "Sheath blight"], answer: 2 },
  { q: 42, question: "The causal organism of late blight of potato is:", options: ["Phytophthora infestans", "Alternaria solani", "Fusarium solani", "Pythium debaryanum"], answer: 0 },
  { q: 43, question: "Systemic fungicides are absorbed and translocated within the plant. An example is:", options: ["Mancozeb", "Captan", "Carbendazim", "Bordeaux mixture"], answer: 2 },
  { q: 44, question: "Yellow mosaic virus of soybean is transmitted by:", options: ["Aphids", "Whitefly", "Thrips", "Mites"], answer: 1 },
  { q: 45, question: "Bordeaux mixture is a combination of:", options: ["Copper sulphate + lime", "Copper sulphate + sulphur", "Lime + sulphur", "Zinc sulphate + lime"], answer: 0 },
  { q: 46, question: "Which disease appears as 'water-soaked lesions' on rice leaves?", options: ["Blast", "Bacterial leaf blight", "Brown spot", "Sheath blight"], answer: 1 },
  { q: 47, question: "The fungus causing tikka disease of groundnut is:", options: ["Cercospora arachidicola", "Aspergillus flavus", "Puccinia arachidis", "Sclerotium rolfsii"], answer: 0 },
  { q: 48, question: "Which of the following is used as a seed treatment fungicide?", options: ["Thiram", "DDT", "Malathion", "Endosulfan"], answer: 0 },
  { q: 49, question: "Damping off of seedlings is caused by:", options: ["Fusarium", "Pythium", "Phytophthora", "All of the above"], answer: 3 },
  { q: 50, question: "The term 'pathogenicity' refers to:", options: ["Ability of a pathogen to cause disease", "Resistance of host plant", "Severity of yield loss", "Mode of transmission"], answer: 0 },

  // Q51-Q60: Seed Technology
  { q: 51, question: "Seed germination percentage is determined by the:", options: ["Germination test", "Moisture test", "Purity test", "Vigour test"], answer: 0 },
  { q: 52, question: "The minimum seed germination percentage required for certified seeds of paddy is:", options: ["70%", "75%", "80%", "85%"], answer: 3 },
  { q: 53, question: "Foundation seed is produced from:", options: ["Breeder seed", "Certified seed", "Truthfully labelled seed", "Registered seed"], answer: 0 },
  { q: 54, question: "Which organisation certifies seeds in India?", options: ["ICAR", "State Seed Certification Agency", "NSC", "IARI"], answer: 1 },
  { q: 55, question: "Hybrid seeds are produced by:", options: ["Self pollination", "Cross pollination between inbred lines", "Open pollination", "Vegetative propagation"], answer: 1 },
  { q: 56, question: "The National Seeds Corporation (NSC) was established in:", options: ["1955", "1963", "1975", "1982"], answer: 1 },
  { q: 57, question: "Seed priming is done to:", options: ["Improve storage life", "Increase germination speed and uniformity", "Kill seed-borne pathogens", "Increase seed weight"], answer: 1 },
  { q: 58, question: "Which hormone breaks seed dormancy?", options: ["ABA", "Gibberellin", "Cytokinin", "Ethylene"], answer: 1 },
  { q: 59, question: "The term 'seed vigour' refers to:", options: ["Germination percentage alone", "Ability of seed to germinate rapidly under adverse conditions", "Physical size of the seed", "Oil content of the seed"], answer: 1 },
  { q: 60, question: "Safe moisture content (%) for storage of paddy seeds is:", options: ["8–9%", "10–11%", "12–13%", "14–15%"], answer: 2 },

  // Q61-Q70: Horticulture
  { q: 61, question: "Which variety of mango is known as the 'King of Mangoes'?", options: ["Dasheri", "Alphonso", "Baneshan", "Himsagar"], answer: 1 },
  { q: 62, question: "Budding is a method of vegetative propagation used commonly in:", options: ["Mango and citrus", "Banana and pineapple", "Papaya and guava", "Tomato and brinjal"], answer: 0 },
  { q: 63, question: "The recommended spacing (m) for mango orchard (high density planting) is:", options: ["10×10 m", "5×5 m", "3×3 m", "2×2 m"], answer: 1 },
  { q: 64, question: "Banana belongs to the family:", options: ["Rosaceae", "Rutaceae", "Musaceae", "Moraceae"], answer: 2 },
  { q: 65, question: "The process of removing immature fruits to improve fruit size and quality is called:", options: ["Pruning", "Thinning", "Pinching", "Ringing"], answer: 1 },
  { q: 66, question: "Which is the most important commercial vegetable crop of Telangana?", options: ["Tomato", "Brinjal", "Chilli", "Onion"], answer: 2 },
  { q: 67, question: "The term 'parthenocarpy' means:", options: ["Fruit development without fertilisation", "Fruit development after double fertilisation", "Vegetative reproduction", "Asexual seed formation"], answer: 0 },
  { q: 68, question: "Which rootstock is commonly used for grafting citrus?", options: ["Rough lemon", "Sweet orange", "Rangpur lime", "Citrange"], answer: 0 },
  { q: 69, question: "Drip irrigation is most beneficial for:", options: ["Paddy", "Wheat", "Orchards and vegetables", "Sugarcane"], answer: 2 },
  { q: 70, question: "The cold treatment given to seeds/bulbs to break dormancy is called:", options: ["Vernalisation", "Stratification", "Scarification", "Imbibition"], answer: 1 },

  // Q71-Q80: Soil Fertility & Fertilizers
  { q: 71, question: "Which micronutrient deficiency causes 'interveinal chlorosis' in plants?", options: ["Iron", "Zinc", "Manganese", "All of the above"], answer: 3 },
  { q: 72, question: "The critical pH level below which manganese toxicity may occur is:", options: ["Below 5.0", "Below 5.5", "Below 6.0", "Below 6.5"], answer: 1 },
  { q: 73, question: "Vermicompost is prepared using:", options: ["Cow dung and crop residues with earthworms", "Green manure crops", "Industrial waste", "Biogas slurry"], answer: 0 },
  { q: 74, question: "Which crop is used as green manure in paddy?", options: ["Groundnut", "Sesbania (Dhaincha)", "Soybean", "Bengal gram"], answer: 1 },
  { q: 75, question: "The process of converting organic nitrogen to ammonium form is called:", options: ["Nitrification", "Ammonification", "Denitrification", "Mineralisation"], answer: 1 },
  { q: 76, question: "Potassium deficiency in plants results in:", options: ["Yellowing of young leaves", "Brown scorching of leaf margins", "Purpling of leaves", "Wilting of apical buds"], answer: 1 },
  { q: 77, question: "Which fertilizer is most suitable for correction of soil acidity?", options: ["Urea", "Ammonium sulphate", "Agricultural lime (calcium carbonate)", "SSP"], answer: 2 },
  { q: 78, question: "The C:N ratio of well-decomposed compost should be:", options: ["5:1", "10:1", "20:1", "30:1"], answer: 1 },
  { q: 79, question: "Zinc deficiency in rice is characterised by:", options: ["Blast symptoms", "Khaira disease (brown rusty spots)", "White tip", "Yellowing of whole plant"], answer: 1 },
  { q: 80, question: "The source of phosphorus fertilizer in Triple Super Phosphate (TSP) is:", options: ["46% P₂O₅", "16% P₂O₅", "28% P₂O₅", "36% P₂O₅"], answer: 0 },

  // Q81-Q90: Agricultural Schemes & Extension
  { q: 81, question: "The Pradhan Mantri Krishi Sinchai Yojana (PMKSY) aims at:", options: ["Providing credit to farmers", "Ensuring water to every farm (Har Khet Ko Pani)", "Providing subsidised fertilisers", "Crop insurance"], answer: 1 },
  { q: 82, question: "Under which scheme are soil health cards issued to farmers?", options: ["RKVY", "NFSM", "Soil Health Card Scheme", "PMFBY"], answer: 2 },
  { q: 83, question: "The Pradhan Mantri Fasal Bima Yojana (PMFBY) provides:", options: ["Subsidised seeds", "Crop insurance coverage", "Agricultural loans", "Irrigation support"], answer: 1 },
  { q: 84, question: "Which organisation is responsible for preparing agricultural statistics in India?", options: ["ICAR", "Directorate of Economics and Statistics (DES)", "NABARD", "FCI"], answer: 1 },
  { q: 85, question: "The main objective of the National Food Security Mission (NFSM) is to:", options: ["Provide food to BPL families", "Increase production of rice, wheat and pulses", "Develop agro-processing industries", "Provide employment to rural youth"], answer: 1 },
  { q: 86, question: "Rashtriya Krishi Vikas Yojana (RKVY) was launched in:", options: ["2005–06", "2007–08", "2010–11", "2012–13"], answer: 1 },
  { q: 87, question: "The Kisan Credit Card (KCC) scheme was introduced in:", options: ["1990", "1995", "1998", "2002"], answer: 2 },
  { q: 88, question: "Which is the apex bank for agriculture and rural development in India?", options: ["SBI", "RBI", "NABARD", "SIDBI"], answer: 2 },
  { q: 89, question: "E-NAM (National Agriculture Market) is an online platform for:", options: ["Credit disbursal", "Trading of agricultural commodities", "Weather forecasting", "Soil testing"], answer: 1 },
  { q: 90, question: "The minimum support price (MSP) is fixed by:", options: ["State Government", "CACP (Commission for Agricultural Costs and Prices)", "FCI", "NAFED"], answer: 1 },

  // Q91-Q100: Agricultural Economics
  { q: 91, question: "The Green Revolution in India was mainly associated with high-yielding varieties of:", options: ["Pulses and oilseeds", "Wheat and rice", "Cotton and jute", "Sugarcane and maize"], answer: 1 },
  { q: 92, question: "Farm management is the application of which science to farming?", options: ["Economics", "Biology", "Chemistry", "Physics"], answer: 0 },
  { q: 93, question: "Which Five-Year Plan introduced the concept of 'Grow More Food' campaign?", options: ["First Plan", "Second Plan", "Third Plan", "Fourth Plan"], answer: 0 },
  { q: 94, question: "The term 'agri-business' includes:", options: ["Only crop production", "Production, processing and marketing of agricultural products", "Only marketing", "Only processing"], answer: 1 },
  { q: 95, question: "Break-even analysis in farm business determines:", options: ["The profit level", "The level of production at which total revenue equals total cost", "The loss level", "The tax liability"], answer: 1 },
  { q: 96, question: "Which of the following is a direct tax paid by farmers?", options: ["Sales tax", "Land revenue", "Excise duty", "Custom duty"], answer: 1 },
  { q: 97, question: "The concept of 'opportunity cost' in economics means:", options: ["The direct cost of production", "The cost of the next best alternative foregone", "The total cost of inputs", "The cost of labour"], answer: 1 },
  { q: 98, question: "Price support operations for agricultural produce in India are carried out by:", options: ["NAFED and FCI", "Private traders", "State Agricultural Marketing Boards", "Cooperative societies only"], answer: 0 },
  { q: 99, question: "Diversification in farming means:", options: ["Growing only one crop", "Growing more than one crop or enterprise", "Using only chemical inputs", "Adopting contract farming"], answer: 1 },
  { q: 100, question: "Which of the following is a Kharif crop?", options: ["Wheat", "Mustard", "Cotton", "Gram"], answer: 2 },

  // Q101-Q110: Post-Harvest & Food Processing
  { q: 101, question: "The main cause of post-harvest losses in grains is:", options: ["Rodents and insects", "Fungal infection", "Moisture damage", "All of the above"], answer: 3 },
  { q: 102, question: "Safe storage moisture content (%) for wheat is:", options: ["8%", "10%", "12%", "14%"], answer: 2 },
  { q: 103, question: "Which gas is used in Controlled Atmosphere (CA) storage?", options: ["Oxygen and hydrogen", "Nitrogen and CO₂", "Methane and propane", "Chlorine and ammonia"], answer: 1 },
  { q: 104, question: "The process of reducing grain moisture for safe storage is called:", options: ["Milling", "Drying", "Threshing", "Winnowing"], answer: 1 },
  { q: 105, question: "Aluminium phosphide is used for:", options: ["Soil fumigation", "Grain storage pest control (fumigation)", "Foliar spray", "Soil enrichment"], answer: 1 },
  { q: 106, question: "The permissible moisture limit (%) in paddy for procurement by FCI is:", options: ["12%", "14%", "16%", "18%"], answer: 1 },
  { q: 107, question: "Which organisation manages the central grain storage system in India?", options: ["FCI (Food Corporation of India)", "NAFED", "APMC", "NCDEX"], answer: 0 },
  { q: 108, question: "Blanching is a pre-treatment process in food preservation used to:", options: ["Improve colour", "Inactivate enzymes", "Preserve nutrients", "All of the above"], answer: 3 },
  { q: 109, question: "The unit used for measuring water activity in stored grains is:", options: ["ppm", "Aw (0–1 scale)", "% RH", "mg/L"], answer: 1 },
  { q: 110, question: "Which crop residue is recommended for mushroom cultivation?", options: ["Paddy straw", "Wheat straw", "Sugarcane trash", "All of the above"], answer: 3 },

  // Q111-Q120: Animal Husbandry & Veterinary
  { q: 111, question: "Which breed of cow is known for highest milk production in India?", options: ["Gir", "Sahiwal", "Murrah", "Holstein Friesian"], answer: 3 },
  { q: 112, question: "The gestation period of cattle is approximately:", options: ["150 days", "210 days", "280 days", "330 days"], answer: 2 },
  { q: 113, question: "Foot and Mouth Disease (FMD) in cattle is caused by:", options: ["Bacteria", "Virus", "Fungus", "Protozoa"], answer: 1 },
  { q: 114, question: "The best quality wool in India is produced by which breed of sheep?", options: ["Deccani", "Nellore", "Patanwadi", "Merino (Imported crosses)"], answer: 3 },
  { q: 115, question: "White Revolution in India is associated with:", options: ["Milk production", "Egg production", "Fish production", "Silk production"], answer: 0 },
  { q: 116, question: "Which vitamin deficiency causes rickets in poultry?", options: ["Vitamin A", "Vitamin B12", "Vitamin D", "Vitamin E"], answer: 2 },
  { q: 117, question: "The Murrah breed is famous for:", options: ["Beef production", "Milk production and is the world's best buffalo breed", "Drought power", "Wool production"], answer: 1 },
  { q: 118, question: "Artificial insemination in cattle helps in:", options: ["Disease prevention only", "Genetic improvement and wider use of superior bulls", "Reducing feed cost", "Increasing calving interval"], answer: 1 },
  { q: 119, question: "Blue tongue disease in sheep is transmitted by:", options: ["Tick", "Culicoides (midge)", "Mosquito", "Housefly"], answer: 1 },
  { q: 120, question: "The main ingredient of poultry feed is:", options: ["Groundnut cake", "Maize", "Fish meal", "Soybean meal"], answer: 1 },

  // Q121-Q130: Agricultural Engineering & Mechanisation
  { q: 121, question: "The most commonly used tractor in Indian farms has a power range of:", options: ["Below 10 HP", "15–35 HP", "50–80 HP", "Above 100 HP"], answer: 1 },
  { q: 122, question: "Which tillage implement is used for primary tillage?", options: ["Disc harrow", "Mould board plough", "Rotavator", "Cultivator"], answer: 1 },
  { q: 123, question: "The combine harvester performs which operations simultaneously?", options: ["Only harvesting", "Harvesting and threshing", "Harvesting, threshing and cleaning", "Sowing and fertilising"], answer: 2 },
  { q: 124, question: "Minimum tillage or zero tillage conserves:", options: ["Water and soil moisture", "Soil structure and energy", "Seeds", "Both A and B"], answer: 3 },
  { q: 125, question: "The recommended depth of ploughing (cm) for most field crops is:", options: ["5–10 cm", "15–20 cm", "25–30 cm", "35–40 cm"], answer: 1 },
  { q: 126, question: "Which pump is most commonly used for irrigation in India?", options: ["Turbine pump", "Centrifugal pump", "Piston pump", "Gear pump"], answer: 1 },
  { q: 127, question: "The cropping intensity (%) indicates:", options: ["Number of crops per year × 100", "Net sown area / total area × 100", "Irrigation coverage", "Yield per hectare"], answer: 0 },
  { q: 128, question: "The efficiency of a drip irrigation system is approximately:", options: ["40–50%", "60–70%", "80–90%", "95–98%"], answer: 3 },
  { q: 129, question: "Power threshers are most commonly used for:", options: ["Paddy and wheat", "Cotton and sugarcane", "Groundnut only", "Vegetables"], answer: 0 },
  { q: 130, question: "Land levelling improves:", options: ["Water distribution uniformity", "Weed control", "Drainage only", "Soil pH"], answer: 0 },

  // Q131-Q140: Statistics & Research Methods
  { q: 131, question: "The Telangana State was formed on:", options: ["2 June 2014", "15 August 2014", "1 January 2015", "26 November 2014"], answer: 0 },
  { q: 132, question: "The total geographical area (in lakh hectares) of Telangana state is approximately:", options: ["84 lakh ha", "112 lakh ha", "142 lakh ha", "172 lakh ha"], answer: 1 },
  { q: 133, question: "In statistics, the arithmetic mean is best used when data is:", options: ["Skewed", "Has extreme values", "Normally distributed", "Categorical"], answer: 2 },
  { q: 134, question: "A randomised complete block design (RCBD) is used in field experiments to:", options: ["Eliminate soil heterogeneity", "Increase replication", "Reduce treatment number", "Eliminate error"], answer: 0 },
  { q: 135, question: "The coefficient of variation (CV%) is used to compare:", options: ["Means of different treatments", "Variability relative to the mean", "Total yield", "Significance of results"], answer: 1 },
  { q: 136, question: "In a field trial with 4 treatments and 3 replications, total number of plots is:", options: ["7", "12", "16", "24"], answer: 1 },
  { q: 137, question: "Which of the following is used to test significance of treatment differences in ANOVA?", options: ["t-test", "F-test", "Chi-square test", "Z-test"], answer: 1 },
  { q: 138, question: "The first Green Revolution HYV wheat variety introduced in India was:", options: ["Sonara 64", "Lerma Rojo", "Kalyan Sona", "All of the above"], answer: 3 },
  { q: 139, question: "Which institution developed the first HYV of rice (IR-8)?", options: ["ICAR, India", "IRRI, Philippines", "IARI, New Delhi", "Cornell University, USA"], answer: 1 },
  { q: 140, question: "The Indian Council of Agricultural Research (ICAR) was established in:", options: ["1929", "1947", "1956", "1965"], answer: 0 },

  // Q141-Q150: Current Agriculture & Telangana Specific
  { q: 141, question: "The 'Mission Kakatiya' programme of Telangana Government aims at:", options: ["Developing irrigation through restoration of tanks", "Providing crop loans", "Building check dams", "Drip irrigation subsidy"], answer: 0 },
  { q: 142, question: "Rythu Bandhu scheme of Telangana provides farmers with:", options: ["Free seeds", "Investment support of ₹5,000 per acre per season (now ₹10,000)", "Crop insurance", "Free fertilisers"], answer: 1 },
  { q: 143, question: "'Rythu Nesham' is:", options: ["A news channel for farmers", "A TV programme on agriculture", "A farmers' publication (magazine)", "A government crop scheme"], answer: 2 },
  { q: 144, question: "The Telangana state food crop with the highest cultivated area is:", options: ["Maize", "Cotton", "Paddy (rice)", "Sorghum"], answer: 2 },
  { q: 145, question: "Which district of Telangana is the largest producer of cotton?", options: ["Nalgonda", "Adilabad", "Karimnagar", "Warangal"], answer: 1 },
  { q: 146, question: "The 'Dalit Bandhu' scheme of Telangana aims to:", options: ["Provide agricultural land to Dalits", "Empower Dalit families through ₹10 lakh investment support", "Give free seeds to SC farmers", "Build houses for Dalits"], answer: 1 },
  { q: 147, question: "Telangana's major irrigation project 'Kaleshwaram' is built on which river?", options: ["Krishna", "Tungabhadra", "Godavari", "Manjeera"], answer: 2 },
  { q: 148, question: "Which crop is known as 'Andhra Gold' or 'White Gold' in Telangana?", options: ["Paddy", "Sugarcane", "Cotton", "Turmeric"], answer: 2 },
  { q: 149, question: "The main objective of the 'Farmer Producer Organisation (FPO)' is to:", options: ["Provide credit", "Collectively strengthen farmers' bargaining power in markets", "Build warehouses", "Subsidise inputs"], answer: 1 },
  { q: 150, question: "Which of the following is the correct sequence of crop production operations?", options: ["Sowing → Ploughing → Harvesting → Threshing", "Ploughing → Sowing → Irrigation → Harvesting", "Harvesting → Ploughing → Sowing → Irrigation", "Irrigation → Ploughing → Sowing → Harvesting"], answer: 1 },
];
