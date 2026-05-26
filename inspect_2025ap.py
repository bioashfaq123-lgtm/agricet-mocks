import fitz

doc = fitz.open(r'D:\Desktop\Previous agricet papers\AGRICET2025_DA_QP.pdf')

# Render pages 2-6 to see full question structure
for pg in [1, 2, 3, 4, 5]:
    page = doc[pg]
    mat = fitz.Matrix(1.5, 1.5)
    pix = page.get_pixmap(matrix=mat, colorspace=fitz.csRGB)
    pix.save(f'C:/Users/bioas/AppData/Local/Temp/ap2025_pg{pg+1}.png')

# Extract text with colors from pages 2-4
for pg_idx in [1, 2, 3]:
    page = doc[pg_idx]
    print(f"\n=== PAGE {pg_idx+1} ===")
    blocks = page.get_text('dict')['blocks']
    for b in blocks:
        if b.get('type') == 0:
            for line in b['lines']:
                for span in line['spans']:
                    color = span.get('color', 0)
                    r = (color >> 16) & 0xFF
                    g = (color >> 8) & 0xFF
                    bl = color & 0xFF
                    txt = span['text'][:80]
                    tag = ""
                    if g > 100 and r < 100 and bl < 100:
                        tag = " <<GREEN=CORRECT>>"
                    elif r > 150 and g < 100:
                        tag = " <<RED=WRONG>>"
                    print(f"  [{r:3d},{g:3d},{bl:3d}]{tag}  {repr(txt)}")

doc.close()
print("\nDone")
