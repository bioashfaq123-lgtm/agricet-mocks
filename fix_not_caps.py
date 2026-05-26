"""
Fix 'NOT' -> 'not' in AR option 2 across all question files.
Standard format: 'Both A and R are true but R is not the correct explanation of A'
"""
import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

BASE = r"C:\Users\bioas\Agricet Mock Test Series\src\data\questions"
FILES = [
    "da-263-lectures.ts", "da-263.ts",
    "da-281-lectures.ts", "da-281.ts",
    "da-282-lectures.ts", "da-282.ts",
    "da-291-lectures.ts", "da-291.ts",
]

for fname in FILES:
    fpath = os.path.join(BASE, fname)
    with open(fpath, encoding='utf-8') as f:
        content = f.read()
    new_content = content.replace(
        'Both A and R are true but R is NOT the correct explanation of A',
        'Both A and R are true but R is not the correct explanation of A'
    )
    count = content.count('Both A and R are true but R is NOT the correct explanation of A')
    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"{fname}: fixed {count} occurrence(s)")

print("\nDone!")
