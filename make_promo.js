// AGRICET MOCKS Promotional Poster
// Layout: LAYOUT_16x9 (10" × 5.625")
// Colors: Forest green dominant (#1B4332 bg, #2D6A4F panel), gold (#F59E0B), white text

const pptxgen = require("pptxgenjs");

let pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "AGRICET MOCKS";
pres.title = "AGRICET MOCKS Promotional Poster";

let slide = pres.addSlide();

// ─── BACKGROUND ──────────────────────────────────────────────────────────────
slide.background = { color: "1B4332" };

// Left panel lighter green (x:0, y:0, w:3.0, h:5.625)
slide.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 3.0, h: 5.625,
  fill: { color: "2D6A4F" },
  line: { color: "2D6A4F" }
});

// Dark left edge strip for depth
slide.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 0.07, h: 5.625,
  fill: { color: "163D2A" },
  line: { color: "163D2A" }
});

// Gold vertical accent — right edge of left panel
slide.addShape(pres.shapes.RECTANGLE, {
  x: 2.95, y: 0.25, w: 0.055, h: 5.125,
  fill: { color: "F59E0B" },
  line: { color: "F59E0B" }
});

// ─── LEFT PANEL CONTENT ──────────────────────────────────────────────────────

// "AGRICET" — large Impact white
slide.addText("AGRICET", {
  x: 0.1, y: 0.45, w: 2.75, h: 0.9,
  fontSize: 40,
  fontFace: "Impact",
  color: "FFFFFF",
  align: "center",
  margin: 0
});

// "MOCKS" — gold
slide.addText("MOCKS", {
  x: 0.1, y: 1.3, w: 2.75, h: 0.9,
  fontSize: 40,
  fontFace: "Impact",
  color: "F59E0B",
  align: "center",
  margin: 0
});

// Seedling emoji
slide.addText("🌱", {
  x: 0.1, y: 2.15, w: 2.75, h: 0.6,
  fontSize: 34,
  align: "center",
  margin: 0
});

// "Mock Test Platform" label
slide.addText("Mock Test Platform", {
  x: 0.15, y: 2.72, w: 2.6, h: 0.38,
  fontSize: 12,
  fontFace: "Calibri",
  color: "B7E4C7",
  align: "center",
  margin: 0
});

// Divider line in left panel
slide.addShape(pres.shapes.RECTANGLE, {
  x: 0.35, y: 3.18, w: 2.1, h: 0.04,
  fill: { color: "4A9068" },
  line: { color: "4A9068" }
});

// "TRY 10 FREE QUESTIONS" gold pill button
slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 0.25, y: 3.32, w: 2.4, h: 0.45,
  fill: { color: "F59E0B" },
  line: { color: "D97706", width: 1 },
  rectRadius: 0.1
});
slide.addText("TRY 10 FREE QUESTIONS", {
  x: 0.25, y: 3.32, w: 2.4, h: 0.45,
  fontSize: 9.5,
  fontFace: "Calibri",
  color: "1B4332",
  bold: true,
  align: "center",
  valign: "middle",
  margin: 0
});

// "No Registration Needed"
slide.addText("No Registration Needed", {
  x: 0.15, y: 3.82, w: 2.6, h: 0.28,
  fontSize: 9,
  fontFace: "Calibri",
  color: "86EFAC",
  align: "center",
  margin: 0
});

// Helpline
slide.addText("📞  90593 36236", {
  x: 0.1, y: 5.22, w: 2.75, h: 0.28,
  fontSize: 10,
  fontFace: "Calibri",
  color: "D1FAE5",
  align: "center",
  margin: 0
});

// ─── RIGHT PANEL ─────────────────────────────────────────────────────────────
// Available: x=3.1 to 9.85 → width = 6.75"

// Main headline "Crack AGRICET" — Impact 46pt gold
slide.addText("Crack AGRICET", {
  x: 3.2, y: 0.22, w: 6.55, h: 0.9,
  fontSize: 48,
  fontFace: "Impact",
  color: "F59E0B",
  align: "left",
  margin: 0
});

// Sub-headline — Arial Black 20pt white (single line if possible)
slide.addText("Secure Your BSc (Hons) Agriculture Seat", {
  x: 3.2, y: 1.08, w: 6.55, h: 0.6,
  fontSize: 19,
  fontFace: "Arial Black",
  color: "FFFFFF",
  align: "left",
  margin: 0
});

// ─── 4 STAT CARDS — horizontal row ──────────────────────────────────────────
// 4 cards across: total width = 6.55", each card w=1.4, gap=0.22 between
// (4 * 1.4) + (3 * 0.22) = 5.6 + 0.66 = 6.26 → fits, left-aligned at x=3.2

const cW = 1.48;
const cH = 1.05;
const cGap = 0.15;
const cStartX = 3.22;
const cStartY = 1.82;

const stats = [
  { number: "3,400+", label: "MCQs" },
  { number: "17",     label: "Subjects" },
  { number: "3 Yrs",  label: "PYQs 2023–25" },
  { number: "94%",    label: "Success Rate" },
];

const mkSh = () => ({
  type: "outer", color: "000000", blur: 7, offset: 3, angle: 135, opacity: 0.2
});

stats.forEach((stat, i) => {
  const cx = cStartX + i * (cW + cGap);

  // White card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: cx, y: cStartY, w: cW, h: cH,
    fill: { color: "FFFFFF" },
    line: { color: "E5E7EB", width: 0.5 },
    shadow: mkSh()
  });

  // Gold top bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: cx, y: cStartY, w: cW, h: 0.06,
    fill: { color: "F59E0B" },
    line: { color: "F59E0B" }
  });

  // Stat number
  const numSize = stat.number.length > 5 ? 23 : 30;
  slide.addText(stat.number, {
    x: cx, y: cStartY + 0.1, w: cW, h: 0.56,
    fontSize: numSize,
    fontFace: "Impact",
    color: "F59E0B",
    align: "center",
    valign: "middle",
    margin: 0
  });

  // Label
  slide.addText(stat.label, {
    x: cx, y: cStartY + 0.68, w: cW, h: 0.32,
    fontSize: 10,
    fontFace: "Calibri",
    color: "374151",
    align: "center",
    valign: "top",
    margin: 0
  });
});

// ─── PRICE BADGE — below stat cards ──────────────────────────────────────────
// Full width of right panel, tall enough for price content
const badgeX = 3.22;
const badgeY = 3.02;
const badgeW = 6.52;
const badgeH = 1.25;

slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: badgeX, y: badgeY, w: badgeW, h: badgeH,
  fill: { color: "F59E0B" },
  line: { color: "D97706", width: 1.5 },
  rectRadius: 0.1,
  shadow: mkSh()
});

// Left side of badge — price content
// "LIMITED OFFER" small label
slide.addText("LIMITED OFFER", {
  x: badgeX + 0.15, y: badgeY + 0.08, w: 3.0, h: 0.25,
  fontSize: 10,
  fontFace: "Calibri",
  color: "7C2D12",
  bold: true,
  charSpacing: 3,
  align: "left",
  margin: 0
});

// Strike-through original price
slide.addText("₹999", {
  x: badgeX + 0.15, y: badgeY + 0.3, w: 2.0, h: 0.28,
  fontSize: 14,
  fontFace: "Calibri",
  color: "7C2D12",
  align: "left",
  strike: true,
  margin: 0
});

// Big price
slide.addText("₹100 Only", {
  x: badgeX + 0.1, y: badgeY + 0.46, w: 3.5, h: 0.62,
  fontSize: 42,
  fontFace: "Impact",
  color: "1B4332",
  align: "left",
  margin: 0
});

// Right side of badge — features
slide.addText([
  { text: "✓ ", options: { color: "1B4332", bold: true } },
  { text: "Lifetime Access\n", options: { color: "1B4332", bold: true } },
  { text: "✓ ", options: { color: "1B4332", bold: true } },
  { text: "All 17 Subjects\n", options: { color: "1B4332" } },
  { text: "✓ ", options: { color: "1B4332", bold: true } },
  { text: "Instant Results", options: { color: "1B4332" } },
], {
  x: badgeX + 3.75, y: badgeY + 0.08, w: 2.6, h: 1.1,
  fontSize: 13,
  fontFace: "Calibri",
  align: "left",
  margin: 0
});

// ─── FEATURE ROW ─────────────────────────────────────────────────────────────
const featY = 4.4;
slide.addText([
  { text: "✓ ", options: { color: "F59E0B", bold: true } },
  { text: "Detailed solutions for every question  ", options: { color: "D1FAE5" } },
  { text: "✓ ", options: { color: "F59E0B", bold: true } },
  { text: "Previous Year Papers: 2023, 2024, 2025", options: { color: "D1FAE5" } },
], {
  x: 3.22, y: featY, w: 6.52, h: 0.35,
  fontSize: 11,
  fontFace: "Calibri",
  align: "left",
  margin: 0
});

// ─── BOTTOM URL BAR ──────────────────────────────────────────────────────────
slide.addShape(pres.shapes.RECTANGLE, {
  x: 3.0, y: 5.2, w: 7.0, h: 0.42,
  fill: { color: "0D2318" },
  line: { color: "0D2318" }
});

slide.addText("🌐  agricet-mocks-8mry.vercel.app", {
  x: 3.0, y: 5.2, w: 7.0, h: 0.42,
  fontSize: 12.5,
  fontFace: "Calibri",
  color: "86EFAC",
  align: "center",
  valign: "middle",
  margin: 0
});

// ─── WRITE FILE ──────────────────────────────────────────────────────────────
pres.writeFile({ fileName: "promo-poster.pptx" }).then(() => {
  console.log("promo-poster.pptx created successfully!");
}).catch(err => {
  console.error("Error:", err);
  process.exit(1);
});
