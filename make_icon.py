"""
AGRICET Mocks — Icon Generator v3
Red-black geometric, circle-safe zone aware, Airtel-style bold text
"""
from PIL import Image, ImageDraw, ImageFont
import os, math

SIZES  = [72, 96, 128, 144, 152, 192, 384, 512]
PUBLIC = r"C:\Users\bioas\Agricet Mock Test Series\public"
ICONS  = os.path.join(PUBLIC, "icons")

RED   = (220, 28,  28)
RED2  = (180, 14,  14)
BLACK = (8,   8,   8)
DARK  = (20,  20,  20)
WHITE = (255, 255, 255)
GOLD  = (255, 205, 40)

def get_font(pt):
    for fp in [
        r"C:\Windows\Fonts\arialbd.ttf",
        r"C:\Windows\Fonts\verdanab.ttf",
        r"C:\Windows\Fonts\calibrib.ttf",
        r"C:\Windows\Fonts\arial.ttf",
    ]:
        try:
            return ImageFont.truetype(fp, pt)
        except Exception:
            pass
    return ImageFont.load_default()

def p(x, y, s):
    return (int(x * s), int(y * s))

def make_icon(size):
    s  = size
    cx = s // 2
    cy = s // 2

    img  = Image.new("RGB", (s, s), BLACK)
    draw = ImageDraw.Draw(img)

    # ── Geometric background layers ──────────────────────────────────────────
    # Big red quad — top-right sweep
    draw.polygon([p(0,0,s), p(1,0,s), p(1,0.48,s), p(0.62,0.52,s), p(0,0.30,s)], fill=RED)

    # Dark shadow strip 1
    draw.polygon([p(0,0.30,s), p(0.62,0.52,s), p(0.66,0.57,s), p(0,0.35,s)], fill=DARK)

    # Thin red diagonal stripe
    draw.polygon([p(0,0.35,s), p(0.50,0.53,s), p(0.53,0.59,s), p(0,0.41,s)], fill=RED2)

    # Dark shadow strip 2
    draw.polygon([p(0,0.41,s), p(0.53,0.59,s), p(0.55,0.63,s), p(0,0.45,s)], fill=DARK)

    # ── Text block — centred in the CIRCLE safe zone (inner 80%) ─────────────
    # Safe zone circle: radius = 0.40 * s, centre = (cx, cy)
    # We keep text between y = 0.30*s and y = 0.85*s (well inside safe zone)

    lines        = ["AGRICET", "MOCK TEST", "SERIES"]
    size_ratios  = [0.175, 0.103, 0.103]
    gap          = int(s * 0.022)

    # Pre-compute heights
    rendered = []
    for txt, ratio in zip(lines, size_ratios):
        pt   = max(6, int(s * ratio))
        fnt  = get_font(pt)
        bb   = draw.textbbox((0, 0), txt, font=fnt)
        tw   = bb[2] - bb[0]
        # shrink if wider than 72% of icon (safe inside circle)
        if tw > s * 0.72:
            pt  = int(pt * s * 0.72 / tw)
            fnt = get_font(pt)
            bb  = draw.textbbox((0, 0), txt, font=fnt)
        rendered.append((txt, fnt, bb))

    total_h = sum(r[2][3] - r[2][1] for r in rendered) + gap * (len(rendered) - 1)
    y = cy - total_h // 2 + int(s * 0.06)   # slightly below centre (red area is top-heavy)

    for i, (txt, fnt, bb) in enumerate(rendered):
        tw = bb[2] - bb[0]
        th = bb[3] - bb[1]
        tx = cx - tw // 2 - bb[0]
        ty = y - bb[1]

        # Drop shadow
        so = max(1, int(s * 0.005))
        draw.text((tx + so, ty + so), txt, fill=(0, 0, 0), font=fnt)
        # White text
        draw.text((tx, ty), txt, fill=WHITE, font=fnt)
        y += th + gap

    # Gold underline
    line_y = y - gap + int(s * 0.012)
    lw = max(1, int(s * 0.008))
    draw.line([(cx - int(s*0.34), line_y), (cx + int(s*0.34), line_y)],
              fill=GOLD, width=lw)

    return img

os.makedirs(ICONS, exist_ok=True)

for sz in SIZES:
    make_icon(sz).save(os.path.join(ICONS, f"icon-{sz}x{sz}.png"), "PNG")
    print(f"  OK  icon-{sz}x{sz}.png")

make_icon(180).save(os.path.join(PUBLIC, "apple-touch-icon.png"), "PNG")
print("  OK  apple-touch-icon.png")

make_icon(48).save(os.path.join(PUBLIC, "favicon.ico"), "ICO", sizes=[(48, 48)])
print("  OK  favicon.ico")

print("\nAll icons done!")
