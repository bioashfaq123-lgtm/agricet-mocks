import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
from matplotlib.patches import FancyBboxPatch
import numpy as np
from PIL import Image, ImageDraw, ImageFont
import io

# ── Data ─────────────────────────────────────────────────────────────────────
data = [
    ("DA-101", "Agronomy",        100, 140, "Core"),
    ("DA-102", "Kharif Crops",    100, 150, "Core"),
    ("DA-111", "Plant Breeding",  100, 152, "Core"),
    ("DA-121", "Soil Chemistry",  100, 151, "Core"),
    ("DA-122", "Manures &\nFert.",100, 150, "Core"),
    ("DA-131", "Entomology",      100, 135, "Core"),
    ("DA-132", "Crop Pests",      100, 120, "Core"),
    ("DA-151", "Farm Machinery",  100, 157, "Engineering"),
    ("DA-171", "Plant Pathology", 100,  92, "Core"),
    ("DA-201", "Rabi Crops",      100, 157, "Core"),
    ("DA-241", "Agri. Economics", 100,  80, "Social"),
    ("DA-252", "Survey &\nLevel.",100,  75, "Engineering"),
    ("DA-281", "Forestry",        100,  70, "Core"),
    ("DA-282", "Horticulture",    100,  73, "Core"),
    ("DA-291", "Extension",       100, 156, "Social"),
    ("DA-262", "Computers",       100,  70, "General"),
    ("DA-263", "English",         100,  73, "General"),
]

codes  = [d[0] for d in data]
names  = [d[1] for d in data]
orig   = np.array([d[2] for d in data])
lec    = np.array([d[3] for d in data])
total  = orig + lec
cats   = [d[4] for d in data]

CAT_DARK  = {"Core":"#15803d","Engineering":"#b45309","Social":"#6d28d9","General":"#0369a1"}
CAT_LIGHT = {"Core":"#bbf7d0","Engineering":"#fde68a","Social":"#ddd6fe","General":"#bae6fd"}
c_dark    = [CAT_DARK[c]  for c in cats]
c_light   = [CAT_LIGHT[c] for c in cats]

DPI = 150
FIG_W, FIG_H = 20, 11   # inches for the chart-only portion

# ── Chart (no header/footer — we add those with PIL) ─────────────────────────
fig = plt.figure(figsize=(FIG_W, FIG_H), facecolor='#f0fdf4')

# ── Stats row (5 white cards) ─────────────────────────────────────────────────
total_all = int(total.sum()) + 100
stats = [
    ("18",             "Subjects"),
    (f"{total_all:,}", "Total MCQs"),
    (f"{int(orig.sum())+100:,}", "Full-Test MCQs"),
    (f"{int(lec.sum()):,}",      "Lecture MCQs"),
    ("Rs. 100",        "Lifetime Access"),
]

ax_stats = fig.add_axes([0.01, 0.87, 0.98, 0.11])
ax_stats.set_facecolor('#f0fdf4')
ax_stats.axis('off')

cw = 0.98 / len(stats)
for i, (val, lbl) in enumerate(stats):
    x0 = 0.01 + i * cw
    rect = FancyBboxPatch(
        (x0 + 0.004, 0.05), cw - 0.008, 0.90,
        boxstyle="round,pad=0.01",
        linewidth=2, edgecolor='#86efac', facecolor='white',
        transform=ax_stats.transAxes, zorder=2
    )
    ax_stats.add_patch(rect)
    ax_stats.text(x0 + cw/2, 0.62, val,
        ha='center', va='center', fontsize=17, fontweight='bold', color='#14532d',
        transform=ax_stats.transAxes, zorder=3)
    ax_stats.text(x0 + cw/2, 0.18, lbl,
        ha='center', va='center', fontsize=9.5, color='#374151',
        transform=ax_stats.transAxes, zorder=3)

# ── Main bar chart ────────────────────────────────────────────────────────────
ax = fig.add_axes([0.06, 0.08, 0.92, 0.76])
ax.set_facecolor('#f0fdf4')

x = np.arange(len(data))
w = 0.62

ax.bar(x, orig, width=w, color=c_light, zorder=2)
ax.bar(x, lec,  width=w, bottom=orig, color=c_dark, zorder=2)

# Dashed baseline at 100
ax.axhline(100, color='#9ca3af', lw=1.1, ls='--', zorder=1)
ax.text(16.48, 102, '100 base MCQs', fontsize=7.5, color='#6b7280', ha='right', va='bottom')

# Total labels above bars
for xi, tot in zip(x, total):
    ax.text(xi, tot + 3, str(tot), ha='center', va='bottom',
            fontsize=9.5, fontweight='bold', color='#1f2937')

# +N labels inside dark section
for xi, o, l in zip(x, orig, lec):
    ax.text(xi, o + l/2, f'+{l}', ha='center', va='center',
            fontsize=8.5, fontweight='bold', color='white', alpha=0.93)

# X-axis tick labels (two lines: code + name)
tick_labels = [f'{c}\n{n}' for c, n in zip(codes, names)]
ax.set_xticks(x)
ax.set_xticklabels(tick_labels, fontsize=8.2, color='#374151',
                   linespacing=1.4, ha='center')
ax.tick_params(axis='x', length=0, pad=6)

# Y-axis / grid
ax.yaxis.grid(True, ls='--', alpha=0.45, color='#d1d5db', zorder=0)
ax.set_axisbelow(True)
ax.set_xlim(-0.6, len(data) - 0.4)
ax.set_ylim(0, max(total) * 1.14)
ax.set_ylabel('Number of MCQs', fontsize=11, color='#374151', labelpad=10)
ax.set_title(
    'MCQs per Subject  (light bar = original 100  |  dark bar = lecture-wise additions)',
    fontsize=12, fontweight='bold', color='#14532d', pad=10)
ax.tick_params(axis='y', labelsize=9, colors='#6b7280')
for sp in ax.spines.values():
    sp.set_visible(False)

# Legends
cat_p = [mpatches.Patch(color=CAT_DARK[k], label=k) for k in CAT_DARK]
type_p = [
    mpatches.Patch(facecolor='#d1fae5', edgecolor='#9ca3af', lw=1, label='Original 100 MCQs'),
    mpatches.Patch(facecolor='#15803d', label='Lecture-wise MCQs'),
]
lg1 = ax.legend(handles=cat_p, title='Category', fontsize=8.5,
                title_fontsize=9, loc='upper left', ncol=2,
                framealpha=0.93, edgecolor='#e5e7eb', borderpad=0.7)
ax.add_artist(lg1)
ax.legend(handles=type_p, title='Bar section', fontsize=8.5,
          title_fontsize=9, loc='upper right',
          framealpha=0.93, edgecolor='#e5e7eb', borderpad=0.7)

# ── Render chart to in-memory PNG ────────────────────────────────────────────
buf = io.BytesIO()
fig.savefig(buf, format='png', dpi=DPI, facecolor='#f0fdf4')
plt.close(fig)
buf.seek(0)
chart_img = Image.open(buf).convert('RGB')

cw_px, ch_px = chart_img.size   # e.g. 3000 × 1650

# ── PIL: add header + footer bands ───────────────────────────────────────────
HDR_H = int(ch_px * 0.095)   # ~9.5% of chart height
FTR_H = int(ch_px * 0.065)   # ~6.5% of chart height

total_h = HDR_H + ch_px + FTR_H
canvas = Image.new('RGB', (cw_px, total_h), '#f0fdf4')

# Paste chart into middle
canvas.paste(chart_img, (0, HDR_H))

draw = ImageDraw.Draw(canvas)

# ── Header band ──────────────────────────────────────────────────────────────
draw.rectangle([(0, 0), (cw_px, HDR_H)], fill='#14532d')

# Try to load a nicer font; fall back to default
try:
    font_title = ImageFont.truetype("arialbd.ttf", size=int(HDR_H * 0.42))
    font_sub   = ImageFont.truetype("arial.ttf",   size=int(HDR_H * 0.22))
except OSError:
    try:
        font_title = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", size=int(HDR_H * 0.42))
        font_sub   = ImageFont.truetype("C:/Windows/Fonts/arial.ttf",   size=int(HDR_H * 0.22))
    except OSError:
        font_title = ImageFont.load_default()
        font_sub   = ImageFont.load_default()

title_text = "AGRICET Mock Test Series  —  Subject-wise Question Bank Weightage"
sub_text   = "Nalanda Study Circle, Jagtial  |  17 Subjects + PYQ Papers  |  Lecture-wise Practice  |  Rs. 100 Lifetime"

# Center title
bb = draw.textbbox((0, 0), title_text, font=font_title)
tw = bb[2] - bb[0]
tx = (cw_px - tw) // 2
ty = int(HDR_H * 0.12)
draw.text((tx, ty), title_text, fill='white', font=font_title)

# Center subtitle
bb2 = draw.textbbox((0, 0), sub_text, font=font_sub)
sw = bb2[2] - bb2[0]
sx = (cw_px - sw) // 2
sy = int(HDR_H * 0.62)
draw.text((sx, sy), sub_text, fill='#86efac', font=font_sub)

# ── Footer band ──────────────────────────────────────────────────────────────
fy = HDR_H + ch_px
draw.rectangle([(0, fy), (cw_px, total_h)], fill='#14532d')

try:
    font_foot = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", size=int(FTR_H * 0.38))
except OSError:
    font_foot = ImageFont.load_default()

foot_text = ("Prepared by  NALANDA STUDY CIRCLE, JAGTIAL  |  "
             "agricet-mocks-8mry.vercel.app  |  "
             "17 Subjects + PYQ Papers 2023, 2024, 2025  |  Rs.100 One-time Lifetime Access")
bb3 = draw.textbbox((0, 0), foot_text, font=font_foot)
fw = bb3[2] - bb3[0]
fx = (cw_px - fw) // 2
fy2 = fy + (FTR_H - (bb3[3] - bb3[1])) // 2
draw.text((fx, fy2), foot_text, fill='#86efac', font=font_foot)

# ── Save ─────────────────────────────────────────────────────────────────────
out = r"C:\Users\bioas\Agricet Mock Test Series\AGRICET_Weightage_Analysis.jpg"
canvas.save(out, format='JPEG', quality=95)
print("Saved OK:", out, " | size:", canvas.size)
