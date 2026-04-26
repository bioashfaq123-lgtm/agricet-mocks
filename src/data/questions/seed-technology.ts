import { Question } from "@/types";

export const seedTechnologyQuestions: Question[] = [
  {
    id: "st001",
    subject: "seed-technology",
    question: "Seed germination percentage is tested by keeping seeds on:",
    options: ["Dry filter paper", "Moist blotter/sand at specified temperature for specified days", "Soil", "Water"],
    correct: 1,
    explanation: "Standard germination tests are conducted on moist blotter, sand, or paper at specified temperature (20-30°C for most crops) for a specified number of days as per ISTA rules."
  },
  {
    id: "st002",
    subject: "seed-technology",
    question: "The minimum germination percentage required for certified seeds of rice is:",
    options: ["70%", "80%", "85%", "90%"],
    correct: 2,
    explanation: "As per Indian seed certification standards, minimum germination percentage for certified seeds of rice (paddy) is 80%. For some sources it is specified as 80-85% depending on the variety."
  },
  {
    id: "st003",
    subject: "seed-technology",
    question: "Breeder seed is the seed produced by or under the supervision of:",
    options: ["Certified farmers", "Plant breeder/originating institute (the highest class of seed)", "NSC (National Seeds Corporation)", "State Seed Corporations"],
    correct: 1,
    explanation: "Breeder seed (golden yellow bag) is the initial seed stock produced by the plant breeder or originating institute. It is the source of all subsequent seed classes and has the highest genetic purity."
  },
  {
    id: "st004",
    subject: "seed-technology",
    question: "The correct sequence of seed classes in India is:",
    options: ["Certified → Foundation → Registered → Breeder", "Breeder → Foundation → Certified", "Foundation → Breeder → Certified", "Registered → Foundation → Breeder → Certified"],
    correct: 1,
    explanation: "The seed multiplication chain in India: Breeder Seed → Foundation Seed (I & II generation) → Certified Seed. Breeder seeds are produced by plant breeders, foundation by NSC/SSCs, certified by approved growers."
  },
  {
    id: "st005",
    subject: "seed-technology",
    question: "The colour of the tag on Certified seed bags in India is:",
    options: ["Golden yellow", "White", "Blue", "Green (Azure blue)"],
    correct: 2,
    explanation: "Certified seeds have BLUE coloured tags in India. Foundation seeds have WHITE tags, Breeder seeds have GOLDEN YELLOW tags, and Registered seeds have PURPLE tags."
  },
  {
    id: "st006",
    subject: "seed-technology",
    question: "Seed vigor is defined as:",
    options: ["Only germination percentage", "Sum total of properties that determine the level of activity and performance of seed lots during germination and seedling emergence", "Seed size only", "Seed moisture content"],
    correct: 1,
    explanation: "Seed vigor encompasses all properties that determine the potential for rapid, uniform emergence and development of normal seedlings under a wide range of field conditions."
  },
  {
    id: "st007",
    subject: "seed-technology",
    question: "Safe moisture content for storage of paddy seeds is:",
    options: ["18-20%", "14%", "12%", "8%"],
    correct: 2,
    explanation: "Safe storage moisture for paddy (rice) is 12-13% for short-term storage and below 12% for long-term storage. Excess moisture leads to fungal growth and seed deterioration."
  },
  {
    id: "st008",
    subject: "seed-technology",
    question: "ISTA stands for:",
    options: ["Indian Seed Testing Authority", "International Seed Testing Association", "Integrated Seed Technology Agency", "Indian Standards for Testing Agriculture"],
    correct: 1,
    explanation: "ISTA - International Seed Testing Association establishes international rules for seed testing (germination, purity, moisture, vigor) to facilitate global seed trade."
  },
  {
    id: "st009",
    subject: "seed-technology",
    question: "Seed treatment with thiram fungicide protects seeds from:",
    options: ["Insect damage", "Seed-borne and soil-borne fungal diseases", "Nematodes", "Rodents"],
    correct: 1,
    explanation: "Thiram is a broad-spectrum contact fungicide used as seed treatment to protect against seed-borne and soil-borne fungal pathogens during germination and early seedling growth."
  },
  {
    id: "st010",
    subject: "seed-technology",
    question: "Hybrid seed production in self-pollinated crops requires:",
    options: ["Natural pollination", "Hand emasculation and controlled pollination or use of CMS/male sterility", "Insect pollination only", "Wind pollination"],
    correct: 1,
    explanation: "Hybrid seed in self-pollinated crops requires controlled hybridization through hand emasculation, cytoplasmic male sterility (CMS), self-incompatibility, or chemical hybridizing agents."
  },
  {
    id: "st011",
    subject: "seed-technology",
    question: "The minimum isolation distance for foundation seed production of sorghum is:",
    options: ["100 m", "200 m", "300 m", "400 m"],
    correct: 2,
    explanation: "For foundation seed production of cross-pollinated crops like sorghum, minimum isolation distance is 300 m (certified seed: 200 m) to prevent unwanted cross-pollination."
  },
  {
    id: "st012",
    subject: "seed-technology",
    question: "Seed purity analysis involves separating:",
    options: ["Only clean seeds", "Pure seeds, other crop seeds, weed seeds, and inert matter", "Good seeds from bad seeds", "Large seeds from small seeds"],
    correct: 1,
    explanation: "Physical purity analysis separates the seed lot into four components: pure seeds of the species, other crop seeds, weed seeds, and inert matter (broken seeds, chaff, soil)."
  },
  {
    id: "st013",
    subject: "seed-technology",
    question: "The 1000 seed weight is important because it indicates:",
    options: ["Germination capacity", "Seed size, seed rate calculation, and seed quality", "Moisture content", "Seed age"],
    correct: 1,
    explanation: "1000 seed weight (TSW) indicates seed size and density, is used to calculate seed rate per hectare, and large, heavy seeds generally have higher vigor and better germination."
  },
  {
    id: "st014",
    subject: "seed-technology",
    question: "Tetrazolium (TZ) test for seed viability works on the principle of:",
    options: ["Seed color change", "Reduction of colorless TZ salt to red formazan by dehydrogenase enzymes in living tissue", "Seed weight measurement", "Chemical analysis"],
    correct: 1,
    explanation: "The Tetrazolium test uses 2,3,5-triphenyltetrazolium chloride (TZ). Living cells reduce the colorless TZ to red/pink formazan. Non-staining areas indicate dead tissue, allowing quick viability assessment."
  },
  {
    id: "st015",
    subject: "seed-technology",
    question: "The Seed Act of India was enacted in:",
    options: ["1947", "1954", "1966", "1975"],
    correct: 2,
    explanation: "The Seeds Act, 1966 provides for regulation of quality of certain seeds for sale, establishment of Central Seed Committee, and other matters related to seed quality in India."
  },
  {
    id: "st016",
    subject: "seed-technology",
    question: "CMS (Cytoplasmic Male Sterility) is used in hybrid seed production because:",
    options: ["Increases seed germination", "Makes plant unable to produce functional pollen, eliminating need for hand emasculation", "Improves seed storage", "Controls insect pests"],
    correct: 1,
    explanation: "CMS makes plants functionally male sterile (no viable pollen) due to cytoplasmic factors, eliminating the need for hand emasculation in hybrid seed production. Used widely in sorghum, bajra, sunflower, rice hybrids."
  },
  {
    id: "st017",
    subject: "seed-technology",
    question: "Accelerated Aging test is used to assess:",
    options: ["Physical purity", "Seed vigor by exposing seeds to high temperature and humidity stress conditions", "Germination percentage", "Seed moisture"],
    correct: 1,
    explanation: "Accelerated Aging (AA) test evaluates seed vigor by exposing seeds to 40-45°C and 100% RH for 24-96 hours. Low vigor seeds deteriorate faster under stress; survivors are counted as germination %."
  },
  {
    id: "st018",
    subject: "seed-technology",
    question: "The recommended spacing between rows for seed crop of wheat to maintain purity is:",
    options: ["15 cm", "22.5 cm", "30 cm", "45 cm"],
    correct: 1,
    explanation: "For wheat seed production, 22.5 cm row spacing is recommended as it allows better crop inspection, roguing of off-types, and better air circulation compared to broadcasting."
  },
  {
    id: "st019",
    subject: "seed-technology",
    question: "Pellet seeds (pelleted seeds) are:",
    options: ["Seeds coated with sand", "Seeds coated with inert material to give uniform round shape for precision planting", "Seeds treated with pesticide only", "Large seeds of any crop"],
    correct: 1,
    explanation: "Pelleted seeds are coated with inert materials (clay, chalk, lime) to give them a uniform, round shape and size, enabling precision (mechanical) planting at desired spacing, especially for small vegetable seeds."
  },
  {
    id: "st020",
    subject: "seed-technology",
    question: "Roguing in seed production refers to:",
    options: ["Adding fertilizers", "Removal of off-type plants, diseased plants, weedy plants from the seed crop", "Harvesting seeds", "Seed treatment"],
    correct: 1,
    explanation: "Roguing is the removal of off-type plants (genetically different), diseased plants, weedy plants, and plants of other varieties from the seed crop to maintain genetic and physical purity."
  },
  {
    id: "st021",
    subject: "seed-technology",
    question: "The moisture content of seeds is determined by:",
    options: ["Visual inspection", "Oven drying method at 130°C for 1 hour or 103°C for 17 hours", "Weighing seeds", "Colour change"],
    correct: 1,
    explanation: "Standard seed moisture is determined by the oven-drying method: low constant temperature (LCT) at 103±2°C for 17 hours or high constant temperature (HCT) at 130±2°C for 1 hour."
  },
  {
    id: "st022",
    subject: "seed-technology",
    question: "Foundation seed tag color in India is:",
    options: ["Blue", "Golden yellow", "White", "Green"],
    correct: 2,
    explanation: "Foundation seeds carry WHITE colored tags in India. White tag indicates the seed meets all requirements of foundation seed class with high genetic purity."
  },
  {
    id: "st023",
    subject: "seed-technology",
    question: "Seed treatment with Rhizobium inoculant benefits:",
    options: ["All crops", "Only legume crops (pulses) to enhance nitrogen fixation", "Only cereals", "Oil seed crops"],
    correct: 1,
    explanation: "Rhizobium inoculant treatment benefits legume crops (groundnut, soybean, Bengal gram, green gram) by inoculating seeds with nitrogen-fixing bacteria that form nodules on roots."
  },
  {
    id: "st024",
    subject: "seed-technology",
    question: "Seed certification ensures:",
    options: ["Maximum profit for farmers", "That the seed meets minimum standards for genetic purity, physical purity, germination and health", "Free seed distribution", "Hybrid seed production only"],
    correct: 1,
    explanation: "Seed certification is a quality assurance program that ensures certified seeds meet established standards for genetic identity, purity, germination, moisture, and health through field inspection and laboratory testing."
  },
  {
    id: "st025",
    subject: "seed-technology",
    question: "Physiological maturity of seed is indicated by:",
    options: ["Maximum seed size", "Maximum dry weight, maximum germination, and formation of black layer in maize", "Yellow color of plant", "Harvesting time"],
    correct: 1,
    explanation: "Physiological maturity is when seeds reach maximum dry weight, maximum germination potential, and maximum vigor. In maize, it is marked by formation of a black (abscission) layer at seed base."
  },
  {
    id: "st026",
    subject: "seed-technology",
    question: "Controlled atmosphere storage for seeds uses:",
    options: ["High oxygen", "Reduced oxygen and increased CO₂ or nitrogen to extend shelf life", "High humidity", "Normal air"],
    correct: 1,
    explanation: "Controlled atmosphere (CA) storage reduces oxygen (to 1-5%) and increases CO₂ or nitrogen, slowing respiration and insect activity, thereby extending seed viability and quality."
  },
  {
    id: "st027",
    subject: "seed-technology",
    question: "The minimum field inspection required for certified seed production is:",
    options: ["1 inspection", "2-3 inspections (at vegetative, flowering and pre-harvest stages)", "5 inspections", "Only at harvest"],
    correct: 1,
    explanation: "Minimum 2-3 field inspections are required: at vegetative stage (to check isolation and off-types), at flowering/heading (critical stage for roguing), and before harvest (final inspection)."
  },
  {
    id: "st028",
    subject: "seed-technology",
    question: "Hard seed in legumes is due to:",
    options: ["High starch content", "Impermeable seed coat that prevents water absorption", "Over-drying", "Storage at high temperature"],
    correct: 1,
    explanation: "Hard seeds have an impermeable seed coat (due to a layer of palisade cells) that prevents water absorption and is a form of physical dormancy. Scarification breaks this dormancy."
  },
  {
    id: "st029",
    subject: "seed-technology",
    question: "Seed priming (hydropriming/osmopriming) improves:",
    options: ["Seed color", "Speed and uniformity of germination by allowing controlled hydration", "Seed size", "Seed coat color"],
    correct: 1,
    explanation: "Seed priming allows seeds to imbibe water and initiate early metabolic processes without radicle emergence, then re-drying. This improves germination speed, uniformity, and seedling establishment under stress."
  },
  {
    id: "st030",
    subject: "seed-technology",
    question: "The recommended seed rate for wheat is approximately:",
    options: ["10-15 kg/ha", "50-75 kg/ha", "100-125 kg/ha", "200 kg/ha"],
    correct: 2,
    explanation: "Recommended seed rate for wheat is 100-125 kg/ha for timely sown crop. It may increase to 125-150 kg/ha for late sowing. Seed rate = (Plant density × 1000 seed weight) / (% germination × % field emergence)."
  },
  {
    id: "st031",
    subject: "seed-technology",
    question: "Electrical conductivity test in seeds measures:",
    options: ["Soil conductivity", "Seed vigor - leachate from seeds with damaged membranes has higher EC indicating low vigor", "Moisture content", "Nutrient content"],
    correct: 1,
    explanation: "EC test measures the electrolytes (ions) leached from soaked seeds. Low vigor seeds with damaged membranes leak more solutes, resulting in higher EC of soak water."
  },
  {
    id: "st032",
    subject: "seed-technology",
    question: "National Seeds Corporation (NSC) was established in:",
    options: ["1947", "1963", "1966", "1975"],
    correct: 1,
    explanation: "National Seeds Corporation (NSC) was established in 1963 to produce and supply quality seeds of improved varieties at reasonable prices and to promote seed production in India."
  },
  {
    id: "st033",
    subject: "seed-technology",
    question: "Seed lot sampling for testing follows the principle of:",
    options: ["Random sampling using ISTA rules", "Sampling from top of bag only", "Sampling the heaviest seeds", "Sampling from 5 bags only"],
    correct: 0,
    explanation: "Seed lot sampling follows ISTA (International Seed Testing Association) rules for random sampling using sampling equipment (probe, spear, trier) from multiple points throughout the lot."
  },
  {
    id: "st034",
    subject: "seed-technology",
    question: "The working sample for germination test is taken from the:",
    options: ["Original lot directly", "Composite sample after thorough mixing and quartering", "Top layer of the bag", "Any convenient location"],
    correct: 1,
    explanation: "The working sample for germination testing is obtained from the composite sample after thorough mixing using a soil divider or quartering method to ensure representative samples."
  },
  {
    id: "st035",
    subject: "seed-technology",
    question: "Seed dormancy is beneficial because it:",
    options: ["Reduces germination", "Prevents premature germination under unsuitable conditions and aids seed dispersal", "Reduces seed quality", "Causes storage problems"],
    correct: 1,
    explanation: "Seed dormancy prevents premature germination during unfavorable conditions (drought, frost), allows time for seed dispersal, and ensures seeds germinate when conditions are optimal for seedling survival."
  },
  {
    id: "st036",
    subject: "seed-technology",
    question: "Truthfully Labelled (TL) seeds are those where:",
    options: ["Seeds are certified by agency", "Seller truthfully declares on the label the contents, variety, and quality parameters without third-party certification", "Seeds are only government certified", "Hybrid seeds only"],
    correct: 1,
    explanation: "Truthfully Labelled (TL) seeds are sold with a label truthfully declaring variety name, germination %, purity, and other parameters. They don't require formal certification but the seller takes responsibility."
  },
  {
    id: "st037",
    subject: "seed-technology",
    question: "Hermetic storage uses:",
    options: ["Refrigeration", "Airtight containers that create low O₂ and high CO₂ atmosphere to protect seeds", "Chemical fumigation", "Ventilated storage"],
    correct: 1,
    explanation: "Hermetic storage uses airtight containers (metal bins, triple-layered bags) where seed respiration and insect activity consume O₂ and produce CO₂, creating a modified atmosphere that prevents deterioration."
  },
  {
    id: "st038",
    subject: "seed-technology",
    question: "The gene bank stores seeds at:",
    options: ["Room temperature", "-18°C to -20°C (long-term storage for 100+ years)", "0°C to 5°C", "10°C to 15°C"],
    correct: 1,
    explanation: "Long-term gene bank storage at -18°C to -20°C (base collection) can maintain seed viability for 100+ years. Medium-term storage at 0-4°C keeps seeds viable for 10-50 years."
  },
  {
    id: "st039",
    subject: "seed-technology",
    question: "The purity percentage of seed lot = (Weight of pure seed / Total weight of working sample) × 100. This is called:",
    options: ["Germination purity", "Physical or analytical purity", "Genetic purity", "True purity"],
    correct: 1,
    explanation: "Physical (analytical) purity = (Weight of pure seeds / Total weight of working sample) × 100. It determines the proportion of pure seed versus other crop seeds, weed seeds, and inert matter."
  },
  {
    id: "st040",
    subject: "seed-technology",
    question: "Cold test for seed vigor simulates:",
    options: ["Hot season conditions", "Cold, wet soil conditions that seeds face during early spring planting", "Drought conditions", "Flooding conditions"],
    correct: 1,
    explanation: "Cold test evaluates seed vigor by germinating seeds at 10°C for 7 days in cold, wet soil inoculated with natural soil microflora, simulating difficult field conditions of early spring planting."
  },
  {
    id: "st041",
    subject: "seed-technology",
    question: "Seed treatment with Azospirillum inoculant benefits which crops?",
    options: ["Legumes only", "Cereals (rice, wheat, maize, sorghum) and non-legumes", "Vegetables only", "Fruit crops"],
    correct: 1,
    explanation: "Azospirillum is an associative nitrogen-fixing bacteria that benefits cereal crops (rice, wheat, maize, sorghum) and other non-legumes through nitrogen fixation and growth-promoting substances."
  },
  {
    id: "st042",
    subject: "seed-technology",
    question: "Transgenic (GM) seeds require approval from:",
    options: ["Only state governments", "GEAC (Genetic Engineering Approval/Appraisal Committee) under Ministry of Environment", "Seed companies only", "ICAR only"],
    correct: 1,
    explanation: "Transgenic/GM seeds require approval from GEAC (Genetic Engineering Appraisal Committee) under Ministry of Environment, Forest and Climate Change before commercial release in India."
  },
  {
    id: "st043",
    subject: "seed-technology",
    question: "The Protection of Plant Varieties and Farmers' Rights Act (PPV&FR Act) was enacted in:",
    options: ["1966", "1985", "2001", "2010"],
    correct: 2,
    explanation: "The PPV&FR Act 2001 provides protection to plant breeders' rights and farmers' rights regarding new plant varieties. It established the Plant Varieties Protection and Farmers Rights Authority."
  },
  {
    id: "st044",
    subject: "seed-technology",
    question: "Seed rate is influenced by:",
    options: ["Only seed size", "Germination %, field emergence %, seed size (1000 seed weight), plant density, and spacing", "Only plant spacing", "Weather conditions only"],
    correct: 1,
    explanation: "Seed rate = (Plant density × 1000 seed weight) / (% germination × % field emergence × 10). It depends on all these factors to achieve the desired plant stand."
  },
  {
    id: "st045",
    subject: "seed-technology",
    question: "The role of Seed Testing Laboratory is to:",
    options: ["Produce seeds", "Analyze seed quality (germination, purity, moisture, health) and issue seed analysis reports", "Store seeds", "Distribute seeds"],
    correct: 1,
    explanation: "Seed Testing Laboratories analyze seed samples for germination, physical purity, moisture content, seed health, vigor, and other parameters, issuing certificates for domestic use or export/import."
  },
  {
    id: "st046",
    subject: "seed-technology",
    question: "Genetic erosion refers to:",
    options: ["Soil erosion affecting seed production", "Loss of genetic diversity of traditional crop varieties due to replacement by modern varieties", "Seed quality deterioration", "Pest damage to seeds"],
    correct: 1,
    explanation: "Genetic erosion is the loss of genetic diversity of traditional varieties and landraces as farmers replace them with modern high-yielding varieties, reducing the genetic base for future breeding."
  },
  {
    id: "st047",
    subject: "seed-technology",
    question: "Seed enhancement techniques include:",
    options: ["Only pelleting", "Priming, coating, pelleting, film coating, and seed dressing", "Only chemical treatment", "Only sizing"],
    correct: 1,
    explanation: "Seed enhancement includes priming (controlled hydration), pelleting, film coating, polymer coating, seed dressing with fungicides/insecticides/biostimulants to improve performance."
  },
  {
    id: "st048",
    subject: "seed-technology",
    question: "The ideal seed lot for planting should have germination of at least:",
    options: ["50%", "70%", "As specified by variety (usually 80-95%)", "100%"],
    correct: 2,
    explanation: "Minimum germination requirements vary by crop and seed class. Most certified seeds require 80-95% germination (wheat: 85%, paddy: 80%, maize: 90%) as per Indian seed standards."
  },
  {
    id: "st049",
    subject: "seed-technology",
    question: "NSAI stands for:",
    options: ["National Seed Association of India", "National Standards for Agriculture Integration", "National Seed Agency of India", "National System for Agriculture Inputs"],
    correct: 0,
    explanation: "NSAI - National Seed Association of India represents private sector seed companies and promotes the development of the seed industry in India through advocacy and collective initiatives."
  },
  {
    id: "st050",
    subject: "seed-technology",
    question: "Indigenous seeds (landraces) are important because:",
    options: ["They have highest yields", "They have adapted to local conditions, farmer-managed, and repository of genetic diversity", "They are government developed", "They are easier to certify"],
    correct: 1,
    explanation: "Landraces (indigenous/traditional varieties) are locally adapted, often climate-resilient, contain valuable genes for stress tolerance, are maintained by farmers over generations, and are irreplaceable genetic resources."
  },
];
