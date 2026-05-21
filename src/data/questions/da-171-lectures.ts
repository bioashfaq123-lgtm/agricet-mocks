import { Question } from "@/types";

export const da171LectureQuestions: Question[] = [
  // ── LECTURE 1: Introduction to Plant Pathology ───────────────────────────
  {
    id: "d171l_001", subject: "da-171", lecture: "lecture-1", lectureNo: 1,
    question: "Plant pathology is defined as the study of:",
    options: ["Plant diseases and their management", "Insect pests of plants", "Animal diseases", "Plant nutrition"],
    correct: 0,
    explanation: "Plant pathology (phytopathology) is the science that studies plant diseases — their causes, mechanisms, and management.",
    difficulty: "easy"
  },
  {
    id: "d171l_002", subject: "da-171", lecture: "lecture-1", lectureNo: 1,
    question: "The father of plant pathology is:",
    options: ["Anton de Bary", "Louis Pasteur", "Martinus Beijerinck", "Robert Koch"],
    correct: 0,
    explanation: "Heinrich Anton de Bary is considered the father of plant pathology for his work on fungal diseases, especially late blight of potato.",
    difficulty: "easy"
  },
  {
    id: "d171l_003", subject: "da-171", lecture: "lecture-1", lectureNo: 1,
    question: "Which is NOT a biotic cause of plant disease?",
    options: ["Virus", "Nutrient deficiency", "Bacteria", "Fungi"],
    correct: 1,
    explanation: "Nutrient deficiency is an abiotic (non-living) cause of plant disease. Fungi, bacteria, and viruses are biotic (living) pathogens.",
    difficulty: "easy"
  },
  {
    id: "d171l_004", subject: "da-171", lecture: "lecture-1", lectureNo: 1,
    question: "The disease triangle concept includes:",
    options: ["Plant, Insect, Soil", "Temperature, Humidity, Wind", "Soil, Water, Air", "Host, Pathogen, Environment"],
    correct: 3,
    explanation: "The disease triangle states that disease develops when a susceptible host, virulent pathogen, and favorable environment interact.",
    difficulty: "easy"
  },
  {
    id: "d171l_005", subject: "da-171", lecture: "lecture-1", lectureNo: 1,
    question: "Koch's postulates were proposed to:",
    options: ["Study plant viruses", "Prove that a specific microorganism causes a specific disease", "Develop pesticides", "Classify fungi"],
    correct: 1,
    explanation: "Koch's postulates establish a causal relationship between a microorganism and a disease.",
    difficulty: "medium"
  },
  {
    id: "d171l_006", subject: "da-171", lecture: "lecture-1", lectureNo: 1,
    question: "The science of identifying plant diseases is called:",
    options: ["Epidemiology", "Taxonomy", "Etiology", "Diagnosis"],
    correct: 3,
    explanation: "Diagnosis is the process of identifying the causal agent and nature of a plant disease.",
    difficulty: "easy"
  },
  {
    id: "d171l_007", subject: "da-171", lecture: "lecture-1", lectureNo: 1,
    question: "Etiology in plant pathology refers to:",
    options: ["Study of disease symptoms", "Study of resistant varieties", "Study of causal agents of diseases", "Study of disease spread"],
    correct: 2,
    explanation: "Etiology is the study of the causes and origins of plant diseases.",
    difficulty: "medium"
  },
  {
    id: "d171l_008", subject: "da-171", lecture: "lecture-1", lectureNo: 1,
    question: "The first step in Koch's postulates is:",
    options: ["Reisolate the pathogen", "Associate the organism with diseased plant", "Grow the organism in pure culture", "Inoculate healthy plant"],
    correct: 1,
    explanation: "The first step is to consistently find and associate the suspected pathogen with every case of the disease.",
    difficulty: "medium"
  },
  {
    id: "d171l_009", subject: "da-171", lecture: "lecture-1", lectureNo: 1,
    question: "Epidemiology in plant pathology deals with:",
    options: ["Plant nutrition", "Soil microorganisms", "Weed management", "The spread and dynamics of disease in plant populations"],
    correct: 3,
    explanation: "Epidemiology studies how plant diseases develop, spread, and affect plant populations over time.",
    difficulty: "medium"
  },
  {
    id: "d171l_010", subject: "da-171", lecture: "lecture-1", lectureNo: 1,
    question: "Which of the following is an abiotic plant disease?",
    options: ["Late blight of potato", "Chlorosis due to iron deficiency", "Rice blast", "Citrus canker"],
    correct: 1,
    explanation: "Chlorosis due to iron deficiency is an abiotic (non-infectious) disease caused by a nutritional disorder.",
    difficulty: "easy"
  },
  {
    id: "d171l_011", subject: "da-171", lecture: "lecture-1", lectureNo: 1,
    question: "The Irish Famine (1845–49) was caused by:",
    options: ["Late blight of potato (Phytophthora infestans)", "Bacterial wilt", "Drought", "Virus disease"],
    correct: 0,
    explanation: "The great Irish Famine was caused by the oomycete Phytophthora infestans causing late blight of potato.",
    difficulty: "medium"
  },
  {
    id: "d171l_012", subject: "da-171", lecture: "lecture-1", lectureNo: 1,
    question: "Symptomatology is the study of:",
    options: ["Disease control methods", "Signs and symptoms of plant diseases", "Pathogen genetics", "Causal agents of disease"],
    correct: 1,
    explanation: "Symptomatology deals with the recognition and description of disease symptoms.",
    difficulty: "easy"
  },

  // ── LECTURE 2: Fungi – Structure and Classification ───────────────────────
  {
    id: "d171l_013", subject: "da-171", lecture: "lecture-2", lectureNo: 2,
    question: "Fungi are _____ organisms:",
    options: ["Heterotrophic", "Photosynthetic", "Chemosynthetic", "Autotrophic"],
    correct: 0,
    explanation: "Fungi are heterotrophic — they obtain nutrition by absorbing organic matter from other organisms.",
    difficulty: "easy"
  },
  {
    id: "d171l_014", subject: "da-171", lecture: "lecture-2", lectureNo: 2,
    question: "The vegetative body of a fungus is called:",
    options: ["Mycelium", "Conidium", "Sporangium", "Thallus"],
    correct: 0,
    explanation: "The vegetative body of a fungus consists of thread-like hyphae collectively called mycelium.",
    difficulty: "easy"
  },
  {
    id: "d171l_015", subject: "da-171", lecture: "lecture-2", lectureNo: 2,
    question: "The cell wall of fungi is made up of:",
    options: ["Chitin", "Peptidoglycan", "Lignin", "Cellulose"],
    correct: 0,
    explanation: "Fungal cell walls are composed primarily of chitin, unlike plant cell walls (cellulose).",
    difficulty: "easy"
  },
  {
    id: "d171l_016", subject: "da-171", lecture: "lecture-2", lectureNo: 2,
    question: "Asexual spores produced externally on conidiophores are called:",
    options: ["Conidia", "Basidiospores", "Ascospores", "Oospores"],
    correct: 0,
    explanation: "Conidia are asexual spores produced externally on specialized hyphae called conidiophores.",
    difficulty: "easy"
  },
  {
    id: "d171l_017", subject: "da-171", lecture: "lecture-2", lectureNo: 2,
    question: "Oomycetes (water molds) have cell walls made of:",
    options: ["Cellulose", "Both chitin and cellulose", "Neither", "Chitin"],
    correct: 0,
    explanation: "Oomycetes have cellulose cell walls, distinguishing them from true fungi (chitin).",
    difficulty: "medium"
  },
  {
    id: "d171l_018", subject: "da-171", lecture: "lecture-2", lectureNo: 2,
    question: "Phytophthora belongs to which class:",
    options: ["Oomycetes", "Basidiomycetes", "Zygomycetes", "Ascomycetes"],
    correct: 0,
    explanation: "Phytophthora is an oomycete (water mold), classified in kingdom Chromista (formerly grouped with fungi).",
    difficulty: "medium"
  },
  {
    id: "d171l_019", subject: "da-171", lecture: "lecture-2", lectureNo: 2,
    question: "Rust fungi belong to:",
    options: ["Basidiomycetes", "Ascomycetes", "Oomycetes", "Deuteromycetes"],
    correct: 0,
    explanation: "Rust fungi (Puccinia, Uromyces, etc.) belong to Basidiomycetes.",
    difficulty: "medium"
  },
  {
    id: "d171l_020", subject: "da-171", lecture: "lecture-2", lectureNo: 2,
    question: "Deuteromycetes (Fungi Imperfecti) are fungi that:",
    options: ["Only reproduce sexually", "Have no cell wall", "Are all plant pathogens", "Have no known sexual stage"],
    correct: 3,
    explanation: "Deuteromycetes have no known sexual reproduction stage and reproduce only asexually.",
    difficulty: "medium"
  },
  {
    id: "d171l_021", subject: "da-171", lecture: "lecture-2", lectureNo: 2,
    question: "The sexual spore of Ascomycetes is called:",
    options: ["Ascospore", "Basidiospore", "Zygospore", "Oospore"],
    correct: 0,
    explanation: "Ascospores are sexual spores of Ascomycetes, produced within an ascus.",
    difficulty: "easy"
  },
  {
    id: "d171l_022", subject: "da-171", lecture: "lecture-2", lectureNo: 2,
    question: "Sclerotia are:",
    options: ["Type of spores", "Compact, hard masses of hyphae for survival", "Root structures", "Fruit bodies"],
    correct: 1,
    explanation: "Sclerotia are hard, compact masses of fungal hyphae that serve as survival structures in soil.",
    difficulty: "medium"
  },
  {
    id: "d171l_022b", subject: "da-171", lecture: "lecture-2", lectureNo: 2,
    question: "Sporangiospores are produced inside:",
    options: ["Conidia", "Sporangia", "Asci", "Basidia"],
    correct: 1,
    explanation: "Sporangiospores are asexual spores produced within a sac-like structure called sporangium.",
    difficulty: "medium"
  },
  {
    id: "d171l_023", subject: "da-171", lecture: "lecture-2", lectureNo: 2,
    question: "Powdery mildew fungi belong to:",
    options: ["Ascomycetes (order Erysiphales)", "Oomycetes", "Zygomycetes", "Basidiomycetes"],
    correct: 0,
    explanation: "Powdery mildew fungi (Erysiphe, Sphaerotheca, Uncinula) belong to Ascomycetes.",
    difficulty: "medium"
  },

  // ── LECTURE 3: Bacteria and Phytoplasma ──────────────────────────────────
  {
    id: "d171l_024", subject: "da-171", lecture: "lecture-3", lectureNo: 3,
    question: "Plant pathogenic bacteria are generally:",
    options: ["Spore-forming anaerobes", "Gram-positive cocci", "Acid-fast bacteria", "Gram-negative rods"],
    correct: 3,
    explanation: "Most plant pathogenic bacteria are Gram-negative rods (e.g., Xanthomonas, Pseudomonas, Erwinia).",
    difficulty: "medium"
  },
  {
    id: "d171l_025", subject: "da-171", lecture: "lecture-3", lectureNo: 3,
    question: "Citrus canker is caused by:",
    options: ["Erwinia carotovora", "Pseudomonas syringae", "Xanthomonas axonopodis pv. citri", "Agrobacterium tumefaciens"],
    correct: 2,
    explanation: "Citrus canker is caused by the bacterium Xanthomonas axonopodis pv. citri.",
    difficulty: "medium"
  },
  {
    id: "d171l_026", subject: "da-171", lecture: "lecture-3", lectureNo: 3,
    question: "Crown gall disease of plants is caused by:",
    options: ["Xanthomonas campestris", "Rhizobium japonicum", "Agrobacterium tumefaciens", "Pseudomonas fluorescens"],
    correct: 2,
    explanation: "Crown gall is caused by Agrobacterium tumefaciens, which inserts its Ti plasmid DNA into the plant.",
    difficulty: "medium"
  },
  {
    id: "d171l_027", subject: "da-171", lecture: "lecture-3", lectureNo: 3,
    question: "Bacterial blight of rice is caused by:",
    options: ["Pseudomonas glumae", "Burkholderia glumae", "Xanthomonas oryzae pv. oryzae", "Erwinia oryzae"],
    correct: 2,
    explanation: "Bacterial blight of rice (Kresek / leaf scorch) is caused by Xanthomonas oryzae pv. oryzae.",
    difficulty: "medium"
  },
  {
    id: "d171l_028", subject: "da-171", lecture: "lecture-3", lectureNo: 3,
    question: "Phytoplasmas are transmitted by:",
    options: ["Water", "Soil contact", "Wind", "Leafhoppers (Cicadellidae)"],
    correct: 3,
    explanation: "Phytoplasmas are obligate intracellular parasites transmitted by phloem-feeding leafhoppers.",
    difficulty: "medium"
  },
  {
    id: "d171l_029", subject: "da-171", lecture: "lecture-3", lectureNo: 3,
    question: "Soft rot of vegetables is caused by:",
    options: ["Fusarium solani", "Xanthomonas campestris", "Rhizoctonia solani", "Erwinia carotovora"],
    correct: 3,
    explanation: "Bacterial soft rot of vegetables is caused by Erwinia carotovora (now Pectobacterium carotovorum).",
    difficulty: "medium"
  },
  {
    id: "d171l_030", subject: "da-171", lecture: "lecture-3", lectureNo: 3,
    question: "Phytoplasmas lack:",
    options: ["Ribosomes", "DNA", "Cell wall", "Membrane"],
    correct: 2,
    explanation: "Phytoplasmas are cell wall-less bacteria (mollicutes) that live in plant phloem.",
    difficulty: "medium"
  },
  {
    id: "d171l_031", subject: "da-171", lecture: "lecture-3", lectureNo: 3,
    question: "Little leaf disease of brinjal is caused by:",
    options: ["Phytoplasma", "Virus", "Bacterium", "Fungus"],
    correct: 0,
    explanation: "Little leaf disease of brinjal is a phytoplasma disease transmitted by leafhopper Hishimonus phycitis.",
    difficulty: "medium"
  },
  {
    id: "d171l_032", subject: "da-171", lecture: "lecture-3", lectureNo: 3,
    question: "The characteristic symptom of bacterial disease on leaves is often:",
    options: ["White powdery coating", "Water-soaked lesions that turn necrotic", "Dark sooty mold", "Orange-brown pustules"],
    correct: 1,
    explanation: "Bacterial infections typically cause water-soaked, greasy-looking lesions that turn necrotic.",
    difficulty: "medium"
  },
  {
    id: "d171l_033", subject: "da-171", lecture: "lecture-3", lectureNo: 3,
    question: "Wildfire disease of tobacco is caused by:",
    options: ["Pseudomonas syringae pv. tabaci", "Xanthomonas axonopodis", "Erwinia", "Agrobacterium rhizogenes"],
    correct: 0,
    explanation: "Wildfire of tobacco is caused by Pseudomonas syringae pv. tabaci.",
    difficulty: "hard"
  },
  {
    id: "d171l_034", subject: "da-171", lecture: "lecture-3", lectureNo: 3,
    question: "Bacteria enter plants through:",
    options: ["All intact surfaces", "Root epidermis", "Stomata, hydathodes, and wounds", "Cuticle only"],
    correct: 2,
    explanation: "Bacteria typically enter plants through natural openings (stomata, hydathodes) or wounds.",
    difficulty: "medium"
  },
  {
    id: "d171l_035", subject: "da-171", lecture: "lecture-3", lectureNo: 3,
    question: "Antibiotic used to control bacterial plant diseases is:",
    options: ["Monocrotophos", "Mancozeb", "Carbendazim", "Streptomycin sulfate"],
    correct: 3,
    explanation: "Streptomycin sulfate (often mixed with tetracycline) is used to control bacterial diseases in plants.",
    difficulty: "medium"
  },

  // ── LECTURE 4: Viruses and Viroids ───────────────────────────────────────
  {
    id: "d171l_036", subject: "da-171", lecture: "lecture-4", lectureNo: 4,
    question: "Plant viruses are composed of:",
    options: ["DNA/RNA + protein coat (capsid)", "Peptidoglycan", "Cellulose + lipid", "Chitin and protein"],
    correct: 0,
    explanation: "Viruses consist of nucleic acid (DNA or RNA) surrounded by a protein coat called capsid.",
    difficulty: "easy"
  },
  {
    id: "d171l_037", subject: "da-171", lecture: "lecture-4", lectureNo: 4,
    question: "Tobacco mosaic virus (TMV) was the first virus to be:",
    options: ["Photographed by electron microscopy", "Cloned", "Crystallized", "Transmitted by a vector"],
    correct: 2,
    explanation: "TMV was the first virus to be crystallized (by Wendell Stanley in 1935), proving viruses are chemical entities.",
    difficulty: "medium"
  },
  {
    id: "d171l_038", subject: "da-171", lecture: "lecture-4", lectureNo: 4,
    question: "Most plant viruses have _____ nucleic acid:",
    options: ["Double-stranded RNA", "Single-stranded RNA", "Double-stranded DNA", "Single-stranded DNA"],
    correct: 1,
    explanation: "The majority of plant viruses have single-stranded RNA as their genetic material.",
    difficulty: "medium"
  },
  {
    id: "d171l_039", subject: "da-171", lecture: "lecture-4", lectureNo: 4,
    question: "Viroids are:",
    options: ["Phytoplasmas", "Naked RNA molecules without protein coat", "Small viruses", "Modified bacteria"],
    correct: 1,
    explanation: "Viroids are the smallest known pathogens — small, circular RNA molecules with no protein coat.",
    difficulty: "medium"
  },
  {
    id: "d171l_040", subject: "da-171", lecture: "lecture-4", lectureNo: 4,
    question: "Potato spindle tuber disease is caused by:",
    options: ["Potato leaf roll virus", "Phytoplasma", "Potato spindle tuber viroid (PSTVd)", "Potato virus Y"],
    correct: 2,
    explanation: "Potato spindle tuber viroid (PSTVd) causes potato spindle tuber disease.",
    difficulty: "medium"
  },
  {
    id: "d171l_041", subject: "da-171", lecture: "lecture-4", lectureNo: 4,
    question: "Leaf roll of potato is transmitted by:",
    options: ["Myzus persicae (aphid)", "Whitefly", "Leafhopper", "Thrips"],
    correct: 0,
    explanation: "Potato leaf roll virus (PLRV) is transmitted by the green peach aphid Myzus persicae.",
    difficulty: "medium"
  },
  {
    id: "d171l_042", subject: "da-171", lecture: "lecture-4", lectureNo: 4,
    question: "Bunchy top disease of banana is caused by:",
    options: ["Banana bract mosaic virus", "Banana bunchy top virus (BBTV)", "Banana streak virus", "Cucumber mosaic virus"],
    correct: 1,
    explanation: "Banana bunchy top disease is caused by BBTV (Banana bunchy top nanovirus), transmitted by banana aphid.",
    difficulty: "medium"
  },
  {
    id: "d171l_043", subject: "da-171", lecture: "lecture-4", lectureNo: 4,
    question: "Viruses can be transmitted by all of the following EXCEPT:",
    options: ["Soil bacteria directly", "Mechanical contact", "Insects (aphids, whitefly)", "Infected seed"],
    correct: 0,
    explanation: "Viruses are transmitted by insect vectors, infected propagating material, mechanical inoculation, and soil nematodes — not soil bacteria.",
    difficulty: "medium"
  },
  {
    id: "d171l_044", subject: "da-171", lecture: "lecture-4", lectureNo: 4,
    question: "The protein coat of a virus is called:",
    options: ["Nucleoprotein", "Capsid", "Nucleocapsid", "Capsomere"],
    correct: 1,
    explanation: "The protein coat surrounding viral nucleic acid is called the capsid.",
    difficulty: "easy"
  },
  {
    id: "d171l_045", subject: "da-171", lecture: "lecture-4", lectureNo: 4,
    question: "Yellow mosaic disease of mungbean is caused by:",
    options: ["Soybean mosaic virus", "Cowpea mosaic virus", "Mungbean yellow mosaic virus (MYMV)", "Bean common mosaic virus"],
    correct: 2,
    explanation: "Yellow mosaic of mungbean is caused by Mungbean yellow mosaic virus, transmitted by whitefly.",
    difficulty: "medium"
  },
  {
    id: "d171l_046", subject: "da-171", lecture: "lecture-4", lectureNo: 4,
    question: "Mosaic symptoms in virus-infected plants are due to:",
    options: ["Fungal pigmentation", "Excess water", "Nutrient toxicity", "Uneven chlorophyll distribution"],
    correct: 3,
    explanation: "Mosaic symptoms result from uneven distribution of chlorophyll causing alternating green and yellow patches.",
    difficulty: "medium"
  },
  {
    id: "d171l_047", subject: "da-171", lecture: "lecture-4", lectureNo: 4,
    question: "Grassy shoot disease of sugarcane is caused by:",
    options: ["Fungus", "Bacterium", "Phytoplasma", "Virus"],
    correct: 2,
    explanation: "Grassy shoot disease of sugarcane is caused by a phytoplasma, transmitted by leafhopper.",
    difficulty: "medium"
  },

  // ── LECTURE 5: Seed-borne and Soil-borne Diseases ─────────────────────────
  {
    id: "d171l_048", subject: "da-171", lecture: "lecture-5", lectureNo: 5,
    question: "Loose smut of wheat is caused by:",
    options: ["Ustilago tritici", "Tilletia caries", "Puccinia striiformis", "Erysiphe graminis"],
    correct: 0,
    explanation: "Loose smut of wheat is caused by Ustilago tritici.",
    difficulty: "medium"
  },
  {
    id: "d171l_049", subject: "da-171", lecture: "lecture-5", lectureNo: 5,
    question: "Covered smut / bunt of wheat is caused by:",
    options: ["Ustilago nuda", "Puccinia graminis", "Ustilago tritici", "Tilletia caries"],
    correct: 3,
    explanation: "Covered smut (bunt) of wheat is caused by Tilletia caries (and T. foetida).",
    difficulty: "medium"
  },
  {
    id: "d171l_050", subject: "da-171", lecture: "lecture-5", lectureNo: 5,
    question: "Seed treatment with Carboxin + Thiram controls:",
    options: ["Nematodes", "Seed-borne smut diseases of cereals", "Viral diseases", "Soil-borne diseases only"],
    correct: 1,
    explanation: "Carboxin + Thiram seed treatment is effective against seed-borne smut diseases of cereals.",
    difficulty: "medium"
  },
  {
    id: "d171l_051", subject: "da-171", lecture: "lecture-5", lectureNo: 5,
    question: "Damping-off of seedlings is caused by:",
    options: ["Pythium spp. and Rhizoctonia solani", "Puccinia spp.", "Alternaria spp.", "Xanthomonas spp."],
    correct: 0,
    explanation: "Damping-off is caused mainly by Pythium spp. (pre-emergence) and Rhizoctonia solani (post-emergence).",
    difficulty: "medium"
  },
  {
    id: "d171l_052", subject: "da-171", lecture: "lecture-5", lectureNo: 5,
    question: "Soil solarization is used to control:",
    options: ["Insect pests", "Bacterial leaf diseases", "Viral diseases", "Soil-borne pathogens"],
    correct: 3,
    explanation: "Soil solarization uses solar heat (by covering with polythene) to kill soil-borne pathogens, nematodes, and weed seeds.",
    difficulty: "medium"
  },
  {
    id: "d171l_053", subject: "da-171", lecture: "lecture-5", lectureNo: 5,
    question: "Foot rot of rice is caused by:",
    options: ["Sclerotium oryzae-sativae", "Pyricularia oryzae", "Helminthosporium oryzae", "Sarocladium oryzae"],
    correct: 0,
    explanation: "Foot rot (stem rot) of rice is caused by Sclerotium oryzae-sativae.",
    difficulty: "hard"
  },
  {
    id: "d171l_054", subject: "da-171", lecture: "lecture-5", lectureNo: 5,
    question: "Wilt disease is characteristically caused by:",
    options: ["Vascular pathogens that block xylem (Fusarium, Verticillium)", "Leaf-spotting fungi", "Foliar pathogens", "Root surface pathogens"],
    correct: 0,
    explanation: "Wilt diseases are caused by vascular pathogens (Fusarium, Verticillium) that colonize and block xylem vessels.",
    difficulty: "medium"
  },
  {
    id: "d171l_055", subject: "da-171", lecture: "lecture-5", lectureNo: 5,
    question: "Hot water treatment of seeds is used to eradicate:",
    options: ["All pathogens", "Viruses inside seed", "Surface-borne fungi and bacteria", "Nematodes in soil"],
    correct: 2,
    explanation: "Hot water seed treatment (50–55°C) eliminates externally and internally seed-borne fungi and bacteria.",
    difficulty: "medium"
  },
  {
    id: "d171l_056", subject: "da-171", lecture: "lecture-5", lectureNo: 5,
    question: "Biological control of soil-borne diseases uses:",
    options: ["Trichoderma viride and Pseudomonas fluorescens", "Insecticides", "Synthetic fungicides", "Growth regulators"],
    correct: 0,
    explanation: "Trichoderma viride and P. fluorescens are bioagents used against soil-borne fungal pathogens.",
    difficulty: "medium"
  },
  {
    id: "d171l_057", subject: "da-171", lecture: "lecture-5", lectureNo: 5,
    question: "Seed health testing is done to detect:",
    options: ["Germination only", "Nutrient content", "Seed-borne pathogens", "Seed size"],
    correct: 2,
    explanation: "Seed health testing detects seed-borne pathogens (fungi, bacteria, viruses) to prevent disease transmission.",
    difficulty: "easy"
  },
  {
    id: "d171l_058", subject: "da-171", lecture: "lecture-5", lectureNo: 5,
    question: "Trichoderma viride is used as a:",
    options: ["Plant growth promoter only", "Biocontrol agent against soil-borne pathogens", "Insecticide", "Chemical fungicide"],
    correct: 1,
    explanation: "Trichoderma viride is a mycoparasite and antibiotic producer used for biocontrol of soil-borne pathogens.",
    difficulty: "medium"
  },

  // ── LECTURE 6: Air-borne Diseases – Rusts, Blasts, Blights ───────────────
  {
    id: "d171l_059", subject: "da-171", lecture: "lecture-6", lectureNo: 6,
    question: "Rice blast is caused by:",
    options: ["Helminthosporium oryzae", "Rhizoctonia solani", "Pyricularia oryzae", "Xanthomonas oryzae"],
    correct: 2,
    explanation: "Rice blast is caused by the fungus Pyricularia oryzae (Magnaporthe oryzae).",
    difficulty: "easy"
  },
  {
    id: "d171l_060", subject: "da-171", lecture: "lecture-6", lectureNo: 6,
    question: "Wheat rust is caused by the genus:",
    options: ["Erysiphe", "Ustilago", "Puccinia", "Alternaria"],
    correct: 2,
    explanation: "Wheat rusts (black/stem rust, brown/leaf rust, yellow/stripe rust) are all caused by Puccinia species.",
    difficulty: "easy"
  },
  {
    id: "d171l_061", subject: "da-171", lecture: "lecture-6", lectureNo: 6,
    question: "Black stem rust of wheat is caused by:",
    options: ["Puccinia striiformis", "Puccinia graminis f.sp. tritici", "Puccinia recondita", "Puccinia sorghi"],
    correct: 1,
    explanation: "Black (stem) rust of wheat is caused by Puccinia graminis f.sp. tritici.",
    difficulty: "medium"
  },
  {
    id: "d171l_062", subject: "da-171", lecture: "lecture-6", lectureNo: 6,
    question: "Late blight of potato is caused by:",
    options: ["Phytophthora infestans", "Botrytis cinerea", "Fusarium solani", "Alternaria solani"],
    correct: 0,
    explanation: "Late blight of potato is caused by the oomycete Phytophthora infestans.",
    difficulty: "easy"
  },
  {
    id: "d171l_063", subject: "da-171", lecture: "lecture-6", lectureNo: 6,
    question: "Early blight of potato is caused by:",
    options: ["Fusarium oxysporum", "Alternaria solani", "Cercospora solani", "Phytophthora infestans"],
    correct: 1,
    explanation: "Early blight of potato is caused by Alternaria solani.",
    difficulty: "medium"
  },
  {
    id: "d171l_064", subject: "da-171", lecture: "lecture-6", lectureNo: 6,
    question: "Powdery mildew is an _____ disease (based on mode of spread):",
    options: ["Seed-borne", "Water-borne", "Soil-borne", "Air-borne"],
    correct: 3,
    explanation: "Powdery mildew is an air-borne disease — conidia are spread by wind from infected plants.",
    difficulty: "easy"
  },
  {
    id: "d171l_065", subject: "da-171", lecture: "lecture-6", lectureNo: 6,
    question: "Downy mildew differs from powdery mildew in that downy mildew is caused by:",
    options: ["Basidiomycetes", "Oomycetes (Sclerospora, Peronosclerospora)", "Ascomycetes", "Deuteromycetes"],
    correct: 1,
    explanation: "Downy mildews are caused by oomycetes, while powdery mildews are caused by Ascomycetes (Erysiphales).",
    difficulty: "medium"
  },
  {
    id: "d171l_066", subject: "da-171", lecture: "lecture-6", lectureNo: 6,
    question: "Bordeaux mixture is a combination of:",
    options: ["Carbendazim + mancozeb", "Sulphur + copper", "Copper sulphate + lime", "Zineb + thiram"],
    correct: 2,
    explanation: "Bordeaux mixture = copper sulphate + slaked lime (Ca(OH)₂), a classical fungicide.",
    difficulty: "easy"
  },
  {
    id: "d171l_067", subject: "da-171", lecture: "lecture-6", lectureNo: 6,
    question: "Ergot disease of rye is caused by:",
    options: ["Puccinia striiformis", "Claviceps purpurea", "Fusarium graminearum", "Ustilago reiliana"],
    correct: 1,
    explanation: "Ergot of rye/cereals is caused by Claviceps purpurea; the ergot sclerotia produce toxic alkaloids.",
    difficulty: "medium"
  },
  {
    id: "d171l_068", subject: "da-171", lecture: "lecture-6", lectureNo: 6,
    question: "Cercospora leaf spot of groundnut is also called:",
    options: ["Scorch", "Tikka disease", "Blight", "Rust"],
    correct: 1,
    explanation: "Tikka disease refers to early and late leaf spots of groundnut caused by Cercospora spp.",
    difficulty: "easy"
  },

  // ── LECTURE 7: Disease Management – Chemical Control ─────────────────────
  {
    id: "d171l_069", subject: "da-171", lecture: "lecture-7", lectureNo: 7,
    question: "A fungicide that inhibits ergosterol biosynthesis is:",
    options: ["Bordeaux mixture", "Copper oxychloride", "Propiconazole (systemic)", "Mancozeb (contact)"],
    correct: 2,
    explanation: "Propiconazole (a triazole) inhibits ergosterol biosynthesis in fungal cell membranes.",
    difficulty: "medium"
  },
  {
    id: "d171l_070", subject: "da-171", lecture: "lecture-7", lectureNo: 7,
    question: "Systemic fungicides move through the plant's:",
    options: ["Epidermis", "Xylem (acropetal) and/or phloem (basipetal)", "Cell wall", "Phloem only"],
    correct: 1,
    explanation: "Systemic fungicides translocate through vascular tissue — most through xylem (acropetal).",
    difficulty: "medium"
  },
  {
    id: "d171l_071", subject: "da-171", lecture: "lecture-7", lectureNo: 7,
    question: "Contact fungicide that is used as a protectant is:",
    options: ["Carbendazim", "Propiconazole", "Mancozeb", "Metalaxyl"],
    correct: 2,
    explanation: "Mancozeb is a broad-spectrum contact (protectant) fungicide — it must be applied before infection.",
    difficulty: "medium"
  },
  {
    id: "d171l_072", subject: "da-171", lecture: "lecture-7", lectureNo: 7,
    question: "Copper-based fungicides are effective against:",
    options: ["Bacterial and fungal diseases", "Only viruses", "Only smuts", "Only rusts"],
    correct: 0,
    explanation: "Copper-based fungicides (Bordeaux mixture, copper oxychloride) control both bacterial and fungal diseases.",
    difficulty: "medium"
  },
  {
    id: "d171l_073", subject: "da-171", lecture: "lecture-7", lectureNo: 7,
    question: "Carbendazim belongs to which group of fungicides?",
    options: ["Triazoles", "Benzimidazoles", "Dithiocarbamates", "Organochlorines"],
    correct: 1,
    explanation: "Carbendazim is a benzimidazole fungicide that inhibits tubulin polymerization.",
    difficulty: "medium"
  },
  {
    id: "d171l_074", subject: "da-171", lecture: "lecture-7", lectureNo: 7,
    question: "Metalaxyl is specifically used against:",
    options: ["Bacteria", "True fungi", "Oomycetes (downy mildews, Phytophthora)", "Viruses"],
    correct: 2,
    explanation: "Metalaxyl (a phenylamide) is specific against Oomycetes (Phytophthora, Pythium, downy mildews).",
    difficulty: "medium"
  },
  {
    id: "d171l_075", subject: "da-171", lecture: "lecture-7", lectureNo: 7,
    question: "Which cultural practice helps prevent soil-borne diseases?",
    options: ["Close plant spacing", "Crop rotation", "Monocropping", "Heavy fertilization"],
    correct: 1,
    explanation: "Crop rotation breaks the disease cycle by removing the host plant and reducing pathogen buildup in soil.",
    difficulty: "easy"
  },
  {
    id: "d171l_076", subject: "da-171", lecture: "lecture-7", lectureNo: 7,
    question: "Strobilurin fungicides work by:",
    options: ["Inhibiting tubulin", "Inhibiting mitochondrial respiration (Qo site)", "Inhibiting ergosterol synthesis", "Disrupting cell membranes"],
    correct: 1,
    explanation: "Strobilurin fungicides (azoxystrobin, trifloxystrobin) inhibit electron transfer in mitochondria.",
    difficulty: "hard"
  },
  {
    id: "d171l_077", subject: "da-171", lecture: "lecture-7", lectureNo: 7,
    question: "Resistance in plants to disease is broadly classified as:",
    options: ["Horizontal (field) resistance and vertical (race-specific) resistance", "Temporary and permanent resistance", "Passive and aggressive resistance", "Chemical and biological resistance"],
    correct: 0,
    explanation: "Horizontal resistance is general/broad-spectrum; vertical resistance is specific to pathogen races.",
    difficulty: "medium"
  },
  {
    id: "d171l_078", subject: "da-171", lecture: "lecture-7", lectureNo: 7,
    question: "Hypersensitive reaction (HR) in plants is a form of:",
    options: ["Susceptibility", "Photosynthesis", "Nutrient uptake", "Disease resistance mechanism"],
    correct: 3,
    explanation: "Hypersensitive reaction is a rapid cell death response at infection site that limits pathogen spread.",
    difficulty: "medium"
  },

  // ── LECTURE 8: Microbiology – Beneficial Microorganisms ───────────────────
  {
    id: "d171l_079", subject: "da-171", lecture: "lecture-8", lectureNo: 8,
    question: "Rhizobium forms symbiotic association with:",
    options: ["All grasses", "Rice roots", "Mycorrhizal fungi", "Legume roots for N₂ fixation"],
    correct: 3,
    explanation: "Rhizobium bacteria form symbiotic nitrogen-fixing nodules on the roots of leguminous plants.",
    difficulty: "easy"
  },
  {
    id: "d171l_080", subject: "da-171", lecture: "lecture-8", lectureNo: 8,
    question: "Azospirillum is a:",
    options: ["Free-living / associative N₂ fixer in rhizosphere of cereals", "Phosphate solubilizer only", "Mycorrhizal fungus", "Symbiotic N₂ fixer in legumes"],
    correct: 0,
    explanation: "Azospirillum is an associative N₂-fixing bacterium found in the rhizosphere of cereals and grasses.",
    difficulty: "medium"
  },
  {
    id: "d171l_081", subject: "da-171", lecture: "lecture-8", lectureNo: 8,
    question: "Mycorrhiza is a mutualistic association between:",
    options: ["Nematodes and roots", "Algae and plant leaves", "Bacteria and plant roots", "Fungi and plant roots"],
    correct: 3,
    explanation: "Mycorrhiza is a symbiotic association between fungi and plant roots, improving phosphorus and water uptake.",
    difficulty: "easy"
  },
  {
    id: "d171l_082", subject: "da-171", lecture: "lecture-8", lectureNo: 8,
    question: "Azolla is used as a biofertilizer in rice because it:",
    options: ["Has symbiotic cyanobacterium Anabaena that fixes N₂", "Fixes phosphorus", "Controls weeds", "Releases potassium"],
    correct: 0,
    explanation: "Azolla (water fern) contains the cyanobacterium Anabaena azollae which fixes atmospheric nitrogen.",
    difficulty: "medium"
  },
  {
    id: "d171l_083", subject: "da-171", lecture: "lecture-8", lectureNo: 8,
    question: "Phosphate Solubilizing Bacteria (PSB) improve plant nutrition by:",
    options: ["Solubilizing insoluble phosphates to plant-available forms", "Producing growth hormones only", "Controlling soil pH", "Fixing nitrogen"],
    correct: 0,
    explanation: "PSB (Bacillus, Pseudomonas) solubilize fixed soil phosphates through organic acid production.",
    difficulty: "medium"
  },
  {
    id: "d171l_084", subject: "da-171", lecture: "lecture-8", lectureNo: 8,
    question: "Frankia forms symbiotic N₂-fixing nodules on:",
    options: ["Non-leguminous plants (Casuarina, Alnus)", "Legumes", "Cotton", "Rice"],
    correct: 0,
    explanation: "Frankia (actinomycete) forms actinorhizal nodules on non-leguminous trees like Casuarina and Alnus.",
    difficulty: "hard"
  },
  {
    id: "d171l_085", subject: "da-171", lecture: "lecture-8", lectureNo: 8,
    question: "The blue-green algae (cyanobacteria) that fix nitrogen include:",
    options: ["Saccharomyces, Aspergillus", "Chlorella, Spirogyra", "Rhizobium, Azotobacter", "Anabaena, Nostoc, Tolypothrix"],
    correct: 3,
    explanation: "Anabaena, Nostoc, and Tolypothrix are heterocyst-forming cyanobacteria that fix atmospheric N₂.",
    difficulty: "medium"
  },
  {
    id: "d171l_086", subject: "da-171", lecture: "lecture-8", lectureNo: 8,
    question: "Vesicular Arbuscular Mycorrhiza (VAM) is especially important for:",
    options: ["Nitrogen fixation", "Carbon dioxide fixation", "Water exclusion", "Phosphorus uptake in low-P soils"],
    correct: 3,
    explanation: "VAM fungi greatly enhance phosphorus uptake by extending the root absorption area via external hyphae.",
    difficulty: "medium"
  },
  {
    id: "d171l_087", subject: "da-171", lecture: "lecture-8", lectureNo: 8,
    question: "Vermicomposting uses:",
    options: ["High temperature composting", "Fungi only", "Earthworms to decompose organic matter", "Chemical reactions"],
    correct: 2,
    explanation: "Vermicomposting uses earthworms (Eisenia foetida, Lumbricus) to decompose organic waste into nutrient-rich compost.",
    difficulty: "easy"
  },
  {
    id: "d171l_088", subject: "da-171", lecture: "lecture-8", lectureNo: 8,
    question: "Pseudomonas fluorescens is used as a biocontrol agent against:",
    options: ["Nematodes", "Insects", "Soil-borne fungal pathogens (produces antibiotics)", "Viral diseases"],
    correct: 2,
    explanation: "P. fluorescens produces antibiotics (phenazines, 2,4-DAPG) and siderophores effective against soil-borne pathogens.",
    difficulty: "medium"
  },
  {
    id: "d171l_089", subject: "da-171", lecture: "lecture-8", lectureNo: 8,
    question: "Bacillus thuringiensis (Bt) is used to control:",
    options: ["Fungal diseases", "Bacterial diseases", "Lepidopteran pests (caterpillars)", "Nematodes"],
    correct: 2,
    explanation: "Bt produces crystal proteins (Cry toxins) that are specifically toxic to caterpillars and some other insects.",
    difficulty: "easy"
  },
  {
    id: "d171l_090", subject: "da-171", lecture: "lecture-8", lectureNo: 8,
    question: "The enzyme responsible for biological nitrogen fixation is:",
    options: ["Urease", "Nitrate reductase", "Amylase", "Nitrogenase"],
    correct: 3,
    explanation: "Nitrogenase enzyme complex (Mo-Fe protein + Fe protein) catalyzes the conversion of N₂ to NH₃.",
    difficulty: "medium"
  },
];
