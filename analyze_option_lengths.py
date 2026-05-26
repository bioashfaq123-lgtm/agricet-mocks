"""
Analyze question files for long-option bias:
- For each question, check if the correct option is significantly longer than the average of distractors
- Report percentage of biased questions per file
"""
import sys, os, re, glob
sys.stdout.reconfigure(encoding='utf-8')

BASE = r"C:\Users\bioas\Agricet Mock Test Series\src\data\questions"

def parse_questions(content):
    """Parse TypeScript question array into list of dicts."""
    questions = []

    # Match each question object
    # Pattern: { id: "...", ..., options: ["...", "...", "...", "..."], correct: N, ... }
    q_pattern = re.compile(
        r'\{\s*id:\s*"([^"]+)".*?'
        r'options:\s*\[([^\]]+)\].*?'
        r'correct:\s*(\d+)',
        re.DOTALL
    )

    for m in q_pattern.finditer(content):
        qid = m.group(1)
        opts_raw = m.group(2)
        correct = int(m.group(3))

        # Extract individual option strings
        # Handle escaped quotes inside strings
        opts = re.findall(r'"((?:[^"\\]|\\.)*)"', opts_raw)

        if len(opts) == 4 and 0 <= correct <= 3:
            questions.append({
                'id': qid,
                'options': opts,
                'correct': correct,
            })

    return questions

def word_count(s):
    return len(s.split())

def analyze_bias(questions):
    biased = []
    for q in questions:
        opts = q['options']
        correct_idx = q['correct']
        correct_len = word_count(opts[correct_idx])

        distractor_lens = [word_count(opts[i]) for i in range(4) if i != correct_idx]
        avg_distractor = sum(distractor_lens) / len(distractor_lens)

        # Biased if correct is >50% longer than average distractor AND >3 words longer
        if correct_len > avg_distractor * 1.5 and correct_len - avg_distractor > 3:
            biased.append({
                'id': q['id'],
                'correct_idx': correct_idx,
                'correct': opts[correct_idx],
                'correct_len': correct_len,
                'distractors': [opts[i] for i in range(4) if i != correct_idx],
                'avg_distractor_len': round(avg_distractor, 1),
            })

    return biased

# Focus on newly added question files
TARGET_FILES = [
    "da-263.ts", "da-263-lectures.ts",
    "da-281.ts", "da-281-lectures.ts",
    "da-282.ts", "da-282-lectures.ts",
    "da-291.ts", "da-291-lectures.ts",
    "da-262.ts", "da-262-lectures.ts",
    "da-201.ts", "da-201-lectures.ts",
    "da-241.ts", "da-241-lectures.ts",
    "da-252.ts", "da-252-lectures.ts",
    "da-101.ts", "da-102.ts", "da-111.ts", "da-121.ts", "da-122.ts",
    "da-131.ts", "da-132.ts", "da-151.ts", "da-171.ts",
]

total_qs = 0
total_biased = 0

for fname in TARGET_FILES:
    fpath = os.path.join(BASE, fname)
    if not os.path.exists(fpath):
        continue
    with open(fpath, encoding='utf-8') as f:
        content = f.read()

    questions = parse_questions(content)
    biased = analyze_bias(questions)

    pct = round(len(biased) / len(questions) * 100) if questions else 0
    print(f"{fname:35s}: {len(biased):3d}/{len(questions):3d} biased ({pct}%)")

    total_qs += len(questions)
    total_biased += len(biased)

print(f"\nTotal: {total_biased}/{total_qs} questions have long-option bias ({round(total_biased/total_qs*100)}%)")
print("\nSample biased questions:")
# Show a few examples
shown = 0
for fname in ["da-291.ts", "da-263.ts", "da-281.ts"]:
    fpath = os.path.join(BASE, fname)
    if not os.path.exists(fpath):
        continue
    with open(fpath, encoding='utf-8') as f:
        content = f.read()
    questions = parse_questions(content)
    biased = analyze_bias(questions)
    for b in biased[:3]:
        print(f"\n  ID: {b['id']}")
        print(f"  Correct (idx {b['correct_idx']}, {b['correct_len']} words): {b['correct'][:80]}")
        print(f"  Avg distractor ({b['avg_distractor_len']} words): {b['distractors'][0][:60]}")
        shown += 1
        if shown >= 6:
            break
    if shown >= 6:
        break
