import re, os

BASE = "C:/Users/bioas/Agricet Mock Test Series"

FILES = [
    "src/data/questions/da-101.ts",
    "src/data/questions/da-102.ts",
    "src/data/questions/da-111.ts",
    "src/data/questions/da-121.ts",
    "src/data/questions/da-122.ts",
    "src/data/questions/da-151.ts",
    "src/data/questions/da-171.ts",
    "src/data/questions/da-201.ts",
    "src/data/questions/da-241.ts",
    "src/data/questions/da-252.ts",
    "src/data/questions/da-281.ts",
    "src/data/questions/da-282.ts",
    "src/data/questions/da-291.ts",
]

# Match options line + correct line together
BLOCK_RE = re.compile(
    r'([ \t]*options:\s*\[)([^\]]+)(\],\s*\n\s*correct:\s*)(\d)(,)',
    re.DOTALL
)

def parse_opts(raw):
    return re.findall(r'"((?:[^"\]|\.)*)"', raw)

def fmt_opts(lst):
    return ', '.join(f'"{o}"' for o in lst)

# Deterministic target sequence: 0,2,1,3 repeating (gives 25 each for 100 Qs)
TARGET = [0, 2, 1, 3]

def fix_file(rel_path):
    path = os.path.join(BASE, rel_path)
    if not os.path.exists(path):
        print(f"  NOT FOUND: {rel_path}"); return

    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    blocks = list(BLOCK_RE.finditer(content))
    if not blocks:
        print(f"  NO MATCH: {rel_path}"); return

    result = []
    prev_end = 0
    changed = 0
    counts = {0:0,1:0,2:0,3:0}

    for i, m in enumerate(blocks):
        target = TARGET[i % 4]
        pre      = m.group(1)
        opts_raw = m.group(2)
        mid      = m.group(3)
        curr     = int(m.group(4))
        post     = m.group(5)

        opts = parse_opts(opts_raw)

        result.append(content[prev_end:m.start()])

        if len(opts) == 4 and curr != target:
            opts[curr], opts[target] = opts[target], opts[curr]
            result.append(pre + fmt_opts(opts) + mid + str(target) + post)
            counts[target] += 1
            changed += 1
        else:
            result.append(m.group(0))
            counts[curr] = counts.get(curr,0) + 1

        prev_end = m.end()

    result.append(content[prev_end:])
    new_content = ''.join(result)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)

    total = len(blocks)
    print(f"  {rel_path.split('/')[-1]}: {changed}/{total} rotated | A:{counts[0]} B:{counts[1]} C:{counts[2]} D:{counts[3]}")

print("=== Fixing answer distribution ===\n")
for f in FILES:
    fix_file(f)
print("\nDone!")
