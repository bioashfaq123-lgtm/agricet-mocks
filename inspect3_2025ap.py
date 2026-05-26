import fitz

doc = fitz.open(r'D:\Desktop\Previous agricet papers\AGRICET2025_DA_QP.pdf')

# Check page 2 block structure
page = doc[1]
print("=== PAGE 2 BLOCKS ===")
blocks = page.get_text('dict')['blocks']
for b in blocks:
    btype = b.get('type')
    if btype == 1:  # image block
        print(f"  IMAGE block at {b['bbox']}, size {b.get('width')}x{b.get('height')}, ext={b.get('ext')}")
    elif btype == 0:  # text block
        text = ' '.join(s['text'] for l in b['lines'] for s in l['spans'])
        print(f"  TEXT block: {repr(text[:100])}")

# Try extracting images from page 2
print("\n=== IMAGES IN PAGE 2 ===")
imgs = page.get_images()
for img in imgs:
    print(f"  xref={img[0]}, name={img[7]}")

# Extract all correct answers by scanning color-coded option numbers
print("\n=== EXTRACTING ALL CORRECT ANSWERS ===")
correct_answers = {}  # question_num -> option_index (0-based)
current_q = None
option_colors = {}  # option_num -> color

for pg_idx in range(1, len(doc)):
    page = doc[pg_idx]
    blocks = page.get_text('dict')['blocks']
    for b in blocks:
        if b.get('type') == 0:
            for line in b['lines']:
                for span in line['spans']:
                    txt = span['text'].strip()
                    color = span.get('color', 0)
                    r = (color >> 16) & 0xFF
                    g = (color >> 8) & 0xFF
                    bl = color & 0xFF

                    # Detect question header
                    if txt.startswith('Question Number :'):
                        import re
                        m = re.search(r'Question Number\s*:\s*(\d+)', txt)
                        if m:
                            # Save previous question's answer
                            if current_q is not None and option_colors:
                                for opt_num, (or_, og, ob) in option_colors.items():
                                    if og == 128 and or_ == 0 and ob == 0:  # green
                                        correct_answers[current_q] = opt_num - 1  # 0-indexed
                                        break
                            current_q = int(m.group(1))
                            option_colors = {}

                    # Detect option number (1., 2., 3., 4.)
                    import re
                    m2 = re.match(r'^(\d+)\.\s*$', txt)
                    if m2:
                        opt_num = int(m2.group(1))
                        option_colors[opt_num] = (r, g, bl)

# Save last question
if current_q is not None and option_colors:
    for opt_num, (or_, og, ob) in option_colors.items():
        if og == 128 and or_ == 0 and ob == 0:
            correct_answers[current_q] = opt_num - 1
            break

doc.close()

print(f"Extracted correct answers for {len(correct_answers)} questions")
# Show first 20
for q in sorted(correct_answers.keys())[:20]:
    print(f"  Q{q}: correct option = {correct_answers[q]+1} (0-indexed: {correct_answers[q]})")

import json
with open('C:/Users/bioas/AppData/Local/Temp/ap2025_answers.json', 'w') as f:
    json.dump(correct_answers, f)
print("\nSaved answers to ap2025_answers.json")
