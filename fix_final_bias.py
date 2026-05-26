"""
Final pass: fix remaining biased questions that already have one qualifier
but still fail the threshold. Uses the multi-line parser from fix_all_bias.py
with a smarter expansion that REPLACES short qualifiers with longer ones.
"""
import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')
BASE = r"C:\Users\bioas\Agricet Mock Test Series\src\data\questions"

AR_MARKERS = ["both a and r", "a is true", "a is false", "r is true", "r is false"]
def is_ar(opts): return sum(1 for o in opts if any(m in o.lower() for m in AR_MARKERS)) >= 2
def wc(s): return len(s.split())
def is_biased_q(opts, ci, threshold=1.5, min_diff=3):
    cl = wc(opts[ci]); dl = [wc(opts[i]) for i in range(4) if i != ci]; avg = sum(dl)/3
    return cl > avg*threshold and cl-avg > min_diff, avg

# Short qualifiers to detect and replace
SHORT_QUALS = [
    "in extension education", "in rural development programmes", "for farming communities",
    "under this extension approach", "in the farming context", "in crop production",
    "in field conditions", "for agricultural purposes", "in agronomy",
    "for field crops", "under dryland conditions", "in cereal cultivation",
    "in plant biochemistry", "in metabolic pathways", "in plant cells",
    "under aerobic conditions", "in biochemical processes",
    "in agricultural economics", "in farm management", "for price analysis",
    "in rural markets", "under market conditions",
    "in entomology", "in crop protection", "under pest infestation",
    "in pest management", "in plant genetics", "in heredity studies",
    "for crop improvement", "under Mendelian genetics", "in genetic analysis",
    "in horticulture", "for fruit crops", "in orchard management",
    "for vegetable cultivation", "under nursery conditions",
    "in plant pathology", "in disease management", "for crop protection",
    "in disease diagnosis", "in seed technology", "for seed quality",
    "in seed processing", "under storage conditions", "in seed certification",
    "in soil science", "for soil fertility", "in soil management",
    "under tropical conditions", "in soil classification",
    "in agriculture", "for farmers", "under Indian conditions",
    "in crop science", "in the field", "under field conditions",
    "in agricultural meteorology", "in weather analysis",
    "for crop planning", "in climate studies", "under atmospheric conditions",
    "in irrigation management", "for water application", "in water use efficiency",
    "in irrigation", "for water management", "in irrigation design",
    "in pest management", "in entomology", "in biochemical analysis",
    "in plant growth", "in crop physiology", "during germination",
    "in photosynthesis", "in plant metabolism",
    "in farm operations", "for tractor operation", "in agricultural machinery",
    "for soil tillage",
    "in extension education theory", "as per rural development methodology",
    "in the context of agricultural extension",
]

# Longer replacement qualifiers by file topic
REPLACEMENTS = {
    "extension.ts": "according to extension education and rural development science",
    "seed-technology.ts": "as per seed technology and quality control standards",
    "crop-physiology.ts": "according to plant physiology and crop science principles",
    "farm-machinery.ts": "as per agricultural engineering and machinery standards",
    "computer-applications.ts": "according to standard computer science and IT principles",
    "english-communication.ts": "as per formal communication and English language theory",
    "meteorology.ts": "according to standard agro-meteorological science principles",
    "irrigation.ts": "as per irrigation engineering and water management norms",
    "da-132-lectures.ts": "as per crop protection and integrated pest management principles",
    "da-132.ts": "as per crop protection and integrated pest management principles",
    "da-151-lectures.ts": "according to plant breeding and genetics science principles",
    "da-122-lectures.ts": "according to soil fertility and water conservation principles",
    "da-131-lectures.ts": "as per entomology and crop pest management principles",
    "da-171-lectures.ts": "according to plant pathology and disease management science",
}

def fix_file(fpath, fname):
    replacement = REPLACEMENTS.get(fname)
    if not replacement:
        return 0

    with open(fpath, encoding='utf-8') as f:
        content = f.read()

    lines = content.split('\n')
    result = list(lines)
    fixes = 0

    i = 0
    while i < len(lines):
        line = lines[i]
        if re.search(r'^\s*correct:\s*\d+', line):
            ci = int(re.search(r'correct:\s*(\d+)', line).group(1))
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

            block = '\n'.join(lines[opt_start:opt_end+1])
            opts = re.findall(r'"((?:[^"\\]|\\.)*)"', block)
            if len(opts) != 4 or not (0 <= ci <= 3):
                i += 1; continue
            if is_ar(opts):
                i += 1; continue

            biased, avg_dist = is_biased_q(opts, ci)
            if not biased:
                i += 1; continue

            correct_len = wc(opts[ci])
            # Calculate needed words per distractor
            needed_avg = correct_len / 1.5  # to clear the threshold

            new_opts = list(opts)
            changed = False
            qc = 0
            for idx in range(4):
                if idx == ci: continue
                current = new_opts[idx]
                current_wc = wc(current)
                if current_wc >= needed_avg - 1:
                    continue

                # Check if it has a short qualifier to replace
                has_short_qual = any(current.endswith(sq) for sq in SHORT_QUALS)
                if has_short_qual:
                    # Remove old short qualifier and append long one
                    for sq in SHORT_QUALS:
                        if current.endswith(sq):
                            base = current[:-len(sq)].rstrip(', ')
                            new_opts[idx] = base + " " + replacement
                            changed = True
                            break
                elif current_wc < needed_avg - 1:
                    # No qualifier yet — add the long one
                    new_opts[idx] = current + " " + replacement
                    changed = True

            if not changed or new_opts == list(opts):
                i += 1; continue

            # Apply
            file_changed = False
            for idx in range(4):
                if new_opts[idx] != opts[idx]:
                    old_q = '"' + opts[idx] + '"'
                    new_q = '"' + new_opts[idx] + '"'
                    blk = '\n'.join(result[opt_start:opt_end+1])
                    if old_q in blk:
                        nb = blk.replace(old_q, new_q, 1)
                        if nb != blk:
                            nb_lines = nb.split('\n')
                            result[opt_start:opt_end+1] = nb_lines
                            opt_end = opt_start + len(nb_lines) - 1
                            file_changed = True
            if file_changed:
                fixes += 1
        i += 1

    if fixes:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write('\n'.join(result))
    return fixes

total = 0
for fname in REPLACEMENTS:
    fpath = os.path.join(BASE, fname)
    if not os.path.exists(fpath): continue
    f = fix_file(fpath, fname)
    if f: print(f"  {fname}: {f}")
    total += f

print(f"\nFinal pass: {total}")
