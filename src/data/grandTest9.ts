import { GrandTestQuestion } from "./grandTestMeta";

export const GRAND_TEST_9: GrandTestQuestion[] = [
  // AGRONOMY (6)
  {
    id: "gt9_001", qNo: 1, subject: "agronomy",
    question: "The 'Net Field Water Requirement' (NFWR) for a crop is calculated as:",
    options: ["Crop Evapotranspiration (ETc)", "ETc + Percolation", "ETc − Effective Rainfall", "ETc − Effective Rainfall − Soil Moisture contribution"],
    correct: 3,
    explanation: "NFWR = ETc − Effective Rainfall − Soil Moisture contribution. It represents the actual irrigation water needed after accounting for all natural water contributions."
  },
  {
    id: "gt9_002", qNo: 2, subject: "agronomy",
    question: "The 'Zero tillage' technology in wheat cultivation (post-rice) saves approximately how much cost compared to conventional tillage?",
    options: ["2,000–3,000 Rs/ha", "25–30%", "10–15%", "50% of input cost"],
    correct: 0,
    explanation: "Zero-till wheat after rice saves approximately ₹2,000–3,000/ha in fuel, machinery, and labour costs compared to 3–4 tillage operations in conventional system. It also enables timely planting."
  },
  {
    id: "gt9_003", qNo: 3, subject: "agronomy",
    question: "The 'radiation use efficiency' (RUE) is defined as:",
    options: ["Crop yield / Solar constant", "Leaf area / Radiation intercepted", "Dry matter produced / Photosynthetically Active Radiation (PAR) intercepted", "Solar radiation captured / Total solar radiation"],
    correct: 2,
    explanation: "RUE (g/MJ) = Dry matter accumulated / Intercepted PAR. It measures how efficiently a crop converts intercepted radiation into biomass. C4 plants have higher RUE than C3 plants."
  },
  {
    id: "gt9_004", qNo: 4, subject: "agronomy",
    question: "The 'Lysimeter' is used in agronomy to measure:",
    options: ["Soil compaction", "Actual evapotranspiration (ET) from a soil-plant system", "Soil nutrient leaching rate", "Root biomass"],
    correct: 1,
    explanation: "A lysimeter is a research instrument containing a known soil volume where water balance components (ET, drainage, percolation) are precisely measured to determine actual crop water use."
  },
  {
    id: "gt9_005", qNo: 5, subject: "agronomy",
    question: "In saline soils, crop growth is impaired primarily due to:",
    options: ["High soil temperature", "Osmotic stress reducing water uptake and specific ion toxicity (Na⁺, Cl⁻)", "Low soil organic matter", "Reduced soil aeration"],
    correct: 1,
    explanation: "Salinity causes: (1) osmotic effect — high solute concentration in soil water prevents roots from absorbing water; (2) specific ion toxicity — excess Na⁺ and Cl⁻ are directly toxic to cells."
  },
  {
    id: "gt9_006", qNo: 6, subject: "agronomy",
    question: "The critical level of soil organic carbon (SOC) below which soil productivity is seriously impaired is:",
    options: ["< 2.0%", "< 1.0%", "< 0.1%", "< 0.5%"],
    correct: 3,
    explanation: "A soil organic carbon (SOC) level below 0.5% is considered critically low for tropical Indian soils, impacting soil structure, water holding capacity, nutrient availability, and biological activity."
  },

  // KHARIF CROPS (7)
  {
    id: "gt9_007", qNo: 7, subject: "kharif-crops",
    question: "The 'duration of photo-insensitive' or 'photo-neutral' rice varieties makes them suitable for:",
    options: ["Only short-day photoperiods", "Only high-altitude areas", "Tropical areas only", "Wide adaptability across latitudes and seasons without yield loss"],
    correct: 3,
    explanation: "Photo-insensitive (day-neutral) rice varieties flower based on thermal time rather than photoperiod, enabling them to be grown across different latitudes and seasons (kharif, rabi, summer)."
  },
  {
    id: "gt9_008", qNo: 8, subject: "kharif-crops",
    question: "The 'Nili Rabi cotton' system in Punjab and Haryana refers to:",
    options: ["Cotton", "Drip-irrigated cotton", "A variety of cotton", "Organic cotton production system"],
    correct: 0,
    explanation: "Nili Rabi is a cotton-wheat sequential (double) cropping system in Punjab and Haryana — cotton in kharif (sown May–June) followed by wheat in rabi. 'Nili' refers to the blue (neel) river region."
  },
  {
    id: "gt9_009", qNo: 9, subject: "kharif-crops",
    question: "The recommended plant population for hybrid cotton per hectare is approximately:",
    options: ["30,000–50,000 plants/ha", "5,000–10,000 plants/ha", "75,000–100,000 plants/ha", "15,000–20,000 plants/ha"],
    correct: 3,
    explanation: "For hybrid cotton (Bt cotton), recommended plant population is 15,000–20,000 plants/ha, typically at 90 × 60 cm or 60 × 30 cm spacing, depending on variety and agro-climatic zone."
  },
  {
    id: "gt9_010", qNo: 10, subject: "kharif-crops",
    question: "The 'Sehore 74-17' is a famous traditional variety of which crop?",
    options: ["Soybean", "Cotton", "Wheat", "Rice"],
    correct: 0,
    explanation: "Sehore 74-17 is a famous traditional non-GMO soybean variety from Madhya Pradesh known for its high oil content and suitability for organic cultivation and export markets."
  },
  {
    id: "gt9_011", qNo: 11, subject: "kharif-crops",
    question: "The 'Panicle Initiation' stage in rice is important because:",
    options: ["Water and nutrient stress at this stage causes maximum spikelet sterility", "It is the stage for transplanting", "Weeding is done at this time", "It determines plant height"],
    correct: 0,
    explanation: "Panicle initiation (PI) and booting stage are the most critical for irrigation and nitrogen application. Water or temperature stress at PI causes high spikelet sterility and significant yield loss."
  },
  {
    id: "gt9_012", qNo: 12, subject: "kharif-crops",
    question: "The 'castor' crop (Ricinus communis) is cultivated primarily for its oil which is used in:",
    options: ["Vegetable ghee production", "Edible oil production", "Lubricants, pharmaceuticals, plastics, and biodiesel (non-edible)", "Paint pigments"],
    correct: 2,
    explanation: "Castor oil is non-edible (contains ricin in seeds) but highly valuable for industrial uses: high-temperature lubricants, pharmaceuticals (laxative), plastics, biodiesel, and cosmetics."
  },
  {
    id: "gt9_013", qNo: 13, subject: "kharif-crops",
    question: "The 'Water Use Efficiency' (WUE) of a crop is expressed as:",
    options: ["Both B and C are correct definitions for different contexts", "Crop yield / Evapotranspiration", "Rainfall received / Crop yield", "Crop yield / Irrigation water applied"],
    correct: 0,
    explanation: "WUE can be expressed as: (1) Agro-WUE = Yield / ET (g/mm or kg/m³), measuring efficiency of water used; (2) Irrigation WUE = Yield / Irrigation applied. Both are valid in different contexts."
  },

  // RABI CROPS (5)
  {
    id: "gt9_014", qNo: 14, subject: "rabi-crops",
    question: "The 'late-sown' wheat (after November 25) suffers yield loss primarily due to:",
    options: ["Frost damage during germination", "Excessive rainfall at maturity", "Lodging due to late growth", "Terminal heat stress during grain filling"],
    correct: 3,
    explanation: "Late-sown wheat suffers terminal heat stress during grain filling (March–April when temperatures rise). High temperature reduces starch synthesis duration and grain weight, causing significant yield loss."
  },
  {
    id: "gt9_015", qNo: 15, subject: "rabi-crops",
    question: "The crop 'Fenugreek' (methi, Trigonella foenum-graecum) belongs to which family?",
    options: ["Lamiaceae", "Asteraceae", "Fabaceae", "Apiaceae"],
    correct: 2,
    explanation: "Fenugreek (Trigonella foenum-graecum) belongs to family Fabaceae (Leguminosae), subfamily Papilionoideae. Both its leaves and seeds are used as a vegetable/herb and spice."
  },
  {
    id: "gt9_016", qNo: 16, subject: "rabi-crops",
    question: "The 'Taramira' (Eruca sativa) is an oilseed crop used as a rabi crop primarily in:",
    options: ["Assam only", "Tamil Nadu variety", "Kerala species", "Rajasthan and Haryana"],
    correct: 3,
    explanation: "Taramira (Eruca sativa / rocket salad) is cultivated as a winter oilseed crop in dry areas of Rajasthan, Haryana, and Punjab. Its oil is used locally and its leaves are consumed as salad."
  },
  {
    id: "gt9_017", qNo: 17, subject: "rabi-crops",
    question: "The 'Sonalika' variety of wheat, released in 1967, is significant because it was the first:",
    options: ["Variety with 100 days maturity in plains", "Dwarf wheat variety from IARI", "Disease-resistant variety", "Mexican semi"],
    correct: 3,
    explanation: "Sonalika was the first widely adopted Mexican semi-dwarf wheat variety for north Indian conditions. It was non-photo-sensitive, enabling rabi cropping across diverse environments."
  },
  {
    id: "gt9_018", qNo: 18, subject: "rabi-crops",
    question: "The deficiency of which element causes 'hidden hunger' in wheat leading to reduced grain quality without obvious symptoms?",
    options: ["Iron", "Zinc", "Manganese", "Copper"],
    correct: 1,
    explanation: "Zinc deficiency in wheat causes 'hidden hunger' — reduced grain zinc content and yield without obvious leaf symptoms. It also causes 'white bud' in seedlings. India has widespread Zn deficiency in soils."
  },

  // GENETICS (7)
  {
    id: "gt9_019", qNo: 19, subject: "genetics",
    question: "The 'molecular clock' hypothesis in evolution proposes that:",
    options: ["Mutation rate is inversely proportional to generation time", "DNA/protein sequences accumulate mutations at a roughly constant rate over time", "Evolutionary changes occur in pulses", "Larger organisms evolve faster"],
    correct: 1,
    explanation: "The molecular clock hypothesis (Zuckerkandl & Pauling, 1965) proposes that mutations accumulate at a relatively constant rate in certain genes, allowing estimation of divergence times from sequence differences."
  },
  {
    id: "gt9_020", qNo: 20, subject: "genetics",
    question: "Genome editing using CRISPR-Cas9 works by:",
    options: ["Transposon-mediated insertion", "Inserting large DNA segments randomly", "Using guide RNA to direct Cas9 nuclease to cut specific DNA sequences", "Chemical mutagenesis at specific sites"],
    correct: 2,
    explanation: "CRISPR-Cas9 uses a guide RNA (gRNA) to direct the Cas9 endonuclease to a specific genomic target complementary to the gRNA sequence, creating a double-strand break for precise editing."
  },
  {
    id: "gt9_021", qNo: 21, subject: "genetics",
    question: "The 'expressivity' in genetics refers to:",
    options: ["The degree to which a gene is expressed in phenotype among individuals carrying it", "The number of genes affecting a trait", "The ability of a gene to interact epistatically", "Whether or not a genotype produces a phenotype (penetrance)"],
    correct: 0,
    explanation: "Expressivity is the degree (quantitative variation) to which a genotype is expressed phenotypically in individuals who show the trait. Penetrance is all-or-none; expressivity is the degree among those showing it."
  },
  {
    id: "gt9_022", qNo: 22, subject: "genetics",
    question: "In wheat, the 'D genome' was contributed by which wild species during polyploidisation?",
    options: ["Aegilops squarrosa", "Aegilops speltoides", "Triticum monococcum", "Triticum urartu"],
    correct: 0,
    explanation: "Bread wheat (T. aestivum, AABBDD) is a hexaploid. The D genome came from Aegilops tauschii (goatgrass); A genome from T. urartu; B genome from Aegilops speltoides ancestor."
  },
  {
    id: "gt9_023", qNo: 23, subject: "genetics",
    question: "The 'probability of identical by descent' coefficient is called:",
    options: ["Heritability coefficient", "Inbreeding coefficient (F)", "Coefficient of kinship", "Correlation coefficient"],
    correct: 1,
    explanation: "The inbreeding coefficient (F) measures the probability that two alleles at any locus are identical by descent (IBD). F = 0 in non-inbred individuals; F = 1 in complete inbreeding."
  },
  {
    id: "gt9_024", qNo: 24, subject: "genetics",
    question: "The 'Green Revolution' wheat variety HYVs had dwarfing genes from:",
    options: ["Norin-10", "Chinese Spring", "Marquis wheat", "Emmer wheat"],
    correct: 0,
    explanation: "The dwarfing genes Rht-B1b and Rht-D1b (Rht-1 and Rht-2) were derived from Japanese variety Norin-10 and introduced into US wheats by Orville Vogel, then used by Norman Borlaug for Mexican dwarf wheats."
  },
  {
    id: "gt9_025", qNo: 25, subject: "genetics",
    question: "The 'Restriction enzymes' (restriction endonucleases) were discovered by:",
    options: ["Fred Sanger (Nobel 1958, 1980)", "James Watson and Francis Crick", "Kary Mullis (Nobel 1993)", "Werner Arber, Daniel Nathans, and Hamilton Smith (Nobel 1978)"],
    correct: 3,
    explanation: "Restriction enzymes were discovered by Werner Arber (bacteria), Daniel Nathans and Hamilton Smith (type II restriction enzymes). They shared the Nobel Prize in 1978 for this discovery."
  },

  // SEED TECHNOLOGY (4)
  {
    id: "gt9_026", qNo: 26, subject: "seed-technology",
    question: "The 'Protectant seed treatment' uses fungicide coating to protect seeds from:",
    options: ["Externally borne pathogens on the seed surface", "Both seed-borne and soil-borne pathogens", "Only storage fungi", "Only soil-borne pathogens after sowing"],
    correct: 0,
    explanation: "Protectant seed treatment (surface treatment) uses fungicides to protect against surface-borne pathogens on seed. Systemic seed treatments protect against both seed-borne and early soil-borne pathogens."
  },
  {
    id: "gt9_027", qNo: 27, subject: "seed-technology",
    question: "The 'National Gene Bank of India' for plant genetic resources is maintained at:",
    options: ["ICAR-NBSS&LUP, Nagpur", "NBPGR, New Delhi", "ICRISAT, Hyderabad", "IARI, New Delhi"],
    correct: 1,
    explanation: "NBPGR (National Bureau of Plant Genetic Resources), ICAR, New Delhi, maintains the National Gene Bank of India with >450,000 accessions of various crop species stored at −18°C for long-term conservation."
  },
  {
    id: "gt9_028", qNo: 28, subject: "seed-technology",
    question: "The 'Electrical Conductivity Test' for seed quality measures:",
    options: ["Seed coat permeability to water", "Nutrient content of seeds", "Seed electrolyte leakage indicating membrane integrity (vigour test)", "Seed moisture content"],
    correct: 2,
    explanation: "The EC test measures electrical conductivity of seed soak water. Low vigour seeds leak more electrolytes (ions) from damaged membranes, giving higher conductivity readings."
  },
  {
    id: "gt9_029", qNo: 29, subject: "seed-technology",
    question: "The 'Cryopreservation' at −196°C (liquid nitrogen) is used primarily for:",
    options: ["Virus elimination from planting material", "Standard quality seed storage", "Long", "Short-term storage of germplasm"],
    correct: 2,
    explanation: "Cryopreservation at −196°C (liquid nitrogen) is used for long-term storage of recalcitrant seeds (cannot be dried/stored conventionally), pollen, embryos, meristems, and cell cultures."
  },

  // SOIL SCIENCE (5)
  {
    id: "gt9_030", qNo: 30, subject: "soil-science",
    question: "The 'Electrical Conductivity (EC)' of a saturated paste extract (ECe) > 4 dS/m indicates:",
    options: ["Highly saline (only tolerant crops survive)", "Saline soil (most crops affected)", "Non-saline soil", "Slightly saline (sensitive crops affected)"],
    correct: 1,
    explanation: "Saline soil classification (ECe): Non-saline < 2 dS/m; Slightly saline 2–4 dS/m; Moderately saline 4–8 dS/m; Strongly saline 8–16 dS/m; Very strongly saline > 16 dS/m."
  },
  {
    id: "gt9_031", qNo: 31, subject: "soil-science",
    question: "The 'Stokes' law' applied in soil texture analysis (hydrometer method) relates particle settling velocity to:",
    options: ["Particle weight and soil pH", "Particle radius squared and viscosity of the fluid", "Surface area and temperature only", "Soil aggregate stability"],
    correct: 1,
    explanation: "Stokes' law: v = 2r²(ρs−ρl)g / 9η, where v = settling velocity, r = particle radius, ρs = particle density, ρl = liquid density, g = gravity, η = viscosity. Larger particles settle faster."
  },
  {
    id: "gt9_032", qNo: 32, subject: "soil-science",
    question: "The 'Soil Organic Matter' (SOM) is approximately related to Soil Organic Carbon (SOC) by the factor:",
    options: ["SOC × 0.5", "SOC × 2.5", "SOC × 1.0", "SOC × 1.724"],
    correct: 3,
    explanation: "SOM = SOC × 1.724 (Van Bemmelen factor). This is based on the assumption that organic matter contains approximately 58% carbon (100/58 = 1.724). SOM is about 1.7× the SOC value."
  },
  {
    id: "gt9_033", qNo: 33, subject: "soil-science",
    question: "The 'Aggregate stability' of soil is best measured by the:",
    options: ["Dry sieving only", "Textural analysis", "Hydrometer method", "Wet sieving method"],
    correct: 3,
    explanation: "Wet sieving (wet aggregate stability test) measures soil aggregate stability by determining the proportion of aggregates that remain intact after immersion and wet sieving, indicating structure quality."
  },
  {
    id: "gt9_034", qNo: 34, subject: "soil-science",
    question: "The 'Soil Taxonomy' (USDA, 1975) classifies soils primarily based on:",
    options: ["Vegetation and land use", "Country of origin", "Parent material and climate only", "Observable and measurable soil properties"],
    correct: 3,
    explanation: "USDA Soil Taxonomy classifies soils based on diagnostic soil horizons (epipedons and subsurface horizons) and soil characteristics (temperature regime, moisture regime, physical/chemical properties) — properties observable in the field and lab."
  },

  // SOIL FERTILITY (5)
  {
    id: "gt9_035", qNo: 35, subject: "soil-fertility",
    question: "The 'SPAD (Soil Plant Analysis Development) meter' is used for:",
    options: ["Measuring soil EC", "Estimating crop water stress", "Non", "Measuring soil phosphorus"],
    correct: 2,
    explanation: "SPAD meter measures transmittance of red (650 nm) and infrared (940 nm) light through leaves. Higher SPAD reading = more chlorophyll = better nitrogen status. Used for real-time N fertiliser decisions."
  },
  {
    id: "gt9_036", qNo: 36, subject: "soil-fertility",
    question: "The 'Leaf Colour Chart (LCC)' developed by IRRI for nitrogen management in rice has how many colour grades?",
    options: ["6", "4", "3", "8"],
    correct: 1,
    explanation: "The IRRI Leaf Colour Chart (LCC) has 4 colour grades from light yellow-green to dark green. Fertiliser N is applied when leaf colour falls below the critical threshold value (grade 3–4 depending on variety)."
  },
  {
    id: "gt9_037", qNo: 37, subject: "soil-fertility",
    question: "Which of the following is correctly classified as a 'slow-release nitrogen fertiliser'?",
    options: ["Neem", "Ammonium nitrate", "Ammonium sulphate", "Urea"],
    correct: 0,
    explanation: "Slow-release N fertilisers include sulphur-coated urea (SCU), neem-coated urea, IBDU (isobutylidene diurea), and resin-coated fertilisers — releasing N slowly to match crop demand and reduce losses."
  },
  {
    id: "gt9_038", qNo: 38, subject: "soil-fertility",
    question: "The 'Phosphate Solubilising Bacteria' (PSB) primarily solubilise phosphate through:",
    options: ["Production of organic acids (gluconic, citric, oxalic) that lower pH and release phosphate", "Nitrogen fixation linked to phosphorus release", "Producing phosphatase enzymes only", "Physical disruption of rock phosphate"],
    correct: 0,
    explanation: "PSB (e.g., Bacillus, Pseudomonas, Aspergillus) produce organic acids (principally gluconic acid by glucose oxidation) that acidify the rhizosphere, solubilising insoluble Ca-phosphates and rock phosphate."
  },
  {
    id: "gt9_039", qNo: 39, subject: "soil-fertility",
    question: "The 'Soil Test Based Fertiliser Recommendation (STBFR)' targets:",
    options: ["Maximum fertiliser input for maximum yield", "Only organic farming systems", "Generic fertiliser doses for all soils", "Specific yield goal by applying fertiliser to make up the soil's nutrient deficit"],
    correct: 3,
    explanation: "STBFR (targeted yield concept) calculates fertiliser dose based on: nutrients needed by crop for target yield − nutrients available in soil = fertiliser requirement. Maximises efficiency and reduces waste."
  },

  // ENTOMOLOGY (5)
  {
    id: "gt9_040", qNo: 40, subject: "entomology",
    question: "The 'Resistance Management' for Bt crops involves the 'refuge strategy' which requires:",
    options: ["Growing non", "Using multiple pesticides together", "Planting all non-Bt varieties", "Rotating Bt with non-Bt every season"],
    correct: 0,
    explanation: "The refuge strategy requires planting 5–20% non-Bt (refuge) crop near Bt crops. Susceptible insects from the refuge mate with any resistant insects that emerge, diluting resistance genes in the population."
  },
  {
    id: "gt9_041", qNo: 41, subject: "entomology",
    question: "The 'Neonicotinoid' class of insecticides acts by:",
    options: ["Disrupting cuticle synthesis", "Binding to nicotinic acetylcholine receptors (nAChR) causing overstimulation", "Inhibiting mitochondrial respiration", "Inhibiting acetylcholinesterase (AChE)"],
    correct: 1,
    explanation: "Neonicotinoids (imidacloprid, thiamethoxam, clothianidin) bind to nicotinic acetylcholine receptors (nAChR) in the insect nervous system, causing continuous nerve stimulation, paralysis, and death."
  },
  {
    id: "gt9_042", qNo: 42, subject: "entomology",
    question: "The 'Grub' is the larval stage of which order of insects?",
    options: ["Hymenoptera (wasps/bees)", "Coleoptera (beetles)", "Lepidoptera (moths/butterflies)", "Diptera (flies)"],
    correct: 1,
    explanation: "A grub is the larva of beetles (order Coleoptera). It is a fleshy, C-shaped larva with three pairs of legs. 'White grubs' (Holotrichia, Melolontha) are important soil pests."
  },
  {
    id: "gt9_043", qNo: 43, subject: "entomology",
    question: "The 'Queen substance' in honey bees is a pheromone produced by the queen to:",
    options: ["Attract drones for mating only", "Suppress worker reproduction and maintain colony cohesion", "Signal alarm to workers", "Attract workers to food sources"],
    correct: 1,
    explanation: "Queen substance (9-oxo-2-decenoic acid / QMP — Queen Mandibular Pheromone) is produced by the queen. It suppresses development of worker ovaries and helps maintain colony unity."
  },
  {
    id: "gt9_044", qNo: 44, subject: "entomology",
    question: "The 'Puparium' is a type of pupal case formed by which insect group?",
    options: ["Wasps", "Moths and butterflies", "Beetles", "Flies"],
    correct: 3,
    explanation: "A puparium is formed by higher (calyptrate) flies — the last larval cuticle hardens and darkens to encase the developing pupa. It is characteristic of Musca, Calliphora, and related flies."
  },

  // CROP PESTS (5)
  {
    id: "gt9_045", qNo: 45, subject: "crop-pests",
    question: "The 'Screw worm fly' (Chrysomya bezziana) is a serious veterinary pest that:",
    options: ["Attacks crop roots", "Infests grain stores", "Pollinates mango flowers", "Causes myiasis (flesh wounds) in livestock"],
    correct: 3,
    explanation: "Chrysomya bezziana (Old World screwworm fly) causes myiasis — larvae infest open wounds, navels of newborns, or natural body cavities of livestock, causing serious welfare and economic damage."
  },
  {
    id: "gt9_046", qNo: 46, subject: "crop-pests",
    question: "The 'Fall Armyworm' (Spodoptera frugiperda) was first detected in India in:",
    options: ["2022", "2020", "2018", "2015"],
    correct: 2,
    explanation: "Fall Armyworm (Spodoptera frugiperda) was first detected in India in May 2018 in Karnataka. It spread rapidly across India and is now a major pest of maize, sorghum, and other crops."
  },
  {
    id: "gt9_047", qNo: 47, subject: "crop-pests",
    question: "The 'Banana weevil' (Cosmopolites sordidus) attacks banana plants by:",
    options: ["Adults and larvae boring into pseudostem base and corm", "Sucking sap from young fruits", "Damaging flower buds", "Feeding on leaves"],
    correct: 0,
    explanation: "Banana weevil (Cosmopolites sordidus) adults and larvae bore into the pseudostem base and corm (rhizome), weakening the plant and causing toppling, particularly damaging ratoon crops."
  },
  {
    id: "gt9_048", qNo: 48, subject: "crop-pests",
    question: "The 'Stored grain pest' that produces a characteristic musty smell in infested grain is:",
    options: ["Ephestia kuehniella (flour moth)", "Sitophilus oryzae (rice weevil)", "Trogoderma granarium (Khapra beetle)", "Tribolium castaneum (red flour beetle)"],
    correct: 3,
    explanation: "Tribolium castaneum produces odorous quinone secretions that give infested grain a distinctive musty/oily smell. It is a serious secondary pest of flour, cereals, and processed food products."
  },
  {
    id: "gt9_049", qNo: 49, subject: "crop-pests",
    question: "The 'IPM package' for rice in Andhra Pradesh/Telangana mandates:",
    options: ["Blanket application of insecticides at sowing", "Complete avoidance of all chemical inputs", "Chemical spray calendar irrespective of pest status", "Monitoring"],
    correct: 3,
    explanation: "IPM in rice emphasises: pest scouting/monitoring, use of resistant varieties, biological control (egg parasitoids, Bt), cultural practices, and judicious chemical use only when ETL is crossed."
  },

  // FARM MACHINERY (6)
  {
    id: "gt9_050", qNo: 50, subject: "farm-machinery",
    question: "The 'Cylinder and Concave' assembly in a combine harvester performs the function of:",
    options: ["Cutting the crop", "Threshing", "Cleaning chaff from grain", "Transporting grain to the tank"],
    correct: 1,
    explanation: "The threshing unit (rasp bar cylinder + concave) threshes the crop by impact and rubbing. Grain and chaff fall through concave openings; straw is conveyed to the straw walker for separation."
  },
  {
    id: "gt9_051", qNo: 51, subject: "farm-machinery",
    question: "A tractor has a draw-bar power of 40 kW when pulling a load at 5 km/h. The drawbar pull force is:",
    options: ["1000 N", "28.8 kN", "8 kN", "200 kN"],
    correct: 1,
    explanation: "Power (kW) = Force (kN) × Speed (m/s). Speed = 5 km/h = 5/3.6 = 1.389 m/s. Force = 40 kW / 1.389 m/s = 28.8 kN."
  },
  {
    id: "gt9_052", qNo: 52, subject: "farm-machinery",
    question: "The 'NDVI (Normalized Difference Vegetation Index)' used in precision agriculture is calculated as:",
    options: ["(Green − Red) / (Green + Red)", "(NIR − Red) / (NIR + Red)", "(Red − NIR) / (Red + NIR)", "(Blue − NIR) / (Blue + NIR)"],
    correct: 1,
    explanation: "NDVI = (NIR − Red) / (NIR + Red). Values range from −1 to +1; healthy vegetation reflects strongly in NIR and absorbs Red, giving high NDVI (0.3–0.8). It is used for crop monitoring and biomass estimation."
  },
  {
    id: "gt9_053", qNo: 53, subject: "farm-machinery",
    question: "The 'hydraulic conductivity' relevant to drip irrigation lateral design is important because:",
    options: ["It determines pump efficiency", "It determines soil type", "It measures fertiliser solubility", "It affects flow rate through emitters and uniformity of water distribution"],
    correct: 3,
    explanation: "Emitter hydraulic characteristics (flow rate vs. pressure relationship) determine drip system uniformity. Drip laterals must be designed so pressure variation is < 20% to maintain 90%+ emission uniformity."
  },
  {
    id: "gt9_054", qNo: 54, subject: "farm-machinery",
    question: "The 'Grain moisture meter' used at procurement centres measures moisture content by:",
    options: ["Karl Fischer titration", "Near-infrared spectroscopy only", "Oven drying method", "Electrical resistance or capacitance method"],
    correct: 3,
    explanation: "Commercial grain moisture meters use electrical resistance (resistive meters) or capacitance (capacitance meters) to estimate moisture content quickly. Oven drying (105°C, 72 hrs) is the reference method."
  },
  {
    id: "gt9_055", qNo: 55, subject: "farm-machinery",
    question: "The 'CAD/CAM (Computer Aided Design/Manufacturing)' in farm machinery manufacturing is used for:",
    options: ["GPS-based tractor guidance", "Field data collection", "Precision design and manufacturing of implement components", "Crop monitoring from satellites"],
    correct: 2,
    explanation: "CAD/CAM enables precision design and manufacturing of farm machinery components, reducing errors, improving quality and consistency, and accelerating the design-to-production process."
  },

  // PLANT PATHOLOGY (9)
  {
    id: "gt9_056", qNo: 56, subject: "plant-pathology",
    question: "The 'Bakanae disease' (foolish seedling disease) of rice is caused by:",
    options: ["Pyricularia oryzae", "Gibberella fujikuroi", "Helminthosporium oryzae", "Xanthomonas oryzae pv. oryzae"],
    correct: 1,
    explanation: "Bakanae (foolish seedling disease) is caused by Gibberella fujikuroi (anamorph Fusarium moniliforme = F. proliferatum). The fungus produces gibberellin A, causing abnormal elongation of seedlings."
  },
  {
    id: "gt9_057", qNo: 57, subject: "plant-pathology",
    question: "The 'Alternaria blight' of potato and tomato is distinguished from late blight by:",
    options: ["Concentric ring 'target spot' lesions primarily on older leaves; caused by Alternaria solani", "White cottony sporulation on leaf undersides", "Symptoms appearing first on younger leaves", "Affecting only roots"],
    correct: 0,
    explanation: "Alternaria early blight (A. solani) causes brown 'target spot' lesions with concentric rings primarily on older leaves. Late blight (Phytophthora) produces water-soaked lesions with white sporulation on younger tissue."
  },
  {
    id: "gt9_058", qNo: 58, subject: "plant-pathology",
    question: "The bacterium causing 'Crown gall disease' in plants forms tumours by:",
    options: ["Producing toxins that stimulate abnormal cell division", "Blocking vascular tissue", "Transferring Ti plasmid DNA into host cells using T-DNA", "Secreting growth hormones externally"],
    correct: 2,
    explanation: "Agrobacterium tumefaciens causes crown gall by transferring T-DNA (tumour-inducing DNA) from its Ti plasmid into the host plant cell genome, inducing overproduction of auxin, cytokinin, and opines."
  },
  {
    id: "gt9_059", qNo: 59, subject: "plant-pathology",
    question: "The 'race' concept in plant pathology (gene-for-gene hypothesis) was proposed by:",
    options: ["E.C. Stakman", "H.H. Flor", "J.E. Vanderplank", "P.W. Brian"],
    correct: 1,
    explanation: "H.H. Flor (1956) proposed the gene-for-gene hypothesis while studying flax rust: for each gene for resistance in the host, there is a corresponding gene for virulence/avirulence in the pathogen."
  },
  {
    id: "gt9_060", qNo: 60, subject: "plant-pathology",
    question: "The 'Stylet-borne transmission' of plant viruses by aphids is characterised by:",
    options: ["Only seed-to-plant transmission", "Long acquisition and inoculation periods (hours to days)", "Very short acquisition and inoculation periods (minutes to seconds)", "Circulative, propagative virus replication in aphid"],
    correct: 2,
    explanation: "Stylet-borne (non-persistent) transmission: Very short acquisition feeding period (seconds to minutes), short inoculation period, virus is at stylet tip, no latent period, virus not retained after moult."
  },
  {
    id: "gt9_061", qNo: 61, subject: "plant-pathology",
    question: "The 'Karnal bunt' (partial bunt) of wheat is caused by:",
    options: ["Ustilago tritici", "Neovossia indica", "Tilletia tritici", "Tilletia controversa"],
    correct: 1,
    explanation: "Karnal bunt (partial bunt) of wheat is caused by Neovossia indica (= Tilletia indica). Only some kernels in an ear are infected. It is a quarantine pest in many countries due to trade implications."
  },
  {
    id: "gt9_062", qNo: 62, subject: "plant-pathology",
    question: "The 'Ergot disease' of bajra (pearl millet) is caused by which pathogen?",
    options: ["Sclerospora graminicola", "Claviceps fusiformis", "Ustilago cynodontis", "Claviceps purpurea"],
    correct: 1,
    explanation: "Ergot of bajra (pearl millet) is caused by Claviceps fusiformis. (C. purpurea causes ergot of rye/barley.) The honeydew stage produces amber-coloured droplets; later sclerotia replace ovaries."
  },
  {
    id: "gt9_063", qNo: 63, subject: "plant-pathology",
    question: "The 'Clubroot disease' of crucifers is caused by a primitive protist:",
    options: ["Albugo candida", "Plasmodiophora brassicae", "Pythium ultimum", "Olpidium brassicae"],
    correct: 1,
    explanation: "Clubroot of crucifers (cabbage, cauliflower, radish) is caused by Plasmodiophora brassicae — a plasmodiophorid protist (not a true fungus). It causes hypertrophy/hyperplasia of roots forming characteristic clubs."
  },
  {
    id: "gt9_064", qNo: 64, subject: "plant-pathology",
    question: "The 'Monocyclic disease' is one in which:",
    options: ["Only one infection cycle occurs per season (single cycle)", "Multiple infection cycles occur in a season", "Disease occurs in alternate years", "Disease spreads through seeds only"],
    correct: 0,
    explanation: "Monocyclic diseases have only one infection cycle per season (e.g., smuts, many soil-borne diseases). Polycyclic diseases (e.g., rusts, blights) have multiple cycles per season and can cause epidemics rapidly."
  },

  // AGRICULTURAL ECONOMICS (7)
  {
    id: "gt9_065", qNo: 65, subject: "agricultural-economics",
    question: "The 'Amartya Sen' theory of famines argues that famines are primarily caused by:",
    options: ["Failure of food entitlements", "Overpopulation", "Absolute shortage of food production", "Natural disasters alone"],
    correct: 0,
    explanation: "Amartya Sen's Entitlement Theory (1981) argues famines result from 'entitlement failures' — people lack the economic means to acquire food even when overall food supply is adequate. He won the Nobel Prize in 1998."
  },
  {
    id: "gt9_066", qNo: 66, subject: "agricultural-economics",
    question: "The 'Doubling Farmers' Income' target in India was set to be achieved by:",
    options: ["2020", "2030", "2022", "2025"],
    correct: 2,
    explanation: "The Government of India's target of 'Doubling Farmers' Income' (DFI) was set to be achieved by 2022 (from 2015–16 base year). The Dalwai Committee (2016–18) outlined the framework."
  },
  {
    id: "gt9_067", qNo: 67, subject: "agricultural-economics",
    question: "The 'Inclusive growth' concept means economic growth that:",
    options: ["Excludes government intervention", "Benefits all sections of society, reducing inequality", "Maximises GDP growth only", "Focuses only on urban development"],
    correct: 1,
    explanation: "Inclusive growth is economic growth that is distributed fairly across society, creates opportunities for all, and reduces poverty and inequality — as opposed to growth that benefits only a few."
  },
  {
    id: "gt9_068", qNo: 68, subject: "agricultural-economics",
    question: "Under the 'Soil Health Card Scheme', farmers receive the card every:",
    options: ["2 years", "5 years", "3 years", "1 year"],
    correct: 0,
    explanation: "Under India's Soil Health Card scheme (launched 2015), soil health cards are issued to farmers every 2 years (once in 2 years) with 12 nutrient parameters and recommendations."
  },
  {
    id: "gt9_069", qNo: 69, subject: "agricultural-economics",
    question: "The 'Coefficient of Determination (R²)' in regression analysis represents:",
    options: ["The correlation coefficient squared", "The error term in regression", "The proportion of total variation in Y explained by X", "The slope of the regression line"],
    correct: 2,
    explanation: "R² (coefficient of determination) = explained variation / total variation × 100%. It shows what percentage of the variability in the dependent variable (Y) is explained by the independent variable(s) (X). Note: R² = r²."
  },
  {
    id: "gt9_070", qNo: 70, subject: "agricultural-economics",
    question: "The 'Price Support Scheme (PSS)' for oilseeds, pulses, and copra in India is implemented by:",
    options: ["SFAC", "State Agriculture Departments", "FCI", "NAFED"],
    correct: 3,
    explanation: "NAFED (National Agricultural Cooperative Marketing Federation) is the nodal agency for implementing Price Support Scheme (PSS) for oilseeds, pulses, and copra when market prices fall below MSP."
  },
  {
    id: "gt9_071", qNo: 71, subject: "agricultural-economics",
    question: "The 'Crop Diversification' is important for farm income stability because it:",
    options: ["Reduces total yield", "Increases input costs", "Reduces soil fertility", "Reduces income risk by spreading across crops with different market cycles"],
    correct: 3,
    explanation: "Crop diversification reduces income variability by spreading risk — prices and yields of different crops are not perfectly correlated, so adverse conditions for one crop may not affect others simultaneously."
  },

  // SURVEYING (4)
  {
    id: "gt9_072", qNo: 72, subject: "surveying",
    question: "The 'Remote Sensing' satellite data is primarily used in agriculture for:",
    options: ["Weather forecasting only", "Underground water mapping only", "Crop area estimation, yield forecasting, drought monitoring, and land use mapping", "Measuring soil temperature at depth"],
    correct: 2,
    explanation: "Remote sensing satellites provide multi-spectral data used for: crop area estimation, yield forecasting, crop health monitoring, drought/flood assessment, land use/land cover mapping, and soil mapping."
  },
  {
    id: "gt9_073", qNo: 73, subject: "surveying",
    question: "The 'Total Station' in modern surveying combines which instruments?",
    options: ["Theodolite + Electronic Distance Measurement (EDM)", "Compass + Ruler", "Level + Compass", "GPS + Camera"],
    correct: 0,
    explanation: "A total station integrates a theodolite (for horizontal and vertical angles) with an Electronic Distance Measurement (EDM) device, enabling 3D coordinate measurement in one instrument."
  },
  {
    id: "gt9_074", qNo: 74, subject: "surveying",
    question: "The 'Manning's equation' is used for calculating flow velocity in:",
    options: ["Sprinkler pipes", "Open channels", "Pipes under pressure", "Soil water movement"],
    correct: 1,
    explanation: "Manning's equation V = (1/n) × R^(2/3) × S^(1/2) calculates flow velocity in open channels, where n = Manning's roughness, R = hydraulic radius, and S = channel slope."
  },
  {
    id: "gt9_075", qNo: 75, subject: "surveying",
    question: "The 'Land Capability Classification' system of USDA classifies land into how many classes?",
    options: ["6", "10", "8", "4"],
    correct: 2,
    explanation: "USDA Land Capability Classification has 8 classes (I to VIII): Classes I–IV suitable for cultivation (with increasing limitations); Classes V–VIII suitable for pasture, forestry, wildlife, recreation."
  },

  // FORESTRY (5)
  {
    id: "gt9_076", qNo: 76, subject: "forestry",
    question: "The 'Coppice system' of forest management is suitable for species that:",
    options: ["Regenerate vigorously from root stocks or stumps after cutting", "Cannot regenerate from stumps", "Require seed regeneration only", "Are shade tolerant saplings"],
    correct: 0,
    explanation: "The coppice system relies on vegetative regeneration from cut stumps (epicormic shoots). It is suited for broadleaved species (Eucalyptus, Tectona in early rotation, Dalbergia) that coppice well."
  },
  {
    id: "gt9_077", qNo: 77, subject: "forestry",
    question: "The 'Indian Forest Act 1927' classifies forests as:",
    options: ["Reserved forests, Protected forests, and Village forests", "Commercial forests and conservation forests", "Dry forests and moist forests", "National forests and state forests"],
    correct: 0,
    explanation: "Indian Forest Act 1927 classifies forests into: Reserved Forests (maximum protection), Protected Forests (limited rights), and Village Forests (managed for village use) — legal classifications, not ecological."
  },
  {
    id: "gt9_078", qNo: 78, subject: "forestry",
    question: "The 'Teak (Tectona grandis)' is commercially harvested at a rotation of approximately:",
    options: ["10–15 years", "20–30 years", "100+ years", "60–80 years"],
    correct: 3,
    explanation: "Teak is commercially harvested at 60–80 years for large timber logs. Short rotations (15–20 years) produce small poles. Government rotations in India are typically 60–80 years."
  },
  {
    id: "gt9_079", qNo: 79, subject: "forestry",
    question: "The 'Panchayat Extension to Scheduled Areas (PESA) Act 1996' is related to forests because it:",
    options: ["Allows commercial logging by tribals", "Gives tribal gram sabhas rights over minor forest produce and resources in scheduled areas", "Creates new protected areas", "Privatises forest land"],
    correct: 1,
    explanation: "PESA 1996 extends Panchayati Raj Act to tribal (scheduled) areas, giving gram sabhas rights over minor forest produce (MFP), land management, water, and forest resources in their territories."
  },
  {
    id: "gt9_080", qNo: 80, subject: "forestry",
    question: "The 'Markov chain model' in forest ecology is used to predict:",
    options: ["Forest succession and vegetation transition probabilities between states", "Carbon sequestration rates", "Species diversity indices", "Tree height growth"],
    correct: 0,
    explanation: "Markov chain models are used in forest ecology to model vegetation succession by estimating transition probabilities between vegetation states (e.g., grassland → shrubland → forest) over time."
  },

  // HORTICULTURE (10)
  {
    id: "gt9_081", qNo: 81, subject: "horticulture",
    question: "The 'Datura stramonium' is botanically related to tomato, brinjal, and chilli because they all belong to:",
    options: ["Malvaceae", "Solanaceae", "Cucurbitaceae", "Apiaceae"],
    correct: 1,
    explanation: "Datura, tomato (Lycopersicon), brinjal (Solanum), chilli (Capsicum), and potato all belong to family Solanaceae (nightshade family). Many Solanaceae members contain alkaloids."
  },
  {
    id: "gt9_082", qNo: 82, subject: "horticulture",
    question: "The 'Pummelo' (Citrus grandis) is the largest citrus fruit and is important as a parent because:",
    options: ["It is disease resistant", "It produces seedless fruits", "Grapefruit is a natural hybrid of pummelo and sweet orange", "It is used as a rootstock only"],
    correct: 2,
    explanation: "Grapefruit (Citrus paradisi) is a natural hybrid of pummelo (C. grandis) × sweet orange (C. sinensis) that arose in Barbados in the 18th century. Pummelo is one of the three true citrus progenitors."
  },
  {
    id: "gt9_083", qNo: 83, subject: "horticulture",
    question: "The 'Epsom salt' used in horticulture as a foliar spray is chemically:",
    options: ["Magnesium sulphate", "Calcium nitrate", "Ferrous sulphate", "Potassium chloride"],
    correct: 0,
    explanation: "Epsom salt is magnesium sulphate heptahydrate (MgSO₄·7H₂O). It is used as a foliar spray to correct Mg deficiency in crops, and is particularly effective in acid soils and crops like tomato, roses."
  },
  {
    id: "gt9_084", qNo: 84, subject: "horticulture",
    question: "The 'Polyembryony' in mango means:",
    options: ["Mango flowers twice a year", "A single seed contains more than one embryo", "Mango produces multiple fruits per inflorescence", "Fruits have multiple seeds"],
    correct: 1,
    explanation: "Polyembryony in mango (and citrus) means a single seed contains multiple embryos — one sexual embryo plus one or more nucellar (asexual/clonal) embryos. Nucellar seedlings are true-to-type."
  },
  {
    id: "gt9_085", qNo: 85, subject: "horticulture",
    question: "The 'GI Tag' for 'Darjeeling Tea' was the first GI tag issued in India in:",
    options: ["2007", "2010", "2004", "1999"],
    correct: 2,
    explanation: "Darjeeling Tea received India's first Geographical Indication (GI) tag in 2004 under the Geographical Indications of Goods (Registration and Protection) Act 1999."
  },
  {
    id: "gt9_086", qNo: 86, subject: "horticulture",
    question: "The critical nutrient associated with 'Bitter Pit' disorder in apple is:",
    options: ["Potassium", "Nitrogen", "Calcium", "Magnesium"],
    correct: 2,
    explanation: "Bitter pit in apple is caused by calcium deficiency in fruit — small brown spots develop in the cortex near the calyx end. High K/Ca or N/Ca ratios or water stress aggravate calcium deficiency."
  },
  {
    id: "gt9_087", qNo: 87, subject: "horticulture",
    question: "The 'Ber' (Indian jujube, Ziziphus mauritiana) is important as a drought-tolerant fruit crop because:",
    options: ["It requires 2,500 mm annual rainfall", "It grows only in coastal areas", "It requires high humidity", "It is adapted to arid/semi"],
    correct: 3,
    explanation: "Ber (Ziziphus mauritiana) is among the most drought-tolerant fruit crops, adapted to arid and semi-arid regions with 200–250 mm annual rainfall. It grows in Rajasthan, Gujarat, and other dry regions."
  },
  {
    id: "gt9_088", qNo: 88, subject: "horticulture",
    question: "The 'Modified Atmosphere Packaging (MAP)' for vegetables typically uses:",
    options: ["100% N₂ only", "100% CO₂", "Elevated CO₂ (5", "Ozone gas"],
    correct: 2,
    explanation: "MAP uses elevated CO₂ (5–20%) and reduced O₂ (2–5%) passively or actively to slow respiration, ethylene production, and microbial growth, extending shelf life of fresh produce."
  },
  {
    id: "gt9_089", qNo: 89, subject: "horticulture",
    question: "The 'Pinching' of flowers in chrysanthemum cultivation is done to:",
    options: ["Improve root development", "Prevent diseases", "Reduce plant height", "Promote lateral shoot growth for increased flower production (bushy growth)"],
    correct: 3,
    explanation: "Pinching in chrysanthemum removes the apical bud, breaking apical dominance and encouraging multiple lateral branches, each capable of bearing flowers — resulting in more blooms per plant."
  },
  {
    id: "gt9_090", qNo: 90, subject: "agro-meteorology",
    question: "India Meteorological Department (IMD) was established in:",
    options: ["1920", "1905", "1875", "1947"],
    correct: 2,
    explanation: "IMD was established in 1875, making it one of the oldest meteorological departments in Asia. Headquartered in New Delhi, it issues weather forecasts, cyclone warnings, crop weather advisories and seasonal monsoon predictions critical for agricultural planning."
  },

  // EXTENSION (6)
  {
    id: "gt9_091", qNo: 91, subject: "extension",
    question: "The 'MGNREGS (Mahatma Gandhi National Rural Employment Guarantee Scheme)' is relevant to agriculture because:",
    options: ["It provides crop insurance", "It subsidises seeds and fertilisers", "It provides crop loans", "It funds watershed development, land levelling, and farm pond construction as permissible activities"],
    correct: 3,
    explanation: "MGNREGS provides 100 days of guaranteed wage employment per rural household. Permissible works include watershed development, irrigation canals, farm ponds, land levelling — directly benefiting agriculture."
  },
  {
    id: "gt9_092", qNo: 92, subject: "extension",
    question: "The 'Aroha Model' in agricultural extension is known for:",
    options: ["Farmer", "Technology transfer only", "Market linkage creation", "Input subsidy distribution"],
    correct: 0,
    explanation: "The Aroha model emphasises farmer-led innovation, farmer-to-farmer learning, and community-based participatory approaches — farmers as innovators rather than passive technology recipients."
  },
  {
    id: "gt9_093", qNo: 93, subject: "extension",
    question: "Under the 'Sub-Mission on Agricultural Mechanisation (SMAM)', Custom Hiring Centres (CHCs) are established to:",
    options: ["Repair and maintain government tractors", "Sell agricultural machinery at subsidised rates", "Provide machinery hiring services to small and marginal farmers who cannot afford to buy", "Train farmers in machinery operation"],
    correct: 2,
    explanation: "CHCs established under SMAM provide hiring services for expensive farm machinery (combine harvesters, tractors, transplanting equipment) to small and marginal farmers on custom-hire basis."
  },
  {
    id: "gt9_094", qNo: 94, subject: "extension",
    question: "The 'PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)' scheme provides:",
    options: ["₹6,000/year direct income support in three equal instalments to all farmer families", "₹2,000/year to tenant farmers", "₹10,000/year to marginal farmers", "₹5,000/year to small farmers"],
    correct: 0,
    explanation: "PM-KISAN (launched February 2019) provides ₹6,000/year (in three ₹2,000 instalments) as direct income support to all eligible farmer families across India, regardless of land size (after 2019 amendment)."
  },
  {
    id: "gt9_095", qNo: 95, subject: "extension",
    question: "The 'Competency-Based Training' in extension refers to training that focuses on:",
    options: ["Only on-farm demonstrations", "Theoretical knowledge only", "Development of specific skills, knowledge, and attitudes needed for effective job performance", "Duration-based training programmes"],
    correct: 2,
    explanation: "Competency-Based Training (CBT) focuses on developing measurable, observable competencies (skills + knowledge + attitudes) required for effective performance of specific job tasks."
  },
  // ── GENERAL AGRICULTURE (5) ──
  { id:"gt9_096", qNo:96, subject:"general-agriculture", question:"The largest rice producing state in India is:", options: ["Punjab", "Uttar Pradesh", "West Bengal", "Andhra Pradesh"], correct: 2, explanation:"West Bengal is the largest rice producing state in India, contributing approximately 15% of total rice production. Rice is the principal food crop of West Bengal, cultivated in three seasons (Aus, Aman, Boro)." },
  { id:"gt9_097", qNo:97, subject:"general-agriculture", question:"IPM (Integrated Pest Management) in India is promoted by:", options: ["DPPQS", "ICAR", "NABARD", "State Agriculture Departments only"], correct: 0, explanation:"The Directorate of Plant Protection, Quarantine and Storage (DPPQS) under the Ministry of Agriculture is the nodal agency promoting IPM in India through Central IPM Centres and training programmes." },
  { id:"gt9_098", qNo:98, subject:"general-agriculture", question:"Pradhan Mantri Krishi Sinchai Yojana (PMKSY) aims at:", options: ["Providing free electricity for irrigation", "Providing water to all rural households for drinking", "Doubling the area under micro", "Constructing large dams and reservoirs"], correct: 2, explanation:"PMKSY (launched 2015) converges irrigation investments to achieve water use efficiency, expand cultivable area under assured irrigation and introduce sustainable water conservation practices under the motto 'Har Khet Ko Pani, More Crop Per Drop'." },
  { id:"gt9_099", qNo:99, subject:"general-agriculture", question:"India is the world's largest exporter of:", options: ["Soybeans", "Wheat", "Rice", "Maize"], correct: 2, explanation:"India is the world's largest exporter of rice (both basmati and non-basmati), accounting for over 40% of global rice trade. Major importing countries include Bangladesh, Benin, Nepal, Ivory Coast and UAE." },
  { id:"gt9_100", qNo:100, subject:"general-agriculture", question:"'Agri-Stack' is India's initiative to build:", options: ["A national cold chain network", "A stack of agricultural warehouses", "Satellite-based crop monitoring system", "Digital public infrastructure (DPI) for agriculture including farmers' database, land records and crop sowing registry"], correct: 3, explanation:"Agri-Stack is India's federated digital infrastructure for agriculture — a stack of databases including Farmers' Registry, Geo-referenced Village Maps, and Crop Sown Registry — enabling targeted service delivery and reducing farmer information asymmetry." },
];
