"""
Fix option length bias in single-line format question files.
These files have each question on ONE line: { id:"...", ..., options:["A","B","C","D"], correct:N, ... }
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
    avg = sum(dl) / 3
    return cl > avg * 1.5 and cl - avg > 3, avg

QUALIFIERS = {
    "agronomy.ts":       ["in agronomy", "for field crops", "under dryland conditions", "in crop production", "in cereal cultivation"],
    "agronomy2.ts":      ["in dryland agronomy", "for kharif crops", "under field conditions", "in cereal crops", "for crop management"],
    "biochemistry.ts":   ["in plant biochemistry", "in metabolic pathways", "in plant cells", "under aerobic conditions", "in biochemical processes"],
    "economics.ts":      ["in agricultural economics", "in farm management", "for price analysis", "in rural markets", "under market conditions"],
    "entomology.ts":     ["in entomology", "for field crops", "in crop protection", "under pest infestation", "in pest management"],
    "genetics.ts":       ["in plant genetics", "in heredity studies", "for crop improvement", "under Mendelian genetics", "in genetic analysis"],
    "horticulture.ts":   ["in horticulture", "for fruit crops", "in orchard management", "for vegetable cultivation", "under nursery conditions"],
    "plant-pathology.ts":["in plant pathology", "in disease management", "for crop protection", "in disease diagnosis", "under field conditions"],
    "seed-technology.ts":["in seed technology", "for seed quality", "in seed processing", "under storage conditions", "in seed certification"],
    "soil-science.ts":   ["in soil science", "for soil fertility", "in soil management", "under tropical conditions", "in soil classification"],
    "general-agriculture.ts":["in agriculture", "for farmers", "under Indian conditions", "in crop science", "in the field"],
}

def extract_options_from_line(line):
    """Extract options array from a single-line question object."""
    # Pattern: options:["opt1","opt2","opt3","opt4"]
    m = re.search(r'options:\s*\[', line)
    if not m:
        return None, None, None, None

    start = m.end()
    # Extract 4 options manually
    opts = []
    pos = start
    while len(opts) < 4 and pos < len(line):
        # Find opening quote
        q_start = line.find('"', pos)
        if q_start == -1:
            break
        # Find closing quote (handle escaped quotes)
        q_end = q_start + 1
        while q_end < len(line):
            if line[q_end] == '\\':
                q_end += 2
            elif line[q_end] == '"':
                break
            else:
                q_end += 1
        opts.append(line[q_start+1:q_end])
        pos = q_end + 1
        # Check if next char is ] (end of array)
        while pos < len(line) and line[pos] in ' ,':
            pos += 1
        if pos < len(line) and line[pos] == ']':
            break

    # Extract correct index
    cm = re.search(r'correct:\s*(\d+)', line)
    if not cm:
        return None, None, None, None

    correct_idx = int(cm.group(1))
    opts_match = re.search(r'options:\s*\[([^\]]+)\]', line)
    if opts_match:
        opts_raw = opts_match.group(0)

    return opts, correct_idx, m.start(), opts_raw if opts_match else None

def fix_line(line, qualifiers):
    """Fix a single question line if it has long-option bias."""
    opts, correct_idx, _, _ = extract_options_from_line(line)

    if opts is None or len(opts) != 4 or not (0 <= correct_idx <= 3):
        return line, False

    if is_ar_question(opts):
        return line, False

    biased, avg_dist = is_biased(opts, correct_idx)
    if not biased:
        return line, False

    correct_len = word_count(opts[correct_idx])
    target = int(avg_dist + (correct_len - avg_dist) * 0.6)
    target = min(target, correct_len - 1)

    new_opts = list(opts)
    qc = 0
    for idx in range(4):
        if idx == correct_idx:
            continue
        dist_len = word_count(new_opts[idx])
        already = any(new_opts[idx].endswith(q) for q in qualifiers)
        if dist_len < target - 1 and not already:
            new_opts[idx] = new_opts[idx] + " " + qualifiers[qc % len(qualifiers)]
            qc += 1

    if new_opts == list(opts):
        return line, False

    # Replace options in the line
    new_line = line
    for old_opt, new_opt in zip(opts, new_opts):
        if old_opt != new_opt:
            # Replace the quoted option carefully
            old_q = '"' + old_opt.replace('\\', '\\\\') + '"'
            new_q = '"' + new_opt.replace('\\', '\\\\') + '"'
            # Only replace within the options array portion
            opt_m = re.search(r'(options:\s*\[)(.+?)(\])', new_line)
            if opt_m:
                opt_section = opt_m.group(2)
                if old_opt in opt_section:
                    new_section = opt_section.replace('"' + old_opt + '"', '"' + new_opt + '"', 1)
                    new_line = new_line[:opt_m.start(2)] + new_section + new_line[opt_m.end(2):]

    changed = new_line != line
    return new_line, changed

def fix_file(fpath, fname):
    qualifiers = QUALIFIERS.get(fname, ["in agriculture", "under field conditions", "for crop production", "in farming", "in the agricultural context"])

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
        if not new_lines[-1].endswith('\n'):
            pass  # already handled

    return fixes

# Target: only single-line format files
SINGLE_LINE_FILES = [
    "agronomy.ts", "agronomy2.ts", "biochemistry.ts", "computer-applications.ts",
    "crop-physiology.ts", "economics.ts", "english-communication.ts",
    "entomology.ts", "extension.ts", "farm-machinery.ts", "general-agriculture.ts",
    "genetics.ts", "horticulture.ts", "irrigation.ts", "meteorology.ts",
    "plant-pathology.ts", "seed-technology.ts", "soil-science.ts",
]

total = 0
for fname in SINGLE_LINE_FILES:
    fpath = os.path.join(BASE, fname)
    if not os.path.exists(fpath):
        continue
    fixes = fix_file(fpath, fname)
    if fixes:
        print(f"  {fname}: {fixes} questions improved")
    total += fixes

print(f"\nSingle-line format total: {total} questions improved")
