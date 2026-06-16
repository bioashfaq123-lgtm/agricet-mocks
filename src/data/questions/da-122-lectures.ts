// ===== FILE: da-122-lectures.ts =====
import { Question } from "@/types";

// DA-122: Manures and Fertilizers — Lecture-wise Question Bank
// Source: PJTSAU Diploma in Agriculture DA-122 course material
// 150 questions (15 per lecture × 10 lectures)

export const da122LectureQuestions: Question[] = [

  // ─────────────────────────────────────────────────────────
  // LECTURE 1: Farmyard Manure & Compost
  // ─────────────────────────────────────────────────────────
  {
    id: "d122l_001",
    subject: "da-122",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The average nutrient composition of well-decomposed Farmyard Manure (FYM) is approximately:",
    options: ["2.0% N, 1.0% P₂O₅, 2.0% K₂O", "1.0% N, 0.5% P₂O₅, 1.0% K₂O", "0.1% N, 0.05% P₂O₅, 0.1% K₂O", "0.5% N, 0.2% P₂O₅, 0.5% K₂O"],
    correct: 3,
    explanation: "Well-decomposed FYM contains approximately 0.5% N, 0.2% P₂O₅, and 0.5% K₂O on a fresh-weight basis. These values vary with animal species, feed quality, and degree of decomposition."
  },
  {
    id: "d122l_002",
    subject: "da-122",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "In the Indore method of composting, the organic materials are:",
    options: ["Mixed with night soil and decomposed in sealed chambers under standard field conditions", "Placed in pits and kept anaerobic throughout decomposition", "Stacked in heaps and turned 2–3 times during 3–5 months of decomposition", "Burned partially and then mixed with soil under standard field conditions"],
    correct: 2,
    explanation: "The Indore method (developed at Indore, MP) involves stacking organic materials in heaps 1.5–2 m high and turning them 2–3 times over 3–5 months to ensure aerobic decomposition. It produces good quality compost."
  },
  {
    id: "d122l_003",
    subject: "da-122",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The Bangalore method of composting differs from the Indore method in that:",
    options: ["It requires turning every 15 days for rapid decomposition in soil science under standard field conditions", "It places materials in pits with layers of night soil/urine earth and keeps them anaerobic", "It uses earthworms for decomposition for soil management under standard field conditions", "It uses raised heaps instead of pits in soil fertility under standard field conditions"],
    correct: 1,
    explanation: "The Bangalore (HESCO) method developed by the City Improvement Trust uses pits where organic waste is layered with night soil or urine earth and kept moist for anaerobic decomposition over 3–6 months without turning."
  },
  {
    id: "d122l_004",
    subject: "da-122",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The recommended dose of FYM for most cereal crops in India is approximately:",
    options: ["1–2 t ha⁻¹", "100–150 t ha⁻¹", "5–10 t ha⁻¹", "25–50 t ha⁻¹"],
    correct: 2,
    explanation: "The standard recommendation for FYM in Indian cereal crops is 10–15 t ha⁻¹ (sometimes cited as 5–10 t ha⁻¹ for lighter soils). Vegetable crops may need 20–25 t ha⁻¹ due to higher nutrient demand."
  },
  {
    id: "d122l_005",
    subject: "da-122",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Which cattle dung is considered richer in plant nutrients compared to buffalo dung on a dry-weight basis?",
    options: ["Buffalo dung", "Cow dung", "Sheep dung (not cattle)", "They are identical in composition"],
    correct: 1,
    explanation: "Cow dung (0.3% N, 0.2% P, 0.1% K fresh weight) is generally richer in N compared to buffalo dung on a dry-matter basis because cows digest food less completely, leaving more undigested organic N in the dung."
  },
  {
    id: "d122l_006",
    subject: "da-122",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Poultry manure is considered superior to cattle FYM as a fertilizer because:",
    options: ["Poultry manure has lower moisture content only for soil management", "Poultry manure has lower C:N ratio than cattle FYM in soil science", "Poultry manure is richer in nutrients (approximately 1.5% N, 1.0% P₂O₅, 0.9% K₂O)", "Poultry manure acts only as a slow-release source in soil fertility"],
    correct: 2,
    explanation: "Poultry manure contains about 1.5% N, 1.0% P₂O₅, and 0.9% K₂O — nearly 3× higher in N than cattle FYM. It also contains more phosphorus. Its low C:N ratio ensures rapid mineralisation."
  },
  {
    id: "d122l_007",
    subject: "da-122",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The main advantage of composting over direct application of raw organic waste is:",
    options: ["Composting increases the volume of material applied per hectare under standard field conditions", "Composting reduces the organic matter content of the final product under standard field conditions", "Composting stabilises nutrients, reduces pathogens, weed seeds, and produces a uniform product", "Composting increases the C:N ratio of the material under standard field conditions"],
    correct: 2,
    explanation: "Composting reduces volume (by 50–60%), kills pathogens and weed seeds by heat generation, lowers C:N ratio to 15–20:1, stabilises nutrients, and produces a uniform, easy-to-apply product."
  },
  {
    id: "d122l_008",
    subject: "da-122",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The optimum C:N ratio for compost starting material to ensure efficient decomposition is:",
    options: ["100–150:1", "60–80:1", "5–10:1", "25–30:1"],
    correct: 3,
    explanation: "The optimum C:N ratio for composting feedstock is 25–30:1. Lower ratios (< 20:1) cause N loss as ammonia; higher ratios (> 40:1) slow decomposition due to N limitation for microbes."
  },
  {
    id: "d122l_009",
    subject: "da-122",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Which of the following nitrogen losses is greatest during storage of FYM in open heaps?",
    options: ["Fixation of N by 2:1 clay minerals", "Denitrification loss as N₂ gas", "Leaching of nitrate (NO₃⁻) into groundwater", "Ammonia (NH₃) volatilisation from urine decomposition"],
    correct: 3,
    explanation: "The largest N loss during FYM storage is ammonia volatilisation from urea/uric acid in urine, especially in open heaps exposed to sun and rain. Up to 50% of N can be lost this way."
  },
  {
    id: "d122l_010",
    subject: "da-122",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The pit method of composting is most suitable for:",
    options: ["Dry areas where moisture conservation is important for decomposition", "Large commercial composting operations under standard field conditions", "Humid areas with high rainfall and good natural drainage", "Urban municipal solid waste composting under standard field conditions"],
    correct: 0,
    explanation: "The pit method is suited to dry/semi-arid areas because the pit retains moisture essential for microbial decomposition. In humid areas, open heap methods are preferred to prevent waterlogging and anaerobic conditions."
  },
  {
    id: "d122l_011",
    subject: "da-122",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The temperature reached in the active (thermophilic) phase of composting, which kills pathogens and weed seeds, is:",
    options: ["55–65°C (55–70°C)", "40–50°C", "80–90°C", "25–35°C"],
    correct: 0,
    explanation: "Thermophilic composting reaches 55–65°C (up to 70°C in the core) during the active decomposition phase. This temperature is sufficient to kill most human pathogens, weed seeds, and fly larvae within a few days."
  },
  {
    id: "d122l_012",
    subject: "da-122",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Night soil (human excreta) used in composting contributes mainly:",
    options: ["Carbon-rich material for energy in soil science", "High nitrogen (approximately 5–7% N on dry weight)", "Beneficial bacteria only for soil management", "Phosphorus and potassium only in soil fertility"],
    correct: 1,
    explanation: "Night soil contains approximately 5–7% N (dry weight), making it a rich nitrogen source. This is why the Bangalore method layers it with crop waste to speed decomposition and enrich the compost."
  },
  {
    id: "d122l_013",
    subject: "da-122",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Sheep and goat manure (droppings) are particularly valued because:",
    options: ["They are free from weed seeds and pathogens in soil science", "They have very high moisture content aiding decomposition for soil management", "They are comparatively dry and concentrated with 3% N, 1% P₂O₅, 2% K₂O", "They contain hormones that stimulate plant growth in soil fertility"],
    correct: 2,
    explanation: "Sheep/goat droppings are concentrated (low moisture) and richer than cattle manure — approximately 3% N, 1% P₂O₅, 2% K₂O on dry-weight basis. They can be applied directly or composted."
  },
  {
    id: "d122l_014",
    subject: "da-122",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Town compost (municipal compost) in India typically has a nutrient content of approximately:",
    options: ["0.1% N, 0.05% P₂O₅, 0.1% K₂O", "5% N, 3% P₂O₅, 4% K₂O", "0.5% N, 0.2% P₂O₅, 0.5% K₂O (similar to FYM)", "1.5–2.0% N, 1.0% P₂O₅, 1.5% K₂O"],
    correct: 2,
    explanation: "Municipal solid waste compost in India varies but generally contains 0.4–1.5% N, 0.3–0.8% P₂O₅, and 0.5–1.5% K₂O — broadly similar to FYM in nutrient content but variable in quality."
  },
  {
    id: "d122l_015",
    subject: "da-122",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The main function of turning compost heaps during the Indore method is to:",
    options: ["Remove excess moisture from the compost under standard field conditions", "Add mineral fertilizers to the compost under standard field conditions", "Aerate the pile to maintain aerobic conditions and uniform decomposition", "Kill earthworms that may be competing with microbes under standard field conditions"],
    correct: 2,
    explanation: "Turning aerates the heap, replenishing oxygen for aerobic microbes, exposing undecomposed outer material to the active centre, and ensuring uniform temperature and moisture distribution throughout the pile."
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 2: Vermicompost & Green Manures
  // ─────────────────────────────────────────────────────────
  {
    id: "d122l_016",
    subject: "da-122",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The earthworm species most commonly used in vermicomposting worldwide and in India is:",
    options: ["Eisenia fetida (Red wiggler / Tiger worm)", "Metaphire houlleti for soil management", "Pheretima posthuma in soil science", "Lumbricus terrestris in soil fertility"],
    correct: 0,
    explanation: "Eisenia fetida (red wiggler or manure worm) is the most widely used species for vermicomposting due to its tolerance of high organic matter concentrations, rapid reproduction, and surface-feeding habit."
  },
  {
    id: "d122l_017",
    subject: "da-122",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Vermicompost is superior to conventional FYM in nutrient availability because:",
    options: ["Nutrients in vermicompost are in microbially processed, plant-available forms and it contains plant growth hormones", "Vermicompost contains higher total nutrient percentages than FYM in soil science under standard field conditions", "Vermicompost is sterile, free from all microorganisms for soil management under standard field conditions", "Vermicompost has higher C:N ratio, releasing nutrients more slowly in soil fertility under standard field conditions"],
    correct: 0,
    explanation: "Vermicompost contains nutrients (N, P, K) in readily plant-available forms, abundant beneficial microbes, plant growth regulators (auxins, cytokinins, gibberellins), and humic substances — making it functionally superior to FYM."
  },
  {
    id: "d122l_018",
    subject: "da-122",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The typical nutrient content of vermicompost is approximately:",
    options: ["5% N, 4% P₂O₅, 5% K₂O", "0.5% N, 0.2% P, 0.5% K", "0.1% N, 0.05% P, 0.1% K", "2–3% N, 1.5–2% P₂O₅, 1.5–2% K₂O"],
    correct: 3,
    explanation: "Good quality vermicompost typically contains 2–3% N, 1.5–2% P₂O₅, and 1.5–2% K₂O — approximately 4–6 times higher in plant nutrients than conventional FYM."
  },
  {
    id: "d122l_019",
    subject: "da-122",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Dhaincha (Sesbania bispinosa) is a commonly used green manure crop in India because it:",
    options: ["Produces seeds with 40% protein content used as livestock feed under standard field conditions", "Fixes nitrogen through association with Azospirillum only under standard field conditions", "Fixes 80–100 kg N ha⁻¹ through Rhizobium symbiosis, grows fast, and tolerates waterlogging", "Is a legume that requires no water for growth under standard field conditions"],
    correct: 2,
    explanation: "Dhaincha (Sesbania bispinosa) is highly valued for green manuring because it grows rapidly (50–60 days), fixes 80–100 kg N ha⁻¹, tolerates waterlogging and salinity, and produces high biomass."
  },
  {
    id: "d122l_020",
    subject: "da-122",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The optimum stage to incorporate green manure crops into the soil is:",
    options: ["At full seed maturity (all pods developed)", "At 50% flowering stage when biomass and nitrogen content are maximum", "At 10–15 days after germination (seedling stage)", "After the crop has dried completely (dry matter stage)"],
    correct: 1,
    explanation: "Green manure crops should be incorporated at 50% flowering stage — when biomass production is near maximum and N content is high. After flowering, C:N ratio increases and decomposition slows."
  },
  {
    id: "d122l_021",
    subject: "da-122",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Sunn hemp (Crotalaria juncea) as a green manure crop fixes approximately how much nitrogen per hectare?",
    options: ["40–80 kg N ha⁻¹", "300–400 kg N ha⁻¹", "10–20 kg N ha⁻¹", "150–200 kg N ha⁻¹"],
    correct: 0,
    explanation: "Sunn hemp (Crotalaria juncea) fixes approximately 40–80 kg N ha⁻¹ through Rhizobium symbiosis, depending on soil conditions. It also adds substantial organic matter when incorporated."
  },
  {
    id: "d122l_022",
    subject: "da-122",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Azolla is an aquatic fern used as a biofertilizer in rice paddies because it:",
    options: ["Harbours Anabaena azollae (a BGA) in its leaf cavities that fixes N₂", "Acts as a green manure only without any N fixation", "Produces growth hormones that stimulate rice tillering", "Directly absorbs atmospheric nitrogen into its fronds"],
    correct: 0,
    explanation: "Azolla is a water fern that maintains a symbiotic association with the cyanobacterium Anabaena azollae living in leaf cavities. Anabaena fixes N₂, supplying nitrogen to both the fern and rice paddies."
  },
  {
    id: "d122l_023",
    subject: "da-122",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The recommended dose of vermicompost for vegetable crops is approximately:",
    options: ["20–25 t ha⁻¹", "1–2 t ha⁻¹", "5–7.5 t ha⁻¹", "50–100 t ha⁻¹"],
    correct: 2,
    explanation: "Vermicompost is recommended at 5–7.5 t ha⁻¹ for most vegetable crops (compared to 10–15 t ha⁻¹ for FYM) due to its higher nutrient concentration and better nutrient availability."
  },
  {
    id: "d122l_024",
    subject: "da-122",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "In-situ green manuring (growing and incorporating green manure in the same field) is preferred over ex-situ because:",
    options: ["In-situ crops can be grown only in the dry season under standard field conditions", "In-situ crops fix more nitrogen than ex-situ crops in soil science under standard field conditions", "It avoids transport costs and nutrient losses; organic matter and N are incorporated directly", "Ex-situ green manures cannot be incorporated mechanically for soil management"],
    correct: 2,
    explanation: "In-situ green manuring avoids labour and transport involved in carrying plant material from elsewhere. The crop is grown in the same field and incorporated, minimising N losses and ensuring maximum organic matter addition."
  },
  {
    id: "d122l_025",
    subject: "da-122",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The vermicomposting process is completed in approximately:",
    options: ["2–3 years", "45–60 days", "1–2 weeks", "6–12 months"],
    correct: 1,
    explanation: "Vermicomposting takes approximately 45–60 days to produce mature vermicompost from organic feedstock under optimal conditions (temperature 25–30°C, moisture 60–70%), compared to 3–6 months for conventional composting."
  },
  {
    id: "d122l_026",
    subject: "da-122",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Sesbania aculeata (Dhaincha) is particularly valued in rice-based cropping systems because:",
    options: ["It is a cereal crop that improves soil aeration in soil science under standard field conditions", "It suppresses all weeds through allelopathy for soil management under standard field conditions", "It produces high grain yield for food use in soil fertility under standard field conditions", "It tolerates submergence and can be grown even in standing water before rice transplanting"],
    correct: 3,
    explanation: "Sesbania aculeata can grow in waterlogged/flooded conditions, making it ideal for growing as a green manure crop in rice fields even during the pre-transplanting period when fields may be flooded."
  },
  {
    id: "d122l_027",
    subject: "da-122",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The process of worm castings (vermicast) formation improves soil fertility because castings:",
    options: ["Increase soil bulk density, improving aeration in soil science as recommended by ICAR guidelines", "Are inert material with no nutritional value for soil management under standard field conditions", "Have lower nutrient content than original organic matter in soil fertility under standard field conditions", "Are enriched in available nutrients, beneficial microbes, and humic substances compared to unprocessed material"],
    correct: 3,
    explanation: "Earthworm castings (vermicast) are enriched in available N (NH₄⁺, NO₃⁻), available P, exchangeable K, and Ca compared to surrounding soil. They also contain elevated populations of beneficial bacteria and humic acids."
  },
  {
    id: "d122l_028",
    subject: "da-122",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Which green manure crop is widely used in Telangana/South India for incorporation in rice fields and can fix 60–80 kg N ha⁻¹?",
    options: ["Berseem (Trifolium alexandrinum)", "Cluster bean (Cyamopsis tetragonoloba)", "Sesbania (Dhaincha)", "Cowpea (Vigna unguiculata)"],
    correct: 2,
    explanation: "Sesbania (Dhaincha — S. bispinosa and S. aculeata) is the most widely recommended green manure crop for rice fields in South India and Telangana due to rapid growth, high biomass, N fixation (60–80 kg N ha⁻¹), and waterlogging tolerance."
  },
  {
    id: "d122l_029",
    subject: "da-122",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The earthworm population density in vermicomposting beds to produce vermicompost efficiently is typically:",
    options: ["50–100 worms m⁻²", "10,000 worms m⁻²", "10–20 worms m⁻²", "500–1000 worms m⁻² of bed area"],
    correct: 3,
    explanation: "Efficient vermicomposting beds are stocked at 500–1000 worms per m² of bed area (or 1–2 kg live worms per m²). This density ensures rapid processing of organic feedstock."
  },
  {
    id: "d122l_030",
    subject: "da-122",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Mucuna pruriens (velvet bean/cowitch) grown as a cover/green manure crop primarily benefits subsequent crops by:",
    options: ["Increasing soil pH through root exudates in soil science", "Providing potassium and calcium through its deep tap root", "Adding 100–150 kg N ha⁻¹ through biological N fixation and heavy biomass", "Producing allelopathic chemicals that suppress all weeds permanently for soil management"],
    correct: 2,
    explanation: "Mucuna pruriens is a vigorous cover crop that fixes 100–150 kg N ha⁻¹ through Rhizobium symbiosis, produces 20–30 t ha⁻¹ biomass, suppresses weeds, and is widely used in humid tropics for soil improvement."
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 3: Biofertilizers
  // ─────────────────────────────────────────────────────────
  {
    id: "d122l_031",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Rhizobium inoculant is used for which category of crops?",
    options: ["Oil palm and coconut in soil science under standard field conditions", "Leguminous crops (pulses, soybean, groundnut) that form root nodules", "All vegetables regardless of family for soil management", "All cereal crops (rice, wheat, maize) under standard field conditions"],
    correct: 1,
    explanation: "Rhizobium forms symbiotic N₂-fixing nodules exclusively on legume roots (Family Fabaceae). Each Rhizobium species/strain is generally specific to one or a few legume host plants."
  },
  {
    id: "d122l_032",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Azotobacter is a free-living, aerobic nitrogen-fixing bacterium that fixes approximately how much N per hectare per year?",
    options: ["200–300 kg N ha⁻¹ yr⁻¹", "100–150 kg N ha⁻¹ yr⁻¹", "20–30 kg N ha⁻¹ yr⁻¹", "1–2 kg N ha⁻¹ yr⁻¹"],
    correct: 2,
    explanation: "Azotobacter chroococcum fixes approximately 20–30 kg N ha⁻¹ yr⁻¹ under favourable conditions in the rhizosphere. It also produces growth-promoting substances (IAA, gibberellins, cytokinins)."
  },
  {
    id: "d122l_033",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Azospirillum is classified as an associative nitrogen-fixing bacterium because it:",
    options: ["Forms enclosed nodules on cereal roots like Rhizobium under standard field conditions", "Is a strict endophyte living inside plant tissues under standard field conditions", "Lives in close association with plant roots (rhizosphere) without forming nodules", "Lives freely in bulk soil without any plant association under standard field conditions"],
    correct: 2,
    explanation: "Azospirillum (primarily A. brasilense and A. lipoferum) is an associative (rhizospheric) N₂ fixer that colonises root surfaces and intercellular spaces of cereals and grasses without forming nodules. It also produces plant growth regulators."
  },
  {
    id: "d122l_034",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Blue-Green Algae (BGA/cyanobacteria) used as biofertilizer in rice cultivation are characterised by:",
    options: ["Photosynthetic N₂ fixation using heterocysts in species like Anabaena and Nostoc", "Heterotrophic nutrition requiring organic carbon substrate for soil management", "Symbiotic association with rice roots forming nodules in soil science", "Free-living aerobic N fixation in upland soils only"],
    correct: 0,
    explanation: "BGA (Anabaena, Nostoc, Aulosira) are photosynthetic prokaryotes that fix N₂ in specialised cells called heterocysts. They are used in rice paddies contributing 20–30 kg N ha⁻¹ per crop."
  },
  {
    id: "d122l_035",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Phosphate Solubilising Bacteria (PSB) improve phosphorus nutrition by:",
    options: ["Producing organic acids (gluconic, citric) that dissolve insoluble Ca-P and Fe-P compounds", "Increasing soil pH to solubilise P in acid soils under standard field conditions", "Fixing atmospheric P₂ gas and converting it to plant-available forms under standard field conditions", "Forming root nodules that absorb soil P directly under standard field conditions"],
    correct: 0,
    explanation: "PSB (Bacillus megaterium, Pseudomonas striata) solubilise insoluble inorganic phosphates by producing organic acids (primarily gluconic acid) that dissolve Ca-P, Fe-P, and Al-P compounds, releasing plant-available H₂PO₄⁻."
  },
  {
    id: "d122l_036",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The shelf life of carrier-based biofertilizer inoculants (peat or lignite-based) is generally:",
    options: ["1–3 months at room temperature; up to 6 months under refrigeration", "Indefinitely if kept dry in soil science", "3–5 years at ambient temperature for soil management", "1 week only in soil fertility according to soil fertility and water conservation principles"],
    correct: 0,
    explanation: "Standard carrier-based biofertilizers (peat, lignite, or charcoal) have a shelf life of 6 months to 1 year from date of manufacture when stored at 4–10°C, or 3–4 months at room temperature."
  },
  {
    id: "d122l_037",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Vesicular-Arbuscular Mycorrhiza (VAM/AM fungi) improve plant nutrition primarily by:",
    options: ["Fixing atmospheric nitrogen for the host plant in soil science", "Producing antibiotics that kill soil pathogens for soil management", "Extending the effective root surface area through hyphae to absorb P, Zn", "Decomposing soil organic matter to release nutrients in soil fertility"],
    correct: 2,
    explanation: "AM fungi extend plant root reach by producing an external hyphal network (extraradical mycelium) that explores soil beyond the P-depletion zone, absorbing H₂PO₄⁻, Zn²⁺, and water for the host plant."
  },
  {
    id: "d122l_038",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The method of applying biofertilizer inoculant to seeds is called:",
    options: ["Root dipping under standard field conditions", "Seed treatment (seed inoculation)", "Soil drenching under standard field conditions", "Foliar spray under standard field conditions"],
    correct: 1,
    explanation: "Seed inoculation (seed treatment) is the most common method — seeds are mixed with carrier-based inoculant (using rice gruel or jaggery solution as sticker) at the rate of 200–250 g inoculant per 10 kg of seed."
  },
  {
    id: "d122l_039",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The nitrogen-fixing capacity of Rhizobium in symbiosis with soybean under optimum conditions is approximately:",
    options: ["10–20 kg N ha⁻¹ per crop", "50–100 kg N ha⁻¹ per crop", "200–300 kg N ha⁻¹ per crop", "500–600 kg N ha⁻¹ per crop"],
    correct: 2,
    explanation: "Rhizobium–soybean symbiosis can fix 100–300 kg N ha⁻¹ per season under optimal conditions, meeting 60–80% of the crop's nitrogen need. Groundnut symbiosis typically fixes 100–200 kg N ha⁻¹."
  },
  {
    id: "d122l_040",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The recommended carrier material for biofertilizer production that supports maximum microbial survival is:",
    options: ["Clay soil (unsterilised) in soil science", "Neutralised (pH 6.5–7.0) peat or lignite sterilised at 120°C", "Vermicompost mixed with sand for soil management", "Sand (sterile) in soil fertility"],
    correct: 1,
    explanation: "Sterilised peat or lignite (charcoal) neutralised to pH 6.5–7.0 is the best carrier for biofertilizers — it provides good moisture retention, oxygen, and carbon while supporting high microbial populations (10⁸–10⁹ cells g⁻¹)."
  },
  {
    id: "d122l_041",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Biofertilizer inoculated seeds should NOT be mixed with chemical fertilizers at the time of sowing because:",
    options: ["Chemical fertilizers improve inoculant survival according to soil fertility and water conservation principles", "Chemical fertilizers (especially N fertilizers and fungicides) can kill the microorganisms in the inoculant", "There is no contraindication to mixing biofertilizer with chemical fertilizers", "Chemical fertilizers reduce seed germination only for soil management"],
    correct: 1,
    explanation: "High osmotic concentration from soluble fertilizers and toxicity from fungicide seed treatments kill biofertilizer microorganisms. Inoculated seeds should be kept separate from chemical fertilizers and should be sown within hours of inoculation."
  },
  {
    id: "d122l_042",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The enzyme responsible for biological nitrogen fixation (BNF) is:",
    options: ["Nitrate reductase in soil science under standard field conditions", "Nitrogenase (consisting of dinitrogenase and dinitrogenase reductase)", "Nitrogenase is the same as nitrogenase oxidase under standard field conditions", "Urease for soil management as recommended by ICAR guidelines"],
    correct: 1,
    explanation: "Nitrogenase is the enzyme complex (dinitrogenase + dinitrogenase reductase, containing Fe and Mo-Fe proteins) that catalyses N₂ + 8H⁺ + 8e⁻ + 16ATP → 2NH₃ + H₂ + 16ADP + 16Pi. It is highly oxygen-sensitive."
  },
  {
    id: "d122l_043",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "BGA algal application in rice paddies is done at the rate of:",
    options: ["100 kg ha⁻¹", "500 kg ha⁻¹", "10 kg ha⁻¹", "100 g ha⁻¹"],
    correct: 2,
    explanation: "BGA inoculant (algalised soil or flakes) is applied at 10 kg ha⁻¹ to flooded rice paddies within a week of transplanting. The algae multiply rapidly in standing water, fixing 20–30 kg N ha⁻¹ per crop."
  },
  {
    id: "d122l_044",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The minimum viable count of microorganisms per gram of carrier material required for a quality biofertilizer product is:",
    options: ["10¹² cells g⁻¹", "10³ cells g⁻¹", "10⁷–10⁸ cells g⁻¹", "10⁵ cells g⁻¹"],
    correct: 2,
    explanation: "Quality biofertilizer inoculants must contain a minimum of 10⁷–10⁸ viable cells per gram of carrier material (as per BIS standards IS:8268) at the time of application to ensure effective colonisation of the rhizosphere."
  },
  {
    id: "d122l_045",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Azolla used as biofertilizer is incorporated into the rice field by:",
    options: ["Applying dried powdered Azolla as a soil amendment in soil science", "Spraying a suspension on the field for soil management", "Allowing it to grow for 2–3 weeks then incorporating it into the soil", "Mixing with seed at the time of sowing in soil fertility"],
    correct: 2,
    explanation: "Azolla is introduced to the flooded field at 1 t ha⁻¹ (fresh weight) and allowed to multiply for 2–3 weeks, then incorporated as a basal N source, or maintained as a dual crop between rice rows throughout the season."
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 4: Nitrogen Fertilizers
  // ─────────────────────────────────────────────────────────
  {
    id: "d122l_046",
    subject: "da-122",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The nitrogen content of urea fertilizer is approximately:",
    options: ["33%", "20.6%", "82%", "46%"],
    correct: 3,
    explanation: "Urea [CO(NH₂)₂] contains 46% N — the highest N content of any solid N fertilizer. This makes it the most cost-effective N source per unit nitrogen and the most widely used N fertilizer in India."
  },
  {
    id: "d122l_047",
    subject: "da-122",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Ammonium sulphate (AS) contains what percentage of nitrogen and what secondary nutrient?",
    options: ["20.6% N and 24% Sulphur (S)", "15% N and 10% Magnesium (Mg)", "33% N and 18% Calcium (Ca)", "46% N; no secondary nutrient"],
    correct: 0,
    explanation: "Ammonium sulphate [(NH₄)₂SO₄] contains 20.6% N and 24% S. It is acidifying and preferred for alkaline soils and S-deficient crops like oilseeds, pulses, and rice."
  },
  {
    id: "d122l_048",
    subject: "da-122",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Ammonia volatilisation from urea applied to the soil surface is highest when:",
    options: ["Applied to flooded alkaline or calcareous soil surface in hot conditions", "Applied in granular form to dry soil under standard field conditions", "Applied in the evening during cool weather under standard field conditions", "Applied to moist acid soil and immediately incorporated under standard field conditions"],
    correct: 0,
    explanation: "Urea → NH₄⁺ (urease) → NH₃ volatilisation is maximal at high pH (> 7.5), high temperature, high soil moisture, and when urea remains on the surface. Alkaline/calcareous flooded fields are worst-case scenarios."
  },
  {
    id: "d122l_049",
    subject: "da-122",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Calcium Ammonium Nitrate (CAN) fertilizer contains nitrogen in which form(s)?",
    options: ["Urea and ammonium sulphate mixture in soil fertility", "Ammonium (NH₄⁺) only according to soil fertility and water conservation principles", "Nitrate (NO₃⁻) only for soil management according to soil fertility and water conservation principles", "Both ammonium (NH₄⁺) and nitrate (NO₃⁻), with approximately 25–26% total N"],
    correct: 3,
    explanation: "CAN (Calcium Ammonium Nitrate) contains 25–26% N with N in equal parts as NH₄⁺ and NO₃⁻, plus ~10% Ca. The nitrate fraction is immediately available; ammonium is slower-release. It is non-acidifying."
  },
  {
    id: "d122l_050",
    subject: "da-122",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Ammonium chloride (NH₄Cl) fertilizer contains approximately what percentage of nitrogen?",
    options: ["33%", "46%", "20%", "25.5–26%"],
    correct: 3,
    explanation: "Ammonium chloride (NH₄Cl) contains 25.5–26% N. It is preferred for paddy rice in Japan and China but Cl toxicity limits its use for tobacco, potatoes, and other chlorine-sensitive crops."
  },
  {
    id: "d122l_051",
    subject: "da-122",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Slow-release nitrogen fertilizers (SRF) are designed to reduce N losses by:",
    options: ["Applying N in a single large basal dose in soil science under standard field conditions", "Using coatings (sulphur, polymer) or chemical inhibitors that delay N release, matching plant N demand", "Converting N to inert organic form that microbes cannot decompose in soil fertility under standard field conditions", "Mixing urea with high doses of phosphate fertilizers for soil management under standard field conditions"],
    correct: 1,
    explanation: "SRFs use physical coatings (sulphur-coated urea — SCU, polymer-coated urea — PCU) or chemical compounds (urease inhibitors: NBPT; nitrification inhibitors: DCD, DMPP) to delay and extend N release, matching crop uptake."
  },
  {
    id: "d122l_052",
    subject: "da-122",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The nitrification process in soil converts ammonium (NH₄⁺) to nitrate (NO₃⁻) through which organisms?",
    options: ["Autotrophic bacteria (Nitrosomonas: NH₄⁺ → NO₂⁻; Nitrobacter: NO₂⁻ → NO₃⁻)", "Mycorrhizal fungi according to soil fertility and water conservation principles", "Anaerobic heterotrophic bacteria (Clostridium) for soil management", "Actinomycetes in dry soils in soil fertility"],
    correct: 0,
    explanation: "Nitrification is a two-step aerobic process: Nitrosomonas converts NH₄⁺ → NO₂⁻ (nitrite); Nitrobacter converts NO₂⁻ → NO₃⁻ (nitrate). Both are autotrophic bacteria requiring oxygen."
  },
  {
    id: "d122l_053",
    subject: "da-122",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The Neem-coated urea (NCU) policy mandated in India aims to:",
    options: ["Add micronutrients (Zn, B) from neem seeds to the soil", "Improve neem tree cultivation by providing a market for neem oil", "Reduce urea theft for non-agricultural purposes by making it bitter", "Reduce urease activity and slow nitrification, improving N use efficiency by 5–10%"],
    correct: 3,
    explanation: "Neem-coated urea (2% neem oil) has dual benefits: neem oil contains nimbin/nimbidin that inhibit soil urease (reducing NH₃ volatilisation) and Nitrosomonas activity (slowing nitrification), improving NUE by 5–15%."
  },
  {
    id: "d122l_054",
    subject: "da-122",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Deep placement of urea supergranules (USG) in rice paddies improves nitrogen use efficiency by:",
    options: ["Making urea unavailable to weeds growing in standing water in soil science", "Reducing the need for phosphatic fertilizers for soil management according to soil fertility and water conservation principles", "Placing urea in the reduced (anaerobic) zone below the oxidised surface layer, minimising volatilisation and nitrification-denitrification losses", "Increasing the dose applied per crop in soil fertility according to soil fertility and water conservation principles"],
    correct: 2,
    explanation: "USG (1.8–2.7 g briquettes) placed 7–10 cm deep in the reduced anaerobic zone of flooded rice prevents NH₃ volatilisation and the nitrification-denitrification cycle (which occurs only in the oxidised surface layer), improving NUE by 20–30%."
  },
  {
    id: "d122l_055",
    subject: "da-122",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The 'splitting' of nitrogen fertilizer applications into 2–3 doses for cereal crops is recommended to:",
    options: ["Allow mechanical application using different equipment in soil science under standard field conditions", "Reduce the total quantity of N applied per season for soil management under standard field conditions", "Match N supply with crop demand at critical growth stages, reducing leaching and volatilisation losses", "Comply with government regulations on fertilizer sales in soil fertility under standard field conditions"],
    correct: 2,
    explanation: "Split application (basal + top dressing at tillering/panicle initiation) synchronises N availability with peak crop demand, reducing N accumulation in soil when uptake is low and thus cutting leaching, denitrification, and volatilisation losses."
  },
  {
    id: "d122l_056",
    subject: "da-122",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Which nitrogen fertilizer is most suitable for acid soils that need no further acidification?",
    options: ["Ammonium sulphate (acidifying) according to soil fertility and water conservation principles", "Ammonium chloride (acidifying) for soil management according to soil fertility and water conservation principles", "Urea (slightly acidifying after nitrification) in soil fertility", "Calcium ammonium nitrate or calcium nitrate (neutral to slightly alkaline reaction)"],
    correct: 3,
    explanation: "CAN (calcium ammonium nitrate) or calcium nitrate are the preferred N sources for acid soils since they do not acidify the soil further (Ca²⁺ neutralises acidity). Ammonium and urea fertilizers all acidify soil upon nitrification."
  },
  {
    id: "d122l_057",
    subject: "da-122",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Liquid anhydrous ammonia (NH₃) as a nitrogen fertilizer contains what percentage of N?",
    options: ["100%", "46%", "53%", "82%"],
    correct: 3,
    explanation: "Anhydrous ammonia (NH₃) contains 82% N — the highest N concentration of any fertilizer. It is injected into the soil as a pressurised liquid (boiling point –33°C). It is not used in India due to handling hazards."
  },
  {
    id: "d122l_058",
    subject: "da-122",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The physiological reaction of ammonium sulphate in soil is:",
    options: ["Physiologically acid", "Neutral", "Neutral but with S toxicity", "Strongly alkaline"],
    correct: 0,
    explanation: "Ammonium sulphate is physiologically acidic — NH₄⁺ is nitrified to NO₃⁻ + 2H⁺, acidifying the soil. The acid equivalent is 110 kg CaCO₃ per 100 kg of AS. It reduces soil pH over time."
  },
  {
    id: "d122l_059",
    subject: "da-122",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Which form of nitrogen is predominantly absorbed by rice under flooded (anaerobic) paddy conditions?",
    options: ["Ammonium (NH₄⁺)", "Organic N (amino acids)", "Urea directly without hydrolysis", "Nitrate (NO₃⁻)"],
    correct: 0,
    explanation: "Under flooded anaerobic conditions, nitrification is inhibited, so NH₄⁺ accumulates and is the dominant N form in the flooded soil solution. Rice preferentially absorbs NH₄⁺ under these conditions."
  },
  {
    id: "d122l_060",
    subject: "da-122",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Urea is classified as an amide fertilizer because it contains nitrogen in the:",
    options: ["Nitrite (–NO₂) form", "Amide (–CONH₂) form", "Nitrate (–NO₃) form", "Ammonium (–NH₄⁺) form"],
    correct: 1,
    explanation: "Urea [CO(NH₂)₂] is a diamide of carbonic acid — nitrogen is in the amide form (–NH₂). In soil, urease enzyme hydrolyses urea → NH₄⁺ + HCO₃⁻ within 1–3 days at normal temperature."
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 5: Phosphatic Fertilizers
  // ─────────────────────────────────────────────────────────
  {
    id: "d122l_061",
    subject: "da-122",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Single Super Phosphate (SSP) contains what percentage of P₂O₅?",
    options: ["8%", "60%", "44–46%", "16%"],
    correct: 3,
    explanation: "SSP contains 16% P₂O₅ (water-soluble), plus 12% S and 21% Ca. It is manufactured by treating rock phosphate with H₂SO₄: Ca₃(PO₄)₂ + 2H₂SO₄ → Ca(H₂PO₄)₂ + 2CaSO₄."
  },
  {
    id: "d122l_062",
    subject: "da-122",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Di-Ammonium Phosphate (DAP) contains approximately:",
    options: ["16% N and 20% P₂O₅", "46% N and 18% P₂O₅", "18% N and 46% P₂O₅", "10% N and 10% P₂O₅"],
    correct: 2,
    explanation: "DAP [(NH₄)₂HPO₄] contains 18% N and 46% P₂O₅. It is the most widely used phosphatic fertilizer in India, popular for its high nutrient concentration and good handling properties."
  },
  {
    id: "d122l_063",
    subject: "da-122",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Triple Super Phosphate (TSP) contains approximately what percentage of P₂O₅?",
    options: ["16%", "60%", "28%", "44–46%"],
    correct: 3,
    explanation: "TSP (Triple Superphosphate) contains 44–46% P₂O₅ (almost all water-soluble), manufactured by treating rock phosphate with phosphoric acid. It contains no S unlike SSP."
  },
  {
    id: "d122l_064",
    subject: "da-122",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Rock phosphate (RP) is directly applicable to crops mainly in which soil condition?",
    options: ["Neutral to alkaline soils (pH 7–8.5) in soil science", "Acid soils (pH < 5.5) where protons dissolve the RP gradually", "Sandy soils with low clay content in soil fertility", "Waterlogged soils only for soil management"],
    correct: 1,
    explanation: "Direct application of rock phosphate (apatite) is effective only in acid soils (pH < 5.5) because soil protons dissolve the insoluble calcium phosphate, releasing plant-available H₂PO₄⁻. In neutral/alkaline soils, RP dissolution is negligible."
  },
  {
    id: "d122l_065",
    subject: "da-122",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The main advantage of SSP over DAP as a phosphatic fertilizer for sulphur-deficient soils is that SSP:",
    options: ["Contains higher P₂O₅ than DAP in soil fertility as recommended by ICAR guidelines", "Is cheaper per kg of P₂O₅ than DAP in soil science under standard field conditions", "Has neutral pH reaction while DAP is alkaline for soil management under standard field conditions", "Contains 12% sulphur (from gypsum), making it valuable for S-deficient soils and oilseed crops"],
    correct: 3,
    explanation: "SSP contains 12% sulphur (as CaSO₄) and 21% Ca in addition to 16% P₂O₅, making it highly valuable for sulphur-deficient soils and S-requiring crops (oilseeds, pulses, onion, garlic)."
  },
  {
    id: "d122l_066",
    subject: "da-122",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Phosphorus fixation (immobilisation) in acid soils is primarily due to reaction with:",
    options: ["Amorphous iron (Fe) and aluminium (Al) hydroxides", "Soil microorganisms in soil science", "Calcium carbonate (CaCO₃) for soil management", "Organic matter in soil fertility"],
    correct: 0,
    explanation: "In acid soils, applied H₂PO₄⁻ reacts rapidly with Fe(OH)₃ and Al(OH)₃ (and their amorphous forms) to form insoluble Fe-P and Al-P compounds, strongly reducing P availability — a major problem in Alfisols."
  },
  {
    id: "d122l_067",
    subject: "da-122",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Band placement (row application) of phosphatic fertilizers is preferred over broadcasting because:",
    options: ["Band application reduces contact with soil and therefore reduces P fixation, improving efficiency", "Band application is easier and faster than broadcasting for soil management", "Band application increases the total dose applied in soil science", "Band application prevents P leaching in sandy soils in soil fertility"],
    correct: 0,
    explanation: "Band placement near the seed row reduces the volume of soil that comes in contact with applied P, reducing adsorption/fixation and placing P close to emerging roots. This improves P use efficiency by 20–40%."
  },
  {
    id: "d122l_068",
    subject: "da-122",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Mussoorie rock phosphate (MRP) is a partially acidulated rock phosphate with P₂O₅ content of approximately:",
    options: ["8%", "44%", "20%", "16%"],
    correct: 2,
    explanation: "Mussoorie Rock Phosphate from Uttarakhand contains approximately 20% P₂O₅. It is partially soluble and suitable for direct application to acid soils as a slow-release P source."
  },
  {
    id: "d122l_069",
    subject: "da-122",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The main chemical form of P taken up by plants from soil solution is:",
    options: ["Organic phosphate esters directly in soil science", "H₂PO₄⁻ (dihydrogen phosphate) at low pH and HPO₄²⁻ at higher pH", "H₃PO₄ (phosphoric acid) in soil fertility", "PO₄³⁻ (phosphate) at all pH values for soil management"],
    correct: 1,
    explanation: "Plants absorb P primarily as H₂PO₄⁻ (monohydrogen phosphate) at soil pH 5–7, and as HPO₄²⁻ at higher pH. H₂PO₄⁻ is more readily absorbed. PO₄³⁻ predominates only above pH 9."
  },
  {
    id: "d122l_070",
    subject: "da-122",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The concept of 'residual effect' of phosphatic fertilizers in soil refers to:",
    options: ["P in crop residues incorporated into soil in soil science under standard field conditions", "P remaining in unfertilised subsoil below the root zone for soil management under standard field conditions", "Carryover of soil P fixed from previous season applications becoming available to subsequent crops", "P toxicity remaining in soil after excessive application in soil fertility under standard field conditions"],
    correct: 2,
    explanation: "Residual P refers to previously applied P that was fixed/adsorbed in soil and becomes partially available to subsequent crops. Continuous P application builds up a labile P pool with residual effects lasting several seasons."
  },
  {
    id: "d122l_071",
    subject: "da-122",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Which of the following is the most important agronomic advantage of using Phosphate Solubilising Microorganisms (PSM) as biofertilizers?",
    options: ["They solubilise fixed soil phosphates and increase P availability without additional P fertilizer cost", "They produce growth hormones only in soil science under tropical agricultural conditions", "They fix atmospheric nitrogen for the crop for soil management under standard field conditions", "They produce antibiotics to control soil-borne diseases in soil fertility under standard field conditions"],
    correct: 0,
    explanation: "PSM (Bacillus megaterium var. phosphaticum, Pseudomonas striata) solubilise insoluble Ca-P, Fe-P, and Al-P via organic acid production, potentially reducing P fertilizer requirement by 25–30%."
  },
  {
    id: "d122l_072",
    subject: "da-122",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The initial rapid immobilisation of water-soluble P fertilizer (e.g., DAP) in soil upon application is termed:",
    options: ["P mineralisation", "P leaching", "P fixation (retention)", "P volatilisation"],
    correct: 2,
    explanation: "P fixation (phosphate retention) is the rapid adsorption of soluble H₂PO₄⁻ onto clay and oxide surfaces and precipitation as insoluble Fe-P, Al-P (acid soils) or Ca-P (alkaline soils) compounds, reducing plant availability."
  },
  {
    id: "d122l_073",
    subject: "da-122",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Fertigation-grade water-soluble phosphatic fertilizer most suitable for drip irrigation systems is:",
    options: ["SSP (Single Superphosphate) in soil science under standard field conditions", "Mono-ammonium phosphate (MAP, 12:61:0) or Mono-potassium phosphate (MKP, 0:52:34)", "Rock phosphate slurry for soil management under standard field conditions", "DAP granules dissolved in water under tropical agricultural conditions"],
    correct: 1,
    explanation: "Fertigation-grade P fertilizers for drip systems must be fully water-soluble and non-clogging. MAP (12% N, 61% P₂O₅) and MKP (52% P₂O₅, 34% K₂O) are widely used. SSP and DAP contain insoluble fractions that clog drip systems."
  },
  {
    id: "d122l_074",
    subject: "da-122",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The critical P concentration in plant tissue (leaf P) for most cereal crops at maximum economic yield is approximately:",
    options: ["0.2–0.3% P in dry matter", "0.05% P in dry matter", "5.0% P in dry matter", "1.0–2.0% P in dry matter"],
    correct: 0,
    explanation: "The sufficiency range for P in plant tissue of most cereals is 0.2–0.4% P in dry matter. Below 0.2% indicates P deficiency. Tissue testing complements soil testing for P nutritional diagnosis."
  },
  {
    id: "d122l_075",
    subject: "da-122",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "In Telangana, the prevalent Alfisols (red soils) have high P fixation capacity because they are rich in:",
    options: ["Free iron (Fe₂O₃) and aluminium (Al₂O₃) oxides from intense weathering", "Montmorillonite clay with high CEC in soil science under standard field conditions", "Organic matter with high phosphatase activity under standard field conditions", "CaCO₃ and Mg²⁺ for soil management under standard field conditions"],
    correct: 0,
    explanation: "Alfisols (red soils) of Telangana are strongly weathered, rich in Fe₂O₃ (hematite, goethite) and Al₂O₃ oxides that have high P adsorption capacity, making P management critical in these soils."
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 6: Potassic Fertilizers
  // ─────────────────────────────────────────────────────────
  {
    id: "d122l_076",
    subject: "da-122",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Muriate of Potash (MOP) contains approximately what percentage of K₂O?",
    options: ["80%", "60%", "50%", "33%"],
    correct: 1,
    explanation: "Muriate of Potash (KCl — potassium chloride) contains 60% K₂O. It is the cheapest and most widely used potassic fertilizer globally and in India."
  },
  {
    id: "d122l_077",
    subject: "da-122",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Sulphate of Potash (SOP) is preferred over MOP for which crops?",
    options: ["Chlorine-sensitive crops: tobacco, potato, tomato, grapes, and many fruits", "Rice and wheat (tolerant of Cl⁻) under standard field conditions", "Cotton and sunflower (require high Cl for fibre quality) under standard field conditions", "All pulse crops regardless of Cl sensitivity under standard field conditions"],
    correct: 0,
    explanation: "SOP (K₂SO₄, 50% K₂O, 18% S) is preferred for Cl-sensitive crops (tobacco — Cl degrades burning quality; potato — Cl reduces starch content; grapes — Cl reduces fruit quality). SOP also supplies S."
  },
  {
    id: "d122l_078",
    subject: "da-122",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Potassium nitrate (KNO₃) as a fertilizer supplies nutrients in the ratio:",
    options: ["18% N, 46% K₂O", "0% N, 60% K₂O", "13% N, 0% K₂O", "13% N, 44% K₂O (no P)"],
    correct: 3,
    explanation: "Potassium nitrate (KNO₃ — saltpeter) contains 13% N (as NO₃⁻) and 44% K₂O. It is a premium Cl-free N+K source used in fertigation for high-value horticulture crops."
  },
  {
    id: "d122l_079",
    subject: "da-122",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "The phenomenon of 'potassium luxury consumption' is most pronounced in:",
    options: ["Root crops like potato and sugar beet under standard field conditions", "Rice and wheat under high N application under standard field conditions", "Legumes that preferentially absorb K over N under standard field conditions", "Grasses and forages where K content far exceeds plant requirements"],
    correct: 3,
    explanation: "Grasses and forages (particularly legume hays) show luxury K consumption — absorbing far more K than needed for maximum yield when soil K is abundant. This 'dilution effect' can induce Mg and Ca deficiencies in grazing animals."
  },
  {
    id: "d122l_080",
    subject: "da-122",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Which of the following crops has the highest potassium requirement among major crops?",
    options: ["Rice", "Potato and banana", "Groundnut", "Wheat"],
    correct: 1,
    explanation: "Potato and banana have very high K requirements — potato absorbs 200–400 kg K₂O ha⁻¹ per crop and K is critical for starch synthesis, tuber quality, and disease resistance. Sugarcane and cotton are also high K users."
  },
  {
    id: "d122l_081",
    subject: "da-122",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "In most Indian agricultural soils, potassium reserves are considered adequate primarily because:",
    options: ["Indian crops have very low potassium requirements in soil science in the context of integrated farming systems", "Indian soils are primarily sandy with high leaching rates releasing K for soil management under standard field conditions", "Indian farmers apply excessive K fertilizers traditionally in soil fertility under tropical agricultural conditions", "Many Indian soils are derived from K-rich parent materials (basalt, granite, mica-bearing rocks) and contain illite/vermiculite clays"],
    correct: 3,
    explanation: "Many Indian soils (especially Vertisols and Inceptisols) are derived from K-rich parent rocks and contain K-bearing minerals (illite, mica) with total K of 1–2%. However, with intensive cropping, available K is being depleted in many regions."
  },
  {
    id: "d122l_082",
    subject: "da-122",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Potassium deficiency symptoms in plants are characterised by:",
    options: ["Stunted roots with poor branching according to soil fertility and water conservation principles", "Marginal and tip scorch (necrosis) of older leaves, weak stems, and poor grain filling", "Yellowing of young leaves starting at the leaf base", "Purple discolouration of all leaves for soil management according to soil fertility and water conservation principles"],
    correct: 1,
    explanation: "K deficiency: tip and marginal scorch of older leaves (K is mobile and remobilised), weak lodging-prone stems, poor root development, reduced drought tolerance, and small poorly filled grains/fruits."
  },
  {
    id: "d122l_083",
    subject: "da-122",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Potassium leaching from soil is significant mainly in:",
    options: ["Coarse-textured sandy soils with low CEC and high rainfall", "Heavy clay soils with high CEC", "Vertisols with high montmorillonite content for soil management", "Dry Alfisols of Telangana in soil science"],
    correct: 0,
    explanation: "K leaching is important in light-textured soils (sandy, sandy loam) with low CEC and high rainfall. In such soils, applied K is not held by exchange sites and can leach below the root zone."
  },
  {
    id: "d122l_084",
    subject: "da-122",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Potassium in plant physiology activates more than how many enzymes?",
    options: ["200", "30", "10", "60"],
    correct: 3,
    explanation: "Potassium is a cofactor for over 60 enzymes in plant metabolism, including those involved in starch synthesis, protein synthesis, and energy metabolism (ATP synthase). It is unique among macronutrients in this cofactor role."
  },
  {
    id: "d122l_085",
    subject: "da-122",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Soil potassium exists in four forms. Which form is immediately available to plants?",
    options: ["Exchangeable K adsorbed on CEC sites", "Non-exchangeable (fixed) K in clay interlayers", "Solution K (K⁺ in soil water)", "Structural K in primary minerals (feldspars, micas)"],
    correct: 2,
    explanation: "Solution K (K⁺ in soil solution) is the only immediately plant-available form (typically 0.1–1 mM). Exchangeable K is the main 'buffer' reservoir. Non-exchangeable and mineral K release slowly over seasons to years."
  },
  {
    id: "d122l_086",
    subject: "da-122",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "The recommended dose of MOP (60% K₂O) to supply 60 kg K₂O ha⁻¹ is:",
    options: ["100 kg MOP ha⁻¹", "120 kg MOP ha⁻¹", "60 kg MOP ha⁻¹", "36 kg MOP ha⁻¹"],
    correct: 0,
    explanation: "Dose of MOP = (Required K₂O / % K₂O in MOP) × 100 = (60 / 60) × 100 = 100 kg MOP ha⁻¹. This is a standard calculation in fertilizer recommendation."
  },
  {
    id: "d122l_087",
    subject: "da-122",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Potassium improves crop quality in which of the following specific ways?",
    options: ["Increases N₂ fixation in legume nodules as recommended by ICAR guidelines", "Improves sugar content, starch quality, oil content, fibre strength, and fruit colour", "Increases protein content by providing an N source under standard field conditions", "Increases chlorophyll content by being part of the porphyrin ring under standard field conditions"],
    correct: 1,
    explanation: "K improves quality parameters: sugar content in sugarcane/fruits, starch in potato, oil in oilseeds, fibre strength in cotton, fruit colour (apple, tomato), vitamin C, and shelf life — hence it is called the 'quality nutrient'."
  },
  {
    id: "d122l_088",
    subject: "da-122",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "The critical limit of exchangeable K in soil for cereal crops is approximately:",
    options: ["< 1000 kg K₂O ha⁻¹", "< 110–150 kg K₂O ha⁻¹", "< 10 kg K₂O ha⁻¹", "< 400 kg K₂O ha⁻¹"],
    correct: 1,
    explanation: "The critical level for exchangeable soil K is 110–150 kg K₂O ha⁻¹ (approximately 0.2 cmol(+) kg⁻¹ or 78 mg kg⁻¹ K) in most ICAR recommendations. Soils below this respond to K fertilization."
  },
  {
    id: "d122l_089",
    subject: "da-122",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "India imports most of its potash requirement as MOP from which countries?",
    options: ["USA and Australia under standard field conditions", "Bangladesh and Sri Lanka under standard field conditions", "Canada (Saskatchewan), Russia, Belarus, and Jordan", "China and Pakistan under standard field conditions"],
    correct: 2,
    explanation: "India has no significant domestic potash deposits and imports nearly 100% of its MOP requirement from Canada (Canpotex), Russia, Belarus, and Jordan. This makes K the most import-dependent nutrient for Indian agriculture."
  },
  {
    id: "d122l_090",
    subject: "da-122",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Wood ash is a traditional source of potash because it contains:",
    options: ["K₂CO₃ (potassium carbonate) — approximately 5–10% K₂O equivalent", "KCl (muriate of potash) from soil salts under standard field conditions", "K₂SO₄ from organic sulphur compounds under standard field conditions", "KNO₃ (potassium nitrate) from plant nitrogen under standard field conditions"],
    correct: 0,
    explanation: "Wood ash contains K₂CO₃ (potash), providing 5–10% K₂O along with Ca and Mg carbonates. It has an alkaline reaction and can substitute for lime in acid soils while providing K. It is a traditional fertilizer in India."
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 7: Complex & Mixed Fertilizers
  // ─────────────────────────────────────────────────────────
  {
    id: "d122l_091",
    subject: "da-122",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "A complex fertilizer differs from a mixed fertilizer in that:",
    options: ["Complex fertilizers contain only one nutrient; mixed fertilizers contain two or more in soil science under standard field conditions", "Mixed fertilizers always have higher nutrient content than complex fertilizers for soil management under standard field conditions", "In complex fertilizers, nutrients are chemically combined in each granule; in mixed fertilizers, separate nutrient particles are blended", "Complex fertilizers are produced only by government factories in soil fertility in irrigated crop production systems"],
    correct: 2,
    explanation: "Complex (compound) fertilizers: each granule contains two or more nutrients chemically combined (e.g., DAP, NPK complexes). Mixed fertilizers: separate fertilizer particles of different materials physically blended together."
  },
  {
    id: "d122l_092",
    subject: "da-122",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "The fertilizer grade '17:17:17' represents a fertilizer containing:",
    options: ["17% urea, 17% SSP, 17% MOP", "17 kg N, 17 kg P, 17 kg K per bag", "17% N, 17% P, 17% S", "17% N, 17% P₂O₅, 17% K₂O in equal proportions"],
    correct: 3,
    explanation: "Fertilizer grades express N:P₂O₅:K₂O ratios. '17:17:17' means 17% N, 17% P₂O₅, and 17% K₂O by weight — a balanced NPK complex often used as a starter or general-purpose fertilizer."
  },
  {
    id: "d122l_093",
    subject: "da-122",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "The complex fertilizer grade '20:20:0' is commonly called:",
    options: ["Nitrophosphate or ammonium phosphate (NP complex)", "Potash-phosphate complex in soil science", "Urea-DAP mixture for soil management", "CAN-SSP blend in soil fertility"],
    correct: 0,
    explanation: "20:20:0 (20% N + 20% P₂O₅) is an N-P complex fertilizer (e.g., ammonium phosphate type or nitrophosphate), used as a basal dose for crops where K is not limiting."
  },
  {
    id: "d122l_094",
    subject: "da-122",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "The main advantage of using a balanced complex NPK fertilizer over separate urea + SSP + MOP applications is:",
    options: ["Convenience of single application, uniform distribution of all nutrients, and often higher nutrient concentration", "Complex fertilizers are always less expensive than separate fertilizers in soil science", "Complex fertilizers always contain higher N than separate sources for soil management", "Complex fertilizers contain organic matter unlike individual fertilizers in soil fertility"],
    correct: 0,
    explanation: "Complex fertilizers offer: single-trip application saving labour, uniform nutrient distribution per granule, higher total nutrient content (less filler), and no segregation of nutrients during handling — key advantages in precision agriculture."
  },
  {
    id: "d122l_095",
    subject: "da-122",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Fertilizer grade '14:35:14' is commonly used as a:",
    options: ["Slow-release K fertilizer for perennial crops in soil science", "Top dressing N fertilizer at maximum tillering", "Basal starter fertilizer for crops requiring high P at establishment", "Foliar spray for micronutrient correction for soil management"],
    correct: 2,
    explanation: "14:35:14 (high-P grade) is a basal starter fertilizer providing high P for root establishment and seedling development, along with balanced N and K. It is used at sowing/transplanting when P demand is highest."
  },
  {
    id: "d122l_096",
    subject: "da-122",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Fertigation-grade NPK fertilizers for drip irrigation must meet which critical requirement?",
    options: ["Must be fully water-soluble with no chloride residue", "Must contain organic matter under standard field conditions", "Must be acidic to pH < 4 under standard field conditions", "Must be slow-release only under standard field conditions"],
    correct: 0,
    explanation: "Fertigation-grade fertilizers must be 100% water-soluble to prevent drip emitter clogging, and ideally Cl-free for sensitive crops. Common grades include 19:19:19, 13:0:45, 0:52:34 (MKP), etc."
  },
  {
    id: "d122l_097",
    subject: "da-122",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "The NPK fertilizer '28:28:0' is manufactured by which process?",
    options: ["Nitrophosphate process (direct acidulation of rock phosphate with nitric acid)", "Blending urea + DAP in 1:1 ratio in irrigated crop production systems", "Steam granulation of ammonium phosphate with KCl under standard field conditions", "Compaction of potash with urea in soil science under standard field conditions"],
    correct: 0,
    explanation: "The nitrophosphate (Odda) process treats rock phosphate with HNO₃ to produce calcium nitrate + phosphoric acid, which are then ammoniated to produce nitrophosphate fertilizers with both N and P."
  },
  {
    id: "d122l_098",
    subject: "da-122",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "The term 'filler' in mixed fertilizer preparation refers to:",
    options: ["Coating material applied to granules in soil science under standard field conditions", "Micronutrient supplement added at low doses in soil fertility under standard field conditions", "Active nutrient material added to the blend for soil management under standard field conditions", "Inert material (sand, gypsum, dolomite) added to achieve the desired grade and weight"],
    correct: 3,
    explanation: "Filler materials (sand, gypsum, dolomite) are added to fertilizer blends to make up the weight when active nutrient materials do not fill the required bag weight for the desired grade."
  },
  {
    id: "d122l_099",
    subject: "da-122",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Bulk blending of fertilizers (BB fertilizer) requires which compatibility condition?",
    options: ["Components must be liquid for uniform mixing in irrigated crop production systems", "Component fertilizers must have similar particle size to prevent segregation during handling", "All fertilizer materials must have identical chemical composition under standard field conditions", "Temperature must be maintained at exactly 25°C during blending under standard field conditions"],
    correct: 1,
    explanation: "For BB fertilizers, component prills/granules must have similar size (2–4 mm diameter and similar density) to prevent size-segregation during transport and spreading — which would result in non-uniform nutrient distribution."
  },
  {
    id: "d122l_100",
    subject: "da-122",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "The main limitation of urea + SSP physical mixture compared to complex NPK fertilizer is:",
    options: ["Urea+SSP mixture is more expensive than complex NPK in soil science", "Urea degrades SSP into toxic compounds for soil management", "SSP and urea cannot be applied to the same field", "Mixing urea with SSP can cause hygroscopic caking and N loss due to reaction"],
    correct: 3,
    explanation: "Urea + SSP mixture becomes hygroscopic and sticky (caking) because urea reacts with monocalcium phosphate in SSP in the presence of moisture, releasing NH₃ and causing N loss. They should not be mixed in advance."
  },
  {
    id: "d122l_101",
    subject: "da-122",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Which fertilizer combination can be mixed and stored without compatibility issues?",
    options: ["DAP + calcium nitrate", "MOP (KCl) + SSP", "Urea + SSP", "Ammonium nitrate + Urea"],
    correct: 1,
    explanation: "MOP and SSP are compatible for mixing. Problematic combinations: Urea+SSP (caking); AN+Urea (dangerous eutectic mixture); DAP+calcium nitrate (release of free ammonia)."
  },
  {
    id: "d122l_102",
    subject: "da-122",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "The concept of 'fertilizer ratio' in crop nutrition refers to:",
    options: ["The moisture content of granular fertilizers in soil science", "The ratio of price between different fertilizers for soil management", "The relative proportions of N:P₂O₅:K₂O required by a specific crop at a specific growth stage", "The rate of nutrient release from slow-release fertilizers in soil fertility"],
    correct: 2,
    explanation: "Fertilizer ratio is the relative proportion of N:P₂O₅:K₂O recommended for a crop. For example, rice needs 4:2:1 ratio; cotton needs 2:1:1. Selecting a complex fertilizer with the correct ratio minimises waste and cost."
  },
  {
    id: "d122l_103",
    subject: "da-122",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "For split application of complex NPK fertilizers, which grade is preferred as a top-dressing application for rice at tillering?",
    options: ["0:0:60 (potash only)", "28:0:0 or high-N urea-based grade", "10:26:26 (high P+K complex)", "14:35:14 (high P for root growth)"],
    correct: 1,
    explanation: "At the tillering stage, rice needs N for vegetative growth and tiller production. A high-N complex or urea is used as top dressing. Basal doses provide P and K; N top dressings are given at tillering and panicle initiation."
  },
  {
    id: "d122l_104",
    subject: "da-122",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Which of the following is an example of a water-soluble NPK grade used in fertigation for vegetable crops?",
    options: ["19:19:19 (fully water-soluble NPK complex)", "14:35:14 (conventional granular complex)", "17:17:17 (standard granular NPK)", "20:20:0 (nitrophosphate)"],
    correct: 0,
    explanation: "19:19:19 is a fully water-soluble NPK complex available as crystalline powder, widely used in fertigation and foliar sprays for vegetable and horticultural crops. Conventional granular grades contain insoluble fractions."
  },
  {
    id: "d122l_105",
    subject: "da-122",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "The advantage of complex fertilizers in broadcasting for paddy over separate fertilizer application is that they:",
    options: ["Are cheaper per kg than separate fertilizers according to soil fertility and water conservation principles", "Apply all nutrients uniformly per unit area, ensuring every plant receives balanced nutrition without risk of uneven application", "Contain organic matter not found in separate fertilizers for soil management", "Require no calibration of the applicator equipment in soil fertility according to soil fertility and water conservation principles"],
    correct: 1,
    explanation: "Each granule of a complex fertilizer contains all nutrients in fixed ratio, so broadcasting gives uniform nutrient distribution. Separately applied fertilizers can segregate, leading to uneven nutrient distribution across the field."
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 8: Micronutrient Fertilizers
  // ─────────────────────────────────────────────────────────
  {
    id: "d122l_106",
    subject: "da-122",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The most commonly used zinc fertilizer in India and its zinc content is:",
    options: ["Zinc oxide (ZnO) containing 80% Zn under standard field conditions", "Zinc EDTA chelate containing 12% Zn under standard field conditions", "Zinc sulphate heptahydrate (ZnSO₄·7H₂O) containing 21% Zn", "Zinc carbonate containing 52% Zn under standard field conditions"],
    correct: 2,
    explanation: "Zinc sulphate heptahydrate (ZnSO₄·7H₂O, 21% Zn) is the standard and most widely used Zn fertilizer in India. The monohydrate form (ZnSO₄·H₂O) contains 33% Zn and is also available."
  },
  {
    id: "d122l_107",
    subject: "da-122",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The recommended soil application rate of ZnSO₄ for Zn-deficient soils is:",
    options: ["2.5 kg ha⁻¹", "10 kg ha⁻¹", "25 kg ha⁻¹", "100 kg ha⁻¹"],
    correct: 2,
    explanation: "The standard recommendation for ZnSO₄ (21% Zn) soil application is 25 kg ha⁻¹ for Zn-deficient soils. Subsequent crops can be maintained with 12.5 kg ha⁻¹ every alternate crop due to residual effect."
  },
  {
    id: "d122l_108",
    subject: "da-122",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Ferrous sulphate (FeSO₄·7H₂O) contains what percentage of iron?",
    options: ["30%", "7%", "56%", "19%"],
    correct: 3,
    explanation: "Ferrous sulphate heptahydrate (FeSO₄·7H₂O) contains approximately 19% Fe (19.7%). It is used as a foliar spray (0.5–1.0%) for Fe chlorosis correction in alkaline soils."
  },
  {
    id: "d122l_109",
    subject: "da-122",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Borax (sodium tetraborate, Na₂B₄O₇·10H₂O) contains approximately what percentage of boron?",
    options: ["17%", "5%", "11%", "30%"],
    correct: 2,
    explanation: "Borax (Na₂B₄O₇·10H₂O) contains 11% B. Boric acid (H₃BO₃) contains 17% B. The recommended soil application of borax is 10–15 kg ha⁻¹ for B-deficient soils."
  },
  {
    id: "d122l_110",
    subject: "da-122",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Chelated micronutrient fertilizers (e.g., Zn-EDTA) are preferred over inorganic salts for:",
    options: ["Foliar spray and fertigation in high pH soils where inorganic forms would precipitate", "Storage — chelates last longer in bags than inorganic salts", "Soil broadcast application in acid soils where inorganic salts are more stable", "Organic farming where inorganic compounds are not allowed"],
    correct: 0,
    explanation: "Chelated micronutrients (EDTA, DTPA, EDDHA chelates) remain soluble and plant-available even at high pH, ideal for foliar sprays and fertigation systems. In soil, chelates resist precipitation and fixation better than inorganic salts."
  },
  {
    id: "d122l_111",
    subject: "da-122",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The recommended concentration of ZnSO₄ for foliar spray to correct Zn deficiency is:",
    options: ["0.5%", "20%", "5%", "0.05%"],
    correct: 0,
    explanation: "Foliar spray of 0.5% ZnSO₄ solution (plus 0.25% slaked lime to prevent leaf burn) is the standard recommendation for correcting Zn deficiency — 3–4 sprays at 10-day intervals."
  },
  {
    id: "d122l_112",
    subject: "da-122",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Manganese sulphate (MnSO₄) for correction of Mn deficiency is most effective when applied as:",
    options: ["Combined with lime application according to soil fertility and water conservation principles", "Foliar spray (0.5–1.0% MnSO₄) since soil application is often ineffective in alkaline soils", "Soil broadcast at high rates (100 kg ha⁻¹)", "Seed treatment only for soil management according to soil fertility and water conservation principles"],
    correct: 1,
    explanation: "Soil-applied Mn is rapidly oxidised to unavailable MnO₂ in alkaline soils. Foliar spray of 0.5–1.0% MnSO₄ is more effective and economical for correcting Mn deficiency in wheat, oats, and legumes."
  },
  {
    id: "d122l_113",
    subject: "da-122",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The micronutrient with the narrowest range between deficiency and toxicity (making it most dangerous to over-apply) is:",
    options: ["Iron (Fe)", "Boron (B)", "Manganese (Mn)", "Zinc (Zn)"],
    correct: 1,
    explanation: "Boron has the narrowest margin between deficiency (< 0.5 mg kg⁻¹ soil) and toxicity (> 5 mg kg⁻¹ soil). Over-application of borax easily causes B toxicity — tip and marginal leaf scorch ('Marginal scorch')."
  },
  {
    id: "d122l_114",
    subject: "da-122",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Copper sulphate (CuSO₄·5H₂O — blue vitriol) contains approximately what percentage of copper?",
    options: ["80%", "45%", "7%", "25%"],
    correct: 3,
    explanation: "Copper sulphate pentahydrate (CuSO₄·5H₂O) contains approximately 25% Cu. It is applied at 10–25 kg ha⁻¹ to Cu-deficient soils or as 0.2% foliar spray for reclamation disease in cereals."
  },
  {
    id: "d122l_115",
    subject: "da-122",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Sodium molybdate (Na₂MoO₄·2H₂O) for Mo nutrition is applied at very low rates because:",
    options: ["It is very expensive and imported in soil science", "It rapidly leaches from soil before crop uptake in soil fertility", "It is toxic to microorganisms at high rates for soil management", "Mo is required in extremely small amounts"],
    correct: 3,
    explanation: "Molybdenum is the micronutrient required in the smallest quantity by plants (< 1 mg kg⁻¹ plant dry matter). Seed treatment with 20–50 g Na₂MoO₄ ha⁻¹ or foliar spray of 0.1% is usually adequate for Mo deficiency correction."
  },
  {
    id: "d122l_116",
    subject: "da-122",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Micronutrient fertilizers are most efficiently applied through:",
    options: ["Seed treatment, soil banding, or foliar spray depending on the nutrient and crop", "Broadcasting large quantities on the soil surface in soil science", "Deep ploughing to incorporate into the subsoil for soil management", "Mixing with irrigation water in flood irrigation systems in soil fertility"],
    correct: 0,
    explanation: "Micronutrient application methods: seed treatment (Zn, Mo, B) — most economical; soil banding (Zn, Fe); foliar spray (Fe, Mn, Zn, B) — most efficient for correction; fertigation (chelated forms) for drip-irrigated crops."
  },
  {
    id: "d122l_117",
    subject: "da-122",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The most widespread micronutrient deficiency in Indian soils affecting the most crop area is:",
    options: ["Zinc (Zn)", "Copper (Cu)", "Boron (B)", "Iron (Fe)"],
    correct: 0,
    explanation: "Zinc deficiency is the most widespread micronutrient deficiency in Indian soils — affecting approximately 49% of soil samples tested. It is most critical for rice, wheat, maize, and sorghum production."
  },
  {
    id: "d122l_118",
    subject: "da-122",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Zinc sulphate heptahydrate (ZnSO₄·7H₂O) seedling root dip concentration and duration for rice transplanting is:",
    options: ["10% ZnSO₄ for 30 minutes in soil science", "0.5% ZnSO₄ for 5 minutes for soil management", "2% ZnSO₄ (or 4% ZnO) for 10–12 hours before transplanting", "0.05% ZnSO₄ for 1 hour in soil fertility"],
    correct: 2,
    explanation: "Rice seedling root dip: 2% ZnSO₄ solution (or 4% ZnO suspension) for 10–12 hours before transplanting effectively prevents Khaira disease in Zn-deficient soils."
  },
  {
    id: "d122l_119",
    subject: "da-122",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Fe-EDDHA chelate is more effective than Fe-EDTA or FeSO₄ for iron nutrition in alkaline soils because:",
    options: ["EDDHA contains more Fe per molecule than EDTA in soil fertility", "EDDHA provides Fe through leaf absorption only according to soil fertility and water conservation principles", "EDDHA is cheaper than EDTA for soil management according to soil fertility and water conservation principles", "EDDHA chelate remains stable and soluble up to pH 10–11, while EDTA releases Fe above pH 7.5"],
    correct: 3,
    explanation: "Fe-EDDHA is the most stable Fe chelate at high pH (stable up to pH 10), while Fe-EDTA releases Fe³⁺ above pH 7.5 where it precipitates as Fe(OH)₃. EDDHA is the preferred Fe source for drip-irrigated crops on calcareous soils."
  },
  {
    id: "d122l_120",
    subject: "da-122",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The soil application rate of borax (11% B) for B-deficient soils for most crops is:",
    options: ["200 kg ha⁻¹", "50 kg ha⁻¹", "5–10 kg ha⁻¹", "1 kg ha⁻¹"],
    correct: 2,
    explanation: "Borax soil application: 10–15 kg ha⁻¹ for B-deficient soils. Due to the narrow B deficiency-toxicity range, doses must be carefully calibrated. Sunflower, groundnut, and rapeseed are high-B requiring crops."
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 9: Integrated Nutrient Management (INM)
  // ─────────────────────────────────────────────────────────
  {
    id: "d122l_121",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Integrated Nutrient Management (INM) is defined as:",
    options: ["Using only biofertilizers to fix atmospheric nitrogen in soil science", "Replacing all chemical fertilizers with organic manures for soil management", "Maintenance and adjustment of soil fertility and nutrient supply to achieve the optimum yield", "Applying maximum doses of chemical fertilizers with minimum organic matter in soil fertility"],
    correct: 2,
    explanation: "INM integrates all available nutrient sources — organic manures (FYM, compost, crop residues), inorganic fertilizers, and biological sources (biofertilizers, green manures) — to maintain soil health and optimise crop productivity sustainably."
  },
  {
    id: "d122l_122",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The primary reason for advocating INM over sole chemical fertilizer use is:",
    options: ["INM maintains soil organic matter, improves soil health", "Chemical fertilizers cannot supply micronutrients for soil management", "Chemical fertilizers are banned in India in soil fertility", "Organic manures provide higher yields than chemical fertilizers alone in soil science"],
    correct: 0,
    explanation: "Long-term sole chemical fertilizer use degrades soil organic matter, disrupts soil biology, causes secondary nutrient deficiencies, and reduces fertilizer efficiency. INM maintains SOM, soil structure, and biodiversity while reducing input costs."
  },
  {
    id: "d122l_123",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "In INM, the recommended substitution of chemical N fertilizer by FYM typically ranges from:",
    options: ["100%", "25–50%", "75–90%", "5–10%"],
    correct: 1,
    explanation: "INM typically recommends substituting 25–50% of the recommended chemical N dose with equivalent N from organic sources (FYM, compost, green manure, biofertilizers), providing both nutrients and organic matter benefits."
  },
  {
    id: "d122l_124",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Site-Specific Nutrient Management (SSNM) concept was developed for which crop and by which organisation?",
    options: ["Wheat — CIMMYT (Mexico) in soil science under standard field conditions", "Cotton — CICR (India) for soil management under standard field conditions", "Rice — IRRI (International Rice Research Institute, Philippines)", "Maize — Pioneer Hi-Bred (USA) under standard field conditions"],
    correct: 2,
    explanation: "SSNM was developed by IRRI for irrigated rice, using the 'nutrient manager' decision support tool that accounts for indigenous nutrient supply (IAS) from soil, water, and organic inputs to recommend site-specific fertilizer doses."
  },
  {
    id: "d122l_125",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The 'System of Rice Intensification' (SRI) is associated with INM in that it advocates:",
    options: ["Reduced plant population, young seedling transplanting, and use of organic inputs with alternating wetting-drying irrigation", "High-density transplanting with 5 seedlings per hill in soil science under tropical agricultural conditions", "Maximum chemical fertilizer application with continuous flooding for soil management under standard field conditions", "No tillage paddy cultivation under zero-water conditions in soil fertility under standard field conditions"],
    correct: 0,
    explanation: "SRI (originated in Madagascar by Fr. Henri de Laulanié) uses single young seedlings (< 15 days), wider spacing (25×25 cm), minimal water (alternate wetting-drying), mechanical weeding, and preferential use of organic manures."
  },
  {
    id: "d122l_126",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The combined application of FYM + chemical NPK + Rhizobium inoculant in a legume crop is expected to:",
    options: ["Have no advantage over chemical NPK alone under tropical agricultural conditions", "Reduce the effectiveness of Rhizobium nodulation due to chemical interference under standard field conditions", "Cause nutrient toxicity due to excess supply in irrigated crop production systems", "Improve nutrient use efficiency, reduce fertilizer requirement, and increase yield sustainably"],
    correct: 3,
    explanation: "INM combining FYM (improves soil physical and microbial properties), reduced chemical NPK (supplies immediate nutrients), and Rhizobium (BNF) results in synergistic benefits: higher NUE, reduced fertilizer cost, and sustained soil health."
  },
  {
    id: "d122l_127",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Crop residue management as part of INM involves:",
    options: ["Composting residues only — never incorporating directly under standard field conditions", "Removing all residues from the field for use as animal feed only under standard field conditions", "Burning all crop residues to prevent pest and disease carryover under standard field conditions", "Incorporating or mulching crop residues to return nutrients and organic carbon to the soil"],
    correct: 3,
    explanation: "INM advocates retaining crop residues by incorporation (when C:N is moderate), surface mulching, or composting before addition. Residue burning destroys organic matter, nutrients (especially N, S), and kills beneficial soil organisms."
  },
  {
    id: "d122l_128",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The 'Integrated Plant Nutrition System' (IPNS) differs from INM in that IPNS:",
    options: ["Focuses only on organic manure use in soil science under standard field conditions", "Considers all sources of plant nutrients including native soil nutrients, irrigation water", "IPNS and INM are identical concepts for soil management under standard field conditions", "Excludes biofertilizers from the nutrient supply in soil fertility under standard field conditions"],
    correct: 1,
    explanation: "IPNS (FAO concept) is broader than INM — it considers all nutrient sources including indigenous soil supply, nutrients from irrigation water, atmospheric deposition (rainfall N), and symbiotic/free-living BNF, not just applied inputs."
  },
  {
    id: "d122l_129",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Long-term experiments (LTEs) at IARI and other Indian institutions show that continuous application of NPK without organic manure leads to:",
    options: ["Increase in soil pH to neutral from acid conditions in soil science", "Decline in organic carbon, micronutrient availability", "Elimination of all soil microorganisms for soil management", "Sustained or increasing yields indefinitely in soil fertility"],
    correct: 1,
    explanation: "LTEs across India (IARI, CRIDA, Barrackpore) consistently show that continuous chemical NPK without organics depletes SOM, micronutrients (especially Zn, Fe, B), soil structure, and microbial diversity, causing yield stagnation."
  },
  {
    id: "d122l_130",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "In INM for rice-wheat system, what is the recommended approach for managing residue of the previous crop?",
    options: ["Burn wheat straw before rice transplanting to clear field rapidly under standard field conditions", "Incorporate wheat straw with sufficient time for decomposition, or use in-situ decomposers/bio-inoculants", "Apply extra urea to decompose residue without decomposer organisms under standard field conditions", "Remove all wheat straw for commercial sale only during the critical growth period of crops"],
    correct: 1,
    explanation: "Wheat straw has wide C:N (60–80:1); direct incorporation into a flooded rice field can cause toxicity. INM recommends: incorporating with a 3–4 week pre-monsoon period, adding Trichoderma/PSB decomposer, or partially composting before transplanting."
  },
  {
    id: "d122l_131",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The Leaf Colour Chart (LCC) used in SSNM of rice represents a practical INM tool because it:",
    options: ["Works only with organic N sources in soil science as recommended by ICAR guidelines", "Enables real-time N management decisions based on crop N status, avoiding over/under-application", "Tells the farmer exact N dose to apply regardless of field conditions under standard field conditions", "Replaces all soil testing requirements for soil management under standard field conditions"],
    correct: 1,
    explanation: "LCC enables need-based N topdressing — farmers compare leaf colour with chart panels and apply N fertilizer only when leaf colour drops below threshold, saving 15–20% N fertilizer while maintaining yields in IRRI-validated studies."
  },
  {
    id: "d122l_132",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Which of the following best describes the concept of 'nutrient budget' in INM?",
    options: ["Balance between total nutrient inputs (fertilizers, manures", "Government budget allocation for fertilizer subsidy in soil science", "The total cost of all fertilizers applied in one season for soil management", "The minimum nutrient requirement for a specific crop in soil fertility"],
    correct: 0,
    explanation: "A nutrient budget calculates whether the soil nutrient pool is being depleted (negative balance), maintained (neutral), or built up (positive balance). Negative balances indicate soil mining; INM aims for near-neutral to slight positive balances."
  },
  {
    id: "d122l_133",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "In INM, green manure incorporation is recommended to be done at least how many days before sowing/transplanting?",
    options: ["6 months", "60–90 days", "3–5 days", "15–20 days"],
    correct: 3,
    explanation: "Green manures should be incorporated 15–20 days before transplanting/sowing to allow initial decomposition and prevent phytotoxicity from organic acids produced during rapid anaerobic breakdown in waterlogged soils."
  },
  {
    id: "d122l_134",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The Fertilizer Equivalence Value (FEV) of FYM for N is approximately 25–30% because:",
    options: ["Only 25–30% of organic N in FYM mineralises and becomes available in the first crop season", "FYM reduces urea efficiency by 70–75% for soil management", "Farmers apply only 25–30% of the recommended FYM dose in soil science", "FYM contains only 25–30% as much N as urea by weight in soil fertility"],
    correct: 0,
    explanation: "The apparent recovery (mineralisation) of organic N from FYM in the first crop season is approximately 25–30% — meaning to substitute 100 kg urea-N, about 333–400 kg FYM-N (from 60–80 t FYM) is needed at 0.5% N."
  },
  {
    id: "d122l_135",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Which of the following is a key indicator of improved soil health as an outcome of INM adoption over years?",
    options: ["Increased soil microbial biomass carbon, enzyme activity, and earthworm population", "Decreased soil organic carbon and microbial biomass under standard field conditions", "Increased soil bulk density indicating compaction for soil management", "Decreased soil aggregate stability in soil science under standard field conditions"],
    correct: 0,
    explanation: "Long-term INM adoption increases soil microbial biomass C, enzyme activity (dehydrogenase, urease, phosphatase), earthworm population, aggregate stability, and infiltration rate — all indicators of improved soil biological health."
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 10: Fertilizer Laws & Quality Control
  // ─────────────────────────────────────────────────────────
  {
    id: "d122l_136",
    subject: "da-122",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The Fertilizer Control Order (FCO) in India was first promulgated in the year:",
    options: ["1957", "1985", "1947", "2000"],
    correct: 1,
    explanation: "The Fertilizer Control Order (FCO) 1985 is the primary legislation regulating the manufacture, sale, distribution, import, and quality of fertilizers in India under the Essential Commodities Act, 1955."
  },
  {
    id: "d122l_137",
    subject: "da-122",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Under the FCO 1985, the minimum guaranteed nutrient content in a bag of urea must be:",
    options: ["43% N", "50% N", "40% N", "46% N"],
    correct: 3,
    explanation: "FCO 1985 Schedule I specifies that urea must contain a minimum of 46% N (total nitrogen) on dry-weight basis. Any urea with < 46% N fails quality standards under FCO."
  },
  {
    id: "d122l_138",
    subject: "da-122",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The Bureau of Indian Standards (BIS) marks on fertilizer bags indicate that the product:",
    options: ["Has received government subsidy certification in soil science under standard field conditions", "Has been imported through official government channels for soil management under standard field conditions", "Is recommended specifically for organic farming in soil fertility under standard field conditions", "Conforms to the Indian Standard specifications for quality, composition, and physical properties"],
    correct: 3,
    explanation: "BIS marks (ISI mark) on fertilizer products certify compliance with Indian Standard specifications (IS standards) for nutrient content, moisture, particle size, and physical properties — ensuring consistent quality."
  },
  {
    id: "d122l_139",
    subject: "da-122",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The Soil Health Card (SHC) scheme in India was launched in which year?",
    options: ["2020", "2015", "2010", "2005"],
    correct: 1,
    explanation: "The Soil Health Card Scheme was launched by the Government of India on 19 February 2015 under the Department of Agriculture, Cooperation and Farmers Welfare (DACFW) to promote soil testing and rational fertilizer use."
  },
  {
    id: "d122l_140",
    subject: "da-122",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The Direct Benefit Transfer (DBT) system for fertilizer subsidy in India was introduced to:",
    options: ["Allow import of fertilizers without customs duty in soil science", "Ensure subsidy reaches genuine farmers by linking fertilizer purchase to Aadhaar/farmer identity at point of sale", "Eliminate all fertilizer subsidies to farmers for soil management according to soil fertility and water conservation principles", "Regulate fertilizer prices to match international market rates in soil fertility"],
    correct: 1,
    explanation: "DBT for fertilizers (PoS — Point of Sale machines linked to Aadhaar) ensures subsidy is released only on actual sale to verified farmers, preventing diversion. Fertilizer companies receive subsidy reimbursement from government after verified farmer sale."
  },
  {
    id: "d122l_141",
    subject: "da-122",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The nutrient-based subsidy (NBS) scheme in India, implemented since 2010, covers which fertilizers?",
    options: ["Urea and MOP only in soil science", "All P and K fertilizers (and SSP); urea remains under flat-rate subsidy separately", "All fertilizers including urea under a single scheme in soil fertility", "Only imported fertilizers excluding domestically produced ones for soil management"],
    correct: 1,
    explanation: "NBS scheme (from April 2010) provides fixed per-kg subsidy on P and K fertilizers (DAP, MOP, SSP, NPK complexes, etc.) based on their nutrient content. Urea continues under a separate concession scheme with MRP fixed by government."
  },
  {
    id: "d122l_142",
    subject: "da-122",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Under the FCO, the fertilizer inspector is empowered to:",
    options: ["Import fertilizers directly on behalf of the government under standard field conditions", "Fix the price of fertilizers in the market during the critical growth period of crops", "Approve new fertilizer factories in soil science in irrigated crop production systems", "Take samples, inspect premises, check quality, and initiate prosecution for substandard fertilizers"],
    correct: 3,
    explanation: "Fertilizer inspectors under FCO 1985 are authorised to collect samples, inspect dealer/manufacturer premises, check labelling, test quality, and file complaints/prosecute for violation of FCO provisions."
  },
  {
    id: "d122l_143",
    subject: "da-122",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Which organisation in India is the nodal agency for regulating fertilizer quality and distribution under the FCO?",
    options: ["Food Safety and Standards Authority of India (FSSAI)", "ICAR (Indian Council of Agricultural Research) under standard field conditions", "Department of Fertilizers, Ministry of Chemicals and Fertilizers", "Reserve Bank of India (RBI) under standard field conditions"],
    correct: 2,
    explanation: "The Department of Fertilizers (DOF) under the Ministry of Chemicals and Fertilizers is the nodal agency for fertilizer policy, subsidy, regulation, and import in India. FCO implementation involves state agriculture departments."
  },
  {
    id: "d122l_144",
    subject: "da-122",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The mandatory information that must appear on a fertilizer bag label under FCO includes:",
    options: ["Farmer testimonials and yield data in soil science based on conventional agronomic practices", "Crop recommendations and planting dates for soil management under standard field conditions", "Government subsidy amount per bag in soil fertility under tropical agricultural conditions", "Grade/composition, net weight, manufacturer name, batch number, date of manufacture, MRP, and precautions"],
    correct: 3,
    explanation: "FCO mandates fertilizer bag labels must display: trade name, grade (N:P₂O₅:K₂O), net weight, manufacturer name and address, batch/lot number, date of manufacture, maximum retail price (MRP), and handling/storage precautions."
  },
  {
    id: "d122l_145",
    subject: "da-122",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "New organic and bio-organic fertilizer products are governed by which schedule of the FCO 1985?",
    options: ["Schedule I (Inorganic fertilizers) in soil science under standard field conditions", "Schedule IV (Micronutrient fertilizers) for soil management under standard field conditions", "Schedule III (Biofertilizers) in soil fertility under standard field conditions", "Schedule II (Organic fertilizers including city compost, vermicompost, biogas slurry)"],
    correct: 3,
    explanation: "FCO Schedule II covers organic fertilizers including urban/city compost, vermicompost, biogas slurry, and other organic nutrient sources with quality specifications for moisture, organic carbon, and nutrient content."
  },
  {
    id: "d122l_146",
    subject: "da-122",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The penalty for selling substandard or adulterated fertilizer under FCO can result in:",
    options: ["Import duty imposition on the manufacturer in soil science", "Reduction of government subsidy only for soil management", "Only a written warning from the district agriculture officer", "Cancellation of licence, fine, and imprisonment up to 7 years for repeat offences"],
    correct: 3,
    explanation: "Under the Essential Commodities Act (which FCO derives from), offences involving adulteration/substandard fertilizers attract licence cancellation, monetary fines, and imprisonment (up to 7 years for serious/repeat violations)."
  },
  {
    id: "d122l_147",
    subject: "da-122",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The Pradhan Mantri Krishi Sinchayee Yojana (PMKSY) is related to fertilizer management in that it promotes:",
    options: ["Micro-irrigation (drip/sprinkler) enabling precision fertigation and reducing fertilizer wastage", "Free fertilizer distribution to all farmers under tropical agricultural conditions", "Export of surplus fertilizers to neighboring countries under standard field conditions", "Subsidy for organic fertilizer purchase only under tropical agricultural conditions"],
    correct: 0,
    explanation: "PMKSY promotes micro-irrigation (drip/sprinkler) adoption. Drip systems enable fertigation — delivering nutrients directly to the root zone through irrigation water — improving fertilizer use efficiency by 20–30% and reducing waste."
  },
  {
    id: "d122l_148",
    subject: "da-122",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The concept of '4R Nutrient Stewardship' for responsible fertilizer use refers to applying the Right source at the Right rate at the Right time in the Right place. This framework is promoted by:",
    options: ["Reserve Bank of India for agricultural credit programmes under standard field conditions", "IFA (International Fertilizer Association) and IPNI (International Plant Nutrition Institute) globally", "FAO (Food and Agriculture Organisation) for developing nations under standard field conditions", "ICAR-IARI exclusively for Indian conditions in soil science under standard field conditions"],
    correct: 1,
    explanation: "4R Nutrient Stewardship is a global framework developed by IFA and IPNI (now part of IPNI-IFDC) that provides a science-based decision framework for fertilizer best management practices to improve efficiency and sustainability."
  },
  {
    id: "d122l_149",
    subject: "da-122",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The Paramparagat Krishi Vikas Yojana (PKVY) scheme promotes which type of fertilizer use?",
    options: ["Biofertilizers combined with full chemical fertilizer dose", "Slow-release synthetic fertilizers only in soil science", "Organic farming with cluster approach — no synthetic chemical fertilizers", "Maximum chemical fertilizer use for productivity for soil management"],
    correct: 2,
    explanation: "PKVY (launched 2015) promotes organic farming through cluster-based approach where farmer groups adopt 100% organic inputs — no synthetic chemical fertilizers or pesticides — with certification support and market linkage."
  },
  {
    id: "d122l_150",
    subject: "da-122",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The recommended soil test-based fertilizer recommendation system used in Telangana for major crops is based on data generated by:",
    options: ["Farmer surveys and traditional practices only in soil science", "State soil testing laboratories, AICRP-STCR experiments, and PJTSAU research stations", "Private fertilizer company field trials only in soil fertility", "International recommendations from IRRI and CIMMYT for soil management"],
    correct: 1,
    explanation: "Telangana fertilizer recommendations are based on soil test-crop response (STCR) data from AICRP (All India Coordinated Research Project) experiments, PJTSAU research, and analyses by state soil testing laboratories, calibrated for local soils and crops."
  },


  // ── BATCH 2: Additional 100 questions from PJTSAU DA-122 Theory Notes (Manures & Fertilizers) ──
  {
    id: "d122x_001",
    subject: "da-122",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Soil fertility is defined as the quality that enables soil to provide:",
    options: ["Only physical support to plants in soil science", "Proper nutrients in proper amounts and balance for plant growth", "Water for plant growth only in soil fertility", "Air for plant growth only for soil management"],
    correct: 1,
    explanation: "As per DA-122 notes: Soil fertility is defined as the quality that enables the soil to provide proper nutrient compounds in proper amounts and in proper balance for the growth of specified plants."
  },
  {
    id: "d122x_002",
    subject: "da-122",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "A fertile soil in an arid region without water is an example showing that fertile soil is not necessarily:",
    options: ["High in pH", "Poor in texture", "Rich in micronutrients", "A productive soil"],
    correct: 3,
    explanation: "As per DA-122 notes: Soils in arid regions may be fertile but not productive. Fertility is one factor; water, temperature, pH etc. also affect productivity."
  },
  {
    id: "d122x_003",
    subject: "da-122",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Rice crop removes approximately how much N, P, K (kg) to produce 3 tonnes of yield?",
    options: ["175-35-175", "120-20-120", "85-15-90", "60-10-60"],
    correct: 2,
    explanation: "As per DA-122 notes: Rice crop removes 85-15-90 kg of N, P, and K respectively to produce 3 tonnes of yield."
  },
  {
    id: "d122x_004",
    subject: "da-122",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The word 'Manure' is derived from the French word 'MANOEUVRER' which means:",
    options: ["To dig", "Work with soil", "Animal excreta", "To fertilise crops"],
    correct: 1,
    explanation: "As per DA-122 notes: The word Manure is originated from the French word 'MANOEUVRER' which refers to 'work with soil'."
  },
  {
    id: "d122x_005",
    subject: "da-122",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Which of the following is NOT a characteristic difference between manures and fertilizers?",
    options: ["Both manures and fertilizers are quick acting", "Manures improve physical properties, fertilizers generally do not", "Manures are organic, fertilizers are inorganic", "Manures are bulky, fertilizers are non-bulky"],
    correct: 0,
    explanation: "As per DA-122 notes: Fertilizers are quick acting while manures are slow acting. This is a key difference, not a similarity."
  },
  {
    id: "d122x_006",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The best method for FYM preparation among heap, pit and covered pit methods is:",
    options: ["Covered pit method", "Pit method", "All are equally good", "Heap method"],
    correct: 0,
    explanation: "As per DA-122 notes: Of all the methods, the covered pit method is the best method for FYM preparation as it minimises nutrient losses."
  },
  {
    id: "d122x_007",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Good quality manure can be obtained from each pair of cattle per annum (pit method) as approximately:",
    options: ["12-15 tonnes", "5-6 tonnes", "2-3 tonnes", "8-10 tonnes"],
    correct: 1,
    explanation: "As per DA-122 notes: About 5-6 tonnes of good quality manure can be obtained from each animal per annum using the pit method."
  },
  {
    id: "d122x_008",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "In the heap method of FYM preparation, maximum losses of nutrients occur because:",
    options: ["Too much water is added", "Animals eat the manure", "Too many microorganisms attack the manure", "Direct exposure to sunshine and rainfall causes dryness and rapid oxidation"],
    correct: 3,
    explanation: "As per DA-122 notes: In heap method, maximum nutrient losses occur due to direct exposure to sunshine and rainfall causing dryness and rapid oxidation."
  },
  {
    id: "d122x_009",
    subject: "da-122",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Composting is the process of:",
    options: ["Storing organic waste without decomposition", "Biological decomposition of organic materials under controlled conditions", "Burning organic waste", "Chemical treatment of organic waste"],
    correct: 1,
    explanation: "As per DA-122 notes: Composting is the biological decomposition of organic materials under controlled conditions to produce stable, humus-rich material."
  },
  {
    id: "d122x_010",
    subject: "da-122",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Rural compost is prepared from:",
    options: ["Industrial waste", "Agricultural waste, crop residues, weeds, and farmyard waste", "Municipal garbage only", "Only animal excreta"],
    correct: 1,
    explanation: "As per DA-122 notes: Rural compost is prepared from agricultural waste like crop residues, weeds, farmyard waste, and other organic materials available in villages."
  },
  {
    id: "d122x_011",
    subject: "da-122",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Biogas is mainly composed of:",
    options: ["Nitrogen", "Carbon dioxide", "Methane (CH4)", "Hydrogen"],
    correct: 2,
    explanation: "As per DA-122 notes: Biogas is mainly composed of Methane (CH4, approximately 55-65%) and Carbon dioxide (35-45%), produced by anaerobic digestion of organic matter."
  },
  {
    id: "d122x_012",
    subject: "da-122",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "The slurry remaining after biogas production is used as:",
    options: ["Fuel", "Animal feed", "Pesticide", "Organic manure rich in nutrients"],
    correct: 3,
    explanation: "As per DA-122 notes: Biogas slurry is the remaining material after biogas production and is a valuable organic manure rich in plant nutrients."
  },
  {
    id: "d122x_013",
    subject: "da-122",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "The most suitable earthworm species for vermicomposting is:",
    options: ["Lumbricus terrestris", "Eisenia fetida (Red wriggler)", "Aporrectodea caliginosa", "Pheretima posthuma"],
    correct: 1,
    explanation: "As per DA-122 notes: Eisenia fetida (Red wriggler or Red earthworm) is the most widely used species for vermicomposting due to its high decomposition rate."
  },
  {
    id: "d122x_014",
    subject: "da-122",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Vermicompost has which advantage over regular compost?",
    options: ["Available in large quantities", "Lower nutrient content", "Cheaper to produce", "Faster nutrient release, better plant growth hormones, and more beneficial microorganisms"],
    correct: 3,
    explanation: "As per DA-122 notes: Vermicompost has faster nutrient release, contains plant growth hormones (auxins, cytokinins), and has more beneficial microorganisms compared to regular compost."
  },
  {
    id: "d122x_015",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Which of the following is used as a green manure crop in situ?",
    options: ["Neem", "Gliricidia", "Sesbania (Dhaincha)", "Pongamia"],
    correct: 2,
    explanation: "As per DA-122 notes: Sesbania (Dhaincha), Pillipesara, Crotalaria, Horsegram are used as green manure crops in situ. Neem and Pongamia are green leaf manure crops."
  },
  {
    id: "d122x_016",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The nitrogen content in green manure crops (leguminous) is approximately:",
    options: ["1.5-3.5%", "5-7%", "0.5-0.8%", "8-10%"],
    correct: 0,
    explanation: "As per DA-122 notes: Green manure crops (leguminous) typically contain 1.5-3.5% nitrogen, which is released on decomposition after incorporation."
  },
  {
    id: "d122x_017",
    subject: "da-122",
    lecture: "lecture-11",
    lectureNo: 11,
    question: "Which of the following is a green leaf manure crop?",
    options: ["Gliricidia", "Pillipesara", "Dhaincha (Sesbania)", "Crotalaria"],
    correct: 0,
    explanation: "As per DA-122 notes: Gliricidia, Neem, Pongamia, and Ipomea are green leaf manure crops (branches and leaves brought from outside). Dhaincha and Pillipesara are in situ green manure crops."
  },
  {
    id: "d122x_018",
    subject: "da-122",
    lecture: "lecture-12",
    lectureNo: 12,
    question: "Non-edible oil cakes suitable for crop fertilization include:",
    options: ["Mustard cake, coconut cake", "Sesame cake, sunflower cake (edible)", "Groundnut cake, linseed cake", "Neem cake, castor cake, cotton cake"],
    correct: 3,
    explanation: "As per DA-122 notes: Non-edible oil cakes suitable for crop fertilization include Neem cake, Castor cake, Sunflower cake, Safflower cake, Cotton cake, and Mahua cake."
  },
  {
    id: "d122x_019",
    subject: "da-122",
    lecture: "lecture-12",
    lectureNo: 12,
    question: "Edible oil cakes (suitable for cattle feed) include:",
    options: ["Mahua cake", "Cotton cake, sunflower cake", "Mustard cake, linseed cake, groundnut cake, coconut cake", "Neem cake, castor cake"],
    correct: 2,
    explanation: "As per DA-122 notes: Edible oil cakes include Mustard cake, Linseed cake, Sesame cake, Coconut cake, and Groundnut cake - suitable for cattle and poultry feeding."
  },
  {
    id: "d122x_020",
    subject: "da-122",
    lecture: "lecture-13",
    lectureNo: 13,
    question: "Blood meal is a concentrated organic manure that contains approximately what percentage of nitrogen?",
    options: ["12-14%", "10-12%", "16-18%", "5-7%"],
    correct: 0,
    explanation: "As per DA-122 notes: Blood meal is a concentrated organic manure containing approximately 12-14% nitrogen, making it one of the richest organic nitrogen sources."
  },
  {
    id: "d122x_021",
    subject: "da-122",
    lecture: "lecture-13",
    lectureNo: 13,
    question: "Bone meal is a concentrated organic manure rich in which nutrients?",
    options: ["P and Ca", "N and K", "N and P", "K and Ca"],
    correct: 0,
    explanation: "As per DA-122 notes: Bone meal is rich in Phosphorus (P) and Calcium (Ca). It contains approximately 20-25% P2O5 and 20-30% CaO."
  },
  {
    id: "d122x_022",
    subject: "da-122",
    lecture: "lecture-14",
    lectureNo: 14,
    question: "Biofertilizers are mainly classified based on their ability to:",
    options: ["Control weeds", "Produce organic matter", "Fix nitrogen and mobilise phosphorus", "Improve soil texture"],
    correct: 2,
    explanation: "As per DA-122 notes: Biofertilizers are mainly classified as nitrogen fixers (symbiotic, associative, free-living) and phosphorus mobilizers (phosphate absorbers and solubilizers)."
  },
  {
    id: "d122x_023",
    subject: "da-122",
    lecture: "lecture-15",
    lectureNo: 15,
    question: "Azospirillum is an example of which type of nitrogen-fixing biofertilizer?",
    options: ["Phosphorus mobilizer", "Free-living fixer", "Symbiotic fixer", "Associative fixer"],
    correct: 3,
    explanation: "As per DA-122 notes: Azospirillum is an associative nitrogen fixer that lives in close association with plant roots (but not forming true symbiosis like Rhizobium)."
  },
  {
    id: "d122x_024",
    subject: "da-122",
    lecture: "lecture-15",
    lectureNo: 15,
    question: "Azotobacter is classified as which type of nitrogen fixer?",
    options: ["Symbiotic", "Free-living", "Obligate", "Associative"],
    correct: 1,
    explanation: "As per DA-122 notes: Azotobacter is a free-living (non-symbiotic) nitrogen-fixing bacterium that fixes atmospheric nitrogen independently in soil."
  },
  {
    id: "d122x_025",
    subject: "da-122",
    lecture: "lecture-16",
    lectureNo: 16,
    question: "VAM (Vesicular Arbuscular Mycorrhizae) fungi are classified as phosphorus:",
    options: ["Fixers", "Solubilizers", "Leachers", "Absorbers"],
    correct: 3,
    explanation: "As per DA-122 notes: VAM fungi are phosphate absorbers - they extend the root surface area by forming a network of hyphae that absorb phosphorus from a larger soil volume."
  },
  {
    id: "d122x_026",
    subject: "da-122",
    lecture: "lecture-17",
    lectureNo: 17,
    question: "Urea is classified as which type of nitrogenous fertilizer?",
    options: ["Nitrate fertilizer", "Slow release fertilizer", "Amide fertilizer", "Ammonical fertilizer"],
    correct: 2,
    explanation: "As per DA-122 notes: Urea [CO(NH2)2] is classified as an Amide fertilizer. It contains 46% N and is the most commonly used nitrogenous fertilizer."
  },
  {
    id: "d122x_027",
    subject: "da-122",
    lecture: "lecture-18",
    lectureNo: 18,
    question: "Ammonium sulphate contains what percentage of nitrogen?",
    options: ["16%", "20%", "46%", "21%"],
    correct: 3,
    explanation: "As per DA-122 notes: Ammonium sulphate [(NH4)2SO4] contains approximately 20.6% (21%) nitrogen and also supplies 24% sulphur."
  },
  {
    id: "d122x_028",
    subject: "da-122",
    lecture: "lecture-18",
    lectureNo: 18,
    question: "Single Super Phosphate (SSP) contains approximately what percentage of P2O5?",
    options: ["10-12%", "16-18%", "28-30%", "46-48%"],
    correct: 1,
    explanation: "As per DA-122 notes: Single Super Phosphate (SSP) contains approximately 16-18% P2O5 (water-soluble) and also supplies about 12% Sulphur."
  },
  {
    id: "d122x_029",
    subject: "da-122",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "Triple Super Phosphate (TSP) contains approximately what percentage of P2O5?",
    options: ["16-18%", "46-48%", "28-32%", "38-44%"],
    correct: 1,
    explanation: "As per DA-122 notes: Triple Super Phosphate (TSP) contains approximately 46% P2O5, which is the highest among phosphatic fertilizers."
  },
  {
    id: "d122x_030",
    subject: "da-122",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "Muriate of Potash (MOP) contains approximately what percentage of K2O?",
    options: ["30%", "60%", "50%", "20%"],
    correct: 1,
    explanation: "As per DA-122 notes: Muriate of Potash (Potassium Chloride, KCl) contains approximately 60% K2O, making it the most concentrated potassic fertilizer."
  },
  {
    id: "d122x_031",
    subject: "da-122",
    lecture: "lecture-20",
    lectureNo: 20,
    question: "Which fertilizer is the best source of both calcium and sulphur?",
    options: ["Urea", "Muriate of potash", "Gypsum (CaSO4)", "Ammonium nitrate"],
    correct: 2,
    explanation: "As per DA-122 notes: Gypsum (CaSO4·2H2O) is a secondary nutrient fertilizer that supplies both Calcium (23%) and Sulphur (18%)."
  },
  {
    id: "d122x_032",
    subject: "da-122",
    lecture: "lecture-20",
    lectureNo: 20,
    question: "Zinc sulphate (ZnSO4) is the most commonly used fertilizer to correct:",
    options: ["Zinc deficiency", "Boron deficiency", "Iron deficiency", "Manganese deficiency"],
    correct: 0,
    explanation: "As per DA-122 notes: Zinc sulphate (ZnSO4) is the most commonly used fertilizer to correct zinc deficiency, especially in rice (Khaira disease)."
  },
  {
    id: "d122x_033",
    subject: "da-122",
    lecture: "lecture-22",
    lectureNo: 22,
    question: "DAP (Diammonium Phosphate) is a complex fertilizer containing:",
    options: ["17-17-17 (N-P-K)", "18-46-0 (N-P-K)", "11-52-0 (N-P-K)", "20-20-0 (N-P-K)"],
    correct: 1,
    explanation: "As per DA-122 notes: DAP (Diammonium Phosphate) is an NP complex fertilizer with grade 18-46-0, meaning 18% N and 46% P2O5."
  },
  {
    id: "d122x_034",
    subject: "da-122",
    lecture: "lecture-24",
    lectureNo: 24,
    question: "The fertilizer grade 17-17-17 indicates:",
    options: ["17 kg each of N, P, K per bag", "17% N, 17% P2O5, 17% K2O", "17% organic matter", "17 tons per hectare"],
    correct: 1,
    explanation: "As per DA-122 notes: Fertilizer grade 17-17-17 indicates 17% N, 17% P2O5, and 17% K2O by weight in the fertilizer - it is a complete NPK complex fertilizer."
  },
  {
    id: "d122x_035",
    subject: "da-122",
    lecture: "lecture-25",
    lectureNo: 25,
    question: "Fertilizer Use Efficiency (FUE) can be improved by:",
    options: ["Applying fertilizers before planting only", "Applying all fertilizer at once in one split", "Split application, placement near root zone, and matching supply with crop demand", "Using only urea as nitrogen source"],
    correct: 2,
    explanation: "As per DA-122 notes: FUE can be improved by split application, placing fertilizer near the root zone (band placement), timing with crop demand, and using slow-release fertilizers."
  },
  {
    id: "d122x_036",
    subject: "da-122",
    lecture: "lecture-26",
    lectureNo: 26,
    question: "Volatilization loss of nitrogen occurs when urea is applied to:",
    options: ["Acidic soils with rain", "Aerobic sandy soils", "Flooded paddy fields with low temperature", "Alkaline soils (high pH) with high temperature"],
    correct: 3,
    explanation: "As per DA-122 notes: Volatilization of nitrogen (as NH3 gas) from urea is high in alkaline soils, at high temperatures, especially in flooded paddy conditions."
  },
  {
    id: "d122x_037",
    subject: "da-122",
    lecture: "lecture-27",
    lectureNo: 27,
    question: "Broadcasting of fertilizer refers to:",
    options: ["Spraying liquid fertilizer on leaves", "Placing fertilizer in holes near plant base", "Spreading fertilizer uniformly over the soil surface", "Applying fertilizer in bands near seeds"],
    correct: 2,
    explanation: "As per DA-122 notes: Broadcasting is a method of fertilizer application where fertilizer is spread uniformly over the soil surface before or after planting."
  },
  {
    id: "d122x_038",
    subject: "da-122",
    lecture: "lecture-28",
    lectureNo: 28,
    question: "Band placement of fertilizers is preferred over broadcasting because it:",
    options: ["Reduces fertilizer efficiency", "Is easier to apply", "Wastes more fertilizer", "Places nutrients closer to root zone, reducing fixation and improving efficiency"],
    correct: 3,
    explanation: "As per DA-122 notes: Band placement is preferred because it places nutrients close to the root zone, reducing fixation/leaching and improving fertilizer use efficiency."
  },
  {
    id: "d122x_040",
    subject: "da-122",
    lecture: "lecture-32",
    lectureNo: 32,
    question: "The Fertilizer Control Order (FCO) in India was established in:",
    options: ["1974", "1945", "1985", "1957"],
    correct: 2,
    explanation: "As per DA-122 notes: The Fertilizer Control Order (FCO) was established in 1985 to regulate the quality, prices, and sale of fertilizers in India."
  },
  {
    id: "d122x_041",
    subject: "da-122",
    lecture: "lecture-18",
    lectureNo: 18,
    question: "Ammonium nitrate contains what percentage of nitrogen?",
    options: ["46%", "33-34%", "21%", "26%"],
    correct: 1,
    explanation: "As per DA-122 notes: Ammonium nitrate [NH4NO3] contains approximately 33-34% nitrogen (equal parts from ammonical and nitrate forms)."
  },
  {
    id: "d122x_042",
    subject: "da-122",
    lecture: "lecture-18",
    lectureNo: 18,
    question: "Which nitrogenous fertilizer has the highest nitrogen content?",
    options: ["Ammonium nitrate (34%)", "Urea (46%)", "Ammonium sulphate (21%)", "Calcium ammonium nitrate (25%)"],
    correct: 1,
    explanation: "As per DA-122 notes: Urea [CO(NH2)2] has the highest nitrogen content at 46% among all commonly used nitrogenous fertilizers."
  },
  {
    id: "d122x_043",
    subject: "da-122",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "Rock phosphate is a phosphatic fertilizer that is classified as:",
    options: ["Citric acid soluble P", "Water soluble P", "Citric acid insoluble P", "All of the above"],
    correct: 2,
    explanation: "As per DA-122 notes: Rock phosphate is classified as citric acid insoluble phosphate. It is not readily soluble and is used mainly in acidic soils."
  },
  {
    id: "d122x_044",
    subject: "da-122",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "Sulphate of Potash (SOP) is preferred over Muriate of Potash (MOP) for which crops?",
    options: ["Paddy and wheat", "Pulses and oilseeds", "Sugarcane", "Chloride-sensitive crops like fruits, vegetables, and tobacco"],
    correct: 3,
    explanation: "As per DA-122 notes: Sulphate of Potash (K2SO4) is preferred for chloride-sensitive crops like fruits, vegetables, and tobacco as it doesn't contain chloride."
  },
  {
    id: "d122x_045",
    subject: "da-122",
    lecture: "lecture-20",
    lectureNo: 20,
    question: "Borax and boric acid are the main fertilizer sources of which micronutrient?",
    options: ["Boron", "Copper", "Zinc", "Iron"],
    correct: 0,
    explanation: "As per DA-122 notes: Borax (Na2B4O7·10H2O) and Boric acid are the main fertilizer sources used to correct Boron deficiency."
  },
  {
    id: "d122x_046",
    subject: "da-122",
    lecture: "lecture-21",
    lectureNo: 21,
    question: "Chelated micronutrients are preferred over mineral salts because:",
    options: ["They are more stable and available at a wider pH range, preventing fixation", "They are cheaper", "They contain higher percentage of micronutrients", "They are easier to manufacture"],
    correct: 0,
    explanation: "As per DA-122 notes: Chelated micronutrients are preferred because the chelating agent (like EDTA) protects micronutrients from fixation and keeps them available over a wider pH range."
  },
  {
    id: "d122x_047",
    subject: "da-122",
    lecture: "lecture-31",
    lectureNo: 31,
    question: "Organic farming avoids the use of:",
    options: ["Synthetic chemical pesticides and fertilizers", "Biofertilizers", "Compost and vermicompost", "Green manures"],
    correct: 0,
    explanation: "As per DA-122 notes: Organic farming avoids synthetic chemical pesticides and fertilizers, relying instead on organic manures, biofertilizers, and biological pest control."
  },
  {
    id: "d122x_048",
    subject: "da-122",
    lecture: "lecture-29",
    lectureNo: 29,
    question: "One of the goals of Integrated Nutrient Management (INM) is:",
    options: ["To eliminate all chemical fertilizer use", "To reduce crop yields", "To increase soil salinity", "To maintain or improve soil health while meeting crop nutrient demands economically"],
    correct: 3,
    explanation: "As per DA-122 notes: INM goal is to maintain or improve soil health while meeting crop nutrient demands economically and in an environmentally sustainable manner."
  },
  {
    id: "d122x_049",
    subject: "da-122",
    lecture: "lecture-13",
    lectureNo: 13,
    question: "Guano is a concentrated organic manure derived from:",
    options: ["Blood of slaughtered animals", "Droppings (excreta) of sea birds/bats", "Crop residues", "Fish waste"],
    correct: 1,
    explanation: "As per DA-122 notes: Guano is a concentrated organic manure derived from the droppings (excreta) of sea birds or bats. It is rich in nitrogen and phosphorus."
  },
  {
    id: "d122x_050",
    subject: "da-122",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Urban compost is prepared from:",
    options: ["Only food processing waste", "Only crop residues", "Municipal waste including rubbish, street sweepings, and market wastes", "Industrial waste"],
    correct: 2,
    explanation: "As per DA-122 notes: Urban compost is prepared from municipal waste including municipal rubbish, street sweepings, and market wastes."
  },
  {
    id: "d122x_051",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "In the covered pit method, the pit bottom and sides are lined with:",
    options: ["Plastic sheets", "Granite stone lining (non-absorbent)", "Cement", "Clay bricks"],
    correct: 1,
    explanation: "As per DA-122 notes: In covered pit method, the bottom and sides of the pit are made non-absorbent by granite stone lining to prevent nutrient loss."
  },
  {
    id: "d122x_052",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The most important criterion for selection of a green manure crop is:",
    options: ["Resistant to all pests", "Fast-growing, leguminous, high biomass-producing, and easy to decompose", "Drought-tolerant", "Long duration crop"],
    correct: 1,
    explanation: "As per DA-122 notes: Green manure crops should be fast-growing, preferably leguminous, high biomass-producing, and easy to decompose to benefit the subsequent crop."
  },
  {
    id: "d122x_053",
    subject: "da-122",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Maize crop requires approximately how much N, P, K (kg) to produce 5 tonnes of yield?",
    options: ["60-10-60", "120-25-120", "85-15-90", "175-35-175"],
    correct: 3,
    explanation: "As per DA-122 notes: Maize requires 175-35-175 kg of nitrogen, phosphorus and potassium respectively to give 5 tonnes of yield."
  },
  {
    id: "d122x_054",
    subject: "da-122",
    lecture: "lecture-16",
    lectureNo: 16,
    question: "The Bacillus and Pseudomonas species used as biofertilizers are classified as:",
    options: ["Phosphate absorbers", "Free-living N fixers", "Phosphate solubilizers", "Symbiotic N fixers"],
    correct: 2,
    explanation: "As per DA-122 notes: Bacillus and Pseudomonas species act as Phosphate Solubilizers - they dissolve insoluble phosphates in soil making them available to plants."
  },
  {
    id: "d122x_055",
    subject: "da-122",
    lecture: "lecture-28",
    lectureNo: 28,
    question: "Fertigation refers to:",
    options: ["Deep placement of fertilizer", "Broadcasting fertilizer", "Foliar application of fertilizer", "Application of fertilizer through irrigation water"],
    correct: 3,
    explanation: "As per DA-122 notes: Fertigation is the technique of applying fertilizers through irrigation water (especially drip irrigation), allowing precise nutrient delivery to the root zone."
  },
  {
    id: "d122x_056",
    subject: "da-122",
    lecture: "lecture-28",
    lectureNo: 28,
    question: "Foliar application of fertilizers is done when:",
    options: ["Crop is at harvest stage", "Seeds are being treated", "Quick correction of nutrient deficiency is needed or soil application is not effective", "Soil is well supplied with nutrients"],
    correct: 2,
    explanation: "As per DA-122 notes: Foliar application is done for quick correction of nutrient deficiencies or when soil pH makes soil application ineffective (e.g., micronutrients in alkaline soils)."
  },
  {
    id: "d122x_057",
    subject: "da-122",
    lecture: "lecture-20",
    lectureNo: 20,
    question: "Epsomite (MgSO4·7H2O) is a fertilizer used to supply:",
    options: ["Calcium and Sulphur", "Magnesium and Sulphur", "Iron and Sulphur", "Zinc and Sulphur"],
    correct: 1,
    explanation: "As per DA-122 notes: Epsomite (Epsom salt, MgSO4·7H2O) is a secondary nutrient fertilizer used to supply Magnesium (10%) and Sulphur (13%)."
  },
  {
    id: "d122x_058",
    subject: "da-122",
    lecture: "lecture-22",
    lectureNo: 22,
    question: "Mixed fertilizers are prepared by:",
    options: ["Manufacturing in factories only", "Mechanical mixing (blending) of individual fertilizers on the farm", "Chemical reaction of individual fertilizer components", "Using ore minerals directly"],
    correct: 1,
    explanation: "As per DA-122 notes: Mixed fertilizers include farm-made mixtures (prepared by blending) and factory-made granular/pulverised mixtures of individual fertilizer components."
  },
  {
    id: "d122x_059",
    subject: "da-122",
    lecture: "lecture-30",
    lectureNo: 30,
    question: "One constraint of INM is:",
    options: ["It improves soil health", "Availability and transportation of bulky organic manures is a major challenge", "It eliminates the need for chemical fertilizers", "It reduces crop yields"],
    correct: 1,
    explanation: "As per DA-122 notes: A major constraint of INM is the availability, transportation, and high cost of bulky organic manures, making it difficult for farmers to adopt on a large scale."
  },
  {
    id: "d122x_060",
    subject: "da-122",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "The biogas plant digester is constructed to maintain which type of conditions for optimal methane production?",
    options: ["Partially aerobic conditions", "Aerobic conditions", "Anaerobic conditions", "Dry conditions"],
    correct: 2,
    explanation: "As per DA-122 notes: The biogas plant digester is maintained under strict anaerobic conditions for optimal methane production by methanogenic bacteria."
  },
  {
    id: "d122x_061",
    subject: "da-122",
    lecture: "lecture-25",
    lectureNo: 25,
    question: "Nitrification inhibitors like Neem-coated urea are used to:",
    options: ["Speed up conversion of urea to nitrate", "Kill soil microorganisms", "Increase alkalinity of soil", "Slow down nitrification, preventing N loss through leaching and denitrification"],
    correct: 3,
    explanation: "As per DA-122 notes: Nitrification inhibitors (like Neem-coated urea) slow down nitrification, keeping nitrogen in the ammonium form longer, reducing losses through leaching and denitrification."
  },
  {
    id: "d122x_062",
    subject: "da-122",
    lecture: "lecture-26",
    lectureNo: 26,
    question: "Leaching loss of nitrogen is maximum for which type of fertilizer?",
    options: ["Ammonium sulphate", "Ammonium nitrate", "Calcium nitrate and other nitrate forms", "Urea"],
    correct: 2,
    explanation: "As per DA-122 notes: Nitrate forms of nitrogen (like calcium nitrate) are most susceptible to leaching as they carry negative charges and are not held by negatively-charged soil colloids."
  },
  {
    id: "d122x_063",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Pillipesara is botanically known as:",
    options: ["Sesbania aculeata", "Tephrosia purpurea", "Vigna radiata var. sublobata", "Crotalaria juncea"],
    correct: 2,
    explanation: "As per DA-122 notes: Pillipesara is botanically known as Vigna radiata var. sublobata (also called wild greengram), used as an important green manure crop."
  },
  {
    id: "d122x_064",
    subject: "da-122",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Vermicompost beds should be maintained at a moisture content of approximately:",
    options: ["60-70%", "20-30%", "80-90%", "40-50%"],
    correct: 0,
    explanation: "As per DA-122 notes: Vermicompost beds should be maintained at 60-70% moisture content for optimal earthworm activity and decomposition."
  },
  {
    id: "d122x_065",
    subject: "da-122",
    lecture: "lecture-11",
    lectureNo: 11,
    question: "Which of the following is an advantage of green leaf manuring over in situ green manuring?",
    options: ["Requires more time to decompose", "More expensive", "Lower nitrogen content", "Can be applied to already standing crops (e.g., transplanted paddy) without losing a season"],
    correct: 3,
    explanation: "As per DA-122 notes: An advantage of green leaf manuring is that it can be applied to already standing crops without losing a season, unlike in situ green manuring which requires a separate season."
  },
  {
    id: "d122x_066",
    subject: "da-122",
    lecture: "lecture-14",
    lectureNo: 14,
    question: "Blue Green Algae (BGA) used as biofertilizer in rice can fix atmospheric nitrogen because it:",
    options: ["Dissolves phosphates", "Works only with legume roots", "Lives in soil permanently", "Photosynthesises and fixes N2 through heterocysts (specialised cells)"],
    correct: 3,
    explanation: "As per DA-122 notes: Blue Green Algae (cyanobacteria) photosynthesize and fix atmospheric nitrogen through specialised cells called heterocysts. BGA is commonly used in flooded rice fields."
  },
  {
    id: "d122x_067",
    subject: "da-122",
    lecture: "lecture-17",
    lectureNo: 17,
    question: "Straight fertilizers supply:",
    options: ["Only one plant nutrient element", "Organic matter along with nutrients", "All three major nutrients (NPK)", "Two or more plant nutrients"],
    correct: 0,
    explanation: "As per DA-122 notes: Straight fertilizers supply only one plant nutrient element (e.g., urea supplies only N, SSP supplies only P). Complex fertilizers supply two or more nutrients."
  },
  {
    id: "d122x_068",
    subject: "da-122",
    lecture: "lecture-24",
    lectureNo: 24,
    question: "Which complex fertilizer grade is used as a complete fertilizer for rice in Telangana?",
    options: ["17-17-17", "10-26-26", "28-28-0", "18-46-0 (DAP)"],
    correct: 0,
    explanation: "As per DA-122 notes: 17-17-17 (NPK complex) is commonly used as a complete fertilizer providing equal proportions of N, P2O5, and K2O for many crops including rice."
  },
  {
    id: "d122x_069",
    subject: "da-122",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The most important factor that affects the rate of composting is:",
    options: ["Wind speed", "Moisture content and temperature of the composting mass", "Altitude", "Soil type"],
    correct: 1,
    explanation: "As per DA-122 notes: The most important factors affecting composting rate are moisture content (optimum 50-60%) and temperature (optimum 55-65°C for thermophilic phase)."
  },
  {
    id: "d122x_070",
    subject: "da-122",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Night soil is classified under which category of organic manures?",
    options: ["Animal origin manures", "Human habitation waste", "Municipal waste", "Plant origin manures"],
    correct: 1,
    explanation: "As per DA-122 notes: Night soil (human excreta) is classified under human habitation waste category of organic manures. It is rich in nutrients but must be properly treated before use."
  },
  {
    id: "d122x_071",
    subject: "da-122",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Assertion (A): Manures are slow acting while fertilizers are quick acting.\nReason (R): Nutrients in manures are in organic form and must be mineralised by microorganisms before becoming available, while fertilizers contain nutrients in already available forms.",
    options: ["A is true but R is false under standard field conditions", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is false but R is true under standard field conditions"],
    correct: 1,
    explanation: "As per DA-122 notes: Manures require mineralisation before nutrients become available. Fertilizers are in immediately available forms. Both A and R are true; R explains A."
  },
  {
    id: "d122x_072",
    subject: "da-122",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Assertion (A): Biogas production from organic waste provides a dual benefit.\nReason (R): Biogas can be used as fuel for cooking/lighting while the slurry remaining after digestion is a valuable organic manure.",
    options: ["Both A and R are true and R is the correct explanation of A", "A is false but R is true under standard field conditions", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false under standard field conditions"],
    correct: 0,
    explanation: "As per DA-122 notes: Biogas provides fuel energy AND valuable organic manure slurry. Both A and R are true; R correctly explains A."
  },
  {
    id: "d122x_073",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Assertion (A): Covered pit method is the best method for FYM preparation.\nReason (R): The covered pit has non-absorbent sides and a roof cover that prevents nutrient loss from sun, rain, and leaching.",
    options: ["Both A and R are true and R is the correct explanation of A", "A is false but R is true under standard field conditions", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false under standard field conditions"],
    correct: 0,
    explanation: "As per DA-122 notes: Covered pit method is best because the cover and non-absorbent sides minimise nutrient losses. Both A and R are true; R explains A."
  },
  {
    id: "d122x_074",
    subject: "da-122",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Assertion (A): Vermicompost improves soil structure and stimulates plant growth beyond just nutrient supply.\nReason (R): Vermicompost contains plant growth hormones (like auxins and cytokinins) and beneficial microorganisms in addition to plant nutrients.",
    options: ["A is true but R is false under standard field conditions", "A is false but R is true under standard field conditions", "Both A and R are true but R is NOT the correct explanation of A", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "As per DA-122 notes: Vermicompost contains hormones and microorganisms beyond nutrients. Both A and R are true; R correctly explains A."
  },
  {
    id: "d122x_075",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Assertion (A): Leguminous crops are preferred as green manure crops.\nReason (R): Leguminous crops fix atmospheric nitrogen in root nodules, and when incorporated, they add more nitrogen to the soil than they remove during growth.",
    options: ["A is true but R is false under standard field conditions", "A is false but R is true under standard field conditions", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A"],
    correct: 2,
    explanation: "As per DA-122 notes: Leguminous green manure crops fix atmospheric N, resulting in net N addition when incorporated. Both A and R are true; R explains A."
  },
  {
    id: "d122x_076",
    subject: "da-122",
    lecture: "lecture-17",
    lectureNo: 17,
    question: "Assertion (A): Urea has the highest nitrogen content among commonly used nitrogenous fertilizers.\nReason (R): Urea [CO(NH2)2] contains 46% nitrogen by weight, which is the highest nitrogen content achievable in any solid nitrogen fertilizer.",
    options: ["A is true but R is false under standard field conditions", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is false but R is true under standard field conditions"],
    correct: 1,
    explanation: "As per DA-122 notes: Urea has 46% N, highest among commonly used fertilizers. Both A and R are true; R correctly explains A."
  },
  {
    id: "d122x_077",
    subject: "da-122",
    lecture: "lecture-25",
    lectureNo: 25,
    question: "Assertion (A): Split application of nitrogen fertilizers is recommended for most crops.\nReason (R): Nitrogen is mobile and prone to loss through leaching and volatilization; split application matches supply with crop demand, reducing losses.",
    options: ["A is true but R is false under standard field conditions", "A is false but R is true under standard field conditions", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A"],
    correct: 2,
    explanation: "As per DA-122 notes: Split N application reduces losses and improves efficiency. Both A and R are true; R correctly explains A."
  },
  {
    id: "d122x_078",
    subject: "da-122",
    lecture: "lecture-29",
    lectureNo: 29,
    question: "Assertion (A): INM can reduce the requirement of chemical fertilizers.\nReason (R): Organic manures and biofertilizers in INM supply nutrients, improve nutrient use efficiency, and enhance soil health, partially replacing chemical fertilizers.",
    options: ["A is true but R is false under standard field conditions", "A is false but R is true under standard field conditions", "Both A and R are true but R is NOT the correct explanation of A", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "As per DA-122 notes: INM can reduce chemical fertilizer needs through organic inputs and biofertilizers. Both A and R are true; R explains A."
  },
  {
    id: "d122x_079",
    subject: "da-122",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "Assertion (A): SSP is preferred over TSP in sulphur-deficient soils.\nReason (R): SSP contains 12% sulphur in addition to P2O5, while TSP contains no sulphur, making SSP more beneficial in sulphur-deficient soils.",
    options: ["A is true but R is false under standard field conditions", "A is false but R is true under standard field conditions", "Both A and R are true but R is NOT the correct explanation of A", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "As per DA-122 notes: SSP supplies both P and S (12%), while TSP supplies only P. Both A and R are true; R correctly explains A."
  },
  {
    id: "d122x_080",
    subject: "da-122",
    lecture: "lecture-28",
    lectureNo: 28,
    question: "Assertion (A): Band placement of fertilizers is more efficient than broadcasting.\nReason (R): Band placement puts fertilizers close to the root zone, reducing fixation (P) and leaching losses (N), improving plant uptake.",
    options: ["A is true but R is false under standard field conditions", "A is false but R is true under standard field conditions", "Both A and R are true but R is NOT the correct explanation of A", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "As per DA-122 notes: Band placement is more efficient because it reduces fixation and leaching. Both A and R are true; R correctly explains A."
  },
  {
    id: "d122x_081",
    subject: "da-122",
    lecture: "lecture-16",
    lectureNo: 16,
    question: "Assertion (A): VAM fungi are beneficial to plants in phosphorus-deficient soils.\nReason (R): VAM fungi form an extensive network of hyphae that extends the root surface area, allowing plants to absorb phosphorus from a much larger soil volume.",
    options: ["A is true but R is false under standard field conditions", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is false but R is true under standard field conditions"],
    correct: 1,
    explanation: "As per DA-122 notes: VAM fungi increase P absorption through extensive hyphal network. Both A and R are true; R correctly explains A."
  },
  {
    id: "d122x_082",
    subject: "da-122",
    lecture: "lecture-12",
    lectureNo: 12,
    question: "Assertion (A): Non-edible oil cakes are more suitable for crop fertilization than edible oil cakes.\nReason (R): Non-edible oil cakes cannot be fed to animals, so they are economically better used for crop fertilization. Edible cakes fetch higher prices as animal feed.",
    options: ["A is true but R is false under standard field conditions", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is false but R is true under standard field conditions"],
    correct: 1,
    explanation: "As per DA-122 notes: Non-edible oil cakes are used for crop fertilization since they cannot be fed to animals. Both A and R are true."
  },
  {
    id: "d122x_083",
    subject: "da-122",
    lecture: "lecture-21",
    lectureNo: 21,
    question: "Assertion (A): Chelated micronutrient fertilizers are more effective at high pH than mineral salt micronutrients.\nReason (R): Chelating agents protect micronutrient ions from precipitation as insoluble hydroxides at high pH, keeping them in plant-available form.",
    options: ["A is true but R is false under standard field conditions", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is false but R is true under standard field conditions"],
    correct: 1,
    explanation: "As per DA-122 notes: Chelates protect micronutrients from fixation at high pH. Both A and R are true; R correctly explains A."
  },
  {
    id: "d122x_084",
    subject: "da-122",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Assertion (A): Leaching is a major cause of nitrogen loss from soil.\nReason (R): Nitrate ions carry negative charge and are repelled by negatively charged soil colloids, making them susceptible to movement with soil water.",
    options: ["A is true but R is false under standard field conditions", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is false but R is true under standard field conditions"],
    correct: 1,
    explanation: "As per DA-122 notes: Leaching is a major N loss mechanism. Nitrate ions are not adsorbed by soil colloids (both negatively charged) and move freely with water. Both A and R are true."
  },
  {
    id: "d122x_085",
    subject: "da-122",
    lecture: "lecture-31",
    lectureNo: 31,
    question: "Assertion (A): Organic farming maintains long-term soil health better than intensive chemical farming.\nReason (R): Organic farming practices maintain and increase soil organic matter, CEC, microbial diversity, and soil structure, while minimising environmental pollution.",
    options: ["A is true but R is false under standard field conditions", "A is false but R is true under standard field conditions", "Both A and R are true but R is NOT the correct explanation of A", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "As per DA-122 notes: Organic farming maintains soil health by preserving OM, microbial diversity, and structure. Both A and R are true; R correctly explains A."
  },
  {
    id: "d122x_086",
    subject: "da-122",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Match the organic manures with their origin:\n     Column-I (Manure)           |  Column-II (Origin)          |  Column-III (Examples)\nA.  Bulky organic manures        |  1.  Animal droppings/sea birds|  i.  Guano, fish meal\nB.  Green manures                |  2.  Plant material in situ   |  ii. Dhaincha, Pillipesara\nC.  Concentrated animal origin   |  3.  Cattle dung+urine+litter |  iii. FYM, Farmyard manure\nD.  Green leaf manures           |  4.  Leaves from tree/shrubs  |  iv. Neem, Pongamia, Gliricidia",
    options: ["A-1-i,   B-3-iii, C-2-ii,  D-4-iv", "A-3-iii, B-2-ii,  C-1-i,   D-4-iv", "A-2-ii,  B-4-iv,  C-3-iii, D-1-i", "A-4-iv,  B-1-i,   C-4-iv,  D-2-ii"],
    correct: 1,
    explanation: "As per DA-122 notes: Bulky organic manures (FYM from cattle dung+urine+litter); Green manures in situ (Dhaincha, Pillipesara); Concentrated animal origin (Guano, fish meal); Green leaf manures (Neem, Pongamia, Gliricidia leaves)."
  },
  {
    id: "d122x_087",
    subject: "da-122",
    lecture: "lecture-18",
    lectureNo: 18,
    question: "Match the nitrogenous fertilizers with their N content:\n     Column-I (Fertilizer)       |  Column-II (N content %)     |  Column-III (Type)\nA.  Urea                         |  1.  33-34%                   |  i.   Amide\nB.  Ammonium nitrate             |  2.  21%                      |  ii.  Ammonical-nitrate\nC.  Ammonium sulphate            |  3.  15-21%                   |  iii. Ammonical\nD.  Calcium ammonium nitrate     |  4.  46%                      |  iv.  Amide/Ammonical-nitrate",
    options: ["A-3-iii, B-4-iv, C-1-i,    D-2-ii", "A-4-i,  B-1-ii,  C-2-iii,  D-3-iv", "A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-2-ii, B-3-iii, C-4-iv,   D-1-i"],
    correct: 1,
    explanation: "As per DA-122 notes: Urea=46% N (amide); Ammonium nitrate=33-34% N (ammonical-nitrate); Ammonium sulphate=21% N (ammonical); Calcium ammonium nitrate=15-21% N."
  },
  {
    id: "d122x_088",
    subject: "da-122",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "Match the phosphatic fertilizers with their P2O5 content and solubility:\n     Column-I (Fertilizer)       |  Column-II (P2O5 %)          |  Column-III (Solubility)\nA.  Rock phosphate               |  1.  46%                      |  i.   Water soluble\nB.  Single Super Phosphate (SSP) |  2.  25-40%                   |  ii.  Citric acid insoluble\nC.  Triple Super Phosphate (TSP) |  3.  16-18%                   |  iii. Water soluble\nD.  Dicalcium phosphate (DCP)    |  4.  35-40%                   |  iv.  Citric acid soluble",
    options: ["A-2-ii, B-3-iii, C-1-i,   D-4-iv", "A-4-iv, B-2-ii,  C-3-iii,  D-1-i", "A-3-iii, B-1-i,  C-2-ii,   D-4-iv", "A-1-i,  B-4-iv,  C-2-ii,   D-3-iii"],
    correct: 0,
    explanation: "As per DA-122 notes: Rock phosphate (25-40% P2O5, citric acid insoluble); SSP (16-18% P2O5, water soluble); TSP (46% P2O5, water soluble); DCP (35-40%, citric acid soluble)."
  },
  {
    id: "d122x_089",
    subject: "da-122",
    lecture: "lecture-14",
    lectureNo: 14,
    question: "Match the biofertilizers with their classification:\n     Column-I (Biofertiliser)    |  Column-II (Class)           |  Column-III (Example organism)\nA.  Rhizobium                    |  1.  Free-living N fixer      |  i.   Azotobacter chroococcum\nB.  Azotobacter                  |  2.  Symbiotic N fixer        |  ii.  Rhizobium leguminosarum\nC.  VAM fungi                    |  3.  Associative N fixer      |  iii. Azospirillum brasilense\nD.  Azospirillum                 |  4.  P absorber               |  iv.  Glomus species",
    options: ["A-4-iv, B-3-iii, C-1-i,    D-2-ii", "A-3-iii, B-4-iv, C-2-ii,   D-1-i", "A-2-ii, B-1-i,   C-4-iv,   D-3-iii", "A-1-i,  B-2-ii,  C-3-iii,  D-4-iv"],
    correct: 2,
    explanation: "As per DA-122 notes: Rhizobium (symbiotic N fixer, Rhizobium leguminosarum); Azotobacter (free-living N fixer); VAM fungi (P absorber, Glomus species); Azospirillum (associative N fixer)."
  },
  {
    id: "d122x_090",
    subject: "da-122",
    lecture: "lecture-22",
    lectureNo: 22,
    question: "Match the complex fertilizers with their NPK grades:\n     Column-I (Fertilizer)       |  Column-II (Grade N-P-K)     |  Column-III (Type)\nA.  DAP                          |  1.  17-17-17                 |  i.   Complete NPK\nB.  MAP                          |  2.  18-46-0                  |  ii.  NP complex\nC.  Complete NPK 17              |  3.  11-52-0                  |  iii. NP complex\nD.  10-26-26                     |  4.  10-26-26                 |  iv.  NPK (K dominant)",
    options: ["A-2-ii, B-3-iii, C-1-i,   D-4-iv", "A-3-iii, B-2-ii, C-4-iv,   D-1-i", "A-4-iv, B-1-i,   C-3-iii,  D-2-ii", "A-1-i,  B-4-iv,  C-2-ii,   D-3-iii"],
    correct: 0,
    explanation: "As per DA-122 notes: DAP=18-46-0 (NP complex); MAP=11-52-0 (NP complex); Complete NPK 17=17-17-17 (complete); 10-26-26 (NPK, K dominant)."
  },
  {
    id: "d122x_091",
    subject: "da-122",
    lecture: "lecture-20",
    lectureNo: 20,
    question: "Match the secondary nutrient fertilizers with their nutrient supply:\n     Column-I (Fertilizer)       |  Column-II (Nutrient supplied)|  Column-III (Chemical formula)\nA.  Gypsum                       |  1.  Magnesium + Sulphur      |  i.   MgSO4·7H2O\nB.  Epsomite                     |  2.  Calcium + Sulphur        |  ii.  CaSO4·2H2O\nC.  Calcitic lime                |  3.  Nitrogen + Sulphur       |  iii. (NH4)2SO4\nD.  Ammonium sulphate            |  4.  Calcium only             |  iv.  CaCO3",
    options: ["A-4-iv, B-3-iii, C-1-i,    D-2-ii", "A-3-iii, B-4-iv, C-2-ii,   D-1-i", "A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-2-ii, B-1-i,   C-4-iv,   D-3-iii"],
    correct: 3,
    explanation: "As per DA-122 notes: Gypsum (Ca+S, CaSO4.2H2O); Epsomite (Mg+S, MgSO4.7H2O); Calcitic lime (Ca only, CaCO3); Ammonium sulphate (N+S, (NH4)2SO4)."
  },
  {
    id: "d122x_092",
    subject: "da-122",
    lecture: "lecture-27",
    lectureNo: 27,
    question: "Match the methods of fertilizer application with their descriptions:\n     Column-I (Method)           |  Column-II (Description)     |  Column-III (Advantage)\nA.  Broadcasting                 |  1.  Applied through irrigation |  i.  Precise timing/dose\nB.  Band placement               |  2.  Spread over soil surface   |  ii. Reduces P fixation\nC.  Fertigation                  |  3.  Sprayed on leaves          |  iii. Quick correction of deficiency\nD.  Foliar application           |  4.  Placed near root zone      |  iv. Simple, large area",
    options: ["A-3-iii, B-2-iv, C-4-ii,  D-1-i", "A-2-iv, B-4-ii,  C-1-i,   D-3-iii", "A-1-i,  B-3-iii, C-4-ii,  D-2-iv", "A-4-ii, B-1-i,   C-2-iv,  D-3-iii"],
    correct: 1,
    explanation: "As per DA-122 notes: Broadcasting (spread over surface, simple/large area); Band placement (near root zone, reduces P fixation); Fertigation (through irrigation, precise timing/dose); Foliar (sprayed on leaves, quick correction)."
  },
  {
    id: "d122x_093",
    subject: "da-122",
    lecture: "lecture-13",
    lectureNo: 13,
    question: "Match the concentrated organic manures with their approximate N content:\n     Column-I (Manure)           |  Column-II (N content %)     |  Column-III (P2O5 content %)\nA.  Blood meal                   |  1.  3-4%                     |  i.   ~20%\nB.  Bone meal                    |  2.  12-14%                   |  ii.  2-3%\nC.  Fish meal                    |  3.  8-12%                    |  iii. 5-7%\nD.  Neem cake (plant origin)     |  4.  5%                       |  iv.  1-2%",
    options: ["A-1-i,  B-3-iii, C-2-ii,   D-4-iv", "A-3-iii, B-4-iv, C-1-i,    D-2-ii", "A-4-iv, B-2-ii,  C-1-i,    D-3-iii", "A-2-ii, B-1-i,   C-3-iii,  D-4-iv"],
    correct: 3,
    explanation: "As per DA-122 notes: Blood meal (12-14% N, 2-3% P2O5); Bone meal (3-4% N, ~20% P2O5); Fish meal (8-12% N, 5-7% P2O5); Neem cake (~5% N, 1-2% P2O5)."
  },
  {
    id: "d122x_094",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Match the FYM preparation methods with their key features:\n     Column-I (Method)           |  Column-II (Storage)         |  Column-III (Quality)\nA.  Heap method                  |  1.  Covered pit, granite stone|  i.   Best quality, minimum loss\nB.  Pit method                   |  2.  Open air, above ground    |  ii.  Maximum nutrient loss\nC.  Covered pit method           |  3.  Open pit, below ground    |  iii. Moderate loss\nD.  All three methods            |  4.  Varying methods           |  iv.  5-6 t/animal/year",
    options: ["A-2-ii, B-3-iii, C-1-i,   D-4-iv", "A-3-iii, B-4-iv, C-2-ii,   D-1-i", "A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-4-iv, B-1-i,   C-2-ii,   D-3-iii"],
    correct: 0,
    explanation: "As per DA-122 notes: Heap (above ground, maximum loss); Pit (below ground, moderate loss, 5-6 t/animal/year); Covered pit (granite stone, best quality, minimum loss)."
  },
  {
    id: "d122x_095",
    subject: "da-122",
    lecture: "lecture-29",
    lectureNo: 29,
    question: "Match the INM components with their functions:\n     Column-I (Component)        |  Column-II (Function)        |  Column-III (Example)\nA.  Chemical fertilizers         |  1.  Improve soil health, structure|  i.  FYM, compost, vermicompost\nB.  Organic manures              |  2.  Supply beneficial microbes   |  ii. Rhizobium, VAM, Azotobacter\nC.  Biofertilizers               |  3.  Quick supply of specific nutrients| iii. Urea, DAP, MOP\nD.  Crop residue incorporation   |  4.  Recycle nutrients in-situ    |  iv.  Paddy straw, wheat straw",
    options: ["A-1-i,   B-4-iv, C-3-iii,  D-2-ii", "A-3-iii, B-1-i,  C-2-ii,   D-4-iv", "A-2-ii,  B-3-iii, C-1-i,   D-4-iv", "A-4-iv,  B-2-ii, C-4-iv,   D-1-i"],
    correct: 1,
    explanation: "As per DA-122 notes: Chemical fertilizers (quick N/P/K supply); Organic manures (improve soil health/structure, e.g., FYM, compost); Biofertilizers (supply beneficial microbes); Crop residue incorporation (recycle nutrients in situ)."
  },
  {
    id: "d122x_096",
    subject: "da-122",
    lecture: "lecture-20",
    lectureNo: 20,
    question: "Match the micronutrient fertilizers with their chemical form:\n     Column-I (Micronutrient)    |  Column-II (Common fertilizer)|  Column-III (Application rate typical)\nA.  Zinc                         |  1.  FeSO4                    |  i.   5-10 kg/ha\nB.  Iron                         |  2.  ZnSO4                    |  ii.  25-50 kg/ha (soil) or spray\nC.  Boron                        |  3.  MnSO4                    |  iii. 0.5-1.0 kg/ha\nD.  Manganese                    |  4.  Borax                    |  iv.  1-2 kg/ha",
    options: ["A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-4-iv, B-3-iii, C-2-ii,   D-1-i", "A-2-ii, B-1-i,   C-4-iv,   D-3-iii", "A-3-iii, B-4-iv, C-1-i,    D-2-ii"],
    correct: 2,
    explanation: "As per DA-122 notes: Zinc (ZnSO4, 25-50 kg/ha soil or foliar spray); Iron (FeSO4, 5-10 kg/ha or foliar); Boron (Borax, 1-2 kg/ha); Manganese (MnSO4, 0.5-1.0 kg/ha or spray)."
  },
  {
    id: "d122x_097",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Match the green manure crops with their botanical names:\n     Column-I (Common name)      |  Column-II (Botanical name)  |  Column-III (N fixation kg/ha)\nA.  Dhaincha                     |  1.  Vigna radiata var. sublobata | i.  40-80 kg/ha\nB.  Pillipesara                  |  2.  Crotalaria juncea        |  ii. 50-100 kg/ha\nC.  Sunn hemp (Crotalaria)       |  3.  Sesbania aculeata        |  iii. 60-100 kg/ha\nD.  Berseem                      |  4.  Trifolium alexandrinum   |  iv.  100-200 kg/ha",
    options: ["A-4-iv, B-3-iii, C-4-iv,   D-1-i", "A-2-ii, B-4-iv,  C-1-i,    D-3-iii", "A-3-iii, B-1-i,   C-2-ii,   D-4-iv", "A-1-i,  B-2-ii,  C-3-iii,  D-4-iv"],
    correct: 2,
    explanation: "As per DA-122 notes: Dhaincha (Sesbania aculeata, 60-100 kg N/ha); Pillipesara (Vigna radiata var. sublobata, 40-80 kg N/ha); Sunn hemp (Crotalaria juncea, 50-100 kg N/ha); Berseem (Trifolium alexandrinum, 100-200 kg N/ha)."
  },
  {
    id: "d122x_098",
    subject: "da-122",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Match the reasons for soil fertility decline with their mechanisms:\n     Column-I (Reason)           |  Column-II (Mechanism)       |  Column-III (Prevention)\nA.  Volatilization               |  1.  Loss of top fertile soil |  i.   Erosion control\nB.  Soil erosion                 |  2.  NH3 gas loss from urea   |  ii.  Deep placement, acidic soil\nC.  Leaching                     |  3.  Downward movement of NO3-|  iii. Split application\nD.  Crop removal                 |  4.  Nutrient removal with produce|  iv. Replenishment via fertilizers",
    options: ["A-2-ii, B-1-i,   C-3-iii,  D-4-iv", "A-3-iii, B-4-iv, C-1-i,    D-2-ii", "A-4-iv, B-2-ii,  C-1-i,    D-3-iii", "A-1-i,  B-3-iii, C-2-ii,   D-4-iv"],
    correct: 0,
    explanation: "As per DA-122 notes: Volatilization (NH3 gas from urea, prevented by deep placement); Soil erosion (top soil loss, erosion control); Leaching (NO3- moved downward, split application); Crop removal (nutrients taken away, replenish via fertilizers)."
  },
  {
    id: "d122x_099",
    subject: "da-122",
    lecture: "lecture-17",
    lectureNo: 17,
    question: "Match the fertilizer types with their definitions:\n     Column-I (Type)             |  Column-II (Definition)      |  Column-III (Example)\nA.  Straight fertilizer          |  1.  2+ nutrients from reaction|  i.   DAP, complex NPK\nB.  Mixed fertilizer             |  2.  One nutrient element     |  ii.  Urea, SSP, MOP\nC.  Complex fertilizer           |  3.  Blending of straight fertils|  iii. Farm-mixed NPK\nD.  Biofertilizer                |  4.  Live microorganisms       |  iv.  Rhizobium, VAM",
    options: ["A-3-iii, B-2-ii, C-4-iv,   D-1-i", "A-2-ii, B-3-iii, C-1-i,   D-4-iv", "A-4-iv, B-1-i,   C-3-iii,  D-2-ii", "A-1-i,  B-4-iv,  C-2-ii,   D-3-iii"],
    correct: 1,
    explanation: "As per DA-122 notes: Straight (one nutrient, e.g., urea/SSP/MOP); Mixed (blending of straight fertilizers); Complex (2+ nutrients from chemical reaction, e.g., DAP); Biofertilizer (live microorganisms, e.g., Rhizobium, VAM)."
  },
  {
    id: "d122x_100",
    subject: "da-122",
    lecture: "lecture-30",
    lectureNo: 30,
    question: "Match the advantages and constraints of INM:\n     Column-I (Aspect)           |  Column-II (Advantage)       |  Column-III (Constraint)\nA.  Soil health                  |  1.  Improves OM, microbial life|  i.  Bulky manures hard to transport\nB.  Nutrient supply              |  2.  Reduces fertilizer cost   |  ii. Slow nutrient release from organics\nC.  Environment                  |  3.  Reduces pollution/GHG     |  iii. Higher labour requirement\nD.  Economics                    |  4.  Optimises resource use    |  iv.  Higher initial investment",
    options: ["A-4-iv, B-4-iv,  C-2-ii,  D-1-i", "A-2-ii, B-3-iii, C-1-i,   D-4-iv", "A-3-iii, B-1-i,  C-4-iv,  D-2-ii", "A-1-i,  B-2-ii,  C-3-iii,  D-4-iv"],
    correct: 3,
    explanation: "As per DA-122 notes: INM advantages include improved soil health (OM, microbes), reduced pollution, and optimised resource use. Constraints include transport of bulky manures, slow nutrient release, and higher labour/initial investment."
  },
  {
    id: "d122x_104",
    subject: "da-122",
    lecture: "lecture-20",
    lectureNo: 20,
    question: "Copper sulphate (CuSO4) is applied as a fertilizer to correct which micronutrient deficiency?",
    options: ["Manganese deficiency in acidic soils", "Copper deficiency especially in organic/peaty soils and newly reclaimed soils", "Boron deficiency in oilseed crops", "Zinc deficiency in rice causing Khaira disease"],
    correct: 1,
    explanation: "Copper sulphate (CuSO4.5H2O, blue vitriol) is used to correct copper (Cu) deficiency. Copper deficiency is most common in organic/peaty soils, sandy soils, and newly reclaimed soils. It causes reclamation disease in cereals and dieback in citrus and other fruit crops.",
    difficulty: "hard"
  },
  {
    id: "d122l_151",
    subject: "da-122",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Compost prepared using farm organic wastes with fresh dung and/or urine-soaked earth as a starter is called:",
    options: ["Rural compost", "Urban compost", "Green manure", "Vermicompost"],
    correct: 0,
    explanation: "As per DA-122 notes: Compost prepared using farm organic wastes and fresh dung and/or urine soaked earth as a starter is called Rural Compost."
  },
  {
    id: "d122l_152",
    subject: "da-122",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The popular household biogas unit promoted in villages is commonly called:",
    options: ["Surya Jyoti", "Gruha Lakshmi", "Annapurna", "Kamadhenu"],
    correct: 1,
    explanation: "As per DA-122 notes: The biogas unit is popularly called as 'Gruha Lakshmi', helping village development."
  },
  {
    id: "d122l_153",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "In the symbiotic association in root nodules, Rhizobium fixes atmospheric nitrogen to the extent of:",
    options: ["2-5 kg nitrogen per acre", "200-300 kg nitrogen per acre", "25-50 kg nitrogen per acre", "1-2 kg nitrogen per acre"],
    correct: 2,
    explanation: "As per DA-122 notes: Rhizobium fixes 25-50 kg nitrogen per acre in their root nodules, reducing nitrogen loss from soil."
  },
  {
    id: "d122l_154",
    subject: "da-122",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "In vermicomposting, the turnover (out-turn) of compost obtained from the residue is approximately:",
    options: ["50 per cent", "100 per cent", "25 per cent", "75 per cent"],
    correct: 3,
    explanation: "As per DA-122 notes: The turnover of vermicompost is 75% (of 1000 kg material accommodated in the pit, the out-turn is 750 kg)."
  },
  {
    id: "d122l_155",
    subject: "da-122",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The symbiotic association of Azolla pinnata and Anabaena azollae is termed the:",
    options: ["Azolla-Anabaena complex", "Rhizobium-legume symbiosis", "Mycorrhizal association", "Frankia complex"],
    correct: 0,
    explanation: "As per DA-122 notes: The symbiotic association of Azolla pinnata and Anabaena azollae is termed the Azolla-Anabaena complex; it is used as green manure for rice."
  },
  {
    id: "d122l_156",
    subject: "da-122",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Azolla is recommended as a green manure for rice mainly because of its large biomass and high nitrogen content of:",
    options: ["0.5-1 per cent N", "4-6 per cent N", "10-12 per cent N", "20-25 per cent N"],
    correct: 1,
    explanation: "As per DA-122 notes: Azolla is recommended as green manure because of its large biomass and high N content (4-6% N) for submerged rice fields."
  },
  {
    id: "d122l_157",
    subject: "da-122",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Green leaf manuring should be carried out before sowing of the main crop by about:",
    options: ["1 day", "2-3 months", "15-20 days", "90 days"],
    correct: 2,
    explanation: "As per DA-122 notes: In dry and rainfed areas, green leaf manuring should be done 15-20 days prior to sowing of the main crop."
  },
  {
    id: "d122l_158",
    subject: "da-122",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "To neutralise the acidity caused by 100 kg of ammonium sulphate, the quantity of calcium carbonate required is:",
    options: ["50 kg", "10 kg", "250 kg", "110 kg"],
    correct: 3,
    explanation: "As per DA-122 notes: To neutralize the acidity, for every 100 kg of ammonium sulphate, 110 kg of calcium carbonate is required."
  },
  {
    id: "d122l_159",
    subject: "da-122",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "The oil cake known as 'castor pomace' is:",
    options: ["Castor cake", "Neem cake", "Mustard cake", "Cotton seed cake"],
    correct: 0,
    explanation: "As per DA-122 notes: Among non-edible oil cakes, castor cake is also called castor pomace."
  }
];
