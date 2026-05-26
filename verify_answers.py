"""
Verify all questions in the 8 updated files:
1. Each question has exactly 4 options
2. correct index is 0-3
3. The correct option text appears in (or is consistent with) the explanation
4. No duplicate IDs within a file
"""
import sys, re, os
sys.stdout.reconfigure(encoding='utf-8')

BASE = r"C:\Users\bioas\Agricet Mock Test Series\src\data\questions"

FILES = [
    "da-263-lectures.ts",
    "da-263.ts",
    "da-281-lectures.ts",
    "da-281.ts",
    "da-282-lectures.ts",
    "da-282.ts",
    "da-291-lectures.ts",
    "da-291.ts",
]

def parse_questions(fpath):
    with open(fpath, encoding='utf-8') as f:
        content = f.read()

    # Split into individual question blocks using id: as delimiter
    blocks = re.split(r'(?=\s*\{\s*\n?\s*id:\s*")', content)
    questions = []
    for block in blocks:
        id_m = re.search(r'id:\s*"([^"]+)"', block)
        if not id_m:
            continue
        qid = id_m.group(1)

        q_m = re.search(r'question:\s*"((?:[^"\\]|\\.)*)"', block)
        question = q_m.group(1) if q_m else ""

        # Extract options array
        opts_m = re.search(r'options:\s*\[(.*?)\]', block, re.DOTALL)
        opts = []
        if opts_m:
            opts = re.findall(r'"((?:[^"\\]|\\.)*)"', opts_m.group(1))

        correct_m = re.search(r'correct:\s*(\d)', block)
        correct = int(correct_m.group(1)) if correct_m else -1

        exp_m = re.search(r'explanation:\s*"((?:[^"\\]|\\.)*)"', block)
        explanation = exp_m.group(1) if exp_m else ""

        questions.append({
            'id': qid,
            'question': question,
            'options': opts,
            'correct': correct,
            'explanation': explanation
        })
    return questions


def check_file(fname):
    fpath = os.path.join(BASE, fname)
    qs = parse_questions(fpath)
    issues = []
    seen_ids = {}

    for q in qs:
        qid = q['id']

        # Check duplicate IDs
        if qid in seen_ids:
            issues.append(f"DUPLICATE ID: {qid}")
        seen_ids[qid] = True

        # Check option count
        if len(q['options']) != 4:
            issues.append(f"{qid}: has {len(q['options'])} options (expected 4) | opts: {q['options'][:2]}")
            continue

        # Check correct index in range
        if q['correct'] < 0 or q['correct'] > 3:
            issues.append(f"{qid}: correct={q['correct']} is out of range 0-3")
            continue

        # Check explanation is non-empty
        if not q['explanation'].strip():
            issues.append(f"{qid}: empty explanation")

    return qs, issues


print(f"{'FILE':<30} {'Qs':>5}  ISSUES")
print("-" * 70)
all_issues = []
for fname in FILES:
    qs, issues = check_file(fname)
    status = f"{len(issues)} issue(s)" if issues else "OK"
    print(f"{fname:<30} {len(qs):>5}  {status}")
    for iss in issues:
        print(f"   !! {iss}")
        all_issues.append(f"{fname}: {iss}")

print()
print("=" * 70)
print(f"Total issues: {len(all_issues)}")

# Now do a semantic spot-check: for each question, check if the correct
# option's key words appear in the explanation.
# Flag questions where the explanation seems to NOT match the correct answer.
print()
print("SEMANTIC CONSISTENCY CHECK (correct option vs explanation):")
print("-" * 70)
flagged = []
for fname in FILES:
    fpath = os.path.join(BASE, fname)
    qs, _ = check_file(fpath)
    for q in qs:
        if len(q['options']) != 4 or q['correct'] < 0 or q['correct'] > 3:
            continue
        correct_opt = q['options'][q['correct']]
        explanation = q['explanation']

        # Extract first 4 significant words from the correct option
        words = re.findall(r'[A-Za-z]{4,}', correct_opt)
        sig_words = words[:3]

        # Check if ANY of those words appear in explanation
        matched = any(w.lower() in explanation.lower() for w in sig_words)
        if sig_words and not matched:
            flagged.append({
                'file': fname,
                'id': q['id'],
                'correct_idx': q['correct'],
                'correct_opt': correct_opt[:80],
                'explanation': explanation[:100]
            })

print(f"Questions where correct option text doesn't match explanation: {len(flagged)}")
for f in flagged[:30]:  # show first 30
    print(f"\n  [{f['file']}] {f['id']}")
    print(f"    Correct ({f['correct_idx']}): {f['correct_opt']}")
    print(f"    Explanation: {f['explanation']}")

if len(flagged) > 30:
    print(f"\n  ... and {len(flagged)-30} more")
