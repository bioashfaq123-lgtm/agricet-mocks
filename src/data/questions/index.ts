import { Question } from "@/types";
import { agronomyQuestions } from "./agronomy";
import { agronomyQuestions2 } from "./agronomy2";
import { soilScienceQuestions } from "./soil-science";
import { horticultureQuestions } from "./horticulture";
import { plantPathologyQuestions } from "./plant-pathology";
import { entomologyQuestions } from "./entomology";
import { geneticsQuestions } from "./genetics";
import { biochemistryQuestions } from "./biochemistry";
import { economicsQuestions } from "./economics";

const makePlaceholders = (subject: string, start: number, count: number): Question[] =>
  Array.from({ length: count }, (_, i) => ({
    id: `${subject.slice(0,3)}${String(start + i).padStart(3, "0")}`,
    subject,
    question: `[${subject.toUpperCase()} Q${start + i}] Sample AGRICET question — topic ${start + i}`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    correct: (start + i) % 4,
    explanation: `Detailed explanation for ${subject} question ${start + i}.`,
  }));

const farmMachineryQuestions  = makePlaceholders("farm-machinery",  1, 50);
const irrigationQuestions     = makePlaceholders("irrigation",      1, 50);
const extensionQuestions      = makePlaceholders("extension",       1, 50);
const cropPhysiologyQuestions = makePlaceholders("crop-physiology", 1, 50);
const seedTechnologyQuestions = makePlaceholders("seed-technology", 1, 50);
const meteorologyQuestions    = makePlaceholders("meteorology",     1, 50);

export const ALL_QUESTIONS: Record<string, Question[]> = {
  "agronomy":        [...agronomyQuestions, ...agronomyQuestions2],
  "soil-science":    soilScienceQuestions,
  "horticulture":    horticultureQuestions,
  "plant-pathology": plantPathologyQuestions,
  "entomology":      entomologyQuestions,
  "genetics":        geneticsQuestions,
  "biochemistry":    biochemistryQuestions,
  "farm-machinery":  farmMachineryQuestions,
  "irrigation":      irrigationQuestions,
  "extension":       extensionQuestions,
  "economics":       economicsQuestions,
  "crop-physiology": cropPhysiologyQuestions,
  "seed-technology": seedTechnologyQuestions,
  "meteorology":     meteorologyQuestions,
};

export function getShuffledQuestions(subjectId: string, count = 50): Question[] {
  const qs = ALL_QUESTIONS[subjectId] ?? [];
  const shuffled = [...qs].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

export function getQuestions(subjectId: string, limit?: number): Question[] {
  const qs = ALL_QUESTIONS[subjectId] ?? [];
  if (limit) return qs.slice(0, limit);
  return [...qs].sort(() => Math.random() - 0.5);
}
