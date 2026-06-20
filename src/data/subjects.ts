export interface Subject {
  id: string;
  name: string;
  code: string;
  icon: string;
  color: string;
  description: string;
  totalQuestions: number;
  category: string;
}

// 18 subjects total: 15 PJTSAU DA-XXX + DA-262 + DA-263 + General Agriculture
export const SUBJECTS: Subject[] = [
  // ── 15 PJTSAU Diploma Core Subjects (DA codes) ──
  { id: "da-101", code: "DA-101", name: "Principles of Agronomy",                    icon: "🌱", color: "green",   description: "Tillage, sowing, crop rotation, weeds, water management, dryland farming, cropping systems", totalQuestions: 200, category: "Core" },
  { id: "da-102", code: "DA-102", name: "Crop Production-I (Kharif Crops)",          icon: "🌾", color: "yellow",  description: "Paddy, maize, sorghum, pearl millet, groundnut, cotton cultivation", totalQuestions: 200, category: "Core" },
  { id: "da-111", code: "DA-111", name: "Basic Principles of Plant Breeding, Seed Production, Testing & Certification", icon: "🧬", color: "purple", description: "Floral biology, breeding methods, hybridization, seed production, seed testing, certification standards", totalQuestions: 200, category: "Core" },
  { id: "da-121", code: "DA-121", name: "Soil Chemistry & Fertility",                 icon: "🪨", color: "stone",   description: "Soil formation, texture, structure, pH, fertility, nutrient management", totalQuestions: 200, category: "Core" },
  { id: "da-122", code: "DA-122", name: "Manures and Fertilizers",                     icon: "💧", color: "blue",    description: "FYM, compost, vermicompost, green manures, biofertilizers, N/P/K fertilizers, micronutrients, INM", totalQuestions: 200, category: "Core" },
  { id: "da-131", code: "DA-131", name: "General Entomology",                         icon: "🐛", color: "lime",    description: "Arthropoda, insect morphology, classification, life cycles", totalQuestions: 200, category: "Core" },
  { id: "da-132", code: "DA-132", name: "Crop Pests & their Management",              icon: "🐞", color: "orange",  description: "Rice, wheat, cotton, vegetable pests, IPM strategies", totalQuestions: 200, category: "Core" },
  { id: "da-151", code: "DA-151", name: "Farm Power, Machinery & Implements",         icon: "🚜", color: "amber",   description: "Tractors, tillage implements, sowing, harvesting, threshing machinery", totalQuestions: 200, category: "Engineering" },
  { id: "da-171", code: "DA-171", name: "Plant Pathology & Microbiology",             icon: "🦠", color: "violet",  description: "Plant diseases, causal organisms, symptoms, disease management", totalQuestions: 200, category: "Core" },
  { id: "da-201", code: "DA-201", name: "Crop Production-II (Rabi & Oilseeds)",       icon: "🌻", color: "gold",    description: "Wheat, sunflower, mustard, castor, sesame, chickpea, sugarcane", totalQuestions: 200, category: "Core" },
  { id: "da-241", code: "DA-241", name: "Agricultural Economics",                     icon: "📊", color: "indigo",  description: "Farm management, marketing, MSP, cooperatives, credit, schemes", totalQuestions: 200, category: "Social" },
  { id: "da-252", code: "DA-252", name: "Land Surveying, Water Engineering & Greenhouse Tech.", icon: "📐", color: "slate",   description: "Surveying, chain & compass survey, soil & water conservation, crop-water (Delta/Duty), irrigation methods, pumps, greenhouse technology", totalQuestions: 200, category: "Engineering" },
  { id: "da-281", code: "DA-281", name: "Forestry, Medicinal and Aromatic Plants",     icon: "🌳", color: "emerald", description: "Forest types, silviculture, agroforestry, medicinal plants (Ashwagandha, Tulsi, Kalmegh), aromatic plants (Lemon grass, Vetiver, Geranium)", totalQuestions: 200, category: "Core" },
  { id: "da-282", code: "DA-282", name: "Horticultural Crops & their Management",     icon: "🍅", color: "red",     description: "Mango, banana, citrus, papaya, tomato, chilli, onion, marigold", totalQuestions: 200, category: "Core" },
  { id: "da-291", code: "DA-291", name: "Agricultural Extension & Rural Development", icon: "📢", color: "emerald", description: "Extension education, rural sociology, government schemes, Panchayati Raj", totalQuestions: 200, category: "Social" },

  // ── 2 PJTSAU Diploma General Subjects ──
  { id: "computer-applications", code: "DA-262", name: "Introduction to Computer Applications", icon: "💻", color: "slate", description: "Computers, DOS, Windows, MS Office, Internet basics", totalQuestions: 200, category: "General" },
  { id: "english-communication", code: "DA-263", name: "Communication Skills in English",       icon: "📝", color: "rose",  description: "Grammar, tenses, voices, letter writing, vocabulary", totalQuestions: 200, category: "General" },

  // ── General Agriculture (separate bank) ──
  { id: "general-agriculture",   code: "GEN-AGRI", name: "General Agriculture",                 icon: "🌍", color: "green", description: "Current affairs, agri schemes, history, FAO/ICAR/PJTSAU, awards, general knowledge", totalQuestions: 100, category: "General" },
];

export const DEMO_SUBJECT_ID = "da-102";
export const DEMO_QUESTION_LIMIT = 10;
