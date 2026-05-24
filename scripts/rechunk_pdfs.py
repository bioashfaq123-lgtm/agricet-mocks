"""
Re-chunk all 17 PJTSAU Diploma in Agriculture PDFs with correct subject labels.
Output: src/data/pdf-chunks.json
"""
import json
import re
import os
import pdfplumber

# Map: filename pattern → (subjectId, subjectName)
# subjectName is based on ACTUAL CONTENT of the file (not the course-code label on the filename).
# The university PDFs have wrong course codes on some files, so we label by what they contain.
#
# Verified content per file:
#  DA 101  → Principles of Agronomy                   ✓
#  DA 102  → Agricultural Meteorology / Crop Prod-I   ✓
#  DA-111  → Plant Breeding & Seed Production          (file says DA-111/Plant Path but content is Plant Breeding)
#  DA 122  → Manures and Fertilizers                   ✓
#  DA-121  → Soil Science and Chemistry                (file says DA-121/Entomology but content is Soil)
#  DA-131  → Principles of Entomology                  (file says DA-131/Soil Science but content is Entomology)
#  DA-132  → Crop Protection Chemicals                 ✓
#  DA-151  → Farm Machinery and Power                  ✓
#  DA171   → Plant Pathology and Crop Diseases         (file says DA-171/Seed Tech but content is Plant Pathology)
#  DA 201  → Crop Production II                        (file says DA-201/Farm Mgmt but content is Crop Prod-II)
#  DA-241  → Agricultural Economics and Farm Mgmt      ✓
#  DA-252  → Land Surveying and Water Engineering      (file says Soil Fertility but content is Land Surveying)
#  DA-262  → Computer Applications in Agriculture      ✓
#  DA-263  → English Communication Skills              ✓
#  DA 282  → Horticultural Crops                       (file says Post Harvest but content is Horticulture)
#  DA 281  → Forestry and Medicinal Plants             (file says Horticulture but content is Forestry)
#  Extension → Agricultural Extension Education        ✓
PDF_MAP = [
    ("DA 101",       "da-101", "Principles of Agronomy"),
    ("DA 102",       "da-102", "Agricultural Meteorology"),
    ("DA-111",       "da-111", "Plant Breeding and Seed Production"),
    ("DA 122",       "da-122", "Manures and Fertilizers"),
    ("DA-121",       "da-121", "Soil Science and Chemistry"),
    ("DA-131",       "da-131", "Principles of Entomology"),
    ("DA-132",       "da-132", "Crop Protection Chemicals"),
    ("DA-151",       "da-151", "Farm Machinery and Power"),
    ("DA171",        "da-171", "Plant Pathology and Crop Diseases"),
    ("DA 201",       "da-201", "Crop Production II"),
    ("DA-241",       "da-241", "Agricultural Economics and Farm Management"),
    ("DA-252",       "da-252", "Land Surveying and Water Engineering"),
    ("DA-262",       "da-262", "Computer Applications in Agriculture"),
    ("DA-263",       "da-263", "English Communication Skills"),
    ("DA 282",       "da-282", "Horticultural Crops"),
    ("DA 281",       "da-281", "Forestry and Medicinal Plants"),
    ("Extension",    "da-291", "Agricultural Extension Education"),
]

PDF_DIR = r"D:\Desktop\APT Notes\Diploma courses"
OUT_FILE = r"C:\Users\bioas\Agricet Mock Test Series\src\data\pdf-chunks.json"

CHUNK_WORDS = 350   # target words per chunk (larger = fewer splits of important content)
OVERLAP_WORDS = 70  # overlap between chunks (more overlap = better context continuity)


def clean_text(text: str) -> str:
    """Remove excessive whitespace, fix common OCR artifacts."""
    if not text:
        return ""
    # Normalise line endings
    text = text.replace("\r\n", "\n").replace("\r", "\n")
    # Collapse runs of blank lines to single blank line
    text = re.sub(r"\n{3,}", "\n\n", text)
    # Remove page headers/footers that are just numbers
    text = re.sub(r"(?m)^\s*\d+\s*$", "", text)
    # Collapse multiple spaces
    text = re.sub(r"[ \t]+", " ", text)
    return text.strip()


def split_into_chunks(text: str, subject_id: str, subject_name: str, chunk_words=CHUNK_WORDS, overlap=OVERLAP_WORDS):
    """Split text into overlapping word-based chunks."""
    words = text.split()
    chunks = []
    chunk_id = 0
    i = 0
    while i < len(words):
        window = words[i : i + chunk_words]
        chunk_text = " ".join(window).strip()
        if len(chunk_text) >= 80:   # skip tiny fragments
            chunks.append({
                "id": f"{subject_id}-{chunk_id:04d}",
                "subjectId": subject_id,
                "subjectName": subject_name,
                "text": chunk_text,
            })
            chunk_id += 1
        i += chunk_words - overlap
    return chunks


def find_pdf(name_pattern: str) -> str | None:
    """Find PDF file whose name contains the given pattern."""
    for fname in os.listdir(PDF_DIR):
        if name_pattern.lower() in fname.lower() and fname.lower().endswith(".pdf"):
            return os.path.join(PDF_DIR, fname)
    return None


def extract_text(pdf_path: str) -> str:
    """Extract all text from PDF using pdfplumber."""
    pages_text = []
    with pdfplumber.open(pdf_path) as pdf:
        total = len(pdf.pages)
        print(f"  {total} pages", end="", flush=True)
        for i, page in enumerate(pdf.pages):
            try:
                t = page.extract_text() or ""
                pages_text.append(t)
            except Exception as e:
                print(f"\n  [page {i+1} error: {e}]", end="")
    return "\n\n".join(pages_text)


def main():
    all_chunks = []
    errors = []

    for (pattern, subject_id, subject_name) in PDF_MAP:
        pdf_path = find_pdf(pattern)
        if not pdf_path:
            print(f"❌ NOT FOUND: {pattern}")
            errors.append(pattern)
            continue

        fname = os.path.basename(pdf_path)
        print(f"\n[PDF] {fname}")
        print(f"   -> {subject_id} | {subject_name}", end=" ")

        try:
            raw_text = extract_text(pdf_path)
            cleaned = clean_text(raw_text)
            word_count = len(cleaned.split())
            chunks = split_into_chunks(cleaned, subject_id, subject_name)
            all_chunks.extend(chunks)
            print(f"\n   OK {word_count:,} words -> {len(chunks)} chunks")
        except Exception as e:
            print(f"\n   ERROR: {e}")
            errors.append(fname)

    print(f"\n\n{'='*60}")
    print(f"Total chunks: {len(all_chunks)}")
    print(f"Subjects processed: {len(PDF_MAP) - len(errors)}/{len(PDF_MAP)}")
    if errors:
        print(f"Errors/missing: {errors}")

    # Save output
    output = {"chunks": all_chunks}
    with open(OUT_FILE, "w", encoding="utf-8") as f:
        json.dump(output, f, ensure_ascii=False, indent=2)

    size_mb = os.path.getsize(OUT_FILE) / (1024 * 1024)
    print(f"\nSaved: {OUT_FILE}")
    print(f"Size: {size_mb:.1f} MB | Chunks: {len(all_chunks)}")


if __name__ == "__main__":
    main()
