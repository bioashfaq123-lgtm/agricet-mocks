"""
Extract AP AGRICET 2024 from ANGRAU answer key PDF.
Format: NTA-style online exam answer key
 - Question text stored as JPEG images (wide)
 - Option text stored as JPEG images (medium)
 - Option numbers "1." "2." "3." "4." stored as colored text
   GREEN (0,128,0) = correct, RED (255,0,0) = wrong
 - Some questions span page boundaries -> current_q must persist across pages
 - Q7: ambiguous question, all options green -> set correct=-1
"""
import fitz
import easyocr
import numpy as np
import json
import re
import io
from PIL import Image

PDF_PATH    = r'D:\Desktop\Previous agricet papers\ap-agricet-agriculture-final-answer-key-2024.pdf'
OUTPUT_JSON = r'C:\Users\bioas\Agricet Mock Test Series\agricet2024ap_raw.json'

# ── helpers ───────────────────────────────────────────────────────────────────
def img_dominant(img_bytes: bytes):
    try:
        img = Image.open(io.BytesIO(img_bytes)).convert('RGB')
        arr = np.array(img, dtype=float)
        return arr[:,:,0].mean(), arr[:,:,1].mean(), arr[:,:,2].mean()
    except:
        return 128, 128, 128

def ocr_img(reader, img_bytes, scale_if_small=True):
    try:
        img = Image.open(io.BytesIO(img_bytes)).convert('RGB')
        w, h = img.size
        if scale_if_small and (w < 200 or h < 40):
            s = max(2, min(4, 300 // max(w, 1)))
            img = img.resize((w * s, h * s), Image.LANCZOS)
        arr = np.array(img)
        results = reader.readtext(arr, detail=0, paragraph=True)
        text = ' '.join(results).strip()
        return re.sub(r'\s+', ' ', text)
    except:
        return ''

# ── STEP 1: Fast pass - extract correct answers from text colors ──────────────
print("STEP 1: Extracting correct answers from text colors...")
doc = fitz.open(PDF_PATH)
print(f"PDF: {len(doc)} pages")

correct_answers = {}   # q_num -> 0-indexed correct option (-1 = ambiguous)
ambiguous_qs    = set()

current_q = None
opt_colors = {}  # opt_num(0-indexed) -> 'green'|'red'

for pg_idx in range(len(doc)):
    page = doc[pg_idx]
    blocks = page.get_text('dict')['blocks']
    # Sort by y so we process top-to-bottom
    blocks_sorted = sorted(blocks, key=lambda b: b.get('bbox', [0,0,0,9999])[1])

    for b in blocks_sorted:
        if b.get('type') != 0:
            continue
        for line in b.get('lines', []):
            for span in line.get('spans', []):
                t = span['text'].strip()
                if not t:
                    continue

                # New question header
                m = re.search(r'Question Number\s*:\s*(\d+)', t)
                if m:
                    # Save previous question before starting new one
                    if current_q is not None and opt_colors:
                        green_opts = [k for k, v in opt_colors.items() if v == 'green']
                        if len(green_opts) == 1:
                            correct_answers[current_q] = green_opts[0]
                        elif len(green_opts) == 0:
                            correct_answers[current_q] = -1
                        else:
                            correct_answers[current_q] = -1  # ambiguous
                            ambiguous_qs.add(current_q)
                    current_q = int(m.group(1))
                    opt_colors = {}
                    continue

                # Option number with color
                if re.match(r'^[1-4]\s*\.\s*$', t) or re.match(r'^[1-4]\s*$', t):
                    opt_num = int(t[0]) - 1  # 0-indexed
                    col = span.get('color', 0)
                    r2 = (col >> 16) & 0xFF
                    g2 = (col >> 8) & 0xFF
                    b2 = col & 0xFF
                    if r2 == 0 and g2 == 128 and b2 == 0:
                        opt_colors[opt_num] = 'green'
                    elif r2 == 255 and g2 == 0 and b2 == 0:
                        opt_colors[opt_num] = 'red'

# Save last question
if current_q is not None and opt_colors:
    green_opts = [k for k, v in opt_colors.items() if v == 'green']
    correct_answers[current_q] = green_opts[0] if len(green_opts) == 1 else -1
    if len(green_opts) != 1:
        ambiguous_qs.add(current_q)

# Manual override for Q7: ambiguous in key but user confirmed answer is option 3 (0-indexed: 2)
correct_answers[7] = 2
ambiguous_qs.discard(7)

print(f"Correct answers extracted: {len(correct_answers)}")
print(f"Ambiguous questions (full marks given): {sorted(ambiguous_qs)}")
missing = [q for q in range(1, 121) if q not in correct_answers]
print(f"Missing: {missing}")

# Save answers temp
with open(r'C:\Users\bioas\AppData\Local\Temp\ap2024_answers.json', 'w') as f:
    json.dump(correct_answers, f)

# ── STEP 2: OCR pass - extract question and option text ───────────────────────
print("\nSTEP 2: Loading EasyOCR...")
reader = easyocr.Reader(['en'], gpu=False, verbose=False)
print("Ready\n")

questions_data = {}   # q_num -> {question, options}
current_q = None
current_q_text = ''
current_opts = []     # list of option text strings
in_options = False

for pg_idx in range(len(doc)):
    page = doc[pg_idx]
    blocks = page.get_text('dict', flags=fitz.TEXT_PRESERVE_IMAGES)['blocks']
    blocks_sorted = sorted(blocks, key=lambda b: b.get('bbox', [0,0,0,9999])[1])

    for b in blocks_sorted:
        btype = b.get('type')

        if btype == 0:
            # Text block - detect question headers and "Options :"
            for line in b.get('lines', []):
                for span in line.get('spans', []):
                    t = span['text'].strip()
                    if not t:
                        continue
                    m = re.search(r'Question Number\s*:\s*(\d+)', t)
                    if m:
                        # Save previous question
                        if current_q is not None:
                            questions_data[current_q] = {
                                'question': current_q_text,
                                'options': current_opts[:4],
                            }
                        current_q = int(m.group(1))
                        current_q_text = ''
                        current_opts = []
                        in_options = False
                        print(f"  Q{current_q}", end=' ', flush=True)
                    elif 'Options :' in t:
                        in_options = True

        elif btype == 1:
            img_b = b.get('image')
            if not img_b:
                continue
            w = b.get('width', 0)
            h = b.get('height', 0)

            # Skip tiny icons (16x16 tick marks)
            if w <= 25 and h <= 25:
                continue

            # Skip tick icons (16x16)
            if w <= 25 and h <= 25:
                continue

            # Question image: appears BEFORE "Options :" text, width >= 250
            # (narrowest question seen: 330px; widest option seen: ~200px)
            if not in_options and w >= 250:
                text = ocr_img(reader, img_b, scale_if_small=False)
                if text.strip():
                    current_q_text = text
                    print(f"[Q: {repr(text[:50])}]", end=' ', flush=True)
                continue

            # Option image: appears AFTER "Options :" text
            if in_options and w >= 30 and h >= 25 and len(current_opts) < 4:
                text = ocr_img(reader, img_b)
                if text.strip():
                    current_opts.append(text)
                    print(f"[O{len(current_opts)}: {repr(text[:30])}]", end=' ', flush=True)

    print()  # newline after each page

# Save last question
if current_q is not None:
    questions_data[current_q] = {
        'question': current_q_text,
        'options': current_opts[:4],
    }

doc.close()
print(f"\nOCR complete: {len(questions_data)} questions")

# ── STEP 3: Merge and output ─────────────────────────────────────────────────
result = []
for q_num in range(1, 121):
    q_data = questions_data.get(q_num, {})
    q_text = q_data.get('question', '').strip()
    opts   = q_data.get('options', [])
    correct = correct_answers.get(q_num, -1)

    if not q_text or len(opts) < 2:
        print(f"  SKIP Q{q_num}: q_text={repr(q_text[:30])}, opts={len(opts)}")
        continue

    # Pad to 4 options
    while len(opts) < 4:
        opts.append(f"Option {len(opts)+1}")

    result.append({
        'id': q_num,
        'question': q_text,
        'options': opts[:4],
        'correct': correct,
        'subject': 'General Agriculture',
    })

print(f"\n=== DONE: {len(result)} questions ===")
with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
    json.dump(result, f, indent=2, ensure_ascii=False)
print(f"Saved to {OUTPUT_JSON}")

print("\nFirst 5:")
for q in result[:5]:
    c = q['correct']
    print(f"\nQ{q['id']}: {q['question'][:80]}")
    for i, o in enumerate(q['options']):
        print(f"  {'ABCD'[i]}) {o[:60]}{' CORRECT' if i == c else ''}")
