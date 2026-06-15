"""
Generate all app icons for AEO & AGRICET Mock Test Series.
Clean green/white design matching the website's color scheme.
"""
from PIL import Image, ImageDraw, ImageFont
import os, math

# ── Brand colours (match website primary-green) ────────────────────────────
BG_TOP    = (21,  128,  61)   # green-700
BG_BTM    = (15,   83,  42)   # green-800
GOLD      = (251, 191,  36)   # amber-400
WHITE     = (255, 255, 255)
OFF_WHITE = (220, 252, 231)   # green-100

def make_icon(size: int) -> Image.Image:
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # ── Rounded-rect background with vertical gradient ────────────────────
    radius = size // 6
    # Draw gradient manually (top green → bottom dark green)
    for y in range(size):
        t = y / size
        r = int(BG_TOP[0] * (1 - t) + BG_BTM[0] * t)
        g = int(BG_TOP[1] * (1 - t) + BG_BTM[1] * t)
        b = int(BG_TOP[2] * (1 - t) + BG_BTM[2] * t)
        draw.line([(0, y), (size, y)], fill=(r, g, b, 255))

    # Mask to rounded rect
    mask = Image.new("L", (size, size), 0)
    mdraw = ImageDraw.Draw(mask)
    mdraw.rounded_rectangle([0, 0, size - 1, size - 1], radius=radius, fill=255)
    img.putalpha(mask)
    draw = ImageDraw.Draw(img)

    cx = size // 2


    # ── Wheat icon: simple stylised grain ────────────────────────────────
    icon_cx  = cx
    icon_top = int(size * 0.07)
    icon_h   = int(size * 0.20)
    sw       = max(2, size // 80)

    # central stalk
    draw.line([(icon_cx, icon_top), (icon_cx, icon_top + icon_h)],
              fill=GOLD, width=sw * 2)
    # three pairs of grains
    for i, frac in enumerate([0.30, 0.55, 0.80]):
        y   = icon_top + int(icon_h * frac)
        off = int(icon_h * 0.16)
        r   = max(3, int(size * 0.025))
        draw.ellipse([icon_cx - off - r, y - r, icon_cx - off + r, y + r], fill=GOLD)
        draw.ellipse([icon_cx + off - r, y - r, icon_cx + off + r, y + r], fill=GOLD)
    # tip grain
    r = max(3, int(size * 0.027))
    draw.ellipse([icon_cx - r, icon_top - r, icon_cx + r, icon_top + r], fill=GOLD)

    # ── Text fonts ────────────────────────────────────────────────────────
    def try_font(size_pt):
        for p in ["C:/Windows/Fonts/ariblk.ttf","C:/Windows/Fonts/arialbd.ttf",
                  "C:/Windows/Fonts/calibrib.ttf","C:/Windows/Fonts/verdanab.ttf"]:
            try: return ImageFont.truetype(p, size_pt)
            except: pass
        return ImageFont.load_default()

    f_aeo  = try_font(max(8,  int(size * 0.135)))  # bigger
    f_main = try_font(max(10, int(size * 0.175)))
    f_sub  = try_font(max(6,  int(size * 0.072)))

    def centred(draw, y, text, font, colour):
        bb = draw.textbbox((0, 0), text, font=font)
        w  = bb[2] - bb[0]
        draw.text(((size - w) / 2, y), text, font=font, fill=colour)

    base_y = int(size * 0.295)
    centred(draw, base_y,                     "AEO &",           f_aeo,  WHITE)
    centred(draw, base_y + int(size * 0.145), "AGRICET",         f_main, WHITE)
    centred(draw, base_y + int(size * 0.345), "Mock Test Series",f_sub,  OFF_WHITE)

    # ── Gold underline ────────────────────────────────────────────────────
    line_y = base_y + int(size * 0.425)
    lw2    = int(size * 0.25)
    lh     = max(2, size // 90)
    draw.rounded_rectangle([cx - lw2, line_y, cx + lw2, line_y + lh],
                            radius=lh, fill=GOLD)

    return img


# ── Output paths ──────────────────────────────────────────────────────────
ROOT   = r"C:\Users\bioas\Agricet Mock Test Series"
ICONS  = os.path.join(ROOT, "public", "icons")
PUBLIC = os.path.join(ROOT, "public")

SIZES = [72, 96, 128, 144, 152, 192, 384, 512]

for sz in SIZES:
    icon = make_icon(sz)
    out  = os.path.join(ICONS, f"icon-{sz}x{sz}.png")
    icon.save(out, "PNG")
    print(f"  ✓ icon-{sz}x{sz}.png")

# apple-touch-icon (180 px, no transparency — white bg)
ati = make_icon(180)
bg  = Image.new("RGB", (180, 180), (15, 83, 42))
bg.paste(ati, (0, 0), ati)
bg.save(os.path.join(PUBLIC, "apple-touch-icon.png"), "PNG")
print("  ✓ apple-touch-icon.png")

# favicon.ico (32 px)
fav = make_icon(32)
fav_bg = Image.new("RGB", (32, 32), (21, 128, 61))
fav_bg.paste(fav, (0, 0), fav)
fav_bg.save(os.path.join(PUBLIC, "favicon.ico"), "ICO", sizes=[(32, 32)])
print("  ✓ favicon.ico")

print("\nAll icons generated.")
