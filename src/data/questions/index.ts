import { agronomyQuestions } from "./agronomy";
import { agronomyQuestions2 } from "./agronomy2";
import { soilScienceQuestions } from "./soil-science";
import { horticultureQuestions } from "./horticulture";
import { plantPathologyQuestions } from "./plant-pathology";
import { entomologyQuestions } from "./entomology";
import { geneticsQuestions } from "./genetics";
import { biochemistryQuestions } from "./biochemistry";
import { economicsQuestions } from "./economics";
import { farmMachineryQuestions } from "./farm-machinery";
import { irrigationQuestions } from "./irrigation";
import { extensionQuestions } from "./extension";
import { cropPhysiologyQuestions } from "./crop-physiology";
import { seedTechnologyQuestions } from "./seed-technology";
import { meteorologyQuestions } from "./meteorology";

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
