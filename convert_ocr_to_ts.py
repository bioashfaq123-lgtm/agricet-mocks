"""
Convert agricet2023_raw.json (OCR output) → src/data/pyq2023ap.ts
Run this AFTER extract_agricet2023.py finishes.
"""
import json
import re
import os

INPUT_JSON  = r'C:\Users\bioas\Agricet Mock Test Series\agricet2023_raw.json'
OUTPUT_TS   = r'C:\Users\bioas\Agricet Mock Test Series\src\data\pyq2023ap.ts'

def escape_ts(text: str) -> str:
    """Escape backticks and backslashes for TS template literals."""
    text = text.replace('\\', '\\\\')
    text = text.replace('`', '\\`')
    text = text.replace('${', '\\${')
    # Also fix common OCR errors
    text = text.replace('"', '"').replace('"', '"')
    text = text.replace("'", "'").replace("'", "'")
    text = re.sub(r'\s+', ' ', text).strip()
    return text

def classify_subject(question: str) -> str:
    """Rough subject tagging based on keywords."""
    q = question.lower()
    if any(w in q for w in ['rainfall', 'monsoon', 'temperature', 'weather', 'climate', 'humidity', 'evaporation', 'wind', 'atmosphere']):
        return "meteorology"
    if any(w in q for w in ['soil', 'organic matter', 'nitrogen', 'phosphorus', 'potassium', 'fertilizer', 'ph', 'salinity']):
        return "soil-science"
    if any(w in q for w in ['seed', 'germination', 'seedling', 'nursery', 'sowing', 'transplanting']):
        return "seed-technology"
    if any(w in q for w in ['pest', 'insect', 'larvae', 'damage', 'bollworm', 'aphid', 'mite', 'thrips']):
        return "entomology"
    if any(w in q for w in ['disease', 'fungus', 'bacteria', 'virus', 'blight', 'rust', 'spot', 'pathogen']):
        return "plant-pathology"
    if any(w in q for w in ['gene', 'chromosome', 'hybrid', 'variety', 'breeding', 'cross', 'pollination', 'heterosis']):
        return "genetics"
    if any(w in q for w in ['irrigation', 'water', 'drainage', 'canal', 'drip', 'sprinkler']):
        return "irrigation"
    if any(w in q for w in ['tree', 'forest', 'timber', 'agroforestry', 'silviculture', 'shelterbelt']):
        return "agroforestry"
    if any(w in q for w in ['fruit', 'vegetable', 'horticulture', 'orchard', 'pruning', 'grafting']):
        return "horticulture"
    if any(w in q for w in ['computer', 'software', 'internet', 'database', 'excel', 'keyboard', 'shortcut']):
        return "computer-applications"
    return "agronomy"

def main():
    if not os.path.exists(INPUT_JSON):
        print(f"ERROR: {INPUT_JSON} not found. Run extract_agricet2023.py first.")
        return

    with open(INPUT_JSON, encoding='utf-8') as f:
        raw = json.load(f)

    print(f"Loaded {len(raw)} raw questions from OCR output.")

    # Filter and clean
    questions = []
    for i, q in enumerate(raw, 1):
        qtxt = q.get('question', '').strip()
        opts = [o.strip() for o in q.get('options', []) if o.strip()]

        # Skip if question is too short or empty
        if len(qtxt) < 15:
            print(f"  SKIP Q{q.get('id','?')}: too short: {repr(qtxt[:60])}")
            continue

        # Skip if fewer than 2 options
        if len(opts) < 2:
            print(f"  SKIP Q{q.get('id','?')}: only {len(opts)} options")
            continue

        # Pad to 4 options if needed
        while len(opts) < 4:
            opts.append(f"Option {len(opts)+1}")

        subject = classify_subject(qtxt)

        questions.append({
            "seq": i,
            "orig_id": q.get('id', i),
            "question": escape_ts(qtxt),
            "options": [escape_ts(o) for o in opts[:4]],
            "subject": subject,
        })

    print(f"Valid questions after filtering: {len(questions)}")

    # Build TypeScript
    lines = [
        'import { PYQQuestion } from "./previousYearPapers";',
        '',
        '// AP AGRICET 2023 – ANGRAU (Acharya N.G. Ranga Agricultural University, Andhra Pradesh)',
        '// Questions extracted via OCR from the official AGRICET 2023 question paper',
        '// correct: -1 = answer key not yet available (review-only mode)',
        'export const PYQ_2023_AP: PYQQuestion[] = [',
    ]

    for q in questions:
        seq_str = str(q["seq"]).zfill(3)
        opts_ts = ', '.join(f'"{o}"' for o in q["options"])
        lines.append(
            f'  {{ id: "pyq23ap_{seq_str}", year: 2023, subject: "{q["subject"]}", '
            f'question: "{q["question"]}", '
            f'options: [{opts_ts}], '
            f'correct: -1, explanation: "" }},'
        )

    lines.append('];')
    lines.append('')

    ts_content = '\n'.join(lines)
    with open(OUTPUT_TS, 'w', encoding='utf-8') as f:
        f.write(ts_content)

    print(f"\nWritten to {OUTPUT_TS}")
    print(f"Total AP AGRICET 2023 questions: {len(questions)}")
    print("\nFirst 3 questions preview:")
    for q in questions[:3]:
        print(f"\n  Q{q['seq']}: {q['question'][:80]}...")
        for j, o in enumerate(q['options']):
            print(f"    {'ABCD'[j]}) {o}")

if __name__ == "__main__":
    main()
