export interface Lecture {
  id: string;          // e.g. "lecture-1"
  subjectId: string;
  lectureNo: number;
  title: string;
  description: string;
}

const lec = (subjectId: string, lectureNo: number, title: string, description: string): Lecture => ({
  id: `lecture-${lectureNo}`,
  subjectId,
  lectureNo,
  title,
  description,
});

// ── DA-101: Principles of Agronomy ──────────────────────────────────────────
export const DA101_LECTURES: Lecture[] = [
  lec("da-101", 1, "Introduction to Agriculture & Agronomy", "Definition, scope, branches of agriculture, importance, agricultural research institutes (ICAR, PJTSAU, ICRISAT)"),
  lec("da-101", 2, "Weather, Climate & Agro-climatic Zones", "Weather vs climate, elements of weather, Telangana agro-climatic zones, seasons"),
  lec("da-101", 3, "Soil Properties & Tillage", "Soil physical properties, tillage objectives, types of tillage, minimum tillage, zero tillage"),
  lec("da-101", 4, "Sowing – Methods, Depth & Seed Rate", "Methods of sowing, seed rate, seed treatment, optimum sowing time, plant population"),
  lec("da-101", 5, "Crop Nutrition & Fertilizer Application", "Essential nutrients, deficiency symptoms, fertilizer methods, time of application"),
  lec("da-101", 6, "Weed Management", "Definition, classification, harmful & beneficial effects of weeds, weed management methods, herbicides"),
  lec("da-101", 7, "Irrigation & Water Management", "Irrigation scheduling, methods of irrigation, water use efficiency, drainage"),
  lec("da-101", 8, "Dryland Farming", "Definition, characteristics, moisture conservation, contingency crops, watershed management"),
  lec("da-101", 9, "Cropping Systems", "Sole cropping, mixed cropping, intercropping, crop rotation, relay cropping, LER"),
  lec("da-101", 10, "Harvest, Threshing & Post-Harvest", "Harvest index, maturity indices, threshing, storage, post-harvest losses"),
];

// ── DA-102: Crop Production-I (Kharif Crops) ────────────────────────────────
export const DA102_LECTURES: Lecture[] = [
  lec("da-102", 1, "Paddy (Rice) Cultivation", "Origin, climate, varieties, nursery, transplanting, spacing, nutrient management, water management, harvest"),
  lec("da-102", 2, "Maize Cultivation", "Origin, climate, varieties, sowing, seed rate, nutrition, irrigation, harvest, uses"),
  lec("da-102", 3, "Sorghum (Jowar) & Pearl Millet (Bajra)", "Importance, climate, varieties, sowing methods, manuring, irrigation, harvest"),
  lec("da-102", 4, "Groundnut Cultivation", "Importance, varieties, sowing, spacing, nutrient management, irrigation, harvest, uses"),
  lec("da-102", 5, "Cotton Cultivation", "Importance, climate, varieties, spacing, nutrition, irrigation, picking, ginning"),
  lec("da-102", 6, "Red Gram (Pigeonpea) Cultivation", "Origin, varieties, sowing, spacing, nutrient management, irrigation, harvest"),
  lec("da-102", 7, "Blackgram & Greengram Cultivation", "Importance, varieties, sowing, nutrient management, irrigation, harvest, uses"),
  lec("da-102", 8, "Soybean Cultivation", "Origin, climate, varieties, sowing, nutrition, irrigation, harvest, uses"),
  lec("da-102", 9, "Sesamum & Castor (Kharif Oilseeds)", "Importance, varieties, sowing, nutrient management, irrigation, harvest"),
  lec("da-102", 10, "Sunflower & Minor Kharif Crops", "Sunflower, foxtail millet, small millet cultivation details"),
];

// ── DA-111: Plant Breeding & Seed Technology ─────────────────────────────────
export const DA111_LECTURES: Lecture[] = [
  lec("da-111", 1, "Floral Biology & Pollination", "Flower structure, types of pollination, self-pollination, cross-pollination, pollination agents"),
  lec("da-111", 2, "Modes of Reproduction", "Sexual, asexual, vegetative propagation, apomixis, importance in breeding"),
  lec("da-111", 3, "Mendelian Genetics", "Laws of inheritance, monohybrid, dihybrid crosses, incomplete dominance, codominance"),
  lec("da-111", 4, "Breeding Methods – Self-Pollinated Crops", "Introduction, selection, pure line selection, mass selection, pedigree method, bulk method"),
  lec("da-111", 5, "Breeding Methods – Cross-Pollinated Crops", "Mass selection, ear-to-row, recurrent selection, synthetic varieties, composite varieties"),
  lec("da-111", 6, "Hybridization & Heterosis", "Types of hybridization, hybrid vigor, methods of hybridization, F1 seed production, CMS"),
  lec("da-111", 7, "Mutation & Polyploidy Breeding", "Types of mutations, mutagenic agents, polyploidy, allopolyploidy, uses in breeding"),
  lec("da-111", 8, "Seed Production Principles", "Classes of seeds, seed production stages, isolation distance, rouging, seed processing"),
  lec("da-111", 9, "Seed Testing & Quality", "Seed germination, purity, moisture, vigour testing, ISTA rules, 400 seed weight"),
  lec("da-111", 10, "Seed Certification & Seed Laws", "Seed Certification process, tag colors, Seeds Act 1966, New Seed Policy, NSSP"),
];

// ── DA-121: Soil Chemistry & Fertility ──────────────────────────────────────
export const DA121_LECTURES: Lecture[] = [
  lec("da-121", 1, "Soil Formation & Profiles", "Parent material, weathering, soil forming factors, soil profile horizons, soil types of India"),
  lec("da-121", 2, "Soil Physical Properties", "Soil texture, structure, porosity, bulk density, soil colour, soil temperature"),
  lec("da-121", 3, "Soil Water & Air", "Types of soil water, field capacity, wilting point, AWC, soil aeration"),
  lec("da-121", 4, "Soil Chemical Properties & pH", "Soil reaction, soil pH, buffer capacity, cation exchange capacity, base saturation"),
  lec("da-121", 5, "Soil Organic Matter", "Composition, humus, C:N ratio, decomposition, importance for soil fertility"),
  lec("da-121", 6, "Essential Plant Nutrients – Macro", "Classification, N, P, K roles, deficiency symptoms, soil availability"),
  lec("da-121", 7, "Secondary & Micronutrients", "Ca, Mg, S, Fe, Mn, Zn, Cu, B, Mo, Cl – roles and deficiency symptoms"),
  lec("da-121", 8, "Soil Fertility Evaluation", "Soil testing, critical limit, soil fertility maps, fertilizer recommendations"),
  lec("da-121", 9, "Problem Soils – Saline & Alkaline", "Saline, sodic, acid soils – formation, properties, reclamation methods"),
  lec("da-121", 10, "Soil Conservation & Erosion", "Types of soil erosion, causes, conservation measures, contour farming, windbreaks"),
];

// ── DA-122: Manures & Fertilizers ───────────────────────────────────────────
export const DA122_LECTURES: Lecture[] = [
  lec("da-122", 1, "Farmyard Manure & Compost", "FYM composition, preparation, benefits; composting methods – Indore, Bangalore"),
  lec("da-122", 2, "Vermicompost & Green Manures", "Vermicomposting process, earthworms, green manure crops, Sesbania, Dhaincha"),
  lec("da-122", 3, "Biofertilizers", "Rhizobium, Azotobacter, Azospirillum, BGA, PSB, VAM – preparation and use"),
  lec("da-122", 4, "Nitrogen Fertilizers", "Urea, ammonium sulphate, CAN, liquid nitrogen, slow-release fertilizers"),
  lec("da-122", 5, "Phosphatic Fertilizers", "SSP, TSP, DAP, rock phosphate, phosphate solubilising bacteria"),
  lec("da-122", 6, "Potassic Fertilizers", "MOP, SOP, potassium nitrate, importance of potassium in crops"),
  lec("da-122", 7, "Complex & Mixed Fertilizers", "NPK complexes, 17:17:17, 14:35:14, fertilizer mixtures, fertigation"),
  lec("da-122", 8, "Micronutrient Fertilizers", "Zinc sulphate, ferrous sulphate, borax, FeSO4, foliar sprays"),
  lec("da-122", 9, "Integrated Nutrient Management", "INM concept, combining organic + inorganic + bio fertilizers, soil health"),
  lec("da-122", 10, "Fertilizer Laws & Quality Control", "Fertilizer Control Order, FCO 1985, BIS standards, fertilizer subsidies"),
];

// ── DA-131: General Entomology ───────────────────────────────────────────────
export const DA131_LECTURES: Lecture[] = [
  lec("da-131", 1, "Introduction to Insects & Phylum Arthropoda", "Characteristics, classification of Arthropoda, class Insecta, importance of insects"),
  lec("da-131", 2, "External Morphology of Insects", "Head, thorax, abdomen, wings, legs, antennae – types and functions"),
  lec("da-131", 3, "Internal Morphology & Physiology", "Digestive, circulatory, respiratory, nervous, reproductive systems of insects"),
  lec("da-131", 4, "Life Cycles & Metamorphosis", "Complete metamorphosis (holometabola), incomplete (hemimetabola), ametabola, egg, larva, pupa, adult"),
  lec("da-131", 5, "Major Insect Orders – I", "Orthoptera (grasshopper), Hemiptera (bugs), Coleoptera (beetles), Thysanoptera (thrips)"),
  lec("da-131", 6, "Major Insect Orders – II", "Lepidoptera (moths, butterflies), Diptera (flies), Hymenoptera (bees, wasps, ants)"),
  lec("da-131", 7, "Beneficial Insects", "Honeybee – castes and products; Silkworm – bombyx mori; Lac insect – Kerria lacca"),
  lec("da-131", 8, "Insect Ecology & Population Dynamics", "Biotic potential, environmental resistance, population curves, pest status, economic threshold"),
  lec("da-131", 9, "Pesticides – Classification & Formulations", "Insecticides, fungicides, herbicides, formulations, mode of entry, toxicity"),
  lec("da-131", 10, "Pest Management Methods", "Cultural, mechanical, biological, chemical, IPM concept, ETL, EIL"),
];

// ── DA-132: Crop Pests & Their Management ────────────────────────────────────
export const DA132_LECTURES: Lecture[] = [
  lec("da-132", 1, "Rice Pests & Management", "Stem borer, BPH, gall midge, leaf folder, whorl maggot – symptoms and management"),
  lec("da-132", 2, "Maize, Sorghum & Millet Pests", "Shoot fly, stem borer, fall armyworm, aphids – identification and management"),
  lec("da-132", 3, "Cotton Pests & Management", "Bollworms (American, Spotted, Pink), jassid, whitefly, thrips – IPM in cotton"),
  lec("da-132", 4, "Pulse Pests & Management", "Pod borer (Helicoverpa), pod fly, bruchids, aphids – management strategies"),
  lec("da-132", 5, "Groundnut & Oilseed Pests", "Leafminer, white grub, Spodoptera, aphids in groundnut; oilseed crop pests"),
  lec("da-132", 6, "Vegetable Pests", "Diamondback moth, fruit borer, white fly, leaf miner in vegetables"),
  lec("da-132", 7, "Stored Grain Pests", "Weevils, grain moth, khapra beetle, grain borer – prevention and management"),
  lec("da-132", 8, "Mites & Nematodes", "Red spider mite, yellow mite; root-knot nematode, cyst nematode – symptoms and control"),
  lec("da-132", 9, "Biological Control of Pests", "Parasitoids, predators, pathogens, Trichogramma, NPV, Bt – principles and application"),
  lec("da-132", 10, "IPM Principles & Safety", "IPM components, pesticide safety, first aid, personal protective equipment, WTO/MRL"),
];

// ── DA-151: Farm Power, Machinery & Implements ──────────────────────────────
export const DA151_LECTURES: Lecture[] = [
  lec("da-151", 1, "Farm Power Sources", "Human, animal, mechanical, solar, wind power; power tillers; units of power"),
  lec("da-151", 2, "Tractors – Types & Selection", "2-wheel vs 4-wheel drive, drawbar HP, PTO HP, belt HP; tractor selection criteria"),
  lec("da-151", 3, "Tractor Engine & Systems", "IC engine parts, 4-stroke diesel engine, cooling, lubrication, fuel systems, transmission"),
  lec("da-151", 4, "Primary Tillage Implements", "Mould board plough, disc plough, subsoiler, chisel plough – parts and functions"),
  lec("da-151", 5, "Secondary Tillage & Intercultivation", "Disc harrow, cultivator, rotavator, leveller, ridger – types and uses"),
  lec("da-151", 6, "Sowing & Planting Machinery", "Seed drill, zero-till drill, rice transplanter, dibbler, planter – types and adjustment"),
  lec("da-151", 7, "Plant Protection Equipment", "Knapsack sprayer, power sprayer, mist blower, dusters – calibration, maintenance"),
  lec("da-151", 8, "Irrigation Equipment & Pumps", "Centrifugal pump, submersible pump, drip irrigation, sprinkler – components and efficiency"),
  lec("da-151", 9, "Harvesting & Threshing Machinery", "Reaper, combine harvester, thresher, paddy thresher – parts and operation"),
  lec("da-151", 10, "Farm Safety, Maintenance & Records", "Tractor safety rules, farm accidents, lubrication schedule, machinery records"),
];

// ── DA-171: Plant Pathology & Microbiology ───────────────────────────────────
export const DA171_LECTURES: Lecture[] = [
  lec("da-171", 1, "Introduction to Plant Pathology", "History, Koch's postulates, types of pathogens, disease triangle, symptoms"),
  lec("da-171", 2, "Fungi – Classification & Diseases", "Fungal classification, sporangia, spores, important fungal diseases of crops"),
  lec("da-171", 3, "Bacteria & Phytoplasma Diseases", "Bacterial symptoms, important bacterial diseases, phytoplasma diseases, vectors"),
  lec("da-171", 4, "Virus Diseases of Crops", "Virus symptoms, transmission modes, mosaic, yellowing, stunting – management"),
  lec("da-171", 5, "Rice Diseases & Management", "Blast, BLB, sheath blight, false smut, brown spot – symptoms and control"),
  lec("da-171", 6, "Wheat, Maize & Sorghum Diseases", "Rusts, smuts, downy mildew, ergot – identification and management"),
  lec("da-171", 7, "Pulse & Oilseed Diseases", "Wilt, root rot, Alternaria, Sclerotinia in pulses and oilseeds"),
  lec("da-171", 8, "Cotton & Sugarcane Diseases", "Cotton wilt, boll rot; sugarcane red rot, smut, ratoon stunting"),
  lec("da-171", 9, "Vegetable Diseases", "Early/late blight of tomato, downy mildew, powdery mildew, damping off"),
  lec("da-171", 10, "Disease Management Principles", "Cultural, biological, chemical control; fungicides, bactericides; soil sterilization"),
];

// ── DA-201: Crop Production-II (Rabi & Oilseeds) ────────────────────────────
export const DA201_LECTURES: Lecture[] = [
  lec("da-201", 1, "Wheat Cultivation", "Importance, varieties, sowing time, seed rate, nutrition, irrigation, harvest"),
  lec("da-201", 2, "Chickpea & Lentil Cultivation", "Climate, varieties, sowing, nutrition, irrigation, harvest, uses"),
  lec("da-201", 3, "Mustard & Rapeseed Cultivation", "Importance, varieties, sowing, spacing, nutrition, irrigation, harvest"),
  lec("da-201", 4, "Sunflower (Rabi) & Safflower", "Climate, varieties, sowing, spacing, nutrition, irrigation, harvest"),
  lec("da-201", 5, "Castor Cultivation", "Importance, varieties, sowing, spacing, nutrition, irrigation, harvest"),
  lec("da-201", 6, "Linseed & Minor Rabi Oilseeds", "Linseed, niger – cultivation details, importance"),
  lec("da-201", 7, "Sugarcane Cultivation", "Importance, varieties, planting methods, nutrition, irrigation, harvest, by-products"),
  lec("da-201", 8, "Fodder Crops", "Sorghum, maize, cowpea, Napier grass, berseem – cultivation for fodder"),
  lec("da-201", 9, "Spices – Chilli, Coriander, Fenugreek", "Cultivation details, varieties, nutrition, harvest, post-harvest"),
  lec("da-201", 10, "Plantation & Commercial Crops", "Tobacco cultivation details; minor plantation crops in Telangana"),
];

// ── DA-241: Agricultural Economics ──────────────────────────────────────────
export const DA241_LECTURES: Lecture[] = [
  lec("da-241", 1, "Introduction to Agricultural Economics", "Meaning, scope, basic concepts – demand, supply, elasticity, utility"),
  lec("da-241", 2, "Farm Management & Records", "Farm planning, farm records, farm budgeting, cost concepts, break-even analysis"),
  lec("da-241", 3, "Types of Farming & Land Tenure", "Subsistence, commercial, mixed farming; land tenure systems; land reforms"),
  lec("da-241", 4, "Agricultural Marketing", "Meaning, functions, marketing channels, regulated markets (APMC), grading, MSP"),
  lec("da-241", 5, "Agricultural Credit & Finance", "Short/medium/long term credit, NABARD, Kisan Credit Card, cooperative credit"),
  lec("da-241", 6, "Agricultural Cooperatives", "Types, structure, IFFCO, KRIBHCO, cooperative societies in Telangana"),
  lec("da-241", 7, "Government Schemes & Subsidies", "PM-KISAN, PMFBY, Rythu Bandhu, Rythu Bima, Fasal Bima Yojana"),
  lec("da-241", 8, "MSP & Procurement Policies", "MSP determination, CACP, PDS, food security, procurement agencies"),
  lec("da-241", 9, "International Trade & WTO", "Export-import of agricultural commodities, WTO agreements, trade policy"),
  lec("da-241", 10, "Rural Development & Poverty", "Rural poverty, MGNREGS, rural development programmes, SHGs"),
];

// ── DA-252: Survey, Levelling & Field Measurements ──────────────────────────
export const DA252_LECTURES: Lecture[] = [
  lec("da-252", 1, "Introduction to Surveying", "Principles, types, instruments, units, errors, map scales"),
  lec("da-252", 2, "Chain Surveying", "Instruments, baseline, offsets, check lines, field book, plotting"),
  lec("da-252", 3, "Compass Surveying", "Prismatic compass, bearings, declination, local attraction, traversing"),
  lec("da-252", 4, "Plane Table Surveying", "Equipment, methods – radiation, intersection, traversing, resection"),
  lec("da-252", 5, "Levelling Instruments & Methods", "Dumpy level, auto level, staff, types of levelling, RL calculation"),
  lec("da-252", 6, "Contouring & Topographic Maps", "Contour interval, characteristics of contours, methods of contouring"),
  lec("da-252", 7, "Area & Volume Calculation", "Mid-ordinate, average ordinate, Simpson's rule, trapezoidal rule, Prismoidal formula"),
  lec("da-252", 8, "Land Records & Cadastral Survey", "Adangal, pattadar passbook, survey numbers, village map, Revenue records"),
  lec("da-252", 9, "Irrigation Survey & Canal Alignment", "Cross sections, longitudinal sections, FSL, TBL, embankments"),
  lec("da-252", 10, "Modern Survey – GPS & GIS", "GPS working, GIS components, remote sensing, applications in agriculture"),
  lec("da-252", 11, "Theodolite Surveying", "Parts of theodolite, temporary adjustments, measurement of horizontal and vertical angles"),
  lec("da-252", 12, "Tacheometric Surveying", "Stadia method, tangential method, distance and elevation formulas, field applications"),
  lec("da-252", 13, "Traverse Surveying & Adjustments", "Open and closed traverses, Bowditch rule, transit rule, closing error, Gale's traverse table"),
  lec("da-252", 14, "Setting Out & Construction Surveys", "Setting out buildings, roads, curves; horizontal and vertical curves, sight rails"),
  lec("da-252", 15, "Soil & Water Conservation – Erosion", "Types of water erosion, wind erosion, saltation, creep, suspension, conservation measures"),
  lec("da-252", 16, "Irrigation Water Management", "Duty, delta, base period, their relationships, command area, culturable command area"),
  lec("da-252", 17, "Soil Moisture & Irrigation Scheduling", "Field capacity, wilting point, available water, irrigation interval, critical growth stages"),
  lec("da-252", 18, "Surface Irrigation Methods", "Check basin, border strip, furrow, ring basin, wild flooding – suitability and design"),
  lec("da-252", 19, "Sprinkler Irrigation Systems", "Components, design, pressure requirements, precipitation rate, uniformity, limitations"),
  lec("da-252", 20, "Drip Irrigation Systems", "Components, emitters, laterals, sub-mains, filters, fertigation, design and management"),
  lec("da-252", 21, "Centrifugal Pumps & Pump Selection", "Working principle, types, priming, impeller types, efficiency, pump selection criteria"),
  lec("da-252", 22, "Submersible & Other Pumps", "Submersible pump components, deep well turbine pump, jet pump, comparison with centrifugal"),
  lec("da-252", 23, "Canal Design & Lined Canals", "Kennedy's theory, Lacey's regime theory, canal lining materials, design of lined canals"),
  lec("da-252", 24, "Canal Structures & Headworks", "Head regulators, cross regulators, escapes, falls, aqueducts, syphons, outlets"),
  lec("da-252", 25, "Flow Measurement – Weirs & Flumes", "Rectangular weir, V-notch weir, broad-crested weir, Parshall flume, current meter"),
  lec("da-252", 26, "Groundwater & Tube Wells", "Aquifer types, Darcy's law, specific yield, tube well design, yield testing"),
  lec("da-252", 27, "Drainage Engineering", "Surface drainage, sub-surface drainage, mole drains, tile drains, drainage coefficient, Hooghoudt equation"),
  lec("da-252", 28, "Greenhouse Technology – Structures", "Types of greenhouses, covering materials, orientation, structural design, site selection"),
  lec("da-252", 29, "Greenhouse Climate Control", "Heating, cooling, ventilation, humidity control, CO₂ enrichment, pad-and-fan systems"),
  lec("da-252", 30, "Protected Cultivation – Shade Nets & Mulching", "Shade net types, anti-insect nets, mulch materials, benefits in protected horticulture"),
  lec("da-252", 31, "Hydroponics & Soilless Culture", "NFT, DWC, aeroponics, growing media, nutrient solutions, EC and pH management"),
  lec("da-252", 32, "Water Engineering – Consumptive Use & Duty", "Evapotranspiration, consumptive use, delta, duty, base period, crop water requirements"),
  lec("da-252", 33, "Hydraulic Structures – Weirs & Flumes", "Weir types, V-notch, rectangular, Parshall flume, head–discharge relationships"),
  lec("da-252", 34, "Drip Irrigation – Advanced Design", "Emitter selection, system layout, fertigation, water use efficiency, maintenance"),
  lec("da-252", 35, "Sprinkler Irrigation – Design & Uniformity", "Distribution uniformity, application rate, spacing, system design, limitations"),
  lec("da-252", 36, "Sub-surface Drainage Design", "Drain spacing, Hooghoudt equation, drainage coefficient, pipe selection, installation"),
  lec("da-252", 37, "Watershed Management", "Check dams, contour bunds, vegetative barriers, runoff reduction, groundwater recharge"),
  lec("da-252", 38, "Rainwater Harvesting & Farm Ponds", "Runoff coefficient, pond capacity design, catchment efficiency, supplemental irrigation"),
  lec("da-252", 39, "Open Channel Hydraulics", "Manning's equation, hydraulic radius, roughness coefficient, canal cross-sections"),
  lec("da-252", 40, "Greenhouse Technology – Basics", "Greenhouse effect, covering materials, polyethylene film, orientation, site selection"),
  lec("da-252", 41, "Greenhouse Environment Management", "Temperature, humidity, photoperiod, ventilation, pad-and-fan cooling, optimal ranges"),
  lec("da-252", 42, "Hydroponics – Systems & Media", "NFT, aeroponics, DWC, rockwool, coco peat, perlite, nutrient solution management"),
  lec("da-252", 43, "Protected Cultivation – Shade & Nets", "Shade nets, anti-insect nets, mulching, benefits in vegetable and flower production"),
  lec("da-252", 44, "Hydroponic Growing Media & Monitoring", "Rockwool, coco peat, perlite, EC monitoring, pH management, nutrient formulation"),
  lec("da-252", 45, "IPM in Greenhouses", "Biological control, Encarsia formosa, sticky traps, scouting, threshold-based management"),
  lec("da-252", 46, "Greenhouse Crop Production", "Tomato, cucumber, capsicum production in greenhouses; CO₂ enrichment, yield optimization"),
];

// ── DA-281: Forestry, Medicinal & Aromatic Plants ───────────────────────────
export const DA281_LECTURES: Lecture[] = [
  lec("da-281", 1, "Forest Types & Classification in India", "Champion & Seth classification, tropical, temperate, mangrove forests"),
  lec("da-281", 2, "Silvicultural Systems & Practices", "Clear felling, selection system, coppice, shelterwood; afforestation"),
  lec("da-281", 3, "Agroforestry Systems", "Agrisilviculture, silvopastoral, agrisilvipastoral, home garden, boundary planting"),
  lec("da-281", 4, "Important Timber & Multipurpose Trees", "Teak, Eucalyptus, Casuarina, Bamboo, Subabul – cultivation and uses"),
  lec("da-281", 5, "Social Forestry & JFM", "Van Panchayat, joint forest management, farm forestry, participatory forestry"),
  lec("da-281", 6, "Medicinal Plants – I", "Ashwagandha, Brahmi, Aloe vera, Senna – cultivation, active principles, uses"),
  lec("da-281", 7, "Medicinal Plants – II", "Neem, Tulsi, Kalmegh, Isabgol, Stevia – cultivation and medicinal uses"),
  lec("da-281", 8,  "Aromatic Plants", "Lemongrass, palmarosa, Vetiver, Rose, Geranium, Davana – oil extraction, uses"),
  lec("da-281", 9,  "Conservation & Forest Policies", "National Forest Policy 1988, Wildlife Protection Act, biodiversity conservation"),
  lec("da-281", 10, "Non-Timber Forest Products (NTFP)", "Tendu, honey, gum, resin, bamboo products, medicinal herbs – collection and trade"),
  lec("da-281", 11, "Silviculture & Tree Improvement", "Seed orchards, clonal propagation, vegetative propagation, progeny trials"),
  lec("da-281", 12, "Timber Trees – Advanced Topics", "Teak, Rosewood, Sandalwood, Bamboo – wood properties, harvesting, uses, markets"),
  lec("da-281", 13, "Ecology & Environmental Services", "Carbon sequestration, watershed functions, biodiversity, JFM, Chipko movement"),
  lec("da-281", 14, "Minor Forest Produce & Trade", "NTFP collection, processing, value addition, tribal livelihoods, international trade"),
  lec("da-281", 15, "Revision & Mixed Topics", "Mixed questions covering all DA-281 topics – forest types, trees, medicinal, aromatic"),
];

// ── DA-282: Horticultural Crops & Their Management ──────────────────────────
export const DA282_LECTURES: Lecture[] = [
  lec("da-282", 1, "Mango Cultivation", "Climate, varieties, propagation, planting, nutrition, irrigation, harvest, storage"),
  lec("da-282", 2, "Banana & Papaya Cultivation", "Climate, varieties, sucker selection, nutrition, irrigation, harvest, uses"),
  lec("da-282", 3, "Citrus Cultivation", "Varieties (Mandarin, Sweet orange, Lime), budding, nutrition, irrigation, harvest"),
  lec("da-282", 4, "Guava, Sapota & Pomegranate", "Cultivation details, varieties, propagation, harvest, post-harvest"),
  lec("da-282", 5, "Tomato Cultivation", "Varieties, nursery, transplanting, spacing, nutrition, staking, harvest, storage"),
  lec("da-282", 6, "Chilli & Capsicum Cultivation", "Varieties, nursery, transplanting, nutrition, irrigation, harvest, drying"),
  lec("da-282", 7, "Onion & Garlic Cultivation", "Varieties, nursery, transplanting, nutrition, irrigation, storage, export"),
  lec("da-282", 8, "Leafy & Root Vegetables", "Spinach, amaranthus, radish, carrot, beetroot – cultivation details"),
  lec("da-282", 9, "Flower Crops", "Marigold, rose, jasmine, crossandra, tuberose – cultivation, harvesting, marketing"),
  lec("da-282", 10, "Post-Harvest Management of Horticulture", "Maturity indices, pre-cooling, grading, packaging, cold storage, ripening"),
];

// ── DA-291: Agricultural Extension & Rural Development ──────────────────────
export const DA291_LECTURES: Lecture[] = [
  lec("da-291", 1, "Introduction to Extension Education", "Meaning, definition, philosophy, principles, objectives of extension education"),
  lec("da-291", 2, "Extension Methods – Individual", "Farm visit, office call, result demonstration, method demonstration, telephone"),
  lec("da-291", 3, "Extension Methods – Group & Mass", "Group meetings, field days, kisan mela, radio, TV, newspaper, social media"),
  lec("da-291", 4, "Agricultural Technology Transfer", "KVK, ATMA, FLD, IVLP, technology gap, adoption-diffusion process"),
  lec("da-291", 5, "Rural Sociology", "Rural community characteristics, social groups, village leadership, social change"),
  lec("da-291", 6, "Panchayati Raj & Local Governance", "73rd Amendment, Gram Sabha, Mandal Parishad, Zilla Parishad, Ward Sabha"),
  lec("da-291", 7, "Farmer Training & FPOs", "Farmer training camps, exposure visits, FPOs, farmer clubs, ATMA, KVK"),
  lec("da-291", 8, "Government Schemes for Farmers", "PM-KISAN, PMFBY, Rythu Bandhu, Rythu Bima, e-NAM, soil health card"),
  lec("da-291", 9, "Rural Credit & Cooperative Movement", "PACS, cooperative banks, NABARD, RRB, self-help groups, microfinance"),
  lec("da-291", 10, "National Development Programmes", "MGNREGS, PMGSY, NHM, RKVY, ATMA, Green Revolution to Evergreen Revolution"),
];

// ── DA-262: Computer Applications ───────────────────────────────────────────
export const DA262_LECTURES: Lecture[] = [
  lec("computer-applications", 1, "Introduction to Computers", "Definition, characteristics, generations, types (analog, digital, hybrid), applications"),
  lec("computer-applications", 2, "Computer Hardware", "CPU components, input devices, output devices, storage devices, memory types"),
  lec("computer-applications", 3, "Operating Systems", "DOS commands, Windows features, file management, booting, GUI vs CLI"),
  lec("computer-applications", 4, "MS Word – Word Processing", "Creating, editing, formatting, tables, mail merge, printing, templates"),
  lec("computer-applications", 5, "MS Excel – Spreadsheets", "Workbook, worksheet, formulas, functions, charts, sorting, filtering"),
  lec("computer-applications", 6, "MS PowerPoint – Presentations", "Slides, layouts, transitions, animations, slide show, handouts"),
  lec("computer-applications", 7, "Internet & Email", "WWW, browser, search engines, email protocol, attachments, cyber safety"),
  lec("computer-applications", 8, "Computer Networking Basics", "LAN, WAN, MAN, TCP/IP, IP address, router, modem, types of networks"),
  lec("computer-applications", 9, "Computer Applications in Agriculture", "e-Krishi, Kisan Suvidha, soil health portal, market price apps, GIS in agri"),
  lec("computer-applications", 10, "Emerging Technologies", "Artificial intelligence, machine learning, IoT in agriculture, drones, remote sensing"),
];

// ── DA-263: English Communication ───────────────────────────────────────────
export const DA263_LECTURES: Lecture[] = [
  lec("english-communication", 1, "Parts of Speech", "Noun, pronoun, verb, adjective, adverb, preposition, conjunction, interjection"),
  lec("english-communication", 2, "Tenses – Present & Past", "Simple, continuous, perfect, perfect continuous – present and past forms"),
  lec("english-communication", 3, "Tenses – Future & Mixed", "Simple future, future continuous, future perfect; tense conversion"),
  lec("english-communication", 4, "Active & Passive Voice", "Rules of transformation, modal passives, passive of different tenses"),
  lec("english-communication", 5, "Direct & Indirect Speech", "Reporting verbs, tense backshift, pronoun changes, time/place expressions"),
  lec("english-communication", 6, "Reading Comprehension", "Skimming, scanning, inference, vocabulary in context, comprehension strategies"),
  lec("english-communication", 7, "Formal Letter Writing", "Business letter format, official letters, complaint letters, job application"),
  lec("english-communication", 8, "Technical Writing & Reports", "Report format, minutes of meeting, notice, circular, technical description"),
  lec("english-communication", 9, "Vocabulary & Word Power", "Synonyms, antonyms, one-word substitutes, idioms, phrases, word forms"),
  lec("english-communication", 10, "Communication Skills", "Listening skills, speaking, interview skills, group discussion, presentation"),
];

// ── Master map ───────────────────────────────────────────────────────────────
export const ALL_LECTURES: Record<string, Lecture[]> = {
  "da-101": DA101_LECTURES,
  "da-102": DA102_LECTURES,
  "da-111": DA111_LECTURES,
  "da-121": DA121_LECTURES,
  "da-122": DA122_LECTURES,
  "da-131": DA131_LECTURES,
  "da-132": DA132_LECTURES,
  "da-151": DA151_LECTURES,
  "da-171": DA171_LECTURES,
  "da-201": DA201_LECTURES,
  "da-241": DA241_LECTURES,
  "da-252": DA252_LECTURES,
  "da-281": DA281_LECTURES,
  "da-282": DA282_LECTURES,
  "da-291": DA291_LECTURES,
  "computer-applications": DA262_LECTURES,
  "english-communication": DA263_LECTURES,
};

export function getLecturesForSubject(subjectId: string): Lecture[] {
  return ALL_LECTURES[subjectId] ?? [];
}

export function getLecture(subjectId: string, lectureId: string): Lecture | undefined {
  return ALL_LECTURES[subjectId]?.find(l => l.id === lectureId);
}
