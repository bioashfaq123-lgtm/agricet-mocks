import { Question } from "@/types";

export const cropPhysiologyQuestions: Question[] = [
  {
    id: "cp001",
    subject: "crop-physiology",
    question: "Photosynthesis occurs in which organelle of plant cells?",
    options: ["Mitochondria", "Chloroplast", "Ribosome", "Nucleus"],
    correct: 1,
    explanation: "Photosynthesis occurs in the chloroplast, specifically in the thylakoid membranes (light reactions) and stroma (dark reactions/Calvin cycle)."
  },
  {
    id: "cp002",
    subject: "crop-physiology",
    question: "The overall equation of photosynthesis is:",
    options: ["6CO₂ + 6O₂ → C₆H₁₂O₆ + 6H₂O", "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O", "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂", "C₆H₁₂O₆ → CO₂ + H₂O + Energy"],
    correct: 2,
    explanation: "The overall photosynthesis equation: 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂. Carbon dioxide and water are converted to glucose and oxygen using light energy."
  },
  {
    id: "cp003",
    subject: "crop-physiology",
    question: "C4 plants are more efficient in photosynthesis than C3 plants because:",
    options: ["They have more leaves in plant growth", "They have larger seeds during germination", "They grow faster in crop physiology", "They have CO₂ concentrating mechanism that reduces photorespiration"],
    correct: 3,
    explanation: "C4 plants (maize, sugarcane, sorghum) have a CO₂ concentrating mechanism using PEP carboxylase in mesophyll cells that suppresses photorespiration, making them more efficient in hot, sunny conditions."
  },
  {
    id: "cp004",
    subject: "crop-physiology",
    question: "Which of the following is a C4 crop?",
    options: ["Wheat", "Maize", "Rice", "Soybean"],
    correct: 1,
    explanation: "Maize (corn) is a C4 plant. Other C4 crops include sugarcane, sorghum, pearl millet, and napier grass. C3 crops include wheat, rice, soybean, cotton, and most legumes."
  },
  {
    id: "cp005",
    subject: "crop-physiology",
    question: "Transpiration in plants primarily occurs through:",
    options: ["Roots", "Stem bark", "Stomata on leaves", "Fruits"],
    correct: 2,
    explanation: "About 90-95% of transpiration occurs through stomata (stomatal transpiration). A small amount occurs through the cuticle (cuticular transpiration) and lenticels (lenticular transpiration)."
  },
  {
    id: "cp006",
    subject: "crop-physiology",
    question: "The process of respiration in plants produces:",
    options: ["Oxygen and glucose", "Only water in crop physiology", "Only CO₂ in plant growth", "Carbon dioxide, water and ATP (energy)"],
    correct: 3,
    explanation: "Aerobic respiration: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 38 ATP. It breaks down glucose to release energy (ATP) along with CO₂ and water as byproducts."
  },
  {
    id: "cp007",
    subject: "crop-physiology",
    question: "Photoperiodism refers to the response of plants to:",
    options: ["Relative length of day and night (photoperiod)", "Light intensity in plant growth", "Light quality (color) in crop physiology", "Light direction during germination"],
    correct: 0,
    explanation: "Photoperiodism is the physiological response of plants to the relative length of day and night periods. It controls flowering, dormancy, and other developmental processes."
  },
  {
    id: "cp008",
    subject: "crop-physiology",
    question: "Short day plants (SDP) flower when:",
    options: ["Night length exceeds critical dark period", "Day length exceeds critical photoperiod", "Days and nights are equal", "Temperature is low"],
    correct: 0,
    explanation: "Short day plants require a continuous dark period (night) longer than a critical duration to flower. They actually respond to long nights, not short days. Examples: rice, sugarcane, soybean."
  },
  {
    id: "cp009",
    subject: "crop-physiology",
    question: "Vernalization is the process by which:",
    options: ["Seeds are coated with chemicals", "Low temperature requirement for flowering is satisfied", "Plants are protected from frost", "Warm temperature promotes growth"],
    correct: 1,
    explanation: "Vernalization is the process by which plants are exposed to low temperatures (0-10°C) for a required period to enable subsequent flowering. Winter wheat and some biennials require vernalization."
  },
  {
    id: "cp010",
    subject: "crop-physiology",
    question: "The leaf area index (LAI) is defined as:",
    options: ["Number of leaves per plant", "Total one-sided leaf area per unit ground area", "Leaf weight per plant in plant growth", "Leaf thickness in crop physiology"],
    correct: 1,
    explanation: "Leaf Area Index (LAI) = Total one-sided leaf area (m²) / Ground area (m²). It indicates canopy development. Optimum LAI for maximum photosynthesis varies by crop (3-5 for most crops)."
  },
  {
    id: "cp011",
    subject: "crop-physiology",
    question: "The Harvest Index (HI) is defined as:",
    options: ["Leaf area / Ground area", "Total biomass / Grain yield", "Root weight / Shoot weight", "Grain yield / Biological yield"],
    correct: 3,
    explanation: "Harvest Index = Economic yield (grain) / Biological yield (total biomass above ground). Modern high-yielding varieties have higher HI (0.4-0.6) compared to traditional varieties (0.2-0.3)."
  },
  {
    id: "cp012",
    subject: "crop-physiology",
    question: "Auxin (IAA) promotes:",
    options: ["Cell division only in plant growth", "Flowering according to plant physiology and crop science principles", "Cell elongation, apical dominance, rooting in cuttings, and fruit development", "Seed germination according to plant physiology and crop science principles"],
    correct: 2,
    explanation: "Indole Acetic Acid (IAA/Auxin) promotes cell elongation, maintains apical dominance, stimulates root initiation in cuttings, and promotes fruit development. It is synthesized in shoot apex."
  },
  {
    id: "cp013",
    subject: "crop-physiology",
    question: "Gibberellins (GA) are mainly known for:",
    options: ["Root growth in plant growth", "Closing stomata in crop physiology", "Stem elongation, breaking dormancy, flowering in long day plants", "Fruit ripening according to plant physiology and crop science principles"],
    correct: 2,
    explanation: "Gibberellins promote internodal elongation (stem elongation), break seed and bud dormancy, substitute for vernalization and photoperiod in some plants, and promote fruit development."
  },
  {
    id: "cp014",
    subject: "crop-physiology",
    question: "Cytokinin promotes:",
    options: ["Cell elongation in plant growth", "Cell division and delays senescence (aging) in leaves", "Root elongation in crop physiology", "Fruit drop according to plant physiology and crop science principles"],
    correct: 1,
    explanation: "Cytokinins promote cell division (cytokinesis), delay leaf senescence (yellowing), promote lateral bud growth, and are involved in nutrient mobilization."
  },
  {
    id: "cp015",
    subject: "crop-physiology",
    question: "Abscisic acid (ABA) is known as the 'stress hormone' because it:",
    options: ["Promotes growth under stress in plant growth", "Causes stomatal closure during drought and promotes dormancy", "Increases water uptake in crop physiology", "Promotes flowering during germination"],
    correct: 1,
    explanation: "ABA promotes stomatal closure during water stress (drought), promotes seed and bud dormancy, and triggers leaf abscission. It is produced in stressed leaves and roots."
  },
  {
    id: "cp016",
    subject: "crop-physiology",
    question: "Ethylene promotes:",
    options: ["Cell elongation in plant growth", "Germination according to plant physiology and crop science principles", "Root growth in crop physiology", "Fruit ripening, leaf and fruit abscission, and stress response"],
    correct: 3,
    explanation: "Ethylene is a gaseous hormone that promotes fruit ripening, leaf and fruit abscission (dropping), flowering in some plants (pineapple), and various stress responses."
  },
  {
    id: "cp017",
    subject: "crop-physiology",
    question: "The dark reactions of photosynthesis (Calvin Cycle) occur in:",
    options: ["Stroma of chloroplast", "Thylakoid membranes", "Cytoplasm", "Mitochondria"],
    correct: 0,
    explanation: "The Calvin Cycle (dark reactions/carbon fixation) occurs in the stroma of the chloroplast. ATP and NADPH produced in the light reactions are used to fix CO₂ into sugar."
  },
  {
    id: "cp018",
    subject: "crop-physiology",
    question: "Crop growth rate (CGR) is defined as:",
    options: ["Height increase per day in plant growth", "Root growth per day according to plant physiology and crop science principles", "Number of leaves per day in crop physiology", "Increase in dry matter per unit land area per unit time"],
    correct: 3,
    explanation: "Crop Growth Rate (CGR) = Increase in dry matter (g) / Ground area (m²) × Time. It measures overall crop productivity per unit land area."
  },
  {
    id: "cp019",
    subject: "crop-physiology",
    question: "Which pigment is responsible for photoperiodic responses in plants?",
    options: ["Chlorophyll a", "Carotenoid", "Anthocyanin", "Phytochrome"],
    correct: 3,
    explanation: "Phytochrome is the photoreceptor pigment responsible for photoperiodic responses. It exists in two interconvertible forms: Pr (red light absorbing) and Pfr (far-red light absorbing)."
  },
  {
    id: "cp020",
    subject: "crop-physiology",
    question: "Seed germination requires:",
    options: ["Light always in plant growth", "Adequate water, oxygen and suitable temperature", "High nitrogen soil", "Sandy soil only"],
    correct: 1,
    explanation: "Basic requirements for seed germination are: adequate water (for imbibition and metabolic activation), oxygen (for aerobic respiration), and suitable temperature (for enzyme activity)."
  },
  {
    id: "cp021",
    subject: "crop-physiology",
    question: "The minimum, optimum and maximum temperature for germination of most crops are approximately:",
    options: ["0, 10, 20°C", "5-10°C, 25-30°C, 40-45°C", "15, 35, 50°C", "0, 20, 30°C"],
    correct: 1,
    explanation: "For most tropical and subtropical crops: minimum 5-10°C, optimum 25-30°C, maximum 40-45°C. These cardinal temperatures govern germination enzyme activity."
  },
  {
    id: "cp022",
    subject: "crop-physiology",
    question: "Apical dominance is caused by:",
    options: ["Auxin produced at shoot apex suppressing lateral bud growth", "High cytokinin at apex in plant growth", "Gibberellin according to plant physiology and crop science principles", "ABA according to plant physiology and crop science principles"],
    correct: 0,
    explanation: "Apical dominance occurs when auxin (IAA) produced at the shoot apex moves downward and inhibits the growth of lateral buds. Removing the apex (decapitation) releases lateral buds."
  },
  {
    id: "cp023",
    subject: "crop-physiology",
    question: "Photorespiration occurs in which plants?",
    options: ["Only C4 plants in plant growth", "Only CAM plants in crop physiology", "C3 plants at high temperature and light", "All plants equally during germination"],
    correct: 2,
    explanation: "Photorespiration is significant in C3 plants at high temperature and high light intensity when O₂ competes with CO₂ for RuBisCO, fixing oxygen instead of carbon dioxide, reducing photosynthetic efficiency."
  },
  {
    id: "cp024",
    subject: "crop-physiology",
    question: "Sugarcane belongs to which photosynthetic pathway?",
    options: ["C4", "C3", "CAM", "C2"],
    correct: 0,
    explanation: "Sugarcane (Saccharum officinarum) is a C4 plant. It uses the C4 (Hatch-Slack) pathway for carbon fixation, making it highly efficient in converting sunlight to biomass in tropical conditions."
  },
  {
    id: "cp025",
    subject: "crop-physiology",
    question: "The process of movement of food from leaves to other parts of the plant through phloem is called:",
    options: ["Transpiration", "Respiration", "Absorption", "Translocation"],
    correct: 3,
    explanation: "Translocation is the transport of photosynthates (sugars) from source (leaves) to sink (roots, fruits, seeds) through the phloem tissue via the pressure flow mechanism."
  },
  {
    id: "cp026",
    subject: "crop-physiology",
    question: "Water potential (ψ) of pure water at standard conditions is:",
    options: ["-1 MPa", "+1 MPa", "Zero (0)", "Variable"],
    correct: 2,
    explanation: "Water potential of pure water at standard temperature and pressure is zero (0). All solutions and plant cells have negative water potential. Water moves from higher to lower water potential."
  },
  {
    id: "cp027",
    subject: "crop-physiology",
    question: "Osmosis is the movement of:",
    options: ["Water from high water potential to low water potential through semi-permeable membrane", "Solutes from low to high concentration in plant growth", "Water against concentration gradient in crop physiology", "Minerals through membranes according to plant physiology and crop science principles"],
    correct: 0,
    explanation: "Osmosis is the movement of water molecules from a region of high water potential (dilute solution) to low water potential (concentrated solution) through a semi-permeable membrane."
  },
  {
    id: "cp028",
    subject: "crop-physiology",
    question: "The source of oxygen released during photosynthesis is:",
    options: ["CO₂", "O₂ in air", "H₂O (water photolysis)", "Soil minerals"],
    correct: 2,
    explanation: "Oxygen released during photosynthesis comes from the photolysis (splitting) of water molecules: 2H₂O → 4H⁺ + 4e⁻ + O₂. This was confirmed by ¹⁸O isotope experiments."
  },
  {
    id: "cp029",
    subject: "crop-physiology",
    question: "Net Assimilation Rate (NAR) is:",
    options: ["Total photosynthesis rate according to plant physiology and crop science principles", "Respiration rate according to plant physiology and crop science principles", "Increase in plant dry weight per unit leaf area per unit time", "Transpiration rate according to plant physiology and crop science principles"],
    correct: 2,
    explanation: "Net Assimilation Rate (NAR) = (Increase in dry weight) / (Leaf area × Time). It measures the efficiency of leaves in producing dry matter (net photosynthesis)."
  },
  {
    id: "cp030",
    subject: "crop-physiology",
    question: "Crassulacean Acid Metabolism (CAM) plants open stomata:",
    options: ["During night to fix CO₂ as malic acid", "During day in plant growth", "Only in morning in crop physiology", "Continuously according to plant physiology and crop science principles"],
    correct: 0,
    explanation: "CAM plants (succulents like agave, pineapple) open stomata at night to fix CO₂ as malic acid (to prevent water loss during hot days), then close stomata and use stored CO₂ for photosynthesis during daylight."
  },
  {
    id: "cp031",
    subject: "crop-physiology",
    question: "Growth analysis in crops uses the parameter RGR which stands for:",
    options: ["Root Growth Rate", "Real Growth Rate", "Relative Growth Rate", "Rapid Growth Ratio"],
    correct: 2,
    explanation: "RGR (Relative Growth Rate) = (ln W₂ - ln W₁) / (t₂ - t₁), where W is dry weight and t is time. It measures growth efficiency relative to the size of the plant."
  },
  {
    id: "cp032",
    subject: "crop-physiology",
    question: "Dormancy in seeds can be broken by:",
    options: ["High temperature only according to plant physiology and crop science principles", "Deep planting according to plant physiology and crop science principles", "High humidity only according to plant physiology and crop science principles", "Scarification, stratification, light exposure, or hormonal treatment depending on dormancy type"],
    correct: 3,
    explanation: "Seed dormancy can be broken by: scarification (mechanical or acid treatment of hard seed coat), stratification (cold treatment), light exposure, chemicals (KNO₃, GA₃, ethylene), or combinations thereof."
  },
  {
    id: "cp033",
    subject: "crop-physiology",
    question: "The critical photoperiod in short day plants is the:",
    options: ["Maximum day length permitting flowering", "Maximum night length tolerated without flowering", "Minimum day length for flowering", "Minimum light intensity"],
    correct: 0,
    explanation: "In short day plants, the critical photoperiod is the maximum day length (minimum night length) that still permits flowering. If day length exceeds this, flowering is inhibited."
  },
  {
    id: "cp034",
    subject: "crop-physiology",
    question: "What happens to plant growth when temperature is below the minimum cardinal temperature?",
    options: ["Growth accelerates", "Plant dies immediately", "Growth stops but plant survives", "Flowering occurs"],
    correct: 2,
    explanation: "Below the minimum cardinal temperature, enzyme activity ceases and metabolic processes stop, so growth stops. The plant may survive in a dormant state unless frost damage occurs."
  },
  {
    id: "cp035",
    subject: "crop-physiology",
    question: "Pineapple flowering is induced commercially by:",
    options: ["Ethylene (ethephon/Ethrel) application", "GA₃ spraying", "ABA treatment", "Cytokinin spraying"],
    correct: 0,
    explanation: "Pineapple flowering is induced commercially by ethylene treatment (using ethephon/Ethrel or calcium carbide) to synchronize flowering and harvesting in pineapple plantations."
  },
  {
    id: "cp036",
    subject: "crop-physiology",
    question: "The Compensation Point in photosynthesis is the light intensity at which:",
    options: ["Photosynthesis equals respiration (net CO₂ exchange = 0)", "Maximum photosynthesis occurs in plant growth", "Plant stops transpiring in crop physiology", "Stomata close during germination"],
    correct: 0,
    explanation: "The Light Compensation Point is the light intensity at which the rate of photosynthesis exactly equals the rate of respiration, so there is no net gain or loss of CO₂."
  },
  {
    id: "cp037",
    subject: "crop-physiology",
    question: "Grain filling in cereals involves:",
    options: ["Only current photosynthesis according to plant physiology and crop science principles", "Soil moisture absorption according to plant physiology and crop science principles", "Root nutrient uptake only in crop physiology", "Transport of photoassimilates from flag leaf and stem reserves to developing grains"],
    correct: 3,
    explanation: "Grain filling involves translocation of current photosynthates (mainly from flag leaf) and remobilization of previously stored carbohydrates from stem to developing grains through phloem."
  },
  {
    id: "cp038",
    subject: "crop-physiology",
    question: "Which plant hormone is responsible for fruit drop (abscission)?",
    options: ["Auxin (prevents abscission)", "Ethylene and ABA (promote abscission)", "Cytokinin in plant growth", "Gibberellin in crop physiology"],
    correct: 1,
    explanation: "Ethylene and ABA promote abscission (dropping) of fruits and leaves by stimulating the formation of the abscission zone. Auxin generally delays abscission when present in sufficient amounts."
  },
  {
    id: "cp039",
    subject: "crop-physiology",
    question: "The region of most active cell division in roots is the:",
    options: ["Meristematic zone just above root cap", "Quiescent centre in crop physiology", "Zone of elongation", "Root cap in plant growth"],
    correct: 0,
    explanation: "Active cell division occurs in the meristematic zone just above the root cap (root apical meristem). The quiescent centre has slow-dividing cells that act as organizer for surrounding meristematic cells."
  },
  {
    id: "cp040",
    subject: "crop-physiology",
    question: "Senescence in plants is associated with:",
    options: ["Breakdown of chlorophyll, proteins, and cell contents with remobilization of nutrients", "Increased chlorophyll content according to plant physiology and crop science principles", "Increased photosynthesis according to plant physiology and crop science principles", "Cell division according to plant physiology and crop science principles"],
    correct: 0,
    explanation: "Senescence involves programmed degradation of cellular components - chlorophyll breaks down (leaves yellow), proteins are hydrolyzed, and nutrients (N, P, K) are remobilized to developing seeds or storage organs."
  },
  {
    id: "cp041",
    subject: "crop-physiology",
    question: "The concept of 'Source' and 'Sink' in crop physiology refers to:",
    options: ["Water source and drainage", "Root source and leaf sink", "Photosynthate producing (source) and consuming/storing (sink) organs", "CO₂ source and O₂ sink"],
    correct: 2,
    explanation: "Source organs (leaves, stems) produce or store photosynthates. Sink organs (roots, fruits, seeds, growing meristems) import and utilize photosynthates. Phloem transport moves assimilates from source to sink."
  },
  {
    id: "cp042",
    subject: "crop-physiology",
    question: "Heat sum (degree days) concept is used to predict:",
    options: ["Rainfall amount in plant growth", "Disease incidence according to plant physiology and crop science principles", "Soil temperature in crop physiology", "Crop development stages and maturity based on accumulated temperature"],
    correct: 3,
    explanation: "Heat sum (Growing Degree Days/GDD) accumulates daily temperature above base temperature to predict crop developmental stages (emergence, flowering, maturity) as crops respond to temperature rather than calendar days."
  },
  {
    id: "cp043",
    subject: "crop-physiology",
    question: "Flag leaf in wheat is important because:",
    options: ["It is the largest leaf", "It produces pollen in plant growth", "It helps in water absorption", "It contributes 30-40% of photosynthate for grain filling"],
    correct: 3,
    explanation: "The flag leaf (last leaf before the spike) in wheat is the most important leaf, contributing 30-40% of total photosynthate for grain filling. Protecting it from disease is crucial for yield."
  },
  {
    id: "cp044",
    subject: "crop-physiology",
    question: "Stomata open in response to:",
    options: ["Darkness", "Blue light and low CO₂", "High CO₂ concentration", "ABA treatment"],
    correct: 1,
    explanation: "Stomata open in response to blue light (which activates proton pumps in guard cells) and low CO₂ concentration. They close in darkness, high CO₂, ABA, and water stress."
  },
  {
    id: "cp045",
    subject: "crop-physiology",
    question: "Biological yield includes:",
    options: ["Only grain weight in plant growth", "Grain plus root weight during germination", "Root weight only in crop physiology", "Total dry matter produced by the crop (above ground)"],
    correct: 3,
    explanation: "Biological yield is the total dry matter (biomass) produced by the crop above ground, including leaves, stems, and grain. Harvest Index = Economic yield / Biological yield."
  },
  {
    id: "cp046",
    subject: "crop-physiology",
    question: "The florigen (flowering hormone) is now known to be:",
    options: ["Gibberellin according to plant physiology and crop science principles", "Florigen protein (FT protein) produced in leaves and transported to apex", "Auxin according to plant physiology and crop science principles", "Cytokinin according to plant physiology and crop science principles"],
    correct: 1,
    explanation: "Florigen, the hypothetical flowering hormone, is now identified as the Flowering Locus T (FT) protein, produced in leaves in response to photoperiod and transported through phloem to the shoot apex to induce flowering."
  },
  {
    id: "cp047",
    subject: "crop-physiology",
    question: "The process by which plants lose water in liquid form from leaf margins is called:",
    options: ["Transpiration", "Guttation", "Exudation", "Osmosis"],
    correct: 1,
    explanation: "Guttation is the loss of water in liquid form (as droplets) from hydathodes at leaf margins or tips, usually at night or early morning when root pressure is high and transpiration is low."
  },
  {
    id: "cp048",
    subject: "crop-physiology",
    question: "Crop lodging is mainly caused by:",
    options: ["Excess sunlight according to plant physiology and crop science principles", "Weak stem due to excess nitrogen, tall varieties, and wind/rain damage", "Water deficit according to plant physiology and crop science principles", "Low temperature according to plant physiology and crop science principles"],
    correct: 1,
    explanation: "Lodging (falling over of crop) is caused by weak stems from excess nitrogen, tall traditional varieties with weak stems, waterlogging, heavy rains, and wind. Short-statured HYVs are lodging resistant."
  },
  {
    id: "cp049",
    subject: "crop-physiology",
    question: "The Rubisco enzyme in photosynthesis is responsible for:",
    options: ["Light capture according to plant physiology and crop science principles", "Water splitting according to plant physiology and crop science principles", "CO₂ fixation in Calvin cycle (most abundant enzyme in biosphere)", "ATP synthesis according to plant physiology and crop science principles"],
    correct: 2,
    explanation: "Rubisco (Ribulose-1,5-bisphosphate carboxylase/oxygenase) catalyzes CO₂ fixation in the Calvin cycle. It is the most abundant enzyme on Earth and the primary enzyme responsible for removing CO₂ from atmosphere."
  },
  {
    id: "cp050",
    subject: "crop-physiology",
    question: "Imbibition during seed germination refers to:",
    options: ["Absorption of water by dry seeds causing swelling", "Seedling emergence in plant growth", "Nutrient uptake by seedling in crop physiology", "Root hair development during germination"],
    correct: 0,
    explanation: "Imbibition is the absorption of water by dry colloidal substances (seed proteins and starch) causing enormous swelling pressure. It is the first step in seed germination, generating up to 1000 atm pressure."
  },
];
