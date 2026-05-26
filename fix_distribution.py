import re, os, sys

# Files to fix (DA-131 and DA-132 are being rewritten by agents)
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

BASE = "C:/Users/bioas/Agricet Mock Test Series"

# Pattern to find each question block
Q_PATTERN = re.compile(
    r'(\{[^{}]*?"options"\s*:\s*\[)(.*?)(\]\s*,\s*correct\s*:\s*)(\d)(\s*[,}])',
    re.DOTALL
)

# Parse options from a JS array string like '"A", "B", "C", "D"'
def parse_options(opts_str):
    # Extract strings between quotes, handling escaped quotes
    return re.findall(r'"((?:[^"\]|\.)*)"', opts_str)

def reformat_options(opts):
    return ', '.join(f'"{o}"' for o in opts)

def fix_file(filepath):
    full_path = os.path.join(BASE, filepath)
    if not os.path.exists(full_path):
        print(f"  SKIP (not found): {filepath}")
        return

    with open(full_path, 'r', encoding='utf-8') as f:
        content = f.read()

    matches = list(Q_PATTERN.finditer(content))
    if not matches:
        print(f"  SKIP (no matches): {filepath}")
        return

    total = len(matches)
    # Build target sequence: 25 each of 0,1,2,3
    target_seq = []
    for i in range(total):
        target_seq.append(i % 4)

    # Shuffle so it's not strictly 0,1,2,3,0,1,2,3...
    # Use a deterministic pseudo-shuffle: 0,2,1,3,0,2,1,3,...
    alt_seq = []
    pattern4 = [0, 2, 1, 3]
    for i in range(total):
        alt_seq.append(pattern4[i % 4])

    counts = {0:0, 1:0, 2:0, 3:0}
    new_content = content
    offset = 0  # track position shift as we replace

    changed = 0
    for idx, m in enumerate(matches):
        target = alt_seq[idx]
        pre        = m.group(1)   # '{"options": ['
        opts_str   = m.group(2)   # '"A","B","C","D"'
        mid        = m.group(3)   # '], correct: '
        curr_str   = m.group(4)   # '1'
        post       = m.group(5)   # ','

        current = int(curr_str)
        opts = parse_options(opts_str)

        if len(opts) != 4:
            counts[current] = counts.get(current, 0) + 1
            continue

        if current != target:
            # Swap correct answer to target position
            opts[current], opts[target] = opts[target], opts[current]
            new_opts_str = reformat_options(opts)
            new_block = pre + new_opts_str + mid + str(target) + post
            old_block = m.group(0)

            # Replace in content (accounting for offset)
            start = m.start() + offset
            end   = m.end()   + offset
            new_content = new_content[:start] + new_block + new_content[end:]
            offset += len(new_block) - len(old_block)
            counts[target] = counts.get(target, 0) + 1
            changed += 1
        else:
            counts[current] = counts.get(current, 0) + 1

    with open(full_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"  {filepath}: {changed} fixed | dist A:{counts[0]} B:{counts[1]} C:{counts[2]} D:{counts[3]}")

print("Fixing answer distribution across all subject files...\n")
for f in FILES:
    fix_file(f)
print("\nDone!")
