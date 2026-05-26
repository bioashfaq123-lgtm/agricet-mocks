"""
Extract AP AGRICET 2025 questions from ANGRAU PDF.
Strategy:
 - Correct answers already known from color-coded option numbers (green = correct)
 - Question text and option text are embedded as JPEG images → extract + OCR
 - Small PNG icons (checkmarks) are skipped
"""
import fitz
import easyocr
import numpy as np
import json
import re
import io
from PIL import Image

PDF_PATH    = r'D:\Desktop\Previous agricet papers\AGRICET2025_DA_QP.pdf'
OUTPUT_JSON = r'C:\Users\bioas\Agricet Mock Test Series\agricet2025ap_raw.json'
ANSWERS_FILE = r'C:\Users\bioas\AppData\Local\Temp\ap2025_answers.json'

# ── Step 1: Load pre-extracted correct answers ─────────────────────────────
with open(ANSWERS_FILE, encoding='utf-8') as f:
    raw_answers = json.load(f)
correct_answers = {int(k): v for k, v in raw_answers.items()}
print(f"Loaded correct answers for {len(correct_answers)} questions")

# ── Step 2: Load OCR reader ────────────────────────────────────────────────
print("Loading EasyOCR...")
reader = easyocr.Reader(['en'], gpu=False, verbose=False)
print("OCR ready\n")

# ── Step 3: Extract question text + option images, OCR them ───────────────
doc = fitz.open(PDF_PATH)

def ocr_image_bytes(img_bytes: bytes) -> str:
    """OCR a JPEG/PNG byte string and return cleaned text."""
    img = Image.open(io.BytesIO(img_bytes)).convert('RGB')
    arr = np.array(img)
    results = reader.readtext(arr, detail=0, paragraph=True)
    text = ' '.join(results).strip()
    text = re.sub(r'\s+', ' ', text)
    return text

def is_telugu_line(text: str) -> bool:
    """True if line is mostly garbled (Telugu OCR'd as ASCII)."""
    words = text.split()
    if not words:
        return True
    # Count words with high proportion of non-dict characters
    garble = sum(1 for w in words if
        (len(w) > 2 and sum(1 for c in w if not c.isalpha() and not c.isdigit()) > len(w) * 0.3) or
        re.search(r'[a-z][A-Z][a-z][A-Z]', w)  # alternating case = garbled
    )
    return garble / len(words) > 0.5

def clean_text(text: str) -> str:
    """Strip obvious garbled Telugu from the OCR result."""
    # Split on the first '?' and take everything up to + including it
    q_pos = text.find('?')
    if q_pos != -1:
        candidate = text[:q_pos + 1].strip()
        # Check if the part before '?' is mostly English
        words = candidate.split()
        eng = sum(1 for w in words if re.match(r"^[A-Za-z0-9\-/()%.']+$", w))
        if len(words) > 0 and eng / len(words) > 0.5:
            return candidate
    # Otherwise just remove garbled chunks at end
    tokens = text.split()
    clean_tokens = []
    for tok in tokens:
        # Stop at heavily garbled sequences
        if len(tok) > 3 and re.search(r'[^\x00-\x7F]', tok):
            break
        clean_tokens.append(tok)
    return ' '.join(clean_tokens).strip()

# Build question data by going through pages sequentially
questions_data = {}  # qnum -> {'question': '', 'options': [], 'phase': 'q'|'opts', 'opt_count': 0}
current_q = None
in_options = False
opt_count = 0

print("Processing PDF pages...")
OPTION_HEADER_MIN_SIZE = 30  # skip images smaller than this (icons)

for pg_idx in range(1, len(doc)):
    page = doc[pg_idx]
    blocks = page.get_text('dict')['blocks']

    for b in blocks:
        btype = b.get('type')

        if btype == 0:  # text block
            for line in b['lines']:
                for span in line['spans']:
                    txt = span['text'].strip()

                    # Detect question header
                    m = re.search(r'Question Number\s*:\s*(\d+)', txt, re.IGNORECASE)
                    if m:
                        current_q = int(m.group(1))
                        in_options = False
                        opt_count = 0
                        if current_q not in questions_data:
                            questions_data[current_q] = {
                                'question': '',
                                'options': [],
                            }

                    # Detect "Options :" marker → next images are options
                    if txt.lower().startswith('options') and current_q:
                        in_options = True
                        opt_count = 0

        elif btype == 1 and current_q is not None:  # image block
            ext  = b.get('ext', '')
            w    = b.get('width', 0)
            h    = b.get('height', 0)

            # Skip tiny images (checkmark/X icons ≤ 30px)
            if w <= OPTION_HEADER_MIN_SIZE or h <= OPTION_HEADER_MIN_SIZE:
                continue
            # Skip PNG icons
            if ext == 'png' and w < 100:
                continue

            # Extract image bytes
            img_bytes = b.get('image')
            if img_bytes is None:
                continue

            print(f"  Q{current_q} {'OPT' if in_options else 'Q-TEXT'} img {w}x{h} ({ext})", flush=True)

            text = ocr_image_bytes(img_bytes)
            text = clean_text(text)

            if not text:
                continue

            if not in_options:
                # Append to question text
                prev = questions_data[current_q]['question']
                questions_data[current_q]['question'] = (prev + ' ' + text).strip()
            else:
                # Append as option
                if opt_count < 4:
                    questions_data[current_q]['options'].append(text)
                    opt_count += 1

doc.close()

# ── Step 4: Combine with correct answers ───────────────────────────────────
print(f"\nBuilding final question list...")
questions = []
for qnum in sorted(questions_data.keys()):
    d = questions_data[qnum]
    qtxt = d['question'].strip()
    opts = [o.strip() for o in d['options'] if o.strip()]

    if len(qtxt) < 10:
        print(f"  SKIP Q{qnum}: question too short: {repr(qtxt)}")
        continue
    if len(opts) < 2:
        print(f"  SKIP Q{qnum}: only {len(opts)} options")
        continue

    while len(opts) < 4:
        opts.append(f"Option {len(opts)+1}")

    correct = correct_answers.get(qnum, -1)

    questions.append({
        'id': qnum,
        'question': qtxt,
        'options': opts[:4],
        'correct': correct,
        'subject': 'General Agriculture',
    })

print(f"Total valid questions: {len(questions)}")

with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)
print(f"Saved to {OUTPUT_JSON}")

print("\n--- Preview first 5 ---")
for q in questions[:5]:
    print(f"\nQ{q['id']}: {q['question'][:80]}")
    for i, o in enumerate(q['options']):
        marker = " ✓" if i == q['correct'] else ""
        print(f"  {'ABCD'[i]}) {o[:60]}{marker}")
