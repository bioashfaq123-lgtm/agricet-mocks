"""
Second pass on single-line format files — uses longer qualifiers
for files where the first pass didn't fully resolve the bias.
"""
import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

BASE = r"C:\Users\bioas\Agricet Mock Test Series\src\data\questions"

AR_MARKERS = ["both a and r", "a is true", "a is false", "r is true", "r is false"]
def is_ar_question(opts):
    return sum(1 for o in opts if any(m in o.lower() for m in AR_MARKERS)) >= 2
def word_count(s):
    return len(s.split())
def is_biased(opts, correct_idx):
    cl = word_count(opts[correct_idx])
    dl = [word_count(opts[i]) for i in range(4) if i != correct_idx]
    avg = sum(dl)/3
    return cl > avg * 1.5 and cl - avg > 3, avg

# Longer qualifiers (5-7 words) for files needing more expansion
LONG_QUALIFIERS = {
    "economics.ts": [
        "as defined in agricultural economics",
        "according to farm management principles",
        "in the context of rural markets",
        "as per agricultural policy framework",
        "under the Indian agricultural system",
    ],
    "extension.ts": [
        "according to extension education principles",
        "as per rural development frameworks",
        "in agricultural extension programmes",
        "under community development approaches",
        "as defined in extension methodology",
    ],
    "genetics.ts": [
        "as per Mendelian genetics principles",
        "according to plant breeding science",
        "in the context of crop genetics",
        "under classical genetics framework",
        "as defined in heredity studies",
    ],
    "seed-technology.ts": [
        "according to seed certification standards",
        "as per seed technology protocols",
        "in seed quality management systems",
        "under seed testing procedures",
        "as per ISTA standards for seeds",
    ],
    "biochemistry.ts": [
        "according to plant biochemistry principles",
        "as per metabolic pathway analysis",
        "in the context of plant physiology",
        "under biochemical reaction conditions",
        "as defined in plant molecular biology",
    ],
    "crop-physiology.ts": [
        "according to plant physiology principles",
        "as per crop growth stage analysis",
        "in the context of plant metabolism",
        "under controlled physiological conditions",
        "as defined in crop physiology studies",
    ],
    "farm-machinery.ts": [
        "according to agricultural engineering principles",
        "as per farm machinery standards",
        "in the context of mechanized farming",
        "under standard field operation conditions",
        "as per machinery performance criteria",
    ],
    "english-communication.ts": [
        "according to communication theory",
        "as per formal language standards",
        "in the context of academic writing",
        "under language learning principles",
        "as defined in rhetoric and composition",
    ],
    "computer-applications.ts": [
        "according to computer science principles",
        "as per standard software documentation",
        "in the context of digital systems",
        "under standard computing conditions",
        "as per IT industry standards",
    ],
    "general-agriculture.ts": [
        "according to agricultural science principles",
        "as per standard farming practices",
        "in the context of Indian agriculture",
        "under recommended agronomic conditions",
        "as per ICAR crop production guidelines",
    ],
    "meteorology.ts": [
        "according to meteorological science principles",
        "as per weather forecasting methodology",
        "in the context of agricultural climatology",
        "under standard atmospheric conditions",
        "as defined in agro-meteorology studies",
    ],
    "irrigation.ts": [
        "according to irrigation engineering principles",
        "as per water management guidelines",
        "in the context of irrigation design",
        "under standard water application conditions",
        "as per command area development norms",
    ],
}

def fix_line(line, qualifiers):
    # Extract options array
    opt_m = re.search(r'(options:\s*\[)(.+?)(\])', line)
    corr_m = re.search(r'correct:\s*(\d+)', line)
    if not opt_m or not corr_m:
        return line, False

    correct_idx = int(corr_m.group(1))
    opts_section = opt_m.group(2)
    opts = re.findall(r'"((?:[^"\\]|\\.)*)"', opts_section)

    if len(opts) != 4 or not (0 <= correct_idx <= 3):
        return line, False
    if is_ar_question(opts):
        return line, False

    biased, avg_dist = is_biased(opts, correct_idx)
    if not biased:
        return line, False

    correct_len = word_count(opts[correct_idx])
    # More aggressive target: aim for distractors to be at least 65% of correct
    target = int(correct_len * 0.65)
    target = max(target, int(avg_dist) + 4)

    new_opts = list(opts)
    qc = 0
    for idx in range(4):
        if idx == correct_idx:
            continue
        current_len = word_count(new_opts[idx])
        if current_len < target:
            # Add a qualifier, even if already has one (append different qualifier)
            qual = qualifiers[qc % len(qualifiers)]
            # Don't add if already ends with this exact qualifier
            if not new_opts[idx].endswith(qual.strip()):
                new_opts[idx] = new_opts[idx] + " " + qual
                qc += 1

    if new_opts == list(opts):
        return line, False

    # Check if it improved
    new_biased, _ = is_biased(new_opts, correct_idx)
    # Accept if at least some change was made (even if still technically biased, length disparity is reduced)

    # Replace in line
    new_line = line
    for old_opt, new_opt in zip(opts, new_opts):
        if old_opt != new_opt:
            new_opt_m = re.search(r'(options:\s*\[)(.+?)(\])', new_line)
            if new_opt_m:
                sect = new_opt_m.group(2)
                if '"' + old_opt + '"' in sect:
                    new_sect = sect.replace('"' + old_opt + '"', '"' + new_opt + '"', 1)
                    new_line = new_line[:new_opt_m.start(2)] + new_sect + new_line[new_opt_m.end(2):]

    return new_line, new_line != line

def fix_file(fpath, fname):
    qualifiers = LONG_QUALIFIERS.get(fname)
    if not qualifiers:
        return 0

    with open(fpath, encoding='utf-8') as f:
        lines = f.readlines()

    new_lines = []
    fixes = 0
    for line in lines:
        new_line, changed = fix_line(line.rstrip('\n'), qualifiers)
        new_lines.append(new_line)
        if changed:
            fixes += 1

    if fixes:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write('\n'.join(new_lines))
    return fixes

total = 0
for fname in LONG_QUALIFIERS:
    fpath = os.path.join(BASE, fname)
    if not os.path.exists(fpath):
        continue
    fixes = fix_file(fpath, fname)
    if fixes:
        print(f"  {fname}: {fixes} questions further improved")
    total += fixes

print(f"\nSecond pass total: {total} questions improved")
