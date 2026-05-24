import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";
import pdfData from "@/data/pdf-chunks.json";

interface PdfChunk {
  id: string;
  subjectId: string;
  subjectName: string;
  text: string;
}

// ACTUAL content mapping (subjectName labels in JSON are WRONG — PDFs were mis-chunked):
// da-101 → Agronomy (label correct)
// da-102 → Crop Production I / Meteorology (label says Meteorology)
// da-111 → Plant Breeding & Seed Production (label says Plant Pathology — WRONG)
// da-121 → Soil Chemistry & Fertility (label says Entomology — WRONG)
// da-122 → Manures & Fertilizers (label says Beneficial Insects — WRONG)
// da-131 → Entomology & Pest Management (label says Soil Science — WRONG)
// da-132 → Pest Management / Crop Protection (label correct)
// da-151 → Farm Machinery & Power (label says Plant Breeding — WRONG)
// da-171 → Plant Pathology & Diseases (label says Seed Technology — WRONG)
// da-201 → Crop Production II (label says Farm Management — WRONG)
// da-241 → Farm Management & Agricultural Economics (label correct)
// da-252 → Land Surveying & Water Engineering (label says Soil Fertility — WRONG)
// da-262 → Computer Applications (label correct)
// da-263 → English Communication (label correct)
// da-281 → Forestry & Medicinal Plants (label says Horticulture — WRONG)
// da-282 → Horticultural Crops (label says Post Harvest — WRONG)
// da-291 → Extension Education (label correct)
const SUBJECT_BOOSTS: { keywords: string[]; subjects: string[] }[] = [
  // Plant Pathology & Diseases → da-171 (actual content), da-132 (pest/disease overlap)
  { keywords: ["wilt","blight","rot","disease","fungus","bacteria","virus","pathogen","symptom","infection","pathology","sclerotia","lesion","canker","mosaic","yellowing","damping","smut","rust","anthracnose","cercospora","fusarium","alternaria","phytophthora"], subjects: ["da-171","da-132"] },
  // Entomology → da-131 (actual entomology content), da-132 (pest management)
  { keywords: ["insect","pest","mite","aphid","bug","larva","pupa","adult","nymph","thrips","whitefly","leafhopper","entomology","metamorphosis","antenna","morphology"], subjects: ["da-131","da-132"] },
  // Beneficial Insects & Biocontrol → da-131 (entomology), da-132 (pest management)
  { keywords: ["borer","shoot borer","fruit borer","beneficial insect","parasitoid","predator","biocontrol","natural enemy"], subjects: ["da-131","da-132"] },
  // Crop Protection / Pesticides → da-132 (actual pest management content)
  { keywords: ["spray","fungicide","pesticide","herbicide","weedicide","insecticide","chemical control","ipm","integrated","formulation","toxicity"], subjects: ["da-132"] },
  // Soil Science → da-121 (actual soil chemistry & fertility content)
  { keywords: ["soil","texture","structure","clay","sand","loam","horizon","profile","salinity","alkali","laterite","pedology","weathering","ph","cation"], subjects: ["da-121"] },
  // Manures & Fertilizers → da-122 (actual manures content), da-121 (soil fertility)
  { keywords: ["fertilizer","npk","nitrogen","phosphorus","potassium","nutrient","deficiency","manure","compost","organic matter","urea","dap","biofertilizer","micronutrient","fym"], subjects: ["da-122","da-121"] },
  // Plant Breeding → da-111 (actual plant breeding & seed production content)
  { keywords: ["variety","hybrid","cross","selection","genetics","mendelian","gene","chromosome","mutation","polyploidy","breeding","heterosis","inbreeding","self","outcrossing","pollination","emasculation"], subjects: ["da-111"] },
  // Seed Technology → also da-111 (has seed production & certification content)
  { keywords: ["seed","germination","viability","vigour","certification","ista","moisture","seed rate","seed testing","purity","dormancy","priming","seed production"], subjects: ["da-111"] },
  // Irrigation & Agronomy → da-101
  { keywords: ["irrigation","drip","sprinkler","water","delta","duty","consumptive","evapotranspiration","canal","furrow","flood"], subjects: ["da-101"] },
  // Post Harvest / Storage → da-282 (horticultural crops section covers post-harvest too)
  { keywords: ["harvest","post harvest","storage","ripening","grading","processing","preservation","cold storage","respiration","climacteric","curing"], subjects: ["da-282"] },
  // Horticulture & Crops → da-282 (actual horticultural crops content)
  { keywords: ["fruit","vegetable","horticulture","orchard","nursery","grafting","pruning","mango","banana","citrus","papaya","guava","tomato","brinjal","chilli","onion","potato","okra","cucurbit"], subjects: ["da-282"] },
  // Extension Education → da-291 (correct)
  { keywords: ["extension","rural","community","transfer of technology","adoption","diffusion","village","farmer","kisan","krishi"], subjects: ["da-291"] },
  // Agronomy & Crop Production → da-101, da-201 (Crop Production II), da-102
  { keywords: ["agronomy","kharif","rabi","cropping","tillage","sowing","transplanting","spacing","intercropping","weed","pakka","crop rotation"], subjects: ["da-101","da-201","da-102"] },
  // Weather & Meteorology → da-102
  { keywords: ["weather","temperature","rainfall","humidity","wind","climate","meteorology","evaporation","sunshine","solar radiation","monsoon"], subjects: ["da-102"] },
  // Farm Management & Economics → da-241 (actual farm management content)
  { keywords: ["economics","cost","profit","market","price","demand","supply","income","expenditure","farm management","break even","benefit cost","bcr","msp"], subjects: ["da-241"] },
  // Farm Machinery → da-151 (actual farm machinery content)
  { keywords: ["machinery","tractor","implement","plough","harrow","cultivator","sprayer","harvester","thresher","pump","power tiller","equipment","horsepower","hp"], subjects: ["da-151"] },
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
    // Question-framing words that inflate scores via stem matching
    "known","called","termed","used","found","made","given","said","noted",
    "called","called","types","type","example","examples","following",
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

    // Coverage bonus: chunks that contain MORE unique query keywords rank higher.
    // This prevents high-frequency single-word matches (e.g. "seed" × 50 times)
    // from beating chunks that specifically answer the question (e.g. "father"+"seed"+"testing").
    if (keywords.length >= 2) {
      const uniqueMatched = keywords.filter(kw => textLower.includes(kw)).length;
      const coverageRatio = uniqueMatched / keywords.length;
      if (coverageRatio >= 1.0) score *= 6.0;       // matches ALL keywords — very strong signal
      else if (coverageRatio >= 0.75) score *= 2.5;  // matches 75%+ keywords
      else if (coverageRatio >= 0.5) score *= 1.2;   // matches half
    }

    // Boost if subject matches question topic
    if (boostedSubjects.some(s => subjectLower.includes(s) || chunk.subjectId?.toLowerCase().includes(s))) {
      score *= 5; // Strong boost to prioritise correct subject
    } else if (keywords.some(kw => subjectLower.includes(kw))) {
      score *= 1.5;
    } else if (boostedSubjects.length > 0) {
      // Penalise clearly off-topic subjects when we know the right subject
      score *= 0.2;
    }

    return { chunk, score };
  });

  // Get top-K scoring chunks
  const filtered = scored.filter(s => s.score > 0).sort((a, b) => b.score - a.score);
  const topChunks = filtered.slice(0, topK).map(s => s.chunk);

  // Expand: for each top chunk, also include adjacent same-subject chunks (before/after)
  // This captures answer details that are split across chunk boundaries
  const seen = new Set<string>();
  const expanded: PdfChunk[] = [];
  const addWithNeighbors = (chunk: PdfChunk, lookAhead = 1) => {
    const idx = chunks.indexOf(chunk);
    for (let ni = idx - 1; ni <= idx + lookAhead; ni++) {
      if (ni >= 0 && ni < chunks.length) {
        const neighbor = chunks[ni];
        const key = `${neighbor.subjectId}-${ni}`;
        if (!seen.has(key) && neighbor.subjectId === chunk.subjectId) {
          seen.add(key);
          expanded.push(neighbor);
        }
      }
    }
  };
  for (const chunk of topChunks) addWithNeighbors(chunk, 1);

  // Secondary targeted search: if query contains a specific crop/organism name (>= 6 chars),
  // find the best matching chunk in the boosted subjects that mentions that exact term,
  // then include it + the next 3 chunks (to capture management/variety details that follow).
  const genericTerms = new Set([
    "disease","pathogen","variety","varieties","fungus","tolerant","resistant","spray",
    "fertilizer","nutrient","deficiency","germination","seed","insect","plant","crop",
    "soil","yield","water","temperature","weather","season","farmer","village",
  ]);
  const specificTerms = keywords.filter(kw => kw.length >= 6 && !genericTerms.has(kw));
  if (specificTerms.length > 0 && boostedSubjects.length > 0) {
    // Score the PRIMARY boosted subject chunks using ALL query keywords (not just long ones)
    // This ensures we find chunks where the specific crop + disease/topic co-occur
    const primarySubject = boostedSubjects[0];
    const primaryChunks = chunks.filter(c => c.subjectId?.toLowerCase() === primarySubject);
    const cropScored = primaryChunks.map(c => {
      const textLower = c.text.toLowerCase();
      // Must contain at least one specific term; scored by all keywords combined
      const hasSpecific = specificTerms.some(t => textLower.includes(t));
      if (!hasSpecific) return { c, hits: 0 };
      const hits = keywords.reduce((n, kw) =>
        n + (textLower.match(new RegExp(kw, "g")) || []).length, 0);
      return { c, hits };
    }).filter(x => x.hits > 0).sort((a, b) => b.hits - a.hits);

    // Add the best crop-specific chunk plus its next 3 chunks (captures variety lists)
    if (cropScored.length > 0) {
      const best = cropScored[0].c;
      const bestIdx = chunks.indexOf(best);
      for (let ni = bestIdx; ni <= bestIdx + 3 && ni < chunks.length; ni++) {
        const neighbor = chunks[ni];
        const key = `${neighbor.subjectId}-${ni}`;
        if (!seen.has(key) && neighbor.subjectId === best.subjectId) {
          seen.add(key);
          expanded.push(neighbor);
        }
      }
    }
  }

  return expanded;
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

    // Search for relevant PDF chunks
    const relevantChunks = searchChunks(question, 4);

    // Truncate each chunk to keep tokens manageable
    const truncate = (text: string, maxWords = 150) =>
      text.split(/\s+/).slice(0, maxWords).join(" ");

    let pdfContext = "";
    if (relevantChunks.length > 0) {
      pdfContext = relevantChunks
        .map(c => `[${c.subjectName}]:\n${truncate(c.text)}`)
        .join("\n\n---\n\n");
    }

    // Web search fallback — runs when:
    // 1. Tavily API key is configured, AND
    // 2. PDF has poor coverage (no chunks) OR question is a factual/biographical query
    let webContext = "";
    let usedWebSearch = false;
    const tavilyKey = process.env.TAVILY_API_KEY;
    const isFactualQuery = /\b(who|father|founder|inventor|discover|origin|history|named after|first|oldest|pioneer|introduced|developed by)\b/i.test(question);
    const poorPDFCoverage = relevantChunks.length === 0;

    if (tavilyKey && (poorPDFCoverage || isFactualQuery)) {
      try {
        const tavilyRes = await fetch("https://api.tavily.com/search", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            api_key: tavilyKey,
            query: `agriculture ${question}`,
            search_depth: "basic",
            max_results: 3,
            include_answer: true,
          }),
        });

        if (tavilyRes.ok) {
          const tavilyData = await tavilyRes.json();
          const parts: string[] = [];
          if (tavilyData.answer) {
            parts.push(`Direct answer: ${tavilyData.answer}`);
          }
          if (tavilyData.results?.length) {
            for (const r of tavilyData.results.slice(0, 2)) {
              if (r.content) parts.push(`[${r.title}]: ${r.content.slice(0, 200)}`);
            }
          }
          if (parts.length > 0) {
            webContext = parts.join("\n\n");
            usedWebSearch = true;
          }
        }
      } catch (webErr) {
        console.error("Web search error:", webErr);
      }
    }

    // Build system prompt based on available context
    let systemPrompt = `You are an AGRICET study assistant for PJTSAU Diploma in Agriculture students (2nd year).

Rules:
- Prefer PJTSAU notes when available — use them exactly, do not change facts
- For questions NOT in the notes, answer confidently from general agricultural science knowledge
- Keep answers short and exam-focused
- Use bullet points for lists
- Never say you cannot answer — always provide the best answer you can`;

    if (pdfContext && webContext) {
      systemPrompt += `\n\nPJTSAU Notes:\n${pdfContext}\n\n---\nWeb Search Results:\n${webContext}\n\nUse PJTSAU notes first; supplement with web results if needed.`;
    } else if (pdfContext) {
      systemPrompt += `\n\nPJTSAU Reference Material:\n${pdfContext}`;
    } else if (webContext) {
      systemPrompt += `\n\nWeb Search Results (no PJTSAU notes found for this topic):\n${webContext}\n\nAnswer based on the web results above. Note that this topic may not be in PJTSAU notes.`;
    } else {
      systemPrompt += `\n\nNo specific notes found for this topic. Answer from your general agricultural science knowledge.`;
    }

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
      max_tokens: 500,
      temperature: 0.3,
    });

    const answer = completion.choices[0]?.message?.content ?? "";

    return NextResponse.json({
      answer,
      sources: relevantChunks
        .map(c => c.subjectName)
        .filter((v, i, a) => a.indexOf(v) === i),
      webSearch: usedWebSearch,
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
