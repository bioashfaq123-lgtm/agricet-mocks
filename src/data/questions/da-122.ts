import { Question } from "@/types";

// DA-122: Manures and Fertilizers — 100 questions (PJTSAU Diploma syllabus)
// Source: DA-122 course material by Dr. S. Sridevi & Dr. G. Venugopal, PJTSAU
export const da122Questions: Question[] = [
  {
    id: "d122_001",
    subject: "da-122",
    question: "Soil fertility is defined as the ability of soil to:",
    options: ["Resist erosion from rainfall and wind", "Retain moisture for extended drought periods", "Produce maximum crop yield under all conditions", "Supply adequate nutrients for normal plant growth"],
    correct: 3,
    explanation:
      "Soil fertility is defined as the ability of soil to supply adequately the nutrients normally taken from the soil by plants.",
  },
  {
    id: "d122_002",
    subject: "da-122",
    question: "Which crop removes the highest quantities of NPK to produce 5 tonnes of yield?",
    options: ["Maize removing 175-35-175 kg of NPK", "Sorghum removing 90-30-90 kg of NPK", "Rice removing 85-15-90 kg of NPK", "Wheat removing 120-50-120 kg of NPK"],
    correct: 0,
    explanation:
      "Maize requires 175-35-175 kg nitrogen, phosphorus and potassium to give 5 tonnes of yield, while rice removes 85-15-90 kg NPK to produce 3 tonnes.",
  },
  {
    id: "d122_003",
    subject: "da-122",
    question: "The word 'Manure' is originally derived from which French word?",
    options: ["Hauno meaning excrement manure", "Fertil meaning fertile soil", "Manoeuvrer meaning work with soil", "Componere meaning put together"],
    correct: 2,
    explanation:
      "The word 'Manure' originated from the French word 'MANOEUVRER' which refers to 'work with soil'.",
  },
  {
    id: "d122_004",
    subject: "da-122",
    question: "Guano is a product of excrement from which type of birds?",
    options: ["Sea birds like Pelicans, Gannets and Albatrosses", "Forest birds from tropical rainforests", "Fresh water ducks found in river deltas", "Migratory birds from African grasslands"],
    correct: 0,
    explanation:
      "Guano is a product of sea birds (Pelican, Gannets and Albatrosses) excrement covered over long periods and occurring in natural deposits along Pacific coast of Peru and Chile.",
  },
  {
    id: "d122_005",
    subject: "da-122",
    question: "Which method of FYM preparation is considered the best quality method?",
    options: ["Field windrow method with turnings", "Covered pit method with roofing protection", "Open heap method under tree shade", "Pit method with soil layer additions"],
    correct: 1,
    explanation:
      "The covered pit method is the best method of all described. The pit has non-absorbent granite stone lining, a 1.5 feet bund, and roofing with Palmyra or phoenix leaves to control organic matter and nutrient losses.",
  },
  {
    id: "d122_006",
    subject: "da-122",
    question: "What is the nutrient composition (N-P-K) of good quality FYM stored in covered pit?",
    options: ["0.68% N, 0.5% P and 1.0% K content", "0.5% N, 0.3% P and 0.8% K content", "0.3% N, 0.2% P and 0.5% K content", "1.5% N, 1.0% P and 2.0% K content"],
    correct: 0,
    explanation:
      "Good quality FYM stored in covered pit contains 0.68% N, 0.5% P and 1% K as stated in the course material.",
  },
  {
    id: "d122_007",
    subject: "da-122",
    question: "The word 'Compost' is derived from Latin word 'COMPONERE' meaning:",
    options: ["Decompose under controlled temperature", "Put together different materials", "Work done with organic substances", "Convert waste into fertile matter"],
    correct: 1,
    explanation:
      "The word compost is derived from the Latin word 'COMPONERE' meaning to put together.",
  },
  {
    id: "d122_008",
    subject: "da-122",
    question: "In urban composting, which material is used as a starter?",
    options: ["Sugarcane trash soaked in urine water", "Night soil from nearby human habitations", "Bone meal dissolved in acidic solution", "Dung mixed with biogas slurry water"],
    correct: 1,
    explanation:
      "In urban composting, night soil is used as the starter material, while rural compost uses cattle dung as the starter.",
  },
  {
    id: "d122_009",
    subject: "da-122",
    question: "What is the nitrogen content of biogas slurry compared to FYM?",
    options: ["Both have equal nitrogen content of 1.2%", "Biogas slurry has 0.5% N vs 1.5% in FYM", "FYM has 2.0% N while biogas slurry has 1.0%", "Biogas slurry has 1.5% N vs 0.7% in FYM"],
    correct: 3,
    explanation:
      "Biogas slurry has higher nitrogen content (1.5%) as against 0.7% found in FYM, making it a better quality manure.",
  },
  {
    id: "d122_010",
    subject: "da-122",
    question: "Thermal efficiency of cow dung burnt in properly designed burners is:",
    options: ["Equal to burning dry wood directly", "Around 11 per cent thermal efficiency", "Around 30 per cent thermal efficiency", "Around 60 per cent thermal efficiency"],
    correct: 3,
    explanation:
      "Thermal efficiency of cow dung burnt in properly designed burners is 60%, compared to 11% when burnt in the usual manner as fuel.",
  },
  {
    id: "d122_011",
    subject: "da-122",
    question: "Which earthworm species is commonly used for vermicomposting?",
    options: ["Pheretima posthuma from Indian paddy fields", "Eisenia foetida used in vermicomposting beds", "Lumbricus terrestris found in temperate soil", "Megascolex coeruleus found in tropical clay"],
    correct: 1,
    explanation:
      "Eisenia foetida is one of the effective earthworm species used in vermicomposting along with Perionyx excavatus, Eudrilus eugeniae and Lampito marutii.",
  },
  {
    id: "d122_012",
    subject: "da-122",
    question: "How many worms per square meter are introduced in vermicompost pits?",
    options: ["1000 worms or 1 kg per square meter", "500 worms or 0.5 kg per square meter", "250 worms or 0.25 kg per square meter", "2000 worms or 2.0 kg per square meter"],
    correct: 0,
    explanation:
      "Worms are introduced at 1m² = 1000 worms or 1 kg per tonne of residue in vermicompost pits.",
  },
  {
    id: "d122_013",
    subject: "da-122",
    question: "Green manuring in situ can be safely adopted for which conditions?",
    options: ["Hill crops grown under full shade cover", "Dryland crops in high rainfall above 900 mm", "Summer crops under no irrigation availability", "Sandy soils with very low moisture retention"],
    correct: 1,
    explanation:
      "Green manuring can be safely adopted for irrigated crops and also under rainfed conditions when rainfall is above 900 mm.",
  },
  {
    id: "d122_014",
    subject: "da-122",
    question: "Sunnhemp (Crotalaria juncea) has which nutrient composition?",
    options: ["1.8% N, 0.1% P and 0.3% K content", "2.3% N, 0.2% P and 1.4% K content", "3.5% N, 0.3% P and 1.0% K content", "3.0% N, 0.1% P and 0.3% K content"],
    correct: 1,
    explanation:
      "Sunnhemp (Crotalaria juncea) has nutrient composition of 2.3% N, 0.2% P and 1.4% K.",
  },
  {
    id: "d122_015",
    subject: "da-122",
    question: "Daincha (Sesbania aculeata) seeds require scarification before sowing because:",
    options: ["Seeds are hard coated and germinate slowly", "Seeds require soaking in warm water overnight", "Seeds need chemical treatment for viability", "Seeds are infected with soil-borne pathogens"],
    correct: 0,
    explanation:
      "Daincha seeds require scarification (lightly pounding with sand) for easy germination due to their hard seed coat.",
  },
  {
    id: "d122_016",
    subject: "da-122",
    question: "Green leaf manuring should be done how many days before sowing?",
    options: ["30-45 days prior to crop sowing", "5-10 days prior to crop sowing", "45-60 days prior to crop sowing", "15-20 days prior to crop sowing"],
    correct: 3,
    explanation:
      "Green leaf manuring should be done 15-20 days prior to sowing of the main crop.",
  },
  {
    id: "d122_017",
    subject: "da-122",
    question: "Which plant is used as source of green leaf manure?",
    options: ["Sunnhemp used in dryland conditions", "Pillipesara grown in black cotton soils", "Azolla pinnata water fern species", "Daincha grown in waterlogged paddy"],
    correct: 2,
    explanation:
      "Azolla pinnata is listed as one of the plants used as a source of green leaf manure, along with Gliricidia maculata, Pongamia glabra, Sesbania rostrata, etc.",
  },
  {
    id: "d122_018",
    subject: "da-122",
    question: "Which oil cake is referred to as castor pomace and is poisonous to animals?",
    options: ["Castor cake used only as crop fertilizer", "Cotton seed cake toxic to grazing animals", "Mahua cake unsuitable for cattle feeding", "Neem cake with insecticidal bitter properties"],
    correct: 0,
    explanation:
      "Castor cake (castor pomace) is a by-product of oil extraction from castor beans. It is poisonous to animals and used only as fertilizer. It contains 4.4% N, 1.9% P2O5 and 1.4% K2O.",
  },
  {
    id: "d122_019",
    subject: "da-122",
    question: "Blood meal is described as how efficient compared to inorganic N fertilizer?",
    options: ["60 per cent efficient as inorganic nitrogen", "80 per cent efficient as inorganic nitrogen", "100 per cent efficient as inorganic nitrogen", "40 per cent efficient as inorganic nitrogen"],
    correct: 1,
    explanation:
      "Dried blood is 80% as efficient as the inorganic N fertilizer in providing nitrogen to the crop, making it the highest among protein organic manures.",
  },
  {
    id: "d122_020",
    subject: "da-122",
    question: "Horn meal is described as a slow acting fertilizer containing which nutrient?",
    options: ["10 per cent phosphorus in hoof meal", "20 per cent calcium in ground horn", "14 per cent nitrogen in horn material", "8 per cent potassium in horn chips"],
    correct: 2,
    explanation:
      "Horn meal is a slow acting fertilizer of Nitrogen containing 14% N. About 3-4 kg horn and hoof material can be obtained from each animal.",
  },
  {
    id: "d122_021",
    subject: "da-122",
    question: "Rhizobium can fix how much nitrogen per hectare in legume root nodules?",
    options: ["Rhizobium fixes 5-10 kg N per hectare", "Rhizobium fixes 200-300 kg N per hectare", "Rhizobium fixes 50-100 kg N per hectare", "Rhizobium fixes 10-25 kg N per hectare"],
    correct: 2,
    explanation:
      "Rhizobium establishes symbiotic relations with legumes and can fix 50-100 kg N ha⁻¹, meeting nearly 80-90% of nitrogen requirement of the crop.",
  },
  {
    id: "d122_022",
    subject: "da-122",
    question: "Azolla is associated with rice fields due to its symbiosis with which organism?",
    options: ["Azotobacter living freely on Azolla leaves", "Anabaena azollae blue green algae species", "Rhizobium bacteria in leaf tissue cavities", "Pseudomonas present in root epidermal cells"],
    correct: 1,
    explanation:
      "Azolla pinnata has symbiotic association with Anabaena azollae (BGA) in the epidermal cavity of the lower side of the leaf. This Azolla-Anabaena complex fixes atmospheric nitrogen.",
  },
  {
    id: "d122_023",
    subject: "da-122",
    question: "Azospirillum is classified as which type of nitrogen-fixing biofertilizer?",
    options: ["Symbiotic nitrogen fixer in root nodules", "Free-living nitrogen fixer without plants", "Associative nitrogen fixer with plants", "Phosphate-solubilizing bacteria in soil"],
    correct: 2,
    explanation:
      "Azospirillum is an associative nitrogen-fixing organism — it lives in association with plants but without mutual benefit or interdependency.",
  },
  {
    id: "d122_024",
    subject: "da-122",
    question: "Azotobacter can reduce recommended nitrogen fertilizer doses by what percentage?",
    options: ["By 5-8 per cent of recommended dose", "By 30-40 per cent of recommended dose", "By 50-60 per cent of recommended dose", "By 10-20 per cent of recommended dose"],
    correct: 3,
    explanation:
      "By application of Azotobacter to various crops, the amount of recommended doses of nitrogenous fertilizers can be reduced by 10-20%.",
  },
  {
    id: "d122_025",
    subject: "da-122",
    question: "BGA fixes how much nitrogen per hectare in paddy rice ecosystems?",
    options: ["BGA fixes 100-150 kg N per hectare", "BGA fixes 5-10 kg N per hectare", "BGA fixes 50-75 kg N per hectare", "BGA fixes 25-30 kg N per hectare"],
    correct: 3,
    explanation:
      "Nitrogen fixation by BGA has been estimated to be 25-30 kg N/ha in paddy rice ecosystems.",
  },
  {
    id: "d122_026",
    subject: "da-122",
    question: "VAM fungi help plants primarily by enhancing the uptake of which nutrients?",
    options: ["Iron, manganese and boron micronutrients", "Phosphorus, zinc and sulphur in soils", "Magnesium, sodium and copper elements", "Nitrogen, potassium and calcium in soils"],
    correct: 1,
    explanation:
      "VAM fungi enhance the nutrient uptake of P, Zn and S and also enhance water uptake under drought conditions.",
  },
  {
    id: "d122_027",
    subject: "da-122",
    question: "Nitrate fertilizers are NOT recommended for irrigated paddy because:",
    options: ["Nitrate nitrogen is leached and volatilized easily", "They are too costly for paddy cultivation", "Nitrate form damages tender paddy root hairs", "They cause soil acidification in wetland paddy"],
    correct: 0,
    explanation:
      "Nitrate nitrogen carries a negative charge, is not adsorbed onto soil particles and is subject to leaching and volatilization losses. Hence nitrate fertilizers are not recommended for irrigated paddy.",
  },
  {
    id: "d122_028",
    subject: "da-122",
    question: "Ammonium sulphate contains which percentage of nitrogen and sulphur?",
    options: ["21% nitrogen and 24% sulphur content", "26% nitrogen and 15% sulphur content", "18% nitrogen and 30% sulphur content", "25% nitrogen and 20% sulphur content"],
    correct: 0,
    explanation:
      "Ammonium sulphate contains 21% N and 24% S. To neutralize its acidity, 110 kg of calcium carbonate is needed per 100 kg of ammonium sulphate.",
  },
  {
    id: "d122_029",
    subject: "da-122",
    question: "Urea is not recommended for application in which specific conditions?",
    options: ["Urea should not be applied in excessive water or dry soils", "Urea should not be used in alkaline calcareous soils", "Urea should not be applied on dry soils only", "Urea should not be mixed with phosphatic fertilizers"],
    correct: 0,
    explanation:
      "Urea should be applied under optimum soil moisture (field capacity) conditions only. On application in wetlands, N is lost through leaching; in dry soils it is lost through volatilization.",
  },
  {
    id: "d122_030",
    subject: "da-122",
    question: "Which potassic fertilizer is NOT suitable for potato, tobacco and grapes?",
    options: ["Sulphate of potash having 50% potassium", "Muriate of potash containing 60% potassium", "Potassium nitrate having 39% potassium", "Potassium phosphate used for foliar spray"],
    correct: 1,
    explanation:
      "Muriate of potash (KCl) is useful for all crops except potato, tobacco and grapes. Sulphate of potash is applied to these crops.",
  },
  {
    id: "d122_031",
    subject: "da-122",
    question: "Single super phosphate is preferred for oilseed crops because it also contains:",
    options: ["16% P plus 10% magnesium and 6% sulphur", "16% P plus 21% calcium and 12% sulphur", "20% P plus 15% nitrogen and 8% calcium", "18% P plus 25% calcium and 15% chloride"],
    correct: 1,
    explanation:
      "SSP contains 16% P2O5, 21% calcium and 12% sulphur, making it a preferred source for oilseed crops like groundnut that require sulphur.",
  },
  {
    id: "d122_032",
    subject: "da-122",
    question: "Rock phosphate is suitable as fertilizer mainly in which soil conditions?",
    options: ["Neutral pH soils with good drainage facilities", "Waterlogged alkaline soils with high calcium", "Strongly acidic soils or high rainfall areas", "Sandy loam soils with low organic matter"],
    correct: 2,
    explanation:
      "Rock phosphate is water and citrate insoluble. It is soluble in strongly acidic soils or organic soils, and is used in tea and coffee gardens and high rainfall mountain areas.",
  },
  {
    id: "d122_033",
    subject: "da-122",
    question: "The Fertilizer Control Order (FCO) was originally passed on which date?",
    options: ["26th January 1960 under Fertilizer Movement Act", "1st January 1961 under Interstate Trade Act", "28th April 1957 under Essential Commodities Act", "15th August 1950 under Indian Agriculture Act"],
    correct: 2,
    explanation:
      "The Fertilizer Control Order (FCO) was passed on 28th April 1957 in exercise of the power conferred by Section III of the Essential Commodities Act of 1955, effective from May 18th 1957.",
  },
  {
    id: "d122_034",
    subject: "da-122",
    question: "What is the nitrogen content of urea as per FCO 1957 specifications?",
    options: ["Minimum 46% nitrogen by weight content", "Minimum 44% nitrogen by weight content", "Minimum 48% nitrogen by weight content", "Minimum 40% nitrogen by weight content"],
    correct: 1,
    explanation:
      "As per FCO 1957, urea must have total nitrogen minimum 44% per cent by weight. The biuret content must be maximum 1.50%.",
  },
  {
    id: "d122_035",
    subject: "da-122",
    question: "INM is defined as maintenance of soil fertility through optimization of benefits from:",
    options: ["Organic, inorganic and biological components together", "Soil testing and site-specific nutrient management only", "All possible chemical fertilizer combinations only", "Organic manures and biofertilizers excluding chemicals"],
    correct: 0,
    explanation:
      "INM refers to maintenance of soil fertility and plant nutrient supply through optimization of benefits from all possible sources of organic, inorganic and biological components in an integrated manner.",
  },
  {
    id: "d122_036",
    subject: "da-122",
    question: "Rhizobium meliloti is specifically associated with which crop?",
    options: ["Berseem as the specific host legume", "Cowpea as the preferred legume host", "Soybean as host legume species", "Black gram as symbiotic host crop"],
    correct: 0,
    explanation:
      "Rhizobium meliloti is specifically associated with Berseem. Each Rhizobium species shows host specificity to its particular legume crop.",
  },
  {
    id: "d122_037",
    subject: "da-122",
    question: "What is the vermicompost application rate recommended for fruit crops?",
    options: ["5-10 kg per tree for fruit crops", "50 kg per plant for large orchards", "1 tonne per hectare for all fruit crops", "200 grams per pot for fruit trees"],
    correct: 0,
    explanation:
      "For fruit crops, 5-10 kg/tree of vermicompost is recommended. For field crops the rate is 1 t/ha and for flowering plants in pots, 200g/pot.",
  },
  {
    id: "d122_038",
    subject: "da-122",
    question: "Compost with commercially accepted standards must have C:N ratio of:",
    options: ["Between 30-50 moderate C:N ratio", "More than 50 wide C:N ratio", "Exactly 25 fixed C:N ratio", "Less than 20 narrow C:N ratio"],
    correct: 3,
    explanation:
      "Commercially accepted compost must have C:N ratio less than 20. Other properties include nitrogen >2%, color brown-black, moisture 10-20% and CEC 75-100 meq/100g.",
  },
  {
    id: "d122_039",
    subject: "da-122",
    question: "Pillipesara (Phaseolus trilobus) is described as a triple purpose crop because:",
    options: ["It produces fiber, fodder and green manure", "It supplies wood, leaf and root products", "It gives vegetables, seeds and oil cakes", "It provides grain, fodder and green manure"],
    correct: 3,
    explanation:
      "Pillipesara is a regular green manure, minor pulse crop and fodder crop — hence it is a triple purpose crop. It has good ratooning capacity.",
  },
  {
    id: "d122_040",
    subject: "da-122",
    question: "Deep placement of nitrogenous fertilizers in paddy fields is done to:",
    options: ["Improve surface drainage of paddy fields", "Reduce the cost of fertilizer application", "Place ammoniacal N in soil reduction zone", "Speed up nitrogen release to soil surface"],
    correct: 2,
    explanation:
      "Deep placement places ammoniacal nitrogenous fertilizers in the reduction zone of soil in paddy fields, where ammoniacal nitrogen remains available to the crop and prevents nutrient loss by run-off.",
  },
  {
    id: "d122_041",
    subject: "da-122",
    question: "Which characteristic distinguishes chemical fertilizers from organic manures?",
    options: ["Chemical fertilizers contain wide C:N ratio matter", "Chemical fertilizers support soil microbial population", "Chemical fertilizers supply only one or few nutrients", "Chemical fertilizers improve physical soil properties"],
    correct: 2,
    explanation:
      "Chemical fertilizers are quick acting, have high analytical value, definite chemical composition and supply one or very few plant nutrients, but do NOT improve physical properties of soils.",
  },
  {
    id: "d122_042",
    subject: "da-122",
    question: "What is the minimum distance for urban composting from residential areas?",
    options: ["3 kilometers from the nearest settlement", "5 kilometers from the nearest habitation", "500 meters from the residential township", "1.5 kilometers from residential townships"],
    correct: 3,
    explanation:
      "Urban composting is taken up at least 1.5 km away from the residential areas/townships to prevent nuisance and health hazards.",
  },
  {
    id: "d122_043",
    subject: "da-122",
    question: "Ammonium chloride application results in loss of calcium from soil because:",
    options: ["Chlorine forms soluble CaCl2 which leaches out", "Ammonium acidifies soil causing calcium fixation", "Calcium is replaced by ammonium on exchange sites", "Chlorine ions directly dissolve calcium particles"],
    correct: 0,
    explanation:
      "When ammonium chloride dissociates, chlorine combines with calcium to form calcium chloride which is highly soluble and lost due to leaching, resulting in loss of calcium.",
  },
  {
    id: "d122_044",
    subject: "da-122",
    question: "Calcium ammonium nitrate must be stored in specialized polythene bags because:",
    options: ["It releases toxic ammonia gas during storage", "It reacts with carbon dioxide in open air", "It decomposes rapidly at room temperature", "It is highly hygroscopic in its dry form"],
    correct: 3,
    explanation:
      "Calcium ammonium nitrate is highly hygroscopic in nature, hence it must be stored in specialized polythene bags to prevent moisture absorption.",
  },
  {
    id: "d122_045",
    subject: "da-122",
    question: "What nitrogen percentage does Calcium Cyanamide contain?",
    options: ["Calcium cyanamide contains 46% nitrogen", "Calcium cyanamide contains 35% nitrogen", "Calcium cyanamide contains 16% nitrogen", "Calcium cyanamide contains 21% nitrogen"],
    correct: 1,
    explanation:
      "Calcium cyanamide contains 21% N (amide form). Urea contains 46% N and is the most popular amide form fertilizer.",
  },
  {
    id: "d122_046",
    subject: "da-122",
    question: "In which soil type does boron availability increase while getting fixed in finer soils?",
    options: ["Alkaline soils with high calcium carbonate content", "Waterlogged soils with low oxygen availability", "Heavy clay soils with montmorillonite minerals", "Coarse textured soils have more boron availability"],
    correct: 3,
    explanation:
      "Boron availability is more in coarse textured soils and in finer textured soils it gets fixed and becomes unavailable to plants.",
  },
  {
    id: "d122_047",
    subject: "da-122",
    question: "Organic farming as defined by FAO is a holistic system that promotes:",
    options: ["Traditional farming with only bullock-drawn implements", "Complete elimination of all synthetic compounds", "Maximum crop yield using all available inputs", "Agro-ecosystem health including biodiversity and biological cycles"],
    correct: 3,
    explanation:
      "FAO defines organic agriculture as 'a holistic production management system which promotes and enhances agro-ecosystem's health, including biodiversity, biological cycles, and soil biological activity.'",
  },
  {
    id: "d122_048",
    subject: "da-122",
    question: "Green manure crop should be incorporated into soil at which growth stage?",
    options: ["At early seedling stage within 30 days", "After natural wilting and partial drying occurs", "At harvest stage with mature seeds formed", "At 50% flowering stage when crop is tender"],
    correct: 3,
    explanation:
      "The green manure crop should be incorporated at the stage of 50% flowering when it is tender. Delay in incorporation will affect decomposition.",
  },
  {
    id: "d122_049",
    subject: "da-122",
    question: "What percentage of nitrogen in the atmosphere exists in gaseous form?",
    options: ["Nearly 21 per cent of atmospheric nitrogen", "Nearly 90 per cent of atmospheric nitrogen", "Nearly 78 per cent of atmospheric nitrogen", "Nearly 50 per cent of atmospheric nitrogen"],
    correct: 2,
    explanation:
      "Atmosphere contains nearly 78% of nitrogen in gaseous form, which is 1.5 times higher than the N content present in urea.",
  },
  {
    id: "d122_050",
    subject: "da-122",
    question: "Pellet application involves placing nitrogen fertilizer at what depth in paddy?",
    options: ["10 to 15 cm deep in paddy root zone", "0.5 to 1 cm on soil surface near plants", "2.5 to 5 cm deep between paddy rows", "15 to 20 cm deep in anaerobic zone"],
    correct: 2,
    explanation:
      "Pellet application refers to placement of nitrogenous fertilizer in the form of pellets 2.5 to 5 cm deep between the rows of the paddy crop, mixed with soil in 1:10 ratio.",
  },
  {
    id: "d122_051",
    subject: "da-122",
    question: "What is the main objective of adding conditioners to mixed fertilizers?",
    options: ["To reduce crystal knitting and prevent caking", "To increase the nutrient content per kilogram", "To improve shelf life and reduce degradation", "To balance pH for acidic or alkaline soils"],
    correct: 0,
    explanation:
      "Conditioners are added to non-granular or granular mixtures to improve physical condition and decrease caking. The actual purpose is to reduce crystal knitting. Examples include sand and silica.",
  },
  {
    id: "d122_052",
    subject: "da-122",
    question: "In INM, reduced investment in chemical fertilizers can be up to:",
    options: ["10 per cent reduction in fertilizer investment", "70 per cent reduction in fertilizer investment", "50 per cent reduction in fertilizer investment", "30 per cent reduction in fertilizer investment"],
    correct: 3,
    explanation:
      "One of the advantages of INM is reduced investment in chemical fertilizers up to 30 per cent, along with reduced soil and ground water pollution.",
  },
  {
    id: "d122_053",
    subject: "da-122",
    question: "Wild indigo (Tephrosia purpurea) is best suited for which soil conditions?",
    options: ["Waterlogged paddy soils in coastal areas", "Black cotton soils with high clay content", "Rich alluvial soils along river flood plains", "Hard coarse gravelly textured and poor soils"],
    correct: 3,
    explanation:
      "Wild indigo (Tephrosia purpurea) is suited for hard coarse gravelly textured soils and poor soils. It is also used as a green leaf manure and is a self-grown crop when sown once.",
  },
  {
    id: "d122_054",
    subject: "da-122",
    question: "DAP (Di Ammonium Phosphate) has which grade of N and P2O5?",
    options: ["20-20 grade of nitrogen and phosphate", "18-46 grade of nitrogen and phosphate", "11-46 grade of nitrogen and phosphate", "16-20 grade of nitrogen and phosphate"],
    correct: 1,
    explanation:
      "DAP (Di Ammonium Phosphate) has the grade 18:46 containing 18% N and 46% P2O5, while MAP has 11:46 grade.",
  },
  {
    id: "d122_055",
    subject: "da-122",
    question: "Sulphur coated urea (SCU) releases nitrogen slowly because:",
    options: ["Sulphur blocks water entry into urea granule", "Sulphur coating ruptures by microbial soil action", "SCU requires high temperature before dissolving", "SCU dissolves urea at a uniform controlled rate"],
    correct: 3,
    explanation:
      "In SCU, as long as urea remains coated with sulphur without rupture, it does not dissolve. When added to soil, the sulphur coating ruptures by microbial action and soil water slowly penetrates and dissolves the urea.",
  },
  {
    id: "d122_056",
    subject: "da-122",
    question: "Phosphate solubilizing bacteria solubilize insoluble phosphates by secreting:",
    options: ["Growth hormones like gibberellic acid and IAA", "Nitrogenase enzyme that reduces phosphate ions", "Organic acids like acetic and propionic acids", "Enzymes like phosphatase and phytase proteins"],
    correct: 2,
    explanation:
      "Phosphate solubilizing bacteria (Pseudomonas and Bacillus) secrete organic acids such as acetic acid, propionic acid etc. These acids lower the pH and dissolve bound phosphate forms.",
  },
  {
    id: "d122_057",
    subject: "da-122",
    question: "Horse gram (Dolichus biflorus) is suitable as green manure for which soils?",
    options: ["Rich alluvial soils with good moisture availability", "Waterlogged heavy black cotton clay soils", "Sandy loam soils with high permeability", "Poor and hard soils with drought tolerance"],
    correct: 3,
    explanation:
      "Horse gram is suitable as green manure for poor and hard soils. It can also withstand drought. Seed rate is 35 kg/ha and green matter yield is 3.5 tonnes/ha.",
  },
  {
    id: "d122_058",
    subject: "da-122",
    question: "What is the N content range of guano organic manure?",
    options: ["4-10% nitrogen and 3-9% phosphorus", "12% nitrogen and 1.5% phosphorus content", "1-4% nitrogen and 10-25% phosphorus", "8-15% nitrogen and 2.3% phosphorus"],
    correct: 3,
    explanation:
      "Guano contains 8-15% nitrogen, 2.3% phosphorus and 2.4% potassium. The name Guano originated from Peru from the word 'HAUNO' meaning manure.",
  },
  {
    id: "d122_059",
    subject: "da-122",
    question: "1000 earthworms weighing about 1 kg can convert how much waste per day?",
    options: ["1000 earthworms convert 1 kg waste daily", "1000 earthworms convert 20 kg waste daily", "1000 earthworms convert 5 kg waste daily", "1000 earthworms convert 10 kg waste daily"],
    correct: 2,
    explanation:
      "1000 earthworms may convert 5 kg waste material per day. 1000 worms weighs about one kilogram.",
  },
  {
    id: "d122_060",
    subject: "da-122",
    question: "Complete complex fertilizers contain how many primary nutrients in combination?",
    options: ["Only one primary nutrient in large quantity", "All three primary nutrients N, P and K combined", "Four nutrients including calcium along with NPK", "Two primary nutrients like N and P combined"],
    correct: 1,
    explanation:
      "Complete complex fertilizers contain all three major nutrients N, P and K in chemical combination. Examples include 14:28:14, 17:17:17 and 19:19:19.",
  },
  {
    id: "d122_061",
    subject: "da-122",
    question: "Vermicompost turnover percentage from total material accommodated in pit is:",
    options: ["The turnover rate of vermicompost is 75%", "The turnover rate of vermicompost is 90%", "The turnover rate of vermicompost is 50%", "The turnover rate of vermicompost is 60%"],
    correct: 0,
    explanation:
      "The turnover of vermicompost is 75%. If 1000 kg material is accommodated in the pit, the output will be 750 kg of vermicompost.",
  },
  {
    id: "d122_062",
    subject: "da-122",
    question: "Groundnut cake is classified as an edible oil cake with which nitrogen content?",
    options: ["Groundnut cake contains 4.4% nitrogen content", "Groundnut cake contains 5.2% nitrogen content", "Groundnut cake contains 6.5% nitrogen content", "Groundnut cake contains 3.4% nitrogen content"],
    correct: 2,
    explanation:
      "Groundnut cake is an edible oil cake containing 6.5% N, 1.3% P and 1.5% K. It is suitable for cattle and poultry feeding as well as crop fertilization.",
  },
  {
    id: "d122_063",
    subject: "da-122",
    question: "Bone meal is particularly useful for soils high in Fe and Al because:",
    options: ["Bone meal directly chelates excess iron ions", "Bone meal alkalizes acidic soil pH effectively", "Bone P dissolves better in acidic soil conditions", "Bone meal absorbs toxic aluminium from soil"],
    correct: 2,
    explanation:
      "Bone meal is a good P-fertilizer that is particularly useful for soils high in Fe and Al content (acid soils). It can be used for all crops without fear of salt damage unlike chemical fertilizers.",
  },
  {
    id: "d122_064",
    subject: "da-122",
    question: "Sodium nitrate contains which percentage of nitrogen as a nitrate fertilizer?",
    options: ["Sodium nitrate contains 21% nitrogen content", "Sodium nitrate contains 33% nitrogen content", "Sodium nitrate contains 26% nitrogen content", "Sodium nitrate contains 16% nitrogen content"],
    correct: 3,
    explanation:
      "Sodium nitrate (NaNO3) contains 16% N. Calcium nitrate also contains 16% N. Both are nitrate form fertilizers that readily dissociate in soil solution.",
  },
  {
    id: "d122_065",
    subject: "da-122",
    question: "Mixing ammonium sulphate with basic slag is prohibited because:",
    options: ["Acidic fertilizer reacts with alkaline material", "Both are hygroscopic and absorb excess moisture", "They form toxic compounds harmful to plants", "Combined nitrogen content becomes too high"],
    correct: 0,
    explanation:
      "Acidic natured fertilizers should not be mixed with alkaline natured fertilizers. Ammonium sulphate is acidic while basic slag is alkaline, and mixing causes chemical reactions.",
  },
  {
    id: "d122_066",
    subject: "da-122",
    question: "The Fertilizer Movement Order (FMO) was passed on which date to regulate interstate movement?",
    options: ["15th August 1950 effective from 1951", "31st December 1960 effective from 1-1-1961", "28th April 1957 same as FCO date", "25th September 1985 as FCO revision date"],
    correct: 1,
    explanation:
      "The Fertilizer Movement Order (FMO) was passed on 31st December 1960 to regulate interstate movement of fertilizers and came into force from 1-1-1961.",
  },
  {
    id: "d122_067",
    subject: "da-122",
    question: "BGA is applied how many days after transplanting of rice crop?",
    options: ["BGA applied 20 days after rice transplanting", "BGA applied 10 days after rice transplanting", "BGA applied 30 days after rice transplanting", "BGA applied 5 days after rice transplanting"],
    correct: 1,
    explanation:
      "BGA is applied at 10 kg/ha flakes, applied 10 days after the transplanting of rice crop.",
  },
  {
    id: "d122_068",
    subject: "da-122",
    question: "Monocropping of the same crop leads to nutrient depletion because:",
    options: ["The same depth of soil is mined repeatedly for nutrients", "The same crop produces allelopathic compounds in soil", "The same crop attracts pests reducing soil organic matter", "Monocropping prevents rainfall reaching the soil surface"],
    correct: 0,
    explanation:
      "Monocropping of the same crop without crop rotation mines nutrients from the same depth in the soil leading to nutrient depletion. Deep rooted crops should be rotated with surface-rooted crops.",
  },
  {
    id: "d122_069",
    subject: "da-122",
    question: "The favourable temperature range for earthworm activity in vermicompost pits is:",
    options: ["40°C to 55°C thermophilic temperature range", "35°C to 45°C warm temperature range", "5°C to 15°C cold temperature range", "18°C to 35°C moderate temperature range"],
    correct: 3,
    explanation:
      "Favourable temperature for earthworms in composting material is 18°C to 35°C. pH range should be 6.5-7.5 and moisture should be 60-70%.",
  },
  {
    id: "d122_070",
    subject: "da-122",
    question: "Poultry manure contains which NPK percentage composition?",
    options: ["1.4% N, 1.0% P and 1.4% K nutrients", "3.0% N, 2.0% P and 2.0% K nutrients", "0.7% N, 0.3% P and 0.7% K nutrients", "0.5% N, 0.4% P and 0.5% K nutrients"],
    correct: 1,
    explanation:
      "Poultry manure contains 3.0% N, 2.0% P and 2.0% K — making it richer in nutrients than FYM (0.5-1.5% N) and sheep manure.",
  },
  {
    id: "d122_071",
    subject: "da-122",
    question: "Vermicompost contains which range of total nitrogen percentage?",
    options: ["1.5 to 2.10 per cent total nitrogen", "3.0 to 5.0 per cent total nitrogen", "5.0 to 8.0 per cent total nitrogen", "0.5 to 1.0 per cent total nitrogen"],
    correct: 0,
    explanation:
      "Vermicompost contains 1.5 to 2.10% total nitrogen, 1.0 to 1.50% total phosphorus, and 0.60-0.80% total potassium.",
  },
  {
    id: "d122_072",
    subject: "da-122",
    question: "What is the ratio of dung and water used in mixing tank of a biogas plant?",
    options: ["Dung and water mixed in 2:3 ratio", "Dung and water mixed in 4:5 ratio", "Dung and water mixed in 1:1 ratio", "Dung and water mixed in 1:4 ratio"],
    correct: 1,
    explanation:
      "In the mixing tank adjacent to the digester, dung and water are mixed in 4:5 ratio. The mixed slurry is then passed into the digester through a cement pipe.",
  },
  {
    id: "d122_073",
    subject: "da-122",
    question: "How much nitrogen can biofertilizers add per hectare under optimum conditions?",
    options: ["Biofertilizers can add 10-15 kg N per hectare", "Biofertilizers can add 5-10 kg N per hectare", "Biofertilizers can add 300-500 kg N per hectare", "Biofertilizers can add 20-200 kg N per hectare"],
    correct: 3,
    explanation:
      "Biofertilizers can add 20-200 kg N ha⁻¹ (by fixation) under optimum conditions. They can also solubilize/mobilize 30-50 kg P2O5 ha⁻¹.",
  },
  {
    id: "d122_074",
    subject: "da-122",
    question: "For broadcasting fertilizers, which condition makes this method suitable?",
    options: ["Crops with dense stand and permeating root systems", "Widely spaced crops with sparse root systems", "Small farmers needing fertilizer cost savings", "Crops needing precise nutrient placement near roots"],
    correct: 0,
    explanation:
      "Broadcasting is suitable for crops with dense stand where plant roots permeate the whole volume of soil, when large doses of fertilizers are applied, and for insoluble phosphatic fertilizers.",
  },
  {
    id: "d122_075",
    subject: "da-122",
    question: "Urea foliar spray concentration should not exceed what percentage to prevent scorching?",
    options: ["Urea foliar spray should not exceed 0.5% concentration", "Urea foliar spray should not exceed 10% concentration", "Urea foliar spray should not exceed 5% concentration", "Urea foliar spray should not exceed 2% concentration"],
    correct: 3,
    explanation:
      "Urea can be used for foliar spray at 2% concentration (20g/l). Higher or excess concentration results in scorching and defoliation. Biuret content should be below 1.5% for foliar spray.",
  },
  {
    id: "d122_076",
    subject: "da-122",
    question: "The Indore process is one of the systems of which type of composting?",
    options: ["In situ green manure incorporation method", "Rural compost prepared by individual farmers", "Vermicomposting using earthworm technology", "Urban composting done by local bodies"],
    correct: 3,
    explanation:
      "The Indore process, along with ADCO process, Activated compost process, Bangalore process and Coimbatore process, are different systems of urban composting.",
  },
  {
    id: "d122_077",
    subject: "da-122",
    question: "What is the safe distance between a biogas plant and the kitchen using gas?",
    options: ["Distance should be within 100 meters from kitchen", "Distance should be within 50 meters from kitchen", "Distance should be within 20 meters from kitchen", "Distance should be within 5 meters from kitchen"],
    correct: 2,
    explanation:
      "Normally the distance between gas plant and place where gas is to be used should be within 20 meters (Kitchen to gas plant).",
  },
  {
    id: "d122_078",
    subject: "da-122",
    question: "Non-edible oil cakes are suitable only for crop fertilization because:",
    options: ["They are non-palatable or poisonous to animals", "They contain excess calcium harmful to livestock", "They decompose too slowly for animal digestion", "They have too high nitrogen for animal safety"],
    correct: 0,
    explanation:
      "Non-edible oil cakes (Castor, Neem, Mahua, Cotton seed, Mustard, Safflower) are suitable only for crop fertilization as they are non-palatable, poisonous or bitter for animals.",
  },
  {
    id: "d122_079",
    subject: "da-122",
    question: "Fertile soil in arid regions may not be productive because productivity depends on:",
    options: ["Organic matter content of topsoil layer", "Multiple factors including water and climate", "Root depth of crops grown in that region", "Soil nutrient supply capacity alone matters"],
    correct: 1,
    explanation:
      "Soils in arid regions may be fertile but not productive because productivity depends on multiple factors including air, heat, light, mechanical support, soil fertility and especially water — not just nutrient supply.",
  },
  {
    id: "d122_080",
    subject: "da-122",
    question: "Safflower cake has the highest nitrogen content among oil cakes at:",
    options: ["4.8 per cent nitrogen in safflower cake", "7.9 per cent nitrogen in safflower cake", "5.2 per cent nitrogen in safflower cake", "6.9 per cent nitrogen in safflower cake"],
    correct: 1,
    explanation:
      "Safflower cake (decorticated) has the highest nitrogen content among oil cakes at 7.9% N, 2.2% P and 1.9% K.",
  },
  {
    id: "d122_081",
    subject: "da-122",
    question: "Side dressing method of fertilizer placement refers to:",
    options: ["Injecting liquid fertilizer into soil near plant roots", "Spreading fertilizer in between rows and around plants", "Placing fertilizer at the bottom of plough furrow", "Placing fertilizer in bands one side of the plant"],
    correct: 1,
    explanation:
      "Side dressing refers to spread of fertilizer in between the rows and around the plants. It is used for placement of nitrogenous fertilizers in crops like maize, sugarcane and cotton.",
  },
  {
    id: "d122_082",
    subject: "da-122",
    question: "What is the recommended rate of BGA application per hectare for rice crop?",
    options: ["5 kg per hectare of BGA flakes applied", "10 kg per hectare of BGA flakes applied", "25 kg per hectare of BGA flakes applied", "1 kg per hectare of BGA flakes applied"],
    correct: 1,
    explanation:
      "Application of 10 kg/ha flakes of BGA is recommended, applied 10 days after the transplanting of rice crop.",
  },
  {
    id: "d122_083",
    subject: "da-122",
    question: "Nitrification inhibitors primarily inhibit which bacterial activity in soil?",
    options: ["Nitrobacter bacteria oxidizing nitrite to nitrate", "Azotobacter bacteria fixing atmospheric nitrogen", "Clostridium bacteria converting organic nitrogen compounds", "Nitrosomonas bacteria oxidizing ammonium to nitrite"],
    correct: 3,
    explanation:
      "Most nitrification inhibitors inhibit activity of Nitrosomonas bacteria that oxidizes ammonium to nitrite. Some inhibitors inhibit Nitrobactor bacteria that oxidizes nitrite to nitrate.",
  },
  {
    id: "d122_084",
    subject: "da-122",
    question: "In covered pit method of FYM preparation, application of which fertilizer improves quality?",
    options: ["Urea applied at the rate of 1% by weight", "Ammonium sulphate to enrich nitrogen content", "Single super phosphate applied to the pit", "Muriate of potash to improve potassium content"],
    correct: 1,
    explanation:
      "Application of single super phosphate (SSP) to the covered pit will improve the quality of FYM manure by providing additional phosphorus to the composting material.",
  },
  {
    id: "d122_085",
    subject: "da-122",
    question: "What is the recommended dose of Azotobacter biofertilizer per hectare?",
    options: ["1 packet of Azotobacter per hectare", "2-3 packets of Azotobacter per hectare", "5-8 packets of Azotobacter per hectare", "10-15 packets of Azotobacter per hectare"],
    correct: 1,
    explanation:
      "The recommended dose of Azotobacter is 2-3 packets per hectare. It can be applied by seed inoculation, seedling inoculation or by broadcasting after mixing with FYM.",
  },
  {
    id: "d122_086",
    subject: "da-122",
    question: "Which chelating agent is known as Ethylene Diamine Tetra Acetic Acid?",
    options: ["EDDHA is Ethylene Diamine Tetra Acetic Acid", "HEDTA is Ethylene Diamine Tetra Acetic Acid", "DTPA is Ethylene Diamine Tetra Acetic Acid", "EDTA is Ethylene Diamine Tetra Acetic Acid"],
    correct: 3,
    explanation:
      "EDTA stands for Ethylene Diamine Tetra Acetic Acid. Other chelating agents include HEDTA, EDDHA, NTA (Nitrilo Tri Acetic Acid) and DTPA (Diethylene Triamine Penta Acetic Acid).",
  },
  {
    id: "d122_087",
    subject: "da-122",
    question: "Urban compost is prepared by which institutions using street sweepings?",
    options: ["Individual farmers using farm organic wastes", "Local bodies and municipalities using municipal waste", "Agricultural universities using experimental wastes", "Private companies collecting kitchen food wastes"],
    correct: 1,
    explanation:
      "Urban compost is prepared by local bodies, municipalities, corporations etc. with their output of street sweepings, municipal rubbish etc. as organic matter using night soil as starter.",
  },
  {
    id: "d122_088",
    subject: "da-122",
    question: "Phosphoric fertilizers should be placed at what depth from seeds during sowing?",
    options: ["0.5-1 cm below and 1-2 cm away from seed", "8-10 cm below and 15-20 cm away from seed", "2-5 cm below and 5-6 cm away from seeds", "10-15 cm below and 8-10 cm away from seed"],
    correct: 2,
    explanation:
      "Phosphorus fertilizers (water soluble) should be placed 2-5 cm below the soil and 5-6 cm away from the seeds to ensure maximum availability to plants.",
  },
  {
    id: "d122_089",
    subject: "da-122",
    question: "Ferrous sulphate (FeSO4.7H2O) contains which percentage of iron?",
    options: ["Ferrous sulphate contains 5% iron content", "Ferrous sulphate contains 20% iron content", "Ferrous sulphate contains 35% iron content", "Ferrous sulphate contains 10% iron content"],
    correct: 1,
    explanation:
      "Ferrous sulphate (FeSO4.7H2O) contains 20% iron. Fe-EDTA chelate contains 5% Fe and Fe-EDDHA chelate contains 6% Fe.",
  },
  {
    id: "d122_090",
    subject: "da-122",
    question: "Zinc sulphate should be applied at what rate for deficiency correction in soil?",
    options: ["0.5-1 kg ZnSO4 per hectare at transplanting", "10-50 kg ZnSO4 per hectare at last ploughing", "1-5 kg ZnSO4 per hectare at last ploughing", "50-100 kg ZnSO4 per hectare in soil"],
    correct: 1,
    explanation:
      "Zinc sulphate at the rate of 10-50 kg/ha should be applied at the last ploughing before sowing or transplanting for zinc deficiency correction.",
  },
  {
    id: "d122_091",
    subject: "da-122",
    question: "Which organic manure has the highest nitrogen content among blood meal and others?",
    options: ["Guano with 8-15% nitrogen content", "Fish meal with 4-10% nitrogen content", "Horn meal with 14% nitrogen content", "Blood meal with 12% nitrogen content"],
    correct: 3,
    explanation:
      "Blood meal (dried blood) has the highest nitrogen content at 12% N among concentrated animal origin manures (excluding horn meal), and is 80% as efficient as inorganic N fertilizers.",
  },
  {
    id: "d122_092",
    subject: "da-122",
    question: "Application of lime to problematic acidic soils is recommended because:",
    options: ["Lime improves soil structure by increasing clay content", "Lime increases soil pH to improve nutrient availability", "Lime provides calcium and magnesium nutrients directly", "Lime kills soil-borne pathogens causing root diseases"],
    correct: 1,
    explanation:
      "For acidic soils lime should be applied and for basic or alkaline soils gypsum should be applied. Lime neutralizes soil acidity and improves pH to optimum range for nutrient availability.",
  },
  {
    id: "d122_093",
    subject: "da-122",
    question: "Rhizobium inoculation of groundnut is done by slurry method because:",
    options: ["Groundnut requires higher doses of inoculant than other crops", "Groundnut pods grow underground requiring deep placement", "Groundnut soils have high population of competing bacteria", "Groundnut seeds are fragile and cannot tolerate dry inoculation"],
    correct: 3,
    explanation:
      "For groundnut, slurry of peat based inoculant in seed furrows is recommended because the groundnut seeds are fragile. For other legumes, seed coat inoculation is the most common method.",
  },
  {
    id: "d122_094",
    subject: "da-122",
    question: "What is the N content of Azolla (water fern) used as biofertilizer in rice?",
    options: ["Azolla has 10-15% nitrogen in leaf tissue", "Azolla has 4-6% nitrogen for submerged rice", "Azolla has 1-2% nitrogen for rice fields", "Azolla has 8-10% nitrogen for paddy fields"],
    correct: 1,
    explanation:
      "Azolla has large biomass and high N content (4-6% N) and is recommended as green manure for submerged rice fields within maximum temperature of 38°C. Yield increase is 15-20%.",
  },
  {
    id: "d122_095",
    subject: "da-122",
    question: "When applying urea to improve use efficiency, it should be mixed with soil in ratio:",
    options: ["One part urea and 1-2 parts moist soil", "One part urea and 20-25 parts moist soil", "One part urea and 5-10 parts moist soil", "One part urea and 50-100 parts moist soil"],
    correct: 2,
    explanation:
      "To prevent nitrogen loss, one part of urea and 5-10 parts of soft moist soil are mixed properly and incubated for 20-25 hours before application. This method improves nitrogen use efficiency.",
  },
  {
    id: "d122_096",
    subject: "da-122",
    question: "What is the grade of MAP (Mono Ammonium Phosphate) complex fertilizer?",
    options: ["MAP has 16-20 grade N and P2O5", "MAP has 11-46 grade N and P2O5", "MAP has 20-20 grade N and P2O5", "MAP has 18-46 grade N and P2O5"],
    correct: 1,
    explanation:
      "MAP (Mono Ammonium Phosphate) has 11:46 grade, while DAP (Di Ammonium Phosphate) has 18:46 grade. Both are incomplete complex fertilizers.",
  },
  {
    id: "d122_097",
    subject: "da-122",
    question: "Rural compost pit dimensions are typically described as which standard size?",
    options: ["Rural compost pit is 6 x 6 x 4 feet standard", "Rural compost pit is 12 x 50 x 6 feet size", "Rural compost pit is 8 x 4 x 4 feet size", "Rural compost pit is 20 x 10 x 3 feet size"],
    correct: 1,
    explanation:
      "Rural compost can be done in a pit size of 12 x 50 x 6 feet located on an elevated place. Length and width are adjustable but these are the standard dimensions.",
  },
  {
    id: "d122_098",
    subject: "da-122",
    question: "Soil productivity is considered as an economic concept that depends on:",
    options: ["Organic matter content and microbial population", "Soil fertility alone as the primary determinant", "Multiple factors including air, heat, light and water", "Soil texture and depth as the main factors"],
    correct: 2,
    explanation:
      "Soil productivity is an economic concept and not just a property of soil. It depends on all external factors that control plant growth like air, heat (temperature), light, mechanical support, soil fertility and water.",
  },
  {
    id: "d122_099",
    subject: "da-122",
    question: "The FCO was revised in which year with effect from 25-9-1985?",
    options: ["FCO was revised in 1990 to add new fertilizers", "FCO was revised in 1975 to control adulteration", "FCO was revised in 2000 for complex fertilizers", "FCO was revised in 1985 for updated standards"],
    correct: 3,
    explanation:
      "The Fertilizer Control Order (FCO) originally passed in 1957 was revised in 1985 with effect from 25-9-1985. The Government of India has delegated powers to state governments to implement the order.",
  },
  {
    id: "d122_100",
    subject: "da-122",
    question: "Daincha (Sesbania speciosa) is preferred for correction of sodic soils because:",
    options: ["It grows fast and produces maximum biomass", "It is deep rooted improving soil drainage heavily", "It has very high nitrogen fixation capacity", "It is less woody, less fibrous with heavy foliage"],
    correct: 3,
    explanation:
      "Sesbania speciosa corrects sodic soils because it is less woody and less fibrous, gives heavy foliage and is easily decomposable. It is an erect growing deep-rooted crop useful to improve drainage in heavy soils.",
  },
];
