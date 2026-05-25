import { GrandTestQuestion } from "./grandTestMeta";

export const GRAND_TEST_5: GrandTestQuestion[] = [
  // AGRONOMY (6)
  {
    id: "gt5_001", qNo: 1, subject: "agronomy",
    question: "The concept of 'Leaf Area Index' (LAI) was introduced by:",
    options: ["Watson (1947)", "Blackman (1919)", "Monsi and Saeki (1953)", "De Wit (1965)"],
    correct: 0,
    explanation: "LAI was introduced by D.J. Watson in 1947, defined as the total one-sided area of leaf tissue per unit ground surface area."
  },
  {
    id: "gt5_002", qNo: 2, subject: "agronomy",
    question: "In relay cropping, the second crop is sown:",
    options: ["Before harvesting of the first crop", "After harvesting of the first crop", "Simultaneously with the first crop", "In alternate rows with the first crop"],
    correct: 0,
    explanation: "In relay cropping, the second crop is sown before harvesting the first crop, typically at the reproductive stage of the first crop."
  },
  {
    id: "gt5_003", qNo: 3, subject: "agronomy",
    question: "The critical stage of irrigation in wheat is:",
    options: ["Tillering and heading", "Crown root initiation and flowering", "Germination and grain filling", "Boot stage and dough stage"],
    correct: 1,
    explanation: "Crown root initiation (CRI) at 20-25 DAS and flowering/anthesis are the most critical stages of irrigation in wheat."
  },
  {
    id: "gt5_004", qNo: 4, subject: "agronomy",
    question: "Weed index is defined as the reduction in crop yield due to weed competition expressed as:",
    options: ["Absolute number of weeds", "Percentage of weed-free yield", "kg of weeds per hectare", "Percentage of weed biomass"],
    correct: 1,
    explanation: "Weed index = [(Weed-free yield – Weed crop yield) / Weed-free yield] × 100. It expresses yield loss as a percentage of weed-free yield."
  },
  {
    id: "gt5_005", qNo: 5, subject: "agronomy",
    question: "The optimum temperature for germination of rice is:",
    options: ["15–18°C", "20–25°C", "30–35°C", "38–42°C"],
    correct: 2,
    explanation: "Rice germinates best between 30–35°C. Below 10°C and above 40°C, germination is severely inhibited."
  },
  {
    id: "gt5_006", qNo: 6, subject: "agronomy",
    question: "Which of the following is NOT a component of net primary productivity (NPP)?",
    options: ["Gross photosynthesis", "Respiration losses", "Root exudates", "Litterfall"],
    correct: 0,
    explanation: "NPP = GPP (Gross Primary Productivity) – Respiration. Gross photosynthesis equals GPP, while NPP is what remains after plant respiration."
  },

  // KHARIF CROPS (7)
  {
    id: "gt5_007", qNo: 7, subject: "kharif-crops",
    question: "The phenomenon of 'Khaira disease' in rice is caused by deficiency of:",
    options: ["Iron", "Zinc", "Manganese", "Copper"],
    correct: 1,
    explanation: "Khaira disease of rice is caused by zinc deficiency. Symptoms include brownish spots and stunting, especially in alkaline and waterlogged soils."
  },
  {
    id: "gt5_008", qNo: 8, subject: "kharif-crops",
    question: "In cotton, the number of days from sowing to boll opening is approximately:",
    options: ["60–80 days", "90–100 days", "150–180 days", "120–150 days"],
    correct: 2,
    explanation: "Cotton takes approximately 150–180 days from sowing to boll opening, making it a long-duration kharif crop."
  },
  {
    id: "gt5_009", qNo: 9, subject: "kharif-crops",
    question: "The recommended seed rate for transplanted rice (paddy) is:",
    options: ["80–100 kg/ha", "50–60 kg/ha", "20–25 kg/ha", "100–120 kg/ha"],
    correct: 2,
    explanation: "For transplanted rice, 20–25 kg seed/ha is sufficient to raise seedlings for one hectare of transplanting, as nursery is grown in 1/10th area."
  },
  {
    id: "gt5_010", qNo: 10, subject: "kharif-crops",
    question: "Groundnut is predominantly a self-pollinated crop. Its flowers are:",
    options: ["Chasmogamous", "Cleistogamous", "Amphicarpous", "Both chasmogamous and cleistogamous"],
    correct: 1,
    explanation: "Groundnut flowers are cleistogamous (self-pollinating before opening). Groundnut is also amphicarpous — fruits develop underground after geocarpy."
  },
  {
    id: "gt5_011", qNo: 11, subject: "kharif-crops",
    question: "The recommended spacing for transplanted kharif rice (medium duration varieties) is:",
    options: ["15 × 10 cm", "20 × 15 cm", "25 × 25 cm", "30 × 20 cm"],
    correct: 1,
    explanation: "20 × 15 cm spacing is recommended for medium-duration rice varieties under transplanting. Short-duration varieties use 15 × 10 cm."
  },
  {
    id: "gt5_012", qNo: 12, subject: "kharif-crops",
    question: "Jowar (sorghum) is susceptible to lodging. The mechanical support organ responsible for lodging resistance is:",
    options: ["Tap root system", "Seminal roots", "Brace roots (prop roots)", "Fibrous root mass"],
    correct: 2,
    explanation: "Brace roots (prop roots) arising from basal nodes provide structural support and lodging resistance in sorghum."
  },
  {
    id: "gt5_013", qNo: 13, subject: "kharif-crops",
    question: "Which kharif crop is known as the 'camel crop' due to its drought tolerance?",
    options: ["Bajra", "Sorghum", "Castor", "Cowpea"],
    correct: 0,
    explanation: "Pearl millet (bajra) is called the 'camel crop' due to its exceptional drought tolerance. It can grow in areas with as little as 150–200 mm rainfall."
  },

  // RABI CROPS (5)
  {
    id: "gt5_014", qNo: 14, subject: "rabi-crops",
    question: "The minimum seed rate for line sowing of wheat is:",
    options: ["50 kg/ha", "75 kg/ha", "100 kg/ha", "125 kg/ha"],
    correct: 2,
    explanation: "100 kg/ha is the standard seed rate for line sowing of wheat. For late sowing, it is increased to 125 kg/ha to compensate for poor tillering."
  },
  {
    id: "gt5_015", qNo: 15, subject: "rabi-crops",
    question: "Vernalisation requirement in wheat is satisfied by exposure to temperature of:",
    options: ["0–5°C for 30–60 days", "10–15°C for 15–20 days", "5–10°C for 7–10 days", "−5 to 0°C for 20–30 days"],
    correct: 0,
    explanation: "Vernalisation in wheat requires exposure to near-freezing temperatures (0–5°C) for 30–60 days to satisfy the cold requirement for flowering."
  },
  {
    id: "gt5_016", qNo: 16, subject: "rabi-crops",
    question: "In mustard, the optimum time of sowing in North India is:",
    options: ["August–September", "October–November", "December–January", "February–March"],
    correct: 1,
    explanation: "October–November is the optimum sowing time for mustard in North India to avoid early frost and ensure good vegetative growth."
  },
  {
    id: "gt5_017", qNo: 17, subject: "rabi-crops",
    question: "The lentil variety 'Pant L-406' is resistant to:",
    options: ["Fusarium wilt", "Rust", "Stemphylium blight", "Powdery mildew"],
    correct: 0,
    explanation: "Pant L-406 is a high-yielding lentil variety resistant to Fusarium wilt, one of the major diseases of lentil in India."
  },
  {
    id: "gt5_018", qNo: 18, subject: "rabi-crops",
    question: "Chickpea (Bengal gram) belongs to the family:",
    options: ["Malvaceae", "Leguminosae (Fabaceae)", "Solanaceae", "Compositae"],
    correct: 1,
    explanation: "Chickpea (Cicer arietinum) belongs to the family Leguminosae (Fabaceae), subfamily Papilionoideae."
  },

  // GENETICS (7)
  {
    id: "gt5_019", qNo: 19, subject: "genetics",
    question: "The chi-square test in genetics was introduced by:",
    options: ["R.A. Fisher", "Karl Pearson", "G. Mendel", "W.S. Gosset"],
    correct: 1,
    explanation: "Karl Pearson introduced the chi-square (χ²) test in 1900. It is widely used in genetics to test goodness-of-fit for expected genetic ratios."
  },
  {
    id: "gt5_020", qNo: 20, subject: "genetics",
    question: "Polytene chromosomes are characteristically found in:",
    options: ["Salivary glands of Drosophila", "Oocytes of Xenopus", "Liver cells of mammals", "Pollen grains of angiosperms"],
    correct: 0,
    explanation: "Polytene (giant) chromosomes are found in the salivary gland cells of Drosophila and other dipterans due to repeated DNA replication without cell division."
  },
  {
    id: "gt5_021", qNo: 21, subject: "genetics",
    question: "In a testcross, the offspring ratio 1:1:1:1 indicates:",
    options: ["Complete dominance with no linkage", "Two unlinked genes with independent assortment", "Two linked genes with 50% recombination", "Both B and C are correct"],
    correct: 3,
    explanation: "A 1:1:1:1 testcross ratio can result from two unlinked genes (independent assortment) OR two completely linked genes with 50% recombination — both produce equal proportions of four classes."
  },
  {
    id: "gt5_022", qNo: 22, subject: "genetics",
    question: "The number of Barr bodies in a cell with karyotype 47, XXY (Klinefelter syndrome) is:",
    options: ["0", "1", "2", "3"],
    correct: 1,
    explanation: "Barr bodies = n − 1, where n = number of X chromosomes. XXY has 2 X chromosomes, so Barr bodies = 2 − 1 = 1."
  },
  {
    id: "gt5_023", qNo: 23, subject: "genetics",
    question: "Nucleosome core particle consists of:",
    options: ["H1 + 146 bp DNA", "H2A, H2B, H3, H4 each × 2 + 147 bp DNA", "H1, H2A, H2B, H3, H4 + 200 bp DNA", "H3 + H4 tetramer + 80 bp DNA"],
    correct: 1,
    explanation: "The nucleosome core particle consists of an octamer of histones (2 each of H2A, H2B, H3, H4) wrapped with 147 bp of DNA. H1 is the linker histone."
  },
  {
    id: "gt5_024", qNo: 24, subject: "genetics",
    question: "The 'one gene–one enzyme' hypothesis was proposed by:",
    options: ["Beadle and Tatum", "Watson and Crick", "Avery, MacLeod and McCarty", "Morgan and Sturtevant"],
    correct: 0,
    explanation: "Beadle and Tatum (1941) proposed the one gene–one enzyme hypothesis based on Neurospora crassa mutants, winning the Nobel Prize in 1958."
  },
  {
    id: "gt5_025", qNo: 25, subject: "genetics",
    question: "Genomic imprinting is an epigenetic phenomenon where gene expression depends on:",
    options: ["The sex of the offspring", "The parental origin of the allele", "The number of gene copies", "The presence of transposons"],
    correct: 1,
    explanation: "Genomic imprinting results in parent-of-origin-specific gene expression. The same allele may be expressed or silenced depending on whether it was inherited from the mother or father."
  },

  // SEED TECHNOLOGY (4)
  {
    id: "gt5_026", qNo: 26, subject: "seed-technology",
    question: "The 'Rope test' is used to determine seed quality of:",
    options: ["Sunflower", "Cotton", "Onion", "Groundnut"],
    correct: 1,
    explanation: "The rope test (or twist test) is specifically used for cotton seeds. Seeds are twisted to check for proper maturity and lint quality."
  },
    {
    id: "gt5_027", qNo: 27, subject: "seed-technology",
    question: "According to the Seeds Act 1966, the minimum germination percentage required for certified rice seed is:",
    options: ["70%", "75%", "80%", "85%"],
    correct: 2,
    explanation: "The Seeds Act 1966 and Seeds (Control) Order 1983 specify minimum germination of 80% for certified rice seed. This is the standard minimum required for issue of seed certification under the Seeds Act."
  },
  {
    id: "gt5_028", qNo: 28, subject: "seed-technology",
    question: "ISTA (International Seed Testing Association) was established in:",
    options: ["1924", "1936", "1950", "1961"],
    correct: 0,
    explanation: "ISTA was established in 1924 to standardize methods of seed sampling and testing globally."
  },
  {
    id: "gt5_029", qNo: 29, subject: "seed-technology",
    question: "Seed priming technique that uses polyethylene glycol (PEG) solution is called:",
    options: ["Hydropriming", "Osmopriming", "Matrix priming", "Biopriming"],
    correct: 1,
    explanation: "Osmopriming (osmoconditioning) uses osmotic solutions like PEG (polyethylene glycol) to control water uptake and enhance seed germination."
  },

  // SOIL SCIENCE (5)
  {
    id: "gt5_030", qNo: 30, subject: "soil-science",
    question: "Soils formed in situ from the weathering of underlying parent rock are called:",
    options: ["Alluvial soils", "Residual soils", "Transported soils", "Colluvial soils"],
    correct: 1,
    explanation: "Residual soils (also called sedentary soils) are formed in place from the weathering of the underlying parent rock without transportation."
  },
  {
    id: "gt5_031", qNo: 31, subject: "soil-science",
    question: "The process of lateral movement of clay from the A horizon to the B horizon is called:",
    options: ["Eluviation", "Illuviation", "Lessivage", "Podzolization"],
    correct: 2,
    explanation: "Lessivage (argilluviation) is the physical translocation of clay particles from upper horizons to lower B horizons, forming an argillic horizon (Bt)."
  },
  {
    id: "gt5_032", qNo: 32, subject: "soil-science",
    question: "The permanent wilting point (PWP) is the soil moisture tension at which plants cannot recover turgidity. This tension is approximately:",
    options: ["0.1 MPa", "0.33 MPa", "1.5 MPa", "3.0 MPa"],
    correct: 2,
    explanation: "The permanent wilting point corresponds to a soil moisture tension of approximately 1.5 MPa (15 bars). Water below this is tightly held and unavailable to plants."
  },
  {
    id: "gt5_033", qNo: 33, subject: "soil-science",
    question: "Which horizon in soil profile is characterized by the maximum accumulation of organic matter?",
    options: ["O horizon", "A horizon", "B horizon", "C horizon"],
    correct: 0,
    explanation: "The O horizon (organic horizon) is found at the surface and is characterized by maximum accumulation of organic matter in various stages of decomposition."
  },
  {
    id: "gt5_034", qNo: 34, subject: "soil-science",
    question: "Pedoturbation refers to:",
    options: ["Soil water movement", "Physical mixing of soil horizons", "Chemical weathering of rocks", "Leaching of nutrients"],
    correct: 1,
    explanation: "Pedoturbation is the physical mixing or disruption of soil horizons by biological, physical or chemical processes (e.g., bioturbation, cryoturbation, argilliturbation)."
  },

  // SOIL FERTILITY (5)
  {
    id: "gt5_035", qNo: 35, subject: "soil-fertility",
    question: "The 'Munson and Nelson' method is used to determine:",
    options: ["Available phosphorus in soil", "Soil pH", "Cation exchange capacity", "Soil organic carbon"],
    correct: 0,
    explanation: "The Munson and Nelson (Bray-1) method uses 0.025 N HCl + 0.03 N NH4F to extract available phosphorus from acid soils."
  },
  {
    id: "gt5_036", qNo: 36, subject: "soil-fertility",
    question: "Sulphur deficiency symptoms first appear in:",
    options: ["Older leaves", "Young leaves (growing tips)", "Roots", "Stem nodes"],
    correct: 1,
    explanation: "Sulphur is immobile in plants. Deficiency symptoms first appear in young leaves (chlorosis), unlike nitrogen deficiency which shows in older leaves first."
  },
  {
    id: "gt5_037", qNo: 37, subject: "soil-fertility",
    question: "The law of 'Minimum' in plant nutrition was proposed by:",
    options: ["Liebig (1840)", "Blackman (1905)", "Mitscherlich (1909)", "Boussingault (1838)"],
    correct: 0,
    explanation: "Justus von Liebig proposed the Law of the Minimum in 1840: plant growth is limited by the nutrient present in the least sufficient amount relative to need."
  },
  {
    id: "gt5_038", qNo: 38, subject: "soil-fertility",
    question: "Ammonium sulphate has a physiological reaction that is:",
    options: ["Neutral", "Alkaline", "Acidic", "Variable depending on soil type"],
    correct: 2,
    explanation: "Ammonium sulphate is physiologically acidic because NH4+ is taken up by plants preferentially, leaving H+ ions and sulphate in the soil, lowering pH."
  },
  {
    id: "gt5_039", qNo: 39, subject: "soil-fertility",
    question: "Biofertilizer 'Azospirillum' is a/an:",
    options: ["Symbiotic N-fixer", "Free-living N-fixer", "Associative N-fixer", "Mycorrhizal fungus"],
    correct: 2,
    explanation: "Azospirillum is an associative nitrogen-fixing bacterium that lives in close association with plant roots (rhizosphere) without forming true symbiosis."
  },

  // ENTOMOLOGY (5)
  {
    id: "gt5_040", qNo: 40, subject: "entomology",
    question: "The study of insects that are associated with legal investigations is called:",
    options: ["Economic entomology", "Forensic entomology", "Medical entomology", "Apiculture"],
    correct: 1,
    explanation: "Forensic entomology uses insects and their developmental stages as evidence in legal investigations, particularly to determine time of death."
  },
  {
    id: "gt5_041", qNo: 41, subject: "entomology",
    question: "The 'Malpighian tubules' in insects function as:",
    options: ["Respiratory organs", "Excretory organs", "Digestive glands", "Salivary glands"],
    correct: 1,
    explanation: "Malpighian tubules are the main excretory organs of insects. They remove nitrogenous waste (uric acid) from the haemolymph."
  },
  {
    id: "gt5_042", qNo: 42, subject: "entomology",
    question: "Insects with 'haustellate' mouthparts are adapted for:",
    options: ["Biting and chewing solid food", "Sucking liquid food", "Piercing and chewing", "Filter feeding"],
    correct: 1,
    explanation: "Haustellate mouthparts are modified for sucking/lapping liquid food. Examples include butterflies (siphoning), mosquitoes (piercing-sucking) and houseflies (sponging)."
  },
  {
    id: "gt5_043", qNo: 43, subject: "entomology",
    question: "The order 'Siphonaptera' consists of:",
    options: ["Lice", "Fleas", "Thrips", "Mites"],
    correct: 1,
    explanation: "Order Siphonaptera comprises fleas — wingless, laterally compressed ectoparasites of mammals and birds. (Mites are Arachnida, not insects.)"
  },
  {
    id: "gt5_044", qNo: 44, subject: "entomology",
    question: "The hormone responsible for metamorphosis in insects by preventing juvenile characters is:",
    options: ["Ecdysone (moulting hormone)", "Juvenile hormone", "Brain hormone (PTTH)", "Bursicon"],
    correct: 0,
    explanation: "Ecdysone (moulting hormone / 20-hydroxyecdysone) triggers moulting and metamorphosis. When juvenile hormone levels are low, ecdysone promotes adult development."
  },

  // CROP PESTS (5)
  {
    id: "gt5_045", qNo: 45, subject: "crop-pests",
    question: "The 'shoot fly' that attacks sorghum at the seedling stage is:",
    options: ["Atherigona approximata", "Atherigona soccata", "Contarinia sorghicola", "Corcyra cephalonica"],
    correct: 1,
    explanation: "Atherigona soccata (sorghum shoot fly) is the major pest of sorghum at the seedling stage, causing the characteristic 'dead heart' symptom."
  },
  {
    id: "gt5_046", qNo: 46, subject: "crop-pests",
    question: "Economic Injury Level (EIL) is the pest population density at which:",
    options: ["Pest causes visible damage", "Cost of control equals value of crop loss", "Pest population starts increasing", "50% of crop is damaged"],
    correct: 1,
    explanation: "EIL is the lowest pest population density that causes economic damage, i.e., the point where the cost of pest control equals the value of crop loss prevented."
  },
  {
    id: "gt5_047", qNo: 47, subject: "crop-pests",
    question: "Spotted stem borer of sugarcane is:",
    options: ["Chilo infuscatellus", "Diatraea saccharalis", "Sesamia inferens", "Eldana saccharina"],
    correct: 0,
    explanation: "Chilo infuscatellus (spotted moth borer / early shoot borer) is a major stem borer of sugarcane in India causing early shoot borer damage."
  },
  {
    id: "gt5_048", qNo: 48, subject: "crop-pests",
    question: "The 'gall midge' (Orseolia oryzae) in rice causes:",
    options: ["Dead heart symptom", "Silver shoot (onion shoot) symptom", "Hopperburn", "Leaf scald"],
    correct: 1,
    explanation: "Rice gall midge (Orseolia oryzae) larvae feed on the growing points, causing the characteristic silver shoot (also called onion shoot or gall) symptom."
  },
  {
    id: "gt5_049", qNo: 49, subject: "crop-pests",
    question: "Which pesticide group is specifically used to control mites?",
    options: ["Insecticides", "Acaricides", "Nematicides", "Fungicides"],
    correct: 1,
    explanation: "Acaricides are pesticides specifically used to control mites (Acarina) and ticks. Examples include dicofol, propargite, and spiromesifen."
  },

  // FARM MACHINERY (6)
  {
    id: "gt5_050", qNo: 50, subject: "farm-machinery",
    question: "The 'draught' of an implement is defined as the force required to:",
    options: ["Lift the implement", "Pull the implement through soil", "Rotate the implement", "Oscillate the implement"],
    correct: 1,
    explanation: "Draught is the horizontal force (pull) required to move an implement through the soil. It is a key parameter in tractor power selection."
  },
  {
    id: "gt5_051", qNo: 51, subject: "farm-machinery",
    question: "In a diesel engine, the fuel injection occurs at approximately what degree before top dead centre (BTDC)?",
    options: ["5–10° BTDC", "15–25° BTDC", "30–40° BTDC", "45–60° BTDC"],
    correct: 1,
    explanation: "In diesel engines, fuel injection typically occurs at 15–25° BTDC to allow sufficient time for combustion to occur at the optimal piston position."
  },
  {
    id: "gt5_052", qNo: 52, subject: "farm-machinery",
    question: "Which type of plough is most suitable for turning sod and burying crop residue?",
    options: ["Disc plough", "Mould board plough", "Sub-soiler", "Chisel plough"],
    correct: 1,
    explanation: "The mould board plough completely inverts the soil slice, effectively burying surface residues, weed seeds, and sod — making it ideal for sod-turning operations."
  },
  {
    id: "gt5_053", qNo: 53, subject: "farm-machinery",
    question: "The International System of units for measuring tractor PTO (Power Take-Off) power is:",
    options: ["Horsepower (HP)", "Kilowatt (kW)", "Newton metre (N·m)", "Pascal (Pa)"],
    correct: 1,
    explanation: "Tractor PTO power is measured in kilowatts (kW) in SI units. The traditional unit was horsepower (HP): 1 HP = 0.746 kW."
  },
  {
    id: "gt5_054", qNo: 54, subject: "farm-machinery",
    question: "The purpose of a 'hydraulic system' in a tractor is primarily to:",
    options: ["Control steering", "Operate the brakes", "Lift and control mounted implements", "Control engine speed"],
    correct: 2,
    explanation: "The hydraulic system in a tractor primarily provides power for lifting, lowering, and controlling the depth of mounted implements through the three-point linkage."
  },
  {
    id: "gt5_055", qNo: 55, subject: "farm-machinery",
    question: "RNAM standards in India for agricultural machinery testing are set by:",
    options: ["BIS (Bureau of Indian Standards)", "CIAE, Bhopal", "ICAR, New Delhi", "NABL"],
    correct: 0,
    explanation: "BIS (Bureau of Indian Standards) sets standards for agricultural machinery in India. CIAE conducts testing and evaluation of farm equipment."
  },

  // PLANT PATHOLOGY (9)
  {
    id: "gt5_056", qNo: 56, subject: "plant-pathology",
    question: "The pathogen causing 'Tungro disease' of rice is transmitted by:",
    options: ["Green leafhopper (Nephotettix virescens)", "Brown planthopper (Nilaparvata lugens)", "White-backed planthopper (Sogatella furcifera)", "Rice thrips (Stenchaetothrips biformis)"],
    correct: 0,
    explanation: "Rice tungro disease is caused by two viruses (RTBV and RTSV) transmitted by the green leafhopper Nephotettix virescens in a semi-persistent manner."
  },
  {
    id: "gt5_057", qNo: 57, subject: "plant-pathology",
    question: "Smut of wheat caused by Tilletia tritici (T. caries) is commonly called:",
    options: ["Loose smut", "Covered smut (stinking smut)", "Flag smut", "Karnal bunt"],
    correct: 1,
    explanation: "Tilletia tritici causes bunt (covered smut / stinking smut) of wheat. The smutted grains remain enclosed in the glumes and emit a fishy odour (trimethylamine)."
  },
  {
    id: "gt5_058", qNo: 58, subject: "plant-pathology",
    question: "The Koch's postulates were originally established while working on:",
    options: ["Wheat rust", "Anthrax (Bacillus anthracis)", "Late blight of potato", "Tobacco mosaic virus"],
    correct: 1,
    explanation: "Robert Koch formulated his famous postulates in 1884 while studying anthrax caused by Bacillus anthracis, establishing proof of microbial pathogenicity."
  },
  {
    id: "gt5_059", qNo: 59, subject: "plant-pathology",
    question: "Systemic acquired resistance (SAR) in plants is mediated by:",
    options: ["Abscisic acid (ABA)", "Salicylic acid (SA)", "Ethylene", "Auxin"],
    correct: 1,
    explanation: "Salicylic acid (SA) is the key signal molecule mediating systemic acquired resistance (SAR). It activates PR (pathogenesis-related) genes throughout the plant."
  },
  {
    id: "gt5_060", qNo: 60, subject: "plant-pathology",
    question: "'Citrus canker' is caused by:",
    options: ["Xanthomonas axonopodis pv. citri", "Pseudomonas syringae pv. syringae", "Agrobacterium tumefaciens", "Erwinia carotovora"],
    correct: 0,
    explanation: "Citrus canker is caused by the bacterium Xanthomonas axonopodis pv. citri (syn. X. citri subsp. citri), causing raised corky lesions on leaves, stems and fruit."
  },
  {
    id: "gt5_061", qNo: 61, subject: "plant-pathology",
    question: "The disease triangle concept in plant pathology includes:",
    options: ["Host, Pathogen, Vector", "Host, Pathogen, Environment", "Pathogen, Environment, Time", "Host, Vector, Environment"],
    correct: 1,
    explanation: "The disease triangle represents the interaction of three components: susceptible Host, virulent Pathogen, and favourable Environment — all three are necessary for disease development."
  },
  {
    id: "gt5_062", qNo: 62, subject: "plant-pathology",
    question: "Erwinia stewartii causes what disease in maize?",
    options: ["Stalk rot", "Stewart's wilt and leaf blight", "Downy mildew", "Charcoal rot"],
    correct: 1,
    explanation: "Erwinia stewartii (Pantoea stewartii) causes Stewart's wilt and leaf blight of maize, spread by corn flea beetles that overwinter the bacterium."
  },
  {
    id: "gt5_063", qNo: 63, subject: "plant-pathology",
    question: "The term 'necrotroph' refers to pathogens that:",
    options: ["Require living host tissue for growth", "Kill host tissue and feed on dead material", "Live on the surface without penetrating", "Form obligate symbiosis"],
    correct: 1,
    explanation: "Necrotrophs kill host cells and then extract nutrients from the dead tissue. Examples include Botrytis, Alternaria, and Sclerotinia. They contrast with biotrophs (requiring living tissue)."
  },
  {
    id: "gt5_064", qNo: 64, subject: "plant-pathology",
    question: "The fruiting body of Pycnidium produces:",
    options: ["Ascospores", "Basidiospores", "Conidia (pycnidiospores)", "Chlamydospores"],
    correct: 2,
    explanation: "A pycnidium is a flask-shaped asexual fruiting body (stroma) that produces conidia (pycnidiospores). It is found in deuteromycetes and some ascomycetes."
  },

  // AGRICULTURAL ECONOMICS (7)
  {
    id: "gt5_065", qNo: 65, subject: "agricultural-economics",
    question: "The concept of 'utility' in economics was introduced by:",
    options: ["Alfred Marshall", "Jeremy Bentham", "John Stuart Mill", "Leon Walras"],
    correct: 1,
    explanation: "Jeremy Bentham introduced the concept of utility in economics in the late 18th century as the measure of pleasure or satisfaction derived from a good or service."
  },
  {
    id: "gt5_066", qNo: 66, subject: "agricultural-economics",
    question: "The National Agriculture Market (e-NAM) portal was launched in:",
    options: ["2014", "2016", "2018", "2020"],
    correct: 1,
    explanation: "e-NAM (National Agriculture Market) was launched on 14 April 2016 to integrate APMC mandis into a unified national electronic trading platform."
  },
  {
    id: "gt5_067", qNo: 67, subject: "agricultural-economics",
    question: "Price elasticity of demand for food grains is generally:",
    options: ["Highly elastic (>1)", "Unitary elastic (=1)", "Inelastic (<1)", "Perfectly inelastic (=0)"],
    correct: 2,
    explanation: "Food grains are necessities with few substitutes, so their demand is price-inelastic (elasticity < 1). A large price change leads to relatively small change in quantity demanded."
  },
  {
    id: "gt5_068", qNo: 68, subject: "agricultural-economics",
    question: "Backward agriculture is characterised by:",
    options: ["High capital intensity", "Low productivity and traditional farming methods", "Surplus production", "Advanced mechanisation"],
    correct: 1,
    explanation: "Backward agriculture is characterised by low capital investment, traditional methods, subsistence farming, low productivity, and dependence on rainfall."
  },
  {
    id: "gt5_069", qNo: 69, subject: "agricultural-economics",
    question: "The formula for 'Benefit-Cost Ratio' in project appraisal is:",
    options: ["Total cost / Total benefit", "Net benefit / Net cost", "PV of benefits / PV of costs", "Gross output / Gross input"],
    correct: 2,
    explanation: "BCR = Present Value (PV) of Benefits ÷ Present Value (PV) of Costs. A BCR > 1 indicates the project is economically viable."
  },
  {
    id: "gt5_070", qNo: 70, subject: "agricultural-economics",
    question: "APMC (Agricultural Produce Market Committee) was established under which act?",
    options: ["Essential Commodities Act 1955", "State APMC Acts (model since 2003)", "WDRA Act 2007", "Contract Farming Act 2020"],
    correct: 1,
    explanation: "APMCs are established under state-level APMC Acts. The Government of India circulated a Model APMC Act in 2003 to guide states in reforming their markets."
  },
  {
    id: "gt5_071", qNo: 71, subject: "agricultural-economics",
    question: "The 'Green Revolution' in India is primarily associated with:",
    options: ["HYV seeds, fertilisers and irrigation", "Organic farming", "Watershed management", "Crop insurance schemes"],
    correct: 0,
    explanation: "The Green Revolution (mid-1960s) involved a package of HYV (High Yielding Variety) seeds, chemical fertilisers, irrigation, and pesticides — dramatically increasing food grain production."
  },

  // SURVEYING (4)
  {
    id: "gt5_072", qNo: 72, subject: "surveying",
    question: "In chain surveying, the 'offset' is the distance measured:",
    options: ["Along the chain line", "Perpendicular to the chain line", "At an angle to the chain line", "Between two chain lines"],
    correct: 1,
    explanation: "An offset is the lateral distance measured from the chain (survey) line to an object. Perpendicular offsets are most accurate and preferred in chain surveying."
  },
  {
    id: "gt5_073", qNo: 73, subject: "surveying",
    question: "The 'prismatic compass' measures bearings from:",
    options: ["True North", "Magnetic North", "Grid North", "Astronomical North"],
    correct: 1,
    explanation: "A prismatic compass measures magnetic bearings — angles measured clockwise from magnetic north. It uses a freely suspended magnetic needle."
  },
  {
    id: "gt5_074", qNo: 74, subject: "surveying",
    question: "The area of an irregular field can be calculated using the Simpson's 1/3 rule, which requires the number of offsets to be:",
    options: ["Any number", "Even", "Odd", "Prime number"],
    correct: 2,
    explanation: "Simpson's 1/3 rule requires an odd number of ordinates (offsets), which means an even number of intervals. It gives more accurate results than the trapezoidal rule."
  },
  {
    id: "gt5_075", qNo: 75, subject: "surveying",
    question: "The term 'reduced level' (RL) in levelling refers to the elevation of a point:",
    options: ["Above mean sea level", "Above the instrument axis", "Above the nearest benchmark", "Below mean sea level"],
    correct: 0,
    explanation: "Reduced level (RL) is the elevation of a point above mean sea level (MSL), calculated from the height of the instrument and staff readings during levelling."
  },

  // FORESTRY (5)
  {
    id: "gt5_076", qNo: 76, subject: "forestry",
    question: "The 'Forest Rights Act 2006' recognises the rights of:",
    options: ["Forest Department officials", "Forest-dwelling Scheduled Tribes and other traditional forest dwellers", "Private timber companies", "State governments"],
    correct: 1,
    explanation: "The Scheduled Tribes and Other Traditional Forest Dwellers (Recognition of Forest Rights) Act 2006 recognises the rights of forest-dwelling communities over forest land and resources."
  },
  {
    id: "gt5_077", qNo: 77, subject: "forestry",
    question: "The timber yield class is determined by the:",
    options: ["Age of the stand", "Site index (height of dominant trees at base age)", "Species composition", "Rainfall of the area"],
    correct: 1,
    explanation: "Site index is the dominant height of trees at a standard base age (e.g., 50 or 100 years). It is the primary indicator of site productivity and timber yield class."
  },
  {
    id: "gt5_078", qNo: 78, subject: "forestry",
    question: "The practice of growing multipurpose trees on agricultural bunds and field boundaries is called:",
    options: ["Alley cropping", "Windbreak / shelterbelt", "Boundary/border planting", "Taungya system"],
    correct: 2,
    explanation: "Boundary/border tree planting involves growing trees on field bunds and boundaries, providing timber, fuel, fodder, and protection without using arable land."
  },
  {
    id: "gt5_079", qNo: 79, subject: "forestry",
    question: "India's total forest cover as per Forest Survey of India (FSI) Report 2021 is approximately:",
    options: ["19.05%", "21.71%", "24.62%", "28.30%"],
    correct: 1,
    explanation: "According to FSI India State of Forest Report 2021, India's total forest cover is 7,13,789 km² (21.71% of geographic area). Including tree cover: 24.62%."
  },
  {
    id: "gt5_080", qNo: 80, subject: "forestry",
    question: "Which type of forest is found in the Sundarbans delta?",
    options: ["Tropical dry deciduous forest", "Tropical moist deciduous forest", "Mangrove forest", "Subtropical broadleaf forest"],
    correct: 2,
    explanation: "The Sundarbans in West Bengal/Bangladesh is the world's largest mangrove forest. It is characterised by Sundari (Heritiera fomes) trees, tidal flooding, and halophytic vegetation."
  },

  // HORTICULTURE (10)
  {
    id: "gt5_081", qNo: 81, subject: "horticulture",
    question: "The rootstock used for 'Safeda' variety of mango grafting in North India is:",
    options: ["Olour", "Vellaikolamban", "Bappakai", "Kurukan"],
    correct: 0,
    explanation: "Olour is the most commonly used polyembryonic rootstock for mango in North India due to its vigorous growth and compatibility with most varieties."
  },
  {
    id: "gt5_082", qNo: 82, subject: "horticulture",
    question: "Banana is propagated commercially by:",
    options: ["Seeds", "Suckers and rhizome bits", "Grafting", "Air layering"],
    correct: 1,
    explanation: "Banana is commercially propagated by suckers (sword suckers preferred), rhizome bits, and tissue culture. It produces sterile seeds in cultivated varieties."
  },
  {
    id: "gt5_083", qNo: 83, subject: "horticulture",
    question: "The phenomenon of 'vivipary' in plants is the germination of seeds:",
    options: ["Before they are shed from the parent plant", "In water", "Under extreme cold conditions", "In soil rich in nitrogen"],
    correct: 0,
    explanation: "Vivipary is the germination of seeds or sprouting of vegetative propagules while still attached to the parent plant (e.g., in mangrove propagules, some mangoes, onion)."
  },
  {
    id: "gt5_084", qNo: 84, subject: "horticulture",
    question: "In viticulture (grape growing), the training system widely used in Maharashtra is:",
    options: ["Head training", "Kniffin system", "Bower (Pandal) system", "Espalier system"],
    correct: 2,
    explanation: "The bower (pandal) system is widely used for grapes in Maharashtra. Vines are trained overhead on a horizontal frame, allowing good light penetration and air circulation."
  },
  {
    id: "gt5_085", qNo: 85, subject: "horticulture",
    question: "The critical photoperiod for a 'short-day plant' is the period of darkness above which:",
    options: ["Flowering is inhibited", "Flowering is promoted", "Vegetative growth increases", "Dormancy breaks"],
    correct: 1,
    explanation: "Short-day plants (actually long-night plants) flower when the dark period exceeds the critical night length. Interrupting the dark period with light prevents flowering."
  },
  {
    id: "gt5_086", qNo: 86, subject: "horticulture",
    question: "The National Horticulture Mission (NHM) was launched in India in:",
    options: ["2001–02", "2005–06", "2010–11", "2014–15"],
    correct: 1,
    explanation: "National Horticulture Mission was launched in 2005–06 during the 10th Five Year Plan to promote holistic growth of the horticulture sector."
  },
  {
    id: "gt5_087", qNo: 87, subject: "horticulture",
    question: "The popular tomato variety 'Pusa Ruby' was developed by:",
    options: ["IARI, New Delhi", "IIHR, Bangalore", "NHB, Gurugram", "Punjab Agricultural University"],
    correct: 0,
    explanation: "Pusa Ruby is a popular tomato variety developed by IARI (Indian Agricultural Research Institute), New Delhi. It is suitable for both table and processing purposes."
  },
  {
    id: "gt5_088", qNo: 88, subject: "horticulture",
    question: "Which gas is used for artificial ripening of fruits in India?",
    options: ["Carbon dioxide", "Nitrogen", "Ethylene / Ethephon", "Acetylene (from calcium carbide)"],
    correct: 2,
    explanation: "Ethylene (applied as ethephon) is the recommended and legal method for artificial ripening in India. Calcium carbide (acetylene) was traditionally used but is banned under the Food Safety and Standards Act due to health hazards from arsenic and phosphorus impurities."
  },
  {
    id: "gt5_089", qNo: 89, subject: "horticulture",
    question: "The botanical name of brinjal (eggplant) is:",
    options: ["Solanum torvum", "Solanum melongena", "Capsicum annuum", "Lycopersicon esculentum"],
    correct: 1,
    explanation: "Brinjal (eggplant/aubergine) is Solanum melongena L. It belongs to family Solanaceae. S. torvum is wild brinjal/turkey berry."
  },
  {
    id: "gt5_090", qNo: 90, subject: "agro-meteorology",
    question: "Albedo in agro-meteorology refers to:",
    options: ["Total incoming solar radiation at the top of atmosphere", "The fraction of incoming solar radiation reflected by a surface", "Net radiation absorbed by crop canopy", "Latent heat flux from evapotranspiration"],
    correct: 1,
    explanation: "Albedo is the reflectivity of a surface — the proportion of incoming shortwave solar radiation reflected back. Bare dry soil albedo ≈ 0.15–0.20; green crop canopy ≈ 0.20–0.25; fresh snow ≈ 0.80–0.90. It influences energy balance and crop ET calculation."
  },

  // EXTENSION (6)
  {
    id: "gt5_091", qNo: 91, subject: "extension",
    question: "The 'Adoption-Diffusion model' by Rogers (1962) classifies innovators as those who adopt innovation:",
    options: ["Last after all others", "First, representing ~2.5% of the population", "During majority phase (~34%)", "Among first 13.5% but not the earliest"],
    correct: 1,
    explanation: "Innovators are the first to adopt new ideas, representing approximately 2.5% of the adopter population. They are risk-takers, venturesome, and often have contact with scientific sources."
  },
  {
    id: "gt5_092", qNo: 92, subject: "extension",
    question: "The 'Training and Visit (T&V) system' of agricultural extension was introduced in India by:",
    options: ["NAARM", "World Bank (Daniel Benor)", "FAO", "Directorate of Extension"],
    correct: 1,
    explanation: "The T&V (Training and Visit) extension system was designed by Daniel Benor and supported by the World Bank. It was introduced in India in the 1970s."
  },
  {
    id: "gt5_093", qNo: 93, subject: "extension",
    question: "The concept of 'Knowledge, Attitude and Practice (KAP)' is most closely associated with:",
    options: ["Agricultural input supply", "Communication and behaviour change", "Farm credit", "Market development"],
    correct: 1,
    explanation: "KAP studies examine the relationship between knowledge, attitudes, and practices in the context of communication and behaviour change — widely used in extension and health education."
  },
  {
    id: "gt5_094", qNo: 94, subject: "extension",
    question: "Kisan Call Centre (KCC) operates in India on which toll-free number?",
    options: ["1551", "1800-180-1551", "1800-11-8800", "14141"],
    correct: 1,
    explanation: "Kisan Call Centre (KCC) operates on toll-free number 1800-180-1551 (24×7). Farmers can call for information on crop production, protection, and other agricultural queries."
  },
  {
    id: "gt5_095", qNo: 95, subject: "extension",
    question: "The 'Participatory Rural Appraisal (PRA)' is an approach where:",
    options: ["Experts diagnose problems for farmers", "Farmers are passive recipients of information", "Community members actively analyse their own situation", "Government officers design programmes unilaterally"],
    correct: 2,
    explanation: "PRA is a family of approaches where community members use visual tools (maps, matrices, transects) to actively analyse their own problems and plan solutions — a bottom-up approach."
  },
  // ── GENERAL AGRICULTURE (5) ──
  { id:"gt5_096", qNo:96, subject:"general-agriculture", question:"The Soil Health Card Scheme was launched in India in:", options:["2010","2012","2015","2017"], correct:2, explanation:"Soil Health Card Scheme was launched on 19 February 2015 to provide soil health cards to all farmers across the country, giving recommendations on nutrient management based on soil test results." },
  { id:"gt5_097", qNo:97, subject:"general-agriculture", question:"IARI (Indian Agricultural Research Institute) in New Delhi is also called:", options:["Green Institute","Pusa Institute","Agriculture Hub","Raj Institute"], correct:1, explanation:"IARI, established in 1905, is popularly known as 'Pusa Institute' as it was originally located at Pusa, Bihar before moving to New Delhi in 1936. It is India's premier agricultural research institution." },
  { id:"gt5_098", qNo:98, subject:"general-agriculture", question:"The concept of 'Evergreen Revolution' was given by:", options:["Norman Borlaug","C. Subramaniam","M.S. Swaminathan","V. Kurien"], correct:2, explanation:"Dr. M.S. Swaminathan coined 'Evergreen Revolution' to mean increasing productivity in perpetuity without causing ecological harm — combining food security with environmental sustainability." },
  { id:"gt5_099", qNo:99, subject:"general-agriculture", question:"Under PM-KISAN scheme, eligible farmers receive per year:", options:["₹2,000","₹4,000","₹6,000","₹10,000"], correct:2, explanation:"PM-KISAN (Pradhan Mantri Kisan Samman Nidhi), launched February 2019, provides ₹6,000 per year (₹2,000 each in 3 installments) as direct income support to all eligible farmer families." },
  { id:"gt5_100", qNo:100, subject:"general-agriculture", question:"The headquarters of FAO (Food and Agriculture Organization) is located at:", options:["Geneva, Switzerland","New York, USA","Rome, Italy","Vienna, Austria"], correct:2, explanation:"FAO is headquartered in Rome, Italy. It was founded in 1945 and works to defeat hunger worldwide. Its mandate covers food security, agriculture, forestry, fisheries and rural development." },
];
