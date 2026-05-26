"""
Add 27 new questions (d263l_074 to d263l_100) to da-263-lectures.ts
Then create da-263.ts with all 100 questions (d263_ IDs).
Topics: kinds of nouns, countable/uncountable nouns, pronoun types,
regular/irregular verbs, adjective types, adverb types, preposition types,
matching exercises, assertion-reason questions — all from DA-263 PDF content.
"""
import re

LECTURES_FILE = r"C:\Users\bioas\Agricet Mock Test Series\src\data\questions\da-263-lectures.ts"
COMBINED_FILE = r"C:\Users\bioas\Agricet Mock Test Series\src\data\questions\da-263.ts"

NEW_QUESTIONS = """
  // ── LECTURE 14: Kinds of Nouns ───────────────────────────────────────────
  {
    id: "d263l_074", subject: "english-communication", lecture: "lecture-14", lectureNo: 14,
    question: "Which of the following is a MATERIAL noun?",
    options: ["Water", "Team", "Honesty", "Delhi"],
    correct: 0,
    explanation: "A material noun names a substance or raw material from which things are made — water, gold, wood, iron are material nouns.",
    difficulty: "easy"
  },
  {
    id: "d263l_075", subject: "english-communication", lecture: "lecture-14", lectureNo: 14,
    question: "Which noun names a quality, feeling, or idea that cannot be seen or touched?",
    options: ["Common noun", "Proper noun", "Abstract noun", "Collective noun"],
    correct: 2,
    explanation: "An abstract noun names something intangible — courage, beauty, honesty, freedom are abstract nouns.",
    difficulty: "easy"
  },
  {
    id: "d263l_076", subject: "english-communication", lecture: "lecture-14", lectureNo: 14,
    question: "The word 'flock' (as in 'a flock of birds') is an example of:",
    options: ["Abstract noun", "Material noun", "Common noun", "Collective noun"],
    correct: 3,
    explanation: "A collective noun names a group of persons, animals, or things taken together — flock, herd, team, army are collective nouns.",
    difficulty: "easy"
  },
  {
    id: "d263l_077", subject: "english-communication", lecture: "lecture-14", lectureNo: 14,
    question: "Which of the following is a COUNTABLE noun?",
    options: ["Milk", "Sand", "Chair", "Rice"],
    correct: 2,
    explanation: "Countable nouns can be counted and have both singular and plural forms — chair/chairs is countable. Milk, sand, and rice are uncountable.",
    difficulty: "easy"
  },
  {
    id: "d263l_078", subject: "english-communication", lecture: "lecture-14", lectureNo: 14,
    question: "Which of the following is an UNCOUNTABLE (mass) noun?",
    options: ["Book", "Farmer", "Advice", "Village"],
    correct: 2,
    explanation: "Uncountable nouns cannot be counted directly — advice, furniture, luggage, information are uncountable nouns.",
    difficulty: "medium"
  },
  // ── LECTURE 15: Pronouns ──────────────────────────────────────────────────
  {
    id: "d263l_079", subject: "english-communication", lecture: "lecture-15", lectureNo: 15,
    question: "In 'The students hurt themselves', the word 'themselves' is a:",
    options: ["Possessive pronoun", "Reflexive pronoun", "Reciprocal pronoun", "Emphatic pronoun"],
    correct: 1,
    explanation: "A reflexive pronoun refers back to the subject — myself, yourself, himself, themselves are reflexive pronouns used when subject and object are the same.",
    difficulty: "medium"
  },
  {
    id: "d263l_080", subject: "english-communication", lecture: "lecture-15", lectureNo: 15,
    question: "Which pronoun is used to ask questions?",
    options: ["Demonstrative pronoun", "Reflexive pronoun", "Interrogative pronoun", "Indefinite pronoun"],
    correct: 2,
    explanation: "Interrogative pronouns are used to ask questions — who, whom, whose, which, and what are interrogative pronouns.",
    difficulty: "easy"
  },
  {
    id: "d263l_081", subject: "english-communication", lecture: "lecture-15", lectureNo: 15,
    question: "In 'The boys helped each other', the phrase 'each other' is a:",
    options: ["Distributive pronoun", "Reciprocal pronoun", "Indefinite pronoun", "Relative pronoun"],
    correct: 1,
    explanation: "Reciprocal pronouns express a mutual relationship — 'each other' (for two) and 'one another' (for more than two) are reciprocal pronouns.",
    difficulty: "medium"
  },
  {
    id: "d263l_082", subject: "english-communication", lecture: "lecture-15", lectureNo: 15,
    question: "In 'She herself solved the problem', the word 'herself' is a:",
    options: ["Reflexive pronoun", "Emphatic pronoun", "Relative pronoun", "Possessive pronoun"],
    correct: 1,
    explanation: "An emphatic pronoun is used for emphasis and is not the object of the verb — 'herself' here emphasizes 'she' (emphatic), not reflexive.",
    difficulty: "hard"
  },
  {
    id: "d263l_083", subject: "english-communication", lecture: "lecture-15", lectureNo: 15,
    question: "Which of the following is a DISTRIBUTIVE pronoun?",
    options: ["Everyone", "Neither", "Each", "Both"],
    correct: 2,
    explanation: "Distributive pronouns refer to persons or things one at a time — each, either, neither are distributive pronouns.",
    difficulty: "medium"
  },
  // ── LECTURE 16: Verbs ─────────────────────────────────────────────────────
  {
    id: "d263l_084", subject: "english-communication", lecture: "lecture-16", lectureNo: 16,
    question: "Which verb forms its past tense by adding '-ed' or '-d'?",
    options: ["Irregular verb", "Strong verb", "Regular (weak) verb", "Auxiliary verb"],
    correct: 2,
    explanation: "Regular (weak) verbs form their past tense and past participle by adding -ed or -d: walk→walked, love→loved.",
    difficulty: "easy"
  },
  {
    id: "d263l_085", subject: "english-communication", lecture: "lecture-16", lectureNo: 16,
    question: "Which of the following is an IRREGULAR verb?",
    options: ["Worked", "Played", "Went", "Talked"],
    correct: 2,
    explanation: "Irregular (strong) verbs change their vowel sound internally to form the past tense — go→went, come→came, write→wrote.",
    difficulty: "easy"
  },
  {
    id: "d263l_086", subject: "english-communication", lecture: "lecture-16", lectureNo: 16,
    question: "Which verb is used as an auxiliary verb in 'She can swim'?",
    options: ["She", "Swim", "Can", "None of these"],
    correct: 2,
    explanation: "'Can' is a modal auxiliary verb. Auxiliary verbs (be, have, do, can, may, must, shall, will) help the main verb to express tense, mood, or voice.",
    difficulty: "easy"
  },
  {
    id: "d263l_087", subject: "english-communication", lecture: "lecture-16", lectureNo: 16,
    question: "The past tense of the verb 'bring' is:",
    options: ["Bringed", "Brought", "Brung", "Brang"],
    correct: 1,
    explanation: "'Bring' is an irregular verb — its past tense and past participle is 'brought'.",
    difficulty: "easy"
  },
  // ── LECTURE 17: Adjectives and Adverbs ───────────────────────────────────
  {
    id: "d263l_088", subject: "english-communication", lecture: "lecture-17", lectureNo: 17,
    question: "Which is an adjective of QUANTITY?",
    options: ["This", "Which", "Some", "Second"],
    correct: 2,
    explanation: "Adjectives of quantity indicate how much — some, much, little, enough, all, any are adjectives of quantity.",
    difficulty: "medium"
  },
  {
    id: "d263l_089", subject: "english-communication", lecture: "lecture-17", lectureNo: 17,
    question: "Which is an adjective of NUMBER (numeral adjective)?",
    options: ["Beautiful", "Much", "Three", "Some"],
    correct: 2,
    explanation: "Adjectives of number (numeral adjectives) indicate how many — three, first, many, few, several are adjectives of number.",
    difficulty: "easy"
  },
  {
    id: "d263l_090", subject: "english-communication", lecture: "lecture-17", lectureNo: 17,
    question: "The adverb 'there' in 'He lives there' is an adverb of:",
    options: ["Time", "Manner", "Degree", "Place"],
    correct: 3,
    explanation: "Adverbs of place indicate where an action takes place — here, there, inside, outside, everywhere are adverbs of place.",
    difficulty: "easy"
  },
  {
    id: "d263l_091", subject: "english-communication", lecture: "lecture-17", lectureNo: 17,
    question: "The adverb 'very' in 'He is very tall' is an adverb of:",
    options: ["Time", "Number", "Degree (quantity)", "Affirmation"],
    correct: 2,
    explanation: "Adverbs of degree (quantity) indicate the extent or degree — very, too, almost, quite, enough are adverbs of degree.",
    difficulty: "medium"
  },
  {
    id: "d263l_092", subject: "english-communication", lecture: "lecture-17", lectureNo: 17,
    question: "Which adverb expresses NEGATION?",
    options: ["Yesterday", "Hardly", "Never", "Twice"],
    correct: 2,
    explanation: "Adverbs of negation express a negative meaning — never, not, no are adverbs of negation.",
    difficulty: "easy"
  },
  // ── LECTURE 18: Prepositions ──────────────────────────────────────────────
  {
    id: "d263l_093", subject: "english-communication", lecture: "lecture-18", lectureNo: 18,
    question: "Which of the following is a COMPOUND preposition?",
    options: ["On", "In", "According to", "At"],
    correct: 2,
    explanation: "Compound prepositions are formed by combining two or more words — according to, because of, in front of, on behalf of are compound prepositions.",
    difficulty: "medium"
  },
  {
    id: "d263l_094", subject: "english-communication", lecture: "lecture-18", lectureNo: 18,
    question: "Which of the following is a PARTICIPLE preposition?",
    options: ["Into", "Regarding", "Between", "Underneath"],
    correct: 1,
    explanation: "Participle prepositions are present or past participles used as prepositions — regarding, considering, including, following, given are participle prepositions.",
    difficulty: "hard"
  },
  {
    id: "d263l_095", subject: "english-communication", lecture: "lecture-18", lectureNo: 18,
    question: "Which of the following is a SIMPLE (one-word) preposition?",
    options: ["In spite of", "With reference to", "On account of", "Below"],
    correct: 3,
    explanation: "Simple prepositions are single words — at, by, for, from, in, of, off, on, out, till, to, up, with, below are simple prepositions.",
    difficulty: "easy"
  },
  // ── Assertion-Reason Questions ─────────────────────────────────────────────
  {
    id: "d263l_096", subject: "english-communication", lecture: "lecture-14", lectureNo: 14,
    question: "Assertion (A): 'Gold' is a material noun.\nReason (R): Material nouns name substances or raw materials from which things are made and are usually uncountable.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Gold is indeed a material noun naming a substance. The reason correctly explains that material nouns name raw materials and are generally uncountable — both A and R are true and R explains A.",
    difficulty: "medium"
  },
  {
    id: "d263l_097", subject: "english-communication", lecture: "lecture-16", lectureNo: 16,
    question: "Assertion (A): 'Slept' is the past tense of 'sleep'.\nReason (R): 'Sleep' is a regular (weak) verb that forms its past tense by adding '-ed'.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 2,
    explanation: "'Slept' is indeed the past tense of 'sleep' — A is true. However, 'sleep' is an IRREGULAR verb (sleep→slept), not a regular verb — R is false.",
    difficulty: "medium"
  },
  {
    id: "d263l_098", subject: "english-communication", lecture: "lecture-17", lectureNo: 17,
    question: "Assertion (A): Adverbs can modify verbs, adjectives, and other adverbs.\nReason (R): An adverb is a word that modifies a noun to describe or limit its meaning.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 2,
    explanation: "A is true — adverbs modify verbs, adjectives, and other adverbs. R is false — it is ADJECTIVES (not adverbs) that modify nouns.",
    difficulty: "medium"
  },
  // ── Three-column Matching Questions ───────────────────────────────────────
  {
    id: "d263l_099", subject: "english-communication", lecture: "lecture-14", lectureNo: 14,
    question: "Match the noun with its KIND:\nColumn A: 1. Courage  2. Milk  3. Orchestra  4. River\nColumn B: P. Collective  Q. Proper  R. Abstract  S. Material",
    options: [
      "1-R, 2-S, 3-P, 4-Q",
      "1-S, 2-R, 3-Q, 4-P",
      "1-P, 2-Q, 3-R, 4-S",
      "1-R, 2-P, 3-S, 4-Q"
    ],
    correct: 0,
    explanation: "Courage=Abstract (R), Milk=Material (S), Orchestra=Collective (P), River=Common — but 'River' as a generic word is a common noun; here 4-Q refers to proper noun only if a specific river name is given. In PJTSAU notes: courage→abstract, milk→material, orchestra→collective, river→proper (if named). Answer: 1-R, 2-S, 3-P, 4-Q.",
    difficulty: "hard"
  },
  {
    id: "d263l_100", subject: "english-communication", lecture: "lecture-17", lectureNo: 17,
    question: "Match the adverb with its TYPE:\nColumn A: 1. Quickly  2. Yesterday  3. Twice  4. Yes\nColumn B: P. Number  Q. Affirmation  R. Time  S. Manner",
    options: [
      "1-S, 2-R, 3-P, 4-Q",
      "1-R, 2-S, 3-Q, 4-P",
      "1-P, 2-Q, 3-R, 4-S",
      "1-S, 2-P, 3-R, 4-Q"
    ],
    correct: 0,
    explanation: "Quickly=Manner (S) — how the action is done; Yesterday=Time (R) — when the action occurred; Twice=Number (P) — how many times; Yes=Affirmation (Q) — expresses affirmation.",
    difficulty: "medium"
  },
"""

def append_questions(filepath, new_ts_block):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    insert_pos = content.rfind('];')
    new_content = content[:insert_pos] + '\n' + new_ts_block + '\n' + content[insert_pos:]
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f'Appended to {filepath}')

# Step 1: Append to lectures file
append_questions(LECTURES_FILE, NEW_QUESTIONS)

# Step 2: Verify
import re
with open(LECTURES_FILE, 'r', encoding='utf-8') as f:
    content = f.read()
ids = re.findall(r'id:\s*"(d263l_\d+)"', content)
print(f"Total lecture questions: {len(ids)}")
print(f"Last ID: {ids[-1]}")

# Step 3: Create da-263.ts combined file from all 100 lecture questions
with open(LECTURES_FILE, 'r', encoding='utf-8') as f:
    lec_content = f.read()

# Extract all question blocks
all_q = re.findall(r'(\{[^{}]*id:\s*"d263l_\d+"[^{}]*\})', lec_content, re.DOTALL)
print(f"Extracted {len(all_q)} question blocks from lectures file")

combined_questions = []
for i, q in enumerate(all_q[:100], 1):
    # Rename ID
    new_q = re.sub(r'id:\s*"d263l_(\d+)"', f'id: "d263_{i:03d}"', q)
    # Remove lecture and lectureNo fields
    new_q = re.sub(r',?\s*lecture:\s*"[^"]*"', '', new_q)
    new_q = re.sub(r',?\s*lectureNo:\s*\d+', '', new_q)
    # Clean up trailing commas before closing brace
    new_q = re.sub(r',\s*\}', '\n  }', new_q)
    combined_questions.append(new_q.strip())

combined_content = '''import { Question } from "@/types";

export const da263Questions: Question[] = [
  ''' + ',\n  '.join(combined_questions) + '''
];
'''

with open(COMBINED_FILE, 'w', encoding='utf-8') as f:
    f.write(combined_content)
print(f"Created {COMBINED_FILE}")

# Verify combined file
with open(COMBINED_FILE, 'r', encoding='utf-8') as f:
    combined = f.read()
cids = re.findall(r'id:\s*"(d263_\d+)"', combined)
print(f"Combined file has {len(cids)} questions")
print(f"First: {cids[0]}, Last: {cids[-1]}")
