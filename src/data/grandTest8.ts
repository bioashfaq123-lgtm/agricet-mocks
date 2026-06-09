import { GrandTestQuestion } from "./grandTestMeta";

export const GRAND_TEST_8: GrandTestQuestion[] = [
  // AGRONOMY (6)
  {
    id: "gt8_001", qNo: 1, subject: "agronomy",
    question: "The term 'stubble mulching' refers to:",
    options: ["Leaving crop residues on the soil surface to reduce evaporation and erosion", "Burning crop residues after harvest", "Deep ploughing of residues", "Green manuring with residues"],
    correct: 0,
    explanation: "Stubble mulching involves leaving crop residues (stubble) on the soil surface or partially incorporated to reduce evaporation, protect against erosion, and improve soil organic matter."
  },
  {
    id: "gt8_002", qNo: 2, subject: "agronomy",
    question: "The Dalton's law states that evaporation is proportional to the difference between:",
    options: ["Solar radiation and albedo", "Wind speed and temperature", "Saturation vapour pressure and actual vapour pressure (vapour pressure deficit)", "Air temperature and soil temperature"],
    correct: 2,
    explanation: "Dalton's law of evaporation states E ∝ (es − ea), where es = saturation vapour pressure and ea = actual vapour pressure. The larger the vapour pressure deficit (VPD), the faster evaporation."
  },
  {
    id: "gt8_003", qNo: 3, subject: "agronomy",
    question: "The recommended depth of irrigation for a crop with 60% allowable depletion (AD) and 200 mm Available Water Capacity (AWC) in the root zone is:",
    options: ["200 mm", "60 mm", "120 mm", "333 mm"],
    correct: 2,
    explanation: "Depth of irrigation = AD × AWC = 0.60 × 200 mm = 120 mm. This is the amount of water to apply to refill the root zone from 60% depletion back to field capacity."
  },
  {
    id: "gt8_004", qNo: 4, subject: "agronomy",
    question: "The 'Walkley-Black method' is used in soil analysis to determine:",
    options: ["Cation exchange capacity", "Available phosphorus", "Available nitrogen", "Soil organic carbon"],
    correct: 3,
    explanation: "The Walkley-Black method (wet oxidation) uses K₂Cr₂O₇ in H₂SO₄ to oxidise soil organic matter. The unreduced dichromate is titrated to estimate organic carbon content."
  },
  {
    id: "gt8_005", qNo: 5, subject: "agronomy",
    question: "In multiple cropping index (MCI), an MCI of 200% means:",
    options: ["Two crops in alternate years", "One crop per year on 200% of land", "200 kg output per hectare", "Land is cropped twice a year on average"],
    correct: 3,
    explanation: "Multiple Cropping Index (MCI) = (Total cropped area / Net sown area) × 100. MCI of 200% means land is on average cropped twice a year (double-cropped)."
  },
  {
    id: "gt8_006", qNo: 6, subject: "agronomy",
    question: "The soil moisture potential at which 50% of the available water has been depleted is called:",
    options: ["Field capacity", "Saturation point", "Management Allowed Depletion (MAD)", "Turgor loss point"],
    correct: 2,
    explanation: "Management Allowed Depletion (MAD) is typically set at 50% of Available Water Capacity for most crops. Irrigation is triggered when 50% of soil water has been depleted."
  },

  // KHARIF CROPS (7)
  {
    id: "gt8_007", qNo: 7, subject: "kharif-crops",
    question: "The phenomenon of 'mite burn' in soybean is caused by the two-spotted spider mite:",
    options: ["Panonychus ulmi", "Eutetranychus orientalis", "Oligonychus coffeae", "Tetranychus urticae"],
    correct: 3,
    explanation: "Tetranychus urticae (two-spotted spider mite) causes 'mite burn' in soybean — bronzing, yellowing, and defoliation under hot, dry conditions, especially in kharif season."
  },
  {
    id: "gt8_008", qNo: 8, subject: "kharif-crops",
    question: "The 'Narrow-row soybean' system uses inter-row spacing of:",
    options: ["30 cm or less", "60 cm crop", "45 cm species", "75 cm variety"],
    correct: 0,
    explanation: "Narrow-row soybean uses row spacing ≤ 30 cm to achieve earlier canopy closure, suppressing weeds and maximising light interception, particularly important in short-season environments."
  },
  {
    id: "gt8_009", qNo: 9, subject: "kharif-crops",
    question: "In rice cultivation, 'AWD (Alternate Wetting and Drying)' technology primarily aims to:",
    options: ["Reduce water use by 25", "Increase yield", "Improve grain quality", "Prevent lodging"],
    correct: 0,
    explanation: "AWD involves allowing the paddy field to dry for several days before re-flooding. It reduces irrigation water use by 25–30% (1000–2000 m³/ha) with no significant yield penalty."
  },
  {
    id: "gt8_010", qNo: 10, subject: "kharif-crops",
    question: "The 'Parbhani Kranti' variety is a wilt-resistant variety of:",
    options: ["Cowpea", "Soybean", "Blackgram", "Pigeonpea"],
    correct: 3,
    explanation: "Parbhani Kranti is a wilt-resistant variety of pigeonpea (Cajanus cajan) developed by VNMKV Parbhani. It is resistant to Fusarium wilt and has a medium maturity duration."
  },
  {
    id: "gt8_011", qNo: 11, subject: "kharif-crops",
    question: "The critical stage for irrigation in maize is:",
    options: ["Knee-high stage", "Germination and seedling establishment", "Tasselling and silking (pollination)", "Dough stage"],
    correct: 2,
    explanation: "Tasselling and silking (VT–R1 stage) is the most critical stage for irrigation in maize. Water stress during pollination reduces kernel set and causes blank cobs, severely reducing yield."
  },
  {
    id: "gt8_012", qNo: 12, subject: "kharif-crops",
    question: "Hibiscus sabdariffa (Roselle) is grown for which product?",
    options: ["Fibre and calyces (for beverages)", "Oilseed", "Fodder only", "Grain"],
    correct: 0,
    explanation: "Roselle (Hibiscus sabdariffa) is grown for: (1) bast fibre from stems, (2) fleshy calyces used to make herbal tea (Hibiscus tea), jam, and beverages due to high anthocyanin content."
  },
  {
    id: "gt8_013", qNo: 13, subject: "kharif-crops",
    question: "The recommended NPK dose for high-yielding kharif rice in Andhra Pradesh is:",
    options: ["60:30:30 kg/ha", "80:40:40 kg/ha", "150:75:75 kg/ha", "120:60:60 kg/ha"],
    correct: 3,
    explanation: "For HYV rice in Andhra Pradesh, the recommended NPK dose is typically 120:60:60 kg/ha (or 100:50:50 for medium duration varieties), split into basal and top-dressing applications."
  },

  // RABI CROPS (5)
  {
    id: "gt8_014", qNo: 14, subject: "rabi-crops",
    question: "The disease 'Yellow rust' (stripe rust) of wheat is caused by:",
    options: ["Puccinia graminis f. sp. tritici", "Puccinia striiformis f. sp. tritici", "Puccinia recondita (P. triticina)", "Uromyces tritici"],
    correct: 1,
    explanation: "Yellow (stripe) rust of wheat is caused by Puccinia striiformis f. sp. tritici. Uredinia appear in yellow-orange stripes along leaf veins. It is serious in cool, moist conditions."
  },
  {
    id: "gt8_015", qNo: 15, subject: "rabi-crops",
    question: "The 'Brassica triangle' proposed by U. Nagaharu shows the relationships between Brassica species. B. napus (AACC, 2n=38) is a hybrid of:",
    options: ["B. rapa × B. oleracea", "B. carinata × B. rapa", "B. oleracea × B. nigra", "B. rapa × B. nigra"],
    correct: 0,
    explanation: "According to the Nagaharu triangle, Brassica napus (AACC, 2n=38) is an amphidiploid formed by hybridisation of B. rapa (AA, 2n=20) and B. oleracea (CC, 2n=18)."
  },
  {
    id: "gt8_016", qNo: 16, subject: "rabi-crops",
    question: "The Indian variety 'Pusa Sheetal' is associated with:",
    options: ["Barley", "Pea", "Linseed", "Wheat"],
    correct: 1,
    explanation: "Pusa Sheetal is a popular pea variety developed by IARI, New Delhi. It is suitable for early sowing in plains and has good pod quality and disease resistance."
  },
  {
    id: "gt8_017", qNo: 17, subject: "rabi-crops",
    question: "Linseed (Linum usitatissimum) oil is rich in:",
    options: ["Palmitic acid", "Erucic acid", "Oleic acid", "Alpha"],
    correct: 3,
    explanation: "Linseed oil contains 45–65% alpha-linolenic acid (ALA, 18:3 ω-3), making it the richest plant source of omega-3 fatty acids. It dries and oxidises rapidly (drying oil)."
  },
  {
    id: "gt8_018", qNo: 18, subject: "rabi-crops",
    question: "The 'Indo-Gangetic Plain' is the most important wheat-growing region in India because of:",
    options: ["High rainfall throughout the year", "High humidity suitable for wheat", "Deep alluvial soils, moderate winter temperatures, and irrigation availability", "Tropical climate"],
    correct: 2,
    explanation: "The Indo-Gangetic Plain (IGP) has deep alluvial soils, moderate winter temperatures ideal for wheat growth and vernalisation, and extensive canal and groundwater irrigation infrastructure."
  },

  // GENETICS (7)
  {
    id: "gt8_019", qNo: 19, subject: "genetics",
    question: "A 'multiple allele' series exists when:",
    options: ["A gene has two alleles on each chromosome", "Two genes affect one trait", "All individuals are homozygous", "More than two alleles exist for one gene locus in a population"],
    correct: 3,
    explanation: "Multiple alleles occur when more than two allelic forms exist for a gene locus in a population (though each diploid individual carries only two). Example: ABO blood groups (IA, IB, i)."
  },
  {
    id: "gt8_020", qNo: 20, subject: "genetics",
    question: "The 'mitotic cell cycle' in order is:",
    options: ["M → G1 → G2 → S", "G2 → S → G1 → M", "G1 → S → G2 → M", "S → G1 → M → G2"],
    correct: 2,
    explanation: "Cell cycle: G1 (first gap/growth) → S (DNA synthesis/replication) → G2 (second gap) → M (mitosis). Interphase = G1 + S + G2. M phase = prophase + metaphase + anaphase + telophase."
  },
  {
    id: "gt8_021", qNo: 21, subject: "genetics",
    question: "In plant tissue culture, the ratio of auxin to cytokinin in the medium determines:",
    options: ["Callus colour", "Nutrient absorption rate", "Organ differentiation", "Ploidy level"],
    correct: 2,
    explanation: "High auxin:cytokinin ratio promotes root formation; low ratio (high cytokinin) promotes shoot formation; equal ratio promotes undifferentiated callus growth. (Skoog and Miller, 1957)"
  },
  {
    id: "gt8_022", qNo: 22, subject: "genetics",
    question: "The 'hybrid seed production' using CMS (Cytoplasmic Male Sterility) system requires:",
    options: ["A-line and R-line only", "A-line only", "A-line (CMS), B-line (maintainer), and R-line (restorer)", "Self-incompatibility and pollinator lines"],
    correct: 2,
    explanation: "CMS-based hybrid seed production uses three lines: A-line (CMS, male-sterile), B-line (maintainer, male-fertile, maintains CMS), and R-line (restorer, restores male fertility in F1 hybrid)."
  },
  {
    id: "gt8_023", qNo: 23, subject: "genetics",
    question: "The 'Drosophila' geneticist Thomas Hunt Morgan was awarded the Nobel Prize for discovering:",
    options: ["Transposable elements", "DNA double helix", "One gene–one enzyme hypothesis", "The role of chromosomes in heredity"],
    correct: 3,
    explanation: "T.H. Morgan received the Nobel Prize in Physiology or Medicine (1933) for demonstrating that genes are carried on chromosomes and discovering genetic linkage and crossing over using Drosophila."
  },
  {
    id: "gt8_024", qNo: 24, subject: "genetics",
    question: "The 'cytoplasmic inheritance' (extrachromosomal inheritance) is characterised by:",
    options: ["Paternal inheritance only", "Maternal inheritance pattern in reciprocal crosses", "Equal inheritance from both parents", "Mendelian 3:1 ratio"],
    correct: 1,
    explanation: "Cytoplasmic (extranuclear) inheritance follows maternal patterns because cytoplasm is inherited primarily from the egg. Reciprocal crosses give different results, distinguishing it from nuclear inheritance."
  },
  {
    id: "gt8_025", qNo: 25, subject: "genetics",
    question: "Which of the following molecular marker techniques does NOT require prior sequence information?",
    options: ["RAPD (Random Amplified Polymorphic DNA)", "Allele-specific PCR", "SNP (Single Nucleotide Polymorphism)", "SSR (Simple Sequence Repeat)"],
    correct: 0,
    explanation: "RAPD uses random primers and does not require prior sequence knowledge. SSR, SNP, and allele-specific PCR all require sequence information to design specific primers or probes."
  },

  // SEED TECHNOLOGY (4)
  {
    id: "gt8_026", qNo: 26, subject: "seed-technology",
    question: "The 'tetrazolium chloride (TZ) test' distinguishes between:",
    options: ["Old and new seeds", "Dormant and non-dormant seeds", "Genetically pure and impure seeds", "Live and dead seeds based on respiratory activity"],
    correct: 3,
    explanation: "The TZ test (2,3,5-triphenyltetrazolium chloride) is a viability test — living tissue reduces colourless TZ to red formazan in metabolically active cells. Dead tissues remain unstained."
  },
  {
    id: "gt8_027", qNo: 27, subject: "seed-technology",
    question: "The 'working collection' of a gene bank is maintained at:",
    options: ["0–5°C (medium-term storage)", "−196°C (liquid nitrogen)", "15–20°C", "−18°C or below"],
    correct: 0,
    explanation: "Gene bank storage: Long-term base collection: −18°C. Active/Working collection: 0–5°C with 40–50% RH for medium-term use. Cryopreservation at −196°C for recalcitrant seeds."
  },
  {
    id: "gt8_028", qNo: 28, subject: "seed-technology",
    question: "Seed dormancy in freshly harvested rice is overcome by:",
    options: ["Soaking in KNO₃", "Dry heat treatment at 50°C for 5 days", "Soaking in cold water", "Scarification"],
    correct: 1,
    explanation: "Freshly harvested rice has dormancy. Dry heat treatment (50°C for 5 days) effectively breaks dormancy. Alternatively, storage for 4–8 weeks at room temperature breaks dormancy naturally."
  },
  {
    id: "gt8_029", qNo: 29, subject: "seed-technology",
    question: "The minimum germination percentage required for certified maize seed as per Seeds Act 1966 is:",
    options: ["70%", "85%", "75%", "90%"],
    correct: 3,
    explanation: "As per India's Seeds (Control) Order 1983, minimum germination for certified hybrid maize seed is 90%. This high standard ensures vigorous establishment in the field. (Composite/OPV maize may have lower standards in some classifications.)"
  },

  // SOIL SCIENCE (5)
  {
    id: "gt8_030", qNo: 30, subject: "soil-science",
    question: "The 'regur soil' is the local name for which soil type in India?",
    options: ["Alluvial soil", "Black cotton soil", "Red soil", "Laterite soil"],
    correct: 1,
    explanation: "Regur is the local name for black cotton soil (Vertisol) in the Deccan plateau region of India. These soils are characterised by high clay content (smectite), deep cracks when dry, and high moisture retention."
  },
  {
    id: "gt8_031", qNo: 31, subject: "soil-science",
    question: "The process by which the upper horizon of a laterite soil loses silica and accumulates iron and aluminium oxides is called:",
    options: ["Podzolisation", "Laterisation", "Gleisation", "Calcification"],
    correct: 1,
    explanation: "Laterisation (ferrallitisation) is the intense tropical weathering process where silica is leached (desilication) while iron (Fe₂O₃) and aluminium (Al₂O₃) oxides accumulate, forming laterite (Oxisol)."
  },
  {
    id: "gt8_032", qNo: 32, subject: "soil-science",
    question: "The 'buffer capacity' of a soil refers to its ability to:",
    options: ["Retain water against gravity", "Store nutrients against leaching", "Resist changes in pH when acid or base is added", "Maintain temperature"],
    correct: 2,
    explanation: "Soil buffering capacity is its resistance to pH change when acids or bases are added. Soils with high CEC, organic matter, and clay content have high buffering capacity."
  },
  {
    id: "gt8_033", qNo: 33, subject: "soil-science",
    question: "The 'Nitrogen cycle' includes the following key processes EXCEPT:",
    options: ["Nitrification", "Carbonation", "Denitrification", "Nitrogen fixation"],
    correct: 1,
    explanation: "The nitrogen cycle includes: N fixation, ammonification, nitrification, denitrification, assimilation, and N leaching/volatilisation. Carbonation is part of the carbon cycle and rock weathering."
  },
  {
    id: "gt8_034", qNo: 34, subject: "soil-science",
    question: "Gypsum is applied to sodic soils to:",
    options: ["Replace exchangeable Na⁺ with Ca²⁺ and improve soil structure", "Increase pH", "Reduce phosphorus fixation", "Add nitrogen"],
    correct: 0,
    explanation: "Gypsum (CaSO₄·2H₂O) provides Ca²⁺ which displaces Na⁺ from the exchange complex. The released Na⁺ is leached out with irrigation water. This reduces ESP and improves soil structure of sodic soils."
  },

  // SOIL FERTILITY (5)
  {
    id: "gt8_035", qNo: 35, subject: "soil-fertility",
    question: "The fertigation technique in drip irrigation improves fertiliser use efficiency primarily by:",
    options: ["Using slow-release fertilisers", "Applying fertiliser directly to the root zone with water, reducing losses", "Applying fertiliser as foliar spray", "Using higher fertiliser doses"],
    correct: 1,
    explanation: "Fertigation through drip systems applies dissolved fertilisers directly to the root zone with precision timing and quantity, reducing leaching, volatilisation, and improving nutrient uptake efficiency."
  },
  {
    id: "gt8_036", qNo: 36, subject: "soil-fertility",
    question: "The element 'Molybdenum (Mo)' is essential for:",
    options: ["Nitrogenase enzyme activity and nitrate reductase", "Cell wall formation", "Stomata regulation", "Chlorophyll synthesis"],
    correct: 0,
    explanation: "Molybdenum is a cofactor for nitrogenase (N₂ fixation in legumes) and nitrate reductase (NO₃⁻ → NO₂⁻ conversion). Mo deficiency causes 'whiptail' in cauliflower."
  },
  {
    id: "gt8_037", qNo: 37, subject: "soil-fertility",
    question: "The 'Olsen method' for soil phosphorus extraction uses:",
    options: ["0.5 M NaHCO₃ at pH 8.5", "Morgan solution", "Mehlich-3 solution", "Bray-1 solution (0.025 N HCl + 0.03 N NH₄F)"],
    correct: 0,
    explanation: "Olsen's method uses 0.5 M NaHCO₃ at pH 8.5 to extract available phosphorus from neutral to calcareous (alkaline) soils. Bray-1 is for acid soils."
  },
  {
    id: "gt8_038", qNo: 38, subject: "soil-fertility",
    question: "Integrated Nutrient Management (INM) aims to:",
    options: ["Maximise chemical fertiliser use", "Use only biofertilisers", "Optimise combined use of organic, inorganic, and biofertilisers for sustainability", "Replace chemical fertilisers entirely with organic sources"],
    correct: 2,
    explanation: "INM integrates organic manures, chemical fertilisers, and biofertilisers in an optimal combination to meet crop nutrient requirements while maintaining long-term soil health and productivity."
  },
  {
    id: "gt8_039", qNo: 39, subject: "soil-fertility",
    question: "The 'Kjeldahl method' is used to determine:",
    options: ["Organic carbon", "Available potassium", "Available phosphorus", "Total nitrogen in soil and plant material"],
    correct: 3,
    explanation: "The Kjeldahl method (1883) digests organic nitrogen compounds with H₂SO₄, then distils and titrates the ammonia to determine total nitrogen in soils, plant tissues, and food."
  },

  // ENTOMOLOGY (5)
  {
    id: "gt8_040", qNo: 40, subject: "entomology",
    question: "The insect order 'Hemiptera' is characterised by:",
    options: ["Two pairs of scaly wings", "No wings (apterous)", "Four membranous wings", "Forewings (hemelytra)"],
    correct: 3,
    explanation: "Hemiptera (true bugs) have characteristic hemelytra — forewings with a basal thickened (leathery) half and a membranous apical half. They have piercing-sucking mouthparts."
  },
  {
    id: "gt8_041", qNo: 41, subject: "entomology",
    question: "The 'gossypol' in cotton is a natural chemical that provides resistance against:",
    options: ["Bacterial diseases", "Bollworms and other chewing insects", "Sucking pests only", "Soil pathogens"],
    correct: 1,
    explanation: "Gossypol is a polyphenolic compound in cotton glands that provides natural resistance against bollworms and other feeding insects by inhibiting digestive enzymes. Glandless cotton varieties lack gossypol."
  },
  {
    id: "gt8_042", qNo: 42, subject: "entomology",
    question: "The 'Sterile Insect Technique (SIT)' is based on the principle of:",
    options: ["Using predators to kill pests", "Releasing sterile (irradiated) insects to mate with wild insects, preventing reproduction", "Chemical sterilisation of soil", "Using pheromone to disrupt mating"],
    correct: 1,
    explanation: "SIT involves mass-rearing, sterilising (by gamma radiation or chemosterilants), and releasing male insects to mate with wild females. The resulting eggs are infertile, reducing pest populations."
  },
  {
    id: "gt8_043", qNo: 43, subject: "entomology",
    question: "The 'LD₅₀' value of a pesticide refers to the:",
    options: ["Lethal Dose for 50% of non-target organisms in field", "Dose producing 50% inhibition of an enzyme", "Dose required to kill 50% of a test population under specific conditions", "Maximum permissible residue"],
    correct: 2,
    explanation: "LD₅₀ (Lethal Dose 50) is the dose of a pesticide that kills 50% of a test population (usually rats) under specific conditions. Lower LD₅₀ = more toxic. Expressed as mg/kg body weight."
  },
  {
    id: "gt8_044", qNo: 44, subject: "entomology",
    question: "Trichogramma is a parasitoid that attacks:",
    options: ["Stem borer larvae inside stems", "Aphids", "Eggs of lepidopteran pests", "Pupae of whiteflies"],
    correct: 2,
    explanation: "Trichogramma spp. (order Hymenoptera) are minute egg parasitoids of lepidopteran pests. They are the most widely used biological control agents globally for pest management."
  },

  // CROP PESTS (5)
  {
    id: "gt8_045", qNo: 45, subject: "crop-pests",
    question: "The 'Red hairy caterpillar' (Amsacta moorei) is a major pest of:",
    options: ["Mango", "Wheat", "Cotton and groundnut (defoliator in polyphagous manner)", "Rice"],
    correct: 2,
    explanation: "Amsacta moorei (red hairy caterpillar) is a polyphagous defoliator pest of groundnut, cotton, and other crops in peninsular India. It appears in large numbers after the first rains."
  },
  {
    id: "gt8_046", qNo: 46, subject: "crop-pests",
    question: "The mango fruit fly (Bactrocera dorsalis) damages fruit by:",
    options: ["Feeding on leaves", "Laying eggs under the fruit skin; maggots tunnel through pulp", "Boring into the seed", "Feeding on the skin surface"],
    correct: 1,
    explanation: "Female mango fruit flies (Bactrocera dorsalis) puncture ripening fruit skin with their ovipositor and lay eggs in the pulp. Hatching maggots feed inside the fruit, causing rotting."
  },
  {
    id: "gt8_047", qNo: 47, subject: "crop-pests",
    question: "The 'Economic Threshold Level' (ETL) is set ABOVE the EIL (Economic Injury Level) because:",
    options: ["ETL provides a safety margin", "ETL is always less than EIL", "ETL is irrelevant to EIL", "ETL equals EIL when pest population is stable"],
    correct: 0,
    explanation: "ETL (action threshold) is set slightly below EIL so that control measures applied at ETL prevent pest population from reaching the EIL. It accounts for the lag time for control measures to take effect."
  },
  {
    id: "gt8_048", qNo: 48, subject: "crop-pests",
    question: "Root-knot nematode (Meloidogyne spp.) is controlled using nematicide:",
    options: ["Endosulfan", "Cypermethrin", "Carbofuran", "Thiamethoxam"],
    correct: 2,
    explanation: "Carbofuran (Furadan 3G) is a carbamate nematicide-insecticide applied to soil to control Meloidogyne (root-knot nematode), white grubs, and other soil pests."
  },
  {
    id: "gt8_049", qNo: 49, subject: "crop-pests",
    question: "The 'Jassid' (Amrasca biguttula biguttula) causes damage to cotton by:",
    options: ["Feeding on roots", "Boring into bolls", "Mining leaf tissue", "Sucking sap from leaves causing 'hopper burn' (leaf curling, browning)"],
    correct: 3,
    explanation: "Jassid/leafhopper (Amrasca biguttula biguttula) sucks sap from cotton leaves causing characteristic 'hopperburn' — upward leaf curling, yellowing from edges, and browning in severe cases."
  },

  // FARM MACHINERY (6)
  {
    id: "gt8_050", qNo: 50, subject: "farm-machinery",
    question: "The 'Rotavator' (rotary tiller) is primarily used for:",
    options: ["Rapid secondary tillage", "Deep ploughing", "Subsoil loosening", "Seed placement at depth"],
    correct: 0,
    explanation: "A rotavator uses L-shaped or straight blades on a rotating horizontal shaft for quick and effective secondary tillage — breaking clods, incorporating residues, and preparing a seedbed in one pass."
  },
  {
    id: "gt8_051", qNo: 51, subject: "farm-machinery",
    question: "The 'Irrigation efficiency' for drip irrigation compared to surface (flood) irrigation is approximately:",
    options: ["70–75% vs 70–75%", "40–50% vs 85–95%", "85–95% vs 40–50%", "Both 60–70%"],
    correct: 2,
    explanation: "Drip irrigation efficiency is 85–95% vs 40–50% for surface flood irrigation (40–60%) and 70–80% for sprinkler. Drip delivers water directly to root zone with minimal losses."
  },
  {
    id: "gt8_052", qNo: 52, subject: "farm-machinery",
    question: "The 'volumetric efficiency' of an IC engine is the ratio of:",
    options: ["Actual torque to maximum torque", "Actual air intake to theoretical maximum air intake", "Actual to theoretical fuel consumption", "Engine output to engine displacement"],
    correct: 1,
    explanation: "Volumetric efficiency = (Actual air-fuel charge volume inducted / Displacement volume) × 100. It measures how effectively the engine breathes. High volumetric efficiency = more air-fuel = more power."
  },
  {
    id: "gt8_053", qNo: 53, subject: "farm-machinery",
    question: "The 'Paddy transplanter' used in mechanised rice cultivation operates at approximately what rate?",
    options: ["0.3–0.5 ha/hour", "1–2 ha/hour", "5–10 ha/day", "0.1–0.2 ha/day"],
    correct: 0,
    explanation: "A self-propelled paddy transplanter can typically transplant 0.3–0.5 ha/hour (4–6 rows), covering 3–5 ha/day vs 0.04 ha/day for manual transplanting. Field efficiency is about 70–80%."
  },
  {
    id: "gt8_054", qNo: 54, subject: "farm-machinery",
    question: "The 'Bharat Stage (BS)' emission norms for tractor engines in India are set by:",
    options: ["Central Motor Vehicles Rules (CMVR) / Ministry of Road Transport", "Bureau of Indian Standards (BIS)", "CIAE", "ICAR"],
    correct: 0,
    explanation: "Bharat Stage (BS / TREM) emission norms for agricultural tractors and engines are notified under the Central Motor Vehicles Rules by Ministry of Road Transport & Highways."
  },
  {
    id: "gt8_055", qNo: 55, subject: "farm-machinery",
    question: "The grain storage structure 'Pusa bin' was developed by:",
    options: ["CAC (Central Arid Zone Research Institute)", "IARI (Indian Agricultural Research Institute)", "NHB", "FCI (Food Corporation of India)"],
    correct: 1,
    explanation: "Pusa Bin (improved grain storage bin) was developed by IARI, New Delhi. It is a mud-plastered bamboo storage structure with a polythene liner that maintains low humidity for safe grain storage."
  },

  // PLANT PATHOLOGY (9)
  {
    id: "gt8_056", qNo: 56, subject: "plant-pathology",
    question: "The disease 'Powdery mildew' of pea is caused by:",
    options: ["Botrytis cinerea", "Erysiphe pisi", "Peronospora viciae", "Septoria pisi"],
    correct: 1,
    explanation: "Powdery mildew of pea is caused by Erysiphe pisi (syn. E. polygoni). It produces superficial white powdery growth (ectophytic mycelium) on leaves, stems, and pods."
  },
  {
    id: "gt8_057", qNo: 57, subject: "plant-pathology",
    question: "The 'Banana Bunchy Top Virus' (BBTV) is transmitted by:",
    options: ["Thrips", "Mealybug", "Leafhopper", "Aphid"],
    correct: 3,
    explanation: "Banana Bunchy Top Virus (BBTV) is transmitted by the banana aphid Pentalonia nigronervosa in a persistent, circulative manner. BBTV is the most destructive banana virus disease."
  },
  {
    id: "gt8_058", qNo: 58, subject: "plant-pathology",
    question: "The 'Roguing' technique in disease management involves:",
    options: ["Crop rotation", "Removal and destruction of infected/diseased plants from the field", "Soil fumigation", "Application of fungicides"],
    correct: 1,
    explanation: "Roguing is the systematic inspection and removal of diseased, off-type, or pest-infested plants from the field to prevent spread of disease and maintain genetic purity in seed crops."
  },
  {
    id: "gt8_059", qNo: 59, subject: "plant-pathology",
    question: "The genus Fusarium is classified in which group?",
    options: ["Basidiomycetes", "Deuteromycetes", "Oomycetes", "Zygomycetes"],
    correct: 1,
    explanation: "Fusarium spp. are anamorphic (asexual/imperfect) stages of ascomycetes (teleomorphs in Gibberella, Nectria). They produce fusiform macroconidia with foot cells, and are classified in Deuteromycetes."
  },
  {
    id: "gt8_060", qNo: 60, subject: "plant-pathology",
    question: "Which of the following is a 'soil-borne' pathogen?",
    options: ["Albugo candida (white rust)", "Sclerotinia sclerotiorum (white mould)", "Pseudomonas syringae pv. tabaci", "Pyricularia oryzae (rice blast)"],
    correct: 1,
    explanation: "Sclerotinia sclerotiorum is a soil-borne (and airborne) pathogen producing sclerotia that persist in soil for years and produce apothecia. It causes white mould/stem rot of many crops."
  },
  {
    id: "gt8_061", qNo: 61, subject: "plant-pathology",
    question: "The 'nursery blight' or 'damping off' of vegetables is caused by:",
    options: ["Fusarium oxysporum", "Phytophthora spp.", "All of the above", "Pythium spp. and Rhizoctonia solani"],
    correct: 2,
    explanation: "Damping-off is caused by several soil-borne pathogens working alone or together: Pythium spp. (pre-emergence), Rhizoctonia solani, Phytophthora spp., and Fusarium spp. (post-emergence)."
  },
  {
    id: "gt8_062", qNo: 62, subject: "plant-pathology",
    question: "The 'Witches' broom' symptom in plants is typically caused by:",
    options: ["Phytoplasmas or Taphrina fungi", "Root rot", "Bacterial canker", "Nematodes"],
    correct: 0,
    explanation: "Witches' broom (proliferation of small stems giving a broom-like appearance) is caused by phytoplasmas (e.g., sesamum phyllody) or Taphrina fungi (e.g., Taphrina deformans causing peach leaf curl/brooms)."
  },
  {
    id: "gt8_063", qNo: 63, subject: "plant-pathology",
    question: "The fungicide 'Metalaxyl' specifically controls:",
    options: ["Basidiomycetes", "Oomycetes", "Ascomycetes", "All fungi equally"],
    correct: 1,
    explanation: "Metalaxyl (and mefenoxam) is a phenylamide fungicide that specifically inhibits RNA polymerase I in oomycetes (Phytophthora, Pythium, Plasmopara, Peronospora). It is not effective against true fungi."
  },
  {
    id: "gt8_064", qNo: 64, subject: "plant-pathology",
    question: "The 'Tikka disease' (cercospora leaf spot) of groundnut is caused by:",
    options: ["Cercospora arachidicola and Phaeoisariopsis personata", "Sclerotium rolfsii", "Puccinia arachidis", "Alternaria alternata"],
    correct: 0,
    explanation: "Tikka disease (leaf spots) of groundnut is caused by two Cercospora species: Cercospora arachidicola (early leaf spot) and Phaeoisariopsis personata (late leaf spot). Both cause serious defoliation."
  },

  // AGRICULTURAL ECONOMICS (7)
  {
    id: "gt8_065", qNo: 65, subject: "agricultural-economics",
    question: "The 'poverty line' in India was traditionally measured using:",
    options: ["Calorie", "Employment days per year", "Per capita income threshold", "Asset-based index"],
    correct: 0,
    explanation: "The traditional Indian poverty line was based on calorie norms: 2400 kcal/person/day for rural areas and 2100 kcal/day for urban areas (Alagh Committee, 1979). Tendulkar Committee revised this in 2009."
  },
  {
    id: "gt8_066", qNo: 66, subject: "agricultural-economics",
    question: "The 'Foreign Direct Investment (FDI)' limit in Indian multi-brand retail in agriculture (as of recent policy) is:",
    options: ["100%", "26%", "51%", "Zero (prohibited)"],
    correct: 2,
    explanation: "India allowed 51% FDI in multi-brand retail (2012), though implementation requires state government approval. 100% FDI is allowed in single-brand retail and food retail for domestically produced items."
  },
  {
    id: "gt8_067", qNo: 67, subject: "agricultural-economics",
    question: "The 'World Trade Organization (WTO)' Agreement on Agriculture includes provisions on:",
    options: ["Labour standards in agriculture", "Intellectual property in agriculture", "Trade in services only", "Market access, domestic support, and export competition/subsidies"],
    correct: 3,
    explanation: "WTO Agreement on Agriculture (1995) has three pillars: Market Access (tariff reduction), Domestic Support (reduction of production-linked subsidies), and Export Competition (reduction of export subsidies)."
  },
  {
    id: "gt8_068", qNo: 68, subject: "agricultural-economics",
    question: "The 'Factor endowment theory' in international trade was propounded by:",
    options: ["Paul Samuelson", "David Ricardo", "Adam Smith", "Heckscher and Ohlin"],
    correct: 3,
    explanation: "The Heckscher-Ohlin (H-O) theorem states that countries export goods that use their abundant factors intensively. A labour-abundant country (like India) exports labour-intensive agricultural products."
  },
  {
    id: "gt8_069", qNo: 69, subject: "agricultural-economics",
    question: "The 'FCI (Food Corporation of India)' was established in:",
    options: ["1947", "1969", "1982", "1964"],
    correct: 3,
    explanation: "Food Corporation of India (FCI) was established in January 1965 under the Food Corporation Act 1964 to ensure national food security through procurement, storage, and distribution of food grains."
  },
  {
    id: "gt8_070", qNo: 70, subject: "agricultural-economics",
    question: "The 'Niti Aayog' replaced which planning body in India?",
    options: ["National Development Council", "Ministry of Agriculture", "Planning Commission", "Finance Commission"],
    correct: 2,
    explanation: "Niti Aayog (National Institution for Transforming India) was established on 1 January 2015, replacing the Planning Commission (established 1950). It serves as a think tank rather than an allocation body."
  },
  {
    id: "gt8_071", qNo: 71, subject: "agricultural-economics",
    question: "The 'coefficient of variation (CV)' in agricultural statistics measures:",
    options: ["Range of data", "Relative variability", "Absolute variability around the mean", "Skewness of distribution"],
    correct: 1,
    explanation: "CV = (Standard Deviation / Mean) × 100%. It is a dimensionless measure of relative variability, useful for comparing variability across datasets with different units or scales."
  },

  // SURVEYING (4)
  {
    id: "gt8_072", qNo: 72, subject: "surveying",
    question: "In watershed management, 'Catchment Area Treatment' is prioritised as:",
    options: ["Ridge to valley (top to bottom)", "Valley to ridge (bottom to top)", "Bottom of watershed first", "Random treatment"],
    correct: 0,
    explanation: "In watershed treatment, the 'ridge to valley' approach is recommended — treating the upper watershed first (ridge planting, check dams) prevents sedimentation of lower-area structures."
  },
  {
    id: "gt8_073", qNo: 73, subject: "surveying",
    question: "The 'GIS (Geographic Information System)' integrates:",
    options: ["Satellite images only", "GPS signals only", "Statistical data only", "Spatial data with attribute (non-spatial) data for analysis and mapping"],
    correct: 3,
    explanation: "GIS integrates spatial data (maps, satellite imagery) with attribute data (soil type, crop area, yield) enabling spatial analysis, thematic mapping, and decision support for agriculture and land use planning."
  },
  {
    id: "gt8_074", qNo: 74, subject: "surveying",
    question: "The formula for calculating the cross-sectional area of a trapezoidal channel is:",
    options: ["A = ½ × b × d", "A = b × d", "A = π × r²", "A = (b + z×d) × d"],
    correct: 3,
    explanation: "For a trapezoidal channel: Cross-sectional area A = (b + zd) × d, where b = bottom width, d = depth, and z = side slope ratio (horizontal:vertical). Perimeter P = b + 2d√(1+z²)."
  },
  {
    id: "gt8_075", qNo: 75, subject: "surveying",
    question: "The 'Dickinson method' in irrigation water harvesting is used for:",
    options: ["Soil conservation planning", "Estimating rainfall run-off", "Designing irrigation channels", "Land levelling calculations"],
    correct: 1,
    explanation: "The Dickinson method (empirical approach) estimates surface runoff from a watershed based on rainfall, catchment area, and runoff coefficient — used in designing farm ponds and harvesting structures."
  },

  // FORESTRY (5)
  {
    id: "gt8_076", qNo: 76, subject: "forestry",
    question: "The 'Miyawaki method' of afforestation involves:",
    options: ["Slow natural succession without planting", "Planting native multi", "Planting single-species monoculture forest", "Planting only tree species for timber"],
    correct: 1,
    explanation: "The Miyawaki method (developed by Akira Miyawaki) involves planting native multi-species trees at very high density (2–4 plants/m²) that grow 10× faster than conventional plantations, creating dense forest."
  },
  {
    id: "gt8_077", qNo: 77, subject: "forestry",
    question: "The 'Forest Working Plan' in India is prepared for a period of:",
    options: ["5–7 years", "1–3 years", "10 years", "25–30 years"],
    correct: 2,
    explanation: "Forest Working Plans in India are prepared for a 10-year period. They prescribe management operations for forest compartments — felling coupes, regeneration, protection, and silvicultural treatments."
  },
  {
    id: "gt8_078", qNo: 78, subject: "forestry",
    question: "The 'National Bamboo Mission' in India focuses on:",
    options: ["Promoting bamboo cultivation for economic benefits, reducing timber pressure", "Conserving wild bamboo only", "Bamboo for paper pulp only", "Export of bamboo furniture"],
    correct: 0,
    explanation: "The Restructured National Bamboo Mission (rNBM) promotes bamboo cultivation in farm lands, non-forest degraded lands, and tribal areas to increase farm income and reduce pressure on forests."
  },
  {
    id: "gt8_079", qNo: 79, subject: "forestry",
    question: "The edible oil obtained from 'Mahua' (Madhuca longifolia) is used for:",
    options: ["Cooking oil and soap making", "Medicinal use only", "Varnish and paint", "Biodiesel only"],
    correct: 0,
    explanation: "Mahua oil (from seeds) is used as cooking oil by tribal communities, in soap making, and has potential as biodiesel. Mahua flowers are used for distilling alcoholic beverages. It is a multipurpose tree."
  },
  {
    id: "gt8_080", qNo: 80, subject: "forestry",
    question: "The 'Wildlife Protection Act 1972' in India provides for the establishment of:",
    options: ["National Parks, Wildlife Sanctuaries, Conservation Reserves, and Community Reserves", "Social forestry programmes only", "Carbon credit markets", "Commercial timber reserves"],
    correct: 0,
    explanation: "Wildlife Protection Act 1972 (amended 2002, 2006) provides for Protected Areas: National Parks (strict protection), Wildlife Sanctuaries, Conservation Reserves, and Community Reserves."
  },

  // HORTICULTURE (10)
  {
    id: "gt8_081", qNo: 81, subject: "horticulture",
    question: "The 'Fruit set' in mango is improved by foliar spray of:",
    options: ["Ethephon", "2,4-D", "GA₃ (Gibberellic acid)", "Naphthalene Acetic Acid (NAA) or Planofix"],
    correct: 3,
    explanation: "Foliar spray of NAA (Planofix, 10–20 ppm) at early fruit set stage prevents premature fruit drop in mango by maintaining fruit attachment. GA₃ can delay ripening."
  },
  {
    id: "gt8_082", qNo: 82, subject: "horticulture",
    question: "The 'Kesar' mango variety is a GI-tagged product of:",
    options: ["Ratnagiri, Maharashtra", "Krishnagiri, Tamil Nadu", "Vizianagaram, Andhra Pradesh", "Gir Somnath/Junagadh, Gujarat"],
    correct: 3,
    explanation: "Kesar mango is a GI (Geographical Indication) tagged product from Gir Somnath and Junagadh districts of Gujarat. It is known as the 'Queen of Mangoes' for its distinctive flavour and colour."
  },
  {
    id: "gt8_083", qNo: 83, subject: "horticulture",
    question: "The 'Nematode-resistant rootstock' widely used in banana is:",
    options: ["Basrai", "Ney Poovan", "Williams", "Poovan"],
    correct: 1,
    explanation: "Ney Poovan (Silk banana group, AA genome) is used as a nematode-resistant rootstock for banana production in certain regions."
  },
  {
    id: "gt8_084", qNo: 84, subject: "horticulture",
    question: "The 'Brix index' of a mature Totapuri mango at harvest should be approximately:",
    options: ["16–18°", "5–8°", "20–25°", "10–15°"],
    correct: 3,
    explanation: "Totapuri mango (processing variety) at harvest maturity has Brix of approximately 10–15°. Fully ripe Totapuri reaches 15–18°. It is harvested green for the processing industry."
  },
  {
    id: "gt8_085", qNo: 85, subject: "horticulture",
    question: "The 'parthenocarpy' in fruit development refers to fruit formation:",
    options: ["Only after double fertilisation", "Using artificial pollination only", "Without fertilisation (seedless fruit)", "After cross-pollination"],
    correct: 2,
    explanation: "Parthenocarpy is fruit development without fertilisation, resulting in seedless fruit. Natural parthenocarpy occurs in banana; induced parthenocarpy uses GA₃ or 4-CPA (in tomato, grape, etc.)."
  },
  {
    id: "gt8_086", qNo: 86, subject: "horticulture",
    question: "The 'National Horticulture Board (NHB)' is headquartered at:",
    options: ["New Delhi", "Hyderabad, Telangana", "Gurugram (Gurgaon), Haryana", "Bengaluru, Karnataka"],
    correct: 2,
    explanation: "National Horticulture Board (NHB) is headquartered in Gurugram (Gurgaon), Haryana. It was established in 1984 to promote integrated development of horticulture in India."
  },
  {
    id: "gt8_087", qNo: 87, subject: "horticulture",
    question: "The botanical classification of cashew (Anacardium occidentale) places it in the family:",
    options: ["Oxalidaceae", "Anacardiaceae", "Rosaceae", "Clusiaceae"],
    correct: 1,
    explanation: "Cashew (Anacardium occidentale) belongs to family Anacardiaceae, along with mango (Mangifera indica), pistachio (Pistacia vera), and poison ivy (Toxicodendron radicans)."
  },
  {
    id: "gt8_088", qNo: 88, subject: "horticulture",
    question: "The crop 'Ashwagandha' (Withania somnifera) is primarily grown for:",
    options: ["Medicinal root", "Green manure", "Vegetable", "Ornamental purpose"],
    correct: 0,
    explanation: "Ashwagandha (Withania somnifera) is an important medicinal plant (family Solanaceae) cultivated for its roots rich in withanolides, used as an adaptogen, anti-stress, and immune-modulating agent in Ayurveda."
  },
  {
    id: "gt8_089", qNo: 89, subject: "horticulture",
    question: "The 'cold storage' temperature recommended for most tropical fruits to avoid chilling injury is:",
    options: ["5–8°C", "10–15°C", "18–22°C", "0–2°C"],
    correct: 1,
    explanation: "Most tropical fruits (banana, mango, papaya, guava) are sensitive to chilling injury below 10°C. Storage at 10–15°C (depending on crop) prevents chilling injury while extending shelf life."
  },
  {
    id: "gt8_090", qNo: 90, subject: "agro-meteorology",
    question: "The Bowen ratio (β) in micro-meteorology is defined as:",
    options: ["Wind speed at 10 m divided by wind speed at 2 m", "Net radiation divided by incoming solar radiation", "Sensible heat flux (H) divided by latent heat flux (λE)", "Evapotranspiration divided by precipitation"],
    correct: 2,
    explanation: "Bowen ratio β = H/λE (sensible heat / latent heat flux). A low β indicates moist conditions with high ET; a high β indicates dry/hot conditions. It is used to partition available energy between sensible and latent heat and to estimate actual evapotranspiration from crops."
  },

  // EXTENSION (6)
  {
    id: "gt8_091", qNo: 91, subject: "extension",
    question: "The 'Sameti' (State Agricultural Management and Extension Training Institute) provides training at the:",
    options: ["National level", "District level", "Village level", "State level"],
    correct: 3,
    explanation: "SAMETIs are state-level institutes providing capacity building and training for extension functionaries, farm women, youth, and farmers — upgraded from former State Extension Education Institutes (SEEIs)."
  },
  {
    id: "gt8_092", qNo: 92, subject: "extension",
    question: "The 'Laxman Rekha' concept in extension refers to:",
    options: ["Critical limit in recommended practice", "A line below which an extension agent should not operate (administrative boundary)", "Boundary of a farmer's field", "Minimum income level for farmers"],
    correct: 0,
    explanation: "In extension, 'Laxman Rekha' refers to the critical level or line in crop management below which desired results are not achieved. It is used to motivate farmers to follow complete recommended packages."
  },
  {
    id: "gt8_093", qNo: 93, subject: "extension",
    question: "The 'Swarozgar Credit Card (SCC)' scheme is specifically targeted at:",
    options: ["Large farmers", "Agricultural input dealers", "Rural artisans and self-help groups", "Marginal farmers"],
    correct: 2,
    explanation: "Swarozgar Credit Card (SCC) scheme was launched in 2003–04 to provide working capital credit to rural artisans, handloom weavers, fishermen, self-help groups, and non-farm rural businesses."
  },
  {
    id: "gt8_094", qNo: 94, subject: "extension",
    question: "The 'MANAGE' (National Institute of Agricultural Extension Management) is located at:",
    options: ["New Delhi", "Bhopal", "Hyderabad", "Bengaluru"],
    correct: 2,
    explanation: "MANAGE (National Institute of Agricultural Extension Management) is located in Hyderabad, Telangana. It is the apex institute for training of extension personnel and agricultural management professionals."
  },
  {
    id: "gt8_095", qNo: 95, subject: "extension",
    question: "The 'Rashtriya Krishi Vikas Yojana (RKVY)' was launched in:",
    options: ["2007–08", "2002–03", "2015–16", "2012–13"],
    correct: 0,
    explanation: "RKVY was launched in 2007–08 as a special Additional Central Assistance scheme to incentivise states to increase agricultural investment and achieve 4% annual growth in agriculture."
  },
  // ── GENERAL AGRICULTURE (5) ──
  { id:"gt8_096", qNo:96, subject:"general-agriculture", question:"ICRISAT (International Crops Research Institute for the Semi-Arid Tropics) is located at:", options: ["Pune", "Bengaluru", "New Delhi", "Hyderabad"], correct: 3, explanation:"ICRISAT is headquartered at Patancheru, near Hyderabad, Telangana. Established in 1972, it conducts research on dryland crops (sorghum, pearl millet, chickpea, groundnut, pigeonpea) for semi-arid tropical regions." },
  { id:"gt8_097", qNo:97, subject:"general-agriculture", question:"The first Bt crop approved for commercial cultivation in India was:", options: ["Bt cotton (2002)", "Bt brinjal (2009)", "Bt rice (2001)", "Bt maize (2005)"], correct: 0, explanation:"Bt cotton (Bollgard I, Monsanto-Mahyco) was approved for commercial cultivation in India in March 2002 — the first transgenic/genetically modified crop approved in India for commercial use." },
  { id:"gt8_098", qNo:98, subject:"general-agriculture", question:"Rashtriya Krishi Vikas Yojana (RKVY) was launched in:", options: ["2005–06", "2007–08", "2001–02", "2012–13"], correct: 1, explanation:"RKVY was launched in 2007–08 as a special Additional Central Assistance scheme to incentivise states to invest in agriculture and achieve 4% annual growth in the sector. It is now 'RKVY-RAFTAAR'." },
  { id:"gt8_099", qNo:99, subject:"general-agriculture", question:"Paramparagat Krishi Vikas Yojana (PKVY) promotes:", options: ["Chemical farming", "Export of farm produce", "Organic farming", "Precision irrigation"], correct: 2, explanation:"PKVY (launched 2015) promotes organic farming in India through cluster-based approach, supporting farmers to adopt organic practices, obtain certification, and market organic produce. It is under National Mission for Sustainable Agriculture (NMSA)." },
  { id:"gt8_100", qNo:100, subject:"general-agriculture", question:"The Swaminathan Commission (2004–06) is officially known as the:", options: ["National Commission on Agriculture", "Agriculture Reforms Committee", "National Food Commission", "National Farmers Commission"], correct: 3, explanation:"The National Commission on Farmers (NCF), chaired by Dr. M.S. Swaminathan, submitted 5 reports (2004–2006) with recommendations on land reform, water, credit, insurance, food security and farmers' income — forming the basis of farm policy reforms." },
];
