import sys; sys.stdout.reconfigure(encoding='utf-8')

new_questions_lec = '''
  {
    id: "d241l_081", subject: "da-241", lecture: "lecture-11", lectureNo: 11,
    question: "The elasticity of production (Ep) is calculated as:",
    options: ["Total Product / Total Input", "Marginal Physical Product / Average Physical Product", "Average Product / Marginal Cost", "Total Revenue / Total Cost"],
    correct: 1,
    explanation: "As per DA-241 notes: Elasticity of production Ep = MPP/APP (Marginal Physical Product divided by Average Physical Product). It measures responsiveness of output to input changes.",
    difficulty: "medium"
  },
  {
    id: "d241l_082", subject: "da-241", lecture: "lecture-11", lectureNo: 11,
    question: "In Stage II of the production function, the elasticity of production (Ep) is:",
    options: ["Greater than 1", "Equal to 1", "Between 0 and 1", "Less than 0"],
    correct: 2,
    explanation: "As per DA-241 notes: In Stage II (rational zone), Ep is between 0 and 1. Stage I: Ep > 1, Stage II: 0 < Ep < 1, Stage III: Ep < 0.",
    difficulty: "medium"
  },
  {
    id: "d241l_083", subject: "da-241", lecture: "lecture-11", lectureNo: 11,
    question: "Average Fixed Cost (AFC) curve has which shape?",
    options: ["U-shape", "Inverted U-shape", "Hyperbola (continuously declining)", "Horizontal straight line"],
    correct: 2,
    explanation: "As per DA-241 notes: AFC curve is continuously declining (hyperbola shape) because TFC is constant and as output increases, fixed cost per unit keeps falling.",
    difficulty: "easy"
  },
  {
    id: "d241l_084", subject: "da-241", lecture: "lecture-11", lectureNo: 11,
    question: "Under perfect competition, the relationship between Price (P), Average Revenue (AR) and Marginal Revenue (MR) is:",
    options: ["P > AR > MR", "P = AR > MR", "P = AR = MR", "P < AR = MR"],
    correct: 2,
    explanation: "As per DA-241 notes: Under perfect competition, since all units are sold at the same constant price, P = AR = MR. All three are equal and constant.",
    difficulty: "easy"
  },
  {
    id: "d241l_085", subject: "da-241", lecture: "lecture-12", lectureNo: 12,
    question: "Under monopoly, the relationship between Price (P), Average Revenue (AR) and Marginal Revenue (MR) is:",
    options: ["P = AR = MR", "P = AR > MR", "P > AR > MR", "MR > AR = P"],
    correct: 1,
    explanation: "As per DA-241 notes: Under monopoly, P = AR but both are greater than MR (P = AR > MR). MR declines at faster rate than AR.",
    difficulty: "medium"
  },
  {
    id: "d241l_086", subject: "da-241", lecture: "lecture-12", lectureNo: 12,
    question: "Who established the relationship MR = AR((e-1)/e), linking Marginal Revenue, Average Revenue and price elasticity?",
    options: ["Alfred Marshall", "Paul Samuelson", "Mrs. Joan Robinson", "Adam Smith"],
    correct: 2,
    explanation: "As per DA-241 notes: Mrs. Joan Robinson in her book 'The Economics of Imperfect Competition' established the empirical relationship between price elasticity, AR and MR.",
    difficulty: "medium"
  },
  {
    id: "d241l_087", subject: "da-241", lecture: "lecture-13", lectureNo: 13,
    question: "The Cooperative Credit Societies Act of 1904 was enacted based on which model?",
    options: ["Rochdale model", "Raiffeissen model", "Schulze-Delitzsch model", "Luzzatti model"],
    correct: 1,
    explanation: "As per DA-241 notes: Fredrick Nicholson studied German village banks and raised the slogan 'Find Raiffeissen'. The 1904 Act was enacted based on the Raiffeissen model.",
    difficulty: "medium"
  },
  {
    id: "d241l_088", subject: "da-241", lecture: "lecture-13", lectureNo: 13,
    question: "The Cooperative Credit Societies Act of 1912 differed from the 1904 Act in that it:",
    options: ["Covered only rural cooperative societies", "Applied only to urban areas", "Provided legal protection to all types of cooperatives", "Abolished the Registrar of Cooperatives"],
    correct: 2,
    explanation: "As per DA-241 notes: The 1912 Act provided legal protection to all types of cooperatives, allowing registration of all types including non-credit cooperatives.",
    difficulty: "medium"
  },
  {
    id: "d241l_089", subject: "da-241", lecture: "lecture-13", lectureNo: 13,
    question: "According to Rochdale principles, what percentage of cooperative profits is kept as reserve fund?",
    options: ["10%", "15%", "25%", "50%"],
    correct: 2,
    explanation: "As per DA-241 notes: In cooperatives, 25 per cent of profits is kept as reserve fund and remaining 75 per cent distributed among members as dividend based on share capital contribution.",
    difficulty: "medium"
  },
  {
    id: "d241l_090", subject: "da-241", lecture: "lecture-14", lectureNo: 14,
    question: "Short-term agricultural loans are to be repaid within a period of:",
    options: ["6 to 18 months", "18 months to 5 years", "5 to 10 years", "More than 10 years"],
    correct: 0,
    explanation: "As per DA-241 notes: Short-term loans cover ongoing agricultural operations (sowing, fertilizer, wages) and must be repaid within 6 to 18 months.",
    difficulty: "easy"
  },
  {
    id: "d241l_091", subject: "da-241", lecture: "lecture-14", lectureNo: 14,
    question: "Under 'Equitable Mortgage', registration of property is not required because:",
    options: ["The property is leased land", "Ownership rights are clearly specified in title deeds in the borrower's name", "The loan amount is small", "It is ancestrally inherited property"],
    correct: 1,
    explanation: "As per DA-241 notes: Equitable mortgage applies when mortgaged property is self-acquired by borrower. Since ownership rights are specified in title deeds, no registration is required.",
    difficulty: "medium"
  },
  {
    id: "d241l_092", subject: "da-241", lecture: "lecture-14", lectureNo: 14,
    question: "Scale of Finance for a crop is fixed by which committee?",
    options: ["State Level Bankers Committee (SLBC)", "District Level Technical Committee (DLTC)", "NABARD Board", "Agricultural Prices Commission"],
    correct: 1,
    explanation: "As per DA-241 notes: Scale of Finance is fixed for each district by District Level Technical Committee (DLTC), chaired by District Collector and convened by lead bank district manager.",
    difficulty: "medium"
  },
  {
    id: "d241l_093", subject: "da-241", lecture: "lecture-15", lectureNo: 15,
    question: "Assertion (A): In double entry bookkeeping, two entries are made for each transaction.\\nReason (R): Every transaction has two aspects - one account receives value (debit) and another gives value (credit).",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "As per DA-241 notes: Double entry system records each transaction in two-fold aspects (debit and credit). Receiving account is debtor and giving account is creditor.",
    difficulty: "medium"
  },
  {
    id: "d241l_094", subject: "da-241", lecture: "lecture-15", lectureNo: 15,
    question: "Assertion (A): A firm in equilibrium under perfect competition maximizes profit at MC = MR.\\nReason (R): To the left of equilibrium output, MR > MC, meaning each additional unit adds more to revenue than cost.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "As per DA-241 notes: The firm maximizes profit at MC = MR. To the left of equilibrium, MR > MC so output should be expanded. Both assertion and reason are correct.",
    difficulty: "medium"
  },
  {
    id: "d241l_095", subject: "da-241", lecture: "lecture-16", lectureNo: 16,
    question: "Match the following types of farm records:\\n     Column-I (Record type)       |  Column-II (Content)            |  Column-III (Purpose)\\nA.  Land utilization record      |  1.  Area under each crop       |  i.   Soil management\\nB.  Livestock production record  |  2.  Milk, egg, wool output     |  ii.  Animal husbandry\\nC.  Labour record                |  3.  Daily wage payments        |  iii. Cost analysis\\nD.  Farm inventory               |  4.  List of all farm assets    |  iv.  Net worth calculation",
    options: ["A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-2-i,  B-1-ii,  C-4-iii,  D-3-iv", "A-3-i,  B-4-ii,  C-1-iii,  D-2-iv", "A-4-i,  B-3-ii,  C-2-iii,  D-1-iv"],
    correct: 0,
    explanation: "As per DA-241 notes: Land utilization records - area under crops; Livestock records - milk/egg/wool; Labour records - wage payments; Farm inventory - list of assets for net worth calculation.",
    difficulty: "medium"
  },
  {
    id: "d241l_096", subject: "da-241", lecture: "lecture-16", lectureNo: 16,
    question: "Match the following types of agricultural credit:\\n     Column-I (Credit type)    |  Column-II (Period)       |  Column-III (Purpose)\\nA.  Short-term loans          |  1.  6-18 months          |  i.   Crop production\\nB.  Medium-term loans         |  2.  18 months to 5 years |  ii.  Implements, cattle\\nC.  Long-term loans           |  3.  5 to 20+ years       |  iii. Land reclamation\\nD.  Consumption loans         |  4.  Up to 2.5 years      |  iv.  Non-production use",
    options: ["A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-2-ii, B-1-i,  C-4-iv,  D-3-iii", "A-3-i,  B-4-ii,  C-1-iii,  D-2-iv", "A-1-iii, B-3-i, C-2-iv,  D-4-ii"],
    correct: 0,
    explanation: "As per DA-241 notes: Short-term (6-18 months) for crop production; Medium-term (18 months to 5 years) for implements/cattle; Long-term (5-20+ years) for land reclamation; Consumption loans (up to 2.5 years) for non-production expenses.",
    difficulty: "medium"
  },
  {
    id: "d241l_097", subject: "da-241", lecture: "lecture-17", lectureNo: 17,
    question: "The word 'credit' is derived from the Latin word 'Credo' which means:",
    options: ["I borrow", "I believe", "I promise", "I repay"],
    correct: 1,
    explanation: "As per DA-241 notes: The word 'credit' comes from Latin 'Credo' meaning 'I believe'. Hence credit is based upon belief, confidence, trust and faith.",
    difficulty: "easy"
  },
  {
    id: "d241l_098", subject: "da-241", lecture: "lecture-17", lectureNo: 17,
    question: "Assertion (A): AFC curve is continuously declining and hyperbola-shaped.\\nReason (R): Total Fixed Cost (TFC) is constant, so as output increases, AFC = TFC/Q keeps falling.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "As per DA-241 notes: AFC = TFC/Q. Since TFC is constant, AFC continuously falls as output Q increases, giving it a hyperbolic shape.",
    difficulty: "medium"
  },
  {
    id: "d241l_099", subject: "da-241", lecture: "lecture-18", lectureNo: 18,
    question: "The Mac Lagan Committee (1914-1915) was appointed to review the performance of:",
    options: ["Commercial banks in India", "Cooperative societies under the 1912 Act", "Nationalized banks", "NABARD activities"],
    correct: 1,
    explanation: "As per DA-241 notes: In 1914, the Government appointed a committee under Edward Mac Lagan to look into the performance of cooperative societies formed after the 1912 Act. Report presented in 1915.",
    difficulty: "medium"
  },
  {
    id: "d241l_100", subject: "da-241", lecture: "lecture-18", lectureNo: 18,
    question: "In hypothecated loans, the borrower retains ownership but the banker has:",
    options: ["Full ownership of the property", "Legal right to possess and sell the property on default", "No rights over the property", "Right to collect rent from the property"],
    correct: 1,
    explanation: "As per DA-241 notes: In hypothecated loans (e.g., tractor loans), borrower has ownership rights on movable property, but the banker (hypothecatee) has legal right to take possession and sell it on default.",
    difficulty: "medium"
  },
'''

new_questions_comb = '''
  {
    id: "d241_101",
    subject: "da-241",
    question: "The elasticity of production (Ep) is calculated as:",
    options: ["Total Product / Total Input", "Marginal Physical Product / Average Physical Product", "Average Product / Marginal Cost", "Total Revenue / Total Cost"],
    correct: 1,
    explanation: "As per DA-241 notes: Elasticity of production Ep = MPP/APP. In Stage I: Ep > 1; Stage II: 0 < Ep < 1; Stage III: Ep < 0.",
  },
  {
    id: "d241_102",
    subject: "da-241",
    question: "Under perfect competition, the relationship between Price (P), Average Revenue (AR) and Marginal Revenue (MR) is:",
    options: ["P > AR > MR", "P = AR > MR", "P = AR = MR", "P < AR = MR"],
    correct: 2,
    explanation: "As per DA-241 notes: Under perfect competition, P = AR = MR. All units are sold at the same constant price.",
  },
  {
    id: "d241_103",
    subject: "da-241",
    question: "Who established the empirical relationship between price elasticity, AR and MR in 'The Economics of Imperfect Competition'?",
    options: ["Alfred Marshall", "Paul Samuelson", "Mrs. Joan Robinson", "Adam Smith"],
    correct: 2,
    explanation: "As per DA-241 notes: Mrs. Joan Robinson established MR = AR((e-1)/e) in her book 'The Economics of Imperfect Competition'.",
  },
  {
    id: "d241_104",
    subject: "da-241",
    question: "The Cooperative Credit Societies Act of 1904 was based on which model?",
    options: ["Rochdale model", "Raiffeissen model", "Schulze-Delitzsch model", "Luzzatti model"],
    correct: 1,
    explanation: "As per DA-241 notes: The 1904 Act was enacted based on the Raiffeissen model of cooperative credit.",
  },
  {
    id: "d241_105",
    subject: "da-241",
    question: "What percentage of cooperative profits is kept as reserve fund?",
    options: ["10%", "15%", "25%", "50%"],
    correct: 2,
    explanation: "As per DA-241 notes: 25 per cent of profits is kept as reserve fund; remaining 75 per cent distributed among members as dividend.",
  },
  {
    id: "d241_106",
    subject: "da-241",
    question: "Short-term agricultural loans are to be repaid within:",
    options: ["6 to 18 months", "18 months to 5 years", "5 to 10 years", "More than 10 years"],
    correct: 0,
    explanation: "As per DA-241 notes: Short-term loans cover ongoing farm operations and must be repaid within 6 to 18 months.",
  },
  {
    id: "d241_107",
    subject: "da-241",
    question: "Scale of Finance for a crop is fixed by:",
    options: ["State Level Bankers Committee (SLBC)", "District Level Technical Committee (DLTC)", "NABARD Board", "Agricultural Prices Commission"],
    correct: 1,
    explanation: "As per DA-241 notes: Scale of Finance is fixed by District Level Technical Committee (DLTC), chaired by the District Collector.",
  },
  {
    id: "d241_108",
    subject: "da-241",
    question: "Assertion (A): AFC curve is continuously declining and hyperbola-shaped.\\nReason (R): TFC is constant, so as output increases, AFC = TFC/Q keeps falling.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "As per DA-241 notes: Since TFC is constant, AFC continuously falls as output increases, giving it a hyperbolic shape.",
  },
  {
    id: "d241_109",
    subject: "da-241",
    question: "Assertion (A): The crop loan system treats the crop as security instead of immovable property.\\nReason (R): This enables real cultivators (including tenants) to access institutional credit regardless of land ownership.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "As per DA-241 notes: The crop loan system treats crop as security and eligibility is based on being a real farmer, not land ownership - enabling access for tenant farmers.",
  },
  {
    id: "d241_110",
    subject: "da-241",
    question: "Assertion (A): Under monopoly, MR declines at a faster rate than AR.\\nReason (R): When AR falls by Rs.1, MR falls by Rs.2 because the monopolist must reduce price to sell more units.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "As per DA-241 notes: Under monopoly, AR falls by Rs.1 but MR falls by Rs.2. The reason correctly explains this phenomenon.",
  },
  {
    id: "d241_111",
    subject: "da-241",
    question: "Match the following types of agricultural credit:\\n     Column-I (Credit type)    |  Column-II (Period)       |  Column-III (Purpose)\\nA.  Short-term loans          |  1.  6-18 months          |  i.   Crop production\\nB.  Medium-term loans         |  2.  18 months to 5 years |  ii.  Implements, cattle\\nC.  Long-term loans           |  3.  5 to 20+ years       |  iii. Land reclamation\\nD.  Consumption loans         |  4.  Up to 2.5 years      |  iv.  Non-production use",
    options: ["A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-2-ii, B-1-i,  C-4-iv,  D-3-iii", "A-3-i,  B-4-ii,  C-1-iii,  D-2-iv", "A-1-iii, B-3-i, C-2-iv,  D-4-ii"],
    correct: 0,
    explanation: "As per DA-241 notes: Short-term (6-18 months) for crop production; Medium-term for implements/cattle; Long-term for land reclamation; Consumption loans for non-production expenses.",
  },
  {
    id: "d241_112",
    subject: "da-241",
    question: "Match the following principles of cooperation:\\n     Column-I (Principle)          |  Column-II (Key feature)      |  Column-III (Goal)\\nA.  Open & voluntary membership  |  1.  No caste/religion bar    |  i.   Universal access\\nB.  Democratic organization      |  2.  One man one vote         |  ii.  Equal governance\\nC.  Principle of thrift          |  3.  Savings encouraged       |  iii. Self-sufficiency\\nD.  Principle of service         |  4.  Not profit-oriented      |  iv.  Member welfare",
    options: ["A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-2-ii, B-1-i,  C-4-iv,  D-3-iii", "A-3-iii, B-4-iv, C-1-i,  D-2-ii", "A-4-iv, B-3-iii, C-2-ii, D-1-i"],
    correct: 0,
    explanation: "As per DA-241 notes: Open membership - universal access (no discrimination); Democratic org - one man one vote; Thrift - savings encouraged; Service principle - member welfare over profit.",
  },
  {
    id: "d241_113",
    subject: "da-241",
    question: "Match the stages of production function:\\n     Column-I (Stage)   |  Column-II (MPP status)    |  Column-III (Zone)\\nA.  Stage I            |  1.  MPP > APP             |  i.   Sub-optimal\\nB.  Stage II           |  2.  0 < MPP < APP         |  ii.  Rational\\nC.  Stage III          |  3.  MPP is negative        |  iii. Supra-optimal\\nD.  End of Stage I     |  4.  MPP = APP              |  iv.  APP maximum",
    options: ["A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-2-ii, B-3-iii, C-1-i,  D-4-iv", "A-1-ii, B-2-iii, C-3-i,  D-4-iv", "A-3-iii, B-1-i, C-2-ii, D-4-iv"],
    correct: 0,
    explanation: "As per DA-241 notes: Stage I: MPP > APP - sub-optimal; Stage II: 0 < MPP < APP - rational (producer should operate here); Stage III: MPP negative - supra-optimal; End of Stage I: MPP = APP where APP is maximum.",
  },
  {
    id: "d241_114",
    subject: "da-241",
    question: "The word 'credit' is derived from Latin 'Credo' meaning:",
    options: ["I borrow", "I believe", "I promise", "I repay"],
    correct: 1,
    explanation: "As per DA-241 notes: 'Credo' means 'I believe'. Credit is based upon belief, confidence, trust and faith.",
  },
  {
    id: "d241_115",
    subject: "da-241",
    question: "Macro-level agricultural finance deals with:",
    options: ["Financial management of individual farm units", "Total credit needs of the agricultural sector and lending by institutions", "Day-to-day farm expenditure", "Personal savings of farmers"],
    correct: 1,
    explanation: "As per DA-241 notes: Macro-finance deals with total credit needs of the agricultural sector, terms and conditions, and methods of use of total credit for agricultural development.",
  },
  {
    id: "d241_116",
    subject: "da-241",
    question: "The crop loan system was introduced in Andhra Pradesh from:",
    options: ["Kharif 1954", "Kharif 1960", "Kharif 1966", "Kharif 1970"],
    correct: 2,
    explanation: "As per DA-241 notes: The crop loan system was implemented throughout India in 1965 and introduced in Andhra Pradesh from Kharif 1966.",
  },
  {
    id: "d241_117",
    subject: "da-241",
    question: "The Mac Lagan Committee (1914-1915) was appointed to review the performance of:",
    options: ["Commercial banks", "Cooperative societies under the 1912 Act", "Nationalized banks", "NABARD activities"],
    correct: 1,
    explanation: "As per DA-241 notes: In 1914, a committee under Edward Mac Lagan was appointed to review cooperative societies formed after the 1912 Cooperative Societies Act.",
  },
  {
    id: "d241_118",
    subject: "da-241",
    question: "In farm bookkeeping, a Trial Balance is prepared to:",
    options: ["Calculate net profit", "List all farm assets", "Check arithmetical accuracy of ledger postings", "Record daily transactions"],
    correct: 2,
    explanation: "As per DA-241 notes: Trial balance is prepared to check arithmetical accuracy of ledger postings and detect errors before preparing profit & loss account.",
  },
  {
    id: "d241_119",
    subject: "da-241",
    question: "Complete farm planning (whole farm planning) is adopted when:",
    options: ["Only one enterprise needs improvement", "Minor resource substitution is needed", "Major changes are contemplated in the entire farm organization", "Only pest management is revised"],
    correct: 2,
    explanation: "As per DA-241 notes: Complete or whole farm planning is adopted when major changes are contemplated in existing farm organization. Simple farm planning is for minor single-enterprise changes.",
  },
  {
    id: "d241_120",
    subject: "da-241",
    question: "In hypothecated loans, the borrower retains ownership but the banker has:",
    options: ["Full ownership of the property", "Legal right to possess and sell the property on default", "No rights over the property", "Right to collect rent"],
    correct: 1,
    explanation: "As per DA-241 notes: In hypothecated loans (tractor, machinery loans), borrower has ownership rights on movable property, but the banker has legal right to take possession and sell it on default.",
  },
'''

def append_questions(filepath, new_ts_block):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    insert_pos = content.rfind('];')
    new_content = content[:insert_pos] + '\n' + new_ts_block + '\n' + content[insert_pos:]
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f'Appended to {filepath}')

append_questions(r'C:\Users\bioas\Agricet Mock Test Series\src\data\questions\da-241-lectures.ts', new_questions_lec)
append_questions(r'C:\Users\bioas\Agricet Mock Test Series\src\data\questions\da-241.ts', new_questions_comb)
