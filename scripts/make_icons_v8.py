"""
Icon v8: Red/black diagonal background + clean bold white text (all same size, very clear)
"""
from PIL import Image, ImageDraw, ImageFont
import os

RED   = (204, 20, 20)
BLACK = (18, 18, 18)
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
    # ── Rounded rect mask ─────────────────────────────────────────────────
    radius = size // 7
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, size-1, size-1], radius=radius, fill=255)

    # ── Background: black base ─────────────────────────────────────────────
    bg = Image.new("RGBA", (size, size), BLACK + (255,))
    bd = ImageDraw.Draw(bg)

    # ── Red top-left large polygon ─────────────────────────────────────────
    bd.polygon([
        (0, 0),
        (size, 0),
        (size, int(size * 0.38)),
        (int(size * 0.50), int(size * 0.62)),
        (0, int(size * 0.50)),
    ], fill=RED)

    # ── Thin red diagonal streak ───────────────────────────────────────────
    sw = int(size * 0.06)
    bd.polygon([
        (int(size * 0.35), int(size * 0.54)),
        (size,             int(size * 0.44)),
        (size,             int(size * 0.44) + sw),
        (int(size * 0.35), int(size * 0.54) + sw),
    ], fill=RED)

    # ── Apply rounded mask ─────────────────────────────────────────────────
    bg.putalpha(mask)
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    img.paste(bg, (0, 0), bg)
    draw = ImageDraw.Draw(img)

    # ── Auto-fit: all 4 lines same font, widest fits in 84% width ─────────
    target_w = int(size * 0.84)
    pt = size
    while pt > 4:
        f = try_font(pt)
        if max(measure(draw, line, f)[0] for line in LINES) <= target_w:
            break
        pt -= 1
    font = try_font(pt)

    lh  = measure(draw, "MOCK TEST", font)[1]
    gap = int(lh * 0.18)
    n   = len(LINES)
    total_h = n * lh + (n - 1) * gap
    top = (size - total_h) // 2

    for i, line in enumerate(LINES):
        w = measure(draw, line, font)[0]
        x = (size - w) // 2
        y = top + i * (lh + gap)
        # Shadow for readability over mixed background
        draw.text((x + 2, y + 2), line, font=font, fill=(0, 0, 0, 180))
        draw.text((x, y), line, font=font, fill=WHITE)

    return img


ROOT   = r"C:\Users\bioas\Agricet Mock Test Series"
ICONS  = os.path.join(ROOT, "public", "icons")
PUBLIC = os.path.join(ROOT, "public")

for sz in [72, 96, 128, 144, 152, 192, 384, 512]:
    make_icon(sz).save(os.path.join(ICONS, f"icon-{sz}x{sz}.png"), "PNG")
    print(f"  icon-{sz}x{sz}.png")

ati = make_icon(180)
bg  = Image.new("RGB", (180, 180), BLACK)
bg.paste(ati, (0, 0), ati)
bg.save(os.path.join(PUBLIC, "apple-touch-icon.png"), "PNG")
print("  apple-touch-icon.png")

fav = make_icon(32)
fav_bg = Image.new("RGB", (32, 32), BLACK)
fav_bg.paste(fav, (0, 0), fav)
fav_bg.save(os.path.join(PUBLIC, "favicon.ico"), "ICO", sizes=[(32, 32)])
print("  favicon.ico")

print("\nDone.")
