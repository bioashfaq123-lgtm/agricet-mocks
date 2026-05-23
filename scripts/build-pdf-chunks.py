"""
Build a chunked JSON index from the 17 PDF text files.
Each chunk is ~500 chars of text with subject metadata.
Output: src/data/pdf-chunks.json
"""
import sys, os, re, json
sys.stdout.reconfigure(encoding='utf-8')

BASE = r"C:\Users\bioas\Agricet Mock Test Series"
OUTPUT = os.path.join(BASE, "src", "data", "pdf-chunks.json")

SUBJECT_MAP = {
    "pdf_da101.txt": {"id": "da-101", "name": "Principles of Agronomy"},
    "pdf_da102.txt": {"id": "da-102", "name": "Agricultural Meteorology"},
    "pdf_da111.txt": {"id": "da-111", "name": "Principles of Plant Pathology"},
    "pdf_da121.txt": {"id": "da-121", "name": "Principles of Entomology"},
    "pdf_da122.txt": {"id": "da-122", "name": "Beneficial Insects"},
    "pdf_da131.txt": {"id": "da-131", "name": "Soil Science"},
    "pdf_da132.txt": {"id": "da-132", "name": "Crop Protection Chemicals"},
    "pdf_da151.txt": {"id": "da-151", "name": "Principles of Plant Breeding"},
    "pdf_da171.txt": {"id": "da-171", "name": "Seed Technology"},
    "pdf_da201.txt": {"id": "da-201", "name": "Farm Management & Agricultural Economics"},
    "pdf_da241.txt": {"id": "da-241", "name": "Agricultural Economics"},
    "pdf_da252.txt": {"id": "da-252", "name": "Soil Fertility and Fertilizers"},
    "pdf_da262.txt": {"id": "da-262", "name": "Computer Applications in Agriculture"},
    "pdf_da263.txt": {"id": "da-263", "name": "English Communication Skills"},
    "pdf_da281.txt": {"id": "da-281", "name": "Horticulture"},
    "pdf_da282.txt": {"id": "da-282", "name": "Post Harvest Technology"},
    "pdf_da291.txt": {"id": "da-291", "name": "Agricultural Extension Education"},
}

CHUNK_SIZE = 600  # characters per chunk
OVERLAP = 100     # overlap between chunks

def clean_text(text):
    """Clean up extracted PDF text."""
    # Remove multiple blank lines
    text = re.sub(r'\n{3,}', '\n\n', text)
    # Remove page numbers (lines with just a number)
    text = re.sub(r'^\s*\d+\s*$', '', text, flags=re.MULTILINE)
    # Normalize whitespace
    text = re.sub(r'[ \t]+', ' ', text)
    return text.strip()

def chunk_text(text, chunk_size=CHUNK_SIZE, overlap=OVERLAP):
    """Split text into overlapping chunks at sentence/paragraph boundaries."""
    chunks = []
    # Decide split granularity based on content
    if text.count('\n\n') > 5:
        paragraphs = re.split(r'\n\n+', text)
    else:
        # File has only single newlines — treat each line as a paragraph
        # But group short lines together
        raw_lines = text.split('\n')
        paragraphs = []
        buf = ""
        for ln in raw_lines:
            ln = ln.strip()
            if not ln:
                if buf:
                    paragraphs.append(buf)
                    buf = ""
                continue
            buf = (buf + " " + ln).strip() if buf else ln
            if len(buf) >= 300:
                paragraphs.append(buf)
                buf = ""
        if buf:
            paragraphs.append(buf)

    current_chunk = ""
    for para in paragraphs:
        para = para.strip()
        if not para:
            continue

        if len(current_chunk) + len(para) + 2 <= chunk_size:
            current_chunk = (current_chunk + "\n\n" + para).strip()
        else:
            if current_chunk:
                chunks.append(current_chunk)
            # Start new chunk with overlap from previous
            if current_chunk and len(current_chunk) > overlap:
                overlap_text = current_chunk[-overlap:].strip()
                current_chunk = overlap_text + "\n\n" + para
            else:
                current_chunk = para

    if current_chunk:
        chunks.append(current_chunk)

    return chunks

all_chunks = []
total = 0
for fname, subject in SUBJECT_MAP.items():
    fpath = os.path.join(BASE, fname)
    if not os.path.exists(fpath):
        print(f"  MISSING: {fname}")
        continue

    with open(fpath, encoding='utf-8', errors='replace') as f:
        text = f.read()

    text = clean_text(text)
    chunks = chunk_text(text)

    for i, chunk_text_val in enumerate(chunks):
        all_chunks.append({
            "id": f"{subject['id']}-{i:04d}",
            "subjectId": subject['id'],
            "subjectName": subject['name'],
            "text": chunk_text_val,
        })

    total += len(chunks)
    print(f"  {fname}: {len(chunks)} chunks")

print(f"\nTotal: {total} chunks from 17 subjects")

# Write to output file
os.makedirs(os.path.dirname(OUTPUT), exist_ok=True)
with open(OUTPUT, 'w', encoding='utf-8') as f:
    json.dump({"chunks": all_chunks, "total": total}, f, ensure_ascii=False, separators=(',', ':'))

size_mb = os.path.getsize(OUTPUT) / 1024 / 1024
print(f"Written to: {OUTPUT}")
print(f"File size: {size_mb:.2f} MB")
