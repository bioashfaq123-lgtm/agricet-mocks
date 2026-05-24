import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";
import pdfData from "@/data/pdf-chunks.json";

interface PdfChunk {
  id: string;
  subjectId: string;
  subjectName: string;
  text: string;
}

// Subject-specific keyword boosts — routes questions to the right subject
const SUBJECT_BOOSTS: { keywords: string[]; subjects: string[] }[] = [
  { keywords: ["wilt","blight","rot","disease","fungus","bacteria","virus","pathogen","symptom","infection","pathology","sclerotia","lesion","canker","mosaic","yellowing","damping"], subjects: ["da-171","plant pathology","disease"] },
  { keywords: ["insect","pest","borer","worm","aphid","bug","larva","pupa","adult","nymph","mite","thrips","whitefly","entomology","leafhopper"], subjects: ["da-131","entomology","pest"] },
  { keywords: ["spray","fungicide","pesticide","herbicide","weedicide","insecticide","chemical control","ipm","integrated pest"], subjects: ["da-132","crop protection"] },
  { keywords: ["variety","hybrid","breed","cross","selection","genetics","mendelian","gene","chromosome","mutation","polyploidy","breeding"], subjects: ["da-151","plant breeding","genetics"] },
  { keywords: ["soil","fertilizer","npk","nitrogen","phosphorus","potassium","nutrient","deficiency","manure","compost","organic matter","ph","salinity"], subjects: ["da-122","soil","fertility"] },
  { keywords: ["seed","germination","viability","vigour","certification","ista","moisture content","seed rate"], subjects: ["da-111","seed technology"] },
  { keywords: ["irrigation","drip","sprinkler","water","delta","duty","consumptive use","evapotranspiration"], subjects: ["irrigation"] },
  { keywords: ["harvest","post harvest","storage","ripening","grading","processing","preservation","cold storage"], subjects: ["post harvest"] },
  { keywords: ["fruit","vegetable","horticulture","orchard","nursery","grafting","pruning","mango","banana","tomato","brinjal","chilli","onion","potato"], subjects: ["horticulture"] },
  { keywords: ["extension","rural","community","communication","t&v","transfer of technology","adoption","diffusion"], subjects: ["extension"] },
  { keywords: ["agronomy","kharif","rabi","cropping","tillage","sowing","transplanting","spacing","yield","intercropping"], subjects: ["agronomy","principles of agronomy"] },
  { keywords: ["weather","temperature","rainfall","humidity","wind","climate","meteorology","evaporation"], subjects: ["meteorology"] },
  { keywords: ["tractor","machinery","implement","plough","cultivator","harvester","thresher","farm machinery"], subjects: ["farm machinery"] },
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

  const keywords = queryLower
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(w => w.length >= 3 && !stopWords.has(w));

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
      score *= 2.0; // Strong boost to prioritise correct subject
    } else if (keywords.some(kw => subjectLower.includes(kw))) {
      score *= 1.5;
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
