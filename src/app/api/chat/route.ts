import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";
import pdfData from "@/data/pdf-chunks.json";

interface PdfChunk {
  id: string;
  subjectId: string;
  subjectName: string;
  text: string;
}

// Keyword-based search — finds the most relevant chunks for a query
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
    "so","as","up","out","if","no","nor","yet","either","neither",
  ]);

  const keywords = queryLower
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(w => w.length >= 3 && !stopWords.has(w));

  if (keywords.length === 0) return [];

  const chunks = pdfData.chunks as PdfChunk[];

  const scored = chunks.map(chunk => {
    const textLower = chunk.text.toLowerCase();
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
    const subjectLower = chunk.subjectName.toLowerCase();
    if (keywords.some(kw => subjectLower.includes(kw))) score *= 1.5;
    return { chunk, score };
  });

  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map(s => s.chunk);
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

    // Search for relevant PDF chunks — 2 chunks, truncated to 120 words each
    const relevantChunks = searchChunks(question, 2);

    // Build context — truncate each chunk to keep tokens low
    const truncate = (text: string, maxWords = 120) =>
      text.split(/\s+/).slice(0, maxWords).join(" ");

    let context = "";
    if (relevantChunks.length > 0) {
      context = relevantChunks
        .map(c => `[${c.subjectName}]: ${truncate(c.text)}`)
        .join("\n\n");
    }

    const systemPrompt = `You are an AGRICET study assistant for PJTSAU Diploma students. Answer clearly and briefly.
${context ? `\nReferences:\n${context}\n\nUse above as primary source.` : "Use standard agricultural science knowledge."}`;

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
