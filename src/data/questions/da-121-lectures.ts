// ===== FILE: da-121-lectures.ts =====
import { Question } from "@/types";

// DA-121: Soil Chemistry & Fertility — Lecture-wise Question Bank
// Source: PJTSAU Diploma in Agriculture DA-121 course material
// 150 questions (15 per lecture × 10 lectures)

export const da121LectureQuestions: Question[] = [

  // ─────────────────────────────────────────────────────────
  // LECTURE 1: Soil Formation & Profiles
  // ─────────────────────────────────────────────────────────
  {
    id: "d121l_001",
    subject: "da-121",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Hans Jenny's equation of soil formation is expressed as S = f(cl, o, r, p, t, …). What does the variable 'cl' represent?",
    options: ["Colour of the soil profile", "Chemical composition of bedrock", "Clay content of parent material", "Climate (temperature and precipitation)"],
    correct: 3,
    explanation: "In Jenny's equation, 'cl' stands for Climate — mainly temperature and precipitation — which controls weathering rate, leaching, and biological activity."
  },
  {
    id: "d121l_002",
    subject: "da-121",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Which type of weathering is responsible for the decomposition of feldspar into kaolinite and silicic acid in tropical soils?",
    options: ["Thermal weathering by temperature change", "Physical (mechanical) weathering", "Chemical weathering through hydrolysis", "Biological weathering by lichens"],
    correct: 2,
    explanation: "Hydrolysis is the chief chemical weathering reaction that breaks down feldspar (an alumino-silicate) into secondary clay minerals such as kaolinite, releasing silicic acid and base cations."
  },
  {
    id: "d121l_003",
    subject: "da-121",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Which soil order in USDA Soil Taxonomy is characterised by the presence of a spodic horizon with illuviated organic matter and iron?",
    options: ["Mollisols", "Spodosols", "Vertisols", "Oxisols"],
    correct: 1,
    explanation: "Spodosols possess a spodic horizon — a subsurface layer enriched by downward-migrating humus-iron-aluminium complexes, typical of humid cool coniferous forest soils."
  },
  {
    id: "d121l_004",
    subject: "da-121",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The black cotton soils of Telangana (Vertisols) are formed mainly from which parent material?",
    options: ["Alluvial sediments from rivers", "Coastal marine deposits", "Basalt (Deccan trap) rock", "Granite and gneiss rocks"],
    correct: 2,
    explanation: "Black cotton soils (Regur/Vertisols) in Telangana are derived from the weathering of Deccan Basaltic trap rock, which provides a high content of smectite (montmorillonite) clay minerals."
  },
  {
    id: "d121l_005",
    subject: "da-121",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The topmost horizon of a typical soil profile where maximum organic matter accumulates is designated as:",
    options: ["A horizon", "O horizon", "B horizon", "C horizon"],
    correct: 1,
    explanation: "The O horizon (organic horizon) lies above the mineral soil and consists of fresh or partially decomposed organic material such as leaf litter and humus. It overlies the A (topsoil) horizon."
  },
  {
    id: "d121l_006",
    subject: "da-121",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Laterite soils of humid tropical regions are rich in which oxides?",
    options: ["Magnesium carbonate and sulphates", "Potassium and sodium silicates", "Iron (Fe2O3) and aluminium (Al2O3) oxides", "Silica (SiO2) and calcium carbonate"],
    correct: 2,
    explanation: "Intense weathering and leaching in humid tropics removes silica and bases while iron and aluminium sesquioxides accumulate, forming iron-rich, reddish laterite soils."
  },
  {
    id: "d121l_007",
    subject: "da-121",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The B horizon of a soil profile is primarily characterised by:",
    options: ["Unweathered bedrock", "Maximum biological activity and organic matter", "Illuviation (accumulation) of leached materials from above", "Partially weathered parent material with original rock structure"],
    correct: 2,
    explanation: "The B horizon (subsoil) is the zone of illuviation where clay, iron, aluminium oxides, and organic matter transported from the A horizon accumulate."
  },
  {
    id: "d121l_008",
    subject: "da-121",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Soil formed in situ from the weathering of underlying bedrock is termed:",
    options: ["Colluvial soil", "Transported soil (alluvial)", "Aeolian soil", "Residual soil (sedentary)"],
    correct: 3,
    explanation: "Residual (sedentary) soils are formed directly from the weathering of underlying parent rock and remain at the place of origin, unlike transported soils moved by wind, water, or gravity."
  },
  {
    id: "d121l_009",
    subject: "da-121",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Which soil-forming process involves the downward movement of clay particles in suspension from the A horizon to the B horizon?",
    options: ["Podzolization", "Gleization", "Calcification", "Lessivage (Argilluviation)"],
    correct: 3,
    explanation: "Lessivage (argilluviation) is the mechanical translocation of clay particles (not dissolved) from the A horizon to the B horizon, creating an argillic horizon."
  },
  {
    id: "d121l_010",
    subject: "da-121",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Red and yellow lateritic soils (Alfisols) are predominantly found in which region of Telangana?",
    options: ["Southern plateau districts (Ranga Reddy, Mahabubnagar)", "High altitude forest areas of Adilabad", "River delta areas of Krishna and Godavari", "North Telangana districts (Nizamabad, Karimnagar)"],
    correct: 0,
    explanation: "Red and yellow soils (Alfisols) are common in the southern and central plateau districts of Telangana formed from granitic and gneissic parent material under subhumid conditions."
  },
  {
    id: "d121l_011",
    subject: "da-121",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The time factor in soil formation (Jenny's equation) implies that:",
    options: ["Soil profile development increases with time under similar other factors", "Time has no significant effect on soil properties", "Older soils always have deeper profiles than younger soils", "Soils formed in 100 years are identical to those formed in 10,000 years"],
    correct: 0,
    explanation: "Given the same climate, parent material, relief, and organisms, increasing time allows more weathering, leaching, and horizon differentiation, resulting in more developed profiles."
  },
  {
    id: "d121l_012",
    subject: "da-121",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Soil formed from wind-deposited material (loess) is classified as:",
    options: ["Lacustrine soil", "Aeolian soil", "Colluvial soil", "Marine soil"],
    correct: 1,
    explanation: "Aeolian soils are transported and deposited by wind. Loess — a fine-grained aeolian deposit — forms fertile soils when weathered under adequate moisture."
  },
  {
    id: "d121l_013",
    subject: "da-121",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Which soil order is known as 'shrinking and swelling soils' with high montmorillonite clay content?",
    options: ["Aridisols", "Inceptisols", "Vertisols", "Entisols"],
    correct: 2,
    explanation: "Vertisols (from Latin 'verto' = turn) are characterised by high montmorillonite (2:1) clay content causing swelling when wet and deep cracking when dry; they include the black cotton soils of India."
  },
  {
    id: "d121l_014",
    subject: "da-121",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The E horizon (eluvial horizon) in a soil profile is characterised by:",
    options: ["Secondary carbonate accumulation for soil management", "Maximum microbial activity in soil science", "Loss of silicate clay, Fe, and Al by leaching (eluviation)", "Accumulation of organic matter and clay"],
    correct: 2,
    explanation: "The E horizon lies between A and B and is depleted of clay, Fe, Al, and organic matter by downward leaching (eluviation), often appearing light coloured."
  },
  {
    id: "d121l_015",
    subject: "da-121",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Alluvial soils formed by river deposits in the Krishna and Godavari deltas of Telangana/Andhra Pradesh are classified under which soil order?",
    options: ["Spodosols", "Vertisols", "Entisols or Inceptisols", "Oxisols"],
    correct: 2,
    explanation: "Recent alluvial deposits along river deltas are classified as Entisols (little or no horizon development) or Inceptisols (weakly developed horizons) in USDA Soil Taxonomy."
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 2: Soil Physical Properties
  // ─────────────────────────────────────────────────────────
  {
    id: "d121l_016",
    subject: "da-121",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "According to the USDA particle size classification, the clay fraction includes particles of diameter:",
    options: ["< 0.002 mm", "0.05–0.10 mm", "0.002–0.05 mm", "< 0.02 mm"],
    correct: 0,
    explanation: "USDA classifies clay as particles < 0.002 mm (2 µm) diameter. ISSS also uses < 0.002 mm for clay."
  },
  {
    id: "d121l_017",
    subject: "da-121",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The particle density of most mineral soils is approximately:",
    options: ["2.6–2.7 Mg m⁻³", "1.0–1.2 Mg m⁻³", "1.3–1.5 Mg m⁻³", "3.0–3.5 Mg m⁻³"],
    correct: 0,
    explanation: "Particle (true) density of mineral soils averages about 2.65 Mg m⁻³ (same as quartz), a value used for most mineral soil calculations. Organic soils have lower particle density."
  },
  {
    id: "d121l_018",
    subject: "da-121",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Total porosity (%) of a soil is calculated using the formula:",
    options: ["Porosity = (Particle density – Bulk density) × 100", "Porosity = (Bulk density / Particle density) × 100", "Porosity = (Organic matter% / Bulk density) × 100", "Porosity = [1 – (Bulk density / Particle density)] × 100"],
    correct: 3,
    explanation: "Total porosity (%) = [1 – (Db/Dp)] × 100, where Db is bulk density and Dp is particle density. For a loam soil with Db = 1.33 and Dp = 2.65, porosity ≈ 50%."
  },
  {
    id: "d121l_019",
    subject: "da-121",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Which soil structure type is best suited for crop production?",
    options: ["Massive structure", "Single grain structure", "Granular (crumb) structure", "Platy structure"],
    correct: 2,
    explanation: "Granular (crumb) structure in the surface horizon is ideal for crop production because it provides adequate macro- and micro-pores for water retention, aeration, and root penetration."
  },
  {
    id: "d121l_020",
    subject: "da-121",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The Atterberg's plastic limit of a soil is defined as the minimum moisture content at which soil:",
    options: ["Reaches its maximum swelling in soil science", "Can be rolled into a 3 mm thread without crumbling", "Flows like a liquid under its own weight", "Becomes too dry to be moulded for soil management"],
    correct: 1,
    explanation: "The plastic limit is the minimum water content at which soil can be rolled into a 3 mm thread without crumbling; below it the soil is in a semi-solid state."
  },
  {
    id: "d121l_021",
    subject: "da-121",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Loamy sand soil texture class contains approximately what percentage of sand?",
    options: ["70–85%", "25–50%", "85–90%", "50–70%"],
    correct: 0,
    explanation: "Loamy sand has a very high sand content (70–85%) with enough silt and clay to give some cohesion, distinguishing it from pure sandy soils."
  },
  {
    id: "d121l_022",
    subject: "da-121",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Soil colour is determined in the field using:",
    options: ["Munsell Colour Chart (hue, value, chroma)", "Visual comparison with standard soil maps", "Spectrophotometer absorbance at 660 nm", "Colorimeter readings in nm wavelength"],
    correct: 0,
    explanation: "Soil colour is described using the Munsell Colour System with three dimensions: Hue (dominant wavelength), Value (lightness), and Chroma (purity/saturation)."
  },
  {
    id: "d121l_023",
    subject: "da-121",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Which of the following soil textures has the highest water-holding capacity?",
    options: ["Loamy sand", "Sandy soil", "Clay soil", "Sandy loam"],
    correct: 2,
    explanation: "Clay soils have the highest water-holding capacity because the small clay particles provide enormous surface area and fine pores that retain water by capillary and adsorption forces."
  },
  {
    id: "d121l_024",
    subject: "da-121",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The consistency of a soil at its liquid limit is measured using:",
    options: ["Tensile strength meter", "Shrinkage limit apparatus", "Casagrande cup (liquid limit device)", "Proctor compaction test"],
    correct: 2,
    explanation: "The liquid limit (upper Atterberg limit) is determined using the Casagrande cup — the moisture content at which soil begins to flow when subjected to standardised blows."
  },
  {
    id: "d121l_025",
    subject: "da-121",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Prismatic soil structure, common in subsoil horizons, differs from columnar structure in that:",
    options: ["Prismatic occurs in surface soils, columnar in deep subsoil", "Columnar has rounded tops, prismatic has flat tops", "Both have identical appearance and occur in the same horizons", "Prismatic has rounded tops, columnar has flat tops"],
    correct: 1,
    explanation: "Columnar structure has rounded or dome-shaped tops (associated with sodic soils), while prismatic structure has flat tops; both are vertically oriented prisms in subsoil horizons."
  },
  {
    id: "d121l_026",
    subject: "da-121",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Bulk density of a soil is defined as:",
    options: ["Mass of moist soil per unit volume at field capacity", "Mass of dry soil per unit volume of soil solids only", "Mass of soil particles per unit volume of water displaced", "Mass of oven-dry soil per unit total volume (solids + pores)"],
    correct: 3,
    explanation: "Bulk density (Db) = oven-dry mass of soil / total volume of soil (including pore space). It ranges from 1.0 to 1.8 Mg m⁻³ in mineral soils."
  },
  {
    id: "d121l_027",
    subject: "da-121",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Which soil separates (particle size class) is responsible for most of the chemical reactivity in soils?",
    options: ["Gravel (> 2 mm)", "Coarse sand (0.5–2 mm)", "Fine silt (0.002–0.02 mm)", "Clay (< 0.002 mm)"],
    correct: 3,
    explanation: "Clay particles (< 0.002 mm) possess colloidal properties, enormous surface area per unit mass, and negative charges — making them the seat of most ion exchange and chemical reactions in soil."
  },
  {
    id: "d121l_028",
    subject: "da-121",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Soil temperature is primarily influenced by which factor at the field level?",
    options: ["Depth of groundwater table only in soil science", "Plant species growing in the field", "Soil colour, organic matter, moisture content, and slope aspect", "Soil pH and electrical conductivity for soil management"],
    correct: 2,
    explanation: "Soil temperature depends on solar radiation absorption (colour, aspect), evaporative cooling (moisture), and insulation effects of organic matter. Dark soils and south-facing slopes warm faster."
  },
  {
    id: "d121l_029",
    subject: "da-121",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "In the USDA textural triangle, a soil with 40% sand, 40% silt, and 20% clay is classified as:",
    options: ["Sandy clay loam", "Clay loam", "Silt loam", "Loam"],
    correct: 3,
    explanation: "A soil with approximately equal proportions of sand and silt and 20% clay plots in the Loam class on the USDA textural triangle."
  },
  {
    id: "d121l_030",
    subject: "da-121",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Soil aggregation is enhanced by all of the following EXCEPT:",
    options: ["Activity of earthworms", "Addition of organic matter", "Repeated tillage of dry soil", "Root exudates from plants"],
    correct: 2,
    explanation: "Repeated tillage of dry soil destroys aggregates through mechanical disruption and oxidises organic matter, reducing soil structure. Organic matter, earthworms, and root exudates all promote aggregation."
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 3: Soil Water & Air
  // ─────────────────────────────────────────────────────────
  {
    id: "d121l_031",
    subject: "da-121",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Field capacity (FC) of a soil is defined as the moisture content retained after:",
    options: ["The soil dries completely at 105°C in an oven in soil science", "The soil is saturated and excess water is allowed to drain for 2–3 days", "The soil is dried at 15 bar suction for soil management", "The soil is at wilting point after plant uptake in soil fertility"],
    correct: 1,
    explanation: "Field capacity is the moisture content of a soil after free drainage has ceased (usually 1–3 days after saturation), held against gravity. It corresponds to a matric suction of about –0.033 MPa (–1/3 bar)."
  },
  {
    id: "d121l_032",
    subject: "da-121",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Permanent Wilting Point (PWP) corresponds to a soil matric suction of approximately:",
    options: ["–3.0 MPa (30 bar)", "–0.033 MPa (1/3 bar)", "–1.5 MPa (15 bar)", "–0.1 MPa (1 bar)"],
    correct: 2,
    explanation: "The permanent wilting point is conventionally defined at –1.5 MPa (15 bar or 15 atmospheres) matric suction, the point at which most crop plants cannot extract water and wilt permanently."
  },
  {
    id: "d121l_033",
    subject: "da-121",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Available water capacity (AWC) of a soil is calculated as:",
    options: ["Saturation percentage – Field capacity", "Total pore space – Gravitational water", "Field capacity – Permanent wilting point", "Hygroscopic coefficient – Permanent wilting point"],
    correct: 2,
    explanation: "AWC = FC – PWP. This represents the water available to plants held between –0.033 MPa (FC) and –1.5 MPa (PWP). Clay loam soils typically have the highest AWC."
  },
  {
    id: "d121l_034",
    subject: "da-121",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Hygroscopic water in soil is held with a matric suction greater than:",
    options: ["–3.1 MPa", "–0.3 MPa", "–1.5 MPa", "–0.033 MPa"],
    correct: 0,
    explanation: "Hygroscopic water is the thin film of water held tightly by soil particles at suctions greater than –3.1 MPa (31 bar) and is not available to plants."
  },
  {
    id: "d121l_035",
    subject: "da-121",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The pF value is defined as:",
    options: ["Logarithm of soil moisture tension expressed in cm of water column", "Water potential expressed in pascals for soil management", "Negative logarithm of soil pH in soil science", "Ratio of field capacity to particle density"],
    correct: 0,
    explanation: "pF = log₁₀ of the soil moisture suction expressed in cm of water column. pF 2.54 ≈ field capacity and pF 4.2 ≈ permanent wilting point."
  },
  {
    id: "d121l_036",
    subject: "da-121",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Gravitational water is water that:",
    options: ["Moves through macropores under gravity and drains out of the root zone", "Is held tightly by clay particles and unavailable to plants", "Is retained at field capacity for plant use under standard field conditions", "Is adsorbed as a monolayer on soil surfaces under standard field conditions"],
    correct: 0,
    explanation: "Gravitational water occupies large macropores and drains out of the soil under gravity after a rain event. It is generally not available for plant use as it moves too quickly through the profile."
  },
  {
    id: "d121l_037",
    subject: "da-121",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Which soil texture has the highest available water capacity for plant growth?",
    options: ["Heavy clay soil", "Gravel soil in soil science", "Medium loam to silt loam soil", "Coarse sandy soil"],
    correct: 2,
    explanation: "Medium-textured soils (loam, silt loam) have the highest AWC because they balance large and small pores — more macropores than clay and more micropores than sand."
  },
  {
    id: "d121l_038",
    subject: "da-121",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Soil aeration is primarily measured by which parameter?",
    options: ["Electrical conductivity of soil extract in soil science", "Oxygen diffusion rate (ODR) or percentage of air-filled pores", "CO₂ concentration in irrigation water for soil management", "Total nitrogen gas in soil pores"],
    correct: 1,
    explanation: "Soil aeration is commonly assessed by the oxygen diffusion rate (ODR) or percentage of air-filled pores. A minimum ODR of 0.2 µg cm⁻² min⁻¹ is required for normal root function."
  },
  {
    id: "d121l_039",
    subject: "da-121",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Capillary water in soil is held between what suction range?",
    options: ["0 to –0.033 MPa in soil science", "–0.033 MPa to –1.5 MPa (0.33 to 15 bar)", "–1.5 MPa to –3.1 MPa for soil management", "Greater than –3.1 MPa (31 bar)"],
    correct: 1,
    explanation: "Capillary water is held in micropores at suctions between –0.033 MPa (FC) and –1.5 MPa (PWP). This is the fraction available to plants."
  },
  {
    id: "d121l_040",
    subject: "da-121",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The 'soil moisture characteristic curve' (water retention curve) relates:",
    options: ["Bulk density to water infiltration rate", "Soil moisture content to soil matric potential (suction)", "Soil organic matter to moisture content", "Clay percentage to capillary rise height"],
    correct: 1,
    explanation: "The soil water characteristic (pF) curve plots soil volumetric or gravimetric water content against matric potential (suction), characterising the water retention behaviour of a specific soil."
  },
  {
    id: "d121l_041",
    subject: "da-121",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Waterlogged soils develop anaerobic conditions because:",
    options: ["High pH inhibits oxygen availability in soil science", "Water fills all pores, displacing air and restricting O₂ diffusion", "Clay particles swell and block nutrient uptake", "Excess nitrogen gas is produced by denitrification"],
    correct: 1,
    explanation: "In waterlogged soils, all pore spaces are filled with water, preventing oxygen diffusion into the soil. Aerobic microbes deplete residual O₂, creating anaerobic conditions within hours."
  },
  {
    id: "d121l_042",
    subject: "da-121",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Tensiometers are field instruments used to measure:",
    options: ["Electrical conductivity of soil moisture under standard field conditions", "Soil matric potential (tension/suction) for irrigation scheduling", "Soil bulk density in situ under standard field conditions", "Total dissolved salts in soil water under standard field conditions"],
    correct: 1,
    explanation: "A tensiometer measures soil matric potential by equilibrating with soil water through a porous ceramic cup. It is widely used for irrigation scheduling when pF is below 2.8 (~6 bar)."
  },
  {
    id: "d121l_043",
    subject: "da-121",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Soil air differs from atmospheric air mainly in having:",
    options: ["Higher O₂ and lower CO₂ than the atmosphere", "Higher N₂ and lower Ar than the atmosphere", "Lower O₂ and higher CO₂ than the atmosphere", "Same composition as atmospheric air at all times"],
    correct: 2,
    explanation: "Soil air has lower O₂ (< 20%) and much higher CO₂ (0.2–10% vs 0.04% in atmosphere) due to root and microbial respiration consuming O₂ and releasing CO₂."
  },
  {
    id: "d121l_044",
    subject: "da-121",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The ratio of soil water volume to total soil volume is termed:",
    options: ["Gravimetric water content", "Moisture equivalent", "Volumetric water content", "Pore saturation percentage"],
    correct: 2,
    explanation: "Volumetric water content (θᵥ) = volume of water / total volume of soil. It is directly related to depth of water in the soil profile and is the preferred unit in irrigation science."
  },
  {
    id: "d121l_045",
    subject: "da-121",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Which of the following statements about soil water movement is correct?",
    options: ["Saturated flow is always slower than unsaturated flow", "Water movement in soil is independent of pore size distribution", "Water moves from high water potential to low water potential", "Water moves from low water potential to high water potential"],
    correct: 2,
    explanation: "Water in soil moves from regions of higher (less negative) water potential to lower (more negative) water potential — from wet to dry — in the same way it flows downhill under gravity."
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 4: Soil Chemical Properties & pH
  // ─────────────────────────────────────────────────────────
  {
    id: "d121l_046",
    subject: "da-121",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The Cation Exchange Capacity (CEC) of a soil is expressed in units of:",
    options: ["meq per 100 g (equivalent to cmol(+) kg⁻¹)", "mmol L⁻¹ under standard field conditions", "mg kg⁻¹ under standard field conditions", "cmol(+) kg⁻¹ (centimoles of charge per kg)"],
    correct: 3,
    explanation: "CEC is expressed as cmol(+) kg⁻¹ of soil (equivalent to the older unit meq/100 g). It measures the capacity of soil to hold exchangeable cations."
  },
  {
    id: "d121l_047",
    subject: "da-121",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "At soil pH 7 (neutral), what is the hydrogen ion concentration [H⁺]?",
    options: ["10⁻⁷ mol L⁻¹", "7 mol L⁻¹", "10⁻¹⁴ mol L⁻¹", "10⁻¹ mol L⁻¹"],
    correct: 0,
    explanation: "pH = –log[H⁺], so at pH 7, [H⁺] = 10⁻⁷ mol L⁻¹. Each unit decrease in pH represents a 10× increase in H⁺ concentration."
  },
  {
    id: "d121l_048",
    subject: "da-121",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Which nutrient becomes most available to plants in the pH range 6.5–7.0?",
    options: ["Phosphorus (P)", "Iron (Fe)", "Zinc (Zn)", "Manganese (Mn)"],
    correct: 0,
    explanation: "Phosphorus availability is maximum around pH 6.5–7.0. At lower pH, P is fixed by Fe and Al; at higher pH, it is fixed by Ca, reducing plant availability in both cases."
  },
  {
    id: "d121l_049",
    subject: "da-121",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Base saturation of a soil is defined as:",
    options: ["Percentage of CEC occupied by Ca²⁺ and Mg²⁺ only", "Total amount of lime required to neutralise soil acidity", "Ratio of basic to acidic cations in soil water", "Percentage of CEC occupied by basic cations (Ca²⁺, Mg²⁺, K⁺, Na⁺)"],
    correct: 3,
    explanation: "Base saturation (%) = [(Ca²⁺ + Mg²⁺ + K⁺ + Na⁺) / CEC] × 100. High base saturation (> 50%) indicates fertile, near-neutral soils; acid soils have low base saturation."
  },
  {
    id: "d121l_050",
    subject: "da-121",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Soil pH measured in water (1:2 soil:water) vs in KCl (1:2 soil:0.1M KCl) — which is generally higher?",
    options: ["pH in KCl is higher for alkaline soils but lower for acid soils", "Both measurements always give identical values", "pH in KCl is always higher by 0.5–1.0 units", "pH in water is generally higher than pH in KCl by 0.5–1.0 units"],
    correct: 3,
    explanation: "pH measured in water is typically 0.5–1.0 units higher than in KCl because KCl displaces H⁺ and Al³⁺ from exchange sites, revealing 'reserve acidity' and lowering the measured pH."
  },
  {
    id: "d121l_051",
    subject: "da-121",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The clay mineral montmorillonite has a higher CEC than kaolinite because:",
    options: ["Montmorillonite occurs in acid soils with higher H⁺ concentration", "Montmorillonite is a 2:1 lattice clay with isomorphous substitution and expandable layers", "Montmorillonite has larger particle size and thus more surface area", "Kaolinite is a 1:1 clay that adsorbs more cations due to its rigid structure"],
    correct: 1,
    explanation: "Montmorillonite (2:1 expanding clay) has a CEC of 80–120 cmol(+) kg⁻¹ due to isomorphous substitution and large internal surface area, compared to kaolinite (1:1 clay) with CEC of only 3–15 cmol(+) kg⁻¹."
  },
  {
    id: "d121l_052",
    subject: "da-121",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Soil buffer capacity refers to the ability of soil to:",
    options: ["Resist changes in pH upon addition of acid or base", "Store water against drainage forces in soil science", "Fix nitrogen from the atmosphere for soil management", "Maintain constant temperature despite external changes in soil fertility"],
    correct: 0,
    explanation: "Buffer capacity is the soil's resistance to pH change when acid or base is added. Soils high in clay, organic matter, and CEC have greater buffer capacity."
  },
  {
    id: "d121l_053",
    subject: "da-121",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The negative charge on soil colloids arises primarily from:",
    options: ["Adsorption of anions from soil solution in soil science under standard field conditions", "Oxidation of organic matter for soil management under standard field conditions", "Protonation of OH groups at mineral edges in irrigated crop production systems", "Isomorphous substitution of higher-valence cations by lower-valence cations in clay lattice"],
    correct: 3,
    explanation: "Permanent negative charge on 2:1 clay minerals arises from isomorphous substitution (e.g., Mg²⁺ replacing Al³⁺ in octahedral sheets or Al³⁺ replacing Si⁴⁺ in tetrahedral sheets) without altering crystal structure."
  },
  {
    id: "d121l_054",
    subject: "da-121",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Iron and manganese become more soluble (potentially toxic) at soil pH:",
    options: ["At exactly pH 7.0", "Between 6.5–7.0 (neutral)", "Below 5.5 (acidic)", "Above 7.5 (alkaline)"],
    correct: 2,
    explanation: "Fe²⁺ and Mn²⁺ solubility increases dramatically below pH 5.5 in acid soils, often reaching phytotoxic concentrations. This is a major constraint in acid Alfisols and waterlogged soils."
  },
  {
    id: "d121l_055",
    subject: "da-121",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The Exchangeable Sodium Percentage (ESP) is calculated as:",
    options: ["ESP = (Na in soil water / Total cations) × 100", "ESP = (Na²⁺ / Ca²⁺) ratio × 100", "ESP = (Exchangeable Na / CEC) × 100", "ESP = (Electrical conductivity × pH) / 100"],
    correct: 2,
    explanation: "ESP = (exchangeable Na cmol(+) kg⁻¹ / CEC cmol(+) kg⁻¹) × 100. Soils with ESP > 15 are classified as sodic (alkali) soils."
  },
  {
    id: "d121l_056",
    subject: "da-121",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Anion exchange capacity (AEC) in soils is mainly associated with:",
    options: ["Montmorillonite clay under alkaline conditions in soil science under standard field conditions", "Calcium carbonate at high pH in soil fertility under standard field conditions", "Organic matter at neutral pH for soil management under standard field conditions", "Variable-charge surfaces of iron/aluminium oxides and kaolinite edges at low pH"],
    correct: 3,
    explanation: "AEC is found mainly on iron/aluminium oxide surfaces and kaolinite edges that carry positive charge at low pH, allowing anion (Cl⁻, NO₃⁻, SO₄²⁻) adsorption. It is prominent in highly weathered Oxisols."
  },
  {
    id: "d121l_057",
    subject: "da-121",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "At which soil pH range is molybdenum most available to plants?",
    options: ["pH 6.0–6.5", "pH 4.0–5.5", "pH 5.5–6.5", "pH > 7.0 (alkaline)"],
    correct: 3,
    explanation: "Unlike most micronutrients, molybdenum availability increases with increasing pH (above 7). Mo becomes deficient in acid soils (pH < 6), and liming often corrects Mo deficiency."
  },
  {
    id: "d121l_058",
    subject: "da-121",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Lime requirement of an acid soil is determined by:",
    options: ["Buffer pH (SMP or Woodruff buffer) reflecting reserve acidity", "Soil pH in water alone for soil management", "Total nitrogen content of the soil", "Electrical conductivity of saturation extract in soil science"],
    correct: 0,
    explanation: "Lime requirement depends on reserve (exchangeable) acidity measured using buffer pH methods (Shoemaker-McLean-Pratt or Woodruff buffer), since water pH alone underestimates total acidity."
  },
  {
    id: "d121l_059",
    subject: "da-121",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Soil pH of a normal productive soil suitable for most crops should be in the range:",
    options: ["5.5–7.5", "4.0–5.0", "7.5–9.0", "9.0–11.0"],
    correct: 0,
    explanation: "Most crops grow best at pH 5.5–7.5 where nutrient availability, microbial activity, and soil structure are optimum. Extreme pH (< 5 or > 8.5) causes toxicities and deficiencies."
  },
  {
    id: "d121l_060",
    subject: "da-121",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The Sodium Adsorption Ratio (SAR) of irrigation water is used to predict:",
    options: ["Phosphorus fixation capacity of the soil", "Sodium toxicity risk to crops and soil sodicity development", "Irrigation water requirement for crops", "Solubility of calcium carbonate in irrigation water"],
    correct: 1,
    explanation: "SAR = Na⁺/√[(Ca²⁺+Mg²⁺)/2] (all in meq/L). High SAR irrigation water increases soil ESP, causing structural degradation. SAR > 13 is generally considered hazardous."
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 5: Soil Organic Matter
  // ─────────────────────────────────────────────────────────
  {
    id: "d121l_061",
    subject: "da-121",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The average carbon content of soil humus is approximately:",
    options: ["10–15%", "20–30%", "70–80%", "45–55%"],
    correct: 3,
    explanation: "Humus (well-decomposed organic matter) contains approximately 45–58% carbon. The Van Bemmelen factor of 1.724 converts organic carbon % to organic matter % (OM = OC × 1.724)."
  },
  {
    id: "d121l_062",
    subject: "da-121",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The C:N ratio of well-decomposed humus in most agricultural soils is approximately:",
    options: ["50–60:1", "5:1", "10–12:1", "25–30:1"],
    correct: 2,
    explanation: "Well-decomposed humus has a narrow C:N ratio of about 10–12:1. Wide C:N (> 25) materials cause temporary N immobilisation upon decomposition."
  },
  {
    id: "d121l_063",
    subject: "da-121",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Which fraction of soil humus is soluble in both acid and alkali and has the lowest molecular weight?",
    options: ["Humic acid", "Humin", "Hymatomelanic acid", "Fulvic acid"],
    correct: 3,
    explanation: "Fulvic acid is soluble in both dilute acid and alkali (unlike humic acid which precipitates in acid). It has lower molecular weight, higher oxygen content, and is more active in nutrient chelation."
  },
  {
    id: "d121l_064",
    subject: "da-121",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Decomposition of organic matter in soil is fastest under which conditions?",
    options: ["Dry, hot conditions with very low microbial activity", "Warm temperature, adequate moisture, neutral pH, and good aeration", "Low temperature, waterlogged, acidic conditions", "Cold, high-altitude conditions with slow microbial turnover"],
    correct: 1,
    explanation: "Decomposition is maximised at warm temperatures (25–35°C), optimal moisture (50–60% WHC), near-neutral pH (6.5–7.5), and aerobic conditions — all promoting microbial activity."
  },
  {
    id: "d121l_065",
    subject: "da-121",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The C:N ratio of fresh rice straw is approximately:",
    options: ["10–12:1", "100–150:1", "20–25:1", "40–80:1"],
    correct: 3,
    explanation: "Rice straw has a wide C:N ratio of 40–80:1. Its direct incorporation causes temporary N immobilisation (microbial N tie-up) as microbes need N to decompose the high-carbon material."
  },
  {
    id: "d121l_066",
    subject: "da-121",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Which of the following is a major benefit of soil organic matter to soil physical properties?",
    options: ["Improves soil aggregation, water-holding capacity, and aeration", "Increases bulk density, improving soil compaction for machine traffic", "Increases soil pH, reducing need for lime application", "Reduces macropore formation, preventing preferential water flow"],
    correct: 0,
    explanation: "Organic matter binds soil particles into stable aggregates, increasing macroporosity, water-holding capacity, infiltration, and aeration — all improving soil physical quality."
  },
  {
    id: "d121l_067",
    subject: "da-121",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The process by which microorganisms convert organic nitrogen into ammonia (NH₄⁺) is called:",
    options: ["Ammonification (mineralisation)", "Nitrification", "Nitrogen fixation", "Denitrification"],
    correct: 0,
    explanation: "Ammonification (mineralisation) is the microbial decomposition of organic N compounds (proteins, amino acids) to ammonium (NH₄⁺). It is the first step in N mineralisation from organic matter."
  },
  {
    id: "d121l_068",
    subject: "da-121",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Soil organic matter content of most Indian agricultural soils is considered low (deficient) when it is below:",
    options: ["3%", "0.1%", "0.75%", "5%"],
    correct: 2,
    explanation: "Indian agricultural soils are generally classified as low in organic carbon when OC < 0.5% (roughly OM < 0.87%). The ICAR critical limit for SOM is ~0.75% OM or ~0.4% OC for adequate fertility."
  },
  {
    id: "d121l_069",
    subject: "da-121",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Humic acid in soil organic matter differs from fulvic acid in that humic acid:",
    options: ["Is insoluble in both acid and alkali", "Is insoluble in dilute acid but soluble in alkali", "Is soluble in both acid and alkali", "Is soluble in dilute acid but precipitates in alkali"],
    correct: 1,
    explanation: "Humic acid precipitates when the alkaline extract is acidified (insoluble at pH < 2) but dissolves in alkali. Fulvic acid remains soluble at all pH values. Humin is insoluble in both."
  },
  {
    id: "d121l_070",
    subject: "da-121",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Soil organic matter contributes to CEC by providing:",
    options: ["Positive charges that adsorb anions in soil science", "Neutral surfaces with no charge contribution for soil management", "Variable (pH-dependent) negative charges from carboxyl (–COOH) and phenolic (–OH) groups", "Permanent negative charges from Si-Al lattice substitution in soil fertility"],
    correct: 2,
    explanation: "Organic matter contributes variable-charge CEC through carboxyl (–COOH) and phenolic (–OH) functional groups that dissociate H⁺ at higher pH. SOM contributes 30–70% of total CEC in many soils."
  },
  {
    id: "d121l_071",
    subject: "da-121",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The Walkley-Black method is used for determination of:",
    options: ["Soil organic carbon by wet oxidation with K₂Cr₂O₇", "Available phosphorus by Bray-P1 extraction", "Soil pH by electrometric method", "Soil total nitrogen by Kjeldahl digestion"],
    correct: 0,
    explanation: "The Walkley-Black method determines organic carbon by wet oxidation with potassium dichromate (K₂Cr₂O₇) and back titration with ferrous ammonium sulphate. It recovers approximately 77% of total OC."
  },
  {
    id: "d121l_072",
    subject: "da-121",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The 'priming effect' in soil organic matter refers to:",
    options: ["Application of fertilizers increasing crop residue production for soil management", "Rain priming microbial activity in dry soils in soil science", "Addition of fresh organic matter stimulating decomposition of existing stable humus", "Temperature increase accelerating nitrification in soil fertility"],
    correct: 2,
    explanation: "The priming effect occurs when fresh organic matter (e.g., crop residue, manure) is added to soil, stimulating microbial activity that accelerates decomposition of otherwise stable native soil organic matter."
  },
  {
    id: "d121l_073",
    subject: "da-121",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Mull humus, found in deciduous forest soils, is characterised by:",
    options: ["Waterlogged peat with very slow decomposition in soil science", "Well-mixed, intimate incorporation of organic matter with mineral soil, neutral to slightly acid pH", "Thin organic layer with high fungal biomass and low earthworm activity", "Thick, acidic, undecomposed litter with sharp boundary from mineral soil for soil management"],
    correct: 1,
    explanation: "Mull humus (from deciduous forests) is well-decomposed, intimately mixed with mineral soil by earthworm activity, with near-neutral pH and high microbial activity — ideal for soil fertility."
  },
  {
    id: "d121l_074",
    subject: "da-121",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The ratio of soil organic carbon to nitrogen in soil organic matter determines the rate of:",
    options: ["Nitrogen mineralisation or immobilisation upon decomposition", "Phosphorus fixation in the soil under standard field conditions", "Potassium leaching from the profile under standard field conditions", "Water infiltration rate under standard field conditions"],
    correct: 0,
    explanation: "When C:N > 25–30, microbes immobilise available N (net immobilisation); when C:N < 20, mineralisation exceeds immobilisation (net N release). This controls N availability after organic matter addition."
  },
  {
    id: "d121l_075",
    subject: "da-121",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Which of the following practices most effectively builds soil organic matter in Indian agricultural soils?",
    options: ["Integration of FYM, green manures, and reduced tillage", "Burning crop residues after harvest", "Applying urea at high rates to stimulate crop growth", "Deep ploughing to mix subsoil with surface soil"],
    correct: 0,
    explanation: "Building SOM requires reducing oxidation (less tillage), returning organic inputs (FYM, crop residues, green manures), and promoting microbial biomass — all combined in integrated nutrient management."
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 6: Essential Macro Nutrients (N, P, K)
  // ─────────────────────────────────────────────────────────
  {
    id: "d121l_076",
    subject: "da-121",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Nitrogen is taken up by most plants primarily in which form(s)?",
    options: ["Molecular N₂ gas directly from soil air", "Nitrate (NO₃⁻) and ammonium (NH₄⁺) ions", "Nitrite (NO₂⁻) and nitrous oxide (N₂O)", "Organic amino acids only"],
    correct: 1,
    explanation: "Plants absorb N predominantly as nitrate (NO₃⁻) and ammonium (NH₄⁺) ions from soil solution. Most crops prefer NO₃⁻ under aerobic conditions, while NH₄⁺ is preferred by rice in waterlogged soils."
  },
  {
    id: "d121l_077",
    subject: "da-121",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "The classic deficiency symptom of nitrogen in plants is:",
    options: ["Uniform yellowing (chlorosis) starting from older (lower) leaves, proceeding upward", "Purpling of leaves due to anthocyanin accumulation under standard field conditions", "Interveinal chlorosis starting from youngest leaves in soil science", "Brown scorched leaf margins and tips for soil management under standard field conditions"],
    correct: 0,
    explanation: "N is mobile in the phloem, so it is remobilised from older leaves to younger growing tissues. Deficiency shows as uniform yellowing of older (lower) leaves first, moving upward."
  },
  {
    id: "d121l_078",
    subject: "da-121",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Phosphorus availability in soil is highest when soil pH is approximately:",
    options: ["7.5–8.5", "9.0–10.0", "4.0–5.0", "5.5–6.5"],
    correct: 3,
    explanation: "P availability peaks around pH 6.0–6.5 (sometimes cited as 6.0–7.0). At lower pH, P is fixed by Fe and Al hydroxides; at higher pH, Ca-P compounds become insoluble."
  },
  {
    id: "d121l_079",
    subject: "da-121",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Which role does potassium play in plant physiology that directly improves crop quality?",
    options: ["It is part of the ATP molecule, providing energy for photosynthesis under standard field conditions", "It fixes atmospheric CO₂ in the Calvin cycle under standard field conditions", "It is a structural component of chlorophyll molecule under standard field conditions", "It activates > 60 enzymes and regulates stomatal opening, improving water use efficiency"],
    correct: 3,
    explanation: "K⁺ activates over 60 enzymes involved in plant metabolism and regulates guard cell turgor (stomatal opening/closing). It improves drought tolerance, fruit quality, disease resistance, and translocation of sugars."
  },
  {
    id: "d121l_080",
    subject: "da-121",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "The largest pool of nitrogen in soil that is NOT directly available to plants is:",
    options: ["Nitrate (NO₃⁻) in soil water", "Organic nitrogen in soil organic matter", "Ammonium (NH₄⁺) ions in soil solution", "Fixed ammonium in clay interlayers"],
    correct: 1,
    explanation: "Organic N in SOM constitutes 95–99% of total soil N but is not directly available. It must be mineralised (ammonification → nitrification) before plant uptake. Only 1–3% of organic N mineralises annually."
  },
  {
    id: "d121l_081",
    subject: "da-121",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Phosphorus deficiency in plants typically shows as:",
    options: ["Yellow-green chlorosis of young leaves in soil science under standard field conditions", "Interveinal chlorosis with green veins for soil management under standard field conditions", "Brown necrotic spots on leaf margins in soil fertility under standard field conditions", "Purple or reddish discolouration of leaves and stems due to anthocyanin accumulation"],
    correct: 3,
    explanation: "P deficiency causes purplish-red discolouration due to accumulation of anthocyanins (promoted by carbohydrate accumulation and blocked synthesis). Older leaves may appear dark green initially."
  },
  {
    id: "d121l_082",
    subject: "da-121",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Luxury consumption of potassium refers to:",
    options: ["Excess K application causing toxicity symptoms in soil science", "Uptake of K in excess of plant needs without beneficial effect on yield", "K accumulation in roots at the expense of shoots for soil management", "K loss from soil by leaching beyond crop requirement in soil fertility"],
    correct: 1,
    explanation: "Luxury K consumption is the uptake of K well above the crop's physiological requirement when soil K is abundant, without proportional increase in yield. It is most pronounced in forages and grasses."
  },
  {
    id: "d121l_083",
    subject: "da-121",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "The critical phosphorus concentration in soil solution for adequate crop growth is approximately:",
    options: ["0.2–0.3 mg P L⁻¹", "< 0.01 mg P L⁻¹", "50–100 mg P L⁻¹", "5–10 mg P L⁻¹"],
    correct: 0,
    explanation: "The critical P concentration in soil solution for most crops is about 0.2–0.3 mg L⁻¹ (ppm). Below this, plant P uptake is insufficient for maximum growth."
  },
  {
    id: "d121l_084",
    subject: "da-121",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "The process of denitrification results in loss of soil nitrogen as:",
    options: ["NH₃ gas through volatilisation", "Organic N immobilisation by microbes", "NO₃⁻ leaching into groundwater", "N₂ and N₂O gases under anaerobic conditions"],
    correct: 3,
    explanation: "Denitrification is the microbial reduction of NO₃⁻ → NO₂⁻ → NO → N₂O → N₂ under anaerobic conditions. The gaseous products (mainly N₂ and N₂O) are lost to the atmosphere."
  },
  {
    id: "d121l_085",
    subject: "da-121",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "In Indian soils, the critical soil organic carbon level for adequate nitrogen supply is considered to be:",
    options: ["5.0–6.0%", "2.0–3.0%", "0.4–0.5%", "< 0.1%"],
    correct: 2,
    explanation: "The critical limit for organic carbon in Indian soils is 0.4–0.5% OC (or about 0.75–0.87% OM). Soils below this are considered N-deficient and require regular organic/inorganic N inputs."
  },
  {
    id: "d121l_086",
    subject: "da-121",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Potassium deficiency symptoms in plants appear first on:",
    options: ["Older (lower) leaves, showing marginal and tip scorch (brown scorching)", "Flowers and fruits, causing poor fruit set under standard field conditions", "Young, newly expanded leaves at the shoot apex under standard field conditions", "Root tips, causing stunted root growth under standard field conditions"],
    correct: 0,
    explanation: "K is phloem-mobile, so it is remobilised from older leaves to growing tips. Deficiency first appears as tip and marginal scorch (necrosis) on older leaves, sometimes with interveinal chlorosis."
  },
  {
    id: "d121l_087",
    subject: "da-121",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Phosphorus moves to plant roots mainly by which mechanism?",
    options: ["Root interception only in soil science under standard field conditions", "Diffusion (due to very low concentration and small diffusion coefficient)", "Mass flow in soil solution (convective flow) under standard field conditions", "Active pumping by root hairs only for soil management under standard field conditions"],
    correct: 1,
    explanation: "P moves primarily by diffusion because its concentration in soil solution is very low (< 1 ppm) and mass flow accounts for only a tiny fraction of P supply. Diffusion accounts for 90%+ of P uptake by roots."
  },
  {
    id: "d121l_088",
    subject: "da-121",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Ammonium fixation in soils occurs mainly due to:",
    options: ["NH₄⁺ converting to NO₃⁻ through biological nitrification in soil science", "NH₄⁺ being trapped in the interlayer spaces of 2:1 clay minerals (illite, vermiculite)", "NH₄⁺ reacting with soil organic matter to form recalcitrant N", "NH₄⁺ volatilising as NH₃ from the soil surface for soil management"],
    correct: 1,
    explanation: "2:1 clay minerals such as illite and vermiculite have interlayer spacings that match the size of NH₄⁺ (and K⁺), trapping these ions between tetrahedral sheets as 'fixed' (non-exchangeable) forms."
  },
  {
    id: "d121l_089",
    subject: "da-121",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Which form of inorganic phosphorus predominates in neutral to calcareous (high pH) soils of Telangana?",
    options: ["Organic phosphate esters", "Iron and aluminium phosphates (Fe-P and Al-P)", "Calcium phosphates (Ca-P) such as hydroxyapatite", "Soluble monocalcium phosphate [Ca(H₂PO₄)₂]"],
    correct: 2,
    explanation: "In neutral to alkaline soils, P is fixed as poorly soluble calcium phosphates (octacalcium phosphate, hydroxyapatite). In acid soils, Fe and Al phosphates dominate."
  },
  {
    id: "d121l_090",
    subject: "da-121",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Nitrogen use efficiency (NUE) of urea in wet rice paddies is typically:",
    options: ["30–50%", "< 20%", "60–70%", "80–90%"],
    correct: 0,
    explanation: "NUE of urea in flooded rice is typically only 30–50% due to ammonia volatilisation, denitrification, and leaching losses. Slow-release coatings, deep placement, and split application improve NUE."
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 7: Secondary & Micronutrients
  // ─────────────────────────────────────────────────────────
  {
    id: "d121l_091",
    subject: "da-121",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Calcium deficiency in plants typically causes:",
    options: ["Marginal scorch of older leaves for soil management under standard field conditions", "Purple discolouration of older leaves in soil science under standard field conditions", "Death of growing points (meristems), curling and scorching of young leaf tips", "Interveinal chlorosis of mature leaves in soil fertility under standard field conditions"],
    correct: 2,
    explanation: "Ca is immobile in phloem; it cannot be retranslocated from older to younger tissue. Deficiency therefore affects young, rapidly growing meristematic tissues first — tip burn, blossom-end rot, bitter pit."
  },
  {
    id: "d121l_092",
    subject: "da-121",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Iron deficiency chlorosis in plants (lime-induced chlorosis) is most common in:",
    options: ["Waterlogged soils with high Fe²⁺ toxicity in soil science", "Acid soils below pH 5.5 with high Fe²⁺", "Sandy soils with excessive leaching of iron for soil management", "Neutral to alkaline soils (pH > 7) where Fe³⁺ becomes insoluble"],
    correct: 3,
    explanation: "Fe solubility drops 1000-fold for each unit rise in pH above 7. In calcareous alkaline soils, Fe³⁺ precipitates and becomes unavailable, causing interveinal chlorosis on young leaves."
  },
  {
    id: "d121l_093",
    subject: "da-121",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Zinc deficiency in rice is called:",
    options: ["Khaira disease", "Reclamation disease", "White bud", "Whiptail"],
    correct: 0,
    explanation: "Zinc deficiency in rice is known as 'Khaira disease' (also called 'Bronzing' or 'Kharia') — characterised by brown spots on lower leaves and stunting. It is the most widespread micronutrient deficiency in Indian rice soils."
  },
  {
    id: "d121l_094",
    subject: "da-121",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Sulphur deficiency symptoms in plants resemble nitrogen deficiency in that both cause yellowing, but sulphur deficiency differs because:",
    options: ["S deficiency appears on younger (upper) leaves first since S is relatively immobile in phloem", "S deficiency starts on older leaves like N deficiency in soil science", "S deficiency causes purple discolouration unlike N for soil management", "S deficiency causes tip burn while N deficiency causes interveinal chlorosis"],
    correct: 0,
    explanation: "S is relatively phloem-immobile (unlike N), so S deficiency symptoms (uniform yellowing) appear first on younger leaves at the top of the plant, distinguishing it from N deficiency which starts on older leaves."
  },
  {
    id: "d121l_095",
    subject: "da-121",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Boron deficiency in cauliflower produces a condition called:",
    options: ["Blind seed disease", "Heart rot in soil science", "Brown heart (Hollow stem / Browning)", "Whiptail for soil management"],
    correct: 2,
    explanation: "Boron deficiency in cauliflower causes 'browning' or 'hollow stem' (also called brown heart in turnip and swede). In sugar beet it causes 'heart rot'. In cauliflower, brown discolouration and hollow curd/stem are diagnostic."
  },
  {
    id: "d121l_096",
    subject: "da-121",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Molybdenum (Mo) deficiency in cauliflower produces a characteristic symptom called:",
    options: ["Whiptail", "Khaira disease", "Heart rot", "Grey speck"],
    correct: 0,
    explanation: "Mo deficiency causes 'whiptail' in cauliflower (strap-like, twisted, deformed leaves) and 'yellow spot' in citrus. Mo is required for nitrate reductase and nitrogenase enzymes."
  },
  {
    id: "d121l_097",
    subject: "da-121",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Manganese deficiency is known as 'grey speck' in oats and 'marsh spot' in:",
    options: ["Peas", "Cotton", "Wheat", "Groundnut"],
    correct: 0,
    explanation: "Mn deficiency causes 'grey speck' in oats and 'marsh spot' in peas (brown spots in cotyledons). It occurs in alkaline, over-limed, or organic soils where Mn²⁺ oxidises to unavailable MnO₂."
  },
  {
    id: "d121l_098",
    subject: "da-121",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "The recommended method of correction for zinc deficiency in paddy nursery soil is:",
    options: ["Application of zinc chelate (Zn-EDTA) at 2 kg ha⁻¹ in soil science", "Liming the soil to pH 7.0 for soil management under standard field conditions", "Foliar spray of 0.5% ZnSO₄ alone in soil fertility under standard field conditions", "Soil application of ZnSO₄ at 25 kg ha⁻¹ or seedling root dip in 2% ZnO suspension"],
    correct: 3,
    explanation: "Standard recommendations for Zn deficiency in rice include: soil application of ZnSO₄ (21%) at 25 kg ha⁻¹ or seedling root dip in 2–4% ZnO (or 2% ZnSO₄) suspension for 10–12 hours before transplanting."
  },
  {
    id: "d121l_099",
    subject: "da-121",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Copper deficiency disease in cereals is known as:",
    options: ["Marsh spot under standard field conditions", "Reclamation disease (or Wither tip)", "Grey speck under standard field conditions", "Khaira disease under standard field conditions"],
    correct: 1,
    explanation: "Cu deficiency causes 'reclamation disease' (Heyns disease) in cereals — wilting, withering, and die-back of leaf tips; sometimes called 'wither tip' in wheat. It is common in organic peaty soils."
  },
  {
    id: "d121l_100",
    subject: "da-121",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Magnesium is a structural component of which important plant molecule?",
    options: ["Cell wall pectin", "ATP (adenosine triphosphate)", "Phytochrome", "Chlorophyll (porphyrin ring)"],
    correct: 3,
    explanation: "Mg²⁺ is the central atom of the chlorophyll porphyrin ring. Mg deficiency therefore causes interveinal chlorosis (green veins, yellow between veins) starting on older leaves due to its phloem mobility."
  },
  {
    id: "d121l_101",
    subject: "da-121",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "The critical limit of available zinc in soil (DTPA extractable Zn) below which crops show deficiency is:",
    options: ["2.0 mg kg⁻¹", "0.6 mg kg⁻¹", "0.1 mg kg⁻¹", "5.0 mg kg⁻¹"],
    correct: 1,
    explanation: "The critical limit for DTPA-extractable Zn in soil is 0.6 mg kg⁻¹. Below this, most crops (especially rice, maize, wheat) will show deficiency requiring zinc fertilisation."
  },
  {
    id: "d121l_102",
    subject: "da-121",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Iron toxicity in rice ('bronzing') occurs when Fe²⁺ concentration in soil solution exceeds approximately:",
    options: ["0.5 mg L⁻¹", "500 mg L⁻¹", "100–300 mg L⁻¹", "0.01 mg L⁻¹"],
    correct: 2,
    explanation: "Fe²⁺ toxicity (bronzing) in rice occurs when soil solution Fe²⁺ exceeds about 100–300 mg L⁻¹ in waterlogged, highly reduced soils. Symptoms include reddish-brown leaf discolouration."
  },
  {
    id: "d121l_103",
    subject: "da-121",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "The critical limit of boron in soil (hot water soluble B) for most crops is:",
    options: ["0.01 mg kg⁻¹", "0.5 mg kg⁻¹", "5.0 mg kg⁻¹", "2.0 mg kg⁻¹"],
    correct: 1,
    explanation: "The critical lower limit for hot water soluble soil B is 0.5 mg kg⁻¹ for most field crops. Soils below this are B-deficient. The range between deficiency and toxicity for B is very narrow."
  },
  {
    id: "d121l_104",
    subject: "da-121",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Sulphur in plants serves as a constituent of which amino acids?",
    options: ["Cysteine and methionine", "Lysine and arginine", "Glycine and alanine", "Proline and hydroxyproline"],
    correct: 0,
    explanation: "Sulphur is an essential component of the amino acids cysteine (–SH group) and methionine (–S–CH₃ group) and of the vitamins thiamine (B₁) and biotin, as well as coenzyme A."
  },
  {
    id: "d121l_105",
    subject: "da-121",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Chlorine (Cl) as a micronutrient is essential for which plant process?",
    options: ["Phosphate transport across root cell membranes", "Photosystem II water-splitting (oxygen evolution) reaction", "Protein synthesis in ribosomes under standard field conditions", "Nitrogen fixation in root nodules under standard field conditions"],
    correct: 1,
    explanation: "Cl⁻ is required as a cofactor for the oxygen-evolving complex in Photosystem II (water splitting during light reactions of photosynthesis). Cl also regulates stomatal function."
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 8: Soil Fertility Evaluation
  // ─────────────────────────────────────────────────────────
  {
    id: "d121l_106",
    subject: "da-121",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The standard soil sampling depth for fertility evaluation of surface soils in agricultural fields is:",
    options: ["0–30 cm", "0–60 cm", "0–15 cm (or 0–20 cm)", "0–5 cm"],
    correct: 2,
    explanation: "The standard sampling depth for soil fertility testing is 0–15 cm (or 0–20 cm) for most annual crops, as this represents the primary rooting zone receiving fertilizers and amendments."
  },
  {
    id: "d121l_107",
    subject: "da-121",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The Soil Test Crop Response (STCR) approach to fertilizer recommendation is based on:",
    options: ["Laboratory analysis of plant tissue alone in soil science under standard field conditions", "Blanket (fixed) recommendations irrespective of soil test values under standard field conditions", "Targeted yield approach correlating soil test values with crop response to fertilizers", "Farmer experience and traditional practices for soil management under standard field conditions"],
    correct: 2,
    explanation: "STCR uses regression equations relating soil nutrient status to crop response, recommending fertilizer dose to achieve a pre-set target yield based on available soil nutrient supply plus fertilizer need."
  },
  {
    id: "d121l_108",
    subject: "da-121",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The critical limit of available soil phosphorus (Olsen P) below which fertilizer P application gives economic response is:",
    options: ["< 1 mg kg⁻¹", "< 25 mg kg⁻¹", "< 50 mg kg⁻¹", "< 5 mg kg⁻¹ (medium or lower)"],
    correct: 3,
    explanation: "The critical Olsen P for most crops is approximately 10–12 mg kg⁻¹ (varies by crop and soil). Soils with Olsen P < 10 mg kg⁻¹ are considered low (responsive to P fertilization)."
  },
  {
    id: "d121l_109",
    subject: "da-121",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Bray-P1 method for soil P extraction uses which extractant?",
    options: ["1N NH₄OAc at pH 7", "0.1N H₂SO₄", "0.03N NH₄F + 0.025N HCl", "0.5M NaHCO₃ at pH 8.5"],
    correct: 2,
    explanation: "The Bray-P1 extraction uses 0.03N NH₄F + 0.025N HCl — the fluoride dissolves Al-P and Fe-P in acid soils. The Olsen method (NaHCO₃, pH 8.5) is preferred for neutral to alkaline soils."
  },
  {
    id: "d121l_110",
    subject: "da-121",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The minimum number of sub-samples recommended for compositing a representative soil sample from a 1-hectare field is:",
    options: ["15–20", "2–3", "5–10", "50–100"],
    correct: 0,
    explanation: "For a representative composite sample, 15–20 random sub-samples (zigzag or random pattern) are collected from a uniform 1-hectare field, thoroughly mixed, and a 500 g representative sample retained."
  },
  {
    id: "d121l_111",
    subject: "da-121",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The critical limit of available soil potassium (NH₄OAc extractable K) for most crops in Indian soils is:",
    options: ["< 110–150 kg K₂O ha⁻¹", "< 300 kg K₂O ha⁻¹", "< 50 kg K₂O ha⁻¹", "< 500 kg K₂O ha⁻¹"],
    correct: 0,
    explanation: "The critical limit for exchangeable K is typically 110–150 kg K₂O ha⁻¹ (or about 0.2 cmol(+) kg⁻¹). Soils below this are classified as K-deficient in ICAR recommendations."
  },
  {
    id: "d121l_112",
    subject: "da-121",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Soil Organic Carbon is analytically determined by which standard method?",
    options: ["Ion exchange chromatography", "Walkley-Black wet oxidation with K₂Cr₂O₇", "Kjeldahl digestion with H₂SO₄", "Colorimetric analysis with Griess reagent"],
    correct: 1,
    explanation: "The Walkley-Black method (wet oxidation with K₂Cr₂O₇ in H₂SO₄, back-titrated with FAS) is the standard method for soil organic carbon determination in soil testing laboratories."
  },
  {
    id: "d121l_113",
    subject: "da-121",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Soil fertility maps prepared by systematic soil testing across a district are used primarily for:",
    options: ["Calculating rainfall patterns for irrigation planning under standard field conditions", "Identifying spatial variability and guiding site-specific fertilizer recommendations", "Estimating soil erosion rates in watersheds under standard field conditions", "Determining soil pH for liming recommendations only under standard field conditions"],
    correct: 1,
    explanation: "Soil fertility maps reveal spatial patterns of nutrient deficiency/sufficiency across landscape units, enabling site-specific nutrient management (SSNM) to optimise fertilizer use efficiency."
  },
  {
    id: "d121l_114",
    subject: "da-121",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The Soil Health Card (SHC) scheme in India provides information to farmers on:",
    options: ["Seed variety recommendations and sowing dates in soil science", "Crop insurance premium rates and subsidy eligibility", "Rainfall forecast and irrigation scheduling advice for soil management", "Soil test values and fertilizer recommendations for 12 nutrient parameters"],
    correct: 3,
    explanation: "The Soil Health Card (launched 2015) provides farmers with soil test results for 12 parameters (pH, EC, OC, N, P, K and 6 micronutrients) and crop-wise fertilizer recommendations every 3 years."
  },
  {
    id: "d121l_115",
    subject: "da-121",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Available soil nitrogen is estimated by which commonly used method in soil testing laboratories?",
    options: ["Olsen method (NaHCO₃ extraction) in soil science", "Boiling water extraction for soil management", "DTPA extraction with atomic absorption spectrophotometry", "Alkaline permanganate (KMnO₄) method by Subbiah and Asija"],
    correct: 3,
    explanation: "The alkaline potassium permanganate method (Subbiah and Asija, 1956) is the standard method for available N in Indian soil testing labs. It measures NH₄⁺ released by alkaline KMnO₄ oxidation."
  },
  {
    id: "d121l_116",
    subject: "da-121",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The 'sufficiency level of available nutrients' (SLAN) concept in soil fertility evaluation assumes:",
    options: ["There is a soil nutrient level above which crop response to added nutrient is unlikely", "All soils require the same amount of fertilizer for maximum yield", "Nutrients in soil and fertilizer are equally efficient at all levels", "Crop yield depends only on the most limiting nutrient"],
    correct: 0,
    explanation: "SLAN (Sufficiency Level of Available Nutrients) identifies the soil test value above which there is no significant crop response to additional fertilizer — the 'critical level' concept in soil fertility."
  },
  {
    id: "d121l_117",
    subject: "da-121",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The DTPA extraction solution (Lindsay and Norvell, 1978) is used to determine plant-available:",
    options: ["Iron (Fe), Manganese (Mn), Zinc (Zn), and Copper (Cu) micronutrients", "Calcium (Ca) and Magnesium (Mg) in soil science", "Boron (B) and Molybdenum (Mo) for soil management", "Nitrogen (N) and phosphorus (P) in soil fertility"],
    correct: 0,
    explanation: "DTPA (diethylenetriaminepentaacetic acid) at pH 7.3 is the standard chelating extractant for Fe, Mn, Zn, and Cu in neutral to alkaline soils. It mimics root chelation activity."
  },
  {
    id: "d121l_118",
    subject: "da-121",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The Mitscherlich equation describes the relationship between:",
    options: ["Soil pH and nutrient availability in soil science under standard field conditions", "Crop yield and irrigation water applied for soil management under standard field conditions", "Crop yield and quantity of a limiting nutrient applied (law of diminishing returns)", "Soil texture and water holding capacity in soil fertility under standard field conditions"],
    correct: 2,
    explanation: "Mitscherlich's equation (Y = A[1 – e^(–cx)]) describes the diminishing yield response as a nutrient is added in increasing amounts — the mathematical basis of fertilizer response curves."
  },
  {
    id: "d121l_119",
    subject: "da-121",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Leaf colour chart (LCC) for nitrogen management in rice is used to:",
    options: ["Estimate crop maturity and harvest date in soil science", "Identify disease infections from leaf discolouration for soil management", "Assess water stress in rice paddies in soil fertility", "Determine real-time N status of the crop for split application decisions"],
    correct: 3,
    explanation: "The LCC is a simple plastic strip with colour panels (1–4 or 1–6) compared against the rice leaf. When leaf colour drops below threshold (usually panel 3 or 4), N fertilizer application is triggered."
  },
  {
    id: "d121l_120",
    subject: "da-121",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "In Telangana, the state soil testing laboratory network aims to test soil samples and issue Soil Health Cards at a frequency of once every:",
    options: ["1 year", "5 years", "3 years", "6 months"],
    correct: 2,
    explanation: "The GOI Soil Health Card scheme mandates soil testing and issuance of SHCs once every 3 years (two-year cycle in some states) to track changes in soil fertility and update recommendations."
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 9: Problem Soils
  // ─────────────────────────────────────────────────────────
  {
    id: "d121l_121",
    subject: "da-121",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "A soil is classified as 'saline' when its electrical conductivity of saturation extract (ECe) exceeds:",
    options: ["8 dS m⁻¹", "2 dS m⁻¹", "4 dS m⁻¹", "1 dS m⁻¹"],
    correct: 2,
    explanation: "USDA-Riverside classification: Saline soils have ECe > 4 dS m⁻¹ (4 mmhos/cm), pH < 8.5, and ESP < 15. Crop growth is reduced when ECe exceeds crop-specific thresholds."
  },
  {
    id: "d121l_122",
    subject: "da-121",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "A sodic (alkali) soil is characterised by:",
    options: ["ECe < 4 dS m⁻¹, pH > 8.5, ESP > 15", "ECe > 8 dS m⁻¹, pH < 7, ESP > 30", "ECe > 4 dS m⁻¹, pH > 8.5, ESP < 15", "ECe > 4 dS m⁻¹, pH < 8.5, ESP < 15"],
    correct: 0,
    explanation: "Sodic (alkali) soils: ECe < 4 dS m⁻¹ (low salinity), ESP > 15 (high exchangeable Na), pH > 8.5 (high). High Na disperses clay, destroying soil structure and reducing water infiltration."
  },
  {
    id: "d121l_123",
    subject: "da-121",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Reclamation of sodic (alkali) soils is accomplished primarily by applying:",
    options: ["Agricultural lime (CaCO₃) to increase pH under standard field conditions", "Gypsum (CaSO₄·2H₂O) to replace Na⁺ with Ca²⁺ on exchange sites", "Sulphur (S) to directly neutralise Na⁺ under standard field conditions", "MOP (muriate of potash) to replace Na⁺ with K⁺"],
    correct: 1,
    explanation: "Gypsum (CaSO₄·2H₂O) provides Ca²⁺ to replace Na⁺ on exchange sites. The displaced Na₂SO₄ is then leached out with irrigation water. Elemental S lowers pH in calcareous sodic soils (S → H₂SO₄ → CaSO₄)."
  },
  {
    id: "d121l_124",
    subject: "da-121",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Reclamation of acid soils is achieved by applying agricultural lime (CaCO₃). The amount of lime required is called:",
    options: ["Buffer capacity", "Gypsum requirement (GR)", "Lime requirement (LR)", "Sulphur requirement"],
    correct: 2,
    explanation: "Lime requirement (LR) is the amount of CaCO₃-equivalent material needed to raise soil pH to a desired target (usually 6.0–6.5) and neutralise exchangeable Al³⁺ and H⁺."
  },
  {
    id: "d121l_125",
    subject: "da-121",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The primary mechanism of crop toxicity in saline soils is:",
    options: ["Osmotic stress reducing water uptake ('physiological drought')", "Increase in soil pH reducing nutrient availability", "Specific ion toxicity of Cl⁻ and Na⁺ only", "Destruction of root mycorrhizal associations"],
    correct: 0,
    explanation: "The primary effect of soil salinity is osmotic — high salt concentration in soil solution lowers water potential, reducing plant water uptake. Secondary effects include specific ion toxicity (Na⁺, Cl⁻, B) and nutrient imbalance."
  },
  {
    id: "d121l_126",
    subject: "da-121",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Saline-sodic soils have properties of:",
    options: ["ECe > 4 dS m⁻¹, ESP < 15, pH < 8.5", "ECe < 4 dS m⁻¹, ESP > 15, pH > 8.5", "ECe < 4 dS m⁻¹, ESP < 15, pH < 8.5", "ECe > 4 dS m⁻¹, ESP > 15, pH 8.0–8.5"],
    correct: 3,
    explanation: "Saline-sodic soils: ECe > 4 dS m⁻¹ AND ESP > 15, pH usually 8.0–8.5 (Ca-Mg salts keep pH lower than pure sodic soils). Reclamation requires both gypsum and leaching."
  },
  {
    id: "d121l_127",
    subject: "da-121",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Acid soil toxicity is primarily caused by excess amounts of which ion in the soil solution?",
    options: ["Fe²⁺ (ferrous iron toxicity only)", "SO₄²⁻ (sulphate) ions for soil management", "H⁺ ion alone in soil science", "Al³⁺ and Mn²⁺ ions (aluminium and manganese toxicity)"],
    correct: 3,
    explanation: "Below pH 5.5, Al³⁺ and Mn²⁺ become soluble in toxic concentrations. Al³⁺ is the primary toxicity factor inhibiting root elongation in acid soils globally; Mn²⁺ toxicity is also common."
  },
  {
    id: "d121l_128",
    subject: "da-121",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Leaching requirement (LR) in saline soil management refers to:",
    options: ["Amount of lime needed to neutralise soil acidity in soil science under standard field conditions", "Fraction of applied irrigation water that must pass through the root zone to prevent salt accumulation", "Electrical conductivity threshold for crop selection for soil management under standard field conditions", "Rate of salt movement from subsoil to surface by capillary rise under standard field conditions"],
    correct: 1,
    explanation: "Leaching requirement = ECw / (5 × ECe threshold – ECw), representing the fraction of irrigation water that must drain below the root zone to maintain root zone salinity at or below the crop tolerance threshold."
  },
  {
    id: "d121l_129",
    subject: "da-121",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Waterlogging reclamation of sodic soils is initially best done by growing which crop?",
    options: ["Wheat (sensitive to waterlogging)", "Rice (tolerant of submergence; leaching effect)", "Groundnut (sensitive to excess moisture)", "Cotton (medium-sensitive)"],
    correct: 1,
    explanation: "Rice is the recommended reclamation crop for sodic soils in India because ponded water promotes leaching of Na⁺, and the continuous submergence reduces soil pH and ameliorates alkalinity over time."
  },
  {
    id: "d121l_130",
    subject: "da-121",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Gypsum requirement (GR) for reclamation of sodic soil is determined based on:",
    options: ["Electrical conductivity of irrigation water in soil science", "Exchangeable sodium that must be replaced to reduce ESP to a target level", "Organic carbon content of the soil in soil fertility", "Total salt content of the soil for soil management"],
    correct: 1,
    explanation: "GR (t ha⁻¹) = [(Initial ESP – Target ESP) × CEC × bulk density × depth] / 100 × 0.86. It represents the Ca needed to replace excess Na⁺ from the exchange complex."
  },
  {
    id: "d121l_131",
    subject: "da-121",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Acid sulphate soils are characterised by the presence of which mineral that oxidises to produce extreme acidity?",
    options: ["Calcite (CaCO₃)", "Pyrite (FeS₂)", "Gypsum (CaSO₄)", "Dolomite [CaMg(CO₃)₂]"],
    correct: 1,
    explanation: "Acid sulphate soils contain pyrite (FeS₂). When drained and oxidised, pyrite reacts with oxygen and water to produce sulphuric acid, dropping pH to below 3.5, releasing toxic Fe²⁺ and Al³⁺."
  },
  {
    id: "d121l_132",
    subject: "da-121",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The term 'usar' is the traditional Indian name for which type of problem soil?",
    options: ["Sodic (alkali) soils with hard Na-clay crusts", "Waterlogged peat soils", "Laterite soils of Western Ghats", "Acid soils in humid forests"],
    correct: 0,
    explanation: "'Usar' lands are traditional Indian sodic (alkali) soils found mainly in the Indo-Gangetic plains. They have high pH (> 8.5), ESP > 15, and characteristic black surface crust; 'Reh' refers to salt efflorescence."
  },
  {
    id: "d121l_133",
    subject: "da-121",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The salt tolerance of crop plants is ranked correctly as:",
    options: ["Rice = Barley (equally most tolerant) > Beans > Cotton under standard field conditions", "Groundnut > Wheat > Maize > Cotton (most to least tolerant) under standard field conditions", "Barley > Wheat > Rice > Sugarbeet (most to least tolerant) under standard field conditions", "Sugarbeet > Barley > Cotton > Wheat > Rice > Beans (approximate tolerance order)"],
    correct: 3,
    explanation: "General salt tolerance order: Sugarbeet > Barley > Cotton > Wheat > Maize > Rice > Beans. Rice is moderately sensitive; beans are sensitive. Barley is among the most salt-tolerant cereals."
  },
  {
    id: "d121l_134",
    subject: "da-121",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Elemental sulphur (S) can be used for reclamation of calcareous sodic soils because:",
    options: ["Microbial oxidation of S produces H₂SO₄ which reacts with CaCO₃ to release Ca²⁺ for Na⁺ replacement", "S directly precipitates Na⁺ as Na₂SO₄ in soil science under standard field conditions", "S provides sulphur nutrition to crops growing in alkaline soils for soil management", "S raises soil pH, improving structure in soil fertility under standard field conditions"],
    correct: 0,
    explanation: "In calcareous sodic soils: S + O₂ + H₂O → H₂SO₄ (microbial); H₂SO₄ + CaCO₃ → CaSO₄ + H₂O + CO₂. The CaSO₄ formed acts like applied gypsum to displace Na⁺ from exchange sites."
  },
  {
    id: "d121l_135",
    subject: "da-121",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Saline soils in India are predominantly found in which states/regions?",
    options: ["Gujarat, Rajasthan, Haryana, Punjab, Maharashtra coastal areas", "West Bengal and Assam (high rainfall areas) under standard field conditions", "Himachal Pradesh and Uttarakhand (hill states)", "Kerala and Karnataka humid zones under standard field conditions"],
    correct: 0,
    explanation: "Saline soils (and sodic soils) are concentrated in arid/semi-arid regions: Gujarat (Rann of Kutch), Rajasthan, Haryana, Punjab (canal irrigation areas), and Maharashtra's coastal/inland saline tracts."
  },

  // ─────────────────────────────────────────────────────────
  // LECTURE 10: Soil Conservation & Erosion
  // ─────────────────────────────────────────────────────────
  {
    id: "d121l_136",
    subject: "da-121",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The Universal Soil Loss Equation (USLE) estimates annual soil loss as A = R × K × L × S × C × P. What does the K factor represent?",
    options: ["Rainfall erosivity factor in soil science under standard field conditions", "Soil erodibility factor (resistance of soil to erosion and transport)", "Crop and management factor for soil management under standard field conditions", "Slope length and steepness factor in soil fertility under standard field conditions"],
    correct: 1,
    explanation: "K is the soil erodibility factor in USLE — the susceptibility of a specific soil to erosion based on texture, structure, organic matter, and permeability. Higher K = more erodible soil."
  },
  {
    id: "d121l_137",
    subject: "da-121",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Sheet erosion refers to:",
    options: ["Wind removal of fine particles from the soil surface in soil fertility under standard field conditions", "Removal of soil in distinct channels cut by concentrated water flow in soil science under standard field conditions", "Large-scale mass movement of soil on steep slopes for soil management under standard field conditions", "Relatively uniform removal of a thin layer of soil over a broad area by raindrop splash and surface runoff"],
    correct: 3,
    explanation: "Sheet erosion is the least visible but most widespread erosion type — uniform removal of a thin soil layer over a wide area by rainfall splash and shallow overland flow, often going unnoticed until subsoil is exposed."
  },
  {
    id: "d121l_138",
    subject: "da-121",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The T value (soil loss tolerance) in soil conservation planning refers to:",
    options: ["Threshold rainfall intensity triggering erosion in soil science under standard field conditions", "Maximum tolerable soil temperature for crop growth for soil management under standard field conditions", "Total organic matter needed to maintain soil fertility under standard field conditions", "Maximum rate of soil erosion (in t ha⁻¹ yr⁻¹) that still permits sustained crop productivity"],
    correct: 3,
    explanation: "T value is the maximum permissible soil loss that allows maintaining long-term soil productivity. In India, T values range from 2.5–12.5 t ha⁻¹ yr⁻¹ depending on soil depth and productivity potential."
  },
  {
    id: "d121l_139",
    subject: "da-121",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Contour bunding is a soil conservation measure that works by:",
    options: ["Planting trees along ridgelines to break wind velocity under standard field conditions", "Constructing earthen embankments along contour lines to impede downslope water flow", "Deep ploughing to break impervious hardpan layers under standard field conditions", "Applying chemical soil stabilisers to the surface under standard field conditions"],
    correct: 1,
    explanation: "Contour bunds are earthen embankments constructed along contour lines (equal elevation) across slopes. They slow runoff, reduce rill and gully erosion, and promote infiltration and moisture conservation."
  },
  {
    id: "d121l_140",
    subject: "da-121",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Rill erosion differs from gully erosion in that:",
    options: ["Rills form in sandy soils while gullies form only in clay soils in irrigated crop production systems", "Rills are small, shallow channels that can be removed by normal tillage; gullies are large, deep channels that cannot", "Rills are deeper (> 30 cm) and cannot be obliterated by normal tillage under standard field conditions", "Rill erosion occurs only on flat land, gully erosion only on steep slopes under standard field conditions"],
    correct: 1,
    explanation: "Rills are small (< 30 cm deep) channels removed by tillage; gullies are large (> 30 cm) incised channels that cannot be crossed by machinery and require major engineering structures to control."
  },
  {
    id: "d121l_141",
    subject: "da-121",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Windbreaks (shelterbelts) reduce wind erosion by:",
    options: ["Increasing soil moisture to above field capacity in soil science", "Reducing wind velocity near the soil surface and trapping drifting soil particles", "Acidifying soil pH to increase cohesion for soil management", "Providing organic matter through leaf fall to bind soil particles"],
    correct: 1,
    explanation: "Windbreaks (rows of trees/shrubs) reduce wind speed for a distance of 10–15 times their height on the leeward side, protecting the soil surface from detachment and transport of particles by wind."
  },
  {
    id: "d121l_142",
    subject: "da-121",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The R factor in the USLE represents:",
    options: ["Relief factor based on land slope", "Runoff coefficient of the watershed in soil science", "Root density factor reducing erosion for soil management", "Rainfall erosivity (based on rainfall kinetic energy × intensity)"],
    correct: 3,
    explanation: "R is the rainfall erosivity index — computed as sum of products of kinetic energy (E) and maximum 30-minute intensity (I₃₀) for each storm. Higher R = more erosive rainfall climate."
  },
  {
    id: "d121l_143",
    subject: "da-121",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Terracing as a soil conservation measure is most effective on:",
    options: ["Flat to gently sloping land (< 1%)", "Sandy desert soils with low clay content", "Moderately to steeply sloping cultivated lands (> 5%)", "Heavy-textured waterlogged valley soils"],
    correct: 2,
    explanation: "Terraces (bench terraces, broad-based terraces) are constructed on slopes > 5% to convert a long slope into a series of short, nearly level or gently sloping steps, reducing runoff velocity and erosion."
  },
  {
    id: "d121l_144",
    subject: "da-121",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The process by which wind picks up and transports dry, loose soil particles is called:",
    options: ["Deposition", "Abrasion", "Saltation", "Deflation"],
    correct: 3,
    explanation: "Deflation is the erosive process by which wind lifts and carries away dry, loose soil particles from the surface. Saltation (bouncing) and creep are wind transport modes; deflation is the erosion/detachment process."
  },
  {
    id: "d121l_145",
    subject: "da-121",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The most effective biological measure for controlling soil erosion on degraded lands is:",
    options: ["Construction of concrete check dams in soil science under standard field conditions", "Deep ploughing to bury eroded material under standard field conditions", "Application of chemical soil conditioners for soil management", "Establishment of grass cover, contour grass strips (vegetative barriers)"],
    correct: 3,
    explanation: "Permanent grass/vegetation cover is the most effective biological measure — plant roots bind soil, canopy intercepts raindrops reducing splash, and stems slow runoff. Vetiver grass strips are widely used in India."
  },
  {
    id: "d121l_146",
    subject: "da-121",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Raindrop splash erosion (splash detachment) is significant because:",
    options: ["Raindrops compact the soil surface, directly causing erosion in soil science", "Raindrops create macropores that increase infiltration for soil management", "Raindrops dissolve clay and carry it in suspension immediately", "Raindrops detach soil particles on impact, making them available for transport by runoff"],
    correct: 3,
    explanation: "Raindrop impact detaches soil aggregates (splash detachment) at the first stage of water erosion. The detached particles are then transported by surface runoff. A good canopy cover (crops, mulch) prevents raindrop impact."
  },
  {
    id: "d121l_147",
    subject: "da-121",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Mulching as a soil conservation technique helps by:",
    options: ["Protecting soil surface from raindrop impact, reducing runoff, and improving infiltration", "Compacting the surface to prevent wind erosion in soil science under standard field conditions", "Adding nitrogen to the soil through biological fixation under standard field conditions", "Increasing soil pH to reduce erosion for soil management under standard field conditions"],
    correct: 0,
    explanation: "Mulches (crop residues, straw, plastic film) protect the soil from raindrop splash, reduce surface runoff velocity, maintain moisture, moderate temperature, and add organic matter — all reducing erosion."
  },
  {
    id: "d121l_148",
    subject: "da-121",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Strip cropping for erosion control involves:",
    options: ["Planting crops in single rows perpendicular to slope direction in irrigated crop production systems", "Alternating strips of erosion-permitting (row crops) and erosion-resisting (grasses/legumes) crops along contours", "Removing all vegetation in strips to allow rainwater infiltration under standard field conditions", "Growing a single crop in a wide strip across the entire field in irrigated crop production systems"],
    correct: 1,
    explanation: "Strip cropping alternates close-growing crops (grasses, legumes — which slow runoff and filter sediment) with erosion-susceptible row crops in strips along contours, reducing net soil loss."
  },
  {
    id: "d121l_149",
    subject: "da-121",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Watershed management as a soil and water conservation strategy works at the level of:",
    options: ["Individual farm plot only in soil science in irrigated crop production systems", "Individual tree planting programs for soil management under standard field conditions", "An entire natural drainage unit (catchment) treating land and water resources holistically", "State-level policy for irrigation allocation in soil fertility under standard field conditions"],
    correct: 2,
    explanation: "Watershed management treats the entire catchment (watershed) as a unit, integrating conservation measures from ridge to valley — treating upper catchment (vegetation, contour bunds) and lower areas (check dams) to conserve soil and water."
  },
  {
    id: "d121l_150",
    subject: "da-121",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Which cropping practice best reduces soil erosion on sloping agricultural lands?",
    options: ["Bare fallow between crops", "Contour tillage and planting (across the slope)", "Burning crop residues before sowing", "Deep ploughing along the slope direction"],
    correct: 1,
    explanation: "Contour tillage and planting (furrows and crop rows perpendicular to slope) creates a series of small barriers that slow runoff, increase infiltration, and reduce rill erosion — the simplest mechanical conservation practice."
  },


  // ── BATCH 2: Additional 100 questions from PJTSAU DA-121 Theory Notes (Soil Chemistry & Fertility) ──
  {
    id: "d121x_001",
    subject: "da-121",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The word 'soil' is derived from the Latin word 'solum' which means:",
    options: ["Rock", "Cultivation", "Floor or ground", "Nutrients"],
    correct: 2,
    explanation: "As per DA-121 notes: The noun soil is derived through old French from the Latin word solum, which means floor or ground."
  },
  {
    id: "d121x_002",
    subject: "da-121",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Who is known as the 'Father of Soil Science'?",
    options: ["Dokuchaev (1900)", "Tisdale", "Jenny (1941)", "Buckman and Brady"],
    correct: 0,
    explanation: "As per DA-121 notes: Dokuchaev (1900), a Russian scientist, is known as the Father of Soil Science."
  },
  {
    id: "d121x_003",
    subject: "da-121",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Shifting cultivation is an agricultural practice approximately how many years old?",
    options: ["9000 years", "12000 years", "5000 years", "3000 years"],
    correct: 0,
    explanation: "As per DA-121 notes: Shifting cultivation is the first step in transition from food gathering to food production, nearly 9000 years old agricultural practice."
  },
  {
    id: "d121x_004",
    subject: "da-121",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "In a representative loam surface soil, the solid mineral particles comprise approximately what percentage of soil volume?",
    options: ["45%", "55%", "35%", "25%"],
    correct: 0,
    explanation: "As per DA-121 notes: In a representative loam surface soil, the solid mineral particles comprise about 45% of the soil volume and organic matter 5%."
  },
  {
    id: "d121x_005",
    subject: "da-121",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "At optimum moisture for plant growth, soil pore space is divided roughly in half. Each half comprises approximately:",
    options: ["20% water + 20% air", "25% water + 25% air", "10% water + 10% air", "30% water + 30% air"],
    correct: 1,
    explanation: "As per DA-121 notes: At optimum moisture, pore space is divided in half: 25% of volume being water and 25% air."
  },
  {
    id: "d121x_006",
    subject: "da-121",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Sand particles range in size from:",
    options: ["0.2-2.0 mm", "0.002-0.02 mm", "0.02-0.2 mm", "< 0.002 mm"],
    correct: 0,
    explanation: "As per DA-121 notes: Sand (gritty) particles are 0.2-2.0 mm in size and are visible directly with naked eye."
  },
  {
    id: "d121x_007",
    subject: "da-121",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Clay particles are defined as having a size less than:",
    options: ["0.002 mm", "0.00002 mm", "0.02 mm", "0.0002 mm"],
    correct: 0,
    explanation: "As per DA-121 notes: Clay (sticky) particles are < 0.002 mm and are visible only with Electron Microscope."
  },
  {
    id: "d121x_008",
    subject: "da-121",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Silt particles range in size from:",
    options: ["0.2-2.0 mm", "0.02-0.2 mm", "< 0.002 mm", "0.002-0.02 mm"],
    correct: 3,
    explanation: "As per DA-121 notes: Silt (powdery) particles are 0.002-0.02 mm and are visible with a regular microscope."
  },
  {
    id: "d121x_009",
    subject: "da-121",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The surface soil depth is defined as:",
    options: ["0-30 cm", "30-60 cm", "> 30 cm", "0-15 cm"],
    correct: 0,
    explanation: "As per DA-121 notes: Surface soil depth is 0-30 cm, which has more organic matter, porosity, biological activity, and nutrient availability than subsoil."
  },
  {
    id: "d121x_010",
    subject: "da-121",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Soil texture refers to the relative proportions of:",
    options: ["Sand, silt and clay in the soil", "Nitrogen, phosphorus and potassium", "Macro and micro aggregates", "Organic matter, minerals, water and air"],
    correct: 0,
    explanation: "As per DA-121 notes: Soil texture refers to the relative proportions of different sized particles (sand, silt and clay) in the soil."
  },
  {
    id: "d121x_011",
    subject: "da-121",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The hydrometer method is used for:",
    options: ["Estimating soil texture by particle size analysis", "Measuring soil moisture", "Determining soil organic matter", "Measuring soil pH"],
    correct: 0,
    explanation: "As per DA-121 notes: The hydrometer method (Bouyoucos method) is used for estimating soil texture by measuring the sedimentation rate of soil particles."
  },
  {
    id: "d121x_012",
    subject: "da-121",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The best soil structure for crop production is:",
    options: ["Platy", "Granular/Crumb", "Columnar", "Blocky"],
    correct: 1,
    explanation: "As per DA-121 notes: Granular (crumb) structure is the best for crop production as it provides good aeration, water holding, and easy root penetration."
  },
  {
    id: "d121x_013",
    subject: "da-121",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Bulk density of soil is defined as the weight of dry soil per unit of:",
    options: ["Particle volume", "Total volume (including pore space)", "Organic matter volume", "Water volume"],
    correct: 1,
    explanation: "As per DA-121 notes: Bulk density is the mass of dry soil per unit of total volume (including pore space). It ranges from 1.0-1.8 g/cm³ for mineral soils."
  },
  {
    id: "d121x_014",
    subject: "da-121",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Particle density (true density) of most mineral soils is approximately:",
    options: ["3.5 g/cm³", "1.0-1.2 g/cm³", "2.65 g/cm³", "1.5-1.8 g/cm³"],
    correct: 2,
    explanation: "As per DA-121 notes: Particle density (true density) is the weight per unit volume of solid particles only. For most mineral soils, it is approximately 2.65 g/cm³."
  },
  {
    id: "d121x_015",
    subject: "da-121",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Soil porosity is calculated as:",
    options: ["(BD/PD) × 100", "(1 - BD/PD) × 100", "BD × PD × 100", "(PD - BD) × 100"],
    correct: 1,
    explanation: "As per DA-121 notes: Porosity (%) = (1 - Bulk Density/Particle Density) × 100."
  },
  {
    id: "d121x_016",
    subject: "da-121",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Field capacity (FC) is the soil moisture content after:",
    options: ["Gravitational water has drained away (typically 1-3 days after saturation)", "Complete air drying", "All water has drained from soil", "Plants wilt permanently"],
    correct: 0,
    explanation: "As per DA-121 notes: Field capacity is the moisture content retained by soil after gravitational water has drained away (typically 1/3 bar tension for clay, 1/10 bar for sandy soils)."
  },
  {
    id: "d121x_017",
    subject: "da-121",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The Permanent Wilting Point (PWP) occurs at a soil moisture tension of approximately:",
    options: ["0.33 bar", "15 bar", "0.1 bar", "1 bar"],
    correct: 1,
    explanation: "As per DA-121 notes: The Permanent Wilting Point (PWP) occurs at approximately 15 bars tension, at which plants can no longer extract water from soil and wilt permanently."
  },
  {
    id: "d121x_018",
    subject: "da-121",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Which microorganism is responsible for nitrification (conversion of ammonium to nitrite)?",
    options: ["Thiobacillus", "Nitrosomonas", "Nitrobacter", "Clostridium"],
    correct: 2,
    explanation: "As per DA-121 notes: Nitrosomonas converts ammonium (NH4+) to nitrite (NO2-), and Nitrobacter converts nitrite to nitrate (NO3-)."
  },
  {
    id: "d121x_019",
    subject: "da-121",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Denitrification is the process by which:",
    options: ["Nitrates are converted back to gaseous nitrogen (N2) by microorganisms", "Ammonium is converted to nitrate", "Organic nitrogen is converted to ammonium", "Atmospheric nitrogen is fixed into soil"],
    correct: 0,
    explanation: "As per DA-121 notes: Denitrification is the biological process in which nitrates/nitrites are reduced to gaseous nitrogen (N2 or N2O) by denitrifying bacteria under anaerobic conditions."
  },
  {
    id: "d121x_020",
    subject: "da-121",
    lecture: "lecture-11",
    lectureNo: 11,
    question: "The C:N ratio of a material affects its decomposition rate. A material with a wide C:N ratio (e.g., > 30:1):",
    options: ["Increases soil pH significantly", "Does not decompose at all", "Decomposes slowly and may cause temporary nitrogen immobilization", "Decomposes rapidly releasing nitrogen"],
    correct: 2,
    explanation: "As per DA-121 notes: Materials with wide C:N ratio (>30:1) like wheat straw decompose slowly and may cause temporary nitrogen immobilization by microorganisms."
  },
  {
    id: "d121x_021",
    subject: "da-121",
    lecture: "lecture-12",
    lectureNo: 12,
    question: "The ideal C:N ratio of humus is approximately:",
    options: ["10:1", "5:1", "50:1", "25:1"],
    correct: 0,
    explanation: "As per DA-121 notes: The C:N ratio of stable humus is approximately 10:1 (range 10-12:1), indicating a fairly nitrogen-rich material."
  },
  {
    id: "d121x_022",
    subject: "da-121",
    lecture: "lecture-13",
    lectureNo: 13,
    question: "Humus refers to:",
    options: ["Living soil microorganisms", "Stable, dark-coloured, colloidal end product of organic matter decomposition", "Fresh undecomposed plant material", "Clay minerals in soil"],
    correct: 1,
    explanation: "As per DA-121 notes: Humus is the stable, dark-coloured, colloidal end product of organic matter decomposition. It improves soil structure, water-holding capacity, and nutrient availability."
  },
  {
    id: "d121x_023",
    subject: "da-121",
    lecture: "lecture-14",
    lectureNo: 14,
    question: "Soil colloids are important in soil because they:",
    options: ["Reduce water infiltration", "Increase soil bulk density", "Only reduce soil aeration", "Have large surface area and carry negative charges attracting cations"],
    correct: 3,
    explanation: "As per DA-121 notes: Soil colloids (clay and humus) are important because of their large surface area and ability to carry negative charges, which attract and hold cations (nutrients)."
  },
  {
    id: "d121x_024",
    subject: "da-121",
    lecture: "lecture-15",
    lectureNo: 15,
    question: "Cation Exchange is the ability of soil to:",
    options: ["Release anions into solution", "Exchange or substitute cations between soil solution and soil particles", "Convert ammonium to nitrate", "Fix nitrogen from atmosphere"],
    correct: 1,
    explanation: "As per DA-121 notes: Cation exchange is the ability of soil particles (colloids) to adsorb cations reversibly and exchange them with cations in soil solution."
  },
  {
    id: "d121x_025",
    subject: "da-121",
    lecture: "lecture-16",
    lectureNo: 16,
    question: "The Cation Exchange Capacity (CEC) is expressed as:",
    options: ["mg/100g of soil", "% by weight", "cmol(p+)/kg (or meq/100g)", "ppm"],
    correct: 0,
    explanation: "As per DA-121 notes: CEC is expressed as cmol(p+)/kg (centimoles of positive charge per kg) or meq/100g of soil."
  },
  {
    id: "d121x_026",
    subject: "da-121",
    lecture: "lecture-16",
    lectureNo: 16,
    question: "Which soil fraction has the highest CEC?",
    options: ["Silt", "Gravel", "Clay and humus (organic matter)", "Sand"],
    correct: 2,
    explanation: "As per DA-121 notes: Clay and humus (organic matter) have the highest CEC due to their large surface area and high negative charge density."
  },
  {
    id: "d121x_027",
    subject: "da-121",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "The soil pH scale ranges from:",
    options: ["0-7", "4-10", "1-14", "0-14"],
    correct: 0,
    explanation: "As per DA-121 notes: The pH scale ranges from 0-14. pH 7 is neutral, below 7 is acidic and above 7 is alkaline."
  },
  {
    id: "d121x_028",
    subject: "da-121",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "The optimum soil pH range for most crop plants is:",
    options: ["3-5", "6-7.5", "8-10", "5-6"],
    correct: 1,
    explanation: "As per DA-121 notes: The optimum soil pH range for most crop plants is 6-7.5 where most nutrients are available."
  },
  {
    id: "d121x_029",
    subject: "da-121",
    lecture: "lecture-20",
    lectureNo: 20,
    question: "At pH below 5.5, which element becomes toxic to most plants?",
    options: ["Calcium", "Aluminium (Al) and Manganese (Mn)", "Iron", "Magnesium"],
    correct: 1,
    explanation: "As per DA-121 notes: At pH below 5.5, Aluminium (Al) and Manganese (Mn) become soluble and toxic to most crops. Fe toxicity also occurs at very low pH."
  },
  {
    id: "d121x_030",
    subject: "da-121",
    lecture: "lecture-20",
    lectureNo: 20,
    question: "At high pH (> 8.0), which micronutrients become deficient?",
    options: ["Potassium and calcium", "Nitrogen and phosphorus", "Fe, Mn, Zn, Cu, B (micronutrients become less available)", "Manganese and zinc only"],
    correct: 2,
    explanation: "As per DA-121 notes: At high pH (>8.0), micronutrients like Fe, Mn, Zn, Cu and B become less soluble and hence deficient in plants."
  },
  {
    id: "d121x_031",
    subject: "da-121",
    lecture: "lecture-21",
    lectureNo: 21,
    question: "Saline soils are characterized by an Electrical Conductivity (EC) greater than:",
    options: ["8 dS/m", "2 dS/m", "12 dS/m", "4 dS/m"],
    correct: 3,
    explanation: "As per DA-121 notes: Saline soils have an Electrical Conductivity (EC) greater than 4 dS/m (mmhos/cm), with pH below 8.5."
  },
  {
    id: "d121x_032",
    subject: "da-121",
    lecture: "lecture-21",
    lectureNo: 21,
    question: "Sodic (alkali) soils are characterized by Exchangeable Sodium Percentage (ESP) greater than:",
    options: ["10%", "15%", "5%", "25%"],
    correct: 2,
    explanation: "As per DA-121 notes: Sodic (alkali) soils have ESP greater than 15%, with pH above 8.5 and poor soil structure."
  },
  {
    id: "d121x_033",
    subject: "da-121",
    lecture: "lecture-22",
    lectureNo: 22,
    question: "Gypsum is used for reclamation of:",
    options: ["Saline soils", "Acid soils", "Sodic/alkaline soils", "Sandy soils"],
    correct: 2,
    explanation: "As per DA-121 notes: Gypsum (CaSO4) is used for reclamation of sodic/alkaline soils. Calcium from gypsum replaces sodium from the exchange complex."
  },
  {
    id: "d121x_034",
    subject: "da-121",
    lecture: "lecture-22",
    lectureNo: 22,
    question: "Lime (CaCO3) is used for reclamation of:",
    options: ["Waterlogged soils", "Sodic soils", "Acid soils", "Saline soils"],
    correct: 2,
    explanation: "As per DA-121 notes: Agricultural lime (CaCO3) is used for reclamation of acid soils by neutralizing acidity and increasing pH."
  },
  {
    id: "d121x_035",
    subject: "da-121",
    lecture: "lecture-23",
    lectureNo: 23,
    question: "Black cotton soils of India are also known as:",
    options: ["Entisols", "Laterite soils", "Vertisols (regur soils)", "Alfisols"],
    correct: 2,
    explanation: "As per DA-121 notes: Black cotton soils are also known as Vertisols or Regur soils. They are rich in montmorillonite clay and swell when wet, crack when dry."
  },
  {
    id: "d121x_036",
    subject: "da-121",
    lecture: "lecture-23",
    lectureNo: 23,
    question: "Laterite soils are formed due to:",
    options: ["Deposition of river sediments", "Volcanic activity", "Intensive leaching in high rainfall areas leaving Fe and Al oxides", "Wind deposition"],
    correct: 2,
    explanation: "As per DA-121 notes: Laterite soils are formed due to intensive leaching in high rainfall areas, leaving iron and aluminium oxides. They are low in fertility."
  },
  {
    id: "d121x_037",
    subject: "da-121",
    lecture: "lecture-24",
    lectureNo: 24,
    question: "How many essential nutrients are required by plants?",
    options: ["14", "20", "17", "12"],
    correct: 3,
    explanation: "As per DA-121 notes: There are 17 essential nutrients required by plants: C, H, O, N, P, K, Ca, Mg, S (macronutrients) and Fe, Mn, Zn, Cu, Mo, B, Cl, Ni (micronutrients)."
  },
  {
    id: "d121x_038",
    subject: "da-121",
    lecture: "lecture-24",
    lectureNo: 24,
    question: "The criteria of essentiality of a nutrient includes which of the following?",
    options: ["The plant cannot complete its life cycle without it and no other element can substitute for it", "It must be produced by the plant itself", "Its absence causes no visible deficiency", "It must be present in large quantities"],
    correct: 2,
    explanation: "As per DA-121 notes: Arnon's criteria of essentiality: (1) Deficiency prevents normal growth/reproduction; (2) The deficiency symptom is specific to that element; (3) The element is directly involved in plant metabolism."
  },
  {
    id: "d121x_039",
    subject: "da-121",
    lecture: "lecture-25",
    lectureNo: 25,
    question: "Nitrogen deficiency in plants shows which symptoms?",
    options: ["Yellowing (chlorosis) starting from older/lower leaves", "Brown scorching of leaf margins", "Purple coloration of leaves", "Interveinal chlorosis"],
    correct: 0,
    explanation: "As per DA-121 notes: Nitrogen deficiency causes yellowing (chlorosis) starting from older/lower leaves and spreads upward as nitrogen is mobile and moves from older to younger leaves."
  },
  {
    id: "d121x_040",
    subject: "da-121",
    lecture: "lecture-26",
    lectureNo: 26,
    question: "Phosphorus deficiency in plants shows:",
    options: ["Interveinal chlorosis", "Yellowing of older leaves", "Purple or reddish coloration of leaves (due to anthocyanin accumulation)", "Tip burn"],
    correct: 2,
    explanation: "As per DA-121 notes: Phosphorus deficiency causes purple or reddish coloration of leaves due to accumulation of anthocyanins. Roots are also stunted."
  },
  {
    id: "d121x_041",
    subject: "da-121",
    lecture: "lecture-26",
    lectureNo: 26,
    question: "Potassium deficiency primarily shows:",
    options: ["Brown scorching/burning of leaf tips and margins (tip burn)", "Purple coloration", "Yellow spots on young leaves", "White striping on leaves"],
    correct: 0,
    explanation: "As per DA-121 notes: Potassium deficiency causes brown scorching or burning of leaf tips and margins (tip burn), starting with older leaves."
  },
  {
    id: "d121x_042",
    subject: "da-121",
    lecture: "lecture-26",
    lectureNo: 26,
    question: "Calcium deficiency primarily affects:",
    options: ["Stem tissues only", "Only the roots", "Older mature leaves", "Young tissues and growing points (meristematic tissues)"],
    correct: 3,
    explanation: "As per DA-121 notes: Calcium is immobile in plants, so deficiency first appears in young tissues and growing points (meristems), causing tip burn in lettuce, blossom-end rot in tomato."
  },
  {
    id: "d121x_043",
    subject: "da-121",
    lecture: "lecture-27",
    lectureNo: 27,
    question: "Iron deficiency shows which characteristic symptom?",
    options: ["Yellowing starting from old leaves", "Marginal burning of leaves", "Purple coloration", "Interveinal chlorosis on young leaves (veins remain green, between veins turn yellow)"],
    correct: 3,
    explanation: "As per DA-121 notes: Iron deficiency causes interveinal chlorosis on young leaves where veins remain green but the area between veins turns yellow."
  },
  {
    id: "d121x_044",
    subject: "da-121",
    lecture: "lecture-27",
    lectureNo: 27,
    question: "Zinc deficiency in paddy is also called:",
    options: ["Khaira disease", "Witches broom", "Rosette", "Little leaf"],
    correct: 0,
    explanation: "As per DA-121 notes: Zinc deficiency in paddy causes Khaira disease, characterized by brown rusty spots on leaves and stunted growth."
  },
  {
    id: "d121x_045",
    subject: "da-121",
    lecture: "lecture-27",
    lectureNo: 27,
    question: "Boron deficiency causes which characteristic symptoms?",
    options: ["Purple leaf coloration", "Brown leaf tips", "Death of growing points, malformation of fruits and hollow heart in crops like cauliflower", "Interveinal chlorosis"],
    correct: 2,
    explanation: "As per DA-121 notes: Boron deficiency causes death of growing points (terminal buds), malformation of fruits, and hollow heart disease in cauliflower and beet."
  },
  {
    id: "d121x_046",
    subject: "da-121",
    lecture: "lecture-28",
    lectureNo: 28,
    question: "Soil test helps in:",
    options: ["Measuring crop yield in soil science under standard field conditions", "Diagnosing soil nutrient status and making fertilizer recommendations", "Predicting pest outbreaks for soil management under standard field conditions", "Weather forecasting in soil fertility under standard field conditions"],
    correct: 1,
    explanation: "As per DA-121 notes: Soil testing helps determine the nutritional status of soil and makes balanced fertilizer recommendations to achieve optimum crop production."
  },
  {
    id: "d121x_047",
    subject: "da-121",
    lecture: "lecture-30",
    lectureNo: 30,
    question: "Site Specific Nutrient Management (SSNM) is based on:",
    options: ["Using only organic fertilisers", "Applying maximum possible nutrients", "Applying uniform fertiliser to entire farm", "Tailoring nutrient application based on specific soil and crop needs of each location"],
    correct: 3,
    explanation: "As per DA-121 notes: SSNM involves tailoring nutrient applications to match the specific needs of the crop and the supply from the soil at each site for optimal efficiency."
  },
  {
    id: "d121x_048",
    subject: "da-121",
    lecture: "lecture-31",
    lectureNo: 31,
    question: "Soil pollution is primarily caused by:",
    options: ["Natural weathering of rocks", "Excessive use of agrochemicals, industrial waste, and heavy metals", "Water movement", "Wind action"],
    correct: 1,
    explanation: "As per DA-121 notes: Soil pollution is primarily caused by excessive use of agrochemicals (pesticides, fertilizers), industrial waste, heavy metals, and plastic pollution."
  },
  {
    id: "d121x_049",
    subject: "da-121",
    lecture: "lecture-32",
    lectureNo: 32,
    question: "The main greenhouse gas emitted from rice paddies is:",
    options: ["Methane (CH4)", "Water vapour", "Nitrous oxide (N2O)", "Carbon dioxide (CO2)"],
    correct: 0,
    explanation: "As per DA-121 notes: Rice paddies emit significant amounts of methane (CH4) under anaerobic (flooded) conditions, making it a major agricultural source of greenhouse gases."
  },
  {
    id: "d121x_050",
    subject: "da-121",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "Active acidity in soil refers to:",
    options: ["Acidity due to mineral weathering", "Acidity due to hydrogen ions in soil solution", "Acidity due to exchangeable cations on colloids", "Acidity created by microorganisms"],
    correct: 1,
    explanation: "As per DA-121 notes: Active acidity refers to the concentration of H+ ions in soil solution, measured directly as pH. Reserve (potential) acidity is the H+ held on soil colloids."
  },
  {
    id: "d121x_051",
    subject: "da-121",
    lecture: "lecture-21",
    lectureNo: 21,
    question: "The white efflorescence seen on the surface of saline soils is mainly due to:",
    options: ["Calcium carbonate", "Sodium chloride and sodium sulphate salts", "Iron oxide", "Aluminium sulphate"],
    correct: 1,
    explanation: "As per DA-121 notes: White efflorescence (salt crust) on saline soil surface is due to sodium chloride (NaCl), sodium sulphate (Na2SO4) and other soluble salts."
  },
  {
    id: "d121x_052",
    subject: "da-121",
    lecture: "lecture-23",
    lectureNo: 23,
    question: "Alluvial soils are mainly found in:",
    options: ["Himalayan foothills and river plains", "Coastal areas only", "Rajasthan desert", "Deccan Plateau"],
    correct: 0,
    explanation: "As per DA-121 notes: Alluvial soils are mainly found in river plains and deltas, particularly in the Indo-Gangetic plains and river deltas. They are the most fertile soils in India."
  },
  {
    id: "d121x_053",
    subject: "da-121",
    lecture: "lecture-24",
    lectureNo: 24,
    question: "Elements supplied by air and water to plants are:",
    options: ["N, P, K", "Fe, Mn, Zn", "Ca, Mg, S", "C, H, O"],
    correct: 0,
    explanation: "As per DA-121 notes: Carbon (CO2 from air) and Hydrogen and Oxygen (from water) are supplied by air and water. All other essential nutrients come from soil."
  },
  {
    id: "d121x_054",
    subject: "da-121",
    lecture: "lecture-25",
    lectureNo: 25,
    question: "Nitrogen is absorbed by plants primarily in which form?",
    options: ["Organic nitrogen", "NO3- (nitrate) and NH4+ (ammonium)", "Urea directly", "N2 gas"],
    correct: 1,
    explanation: "As per DA-121 notes: Plants absorb nitrogen primarily as nitrate (NO3-) and ammonium (NH4+) ions from soil solution."
  },
  {
    id: "d121x_055",
    subject: "da-121",
    lecture: "lecture-25",
    lectureNo: 25,
    question: "Phosphorus is mainly absorbed by plants as:",
    options: ["P2O5", "H3PO4", "H2PO4- and HPO4²-", "Organic phosphate"],
    correct: 2,
    explanation: "As per DA-121 notes: Phosphorus is mainly absorbed by plants as H2PO4- (dihydrogen phosphate) and HPO4²- (hydrogen phosphate) ions from soil solution."
  },
  {
    id: "d121x_056",
    subject: "da-121",
    lecture: "lecture-26",
    lectureNo: 26,
    question: "Sulphur deficiency symptom closely resembles:",
    options: ["Phosphorus deficiency", "Nitrogen deficiency (yellowing)", "Iron deficiency", "Potassium deficiency"],
    correct: 1,
    explanation: "As per DA-121 notes: Sulphur deficiency causes yellowing of young leaves (as it is immobile), which resembles nitrogen deficiency but appears first in young leaves."
  },
  {
    id: "d121x_057",
    subject: "da-121",
    lecture: "lecture-27",
    lectureNo: 27,
    question: "Manganese deficiency appears as:",
    options: ["Interveinal chlorosis on young leaves with grey or tan spots", "Necrotic tips", "Yellowing from older leaves", "Purple coloration"],
    correct: 0,
    explanation: "As per DA-121 notes: Manganese deficiency causes interveinal chlorosis on young leaves with grey or tan-coloured spots (grey speck disease in oats)."
  },
  {
    id: "d121x_058",
    subject: "da-121",
    lecture: "lecture-27",
    lectureNo: 27,
    question: "Copper deficiency in plants causes:",
    options: ["Yellowing and withering of young leaves (die-back of shoots, reclamation disease)", "Root nodule formation", "Interveinal chlorosis", "Purple stems"],
    correct: 0,
    explanation: "As per DA-121 notes: Copper deficiency causes yellowing and wilting of young leaves, die-back of shoots, and reclamation disease in cereals grown on peat soils."
  },
  {
    id: "d121x_059",
    subject: "da-121",
    lecture: "lecture-28",
    lectureNo: 28,
    question: "The correct sequence of nutrient availability at different pH levels shows that phosphorus availability is maximum at pH:",
    options: ["4-5", "5-6", "6.5-7.5", "8-9"],
    correct: 2,
    explanation: "As per DA-121 notes: Phosphorus availability is maximum at pH 6.5-7.5. Below 5.5, P is fixed by Fe and Al; above 7.5, P is fixed by Ca."
  },
  {
    id: "d121x_060",
    subject: "da-121",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Symbiotic nitrogen fixation occurs between legumes and which organism?",
    options: ["Clostridium", "Azotobacter", "Anabaena", "Rhizobium"],
    correct: 1,
    explanation: "As per DA-121 notes: Symbiotic nitrogen fixation occurs between legumes and Rhizobium bacteria in root nodules. Free-living fixation is by Azotobacter, Clostridium etc."
  },
  {
    id: "d121x_061",
    subject: "da-121",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Munsell color system is used in soil science to:",
    options: ["Measure soil temperature", "Describe soil color using hue, value and chroma", "Classify soil texture", "Measure soil moisture"],
    correct: 1,
    explanation: "As per DA-121 notes: The Munsell Color System describes soil color using three parameters: hue (spectral color), value (lightness), and chroma (color purity/saturation)."
  },
  {
    id: "d121x_062",
    subject: "da-121",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Infiltration rate refers to:",
    options: ["The rate at which water evaporates from soil", "The rate at which water enters the soil from surface", "The rate at which roots absorb water", "The rate of water movement below the root zone"],
    correct: 1,
    explanation: "As per DA-121 notes: Infiltration rate is the rate at which water enters the soil from the surface. It depends on soil texture, structure, and initial moisture content."
  },
  {
    id: "d121x_063",
    subject: "da-121",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "High bulk density of soil indicates:",
    options: ["High organic matter content", "Sandy texture", "Compaction, reduced porosity and poor root growth", "Good porosity and aeration"],
    correct: 2,
    explanation: "As per DA-121 notes: High bulk density indicates soil compaction with reduced porosity, poor aeration, and restricted root growth."
  },
  {
    id: "d121x_064",
    subject: "da-121",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Organic matter in soil improves which property?",
    options: ["Only colour", "Only soil pH", "Only drainage", "Soil structure, water holding capacity, CEC, and microbial activity"],
    correct: 3,
    explanation: "As per DA-121 notes: Soil organic matter improves soil structure, water holding capacity, CEC, microbial activity, nutrient availability and reduces erosion."
  },
  {
    id: "d121x_065",
    subject: "da-121",
    lecture: "lecture-32",
    lectureNo: 32,
    question: "The greenhouse effect causes global warming primarily because:",
    options: ["Green plants absorb more sunlight", "Ocean temperatures decrease", "The sun's radiation becomes more intense", "Greenhouse gases trap long-wave radiation from Earth's surface, preventing heat loss to space"],
    correct: 3,
    explanation: "As per DA-121 notes: Greenhouse gases (CO2, CH4, N2O) trap outgoing long-wave radiation from Earth's surface, preventing heat from escaping to space and causing global warming."
  },
  {
    id: "d121x_066",
    subject: "da-121",
    lecture: "lecture-23",
    lectureNo: 23,
    question: "Red soils of India are red due to:",
    options: ["High copper content", "Low organic matter", "High manganese content", "Presence of iron oxide (Fe2O3)"],
    correct: 3,
    explanation: "As per DA-121 notes: Red soils are red due to the presence of iron oxide (Fe2O3 - haematite) which gives them their characteristic reddish colour."
  },
  {
    id: "d121x_067",
    subject: "da-121",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The main agent responsible for improving soil aggregate stability is:",
    options: ["Organic matter and microbial activity", "Soil temperature", "Inorganic salts", "Sand particles"],
    correct: 0,
    explanation: "As per DA-121 notes: Organic matter and microbial exudates (polysaccharides, fungal hyphae) are the main agents responsible for improving soil aggregate stability."
  },
  {
    id: "d121x_068",
    subject: "da-121",
    lecture: "lecture-29",
    lectureNo: 29,
    question: "A soil test is important before fertilizer application because:",
    options: ["It measures crop potential only", "It predicts the weather", "It helps determine the existing nutrient levels and avoid over/under application", "It tells us only about soil texture"],
    correct: 2,
    explanation: "As per DA-121 notes: Soil testing helps determine existing nutrient levels in soil, enabling balanced fertilizer recommendations that avoid both deficiency and over-application."
  },
  {
    id: "d121x_069",
    subject: "da-121",
    lecture: "lecture-17",
    lectureNo: 17,
    question: "Anion Exchange Capacity (AEC) is primarily found in:",
    options: ["Clay-dominated alkaline soils", "Sandy soils", "Black cotton soils", "Highly weathered tropical soils with iron and aluminium oxides"],
    correct: 3,
    explanation: "As per DA-121 notes: AEC is found primarily in highly weathered tropical soils rich in iron and aluminium oxides which can carry positive charges and adsorb anions."
  },
  {
    id: "d121x_070",
    subject: "da-121",
    lecture: "lecture-18",
    lectureNo: 18,
    question: "Base Saturation percentage (BSP) refers to the proportion of CEC occupied by:",
    options: ["Hydrogen and aluminium ions only", "Basic cations (Ca2+, Mg2+, K+, Na+)", "Sodium only", "Iron and manganese"],
    correct: 1,
    explanation: "As per DA-121 notes: Base Saturation % = (Basic cations: Ca2+, Mg2+, K+, Na+) / CEC × 100. High BSP indicates fertile, well-buffered soil."
  },
  {
    id: "d121x_071",
    subject: "da-121",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Assertion (A): Surface soil (0-30 cm) has higher CEC than subsoil.\nReason (R): Surface soil contains more organic matter and clay colloids which have high negative charge and thus higher CEC.",
    options: ["A is true but R is false under standard field conditions", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is false but R is true under standard field conditions"],
    correct: 1,
    explanation: "As per DA-121 notes: Surface soil has higher CEC due to more organic matter and clay colloids. Both A and R are true; R correctly explains A."
  },
  {
    id: "d121x_072",
    subject: "da-121",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Assertion (A): Clay soils have very high surface area per unit weight.\nReason (R): Clay particles are very small (<0.002 mm), giving them enormous surface area compared to sand or silt particles.",
    options: ["Both A and R are true and R is the correct explanation of A", "A is false but R is true under standard field conditions", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false under standard field conditions"],
    correct: 0,
    explanation: "As per DA-121 notes: Clay particles (<0.002 mm) have surface area of 23,000 sq.cm/g vs sand's 21 sq.cm/g. Both A and R are true; R explains A."
  },
  {
    id: "d121x_073",
    subject: "da-121",
    lecture: "lecture-12",
    lectureNo: 12,
    question: "Assertion (A): Adding straw with wide C:N ratio to soil may temporarily reduce available nitrogen.\nReason (R): Microorganisms decomposing straw immobilize soil nitrogen in their bodies because straw has insufficient N for microbial growth.",
    options: ["Both A and R are true and R is the correct explanation of A", "A is false but R is true under standard field conditions", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false under standard field conditions"],
    correct: 0,
    explanation: "As per DA-121 notes: Straw with wide C:N ratio causes N immobilization. Microorganisms use soil N for their growth, temporarily reducing N availability. Both A and R are true."
  },
  {
    id: "d121x_074",
    subject: "da-121",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "Assertion (A): Soil pH affects the availability of plant nutrients.\nReason (R): At different pH levels, nutrients change their chemical form - some become more soluble and available while others become fixed/insoluble.",
    options: ["A is true but R is false under standard field conditions", "A is false but R is true under standard field conditions", "Both A and R are true but R is NOT the correct explanation of A", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "As per DA-121 notes: pH greatly affects nutrient solubility and availability. Both A and R are true; R correctly explains A."
  },
  {
    id: "d121x_075",
    subject: "da-121",
    lecture: "lecture-22",
    lectureNo: 22,
    question: "Assertion (A): Gypsum is used to reclaim sodic soils.\nReason (R): Gypsum provides calcium which replaces sodium on the soil exchange complex, and the resulting sodium sulphate can be leached out.",
    options: ["A is true but R is false under standard field conditions", "A is false but R is true under standard field conditions", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A"],
    correct: 2,
    explanation: "As per DA-121 notes: Gypsum (CaSO4) provides Ca which replaces Na from exchange sites, and NaSO4 is leached. Both A and R are true; R correctly explains A."
  },
  {
    id: "d121x_076",
    subject: "da-121",
    lecture: "lecture-24",
    lectureNo: 24,
    question: "Assertion (A): There are 17 essential plant nutrients.\nReason (R): Essential nutrients must satisfy three criteria: deficiency prevents normal growth, the deficiency is specific to that element, and it is directly involved in plant metabolism.",
    options: ["A is true but R is false under standard field conditions", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is false but R is true under standard field conditions"],
    correct: 1,
    explanation: "As per DA-121 notes: 17 essential nutrients are accepted. Arnon's three criteria for essentiality are as stated. Both A and R are true."
  },
  {
    id: "d121x_077",
    subject: "da-121",
    lecture: "lecture-26",
    lectureNo: 26,
    question: "Assertion (A): Nitrogen deficiency symptoms appear first on older (lower) leaves.\nReason (R): Nitrogen is a mobile nutrient in plants; when deficient, it is relocated from older leaves to younger, growing tissues.",
    options: ["A is true but R is false under standard field conditions", "A is false but R is true under standard field conditions", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A"],
    correct: 2,
    explanation: "As per DA-121 notes: N is mobile in plants, so deficiency symptoms appear on older leaves first. Both A and R are true; R correctly explains A."
  },
  {
    id: "d121x_078",
    subject: "da-121",
    lecture: "lecture-27",
    lectureNo: 27,
    question: "Assertion (A): Iron deficiency symptoms appear first on young leaves.\nReason (R): Iron is immobile in plants and cannot be translocated from older to younger leaves when deficient.",
    options: ["A is true but R is false under standard field conditions", "A is false but R is true under standard field conditions", "Both A and R are true but R is NOT the correct explanation of A", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "As per DA-121 notes: Fe is immobile in plants, so deficiency appears first on young leaves. Both A and R are true; R correctly explains A."
  },
  {
    id: "d121x_079",
    subject: "da-121",
    lecture: "lecture-21",
    lectureNo: 21,
    question: "Assertion (A): Saline soils have higher osmotic pressure than sodic soils.\nReason (R): High salt concentrations in saline soils create high osmotic pressure, making it difficult for plants to absorb water.",
    options: ["A is true but R is false under standard field conditions", "A is false but R is true under standard field conditions", "Both A and R are true but R is NOT the correct explanation of A", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "As per DA-121 notes: Saline soils have high salt content (EC >4 dS/m) creating high osmotic pressure. Plants suffer from physiological drought. Both A and R are true."
  },
  {
    id: "d121x_080",
    subject: "da-121",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Assertion (A): Granular (crumb) soil structure is ideal for crop production.\nReason (R): Granular structure provides optimal balance of pore space for aeration and water retention, and allows easy root penetration.",
    options: ["A is true but R is false under standard field conditions", "A is false but R is true under standard field conditions", "Both A and R are true but R is NOT the correct explanation of A", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "As per DA-121 notes: Granular structure is best for crop production. Both A and R are true; R correctly explains A."
  },
  {
    id: "d121x_081",
    subject: "da-121",
    lecture: "lecture-32",
    lectureNo: 32,
    question: "Assertion (A): Rice paddies are a significant source of methane (CH4) emissions.\nReason (R): Under anaerobic (flooded) conditions in rice paddies, methanogenic bacteria produce methane from organic matter decomposition.",
    options: ["A is true but R is false under standard field conditions", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is false but R is true under standard field conditions"],
    correct: 1,
    explanation: "As per DA-121 notes: Rice paddies emit CH4 from methanogenic bacteria under anaerobic conditions. Both A and R are true; R correctly explains A."
  },
  {
    id: "d121x_082",
    subject: "da-121",
    lecture: "lecture-16",
    lectureNo: 16,
    question: "Assertion (A): Sandy soils have lower CEC than clayey soils.\nReason (R): Sand particles are large, have small surface area per unit weight, and carry little negative charge compared to clay particles.",
    options: ["A is true but R is false under standard field conditions", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is false but R is true under standard field conditions"],
    correct: 1,
    explanation: "As per DA-121 notes: Sandy soils have much lower CEC due to small surface area of sand particles. Both A and R are true; R correctly explains A."
  },
  {
    id: "d121x_083",
    subject: "da-121",
    lecture: "lecture-11",
    lectureNo: 11,
    question: "Assertion (A): Organic matter improves soil structure.\nReason (R): Organic matter acts as a binding agent, helping to glue soil particles into stable aggregates through microbial action and humus formation.",
    options: ["A is true but R is false under standard field conditions", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is false but R is true under standard field conditions"],
    correct: 1,
    explanation: "As per DA-121 notes: Organic matter improves soil structure through aggregate formation. Both A and R are true; R correctly explains A."
  },
  {
    id: "d121x_084",
    subject: "da-121",
    lecture: "lecture-20",
    lectureNo: 20,
    question: "Assertion (A): Micronutrients become deficient in highly alkaline (calcareous) soils even if present in the soil.\nReason (R): At high pH, micronutrients like Fe, Mn, Zn precipitate as insoluble hydroxides and carbonates, making them unavailable to plants.",
    options: ["A is true but R is false under standard field conditions", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is false but R is true under standard field conditions"],
    correct: 1,
    explanation: "As per DA-121 notes: Micronutrient deficiency in calcareous soils occurs because high pH causes them to precipitate as insoluble compounds. Both A and R are true."
  },
  {
    id: "d121x_085",
    subject: "da-121",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Assertion (A): Biological nitrogen fixation is an important source of nitrogen for agricultural soils.\nReason (R): Nitrogen-fixing organisms like Rhizobium and Azotobacter convert atmospheric nitrogen gas (N2) into plant-available ammonium, enriching soil nitrogen.",
    options: ["A is true but R is false under standard field conditions", "A is false but R is true under standard field conditions", "Both A and R are true but R is NOT the correct explanation of A", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "As per DA-121 notes: Biological N fixation by Rhizobium, Azotobacter etc. converts N2 to NH4+, enriching soil. Both A and R are true; R explains A."
  },
  {
    id: "d121x_086",
    subject: "da-121",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Match the soil particle sizes:\n     Column-I (Particle)         |  Column-II (Size range)      |  Column-III (Visibility)\nA.  Sand                         |  1.  < 0.002 mm               |  i.   Electron microscope only\nB.  Fine sand                    |  2.  0.2-2.0 mm               |  ii.  Naked eye\nC.  Silt                         |  3.  0.002-0.02 mm            |  iii. Light microscope\nD.  Clay                         |  4.  0.02-0.2 mm              |  iv.  Naked eye (finer than sand)",
    options: ["A-4-iv, B-3-iii, C-2-ii,   D-1-i", "A-2-ii, B-4-iv,  C-3-iii,  D-1-i", "A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-3-iii, B-4-iv, C-1-i,    D-2-ii"],
    correct: 1,
    explanation: "As per DA-121 notes: Sand (0.2-2.0 mm, naked eye); Fine sand (0.02-0.2 mm, naked eye); Silt (0.002-0.02 mm, light microscope); Clay (<0.002 mm, electron microscope)."
  },
  {
    id: "d121x_087",
    subject: "da-121",
    lecture: "lecture-26",
    lectureNo: 26,
    question: "Match the nutrient deficiency symptoms:\n     Column-I (Nutrient)         |  Column-II (Symptom)         |  Column-III (Mobility)\nA.  Nitrogen                     |  1.  Interveinal chlorosis on young leaves | i. Immobile\nB.  Phosphorus                   |  2.  Yellowing from old leaves  |  ii. Mobile\nC.  Iron                         |  3.  Purple/reddish leaves      |  iii. Mobile\nD.  Potassium                    |  4.  Brown leaf tip burn         |  iv. Mobile",
    options: ["A-3-iii, B-2-ii, C-4-iv,   D-1-i", "A-2-ii, B-3-iii, C-1-i,   D-4-iv", "A-4-iv, B-1-i,   C-3-iii,  D-2-ii", "A-1-i,  B-4-iv,  C-2-ii,   D-3-iii"],
    correct: 1,
    explanation: "As per DA-121 notes: N deficiency (yellowing old leaves, mobile); P deficiency (purple/reddish leaves, mobile); Fe deficiency (interveinal chlorosis young leaves, immobile); K deficiency (brown tip burn, mobile)."
  },
  {
    id: "d121x_088",
    subject: "da-121",
    lecture: "lecture-21",
    lectureNo: 21,
    question: "Match the problem soil types with their characteristics:\n     Column-I (Soil type)        |  Column-II (Key characteristic)|  Column-III (pH)\nA.  Saline soil                  |  1.  ESP > 15%, poor structure  |  i.   > 8.5\nB.  Sodic (Alkali) soil          |  2.  EC > 4 dS/m, white crust   |  ii.  < 8.5\nC.  Saline-Sodic soil            |  3.  EC > 4 dS/m, ESP > 15%     |  iii. < 8.5 (if well-leached)\nD.  Acid soil                    |  4.  pH < 5.5, Al toxicity       |  iv.  < 5.5",
    options: ["A-2-ii, B-1-i,   C-3-iii,  D-4-iv", "A-4-iv, B-2-ii,  C-3-iii,  D-1-i", "A-1-i,  B-3-iii, C-2-ii,   D-4-iv", "A-3-iii, B-4-iv, C-1-i,    D-2-ii"],
    correct: 0,
    explanation: "As per DA-121 notes: Saline soil (EC>4, white crust, pH<8.5); Sodic soil (ESP>15, poor structure, pH>8.5); Saline-Sodic (EC>4+ESP>15, pH<8.5); Acid soil (pH<5.5, Al/Mn toxicity)."
  },
  {
    id: "d121x_089",
    subject: "da-121",
    lecture: "lecture-22",
    lectureNo: 22,
    question: "Match the soil reclamation methods:\n     Column-I (Soil problem)     |  Column-II (Amendment)       |  Column-III (Action)\nA.  Acid soil                    |  1.  Scraping + leaching       |  i.   Removes salts by washing\nB.  Sodic soil                   |  2.  Gypsum (CaSO4)           |  ii.  Replaces Na with Ca\nC.  Saline soil                  |  3.  Agricultural lime (CaCO3) |  iii. Neutralizes acidity\nD.  Waterlogged soil             |  4.  Open/tile drainage        |  iv.  Removes excess water",
    options: ["A-4-iv,  B-1-i,   C-3-iii, D-2-ii", "A-2-ii,  B-3-iii, C-4-iv,  D-1-i", "A-3-iii, B-2-ii, C-1-i,   D-4-iv", "A-1-i,   B-4-iv,  C-2-ii,  D-3-iii"],
    correct: 2,
    explanation: "As per DA-121 notes: Acid soil=lime (neutralizes acidity); Sodic soil=gypsum (Ca replaces Na); Saline soil=scraping+leaching (removes salts); Waterlogged=drainage (removes excess water)."
  },
  {
    id: "d121x_090",
    subject: "da-121",
    lecture: "lecture-27",
    lectureNo: 27,
    question: "Match the micronutrient deficiency diseases:\n     Column-I (Nutrient)         |  Column-II (Disease name)    |  Column-III (Crop affected)\nA.  Zinc                         |  1.  Grey speck disease       |  i.   Oats\nB.  Manganese                    |  2.  Khaira disease           |  ii.  Paddy/rice\nC.  Boron                        |  3.  Hollow heart             |  iii. Cauliflower/Beet\nD.  Copper                       |  4.  Reclamation disease      |  iv.  Cereals on peat soils",
    options: ["A-2-ii, B-1-i,   C-3-iii,  D-4-iv", "A-3-iii, B-2-ii, C-4-iv,   D-1-i", "A-4-iv, B-3-iii, C-1-i,    D-2-ii", "A-1-i,  B-4-iv,  C-2-ii,   D-3-iii"],
    correct: 0,
    explanation: "As per DA-121 notes: Zinc deficiency=Khaira disease (paddy); Mn deficiency=Grey speck (oats); Boron deficiency=Hollow heart (cauliflower/beet); Cu deficiency=Reclamation disease (cereals on peat)."
  },
  {
    id: "d121x_091",
    subject: "da-121",
    lecture: "lecture-24",
    lectureNo: 24,
    question: "Match the essential nutrients with their classification:\n     Column-I (Nutrient)         |  Column-II (Classification)  |  Column-III (Example function)\nA.  Nitrogen (N)                 |  1.  Secondary macronutrient  |  i.   Cell wall formation\nB.  Calcium (Ca)                 |  2.  Primary macronutrient    |  ii.  Enzyme activation\nC.  Iron (Fe)                    |  3.  Micronutrient            |  iii. Chlorophyll precursor\nD.  Magnesium (Mg)               |  4.  Secondary macronutrient  |  iv.  Central atom of chlorophyll",
    options: ["A-3-iii, B-2-ii, C-4-iv,   D-1-i", "A-1-i,  B-4-iv,  C-2-ii,   D-3-iii", "A-4-iv, B-3-iii, C-1-i,    D-2-ii", "A-2-ii, B-1-i,   C-3-iii,  D-4-iv"],
    correct: 3,
    explanation: "As per DA-121 notes: N (primary macronutrient, chlorophyll component... but function shown is protein); Ca (secondary, cell wall); Fe (micronutrient, chlorophyll precursor); Mg (secondary, central atom of chlorophyll)."
  },
  {
    id: "d121x_092",
    subject: "da-121",
    lecture: "lecture-23",
    lectureNo: 23,
    question: "Match the soil types of India with their characteristics:\n     Column-I (Soil type)        |  Column-II (Location)        |  Column-III (Key property)\nA.  Alluvial soils               |  1.  Deccan plateau, Maharashtra |  i. Rich in montmorillonite, swells\nB.  Black soils (Vertisols)      |  2.  Eastern Ghats, Kerala    |  ii. Fe, Al oxides, low fertility\nC.  Laterite soils               |  3.  Rajasthan, coastal areas  |  iii. Coarse texture, low fertility\nD.  Red soils                    |  4.  Indo-Gangetic plains     |  iv. Most fertile, river deposits",
    options: ["A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-4-iv, B-1-i,   C-2-ii,   D-3-iii", "A-2-ii, B-3-iii, C-4-iv,   D-1-i", "A-3-iii, B-4-iv, C-1-i,    D-2-ii"],
    correct: 1,
    explanation: "As per DA-121 notes: Alluvial (Indo-Gangetic plains, most fertile); Black soil (Deccan plateau, swells when wet); Laterite (Eastern Ghats/Kerala, Fe/Al oxides); Red soils (coarse, low fertility - note positioning may vary)."
  },
  {
    id: "d121x_093",
    subject: "da-121",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Match the soil microorganisms with their functions:\n     Column-I (Organism)         |  Column-II (Process)         |  Column-III (Nitrogen form changed)\nA.  Nitrosomonas                 |  1.  Denitrification          |  i.   NO3- → N2\nB.  Nitrobacter                  |  2.  Ammonification           |  ii.  Organic N → NH4+\nC.  Pseudomonas/Thiobacillus     |  3.  Nitrification (stage 2)  |  iii. NO2- → NO3-\nD.  Heterotrophic bacteria       |  4.  Nitrification (stage 1)  |  iv.  NH4+ → NO2-",
    options: ["A-2-ii, B-1-i,   C-4-iv,   D-3-iii", "A-3-iii, B-4-iv, C-2-ii,   D-1-i", "A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-4-iv, B-3-iii, C-1-i,   D-2-ii"],
    correct: 3,
    explanation: "As per DA-121 notes: Nitrosomonas (nitrification stage 1, NH4+→NO2-); Nitrobacter (stage 2, NO2-→NO3-); Pseudomonas (denitrification, NO3-→N2); Heterotrophic bacteria (ammonification, Org-N→NH4+)."
  },
  {
    id: "d121x_094",
    subject: "da-121",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Match the soil moisture constants with their definitions:\n     Column-I (Moisture constant) |  Column-II (Tension)        |  Column-III (Significance)\nA.  Saturation                   |  1.  31 bars (~15 bars)       |  i.   Plants wilt permanently\nB.  Field capacity               |  2.  0 bar                    |  ii.  All pores filled, no plant use\nC.  Permanent Wilting Point      |  3.  0.1-0.33 bar             |  iii. Available water for plants\nD.  Available Water Capacity     |  4.  FC - PWP                 |  iv.  Water between FC and PWP",
    options: ["A-2-ii, B-3-iii, C-1-i,   D-4-iv", "A-3-iii, B-2-ii, C-4-iv,   D-1-i", "A-4-iv, B-1-i,   C-3-iii,  D-2-ii", "A-1-i,  B-4-iv,  C-2-ii,   D-3-iii"],
    correct: 0,
    explanation: "As per DA-121 notes: Saturation (0 bar, all pores filled); Field capacity (0.1-0.33 bar); Permanent Wilting Point (~15 bar, plants wilt permanently); Available Water = FC - PWP."
  },
  {
    id: "d121x_095",
    subject: "da-121",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "Match the pH levels with soil conditions:\n     Column-I (pH range)         |  Column-II (Soil condition)  |  Column-III (Management)\nA.  pH 4-5.5                     |  1.  Neutral/slightly alkaline |  i.   No amendment needed (optimal)\nB.  pH 5.5-6                     |  2.  Strongly acid             |  ii.  Apply heavy liming\nC.  pH 6.5-7.5                   |  3.  Slightly acid             |  iii. Apply moderate lime\nD.  pH 8-9                       |  4.  Alkaline/sodic            |  iv.  Apply gypsum or sulphur",
    options: ["A-3-iii, B-2-ii, C-4-iv,   D-1-i", "A-2-ii, B-3-iii, C-1-i,   D-4-iv", "A-4-iv, B-1-i,   C-3-iii,  D-2-ii", "A-1-i,  B-4-iv,  C-2-ii,   D-3-iii"],
    correct: 1,
    explanation: "As per DA-121 notes: pH 4-5.5 (strongly acid, heavy liming); pH 5.5-6 (slightly acid, moderate lime); pH 6.5-7.5 (optimal, no amendment); pH 8-9 (alkaline, gypsum/sulphur)."
  },
  {
    id: "d121x_096",
    subject: "da-121",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Match the soil density concepts:\n     Column-I (Concept)          |  Column-II (Value for mineral soils) | Column-III (Significance)\nA.  Particle density              |  1.  1.0-1.8 g/cm³            |  i.   Indicates compaction\nB.  Bulk density                  |  2.  ~2.65 g/cm³              |  ii.  Weight of solid particles only\nC.  Organic soils bulk density    |  3.  <1.0 g/cm³               |  iii. High OM soils are light\nD.  High bulk density (compact)   |  4.  >1.6 g/cm³               |  iv.  Root growth restricted",
    options: ["A-1-i,  B-2-ii,  C-4-iv,   D-3-iii", "A-3-iii, B-4-iv, C-1-i,    D-2-ii", "A-2-ii, B-1-i,   C-3-iii,  D-4-iv", "A-4-iv, B-3-iii, C-2-ii,   D-1-i"],
    correct: 2,
    explanation: "As per DA-121 notes: Particle density (~2.65 g/cm³, solid particles); Bulk density (1.0-1.8 g/cm³, includes pores); Organic soil BD (<1.0 g/cm³); High BD (>1.6 g/cm³, root growth restricted)."
  },
  {
    id: "d121x_097",
    subject: "da-121",
    lecture: "lecture-15",
    lectureNo: 15,
    question: "Match the exchangeable cations with their effects:\n     Column-I (Cation)           |  Column-II (CEC position)    |  Column-III (Effect when dominant)\nA.  Calcium (Ca2+)               |  1.  Dominant in sodic soils  |  i.   Disperses soil, poor structure\nB.  Sodium (Na+)                 |  2.  Dominant in acid soils   |  ii.  Al/Mn toxicity\nC.  Hydrogen (H+)/Al3+           |  3.  Dominant in fertile soils|  iii. Good soil structure\nD.  Magnesium (Mg2+)             |  4.  Secondary basic cation   |  iv.  Contributes to good fertility",
    options: ["A-1-i,   B-3-iii, C-4-iv,   D-2-ii", "A-2-ii,  B-4-iv,  C-1-i,    D-3-iii", "A-3-iii, B-1-i,   C-2-ii,   D-4-iv", "A-4-iv,  B-2-ii,  C-3-iii,  D-1-i"],
    correct: 2,
    explanation: "As per DA-121 notes: Ca2+ (dominant in fertile soils, good structure); Na+ (dominant in sodic soils, disperses soil); H+/Al3+ (dominant in acid soils, Al/Mn toxicity); Mg2+ (secondary basic cation, fertility)."
  },
  {
    id: "d121x_098",
    subject: "da-121",
    lecture: "lecture-32",
    lectureNo: 32,
    question: "Match the greenhouse gases with their agricultural sources:\n     Column-I (Gas)              |  Column-II (Source)          |  Column-III (GWP relative to CO2)\nA.  Methane (CH4)                |  1.  Synthetic fertilizers    |  i.   298x (very high)\nB.  Nitrous oxide (N2O)          |  2.  Paddy fields             |  ii.  21x\nC.  Carbon dioxide (CO2)         |  3.  Organic matter burning   |  iii. 1x (reference)\nD.  Water vapour                 |  4.  Transpiration, evap.     |  iv.  Variable",
    options: ["A-2-ii, B-1-i,   C-3-iii,  D-4-iv", "A-1-i,  B-4-iv,  C-2-ii,   D-3-iii", "A-4-iv, B-3-iii, C-2-ii,   D-1-i", "A-3-iii, B-2-ii, C-1-i,    D-4-iv"],
    correct: 0,
    explanation: "As per DA-121 notes: CH4 (paddy fields, 21x GWP); N2O (fertilizers, 298x GWP); CO2 (burning, 1x reference); Water vapour (transpiration, variable GWP)."
  },
  {
    id: "d121x_099",
    subject: "da-121",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Match the soil scientists with their definitions of soil:\n     Column-I (Scientist)        |  Column-II (Year)            |  Column-III (Key concept in definition)\nA.  Dokuchaev                    |  1.  1941                     |  i.   Effect of climate, organisms, relief, time\nB.  Jenny                        |  2.  1900                     |  ii.  Natural body with genesis and distinct nature\nC.  Buckman & Brady              |  3.  Modern era               |  iii. Dynamic natured body, mineral and organic\nD.  USDA definition              |  4.  20th century             |  iv.  Unconsolidated mineral matter, plant growth medium",
    options: ["A-4-iv, B-3-iii, C-1-i,    D-2-ii", "A-2-ii, B-1-i,   C-3-iii,  D-4-iv", "A-1-i,  B-2-ii,  C-4-iv,   D-3-iii", "A-3-iii, B-4-iv, C-2-ii,   D-1-i"],
    correct: 1,
    explanation: "As per DA-121 notes: Dokuchaev (1900, natural body with genesis); Jenny (1941, climate+organisms+relief+time); Buckman & Brady (dynamic body, mineral+organic); USDA (unconsolidated mineral matter, plant medium)."
  },
  {
    id: "d121x_100",
    subject: "da-121",
    lecture: "lecture-31",
    lectureNo: 31,
    question: "Match the soil pollutants with their sources and effects:\n     Column-I (Pollutant)        |  Column-II (Main source)     |  Column-III (Effect)\nA.  Heavy metals (Pb, Cd, Hg)    |  1.  Excess NPK fertilizers   |  i.   Eutrophication, soil acidification\nB.  Persistent pesticides (DDT)  |  2.  Industrial effluents     |  ii.  Bioaccumulation, toxicity\nC.  Nitrates                     |  3.  Pesticide overuse        |  iii. Groundwater contamination\nD.  Plastic/polythene            |  4.  Packaging, mulching      |  iv.  Blocks water and air movement",
    options: ["A-3-iii, B-2-ii, C-4-iv,   D-1-i", "A-4-iv,  B-1-i,  C-3-iii,  D-2-ii", "A-1-i,   B-4-iv, C-2-ii,   D-3-iii", "A-2-ii, B-3-iii, C-1-i,   D-4-iv"],
    correct: 3,
    explanation: "As per DA-121 notes: Heavy metals (industrial effluents, bioaccumulation); Persistent pesticides (overuse, accumulate in food chain); Nitrates (excess fertilizers, groundwater contamination); Plastic (packaging/mulching, blocks water/air)."
  },
  {
    id: "d121l_151",
    subject: "da-121",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Soil separates are defined as individual size groups of mineral soil particles which are:",
    options: ["2 mm or less in diameter", "More than 5 mm in diameter", "Exactly 1 cm in diameter", "Larger than gravel"],
    correct: 0,
    explanation: "As per DA-121 notes: Soil separates may be defined as the individual size groups of mineral soil particles which are 2 mm or less in diameter."
  },
  {
    id: "d121l_152",
    subject: "da-121",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "According to the soil-separate size limits, the clay fraction has a particle size of:",
    options: ["2.0 to 0.2 mm", "Less than 0.002 mm", "0.2 to 0.02 mm", "More than 2 mm"],
    correct: 1,
    explanation: "As per DA-121 notes: The clay fraction is less than 0.002 mm in size and forms the decisive fraction of the soil with most influence on soil behaviour."
  },
  {
    id: "d121l_153",
    subject: "da-121",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Available soil water is defined as the portion of water retained in the soil between:",
    options: ["Hygroscopic coefficient and oven-dry", "Saturation and field capacity", "Field capacity and permanent wilting point", "Maximum water-holding capacity and saturation"],
    correct: 2,
    explanation: "As per DA-121 notes: Available water is defined as that portion of water which is retained in the soil between field capacity and the permanent wilting point."
  },
  {
    id: "d121l_154",
    subject: "da-121",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The study of living organisms in the soil (from Greek bios = life, logos = study) is called:",
    options: ["Soil physics", "Pedology", "Soil chemistry", "Soil biology"],
    correct: 3,
    explanation: "As per DA-121 notes: From the Greek words bios = life and logos = study, the study of living organisms in soil is called soil biology."
  },
  {
    id: "d121l_155",
    subject: "da-121",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The ratio of the weight of organic carbon to the weight of total nitrogen in soil or organic material is known as the:",
    options: ["C:N ratio", "Base saturation", "Exchange capacity", "Bulk density"],
    correct: 0,
    explanation: "As per DA-121 notes: The ratio of the weight of organic carbon to the weight of total nitrogen in a soil or organic material is known as the C:N ratio."
  },
  {
    id: "d121l_156",
    subject: "da-121",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The microbial conversion of organic forms of C, N, P and S to inorganic (mineral) forms is called:",
    options: ["Immobilization", "Mineralization", "Nitrification", "Humification"],
    correct: 1,
    explanation: "As per DA-121 notes: Mineralization is the conversion of organic forms of C, N, P and S to inorganic or mineral forms as a result of microbial decomposition."
  },
  {
    id: "d121l_157",
    subject: "da-121",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Denitrification is defined as the microbial reduction of nitrate and nitrite with the release and loss of:",
    options: ["Sulphur dioxide", "Carbon dioxide", "Molecular nitrogen", "Ammonia"],
    correct: 2,
    explanation: "As per DA-121 notes: Denitrification is the microbial reduction of nitrate and nitrite with the release and loss of molecular nitrogen."
  },
  {
    id: "d121l_158",
    subject: "da-121",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Soil particles that possess colloidal properties are generally less than which size?",
    options: ["0.1 mm", "2 mm", "0.5 mm", "0.001 mm"],
    correct: 3,
    explanation: "As per DA-121 notes: Soil particles less than 0.001 mm in size possess colloidal properties and are known as soil colloids."
  },
  {
    id: "d121l_159",
    subject: "da-121",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "When two or three colours occur in patches within a soil, the condition is called:",
    options: ["Mottling", "Leaching", "Gleization", "Eluviation"],
    correct: 0,
    explanation: "As per DA-121 notes: Frequently two or three colours occur in patches in a soil, which is called 'mottling'."
  }
];
