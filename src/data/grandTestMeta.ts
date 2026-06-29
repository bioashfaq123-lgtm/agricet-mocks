export interface GrandTestMeta {
  id: string;
  title: string;
  totalQuestions: number;
  duration: number;       // minutes
  badge?: string;
  difficulty: "Mixed" | "Hard" | "Medium";
  description: string;
  subjects: number;       // number of subjects covered
}

export const GRAND_TESTS: GrandTestMeta[] = [
  { id: "gt1",  title: "Grand Test 1",  totalQuestions: 100, duration: 100, badge: "🏆 Most Attempted", difficulty: "Mixed",  description: "Full AGRICET mock covering all 17 subjects — balanced difficulty.", subjects: 17 },
  { id: "gt2",  title: "Grand Test 2",  totalQuestions: 100, duration: 100, badge: "🆕 NEW",            difficulty: "Mixed",  description: "Second full-length mock with fresh questions and mixed difficulty.", subjects: 17 },
  { id: "gt3",  title: "Grand Test 3",  totalQuestions: 100, duration: 100,                              difficulty: "Medium", description: "Concept-focused test with emphasis on soil science and agronomy.", subjects: 17 },
  { id: "gt4",  title: "Grand Test 4",  totalQuestions: 100, duration: 100,                              difficulty: "Hard",   description: "Challenging set — hard numericals, Latin names & specific facts.", subjects: 17 },
  { id: "gt5",  title: "Grand Test 5",  totalQuestions: 100, duration: 100,                              difficulty: "Mixed",  description: "Horticulture & Extension heavy edition with tricky distractors.", subjects: 17 },
  { id: "gt6",  title: "Grand Test 6",  totalQuestions: 100, duration: 100,                              difficulty: "Medium", description: "Genetics, Plant Breeding and Seed Technology focus.", subjects: 17 },
  { id: "gt7",  title: "Grand Test 7",  totalQuestions: 100, duration: 100,                              difficulty: "Hard",   description: "Plant Pathology & Entomology intensive with application-level questions.", subjects: 17 },
  { id: "gt8",  title: "Grand Test 8",  totalQuestions: 100, duration: 100,                              difficulty: "Mixed",  description: "Farm Machinery, Surveying and Agricultural Economics edition.", subjects: 17 },
  { id: "gt9",  title: "Grand Test 9",  totalQuestions: 100, duration: 100,                              difficulty: "Hard",   description: "Near-exam difficulty — competitive questions across all subjects.", subjects: 17 },
  { id: "gt10",   title: "Grand Test 10",        totalQuestions: 100, duration: 100, badge: "🔥 Final Revision",  difficulty: "Mixed",  description: "Final full-length revision test — best to attempt last.", subjects: 17 },
  { id: "gt11",   title: "Grand Test 11",        totalQuestions: 100, duration: 100, badge: "🔁 Live Replay",     difficulty: "Mixed",  description: "Full-length mock — the official question paper from the 8th June 2026 FREE live test, now open for practice.", subjects: 17 },
  { id: "gt12",   title: "Grand Test 12",        totalQuestions: 100, duration: 100, badge: "🔁 Live Replay",     difficulty: "Hard",   description: "Full-length mock — the official question paper from the 19th June 2026 FREE live test, now open for practice.", subjects: 17 },
  { id: "gt13",   title: "Grand Test 13",        totalQuestions: 100, duration: 100, badge: "🔁 Live Replay",     difficulty: "Hard",   description: "Full-length mock — the official question paper from the 28th June 2026 FREE live test, now open for practice.", subjects: 17 },
  { id: "gtlive", title: "FREE Live Mock Test",  totalQuestions: 100, duration: 100, badge: "🔴 LIVE • 28 June",  difficulty: "Hard",   description: "Official FREE live mock test for all AGRICET aspirants across Telangana — very hard, exam-level, all subjects — Sunday, 28th June 2026, 8 PM to 29th June 2026, 12:00 PM.", subjects: 17 },
];

export interface GrandTestQuestion {
  id: string;
  qNo: number;
  subject: string;
  question: string;
  options: string[];
  correct: number;   // 0-indexed
  explanation: string;
  /** Optional structured match-the-following table for "match the columns" type
   * questions. Supports 2 columns (List-I / List-II) or 3 columns. */
  matchTable?: {
    headers: string[];
    rows: string[][];
  };
}
