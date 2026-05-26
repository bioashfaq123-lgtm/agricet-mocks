"""
Post-process AP 2024 raw OCR JSON:
1. Strip garbled Telugu from question text and options (keep English only)
2. Classify subject
3. Output clean TypeScript file
"""
import json
import re

INPUT_JSON = r'C:\Users\bioas\Agricet Mock Test Series\agricet2024ap_raw.json'
OUTPUT_TS  = r'C:\Users\bioas\Agricet Mock Test Series\src\data\pyq2024ap.ts'

def is_garbled_word(w: str) -> bool:
    """Detect Telugu OCR garbage words."""
    if not w:
        return True
    if any(ord(c) > 127 for c in w):
        return True
    if re.search(r'[@#$%^&*{}\[\]~`]', w):
        return True

    core = re.sub(r'^[^\w]+|[^\w]+$', '', w)
    if not core:
        return True

    digits = sum(c.isdigit() for c in core)
    letters = sum(c.isalpha() for c in core)

    # Pure digit string of 3+ chars = garbled Telugu numeral artifact
    if digits >= 3 and letters == 0:
        return True
    # Mixed digit-letter with too many digits
    if len(core) >= 3 and digits > 0 and letters > 0 and digits >= letters:
        return True
    # Digit embedded INSIDE letter sequence (e.g. "Savoo6i")
    if re.search(r'[a-zA-Z]\d[a-zA-Z]', core):
        return True
    # Word starts with digit then letters (e.g. "6g063")
    if re.match(r'^\d+[a-zA-Z]', core) and len(core) >= 3:
        return True
    # Word ends with digit after letters (e.g. "booj0", "ooeo")
    if re.search(r'[a-zA-Z]{2,}\d+$', core):
        return True
    # Weird case mixing
    if re.search(r'[a-z][A-Z][a-z][A-Z]', core) or re.search(r'[A-Z][a-z][A-Z][a-z][A-Z]', core):
        return True
    # 3+ char word with 2+ digits and at least 1 letter
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
                break
        else:
            garble_run = 0
            clean.append(w)

    result = ' '.join(clean).strip()
    # Step 1: strip trailing punctuation
    result = re.sub(r'[\s\-_~()\[\]:.]+$', '', result).strip()
    # Step 2: strip trailing standalone 2-4 digit integers (Telugu numeral artifacts)
    result = re.sub(r'(\s+\d{2,4})+\s*$', '', result).strip()
    # Step 3: strip trailing punctuation again
    result = re.sub(r'[\s\-_~()\[\]:.]+$', '', result).strip()

    return result if len(result) > 3 else text.strip()

def classify_subject(question: str) -> str:
    q = question.lower()
    if any(w in q for w in ['rainfall', 'monsoon', 'temperature', 'weather', 'climate', 'humidity',
                              'evaporation', 'atmosphere', 'wind', 'rain', 'drought', 'cloud',
                              'troposphere', 'stratosphere', 'isohyet', 'isobar', 'frost', 'dew',
                              'carbon dioxide', 'co2', 'greenhouse gas']):
        return "agro-meteorology"
    if any(w in q for w in ['soil', 'nitrogen', 'phosphorus', 'potassium', 'fertilizer', 'ph',
                              'salinity', 'organic', 'humus', 'horizon', 'regolith', 'solum',
                              'gypsum', 'lime', 'pyrite', 'amendment', 'acidic', 'alkaline',
                              'nutrient', 'micronutrient', 'manure', 'compost', 'vermicompost',
                              'bone meal', 'reclamation', 'erosion']):
        return "soil-science"
    if any(w in q for w in ['seed', 'germination', 'seedling', 'sowing', 'dormancy',
                              'certification', 'purity', 'viability', 'tenderometer',
                              'breeder seed', 'foundation seed', 'tag colour', 'seeds act']):
        return "seed-technology"
    if any(w in q for w in ['pest', 'insect', 'larvae', 'damage', 'bollworm', 'aphid', 'mite',
                              'thrips', 'borer', 'caterpillar', 'hopper', 'worm', 'winged',
                              'polyphagous', 'monophagous', 'neonicotinoid', 'pheromone',
                              'fumigant', 'acaricide', 'alary', 'lepidoptera', 'orthoptera',
                              'hemiptera', 'coleoptera', 'thysanoptera', 'neuroptera',
                              'repugnatorial', 'coccinella', 'silkworm', 'uzifly', 'cuticle',
                              'destructive insect', 'stored grain', 'pulse beetle', 'weevil',
                              'spodoptera', 'bt cotton', 'cry', 'plutella', 'hellula']):
        return "entomology"
    if any(w in q for w in ['disease', 'fungus', 'bacteria', 'virus', 'blight', 'rust', 'spot',
                              'wilt', 'pathogen', 'mosaic', 'necrosis', 'vein', 'antibiotic',
                              'parasite', 'phytoplasma', 'mycoplasma', 'smut', 'rot', 'canker',
                              'tristeza', 'tungro', 'downy mildew', 'powdery mildew', 'sclerotia',
                              'fusarium', 'pythium', 'puccinia', 'ustilago', 'plasmopara',
                              'phytophthora', 'diplodia', 'metalaxyl', 'propiconazole',
                              'tricyclozole', 'mancozeb', 'acyl-alanine', 'systemic fungicide',
                              'grassy shoot', 'stem rot', 'red rot', 'die back', 'gummosis',
                              'aflatoxin']):
        return "plant-pathology"
    if any(w in q for w in ['gene', 'chromosome', 'hybrid', 'variety', 'breeding', 'cross',
                              'pollination', 'heterosis', 'mutation', 'genetic', 'sterility',
                              'cms', 'cgms', 'gms', 'detasselling', 'selfing', 'nipping',
                              'male sterility', 'cytoplasmic', 'nuclear', 'harvest index',
                              'tpp', 'app', 'mpp']):
        return "genetics"
    if any(w in q for w in ['tree', 'forest', 'timber', 'agroforestry', 'silviculture']):
        return "agroforestry"
    if any(w in q for w in ['fruit', 'vegetable', 'horticulture', 'orchard', 'pruning',
                              'grafting', 'mango', 'banana', 'papaya', 'guava', 'citrus',
                              'pomegranate', 'apple', 'grapes', 'sucker', 'dehorning',
                              'brinjal', 'cauliflower', 'onion', 'jasmine', 'orchid',
                              'gerbera', 'carnation', 'marigold', 'rose', 'moringa',
                              'ashwaganda', 'periwinkle', 'isabgol', 'curvy', 'scurvy',
                              'amla', 'withaferine']):
        return "horticulture"
    if any(w in q for w in ['irrigation', 'water', 'drainage', 'canal', 'drip', 'sprinkler',
                              'spray nozzle', 'spray angle', 'pressure', 'tensiometer']):
        return "irrigation"
    if any(w in q for w in ['market', 'price', 'cost', 'profit', 'economics', 'demand', 'supply',
                              'cooperative', 'farm management', 'nabard', 'credit', 'fixed cost',
                              'marginal cost', 'variable cost', 'production function', 'monopoly',
                              'duopoly', 'oligopoly', 'five year plan', 'rural credit',
                              'patent', 'trade mark', 'trade secret', 'solvency', 'liquidity']):
        return "agricultural-economics"
    if any(w in q for w in ['tractor', 'engine', 'wheel', 'machine', 'horsepower', 'combustion',
                              'rpm', 'tillage', 'plough', 'cultivator', 'thresher', 'harvester',
                              'impeller', 'carburetor', 'piston', 'cylinder', 'pump',
                              'horse power', 'stroke', 'indicated horse', 'plan formula',
                              'pudler', 'disc plough', 'mould board', 'chisel plough',
                              'chain line', 'surveying', 'trigonometric', 'reconnaissance',
                              'base line', 'contour', 'ha tractor', 'sheller', 'debearder',
                              'scalper', 'gravity separator', 'drying']):
        return "farm-machinery"
    if any(w in q for w in ['greenhouse', 'polythene', 'polyester', 'pvc', 'cooling', 'storage',
                              'green house', 'lean-to', 'even-span', 'ridge and furrow',
                              'uneven span', 'pipe frame', 'truss frame']):
        return "agronomy"
    if any(w in q for w in ['extension', 'sociometry', 'mandal', 'atma', 'education', 'leader',
                              'democracy', 'village', 'community', 'adult education',
                              'formal education', 'non-formal', 'mass contact', 'personal letter',
                              'leaflet', 'lecture', 'leagans', 'brayne']):
        return "agricultural-extension"
    if any(w in q for w in ['element', 'periodic', 'bond', 'ionic', 'covalent', 'hydrogen bond',
                              'halogen', 'alkali metal', 'molality', 'molarity', 'normality',
                              'mole fraction', 'electro negati', 'dielectric', 'f-block',
                              's-block', 'p-block', 'd-block', 'fluorine', 'chlorine',
                              'iodine', 'sodium', 'calcium', 'magnesium']):
        return "agricultural-chemistry"
    if any(w in q for w in ['crida', 'icar', 'aicrp', 'research institute', 'research project',
                              'coordinated research']):
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
    '// AP AGRICET 2024 – ANGRAU (Acharya N.G. Ranga Agricultural University, Andhra Pradesh)',
    '// Diploma in Agriculture — 120 Questions, 120 Minutes',
    '// Answer key extracted from official color-coded PDF (green tick = correct)',
    'export const PYQ_2024_AP: PYQQuestion[] = [',
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
        f'  {{ id: "pyq24ap_{seq_str}", year: 2024, subject: "{subject}", '
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
for q in raw[:10]:
    qtxt = clean_text(q.get('question', ''))
    opts = [clean_text(o) for o in q.get('options', [])]
    c = q.get('correct', -1)
    print(f"\nQ{q['id']}: {qtxt[:70]}")
    for i, o in enumerate(opts[:4]):
        mark = " CORRECT" if i == c else ""
        print(f"  {'ABCD'[i]}) {o[:55]}{mark}")
