import { Question } from "@/types";

// DA-122: Manures and Fertilizers — 100 questions (PJTSAU Diploma syllabus)
// Source: DA-122 course material by Dr. S. Sridevi & Dr. G. Venugopal, PJTSAU
export const da122Questions: Question[] = [
  {
    id: "d122_001",
    subject: "da-122",
    question: "Soil fertility is defined as the ability of soil to:",
    options: ["Retain moisture for extended drought periods", "Resist erosion from rainfall and wind", "Produce maximum crop yield under all conditions", "Supply adequate nutrients for normal plant growth"],
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
    options: ["Hauno meaning excrement manure", "Manoeuvrer meaning work with soil", "Fertil meaning fertile soil", "Componere meaning put together"],
    correct: 1,
    explanation:
      "The word 'Manure' originated from the French word 'MANOEUVRER' which refers to 'work with soil'.",
  },
  {
    id: "d122_004",
    subject: "da-122",
    question: "Guano is a product of excrement from which type of birds?",
    options: ["Forest birds from tropical rainforests", "Fresh water ducks found in river deltas", "Migratory birds from African grasslands", "Sea birds like Pelicans, Gannets and Albatrosses"],
    correct: 3,
    explanation:
      "Guano is a product of sea birds (Pelican, Gannets and Albatrosses) excrement covered over long periods and occurring in natural deposits along Pacific coast of Peru and Chile.",
  },
  {
    id: "d122_005",
    subject: "da-122",
    question: "Which method of FYM preparation is considered the best quality method?",
    options: ["Pit method with soil layer additions", "Covered pit method with roofing protection", "Open heap method under tree shade", "Field windrow method with turnings"],
    correct: 1,
    explanation:
      "The covered pit method is the best method of all described. The pit has non-absorbent granite stone lining, a 1.5 feet bund, and roofing with Palmyra or phoenix leaves to control organic matter and nutrient losses.",
  },
  {
    id: "d122_006",
    subject: "da-122",
    question: "What is the nutrient composition (N-P-K) of good quality FYM stored in covered pit?",
    options: ["0.68% N, 0.5% P and 1.0% K content", "1.5% N, 1.0% P and 2.0% K content", "0.5% N, 0.3% P and 0.8% K content", "0.3% N, 0.2% P and 0.5% K content"],
    correct: 0,
    explanation:
      "Good quality FYM stored in covered pit contains 0.68% N, 0.5% P and 1% K as stated in the course material.",
  },
  {
    id: "d122_007",
    subject: "da-122",
    question: "The word 'Compost' is derived from Latin word 'COMPONERE' meaning:",
    options: ["Convert waste into fertile matter", "Decompose under controlled temperature", "Put together different materials", "Work done with organic substances"],
    correct: 2,
    explanation:
      "The word compost is derived from the Latin word 'COMPONERE' meaning to put together.",
  },
  {
    id: "d122_008",
    subject: "da-122",
    question: "In urban composting, which material is used as a starter?",
    options: ["Sugarcane trash soaked in urine water", "Dung mixed with biogas slurry water", "Night soil from nearby human habitations", "Bone meal dissolved in acidic solution"],
    correct: 2,
    explanation:
      "In urban composting, night soil is used as the starter material, while rural compost uses cattle dung as the starter.",
  },
  {
    id: "d122_009",
    subject: "da-122",
    question: "What is the nitrogen content of biogas slurry compared to FYM?",
    options: ["Biogas slurry has 0.5% N vs 1.5% in FYM", "Biogas slurry has 1.5% N vs 0.7% in FYM", "FYM has 2.0% N while biogas slurry has 1.0%", "Both have equal nitrogen content of 1.2%"],
    correct: 1,
    explanation:
      "Biogas slurry has higher nitrogen content (1.5%) as against 0.7% found in FYM, making it a better quality manure.",
  },
  {
    id: "d122_010",
    subject: "da-122",
    question: "Thermal efficiency of cow dung burnt in properly designed burners is:",
    options: ["Around 60 per cent thermal efficiency", "Equal to burning dry wood directly", "Around 11 per cent thermal efficiency", "Around 30 per cent thermal efficiency"],
    correct: 0,
    explanation:
      "Thermal efficiency of cow dung burnt in properly designed burners is 60%, compared to 11% when burnt in the usual manner as fuel.",
  },
  {
    id: "d122_011",
    subject: "da-122",
    question: "Which earthworm species is commonly used for vermicomposting?",
    options: ["Eisenia foetida used in vermicomposting beds", "Pheretima posthuma from Indian paddy fields", "Lumbricus terrestris found in temperate soil", "Megascolex coeruleus found in tropical clay"],
    correct: 0,
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
    options: ["Summer crops under no irrigation availability", "Dryland crops in high rainfall above 900 mm", "Hill crops grown under full shade cover", "Sandy soils with very low moisture retention"],
    correct: 1,
    explanation:
      "Green manuring can be safely adopted for irrigated crops and also under rainfed conditions when rainfall is above 900 mm.",
  },
  {
    id: "d122_014",
    subject: "da-122",
    question: "Sunnhemp (Crotalaria juncea) has which nutrient composition?",
    options: ["3.5% N, 0.3% P and 1.0% K content", "1.8% N, 0.1% P and 0.3% K content", "2.3% N, 0.2% P and 1.4% K content", "3.0% N, 0.1% P and 0.3% K content"],
    correct: 2,
    explanation:
      "Sunnhemp (Crotalaria juncea) has nutrient composition of 2.3% N, 0.2% P and 1.4% K.",
  },
  {
    id: "d122_015",
    subject: "da-122",
    question: "Daincha (Sesbania aculeata) seeds require scarification before sowing because:",
    options: ["Seeds require soaking in warm water overnight", "Seeds are infected with soil-borne pathogens", "Seeds are hard coated and germinate slowly", "Seeds need chemical treatment for viability"],
    correct: 2,
    explanation:
      "Daincha seeds require scarification (lightly pounding with sand) for easy germination due to their hard seed coat.",
  },
  {
    id: "d122_016",
    subject: "da-122",
    question: "Green leaf manuring should be done how many days before sowing?",
    options: ["30-45 days prior to crop sowing", "15-20 days prior to crop sowing", "45-60 days prior to crop sowing", "5-10 days prior to crop sowing"],
    correct: 1,
    explanation:
      "Green leaf manuring should be done 15-20 days prior to sowing of the main crop.",
  },
  {
    id: "d122_017",
    subject: "da-122",
    question: "Which plant is used as source of green leaf manure?",
    options: ["Sunnhemp used in dryland conditions", "Pillipesara grown in black cotton soils", "Daincha grown in waterlogged paddy", "Azolla pinnata water fern species"],
    correct: 3,
    explanation:
      "Azolla pinnata is listed as one of the plants used as a source of green leaf manure, along with Gliricidia maculata, Pongamia glabra, Sesbania rostrata, etc.",
  },
  {
    id: "d122_018",
    subject: "da-122",
    question: "Which oil cake is referred to as castor pomace and is poisonous to animals?",
    options: ["Cotton seed cake toxic to grazing animals", "Castor cake used only as crop fertilizer", "Mahua cake unsuitable for cattle feeding", "Neem cake with insecticidal bitter properties"],
    correct: 1,
    explanation:
      "Castor cake (castor pomace) is a by-product of oil extraction from castor beans. It is poisonous to animals and used only as fertilizer. It contains 4.4% N, 1.9% P2O5 and 1.4% K2O.",
  },
  {
    id: "d122_019",
    subject: "da-122",
    question: "Blood meal is described as how efficient compared to inorganic N fertilizer?",
    options: ["80 per cent efficient as inorganic nitrogen", "40 per cent efficient as inorganic nitrogen", "60 per cent efficient as inorganic nitrogen", "100 per cent efficient as inorganic nitrogen"],
    correct: 0,
    explanation:
      "Dried blood is 80% as efficient as the inorganic N fertilizer in providing nitrogen to the crop, making it the highest among protein organic manures.",
  },
  {
    id: "d122_020",
    subject: "da-122",
    question: "Horn meal is described as a slow acting fertilizer containing which nutrient?",
    options: ["8 per cent potassium in horn chips", "10 per cent phosphorus in hoof meal", "20 per cent calcium in ground horn", "14 per cent nitrogen in horn material"],
    correct: 3,
    explanation:
      "Horn meal is a slow acting fertilizer of Nitrogen containing 14% N. About 3-4 kg horn and hoof material can be obtained from each animal.",
  },
  {
    id: "d122_021",
    subject: "da-122",
    question: "Rhizobium can fix how much nitrogen per hectare in legume root nodules?",
    options: ["Rhizobium fixes 5-10 kg N per hectare", "Rhizobium fixes 50-100 kg N per hectare", "Rhizobium fixes 200-300 kg N per hectare", "Rhizobium fixes 10-25 kg N per hectare"],
    correct: 1,
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
    options: ["Symbiotic nitrogen fixer in root nodules", "Phosphate-solubilizing bacteria in soil", "Associative nitrogen fixer with plants", "Free-living nitrogen fixer without plants"],
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
    options: ["BGA fixes 50-75 kg N per hectare", "BGA fixes 100-150 kg N per hectare", "BGA fixes 5-10 kg N per hectare", "BGA fixes 25-30 kg N per hectare"],
    correct: 3,
    explanation:
      "Nitrogen fixation by BGA has been estimated to be 25-30 kg N/ha in paddy rice ecosystems.",
  },
  {
    id: "d122_026",
    subject: "da-122",
    question: "VAM fungi help plants primarily by enhancing the uptake of which nutrients?",
    options: ["Phosphorus, zinc and sulphur in soils", "Nitrogen, potassium and calcium in soils", "Iron, manganese and boron micronutrients", "Magnesium, sodium and copper elements"],
    correct: 0,
    explanation:
      "VAM fungi enhance the nutrient uptake of P, Zn and S and also enhance water uptake under drought conditions.",
  },
  {
    id: "d122_027",
    subject: "da-122",
    question: "Nitrate fertilizers are NOT recommended for irrigated paddy because:",
    options: ["Nitrate form damages tender paddy root hairs", "They are too costly for paddy cultivation", "Nitrate nitrogen is leached and volatilized easily", "They cause soil acidification in wetland paddy"],
    correct: 2,
    explanation:
      "Nitrate nitrogen carries a negative charge, is not adsorbed onto soil particles and is subject to leaching and volatilization losses. Hence nitrate fertilizers are not recommended for irrigated paddy.",
  },
  {
    id: "d122_028",
    subject: "da-122",
    question: "Ammonium sulphate contains which percentage of nitrogen and sulphur?",
    options: ["18% nitrogen and 30% sulphur content", "26% nitrogen and 15% sulphur content", "25% nitrogen and 20% sulphur content", "21% nitrogen and 24% sulphur content"],
    correct: 3,
    explanation:
      "Ammonium sulphate contains 21% N and 24% S. To neutralize its acidity, 110 kg of calcium carbonate is needed per 100 kg of ammonium sulphate.",
  },
  {
    id: "d122_029",
    subject: "da-122",
    question: "Urea is not recommended for application in which specific conditions?",
    options: ["Urea should not be mixed with phosphatic fertilizers", "Urea should not be applied in excessive water or dry soils", "Urea should not be used in alkaline calcareous soils", "Urea should not be applied on dry soils only"],
    correct: 1,
    explanation:
      "Urea should be applied under optimum soil moisture (field capacity) conditions only. On application in wetlands, N is lost through leaching; in dry soils it is lost through volatilization.",
  },
  {
    id: "d122_030",
    subject: "da-122",
    question: "Which potassic fertilizer is NOT suitable for potato, tobacco and grapes?",
    options: ["Sulphate of potash having 50% potassium", "Potassium phosphate used for foliar spray", "Muriate of potash containing 60% potassium", "Potassium nitrate having 39% potassium"],
    correct: 2,
    explanation:
      "Muriate of potash (KCl) is useful for all crops except potato, tobacco and grapes. Sulphate of potash is applied to these crops.",
  },
  {
    id: "d122_031",
    subject: "da-122",
    question: "Single super phosphate is preferred for oilseed crops because it also contains:",
    options: ["18% P plus 25% calcium and 15% chloride", "16% P plus 21% calcium and 12% sulphur", "20% P plus 15% nitrogen and 8% calcium", "16% P plus 10% magnesium and 6% sulphur"],
    correct: 1,
    explanation:
      "SSP contains 16% P2O5, 21% calcium and 12% sulphur, making it a preferred source for oilseed crops like groundnut that require sulphur.",
  },
  {
    id: "d122_032",
    subject: "da-122",
    question: "Rock phosphate is suitable as fertilizer mainly in which soil conditions?",
    options: ["Waterlogged alkaline soils with high calcium", "Strongly acidic soils or high rainfall areas", "Sandy loam soils with low organic matter", "Neutral pH soils with good drainage facilities"],
    correct: 1,
    explanation:
      "Rock phosphate is water and citrate insoluble. It is soluble in strongly acidic soils or organic soils, and is used in tea and coffee gardens and high rainfall mountain areas.",
  },
  {
    id: "d122_033",
    subject: "da-122",
    question: "The Fertilizer Control Order (FCO) was originally passed on which date?",
    options: ["28th April 1957 under Essential Commodities Act", "15th August 1950 under Indian Agriculture Act", "1st January 1961 under Interstate Trade Act", "26th January 1960 under Fertilizer Movement Act"],
    correct: 0,
    explanation:
      "The Fertilizer Control Order (FCO) was passed on 28th April 1957 in exercise of the power conferred by Section III of the Essential Commodities Act of 1955, effective from May 18th 1957.",
  },
  {
    id: "d122_034",
    subject: "da-122",
    question: "What is the nitrogen content of urea as per FCO 1957 specifications?",
    options: ["Minimum 48% nitrogen by weight content", "Minimum 40% nitrogen by weight content", "Minimum 44% nitrogen by weight content", "Minimum 46% nitrogen by weight content"],
    correct: 2,
    explanation:
      "As per FCO 1957, urea must have total nitrogen minimum 44% per cent by weight. The biuret content must be maximum 1.50%.",
  },
  {
    id: "d122_035",
    subject: "da-122",
    question: "INM is defined as maintenance of soil fertility through optimization of benefits from:",
    options: ["Organic manures and biofertilizers excluding chemicals", "All possible chemical fertilizer combinations only", "Organic, inorganic and biological components together", "Soil testing and site-specific nutrient management only"],
    correct: 2,
    explanation:
      "INM refers to maintenance of soil fertility and plant nutrient supply through optimization of benefits from all possible sources of organic, inorganic and biological components in an integrated manner.",
  },
  {
    id: "d122_036",
    subject: "da-122",
    question: "Rhizobium meliloti is specifically associated with which crop?",
    options: ["Berseem as the specific host legume", "Cowpea as the preferred legume host", "Black gram as symbiotic host crop", "Soybean as host legume species"],
    correct: 0,
    explanation:
      "Rhizobium meliloti is specifically associated with Berseem. Each Rhizobium species shows host specificity to its particular legume crop.",
  },
  {
    id: "d122_037",
    subject: "da-122",
    question: "What is the vermicompost application rate recommended for fruit crops?",
    options: ["1 tonne per hectare for all fruit crops", "50 kg per plant for large orchards", "200 grams per pot for fruit trees", "5-10 kg per tree for fruit crops"],
    correct: 3,
    explanation:
      "For fruit crops, 5-10 kg/tree of vermicompost is recommended. For field crops the rate is 1 t/ha and for flowering plants in pots, 200g/pot.",
  },
  {
    id: "d122_038",
    subject: "da-122",
    question: "Compost with commercially accepted standards must have C:N ratio of:",
    options: ["More than 50 wide C:N ratio", "Between 30-50 moderate C:N ratio", "Less than 20 narrow C:N ratio", "Exactly 25 fixed C:N ratio"],
    correct: 2,
    explanation:
      "Commercially accepted compost must have C:N ratio less than 20. Other properties include nitrogen >2%, color brown-black, moisture 10-20% and CEC 75-100 meq/100g.",
  },
  {
    id: "d122_039",
    subject: "da-122",
    question: "Pillipesara (Phaseolus trilobus) is described as a triple purpose crop because:",
    options: ["It gives vegetables, seeds and oil cakes", "It produces fiber, fodder and green manure", "It provides grain, fodder and green manure", "It supplies wood, leaf and root products"],
    correct: 2,
    explanation:
      "Pillipesara is a regular green manure, minor pulse crop and fodder crop — hence it is a triple purpose crop. It has good ratooning capacity.",
  },
  {
    id: "d122_040",
    subject: "da-122",
    question: "Deep placement of nitrogenous fertilizers in paddy fields is done to:",
    options: ["Improve surface drainage of paddy fields", "Place ammoniacal N in soil reduction zone", "Speed up nitrogen release to soil surface", "Reduce the cost of fertilizer application"],
    correct: 1,
    explanation:
      "Deep placement places ammoniacal nitrogenous fertilizers in the reduction zone of soil in paddy fields, where ammoniacal nitrogen remains available to the crop and prevents nutrient loss by run-off.",
  },
  {
    id: "d122_041",
    subject: "da-122",
    question: "Which characteristic distinguishes chemical fertilizers from organic manures?",
    options: ["Chemical fertilizers contain wide C:N ratio matter", "Chemical fertilizers supply only one or few nutrients", "Chemical fertilizers support soil microbial population", "Chemical fertilizers improve physical soil properties"],
    correct: 1,
    explanation:
      "Chemical fertilizers are quick acting, have high analytical value, definite chemical composition and supply one or very few plant nutrients, but do NOT improve physical properties of soils.",
  },
  {
    id: "d122_042",
    subject: "da-122",
    question: "What is the minimum distance for urban composting from residential areas?",
    options: ["3 kilometers from the nearest settlement", "1.5 kilometers from residential townships", "5 kilometers from the nearest habitation", "500 meters from the residential township"],
    correct: 1,
    explanation:
      "Urban composting is taken up at least 1.5 km away from the residential areas/townships to prevent nuisance and health hazards.",
  },
  {
    id: "d122_043",
    subject: "da-122",
    question: "Ammonium chloride application results in loss of calcium from soil because:",
    options: ["Ammonium acidifies soil causing calcium fixation", "Calcium is replaced by ammonium on exchange sites", "Chlorine forms soluble CaCl2 which leaches out", "Chlorine ions directly dissolve calcium particles"],
    correct: 2,
    explanation:
      "When ammonium chloride dissociates, chlorine combines with calcium to form calcium chloride which is highly soluble and lost due to leaching, resulting in loss of calcium.",
  },
  {
    id: "d122_044",
    subject: "da-122",
    question: "Calcium ammonium nitrate must be stored in specialized polythene bags because:",
    options: ["It is highly hygroscopic in its dry form", "It releases toxic ammonia gas during storage", "It reacts with carbon dioxide in open air", "It decomposes rapidly at room temperature"],
    correct: 0,
    explanation:
      "Calcium ammonium nitrate is highly hygroscopic in nature, hence it must be stored in specialized polythene bags to prevent moisture absorption.",
  },
  {
    id: "d122_045",
    subject: "da-122",
    question: "What nitrogen percentage does Calcium Cyanamide contain?",
    options: ["Calcium cyanamide contains 16% nitrogen", "Calcium cyanamide contains 21% nitrogen", "Calcium cyanamide contains 46% nitrogen", "Calcium cyanamide contains 35% nitrogen"],
    correct: 3,
    explanation:
      "Calcium cyanamide contains 21% N (amide form). Urea contains 46% N and is the most popular amide form fertilizer.",
  },
  {
    id: "d122_046",
    subject: "da-122",
    question: "In which soil type does boron availability increase while getting fixed in finer soils?",
    options: ["Alkaline soils with high calcium carbonate content", "Coarse textured soils have more boron availability", "Waterlogged soils with low oxygen availability", "Heavy clay soils with montmorillonite minerals"],
    correct: 1,
    explanation:
      "Boron availability is more in coarse textured soils and in finer textured soils it gets fixed and becomes unavailable to plants.",
  },
  {
    id: "d122_047",
    subject: "da-122",
    question: "Organic farming as defined by FAO is a holistic system that promotes:",
    options: ["Complete elimination of all synthetic compounds", "Agro-ecosystem health including biodiversity and biological cycles", "Maximum crop yield using all available inputs", "Traditional farming with only bullock-drawn implements"],
    correct: 1,
    explanation:
      "FAO defines organic agriculture as 'a holistic production management system which promotes and enhances agro-ecosystem's health, including biodiversity, biological cycles, and soil biological activity.'",
  },
  {
    id: "d122_048",
    subject: "da-122",
    question: "Green manure crop should be incorporated into soil at which growth stage?",
    options: ["After natural wilting and partial drying occurs", "At early seedling stage within 30 days", "At 50% flowering stage when crop is tender", "At harvest stage with mature seeds formed"],
    correct: 2,
    explanation:
      "The green manure crop should be incorporated at the stage of 50% flowering when it is tender. Delay in incorporation will affect decomposition.",
  },
  {
    id: "d122_049",
    subject: "da-122",
    question: "What percentage of nitrogen in the atmosphere exists in gaseous form?",
    options: ["Nearly 90 per cent of atmospheric nitrogen", "Nearly 21 per cent of atmospheric nitrogen", "Nearly 78 per cent of atmospheric nitrogen", "Nearly 50 per cent of atmospheric nitrogen"],
    correct: 2,
    explanation:
      "Atmosphere contains nearly 78% of nitrogen in gaseous form, which is 1.5 times higher than the N content present in urea.",
  },
  {
    id: "d122_050",
    subject: "da-122",
    question: "Pellet application involves placing nitrogen fertilizer at what depth in paddy?",
    options: ["10 to 15 cm deep in paddy root zone", "2.5 to 5 cm deep between paddy rows", "15 to 20 cm deep in anaerobic zone", "0.5 to 1 cm on soil surface near plants"],
    correct: 1,
    explanation:
      "Pellet application refers to placement of nitrogenous fertilizer in the form of pellets 2.5 to 5 cm deep between the rows of the paddy crop, mixed with soil in 1:10 ratio.",
  },
  {
    id: "d122_051",
    subject: "da-122",
    question: "What is the main objective of adding conditioners to mixed fertilizers?",
    options: ["To improve shelf life and reduce degradation", "To reduce crystal knitting and prevent caking", "To balance pH for acidic or alkaline soils", "To increase the nutrient content per kilogram"],
    correct: 1,
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
    options: ["Hard coarse gravelly textured and poor soils", "Black cotton soils with high clay content", "Waterlogged paddy soils in coastal areas", "Rich alluvial soils along river flood plains"],
    correct: 0,
    explanation:
      "Wild indigo (Tephrosia purpurea) is suited for hard coarse gravelly textured soils and poor soils. It is also used as a green leaf manure and is a self-grown crop when sown once.",
  },
  {
    id: "d122_054",
    subject: "da-122",
    question: "DAP (Di Ammonium Phosphate) has which grade of N and P2O5?",
    options: ["18-46 grade of nitrogen and phosphate", "20-20 grade of nitrogen and phosphate", "16-20 grade of nitrogen and phosphate", "11-46 grade of nitrogen and phosphate"],
    correct: 0,
    explanation:
      "DAP (Di Ammonium Phosphate) has the grade 18:46 containing 18% N and 46% P2O5, while MAP has 11:46 grade.",
  },
  {
    id: "d122_055",
    subject: "da-122",
    question: "Sulphur coated urea (SCU) releases nitrogen slowly because:",
    options: ["SCU dissolves urea at a uniform controlled rate", "SCU requires high temperature before dissolving", "Sulphur coating ruptures by microbial soil action", "Sulphur blocks water entry into urea granule"],
    correct: 0,
    explanation:
      "In SCU, as long as urea remains coated with sulphur without rupture, it does not dissolve. When added to soil, the sulphur coating ruptures by microbial action and soil water slowly penetrates and dissolves the urea.",
  },
  {
    id: "d122_056",
    subject: "da-122",
    question: "Phosphate solubilizing bacteria solubilize insoluble phosphates by secreting:",
    options: ["Growth hormones like gibberellic acid and IAA", "Nitrogenase enzyme that reduces phosphate ions", "Enzymes like phosphatase and phytase proteins", "Organic acids like acetic and propionic acids"],
    correct: 3,
    explanation:
      "Phosphate solubilizing bacteria (Pseudomonas and Bacillus) secrete organic acids such as acetic acid, propionic acid etc. These acids lower the pH and dissolve bound phosphate forms.",
  },
  {
    id: "d122_057",
    subject: "da-122",
    question: "Horse gram (Dolichus biflorus) is suitable as green manure for which soils?",
    options: ["Rich alluvial soils with good moisture availability", "Poor and hard soils with drought tolerance", "Sandy loam soils with high permeability", "Waterlogged heavy black cotton clay soils"],
    correct: 1,
    explanation:
      "Horse gram is suitable as green manure for poor and hard soils. It can also withstand drought. Seed rate is 35 kg/ha and green matter yield is 3.5 tonnes/ha.",
  },
  {
    id: "d122_058",
    subject: "da-122",
    question: "What is the N content range of guano organic manure?",
    options: ["8-15% nitrogen and 2.3% phosphorus", "4-10% nitrogen and 3-9% phosphorus", "1-4% nitrogen and 10-25% phosphorus", "12% nitrogen and 1.5% phosphorus content"],
    correct: 0,
    explanation:
      "Guano contains 8-15% nitrogen, 2.3% phosphorus and 2.4% potassium. The name Guano originated from Peru from the word 'HAUNO' meaning manure.",
  },
  {
    id: "d122_059",
    subject: "da-122",
    question: "1000 earthworms weighing about 1 kg can convert how much waste per day?",
    options: ["1000 earthworms convert 10 kg waste daily", "1000 earthworms convert 5 kg waste daily", "1000 earthworms convert 1 kg waste daily", "1000 earthworms convert 20 kg waste daily"],
    correct: 1,
    explanation:
      "1000 earthworms may convert 5 kg waste material per day. 1000 worms weighs about one kilogram.",
  },
  {
    id: "d122_060",
    subject: "da-122",
    question: "Complete complex fertilizers contain how many primary nutrients in combination?",
    options: ["Only one primary nutrient in large quantity", "Four nutrients including calcium along with NPK", "Two primary nutrients like N and P combined", "All three primary nutrients N, P and K combined"],
    correct: 3,
    explanation:
      "Complete complex fertilizers contain all three major nutrients N, P and K in chemical combination. Examples include 14:28:14, 17:17:17 and 19:19:19.",
  },
  {
    id: "d122_061",
    subject: "da-122",
    question: "Vermicompost turnover percentage from total material accommodated in pit is:",
    options: ["The turnover rate of vermicompost is 60%", "The turnover rate of vermicompost is 90%", "The turnover rate of vermicompost is 75%", "The turnover rate of vermicompost is 50%"],
    correct: 2,
    explanation:
      "The turnover of vermicompost is 75%. If 1000 kg material is accommodated in the pit, the output will be 750 kg of vermicompost.",
  },
  {
    id: "d122_062",
    subject: "da-122",
    question: "Groundnut cake is classified as an edible oil cake with which nitrogen content?",
    options: ["Groundnut cake contains 4.4% nitrogen content", "Groundnut cake contains 6.5% nitrogen content", "Groundnut cake contains 5.2% nitrogen content", "Groundnut cake contains 3.4% nitrogen content"],
    correct: 1,
    explanation:
      "Groundnut cake is an edible oil cake containing 6.5% N, 1.3% P and 1.5% K. It is suitable for cattle and poultry feeding as well as crop fertilization.",
  },
  {
    id: "d122_063",
    subject: "da-122",
    question: "Bone meal is particularly useful for soils high in Fe and Al because:",
    options: ["Bone meal absorbs toxic aluminium from soil", "Bone P dissolves better in acidic soil conditions", "Bone meal directly chelates excess iron ions", "Bone meal alkalizes acidic soil pH effectively"],
    correct: 1,
    explanation:
      "Bone meal is a good P-fertilizer that is particularly useful for soils high in Fe and Al content (acid soils). It can be used for all crops without fear of salt damage unlike chemical fertilizers.",
  },
  {
    id: "d122_064",
    subject: "da-122",
    question: "Sodium nitrate contains which percentage of nitrogen as a nitrate fertilizer?",
    options: ["Sodium nitrate contains 16% nitrogen content", "Sodium nitrate contains 21% nitrogen content", "Sodium nitrate contains 33% nitrogen content", "Sodium nitrate contains 26% nitrogen content"],
    correct: 0,
    explanation:
      "Sodium nitrate (NaNO3) contains 16% N. Calcium nitrate also contains 16% N. Both are nitrate form fertilizers that readily dissociate in soil solution.",
  },
  {
    id: "d122_065",
    subject: "da-122",
    question: "Mixing ammonium sulphate with basic slag is prohibited because:",
    options: ["They form toxic compounds harmful to plants", "Both are hygroscopic and absorb excess moisture", "Acidic fertilizer reacts with alkaline material", "Combined nitrogen content becomes too high"],
    correct: 2,
    explanation:
      "Acidic natured fertilizers should not be mixed with alkaline natured fertilizers. Ammonium sulphate is acidic while basic slag is alkaline, and mixing causes chemical reactions.",
  },
  {
    id: "d122_066",
    subject: "da-122",
    question: "The Fertilizer Movement Order (FMO) was passed on which date to regulate interstate movement?",
    options: ["28th April 1957 same as FCO date", "25th September 1985 as FCO revision date", "31st December 1960 effective from 1-1-1961", "15th August 1950 effective from 1951"],
    correct: 2,
    explanation:
      "The Fertilizer Movement Order (FMO) was passed on 31st December 1960 to regulate interstate movement of fertilizers and came into force from 1-1-1961.",
  },
  {
    id: "d122_067",
    subject: "da-122",
    question: "BGA is applied how many days after transplanting of rice crop?",
    options: ["BGA applied 30 days after rice transplanting", "BGA applied 5 days after rice transplanting", "BGA applied 10 days after rice transplanting", "BGA applied 20 days after rice transplanting"],
    correct: 2,
    explanation:
      "BGA is applied at 10 kg/ha flakes, applied 10 days after the transplanting of rice crop.",
  },
  {
    id: "d122_068",
    subject: "da-122",
    question: "Monocropping of the same crop leads to nutrient depletion because:",
    options: ["The same crop produces allelopathic compounds in soil", "Monocropping prevents rainfall reaching the soil surface", "The same crop attracts pests reducing soil organic matter", "The same depth of soil is mined repeatedly for nutrients"],
    correct: 3,
    explanation:
      "Monocropping of the same crop without crop rotation mines nutrients from the same depth in the soil leading to nutrient depletion. Deep rooted crops should be rotated with surface-rooted crops.",
  },
  {
    id: "d122_069",
    subject: "da-122",
    question: "The favourable temperature range for earthworm activity in vermicompost pits is:",
    options: ["40°C to 55°C thermophilic temperature range", "35°C to 45°C warm temperature range", "18°C to 35°C moderate temperature range", "5°C to 15°C cold temperature range"],
    correct: 2,
    explanation:
      "Favourable temperature for earthworms in composting material is 18°C to 35°C. pH range should be 6.5-7.5 and moisture should be 60-70%.",
  },
  {
    id: "d122_070",
    subject: "da-122",
    question: "Poultry manure contains which NPK percentage composition?",
    options: ["1.4% N, 1.0% P and 1.4% K nutrients", "0.7% N, 0.3% P and 0.7% K nutrients", "3.0% N, 2.0% P and 2.0% K nutrients", "0.5% N, 0.4% P and 0.5% K nutrients"],
    correct: 2,
    explanation:
      "Poultry manure contains 3.0% N, 2.0% P and 2.0% K — making it richer in nutrients than FYM (0.5-1.5% N) and sheep manure.",
  },
  {
    id: "d122_071",
    subject: "da-122",
    question: "Vermicompost contains which range of total nitrogen percentage?",
    options: ["3.0 to 5.0 per cent total nitrogen", "1.5 to 2.10 per cent total nitrogen", "0.5 to 1.0 per cent total nitrogen", "5.0 to 8.0 per cent total nitrogen"],
    correct: 1,
    explanation:
      "Vermicompost contains 1.5 to 2.10% total nitrogen, 1.0 to 1.50% total phosphorus, and 0.60-0.80% total potassium.",
  },
  {
    id: "d122_072",
    subject: "da-122",
    question: "What is the ratio of dung and water used in mixing tank of a biogas plant?",
    options: ["Dung and water mixed in 1:4 ratio", "Dung and water mixed in 2:3 ratio", "Dung and water mixed in 1:1 ratio", "Dung and water mixed in 4:5 ratio"],
    correct: 3,
    explanation:
      "In the mixing tank adjacent to the digester, dung and water are mixed in 4:5 ratio. The mixed slurry is then passed into the digester through a cement pipe.",
  },
  {
    id: "d122_073",
    subject: "da-122",
    question: "How much nitrogen can biofertilizers add per hectare under optimum conditions?",
    options: ["Biofertilizers can add 10-15 kg N per hectare", "Biofertilizers can add 300-500 kg N per hectare", "Biofertilizers can add 20-200 kg N per hectare", "Biofertilizers can add 5-10 kg N per hectare"],
    correct: 2,
    explanation:
      "Biofertilizers can add 20-200 kg N ha⁻¹ (by fixation) under optimum conditions. They can also solubilize/mobilize 30-50 kg P2O5 ha⁻¹.",
  },
  {
    id: "d122_074",
    subject: "da-122",
    question: "For broadcasting fertilizers, which condition makes this method suitable?",
    options: ["Small farmers needing fertilizer cost savings", "Widely spaced crops with sparse root systems", "Crops with dense stand and permeating root systems", "Crops needing precise nutrient placement near roots"],
    correct: 2,
    explanation:
      "Broadcasting is suitable for crops with dense stand where plant roots permeate the whole volume of soil, when large doses of fertilizers are applied, and for insoluble phosphatic fertilizers.",
  },
  {
    id: "d122_075",
    subject: "da-122",
    question: "Urea foliar spray concentration should not exceed what percentage to prevent scorching?",
    options: ["Urea foliar spray should not exceed 2% concentration", "Urea foliar spray should not exceed 10% concentration", "Urea foliar spray should not exceed 0.5% concentration", "Urea foliar spray should not exceed 5% concentration"],
    correct: 0,
    explanation:
      "Urea can be used for foliar spray at 2% concentration (20g/l). Higher or excess concentration results in scorching and defoliation. Biuret content should be below 1.5% for foliar spray.",
  },
  {
    id: "d122_076",
    subject: "da-122",
    question: "The Indore process is one of the systems of which type of composting?",
    options: ["Vermicomposting using earthworm technology", "Rural compost prepared by individual farmers", "In situ green manure incorporation method", "Urban composting done by local bodies"],
    correct: 3,
    explanation:
      "The Indore process, along with ADCO process, Activated compost process, Bangalore process and Coimbatore process, are different systems of urban composting.",
  },
  {
    id: "d122_077",
    subject: "da-122",
    question: "What is the safe distance between a biogas plant and the kitchen using gas?",
    options: ["Distance should be within 20 meters from kitchen", "Distance should be within 50 meters from kitchen", "Distance should be within 5 meters from kitchen", "Distance should be within 100 meters from kitchen"],
    correct: 0,
    explanation:
      "Normally the distance between gas plant and place where gas is to be used should be within 20 meters (Kitchen to gas plant).",
  },
  {
    id: "d122_078",
    subject: "da-122",
    question: "Non-edible oil cakes are suitable only for crop fertilization because:",
    options: ["They are non-palatable or poisonous to animals", "They have too high nitrogen for animal safety", "They decompose too slowly for animal digestion", "They contain excess calcium harmful to livestock"],
    correct: 0,
    explanation:
      "Non-edible oil cakes (Castor, Neem, Mahua, Cotton seed, Mustard, Safflower) are suitable only for crop fertilization as they are non-palatable, poisonous or bitter for animals.",
  },
  {
    id: "d122_079",
    subject: "da-122",
    question: "Fertile soil in arid regions may not be productive because productivity depends on:",
    options: ["Root depth of crops grown in that region", "Soil nutrient supply capacity alone matters", "Organic matter content of topsoil layer", "Multiple factors including water and climate"],
    correct: 3,
    explanation:
      "Soils in arid regions may be fertile but not productive because productivity depends on multiple factors including air, heat, light, mechanical support, soil fertility and especially water — not just nutrient supply.",
  },
  {
    id: "d122_080",
    subject: "da-122",
    question: "Safflower cake has the highest nitrogen content among oil cakes at:",
    options: ["6.9 per cent nitrogen in safflower cake", "4.8 per cent nitrogen in safflower cake", "5.2 per cent nitrogen in safflower cake", "7.9 per cent nitrogen in safflower cake"],
    correct: 3,
    explanation:
      "Safflower cake (decorticated) has the highest nitrogen content among oil cakes at 7.9% N, 2.2% P and 1.9% K.",
  },
  {
    id: "d122_081",
    subject: "da-122",
    question: "Side dressing method of fertilizer placement refers to:",
    options: ["Injecting liquid fertilizer into soil near plant roots", "Placing fertilizer at the bottom of plough furrow", "Placing fertilizer in bands one side of the plant", "Spreading fertilizer in between rows and around plants"],
    correct: 3,
    explanation:
      "Side dressing refers to spread of fertilizer in between the rows and around the plants. It is used for placement of nitrogenous fertilizers in crops like maize, sugarcane and cotton.",
  },
  {
    id: "d122_082",
    subject: "da-122",
    question: "What is the recommended rate of BGA application per hectare for rice crop?",
    options: ["10 kg per hectare of BGA flakes applied", "5 kg per hectare of BGA flakes applied", "25 kg per hectare of BGA flakes applied", "1 kg per hectare of BGA flakes applied"],
    correct: 0,
    explanation:
      "Application of 10 kg/ha flakes of BGA is recommended, applied 10 days after the transplanting of rice crop.",
  },
  {
    id: "d122_083",
    subject: "da-122",
    question: "Nitrification inhibitors primarily inhibit which bacterial activity in soil?",
    options: ["Nitrosomonas bacteria oxidizing ammonium to nitrite", "Nitrobacter bacteria oxidizing nitrite to nitrate", "Clostridium bacteria converting organic nitrogen compounds", "Azotobacter bacteria fixing atmospheric nitrogen"],
    correct: 0,
    explanation:
      "Most nitrification inhibitors inhibit activity of Nitrosomonas bacteria that oxidizes ammonium to nitrite. Some inhibitors inhibit Nitrobactor bacteria that oxidizes nitrite to nitrate.",
  },
  {
    id: "d122_084",
    subject: "da-122",
    question: "In covered pit method of FYM preparation, application of which fertilizer improves quality?",
    options: ["Ammonium sulphate to enrich nitrogen content", "Muriate of potash to improve potassium content", "Urea applied at the rate of 1% by weight", "Single super phosphate applied to the pit"],
    correct: 0,
    explanation:
      "Application of single super phosphate (SSP) to the covered pit will improve the quality of FYM manure by providing additional phosphorus to the composting material.",
  },
  {
    id: "d122_085",
    subject: "da-122",
    question: "What is the recommended dose of Azotobacter biofertilizer per hectare?",
    options: ["5-8 packets of Azotobacter per hectare", "2-3 packets of Azotobacter per hectare", "10-15 packets of Azotobacter per hectare", "1 packet of Azotobacter per hectare"],
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
    options: ["Private companies collecting kitchen food wastes", "Agricultural universities using experimental wastes", "Local bodies and municipalities using municipal waste", "Individual farmers using farm organic wastes"],
    correct: 2,
    explanation:
      "Urban compost is prepared by local bodies, municipalities, corporations etc. with their output of street sweepings, municipal rubbish etc. as organic matter using night soil as starter.",
  },
  {
    id: "d122_088",
    subject: "da-122",
    question: "Phosphoric fertilizers should be placed at what depth from seeds during sowing?",
    options: ["8-10 cm below and 15-20 cm away from seed", "10-15 cm below and 8-10 cm away from seed", "0.5-1 cm below and 1-2 cm away from seed", "2-5 cm below and 5-6 cm away from seeds"],
    correct: 3,
    explanation:
      "Phosphorus fertilizers (water soluble) should be placed 2-5 cm below the soil and 5-6 cm away from the seeds to ensure maximum availability to plants.",
  },
  {
    id: "d122_089",
    subject: "da-122",
    question: "Ferrous sulphate (FeSO4.7H2O) contains which percentage of iron?",
    options: ["Ferrous sulphate contains 5% iron content", "Ferrous sulphate contains 35% iron content", "Ferrous sulphate contains 10% iron content", "Ferrous sulphate contains 20% iron content"],
    correct: 3,
    explanation:
      "Ferrous sulphate (FeSO4.7H2O) contains 20% iron. Fe-EDTA chelate contains 5% Fe and Fe-EDDHA chelate contains 6% Fe.",
  },
  {
    id: "d122_090",
    subject: "da-122",
    question: "Zinc sulphate should be applied at what rate for deficiency correction in soil?",
    options: ["1-5 kg ZnSO4 per hectare at last ploughing", "10-50 kg ZnSO4 per hectare at last ploughing", "0.5-1 kg ZnSO4 per hectare at transplanting", "50-100 kg ZnSO4 per hectare in soil"],
    correct: 1,
    explanation:
      "Zinc sulphate at the rate of 10-50 kg/ha should be applied at the last ploughing before sowing or transplanting for zinc deficiency correction.",
  },
  {
    id: "d122_091",
    subject: "da-122",
    question: "Which organic manure has the highest nitrogen content among blood meal and others?",
    options: ["Blood meal with 12% nitrogen content", "Fish meal with 4-10% nitrogen content", "Guano with 8-15% nitrogen content", "Horn meal with 14% nitrogen content"],
    correct: 0,
    explanation:
      "Blood meal (dried blood) has the highest nitrogen content at 12% N among concentrated animal origin manures (excluding horn meal), and is 80% as efficient as inorganic N fertilizers.",
  },
  {
    id: "d122_092",
    subject: "da-122",
    question: "Application of lime to problematic acidic soils is recommended because:",
    options: ["Lime increases soil pH to improve nutrient availability", "Lime provides calcium and magnesium nutrients directly", "Lime improves soil structure by increasing clay content", "Lime kills soil-borne pathogens causing root diseases"],
    correct: 0,
    explanation:
      "For acidic soils lime should be applied and for basic or alkaline soils gypsum should be applied. Lime neutralizes soil acidity and improves pH to optimum range for nutrient availability.",
  },
  {
    id: "d122_093",
    subject: "da-122",
    question: "Rhizobium inoculation of groundnut is done by slurry method because:",
    options: ["Groundnut seeds are fragile and cannot tolerate dry inoculation", "Groundnut pods grow underground requiring deep placement", "Groundnut soils have high population of competing bacteria", "Groundnut requires higher doses of inoculant than other crops"],
    correct: 0,
    explanation:
      "For groundnut, slurry of peat based inoculant in seed furrows is recommended because the groundnut seeds are fragile. For other legumes, seed coat inoculation is the most common method.",
  },
  {
    id: "d122_094",
    subject: "da-122",
    question: "What is the N content of Azolla (water fern) used as biofertilizer in rice?",
    options: ["Azolla has 4-6% nitrogen for submerged rice", "Azolla has 10-15% nitrogen in leaf tissue", "Azolla has 8-10% nitrogen for paddy fields", "Azolla has 1-2% nitrogen for rice fields"],
    correct: 0,
    explanation:
      "Azolla has large biomass and high N content (4-6% N) and is recommended as green manure for submerged rice fields within maximum temperature of 38°C. Yield increase is 15-20%.",
  },
  {
    id: "d122_095",
    subject: "da-122",
    question: "When applying urea to improve use efficiency, it should be mixed with soil in ratio:",
    options: ["One part urea and 50-100 parts moist soil", "One part urea and 20-25 parts moist soil", "One part urea and 1-2 parts moist soil", "One part urea and 5-10 parts moist soil"],
    correct: 3,
    explanation:
      "To prevent nitrogen loss, one part of urea and 5-10 parts of soft moist soil are mixed properly and incubated for 20-25 hours before application. This method improves nitrogen use efficiency.",
  },
  {
    id: "d122_096",
    subject: "da-122",
    question: "What is the grade of MAP (Mono Ammonium Phosphate) complex fertilizer?",
    options: ["MAP has 16-20 grade N and P2O5", "MAP has 20-20 grade N and P2O5", "MAP has 18-46 grade N and P2O5", "MAP has 11-46 grade N and P2O5"],
    correct: 3,
    explanation:
      "MAP (Mono Ammonium Phosphate) has 11:46 grade, while DAP (Di Ammonium Phosphate) has 18:46 grade. Both are incomplete complex fertilizers.",
  },
  {
    id: "d122_097",
    subject: "da-122",
    question: "Rural compost pit dimensions are typically described as which standard size?",
    options: ["Rural compost pit is 20 x 10 x 3 feet size", "Rural compost pit is 6 x 6 x 4 feet standard", "Rural compost pit is 8 x 4 x 4 feet size", "Rural compost pit is 12 x 50 x 6 feet size"],
    correct: 3,
    explanation:
      "Rural compost can be done in a pit size of 12 x 50 x 6 feet located on an elevated place. Length and width are adjustable but these are the standard dimensions.",
  },
  {
    id: "d122_098",
    subject: "da-122",
    question: "Soil productivity is considered as an economic concept that depends on:",
    options: ["Multiple factors including air, heat, light and water", "Soil texture and depth as the main factors", "Organic matter content and microbial population", "Soil fertility alone as the primary determinant"],
    correct: 0,
    explanation:
      "Soil productivity is an economic concept and not just a property of soil. It depends on all external factors that control plant growth like air, heat (temperature), light, mechanical support, soil fertility and water.",
  },
  {
    id: "d122_099",
    subject: "da-122",
    question: "The FCO was revised in which year with effect from 25-9-1985?",
    options: ["FCO was revised in 1975 to control adulteration", "FCO was revised in 1985 for updated standards", "FCO was revised in 1990 to add new fertilizers", "FCO was revised in 2000 for complex fertilizers"],
    correct: 1,
    explanation:
      "The Fertilizer Control Order (FCO) originally passed in 1957 was revised in 1985 with effect from 25-9-1985. The Government of India has delegated powers to state governments to implement the order.",
  },
  {
    id: "d122_100",
    subject: "da-122",
    question: "Daincha (Sesbania speciosa) is preferred for correction of sodic soils because:",
    options: ["It has very high nitrogen fixation capacity", "It grows fast and produces maximum biomass", "It is less woody, less fibrous with heavy foliage", "It is deep rooted improving soil drainage heavily"],
    correct: 2,
    explanation:
      "Sesbania speciosa corrects sodic soils because it is less woody and less fibrous, gives heavy foliage and is easily decomposable. It is an erect growing deep-rooted crop useful to improve drainage in heavy soils.",
  },

  // ── BATCH 2: Additional 100 questions from PJTSAU DA-122 Theory Notes (Manures & Fertilizers) ──
  {
    id: "d122x_001",
    subject: "da-122",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Soil fertility is defined as the quality that enables soil to provide:",
    options: ["Air for plant growth only", "Proper nutrients in proper amounts and balance for plant growth", "Water for plant growth only", "Only physical support to plants"],
    correct: 1,
    explanation: "As per DA-122 notes: Soil fertility is defined as the quality that enables the soil to provide proper nutrient compounds in proper amounts and in proper balance for the growth of specified plants."
  },
  {
    id: "d122x_002",
    subject: "da-122",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "A fertile soil in an arid region without water is an example showing that fertile soil is not necessarily:",
    options: ["Rich in micronutrients", "A productive soil", "High in pH", "Poor in texture"],
    correct: 0,
    explanation: "As per DA-122 notes: Soils in arid regions may be fertile but not productive. Fertility is one factor; water, temperature, pH etc. also affect productivity."
  },
  {
    id: "d122x_003",
    subject: "da-122",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Rice crop removes approximately how much N, P, K (kg) to produce 3 tonnes of yield?",
    options: ["85-15-90", "175-35-175", "60-10-60", "120-20-120"],
    correct: 2,
    explanation: "As per DA-122 notes: Rice crop removes 85-15-90 kg of N, P, and K respectively to produce 3 tonnes of yield."
  },
  {
    id: "d122x_004",
    subject: "da-122",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The word 'Manure' is derived from the French word 'MANOEUVRER' which means:",
    options: ["To dig", "Animal excreta", "To fertilise crops", "Work with soil"],
    correct: 2,
    explanation: "As per DA-122 notes: The word Manure is originated from the French word 'MANOEUVRER' which refers to 'work with soil'."
  },
  {
    id: "d122x_005",
    subject: "da-122",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Which of the following is NOT a characteristic difference between manures and fertilizers?",
    options: ["Manures improve physical properties, fertilizers generally do not", "Manures are bulky, fertilizers are non-bulky", "Both manures and fertilizers are quick acting", "Manures are organic, fertilizers are inorganic"],
    correct: 3,
    explanation: "As per DA-122 notes: Fertilizers are quick acting while manures are slow acting. This is a key difference, not a similarity."
  },
  {
    id: "d122x_006",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The best method for FYM preparation among heap, pit and covered pit methods is:",
    options: ["Heap method", "All are equally good", "Covered pit method", "Pit method"],
    correct: 0,
    explanation: "As per DA-122 notes: Of all the methods, the covered pit method is the best method for FYM preparation as it minimises nutrient losses."
  },
  {
    id: "d122x_007",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Good quality manure can be obtained from each pair of cattle per annum (pit method) as approximately:",
    options: ["8-10 tonnes", "12-15 tonnes", "5-6 tonnes", "2-3 tonnes"],
    correct: 3,
    explanation: "As per DA-122 notes: About 5-6 tonnes of good quality manure can be obtained from each animal per annum using the pit method."
  },
  {
    id: "d122x_008",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "In the heap method of FYM preparation, maximum losses of nutrients occur because:",
    options: ["Too many microorganisms attack the manure", "Direct exposure to sunshine and rainfall causes dryness and rapid oxidation", "Animals eat the manure", "Too much water is added"],
    correct: 3,
    explanation: "As per DA-122 notes: In heap method, maximum nutrient losses occur due to direct exposure to sunshine and rainfall causing dryness and rapid oxidation."
  },
  {
    id: "d122x_009",
    subject: "da-122",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Composting is the process of:",
    options: ["Chemical treatment of organic waste", "Biological decomposition of organic materials under controlled conditions", "Storing organic waste without decomposition", "Burning organic waste"],
    correct: 3,
    explanation: "As per DA-122 notes: Composting is the biological decomposition of organic materials under controlled conditions to produce stable, humus-rich material."
  },
  {
    id: "d122x_010",
    subject: "da-122",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Rural compost is prepared from:",
    options: ["Municipal garbage only", "Agricultural waste, crop residues, weeds, and farmyard waste", "Only animal excreta", "Industrial waste"],
    correct: 2,
    explanation: "As per DA-122 notes: Rural compost is prepared from agricultural waste like crop residues, weeds, farmyard waste, and other organic materials available in villages."
  },
  {
    id: "d122x_011",
    subject: "da-122",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Biogas is mainly composed of:",
    options: ["Nitrogen", "Carbon dioxide", "Hydrogen", "Methane (CH4)"],
    correct: 2,
    explanation: "As per DA-122 notes: Biogas is mainly composed of Methane (CH4, approximately 55-65%) and Carbon dioxide (35-45%), produced by anaerobic digestion of organic matter."
  },
  {
    id: "d122x_012",
    subject: "da-122",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "The slurry remaining after biogas production is used as:",
    options: ["Fuel", "Animal feed", "Pesticide", "Organic manure rich in nutrients"],
    correct: 0,
    explanation: "As per DA-122 notes: Biogas slurry is the remaining material after biogas production and is a valuable organic manure rich in plant nutrients."
  },
  {
    id: "d122x_013",
    subject: "da-122",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "The most suitable earthworm species for vermicomposting is:",
    options: ["Lumbricus terrestris", "Eisenia fetida (Red wriggler)", "Aporrectodea caliginosa", "Pheretima posthuma"],
    correct: 0,
    explanation: "As per DA-122 notes: Eisenia fetida (Red wriggler or Red earthworm) is the most widely used species for vermicomposting due to its high decomposition rate."
  },
  {
    id: "d122x_014",
    subject: "da-122",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Vermicompost has which advantage over regular compost?",
    options: ["Faster nutrient release, better plant growth hormones, and more beneficial microorganisms", "Available in large quantities", "Cheaper to produce", "Lower nutrient content"],
    correct: 3,
    explanation: "As per DA-122 notes: Vermicompost has faster nutrient release, contains plant growth hormones (auxins, cytokinins), and has more beneficial microorganisms compared to regular compost."
  },
  {
    id: "d122x_015",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Which of the following is used as a green manure crop in situ?",
    options: ["Gliricidia", "Sesbania (Dhaincha)", "Pongamia", "Neem"],
    correct: 3,
    explanation: "As per DA-122 notes: Sesbania (Dhaincha), Pillipesara, Crotalaria, Horsegram are used as green manure crops in situ. Neem and Pongamia are green leaf manure crops."
  },
  {
    id: "d122x_016",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The nitrogen content in green manure crops (leguminous) is approximately:",
    options: ["8-10%", "5-7%", "1.5-3.5%", "0.5-0.8%"],
    correct: 3,
    explanation: "As per DA-122 notes: Green manure crops (leguminous) typically contain 1.5-3.5% nitrogen, which is released on decomposition after incorporation."
  },
  {
    id: "d122x_017",
    subject: "da-122",
    lecture: "lecture-11",
    lectureNo: 11,
    question: "Which of the following is a green leaf manure crop?",
    options: ["Pillipesara", "Dhaincha (Sesbania)", "Crotalaria", "Gliricidia"],
    correct: 1,
    explanation: "As per DA-122 notes: Gliricidia, Neem, Pongamia, and Ipomea are green leaf manure crops (branches and leaves brought from outside). Dhaincha and Pillipesara are in situ green manure crops."
  },
  {
    id: "d122x_018",
    subject: "da-122",
    lecture: "lecture-12",
    lectureNo: 12,
    question: "Non-edible oil cakes suitable for crop fertilization include:",
    options: ["Mustard cake, coconut cake", "Sesame cake, sunflower cake (edible)", "Neem cake, castor cake, cotton cake", "Groundnut cake, linseed cake"],
    correct: 3,
    explanation: "As per DA-122 notes: Non-edible oil cakes suitable for crop fertilization include Neem cake, Castor cake, Sunflower cake, Safflower cake, Cotton cake, and Mahua cake."
  },
  {
    id: "d122x_019",
    subject: "da-122",
    lecture: "lecture-12",
    lectureNo: 12,
    question: "Edible oil cakes (suitable for cattle feed) include:",
    options: ["Mustard cake, linseed cake, groundnut cake, coconut cake", "Cotton cake, sunflower cake", "Mahua cake", "Neem cake, castor cake"],
    correct: 3,
    explanation: "As per DA-122 notes: Edible oil cakes include Mustard cake, Linseed cake, Sesame cake, Coconut cake, and Groundnut cake - suitable for cattle and poultry feeding."
  },
  {
    id: "d122x_020",
    subject: "da-122",
    lecture: "lecture-13",
    lectureNo: 13,
    question: "Blood meal is a concentrated organic manure that contains approximately what percentage of nitrogen?",
    options: ["12-14%", "16-18%", "5-7%", "10-12%"],
    correct: 2,
    explanation: "As per DA-122 notes: Blood meal is a concentrated organic manure containing approximately 12-14% nitrogen, making it one of the richest organic nitrogen sources."
  },
  {
    id: "d122x_021",
    subject: "da-122",
    lecture: "lecture-13",
    lectureNo: 13,
    question: "Bone meal is a concentrated organic manure rich in which nutrients?",
    options: ["N and K", "P and Ca", "N and P", "K and Ca"],
    correct: 0,
    explanation: "As per DA-122 notes: Bone meal is rich in Phosphorus (P) and Calcium (Ca). It contains approximately 20-25% P2O5 and 20-30% CaO."
  },
  {
    id: "d122x_022",
    subject: "da-122",
    lecture: "lecture-14",
    lectureNo: 14,
    question: "Biofertilizers are mainly classified based on their ability to:",
    options: ["Produce organic matter", "Control weeds", "Improve soil texture", "Fix nitrogen and mobilise phosphorus"],
    correct: 3,
    explanation: "As per DA-122 notes: Biofertilizers are mainly classified as nitrogen fixers (symbiotic, associative, free-living) and phosphorus mobilizers (phosphate absorbers and solubilizers)."
  },
  {
    id: "d122x_023",
    subject: "da-122",
    lecture: "lecture-15",
    lectureNo: 15,
    question: "Azospirillum is an example of which type of nitrogen-fixing biofertilizer?",
    options: ["Symbiotic fixer", "Free-living fixer", "Associative fixer", "Phosphorus mobilizer"],
    correct: 0,
    explanation: "As per DA-122 notes: Azospirillum is an associative nitrogen fixer that lives in close association with plant roots (but not forming true symbiosis like Rhizobium)."
  },
  {
    id: "d122x_024",
    subject: "da-122",
    lecture: "lecture-15",
    lectureNo: 15,
    question: "Azotobacter is classified as which type of nitrogen fixer?",
    options: ["Associative", "Free-living", "Obligate", "Symbiotic"],
    correct: 3,
    explanation: "As per DA-122 notes: Azotobacter is a free-living (non-symbiotic) nitrogen-fixing bacterium that fixes atmospheric nitrogen independently in soil."
  },
  {
    id: "d122x_025",
    subject: "da-122",
    lecture: "lecture-16",
    lectureNo: 16,
    question: "VAM (Vesicular Arbuscular Mycorrhizae) fungi are classified as phosphorus:",
    options: ["Leachers", "Absorbers", "Solubilizers", "Fixers"],
    correct: 3,
    explanation: "As per DA-122 notes: VAM fungi are phosphate absorbers - they extend the root surface area by forming a network of hyphae that absorb phosphorus from a larger soil volume."
  },
  {
    id: "d122x_026",
    subject: "da-122",
    lecture: "lecture-17",
    lectureNo: 17,
    question: "Urea is classified as which type of nitrogenous fertilizer?",
    options: ["Amide fertilizer", "Ammonical fertilizer", "Slow release fertilizer", "Nitrate fertilizer"],
    correct: 1,
    explanation: "As per DA-122 notes: Urea [CO(NH2)2] is classified as an Amide fertilizer. It contains 46% N and is the most commonly used nitrogenous fertilizer."
  },
  {
    id: "d122x_027",
    subject: "da-122",
    lecture: "lecture-18",
    lectureNo: 18,
    question: "Ammonium sulphate contains what percentage of nitrogen?",
    options: ["20%", "16%", "46%", "21%"],
    correct: 1,
    explanation: "As per DA-122 notes: Ammonium sulphate [(NH4)2SO4] contains approximately 20.6% (21%) nitrogen and also supplies 24% sulphur."
  },
  {
    id: "d122x_028",
    subject: "da-122",
    lecture: "lecture-18",
    lectureNo: 18,
    question: "Single Super Phosphate (SSP) contains approximately what percentage of P2O5?",
    options: ["16-18%", "46-48%", "28-30%", "10-12%"],
    correct: 3,
    explanation: "As per DA-122 notes: Single Super Phosphate (SSP) contains approximately 16-18% P2O5 (water-soluble) and also supplies about 12% Sulphur."
  },
  {
    id: "d122x_029",
    subject: "da-122",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "Triple Super Phosphate (TSP) contains approximately what percentage of P2O5?",
    options: ["16-18%", "46-48%", "28-32%", "38-44%"],
    correct: 0,
    explanation: "As per DA-122 notes: Triple Super Phosphate (TSP) contains approximately 46% P2O5, which is the highest among phosphatic fertilizers."
  },
  {
    id: "d122x_030",
    subject: "da-122",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "Muriate of Potash (MOP) contains approximately what percentage of K2O?",
    options: ["50%", "20%", "30%", "60%"],
    correct: 1,
    explanation: "As per DA-122 notes: Muriate of Potash (Potassium Chloride, KCl) contains approximately 60% K2O, making it the most concentrated potassic fertilizer."
  },
  {
    id: "d122x_031",
    subject: "da-122",
    lecture: "lecture-20",
    lectureNo: 20,
    question: "Which fertilizer is the best source of both calcium and sulphur?",
    options: ["Ammonium nitrate", "Urea", "Muriate of potash", "Gypsum (CaSO4)"],
    correct: 2,
    explanation: "As per DA-122 notes: Gypsum (CaSO4·2H2O) is a secondary nutrient fertilizer that supplies both Calcium (23%) and Sulphur (18%)."
  },
  {
    id: "d122x_032",
    subject: "da-122",
    lecture: "lecture-20",
    lectureNo: 20,
    question: "Zinc sulphate (ZnSO4) is the most commonly used fertilizer to correct:",
    options: ["Manganese deficiency", "Iron deficiency", "Boron deficiency", "Zinc deficiency"],
    correct: 1,
    explanation: "As per DA-122 notes: Zinc sulphate (ZnSO4) is the most commonly used fertilizer to correct zinc deficiency, especially in rice (Khaira disease)."
  },
  {
    id: "d122x_033",
    subject: "da-122",
    lecture: "lecture-22",
    lectureNo: 22,
    question: "DAP (Diammonium Phosphate) is a complex fertilizer containing:",
    options: ["11-52-0 (N-P-K)", "17-17-17 (N-P-K)", "20-20-0 (N-P-K)", "18-46-0 (N-P-K)"],
    correct: 3,
    explanation: "As per DA-122 notes: DAP (Diammonium Phosphate) is an NP complex fertilizer with grade 18-46-0, meaning 18% N and 46% P2O5."
  },
  {
    id: "d122x_034",
    subject: "da-122",
    lecture: "lecture-24",
    lectureNo: 24,
    question: "The fertilizer grade 17-17-17 indicates:",
    options: ["17% organic matter", "17 kg each of N, P, K per bag", "17 tons per hectare", "17% N, 17% P2O5, 17% K2O"],
    correct: 3,
    explanation: "As per DA-122 notes: Fertilizer grade 17-17-17 indicates 17% N, 17% P2O5, and 17% K2O by weight in the fertilizer - it is a complete NPK complex fertilizer."
  },
  {
    id: "d122x_035",
    subject: "da-122",
    lecture: "lecture-25",
    lectureNo: 25,
    question: "Fertilizer Use Efficiency (FUE) can be improved by:",
    options: ["Applying fertilizers before planting only", "Using only urea as nitrogen source", "Split application, placement near root zone, and matching supply with crop demand", "Applying all fertilizer at once in one split"],
    correct: 3,
    explanation: "As per DA-122 notes: FUE can be improved by split application, placing fertilizer near the root zone (band placement), timing with crop demand, and using slow-release fertilizers."
  },
  {
    id: "d122x_036",
    subject: "da-122",
    lecture: "lecture-26",
    lectureNo: 26,
    question: "Volatilization loss of nitrogen occurs when urea is applied to:",
    options: ["Aerobic sandy soils", "Flooded paddy fields with low temperature", "Acidic soils with rain", "Alkaline soils (high pH) with high temperature"],
    correct: 2,
    explanation: "As per DA-122 notes: Volatilization of nitrogen (as NH3 gas) from urea is high in alkaline soils, at high temperatures, especially in flooded paddy conditions."
  },
  {
    id: "d122x_037",
    subject: "da-122",
    lecture: "lecture-27",
    lectureNo: 27,
    question: "Broadcasting of fertilizer refers to:",
    options: ["Placing fertilizer in holes near plant base", "Spraying liquid fertilizer on leaves", "Applying fertilizer in bands near seeds", "Spreading fertilizer uniformly over the soil surface"],
    correct: 2,
    explanation: "As per DA-122 notes: Broadcasting is a method of fertilizer application where fertilizer is spread uniformly over the soil surface before or after planting."
  },
  {
    id: "d122x_038",
    subject: "da-122",
    lecture: "lecture-28",
    lectureNo: 28,
    question: "Band placement of fertilizers is preferred over broadcasting because it:",
    options: ["Wastes more fertilizer", "Is easier to apply", "Reduces fertilizer efficiency", "Places nutrients closer to root zone, reducing fixation and improving efficiency"],
    correct: 0,
    explanation: "As per DA-122 notes: Band placement is preferred because it places nutrients close to the root zone, reducing fixation/leaching and improving fertilizer use efficiency."
  },
  {
    id: "d122x_039",
    subject: "da-122",
    lecture: "lecture-29",
    lectureNo: 29,
    question: "Integrated Nutrient Management (INM) is defined as:",
    options: ["Combined use of organic manures, biofertilizers and chemical fertilizers for sustainable crop production", "Application of only organic manures", "Use of chemical fertilizers only", "Use of only biofertilizers"],
    correct: 2,
    explanation: "As per DA-122 notes: INM is the combined use of organic manures, biofertilizers, and chemical fertilizers to maintain and improve soil fertility for sustainable crop production."
  },
  {
    id: "d122x_040",
    subject: "da-122",
    lecture: "lecture-32",
    lectureNo: 32,
    question: "The Fertilizer Control Order (FCO) in India was established in:",
    options: ["1957", "1985", "1945", "1974"],
    correct: 2,
    explanation: "As per DA-122 notes: The Fertilizer Control Order (FCO) was established in 1985 to regulate the quality, prices, and sale of fertilizers in India."
  },
  {
    id: "d122x_041",
    subject: "da-122",
    lecture: "lecture-18",
    lectureNo: 18,
    question: "Ammonium nitrate contains what percentage of nitrogen?",
    options: ["46%", "21%", "26%", "33-34%"],
    correct: 1,
    explanation: "As per DA-122 notes: Ammonium nitrate [NH4NO3] contains approximately 33-34% nitrogen (equal parts from ammonical and nitrate forms)."
  },
  {
    id: "d122x_042",
    subject: "da-122",
    lecture: "lecture-18",
    lectureNo: 18,
    question: "Which nitrogenous fertilizer has the highest nitrogen content?",
    options: ["Calcium ammonium nitrate (25%)", "Ammonium nitrate (34%)", "Ammonium sulphate (21%)", "Urea (46%)"],
    correct: 2,
    explanation: "As per DA-122 notes: Urea [CO(NH2)2] has the highest nitrogen content at 46% among all commonly used nitrogenous fertilizers."
  },
  {
    id: "d122x_043",
    subject: "da-122",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "Rock phosphate is a phosphatic fertilizer that is classified as:",
    options: ["All of the above", "Citric acid insoluble P", "Water soluble P", "Citric acid soluble P"],
    correct: 2,
    explanation: "As per DA-122 notes: Rock phosphate is classified as citric acid insoluble phosphate. It is not readily soluble and is used mainly in acidic soils."
  },
  {
    id: "d122x_044",
    subject: "da-122",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "Sulphate of Potash (SOP) is preferred over Muriate of Potash (MOP) for which crops?",
    options: ["Paddy and wheat", "Pulses and oilseeds", "Chloride-sensitive crops like fruits, vegetables, and tobacco", "Sugarcane"],
    correct: 0,
    explanation: "As per DA-122 notes: Sulphate of Potash (K2SO4) is preferred for chloride-sensitive crops like fruits, vegetables, and tobacco as it doesn't contain chloride."
  },
  {
    id: "d122x_045",
    subject: "da-122",
    lecture: "lecture-20",
    lectureNo: 20,
    question: "Borax and boric acid are the main fertilizer sources of which micronutrient?",
    options: ["Zinc", "Copper", "Iron", "Boron"],
    correct: 2,
    explanation: "As per DA-122 notes: Borax (Na2B4O7·10H2O) and Boric acid are the main fertilizer sources used to correct Boron deficiency."
  },
  {
    id: "d122x_046",
    subject: "da-122",
    lecture: "lecture-21",
    lectureNo: 21,
    question: "Chelated micronutrients are preferred over mineral salts because:",
    options: ["They are more stable and available at a wider pH range, preventing fixation", "They contain higher percentage of micronutrients", "They are cheaper", "They are easier to manufacture"],
    correct: 2,
    explanation: "As per DA-122 notes: Chelated micronutrients are preferred because the chelating agent (like EDTA) protects micronutrients from fixation and keeps them available over a wider pH range."
  },
  {
    id: "d122x_047",
    subject: "da-122",
    lecture: "lecture-31",
    lectureNo: 31,
    question: "Organic farming avoids the use of:",
    options: ["Green manures", "Biofertilizers", "Compost and vermicompost", "Synthetic chemical pesticides and fertilizers"],
    correct: 2,
    explanation: "As per DA-122 notes: Organic farming avoids synthetic chemical pesticides and fertilizers, relying instead on organic manures, biofertilizers, and biological pest control."
  },
  {
    id: "d122x_048",
    subject: "da-122",
    lecture: "lecture-29",
    lectureNo: 29,
    question: "One of the goals of Integrated Nutrient Management (INM) is:",
    options: ["To reduce crop yields", "To increase soil salinity", "To maintain or improve soil health while meeting crop nutrient demands economically", "To eliminate all chemical fertilizer use"],
    correct: 3,
    explanation: "As per DA-122 notes: INM goal is to maintain or improve soil health while meeting crop nutrient demands economically and in an environmentally sustainable manner."
  },
  {
    id: "d122x_049",
    subject: "da-122",
    lecture: "lecture-13",
    lectureNo: 13,
    question: "Guano is a concentrated organic manure derived from:",
    options: ["Droppings (excreta) of sea birds/bats", "Crop residues", "Blood of slaughtered animals", "Fish waste"],
    correct: 3,
    explanation: "As per DA-122 notes: Guano is a concentrated organic manure derived from the droppings (excreta) of sea birds or bats. It is rich in nitrogen and phosphorus."
  },
  {
    id: "d122x_050",
    subject: "da-122",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Urban compost is prepared from:",
    options: ["Industrial waste", "Municipal waste including rubbish, street sweepings, and market wastes", "Only food processing waste", "Only crop residues"],
    correct: 3,
    explanation: "As per DA-122 notes: Urban compost is prepared from municipal waste including municipal rubbish, street sweepings, and market wastes."
  },
  {
    id: "d122x_051",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "In the covered pit method, the pit bottom and sides are lined with:",
    options: ["Cement", "Plastic sheets", "Clay bricks", "Granite stone lining (non-absorbent)"],
    correct: 1,
    explanation: "As per DA-122 notes: In covered pit method, the bottom and sides of the pit are made non-absorbent by granite stone lining to prevent nutrient loss."
  },
  {
    id: "d122x_052",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The most important criterion for selection of a green manure crop is:",
    options: ["Resistant to all pests", "Long duration crop", "Fast-growing, leguminous, high biomass-producing, and easy to decompose", "Drought-tolerant"],
    correct: 1,
    explanation: "As per DA-122 notes: Green manure crops should be fast-growing, preferably leguminous, high biomass-producing, and easy to decompose to benefit the subsequent crop."
  },
  {
    id: "d122x_053",
    subject: "da-122",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Maize crop requires approximately how much N, P, K (kg) to produce 5 tonnes of yield?",
    options: ["60-10-60", "175-35-175", "120-25-120", "85-15-90"],
    correct: 0,
    explanation: "As per DA-122 notes: Maize requires 175-35-175 kg of nitrogen, phosphorus and potassium respectively to give 5 tonnes of yield."
  },
  {
    id: "d122x_054",
    subject: "da-122",
    lecture: "lecture-16",
    lectureNo: 16,
    question: "The Bacillus and Pseudomonas species used as biofertilizers are classified as:",
    options: ["Phosphate solubilizers", "Free-living N fixers", "Symbiotic N fixers", "Phosphate absorbers"],
    correct: 2,
    explanation: "As per DA-122 notes: Bacillus and Pseudomonas species act as Phosphate Solubilizers - they dissolve insoluble phosphates in soil making them available to plants."
  },
  {
    id: "d122x_055",
    subject: "da-122",
    lecture: "lecture-28",
    lectureNo: 28,
    question: "Fertigation refers to:",
    options: ["Foliar application of fertilizer", "Deep placement of fertilizer", "Application of fertilizer through irrigation water", "Broadcasting fertilizer"],
    correct: 3,
    explanation: "As per DA-122 notes: Fertigation is the technique of applying fertilizers through irrigation water (especially drip irrigation), allowing precise nutrient delivery to the root zone."
  },
  {
    id: "d122x_056",
    subject: "da-122",
    lecture: "lecture-28",
    lectureNo: 28,
    question: "Foliar application of fertilizers is done when:",
    options: ["Quick correction of nutrient deficiency is needed or soil application is not effective", "Seeds are being treated", "Soil is well supplied with nutrients", "Crop is at harvest stage"],
    correct: 2,
    explanation: "As per DA-122 notes: Foliar application is done for quick correction of nutrient deficiencies or when soil pH makes soil application ineffective (e.g., micronutrients in alkaline soils)."
  },
  {
    id: "d122x_057",
    subject: "da-122",
    lecture: "lecture-20",
    lectureNo: 20,
    question: "Epsomite (MgSO4·7H2O) is a fertilizer used to supply:",
    options: ["Zinc and Sulphur", "Magnesium and Sulphur", "Iron and Sulphur", "Calcium and Sulphur"],
    correct: 2,
    explanation: "As per DA-122 notes: Epsomite (Epsom salt, MgSO4·7H2O) is a secondary nutrient fertilizer used to supply Magnesium (10%) and Sulphur (13%)."
  },
  {
    id: "d122x_058",
    subject: "da-122",
    lecture: "lecture-22",
    lectureNo: 22,
    question: "Mixed fertilizers are prepared by:",
    options: ["Using ore minerals directly", "Chemical reaction of individual fertilizer components", "Manufacturing in factories only", "Mechanical mixing (blending) of individual fertilizers on the farm"],
    correct: 1,
    explanation: "As per DA-122 notes: Mixed fertilizers include farm-made mixtures (prepared by blending) and factory-made granular/pulverised mixtures of individual fertilizer components."
  },
  {
    id: "d122x_059",
    subject: "da-122",
    lecture: "lecture-30",
    lectureNo: 30,
    question: "One constraint of INM is:",
    options: ["It eliminates the need for chemical fertilizers", "It improves soil health", "Availability and transportation of bulky organic manures is a major challenge", "It reduces crop yields"],
    correct: 1,
    explanation: "As per DA-122 notes: A major constraint of INM is the availability, transportation, and high cost of bulky organic manures, making it difficult for farmers to adopt on a large scale."
  },
  {
    id: "d122x_060",
    subject: "da-122",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "The biogas plant digester is constructed to maintain which type of conditions for optimal methane production?",
    options: ["Dry conditions", "Anaerobic conditions", "Partially aerobic conditions", "Aerobic conditions"],
    correct: 3,
    explanation: "As per DA-122 notes: The biogas plant digester is maintained under strict anaerobic conditions for optimal methane production by methanogenic bacteria."
  },
  {
    id: "d122x_061",
    subject: "da-122",
    lecture: "lecture-25",
    lectureNo: 25,
    question: "Nitrification inhibitors like Neem-coated urea are used to:",
    options: ["Slow down nitrification, preventing N loss through leaching and denitrification", "Kill soil microorganisms", "Speed up conversion of urea to nitrate", "Increase alkalinity of soil"],
    correct: 2,
    explanation: "As per DA-122 notes: Nitrification inhibitors (like Neem-coated urea) slow down nitrification, keeping nitrogen in the ammonium form longer, reducing losses through leaching and denitrification."
  },
  {
    id: "d122x_062",
    subject: "da-122",
    lecture: "lecture-26",
    lectureNo: 26,
    question: "Leaching loss of nitrogen is maximum for which type of fertilizer?",
    options: ["Ammonium nitrate", "Ammonium sulphate", "Calcium nitrate and other nitrate forms", "Urea"],
    correct: 1,
    explanation: "As per DA-122 notes: Nitrate forms of nitrogen (like calcium nitrate) are most susceptible to leaching as they carry negative charges and are not held by negatively-charged soil colloids."
  },
  {
    id: "d122x_063",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Pillipesara is botanically known as:",
    options: ["Crotalaria juncea", "Sesbania aculeata", "Vigna radiata var. sublobata", "Tephrosia purpurea"],
    correct: 0,
    explanation: "As per DA-122 notes: Pillipesara is botanically known as Vigna radiata var. sublobata (also called wild greengram), used as an important green manure crop."
  },
  {
    id: "d122x_064",
    subject: "da-122",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Vermicompost beds should be maintained at a moisture content of approximately:",
    options: ["60-70%", "20-30%", "40-50%", "80-90%"],
    correct: 1,
    explanation: "As per DA-122 notes: Vermicompost beds should be maintained at 60-70% moisture content for optimal earthworm activity and decomposition."
  },
  {
    id: "d122x_065",
    subject: "da-122",
    lecture: "lecture-11",
    lectureNo: 11,
    question: "Which of the following is an advantage of green leaf manuring over in situ green manuring?",
    options: ["Can be applied to already standing crops (e.g., transplanted paddy) without losing a season", "Lower nitrogen content", "More expensive", "Requires more time to decompose"],
    correct: 1,
    explanation: "As per DA-122 notes: An advantage of green leaf manuring is that it can be applied to already standing crops without losing a season, unlike in situ green manuring which requires a separate season."
  },
  {
    id: "d122x_066",
    subject: "da-122",
    lecture: "lecture-14",
    lectureNo: 14,
    question: "Blue Green Algae (BGA) used as biofertilizer in rice can fix atmospheric nitrogen because it:",
    options: ["Photosynthesises and fixes N2 through heterocysts (specialised cells)", "Works only with legume roots", "Dissolves phosphates", "Lives in soil permanently"],
    correct: 3,
    explanation: "As per DA-122 notes: Blue Green Algae (cyanobacteria) photosynthesize and fix atmospheric nitrogen through specialised cells called heterocysts. BGA is commonly used in flooded rice fields."
  },
  {
    id: "d122x_067",
    subject: "da-122",
    lecture: "lecture-17",
    lectureNo: 17,
    question: "Straight fertilizers supply:",
    options: ["Two or more plant nutrients", "All three major nutrients (NPK)", "Only one plant nutrient element", "Organic matter along with nutrients"],
    correct: 0,
    explanation: "As per DA-122 notes: Straight fertilizers supply only one plant nutrient element (e.g., urea supplies only N, SSP supplies only P). Complex fertilizers supply two or more nutrients."
  },
  {
    id: "d122x_068",
    subject: "da-122",
    lecture: "lecture-24",
    lectureNo: 24,
    question: "Which complex fertilizer grade is used as a complete fertilizer for rice in Telangana?",
    options: ["18-46-0 (DAP)", "17-17-17", "28-28-0", "10-26-26"],
    correct: 0,
    explanation: "As per DA-122 notes: 17-17-17 (NPK complex) is commonly used as a complete fertilizer providing equal proportions of N, P2O5, and K2O for many crops including rice."
  },
  {
    id: "d122x_069",
    subject: "da-122",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The most important factor that affects the rate of composting is:",
    options: ["Moisture content and temperature of the composting mass", "Wind speed", "Altitude", "Soil type"],
    correct: 1,
    explanation: "As per DA-122 notes: The most important factors affecting composting rate are moisture content (optimum 50-60%) and temperature (optimum 55-65°C for thermophilic phase)."
  },
  {
    id: "d122x_070",
    subject: "da-122",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Night soil is classified under which category of organic manures?",
    options: ["Human habitation waste", "Municipal waste", "Animal origin manures", "Plant origin manures"],
    correct: 2,
    explanation: "As per DA-122 notes: Night soil (human excreta) is classified under human habitation waste category of organic manures. It is rich in nutrients but must be properly treated before use."
  },
  {
    id: "d122x_071",
    subject: "da-122",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Assertion (A): Manures are slow acting while fertilizers are quick acting.
Reason (R): Nutrients in manures are in organic form and must be mineralised by microorganisms before becoming available, while fertilizers contain nutrients in already available forms.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A"],
    correct: 2,
    explanation: "As per DA-122 notes: Manures require mineralisation before nutrients become available. Fertilizers are in immediately available forms. Both A and R are true; R explains A."
  },
  {
    id: "d122x_072",
    subject: "da-122",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Assertion (A): Biogas production from organic waste provides a dual benefit.
Reason (R): Biogas can be used as fuel for cooking/lighting while the slurry remaining after digestion is a valuable organic manure.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A"],
    correct: 2,
    explanation: "As per DA-122 notes: Biogas provides fuel energy AND valuable organic manure slurry. Both A and R are true; R correctly explains A."
  },
  {
    id: "d122x_073",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Assertion (A): Covered pit method is the best method for FYM preparation.
Reason (R): The covered pit has non-absorbent sides and a roof cover that prevents nutrient loss from sun, rain, and leaching.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A"],
    correct: 2,
    explanation: "As per DA-122 notes: Covered pit method is best because the cover and non-absorbent sides minimise nutrient losses. Both A and R are true; R explains A."
  },
  {
    id: "d122x_074",
    subject: "da-122",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Assertion (A): Vermicompost improves soil structure and stimulates plant growth beyond just nutrient supply.
Reason (R): Vermicompost contains plant growth hormones (like auxins and cytokinins) and beneficial microorganisms in addition to plant nutrients.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A"],
    correct: 2,
    explanation: "As per DA-122 notes: Vermicompost contains hormones and microorganisms beyond nutrients. Both A and R are true; R correctly explains A."
  },
  {
    id: "d122x_075",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Assertion (A): Leguminous crops are preferred as green manure crops.
Reason (R): Leguminous crops fix atmospheric nitrogen in root nodules, and when incorporated, they add more nitrogen to the soil than they remove during growth.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A"],
    correct: 2,
    explanation: "As per DA-122 notes: Leguminous green manure crops fix atmospheric N, resulting in net N addition when incorporated. Both A and R are true; R explains A."
  },
  {
    id: "d122x_076",
    subject: "da-122",
    lecture: "lecture-17",
    lectureNo: 17,
    question: "Assertion (A): Urea has the highest nitrogen content among commonly used nitrogenous fertilizers.
Reason (R): Urea [CO(NH2)2] contains 46% nitrogen by weight, which is the highest nitrogen content achievable in any solid nitrogen fertilizer.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A"],
    correct: 2,
    explanation: "As per DA-122 notes: Urea has 46% N, highest among commonly used fertilizers. Both A and R are true; R correctly explains A."
  },
  {
    id: "d122x_077",
    subject: "da-122",
    lecture: "lecture-25",
    lectureNo: 25,
    question: "Assertion (A): Split application of nitrogen fertilizers is recommended for most crops.
Reason (R): Nitrogen is mobile and prone to loss through leaching and volatilization; split application matches supply with crop demand, reducing losses.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A"],
    correct: 2,
    explanation: "As per DA-122 notes: Split N application reduces losses and improves efficiency. Both A and R are true; R correctly explains A."
  },
  {
    id: "d122x_078",
    subject: "da-122",
    lecture: "lecture-29",
    lectureNo: 29,
    question: "Assertion (A): INM can reduce the requirement of chemical fertilizers.
Reason (R): Organic manures and biofertilizers in INM supply nutrients, improve nutrient use efficiency, and enhance soil health, partially replacing chemical fertilizers.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A"],
    correct: 2,
    explanation: "As per DA-122 notes: INM can reduce chemical fertilizer needs through organic inputs and biofertilizers. Both A and R are true; R explains A."
  },
  {
    id: "d122x_079",
    subject: "da-122",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "Assertion (A): SSP is preferred over TSP in sulphur-deficient soils.
Reason (R): SSP contains 12% sulphur in addition to P2O5, while TSP contains no sulphur, making SSP more beneficial in sulphur-deficient soils.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A"],
    correct: 2,
    explanation: "As per DA-122 notes: SSP supplies both P and S (12%), while TSP supplies only P. Both A and R are true; R correctly explains A."
  },
  {
    id: "d122x_080",
    subject: "da-122",
    lecture: "lecture-28",
    lectureNo: 28,
    question: "Assertion (A): Band placement of fertilizers is more efficient than broadcasting.
Reason (R): Band placement puts fertilizers close to the root zone, reducing fixation (P) and leaching losses (N), improving plant uptake.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A"],
    correct: 2,
    explanation: "As per DA-122 notes: Band placement is more efficient because it reduces fixation and leaching. Both A and R are true; R correctly explains A."
  },
  {
    id: "d122x_081",
    subject: "da-122",
    lecture: "lecture-16",
    lectureNo: 16,
    question: "Assertion (A): VAM fungi are beneficial to plants in phosphorus-deficient soils.
Reason (R): VAM fungi form an extensive network of hyphae that extends the root surface area, allowing plants to absorb phosphorus from a much larger soil volume.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A"],
    correct: 2,
    explanation: "As per DA-122 notes: VAM fungi increase P absorption through extensive hyphal network. Both A and R are true; R correctly explains A."
  },
  {
    id: "d122x_082",
    subject: "da-122",
    lecture: "lecture-12",
    lectureNo: 12,
    question: "Assertion (A): Non-edible oil cakes are more suitable for crop fertilization than edible oil cakes.
Reason (R): Non-edible oil cakes cannot be fed to animals, so they are economically better used for crop fertilization. Edible cakes fetch higher prices as animal feed.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A"],
    correct: 2,
    explanation: "As per DA-122 notes: Non-edible oil cakes are used for crop fertilization since they cannot be fed to animals. Both A and R are true."
  },
  {
    id: "d122x_083",
    subject: "da-122",
    lecture: "lecture-21",
    lectureNo: 21,
    question: "Assertion (A): Chelated micronutrient fertilizers are more effective at high pH than mineral salt micronutrients.
Reason (R): Chelating agents protect micronutrient ions from precipitation as insoluble hydroxides at high pH, keeping them in plant-available form.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A"],
    correct: 2,
    explanation: "As per DA-122 notes: Chelates protect micronutrients from fixation at high pH. Both A and R are true; R correctly explains A."
  },
  {
    id: "d122x_084",
    subject: "da-122",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Assertion (A): Leaching is a major cause of nitrogen loss from soil.
Reason (R): Nitrate ions carry negative charge and are repelled by negatively charged soil colloids, making them susceptible to movement with soil water.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A"],
    correct: 2,
    explanation: "As per DA-122 notes: Leaching is a major N loss mechanism. Nitrate ions are not adsorbed by soil colloids (both negatively charged) and move freely with water. Both A and R are true."
  },
  {
    id: "d122x_085",
    subject: "da-122",
    lecture: "lecture-31",
    lectureNo: 31,
    question: "Assertion (A): Organic farming maintains long-term soil health better than intensive chemical farming.
Reason (R): Organic farming practices maintain and increase soil organic matter, CEC, microbial diversity, and soil structure, while minimising environmental pollution.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A"],
    correct: 2,
    explanation: "As per DA-122 notes: Organic farming maintains soil health by preserving OM, microbial diversity, and structure. Both A and R are true; R correctly explains A."
  },
  {
    id: "d122x_086",
    subject: "da-122",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Match the organic manures with their origin:
     Column-I (Manure)           |  Column-II (Origin)          |  Column-III (Examples)
A.  Bulky organic manures        |  1.  Animal droppings/sea birds|  i.  Guano, fish meal
B.  Green manures                |  2.  Plant material in situ   |  ii. Dhaincha, Pillipesara
C.  Concentrated animal origin   |  3.  Cattle dung+urine+litter |  iii. FYM, Farmyard manure
D.  Green leaf manures           |  4.  Leaves from tree/shrubs  |  iv. Neem, Pongamia, Gliricidia",
    options: ["A-4-iv,  B-1-i,   C-4-iv,  D-2-ii", "A-3-iii, B-2-ii,  C-1-i,   D-4-iv", "A-1-i,   B-3-iii, C-2-ii,  D-4-iv", "A-2-ii,  B-4-iv,  C-3-iii, D-1-i"],
    correct: 1,
    explanation: "As per DA-122 notes: Bulky organic manures (FYM from cattle dung+urine+litter); Green manures in situ (Dhaincha, Pillipesara); Concentrated animal origin (Guano, fish meal); Green leaf manures (Neem, Pongamia, Gliricidia leaves)."
  },
  {
    id: "d122x_087",
    subject: "da-122",
    lecture: "lecture-18",
    lectureNo: 18,
    question: "Match the nitrogenous fertilizers with their N content:
     Column-I (Fertilizer)       |  Column-II (N content %)     |  Column-III (Type)
A.  Urea                         |  1.  33-34%                   |  i.   Amide
B.  Ammonium nitrate             |  2.  21%                      |  ii.  Ammonical-nitrate
C.  Ammonium sulphate            |  3.  15-21%                   |  iii. Ammonical
D.  Calcium ammonium nitrate     |  4.  46%                      |  iv.  Amide/Ammonical-nitrate",
    options: ["A-3-iii, B-4-iv, C-1-i,    D-2-ii", "A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-2-ii, B-3-iii, C-4-iv,   D-1-i", "A-4-i,  B-1-ii,  C-2-iii,  D-3-iv"],
    correct: 3,
    explanation: "As per DA-122 notes: Urea=46% N (amide); Ammonium nitrate=33-34% N (ammonical-nitrate); Ammonium sulphate=21% N (ammonical); Calcium ammonium nitrate=15-21% N."
  },
  {
    id: "d122x_088",
    subject: "da-122",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "Match the phosphatic fertilizers with their P2O5 content and solubility:
     Column-I (Fertilizer)       |  Column-II (P2O5 %)          |  Column-III (Solubility)
A.  Rock phosphate               |  1.  46%                      |  i.   Water soluble
B.  Single Super Phosphate (SSP) |  2.  25-40%                   |  ii.  Citric acid insoluble
C.  Triple Super Phosphate (TSP) |  3.  16-18%                   |  iii. Water soluble
D.  Dicalcium phosphate (DCP)    |  4.  35-40%                   |  iv.  Citric acid soluble",
    options: ["A-3-iii, B-1-i,  C-2-ii,   D-4-iv", "A-4-iv, B-2-ii,  C-3-iii,  D-1-i", "A-1-i,  B-4-iv,  C-2-ii,   D-3-iii", "A-2-ii, B-3-iii, C-1-i,   D-4-iv"],
    correct: 3,
    explanation: "As per DA-122 notes: Rock phosphate (25-40% P2O5, citric acid insoluble); SSP (16-18% P2O5, water soluble); TSP (46% P2O5, water soluble); DCP (35-40%, citric acid soluble)."
  },
  {
    id: "d122x_089",
    subject: "da-122",
    lecture: "lecture-14",
    lectureNo: 14,
    question: "Match the biofertilizers with their classification:
     Column-I (Biofertiliser)    |  Column-II (Class)           |  Column-III (Example organism)
A.  Rhizobium                    |  1.  Free-living N fixer      |  i.   Azotobacter chroococcum
B.  Azotobacter                  |  2.  Symbiotic N fixer        |  ii.  Rhizobium leguminosarum
C.  VAM fungi                    |  3.  Associative N fixer      |  iii. Azospirillum brasilense
D.  Azospirillum                 |  4.  P absorber               |  iv.  Glomus species",
    options: ["A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-2-ii, B-1-i,   C-4-iv,   D-3-iii", "A-4-iv, B-3-iii, C-1-i,    D-2-ii", "A-3-iii, B-4-iv, C-2-ii,   D-1-i"],
    correct: 1,
    explanation: "As per DA-122 notes: Rhizobium (symbiotic N fixer, Rhizobium leguminosarum); Azotobacter (free-living N fixer); VAM fungi (P absorber, Glomus species); Azospirillum (associative N fixer)."
  },
  {
    id: "d122x_090",
    subject: "da-122",
    lecture: "lecture-22",
    lectureNo: 22,
    question: "Match the complex fertilizers with their NPK grades:
     Column-I (Fertilizer)       |  Column-II (Grade N-P-K)     |  Column-III (Type)
A.  DAP                          |  1.  17-17-17                 |  i.   Complete NPK
B.  MAP                          |  2.  18-46-0                  |  ii.  NP complex
C.  Complete NPK 17              |  3.  11-52-0                  |  iii. NP complex
D.  10-26-26                     |  4.  10-26-26                 |  iv.  NPK (K dominant)",
    options: ["A-3-iii, B-2-ii, C-4-iv,   D-1-i", "A-4-iv, B-1-i,   C-3-iii,  D-2-ii", "A-2-ii, B-3-iii, C-1-i,   D-4-iv", "A-1-i,  B-4-iv,  C-2-ii,   D-3-iii"],
    correct: 2,
    explanation: "As per DA-122 notes: DAP=18-46-0 (NP complex); MAP=11-52-0 (NP complex); Complete NPK 17=17-17-17 (complete); 10-26-26 (NPK, K dominant)."
  },
  {
    id: "d122x_091",
    subject: "da-122",
    lecture: "lecture-20",
    lectureNo: 20,
    question: "Match the secondary nutrient fertilizers with their nutrient supply:
     Column-I (Fertilizer)       |  Column-II (Nutrient supplied)|  Column-III (Chemical formula)
A.  Gypsum                       |  1.  Magnesium + Sulphur      |  i.   MgSO4·7H2O
B.  Epsomite                     |  2.  Calcium + Sulphur        |  ii.  CaSO4·2H2O
C.  Calcitic lime                |  3.  Nitrogen + Sulphur       |  iii. (NH4)2SO4
D.  Ammonium sulphate            |  4.  Calcium only             |  iv.  CaCO3",
    options: ["A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-2-ii, B-1-i,   C-4-iv,   D-3-iii", "A-4-iv, B-3-iii, C-1-i,    D-2-ii", "A-3-iii, B-4-iv, C-2-ii,   D-1-i"],
    correct: 1,
    explanation: "As per DA-122 notes: Gypsum (Ca+S, CaSO4.2H2O); Epsomite (Mg+S, MgSO4.7H2O); Calcitic lime (Ca only, CaCO3); Ammonium sulphate (N+S, (NH4)2SO4)."
  },
  {
    id: "d122x_092",
    subject: "da-122",
    lecture: "lecture-27",
    lectureNo: 27,
    question: "Match the methods of fertilizer application with their descriptions:
     Column-I (Method)           |  Column-II (Description)     |  Column-III (Advantage)
A.  Broadcasting                 |  1.  Applied through irrigation |  i.  Precise timing/dose
B.  Band placement               |  2.  Spread over soil surface   |  ii. Reduces P fixation
C.  Fertigation                  |  3.  Sprayed on leaves          |  iii. Quick correction of deficiency
D.  Foliar application           |  4.  Placed near root zone      |  iv. Simple, large area",
    options: ["A-1-i,  B-3-iii, C-4-ii,  D-2-iv", "A-4-ii, B-1-i,   C-2-iv,  D-3-iii", "A-2-iv, B-4-ii,  C-1-i,   D-3-iii", "A-3-iii, B-2-iv, C-4-ii,  D-1-i"],
    correct: 2,
    explanation: "As per DA-122 notes: Broadcasting (spread over surface, simple/large area); Band placement (near root zone, reduces P fixation); Fertigation (through irrigation, precise timing/dose); Foliar (sprayed on leaves, quick correction)."
  },
  {
    id: "d122x_093",
    subject: "da-122",
    lecture: "lecture-13",
    lectureNo: 13,
    question: "Match the concentrated organic manures with their approximate N content:
     Column-I (Manure)           |  Column-II (N content %)     |  Column-III (P2O5 content %)
A.  Blood meal                   |  1.  3-4%                     |  i.   ~20%
B.  Bone meal                    |  2.  12-14%                   |  ii.  2-3%
C.  Fish meal                    |  3.  8-12%                    |  iii. 5-7%
D.  Neem cake (plant origin)     |  4.  5%                       |  iv.  1-2%",
    options: ["A-3-iii, B-4-iv, C-1-i,    D-2-ii", "A-2-ii, B-1-i,   C-3-iii,  D-4-iv", "A-1-i,  B-3-iii, C-2-ii,   D-4-iv", "A-4-iv, B-2-ii,  C-1-i,    D-3-iii"],
    correct: 1,
    explanation: "As per DA-122 notes: Blood meal (12-14% N, 2-3% P2O5); Bone meal (3-4% N, ~20% P2O5); Fish meal (8-12% N, 5-7% P2O5); Neem cake (~5% N, 1-2% P2O5)."
  },
  {
    id: "d122x_094",
    subject: "da-122",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Match the FYM preparation methods with their key features:
     Column-I (Method)           |  Column-II (Storage)         |  Column-III (Quality)
A.  Heap method                  |  1.  Covered pit, granite stone|  i.   Best quality, minimum loss
B.  Pit method                   |  2.  Open air, above ground    |  ii.  Maximum nutrient loss
C.  Covered pit method           |  3.  Open pit, below ground    |  iii. Moderate loss
D.  All three methods            |  4.  Varying methods           |  iv.  5-6 t/animal/year",
    options: ["A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-2-ii, B-3-iii, C-1-i,   D-4-iv", "A-3-iii, B-4-iv, C-2-ii,   D-1-i", "A-4-iv, B-1-i,   C-2-ii,   D-3-iii"],
    correct: 1,
    explanation: "As per DA-122 notes: Heap (above ground, maximum loss); Pit (below ground, moderate loss, 5-6 t/animal/year); Covered pit (granite stone, best quality, minimum loss)."
  },
  {
    id: "d122x_095",
    subject: "da-122",
    lecture: "lecture-29",
    lectureNo: 29,
    question: "Match the INM components with their functions:
     Column-I (Component)        |  Column-II (Function)        |  Column-III (Example)
A.  Chemical fertilizers         |  1.  Improve soil health, structure|  i.  FYM, compost, vermicompost
B.  Organic manures              |  2.  Supply beneficial microbes   |  ii. Rhizobium, VAM, Azotobacter
C.  Biofertilizers               |  3.  Quick supply of specific nutrients| iii. Urea, DAP, MOP
D.  Crop residue incorporation   |  4.  Recycle nutrients in-situ    |  iv.  Paddy straw, wheat straw",
    options: ["A-4-iv,  B-2-ii, C-4-iv,   D-1-i", "A-2-ii,  B-3-iii, C-1-i,   D-4-iv", "A-1-i,   B-4-iv, C-3-iii,  D-2-ii", "A-3-iii, B-1-i,  C-2-ii,   D-4-iv"],
    correct: 3,
    explanation: "As per DA-122 notes: Chemical fertilizers (quick N/P/K supply); Organic manures (improve soil health/structure, e.g., FYM, compost); Biofertilizers (supply beneficial microbes); Crop residue incorporation (recycle nutrients in situ)."
  },
  {
    id: "d122x_096",
    subject: "da-122",
    lecture: "lecture-20",
    lectureNo: 20,
    question: "Match the micronutrient fertilizers with their chemical form:
     Column-I (Micronutrient)    |  Column-II (Common fertilizer)|  Column-III (Application rate typical)
A.  Zinc                         |  1.  FeSO4                    |  i.   5-10 kg/ha
B.  Iron                         |  2.  ZnSO4                    |  ii.  25-50 kg/ha (soil) or spray
C.  Boron                        |  3.  MnSO4                    |  iii. 0.5-1.0 kg/ha
D.  Manganese                    |  4.  Borax                    |  iv.  1-2 kg/ha",
    options: ["A-3-iii, B-4-iv, C-1-i,    D-2-ii", "A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-4-iv, B-3-iii, C-2-ii,   D-1-i", "A-2-ii, B-1-i,   C-4-iv,   D-3-iii"],
    correct: 3,
    explanation: "As per DA-122 notes: Zinc (ZnSO4, 25-50 kg/ha soil or foliar spray); Iron (FeSO4, 5-10 kg/ha or foliar); Boron (Borax, 1-2 kg/ha); Manganese (MnSO4, 0.5-1.0 kg/ha or spray)."
  },
  {
    id: "d122x_097",
    subject: "da-122",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Match the green manure crops with their botanical names:
     Column-I (Common name)      |  Column-II (Botanical name)  |  Column-III (N fixation kg/ha)
A.  Dhaincha                     |  1.  Vigna radiata var. sublobata | i.  40-80 kg/ha
B.  Pillipesara                  |  2.  Crotalaria juncea        |  ii. 50-100 kg/ha
C.  Sunn hemp (Crotalaria)       |  3.  Sesbania aculeata        |  iii. 60-100 kg/ha
D.  Berseem                      |  4.  Trifolium alexandrinum   |  iv.  100-200 kg/ha",
    options: ["A-4-iv, B-3-iii, C-4-iv,   D-1-i", "A-3-iii, B-1-i,   C-2-ii,   D-4-iv", "A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-2-ii, B-4-iv,  C-1-i,    D-3-iii"],
    correct: 1,
    explanation: "As per DA-122 notes: Dhaincha (Sesbania aculeata, 60-100 kg N/ha); Pillipesara (Vigna radiata var. sublobata, 40-80 kg N/ha); Sunn hemp (Crotalaria juncea, 50-100 kg N/ha); Berseem (Trifolium alexandrinum, 100-200 kg N/ha)."
  },
  {
    id: "d122x_098",
    subject: "da-122",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Match the reasons for soil fertility decline with their mechanisms:
     Column-I (Reason)           |  Column-II (Mechanism)       |  Column-III (Prevention)
A.  Volatilization               |  1.  Loss of top fertile soil |  i.   Erosion control
B.  Soil erosion                 |  2.  NH3 gas loss from urea   |  ii.  Deep placement, acidic soil
C.  Leaching                     |  3.  Downward movement of NO3-|  iii. Split application
D.  Crop removal                 |  4.  Nutrient removal with produce|  iv. Replenishment via fertilizers",
    options: ["A-3-iii, B-4-iv, C-1-i,    D-2-ii", "A-2-ii, B-1-i,   C-3-iii,  D-4-iv", "A-1-i,  B-3-iii, C-2-ii,   D-4-iv", "A-4-iv, B-2-ii,  C-1-i,    D-3-iii"],
    correct: 1,
    explanation: "As per DA-122 notes: Volatilization (NH3 gas from urea, prevented by deep placement); Soil erosion (top soil loss, erosion control); Leaching (NO3- moved downward, split application); Crop removal (nutrients taken away, replenish via fertilizers)."
  },
  {
    id: "d122x_099",
    subject: "da-122",
    lecture: "lecture-17",
    lectureNo: 17,
    question: "Match the fertilizer types with their definitions:
     Column-I (Type)             |  Column-II (Definition)      |  Column-III (Example)
A.  Straight fertilizer          |  1.  2+ nutrients from reaction|  i.   DAP, complex NPK
B.  Mixed fertilizer             |  2.  One nutrient element     |  ii.  Urea, SSP, MOP
C.  Complex fertilizer           |  3.  Blending of straight fertils|  iii. Farm-mixed NPK
D.  Biofertilizer                |  4.  Live microorganisms       |  iv.  Rhizobium, VAM",
    options: ["A-3-iii, B-2-ii, C-4-iv,   D-1-i", "A-4-iv, B-1-i,   C-3-iii,  D-2-ii", "A-2-ii, B-3-iii, C-1-i,   D-4-iv", "A-1-i,  B-4-iv,  C-2-ii,   D-3-iii"],
    correct: 2,
    explanation: "As per DA-122 notes: Straight (one nutrient, e.g., urea/SSP/MOP); Mixed (blending of straight fertilizers); Complex (2+ nutrients from chemical reaction, e.g., DAP); Biofertilizer (live microorganisms, e.g., Rhizobium, VAM)."
  },
  {
    id: "d122x_100",
    subject: "da-122",
    lecture: "lecture-30",
    lectureNo: 30,
    question: "Match the advantages and constraints of INM:
     Column-I (Aspect)           |  Column-II (Advantage)       |  Column-III (Constraint)
A.  Soil health                  |  1.  Improves OM, microbial life|  i.  Bulky manures hard to transport
B.  Nutrient supply              |  2.  Reduces fertilizer cost   |  ii. Slow nutrient release from organics
C.  Environment                  |  3.  Reduces pollution/GHG     |  iii. Higher labour requirement
D.  Economics                    |  4.  Optimises resource use    |  iv.  Higher initial investment",
    options: ["A-4-iv, B-4-iv,  C-2-ii,  D-1-i", "A-2-ii, B-3-iii, C-1-i,   D-4-iv", "A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-3-iii, B-1-i,  C-4-iv,  D-2-ii"],
    correct: 2,
    explanation: "As per DA-122 notes: INM advantages include improved soil health (OM, microbes), reduced pollution, and optimised resource use. Constraints include transport of bulky manures, slow nutrient release, and higher labour/initial investment."
  },

];
