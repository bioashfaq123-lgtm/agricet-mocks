import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";
import pdfData from "@/data/pdf-chunks.json";

interface PdfChunk {
  id: string;
  subjectId: string;
  subjectName: string;
  text: string;
}

// Subject-specific keyword boosts — CORRECT subject IDs from actual PDF data:
// da-101=Agronomy, da-102=Meteorology, da-111=Plant Pathology, da-121=Entomology,
// da-122=Beneficial Insects, da-131=Soil Science, da-132=Crop Protection Chemicals,
// da-151=Plant Breeding, da-171=Seed Technology, da-201=Farm Management,
// da-241=Agricultural Economics, da-252=Soil Fertility, da-262=Computer Applications,
// da-263=English Communication, da-281=Horticulture, da-282=Post Harvest, da-291=Extension
const SUBJECT_BOOSTS: { keywords: string[]; subjects: string[] }[] = [
  // Disease content is in da-111 (pathology), da-171 (seed tech covers crop diseases), da-132 (crop protection)
  { keywords: ["wilt","blight","rot","disease","fungus","bacteria","virus","pathogen","symptom","infection","pathology","sclerotia","lesion","canker","mosaic","yellowing","damping","smut","rust","anthracnose","cercospora","fusarium","alternaria","phytophthora"], subjects: ["da-111","da-171","da-132","plant pathology","seed technology","crop protection"] },
  { keywords: ["insect","pest","mite","aphid","bug","larva","pupa","adult","nymph","thrips","whitefly","leafhopper","entomology","metamorphosis","antenna","morphology"], subjects: ["da-121","entomology"] },
  { keywords: ["borer","shoot borer","fruit borer","beneficial insect","parasitoid","predator","biocontrol","natural enemy"], subjects: ["da-122","beneficial insect"] },
  { keywords: ["spray","fungicide","pesticide","herbicide","weedicide","insecticide","chemical control","ipm","integrated","formulation","toxicity"], subjects: ["da-132","crop protection"] },
  { keywords: ["soil","texture","structure","clay","sand","loam","horizon","profile","salinity","alkali","laterite","pedology","weathering"], subjects: ["da-131","soil science"] },
  { keywords: ["fertilizer","npk","nitrogen","phosphorus","potassium","nutrient","deficiency","manure","compost","organic matter","urea","dap","biofertilizer","micronutrient"], subjects: ["da-252","soil fertility"] },
  { keywords: ["variety","hybrid","cross","selection","genetics","mendelian","gene","chromosome","mutation","polyploidy","breeding","heterosis","inbreeding","self","outcrossing"], subjects: ["da-151","plant breeding"] },
  { keywords: ["seed","germination","viability","vigour","certification","ista","moisture","seed rate","seed testing","purity","dormancy","priming"], subjects: ["da-171","seed technology"] },
  { keywords: ["irrigation","drip","sprinkler","water","delta","duty","consumptive","evapotranspiration","canal","furrow","flood"], subjects: ["da-101","irrigation","agronomy"] },
  { keywords: ["harvest","post harvest","storage","ripening","grading","processing","preservation","cold storage","respiration","climacteric","curing"], subjects: ["da-282","post harvest"] },
  { keywords: ["fruit","vegetable","horticulture","orchard","nursery","grafting","pruning","mango","banana","citrus","papaya","guava","tomato","brinjal","chilli","onion","potato","okra"], subjects: ["da-281","horticulture"] },
  { keywords: ["extension","rural","community","communication","transfer of technology","adoption","diffusion","village","farmer","kisan"], subjects: ["da-291","extension"] },
  { keywords: ["agronomy","kharif","rabi","cropping","tillage","sowing","transplanting","spacing","yield","intercropping","weed","pakka"], subjects: ["da-101","agronomy"] },
  { keywords: ["weather","temperature","rainfall","humidity","wind","climate","meteorology","evaporation","sunshine","solar radiation"], subjects: ["da-102","meteorology"] },
  { keywords: ["economics","cost","profit","market","price","demand","supply","income","expenditure","farm management","break even"], subjects: ["da-201","da-241","economics"] },
];

// Keyword-based search with subject-aware boosting
function searchChunks(query: string, topK = 5): PdfChunk[] {
  const queryLower = query.toLowerCase();

  const stopWords = new Set([
    "the","and","is","in","of","a","an","to","for","with","what","how",
    "are","was","were","has","have","had","be","by","at","on","or","it",
    "its","this","that","which","do","does","did","can","could","would",
    "should","will","may","might","from","into","about","also","more",
    "than","but","not","your","you","please","tell","me","give","explain",
    "define","describe","what","why","when","where","who","all","some",
    "any","each","both","few","most","other","such","only","own","same",
    "so","as","up","out","if","no","nor","yet","either","neither","tolerant",
    "resistant","variety","give","name","list","mention","what",
  ]);

  // Important agricultural terms that should NOT be stop words
  const keepWords = new Set([
    "tolerant","resistant","variety","varieties","disease","wilt","blight","rot",
    "pest","insect","seed","soil","fertilizer","nutrient","deficiency","spray",
    "yield","crop","plant","leaf","stem","root","flower","fruit","seed",
  ]);

  const keywords = queryLower
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(w => w.length >= 3 && (!stopWords.has(w) || keepWords.has(w)));

  if (keywords.length === 0) return [];

  // Find which subjects to boost based on question keywords
  const boostedSubjects: string[] = [];
  for (const rule of SUBJECT_BOOSTS) {
    if (rule.keywords.some(k => queryLower.includes(k))) {
      boostedSubjects.push(...rule.subjects);
    }
  }

  const chunks = pdfData.chunks as PdfChunk[];

  const scored = chunks.map(chunk => {
    const textLower = chunk.text.toLowerCase();
    const subjectLower = chunk.subjectName.toLowerCase();
    let score = 0;

    for (const kw of keywords) {
      const count = (textLower.match(new RegExp(kw, "g")) || []).length;
      score += count * 2;
      if (kw.length > 4) {
        const stem = kw.slice(0, -2);
        const partialCount = (textLower.match(new RegExp(stem, "g")) || []).length - count;
        score += Math.max(0, partialCount);
      }
    }

    // Boost if subject matches question topic
    if (boostedSubjects.some(s => subjectLower.includes(s) || chunk.subjectId?.toLowerCase().includes(s))) {
      score *= 3.5; // Strong boost to prioritise correct subject
    } else if (keywords.some(kw => subjectLower.includes(kw))) {
      score *= 1.5;
    } else if (boostedSubjects.length > 0) {
      // Penalise clearly off-topic subjects when we know the right subject
      score *= 0.4;
    }

    return { chunk, score };
  });

  // Return top results ensuring at least 1 chunk from boosted subject if available
  const filtered = scored.filter(s => s.score > 0).sort((a, b) => b.score - a.score);
  return filtered.slice(0, topK).map(s => s.chunk);
}

export async function POST(req: NextRequest) {
  try {
    const { question, history } = await req.json();

    if (!question || typeof question !== "string") {
      return NextResponse.json({ error: "Question is required" }, { status: 400 });
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "AI service not configured. Please contact the administrator." },
        { status: 503 }
      );
    }

    // Search for relevant PDF chunks — 4 chunks, truncated to 150 words each
    const relevantChunks = searchChunks(question, 4);

    // Truncate each chunk to keep tokens manageable
    const truncate = (text: string, maxWords = 150) =>
      text.split(/\s+/).slice(0, maxWords).join(" ");

    let context = "";
    if (relevantChunks.length > 0) {
      context = relevantChunks
        .map(c => `[${c.subjectName}]:\n${truncate(c.text)}`)
        .join("\n\n---\n\n");
    }

    const systemPrompt = `You are an AGRICET study assistant for PJTSAU Diploma in Agriculture students (2nd year).

STRICT RULES:
- Answer ONLY from the reference excerpts below when available
- If the answer is clearly in the references, use it exactly — do NOT add or change information
- If references don't contain enough info, say "This specific detail is not in your PJTSAU notes. Based on general agriculture: ..." and then answer
- Keep answers short and exam-focused
- Use bullet points for lists

${context
  ? `PJTSAU Reference Material:\n\n${context}\n\nAnswer strictly based on the above references.`
  : "No specific reference found. Answer based on standard agricultural science and mention this."}`;

    // Build conversation history
    const messages: { role: "system" | "user" | "assistant"; content: string }[] = [
      { role: "system", content: systemPrompt },
    ];

    const recentHistory = (history || []).slice(-6);
    for (const msg of recentHistory) {
      messages.push({
        role: msg.role === "assistant" ? "assistant" : "user",
        content: msg.content,
      });
    }
    messages.push({ role: "user", content: question });

    // Groq — llama-3.1-8b-instant: 14,400 requests/day free
    const groq = new Groq({ apiKey });
    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages,
      max_tokens: 400,
      temperature: 0.3,
    });

    const answer = completion.choices[0]?.message?.content ?? "";

    return NextResponse.json({
      answer,
      sources: relevantChunks
        .map(c => c.subjectName)
        .filter((v, i, a) => a.indexOf(v) === i),
    });
  } catch (err: unknown) {
    console.error("Chat API error:", err);
    const msg = err instanceof Error ? err.message : String(err);
    const userMsg =
      msg.includes("invalid_api_key") || msg.includes("401")
        ? "Invalid API key. Please check GROQ_API_KEY in Vercel settings."
        : msg.includes("rate_limit") || msg.includes("429")
        ? "Too many requests. Please wait a moment and try again."
        : `Error: ${msg.slice(0, 200)}`;
    return NextResponse.json({ error: userMsg }, { status: 500 });
  }
}
