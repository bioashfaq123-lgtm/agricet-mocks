"""
Deep verification: for every assertion-reason and 3-column matching question,
print the ID, the question snippet, all 4 options, and the correct one
so we can manually spot-check for errors.
"""
import sys, re, os
sys.stdout.reconfigure(encoding='utf-8')

BASE = r"C:\Users\bioas\Agricet Mock Test Series\src\data\questions"
FILES = [
    "da-263-lectures.ts","da-263.ts",
    "da-281-lectures.ts","da-281.ts",
    "da-282-lectures.ts","da-282.ts",
    "da-291-lectures.ts","da-291.ts",
]

AR_OPTS = {
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true",
}

def parse_questions(fpath):
    with open(fpath, encoding='utf-8') as f:
        content = f.read()
    blocks = re.split(r'(?=\s*\{\s*\n?\s*id:\s*")', content)
    questions = []
    for block in blocks:
        id_m = re.search(r'id:\s*"([^"]+)"', block)
        if not id_m:
            continue
        qid = id_m.group(1)
        q_m = re.search(r'question:\s*"((?:[^"\\]|\\.)*)"', block)
        question = q_m.group(1) if q_m else ""
        opts_m = re.search(r'options:\s*\[(.*?)\]', block, re.DOTALL)
        opts = []
        if opts_m:
            opts = re.findall(r'"((?:[^"\\]|\\.)*)"', opts_m.group(1))
        correct_m = re.search(r'correct:\s*(\d)', block)
        correct = int(correct_m.group(1)) if correct_m else -1
        exp_m = re.search(r'explanation:\s*"((?:[^"\\]|\\.)*)"', block)
        explanation = exp_m.group(1) if exp_m else ""
        questions.append({'id': qid, 'question': question, 'options': opts,
                          'correct': correct, 'explanation': explanation})
    return questions

errors_found = []

for fname in FILES:
    fpath = os.path.join(BASE, fname)
    qs = parse_questions(fpath)

    for q in qs:
        if len(q['options']) != 4 or q['correct'] < 0 or q['correct'] > 3:
            continue

        correct_opt = q['options'][q['correct']]
        explanation = q['explanation']
        question = q['question']
        qtype = None

        # Check assertion-reason questions
        if 'Assertion' in question or 'assertion' in question:
            qtype = 'AR'
            opts_set = set(q['options'])
            # Verify it has the standard AR options
            if not opts_set == AR_OPTS:
                errors_found.append({
                    'id': q['id'], 'file': fname, 'type': 'AR_OPTS_WRONG',
                    'note': f'Non-standard AR options: {q["options"]}',
                    'correct_opt': correct_opt, 'explanation': explanation[:120]
                })
                continue

            # Check if explanation is consistent with the chosen AR option
            exp_lower = explanation.lower()
            opt_lower = correct_opt.lower()

            # Detect likely error: if answer is "Both true and R explains A"
            # but explanation says A is false or R is false
            if correct_opt == "Both A and R are true and R is the correct explanation of A":
                if "a is false" in exp_lower or "r is false" in exp_lower:
                    errors_found.append({
                        'id': q['id'], 'file': fname, 'type': 'AR_MISMATCH',
                        'note': 'Correct says Both true/R explains, but explanation mentions false',
                        'correct_opt': correct_opt, 'explanation': explanation[:150]
                    })
            elif correct_opt == "A is true but R is false":
                if "both" in exp_lower and "true" in exp_lower and "r is" not in exp_lower:
                    errors_found.append({
                        'id': q['id'], 'file': fname, 'type': 'AR_MISMATCH',
                        'note': 'Possible mismatch - check manually',
                        'correct_opt': correct_opt, 'explanation': explanation[:150]
                    })
            elif correct_opt == "A is false but R is true":
                if "a is true" in exp_lower or "both" in exp_lower and "true" in exp_lower:
                    errors_found.append({
                        'id': q['id'], 'file': fname, 'type': 'AR_MISMATCH',
                        'note': 'Possible mismatch - check manually',
                        'correct_opt': correct_opt, 'explanation': explanation[:150]
                    })

        # Check three-column matching questions
        elif 'Col A' in question and 'Col B' in question and 'Col C' in question:
            qtype = '3COL'
            # Each option should look like "1-X-i, 2-Y-ii, ..." type pattern
            for opt in q['options']:
                if not re.search(r'\d[-–]', opt):
                    errors_found.append({
                        'id': q['id'], 'file': fname, 'type': '3COL_FORMAT',
                        'note': f'Option may have wrong format: {opt[:60]}',
                        'correct_opt': correct_opt, 'explanation': explanation[:120]
                    })
                    break

print("=" * 70)
print(f"DEEP VERIFICATION: Assertion-Reason & 3-Column Matching Questions")
print("=" * 70)

if not errors_found:
    print("\n✅ No errors detected in AR or 3-column matching questions!")
else:
    print(f"\n⚠️  {len(errors_found)} potential issues found:\n")
    for e in errors_found:
        print(f"  [{e['type']}] {e['file']} | {e['id']}")
        print(f"    Note:    {e['note']}")
        print(f"    Correct: {e['correct_opt'][:80]}")
        print(f"    Expl:    {e['explanation'][:120]}")
        print()

# Count AR and 3col questions per file
print("\n--- QUESTION TYPE COUNTS ---")
for fname in FILES:
    fpath = os.path.join(BASE, fname)
    qs = parse_questions(fpath)
    ar = sum(1 for q in qs if 'Assertion' in q['question'] or 'assertion' in q['question'])
    col3 = sum(1 for q in qs if 'Col A' in q['question'] and 'Col B' in q['question'])
    total = len(qs)
    print(f"  {fname:<30} Total:{total:>3}  AR:{ar:>3}  3Col:{col3:>3}")
