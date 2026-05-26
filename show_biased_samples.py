"""Show biased question samples from worst files for inspection."""
import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

BASE = r"C:\Users\bioas\Agricet Mock Test Series\src\data\questions"

AR_MARKERS = ["both a and r", "a is true", "a is false", "r is true", "r is false"]

def is_ar_question(opts):
    count = sum(1 for o in opts if any(m in o.lower() for m in AR_MARKERS))
    return count >= 2

def word_count(s):
    return len(s.split())

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

def analyze_bias(q):
    opts = q['options']
    correct_idx = q['correct']
    correct_len = word_count(opts[correct_idx])
    distractor_lens = [word_count(opts[i]) for i in range(4) if i != correct_idx]
    avg_dist = sum(distractor_lens) / len(distractor_lens)
    return correct_len > avg_dist * 1.5 and correct_len - avg_dist > 3, avg_dist

for fname in ["da-291-lectures.ts", "da-241-lectures.ts", "da-262.ts"]:
    fpath = os.path.join(BASE, fname)
    with open(fpath, encoding='utf-8') as f:
        content = f.read()
    questions = parse_questions(content)
    print(f"\n{'='*60}")
    print(f"FILE: {fname}")
    print(f"{'='*60}")
    shown = 0
    for q in questions:
        if is_ar_question(q['options']):
            continue
        biased, avg_dist = analyze_bias(q)
        if not biased:
            continue
        opts = q['options']
        correct_idx = q['correct']
        print(f"\nQ({q['id']}): {q['question'][:70]}")
        for i, o in enumerate(opts):
            marker = "✓" if i == correct_idx else " "
            print(f"  {marker} [{i}]({word_count(o)}w) {o[:70]}")
        shown += 1
        if shown >= 8:
            break
