import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import pdfData from "@/data/pdf-chunks.json";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

interface PdfChunk {
  id: string;
  subjectId: string;
  subjectName: string;
  text: string;
}

// Simple keyword-based search — finds the most relevant chunks for a query
function searchChunks(query: string, topK = 5): PdfChunk[] {
  const queryLower = query.toLowerCase();

  // Tokenize: keep words of length >= 3, remove stop words
  const stopWords = new Set([
    "the","and","is","in","of","a","an","to","for","with","what","how",
    "are","was","were","has","have","had","be","by","at","on","or","it",
    "its","this","that","which","do","does","did","can","could","would",
    "should","will","may","might","from","into","about","also","more",
    "than","but","not","your","you","please","tell","me","give","explain",
    "define","describe","what","why","when","where","who","all","some",
    "any","each","both","few","most","other","such","only","own","same",
    "so","as","up","out","if","no","nor","yet","both","either","neither",
  ]);

  const keywords = queryLower
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(w => w.length >= 3 && !stopWords.has(w));

  if (keywords.length === 0) return [];

  const chunks = pdfData.chunks as PdfChunk[];

  // Score each chunk
  const scored = chunks.map(chunk => {
    const textLower = chunk.text.toLowerCase();
    let score = 0;

    for (const kw of keywords) {
      // Exact match: higher weight
      const count = (textLower.match(new RegExp(kw, "g")) || []).length;
      score += count * 2;

      // Partial match (stem): lower weight
      if (kw.length > 4) {
        const stem = kw.slice(0, -2);
        const partialCount = (textLower.match(new RegExp(stem, "g")) || []).length - count;
        score += Math.max(0, partialCount);
      }
    }

    // Boost if subject name matches query
    const subjectLower = chunk.subjectName.toLowerCase();
    if (keywords.some(kw => subjectLower.includes(kw))) {
      score *= 1.5;
    }

    return { chunk, score };
  });

  // Sort by score and pick top K unique subject chunks
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

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json({
        error: "AI service not configured. Please contact the administrator."
      }, { status: 503 });
    }

    // Search for relevant PDF chunks
    const relevantChunks = searchChunks(question, 5);

    // Build context from chunks
    let context = "";
    if (relevantChunks.length > 0) {
      context = relevantChunks
        .map(c => `[From ${c.subjectName}]\n${c.text}`)
        .join("\n\n---\n\n");
    }

    // Build conversation history for Claude
    const messages: Anthropic.MessageParam[] = [];

    // Add previous conversation turns (last 6 messages max)
    const recentHistory = (history || []).slice(-6);
    for (const msg of recentHistory) {
      messages.push({
        role: msg.role,
        content: msg.content,
      });
    }

    // Add current question
    messages.push({
      role: "user",
      content: question,
    });

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

${context ? `Reference excerpts from PJTSAU study material:\n\n${context}\n\nUse the above excerpts as primary source. Answer in clear, exam-focused language.` : "Answer based on standard agricultural science knowledge."}`

    const response = await anthropic.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 600,
      system: systemPrompt,
      messages,
    });

    const answer = response.content[0].type === "text" ? response.content[0].text : "";

    return NextResponse.json({
      answer,
      sources: relevantChunks.map(c => c.subjectName).filter((v, i, a) => a.indexOf(v) === i),
    });
  } catch (err: unknown) {
    console.error("Chat API error:", err);
    // Surface a helpful message for common errors
    const msg = err instanceof Error ? err.message : String(err);
    const userMsg = msg.includes("Could not resolve authentication")
      || msg.includes("invalid x-api-key")
      || msg.includes("authentication_error")
      ? "Invalid API key. Please check the ANTHROPIC_API_KEY in Vercel settings."
      : msg.includes("model")
      ? `Model error: ${msg}`
      : "Failed to get answer. Please try again.";
    return NextResponse.json({ error: userMsg }, { status: 500 });
  }
}
