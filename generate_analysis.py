"""
Generate a JPEG matching the /analysis page on the AGRICET mocks website.
Design: dark-navy theme, colour-coded table, year-wise mini bars.
Bigger fonts, no footer branding.
"""
from PIL import Image, ImageDraw, ImageFont

# ── Data ─────────────────────────────────────────────────────────────────────
SUBJECTS = [
    {"codes": "DA-101, DA-102, DA-201",
     "label": "Agronomy, Crop Production & Meteorology",
     "y2023": 10, "y2024": 22, "y2025": 18},
    {"codes": "DA-121, DA-122",
     "label": "Soil Science, Fertility & Water Conservation",
     "y2023": 16, "y2024": 13, "y2025": 10},
    {"codes": "DA-131, DA-132",
     "label": "General Entomology & Crop Pest Management",
     "y2023": 16, "y2024":  8, "y2025": 13},
    {"codes": "DA-281, DA-282",
     "label": "Horticultural Crops & Forestry",
     "y2023":  9, "y2024": 14, "y2025": 13},
    {"codes": "DA-291",
     "label": "Agricultural Extension & Rural Development",
     "y2023":  9, "y2024": 11, "y2025": 11},
    {"codes": "DA-151",
     "label": "Farm Power & Machinery",
     "y2023":  8, "y2024":  7, "y2025":  6},
    {"codes": "DA-241",
     "label": "Agricultural Economics",
     "y2023":  6, "y2024":  8, "y2025":  6},
    {"codes": "DA-171",
     "label": "Plant Pathology & Microbiology",
     "y2023":  7, "y2024":  6, "y2025":  5},
    {"codes": "DA-111",
     "label": "Plant Breeding, Genetics & Seed Technology",
     "y2023":  4, "y2024":  5, "y2025":  8},
    {"codes": "DA-252",
     "label": "Survey, Levelling & Field Measurements",
     "y2023":  8, "y2024":  2, "y2025":  6},
    {"codes": "DA-262",
     "label": "Computer Applications in Agriculture",
     "y2023":  4, "y2024":  2, "y2025":  2},
    {"codes": "DA-263",
     "label": "Communication Skills in English",
     "y2023":  3, "y2024":  2, "y2025":  2},
]

def get_avg(s): return round((s["y2023"] + s["y2024"] + s["y2025"]) / 3, 1)
def get_trend(s):
    d = s["y2025"] - s["y2023"]
    if d >= 3:  return "Rising",  "#dcfce7", "#166534"
    if d <= -3: return "Falling", "#dbeafe", "#1e40af"
    return "Stable", "#f1f5f9", "#475569"

def cell_style(n):
    if n >= 13: return "#1e3a5f", "white"
    if n >= 8:  return "#1d4ed8", "white"
    if n >= 4:  return "#bfdbfe", "#1e3a5f"
    return "#f1f5f9", "#64748b"

def bar_color(n):
    if n >= 13: return "#1e3a5f"
    if n >= 8:  return "#1d4ed8"
    if n >= 4:  return "#60a5fa"
    return "#cbd5e1"

sorted_s = sorted(SUBJECTS, key=lambda s: get_avg(s), reverse=True)
maxQ = 22

# ── Fonts ─────────────────────────────────────────────────────────────────────
FD = "C:/Windows/Fonts/"
def load(name, size):
    for fn in [name, name.lower()]:
        for d in [FD, ""]:
            try: return ImageFont.truetype(d + fn, size)
            except OSError: pass
    return ImageFont.load_default()

F_TITLE  = load("arialbd.ttf", 48)
F_SUBT   = load("arial.ttf",   22)
F_HDR    = load("arialbd.ttf", 22)
F_NUM    = load("arialbd.ttf", 22)   # numbers in cells
F_REG    = load("arial.ttf",   18)   # subject label
F_SMALL  = load("arial.ttf",   16)
F_BAR_V  = load("arialbd.ttf", 14)   # bar value labels
F_BAR_Y  = load("arial.ttf",   13)   # bar year labels
F_CARD_N = load("arialbd.ttf", 38)
F_CARD_L = load("arial.ttf",   16)
F_BADGE  = load("arialbd.ttf", 15)
F_LEGEND = load("arialbd.ttf", 15)
F_STRAT_T = load("arialbd.ttf", 22)   # strategy box title
F_STRAT_H = load("arialbd.ttf", 17)   # sub-box heading
F_STRAT_R = load("arial.ttf",   16)   # sub-box rows
F_STRAT_B = load("arialbd.ttf", 16)   # sub-box avg bold

# ── Layout ────────────────────────────────────────────────────────────────────
W       = 1800
ROW_H   = 72
TITLE_H = 100
CARDS_H = 96
GAP1    = 14
LEG_H   = 50
GAP2    = 8
TH_H    = 50       # table header height

TABLE_TOP  = TITLE_H + CARDS_H + GAP1 + LEG_H + GAP2
TABLE_BODY = TABLE_TOP + TH_H
N_ROWS     = len(sorted_s) + 1          # data rows + totals row
STRAT_H    = 280        # strategy box height
TOTAL_H    = TABLE_BODY + N_ROWS * ROW_H + 20 + STRAT_H + 20  # table + strategy + margins

# Column (start_x, width)
CX = {
    "code":  (22,  220),
    "subj":  (252, 460),
    "y23":   (722, 100),
    "y24":   (832, 100),
    "y25":   (942, 100),
    "avg":   (1052, 80),
    "trend": (1142, 148),
    "bar":   (1300, 484),
}

# ── Helpers ───────────────────────────────────────────────────────────────────
def hex2rgb(h):
    if h == "white": return (255, 255, 255)
    h = h.lstrip('#')
    return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))

def rr(draw, xy, radius, fill, outline=None, lw=1):
    draw.rounded_rectangle(xy, radius=radius, fill=hex2rgb(fill),
                           outline=hex2rgb(outline) if outline else None, width=lw)

def ct(draw, text, cx, cy, font, color):
    bb = draw.textbbox((0, 0), text, font=font)
    tw, th = bb[2]-bb[0], bb[3]-bb[1]
    draw.text((cx - tw//2, cy - th//2), text, font=font, fill=hex2rgb(color))

def lt(draw, text, x, cy, font, color):
    bb = draw.textbbox((0, 0), text, font=font)
    th = bb[3]-bb[1]
    draw.text((x, cy - th//2), text, font=font, fill=hex2rgb(color))

# ── Canvas ────────────────────────────────────────────────────────────────────
img  = Image.new("RGB", (W, TOTAL_H), hex2rgb("#f8fafc"))
draw = ImageDraw.Draw(img)

# ── 1. Title bar ──────────────────────────────────────────────────────────────
draw.rectangle([(0, 0), (W, TITLE_H)], fill=hex2rgb("#0f172a"))
ct(draw, "Subject-wise Question Analysis", W//2, 36, F_TITLE, "white")
ct(draw, "Number of questions from each DA subject  |  AGRICET 2023, 2024 & 2025  |  100 Qs per paper",
   W//2, 80, F_SUBT, "#94a3b8")

# ── 2. Year summary cards ─────────────────────────────────────────────────────
CARD_CONFIGS = [
    ("AGRICET 2023", "#334155", "#0f172a"),
    ("AGRICET 2024", "#1d4ed8", "#1e3a5f"),
    ("AGRICET 2025", "#1e3a5f", "#0f172a"),
]
card_w = (W - 70) // 3
cy_top = TITLE_H + 10
for i, (label, c1, c2) in enumerate(CARD_CONFIGS):
    cx0 = 20 + i * (card_w + 15)
    cx1 = cx0 + card_w
    rr(draw, (cx0, cy_top, cx1, cy_top + CARDS_H - 4), 16, c2)
    rr(draw, (cx0, cy_top, cx1, cy_top + CARDS_H//2), 16, c1)
    mid = (cx0 + cx1) // 2
    ct(draw, label,           mid, cy_top + 24, F_CARD_L, "#cbd5e1")
    ct(draw, "100",           mid, cy_top + 60, F_CARD_N, "white")
    ct(draw, "Total Questions", mid, cy_top + 86, F_CARD_L, "#94a3b8")

# ── 3. Legend ─────────────────────────────────────────────────────────────────
leg_y = TITLE_H + CARDS_H + GAP1
draw.rectangle([(0, leg_y), (W, leg_y + LEG_H)], fill=hex2rgb("white"))
legend_items = [
    ("13+ Qs  Very High", "#1e3a5f", "white"),
    ("8-12 Qs  High",     "#1d4ed8", "white"),
    ("4-7 Qs  Medium",    "#bfdbfe", "#1e3a5f"),
    ("1-3 Qs  Low",       "#f1f5f9", "#64748b"),
]
lx = 22
lt(draw, "Weightage:", lx, leg_y + LEG_H//2, F_LEGEND, "#64748b")
lx += 120
for ltxt, lbg, lfg in legend_items:
    bb = draw.textbbox((0,0), ltxt, font=F_LEGEND)
    lw = bb[2]-bb[0] + 24
    rr(draw, (lx, leg_y+10, lx+lw, leg_y+LEG_H-10), 7, lbg,
       outline="#e2e8f0" if lbg in ("#f1f5f9","#bfdbfe") else None)
    ct(draw, ltxt, lx+lw//2, leg_y+LEG_H//2, F_LEGEND, lfg)
    lx += lw + 12

# ── 4. Table header ───────────────────────────────────────────────────────────
th_y = TABLE_TOP
draw.rectangle([(0, th_y), (W, th_y + TH_H)], fill=hex2rgb("#111827"))
HDR = [
    ("DA Course Code", "code"), ("Subject", "subj"),
    ("2023\n(Qs)", "y23"), ("2024\n(Qs)", "y24"), ("2025\n(Qs)", "y25"),
    ("Avg\n(Qs)", "avg"), ("Trend", "trend"), ("Year-wise Bar", "bar"),
]
for lbl, col in HDR:
    x0, cw = CX[col]
    mx = x0 + cw//2
    if "\n" in lbl:
        p = lbl.split("\n")
        ct(draw, p[0], mx, th_y + 17, F_HDR, "white")
        ct(draw, p[1], mx, th_y + 37, F_SMALL, "#9ca3af")
    else:
        ct(draw, lbl, mx, th_y + TH_H//2, F_HDR, "white")

# ── 5. Table rows ─────────────────────────────────────────────────────────────
for i, s in enumerate(sorted_s):
    ry   = TABLE_BODY + i * ROW_H
    rbg  = "white" if i % 2 == 0 else "#f8fafc"
    draw.rectangle([(0, ry), (W, ry + ROW_H)], fill=hex2rgb(rbg))
    draw.line([(0, ry+ROW_H-1), (W, ry+ROW_H-1)], fill=hex2rgb("#e5e7eb"), width=1)

    my = ry + ROW_H // 2   # vertical mid of row

    # DA code badges (wrap to second line if 3 codes)
    bx_start, _ = CX["code"]
    codes = [c.strip() for c in s["codes"].split(",")]
    if len(codes) <= 2:
        # Single line
        bx_cur = bx_start
        for code in codes:
            bb = draw.textbbox((0,0), code, font=F_BADGE)
            bw = bb[2]-bb[0] + 16; bh = 24
            by = my - bh//2
            rr(draw, (bx_cur, by, bx_cur+bw, by+bh), 5, "#1e3a5f")
            ct(draw, code, bx_cur+bw//2, by+bh//2, F_BADGE, "white")
            bx_cur += bw + 6
    else:
        # Three codes: two on first line, one on second
        row1, row2 = codes[:2], codes[2:]
        for line_i, line_codes in enumerate([row1, row2]):
            line_y = my - 16 + line_i * 28
            bx_cur = bx_start
            for code in line_codes:
                bb = draw.textbbox((0,0), code, font=F_BADGE)
                bw = bb[2]-bb[0]+16; bh = 22
                by = line_y - bh//2
                rr(draw, (bx_cur, by, bx_cur+bw, by+bh), 5, "#1e3a5f")
                ct(draw, code, bx_cur+bw//2, by+bh//2, F_BADGE, "white")
                bx_cur += bw + 6

    # Subject
    sx, _ = CX["subj"]
    lt(draw, s["label"], sx, my, F_REG, "#1f2937")

    # Year cells
    for col, val in [("y23", s["y2023"]), ("y24", s["y2024"]), ("y25", s["y2025"])]:
        x0, cw = CX[col]
        mx_c = x0 + cw//2
        bg, fg = cell_style(val)
        bb = draw.textbbox((0,0), str(val), font=F_NUM)
        cw2 = max(bb[2]-bb[0]+20, 52); ch2 = 36
        rr(draw, (mx_c-cw2//2, my-ch2//2, mx_c+cw2//2, my+ch2//2), 8, bg,
           outline="#93c5fd" if bg=="#bfdbfe" else "#e2e8f0" if bg=="#f1f5f9" else None)
        ct(draw, str(val), mx_c, my, F_NUM, fg)

    # Avg
    x0, cw = CX["avg"]
    ct(draw, str(get_avg(s)), x0+cw//2, my, F_NUM, "#111827")

    # Trend badge
    t_label, t_bg, t_fg = get_trend(s)
    x0, cw = CX["trend"]
    mx_t = x0 + cw//2
    bb = draw.textbbox((0,0), t_label, font=F_BADGE)
    tw2 = bb[2]-bb[0]+22; th2 = 28
    arrow = "+" if t_label=="Rising" else "-" if t_label=="Falling" else "="
    full = f"{arrow} {t_label}"
    bb2 = draw.textbbox((0,0), full, font=F_BADGE)
    tw2 = bb2[2]-bb2[0]+22
    rr(draw, (mx_t-tw2//2, my-th2//2, mx_t+tw2//2, my+th2//2), 12, t_bg,
       outline="#86efac" if t_bg=="#dcfce7" else "#93c5fd" if t_bg=="#dbeafe" else "#e2e8f0")
    ct(draw, full, mx_t, my, F_BADGE, t_fg)

    # Mini bar chart
    bx0, bw = CX["bar"]
    grp_w = bw // 3
    bar_max_h = ROW_H - 26
    for j, (v, yr) in enumerate([(s["y2023"],"23"),(s["y2024"],"24"),(s["y2025"],"25")]):
        gx = bx0 + j * grp_w
        bar_h = max(4, int((v / maxQ) * bar_max_h))
        bx_ = gx + grp_w//2 - 18
        bx1 = gx + grp_w//2 + 18
        by1 = ry + ROW_H - 14
        by0 = by1 - bar_h
        draw.rectangle([(bx_, by0), (bx1, by1)], fill=hex2rgb(bar_color(v)))
        ct(draw, str(v),  (bx_+bx1)//2, by0-9,  F_BAR_V, "#374151")
        ct(draw, yr,      (bx_+bx1)//2, by1+8,  F_BAR_Y, "#94a3b8")

# ── 6. Totals row ─────────────────────────────────────────────────────────────
tot_y = TABLE_BODY + len(sorted_s) * ROW_H
draw.rectangle([(0, tot_y), (W, tot_y + ROW_H)], fill=hex2rgb("#111827"))
my = tot_y + ROW_H//2
lt(draw, "TOTAL", CX["code"][0], my, F_HDR, "white")
for col in ["y23","y24","y25","avg"]:
    x0, cw = CX[col]
    ct(draw, "100", x0+cw//2, my, F_HDR, "white")

# ── 7. Smart Study Strategy box ───────────────────────────────────────────────
sx_top = TABLE_BODY + len(sorted_s) * ROW_H + ROW_H + 20   # below totals row + gap
PAD = 22

# Outer box (light blue background)
rr(draw, (20, sx_top, W-20, sx_top + STRAT_H), 16, "#eff6ff", outline="#93c5fd", lw=2)

# Title
ct(draw, "Smart Study Strategy  —  based on this data",
   W//2, sx_top + PAD + 12, F_STRAT_T, "#0f172a")

# Divider line under title
draw.line([(40, sx_top+PAD+30), (W-40, sx_top+PAD+30)], fill=hex2rgb("#bfdbfe"), width=1)

# Two sub-boxes side by side
sub_top  = sx_top + PAD + 40
sub_h    = STRAT_H - PAD - 55
sub_w    = (W - 70) // 2
gap      = 20

MUST_ITEMS = [
    ("DA-101/102/201  Agronomy",    "avg 16.7 Qs"),
    ("DA-121/122  Soil Science",    "avg 13.0 Qs"),
    ("DA-131/132  Entomology",      "avg 12.3 Qs"),
    ("DA-281/282  Horticulture",    "avg 12.0 Qs"),
    ("DA-291  Extension",           "avg 10.3 Qs"),
]
HIGH_ITEMS = [
    ("DA-151  Farm Machinery",      "avg 7.0 Qs"),
    ("DA-241  Economics",           "avg 6.7 Qs"),
    ("DA-171  Plant Pathology",     "avg 6.0 Qs"),
    ("DA-111  Plant Breeding",      "avg 5.7 Qs"),
    ("DA-252  Survey & Levelling",  "avg 5.3 Qs"),
]

for col_i, (heading, hcol, items) in enumerate([
    ("Must-Study Subjects  (~55-60 Qs)", "#1e3a5f", MUST_ITEMS),
    ("High Priority Subjects  (~25-30 Qs)", "#1d4ed8", HIGH_ITEMS),
]):
    bx0 = 30 + col_i * (sub_w + gap)
    bx1 = bx0 + sub_w
    # White card
    rr(draw, (bx0, sub_top, bx1, sub_top + sub_h), 12, "white", outline="#bfdbfe", lw=2)

    # Heading bar
    rr(draw, (bx0, sub_top, bx1, sub_top + 38), 12, hcol)
    # Fix corners — fill bottom corners of heading bar (so it doesn't round at bottom)
    draw.rectangle([(bx0, sub_top+20), (bx1, sub_top+38)], fill=hex2rgb(hcol))
    ct(draw, heading, (bx0+bx1)//2, sub_top+19, F_STRAT_H, "white")

    # Rows
    row_start = sub_top + 48
    row_step  = (sub_h - 54) // len(items)
    for j, (label, avg_txt) in enumerate(items):
        ry2 = row_start + j * row_step
        # Subtle alternating bg
        if j % 2 == 0:
            draw.rectangle([(bx0+4, ry2-1), (bx1-4, ry2+row_step-4)], fill=hex2rgb("#f8fafc"))
        # Bullet dot
        dot_x = bx0 + 18
        dot_y = ry2 + row_step//2
        draw.ellipse([(dot_x-4, dot_y-4), (dot_x+4, dot_y+4)], fill=hex2rgb(hcol))
        # Label
        lt(draw, label, dot_x + 14, dot_y, F_STRAT_R, "#1f2937")
        # Avg (right-aligned)
        bb = draw.textbbox((0,0), avg_txt, font=F_STRAT_B)
        aw = bb[2]-bb[0]
        draw.text((bx1 - aw - 16, dot_y - (bb[3]-bb[1])//2), avg_txt,
                  font=F_STRAT_B, fill=hex2rgb(hcol))

# ── Save ─────────────────────────────────────────────────────────────────────
out = r"C:\Users\bioas\Agricet Mock Test Series\AGRICET_Question_Analysis.jpg"
img.save(out, format="JPEG", quality=95)
print("Saved:", out, "| size:", img.size)
