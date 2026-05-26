"""
Fix missing commas between question batches in combined TS files.
Pattern: when a line is just '  }' followed (after optional blank/comment lines)
by '  {', a comma is needed after '  }'.
"""
import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

BASE = r"C:\Users\bioas\Agricet Mock Test Series\src\data\questions"

# All combined and lecture files that might have this issue
import glob
all_ts = glob.glob(os.path.join(BASE, "*.ts"))

total_fixes = 0
for fpath in sorted(all_ts):
    fname = os.path.basename(fpath)
    if fname == "index.ts":
        continue
    with open(fpath, encoding='utf-8') as f:
        content = f.read()

    # Find pattern: '  }' on its own line, then blank/comment lines, then '  {'
    # Replace '  }' with '  },' when the next non-blank, non-comment line is '  {'
    lines = content.split('\n')
    new_lines = []
    fixes = 0
    i = 0
    while i < len(lines):
        line = lines[i]
        # Check if this line is a closing brace (possibly missing comma)
        stripped = line.rstrip()
        if stripped == '  }':
            # Look ahead: skip blank lines and comment lines
            j = i + 1
            while j < len(lines) and (lines[j].strip() == '' or lines[j].strip().startswith('//')):
                j += 1
            # If the next non-blank/non-comment line is '{' (opening of next question)
            if j < len(lines) and lines[j].rstrip() in ('  {', '  },'):
                # Check it's not already a comma
                if lines[j].rstrip() == '  {':
                    # Need comma after current line
                    new_lines.append(stripped + ',')
                    fixes += 1
                    i += 1
                    continue
        new_lines.append(line)
        i += 1

    if fixes:
        new_content = '\n'.join(new_lines)
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        total_fixes += fixes
        print(f"  Fixed {fixes:>3} missing comma(s) in {fname}")

print(f"\nTotal: {total_fixes} missing commas fixed")
