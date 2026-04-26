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

export const SUBJECTS: Subject[] = [
  { id: "agronomy",        code: "DA-101", name: "Principles of Agronomy",           icon: "🌾", color: "green",   description: "Crop production, tillage, crop rotation, dryland farming", totalQuestions: 200, category: "Core" },
  { id: "soil-science",    code: "DA-102", name: "Soil Science & Ag. Chemistry",     icon: "🌱", color: "amber",   description: "Soil types, properties, fertility, nutrients, pH", totalQuestions: 200, category: "Core" },
  { id: "horticulture",    code: "DA-103", name: "Horticulture",                     icon: "🍅", color: "red",     description: "Fruit crops, vegetables, floriculture, post-harvest", totalQuestions: 200, category: "Core" },
  { id: "plant-pathology", code: "DA-104", name: "Plant Pathology",                  icon: "🍃", color: "lime",    description: "Plant diseases, pathogens, management, biocontrol", totalQuestions: 200, category: "Core" },
  { id: "entomology",      code: "DA-105", name: "Agricultural Entomology",          icon: "🦟", color: "yellow",  description: "Insect pests, IPM, pesticides, beneficial insects", totalQuestions: 200, category: "Core" },
  { id: "genetics",        code: "DA-106", name: "Genetics & Plant Breeding",        icon: "🧬", color: "purple",  description: "Heredity, variation, plant breeding methods, varieties", totalQuestions: 200, category: "Core" },
  { id: "biochemistry",    code: "DA-107", name: "Agricultural Biochemistry",        icon: "⚗️", color: "blue",    description: "Carbohydrates, proteins, lipids, enzymes, vitamins", totalQuestions: 200, category: "Science" },
  { id: "farm-machinery",  code: "DA-108", name: "Farm Machinery & Power",           icon: "🚜", color: "orange",  description: "Tractors, tillage implements, irrigation pumps, harvesters", totalQuestions: 200, category: "Engineering" },
  { id: "irrigation",      code: "DA-109", name: "Irrigation & Water Management",   icon: "💧", color: "sky",     description: "Water management, irrigation methods, drainage systems", totalQuestions: 200, category: "Engineering" },
  { id: "extension",       code: "DA-110", name: "Ag. Extension Education",         icon: "📢", color: "pink",    description: "Extension methods, rural sociology, communication", totalQuestions: 200, category: "Social" },
  { id: "economics",       code: "DA-111", name: "Agricultural Economics",           icon: "📊", color: "indigo",  description: "Farm management, marketing, cooperatives, credit", totalQuestions: 200, category: "Social" },
  { id: "crop-physiology", code: "DA-112", name: "Crop Physiology & Botany",        icon: "🌿", color: "emerald", description: "Photosynthesis, respiration, transpiration, plant growth", totalQuestions: 200, category: "Science" },
  { id: "seed-technology", code: "DA-113", name: "Seed Technology",                  icon: "🌰", color: "teal",    description: "Seed quality, certification, storage, germination", totalQuestions: 200, category: "Core" },
  { id: "meteorology",     code: "DA-114", name: "Ag. Meteorology & Physics",       icon: "🌦️", color: "cyan",    description: "Weather, climate, rainfall, humidity, soil physics", totalQuestions: 200, category: "Science" },
];

export const DEMO_SUBJECT_ID = "agronomy";
export const DEMO_QUESTION_LIMIT = 10;
