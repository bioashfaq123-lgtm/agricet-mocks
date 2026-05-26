"""Fix the old legacy files that were missed in the first pass."""
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

QUALIFIERS = {
    "agronomy.ts":      ["in agronomy", "for field crops", "under dryland conditions", "in crop production", "in cereal cultivation"],
    "agronomy2.ts":     ["in agronomy", "for dryland crops", "under field conditions", "in kharif season", "for field crop management"],
    "biochemistry.ts":  ["in plant biochemistry", "in metabolic pathways", "in plant cells", "under aerobic conditions", "in biochemical analysis"],
    "economics.ts":     ["in agricultural economics", "in farm management", "for price analysis", "in rural markets", "under market equilibrium"],
    "entomology.ts":    ["in entomology", "for field crops", "in crop protection", "under field infestation", "in pest management"],
    "genetics.ts":      ["in genetics", "in plant breeding", "for crop improvement", "under Mendelian inheritance", "in heredity analysis"],
    "horticulture.ts":  ["in horticulture", "for fruit crops", "in orchard management", "for vegetable cultivation", "under nursery conditions"],
    "meteorology.ts":   ["in meteorology", "in weather forecasting", "for crop planning", "under atmospheric conditions", "in climate analysis"],
    "plant-pathology.ts":["in plant pathology", "in disease management", "for crop protection", "in disease diagnosis", "under field conditions"],
    "seed-technology.ts":["in seed technology", "for seed quality", "in seed processing", "under storage conditions", "in seed certification"],
    "soil-science.ts":  ["in soil science", "for soil fertility", "in soil management", "under tropical conditions", "in soil classification"],
    "irrigation.ts":    ["in irrigation", "for water management", "in irrigation design", "under field conditions", "for water use efficiency"],
    "general-agriculture.ts":["in agriculture", "for farmers", "under Indian conditions", "in crop science", "in the field context"],
}

def fix_file(fpath, fname):
    qualifiers = QUALIFIERS.get(fname, ["in agriculture", "under field conditions", "for crop production", "in farming", "in the field"])
    with open(fpath, encoding='utf-8') as f:
        content = f.read()

    lines = content.split('\n')
    result = list(lines)
    fixes = 0
    i = 0
    while i < len(lines):
        line = lines[i]
        if re.search(r'^\s*correct:\s*\d+', line):
            correct_idx = int(re.search(r'correct:\s*(\d+)', line).group(1))
            j = i - 1
            opt_end = opt_start = -1
            while j >= max(0, i - 30):
                if ']' in lines[j] and opt_end == -1:
                    opt_end = j
                if 'options:' in lines[j]:
                    opt_start = j
                    break
                j -= 1
            if opt_start == -1 or opt_end == -1:
                i += 1; continue

            opts_block = '\n'.join(lines[opt_start:opt_end+1])
            opts = re.findall(r'"((?:[^"\\]|\\.)*)"', opts_block)
            if len(opts) != 4 or not (0 <= correct_idx <= 3):
                i += 1; continue
            if is_ar_question(opts):
                i += 1; continue

            biased, avg_dist = is_biased(opts, correct_idx)
            if not biased:
                i += 1; continue

            correct_len = word_count(opts[correct_idx])
            target = int(avg_dist + (correct_len - avg_dist) * 0.6)
            target = min(target, correct_len - 1)

            new_opts = list(opts)
            qc = 0
            for idx in range(4):
                if idx == correct_idx: continue
                if word_count(new_opts[idx]) < target - 1:
                    already = any(new_opts[idx].endswith(q) for q in qualifiers)
                    if not already:
                        new_opts[idx] = new_opts[idx] + " " + qualifiers[qc % len(qualifiers)]
                        qc += 1

            if new_opts == list(opts):
                i += 1; continue

            changed = False
            for idx in range(4):
                if new_opts[idx] != opts[idx]:
                    old_q = '"' + opts[idx] + '"'
                    new_q = '"' + new_opts[idx] + '"'
                    block = '\n'.join(result[opt_start:opt_end+1])
                    if old_q in block:
                        new_block = block.replace(old_q, new_q, 1)
                        if new_block != block:
                            nb_lines = new_block.split('\n')
                            result[opt_start:opt_end+1] = nb_lines
                            opt_end = opt_start + len(nb_lines) - 1
                            changed = True
            if changed:
                fixes += 1
        i += 1

    if fixes:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write('\n'.join(result))
    return fixes

LEGACY = ["agronomy.ts","agronomy2.ts","biochemistry.ts","economics.ts","entomology.ts",
          "genetics.ts","horticulture.ts","meteorology.ts","plant-pathology.ts",
          "seed-technology.ts","soil-science.ts","irrigation.ts","general-agriculture.ts"]

total = 0
for fname in LEGACY:
    fpath = os.path.join(BASE, fname)
    if not os.path.exists(fpath): continue
    fixes = fix_file(fpath, fname)
    if fixes:
        print(f"  {fname}: {fixes}")
    total += fixes

print(f"\nLegacy total: {total}")
