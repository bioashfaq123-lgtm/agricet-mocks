"""
Icon v6: Red/black diagonal design (like website banner)
- AEO & : small, WHITE font
- AGRICET : large, WHITE bold
- MOCK TEST : medium, WHITE bold
- SERIES : medium, WHITE bold
- Gold underline below text
"""
from PIL import Image, ImageDraw, ImageFont
import os

RED   = (204, 20, 20)
BLACK = (18, 18, 18)
WHITE = (255, 255, 255)
GOLD  = (240, 185, 30)

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
    img  = Image.new("RGBA", (size, size), (0, 0, 0, 0))

    # ── Rounded rect mask ─────────────────────────────────────────────────
    radius = size // 7
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, size-1, size-1], radius=radius, fill=255)

    # ── Background: near-black base ───────────────────────────────────────
    bg = Image.new("RGBA", (size, size), BLACK + (255,))
    bg_draw = ImageDraw.Draw(bg)

    # ── Red top-left diagonal polygon ─────────────────────────────────────
    bg_draw.polygon([
        (0, 0),
        (size, 0),
        (size, int(size * 0.35)),
        (int(size * 0.55), int(size * 0.60)),
        (0, int(size * 0.52)),
    ], fill=RED)

    # ── Thin red diagonal streak ──────────────────────────────────────────
    streak_w = int(size * 0.055)
    bg_draw.polygon([
        (int(size * 0.38), int(size * 0.52)),
        (size,             int(size * 0.42)),
        (size,             int(size * 0.42) + streak_w),
        (int(size * 0.38), int(size * 0.52) + streak_w),
    ], fill=RED)

    # ── Dark shadow overlay (top-right) ───────────────────────────────────
    overlay = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    od.polygon([
        (int(size * 0.45), 0),
        (size, 0),
        (size, int(size * 0.32)),
        (int(size * 0.55), int(size * 0.58)),
    ], fill=(0, 0, 0, 90))
    bg.alpha_composite(overlay)

    # Apply mask
    bg.putalpha(mask)
    img.paste(bg, (0, 0), bg)
    draw = ImageDraw.Draw(img)

    cx = size // 2

    # ── All 4 lines same font size — auto-fit so widest line fits ────────────
    LINES_ALL = ["AEO &", "AGRICET", "MOCK TEST", "SERIES"]
    target_w = int(size * 0.88)
    pt = size
    while pt > 4:
        f = try_font(pt)
        if max(measure(draw, line, f)[0] for line in LINES_ALL) <= target_w:
            break
        pt -= 1
    f_aeo = f_agricet = f_sub = try_font(pt)

    def tw(text, font):
        return measure(draw, text, font)[0]

    def th(text, font):
        return measure(draw, text, font)[1]

    lh_aeo     = th("AEO &",    f_aeo)
    lh_agricet = th("AGRICET",  f_agricet)
    lh_sub     = th("MOCK TEST",f_sub)
    gap        = int(size * 0.025)

    gold_h   = max(2, size // 55)
    gold_gap = int(size * 0.03)

    total_h = lh_aeo + gap + lh_agricet + gap + lh_sub + gap + lh_sub + gold_gap + gold_h

    # Centre text block vertically with slight upward bias
    top = (size - total_h) // 2 - int(size * 0.02)

    def draw_text_centred(y, text, font, colour):
        w = tw(text, font)
        x = (size - w) // 2
        # shadow
        draw.text((x+2, y+2), text, font=font, fill=(0, 0, 0, 140))
        draw.text((x, y),     text, font=font, fill=colour)

    y = top
    draw_text_centred(y, "AEO &",    f_aeo,     WHITE)
    y += lh_aeo + gap
    draw_text_centred(y, "AGRICET",  f_agricet, WHITE)
    y += lh_agricet + gap
    draw_text_centred(y, "MOCK TEST",f_sub,     WHITE)
    y += lh_sub + gap
    draw_text_centred(y, "SERIES",   f_sub,     WHITE)
    y += lh_sub + gold_gap

    # ── Gold underline ─────────────────────────────────────────────────────
    lw2 = int(size * 0.28)
    draw.rounded_rectangle([cx - lw2, y, cx + lw2, y + gold_h],
                            radius=gold_h, fill=GOLD)

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
