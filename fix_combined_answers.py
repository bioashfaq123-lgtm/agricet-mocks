"""
Shuffle options in the combined (100-question) subject files.
Correct answer TEXT stays the same — only its A/B/C/D position changes.
"""
import re, random, os

BASE = r"C:\Users\bioas\Agricet Mock Test Series\src\data\questions"
files = sorted([f for f in os.listdir(BASE) if re.match(r'^da-\d+\.ts$', f)])

pattern = re.compile(
    r'(options:\s*\[)(.*?)(\],\s*\n\s*correct:\s*)(\d)',
    re.DOTALL
)

total_before = {0:0,1:0,2:0,3:0}
total_after  = {0:0,1:0,2:0,3:0}

print(f"{'FILE':<25} {'CHANGED':>8}  BEFORE(A/B/C/D)       AFTER(A/B/C/D)")
print("-"*80)

for fname in files:
    fpath = os.path.join(BASE, fname)
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    before = {0:0,1:0,2:0,3:0}
    after  = {0:0,1:0,2:0,3:0}
    changes = [0]

    def replacer(m):
        prefix     = m.group(1)
        opts_str   = m.group(2)
        middle     = m.group(3)
        correct_ch = m.group(4)
        correct_idx = int(correct_ch)

        opts = re.findall(r'"((?:[^"\\]|\\.)*)"', opts_str)

        if len(opts) != 4 or correct_idx >= 4:
            before[correct_idx] = before.get(correct_idx, 0) + 1
            after[correct_idx]  = after.get(correct_idx, 0) + 1
            return m.group(0)

        before[correct_idx] += 1
        correct_text = opts[correct_idx]

        seed = abs(hash(opts_str)) % (2**31)
        rng = random.Random(seed)
        shuffled = opts[:]
        rng.shuffle(shuffled)
        new_correct = shuffled.index(correct_text)

        after[new_correct] += 1
        changes[0] += 1

        new_opts = ', '.join(f'"{o}"' for o in shuffled)
        return f'{prefix}{new_opts}{middle}{new_correct}'

    new_content = pattern.sub(replacer, content)

    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(new_content)

    for k in range(4):
        total_before[k] += before.get(k, 0)
        total_after[k]  += after.get(k, 0)

    bef = f"A:{before[0]} B:{before[1]} C:{before[2]} D:{before[3]}"
    aft = f"A:{after[0]} B:{after[1]} C:{after[2]} D:{after[3]}"
    print(f"{fname:<25} {changes[0]:>8}  {bef:<22} {aft}")

grand = sum(total_before.values())
print("="*80)
print(f"GRAND TOTAL ({grand} questions)")
print(f"  BEFORE: A:{total_before[0]} B:{total_before[1]} C:{total_before[2]} D:{total_before[3]}  B%:{total_before[1]/grand*100:.1f}%")
print(f"  AFTER:  A:{total_after[0]} B:{total_after[1]} C:{total_after[2]} D:{total_after[3]}  B%:{total_after[1]/grand*100:.1f}%")
print("\nAll combined subject files fixed!")
