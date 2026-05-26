"""
Inspect AGRICET 2023 AP PDF structure to check if it's the same ANGRAU format
with embedded JPEG images and color-coded answers.
"""
import fitz
import re

doc = fitz.open(r'D:\Desktop\Previous agricet papers\AGRICET2023_DA_QP.pdf')
print(f"Pages: {len(doc)}")

# Check first few pages
for pg_idx in range(1, 8):
    page = doc[pg_idx]
    print(f"\n=== PAGE {pg_idx+1} ===")
    blocks = page.get_text('dict')['blocks']
    for b in blocks:
        btype = b.get('type')
        if btype == 1:
            print(f"  IMAGE {b.get('width')}x{b.get('height')} ext={b.get('ext')}")
        elif btype == 0:
            for line in b['lines']:
                for span in line['spans']:
                    txt = span['text'].strip()
                    if not txt or txt == '\xa0':
                        continue
                    color = span.get('color', 0)
                    r = (color >> 16) & 0xFF
                    g = (color >> 8) & 0xFF
                    bl = color & 0xFF
                    tag = ""
                    if g >= 100 and r < 100 and bl < 100:
                        tag = " <<GREEN>>"
                    elif r > 150 and g < 100:
                        tag = " <<RED>>"
                    print(f"  TEXT [{r},{g},{bl}]{tag}: {repr(txt[:80])}")

doc.close()
