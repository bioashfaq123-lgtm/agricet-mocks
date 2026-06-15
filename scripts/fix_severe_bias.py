"""
Fix severely biased questions (ratio > 1.5) with aggressive strategies:

1. Strip trailing parenthetical even if it drops to 1.3x (was 1.4x threshold before)
2. Expand ALL short wrong options (not just <= 15 chars) with domain-relevant suffixes
3. For multi-item correct answers, truncate to 2 items + "and others"
4. For "X compared to Y" patterns, keep just "X"
5. For "Name (explanation)" patterns, keep just "Name"
"""
import re, os, sys, random
sys.stdout.reconfigure(encoding='utf-8')
random.seed(33)

DATA_DIR = r"C:\Users\bioas\Agricet Mock Test Series\src\data"

GRAND_FILES = [f'grandTest{i}.ts' for i in range(1, 11)]
AEO_FILES   = ['aeo-2016.ts','aeo-2017.ts','aeo-paper1-gs.ts','aeo-paper2-agri.ts','aeo-pyq.ts']
ALL_FILES   = GRAND_FILES + AEO_FILES

# Expanded fillers pool — choose based on context
FILLERS_GENERAL = [
    " crop", " plant", " variety", " species", " type",
    " only", " method", " process", " stage", " form",
    " application", " treatment", " condition", " technique",
    " system", " practice", " approach", " mode",
]

def parse_questions(content):
    results = []
    opt_re   = re.compile(r'options:\s*\[([^\]]+)\]')
    corr_re  = re.compile(r'correct:\s*(\d)')
    corr_all = list(corr_re.finditer(content))
    for om in opt_re.finditer(content):
        opts = re.findall(r'"((?:[^"\\]|\\.)*)"', om.group(1))
        if len(opts) != 4: continue
        cm = next((c for c in corr_all if c.start() > om.end()), None)
        if not cm: continue
        results.append({
            'opts_start': om.start(), 'opts_end': om.end(),
            'opts': opts, 'corr_start': cm.start(),
            'corr_end': cm.end(), 'corr': int(cm.group(1)),
        })
    return results

def others_max_len(opts, c):
    return max(len(o) for j, o in enumerate(opts) if j != c)

def try_shorten_correct(correct, others_max):
    """Try various ways to shorten the correct option text."""
    target = others_max * 1.3  # aim for ratio <= 1.3

    candidates = []

    # 1. Strip trailing paren (any size)
    t = re.sub(r'\s*\([^)]+\)\s*$', '', correct).strip()
    if t and t != correct and len(t) >= 4:
        candidates.append(t)

    # 2. Strip trailing dash/em-dash clause
    t2 = re.sub(r'\s*[–—-]\s*[^,]{3,}$', '', correct).strip()
    if t2 and t2 != correct and len(t2) >= 4:
        candidates.append(t2)

    # 3. For "A compared to B" → just "A"
    m = re.match(r'^(.+?)\s+compared to\s+.+$', correct, re.I)
    if m and len(m.group(1)) >= 4:
        candidates.append(m.group(1).strip())

    # 4. For comma-separated lists of 3+ items → first 2 items + "etc."
    parts = [p.strip() for p in re.split(r',\s*(?:and\s+)?', correct)]
    # remove "and X" style last items
    parts = [re.sub(r'^and\s+', '', p) for p in parts if p]
    if len(parts) >= 3:
        short = parts[0] + ' and ' + parts[1] + ', etc.'
        candidates.append(short)
        # even shorter: just first item + "and others"
        shortest = parts[0] + ' and others'
        candidates.append(shortest)

    # 5. For "X (Abbrev)" → just "X" (strip abbreviation paren)
    m2 = re.match(r'^(.+?)\s*\([A-Z]{2,8}\)\s*$', correct)
    if m2 and len(m2.group(1)) >= 4:
        candidates.append(m2.group(1).strip())

    # Pick the shortest candidate that is >= 4 chars
    candidates = [c for c in candidates if len(c) >= 4 and c != correct]
    candidates.sort(key=len)
    for cand in candidates:
        if len(cand) <= target:
            return cand
    # Return shortest candidate even if still above target
    if candidates:
        return candidates[0]
    return None

def try_expand_wrongs(opts, c, correct_len):
    """Expand all short wrong options to reduce ratio."""
    new_opts = list(opts)
    target_len = int(correct_len / 1.3)  # need wrongs to be at least this long

    for j, opt in enumerate(new_opts):
        if j == c: continue
        if len(opt) >= target_len: continue
        # Try fillers from shortest to longest until we hit target
        best = opt
        for filler in sorted(FILLERS_GENERAL, key=len):
            candidate = opt + filler
            if len(candidate) >= target_len:
                best = candidate
                break
            best = candidate  # keep the longest so far
        new_opts[j] = best

    new_om = others_max_len(new_opts, c)
    new_ratio = correct_len / max(new_om, 1)
    if new_ratio <= 1.3:
        return new_opts
    return None

def try_fix(opts, c):
    correct = opts[c]
    om = others_max_len(opts, c)
    ratio = len(correct) / max(om, 1)

    if ratio <= 1.3:
        return None

    # Try shortening correct first
    shorter = try_shorten_correct(correct, om)
    if shorter:
        new_ratio = len(shorter) / max(om, 1)
        if new_ratio <= 1.3:
            new_opts = list(opts)
            new_opts[c] = shorter
            return new_opts

    # Try expanding wrongs
    expanded = try_expand_wrongs(opts, c, len(correct))
    if expanded:
        return expanded

    # Try both: shorten correct AND expand wrongs
    if shorter:
        new_opts = list(opts)
        new_opts[c] = shorter
        expanded2 = try_expand_wrongs(new_opts, c, len(shorter))
        if expanded2:
            return expanded2

    return None

# ── Process ────────────────────────────────────────────────────────────────
total_fixed = 0
total_remaining = 0

for fname in ALL_FILES:
    fpath = os.path.join(DATA_DIR, fname)
    if not os.path.exists(fpath):
        continue

    content = open(fpath, encoding='utf-8').read()
    questions = parse_questions(content)

    fixes = []
    still_bad = 0

    for q in questions:
        opts = q['opts']
        c = q['corr']
        if c > 3: continue
        om = others_max_len(opts, c)
        ratio = len(opts[c]) / max(om, 1)
        if ratio <= 1.5: continue  # only fix clearly biased ones

        new_opts = try_fix(opts, c)
        if new_opts is None:
            still_bad += 1
            continue

        opts_inner = ', '.join(f'"{o}"' for o in new_opts)
        fixes.append({'start': q['opts_start'], 'end': q['opts_end'],
                      'replacement': f'options: [{opts_inner}]'})

    fixes.sort(key=lambda x: x['start'], reverse=True)
    for fix in fixes:
        content = content[:fix['start']] + fix['replacement'] + content[fix['end']:]

    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(content)

    total_fixed += len(fixes)
    total_remaining += still_bad
    if fixes or still_bad:
        print(f'{fname}: fixed {len(fixes)}, still biased {still_bad}')

print(f'\nAdditional fixes: {total_fixed}')
print(f'Remaining severely biased (ratio>1.5, unfixable automatically): {total_remaining}')
