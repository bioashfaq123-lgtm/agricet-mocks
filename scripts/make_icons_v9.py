"""
Icon v9: matches the in-app splash screen (AppSplashScreen.tsx).
Gold "AEO &" on top, big white AGRICET, MOCK TEST / SERIES, gold underline,
on the red/black diagonal background.
"""
from PIL import Image, ImageDraw, ImageFont
import os

RED    = (204, 20, 20)
RED2   = (176, 21, 21)
BLACK  = (18, 18, 18)
WHITE  = (255, 255, 255)
GOLD   = (255, 200, 40)   # #FFC828 — same gold as the splash

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

def make_icon(size: int) -> Image.Image:
    radius = size // 7
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, size-1, size-1], radius=radius, fill=255)

    bg = Image.new("RGBA", (size, size), BLACK + (255,))
    bd = ImageDraw.Draw(bg)
    # Red top-left large polygon (same geometry as the splash / v8 icon)
    bd.polygon([(0, 0), (size, 0), (size, int(size*0.38)),
                (int(size*0.50), int(size*0.62)), (0, int(size*0.50))], fill=RED)
    # Thin red diagonal streak
    sw = int(size*0.06)
    bd.polygon([(int(size*0.35), int(size*0.54)), (size, int(size*0.44)),
                (size, int(size*0.44)+sw), (int(size*0.35), int(size*0.54)+sw)], fill=RED2)

    bg.putalpha(mask)
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    img.paste(bg, (0, 0), bg)
    draw = ImageDraw.Draw(img)

    # AGRICET is the dominant line — fit it to 82% width
    big_pt = fit_pt(draw, "AGRICET", int(size*0.82), size)
    aeo_pt = max(6, int(big_pt*0.42))
    med_pt = max(6, int(big_pt*0.52))
    # Make sure the medium lines also fit
    med_pt = min(med_pt, fit_pt(draw, "MOCK TEST", int(size*0.88), med_pt))

    f_aeo = try_font(aeo_pt)
    f_big = try_font(big_pt)
    f_med = try_font(med_pt)

    h_aeo = measure(draw, "AEO &", f_aeo)[1]
    h_big = measure(draw, "AGRICET", f_big)[1]
    h_med = measure(draw, "SERIES", f_med)[1]
    g1 = int(size*0.03)   # below AEO
    g2 = int(size*0.025)  # below AGRICET
    g3 = int(size*0.012)  # between MOCK TEST and SERIES
    g4 = int(size*0.04)   # before underline
    ul_h = max(2, int(size*0.012))
    total = h_aeo + g1 + h_big + g2 + h_med + g3 + h_med + g4 + ul_h
    y = (size - total) // 2

    def center(text, font, yy, fill, gold=False):
        w, _ = measure(draw, text, font)
        x = (size - w)//2
        draw.text((x+max(1,size//220), yy+max(1,size//220)), text, font=font, fill=(0,0,0,170))
        draw.text((x, yy), text, font=font, fill=fill)

    center("AEO &",     f_aeo, y, GOLD);  y += h_aeo + g1
    center("AGRICET",   f_big, y, WHITE); y += h_big + g2
    center("MOCK TEST", f_med, y, WHITE); y += h_med + g3
    center("SERIES",    f_med, y, WHITE); y += h_med + g4
    ul_w = int(size*0.42)
    draw.rounded_rectangle([(size-ul_w)//2, y, (size+ul_w)//2, y+ul_h], radius=ul_h//2, fill=GOLD)

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

fav = make_icon(64)
fav_bg = Image.new("RGB", (64, 64), BLACK)
fav_bg.paste(fav, (0, 0), fav)
fav_bg.save(os.path.join(PUBLIC, "favicon.ico"), "ICO", sizes=[(64, 64)])
print("  favicon.ico")

print("\nDone.")
