"""
Fix literal newlines inside TypeScript string literals.
When a "..." string spans multiple lines, TypeScript errors.
Replace the literal newline with \\n so the string stays on one line.
"""
import sys, os
sys.stdout.reconfigure(encoding='utf-8')

BASE = r"C:\Users\bioas\Agricet Mock Test Series\src\data\questions"

FILES = [
    "da-101-lectures.ts", "da-101.ts",
    "da-102-lectures.ts", "da-102.ts",
    "da-111-lectures.ts", "da-111.ts",
    "da-121-lectures.ts", "da-121.ts",
    "da-122-lectures.ts", "da-122.ts",
    "da-131-lectures.ts", "da-131.ts",
    "da-132-lectures.ts", "da-132.ts",
    "da-151-lectures.ts", "da-151.ts",
    "da-171-lectures.ts", "da-171.ts",
    "da-263-lectures.ts", "da-263.ts",
    "da-291-lectures.ts", "da-291.ts",
]

def count_unescaped_quotes(line):
    """Count unescaped double-quote characters in a line."""
    count = 0
    i = 0
    while i < len(line):
        if line[i] == '\\' and i + 1 < len(line):
            i += 2  # skip escaped character
            continue
        if line[i] == '"':
            count += 1
        i += 1
    return count

def fix_multiline_strings(content):
    """Merge lines where a string literal is unclosed (odd number of unescaped quotes)."""
    lines = content.split('\n')
    result = []
    i = 0
    fixes = 0

    while i < len(lines):
        line = lines[i]
        q_count = count_unescaped_quotes(line)

        # If odd quotes, string is unclosed — merge with next line(s)
        while q_count % 2 == 1 and i + 1 < len(lines):
            i += 1
            next_line = lines[i]
            line = line + '\\n' + next_line
            q_count = count_unescaped_quotes(line)
            fixes += 1

        result.append(line)
        i += 1

    return '\n'.join(result), fixes

total_fixes = 0
for fname in FILES:
    fpath = os.path.join(BASE, fname)
    if not os.path.exists(fpath):
        print(f"  SKIP (not found): {fname}")
        continue
    with open(fpath, encoding='utf-8') as f:
        content = f.read()
    new_content, fixes = fix_multiline_strings(content)
    if fixes > 0:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        total_fixes += fixes
        print(f"  Fixed {fixes:>3} multiline strings in {fname}")
    else:
        print(f"  OK (no issues): {fname}")

print(f"\nTotal fixes: {total_fixes}")
