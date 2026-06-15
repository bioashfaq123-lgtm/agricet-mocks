"""
Clean bold icon — Airtel Thanks style.
4 lines, all same bold font, auto-sized so widest line fits comfortably.
Lines: AEO & / AGRICET / MOCK TEST / SERIES
Solid deep red rounded background + gold underline.
"""
from PIL import Image, ImageDraw, ImageFont
import os

BG    = (185, 12, 12)
WHITE = (255, 255, 255)
GOLD  = (255, 200, 30)

LINES = ["AEO &", "AGRICET", "MOCK TEST", "SERIES"]

def try_font(pt):
    for p in ["C:/Windows/Fonts/ariblk.ttf", "C:/Windows/Fonts/arialbd.ttf",
              "C:/Windows/Fonts/calibrib.ttf", "C:/Windows/Fonts/verdanab.ttf"]:
        try: return ImageFont.truetype(p, pt)
        except: pass
    return ImageFont.load_default()

def measure(draw, text, font):
    bb = draw.textbbox((0, 0), text, font=font)
    return bb[2]-bb[0], bb[3]-bb[1]

def make_icon(size: int) -> Image.Image:
    img  = Image.new("RGBA", (size, size), (0,0,0,0))
    draw = ImageDraw.Draw(img)

    # Rounded rect background
    radius = size // 7
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, size-1, size-1], radius=radius, fill=255)
    base = Image.new("RGBA", (size, size), BG + (255,))
    base.putalpha(mask)
    img.paste(base, (0, 0), base)
    draw = ImageDraw.Draw(img)

    cx = size // 2

    # ── Auto-fit: find largest pt where ALL lines fit within 88% width ────
    target_w = int(size * 0.88)
    pt = size
    while pt > 4:
        f = try_font(pt)
        widths = [measure(draw, line, f)[0] for line in LINES]
        if max(widths) <= target_w:
            break
        pt -= 1

    font = try_font(pt)

    # Line height + tight spacing
    _, lh = measure(draw, "AGRICET", font)
    gap   = int(lh * 0.15)

    n = len(LINES)
    total_text_h = n * lh + (n - 1) * gap
    gold_h = int(size * 0.025)
    gold_gap = int(size * 0.025)
    total_h = total_text_h + gold_gap + gold_h

    top = (size - total_h) // 2

    for i, line in enumerate(LINES):
        w, _ = measure(draw, line, font)
        x = (size - w) // 2
        y = top + i * (lh + gap)
        draw.text((x, y), line, font=font, fill=WHITE)

    # Gold underline
    line_y = top + total_text_h + gold_gap
    lw2    = int(size * 0.30)
    lthk   = max(2, size // 70)
    draw.rounded_rectangle([cx-lw2, line_y, cx+lw2, line_y+lthk],
                            radius=lthk, fill=GOLD)

    return img


ROOT   = r"C:\Users\bioas\Agricet Mock Test Series"
ICONS  = os.path.join(ROOT, "public", "icons")
PUBLIC = os.path.join(ROOT, "public")

for sz in [72, 96, 128, 144, 152, 192, 384, 512]:
    make_icon(sz).save(os.path.join(ICONS, f"icon-{sz}x{sz}.png"), "PNG")
    print(f"  icon-{sz}x{sz}.png")

ati = make_icon(180)
bg  = Image.new("RGB", (180, 180), BG)
bg.paste(ati, (0, 0), ati)
bg.save(os.path.join(PUBLIC, "apple-touch-icon.png"), "PNG")
print("  apple-touch-icon.png")

fav = make_icon(32)
fav_bg = Image.new("RGB", (32, 32), BG)
fav_bg.paste(fav, (0, 0), fav)
fav_bg.save(os.path.join(PUBLIC, "favicon.ico"), "ICO", sizes=[(32, 32)])
print("  favicon.ico")

print("\nDone.")
