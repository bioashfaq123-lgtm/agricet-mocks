"""
Post-process AP 2025 raw OCR JSON:
1. Strip garbled Telugu from question text and options (keep English only)
2. Output clean TypeScript file
"""
import json
import re

INPUT_JSON = r'C:\Users\bioas\Agricet Mock Test Series\agricet2025ap_raw.json'
OUTPUT_TS  = r'C:\Users\bioas\Agricet Mock Test Series\src\data\pyq2025ap.ts'

def is_garbled_word(w: str) -> bool:
    """Detect Telugu OCR garbage words."""
    if not w:
        return True
    # Contains non-ASCII
    if any(ord(c) > 127 for c in w):
        return True
    # Contains @ # $ % & * (common in garbled output)
    if re.search(r'[@#$%^&*{}\[\]~`]', w):
        return True

    # Strip outer punctuation for core analysis
    core = re.sub(r'^[^\w]+|[^\w]+$', '', w)
    if not core:
        return True

    digits = sum(c.isdigit() for c in core)
    letters = sum(c.isalpha() for c in core)

    # Pure digit string of 3+ chars = garbled Telugu numeral artifact (e.g. "33085", "35236")
    if digits >= 3 and letters == 0:
        return True

    # Mixed digit-letter with too many digits (e.g. "8305", "6g063")
    if len(core) >= 3 and digits > 0 and letters > 0 and digits >= letters:
        return True

    # Digit embedded INSIDE letter sequence (e.g. "Savoo6i", "8o8", "Ao6po")
    if re.search(r'[a-zA-Z]\d[a-zA-Z]', core):
        return True

    # Word starts with digit and has letters mixed (e.g. "6g063", "3os")
    if re.match(r'^\d+[a-zA-Z]', core) and len(core) >= 3:
        return True

    # Word ends with digit after letters (e.g. "booj0", "sno6", "suros") — trailing digit artifact
    if re.search(r'[a-zA-Z]{2,}\d+$', core):
        return True

    # Weird case mixing: lowercase-uppercase-lowercase pattern
    if re.search(r'[a-z][A-Z][a-z][A-Z]', core) or re.search(r'[A-Z][a-z][A-Z][a-z][A-Z]', core):
        return True

    # Word is 3+ chars and has >= 2 digits with any letters
    if len(core) >= 3 and digits >= 2 and letters >= 1:
        return True

    return False

def clean_text(text: str) -> str:
    """Keep only the leading English portion, dropping garbled tail."""
    if not text:
        return text

    words = text.split()
    clean = []
    garble_run = 0

    for w in words:
        if is_garbled_word(w):
            garble_run += 1
            if garble_run >= 2:
                break  # 2+ consecutive garbled words = start of Telugu section
        else:
            garble_run = 0
            clean.append(w)

    result = ' '.join(clean).strip()
    # Remove trailing punctuation noise
    result = re.sub(r'[\-_~]+$', '', result).strip()

    # Step 1: strip trailing punctuation/bracket noise first
    result = re.sub(r'[\s\-_~()\[\]:.]+$', '', result).strip()
    # Step 2: strip trailing standalone 2-4 digit integers (Telugu numeral artifacts)
    # e.g. "Frame height 60" → "Frame height", "Genetic drift 85" → "Genetic drift"
    result = re.sub(r'(\s+\d{2,4})+\s*$', '', result).strip()
    # Step 3: strip trailing punctuation again (integers may have had trailing punct)
    result = re.sub(r'[\s\-_~()\[\]:.]+$', '', result).strip()

    return result if len(result) > 3 else text.strip()

def classify_subject(question: str) -> str:
    q = question.lower()
    if any(w in q for w in ['rainfall', 'monsoon', 'temperature', 'weather', 'climate', 'humidity', 'evaporation']):
        return "agro-meteorology"
    if any(w in q for w in ['soil', 'nitrogen', 'phosphorus', 'phosphorous', 'potassium', 'fertilizer', 'ph', 'salinity', 'organic matter', 'compost', 'manure', 'nutrient']):
        return "soil-science"
    if any(w in q for w in ['seed', 'germination', 'seedling', 'sowing', 'dormancy', 'certification', 'purity', 'viability', 'tenderometer', 'jowar', 'vigour']):
        return "seed-technology"
    if any(w in q for w in ['pest', 'insect', 'larvae', 'damage', 'bollworm', 'aphid', 'mite', 'thrips', 'borer', 'caterpillar', 'hopper', 'worm', 'winged', 'polyphagous', 'monophagous']):
        return "entomology"
    if any(w in q for w in ['disease', 'fungus', 'bacteria', 'virus', 'blight', 'rust', 'spot', 'wilt', 'pathogen', 'mosaic', 'necrosis', 'vein', 'antibiotic', 'parasite']):
        return "plant-pathology"
    if any(w in q for w in ['gene', 'chromosome', 'hybrid', 'variety', 'breeding', 'cross', 'pollination', 'heterosis', 'mutation', 'genetic drift', 'mechanical mixture', 'natural crossing']):
        return "genetics"
    if any(w in q for w in ['tree', 'forest', 'timber', 'agroforestry', 'silviculture', 'shelterbelt']):
        return "agroforestry"
    if any(w in q for w in ['fruit', 'vegetable', 'horticulture', 'orchard', 'pruning', 'grafting', 'mango', 'banana']):
        return "horticulture"
    if any(w in q for w in ['irrigation', 'water', 'drainage', 'canal', 'drip', 'sprinkler']):
        return "irrigation"
    if any(w in q for w in ['market', 'price', 'cost', 'profit', 'economics', 'demand', 'supply', 'cooperative', 'farm management']):
        return "agricultural-economics"
    if any(w in q for w in ['tractor', 'engine', 'wheel', 'machine', 'horsepower', 'combustion', 'rpm', 'tillage']):
        return "farm-machinery"
    if any(w in q for w in ['greenhouse', 'polythene', 'polyester', 'pvc', 'cooling', 'storage', 'humidity']):
        return "agronomy"
    return "agronomy"

def escape_ts(text: str) -> str:
    text = text.replace('\\', '\\\\')
    text = text.replace('"', '\\"')
    text = re.sub(r'\s+', ' ', text).strip()
    return text

# ── Main ──────────────────────────────────────────────────────────────────────
with open(INPUT_JSON, encoding='utf-8') as f:
    raw = json.load(f)

print(f"Input: {len(raw)} questions")

lines = [
    'import { PYQQuestion } from "./previousYearPapers";',
    '',
    '// AP AGRICET 2025 – ANGRAU (Acharya N.G. Ranga Agricultural University, Andhra Pradesh)',
    '// Diploma in Agriculture, 18th Aug 2025 Shift 2 — 120 Questions, 90 Minutes',
    '// Answer key extracted from official color-coded PDF (green = correct)',
    'export const PYQ_2025_AP: PYQQuestion[] = [',
]

valid = 0
for q in raw:
    qid     = q.get('id', valid + 1)
    raw_q   = q.get('question', '')
    opts    = q.get('options', [])
    correct = q.get('correct', -1)

    qtxt = clean_text(raw_q)
    if len(qtxt) < 10:
        print(f"  SKIP Q{qid}: question too short after clean: {repr(qtxt)}")
        continue

    cleaned_opts = [clean_text(o) for o in opts]
    cleaned_opts = [o for o in cleaned_opts if len(o) > 1]

    if len(cleaned_opts) < 2:
        print(f"  SKIP Q{qid}: too few options after clean")
        continue

    while len(cleaned_opts) < 4:
        cleaned_opts.append(f"Option {len(cleaned_opts)+1}")

    subject = classify_subject(qtxt)
    seq_str = str(valid + 1).zfill(3)

    opts_ts = ', '.join(f'"{escape_ts(o)}"' for o in cleaned_opts[:4])
    lines.append(
        f'  {{ id: "pyq25ap_{seq_str}", year: 2025, subject: "{subject}", '
        f'question: "{escape_ts(qtxt)}", '
        f'options: [{opts_ts}], '
        f'correct: {correct}, explanation: "" }},'
    )
    valid += 1

lines.append('];')
lines.append('')

with open(OUTPUT_TS, 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

print(f"Output: {valid} questions written to {OUTPUT_TS}")

# Preview first 10
print("\n--- Preview first 10 ---")
with open(INPUT_JSON, encoding='utf-8') as f:
    raw2 = json.load(f)
for q in raw2[:10]:
    qtxt = clean_text(q.get('question', ''))
    opts = [clean_text(o) for o in q.get('options', [])]
    c = q.get('correct', -1)
    print(f"\nQ{q['id']}: {qtxt}")
    for i, o in enumerate(opts):
        mark = " CORRECT" if i == c else ""
        print(f"  {'ABCD'[i]}) {o}{mark}")
