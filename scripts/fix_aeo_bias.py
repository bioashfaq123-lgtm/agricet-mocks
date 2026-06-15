"""
Fix option bias in AEO test files:
1. Shuffle option positions with balanced A/B/C/D distribution
2. Remove parenthetical hints from correct options
3. Expand short wrong options

Works on: aeo-2016.ts, aeo-2017.ts, aeo-paper1-gs.ts, aeo-paper2-agri.ts, aeo-pyq.ts
"""
import re, random, os, sys
sys.stdout.reconfigure(encoding='utf-8')
random.seed(77)

DATA_DIR = r"C:\Users\bioas\Agricet Mock Test Series\src\data"

AEO_FILES = [
    'aeo-2016.ts',
    'aeo-2017.ts',
    'aeo-paper1-gs.ts',
    'aeo-paper2-agri.ts',
    'aeo-pyq.ts',
]

FILLERS = [" crop", " variety", " type", " only", " plant", " species"]

# ── Parsers ────────────────────────────────────────────────────────────────

def parse_questions(content):
    results = []
    opt_re   = re.compile(r'options:\s*\[([^\]]+)\]')
    corr_re  = re.compile(r'correct:\s*(\d)')
    corr_all = list(corr_re.finditer(content))

    for om in opt_re.finditer(content):
        opts = re.findall(r'"((?:[^"\\]|\\.)*)"', om.group(1))
        if len(opts) != 4:
            continue
        cm = next((c for c in corr_all if c.start() > om.end()), None)
        if not cm:
            continue
        results.append({
            'opts_start': om.start(),
            'opts_end':   om.end(),
            'opts':       opts,
            'corr_start': cm.start(),
            'corr_end':   cm.end(),
            'corr':       int(cm.group(1)),
        })
    return results

# ── Pass 1: Shuffle with balanced distribution ─────────────────────────────

def shuffle_balanced(questions):
    n = len(questions)
    per_slot = n // 4
    pool = []
    for pos in range(4):
        pool += [pos] * per_slot
    # distribute remainder round-robin
    for pos in range(n - len(pool)):
        pool.append(pos)
    random.shuffle(pool)

    result = []
    for q, new_pos in zip(questions, pool):
        opts = q['opts']
        old_c = q['corr']
        correct_text = opts[old_c]
        others = [o for i, o in enumerate(opts) if i != old_c]
        random.shuffle(others)
        new_opts = others[:new_pos] + [correct_text] + others[new_pos:]
        result.append((new_opts, new_pos))
    return result

def apply_shuffle(content, questions, shuffled):
    pairs = list(zip(questions, shuffled))
    pairs.sort(key=lambda x: x[0]['opts_start'], reverse=True)
    for q, (new_opts, new_corr) in pairs:
        new_corr_str = f'correct: {new_corr}'
        content = content[:q['corr_start']] + new_corr_str + content[q['corr_end']:]
        opts_inner = ', '.join(f'"{o}"' for o in new_opts)
        content = content[:q['opts_start']] + f'options: [{opts_inner}]' + content[q['opts_end']:]
    return content

# ── Pass 2: Remove parenthetical hints ────────────────────────────────────

def strip_paren(text):
    cleaned = re.sub(r'\s*\([^)]{3,}\)\s*$', '', text).strip()
    cleaned = re.sub(r'\s*[–\-—]\s*.{5,}$', '', cleaned).strip()
    return cleaned

def fix_longest_paren(content, questions):
    fixes = []
    for q in questions:
        opts = q['opts']
        c = q['corr']
        if c > 3: continue
        lens = [len(o) for o in opts]
        correct_len = lens[c]
        others_max = max(l for j, l in enumerate(lens) if j != c)
        ratio = correct_len / max(others_max, 1)
        if ratio <= 1.4: continue
        stripped = strip_paren(opts[c])
        if stripped == opts[c] or len(stripped) < 3: continue
        new_ratio = len(stripped) / max(others_max, 1)
        if new_ratio > 1.4: continue
        new_opts = opts[:]
        new_opts[c] = stripped
        opts_inner = ', '.join(f'"{o}"' for o in new_opts)
        fixes.append({'start': q['opts_start'], 'end': q['opts_end'],
                      'replacement': f'options: [{opts_inner}]'})
    fixes.sort(key=lambda x: x['start'], reverse=True)
    for fix in fixes:
        content = content[:fix['start']] + fix['replacement'] + content[fix['end']:]
    return content, len(fixes)

# ── Pass 3: Expand short distractors ──────────────────────────────────────

def fix_short_distractors(content, questions):
    fixes = []
    for q in questions:
        opts = q['opts']
        c = q['corr']
        if c > 3: continue
        lens = [len(o) for o in opts]
        correct_len = lens[c]
        others_max = max(l for j, l in enumerate(lens) if j != c)
        ratio = correct_len / max(others_max, 1)
        if ratio <= 1.4: continue
        new_opts = opts[:]
        changed = False
        for j, opt in enumerate(opts):
            if j == c: continue
            if len(opt) <= 15 and len(opt.split()) <= 2:
                new_opts[j] = opt + random.choice(FILLERS)
                changed = True
        if not changed: continue
        new_others_max = max(len(new_opts[j]) for j in range(4) if j != c)
        new_ratio = correct_len / max(new_others_max, 1)
        if new_ratio > 1.4: continue
        opts_inner = ', '.join(f'"{o}"' for o in new_opts)
        fixes.append({'start': q['opts_start'], 'end': q['opts_end'],
                      'replacement': f'options: [{opts_inner}]'})
    fixes.sort(key=lambda x: x['start'], reverse=True)
    for fix in fixes:
        content = content[:fix['start']] + fix['replacement'] + content[fix['end']:]
    return content, len(fixes)

# ── Main ──────────────────────────────────────────────────────────────────

for fname in AEO_FILES:
    fpath = os.path.join(DATA_DIR, fname)
    if not os.path.exists(fpath):
        print(f'SKIP: {fname} not found')
        continue

    content = open(fpath, encoding='utf-8').read()
    questions = parse_questions(content)
    n = len(questions)
    print(f'\n{fname}: {n} questions')

    if n == 0:
        print('  No questions found — check file format')
        continue

    # Pass 1: shuffle
    shuffled = shuffle_balanced(questions)
    content = apply_shuffle(content, questions, shuffled)

    # Verify distribution
    dist = [0,0,0,0]
    for _, (_, new_c) in zip(questions, shuffled):
        dist[new_c] += 1
    print(f'  Pass 1 (shuffle): A={dist[0]} B={dist[1]} C={dist[2]} D={dist[3]}')

    # Re-parse after shuffle
    questions2 = parse_questions(content)

    # Pass 2: remove parentheticals
    content, p2count = fix_longest_paren(content, questions2)
    print(f'  Pass 2 (strip hints): {p2count} corrections')

    # Re-parse again
    questions3 = parse_questions(content)

    # Pass 3: expand short distractors
    content, p3count = fix_short_distractors(content, questions3)
    print(f'  Pass 3 (expand short options): {p3count} corrections')

    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'  Saved.')

print('\nAll AEO files updated.')
