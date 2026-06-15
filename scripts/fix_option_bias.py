"""
Fix option bias in grand tests:
- Shuffles options for each question so the longest option is no longer
  always the correct answer
- Guarantees exactly 25 A / 25 B / 25 C / 25 D per test (balanced)
- Correct answer content is preserved — only position changes
"""
import re, random, sys
sys.stdout.reconfigure(encoding='utf-8')

DATA_DIR = r"C:\Users\bioas\Agricet Mock Test Series\src\data"
random.seed(42)   # reproducible but different from current order

def parse_options_and_correct(content):
    """
    Return list of (options_str_start, options_str_end, options_list, correct_val_start, correct_val_end, correct_val)
    for every question block in the file.
    """
    results = []
    # Find every options:[...] block
    for om in re.finditer(r'options:\s*\[([^\]]+)\]', content):
        # extract the individual quoted strings
        opts = re.findall(r'"((?:[^"\\]|\\.)*)"', om.group(1))
        if len(opts) != 4:
            continue
        # find the correct: N that follows this options block (within ~300 chars)
        search_start = om.end()
        cm = re.search(r'correct:\s*(\d)', content[search_start:search_start+300])
        if not cm:
            continue
        correct_abs_start = search_start + cm.start()
        correct_abs_end   = search_start + cm.end()
        correct_val = int(cm.group(1))
        results.append({
            'opts_start': om.start(),
            'opts_end':   om.end(),
            'opts':       opts,
            'corr_start': correct_abs_start,
            'corr_end':   correct_abs_end,
            'corr':       correct_val,
        })
    return results


def shuffle_with_balance(questions):
    """
    For 100 questions, assign new correct positions so that
    exactly 25 land on each of 0,1,2,3.
    Then shuffle options list to match.
    Returns list of (new_opts, new_correct) per question.
    """
    n = len(questions)
    # Build target positions: balanced pool
    pool = []
    per_slot = n // 4
    for pos in range(4):
        pool += [pos] * per_slot
    # Handle remainder
    for pos in range(n - len(pool)):
        pool.append(pos)
    random.shuffle(pool)

    result = []
    for q, new_pos in zip(questions, pool):
        opts = q['opts']
        old_correct = q['corr']
        correct_text = opts[old_correct]

        # Build new options: put correct_text at new_pos, fill rest randomly
        others = [o for i, o in enumerate(opts) if i != old_correct]
        random.shuffle(others)
        new_opts = others[:new_pos] + [correct_text] + others[new_pos:]
        result.append((new_opts, new_pos))
    return result


def rebuild_file(content, questions, shuffled):
    """
    Replace options arrays and correct values in content in reverse order
    (to preserve offsets).
    """
    # Process in reverse to keep offsets valid
    pairs = list(zip(questions, shuffled))
    pairs.sort(key=lambda x: x[0]['opts_start'], reverse=True)

    for q, (new_opts, new_corr) in pairs:
        # Replace correct value first (it's after opts_start so do corr first since reverse)
        # Actually: corr is AFTER opts in the file. Doing in reverse order of opts_start
        # means we process corr BEFORE opts for each question. That's fine since each
        # question's corr/opts don't overlap with other questions.
        new_corr_str = f'correct: {new_corr}'
        # original span: content[q['corr_start']:q['corr_end']]
        orig_corr = content[q['corr_start']:q['corr_end']]
        content = content[:q['corr_start']] + new_corr_str + content[q['corr_end']:]

        # Now fix opts (before corr_start in the file, so offset still valid)
        opts_inner = ', '.join(f'"{o}"' for o in new_opts)
        new_opts_str = f'options: [{opts_inner}]'
        content = content[:q['opts_start']] + new_opts_str + content[q['opts_end']:]

    return content


def verify_bias(questions, shuffled):
    dist = [0,0,0,0]
    longest_correct = 0
    for q, (new_opts, new_corr) in zip(questions, shuffled):
        dist[new_corr] += 1
        lens = [len(o) for o in new_opts]
        if lens.index(max(lens)) == new_corr:
            longest_correct += 1
    return dist, longest_correct


# ── Process each grand test ───────────────────────────────────────────────────
import os
for i in range(1, 11):
    fname = os.path.join(DATA_DIR, f'grandTest{i}.ts')
    content = open(fname, encoding='utf-8').read()

    questions = parse_options_and_correct(content)
    if len(questions) != 100:
        print(f'GT{i}: WARNING — found {len(questions)} questions, expected 100')
        continue

    shuffled = shuffle_with_balance(questions)
    new_content = rebuild_file(content, questions, shuffled)

    dist, longest_c = verify_bias(questions, shuffled)
    pct_longest = longest_c / len(questions) * 100

    with open(fname, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f'GT{i}: A={dist[0]} B={dist[1]} C={dist[2]} D={dist[3]} | Longest=Correct: {longest_c}/100 ({pct_longest:.1f}%) — FIXED')

print('\nAll grand tests updated.')
