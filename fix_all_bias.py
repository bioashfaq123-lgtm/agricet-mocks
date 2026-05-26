"""
Fix option length bias in ALL files:
1. Old legacy files (agronomy.ts, biochemistry.ts, etc.) - run distractor expansion
2. DA-132 and other files with very long correct answers - trim after natural break points
"""
import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')

BASE = r"C:\Users\bioas\Agricet Mock Test Series\src\data\questions"

AR_MARKERS = ["both a and r", "a is true", "a is false", "r is true", "r is false"]

def is_ar_question(opts):
    count = sum(1 for o in opts if any(m in o.lower() for m in AR_MARKERS))
    return count >= 2

def word_count(s):
    return len(s.split())

def is_biased(opts, correct_idx, threshold=1.5, min_diff=3):
    correct_len = word_count(opts[correct_idx])
    distractor_lens = [word_count(opts[i]) for i in range(4) if i != correct_idx]
    avg_dist = sum(distractor_lens) / len(distractor_lens)
    return correct_len > avg_dist * threshold and correct_len - avg_dist > min_diff, avg_dist

# ─── Topic qualifiers for legacy files ──────────────────────────────────────
LEGACY_QUALIFIERS = {
    "agronomy.ts":            ["in crop production", "in agronomy", "under field conditions", "in cereal crops", "for field crops"],
    "agronomy2.ts":           ["in crop production", "in agronomy", "under field conditions", "for kharif crops", "in dryland farming"],
    "biochemistry.ts":        ["in plant metabolism", "in biochemical reactions", "in crop physiology", "under aerobic conditions", "in plant cells"],
    "computer-applications.ts":["in computer systems", "for office applications", "in data processing", "for digital operations", "in software use"],
    "crop-physiology.ts":     ["in plant growth", "in crop physiology", "during germination", "in photosynthesis", "under field conditions"],
    "economics.ts":           ["in agricultural markets", "in farm economics", "for price analysis", "in rural economy", "under market conditions"],
    "english-communication.ts":["in formal communication", "in academic writing", "in language use", "for effective speaking", "in written English"],
    "entomology.ts":          ["in pest management", "in crop protection", "for field crops", "in entomology", "under field conditions"],
    "extension.ts":           ["in extension education", "in rural development", "for farming communities", "under this programme", "in agricultural extension"],
    "farm-machinery.ts":      ["in farm operations", "for tractor operation", "in agricultural machinery", "under field conditions", "for soil tillage"],
    "general-agriculture.ts": ["in agriculture", "in crop production", "under Indian conditions", "for farmers", "in the field"],
    "genetics.ts":            ["in plant genetics", "in heredity studies", "for crop improvement", "in genetic analysis", "under Mendelian genetics"],
    "horticulture.ts":        ["in horticulture", "for fruit crops", "in orchard management", "under nursery conditions", "for vegetable crops"],
    "irrigation.ts":          ["in irrigation management", "for water application", "under field conditions", "in water use efficiency", "for crop water needs"],
    "meteorology.ts":         ["in agricultural meteorology", "under atmospheric conditions", "in weather analysis", "for crop planning", "in climate studies"],
    "plant-pathology.ts":     ["in plant pathology", "in disease management", "for crop protection", "under field conditions", "in disease identification"],
    "seed-technology.ts":     ["in seed technology", "for seed quality", "in seed processing", "under storage conditions", "for seed certification"],
    "soil-science.ts":        ["in soil science", "for soil management", "in soil fertility", "under tropical conditions", "in soil analysis"],
    # DA files — already partially fixed, use same qualifiers
    "da-101-lectures.ts":     ["in agronomy", "under field conditions", "for crop production", "in cereal crops", "during the crop season"],
    "da-102-lectures.ts":     ["in agricultural meteorology", "under atmospheric conditions", "in weather analysis", "for crop planning", "in climate studies"],
    "da-121-lectures.ts":     ["in soil science", "for soil management", "in soil fertility", "under tropical conditions", "in soil analysis"],
    "da-122-lectures.ts":     ["in soil science", "for soil management", "in soil fertility", "under tropical conditions", "in soil analysis"],
    "da-131-lectures.ts":     ["in entomology", "in crop protection", "for field crops", "under pest pressure", "in pest management"],
    "da-131.ts":              ["in entomology", "in crop protection", "for field crops", "under pest pressure", "in pest management"],
    "da-132-lectures.ts":     ["in pest management", "in crop protection", "for field crops", "under field conditions", "in integrated pest management"],
    "da-132.ts":              ["in pest management", "in crop protection", "for field crops", "under field conditions", "in integrated pest management"],
    "da-151-lectures.ts":     ["in plant breeding", "for crop improvement", "in variety development", "under selection pressure", "in genetics"],
    "da-171-lectures.ts":     ["in plant pathology", "in disease management", "for crop protection", "under field conditions", "in disease identification"],
    "da-171.ts":              ["in plant pathology", "in disease management", "for crop protection", "under field conditions", "in disease identification"],
}

def get_qualifier(topic_qualifiers, idx):
    return topic_qualifiers[idx % len(topic_qualifiers)]

# ─── Trim very long correct answers ─────────────────────────────────────────
def trim_long_correct(opt, target_words):
    """Try to shorten a very long correct answer to target_words.
    Only trim after natural break points (dash, parenthesis, 'and also', etc.)
    while keeping the core fact."""
    words = opt.split()
    if len(words) <= target_words + 2:
        return opt

    # Try to cut at natural break points
    # Pattern 1: "X — detailed explanation" → "X"
    for sep in [' — ', ' – ', ' - ']:
        if sep in opt:
            head = opt.split(sep)[0].strip()
            if word_count(head) >= 5 and word_count(head) <= target_words + 2:
                return head

    # Pattern 2: "X, Y and Z (extra details)" → trim parenthetical
    m = re.match(r'^(.*?)\s*\([^)]+\)\s*$', opt)
    if m:
        head = m.group(1).strip()
        if 5 <= word_count(head) <= target_words + 3:
            return head

    # Pattern 3: Trim after a comma if resulting text is sensible length
    parts = opt.split(', ')
    if len(parts) >= 3:
        # Try first two parts
        candidate = ', '.join(parts[:2])
        if 5 <= word_count(candidate) <= target_words + 3:
            return candidate

    # Pattern 4: Hard trim to target_words at last word boundary
    if len(words) > target_words + 5:
        # Try to find a good cutoff point
        trimmed = ' '.join(words[:target_words])
        # Don't end with a preposition or article
        avoid_endings = {'in', 'of', 'the', 'a', 'an', 'and', 'or', 'by', 'to', 'at', 'on', 'for', 'with', 'from'}
        while trimmed.split()[-1].lower() in avoid_endings and len(trimmed.split()) > 5:
            trimmed = ' '.join(trimmed.split()[:-1])
        return trimmed

    return opt

def fix_file(fpath, fname):
    """Fix biased questions: expand short distractors AND trim very long correct answers."""
    topic_qualifiers = LEGACY_QUALIFIERS.get(fname, ["in agriculture", "under field conditions", "for crop production", "in farming", "under standard conditions"])

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
            opt_end = -1
            opt_start = -1
            while j >= max(0, i - 30):
                if ']' in lines[j] and opt_end == -1:
                    opt_end = j
                if 'options:' in lines[j]:
                    opt_start = j
                    break
                j -= 1

            if opt_start == -1 or opt_end == -1:
                i += 1
                continue

            opts_block = '\n'.join(lines[opt_start:opt_end+1])
            opts = re.findall(r'"((?:[^"\\]|\\.)*)"', opts_block)

            if len(opts) != 4 or not (0 <= correct_idx <= 3):
                i += 1
                continue

            if is_ar_question(opts):
                i += 1
                continue

            biased, avg_dist = is_biased(opts, correct_idx)
            if not biased:
                i += 1
                continue

            correct_len = word_count(opts[correct_idx])
            new_opts = list(opts)

            # Strategy 1: Expand short distractors
            target = int(avg_dist + (correct_len - avg_dist) * 0.6)
            target = min(target, correct_len - 1)

            qualifier_counter = 0
            for idx in range(4):
                if idx == correct_idx:
                    continue
                dist_words = word_count(new_opts[idx])
                # Skip if already has a good qualifier (ends with known suffix)
                already_qualified = any(new_opts[idx].endswith(q) for q in topic_qualifiers)
                if dist_words < target - 1 and not already_qualified:
                    qual = get_qualifier(topic_qualifiers, qualifier_counter)
                    new_opts[idx] = new_opts[idx] + " " + qual
                    qualifier_counter += 1

            # Strategy 2: If still biased after expanding distractors, trim correct answer
            still_biased, _ = is_biased(new_opts, correct_idx)
            if still_biased and correct_len > 14:
                avg_dist_new = sum(word_count(new_opts[k]) for k in range(4) if k != correct_idx) / 3
                target_trim = int(avg_dist_new * 1.3)
                target_trim = max(8, min(target_trim, correct_len - 3))
                trimmed = trim_long_correct(new_opts[correct_idx], target_trim)
                if trimmed != new_opts[correct_idx] and word_count(trimmed) >= 6:
                    new_opts[correct_idx] = trimmed

            if new_opts == list(opts):
                i += 1
                continue

            # Verify improvement
            new_biased, _ = is_biased(new_opts, correct_idx)
            if new_biased and new_opts == list(opts):
                i += 1
                continue

            # Apply changes to file
            changed = False
            for idx in range(4):
                if new_opts[idx] != opts[idx]:
                    old_quoted = '"' + opts[idx] + '"'
                    new_quoted = '"' + new_opts[idx] + '"'
                    block_text = '\n'.join(result[opt_start:opt_end+1])
                    if old_quoted in block_text:
                        new_block_text = block_text.replace(old_quoted, new_quoted, 1)
                        if new_block_text != block_text:
                            new_block_lines = new_block_text.split('\n')
                            result[opt_start:opt_end+1] = new_block_lines
                            opt_end = opt_start + len(new_block_lines) - 1
                            changed = True

            if changed:
                fixes += 1

        i += 1

    if fixes:
        new_content = '\n'.join(result)
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(new_content)

    return fixes

# ─── All files to fix ────────────────────────────────────────────────────────
ALL_FILES = [f for f in os.listdir(BASE) if f.endswith('.ts') and f != 'index.ts']

total_fixes = 0
for fname in sorted(ALL_FILES):
    fpath = os.path.join(BASE, fname)
    fixes = fix_file(fpath, fname)
    if fixes:
        print(f"  {fname}: {fixes} questions improved")
    total_fixes += fixes

print(f"\nTotal: {total_fixes} questions improved")
