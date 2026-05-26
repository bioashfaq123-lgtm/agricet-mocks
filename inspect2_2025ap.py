import fitz

doc = fitz.open(r'D:\Desktop\Previous agricet papers\AGRICET2025_DA_QP.pdf')

# Extract raw text from pages 2-6 to see question/option content
for pg_idx in range(1, 8):
    page = doc[pg_idx]
    print(f"\n=== PAGE {pg_idx+1} RAW TEXT ===")
    txt = page.get_text('text')
    print(repr(txt))

doc.close()
