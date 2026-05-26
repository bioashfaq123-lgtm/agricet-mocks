"""
Fix short-distractor bias in question files.
For each biased question (correct answer significantly longer than distractors),
expand short distractors (≤4 words) by appending topic-relevant qualifiers.
This makes options more similar in length without changing their correctness.
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

# Subject-specific context qualifiers - tuned per file type
CONTEXT_QUALIFIERS = {
    # Extension education / rural development
    "extension": [
        "in extension education",
        "in rural development programmes",
        "under this extension approach",
        "for rural communities only",
        "in the farming context",
    ],
    # Agricultural economics
    "economics": [
        "in the agricultural economy",
        "in rural economic context",
        "for farm income analysis",
        "in agricultural planning",
        "under farm management",
    ],
    # Computer applications
    "computer": [
        "for general office use",
        "in basic computer operations",
        "for data management only",
        "in office software suite",
        "for document processing only",
    ],
    # English communication
    "english": [
        "in everyday communication",
        "in formal language use",
        "for language development",
        "in academic writing context",
        "in oral communication only",
    ],
    # General agriculture / agronomy
    "agriculture": [
        "in crop production",
        "in field conditions",
        "for agricultural purposes",
        "under farming conditions",
        "in the field context",
    ],
    # Horticulture
    "horticulture": [
        "in horticultural practices",
        "for vegetable cultivation",
        "in orchard management",
        "under nursery conditions",
        "for fruit crops",
    ],
    # Soil / biochemistry
    "soil": [
        "in soil management",
        "under field conditions",
        "for soil fertility",
        "in plant nutrition",
        "under tropical conditions",
    ],
}

FILE_TOPIC = {
    "da-291.ts": "extension", "da-291-lectures.ts": "extension",
    "da-201.ts": "agriculture", "da-201-lectures.ts": "agriculture",
    "da-241.ts": "economics", "da-241-lectures.ts": "economics",
    "da-252.ts": "soil", "da-252-lectures.ts": "soil",
    "da-262.ts": "computer", "da-262-lectures.ts": "computer",
    "da-263.ts": "english", "da-263-lectures.ts": "english",
    "da-281.ts": "horticulture", "da-281-lectures.ts": "horticulture",
    "da-282.ts": "horticulture", "da-282-lectures.ts": "horticulture",
    "da-101.ts": "agriculture", "da-102.ts": "agriculture",
    "da-111.ts": "agriculture", "da-121.ts": "agriculture", "da-122.ts": "agriculture",
    "da-131.ts": "agriculture", "da-132.ts": "agriculture",
    "da-151.ts": "agriculture", "da-171.ts": "agriculture",
}

def get_qualifier(opt, topic, qualifier_idx):
    """Get an appropriate qualifier for expanding a short distractor."""
    quals = CONTEXT_QUALIFIERS.get(topic, CONTEXT_QUALIFIERS["agriculture"])
    return quals[qualifier_idx % len(quals)]

def expand_distractor(opt, topic, target_words, qualifier_idx):
    """Expand a short distractor to be closer to target_words."""
    current_words = word_count(opt)
    if current_words >= target_words:
        return opt  # already long enough

    # Don't expand if it would make it too long
    if current_words > target_words:
        return opt

    # Add qualifier
    qualifier = get_qualifier(opt, topic, qualifier_idx)
    expanded = opt + " " + qualifier

    # Don't expand beyond target + 2
    if word_count(expanded) > target_words + 2:
        # Use shorter qualifier
        short_quals = ["only", "as well", "primarily"]
        for sq in short_quals:
            candidate = opt + " " + sq
            if word_count(candidate) <= target_words + 1:
                return candidate
        return opt  # can't find good expansion

    return expanded

def fix_file(fpath, fname):
    """Fix biased questions in a file by expanding short distractors."""
    topic = FILE_TOPIC.get(fname, "agriculture")

    with open(fpath, encoding='utf-8') as f:
        content = f.read()

    lines = content.split('\n')
    result = list(lines)
    fixes = 0

    # Process question by question
    # Find each options: [...] block and the correct: N value
    # Pattern: find the full option string in a line and replace it
    i = 0
    while i < len(lines):
        line = lines[i]

        # Look for 'correct: N' to identify question boundaries
        if re.search(r'^\s*correct:\s*\d+', line):
            correct_idx = int(re.search(r'correct:\s*(\d+)', line).group(1))

            # Look backwards for the options block
            # Find the 'options: [' line above
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

            # Extract the options block (could span multiple lines)
            opts_block = '\n'.join(lines[opt_start:opt_end+1])
            opts = re.findall(r'"((?:[^"\\]|\\.)*)"', opts_block)

            if len(opts) != 4 or not (0 <= correct_idx <= 3):
                i += 1
                continue

            # Skip AR questions
            if is_ar_question(opts):
                i += 1
                continue

            # Check if biased
            biased, avg_dist = is_biased(opts, correct_idx)
            if not biased:
                i += 1
                continue

            # Find the correct length and target
            correct_len = word_count(opts[correct_idx])
            # Target: each distractor should be at least avg_dist + (correct_len - avg_dist) * 0.5
            target = int(avg_dist + (correct_len - avg_dist) * 0.6)
            target = min(target, correct_len - 1)  # don't exceed correct length

            # Expand short distractors
            new_opts = list(opts)
            qualifier_counter = 0
            for idx in range(4):
                if idx == correct_idx:
                    continue
                if word_count(new_opts[idx]) < target - 1:
                    expanded = expand_distractor(new_opts[idx], topic, target, qualifier_counter)
                    qualifier_counter += 1
                    if expanded != new_opts[idx]:
                        new_opts[idx] = expanded

            # Check if we fixed the bias
            still_biased, _ = is_biased(new_opts, correct_idx)
            if still_biased and all(new_opts[k] == opts[k] for k in range(4) if k != correct_idx):
                i += 1
                continue

            # If options changed, apply to the content
            if new_opts != list(opts):
                # Replace each changed option in the file content
                changed = False
                for idx in range(4):
                    if new_opts[idx] != opts[idx]:
                        old_quoted = '"' + opts[idx] + '"'
                        new_quoted = '"' + new_opts[idx] + '"'
                        # Only replace the first occurrence (within this options block)
                        # To be safe, replace in the options block region
                        block_text = '\n'.join(result[opt_start:opt_end+1])
                        if old_quoted in block_text:
                            new_block_text = block_text.replace(old_quoted, new_quoted, 1)
                            if new_block_text != block_text:
                                new_block_lines = new_block_text.split('\n')
                                result[opt_start:opt_end+1] = new_block_lines
                                # Recalculate opt_end since block length may have changed
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


TARGET_FILES = [
    "da-291.ts", "da-291-lectures.ts",
    "da-241.ts", "da-241-lectures.ts",
    "da-252.ts", "da-252-lectures.ts",
    "da-262.ts", "da-262-lectures.ts",
    "da-263.ts", "da-263-lectures.ts",
    "da-281.ts", "da-281-lectures.ts",
    "da-282.ts", "da-282-lectures.ts",
    "da-201.ts", "da-201-lectures.ts",
    "da-101.ts", "da-102.ts", "da-111.ts",
    "da-121.ts", "da-122.ts",
    "da-131.ts", "da-132.ts",
    "da-151.ts", "da-171.ts",
]

total_fixes = 0
for fname in TARGET_FILES:
    fpath = os.path.join(BASE, fname)
    if not os.path.exists(fpath):
        continue
    fixes = fix_file(fpath, fname)
    if fixes:
        print(f"  {fname}: {fixes} questions fixed")
    total_fixes += fixes

print(f"\nTotal: {total_fixes} questions improved")
print("\nRunning final bias analysis...")
