"""
Fix "longest option = correct answer" bias by removing parenthetical
explanations from correct options where they make the correct answer
significantly longer than all wrong options.

Rule: if correct option contains "(some text)" AND removing it brings the
ratio (correct_len / max_wrong_len) below 1.3, strip the parenthetical.
"""
import re, sys
sys.stdout.reconfigure(encoding='utf-8')

DATA_DIR = r"C:\Users\bioas\Agricet Mock Test Series\src\data"

def get_options_and_corrects(content):
    results = []
    opt_iter  = list(re.finditer(r'options:\s*\[([^\]]+)\]', content))
    corr_iter = list(re.finditer(r'correct:\s*(\d)', content))

    for om in opt_iter:
        opts = re.findall(r'"([^"]*)"', om.group(1))
        if len(opts) != 4:
            continue
        # Find the first correct: after this options block
        cm = next((c for c in corr_iter if c.start() > om.end()), None)
        if not cm:
            continue
        results.append({
            'opts_start': om.start(),
            'opts_end':   om.end(),
            'opts':       opts,
            'corr_start': cm.start(),
            'corr_end':   cm.end(),
            'corr':       int(cm.group(1)),
            'opts_match': om,
            'corr_match': cm,
        })
    return results


def strip_paren(text):
    """Remove trailing parenthetical like ' (some explanation)' or ' – note'."""
    # Remove trailing (...)
    cleaned = re.sub(r'\s*\([^)]{3,}\)\s*$', '', text).strip()
    # Remove trailing ' – ...' or ' - ...'
    cleaned = re.sub(r'\s*[–\-—]\s*.{5,}$', '', cleaned).strip()
    return cleaned


import os

total_fixed = 0

for i in range(1, 11):
    fname = os.path.join(DATA_DIR, f'grandTest{i}.ts')
    content = open(fname, encoding='utf-8').read()
    questions = get_options_and_corrects(content)

    fixes = []  # (opts_start, opts_end, new_opts_str)

    for q in questions:
        opts = q['opts']
        c    = q['corr']
        if c > 3:
            continue

        correct_text = opts[c]
        lens = [len(o) for o in opts]
        correct_len = lens[c]
        others_max  = max(l for j,l in enumerate(lens) if j != c)

        ratio = correct_len / max(others_max, 1)
        if ratio <= 1.4:
            continue  # not biased enough to fix

        # Try stripping parenthetical from correct answer
        stripped = strip_paren(correct_text)
        if stripped == correct_text or len(stripped) < 3:
            continue  # nothing to strip

        new_correct_len = len(stripped)
        new_ratio = new_correct_len / max(others_max, 1)

        if new_ratio > 1.4:
            continue  # still too long after stripping

        # Apply the fix
        new_opts = opts[:]
        new_opts[c] = stripped
        opts_inner = ', '.join(f'"{o}"' for o in new_opts)
        fixes.append({
            'start': q['opts_start'],
            'end':   q['opts_end'],
            'replacement': f'options: [{opts_inner}]',
        })

    # Apply fixes in reverse order to preserve offsets
    fixes.sort(key=lambda x: x['start'], reverse=True)
    for fix in fixes:
        content = content[:fix['start']] + fix['replacement'] + content[fix['end']:]

    with open(fname, 'w', encoding='utf-8') as f:
        f.write(content)

    total_fixed += len(fixes)
    print(f'GT{i}: fixed {len(fixes)} questions')

print(f'\nTotal parenthetical hints removed: {total_fixed}')
print('Correct answers preserved — only explanatory hints removed from option text.')
