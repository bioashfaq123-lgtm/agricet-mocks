"""
Shuffle options in all lecture question files so answers are evenly distributed.
The CORRECT ANSWER TEXT stays the same — only its position (A/B/C/D) changes.
"""
import re, random, os

BASE = r"C:\Users\bioas\Agricet Mock Test Series\src\data\questions"

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    before_dist = {0:0,1:0,2:0,3:0}
    after_dist  = {0:0,1:0,2:0,3:0}
    changes = 0

    # Match:  options: ["...", "...", "...", "..."],\n    correct: N
    pattern = re.compile(
        r'(options:\s*\[)(.*?)(\],\s*\n\s*correct:\s*)(\d)',
        re.DOTALL
    )

    def replacer(m):
        nonlocal changes
        prefix     = m.group(1)   # 'options: ['
        opts_str   = m.group(2)   # content inside brackets
        middle     = m.group(3)   # '],\n    correct: '
        correct_ch = m.group(4)   # '0','1','2','3'
        correct_idx = int(correct_ch)

        # Extract the 4 quoted option strings (handles escaped chars)
        opts = re.findall(r'"((?:[^"\\]|\\.)*)"', opts_str)

        if len(opts) != 4 or correct_idx >= 4:
            before_dist[correct_idx] = before_dist.get(correct_idx,0) + 1
            after_dist[correct_idx]  = after_dist.get(correct_idx,0) + 1
            return m.group(0)

        before_dist[correct_idx] += 1
        correct_text = opts[correct_idx]

        # Deterministic shuffle: seed = hash of the options content
        seed = abs(hash(opts_str)) % (2**31)
        rng = random.Random(seed)
        shuffled = opts[:]
        rng.shuffle(shuffled)
        new_correct = shuffled.index(correct_text)

        after_dist[new_correct] += 1
        changes += 1

        new_opts_str = ', '.join(f'"{o}"' for o in shuffled)
        return f'{prefix}{new_opts_str}{middle}{new_correct}'

    new_content = pattern.sub(replacer, content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

    return changes, before_dist, after_dist


# ── Run on all lecture files ──────────────────────────────────────────────────
files = sorted([f for f in os.listdir(BASE) if 'lectures' in f and f.endswith('.ts')])

total_before = {0:0,1:0,2:0,3:0}
total_after  = {0:0,1:0,2:0,3:0}

print(f"{'FILE':<35} {'CHANGED':>8}  BEFORE(A/B/C/D)       AFTER(A/B/C/D)")
print("-"*85)

for fname in files:
    fpath = os.path.join(BASE, fname)
    ch, before, after = process_file(fpath)
    for k in range(4):
        total_before[k] += before.get(k,0)
        total_after[k]  += after.get(k,0)
    tot = sum(before.values())
    bef_str = f"A:{before[0]} B:{before[1]} C:{before[2]} D:{before[3]}"
    aft_str = f"A:{after[0]} B:{after[1]} C:{after[2]} D:{after[3]}"
    print(f"{fname:<35} {ch:>8}  {bef_str:<22} {aft_str}")

grand = sum(total_before.values())
print("\n" + "="*85)
print(f"GRAND TOTAL  ({grand} questions)")
print(f"  BEFORE: A:{total_before[0]} B:{total_before[1]} C:{total_before[2]} D:{total_before[3]}  — B was {total_before[1]/grand*100:.1f}%")
print(f"  AFTER:  A:{total_after[0]} B:{total_after[1]} C:{total_after[2]} D:{total_after[3]}  — B is  {total_after[1]/grand*100:.1f}%")
print("\nAll lecture files fixed!")
