"""
Icon v10: red/black layered "material" background + ALL-WHITE text.
- "AEO &" is now WHITE (not gold).
- If public/icon-bg.png exists, it is used as the exact background (cover-cropped
  to square). Otherwise a red/black layered background is drawn to resemble it.
"""
from PIL import Image, ImageDraw, ImageFont
import os

ROOT   = r"C:\Users\bioas\Agricet Mock Test Series"
ICONS  = os.path.join(ROOT, "public", "icons")
PUBLIC = os.path.join(ROOT, "public")
BG_FILE = os.path.join(PUBLIC, "icon-bg.png")   # drop the exact image here to use it

RED   = (204, 20, 20)
RED2  = (184, 24, 24)
WHITE = (255, 255, 255)
GOLD  = (255, 200, 40)

def try_font(pt):
    for p in ["C:/Windows/Fonts/arialbd.ttf", "C:/Windows/Fonts/calibrib.ttf",
              "C:/Windows/Fonts/verdanab.ttf", "C:/Windows/Fonts/ariblk.ttf"]:
        try: return ImageFont.truetype(p, pt)
        except: pass
    return ImageFont.load_default()

def measure(draw, text, font):
    bb = draw.textbbox((0, 0), text, font=font)
    return bb[2]-bb[0], bb[3]-bb[1]

def fit_pt(draw, text, target_w, start):
    pt = start
    while pt > 4:
        if measure(draw, text, try_font(pt))[0] <= target_w:
            break
        pt -= 1
    return pt

def cover_crop(im, size):
    w, h = im.size
    scale = max(size / w, size / h)
    im = im.resize((max(1, round(w*scale)), max(1, round(h*scale))), Image.LANCZOS)
    w, h = im.size
    left, top = (w - size)//2, (h - size)//2
    return im.crop((left, top, left+size, top+size)).convert("RGBA")

def drawn_background(size):
    """Red/black layered sheets resembling the supplied material image."""
    P = lambda *pts: [(int(x*size), int(y*size)) for x, y in pts]
    bg = Image.new("RGBA", (size, size), (13, 13, 13, 255))
    d = ImageDraw.Draw(bg)
    # Red top sheet with a jagged lower edge
    d.polygon(P((0,0),(1,0),(1,0.40),(0.52,0.60),(0,0.46)), fill=RED + (255,))
    # Dark sheet sweeping from the left (depth)
    d.polygon(P((0,0.42),(0.55,0.60),(0.34,1.0),(0,1.0)), fill=(22,22,22,255))
    # Lower-right black sheet (different shade)
    d.polygon(P((0.34,1.0),(0.55,0.60),(1.0,0.80),(1.0,1.0)), fill=(8,8,8,255))
    # Red diagonal sliver across the middle
    d.polygon(P((0.30,0.57),(1.0,0.43),(1.0,0.49),(0.30,0.63)), fill=RED2 + (255,))
    # Subtle black accent over the red sliver tip
    d.polygon(P((0.0,0.46),(0.30,0.57),(0.18,0.70),(0.0,0.62)), fill=(16,16,16,255))
    return bg

def make_icon(size: int) -> Image.Image:
    radius = size // 7
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, size-1, size-1], radius=radius, fill=255)

    if os.path.exists(BG_FILE):
        bg = cover_crop(Image.open(BG_FILE), size)
    else:
        bg = drawn_background(size)
    bg.putalpha(mask)

    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    img.paste(bg, (0, 0), bg)
    draw = ImageDraw.Draw(img)

    big_pt = fit_pt(draw, "AGRICET", int(size*0.82), size)
    aeo_pt = max(6, int(big_pt*0.42))
    med_pt = min(max(6, int(big_pt*0.52)), fit_pt(draw, "MOCK TEST", int(size*0.88), int(big_pt*0.52)))
    f_aeo, f_big, f_med = try_font(aeo_pt), try_font(big_pt), try_font(med_pt)

    h_aeo = measure(draw, "AEO &", f_aeo)[1]
    h_big = measure(draw, "AGRICET", f_big)[1]
    h_med = measure(draw, "SERIES", f_med)[1]
    g1, g2, g3, g4 = int(size*0.03), int(size*0.025), int(size*0.012), int(size*0.04)
    ul_h = max(2, int(size*0.012))
    total = h_aeo + g1 + h_big + g2 + h_med + g3 + h_med + g4 + ul_h
    y = (size - total)//2

    def center(text, font, yy, fill):
        w, _ = measure(draw, text, font)
        x = (size - w)//2
        draw.text((x+max(1,size//220), yy+max(1,size//220)), text, font=font, fill=(0,0,0,170))
        draw.text((x, yy), text, font=font, fill=fill)

    center("AEO &",     f_aeo, y, WHITE); y += h_aeo + g1   # ← AEO now WHITE
    center("AGRICET",   f_big, y, WHITE); y += h_big + g2
    center("MOCK TEST", f_med, y, WHITE); y += h_med + g3
    center("SERIES",    f_med, y, WHITE); y += h_med + g4
    ul_w = int(size*0.42)
    draw.rounded_rectangle([(size-ul_w)//2, y, (size+ul_w)//2, y+ul_h], radius=ul_h//2, fill=GOLD)
    return img


for sz in [72, 96, 128, 144, 152, 192, 384, 512]:
    make_icon(sz).save(os.path.join(ICONS, f"icon-{sz}x{sz}.png"), "PNG")
    print(f"  icon-{sz}x{sz}.png")

ati = make_icon(180)
b = Image.new("RGB", (180, 180), (13,13,13)); b.paste(ati, (0,0), ati)
b.save(os.path.join(PUBLIC, "apple-touch-icon.png"), "PNG"); print("  apple-touch-icon.png")

fav = make_icon(64)
fb = Image.new("RGB", (64, 64), (13,13,13)); fb.paste(fav, (0,0), fav)
fb.save(os.path.join(PUBLIC, "favicon.ico"), "ICO", sizes=[(64,64)]); print("  favicon.ico")

print("\nUsing", "icon-bg.png (your image)" if os.path.exists(BG_FILE) else "drawn red/black background")
print("Done.")
