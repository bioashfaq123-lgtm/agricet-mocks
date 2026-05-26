"""
Fix long-option bias in question files.
Strategy:
1. Skip AR (Assertion-Reason) questions - length disparity is inherent to format
2. For biased non-AR questions:
   a. Trim parenthetical lists from correct option: "5 categories (A, B, C, D)" → "5 categories"
   b. Trim everything after " – " dash qualifiers
   c. Expand very short distractors (1-2 words) with subject-neutral phrases
3. Only modify when it genuinely fixes the bias
"""
import sys, os, re, glob, json
sys.stdout.reconfigure(encoding='utf-8')

BASE = r"C:\Users\bioas\Agricet Mock Test Series\src\data\questions"

AR_OPTS = [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true",
]

def is_ar_question(opts):
    """Returns True if this is an Assertion-Reason question."""
    count = sum(1 for o in opts if any(ar.lower() in o.lower() for ar in ["both a and r", "a is true", "a is false", "r is true", "r is false"]))
    return count >= 2

def word_count(s):
    return len(s.split())

def is_biased(opts, correct_idx, threshold=1.5, min_diff=3):
    correct_len = word_count(opts[correct_idx])
    distractor_lens = [word_count(opts[i]) for i in range(4) if i != correct_idx]
    avg_dist = sum(distractor_lens) / len(distractor_lens)
    return correct_len > avg_dist * threshold and correct_len - avg_dist > min_diff, avg_dist

def trim_parenthetical(s):
    """Remove trailing parenthetical: 'X (A, B, C, D)' → 'X'"""
    # Remove parenthetical that contains commas (it's a list)
    m = re.match(r'^(.*?)\s*\([^)]+,[^)]+\)\s*$', s)
    if m:
        trimmed = m.group(1).strip()
        if trimmed and len(trimmed) >= 3:
            return trimmed
    return s

def trim_after_dash(s):
    """Remove explanatory tail after em-dash or colon+space: 'X: blah blah' → 'X'"""
    for sep in [' – ', ' — ', ' - ']:
        if sep in s:
            head = s.split(sep)[0].strip()
            if head and len(head.split()) >= 3:
                return head
    return s

def trim_after_comma_qualifier(s):
    """Remove 'i.e., ...' or ', which ...' tails."""
    for pat in [r',\s*i\.e\.,.*$', r',\s*which\s.*$', r',\s*meaning\s.*$', r'\s*\(i\.e\.,.*\)$']:
        trimmed = re.sub(pat, '', s, flags=re.IGNORECASE).strip()
        if trimmed and len(trimmed.split()) >= 2:
            s = trimmed
    return s

def shorten_correct_option(opt, target_words):
    """Try to shorten option to be closer to target_words."""
    # Try each trimming method in order
    methods = [trim_parenthetical, trim_after_dash, trim_after_comma_qualifier]
    best = opt
    for method in methods:
        candidate = method(opt)
        if candidate != opt:
            # Is this shorter and still meaningful?
            if word_count(candidate) <= word_count(best) and word_count(candidate) >= max(3, target_words - 2):
                best = candidate
    return best

def parse_and_fix_file(fpath):
    with open(fpath, encoding='utf-8') as f:
        content = f.read()

    lines = content.split('\n')
    result = []
    fixes = 0
    skipped_ar = 0

    i = 0
    # We'll process by collecting each question block
    # Find questions by scanning for 'options: [' pattern
    # Simpler: process line by line, track state

    # Parse all questions from content
    q_pattern = re.compile(
        r'(  \{[^{}]*?id:\s*"([^"]+)"[^{}]*?options:\s*\[([^\]]+)\][^{}]*?correct:\s*(\d+)[^{}]*?\})',
        re.DOTALL
    )

    def fix_question_block(block):
        nonlocal fixes, skipped_ar
        # Extract components
        id_m = re.search(r'id:\s*"([^"]+)"', block)
        opts_m = re.search(r'options:\s*\[([^\]]+)\]', block, re.DOTALL)
        corr_m = re.search(r'correct:\s*(\d+)', block)

        if not id_m or not opts_m or not corr_m:
            return block

        qid = id_m.group(1)
        opts_raw = opts_m.group(1)
        correct = int(corr_m.group(1))

        opts = re.findall(r'"((?:[^"\\]|\\.)*)"', opts_raw)
        if len(opts) != 4 or not (0 <= correct <= 3):
            return block

        # Skip AR questions
        if is_ar_question(opts):
            skipped_ar += 1
            return block

        biased, avg_dist = is_biased(opts, correct)
        if not biased:
            return block

        # Try to shorten the correct option
        target = int(avg_dist) + 2  # allow 2 words above average
        new_correct = shorten_correct_option(opts[correct], target)

        if new_correct == opts[correct]:
            return block  # couldn't fix

        # Verify the fix actually helps
        new_opts = list(opts)
        new_opts[correct] = new_correct
        still_biased, _ = is_biased(new_opts, correct)

        if still_biased:
            return block  # still biased after fix, don't change

        # Make the replacement in the block
        # Escape the old option for regex
        old_opt_escaped = re.escape(opts[correct])
        new_block = re.sub(
            r'"' + old_opt_escaped + r'"',
            '"' + new_correct.replace('\\', '\\\\') + '"',
            block
        )

        if new_block != block:
            fixes += 1
            return new_block

        return block

    # Process the file using regex substitution
    new_content = q_pattern.sub(lambda m: fix_question_block(m.group(0)), content)

    if fixes:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(new_content)

    return fixes, skipped_ar


TARGET_FILES = [
    "da-263.ts", "da-263-lectures.ts",
    "da-281.ts", "da-281-lectures.ts",
    "da-282.ts", "da-282-lectures.ts",
    "da-291.ts", "da-291-lectures.ts",
    "da-262.ts", "da-262-lectures.ts",
    "da-201.ts", "da-201-lectures.ts",
    "da-241.ts", "da-241-lectures.ts",
    "da-252.ts", "da-252-lectures.ts",
    "da-101.ts", "da-102.ts", "da-111.ts",
    "da-121.ts", "da-122.ts",
    "da-131.ts", "da-132.ts",
    "da-151.ts", "da-171.ts",
]

total_fixes = 0
total_skipped_ar = 0
for fname in TARGET_FILES:
    fpath = os.path.join(BASE, fname)
    if not os.path.exists(fpath):
        continue
    fixes, skipped_ar = parse_and_fix_file(fpath)
    if fixes or skipped_ar:
        print(f"  {fname}: {fixes} fixed, {skipped_ar} AR skipped")
    total_fixes += fixes
    total_skipped_ar += skipped_ar

print(f"\nTotal: {total_fixes} options shortened, {total_skipped_ar} AR questions skipped")
print("\nRunning bias analysis after fix...")
