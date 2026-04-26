export interface Question {
  id: string;
  subject: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  difficulty?: "easy" | "medium" | "hard";
  tags?: string[];
}

export interface TestSession {
  subjectId: string;
  questions: Question[];
  answers: Record<string, number>;
  startTime: Date;
  endTime?: Date;
  duration: number; // minutes
  mode: "practice" | "timed" | "previous-year";
}

export interface TestResult {
  id: string;
  userId: string;
  subjectId: string;
  score: number;
  totalQuestions: number;
  correct: number;
  incorrect: number;
  skipped: number;
  timeTaken: number; // seconds
  completedAt: Date;
  answers: Record<string, number>;
  mode: "practice" | "timed" | "previous-year";
}

export interface UserProgress {
  uid: string;
  subjectProgress: Record<string, SubjectProgress>;
  totalTestsTaken: number;
  totalQuestionsAttempted: number;
  overallAccuracy: number;
}

export interface SubjectProgress {
  attempted: number;
  correct: number;
  lastScore: number;
  bestScore: number;
  testCount: number;
  lastAttempted?: Date;
}
