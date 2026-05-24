"""
AGRICET MOCKS Promotional Poster – generated with Pillow
Output: 1920 x 1080 px (16:9), ₹199 pricing
"""
from PIL import Image, ImageDraw, ImageFont
import os, sys

W, H = 1920, 1080

# ── Colours ──────────────────────────────────────────────────────────────────
BG        = (27,  67,  50)   # #1B4332 deep forest green
PANEL     = (45, 106,  79)   # #2D6A4F mid green
GOLD      = (245, 158,  11)  # #F59E0B amber-gold
GOLD_DIM  = (217, 119,   6)  # #D97706 darker gold
WHITE     = (255, 255, 255)
MINT      = (134, 239, 172)  # #86EFAC
LIGHTMINT = (209, 250, 229)  # #D1FAE5
DARK      = (13,  35,  24)   # #0D2318
DARKTEXT  = (27,  67,  50)   # dark text on gold badge
STRIKETHROUGH_CLR = (124, 45, 18)  # #7C2D12

# ── Font helper ──────────────────────────────────────────────────────────────
def font(name, size):
    candidates = [
        f"C:/Windows/Fonts/{name}.ttf",
        f"C:/Windows/Fonts/{name.lower()}.ttf",
        f"C:/Windows/Fonts/{name}bd.ttf",   # bold variant
        f"C:/Windows/Fonts/{name}b.ttf",
    ]
    for p in candidates:
        if os.path.exists(p):
            return ImageFont.truetype(p, size)
    # fall back
    fallbacks = ["C:/Windows/Fonts/arialbd.ttf",
                 "C:/Windows/Fonts/arial.ttf",
                 "C:/Windows/Fonts/calibrib.ttf",
                 "C:/Windows/Fonts/calibri.ttf"]
    for p in fallbacks:
        if os.path.exists(p):
            return ImageFont.truetype(p, size)
    return ImageFont.load_default()

# Load fonts
f_impact_huge  = font("impact",    110)
f_impact_large = font("impact",     80)
f_impact_med   = font("impact",     52)
f_impact_sm    = font("impact",     42)
f_bold_xl      = font("arialbd",    54)
f_bold_lg      = font("arialbd",    40)
f_bold_med     = font("arialbd",    32)
f_bold_sm      = font("arialbd",    24)
f_reg_lg       = font("calibri",    30)
f_reg_med      = font("calibri",    24)
f_reg_sm       = font("calibri",    20)
f_reg_xs       = font("calibri",    17)
f_sym_lg       = font("seguisym",   30)  # for checkmarks
f_rupee_lg     = font("arialbd",    80)  # arial has ₹ glyph
f_rupee_med    = font("arialbd",    32)

img  = Image.new("RGB", (W, H), BG)
d    = ImageDraw.Draw(img)

# ── Left panel (x: 0–570) ────────────────────────────────────────────────────
PANEL_W = 570
d.rectangle([0, 0, PANEL_W, H], fill=PANEL)
# dark left edge
d.rectangle([0, 0, 12, H], fill=(22, 61, 42))
# gold right accent strip
d.rectangle([PANEL_W - 9, 40, PANEL_W, H - 40], fill=GOLD)

# AGRICET  (white)
d.text((PANEL_W // 2, 95),  "AGRICET", font=f_impact_large, fill=WHITE,     anchor="mm")
# MOCKS    (gold)
d.text((PANEL_W // 2, 210), "MOCKS",   font=f_impact_large, fill=GOLD,      anchor="mm")
# seedling icon (text substitute)
d.text((PANEL_W // 2, 295), "* * *",   font=f_reg_med, fill=GOLD, anchor="mm")
# subtitle
d.text((PANEL_W // 2, 360), "Mock Test Platform", font=f_reg_med, fill=MINT, anchor="mm")

# divider
d.rectangle([80, 395, PANEL_W - 80, 400], fill=(74, 144, 104))

# CTA button
BTN_Y1, BTN_Y2 = 415, 485
d.rounded_rectangle([50, BTN_Y1, PANEL_W - 50, BTN_Y2], radius=18, fill=GOLD, outline=GOLD_DIM, width=2)
d.text((PANEL_W // 2, (BTN_Y1 + BTN_Y2) // 2), "TRY 10 FREE QUESTIONS",
       font=f_bold_sm, fill=DARKTEXT, anchor="mm")

d.text((PANEL_W // 2, 508), "No Registration Needed", font=f_reg_xs, fill=(134, 239, 172), anchor="mm")

# helpline
d.text((PANEL_W // 2, H - 45), "Call: 90593 36236", font=f_reg_med, fill=LIGHTMINT, anchor="mm")

# ── Right panel content (x: 600 → 1880) ──────────────────────────────────────
RX = 615   # right-panel start x
RW = 1280  # usable width

# Main headline
d.text((RX, 55), "Crack AGRICET", font=f_impact_huge, fill=GOLD)

# Sub-headline
d.text((RX, 175), "Secure Your BSc (Hons) Agriculture Seat",
       font=f_bold_xl, fill=WHITE)

# ── 4 stat cards ─────────────────────────────────────────────────────────────
CARD_TOP = 270
CARD_H   = 190
CARD_W   = 290
CARD_GAP = 30
stats = [
    ("3,400+", "MCQs"),
    ("17",     "Subjects"),
    ("3 Yrs",  "PYQs 2023–25"),
    ("94%",    "Success Rate"),
]

for i, (num, lbl) in enumerate(stats):
    cx = RX + i * (CARD_W + CARD_GAP)
    # card shadow
    d.rectangle([cx + 5, CARD_TOP + 5, cx + CARD_W + 5, CARD_TOP + CARD_H + 5],
                fill=(15, 40, 28))
    # white card
    d.rectangle([cx, CARD_TOP, cx + CARD_W, CARD_TOP + CARD_H], fill=WHITE)
    # gold top bar
    d.rectangle([cx, CARD_TOP, cx + CARD_W, CARD_TOP + 11], fill=GOLD)
    # number
    nf = f_impact_med if len(num) > 4 else f_impact_sm
    d.text((cx + CARD_W // 2, CARD_TOP + 75), num,
           font=nf, fill=GOLD, anchor="mm")
    # label
    d.text((cx + CARD_W // 2, CARD_TOP + 145), lbl,
           font=f_reg_sm, fill=(55, 65, 81), anchor="mm")

# ── Price badge ───────────────────────────────────────────────────────────────
BAD_Y  = 490
BAD_H  = 225
BAD_W  = RW
# shadow
d.rounded_rectangle([RX + 5, BAD_Y + 5, RX + BAD_W + 5, BAD_Y + BAD_H + 5],
                    radius=22, fill=(15, 40, 28))
# gold badge
d.rounded_rectangle([RX, BAD_Y, RX + BAD_W, BAD_Y + BAD_H],
                    radius=22, fill=GOLD, outline=GOLD_DIM, width=3)

# "LIMITED OFFER" small caps
d.text((RX + 30, BAD_Y + 18), "LIMITED OFFER", font=f_reg_sm, fill=STRIKETHROUGH_CLR)

# Strike-through ₹999
d.text((RX + 30, BAD_Y + 52), "₹999", font=f_rupee_med, fill=STRIKETHROUGH_CLR)
# draw strikethrough line
bbox999 = d.textbbox((RX + 30, BAD_Y + 52), "₹999", font=f_bold_med)
mid_y = (bbox999[1] + bbox999[3]) // 2
d.line([bbox999[0], mid_y, bbox999[2], mid_y], fill=STRIKETHROUGH_CLR, width=3)

# Big price  ₹199 Only  (use arialbd which has the ₹ glyph)
d.text((RX + 25, BAD_Y + 92), "₹199 Only", font=f_rupee_lg, fill=DARKTEXT)

# Right side features
feat_x = RX + 720
feats = ["v  Lifetime Access", "v  All 17 Subjects", "v  Instant Results"]
for j, ft in enumerate(feats):
    d.text((feat_x, BAD_Y + 30 + j * 58), ft, font=f_bold_med, fill=DARKTEXT)

# ── Feature rows ──────────────────────────────────────────────────────────────
FEAT_Y = 730
d.text((RX, FEAT_Y),
       "»  Detailed solutions for every question        »  Previous Year Papers: 2023, 2024, 2025",
       font=f_reg_med, fill=LIGHTMINT)
FEAT_Y += 45
d.text((RX, FEAT_Y),
       "»  Subject-wise Weightage Analysis (2023–25)   »  Smart Study Strategy based on PYQ data",
       font=f_reg_med, fill=GOLD)

# ── Bottom URL bar ────────────────────────────────────────────────────────────
d.rectangle([PANEL_W, H - 78, W, H], fill=DARK)
d.text((PANEL_W + (W - PANEL_W) // 2, H - 39),
       "agricet-mocks-8mry.vercel.app",
       font=f_bold_med, fill=MINT, anchor="mm")

# ── Save ──────────────────────────────────────────────────────────────────────
out = r"C:\Users\bioas\Agricet Mock Test Series\promo-poster.jpg"
img.save(out, "JPEG", quality=95)
print(f"Saved: {out}")
