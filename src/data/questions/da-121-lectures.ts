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
    options: ["Thermal weathering by temperature change", "Physical (mechanical) weathering", "Biological weathering by lichens", "Chemical weathering through hydrolysis"],
    correct: 3,
    explanation: "Hydrolysis is the chief chemical weathering reaction that breaks down feldspar (an alumino-silicate) into secondary clay minerals such as kaolinite, releasing silicic acid and base cations."
  },
  {
    id: "d121l_003",
    subject: "da-121",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Which soil order in USDA Soil Taxonomy is characterised by the presence of a spodic horizon with illuviated organic matter and iron?",
    options: ["Vertisols", "Spodosols", "Oxisols", "Mollisols"],
    correct: 1,
    explanation: "Spodosols possess a spodic horizon — a subsurface layer enriched by downward-migrating humus-iron-aluminium complexes, typical of humid cool coniferous forest soils."
  },
  {
    id: "d121l_004",
    subject: "da-121",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The black cotton soils of Telangana (Vertisols) are formed mainly from which parent material?",
    options: ["Basalt (Deccan trap) rock", "Alluvial sediments from rivers", "Coastal marine deposits", "Granite and gneiss rocks"],
    correct: 0,
    explanation: "Black cotton soils (Regur/Vertisols) in Telangana are derived from the weathering of Deccan Basaltic trap rock, which provides a high content of smectite (montmorillonite) clay minerals."
  },
  {
    id: "d121l_005",
    subject: "da-121",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The topmost horizon of a typical soil profile where maximum organic matter accumulates is designated as:",
    options: ["B horizon", "C horizon", "O horizon", "A horizon"],
    correct: 2,
    explanation: "The O horizon (organic horizon) lies above the mineral soil and consists of fresh or partially decomposed organic material such as leaf litter and humus. It overlies the A (topsoil) horizon."
  },
  {
    id: "d121l_006",
    subject: "da-121",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Laterite soils of humid tropical regions are rich in which oxides?",
    options: ["Magnesium carbonate and sulphates", "Potassium and sodium silicates", "Silica (SiO2) and calcium carbonate", "Iron (Fe2O3) and aluminium (Al2O3) oxides"],
    correct: 3,
    explanation: "Intense weathering and leaching in humid tropics removes silica and bases while iron and aluminium sesquioxides accumulate, forming iron-rich, reddish laterite soils."
  },
  {
    id: "d121l_007",
    subject: "da-121",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The B horizon of a soil profile is primarily characterised by:",
    options: ["Partially weathered parent material with original rock structure", "Illuviation (accumulation) of leached materials from above", "Unweathered bedrock", "Maximum biological activity and organic matter"],
    correct: 1,
    explanation: "The B horizon (subsoil) is the zone of illuviation where clay, iron, aluminium oxides, and organic matter transported from the A horizon accumulate."
  },
  {
    id: "d121l_008",
    subject: "da-121",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Soil formed in situ from the weathering of underlying bedrock is termed:",
    options: ["Residual soil (sedentary)", "Transported soil (alluvial)", "Colluvial soil", "Aeolian soil"],
    correct: 0,
    explanation: "Residual (sedentary) soils are formed directly from the weathering of underlying parent rock and remain at the place of origin, unlike transported soils moved by wind, water, or gravity."
  },
  {
    id: "d121l_009",
    subject: "da-121",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Which soil-forming process involves the downward movement of clay particles in suspension from the A horizon to the B horizon?",
    options: ["Gleization", "Lessivage (Argilluviation)", "Calcification", "Podzolization"],
    correct: 1,
    explanation: "Lessivage (argilluviation) is the mechanical translocation of clay particles (not dissolved) from the A horizon to the B horizon, creating an argillic horizon."
  },
  {
    id: "d121l_010",
    subject: "da-121",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Red and yellow lateritic soils (Alfisols) are predominantly found in which region of Telangana?",
    options: ["North Telangana districts (Nizamabad, Karimnagar)", "Southern plateau districts (Ranga Reddy, Mahabubnagar)", "High altitude forest areas of Adilabad", "River delta areas of Krishna and Godavari"],
    correct: 1,
    explanation: "Red and yellow soils (Alfisols) are common in the southern and central plateau districts of Telangana formed from granitic and gneissic parent material under subhumid conditions."
  },
  {
    id: "d121l_011",
    subject: "da-121",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The time factor in soil formation (Jenny's equation) implies that:",
    options: ["Soil profile development increases with time under similar other factors", "Older soils always have deeper profiles than younger soils", "Time has no significant effect on soil properties", "Soils formed in 100 years are identical to those formed in 10,000 years"],
    correct: 0,
    explanation: "Given the same climate, parent material, relief, and organisms, increasing time allows more weathering, leaching, and horizon differentiation, resulting in more developed profiles."
  },
  {
    id: "d121l_012",
    subject: "da-121",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Soil formed from wind-deposited material (loess) is classified as:",
    options: ["Marine soil", "Lacustrine soil", "Colluvial soil", "Aeolian soil"],
    correct: 3,
    explanation: "Aeolian soils are transported and deposited by wind. Loess — a fine-grained aeolian deposit — forms fertile soils when weathered under adequate moisture."
  },
  {
    id: "d121l_013",
    subject: "da-121",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Which soil order is known as 'shrinking and swelling soils' with high montmorillonite clay content?",
    options: ["Vertisols", "Aridisols", "Inceptisols", "Entisols"],
    correct: 0,
    explanation: "Vertisols (from Latin 'verto' = turn) are characterised by high montmorillonite (2:1) clay content causing swelling when wet and deep cracking when dry; they include the black cotton soils of India."
  },
  {
    id: "d121l_014",
    subject: "da-121",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The E horizon (eluvial horizon) in a soil profile is characterised by:",
    options: ["Accumulation of organic matter and clay", "Loss of silicate clay, Fe, and Al by leaching (eluviation)", "Maximum microbial activity", "Secondary carbonate accumulation"],
    correct: 1,
    explanation: "The E horizon lies between A and B and is depleted of clay, Fe, Al, and organic matter by downward leaching (eluviation), often appearing light coloured."
  },
  {
    id: "d121l_015",
    subject: "da-121",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Alluvial soils formed by river deposits in the Krishna and Godavari deltas of Telangana/Andhra Pradesh are classified under which soil order?",
    options: ["Oxisols", "Entisols or Inceptisols", "Spodosols", "Vertisols"],
    correct: 1,
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
    options: ["0.05–0.10 mm", "< 0.002 mm", "< 0.02 mm", "0.002–0.05 mm"],
    correct: 1,
    explanation: "USDA classifies clay as particles < 0.002 mm (2 µm) diameter. ISSS also uses < 0.002 mm for clay."
  },
  {
    id: "d121l_017",
    subject: "da-121",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The particle density of most mineral soils is approximately:",
    options: ["3.0–3.5 Mg m⁻³", "2.6–2.7 Mg m⁻³", "1.3–1.5 Mg m⁻³", "1.0–1.2 Mg m⁻³"],
    correct: 1,
    explanation: "Particle (true) density of mineral soils averages about 2.65 Mg m⁻³ (same as quartz), a value used for most mineral soil calculations. Organic soils have lower particle density."
  },
  {
    id: "d121l_018",
    subject: "da-121",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Total porosity (%) of a soil is calculated using the formula:",
    options: ["Porosity = [1 – (Bulk density / Particle density)] × 100", "Porosity = (Organic matter% / Bulk density) × 100", "Porosity = (Bulk density / Particle density) × 100", "Porosity = (Particle density – Bulk density) × 100"],
    correct: 0,
    explanation: "Total porosity (%) = [1 – (Db/Dp)] × 100, where Db is bulk density and Dp is particle density. For a loam soil with Db = 1.33 and Dp = 2.65, porosity ≈ 50%."
  },
  {
    id: "d121l_019",
    subject: "da-121",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Which soil structure type is best suited for crop production?",
    options: ["Massive structure", "Granular (crumb) structure", "Single grain structure", "Platy structure"],
    correct: 1,
    explanation: "Granular (crumb) structure in the surface horizon is ideal for crop production because it provides adequate macro- and micro-pores for water retention, aeration, and root penetration."
  },
  {
    id: "d121l_020",
    subject: "da-121",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The Atterberg's plastic limit of a soil is defined as the minimum moisture content at which soil:",
    options: ["Reaches its maximum swelling", "Can be rolled into a 3 mm thread without crumbling", "Flows like a liquid under its own weight", "Becomes too dry to be moulded"],
    correct: 1,
    explanation: "The plastic limit is the minimum water content at which soil can be rolled into a 3 mm thread without crumbling; below it the soil is in a semi-solid state."
  },
  {
    id: "d121l_021",
    subject: "da-121",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Loamy sand soil texture class contains approximately what percentage of sand?",
    options: ["50–70%", "70–85%", "25–50%", "85–90%"],
    correct: 1,
    explanation: "Loamy sand has a very high sand content (70–85%) with enough silt and clay to give some cohesion, distinguishing it from pure sandy soils."
  },
  {
    id: "d121l_022",
    subject: "da-121",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Soil colour is determined in the field using:",
    options: ["Spectrophotometer absorbance at 660 nm", "Visual comparison with standard soil maps", "Munsell Colour Chart (hue, value, chroma)", "Colorimeter readings in nm wavelength"],
    correct: 2,
    explanation: "Soil colour is described using the Munsell Colour System with three dimensions: Hue (dominant wavelength), Value (lightness), and Chroma (purity/saturation)."
  },
  {
    id: "d121l_023",
    subject: "da-121",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Which of the following soil textures has the highest water-holding capacity?",
    options: ["Clay soil", "Sandy soil", "Loamy sand", "Sandy loam"],
    correct: 0,
    explanation: "Clay soils have the highest water-holding capacity because the small clay particles provide enormous surface area and fine pores that retain water by capillary and adsorption forces."
  },
  {
    id: "d121l_024",
    subject: "da-121",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The consistency of a soil at its liquid limit is measured using:",
    options: ["Casagrande cup (liquid limit device)", "Proctor compaction test", "Tensile strength meter", "Shrinkage limit apparatus"],
    correct: 0,
    explanation: "The liquid limit (upper Atterberg limit) is determined using the Casagrande cup — the moisture content at which soil begins to flow when subjected to standardised blows."
  },
  {
    id: "d121l_025",
    subject: "da-121",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Prismatic soil structure, common in subsoil horizons, differs from columnar structure in that:",
    options: ["Both have identical appearance and occur in the same horizons", "Columnar has rounded tops, prismatic has flat tops", "Prismatic occurs in surface soils, columnar in deep subsoil", "Prismatic has rounded tops, columnar has flat tops"],
    correct: 1,
    explanation: "Columnar structure has rounded or dome-shaped tops (associated with sodic soils), while prismatic structure has flat tops; both are vertically oriented prisms in subsoil horizons."
  },
  {
    id: "d121l_026",
    subject: "da-121",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Bulk density of a soil is defined as:",
    options: ["Mass of soil particles per unit volume of water displaced", "Mass of oven-dry soil per unit total volume (solids + pores)", "Mass of moist soil per unit volume at field capacity", "Mass of dry soil per unit volume of soil solids only"],
    correct: 1,
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
    options: ["Depth of groundwater table only", "Soil pH and electrical conductivity", "Soil colour, organic matter, moisture content, and slope aspect", "Plant species growing in the field"],
    correct: 2,
    explanation: "Soil temperature depends on solar radiation absorption (colour, aspect), evaporative cooling (moisture), and insulation effects of organic matter. Dark soils and south-facing slopes warm faster."
  },
  {
    id: "d121l_029",
    subject: "da-121",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "In the USDA textural triangle, a soil with 40% sand, 40% silt, and 20% clay is classified as:",
    options: ["Loam", "Silt loam", "Sandy clay loam", "Clay loam"],
    correct: 0,
    explanation: "A soil with approximately equal proportions of sand and silt and 20% clay plots in the Loam class on the USDA textural triangle."
  },
  {
    id: "d121l_030",
    subject: "da-121",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Soil aggregation is enhanced by all of the following EXCEPT:",
    options: ["Root exudates from plants", "Addition of organic matter", "Repeated tillage of dry soil", "Activity of earthworms"],
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
    options: ["The soil is at wilting point after plant uptake", "The soil is saturated and excess water is allowed to drain for 2–3 days", "The soil is dried at 15 bar suction", "The soil dries completely at 105°C in an oven"],
    correct: 1,
    explanation: "Field capacity is the moisture content of a soil after free drainage has ceased (usually 1–3 days after saturation), held against gravity. It corresponds to a matric suction of about –0.033 MPa (–1/3 bar)."
  },
  {
    id: "d121l_032",
    subject: "da-121",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Permanent Wilting Point (PWP) corresponds to a soil matric suction of approximately:",
    options: ["–3.0 MPa (30 bar)", "–0.1 MPa (1 bar)", "–0.033 MPa (1/3 bar)", "–1.5 MPa (15 bar)"],
    correct: 3,
    explanation: "The permanent wilting point is conventionally defined at –1.5 MPa (15 bar or 15 atmospheres) matric suction, the point at which most crop plants cannot extract water and wilt permanently."
  },
  {
    id: "d121l_033",
    subject: "da-121",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Available water capacity (AWC) of a soil is calculated as:",
    options: ["Field capacity – Permanent wilting point", "Total pore space – Gravitational water", "Hygroscopic coefficient – Permanent wilting point", "Saturation percentage – Field capacity"],
    correct: 0,
    explanation: "AWC = FC – PWP. This represents the water available to plants held between –0.033 MPa (FC) and –1.5 MPa (PWP). Clay loam soils typically have the highest AWC."
  },
  {
    id: "d121l_034",
    subject: "da-121",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Hygroscopic water in soil is held with a matric suction greater than:",
    options: ["–3.1 MPa", "–0.033 MPa", "–0.3 MPa", "–1.5 MPa"],
    correct: 0,
    explanation: "Hygroscopic water is the thin film of water held tightly by soil particles at suctions greater than –3.1 MPa (31 bar) and is not available to plants."
  },
  {
    id: "d121l_035",
    subject: "da-121",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The pF value is defined as:",
    options: ["Ratio of field capacity to particle density", "Logarithm of soil moisture tension expressed in cm of water column", "Negative logarithm of soil pH", "Water potential expressed in pascals"],
    correct: 1,
    explanation: "pF = log₁₀ of the soil moisture suction expressed in cm of water column. pF 2.54 ≈ field capacity and pF 4.2 ≈ permanent wilting point."
  },
  {
    id: "d121l_036",
    subject: "da-121",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Gravitational water is water that:",
    options: ["Is retained at field capacity for plant use", "Is held tightly by clay particles and unavailable to plants", "Moves through macropores under gravity and drains out of the root zone", "Is adsorbed as a monolayer on soil surfaces"],
    correct: 2,
    explanation: "Gravitational water occupies large macropores and drains out of the soil under gravity after a rain event. It is generally not available for plant use as it moves too quickly through the profile."
  },
  {
    id: "d121l_037",
    subject: "da-121",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Which soil texture has the highest available water capacity for plant growth?",
    options: ["Medium loam to silt loam soil", "Gravel soil", "Heavy clay soil", "Coarse sandy soil"],
    correct: 0,
    explanation: "Medium-textured soils (loam, silt loam) have the highest AWC because they balance large and small pores — more macropores than clay and more micropores than sand."
  },
  {
    id: "d121l_038",
    subject: "da-121",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Soil aeration is primarily measured by which parameter?",
    options: ["Total nitrogen gas in soil pores", "CO₂ concentration in irrigation water", "Electrical conductivity of soil extract", "Oxygen diffusion rate (ODR) or percentage of air-filled pores"],
    correct: 3,
    explanation: "Soil aeration is commonly assessed by the oxygen diffusion rate (ODR) or percentage of air-filled pores. A minimum ODR of 0.2 µg cm⁻² min⁻¹ is required for normal root function."
  },
  {
    id: "d121l_039",
    subject: "da-121",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Capillary water in soil is held between what suction range?",
    options: ["–0.033 MPa to –1.5 MPa (0.33 to 15 bar)", "–1.5 MPa to –3.1 MPa", "0 to –0.033 MPa", "Greater than –3.1 MPa (31 bar)"],
    correct: 0,
    explanation: "Capillary water is held in micropores at suctions between –0.033 MPa (FC) and –1.5 MPa (PWP). This is the fraction available to plants."
  },
  {
    id: "d121l_040",
    subject: "da-121",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The 'soil moisture characteristic curve' (water retention curve) relates:",
    options: ["Soil moisture content to soil matric potential (suction)", "Bulk density to water infiltration rate", "Soil organic matter to moisture content", "Clay percentage to capillary rise height"],
    correct: 0,
    explanation: "The soil water characteristic (pF) curve plots soil volumetric or gravimetric water content against matric potential (suction), characterising the water retention behaviour of a specific soil."
  },
  {
    id: "d121l_041",
    subject: "da-121",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Waterlogged soils develop anaerobic conditions because:",
    options: ["Water fills all pores, displacing air and restricting O₂ diffusion", "Clay particles swell and block nutrient uptake", "High pH inhibits oxygen availability", "Excess nitrogen gas is produced by denitrification"],
    correct: 0,
    explanation: "In waterlogged soils, all pore spaces are filled with water, preventing oxygen diffusion into the soil. Aerobic microbes deplete residual O₂, creating anaerobic conditions within hours."
  },
  {
    id: "d121l_042",
    subject: "da-121",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Tensiometers are field instruments used to measure:",
    options: ["Soil matric potential (tension/suction) for irrigation scheduling", "Electrical conductivity of soil moisture", "Soil bulk density in situ", "Total dissolved salts in soil water"],
    correct: 0,
    explanation: "A tensiometer measures soil matric potential by equilibrating with soil water through a porous ceramic cup. It is widely used for irrigation scheduling when pF is below 2.8 (~6 bar)."
  },
  {
    id: "d121l_043",
    subject: "da-121",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Soil air differs from atmospheric air mainly in having:",
    options: ["Higher O₂ and lower CO₂ than the atmosphere", "Higher N₂ and lower Ar than the atmosphere", "Same composition as atmospheric air at all times", "Lower O₂ and higher CO₂ than the atmosphere"],
    correct: 3,
    explanation: "Soil air has lower O₂ (< 20%) and much higher CO₂ (0.2–10% vs 0.04% in atmosphere) due to root and microbial respiration consuming O₂ and releasing CO₂."
  },
  {
    id: "d121l_044",
    subject: "da-121",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The ratio of soil water volume to total soil volume is termed:",
    options: ["Gravimetric water content", "Volumetric water content", "Pore saturation percentage", "Moisture equivalent"],
    correct: 1,
    explanation: "Volumetric water content (θᵥ) = volume of water / total volume of soil. It is directly related to depth of water in the soil profile and is the preferred unit in irrigation science."
  },
  {
    id: "d121l_045",
    subject: "da-121",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Which of the following statements about soil water movement is correct?",
    options: ["Water moves from high water potential to low water potential", "Water moves from low water potential to high water potential", "Water movement in soil is independent of pore size distribution", "Saturated flow is always slower than unsaturated flow"],
    correct: 0,
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
    options: ["cmol(+) kg⁻¹ (centimoles of charge per kg)", "mg kg⁻¹", "mmol L⁻¹", "meq per 100 g (equivalent to cmol(+) kg⁻¹)"],
    correct: 0,
    explanation: "CEC is expressed as cmol(+) kg⁻¹ of soil (equivalent to the older unit meq/100 g). It measures the capacity of soil to hold exchangeable cations."
  },
  {
    id: "d121l_047",
    subject: "da-121",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "At soil pH 7 (neutral), what is the hydrogen ion concentration [H⁺]?",
    options: ["10⁻¹ mol L⁻¹", "10⁻¹⁴ mol L⁻¹", "7 mol L⁻¹", "10⁻⁷ mol L⁻¹"],
    correct: 3,
    explanation: "pH = –log[H⁺], so at pH 7, [H⁺] = 10⁻⁷ mol L⁻¹. Each unit decrease in pH represents a 10× increase in H⁺ concentration."
  },
  {
    id: "d121l_048",
    subject: "da-121",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Which nutrient becomes most available to plants in the pH range 6.5–7.0?",
    options: ["Zinc (Zn)", "Iron (Fe)", "Phosphorus (P)", "Manganese (Mn)"],
    correct: 2,
    explanation: "Phosphorus availability is maximum around pH 6.5–7.0. At lower pH, P is fixed by Fe and Al; at higher pH, it is fixed by Ca, reducing plant availability in both cases."
  },
  {
    id: "d121l_049",
    subject: "da-121",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Base saturation of a soil is defined as:",
    options: ["Percentage of CEC occupied by Ca²⁺ and Mg²⁺ only", "Ratio of basic to acidic cations in soil water", "Percentage of CEC occupied by basic cations (Ca²⁺, Mg²⁺, K⁺, Na⁺)", "Total amount of lime required to neutralise soil acidity"],
    correct: 2,
    explanation: "Base saturation (%) = [(Ca²⁺ + Mg²⁺ + K⁺ + Na⁺) / CEC] × 100. High base saturation (> 50%) indicates fertile, near-neutral soils; acid soils have low base saturation."
  },
  {
    id: "d121l_050",
    subject: "da-121",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Soil pH measured in water (1:2 soil:water) vs in KCl (1:2 soil:0.1M KCl) — which is generally higher?",
    options: ["pH in water is generally higher than pH in KCl by 0.5–1.0 units", "pH in KCl is always higher by 0.5–1.0 units", "Both measurements always give identical values", "pH in KCl is higher for alkaline soils but lower for acid soils"],
    correct: 0,
    explanation: "pH measured in water is typically 0.5–1.0 units higher than in KCl because KCl displaces H⁺ and Al³⁺ from exchange sites, revealing 'reserve acidity' and lowering the measured pH."
  },
  {
    id: "d121l_051",
    subject: "da-121",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The clay mineral montmorillonite has a higher CEC than kaolinite because:",
    options: ["Kaolinite is a 1:1 clay that adsorbs more cations due to its rigid structure", "Montmorillonite is a 2:1 lattice clay with isomorphous substitution and expandable layers", "Montmorillonite has larger particle size and thus more surface area", "Montmorillonite occurs in acid soils with higher H⁺ concentration"],
    correct: 1,
    explanation: "Montmorillonite (2:1 expanding clay) has a CEC of 80–120 cmol(+) kg⁻¹ due to isomorphous substitution and large internal surface area, compared to kaolinite (1:1 clay) with CEC of only 3–15 cmol(+) kg⁻¹."
  },
  {
    id: "d121l_052",
    subject: "da-121",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Soil buffer capacity refers to the ability of soil to:",
    options: ["Maintain constant temperature despite external changes", "Resist changes in pH upon addition of acid or base", "Store water against drainage forces", "Fix nitrogen from the atmosphere"],
    correct: 1,
    explanation: "Buffer capacity is the soil's resistance to pH change when acid or base is added. Soils high in clay, organic matter, and CEC have greater buffer capacity."
  },
  {
    id: "d121l_053",
    subject: "da-121",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The negative charge on soil colloids arises primarily from:",
    options: ["Adsorption of anions from soil solution", "Isomorphous substitution of higher-valence cations by lower-valence cations in clay lattice", "Protonation of OH groups at mineral edges", "Oxidation of organic matter"],
    correct: 1,
    explanation: "Permanent negative charge on 2:1 clay minerals arises from isomorphous substitution (e.g., Mg²⁺ replacing Al³⁺ in octahedral sheets or Al³⁺ replacing Si⁴⁺ in tetrahedral sheets) without altering crystal structure."
  },
  {
    id: "d121l_054",
    subject: "da-121",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Iron and manganese become more soluble (potentially toxic) at soil pH:",
    options: ["Between 6.5–7.0 (neutral)", "Below 5.5 (acidic)", "At exactly pH 7.0", "Above 7.5 (alkaline)"],
    correct: 1,
    explanation: "Fe²⁺ and Mn²⁺ solubility increases dramatically below pH 5.5 in acid soils, often reaching phytotoxic concentrations. This is a major constraint in acid Alfisols and waterlogged soils."
  },
  {
    id: "d121l_055",
    subject: "da-121",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The Exchangeable Sodium Percentage (ESP) is calculated as:",
    options: ["ESP = (Na in soil water / Total cations) × 100", "ESP = (Na²⁺ / Ca²⁺) ratio × 100", "ESP = (Electrical conductivity × pH) / 100", "ESP = (Exchangeable Na / CEC) × 100"],
    correct: 3,
    explanation: "ESP = (exchangeable Na cmol(+) kg⁻¹ / CEC cmol(+) kg⁻¹) × 100. Soils with ESP > 15 are classified as sodic (alkali) soils."
  },
  {
    id: "d121l_056",
    subject: "da-121",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Anion exchange capacity (AEC) in soils is mainly associated with:",
    options: ["Variable-charge surfaces of iron/aluminium oxides and kaolinite edges at low pH", "Organic matter at neutral pH", "Calcium carbonate at high pH", "Montmorillonite clay under alkaline conditions"],
    correct: 0,
    explanation: "AEC is found mainly on iron/aluminium oxide surfaces and kaolinite edges that carry positive charge at low pH, allowing anion (Cl⁻, NO₃⁻, SO₄²⁻) adsorption. It is prominent in highly weathered Oxisols."
  },
  {
    id: "d121l_057",
    subject: "da-121",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "At which soil pH range is molybdenum most available to plants?",
    options: ["pH 5.5–6.5", "pH 4.0–5.5", "pH > 7.0 (alkaline)", "pH 6.0–6.5"],
    correct: 2,
    explanation: "Unlike most micronutrients, molybdenum availability increases with increasing pH (above 7). Mo becomes deficient in acid soils (pH < 6), and liming often corrects Mo deficiency."
  },
  {
    id: "d121l_058",
    subject: "da-121",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Lime requirement of an acid soil is determined by:",
    options: ["Buffer pH (SMP or Woodruff buffer) reflecting reserve acidity", "Total nitrogen content of the soil", "Soil pH in water alone", "Electrical conductivity of saturation extract"],
    correct: 0,
    explanation: "Lime requirement depends on reserve (exchangeable) acidity measured using buffer pH methods (Shoemaker-McLean-Pratt or Woodruff buffer), since water pH alone underestimates total acidity."
  },
  {
    id: "d121l_059",
    subject: "da-121",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Soil pH of a normal productive soil suitable for most crops should be in the range:",
    options: ["9.0–11.0", "4.0–5.0", "7.5–9.0", "5.5–7.5"],
    correct: 3,
    explanation: "Most crops grow best at pH 5.5–7.5 where nutrient availability, microbial activity, and soil structure are optimum. Extreme pH (< 5 or > 8.5) causes toxicities and deficiencies."
  },
  {
    id: "d121l_060",
    subject: "da-121",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The Sodium Adsorption Ratio (SAR) of irrigation water is used to predict:",
    options: ["Solubility of calcium carbonate in irrigation water", "Sodium toxicity risk to crops and soil sodicity development", "Irrigation water requirement for crops", "Phosphorus fixation capacity of the soil"],
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
    options: ["20–30%", "10–15%", "45–55%", "70–80%"],
    correct: 2,
    explanation: "Humus (well-decomposed organic matter) contains approximately 45–58% carbon. The Van Bemmelen factor of 1.724 converts organic carbon % to organic matter % (OM = OC × 1.724)."
  },
  {
    id: "d121l_062",
    subject: "da-121",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The C:N ratio of well-decomposed humus in most agricultural soils is approximately:",
    options: ["5:1", "50–60:1", "10–12:1", "25–30:1"],
    correct: 2,
    explanation: "Well-decomposed humus has a narrow C:N ratio of about 10–12:1. Wide C:N (> 25) materials cause temporary N immobilisation upon decomposition."
  },
  {
    id: "d121l_063",
    subject: "da-121",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Which fraction of soil humus is soluble in both acid and alkali and has the lowest molecular weight?",
    options: ["Hymatomelanic acid", "Fulvic acid", "Humin", "Humic acid"],
    correct: 1,
    explanation: "Fulvic acid is soluble in both dilute acid and alkali (unlike humic acid which precipitates in acid). It has lower molecular weight, higher oxygen content, and is more active in nutrient chelation."
  },
  {
    id: "d121l_064",
    subject: "da-121",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Decomposition of organic matter in soil is fastest under which conditions?",
    options: ["Dry, hot conditions with very low microbial activity", "Cold, high-altitude conditions with slow microbial turnover", "Warm temperature, adequate moisture, neutral pH, and good aeration", "Low temperature, waterlogged, acidic conditions"],
    correct: 2,
    explanation: "Decomposition is maximised at warm temperatures (25–35°C), optimal moisture (50–60% WHC), near-neutral pH (6.5–7.5), and aerobic conditions — all promoting microbial activity."
  },
  {
    id: "d121l_065",
    subject: "da-121",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The C:N ratio of fresh rice straw is approximately:",
    options: ["10–12:1", "20–25:1", "100–150:1", "40–80:1"],
    correct: 3,
    explanation: "Rice straw has a wide C:N ratio of 40–80:1. Its direct incorporation causes temporary N immobilisation (microbial N tie-up) as microbes need N to decompose the high-carbon material."
  },
  {
    id: "d121l_066",
    subject: "da-121",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Which of the following is a major benefit of soil organic matter to soil physical properties?",
    options: ["Increases bulk density, improving soil compaction for machine traffic", "Increases soil pH, reducing need for lime application", "Improves soil aggregation, water-holding capacity, and aeration", "Reduces macropore formation, preventing preferential water flow"],
    correct: 2,
    explanation: "Organic matter binds soil particles into stable aggregates, increasing macroporosity, water-holding capacity, infiltration, and aeration — all improving soil physical quality."
  },
  {
    id: "d121l_067",
    subject: "da-121",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The process by which microorganisms convert organic nitrogen into ammonia (NH₄⁺) is called:",
    options: ["Ammonification (mineralisation)", "Nitrogen fixation", "Nitrification", "Denitrification"],
    correct: 0,
    explanation: "Ammonification (mineralisation) is the microbial decomposition of organic N compounds (proteins, amino acids) to ammonium (NH₄⁺). It is the first step in N mineralisation from organic matter."
  },
  {
    id: "d121l_068",
    subject: "da-121",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Soil organic matter content of most Indian agricultural soils is considered low (deficient) when it is below:",
    options: ["0.1%", "0.75%", "5%", "3%"],
    correct: 1,
    explanation: "Indian agricultural soils are generally classified as low in organic carbon when OC < 0.5% (roughly OM < 0.87%). The ICAR critical limit for SOM is ~0.75% OM or ~0.4% OC for adequate fertility."
  },
  {
    id: "d121l_069",
    subject: "da-121",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Humic acid in soil organic matter differs from fulvic acid in that humic acid:",
    options: ["Is soluble in both acid and alkali", "Is insoluble in both acid and alkali", "Is insoluble in dilute acid but soluble in alkali", "Is soluble in dilute acid but precipitates in alkali"],
    correct: 2,
    explanation: "Humic acid precipitates when the alkaline extract is acidified (insoluble at pH < 2) but dissolves in alkali. Fulvic acid remains soluble at all pH values. Humin is insoluble in both."
  },
  {
    id: "d121l_070",
    subject: "da-121",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Soil organic matter contributes to CEC by providing:",
    options: ["Permanent negative charges from Si-Al lattice substitution", "Positive charges that adsorb anions", "Variable (pH-dependent) negative charges from carboxyl (–COOH) and phenolic (–OH) groups", "Neutral surfaces with no charge contribution"],
    correct: 2,
    explanation: "Organic matter contributes variable-charge CEC through carboxyl (–COOH) and phenolic (–OH) functional groups that dissociate H⁺ at higher pH. SOM contributes 30–70% of total CEC in many soils."
  },
  {
    id: "d121l_071",
    subject: "da-121",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The Walkley-Black method is used for determination of:",
    options: ["Soil organic carbon by wet oxidation with K₂Cr₂O₇", "Soil total nitrogen by Kjeldahl digestion", "Available phosphorus by Bray-P1 extraction", "Soil pH by electrometric method"],
    correct: 0,
    explanation: "The Walkley-Black method determines organic carbon by wet oxidation with potassium dichromate (K₂Cr₂O₇) and back titration with ferrous ammonium sulphate. It recovers approximately 77% of total OC."
  },
  {
    id: "d121l_072",
    subject: "da-121",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The 'priming effect' in soil organic matter refers to:",
    options: ["Rain priming microbial activity in dry soils", "Application of fertilizers increasing crop residue production", "Temperature increase accelerating nitrification", "Addition of fresh organic matter stimulating decomposition of existing stable humus"],
    correct: 3,
    explanation: "The priming effect occurs when fresh organic matter (e.g., crop residue, manure) is added to soil, stimulating microbial activity that accelerates decomposition of otherwise stable native soil organic matter."
  },
  {
    id: "d121l_073",
    subject: "da-121",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Mull humus, found in deciduous forest soils, is characterised by:",
    options: ["Well-mixed, intimate incorporation of organic matter with mineral soil, neutral to slightly acid pH", "Waterlogged peat with very slow decomposition", "Thin organic layer with high fungal biomass and low earthworm activity", "Thick, acidic, undecomposed litter with sharp boundary from mineral soil"],
    correct: 0,
    explanation: "Mull humus (from deciduous forests) is well-decomposed, intimately mixed with mineral soil by earthworm activity, with near-neutral pH and high microbial activity — ideal for soil fertility."
  },
  {
    id: "d121l_074",
    subject: "da-121",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The ratio of soil organic carbon to nitrogen in soil organic matter determines the rate of:",
    options: ["Phosphorus fixation in the soil", "Water infiltration rate", "Nitrogen mineralisation or immobilisation upon decomposition", "Potassium leaching from the profile"],
    correct: 2,
    explanation: "When C:N > 25–30, microbes immobilise available N (net immobilisation); when C:N < 20, mineralisation exceeds immobilisation (net N release). This controls N availability after organic matter addition."
  },
  {
    id: "d121l_075",
    subject: "da-121",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Which of the following practices most effectively builds soil organic matter in Indian agricultural soils?",
    options: ["Integration of FYM, green manures, and reduced tillage", "Deep ploughing to mix subsoil with surface soil", "Burning crop residues after harvest", "Applying urea at high rates to stimulate crop growth"],
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
    options: ["Organic amino acids only", "Nitrite (NO₂⁻) and nitrous oxide (N₂O)", "Molecular N₂ gas directly from soil air", "Nitrate (NO₃⁻) and ammonium (NH₄⁺) ions"],
    correct: 3,
    explanation: "Plants absorb N predominantly as nitrate (NO₃⁻) and ammonium (NH₄⁺) ions from soil solution. Most crops prefer NO₃⁻ under aerobic conditions, while NH₄⁺ is preferred by rice in waterlogged soils."
  },
  {
    id: "d121l_077",
    subject: "da-121",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "The classic deficiency symptom of nitrogen in plants is:",
    options: ["Interveinal chlorosis starting from youngest leaves", "Brown scorched leaf margins and tips", "Purpling of leaves due to anthocyanin accumulation", "Uniform yellowing (chlorosis) starting from older (lower) leaves, proceeding upward"],
    correct: 3,
    explanation: "N is mobile in the phloem, so it is remobilised from older leaves to younger growing tissues. Deficiency shows as uniform yellowing of older (lower) leaves first, moving upward."
  },
  {
    id: "d121l_078",
    subject: "da-121",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Phosphorus availability in soil is highest when soil pH is approximately:",
    options: ["5.5–6.5", "9.0–10.0", "4.0–5.0", "7.5–8.5"],
    correct: 0,
    explanation: "P availability peaks around pH 6.0–6.5 (sometimes cited as 6.0–7.0). At lower pH, P is fixed by Fe and Al hydroxides; at higher pH, Ca-P compounds become insoluble."
  },
  {
    id: "d121l_079",
    subject: "da-121",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Which role does potassium play in plant physiology that directly improves crop quality?",
    options: ["It is part of the ATP molecule, providing energy for photosynthesis", "It fixes atmospheric CO₂ in the Calvin cycle", "It is a structural component of chlorophyll molecule", "It activates > 60 enzymes and regulates stomatal opening, improving water use efficiency"],
    correct: 3,
    explanation: "K⁺ activates over 60 enzymes involved in plant metabolism and regulates guard cell turgor (stomatal opening/closing). It improves drought tolerance, fruit quality, disease resistance, and translocation of sugars."
  },
  {
    id: "d121l_080",
    subject: "da-121",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "The largest pool of nitrogen in soil that is NOT directly available to plants is:",
    options: ["Organic nitrogen in soil organic matter", "Fixed ammonium in clay interlayers", "Ammonium (NH₄⁺) ions in soil solution", "Nitrate (NO₃⁻) in soil water"],
    correct: 0,
    explanation: "Organic N in SOM constitutes 95–99% of total soil N but is not directly available. It must be mineralised (ammonification → nitrification) before plant uptake. Only 1–3% of organic N mineralises annually."
  },
  {
    id: "d121l_081",
    subject: "da-121",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Phosphorus deficiency in plants typically shows as:",
    options: ["Brown necrotic spots on leaf margins", "Yellow-green chlorosis of young leaves", "Purple or reddish discolouration of leaves and stems due to anthocyanin accumulation", "Interveinal chlorosis with green veins"],
    correct: 2,
    explanation: "P deficiency causes purplish-red discolouration due to accumulation of anthocyanins (promoted by carbohydrate accumulation and blocked synthesis). Older leaves may appear dark green initially."
  },
  {
    id: "d121l_082",
    subject: "da-121",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Luxury consumption of potassium refers to:",
    options: ["K accumulation in roots at the expense of shoots", "Uptake of K in excess of plant needs without beneficial effect on yield", "Excess K application causing toxicity symptoms", "K loss from soil by leaching beyond crop requirement"],
    correct: 1,
    explanation: "Luxury K consumption is the uptake of K well above the crop's physiological requirement when soil K is abundant, without proportional increase in yield. It is most pronounced in forages and grasses."
  },
  {
    id: "d121l_083",
    subject: "da-121",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "The critical phosphorus concentration in soil solution for adequate crop growth is approximately:",
    options: ["5–10 mg P L⁻¹", "0.2–0.3 mg P L⁻¹", "50–100 mg P L⁻¹", "< 0.01 mg P L⁻¹"],
    correct: 1,
    explanation: "The critical P concentration in soil solution for most crops is about 0.2–0.3 mg L⁻¹ (ppm). Below this, plant P uptake is insufficient for maximum growth."
  },
  {
    id: "d121l_084",
    subject: "da-121",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "The process of denitrification results in loss of soil nitrogen as:",
    options: ["NO₃⁻ leaching into groundwater", "N₂ and N₂O gases under anaerobic conditions", "NH₃ gas through volatilisation", "Organic N immobilisation by microbes"],
    correct: 1,
    explanation: "Denitrification is the microbial reduction of NO₃⁻ → NO₂⁻ → NO → N₂O → N₂ under anaerobic conditions. The gaseous products (mainly N₂ and N₂O) are lost to the atmosphere."
  },
  {
    id: "d121l_085",
    subject: "da-121",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "In Indian soils, the critical soil organic carbon level for adequate nitrogen supply is considered to be:",
    options: ["< 0.1%", "2.0–3.0%", "0.4–0.5%", "5.0–6.0%"],
    correct: 2,
    explanation: "The critical limit for organic carbon in Indian soils is 0.4–0.5% OC (or about 0.75–0.87% OM). Soils below this are considered N-deficient and require regular organic/inorganic N inputs."
  },
  {
    id: "d121l_086",
    subject: "da-121",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Potassium deficiency symptoms in plants appear first on:",
    options: ["Young, newly expanded leaves at the shoot apex", "Root tips, causing stunted root growth", "Older (lower) leaves, showing marginal and tip scorch (brown scorching)", "Flowers and fruits, causing poor fruit set"],
    correct: 2,
    explanation: "K is phloem-mobile, so it is remobilised from older leaves to growing tips. Deficiency first appears as tip and marginal scorch (necrosis) on older leaves, sometimes with interveinal chlorosis."
  },
  {
    id: "d121l_087",
    subject: "da-121",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Phosphorus moves to plant roots mainly by which mechanism?",
    options: ["Diffusion (due to very low concentration and small diffusion coefficient)", "Mass flow in soil solution (convective flow)", "Active pumping by root hairs only", "Root interception only"],
    correct: 0,
    explanation: "P moves primarily by diffusion because its concentration in soil solution is very low (< 1 ppm) and mass flow accounts for only a tiny fraction of P supply. Diffusion accounts for 90%+ of P uptake by roots."
  },
  {
    id: "d121l_088",
    subject: "da-121",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Ammonium fixation in soils occurs mainly due to:",
    options: ["NH₄⁺ reacting with soil organic matter to form recalcitrant N", "NH₄⁺ converting to NO₃⁻ through biological nitrification", "NH₄⁺ volatilising as NH₃ from the soil surface", "NH₄⁺ being trapped in the interlayer spaces of 2:1 clay minerals (illite, vermiculite)"],
    correct: 3,
    explanation: "2:1 clay minerals such as illite and vermiculite have interlayer spacings that match the size of NH₄⁺ (and K⁺), trapping these ions between tetrahedral sheets as 'fixed' (non-exchangeable) forms."
  },
  {
    id: "d121l_089",
    subject: "da-121",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Which form of inorganic phosphorus predominates in neutral to calcareous (high pH) soils of Telangana?",
    options: ["Calcium phosphates (Ca-P) such as hydroxyapatite", "Soluble monocalcium phosphate [Ca(H₂PO₄)₂]", "Iron and aluminium phosphates (Fe-P and Al-P)", "Organic phosphate esters"],
    correct: 0,
    explanation: "In neutral to alkaline soils, P is fixed as poorly soluble calcium phosphates (octacalcium phosphate, hydroxyapatite). In acid soils, Fe and Al phosphates dominate."
  },
  {
    id: "d121l_090",
    subject: "da-121",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Nitrogen use efficiency (NUE) of urea in wet rice paddies is typically:",
    options: ["60–70%", "< 20%", "80–90%", "30–50%"],
    correct: 3,
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
    options: ["Death of growing points (meristems), curling and scorching of young leaf tips", "Purple discolouration of older leaves", "Marginal scorch of older leaves", "Interveinal chlorosis of mature leaves"],
    correct: 0,
    explanation: "Ca is immobile in phloem; it cannot be retranslocated from older to younger tissue. Deficiency therefore affects young, rapidly growing meristematic tissues first — tip burn, blossom-end rot, bitter pit."
  },
  {
    id: "d121l_092",
    subject: "da-121",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Iron deficiency chlorosis in plants (lime-induced chlorosis) is most common in:",
    options: ["Acid soils below pH 5.5 with high Fe²⁺", "Sandy soils with excessive leaching of iron", "Neutral to alkaline soils (pH > 7) where Fe³⁺ becomes insoluble", "Waterlogged soils with high Fe²⁺ toxicity"],
    correct: 2,
    explanation: "Fe solubility drops 1000-fold for each unit rise in pH above 7. In calcareous alkaline soils, Fe³⁺ precipitates and becomes unavailable, causing interveinal chlorosis on young leaves."
  },
  {
    id: "d121l_093",
    subject: "da-121",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Zinc deficiency in rice is called:",
    options: ["Reclamation disease", "Whiptail", "Khaira disease", "White bud"],
    correct: 2,
    explanation: "Zinc deficiency in rice is known as 'Khaira disease' (also called 'Bronzing' or 'Kharia') — characterised by brown spots on lower leaves and stunting. It is the most widespread micronutrient deficiency in Indian rice soils."
  },
  {
    id: "d121l_094",
    subject: "da-121",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Sulphur deficiency symptoms in plants resemble nitrogen deficiency in that both cause yellowing, but sulphur deficiency differs because:",
    options: ["S deficiency starts on older leaves like N deficiency", "S deficiency causes tip burn while N deficiency causes interveinal chlorosis", "S deficiency causes purple discolouration unlike N", "S deficiency appears on younger (upper) leaves first since S is relatively immobile in phloem"],
    correct: 3,
    explanation: "S is relatively phloem-immobile (unlike N), so S deficiency symptoms (uniform yellowing) appear first on younger leaves at the top of the plant, distinguishing it from N deficiency which starts on older leaves."
  },
  {
    id: "d121l_095",
    subject: "da-121",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Boron deficiency in cauliflower produces a condition called:",
    options: ["Blind seed disease", "Heart rot", "Whiptail", "Brown heart (Hollow stem / Browning)"],
    correct: 3,
    explanation: "Boron deficiency in cauliflower causes 'browning' or 'hollow stem' (also called brown heart in turnip and swede). In sugar beet it causes 'heart rot'. In cauliflower, brown discolouration and hollow curd/stem are diagnostic."
  },
  {
    id: "d121l_096",
    subject: "da-121",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Molybdenum (Mo) deficiency in cauliflower produces a characteristic symptom called:",
    options: ["Heart rot", "Whiptail", "Khaira disease", "Grey speck"],
    correct: 1,
    explanation: "Mo deficiency causes 'whiptail' in cauliflower (strap-like, twisted, deformed leaves) and 'yellow spot' in citrus. Mo is required for nitrate reductase and nitrogenase enzymes."
  },
  {
    id: "d121l_097",
    subject: "da-121",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Manganese deficiency is known as 'grey speck' in oats and 'marsh spot' in:",
    options: ["Wheat", "Cotton", "Peas", "Groundnut"],
    correct: 2,
    explanation: "Mn deficiency causes 'grey speck' in oats and 'marsh spot' in peas (brown spots in cotyledons). It occurs in alkaline, over-limed, or organic soils where Mn²⁺ oxidises to unavailable MnO₂."
  },
  {
    id: "d121l_098",
    subject: "da-121",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "The recommended method of correction for zinc deficiency in paddy nursery soil is:",
    options: ["Application of zinc chelate (Zn-EDTA) at 2 kg ha⁻¹", "Liming the soil to pH 7.0", "Foliar spray of 0.5% ZnSO₄ alone", "Soil application of ZnSO₄ at 25 kg ha⁻¹ or seedling root dip in 2% ZnO suspension"],
    correct: 3,
    explanation: "Standard recommendations for Zn deficiency in rice include: soil application of ZnSO₄ (21%) at 25 kg ha⁻¹ or seedling root dip in 2–4% ZnO (or 2% ZnSO₄) suspension for 10–12 hours before transplanting."
  },
  {
    id: "d121l_099",
    subject: "da-121",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Copper deficiency disease in cereals is known as:",
    options: ["Grey speck", "Reclamation disease (or Wither tip)", "Khaira disease", "Marsh spot"],
    correct: 1,
    explanation: "Cu deficiency causes 'reclamation disease' (Heyns disease) in cereals — wilting, withering, and die-back of leaf tips; sometimes called 'wither tip' in wheat. It is common in organic peaty soils."
  },
  {
    id: "d121l_100",
    subject: "da-121",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Magnesium is a structural component of which important plant molecule?",
    options: ["Chlorophyll (porphyrin ring)", "ATP (adenosine triphosphate)", "Cell wall pectin", "Phytochrome"],
    correct: 0,
    explanation: "Mg²⁺ is the central atom of the chlorophyll porphyrin ring. Mg deficiency therefore causes interveinal chlorosis (green veins, yellow between veins) starting on older leaves due to its phloem mobility."
  },
  {
    id: "d121l_101",
    subject: "da-121",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "The critical limit of available zinc in soil (DTPA extractable Zn) below which crops show deficiency is:",
    options: ["2.0 mg kg⁻¹", "0.6 mg kg⁻¹", "5.0 mg kg⁻¹", "0.1 mg kg⁻¹"],
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
    options: ["5.0 mg kg⁻¹", "2.0 mg kg⁻¹", "0.5 mg kg⁻¹", "0.01 mg kg⁻¹"],
    correct: 2,
    explanation: "The critical lower limit for hot water soluble soil B is 0.5 mg kg⁻¹ for most field crops. Soils below this are B-deficient. The range between deficiency and toxicity for B is very narrow."
  },
  {
    id: "d121l_104",
    subject: "da-121",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Sulphur in plants serves as a constituent of which amino acids?",
    options: ["Glycine and alanine", "Proline and hydroxyproline", "Lysine and arginine", "Cysteine and methionine"],
    correct: 3,
    explanation: "Sulphur is an essential component of the amino acids cysteine (–SH group) and methionine (–S–CH₃ group) and of the vitamins thiamine (B₁) and biotin, as well as coenzyme A."
  },
  {
    id: "d121l_105",
    subject: "da-121",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Chlorine (Cl) as a micronutrient is essential for which plant process?",
    options: ["Phosphate transport across root cell membranes", "Nitrogen fixation in root nodules", "Protein synthesis in ribosomes", "Photosystem II water-splitting (oxygen evolution) reaction"],
    correct: 3,
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
    options: ["0–30 cm", "0–5 cm", "0–60 cm", "0–15 cm (or 0–20 cm)"],
    correct: 3,
    explanation: "The standard sampling depth for soil fertility testing is 0–15 cm (or 0–20 cm) for most annual crops, as this represents the primary rooting zone receiving fertilizers and amendments."
  },
  {
    id: "d121l_107",
    subject: "da-121",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The Soil Test Crop Response (STCR) approach to fertilizer recommendation is based on:",
    options: ["Laboratory analysis of plant tissue alone", "Targeted yield approach correlating soil test values with crop response to fertilizers", "Blanket (fixed) recommendations irrespective of soil test values", "Farmer experience and traditional practices"],
    correct: 1,
    explanation: "STCR uses regression equations relating soil nutrient status to crop response, recommending fertilizer dose to achieve a pre-set target yield based on available soil nutrient supply plus fertilizer need."
  },
  {
    id: "d121l_108",
    subject: "da-121",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The critical limit of available soil phosphorus (Olsen P) below which fertilizer P application gives economic response is:",
    options: ["< 5 mg kg⁻¹ (medium or lower)", "< 25 mg kg⁻¹", "< 1 mg kg⁻¹", "< 50 mg kg⁻¹"],
    correct: 0,
    explanation: "The critical Olsen P for most crops is approximately 10–12 mg kg⁻¹ (varies by crop and soil). Soils with Olsen P < 10 mg kg⁻¹ are considered low (responsive to P fertilization)."
  },
  {
    id: "d121l_109",
    subject: "da-121",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Bray-P1 method for soil P extraction uses which extractant?",
    options: ["0.03N NH₄F + 0.025N HCl", "0.1N H₂SO₄", "1N NH₄OAc at pH 7", "0.5M NaHCO₃ at pH 8.5"],
    correct: 0,
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
    options: ["< 50 kg K₂O ha⁻¹", "< 500 kg K₂O ha⁻¹", "< 110–150 kg K₂O ha⁻¹", "< 300 kg K₂O ha⁻¹"],
    correct: 2,
    explanation: "The critical limit for exchangeable K is typically 110–150 kg K₂O ha⁻¹ (or about 0.2 cmol(+) kg⁻¹). Soils below this are classified as K-deficient in ICAR recommendations."
  },
  {
    id: "d121l_112",
    subject: "da-121",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Soil Organic Carbon is analytically determined by which standard method?",
    options: ["Colorimetric analysis with Griess reagent", "Kjeldahl digestion with H₂SO₄", "Ion exchange chromatography", "Walkley-Black wet oxidation with K₂Cr₂O₇"],
    correct: 3,
    explanation: "The Walkley-Black method (wet oxidation with K₂Cr₂O₇ in H₂SO₄, back-titrated with FAS) is the standard method for soil organic carbon determination in soil testing laboratories."
  },
  {
    id: "d121l_113",
    subject: "da-121",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Soil fertility maps prepared by systematic soil testing across a district are used primarily for:",
    options: ["Calculating rainfall patterns for irrigation planning", "Determining soil pH for liming recommendations only", "Identifying spatial variability and guiding site-specific fertilizer recommendations", "Estimating soil erosion rates in watersheds"],
    correct: 2,
    explanation: "Soil fertility maps reveal spatial patterns of nutrient deficiency/sufficiency across landscape units, enabling site-specific nutrient management (SSNM) to optimise fertilizer use efficiency."
  },
  {
    id: "d121l_114",
    subject: "da-121",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The Soil Health Card (SHC) scheme in India provides information to farmers on:",
    options: ["Seed variety recommendations and sowing dates", "Rainfall forecast and irrigation scheduling advice", "Crop insurance premium rates and subsidy eligibility", "Soil test values and fertilizer recommendations for 12 nutrient parameters"],
    correct: 3,
    explanation: "The Soil Health Card (launched 2015) provides farmers with soil test results for 12 parameters (pH, EC, OC, N, P, K and 6 micronutrients) and crop-wise fertilizer recommendations every 3 years."
  },
  {
    id: "d121l_115",
    subject: "da-121",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Available soil nitrogen is estimated by which commonly used method in soil testing laboratories?",
    options: ["Boiling water extraction", "DTPA extraction with atomic absorption spectrophotometry", "Alkaline permanganate (KMnO₄) method by Subbiah and Asija", "Olsen method (NaHCO₃ extraction)"],
    correct: 2,
    explanation: "The alkaline potassium permanganate method (Subbiah and Asija, 1956) is the standard method for available N in Indian soil testing labs. It measures NH₄⁺ released by alkaline KMnO₄ oxidation."
  },
  {
    id: "d121l_116",
    subject: "da-121",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The 'sufficiency level of available nutrients' (SLAN) concept in soil fertility evaluation assumes:",
    options: ["All soils require the same amount of fertilizer for maximum yield", "There is a soil nutrient level above which crop response to added nutrient is unlikely", "Crop yield depends only on the most limiting nutrient", "Nutrients in soil and fertilizer are equally efficient at all levels"],
    correct: 1,
    explanation: "SLAN (Sufficiency Level of Available Nutrients) identifies the soil test value above which there is no significant crop response to additional fertilizer — the 'critical level' concept in soil fertility."
  },
  {
    id: "d121l_117",
    subject: "da-121",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The DTPA extraction solution (Lindsay and Norvell, 1978) is used to determine plant-available:",
    options: ["Iron (Fe), Manganese (Mn), Zinc (Zn), and Copper (Cu) micronutrients", "Boron (B) and Molybdenum (Mo)", "Nitrogen (N) and phosphorus (P)", "Calcium (Ca) and Magnesium (Mg)"],
    correct: 0,
    explanation: "DTPA (diethylenetriaminepentaacetic acid) at pH 7.3 is the standard chelating extractant for Fe, Mn, Zn, and Cu in neutral to alkaline soils. It mimics root chelation activity."
  },
  {
    id: "d121l_118",
    subject: "da-121",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The Mitscherlich equation describes the relationship between:",
    options: ["Crop yield and quantity of a limiting nutrient applied (law of diminishing returns)", "Crop yield and irrigation water applied", "Soil texture and water holding capacity", "Soil pH and nutrient availability"],
    correct: 0,
    explanation: "Mitscherlich's equation (Y = A[1 – e^(–cx)]) describes the diminishing yield response as a nutrient is added in increasing amounts — the mathematical basis of fertilizer response curves."
  },
  {
    id: "d121l_119",
    subject: "da-121",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Leaf colour chart (LCC) for nitrogen management in rice is used to:",
    options: ["Identify disease infections from leaf discolouration", "Estimate crop maturity and harvest date", "Assess water stress in rice paddies", "Determine real-time N status of the crop for split application decisions"],
    correct: 3,
    explanation: "The LCC is a simple plastic strip with colour panels (1–4 or 1–6) compared against the rice leaf. When leaf colour drops below threshold (usually panel 3 or 4), N fertilizer application is triggered."
  },
  {
    id: "d121l_120",
    subject: "da-121",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "In Telangana, the state soil testing laboratory network aims to test soil samples and issue Soil Health Cards at a frequency of once every:",
    options: ["3 years", "1 year", "5 years", "6 months"],
    correct: 0,
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
    options: ["8 dS m⁻¹", "1 dS m⁻¹", "2 dS m⁻¹", "4 dS m⁻¹"],
    correct: 3,
    explanation: "USDA-Riverside classification: Saline soils have ECe > 4 dS m⁻¹ (4 mmhos/cm), pH < 8.5, and ESP < 15. Crop growth is reduced when ECe exceeds crop-specific thresholds."
  },
  {
    id: "d121l_122",
    subject: "da-121",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "A sodic (alkali) soil is characterised by:",
    options: ["ECe < 4 dS m⁻¹, pH > 8.5, ESP > 15", "ECe > 4 dS m⁻¹, pH < 8.5, ESP < 15", "ECe > 4 dS m⁻¹, pH > 8.5, ESP < 15", "ECe > 8 dS m⁻¹, pH < 7, ESP > 30"],
    correct: 0,
    explanation: "Sodic (alkali) soils: ECe < 4 dS m⁻¹ (low salinity), ESP > 15 (high exchangeable Na), pH > 8.5 (high). High Na disperses clay, destroying soil structure and reducing water infiltration."
  },
  {
    id: "d121l_123",
    subject: "da-121",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Reclamation of sodic (alkali) soils is accomplished primarily by applying:",
    options: ["Sulphur (S) to directly neutralise Na⁺", "Agricultural lime (CaCO₃) to increase pH", "MOP (muriate of potash) to replace Na⁺ with K⁺", "Gypsum (CaSO₄·2H₂O) to replace Na⁺ with Ca²⁺ on exchange sites"],
    correct: 3,
    explanation: "Gypsum (CaSO₄·2H₂O) provides Ca²⁺ to replace Na⁺ on exchange sites. The displaced Na₂SO₄ is then leached out with irrigation water. Elemental S lowers pH in calcareous sodic soils (S → H₂SO₄ → CaSO₄)."
  },
  {
    id: "d121l_124",
    subject: "da-121",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Reclamation of acid soils is achieved by applying agricultural lime (CaCO₃). The amount of lime required is called:",
    options: ["Lime requirement (LR)", "Sulphur requirement", "Gypsum requirement (GR)", "Buffer capacity"],
    correct: 0,
    explanation: "Lime requirement (LR) is the amount of CaCO₃-equivalent material needed to raise soil pH to a desired target (usually 6.0–6.5) and neutralise exchangeable Al³⁺ and H⁺."
  },
  {
    id: "d121l_125",
    subject: "da-121",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The primary mechanism of crop toxicity in saline soils is:",
    options: ["Increase in soil pH reducing nutrient availability", "Specific ion toxicity of Cl⁻ and Na⁺ only", "Osmotic stress reducing water uptake ('physiological drought')", "Destruction of root mycorrhizal associations"],
    correct: 2,
    explanation: "The primary effect of soil salinity is osmotic — high salt concentration in soil solution lowers water potential, reducing plant water uptake. Secondary effects include specific ion toxicity (Na⁺, Cl⁻, B) and nutrient imbalance."
  },
  {
    id: "d121l_126",
    subject: "da-121",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Saline-sodic soils have properties of:",
    options: ["ECe < 4 dS m⁻¹, ESP > 15, pH > 8.5", "ECe > 4 dS m⁻¹, ESP < 15, pH < 8.5", "ECe > 4 dS m⁻¹, ESP > 15, pH 8.0–8.5", "ECe < 4 dS m⁻¹, ESP < 15, pH < 8.5"],
    correct: 2,
    explanation: "Saline-sodic soils: ECe > 4 dS m⁻¹ AND ESP > 15, pH usually 8.0–8.5 (Ca-Mg salts keep pH lower than pure sodic soils). Reclamation requires both gypsum and leaching."
  },
  {
    id: "d121l_127",
    subject: "da-121",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Acid soil toxicity is primarily caused by excess amounts of which ion in the soil solution?",
    options: ["Al³⁺ and Mn²⁺ ions (aluminium and manganese toxicity)", "SO₄²⁻ (sulphate) ions", "H⁺ ion alone", "Fe²⁺ (ferrous iron toxicity only)"],
    correct: 0,
    explanation: "Below pH 5.5, Al³⁺ and Mn²⁺ become soluble in toxic concentrations. Al³⁺ is the primary toxicity factor inhibiting root elongation in acid soils globally; Mn²⁺ toxicity is also common."
  },
  {
    id: "d121l_128",
    subject: "da-121",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Leaching requirement (LR) in saline soil management refers to:",
    options: ["Electrical conductivity threshold for crop selection", "Fraction of applied irrigation water that must pass through the root zone to prevent salt accumulation", "Amount of lime needed to neutralise soil acidity", "Rate of salt movement from subsoil to surface by capillary rise"],
    correct: 1,
    explanation: "Leaching requirement = ECw / (5 × ECe threshold – ECw), representing the fraction of irrigation water that must drain below the root zone to maintain root zone salinity at or below the crop tolerance threshold."
  },
  {
    id: "d121l_129",
    subject: "da-121",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Waterlogging reclamation of sodic soils is initially best done by growing which crop?",
    options: ["Wheat (sensitive to waterlogging)", "Cotton (medium-sensitive)", "Groundnut (sensitive to excess moisture)", "Rice (tolerant of submergence; leaching effect)"],
    correct: 3,
    explanation: "Rice is the recommended reclamation crop for sodic soils in India because ponded water promotes leaching of Na⁺, and the continuous submergence reduces soil pH and ameliorates alkalinity over time."
  },
  {
    id: "d121l_130",
    subject: "da-121",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Gypsum requirement (GR) for reclamation of sodic soil is determined based on:",
    options: ["Total salt content of the soil", "Organic carbon content of the soil", "Exchangeable sodium that must be replaced to reduce ESP to a target level", "Electrical conductivity of irrigation water"],
    correct: 2,
    explanation: "GR (t ha⁻¹) = [(Initial ESP – Target ESP) × CEC × bulk density × depth] / 100 × 0.86. It represents the Ca needed to replace excess Na⁺ from the exchange complex."
  },
  {
    id: "d121l_131",
    subject: "da-121",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Acid sulphate soils are characterised by the presence of which mineral that oxidises to produce extreme acidity?",
    options: ["Dolomite [CaMg(CO₃)₂]", "Pyrite (FeS₂)", "Gypsum (CaSO₄)", "Calcite (CaCO₃)"],
    correct: 1,
    explanation: "Acid sulphate soils contain pyrite (FeS₂). When drained and oxidised, pyrite reacts with oxygen and water to produce sulphuric acid, dropping pH to below 3.5, releasing toxic Fe²⁺ and Al³⁺."
  },
  {
    id: "d121l_132",
    subject: "da-121",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The term 'usar' is the traditional Indian name for which type of problem soil?",
    options: ["Laterite soils of Western Ghats", "Sodic (alkali) soils with hard Na-clay crusts", "Waterlogged peat soils", "Acid soils in humid forests"],
    correct: 1,
    explanation: "'Usar' lands are traditional Indian sodic (alkali) soils found mainly in the Indo-Gangetic plains. They have high pH (> 8.5), ESP > 15, and characteristic black surface crust; 'Reh' refers to salt efflorescence."
  },
  {
    id: "d121l_133",
    subject: "da-121",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The salt tolerance of crop plants is ranked correctly as:",
    options: ["Barley > Wheat > Rice > Sugarbeet (most to least tolerant)", "Sugarbeet > Barley > Cotton > Wheat > Rice > Beans (approximate tolerance order)", "Rice = Barley (equally most tolerant) > Beans > Cotton", "Groundnut > Wheat > Maize > Cotton (most to least tolerant)"],
    correct: 1,
    explanation: "General salt tolerance order: Sugarbeet > Barley > Cotton > Wheat > Maize > Rice > Beans. Rice is moderately sensitive; beans are sensitive. Barley is among the most salt-tolerant cereals."
  },
  {
    id: "d121l_134",
    subject: "da-121",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Elemental sulphur (S) can be used for reclamation of calcareous sodic soils because:",
    options: ["S directly precipitates Na⁺ as Na₂SO₄", "S raises soil pH, improving structure", "S provides sulphur nutrition to crops growing in alkaline soils", "Microbial oxidation of S produces H₂SO₄ which reacts with CaCO₃ to release Ca²⁺ for Na⁺ replacement"],
    correct: 3,
    explanation: "In calcareous sodic soils: S + O₂ + H₂O → H₂SO₄ (microbial); H₂SO₄ + CaCO₃ → CaSO₄ + H₂O + CO₂. The CaSO₄ formed acts like applied gypsum to displace Na⁺ from exchange sites."
  },
  {
    id: "d121l_135",
    subject: "da-121",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Saline soils in India are predominantly found in which states/regions?",
    options: ["Himachal Pradesh and Uttarakhand (hill states)", "Gujarat, Rajasthan, Haryana, Punjab, Maharashtra coastal areas", "West Bengal and Assam (high rainfall areas)", "Kerala and Karnataka humid zones"],
    correct: 1,
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
    options: ["Crop and management factor", "Slope length and steepness factor", "Soil erodibility factor (resistance of soil to erosion and transport)", "Rainfall erosivity factor"],
    correct: 2,
    explanation: "K is the soil erodibility factor in USLE — the susceptibility of a specific soil to erosion based on texture, structure, organic matter, and permeability. Higher K = more erodible soil."
  },
  {
    id: "d121l_137",
    subject: "da-121",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Sheet erosion refers to:",
    options: ["Relatively uniform removal of a thin layer of soil over a broad area by raindrop splash and surface runoff", "Wind removal of fine particles from the soil surface", "Large-scale mass movement of soil on steep slopes", "Removal of soil in distinct channels cut by concentrated water flow"],
    correct: 0,
    explanation: "Sheet erosion is the least visible but most widespread erosion type — uniform removal of a thin soil layer over a wide area by rainfall splash and shallow overland flow, often going unnoticed until subsoil is exposed."
  },
  {
    id: "d121l_138",
    subject: "da-121",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The T value (soil loss tolerance) in soil conservation planning refers to:",
    options: ["Maximum tolerable soil temperature for crop growth", "Threshold rainfall intensity triggering erosion", "Maximum rate of soil erosion (in t ha⁻¹ yr⁻¹) that still permits sustained crop productivity", "Total organic matter needed to maintain soil fertility"],
    correct: 2,
    explanation: "T value is the maximum permissible soil loss that allows maintaining long-term soil productivity. In India, T values range from 2.5–12.5 t ha⁻¹ yr⁻¹ depending on soil depth and productivity potential."
  },
  {
    id: "d121l_139",
    subject: "da-121",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Contour bunding is a soil conservation measure that works by:",
    options: ["Deep ploughing to break impervious hardpan layers", "Applying chemical soil stabilisers to the surface", "Planting trees along ridgelines to break wind velocity", "Constructing earthen embankments along contour lines to impede downslope water flow"],
    correct: 3,
    explanation: "Contour bunds are earthen embankments constructed along contour lines (equal elevation) across slopes. They slow runoff, reduce rill and gully erosion, and promote infiltration and moisture conservation."
  },
  {
    id: "d121l_140",
    subject: "da-121",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Rill erosion differs from gully erosion in that:",
    options: ["Rills are deeper (> 30 cm) and cannot be obliterated by normal tillage", "Rill erosion occurs only on flat land, gully erosion only on steep slopes", "Rills are small, shallow channels that can be removed by normal tillage; gullies are large, deep channels that cannot", "Rills form in sandy soils while gullies form only in clay soils"],
    correct: 2,
    explanation: "Rills are small (< 30 cm deep) channels removed by tillage; gullies are large (> 30 cm) incised channels that cannot be crossed by machinery and require major engineering structures to control."
  },
  {
    id: "d121l_141",
    subject: "da-121",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Windbreaks (shelterbelts) reduce wind erosion by:",
    options: ["Acidifying soil pH to increase cohesion", "Providing organic matter through leaf fall to bind soil particles", "Reducing wind velocity near the soil surface and trapping drifting soil particles", "Increasing soil moisture to above field capacity"],
    correct: 2,
    explanation: "Windbreaks (rows of trees/shrubs) reduce wind speed for a distance of 10–15 times their height on the leeward side, protecting the soil surface from detachment and transport of particles by wind."
  },
  {
    id: "d121l_142",
    subject: "da-121",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The R factor in the USLE represents:",
    options: ["Root density factor reducing erosion", "Runoff coefficient of the watershed", "Relief factor based on land slope", "Rainfall erosivity (based on rainfall kinetic energy × intensity)"],
    correct: 3,
    explanation: "R is the rainfall erosivity index — computed as sum of products of kinetic energy (E) and maximum 30-minute intensity (I₃₀) for each storm. Higher R = more erosive rainfall climate."
  },
  {
    id: "d121l_143",
    subject: "da-121",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Terracing as a soil conservation measure is most effective on:",
    options: ["Heavy-textured waterlogged valley soils", "Moderately to steeply sloping cultivated lands (> 5%)", "Sandy desert soils with low clay content", "Flat to gently sloping land (< 1%)"],
    correct: 1,
    explanation: "Terraces (bench terraces, broad-based terraces) are constructed on slopes > 5% to convert a long slope into a series of short, nearly level or gently sloping steps, reducing runoff velocity and erosion."
  },
  {
    id: "d121l_144",
    subject: "da-121",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The process by which wind picks up and transports dry, loose soil particles is called:",
    options: ["Deflation", "Saltation", "Deposition", "Abrasion"],
    correct: 0,
    explanation: "Deflation is the erosive process by which wind lifts and carries away dry, loose soil particles from the surface. Saltation (bouncing) and creep are wind transport modes; deflation is the erosion/detachment process."
  },
  {
    id: "d121l_145",
    subject: "da-121",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The most effective biological measure for controlling soil erosion on degraded lands is:",
    options: ["Establishment of grass cover, contour grass strips (vegetative barriers)", "Deep ploughing to bury eroded material", "Construction of concrete check dams", "Application of chemical soil conditioners"],
    correct: 0,
    explanation: "Permanent grass/vegetation cover is the most effective biological measure — plant roots bind soil, canopy intercepts raindrops reducing splash, and stems slow runoff. Vetiver grass strips are widely used in India."
  },
  {
    id: "d121l_146",
    subject: "da-121",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Raindrop splash erosion (splash detachment) is significant because:",
    options: ["Raindrops detach soil particles on impact, making them available for transport by runoff", "Raindrops dissolve clay and carry it in suspension immediately", "Raindrops create macropores that increase infiltration", "Raindrops compact the soil surface, directly causing erosion"],
    correct: 0,
    explanation: "Raindrop impact detaches soil aggregates (splash detachment) at the first stage of water erosion. The detached particles are then transported by surface runoff. A good canopy cover (crops, mulch) prevents raindrop impact."
  },
  {
    id: "d121l_147",
    subject: "da-121",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Mulching as a soil conservation technique helps by:",
    options: ["Protecting soil surface from raindrop impact, reducing runoff, and improving infiltration", "Adding nitrogen to the soil through biological fixation", "Compacting the surface to prevent wind erosion", "Increasing soil pH to reduce erosion"],
    correct: 0,
    explanation: "Mulches (crop residues, straw, plastic film) protect the soil from raindrop splash, reduce surface runoff velocity, maintain moisture, moderate temperature, and add organic matter — all reducing erosion."
  },
  {
    id: "d121l_148",
    subject: "da-121",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Strip cropping for erosion control involves:",
    options: ["Planting crops in single rows perpendicular to slope direction", "Alternating strips of erosion-permitting (row crops) and erosion-resisting (grasses/legumes) crops along contours", "Growing a single crop in a wide strip across the entire field", "Removing all vegetation in strips to allow rainwater infiltration"],
    correct: 1,
    explanation: "Strip cropping alternates close-growing crops (grasses, legumes — which slow runoff and filter sediment) with erosion-susceptible row crops in strips along contours, reducing net soil loss."
  },
  {
    id: "d121l_149",
    subject: "da-121",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Watershed management as a soil and water conservation strategy works at the level of:",
    options: ["Individual tree planting programs", "State-level policy for irrigation allocation", "Individual farm plot only", "An entire natural drainage unit (catchment) treating land and water resources holistically"],
    correct: 3,
    explanation: "Watershed management treats the entire catchment (watershed) as a unit, integrating conservation measures from ridge to valley — treating upper catchment (vegetation, contour bunds) and lower areas (check dams) to conserve soil and water."
  },
  {
    id: "d121l_150",
    subject: "da-121",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Which cropping practice best reduces soil erosion on sloping agricultural lands?",
    options: ["Burning crop residues before sowing", "Contour tillage and planting (across the slope)", "Bare fallow between crops", "Deep ploughing along the slope direction"],
    correct: 1,
    explanation: "Contour tillage and planting (furrows and crop rows perpendicular to slope) creates a series of small barriers that slow runoff, increase infiltration, and reduce rill erosion — the simplest mechanical conservation practice."
  },

];
