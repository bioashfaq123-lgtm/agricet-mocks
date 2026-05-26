"""
Extract all 17 subjects from AGRICET Objective Book PDF.
Uses left/right column splitting to handle 2-column layout.
Outputs: src/data/bookQuestions.ts
"""
import pdfplumber, re, json, sys
sys.stdout.reconfigure(encoding='utf-8')

PDF_PATH = r"C:\Users\bioas\Desktop\AGRICET_Best_Objective_Book_v3.pdf"

# Subject metadata: (code, name, start_page 1-indexed, end_page inclusive, answer_key_page)
SUBJECTS = [
    ("da101", "DA 101", "Principles of Agronomy",                          4,  8,   None),
    ("da102", "DA 102", "Crop Production I – Kharif Crops",                9, 13,   None),
    ("da111", "DA 111", "Plant Breeding & Seed Technology",               14, 19,   None),
    ("da121", "DA 121", "Soil Chemistry and Fertility",                   20, 27,   None),
    ("da122", "DA 122", "Manures and Fertilizers",                        28, 33,   None),
    ("da131", "DA 131", "Principles of Entomology",                       34, 39,   None),
    ("da132", "DA 132", "Pests of Crops & Their Management",              40, 45,   None),
    ("da151", "DA 151", "Farm Power and Machinery",                       46, 50,   None),
    ("da171", "DA 171", "Plant Pathology & Crop Diseases",                51, 55,   None),
    ("da201", "DA 201", "Crop Production II – Rabi and Commercial Crops", 56, 60,   None),
    ("da291", "DA 291", "Agricultural Extension & Rural Development",     61, 66,   None),
    ("da241", "DA 241", "Farm Management and Agricultural Economics",     67, 72,   None),
    ("da252", "DA 252", "Land Surveying and Water Engineering",           73, 77,   78),
    ("da262", "DA 262", "Computer Applications in Agriculture",           79, 84,   None),
    ("da263", "DA 263", "Communication Skills in English",                85, 90,   None),
    ("da281", "DA 281", "Forestry Medicinal and Aromatic Plants",         91, 96,   None),
    ("da282", "DA 282", "Horticulture",                                   97, 102,  None),
]

def extract_text_two_col(page):
    """Extract text treating page as two columns, left first then right."""
    w = page.width
    left  = page.within_bbox((0,    0, w*0.50, page.height)).extract_text() or ""
    right = page.within_bbox((w*0.50, 0, w,    page.height)).extract_text() or ""
    return left + "\n" + right

def parse_answer_key(text):
    """Parse answer key rows like '1 2 3 4 5\nA B C D A'"""
    answers = {}
    lines = [l.strip() for l in text.split('\n') if l.strip()]
    i = 0
    while i < len(lines):
        # Find a line of numbers
        nums = re.findall(r'\b(\d+)\b', lines[i])
        if nums and i+1 < len(lines):
            letters = re.findall(r'\b([A-D])\b', lines[i+1])
            if len(letters) == len(nums):
                for n, l in zip(nums, letters):
                    answers[int(n)] = l
                i += 2
                continue
        i += 1
    return answers

def extract_subject_raw(pdf, start_p, end_p):
    """Extract raw text from pages (1-indexed), returns combined text."""
    texts = []
    for pg in range(start_p-1, end_p):
        texts.append(extract_text_two_col(pdf.pages[pg]))
    return "\n".join(texts)

def parse_questions(raw_text):
    """
    Parse questions from raw extracted text.
    Pattern: number followed by '. ' then question text, then a) b) c) d)
    """
    # Normalise
    text = raw_text.replace('\xa0', ' ')

    # Find all question blocks by locating "N." or "N. " patterns
    # Split on question numbers that start a new question
    blocks = re.split(r'\n(?=\d{1,3}\.\s)', text)

    questions = []
    for block in blocks:
        block = block.strip()
        # Must start with a number
        m = re.match(r'^(\d{1,3})\.\s+(.+)', block, re.DOTALL)
        if not m:
            continue
        qnum = int(m.group(1))
        rest = m.group(2).strip()

        # Extract options a) b) c) d)
        opt_pattern = re.split(r'\n?[a-d]\)\s*', rest)
        if len(opt_pattern) < 5:
            # Try inline split
            opt_pattern = re.split(r'(?<!\w)[a-d]\)\s*', rest)

        if len(opt_pattern) < 5:
            continue

        q_text = opt_pattern[0].strip().replace('\n', ' ')
        # Remove trailing incomplete words / headers
        q_text = re.sub(r'\s+', ' ', q_text)
        opts = [o.strip().replace('\n', ' ') for o in opt_pattern[1:5]]
        opts = [re.sub(r'\s+', ' ', o) for o in opts]

        # Basic validation
        if qnum < 1 or qnum > 200:
            continue
        if not q_text or len(q_text) < 5:
            continue
        if any(len(o) == 0 for o in opts):
            continue

        questions.append({
            "id":   qnum,
            "q":    q_text,
            "opts": opts
        })

    # Deduplicate by question number (keep first occurrence)
    seen = {}
    unique = []
    for q in sorted(questions, key=lambda x: x['id']):
        if q['id'] not in seen:
            seen[q['id']] = True
            unique.append(q)
    return unique

# ── Main extraction ───────────────────────────────────────────────────────────
all_subjects = {}

with pdfplumber.open(PDF_PATH) as pdf:
    for code, da_code, name, start, end, ak_pg in SUBJECTS:
        print(f"Extracting {da_code}: {name} (pages {start}-{end})...")
        raw = extract_subject_raw(pdf, start, end)
        questions = parse_questions(raw)

        # Extract answer key — usually on the last content page or a dedicated page
        ak_page = ak_pg if ak_pg else end
        ak_text = extract_text_two_col(pdf.pages[ak_page - 1])
        answers = parse_answer_key(ak_text)

        # Also check last content page for embedded answer key
        if len(answers) < 10:
            for pg in range(start, end+1):
                t = extract_text_two_col(pdf.pages[pg-1])
                if 'ANSWER KEY' in t or 'answer key' in t.lower():
                    a2 = parse_answer_key(t)
                    answers.update(a2)

        all_subjects[code] = {
            "code":      da_code,
            "name":      name,
            "questions": questions,
            "answers":   answers,
        }

        print(f"  → {len(questions)} questions, {len(answers)} answers in key")

# ── Write JSON ────────────────────────────────────────────────────────────────
out_path = r"C:\Users\bioas\Agricet Mock Test Series\src\data\bookQuestions.json"
with open(out_path, "w", encoding="utf-8") as f:
    json.dump(all_subjects, f, ensure_ascii=False, indent=2)

print(f"\nDone! Saved to {out_path}")
total_q = sum(len(v['questions']) for v in all_subjects.values())
print(f"Total questions extracted: {total_q}")
