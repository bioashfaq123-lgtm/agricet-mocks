import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";
import pdfData from "@/data/pdf-chunks.json";

// ── Vercel function limit: Hobby plan = 10s, Pro = 60s ──────────────────────
export const maxDuration = 10;

// ── Simple in-memory rate limiter (per IP, 10 req/min) ──────────────────────
// Prevents students from accidentally burning the Groq free-tier quota.
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();
function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + 60_000 });
    return false;
  }
  if (entry.count >= 10) return true;
  entry.count++;
  return false;
}
// Clean up stale entries every 5 minutes to prevent memory leak
setInterval(() => {
  const now = Date.now();
  for (const [k, v] of rateLimitStore) if (now > v.resetAt) rateLimitStore.delete(k);
}, 300_000);

interface PdfChunk {
  id: string;
  subjectId: string;
  subjectName: string;
  text: string;
}

// Correct subject ID → actual content mapping (re-chunked from original PDFs):
// da-101 → Principles of Agronomy
// da-102 → Agricultural Meteorology / Crop Production I
// da-111 → Plant Breeding and Seed Production
// da-121 → Soil Science and Chemistry
// da-122 → Manures and Fertilizers
// da-131 → Principles of Entomology
// da-132 → Crop Protection Chemicals
// da-151 → Farm Machinery and Power
// da-171 → Plant Pathology and Crop Diseases
// da-201 → Crop Production II
// da-241 → Agricultural Economics and Farm Management
// da-252 → Land Surveying and Water Engineering
// da-262 → Computer Applications in Agriculture
// da-263 → English Communication Skills
// da-281 → Forestry and Medicinal Plants
// da-282 → Horticultural Crops
// da-291 → Agricultural Extension Education
const SUBJECT_BOOSTS: { keywords: string[]; subjects: string[] }[] = [
  // DA-171: Plant Pathology & Crop Diseases
  { keywords: ["wilt","blight","rot","disease","fungus","bacteria","virus","pathogen","symptom","infection","pathology","sclerotia","lesion","canker","mosaic","yellowing","damping","smut","rust","anthracnose","cercospora","fusarium","alternaria","phytophthora","oomycete","nematode","mycoplasma","phytoplasma","sporulation","inoculum"], subjects: ["da-171","da-132"] },
  // DA-131: Entomology & Beneficial Insects
  { keywords: ["insect","pest","mite","aphid","bug","larva","pupa","adult","nymph","thrips","whitefly","leafhopper","entomology","metamorphosis","antenna","morphology","borer","shoot borer","fruit borer","caterpillar","weevil","beetle","moth","butterfly","louse","scale","mealy bug","jassid"], subjects: ["da-131","da-132"] },
  // DA-132: Crop Protection Chemicals & IPM
  { keywords: ["spray","fungicide","pesticide","herbicide","weedicide","insecticide","chemical control","ipm","integrated pest","formulation","toxicity","dose","emulsifiable","wettable","granule","ec","wp","parasitoid","predator","biocontrol","natural enemy"], subjects: ["da-132","da-131"] },
  // DA-121: Soil Science & Chemistry
  { keywords: ["soil","texture","structure","clay","sand","loam","horizon","profile","salinity","alkali","laterite","pedology","weathering","ph","cation","anion","exchange capacity","colloid","humus","organic carbon","bulk density","porosity","permeability","erosion","reclamation"], subjects: ["da-121"] },
  // DA-122: Manures & Fertilizers
  { keywords: ["fertilizer","npk","nitrogen","phosphorus","potassium","nutrient","deficiency","manure","compost","organic matter","urea","dap","biofertilizer","micronutrient","fym","farmyard","vermi","green manure","rhizobium","azospirillum","potash","sulphur","zinc","boron","iron deficiency","calcium"], subjects: ["da-122","da-121"] },
  // DA-111: Plant Breeding & Seed Production
  { keywords: ["variety","hybrid","cross","selection","genetics","mendelian","gene","chromosome","mutation","polyploidy","breeding","heterosis","inbreeding","self","outcrossing","pollination","emasculation","population","genotype","phenotype","heritability","pedigree","bulk","backcross","f1","f2"], subjects: ["da-111"] },
  // DA-111: Seed Technology & Certification
  { keywords: ["seed","germination","viability","vigour","certification","ista","moisture","seed rate","seed testing","purity","dormancy","priming","seed production","breeder seed","foundation seed","certified seed","nucleus seed","seed treatment","seed storage","trier","sampler","tetrazolium"], subjects: ["da-111"] },
  // DA-101: Agronomy & Irrigation
  { keywords: ["agronomy","kharif","rabi","cropping","tillage","sowing","transplanting","spacing","intercropping","weed","pakka","crop rotation","irrigation","drip","sprinkler","delta","duty","consumptive","evapotranspiration","canal","furrow","flood","row spacing","thinning","mulching"], subjects: ["da-101","da-201"] },
  // DA-102: Agricultural Meteorology & Crop Production I
  { keywords: ["weather","temperature","rainfall","humidity","wind","climate","meteorology","evaporation","sunshine","solar radiation","monsoon","drought","frost","dew","radiation","photoperiod","growing degree","agroclimatic","crop season","cropping calendar"], subjects: ["da-102","da-101"] },
  // DA-201: Crop Production II (Cotton, Pulses, Oilseeds)
  { keywords: ["cotton","groundnut","sunflower","soybean","castor","sesame","linseed","mustard","safflower","pulses","redgram","bengal gram","black gram","green gram","pigeonpea","chickpea","maize","jowar","bajra","sorghum","millets","sugarcane","tobacco","jute"], subjects: ["da-201","da-102","da-101"] },
  // DA-282: Horticulture & Vegetable Crops
  { keywords: ["fruit","vegetable","horticulture","orchard","nursery","grafting","pruning","mango","banana","citrus","papaya","guava","tomato","brinjal","chilli","onion","potato","okra","cucurbit","melon","watermelon","pumpkin","bottle gourd","ridge gourd","pomegranate","grape","sapota","ber","amla"], subjects: ["da-282"] },
  // DA-282: Post Harvest Technology
  { keywords: ["harvest","post harvest","storage","ripening","grading","processing","preservation","cold storage","respiration","climacteric","curing","waxing","packaging","sorting","shelf life","ethylene","calcium carbide","controlled atmosphere"], subjects: ["da-282"] },
  // DA-281: Forestry & Medicinal Plants
  { keywords: ["forestry","timber","wood","forest","medicinal plant","aromatic","teak","eucalyptus","bamboo","neem","agroforestry","silviculture","plantation","tree","shade tree","windbreak","social forestry","herbal","ayurveda","tulsi","aloe vera","lemon grass"], subjects: ["da-281"] },
  // DA-151: Farm Machinery & Power
  { keywords: ["machinery","tractor","implement","plough","harrow","cultivator","sprayer","harvester","thresher","pump","power tiller","equipment","horsepower","hp","engine","fuel","gear","hydraulic","pto","rotavator","seed drill","transplanter","combine","draft"], subjects: ["da-151"] },
  // DA-241: Agricultural Economics & Farm Management
  { keywords: ["economics","cost","profit","market","price","demand","supply","income","expenditure","farm management","break even","benefit cost","bcr","msp","cooperative","credit","loan","insurance","subsidy","gdp","agriculture policy","marketing","wholesale","retail","mandi"], subjects: ["da-241"] },
  // DA-252: Land Surveying & Water Engineering
  { keywords: ["surveying","survey","levelling","contour","watershed","bunding","land development","drainage","sluice","check dam","farm pond","channel","earthwork","slope","catchment","land shaping","bench terrace","irrigation design","water harvesting","hydraulics"], subjects: ["da-252"] },
  // DA-262: Computer Applications
  { keywords: ["computer","software","hardware","internet","database","spreadsheet","word processing","programming","algorithm","network","operating system","memory","processor","input","output","gis","remote sensing","satellite","digital"], subjects: ["da-262"] },
  // DA-263: English Communication
  { keywords: ["communication","grammar","writing","essay","letter","report","speech","vocabulary","comprehension","paragraph","sentence","verb","noun","tense","composition","correspondence","official letter","business letter"], subjects: ["da-263"] },
  // DA-291: Agricultural Extension
  { keywords: ["extension","rural","community","transfer of technology","adoption","diffusion","village","farmer","kisan","krishi","training","demonstration","ffs","farm school","block","kvk","apy","atma","naep","club","method","media","audio visual"], subjects: ["da-291"] },
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
    // Rate limit check
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a minute and try again." },
        { status: 429 }
      );
    }

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
    const relevantChunks = searchChunks(question, 5);

    // Truncate each chunk to keep tokens manageable (larger chunks now so allow more words)
    const truncate = (text: string, maxWords = 200) =>
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
        // 4-second timeout — must finish well before the 10s Vercel limit
        const tavilyController = new AbortController();
        const tavilyTimer = setTimeout(() => tavilyController.abort(), 4000);
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
          signal: tavilyController.signal,
        });
        clearTimeout(tavilyTimer);

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
    // Race with 8s timeout so we always respond before Vercel's 10s function limit
    const groq = new Groq({ apiKey });
    const groqPromise = groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages,
      max_tokens: 500,
      temperature: 0.3,
    });
    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("Groq response timed out")), 8000)
    );
    const completion = await Promise.race([groqPromise, timeoutPromise]);

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
        ? "AI service temporarily unavailable. Please try again in a moment."
        : msg.includes("rate_limit") || msg.includes("429")
        ? "Too many requests. Please wait a moment and try again."
        : msg.includes("timed out") || msg.includes("AbortError")
        ? "The assistant took too long to respond. Please try again."
        : "Something went wrong. Please try again in a moment.";
    return NextResponse.json({ error: userMsg }, { status: 500 });
  }
}
