import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { searchSourceChunks, truncateWords } from "@/lib/pdfSearch";

// ── AI Telugu Doubt-Solver ──────────────────────────────────────────────────
// Given a question the student just answered, generate a fresh, personalised
// explanation in simple Telugu — why the correct option is right, and (when the
// student picked wrong) why their choice was wrong. Grounded on the verified
// English explanation that ships with every question, so it cannot drift from
// the source notes.
//
// Reuses the same proven Groq → Gemini fallback the chatbot uses, so it relies
// only on API keys that are already configured in production.

// Vercel function limit: Hobby plan = 10s, Pro = 60s
export const maxDuration = 10;

// ── Simple in-memory rate limiter (per IP, 20 req/min) ──────────────────────
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();
function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + 60_000 });
    return false;
  }
  if (entry.count >= 20) return true;
  entry.count++;
  return false;
}
// Clean up stale entries every 5 minutes to prevent a memory leak.
setInterval(() => {
  const now = Date.now();
  for (const [k, v] of rateLimitStore) if (now > v.resetAt) rateLimitStore.delete(k);
}, 300_000);

interface ExplainBody {
  question?: unknown;
  options?: unknown;
  correctIndex?: unknown;
  userIndex?: unknown;
  explanation?: unknown;
  subject?: unknown;
  subjectId?: unknown;
}

const letter = (i: number) => String.fromCharCode(65 + i); // 0 → "A"

export async function POST(req: NextRequest) {
  try {
    // Rate limit check
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a minute and try again." },
        { status: 429 }
      );
    }

    const body = (await req.json()) as ExplainBody;
    const question = typeof body.question === "string" ? body.question.trim() : "";
    const options = Array.isArray(body.options)
      ? body.options.filter((o): o is string => typeof o === "string")
      : [];
    const correctIndex =
      typeof body.correctIndex === "number" ? body.correctIndex : -1;
    const userIndex =
      typeof body.userIndex === "number" ? body.userIndex : null;
    const baseExplanation =
      typeof body.explanation === "string" ? body.explanation.trim() : "";
    const subject = typeof body.subject === "string" ? body.subject.trim() : "";
    const subjectId = typeof body.subjectId === "string" ? body.subjectId.trim() : "";

    if (!question || options.length === 0 || correctIndex < 0 || correctIndex >= options.length) {
      return NextResponse.json({ error: "Invalid question payload." }, { status: 400 });
    }

    const apiKey = process.env.GROQ_API_KEY;
    const geminiKey = process.env.GEMINI_API_KEY;
    if (!apiKey && !geminiKey) {
      return NextResponse.json(
        { error: "AI service not configured. Please contact the administrator." },
        { status: 503 }
      );
    }

    const correctText = options[correctIndex];
    const optionsBlock = options.map((o, i) => `${letter(i)}. ${o}`).join("\n");

    const answeredWrong =
      userIndex !== null && userIndex >= 0 && userIndex !== correctIndex && userIndex < options.length;
    const userText = answeredWrong ? options[userIndex as number] : "";

    // Retrieve the most relevant source-note chunks from the official PJTSAU
    // PDFs (scoped to this question's subject) so the explanation is grounded
    // in the real study material, not just the one-line built-in note.
    let sourceNotes = "";
    try {
      const chunks = searchSourceChunks(`${question} ${correctText}`, subjectId || undefined, 4);
      if (chunks.length > 0) {
        sourceNotes = chunks
          .map((c) => `[${c.subjectName}]: ${truncateWords(c.text, 180)}`)
          .join("\n\n---\n\n");
      }
    } catch (searchErr) {
      console.error("Explain: source retrieval failed:", searchErr);
    }

    const systemPrompt = `You are a friendly AGRICET / AEO exam tutor for Telugu-medium Diploma in Agriculture students in Telangana and Andhra Pradesh.

Your job: explain a multiple-choice question in SIMPLE, clear Telugu (తెలుగు).

Strict rules:
- Reply ONLY in Telugu script. You may keep technical terms, crop names, chemical names, and the option letters (A, B, C, D) in English where that is how students actually read them.
- Ground your explanation in the "Source notes" and "Verified note" below — these come from the official PJTSAU course PDFs. Do NOT invent facts that contradict them. If they are short, you may add correct, well-known agricultural science to make it clear, but never change the given answer.
- Keep it short and exam-focused: about 3 to 5 sentences. No preamble like "Sure" or "Here is".
- First explain WHY the correct option is correct.
- ${answeredWrong ? "Then, in one line, gently explain why the option the student chose is wrong." : "Then add one quick memory tip or key point to remember for the exam."}
- Use a warm, encouraging tone, like a teacher helping one student.`;

    const userPrompt = `${subject ? `Subject: ${subject}\n` : ""}Question: ${question}

Options:
${optionsBlock}

Correct answer: ${letter(correctIndex)}. ${correctText}
${answeredWrong ? `The student chose (wrong): ${letter(userIndex as number)}. ${userText}` : `The student answered this correctly.`}

${sourceNotes ? `Source notes (English, retrieved from the official PJTSAU ${subject || "course"} PDF):\n${sourceNotes}\n\n` : ""}Verified note (English, the question's own explanation): ${baseExplanation || "(no extra note provided — rely on the source notes above and standard agricultural science)"}

Now write the Telugu explanation.`;

    // ── LLM: Groq first, Gemini Flash fallback (same as the chatbot) ──────────
    let answer = "";

    const groqAttempt = async (): Promise<string> => {
      if (!apiKey) throw new Error("No Groq key");
      const groq = new Groq({ apiKey });
      const timeoutPromise = new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error("Groq response timed out")), 8000)
      );
      const completion = await Promise.race([
        groq.chat.completions.create({
          model: "llama-3.3-70b-versatile",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt },
          ],
          max_tokens: 600,
          temperature: 0.4,
        }),
        timeoutPromise,
      ]);
      return completion.choices[0]?.message?.content ?? "";
    };

    const geminiAttempt = async (): Promise<string> => {
      if (!geminiKey) throw new Error("No Gemini key");
      const genAI = new GoogleGenerativeAI(geminiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const timeoutPromise = new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error("Gemini response timed out")), 8000)
      );
      const result = await Promise.race([
        model.generateContent(`${systemPrompt}\n\n${userPrompt}`),
        timeoutPromise,
      ]);
      return result.response.text();
    };

    try {
      answer = apiKey ? await groqAttempt() : await geminiAttempt();
    } catch (groqErr: unknown) {
      const groqMsg = groqErr instanceof Error ? groqErr.message : String(groqErr);
      console.warn("Explain: primary attempt failed:", groqMsg, "— trying fallback");
      try {
        answer = await geminiAttempt();
      } catch (geminiErr) {
        console.error("Explain: fallback also failed:", geminiErr);
        throw groqErr;
      }
    }

    answer = (answer || "").trim();
    if (!answer) {
      return NextResponse.json(
        { error: "Could not generate an explanation. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ answer });
  } catch (err: unknown) {
    console.error("Explain API error:", err);
    const msg = err instanceof Error ? err.message : String(err);
    const userMsg =
      msg.includes("invalid_api_key") || msg.includes("401")
        ? "AI service temporarily unavailable. Please try again in a moment."
        : msg.includes("rate_limit") || msg.includes("429")
        ? "The tutor is busy right now — please try again in a moment! 🙏"
        : msg.includes("timed out") || msg.includes("AbortError")
        ? "The tutor took too long to respond. Please try again."
        : "Something went wrong. Please try again in a moment.";
    return NextResponse.json({ error: userMsg }, { status: 500 });
  }
}
