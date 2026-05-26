"""
Extract AP AGRICET 2023 from ANGRAU PDF.
Key insight from structural analysis:
 - All content is JPEG images (no text blocks with option numbers)
 - Images stored out of y-order -> MUST sort by y-position
 - After sorting: [option_text] -> [icon: GREEN=correct / RED=wrong]
 - 69x70 greenish icon (R≈213,G≈232,B≈210) = CORRECT answer indicator
 - 16x16 red icon = WRONG answer indicator
 - Wide image (width > 400, height > 50) = QUESTION TEXT -> starts new question
"""
import fitz
import easyocr
import numpy as np
import json
import re
import io
from PIL import Image

PDF_PATH    = r'D:\Desktop\Previous agricet papers\AGRICET2023_DA_QP.pdf'
OUTPUT_JSON = r'C:\Users\bioas\Agricet Mock Test Series\agricet2023ap_final.json'

# ── helpers ───────────────────────────────────────────────────────────────────
def img_dominant(img_bytes: bytes):
    """Return (R, G, B) average of the image."""
    try:
        img = Image.open(io.BytesIO(img_bytes)).convert('RGB')
        arr = np.array(img, dtype=float)
        return arr[:,:,0].mean(), arr[:,:,1].mean(), arr[:,:,2].mean()
    except:
        return 128, 128, 128

def is_green_indicator(r, g, b):
    """69x70 greenish icon = correct answer."""
    return g > r + 10 and g > b + 10 and g > 200

def is_red_indicator(r, g, b):
    """16x16 red icon = wrong answer."""
    return r > 150 and r > g + 50 and r > b + 50

def is_green_check_16x16(img_bytes):
    """For the rare case where 16x16 is actually green."""
    r, g, b = img_dominant(img_bytes)
    return g > r + 30 and g > b + 30

def ocr_img(reader, img_bytes, scale_if_small=True):
    """OCR an image, optionally upscaling small ones."""
    try:
        img = Image.open(io.BytesIO(img_bytes)).convert('RGB')
        w, h = img.size
        if scale_if_small and (w < 150 or h < 40):
            s = max(2, min(4, 200 // max(w, 1)))
            img = img.resize((w * s, h * s), Image.LANCZOS)
        arr = np.array(img)
        results = reader.readtext(arr, detail=0, paragraph=True)
        text = ' '.join(results).strip()
        return re.sub(r'\s+', ' ', text)
    except Exception as e:
        return ''

def english_ratio(text: str) -> float:
    words = text.split()
    if not words: return 0.0
    eng = sum(1 for w in words if re.match(r"^[A-Za-z0-9\-/()%.,':\"]+$", w))
    return eng / len(words)

def clean_english(text: str) -> str:
    """Strip Telugu OCR garbage, keep English."""
    q_pos = text.find('?')
    if q_pos != -1:
        cand = text[:q_pos+1].strip()
        if english_ratio(cand) > 0.45:
            return cand
    # strip non-ASCII sequences
    cleaned = re.sub(r'[^\x00-\x7F]+', ' ', text)
    cleaned = re.sub(r'\s+', ' ', cleaned).strip()
    if english_ratio(cleaned) > 0.35:
        return cleaned
    return text   # return as-is if nothing better

# ── OCR setup ─────────────────────────────────────────────────────────────────
print("Loading EasyOCR...")
reader = easyocr.Reader(['en'], gpu=False, verbose=False)
print("Ready\n")

doc = fitz.open(PDF_PATH)
print(f"PDF: {len(doc)} pages\n")

# ── Parse ─────────────────────────────────────────────────────────────────────
questions = {}     # seq_num -> {question, options, correct}
q_num = 0
current_opt_texts = []    # list of (text, is_correct_indicator_seen)
# We accumulate option texts, and when we see an indicator icon we label the LAST option

def save_question(q_n, q_text, opt_texts_with_labels):
    if q_n == 0 or not q_text or not opt_texts_with_labels:
        return
    opts = [clean_english(t) for (t, _) in opt_texts_with_labels]
    opts = [o for o in opts if len(o) > 1]
    if len(opts) < 2:
        return
    # Find correct option (the one followed by green indicator)
    correct = -1
    for i, (_, is_correct) in enumerate(opt_texts_with_labels):
        if is_correct and i < len(opts):
            correct = i
            break
    questions[q_n] = {
        'question': clean_english(q_text),
        'options': opts[:4],
        'correct': correct,
        'subject': 'General Agriculture',
    }

current_q_text = ''
opt_pending = []   # list of [text, None=unknown/True=correct/False=wrong]

for pg_idx in range(1, len(doc)):
    page = doc[pg_idx]
    blocks = page.get_text('dict', flags=fitz.TEXT_PRESERVE_IMAGES)['blocks']

    # Sort blocks by top y-coordinate
    blocks_sorted = sorted(blocks, key=lambda b: b.get('bbox', [0,0,0,9999])[1])

    for b in blocks_sorted:
        btype = b.get('type')
        if btype != 1:
            continue

        w     = b.get('width', 0)
        h     = b.get('height', 0)
        img_b = b.get('image')
        if not img_b:
            continue

        r, g, bv = img_dominant(img_b)

        # ── QUESTION TEXT -> start new question ──────────────────────────────
        # Wide images (w>=400) are always question text → new question.
        # Medium images (255<=w<400) are question text only when 4 options have
        # already been collected (previous question complete).
        # Any medium/wide image with opt_pending < 4 is treated as an option
        # (e.g. option text for a question like "Less than 5 L/ha").
        # Observed max option width: ~268px → 255px threshold gives a small
        # margin; the is_medium_q guard (opt_pending>=4) prevents false positives.
        is_wide_q   = (w >= 400 and h >= 50)
        is_medium_q = (255 <= w < 400 and h >= 50 and len(opt_pending) >= 4)
        if is_wide_q or is_medium_q:
            # Save previous question
            save_question(q_num, current_q_text, opt_pending)
            q_num += 1
            current_q_text = ''
            opt_pending = []

            print(f"  Q{q_num} Q-TEXT {w}x{h}", end=' ', flush=True)
            text = ocr_img(reader, img_b, scale_if_small=False)
            current_q_text = text
            print(f"-> {repr(text[:70])}")
            continue

        # ── GREEN INDICATOR (69x70 or similar) -> previous opt = CORRECT ──────
        if abs(w - 69) <= 8 and abs(h - 70) <= 10:
            if is_green_indicator(r, g, bv):
                if opt_pending:
                    opt_pending[-1][1] = True  # last option is correct
                    print(f"    -> CORRECT (opt {len(opt_pending)})")
            elif is_red_indicator(r, g, bv):
                if opt_pending:
                    opt_pending[-1][1] = False
            continue

        # ── 16x16 ICON -> correctness for previous option ─────────────────────
        if w <= 20 and h <= 20:
            if is_red_indicator(r, g, bv):
                if opt_pending:
                    opt_pending[-1][1] = False
            elif is_green_check_16x16(img_b):
                if opt_pending:
                    opt_pending[-1][1] = True
                    print(f"    -> CORRECT (16x16 green, opt {len(opt_pending)})")
            continue

        # ── OPTION TEXT (medium image) ────────────────────────────────────────
        if w >= 30 and h >= 25 and len(opt_pending) < 4:
            print(f"  Q{q_num} OPT {w}x{h}", end=' ', flush=True)
            text = ocr_img(reader, img_b)
            print(f"-> {repr(text[:60])}")
            if text.strip():
                opt_pending.append([text, None])

# Save last question
save_question(q_num, current_q_text, opt_pending)
doc.close()

# ── Output ────────────────────────────────────────────────────────────────────
result = []
for seq in sorted(questions.keys()):
    q = questions[seq]
    if len(q['question']) > 10 and len(q['options']) >= 2:
        result.append({
            'id': seq,
            'question': q['question'],
            'options': q['options'],
            'correct': q['correct'],
            'subject': q['subject'],
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
