"""
Convert agricet2025ap_raw.json → src/data/pyq2025ap.ts
Run after extract_2025ap.py finishes.
"""
import json
import re
import os

INPUT_JSON = r'C:\Users\bioas\Agricet Mock Test Series\agricet2025ap_raw.json'
OUTPUT_TS  = r'C:\Users\bioas\Agricet Mock Test Series\src\data\pyq2025ap.ts'

def escape_ts(text: str) -> str:
    text = text.replace('\\', '\\\\')
    text = text.replace('"', '\\"')
    text = text.replace('`', '\\`')
    text = re.sub(r'\s+', ' ', text).strip()
    return text

def classify_subject(question: str) -> str:
    q = question.lower()
    if any(w in q for w in ['rainfall', 'monsoon', 'temperature', 'weather', 'climate', 'humidity', 'evaporation', 'wind', 'atmosphere', 'irrigation', 'water']):
        return "agro-meteorology"
    if any(w in q for w in ['soil', 'nitrogen', 'phosphorus', 'potassium', 'fertilizer', 'ph', 'salinity', 'organic']):
        return "soil-science"
    if any(w in q for w in ['seed', 'germination', 'seedling', 'sowing', 'dormancy', 'certification', 'purity']):
        return "seed-technology"
    if any(w in q for w in ['pest', 'insect', 'larvae', 'damage', 'bollworm', 'aphid', 'mite', 'thrips', 'nematode']):
        return "entomology"
    if any(w in q for w in ['disease', 'fungus', 'bacteria', 'virus', 'blight', 'rust', 'spot', 'wilt', 'pathogen']):
        return "plant-pathology"
    if any(w in q for w in ['gene', 'chromosome', 'hybrid', 'variety', 'breeding', 'cross', 'pollination', 'heterosis', 'mutation']):
        return "genetics"
    if any(w in q for w in ['tree', 'forest', 'timber', 'agroforestry', 'silviculture', 'shelterbelt', 'woodlot']):
        return "agroforestry"
    if any(w in q for w in ['fruit', 'vegetable', 'horticulture', 'orchard', 'pruning', 'grafting', 'mango', 'banana']):
        return "horticulture"
    if any(w in q for w in ['computer', 'software', 'internet', 'database', 'excel', 'keyboard', 'shortcut']):
        return "computer-applications"
    if any(w in q for w in ['market', 'price', 'cost', 'profit', 'economics', 'demand', 'supply', 'farm management']):
        return "agricultural-economics"
    return "agronomy"

if not os.path.exists(INPUT_JSON):
    print(f"ERROR: {INPUT_JSON} not found. Run extract_2025ap.py first.")
    exit(1)

with open(INPUT_JSON, encoding='utf-8') as f:
    raw = json.load(f)

print(f"Loaded {len(raw)} questions")

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
    qid   = q.get('id', 0)
    qtxt  = escape_ts(q.get('question', ''))
    opts  = q.get('options', [])
    correct = q.get('correct', -1)
    subject = classify_subject(q.get('question', ''))

    if len(qtxt) < 10 or len(opts) < 2:
        continue

    # Pad to 4 options
    while len(opts) < 4:
        opts.append(f"Option {len(opts)+1}")

    opts_ts = ', '.join(f'"{escape_ts(o)}"' for o in opts[:4])
    seq_str = str(valid + 1).zfill(3)

    lines.append(
        f'  {{ id: "pyq25ap_{seq_str}", year: 2025, subject: "{subject}", '
        f'question: "{qtxt}", '
        f'options: [{opts_ts}], '
        f'correct: {correct}, explanation: "" }},'
    )
    valid += 1

lines.append('];')
lines.append('')

ts = '\n'.join(lines)
with open(OUTPUT_TS, 'w', encoding='utf-8') as f:
    f.write(ts)

print(f"Written {valid} questions to {OUTPUT_TS}")

# Preview
with open(INPUT_JSON, encoding='utf-8') as f:
    raw2 = json.load(f)
print("\nFirst 5 questions:")
for q in raw2[:5]:
    c = q.get('correct', -1)
    print(f"\nQ{q['id']}: {q['question'][:80]}")
    for i, o in enumerate(q['options']):
        print(f"  {'ABCD'[i]}) {o[:60]}{' ✓' if i == c else ''}")
