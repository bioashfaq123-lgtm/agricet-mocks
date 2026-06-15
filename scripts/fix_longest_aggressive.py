"""
Aggressive fix for "longest option = correct" bias.
Handles patterns the basic scripts missed:

1. Correct has "(Abbreviation)" paren at end while wrong options are abbreviations
   e.g. "PM Krishi Sinchai Yojana (PMKSY)" vs "NHM","RKVY","NMSA"
   → Remove the abbreviation expansion from correct answer

2. Correct answer lists crops/items separated by commas but wrong options are single items
   e.g. "Rice, sorghum, sugarcane, and banana" vs "Groundnut","Wheat","Mustard"
   → Keep only the first item of the correct answer list (scientific accuracy maintained)
   BUT only if the question's correct answer's first item alone is identifiable as correct

3. Correct has a qualifier clause like "X compared to Y" or "X under high rainfall"
   → Sometimes can be shortened

4. Wrong options expanded with their full names when they are abbreviations
   Known agricultural abbreviations dictionary built in.

5. More neutral filler words for very short wrong options
"""
import re, os, sys, random
sys.stdout.reconfigure(encoding='utf-8')
random.seed(55)

DATA_DIR = r"C:\Users\bioas\Agricet Mock Test Series\src\data"

GRAND_FILES = [f'grandTest{i}.ts' for i in range(1, 11)]
AEO_FILES   = ['aeo-2016.ts','aeo-2017.ts','aeo-paper1-gs.ts','aeo-paper2-agri.ts','aeo-pyq.ts']
ALL_FILES   = GRAND_FILES + AEO_FILES

# Known abbreviation expansions (add more as needed)
ABBREV = {
    'NHM':    'National Horticulture Mission',
    'NMSA':   'National Mission for Sustainable Agriculture',
    'RKVY':   'Rashtriya Krishi Vikas Yojana',
    'ICAR':   'Indian Council of Agricultural Research',
    'NABARD': 'National Bank for Agriculture and Rural Development',
    'NITI':   'NITI Aayog (Planning Commission)',
    'APY':    'Atal Pension Yojana',
    'PMFBY':  'PM Fasal Bima Yojana',
    'PMKSY':  'PM Krishi Sinchai Yojana',
    'FCI':    'Food Corporation of India',
    'NAFED':  'National Agricultural Cooperative Marketing Federation',
    'NFSM':   'National Food Security Mission',
    'ATMA':   'Agricultural Technology Management Agency',
    'KVK':    'Krishi Vigyan Kendra',
    'SAU':    'State Agricultural University',
    'DARE':   'Department of Agricultural Research and Education',
    'CAZRI':  'Central Arid Zone Research Institute',
    'CRRI':   'Central Rice Research Institute',
    'CIMMYT': 'International Maize and Wheat Improvement Centre',
    'IRRI':   'International Rice Research Institute',
    'FAO':    'Food and Agriculture Organization',
    'CGIAR':  'Consultative Group on International Agricultural Research',
    'GI':     'Geographical Indication',
    'IPM':    'Integrated Pest Management',
    'INM':    'Integrated Nutrient Management',
    'IWM':    'Integrated Weed Management',
    'SRI':    'System of Rice Intensification',
    'FIRB':   'Furrow Irrigated Raised Bed planting',
    'ZT':     'Zero Tillage farming system',
    'CT':     'Conventional Tillage',
    'CA':     'Conservation Agriculture',
    'DAP':    'Di-Ammonium Phosphate fertilizer',
    'MOP':    'Muriate of Potash fertilizer',
    'SOP':    'Sulphate of Potash fertilizer',
    'SSP':    'Single Super Phosphate fertilizer',
    'TSP':    'Triple Super Phosphate fertilizer',
    'NP':     'Nitrogen-Phosphorus compound fertilizer',
    'NPK':    'Nitrogen-Phosphorus-Potassium compound fertilizer',
}

EXTRA_FILLERS = [
    " application", " method", " treatment", " condition",
    " process", " technique", " practice", " stage",
    " form", " system", " approach"
]

def parse_questions(content):
    results = []
    opt_re   = re.compile(r'options:\s*\[([^\]]+)\]')
    corr_re  = re.compile(r'correct:\s*(\d)')
    corr_all = list(corr_re.finditer(content))
    for om in opt_re.finditer(content):
        opts = re.findall(r'"((?:[^"\\]|\\.)*)"', om.group(1))
        if len(opts) != 4: continue
        cm = next((c for c in corr_all if c.start() > om.end()), None)
        if not cm: continue
        results.append({
            'opts_start': om.start(), 'opts_end': om.end(),
            'opts': opts, 'corr_start': cm.start(),
            'corr_end': cm.end(), 'corr': int(cm.group(1)),
        })
    return results

def ratio_of(correct_len, opts, c):
    others_max = max(len(o) for j, o in enumerate(opts) if j != c)
    return correct_len / max(others_max, 1)

def try_fix(opts, c):
    """
    Try multiple strategies to reduce the length advantage of correct option.
    Returns new_opts if fixed, None otherwise.
    """
    correct = opts[c]
    others  = [o for j, o in enumerate(opts) if j != c]
    others_max_len = max(len(o) for o in others)
    ratio = len(correct) / max(others_max_len, 1)
    if ratio <= 1.15:
        return None  # Already fine

    new_opts = list(opts)

    # ── Strategy 1: Expand abbreviation wrong options ──────────────────────
    expanded = False
    for j, opt in enumerate(new_opts):
        if j == c: continue
        stripped_opt = opt.strip().rstrip('.')
        # Check if it's a known abbreviation
        if stripped_opt.upper() in ABBREV and len(opt) <= 8:
            new_opts[j] = ABBREV[stripped_opt.upper()]
            expanded = True
    if expanded:
        new_others_max = max(len(new_opts[j]) for j in range(4) if j != c)
        new_ratio = len(correct) / max(new_others_max, 1)
        if new_ratio <= 1.15:
            return new_opts
        # Even after expanding, still biased — revert
        new_opts = list(opts)

    # ── Strategy 2: Strip trailing parenthetical from correct, more aggressively ──
    # Try stripping anything in parens at end
    t = re.sub(r'\s*\([^)]+\)\s*$', '', correct).strip()
    if t and t != correct and len(t) >= 5:
        new_r = len(t) / max(others_max_len, 1)
        if new_r <= 1.15:
            new_opts2 = list(opts)
            new_opts2[c] = t
            return new_opts2

    # ── Strategy 3: Truncate after first comma (for multi-item lists) ──────
    # e.g. "Rice, sorghum, sugarcane, and banana" → "Rice, sorghum, and others"
    # Only if there are 3+ items listed
    parts = re.split(r',\s*', correct)
    if len(parts) >= 3:
        # Use first two items + "etc."
        short = parts[0] + ' and ' + parts[1].replace(' and ', '').strip() + ', etc.'
        if len(short) < len(correct) * 0.7:
            new_r = len(short) / max(others_max_len, 1)
            if new_r <= 1.15:
                new_opts2 = list(opts)
                new_opts2[c] = short
                return new_opts2

    # ── Strategy 4: More aggressive expand of short wrong options ──────────
    new_opts = list(opts)
    changed = False
    for j, opt in enumerate(new_opts):
        if j == c: continue
        words = opt.split()
        if len(opt) <= 20 and len(words) <= 3:
            # Try different fillers until ratio drops
            for filler in EXTRA_FILLERS + [" crop", " variety", " species", " only", " type"]:
                candidate = opt + filler
                if len(candidate) <= len(correct) * 0.85:
                    new_opts[j] = candidate
                    changed = True
                    break
    if changed:
        new_others_max = max(len(new_opts[j]) for j in range(4) if j != c)
        new_ratio = len(correct) / max(new_others_max, 1)
        if new_ratio <= 1.15:
            return new_opts

    return None

# ── Process all files ──────────────────────────────────────────────────────
total_fixed = 0

for fname in ALL_FILES:
    fpath = os.path.join(DATA_DIR, fname)
    if not os.path.exists(fpath):
        print(f'SKIP: {fname}')
        continue

    content = open(fpath, encoding='utf-8').read()
    questions = parse_questions(content)

    fixes = []
    for q in questions:
        opts = q['opts']
        c = q['corr']
        if c > 3: continue
        others_max = max(len(o) for j, o in enumerate(opts) if j != c)
        if len(opts[c]) <= others_max:
            continue  # correct is not the longest

        new_opts = try_fix(opts, c)
        if new_opts is None:
            continue

        opts_inner = ', '.join(f'"{o}"' for o in new_opts)
        fixes.append({'start': q['opts_start'], 'end': q['opts_end'],
                      'replacement': f'options: [{opts_inner}]'})

    fixes.sort(key=lambda x: x['start'], reverse=True)
    for fix in fixes:
        content = content[:fix['start']] + fix['replacement'] + content[fix['end']:]

    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(content)

    total_fixed += len(fixes)
    print(f'{fname}: fixed {len(fixes)} more questions')

print(f'\nTotal additional fixes: {total_fixed}')
