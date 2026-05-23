import { Question } from "@/types";
// 15 PJTSAU Diploma DA-coded subject question banks (200 Qs each)
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
// DA-262 (Computer Applications) and DA-263 (English Communication) — combined banks
import { da262Questions } from "./da-262";
import { da263Questions } from "./da-263";
import { computerApplicationsQuestions } from "./computer-applications";
import { englishCommunicationQuestions } from "./english-communication";
// General Agriculture (separate bank for current affairs / GK)
import { generalAgricultureQuestions } from "./general-agriculture";

// ── Lecture-wise question banks (tagged with lecture/lectureNo fields) ──────
import { da101LectureQuestions } from "./da-101-lectures";
import { da102LectureQuestions } from "./da-102-lectures";
import { da111LectureQuestions } from "./da-111-lectures";
import { da121LectureQuestions } from "./da-121-lectures";
import { da122LectureQuestions } from "./da-122-lectures";
import { da131LectureQuestions } from "./da-131-lectures";
import { da132LectureQuestions } from "./da-132-lectures";
import { da151LectureQuestions } from "./da-151-lectures";
import { da171LectureQuestions } from "./da-171-lectures";
import { da201LectureQuestions } from "./da-201-lectures";
import { da241LectureQuestions } from "./da-241-lectures";
import { da252LectureQuestions } from "./da-252-lectures";
import { da281LectureQuestions } from "./da-281-lectures";
import { da282LectureQuestions } from "./da-282-lectures";
import { da291LectureQuestions } from "./da-291-lectures";
import { da262LectureQuestions } from "./da-262-lectures";
import { da263LectureQuestions } from "./da-263-lectures";

export const ALL_QUESTIONS: Record<string, Question[]> = {
  // 15 PJTSAU Diploma syllabus subjects — combined 200 Qs + lecture Qs
  "da-101": [...da101Questions, ...da101LectureQuestions],
  "da-102": [...da102Questions, ...da102LectureQuestions],
  "da-111": [...da111Questions, ...da111LectureQuestions],
  "da-121": [...da121Questions, ...da121LectureQuestions],
  "da-122": [...da122Questions, ...da122LectureQuestions],
  "da-131": [...da131Questions, ...da131LectureQuestions],
  "da-132": [...da132Questions, ...da132LectureQuestions],
  "da-151": [...da151Questions, ...da151LectureQuestions],
  "da-171": [...da171Questions, ...da171LectureQuestions],
  "da-201": [...da201Questions, ...da201LectureQuestions],
  "da-241": [...da241Questions, ...da241LectureQuestions],
  "da-252": [...da252Questions, ...da252LectureQuestions],
  "da-281": [...da281Questions, ...da281LectureQuestions],
  "da-282": [...da282Questions, ...da282LectureQuestions],
  "da-291": [...da291Questions, ...da291LectureQuestions],
  // DA-262 / DA-263 — merged combined bank + old bank + lecture questions
  "computer-applications": [...da262Questions, ...computerApplicationsQuestions, ...da262LectureQuestions],
  "english-communication": [...da263Questions, ...englishCommunicationQuestions, ...da263LectureQuestions],
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
