"""
Restore original red/black icon design but add "AEO &" text in white bold.
Original layout:
 - Top half: Red (#D32F2F style)
 - Diagonal black slash across middle
 - Bottom half: Black
 - Gold underline
 - Text: "AEO &" (new, white bold) + "AGRICET" + "MOCK TEST SERIES"
"""
from PIL import Image, ImageDraw, ImageFont
import os, math

RED    = (204,  20,  20)   # rich red
BLACK  = (18,   18,  18)   # near-black
WHITE  = (255, 255, 255)
GOLD   = (240, 185,  30)   # gold underline

def make_icon(size: int) -> Image.Image:
    img  = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    radius = size // 8

    # ── Rounded-rect mask ────────────────────────────────────────────────
    mask = Image.new("L", (size, size), 0)
    mdraw = ImageDraw.Draw(mask)
    mdraw.rounded_rectangle([0, 0, size-1, size-1], radius=radius, fill=255)

    # ── Background: red top half ──────────────────────────────────────────
    draw.rectangle([0, 0, size, size], fill=RED)

    # ── Diagonal black band across middle (like original) ────────────────
    # The diagonal goes from bottom-left to upper-right, cutting the icon
    slash_w = int(size * 0.18)
    # Points for a parallelogram going from bottom-left area to top-right area
    mid_y = int(size * 0.48)
    draw.polygon([
        (0,           mid_y - int(size*0.05)),
        (size,        mid_y - int(size*0.38)),
        (size,        mid_y - int(size*0.38) + slash_w),
        (0,           mid_y - int(size*0.05) + slash_w),
    ], fill=BLACK)

    # ── Black bottom half ─────────────────────────────────────────────────
    bottom_start = int(size * 0.46)
    draw.rectangle([0, bottom_start, size, size], fill=BLACK)

    # ── Apply rounded mask ────────────────────────────────────────────────
    img.putalpha(mask)
    draw = ImageDraw.Draw(img)

    # ── Fonts ─────────────────────────────────────────────────────────────
    def try_font(pt):
        for p in ["C:/Windows/Fonts/ariblk.ttf", "C:/Windows/Fonts/arialbd.ttf",
                  "C:/Windows/Fonts/calibrib.ttf", "C:/Windows/Fonts/verdanab.ttf"]:
            try: return ImageFont.truetype(p, pt)
            except: pass
        return ImageFont.load_default()

    # "AEO &" — new addition, white bold, sits in the red zone
    f_aeo     = try_font(max(8,  int(size * 0.14)))
    # "AGRICET" — original large text
    f_agricet = try_font(max(10, int(size * 0.195)))
    # "MOCK TEST SERIES" — original smaller text
    f_sub     = try_font(max(6,  int(size * 0.095)))

    def centred(draw, y, text, font, colour):
        bb = draw.textbbox((0, 0), text, font=font)
        w  = bb[2] - bb[0]
        draw.text(((size - w) / 2, y), text, font=font, fill=colour)

    cx = size // 2

    # Vertical layout — place text in lower black zone
    text_top = int(size * 0.44)

    centred(draw, text_top,                      "AEO &",          f_aeo,     WHITE)
    centred(draw, text_top + int(size * 0.15),   "AGRICET",        f_agricet, WHITE)
    centred(draw, text_top + int(size * 0.36),   "MOCK TEST",      f_sub,     WHITE)
    centred(draw, text_top + int(size * 0.465),  "SERIES",         f_sub,     WHITE)

    # ── Gold underline ────────────────────────────────────────────────────
    line_y = text_top + int(size * 0.57)
    lw2    = int(size * 0.28)
    lh     = max(2, size // 80)
    draw.rounded_rectangle([cx - lw2, line_y, cx + lw2, line_y + lh],
                            radius=lh, fill=GOLD)

    return img


ROOT   = r"C:\Users\bioas\Agricet Mock Test Series"
ICONS  = os.path.join(ROOT, "public", "icons")
PUBLIC = os.path.join(ROOT, "public")

SIZES = [72, 96, 128, 144, 152, 192, 384, 512]

for sz in SIZES:
    icon = make_icon(sz)
    out  = os.path.join(ICONS, f"icon-{sz}x{sz}.png")
    icon.save(out, "PNG")
    print(f"  saved icon-{sz}x{sz}.png")

# apple-touch-icon (180px, solid bg)
ati = make_icon(180)
bg  = Image.new("RGB", (180, 180), BLACK)
bg.paste(ati, (0, 0), ati)
bg.save(os.path.join(PUBLIC, "apple-touch-icon.png"), "PNG")
print("  saved apple-touch-icon.png")

# favicon.ico (32px)
fav = make_icon(32)
fav_bg = Image.new("RGB", (32, 32), RED)
fav_bg.paste(fav, (0, 0), fav)
fav_bg.save(os.path.join(PUBLIC, "favicon.ico"), "ICO", sizes=[(32, 32)])
print("  saved favicon.ico")

print("\nAll icons generated.")
