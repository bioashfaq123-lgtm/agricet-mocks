"""
Deep analysis of DA-132 and all subject files for option length bias.
Shows ALL biased questions with full options.
"""
import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

BASE = r"C:\Users\bioas\Agricet Mock Test Series\src\data\questions"

AR_MARKERS = ["both a and r", "a is true", "a is false", "r is true", "r is false"]

def is_ar_question(opts):
    count = sum(1 for o in opts if any(m in o.lower() for m in AR_MARKERS))
    return count >= 2

def word_count(s):
    return len(s.split())

def char_count(s):
    return len(s)

def parse_questions(content):
    questions = []
    q_pattern = re.compile(
        r'\{\s*id:\s*"([^"]+)".*?'
        r'question:\s*"((?:[^"\\]|\\.)*)".*?'
        r'options:\s*\[([^\]]+)\].*?'
        r'correct:\s*(\d+)',
        re.DOTALL
    )
    for m in q_pattern.finditer(content):
        qid = m.group(1)
        question = m.group(2)
        opts_raw = m.group(3)
        correct = int(m.group(4))
        opts = re.findall(r'"((?:[^"\\]|\\.)*)"', opts_raw)
        if len(opts) == 4 and 0 <= correct <= 3:
            questions.append({'id': qid, 'question': question, 'options': opts, 'correct': correct})
    return questions

def analyze_file(fpath, fname, show_all=False, threshold=1.5, min_diff=3):
    with open(fpath, encoding='utf-8') as f:
        content = f.read()

    questions = parse_questions(content)
    biased = []
    ar_count = 0

    for q in questions:
        opts = q['options']
        correct_idx = q['correct']

        if is_ar_question(opts):
            ar_count += 1
            continue

        correct_len = word_count(opts[correct_idx])
        distractor_lens = [word_count(opts[i]) for i in range(4) if i != correct_idx]
        avg_dist = sum(distractor_lens) / len(distractor_lens)
        max_dist = max(distractor_lens)

        is_biased = correct_len > avg_dist * threshold and correct_len - avg_dist > min_diff

        if is_biased or show_all:
            biased.append({
                'q': q,
                'correct_len': correct_len,
                'avg_dist': round(avg_dist, 1),
                'max_dist': max_dist,
                'distractor_lens': distractor_lens,
            })

    return questions, biased, ar_count

# ── First: full summary of ALL files ──────────────────────────────────────────
ALL_FILES = sorted([f for f in os.listdir(BASE) if f.endswith('.ts') and f != 'index.ts'])

print("=" * 75)
print(f"{'FILE':<40} {'TOTAL':>6} {'BIASED':>7} {'%':>5} {'AR':>5}")
print("=" * 75)

grand_total = grand_biased = grand_ar = 0
file_results = {}

for fname in ALL_FILES:
    fpath = os.path.join(BASE, fname)
    questions, biased, ar_count = analyze_file(fpath, fname)
    pct = round(len(biased) / max(1, len(questions) - ar_count) * 100)
    print(f"  {fname:<38} {len(questions):>6} {len(biased):>7} {pct:>4}% {ar_count:>5}")
    grand_total += len(questions)
    grand_biased += len(biased)
    grand_ar += ar_count
    file_results[fname] = (questions, biased, ar_count)

print("=" * 75)
total_non_ar = grand_total - grand_ar
print(f"  {'GRAND TOTAL':<38} {grand_total:>6} {grand_biased:>7} {round(grand_biased/max(1,total_non_ar)*100):>4}% {grand_ar:>5}")

# ── Now: Deep dive into DA-132 ─────────────────────────────────────────────────
print("\n\n" + "=" * 75)
print("DEEP DIVE: da-132.ts — ALL BIASED QUESTIONS (full options shown)")
print("=" * 75)

fname = "da-132.ts"
fpath = os.path.join(BASE, fname)
questions, biased, ar_count = analyze_file(fpath, fname)
print(f"Total: {len(questions)} questions | Biased: {len(biased)} | AR skipped: {ar_count}")

for item in biased:
    q = item['q']
    opts = q['options']
    correct_idx = q['correct']
    print(f"\nQ({q['id']}): {q['question'][:90]}")
    for i, o in enumerate(opts):
        marker = "✓" if i == correct_idx else " "
        print(f"  {marker} [{i}]({word_count(o)}w) {o}")
