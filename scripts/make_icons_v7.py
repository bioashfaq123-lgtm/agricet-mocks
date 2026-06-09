"""
Icon v7: Clean Airtel-style — solid red circle, bold white text, very clear.
"""
from PIL import Image, ImageDraw, ImageFont
import os

RED   = (190, 10, 10)
WHITE = (255, 255, 255)

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
    # Full circle mask
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).ellipse([0, 0, size-1, size-1], fill=255)

    # Solid red background
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    bg  = Image.new("RGBA", (size, size), RED + (255,))
    bg.putalpha(mask)
    img.paste(bg, (0, 0), bg)

    draw = ImageDraw.Draw(img)

    # Auto-fit: all 4 lines same font, widest line fits in 80% of circle width
    target_w = int(size * 0.80)
    pt = size
    while pt > 4:
        f = try_font(pt)
        if max(measure(draw, line, f)[0] for line in LINES) <= target_w:
            break
        pt -= 1
    font = try_font(pt)

    lh  = measure(draw, "AGRICET", font)[1]
    gap = int(lh * 0.18)
    n   = len(LINES)
    total_h = n * lh + (n - 1) * gap
    top = (size - total_h) // 2

    for i, line in enumerate(LINES):
        w = measure(draw, line, font)[0]
        x = (size - w) // 2
        y = top + i * (lh + gap)
        draw.text((x, y), line, font=font, fill=WHITE)

    return img


ROOT   = r"C:\Users\bioas\Agricet Mock Test Series"
ICONS  = os.path.join(ROOT, "public", "icons")
PUBLIC = os.path.join(ROOT, "public")

for sz in [72, 96, 128, 144, 152, 192, 384, 512]:
    make_icon(sz).save(os.path.join(ICONS, f"icon-{sz}x{sz}.png"), "PNG")
    print(f"  icon-{sz}x{sz}.png")

ati = make_icon(180)
bg  = Image.new("RGB", (180, 180), RED)
bg.paste(ati, (0, 0), ati)
bg.save(os.path.join(PUBLIC, "apple-touch-icon.png"), "PNG")
print("  apple-touch-icon.png")

fav = make_icon(32)
fav_bg = Image.new("RGB", (32, 32), RED)
fav_bg.paste(fav, (0, 0), fav)
fav_bg.save(os.path.join(PUBLIC, "favicon.ico"), "ICO", sizes=[(32, 32)])
print("  favicon.ico")

print("\nDone.")
