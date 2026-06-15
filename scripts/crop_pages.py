"""
Crop page images to remove:
1. Personal info header on page 01 of each paper (top ~325px)
2. "Question ID / Chosen Option" column on ALL pages (right side starting at x=830)
"""
from PIL import Image, ImageDraw
import os, glob

ROOT = r"C:\Users\bioas\Agricet Mock Test Series\public\aeo-papers"
PAPERS = ["p1", "p2", "p3"]

CROP_RIGHT = 830   # keep only left 830px  (removes Question ID / Chosen Option)
CROP_TOP_PAGE1 = 325  # crop this many px from top of page01 (removes personal info table)

processed = 0

for paper in PAPERS:
    pages = sorted(glob.glob(os.path.join(ROOT, paper, f"{paper}_page*.png")))
    for page_path in pages:
        img = Image.open(page_path).convert("RGB")
        w, h = img.size
        fname = os.path.basename(page_path)

        # Determine crop box
        left   = 0
        top    = 0
        right  = min(CROP_RIGHT, w)
        bottom = h

        # For page01: also remove personal info header at top
        if fname.endswith("_page01.png"):
            top = CROP_TOP_PAGE1

        cropped = img.crop((left, top, right, bottom))

        # Save back in-place (overwrite)
        cropped.save(page_path, "PNG", optimize=True)
        processed += 1
        print(f"  {fname}: {w}x{h} -> {right-left}x{bottom-top}")

print(f"\nDone. Processed {processed} images.")
