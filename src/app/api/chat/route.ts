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

    // Search for relevant PDF chunks (3 chunks to stay within token limits)
    const relevantChunks = searchChunks(question, 3);

    // Build context from chunks
    let context = "";
    if (relevantChunks.length > 0) {
      context = relevantChunks
        .map(c => `[From ${c.subjectName}]\n${c.text}`)
        .join("\n\n---\n\n");
    }

    const systemPrompt = `You are an expert agricultural study assistant for PJTSAU AGRICET preparation.
You help Diploma in Agriculture students (2nd year) understand and revise concepts from their official PJTSAU theory notes.

Your role:
- Answer student doubts clearly and concisely in simple language
- Focus on facts, definitions, and exam-relevant information
- Use the provided reference excerpts from PJTSAU study material when relevant
- If the answer is not clearly in the references, use your agricultural knowledge but mention it
- Keep answers brief and focused (2-5 sentences for simple questions, up to 1 paragraph for complex ones)
- Use bullet points for lists and comparisons
- For formula/numerical questions, show the calculation clearly

${context
  ? `Reference excerpts from PJTSAU study material:\n\n${context}\n\nUse the above excerpts as primary source. Answer in clear, exam-focused language.`
  : "Answer based on standard agricultural science knowledge."}`;

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

    // Groq — free tier: 14,400 requests/day
    const groq = new Groq({ apiKey });
    // Try primary model, fall back to secondary if it fails
    let completion;
    try {
      completion = await groq.chat.completions.create({
        model: "llama-3.1-8b-instant",
        messages,
        max_tokens: 500,
        temperature: 0.3,
      });
    } catch {
      // Fallback model
      completion = await groq.chat.completions.create({
        model: "llama3-8b-8192",
        messages,
        max_tokens: 500,
        temperature: 0.3,
      });
    }

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
