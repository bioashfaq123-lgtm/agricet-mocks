"""
Add 40 lecture questions (d291l_161 to d291l_200) and 100 combined questions
(d291_101 to d291_200) for DA-291 Agricultural Extension Education.
Source: DA-291 Agricultural Extension & RD Dr.E.Srinivas Final.pdf
"""
import sys, os, random
sys.stdout.reconfigure(encoding='utf-8')

BASE = r"C:\Users\bioas\Agricet Mock Test Series\src\data\questions"
LFILE = os.path.join(BASE, "da-291-lectures.ts")
CFILE = os.path.join(BASE, "da-291.ts")

def shuffle_q(questions):
    for q in questions:
        opts = q['options'][:]
        ct = opts[q['correct']]
        seed = abs(hash(repr(opts))) % (2**31)
        rng = random.Random(seed)
        rng.shuffle(opts)
        q['options'] = opts
        q['correct'] = opts.index(ct)
    return questions

def append_to_file(fpath, questions, is_lecture):
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    content = content.rstrip()
    if content.endswith('];'):
        content = content[:-2].rstrip()
    parts = []
    for q in questions:
        opts_str = ', '.join('"' + o.replace('\\', '\\\\').replace('"', '\\"') + '"' for o in q['options'])
        qt = q['question'].replace('\\', '\\\\').replace('"', '\\"')
        et = q['explanation'].replace('\\', '\\\\').replace('"', '\\"')
        if is_lecture:
            s = ('  {\n    id: "' + q['id'] + '", subject: "' + q['subject'] + '", lecture: "' + q['lecture']
                 + '", lectureNo: ' + str(q['lectureNo']) + ',\n    question: "' + qt
                 + '",\n    options: [' + opts_str + '],\n    correct: ' + str(q['correct'])
                 + ',\n    explanation: "' + et + '",\n    difficulty: "' + q['difficulty'] + '"\n  }')
        else:
            s = ('  {\n    id: "' + q['id'] + '", subject: "' + q['subject']
                 + '",\n    question: "' + qt
                 + '",\n    options: [' + opts_str + '],\n    correct: ' + str(q['correct'])
                 + ',\n    explanation: "' + et + '",\n    difficulty: "' + q['difficulty'] + '"\n  }')
        parts.append(s)
    new_content = content + ',\n' + ',\n'.join(parts) + '\n\n];'
    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"  Appended {len(questions)} questions to {os.path.basename(fpath)}")

# ============================================================
# LECTURE QUESTIONS: d291l_161 to d291l_200 (Lectures 11-15)
# ============================================================
lecture_questions = [
  # --- Lecture 11: Agricultural Information Materials ---
  {
    "id": "d291l_161", "subject": "Agricultural Extension Education",
    "lecture": "Agricultural Information Materials", "lectureNo": 11,
    "question": "A leaflet in extension education is defined as:",
    "options": ["A single sheet of paper printed on one or both sides with brief information",
                "A bound booklet of 20-30 pages with detailed technical information",
                "A monthly newsletter published by agricultural universities",
                "A large poster displayed at village entry points"],
    "correct": 0,
    "explanation": "A leaflet is a single sheet of paper printed on one or both sides, used for disseminating brief agricultural information to farmers.",
    "difficulty": "easy"
  },
  {
    "id": "d291l_162", "subject": "Agricultural Extension Education",
    "lecture": "Agricultural Information Materials", "lectureNo": 11,
    "question": "Which of the following is the correct sequence of agricultural information materials in increasing order of size/detail?",
    "options": ["Leaflet < Folder < Pamphlet < Bulletin",
                "Bulletin < Pamphlet < Folder < Leaflet",
                "Pamphlet < Folder < Bulletin < Leaflet",
                "Folder < Leaflet < Bulletin < Pamphlet"],
    "correct": 0,
    "explanation": "Leaflet is smallest (single sheet), followed by folder (folded sheet), pamphlet (few pages), and bulletin (comprehensive document with more detail).",
    "difficulty": "medium"
  },
  {
    "id": "d291l_163", "subject": "Agricultural Extension Education",
    "lecture": "Agricultural Information Materials", "lectureNo": 11,
    "question": "Assertion (A): Printed agricultural information materials should be written in simple local language.\nReason (R): Farmers are a heterogeneous group with varying educational levels, including many illiterates.",
    "options": ["Both A and R are true and R is the correct explanation of A",
                "Both A and R are true but R is not the correct explanation of A",
                "A is true but R is false",
                "A is false but R is true"],
    "correct": 0,
    "explanation": "Simple local language is essential because farmers vary in education level and many are illiterate, making complex technical language a barrier to communication.",
    "difficulty": "medium"
  },
  {
    "id": "d291l_164", "subject": "Agricultural Extension Education",
    "lecture": "Agricultural Information Materials", "lectureNo": 11,
    "question": "A folder in extension materials is characterized by:",
    "options": ["A sheet folded into sections, providing more information than a leaflet but less than a pamphlet",
                "A bound publication similar to a magazine with multiple articles",
                "A large printed chart displayed on walls",
                "A collection of loose sheets tied together"],
    "correct": 0,
    "explanation": "A folder is made by folding a sheet to create sections, offering intermediate detail between a leaflet and a pamphlet.",
    "difficulty": "easy"
  },
  {
    "id": "d291l_165", "subject": "Agricultural Extension Education",
    "lecture": "Agricultural Information Materials", "lectureNo": 11,
    "question": "The cost of paper in printing agricultural information materials should not exceed:",
    "options": ["60-70% of total production cost",
                "80-90% of total production cost",
                "30-40% of total production cost",
                "10-20% of total production cost"],
    "correct": 0,
    "explanation": "According to the DA-291 course material, the cost of paper should not cross 60-70% of the total publication cost to keep printing affordable.",
    "difficulty": "hard"
  },
  {
    "id": "d291l_166", "subject": "Agricultural Extension Education",
    "lecture": "Agricultural Information Materials", "lectureNo": 11,
    "question": "Which of the following is a limitation of printed agricultural information materials?",
    "options": ["Illiterates cannot read and understand the information",
                "Information cannot be disseminated to large groups",
                "Repeated reading is not possible",
                "People do not believe printed information"],
    "correct": 0,
    "explanation": "A major limitation of printed materials is that illiterate farmers cannot read or understand them, limiting their effectiveness in rural areas with high illiteracy.",
    "difficulty": "easy"
  },
  {
    "id": "d291l_167", "subject": "Agricultural Extension Education",
    "lecture": "Agricultural Information Materials", "lectureNo": 11,
    "question": "Three-column matching: Match the extension information material, its feature, and its use:\nCol A: 1-Bulletin, 2-Newsletter, 3-Wall newspaper\nCol B: P-Monthly/quarterly publication, Q-Comprehensive technical document, R-Displayed in public places\nCol C: i-For scientific community, ii-For general awareness, iii-For keeping people informed",
    "options": ["1-Q-i, 2-P-iii, 3-R-ii",
                "1-P-i, 2-Q-ii, 3-R-iii",
                "1-R-iii, 2-P-i, 3-Q-ii",
                "1-Q-iii, 2-R-i, 3-P-ii"],
    "correct": 0,
    "explanation": "Bulletin is a comprehensive technical document (Q) for scientific community (i); Newsletter is monthly/quarterly (P) to keep people informed (iii); Wall newspaper is displayed in public places (R) for general awareness (ii).",
    "difficulty": "hard"
  },
  {
    "id": "d291l_168", "subject": "Agricultural Extension Education",
    "lecture": "Agricultural Information Materials", "lectureNo": 11,
    "question": "A circular letter in extension education is used to:",
    "options": ["Send the same information to many recipients simultaneously",
                "Circulate within government departments only",
                "Replace face-to-face farm and home visits",
                "Present research findings in tabular format"],
    "correct": 0,
    "explanation": "A circular letter is a communication sent simultaneously to many recipients to convey the same information, making it efficient for mass dissemination.",
    "difficulty": "medium"
  },

  # --- Lecture 12: Programme Planning ---
  {
    "id": "d291l_169", "subject": "Agricultural Extension Education",
    "lecture": "Programme Planning and Development", "lectureNo": 12,
    "question": "The first step in the extension educational process according to the DA-291 course material is:",
    "options": ["Analysis of the situation",
                "Deciding upon objectives",
                "Teaching",
                "Evaluation"],
    "correct": 0,
    "explanation": "The first phase is analysis of the situation, requiring facts about people's situation, interests, education, needs, social customs, type of farming, markets, etc.",
    "difficulty": "medium"
  },
  {
    "id": "d291l_170", "subject": "Agricultural Extension Education",
    "lecture": "Programme Planning and Development", "lectureNo": 12,
    "question": "Assertion (A): Extension objectives should express behavioral changes in people as well as economic or social outcomes.\nReason (R): The extension educational process is linear and does not repeat once evaluation is complete.",
    "options": ["A is true but R is false",
                "Both A and R are true and R is the correct explanation of A",
                "Both A and R are true but R is not the correct explanation of A",
                "A is false but R is true"],
    "correct": 0,
    "explanation": "A is true - objectives should express behavioral AND economic/social outcomes. R is false - the extension process is cyclical; after evaluation comes reconsideration, and the process begins again.",
    "difficulty": "medium"
  },
  {
    "id": "d291l_171", "subject": "Agricultural Extension Education",
    "lecture": "Programme Planning and Development", "lectureNo": 12,
    "question": "The fifth phase of the extension educational process is:",
    "options": ["Reconsideration",
                "Evaluation",
                "Teaching",
                "Situation analysis"],
    "correct": 0,
    "explanation": "The five phases are: (1) Analysis of situation, (2) Deciding objectives, (3) Teaching, (4) Evaluation, (5) Reconsideration - a review of previous efforts revealing a new situation.",
    "difficulty": "medium"
  },
  {
    "id": "d291l_172", "subject": "Agricultural Extension Education",
    "lecture": "Programme Planning and Development", "lectureNo": 12,
    "question": "In extension education, the teaching phase involves choosing:",
    "options": ["Content to be taught and methods/techniques of teaching",
                "Only the demonstration plots and experimental sites",
                "Only the beneficiaries and target groups",
                "Financial resources and government schemes"],
    "correct": 0,
    "explanation": "The teaching phase involves choosing the content (what is to be taught) and methods/techniques of teaching, using six to nine different methods to stimulate learning.",
    "difficulty": "easy"
  },
  {
    "id": "d291l_173", "subject": "Agricultural Extension Education",
    "lecture": "Programme Planning and Development", "lectureNo": 12,
    "question": "The basic objective of extension is classified under three categories. Which of the following is NOT one of them?",
    "options": ["Financial: obtaining maximum profit from farming",
                "Material: Enhancement in production and income",
                "Related to education: Change in outlook of people",
                "Social and cultural: Development of community"],
    "correct": 0,
    "explanation": "The three categories of extension objectives are: Material (production/income), Educational (change in outlook), and Social & Cultural (community development). Financial profit-maximization is not listed as a basic objective category.",
    "difficulty": "medium"
  },
  {
    "id": "d291l_174", "subject": "Agricultural Extension Education",
    "lecture": "Programme Planning and Development", "lectureNo": 12,
    "question": "Three-column matching: Match the extension objective type, its focus, and its example:\nCol A: 1-Material, 2-Educational, 3-Social & Cultural\nCol B: P-Change in people's outlook, Q-Community development, R-Enhancement in production\nCol C: i-Higher crop yields, ii-Formation of cooperatives, iii-Positive attitude towards new technology",
    "options": ["1-R-i, 2-P-iii, 3-Q-ii",
                "1-P-ii, 2-R-i, 3-Q-iii",
                "1-Q-iii, 2-P-i, 3-R-ii",
                "1-R-iii, 2-Q-i, 3-P-ii"],
    "correct": 0,
    "explanation": "Material objective focuses on production enhancement (R) with higher crop yields (i); Educational objective focuses on change in outlook (P) with positive attitude (iii); Social & Cultural focuses on community development (Q) with cooperative formation (ii).",
    "difficulty": "hard"
  },
  {
    "id": "d291l_175", "subject": "Agricultural Extension Education",
    "lecture": "Programme Planning and Development", "lectureNo": 12,
    "question": "Extension education was first used in agriculture and home science in:",
    "options": ["America",
                "India",
                "Norway",
                "Sweden"],
    "correct": 0,
    "explanation": "For the first time in America, Agricultural extension was used in agriculture and home science, after which the agricultural programs started and were extended to fish culture in Norway and Sweden.",
    "difficulty": "medium"
  },
  {
    "id": "d291l_176", "subject": "Agricultural Extension Education",
    "lecture": "Programme Planning and Development", "lectureNo": 12,
    "question": "The land grant college method of extension, which was later adopted by almost all universities in India, was implemented for the first time in:",
    "options": ["USA",
                "UK",
                "Germany",
                "Japan"],
    "correct": 0,
    "explanation": "The land grant college model of village development programs was implemented for the first time in USA and was later adopted by almost all universities in India.",
    "difficulty": "easy"
  },

  # --- Lecture 13: Developmental Programmes ---
  {
    "id": "d291l_177", "subject": "Agricultural Extension Education",
    "lecture": "Developmental Programmes", "lectureNo": 13,
    "question": "The Srinikethan project, considered the first attempt at rural development in India, was started in:",
    "options": ["1914",
                "1921",
                "1947",
                "1952"],
    "correct": 0,
    "explanation": "Srinikethan was launched in 1914 by Rabindranath Tagore at Srinikethan, West Bengal, to improve economic and social conditions of rural people.",
    "difficulty": "medium"
  },
  {
    "id": "d291l_178", "subject": "Agricultural Extension Education",
    "lecture": "Developmental Programmes", "lectureNo": 13,
    "question": "The Srinikethan project was started by:",
    "options": ["Rabindranath Tagore",
                "Mahatma Gandhi",
                "F L B Brown",
                "Dr. Spencer H"],
    "correct": 0,
    "explanation": "Srinikethan project was started by Rabindranath Tagore at Srinikethan, West Bengal in 1914, as the first attempt of rural development in India.",
    "difficulty": "easy"
  },
  {
    "id": "d291l_179", "subject": "Agricultural Extension Education",
    "lecture": "Developmental Programmes", "lectureNo": 13,
    "question": "The Sevagram rural development programme was started in:",
    "options": ["Vaardha district of Maharashtra",
                "Srinikethan of West Bengal",
                "Marthandam of Kerala",
                "Gurugram district of Punjab"],
    "correct": 0,
    "explanation": "In 1921, Gandhiji started efforts for rural development at Sevagram of Vaardha district of Maharashtra, introducing organic fertilizer, hybrid livestock, and educational system called NAYATHALIM.",
    "difficulty": "medium"
  },
  {
    "id": "d291l_180", "subject": "Agricultural Extension Education",
    "lecture": "Developmental Programmes", "lectureNo": 13,
    "question": "The educational system introduced by Gandhiji at Sevagram for children and adults was called:",
    "options": ["NAYATHALIM",
                "NAVODAYA",
                "NAITIK SHIKSHA",
                "NAVBHARAT"],
    "correct": 0,
    "explanation": "Gandhiji introduced an educational system called NAYATHALIM for children and adults as part of the Sevagram rural development programme in 1921.",
    "difficulty": "hard"
  },
  {
    "id": "d291l_181", "subject": "Agricultural Extension Education",
    "lecture": "Developmental Programmes", "lectureNo": 13,
    "question": "The Gurugram experiment was initiated by deputy commissioner 'F L B Brown' in:",
    "options": ["Gurugram district of Punjab",
                "Vaardha district of Maharashtra",
                "Marthandam of Kerala",
                "Etawah district of Uttar Pradesh"],
    "correct": 0,
    "explanation": "The Gurugram experiment was initiated by deputy commissioner F L B Brown in Gurugram district of Punjab, establishing a school of rural economy to train village guides.",
    "difficulty": "medium"
  },
  {
    "id": "d291l_182", "subject": "Agricultural Extension Education",
    "lecture": "Developmental Programmes", "lectureNo": 13,
    "question": "Assertion (A): The Firka development scheme was introduced by Tongutar Prakasham Panthulu in 1946.\nReason (R): The Firka scheme aimed at 'All round development of rural life' and was later merged into the community development scheme.",
    "options": ["Both A and R are true and R is the correct explanation of A",
                "Both A and R are true but R is not the correct explanation of A",
                "A is true but R is false",
                "A is false but R is true"],
    "correct": 1,
    "explanation": "Both A and R are true. The Firka scheme was introduced by Tongutar Prakasham Panthulu in 1946 with the aim of 'all round development of rural life' and was merged into the community development scheme, but R does not explain why A is true.",
    "difficulty": "medium"
  },
  {
    "id": "d291l_183", "subject": "Agricultural Extension Education",
    "lecture": "Developmental Programmes", "lectureNo": 13,
    "question": "The Etawah project was set up in coordination with Albert Mayer at Etawah district of Uttar Pradesh in:",
    "options": ["1948",
                "1946",
                "1952",
                "1921"],
    "correct": 0,
    "explanation": "The Etawah project was set up in 64 villages in coordination with Albert Mayer in 1948 at Etawah district of Uttar Pradesh, becoming the prototype for community development and NES programmes.",
    "difficulty": "medium"
  },
  {
    "id": "d291l_184", "subject": "Agricultural Extension Education",
    "lecture": "Developmental Programmes", "lectureNo": 13,
    "question": "Three-column matching: Match the pre-independence rural development project, its year, and its founder/location:\nCol A: 1-Srinikethan, 2-Sevagram, 3-Gurugram experiment\nCol B: P-1914, Q-1921, R-1920s\nCol C: i-F L B Brown/Punjab, ii-Rabindranath Tagore/West Bengal, iii-Gandhiji/Maharashtra",
    "options": ["1-P-ii, 2-Q-iii, 3-R-i",
                "1-Q-ii, 2-P-iii, 3-R-i",
                "1-P-iii, 2-Q-i, 3-R-ii",
                "1-R-i, 2-P-ii, 3-Q-iii"],
    "correct": 0,
    "explanation": "Srinikethan (P-1914, ii-Tagore/West Bengal); Sevagram (Q-1921, iii-Gandhiji/Maharashtra); Gurugram experiment (R-1920s, i-F L B Brown/Punjab).",
    "difficulty": "hard"
  },
  {
    "id": "d291l_185", "subject": "Agricultural Extension Education",
    "lecture": "Developmental Programmes", "lectureNo": 13,
    "question": "The Nilokheri scheme (1947) was called:",
    "options": ["Mazdoor Manzil",
                "NAYATHALIM",
                "Etawah Model",
                "Firka Development"],
    "correct": 0,
    "explanation": "The Nilokheri scheme of 1947 aimed at self-sufficiency through village organization connecting 7000 Pakistanis in 100 adjoining villages of India and was called 'Mazdoor Manzil'.",
    "difficulty": "hard"
  },

  # --- Lecture 14: Community Development ---
  {
    "id": "d291l_186", "subject": "Agricultural Extension Education",
    "lecture": "Community Development", "lectureNo": 14,
    "question": "The Community Development Programme (CDP) was launched in India on:",
    "options": ["2nd October 1952",
                "15th August 1947",
                "26th January 1950",
                "2nd October 1959"],
    "correct": 0,
    "explanation": "The Community Development Programme was started in India on 2nd October 1952 (Gandhi Jayanti), with 55 community development projects organized across the country.",
    "difficulty": "easy"
  },
  {
    "id": "d291l_187", "subject": "Agricultural Extension Education",
    "lecture": "Community Development", "lectureNo": 14,
    "question": "Each community development project under CDP (1952) consisted of approximately:",
    "options": ["300 villages, 2 lakh population, 1,50,000 acres of agricultural land",
                "100 villages, 50,000 population, 50,000 acres of land",
                "500 villages, 5 lakh population, 3,00,000 acres of land",
                "200 villages, 1 lakh population, 1,00,000 acres of land"],
    "correct": 0,
    "explanation": "Each CDP project consisted of 300 villages, 2 lakh population and 1,50,000 acres of agricultural land, divided into 3 blocks of 100 villages each.",
    "difficulty": "medium"
  },
  {
    "id": "d291l_188", "subject": "Agricultural Extension Education",
    "lecture": "Community Development", "lectureNo": 14,
    "question": "Assertion (A): Community development is defined as a process of government efforts united with those of the people to improve social, cultural and economic conditions.\nReason (R): Community development involves technically aided and locally organized self-help.",
    "options": ["Both A and R are true but R is not the correct explanation of A",
                "Both A and R are true and R is the correct explanation of A",
                "A is true but R is false",
                "A is false but R is true"],
    "correct": 0,
    "explanation": "Both definitions are correct - A gives the official definition and R is an alternative description. But R (self-help aspect) does not explain A (government-people partnership), so they are complementary but R does not explain A.",
    "difficulty": "medium"
  },
  {
    "id": "d291l_189", "subject": "Agricultural Extension Education",
    "lecture": "Community Development", "lectureNo": 14,
    "question": "The three important objectives of community development are:",
    "options": ["Economic development, Social justice, Democratic progress",
                "Agricultural production, Industrial growth, Urban development",
                "Education, Health, Infrastructure",
                "Land reform, Women empowerment, Tribal welfare"],
    "correct": 0,
    "explanation": "The three important objectives of community development are: Economic development, Social justice, and Democratic progress.",
    "difficulty": "easy"
  },
  {
    "id": "d291l_190", "subject": "Agricultural Extension Education",
    "lecture": "Community Development", "lectureNo": 14,
    "question": "Each block in the Community Development Programme consisted of:",
    "options": ["100 villages with 60,000 to 70,000 population",
                "200 villages with 1 lakh population",
                "50 villages with 25,000 population",
                "300 villages with 2 lakh population"],
    "correct": 0,
    "explanation": "Each block in the CDP consisted of 100 villages with a population of 60,000 to 70,000.",
    "difficulty": "medium"
  },
  {
    "id": "d291l_191", "subject": "Agricultural Extension Education",
    "lecture": "Community Development", "lectureNo": 14,
    "question": "In Andhra Pradesh, CDP was implemented in three locations. Which of the following was NOT one of them?",
    "options": ["Visakhapatnam",
                "East Godavari (Kakinada and Peddapuram)",
                "Kurnool and Kadapa (K.C. canal area)",
                "Nallagonda (Miryalguda and Huzurnagar)"],
    "correct": 0,
    "explanation": "CDP in Andhra Pradesh was implemented at: East Godavari (Kakinada & Peddapuram), Kurnool and Kadapa (KC canal area), and Nallagonda (Miryalguda and Huzurnagar). Visakhapatnam was not among them.",
    "difficulty": "hard"
  },
  {
    "id": "d291l_192", "subject": "Agricultural Extension Education",
    "lecture": "Community Development", "lectureNo": 14,
    "question": "Three-column matching: Match the phase of CDP, its stage number, and its activity:\nCol A: 1-Emergence phase, 2-Work phase, 3-Final stage\nCol B: P-Stage 1, Q-Stage 3, R-Stage 5\nCol C: i-Finishing touches to all works, ii-Area selection, survey and planning, iii-Implementation of targeted programmes",
    "options": ["1-P-ii, 2-Q-iii, 3-R-i",
                "1-Q-iii, 2-P-i, 3-R-ii",
                "1-R-i, 2-P-ii, 3-Q-iii",
                "1-P-i, 2-R-ii, 3-Q-iii"],
    "correct": 0,
    "explanation": "Emergence phase is Stage 1 (P) with area selection/survey/planning (ii); Work phase is Stage 3 (Q) with implementation of programmes (iii); Final stage is Stage 5 (R) with finishing touches (i).",
    "difficulty": "hard"
  },

  # --- Lecture 15: Panchayati Raj ---
  {
    "id": "d291l_193", "subject": "Agricultural Extension Education",
    "lecture": "Panchayati Raj System", "lectureNo": 15,
    "question": "The local government in India is enshrined in which article of the Indian Constitution?",
    "options": ["Article 40 of Part IV",
                "Article 21 of Part III",
                "Article 370 of Part XXI",
                "Article 356 of Part XVIII"],
    "correct": 0,
    "explanation": "The local government is enshrined in Article 40 of Part IV (Directive Principles of State Policy) of the Indian Constitution.",
    "difficulty": "medium"
  },
  {
    "id": "d291l_194", "subject": "Agricultural Extension Education",
    "lecture": "Panchayati Raj System", "lectureNo": 15,
    "question": "The Balvantrai Mehta Committee, which recommended the three-tier Panchayati Raj system, was constituted on:",
    "options": ["16th January 1956",
                "2nd October 1952",
                "15th August 1947",
                "26th November 1949"],
    "correct": 0,
    "explanation": "The central government constituted the committee on 16th January 1956 under the chairmanship of Balvantrai Mehta, which recommended the three-tier Panchayati Raj system.",
    "difficulty": "hard"
  },
  {
    "id": "d291l_195", "subject": "Agricultural Extension Education",
    "lecture": "Panchayati Raj System", "lectureNo": 15,
    "question": "The three tiers of the Panchayati Raj system are:",
    "options": ["Gram Panchayat, Panchayat Samiti, Zilla Parishad",
                "Gram Sabha, Block Panchayat, District Board",
                "Village Council, Taluk Board, District Council",
                "Ward Sabha, Mandal Parishad, Zilla Parishad"],
    "correct": 0,
    "explanation": "The three tiers of Panchayati Raj are: Gram Panchayat (village level), Panchayat Samiti (block level), and Zilla Parishad (district level).",
    "difficulty": "easy"
  },
  {
    "id": "d291l_196", "subject": "Agricultural Extension Education",
    "lecture": "Panchayati Raj System", "lectureNo": 15,
    "question": "Lord Ripon, who fundamentally shaped local government bodies in India in 1882, is called:",
    "options": ["Father of local governance",
                "Father of Panchayati Raj",
                "Father of Indian democracy",
                "Father of community development"],
    "correct": 0,
    "explanation": "Lord Ripon fundamentally shaped local government bodies by following government laws in 1882 and is called the 'father of local governance' in India.",
    "difficulty": "medium"
  },
  {
    "id": "d291l_197", "subject": "Agricultural Extension Education",
    "lecture": "Panchayati Raj System", "lectureNo": 15,
    "question": "Assertion (A): A gram panchayat is formed if the minimum population of a village is 250.\nReason (R): Today every village with a population of 500 has one panchayat.",
    "options": ["Both A and R are true but R is not the correct explanation of A",
                "Both A and R are true and R is the correct explanation of A",
                "A is true but R is false",
                "A is false but R is true"],
    "correct": 0,
    "explanation": "Both A and R are true - minimum 250 for formation, and today every village with 500 population has one panchayat. But R (current practice) does not explain A (formation criterion).",
    "difficulty": "medium"
  },
  {
    "id": "d291l_198", "subject": "Agricultural Extension Education",
    "lecture": "Panchayati Raj System", "lectureNo": 15,
    "question": "The number of gram panchayats in combined Andhra Pradesh state (before bifurcation) was:",
    "options": ["27,445",
                "12,765",
                "35,000",
                "18,000"],
    "correct": 0,
    "explanation": "There were 27,445 gram panchayats in the combined state of Andhra Pradesh (Telangana state alone has 12,765).",
    "difficulty": "hard"
  },
  {
    "id": "d291l_199", "subject": "Agricultural Extension Education",
    "lecture": "Panchayati Raj System", "lectureNo": 15,
    "question": "Three-column matching: Match the Panchayati Raj tier, its level, and its geographic unit:\nCol A: 1-Gram Panchayat, 2-Panchayat Samiti, 3-Zilla Parishad\nCol B: P-Intermediate/Block level, Q-Lower/Village level, R-Upper/District level\nCol C: i-District, ii-Village, iii-Block",
    "options": ["1-Q-ii, 2-P-iii, 3-R-i",
                "1-P-ii, 2-Q-iii, 3-R-i",
                "1-R-i, 2-Q-ii, 3-P-iii",
                "1-Q-i, 2-R-ii, 3-P-iii"],
    "correct": 0,
    "explanation": "Gram Panchayat is at lower/village level (Q-ii); Panchayat Samiti is at intermediate/block level (P-iii); Zilla Parishad is at upper/district level (R-i).",
    "difficulty": "medium"
  },
  {
    "id": "d291l_200", "subject": "Agricultural Extension Education",
    "lecture": "Panchayati Raj System", "lectureNo": 15,
    "question": "The functions of Gram Panchayat include all of the following EXCEPT:",
    "options": ["Collection of state income tax",
                "Public health and sanitation",
                "Water supply and street lights",
                "Birth and deaths registrations"],
    "correct": 0,
    "explanation": "Gram Panchayat functions include public health, water supply, street lights, birth/death registration, women/child care, roads/tanks/wells, primary education, and hospitals. Income tax collection is a central/state government function.",
    "difficulty": "easy"
  },
]

# ============================================================
# COMBINED QUESTIONS: d291_101 to d291_200
# ============================================================
combined_questions = [
  {
    "id": "d291_101", "subject": "Agricultural Extension Education",
    "question": "The word 'Extension' is derived from Latin roots meaning:",
    "options": ["Ex (out) + Tensio (stretching)",
                "Ex (extra) + Tensio (teaching)",
                "Extensus (expand) + Io (process)",
                "Educatio (drawing out) + Extension (reach)"],
    "correct": 0,
    "explanation": "Extension is derived from Latin 'Ex' meaning 'out' and 'tensio' meaning 'stretching', signifying education stretched out into villages beyond schools and colleges.",
    "difficulty": "easy"
  },
  {
    "id": "d291_102", "subject": "Agricultural Extension Education",
    "question": "Education is defined as 'the process of bringing desirable change into the behavior of human being.' This definition focuses on:",
    "options": ["Behavioral change as the outcome of education",
                "Memorization of scientific facts and formulas",
                "Formal classroom training with examinations",
                "Physical development of individuals"],
    "correct": 0,
    "explanation": "The definition focuses on behavioral change (KAS - Knowledge, Attitude, Skills) as the primary outcome of education, which is the foundation of extension education.",
    "difficulty": "easy"
  },
  {
    "id": "d291_103", "subject": "Agricultural Extension Education",
    "question": "Webster defined education as:",
    "options": ["Process of teaching to develop knowledge, skill, or character of the student",
                "Process of bringing desirable change in behavior",
                "Cheapest path to economic advancement",
                "Process of developing capability for adequate response to situations"],
    "correct": 0,
    "explanation": "Webster defined education as 'the process of teaching to develop the knowledge, skill, or character of the student.'",
    "difficulty": "medium"
  },
  {
    "id": "d291_104", "subject": "Agricultural Extension Education",
    "question": "Rodney Stark described education as:",
    "options": ["The cheapest, most rapid and most reliable path to economic advancement",
                "A process of bringing desirable change in behavior",
                "A tool for teaching knowledge, skill, and character",
                "A process of developing capability of individuals"],
    "correct": 0,
    "explanation": "Rodney Stark said 'Education is the cheapest, most rapid and most reliable path to economic advancement under present conditions.'",
    "difficulty": "medium"
  },
  {
    "id": "d291_105", "subject": "Agricultural Extension Education",
    "question": "Which type of education is described as 'life long process in which persons acquire knowledge, skill, attitude and insight from daily experiences'?",
    "options": ["Informal education",
                "Formal education",
                "Non-formal education",
                "Vocational education"],
    "correct": 0,
    "explanation": "Informal education is a lifelong process where people acquire knowledge, skills, attitudes from daily experiences and exposure to the environment at home - it is incidental and spontaneous.",
    "difficulty": "easy"
  },
  {
    "id": "d291_106", "subject": "Agricultural Extension Education",
    "question": "Non-formal education is defined as:",
    "options": ["Organized and systematic education activity carried on outside the formal system to provide selected type of learning to particular groups",
                "Hierarchically structured education from kindergarten through university",
                "Lifelong incidental learning from daily experiences",
                "Online education using modern technology"],
    "correct": 0,
    "explanation": "Non-formal education is organized and systematic education activity outside the formal system, targeting specific groups with selected learning outside schools and colleges.",
    "difficulty": "easy"
  },
  {
    "id": "d291_107", "subject": "Agricultural Extension Education",
    "question": "In formal education, the mode of instruction is:",
    "options": ["Vertical - from teacher to student (instructive in nature)",
                "Horizontal - shared learning between teacher and learner",
                "Participatory - learner-centered problem solving",
                "Practical - starting with doing then theory"],
    "correct": 0,
    "explanation": "In formal education, the mode of instruction is vertical (from teacher to student, instructive in nature), while non-formal education uses horizontal shared learning.",
    "difficulty": "medium"
  },
  {
    "id": "d291_108", "subject": "Agricultural Extension Education",
    "question": "In non-formal education, the method of learning:",
    "options": ["Starts with practical and goes on to theory",
                "Starts with theory followed by practical learning",
                "Uses fixed curriculum and prescribed textbooks",
                "Requires compulsory attendance and examinations"],
    "correct": 0,
    "explanation": "Non-formal education starts with practical experience and goes on to theory - the opposite of formal education which begins with theory then practice.",
    "difficulty": "medium"
  },
  {
    "id": "d291_109", "subject": "Agricultural Extension Education",
    "question": "Extension education was defined by Leagans (1961) as 'process of teaching rural people how to live better by learning ways that improve their farm, home and community institutions.' This definition emphasizes:",
    "options": ["Holistic rural development covering farm, home, and community",
                "Only agricultural production improvement",
                "Government-funded rural projects",
                "Technical training in modern farming techniques"],
    "correct": 0,
    "explanation": "Leagans' definition covers the holistic approach - farm (production), home (family welfare), and community institutions (social development).",
    "difficulty": "medium"
  },
  {
    "id": "d291_110", "subject": "Agricultural Extension Education",
    "question": "The three kinds of behavioral changes produced through extension education (KAS) are:",
    "options": ["Knowledge, Attitude, and Skills",
                "Knowledge, Application, and Synthesis",
                "Kindness, Awareness, and Service",
                "Knowledge, Assessment, and Strategy"],
    "correct": 0,
    "explanation": "Extension education produces three behavioral changes: K-Knowledge, A-Attitude, S-Skills (KAS). Change in attitude is the most important but often neglected.",
    "difficulty": "easy"
  },
  {
    "id": "d291_111", "subject": "Agricultural Extension Education",
    "question": "Assertion (A): Change in attitude is the most important behavioral change in extension education.\nReason (R): Even if knowledge and skills are improved in SRI method, unless farmers' attitude becomes positive towards SRI, implementation does not happen.",
    "options": ["Both A and R are true and R is the correct explanation of A",
                "Both A and R are true but R is not the correct explanation of A",
                "A is true but R is false",
                "A is false but R is true"],
    "correct": 0,
    "explanation": "Both are true and R directly explains A - the SRI example demonstrates that attitude change is crucial; knowledge and skills alone are insufficient for adoption of new practices.",
    "difficulty": "medium"
  },
  {
    "id": "d291_112", "subject": "Agricultural Extension Education",
    "question": "Individual extension teaching methods include:",
    "options": ["Farm and home visits, office visits, personal letters, mobile calls",
                "Radio, television, newspaper advertisements",
                "Method demonstrations, group discussions, general meetings",
                "Exhibitions, exposure visits, field trips"],
    "correct": 0,
    "explanation": "Individual methods include farm and home visits, office visits, letters, mails, blogs, mobile/telephone calls, and information through school teachers and village leaders.",
    "difficulty": "easy"
  },
  {
    "id": "d291_113", "subject": "Agricultural Extension Education",
    "question": "Extension teaching methods were defined by Leagans (1961) as:",
    "options": ["Devices used to create situations in which communication can take place between an instructor and learner",
                "Tools used to transfer technology from research to farmers",
                "Methods for conducting demonstrations in farmers' fields",
                "Procedures for organizing village meetings and training"],
    "correct": 0,
    "explanation": "Leagans (1961) defined extension teaching methods as 'the devices used to create situations in which communication can take place between an instructor and learner.'",
    "difficulty": "medium"
  },
  {
    "id": "d291_114", "subject": "Agricultural Extension Education",
    "question": "Which extension teaching method reaches the largest number of people in the shortest time?",
    "options": ["Mass methods (radio, television, newspapers)",
                "Individual methods (farm visits, office calls)",
                "Group methods (demonstrations, meetings)",
                "Written materials (leaflets, bulletins)"],
    "correct": 0,
    "explanation": "Mass methods reach the largest number of people in the shortest time, though they cannot address individual needs and have limited feedback mechanisms.",
    "difficulty": "easy"
  },
  {
    "id": "d291_115", "subject": "Agricultural Extension Education",
    "question": "The result demonstration method in extension education is best suited for:",
    "options": ["Introducing new methods and demonstrating realistic issues or varieties to farmers",
                "Reaching large populations through broadcast media",
                "One-on-one counseling of individual farm families",
                "Formal classroom training of extension officers"],
    "correct": 0,
    "explanation": "Result demonstration is very useful to introduce new methods and habits, showing results at different stages, and can be adopted in nearby villages to educate farmers and identify local leadership.",
    "difficulty": "medium"
  },
  {
    "id": "d291_116", "subject": "Agricultural Extension Education",
    "question": "Assertion (A): Lecture is the best extension teaching method to teach new practical skills to farmers.\nReason (R): Method demonstration is described as the best extension teaching method to teach people.",
    "options": ["A is false but R is true",
                "Both A and R are true and R is the correct explanation of A",
                "A is true but R is false",
                "Both A and R are false"],
    "correct": 0,
    "explanation": "A is false - lecture has limitations for teaching practical skills (it's only useful when no equipment is needed). R is true - the course material states method demonstration is the best extension teaching method.",
    "difficulty": "medium"
  },
  {
    "id": "d291_117", "subject": "Agricultural Extension Education",
    "question": "Advantages of group discussion method include all EXCEPT:",
    "options": ["Suitable for all topics regardless of prior knowledge",
                "Emphasis on learning instead of teaching",
                "Development of democratic way of thinking",
                "Training in reflective thinking and self-expression"],
    "correct": 0,
    "explanation": "Group discussion is NOT appropriate for all topics - it can only be used with students/participants who have some basic knowledge of the topic. All other options are genuine advantages.",
    "difficulty": "medium"
  },
  {
    "id": "d291_118", "subject": "Agricultural Extension Education",
    "question": "According to the extension teaching methods classification by 'form', which of the following is a 'visual or object type' method?",
    "options": ["Exhibition, posters and charts",
                "Newspapers and bulletins",
                "Radio broadcasts",
                "Farm and home visits"],
    "correct": 0,
    "explanation": "Visual or object type methods include exhibitions, posters, charts (flexy), and demonstrations. Radio is a spoken form and newspapers are written form.",
    "difficulty": "medium"
  },
  {
    "id": "d291_119", "subject": "Agricultural Extension Education",
    "question": "Which of the following factors should be considered while selecting extension teaching methods?",
    "options": ["Economic situation, physical facilities, social situation, and past experience",
                "Only the literacy level of farmers",
                "Only the budget available with extension department",
                "Only the number of villages in the district"],
    "correct": 0,
    "explanation": "Selection of teaching methods should consider: economic situation, physical facilities, social situation, past experience, and extension worker capabilities.",
    "difficulty": "medium"
  },
  {
    "id": "d291_120", "subject": "Agricultural Extension Education",
    "question": "Three-column matching: Match the extension teaching method type, its reach, and its limitation:\nCol A: 1-Individual method, 2-Group method, 3-Mass method\nCol B: P-Reaches few people, Q-Reaches medium group, R-Reaches largest number\nCol C: i-Recommendations may not apply to individual needs, ii-Chance of disputes among people, iii-May miss targeted groups",
    "options": ["1-P-iii, 2-Q-ii, 3-R-i",
                "1-R-i, 2-P-iii, 3-Q-ii",
                "1-Q-ii, 2-R-i, 3-P-iii",
                "1-P-i, 2-Q-iii, 3-R-ii"],
    "correct": 0,
    "explanation": "Individual method reaches few people (P) with risk of missing targeted groups (iii); Group method reaches medium group (Q) with risk of disputes (ii); Mass method reaches largest number (R) with recommendations not meeting individual needs (i).",
    "difficulty": "hard"
  },
  {
    "id": "d291_121", "subject": "Agricultural Extension Education",
    "question": "The nine areas of programme emphasis indicating the scope of agricultural extension work include all EXCEPT:",
    "options": ["Industrial production and manufacturing",
                "Efficiency in agricultural production",
                "Conservation and development of natural resources",
                "Leadership and community development"],
    "correct": 0,
    "explanation": "The nine scope areas are: agricultural production efficiency, marketing/distribution, natural resources conservation, farm/home management, family living, youth development, leadership development, community development, and public affairs. Industrial manufacturing is not included.",
    "difficulty": "medium"
  },
  {
    "id": "d291_122", "subject": "Agricultural Extension Education",
    "question": "The Srinikethan project's failure was attributed to:",
    "options": ["Lack of trained professionals and inadequate government support",
                "Resistance from local farmers to adopt new methods",
                "Insufficient funding from Rabindranath Tagore's personal resources",
                "Conflict between government and NGO approaches"],
    "correct": 0,
    "explanation": "Srinikethan project could not continue for long due to lack of professionals familiar with various subjects and trained in development work, and lack of expected contribution from government.",
    "difficulty": "medium"
  },
  {
    "id": "d291_123", "subject": "Agricultural Extension Education",
    "question": "The Marthandam Project was started by Dr. Spencer H in Kerala. The main problems addressed included:",
    "options": ["Inappropriate agricultural lands, less cottage industries, water scarcity, and debts",
                "Deforestation, soil erosion, and flood management",
                "Low crop yields due to lack of improved varieties",
                "Unemployment and lack of vocational training"],
    "correct": 0,
    "explanation": "The Marthandam Project addressed problems including inappropriate agricultural lands, less cottage industries, low quality products, inadequate labour, water scarcity, and debts.",
    "difficulty": "medium"
  },
  {
    "id": "d291_124", "subject": "Agricultural Extension Education",
    "question": "Assertion (A): The Etawah project became the prototype for Community Development Programme.\nReason (R): The Etawah project was later spread to 300 villages and eventually to four other centers of Uttar Pradesh.",
    "options": ["Both A and R are true and R is the correct explanation of A",
                "Both A and R are true but R is not the correct explanation of A",
                "A is true but R is false",
                "A is false but R is true"],
    "correct": 1,
    "explanation": "Both are true. The project spread from 64 to 300 villages and to four UP centers (R) and became the prototype for CDP and NES (A). But R's spread describes its success, not why it became a prototype.",
    "difficulty": "hard"
  },
  {
    "id": "d291_125", "subject": "Agricultural Extension Education",
    "question": "In the Gurugram experiment, a 'School of Rural Economy' was established to:",
    "options": ["Train guides for development of villages in agriculture, cooperation, and sanitation",
                "Provide formal primary education to village children",
                "Train agricultural extension officers in modern farming",
                "Teach traditional craft skills to women"],
    "correct": 0,
    "explanation": "The School of Rural Economy in Gurugram experiment trained guides for village development who were trained in agriculture, cooperation, betterment of people, sanitation, etc., and then appointed as village guides.",
    "difficulty": "medium"
  },
  {
    "id": "d291_126", "subject": "Agricultural Extension Education",
    "question": "Which pre-independence rural development scheme aimed at 'All round development of rural life' and was first enabled in 34 firkas?",
    "options": ["Firka development scheme (1946)",
                "Srinikethan project (1914)",
                "Sevagram programme (1921)",
                "Etawah project (1948)"],
    "correct": 0,
    "explanation": "The Firka development scheme introduced by Tongutar Prakasham Panthulu in 1946 aimed at 'all round development of rural life', first enabled in 34 firkas, expanded to 108 firkas by end of 1953.",
    "difficulty": "medium"
  },
  {
    "id": "d291_127", "subject": "Agricultural Extension Education",
    "question": "The number of community development projects started initially under the CDP of 1952 was:",
    "options": ["55",
                "100",
                "25",
                "200"],
    "correct": 0,
    "explanation": "As part of the Community Development Programme started on 2nd October 1952, 55 community development projects were initially organized across the country.",
    "difficulty": "medium"
  },
  {
    "id": "d291_128", "subject": "Agricultural Extension Education",
    "question": "The principle of community development that states 'the programmes to be undertaken must meet the minimum requirements in the community' is called:",
    "options": ["Needs of people",
                "Participation of people",
                "Local leadership",
                "Multipurpose programmes"],
    "correct": 0,
    "explanation": "The principle 'Needs of people' states that programmes should be undertaken to meet the minimum requirements in the community.",
    "difficulty": "easy"
  },
  {
    "id": "d291_129", "subject": "Agricultural Extension Education",
    "question": "Three-column matching: Match the community development principle, its requirement, and its rationale:\nCol A: 1-Local leadership, 2-Participation of women and youth, 3-Voluntary NGOs\nCol B: P-Identification and training, Q-Involvement in programmes, R-Utilization of non-government resources\nCol C: i-Ensures fruits of development for most people, ii-Works at local, national and international levels, iii-Encouragement for sustainable development",
    "options": ["1-P-iii, 2-Q-i, 3-R-ii",
                "1-Q-i, 2-P-ii, 3-R-iii",
                "1-R-ii, 2-Q-iii, 3-P-i",
                "1-P-i, 2-R-ii, 3-Q-iii"],
    "correct": 0,
    "explanation": "Local leadership (P-identification/training, iii-encouragement/sustainable development); Women and youth (Q-involvement, i-fruits for most people); Voluntary NGOs (R-non-government resources, ii-local/national/international).",
    "difficulty": "hard"
  },
  {
    "id": "d291_130", "subject": "Agricultural Extension Education",
    "question": "Democratic decentralization means:",
    "options": ["Articulation of centralized administrative power to institutions close and convenient to the people",
                "Election of members to Parliament through universal adult franchise",
                "Transfer of all power from central government to state governments",
                "Abolition of local body elections in favor of nominated representatives"],
    "correct": 0,
    "explanation": "Democratic decentralization means administration is more closeness to the people - articulation of centralized power to institutions which are close and convenient to the people.",
    "difficulty": "medium"
  },
  {
    "id": "d291_131", "subject": "Agricultural Extension Education",
    "question": "The Gram Panchayat president is called:",
    "options": ["Grama Sarpanch",
                "Gram Pradhan",
                "Mukhiya",
                "Panchayat Adhyaksha"],
    "correct": 0,
    "explanation": "The Gram Panchayat president is called the Grama Sarpanch, who is elected by secret ballot by all village voters.",
    "difficulty": "easy"
  },
  {
    "id": "d291_132", "subject": "Agricultural Extension Education",
    "question": "The tenure of Gram Panchayat as per the Andhra Pradesh Panchayat Raj Act is:",
    "options": ["Five years",
                "Three years",
                "Four years",
                "Six years"],
    "correct": 0,
    "explanation": "The Gram Panchayat tenure is five years according to the Andhra Pradesh Panchayat Raj Act.",
    "difficulty": "easy"
  },
  {
    "id": "d291_133", "subject": "Agricultural Extension Education",
    "question": "According to AP Panchayat Raj Act, each village is divided into wards. The number of members in a Gram Panchayat should be:",
    "options": ["Not less than 5 and not more than 20",
                "Not less than 10 and not more than 30",
                "Not less than 3 and not more than 15",
                "Not less than 7 and not more than 25"],
    "correct": 0,
    "explanation": "According to the AP Panchayat Raj Act, the number of panchayat members should not be less than 5 and not more than 20.",
    "difficulty": "hard"
  },
  {
    "id": "d291_134", "subject": "Agricultural Extension Education",
    "question": "Assertion (A): The concept of democracy as 'of the people, for the people and by the people' was given by Abraham Lincoln.\nReason (R): Panchayati Raj was introduced to ensure people's participation in governance at the local level.",
    "options": ["Both A and R are true but R is not the correct explanation of A",
                "Both A and R are true and R is the correct explanation of A",
                "A is true but R is false",
                "A is false but R is true"],
    "correct": 0,
    "explanation": "Both are true - Lincoln gave the definition of democracy (A), and Panchayati Raj ensures local participation (R). But R explains the purpose of Panchayati Raj, not the Lincoln quote.",
    "difficulty": "medium"
  },
  {
    "id": "d291_135", "subject": "Agricultural Extension Education",
    "question": "Local self-governing bodies were first formed in India during the:",
    "options": ["Mouryan period",
                "Mughal period",
                "British colonial period",
                "Post-independence period"],
    "correct": 0,
    "explanation": "Local self-governing bodies were first formed in India during the Mouryan period, though Lord Ripon fundamentally shaped them in 1882 during British rule.",
    "difficulty": "hard"
  },
  {
    "id": "d291_136", "subject": "Agricultural Extension Education",
    "question": "The main objective of extension education according to the scope of agricultural extension is:",
    "options": ["People's development",
                "Increasing crop production",
                "Training extension workers",
                "Implementing government schemes"],
    "correct": 0,
    "explanation": "The basic objective of extension is people's development - assisting people to discover problems, develop relationships, disseminate information, and keep research workers informed of people's problems.",
    "difficulty": "easy"
  },
  {
    "id": "d291_137", "subject": "Agricultural Extension Education",
    "question": "The 'adoption of innovation' process in extension education follows the sequence:",
    "options": ["Awareness > Interest > Evaluation > Trial > Adoption",
                "Trial > Awareness > Evaluation > Interest > Adoption",
                "Interest > Awareness > Trial > Evaluation > Adoption",
                "Evaluation > Awareness > Interest > Trial > Adoption"],
    "correct": 0,
    "explanation": "The adoption of innovation process (Rogers' Innovation Diffusion Theory) follows: Awareness > Interest > Evaluation > Trial > Adoption (AIETA model).",
    "difficulty": "medium"
  },
  {
    "id": "d291_138", "subject": "Agricultural Extension Education",
    "question": "Assertion (A): Agricultural extension was first used in America before spreading to other countries.\nReason (R): India was the first country to implement agricultural extension services to help farmers adopt improved varieties.",
    "options": ["A is true but R is false",
                "Both A and R are true",
                "A is false but R is true",
                "Both A and R are false"],
    "correct": 0,
    "explanation": "A is true - extension was first used in America in agriculture and home science. R is false - America implemented it first, not India; the land grant college model from USA was adopted by Indian universities.",
    "difficulty": "medium"
  },
  {
    "id": "d291_139", "subject": "Agricultural Extension Education",
    "question": "Three-column matching: Match the development programme, its year, and its key feature:\nCol A: 1-CDP, 2-Panchayati Raj, 3-NES\nCol B: P-1952, Q-1953, R-1959\nCol C: i-Three tier local governance, ii-55 projects with 300 villages each, iii-National Extension Service",
    "options": ["1-P-ii, 2-R-i, 3-Q-iii",
                "1-Q-iii, 2-P-ii, 3-R-i",
                "1-R-i, 2-Q-iii, 3-P-ii",
                "1-P-iii, 2-R-ii, 3-Q-i"],
    "correct": 0,
    "explanation": "CDP was started in 1952 (P) with 55 projects of 300 villages each (ii); Panchayati Raj was 1959 (R) with three-tier governance (i); NES was National Extension Service 1953 (Q-iii).",
    "difficulty": "hard"
  },
  {
    "id": "d291_140", "subject": "Agricultural Extension Education",
    "question": "The scope of agricultural extension in developing countries covers all EXCEPT:",
    "options": ["Export promotion and international trade policies",
                "Agriculture and animal husbandry",
                "Cooperative societies and gram panchayats",
                "Health, women and child welfare"],
    "correct": 0,
    "explanation": "Agricultural extension scope in developing countries covers agriculture, animal husbandry, cooperative societies, gram panchayaths, social education, industries, health, women & child welfare, and fisheries - not export/trade policies.",
    "difficulty": "medium"
  },
  {
    "id": "d291_141", "subject": "Agricultural Extension Education",
    "question": "The extension teaching method called 'result demonstration' differs from 'method demonstration' in that:",
    "options": ["Result demonstration shows outcomes over time; method demonstration shows how to do something",
                "Result demonstration is an individual method; method demonstration is a mass method",
                "Result demonstration requires no field setup; method demonstration needs a laboratory",
                "Result demonstration is only for government officials; method demonstration is for farmers"],
    "correct": 0,
    "explanation": "Result demonstration shows the outcome of adopting a practice over time (results), while method demonstration shows the how-to steps of performing a technique.",
    "difficulty": "medium"
  },
  {
    "id": "d291_142", "subject": "Agricultural Extension Education",
    "question": "Assertion (A): Office visits are an advantage for extension officers as farmers come to the office to clarify their issues, saving the officer's time.\nReason (R): Office visits ensure that the extension officer can demonstrate methods that are applicable in day-to-day life at villages.",
    "options": ["A is true but R is false",
                "Both A and R are true and R is the correct explanation of A",
                "Both A and R are true but R is not the correct explanation of A",
                "A is false but R is true"],
    "correct": 0,
    "explanation": "A is true - office visits save extension officer's time as farmers come to them. R is false - a limitation of office visits is that 'methods available at office may not be possible to implement in day-to-day life at villages.'",
    "difficulty": "medium"
  },
  {
    "id": "d291_143", "subject": "Agricultural Extension Education",
    "question": "A newsletter in extension education is characterized as:",
    "options": ["A periodic publication issued monthly or quarterly to keep people informed",
                "A scientific journal with research articles",
                "A large printed poster on agricultural technology",
                "A single-page leaflet with brief information"],
    "correct": 0,
    "explanation": "A newsletter is a periodic publication (monthly/quarterly) that keeps people informed about developments, events, and information in a regular manner.",
    "difficulty": "easy"
  },
  {
    "id": "d291_144", "subject": "Agricultural Extension Education",
    "question": "The extension teaching method that 'develops objectivity in villagers and allows everyone to give suggestions in implementation of programmes' refers to:",
    "options": ["Group methods",
                "Individual methods",
                "Mass media methods",
                "Written communication methods"],
    "correct": 0,
    "explanation": "Group methods develop objectivity in villagers, allow participants to give suggestions, help identify focus points and leadership personalities, and bring desirable change in group members.",
    "difficulty": "medium"
  },
  {
    "id": "d291_145", "subject": "Agricultural Extension Education",
    "question": "Three-column matching: Match the KAS behavioral change, its example, and its importance:\nCol A: 1-Knowledge change, 2-Skill change (physical), 3-Attitude change\nCol B: P-Farmers learning SRI method steps, Q-Extension worker teaching WTO to paddy farmers, R-Changing from paddy to flower cultivation\nCol C: i-Usually neglected but most important, ii-Improving awareness on facts, iii-Ability to do work physically",
    "options": ["1-Q-ii, 2-P-iii, 3-R-i",
                "1-P-iii, 2-Q-ii, 3-R-i",
                "1-R-i, 2-Q-ii, 3-P-iii",
                "1-Q-i, 2-R-iii, 3-P-ii"],
    "correct": 0,
    "explanation": "Knowledge change: WTO training to farmers (Q) improves awareness (ii); Physical skill change: learning SRI steps (P) = physical ability (iii); Attitude change: shifting from paddy to flowers (R) is most important but neglected (i).",
    "difficulty": "hard"
  },
  {
    "id": "d291_146", "subject": "Agricultural Extension Education",
    "question": "Which committee's recommendation led to the introduction of Panchayati Raj System in India?",
    "options": ["Balvantrai Mehta Committee",
                "Ashok Mehta Committee",
                "L M Singhvi Committee",
                "G V K Rao Committee"],
    "correct": 0,
    "explanation": "The Balvantrai Mehta Committee, constituted on 16th January 1956, mainly recommended the three-tier Panchayati Raj system, which was then implemented.",
    "difficulty": "medium"
  },
  {
    "id": "d291_147", "subject": "Agricultural Extension Education",
    "question": "The number of gram panchayats in Telangana state (after bifurcation) is:",
    "options": ["12,765",
                "27,445",
                "15,000",
                "18,765"],
    "correct": 0,
    "explanation": "Telangana state has 12,765 gram panchayats (the combined AP had 27,445).",
    "difficulty": "hard"
  },
  {
    "id": "d291_148", "subject": "Agricultural Extension Education",
    "question": "According to the extension concept, which type of change is most difficult to bring about through extension education?",
    "options": ["Attitude change",
                "Knowledge change",
                "Skill change",
                "Awareness change"],
    "correct": 0,
    "explanation": "Attitude change is the most difficult and most important but usually neglected. Knowledge and skills can be improved through training, but unless attitude becomes positive, adoption of new practices does not happen.",
    "difficulty": "medium"
  },
  {
    "id": "d291_149", "subject": "Agricultural Extension Education",
    "question": "Assertion (A): In extension education, 6 to 9 different teaching methods should be used to stimulate learning.\nReason (R): Using multiple methods compensates for limitations of individual methods and reaches different types of learners.",
    "options": ["Both A and R are true and R is the correct explanation of A",
                "Both A and R are true but R is not the correct explanation of A",
                "A is true but R is false",
                "A is false but R is true"],
    "correct": 0,
    "explanation": "Both are true. The course material states 6-9 methods should be used to stimulate learning (A), and R correctly explains why - multiple methods overcome limitations and reach diverse learners.",
    "difficulty": "medium"
  },
  {
    "id": "d291_150", "subject": "Agricultural Extension Education",
    "question": "The scope of extension in developing countries was described as vital and wide in educating rural people in how many major areas?",
    "options": ["Nine major areas",
                "Five major areas",
                "Seven major areas",
                "Twelve major areas"],
    "correct": 0,
    "explanation": "The scope of agricultural extension work is indicated through nine areas of programme emphasis: agricultural production, marketing, natural resources, farm/home management, family living, youth development, leadership, community development, and public affairs.",
    "difficulty": "medium"
  },
  {
    "id": "d291_151", "subject": "Agricultural Extension Education",
    "question": "Three-column matching: Match the information material, its target audience, and its defining feature:\nCol A: 1-Leaflet, 2-Pamphlet, 3-Bulletin\nCol B: P-General farmers, Q-Literate farmers seeking detail, R-Scientific community\nCol C: i-Comprehensive, authoritative document, ii-Few pages on specific topic, iii-Single sheet with brief information",
    "options": ["1-P-iii, 2-Q-ii, 3-R-i",
                "1-R-i, 2-P-iii, 3-Q-ii",
                "1-Q-ii, 2-P-iii, 3-R-i",
                "1-P-i, 2-R-iii, 3-Q-ii"],
    "correct": 0,
    "explanation": "Leaflet targets general farmers (P) with single-sheet brief information (iii); Pamphlet targets literate farmers (Q) with few pages on specific topic (ii); Bulletin targets scientific community (R) with comprehensive documents (i).",
    "difficulty": "hard"
  },
  {
    "id": "d291_152", "subject": "Agricultural Extension Education",
    "question": "The Firka Development Scheme was first enabled in 34 firkas, then expanded to:",
    "options": ["108 firkas",
                "250 firkas",
                "55 firkas",
                "200 firkas"],
    "correct": 0,
    "explanation": "The Firka scheme was first enabled in 34 firkas and expanded to 108 firkas by the end of 1953, after which it was merged into the community development scheme.",
    "difficulty": "medium"
  },
  {
    "id": "d291_153", "subject": "Agricultural Extension Education",
    "question": "Which of the following is a characteristic of non-formal education?",
    "options": ["Participation is voluntary and learning is flexible to meet diverse farmer needs",
                "Attendance is compulsory and curriculum is fixed",
                "Learners are homogeneous in age and grasping power",
                "Uses vertical mode of instruction from teacher to student"],
    "correct": 0,
    "explanation": "Non-formal education has voluntary participation and flexible curriculum to meet diverse needs. Compulsory attendance, homogeneous learners, and vertical instruction are characteristics of formal education.",
    "difficulty": "easy"
  },
  {
    "id": "d291_154", "subject": "Agricultural Extension Education",
    "question": "The Etawah project's major objectives included all EXCEPT:",
    "options": ["Replacement of all traditional farming practices with modern mechanized farming",
                "Enhancement of agricultural production",
                "Controlling and preventing human tragedies",
                "Implementation of mother and child welfare programmes"],
    "correct": 0,
    "explanation": "Etawah project objectives included agricultural production enhancement, introduction of quality animals, cooperative credit, preventing human tragedies, mother/child welfare, and adult education - not wholesale replacement with mechanized farming.",
    "difficulty": "medium"
  },
  {
    "id": "d291_155", "subject": "Agricultural Extension Education",
    "question": "Assertion (A): The Community Development Programme was launched on Gandhi Jayanti (2nd October) 1952.\nReason (R): Gandhi Jayanti was chosen because Gandhiji's Sevagram experiment in 1921 inspired the CDP model.",
    "options": ["A is true but R is false",
                "Both A and R are true",
                "A is false but R is true",
                "Both A and R are false"],
    "correct": 0,
    "explanation": "A is true - CDP was launched on 2nd October 1952 (Gandhi Jayanti). R is speculative/false - the official reason for choosing this date is to honor Gandhi's birthday and his legacy of rural development, but the CDP was based on the Etawah project model, not directly the Sevagram model.",
    "difficulty": "hard"
  },
  {
    "id": "d291_156", "subject": "Agricultural Extension Education",
    "question": "The gram panchayat functions include all of the following EXCEPT:",
    "options": ["Conducting High Court sessions at village level",
                "Public health and sanitation",
                "Birth and deaths registrations",
                "Arrangements of primary education"],
    "correct": 0,
    "explanation": "Gram Panchayat functions are local in nature - public health, water supply, street lights, birth/death registration, women/child care, roads, primary education, hospitals. High Court is a state function.",
    "difficulty": "easy"
  },
  {
    "id": "d291_157", "subject": "Agricultural Extension Education",
    "question": "Three-column matching: Match the principle of extension education, its focus, and its role:\nCol A: 1-Every individual has extraordinary importance, 2-The house is the basic unit of civilization, 3-Family has to be trained primarily\nCol B: P-Democracy principle, Q-Social structure principle, R-Community training principle\nCol C: i-Improves community through family improvement, ii-Values each person in democratic extension, iii-Home as foundation of society",
    "options": ["1-P-ii, 2-Q-iii, 3-R-i",
                "1-Q-i, 2-P-ii, 3-R-iii",
                "1-R-iii, 2-Q-i, 3-P-ii",
                "1-P-i, 2-R-ii, 3-Q-iii"],
    "correct": 0,
    "explanation": "Every individual has importance (P-democracy, ii-values each person); House is basic unit (Q-social structure, iii-home as foundation); Family trained primarily (R-community training, i-improves community through family).",
    "difficulty": "hard"
  },
  {
    "id": "d291_158", "subject": "Agricultural Extension Education",
    "question": "According to the DA-291 source material, the cost of printing (excluding paper) in agricultural information materials is approximately:",
    "options": ["12-20% of total cost",
                "40-50% of total cost",
                "60-70% of total cost",
                "80-90% of total cost"],
    "correct": 0,
    "explanation": "The cost of printing in page is 12-20% of total production cost, while paper should not exceed 60-70% of total cost.",
    "difficulty": "hard"
  },
  {
    "id": "d291_159", "subject": "Agricultural Extension Education",
    "question": "The Marthandam Project's principle that 'Those who need more help should receive more benefit as they are poor' reflects the concept of:",
    "options": ["Equity and pro-poor development",
                "Universal benefit distribution",
                "Needs-based top-down development",
                "Equal distribution regardless of need"],
    "correct": 0,
    "explanation": "The principle from Marthandam Project - 'those who need more help should get more' - reflects equity and pro-poor development, focusing maximum benefits on the most disadvantaged.",
    "difficulty": "medium"
  },
  {
    "id": "d291_160", "subject": "Agricultural Extension Education",
    "question": "Assertion (A): The extension educational process is continuous because after reconsideration, if new situations require further work, the whole process begins again.\nReason (R): Extension education aims at one-time technology transfer from research institutions to farmers.",
    "options": ["A is true but R is false",
                "Both A and R are true",
                "A is false but R is true",
                "Both A and R are false"],
    "correct": 0,
    "explanation": "A is true - the process is cyclical and continuous (Reconsideration reveals new situations and the process repeats). R is false - extension education is not one-time transfer but an ongoing educational process.",
    "difficulty": "medium"
  },
  {
    "id": "d291_161", "subject": "Agricultural Extension Education",
    "question": "The advantages of printed agricultural information materials include all EXCEPT:",
    "options": ["People can understand information without reading ability",
                "Information can be disseminated to large groups",
                "Repeated reading is possible at any time",
                "People generally believe printed information"],
    "correct": 0,
    "explanation": "A major LIMITATION of printed materials is that illiterates cannot read and understand. All other options are genuine advantages of printed materials.",
    "difficulty": "easy"
  },
  {
    "id": "d291_162", "subject": "Agricultural Extension Education",
    "question": "The concept that extension workers act as 'salesmen' for improved technology means they must:",
    "options": ["Convince farmers about the benefits of new technologies similar to commercial salesmanship",
                "Sell agricultural inputs at subsidized rates to farmers",
                "Collect market data and set prices for farm produce",
                "Promote government-owned agribusinesses"],
    "correct": 0,
    "explanation": "Extension education is compared to commercial salesmanship where extension workers must convince (sell the idea of) new technologies to farmers, overcoming resistance to change.",
    "difficulty": "medium"
  },
  {
    "id": "d291_163", "subject": "Agricultural Extension Education",
    "question": "Three-column matching: Match the post-independence development program, its year, and its characteristic:\nCol A: 1-Firka scheme, 2-Etawah project, 3-Nilokheri scheme\nCol B: P-1946, Q-1947, R-1948\nCol C: i-64 villages expanding to 300, prototype for CDP, ii-Self-sufficiency for refugees called Mazdoor Manzil, iii-34 firkas for all-round development",
    "options": ["1-P-iii, 2-R-i, 3-Q-ii",
                "1-Q-ii, 2-P-iii, 3-R-i",
                "1-R-i, 2-Q-ii, 3-P-iii",
                "1-P-i, 2-Q-iii, 3-R-ii"],
    "correct": 0,
    "explanation": "Firka (P-1946, iii-34 firkas for all-round development); Etawah (R-1948, i-64 to 300 villages, CDP prototype); Nilokheri (Q-1947, ii-refugee self-sufficiency called Mazdoor Manzil).",
    "difficulty": "hard"
  },
  {
    "id": "d291_164", "subject": "Agricultural Extension Education",
    "question": "Which approach to learning is described as 'experience by practicing' in extension teaching methods?",
    "options": ["Dramas, Role play, Models preparation",
                "Radio broadcasts",
                "Charts, maps, and graphs",
                "Exhibitions and exposure visits"],
    "correct": 0,
    "explanation": "Experience by practicing includes dramas, role play, and models preparation - these involve active doing rather than passive listening or watching.",
    "difficulty": "medium"
  },
  {
    "id": "d291_165", "subject": "Agricultural Extension Education",
    "question": "The limitations of mass extension teaching methods include all EXCEPT:",
    "options": ["Reaches only a limited number of people",
                "Recommendations may not apply to individual needs",
                "Time assigned to agriculture extension is limited",
                "Frequently loses out in competition with entertainment"],
    "correct": 0,
    "explanation": "Reaching limited numbers is NOT a limitation of mass methods - in fact, reaching the LARGEST numbers is an ADVANTAGE of mass methods. All other options are genuine limitations.",
    "difficulty": "medium"
  },
  {
    "id": "d291_166", "subject": "Agricultural Extension Education",
    "question": "The Sevagram program by Gandhiji introduced a hybrid production programme specifically for:",
    "options": ["Livestock",
                "Rice and wheat varieties",
                "Horticultural crops",
                "Cotton and jute"],
    "correct": 0,
    "explanation": "Gandhiji introduced a hybrid production programme in case of livestock as part of the Sevagram rural development programme at Vaardha district of Maharashtra in 1921.",
    "difficulty": "hard"
  },
  {
    "id": "d291_167", "subject": "Agricultural Extension Education",
    "question": "In the context of agricultural information materials, which of the following correctly describes a 'bulletin'?",
    "options": ["A comprehensive, authoritative publication containing detailed scientific and technical information",
                "A single folded sheet with information on both sides",
                "A brief announcement circulated to specific recipients",
                "A collection of newspaper clippings on agricultural topics"],
    "correct": 0,
    "explanation": "A bulletin is a comprehensive, authoritative publication containing detailed scientific and technical information, often published by research institutions and universities.",
    "difficulty": "medium"
  },
  {
    "id": "d291_168", "subject": "Agricultural Extension Education",
    "question": "Assertion (A): Extension education aims to bring desirable change in rural people's behavior regarding farm, home, and community.\nReason (R): KVKs (Krishi Vigyan Kendras) were established to implement extension education at district level.",
    "options": ["Both A and R are true but R is not the correct explanation of A",
                "Both A and R are true and R is the correct explanation of A",
                "A is true but R is false",
                "A is false but R is true"],
    "correct": 0,
    "explanation": "Both A and R are true - extension education aims for behavioral change in farm/home/community (A), and KVKs implement extension at district level (R). But KVKs' existence does not explain the definition of extension education.",
    "difficulty": "medium"
  },
  {
    "id": "d291_169", "subject": "Agricultural Extension Education",
    "question": "The formal education system is characterized by which of the following?",
    "options": ["Fixed curriculum, compulsory attendance, vertical instruction, examination-based evaluation",
                "Flexible curriculum, voluntary participation, practical-first learning",
                "Heterogeneous learners, problem-oriented, no fixed venue",
                "Incidental learning from daily experiences, no prescribed timetable"],
    "correct": 0,
    "explanation": "Formal education has: fixed curriculum, compulsory attendance, vertical instruction (teacher to student), prescribed textbooks, examinations, and more homogeneous learners.",
    "difficulty": "easy"
  },
  {
    "id": "d291_170", "subject": "Agricultural Extension Education",
    "question": "Three-column matching: Match the DA-291 chapter, its number, and its key topic:\nCol A: 1-Chapter I, 2-Chapter IV, 3-Chapter XV\nCol B: P-Education, Q-Extension Teaching Methods, R-Panchayati Raj System\nCol C: i-Gram panchayat, samiti, zilla parishad, ii-Formal/informal/non-formal education, iii-Individual/group/mass methods",
    "options": ["1-P-ii, 2-Q-iii, 3-R-i",
                "1-R-i, 2-P-ii, 3-Q-iii",
                "1-Q-iii, 2-R-i, 3-P-ii",
                "1-P-i, 2-Q-ii, 3-R-iii"],
    "correct": 0,
    "explanation": "Chapter I covers Education (P) with formal/informal/non-formal types (ii); Chapter IV covers Extension Teaching Methods (Q) with individual/group/mass methods (iii); Chapter XV covers Panchayati Raj (R) with three-tier system (i).",
    "difficulty": "medium"
  },
  {
    "id": "d291_171", "subject": "Agricultural Extension Education",
    "question": "The key difference between formal and non-formal education in terms of learner characteristics is:",
    "options": ["Formal learners are homogeneous (age/ability); non-formal learners are heterogeneous (age/education/experience)",
                "Formal learners are adults; non-formal learners are children",
                "Formal learners are illiterate; non-formal learners are educated",
                "Formal learners choose their curriculum; non-formal learners follow a fixed curriculum"],
    "correct": 0,
    "explanation": "Formal learners are relatively homogeneous in age and grasping power, while non-formal learners are heterogeneous in age, educational qualification, experience, interests, and living conditions.",
    "difficulty": "medium"
  },
  {
    "id": "d291_172", "subject": "Agricultural Extension Education",
    "question": "In the Gurugram experiment, village sanitation focused on preventing:",
    "options": ["Cholera and plague through compost pits",
                "Malaria and dengue through drainage",
                "Typhoid through water treatment",
                "Kala-azar through insecticide spraying"],
    "correct": 0,
    "explanation": "Village sanitation in the Gurugram experiment aimed to prevent cholera and plague through digging compost pits where village waste was deposited.",
    "difficulty": "hard"
  },
  {
    "id": "d291_173", "subject": "Agricultural Extension Education",
    "question": "Assertion (A): The Panchayat Samiti operates at the block/intermediate level.\nReason (R): The Zilla Parishad is the highest tier of the three-tier Panchayati Raj system, operating at the district level.",
    "options": ["Both A and R are true but R is not the correct explanation of A",
                "Both A and R are true and R is the correct explanation of A",
                "A is true but R is false",
                "A is false but R is true"],
    "correct": 0,
    "explanation": "Both A and R are true - Panchayat Samiti is at block level (A) and Zilla Parishad is the highest tier at district level (R). But R's description of Zilla Parishad does not explain why Panchayat Samiti is at block level.",
    "difficulty": "medium"
  },
  {
    "id": "d291_174", "subject": "Agricultural Extension Education",
    "question": "The main concept of the Gurugram agricultural development scheme was:",
    "options": ["To produce more yield per hectare through improved implements and technology",
                "To establish agricultural universities in each district",
                "To distribute free seeds and fertilizers to all farmers",
                "To create large-scale mechanized farms in Punjab"],
    "correct": 0,
    "explanation": "The main concept of the Gurugram agricultural development scheme was to produce more yield per hectare through adoption of new plough, implements, light traps, eradication of pests, and converting small holdings to large holdings.",
    "difficulty": "medium"
  },
  {
    "id": "d291_175", "subject": "Agricultural Extension Education",
    "question": "Three-column matching: Match the advantage, the extension method it belongs to, and the reason:\nCol A: 1-Saves extension officer's time, 2-Possibility of learning by seeing at different stages, 3-Reaches largest number in shortest time\nCol B: P-Result demonstration, Q-Office calls, R-Mass methods\nCol C: i-Suitable for creating awareness, ii-Realistic demonstration of methods, iii-Farmers bring their own queries",
    "options": ["1-Q-iii, 2-P-ii, 3-R-i",
                "1-P-ii, 2-Q-i, 3-R-iii",
                "1-R-i, 2-Q-iii, 3-P-ii",
                "1-Q-i, 2-R-iii, 3-P-ii"],
    "correct": 0,
    "explanation": "Saves time belongs to office calls (Q) where farmers come with their own queries (iii); Learning by seeing at stages belongs to result demonstration (P) with realistic demonstration (ii); Largest number belongs to mass methods (R) suitable for awareness (i).",
    "difficulty": "hard"
  },
  {
    "id": "d291_176", "subject": "Agricultural Extension Education",
    "question": "The ward members in a Gram Panchayat elect one of them as:",
    "options": ["Village Deputy Sarpanch",
                "Gram Panchayat Secretary",
                "Block Development Officer",
                "Village Administrative Officer"],
    "correct": 0,
    "explanation": "Ward members elect one of them as village deputy sarpanch, while the village sarpanch is elected by secret ballot by all village voters.",
    "difficulty": "medium"
  },
  {
    "id": "d291_177", "subject": "Agricultural Extension Education",
    "question": "The purpose of extension teaching methods is to bring desirable changes in:",
    "options": ["Psychology and physical activity of learners",
                "Only the crop production levels",
                "Only the income levels of farmers",
                "Government agricultural policies"],
    "correct": 0,
    "explanation": "Extension teaching methods are important for: adopting special methods where learners learn by watching/listening/doing, bringing desirable changes in psychology and physical activity, and creating AIDCAS (Attention, Interest, Desire, Conviction, Action, Satisfaction).",
    "difficulty": "medium"
  },
  {
    "id": "d291_178", "subject": "Agricultural Extension Education",
    "question": "Assertion (A): Agricultural extension is a service to farmers on use of improved varieties and latest agricultural developments to bring desirable change.\nReason (R): Agricultural extension was first developed in India as part of post-independence rural development.",
    "options": ["A is true but R is false",
                "Both A and R are true",
                "A is false but R is true",
                "Both A and R are false"],
    "correct": 0,
    "explanation": "A is true - agricultural extension is a service to farmers. R is false - agricultural extension was first developed in America (USA), not India.",
    "difficulty": "medium"
  },
  {
    "id": "d291_179", "subject": "Agricultural Extension Education",
    "question": "The 'AIDCAS' acronym in extension teaching methods stands for:",
    "options": ["Attention, Interest, Desire, Conviction, Action, Satisfaction",
                "Awareness, Information, Demonstration, Change, Adoption, Stability",
                "Analysis, Identification, Decision, Communication, Action, Sustainability",
                "Approach, Interest, Design, Creation, Assessment, Success"],
    "correct": 0,
    "explanation": "AIDCAS - Attention, Interest, Desire, Conviction, Action, Satisfaction - represents the stages of learning that extension teaching methods aim to create in farmers.",
    "difficulty": "medium"
  },
  {
    "id": "d291_180", "subject": "Agricultural Extension Education",
    "question": "Three-column matching: Match the pre-independence project, its distinguishing feature, and its location:\nCol A: 1-Srinikethan (1914), 2-Marthandam (1921), 3-Nilokheri (1947)\nCol B: P-Self-sufficiency for refugees (Mazdoor Manzil), Q-First rural development attempt with Tagore, R-Dr Spencer H's project with cottage industries focus\nCol C: i-Kerala, ii-West Bengal, iii-Punjab/adjoining villages",
    "options": ["1-Q-ii, 2-R-i, 3-P-iii",
                "1-P-iii, 2-Q-ii, 3-R-i",
                "1-R-i, 2-Q-ii, 3-P-iii",
                "1-Q-i, 2-R-ii, 3-P-iii"],
    "correct": 0,
    "explanation": "Srinikethan (Q-first rural development with Tagore, ii-West Bengal); Marthandam (R-Dr Spencer H with cottage industries, i-Kerala); Nilokheri (P-refugee self-sufficiency/Mazdoor Manzil, iii-Punjab/India).",
    "difficulty": "hard"
  },
  {
    "id": "d291_181", "subject": "Agricultural Extension Education",
    "question": "The Balvantrai Mehta Committee's main recommendation for community participation was:",
    "options": ["Three-tier Panchayati Raj system with elected representatives",
                "Formation of farmer cooperatives in each district",
                "Appointment of village development officers by government",
                "Creation of community development blocks"],
    "correct": 0,
    "explanation": "The Balvantrai Mehta Committee mainly recommended the three-tier Panchayati Raj system with elected representatives at village, block, and district levels for democratic decentralization.",
    "difficulty": "medium"
  },
  {
    "id": "d291_182", "subject": "Agricultural Extension Education",
    "question": "The advantages of general meetings as an extension method include all EXCEPT:",
    "options": ["Can be used to reach all individual farmers with personalized advice",
                "Useful to bring desirable change in large number of people in limited time",
                "All issues or subjects can be discussed",
                "Strengthens friendship between villagers and extension officers"],
    "correct": 0,
    "explanation": "General meetings cannot provide personalized individual advice - that is an advantage of individual methods. All other options are genuine advantages of general meetings.",
    "difficulty": "medium"
  },
  {
    "id": "d291_183", "subject": "Agricultural Extension Education",
    "question": "Assertion (A): The Community Development Programme (CDP) and Panchayati Raj are separate but complementary systems.\nReason (R): CDP without people's participation could not achieve expected results, leading to the introduction of Panchayati Raj for democratic decentralization.",
    "options": ["Both A and R are true and R is the correct explanation of A",
                "Both A and R are true but R is not the correct explanation of A",
                "A is true but R is false",
                "A is false but R is true"],
    "correct": 0,
    "explanation": "Both are true and R explains A - CDP could not succeed without people's participation, leading to Panchayati Raj as the democratic mechanism for local participation, making them complementary systems.",
    "difficulty": "hard"
  },
  {
    "id": "d291_184", "subject": "Agricultural Extension Education",
    "question": "The second phase of the extension educational process - 'deciding upon objectives' - requires:",
    "options": ["Distinguishing between general and specific objectives, selecting limited problems, stating objectives clearly",
                "Selecting demonstration plots and extension teaching methods",
                "Evaluating the extent to which previous objectives were reached",
                "Conducting surveys of village population and farming systems"],
    "correct": 0,
    "explanation": "The second phase requires distinguishing general from specific objectives, enabling people to select a limited number of problems, stating objectives clearly, and expressing behavioral changes and desired economic/social outcomes.",
    "difficulty": "medium"
  },
  {
    "id": "d291_185", "subject": "Agricultural Extension Education",
    "question": "Three-column matching: Match the principle of community development, its core requirement, and its outcome:\nCol A: 1-Needs of people, 2-Change of attitudes, 3-Assistance by government\nCol B: P-Government support for self-help projects, Q-Meeting minimum requirements, R-Attitude change in early development stages\nCol C: i-Effective community development programmes, ii-Successful programme implementation, iii-Comprehensive and balanced development",
    "options": ["1-Q-iii, 2-R-ii, 3-P-i",
                "1-P-i, 2-Q-ii, 3-R-iii",
                "1-R-ii, 2-P-i, 3-Q-iii",
                "1-Q-i, 2-R-iii, 3-P-ii"],
    "correct": 0,
    "explanation": "Needs of people (Q-meeting requirements, iii-balanced development); Change of attitudes (R-early attitude change, ii-successful implementation); Government assistance (P-support for self-help, i-effective programmes).",
    "difficulty": "hard"
  },
  {
    "id": "d291_186", "subject": "Agricultural Extension Education",
    "question": "Which factor relating to farmers' background should be considered when selecting extension teaching methods?",
    "options": ["Level of education, attitude, knowledge, family background, and opinion on government offices",
                "Only the farmer's crop type and farm size",
                "Only the farmer's income and landholding",
                "Only government directives on extension approaches"],
    "correct": 0,
    "explanation": "Selection of extension teaching methods must consider: attitude, level of education, knowledge, situation of family/background, opinion on government offices, and past experience of farmers.",
    "difficulty": "medium"
  },
  {
    "id": "d291_187", "subject": "Agricultural Extension Education",
    "question": "The principle of extension education that states 'the base of any civilization depends on the relationship between people and nation' implies:",
    "options": ["Extension workers must develop strong citizen-government relationships",
                "Extension work should focus only on agricultural production",
                "Extension education is only for government servants",
                "Extension programs should be implemented only in developed nations"],
    "correct": 0,
    "explanation": "This principle implies that extension workers must help citizens reach the highest standard of living by developing the people-nation relationship, training people as responsible citizens.",
    "difficulty": "medium"
  },
  {
    "id": "d291_188", "subject": "Agricultural Extension Education",
    "question": "The DA-291 source material states that extension workers deliver goods by keeping in mind four aspects. Which of the following correctly lists them?",
    "options": ["Person, Home, Family, and Environment",
                "Village, Block, District, and State",
                "Agriculture, Education, Health, and Income",
                "Production, Marketing, Credit, and Technology"],
    "correct": 0,
    "explanation": "Extension workers deliver goods by keeping in mind: person, home, family, and environment - representing the holistic approach to rural development.",
    "difficulty": "hard"
  },
  {
    "id": "d291_189", "subject": "Agricultural Extension Education",
    "question": "Assertion (A): Non-formal education uses evaluation more informally than formal education.\nReason (R): Non-formal education is more problem-oriented and situation-specific, not requiring standardized formal examinations.",
    "options": ["Both A and R are true and R is the correct explanation of A",
                "Both A and R are true but R is not the correct explanation of A",
                "A is true but R is false",
                "A is false but R is true"],
    "correct": 0,
    "explanation": "Both are true - non-formal education uses more informal evaluation (A) because it is problem-oriented and specific to situations rather than requiring standardized exams (R), and R correctly explains why A is true.",
    "difficulty": "medium"
  },
  {
    "id": "d291_190", "subject": "Agricultural Extension Education",
    "question": "Three-column matching: Match the extension principle, its statement, and its application:\nCol A: 1-Importance of individual, 2-House as basic unit, 3-Primary family training\nCol B: P-Every individual has extraordinary importance in democracy, Q-The house is the basic unit of civilization, R-Primarily family has to be trained in human society\nCol C: i-Community improvement starts at family level, ii-Respect for each farmer's views and needs, iii-Home improvement is the foundation of development",
    "options": ["1-P-ii, 2-Q-iii, 3-R-i",
                "1-Q-iii, 2-R-i, 3-P-ii",
                "1-R-i, 2-P-ii, 3-Q-iii",
                "1-P-i, 2-Q-ii, 3-R-iii"],
    "correct": 0,
    "explanation": "Importance of individual (P - every individual extraordinary in democracy, ii-respect for each farmer); House as basic unit (Q - house is basic unit, iii-home improvement is foundation); Family training (R - family trained primarily, i-community improvement starts at family).",
    "difficulty": "hard"
  },
  {
    "id": "d291_191", "subject": "Agricultural Extension Education",
    "question": "The lecture method's advantage of 'covering a large amount of topics in a single class period' is offset by its main disadvantage of:",
    "options": ["Not recognizing individual differences among students",
                "Requiring expensive equipment and laboratory facilities",
                "Being too short and unable to cover syllabus",
                "Requiring learners to have prior technical knowledge"],
    "correct": 0,
    "explanation": "The main disadvantage of lectures is that the teacher delivers the same lecture without recognizing individual differences - psychologically not acceptable as individuals are not alike.",
    "difficulty": "medium"
  },
  {
    "id": "d291_192", "subject": "Agricultural Extension Education",
    "question": "Which of the following correctly describes the 'analysis of situation' phase of extension education?",
    "options": ["Gathering facts about people's situation, interests, education, needs, social customs, and type of farming",
                "Selecting demonstration plots and experimental varieties",
                "Distributing leaflets and other information materials",
                "Evaluating achievement of previously set objectives"],
    "correct": 0,
    "explanation": "Analysis of situation requires gathering large amounts of facts about people's situation, interests, education, needs, social customs, habits, type of farming, markets, farm sizes, cropping systems, housing, community services, and communications.",
    "difficulty": "easy"
  },
  {
    "id": "d291_193", "subject": "Agricultural Extension Education",
    "question": "Assertion (A): Extension education sometimes compared to commercial salesmanship.\nReason (R): Extension workers primarily aim to make commercial profits from technology transfer to farmers.",
    "options": ["A is true but R is false",
                "Both A and R are true",
                "A is false but R is true",
                "Both A and R are false"],
    "correct": 0,
    "explanation": "A is true - extension is compared to salesmanship as workers convince farmers about new technologies. R is false - extension workers aim for farmers' development, not commercial profit.",
    "difficulty": "medium"
  },
  {
    "id": "d291_194", "subject": "Agricultural Extension Education",
    "question": "Three-column matching: Match the objective of agricultural extension, its category, and its example:\nCol A: 1-Disseminate information, 2-Assist in problem discovery, 3-Keep researchers informed\nCol B: P-Research-farmer linkage, Q-Information dissemination, R-Problem identification\nCol C: i-Farmer reports pest outbreak to scientists, ii-Training on new paddy variety, iii-Extension worker helps farmers identify felt/unfelt needs",
    "options": ["1-Q-ii, 2-R-iii, 3-P-i",
                "1-P-i, 2-Q-ii, 3-R-iii",
                "1-R-iii, 2-P-i, 3-Q-ii",
                "1-Q-iii, 2-R-i, 3-P-ii"],
    "correct": 0,
    "explanation": "Disseminate information (Q-info dissemination, ii-variety training); Assist problem discovery (R-problem identification, iii-felt/unfelt needs); Keep researchers informed (P-research-farmer linkage, i-farmer reports pest outbreak).",
    "difficulty": "hard"
  },
  {
    "id": "d291_195", "subject": "Agricultural Extension Education",
    "question": "The advantages of field trips as an extension teaching method include all EXCEPT:",
    "options": ["High risk of accidents during travel",
                "Participants gain first-hand knowledge of improved practices",
                "Learning from real-world successful examples",
                "Creates interest and motivation in learners"],
    "correct": 0,
    "explanation": "Risk of accidents is a LIMITATION, not an advantage of field trips. All other options are advantages.",
    "difficulty": "medium"
  },
  {
    "id": "d291_196", "subject": "Agricultural Extension Education",
    "question": "In the context of the Andhra Pradesh Panchayat Raj Act, a 'secondary level' (middle level) is:",
    "options": ["The level in-between district and village level, determined by the panchayat raj commissioner",
                "The district level comprising Zilla Parishad",
                "The village level comprising Gram Panchayat",
                "The state level comprising legislative assembly"],
    "correct": 0,
    "explanation": "The secondary/middle level is the level in-between district and village, determined on a note by the panchayat raj commissioner as per advice of the district collector through public notification.",
    "difficulty": "hard"
  },
  {
    "id": "d291_197", "subject": "Agricultural Extension Education",
    "question": "Assertion (A): Extension education programs should use teaching methods that allow farmers to learn by watching, listening, and doing.\nReason (R): Farmers as non-formal learners retain information better through multi-sensory experiences than through reading alone.",
    "options": ["Both A and R are true and R is the correct explanation of A",
                "Both A and R are true but R is not the correct explanation of A",
                "A is true but R is false",
                "A is false but R is true"],
    "correct": 0,
    "explanation": "Both are true and R explains A - the need to use watching, listening, doing methods (A) is because non-formal learners retain information better through multi-sensory experiences (R).",
    "difficulty": "medium"
  },
  {
    "id": "d291_198", "subject": "Agricultural Extension Education",
    "question": "The 'multipurpose programmes' principle of community development means:",
    "options": ["Holistic and balanced community development through multi-use programmes with combined efforts of all",
                "Running many separate single-purpose schemes simultaneously",
                "Each government department implementing its own isolated programme",
                "Focusing all resources on one major programme at a time"],
    "correct": 0,
    "explanation": "Multipurpose programme principle states that holistic and balanced community development is possible only by undertaking multi-use programmes with efforts of all departments/people working together.",
    "difficulty": "medium"
  },
  {
    "id": "d291_199", "subject": "Agricultural Extension Education",
    "question": "Three-column matching: Match the community development programme phase, its characteristic activity, and its objective:\nCol A: 1-Early stage, 2-Integrated phase, 3-Work phase\nCol B: P-Provision of staff accommodation and transport, Q-Completing pending works, R-Implementing targeted programmes\nCol C: i-Completing pending programmes, ii-Infrastructure establishment, iii-Achievement of set development targets",
    "options": ["1-P-ii, 2-Q-i, 3-R-iii",
                "1-R-iii, 2-P-ii, 3-Q-i",
                "1-Q-i, 2-R-iii, 3-P-ii",
                "1-P-iii, 2-Q-ii, 3-R-i"],
    "correct": 0,
    "explanation": "Early stage (P-accommodation/transport, ii-infrastructure establishment); Integrated phase (Q-completing pending works, i-completing pending programmes); Work phase (R-implementing programmes, iii-achieving targets).",
    "difficulty": "hard"
  },
  {
    "id": "d291_200", "subject": "Agricultural Extension Education",
    "question": "The definition of 'Area of panchayat' as per the AP Panchayat Raj Act is:",
    "options": ["Area within the boundaries of a panchayath",
                "Total agricultural land under the panchayath jurisdiction",
                "Revenue area of the village comprising all land types",
                "Urban area notified for urban local body formation"],
    "correct": 0,
    "explanation": "According to the AP Panchayat Raj Act, 'Area of panchayat' means the area within the boundaries of a panchayath.",
    "difficulty": "easy"
  },
]

print("Shuffling and appending lecture questions...")
lecture_questions = shuffle_q(lecture_questions)
append_to_file(LFILE, lecture_questions, is_lecture=True)

print("Shuffling and appending combined questions...")
combined_questions = shuffle_q(combined_questions)
append_to_file(CFILE, combined_questions, is_lecture=False)

print("DA-291 done!")
