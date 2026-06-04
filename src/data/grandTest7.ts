import { GrandTestQuestion } from "./grandTestMeta";

export const GRAND_TEST_7: GrandTestQuestion[] = [
  // AGRONOMY (6)
  {
    id: "gt7_001", qNo: 1, subject: "agronomy",
    question: "The 'Harvest Index' is defined as the ratio of:",
    options: ["Root biomass to shoot biomass", "Total biomass to grain yield", "Leaf area to total plant weight", "Grain yield to total above-ground biological yield"],
    correct: 3,
    explanation: "Harvest Index (HI) = Economic yield (grain) / Total above-ground biological yield. Modern high-yielding varieties have HI of 0.45–0.55 vs 0.25–0.35 for traditional varieties."
  },
  {
    id: "gt7_002", qNo: 2, subject: "agronomy",
    question: "The ideal C:N ratio for composting is:",
    options: ["25:1 to 30:1", "50:1 to 60:1", "100:1 to 120:1", "5:1 to 10:1"],
    correct: 0,
    explanation: "The ideal C:N ratio for rapid composting is 25:1 to 30:1. Too low C:N (nitrogen-rich) causes ammonia loss; too high C:N (carbon-rich) slows decomposition."
  },
  {
    id: "gt7_003", qNo: 3, subject: "agronomy",
    question: "The 'Penman equation' for calculating potential evapotranspiration (PET) requires the following data EXCEPT:",
    options: ["Soil type", "Vapour pressure deficit", "Net radiation", "Wind speed"],
    correct: 0,
    explanation: "Penman's original equation uses meteorological data: net radiation, wind speed, air temperature, and vapour pressure deficit. It does not require soil type — that is a soil-specific parameter."
  },
  {
    id: "gt7_004", qNo: 4, subject: "agronomy",
    question: "Allelopathy in crops refers to:",
    options: ["Cross-pollination between varieties", "Alternate cropping of two crops", "Release of chemicals by plants that inhibit or stimulate other plants", "Mixed cropping system"],
    correct: 2,
    explanation: "Allelopathy is the direct or indirect effect of one plant on another through release of chemical compounds (allelochemicals) into the environment, which can inhibit or stimulate growth. Sorghum, sunflower, and eucalyptus are known allelopathic crops."
  },
  {
    id: "gt7_005", qNo: 5, subject: "agronomy",
    question: "In 'System of Rice Intensification' (SRI), seedlings are transplanted at which age?",
    options: ["35–40 days", "8–12 days", "25–30 days", "5–7 days"],
    correct: 1,
    explanation: "SRI recommends transplanting very young seedlings (8–12 days old at 2-leaf stage) singly, in a square pattern (25 × 25 cm) with intermittent irrigation to enhance tillering."
  },
  {
    id: "gt7_006", qNo: 6, subject: "agronomy",
    question: "Which of the following is a 'C4 plant'?",
    options: ["Rice (Oryza sativa)", "Wheat (Triticum aestivum)", "Maize (Zea mays)", "Potato (Solanum tuberosum)"],
    correct: 2,
    explanation: "Maize (Zea mays) is a C4 plant using the Hatch-Slack pathway. C4 plants have high photosynthetic efficiency, especially in hot, sunny environments. Rice, wheat, and potato are C3 plants."
  },

  // KHARIF CROPS (7)
  {
    id: "gt7_007", qNo: 7, subject: "kharif-crops",
    question: "The crop rotation 'Rice–Wheat' leads to which long-term soil health problem?",
    options: ["Nitrogen accumulation", "Phosphorus build-up", "Declining soil organic matter and soil compaction (hard pan)", "Waterlogging improvement"],
    correct: 2,
    explanation: "Continuous rice–wheat rotation causes declining soil organic matter, puddling-induced compaction (plough pan), micronutrient depletion (Zn, Fe), and groundwater depletion."
  },
  {
    id: "gt7_008", qNo: 8, subject: "kharif-crops",
    question: "The pigeonpea (arhar/tuar) variety 'ICPL 87119 (Asha)' is known for resistance to:",
    options: ["Sterility mosaic disease and Fusarium wilt", "Phytophthora blight", "Fusarium wilt only", "Pod borers only"],
    correct: 0,
    explanation: "ICPL 87119 (Asha) is a long-duration pigeonpea variety with dual resistance to Fusarium wilt and sterility mosaic disease, two major constraints of pigeonpea production."
  },
  {
    id: "gt7_009", qNo: 9, subject: "kharif-crops",
    question: "The 'Bt cotton' transgenic variety in India expresses the insecticidal protein from:",
    options: ["Trichoderma viride", "Bacillus subtilis", "Pseudomonas fluorescens", "Bacillus thuringiensis var. kurstaki (cry1Ac gene)"],
    correct: 3,
    explanation: "Bt cotton in India (introduced in 2002) contains cry1Ac gene from Bacillus thuringiensis var. kurstaki, producing Cry1Ac protein effective against bollworms (Lepidoptera)."
  },
  {
    id: "gt7_010", qNo: 10, subject: "kharif-crops",
    question: "The 'Sesame' (til) crop requires which type of climate?",
    options: ["Hot, dry to semi-arid", "Sub-alpine", "Cool and humid", "Tropical humid"],
    correct: 0,
    explanation: "Sesame (Sesamum indicum) is a warm-season crop requiring hot, dry to semi-arid conditions. Optimum temperature is 25–35°C. It is highly sensitive to waterlogging."
  },
  {
    id: "gt7_011", qNo: 11, subject: "kharif-crops",
    question: "The leaf area index (LAI) at maximum for cotton under optimal conditions is approximately:",
    options: ["7–8", "3–4", "1–2", "5–6"],
    correct: 1,
    explanation: "Cotton achieves a maximum LAI of approximately 3–4 under optimal growing conditions, after which lower leaves are shaded and start to senesce."
  },
  {
    id: "gt7_012", qNo: 12, subject: "kharif-crops",
    question: "Teff (Eragrostis tef) is an important food crop in:",
    options: ["Ethiopia", "Indonesia", "India", "Mexico"],
    correct: 0,
    explanation: "Teff (Eragrostis tef) is the staple crop of Ethiopia and Eritrea, used to make injera flatbread. It is a minor crop in India but is gaining attention as a nutritious grain."
  },
  {
    id: "gt7_013", qNo: 13, subject: "kharif-crops",
    question: "The suitable soil pH for groundnut cultivation is:",
    options: ["4.5–5.5", "5.5–6.5", "6.5–7.5", "7.5–8.5"],
    correct: 1,
    explanation: "Groundnut grows best in slightly acidic soils with pH 5.5–6.5. Calcium is essential for pod development, and calcareous soils can be grown with proper management."
  },

  // RABI CROPS (5)
  {
    id: "gt7_014", qNo: 14, subject: "rabi-crops",
    question: "The 'Rabi' crop calendar typically begins in:",
    options: ["October–November", "June–July", "March–April", "December–January"],
    correct: 0,
    explanation: "Rabi crops are sown in October–November after the kharif harvest and are harvested in March–April. They are winter season crops grown using stored or canal irrigation."
  },
  {
    id: "gt7_015", qNo: 15, subject: "rabi-crops",
    question: "Which variety of wheat was responsible for the 'Green Revolution' breakthrough in India?",
    options: ["HD 2329", "C 306", "NP 809", "Sonora 64 / Lerma Rojo (Mexican dwarf wheat)"],
    correct: 3,
    explanation: "Mexican semi-dwarf wheat varieties (Sonora 64 and Lerma Rojo) introduced by Dr. M.S. Swaminathan from Norman Borlaug's programme sparked the Green Revolution in India (1965–66)."
  },
  {
    id: "gt7_016", qNo: 16, subject: "rabi-crops",
    question: "The growth regulator 'Chlormequat chloride (CCC)' is applied to wheat to:",
    options: ["Delay flowering", "Increase tillering", "Shorten the internodes and prevent lodging", "Promote rooting"],
    correct: 2,
    explanation: "Chlormequat chloride (CCC) is a gibberellin synthesis inhibitor that shortens internodes in wheat, reducing lodging risk and allowing higher fertiliser application."
  },
  {
    id: "gt7_017", qNo: 17, subject: "rabi-crops",
    question: "Gram (chickpea) is sensitive to water-logging during which stage?",
    options: ["Germination", "Flowering and pod fill", "Maturity", "Vegetative"],
    correct: 1,
    explanation: "Chickpea is particularly sensitive to water-logging during the flowering and pod-fill stage. Excess soil moisture at this stage causes root rot, flower drop, and severe yield loss."
  },
  {
    id: "gt7_018", qNo: 18, subject: "rabi-crops",
    question: "The variety 'Giza 67' is associated with which rabi crop?",
    options: ["Wheat", "Barley", "Linseed", "Pea"],
    correct: 1,
    explanation: "Giza 67 is a high-yielding two-rowed barley variety. Barley is an important rabi crop in Rajasthan, Uttar Pradesh, and Madhya Pradesh in India."
  },

  // GENETICS (7)
  {
    id: "gt7_019", qNo: 19, subject: "genetics",
    question: "The 'two-hit hypothesis' in cancer genetics was proposed by:",
    options: ["Francis Crick", "Alfred Knudson", "James Watson", "Barbara McClintock"],
    correct: 1,
    explanation: "Alfred Knudson proposed the two-hit hypothesis (1971) to explain retinoblastoma: both alleles of a tumour suppressor gene (RB1) must be inactivated for cancer to develop."
  },
  {
    id: "gt7_020", qNo: 20, subject: "genetics",
    question: "In Mendel's first law, a hybrid (heterozygous) plant for one trait on selfing produces a phenotypic ratio of:",
    options: ["3:1", "1:1", "1:2:1", "9:3:3:1"],
    correct: 0,
    explanation: "Mendel's Law of Segregation: an F1 hybrid (Aa) when selfed produces F2 progeny in 3:1 phenotypic ratio (dominant:recessive) and 1:2:1 genotypic ratio (AA:Aa:aa)."
  },
  {
    id: "gt7_021", qNo: 21, subject: "genetics",
    question: "The process by which a bacteriophage carries host bacterial genes from one bacterium to another is:",
    options: ["Transduction", "Transformation", "Conjugation", "Transposition"],
    correct: 0,
    explanation: "Transduction is the bacteriophage-mediated transfer of bacterial genes from donor to recipient bacterium. Generalised transduction carries any bacterial gene; specialised transduction carries specific genes."
  },
  {
    id: "gt7_022", qNo: 22, subject: "genetics",
    question: "Heterosis (hybrid vigour) is best explained by which genetic theory?",
    options: ["Dominance theory / Overdominance theory", "Mutation theory", "Polyploidy theory", "Neutral theory"],
    correct: 0,
    explanation: "Two main theories explain heterosis: Dominance theory (complementation of recessive deleterious alleles from both parents) and Overdominance theory (heterozygote superiority over both homozygotes)."
  },
  {
    id: "gt7_023", qNo: 23, subject: "genetics",
    question: "RFLP (Restriction Fragment Length Polymorphism) is based on:",
    options: ["Protein electrophoresis patterns", "Differences in DNA amplification rates", "Variation in fragment sizes after restriction enzyme digestion", "Chromosome morphology differences"],
    correct: 2,
    explanation: "RFLP detects DNA polymorphisms through differences in fragment sizes produced when genomic DNA is digested with restriction enzymes and detected by Southern blotting."
  },
  {
    id: "gt7_024", qNo: 24, subject: "genetics",
    question: "Polyploidy induced by colchicine works by:",
    options: ["Stimulating cell division rate", "Breaking chromosome arms", "Inducing DNA mutations", "Inhibiting spindle fibre formation during cell division"],
    correct: 3,
    explanation: "Colchicine inhibits tubulin polymerisation, preventing spindle fibre formation during cell division. Chromosomes duplicate but fail to separate, resulting in doubled chromosome numbers (polyploidy)."
  },
  {
    id: "gt7_025", qNo: 25, subject: "genetics",
    question: "In quantitative genetics, broad sense heritability (H²) is defined as:",
    options: ["VA / VG", "VA / VP", "VP / VG", "VG / VP"],
    correct: 3,
    explanation: "Broad sense heritability H² = VG / VP, where VG = total genetic variance (additive + dominance + epistatic) and VP = total phenotypic variance. Narrow sense heritability h² = VA / VP."
  },

  // SEED TECHNOLOGY (4)
  {
    id: "gt7_026", qNo: 26, subject: "seed-technology",
    question: "The 'seed replacement rate' (SRR) in India for wheat is targeted at:",
    options: ["25%", "33%", "100%", "50%"],
    correct: 1,
    explanation: "The target seed replacement rate (SRR) for wheat in India is 33% — meaning one-third of sown area should use certified/quality seed each year to maintain genetic purity."
  },
  {
    id: "gt7_027", qNo: 27, subject: "seed-technology",
    question: "The term 'True to Type' in seed certification means:",
    options: ["Seeds are untreated", "Seeds conform to the morphological and agronomic description of the variety", "Seeds are 100% germinating", "Seeds are certified organic"],
    correct: 1,
    explanation: "'True to type' (trueness to variety) means the seed lot conforms to the morphological, physiological, and agronomic characteristics described for that specific variety/cultivar."
  },
  {
    id: "gt7_028", qNo: 28, subject: "seed-technology",
    question: "The ideal moisture content for long-term storage of cereal seeds is:",
    options: ["> 14%", "12–14%", "8–10%", "< 8%"],
    correct: 3,
    explanation: "For long-term gene bank storage, cereal seed moisture should be below 8% (ideally 5–7%). Low moisture reduces respiration, insect activity, and pathogen growth, extending seed viability."
  },
  {
    id: "gt7_029", qNo: 29, subject: "seed-technology",
    question: "The 'grow-out test' in seed technology is conducted to determine:",
    options: ["Physical purity", "Germination percentage", "Genetic purity of the seed lot", "Seed moisture content"],
    correct: 2,
    explanation: "Grow-out test (field/greenhouse test) evaluates genetic purity by growing seed samples and comparing plant morphology to the variety standard. It detects off-types and mixtures."
  },

  // SOIL SCIENCE (5)
  {
    id: "gt7_030", qNo: 30, subject: "soil-science",
    question: "The 'pF value' of soil water at field capacity is approximately:",
    options: ["pF 0.5", "pF 1.5", "pF 4.2", "pF 2.5"],
    correct: 3,
    explanation: "Field capacity corresponds to pF 2.5 (−0.33 bar / −33 kPa). Permanent wilting point is pF 4.2 (−15 bar / −1500 kPa). Available water = difference between these two values."
  },
  {
    id: "gt7_031", qNo: 31, subject: "soil-science",
    question: "The 'catena' in soil science refers to:",
    options: ["A sequence of soils along a topographic slope with related genesis", "A soil profile", "A soil horizon", "A type of clay mineral"],
    correct: 0,
    explanation: "A catena is a sequence of soils derived from similar parent material but varying in morphology due to differences in position and drainage along a hillslope (toposequence)."
  },
  {
    id: "gt7_032", qNo: 32, subject: "soil-science",
    question: "Soil erosion by water involves which sequence of processes?",
    options: ["Transport → Detachment → Deposition", "Deposition → Transport → Detachment", "Detachment → Transport → Deposition", "Detachment → Deposition → Transport"],
    correct: 2,
    explanation: "Water erosion involves: (1) Detachment of soil particles by raindrop impact and flowing water, (2) Transport of detached particles by water flow, and (3) Deposition when flow energy decreases."
  },
  {
    id: "gt7_033", qNo: 33, subject: "soil-science",
    question: "The 'Universal Soil Loss Equation (USLE)' was developed by:",
    options: ["Wischmeier and Smith (1965)", "Renard et al. (1997)", "Zingg (1940)", "Musgrave (1947)"],
    correct: 0,
    explanation: "USLE was developed by Wischmeier and Smith (1965, revised 1978). It predicts annual soil loss as: A = R×K×L×S×C×P, where each factor represents rainfall, soil, slope, cover, and practice."
  },
  {
    id: "gt7_034", qNo: 34, subject: "soil-science",
    question: "The term 'saline-sodic soils' refers to soils with:",
    options: ["EC > 4 dS/m and ESP < 15", "EC > 4 dS/m and ESP > 15", "EC < 4 dS/m and ESP > 15", "EC < 4 dS/m and ESP < 15"],
    correct: 1,
    explanation: "Saline-sodic soils: EC > 4 dS/m (saline) AND ESP > 15% (sodic). When saline-sodic soils are reclaimed (leaching), the sodium can disperse the clay, causing structural problems."
  },

  // SOIL FERTILITY (5)
  {
    id: "gt7_035", qNo: 35, subject: "soil-fertility",
    question: "Boron deficiency in cauliflower causes the disorder known as:",
    options: ["Black leg", "Tip burn", "Hollow stem / Brown curd", "Bottom rot"],
    correct: 2,
    explanation: "Boron deficiency in cauliflower causes 'hollow stem' and 'brown curd' (browning of curd tissue). Boron is essential for cell wall development, pollen germination, and Ca uptake."
  },
  {
    id: "gt7_036", qNo: 36, subject: "soil-fertility",
    question: "The fertiliser 'Urea' has what nitrogen content?",
    options: ["26% N", "46% N", "16% N", "33% N"],
    correct: 1,
    explanation: "Urea [CO(NH₂)₂] contains 46% nitrogen — the highest N content of all solid nitrogenous fertilisers. It is the most widely used nitrogen fertiliser in India."
  },
  {
    id: "gt7_037", qNo: 37, subject: "soil-fertility",
    question: "The 'soil test crop response' approach to fertiliser recommendation is used to determine:",
    options: ["Seed rate for the crop", "Fertiliser dose based on soil nutrient status and expected yield", "Optimal tillage depth", "Irrigation schedule"],
    correct: 1,
    explanation: "Soil Test Crop Response (STCR) approach correlates soil test values with crop response to fertilisers, allowing precision recommendations targeted to specific yield goals."
  },
  {
    id: "gt7_038", qNo: 38, subject: "soil-fertility",
    question: "Mycorrhizal fungi enhance plant nutrition primarily by improving uptake of:",
    options: ["Phosphorus and micronutrients (Zn, Cu)", "Nitrogen and potassium", "Calcium and magnesium", "Sulphur and chlorine"],
    correct: 0,
    explanation: "Arbuscular mycorrhizal fungi (AMF) greatly enhance phosphorus uptake (by extending the root-soil interface) and also improve uptake of Zn, Cu, and other immobile nutrients."
  },
  {
    id: "gt7_039", qNo: 39, subject: "soil-fertility",
    question: "The term 'luxury consumption' of nutrients by plants refers to:",
    options: ["Root-mediated nutrient immobilisation", "Deficiency-induced uptake", "Uptake of nutrients beyond the plant's metabolic requirement", "Nutrient antagonism"],
    correct: 2,
    explanation: "Luxury consumption is the absorption of nutrient quantities beyond what is needed for optimal growth, with excess stored in vacuoles. It is common for K, N, and some micronutrients."
  },

  // ENTOMOLOGY (5)
  {
    id: "gt7_040", qNo: 40, subject: "entomology",
    question: "The 'tympanic organ' in locusts is located on the:",
    options: ["Antennae", "Head", "First abdominal segment", "Thorax"],
    correct: 2,
    explanation: "The tympanic (auditory) organ of locusts (grasshoppers) is located on the first abdominal segment. It detects sound vibrations, important for mating and alarm responses."
  },
  {
    id: "gt7_041", qNo: 41, subject: "entomology",
    question: "The insecticide DDT was discovered by:",
    options: ["Paul Müller (1939)", "Justus von Liebig (1840)", "Fritz Haber (1918)", "Carl Bosch (1913)"],
    correct: 0,
    explanation: "Paul Müller discovered the insecticidal properties of DDT in 1939 and was awarded the Nobel Prize in 1948. DDT was widely used in malaria control and agriculture before being banned."
  },
  {
    id: "gt7_042", qNo: 42, subject: "entomology",
    question: "The beneficial insect 'Chrysoperla carnea' is a:",
    options: ["Predator of soft-bodied insects (aphids, mites, eggs)", "Biological weed control agent", "Parasitoid of aphids", "Pollinator"],
    correct: 0,
    explanation: "Chrysoperla carnea (common green lacewing) is a predatory insect. Both larvae (aphid lions) and adults prey on aphids, thrips, mites, whiteflies, and small caterpillars."
  },
  {
    id: "gt7_043", qNo: 43, subject: "entomology",
    question: "The organophosphate insecticide 'Monocrotophos' primarily acts as:",
    options: ["Contact and systemic insecticide", "Stomach poison only", "Fumigant only", "Repellent"],
    correct: 0,
    explanation: "Monocrotophos is an organophosphate insecticide that acts as both a contact and systemic poison. It inhibits acetylcholinesterase, causing nerve impulse accumulation."
  },
  {
    id: "gt7_044", qNo: 44, subject: "entomology",
    question: "The pheromone trap used in IPM is used for:",
    options: ["Mass trapping only", "Attracting beneficial insects", "Only repelling pests", "Monitoring pest population, mass trapping, and mating disruption"],
    correct: 3,
    explanation: "Sex pheromone traps are used in IPM for: (1) monitoring/forecasting pest populations, (2) mass trapping to reduce populations, and (3) mating disruption to reduce reproduction."
  },

  // CROP PESTS (5)
  {
    id: "gt7_045", qNo: 45, subject: "crop-pests",
    question: "The 'Whitefly' (Bemisia tabaci) is a serious pest in India because it:",
    options: ["Transmits begomoviruses (e.g., Tomato Yellow Leaf Curl Virus, Cotton Leaf Curl Virus)", "Causes direct feeding damage only", "Produces honeydew that causes leaf burn", "Causes galls on leaves"],
    correct: 0,
    explanation: "Bemisia tabaci (silverleaf whitefly) is a vector of begomoviruses — including Cotton Leaf Curl Virus (CLCuV), Tomato Yellow Leaf Curl Virus (TYLCV), and many others. This makes it far more damaging than direct feeding."
  },
  {
    id: "gt7_046", qNo: 46, subject: "crop-pests",
    question: "The 'American bollworm' (Helicoverpa armigera) is notorious for developing resistance to insecticides because:",
    options: ["It has short life cycle with multiple generations", "It is polyphagous, rapidly metabolises insecticides through cytochrome P450 enzymes", "It has hard cuticle", "It lives underground"],
    correct: 1,
    explanation: "H. armigera develops rapid insecticide resistance due to its polyphagy (exposure to diverse chemicals), high reproductive rate, and potent metabolic detoxification via cytochrome P450 enzymes."
  },
  {
    id: "gt7_047", qNo: 47, subject: "crop-pests",
    question: "The 'Integrated Pest Management' (IPM) concept was introduced by:",
    options: ["Norman Borlaug (1965)", "Rachel Carson (1962)", "Paul DeBach (1974)", "V.M. Stern et al. (1959)"],
    correct: 3,
    explanation: "IPM was introduced by V.M. Stern, R.F. Smith, R. van den Bosch, and K.S. Hagen in 1959 in California for alfalfa aphid management, integrating biological, cultural, and chemical control."
  },
  {
    id: "gt7_048", qNo: 48, subject: "crop-pests",
    question: "Yellow sticky traps are most effective for monitoring:",
    options: ["Soil insects", "Stem borers", "Caterpillars and grubs", "Aphids, whiteflies, and thrips"],
    correct: 3,
    explanation: "Yellow sticky traps attract and capture small flying insects that are attracted to yellow colour — particularly aphids (alate forms), whiteflies, leaf miners, and some thrips."
  },
  {
    id: "gt7_049", qNo: 49, subject: "crop-pests",
    question: "The 'Rodenticide' zinc phosphide acts as:",
    options: ["An anticoagulant", "A nervous system disruptor", "A repellent", "A phosphine-releasing stomach poison"],
    correct: 3,
    explanation: "Zinc phosphide reacts with stomach acid (HCl) to release highly toxic phosphine gas (PH₃), causing rapid death. It is used as a grain bait against rats and mice."
  },

  // FARM MACHINERY (6)
  {
    id: "gt7_050", qNo: 50, subject: "farm-machinery",
    question: "The 'winnowing' operation in grain processing separates grain from chaff using:",
    options: ["Sieves", "Magnetic separation", "Density differences in water", "Air current (wind/fan)"],
    correct: 3,
    explanation: "Winnowing uses air currents to separate grain (heavier) from chaff, dust, and light materials (lighter). Traditional winnowing uses natural wind; mechanical cleaners use fans."
  },
  {
    id: "gt7_051", qNo: 51, subject: "farm-machinery",
    question: "The 'bucket elevator' is used in grain handling for:",
    options: ["Horizontal conveying", "Moisture reduction", "Vertical lifting of grain", "Cleaning and sorting"],
    correct: 2,
    explanation: "Bucket elevators use buckets attached to a belt or chain to vertically lift bulk grains from ground level to storage bins or processing equipment."
  },
  {
    id: "gt7_052", qNo: 52, subject: "farm-machinery",
    question: "The 'active layer' depth in deep tillage using a sub-soiler is typically:",
    options: ["25–35 cm", "45–60 cm", "15–20 cm", "60–100 cm"],
    correct: 1,
    explanation: "Sub-soilers penetrate to 45–60 cm depth (sometimes 90 cm) to break compacted layers (hardpan/fragipan) that restrict root growth and water infiltration."
  },
  {
    id: "gt7_053", qNo: 53, subject: "farm-machinery",
    question: "The efficiency of solar dryers compared to open sun drying is higher because:",
    options: ["They use electrical power", "They trap solar energy in a greenhouse effect, increasing temperature and reducing humidity", "They recirculate air continuously", "They use microwave technology"],
    correct: 1,
    explanation: "Solar dryers use a transparent cover (glass/plastic) to create a greenhouse effect — trapping solar energy and increasing air temperature inside. Lower RH and higher temperature speed up drying."
  },
  {
    id: "gt7_054", qNo: 54, subject: "farm-machinery",
    question: "The 'field efficiency' of an agricultural machine is the ratio of:",
    options: ["Actual area covered to total area of field", "Engine power to wheel power", "Working width to transport width", "Theoretical performance to actual field performance (×100)"],
    correct: 3,
    explanation: "Field efficiency (%) = (Actual field performance / Theoretical performance) × 100. It accounts for time lost to turning, refilling, adjustments, and other non-working activities."
  },
  {
    id: "gt7_055", qNo: 55, subject: "farm-machinery",
    question: "For a combine harvester, the 'grain loss' is measured at which points?",
    options: ["At cutter bar, cylinder, and sieves/separation (total field loss)", "Only at the grain tank", "Only at the threshing cylinder", "Only at the rear of the machine"],
    correct: 0,
    explanation: "Total combine harvester grain losses are measured at: (1) Cutter bar (header) loss, (2) Threshing cylinder loss (unthreshed grain), and (3) Separation/cleaning sieve loss."
  },

  // PLANT PATHOLOGY (9)
  {
    id: "gt7_056", qNo: 56, subject: "plant-pathology",
    question: "The causal organism of 'Wilt of pigeonpea' is:",
    options: ["Sclerotium rolfsii", "Fusarium udum", "Phytophthora drechsleri f. sp. cajani", "Rhizoctonia solani"],
    correct: 1,
    explanation: "Fusarium udum (now Fusarium oxysporum f. sp. cajani) causes Fusarium wilt of pigeonpea (arhar). It is the most devastating soil-borne disease of pigeonpea in India."
  },
  {
    id: "gt7_057", qNo: 57, subject: "plant-pathology",
    question: "The perfect (sexual) stage of Colletotrichum gloeosporioides (anthracnose pathogen) is:",
    options: ["Glomerella cingulata", "Botryosphaeria obtusa", "Guignardia bidwellii", "Diaporthe citri"],
    correct: 0,
    explanation: "The teleomorph (sexual stage) of Colletotrichum gloeosporioides is Glomerella cingulata. The asexual stage produces acervuli with curved conidia."
  },
  {
    id: "gt7_058", qNo: 58, subject: "plant-pathology",
    question: "The 'seed piece' treatment for preventing sugarcane ratoon stunting disease involves:",
    options: ["Gamma irradiation", "Hot water treatment at 50°C for 2 hours or 54°C for 30 minutes", "Fungicide soaking", "Cold stratification"],
    correct: 1,
    explanation: "Ratoon stunting disease (Leifsonia xyli subsp. xyli, a bacterium) is controlled by hot water treatment of seed setts at 50°C for 2 hours or 54°C for 30 minutes, killing the pathogen within cane nodes."
  },
  {
    id: "gt7_059", qNo: 59, subject: "plant-pathology",
    question: "The type of resistance where the host totally prevents pathogen establishment is called:",
    options: ["Tolerance", "Vertical resistance", "Horizontal resistance", "Immunity"],
    correct: 3,
    explanation: "Immunity is complete resistance where the host is not attacked at all. Vertical resistance (race-specific) reduces severity with some pathogens. Horizontal (field) resistance acts against all races but is quantitative."
  },
  {
    id: "gt7_060", qNo: 60, subject: "plant-pathology",
    question: "Brown spot of rice (Helminthosporium disease) is caused by:",
    options: ["Cercospora oryzae", "Curvularia lunata", "Alternaria padwickii", "Helminthosporium oryzae (Bipolaris oryzae)"],
    correct: 3,
    explanation: "Brown spot of rice is caused by Helminthosporium oryzae (teleomorph: Cochliobolus miyabeanus, synonym Bipolaris oryzae). It was associated with the Bengal famine of 1943."
  },
  {
    id: "gt7_061", qNo: 61, subject: "plant-pathology",
    question: "Foot and stem rot of rice caused by Sclerotium oryzae is characterised by:",
    options: ["Black sclerotia in decayed tissue and stem rot", "Orange pustules on leaves", "White downy growth on panicle", "Yellow streaks on leaves"],
    correct: 0,
    explanation: "Sclerotium oryzae causes stem rot of rice. Characteristic features are small black sclerotia (resting bodies) embedded in the decayed stem tissue below the water line."
  },
  {
    id: "gt7_062", qNo: 62, subject: "plant-pathology",
    question: "The biological control agent 'Bacillus subtilis' controls fungal pathogens primarily through:",
    options: ["Production of iturin, surfactin, and fengycin antibiotics", "Competition for iron (siderophores only)", "Hyperparasitism", "Induced systemic resistance only"],
    correct: 0,
    explanation: "B. subtilis produces cyclic lipopeptide antibiotics (iturin A, surfactin, fengycin) that disrupt fungal cell membranes. It also induces systemic resistance in plants."
  },
  {
    id: "gt7_063", qNo: 63, subject: "plant-pathology",
    question: "Aflatoxin contamination of groundnut is caused by:",
    options: ["Penicillium expansum", "Fusarium graminearum", "Aspergillus flavus and A. parasiticus", "Claviceps purpurea"],
    correct: 2,
    explanation: "Aflatoxins B1, B2, G1, G2 are produced by Aspergillus flavus and A. parasiticus. Groundnut is highly susceptible, especially during drought stress and improper storage."
  },
  {
    id: "gt7_064", qNo: 64, subject: "plant-pathology",
    question: "The 'hypersensitive response' (HR) in plants is:",
    options: ["Systemic chlorosis", "Pathogen detoxification by enzymes", "A slow resistance response over weeks", "Rapid, localised cell death that contains pathogen spread"],
    correct: 3,
    explanation: "The hypersensitive response (HR) is a rapid, programmed cell death response at the infection site that restricts pathogen spread, triggered by recognition of pathogen effectors by R proteins."
  },

  // AGRICULTURAL ECONOMICS (7)
  {
    id: "gt7_065", qNo: 65, subject: "agricultural-economics",
    question: "The 'Minimum Support Price' (MSP) in India is fixed by:",
    options: ["Reserve Bank of India", "CACP (Commission for Agricultural Costs and Prices)", "FCI (Food Corporation of India)", "NAFED"],
    correct: 1,
    explanation: "MSP is recommended by CACP (Commission for Agricultural Costs and Prices) and approved by the Cabinet Committee on Economic Affairs (CCEA). CACP was established in 1965."
  },
  {
    id: "gt7_066", qNo: 66, subject: "agricultural-economics",
    question: "The Engel's law in economics states that as income increases:",
    options: ["Savings decrease", "Proportion spent on food increases", "Proportion spent on food decreases", "Expenditure on luxury goods decreases"],
    correct: 2,
    explanation: "Engel's law (Ernst Engel, 1857): As household income increases, the proportion (not absolute amount) spent on food decreases. It is a key concept in food demand analysis."
  },
  {
    id: "gt7_067", qNo: 67, subject: "agricultural-economics",
    question: "Which five-year plan introduced the concept of 'Rolling Plan' in India?",
    options: ["Sixth Plan", "Fifth Plan", "Third Plan", "Seventh Plan"],
    correct: 0,
    explanation: "The Sixth Five Year Plan (1980–85) under Indira Gandhi adopted the rolling plan concept, replacing the Janata government's attempt at rolling plans. Rolling plans allow annual revisions."
  },
  {
    id: "gt7_068", qNo: 68, subject: "agricultural-economics",
    question: "The 'Land utilisation statistics' in India is maintained by:",
    options: ["Ministry of Agriculture", "Directorate of Economics and Statistics", "National Sample Survey Office (NSSO)", "ICAR"],
    correct: 1,
    explanation: "Land utilisation statistics (area under different land uses including cropped area, fallow, etc.) are collected and published by the Directorate of Economics and Statistics, Ministry of Agriculture."
  },
  {
    id: "gt7_069", qNo: 69, subject: "agricultural-economics",
    question: "A 'monopsony' in agricultural markets occurs when:",
    options: ["Government controls prices", "There is only one seller", "There are many buyers and sellers", "There is only one buyer"],
    correct: 3,
    explanation: "A monopsony is a market structure with only one buyer (purchaser). In agriculture, this can occur in local procurement (single processing factory as the sole buyer of a specific crop)."
  },
  {
    id: "gt7_070", qNo: 70, subject: "agricultural-economics",
    question: "The 'Opportunity cost' of using land for crop A instead of crop B is:",
    options: ["The market price of crop A", "The cost of producing crop A", "The foregone profit from crop B", "The total farm input cost"],
    correct: 2,
    explanation: "Opportunity cost is the value of the best foregone alternative. By choosing crop A over crop B, the opportunity cost equals the net return that could have been earned from crop B."
  },
  {
    id: "gt7_071", qNo: 71, subject: "agricultural-economics",
    question: "The 'National Food Security Act 2013' entitles households to subsidised food grain at:",
    options: ["₹1/kg for wheat, ₹2/kg for rice", "₹5/kg for all food grains", "₹2/kg for wheat, ₹3/kg for rice, ₹1/kg for millets", "At MSP prices"],
    correct: 2,
    explanation: "Under NFSA 2013, eligible households receive wheat at ₹2/kg, rice at ₹3/kg, and coarse grains (millets) at ₹1/kg through the PDS. Priority Households get 5 kg/person/month."
  },

  // SURVEYING (4)
  {
    id: "gt7_072", qNo: 72, subject: "surveying",
    question: "The 'Gunter's chain' has a total length of:",
    options: ["30 m", "20.117 m (66 feet)", "10 m", "20 m"],
    correct: 1,
    explanation: "Gunter's chain = 66 feet = 20.117 metres, consisting of 100 links each 7.92 inches (0.201 m) long. It was designed to relate to acres: 10 chains × 1 chain = 1 acre."
  },
  {
    id: "gt7_073", qNo: 73, subject: "surveying",
    question: "Photogrammetry is the science of making measurements from:",
    options: ["Field surveys", "Satellite signals only", "Photographs (aerial or terrestrial)", "Gravity measurements"],
    correct: 2,
    explanation: "Photogrammetry is the science of obtaining reliable measurements and maps from photographs (aerial or terrestrial). It is the basis of aerial survey and remote sensing."
  },
  {
    id: "gt7_074", qNo: 74, subject: "surveying",
    question: "In GPS (Global Positioning System), positional accuracy is primarily limited by:",
    options: ["Map scale", "Number of visible satellites and atmospheric delays", "Battery life of receiver", "Operator error only"],
    correct: 1,
    explanation: "GPS accuracy depends on the number of satellites visible (geometric dilution of precision — GDOP), ionospheric and tropospheric signal delays, multi-path errors, and receiver quality."
  },
  {
    id: "gt7_075", qNo: 75, subject: "surveying",
    question: "The purpose of 'contour lines' on a topographic map is to show:",
    options: ["Drainage channels", "Soil type boundaries", "Property boundaries", "Lines of equal elevation above MSL"],
    correct: 3,
    explanation: "Contour lines connect points of equal elevation on a map. They show the shape and elevation of terrain — closely spaced contours indicate steep slopes; widely spaced indicate gentle slopes."
  },

  // FORESTRY (5)
  {
    id: "gt7_076", qNo: 76, subject: "forestry",
    question: "The term 'social forestry' refers to:",
    options: ["Afforestation of catchment areas", "Forestry on government reserve lands only", "Growing trees on non-forest land (farm land, degraded land) by communities", "Plantation forestry for commercial timber"],
    correct: 2,
    explanation: "Social forestry involves growing trees on non-forest lands (roadsides, canal banks, community lands, farm bunds) by/for communities to meet local needs for fuelwood, fodder, timber, and income."
  },
  {
    id: "gt7_077", qNo: 77, subject: "forestry",
    question: "The Casuarina plantation is most important in which coastal state of India?",
    options: ["Kerala", "West Bengal", "Odisha", "Tamil Nadu"],
    correct: 3,
    explanation: "Tamil Nadu has the largest Casuarina (Casuarina equisetifolia) plantation area in India. It is important for poles, fuelwood, and coastal sand dune stabilisation."
  },
  {
    id: "gt7_078", qNo: 78, subject: "forestry",
    question: "The 'nurse crop' concept in forestry refers to:",
    options: ["A medicinal plant species", "A forest fire break crop", "A wind-breaking species", "A fast-growing tree planted with a main species to provide shade and protection"],
    correct: 3,
    explanation: "A nurse crop is a fast-growing, short-lived species planted to provide shade, shelter, and protection to slower-growing, shade-tolerant main species during their establishment phase."
  },
  {
    id: "gt7_079", qNo: 79, subject: "forestry",
    question: "The 'REDD+' mechanism under UNFCCC stands for:",
    options: ["Reducing Emissions from Deforestation and Forest Degradation (+ conservation, sustainable management, enhancement)", "Regional Economic Development and Deforestation", "Reducing Environmental Degradation Decisions", "Reforestation and Environmental Development Drive"],
    correct: 0,
    explanation: "REDD+ (Reducing Emissions from Deforestation and forest Degradation, plus conservation, sustainable management and enhancement of forest carbon stocks) is a UN climate framework for tropical countries."
  },
  {
    id: "gt7_080", qNo: 80, subject: "forestry",
    question: "Teak (Tectona grandis) is a member of which family?",
    options: ["Meliaceae", "Lamiaceae (Verbenaceae)", "Dipterocarpaceae", "Fabaceae"],
    correct: 1,
    explanation: "Teak (Tectona grandis) belongs to family Lamiaceae (formerly Verbenaceae). It is the most valuable tropical timber species, native to South and Southeast Asia."
  },

  // HORTICULTURE (10)
  {
    id: "gt7_081", qNo: 81, subject: "horticulture",
    question: "The 'Jacob's Staff' method in horticulture refers to the technique for:",
    options: ["Soil sampling", "Pruning tall mango trees", "Estimating spacing in orchards", "Measuring tree height"],
    correct: 3,
    explanation: "The Jacob's staff (hypsometer principle) is used to measure tree height by sighting the top and base of the tree at known distances, using trigonometric calculations."
  },
  {
    id: "gt7_082", qNo: 82, subject: "horticulture",
    question: "The disorder 'Internal Breakdown' in stored apple is caused by:",
    options: ["Calcium deficiency during storage", "Boron toxicity", "Ethylene exposure", "CO₂ injury in Controlled Atmosphere (CA) storage"],
    correct: 3,
    explanation: "Internal CO₂ injury in apple CA storage causes internal breakdown (brown discolouration of flesh). It occurs when CO₂ exceeds 5% in the storage atmosphere."
  },
  {
    id: "gt7_083", qNo: 83, subject: "horticulture",
    question: "The crop 'Rambutan' belongs to which fruit category and family?",
    options: ["Stone fruit, Rosaceae", "Citrus fruit, Rutaceae", "Tropical fruit (Nephelium lappaceum), Sapindaceae", "Berry fruit, Vitaceae"],
    correct: 2,
    explanation: "Rambutan (Nephelium lappaceum) is a tropical fruit belonging to family Sapindaceae — the same family as lychee (Litchi chinensis) and longan (Dimocarpus longan)."
  },
  {
    id: "gt7_084", qNo: 84, subject: "horticulture",
    question: "The 'Brix-acid ratio' is used to assess fruit quality, particularly in:",
    options: ["All of the above", "Grapes for harvest timing", "Mango for ripeness", "Citrus for maturity indexing"],
    correct: 0,
    explanation: "Brix:acid ratio (total soluble solids/titratable acidity) is used as a maturity/quality index for citrus (11–15:1 standard), grapes, mango, and other fruits to determine harvest time."
  },
  {
    id: "gt7_085", qNo: 85, subject: "horticulture",
    question: "Vanilla (Vanilla planifolia) belongs to which family?",
    options: ["Apiaceae", "Zingiberaceae", "Orchidaceae", "Lamiaceae"],
    correct: 2,
    explanation: "Vanilla (Vanilla planifolia) is a climbing orchid — the only orchid commercially grown for food. It belongs to family Orchidaceae, subfamily Vanilloideae."
  },
  {
    id: "gt7_086", qNo: 86, subject: "horticulture",
    question: "The process of 'blanching' in vegetable processing involves:",
    options: ["Chemical whitening of vegetables", "Brief heat treatment to inactivate enzymes before freezing/canning", "Removing vegetable colour by peeling", "Drying in shade"],
    correct: 1,
    explanation: "Blanching involves brief immersion in boiling water (1–3 min) or steam treatment to inactivate oxidative enzymes (peroxidase, catalase) and reduce microbial load before freezing or canning."
  },
  {
    id: "gt7_087", qNo: 87, subject: "horticulture",
    question: "The 'High Density Planting' (HDP) in mango orchards uses a spacing of approximately:",
    options: ["3 × 3 m (1111 trees/ha)", "10 × 10 m (100 trees/ha)", "5 × 5 m (400 trees/ha)", "2.5 × 2.5 m (1600 trees/ha)"],
    correct: 2,
    explanation: "High density planting (HDP) in mango uses 5 × 5 m spacing (400 trees/ha) compared to conventional 10 × 10 m (100 trees/ha). Ultra-high density is 2.5 × 2.5 m (1600 plants/ha) with dwarf rootstocks."
  },
  {
    id: "gt7_088", qNo: 88, subject: "horticulture",
    question: "The 'Kinnow' hybrid mandarin was developed by crossing:",
    options: ["King × Willow-leaf mandarin", "Clementine × Satsuma", "Mosambi × Karna khatta", "Blood orange × Sweet lime"],
    correct: 0,
    explanation: "Kinnow is a hybrid mandarin developed by H.B. Frost in California by crossing King (Citrus nobilis) × Willow-leaf (C. deliciosa). It is the most important mandarin variety in Punjab and Rajasthan."
  },
  {
    id: "gt7_089", qNo: 89, subject: "horticulture",
    question: "The most important post-harvest loss factor in vegetables is:",
    options: ["Mechanical damage during transport", "Insect damage", "Chemical residues", "High respiration rate and water loss (transpiration)"],
    correct: 3,
    explanation: "High respiration rate (especially in tropical crops) and transpiration (water loss) are the primary causes of post-harvest quality deterioration and weight loss in fresh vegetables."
  },
  {
    id: "gt7_090", qNo: 90, subject: "agro-meteorology",
    question: "Phenology in agricultural meteorology refers to the study of:",
    options: ["Soil-atmosphere gas exchange", "Periodic biological events in crops in relation to seasonal climate changes", "Leaf area index measurement methods", "Crop yield forecasting using satellite imagery"],
    correct: 1,
    explanation: "Agro-phenology studies the timing of crop developmental stages (sowing, emergence, tillering, flowering, maturity) in relation to temperature, photoperiod and rainfall. Phenological data is essential for scheduling farm operations, pest prediction and climate change impact assessment."
  },

  // EXTENSION (6)
  {
    id: "gt7_091", qNo: 91, subject: "extension",
    question: "The 'NAIP (National Agricultural Innovation Project)' in India was funded by:",
    options: ["Asian Development Bank", "World Bank + Government of India", "ICAR alone", "FAO + UNDP"],
    correct: 1,
    explanation: "NAIP was a World Bank-funded project (2006–2014) implemented by ICAR to transform Indian agricultural research and development through consortium-based, market-driven approaches."
  },
  {
    id: "gt7_092", qNo: 92, subject: "extension",
    question: "The 'linear model' of agricultural technology transfer assumes:",
    options: ["Bidirectional flow between researchers and farmers", "Peer-to-peer technology sharing", "Unidirectional flow from research → extension → farmer", "Farmer-led innovation"],
    correct: 2,
    explanation: "The linear (transfer-of-technology) model assumes technology flows one-way: from research institutions → extension workers → farmers. It has been criticised for ignoring farmer knowledge and feedback."
  },
  {
    id: "gt7_093", qNo: 93, subject: "extension",
    question: "The 'Farm School' (Farmer Field School) approach uses which learning methodology?",
    options: ["Lecture-based instruction", "Text-book based learning", "Remote e-learning", "Discovery-based, participatory learning in the field"],
    correct: 3,
    explanation: "Farmer Field Schools (FFS) use discovery-based, hands-on learning in the field — farmers make their own observations, experiments, and decisions through structured group learning."
  },
  {
    id: "gt7_094", qNo: 94, subject: "extension",
    question: "The 'e-Choupal' initiative was launched by:",
    options: ["World Bank", "NABARD", "ITC Limited", "Government of India"],
    correct: 2,
    explanation: "e-Choupal was launched by ITC Limited in 2000 to connect farmers in rural India through internet kiosks, providing market price information, weather data, and agricultural knowledge."
  },
  {
    id: "gt7_095", qNo: 95, subject: "extension",
    question: "In agricultural communication, 'noise' refers to:",
    options: ["Technical agricultural terminology", "Loud sounds that disturb farmers", "Any interference or barrier that distorts the message", "Volume of communication"],
    correct: 2,
    explanation: "In communication theory, 'noise' is any interference that impairs message transmission between sender and receiver — including physical noise, semantic barriers, psychological barriers, or cultural differences."
  },
  // ── GENERAL AGRICULTURE (5) ──
  { id:"gt7_096", qNo:96, subject:"general-agriculture", question:"IFAD (International Fund for Agricultural Development) was established in:", options:["1985", "1977", "1970", "1960"], correct: 1, explanation:"IFAD was established in 1977 as a UN specialized agency. It is headquartered in Rome, Italy and focuses on rural poverty reduction by investing in agriculture, rural enterprises and natural resource management in developing countries." },
  { id:"gt7_097", qNo:97, subject:"general-agriculture", question:"'Zero Hunger' is which Sustainable Development Goal (SDG)?", options:["SDG 4", "SDG 3", "SDG 1", "SDG 2"], correct: 3, explanation:"SDG 2 'Zero Hunger' aims to end hunger, achieve food security, improve nutrition and promote sustainable agriculture by 2030. It is one of the 17 SDGs adopted by the UN in 2015." },
  { id:"gt7_098", qNo:98, subject:"general-agriculture", question:"e-NAM (National Agriculture Market) is an online trading platform for:", options:["Procurement of tractors and farm machinery", "Export of spices to foreign markets", "Trading of agricultural produce across APMC mandis", "Fertilizer procurement by state governments"], correct: 2, explanation:"e-NAM is a pan-India electronic trading portal launched in April 2016 that networks existing APMC mandis to create a unified national market for agricultural commodities, enabling transparent price discovery." },
  { id:"gt7_099", qNo:99, subject:"general-agriculture", question:"The government target of 'Doubling Farmers' Income' was set for the year:", options:["2020", "2025", "2022", "2019"], correct: 2, explanation:"The Government of India set a target to double farmers' real income by 2022 (base year 2015–16), based on the Ashok Dalwai Committee recommendations. Key strategies include increased crop productivity, market reforms and value addition." },
  { id:"gt7_100", qNo:100, subject:"general-agriculture", question:"CGIAR (Consultative Group on International Agricultural Research) was established to:", options:["Support international agricultural research for food security and poverty reduction", "Monitor global food prices", "Regulate international trade in agricultural commodities", "Provide agricultural loans to developing countries"], correct: 0, explanation:"CGIAR (established 1971) is a global research partnership of 15 international agricultural research centres (including IRRI, CIMMYT, ICRISAT) focused on reducing rural poverty, improving food security and nutrition." },
];
