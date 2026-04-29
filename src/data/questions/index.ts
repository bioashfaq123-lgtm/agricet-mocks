import { Question } from "@/types";
// 15 PJTSAU Diploma DA-coded subject question banks
import { da101Questions } from "./da-101";
import { da102Questions } from "./da-102";
import { da111Questions } from "./da-111";
import { da121Questions } from "./da-121";
import { da122Questions } from "./da-122";
import { da131Questions } from "./da-131";
import { da132Questions } from "./da-132";
import { da151Questions } from "./da-151";
import { da171Questions } from "./da-171";
import { da201Questions } from "./da-201";
import { da241Questions } from "./da-241";
import { da252Questions } from "./da-252";
import { da281Questions } from "./da-281";
import { da282Questions } from "./da-282";
import { da291Questions } from "./da-291";
// DA-262 (Computer Applications) and DA-263 (English Communication)
import { computerApplicationsQuestions } from "./computer-applications";
import { englishCommunicationQuestions } from "./english-communication";
// General Agriculture (separate bank for current affairs / GK)
import { generalAgricultureQuestions } from "./general-agriculture";

export const ALL_QUESTIONS: Record<string, Question[]> = {
  // 15 PJTSAU Diploma syllabus subjects (DA codes)
  "da-101": da101Questions,
  "da-102": da102Questions,
  "da-111": da111Questions,
  "da-121": da121Questions,
  "da-122": da122Questions,
  "da-131": da131Questions,
  "da-132": da132Questions,
  "da-151": da151Questions,
  "da-171": da171Questions,
  "da-201": da201Questions,
  "da-241": da241Questions,
  "da-252": da252Questions,
  "da-281": da281Questions,
  "da-282": da282Questions,
  "da-291": da291Questions,
  // DA-262 / DA-263
  "computer-applications": computerApplicationsQuestions,
  "english-communication": englishCommunicationQuestions,
  // General Agriculture
  "general-agriculture": generalAgricultureQuestions,
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
