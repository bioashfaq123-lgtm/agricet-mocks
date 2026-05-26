"""
Extract English questions from AGRICET 2023 scanned PDF.
Strategy: EasyOCR (English only) → paragraph mode → clean garbled Telugu → parse.
"""
import fitz
import easyocr
import numpy as np
import json
import re
from PIL import Image

PDF_PATH = r'D:\Desktop\Previous agricet papers\AGRICET2023_DA_QP.pdf'
OUTPUT_JSON = r'C:\Users\bioas\Agricet Mock Test Series\agricet2023_raw.json'

QUESTION_START_PAGE = 4   # 0-indexed (page 5 onwards has actual questions)
QUESTION_END_PAGE   = 47  # 0-indexed inclusive

# ------------------------------------------------------------------
# Image helpers
# ------------------------------------------------------------------
def render_page(page, scale: float = 2.0) -> np.ndarray:
    mat = fitz.Matrix(scale, scale)
    pix = page.get_pixmap(matrix=mat, colorspace=fitz.csRGB)
    return np.frombuffer(pix.samples, dtype=np.uint8).reshape(pix.height, pix.width, 3)

# ------------------------------------------------------------------
# Text cleaning helpers
# ------------------------------------------------------------------
_GARBLE_RE = re.compile(
    r'([@#$%^&*]{1,}|'          # symbol clusters
    r'\b[a-zA-Z0-9]{1,3}[0-9]{3,}[a-zA-Z0-9]*\b|'  # alphanumeric junk like "OfaO83"
    r'\b[A-Z][a-z][A-Z][a-z]\b|'  # CamelCase 4-char like "eBaw"
    r'[^\x00-\x7F])'              # non-ASCII (actual Telugu Unicode if any)
)

def score_english(text: str) -> float:
    """0.0 = totally garbled, 1.0 = clean English."""
    words = text.split()
    if not words:
        return 0.0
    clean = sum(1 for w in words
                if re.match(r'^[A-Za-z]{2,}$', w) or   # pure letters
                   re.match(r'^\d+\.?\d*%?$', w) or      # numbers/percentages
                   w in ('1988', 'is', 'a', 'A', 'of', 'the', 'as', 'per', 'to', 'in'))
    return clean / len(words)

def trim_to_english(text: str) -> str:
    """
    Keep only the English portion of a mixed English+Telugu OCR line.
    Strategy: if the text contains a '?' it's probably question+translation;
    keep only up to and including the '?'.
    Otherwise, keep the part before the first garbled cluster.
    """
    # If ends with a '?' or contains one, cut there
    q_pos = text.find('?')
    if q_pos != -1:
        # Check if the part before '?' looks reasonably English
        candidate = text[:q_pos + 1].strip()
        if score_english(candidate) > 0.45:
            return candidate

    # Otherwise, split on the first garbled sequence (long run of symbols/junk)
    garble_match = re.search(
        r'(?<=[a-z?!.]) {1,3}[A-Za-z0-9@!]{1,2}[0-9@]{2,}',
        text
    )
    if garble_match:
        return text[:garble_match.start()].strip()

    # If the line itself looks mostly garbled, return empty
    if score_english(text) < 0.35:
        return ''

    return text.strip()

# ------------------------------------------------------------------
# Parser
# ------------------------------------------------------------------
Q_HEADER_RE = re.compile(r'Question\s*Number\s*[:\-]?\s*(\d+)', re.IGNORECASE)
OPTION_LABEL_RE = re.compile(r'^[A-Da-d][).:\-\s]')
PCT_RE = re.compile(r'^\d+\.?\d*\s*%')

def parse_blocks(blocks: list[str]) -> list[dict]:
    """Parse OCR paragraph blocks into structured MCQ dicts."""
    questions = []

    # Find header block positions
    headers = []
    for i, blk in enumerate(blocks):
        m = Q_HEADER_RE.search(blk)
        if m:
            headers.append((i, int(m.group(1))))

    for hi, (start, qnum) in enumerate(headers):
        end = headers[hi + 1][0] if hi + 1 < len(headers) else len(blocks)
        seg = blocks[start + 1 : end]   # skip the header itself

        # Drop metadata noise
        seg = [b for b in seg if not re.search(
            r'(correct\s+marks|wrong\s+marks|response\s+time|mandatory|shuffl|'
            r'calculator|think\s+time|instruction|about.?blank|^\d+/\d+$)',
            b, re.IGNORECASE
        )]

        if not seg:
            continue

        # Separate question body from options
        q_lines  = []
        opt_raw  = []
        in_opts  = False

        for blk in seg:
            clean = trim_to_english(blk)
            if not clean:
                continue

            if not in_opts and (OPTION_LABEL_RE.match(clean) or PCT_RE.match(clean)):
                in_opts = True

            if in_opts:
                opt_raw.append(clean)
            else:
                q_lines.append(clean)

        question_text = ' '.join(q_lines).strip()
        question_text = re.sub(r'\s+', ' ', question_text)

        # Strip leading "Options" word that sometimes appears
        question_text = re.sub(r'\s*Options\s*$', '', question_text, flags=re.IGNORECASE).strip()

        if len(question_text) < 12:
            continue

        # Parse options
        options = []
        current = []
        for blk in opt_raw:
            blk = re.sub(r'\s+', ' ', blk).strip()
            if OPTION_LABEL_RE.match(blk) or PCT_RE.match(blk):
                if current:
                    options.append(' '.join(current))
                    current = []
            # Remove leading A) B) etc.
            blk = re.sub(r'^[A-Da-d][).:\-]\s*', '', blk).strip()
            if blk:
                current.append(blk)
        if current:
            options.append(' '.join(current))

        options = [o.strip() for o in options if o.strip()]

        questions.append({
            "id":       qnum,
            "question": question_text,
            "options":  options[:4],
            "answer":   "",
            "subject":  "General Agriculture"
        })

    return questions

# ------------------------------------------------------------------
# Main
# ------------------------------------------------------------------
def main():
    print("Loading EasyOCR (English only)…")
    reader = easyocr.Reader(['en'], gpu=False, verbose=False)
    print("Reader ready.\n")

    doc = fitz.open(PDF_PATH)
    total = len(doc)
    print(f"PDF: {total} pages. Processing pages {QUESTION_START_PAGE+1}–{QUESTION_END_PAGE+1}…\n")

    all_blocks: list[str] = []

    for pg in range(QUESTION_START_PAGE, min(QUESTION_END_PAGE + 1, total)):
        print(f"  Page {pg+1}/{total}…", end=' ', flush=True)
        arr  = render_page(doc[pg], scale=2.0)
        # paragraph=True groups related text → faster and gives better block structure
        results = reader.readtext(arr, detail=0, paragraph=True)
        all_blocks.extend(results)
        print(f"{len(results)} blocks")

    doc.close()

    print(f"\nTotal blocks: {len(all_blocks)}")
    print("Parsing questions…")
    questions = parse_blocks(all_blocks)
    print(f"Questions found: {len(questions)}")

    with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
        json.dump(questions, f, indent=2, ensure_ascii=False)
    print(f"Saved → {OUTPUT_JSON}")

    print("\n--- Preview (first 5) ---")
    for q in questions[:5]:
        print(f"\nQ{q['id']}: {q['question']}")
        for i, opt in enumerate(q['options']):
            print(f"  {'ABCD'[i]}) {opt}")

if __name__ == "__main__":
    main()
