// Final published ranking of the FREE Live Mock Test (19–20 June 2026).
// Sourced from the admin CSV export. One duplicate submission (Suram Dhanush
// Reddy — same email/score saved twice) was removed and the list re-numbered.
export interface LiveRankRow {
  rank: number;
  name: string;
  score: number;
  correct: number;
  wrong: number;
  total: number;
}

export const LIVE_RANKING: LiveRankRow[] = [
  { rank: 1,  name: "Mohammad kaif Kaif",        score: 88, correct: 88, wrong: 12, total: 100 },
  { rank: 2,  name: "Dev",                       score: 79, correct: 79, wrong: 21, total: 100 },
  { rank: 3,  name: "Bhumika Jarpula",           score: 77, correct: 77, wrong: 21, total: 100 },
  { rank: 4,  name: "Suram Dhanush Reddy",       score: 74, correct: 74, wrong: 26, total: 100 },
  { rank: 5,  name: "Nandha Kishore",            score: 68, correct: 68, wrong: 31, total: 100 },
  { rank: 6,  name: "Kyathanamoni Mahesh",       score: 67, correct: 67, wrong: 28, total: 100 },
  { rank: 7,  name: "Sravya",                    score: 64, correct: 64, wrong: 36, total: 100 },
  { rank: 8,  name: "Vivek",                     score: 64, correct: 64, wrong: 36, total: 100 },
  { rank: 9,  name: "Baindla raghava",           score: 60, correct: 60, wrong: 40, total: 100 },
  { rank: 10, name: "Srija Jaligepu",            score: 59, correct: 59, wrong: 41, total: 100 },
  { rank: 11, name: "GOURI HAREESH",             score: 57, correct: 57, wrong: 42, total: 100 },
  { rank: 12, name: "Chepyala Rahul",            score: 56, correct: 56, wrong: 42, total: 100 },
  { rank: 13, name: "Jhansi. Payam",             score: 52, correct: 52, wrong: 47, total: 100 },
  { rank: 14, name: "Vaishu",                    score: 51, correct: 51, wrong: 46, total: 100 },
  { rank: 15, name: "Shivani Garigantla",        score: 51, correct: 51, wrong: 48, total: 100 },
  { rank: 16, name: "H Radhika",                 score: 51, correct: 51, wrong: 49, total: 100 },
  { rank: 17, name: "S.Srilekha",                score: 45, correct: 45, wrong: 53, total: 100 },
  { rank: 18, name: "Sanayapalli swetha",        score: 43, correct: 43, wrong: 57, total: 100 },
  { rank: 19, name: "Aishwarya",                 score: 42, correct: 42, wrong: 58, total: 100 },
  { rank: 20, name: "Polasa manupriya",          score: 41, correct: 41, wrong: 58, total: 100 },
  { rank: 21, name: "Mahee",                     score: 39, correct: 39, wrong: 19, total: 100 },
  { rank: 22, name: "M.saitejashwini",           score: 37, correct: 37, wrong: 62, total: 100 },
  { rank: 23, name: "Rakesh",                    score: 35, correct: 35, wrong: 61, total: 100 },
  { rank: 24, name: "Ashfaq",                    score: 30, correct: 30, wrong: 11, total: 100 },
  { rank: 25, name: "RAGHUPATHI MANNE",          score: 26, correct: 26, wrong: 74, total: 100 },
  { rank: 26, name: "Muchapathi ganesh",         score: 21, correct: 21, wrong: 77, total: 100 },
  { rank: 27, name: "Sairam",                    score: 10, correct: 10, wrong: 12, total: 100 },
  { rank: 28, name: "Tejasai",                   score: 6,  correct: 6,  wrong: 5,  total: 100 },
  { rank: 29, name: "Jeshwanth goud Kadhuluri",  score: 6,  correct: 6,  wrong: 5,  total: 100 },
  { rank: 30, name: "N.Hemavardhan nayak",       score: 5,  correct: 5,  wrong: 6,  total: 100 },
  { rank: 31, name: "Md Mansoor",                score: 5,  correct: 5,  wrong: 6,  total: 100 },
  { rank: 32, name: "Tm Deepak",                 score: 1,  correct: 1,  wrong: 4,  total: 100 },
];
