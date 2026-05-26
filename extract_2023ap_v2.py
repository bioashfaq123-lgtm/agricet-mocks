"""
Extract AP AGRICET 2023 questions from ANGRAU PDF (same embedded-image format as 2025).
Strategy:
 - ALL content (question text, option text, option numbers) is stored as JPEG images
 - 16x16 images = small colored icons (green checkmark = correct, red X = wrong)
 - 69x70 images = larger option index icons
 - The icon directly LEFT of each option text tells us if that option is correct
 - We extract all JPEG images in document order and classify them by size/color
"""
import fitz
import easyocr
import numpy as np
import json
import re
import io
from PIL import Image

PDF_PATH    = r'D:\Desktop\Previous agricet papers\AGRICET2023_DA_QP.pdf'
OUTPUT_JSON = r'C:\Users\bioas\Agricet Mock Test Series\agricet2023ap_raw.json'

def is_green(img_bytes: bytes) -> bool:
    """Return True if the image is predominantly green (correct answer icon)."""
    try:
        img = Image.open(io.BytesIO(img_bytes)).convert('RGB')
        arr = np.array(img)
        r, g, b = arr[:,:,0], arr[:,:,1], arr[:,:,2]
        green_pixels = np.sum((g > 100) & (g > r + 30) & (g > b + 30))
        total = arr.shape[0] * arr.shape[1]
        return green_pixels / total > 0.1   # >10% green pixels
    except Exception:
        return False

def is_red(img_bytes: bytes) -> bool:
    """Return True if the image is predominantly red (wrong answer icon)."""
    try:
        img = Image.open(io.BytesIO(img_bytes)).convert('RGB')
        arr = np.array(img)
        r, g, b = arr[:,:,0], arr[:,:,1], arr[:,:,2]
        red_pixels = np.sum((r > 150) & (r > g + 50) & (r > b + 50))
        total = arr.shape[0] * arr.shape[1]
        return red_pixels / total > 0.1
    except Exception:
        return False

def ocr_image_bytes(reader, img_bytes: bytes) -> str:
    """OCR a JPEG image and return English text only."""
    try:
        img = Image.open(io.BytesIO(img_bytes)).convert('RGB')
        # Scale up small images for better OCR
        w, h = img.size
        if w < 200:
            scale = max(2, 200 // w)
            img = img.resize((w * scale, h * scale), Image.LANCZOS)
        arr = np.array(img)
        results = reader.readtext(arr, detail=0, paragraph=True)
        text = ' '.join(results).strip()
        text = re.sub(r'\s+', ' ', text)
        return text
    except Exception as e:
        return ''

def is_english_text(text: str) -> bool:
    """True if text is predominantly English (not garbled Telugu)."""
    if not text.strip():
        return False
    words = text.split()
    eng = sum(1 for w in words if re.match(r'^[A-Za-z0-9\-/()%.,\'":]+$', w))
    return len(words) > 0 and eng / len(words) > 0.4

def clean_to_english(text: str) -> str:
    """Keep only the English part of mixed OCR output."""
    # Take up to first '?'
    q_pos = text.find('?')
    if q_pos != -1:
        candidate = text[:q_pos + 1].strip()
        if is_english_text(candidate):
            return candidate
    # Remove obvious garble (non-ASCII sequences)
    clean = re.sub(r'[^\x00-\x7F]+', ' ', text)
    clean = re.sub(r'\s+', ' ', clean).strip()
    return clean if is_english_text(clean) else text.strip()

# ─────────────────────────────────────────────────────────────────────────────
print("Loading EasyOCR (English only)...")
reader = easyocr.Reader(['en'], gpu=False, verbose=False)
print("OCR ready\n")

doc = fitz.open(PDF_PATH)
print(f"PDF: {len(doc)} pages\n")

# ── Parse the PDF ─────────────────────────────────────────────────────────────
# In the 2023 paper:
#  - Questions are packed more densely (multiple per page)
#  - Each question section: [question-text image] [option icons+text images] [option icons+text...]
#  - 16x16 = small icon (green/red)
#  - 69x70 = larger option number icon
#  - Large images (width > 300) = question text
#  - Medium images (30 < w < 300, h > 30) = option text

ICON_SIZE    = 20   # images smaller than this in both dims are tiny icons
OPT_ICON_W   = 80  # images around 69x70 are option-number icons
Q_TEXT_MIN_W = 300  # question text images are wide

questions_data = {}  # qnum -> {'question', 'options', 'opt_status'}
q_num = 0
current_state = 'before_q'   # 'before_q' | 'in_q' | 'in_opts'
opt_buffer = []    # [(is_green, opt_text)] for current question
current_q_text = ''

def save_current_question():
    global current_q_text, opt_buffer
    if q_num == 0 or not current_q_text:
        return
    q = clean_to_english(current_q_text)
    opts = [clean_to_english(t) for (_, t) in opt_buffer if t.strip()]
    correct = next((i for i, (g, _) in enumerate(opt_buffer) if g), -1)
    if len(q) > 10 and len(opts) >= 2:
        questions_data[q_num] = {
            'question': q,
            'options': opts[:4],
            'correct': correct,
            'subject': 'General Agriculture',
        }

# Process each page
for pg_idx in range(1, len(doc)):
    page = doc[pg_idx]
    blocks = page.get_text('dict')['blocks']

    for b in blocks:
        btype = b.get('type')
        if btype != 1:
            continue

        w     = b.get('width', 0)
        h     = b.get('height', 0)
        ext   = b.get('ext', '')
        img_b = b.get('image')
        if img_b is None:
            continue

        # ── Classify image ────────────────────────────────────────────────
        if w <= ICON_SIZE and h <= ICON_SIZE:
            # 16x16 tiny icon: green/red correctness indicator
            green = is_green(img_b)
            # This icon precedes the next option text
            opt_buffer.append([green, ''])   # placeholder, text filled by next large image
            continue

        if abs(w - 69) <= 5 and abs(h - 70) <= 5:
            # 69x70 option-number icon: ignore (just separators)
            continue

        if w >= Q_TEXT_MIN_W and h >= 50:
            # Wide image = question text → start a new question
            save_current_question()

            # New question found — use page+sequential numbering
            q_num += 1
            current_q_text = ''
            opt_buffer = []
            in_opts = False

            print(f"  Q{q_num} Q-TEXT {w}x{h}", end=' ', flush=True)
            text = ocr_image_bytes(reader, img_b)
            current_q_text = text
            print(f"→ {repr(text[:60])}")
            current_state = 'in_q'
            continue

        # Medium image = option text
        if w > ICON_SIZE and h > ICON_SIZE:
            print(f"  Q{q_num} OPT {w}x{h}", end=' ', flush=True)
            text = ocr_image_bytes(reader, img_b)
            print(f"→ {repr(text[:60])}")

            # Attach to last icon without text
            if opt_buffer and opt_buffer[-1][1] == '':
                opt_buffer[-1][1] = text
            else:
                # No preceding icon → check image color
                green = is_green(img_b)
                opt_buffer.append([green, text])

# Save last question
save_current_question()
doc.close()

print(f"\n=== DONE ===")
print(f"Questions extracted: {len(questions_data)}")

result = list(questions_data.values())
with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
    json.dump(result, f, indent=2, ensure_ascii=False)
print(f"Saved to {OUTPUT_JSON}")

# Preview
print("\n--- Preview first 5 ---")
for q in result[:5]:
    mark = q.get('correct', -1)
    print(f"\nQ: {q['question'][:80]}")
    for i, o in enumerate(q['options']):
        print(f"  {'ABCD'[i]}) {o[:60]}{' ✓' if i == mark else ''}")
