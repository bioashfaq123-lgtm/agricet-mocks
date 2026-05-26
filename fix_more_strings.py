"""Fix remaining files with multiline string literals."""
import sys, os
sys.stdout.reconfigure(encoding='utf-8')

BASE = r"C:\Users\bioas\Agricet Mock Test Series\src\data\questions"

# These were not in the first fix run
EXTRA_FILES = [
    "da-262.ts", "da-262-lectures.ts",
    "da-281.ts", "da-281-lectures.ts",
    "da-282.ts", "da-282-lectures.ts",
    "da-291.ts", "da-291-lectures.ts",
    "da-201.ts", "da-201-lectures.ts",
    "da-241.ts", "da-241-lectures.ts",
    "da-252.ts", "da-252-lectures.ts",
    "computer-applications.ts",
    "english-communication.ts",
    "general-agriculture.ts",
]

def count_quotes(line):
    count = 0
    i = 0
    bs = '\\'
    dq = '"'
    while i < len(line):
        ch = line[i]
        if ch == bs and i + 1 < len(line):
            i += 2
            continue
        if ch == dq:
            count += 1
        i += 1
    return count

def fix_file(fpath):
    with open(fpath, encoding='utf-8') as f:
        content = f.read()
    lines = content.split('\n')
    result = []
    fixes = 0
    i = 0
    while i < len(lines):
        line = lines[i]
        q = count_quotes(line)
        while q % 2 == 1 and i + 1 < len(lines):
            i += 1
            line = line + r'\n' + lines[i]
            q = count_quotes(line)
            fixes += 1
        result.append(line)
        i += 1
    new_content = '\n'.join(result)
    if fixes > 0:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(new_content)
    return fixes

total = 0
for fname in EXTRA_FILES:
    fpath = os.path.join(BASE, fname)
    if not os.path.exists(fpath):
        continue
    fixes = fix_file(fpath)
    status = f"Fixed {fixes}" if fixes else "OK"
    print(f"  {fname}: {status}")
    total += fixes

print(f"\nTotal additional fixes: {total}")
