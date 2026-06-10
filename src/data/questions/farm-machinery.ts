import { Question } from "@/types";

export const farmMachineryQuestions: Question[] = [
  {
    id: "fm001",
    subject: "farm-machinery",
    question: "The primary tillage implement used to cut, break and invert the soil is:",
    options: ["Disc harrow", "Rotavator", "Cultivator", "Mould board plough"],
    correct: 3,
    explanation: "Mould board plough is the primary tillage implement that cuts, lifts, breaks and inverts the soil. It is ideal for deep ploughing and burying crop residues and weeds."
  },
  {
    id: "fm002",
    subject: "farm-machinery",
    question: "The draft of a tillage implement is:",
    options: ["Horizontal force required to pull the implement", "Weight of the implement", "Vertical force on the implement", "Speed of operation"],
    correct: 0,
    explanation: "Draft is the horizontal force (pull) required to move a tillage implement through the soil. It depends on soil type, moisture, depth of tillage, and implement design."
  },
  {
    id: "fm003",
    subject: "farm-machinery",
    question: "PTO (Power Take Off) on a tractor transmits power at a standard speed of:",
    options: ["250 RPM", "540 RPM and 1000 RPM", "1500 RPM", "3000 RPM"],
    correct: 1,
    explanation: "Standard PTO speeds are 540 RPM (for most implements) and 1000 RPM (for high-speed implements). PTO transmits tractor engine power to mounted or trailed implements."
  },
  {
    id: "fm004",
    subject: "farm-machinery",
    question: "A disc plough is preferred over mould board plough in:",
    options: ["Soft sandy soils as per agricultural engineering and machinery standards", "Well-pulverized garden soils as per agricultural engineering and machinery standards", "Waterlogged soils as per agricultural engineering and machinery standards", "Hard, dry, rocky or sticky soils that would cause problems for mould board"],
    correct: 3,
    explanation: "Disc ploughs are preferred in hard, dry, rocky or sticky soils because the disc can roll over obstructions. They work better than mould board plough in difficult soil conditions."
  },
  {
    id: "fm005",
    subject: "farm-machinery",
    question: "The function of a seed drill is to:",
    options: ["Only furrow opening in farm operations", "Metering, conveying and placing seeds at proper depth and spacing", "Only seed covering for tractor operation", "Fertilizer application only in agricultural machinery"],
    correct: 1,
    explanation: "A seed drill performs multiple functions: furrow opening, metering the seed at correct rate, conveying seeds to furrows, placing at proper depth and spacing, and covering and firming the soil over seeds."
  },
  {
    id: "fm006",
    subject: "farm-machinery",
    question: "Threshing efficiency is defined as:",
    options: ["Grains recovered / total grain input × 100", "Speed of threshing / total time in farm operations", "Grains threshed cleanly / total grains in crop × 100", "Total output / total input for tractor operation"],
    correct: 2,
    explanation: "Threshing efficiency = (Grains separated from straw / Total grains in crop) × 100. Good threshers should have efficiency above 99% with minimum grain damage."
  },
  {
    id: "fm007",
    subject: "farm-machinery",
    question: "Which type of plough is best suited for initial breaking of virgin or sod land?",
    options: ["Sub-soil plough", "Mould board plough", "Disc plough", "Chisel plough"],
    correct: 2,
    explanation: "Disc ploughs are best for breaking virgin/sod land because the rolling disc action cuts through tough grass roots and hard soils that would clog mould board ploughs."
  },
  {
    id: "fm008",
    subject: "farm-machinery",
    question: "The hydraulic system in a tractor is used for:",
    options: ["Steering only in farm operations", "Fuel injection in agricultural machinery", "Engine cooling for tractor operation", "Lifting and controlling mounted implements and draft control"],
    correct: 3,
    explanation: "The tractor hydraulic system is used to lift, lower and control mounted implements through the three-point hitch. It also provides draft control to maintain uniform working depth."
  },
  {
    id: "fm009",
    subject: "farm-machinery",
    question: "Field efficiency of an implement is:",
    options: ["Theoretical field capacity / Effective field capacity", "Fuel consumed / area covered for tractor operation", "Area covered / time taken in farm operations", "Effective field capacity / Theoretical field capacity × 100"],
    correct: 3,
    explanation: "Field efficiency = (Effective field capacity / Theoretical field capacity) × 100. It accounts for time lost in turning, adjustments, and other non-productive activities."
  },
  {
    id: "fm010",
    subject: "farm-machinery",
    question: "Rotavator is used for:",
    options: ["Seedbed preparation, mixing crop residues and weeds in one pass", "Deep ploughing only in farm operations", "Harvesting crops as per agricultural engineering and machinery standards", "Irrigation as per agricultural engineering and machinery standards"],
    correct: 0,
    explanation: "Rotavator (rotary tiller) uses powered rotating blades to prepare a fine seedbed, mix crop residues, and kill weeds in one pass. It is PTO driven and creates a good tilth."
  },
  {
    id: "fm011",
    subject: "farm-machinery",
    question: "The three-point linkage of a tractor consists of:",
    options: ["One top link and one lower link", "Four links for tractor operation", "Three equal links in farm operations", "Two lower links and one top link (central)"],
    correct: 3,
    explanation: "The standard three-point linkage has two lower links and one central top link forming a triangle. It provides stable attachment and allows hydraulic lifting of implements."
  },
  {
    id: "fm012",
    subject: "farm-machinery",
    question: "A combine harvester performs which operations simultaneously?",
    options: ["Ploughing and sowing", "Reaping, threshing, cleaning and collecting grain", "Transplanting and irrigating", "Spraying and fertilizing"],
    correct: 1,
    explanation: "A combine harvester performs reaping (cutting), threshing (separating grain from straw), cleaning (removing chaff), and collecting grain in a tank in a single operation."
  },
  {
    id: "fm013",
    subject: "farm-machinery",
    question: "The most common type of pump used for irrigation in India is:",
    options: ["Axial flow pump", "Reciprocating pump", "Centrifugal pump", "Gear pump"],
    correct: 2,
    explanation: "Centrifugal pumps are the most widely used for irrigation in India due to their simple design, ability to handle large volumes, ease of operation, and suitability for a range of heads."
  },
  {
    id: "fm014",
    subject: "farm-machinery",
    question: "The efficiency of a centrifugal pump is the ratio of:",
    options: ["Water horsepower to shaft (brake) horsepower × 100", "Input power to output power", "Head developed to speed in farm operations", "Flow rate to head for tractor operation"],
    correct: 0,
    explanation: "Pump efficiency = (Water HP / Shaft HP) × 100. Water HP is the actual power delivered to water, and shaft HP is the power input to the pump shaft."
  },
  {
    id: "fm015",
    subject: "farm-machinery",
    question: "Zero tillage (no-till) farming helps in:",
    options: ["Increasing soil compaction in farm operations", "Requiring more herbicides only for tractor operation", "Conservation of soil moisture, reducing fuel cost and soil erosion", "Reducing crop yields in agricultural machinery"],
    correct: 2,
    explanation: "Zero tillage conserves soil moisture, reduces fuel and labor costs, prevents soil erosion, maintains soil structure, reduces weed germination, and allows timely sowing especially in rice-wheat systems."
  },
  {
    id: "fm016",
    subject: "farm-machinery",
    question: "Specific draft of an implement is:",
    options: ["Total draft × width in farm operations", "Draft per unit cross-sectional area of soil cut (kN/m²)", "Draft / speed for tractor operation", "Total power required in agricultural machinery"],
    correct: 1,
    explanation: "Specific draft = Total draft / (Width × Depth) = Force per unit cross-sectional area of soil cut. It is used to compare efficiency of different tillage implements."
  },
  {
    id: "fm017",
    subject: "farm-machinery",
    question: "The main advantage of minimum tillage is:",
    options: ["Higher pest control in farm operations", "Better aeration for tractor operation", "Reduces soil disturbance, erosion, fuel consumption and time", "Increases weeds for control practice"],
    correct: 2,
    explanation: "Minimum tillage reduces soil disturbance to a minimum, conserving soil structure, reducing erosion, fuel consumption, labor costs, and time while maintaining or improving yields."
  },
  {
    id: "fm018",
    subject: "farm-machinery",
    question: "Chaff cutter is used for:",
    options: ["Cutting wheat crop in farm operations", "Cutting fodder/straw into small pieces for animal feed", "Making compost for tractor operation", "Irrigation in agricultural machinery"],
    correct: 1,
    explanation: "A chaff cutter cuts green or dry fodder (crop straw) into small pieces to improve palatability, reduce wastage, and facilitate digestion when fed to livestock."
  },
  {
    id: "fm019",
    subject: "farm-machinery",
    question: "The capacity of a tractor is generally measured in:",
    options: ["RPM in farm operations", "kg weight for tractor operation", "Kilowatts (kW) or horse power (HP)", "Litres of fuel tank"],
    correct: 2,
    explanation: "Tractor capacity/power is measured in kilowatts (kW) or horsepower (HP or CV). Common farm tractors range from 25 HP to 90 HP in India."
  },
  {
    id: "fm020",
    subject: "farm-machinery",
    question: "A transplanter is used for:",
    options: ["Broadcasting seeds in farm operations", "Deep ploughing for tractor operation", "Mechanical planting of seedlings at uniform spacing and depth", "Harvesting as per agricultural engineering and machinery standards"],
    correct: 2,
    explanation: "A transplanter mechanically plants seedlings (rice, vegetables) at uniform spacing and depth, replacing manual transplanting. Rice transplanters are widely used to reduce labor and ensure uniform spacing."
  },
  {
    id: "fm021",
    subject: "farm-machinery",
    question: "The function of a subsoiler is to:",
    options: ["Break up hardpan/plough pan below normal ploughing depth (40-90 cm)", "Surface tillage only in farm operations", "Level the field for tractor operation", "Apply fertilizers as per agricultural engineering and machinery standards"],
    correct: 0,
    explanation: "A subsoiler breaks up the hard compacted layer (hardpan or plough pan) below normal ploughing depth (40-90 cm) to improve water infiltration, drainage, and root penetration."
  },
  {
    id: "fm022",
    subject: "farm-machinery",
    question: "Water horsepower (WHP) of a pump is calculated as:",
    options: ["WHP = Q × H / 75 (metric) or Q × H / 3960 (US)", "WHP = RPM × Torque as per agricultural engineering and machinery standards", "WHP = Pressure × Area as per agricultural engineering and machinery standards", "WHP = Flow rate × Efficiency in agricultural machinery"],
    correct: 0,
    explanation: "Water HP = (Q × H) / 75 in metric system, where Q = discharge (litres/sec), H = total head (m). In US system, WHP = (GPM × H) / 3960."
  },
  {
    id: "fm023",
    subject: "farm-machinery",
    question: "The most commonly used seed metering mechanism in seed drills for small seeds is:",
    options: ["Pneumatic system", "Brush feed type", "Fluted roller type", "Belt conveyor"],
    correct: 2,
    explanation: "Fluted (force feed) roller metering mechanism is most commonly used in seed drills for small seeds like wheat, rice, and pulses. The fluted roller pushes seeds through adjustable gates."
  },
  {
    id: "fm024",
    subject: "farm-machinery",
    question: "Winnowing is the process of:",
    options: ["Sowing seeds as per agricultural engineering and machinery standards", "Cleaning seeds by using air current to separate grain from chaff", "Harvesting grain as per agricultural engineering and machinery standards", "Threshing grain as per agricultural engineering and machinery standards"],
    correct: 1,
    explanation: "Winnowing separates threshed grain from chaff and straw using an air current (wind or fan). Heavier grains fall while lighter chaff is blown away."
  },
  {
    id: "fm025",
    subject: "farm-machinery",
    question: "Turbocharger in a tractor engine is used to:",
    options: ["Cool the engine in farm operations", "Increase engine power by forcing more air into cylinders", "Reduce fuel consumption for tractor operation", "Control engine speed in agricultural machinery"],
    correct: 1,
    explanation: "A turbocharger uses exhaust gas to drive a compressor that forces more air into the engine cylinders, increasing power output without increasing engine size."
  },
  {
    id: "fm026",
    subject: "farm-machinery",
    question: "The ideal soil moisture condition for primary tillage operations is:",
    options: ["Friable condition (neither too wet nor too dry)", "Very dry for tractor operation", "Very wet (saturated) in farm operations", "Waterlogged in agricultural machinery"],
    correct: 0,
    explanation: "Friable soil condition (near field capacity but not too wet) is ideal for tillage as it requires minimum draft, creates good aggregates, and reduces compaction risks."
  },
  {
    id: "fm027",
    subject: "farm-machinery",
    question: "The working width of a 3-bottom mould board plough with 35 cm bottom width is:",
    options: ["35 cm", "105 cm", "70 cm", "140 cm"],
    correct: 1,
    explanation: "Working width = Number of bottoms × Width per bottom = 3 × 35 cm = 105 cm. Each bottom of the plough cuts a furrow of the specified width."
  },
  {
    id: "fm028",
    subject: "farm-machinery",
    question: "Precision farming uses which technology for variable rate application of inputs?",
    options: ["GPS and GIS", "Traditional methods", "Manual measurements", "Weather forecasts only"],
    correct: 0,
    explanation: "Precision farming uses GPS (Global Positioning System) and GIS (Geographic Information System) along with remote sensing and sensors for variable rate application of seeds, fertilizers, and pesticides."
  },
  {
    id: "fm029",
    subject: "farm-machinery",
    question: "A power sprayer operates at a pressure of:",
    options: ["5-20 bar", "1-2 bar", "50-100 bar", "0.1-0.5 bar"],
    correct: 0,
    explanation: "Power sprayers (engine-driven) typically operate at 5-20 bar pressure for field crops. High-pressure sprayers for orchards may operate at higher pressures."
  },
  {
    id: "fm030",
    subject: "farm-machinery",
    question: "The purpose of differential in a tractor is to:",
    options: ["Allow rear wheels to rotate at different speeds during turns", "Increase tractor speed in farm operations", "Engage PTO as per agricultural engineering and machinery standards", "Control hydraulics as per agricultural engineering and machinery standards"],
    correct: 0,
    explanation: "The differential allows the two rear wheels to rotate at different speeds when the tractor turns, preventing tire scuffing and wheel slip while maintaining power transmission."
  },
  {
    id: "fm031",
    subject: "farm-machinery",
    question: "Sickle bar (reciprocating) cutter is used in:",
    options: ["Reapers and combine harvesters for cutting crops", "Seed drills in farm operations", "Threshers for tractor operation", "Planters in agricultural machinery"],
    correct: 0,
    explanation: "Reciprocating sickle bar cutters are used in reapers and combine harvesters to cut crops. The serrated blades move back and forth to cut crop stems at the base."
  },
  {
    id: "fm032",
    subject: "farm-machinery",
    question: "Hydraulic ram is used for:",
    options: ["Power generation as per agricultural engineering and machinery standards", "Tractor hydraulics as per agricultural engineering and machinery standards", "Pump priming as per agricultural engineering and machinery standards", "Lifting water to higher elevation using water hammer effect without external power"],
    correct: 3,
    explanation: "A hydraulic ram uses the kinetic energy of falling water (water hammer effect) to pump a small portion of that water to a higher elevation without any external power source."
  },
  {
    id: "fm033",
    subject: "farm-machinery",
    question: "The critical speed of a tractor refers to:",
    options: ["Maximum engine speed as per agricultural engineering and machinery standards", "Speed for PTO operation in agricultural machinery", "Speed for road transport for tractor operation", "Speed at which engine operates most efficiently for field work (4-8 km/h)"],
    correct: 3,
    explanation: "The critical operating speed for most tillage operations is 4-8 km/h, which balances draft requirements, quality of work, and fuel efficiency."
  },
  {
    id: "fm034",
    subject: "farm-machinery",
    question: "Which type of fertilizer applicator is used for placement of fertilizers below seed?",
    options: ["Broadcaster", "Slurry applicator", "Seed-cum-fertilizer drill", "Duster"],
    correct: 2,
    explanation: "Seed-cum-fertilizer drill places fertilizers below and to the side of the seed (2-5 cm) in a single operation, improving nutrient use efficiency and preventing fertilizer-seed contact burn."
  },
  {
    id: "fm035",
    subject: "farm-machinery",
    question: "The process of removing stones, clods and crop residues to prepare a smooth seedbed is done by:",
    options: ["Primary tillage in farm operations", "Subsoiling for tractor operation", "Secondary tillage using harrows and levelers", "Deep ploughing in agricultural machinery"],
    correct: 2,
    explanation: "Secondary tillage operations (disc harrow, tine harrow, land leveler) break clods, remove weeds, and prepare a fine, smooth seedbed after primary tillage."
  },
  {
    id: "fm036",
    subject: "farm-machinery",
    question: "Brush cutter is used for:",
    options: ["Cutting paddy crop in farm operations", "Clearing bushes, shrubs and tall weeds in non-crop areas", "Hedge trimming only for tractor operation", "Lawn mowing in agricultural machinery"],
    correct: 1,
    explanation: "A brush cutter is a portable power tool used to clear thick vegetation, bushes, shrubs, and tall weeds in areas unsuitable for larger machines like land clearing and bund maintenance."
  },
  {
    id: "fm037",
    subject: "farm-machinery",
    question: "The function of a cultivator in secondary tillage is:",
    options: ["Deep ploughing in farm operations", "Seed placement in agricultural machinery", "Harvesting as per agricultural engineering and machinery standards", "Loosening and aerating soil, destroying weeds between crop rows"],
    correct: 3,
    explanation: "A cultivator loosens and aerates soil, destroys weeds, and breaks the surface crust between crop rows during the crop growing period without disturbing plant roots."
  },
  {
    id: "fm038",
    subject: "farm-machinery",
    question: "Volumetric efficiency of a pump is:",
    options: ["Ratio of input to output energy", "Ratio of head to power", "Ratio of actual discharge to theoretical discharge", "Ratio of speed to discharge"],
    correct: 2,
    explanation: "Volumetric efficiency = Actual discharge / Theoretical discharge × 100. It accounts for leakage losses within the pump. High volumetric efficiency means less internal leakage."
  },
  {
    id: "fm039",
    subject: "farm-machinery",
    question: "A transplanting machine for paddy requires seedlings of age:",
    options: ["5-7 days", "45-60 days", "15-25 days (mat type nursery)", "More than 60 days"],
    correct: 2,
    explanation: "Rice transplanters require mat-type nursery seedlings of 15-25 days old. These short-duration seedlings have a dense, mat-like root structure suitable for mechanical transplanting."
  },
  {
    id: "fm040",
    subject: "farm-machinery",
    question: "The main limitation of disc plough over mould board plough is:",
    options: ["Higher draft as per agricultural engineering and machinery standards", "Very expensive as per agricultural engineering and machinery standards", "Cannot work in hard soils for tractor operation", "Does not invert soil as thoroughly, leaving more surface residue"],
    correct: 3,
    explanation: "Disc plough does not invert and bury soil and crop residues as completely as mould board plough, resulting in incomplete weed burial and less effective soil sterilization."
  },
  {
    id: "fm041",
    subject: "farm-machinery",
    question: "RNAM stands for:",
    options: ["Research Network for Advanced Machinery", "Regional Network for Agricultural Machinery", "Rural Network for Agro Mechanization", "Rotating Nozzle Application Method"],
    correct: 1,
    explanation: "RNAM (Regional Network for Agricultural Machinery) is an FAO sponsored network to promote farm mechanization and development of appropriate agricultural machinery in Asia."
  },
  {
    id: "fm042",
    subject: "farm-machinery",
    question: "The unit of measuring tractor power at the drawbar is:",
    options: ["RPM in farm operations", "Drawbar Horse Power (DBHP) or kW", "Torque in Nm", "Speed in km/h"],
    correct: 1,
    explanation: "Drawbar Horsepower (DBHP) measures the actual power available at the tractor drawbar hook for pulling implements, accounting for all power losses in transmission and wheel slip."
  },
  {
    id: "fm043",
    subject: "farm-machinery",
    question: "Conservation tillage retains crop residue of at least:",
    options: ["10% soil cover", "75% residue burned", "50% crop residue in soil", "30% soil surface cover after planting"],
    correct: 3,
    explanation: "Conservation tillage maintains at least 30% of the soil surface covered with crop residue after planting, which reduces erosion, conserves moisture, and improves soil health."
  },
  {
    id: "fm044",
    subject: "farm-machinery",
    question: "The sprayer nozzle most suitable for herbicide application to avoid drift is:",
    options: ["Hollow cone nozzle in farm operations", "Low drift flat fan nozzle (flood nozzle)", "Flat fan nozzle for tractor operation", "Rotary atomizer in agricultural machinery"],
    correct: 1,
    explanation: "Low-drift flat fan nozzles produce larger droplets at lower pressure, significantly reducing spray drift which is critical for herbicide application near sensitive crops."
  },
  {
    id: "fm045",
    subject: "farm-machinery",
    question: "Specific fuel consumption of a tractor engine is expressed as:",
    options: ["Grams of fuel per kW per hour (g/kW·h)", "Litres per hour in farm operations", "km per litre for tractor operation", "HP per litre in agricultural machinery"],
    correct: 0,
    explanation: "Specific fuel consumption (SFC) = Fuel consumed (g) / Power output (kW) × Time (h). It measures engine efficiency - lower SFC means more efficient fuel use."
  },
  {
    id: "fm046",
    subject: "farm-machinery",
    question: "The main purpose of a land leveler (laser leveler) is:",
    options: ["Deep ploughing as per agricultural engineering and machinery standards", "Compaction as per agricultural engineering and machinery standards", "Drainage as per agricultural engineering and machinery standards", "Creating a uniform, flat field surface to improve water distribution in surface irrigation"],
    correct: 3,
    explanation: "A laser land leveler creates a precisely level or graded field surface, improving uniformity of water distribution in surface irrigation, reducing water waste, and enabling better crop stands."
  },
  {
    id: "fm047",
    subject: "farm-machinery",
    question: "Paddy thresher separates grains from paddy panicles by:",
    options: ["Impact (spike tooth or axial flow cylinder)", "Cutting in farm operations", "Squeezing for tractor operation", "Wind in agricultural machinery"],
    correct: 0,
    explanation: "Paddy threshers use impact action - spike tooth or axial flow cylinders rotating at high speed beat and rub paddy panicles against concave/grate to separate grains."
  },
  {
    id: "fm048",
    subject: "farm-machinery",
    question: "Tractor ballasting is done to:",
    options: ["Increase fuel efficiency in farm operations", "Cool the engine in agricultural machinery", "Reduce compaction for tractor operation", "Improve traction by adding weight to reduce wheel slip"],
    correct: 3,
    explanation: "Ballasting adds weight (water in tires, cast iron weights) to improve tractor traction by increasing the normal force between tire and soil, reducing wheel slip."
  },
  {
    id: "fm049",
    subject: "farm-machinery",
    question: "CIAE stands for:",
    options: ["Central Institute of Agricultural Engineering", "Central Institute for Agri Extension", "Crop Improvement and Agricultural Engineering", "Central Irrigation and Agricultural Equipment"],
    correct: 0,
    explanation: "CIAE - Central Institute of Agricultural Engineering, Bhopal is an ICAR institute that designs, develops and tests farm machinery and implements for Indian conditions."
  },
  {
    id: "fm050",
    subject: "farm-machinery",
    question: "The ideal tractor wheel slip for field operations is:",
    options: ["0-2%", "8-15%", "20-30%", "More than 40%"],
    correct: 1,
    explanation: "The ideal wheel slip for tractor field operations is 8-15%. This range provides sufficient traction with acceptable efficiency. Less than 8% means too much ballast; more than 15% wastes power."
  },
];
