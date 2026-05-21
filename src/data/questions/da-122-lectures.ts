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
    options: ["1.0% N, 0.5% P₂O₅, 1.0% K₂O", "0.5% N, 0.2% P₂O₅, 0.5% K₂O", "0.1% N, 0.05% P₂O₅, 0.1% K₂O", "2.0% N, 1.0% P₂O₅, 2.0% K₂O"],
    correct: 1,
    explanation: "Well-decomposed FYM contains approximately 0.5% N, 0.2% P₂O₅, and 0.5% K₂O on a fresh-weight basis. These values vary with animal species, feed quality, and degree of decomposition."
  },
  {
    id: "d122l_002",
    subject: "da-122",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "In the Indore method of composting, the organic materials are:",
    options: ["Stacked in heaps and turned 2–3 times during 3–5 months of decomposition", "Burned partially and then mixed with soil", "Mixed with night soil and decomposed in sealed chambers", "Placed in pits and kept anaerobic throughout decomposition"],
    correct: 0,
    explanation: "The Indore method (developed at Indore, MP) involves stacking organic materials in heaps 1.5–2 m high and turning them 2–3 times over 3–5 months to ensure aerobic decomposition. It produces good quality compost."
  },
  {
    id: "d122l_003",
    subject: "da-122",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The Bangalore method of composting differs from the Indore method in that:",
    options: ["It uses earthworms for decomposition", "It requires turning every 15 days for rapid decomposition", "It places materials in pits with layers of night soil/urine earth and keeps them anaerobic", "It uses raised heaps instead of pits"],
    correct: 2,
    explanation: "The Bangalore (HESCO) method developed by the City Improvement Trust uses pits where organic waste is layered with night soil or urine earth and kept moist for anaerobic decomposition over 3–6 months without turning."
  },
  {
    id: "d122l_004",
    subject: "da-122",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The recommended dose of FYM for most cereal crops in India is approximately:",
    options: ["1–2 t ha⁻¹", "5–10 t ha⁻¹", "100–150 t ha⁻¹", "25–50 t ha⁻¹"],
    correct: 1,
    explanation: "The standard recommendation for FYM in Indian cereal crops is 10–15 t ha⁻¹ (sometimes cited as 5–10 t ha⁻¹ for lighter soils). Vegetable crops may need 20–25 t ha⁻¹ due to higher nutrient demand."
  },
  {
    id: "d122l_005",
    subject: "da-122",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Which cattle dung is considered richer in plant nutrients compared to buffalo dung on a dry-weight basis?",
    options: ["Sheep dung (not cattle)", "They are identical in composition", "Cow dung", "Buffalo dung"],
    correct: 2,
    explanation: "Cow dung (0.3% N, 0.2% P, 0.1% K fresh weight) is generally richer in N compared to buffalo dung on a dry-matter basis because cows digest food less completely, leaving more undigested organic N in the dung."
  },
  {
    id: "d122l_006",
    subject: "da-122",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Poultry manure is considered superior to cattle FYM as a fertilizer because:",
    options: ["Poultry manure has lower C:N ratio than cattle FYM", "Poultry manure has lower moisture content only", "Poultry manure acts only as a slow-release source", "Poultry manure is richer in nutrients (approximately 1.5% N, 1.0% P₂O₅, 0.9% K₂O)"],
    correct: 3,
    explanation: "Poultry manure contains about 1.5% N, 1.0% P₂O₅, and 0.9% K₂O — nearly 3× higher in N than cattle FYM. It also contains more phosphorus. Its low C:N ratio ensures rapid mineralisation."
  },
  {
    id: "d122l_007",
    subject: "da-122",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The main advantage of composting over direct application of raw organic waste is:",
    options: ["Composting reduces the organic matter content of the final product", "Composting stabilises nutrients, reduces pathogens, weed seeds, and produces a uniform product", "Composting increases the volume of material applied per hectare", "Composting increases the C:N ratio of the material"],
    correct: 1,
    explanation: "Composting reduces volume (by 50–60%), kills pathogens and weed seeds by heat generation, lowers C:N ratio to 15–20:1, stabilises nutrients, and produces a uniform, easy-to-apply product."
  },
  {
    id: "d122l_008",
    subject: "da-122",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The optimum C:N ratio for compost starting material to ensure efficient decomposition is:",
    options: ["60–80:1", "5–10:1", "25–30:1", "100–150:1"],
    correct: 2,
    explanation: "The optimum C:N ratio for composting feedstock is 25–30:1. Lower ratios (< 20:1) cause N loss as ammonia; higher ratios (> 40:1) slow decomposition due to N limitation for microbes."
  },
  {
    id: "d122l_009",
    subject: "da-122",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Which of the following nitrogen losses is greatest during storage of FYM in open heaps?",
    options: ["Leaching of nitrate (NO₃⁻) into groundwater", "Fixation of N by 2:1 clay minerals", "Ammonia (NH₃) volatilisation from urine decomposition", "Denitrification loss as N₂ gas"],
    correct: 2,
    explanation: "The largest N loss during FYM storage is ammonia volatilisation from urea/uric acid in urine, especially in open heaps exposed to sun and rain. Up to 50% of N can be lost this way."
  },
  {
    id: "d122l_010",
    subject: "da-122",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The pit method of composting is most suitable for:",
    options: ["Urban municipal solid waste composting", "Dry areas where moisture conservation is important for decomposition", "Humid areas with high rainfall and good natural drainage", "Large commercial composting operations"],
    correct: 1,
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
    options: ["High nitrogen (approximately 5–7% N on dry weight)", "Beneficial bacteria only", "Carbon-rich material for energy", "Phosphorus and potassium only"],
    correct: 0,
    explanation: "Night soil contains approximately 5–7% N (dry weight), making it a rich nitrogen source. This is why the Bangalore method layers it with crop waste to speed decomposition and enrich the compost."
  },
  {
    id: "d122l_013",
    subject: "da-122",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Sheep and goat manure (droppings) are particularly valued because:",
    options: ["They have very high moisture content aiding decomposition", "They are comparatively dry and concentrated with 3% N, 1% P₂O₅, 2% K₂O", "They are free from weed seeds and pathogens", "They contain hormones that stimulate plant growth"],
    correct: 1,
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
    options: ["Aerate the pile to maintain aerobic conditions and uniform decomposition", "Kill earthworms that may be competing with microbes", "Add mineral fertilizers to the compost", "Remove excess moisture from the compost"],
    correct: 0,
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
    options: ["Pheretima posthuma", "Metaphire houlleti", "Lumbricus terrestris", "Eisenia fetida (Red wiggler / Tiger worm)"],
    correct: 3,
    explanation: "Eisenia fetida (red wiggler or manure worm) is the most widely used species for vermicomposting due to its tolerance of high organic matter concentrations, rapid reproduction, and surface-feeding habit."
  },
  {
    id: "d122l_017",
    subject: "da-122",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Vermicompost is superior to conventional FYM in nutrient availability because:",
    options: ["Vermicompost has higher C:N ratio, releasing nutrients more slowly", "Vermicompost contains higher total nutrient percentages than FYM", "Nutrients in vermicompost are in microbially processed, plant-available forms and it contains plant growth hormones", "Vermicompost is sterile, free from all microorganisms"],
    correct: 2,
    explanation: "Vermicompost contains nutrients (N, P, K) in readily plant-available forms, abundant beneficial microbes, plant growth regulators (auxins, cytokinins, gibberellins), and humic substances — making it functionally superior to FYM."
  },
  {
    id: "d122l_018",
    subject: "da-122",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The typical nutrient content of vermicompost is approximately:",
    options: ["2–3% N, 1.5–2% P₂O₅, 1.5–2% K₂O", "5% N, 4% P₂O₅, 5% K₂O", "0.5% N, 0.2% P, 0.5% K", "0.1% N, 0.05% P, 0.1% K"],
    correct: 0,
    explanation: "Good quality vermicompost typically contains 2–3% N, 1.5–2% P₂O₅, and 1.5–2% K₂O — approximately 4–6 times higher in plant nutrients than conventional FYM."
  },
  {
    id: "d122l_019",
    subject: "da-122",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Dhaincha (Sesbania bispinosa) is a commonly used green manure crop in India because it:",
    options: ["Produces seeds with 40% protein content used as livestock feed", "Is a legume that requires no water for growth", "Fixes 80–100 kg N ha⁻¹ through Rhizobium symbiosis, grows fast, and tolerates waterlogging", "Fixes nitrogen through association with Azospirillum only"],
    correct: 2,
    explanation: "Dhaincha (Sesbania bispinosa) is highly valued for green manuring because it grows rapidly (50–60 days), fixes 80–100 kg N ha⁻¹, tolerates waterlogging and salinity, and produces high biomass."
  },
  {
    id: "d122l_020",
    subject: "da-122",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The optimum stage to incorporate green manure crops into the soil is:",
    options: ["At 10–15 days after germination (seedling stage)", "After the crop has dried completely (dry matter stage)", "At full seed maturity (all pods developed)", "At 50% flowering stage when biomass and nitrogen content are maximum"],
    correct: 3,
    explanation: "Green manure crops should be incorporated at 50% flowering stage — when biomass production is near maximum and N content is high. After flowering, C:N ratio increases and decomposition slows."
  },
  {
    id: "d122l_021",
    subject: "da-122",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Sunn hemp (Crotalaria juncea) as a green manure crop fixes approximately how much nitrogen per hectare?",
    options: ["300–400 kg N ha⁻¹", "150–200 kg N ha⁻¹", "10–20 kg N ha⁻¹", "40–80 kg N ha⁻¹"],
    correct: 3,
    explanation: "Sunn hemp (Crotalaria juncea) fixes approximately 40–80 kg N ha⁻¹ through Rhizobium symbiosis, depending on soil conditions. It also adds substantial organic matter when incorporated."
  },
  {
    id: "d122l_022",
    subject: "da-122",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Azolla is an aquatic fern used as a biofertilizer in rice paddies because it:",
    options: ["Harbours Anabaena azollae (a BGA) in its leaf cavities that fixes N₂", "Acts as a green manure only without any N fixation", "Directly absorbs atmospheric nitrogen into its fronds", "Produces growth hormones that stimulate rice tillering"],
    correct: 0,
    explanation: "Azolla is a water fern that maintains a symbiotic association with the cyanobacterium Anabaena azollae living in leaf cavities. Anabaena fixes N₂, supplying nitrogen to both the fern and rice paddies."
  },
  {
    id: "d122l_023",
    subject: "da-122",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The recommended dose of vermicompost for vegetable crops is approximately:",
    options: ["5–7.5 t ha⁻¹", "50–100 t ha⁻¹", "20–25 t ha⁻¹", "1–2 t ha⁻¹"],
    correct: 0,
    explanation: "Vermicompost is recommended at 5–7.5 t ha⁻¹ for most vegetable crops (compared to 10–15 t ha⁻¹ for FYM) due to its higher nutrient concentration and better nutrient availability."
  },
  {
    id: "d122l_024",
    subject: "da-122",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "In-situ green manuring (growing and incorporating green manure in the same field) is preferred over ex-situ because:",
    options: ["In-situ crops can be grown only in the dry season", "It avoids transport costs and nutrient losses; organic matter and N are incorporated directly", "In-situ crops fix more nitrogen than ex-situ crops", "Ex-situ green manures cannot be incorporated mechanically"],
    correct: 1,
    explanation: "In-situ green manuring avoids labour and transport involved in carrying plant material from elsewhere. The crop is grown in the same field and incorporated, minimising N losses and ensuring maximum organic matter addition."
  },
  {
    id: "d122l_025",
    subject: "da-122",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The vermicomposting process is completed in approximately:",
    options: ["1–2 weeks", "6–12 months", "45–60 days", "2–3 years"],
    correct: 2,
    explanation: "Vermicomposting takes approximately 45–60 days to produce mature vermicompost from organic feedstock under optimal conditions (temperature 25–30°C, moisture 60–70%), compared to 3–6 months for conventional composting."
  },
  {
    id: "d122l_026",
    subject: "da-122",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Sesbania aculeata (Dhaincha) is particularly valued in rice-based cropping systems because:",
    options: ["It produces high grain yield for food use", "It suppresses all weeds through allelopathy", "It tolerates submergence and can be grown even in standing water before rice transplanting", "It is a cereal crop that improves soil aeration"],
    correct: 2,
    explanation: "Sesbania aculeata can grow in waterlogged/flooded conditions, making it ideal for growing as a green manure crop in rice fields even during the pre-transplanting period when fields may be flooded."
  },
  {
    id: "d122l_027",
    subject: "da-122",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The process of worm castings (vermicast) formation improves soil fertility because castings:",
    options: ["Are inert material with no nutritional value", "Are enriched in available nutrients, beneficial microbes, and humic substances compared to unprocessed material", "Have lower nutrient content than original organic matter", "Increase soil bulk density, improving aeration"],
    correct: 1,
    explanation: "Earthworm castings (vermicast) are enriched in available N (NH₄⁺, NO₃⁻), available P, exchangeable K, and Ca compared to surrounding soil. They also contain elevated populations of beneficial bacteria and humic acids."
  },
  {
    id: "d122l_028",
    subject: "da-122",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Which green manure crop is widely used in Telangana/South India for incorporation in rice fields and can fix 60–80 kg N ha⁻¹?",
    options: ["Cowpea (Vigna unguiculata)", "Cluster bean (Cyamopsis tetragonoloba)", "Berseem (Trifolium alexandrinum)", "Sesbania (Dhaincha)"],
    correct: 3,
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
    options: ["Providing potassium and calcium through its deep tap root", "Increasing soil pH through root exudates", "Adding 100–150 kg N ha⁻¹ through biological N fixation and heavy biomass", "Producing allelopathic chemicals that suppress all weeds permanently"],
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
    options: ["All vegetables regardless of family", "Oil palm and coconut", "Leguminous crops (pulses, soybean, groundnut) that form root nodules", "All cereal crops (rice, wheat, maize)"],
    correct: 2,
    explanation: "Rhizobium forms symbiotic N₂-fixing nodules exclusively on legume roots (Family Fabaceae). Each Rhizobium species/strain is generally specific to one or a few legume host plants."
  },
  {
    id: "d122l_032",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Azotobacter is a free-living, aerobic nitrogen-fixing bacterium that fixes approximately how much N per hectare per year?",
    options: ["20–30 kg N ha⁻¹ yr⁻¹", "1–2 kg N ha⁻¹ yr⁻¹", "100–150 kg N ha⁻¹ yr⁻¹", "200–300 kg N ha⁻¹ yr⁻¹"],
    correct: 0,
    explanation: "Azotobacter chroococcum fixes approximately 20–30 kg N ha⁻¹ yr⁻¹ under favourable conditions in the rhizosphere. It also produces growth-promoting substances (IAA, gibberellins, cytokinins)."
  },
  {
    id: "d122l_033",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Azospirillum is classified as an associative nitrogen-fixing bacterium because it:",
    options: ["Lives in close association with plant roots (rhizosphere) without forming nodules", "Forms enclosed nodules on cereal roots like Rhizobium", "Lives freely in bulk soil without any plant association", "Is a strict endophyte living inside plant tissues"],
    correct: 0,
    explanation: "Azospirillum (primarily A. brasilense and A. lipoferum) is an associative (rhizospheric) N₂ fixer that colonises root surfaces and intercellular spaces of cereals and grasses without forming nodules. It also produces plant growth regulators."
  },
  {
    id: "d122l_034",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Blue-Green Algae (BGA/cyanobacteria) used as biofertilizer in rice cultivation are characterised by:",
    options: ["Symbiotic association with rice roots forming nodules", "Free-living aerobic N fixation in upland soils only", "Heterotrophic nutrition requiring organic carbon substrate", "Photosynthetic N₂ fixation using heterocysts in species like Anabaena and Nostoc"],
    correct: 3,
    explanation: "BGA (Anabaena, Nostoc, Aulosira) are photosynthetic prokaryotes that fix N₂ in specialised cells called heterocysts. They are used in rice paddies contributing 20–30 kg N ha⁻¹ per crop."
  },
  {
    id: "d122l_035",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Phosphate Solubilising Bacteria (PSB) improve phosphorus nutrition by:",
    options: ["Increasing soil pH to solubilise P in acid soils", "Forming root nodules that absorb soil P directly", "Fixing atmospheric P₂ gas and converting it to plant-available forms", "Producing organic acids (gluconic, citric) that dissolve insoluble Ca-P and Fe-P compounds"],
    correct: 3,
    explanation: "PSB (Bacillus megaterium, Pseudomonas striata) solubilise insoluble inorganic phosphates by producing organic acids (primarily gluconic acid) that dissolve Ca-P, Fe-P, and Al-P compounds, releasing plant-available H₂PO₄⁻."
  },
  {
    id: "d122l_036",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The shelf life of carrier-based biofertilizer inoculants (peat or lignite-based) is generally:",
    options: ["Indefinitely if kept dry", "1 week only", "3–5 years at ambient temperature", "1–3 months at room temperature; up to 6 months under refrigeration"],
    correct: 3,
    explanation: "Standard carrier-based biofertilizers (peat, lignite, or charcoal) have a shelf life of 6 months to 1 year from date of manufacture when stored at 4–10°C, or 3–4 months at room temperature."
  },
  {
    id: "d122l_037",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Vesicular-Arbuscular Mycorrhiza (VAM/AM fungi) improve plant nutrition primarily by:",
    options: ["Decomposing soil organic matter to release nutrients", "Fixing atmospheric nitrogen for the host plant", "Extending the effective root surface area through hyphae to absorb P, Zn, and water beyond the depletion zone", "Producing antibiotics that kill soil pathogens"],
    correct: 2,
    explanation: "AM fungi extend plant root reach by producing an external hyphal network (extraradical mycelium) that explores soil beyond the P-depletion zone, absorbing H₂PO₄⁻, Zn²⁺, and water for the host plant."
  },
  {
    id: "d122l_038",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The method of applying biofertilizer inoculant to seeds is called:",
    options: ["Seed treatment (seed inoculation)", "Root dipping", "Soil drenching", "Foliar spray"],
    correct: 0,
    explanation: "Seed inoculation (seed treatment) is the most common method — seeds are mixed with carrier-based inoculant (using rice gruel or jaggery solution as sticker) at the rate of 200–250 g inoculant per 10 kg of seed."
  },
  {
    id: "d122l_039",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The nitrogen-fixing capacity of Rhizobium in symbiosis with soybean under optimum conditions is approximately:",
    options: ["10–20 kg N ha⁻¹ per crop", "200–300 kg N ha⁻¹ per crop", "500–600 kg N ha⁻¹ per crop", "50–100 kg N ha⁻¹ per crop"],
    correct: 3,
    explanation: "Rhizobium–soybean symbiosis can fix 100–300 kg N ha⁻¹ per season under optimal conditions, meeting 60–80% of the crop's nitrogen need. Groundnut symbiosis typically fixes 100–200 kg N ha⁻¹."
  },
  {
    id: "d122l_040",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The recommended carrier material for biofertilizer production that supports maximum microbial survival is:",
    options: ["Sand (sterile)", "Neutralised (pH 6.5–7.0) peat or lignite sterilised at 120°C", "Vermicompost mixed with sand", "Clay soil (unsterilised)"],
    correct: 1,
    explanation: "Sterilised peat or lignite (charcoal) neutralised to pH 6.5–7.0 is the best carrier for biofertilizers — it provides good moisture retention, oxygen, and carbon while supporting high microbial populations (10⁸–10⁹ cells g⁻¹)."
  },
  {
    id: "d122l_041",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Biofertilizer inoculated seeds should NOT be mixed with chemical fertilizers at the time of sowing because:",
    options: ["Chemical fertilizers (especially N fertilizers and fungicides) can kill the microorganisms in the inoculant", "Chemical fertilizers reduce seed germination only", "There is no contraindication to mixing biofertilizer with chemical fertilizers", "Chemical fertilizers improve inoculant survival"],
    correct: 0,
    explanation: "High osmotic concentration from soluble fertilizers and toxicity from fungicide seed treatments kill biofertilizer microorganisms. Inoculated seeds should be kept separate from chemical fertilizers and should be sown within hours of inoculation."
  },
  {
    id: "d122l_042",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The enzyme responsible for biological nitrogen fixation (BNF) is:",
    options: ["Nitrogenase is the same as nitrogenase oxidase", "Nitrogenase (consisting of dinitrogenase and dinitrogenase reductase)", "Urease", "Nitrate reductase"],
    correct: 1,
    explanation: "Nitrogenase is the enzyme complex (dinitrogenase + dinitrogenase reductase, containing Fe and Mo-Fe proteins) that catalyses N₂ + 8H⁺ + 8e⁻ + 16ATP → 2NH₃ + H₂ + 16ADP + 16Pi. It is highly oxygen-sensitive."
  },
  {
    id: "d122l_043",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "BGA algal application in rice paddies is done at the rate of:",
    options: ["500 kg ha⁻¹", "100 kg ha⁻¹", "100 g ha⁻¹", "10 kg ha⁻¹"],
    correct: 3,
    explanation: "BGA inoculant (algalised soil or flakes) is applied at 10 kg ha⁻¹ to flooded rice paddies within a week of transplanting. The algae multiply rapidly in standing water, fixing 20–30 kg N ha⁻¹ per crop."
  },
  {
    id: "d122l_044",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The minimum viable count of microorganisms per gram of carrier material required for a quality biofertilizer product is:",
    options: ["10³ cells g⁻¹", "10⁵ cells g⁻¹", "10¹² cells g⁻¹", "10⁷–10⁸ cells g⁻¹"],
    correct: 3,
    explanation: "Quality biofertilizer inoculants must contain a minimum of 10⁷–10⁸ viable cells per gram of carrier material (as per BIS standards IS:8268) at the time of application to ensure effective colonisation of the rhizosphere."
  },
  {
    id: "d122l_045",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Azolla used as biofertilizer is incorporated into the rice field by:",
    options: ["Spraying a suspension on the field", "Mixing with seed at the time of sowing", "Applying dried powdered Azolla as a soil amendment", "Allowing it to grow for 2–3 weeks then incorporating it into the soil before transplanting or as a dual crop"],
    correct: 3,
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
    options: ["46%", "20.6%", "82%", "33%"],
    correct: 0,
    explanation: "Urea [CO(NH₂)₂] contains 46% N — the highest N content of any solid N fertilizer. This makes it the most cost-effective N source per unit nitrogen and the most widely used N fertilizer in India."
  },
  {
    id: "d122l_047",
    subject: "da-122",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Ammonium sulphate (AS) contains what percentage of nitrogen and what secondary nutrient?",
    options: ["46% N; no secondary nutrient", "33% N and 18% Calcium (Ca)", "20.6% N and 24% Sulphur (S)", "15% N and 10% Magnesium (Mg)"],
    correct: 2,
    explanation: "Ammonium sulphate [(NH₄)₂SO₄] contains 20.6% N and 24% S. It is acidifying and preferred for alkaline soils and S-deficient crops like oilseeds, pulses, and rice."
  },
  {
    id: "d122l_048",
    subject: "da-122",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Ammonia volatilisation from urea applied to the soil surface is highest when:",
    options: ["Applied in the evening during cool weather", "Applied to flooded alkaline or calcareous soil surface in hot conditions", "Applied in granular form to dry soil", "Applied to moist acid soil and immediately incorporated"],
    correct: 1,
    explanation: "Urea → NH₄⁺ (urease) → NH₃ volatilisation is maximal at high pH (> 7.5), high temperature, high soil moisture, and when urea remains on the surface. Alkaline/calcareous flooded fields are worst-case scenarios."
  },
  {
    id: "d122l_049",
    subject: "da-122",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Calcium Ammonium Nitrate (CAN) fertilizer contains nitrogen in which form(s)?",
    options: ["Ammonium (NH₄⁺) only", "Urea and ammonium sulphate mixture", "Both ammonium (NH₄⁺) and nitrate (NO₃⁻), with approximately 25–26% total N", "Nitrate (NO₃⁻) only"],
    correct: 2,
    explanation: "CAN (Calcium Ammonium Nitrate) contains 25–26% N with N in equal parts as NH₄⁺ and NO₃⁻, plus ~10% Ca. The nitrate fraction is immediately available; ammonium is slower-release. It is non-acidifying."
  },
  {
    id: "d122l_050",
    subject: "da-122",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Ammonium chloride (NH₄Cl) fertilizer contains approximately what percentage of nitrogen?",
    options: ["25.5–26%", "33%", "46%", "20%"],
    correct: 0,
    explanation: "Ammonium chloride (NH₄Cl) contains 25.5–26% N. It is preferred for paddy rice in Japan and China but Cl toxicity limits its use for tobacco, potatoes, and other chlorine-sensitive crops."
  },
  {
    id: "d122l_051",
    subject: "da-122",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Slow-release nitrogen fertilizers (SRF) are designed to reduce N losses by:",
    options: ["Converting N to inert organic form that microbes cannot decompose", "Using coatings (sulphur, polymer) or chemical inhibitors that delay N release, matching plant N demand", "Applying N in a single large basal dose", "Mixing urea with high doses of phosphate fertilizers"],
    correct: 1,
    explanation: "SRFs use physical coatings (sulphur-coated urea — SCU, polymer-coated urea — PCU) or chemical compounds (urease inhibitors: NBPT; nitrification inhibitors: DCD, DMPP) to delay and extend N release, matching crop uptake."
  },
  {
    id: "d122l_052",
    subject: "da-122",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The nitrification process in soil converts ammonium (NH₄⁺) to nitrate (NO₃⁻) through which organisms?",
    options: ["Autotrophic bacteria (Nitrosomonas: NH₄⁺ → NO₂⁻; Nitrobacter: NO₂⁻ → NO₃⁻)", "Anaerobic heterotrophic bacteria (Clostridium)", "Mycorrhizal fungi", "Actinomycetes in dry soils"],
    correct: 0,
    explanation: "Nitrification is a two-step aerobic process: Nitrosomonas converts NH₄⁺ → NO₂⁻ (nitrite); Nitrobacter converts NO₂⁻ → NO₃⁻ (nitrate). Both are autotrophic bacteria requiring oxygen."
  },
  {
    id: "d122l_053",
    subject: "da-122",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The Neem-coated urea (NCU) policy mandated in India aims to:",
    options: ["Reduce urea theft for non-agricultural purposes by making it bitter", "Add micronutrients (Zn, B) from neem seeds to the soil", "Reduce urease activity and slow nitrification, improving N use efficiency by 5–10%", "Improve neem tree cultivation by providing a market for neem oil"],
    correct: 2,
    explanation: "Neem-coated urea (2% neem oil) has dual benefits: neem oil contains nimbin/nimbidin that inhibit soil urease (reducing NH₃ volatilisation) and Nitrosomonas activity (slowing nitrification), improving NUE by 5–15%."
  },
  {
    id: "d122l_054",
    subject: "da-122",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Deep placement of urea supergranules (USG) in rice paddies improves nitrogen use efficiency by:",
    options: ["Reducing the need for phosphatic fertilizers", "Increasing the dose applied per crop", "Placing urea in the reduced (anaerobic) zone below the oxidised surface layer, minimising volatilisation and nitrification-denitrification losses", "Making urea unavailable to weeds growing in standing water"],
    correct: 2,
    explanation: "USG (1.8–2.7 g briquettes) placed 7–10 cm deep in the reduced anaerobic zone of flooded rice prevents NH₃ volatilisation and the nitrification-denitrification cycle (which occurs only in the oxidised surface layer), improving NUE by 20–30%."
  },
  {
    id: "d122l_055",
    subject: "da-122",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The 'splitting' of nitrogen fertilizer applications into 2–3 doses for cereal crops is recommended to:",
    options: ["Match N supply with crop demand at critical growth stages, reducing leaching and volatilisation losses", "Allow mechanical application using different equipment", "Reduce the total quantity of N applied per season", "Comply with government regulations on fertilizer sales"],
    correct: 0,
    explanation: "Split application (basal + top dressing at tillering/panicle initiation) synchronises N availability with peak crop demand, reducing N accumulation in soil when uptake is low and thus cutting leaching, denitrification, and volatilisation losses."
  },
  {
    id: "d122l_056",
    subject: "da-122",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Which nitrogen fertilizer is most suitable for acid soils that need no further acidification?",
    options: ["Urea (slightly acidifying after nitrification)", "Ammonium chloride (acidifying)", "Calcium ammonium nitrate or calcium nitrate (neutral to slightly alkaline reaction)", "Ammonium sulphate (acidifying)"],
    correct: 2,
    explanation: "CAN (calcium ammonium nitrate) or calcium nitrate are the preferred N sources for acid soils since they do not acidify the soil further (Ca²⁺ neutralises acidity). Ammonium and urea fertilizers all acidify soil upon nitrification."
  },
  {
    id: "d122l_057",
    subject: "da-122",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Liquid anhydrous ammonia (NH₃) as a nitrogen fertilizer contains what percentage of N?",
    options: ["53%", "100%", "82%", "46%"],
    correct: 2,
    explanation: "Anhydrous ammonia (NH₃) contains 82% N — the highest N concentration of any fertilizer. It is injected into the soil as a pressurised liquid (boiling point –33°C). It is not used in India due to handling hazards."
  },
  {
    id: "d122l_058",
    subject: "da-122",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The physiological reaction of ammonium sulphate in soil is:",
    options: ["Neutral", "Strongly alkaline", "Neutral but with S toxicity", "Physiologically acid"],
    correct: 3,
    explanation: "Ammonium sulphate is physiologically acidic — NH₄⁺ is nitrified to NO₃⁻ + 2H⁺, acidifying the soil. The acid equivalent is 110 kg CaCO₃ per 100 kg of AS. It reduces soil pH over time."
  },
  {
    id: "d122l_059",
    subject: "da-122",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Which form of nitrogen is predominantly absorbed by rice under flooded (anaerobic) paddy conditions?",
    options: ["Nitrate (NO₃⁻)", "Urea directly without hydrolysis", "Ammonium (NH₄⁺)", "Organic N (amino acids)"],
    correct: 2,
    explanation: "Under flooded anaerobic conditions, nitrification is inhibited, so NH₄⁺ accumulates and is the dominant N form in the flooded soil solution. Rice preferentially absorbs NH₄⁺ under these conditions."
  },
  {
    id: "d122l_060",
    subject: "da-122",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Urea is classified as an amide fertilizer because it contains nitrogen in the:",
    options: ["Ammonium (–NH₄⁺) form", "Amide (–CONH₂) form", "Nitrite (–NO₂) form", "Nitrate (–NO₃) form"],
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
    options: ["60%", "44–46%", "8%", "16%"],
    correct: 3,
    explanation: "SSP contains 16% P₂O₅ (water-soluble), plus 12% S and 21% Ca. It is manufactured by treating rock phosphate with H₂SO₄: Ca₃(PO₄)₂ + 2H₂SO₄ → Ca(H₂PO₄)₂ + 2CaSO₄."
  },
  {
    id: "d122l_062",
    subject: "da-122",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Di-Ammonium Phosphate (DAP) contains approximately:",
    options: ["46% N and 18% P₂O₅", "16% N and 20% P₂O₅", "10% N and 10% P₂O₅", "18% N and 46% P₂O₅"],
    correct: 3,
    explanation: "DAP [(NH₄)₂HPO₄] contains 18% N and 46% P₂O₅. It is the most widely used phosphatic fertilizer in India, popular for its high nutrient concentration and good handling properties."
  },
  {
    id: "d122l_063",
    subject: "da-122",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Triple Super Phosphate (TSP) contains approximately what percentage of P₂O₅?",
    options: ["60%", "28%", "44–46%", "16%"],
    correct: 2,
    explanation: "TSP (Triple Superphosphate) contains 44–46% P₂O₅ (almost all water-soluble), manufactured by treating rock phosphate with phosphoric acid. It contains no S unlike SSP."
  },
  {
    id: "d122l_064",
    subject: "da-122",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Rock phosphate (RP) is directly applicable to crops mainly in which soil condition?",
    options: ["Sandy soils with low clay content", "Neutral to alkaline soils (pH 7–8.5)", "Waterlogged soils only", "Acid soils (pH < 5.5) where protons dissolve the RP gradually"],
    correct: 3,
    explanation: "Direct application of rock phosphate (apatite) is effective only in acid soils (pH < 5.5) because soil protons dissolve the insoluble calcium phosphate, releasing plant-available H₂PO₄⁻. In neutral/alkaline soils, RP dissolution is negligible."
  },
  {
    id: "d122l_065",
    subject: "da-122",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The main advantage of SSP over DAP as a phosphatic fertilizer for sulphur-deficient soils is that SSP:",
    options: ["Is cheaper per kg of P₂O₅ than DAP", "Has neutral pH reaction while DAP is alkaline", "Contains 12% sulphur (from gypsum), making it valuable for S-deficient soils and oilseed crops", "Contains higher P₂O₅ than DAP"],
    correct: 2,
    explanation: "SSP contains 12% sulphur (as CaSO₄) and 21% Ca in addition to 16% P₂O₅, making it highly valuable for sulphur-deficient soils and S-requiring crops (oilseeds, pulses, onion, garlic)."
  },
  {
    id: "d122l_066",
    subject: "da-122",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Phosphorus fixation (immobilisation) in acid soils is primarily due to reaction with:",
    options: ["Amorphous iron (Fe) and aluminium (Al) hydroxides", "Calcium carbonate (CaCO₃)", "Soil microorganisms", "Organic matter"],
    correct: 0,
    explanation: "In acid soils, applied H₂PO₄⁻ reacts rapidly with Fe(OH)₃ and Al(OH)₃ (and their amorphous forms) to form insoluble Fe-P and Al-P compounds, strongly reducing P availability — a major problem in Alfisols."
  },
  {
    id: "d122l_067",
    subject: "da-122",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Band placement (row application) of phosphatic fertilizers is preferred over broadcasting because:",
    options: ["Band application reduces contact with soil and therefore reduces P fixation, improving efficiency", "Band application increases the total dose applied", "Band application is easier and faster than broadcasting", "Band application prevents P leaching in sandy soils"],
    correct: 0,
    explanation: "Band placement near the seed row reduces the volume of soil that comes in contact with applied P, reducing adsorption/fixation and placing P close to emerging roots. This improves P use efficiency by 20–40%."
  },
  {
    id: "d122l_068",
    subject: "da-122",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Mussoorie rock phosphate (MRP) is a partially acidulated rock phosphate with P₂O₅ content of approximately:",
    options: ["20%", "16%", "8%", "44%"],
    correct: 0,
    explanation: "Mussoorie Rock Phosphate from Uttarakhand contains approximately 20% P₂O₅. It is partially soluble and suitable for direct application to acid soils as a slow-release P source."
  },
  {
    id: "d122l_069",
    subject: "da-122",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The main chemical form of P taken up by plants from soil solution is:",
    options: ["H₃PO₄ (phosphoric acid)", "PO₄³⁻ (phosphate) at all pH values", "H₂PO₄⁻ (dihydrogen phosphate) at low pH and HPO₄²⁻ at higher pH", "Organic phosphate esters directly"],
    correct: 2,
    explanation: "Plants absorb P primarily as H₂PO₄⁻ (monohydrogen phosphate) at soil pH 5–7, and as HPO₄²⁻ at higher pH. H₂PO₄⁻ is more readily absorbed. PO₄³⁻ predominates only above pH 9."
  },
  {
    id: "d122l_070",
    subject: "da-122",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The concept of 'residual effect' of phosphatic fertilizers in soil refers to:",
    options: ["P toxicity remaining in soil after excessive application", "Carryover of soil P fixed from previous season applications becoming available to subsequent crops", "P remaining in unfertilised subsoil below the root zone", "P in crop residues incorporated into soil"],
    correct: 1,
    explanation: "Residual P refers to previously applied P that was fixed/adsorbed in soil and becomes partially available to subsequent crops. Continuous P application builds up a labile P pool with residual effects lasting several seasons."
  },
  {
    id: "d122l_071",
    subject: "da-122",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Which of the following is the most important agronomic advantage of using Phosphate Solubilising Microorganisms (PSM) as biofertilizers?",
    options: ["They fix atmospheric nitrogen for the crop", "They solubilise fixed soil phosphates and increase P availability without additional P fertilizer cost", "They produce growth hormones only", "They produce antibiotics to control soil-borne diseases"],
    correct: 1,
    explanation: "PSM (Bacillus megaterium var. phosphaticum, Pseudomonas striata) solubilise insoluble Ca-P, Fe-P, and Al-P via organic acid production, potentially reducing P fertilizer requirement by 25–30%."
  },
  {
    id: "d122l_072",
    subject: "da-122",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The initial rapid immobilisation of water-soluble P fertilizer (e.g., DAP) in soil upon application is termed:",
    options: ["P volatilisation", "P leaching", "P fixation (retention)", "P mineralisation"],
    correct: 2,
    explanation: "P fixation (phosphate retention) is the rapid adsorption of soluble H₂PO₄⁻ onto clay and oxide surfaces and precipitation as insoluble Fe-P, Al-P (acid soils) or Ca-P (alkaline soils) compounds, reducing plant availability."
  },
  {
    id: "d122l_073",
    subject: "da-122",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Fertigation-grade water-soluble phosphatic fertilizer most suitable for drip irrigation systems is:",
    options: ["Mono-ammonium phosphate (MAP, 12:61:0) or Mono-potassium phosphate (MKP, 0:52:34)", "SSP (Single Superphosphate)", "DAP granules dissolved in water", "Rock phosphate slurry"],
    correct: 0,
    explanation: "Fertigation-grade P fertilizers for drip systems must be fully water-soluble and non-clogging. MAP (12% N, 61% P₂O₅) and MKP (52% P₂O₅, 34% K₂O) are widely used. SSP and DAP contain insoluble fractions that clog drip systems."
  },
  {
    id: "d122l_074",
    subject: "da-122",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The critical P concentration in plant tissue (leaf P) for most cereal crops at maximum economic yield is approximately:",
    options: ["0.2–0.3% P in dry matter", "1.0–2.0% P in dry matter", "5.0% P in dry matter", "0.05% P in dry matter"],
    correct: 0,
    explanation: "The sufficiency range for P in plant tissue of most cereals is 0.2–0.4% P in dry matter. Below 0.2% indicates P deficiency. Tissue testing complements soil testing for P nutritional diagnosis."
  },
  {
    id: "d122l_075",
    subject: "da-122",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "In Telangana, the prevalent Alfisols (red soils) have high P fixation capacity because they are rich in:",
    options: ["CaCO₃ and Mg²⁺", "Montmorillonite clay with high CEC", "Free iron (Fe₂O₃) and aluminium (Al₂O₃) oxides from intense weathering", "Organic matter with high phosphatase activity"],
    correct: 2,
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
    options: ["60%", "80%", "33%", "50%"],
    correct: 0,
    explanation: "Muriate of Potash (KCl — potassium chloride) contains 60% K₂O. It is the cheapest and most widely used potassic fertilizer globally and in India."
  },
  {
    id: "d122l_077",
    subject: "da-122",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Sulphate of Potash (SOP) is preferred over MOP for which crops?",
    options: ["Cotton and sunflower (require high Cl for fibre quality)", "All pulse crops regardless of Cl sensitivity", "Chlorine-sensitive crops: tobacco, potato, tomato, grapes, and many fruits", "Rice and wheat (tolerant of Cl⁻)"],
    correct: 2,
    explanation: "SOP (K₂SO₄, 50% K₂O, 18% S) is preferred for Cl-sensitive crops (tobacco — Cl degrades burning quality; potato — Cl reduces starch content; grapes — Cl reduces fruit quality). SOP also supplies S."
  },
  {
    id: "d122l_078",
    subject: "da-122",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Potassium nitrate (KNO₃) as a fertilizer supplies nutrients in the ratio:",
    options: ["0% N, 60% K₂O", "18% N, 46% K₂O", "13% N, 44% K₂O (no P)", "13% N, 0% K₂O"],
    correct: 2,
    explanation: "Potassium nitrate (KNO₃ — saltpeter) contains 13% N (as NO₃⁻) and 44% K₂O. It is a premium Cl-free N+K source used in fertigation for high-value horticulture crops."
  },
  {
    id: "d122l_079",
    subject: "da-122",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "The phenomenon of 'potassium luxury consumption' is most pronounced in:",
    options: ["Legumes that preferentially absorb K over N", "Root crops like potato and sugar beet", "Rice and wheat under high N application", "Grasses and forages where K content far exceeds plant requirements"],
    correct: 3,
    explanation: "Grasses and forages (particularly legume hays) show luxury K consumption — absorbing far more K than needed for maximum yield when soil K is abundant. This 'dilution effect' can induce Mg and Ca deficiencies in grazing animals."
  },
  {
    id: "d122l_080",
    subject: "da-122",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Which of the following crops has the highest potassium requirement among major crops?",
    options: ["Potato and banana", "Groundnut", "Wheat", "Rice"],
    correct: 0,
    explanation: "Potato and banana have very high K requirements — potato absorbs 200–400 kg K₂O ha⁻¹ per crop and K is critical for starch synthesis, tuber quality, and disease resistance. Sugarcane and cotton are also high K users."
  },
  {
    id: "d122l_081",
    subject: "da-122",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "In most Indian agricultural soils, potassium reserves are considered adequate primarily because:",
    options: ["Indian soils are primarily sandy with high leaching rates releasing K", "Many Indian soils are derived from K-rich parent materials (basalt, granite, mica-bearing rocks) and contain illite/vermiculite clays", "Indian farmers apply excessive K fertilizers traditionally", "Indian crops have very low potassium requirements"],
    correct: 1,
    explanation: "Many Indian soils (especially Vertisols and Inceptisols) are derived from K-rich parent rocks and contain K-bearing minerals (illite, mica) with total K of 1–2%. However, with intensive cropping, available K is being depleted in many regions."
  },
  {
    id: "d122l_082",
    subject: "da-122",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Potassium deficiency symptoms in plants are characterised by:",
    options: ["Stunted roots with poor branching", "Marginal and tip scorch (necrosis) of older leaves, weak stems, and poor grain filling", "Yellowing of young leaves starting at the leaf base", "Purple discolouration of all leaves"],
    correct: 1,
    explanation: "K deficiency: tip and marginal scorch of older leaves (K is mobile and remobilised), weak lodging-prone stems, poor root development, reduced drought tolerance, and small poorly filled grains/fruits."
  },
  {
    id: "d122l_083",
    subject: "da-122",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Potassium leaching from soil is significant mainly in:",
    options: ["Dry Alfisols of Telangana", "Heavy clay soils with high CEC", "Coarse-textured sandy soils with low CEC and high rainfall", "Vertisols with high montmorillonite content"],
    correct: 2,
    explanation: "K leaching is important in light-textured soils (sandy, sandy loam) with low CEC and high rainfall. In such soils, applied K is not held by exchange sites and can leach below the root zone."
  },
  {
    id: "d122l_084",
    subject: "da-122",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Potassium in plant physiology activates more than how many enzymes?",
    options: ["60", "10", "200", "30"],
    correct: 0,
    explanation: "Potassium is a cofactor for over 60 enzymes in plant metabolism, including those involved in starch synthesis, protein synthesis, and energy metabolism (ATP synthase). It is unique among macronutrients in this cofactor role."
  },
  {
    id: "d122l_085",
    subject: "da-122",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Soil potassium exists in four forms. Which form is immediately available to plants?",
    options: ["Non-exchangeable (fixed) K in clay interlayers", "Solution K (K⁺ in soil water)", "Exchangeable K adsorbed on CEC sites", "Structural K in primary minerals (feldspars, micas)"],
    correct: 1,
    explanation: "Solution K (K⁺ in soil solution) is the only immediately plant-available form (typically 0.1–1 mM). Exchangeable K is the main 'buffer' reservoir. Non-exchangeable and mineral K release slowly over seasons to years."
  },
  {
    id: "d122l_086",
    subject: "da-122",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "The recommended dose of MOP (60% K₂O) to supply 60 kg K₂O ha⁻¹ is:",
    options: ["60 kg MOP ha⁻¹", "120 kg MOP ha⁻¹", "100 kg MOP ha⁻¹", "36 kg MOP ha⁻¹"],
    correct: 2,
    explanation: "Dose of MOP = (Required K₂O / % K₂O in MOP) × 100 = (60 / 60) × 100 = 100 kg MOP ha⁻¹. This is a standard calculation in fertilizer recommendation."
  },
  {
    id: "d122l_087",
    subject: "da-122",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Potassium improves crop quality in which of the following specific ways?",
    options: ["Increases N₂ fixation in legume nodules", "Improves sugar content, starch quality, oil content, fibre strength, and fruit colour", "Increases chlorophyll content by being part of the porphyrin ring", "Increases protein content by providing an N source"],
    correct: 1,
    explanation: "K improves quality parameters: sugar content in sugarcane/fruits, starch in potato, oil in oilseeds, fibre strength in cotton, fruit colour (apple, tomato), vitamin C, and shelf life — hence it is called the 'quality nutrient'."
  },
  {
    id: "d122l_088",
    subject: "da-122",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "The critical limit of exchangeable K in soil for cereal crops is approximately:",
    options: ["< 1000 kg K₂O ha⁻¹", "< 400 kg K₂O ha⁻¹", "< 10 kg K₂O ha⁻¹", "< 110–150 kg K₂O ha⁻¹"],
    correct: 3,
    explanation: "The critical level for exchangeable soil K is 110–150 kg K₂O ha⁻¹ (approximately 0.2 cmol(+) kg⁻¹ or 78 mg kg⁻¹ K) in most ICAR recommendations. Soils below this respond to K fertilization."
  },
  {
    id: "d122l_089",
    subject: "da-122",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "India imports most of its potash requirement as MOP from which countries?",
    options: ["Bangladesh and Sri Lanka", "China and Pakistan", "Canada (Saskatchewan), Russia, Belarus, and Jordan", "USA and Australia"],
    correct: 2,
    explanation: "India has no significant domestic potash deposits and imports nearly 100% of its MOP requirement from Canada (Canpotex), Russia, Belarus, and Jordan. This makes K the most import-dependent nutrient for Indian agriculture."
  },
  {
    id: "d122l_090",
    subject: "da-122",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Wood ash is a traditional source of potash because it contains:",
    options: ["KCl (muriate of potash) from soil salts", "KNO₃ (potassium nitrate) from plant nitrogen", "K₂CO₃ (potassium carbonate) — approximately 5–10% K₂O equivalent", "K₂SO₄ from organic sulphur compounds"],
    correct: 2,
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
    options: ["In complex fertilizers, nutrients are chemically combined in each granule; in mixed fertilizers, separate nutrient particles are blended", "Mixed fertilizers always have higher nutrient content than complex fertilizers", "Complex fertilizers contain only one nutrient; mixed fertilizers contain two or more", "Complex fertilizers are produced only by government factories"],
    correct: 0,
    explanation: "Complex (compound) fertilizers: each granule contains two or more nutrients chemically combined (e.g., DAP, NPK complexes). Mixed fertilizers: separate fertilizer particles of different materials physically blended together."
  },
  {
    id: "d122l_092",
    subject: "da-122",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "The fertilizer grade '17:17:17' represents a fertilizer containing:",
    options: ["17 kg N, 17 kg P, 17 kg K per bag", "17% N, 17% P₂O₅, 17% K₂O in equal proportions", "17% urea, 17% SSP, 17% MOP", "17% N, 17% P, 17% S"],
    correct: 1,
    explanation: "Fertilizer grades express N:P₂O₅:K₂O ratios. '17:17:17' means 17% N, 17% P₂O₅, and 17% K₂O by weight — a balanced NPK complex often used as a starter or general-purpose fertilizer."
  },
  {
    id: "d122l_093",
    subject: "da-122",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "The complex fertilizer grade '20:20:0' is commonly called:",
    options: ["CAN-SSP blend", "Nitrophosphate or ammonium phosphate (NP complex)", "Urea-DAP mixture", "Potash-phosphate complex"],
    correct: 1,
    explanation: "20:20:0 (20% N + 20% P₂O₅) is an N-P complex fertilizer (e.g., ammonium phosphate type or nitrophosphate), used as a basal dose for crops where K is not limiting."
  },
  {
    id: "d122l_094",
    subject: "da-122",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "The main advantage of using a balanced complex NPK fertilizer over separate urea + SSP + MOP applications is:",
    options: ["Convenience of single application, uniform distribution of all nutrients, and often higher nutrient concentration", "Complex fertilizers are always less expensive than separate fertilizers", "Complex fertilizers contain organic matter unlike individual fertilizers", "Complex fertilizers always contain higher N than separate sources"],
    correct: 0,
    explanation: "Complex fertilizers offer: single-trip application saving labour, uniform nutrient distribution per granule, higher total nutrient content (less filler), and no segregation of nutrients during handling — key advantages in precision agriculture."
  },
  {
    id: "d122l_095",
    subject: "da-122",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Fertilizer grade '14:35:14' is commonly used as a:",
    options: ["Basal starter fertilizer for crops requiring high P at establishment", "Top dressing N fertilizer at maximum tillering", "Slow-release K fertilizer for perennial crops", "Foliar spray for micronutrient correction"],
    correct: 0,
    explanation: "14:35:14 (high-P grade) is a basal starter fertilizer providing high P for root establishment and seedling development, along with balanced N and K. It is used at sowing/transplanting when P demand is highest."
  },
  {
    id: "d122l_096",
    subject: "da-122",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Fertigation-grade NPK fertilizers for drip irrigation must meet which critical requirement?",
    options: ["Must contain organic matter", "Must be acidic to pH < 4", "Must be fully water-soluble with no chloride residue", "Must be slow-release only"],
    correct: 2,
    explanation: "Fertigation-grade fertilizers must be 100% water-soluble to prevent drip emitter clogging, and ideally Cl-free for sensitive crops. Common grades include 19:19:19, 13:0:45, 0:52:34 (MKP), etc."
  },
  {
    id: "d122l_097",
    subject: "da-122",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "The NPK fertilizer '28:28:0' is manufactured by which process?",
    options: ["Blending urea + DAP in 1:1 ratio", "Steam granulation of ammonium phosphate with KCl", "Compaction of potash with urea", "Nitrophosphate process (direct acidulation of rock phosphate with nitric acid)"],
    correct: 3,
    explanation: "The nitrophosphate (Odda) process treats rock phosphate with HNO₃ to produce calcium nitrate + phosphoric acid, which are then ammoniated to produce nitrophosphate fertilizers with both N and P."
  },
  {
    id: "d122l_098",
    subject: "da-122",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "The term 'filler' in mixed fertilizer preparation refers to:",
    options: ["Active nutrient material added to the blend", "Inert material (sand, gypsum, dolomite) added to achieve the desired grade and weight", "Coating material applied to granules", "Micronutrient supplement added at low doses"],
    correct: 1,
    explanation: "Filler materials (sand, gypsum, dolomite) are added to fertilizer blends to make up the weight when active nutrient materials do not fill the required bag weight for the desired grade."
  },
  {
    id: "d122l_099",
    subject: "da-122",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Bulk blending of fertilizers (BB fertilizer) requires which compatibility condition?",
    options: ["Component fertilizers must have similar particle size to prevent segregation during handling", "All fertilizer materials must have identical chemical composition", "Temperature must be maintained at exactly 25°C during blending", "Components must be liquid for uniform mixing"],
    correct: 0,
    explanation: "For BB fertilizers, component prills/granules must have similar size (2–4 mm diameter and similar density) to prevent size-segregation during transport and spreading — which would result in non-uniform nutrient distribution."
  },
  {
    id: "d122l_100",
    subject: "da-122",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "The main limitation of urea + SSP physical mixture compared to complex NPK fertilizer is:",
    options: ["SSP and urea cannot be applied to the same field", "Mixing urea with SSP can cause hygroscopic caking and N loss due to reaction", "Urea degrades SSP into toxic compounds", "Urea+SSP mixture is more expensive than complex NPK"],
    correct: 1,
    explanation: "Urea + SSP mixture becomes hygroscopic and sticky (caking) because urea reacts with monocalcium phosphate in SSP in the presence of moisture, releasing NH₃ and causing N loss. They should not be mixed in advance."
  },
  {
    id: "d122l_101",
    subject: "da-122",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Which fertilizer combination can be mixed and stored without compatibility issues?",
    options: ["Ammonium nitrate + Urea", "MOP (KCl) + SSP", "Urea + SSP", "DAP + calcium nitrate"],
    correct: 1,
    explanation: "MOP and SSP are compatible for mixing. Problematic combinations: Urea+SSP (caking); AN+Urea (dangerous eutectic mixture); DAP+calcium nitrate (release of free ammonia)."
  },
  {
    id: "d122l_102",
    subject: "da-122",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "The concept of 'fertilizer ratio' in crop nutrition refers to:",
    options: ["The rate of nutrient release from slow-release fertilizers", "The moisture content of granular fertilizers", "The ratio of price between different fertilizers", "The relative proportions of N:P₂O₅:K₂O required by a specific crop at a specific growth stage"],
    correct: 3,
    explanation: "Fertilizer ratio is the relative proportion of N:P₂O₅:K₂O recommended for a crop. For example, rice needs 4:2:1 ratio; cotton needs 2:1:1. Selecting a complex fertilizer with the correct ratio minimises waste and cost."
  },
  {
    id: "d122l_103",
    subject: "da-122",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "For split application of complex NPK fertilizers, which grade is preferred as a top-dressing application for rice at tillering?",
    options: ["14:35:14 (high P for root growth)", "10:26:26 (high P+K complex)", "0:0:60 (potash only)", "28:0:0 or high-N urea-based grade"],
    correct: 3,
    explanation: "At the tillering stage, rice needs N for vegetative growth and tiller production. A high-N complex or urea is used as top dressing. Basal doses provide P and K; N top dressings are given at tillering and panicle initiation."
  },
  {
    id: "d122l_104",
    subject: "da-122",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Which of the following is an example of a water-soluble NPK grade used in fertigation for vegetable crops?",
    options: ["14:35:14 (conventional granular complex)", "19:19:19 (fully water-soluble NPK complex)", "20:20:0 (nitrophosphate)", "17:17:17 (standard granular NPK)"],
    correct: 1,
    explanation: "19:19:19 is a fully water-soluble NPK complex available as crystalline powder, widely used in fertigation and foliar sprays for vegetable and horticultural crops. Conventional granular grades contain insoluble fractions."
  },
  {
    id: "d122l_105",
    subject: "da-122",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "The advantage of complex fertilizers in broadcasting for paddy over separate fertilizer application is that they:",
    options: ["Apply all nutrients uniformly per unit area, ensuring every plant receives balanced nutrition without risk of uneven application", "Require no calibration of the applicator equipment", "Are cheaper per kg than separate fertilizers", "Contain organic matter not found in separate fertilizers"],
    correct: 0,
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
    options: ["Zinc sulphate heptahydrate (ZnSO₄·7H₂O) containing 21% Zn", "Zinc EDTA chelate containing 12% Zn", "Zinc carbonate containing 52% Zn", "Zinc oxide (ZnO) containing 80% Zn"],
    correct: 0,
    explanation: "Zinc sulphate heptahydrate (ZnSO₄·7H₂O, 21% Zn) is the standard and most widely used Zn fertilizer in India. The monohydrate form (ZnSO₄·H₂O) contains 33% Zn and is also available."
  },
  {
    id: "d122l_107",
    subject: "da-122",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The recommended soil application rate of ZnSO₄ for Zn-deficient soils is:",
    options: ["25 kg ha⁻¹", "100 kg ha⁻¹", "2.5 kg ha⁻¹", "10 kg ha⁻¹"],
    correct: 0,
    explanation: "The standard recommendation for ZnSO₄ (21% Zn) soil application is 25 kg ha⁻¹ for Zn-deficient soils. Subsequent crops can be maintained with 12.5 kg ha⁻¹ every alternate crop due to residual effect."
  },
  {
    id: "d122l_108",
    subject: "da-122",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Ferrous sulphate (FeSO₄·7H₂O) contains what percentage of iron?",
    options: ["30%", "7%", "19%", "56%"],
    correct: 2,
    explanation: "Ferrous sulphate heptahydrate (FeSO₄·7H₂O) contains approximately 19% Fe (19.7%). It is used as a foliar spray (0.5–1.0%) for Fe chlorosis correction in alkaline soils."
  },
  {
    id: "d122l_109",
    subject: "da-122",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Borax (sodium tetraborate, Na₂B₄O₇·10H₂O) contains approximately what percentage of boron?",
    options: ["11%", "30%", "17%", "5%"],
    correct: 0,
    explanation: "Borax (Na₂B₄O₇·10H₂O) contains 11% B. Boric acid (H₃BO₃) contains 17% B. The recommended soil application of borax is 10–15 kg ha⁻¹ for B-deficient soils."
  },
  {
    id: "d122l_110",
    subject: "da-122",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Chelated micronutrient fertilizers (e.g., Zn-EDTA) are preferred over inorganic salts for:",
    options: ["Soil broadcast application in acid soils where inorganic salts are more stable", "Storage — chelates last longer in bags than inorganic salts", "Foliar spray and fertigation in high pH soils where inorganic forms would precipitate", "Organic farming where inorganic compounds are not allowed"],
    correct: 2,
    explanation: "Chelated micronutrients (EDTA, DTPA, EDDHA chelates) remain soluble and plant-available even at high pH, ideal for foliar sprays and fertigation systems. In soil, chelates resist precipitation and fixation better than inorganic salts."
  },
  {
    id: "d122l_111",
    subject: "da-122",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The recommended concentration of ZnSO₄ for foliar spray to correct Zn deficiency is:",
    options: ["0.5%", "20%", "0.05%", "5%"],
    correct: 0,
    explanation: "Foliar spray of 0.5% ZnSO₄ solution (plus 0.25% slaked lime to prevent leaf burn) is the standard recommendation for correcting Zn deficiency — 3–4 sprays at 10-day intervals."
  },
  {
    id: "d122l_112",
    subject: "da-122",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Manganese sulphate (MnSO₄) for correction of Mn deficiency is most effective when applied as:",
    options: ["Soil broadcast at high rates (100 kg ha⁻¹)", "Foliar spray (0.5–1.0% MnSO₄) since soil application is often ineffective in alkaline soils", "Combined with lime application", "Seed treatment only"],
    correct: 1,
    explanation: "Soil-applied Mn is rapidly oxidised to unavailable MnO₂ in alkaline soils. Foliar spray of 0.5–1.0% MnSO₄ is more effective and economical for correcting Mn deficiency in wheat, oats, and legumes."
  },
  {
    id: "d122l_113",
    subject: "da-122",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The micronutrient with the narrowest range between deficiency and toxicity (making it most dangerous to over-apply) is:",
    options: ["Boron (B)", "Zinc (Zn)", "Iron (Fe)", "Manganese (Mn)"],
    correct: 0,
    explanation: "Boron has the narrowest margin between deficiency (< 0.5 mg kg⁻¹ soil) and toxicity (> 5 mg kg⁻¹ soil). Over-application of borax easily causes B toxicity — tip and marginal leaf scorch ('Marginal scorch')."
  },
  {
    id: "d122l_114",
    subject: "da-122",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Copper sulphate (CuSO₄·5H₂O — blue vitriol) contains approximately what percentage of copper?",
    options: ["25%", "7%", "45%", "80%"],
    correct: 0,
    explanation: "Copper sulphate pentahydrate (CuSO₄·5H₂O) contains approximately 25% Cu. It is applied at 10–25 kg ha⁻¹ to Cu-deficient soils or as 0.2% foliar spray for reclamation disease in cereals."
  },
  {
    id: "d122l_115",
    subject: "da-122",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Sodium molybdate (Na₂MoO₄·2H₂O) for Mo nutrition is applied at very low rates because:",
    options: ["It is toxic to microorganisms at high rates", "Mo is required in extremely small amounts (20–50 g Mo ha⁻¹ as seed treatment is usually sufficient)", "It rapidly leaches from soil before crop uptake", "It is very expensive and imported"],
    correct: 1,
    explanation: "Molybdenum is the micronutrient required in the smallest quantity by plants (< 1 mg kg⁻¹ plant dry matter). Seed treatment with 20–50 g Na₂MoO₄ ha⁻¹ or foliar spray of 0.1% is usually adequate for Mo deficiency correction."
  },
  {
    id: "d122l_116",
    subject: "da-122",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Micronutrient fertilizers are most efficiently applied through:",
    options: ["Deep ploughing to incorporate into the subsoil", "Broadcasting large quantities on the soil surface", "Mixing with irrigation water in flood irrigation systems", "Seed treatment, soil banding, or foliar spray depending on the nutrient and crop"],
    correct: 3,
    explanation: "Micronutrient application methods: seed treatment (Zn, Mo, B) — most economical; soil banding (Zn, Fe); foliar spray (Fe, Mn, Zn, B) — most efficient for correction; fertigation (chelated forms) for drip-irrigated crops."
  },
  {
    id: "d122l_117",
    subject: "da-122",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The most widespread micronutrient deficiency in Indian soils affecting the most crop area is:",
    options: ["Copper (Cu)", "Iron (Fe)", "Boron (B)", "Zinc (Zn)"],
    correct: 3,
    explanation: "Zinc deficiency is the most widespread micronutrient deficiency in Indian soils — affecting approximately 49% of soil samples tested. It is most critical for rice, wheat, maize, and sorghum production."
  },
  {
    id: "d122l_118",
    subject: "da-122",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Zinc sulphate heptahydrate (ZnSO₄·7H₂O) seedling root dip concentration and duration for rice transplanting is:",
    options: ["10% ZnSO₄ for 30 minutes", "2% ZnSO₄ (or 4% ZnO) for 10–12 hours before transplanting", "0.05% ZnSO₄ for 1 hour", "0.5% ZnSO₄ for 5 minutes"],
    correct: 1,
    explanation: "Rice seedling root dip: 2% ZnSO₄ solution (or 4% ZnO suspension) for 10–12 hours before transplanting effectively prevents Khaira disease in Zn-deficient soils."
  },
  {
    id: "d122l_119",
    subject: "da-122",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Fe-EDDHA chelate is more effective than Fe-EDTA or FeSO₄ for iron nutrition in alkaline soils because:",
    options: ["EDDHA provides Fe through leaf absorption only", "EDDHA contains more Fe per molecule than EDTA", "EDDHA is cheaper than EDTA", "EDDHA chelate remains stable and soluble up to pH 10–11, while EDTA releases Fe above pH 7.5"],
    correct: 3,
    explanation: "Fe-EDDHA is the most stable Fe chelate at high pH (stable up to pH 10), while Fe-EDTA releases Fe³⁺ above pH 7.5 where it precipitates as Fe(OH)₃. EDDHA is the preferred Fe source for drip-irrigated crops on calcareous soils."
  },
  {
    id: "d122l_120",
    subject: "da-122",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The soil application rate of borax (11% B) for B-deficient soils for most crops is:",
    options: ["1 kg ha⁻¹", "200 kg ha⁻¹", "50 kg ha⁻¹", "5–10 kg ha⁻¹"],
    correct: 3,
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
    options: ["Replacing all chemical fertilizers with organic manures", "Applying maximum doses of chemical fertilizers with minimum organic matter", "Maintenance and adjustment of soil fertility and nutrient supply to achieve the optimum yield through judicious use of organic, inorganic, and biological nutrient sources", "Using only biofertilizers to fix atmospheric nitrogen"],
    correct: 2,
    explanation: "INM integrates all available nutrient sources — organic manures (FYM, compost, crop residues), inorganic fertilizers, and biological sources (biofertilizers, green manures) — to maintain soil health and optimise crop productivity sustainably."
  },
  {
    id: "d122l_122",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The primary reason for advocating INM over sole chemical fertilizer use is:",
    options: ["INM maintains soil organic matter, improves soil health, reduces fertilizer cost, and sustains long-term productivity", "Chemical fertilizers are banned in India", "Organic manures provide higher yields than chemical fertilizers alone", "Chemical fertilizers cannot supply micronutrients"],
    correct: 0,
    explanation: "Long-term sole chemical fertilizer use degrades soil organic matter, disrupts soil biology, causes secondary nutrient deficiencies, and reduces fertilizer efficiency. INM maintains SOM, soil structure, and biodiversity while reducing input costs."
  },
  {
    id: "d122l_123",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "In INM, the recommended substitution of chemical N fertilizer by FYM typically ranges from:",
    options: ["100%", "5–10%", "25–50%", "75–90%"],
    correct: 2,
    explanation: "INM typically recommends substituting 25–50% of the recommended chemical N dose with equivalent N from organic sources (FYM, compost, green manure, biofertilizers), providing both nutrients and organic matter benefits."
  },
  {
    id: "d122l_124",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Site-Specific Nutrient Management (SSNM) concept was developed for which crop and by which organisation?",
    options: ["Wheat — CIMMYT (Mexico)", "Cotton — CICR (India)", "Maize — Pioneer Hi-Bred (USA)", "Rice — IRRI (International Rice Research Institute, Philippines)"],
    correct: 3,
    explanation: "SSNM was developed by IRRI for irrigated rice, using the 'nutrient manager' decision support tool that accounts for indigenous nutrient supply (IAS) from soil, water, and organic inputs to recommend site-specific fertilizer doses."
  },
  {
    id: "d122l_125",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The 'System of Rice Intensification' (SRI) is associated with INM in that it advocates:",
    options: ["High-density transplanting with 5 seedlings per hill", "No tillage paddy cultivation under zero-water conditions", "Maximum chemical fertilizer application with continuous flooding", "Reduced plant population, young seedling transplanting, and use of organic inputs with alternating wetting-drying irrigation"],
    correct: 3,
    explanation: "SRI (originated in Madagascar by Fr. Henri de Laulanié) uses single young seedlings (< 15 days), wider spacing (25×25 cm), minimal water (alternate wetting-drying), mechanical weeding, and preferential use of organic manures."
  },
  {
    id: "d122l_126",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The combined application of FYM + chemical NPK + Rhizobium inoculant in a legume crop is expected to:",
    options: ["Reduce the effectiveness of Rhizobium nodulation due to chemical interference", "Improve nutrient use efficiency, reduce fertilizer requirement, and increase yield sustainably", "Have no advantage over chemical NPK alone", "Cause nutrient toxicity due to excess supply"],
    correct: 1,
    explanation: "INM combining FYM (improves soil physical and microbial properties), reduced chemical NPK (supplies immediate nutrients), and Rhizobium (BNF) results in synergistic benefits: higher NUE, reduced fertilizer cost, and sustained soil health."
  },
  {
    id: "d122l_127",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Crop residue management as part of INM involves:",
    options: ["Burning all crop residues to prevent pest and disease carryover", "Composting residues only — never incorporating directly", "Incorporating or mulching crop residues to return nutrients and organic carbon to the soil", "Removing all residues from the field for use as animal feed only"],
    correct: 2,
    explanation: "INM advocates retaining crop residues by incorporation (when C:N is moderate), surface mulching, or composting before addition. Residue burning destroys organic matter, nutrients (especially N, S), and kills beneficial soil organisms."
  },
  {
    id: "d122l_128",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The 'Integrated Plant Nutrition System' (IPNS) differs from INM in that IPNS:",
    options: ["Considers all sources of plant nutrients including native soil nutrients, irrigation water, and atmospheric deposition", "Focuses only on organic manure use", "Excludes biofertilizers from the nutrient supply", "IPNS and INM are identical concepts"],
    correct: 0,
    explanation: "IPNS (FAO concept) is broader than INM — it considers all nutrient sources including indigenous soil supply, nutrients from irrigation water, atmospheric deposition (rainfall N), and symbiotic/free-living BNF, not just applied inputs."
  },
  {
    id: "d122l_129",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Long-term experiments (LTEs) at IARI and other Indian institutions show that continuous application of NPK without organic manure leads to:",
    options: ["Sustained or increasing yields indefinitely", "Decline in organic carbon, micronutrient availability, soil physical properties, and eventually yield plateau or decline", "Increase in soil pH to neutral from acid conditions", "Elimination of all soil microorganisms"],
    correct: 1,
    explanation: "LTEs across India (IARI, CRIDA, Barrackpore) consistently show that continuous chemical NPK without organics depletes SOM, micronutrients (especially Zn, Fe, B), soil structure, and microbial diversity, causing yield stagnation."
  },
  {
    id: "d122l_130",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "In INM for rice-wheat system, what is the recommended approach for managing residue of the previous crop?",
    options: ["Incorporate wheat straw with sufficient time for decomposition, or use in-situ decomposers/bio-inoculants", "Remove all wheat straw for commercial sale only", "Burn wheat straw before rice transplanting to clear field rapidly", "Apply extra urea to decompose residue without decomposer organisms"],
    correct: 0,
    explanation: "Wheat straw has wide C:N (60–80:1); direct incorporation into a flooded rice field can cause toxicity. INM recommends: incorporating with a 3–4 week pre-monsoon period, adding Trichoderma/PSB decomposer, or partially composting before transplanting."
  },
  {
    id: "d122l_131",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The Leaf Colour Chart (LCC) used in SSNM of rice represents a practical INM tool because it:",
    options: ["Works only with organic N sources", "Enables real-time N management decisions based on crop N status, avoiding over/under-application", "Replaces all soil testing requirements", "Tells the farmer exact N dose to apply regardless of field conditions"],
    correct: 1,
    explanation: "LCC enables need-based N topdressing — farmers compare leaf colour with chart panels and apply N fertilizer only when leaf colour drops below threshold, saving 15–20% N fertilizer while maintaining yields in IRRI-validated studies."
  },
  {
    id: "d122l_132",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Which of the following best describes the concept of 'nutrient budget' in INM?",
    options: ["The minimum nutrient requirement for a specific crop", "Government budget allocation for fertilizer subsidy", "Balance between total nutrient inputs (fertilizers, manures, BNF, deposition) and outputs (crop removal, losses) in a soil-crop system", "The total cost of all fertilizers applied in one season"],
    correct: 2,
    explanation: "A nutrient budget calculates whether the soil nutrient pool is being depleted (negative balance), maintained (neutral), or built up (positive balance). Negative balances indicate soil mining; INM aims for near-neutral to slight positive balances."
  },
  {
    id: "d122l_133",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "In INM, green manure incorporation is recommended to be done at least how many days before sowing/transplanting?",
    options: ["3–5 days", "6 months", "60–90 days", "15–20 days"],
    correct: 3,
    explanation: "Green manures should be incorporated 15–20 days before transplanting/sowing to allow initial decomposition and prevent phytotoxicity from organic acids produced during rapid anaerobic breakdown in waterlogged soils."
  },
  {
    id: "d122l_134",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The Fertilizer Equivalence Value (FEV) of FYM for N is approximately 25–30% because:",
    options: ["FYM contains only 25–30% as much N as urea by weight", "Only 25–30% of organic N in FYM mineralises and becomes available in the first crop season", "Farmers apply only 25–30% of the recommended FYM dose", "FYM reduces urea efficiency by 70–75%"],
    correct: 1,
    explanation: "The apparent recovery (mineralisation) of organic N from FYM in the first crop season is approximately 25–30% — meaning to substitute 100 kg urea-N, about 333–400 kg FYM-N (from 60–80 t FYM) is needed at 0.5% N."
  },
  {
    id: "d122l_135",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Which of the following is a key indicator of improved soil health as an outcome of INM adoption over years?",
    options: ["Decreased soil aggregate stability", "Increased soil microbial biomass carbon, enzyme activity, and earthworm population", "Decreased soil organic carbon and microbial biomass", "Increased soil bulk density indicating compaction"],
    correct: 1,
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
    options: ["1947", "1957", "1985", "2000"],
    correct: 2,
    explanation: "The Fertilizer Control Order (FCO) 1985 is the primary legislation regulating the manufacture, sale, distribution, import, and quality of fertilizers in India under the Essential Commodities Act, 1955."
  },
  {
    id: "d122l_137",
    subject: "da-122",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Under the FCO 1985, the minimum guaranteed nutrient content in a bag of urea must be:",
    options: ["50% N", "43% N", "46% N", "40% N"],
    correct: 2,
    explanation: "FCO 1985 Schedule I specifies that urea must contain a minimum of 46% N (total nitrogen) on dry-weight basis. Any urea with < 46% N fails quality standards under FCO."
  },
  {
    id: "d122l_138",
    subject: "da-122",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The Bureau of Indian Standards (BIS) marks on fertilizer bags indicate that the product:",
    options: ["Has been imported through official government channels", "Is recommended specifically for organic farming", "Has received government subsidy certification", "Conforms to the Indian Standard specifications for quality, composition, and physical properties"],
    correct: 3,
    explanation: "BIS marks (ISI mark) on fertilizer products certify compliance with Indian Standard specifications (IS standards) for nutrient content, moisture, particle size, and physical properties — ensuring consistent quality."
  },
  {
    id: "d122l_139",
    subject: "da-122",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The Soil Health Card (SHC) scheme in India was launched in which year?",
    options: ["2010", "2015", "2005", "2020"],
    correct: 1,
    explanation: "The Soil Health Card Scheme was launched by the Government of India on 19 February 2015 under the Department of Agriculture, Cooperation and Farmers Welfare (DACFW) to promote soil testing and rational fertilizer use."
  },
  {
    id: "d122l_140",
    subject: "da-122",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The Direct Benefit Transfer (DBT) system for fertilizer subsidy in India was introduced to:",
    options: ["Ensure subsidy reaches genuine farmers by linking fertilizer purchase to Aadhaar/farmer identity at point of sale", "Allow import of fertilizers without customs duty", "Regulate fertilizer prices to match international market rates", "Eliminate all fertilizer subsidies to farmers"],
    correct: 0,
    explanation: "DBT for fertilizers (PoS — Point of Sale machines linked to Aadhaar) ensures subsidy is released only on actual sale to verified farmers, preventing diversion. Fertilizer companies receive subsidy reimbursement from government after verified farmer sale."
  },
  {
    id: "d122l_141",
    subject: "da-122",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The nutrient-based subsidy (NBS) scheme in India, implemented since 2010, covers which fertilizers?",
    options: ["Urea and MOP only", "Only imported fertilizers excluding domestically produced ones", "All P and K fertilizers (and SSP); urea remains under flat-rate subsidy separately", "All fertilizers including urea under a single scheme"],
    correct: 2,
    explanation: "NBS scheme (from April 2010) provides fixed per-kg subsidy on P and K fertilizers (DAP, MOP, SSP, NPK complexes, etc.) based on their nutrient content. Urea continues under a separate concession scheme with MRP fixed by government."
  },
  {
    id: "d122l_142",
    subject: "da-122",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Under the FCO, the fertilizer inspector is empowered to:",
    options: ["Import fertilizers directly on behalf of the government", "Approve new fertilizer factories", "Take samples, inspect premises, check quality, and initiate prosecution for substandard fertilizers", "Fix the price of fertilizers in the market"],
    correct: 2,
    explanation: "Fertilizer inspectors under FCO 1985 are authorised to collect samples, inspect dealer/manufacturer premises, check labelling, test quality, and file complaints/prosecute for violation of FCO provisions."
  },
  {
    id: "d122l_143",
    subject: "da-122",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Which organisation in India is the nodal agency for regulating fertilizer quality and distribution under the FCO?",
    options: ["Reserve Bank of India (RBI)", "ICAR (Indian Council of Agricultural Research)", "Department of Fertilizers, Ministry of Chemicals and Fertilizers", "Food Safety and Standards Authority of India (FSSAI)"],
    correct: 2,
    explanation: "The Department of Fertilizers (DOF) under the Ministry of Chemicals and Fertilizers is the nodal agency for fertilizer policy, subsidy, regulation, and import in India. FCO implementation involves state agriculture departments."
  },
  {
    id: "d122l_144",
    subject: "da-122",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The mandatory information that must appear on a fertilizer bag label under FCO includes:",
    options: ["Government subsidy amount per bag", "Farmer testimonials and yield data", "Crop recommendations and planting dates", "Grade/composition, net weight, manufacturer name, batch number, date of manufacture, MRP, and precautions"],
    correct: 3,
    explanation: "FCO mandates fertilizer bag labels must display: trade name, grade (N:P₂O₅:K₂O), net weight, manufacturer name and address, batch/lot number, date of manufacture, maximum retail price (MRP), and handling/storage precautions."
  },
  {
    id: "d122l_145",
    subject: "da-122",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "New organic and bio-organic fertilizer products are governed by which schedule of the FCO 1985?",
    options: ["Schedule IV (Micronutrient fertilizers)", "Schedule III (Biofertilizers)", "Schedule II (Organic fertilizers including city compost, vermicompost, biogas slurry)", "Schedule I (Inorganic fertilizers)"],
    correct: 2,
    explanation: "FCO Schedule II covers organic fertilizers including urban/city compost, vermicompost, biogas slurry, and other organic nutrient sources with quality specifications for moisture, organic carbon, and nutrient content."
  },
  {
    id: "d122l_146",
    subject: "da-122",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The penalty for selling substandard or adulterated fertilizer under FCO can result in:",
    options: ["Cancellation of licence, fine, and imprisonment up to 7 years for repeat offences", "Import duty imposition on the manufacturer", "Reduction of government subsidy only", "Only a written warning from the district agriculture officer"],
    correct: 0,
    explanation: "Under the Essential Commodities Act (which FCO derives from), offences involving adulteration/substandard fertilizers attract licence cancellation, monetary fines, and imprisonment (up to 7 years for serious/repeat violations)."
  },
  {
    id: "d122l_147",
    subject: "da-122",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The Pradhan Mantri Krishi Sinchayee Yojana (PMKSY) is related to fertilizer management in that it promotes:",
    options: ["Micro-irrigation (drip/sprinkler) enabling precision fertigation and reducing fertilizer wastage", "Subsidy for organic fertilizer purchase only", "Free fertilizer distribution to all farmers", "Export of surplus fertilizers to neighboring countries"],
    correct: 0,
    explanation: "PMKSY promotes micro-irrigation (drip/sprinkler) adoption. Drip systems enable fertigation — delivering nutrients directly to the root zone through irrigation water — improving fertilizer use efficiency by 20–30% and reducing waste."
  },
  {
    id: "d122l_148",
    subject: "da-122",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The concept of '4R Nutrient Stewardship' for responsible fertilizer use refers to applying the Right source at the Right rate at the Right time in the Right place. This framework is promoted by:",
    options: ["Reserve Bank of India for agricultural credit programmes", "IFA (International Fertilizer Association) and IPNI (International Plant Nutrition Institute) globally", "FAO (Food and Agriculture Organisation) for developing nations", "ICAR-IARI exclusively for Indian conditions"],
    correct: 1,
    explanation: "4R Nutrient Stewardship is a global framework developed by IFA and IPNI (now part of IPNI-IFDC) that provides a science-based decision framework for fertilizer best management practices to improve efficiency and sustainability."
  },
  {
    id: "d122l_149",
    subject: "da-122",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The Paramparagat Krishi Vikas Yojana (PKVY) scheme promotes which type of fertilizer use?",
    options: ["Maximum chemical fertilizer use for productivity", "Slow-release synthetic fertilizers only", "Biofertilizers combined with full chemical fertilizer dose", "Organic farming with cluster approach — no synthetic chemical fertilizers"],
    correct: 3,
    explanation: "PKVY (launched 2015) promotes organic farming through cluster-based approach where farmer groups adopt 100% organic inputs — no synthetic chemical fertilizers or pesticides — with certification support and market linkage."
  },
  {
    id: "d122l_150",
    subject: "da-122",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The recommended soil test-based fertilizer recommendation system used in Telangana for major crops is based on data generated by:",
    options: ["Private fertilizer company field trials only", "State soil testing laboratories, AICRP-STCR experiments, and PJTSAU research stations", "Farmer surveys and traditional practices only", "International recommendations from IRRI and CIMMYT"],
    correct: 1,
    explanation: "Telangana fertilizer recommendations are based on soil test-crop response (STCR) data from AICRP (All India Coordinated Research Project) experiments, PJTSAU research, and analyses by state soil testing laboratories, calibrated for local soils and crops."
  },

];
