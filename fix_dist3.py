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

BLOCK_RE = re.compile(
    r'([ \t]*options:\s*\[)(.*?)(\],\s*\n[ \t]*correct:\s*)([0-3])(,)',
    re.DOTALL
)

BSLASH = chr(92)

def parse_opts(raw):
    results = []
    i = 0
    n = len(raw)
    while i < n:
        if raw[i] == '"':
            j = i + 1
            s = []
            while j < n:
                c = raw[j]
                if c == BSLASH and j + 1 < n:
                    s.append(raw[j:j+2])
                    j += 2
                elif c == '"':
                    results.append(''.join(s))
                    i = j + 1
                    break
                else:
                    s.append(c)
                    j += 1
            else:
                i = j
        else:
            i += 1
    return results

def fmt_opts(lst):
    return ', '.join('"' + o + '"' for o in lst)

TARGET = [0, 2, 1, 3]

def fix_file(rel_path):
    path = os.path.join(BASE, rel_path)
    if not os.path.exists(path):
        print("  NOT FOUND: " + rel_path); return

    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    blocks = list(BLOCK_RE.finditer(content))
    if not blocks:
        print("  NO MATCH: " + rel_path); return

    result = []
    prev_end = 0
    changed = 0
    counts = {0:0,1:0,2:0,3:0}

    for i, m in enumerate(blocks):
        target = TARGET[i % 4]
        pre=m.group(1); opts_raw=m.group(2); mid=m.group(3); curr=int(m.group(4)); post=m.group(5)
        opts = parse_opts(opts_raw)
        result.append(content[prev_end:m.start()])
        if len(opts) == 4 and curr != target:
            opts[curr], opts[target] = opts[target], opts[curr]
            result.append(pre + fmt_opts(opts) + mid + str(target) + post)
            counts[target] += 1; changed += 1
        else:
            result.append(m.group(0)); counts[curr] = counts.get(curr,0)+1
        prev_end = m.end()

    result.append(content[prev_end:])
    with open(path, 'w', encoding='utf-8') as f:
        f.write(''.join(result))

    name = os.path.basename(rel_path)
    print("  %s: %d/%d rotated | A:%d B:%d C:%d D:%d" % (name, changed, len(blocks), counts[0],counts[1],counts[2],counts[3]))

print("=== Fixing answer distribution ===\n")
for f in FILES:
    fix_file(f)
print("\nAll done!")
