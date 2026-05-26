"""
Post-process AP 2023 raw OCR JSON:
1. Strip garbled Telugu from question text and options (keep English only)
2. Classify subject
3. Output clean TypeScript file
"""
import json
import re

INPUT_JSON = r'C:\Users\bioas\Agricet Mock Test Series\agricet2023ap_final.json'
OUTPUT_TS  = r'C:\Users\bioas\Agricet Mock Test Series\src\data\pyq2023ap.ts'

def is_garbled_word(w: str) -> bool:
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

    if digits >= 3 and letters == 0:
        return True
    if len(core) >= 3 and digits > 0 and letters > 0 and digits >= letters:
        return True
    if re.search(r'[a-zA-Z]\d[a-zA-Z]', core):
        return True
    if re.match(r'^\d+[a-zA-Z]', core) and len(core) >= 3:
        return True
    if re.search(r'[a-zA-Z]{2,}\d+$', core):
        return True
    if re.search(r'[a-z][A-Z][a-z][A-Z]', core) or re.search(r'[A-Z][a-z][A-Z][a-z][A-Z]', core):
        return True
    if len(core) >= 3 and digits >= 2 and letters >= 1:
        return True
    return False

def clean_text(text: str) -> str:
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
    result = re.sub(r'[\s\-_~()\[\]:.]+$', '', result).strip()
    result = re.sub(r'(\s+\d{2,4})+\s*$', '', result).strip()
    result = re.sub(r'[\s\-_~()\[\]:.]+$', '', result).strip()
    return result if len(result) > 3 else text.strip()

def classify_subject(question: str) -> str:
    q = question.lower()
    if any(w in q for w in ['rainfall', 'monsoon', 'temperature', 'weather', 'climate', 'humidity',
                              'evaporation', 'atmosphere', 'wind', 'rain', 'drought', 'cloud',
                              'troposphere', 'stratosphere', 'isohyet', 'isobar', 'isotherm',
                              'frost', 'dew', 'ozone', 'windvane', 'barometer', 'hygrometer',
                              'solarimeter', 'anemometer', 'sunshine', 'radiation', 'evapotranspiration']):
        return "agro-meteorology"
    if any(w in q for w in ['soil', 'nitrogen', 'phosphorus', 'potassium', 'fertilizer', 'ph',
                              'salinity', 'organic', 'humus', 'horizon', 'gypsum', 'lime',
                              'amendment', 'acidic', 'alkaline', 'nutrient', 'micronutrient',
                              'manure', 'compost', 'vermicompost', 'bone meal', 'reclamation',
                              'erosion', 'texture', 'structure', 'porosity', 'permeability',
                              'cation', 'anion', 'exchange capacity', 'saline', 'sodic']):
        return "soil-science"
    if any(w in q for w in ['seed', 'germination', 'seedling', 'sowing', 'dormancy',
                              'certification', 'purity', 'viability', 'tenderometer',
                              'breeder seed', 'foundation seed', 'tag colour', 'seeds act',
                              'tetrazolium', 'vigour', 'hard seed']):
        return "seed-technology"
    if any(w in q for w in ['pest', 'insect', 'larvae', 'damage', 'bollworm', 'aphid', 'mite',
                              'thrips', 'borer', 'caterpillar', 'hopper', 'worm', 'winged',
                              'polyphagous', 'monophagous', 'pheromone', 'fumigant', 'acaricide',
                              'lepidoptera', 'orthoptera', 'hemiptera', 'coleoptera', 'diptera',
                              'hymenoptera', 'antennae', 'maxillae', 'mandibles', 'metamorphosis',
                              'nymph', 'pupa', 'cocoon', 'silk', 'entomolog', 'insecticide',
                              'pesticide', 'biocontrol', 'predator', 'parasitoid', 'weevil',
                              'beetle', 'fly', 'mosquito', 'locust', 'termite', 'cockroach']):
        return "entomology"
    if any(w in q for w in ['disease', 'fungus', 'bacteria', 'virus', 'blight', 'rust', 'spot',
                              'wilt', 'pathogen', 'mosaic', 'necrosis', 'vein', 'antibiotic',
                              'smut', 'rot', 'canker', 'mildew', 'sclerotia', 'fusarium',
                              'pythium', 'puccinia', 'ustilago', 'phytophthora', 'alternaria',
                              'helminthosporium', 'cercospora', 'fosetyl', 'metalaxyl', 'karathane',
                              'fungicide', 'bactericide', 'seed treatment', 'systemic', 'contact']):
        return "plant-pathology"
    if any(w in q for w in ['gene', 'chromosome', 'hybrid', 'variety', 'breeding', 'cross',
                              'pollination', 'heterosis', 'mutation', 'genetic', 'sterility',
                              'cms', 'cgms', 'gms', 'detasselling', 'selfing', 'nipping',
                              'cytoplasmic', 'nuclear', 'harvest index', 'polyploidy', 'ploidy',
                              'haploid', 'diploid', 'triploid', 'allele', 'dominant', 'recessive']):
        return "genetics"
    if any(w in q for w in ['tree', 'forest', 'timber', 'agroforestry', 'silviculture',
                              'dendrology', 'taungya', 'shelterbelt', 'windbreak', 'agri-silvi',
                              'silvi pastoral', 'horti pastoral', 'agri-horti', 'forest cover',
                              'ecological balance', 'wood', 'bamboo', 'teak', 'neem', 'eucalyptus']):
        return "agroforestry"
    if any(w in q for w in ['fruit', 'vegetable', 'horticulture', 'orchard', 'pruning',
                              'grafting', 'mango', 'banana', 'papaya', 'guava', 'citrus',
                              'pomegranate', 'apple', 'grapes', 'sucker', 'dehorning',
                              'brinjal', 'cauliflower', 'onion', 'tomato', 'chilli', 'potato',
                              'carrot', 'flower', 'rose', 'jasmine', 'marigold', 'gladiolus',
                              'tuber', 'rhizome', 'corm', 'bulb', 'cutting', 'layering']):
        return "horticulture"
    if any(w in q for w in ['irrigation', 'water', 'drainage', 'canal', 'drip', 'sprinkler',
                              'spray nozzle', 'tensiometer', 'water hyacinth', 'hydro project',
                              'channel', 'watershed', 'runoff', 'infiltration', 'percolation']):
        return "irrigation"
    if any(w in q for w in ['market', 'price', 'cost', 'profit', 'economics', 'demand', 'supply',
                              'cooperative', 'farm management', 'nabard', 'credit', 'fixed cost',
                              'marginal cost', 'variable cost', 'revenue', 'balance sheet',
                              'break-even', 'monopoly', 'oligopoly', 'five year plan',
                              'rural credit', 'insurance', 'subsidy', 'loan']):
        return "agricultural-economics"
    if any(w in q for w in ['tractor', 'engine', 'wheel', 'machine', 'horsepower', 'combustion',
                              'tillage', 'plough', 'cultivator', 'thresher', 'harvester',
                              'impeller', 'carburetor', 'piston', 'cylinder', 'pump',
                              'implement', 'disc', 'chisel', 'pudler', 'mould board',
                              'surveying', 'drying', 'threshing', 'winnowing', 'milling']):
        return "farm-machinery"
    if any(w in q for w in ['greenhouse', 'polythene', 'pvc', 'storage', 'green house',
                              'lean-to', 'even-span', 'ridge', 'furrow', 'pipe frame']):
        return "agronomy"
    if any(w in q for w in ['extension', 'sociometry', 'mandal', 'atma', 'education', 'leader',
                              'democracy', 'village', 'community', 'adult education',
                              'formal education', 'non-formal', 'mass contact', 'leaflet',
                              'lecture', 'etawah', 'nilokheri', 'programme', 'project',
                              'adoption', 'diffusion', 'innovation', 'feedback', 'communication',
                              'greek', 'spanish', 'french', 'latin', 'agricola']):
        return "agricultural-extension"
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
    '// AP AGRICET 2023 – ANGRAU (Acharya N.G. Ranga Agricultural University, Andhra Pradesh)',
    '// Diploma in Agriculture — Answer key extracted from official color-coded PDF (green = correct)',
    'export const PYQ_2023_AP: PYQQuestion[] = [',
]

valid = 0
skipped = 0
for q in raw:
    qid     = q.get('id', valid + 1)
    raw_q   = q.get('question', '')
    opts    = q.get('options', [])
    correct = q.get('correct', -1)

    qtxt = clean_text(raw_q)
    if len(qtxt) < 8:
        print(f"  SKIP Q{qid}: question too short: {repr(qtxt)}")
        skipped += 1
        continue

    cleaned_opts = [clean_text(o) for o in opts]
    cleaned_opts = [o for o in cleaned_opts if len(o) > 1]

    if len(cleaned_opts) < 2:
        print(f"  SKIP Q{qid}: too few options")
        skipped += 1
        continue

    while len(cleaned_opts) < 4:
        cleaned_opts.append(f"Option {len(cleaned_opts)+1}")

    subject = classify_subject(qtxt)
    seq_str = str(valid + 1).zfill(3)

    opts_ts = ', '.join(f'"{escape_ts(o)}"' for o in cleaned_opts[:4])
    lines.append(
        f'  {{ id: "pyq23ap_{seq_str}", year: 2023, subject: "{subject}", '
        f'question: "{escape_ts(qtxt)}", '
        f'options: [{opts_ts}], '
        f'correct: {correct}, explanation: "" }},'
    )
    valid += 1

lines.append('];')
lines.append('')

with open(OUTPUT_TS, 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

print(f"Output: {valid} questions written to {OUTPUT_TS} ({skipped} skipped)")

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
