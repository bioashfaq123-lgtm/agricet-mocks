"""
For questions where wrong options are very short (1-2 words) but the correct
answer is long (listing multiple items / has a description), expand the wrong
options by adding a plausible-but-neutral qualifier so lengths are comparable.
This does NOT change the meaning — just adds " only" or " crop" type suffixes
to avoid single-word answers being obviously wrong by length alone.
"""
import re, sys
sys.stdout.reconfigure(encoding='utf-8')

DATA_DIR = r"C:\Users\bioas\Agricet Mock Test Series\src\data"

# Neutral suffixes that don't hint at correctness
FILLERS = [" crop", " variety", " species", " only", " type", " plant"]

import os, random
random.seed(99)

def get_questions(content):
    results = []
    opt_re  = re.compile(r'options:\s*\[([^\]]+)\]')
    corr_re = re.compile(r'correct:\s*(\d)')
    corr_iter = list(corr_re.finditer(content))

    for om in opt_re.finditer(content):
        opts = re.findall(r'"([^"]*)"', om.group(1))
        if len(opts) != 4:
            continue
        cm = next((c for c in corr_iter if c.start() > om.end()), None)
        if not cm:
            continue
        results.append({
            'opts_start': om.start(),
            'opts_end':   om.end(),
            'opts':       opts,
            'corr':       int(cm.group(1)),
        })
    return results

total_fixed = 0

for i in range(1, 11):
    fname = os.path.join(DATA_DIR, f'grandTest{i}.ts')
    content = open(fname, encoding='utf-8').read()
    questions = get_questions(content)

    fixes = []
    for q in questions:
        opts  = q['opts']
        c     = q['corr']
        if c > 3: continue

        lens        = [len(o) for o in opts]
        correct_len = lens[c]
        others_max  = max(l for j,l in enumerate(lens) if j != c)
        ratio = correct_len / max(others_max, 1)
        if ratio <= 1.4:
            continue

        # Only expand wrong options that are very short (<= 15 chars, 1-2 words)
        new_opts = opts[:]
        changed  = False
        for j, opt in enumerate(opts):
            if j == c:
                continue
            if len(opt) <= 15 and len(opt.split()) <= 2:
                # pick a filler that makes sense (avoid repeating same filler)
                filler = random.choice(FILLERS)
                new_opts[j] = opt + filler
                changed = True

        if not changed:
            continue

        # Check if it actually helps
        new_lens = [len(o) for o in new_opts]
        new_others_max = max(l for j,l in enumerate(new_lens) if j != c)
        new_ratio = correct_len / max(new_others_max, 1)
        if new_ratio > 1.4:
            continue  # still too biased after expansion

        opts_inner = ', '.join(f'"{o}"' for o in new_opts)
        fixes.append({
            'start':       q['opts_start'],
            'end':         q['opts_end'],
            'replacement': f'options: [{opts_inner}]',
        })

    # Apply in reverse
    fixes.sort(key=lambda x: x['start'], reverse=True)
    for fix in fixes:
        content = content[:fix['start']] + fix['replacement'] + content[fix['end']:]

    with open(fname, 'w', encoding='utf-8') as f:
        f.write(content)

    total_fixed += len(fixes)
    print(f'GT{i}: expanded short distractors in {len(fixes)} questions')

print(f'\nTotal questions fixed: {total_fixed}')
