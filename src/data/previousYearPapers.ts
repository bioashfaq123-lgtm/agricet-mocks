export interface PreviousYearPaper {
  year: number;
  title: string;
  totalQuestions: number;
  duration: number;
  description: string;
  available: boolean;
}

export const PREVIOUS_YEAR_PAPERS: PreviousYearPaper[] = [
  { year: 2025, title: "AGRICET 2025 – DA Official Question Paper", totalQuestions: 120, duration: 120, description: "Official AGRICET 2025 question paper for Diploma in Agriculture candidates.", available: true },
  { year: 2024, title: "AGRICET 2024 – DA Question Paper with Key", totalQuestions: 120, duration: 120, description: "Complete 2024 question paper with official answer key.", available: true },
  { year: 2023, title: "AGRICET 2023 – DA Question Paper with Key", totalQuestions: 120, duration: 120, description: "Full 2023 question paper with detailed official answer key.", available: true },
  { year: 2022, title: "AGRICET 2022 – DA Question Paper", totalQuestions: 100, duration: 100, description: "2022 question paper for Diploma in Agriculture stream.", available: false },
  { year: 2021, title: "AGRICET 2021 – DA Question Paper", totalQuestions: 100, duration: 100, description: "2021 question paper for Diploma in Agriculture stream.", available: false },
];

// Sample previous year questions (2023 paper based on provided material)
export interface PYQQuestion {
  id: string; year: number; question: string;
  options: string[]; correct: number; explanation: string; subject: string;
}

export const PYQ_2023: PYQQuestion[] = [
  { id:"pyq23_001", year:2023, subject:"agronomy", question:"The crop which produces both food and fuel is:", options:["Sugarcane","Cotton","Jatropha","Castor"], correct:0, explanation:"Sugarcane produces both food (sugar, jaggery, food-grade ethanol) and fuel (ethanol for biofuel). It is the primary source of bio-ethanol in India's fuel blending program." },
  { id:"pyq23_002", year:2023, subject:"soil-science", question:"Which soil type is predominantly found in Telangana?", options:["Alluvial","Red","Black","Laterite"], correct:1, explanation:"Red soils (Alfisols) are predominant in Telangana, formed from crystalline and metamorphic rocks. They are generally poor in nitrogen, phosphorus, and organic matter." },
  { id:"pyq23_003", year:2023, subject:"horticulture", question:"The mango variety 'Banginapalli' is also known as:", options:["Alphonso","Safeda","Baneshan","Dashehari"], correct:2, explanation:"Banginapalli is also known as 'Baneshan' in Telangana and Andhra Pradesh. It is an oblong, yellow-green mango with a rich, sweet taste and low fiber content." },
  { id:"pyq23_004", year:2023, subject:"genetics", question:"The process of producing genetically identical plants from somatic cells in tissue culture is called:", options:["Hybridization","Somatic embryogenesis","Meiosis","Conjugation"], correct:1, explanation:"Somatic embryogenesis is the process by which somatic cells develop into embryo-like structures (somatic embryos) that grow into complete plants. It is used for clonal propagation in tissue culture." },
  { id:"pyq23_005", year:2023, subject:"plant-pathology", question:"'Blast disease' in rice is caused by:", options:["Bacterial pathogen","Pyricularia oryzae (fungal)","Viral pathogen","Nematode"], correct:1, explanation:"Rice blast, the most destructive rice disease worldwide, is caused by the fungal pathogen Magnaporthe oryzae (anamorph: Pyricularia oryzae). It affects all above-ground parts." },
  { id:"pyq23_006", year:2023, subject:"entomology", question:"The 'deadheart' symptom in paddy is caused by:", options:["Stem borer","Leaf folder","Brown plant hopper","Gall midge"], correct:0, explanation:"Deadheart is a symptom caused by the paddy stem borer (Scirpophaga incertulas). Larvae bore into the stem and cut the central shoot, causing the affected tiller to die (deadheart) in vegetative stage." },
  { id:"pyq23_007", year:2023, subject:"biochemistry", question:"Which of the following is a water-soluble vitamin?", options:["Vitamin A","Vitamin D","Vitamin K","Vitamin C (Ascorbic acid)"], correct:3, explanation:"Vitamin C (ascorbic acid) is water-soluble. Fat-soluble vitamins are A, D, E, and K. Water-soluble vitamins (B complex and C) are not stored in the body and must be consumed regularly." },
  { id:"pyq23_008", year:2023, subject:"economics", question:"The minimum price guaranteed to farmers by the government is called:", options:["Market price","Minimum Support Price (MSP)","Farm gate price","Floor price"], correct:1, explanation:"Minimum Support Price (MSP) is the price at which the government procures crops from farmers, guaranteeing a minimum income and protecting them from market price fluctuations." },
  { id:"pyq23_009", year:2023, subject:"agronomy", question:"Which of the following is the recommended plant population for sugarcane?", options:["10,000 setts/ha","75,000 setts/ha","1,50,000 setts/ha","3,00,000 setts/ha"], correct:1, explanation:"The recommended plant population for sugarcane is 75,000 setts per hectare (3-budded setts) at 90×60 cm or 90×45 cm spacing for optimal cane yield and quality." },
  { id:"pyq23_010", year:2023, subject:"extension", question:"Which agricultural extension approach reaches maximum farmers in minimum time?", options:["Individual contact","Group method","Mass media method","Farm demonstration"], correct:2, explanation:"Mass media methods (radio, television, newspapers, mobile apps) reach the maximum number of farmers simultaneously with minimum cost and time, though without individual feedback." },
  { id:"pyq23_011", year:2023, subject:"soil-science", question:"The process by which plant nutrients are released from organic matter by microbial decomposition is called:", options:["Mineralization","Immobilization","Humification","Nitrification"], correct:0, explanation:"Mineralization is the conversion of organic nutrient forms (organic N, P, S) to inorganic/mineral forms available to plants (NH₄⁺, H₂PO₄⁻, SO₄²⁻) by microbial decomposition." },
  { id:"pyq23_012", year:2023, subject:"horticulture", question:"'Ambe bahar' in mango refers to flowering induced by:", options:["Winter rainfall","Spring season","Monsoon irrigation after a dry spell","Pre-monsoon showers"], correct:2, explanation:"'Ambe bahar' (mango bahar) is the flowering season induced in mango by stress (water stress followed by irrigation) to synchronize flowering and fruit production for the market." },
];
