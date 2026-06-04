export interface PreviousYearPaper {
  id: string;           // unique route key, e.g. "2025", "2023ap"
  year: number;
  title: string;
  totalQuestions: number;
  duration: number;
  description: string;
  available: boolean;
  isFree?: boolean;     // true → accessible without paid subscription
  badge?: string;       // optional label shown in card (e.g. "🎉 FREE", "🆕 NEW")
}

export const PREVIOUS_YEAR_PAPERS: PreviousYearPaper[] = [
  { id: "2025",   year: 2025, title: "TS AGRICET 2025 – DA Official Question Paper",              totalQuestions: 100, duration: 100, isFree: true,  badge: "🎉 FREE", description: "Official AGRICET 2025 question paper for Diploma in Agriculture candidates (PJTSAU, Telangana).", available: true  },
  { id: "2025ap", year: 2025, title: "AP AGRICET 2025 – DA Question Paper with Key (ANGRAU)",     totalQuestions: 120, duration: 90,  badge: "🆕 NEW", description: "Official ANGRAU AGRICET 2025 question paper with answer key (Andhra Pradesh). 120 questions, 90 minutes.", available: true  },
  { id: "2024",   year: 2024, title: "TS AGRICET 2024 – DA Question Paper with Key",              totalQuestions: 100, duration: 100, description: "Complete 2024 question paper with official answer key (English script questions only, PJTSAU).", available: true  },
  { id: "2024ap", year: 2024, title: "AP AGRICET 2024 – DA Question Paper with Key (ANGRAU)",     totalQuestions: 120, duration: 120, badge: "🆕 NEW", description: "Official ANGRAU AGRICET 2024 question paper with answer key (Andhra Pradesh). 120 questions, 120 minutes.", available: true  },
  { id: "2023",   year: 2023, title: "TS AGRICET 2023 – DA Question Paper with Key",              totalQuestions: 100, duration: 100, description: "Full 2023 question paper with detailed official answer key (English script, PJTSAU).", available: true  },
  { id: "2023ap", year: 2023, title: "AP AGRICET 2023 – DA Question Paper with Key (ANGRAU)",    totalQuestions: 113, duration: 90,  badge: "🆕 NEW", description: "Official ANGRAU AGRICET 2023 question paper with answer key (Andhra Pradesh). 113 questions with green-coded correct answers.", available: true  },
  { id: "2022",   year: 2022, title: "TS AGRICET 2022 – DA Question Paper",                       totalQuestions: 100, duration: 100, description: "2022 question paper for Diploma in Agriculture stream (PJTSAU).", available: false },
  { id: "2021",   year: 2021, title: "TS AGRICET 2021 – DA Question Paper",                       totalQuestions: 100, duration: 100, description: "2021 question paper for Diploma in Agriculture stream (PJTSAU).", available: false },
];

export interface PYQQuestion {
  id: string; year: number; question: string;
  options: string[]; correct: number; explanation: string; subject: string;
}

// ── AGRICET 2025 – All 100 Questions (Official Paper, PJTSAU) ──────────────
export const PYQ_2025: PYQQuestion[] = [
  {
    id: "pyq25_001", year: 2025, subject: "meteorology",
    question: "Which of the following gases contribute to nearly 99% by volume of air in lower atmosphere?",
    options: ["Nitrogen + Carbondioxide", "Oxygen + Carbondioxide", "Argon + Carbondioxide", "Nitrogen + Oxygen"],
    correct: 3,
    explanation: "Nitrogen (~78%) and Oxygen (~21%) together make up nearly 99% of the volume of air in the lower atmosphere. The remaining ~1% consists of argon, CO₂, and trace gases."
  },
  {
    id: "pyq25_002", year: 2025, subject: "meteorology",
    question: "Which concept is more practical and relevant to explain Indian monsoons?",
    options: ["Thermal concept", "Aerological concept", "Humidity concept", "Flohn concept"],
    correct: 0,
    explanation: "The Thermal concept (Halley's theory) explains Indian monsoons as a seasonal reversal of winds driven by differential heating of land and sea. It remains the most practically relevant explanation for the South-West monsoon system."
  },
  {
    id: "pyq25_003", year: 2025, subject: "meteorology",
    question: "In which land capability class is the land use restricted to recreation?",
    options: ["Class I", "Class VI", "Class VII", "Class VIII"],
    correct: 3,
    explanation: "Class VIII land has the most severe limitations and is not suitable for any commercial crop production. Its use is restricted to wildlife habitat, recreation, watershed protection, and aesthetic purposes."
  },
  {
    id: "pyq25_004", year: 2025, subject: "meteorology",
    question: "Diameter of USWB Class A open pan evaporimeter is:",
    options: ["20 cm", "120 cm", "100 cm", "200 cm"],
    correct: 1,
    explanation: "The US Weather Bureau (USWB) Class A open pan evaporimeter has a diameter of 120 cm (4 feet) and a depth of 25 cm. It is the most widely used standard instrument for measuring pan evaporation."
  },
  {
    id: "pyq25_005", year: 2025, subject: "agronomy",
    question: "Which one of the following is NOT an intercultivation practice?",
    options: ["Thinning", "Weeding", "Levelling", "Gap filling"],
    correct: 2,
    explanation: "Intercultivation practices are operations carried out in the standing crop to improve yield. They include thinning, weeding, earthing up, and gap filling. Levelling is a preparatory land operation done before sowing, not an intercultivation practice."
  },
  {
    id: "pyq25_006", year: 2025, subject: "agronomy",
    question: "Calculate the plant population per acre, if crop spacing is 80 cm between rows and 50 cm between plants:",
    options: ["1,000 plants/acre", "10,000 plants/acre", "1,00,000 plants/acre", "4,000 plants/acre"],
    correct: 1,
    explanation: "1 acre = 4047 sq m. Area per plant = 0.80 × 0.50 = 0.40 sq m. Plant population = 4047 ÷ 0.40 ≈ 10,117 ≈ 10,000 plants/acre."
  },
  {
    id: "pyq25_007", year: 2025, subject: "agronomy",
    question: "Which of the following is a pop corn variety of maize?",
    options: ["Zea mays var. amylacea", "Zea mays var. indurata", "Zea mays var. everta", "Zea mays var. ceratina"],
    correct: 2,
    explanation: "Zea mays var. everta is the botanical name for popcorn. It has hard, vitreous endosperm with a small soft starch centre that expands (pops) when heated due to steam pressure buildup inside the kernel."
  },
  {
    id: "pyq25_008", year: 2025, subject: "agronomy",
    question: "The origin of Bengalgram (Chickpea) crop is:",
    options: ["China", "Turkey", "Africa", "Brazil"],
    correct: 1,
    explanation: "Chickpea (Cicer arietinum) originated in Turkey and the surrounding Fertile Crescent region of Western Asia. It was domesticated around 7,500 years ago and later spread to South Asia and Africa."
  },
  {
    id: "pyq25_009", year: 2025, subject: "agronomy",
    question: "Which of the following fertilizer is applied for better decomposition of green manure crops?",
    options: ["Muriate of Potash", "Sulphate of Potash", "Single Super Phosphate", "Urea"],
    correct: 2,
    explanation: "Single Super Phosphate (SSP) is applied to green manure crops before incorporation to supply phosphorus, which activates microbial activity and accelerates decomposition. Phosphorus is the key nutrient for microbial decomposition."
  },
  {
    id: "pyq25_010", year: 2025, subject: "agronomy",
    question: "Striga is a parasitic weed commonly seen in:",
    options: ["Rice", "Sorghum", "Redgram", "Soybean"],
    correct: 1,
    explanation: "Striga (witch weed) is an obligate root parasite that infests sorghum, maize, millet, and sugarcane. It attaches to roots of the host and causes severe yield losses in dryland cereal crops."
  },
  {
    id: "pyq25_011", year: 2025, subject: "agronomy",
    question: "Which of the following is the Townsville stylo (tropical pasture legume)?",
    options: ["Stylosanthes hamata", "Stylosanthes scabra", "Stylosanthes humilis", "Stylosanthes fruticosa"],
    correct: 2,
    explanation: "Stylosanthes humilis is known as Townsville stylo, named after Townsville, Australia. It is an important tropical pasture legume used for forage and soil improvement in dryland areas."
  },
  {
    id: "pyq25_012", year: 2025, subject: "agronomy",
    question: "The desirable level of nicotine in FCV (Flue Cured Virginia) tobacco is:",
    options: ["1.7 to 2.0%", "4.7 to 6.0%", "2.7 to 4.0%", "6.7 to 8.0%"],
    correct: 0,
    explanation: "The desirable nicotine content in FCV tobacco for export quality is 1.7 to 2.0%. Nicotine levels below 1.5% or above 3.5% reduce the commercial value of the tobacco."
  },
  {
    id: "pyq25_013", year: 2025, subject: "agronomy",
    question: "Which of the following crops is highly sensitive to waterlogging?",
    options: ["Rice", "Sugarcane", "Sesame", "Jute"],
    correct: 2,
    explanation: "Sesame (Sesamum indicum) is extremely sensitive to waterlogging — even 24-48 hours of standing water can severely damage or kill the plant. It requires well-drained soils for optimal growth."
  },
  {
    id: "pyq25_014", year: 2025, subject: "agronomy",
    question: "Which of the following sugarcane varieties are poor ratoons?",
    options: ["Early varieties", "Mid-late varieties", "Late varieties", "Both Mid and Late varieties"],
    correct: 0,
    explanation: "Early maturing sugarcane varieties are poor ratoons compared to late varieties. Late varieties generally give better ratoon crops because of their vigorous stubble sprouting and tillering ability."
  },
  {
    id: "pyq25_015", year: 2025, subject: "agronomy",
    question: "Which type of tobacco is cultivated in Odisha state?",
    options: ["Bidi tobacco", "Hookah tobacco", "Pikka tobacco", "Chewing tobacco"],
    correct: 2,
    explanation: "Pikka tobacco is cultivated in Odisha. It is a country-made tobacco type used for local consumption and is specific to the eastern states of India including Odisha."
  },
  {
    id: "pyq25_016", year: 2025, subject: "agronomy",
    question: "Which method of tobacco curing is a slow process and takes 6–8 weeks?",
    options: ["Air curing", "Pit curing", "Sun curing", "Fire curing"],
    correct: 0,
    explanation: "Air curing is the slowest tobacco curing method, taking 4–8 weeks. Tobacco is hung in well-ventilated barns and cured naturally by ambient air. It produces Burley and Cigar wrapper types of tobacco."
  },
  {
    id: "pyq25_017", year: 2025, subject: "genetics",
    question: "Triticale is an example of which type of hybridization?",
    options: ["Intergeneric hybridization", "Interspecific hybridization", "Intervarietal hybridization", "Intrageneric hybridization"],
    correct: 0,
    explanation: "Triticale is a man-made hybrid between wheat (Triticum) and rye (Secale) — two different genera. This makes it a product of intergeneric hybridization (amphidiploidy). It combines the yield potential of wheat with the hardiness of rye."
  },
  {
    id: "pyq25_018", year: 2025, subject: "genetics",
    question: "Arrange the following events in the correct sequence for release of new crop varieties in India:\n1. Identification of superior strains  2. Evaluation of performance  3. Development of new strains  4. Release and notification",
    options: ["1, 2, 3, 4", "3, 1, 2, 4", "3, 2, 1, 4", "4, 3, 2, 1"],
    correct: 2,
    explanation: "The correct sequence for variety release is: Development of new strains (3) → Evaluation of performance (2) → Identification of superior strains (1) → Release and notification (4). This is the standard ICAR varietal release procedure."
  },
  {
    id: "pyq25_019", year: 2025, subject: "seed-technology",
    question: "Arrange the following events in seed certification sequentially:\n1. Inspection of seed field  2. Post-harvest inspection  3. Receipt & scrutiny of application  4. Verification of seed source  5. Grant of certificate  6. Seed sampling & testing",
    options: ["1, 2, 3, 4, 5, 6", "3, 4, 6, 1, 2, 5", "3, 2, 4, 5, 6, 1", "3, 4, 1, 2, 6, 5"],
    correct: 3,
    explanation: "Seed certification sequence: Receipt & scrutiny of application (3) → Verification of seed source (4) → Field inspection (1) → Post-harvest inspection (2) → Seed sampling & testing (6) → Grant of certificate (5)."
  },
  {
    id: "pyq25_020", year: 2025, subject: "seed-technology",
    question: "The development of embryo directly from the nucellus or integuments is called as:",
    options: ["Apospory", "Adventive embryony", "Apogamy", "Parthenogenesis"],
    correct: 1,
    explanation: "Adventive embryony (nucellar embryony) is the development of embryos directly from the nucellus or integuments (sporophytic tissue) without fertilization. It is common in Citrus and Mangifera and results in true-to-type plants."
  },
  {
    id: "pyq25_021", year: 2025, subject: "seed-technology",
    question: "The standard physical purity of Groundnut certified seed is:",
    options: ["98%", "99%", "96%", "100%"],
    correct: 2,
    explanation: "As per the Indian Minimum Seed Certification Standards (IMSCS), the minimum physical purity for groundnut certified seed is 96%. This accounts for the husked nature of groundnut kernels where some impurities are inherent."
  },
  {
    id: "pyq25_022", year: 2025, subject: "seed-technology",
    question: "In which of the following crops are bloom, internode length, sex expression and branching pattern used for identification of rogues during field inspection?",
    options: ["Sunflower", "Cotton", "Sesame", "Castor"],
    correct: 3,
    explanation: "In castor (Ricinus communis), rogues are identified based on bloom colour, internode length, branching pattern, sex expression (monoecious vs. dioecious types), leaf colour, and stem colour during field inspection for certified seed production."
  },
  {
    id: "pyq25_023", year: 2025, subject: "seed-technology",
    question: "The seed coat peroxidase test is used for genetic purity testing in which of the following crops?",
    options: ["Rice", "Wheat", "Soybean", "Oats"],
    correct: 2,
    explanation: "The seed coat peroxidase (SCP) test is a biochemical method used for varietal purity testing in soybean. Different soybean varieties produce distinct peroxidase banding patterns, allowing identification of off-types."
  },
  {
    id: "pyq25_024", year: 2025, subject: "soil-science",
    question: "Match the following soil particles based on their size (in mm):\nClay – A: 0.02–0.2 mm,  Fine Sand – B: 2.0–75.0 mm,  Silt – C: <0.002 mm,  Gravel/Pebbles – D: 0.002–0.02 mm",
    options: ["1-D, 2-C, 3-A, 4-B", "1-C, 2-D, 3-B, 4-A", "1-C, 2-A, 3-D, 4-B", "1-D, 2-A, 3-C, 4-B"],
    correct: 2,
    explanation: "Correct sizes (USDA system): Clay = C (<0.002 mm), Fine Sand = A (0.02–0.2 mm), Silt = D (0.002–0.02 mm), Gravel/Pebbles = B (2.0–75.0 mm). Therefore: 1-C, 2-A, 3-D, 4-B."
  },
  {
    id: "pyq25_025", year: 2025, subject: "soil-science",
    question: "Match the following soil properties with their correct units:\nBulk density – A: %,  Electrical conductivity – B: meq of Ca/100 g soil,  ESP – C: Mg m⁻³,  Gypsum requirement – D: dS m⁻¹",
    options: ["1-B, 2-C, 3-A, 4-D", "1-C, 2-A, 3-D, 4-B", "1-B, 2-A, 3-D, 4-C", "1-C, 2-D, 3-A, 4-B"],
    correct: 3,
    explanation: "Correct units: Bulk density = C (Mg m⁻³), Electrical conductivity = D (dS m⁻¹), ESP (Exchangeable Sodium Percentage) = A (%), Gypsum requirement = B (meq of Ca/100 g soil). Answer: 1-C, 2-D, 3-A, 4-B."
  },
  {
    id: "pyq25_026", year: 2025, subject: "soil-science",
    question: "The effect of light scattering in colloidal dispersion while showing no light in a true solution is called as:",
    options: ["Brownian effect", "Flocculation effect", "Deflocculation effect", "Tyndall effect"],
    correct: 3,
    explanation: "The Tyndall effect is the scattering of light by colloidal particles, making the beam of light visible (like a searchlight in fog). True solutions do not scatter light and appear clear because the solute particles are too small."
  },
  {
    id: "pyq25_027", year: 2025, subject: "soil-science",
    question: "The pH concept was given by:",
    options: ["Robinson", "Dokuchaev", "Buckman & Brady", "Sorensen"],
    correct: 3,
    explanation: "The concept of pH (negative logarithm of hydrogen ion concentration) was introduced by the Danish biochemist Søren Peter Lauritz Sørensen in 1909. He proposed this scale to measure acidity and alkalinity."
  },
  {
    id: "pyq25_028", year: 2025, subject: "soil-science",
    question: "Match the following elements with their deficiency symptoms in crops:\nMagnesium – A: Rice Khaira disease,  Zinc – B: Oats Grey speck,  Copper – C: Cauliflower Whiptail,  Molybdenum – D: Cotton Interveinal chlorosis,  Manganese – E: Wheat Empty glumes",
    options: ["1-D, 2-E, 3-C, 4-A, 5-B", "1-B, 2-C, 3-E, 4-A, 5-D", "1-D, 2-A, 3-C, 4-E, 5-B", "1-D, 2-A, 3-E, 4-C, 5-B"],
    correct: 3,
    explanation: "Correct matches: Magnesium → D (Cotton interveinal chlorosis), Zinc → A (Rice Khaira disease), Copper → E (Wheat empty glumes), Molybdenum → C (Cauliflower whiptail), Manganese → B (Oats grey speck). Answer: 1-D, 2-A, 3-E, 4-C, 5-B."
  },
  {
    id: "pyq25_029", year: 2025, subject: "soil-science",
    question: "Guano manure is a product of:",
    options: ["Sea animal", "Sea bird", "Marine fish", "Sheep horns"],
    correct: 1,
    explanation: "Guano is the accumulated excrement of seabirds (and bats). It is rich in nitrogen (N), phosphorus (P), and potassium (K), making it an excellent organic fertilizer. It was historically a major source of fertilizer before synthetic fertilizers were developed."
  },
  {
    id: "pyq25_030", year: 2025, subject: "soil-science",
    question: "Find out the FREE LIVING nitrogen fixing bacteria from the following bio-fertilizers:",
    options: ["Rhizobium", "Azospirillum", "Azorhizobium", "Azotobacter"],
    correct: 3,
    explanation: "Azotobacter is a free-living (non-symbiotic) aerobic nitrogen-fixing bacterium that lives in soil and fixes atmospheric nitrogen independently. Rhizobium and Azorhizobium are symbiotic; Azospirillum is associative."
  },
  {
    id: "pyq25_031", year: 2025, subject: "soil-science",
    question: "Match the fertilizer with its chemical formula and nitrogen content:\n1. Urea  2. Calcium Ammonium Nitrate  3. Calcium Nitrate  4. Ammonium Sulphate\nA: NH₄NO₃+Ca(NO₃)₂ – 26%N,  B: (NH₄)₂SO₄ – 21%N,  C: CO(NH₂)₂ – 46%N,  D: Ca(NO₃)₂ – 16%N",
    options: ["1-D&16%, 2-A&26%, 3-C&46%, 4-D&21%", "1-C&46%, 2-A&26%, 3-D&16%, 4-B&21%", "1-B&21%, 2-D&16%, 3-A&26%, 4-C&46%", "1-A&26%, 2-D&16%, 3-C&46%, 4-B&21%"],
    correct: 1,
    explanation: "Urea = CO(NH₂)₂ with 46% N, CAN = NH₄NO₃+Ca(NO₃)₂ with 26% N, Calcium Nitrate = Ca(NO₃)₂ with 16% N, Ammonium Sulphate = (NH₄)₂SO₄ with 21% N. Answer: 1-C&46%, 2-A&26%, 3-D&16%, 4-B&21%."
  },
  {
    id: "pyq25_032", year: 2025, subject: "soil-science",
    question: "Match the following P fertilizers with their chemical formula:\nGypsum – A: (CaO).SiO₂,  Rock phosphate – B: Ca₅(PO₄)₃F,  Basic slag – C: CaCO₃.MgCO₃,  Dolomitic lime – D: CaSO₄.2H₂O",
    options: ["1-B, 2-A, 3-C, 4-D", "1-D, 2-A, 3-C, 4-B", "1-A, 2-B, 3-D, 4-C", "1-D, 2-C, 3-A, 4-B"],
    correct: 3,
    explanation: "Gypsum = D (CaSO₄.2H₂O), Rock phosphate = C (Ca₅(PO₄)₃F — fluorapatite), Basic slag = A ((CaO).SiO₂-type calcium silicate), Dolomitic lime = B (CaCO₃.MgCO₃). Answer: 1-D, 2-C, 3-A, 4-B."
  },
  {
    id: "pyq25_033", year: 2025, subject: "soil-science",
    question: "Biuret concentration in urea should be below:",
    options: ["10%", "1.5%", "5.0%", "50%"],
    correct: 1,
    explanation: "Biuret (a byproduct of urea manufacturing: 2CO(NH₂)₂ → H₂N-CO-NH-CO-NH₂ + NH₃) is phytotoxic. As per Indian standards, biuret content in urea should not exceed 1.5% to avoid crop toxicity."
  },
  {
    id: "pyq25_034", year: 2025, subject: "entomology",
    question: "Rasping and sucking type of mouth parts are asymmetrical due to the absence of:",
    options: ["Right Maxillae", "Right Mandible", "Left Maxillae", "Left Mandible"],
    correct: 1,
    explanation: "In thrips (Order Thysanoptera), the rasping and sucking mouthparts are asymmetrical because the right mandible is absent (vestigial or lost during evolution). Only the left mandible is functional for puncturing plant tissue."
  },
  {
    id: "pyq25_035", year: 2025, subject: "entomology",
    question: "Which of the following is an anticoagulant rodenticide?",
    options: ["Zinc phosphide", "Aluminium phosphide", "Bromodialone", "Methyl bromide"],
    correct: 2,
    explanation: "Bromodialone is a second-generation anticoagulant rodenticide (superwarfarin). It kills rodents by preventing blood clotting (inhibiting Vitamin K epoxide reductase). Zinc phosphide and Al phosphide are fumigants; methyl bromide is a soil fumigant."
  },
  {
    id: "pyq25_036", year: 2025, subject: "entomology",
    question: "Disease caused by fungi in insects is commonly known as:",
    options: ["Septicemia", "Treetop disease", "Pebrine", "Mycosis"],
    correct: 3,
    explanation: "Mycosis is the disease caused by entomopathogenic fungi in insects (e.g., Beauveria bassiana, Metarhizium anisopliae). Septicemia is bacterial; Treetop disease is caused by nuclear polyhedrosis virus (NPV); Pebrine is caused by microsporidian protozoa."
  },
  {
    id: "pyq25_037", year: 2025, subject: "entomology",
    question: "Stridulatory organs are the characteristic feature of the following order:",
    options: ["Orthoptera", "Hemiptera", "Thysanoptera", "Lepidoptera"],
    correct: 0,
    explanation: "Stridulatory organs (sound-producing structures by rubbing body parts) are characteristic of Order Orthoptera (grasshoppers, crickets, locusts). Males produce mating calls by rubbing forewings against hindlegs (tegmino-femoral stridulation)."
  },
  {
    id: "pyq25_038", year: 2025, subject: "entomology",
    question: "The abdominal second segment is modified into pedicel or petiole in the following order:",
    options: ["Isoptera", "Hymenoptera", "Thysanoptera", "Diptera"],
    correct: 1,
    explanation: "In Order Hymenoptera (ants, wasps, bees), the second abdominal segment is modified into a narrow, waist-like pedicel or petiole that connects the thorax to the abdomen, giving the characteristic 'wasp waist' appearance."
  },
  {
    id: "pyq25_039", year: 2025, subject: "entomology",
    question: "Drie-Die (inert dust) results in death of storage pests due to:",
    options: ["Loss of moisture", "Increase in temperature", "Decrease in RH", "Loss of wax"],
    correct: 0,
    explanation: "Drie-Die (diatomaceous earth/silica aerogel) kills storage insects by physical action — it abrades and absorbs the waxy cuticle, causing death by desiccation (loss of moisture through the body surface), not by chemical toxicity."
  },
  {
    id: "pyq25_040", year: 2025, subject: "entomology",
    question: "Fore wings are divided into 2 parts and Hind wings are divided into 3 parts in the following insect pest:",
    options: ["Helicoverpa armigera", "Spodoptera litura", "Exelastis atmosa", "Maruca vitrata"],
    correct: 2,
    explanation: "Exelastis atmosa (groundnut plume moth) has uniquely divided wings — the fore wings are split into 2 lobes and hind wings into 3 lobes (feather-like), which is characteristic of the family Pterophoridae (plume moths)."
  },
  {
    id: "pyq25_041", year: 2025, subject: "entomology",
    question: "Chlorotic patches at tips of leaflets in a typical V-shaped manner in groundnut is due to:",
    options: ["White grub", "Leaf miner", "Leaf hopper", "Thrips"],
    correct: 2,
    explanation: "Groundnut leaf hopper (Empoasca kerri) feeding causes 'hopperburn' — chlorotic patches starting at the leaflet tip in a V-shape extending inward. This is due to the leaf hopper injecting toxic saliva while feeding on phloem sap."
  },
  {
    id: "pyq25_042", year: 2025, subject: "entomology",
    question: "Lepidopteran predator on sugarcane woolly aphid (Ceratovacuna lanigera)?",
    options: ["Chrysoperla carnea", "Dipha aphidivora", "Epiricrania melanoleuca", "Ceratovacuna lanigera"],
    correct: 1,
    explanation: "Dipha aphidivora (Lepidoptera: Pyralidae) is a specific Lepidopteran predator of the sugarcane woolly aphid (Ceratovacuna lanigera). Its larvae are voracious predators of the aphid colonies found on the underside of sugarcane leaves."
  },
  {
    id: "pyq25_043", year: 2025, subject: "entomology",
    question: "Pumpkin beetle (Aulacophora foveicollis) grubs feed on:",
    options: ["Stem", "Leaves", "Roots", "Fruits"],
    correct: 2,
    explanation: "Adult pumpkin beetles feed on foliage (leaves), while grubs (larvae) of the pumpkin beetle bore into the soil and feed on roots of cucurbit crops. Root feeding by larvae is more damaging than adult leaf feeding."
  },
  {
    id: "pyq25_044", year: 2025, subject: "entomology",
    question: "Maryland, USA does not allow mango imports from India because of the following pest:",
    options: ["Nut weevil", "Fruit fly", "Fruit borer", "Shoot borer"],
    correct: 0,
    explanation: "The mango nut weevil (Sternochetus mangiferae) is a major quarantine pest that restricts mango exports from India to USA (including Maryland). The larvae bore into the mango seed/kernel, making it a quarantine concern for importing countries."
  },
  {
    id: "pyq25_045", year: 2025, subject: "entomology",
    question: "Ovaries distorted into gall-like structures in chillies due to:",
    options: ["Thrips", "Mites", "Blossom midge", "Aphids"],
    correct: 2,
    explanation: "The chilli blossom midge (Asphondylia capsici) causes gall-like distortion of ovaries in chilli flowers. The larvae develop inside the ovary, causing it to swell into a distinctive gall-like structure instead of developing into a normal fruit."
  },
  {
    id: "pyq25_046", year: 2025, subject: "entomology",
    question: "Mid-larval parasite on black headed caterpillar (Opisina arenosella) of Coconut:",
    options: ["Opisina arenosella", "Bracon brevicornis", "Cotesia taragami", "Goniozus nephantidis"],
    correct: 1,
    explanation: "Bracon brevicornis (Hymenoptera: Braconidae) is a larval ectoparasitoid of the coconut black headed caterpillar (Opisina arenosella). It parasitizes mid-stage larvae and is an important biocontrol agent in coconut-growing areas."
  },
  {
    id: "pyq25_047", year: 2025, subject: "economics",
    question: "What is the Elasticity of Production (EP) in Stage III of the production function?",
    options: ["EP < 1", "EP > 1", "EP < 0", "EP = 0"],
    correct: 2,
    explanation: "In Stage III of the production function (irrational zone of over-application), total product decreases as input increases, so Marginal Product is negative, making Elasticity of Production (EP = MP/AP) less than zero (EP < 0)."
  },
  {
    id: "pyq25_048", year: 2025, subject: "economics",
    question: "The loans that are due for repayment within a period of two to five years are called:",
    options: ["Current liabilities", "Intermediate liabilities", "Long term Assets", "Long term liabilities"],
    correct: 1,
    explanation: "In agricultural finance, loans are classified by repayment period: Short-term (<1 year) = Current liabilities; Intermediate/Medium-term (1–5 years) = Intermediate liabilities; Long-term (>5 years) = Long-term liabilities."
  },
  {
    id: "pyq25_049", year: 2025, subject: "economics",
    question: "Kinked demand curve is an important feature of:",
    options: ["Oligopoly market", "Monopolistic competition", "Duopoly market", "Monopoly market"],
    correct: 0,
    explanation: "The kinked demand curve model (Paul Sweezy, 1939) explains price rigidity in oligopoly markets. Firms assume competitors will match price cuts but not price increases, creating a kink in the demand curve at the prevailing price."
  },
  {
    id: "pyq25_050", year: 2025, subject: "economics",
    question: "Assertion (A): FC (Fixed Cost) curve is declining with increased output.\nReason (R): Total fixed costs are constant.\nChoose the correct answer:",
    options: ["A is true but R is false", "A is false but R is true", "Both A & R are true and R explains A", "Both A & R are true but R does not explain A"],
    correct: 2,
    explanation: "Both statements are true and related: Total Fixed Cost (TFC) remains constant regardless of output. Therefore Average Fixed Cost (AFC = TFC/Q) declines continuously as output (Q) increases — R correctly explains A."
  },
  {
    id: "pyq25_051", year: 2025, subject: "economics",
    question: "Match the market structure with its characteristic:\nPerfect competition – A: Many sellers, differentiated product\nMonopolistic competition – B: Few sellers, homogenous product\nPure Oligopoly – C: Few sellers, differentiated product\nDifferentiated Oligopoly – D: Many sellers, homogenous product",
    options: ["1-D, 2-A, 3-B, 4-C", "1-A, 2-B, 3-C, 4-D", "1-B, 2-A, 3-C, 4-D", "1-C, 2-D, 3-A, 4-B"],
    correct: 0,
    explanation: "Correct: Perfect competition = D (many sellers, homogenous product), Monopolistic competition = A (many sellers, differentiated product), Pure Oligopoly = B (few sellers, homogenous product), Differentiated Oligopoly = C (few sellers, differentiated product)."
  },
  {
    id: "pyq25_052", year: 2025, subject: "economics",
    question: "Market information pertaining to market arrivals, prices, and demand for commodities in the past period is referred to as:",
    options: ["Market news", "Market intelligence", "Communication", "Market extension"],
    correct: 1,
    explanation: "Market intelligence refers to compiled historical market data — past arrivals, price trends, seasonal demand patterns. Market news is current/real-time price information. Intelligence helps in forecasting and planning, while news helps in immediate selling decisions."
  },
  {
    id: "pyq25_053", year: 2025, subject: "farm-machinery",
    question: "In a four-stroke engine, the speed of camshaft is:",
    options: ["Double the speed of crankshaft", "Half the speed of crankshaft", "Triple the speed of crankshaft", "Equal to speed of crankshaft"],
    correct: 1,
    explanation: "In a 4-stroke engine, the crankshaft completes 2 revolutions for each power stroke, while the camshaft controls valve timing and makes only 1 revolution for every 2 crankshaft revolutions. Hence camshaft speed = ½ crankshaft speed."
  },
  {
    id: "pyq25_054", year: 2025, subject: "farm-machinery",
    question: "Walking type tractor (power tiller) is fitted with:",
    options: ["8–12 hp engine", "25–80 hp engine", "1.5–5 hp engine", "150–200 hp engine"],
    correct: 0,
    explanation: "Walking type tractors (power tillers) typically use 8–12 hp (sometimes up to 15 hp) engines. They are two-wheel tractors used for small and marginal farms. Large four-wheel tractors use 25–80 hp engines."
  },
  {
    id: "pyq25_055", year: 2025, subject: "farm-machinery",
    question: "Disc angle of a disc harrow plough is:",
    options: ["15–25°", "5–10°", "50–65°", "40–45°"],
    correct: 3,
    explanation: "The disc angle (angle between the plane of the disc and the direction of travel) in a disc harrow is 40–45°. The tilt angle is 15–25°. These angles determine the depth of penetration and soil throw."
  },
  {
    id: "pyq25_056", year: 2025, subject: "farm-machinery",
    question: "The type of threshing cylinder mostly used for paddy crop is:",
    options: ["Peg type", "Wire loop", "Angle bar", "Hammer mill type"],
    correct: 1,
    explanation: "The wire loop (wire tooth) type threshing cylinder is most commonly used for paddy (rice) as it effectively threshes paddy without breaking grains. Peg tooth is for wheat; rasp bar/angle bar is for legumes; hammer mill for harder grains."
  },
  {
    id: "pyq25_057", year: 2025, subject: "farm-machinery",
    question: "In thin layer drying, grain depth should not be more than:",
    options: ["20 mm", "20 cm", "10 mm", "20 feet"],
    correct: 1,
    explanation: "In thin layer grain drying systems, grain is spread in shallow beds not exceeding 20 cm depth to allow uniform airflow and heat distribution. This ensures efficient moisture removal from all grain layers."
  },
  {
    id: "pyq25_058", year: 2025, subject: "farm-machinery",
    question: "Rotary tiller is also called as:",
    options: ["Puddler", "Chisel plough", "Auger plow", "Rotavator"],
    correct: 3,
    explanation: "Rotary tiller is commonly known as Rotavator (Rotary Cultivator). It uses rotating L-shaped blades driven by PTO to till and pulverize soil in one pass. It is widely used for seedbed preparation."
  },
  {
    id: "pyq25_059", year: 2025, subject: "irrigation",
    question: "In a rectangular weir, if the crest length is the same as that of the channel width, it is known as:",
    options: ["Cipolletti weir", "Triangular weir", "Suppressed weir", "Nappe"],
    correct: 2,
    explanation: "A suppressed (or full-width) weir is a rectangular weir where the crest width equals the full width of the channel, so there are no end contractions. The nappe flows across the full channel width without lateral contraction."
  },
  {
    id: "pyq25_060", year: 2025, subject: "irrigation",
    question: "In subsurface drip irrigation system, the discharge rate is generally in the range of:",
    options: ["0.6 to 3 l/h", "6 to 13 l/h", "16 to 23 l/h", "0.006 to 0.3 l/h"],
    correct: 0,
    explanation: "Subsurface drip irrigation (SDI) emitters have discharge rates of 0.6 to 3 litres per hour (l/h). Surface drip emitters are 2–8 l/h, microsprinklers 20–150 l/h, and mini-sprinklers 40–250 l/h."
  },
  {
    id: "pyq25_061", year: 2025, subject: "irrigation",
    question: "If an orifice flows partially (not fully submerged), it behaves like a:",
    options: ["Sluice", "Spillway", "Weir", "Aqueduct"],
    correct: 2,
    explanation: "When an orifice flows partially (free flow, not fully submerged), the water surface at the orifice acts as a free surface similar to a weir. The discharge formula changes from the orifice formula to a weir-type formula."
  },
  {
    id: "pyq25_062", year: 2025, subject: "irrigation",
    question: "In weirs, the depth of flow over the crest is known as:",
    options: ["Nappe", "End contraction", "Head", "Flume"],
    correct: 2,
    explanation: "In weir hydraulics, the depth of water flowing over the weir crest is called the 'Head' (H). The nappe is the sheet of water flowing over the crest, and end contractions are the narrowing of the nappe at the sides."
  },
  {
    id: "pyq25_063", year: 2025, subject: "irrigation",
    question: "To obtain a reasonable degree of uniformity in the discharge of each sprinkler, the mains should run in the direction of the:",
    options: ["Parallel slope", "Steepest slope", "Grid lines", "Contour lines"],
    correct: 1,
    explanation: "In sprinkler irrigation design, the main line (supply pipe) should be laid along the steepest slope direction. This balances pressure losses due to pipe friction with pressure gains due to elevation, improving uniformity."
  },
  {
    id: "pyq25_064", year: 2025, subject: "irrigation",
    question: "The area covered by a rotating head sprinkler can be estimated from the formula:",
    options: ["R = 1.35√H", "R = 1.95√H", "R = 1.05√H", "R = 1.98√H"],
    correct: 0,
    explanation: "The wetted radius (R in metres) of a rotating head sprinkler is estimated by the empirical formula R = 1.35√H, where H is the operating pressure head in metres. This is used for spacing and layout design in sprinkler irrigation systems."
  },
  {
    id: "pyq25_065", year: 2025, subject: "computer-applications",
    question: "ROM stands for:",
    options: ["Read Only Memory", "Refer Only Memory", "Refer Only Magnetic", "Record Only Memory"],
    correct: 0,
    explanation: "ROM (Read Only Memory) is a type of non-volatile computer memory that retains data even without power. It stores the BIOS/firmware. Data can be read but not normally modified. Examples: PROM, EPROM, EEPROM, flash memory."
  },
  {
    id: "pyq25_066", year: 2025, subject: "computer-applications",
    question: "Which of these is NOT a computer programming language?",
    options: ["Fortran", "Cobol", "Basic", "Jargon"],
    correct: 3,
    explanation: "Jargon is not a computer programming language — it is a term for specialized vocabulary used by a group. FORTRAN (scientific), COBOL (business), and BASIC (beginners) are all actual programming languages."
  },
  {
    id: "pyq25_067", year: 2025, subject: "english-communication",
    question: "Homophones occur:",
    options: ["Single", "In pairs", "In triplets", "In quadruples"],
    correct: 1,
    explanation: "Homophones are words that sound the same but have different meanings and/or spellings. They occur in pairs (e.g., their/there, to/too, write/right) or sometimes in groups, but the defining characteristic is that they come in pairs (at minimum two words)."
  },
  {
    id: "pyq25_068", year: 2025, subject: "english-communication",
    question: "A part of a word that can be pronounced in one breath is called:",
    options: ["Phrase", "Syllable", "Clause", "Vowel"],
    correct: 1,
    explanation: "A syllable is the smallest unit of pronunciation — a part of a word that can be spoken in a single uninterrupted breath/sound unit. For example, 'cat' has 1 syllable, 'water' has 2 (wa-ter), 'education' has 4 (ed-u-ca-tion)."
  },
  {
    id: "pyq25_069", year: 2025, subject: "agronomy",
    question: "What are the conditions for hot water treatment for managing grassy shoot disease of sugarcane?",
    options: ["52°C for 30 min", "50°C for 30 min", "52°C for 10 min", "50°C for 10 min"],
    correct: 0,
    explanation: "Hot water treatment (HWT) for grassy shoot disease of sugarcane (caused by phytoplasma) requires treating setts at 52°C for 30 minutes. This temperature effectively inactivates the phytoplasma without damaging the sugarcane sett viability."
  },
  {
    id: "pyq25_070", year: 2025, subject: "plant-pathology",
    question: "The fungal genus causing damping off in vegetables is:",
    options: ["Phytophthora", "Pythium", "Verticillium", "Fusarium"],
    correct: 1,
    explanation: "Pythium spp. (especially P. aphanidermatum, P. debaryanum) are the primary causal organisms of damping off (seed rot and seedling collapse) in vegetables. Phytophthora causes late blight; Fusarium causes wilt; Verticillium causes verticillium wilt."
  },
  {
    id: "pyq25_071", year: 2025, subject: "plant-pathology",
    question: "The symptoms of corky growth and localized death of cortical tissues of fruit is due to:",
    options: ["Scab", "Cankers", "Blast", "Warts"],
    correct: 1,
    explanation: "Cankers are characterised by localised dead areas in the cortical (bark) tissue of fruits, stems, and branches, often with corky or sunken lesions. They are caused by fungi or bacteria (e.g., citrus canker by Xanthomonas citri)."
  },
  {
    id: "pyq25_072", year: 2025, subject: "plant-pathology",
    question: "The scientific name of the fungus causing downy mildew in sunflower is:",
    options: ["Plasmopara viticola", "Pseudoperenospora cubensis", "Sclerospora graminicola", "Plasmopara halstedii"],
    correct: 3,
    explanation: "Plasmopara halstedii (Oomycete) causes downy mildew of sunflower — one of the most damaging sunflower diseases worldwide. P. viticola causes grape downy mildew; P. cubensis causes cucurbit downy mildew; Sclerospora graminicola causes pearl millet downy mildew."
  },
  {
    id: "pyq25_073", year: 2025, subject: "plant-pathology",
    question: "Bacterial leaf blight of rice spreads from one field to another field through:",
    options: ["Irrigation water", "Soil", "Insects", "Air"],
    correct: 0,
    explanation: "Bacterial leaf blight (BLB) of rice (Xanthomonas oryzae pv. oryzae) spreads primarily through irrigation water, which carries the bacteria from infected to healthy fields. It enters plants through hydathodes (leaf margins) and wounds."
  },
  {
    id: "pyq25_074", year: 2025, subject: "plant-pathology",
    question: "The association of nematode infestation is prominent in causing the following disease in banana:",
    options: ["Moko wilt", "Panama wilt", "Heart rot", "Sigatoka leaf spot"],
    correct: 1,
    explanation: "Panama wilt of banana (Fusarium oxysporum f. sp. cubense) is significantly worsened by root lesion nematodes (Pratylenchus coffeae) and burrowing nematodes (Radopholus similis), which cause root damage that facilitates Fusarium infection."
  },
  {
    id: "pyq25_075", year: 2025, subject: "horticulture",
    question: "Which of the following rootstocks is resistant against gummosis of citrus?",
    options: ["Rangapur lime", "Balaji", "Jambheri", "Tenali selection"],
    correct: 2,
    explanation: "Jambheri (rough lemon, Citrus jambhiri) rootstock is widely used in India and is resistant to gummosis (caused by Phytophthora parasitica). It is tolerant to drought and used in light, well-drained soils."
  },
  {
    id: "pyq25_076", year: 2025, subject: "horticulture",
    question: "Match the following crops with their secondary metabolites:\nColeus – i: Withamine A & B,  Kalmegh – ii: Sennosides,  Ashwagandha – iii: Diterpenoids,  Senna – iv: Forskolin",
    options: ["1-i, 2-ii, 3-iii, 4-iv", "1-iv, 2-iii, 3-i, 4-ii", "1-ii, 2-iii, 3-i, 4-iv", "1-iv, 2-i, 3-ii, 4-iii"],
    correct: 1,
    explanation: "Correct: Coleus → iv (Forskolin — a diterpene from Coleus forskohlii), Kalmegh → iii (Diterpenoids/Andrographolide), Ashwagandha → i (Withanolides/Withamine A & B), Senna → ii (Sennosides). Answer: 1-iv, 2-iii, 3-i, 4-ii."
  },
  {
    id: "pyq25_077", year: 2025, subject: "horticulture",
    question: "Application of the following nutrient increases the number of tillers in palmarosa (Cymbopogon martinii):",
    options: ["B (Boron)", "Mg (Magnesium)", "Ca (Calcium)", "Zn (Zinc)"],
    correct: 3,
    explanation: "Application of Zinc (Zn) has been found to increase the number of tillers in palmarosa (Cymbopogon martinii), an aromatic grass. Zinc plays important roles in enzyme activation and auxin metabolism that promote vegetative branching."
  },
  {
    id: "pyq25_078", year: 2025, subject: "horticulture",
    question: "The division of forestry dealing with measurement of forest produce is:",
    options: ["Forest utilization", "Wood technology", "Forest mensuration", "Forest management"],
    correct: 2,
    explanation: "Forest mensuration is the branch of forestry that deals with the measurement of forest produce — including measurement of individual trees (diameter, height, volume), stand measurement, and yield estimation of timber and other forest products."
  },
  {
    id: "pyq25_079", year: 2025, subject: "horticulture",
    question: "Match the following trees with their common names:\nTeak – i: Divine tree\nBamboo – ii: Poor man's timber\nNeem – iii: King of forest plant",
    options: ["1-ii, 2-i, 3-iii", "1-iii, 2-ii, 3-i", "1-i, 2-ii, 3-iii", "1-i, 2-iii, 3-ii"],
    correct: 1,
    explanation: "Correct: Teak → iii (King of Indian timber/forest plant — Tectona grandis is called king of timber), Bamboo → ii (Poor man's timber — versatile and inexpensive), Neem → i (Village pharmacy/Divine tree — sacred in Indian culture). Answer: 1-iii, 2-ii, 3-i."
  },
  {
    id: "pyq25_080", year: 2025, subject: "horticulture",
    question: "Modified system of shifting cultivation is:",
    options: ["Random mix", "Multistoried cropping", "Taungya system", "Strip system"],
    correct: 2,
    explanation: "Taungya system is a modified form of shifting cultivation developed in Burma (Myanmar) in 1856 by Sir Dietrich Brandis. Agricultural crops are grown temporarily between young forest tree plantations until canopy closure, combining forestry with farming."
  },
  {
    id: "pyq25_081", year: 2025, subject: "horticulture",
    question: "Katha and cutch are produced from the wood of:",
    options: ["Khair", "Neem", "Bamboo", "Teak"],
    correct: 0,
    explanation: "Katha (catechu) and cutch (kattha) are obtained by boiling the heartwood of Khair (Acacia catechu) and evaporating the extract. Katha is the white extract (used in paan/betel) and cutch is the dark brown extract used for dyeing and tanning."
  },
  {
    id: "pyq25_082", year: 2025, subject: "horticulture",
    question: "Examples of tuberous roots:",
    options: ["Potato", "Sweet potato", "Ginger", "Gladiolus"],
    correct: 1,
    explanation: "Sweet potato (Ipomoea batatas) has true tuberous roots — modified roots that store food. Potato is a stem tuber (modified underground stem); Ginger is a rhizome (modified underground stem); Gladiolus is a corm (solid compressed stem)."
  },
  {
    id: "pyq25_083", year: 2025, subject: "horticulture",
    question: "Which of the following is the attached scion method of grafting?",
    options: ["Veneer grafting", "Soft wood grafting", "Epicotyl grafting", "Inarching"],
    correct: 3,
    explanation: "Inarching (approach grafting) is the 'attached scion' method where both the scion and rootstock remain attached to their own root systems during the grafting process. The union is allowed to form before severing the scion from its original root system."
  },
  {
    id: "pyq25_084", year: 2025, subject: "horticulture",
    question: "In banana, removal of the heart or male bud is known as:",
    options: ["Mattocking", "Tipping", "Propping", "Trashing"],
    correct: 1,
    explanation: "Tipping (or deflowering/de-handing) in banana refers to the removal of the male bud (false banana/heart) from the bunch after the last hand has formed. This redirects photosynthates to fruit development, improving bunch weight and quality."
  },
  {
    id: "pyq25_085", year: 2025, subject: "horticulture",
    question: "Gynodioecious varieties of papaya produce:",
    options: ["Only staminate flowers", "Only pistillate flowers", "Only hermaphrodite flowers", "Both pistillate and hermaphrodite flowers"],
    correct: 3,
    explanation: "Gynodioecious papaya varieties (e.g., Pusa Delicious, Pusa Majesty) produce plants with either pistillate (female) flowers or hermaphrodite (bisexual) flowers. Both produce fruits, making them commercially important as all plants are productive."
  },
  {
    id: "pyq25_086", year: 2025, subject: "horticulture",
    question: "Match the following crops with their pigments:\nTomato – i: Capsanthin,  Chilli – ii: Quercetin,  Onion – iii: Lycopene,  Carrot – iv: Carotene",
    options: ["1-iii, 2-i, 3-ii, 4-iv", "1-i, 2-ii, 3-iii, 4-iv", "1-ii, 2-i, 3-iii, 4-iv", "1-iv, 2-iii, 3-i, 4-ii"],
    correct: 0,
    explanation: "Correct: Tomato → iii (Lycopene — red pigment), Chilli → i (Capsanthin — red pigment responsible for colour), Onion → ii (Quercetin — yellow flavonoid pigment), Carrot → iv (Carotene — orange pigment). Answer: 1-iii, 2-i, 3-ii, 4-iv."
  },
  {
    id: "pyq25_087", year: 2025, subject: "horticulture",
    question: "Match the following crops with their economic products:\nCabbage – i: Head,  Cauliflower – ii: Curd,  Bottle gourd – iii: Pepo (Fruit),  Colocasia – iv: Corms",
    options: ["1-i, 2-ii, 3-iii, 4-iv", "1-iii, 2-ii, 3-iv, 4-i", "1-ii, 2-i, 3-iii, 4-iv", "1-iv, 2-i, 3-iii, 4-ii"],
    correct: 0,
    explanation: "Correct: Cabbage → i (Head — compact leaf head), Cauliflower → ii (Curd — compact mass of hypertrophied flower buds), Bottle gourd → iii (Pepo — the fleshy berry-type fruit), Colocasia → iv (Corms — underground storage stems/edible corms)."
  },
  {
    id: "pyq25_088", year: 2025, subject: "extension",
    question: "According to the principles of Extension, what is the basic unit of civilization?",
    options: ["Home", "School", "Nation", "Community"],
    correct: 0,
    explanation: "According to extension education principles, the Home (family) is the basic unit of civilization and rural development. Extension programmes begin with improving home life, as changes in farm practices are closely linked to family welfare and decision-making."
  },
  {
    id: "pyq25_089", year: 2025, subject: "extension",
    question: "The leaders who actually initiate action within the group regardless of whether they hold an elected office are called:",
    options: ["Ornamental leader", "Prominent talent leader", "Operational leader", "Professional leader"],
    correct: 2,
    explanation: "Operational leaders are the informal leaders who take initiative and actually get things done within a community, irrespective of their formal elected position. They motivate others through action and are important for extension programme implementation."
  },
  {
    id: "pyq25_090", year: 2025, subject: "extension",
    question: "An outline of procedures pertaining to some phases of extension work is known as:",
    options: ["Project", "Calendar of work", "Plan of work", "Programme"],
    correct: 0,
    explanation: "A Project in extension education is a written outline of procedures pertaining to a specific phase or component of extension work. It is more specific and focused than a Programme, and includes objectives, methods, timelines, and resources for that particular activity."
  },
  {
    id: "pyq25_091", year: 2025, subject: "extension",
    question: "Which PRA (Participatory Rural Appraisal) technique is used for analyzing recurring seasonal challenges?",
    options: ["Time line", "Transact walk", "Matrix ranking", "Trend analysis"],
    correct: 3,
    explanation: "Trend analysis (also Seasonality Diagram) is the PRA tool used to analyse recurring seasonal challenges — such as seasonal food shortages, disease prevalence, rainfall patterns, and labour availability — by asking community members to map changes over seasons."
  },
  {
    id: "pyq25_092", year: 2025, subject: "extension",
    question: "A process of forming an opinion about work or an object based on its values to make effective rather than hasty decisions is known as which form of Evaluation?",
    options: ["Informal evaluation", "Project evaluation", "Formal evaluation", "Extension evaluation"],
    correct: 2,
    explanation: "Formal evaluation is a systematic, structured process of forming opinions about programme effectiveness based on predetermined criteria and standards. It involves planned data collection and analysis, unlike informal evaluation which is ad-hoc and subjective."
  },
  {
    id: "pyq25_093", year: 2025, subject: "extension",
    question: "India's first Biochar Centre of Excellence was inaugurated at:",
    options: ["Punjab Agricultural University, Ludhiana", "Kanha Shanti Vanam, Hyderabad", "Gujarat Natural Farming Science University, Panchamahal", "National Dairy Research Institute, Karnal"],
    correct: 1,
    explanation: "India's first Biochar Centre of Excellence was inaugurated at Kanha Shanti Vanam, Hyderabad (Heartfulness Institute campus) in 2024–25. Biochar is a carbon-rich material produced by pyrolysis of biomass, used for soil improvement and carbon sequestration."
  },
  {
    id: "pyq25_094", year: 2025, subject: "extension",
    question: "World Food Prize for the year 2025 was awarded to:",
    options: ["Dr. Geoffrey Hawtin", "Ms. Heidi Kuhn", "Dr. Cary Fowler", "Dr. Mariangela Hungria"],
    correct: 3,
    explanation: "The 2025 World Food Prize was awarded to Dr. Mariangela Hungria, a Brazilian microbiologist, for her groundbreaking work on biological nitrogen fixation through rhizobial inoculants. Her research has dramatically reduced the need for synthetic nitrogen fertilizers in Brazilian agriculture."
  },
  {
    id: "pyq25_095", year: 2025, subject: "extension",
    question: "United Nations (UN) designated 2025 as the year of:",
    options: ["International Year of the Co-operatives", "International Year of Pulses", "International Year of Millets", "International Year of Women Farmers"],
    correct: 0,
    explanation: "The United Nations designated 2025 as the International Year of Co-operatives (IYC 2025) with the theme 'Co-operatives Build a Better World'. It aims to highlight co-operatives' contributions to sustainable development and the UN's 2030 agenda."
  },
  {
    id: "pyq25_096", year: 2025, subject: "extension",
    question: "The first National Co-operative University was established at:",
    options: ["Institute of Rural Management, Anand", "Indian Institute of Mass Communication", "Indian Institute of Management, Bengaluru", "Indian Institute of Management, Kozhikode"],
    correct: 0,
    explanation: "The first National Co-operative University (Tribhuvan Sahakari University) was established at the Institute of Rural Management Anand (IRMA) premises in Anand, Gujarat. It was inaugurated in 2023 to promote co-operative education and research in India."
  },
  {
    id: "pyq25_097", year: 2025, subject: "extension",
    question: "The current Director General of ICRISAT is:",
    options: ["Dr. Himanshu Pathak", "Dr. M. L. Jat", "Dr. Jacqueline Hughes", "Dr. T. Mohapatra"],
    correct: 0,
    explanation: "As per the AGRICET 2025 question paper, Dr. Himanshu Pathak was the answer indicated for Director General of ICRISAT (International Crops Research Institute for the Semi-Arid Tropics). Note: Dr. Jacqueline Hughes served as DG until 2023; leadership may have changed thereafter."
  },
  {
    id: "pyq25_098", year: 2025, subject: "extension",
    question: "VKSA is a 15-day nationwide agricultural outreach campaign by the Union Ministry of Agriculture and Farmers' Welfare. What does VKSA stand for?",
    options: ["Vikas Krishi Sanarakshan Abhiyan", "Viksit Kisan Samagra Abhiyan", "Viksit Krishi Sankalp Abhiyan", "Vikasit Krishi Surakshit Abhiyan"],
    correct: 2,
    explanation: "VKSA stands for Viksit Krishi Sankalp Abhiyan — a 15-day nationwide agricultural outreach campaign launched by the Ministry of Agriculture and Farmers' Welfare. It aims to connect agricultural scientists, officials, and farmers to bridge the gap between research and field-level adoption."
  },
  {
    id: "pyq25_099", year: 2025, subject: "agronomy",
    question: "PJTSAU recently organized a state-wide campaign 'Rythu Mungitlo Shastravethalu' during:",
    options: ["May 1–5th, 2025", "May 12th–24th, 2025", "May 1st–13th, 2025", "May 1st–31st, 2025"],
    correct: 0,
    explanation: "Professor Jayashankar Telangana State Agricultural University (PJTSAU) organized the 'Rythu Mungitlo Shastravethalu' (Scientists Among Farmers) state-wide campaign from May 1–5th, 2025, to directly connect agricultural scientists with farmers in villages across Telangana."
  },
  {
    id: "pyq25_100", year: 2025, subject: "genetics",
    question: "What are the names of the two genome-edited rice varieties developed by ICAR?",
    options: ["DRR Dhan 100 and Pusa DST Rice 1", "Basmati 370 and Sona Masuri", "DRR Dhan 64 and DRR Dhan 53", "Pusa 1592 and Pusa Basmati 1728"],
    correct: 0,
    explanation: "ICAR developed two genome-edited rice varieties using CRISPR-Cas9 technology: DRR Dhan 100 (Kamala) — a high-yielding, early maturing variety developed from Samba Mahsuri, and Pusa DST Rice 1 — a drought and salinity tolerant variety. These were approved in 2023 as India's first genome-edited crop varieties."
  },
];

// ── AEO (Agricultural Extension Officer) Previous Papers ─────────────────────
export const AEO_PAPERS: PreviousYearPaper[] = [
  { id: "aeo-2016", year: 2016, title: "TGPSC AEO Exam 2016 — Official Pattern Paper", totalQuestions: 100, duration: 150, isFree: true, badge: "🆓 FREE", description: "Previous year paper based on TGPSC AEO 2016 exam pattern. Part-A: General Studies & Telangana (30 Qs) + Part-B: Agriculture Technical (70 Qs). 150 minutes.", available: true },
  { id: "aeo-2017", year: 2017, title: "TGPSC AEO Exam 2017 — Official Pattern Paper", totalQuestions: 100, duration: 150, isFree: true, badge: "🆓 FREE", description: "Previous year paper based on TGPSC AEO 2017 exam pattern. Part-A: General Studies & Telangana (30 Qs) + Part-B: Agriculture Technical (70 Qs). 150 minutes.", available: true },
  { id: "aeo-1", year: 2016, title: "AEO Model Paper 1 — Practice Set", totalQuestions: 100, duration: 120, isFree: true, badge: "🆓 FREE", description: "Additional practice paper based on TGPSC/APPSC AEO exam pattern. Covers Extension, Agronomy, Soil Science, Entomology, Horticulture & Govt. Schemes.", available: true },
  { id: "aeo-2", year: 2017, title: "AEO Model Paper 2 — Advanced Practice Set", totalQuestions: 100, duration: 120, isFree: true, badge: "🆓 FREE", description: "Advanced practice paper with AEO-level questions on Extension, Agronomy, Soil Science, Plant Protection, Horticulture, Rural Development & Policies.", available: true },
];

// Re-export PYQ arrays for previous years (kept in separate files for maintainability)
export { PYQ_2023 } from "./pyq2023";
export { PYQ_2024 } from "./pyq2024";
export { PYQ_2023_AP } from "./pyq2023ap";
export { PYQ_2024_AP } from "./pyq2024ap";
export { PYQ_2025_AP } from "./pyq2025ap";
export { AEO_PAPER_1, AEO_PAPER_2 } from "./aeo-pyq";
export { AEO_2016 } from "./aeo-2016";
export { AEO_2017 } from "./aeo-2017";
