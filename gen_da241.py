import sys
sys.stdout.reconfigure(encoding='utf-8')
import re, random

base = r'C:\Users\bioas\Agricet Mock Test Series\src\data\questions'

da241_lecture_qs = '''
  {
    id: "d241x_001",
    subject: "da-241",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Which of the following is a 'flow resource' in agricultural production?",
    options: ["Land", "Building", "Services of a labourer on a particular day", "Seeds stored for next season"],
    correct: 2,
    explanation: "Flow resources cannot be stored and must be used as and when available, e.g., services of a labourer on a particular day. Seeds can be stored, making them a stock resource."
  },
  {
    id: "d241x_002",
    subject: "da-241",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The mathematical expression Y = f(X1, X2 / X3...Xn) represents:",
    options: ["Long run production function", "Short run production function", "Cobb-Douglas function", "Constant returns production"],
    correct: 1,
    explanation: "In short run production function Y = f(X1, X2 / X3...Xn), X1 and X2 are variable inputs while X3...Xn are fixed inputs. In long run, all inputs are variable: Y = f(X1, X2,...Xn)."
  },
  {
    id: "d241x_003",
    subject: "da-241",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Assertion (A): A tractor with 10-year life can be considered both a flow and stock resource.\\nReason (R): Resources can be classified differently based on the length of time under consideration.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "A tractor is a stock resource over its entire useful life of 10 years, but also provides services every day making it a flow resource. The classification depends on the time period considered, so R correctly explains A."
  },
  {
    id: "d241x_004",
    subject: "da-241",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Average Product (AP) in production economics is calculated as:",
    options: ["Change in total product / Change in input", "Total product / Total input (Y/X)", "Total product x Total input", "Marginal product / Total input"],
    correct: 1,
    explanation: "Average Product (AP) = Y/X, where Y is total product and X is total input. It indicates the technical efficiency of variable input."
  },
  {
    id: "d241x_005",
    subject: "da-241",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Total Value Product (TVP) is:",
    options: ["Total physical product expressed in monetary value", "Total revenue minus total cost", "Marginal product multiplied by price of input", "Average product at maximum output"],
    correct: 0,
    explanation: "TVP is the expression of Total Physical Product (TPP) in terms of monetary value. Similarly, APP and MPP expressed in money value are called AVP and MVP respectively."
  },
  {
    id: "d241x_006",
    subject: "da-241",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The Law of Variable Proportions is also known as:",
    options: ["Law of Returns to Scale", "Law of Proportionality", "Law of Comparative Advantage", "Law of Diminishing Utility"],
    correct: 1,
    explanation: "The Law of Variable Proportions is also known as the 'Law of Proportionality'. It explains the production function keeping one factor variable and others fixed. Benham defined it as the law of diminishing returns."
  },
  {
    id: "d241x_007",
    subject: "da-241",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Which assumption is NOT part of the Law of Variable Proportions?",
    options: ["Factor proportions are variable", "Constant technology", "Long-run planning period", "Homogeneous factor inputs"],
    correct: 2,
    explanation: "The Law of Variable Proportions operates in the SHORT-RUN (not long run) because in short run it is not possible to vary all factor inputs. The other three are valid assumptions of this law."
  },
  {
    id: "d241x_008",
    subject: "da-241",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "When Total Product (TP) is at its maximum, the Marginal Product (MP) is:",
    options: ["Maximum", "Equal to Average Product", "Zero", "Negative"],
    correct: 2,
    explanation: "When Marginal Product is zero, the Total Physical Product is maximum. When MP declines to zero, TP reaches its peak. After that, MP becomes negative and TP starts declining."
  },
  {
    id: "d241x_009",
    subject: "da-241",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Average Product is at its maximum when:",
    options: ["Total Product is maximum", "Marginal Product equals Average Product", "Marginal Product is zero", "Marginal Product is maximum"],
    correct: 1,
    explanation: "Average Product is maximum when Marginal Product equals Average Product (MP = AP). When MP > AP, AP is increasing. When MP < AP, AP is decreasing. AP is maximum at the point where MP = AP."
  },
  {
    id: "d241x_010",
    subject: "da-241",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "In Stage II of the production function, elasticity of production (Ep) is:",
    options: ["Greater than 1", "Equal to 1", "Between 0 and 1", "Negative"],
    correct: 2,
    explanation: "In Stage II (rational zone), elasticity of production is less than 1 (between maximum APP and maximum TPP) and equals zero at the end of Stage II. Stage I has Ep > 1, Stage III has Ep < 0."
  },
  {
    id: "d241x_011",
    subject: "da-241",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Which stage of production is called the 'rational zone' where a producer should operate for profit maximization?",
    options: ["Stage I - where MPP > APP", "Stage II - where MPP < APP and TPP increases", "Stage III - where MPP is negative", "Stage I and Stage II both"],
    correct: 1,
    explanation: "Stage II is the rational zone of production. In Stage II, MVP = MFC (MR = MC), and the producer should operate here to attain profit maximization. Stage I and III are irrational/sub-optimal zones."
  },
  {
    id: "d241x_012",
    subject: "da-241",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Elasticity of production (Ep) is the ratio of:",
    options: ["Total product to total input", "Marginal Physical Product to Average Physical Product", "Average product to marginal product squared", "Change in revenue to change in cost"],
    correct: 1,
    explanation: "Ep = MPP/APP. It is the proportionate change in output compared to proportionate change in input. At end of Stage I (where MPP = APP), Ep = 1. At end of Stage II (where MPP = 0), Ep = 0."
  },
  {
    id: "d241x_013",
    subject: "da-241",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Match the following:\\n     Column-I (Law)              |  Column-II (MPP Behavior)  |  Column-III (Cost Effect)\\nA.  Increasing returns         |  1.  Rising MPP             |  i.   Decreasing costs\\nB.  Constant returns          |  2.  Constant MPP           |  ii.  Constant costs\\nC.  Decreasing returns        |  3.  Falling MPP            |  iii. Increasing costs\\nD.  Negative returns          |  4.  Negative MPP           |  iv.  Output declines",
    options: ["A-1-i, B-2-ii, C-3-iii, D-4-iv", "A-2-i, B-1-ii, C-4-iii, D-3-iv", "A-1-ii, B-2-i, C-3-iv, D-4-iii", "A-3-i, B-2-ii, C-1-iii, D-4-iv"],
    correct: 0,
    explanation: "Law of increasing returns: MPP rises (hence decreasing costs per unit). Law of constant returns: MPP stays constant (constant costs). Law of decreasing returns: MPP falls (increasing costs). Negative returns: MPP is negative (output declines)."
  },
  {
    id: "d241x_014",
    subject: "da-241",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Law of diminishing returns in agriculture is expressed algebraically as:",
    options: ["D1Y/D1X < D2Y/D2X < DnY/DnX", "D1Y/D1X = D2Y/D2X = DnY/DnX", "D1Y/D1X > D2Y/D2X > DnY/DnX", "D1Y/D1X + D2Y/D2X = DnY/DnX"],
    correct: 2,
    explanation: "Diminishing returns: each successive unit of variable input adds LESS to the output, so D1Y/D1X > D2Y/D2X > ... > DnY/DnX. Increasing returns shows the reverse, and constant returns shows equality."
  },
  {
    id: "d241x_015",
    subject: "da-241",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "In Returns to Scale analysis, if the sum of elasticity coefficients (bi) in Cobb-Douglas function is less than 1, it indicates:",
    options: ["Increasing returns to scale", "Constant returns to scale", "Decreasing returns to scale", "Zero returns to scale"],
    correct: 2,
    explanation: "In Cobb-Douglas production function: if sum bi > 1 = increasing returns to scale; sum bi = 1 = constant returns to scale; sum bi < 1 = decreasing returns to scale. The DA-241 notes example value of 0.824 shows decreasing returns."
  },
  {
    id: "d241x_016",
    subject: "da-241",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Returns to Scale differs from Law of Variable Proportions in that:",
    options: ["Returns to Scale applies only in short run", "In Returns to Scale, proportion among factors remains the same while all factors change", "Returns to Scale studies single variable input", "There is no difference between the two"],
    correct: 1,
    explanation: "Key difference: In Law of Variable Proportions, the proportion among factors VARIES (one factor varies, others fixed - short run). In Returns to Scale, all factors change but in the SAME proportion (long run)."
  },
  {
    id: "d241x_017",
    subject: "da-241",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Prof. Marshall classified economies of scale into:",
    options: ["Internal and External economies", "Technical and Non-technical economies", "Short-run and Long-run economies", "Fixed and Variable economies"],
    correct: 0,
    explanation: "Prof. Marshall classified economies of scale into two parts: Internal Economies of Scale (occurring within large companies) and External Economies of Scale (occurring through cooperation between firms, e.g., shared research)."
  },
  {
    id: "d241x_018",
    subject: "da-241",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "An example of 'Diseconomy of scale' as per DA-241 notes is:",
    options: ["A pharmaceutical company sharing research costs with a university", "A motor vehicle factory splitting workers for specialization", "A cafe where more cooks in small space inhibit efficiency", "A factory using bulk purchasing to reduce costs"],
    correct: 2,
    explanation: "Diseconomy of scale example from notes: a Cafe scenario where more cooks in a small space will inhibit efficiency and prevent orders from being fulfilled effectively. This is where growing too large reduces efficiency."
  },
  {
    id: "d241x_019",
    subject: "da-241",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "'Opportunity cost' in farm management refers to:",
    options: ["The actual cash expenditure on farm inputs", "The value of return sacrificed from the next best alternative activity", "The depreciation on farm machinery", "The cost of hired labour on the farm"],
    correct: 1,
    explanation: "Opportunity cost is the value of return sacrificed or foregone from the next best alternative activity. In farming, owned resources like family labour, owned bullock labour, owned machinery are valued on the basis of opportunity cost."
  },
  {
    id: "d241x_020",
    subject: "da-241",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Variable costs are also known as:",
    options: ["Overhead costs and sunk costs", "Fixed costs and indirect costs", "Working costs, operating costs, direct costs and prime costs", "Implicit costs and explicit costs"],
    correct: 2,
    explanation: "Variable costs (which vary with output level) are also known as working costs, operating costs, direct costs, prime costs, circulating costs and running costs. Fixed costs are also called overhead costs, indirect costs, and sunk costs."
  },
  {
    id: "d241x_021",
    subject: "da-241",
    lecture: "lecture-11",
    lectureNo: 11,
    question: "Total Fixed Cost (TFC) curve is graphically represented as:",
    options: ["A U-shaped curve", "An inverse S-shaped curve", "A horizontal straight line parallel to X-axis", "A downward sloping hyperbola"],
    correct: 2,
    explanation: "TFC is a horizontal straight line parallel to X-axis because fixed costs remain the same irrespective of level of production. TVC has inverse S-shape, AFC curve is a declining hyperbola, and AVC has U-shape."
  },
  {
    id: "d241x_022",
    subject: "da-241",
    lecture: "lecture-11",
    lectureNo: 11,
    question: "Marginal Cost (MC) is computed using the formula:",
    options: ["TFC / Q", "TVC / Q", "Change in TC / Change in Q (also equal to Change in TVC / Change in Q)", "( TFC + TVC) / Q"],
    correct: 2,
    explanation: "MC = Change in Total Costs / Change in Output = deltaTC/deltaQ = deltaTVC/deltaQ. Fixed costs cannot be changed - the only component of change in TC is TVC - so MC can be computed using either TC or TVC."
  },
  {
    id: "d241x_023",
    subject: "da-241",
    lecture: "lecture-13",
    lectureNo: 13,
    question: "Average Revenue (AR) is always equal to:",
    options: ["Marginal Revenue (MR)", "Total Revenue (TR)", "Price (P) of the commodity", "Change in Total Revenue"],
    correct: 2,
    explanation: "AR = TR/Q = P.Q/Q = P. Average Revenue always equals Price. Therefore the demand or price curve is also called the average revenue curve."
  },
  {
    id: "d241x_024",
    subject: "da-241",
    lecture: "lecture-14",
    lectureNo: 14,
    question: "Under perfect competition, the relationship between TR, AR and MR is:",
    options: ["TR increases, AR and MR both decrease", "P = AR = MR and all are constant", "MR is always less than AR", "TR decreases as output increases"],
    correct: 1,
    explanation: "Under perfect competition, goods are sold at single market price, so P = AR = MR (all equal and constant). The AR and MR curves are parallel to X-axis and coincide with each other - a horizontal straight line."
  },
  {
    id: "d241x_025",
    subject: "da-241",
    lecture: "lecture-15",
    lectureNo: 15,
    question: "Under Monopoly, the relationship between Price, AR and MR is:",
    options: ["P = AR = MR", "P = AR > MR", "P > AR > MR", "MR > AR = P"],
    correct: 1,
    explanation: "Under Monopoly: P = AR > MR. The table shows AR falls by Re.1 at a time while MR falls by Rs.2. MR declines faster than AR. Both AR and MR curves are downward sloping, with MR curve lying below the AR curve."
  },
  {
    id: "d241x_026",
    subject: "da-241",
    lecture: "lecture-17",
    lectureNo: 17,
    question: "Mrs. Joan Robinson's formula relating Price Elasticity of demand (e), AR and MR is:",
    options: ["MR = AR + (e/(e-1))", "MR = AR x (e-1)/e", "AR = MR + e", "e = AR x MR"],
    correct: 1,
    explanation: "As derived in Mrs. Joan Robinson's 'The Economics of Imperfect Competition': MR = AR x (e-1)/e, or equivalently AR = MR x (e/(e-1)). This shows the relationship between price elasticity, average revenue and marginal revenue."
  },
  {
    id: "d241x_027",
    subject: "da-241",
    lecture: "lecture-18",
    lectureNo: 18,
    question: "The Long Run Average Cost curve is formed by being tangent to:",
    options: ["A single short run average cost curve", "The minimum points of all short run average cost curves", "An entire family of Short Run Average Cost (SAC) curves", "Only the long run marginal cost curves"],
    correct: 2,
    explanation: "To draw the Long Run Cost Curve (LAC), it must be tangential to the entire family of SAC curves, touching each SAC curve at one point. It is the envelope of all short run average cost curves, called the 'planning curve.'"
  },
  {
    id: "d241x_028",
    subject: "da-241",
    lecture: "lecture-22",
    lectureNo: 22,
    question: "The motto of cooperation as stated in DA-241 notes is:",
    options: ["Each for one and one for each", "Each for all and all for each", "Together we stand divided we fall", "One for all and none for one"],
    correct: 1,
    explanation: "The motto of co-operation as stated in DA-241 notes is 'Each for all and all for each.' Co-operation is defined as voluntary association of persons for achieving a common goal."
  },
  {
    id: "d241x_029",
    subject: "da-241",
    lecture: "lecture-22",
    lectureNo: 22,
    question: "Rochdale pioneers were a group of weavers from which country who designed the principles of cooperation?",
    options: ["France", "Germany", "England", "Scotland"],
    correct: 2,
    explanation: "Rochdale pioneers were a group of 28 weavers and other artisans in Rochdale region of England who formed against the advent of industrial revolution forcing many skilled workers into poverty. They designed the Rochdale principles of co-operation."
  },
  {
    id: "d241x_030",
    subject: "da-241",
    lecture: "lecture-22",
    lectureNo: 22,
    question: "Under Principle of Distribution of Profits in cooperatives, what percentage of profits is kept as reserve fund?",
    options: ["10%", "25%", "50%", "75%"],
    correct: 1,
    explanation: "In co-operatives, 25% of profits will be kept back as reserve fund and the remaining 75% can be distributed among the members based on their contribution to the share capital."
  },
  {
    id: "d241x_031",
    subject: "da-241",
    lecture: "lecture-23",
    lectureNo: 23,
    question: "The Cooperative Credit Societies Act of 1904 was enacted based on the recommendation to find the model from:",
    options: ["French cooperative model", "Raiffeissen model from Germany", "British Rochdale model", "American credit union model"],
    correct: 1,
    explanation: "In 1892, Madras Government appointed Federick Nicholson to study German village banks. He raised the slogan 'Find Raiffeissen.' Famine Commission (1901) also recommended formation of credit societies on Raiffeissen model, leading to Cooperative Credit Societies Act (1904)."
  },
  {
    id: "d241x_032",
    subject: "da-241",
    lecture: "lecture-23",
    lectureNo: 23,
    question: "The cooperative movement in India pre-independence era period 1919-1929 is known as:",
    options: ["Initiation phase", "Modification phase", "Golden Era", "Restructuring phase"],
    correct: 2,
    explanation: "The expansion phase (1919-1929) was considered as 'Golden Era' for the cooperative movement in India. Cooperative movement got impetus as cooperatives became a provincial subject under Montague Chelmsford Act of 1919."
  },
  {
    id: "d241x_033",
    subject: "da-241",
    lecture: "lecture-23",
    lectureNo: 23,
    question: "Land Mortgage Banks (LMBs) were first established in India in which state in 1924?",
    options: ["Madras", "Punjab", "Bombay", "Bengal"],
    correct: 1,
    explanation: "Land Mortgage Banks (LMBs) were first established in Punjab in 1924, subsequently in Madras in 1925 and in Bombay in 1926, during the Expansion phase (1919-1929) of the cooperative movement."
  },
  {
    id: "d241x_034",
    subject: "da-241",
    lecture: "lecture-23",
    lectureNo: 23,
    question: "Assertion (A): The All India Rural Credit Survey Committee concluded that 'Cooperation has failed in India but must succeed.'\\nReason (R): Cooperative credit was found to be unevenly distributed and inadequate, mostly benefiting large cultivators.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "AIRCSC under Sri. A.D. Gorwala noted two main drawbacks: cooperative credit was unevenly distributed and was inadequate, mostly lent to asset-oriented large cultivators. These failures led to the famous conclusion but also recommendations to restructure cooperatives."
  },
  {
    id: "d241x_035",
    subject: "da-241",
    lecture: "lecture-27",
    lectureNo: 27,
    question: "NABARD was established on:",
    options: ["July 12th, 1975", "July 12th, 1982", "April 1st, 1980", "January 1st, 1985"],
    correct: 1,
    explanation: "NABARD came into existence on July 12th, 1982 based on CRAFICARD recommendations under Sri. B. Sivaraman. The then existing ARDC, ACD and RPCC of RBI were merged with NABARD with a share capital of Rs.500 crore equally contributed by Government of India and RBI."
  },
  {
    id: "d241x_036",
    subject: "da-241",
    lecture: "lecture-27",
    lectureNo: 27,
    question: "Match the following:\\n     Column-I (Committee)    |  Column-II (Year)   |  Column-III (Recommendation)\\nA.  Gadgil Committee       |  1.  1969           |  i.   Service Area Approach\\nB.  Nariman Committee      |  2.  1969           |  ii.  Lead Bank Scheme\\nC.  Gorwala AIRCSC         |  3.  1954           |  iii. Cooperative credit reforms\\nD.  Mac Lagan Committee    |  4.  1915           |  iv.  Thrift and honesty in cooperatives",
    options: ["A-1-i, B-2-ii, C-3-iii, D-4-iv", "A-2-i, B-1-ii, C-4-iii, D-3-iv", "A-1-ii, B-2-i, C-3-iv, D-4-iii", "A-3-i, B-4-ii, C-2-iii, D-1-iv"],
    correct: 0,
    explanation: "Gadgil (1969) recommended Service Area Approach; Nariman (1969) recommended Lead Bank Scheme based on Gadgil's work; Gorwala/AIRCSC (1954) made cooperative credit reform recommendations; Mac Lagan Committee (1915) reported on thrift, honesty and other cooperative principles."
  },
  {
    id: "d241x_037",
    subject: "da-241",
    lecture: "lecture-28",
    lectureNo: 28,
    question: "For milch cattle, the 'unit' for determining scale of finance under crop loan system refers to:",
    options: ["One animal", "Two animals", "Five animals", "Ten animals"],
    correct: 1,
    explanation: "Livestock have fixed costs of finance called unit costs. For milch cattle the unit refers to two animals, for sheep and goat a minimum of 10 animals, and for poultry a minimum of 500 birds."
  },
  {
    id: "d241x_038",
    subject: "da-241",
    lecture: "lecture-30",
    lectureNo: 30,
    question: "The word 'credit' comes from which Latin word meaning 'I believe'?",
    options: ["Credere", "Credo", "Creditus", "Creditum"],
    correct: 1,
    explanation: "The word 'credit' comes from the Latin word 'Credo' which means 'I believe.' Hence credit is based upon belief, confidence, trust and faith."
  },
  {
    id: "d241x_039",
    subject: "da-241",
    lecture: "lecture-31",
    lectureNo: 31,
    question: "Short-term agricultural loans are to be repaid within:",
    options: ["3 to 6 months", "6 to 18 months", "18 months to 5 years", "5 to 10 years"],
    correct: 1,
    explanation: "Short-term loans are to be repaid within a period of 6 to 18 months. Medium-term loans have repayment period of 18 months to 5 years. Long-term loans fall due for repayment over 5 years to more than 20 years."
  },
  {
    id: "d241x_040",
    subject: "da-241",
    lecture: "lecture-31",
    lectureNo: 31,
    question: "In 'Key loans' under hypothecated category, the agricultural produce is:",
    options: ["Kept with the farmer who uses it as collateral", "Sold immediately to repay the loan", "Kept under the control of lending institutions", "Transferred to government warehouses"],
    correct: 2,
    explanation: "In Key loans, the agricultural produce of the farmer-borrower will be kept under the control of lending institutions and the loan is advanced to the farmer. This helps the farmer from not resorting to distress sales."
  },
  {
    id: "d241x_041",
    subject: "da-241",
    lecture: "lecture-31",
    lectureNo: 31,
    question: "Differential Interest Rate (DIR) approach provides loans to weaker sections at interest rate of:",
    options: ["2% per annum", "4% per annum", "6% per annum", "8% per annum"],
    correct: 1,
    explanation: "Under Differential Interest Rate (DIR) approach, loans are given to the weaker sections at 4 per cent per annum. This is a concessional rate to support economically weaker sections."
  },
  {
    id: "d241x_042",
    subject: "da-241",
    lecture: "lecture-33",
    lectureNo: 33,
    question: "The Lead Bank Scheme was established in which year?",
    options: ["1965", "1969", "1975", "1982"],
    correct: 1,
    explanation: "The Lead Bank Scheme came into force from 1969. The National Credit Council appointed a study group under Prof. D.R. Gadgil in 1969 which recommended 'Service Area Approach.' RBI then appointed Nariman Committee which recommended the Lead Bank Scheme."
  },
  {
    id: "d241x_043",
    subject: "da-241",
    lecture: "lecture-33",
    lectureNo: 33,
    question: "RBI was established under RBI Act of 1934 in which year?",
    options: ["1930", "1932", "1935", "1937"],
    correct: 2,
    explanation: "The Reserve Bank of India was established in 1935 under the RBI Act, 1934. It was set up to regulate the issue of bank notes and keeping up resources with a view to securing monetary stability in the country."
  },
  {
    id: "d241x_044",
    subject: "da-241",
    lecture: "lecture-33",
    lectureNo: 33,
    question: "National Agricultural Credit (Long-term Operations) Fund was started with initial capital of:",
    options: ["Rs. 1 crore", "Rs. 5 crores", "Rs. 10 crores", "Rs. 50 crores"],
    correct: 2,
    explanation: "National Agricultural Credit (Long-term operations) fund started in 1955 with initial capital of Rs.10 crores and annual contribution of Rs.5 crores (later increased to Rs.15 crores). This fund provides long-term loans to state governments for cooperative credit institutions."
  },
  {
    id: "d241x_045",
    subject: "da-241",
    lecture: "lecture-22",
    lectureNo: 22,
    question: "Which principle of cooperation states 'one man one vote'?",
    options: ["Principle of Service", "Principle of Democratic Organization", "Principle of Open Membership", "Principle of Honorary Service"],
    correct: 1,
    explanation: "Principle of Democratic Organization: Co-operatives are organized and managed based on the principle of democracy. Each member is given equal right to vote irrespective of share capital. 'One man one vote' is the important principle of cooperation."
  },
  {
    id: "d241x_046",
    subject: "da-241",
    lecture: "lecture-21",
    lectureNo: 21,
    question: "Double entry bookkeeping system requires how many entries per transaction?",
    options: ["One entry (debit only)", "One entry (credit only)", "Two entries (debit and credit)", "Three entries"],
    correct: 2,
    explanation: "Double entry system is a method of recording each transaction in two-fold aspects - two entries are made for each transaction: one debit entry and one credit entry. The receiving account is a debtor and the giving account is a creditor."
  },
  {
    id: "d241x_047",
    subject: "da-241",
    lecture: "lecture-21",
    lectureNo: 21,
    question: "Which type of bookkeeping system is more suitable for small Indian farmers with limited transactions?",
    options: ["Double entry system", "Single entry system", "Triple entry system", "Cash basis only system"],
    correct: 1,
    explanation: "Single-entry system is suitable for majority of small Indian farmers. For big farms with many transactions, double entry system should be used. Single entry is simple - income on one side and expenditure on other side."
  },
  {
    id: "d241x_048",
    subject: "da-241",
    lecture: "lecture-22",
    lectureNo: 22,
    question: "'Dry farming' is cultivation in areas where annual rainfall is:",
    options: ["Less than 500 mm per annum", "Less than 750 mm per annum", "Between 750 mm and 1150 mm", "More than 1150 mm"],
    correct: 1,
    explanation: "Dry farming means cultivation of crops in areas where rainfall is less than 750 mm per annum. Dryland farming is cultivation in regions with annual rainfall more than 750 mm. Rainfed farming is in regions with rainfall more than 1150 mm."
  },
  {
    id: "d241x_049",
    subject: "da-241",
    lecture: "lecture-22",
    lectureNo: 22,
    question: "In Mixed Farming, the livestock/allied enterprises must contribute what percentage of gross income?",
    options: ["At least 5% but not more than 25%", "At least 10% but not more than 49%", "At least 25% but not more than 75%", "At least 50% but not more than 90%"],
    correct: 1,
    explanation: "Mixed Farming: enterprises like livestock, poultry, fisheries, bee keeping etc. are supposed to contribute at least 10% of gross income, but this contribution should not exceed 49%. No single enterprise should dominate beyond 49%."
  },
  {
    id: "d241x_050",
    subject: "da-241",
    lecture: "lecture-23",
    lectureNo: 23,
    question: "A farm plan should have which important characteristic?",
    options: ["It should be oral and informal", "It should be written and flexible", "It should be rigid and unchangeable", "It should be based only on short-term goals"],
    correct: 1,
    explanation: "Characteristics of a good farm plan: It should be WRITTEN, it should be FLEXIBLE, provide for efficient use of resources, have balanced combination of enterprises, avoid excessive risks, utilize farmer's knowledge, provide for efficient marketing and borrowing."
  },
  {
    id: "d241x_051",
    subject: "da-241",
    lecture: "lecture-38",
    lectureNo: 38,
    question: "The word 'market' comes from the Latin word:",
    options: ["Marcatus (meaning merchandise or trade)", "Mercado (meaning exchange)", "Marche (meaning movement)", "Markus (meaning value)"],
    correct: 0,
    explanation: "The word market comes from the Latin word 'marcatus' which means merchandise or trade or a place where business is conducted."
  },
  {
    id: "d241x_052",
    subject: "da-241",
    lecture: "lecture-38",
    lectureNo: 38,
    question: "Local or Village Markets primarily exist for:",
    options: ["Durable goods like jute and tea", "Industrial machinery and equipment", "Perishable commodities in small lots like local milk or vegetables", "World commodities like coffee and gold"],
    correct: 2,
    explanation: "Local or Village Markets: buying and selling confined among buyers and sellers drawn from same village or nearby villages. These markets exist mostly for perishable commodities in small lots, e.g., local milk market or vegetable market."
  },
  {
    id: "d241x_053",
    subject: "da-241",
    lecture: "lecture-38",
    lectureNo: 38,
    question: "In 'Forward Markets', the exchange of commodity takes place:",
    options: ["Immediately after the sale (spot market)", "On some specified date in the future", "After payment of full price upfront", "Through barter without money"],
    correct: 1,
    explanation: "Forward Markets: purchase and sale of a commodity takes place at time 't' but the exchange of commodity takes place on some specified date in future (t+1). Sometimes even on the future date, only price differences are paid rather than physical exchange."
  },
  {
    id: "d241x_054",
    subject: "da-241",
    lecture: "lecture-39",
    lectureNo: 39,
    question: "Which characteristic of agricultural commodities makes it almost impossible for producers to fix a reserve price?",
    options: ["Seasonality of production", "Bulkiness of products", "Perishability of the product", "Small size of holdings"],
    correct: 2,
    explanation: "Perishability of the Product: marketing of farm products is virtually a race with death and decay. Their perishability makes it almost impossible for producers to fix the reserve price for their farm-grown products."
  },
  {
    id: "d241x_055",
    subject: "da-241",
    lecture: "lecture-40",
    lectureNo: 40,
    question: "In a Perfect market, prices at different locations of the same market area are uniform:",
    options: ["Absolutely, without any conditions", "Plus or minus the cost of transport between surplus and deficit areas", "Only when government fixes them", "Only during peak seasons"],
    correct: 1,
    explanation: "In perfect market, prices are uniform over a geographical area, PLUS OR MINUS the cost of getting supplies from surplus to deficit areas; and uniform over time, plus or minus the cost of storage from one period to another."
  },
  {
    id: "d241x_056",
    subject: "da-241",
    lecture: "lecture-41",
    lectureNo: 41,
    question: "When Indian farmers purchase electricity for irrigation, they operate in which type of market?",
    options: ["Oligopoly market", "Duopoly market", "Monopoly market", "Perfect competition market"],
    correct: 2,
    explanation: "Indian farmers operate in a monopoly market when purchasing electricity for irrigation (only one seller - electricity board). A monopsony market exists when there is only one buyer of a product."
  },
  {
    id: "d241x_057",
    subject: "da-241",
    lecture: "lecture-41",
    lectureNo: 41,
    question: "Monopolistic competition in input markets for farmers is exemplified by:",
    options: ["One government supplier of fertilizers", "Two companies selling the same pesticide", "Multiple brands of insecticides, pump sets, fertilizers at different prices", "Government price control on all inputs"],
    correct: 2,
    explanation: "Monopolistic competition: large number of sellers deal in heterogeneous and differentiated commodities. Example: farmers choosing between various makes of insecticides, pump sets, fertilizers and equipment - all for same basic purpose but differentiated by trade marks."
  },
  {
    id: "d241x_058",
    subject: "da-241",
    lecture: "lecture-43",
    lectureNo: 43,
    question: "The 'Hatha System' (Under Cover of Cloth) method of buying/selling involves:",
    options: ["Open auction where highest bidder wins", "Settling prices by pressing/twisting fingers under cloth using code symbols", "Sample quotation method where agent visits buyers", "Fixed price sales determined by government"],
    correct: 1,
    explanation: "Hatha System (Under Cover of Cloth): prices are settled by buyer and commission agent of seller by pressing/twisting fingers of each other under cover of a piece of cloth. Code symbols are associated with the twisting of fingers."
  },
  {
    id: "d241x_059",
    subject: "da-241",
    lecture: "lecture-43",
    lectureNo: 43,
    question: "Which method of buying and selling of farm produce is preferred in most regulated markets for ensuring fair dealing?",
    options: ["Hatha system", "Dara sale method", "Open auction method", "Private negotiations method"],
    correct: 2,
    explanation: "Open Auction Method is preferred because it ensures fair dealing to all parties and farmers with superior quality produce receive higher prices. In most regulated markets, sale of produce is permissible ONLY by the open auction method."
  },
  {
    id: "d241x_060",
    subject: "da-241",
    lecture: "lecture-43",
    lectureNo: 43,
    question: "Storage function adds what utility to farm products?",
    options: ["Place utility", "Form utility", "Time utility", "Possession utility"],
    correct: 2,
    explanation: "Storage adds TIME utility to products. Transportation adds PLACE utility. Buying and selling adds POSSESSION utility. Processing adds FORM utility. Storage involves holding and preserving goods from production until they are needed for consumption."
  },
  {
    id: "d241x_061",
    subject: "da-241",
    lecture: "lecture-33",
    lectureNo: 33,
    question: "NABARD operates through its head office at Mumbai and how many regional offices?",
    options: ["10 regional offices", "17 regional offices", "25 regional offices", "32 regional offices"],
    correct: 1,
    explanation: "NABARD operates through its head office at Mumbai and 17 regional offices (one each in major states), 10 sub-offices in smaller states/UTs and 213 district offices."
  },
  {
    id: "d241x_062",
    subject: "da-241",
    lecture: "lecture-34",
    lectureNo: 34,
    question: "The Crop Loan System was introduced throughout India in which year?",
    options: ["1960", "1962", "1965", "1970"],
    correct: 2,
    explanation: "Though recommended by AIRCSC (1954) and V.L. Mehra Committee (1960), the crop loan system was introduced throughout India in 1965, and in Andhra Pradesh from Kharif, 1966. Its twin objectives are treating crop as security and fixing finance based on cost of cultivation."
  },
  {
    id: "d241x_063",
    subject: "da-241",
    lecture: "lecture-34",
    lectureNo: 34,
    question: "Scale of Finance for each district is fixed by which committee?",
    options: ["State Level Bankers Committee (SLBC)", "District Level Technical Committee (DLTC)", "National Agricultural Credit Committee", "Reserve Bank of India directly"],
    correct: 1,
    explanation: "Scale of finance is fixed for each district by District Level Technical Committee (DLTC). Members include representatives of lead bank, NABARD, local cooperative banks, commercial banks, officials of agriculture and animal husbandry departments. Chaired by District Magistrate/Collector."
  },
  {
    id: "d241x_064",
    subject: "da-241",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "'Specialized farming' advantage of 'Allows Better Marketing' means:",
    options: ["Farmer has to search for many different markets", "Farmer is saved from finding markets for diversified products, allowing better assembling, grading and financing", "Prices are always higher in specialized markets", "Government support is available only for specialized farmers"],
    correct: 1,
    explanation: "Under specialized farming, on marketing front, the farmer is better placed - saved from the pressure of finding market if selling diversified products. It allows better marketing functions including assembling, grading, financing, etc."
  },
  {
    id: "d241x_065",
    subject: "da-241",
    lecture: "lecture-20",
    lectureNo: 20,
    question: "IFFCO (Indian Farmers Fertilizer Cooperative Limited) was established at:",
    options: ["Hyderabad, Andhra Pradesh", "Kandla, Gujarat", "Pune, Maharashtra", "Chennai, Tamil Nadu"],
    correct: 1,
    explanation: "During the Fourth Five-Year Plan (1969-1974), Indian Farmers Fertilizer Cooperative Limited (IFFCO) was established at Kandla, Gujarat. This was aimed at providing fertilizers through cooperative channels to farmers."
  },
  {
    id: "d241x_066",
    subject: "da-241",
    lecture: "lecture-20",
    lectureNo: 20,
    question: "Vaikunth Mehta National Institute of Cooperative Management (VAMNICOM) was started in:",
    options: ["1965 at Hyderabad", "1967 at Poona", "1970 at Delhi", "1975 at Mumbai"],
    correct: 1,
    explanation: "In the year 1967, Vaikunth Mehta National Institute of Cooperative Management (VAMNICOM) was started in Poona, during the period after the third five-year plan (1966-1968 annual plans)."
  },
  {
    id: "d241x_067",
    subject: "da-241",
    lecture: "lecture-37",
    lectureNo: 37,
    question: "Break-Even Point (BEP) formula using algebraic approach is:",
    options: ["BEP = P / (F-V)", "BEP = F / (P-V)", "BEP = (F+V) / P", "BEP = F x P x V"],
    correct: 1,
    explanation: "BEP = F/(P-V) where BEP = Break-even point, F = Fixed costs in Rs. per hectare, P = Price per quintal in Rs., V = Variable costs per quintal in Rs. At BEP, costs equal revenue (contribution margin equals fixed costs)."
  },
  {
    id: "d241x_068",
    subject: "da-241",
    lecture: "lecture-21",
    lectureNo: 21,
    question: "In farm accounting, a 'Trial Balance' serves as:",
    options: ["A record of daily transactions", "A summary of all income and expenses", "A test of arithmetic accuracy of postings in the ledger", "A forecast of future farm income"],
    correct: 2,
    explanation: "Trial balance is a list of total amounts or balances of debit and credit of ledger accounts prepared to check arithmetical accuracy of postings. It is a TEST OF ACCURACY. In single-entry system, accuracy cannot be tested by trial balance (only possible in double entry system)."
  },
  {
    id: "d241x_069",
    subject: "da-241",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "'Ranching' in the context of farming types refers to:",
    options: ["Growing crops on terraced hill areas", "Grazing of livestock on public pastures not fit for cultivation", "Mixed farming with both crops and animals", "Intensive dairy farming"],
    correct: 1,
    explanation: "Ranching: Grazing of livestock on public pastures is called ranching. These lands are not fit for cultivation. It is a type of farming where animals graze on natural grasslands."
  },
  {
    id: "d241x_070",
    subject: "da-241",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "In 'Diversified Farming', no single enterprise should contribute more than what percentage of total farm income?",
    options: ["25%", "33%", "50%", "75%"],
    correct: 2,
    explanation: "In diversified farming, no single enterprise contributes as high as 50 per cent of the total income derived in farming. There is not much significance for a single enterprise under this situation - hence called 'general farming.'"
  },
  {
    id: "d241x_071",
    subject: "da-241",
    lecture: "lecture-28",
    lectureNo: 28,
    question: "Farmer Cooperative Societies (FCS) are classified into types based on:",
    options: ["Size of farm holding only", "Need - credit societies, marketing societies, land acquisition, and sakalarta societies", "Geographic location only", "Government regulation type"],
    correct: 1,
    explanation: "Based on need, FCS are divided into: (1) Cooperative credit societies, (2) Marketing societies, (3) Land acquisition cooperative societies, and (4) Sakalarta agricultural cooperative societies (multi-purpose)."
  },
  {
    id: "d241x_072",
    subject: "da-241",
    lecture: "lecture-28",
    lectureNo: 28,
    question: "Marketing cooperative societies provide inputs to farmers at:",
    options: ["Market price plus commission", "Reasonable prices", "Import parity prices", "Government notified prices only"],
    correct: 1,
    explanation: "Marketing cooperative societies provide inputs to farmers at reasonable prices. The part of profits is given as token to farmer members, and part is used for machinery purchase which is provided on rent to farmers on need basis."
  },
  {
    id: "d241x_073",
    subject: "da-241",
    lecture: "lecture-30",
    lectureNo: 30,
    question: "Murray (1953) defined Agricultural Finance as:",
    options: ["A branch of agricultural economics dealing with financial resources of individual farm units", "An economic study of borrowing funds by farmers, organization of farm lending agencies, and society's interest in credit for agriculture", "The study of money markets for agricultural commodities", "The analysis of government subsidies in agriculture"],
    correct: 1,
    explanation: "Murray (1953): Agricultural finance is 'an economic study of borrowing funds by farmers, the organization and operation of farm lending agencies and of society's interest in credit for agriculture.' Tandon and Dhondyal (1962) defined it as a branch of agricultural economics dealing with financial resources of individual farm units."
  },
  {
    id: "d241x_074",
    subject: "da-241",
    lecture: "lecture-30",
    lectureNo: 30,
    question: "Macro-finance in agricultural finance deals with:",
    options: ["Financial management of individual farm business units", "Total credit needs of agricultural sector, terms and methods of use of total credit", "Personal loans of farmers for household needs", "International agricultural credit transactions"],
    correct: 1,
    explanation: "Macro-finance deals with the aspects relating to total credit needs of the agricultural sector, the terms and conditions under which credit is available, and the method of use of total credit for the development of agriculture. Micro-finance refers to financial management of individual farm business."
  },
  {
    id: "d241x_075",
    subject: "da-241",
    lecture: "lecture-32",
    lectureNo: 32,
    question: "RBI extends refinance facility to Regional Rural Banks (RRBs) to the extent of:",
    options: ["25% of outstanding advances", "50% of outstanding advances", "75% of outstanding advances", "100% of outstanding advances"],
    correct: 1,
    explanation: "RBI extends refinance facility to RRBs only to an extent of 50 per cent of outstanding advances. Cash Liquidity Ratio (CLR) and CRR for cooperatives, FSSs, RRBs and ADBs are fixed at lower level than those for commercial banks, and bank rate is 3% less."
  },
  {
    id: "d241x_076",
    subject: "da-241",
    lecture: "lecture-11",
    lectureNo: 11,
    question: "Average Variable Cost (AVC) curve reaches its minimum when:",
    options: ["Total Product is maximum", "Average Physical Product (APP) is maximum", "Marginal cost equals zero", "Total fixed cost is minimum"],
    correct: 1,
    explanation: "AVC falls to minimum level at the output level where APP (Average Physical Product) is maximum. AVC is the reciprocal of APP curve. Thereafter AVC rises. MC curve intersects AVC and AC at their minimum points."
  },
  {
    id: "d241x_077",
    subject: "da-241",
    lecture: "lecture-13",
    lectureNo: 13,
    question: "Marginal Revenue (MR) is expressed as:",
    options: ["TR/Q", "P x Q", "Change in TR / Change in Q (or TRn - TRn-1)", "TR - TC"],
    correct: 2,
    explanation: "MR = deltaTR/deltaQ = Change in total revenue / Change in quantity. In other form, MRn = TRn - TRn-1. It is the net addition to total revenue by selling an additional unit of the good."
  },
  {
    id: "d241x_078",
    subject: "da-241",
    lecture: "lecture-11",
    lectureNo: 11,
    question: "Assertion (A): Average Fixed Cost (AFC) curve is continuously declining and has the shape of a hyperbola.\\nReason (R): Total Fixed Cost remains constant regardless of output level, so as output increases, AFC (TFC/Q) continuously falls.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "AFC = TFC/Q. Since TFC is constant, as output Q increases, AFC decreases continuously, forming a hyperbola (never reaches zero). R correctly explains A - the constant TFC distributed over increasing output causes the continuous decline."
  },
  {
    id: "d241x_079",
    subject: "da-241",
    lecture: "lecture-22",
    lectureNo: 22,
    question: "Which principle of cooperation encourages 'propensity to save' among cooperative members?",
    options: ["Principle of Education", "Principle of Service", "Principle of Thrift", "Principle of Publicity"],
    correct: 2,
    explanation: "Principle of Thrift: co-operatives must aim at inculcating the habit of thrift (propensity to save) among members. Thrift and service are part and parcel of cooperation. Thrift is the basis of self-help and must precede credit - priority should be given to members who save."
  },
  {
    id: "d241x_080",
    subject: "da-241",
    lecture: "lecture-33",
    lectureNo: 33,
    question: "National Agricultural Credit (Stabilization Fund) was started in 1956 for:",
    options: ["Providing long-term loans to state governments for cooperative societies", "Granting medium-term loans to State Cooperative Banks during natural calamities", "Financing individual farmers directly", "Capitalization of NABARD"],
    correct: 1,
    explanation: "National Agricultural Credit (Stabilization Fund) started in 1956 with RBI's initial contribution of Rs.1 crore and subsequent annual contribution of Rs.1 crore. It is utilized for granting medium-term loans to State Co-operative Banks (SCBs) especially during famines, droughts and other natural calamities."
  },
  {
    id: "d241x_081",
    subject: "da-241",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "'Discontinuous or discrete production function' arises for inputs that:",
    options: ["Can be divided into smaller doses and measured continuously", "Cannot be divided into smaller units and hence are used in whole numbers", "Are always fixed in the short run", "Have constant marginal productivity"],
    correct: 1,
    explanation: "Discontinuous/discrete production function arises for inputs or work units which cannot be divided into smaller units and hence are used in whole numbers. Example: number of ploughings, weedings and harvestings. Continuous functions arise for divisible inputs like seeds and fertilizers."
  },
  {
    id: "d241x_082",
    subject: "da-241",
    lecture: "lecture-43",
    lectureNo: 43,
    question: "Dara Sale Method in agricultural marketing has a disadvantage that:",
    options: ["It takes too long to sell produce", "Good quality and poor quality produce fetch the same price, reducing incentive for quality production", "It requires government intervention", "It is only available in regulated markets"],
    correct: 1,
    explanation: "Dara Sale Method: produce in different lots is mixed and sold as one lot. Disadvantage: produce of good quality and poor quality fetch the SAME price. This causes loss of incentive for the farmer to cultivate good quality products. This method is common for crops like zeera."
  },
  {
    id: "d241x_083",
    subject: "da-241",
    lecture: "lecture-43",
    lectureNo: 43,
    question: "Transportation as a marketing function adds which utility to goods?",
    options: ["Time utility", "Form utility", "Place utility", "Possession utility"],
    correct: 2,
    explanation: "Transportation adds PLACE utility to goods by moving products between places. Storage adds TIME utility. Processing adds FORM utility. Buying and selling adds POSSESSION utility."
  },
  {
    id: "d241x_084",
    subject: "da-241",
    lecture: "lecture-40",
    lectureNo: 40,
    question: "Under Perfect Competition, the demand curve of an individual firm is:",
    options: ["Downward sloping like the market demand curve", "Upward sloping showing increasing revenue", "A horizontal (perfectly elastic) straight line at the market price", "Vertical (perfectly inelastic) line"],
    correct: 2,
    explanation: "While the industry demand curve is downward sloping, the demand curve for an individual perfectly competitive firm is HORIZONTAL (completely elastic) at the level of the ruling market price. This is because the firm takes price as given and can sell any amount at that price."
  },
  {
    id: "d241x_085",
    subject: "da-241",
    lecture: "lecture-39",
    lectureNo: 39,
    question: "The 'bulkiness' characteristic of agricultural commodities primarily affects:",
    options: ["Perishability and decay rate", "Price determination in forward markets", "Transportation and storage costs (restricting location to near consumption areas)", "Quality variation and grading"],
    correct: 2,
    explanation: "Bulkiness of most farm products makes transportation and storage difficult and expensive, restricting the location of production to somewhere near the place of consumption or processing. The price spread in bulky products is higher because of higher costs of transportation and storage."
  },
  {
    id: "d241x_086",
    subject: "da-241",
    lecture: "lecture-44",
    lectureNo: 44,
    question: "Assertion (A): In perfect market, costs of production do not enter into the calculation of the seller in a market period.\\nReason (R): In a market period, the supply is fixed (cannot be increased), so price is determined only by demand forces.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "In the very short run/market period, the stock is limited and cannot be produced to meet increased demand. Supply is fixed (period too short to change production). Hence the market price is determined mainly by demand, and production costs are irrelevant. R correctly explains A."
  },
  {
    id: "d241x_087",
    subject: "da-241",
    lecture: "lecture-31",
    lectureNo: 31,
    question: "Match the following:\\n     Column-I (Security Type)      |  Column-II (Description)           |  Column-III (Example)\\nA.  Collateral Security           |  1.  Movable properties pledged    |  i.   LIC bonds, warehouse receipts\\nB.  Chattel loans                |  2.  Pledging to pawn-brokers       |  ii.  Jewellery, utensils\\nC.  Simple mortgage              |  3.  Ancestral property             |  iii. Registration required\\nD.  Equitable mortgage           |  4.  Self-acquired property         |  iv.  No registration required",
    options: ["A-1-i, B-2-ii, C-3-iii, D-4-iv", "A-2-i, B-1-ii, C-4-iii, D-3-iv", "A-1-ii, B-2-i, C-3-iv, D-4-iii", "A-3-i, B-4-ii, C-2-iii, D-1-iv"],
    correct: 0,
    explanation: "Collateral security uses movable properties (LIC bonds, FD bonds, warehouse receipts, machinery, livestock). Chattel loans use movable properties pledged to pawn-brokers (jewellery, utensils). Simple mortgage is for ancestrally inherited property (needs registration). Equitable mortgage is for self-acquired property (no registration required)."
  },
  {
    id: "d241x_088",
    subject: "da-241",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "According to Agricultural Production Economics, the subject matter relates to:",
    options: ["Only maximizing single crop production", "Choice of production patterns and resource use to maximize farmer's objective within limited resources", "Government policy on farm subsidies", "Import and export of agricultural commodities"],
    correct: 1,
    explanation: "Agricultural Production Economics is concerned with the choice of production patterns and resource use in order to maximize the objective function of farmers, their families, the society or the nation within a framework of limited resources. It is applied principles of choice on capital, labour, land and management."
  },
  {
    id: "d241x_089",
    subject: "da-241",
    lecture: "lecture-38",
    lectureNo: 38,
    question: "'Secular Markets' are markets that are:",
    options: ["Short period markets for perishables", "Long period markets for food grains", "Permanent markets for durable goods that can be stored for many years", "Regional markets for oilseeds"],
    correct: 2,
    explanation: "Secular markets are of permanent nature. The commodities traded are durable in nature and can be stored for many years. Examples are markets for machinery and manufactured goods. On the basis of time, markets are: short-period, long-period, and secular."
  },
  {
    id: "d241x_090",
    subject: "da-241",
    lecture: "lecture-33",
    lectureNo: 33,
    question: "The CRAFICARD committee that recommended NABARD was chaired by:",
    options: ["Prof. D.R. Gadgil", "Sri. B. Sivaraman", "Sri. F.K.F Nariman", "Sri. A.D. Gorwala"],
    correct: 1,
    explanation: "CRAFICARD (Committee to Review Arrangements for Institutional Credit in Agricultural and Rural Development) in 1979, under the chairmanship of Sri. B. Sivaraman (former member of planning commission), recommended setting up a national level institution called NABARD."
  },
  {
    id: "d241x_091",
    subject: "da-241",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "When manufacturing costs can fall to 70-90% by doubling output due to technical economies of scale, this is because of:",
    options: ["External economies with university partnerships", "Improving efficiency of production processes and investing in efficient equipment", "Reducing number of workers", "Government tax incentives"],
    correct: 1,
    explanation: "Technical Economies of Scale: by improving efficiency and size of production processes, when a business doubles output, manufacturing costs can fall to 70%-90% due to investing in more efficient equipment and labour specialization. Example: dividing production processes makes workers more efficient and specialized."
  },
  {
    id: "d241x_092",
    subject: "da-241",
    lecture: "lecture-22",
    lectureNo: 22,
    question: "The 1912 Cooperative Societies Act provided legal protection to:",
    options: ["Only credit cooperatives", "Only rural cooperatives", "All types of cooperatives", "Only urban cooperatives with non-agriculturists"],
    correct: 2,
    explanation: "1912 Cooperative Societies Act rectified shortcomings of 1904 Act. It provided legal protection to ALL types of cooperatives. Liability is limited for primary societies and unlimited for central societies. It led to emergence of rural cooperatives on both credit and non-credit fronts."
  },
  {
    id: "d241x_093",
    subject: "da-241",
    lecture: "lecture-23",
    lectureNo: 23,
    question: "The Cooperative Planning Committee (1945) under R.G. Saraiya pointed out limited progress of cooperatives was due to:",
    options: ["High interest rates", "Laissez-faire policy of Government and illiteracy of people", "Excessive government control", "Lack of demand for cooperative credit"],
    correct: 1,
    explanation: "The Cooperative Planning Committee (CPC) in 1945 under Sri. R.G. Saraiya pointed out that limited progress of cooperatives was due to: 1) Laissez-faire policy of Government and 2) Illiteracy of the people."
  },
  {
    id: "d241x_094",
    subject: "da-241",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "'Transformation period' or 'production period' is defined as:",
    options: ["The market period for selling farm produce", "The time required for a resource to be completely transformed into a product", "The planning period for farm management", "The time between planting and harvesting"],
    correct: 1,
    explanation: "Transformation period (or production period): the time required for a resource to be completely transformed into a product. There are two types: Short run (one or more resources fixed) and Long run (all resources can be varied)."
  },
  {
    id: "d241x_095",
    subject: "da-241",
    lecture: "lecture-31",
    lectureNo: 31,
    question: "'Marketing loans' in agricultural credit are meant to:",
    options: ["Fund farm production operations", "Purchase tractors and tube wells", "Help farmers overcome distress sales and market produce at remunerative prices", "Support household consumption needs of farmers"],
    correct: 2,
    explanation: "Marketing loans are meant to help farmers overcome DISTRESS SALES and to market produce in a better way. Commercial banks advance 75% of value of produce (based on warehouse receipt). These loans help farmers clear off debts and dispose produce at remunerative prices."
  },
  {
    id: "d241x_096",
    subject: "da-241",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Stage I of production function ends when:",
    options: ["Total Product is maximum", "Marginal Product becomes zero", "Marginal Product equals Average Product (APP is maximum)", "Average Product becomes zero"],
    correct: 2,
    explanation: "Stage I ends at the point where MPP = APP, i.e., where APP is Maximum. Stage I starts from origin (zero input) and is characterized by MPP > APP (irrational/sub-optimal zone). Stage II starts where APP is maximum and ends where TPP is maximum (MPP = 0)."
  },
  {
    id: "d241x_097",
    subject: "da-241",
    lecture: "lecture-39",
    lectureNo: 39,
    question: "Why does the price of agricultural products fluctuate substantially compared to manufactured goods?",
    options: ["Agricultural products have higher quality than manufactured goods", "Irregular and uncertain supply combined with relatively constant demand", "Government interference in agricultural markets is excessive", "Manufactured goods have more substitutes"],
    correct: 1,
    explanation: "Supply of agricultural products is uncertain and irregular because of dependence on natural conditions. With varying supply and demand remaining almost constant, prices of agricultural products fluctuate substantially. Manufactured goods can adjust supply to be uniform throughout the year."
  },
  {
    id: "d241x_098",
    subject: "da-241",
    lecture: "lecture-44",
    lectureNo: 44,
    question: "As per DA-241 notes, SFDA was recommended by:",
    options: ["V.L. Mehta Committee (1959)", "All India Rural Credit Review Committee under Venkatappaiah (1969)", "Gadgil Committee (1969)", "Mac Lagan Committee (1915)"],
    correct: 1,
    explanation: "All India Rural Credit Review Committee (AIRCRC) under Sri. B. Venkatappaiah submitted final report in 1969 and recommended: (1) Setting up of Small Farmers Development Agency (SFDA) and MFAL, (2) Setting up of Rural Electrification Corporation (REC), among other measures."
  },
  {
    id: "d241x_099",
    subject: "da-241",
    lecture: "lecture-43",
    lectureNo: 43,
    question: "'Grading and Standardization' as a marketing function primarily helps in:",
    options: ["Increasing the physical quantity of farm produce", "Facilitating movement of produce by establishing grades enabling buyers to buy without inspecting every lot", "Reducing the number of intermediaries in marketing channel", "Providing time utility to farm produce"],
    correct: 1,
    explanation: "Grading and standardization is a marketing function which facilitates movement of produce by establishing uniform grades. It enables buyers to purchase without inspecting every lot, and helps quality conscious producers get premium prices."
  },
  {
    id: "d241x_100",
    subject: "da-241",
    lecture: "lecture-34",
    lectureNo: 34,
    question: "Assertion (A): The crop loan system treats the crop itself as security instead of immovable property like land.\\nReason (R): The eligibility to receive a loan is measured not by ownership of land but by the fact that the farmer needs credit for cultivation.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 1,
    explanation: "Both A and R are true but R does NOT explain A. The twin objectives of the crop loan system are: (1) treating the crop as security instead of immovable property, and (2) fixing the scale of finance based on actual farm expenditure. The eligibility criterion (R) is a separate feature, not the reason for treating crop as security."
  },
'''

# Combined questions for DA-241 (80 needed)
da241_combined_qs = '''
  {
    id: "d241c_001",
    subject: "da-241",
    question: "Which of the following is a 'stock resource' in agricultural production?",
    options: ["Services of labourer on a specific day", "Water flowing in river", "Seeds stored for planting next season", "Daily sunshine for crops"],
    correct: 2,
    explanation: "Stock resources can be stored for use later, e.g., seeds. Flow resources like daily labour services cannot be stored. Land and buildings are fixed resources. Flowing water is a flow resource."
  },
  {
    id: "d241c_002",
    subject: "da-241",
    question: "The production function Y = f(X1, X2,...Xn) where all inputs are variable represents:",
    options: ["Short run production", "Long run production", "Fixed input production", "Constant returns production"],
    correct: 1,
    explanation: "Long run production function: Y = f(X1, X2,...Xn) - all inputs are variable. Short run: Y = f(X1, X2 / X3...Xn) where X3...Xn are fixed inputs."
  },
  {
    id: "d241c_003",
    subject: "da-241",
    question: "Elasticity of Production (Ep) equals 1 at which stage boundary?",
    options: ["At the end of Stage II", "At the beginning of Stage III", "At the end of Stage I (where MPP = APP)", "At maximum TPP"],
    correct: 2,
    explanation: "Ep = MPP/APP. Ep = 1 when MPP = APP, which is at the end of Stage I (beginning of Stage II). Ep > 1 in Stage I, 0 < Ep < 1 in Stage II, Ep = 0 at end of Stage II, Ep < 0 in Stage III."
  },
  {
    id: "d241c_004",
    subject: "da-241",
    question: "Which of the following correctly defines 'Marginal Product' (MP)?",
    options: ["Total product divided by total input", "Average product multiplied by price", "Additional quantity of output resulting from one additional unit of input", "Minimum product at any input level"],
    correct: 2,
    explanation: "MP = dY/dX = Change in total product / Change in input. It is the additional quantity of output resulting from an additional unit of input. AP = Y/X is Average Product."
  },
  {
    id: "d241c_005",
    subject: "da-241",
    question: "At which point does the Marginal Cost (MC) curve intersect the Average Variable Cost (AVC) curve?",
    options: ["At maximum AVC", "At minimum AVC", "At minimum MC", "At zero output"],
    correct: 1,
    explanation: "MC curve intersects both AVC and AC (Average Cost) curves at their MINIMUM points. This is because when MC is below average cost, average cost is falling; when MC is above average cost, average cost is rising."
  },
  {
    id: "d241c_006",
    subject: "da-241",
    question: "A market where the same basic product is sold under different trade names by many sellers at different prices is:",
    options: ["Pure oligopoly", "Monopoly", "Monopolistic competition", "Perfect competition"],
    correct: 2,
    explanation: "Monopolistic competition: large number of sellers deal in heterogeneous and differentiated forms of a commodity, marked by different trade marks. Different prices prevail for the same basic product. Examples: various brands of fertilizers, insecticides for farmers."
  },
  {
    id: "d241c_007",
    subject: "da-241",
    question: "The formula for Total Revenue (TR) is:",
    options: ["TR = P + Q", "TR = P x Q", "TR = P / Q", "TR = Q - P"],
    correct: 1,
    explanation: "TR = P x Q, where P = Price of the good and Q = Quantity sold. Average Revenue AR = TR/Q = P. Marginal Revenue MR = deltaAR/deltaQ."
  },
  {
    id: "d241c_008",
    subject: "da-241",
    question: "The Cooperative Credit Societies Act of 1904 classified cooperative societies into:",
    options: ["Credit and non-credit societies", "Central and primary societies", "Rural and urban societies", "Producers and consumers societies"],
    correct: 2,
    explanation: "1904 Act classified cooperative societies into RURAL (having 4/5ths members from farming community) and URBAN (having 4/5ths members from non-agriculturists). Both were under control of Registrar of cooperatives."
  },
  {
    id: "d241c_009",
    subject: "da-241",
    question: "In the 'Open Loan' under hypothecated category, which statement is correct?",
    options: ["Agricultural produce is kept under bank control", "Physical possession is with borrower but legal ownership with lending institution", "Crop is pledged as security to pawn brokers", "Mortgage of immovable property is created"],
    correct: 1,
    explanation: "Open loans (hypothecated): only the physical possession of the purchased machinery rests with the borrower, but the LEGAL OWNERSHIP remains with the lending institution till the loan is repaid. Borrower can use the machinery to pay loan instalments."
  },
  {
    id: "d241c_010",
    subject: "da-241",
    question: "A farm plan's characteristic of 'balanced combination of enterprises' helps in:",
    options: ["Reducing government taxes", "Production of food/cash/fodder crops, maintaining soil fertility, increasing income, improving resource distribution", "Eliminating all farm risks", "Concentrating on one profitable enterprise only"],
    correct: 1,
    explanation: "Balanced combination of enterprises ensures: a) Production of food, cash and fodder crops; b) Maintain soil fertility; c) Increase in income; d) Improve distribution of land, use of labour, power and water requirement throughout the year."
  },
  {
    id: "d241c_011",
    subject: "da-241",
    question: "The 'Golden Era' of Indian cooperative movement (1919-1929) was a result of cooperatives becoming a provincial subject under which Act?",
    options: ["Government of India Act 1919", "Montague Chelmsford Act of 1919", "Indian Cooperative Act 1919", "Land Improvement Act 1919"],
    correct: 1,
    explanation: "Cooperative movement got impetus as cooperatives became a provincial subject under Montague Chelmsford Act of 1919. The economic prosperity during 1920-1929 also contributed to growth. Birth of Land Mortgage Banks took place during this period."
  },
  {
    id: "d241c_012",
    subject: "da-241",
    question: "In Short-period Markets, prices are governed mainly by:",
    options: ["Supply forces only", "Government regulation", "Demand forces mainly (supply is fixed in the very short term)", "Cost of production"],
    correct: 2,
    explanation: "In Short-period markets (for perishable products like fish, fresh vegetables, liquid milk), the products must be sold on that day. Supply is fixed. Hence prices are governed mainly by DEMAND rather than supply. In Long-period markets, both supply and demand govern prices."
  },
  {
    id: "d241c_013",
    subject: "da-241",
    question: "Which of the following is NOT an advantage of Diversified Farming?",
    options: ["Better utilization of farm resources", "Reduction of farm risks", "Flow of regular income", "Effective supervision of all enterprises"],
    correct: 3,
    explanation: "Diversified farming disadvantage: Ineffective supervision - presence of many enterprises will stand in the way of the farmer bestowing effective supervision. Advantages include better resource utilization, risk reduction, and regular income flow."
  },
  {
    id: "d241c_014",
    subject: "da-241",
    question: "Agricultural Production Economics is defined as an applied field where principles of choice are applied to:",
    options: ["Marketing of agricultural produce only", "Use of capital, labour, land and management resources in the farming industry", "Government subsidy allocation", "International trade in farm commodities"],
    correct: 1,
    explanation: "Agricultural Production Economics is an applied field of science wherein the principles of choice are applied to the use of CAPITAL, LABOUR, LAND and MANAGEMENT resources in the farming industry. It is concerned with productivity, use of credit, capital, risks and resource allocation."
  },
  {
    id: "d241c_015",
    subject: "da-241",
    question: "Under the 'Morghum Sale Method', goods are sold at:",
    options: ["A fixed price set in advance", "The price prevailing in the market on that day (based on verbal understanding)", "Price determined by open auction", "A price set by commission agent alone"],
    correct: 1,
    explanation: "Morghum Sale Method: sale is affected on verbal understanding that the price will be the one prevailing in the market on that day, or at the rate at which other sellers of the village sold the produce. Common in villages - farmers indebted to local money lenders."
  },
  {
    id: "d241c_016",
    subject: "da-241",
    question: "Law of Increasing Returns is also called:",
    options: ["Law of Decreasing Returns", "Law of Decreasing Costs", "Law of Constant Costs", "Law of Variable Proportions"],
    correct: 1,
    explanation: "Law of Increasing Returns is also called 'Law of Decreasing Costs' because increasing returns means lower costs per unit of output. The cost of each additional unit of output DECREASES as production increases. Decreasing returns = Law of Increasing Costs."
  },
  {
    id: "d241c_017",
    subject: "da-241",
    question: "Which stage of production is called 'supra-optimal zone' where producer should never operate?",
    options: ["Stage I", "Stage II", "Stage III", "Stage IV"],
    correct: 2,
    explanation: "Stage III is the irrational or supra-optimal zone. In Stage III, MPP is negative, TPP declines. The producer should never operate in this zone EVEN IF resources are available at free of cost, as MVP < MFC and adding more input reduces output."
  },
  {
    id: "d241c_018",
    subject: "da-241",
    question: "Which principle of cooperation is violated when a person is forced to join a cooperative?",
    options: ["Principle of Service", "Principle of Democratic Organization", "Principle of Open and Voluntary Association", "Principle of Thrift"],
    correct: 2,
    explanation: "Principle of Open and Voluntary Association: membership is open to everybody irrespective of caste, religion, social/political affiliations. There is NO COMPULSION to join or continue. Any time the member has freedom to withdraw from the society."
  },
  {
    id: "d241c_019",
    subject: "da-241",
    question: "For the purpose of granting medium-term loans to State Co-operative Banks during natural calamities, which fund is used?",
    options: ["National Agricultural Credit (Long-term Operations) Fund", "National Agricultural Credit (Stabilization Fund)", "NABARD Rural Infrastructure Fund", "State Cooperative Emergency Fund"],
    correct: 1,
    explanation: "National Agricultural Credit (Stabilization Fund) 1956 - utilized for granting medium-term loans to State Co-operative Banks (SCBs) especially during times of famines, droughts and other natural calamities when they are unable to repay their loans to RBI."
  },
  {
    id: "d241c_020",
    subject: "da-241",
    question: "Which committee recommended the formation of Cooperative Credit Societies on 'Raiffeissen model' of Germany?",
    options: ["Mac Lagan Committee", "Indian Famine Commission and Edward Law Committee (1901)", "Gorwala Committee (AIRCSC)", "Venkatappaiah Committee"],
    correct: 1,
    explanation: "During 1901, Indian Famine Commission and another committee headed by Sir Edward Law recommended the formation of credit societies on Raiffeissen model. Federick Nicholson's report (1892) also raised the slogan 'Find Raiffeissen' - these recommendations resulted in 1904 Act."
  },
  {
    id: "d241c_021",
    subject: "da-241",
    question: "Match the following types of farming:\\n     Column-I (Type)         |  Column-II (Characteristic)\\nA.  Specialized farming    |  1.  Livestock contributes 10-49% income\\nB.  Diversified farming   |  2.  One enterprise > 50% of income\\nC.  Mixed farming         |  3.  No single enterprise > 50% income\\nD.  Dry farming           |  4.  Rainfall < 750 mm per annum",
    options: ["A-2, B-3, C-1, D-4", "A-1, B-2, C-3, D-4", "A-3, B-2, C-4, D-1", "A-2, B-4, C-1, D-3"],
    correct: 0,
    explanation: "Specialized: one enterprise dominates (>50% income). Diversified: no single enterprise >50% income (general farming). Mixed farming: livestock/allied enterprises contribute 10-49% of gross income. Dry farming: rainfall <750 mm per annum (crop failures common)."
  },
  {
    id: "d241c_022",
    subject: "da-241",
    question: "The 'Ledger' in farm accounting is described as:",
    options: ["A daily diary of all transactions", "The main book containing classified record of all transactions with separate accounts", "A trial balance sheet of income and expenses", "A cash book recording only cash transactions"],
    correct: 1,
    explanation: "Ledger is the main book of account containing a classified and summarized record of ALL transactions transferred from journal. There are separate accounts and at year-end, each account contains all transactions for that account. It serves as permanent record for debtors and creditors."
  },
  {
    id: "d241c_023",
    subject: "da-241",
    question: "Consumption loans in agricultural credit are extended mainly to areas hit by:",
    options: ["Market price crashes", "Natural calamities", "Oversupply of farm produce", "Government policy changes"],
    correct: 1,
    explanation: "Consumption loans (not for production) are not widely advanced and are restricted to areas hit by NATURAL CALAMITIES. Extended on group guarantee basis (max 3 members), repayable within 5 crop seasons or 2.5 years whichever is less. Rate of interest around 11%."
  },
  {
    id: "d241c_024",
    subject: "da-241",
    question: "During the Eighth Five Year Plan (1992-1997), cooperative policy emphasized:",
    options: ["Establishing new cooperative credit societies", "Replication of Anand Pattern for milk cooperatives and strengthening processing cooperatives", "Introducing single window system of credit", "Setting up of SFDA and MFAL"],
    correct: 1,
    explanation: "Eighth Five-Year Plan (1992-1997) emphasized: (1) Replication of Anand Pattern of cooperatives for milk, and (2) Strengthening of processing cooperatives. The Seventh Plan (1985-1990) introduced the single window system of credit in Andhra Pradesh."
  },
  {
    id: "d241c_025",
    subject: "da-241",
    question: "The Cooperative Societies Act of 1904 salient feature specifying 'one man one vote' is which type of principle?",
    options: ["Principle of limited liability", "Principle of democratic governance", "Principle of voluntary membership", "Principle of profit sharing"],
    correct: 1,
    explanation: "1904 Act specified the principle of 'one man one vote' which is a principle of DEMOCRATIC GOVERNANCE - each member has equal voting rights regardless of their shareholding. Loans could be extended on personal and collateral security."
  },
  {
    id: "d241c_026",
    subject: "da-241",
    question: "Assertion (A): Under perfect competition, both the firm and industry demand curves are downward sloping.\\nReason (R): Perfectly competitive firm is a price taker that sells a homogeneous product and cannot influence market price.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 3,
    explanation: "A is FALSE. Under perfect competition, the INDUSTRY demand curve slopes downward, but the INDIVIDUAL FIRM's demand curve is HORIZONTAL (perfectly elastic) at the market price - not downward sloping. R is true - the firm is a price taker and sells homogeneous product."
  },
  {
    id: "d241c_027",
    subject: "da-241",
    question: "National Cooperative Development Corporation (NCDC) was established in:",
    options: ["1956", "1963", "1969", "1975"],
    correct: 1,
    explanation: "During Third Five-Year Plan (1961-1966), National Cooperative Development Corporation (NCDC) was established in 1963 and also National Federation of Cooperative Sugar Factories (NFCSF)."
  },
  {
    id: "d241c_028",
    subject: "da-241",
    question: "For the break-even analysis, 'Contribution Margin' is estimated by:",
    options: ["Fixed costs minus variable costs", "Price per unit minus variable costs per unit", "Total revenue minus fixed costs", "Marginal cost minus marginal revenue"],
    correct: 1,
    explanation: "Contribution Margin = Price per unit (P) - Variable costs per unit (V). At Break-Even Point, Contribution Margin equals Fixed Costs. BEP = F/(P-V). At quantities smaller than BEP, there is a loss; at larger quantities, there is profit."
  },
  {
    id: "d241c_029",
    subject: "da-241",
    question: "The establishment of NABARD in 1982 was due to the merger of:",
    options: ["Only ARDC with RBI", "ARDC, Agricultural Credit Department (ACD) and Rural Planning and Credit Cell (RPCC) of RBI", "All commercial banks' agricultural divisions", "State cooperative banks"],
    correct: 1,
    explanation: "NABARD was formed by merging: (1) Agricultural Refinance and Development Corporation (ARDC), (2) Agricultural Credit Department (ACD) of RBI, and (3) Rural Planning and Credit Cell (RPCC) of RBI. Share capital of Rs.500 crore equally from Government of India and RBI."
  },
  {
    id: "d241c_030",
    subject: "da-241",
    question: "A 'Profit and Loss Account' in farm accounting determines:",
    options: ["The value of farm assets and liabilities", "The total profit or loss at end of year from nominal accounts", "The daily cash receipts and payments", "The estimated future farm income"],
    correct: 1,
    explanation: "Profit and Loss Account is prepared at end of year. Balances of all nominal accounts (wages, rent, gains, losses, income, expenses) are included. If debit side > credit side = net loss; if credit side > debit side = net profit."
  },
  {
    id: "d241c_031",
    subject: "da-241",
    question: "In the Balance Sheet, if assets exceed liabilities, this indicates:",
    options: ["Net worth of farm is negative and person is indebted", "Net worth of farm is positive (capital is surplus)", "Farm is at break-even point", "Farm has equal assets and liabilities"],
    correct: 1,
    explanation: "Balance Sheet: if assets exceed liabilities - net worth is POSITIVE (capital is surplus). If liabilities exceed assets - net worth is negative (person is indebted). If equal - capital is just enough to discharge the liability."
  },
  {
    id: "d241c_032",
    subject: "da-241",
    question: "Which of these is NOT a feature of the Crop Loan System?",
    options: ["Crop is treated as security", "Finance is fixed based on cost of cultivation", "Loan eligibility depends on land ownership", "Loans include both cash and kind components"],
    correct: 2,
    explanation: "The crop loan system's eligibility is NOT measured by ownership of land, but by the fact that the farmer is a real farmer who needs credit for cultivation. The other three are salient features of crop loan system."
  },
  {
    id: "d241c_033",
    subject: "da-241",
    question: "RBI functions in rural credit under three aspects - provision of finance, promotional activities, and:",
    options: ["Agricultural subsidies", "Regulatory functions", "Cooperative training", "Price support"],
    correct: 1,
    explanation: "The three aspects of RBI's role in rural credit: (1) Provision of finance (through commercial banks, cooperatives, RRBs), (2) Promotional activities (study teams, surveys), and (3) Regulatory functions (Banking Regulation Act 1966, supervision of cooperative and commercial banks)."
  },
  {
    id: "d241c_034",
    subject: "da-241",
    question: "In a duopoly market, there are:",
    options: ["Only one seller", "Only two sellers", "Only two buyers", "More than two but few sellers"],
    correct: 1,
    explanation: "A duopoly market has ONLY TWO SELLERS of a commodity. They may mutually agree to charge a common price higher than the hypothetical competitive price. A market with only two buyers is called duopsony. Oligopoly has more than two but still few sellers."
  },
  {
    id: "d241c_035",
    subject: "da-241",
    question: "The 'Reserve Price' in agricultural marketing refers to:",
    options: ["The maximum price a buyer is willing to pay", "The price set by government for farm produce", "The minimum price below which the seller will refuse to sell", "The average price in the market"],
    correct: 2,
    explanation: "Reserve Price: the price below which the seller will refuse to sell and will hold back the whole stock for a better time. For perishable goods, there is no reserve price since they must be sold on that day. For non-perishable goods, reserve price concept applies."
  },
  {
    id: "d241c_036",
    subject: "da-241",
    question: "Which of the following is an Internal Economy of Scale?",
    options: ["A pharmaceutical company sharing research with a university (external)", "Splitting workers to specialize in tasks in a motor vehicle factory", "An industry cluster sharing common infrastructure", "Industry-wide technology improvement"],
    correct: 1,
    explanation: "Internal Technical Economy of Scale example: splitting up workers to specialize in tasks in motor vehicle production (requires less training, more efficiency). External economy example: pharmaceutical company teaming up with university to share research costs."
  },
  {
    id: "d241c_037",
    subject: "da-241",
    question: "Assertion (A): Agricultural Production Economics is concerned with any phenomena having a bearing on economic efficiency in agricultural resource use.\\nReason (R): The production economist studies how to organize resources to maximize single commodity production and what combination of commodities to produce.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 1,
    explanation: "Both A and R are true but R does not explain A. A is correct per definition. R describes two broad categories of decisions (organizing resources to maximize single commodity output, and what combination to produce) but these are separate points that do not causally explain A."
  },
  {
    id: "d241c_038",
    subject: "da-241",
    question: "Match the following agricultural market types:\\n     Column-I (Basis)      |  Column-II (Type)     |  Column-III (Example)\\nA.  Demand/Area          |  1.  World market      |  i.   Coffee, gold\\nB.  Time span            |  2.  Short-period      |  ii.  Fish, liquid milk\\nC.  Nature of commodity  |  3.  Capital market    |  iii. Bonds, shares\\nD.  Transactions         |  4.  Forward market    |  iv.  Future date exchange",
    options: ["A-1-i, B-2-ii, C-3-iii, D-4-iv", "A-2-ii, B-1-i, C-4-iv, D-3-iii", "A-1-ii, B-2-i, C-3-iv, D-4-iii", "A-4-i, B-3-ii, C-2-iii, D-1-iv"],
    correct: 0,
    explanation: "World market (by area/demand): buyers/sellers worldwide, e.g., coffee, gold. Short-period market (by time): few hours, perishables like fish, liquid milk. Capital market (by commodity type): bonds, shares. Forward market (by transaction type): exchange on future specified date."
  },
  {
    id: "d241c_039",
    subject: "da-241",
    question: "The second phase costs in production economics are:",
    options: ["Fixed costs (land rent, taxes, depreciation)", "Variable costs (raw materials, labour, power, maintenance)", "Establishment costs (plant construction)", "Social costs (externalities)"],
    correct: 1,
    explanation: "Variable costs are called 'second phase costs.' Fixed costs include establishment costs as first phase costs. Variable costs include raw materials, labour, power, repairs, maintenance charges - these are also called working costs, operating costs, direct costs."
  },
  {
    id: "d241c_040",
    subject: "da-241",
    question: "The 'Journal' in farm bookkeeping:",
    options: ["Records only cash transactions", "Records original entries from diary in classified debit/credit form in order of dates", "Is the main permanent record for debtors and creditors", "Records only annual summary of income and expenses"],
    correct: 1,
    explanation: "Journal means daily record. Original entries from diary are written in journal in classified debit/credit form strictly in order of dates for easy posting to ledger. Journal records all transactions showing two-fold aspects in double entry system."
  },
  {
    id: "d241c_041",
    subject: "da-241",
    question: "Long-term agricultural loans are characterized as 'non-liquidating' because:",
    options: ["They require no security", "They are given for activities that take a long time to generate income for repayment (5-20+ years)", "They can never be repaid", "They are provided free of interest"],
    correct: 1,
    explanation: "Long-term loans (5 to more than 20 years) are for permanent improvements like land reclamation, farm buildings, purchase of tractors, orchards. These activities require large capital and take long time to generate income. Hence longer repayment period - called non-liquidating nature."
  },
  {
    id: "d241c_042",
    subject: "da-241",
    question: "The 'processing' characteristic of agricultural commodities increases price spread because:",
    options: ["Prices of raw materials are always low", "Processing firms enjoy monopsony/oligopsony positions and this creates disincentives for producers", "Processing is subsidized by government", "Consumers pay less for processed goods"],
    correct: 1,
    explanation: "Processing function increases the price spread of agricultural commodities. Processing firms enjoy the advantage of MONOPSONY, OLIGOPSONY or DUOPOLY in the market. This creates disincentives for producers and may adversely affect production in the next year."
  },
  {
    id: "d241c_043",
    subject: "da-241",
    question: "Under perfect competition, the demand for an individual firm's product becomes infinitely elastic because:",
    options: ["The firm is very large", "There are only a few buyers", "The product is homogeneous and the firm cannot influence market price, taking it as given", "Government regulates the price strictly"],
    correct: 2,
    explanation: "Under perfect competition, the firm offers homogeneous products and is so small relative to market that it cannot affect the market price. The firm simply takes price as given. With single price prevailing, the firm's demand curve is horizontal (infinitely elastic)."
  },
  {
    id: "d241c_044",
    subject: "da-241",
    question: "The NCDC's proposed amendment (Ninth Plan period) included expansion of NCDC's scope to include:",
    options: ["Only agricultural credit", "Animal husbandry, forestry, horticulture, pisciculture and livestock, industrial goods, handicrafts and services", "Only sugar cooperatives", "Only dairy cooperatives"],
    correct: 1,
    explanation: "Proposed NCDC Act amendment features: (a) expansion of scope to include animal husbandry, forestry, horticulture, pisciculture; (b) extension of coverage to livestock, industrial goods, handicrafts and services sector; (c) provision of loans directly to cooperative societies."
  },
  {
    id: "d241c_045",
    subject: "da-241",
    question: "The Law of Constant Returns (linear production function) is expressed as:",
    options: ["D1Y/D1X > D2Y/D2X", "D1Y/D1X = D2Y/D2X = DnY/DnX", "D1Y/D1X < D2Y/D2X", "D1Y/D1X + D2Y/D2X = 0"],
    correct: 1,
    explanation: "Constant Returns: each additional unit of input adds an equal amount to output. Algebraically: D1Y/D1X = D2Y/D2X = ... = DnY/DnX. The total product curve is linear (straight line). This relationship is not common in agriculture."
  },
  {
    id: "d241c_046",
    subject: "da-241",
    question: "Which of the following land records is useful for farm management?",
    options: ["Only crop production records", "Only livestock production records", "All of: land utilization, crop production, livestock, labour, machinery, feed, store register and farm inventory records", "Only labour and machinery records"],
    correct: 2,
    explanation: "Farm records useful to farmers: (1) Land utilization records, (2) Crop production and disposal records, (3) Livestock production records, (4) Labour records, (5) Machinery use records, (6) Feed records, (7) Store register, and (8) Farm inventory."
  },
  {
    id: "d241c_047",
    subject: "da-241",
    question: "For sheep and goat under the crop loan system unit cost, the minimum 'unit' is:",
    options: ["2 animals", "5 animals", "10 animals", "25 animals"],
    correct: 2,
    explanation: "Unit costs for livestock: for milch cattle the unit is two animals; for sheep and goat a MINIMUM OF 10 ANIMALS; for poultry a minimum of 500 birds. Scale of finance is fixed accordingly."
  },
  {
    id: "d241c_048",
    subject: "da-241",
    question: "Which committee in 1969 first recommended 'Service Area Approach' for development of financial structure?",
    options: ["Nariman Committee", "Gadgil Committee (National Credit Council Study Group)", "Venkatappaiah Committee (AIRCRC)", "Mac Lagan Committee"],
    correct: 1,
    explanation: "The study group appointed by National Credit Council (NCC) in 1969 under chairmanship of Prof. D. R. Gadgil recommended 'Service Area Approach'. RBI then appointed Nariman Committee to examine these recommendations, which endorsed and further recommended the Lead Bank Scheme."
  },
  {
    id: "d241c_049",
    subject: "da-241",
    question: "In the 'Quotations on Samples' method of agricultural marketing:",
    options: ["All produce is mixed and sold at one price", "Commission agent takes samples to buyers' shops instead of buyers coming to commission agent", "Prices are settled by finger-pressing under cloth", "Open auction is conducted for each sample"],
    correct: 1,
    explanation: "Quotations on Samples taken by Commission Agent: the commission agent takes the SAMPLE of produce to the shops of the buyer instead of the buyer going to the shop of the commission agent. This is one of the methods of buying and selling of farm products."
  },
  {
    id: "d241c_050",
    subject: "da-241",
    question: "The objectives of Agricultural Production Economics include:",
    options: ["Only profit maximization for farmers", "Determine conditions for optimum resource use, assess deviation from optimum, analyze factors responsible, and explain means to reach optimum", "Only food security planning", "Only export promotion"],
    correct: 1,
    explanation: "Four main objectives: (1) Determine and define conditions for optimum resource use, (2) Determine extent to which existing use deviates from optimum, (3) Analyze factors responsible for existing production pattern and resource use, (4) Explain means and methods for changing to optimum level."
  },
  {
    id: "d241c_051",
    subject: "da-241",
    question: "Rainfed farming is practiced in regions with annual rainfall of more than:",
    options: ["500 mm", "750 mm", "1150 mm", "1500 mm"],
    correct: 2,
    explanation: "Rainfed farming: crop production in regions with annual rainfall of MORE THAN 1150 mm. It is practiced in humid regions where crop failures are rare and drainage is the important problem. Emphasis is on disposal of excess water, maximum crop yield and high levels of inputs."
  },
  {
    id: "d241c_052",
    subject: "da-241",
    question: "Which type of cooperative society came first into existence for the first time in Punjab in 1924?",
    options: ["Primary Agricultural Credit Society", "District Cooperative Central Bank", "Land Mortgage Bank", "Consumer Cooperative"],
    correct: 2,
    explanation: "Land Mortgage Banks (LMBs) were first established in Punjab in 1924. They were established subsequently in Madras (1925) and Bombay (1926) during the Golden Era (1919-1929) of cooperative movement in India."
  },
  {
    id: "d241c_053",
    subject: "da-241",
    question: "The Deccan Agriculture Relief Act was enacted in which year, triggered by farmers' revolts against private money lenders?",
    options: ["1875", "1879", "1884", "1892"],
    correct: 1,
    explanation: "Revolts in Poona and Ahmedabad areas of Maharashtra against private money lenders attracted government attention. Government passed three acts: Deccan Agriculture Relief Act (1879), Land Improvement Loan Act (1883), and Agriculturists Loan Act (1884)."
  },
  {
    id: "d241c_054",
    subject: "da-241",
    question: "The Agricultural Refinance and Development Corporation (ARDC) merged into NABARD was created before NABARD. NABARD's initial share capital was:",
    options: ["Rs. 100 crores (from GOI only)", "Rs. 500 crores equally from Government of India and RBI", "Rs. 1000 crores from ARDC", "Rs. 200 crores from commercial banks"],
    correct: 1,
    explanation: "NABARD was established on July 12th, 1982 with share capital of Rs.500 crore EQUALLY contributed by Government of India and RBI. ARDC, ACD and RPCC of RBI were merged with NABARD. NABARD operates through 17 regional offices and 213 district offices."
  },
  {
    id: "d241c_055",
    subject: "da-241",
    question: "What are the twin objectives of the Crop Loan System?",
    options: ["Increasing farm production and reducing poverty", "Treating crop as security instead of land, and fixing finance based on cost of cultivation", "Providing subsidized credit and free inputs", "Linking cooperatives with commercial banks"],
    correct: 1,
    explanation: "The twin objectives of crop loan system: (1) Treating the CROP as security instead of immovable property like land, and (2) Fixing the scale of finance depending on the actual farm expenditure (based on cost of cultivation)."
  },
  {
    id: "d241c_056",
    subject: "da-241",
    question: "Match the following cost concepts:\\n     Column-I (Cost)   |  Column-II (Also Known As)   |  Column-III (Shape)\\nA.  TFC              |  1.  Overhead costs, sunk costs |  i.   Horizontal line\\nB.  TVC              |  2.  Working costs, prime costs |  ii.  Inverse S shape\\nC.  AFC              |  3.  Cost per unit of fixed input|  iii. Hyperbola (declining)\\nD.  AVC              |  4.  Cost per unit of variable   |  iv.  U-shaped",
    options: ["A-1-i, B-2-ii, C-3-iii, D-4-iv", "A-2-i, B-1-ii, C-4-iii, D-3-iv", "A-1-ii, B-2-i, C-3-iv, D-4-iii", "A-3-i, B-4-ii, C-2-iii, D-1-iv"],
    correct: 0,
    explanation: "TFC: also called overhead/sunk/indirect costs; graphically horizontal line. TVC: working/operating/prime/direct/circulating costs; inverse S-shape. AFC = TFC/Q: continuously declining hyperbola (as output increases). AVC = TVC/Q: U-shaped (reciprocal of APP curve)."
  },
  {
    id: "d241c_057",
    subject: "da-241",
    question: "In the Short Run production period, output can only be varied by:",
    options: ["Varying all factors of production", "Adding more fixed factors", "Intensive use of fixed resources through variable inputs", "Changing the technology used"],
    correct: 2,
    explanation: "Short run production period: one or more resources are fixed while others are variable. Output can be varied ONLY BY INTENSIVE USE OF FIXED RESOURCES through the variable resources. In long run, all resources can be varied."
  },
  {
    id: "d241c_058",
    subject: "da-241",
    question: "Which of the following is an example of 'production loan' (seasonal agricultural operation loan)?",
    options: ["Tractor purchase loan", "Land leveling loan", "Crop production loan for seeds and fertilizers", "Orchard establishment loan"],
    correct: 2,
    explanation: "Production loans (SAO loans / short-term loans / crop loans): credit given for crop production to increase production of crops. Repayable within 6-18 months in lumpsum from sale proceeds. Tractor purchase and land improvement are investment loans; orchard is long-term."
  },
  {
    id: "d241c_059",
    subject: "da-241",
    question: "'Social costs' (externalities) in production economics refer to:",
    options: ["Private costs of firms", "Costs borne by society such as environmental degradation, pollution, new diseases from irrigation", "Government subsidies to agriculture", "Import duties on agricultural machinery"],
    correct: 1,
    explanation: "Social costs: private firms incur private costs, but society bears additional costs as externalities - environmental degradation, water/air/noise pollution in areas where goods are produced. Example: ill-drained irrigation projects causing new diseases in command area."
  },
  {
    id: "d241c_060",
    subject: "da-241",
    question: "Under the 'Law of Variable Proportions', Samuelson's definition states that after a point, extra output from extra inputs will become:",
    options: ["More and more (increasing returns)", "Equal each time (constant returns)", "Less and less (diminishing returns to variable factor)", "Zero immediately after initial increase"],
    correct: 2,
    explanation: "Samuelson: 'An increase in some inputs relative to other fixed inputs will cause output to increase, but after a point, the extra output resulting from the same additions of extra inputs will become LESS AND LESS.' This describes diminishing returns to the variable factor."
  },
  {
    id: "d241c_061",
    subject: "da-241",
    question: "During the Seventh Five Year Plan (1985-1990), cooperatives in Andhra Pradesh were given which specific initiative?",
    options: ["Setting up of NCDC", "Introduction of single window system of credit", "IFFCO establishment at Kandla", "Replication of Anand Pattern for milk"],
    correct: 1,
    explanation: "Seventh Five-Year Plan (1985-1990) stressed: (a) Organizing special cooperative loan recovery camps; (b) Strengthening National and State Consumer Federation (NSCF); (c) Introduction of SINGLE WINDOW SYSTEM of credit in Andhra Pradesh."
  },
  {
    id: "d241c_062",
    subject: "da-241",
    question: "The principle of 'Pure Competition' differs from 'Perfect Competition' in that Pure Competition excludes:",
    options: ["Large number of buyers and sellers", "Homogeneous product", "Perfect mobility of resources and Perfect knowledge", "Free entry and exit of firms"],
    correct: 2,
    explanation: "Pure Competition differs from Perfect Competition in that it EXCLUDES the features of: (1) Perfect mobility of resources, and (2) Perfect knowledge. Pure competition still has large number of buyers/sellers, homogeneous product, and free entry/exit."
  },
  {
    id: "d241c_063",
    subject: "da-241",
    question: "Which type of mortgage requires no registration because the title deeds clearly specify ownership in the farmer-borrower's name?",
    options: ["Simple mortgage", "Equitable mortgage", "Chattel mortgage", "Fixed deposit mortgage"],
    correct: 1,
    explanation: "Equitable mortgage: when mortgaged property is SELF-ACQUIRED property of borrower, no registration is required because the ownership rights are clearly specified in title deeds in name of farmer-borrower. Simple mortgage (ancestrally inherited property) requires registration."
  },
  {
    id: "d241c_064",
    subject: "da-241",
    question: "In Agricultural Production Economics, 'productivity' refers to studying:",
    options: ["Only crop yields per acre", "Use and incomes from farm, return to scale, leasing, production possibilities, farming efficiency, credit use, risks", "Only macroeconomic policies affecting agriculture", "Only technology adoption"],
    correct: 1,
    explanation: "Production Economics is concerned with productivity covering: use and incomes from farm, return to scale, leasing, production possibilities, farming efficiency, soil conservation, use of credit and capital, risks and uncertainty which affect decision making."
  },
  {
    id: "d241c_065",
    subject: "da-241",
    question: "The Mac Lagan Committee (1915) observed which problems in cooperative societies?",
    options: ["Excessive government interference and high interest rates", "Illiteracy among members, misappropriation of funds, rampant nepotism, undue delays in sanctioning loans, irregularity in repayment", "Lack of cooperative network and poor infrastructure", "Excessive profits and poor governance"],
    correct: 1,
    explanation: "Mac Lagan Committee's important observations: (1) Illiteracy among members; (2) Misappropriation of funds; (3) Rampant nepotism; (4) Undue delays in sanctioning of loans; (5) Irregularity in repayment of loans. These led to specific reform suggestions."
  },
  {
    id: "d241c_066",
    subject: "da-241",
    question: "The planning commission was established in March 1950, and the first five-year plan's main objectives for cooperatives included:",
    options: ["Only agricultural credit expansion", "Involvement of cooperatives in rural development, development of credit system, extending cooperatives to farming/industry/housing/marketing, training", "Only price support for agricultural commodities", "Only consumer cooperative development"],
    correct: 1,
    explanation: "First Five-Year Plan (1951-1956) objectives for cooperatives: (1) Involvement in rural development programs; (2) Development of well-organized credit system; (3) Extending cooperatives to farming, industry, housing, marketing; (4) Training of higher-level personnel."
  },
  {
    id: "d241c_067",
    subject: "da-241",
    question: "The term 'Replacement cost' in farm accounting refers to:",
    options: ["The original purchase price of an asset", "The depreciation charged each year", "The difference between original purchase price and current price of the same asset", "The cost of maintaining farm equipment"],
    correct: 2,
    explanation: "Replacement costs: difference between the purchase price of the asset and the current price of the same asset. Example: tractor bought 10 years ago at Rs.1,50,000, current price Rs.2,50,000 - replacement cost is Rs.1,00,000. Historical cost is the original purchase price."
  },
  {
    id: "d241c_068",
    subject: "da-241",
    question: "Which of the following correctly describes 'Deflated Costs'?",
    options: ["Costs that are increasing over time", "Costs expressed at constant prices (deflated by general price index to remove inflation effect)", "Costs that remain fixed regardless of output", "Costs subsidized by government"],
    correct: 1,
    explanation: "Deflated costs: costs deflated by general price index are called deflated costs. By doing so, the effect of inflation in an economy is taken out. Example: Real cost of commodities uses deflated prices to compare costs across different time periods."
  },
  {
    id: "d241c_069",
    subject: "da-241",
    question: "The primary function of the 'Journal' in the double entry bookkeeping system is:",
    options: ["Summarizing accounts at year end", "Recording original diary entries in classified debit/credit form in date order for posting to ledger", "Checking arithmetical accuracy of ledger", "Recording only cash transactions"],
    correct: 1,
    explanation: "Journal (daily record): original entries from diary are written in journal in classified form of debits and credits (double entry form) strictly in order of dates, so they may be easily posted or transferred to the ledger. It is a book of original entry."
  },
  {
    id: "d241c_070",
    subject: "da-241",
    question: "The salient feature of Crop Loan System regarding the quantum of loan states it should be fixed according to:",
    options: ["Only the total land holding size", "Variety (local/improved/HYV), season, and type of crop (irrigated/rainfed)", "Credit history of the farmer only", "The market price of the crop"],
    correct: 1,
    explanation: "Quantum of loan under crop loan system should be fixed according to: (1) VARIETY - local, improved variety or HYV, (2) SEASON in which crop is grown, and (3) TYPE OF CROP - whether irrigated or rainfed. District Level Technical Committee (DLTC) fixes scale of finance."
  },
  {
    id: "d241c_071",
    subject: "da-241",
    question: "In Stage III of the production function, the Marginal Physical Product (MPP) is:",
    options: ["Maximum and positive", "Zero at start and positive throughout", "Declining but still positive", "Negative (less than zero)"],
    correct: 3,
    explanation: "Stage III: MPP becomes NEGATIVE. Total Physical Product declines at faster rate since MPP is negative. Elasticity of production (Ep) < 0. Variable resource is in excess capacity. Producer should never operate in Stage III even if resources are free of cost."
  },
  {
    id: "d241c_072",
    subject: "da-241",
    question: "Under the All India Rural Credit Survey Committee, the weakest link in the chain of cooperatives was identified as:",
    options: ["State Cooperative Banks", "District Cooperative Central Banks", "Primary Agricultural Credit Societies (PACS)", "National Cooperative Development Corporation"],
    correct: 2,
    explanation: "AIRCSC under Gorwala pointed out that the WEAKEST LINK in the chain of cooperatives was the Primary Agricultural Credit Societies (PACS). The committee also observed that 'Cooperation has failed in India but must succeed' and recommended integrated schemes."
  },
  {
    id: "d241c_073",
    subject: "da-241",
    question: "Which of the following is NOT a major objective of Agricultural Production Economics?",
    options: ["To determine conditions for optimum resource use", "To determine extent of deviation from optimum use", "To maximize food exports", "To explain means and methods for changing to optimum resource use"],
    correct: 2,
    explanation: "The four main objectives of Agricultural Production Economics do NOT include maximizing food exports. They are: (1) determine optimal conditions, (2) assess deviation from optimal, (3) analyze factors responsible for existing production patterns, and (4) explain means to reach optimum."
  },
  {
    id: "d241c_074",
    subject: "da-241",
    question: "In a 'Spot or Cash Market', the exchange of goods for money happens:",
    options: ["On a future specified date", "Within a year", "Immediately after the sale", "After price fluctuations settle"],
    correct: 2,
    explanation: "Spot or Cash Markets: goods are exchanged for money IMMEDIATELY after the sale. This is distinguished from Forward Markets where purchase/sale happens at time 't' but exchange happens at a future time t+1."
  },
  {
    id: "d241c_075",
    subject: "da-241",
    question: "The 'Separation of Costs' concept in theory of costs means:",
    options: ["Fixed costs can be separated from variable costs only in short run", "Separable costs can exclusively be attributed to production of specific output, while joint costs cannot", "Fixed and variable costs are always equal", "All costs are social in nature"],
    correct: 1,
    explanation: "Separable costs: can exclusively be attributed to production of output separately. Common costs (joint costs) cannot be separated to production of specific output - they are involved in producing several products. Example: electricity generation, ground water use."
  },
  {
    id: "d241c_076",
    subject: "da-241",
    question: "The Cooperative Credit Societies Act of 1912 specified that liability is:",
    options: ["Limited for all types of cooperative societies", "Unlimited for primary societies and limited for central societies", "Limited for primary societies and unlimited for central societies", "Equal for all types"],
    correct: 2,
    explanation: "1912 Cooperative Societies Act: liability is LIMITED in the case of primary societies and UNLIMITED for central societies. This was one of the important features that distinguished it from the 1904 Act which didn't have this differentiation."
  },
  {
    id: "d241c_077",
    subject: "da-241",
    question: "The 'Complete or Whole Farm Planning' is adopted when:",
    options: ["Simple improvements are needed for one enterprise", "Major changes are contemplated in the existing organization of entire farm business", "Only one resource needs to be substituted", "Minor adjustments in irrigation are required"],
    correct: 1,
    explanation: "Complete/whole farm planning: adopted when MAJOR CHANGES are contemplated in the existing organization of farm business. Simple farm planning is for a part of land, one enterprise, or substituting one resource for another. The process of change should always begin with simple plans."
  },
  {
    id: "d241c_078",
    subject: "da-241",
    question: "In the Classification of Markets based on Competition, which markets have 'No control over price' by individual sellers?",
    options: ["Monopoly markets", "Oligopoly markets", "Monopolistic competition markets", "Perfect competition markets (farm commodities)"],
    correct: 3,
    explanation: "Under perfect competition market structure: many sellers, homogeneous product, NO CONTROL OVER PRICE by individual firms - they are price takers. Farm commodities typically fall under this category. Monopoly has considerable control; oligopoly and monopolistic competition have some control over price."
  },
  {
    id: "d241c_079",
    subject: "da-241",
    question: "Which type of costs are 'first phase costs' in production economics?",
    options: ["Variable costs (working costs, operating costs)", "Establishment costs (plant construction costs)", "Implicit costs (owned resources)", "Social costs (externalities)"],
    correct: 1,
    explanation: "Establishment costs (construction of plant, licenses, site development, purchase of equipment, furniture, personnel expenditure, royalties, finance costs, maintenance of raw materials) are FIRST PHASE costs. Variable costs are called second phase costs."
  },
  {
    id: "d241c_080",
    subject: "da-241",
    question: "According to Prof. Galbraith's definition, credit is the:",
    options: ["Permanent transfer of money from lender to borrower", "Temporary transfer of asset from one who has to other who has not", "Long-term investment in agricultural enterprises", "Joint venture between farmer and bank"],
    correct: 1,
    explanation: "According to Professor Galbraith, credit is the 'temporary transfer of asset from one who has to other who has not.' The word 'credit' comes from Latin 'Credo' meaning 'I believe.' Credit is based on belief, confidence, trust and faith."
  },
'''

def append_questions(filepath, new_ts_block):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    insert_pos = content.rfind('];')
    new_content = content[:insert_pos] + '\n' + new_ts_block + '\n' + content[insert_pos:]
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Appended to {filepath}")

# Append to lecture file
lec_file = base + r'\da-241-lectures.ts'
comb_file = base + r'\da-241.ts'

append_questions(lec_file, da241_lecture_qs)
append_questions(comb_file, da241_combined_qs)

# Verify counts
import re
lec = open(lec_file, encoding='utf-8').read()
comb = open(comb_file, encoding='utf-8').read()
print(f"DA-241 lecture: {len(re.findall('correct:', lec))} questions")
print(f"DA-241 combined: {len(re.findall('correct:', comb))} questions")
