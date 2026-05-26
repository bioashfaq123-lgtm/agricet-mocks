import re, sys

# Target distribution: index sequence that yields 25 each per 100 questions
TARGET = [0, 2, 1, 3]  # A, C, B, D repeating

files = [
    r"src\data\questions\da-101.ts",
    r"src\data\questions\da-111.ts",
    r"src\data\questions\da-122.ts",
    r"src\data\questions\da-281.ts",
]

# Single-line format: options:[...], correct:N,
# Example: options:["a","b","c","d"], correct:1,
PATTERN = re.compile(
    r'([ \t]*options:\s*\[)(.*?)(\],\s*correct:\s*)([0-3])(,)',
    re.DOTALL
)

def rotate_options(opts_str, correct_idx, new_correct_idx):
    """Parse options array string, rotate so correct answer moves to new_correct_idx."""
    # Parse the options - handle quoted strings with possible commas inside
    items = []
    depth = 0
    current = ""
    in_string = False
    escape = False
    quote_char = None

    for ch in opts_str:
        if escape:
            current += ch
            escape = False
            continue
        if ch == '\\':
            current += ch
            escape = True
            continue
        if in_string:
            current += ch
            if ch == quote_char:
                in_string = False
        else:
            if ch in ('"', "'"):
                in_string = True
                quote_char = ch
                current += ch
            elif ch == ',':
                items.append(current.strip())
                current = ""
            else:
                current += ch
    if current.strip():
        items.append(current.strip())

    if len(items) != 4:
        return None, None

    correct_text = items[correct_idx]
    # Remove correct from list, insert at new position
    new_items = items[:]
    new_items.pop(correct_idx)
    new_items.insert(new_correct_idx, correct_text)

    return ", ".join(new_items), new_correct_idx


def fix_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    q_index = 0
    changes = 0
    distribution = [0, 0, 0, 0]

    def replacer(m):
        nonlocal q_index, changes
        prefix = m.group(1)
        opts_str = m.group(2)
        mid = m.group(3)
        correct_str = m.group(4)
        suffix = m.group(5)

        current_correct = int(correct_str)
        target_correct = TARGET[q_index % len(TARGET)]
        q_index += 1

        distribution[current_correct] += 1

        if current_correct == target_correct:
            return m.group(0)

        new_opts_str, new_correct = rotate_options(opts_str, current_correct, target_correct)
        if new_opts_str is None:
            return m.group(0)

        changes += 1
        return prefix + new_opts_str + mid + str(new_correct) + suffix

    new_content = PATTERN.sub(replacer, content)

    print(f"\n{filepath}")
    print(f"  Questions found: {q_index}")
    print(f"  Original distribution: A={distribution[0]} B={distribution[1]} C={distribution[2]} D={distribution[3]}")

    if changes > 0:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"  Changes made: {changes}")

        # Verify new distribution
        new_dist = [0, 0, 0, 0]
        for i, m in enumerate(PATTERN.finditer(new_content)):
            new_dist[int(m.group(4))] += 1
        print(f"  New distribution:      A={new_dist[0]} B={new_dist[1]} C={new_dist[2]} D={new_dist[3]}")
    else:
        print(f"  No changes needed (already balanced or pattern not found)")

for f in files:
    fix_file(f)

print("\nDone!")
