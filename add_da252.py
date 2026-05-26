import sys; sys.stdout.reconfigure(encoding='utf-8')

new_questions_lec = '''
  {
    id: "d252l_076", subject: "da-252", lecture: "lecture-16", lectureNo: 16,
    question: "The 'Base Period' in irrigation is defined as the time period between:",
    options: ["Sowing to harvesting of a crop", "First watering during sowing to last watering before harvesting", "Start of the irrigation season to end of the season", "Canal opening to canal closure"],
    correct: 1,
    explanation: "As per DA-252 notes: Base Period is the time period between the first watering of the crop during sowing to last watering before harvesting. It is expressed in days.",
    difficulty: "medium"
  },
  {
    id: "d252l_077", subject: "da-252", lecture: "lecture-16", lectureNo: 16,
    question: "'Delta' in irrigation terminology refers to:",
    options: ["Total area irrigated by one cumec", "Total depth of water required by a crop during the entire base period", "Volume of water stored in a reservoir", "Width of irrigation canal"],
    correct: 1,
    explanation: "As per DA-252 notes: Delta is the total depth of water required by a crop during its entire base period. Formula: Delta (Δ) = Volume of water / Total irrigated area.",
    difficulty: "medium"
  },
  {
    id: "d252l_078", subject: "da-252", lecture: "lecture-16", lectureNo: 16,
    question: "The relationship between Delta (Δ), Duty (D) and Base Period (B) is:",
    options: ["Delta = D x B", "Delta = 8.64 x B/D meters", "Delta = B/D x 10", "Delta = D/(8.64 x B)"],
    correct: 1,
    explanation: "As per DA-252 notes: Delta = 8.64B/D meters, where B is base period in days and D is duty in ha/cumec.",
    difficulty: "hard"
  },
  {
    id: "d252l_079", subject: "da-252", lecture: "lecture-15", lectureNo: 15,
    question: "The process of soil erosion by wind that accounts for 50 to 70% of total wind erosion movement is:",
    options: ["Suspension", "Surface creep", "Saltation", "Deflation"],
    correct: 2,
    explanation: "As per DA-252 notes: Saltation (short bounces/jumps of soil particles along ground surface) accounts for 50 to 70% of total movement in wind erosion. Suspension accounts for up to 15%.",
    difficulty: "medium"
  },
  {
    id: "d252l_080", subject: "da-252", lecture: "lecture-15", lectureNo: 15,
    question: "The minimum wind velocity at a height of 30.5 cm necessary for initiating movement of most erodible soil particles (0.1 mm diameter) is approximately:",
    options: ["8 km/hr", "16 km/hr", "25 km/hr", "35 km/hr"],
    correct: 1,
    explanation: "As per DA-252 notes: Minimum wind velocity necessary for initiating movement of most erodible soil particles (about 0.1 mm diameter) is about 16 km/hr at height of 30.5 cm.",
    difficulty: "hard"
  },
  {
    id: "d252l_081", subject: "da-252", lecture: "lecture-18", lectureNo: 18,
    question: "Irrigation projects with Culturable Command Area (CCA) between 2000 to 10,000 ha are classified as:",
    options: ["Major irrigation projects", "Medium irrigation projects", "Minor irrigation projects", "Micro irrigation projects"],
    correct: 1,
    explanation: "As per DA-252 notes: Medium irrigation projects have CCA between 2000 to 10,000 ha. Major: > 10,000 ha. Minor: < 2,000 ha.",
    difficulty: "easy"
  },
  {
    id: "d252l_082", subject: "da-252", lecture: "lecture-18", lectureNo: 18,
    question: "The Check Basin method of surface irrigation is most commonly used for which crops?",
    options: ["Wheat, barley and berseem", "Rice, sugarcane and maize", "Groundnut, finger millet, sorghum and vegetables", "Cotton, potato and citrus"],
    correct: 2,
    explanation: "As per DA-252 notes: Check basin method is most commonly used for irrigating crops like groundnut, finger millet, sorghum and vegetable crops. Also used for leaching salts in saline soil reclamation.",
    difficulty: "medium"
  },
  {
    id: "d252l_083", subject: "da-252", lecture: "lecture-18", lectureNo: 18,
    question: "The Border Strip method of irrigation is suitable for which crops?",
    options: ["Sparsely grown orchard crops", "Potato, sugarcane, maize and cotton", "Close growing crops like wheat, barley, groundnut and berseem", "Only rice fields"],
    correct: 2,
    explanation: "As per DA-252 notes: Border strip method is suitable for irrigating close growing crops such as wheat, barley, groundnut, bajra and berseem. Ring basin method is for orchard crops.",
    difficulty: "medium"
  },
  {
    id: "d252l_084", subject: "da-252", lecture: "lecture-19", lectureNo: 19,
    question: "In sprinkler irrigation, water is conveyed under which pressure range?",
    options: ["0.5 to 1 kg/cm2", "2 to 5 kg/cm2", "7 to 10 kg/cm2", "10 to 15 kg/cm2"],
    correct: 1,
    explanation: "As per DA-252 notes: In sprinkler irrigation, water is conveyed under pressure of 2 to 5 kg/cm2 developed by a pump through a network of pipes to laterals and sprinkler nozzles.",
    difficulty: "medium"
  },
  {
    id: "d252l_085", subject: "da-252", lecture: "lecture-19", lectureNo: 19,
    question: "A major limitation of sprinkler irrigation is:",
    options: ["Cannot be used on undulated lands", "Uneven water distribution due to high wind velocities", "Suitable only for paddy fields", "Cannot be used with fertilizers"],
    correct: 1,
    explanation: "As per DA-252 notes: Uneven distribution of water due to high wind velocities (particularly during summer) is a major limitation of sprinkler irrigation.",
    difficulty: "medium"
  },
  {
    id: "d252l_086", subject: "da-252", lecture: "lecture-20", lectureNo: 20,
    question: "Drip irrigation technology was first patented by Symcha Blass in:",
    options: ["1945", "1955", "1964", "1972"],
    correct: 2,
    explanation: "As per DA-252 notes: Current drip irrigation technology dates back to the work of Symcha Blass (1964), based on his observation that a large tree near a leaking faucet showed more vigorous growth.",
    difficulty: "medium"
  },
  {
    id: "d252l_087", subject: "da-252", lecture: "lecture-20", lectureNo: 20,
    question: "In surface drip irrigation, the discharge rate for single outlet emitters is:",
    options: ["Less than 2 L/h", "Less than 4 L/h", "Less than 8 L/h", "Less than 16 L/h"],
    correct: 2,
    explanation: "As per DA-252 notes: Surface drip irrigation applies water through emitters with discharge rate for point-source (single outlet) emitters less than 8 L/h; line-source emitters less than 4 L/h.",
    difficulty: "hard"
  },
  {
    id: "d252l_088", subject: "da-252", lecture: "lecture-21", lectureNo: 21,
    question: "Priming in a centrifugal pump refers to:",
    options: ["Starting the pump without water", "Filling water in the suction pipe to remove air before starting", "Adding lubricant to the impeller bearings", "Testing the pump discharge capacity"],
    correct: 1,
    explanation: "As per DA-252 notes: Priming is the process of removing air from pump casing and suction pipe by filling water. The centrifugal pump will not work if there is any air left in the suction pipe.",
    difficulty: "easy"
  },
  {
    id: "d252l_089", subject: "da-252", lecture: "lecture-21", lectureNo: 21,
    question: "Assertion (A): A closed impeller centrifugal pump is most suitable for handling clear irrigation water.\\nReason (R): Closed impellers have shrouds on both sides of vanes and are suitable for non-viscous liquids free from foreign materials.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "As per DA-252 notes: All ordinary centrifugal pumps used to pump clear irrigation water have closed impellers. Closed impeller has side walls on both sides and is suitable for non-viscous liquids free from foreign materials.",
    difficulty: "medium"
  },
  {
    id: "d252l_090", subject: "da-252", lecture: "lecture-22", lectureNo: 22,
    question: "Assertion (A): Submersible pumps can be used in very deep tube wells where a long shaft would not be practical.\\nReason (R): In submersible pumps, both motor and pump are installed inside the well, fully submerged.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "As per DA-252 notes: The principal advantage of submersible pump is that it can be used in very deep tube wells. Both pump and motor operate entirely submerged, making a long shaft unnecessary.",
    difficulty: "medium"
  },
  {
    id: "d252l_091", subject: "da-252", lecture: "lecture-15", lectureNo: 15,
    question: "Match the following forms of water erosion:\\n     Column-I (Type)       |  Column-II (Description)                     |  Column-III (Stage)\\nA.  Sheet erosion        |  1.  Uniform removal of surface soil in thin layers |  i.   First/least conspicuous\\nB.  Rill erosion         |  2.  Small channels removable by tillage           |  ii.  Second stage\\nC.  Gully erosion        |  3.  Deep channels that cannot be tilled           |  iii. Advanced stage\\nD.  Ravine              |  4.  Deep wide manifestation in alluvial soils      |  iv.  Most advanced",
    options: ["A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-2-i,  B-1-ii,  C-4-iii,  D-3-iv", "A-1-ii, B-2-i,  C-4-iv,  D-3-iii", "A-3-iii, B-1-i, C-2-ii,  D-4-iv"],
    correct: 0,
    explanation: "As per DA-252 notes: Sheet erosion (first stage) - uniform thin layer removal; Rill erosion (second stage) - small channels removable by tillage; Gully erosion (advanced stage) - deep channels; Ravines (most advanced) - deep wide gullies in alluvial soils.",
    difficulty: "medium"
  },
  {
    id: "d252l_092", subject: "da-252", lecture: "lecture-19", lectureNo: 19,
    question: "Match the following surface irrigation methods with their suitable conditions:\\n     Column-I (Method)     |  Column-II (Crop type)                |  Column-III (Key feature)\\nA.  Check basin          |  1.  Groundnut, vegetables            |  i.   Square/rectangular plots\\nB.  Ring basin           |  2.  Orchard/cucurbit crops           |  ii.  Circular bund per plant\\nC.  Border strip         |  3.  Wheat, barley, berseem           |  iii. Long parallel strips\\nD.  Furrow method        |  4.  Potato, sugarcane, maize         |  iv.  Ridges and furrows",
    options: ["A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-2-ii, B-1-i,  C-4-iv,  D-3-iii", "A-1-iii, B-2-i, C-3-ii,  D-4-iv", "A-4-iv, B-3-iii, C-2-ii, D-1-i"],
    correct: 0,
    explanation: "As per DA-252 notes: Check basin (square/rectangular plots) for groundnut/vegetables; Ring basin (circular bund) for orchards/cucurbits; Border strip (long parallel strips) for wheat/barley; Furrow method (ridges and furrows) for potato/sugarcane/maize.",
    difficulty: "medium"
  },
  {
    id: "d252l_093", subject: "da-252", lecture: "lecture-18", lectureNo: 18,
    question: "Match the following irrigation types with their description:\\n     Column-I (Type)          |  Column-II (Definition)               |  Column-III (Energy source)\\nA.  Flow irrigation          |  1.  Water flows by gravity from canal  |  i.   No lifting needed\\nB.  Lift irrigation          |  2.  Water must be lifted before use    |  ii.  Pump required\\nC.  Sub-surface irrigation   |  3.  Applied below soil surface         |  iii. Capillary action\\nD.  Wild flooding            |  4.  No bunds, abundant water           |  iv.  Gravity, uncontrolled",
    options: ["A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-2-ii, B-1-i,  C-4-iv,  D-3-iii", "A-1-ii, B-2-i,  C-3-iv,  D-4-iii", "A-3-i,  B-4-ii,  C-1-iii,  D-2-iv"],
    correct: 0,
    explanation: "As per DA-252 notes: Flow irrigation - water flows by gravity from canal (no lifting); Lift irrigation - water must be lifted by pump; Sub-surface irrigation - applied below soil surface using capillary action; Wild flooding - uncontrolled, no bunds.",
    difficulty: "medium"
  },
  {
    id: "d252l_094", subject: "da-252", lecture: "lecture-16", lectureNo: 16,
    question: "Duty of irrigation water increases as one moves downstream from the head of the main canal because:",
    options: ["More water is available downstream", "Transmission losses reduce effective delivery", "Transmission losses in channels reduce the water volume", "Crops downstream need less water"],
    correct: 2,
    explanation: "As per DA-252 notes: Duty varies from point to point. It increases as one moves downstream from head of main canal to head of branches due to transmission losses in channels (water lost in transit reduces effective supply).",
    difficulty: "hard"
  },
  {
    id: "d252l_095", subject: "da-252", lecture: "lecture-20", lectureNo: 20,
    question: "In drip irrigation, screen filter aperture size should be between:",
    options: ["1/2 to 1/3 of orifice size of emission device", "1/7 to 1/10 of orifice size of emission device", "1/3 to 1/5 of orifice size of emission device", "Equal to the orifice size"],
    correct: 1,
    explanation: "As per DA-252 notes: The aperture size of the screen filter opening should be between 1/7th and 1/10th of the orifice size of the emission device to properly filter impurities.",
    difficulty: "hard"
  },
  {
    id: "d252l_096", subject: "da-252", lecture: "lecture-21", lectureNo: 21,
    question: "An open impeller centrifugal pump is most suitable for:",
    options: ["Pumping clear irrigation water", "Pumping viscous liquids like molasses", "Pumping water mixed with sand, gravel and other solid materials", "High-pressure deep well applications"],
    correct: 2,
    explanation: "As per DA-252 notes: Open impeller (no side wall/shroud) is used to handle water mixed with sand, gravel, clay, pebbles and other solid materials. It is made of forged steel but has a short life. Suitable for dredging works.",
    difficulty: "medium"
  },
  {
    id: "d252l_097", subject: "da-252", lecture: "lecture-15", lectureNo: 15,
    question: "In wind erosion, 'Surface creep' involves movement of soil particles of diameter:",
    options: ["Less than 0.1 mm", "0.1 to 0.5 mm", "0.5 to 2.0 mm", "Greater than 2.0 mm"],
    correct: 2,
    explanation: "As per DA-252 notes: Surface creep involves rolling and sliding of coarse particles 0.5 to 2.0 mm in diameter along ground surface due to impact of descending particles in saltation. Accounts for 5-25% of total movement.",
    difficulty: "hard"
  },
  {
    id: "d252l_098", subject: "da-252", lecture: "lecture-18", lectureNo: 18,
    question: "The Furrow method of irrigation is commonly used for which crops?",
    options: ["Wheat, barley, groundnut and berseem", "Groundnut, finger millet and sorghum", "Potato, sugarcane, maize, cotton, melons and vegetables", "Only paddy fields"],
    correct: 2,
    explanation: "As per DA-252 notes: Furrow method is commonly used for irrigating crops like potato, sugarcane, maize, cotton, melons, sugar beets and vegetables like lettuce.",
    difficulty: "easy"
  },
  {
    id: "d252l_099", subject: "da-252", lecture: "lecture-20", lectureNo: 20,
    question: "The largest area under drip irrigation globally (as of 2008 data) is found in which two countries?",
    options: ["Israel and India", "USA and Spain (1.5 million ha each)", "Australia and South Africa", "China and Brazil"],
    correct: 1,
    explanation: "As per DA-252 notes: At present (2008 data), the largest area under drip irrigation is in USA and Spain (1.5 million ha each), followed by India (1.43 million ha). Total world coverage increased from 4000 ha in 1972 to over 8 million ha in 2008.",
    difficulty: "medium"
  },
  {
    id: "d252l_100", subject: "da-252", lecture: "lecture-22", lectureNo: 22,
    question: "A key advantage of submersible pumps over centrifugal pumps is that:",
    options: ["They are cheaper to install", "They can be used in very deep tube wells where a long shaft is impractical", "They do not require any power source", "They are suitable only for shallow wells"],
    correct: 1,
    explanation: "As per DA-252 notes: The principal advantage of submersible pump is it can be used in very deep tube wells where a long shaft would not be practical. It also has special advantage where theft is a problem since it has no above-ground working parts.",
    difficulty: "easy"
  },
'''

new_questions_comb = '''
  {
    id: "d252_101",
    subject: "da-252",
    question: "The 'Base Period' in irrigation is defined as the time between:",
    options: ["Sowing to harvesting of a crop", "First watering at sowing to last watering before harvesting", "Start to end of irrigation season", "Canal opening to canal closure"],
    correct: 1,
    explanation: "As per DA-252 notes: Base Period is the time between first watering during sowing and last watering before harvesting. Expressed in days.",
  },
  {
    id: "d252_102",
    subject: "da-252",
    question: "The relationship between Delta (Δ), Duty (D) and Base Period (B) is:",
    options: ["Delta = D x B", "Delta = 8.64 x B/D meters", "Delta = B/D x 10", "Delta = D/(8.64 x B)"],
    correct: 1,
    explanation: "As per DA-252 notes: Delta = 8.64B/D meters, derived from volume balance where 1 cumec flowing for B days irrigates D hectares.",
  },
  {
    id: "d252_103",
    subject: "da-252",
    question: "Saltation in wind erosion accounts for what percentage of total wind erosion movement?",
    options: ["5 to 25%", "50 to 70%", "Up to 15%", "25 to 35%"],
    correct: 1,
    explanation: "As per DA-252 notes: Saltation (bounces/jumps of soil particles along ground) accounts for 50 to 70% of total wind erosion movement. Surface creep: 5-25%; Suspension: up to 15%.",
  },
  {
    id: "d252_104",
    subject: "da-252",
    question: "Irrigation projects with CCA between 2000 to 10,000 ha are classified as:",
    options: ["Major irrigation projects", "Medium irrigation projects", "Minor irrigation projects", "Micro irrigation projects"],
    correct: 1,
    explanation: "As per DA-252 notes: Medium irrigation projects have CCA between 2000 to 10,000 ha.",
  },
  {
    id: "d252_105",
    subject: "da-252",
    question: "The Check Basin method of surface irrigation is most commonly used for:",
    options: ["Wheat, barley and berseem", "Rice, sugarcane and maize", "Groundnut, finger millet, sorghum and vegetables", "Cotton, potato and citrus"],
    correct: 2,
    explanation: "As per DA-252 notes: Check basin method is most commonly used for groundnut, finger millet, sorghum and vegetable crops.",
  },
  {
    id: "d252_106",
    subject: "da-252",
    question: "In sprinkler irrigation, water is conveyed under what pressure?",
    options: ["0.5 to 1 kg/cm2", "2 to 5 kg/cm2", "7 to 10 kg/cm2", "10 to 15 kg/cm2"],
    correct: 1,
    explanation: "As per DA-252 notes: Sprinkler irrigation conveys water under pressure of 2 to 5 kg/cm2 through a network of pipes to laterals and nozzles.",
  },
  {
    id: "d252_107",
    subject: "da-252",
    question: "Drip irrigation technology was first patented by Symcha Blass in year:",
    options: ["1945", "1955", "1964", "1972"],
    correct: 2,
    explanation: "As per DA-252 notes: Current drip irrigation technology dates back to the work of Symcha Blass (1964), who observed vigorous tree growth near a leaking faucet.",
  },
  {
    id: "d252_108",
    subject: "da-252",
    question: "Priming in a centrifugal pump means:",
    options: ["Starting the pump without water", "Filling water in suction pipe to remove air before starting", "Adding lubricant to bearings", "Testing pump discharge capacity"],
    correct: 1,
    explanation: "As per DA-252 notes: Priming is the process of removing air from pump casing and suction pipe by filling water. Pump will not work if air remains in suction pipe.",
  },
  {
    id: "d252_109",
    subject: "da-252",
    question: "Assertion (A): Submersible pumps can be used in very deep tube wells.\\nReason (R): Both motor and pump are installed inside the well fully submerged, making a long shaft unnecessary.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "As per DA-252 notes: Submersible pumps can be used in very deep wells because both pump and motor operate entirely submerged, making a long shaft unnecessary.",
  },
  {
    id: "d252_110",
    subject: "da-252",
    question: "Assertion (A): Closed impeller centrifugal pumps are most suitable for clear irrigation water.\\nReason (R): Closed impellers have shrouds on both sides and are suitable for non-viscous liquids free from foreign materials.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "As per DA-252 notes: All ordinary centrifugal pumps for clear irrigation water use closed impellers. Closed impeller has side walls on both sides - suitable for non-viscous, clean liquids.",
  },
  {
    id: "d252_111",
    subject: "da-252",
    question: "Match the following forms of water erosion:\\n     Column-I (Type)    |  Column-II (Description)                      |  Column-III (Stage)\\nA.  Sheet erosion     |  1.  Thin layer removal, raindrop + runoff     |  i.   First/least conspicuous\\nB.  Rill erosion      |  2.  Small channels removable by tillage        |  ii.  Second stage\\nC.  Gully erosion     |  3.  Deep channels, no arable crop possible     |  iii. Advanced stage\\nD.  Ravine           |  4.  Deep gullies in deep alluvial soils         |  iv.  Most advanced",
    options: ["A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-2-i,  B-1-ii,  C-4-iii,  D-3-iv", "A-1-iii, B-2-ii, C-3-i,  D-4-iv", "A-3-iii, B-1-i, C-2-ii, D-4-iv"],
    correct: 0,
    explanation: "As per DA-252 notes: Sheet erosion (first, least conspicuous); Rill erosion (second stage, rills removable by tillage); Gully erosion (advanced stage); Ravines (most advanced, deep wide gullies in alluvial soils).",
  },
  {
    id: "d252_112",
    subject: "da-252",
    question: "Match the surface irrigation methods with suitable crops:\\n     Column-I (Method)  |  Column-II (Suitable crops)          |  Column-III (Key feature)\\nA.  Check basin       |  1.  Groundnut, sorghum, vegetables   |  i.   Square/rectangular plots\\nB.  Ring basin        |  2.  Orchard crops, cucurbits         |  ii.  Circular bund per plant\\nC.  Border strip      |  3.  Wheat, barley, berseem           |  iii. Long parallel strips\\nD.  Furrow method     |  4.  Potato, sugarcane, maize         |  iv.  Ridges and furrows",
    options: ["A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-2-ii, B-1-i,  C-4-iv,  D-3-iii", "A-1-iii, B-2-i, C-3-ii,  D-4-iv", "A-4-iv, B-3-iii, C-2-ii, D-1-i"],
    correct: 0,
    explanation: "As per DA-252 notes: Check basin (square/rectangular plots) for groundnut/sorghum/vegetables; Ring basin (circular bunds) for orchards; Border strip (parallel strips) for wheat/barley; Furrow (ridges-furrows) for potato/sugarcane/maize.",
  },
  {
    id: "d252_113",
    subject: "da-252",
    question: "Match the drip irrigation components:\\n     Column-I (Component)   |  Column-II (Function)               |  Column-III (Location)\\nA.  Media filter           |  1.  Removes algae, fine sand, silt   |  i.   Primary filtration\\nB.  Screen filter          |  2.  Final fine filtration            |  ii.  Secondary/additional\\nC.  Non-return valve       |  3.  Prevents back flow               |  iii. Head control unit\\nD.  Dripper/Emitter        |  4.  Dissipates pressure to zero      |  iv.  Lateral pipe",
    options: ["A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-2-ii, B-1-i,  C-4-iv,  D-3-iii", "A-1-iii, B-2-i, C-3-ii,  D-4-iv", "A-4-iv, B-3-iii, C-2-ii, D-1-i"],
    correct: 0,
    explanation: "As per DA-252 notes: Media filter for primary filtration (removes algae, fine sand); Screen filter for secondary/final filtration; Non-return valve prevents backflow (in head control unit); Dripper dissipates pressure to zero at lateral.",
  },
  {
    id: "d252_114",
    subject: "da-252",
    question: "The open impeller in centrifugal pumps is most suitable for:",
    options: ["Pumping clear irrigation water", "Pumping water mixed with sand, gravel and solid materials", "High-pressure deep well applications", "Pumping viscous liquids like molasses"],
    correct: 1,
    explanation: "As per DA-252 notes: Open impeller (no side wall) is used for water mixed with sand, gravel, clay and other solid materials. Suitable for dredging works. Made of forged steel with short life.",
  },
  {
    id: "d252_115",
    subject: "da-252",
    question: "The Furrow method of irrigation is commonly used for:",
    options: ["Wheat, barley, groundnut and berseem", "Groundnut, finger millet and sorghum", "Potato, sugarcane, maize, cotton, melons and vegetables", "Only paddy fields"],
    correct: 2,
    explanation: "As per DA-252 notes: Furrow method is used for potato, sugarcane, maize, cotton, melons, sugar beets and vegetables like lettuce.",
  },
  {
    id: "d252_116",
    subject: "da-252",
    question: "The largest area under drip irrigation globally (2008 data) was in:",
    options: ["Israel and India", "USA and Spain (1.5 million ha each)", "Australia and South Africa", "China and Brazil"],
    correct: 1,
    explanation: "As per DA-252 notes: USA and Spain each had 1.5 million ha under drip irrigation, followed by India (1.43 million ha). World total grew from 4000 ha in 1972 to over 8 million ha in 2008.",
  },
  {
    id: "d252_117",
    subject: "da-252",
    question: "In surface drip irrigation, the discharge rate for single outlet emitters is:",
    options: ["Less than 2 L/h", "Less than 4 L/h", "Less than 8 L/h", "Less than 16 L/h"],
    correct: 2,
    explanation: "As per DA-252 notes: Surface drip irrigation discharge rate for point-source (single outlet) emitters is less than 8 L/h; line-source emitters: less than 4 L/h.",
  },
  {
    id: "d252_118",
    subject: "da-252",
    question: "Minimum wind velocity at 30.5 cm height to initiate movement of most erodible soil particles is approximately:",
    options: ["8 km/hr", "16 km/hr", "25 km/hr", "35 km/hr"],
    correct: 1,
    explanation: "As per DA-252 notes: Minimum wind velocity necessary for initiating movement of most erodible soil particles (0.1 mm diameter) is about 16 km/hr at height of 30.5 cm.",
  },
  {
    id: "d252_119",
    subject: "da-252",
    question: "Duty of irrigation water increases as one moves downstream because:",
    options: ["More water is available downstream", "Crops downstream need less water", "Transmission losses in channels reduce water volume", "Downstream fields are larger"],
    correct: 2,
    explanation: "As per DA-252 notes: Duty increases as one moves downstream from head of main canal due to transmission losses in channels.",
  },
  {
    id: "d252_120",
    subject: "da-252",
    question: "Drip irrigation screen filter aperture size should be between:",
    options: ["1/2 to 1/3 of orifice size", "1/7 to 1/10 of orifice size", "1/3 to 1/5 of orifice size", "Equal to the orifice size"],
    correct: 1,
    explanation: "As per DA-252 notes: Screen filter aperture size should be between 1/7th and 1/10th of the orifice size of the emission device.",
  },
  {
    id: "d252_121",
    subject: "da-252",
    question: "Surface creep in wind erosion involves soil particles of diameter:",
    options: ["Less than 0.1 mm", "0.1 to 0.5 mm", "0.5 to 2.0 mm", "Greater than 2.0 mm"],
    correct: 2,
    explanation: "As per DA-252 notes: Surface creep involves coarse particles 0.5 to 2.0 mm in diameter rolling and sliding along ground surface due to impact of saltating particles. Accounts for 5-25% of total movement.",
  },
  {
    id: "d252_122",
    subject: "da-252",
    question: "A key disadvantage of the Check Basin method of irrigation is:",
    options: ["Cannot be used for fine textured soils", "About 30% of area is lost under field channels and bunds", "Not suitable for vegetable crops", "Requires high water pressure"],
    correct: 1,
    explanation: "As per DA-252 notes: A disadvantage of check basin method is that considerable area (nearly 30%) is lost under field channels and bunds.",
  },
  {
    id: "d252_123",
    subject: "da-252",
    question: "Wild flooding irrigation is most commonly used for which crops?",
    options: ["Cotton, potato and citrus", "Wheat, barley and groundnut", "Rice, low value pastures, lawns and millets (broadcast crops)", "Sugarcane and vegetables"],
    correct: 2,
    explanation: "As per DA-252 notes: Wild flooding (uncontrolled, no bunds) is most commonly used for crops sown by broadcasting viz., rice, low value pastures, lawns and millets.",
  },
  {
    id: "d252_124",
    subject: "da-252",
    question: "Subsurface irrigation is usually done by creating an artificial water table at depth of:",
    options: ["5 to 15 cm below ground", "30 to 75 cm below ground", "100 to 150 cm below ground", "200 to 250 cm below ground"],
    correct: 1,
    explanation: "As per DA-252 notes: Sub-surface irrigation applies water below soil surface close to plant roots, usually at a pre-determined depth of about 30-75 cm below ground, depending on soil texture and crop rooting characteristics.",
  },
  {
    id: "d252_125",
    subject: "da-252",
    question: "Corrugation method of furrow irrigation is most suitable for:",
    options: ["Row crops requiring inter-culture operations", "Coarse textured soils with high infiltration", "Close growing crops in fine textured soils that take water slowly", "Only paddy cultivation"],
    correct: 2,
    explanation: "As per DA-252 notes: Corrugations (shallow furrows) are used for close growing crops that do not require inter-culture operations, and in fine textured soils that take water slowly and tend to seal and crust when flooded.",
  },
'''

def append_questions(filepath, new_ts_block):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    insert_pos = content.rfind('];')
    new_content = content[:insert_pos] + '\n' + new_ts_block + '\n' + content[insert_pos:]
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f'Appended to {filepath}')

append_questions(r'C:\Users\bioas\Agricet Mock Test Series\src\data\questions\da-252-lectures.ts', new_questions_lec)
append_questions(r'C:\Users\bioas\Agricet Mock Test Series\src\data\questions\da-252.ts', new_questions_comb)
