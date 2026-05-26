const PptxGenJS = require("pptxgenjs");

const pres = new PptxGenJS();
pres.layout = "LAYOUT_4x3"; // Portrait-like A4 feel
pres.title = "AGRICET MOCKS Pamphlet";

const slide = pres.addSlide();

// ── Background ──
slide.background = { color: "F0FFF4" };

// ── Top green header band ──
slide.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 1.3,
  fill: { color: "1B6B2F" }, line: { color: "1B6B2F" }
});

// ── AGRICET MOCKS title ──
slide.addText("🌿 AGRICET MOCKS", {
  x: 0, y: 0.05, w: 10, h: 0.55,
  fontSize: 36, bold: true, color: "FFFFFF",
  align: "center", fontFace: "Arial Black", margin: 0
});

// ── Tagline ──
slide.addText("Crack AGRICET 2025 with Confidence!", {
  x: 0, y: 0.58, w: 10, h: 0.36,
  fontSize: 15, bold: true, color: "A8F0B8",
  align: "center", fontFace: "Arial", margin: 0
});

// ── Subtitle ──
slide.addText("India's Best Online Mock Test Platform for Diploma in Agriculture Students", {
  x: 0.2, y: 0.95, w: 9.6, h: 0.3,
  fontSize: 10, color: "D4F7DC", align: "center", fontFace: "Arial", margin: 0
});

// ── TWO COLUMN LAYOUT ──

// ── LEFT COLUMN: Features ──
slide.addShape(pres.shapes.RECTANGLE, {
  x: 0.15, y: 1.4, w: 5.6, h: 2.85,
  fill: { color: "FFFFFF" }, line: { color: "2D9B4E", width: 1.5 },
  shadow: { type: "outer", blur: 4, offset: 2, angle: 135, color: "000000", opacity: 0.1 }
});

slide.addText("✅  KEY FEATURES", {
  x: 0.25, y: 1.42, w: 5.4, h: 0.3,
  fontSize: 11, bold: true, color: "1B6B2F", align: "left", fontFace: "Arial Black", margin: 0
});

const features = [
  "18 Subjects — All DA-coded PJTSAU Diploma subjects",
  "100 Questions/Subject — Fresh 50 randomly every attempt!",
  "Never see the same paper twice — shuffles every time",
  "Computer Applications & English Communication included",
  "Previous Year Papers: 2023, 2024 & 2025 with answer keys",
  "Detailed explanations for every answer",
  "Practice on Mobile, Tablet or Desktop — anytime!",
  "Instant Results with subject-wise performance analysis",
  "One-time payment — Lifetime Access",
];

slide.addText(
  features.map((f, i) => ({
    text: f,
    options: { bullet: true, breakLine: i < features.length - 1, fontSize: 9.2, color: "1A3A1A", fontFace: "Arial" }
  })),
  { x: 0.25, y: 1.75, w: 5.4, h: 2.45, margin: 0 }
);

// ── RIGHT COLUMN: Fresh Questions Box ──
slide.addShape(pres.shapes.RECTANGLE, {
  x: 5.9, y: 1.4, w: 3.95, h: 1.3,
  fill: { color: "E8F4FF" }, line: { color: "2563EB", width: 1.5 },
  shadow: { type: "outer", blur: 4, offset: 2, angle: 135, color: "000000", opacity: 0.1 }
});
slide.addText("🔄  Fresh Questions Every Attempt!", {
  x: 6.0, y: 1.42, w: 3.75, h: 0.28,
  fontSize: 9.5, bold: true, color: "1D4ED8", fontFace: "Arial Black", margin: 0
});
slide.addText(
  "Each subject has 100 questions in the bank. Every time you practice, you get a randomly shuffled set of 50 NEW questions — practice again & again without repetition!",
  { x: 6.0, y: 1.72, w: 3.75, h: 0.93, fontSize: 8.5, color: "1E3A5F", fontFace: "Arial", margin: 0 }
);

// ── RIGHT COLUMN: Previous Year Papers Box ──
slide.addShape(pres.shapes.RECTANGLE, {
  x: 5.9, y: 2.82, w: 3.95, h: 1.43,
  fill: { color: "FFFBEA" }, line: { color: "D97706", width: 1.5 },
  shadow: { type: "outer", blur: 4, offset: 2, angle: 135, color: "000000", opacity: 0.1 }
});
slide.addText("📄  Previous Year Papers Included!", {
  x: 6.0, y: 2.84, w: 3.75, h: 0.28,
  fontSize: 9.5, bold: true, color: "92400E", fontFace: "Arial Black", margin: 0
});
slide.addText(
  "Practice with REAL AGRICET papers from 2023, 2024 & 2025. Understand the exact question pattern, difficulty level & topic weightage. No surprises on exam day!",
  { x: 6.0, y: 3.14, w: 3.75, h: 1.06, fontSize: 8.5, color: "78350F", fontFace: "Arial", margin: 0 }
);

// ── Subjects box ──
slide.addShape(pres.shapes.RECTANGLE, {
  x: 0.15, y: 4.35, w: 9.7, h: 1.52,
  fill: { color: "E6F9EE" }, line: { color: "2D9B4E", width: 1 }
});
slide.addText("📚  Subjects Covered:", {
  x: 0.25, y: 4.37, w: 9.5, h: 0.25,
  fontSize: 9.5, bold: true, color: "1B6B2F", fontFace: "Arial Black", margin: 0
});
const subjects =
  "DA-101 Agronomy  |  DA-102 Kharif Crops  |  DA-111 Plant Breeding & Seed Tech  |  DA-121 Soil Chemistry  |  DA-122 Soil & Water Conservation  |  DA-131 Entomology  |  DA-132 Crop Pests  |  DA-151 Farm Machinery  |  DA-171 Plant Pathology  |  DA-201 Rabi & Oilseeds  |  DA-241 Agri Economics  |  DA-252 Surveying & Land Records  |  DA-281 Forestry & Medicinal Plants  |  DA-282 Horticulture  |  DA-291 Extension Education  |  DA-262 Computer Applications  |  DA-263 English Communication  |  General Agriculture";
slide.addText(subjects, {
  x: 0.25, y: 4.63, w: 9.5, h: 1.2,
  fontSize: 8, color: "1A3A1A", fontFace: "Arial", margin: 0, wrap: true
});

// ── Pricing + QR Section ──
slide.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 5.97, w: 10, h: 1.53,
  fill: { color: "1B6B2F" }, line: { color: "1B6B2F" }
});

// Free demo
slide.addText("🆓  FREE Demo Available — Try Before You Buy!", {
  x: 0.2, y: 6.0, w: 5.5, h: 0.32,
  fontSize: 11, bold: true, color: "A8F0B8", fontFace: "Arial", margin: 0
});

// Price
slide.addText("💰  Full Access: Only ₹199  |  One-time Payment  |  Lifetime Access", {
  x: 0.2, y: 6.32, w: 6.5, h: 0.3,
  fontSize: 11, bold: true, color: "FFFFFF", fontFace: "Arial", margin: 0
});

// Website
slide.addText("🌐  agricet-mocks-8mry.vercel.app", {
  x: 0.2, y: 6.65, w: 6, h: 0.28,
  fontSize: 10, color: "A8F0B8", fontFace: "Arial", margin: 0
});

// QR Code using Google Charts API
const qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://agricet-mocks-8mry.vercel.app";
slide.addImage({
  path: qrUrl,
  x: 7.5, y: 5.88, w: 1.35, h: 1.35
});
slide.addText("Scan to Subscribe", {
  x: 7.1, y: 7.18, w: 2.1, h: 0.2,
  fontSize: 7.5, color: "A8F0B8", align: "center", fontFace: "Arial", margin: 0
});

// Start practicing CTA
slide.addText("🚀  Start Practicing Today — Limited Time Offer!", {
  x: 0.2, y: 7.18, w: 6.8, h: 0.25,
  fontSize: 9.5, bold: true, italic: true, color: "F9E795", fontFace: "Arial", margin: 0
});

pres.writeFile({ fileName: "C:/Users/bioas/Agricet Mock Test Series/AGRICET_MOCKS_Pamphlet.pptx" })
  .then(() => console.log("✅ Pamphlet created successfully!"))
  .catch(e => console.error("❌ Error:", e));
