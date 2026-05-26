import sys
sys.stdout.reconfigure(encoding='utf-8')

new_block = r"""
  // ── BATCH 2: Additional questions from PJTSAU Theory Notes (DA-201) ──────
  {
    id: "d201x_001",
    subject: "da-201",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "India accounts for approximately what percentage of world oilseed area?",
    options: ["7%", "10%", "13%", "20%"],
    correct: 2,
    explanation: "According to DA-201 notes, India accounts for about 13% of world oilseed area and 7% of world oilseed production."
  },
  {
    id: "d201x_002",
    subject: "da-201",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Technology Mission on Oilseeds (TMO) was initiated in which year?",
    options: ["1980", "1986", "1990", "1995"],
    correct: 1,
    explanation: "As per DA-201 notes, TMO was initiated in May 1986 to improve oilseed production in India."
  },
  {
    id: "d201x_003",
    subject: "da-201",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The national oilseed research centre under TMO (now IIOR) was established at:",
    options: ["IARI New Delhi", "Anand Gujarat", "Rajendranagar Hyderabad", "Sholapur Maharashtra"],
    correct: 2,
    explanation: "Indian Institute of Oilseed Research (IIOR), initially DOR, was established at Rajendranagar, Hyderabad under TMO."
  },
  {
    id: "d201x_004",
    subject: "da-201",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The meaning of 'Arachis hypogaea' in Greek refers to:",
    options: ["Oil bearing legume", "Legume below ground", "Nitrogen fixing legume", "Tropical legume"],
    correct: 1,
    explanation: "In Greek, 'Arachis' means legume and 'hypogaea' means below ground, referring to formation of pods in soil."
  },
  {
    id: "d201x_005",
    subject: "da-201",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Groundnut was introduced into India from South America at the beginning of which century?",
    options: ["14th century", "15th century", "16th century", "17th century"],
    correct: 2,
    explanation: "Groundnut's center of origin is South America (Matograsso, Brazil) and was introduced into India at the beginning of the 16th century."
  },
  {
    id: "d201x_006",
    subject: "da-201",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "What is the approximate oil content in groundnut seeds?",
    options: ["26%", "35%", "45%", "55%"],
    correct: 2,
    explanation: "According to DA-201 notes, groundnut seeds contain 45% oil and 26% protein."
  },
  {
    id: "d201x_007",
    subject: "da-201",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Groundnut oil cake used as organic manure contains approximately what percentage of nitrogen?",
    options: ["3-4%", "5-6%", "7-8%", "10-12%"],
    correct: 2,
    explanation: "As per DA-201 notes, groundnut oil cake contains 7-8% N, 1.5% P2O5 and 1.2% K2O."
  },
  {
    id: "d201x_008",
    subject: "da-201",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "What percentage of groundnut kernels are used for oil extraction?",
    options: ["60%", "70%", "81%", "90%"],
    correct: 2,
    explanation: "According to DA-201 notes, nearly 81% of groundnut kernels are used for oil extraction, 12% for seed purpose."
  },
  {
    id: "d201x_009",
    subject: "da-201",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Groundnut can fix atmospheric nitrogen at what rate per season?",
    options: ["20-40 kg N/ha", "40-60 kg N/ha", "60-100 kg N/ha", "100-150 kg N/ha"],
    correct: 2,
    explanation: "As per DA-201 notes, groundnut is able to fix atmospheric nitrogen at 60-100 kg N/ha within one season."
  },
  {
    id: "d201x_010",
    subject: "da-201",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The critical soil pH range for groundnut cultivation is:",
    options: ["4.0-4.5", "5.0-5.5", "6.0-6.5", "7.0-7.5"],
    correct: 1,
    explanation: "Groundnut is one of the most acid tolerant crops with a critical pH range of 5.0-5.5 as mentioned in DA-201 notes."
  },
  {
    id: "d201x_011",
    subject: "da-201",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The recommended soil bulk density for groundnut cultivation is:",
    options: ["0.5 g/cc", "1.0 g/cc", "1.5 g/cc", "2.0 g/cc"],
    correct: 2,
    explanation: "According to DA-201 notes, the soil should have a bulk density of 1.5 g/cc for good groundnut cultivation."
  },
  {
    id: "d201x_012",
    subject: "da-201",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "To break groundnut dormancy, seeds are soaked in Etherel solution for:",
    options: ["6 hours in 2 ml/10 lit solution", "12 hours in 5 ml/10 lit solution", "24 hours in 10 ml/10 lit solution", "8 hours in 3 ml/10 lit solution"],
    correct: 1,
    explanation: "As per DA-201 notes, groundnut seeds should be soaked for 12 hours in Etherel 5 ml/10 lit solution to break dormancy and then shade dried."
  },
  {
    id: "d201x_013",
    subject: "da-201",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "In groundnut, flowering normally takes place between how many days after sowing?",
    options: ["10-15 DAS", "24-30 DAS", "35-45 DAS", "50-60 DAS"],
    correct: 1,
    explanation: "According to DA-201 notes, in groundnut, flowering usually takes place between 24 to 30 days after sowing."
  },
  {
    id: "d201x_014",
    subject: "da-201",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The most sensitive stages to soil moisture stress in groundnut are:",
    options: ["Germination and seedling stage", "Flowering, peg penetration and pod development", "Tillering and vegetative growth", "Ripening and maturity"],
    correct: 1,
    explanation: "In groundnut, flowering, peg penetration and pod development stages (45-75 DAS) are the 3 most sensitive stages as per DA-201 notes."
  },
  {
    id: "d201x_015",
    subject: "da-201",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "In groundnut, weed competition is most critical up to:",
    options: ["20 DAS", "35 DAS", "50 DAS", "65 DAS"],
    correct: 1,
    explanation: "As per DA-201 notes, weed competition in groundnut is critical up to 35 DAS and yield losses may be up to 70%."
  },
  {
    id: "d201x_016",
    subject: "da-201",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "When pegging begins in groundnut (approximately 40 DAS), weeding operations should be:",
    options: ["Intensified using tractors", "Stopped to avoid disturbing pegs", "Continued with herbicide sprays", "Replaced by earthing up"],
    correct: 1,
    explanation: "As per DA-201 notes, once pegging begins at about 40 DAS, there should not be any disturbance to pegs through manual or mechanical weeding."
  },
  {
    id: "d201x_017",
    subject: "da-201",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Harvesting of bunch and semi-spreading groundnut types is done after approximately:",
    options: ["75-85 days", "100-105 days", "120-125 days", "135-145 days"],
    correct: 1,
    explanation: "According to DA-201 notes, bunch and semi-spreading type groundnut comes to maturity by 100-105 days, while spreading type takes 125-135 days."
  },
  {
    id: "d201x_018",
    subject: "da-201",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Boron deficiency in groundnut causes:",
    options: ["Yellowing of young leaves", "HOLLOW HEART in pods", "Root rot disease", "Stem elongation"],
    correct: 1,
    explanation: "As per DA-201 notes, Boron deficiency leads to HOLLOW HEART in groundnut. The threshold level of boron is 0.25 ppm."
  },
  {
    id: "d201x_019",
    subject: "da-201",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "In groundnut, calcium deficiency in pod zones leads to:",
    options: ["Root necrosis and stunting", "Unfilled pods called pops and darkening of plumules", "White leaf spots on young leaves", "Premature flowering"],
    correct: 1,
    explanation: "According to DA-201 notes, calcium deficiency in groundnut leads to unfilled pods called pops and darkening of plumules of embryo."
  },
  {
    id: "d201x_020",
    subject: "da-201",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "If groundnut seed moisture content exceeds the critical level of 9%, which problem occurs?",
    options: ["Sprouting of seeds in storage", "Aflatoxin production due to Aspergillus flavus", "Seed coat cracking", "Loss of oil content"],
    correct: 1,
    explanation: "As per DA-201 notes, if seed moisture content exceeds 9%, Aflatoxin production due to Aspergillus flavus occurs during post-harvest drying."
  },
  {
    id: "d201x_021",
    subject: "da-201",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "For export quality groundnut, Aflatoxin levels should be less than:",
    options: ["10 PPB", "20 PPB", "30 PPB", "50 PPB"],
    correct: 2,
    explanation: "According to DA-201 notes, for export quality, Aflatoxin levels should be less than 30 PPB. Aspergillus resistant varieties are preferred."
  },
  {
    id: "d201x_022",
    subject: "da-201",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Castor is a native of:",
    options: ["South America (Brazil)", "Africa and Asia", "Central Mexico", "Europe"],
    correct: 1,
    explanation: "As per DA-201 notes, castor (Ricinus communis) is a native of Africa and Asia, and is now naturalized in Australia."
  },
  {
    id: "d201x_023",
    subject: "da-201",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The name 'Ricinus' in castor is derived from a Latin term meaning:",
    options: ["Oil bearing", "Dog's tick", "Heat loving", "Fast growing"],
    correct: 1,
    explanation: "According to DA-201 notes, Ricinus is derived from the Latin term 'Dog's Tick' because of the resemblance of mottling on the seed to the common pest of dogs."
  },
  {
    id: "d201x_024",
    subject: "da-201",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Castor oil can tolerate up to what temperature without freezing, making it useful in aeroplane engines?",
    options: ["-50 degrees C", "-100 degrees C", "-165 degrees C", "-200 degrees C"],
    correct: 2,
    explanation: "According to DA-201 notes, castor oil can tolerate up to -165 degrees C and cannot freeze, which is why it is used as a lubricant in high-speed engines and aeroplanes."
  },
  {
    id: "d201x_025",
    subject: "da-201",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The castor oil cake used as manure contains approximately what percentage of nitrogen?",
    options: ["2.5%", "3.5%", "4.5%", "5.5%"],
    correct: 3,
    explanation: "As per DA-201 notes, castor oil cake is used as manure with 5.5% N, 1.8 to 1.9% P and 1.1% K."
  },
  {
    id: "d201x_026",
    subject: "da-201",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Castor cultivation is confined to latitudes up to what degrees from the equator?",
    options: ["20 degrees N and S", "30 degrees N and S", "40 degrees N and S", "50 degrees N and S"],
    correct: 2,
    explanation: "According to DA-201 notes, castor cultivation confines to 40 degrees latitude from equator on either side."
  },
  {
    id: "d201x_027",
    subject: "da-201",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "India is the principal global producer of castor followed by:",
    options: ["USA and Mexico", "China and Brazil", "Argentina and Australia", "Ethiopia and Spain"],
    correct: 1,
    explanation: "As per DA-201 notes, India is the principal global producer of castor followed by China and Brazil."
  },
  {
    id: "d201x_028",
    subject: "da-201",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The Nipping technique in castor cultivation refers to:",
    options: ["Removal of top bud to promote branching", "Removal of all auxiliary buds as they emerge", "Removal of lower leaves for air circulation", "Removal of flowers to prevent seed formation"],
    correct: 1,
    explanation: "According to DA-201 notes, nipping is removal of all auxiliary buds as and when they emerge. It is mainly used in Aruna variety and facilitates synchronous flowering."
  },
  {
    id: "d201x_029",
    subject: "da-201",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The critical period for weed-free competition in castor is:",
    options: ["20-25 days", "30-35 days", "45-50 days", "60-70 days"],
    correct: 2,
    explanation: "As per DA-201 notes, the critical period for weed-free competition in castor is 45-50 days. Castor is highly susceptible to weed competition in initial stages."
  },
  {
    id: "d201x_030",
    subject: "da-201",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The castor variety Haritha (PCS-124) is known for tolerance to:",
    options: ["Drought", "Leaf spot", "Wilt", "Root rot"],
    correct: 2,
    explanation: "According to DA-201 notes, castor variety Haritha (PCS-124) is a wilt-tolerant variety with a duration of 90-150 days."
  },
  {
    id: "d201x_031",
    subject: "da-201",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Sunflower is known as suryamukhi because it is grown for:",
    options: ["Its high oil content", "Ornamental purpose", "Its medicinal properties", "Its heliotropic movement"],
    correct: 1,
    explanation: "As per DA-201 notes, sunflower is known as suryajmuki as it is grown for ornamental purpose. Helianthus means Helio equal to Sun, anthus equal to flower."
  },
  {
    id: "d201x_032",
    subject: "da-201",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Sunflower contributes approximately what percentage of total oilseed production from nine major crops in India?",
    options: ["5%", "9%", "14%", "20%"],
    correct: 2,
    explanation: "According to DA-201 notes, sunflower is an important oilseed crop contributing 14% of the total oilseed production from nine major oilseed crops."
  },
  {
    id: "d201x_033",
    subject: "da-201",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Sunflower is the third most important oilseed crop of world after:",
    options: ["Groundnut and cotton", "Soybean and rapeseed mustard", "Sesame and linseed", "Palm oil and coconut"],
    correct: 1,
    explanation: "As per DA-201 notes, sunflower is the third most important oilseed crop of world after soybean and rape seed/mustard."
  },
  {
    id: "d201x_034",
    subject: "da-201",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "The seed hardening process in sunflower involves:",
    options: ["Treating seed with fungicide solution", "Soaking seeds in fresh water for 14 hours then shade drying", "Treating seed with hot water at 55 degrees C", "Pelleting seeds with lime powder"],
    correct: 1,
    explanation: "According to DA-201 notes, seed hardening in sunflower involves soaking seeds in fresh water for about 14 hours followed by shade drying, as sunflower seeds have thick hulls."
  },
  {
    id: "d201x_035",
    subject: "da-201",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Sunflower seeds have a dormancy period of how many days after harvest?",
    options: ["10-20 days", "40-50 days", "60-70 days", "90-100 days"],
    correct: 1,
    explanation: "As per DA-201 notes, sunflower seeds cannot be used as seed immediately after harvest since seeds will have a dormancy period ranging from 40-50 days."
  },
  {
    id: "d201x_036",
    subject: "da-201",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "The most sensitive stage for moisture stress in sunflower is:",
    options: ["Germination stage", "Flower opening at 45-50 DAS", "Bud initiation at 30 DAS", "Seed filling at 60-75 DAS"],
    correct: 1,
    explanation: "According to DA-201 notes, the most sensitive stage for moisture in sunflower is flower opening (45-50 DAS). Other critical stages include bud initiation and seed filling."
  },
  {
    id: "d201x_037",
    subject: "da-201",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Hand pollination in sunflower should be done between what time of day during flowering?",
    options: ["5-7 AM", "8-11 AM", "12-2 PM", "3-5 PM"],
    correct: 1,
    explanation: "As per DA-201 notes, during the flowering period on every day between 8 and 11 AM hand pollination should be done with smooth cloth, which can increase yield 20-25% higher."
  },
  {
    id: "d201x_038",
    subject: "da-201",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "The sunflower crop is ready for harvesting when the moisture content of seeds is:",
    options: ["10%", "15%", "20%", "25%"],
    correct: 2,
    explanation: "According to DA-201 notes, the sunflower crop is ready for harvesting when moisture content of seed is 20%. The head is mature physiologically at 35-40 days after flowering."
  },
  {
    id: "d201x_039",
    subject: "da-201",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Spraying Cycocel 50 ppm at 40 and 60 days of sunflower crop increases yield through:",
    options: ["Better root development", "Better seed setting", "Increased oil content", "Pest resistance"],
    correct: 1,
    explanation: "As per DA-201 notes, spraying cycocel 50 ppm at 40 and 60 days of crop age increases yield through better seed setting."
  },
  {
    id: "d201x_040",
    subject: "da-201",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Sunflower oil is rich in which fatty acid that helps in reducing cholesterol in coronary arteries?",
    options: ["Oleic acid", "Palmitic acid", "Linoleic acid at 64 percent", "Stearic acid"],
    correct: 2,
    explanation: "According to DA-201 notes, sunflower is a rich source of linoleic acid (64%) which helps in reducing cholesterol deposition in the coronary arteries of the heart."
  },
  {
    id: "d201x_041",
    subject: "da-201",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Sesame is regarded as Queen of Oilseeds because of:",
    options: ["Its high yield potential", "Its quality fatty acid composition and resistance to oxidation and rancidity", "Its drought tolerance", "Its wide adaptability"],
    correct: 1,
    explanation: "As per DA-201 notes, sesame is regarded as queen of oilseeds because of its quality (fatty acid composition) and its resistance to oxidation and rancidity."
  },
  {
    id: "d201x_042",
    subject: "da-201",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "India is considered the basic centre of origin of sesame with what percentage of world area?",
    options: ["20%", "30%", "36%", "50%"],
    correct: 2,
    explanation: "According to DA-201 notes, India is considered the basic centre of origin of sesame with 36% area and 25% production of world."
  },
  {
    id: "d201x_043",
    subject: "da-201",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The extremely low temperature at which sesame growth completely ceases is:",
    options: ["10 degrees C", "15 degrees C", "18 degrees C", "22 degrees C"],
    correct: 2,
    explanation: "As per DA-201 notes, at extremely low temperatures of 18 degrees C, there is a complete ceasing of growth in sesame."
  },
  {
    id: "d201x_044",
    subject: "da-201",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Sesame cake used as manure contains approximately what percentage of nitrogen?",
    options: ["3%", "6%", "9%", "12%"],
    correct: 1,
    explanation: "According to DA-201 notes, sesame cake is a good livestock feed and as manure contains 6% N, 2.2% P, 1.2% K."
  },
  {
    id: "d201x_045",
    subject: "da-201",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "For sesame, the most critical stages for irrigation are:",
    options: ["Germination and seedling establishment", "Flower initiation and capsule filling", "Vegetative growth and branching", "Maturity and harvesting"],
    correct: 1,
    explanation: "As per DA-201 notes, for rabi/summer sesame, the flower initiation and capsule filling stages are most sensitive to water deficits."
  },
  {
    id: "d201x_046",
    subject: "da-201",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Sesame varieties are classified based on seed colour into:",
    options: ["Red, white and yellow", "White, black and brown", "Green, white and brown", "Black, red and white"],
    correct: 1,
    explanation: "According to DA-201 notes, sesame is classified based on seed colour into white, black and brown colour seeded varieties."
  },
  {
    id: "d201x_047",
    subject: "da-201",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The dye Carthamin extracted from safflower petals is:",
    options: ["Yellow pigment soluble in water", "Orange-red dye insoluble in water but soluble in alkaline solution", "Blue dye used in textiles", "Red dye soluble in both water and alcohol"],
    correct: 1,
    explanation: "As per DA-201 notes, safflower florets contain Carthamin - an orange-red dye (2%) insoluble in water but soluble in alkaline solution, used as food, beverage, and cosmetics additive."
  },
  {
    id: "d201x_048",
    subject: "da-201",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Safflower oil contains up to what percentage of linoleic acid?",
    options: ["40%", "55%", "78%", "90%"],
    correct: 2,
    explanation: "According to DA-201 notes, safflower oil is rich in poly-unsaturated fatty acids as linoleic acid up to 78% which plays an important role in reducing cholesterol."
  },
  {
    id: "d201x_049",
    subject: "da-201",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The most critical stage of safflower crop growth for irrigation is:",
    options: ["At sowing", "Rosette stage at 21 DAS or 4-6 leaf stage", "Flowering stage", "Seed filling stage"],
    correct: 1,
    explanation: "As per DA-201 notes, rosette stage (21 DAS or 4-6 leaf stage) is the most critical stage of safflower and yield can be increased by 40-60% with irrigation at this stage."
  },
  {
    id: "d201x_050",
    subject: "da-201",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "In safflower, harvesting is traditionally done in early hours of the day before 10 AM because:",
    options: ["Dew prevents seed shattering", "Spines are soft in morning and become stiff as day advances", "Oil content is maximum in morning", "Aphids are inactive in morning"],
    correct: 1,
    explanation: "According to DA-201 notes, safflower plants are thorny and harvesting is done before 10 AM because spines are soft in early hours and become stiff as the day advances."
  },
  {
    id: "d201x_051",
    subject: "da-201",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Safflower has a crop duration of approximately:",
    options: ["70-90 days", "90-110 days", "110-120 days", "140-160 days"],
    correct: 2,
    explanation: "As per DA-201 notes, safflower crop comes to maturity within 110-120 days."
  },
  {
    id: "d201x_052",
    subject: "da-201",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The AICRP on Safflower is located at:",
    options: ["Dharwad Karnataka", "Sholapur Maharashtra", "Thandur Andhra Pradesh", "Rajkot Gujarat"],
    correct: 1,
    explanation: "According to DA-201 notes, the AICRP on safflower is at Sholapur (Maharashtra). ARS in Andhra Pradesh is at Thandur."
  },
  {
    id: "d201x_053",
    subject: "da-201",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Cotton is referred to as King of Fibres and is also known as:",
    options: ["Green Gold", "White Gold", "Silver Fibre", "Golden Crop"],
    correct: 1,
    explanation: "According to DA-201 notes, cotton is referred to as King of Fibres and also known as White Gold."
  },
  {
    id: "d201x_054",
    subject: "da-201",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Cotton cultivation in the Indus Valley has been practiced for more than how many years?",
    options: ["2000 years", "3000 years", "5000 years", "8000 years"],
    correct: 2,
    explanation: "As per DA-201 notes, cotton has been cultivated in the Indus Valley for more than 5000 years. Excavations of Mohen-jo-daro indicate a high degree of art in spinning and weaving."
  },
  {
    id: "d201x_055",
    subject: "da-201",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Cotton seed oil content ranges from:",
    options: ["5-10%", "10-15%", "15-25%", "25-35%"],
    correct: 2,
    explanation: "According to DA-201 notes, cotton oil content ranges from 15-25%. Cotton seed cake after oil extraction contains 6.4% N, 2.9% P2O5 and 2.2% K2O."
  },
  {
    id: "d201x_056",
    subject: "da-201",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The minimum temperature required for cotton germination is:",
    options: ["10 degrees C", "14 degrees C", "16 degrees C", "20 degrees C"],
    correct: 2,
    explanation: "As per DA-201 notes, cotton requires a daily minimum temperature of 16 degrees C for germination and 21 to 27 degrees C for proper vegetative growth."
  },
  {
    id: "d201x_057",
    subject: "da-201",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Cotton requires a minimum frost-free period of how many days from plant emergence?",
    options: ["120-140 days", "150-160 days", "180-200 days", "220-240 days"],
    correct: 2,
    explanation: "According to DA-201 notes, for successful cotton crop, a frost-free period of minimum 180-200 days starting from emergence of the plant is required."
  },
  {
    id: "d201x_058",
    subject: "da-201",
    lecture: "lecture-11",
    lectureNo: 11,
    question: "Delinting of cotton seeds using H2SO4 is done at the rate of how much per kg seed?",
    options: ["50 ml", "100 ml", "200 ml", "250 ml"],
    correct: 1,
    explanation: "As per DA-201 notes, for 1 kg seed, 100 ml H2SO4 is poured on seed and simultaneously washed with fresh water for chemical delinting of cotton seeds."
  },
  {
    id: "d201x_059",
    subject: "da-201",
    lecture: "lecture-12",
    lectureNo: 12,
    question: "What is the water requirement of cotton crop?",
    options: ["300-400 mm", "400-500 mm", "600-800 mm", "1000-1200 mm"],
    correct: 2,
    explanation: "According to DA-201 notes, water requirement of the cotton crop is 600 to 800 mm. Cotton is a drought tolerant crop due to its deep root system."
  },
  {
    id: "d201x_060",
    subject: "da-201",
    lecture: "lecture-12",
    lectureNo: 12,
    question: "To prevent bud and boll shedding in cotton, NAA-Planofix at 10 ppm is sprayed at:",
    options: ["30-40 DAS", "50-60 DAS and 15 days after first application", "80-90 DAS", "100-110 DAS"],
    correct: 1,
    explanation: "As per DA-201 notes, spraying of NAA-Planofix at 10 ppm at flower initiation (1 ml in 100 liter) at 50-60 DAS and 15 days after 1st application results in retention of more bolls."
  },
  {
    id: "d201x_061",
    subject: "da-201",
    lecture: "lecture-12",
    lectureNo: 12,
    question: "Magnesium deficiency in cotton leads to reddening of which leaves?",
    options: ["Young leaves at growing point", "Older leaves initially", "All leaves equally", "Only flag leaves"],
    correct: 1,
    explanation: "According to DA-201 notes, in cotton Mg deficiency symptoms are initially observed in the older leaves as reddening, due to reduced photosynthetic activity."
  },
  {
    id: "d201x_062",
    subject: "da-201",
    lecture: "lecture-13",
    lectureNo: 13,
    question: "On the basis of fibre length, cotton with length less than 19.5 mm is classified as:",
    options: ["Extra short staple", "Short staple", "Medium staple", "Coarse cotton"],
    correct: 1,
    explanation: "As per DA-201 notes, on the basis of fibre length, cotton less than 19.5 mm is classified as Short staple."
  },
  {
    id: "d201x_063",
    subject: "da-201",
    lecture: "lecture-13",
    lectureNo: 13,
    question: "Fibre fineness in cotton is expressed as:",
    options: ["Millimetres per gram", "Micronaire value in microgram per inch", "Tenacity in g per tex", "Number of fibres per square cm"],
    correct: 1,
    explanation: "According to DA-201 notes, fibre fineness is generally expressed as microgram/inch of the fibre, also called micronaire value. Thickness of the fibre ranges from 15-20 microns."
  },
  {
    id: "d201x_064",
    subject: "da-201",
    lecture: "lecture-13",
    lectureNo: 13,
    question: "Fibre strength in cotton is determined by using:",
    options: ["Pressley apparatus", "Fibrograph", "Stelometer", "Micronaire instrument"],
    correct: 2,
    explanation: "As per DA-201 notes, fibre strength in cotton is determined using STELOMETER. Strength is expressed as maximum load in kg that a fibre bundle can take when stretched before breaking."
  },
  {
    id: "d201x_065",
    subject: "da-201",
    lecture: "lecture-15",
    lectureNo: 15,
    question: "Sugarcane contributes approximately what percentage of world sugar production?",
    options: ["45%", "55%", "62%", "75%"],
    correct: 2,
    explanation: "According to DA-201 notes, sugarcane crop contributes more than 62% of world sugar production."
  },
  {
    id: "d201x_066",
    subject: "da-201",
    lecture: "lecture-15",
    lectureNo: 15,
    question: "Which country has the largest sugarcane area in the world?",
    options: ["India", "China", "Brazil", "Australia"],
    correct: 2,
    explanation: "As per DA-201 notes, Brazil has the largest sugarcane area. India ranks second after Brazil in both area (4.1 m.ha) and sugarcane production."
  },
  {
    id: "d201x_067",
    subject: "da-201",
    lecture: "lecture-15",
    lectureNo: 15,
    question: "In terms of sugarcane productivity in India, which state leads?",
    options: ["Uttar Pradesh", "Maharashtra", "Tamil Nadu", "Karnataka"],
    correct: 2,
    explanation: "According to DA-201 notes, though UP dominates in production, Tamil Nadu leads in productivity with 105 t/ha, followed by Karnataka (88 t/ha) and Andhra Pradesh (82 t/ha)."
  },
  {
    id: "d201x_068",
    subject: "da-201",
    lecture: "lecture-16",
    lectureNo: 16,
    question: "In sugarcane, the Partha method of planting is recommended for:",
    options: ["Saline soils", "Areas subjected to waterlogging after planting", "Farms with drip irrigation", "Dry soil conditions only"],
    correct: 1,
    explanation: "As per DA-201 notes, Partha method is specifically recommended for areas subjected to water logging immediately after planting."
  },
  {
    id: "d201x_069",
    subject: "da-201",
    lecture: "lecture-17",
    lectureNo: 17,
    question: "In sugarcane fertilization, potassium should be applied along with nitrogen because:",
    options: ["K prevents N toxicity", "Better utilization of N is achieved in presence of K", "K reduces N volatilization", "K and N together improve soil pH"],
    correct: 1,
    explanation: "According to DA-201 notes, potassium application is normally done along with N because of better utilization of N in the presence of K."
  },
  {
    id: "d201x_070",
    subject: "da-201",
    lecture: "lecture-17",
    lectureNo: 17,
    question: "Weed control in sugarcane requires weed-free conditions for the first:",
    options: ["30-40 days", "50-60 days", "90-100 days", "120-130 days"],
    correct: 2,
    explanation: "As per DA-201 notes, sugarcane requires weed-free conditions for the first 90-100 days and is most sensitive to weeds during the tillering stage."
  },
  {
    id: "d201x_071",
    subject: "da-201",
    lecture: "lecture-18",
    lectureNo: 18,
    question: "Assertion (A): Detrashing in sugarcane is done at 150 DAP.\nReason (R): Detrashing improves air movement, reduces pest infestation and provides trash for mulching.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "Both statements are correct. Detrashing (removal of dry and green leaves) at 150 DAP enhances air movement, reduces pests like scales and mealy bugs, and provides trash for mulching."
  },
  {
    id: "d201x_072",
    subject: "da-201",
    lecture: "lecture-18",
    lectureNo: 18,
    question: "Assertion (A): Trash-twist propping is practiced in sugarcane.\nReason (R): Propping prevents crop lodging due to heavy winds by tying cane stalks using dry leaves twisted into a rope.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "Both statements are correct. Trash-twist propping involves twisting trash into a rope and tying cane stalks together to prevent lodging due to heavy winds."
  },
  {
    id: "d201x_073",
    subject: "da-201",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "Assertion (A): Ratoon crop of sugarcane occupies 50-55% of total cane area in India.\nReason (R): Ratooning reduces operational costs for seed and preparatory tillage by 25-30%.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 1,
    explanation: "Both statements are true but R is not the sole explanation for A. Ratoon occupies 50-55% of area due to multiple benefits including economic savings, early maturity, and equal or higher yields."
  },
  {
    id: "d201x_074",
    subject: "da-201",
    lecture: "lecture-20",
    lectureNo: 20,
    question: "Assertion (A): FCV tobacco is grown in Andhra Pradesh and Karnataka.\nReason (R): FCV stands for Flue-Cured Virginia tobacco requiring specific soil and climate conditions.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "Both A and R are true. FCV tobacco is grown in AP and Karnataka as these regions have the specific light soils and climate required for high-quality FCV tobacco production."
  },
  {
    id: "d201x_075",
    subject: "da-201",
    lecture: "lecture-21",
    lectureNo: 21,
    question: "Assertion (A): Tobacco seeds are unsuitable for direct field sowing and are raised in nurseries first.\nReason (R): Tobacco seeds are very small (0.75 mm long) and emerging seedlings are tiny and delicate.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "Both A and R are correct. The extremely small size of tobacco seeds (0.75 mm long) and the delicate nature of emerging seedlings make nursery raising essential before transplanting."
  },
  {
    id: "d201x_076",
    subject: "da-201",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Assertion (A): In groundnut, sulphur is highly essential for quality production.\nReason (R): Sulphur is directly involved in the biosynthesis of oil and improves nodulation of Rhizobium.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "Both A and R are correct. Sulphur is directly involved in oil biosynthesis, improves nodulation of Rhizobium, prevents premature leaf fall and increases pod and oil yield in groundnut."
  },
  {
    id: "d201x_077",
    subject: "da-201",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Assertion (A): Sesame is a short day plant.\nReason (R): High light intensity increases the number of capsules per plant in sesame.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 1,
    explanation: "Both statements are true but R is not the explanation for A. Sesame is a short day plant while high light intensity increasing capsule number is a separate yield factor."
  },
  {
    id: "d201x_078",
    subject: "da-201",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Assertion (A): Safflower is xerophytic in nature.\nReason (R): Spiny type of safflower has higher oil content than non-spiny type.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 1,
    explanation: "Both A and R are true but R is not the explanation for A. Safflower being xerophytic relates to drought tolerance, while oil content difference between spiny and non-spiny types is an unrelated genetic characteristic."
  },
  {
    id: "d201x_079",
    subject: "da-201",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Assertion (A): Sunflower is a photo-insensitive crop.\nReason (R): Sunflower can be cultivated in all seasons as it flowers at wide range of photoperiods.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "Both A and R are correct and R explains A. The photo-insensitivity of sunflower enables its cultivation in all seasons (kharif, rabi, summer) as it flowers across a wide range of photoperiods."
  },
  {
    id: "d201x_080",
    subject: "da-201",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Assertion (A): Cotton cultivation is traced to the Indus Valley civilization.\nReason (R): Every available evidence proves India is the original habitat of cotton.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "Both statements are true and R explains A. India appears to have been the centre of an important cotton industry as early as 1500 BC and every available evidence proves India is the original habitat."
  },
  {
    id: "d201x_081",
    subject: "da-201",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Assertion (A): Castor is a deep-rooted plant requiring deep ploughing during land preparation.\nReason (R): Castor tap root extends beyond 2-3 meters for extraction of soil moisture from deep layers.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "Both A and R are correct. Castor being deep-rooted with tap roots extending to 2-3 meters necessitates deep ploughing (less than 45 cm) for adequate root support and moisture access."
  },
  {
    id: "d201x_082",
    subject: "da-201",
    lecture: "lecture-20",
    lectureNo: 20,
    question: "Assertion (A): Tobacco was introduced into India in the beginning of the 17th century.\nReason (R): Christopher Columbus discovered the narcotic qualities of tobacco in 1492.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 1,
    explanation: "Both statements are true but R does not explain A. Columbus discovered tobacco in 1492, but tobacco was introduced to India specifically in the beginning of the 17th century."
  },
  {
    id: "d201x_083",
    subject: "da-201",
    lecture: "lecture-17",
    lectureNo: 17,
    question: "Assertion (A): Late application of nitrogen beyond 120 days in sugarcane should be avoided.\nReason (R): Late N application reduces juice quality, increases soluble N in juice and forms water shoots.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "Both A and R are correct. As per DA-201 notes, late N application beyond 120 days reduces juice quality, increases soluble N in juice and leads to formation of water shoots."
  },
  {
    id: "d201x_084",
    subject: "da-201",
    lecture: "lecture-14",
    lectureNo: 14,
    question: "Assertion (A): Gossypium hirsutum occupies more than 90% of cotton cultivation area.\nReason (R): G. hirsutum (American cotton) has medium coarse fibre of 27-30 mm length and is widely adaptable.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 1,
    explanation: "Both statements are true but R is not the complete explanation for A. G. hirsutum dominates in area due to multiple factors including yield potential, adaptation and fibre quality."
  },
  {
    id: "d201x_085",
    subject: "da-201",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Assertion (A): Groundnut performs best in sandy loam soils.\nReason (R): Heavy and stiff clay soils interfere with peg penetration and make harvesting difficult in groundnut.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "Both A and R are correct. Sandy loam is ideal for groundnut as heavy clay soils become hard in dry weather, interfering with peg penetration and making harvesting difficult."
  },
  {
    id: "d201x_086",
    subject: "da-201",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Match the following India's global rank in oilseed crops:\n     Column-I (Crop)    |  Column-II (Global Rank)  |  Column-III (Key Feature)\nA.  Castor             |  1.  First               |  i.   Non-edible oil crop\nB.  Groundnut          |  2.  Second              |  ii.  Also used for edible oil\nC.  Soybean            |  3.  Fifth               |  iii. High protein content\nD.  Sunflower          |  4.  Fifth               |  iv.  Linoleic acid rich",
    options: ["A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-2-i,  B-1-ii,  C-4-iii,  D-3-iv", "A-1-ii, B-2-i,   C-3-iv,   D-4-iii", "A-3-i,  B-1-ii,  C-2-iii,  D-4-iv"],
    correct: 0,
    explanation: "India ranks first in castor (non-edible oil crop), second in groundnut, fifth in soybean, and fifth in sunflower globally as per DA-201 notes."
  },
  {
    id: "d201x_087",
    subject: "da-201",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Match the following castor varieties with their characteristics:\n     Column-I (Variety)  |  Column-II (Feature)             |  Column-III (Duration days)\nA.  Kranti (PCS-4)     |  1.  Drought tolerant bold seed   |  i.   90-150\nB.  Haritha (PCS-124)  |  2.  Wilt tolerant                |  ii.  90-150\nC.  GCH-4              |  3.  Wilt and root rot tolerant   |  iii. 150-210\nD.  Jwala (48-1)       |  4.  Wilt and botrytis tolerant   |  iv.  150-180",
    options: ["A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-2-i,  B-1-ii,  C-4-iii,  D-3-iv", "A-1-ii, B-2-i,   C-3-iv,   D-4-iii", "A-4-i,  B-3-ii,  C-1-iii,  D-2-iv"],
    correct: 0,
    explanation: "Kranti (PCS-4) is drought tolerant bold seed (90-150 days), Haritha (PCS-124) is wilt tolerant (90-150 days), GCH-4 is tolerant to wilt and root rot (150-210 days), Jwala (48-1) is tolerant to wilt and botrytis (150-180 days)."
  },
  {
    id: "d201x_088",
    subject: "da-201",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Match the following safflower varieties with their key features:\n     Column-I (Variety)  |  Column-II (Oil content)  |  Column-III (Feature)\nA.  TSF-1              |  1.  28-30%               |  i.   Wilt and Jassid resistant\nB.  Manjeera           |  2.  27-30%               |  ii.  Yellow flowers turning orange\nC.  Nari-6             |  3.  30%                  |  iii. Non-spine easy to harvest\nD.  DSH-129            |  4.  31%                  |  iv.  Wilt resistant",
    options: ["A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-2-i,  B-3-ii,  C-1-iii,  D-4-iv", "A-1-ii, B-2-i,   C-4-iii,  D-3-iv", "A-4-i,  B-1-ii,  C-2-iii,  D-3-iv"],
    correct: 0,
    explanation: "TSF-1 (28-30% oil, Wilt and Jassid resistant), Manjeera (27-30% oil, yellow flowers turning orange), Nari-6 (30% oil, non-spine easy harvest), DSH-129 (31% oil recovery, wilt resistant)."
  },
  {
    id: "d201x_089",
    subject: "da-201",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Match the following cotton species with their chromosome number and fibre type:\n     Column-I (Species)    |  Column-II (Haploid chr)  |  Column-III (Fibre type)\nA.  G. hirsutum           |  1.  26                   |  i.   Medium coarse 27-30 mm\nB.  G. barbadense         |  2.  26                   |  ii.  Fine extra long up to 2 inch\nC.  G. arboreum           |  3.  13                   |  iii. Coarse short 0.5-0.875 inch\nD.  G. herbaceum          |  4.  13                   |  iv.  Coarse short 0.5-0.875 inch",
    options: ["A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-2-ii, B-1-i,   C-3-iii,  D-4-iv", "A-1-ii, B-2-i,   C-4-iii,  D-3-iv", "A-3-i,  B-4-ii,  C-1-iii,  D-2-iv"],
    correct: 0,
    explanation: "G. hirsutum (26 chr, 27-30 mm medium coarse), G. barbadense (26 chr, fine extra-long up to 2 inch), G. arboreum (13 chr, coarse short), G. herbaceum (13 chr, coarse short)."
  },
  {
    id: "d201x_090",
    subject: "da-201",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Match the following sesame varieties with their seed colour and season:\n     Column-I (Variety)   |  Column-II (Seed colour)  |  Column-III (Season)\nA.  Gowri               |  1.  Brown                |  i.   Kharif\nB.  Rajeshwari          |  2.  White                |  ii.  Late Kharif and Rabi\nC.  Swetha til          |  3.  White                |  iii. Late Kharif and Rabi\nD.  Yellamanchali-17    |  4.  Light brown          |  iv.  Early Kharif",
    options: ["A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-2-i,  B-1-ii,  C-4-iii,  D-3-iv", "A-1-iii,B-2-ii,  C-3-i,   D-4-iv", "A-4-i,  B-3-ii,  C-1-iii,  D-2-iv"],
    correct: 0,
    explanation: "Gowri - Brown seeded Kharif; Rajeshwari - White seeded Late Kharif/Rabi; Swetha til - White seeded Late Kharif/Rabi; Yellamanchali-17 - Light brown seeded Early Kharif."
  },
  {
    id: "d201x_091",
    subject: "da-201",
    lecture: "lecture-15",
    lectureNo: 15,
    question: "Match the following sugarcane states with their production data in India:\n     Column-I (State)   |  Column-II (Area rank)  |  Column-III (Production or Productivity)\nA.  Uttar Pradesh      |  1.  First              |  i.   134 MT production highest\nB.  Maharashtra        |  2.  Second             |  ii.  79 MT production\nC.  Tamil Nadu         |  3.  Major producer     |  iii. 105 t/ha highest productivity\nD.  Karnataka          |  4.  Major producer     |  iv.  88 t/ha productivity",
    options: ["A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-2-i,  B-1-ii,  C-3-iii,  D-4-iv", "A-1-ii, B-2-i,   C-4-iii,  D-3-iv", "A-3-i,  B-4-ii,  C-1-iii,  D-2-iv"],
    correct: 0,
    explanation: "UP occupies first area (134 MT production), Maharashtra second area (79 MT production), Tamil Nadu leads in productivity (105 t/ha), Karnataka has 88 t/ha productivity."
  },
  {
    id: "d201x_092",
    subject: "da-201",
    lecture: "lecture-11",
    lectureNo: 11,
    question: "Match the following cotton sowing regions with their spacing and method:\n     Column-I (Region/Type)   |  Column-II (Spacing)     |  Column-III (Method)\nA.  Daesi types Mungari      |  1.  60 x 22 cm          |  i.   By seed drill\nB.  American types Coastal   |  2.  90-150 x 45-60 cm   |  ii.  By marker\nC.  Hybrids Telangana        |  3.  90-120 x 60-90 cm   |  iii. By marker\nD.  Daesi Adilabad Gaurani   |  4.  60 x 30 cm          |  iv.  By seed drill",
    options: ["A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-2-i,  B-1-ii,  C-4-iii,  D-3-iv", "A-1-ii, B-2-i,   C-3-iv,   D-4-iii", "A-4-i,  B-3-ii,  C-2-iii,  D-1-iv"],
    correct: 0,
    explanation: "Mungari daesi: 60x22 cm by seed drill; American coastal: 90-150x45-60 cm by marker; Hybrid Telangana: 90-120x60-90 cm by marker; Daesi Adilabad: 60x30 cm by seed drill."
  },
  {
    id: "d201x_093",
    subject: "da-201",
    lecture: "lecture-20",
    lectureNo: 20,
    question: "Match the following tobacco types with their growing regions in India:\n     Column-I (Type)          |  Column-II (State)                  |  Column-III (Region)\nA.  FCV tobacco              |  1.  Andhra Pradesh and Karnataka    |  i.   Traditional belt\nB.  Bidi tobacco             |  2.  Gujarat, Karnataka and AP       |  ii.  Nipani area of Karnataka\nC.  Cigar and Cheroot        |  3.  Tamil Nadu and West Bengal      |  iii. Coastal areas\nD.  Hookah tobacco           |  4.  Assam WB Bihar UP and Gujarat   |  iv.  North and East India",
    options: ["A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-2-i,  B-1-ii,  C-4-iii,  D-3-iv", "A-1-iii,B-2-iv,  C-3-i,   D-4-ii", "A-4-i,  B-3-ii,  C-2-iii,  D-1-iv"],
    correct: 0,
    explanation: "FCV tobacco - AP and Karnataka; Bidi tobacco - Gujarat, Nipani area of Karnataka and Nandyal area of AP; Cigar and Cheroot - Tamil Nadu and West Bengal; Hookah - Assam, WB, Bihar, UP and Gujarat."
  },
  {
    id: "d201x_094",
    subject: "da-201",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Match the following groundnut intercropping systems with their row ratios:\n     Column-I (Intercrop)       |  Column-II (Row ratio)  |  Column-III (Crop type)\nA.  Groundnut plus Pigeon pea  |  1.  7:1 to 15:1        |  i.   Long duration legume\nB.  Groundnut plus Castor      |  2.  5:1 or 7:1         |  ii.  Industrial crop\nC.  Groundnut plus Pearlmillet |  3.  3:1                |  iii. Cereal crop\nD.  Groundnut plus Cowpea      |  4.  6:1                |  iv.  Short duration legume",
    options: ["A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-2-i,  B-1-ii,  C-3-iii,  D-4-iv", "A-1-ii, B-2-i,   C-4-iii,  D-3-iv", "A-4-i,  B-3-ii,  C-2-iii,  D-1-iv"],
    correct: 0,
    explanation: "Groundnut plus Pigeon pea 7:1 to 15:1 (long duration legume), plus Castor 5:1 or 7:1 (industrial crop), plus Pearlmillet 3:1 (cereal crop), plus Cowpea 6:1 (short duration legume) as per DA-201 notes."
  },
  {
    id: "d201x_095",
    subject: "da-201",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Match the following groundnut varieties with their characteristics:\n     Column-I (Variety)  |  Column-II (Season)    |  Column-III (Key feature)\nA.  Vemana (K-134)     |  1.  Kharif and Rabi    |  i.   Spanish bunch drought tolerant with dormancy\nB.  Kadiri-4 (K-150)   |  2.  Rabi only          |  ii.  Short duration non-dormant\nC.  Tirupati-3         |  3.  Kharif and Rabi    |  iii. Bunch type tolerant to kalahasti malady\nD.  Abhaya (TCGS 25)   |  4.  Kharif and Rabi    |  iv.  Semi-spreading tolerant to tikka leaf spot",
    options: ["A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-2-i,  B-1-ii,  C-4-iii,  D-3-iv", "A-1-ii, B-2-iii, C-3-i,   D-4-iv", "A-3-i,  B-4-ii,  C-1-iii,  D-2-iv"],
    correct: 0,
    explanation: "Vemana (K-134) is Spanish bunch drought tolerant with dormancy; Kadiri-4 (K-150) is Rabi only short duration non-dormant; Tirupati-3 is bunch type tolerant to kalahasti malady; Abhaya is semi-spreading tolerant to tikka leaf spot."
  },
  {
    id: "d201x_096",
    subject: "da-201",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Match the following sunflower varieties and hybrids with their features:\n     Column-I (Variety)  |  Column-II (Duration)   |  Column-III (Feature)\nA.  Morden desi         |  1.  75-80 days          |  i.   30-38% oil suitable all states\nB.  KBSH-1 hybrid       |  2.  90 days             |  ii.  41-44% oil all India recommended\nC.  DRSH-1 hybrid       |  3.  95 days             |  iii. 41-43% oil downy mildew resistant\nD.  NDSH-1 hybrid       |  4.  80-85 days          |  iv.  High yielding high oil recovery",
    options: ["A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-2-i,  B-1-ii,  C-4-iii,  D-3-iv", "A-1-ii, B-2-iii, C-3-i,   D-4-iv", "A-4-i,  B-3-ii,  C-2-iii,  D-1-iv"],
    correct: 0,
    explanation: "Morden (75-80 days, 30-38% oil), KBSH-1 (90 days, 41-44% oil, recommended for all India), DRSH-1 (95 days, 41-43% oil, downy mildew resistant), NDSH-1 (80-85 days, high oil recovery)."
  },
  {
    id: "d201x_097",
    subject: "da-201",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Match the following groundnut fertilizer recommendations for both seasons:\n     Column-I (Nutrient)  |  Column-II (Kharif kg/ha)  |  Column-III (Rabi kg/ha)\nA.  Nitrogen              |  1.  8                      |  i.   12\nB.  Phosphorus            |  2.  16                     |  ii.  16\nC.  Potassium             |  3.  20                     |  iii. 20\nD.  Gypsum                |  4.  200                    |  iv.  200",
    options: ["A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-2-i,  B-3-ii,  C-1-iii,  D-4-iv", "A-1-iii,B-2-ii,  C-3-i,   D-4-iv", "A-4-i,  B-3-ii,  C-2-iii,  D-1-iv"],
    correct: 0,
    explanation: "For groundnut: N - 8 kg/ha kharif, 12 rabi; P - 16 kg/ha both seasons; K - 20 kg/ha both seasons; Gypsum - 200 kg/ha both seasons as per DA-201 notes."
  },
  {
    id: "d201x_098",
    subject: "da-201",
    lecture: "lecture-16",
    lectureNo: 16,
    question: "Match the following sugarcane planting methods with their suitable conditions:\n     Column-I (Method)        |  Column-II (Suitability)              |  Column-III (Region)\nA.  Flat bed planting         |  1.  Popular in North India            |  i.   Maharashtra\nB.  Ridge and Furrow method   |  2.  Areas with drainage problems     |  ii.  Peninsular India heavy soils\nC.  Pit planting              |  3.  Contour cultivation on hills     |  iii. Assam and Kerala hilly tracts\nD.  Paired row planting       |  4.  Farms with drip irrigation       |  iv.  All regions",
    options: ["A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-2-i,  B-3-ii,  C-1-iii,  D-4-iv", "A-1-iii,B-2-i,   C-3-iv,   D-4-ii", "A-4-i,  B-3-ii,  C-2-iii,  D-1-iv"],
    correct: 0,
    explanation: "Flat bed - popular in North India (Maharashtra); Ridge and furrow - areas with drainage problems (Peninsular India); Pit planting - Assam and Kerala hilly tracts; Paired row - farms with drip irrigation."
  },
  {
    id: "d201x_099",
    subject: "da-201",
    lecture: "lecture-22",
    lectureNo: 22,
    question: "Match the following FCV tobacco varieties with their year of release and key features:\n     Column-I (Variety)  |  Column-II (Year)  |  Column-III (Key Feature)\nA.  Jayasri            |  1.  1979          |  i.   For TBS 1990 kg/ha yield\nB.  K-326 NLS-4        |  2.  1998          |  ii.  For NLS and KLS tolerant to black shank\nC.  Hemadri II-1624    |  3.  2002          |  iii. For Traditional Black Soils 2500 kg/ha\nD.  Mc Nair 12         |  4.  1986          |  iv.  For NLS tolerant to black shank",
    options: ["A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-2-i,  B-3-ii,  C-1-iii,  D-4-iv", "A-1-iii,B-2-i,   C-3-ii,   D-4-iv", "A-4-i,  B-3-ii,  C-2-iii,  D-1-iv"],
    correct: 0,
    explanation: "Jayasri (1979) - For TBS 1990 kg/ha; K-326 (1998) - For NLS and KLS tolerant to black shank; Hemadri (2002) - For Traditional Black Soils 2500 kg/ha; Mc Nair 12 (1986) - For NLS tolerant to black shank."
  },
  {
    id: "d201x_100",
    subject: "da-201",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Match the following sunflower nutrient requirements with their application schedule:\n     Column-I (Nutrient)    |  Column-II (Quantity)       |  Column-III (Application time)\nA.  Nitrogen hybrid rabi    |  1.  30 kg/ha in 3 splits   |  i.   Sowing 30 DAS and 50-60 DAS\nB.  Phosphorus              |  2.  24-36 kg/ha            |  ii.  Basal dose\nC.  Potassium               |  3.  12 kg/ha               |  iii. Basal dose\nD.  Sulphur                 |  4.  25 kg/ha               |  iv.  At last ploughing",
    options: ["A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-2-i,  B-3-ii,  C-1-iii,  D-4-iv", "A-1-iii,B-2-i,   C-3-ii,   D-4-iv", "A-4-i,  B-3-ii,  C-2-iii,  D-1-iv"],
    correct: 0,
    explanation: "Sunflower: N for rabi hybrids 30 kg/ha in 3 splits (sowing, 30 DAS, 50-60 DAS); P 24-36 kg/ha as basal; K 12 kg/ha as basal; Sulphur 25 kg/ha at last ploughing. SSP is best source for P as it also supplies sulphur."
  },
"""

filepath_lectures = r'C:\Users\bioas\Agricet Mock Test Series\src\data\questions\da-201-lectures.ts'
filepath_combined = r'C:\Users\bioas\Agricet Mock Test Series\src\data\questions\da-201.ts'

for filepath in [filepath_lectures, filepath_combined]:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    insert_pos = content.rfind('];')
    if insert_pos == -1:
        print(f'ERROR: could not find ]; in {filepath}')
        continue
    new_content = content[:insert_pos] + new_block + '\n' + content[insert_pos:]
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f'Appended to {filepath}')
