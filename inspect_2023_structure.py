"""
Inspect the exact image ordering and y-positions in AGRICET 2023 AP PDF
to understand: question text, option text, and correctness icon layout.
"""
import fitz
import io
from PIL import Image
import numpy as np

doc = fitz.open(r'D:\Desktop\Previous agricet papers\AGRICET2023_DA_QP.pdf')

# Render page 5 and 6 as reference
for pg_idx in [4, 5]:
    page = doc[pg_idx]
    mat = fitz.Matrix(1.5, 1.5)
    pix = page.get_pixmap(matrix=mat)
    pix.save(f'C:/Users/bioas/AppData/Local/Temp/ap2023_pg{pg_idx+1}.png')

# Detailed block analysis on page 5 with bounding box info
print("=== PAGE 5 BLOCK ANALYSIS (with Y positions) ===")
page = doc[4]
blocks = page.get_text('dict', flags=fitz.TEXT_PRESERVE_IMAGES)['blocks']

def dominant_color(img_bytes):
    try:
        img = Image.open(io.BytesIO(img_bytes)).convert('RGB')
        arr = np.array(img)
        r, g, b = arr[:,:,0].mean(), arr[:,:,1].mean(), arr[:,:,2].mean()
        if g > r + 20 and g > b + 20:
            return "GREEN"
        elif r > g + 20 and r > b + 20:
            return "RED"
        else:
            return f"OTHER(R={r:.0f},G={g:.0f},B={b:.0f})"
    except:
        return "ERR"

for b in blocks:
    btype = b.get('type')
    bbox = b.get('bbox', [0,0,0,0])
    y1 = bbox[1]
    w = b.get('width', 0)
    h = b.get('height', 0)
    if btype == 1:
        img_b = b.get('image', b'')
        ext = b.get('ext', '')
        color = dominant_color(img_b)
        print(f"  y={y1:6.1f}  IMAGE {w:4d}x{h:3d} {ext} {color}")
    elif btype == 0:
        txt = ' '.join(s['text'] for l in b['lines'] for s in l['spans']).strip()
        if txt:
            print(f"  y={y1:6.1f}  TEXT  {repr(txt[:60])}")

doc.close()
print("\nDone")
