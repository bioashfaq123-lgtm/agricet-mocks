import re, random

def append_questions(filepath, new_ts_block):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    insert_pos = content.rfind('];')
    new_content = content[:insert_pos] + '\n' + new_ts_block + '\n' + content[insert_pos:]
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

def shuffle_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    pattern = re.compile(r'(options:\s*\[)(.*?)(\],\s*\n\s*correct:\s*)(\d)', re.DOTALL)
    def replacer(m):
        opts = re.findall(r'"((?:[^"\\]|\\.)*)"', m.group(2))
        if len(opts) != 4: return m.group(0)
        correct_text = opts[int(m.group(4))]
        rng = random.Random(abs(hash(m.group(2))) % (2**31))
        shuffled = opts[:]; rng.shuffle(shuffled)
        new_correct = shuffled.index(correct_text)
        new_opts = ', '.join(f'"{o}"' for o in shuffled)
        return f'{m.group(1)}{new_opts}{m.group(3)}{new_correct}'
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(pattern.sub(replacer, content))

LECTURE_FILE = r'C:\Users\bioas\Agricet Mock Test Series\src\data\questions\da-252-lectures.ts'
COMBINED_FILE = r'C:\Users\bioas\Agricet Mock Test Series\src\data\questions\da-252.ts'

lecture_questions = """  {
    id: "d252x_001",
    subject: "da-252",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Surveying is defined as the art of determination of which of the following on or near the surface of the earth?",
    options: ["Only horizontal distances", "Only vertical distances", "Horizontal distances, differences in elevation, directions, angles, locations, areas and volumes", "Only areas and volumes"],
    correct: 2,
    explanation: "Surveying involves measurement and recording of horizontal distances, differences in elevation, directions, angles, locations, areas and volumes on or near the earth's surface."
  },
  {
    id: "d252x_002",
    subject: "da-252",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Which type of survey takes into account the curvature of the earth?",
    options: ["Plane surveying", "Chain surveying", "Geodetic surveying", "Compass surveying"],
    correct: 2,
    explanation: "Geodetic surveying (also called trigonometrical surveying) takes into account the curvature of the earth as it covers large distances and areas."
  },
  {
    id: "d252x_003",
    subject: "da-252",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "In plane surveying, the earth's surface is considered as:",
    options: ["A sphere", "A curved surface", "A plane", "An ellipsoid"],
    correct: 2,
    explanation: "In plane surveying, the earth's surface is considered as a plane and the curvature of the earth is not taken into account, as the surveys extend only to small areas."
  },
  {
    id: "d252x_004",
    subject: "da-252",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Which classification of surveys is based on the nature of the field of survey?",
    options: ["Triangulation and traverse surveys", "Land, marine and astronomical surveys", "Chain, theodolite and compass surveys", "Archaeological, geological and mine surveys"],
    correct: 1,
    explanation: "Classification based on the nature of the field includes: Land Surveys, Marine or Navigation Surveys, and Astronomical Surveys."
  },
  {
    id: "d252x_005",
    subject: "da-252",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Agricultural surveying is a form of which type of surveying?",
    options: ["Geodetic surveying", "Simple plane surveying", "Astronomical surveying", "Marine surveying"],
    correct: 1,
    explanation: "Agricultural surveying is a simple plane surveying that includes laying out contour lines, terrace lines, drainage lines, and computing field and farm areas."
  },
  {
    id: "d252x_006",
    subject: "da-252",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Which of the following is the most accurate method of measuring distance in surveying?",
    options: ["Pacing", "Judging distance", "Odometer method", "Chaining"],
    correct: 3,
    explanation: "Chaining (measuring distance with chain or tape) is the most accurate of all direct methods of measuring distance and is commonly used in surveying."
  },
  {
    id: "d252x_007",
    subject: "da-252",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "A passometer is a watch-like instrument used in surveying primarily to:",
    options: ["Measure vertical distances", "Record the number of paces automatically", "Measure number of wheel revolutions", "Set right angles in the field"],
    correct: 1,
    explanation: "The passometer is carried in a person's pocket or tied on the leg. It records paces automatically, overcoming the monotony and strain of counting manually."
  },
  {
    id: "d252x_008",
    subject: "da-252",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "An odometer in surveying measures:",
    options: ["The number of paces of the surveyor", "The number of revolutions of a wheel", "The vertical height of terrain", "The horizontal angle between two lines"],
    correct: 1,
    explanation: "An odometer measures the number of revolutions of a wheel. The number of revolutions multiplied by the circumference of the wheel gives the distance covered."
  },
  {
    id: "d252x_009",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "A metric chain as per IS 1492-1956 is made in lengths of:",
    options: ["10 and 20 meters", "20 and 30 meters", "30 and 50 meters", "50 and 100 meters"],
    correct: 1,
    explanation: "IS 1492-1956 specifies that chains are made in lengths of 20 and 30 meters. A 20m chain has 100 links and a 30m chain has 150 links."
  },
  {
    id: "d252x_010",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The length of each link in a 20m metric chain is:",
    options: ["0.1 m (10 cm)", "0.2 m (20 cm)", "0.3 m (30 cm)", "0.5 m (50 cm)"],
    correct: 1,
    explanation: "In a 20m metric chain with 100 links, the length of each link is 0.2 m (20 cm). A 30m chain has 150 links with the same 0.2m link length."
  },
  {
    id: "d252x_011",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Gunter's chain is also called:",
    options: ["Revenue chain", "Surveyor's chain", "Engineer's chain", "Steel band"],
    correct: 1,
    explanation: "Gunter's chain is also called the surveyor's chain. It is 66 ft long and divided into 100 links. It is convenient for measuring distances in miles and furlongs."
  },
  {
    id: "d252x_012",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The Gunter's chain is used in which area measurement where 10 square Gunter's chains equal one acre?",
    options: ["Metric system", "Cadastral survey", "Mile-furlong-acre system", "Engineering survey"],
    correct: 2,
    explanation: "Gunter's chain (66 ft, 100 links) has a simple relation to the mile (80 chains = 1 mile, 10 chains = 1 furlong) and acre (10 square chains = 1 acre)."
  },
  {
    id: "d252x_013",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The Revenue chain is commonly used for measuring fields in cadastral survey. Its length is:",
    options: ["100 ft with 100 links", "66 ft with 100 links", "33 ft with 16 links", "20 m with 100 links"],
    correct: 2,
    explanation: "The Revenue chain is 33 ft long and divided into 16 links. It is commonly used for measuring fields in cadastral survey."
  },
  {
    id: "d252x_014",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The Engineer's chain is used on all engineering surveys and has dimensions of:",
    options: ["66 ft, 100 links", "100 ft, 100 links", "33 ft, 16 links", "20 m, 100 links"],
    correct: 1,
    explanation: "The Engineer's chain is 100 ft long and divided into 100 links (each link = 1 ft). Distances measured with it are recorded in feet and decimals."
  },
  {
    id: "d252x_015",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The invar tape used for high-precision surveys is made of an alloy of:",
    options: ["Steel (80%) and copper (20%)", "Steel (64%) and nickel (36%)", "Iron (70%) and zinc (30%)", "Stainless steel (90%) and chromium (10%)"],
    correct: 1,
    explanation: "The invar tape is made of an alloy of steel (64%) and nickel (36%). It has a very low coefficient of thermal expansion (0.6×10⁻⁴ per °C) making it ideal for precision work."
  },
  {
    id: "d252x_016",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Ranging rods are made in two sizes, namely:",
    options: ["1 m and 2 m", "2 m and 3 m", "3 m and 5 m", "5 m and 10 m"],
    correct: 1,
    explanation: "Ranging rods are made in two sizes: 2 m and 3 m. They are divided into equal parts of 0.2 m and painted alternately red and white (or black and white) to make them visible."
  },
  {
    id: "d252x_017",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Arrows (chain pins) in chain surveying are used to:",
    options: ["Mark right angles", "Mark the end of each chain length during chaining", "Mark the position of the compass", "Mark contour lines"],
    correct: 1,
    explanation: "Arrows (chain pins) are used to mark the end of each chain during the process of chaining. Each chain comes with 10 arrows, made of 4 mm (8 s.w.g.) metallic wire, 400 mm long."
  },
  {
    id: "d252x_018",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "How many arrows accompany each chain in chain surveying?",
    options: ["5", "8", "10", "12"],
    correct: 2,
    explanation: "Accompanying each chain are 10 arrows (also called marking or chaining pins). They are made of 4 mm diameter metallic wire, 400 mm in length."
  },
  {
    id: "d252x_019",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "A plumb bob in surveying is used primarily to:",
    options: ["Measure angles between lines", "Locate points directly below or above another point", "Range lines over obstacles", "Measure offsets from the chain line"],
    correct: 1,
    explanation: "A plumb bob consists of a metal weight (brass) with a pointed end suspended by a string. It is used to locate points directly below or above another point and for centering instruments."
  },
  {
    id: "d252x_020",
    subject: "da-252",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "A cross-staff in chain surveying is used for:",
    options: ["Measuring the length of chain lines", "Setting out right angles to a chain line", "Measuring angles between two chain lines", "Recording the number of chains measured"],
    correct: 1,
    explanation: "A cross-staff is used for setting out right angles (perpendicular offsets) to a chain line. Types include open cross-staff and French cross-staff."
  },
  {
    id: "d252x_021",
    subject: "da-252",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "An optical square is a surveying instrument used for:",
    options: ["Measuring vertical angles", "Setting out right angles more precisely than a cross-staff", "Measuring distances by optical means", "Drawing plans in the office"],
    correct: 1,
    explanation: "An optical square is used for setting out right angles to a chain line. It is more precise than a cross-staff and uses the principle of double reflection by two mirrors at 45° to each other."
  },
  {
    id: "d252x_022",
    subject: "da-252",
    lecture: "lecture-12",
    lectureNo: 12,
    question: "The prismatic compass in surveying is used for measuring:",
    options: ["Distance along a chain line", "Magnetic bearings of survey lines", "Vertical angles and elevations", "Right-angle offsets"],
    correct: 1,
    explanation: "The prismatic compass is used for measuring the magnetic bearings of survey lines. It allows the surveyor to read the bearing directly through a prism while sighting the object."
  },
  {
    id: "d252x_023",
    subject: "da-252",
    lecture: "lecture-13",
    lectureNo: 13,
    question: "In compass surveying, the bearing of a line measured from the north in a clockwise direction is called:",
    options: ["Reduced bearing", "Back bearing", "Fore bearing", "Whole circle bearing"],
    correct: 3,
    explanation: "A whole circle bearing (WCB) is the angle measured from the North direction in a clockwise direction, ranging from 0° to 360°. Reduced bearing is measured from N or S towards E or W."
  },
  {
    id: "d252x_024",
    subject: "da-252",
    lecture: "lecture-13",
    lectureNo: 13,
    question: "The fore bearing and back bearing of a line differ by:",
    options: ["45°", "90°", "180°", "360°"],
    correct: 2,
    explanation: "The back bearing of a line differs from the fore bearing by exactly 180°. If the fore bearing is θ, then the back bearing is (θ + 180°) if θ < 180°, or (θ - 180°) if θ > 180°."
  },
  {
    id: "d252x_025",
    subject: "da-252",
    lecture: "lecture-15",
    lectureNo: 15,
    question: "Soil and water conservation practices are primarily aimed at:",
    options: ["Increasing rainfall in dry areas", "Preventing erosion and conserving moisture for sustainable agriculture", "Draining excess water from waterlogged areas only", "Increasing groundwater extraction"],
    correct: 1,
    explanation: "Soil and water conservation aims to prevent soil erosion, conserve moisture, maintain soil fertility, and ensure sustainable agricultural productivity."
  },
  {
    id: "d252x_026",
    subject: "da-252",
    lecture: "lecture-18",
    lectureNo: 18,
    question: "Which irrigation method involves applying water directly to the soil surface in channels or borders?",
    options: ["Sprinkler irrigation", "Drip irrigation", "Surface irrigation", "Sub-surface irrigation"],
    correct: 2,
    explanation: "Surface irrigation involves applying water directly to the soil surface through channels, borders, basins, or furrows. It is the most traditional and widely used irrigation method."
  },
  {
    id: "d252x_027",
    subject: "da-252",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "In sprinkler irrigation, water is applied in the form of drops of size:",
    options: ["0.05 to 0.25 mm", "0.5 to 4 mm", "4 to 10 mm", "10 to 20 mm"],
    correct: 1,
    explanation: "In sprinkler irrigation, water is applied in the form of drops of 0.5 to 4 mm size, similar to rainfall. The operating pressure is typically 2 to 5 kg/cm²."
  },
  {
    id: "d252x_028",
    subject: "da-252",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "The operating pressure required for sprinkler irrigation systems is typically:",
    options: ["0.2 to 0.5 kg/cm²", "0.5 to 1.0 kg/cm²", "2 to 5 kg/cm²", "10 to 15 kg/cm²"],
    correct: 2,
    explanation: "Sprinkler irrigation systems require an operating pressure of 2 to 5 kg/cm² to propel water through nozzles and form the fine droplet spray pattern."
  },
  {
    id: "d252x_029",
    subject: "da-252",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "Which of the following is NOT a component of a sprinkler irrigation system?",
    options: ["Pump", "Main line and sub-main line", "Lateral pipes with sprinkler nozzles", "Emitters and drippers"],
    correct: 3,
    explanation: "Emitters and drippers are components of drip irrigation, not sprinkler irrigation. Sprinkler systems consist of pump, main line, sub-main line, lateral pipes, and sprinkler nozzles."
  },
  {
    id: "d252x_030",
    subject: "da-252",
    lecture: "lecture-20",
    lectureNo: 20,
    question: "Drip irrigation was developed by:",
    options: ["Dr. Norman Borlaug in 1960", "Symcha Blass in 1964", "Dr. M.S. Swaminathan in 1970", "William Shockley in 1955"],
    correct: 1,
    explanation: "Drip irrigation (trickle irrigation) was developed by Symcha Blass in 1964. It involves applying water directly to the root zone through emitters at low pressure."
  },
  {
    id: "d252x_031",
    subject: "da-252",
    lecture: "lecture-20",
    lectureNo: 20,
    question: "Which two countries have the largest area under drip irrigation in the world at approximately 1.5 million hectares each?",
    options: ["China and India", "Israel and Australia", "USA and Spain", "Brazil and Mexico"],
    correct: 2,
    explanation: "USA and Spain each have approximately 1.5 million hectares under drip irrigation, making them the top two countries globally. India has about 1.43 million hectares."
  },
  {
    id: "d252x_032",
    subject: "da-252",
    lecture: "lecture-20",
    lectureNo: 20,
    question: "Online pressure-compensating emitters in drip irrigation are designed to:",
    options: ["Increase water pressure in the main line", "Deliver a constant flow rate regardless of pressure variations", "Filter sediment from irrigation water", "Rotate to distribute water over a wide area"],
    correct: 1,
    explanation: "Online pressure-compensating emitters deliver a constant flow rate regardless of pressure variations along the lateral line, ensuring uniform water distribution."
  },
  {
    id: "d252x_033",
    subject: "da-252",
    lecture: "lecture-21",
    lectureNo: 21,
    question: "The working principle of a centrifugal pump involves:",
    options: ["Reciprocating pistons creating positive displacement", "Impeller rotation imparting kinetic energy to water", "Air pressure forcing water upward", "Gravity flow from an elevated tank"],
    correct: 1,
    explanation: "A centrifugal pump works by an impeller rotating inside a casing. The impeller imparts kinetic energy to water, which is then converted to pressure energy in the casing."
  },
  {
    id: "d252x_034",
    subject: "da-252",
    lecture: "lecture-21",
    lectureNo: 21,
    question: "Which type of centrifugal pump impeller is most suitable for pumping water containing sand and gravel (dredging)?",
    options: ["Closed impeller", "Semi-open impeller", "Open impeller", "Mixed-flow impeller"],
    correct: 2,
    explanation: "Open impellers are most suitable for pumping water containing sand, gravel, or debris (dredging). Closed impellers are used for clear water, and semi-open for moderately dirty water."
  },
  {
    id: "d252x_035",
    subject: "da-252",
    lecture: "lecture-21",
    lectureNo: 21,
    question: "Priming of a centrifugal pump refers to:",
    options: ["Adding oil to the pump bearings", "Filling the pump casing with water before starting", "Adjusting the impeller speed", "Connecting the discharge pipe to the motor"],
    correct: 1,
    explanation: "Priming involves filling the pump casing and suction pipe with water before starting. Centrifugal pumps cannot self-prime (unlike positive displacement pumps) and require priming."
  },
  {
    id: "d252x_036",
    subject: "da-252",
    lecture: "lecture-22",
    lectureNo: 22,
    question: "In a submersible pump, both the motor and pump are:",
    options: ["Placed above ground level on a platform", "Submerged in the water being pumped", "Located in a separate pump house near the well", "Connected by a long shaft from the surface"],
    correct: 1,
    explanation: "In a submersible pump, both the motor and the pump are submerged in the water being pumped. This eliminates priming problems and makes it suitable for deep tube wells."
  },
  {
    id: "d252x_037",
    subject: "da-252",
    lecture: "lecture-22",
    lectureNo: 22,
    question: "The minimum diameter of a tube well required to accommodate a submersible pump is:",
    options: ["50 mm", "75 mm", "100 mm", "150 mm"],
    correct: 2,
    explanation: "Submersible pumps require a minimum tube well diameter of 100 mm (10 cm) to be accommodated. They are suitable for deep tube wells and high lift applications."
  },
  {
    id: "d252x_038",
    subject: "da-252",
    lecture: "lecture-26",
    lectureNo: 26,
    question: "Which of the following is an advantage of greenhouse cultivation?",
    options: ["Lower initial investment compared to open field", "Only one crop can be grown per year", "4 to 5 crops can be grown per year", "Requires no environmental control systems"],
    correct: 2,
    explanation: "Greenhouse cultivation allows 4 to 5 crops per year (compared to 1-2 in open field), produces superior quality produce, enables pest control, and allows computer automation."
  },
  {
    id: "d252x_039",
    subject: "da-252",
    lecture: "lecture-27",
    lectureNo: 27,
    question: "A lean-to greenhouse is a type classified based on:",
    options: ["Covering material used", "Shape of the structure", "Size of the greenhouse", "Type of crops grown"],
    correct: 1,
    explanation: "Lean-to, even span, uneven span, ridge-and-furrow, saw-tooth, and quonset greenhouses are all classified based on the shape of the structure."
  },
  {
    id: "d252x_040",
    subject: "da-252",
    lecture: "lecture-27",
    lectureNo: 27,
    question: "Which greenhouse type is formed by joining two or more even span or uneven span greenhouses along their sides?",
    options: ["Lean-to", "Quonset", "Ridge-and-furrow (Gutter-connected)", "Saw-tooth"],
    correct: 2,
    explanation: "Ridge-and-furrow (also called gutter-connected) greenhouses are formed by joining two or more even span or uneven span units along their sides, sharing gutters/eaves for drainage."
  },
  {
    id: "d252x_041",
    subject: "da-252",
    lecture: "lecture-28",
    lectureNo: 28,
    question: "The ambient concentration of carbon dioxide (CO₂) in the atmosphere is approximately:",
    options: ["200 ppm", "280 ppm", "345 ppm", "500 ppm"],
    correct: 2,
    explanation: "The ambient (outside) concentration of CO₂ in the atmosphere is approximately 345 ppm. During active photosynthesis, plants draw greenhouse CO₂ down to below 200 ppm."
  },
  {
    id: "d252x_042",
    subject: "da-252",
    lecture: "lecture-30",
    lectureNo: 30,
    question: "The optimal CO₂ enrichment level in greenhouses for maximum plant growth is:",
    options: ["345 ppm (ambient level)", "500-700 ppm", "1000-1200 ppm", "2000-3000 ppm"],
    correct: 2,
    explanation: "The optimal CO₂ enrichment level for greenhouse plant growth is 1000-1200 ppm. Plants can draw CO₂ down below 200 ppm during photosynthesis, so enrichment boosts yield."
  },
  {
    id: "d252x_043",
    subject: "da-252",
    lecture: "lecture-29",
    lectureNo: 29,
    question: "The acceptable range of relative humidity inside a greenhouse for most crops is:",
    options: ["20-40%", "50-80%", "80-95%", "95-100%"],
    correct: 1,
    explanation: "The acceptable range of relative humidity (RH) inside a greenhouse is 50-80%. Too high RH promotes fungal diseases; too low increases plant water stress."
  },
  {
    id: "d252x_044",
    subject: "da-252",
    lecture: "lecture-29",
    lectureNo: 29,
    question: "Light intensity in greenhouse horticulture is measured in:",
    options: ["Watts per square meter", "Lux", "Candela", "Foot-candles per hour"],
    correct: 1,
    explanation: "Light intensity in greenhouse horticulture is measured in Lux. Most greenhouse crops saturate at approximately 32,200 Lux (32.2 klux). Visible light for photosynthesis spans 400-700 nm."
  },
  {
    id: "d252x_045",
    subject: "da-252",
    lecture: "lecture-29",
    lectureNo: 29,
    question: "The wavelength range of visible light used in photosynthesis is:",
    options: ["200-400 nm", "400-700 nm", "700-1000 nm", "1000-1200 nm"],
    correct: 1,
    explanation: "Photosynthetically active radiation (PAR) spans the visible light range of 400-700 nm (nanometers). Blue light (400-500 nm) and red light (600-700 nm) are most effective."
  },
  {
    id: "d252x_046",
    subject: "da-252",
    lecture: "lecture-29",
    lectureNo: 29,
    question: "Which greenhouse crop requires the highest night temperature of approximately 21-22°C?",
    options: ["Primula and Mathiola", "Carnation", "Chrysanthemum and Poinsettia", "African violet"],
    correct: 3,
    explanation: "African violet requires the highest night temperature of 21-22°C. In contrast: Primula/Mathiola need 7°C, Carnation 10°C, Rose 16°C, and Chrysanthemum/Poinsettia 17-18°C."
  },
  {
    id: "d252x_047",
    subject: "da-252",
    lecture: "lecture-29",
    lectureNo: 29,
    question: "Which greenhouse crop requires the lowest night temperature of approximately 7°C?",
    options: ["African violet", "Rose", "Carnation", "Primula and Mathiola"],
    correct: 3,
    explanation: "Primula and Mathiola require the lowest night temperature of approximately 7°C. Most other crops require higher temperatures (carnation 10°C, rose 16°C, chrysanthemum 17-18°C)."
  },
  {
    id: "d252x_048",
    subject: "da-252",
    lecture: "lecture-30",
    lectureNo: 30,
    question: "Assertion (A): CO₂ enrichment in greenhouses significantly enhances crop yield and quality.\\nReason (R): During active photosynthesis, plants can draw down greenhouse CO₂ levels to below 200 ppm, which is limiting for growth.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "CO₂ enrichment boosts yield because plants actively deplete greenhouse CO₂ below 200 ppm (limiting level) during photosynthesis. Supplementing to 1000-1200 ppm overcomes this limitation."
  },
  {
    id: "d252x_049",
    subject: "da-252",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "Assertion (A): Sprinkler irrigation is more efficient than surface irrigation in undulating terrain.\\nReason (R): Sprinkler systems distribute water uniformly regardless of land slope without requiring land leveling.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "Sprinkler irrigation is efficient in undulating terrain because it distributes water uniformly without needing land leveling. Surface irrigation requires leveled land for uniform water distribution."
  },
  {
    id: "d252x_050",
    subject: "da-252",
    lecture: "lecture-21",
    lectureNo: 21,
    question: "Assertion (A): Centrifugal pumps require priming before operation.\\nReason (R): Centrifugal pumps cannot develop suction lift if the casing is filled with air instead of water.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "Centrifugal pumps require priming because an air-filled casing cannot develop the suction needed to lift water. The impeller must be surrounded by water to function effectively."
  },
  {
    id: "d252x_051",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Match the following chains with their lengths:\\n     Column-I (Chain Type)  |  Column-II (Length)  |  Column-III (Links)\\nA.  Gunter's Chain  |  1.  33 ft  |  i.  100 links\\nB.  Revenue Chain  |  2.  100 ft  |  ii.  16 links\\nC.  Engineer's Chain  |  3.  66 ft  |  iii.  100 links",
    options: ["A-3-i, B-1-ii, C-2-iii", "A-1-i, B-3-ii, C-2-iii", "A-2-iii, B-1-ii, C-3-i", "A-3-iii, B-2-ii, C-1-i"],
    correct: 0,
    explanation: "Gunter's Chain: 66 ft, 100 links. Revenue Chain: 33 ft, 16 links. Engineer's Chain: 100 ft, 100 links."
  },
  {
    id: "d252x_052",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Match the following tapes with their characteristics:\\n     Column-I (Tape Type)  |  Column-II (Material)  |  Column-III (Use)\\nA.  Cloth tape  |  1.  Steel (64%) + Nickel (36%)  |  i.  Subsidiary measurements/offsets\\nB.  Invar tape  |  2.  Varnished woven linen  |  ii.  Highest precision base lines\\nC.  Steel tape  |  3.  Steel ribbon/stainless steel  |  iii.  Precise measurements, checking chains",
    options: ["A-2-i, B-1-ii, C-3-iii", "A-1-ii, B-2-i, C-3-iii", "A-3-iii, B-1-ii, C-2-i", "A-2-iii, B-3-ii, C-1-i"],
    correct: 0,
    explanation: "Cloth tape: varnished linen, used for subsidiary measurements. Invar tape: steel+nickel alloy, for highest precision base line measurements. Steel tape: stainless steel, for precise work."
  },
  {
    id: "d252x_053",
    subject: "da-252",
    lecture: "lecture-27",
    lectureNo: 27,
    question: "Match the following greenhouse types with their descriptions:\\n     Column-I (Type)  |  Column-II (Description)\\nA.  Lean-to  |  1.  Two or more spans joined at gutters\\nB.  Even span  |  2.  Built against a wall, one sloping roof\\nC.  Ridge-and-furrow  |  3.  Both sides of equal pitch and width\\nD.  Quonset  |  4.  Semicircular (hoop) cross-section",
    options: ["A-2, B-3, C-1, D-4", "A-1, B-2, C-3, D-4", "A-3, B-2, C-4, D-1", "A-4, B-3, C-2, D-1"],
    correct: 0,
    explanation: "Lean-to: built against a wall with one sloping roof. Even span: both sides equal pitch. Ridge-and-furrow: multiple spans joined at gutters. Quonset: semicircular hoop design."
  },
  {
    id: "d252x_054",
    subject: "da-252",
    lecture: "lecture-29",
    lectureNo: 29,
    question: "Match the following greenhouse crops with their required night temperature:\\n     Column-I (Crop)  |  Column-II (Night Temp)\\nA.  Carnation  |  1.  21-22°C\\nB.  African violet  |  2.  16°C\\nC.  Rose  |  3.  10°C\\nD.  Primula  |  4.  7°C",
    options: ["A-3, B-1, C-2, D-4", "A-1, B-2, C-3, D-4", "A-2, B-1, C-4, D-3", "A-4, B-3, C-2, D-1"],
    correct: 0,
    explanation: "Carnation: 10°C. African violet: 21-22°C. Rose: 16°C. Primula: 7°C (also Mathiola). Chrysanthemum and Poinsettia: 17-18°C."
  },
  {
    id: "d252x_055",
    subject: "da-252",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Which of the following surveys uses artificial earth satellites for determining positions?",
    options: ["Plane surveying", "Chain surveying", "Geodetic surveying", "Compass surveying"],
    correct: 2,
    explanation: "Geodetic surveying uses artificial earth satellites (GPS) for determining precise positions of widely distant points on the earth's surface, taking into account earth's curvature."
  },
  {
    id: "d252x_056",
    subject: "da-252",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The pacing technique in surveying is mostly employed in:",
    options: ["Final detailed surveys", "Preliminary surveys and explorations", "Triangulation surveys", "Cadastral surveys"],
    correct: 1,
    explanation: "The pacing technique is mostly used in preliminary surveys and explorations where a quick rough survey is needed. It is not used for precise measurements."
  },
  {
    id: "d252x_057",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Which tape type should NOT be used when the ground is wet as it shrinks and stretches easily?",
    options: ["Steel tape", "Invar tape", "Cloth or linen tape", "Metallic tape"],
    correct: 2,
    explanation: "Cloth or linen tape shrinks when wet, stretches easily, and twists and tangles. It must not be wound up wet. It is only used for subsidiary measurements like offsets."
  },
  {
    id: "d252x_058",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The metallic tape is reinforced with fine brass or copper wires to:",
    options: ["Increase its weight for stability", "Prevent stretching of fibres", "Make it electrically conductive for safety", "Improve its visibility in the field"],
    correct: 1,
    explanation: "The metallic tape is made from cotton or linen reinforced with fine brass or copper wires to prevent stretching of fibres, making it better than simple linen tapes."
  },
  {
    id: "d252x_059",
    subject: "da-252",
    lecture: "lecture-22",
    lectureNo: 22,
    question: "Which advantage does a submersible pump have over a surface centrifugal pump?",
    options: ["Lower initial cost", "No need for priming as both pump and motor are submerged", "Suitable for very shallow wells only", "Higher maintenance requirement"],
    correct: 1,
    explanation: "Since both the motor and pump are submerged in the water, submersible pumps do not require priming. They are suitable for deep tube wells and have lower noise levels."
  },
  {
    id: "d252x_060",
    subject: "da-252",
    lecture: "lecture-20",
    lectureNo: 20,
    question: "In drip irrigation, in-line drippers are different from online drippers in that they are:",
    options: ["Placed above the lateral pipe", "Installed at the end of the lateral line", "Integrated directly within the lateral tube", "Used only in high-pressure systems"],
    correct: 2,
    explanation: "In-line drippers are integrated directly within (inside) the lateral tube during manufacturing. Online drippers are inserted into holes punched in the lateral pipe surface."
  },
  {
    id: "d252x_061",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Tallies in a metric chain are fixed at every:",
    options: ["1 metre", "2 metre", "5 metre", "10 metre"],
    correct: 2,
    explanation: "In metric chains, tallies are fixed at every 5-metre length to enable quick reading of fractions. Small brass rings are provided at every metre length except where tallies are attached."
  },
  {
    id: "d252x_062",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Ranging rods are painted alternately to improve visibility. The typical colour combinations used are:",
    options: ["Blue and green, or yellow and black", "Red and white, or red, white and black, or black and white", "Orange and purple, or blue and white", "Silver and gold, or red and yellow"],
    correct: 1,
    explanation: "Ranging rods are painted alternately black and white, or red and white, or red, white and black successively, each division being 0.2 m long, to make them visible at distance."
  },
  {
    id: "d252x_063",
    subject: "da-252",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "Which of the following best describes the advantage of drip irrigation over sprinkler irrigation?",
    options: ["Drip irrigation requires higher operating pressure", "Drip irrigation applies water directly to the root zone, minimizing evaporation losses", "Drip irrigation covers a wider area per unit time", "Drip irrigation is more suitable for large grain crops"],
    correct: 1,
    explanation: "Drip irrigation applies water directly to the root zone through emitters, minimizing evaporation, runoff, and deep percolation losses. It is highly efficient, especially for row crops and orchards."
  },
  {
    id: "d252x_064",
    subject: "da-252",
    lecture: "lecture-21",
    lectureNo: 21,
    question: "In a centrifugal pump, which type of impeller is used for pumping clear water without any suspended solids?",
    options: ["Open impeller", "Semi-open impeller", "Closed impeller", "Mixed-flow impeller"],
    correct: 2,
    explanation: "Closed impellers are used for pumping clear water without any suspended solids. Open impellers are for sand/gravel/dredging, and semi-open impellers for moderately dirty water."
  },
  {
    id: "d252x_065",
    subject: "da-252",
    lecture: "lecture-27",
    lectureNo: 27,
    question: "Which greenhouse type has a semicircular cross-section and is generally the most economical to construct?",
    options: ["Lean-to", "Even span", "Saw-tooth", "Quonset"],
    correct: 3,
    explanation: "Quonset greenhouses have a semicircular (hoop) cross-section. They are generally the most economical to construct as they require minimal structural framing material."
  },
  {
    id: "d252x_066",
    subject: "da-252",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The two main parts of survey work are:",
    options: ["Chaining and offsetting", "Field work (taking measurements) and office work (computing and drawing)", "Triangulation and traversing", "Ranging and chaining"],
    correct: 1,
    explanation: "The process of survey is divided into two parts: (a) Field work — taking measurements, and (b) Office work — computing and drawing (preparing plans and maps)."
  },
  {
    id: "d252x_067",
    subject: "da-252",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "A representation to some scale of the ground and objects upon it as projected on a horizontal plane is called:",
    options: ["A map (if scale is large)", "A plan (if scale is small)", "A plan (if scale is large) or a map (if scale is small)", "A profile"],
    correct: 2,
    explanation: "The representation is called a plan if the scale is large, and a map if the scale is small. Plans show only horizontal distances. Both are results of surveying."
  },
  {
    id: "d252x_068",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The Steel Band (band chain) is preferred over an ordinary chain for accurate work because:",
    options: ["It is heavier and more robust", "It is practically unalterable in length, lighter and easier to handle", "It has more links per unit length", "It does not need to be lubricated"],
    correct: 1,
    explanation: "The steel band (band chain) is preferred for accurate work as it is practically unalterable in length, lighter, and easier to handle. It must be protected from rust by cleaning and oiling."
  },
  {
    id: "d252x_069",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The synthetic tape for surveying is manufactured of glass fibre with PVC coating. It is graduated every:",
    options: ["1 mm with figures at every 10 mm", "5 mm with figures at every 50 mm", "10 mm with figures at every 100 mm", "20 mm with figures at every 200 mm"],
    correct: 2,
    explanation: "The synthetic tape is graduated every 10 mm and figured every 100 mm, with metric figures shown in red at every metre. They maintain their lengths well for short measurements."
  },
  {
    id: "d252x_070",
    subject: "da-252",
    lecture: "lecture-29",
    lectureNo: 29,
    question: "Light saturation point for most greenhouse crops is approximately:",
    options: ["5,000 Lux", "15,000 Lux", "32,200 Lux (32.2 klux)", "100,000 Lux"],
    correct: 2,
    explanation: "Most greenhouse crops have a light saturation point of approximately 32,200 Lux (32.2 klux). Above this, additional light does not increase photosynthesis (photoinhibition may occur)."
  },
  {
    id: "d252x_071",
    subject: "da-252",
    lecture: "lecture-26",
    lectureNo: 26,
    question: "Which of the following is NOT a characteristic advantage of greenhouse cultivation?",
    options: ["Production of superior quality products", "Growing crops out of season", "Elimination of all labour costs", "Effective pest management"],
    correct: 2,
    explanation: "Greenhouse cultivation does not eliminate labour costs — it may actually require more skilled labour. Key advantages are quality produce, off-season production, pest control, and computer automation."
  },
  {
    id: "d252x_072",
    subject: "da-252",
    lecture: "lecture-30",
    lectureNo: 30,
    question: "Ventilation in greenhouses can be of two types, which are:",
    options: ["Active and passive ventilation", "Natural and forced (mechanical) ventilation", "Wet-wall and dry ventilation", "Overhead and side ventilation only"],
    correct: 1,
    explanation: "Greenhouse ventilation can be natural (using ridge vents, side vents, and stack effect) or forced/mechanical (using fans and blowers). Both help control temperature and humidity."
  },
  {
    id: "d252x_073",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Chain links are made of 4 mm diameter galvanized mild steel wire. The ends of each link are bent into a loop and connected by:",
    options: ["Two oval rings", "Three oval rings", "Four connecting bolts", "Welded joints only"],
    correct: 1,
    explanation: "The ends of each chain link are bent into a loop and connected by three oval rings, which provide flexibility to the chain and make it less liable to become kinked."
  },
  {
    id: "d252x_074",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Arrows (chain pins) used in chain surveying are made of wire with a minimum tensile strength of:",
    options: ["300 N/mm²", "500 N/mm²", "700 N/mm²", "1000 N/mm²"],
    correct: 2,
    explanation: "Arrows are made of good quality metallic wires of 4 mm (8 s.w.g.) diameter with a minimum tensile strength of 700 N/mm². They are black enameled and 400 mm long."
  },
  {
    id: "d252x_075",
    subject: "da-252",
    lecture: "lecture-20",
    lectureNo: 20,
    question: "India's area under drip irrigation is approximately:",
    options: ["0.5 million hectares", "1.0 million hectares", "1.43 million hectares", "2.5 million hectares"],
    correct: 2,
    explanation: "India has approximately 1.43 million hectares under drip irrigation, placing it behind USA and Spain (1.5 million ha each) globally."
  },
  {
    id: "d252x_076",
    subject: "da-252",
    lecture: "lecture-15",
    lectureNo: 15,
    question: "Which of the following soil and water conservation measures is used to slow down runoff and allow water infiltration on slopes?",
    options: ["Field drainage", "Contour bunding and terracing", "Canal lining", "Tube well installation"],
    correct: 1,
    explanation: "Contour bunding and terracing are key soil and water conservation measures that slow runoff, prevent erosion, and allow rainwater to infiltrate the soil on sloping land."
  },
  {
    id: "d252x_077",
    subject: "da-252",
    lecture: "lecture-16",
    lectureNo: 16,
    question: "Crop water requirement (ETc) is the product of:",
    options: ["Reference evapotranspiration (ET₀) and crop coefficient (Kc)", "Rainfall and irrigation water applied", "Pan evaporation and soil moisture deficit", "Root zone depth and soil moisture holding capacity"],
    correct: 0,
    explanation: "Crop water requirement (ETc = ET₀ × Kc) is calculated as the product of reference evapotranspiration (ET₀) and the crop-specific coefficient (Kc) that varies with growth stage."
  },
  {
    id: "d252x_078",
    subject: "da-252",
    lecture: "lecture-25",
    lectureNo: 25,
    question: "A Parshall flume is a water measuring device used in irrigation to measure:",
    options: ["Groundwater level in wells", "Flow velocity in open channels and canals", "Soil moisture content", "Pump discharge pressure"],
    correct: 1,
    explanation: "A Parshall flume is a fixed hydraulic structure used to measure the flow rate (discharge) in open channels, canals, and irrigation systems."
  },
  {
    id: "d252x_079",
    subject: "da-252",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "In chain surveying, the main line is the:",
    options: ["Shortest line joining two survey stations", "Longest line passing through the centre of the area", "Line connecting two offset points", "Line parallel to the boundary of the field"],
    correct: 1,
    explanation: "The main line in chain surveying is the longest line passing through the centre of the area. It forms the backbone of the survey from which offsets are taken to locate details."
  },
  {
    id: "d252x_080",
    subject: "da-252",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "An offset in chain surveying is a measurement taken:",
    options: ["Along the main chain line", "Perpendicular (or nearly so) to the main chain line to locate a detail point", "Along a diagonal to the main line", "Parallel to the boundary of the survey area"],
    correct: 1,
    explanation: "An offset is a lateral measurement taken perpendicular (or oblique) to the main chain line to locate detail points (boundaries, objects) that are away from the chain line."
  },
  {
    id: "d252x_081",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Invar tape has a very low coefficient of thermal expansion of:",
    options: ["6.0 × 10⁻⁴ per °C", "0.6 × 10⁻⁴ per °C", "0.06 × 10⁻⁴ per °C", "60 × 10⁻⁴ per °C"],
    correct: 1,
    explanation: "Invar tape has a very low coefficient of thermal expansion of 0.6 × 10⁻⁴ per °C (compared to ~1.2 × 10⁻⁵ for steel), making it ideal for base line measurements in triangulation."
  },
  {
    id: "d252x_082",
    subject: "da-252",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Triangulation survey involves dividing the survey area into a series of:",
    options: ["Rectangular grids", "Triangles whose vertices are survey stations", "Parallel strips", "Concentric circles"],
    correct: 1,
    explanation: "Triangulation survey divides the area into a network of triangles. By measuring the angles of each triangle and one base line, all distances can be calculated trigonometrically."
  },
  {
    id: "d252x_083",
    subject: "da-252",
    lecture: "lecture-27",
    lectureNo: 27,
    question: "Shade nets used in horticulture are classified based on:",
    options: ["The material of the frame structure", "The percentage of shade they provide", "The type of irrigation used under them", "The height of the structure"],
    correct: 1,
    explanation: "Shade nets are classified based on the percentage of light they block (e.g., 25%, 35%, 50%, 75% shade). Different crops require different shade levels depending on their light requirements."
  },
  {
    id: "d252x_084",
    subject: "da-252",
    lecture: "lecture-31",
    lectureNo: 31,
    question: "In greenhouse climate control, the pad-and-fan system is used for:",
    options: ["Winter heating of the greenhouse", "Summer cooling through evaporative cooling", "CO₂ enrichment", "Humidity reduction in winter"],
    correct: 1,
    explanation: "The pad-and-fan system (evaporative cooling) is used for summer cooling. Hot outside air passes through water-saturated pads and is cooled by evaporation before entering the greenhouse."
  },
  {
    id: "d252x_085",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "A plumb bob is typically made of which material?",
    options: ["Wood with an iron tip", "Brass with a pointed end", "Plastic with a rubber tip", "Aluminium with a blunt end"],
    correct: 1,
    explanation: "A plumb bob consists of a metal weight made of brass with a pointed end, suspended by a string. It is used to locate points directly below or above another point."
  },
  {
    id: "d252x_086",
    subject: "da-252",
    lecture: "lecture-13",
    lectureNo: 13,
    question: "The magnetic meridian in compass surveying refers to:",
    options: ["The direction of true north (geographic north)", "The direction indicated by a freely suspended magnetic needle", "The direction of the survey line", "A line perpendicular to the survey line"],
    correct: 1,
    explanation: "The magnetic meridian is the direction indicated by a freely suspended and balanced magnetic needle at a given place. It generally differs from the true (geographic) meridian."
  },
  {
    id: "d252x_087",
    subject: "da-252",
    lecture: "lecture-21",
    lectureNo: 21,
    question: "Which component of a centrifugal pump converts velocity energy (kinetic energy) to pressure energy?",
    options: ["Impeller", "Suction pipe", "Volute casing", "Priming valve"],
    correct: 2,
    explanation: "In a centrifugal pump, the impeller imparts velocity to water, and the volute casing (or diffuser) converts this velocity/kinetic energy into pressure energy."
  },
  {
    id: "d252x_088",
    subject: "da-252",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "Which crop type is most suitable for sprinkler irrigation?",
    options: ["Paddy (flooded field crops)", "Closely spaced field crops, vegetables, and orchards on undulating terrain", "Crops requiring waterlogged conditions", "Aquatic plants"],
    correct: 1,
    explanation: "Sprinkler irrigation is most suitable for closely spaced field crops, vegetables, orchards, and crops on undulating terrain where surface irrigation is impractical."
  },
  {
    id: "d252x_089",
    subject: "da-252",
    lecture: "lecture-26",
    lectureNo: 26,
    question: "Computer automation in greenhouses is used primarily for:",
    options: ["Managing farm accounts and billing", "Controlling temperature, humidity, CO₂, irrigation, and lighting automatically", "Operating farm machinery in open fields", "Processing harvested produce"],
    correct: 1,
    explanation: "Computers in greenhouses automate the control of all environmental parameters — temperature, humidity, CO₂ levels, irrigation scheduling, and artificial lighting for optimal crop growth."
  },
  {
    id: "d252x_090",
    subject: "da-252",
    lecture: "lecture-27",
    lectureNo: 27,
    question: "An uneven span greenhouse differs from an even span greenhouse in that:",
    options: ["It has both sides of equal pitch and width", "One side (south-facing) has a steeper pitch to maximize solar radiation capture", "It has no roof ventilation", "It is always attached to another building"],
    correct: 1,
    explanation: "In an uneven span greenhouse, one side (usually south-facing) has a steeper pitch to maximize solar radiation capture in winter. An even span has both sides of equal pitch and width."
  },
  {
    id: "d252x_091",
    subject: "da-252",
    lecture: "lecture-28",
    lectureNo: 28,
    question: "The saw-tooth greenhouse design is advantageous because it provides:",
    options: ["Maximum structural stability in high winds", "Better natural ventilation and more uniform light distribution", "The cheapest construction cost per unit area", "Maximum growing area with minimum shading"],
    correct: 1,
    explanation: "The saw-tooth greenhouse design provides better natural ventilation (through the vertical faces) and more uniform light distribution, especially suited for tropical and subtropical climates."
  },
  {
    id: "d252x_092",
    subject: "da-252",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Errors in chaining are of two types: compensating (random) and cumulative (systematic). Which of the following is a cumulative error?",
    options: ["Wrong marking of chain length due to wind", "Chain consistently longer or shorter than its standard length", "Accidental omission of an arrow", "Improper ranging causing zigzag measurement"],
    correct: 1,
    explanation: "A chain that is consistently longer or shorter than its standard length causes a cumulative (systematic) error. This type of error accumulates in one direction and can be corrected."
  },
  {
    id: "d252x_093",
    subject: "da-252",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Field notes (field book) in surveying are important because they:",
    options: ["Replace the need to visit the field again", "Record all measurements systematically for office computation and drawing", "Are used only for legal disputes", "Store digital survey data"],
    correct: 1,
    explanation: "Field notes (recorded in a field book) systematically record all measurements taken in the field, providing the data needed for office computation, plan drawing, and reference."
  },
  {
    id: "d252x_094",
    subject: "da-252",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The area of an irregular field in offset surveying is calculated using the:",
    options: ["Simpson's rule and trapezoidal rule", "Pythagoras theorem alone", "Only trigonometric formulae", "Only chain length measurements"],
    correct: 0,
    explanation: "In offset surveying, the area of irregular fields is calculated using the trapezoidal rule or Simpson's one-third rule, which approximate the irregular boundary between offset points."
  },
  {
    id: "d252x_095",
    subject: "da-252",
    lecture: "lecture-20",
    lectureNo: 20,
    question: "The main advantage of non-pressure-compensating emitters in drip irrigation is:",
    options: ["Uniform discharge at varying pressures", "Lower cost and simplicity", "Higher discharge rates at all times", "Self-cleaning mechanism for clogging prevention"],
    correct: 1,
    explanation: "Non-pressure-compensating emitters are simpler and less expensive than pressure-compensating types. They are suitable for flat land where pressure variation along laterals is minimal."
  },
  {
    id: "d252x_096",
    subject: "da-252",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The area of a trapezoid with parallel sides 'a' and 'b' and height 'h' is:",
    options: ["(a + b) × h", "(a + b) / 2 × h", "a × b × h", "(a × b) / h"],
    correct: 1,
    explanation: "The area of a trapezoid = ½ × (sum of parallel sides) × height = (a + b)/2 × h. This formula is also applied in offset surveying (trapezoidal rule) to calculate irregular field areas."
  },
  {
    id: "d252x_097",
    subject: "da-252",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The volume of a right circular cylinder with radius 'r' and height 'h' is:",
    options: ["2πr²h", "πr²h", "πrh", "4/3 πr³"],
    correct: 1,
    explanation: "Volume of a right circular cylinder = πr²h, where r is the radius of the base and h is the height. This formula is used in irrigation water volume calculations."
  },
  {
    id: "d252x_098",
    subject: "da-252",
    lecture: "lecture-25",
    lectureNo: 25,
    question: "A current meter is an irrigation water measuring device used to measure:",
    options: ["Soil moisture content", "Flow velocity in open channels", "Water table depth", "Pump discharge pressure"],
    correct: 1,
    explanation: "A current meter (velocity meter) is used to measure the velocity of water flow in open channels and rivers. Combined with cross-sectional area, it gives the discharge (flow rate)."
  },
  {
    id: "d252x_099",
    subject: "da-252",
    lecture: "lecture-22",
    lectureNo: 22,
    question: "The major difference between a centrifugal pump and a submersible pump installation is:",
    options: ["Centrifugal pumps work at higher pressures than submersible pumps", "In centrifugal pumps the motor is on the surface while in submersible pumps both motor and pump are submerged", "Submersible pumps can only be used for surface water", "Centrifugal pumps cannot be used with electricity"],
    correct: 1,
    explanation: "In centrifugal pump installations, the motor is on the surface connected via a long shaft. In submersible pumps, both the motor and pump unit are submerged in the water source."
  },
  {
    id: "d252x_100",
    subject: "da-252",
    lecture: "lecture-28",
    lectureNo: 28,
    question: "Which covering material for greenhouses provides the best light transmission and UV resistance but is also the most expensive?",
    options: ["Polyethylene film (PE)", "Fiberglass reinforced plastic (FRP)", "Glass", "Polycarbonate (double wall)"],
    correct: 2,
    explanation: "Glass provides the best long-term light transmission (90%+), is UV resistant, and maintains optical clarity, but it is the most expensive, heaviest, and most fragile covering material."
  }"""

combined_questions = """  {
    id: "d252c_001",
    subject: "da-252",
    question: "Which type of surveying takes into account the curvature of the earth and uses artificial satellites?",
    options: ["Plane surveying", "Chain surveying", "Geodetic surveying", "Compass surveying"],
    correct: 2,
    explanation: "Geodetic surveying (trigonometrical surveying) accounts for earth's curvature and uses artificial earth satellites for determining precise positions of widely distant points."
  },
  {
    id: "d252c_002",
    subject: "da-252",
    question: "The metric chain as per IS 1492-1956 comes in lengths of 20 m and 30 m with how many links respectively?",
    options: ["50 and 100 links", "100 and 150 links", "100 and 200 links", "150 and 200 links"],
    correct: 1,
    explanation: "A 20m metric chain has 100 links and a 30m chain has 150 links. Each link is 0.2m (20cm) long in both cases."
  },
  {
    id: "d252c_003",
    subject: "da-252",
    question: "The Gunter's chain (surveyor's chain) measures 66 ft with 100 links. How many Gunter's chains equal one mile?",
    options: ["10", "40", "80", "100"],
    correct: 2,
    explanation: "80 Gunter's chains = 1 mile. Also: 10 chains = 1 furlong, and 10 square chains = 1 acre. These simple relations make it convenient for land measurement."
  },
  {
    id: "d252c_004",
    subject: "da-252",
    question: "Which tape is made of an alloy of steel (64%) and nickel (36%) and is used for the highest precision measurements?",
    options: ["Cloth tape", "Metallic tape", "Steel tape", "Invar tape"],
    correct: 3,
    explanation: "The invar tape is made of steel (64%) and nickel (36%) alloy. It has an extremely low coefficient of thermal expansion (0.6×10⁻⁴/°C) making it ideal for base line triangulation."
  },
  {
    id: "d252c_005",
    subject: "da-252",
    question: "A plumb bob is used in surveying to:",
    options: ["Measure distances along slopes", "Locate points directly below or above another point", "Set out right angles", "Measure magnetic bearings"],
    correct: 1,
    explanation: "A plumb bob (brass weight with pointed end) suspended on a string is used to locate points directly below or above another point, and for accurate instrument centering."
  },
  {
    id: "d252c_006",
    subject: "da-252",
    question: "In chain surveying, an offset is a measurement taken:",
    options: ["Along the main chain line", "Perpendicular to the main chain line to locate a detail point", "Along the diagonal of the survey area", "Parallel to the survey boundary"],
    correct: 1,
    explanation: "An offset is a lateral measurement (perpendicular or oblique) from the main chain line to locate detail points (boundaries, objects) lying away from the chain line."
  },
  {
    id: "d252c_007",
    subject: "da-252",
    question: "The most accurate method of measuring distance in surveying among the four direct methods is:",
    options: ["Pacing", "Using an odometer", "Chaining", "Time and distance judgment"],
    correct: 2,
    explanation: "Chaining (measuring with a chain or tape) is the most accurate of all direct methods of distance measurement. For ordinary precision, a chain is used; for greater accuracy, a steel tape."
  },
  {
    id: "d252c_008",
    subject: "da-252",
    question: "The back bearing of a survey line differs from its fore bearing by:",
    options: ["45°", "90°", "180°", "270°"],
    correct: 2,
    explanation: "The back bearing of any line differs from its fore bearing by exactly 180°. This relationship is used to detect errors in compass surveying."
  },
  {
    id: "d252c_009",
    subject: "da-252",
    question: "In sprinkler irrigation, the drop size of water applied is:",
    options: ["0.05 to 0.5 mm", "0.5 to 4 mm", "4 to 10 mm", "10 to 20 mm"],
    correct: 1,
    explanation: "In sprinkler irrigation, water is applied as drops of 0.5 to 4 mm size (similar to rainfall) at a working pressure of 2 to 5 kg/cm²."
  },
  {
    id: "d252c_010",
    subject: "da-252",
    question: "Drip irrigation was developed by Symcha Blass in the year:",
    options: ["1955", "1960", "1964", "1970"],
    correct: 2,
    explanation: "Drip (trickle) irrigation was developed by Symcha Blass in 1964. USA and Spain each have 1.5 million hectares under drip irrigation; India has 1.43 million hectares."
  },
  {
    id: "d252c_011",
    subject: "da-252",
    question: "In a centrifugal pump, which impeller type is used for pumping water with sand and gravel (dredging)?",
    options: ["Closed impeller", "Semi-open impeller", "Open impeller", "Mixed-flow impeller"],
    correct: 2,
    explanation: "Open impellers are used for dredging (pumping water with sand/gravel). Closed impellers are for clear water, semi-open for moderately dirty water."
  },
  {
    id: "d252c_012",
    subject: "da-252",
    question: "Submersible pumps are suitable for deep tube wells with a minimum bore of:",
    options: ["50 mm", "75 mm", "100 mm", "150 mm"],
    correct: 2,
    explanation: "Submersible pumps require a minimum tube well diameter of 100 mm. Both the motor and pump are submerged in water, eliminating the need for priming."
  },
  {
    id: "d252c_013",
    subject: "da-252",
    question: "The ambient CO₂ concentration in the atmosphere is approximately 345 ppm. During active photosynthesis in a greenhouse, plants draw CO₂ down to:",
    options: ["300 ppm", "250 ppm", "Below 200 ppm", "100 ppm"],
    correct: 2,
    explanation: "During active photosynthesis, greenhouse plants can draw CO₂ down to below 200 ppm, which limits growth. CO₂ enrichment to 1000-1200 ppm is optimal for productivity."
  },
  {
    id: "d252c_014",
    subject: "da-252",
    question: "The acceptable relative humidity range inside a greenhouse for most crops is:",
    options: ["20-40%", "40-50%", "50-80%", "80-100%"],
    correct: 2,
    explanation: "The acceptable relative humidity range inside a greenhouse is 50-80%. Too high RH promotes fungal diseases; too low causes plant water stress."
  },
  {
    id: "d252c_015",
    subject: "da-252",
    question: "Light intensity in greenhouse horticulture is measured in Lux and most greenhouse crops saturate at approximately:",
    options: ["5,000 Lux", "15,000 Lux", "32,200 Lux", "100,000 Lux"],
    correct: 2,
    explanation: "Most greenhouse crops have a light saturation point of approximately 32,200 Lux (32.2 klux). The visible light used in photosynthesis spans 400-700 nm (PAR)."
  },
  {
    id: "d252c_016",
    subject: "da-252",
    question: "Which greenhouse type has a semicircular (hoop) cross-section and is most economical to construct?",
    options: ["Even span", "Lean-to", "Saw-tooth", "Quonset"],
    correct: 3,
    explanation: "Quonset greenhouses have a semicircular/hoop cross-section. They require minimal structural framing, making them generally the most economical type to construct."
  },
  {
    id: "d252c_017",
    subject: "da-252",
    question: "Which greenhouse type is built against an existing wall and has one sloping roof?",
    options: ["Even span", "Lean-to", "Ridge-and-furrow", "Uneven span"],
    correct: 1,
    explanation: "A lean-to greenhouse is built against an existing wall or building with one sloping roof. It takes advantage of the wall's thermal mass and is economical for small-scale use."
  },
  {
    id: "d252c_018",
    subject: "da-252",
    question: "Ridge-and-furrow (gutter-connected) greenhouses are formed by:",
    options: ["Building a single large greenhouse with a ridged roof", "Joining two or more individual greenhouse spans along their sides", "Digging furrows between greenhouse rows", "Installing gutters below the crop benches"],
    correct: 1,
    explanation: "Ridge-and-furrow (gutter-connected) greenhouses are formed by joining two or more individual spans along their sides, sharing gutters for drainage. They maximize land use efficiency."
  },
  {
    id: "d252c_019",
    subject: "da-252",
    question: "African violet grown in greenhouse requires a night temperature of approximately:",
    options: ["7°C", "10°C", "16°C", "21-22°C"],
    correct: 3,
    explanation: "African violet requires the highest night temperature of 21-22°C. Temperature requirements: Primula/Mathiola 7°C, Carnation 10°C, Rose 16°C, Chrysanthemum/Poinsettia 17-18°C."
  },
  {
    id: "d252c_020",
    subject: "da-252",
    question: "Which of the following represents the optimal CO₂ enrichment level in greenhouses for maximum plant productivity?",
    options: ["200 ppm", "345 ppm (ambient)", "700-900 ppm", "1000-1200 ppm"],
    correct: 3,
    explanation: "The optimal CO₂ enrichment level in greenhouses is 1000-1200 ppm. This is approximately 3-4 times the ambient level (345 ppm) and significantly boosts photosynthesis and yield."
  },
  {
    id: "d252c_021",
    subject: "da-252",
    question: "Assertion (A): Invar tape is preferred for base line measurements in triangulation surveys.\\nReason (R): Invar tape has an extremely low coefficient of thermal expansion due to its nickel-steel alloy composition.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "Invar tape (steel 64% + nickel 36%) has a very low thermal expansion coefficient (0.6×10⁻⁴/°C), making it dimensionally stable for high-precision base line measurements in triangulation."
  },
  {
    id: "d252c_022",
    subject: "da-252",
    question: "Assertion (A): Submersible pumps do not require priming before operation.\\nReason (R): In a submersible pump, both the motor and pump are submerged in water, so the pump casing is always filled.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "Since both motor and pump are submerged in water in a submersible pump, the casing is always water-filled, eliminating the need for priming (unlike surface centrifugal pumps)."
  },
  {
    id: "d252c_023",
    subject: "da-252",
    question: "Assertion (A): Drip irrigation is more water-efficient than surface irrigation.\\nReason (R): Drip irrigation delivers water directly to the root zone, minimizing evaporation, surface runoff, and deep percolation losses.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "Drip irrigation efficiency (90-95%) is much higher than surface irrigation (40-60%) because water is delivered directly to roots, reducing evaporation, runoff, and percolation losses."
  },
  {
    id: "d252c_024",
    subject: "da-252",
    question: "Assertion (A): Cloth (linen) tape should not be used for precise measurements in surveying.\\nReason (R): Cloth tape shrinks when wet, stretches easily, and is likely to twist and tangle.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "Cloth tape is not suitable for precise measurements because it shrinks when wet, stretches easily, and twists. It is used only for subsidiary measurements like offsets."
  },
  {
    id: "d252c_025",
    subject: "da-252",
    question: "Assertion (A): Greenhouse cultivation can yield 4 to 5 crops per year compared to 1-2 crops in open field.\\nReason (R): Controlled greenhouse environment allows year-round production independent of external climatic conditions.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "Greenhouse cultivation allows 4-5 crops/year because controlled temperature, humidity, CO₂, and light enable year-round production irrespective of outside weather conditions."
  },
  {
    id: "d252c_026",
    subject: "da-252",
    question: "Match the following surveying instruments with their primary function:\\n     Column-I (Instrument)  |  Column-II (Primary Function)\\nA.  Ranging rod  |  1.  Setting right angles to chain line\\nB.  Cross-staff  |  2.  Marking end of chain length\\nC.  Arrow (chain pin)  |  3.  Marking survey stations visible at distance\\nD.  Plumb bob  |  4.  Locating points directly above/below another point",
    options: ["A-3, B-1, C-2, D-4", "A-1, B-2, C-3, D-4", "A-2, B-3, C-4, D-1", "A-4, B-1, C-3, D-2"],
    correct: 0,
    explanation: "Ranging rod: marks distant stations. Cross-staff: sets right angles. Arrow/chain pin: marks end of each chain length. Plumb bob: locates points directly above/below another point."
  },
  {
    id: "d252c_027",
    subject: "da-252",
    question: "Match the following chains with their lengths and link counts:\\n     Column-I (Chain)  |  Column-II (Length)  |  Column-III (Links)\\nA.  Gunter's Chain  |  1.  100 ft  |  i.  100 links\\nB.  Revenue Chain  |  2.  66 ft  |  ii.  100 links\\nC.  Engineer's Chain  |  3.  33 ft  |  iii.  16 links",
    options: ["A-2-ii, B-3-iii, C-1-i", "A-1-i, B-2-ii, C-3-iii", "A-3-iii, B-1-i, C-2-ii", "A-2-i, B-3-iii, C-1-ii"],
    correct: 0,
    explanation: "Gunter's Chain: 66 ft, 100 links. Revenue Chain: 33 ft, 16 links. Engineer's Chain: 100 ft, 100 links."
  },
  {
    id: "d252c_028",
    subject: "da-252",
    question: "Match the following pump types with their characteristics:\\n     Column-I (Pump Type)  |  Column-II (Characteristic)\\nA.  Centrifugal pump with closed impeller  |  1.  Both motor and pump submerged; no priming\\nB.  Centrifugal pump with open impeller  |  2.  For clear water; high efficiency\\nC.  Submersible pump  |  3.  For sand/gravel dredging applications",
    options: ["A-2, B-3, C-1", "A-1, B-2, C-3", "A-3, B-1, C-2", "A-2, B-1, C-3"],
    correct: 0,
    explanation: "Closed impeller centrifugal pump: for clear water, high efficiency. Open impeller centrifugal pump: for dredging (sand/gravel). Submersible pump: both motor and pump submerged, no priming needed."
  },
  {
    id: "d252c_029",
    subject: "da-252",
    question: "Match the following greenhouse types with their descriptions:\\n     Column-I (Type)  |  Column-II (Key Feature)\\nA.  Lean-to  |  1.  Semicircular hoop cross-section\\nB.  Even span  |  2.  Multiple spans joined at gutters\\nC.  Quonset  |  3.  Built against wall, one sloping roof\\nD.  Ridge-and-furrow  |  4.  Both sides of equal pitch and width",
    options: ["A-3, B-4, C-1, D-2", "A-1, B-2, C-3, D-4", "A-4, B-3, C-2, D-1", "A-2, B-1, C-4, D-3"],
    correct: 0,
    explanation: "Lean-to: built against wall, one sloping roof. Even span: both sides equal pitch. Quonset: semicircular hoop. Ridge-and-furrow: multiple spans joined at gutters."
  },
  {
    id: "d252c_030",
    subject: "da-252",
    question: "Match the following greenhouse crops with their required night temperature:\\n     Column-I (Crop)  |  Column-II (Night Temperature)\\nA.  Primula/Mathiola  |  1.  16°C\\nB.  Rose  |  2.  10°C\\nC.  Carnation  |  3.  21-22°C\\nD.  African violet  |  4.  7°C",
    options: ["A-4, B-1, C-2, D-3", "A-1, B-2, C-3, D-4", "A-3, B-4, C-1, D-2", "A-2, B-3, C-4, D-1"],
    correct: 0,
    explanation: "Primula/Mathiola: 7°C. Rose: 16°C. Carnation: 10°C. African violet: 21-22°C. Chrysanthemum/Poinsettia: 17-18°C (not listed but important)."
  },
  {
    id: "d252c_031",
    subject: "da-252",
    question: "The two components of survey work divided into field and office work refer to which of the following respectively?",
    options: ["Measuring distances and measuring angles", "Taking measurements in the field and computing/drawing in office", "Chaining and triangulation", "Reconnaissance and final survey"],
    correct: 1,
    explanation: "Survey work is divided into field work (taking measurements) and office work (computing results and drawing plans/maps). Both are essential parts of the survey process."
  },
  {
    id: "d252c_032",
    subject: "da-252",
    question: "Which of the following is a correct statement about sprinkler irrigation components?",
    options: ["Emitters and drippers are key components", "The system consists of pump, main line, sub-main line, lateral pipes and sprinkler nozzles", "Operating pressure of 0.1 to 0.5 kg/cm² is needed", "Water drops of 5-10 mm size are applied"],
    correct: 1,
    explanation: "A sprinkler irrigation system consists of: pump, main line, sub-main line, lateral pipes, and sprinkler nozzles. Operating pressure is 2-5 kg/cm², applying drops of 0.5-4 mm."
  },
  {
    id: "d252c_033",
    subject: "da-252",
    question: "Which of the following correctly describes the principle of operation of a centrifugal pump?",
    options: ["Reciprocating pistons create positive displacement of water", "A rotating impeller imparts kinetic energy to water, which is converted to pressure in the volute casing", "Compressed air forces water through the discharge pipe", "Gravity drives water from a high-elevation reservoir"],
    correct: 1,
    explanation: "A centrifugal pump works by a rotating impeller inside a casing. The impeller imparts kinetic energy to water; the volute casing converts this to pressure energy for discharge."
  },
  {
    id: "d252c_034",
    subject: "da-252",
    question: "The wavelength range of photosynthetically active radiation (PAR) used by greenhouse plants is:",
    options: ["200-400 nm (UV range)", "400-700 nm (visible light)", "700-1000 nm (near-infrared)", "1000-1500 nm (infrared)"],
    correct: 1,
    explanation: "Photosynthetically active radiation (PAR) spans 400-700 nm (visible light). This includes blue light (400-500 nm) and red light (600-700 nm), which are most effective for photosynthesis."
  },
  {
    id: "d252c_035",
    subject: "da-252",
    question: "The pad-and-fan system installed in greenhouses is used for:",
    options: ["Winter heating", "Summer cooling through evaporative cooling", "CO₂ enrichment", "Artificial lighting"],
    correct: 1,
    explanation: "The pad-and-fan (evaporative cooling) system is used for summer cooling. Hot outside air passes through water-saturated pads, cooling by evaporation before entering the greenhouse."
  },
  {
    id: "d252c_036",
    subject: "da-252",
    question: "Ranging rods are painted alternately at every 0.2 m. What are the standard colour combinations used?",
    options: ["Blue and green, or yellow and black", "Red and white, or red-white-black, or black and white", "Orange and silver, or blue and gold", "Only red and white"],
    correct: 1,
    explanation: "Ranging rods are painted alternately black and white, or red and white, or red-white-black successively at every 0.2 m interval. Flags may be added at the top for visibility at great distances."
  },
  {
    id: "d252c_037",
    subject: "da-252",
    question: "Agricultural surveying includes which of the following specific activities?",
    options: ["Measuring large national boundaries", "Laying out contour lines, terrace lines, drainage lines, and computing farm areas", "Conducting marine surveys for navigation", "Photogrammetric aerial mapping"],
    correct: 1,
    explanation: "Agricultural surveying (simple plane surveying) includes laying out contour and terrace lines for soil conservation, drainage lines, profile lines for land leveling, computing field areas, and laying out farm buildings."
  },
  {
    id: "d252c_038",
    subject: "da-252",
    question: "The saw-tooth greenhouse type is preferred in tropical and subtropical regions because it provides:",
    options: ["Maximum structural strength", "Better natural ventilation through vertical faces and uniform light", "Lowest construction cost", "Best insulation in cold weather"],
    correct: 1,
    explanation: "The saw-tooth greenhouse design provides better natural ventilation (through vertical glass faces) and more uniform light distribution, making it well-suited for tropical and subtropical climates."
  },
  {
    id: "d252c_039",
    subject: "da-252",
    question: "In greenhouse cultivation, how many crops per year can typically be grown compared to open-field cultivation?",
    options: ["Same number (1-2 crops/year)", "Fewer crops due to higher investment", "4 to 5 crops per year", "Only one high-value crop per year"],
    correct: 2,
    explanation: "Greenhouse cultivation allows 4 to 5 crops per year because controlled environment enables year-round production, compared to 1-2 crops/year in open fields."
  },
  {
    id: "d252c_040",
    subject: "da-252",
    question: "The Steel Band (band chain) used in surveying is preferred for accurate work because it is:",
    options: ["The heaviest chain type available", "Practically unalterable in length, lightweight and easy to handle", "Made of 100% pure iron for durability", "Available in lengths up to 200 m"],
    correct: 1,
    explanation: "The steel band (band chain) is practically unalterable in length, lighter, and easier to handle than an ordinary chain. It must be cleaned and oiled to prevent rust."
  },
  {
    id: "d252c_041",
    subject: "da-252",
    question: "Online pressure-compensating emitters in drip irrigation are designed to:",
    options: ["Filter sediment from irrigation water", "Deliver constant flow rate regardless of pressure variations along the lateral", "Rotate and distribute water over a wide area", "Increase operating pressure in the main line"],
    correct: 1,
    explanation: "Online pressure-compensating emitters maintain a constant discharge rate regardless of pressure variations along the lateral pipeline, ensuring uniform water application."
  },
  {
    id: "d252c_042",
    subject: "da-252",
    question: "The prismatic compass is used in compass surveying to measure:",
    options: ["Chain line distances", "Magnetic bearings of survey lines", "Vertical angles and elevations", "Right-angle offsets"],
    correct: 1,
    explanation: "The prismatic compass measures the magnetic bearings of survey lines. The surveyor reads the bearing through a prism while simultaneously sighting the object."
  },
  {
    id: "d252c_043",
    subject: "da-252",
    question: "Triangulation surveying divides the survey area into a network of:",
    options: ["Rectangles", "Triangles with measured base lines and angles", "Parallel strips", "Contour intervals"],
    correct: 1,
    explanation: "Triangulation survey divides the area into triangles. By measuring one base line and all angles, all other distances can be computed trigonometrically, making it ideal for large areas."
  },
  {
    id: "d252c_044",
    subject: "da-252",
    question: "The area of irregular fields in offset surveying is commonly calculated using which rules?",
    options: ["Trigonometric sine and cosine rules", "Trapezoidal rule and Simpson's one-third rule", "Pythagoras theorem", "Only the rectangular rule"],
    correct: 1,
    explanation: "The area of irregular fields in offset surveying is calculated using the trapezoidal rule and Simpson's one-third rule, which approximate the curved boundary between successive offsets."
  },
  {
    id: "d252c_045",
    subject: "da-252",
    question: "Which of the following describes the uneven span greenhouse design?",
    options: ["It has both sides of equal pitch and width", "One side (south-facing) has a steeper pitch to maximize solar radiation", "It is built against an existing wall", "It consists of multiple spans joined at gutters"],
    correct: 1,
    explanation: "In an uneven span greenhouse, one side (south-facing in the northern hemisphere) has a steeper pitch to capture maximum solar radiation, especially useful in winter or high latitudes."
  },
  {
    id: "d252c_046",
    subject: "da-252",
    question: "In compass surveying, reduced bearing (RB) is measured from:",
    options: ["The North direction clockwise to 360°", "North or South towards East or West (0° to 90°)", "The West direction anticlockwise", "The East direction clockwise"],
    correct: 1,
    explanation: "Reduced bearing (RB) is measured from North or South (whichever is nearer) towards East or West, ranging from 0° to 90°. Whole circle bearing (WCB) is measured clockwise from North."
  },
  {
    id: "d252c_047",
    subject: "da-252",
    question: "Field notes (field book) in chain surveying are important because they:",
    options: ["Are required by law for all surveys", "Provide a systematic record of all field measurements for computation and drawing", "Replace the need for any calculations", "Are used only in triangulation surveys"],
    correct: 1,
    explanation: "Field notes systematically record all measurements taken in the field, providing the essential data for office work — computing areas, checking errors, and drawing accurate plans."
  },
  {
    id: "d252c_048",
    subject: "da-252",
    question: "Crop water requirement (ETc) is calculated as:",
    options: ["Pan evaporation × pan coefficient", "Reference evapotranspiration (ET₀) × crop coefficient (Kc)", "Total rainfall + irrigation water", "Root depth × soil water holding capacity"],
    correct: 1,
    explanation: "Crop water requirement ETc = ET₀ × Kc, where ET₀ is the reference evapotranspiration (for grass reference crop) and Kc is the crop-specific coefficient varying with growth stage."
  },
  {
    id: "d252c_049",
    subject: "da-252",
    question: "The main advantage of using shade nets in horticulture is:",
    options: ["Increasing light intensity for shade-sensitive crops", "Reducing excessive light and heat for crops that cannot tolerate full sunlight", "Providing structural support for climbing crops", "Preventing water loss through the soil"],
    correct: 1,
    explanation: "Shade nets reduce excessive light intensity and heat for crops that cannot tolerate full sunlight (e.g., gerbera, orchids, ferns). They are classified by the percentage of shade they provide."
  },
  {
    id: "d252c_050",
    subject: "da-252",
    question: "The volume formula for a sphere used in basic measurements is:",
    options: ["πr²h", "(4/3)πr³", "2πrh", "πr²"],
    correct: 1,
    explanation: "The volume of a sphere = (4/3)πr³, where r is the radius. This is one of the basic formulas covered in Lecture 1 of DA-252 on basic measurements."
  },
  {
    id: "d252c_051",
    subject: "da-252",
    question: "Which of the following is NOT a classification of surveys based on the methods employed?",
    options: ["Triangulation surveys", "Traverse surveys", "Land surveys", "Both triangulation and traverse surveys are based on method"],
    correct: 2,
    explanation: "Land surveys is a classification based on the nature of the field, not the method. Classification by method includes: Triangulation surveys and Traverse surveys."
  },
  {
    id: "d252c_052",
    subject: "da-252",
    question: "The scale of a map is defined as:",
    options: ["The area covered per unit area on the map", "The fixed relation that every distance on the map bears to the corresponding distance on the ground", "The height difference shown per unit of horizontal distance", "The number of contour lines per unit area"],
    correct: 1,
    explanation: "Scale is the fixed relation that every distance on the map bears to the corresponding distance on the ground. Example: 1 cm on map = 5 m on ground means scale is 5 m to 1 cm (1:500)."
  },
  {
    id: "d252c_053",
    subject: "da-252",
    question: "In a centrifugal pump, priming is necessary because:",
    options: ["The motor needs initial lubrication", "An air-filled pump casing cannot develop suction lift to draw water", "The impeller needs to warm up first", "The discharge valve must be opened first"],
    correct: 1,
    explanation: "Centrifugal pumps require priming (filling casing with water) because an air-filled pump cannot develop adequate suction head to lift water from the source."
  },
  {
    id: "d252c_054",
    subject: "da-252",
    question: "The natural ventilation in a greenhouse uses which physical principle?",
    options: ["Forced convection from fans", "Stack effect (buoyancy): warm air rises and exits through upper vents, drawing in cool air from below", "Negative pressure created by the growing plants", "Evaporative cooling through wet pad walls"],
    correct: 1,
    explanation: "Natural ventilation in greenhouses uses the stack effect (thermal buoyancy): warm air rises and exits through ridge vents, drawing in cooler outside air through side vents or louvers."
  },
  {
    id: "d252c_055",
    subject: "da-252",
    question: "Which of the following greenhouse covering materials is the most durable and provides the best long-term light transmission?",
    options: ["Polyethylene film", "Shade cloth", "Glass", "Single-layer polycarbonate"],
    correct: 2,
    explanation: "Glass provides the best long-term light transmission (90%+), is UV resistant, and maintains optical clarity for decades. However, it is the most expensive and fragile covering material."
  },
  {
    id: "d252c_056",
    subject: "da-252",
    question: "The passometer and pedometer are both instruments used in:",
    options: ["Chain surveying to measure right angles", "Distance measurement by recording paces", "Compass surveying to measure bearings", "Greenhouse environment monitoring"],
    correct: 1,
    explanation: "Both passometer (records paces, worn on pocket or leg) and pedometer (measures vertical distance walked) are instruments for distance measurement based on counting paces or steps."
  },
  {
    id: "d252c_057",
    subject: "da-252",
    question: "Contour bunding and terracing as soil conservation practices primarily help to:",
    options: ["Increase groundwater extraction rate", "Slow down runoff, prevent erosion, and allow water infiltration on slopes", "Drain waterlogged fields quickly", "Increase soil temperature for better crop growth"],
    correct: 1,
    explanation: "Contour bunding and terracing slow runoff velocity, prevent soil erosion by water, and allow rainwater to infiltrate the soil profile on sloping agricultural lands."
  },
  {
    id: "d252c_058",
    subject: "da-252",
    question: "The Revenue chain used in cadastral surveys has dimensions of:",
    options: ["66 ft, 100 links", "100 ft, 100 links", "33 ft, 16 links", "20 m, 100 links"],
    correct: 2,
    explanation: "The Revenue chain is 33 ft long and has 16 links. It is used for measuring fields in cadastral (land revenue) surveys."
  },
  {
    id: "d252c_059",
    subject: "da-252",
    question: "Which of the following is a correct classification of surveys based on the instrument used?",
    options: ["Land, marine, and astronomical surveys", "Archaeological, geological, mine, and military surveys", "Chain, theodolite, tacheometric, compass, plane table, and photographic surveys", "Triangulation and traverse surveys"],
    correct: 2,
    explanation: "Classification by instrument used includes: Chain surveys, Theodolite surveys, Tacheometric surveys, Compass surveys, Plane Table surveys, and Photographic/Aerial surveys."
  },
  {
    id: "d252c_060",
    subject: "da-252",
    question: "The magnetic meridian in compass surveying differs from the true meridian due to:",
    options: ["Atmospheric refraction", "Magnetic declination (variation between magnetic north and true north)", "Curvature of the earth", "Temperature effects on the compass needle"],
    correct: 1,
    explanation: "Magnetic declination is the angular difference between magnetic north (indicated by compass) and true geographic north. This declination varies by location and changes over time."
  },
  {
    id: "d252c_061",
    subject: "da-252",
    question: "In drip irrigation, which type of emitter is manufactured directly within the lateral tube?",
    options: ["Online pressure-compensating emitter", "Online non-pressure-compensating emitter", "In-line dripper", "Micro-sprinkler"],
    correct: 2,
    explanation: "In-line drippers are integrated/manufactured directly within the lateral tube. Online drippers are inserted into holes punched in the lateral pipe surface from outside."
  },
  {
    id: "d252c_062",
    subject: "da-252",
    question: "The area of a trapezoid used in offset surveying (trapezoidal rule) with parallel sides a and b and height h is:",
    options: ["a × b × h", "(a + b) / 2 × h", "(a × b) / h", "√(a × b) × h"],
    correct: 1,
    explanation: "Area of trapezoid = (a + b)/2 × h. The trapezoidal rule uses this formula between successive offset points to approximate the total area of an irregular field."
  },
  {
    id: "d252c_063",
    subject: "da-252",
    question: "Which of the following surface irrigation methods involves applying water in narrow channels cut parallel to crop rows?",
    options: ["Basin irrigation", "Border irrigation", "Furrow irrigation", "Sprinkler irrigation"],
    correct: 2,
    explanation: "Furrow irrigation involves applying water in narrow channels (furrows) cut parallel to crop rows. Water infiltrates laterally into the root zone from the furrows."
  },
  {
    id: "d252c_064",
    subject: "da-252",
    question: "Which statement correctly describes the difference between a plan and a map in surveying?",
    options: ["A plan shows vertical distances; a map shows horizontal distances", "A plan uses a large scale; a map uses a small scale", "A plan is more inaccurate than a map", "A plan is used for marine surveys; a map for land surveys"],
    correct: 1,
    explanation: "If the scale is large, the representation is called a plan; if the scale is small, it is called a map. Plans show only horizontal distances on paper."
  },
  {
    id: "d252c_065",
    subject: "da-252",
    question: "The chain links are made of 4 mm galvanized mild steel wire. What connects the ends of adjacent links?",
    options: ["Welded joints only", "Screw bolts", "Three oval rings", "Leather straps"],
    correct: 2,
    explanation: "Chain link ends are bent into loops and connected by three oval rings (the central one being circular). This provides flexibility and makes the chain less liable to kink."
  },
  {
    id: "d252c_066",
    subject: "da-252",
    question: "To improve visibility of ranging rods at a distance, small flags of what size are fastened at the top?",
    options: ["10 cm square", "25 cm square", "50 cm square", "100 cm square"],
    correct: 1,
    explanation: "When ranging rods are at a considerable distance, red and white or yellow flags of about 25 cm square are fastened at the top to improve visibility."
  },
  {
    id: "d252c_067",
    subject: "da-252",
    question: "The Parshall flume is a water measuring device used in irrigation to measure:",
    options: ["Groundwater level", "Flow rate in open channels and canals", "Soil moisture", "Pump discharge pressure"],
    correct: 1,
    explanation: "A Parshall flume is a fixed hydraulic structure used to measure the discharge (flow rate) in open channels, canals, and irrigation distribution systems."
  },
  {
    id: "d252c_068",
    subject: "da-252",
    question: "The metallic tape for surveying is reinforced with fine brass or copper wires embedded in cotton/linen. This reinforcement primarily serves to:",
    options: ["Make the tape heavier for stability", "Prevent stretching of the fibres", "Make the tape electrically safe near power lines", "Improve the visibility of graduations"],
    correct: 1,
    explanation: "The metallic tape is reinforced with fine brass or copper wires to prevent stretching of the linen/cotton fibres, making it more dimensionally stable than a plain cloth tape."
  },
  {
    id: "d252c_069",
    subject: "da-252",
    question: "Computer automation in greenhouse cultivation is primarily used for:",
    options: ["Financial record keeping", "Monitoring and automatically controlling temperature, humidity, CO₂, irrigation, and lighting", "Marketing and sales management", "Harvesting operations"],
    correct: 1,
    explanation: "Computer automation in greenhouses controls all environmental parameters: temperature, humidity, CO₂ concentration, irrigation scheduling, and lighting — optimizing crop growth."
  },
  {
    id: "d252c_070",
    subject: "da-252",
    question: "In greenhouse horticulture, the Chrysanthemum and Poinsettia require a night temperature of approximately:",
    options: ["7°C", "10°C", "16°C", "17-18°C"],
    correct: 3,
    explanation: "Chrysanthemum and Poinsettia require a night temperature of approximately 17-18°C. This is between the requirements of rose (16°C) and African violet (21-22°C)."
  },
  {
    id: "d252c_071",
    subject: "da-252",
    question: "Which of the following advantages does sprinkler irrigation have over surface irrigation?",
    options: ["Lower initial cost", "Suitable for undulating terrain without land leveling", "Requires no pump or pressure", "Better for paddy (flooded field) cultivation"],
    correct: 1,
    explanation: "Sprinkler irrigation is suitable for undulating (uneven) terrain where land leveling is costly or impractical. Surface irrigation requires nearly level land for uniform water distribution."
  },
  {
    id: "d252c_072",
    subject: "da-252",
    question: "The Steel Tape for surveying is available in various lengths including 1, 2, 10, 30, and 50 m. It is most commonly used in surveying because of its:",
    options: ["Low cost and easy availability", "High accuracy and suitability for precise measurements", "Flexibility and ease of handling in rough terrain", "Resistance to moisture (unlike cloth tape)"],
    correct: 1,
    explanation: "The steel tape is highly accurate, made of steel ribbon or stainless steel (possibly with vinyl coating). It is used for very precise measurements and for checking chain accuracy."
  },
  {
    id: "d252c_073",
    subject: "da-252",
    question: "The main use of survey in agriculture (agricultural surveying) includes:",
    options: ["Determining the altitude of mountain peaks", "Laying out contour lines, terrace lines, drainage lines, and computing farm areas", "Navigation of ships through rivers", "Exploring mineral wealth underground"],
    correct: 1,
    explanation: "Agricultural surveying includes laying out contour and terrace lines for soil conservation, drainage lines, profile lines for land leveling, and computing field/farm areas."
  },
  {
    id: "d252c_074",
    subject: "da-252",
    question: "Which of the following measures is used to test the verticality of ranging poles in the field?",
    options: ["Cross-staff", "Optical square", "Plumb bob", "Ranging rod"],
    correct: 2,
    explanation: "A plumb bob is used for testing the verticality of ranging poles. It is also used for accurate centering of compass, level, or theodolite over a station mark."
  },
  {
    id: "d252c_075",
    subject: "da-252",
    question: "Greenhouse relative humidity management is important because high humidity (above 80%) primarily causes:",
    options: ["Reduced CO₂ absorption by plants", "Increased risk of fungal diseases and physiological disorders", "Decreased photosynthesis due to excessive moisture", "Overheating of the greenhouse structure"],
    correct: 1,
    explanation: "Relative humidity above 80% in greenhouses promotes fungal diseases (botrytis, powdery mildew) and physiological disorders. Acceptable RH range is 50-80% for most crops."
  }"""

print("Appending lecture questions to da-252-lectures.ts...")
append_questions(LECTURE_FILE, lecture_questions)
print("Done.")

print("Appending combined questions to da-252.ts...")
append_questions(COMBINED_FILE, combined_questions)
print("Done.")

print("Shuffling da-252-lectures.ts...")
shuffle_file(LECTURE_FILE)
print("Done.")

print("Shuffling da-252.ts...")
shuffle_file(COMBINED_FILE)
print("Done.")

print("All done for DA-252!")
