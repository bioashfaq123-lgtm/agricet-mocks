"""
AGRICET MOCKS – Promotional Poster v2
Top banner: NALANDA STUDY CIRCLE - JAGTIAL
Output: 1080 x 1920 px (portrait / WhatsApp story size)
"""
from PIL import Image, ImageDraw, ImageFont
import os

W, H = 1080, 1920

# ── Colours ──────────────────────────────────────────────────────────────────
BG         = (22,  101,  52)   # deep green  #166534
DARK_GREEN = (14,   75,  37)   # #0E4B25
MID_GREEN  = (21,  128,  61)   # #15803D
LIGHT_GREEN= (74,  222, 128)   # #4ADE80
GOLD       = (251, 191,  36)   # #FBBF24
GOLD_DARK  = (217, 119,   6)   # #D97706
WHITE      = (255, 255, 255)
OFF_WHITE  = (240, 253, 244)   # #F0FDF4
DARK_TEXT  = (15,  23,  42)    # near black
CARD_BG    = (255, 255, 255)
BANNER_BG  = (15,  23,  42)    # very dark for top banner

# ── Font helper ───────────────────────────────────────────────────────────────
def font(name, size):
    candidates = [
        f"C:/Windows/Fonts/{name}.ttf",
        f"C:/Windows/Fonts/{name.lower()}.ttf",
        f"C:/Windows/Fonts/{name}bd.ttf",
        f"C:/Windows/Fonts/{name}b.ttf",
    ]
    fallbacks = ["C:/Windows/Fonts/arialbd.ttf", "C:/Windows/Fonts/arial.ttf",
                 "C:/Windows/Fonts/calibrib.ttf", "C:/Windows/Fonts/calibri.ttf"]
    for p in candidates + fallbacks:
        if os.path.exists(p):
            return ImageFont.truetype(p, size)
    return ImageFont.load_default()

f_impact_xl  = font("impact",  120)
f_impact_lg  = font("impact",   80)
f_impact_md  = font("impact",   56)
f_impact_sm  = font("impact",   40)
f_bold_xl    = font("arialbd",  58)
f_bold_lg    = font("arialbd",  42)
f_bold_md    = font("arialbd",  32)
f_bold_sm    = font("arialbd",  24)
f_bold_xs    = font("arialbd",  20)
f_reg_lg     = font("calibri",  32)
f_reg_md     = font("calibri",  26)
f_reg_sm     = font("calibri",  22)
f_rupee_xl   = font("arialbd",  96)
f_rupee_md   = font("arialbd",  38)

img = Image.new("RGB", (W, H), BG)
d   = ImageDraw.Draw(img)

# ═══════════════════════════════════════════════════════════════════════════════
# 1. BRAND SECTION
# ═══════════════════════════════════════════════════════════════════════════════
Y = 50
d.text((W//2, Y), "AGRICET", font=f_impact_xl, fill=WHITE, anchor="mm")
Y += 110
d.text((W//2, Y), "MOCK TEST SERIES", font=f_impact_md, fill=GOLD, anchor="mm")
Y += 50
d.text((W//2, Y), "PJTAU – AGRICET Preparation Platform",
       font=f_reg_md, fill=LIGHT_GREEN, anchor="mm")

# decorative gold rule
Y += 45
d.rectangle([80, Y, W-80, Y+4], fill=GOLD)
Y += 30

# ═══════════════════════════════════════════════════════════════════════════════
# 3. HEADLINE
# ═══════════════════════════════════════════════════════════════════════════════
Y += 20
d.text((W//2, Y), "Crack AGRICET &", font=f_bold_xl, fill=WHITE, anchor="mm")
Y += 72
d.text((W//2, Y), "Secure Your BSc (Hons)", font=f_bold_xl, fill=GOLD, anchor="mm")
Y += 72
d.text((W//2, Y), "Agriculture Seat", font=f_bold_xl, fill=WHITE, anchor="mm")
Y += 60

# ═══════════════════════════════════════════════════════════════════════════════
# 4. STAT CARDS  (2 × 2 grid)
# ═══════════════════════════════════════════════════════════════════════════════
Y += 20
CARD_W, CARD_H_c, GAP = 475, 170, 20
CARDS = [
    ("3,400+", "MCQs Available"),
    ("17",     "Subjects Covered"),
    ("3 Years","PYQs 2023–2025"),
    ("94%",    "Success Rate"),
]
for idx, (num, lbl) in enumerate(CARDS):
    col = idx % 2
    row = idx // 2
    cx  = 40 + col * (CARD_W + GAP)
    cy  = Y  + row * (CARD_H_c + GAP)
    # shadow
    d.rounded_rectangle([cx+4, cy+4, cx+CARD_W+4, cy+CARD_H_c+4],
                        radius=18, fill=DARK_GREEN)
    # card
    d.rounded_rectangle([cx, cy, cx+CARD_W, cy+CARD_H_c],
                        radius=18, fill=WHITE)
    # gold top strip
    d.rounded_rectangle([cx, cy, cx+CARD_W, cy+14],
                        radius=18, fill=GOLD)
    d.rectangle([cx, cy+7, cx+CARD_W, cy+14], fill=GOLD)
    # number
    nf = f_impact_md if len(num) > 5 else f_impact_lg
    d.text((cx + CARD_W//2, cy + 85), num,
           font=nf, fill=(21,128,61), anchor="mm")
    d.text((cx + CARD_W//2, cy + 140), lbl,
           font=f_reg_sm, fill=(55,65,81), anchor="mm")

Y += 2 * (CARD_H_c + GAP) + 10

# ═══════════════════════════════════════════════════════════════════════════════
# 5. FEATURES LIST
# ═══════════════════════════════════════════════════════════════════════════════
Y += 20
features = [
    ("✓", "All 17 Diploma Agriculture Subjects"),
    ("✓", "Previous Year Papers: 2023, 2024 & 2025"),
    ("✓", "Subject-wise Weightage Analysis (2023–25)"),
    ("✓", "AGRICET Objective Book (DA-121 Free Sample)"),
    ("✓", "Instant Results & Detailed Solutions"),
    ("✓", "Practice Mode & Timed Test Mode"),
    ("✓", "Works on Mobile, Tablet & Desktop"),
    ("✓", "10 Free Demo Questions — No Login Needed"),
]
for (tick, feat) in features:
    # highlight the new weightage feature in gold
    pill_col = GOLD if "Weightage" in feat else MID_GREEN
    txt_col  = DARK_TEXT if "Weightage" in feat else WHITE
    tick_col = DARK_TEXT if "Weightage" in feat else GOLD
    d.rounded_rectangle([40, Y, W-40, Y+52], radius=14, fill=pill_col)
    d.text((80, Y+26),  tick, font=f_bold_md, fill=tick_col, anchor="lm")
    d.text((120, Y+26), feat, font=f_bold_sm, fill=txt_col,  anchor="lm")
    Y += 58

# ═══════════════════════════════════════════════════════════════════════════════
# 6. PRICE BADGE
# ═══════════════════════════════════════════════════════════════════════════════
Y += 25
BADGE_H = 210
d.rounded_rectangle([30, Y+5, W-30+5, Y+BADGE_H+5], radius=28, fill=DARK_GREEN)
d.rounded_rectangle([30, Y, W-30, Y+BADGE_H],       radius=28, fill=GOLD)

d.text((W//2, Y+30),  "LIMITED LAUNCH OFFER", font=f_bold_xs, fill=DARK_GREEN, anchor="mm")

# strikethrough ₹999
d.text((W//2 - 80, Y+75), "₹999", font=f_rupee_md, fill=(120,53,15), anchor="mm")
bbox = d.textbbox((W//2-80, Y+75), "₹999", font=f_rupee_md, anchor="mm")
d.line([bbox[0], (bbox[1]+bbox[3])//2, bbox[2], (bbox[1]+bbox[3])//2],
       fill=(120,53,15), width=4)

d.text((W//2 + 60, Y+75), "→  ₹100 Only",
       font=f_rupee_md, fill=DARK_TEXT, anchor="mm")

d.text((W//2, Y+135), "LIFETIME ACCESS  •  ALL SUBJECTS  •  INSTANT DOWNLOAD",
       font=f_bold_xs, fill=DARK_TEXT, anchor="mm")

d.text((W//2, Y+175), "One-time payment · No subscription · No hidden charges",
       font=f_reg_sm, fill=(92,50,5), anchor="mm")

Y += BADGE_H + 25

# ═══════════════════════════════════════════════════════════════════════════════
# 7. CALL TO ACTION & HELPLINE
# ═══════════════════════════════════════════════════════════════════════════════
Y += 10
d.rounded_rectangle([60, Y, W-60, Y+80], radius=22, fill=WHITE)
d.text((W//2, Y+40), "agricet-mocks-8mry.vercel.app",
       font=f_bold_md, fill=(21,128,61), anchor="mm")
Y += 90

d.text((W//2, Y+30), "Helpline:  +91 90593 36236",
       font=f_bold_sm, fill=LIGHT_GREEN, anchor="mm")
Y += 55

# ═══════════════════════════════════════════════════════════════════════════════
# 8. FOOTER
# ═══════════════════════════════════════════════════════════════════════════════
d.rectangle([0, H-70, W, H], fill=BANNER_BG)
d.rectangle([0, H-70, W, H-65], fill=GOLD)
d.text((W//2, H-35), "agricet-mocks-8mry.vercel.app  |  Call: +91 90593 36236",
       font=f_bold_sm, fill=GOLD, anchor="mm")

# ── Save ──────────────────────────────────────────────────────────────────────
out = r"C:\Users\bioas\Desktop\AGRICET_Promo_Poster.jpg"
img.save(out, "JPEG", quality=96)
print(f"Saved: {out}")
