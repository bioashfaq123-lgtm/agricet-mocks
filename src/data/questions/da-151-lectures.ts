// ===== FILE: da-151-lectures.ts =====
import { Question } from "@/types";

export const da151LectureQuestions: Question[] = [

  // ── Lecture 1: Farm Power Sources ──────────────────────────────────────────
  {
    id: "d151l_001",
    subject: "da-151",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "One horsepower is equal to how many watts?",
    options: ["550 watts", "746 watts", "1000 watts", "1341 watts"],
    correct: 1,
    explanation: "1 HP = 746 watts. This is the standard mechanical horsepower used in farm power calculations. Knowing this conversion is essential for comparing engine ratings."
  },
  {
    id: "d151l_002",
    subject: "da-151",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "What is the typical engine power range of a power tiller?",
    options: ["25–35 HP", "15–20 HP", "8–12 HP", "2–5 HP"],
    correct: 2,
    explanation: "A power tiller (walk-behind two-wheel tractor) typically has an engine of 8–12 HP. It is widely used in small holdings and wet paddy fields where a four-wheel tractor cannot manoeuvre easily."
  },
  {
    id: "d151l_003",
    subject: "da-151",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Which unit is the SI unit of power used in modern farm machinery specifications?",
    options: ["Kilowatt (kW)", "Joule (J)", "Newton (N)", "Horsepower (HP)"],
    correct: 0,
    explanation: "The SI unit of power is the kilowatt (kW). While horsepower is still widely used in India, kW is the internationally recognised SI unit. 1 kW = 1.341 HP."
  },
  {
    id: "d151l_004",
    subject: "da-151",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Which type of farm power is classified as 'animate power'?",
    options: ["Diesel engines", "Bullock draft power", "Electric motors", "Solar energy"],
    correct: 1,
    explanation: "Animate (biological) power includes human labour and draught animals such as bullocks, buffaloes, camels and horses. Bullock draft power is the most common animate farm power source in India."
  },
  {
    id: "d151l_005",
    subject: "da-151",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "What is the approximate work capacity of a pair of bullocks in a day?",
    options: ["4–5 ha/day", "2–3 ha/day", "1–1.5 ha/day", "0.5–0.75 ha/day"],
    correct: 3,
    explanation: "A pair of bullocks can plough about 0.5–0.75 ha per day under normal field conditions. This low output is one reason for mechanisation of Indian agriculture."
  },
  {
    id: "d151l_006",
    subject: "da-151",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Solar power in agriculture is primarily used for which of the following purposes?",
    options: ["Powering grain combine threshers", "Pumping irrigation water via solar pumps", "Operating mould board ploughs", "Running combine harvesters"],
    correct: 1,
    explanation: "Solar photovoltaic panels are widely used to run solar water pumps for irrigation in India. The PM-KUSUM scheme promotes solar pumps for farmers. Solar is not yet used for heavy tillage machinery."
  },
  {
    id: "d151l_007",
    subject: "da-151",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Which of the following is NOT a source of mechanical farm power?",
    options: ["Petrol engine", "Electric motor", "Diesel engine", "Bullock pair"],
    correct: 3,
    explanation: "Mechanical power sources include diesel engines, petrol engines, electric motors and wind engines. Bullock pair is an animate (biological) power source, not a mechanical one."
  },
  {
    id: "d151l_008",
    subject: "da-151",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The average human being can deliver power at the rate of approximately:",
    options: ["0.05 HP for 8 hours", "1.0 HP for 8 hours", "0.1 HP for 8 hours", "0.5 HP for 8 hours"],
    correct: 2,
    explanation: "A healthy adult male can sustain about 0.1 HP (75 W) over a full working day of 8 hours. Short bursts can reach 0.5 HP but cannot be maintained. This low output explains the need for mechanisation."
  },
  {
    id: "d151l_009",
    subject: "da-151",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Which of the following power sources has the highest efficiency for converting input energy to useful mechanical work?",
    options: ["Electric motor (85–95%)", "Diesel engine (32–38%)", "Steam engine (15–20%)", "Petrol engine (25–32%)"],
    correct: 0,
    explanation: "Electric motors are the most efficient prime movers, converting 85–95% of electrical energy to mechanical work. Diesel engines convert 32–38% and petrol engines 25–32%, while steam engines are the least efficient at 15–20%."
  },
  {
    id: "d151l_010",
    subject: "da-151",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "What is the relationship between 1 kW and HP?",
    options: ["1 kW = 1.341 HP", "1 kW = 0.746 HP", "1 kW = 0.5 HP", "1 kW = 2.0 HP"],
    correct: 0,
    explanation: "1 kW = 1.341 HP (or equivalently 1 HP = 0.746 kW). This conversion is frequently tested: a 10 HP engine = 7.46 kW."
  },
  {
    id: "d151l_011",
    subject: "da-151",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Wind energy in farm mechanisation is most commonly used for:",
    options: ["Primary tillage", "Lifting water from wells", "Combine harvesting", "Seed sowing"],
    correct: 1,
    explanation: "Traditional windmills have long been used to lift water from open wells for irrigation. Modern wind turbines can generate electricity for farm use, but direct windmill-based water lifting is the classical application."
  },
  {
    id: "d151l_012",
    subject: "da-151",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Farm power availability in India (HP/ha) has increased significantly. What was the approximate value in 2022?",
    options: ["4.0 kW/ha", "0.5 kW/ha", "1.5 kW/ha", "2.5 kW/ha"],
    correct: 3,
    explanation: "India's farm power availability increased from about 0.3 kW/ha in 1960–61 to approximately 2.5 kW/ha in recent years, reflecting rapid farm mechanisation. The target is 4 kW/ha."
  },
  {
    id: "d151l_013",
    subject: "da-151",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "A biogas plant on a farm primarily converts:",
    options: ["Crop residues to ethanol", "Solar radiation to electricity", "Wind energy to mechanical power", "Organic waste to methane for cooking/power"],
    correct: 3,
    explanation: "A biogas plant converts organic farm waste (cattle dung, crop residues) into methane-rich biogas through anaerobic digestion. The gas can be used for cooking, lighting and running dual-fuel engines."
  },
  {
    id: "d151l_014",
    subject: "da-151",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Which of the following best defines 'draft' in the context of farm power?",
    options: ["Engine torque at the crankshaft in plant breeding", "Total weight of the implement for crop improvement", "Vertical force on the tractor rear axle", "Horizontal pull required to move an implement through soil"],
    correct: 3,
    explanation: "Draft is the horizontal pull (force) required to move an implement through the soil at a specified speed and depth. It is measured in Newtons (N) or kilogram-force (kgf) and is a key parameter in tractor-implement matching."
  },
  {
    id: "d151l_015",
    subject: "da-151",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Power tillers are most suitable for which type of farming condition?",
    options: ["Orchards requiring canopy management", "Dryland farms needing deep tillage", "Large farm holdings of 10+ ha", "Small and marginal farms with wet paddy fields"],
    correct: 3,
    explanation: "Power tillers are ideal for small and marginal holdings (< 2 ha) and wet paddy cultivation because of their compact size, light weight, manoeuvrability and ability to operate in flooded fields."
  },
  {
    id: "d151l_016",
    subject: "da-151",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Which fuel is predominantly used in farm tractors in India?",
    options: ["CNG", "High Speed Diesel (HSD)", "Petrol", "LPG"],
    correct: 1,
    explanation: "Virtually all farm tractors in India use High Speed Diesel (HSD) because diesel engines have higher thermal efficiency (32–38%), lower fuel cost per unit energy, and better torque at low RPM compared to petrol engines."
  },

  // ── Lecture 2: Tractors – Types & Selection ─────────────────────────────────
  {
    id: "d151l_017",
    subject: "da-151",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Drawbar horsepower (DBHP) measures the power available:",
    options: ["At the tractor engine flywheel", "At the belt pulley", "At the tractor drawbar to pull implements", "At the PTO shaft"],
    correct: 2,
    explanation: "Drawbar HP is the power available at the tractor drawbar (hitch point) to pull trailed implements. It is always less than engine HP due to transmission and rolling losses, typically 75–80% of engine HP."
  },
  {
    id: "d151l_018",
    subject: "da-151",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "What is the standard PTO speed for most farm tractors in India?",
    options: ["540 RPM at 6-spline shaft", "750 RPM at 6-spline shaft", "1000 RPM at 6-spline shaft", "540 RPM at 21-spline shaft"],
    correct: 0,
    explanation: "The standard PTO speed is 540 RPM (for older implements) and 1000 RPM (for high-speed implements) on a 6-spline shaft. 540 RPM PTO is the most common standard in India for medium tractors."
  },
  {
    id: "d151l_019",
    subject: "da-151",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "A 4WD tractor has an advantage over 2WD primarily because it:",
    options: ["Provides better traction in wet and heavy soils", "Consumes less fuel per hour", "Is lighter and easier to manoeuvre", "Has lower purchase cost"],
    correct: 0,
    explanation: "4WD tractors drive all four wheels, giving about 30–40% better traction than 2WD in wet, heavy or hilly soils. They also have less wheel slip, improving field efficiency, though they cost more."
  },
  {
    id: "d151l_020",
    subject: "da-151",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Which tractor HP class is most suitable for small holdings of 1–3 ha in India?",
    options: ["Below 20 HP (mini tractors)", "36–50 HP", "20–35 HP", "Above 75 HP"],
    correct: 2,
    explanation: "Tractors in the 20–35 HP range are most widely sold in India for small to medium holdings. Mini tractors (<20 HP) suit very small plots, while 36–50 HP suits medium farms and above 50 HP suits large commercial farms."
  },
  {
    id: "d151l_021",
    subject: "da-151",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Belt HP (BHP) is measured at:",
    options: ["PTO shaft in plant breeding", "Engine crankshaft for crop improvement", "Drawbar in variety development", "Belt pulley mounted on the tractor"],
    correct: 3,
    explanation: "Belt HP is the power available at the belt pulley of the tractor, used to drive stationary machinery like threshers and grain mills via a flat belt. It is slightly higher than DBHP."
  },
  {
    id: "d151l_022",
    subject: "da-151",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The rated engine speed of a farm tractor engine is typically:",
    options: ["500–800 RPM", "1200–1500 RPM", "3000–3600 RPM", "1800–2200 RPM"],
    correct: 3,
    explanation: "Farm tractor diesel engines have a rated (governed) speed of 1800–2200 RPM. At this speed, maximum rated power is developed. Governors prevent over-speeding beyond this rated speed."
  },
  {
    id: "d151l_023",
    subject: "da-151",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Ribbed/lug tyres fitted on the rear wheels of a tractor primarily help in:",
    options: ["Reducing road damage", "Lowering fuel consumption", "Providing traction in soil", "Reducing tractor weight"],
    correct: 2,
    explanation: "Rear tractor tyres have deep V-shaped lugs (ribs) at an angle to the wheel circumference to provide maximum soil grip (traction) and prevent slipping. Front tyres are rib-type for steering."
  },
  {
    id: "d151l_024",
    subject: "da-151",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Wheel slip in a tractor should ideally be maintained at:",
    options: ["50% for maximum drawbar pull", "25–30% for maximum grip", "8–12% for optimum traction efficiency", "0% for best efficiency"],
    correct: 2,
    explanation: "Optimum traction efficiency is achieved at 8–12% wheel slip. Zero slip is impractical; higher slip (>20%) wastes power and damages soil structure. This range balances traction and power loss."
  },
  {
    id: "d151l_025",
    subject: "da-151",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The power take-off (PTO) is used to operate which type of implements?",
    options: ["Passive implements like mould board plough", "Rotary implements requiring external power (rotavator, sprayer, combine)", "Trailed disc ploughs only in plant breeding", "Land levellers only for crop improvement"],
    correct: 1,
    explanation: "PTO drives active (powered) implements like rotavators, seed drills with power metering, mist blowers, hydraulically driven sprayers, forage harvesters and combine threshing drums that need rotary power from the tractor."
  },
  {
    id: "d151l_026",
    subject: "da-151",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "What does 'tractor HP class' primarily help a farmer decide?",
    options: ["Number of gears in the transmission", "Matching tractor size to farm area and implement requirements", "Colour and brand of the tractor", "Fuel tank capacity in plant breeding"],
    correct: 1,
    explanation: "HP class guides implement matching and farm suitability. A small HP tractor cannot pull heavy implements efficiently; an oversized tractor is uneconomical on small farms. Correct matching improves efficiency and economics."
  },
  {
    id: "d151l_027",
    subject: "da-151",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Which factor is NOT considered while selecting a tractor for a farm?",
    options: ["Colour of the tractor body", "Farm size and topography", "Type of crops grown", "Type of implements to be used"],
    correct: 0,
    explanation: "Tractor selection is based on farm area, soil type, topography, type of operations, implements needed, power requirement, availability of service, and cost. Colour has no bearing on the selection criteria."
  },
  {
    id: "d151l_028",
    subject: "da-151",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Engine HP is always greater than drawbar HP because:",
    options: ["Drawbar HP includes additional fuel consumption in plant breeding", "Drawbar is operated at higher speeds for crop improvement", "Transmission losses, rolling resistance and implement weight reduce available power at drawbar", "Engine HP does not include governor losses in variety development"],
    correct: 2,
    explanation: "Engine HP is the gross power. By the time power reaches the drawbar, losses occur in the transmission (gearbox, differential), rolling resistance of tractor tyres, and implement weight. DBHP = Engine HP × 0.75–0.80 approximately."
  },
  {
    id: "d151l_029",
    subject: "da-151",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Compact utility tractors (mini tractors) of below 20 HP are most suitable for:",
    options: ["Large wheat farms > 10 ha", "Orchards, vegetable gardens and small plots", "Commercial sugarcane harvesting", "Deep subsoiling operations"],
    correct: 1,
    explanation: "Mini/compact tractors (<20 HP) are ideal for orchards, vineyards, vegetable farms and small plots where full-size tractors cannot manoeuvre. They can also pull small implements and run auxiliary equipment."
  },
  {
    id: "d151l_030",
    subject: "da-151",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Track-type (crawler) tractors are preferred for:",
    options: ["Road transport of farm produce", "Light vegetable farming in plant breeding", "Orchard spraying for crop improvement", "Waterlogged paddy fields and heavy clay soils"],
    correct: 3,
    explanation: "Crawler tractors have low ground pressure due to the large track contact area, making them ideal for waterlogged, swampy and heavy clay soils where wheeled tractors would sink or slip. They are also used on steep slopes."
  },
  {
    id: "d151l_031",
    subject: "da-151",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "What is the function of the three-point linkage on a tractor?",
    options: ["To connect the trailer for road transport", "To drive the PTO shaft", "To apply brakes on all four wheels", "To attach and hydraulically control mounted implements"],
    correct: 3,
    explanation: "The three-point linkage (Category I, II, III) allows mounted implements (ploughs, cultivators, rotavators) to be attached to the tractor and raised/lowered hydraulically. It also enables draft and position control of implements."
  },
  {
    id: "d151l_032",
    subject: "da-151",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The governor on a tractor engine maintains:",
    options: ["Constant fuel level in the tank", "Constant engine speed regardless of load variations", "Constant oil pressure in the sump", "Constant wheel speed regardless of load"],
    correct: 1,
    explanation: "The governor automatically regulates fuel supply to maintain near-constant engine speed when load changes. Without a governor, the engine would overspeed when load decreases and stall when load increases."
  },

  // ── Lecture 3: Tractor Engine & Systems ─────────────────────────────────────
  {
    id: "d151l_033",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "In a 4-stroke diesel engine, the correct sequence of strokes is:",
    options: ["Compression → Suction → Power → Exhaust", "Suction → Power → Compression → Exhaust", "Suction → Compression → Power → Exhaust", "Power → Suction → Compression → Exhaust"],
    correct: 2,
    explanation: "The correct sequence in a 4-stroke diesel engine is: (1) Suction/Induction, (2) Compression, (3) Power/Expansion, (4) Exhaust. One power stroke occurs every two revolutions of the crankshaft."
  },
  {
    id: "d151l_034",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "In a diesel engine, fuel ignition is caused by:",
    options: ["Heat of compressed air (compression ignition)", "Spark plug igniting fuel-air mixture", "Glow plug continuously", "Electric arc between electrodes"],
    correct: 0,
    explanation: "Diesel engines use compression ignition (CI). Air is compressed to a very high pressure (16:1 to 22:1 compression ratio), raising its temperature to 500–700°C. Diesel fuel injected into this hot compressed air ignites spontaneously."
  },
  {
    id: "d151l_035",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Which cooling system is most common in modern farm tractors?",
    options: ["Air cooling only", "Water (liquid) cooling with radiator", "Evaporative cooling", "Oil cooling only"],
    correct: 1,
    explanation: "Most farm tractors use water (liquid) cooling with a radiator, water pump, thermostat and fan. Water cooling maintains more uniform cylinder temperatures and handles higher engine outputs better than air cooling."
  },
  {
    id: "d151l_036",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The differential in a tractor transmission allows:",
    options: ["Both rear wheels to rotate at different speeds while turning", "The PTO to operate independently of ground speed", "Automatic gear changes based on load", "Equal power to both rear wheels at all times"],
    correct: 0,
    explanation: "The differential allows the two rear wheels to rotate at different speeds when the tractor turns, preventing tyre scrubbing and loss of control. When engaged (differential lock), both wheels are forced to rotate at the same speed for better traction in mud."
  },
  {
    id: "d151l_037",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "What is the compression ratio of a typical farm tractor diesel engine?",
    options: ["16:1 to 22:1", "6:1 to 8:1", "25:1 to 30:1", "10:1 to 12:1"],
    correct: 0,
    explanation: "Diesel engines have high compression ratios of 16:1 to 22:1 to generate sufficient heat for autoignition of the fuel. Petrol engines have lower compression ratios of 8:1 to 12:1 and require spark plugs."
  },
  {
    id: "d151l_038",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The function of the fuel injection pump in a diesel engine is to:",
    options: ["Deliver metered, high-pressure fuel to injectors at correct timing", "Filter impurities from diesel for crop improvement", "Pressurise the crankcase in variety development", "Cool the fuel before combustion in plant breeding"],
    correct: 0,
    explanation: "The fuel injection pump (FIP) delivers precisely metered quantities of diesel at very high pressure (150–300 bar) to the fuel injectors at exactly the right moment in the compression stroke for efficient combustion."
  },
  {
    id: "d151l_039",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Air-cooled engines are used in power tillers mainly because they are:",
    options: ["More fuel efficient", "More powerful than water-cooled", "Better suited for high ambient temperatures", "Simpler, lighter and require less maintenance"],
    correct: 3,
    explanation: "Air-cooled engines are simpler (no radiator, water pump, hoses), lighter, cheaper and require less maintenance. These advantages are critical for small power tillers used by resource-poor farmers."
  },
  {
    id: "d151l_040",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Which component of the tractor transmission is used to disengage engine power from the gearbox?",
    options: ["Final drive", "Differential", "Clutch", "Gearbox"],
    correct: 2,
    explanation: "The clutch is a friction device that connects or disconnects the engine from the transmission. Pressing the clutch pedal disengages the engine, allowing gear changes or stopping the tractor without stalling the engine."
  },
  {
    id: "d151l_041",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The lubrication system in a tractor engine serves to:",
    options: ["Clean the air filter in plant breeding", "Increase fuel efficiency by burning oil", "Cool the engine only for crop improvement", "Reduce friction, prevent wear, cool components and seal piston rings"],
    correct: 3,
    explanation: "Engine oil reduces metal-to-metal friction, prevents wear, helps cool components (especially pistons and bearings), seals piston rings against blow-by, and removes contaminants. Regular oil changes maintain these functions."
  },
  {
    id: "d151l_042",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Live PTO means:",
    options: ["PTO is driven by a separate small engine", "PTO speed varies with ground speed", "PTO can be engaged/disengaged independently of the clutch", "PTO operates only when the tractor is moving"],
    correct: 2,
    explanation: "A live (independent) PTO uses a two-stage clutch or separate clutch, allowing the PTO to run even when the tractor is stationary or when the main clutch is disengaged. This is essential for ground-driven equipment that must not stop when the tractor stops."
  },
  {
    id: "d151l_043",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Ground-driven (ground speed) PTO differs from independent PTO because:",
    options: ["It requires a separate diesel engine in plant breeding", "It has no safety guards for crop improvement", "Its speed is proportional to forward speed of the tractor", "It runs at 540 RPM always in variety development"],
    correct: 2,
    explanation: "Ground-driven (or live ground) PTO speed is proportional to the tractor's forward speed, not to engine RPM. This is useful for seed drills and fertiliser applicators where seed/fertiliser rate must be matched to forward travel speed."
  },
  {
    id: "d151l_044",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "What is the purpose of the thermostat in the tractor cooling system?",
    options: ["Maintain optimum engine operating temperature by regulating coolant flow", "Prevent engine from overheating by releasing coolant to the atmosphere", "Control the speed of the cooling fan", "Measure fuel temperature before injection"],
    correct: 0,
    explanation: "The thermostat regulates coolant temperature by blocking flow to the radiator when the engine is cold (helping it warm up quickly) and opening to allow full flow when operating temperature (75–85°C) is reached."
  },
  {
    id: "d151l_045",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The final drive in a tractor transmission:",
    options: ["Further reduces speed and increases torque to the rear axle", "Controls the hydraulic system in plant breeding", "Transfers power from the engine to the gearbox", "Drives the PTO shaft for crop improvement"],
    correct: 0,
    explanation: "The final drive (bull gear and pinion) provides the last stage of speed reduction and torque multiplication before power reaches the rear axle and wheels. It typically uses spur or helical gears in a large reduction ratio."
  },
  {
    id: "d151l_046",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "A turbocharger on a tractor engine primarily helps to:",
    options: ["Increase power output by forcing more air into the cylinders", "Reduce engine noise for crop improvement", "Improve fuel filtration in plant breeding", "Cool the engine oil in variety development"],
    correct: 0,
    explanation: "A turbocharger uses exhaust gas energy to drive a compressor that forces more air into the cylinders, enabling more fuel to be burned and increasing power output by 30–40% without increasing engine displacement."
  },
  {
    id: "d151l_047",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Which stroke in a 4-stroke engine actually produces power?",
    options: ["Suction stroke", "Power/expansion stroke", "Compression stroke", "Exhaust stroke"],
    correct: 1,
    explanation: "The power (expansion) stroke is the only stroke that produces mechanical work. Hot combustion gases expand and push the piston down, turning the crankshaft. The other three strokes consume power stored in the flywheel."
  },
  {
    id: "d151l_048",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The hydraulic system of a tractor is primarily used for:",
    options: ["Lifting and controlling mounted implements", "Cooling the engine", "Starting the engine", "Filtering the fuel"],
    correct: 0,
    explanation: "The tractor's hydraulic system uses an oil pump, control valve, and hydraulic cylinder to raise, lower and control the depth of mounted implements via the three-point linkage. It also powers some trailed equipment."
  },

  // ── Lecture 4: Primary Tillage Implements ───────────────────────────────────
  {
    id: "d151l_049",
    subject: "da-151",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "What is the main function of the mould board in a mould board plough?",
    options: ["Cleaning the plough share", "Cutting the furrow slice from the side", "Inverting, turning and pulverising the furrow slice", "Penetrating the soil vertically"],
    correct: 2,
    explanation: "The mould board receives the furrow slice cut by the share and turns/inverts it, burying weeds and crop residues. Its curved shape also breaks and crumbles the soil. This inversion is the primary tillage action."
  },
  {
    id: "d151l_050",
    subject: "da-151",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The disc angle of a disc plough refers to:",
    options: ["Angle of the plough with the soil surface", "Angle between disc face and vertical plane parallel to direction of travel", "Angle between successive discs in plant breeding", "Angle of tilt of the disc from vertical"],
    correct: 1,
    explanation: "Disc angle (also called plan angle) is the acute angle between the disc face (plane) and the vertical plane parallel to the direction of travel. It typically ranges from 42–45°. Larger disc angle increases penetration but also draft."
  },
  {
    id: "d151l_051",
    subject: "da-151",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "A subsoiler is used primarily for:",
    options: ["Forming ridges and furrows in plant breeding", "Breaking hard pan and compacted layers below normal ploughing depth", "Surface tillage and seedbed preparation for crop improvement", "Harrowing and clod breaking in variety development"],
    correct: 1,
    explanation: "A subsoiler breaks hard pan and compacted subsoil layers at depths of 45–90 cm without inverting soil. This improves water infiltration and root penetration. It requires high draft (2–4× more than MB plough)."
  },
  {
    id: "d151l_052",
    subject: "da-151",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The parts of a mould board plough in order from front to back are:",
    options: ["Share → Mould board → Land side → Heel → Beam", "Beam → Mould board → Share → Land side", "Share → Mould board → Land side → Furrow wheel", "Heel → Share → Mould board → Beam"],
    correct: 0,
    explanation: "The bottom of a MB plough consists of: Share (cuts furrow slice bottom), Mould board (turns the slice), Land side (resists side thrust), Heel (supports on furrow bottom), and the whole unit is attached to the Beam."
  },
  {
    id: "d151l_053",
    subject: "da-151",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "What is the typical ploughing depth of a disc plough?",
    options: ["5–10 cm", "15–25 cm", "10–15 cm", "30–50 cm"],
    correct: 1,
    explanation: "A disc plough typically operates at 15–25 cm depth for primary tillage. It is preferred in hard, dry soils and stony fields where a mould board plough would have difficulty operating and suffer more wear."
  },
  {
    id: "d151l_054",
    subject: "da-151",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Draft of a plough increases with:",
    options: ["Decreasing ploughing depth", "Lighter soil type", "Smaller plough share", "Increasing ploughing speed and depth"],
    correct: 3,
    explanation: "Draft increases with greater ploughing depth (more soil to cut and turn), higher speed (inertia forces increase), heavier soil type, and wider plough. Specific draft (kN/m²) is used to compare soil resistance."
  },
  {
    id: "d151l_055",
    subject: "da-151",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "A chisel plough differs from a mould board plough in that it:",
    options: ["Inverts the soil completely in plant breeding", "Requires no tractor to operate for crop improvement", "Leaves crop residues on the surface and does not invert the soil", "Can only operate in paddy fields in variety development"],
    correct: 2,
    explanation: "A chisel plough breaks and loosens the soil without inversion, leaving most crop residues on or near the surface. This conserves moisture, reduces erosion and maintains organic matter, making it suitable for conservation tillage."
  },
  {
    id: "d151l_056",
    subject: "da-151",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The 'furrow wheel' in a mould board plough assembly helps to:",
    options: ["Attach the plough to the tractor in plant breeding", "Pulverise clods behind the plough for crop improvement", "Support the rear of the plough on the road", "Guide the plough into the next furrow and control ploughing width"],
    correct: 3,
    explanation: "The furrow wheel runs in the open furrow and helps guide the plough at correct width and depth, controlling the width of cut and preventing the plough from deflecting sideways. It also reduces side thrust on the operator."
  },
  {
    id: "d151l_057",
    subject: "da-151",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Deep tillage (subsoiling) is recommended primarily when:",
    options: ["Soil is already well-aerated in plant breeding", "Soil is loose and sandy in variety development", "Crop requires shallow root development for crop improvement", "A hardpan exists below 20 cm that restricts root growth"],
    correct: 3,
    explanation: "Deep tillage/subsoiling breaks impervious hardpan layers (plough pan, clay pan) at 30–90 cm depth that restrict root penetration and water drainage. It is recommended every 3–5 years in fields with such compaction."
  },
  {
    id: "d151l_058",
    subject: "da-151",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Which type of plough is preferred in stony or previously unploughed land (virgin soil)?",
    options: ["Disc plough", "Mould board plough", "Chisel plough", "Rotary plough"],
    correct: 0,
    explanation: "Disc ploughs are preferred in stony, stumpy or hard uncultivated land because the freely rotating discs ride over obstacles rather than breaking. Disc blades are self-sharpening and can penetrate hard dry soils better than rigid shares."
  },
  {
    id: "d151l_059",
    subject: "da-151",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The plough share (in MB plough) is primarily responsible for:",
    options: ["Cutting and lifting the furrow slice from the bottom", "Turning the soil upside down in plant breeding", "Pressing the soil to form a firm seedbed", "Supporting the plough body for crop improvement"],
    correct: 0,
    explanation: "The share is the cutting edge at the front bottom of the plough. It cuts horizontally under the furrow slice and lifts it, passing it to the mould board. Shares are hardened steel and replaceable when worn."
  },
  {
    id: "d151l_060",
    subject: "da-151",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "In terms of soil inversion, which plough gives the best weed and residue burial?",
    options: ["Chisel plough", "Disc plough", "Subsoiler", "Mould board plough"],
    correct: 3,
    explanation: "The mould board plough provides complete soil inversion (turns the furrow slice 135–180°), burying all surface weeds, crop residues and pests. Disc ploughs give partial inversion; chisel and subsoiler give no inversion."
  },
  {
    id: "d151l_061",
    subject: "da-151",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The tilt angle of a disc plough disc is typically:",
    options: ["60–75°", "30–45°", "5–15°", "0° (vertical)"],
    correct: 2,
    explanation: "The tilt angle (angle of the disc face from vertical, in the transverse plane) is typically 5–15°. This tilt helps the disc penetrate the soil and is distinct from the disc angle (42–45°, in the plan view)."
  },
  {
    id: "d151l_062",
    subject: "da-151",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "How many bottoms (bodies) does a standard single-bottom mould board plough have?",
    options: ["Four", "One", "Three", "Two"],
    correct: 1,
    explanation: "A single-bottom mould board plough has one plough body (share + mould board + land side) and ploughs one furrow at a time. Multi-bottom ploughs (2, 3, 4 bottoms) are used with more powerful tractors for faster ploughing."
  },
  {
    id: "d151l_063",
    subject: "da-151",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Primary tillage is defined as:",
    options: ["Cultivation between crop rows during the season in plant breeding", "The first tillage to open the soil after harvest to a good depth", "Tillage done with hand tools only for crop improvement", "Fine seedbed preparation after primary tillage in variety development"],
    correct: 1,
    explanation: "Primary tillage is the initial deep tillage of the soil after harvest (or before planting) using ploughs to break, invert and loosen the soil to a depth of 15–30 cm. Secondary tillage refines the seedbed afterward."
  },
  {
    id: "d151l_064",
    subject: "da-151",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The 'land side' of a mould board plough prevents:",
    options: ["The furrow slice from crumbling too much", "Vertical penetration of the share", "The share from wearing too fast", "Lateral (sideways) displacement of the plough in the furrow"],
    correct: 3,
    explanation: "The land side is a flat plate on the plough body that presses against the unploughed furrow wall, resisting the lateral (side) thrust created as soil is pushed against the mould board. It stabilises the plough during operation."
  },

  // ── Lecture 5: Secondary Tillage & Intercultivation ─────────────────────────
  {
    id: "d151l_065",
    subject: "da-151",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "A tandem disc harrow differs from an offset disc harrow in that:",
    options: ["Tandem has two gangs in line (front gang throws soil outward, rear throws inward); offset has", "Tandem has all discs in one gang; offset has discs in two gangs set at opposite angles", "Tandem discs are flat; offset discs are concave in plant breeding", "Tandem is pulled by animals; offset is tractor-drawn for crop improvement"],
    correct: 0,
    explanation: "In a tandem disc harrow, two gangs are arranged in tandem: the front gang throws soil outward and the rear gang throws it back inward, giving a more even soil finish. An offset disc harrow has all gangs shifted to one side, leaving the tractor out of tilled soil."
  },
  {
    id: "d151l_066",
    subject: "da-151",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "A rotavator (rotary tiller) is unique because it:",
    options: ["Requires no tractor PTO connection", "Performs primary and secondary tillage in a single pass", "Only works in dry conditions", "Uses a cutter bar to slice crop residues"],
    correct: 1,
    explanation: "A rotavator uses PTO-driven rotating L-shaped blades to cut, mix and pulverise the soil in one pass, combining primary and secondary tillage. It produces a fine seedbed quickly but consumes more power than passive implements."
  },
  {
    id: "d151l_067",
    subject: "da-151",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "A spring-tyne cultivator is preferred over a rigid-tyne cultivator in:",
    options: ["Wet paddy field intercultivation in plant breeding", "Stony or hard soils where tynes might break", "Deep ploughing operations for crop improvement", "Primary tillage after harvest in variety development"],
    correct: 1,
    explanation: "Spring-tyne cultivators have flexible spring-steel tynes that deflect when they hit stones or hard clods, preventing breakage. Rigid-tyne cultivators are better for loose soils. Spring tynes also have a vibrating action that helps break clods."
  },
  {
    id: "d151l_068",
    subject: "da-151",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Secondary tillage is carried out primarily to:",
    options: ["Prepare a fine seedbed, incorporate fertilisers and control weeds", "Turn and invert the soil for pest control", "Form drainage channels in plant breeding", "Break subsoil hardpan for crop improvement"],
    correct: 0,
    explanation: "Secondary tillage (harrowing, cultivating) follows primary tillage to break clods, prepare a fine and firm seedbed, incorporate manure and fertilisers, and control weeds before sowing. It is shallower than primary tillage."
  },
  {
    id: "d151l_069",
    subject: "da-151",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "What is the purpose of a land leveller (blade harrow/grader)?",
    options: ["To remove large stones from the field", "To cut soil to uniform depth for planting", "To smooth and level the field surface for uniform irrigation", "To form raised beds for vegetable crops"],
    correct: 2,
    explanation: "A land leveller or grader blade is used to smooth and level the field surface, eliminating undulations. Laser land levelling saves 20–30% irrigation water by ensuring uniform water distribution across the field."
  },
  {
    id: "d151l_070",
    subject: "da-151",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Inter-row cultivators are used at which crop growth stage?",
    options: ["After sowing, between rows, to control weeds and aerate the soil", "Before sowing for seedbed preparation in plant breeding", "At harvesting time to loosen the soil for crop improvement", "During the first irrigation for soil cracking in variety development"],
    correct: 0,
    explanation: "Intercultivation (inter-row cultivation) is done after crop establishment between rows to control weeds, break soil crust, aerate the rhizosphere and conserve moisture. It should not disturb crop roots."
  },
  {
    id: "d151l_071",
    subject: "da-151",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "A ridger (furrower) is used for:",
    options: ["Harvesting root crops in plant breeding", "Levelling the field before sowing for crop improvement", "Primary deep ploughing in variety development", "Forming ridges and furrows for planting row crops and irrigation"],
    correct: 3,
    explanation: "A ridger forms ridges (raised beds) and furrows in the field for planting row crops (sugarcane, cotton, maize), facilitating furrow irrigation between rows and providing good drainage to plant roots."
  },
  {
    id: "d151l_072",
    subject: "da-151",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The standard row spacing for wide-row crops like cotton and sugarcane when using a cultivator is:",
    options: ["120–150 cm", "15–22 cm", "60–90 cm", "30–45 cm"],
    correct: 2,
    explanation: "Wide-row crops like cotton, maize and sugarcane are planted at 60–90 cm row spacing to allow intercultivation with tractor-drawn cultivators. Closer rows do not permit mechanised intercultivation."
  },
  {
    id: "d151l_073",
    subject: "da-151",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "In a disc harrow, what determines the depth of penetration?",
    options: ["Diameter of discs and angle at which they are set", "Speed of the tractor only in plant breeding", "Number of discs in the gang for crop improvement", "Length of the harrow frame in variety development"],
    correct: 0,
    explanation: "Disc harrow penetration depth depends on disc diameter (larger discs penetrate deeper), disc concavity, gang angle (larger angle = more aggressive), soil condition, and ballast weight. Speed has a minor effect."
  },
  {
    id: "d151l_074",
    subject: "da-151",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "A cage wheel/puddling drum is a secondary tillage implement used in:",
    options: ["Dry land wheat cultivation", "Vegetable bed preparation", "Oilseed crop sowing", "Wet paddy field preparation (puddling)"],
    correct: 3,
    explanation: "Cage wheels or puddling drums are used to prepare puddled (wet, muddy) seedbeds for rice transplanting. They destroy soil structure, create an impermeable layer to reduce percolation, and kill weeds."
  },
  {
    id: "d151l_075",
    subject: "da-151",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Which secondary tillage implement is best for clod crushing and smoothing after ploughing?",
    options: ["Rotary tiller", "Disc plough", "Subsoiler", "Roller/clod crusher"],
    correct: 3,
    explanation: "A roller or clod crusher consists of a heavy cylinder that breaks clods and firms/levels the seedbed. Cambridge rollers (ridged) are particularly effective for clod crushing in clay soils."
  },
  {
    id: "d151l_076",
    subject: "da-151",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The number of passes of secondary tillage implements required after primary tillage depends on:",
    options: ["Initial clod size, soil moisture content and required seedbed fineness", "Brand of tractor used in plant breeding", "Number of workers available for crop improvement", "Colour of the soil in variety development"],
    correct: 0,
    explanation: "More passes are needed when clods are large, soil is very dry or wet, or when a very fine seedbed is required (e.g., for small-seeded crops). Over-tillage destroys soil structure and wastes fuel and time."
  },
  {
    id: "d151l_077",
    subject: "da-151",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Conservation tillage (minimum tillage / zero tillage) is practised to:",
    options: ["Invert soil for better weed burial", "Reduce soil disturbance, conserve moisture and reduce erosion", "Increase tractor usage in plant breeding", "Maximise number of tillage passes"],
    correct: 1,
    explanation: "Conservation tillage minimises soil disturbance, leaving at least 30% crop residue cover, to conserve soil moisture, reduce erosion, improve soil biology and reduce energy costs. Zero tillage drills seed directly into undisturbed soil."
  },
  {
    id: "d151l_078",
    subject: "da-151",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "A powered rotary cultivator used for intercultivation between rows is called:",
    options: ["Rotary hoe", "Power harrow", "Mouldboard plough", "Subsoiler"],
    correct: 0,
    explanation: "A rotary hoe uses PTO-driven rotating tines/hoes for intercultivation between crop rows. It is more effective than passive cultivators in breaking soil crust and killing weeds, especially in paddy fields."
  },
  {
    id: "d151l_079",
    subject: "da-151",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "A blade harrow (sweep) used in dryland farming primarily:",
    options: ["Pulverises surface into fine tilth in variety development", "Creates ridges for irrigation in plant breeding", "Cuts soil deep and inverts it for crop improvement", "Cuts weeds below the surface without disturbing the soil much"],
    correct: 3,
    explanation: "Blade harrows (duck-foot or sweep cultivators) have flat, V-shaped blades that cut weeds just below the soil surface without inverting the soil, conserving surface mulch for moisture retention in dryland areas."
  },
  {
    id: "d151l_080",
    subject: "da-151",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "What is the main purpose of 'earthing up' in sugarcane cultivation?",
    options: ["Removing excess soil from roots in plant breeding according to plant breeding and genetics science principles", "Building up soil around the base of sugarcane plants to support stalks and cover fertiliser", "Aerating roots by removing soil in variety development according to plant breeding and genetics science principles", "Making ridges for drainage only according to plant breeding and genetics science principles"],
    correct: 1,
    explanation: "Earthing up (banking up) in sugarcane uses a ridger to build soil around the base of cane plants at 30–45 days. This supports tall stalks, covers applied fertiliser, suppresses weeds and improves drainage."
  },

  // ── Lecture 6: Sowing & Planting Machinery ──────────────────────────────────
  {
    id: "d151l_081",
    subject: "da-151",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "The most common seed metering mechanism in grain drills used in India is the:",
    options: ["Plate/cell wheel metering", "Fluted roller (force feed) mechanism", "Air seeder mechanism", "Belt conveyor metering"],
    correct: 1,
    explanation: "The fluted roller (also called force-feed or corrugated roller) mechanism is the most common in Indian grain drills. The flutes on the roller catch and drop seeds positively, giving more uniform metering than plain rollers."
  },
  {
    id: "d151l_082",
    subject: "da-151",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "A zero-till drill (ZTD) is designed to:",
    options: ["Sow seeds directly into undisturbed crop residue without prior tillage", "Plough deep before sowing for crop improvement", "Apply fertiliser without seeds in plant breeding", "Plant rice seedlings in puddle mud"],
    correct: 0,
    explanation: "A zero-till drill cuts through crop residue and undisturbed soil using narrow inverted-T or disc openers, places seeds and fertiliser at correct depth and spacing without any prior tillage. It saves time, fuel and moisture."
  },
  {
    id: "d151l_083",
    subject: "da-151",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "A rice transplanter achieves which row × hill spacing standard in India?",
    options: ["20 × 15 cm", "45 × 20 cm", "15 × 10 cm", "30 × 15 cm"],
    correct: 0,
    explanation: "The standard spacing for mechanised rice transplanting in India is 20 cm between rows × 15 cm between hills (plants). Some models allow adjustment between 18–30 cm row spacing."
  },
  {
    id: "d151l_084",
    subject: "da-151",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Seed rate adjustment in a seed drill is achieved by:",
    options: ["Changing tractor speed only in plant breeding", "Adjusting the furrow opener angle for crop improvement", "Changing seed hopper size in variety development", "Varying the exposed length of the fluted roller"],
    correct: 3,
    explanation: "Seed rate is adjusted by changing the effective length of the fluted/force-feed roller exposed to the seed flow, or by changing sprocket/gear ratios on the ground wheel drive. Both methods change seeds delivered per unit area."
  },
  {
    id: "d151l_085",
    subject: "da-151",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "A precision planter differs from a seed drill in that it:",
    options: ["Places individual seeds at pre-set spacing within the row, reducing need for thinning", "Broadcasts seeds uniformly in plant breeding according to plant breeding and genetics science principles", "Sows only in puddled soils for crop improvement", "Sows seeds in rows at uniform spacing in variety development"],
    correct: 0,
    explanation: "A precision planter (cell wheel or air planter) places individual seeds at exact within-row spacing (e.g., one seed every 20–30 cm), eliminating the need for thinning. Seed drills sow continuously without inter-seed spacing control."
  },
  {
    id: "d151l_086",
    subject: "da-151",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "The function of press wheels (covering wheels) in a seed drill is to:",
    options: ["Drive the seed metering mechanism in plant breeding", "Cover seeds with soil and ensure good seed-soil contact", "Open the furrow for seed placement", "Apply fertiliser beside the seed for crop improvement"],
    correct: 1,
    explanation: "Press/covering wheels close the furrow over seeds and firm the soil around them, ensuring good seed-soil contact for capillary moisture movement and uniform germination. They follow the furrow openers."
  },
  {
    id: "d151l_087",
    subject: "da-151",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Which type of furrow opener is best suited for sowing in crop residue-covered fields?",
    options: ["Double disc opener", "Single disc opener", "Hoe/shoe opener", "Runner opener"],
    correct: 0,
    explanation: "Double disc (twin disc) openers are preferred for residue-covered (conservation tillage) fields because the two angled discs cut through residues cleanly without clogging, whereas hoe openers tend to accumulate residue."
  },
  {
    id: "d151l_088",
    subject: "da-151",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "The seed-cum-fertiliser drill places fertiliser:",
    options: ["On top of seeds in plant breeding", "Broadcast on the surface for crop improvement", "Mixed with seeds in the same furrow", "Separately below and to the side of the seed"],
    correct: 3,
    explanation: "A seed-cum-fertiliser drill places fertiliser 2–3 cm below and 3–5 cm to the side of the seed furrow (band placement). This placement prevents seed burn from direct fertiliser contact while keeping nutrients near the root zone."
  },
  {
    id: "d151l_089",
    subject: "da-151",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "The nursery mat preparation required for mechanised rice transplanting requires seedlings of:",
    options: ["30–35 days old", "18–25 days old", "10–15 days old", "5–7 days old"],
    correct: 1,
    explanation: "Mechanised rice transplanters require mat-type nursery seedlings raised in flat trays for 18–25 days. The seedlings form a dense root mat that can be picked up and transplanted by the machine's picking fingers."
  },
  {
    id: "d151l_090",
    subject: "da-151",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Air seeder (pneumatic seed drill) uses air to:",
    options: ["Clean seeds before sowing in plant breeding", "Transport seeds from the hopper to the furrow openers through tubes", "Germinate seeds in the field for crop improvement", "Apply herbicides with seeds in variety development"],
    correct: 1,
    explanation: "Pneumatic/air seeders use a fan/blower to create an airstream that carries seeds metered by a central meter through flexible tubes to individual row units. This allows a single, large central hopper and even seed distribution at high speed."
  },
  {
    id: "d151l_091",
    subject: "da-151",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "The recommended seed rate for wheat sown by a seed drill in India is approximately:",
    options: ["50 kg/ha", "200 kg/ha", "150 kg/ha", "100 kg/ha"],
    correct: 3,
    explanation: "The recommended seed rate for wheat (normal sowing) is 100 kg/ha when sown by a seed drill at 22.5 cm row spacing. Late sowing may require up to 125 kg/ha. Broadcasting requires 125–150 kg/ha as it is less efficient."
  },
  {
    id: "d151l_092",
    subject: "da-151",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "A potato planter compared to a seed drill operates with:",
    options: ["Large seeds broadcast on surface", "Seeds blown pneumatically into deep furrows", "Fine seeds placed at shallow depth using fluted rollers", "Smaller tubers placed deeper using cup-type metering"],
    correct: 3,
    explanation: "A potato planter uses large cups or spoons on a rotating disc to pick individual seed pieces (tubers) from the hopper and drop them into furrows at 20–30 cm spacing and 8–10 cm depth, which is not possible with conventional seed drills."
  },
  {
    id: "d151l_093",
    subject: "da-151",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "What is the optimum sowing depth for small seeds like wheat and mustard?",
    options: ["1–2 cm", "12–15 cm", "3–5 cm", "8–10 cm"],
    correct: 2,
    explanation: "Small seeds like wheat, barley and mustard should be sown at 3–5 cm depth. Shallower sowing risks drying before germination; deeper sowing exhausts seed food reserves before the seedling emerges."
  },
  {
    id: "d151l_094",
    subject: "da-151",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Which instrument is used to calibrate a seed drill before field operation?",
    options: ["Refractometer in plant breeding according to plant breeding and genetics science principles", "Soil test kit according to plant breeding and genetics science principles", "Canvas sheet or collection tray to count seeds dropped in measured revolutions", "Hygrometer in variety development according to plant breeding and genetics science principles"],
    correct: 2,
    explanation: "A seed drill is calibrated by driving the ground wheel (with rear raised) for a measured number of revolutions or distance, collecting seeds on a canvas sheet, counting/weighing them and comparing to target seed rate, then adjusting roller length."
  },
  {
    id: "d151l_095",
    subject: "da-151",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "The 'Happy Seeder' is a specialised zero-till seeder designed to:",
    options: ["Plant sugarcane sets mechanically in plant breeding", "Transplant paddy seedlings in rows for crop improvement", "Sow small vegetable seeds in raised beds", "Sow wheat directly into standing paddy stubble without prior burning"],
    correct: 3,
    explanation: "The Happy Seeder simultaneously cuts and anchors paddy straw, and sows wheat seeds directly into the stubble field without burning. It significantly reduces stubble burning, saves time, and maintains soil health."
  },
  {
    id: "d151l_096",
    subject: "da-151",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "A drum seeder for direct-seeded rice sows pre-germinated seeds by:",
    options: ["Drilling seeds into puddled soil with furrow openers", "Rolling perforated drums that release seeds in rows on puddled soil surface", "Broadcasting seeds from a hopper in plant breeding", "Transplanting seedlings from a mat for crop improvement"],
    correct: 1,
    explanation: "A drum seeder consists of perforated plastic/metal drums that roll on the puddled field surface, depositing pre-germinated rice seeds through holes in rows 20–25 cm apart. It is simple, low-cost and suitable for small farms."
  },

  // ── Lecture 7: Plant Protection Equipment ───────────────────────────────────
  {
    id: "d151l_097",
    subject: "da-151",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "A knapsack sprayer has a standard tank capacity of:",
    options: ["25 litres", "5 litres", "15 litres", "10 litres"],
    correct: 2,
    explanation: "The standard knapsack (back-pack) sprayer has a tank capacity of 15 litres. It is carried on the back and operated by a hand pump. Larger tanks become too heavy for sustained use."
  },
  {
    id: "d151l_098",
    subject: "da-151",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "A flat fan nozzle produces a spray pattern best suited for:",
    options: ["Soil applications and band spraying", "Broadcast foliar spraying on row crops", "Tree and orchard spraying", "Applying granules"],
    correct: 1,
    explanation: "Flat fan nozzles produce a flat, fan-shaped pattern with even distribution across the swath. They are ideal for broadcast foliar applications on row crops with a boom sprayer at 30–60 cm height."
  },
  {
    id: "d151l_099",
    subject: "da-151",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "A mist blower (motorised knapsack mist-duster) differs from a power sprayer in that it:",
    options: ["Uses a high-speed air blast to break liquid into", "Requires no engine for crop improvement", "Uses high pressure to atomise liquid in variety development", "Applies only dry dust formulations in plant breeding"],
    correct: 0,
    explanation: "A mist blower uses a centrifugal blower/fan to generate a high-velocity air stream that atomises the spray liquid into fine mist droplets (50–100 µm) and carries them into the crop canopy. This provides better penetration than hydraulic sprayers in dense canopies."
  },
  {
    id: "d151l_100",
    subject: "da-151",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Sprayer calibration refers to:",
    options: ["Adjusting the pH of the spray solution in plant breeding", "Determining and adjusting the volume of spray liquid applied per unit area", "Selecting the type of pesticide to use for crop improvement", "Cleaning the nozzles after use in variety development"],
    correct: 1,
    explanation: "Sprayer calibration is the process of determining (measuring) and adjusting the spray volume applied per unit area (litres/ha) to match the recommended dose. It involves nozzle output rate, forward speed and swath width."
  },
  {
    id: "d151l_101",
    subject: "da-151",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "The hollow cone nozzle is most suitable for:",
    options: ["Granule application in plant breeding according to plant breeding and genetics science principles", "Soil incorporation of herbicides for crop improvement", "Fungicide application on fruits and vegetables requiring penetration into canopy", "Band application of pesticides in variety development"],
    correct: 2,
    explanation: "Hollow cone nozzles produce a circular, hollow cone pattern with fine droplets. They are preferred for fungicide applications on fruits, vegetables and dense canopies as the fine droplets penetrate well and cover all leaf surfaces."
  },
  {
    id: "d151l_102",
    subject: "da-151",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "What is the main advantage of a boom sprayer over a knapsack sprayer?",
    options: ["Lower cost in plant breeding", "No need for water for crop improvement", "Works without a power source", "Wider field coverage per unit time with uniform application"],
    correct: 3,
    explanation: "Boom sprayers cover swaths of 6–24 m wide using multiple nozzles on a horizontal boom, achieving very high output (20–50 ha/day). Knapsack sprayers cover only 0.5–1 ha/day. Boom sprayers also give more uniform application."
  },
  {
    id: "d151l_103",
    subject: "da-151",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Droplet size in spraying: smaller droplets (< 100 µm) have which disadvantage?",
    options: ["Poor coverage of leaf surface in plant breeding", "Too heavy to be carried by the pump", "They cannot carry systemic pesticides for crop improvement", "Greater risk of drift and evaporation before reaching the target"],
    correct: 3,
    explanation: "Very fine droplets (<100 µm) are susceptible to wind drift (they remain airborne longer) and evaporate before reaching the target, reducing efficacy and causing off-target contamination. Coarser droplets (200–400 µm) are less drift-prone."
  },
  {
    id: "d151l_104",
    subject: "da-151",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "An ultra-low volume (ULV) sprayer applies pesticide at:",
    options: ["Moderate volume (200–500 L/ha) in plant breeding", "Very low volume (0.5–5 L/ha) of concentrated formulation", "High volume (>500 L/ha) in water", "Only as dry dust for crop improvement"],
    correct: 1,
    explanation: "ULV sprayers apply 0.5–5 litres per hectare of highly concentrated pesticide formulation (oil-based) using spinning disc atomisers to produce very fine, uniform droplets. They are used in aerial and large-scale applications."
  },
  {
    id: "d151l_105",
    subject: "da-151",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "What safety equipment is mandatory when operating a knapsack sprayer with toxic pesticides?",
    options: ["Sunglasses and hat in plant breeding", "Gloves, face shield/goggles, protective clothing, and respirator/mask", "Helmet and boots only under tropical agricultural conditions", "Life jacket for crop improvement"],
    correct: 1,
    explanation: "When applying toxic pesticides, the operator must wear chemical-resistant gloves, face shield or goggles, protective coverall, boots, and respirator/nose-mouth mask to prevent dermal absorption, eye splash and inhalation of pesticide vapours."
  },
  {
    id: "d151l_106",
    subject: "da-151",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "A duster (power duster) is used when:",
    options: ["Very high pressure spraying is needed for crop improvement", "Application is in flooded field only in plant breeding", "Pesticide formulation is in dust form and dry application is required", "Pesticide must be dissolved in water first in variety development"],
    correct: 2,
    explanation: "Power dusters apply dry pesticide dust formulations (WP, DP) directly using a blower. Dusting is faster than spraying (no water needed), useful when water is scarce, but dust drift and coverage are less precise."
  },
  {
    id: "d151l_107",
    subject: "da-151",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "The formula for calculating spray volume (L/ha) from a boom sprayer is:",
    options: ["Nozzle output (L/min) ÷ (Speed × Swath) in plant breeding", "Speed × Swath ÷ Nozzle output for crop improvement", "Nozzle output × Pressure × Swath in variety development", "Nozzle output (L/min) × 600 ÷ (Speed km/h × Swath m)"],
    correct: 3,
    explanation: "Application rate (L/ha) = [Nozzle output (L/min) × 600] ÷ [Forward speed (km/h) × Nozzle spacing (m)]. This formula converts per-minute nozzle output to per-hectare volume based on travel speed and coverage width."
  },
  {
    id: "d151l_108",
    subject: "da-151",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Drone sprayers in modern agriculture offer the advantage of:",
    options: ["Applying fertiliser to soil only in plant breeding", "Deep soil penetration like a plough for crop improvement", "Aerial application in tall/inaccessible crops with GPS guidance and reduced labour", "No requirement for pesticide formulation in variety development"],
    correct: 2,
    explanation: "Agricultural drones (UAV sprayers) can spray pesticides, fungicides and nano-fertilisers from above the crop canopy with GPS precision, especially in tall or hilly crops inaccessible to ground sprayers. They save labour and reduce operator exposure."
  },
  {
    id: "d151l_109",
    subject: "da-151",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "The operating pressure of a typical knapsack sprayer pump is:",
    options: ["1.5–4 bar", "8–12 bar", "20–30 bar", "0.1–0.5 bar"],
    correct: 0,
    explanation: "Knapsack sprayers typically operate at 1.5–4 bar pressure. This is adequate for foliar spraying with standard nozzles. High-pressure sprayers for tree washing or horticultural use operate at 10–30 bar."
  },
  {
    id: "d151l_110",
    subject: "da-151",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Triple rinsing of pesticide containers before disposal means:",
    options: ["Filling with pesticide three times for reuse in plant breeding", "Washing with three different solvents for crop improvement", "Washing with soap three times in variety development", "Adding water three times, shaking and emptying into the sprayer tank, each rinse"],
    correct: 3,
    explanation: "Triple rinsing involves adding a small volume of water to the empty container, shaking well and pouring the rinse water into the sprayer tank — repeated three times. This recovers 99.9% of residual pesticide and prevents container contamination."
  },
  {
    id: "d151l_111",
    subject: "da-151",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "A flood jet nozzle is used for applying:",
    options: ["Herbicides in coarse droplets directly to soil (pre-emergence) or as band spray", "Insecticides in orchards in plant breeding", "Fungicides in fine mist on leaf surface for crop improvement", "Fertiliser solution at high pressure in variety development"],
    correct: 0,
    explanation: "Flood jet (even-flat-fan) nozzles produce large, coarse droplets that reduce drift, ideal for pre-emergence herbicide applications where soil coverage rather than leaf coverage is needed, and where drift to adjacent crops is a concern."
  },
  {
    id: "d151l_112",
    subject: "da-151",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "The 'swath width' in boom spraying refers to:",
    options: ["Width of the tractor in plant breeding", "Length of the boom pipe in variety development", "Depth of spray penetration into the canopy for crop improvement", "Width of land covered per pass by the sprayer"],
    correct: 3,
    explanation: "Swath width is the effective width of crop covered per pass, equal to the number of nozzles × nozzle spacing. A boom with 12 nozzles at 50 cm spacing has a 6 m swath. It determines field capacity along with forward speed."
  },

  // ── Lecture 8: Irrigation Equipment & Pumps ─────────────────────────────────
  {
    id: "d151l_113",
    subject: "da-151",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The impeller of a centrifugal pump:",
    options: ["Filters sediment from irrigation water in plant breeding", "Controls water flow rate at the outlet for crop improvement", "Rotates at high speed to impart velocity and centrifugal force to water", "Reciprocates to push water through valves in variety development"],
    correct: 2,
    explanation: "The impeller is the rotating element of a centrifugal pump. It has vanes that spin at high speed, imparting velocity (kinetic energy) to water by centrifugal action. The diffuser/volute then converts velocity to pressure head."
  },
  {
    id: "d151l_114",
    subject: "da-151",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "A submersible pump differs from a centrifugal pump in that it:",
    options: ["Uses only wind energy in plant breeding according to plant breeding and genetics science principles", "Cannot pump more than 1 m3/hr according to plant breeding and genetics science principles", "Is installed below water level in the borewell; motor and pump are in one sealed unit", "Is installed at the surface; pump and motor are separate in variety development"],
    correct: 2,
    explanation: "A submersible pump has the motor and pump combined in one sealed, waterproof unit installed below the water surface in borewells/deepwells. Water cools the motor. This is preferred for borewells where the water table is deep."
  },
  {
    id: "d151l_115",
    subject: "da-151",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Drip irrigation emitters deliver water at a flow rate of:",
    options: ["2–8 litres/hour", "10–20 litres/hour", "50–100 litres/hour", "0.1–0.5 litres/hour"],
    correct: 0,
    explanation: "Drip emitters (drippers) typically discharge 2–8 litres per hour (most commonly 4 L/hr) directly at the plant base. This slow, precise application minimises evaporation and maintains optimal soil moisture near the root zone."
  },
  {
    id: "d151l_116",
    subject: "da-151",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Sprinkler irrigation achieves a water use efficiency (WUE) of approximately:",
    options: ["75–85%", "60–70%", "40–50%", "95–100%"],
    correct: 0,
    explanation: "Sprinkler irrigation has WUE of 75–85%, compared to 40–50% for surface (flood) irrigation and 90–95% for drip irrigation. Sprinklers reduce deep percolation and runoff losses compared to flood irrigation."
  },
  {
    id: "d151l_117",
    subject: "da-151",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The hydraulic head (total head) a pump must overcome is the sum of:",
    options: ["Suction head only in plant breeding according to plant breeding and genetics science principles", "Only pipe friction losses for crop improvement", "Suction lift + delivery head + friction losses + velocity head", "Delivery head minus suction head in variety development"],
    correct: 2,
    explanation: "Total head = static head (suction lift + delivery height) + friction head losses in pipes and fittings + velocity head (minor term). The pump must develop sufficient head to lift water from source to delivery point against all these resistances."
  },
  {
    id: "d151l_118",
    subject: "da-151",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Cavitation in a centrifugal pump occurs when:",
    options: ["The impeller speed is too low in variety development", "Too much water is available in plant breeding according to plant breeding and genetics science principles", "Water temperature is too cold according to plant breeding and genetics science principles", "Suction head is too high and water vaporises at the inlet, forming bubbles that implode"],
    correct: 3,
    explanation: "Cavitation occurs when suction lift is too high or suction line is obstructed, causing pressure at the impeller eye to fall below the vapour pressure of water. Vapour bubbles form and then implode violently, causing noise, vibration, and impeller damage."
  },
  {
    id: "d151l_119",
    subject: "da-151",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The maximum practical suction lift for a centrifugal pump at sea level is approximately:",
    options: ["3 m", "15 m", "7–8 m", "25 m"],
    correct: 2,
    explanation: "The theoretical maximum suction lift at sea level is 10.3 m (atmospheric pressure head). Practically, accounting for friction and vapour pressure, the safe maximum suction lift is 7–8 m. Beyond this, cavitation occurs."
  },
  {
    id: "d151l_120",
    subject: "da-151",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Micro-sprinklers (mini sprinklers) are best suited for:",
    options: ["Large field crops like wheat in plant breeding", "Greenhouse cooling only for crop improvement", "Orchards and horticultural crops requiring targeted irrigation close to trees", "Paddy fields in variety development according to plant breeding and genetics science principles"],
    correct: 2,
    explanation: "Micro-sprinklers/mini sprinklers irrigate a small radius (1–3 m) around individual trees in orchards. They provide more uniform wetting than drip (covers wider area) but use less water than conventional sprinklers, ideal for fruit trees."
  },
  {
    id: "d151l_121",
    subject: "da-151",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Fertigation refers to:",
    options: ["Soil testing before fertiliser application in plant breeding", "Applying fertilisers by broadcasting for crop improvement", "Fermenting organic matter for fertiliser in variety development", "Injecting soluble fertilisers into the irrigation system for simultaneous application with water"],
    correct: 3,
    explanation: "Fertigation is the application of water-soluble fertilisers through the drip or sprinkler irrigation system. It improves nutrient use efficiency (NUE) by placing nutrients precisely in the root zone at the right time, reducing losses."
  },
  {
    id: "d151l_122",
    subject: "da-151",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The discharge of a centrifugal pump is expressed in:",
    options: ["Litres per second (L/s) or cubic metres per hour (m³/hr)", "Kilograms per second in plant breeding", "Metres of head for crop improvement", "Kilowatts in variety development according to plant breeding and genetics science principles"],
    correct: 0,
    explanation: "Pump discharge (flow rate) is measured in litres per second (L/s), litres per minute (L/min) or m³/hour. Head is measured in metres. Power is in kilowatts. These three (flow rate, head, power) define pump performance."
  },
  {
    id: "d151l_123",
    subject: "da-151",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "A pumpset for flood irrigation of paddy typically requires:",
    options: ["Low head, high discharge", "High head, low discharge", "Very low head, very low discharge", "High head, high discharge"],
    correct: 0,
    explanation: "Paddy (surface) irrigation needs large volumes of water at low delivery height (low total head). Therefore a high-discharge, low-head centrifugal pump (axial or mixed flow type) is suitable. Deep borewell irrigation needs high head, moderate discharge."
  },
  {
    id: "d151l_124",
    subject: "da-151",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The application rate of a sprinkler system must be less than:",
    options: ["The wind speed in plant breeding", "The crop evapotranspiration rate for crop improvement", "The atmospheric humidity in variety development", "The soil's basic infiltration rate (to avoid runoff and ponding)"],
    correct: 3,
    explanation: "The sprinkler application rate (mm/hr) must not exceed the soil's steady-state (basic) infiltration rate. If application is faster than infiltration, water ponds on the surface, causes runoff and erosion, and reduces efficiency."
  },
  {
    id: "d151l_125",
    subject: "da-151",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Which pump type is most suitable for lifting water from deep borewells (>50 m)?",
    options: ["Axial flow pump", "Centrifugal (surface) pump", "Submersible pump", "Reciprocating hand pump"],
    correct: 2,
    explanation: "Submersible pumps are designed for deep borewells. They are installed below the water surface in the borewell and can lift water from depths of 50–300+ m. Surface centrifugal pumps are impractical for depths beyond 7–8 m (suction limit)."
  },
  {
    id: "d151l_126",
    subject: "da-151",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "A filter in a drip irrigation system is essential to:",
    options: ["Increase water pressure in plant breeding", "Add fertiliser to the water for crop improvement", "Prevent clogging of emitters by removing suspended particles and algae", "Control timing of irrigation in variety development"],
    correct: 2,
    explanation: "Drip emitters have very small openings (0.5–1.5 mm) that clog easily with sand, silt, algae and mineral deposits. Screen, disc or sand media filters are mandatory to remove particles >130 µm before the water enters the lateral lines."
  },
  {
    id: "d151l_127",
    subject: "da-151",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The uniformity coefficient of a sprinkler/drip system indicates:",
    options: ["The energy efficiency of the pump motor", "The chemical quality of irrigation water", "How evenly water is distributed across the field", "How uniform the water pressure is in the pump"],
    correct: 2,
    explanation: "The distribution uniformity coefficient (DU) or Christiansen's uniformity coefficient (CU) measures how evenly water is applied across the irrigated area. A CU > 80% is acceptable; > 90% is excellent. Low uniformity means some areas are over- or under-irrigated."
  },
  {
    id: "d151l_128",
    subject: "da-151",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "An axial flow (propeller) pump is best suited for:",
    options: ["Very low head, very high discharge (drainage, flood irrigation)", "Very high head, low discharge applications", "Deep borewell applications in plant breeding", "Sprinkler irrigation requiring 5–7 bar for crop improvement"],
    correct: 0,
    explanation: "Axial flow (propeller) pumps move large volumes of water at very low heads (1–5 m). They are ideal for drainage, flood irrigation, and pumping from rivers or canals where the static lift is very small but high flow rates are required."
  },

  // ── Lecture 9: Harvesting & Threshing Machinery ─────────────────────────────
  {
    id: "d151l_129",
    subject: "da-151",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The cutter bar on a reaper/combine harvester operates using:",
    options: ["Rotating blades like a lawn mower as recommended by ICAR guidelines", "Reciprocating sickle sections between stationary counter-cutters (finger bars)", "Laser cutting in plant breeding in irrigated crop production systems", "Flails on a rotating drum based on conventional agronomic practices"],
    correct: 1,
    explanation: "The cutter bar uses reciprocating (back-and-forth) knife sections mounted between fixed guards/counter-cutters to shear the crop stem. The knife is driven by a pitman arm or wobble box mechanism from the PTO or ground drive."
  },
  {
    id: "d151l_130",
    subject: "da-151",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "A combine harvester combines which three operations?",
    options: ["Harvesting (cutting), threshing and cleaning/separation in one pass", "Cutting, baling and transport for crop improvement", "Threshing, drying and bagging in plant breeding", "Ploughing, sowing and harvesting in variety development"],
    correct: 0,
    explanation: "A combine harvester simultaneously performs: (1) Cutting – header cuts the crop, (2) Threshing – threshing drum/cylinder separates grain from straw, (3) Separation/Cleaning – sieves and fans separate grain from chaff."
  },
  {
    id: "d151l_131",
    subject: "da-151",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The threshing drum in a combine harvester operates at approximately:",
    options: ["100–200 RPM", "2000–3000 RPM", "700–1200 RPM", "300–500 RPM"],
    correct: 2,
    explanation: "The threshing cylinder/drum of a combine operates at 700–1200 RPM (wheat) to 300–600 RPM (rice). The concave clearance and drum speed are adjusted for different crops to maximise threshing with minimal grain damage."
  },
  {
    id: "d151l_132",
    subject: "da-151",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The 'header' on a combine harvester includes:",
    options: ["The grain tank and auger only for crop improvement", "Only the threshing drum in plant breeding", "Reel, cutter bar, auger and feeder house for gathering", "The cleaning sieves in variety development"],
    correct: 2,
    explanation: "The header includes: (1) Crop reel – gathers and holds crop against cutter bar, (2) Cutter bar – cuts the crop, (3) Platform auger – consolidates cut crop towards the centre, (4) Feeder house – elevates crop to the threshing unit."
  },
  {
    id: "d151l_133",
    subject: "da-151",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "A paddy (axial flow) thresher uses which principle to separate grain from panicle?",
    options: ["Beating with hammers in plant breeding", "Electrostatic separation for crop improvement", "Rubbing and impact between rotating rasp bars and concave", "Sucking grain with a fan"],
    correct: 2,
    explanation: "Axial flow paddy threshers use rotating rasp bars or spike-tooth cylinders that rub and impact the paddy panicles against a concave (wire/bar), separating grains by impact, rubbing and stripping action. Some use wire-loop cylinders."
  },
  {
    id: "d151l_134",
    subject: "da-151",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The cleaning unit in a combine harvester uses:",
    options: ["Wind from a fan and oscillating sieves", "Magnets to separate grain for crop improvement", "Only water to wash grain in variety development", "Cyclones only in plant breeding"],
    correct: 0,
    explanation: "The cleaning unit uses an adjustable fan (winnowing) and two oscillating sieves (upper: chaffer sieve, lower: grain sieve). The fan blows chaff, light material and dust away while grain sifts through the sieves to the grain auger below."
  },
  {
    id: "d151l_135",
    subject: "da-151",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "A grain auger (elevator) in a combine harvester:",
    options: ["Cuts and transports straw in plant breeding", "Drives the threshing drum for crop improvement", "Applies herbicide to harvested grain in variety development", "Conveys threshed and cleaned grain from sieves to the grain tank"],
    correct: 3,
    explanation: "The grain auger (also called the clean grain elevator) is a screw conveyor that transports cleaned, threshed grain from the cleaning unit below up to the grain storage tank on top of the combine harvester."
  },
  {
    id: "d151l_136",
    subject: "da-151",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Harvesting losses in a combine harvester are classified as:",
    options: ["Only grain tank losses in plant breeding", "Fuel losses only in variety development", "Only header losses for crop improvement", "Header losses (cutterbar, reel), threshing losses, and separation/cleaning losses"],
    correct: 3,
    explanation: "Combine harvesting losses include: Header losses (shatter from reel, cutting and conveying), Threshing losses (unthreshed grain), and Separation/cleaning losses (grain blown or carried over with straw/chaff). Total losses should be <1% for cereals."
  },
  {
    id: "d151l_137",
    subject: "da-151",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "A self-propelled combine is preferred over a tractor-drawn combine because:",
    options: ["It can harvest crops at any moisture content without adjustments", "It is cheaper to purchase according to plant breeding and genetics science principles", "It requires no skilled operator in plant breeding according to plant breeding and genetics science principles", "It has better manoeuvrability, wider cut, and the operator has better visibility and control"],
    correct: 3,
    explanation: "Self-propelled combines have the cab and controls integrated with the harvesting unit, giving the operator better visibility of the header, easier manoeuvring, wider cutting widths (5–9 m) and smoother power transmission than PTO-driven tractor-drawn models."
  },
  {
    id: "d151l_138",
    subject: "da-151",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The optimum grain moisture content for mechanical harvesting of wheat with a combine is:",
    options: ["14–20%", ">35%", "<10%", "25–30%"],
    correct: 0,
    explanation: "Wheat should be harvested when grain moisture is 14–20% (physiological to near-commercial maturity). At very low moisture (<12%), grains are brittle and shatter easily. At high moisture (>20%), grains don't thresh cleanly and may clog the machine."
  },
  {
    id: "d151l_139",
    subject: "da-151",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The concave clearance in a threshing unit of a combine is adjusted to:",
    options: ["Control fan speed for cleaning in plant breeding", "Control the gap between cylinder and concave, affecting threshing intensity and grain damage", "Change the width of the header for crop improvement", "Set the height of the reel in variety development"],
    correct: 1,
    explanation: "Concave clearance (gap between the rotating threshing cylinder and the fixed concave) determines threshing intensity. Smaller gap → more aggressive threshing (may damage grain); larger gap → gentler threshing (may leave unthreshed grain). Adjusted by crop type."
  },
  {
    id: "d151l_140",
    subject: "da-151",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "A crop reaper-binder simultaneously cuts the crop and:",
    options: ["Loads bundles onto a trailer automatically in plant breeding", "Ties cut crop into bundles with twine for collection and stooking", "Applies herbicide to cut stubble for crop improvement", "Threshes and cleans the grain in variety development"],
    correct: 1,
    explanation: "A reaper-binder cuts the standing crop with a reciprocating cutter bar, gathers it with a conveyor canvas and ties it into bundles with sisal or synthetic twine using a knotter mechanism. Bundles are ejected for manual collection."
  },
  {
    id: "d151l_141",
    subject: "da-151",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Which component of the paddy thresher is responsible for separating grain from straw after threshing?",
    options: ["Concave only in plant breeding", "Straw walker and cleaning fan (aspirator)", "The feed conveyor", "The grain elevator"],
    correct: 1,
    explanation: "After the cylinder threshes paddy, the straw walker (a series of oscillating or rotating beaters) and a cleaning fan/aspirator blow chaff and light straw away while heavier grain falls through the perforated concave and sieves to the grain outlet."
  },
  {
    id: "d151l_142",
    subject: "da-151",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Track-type (crawler) combine harvesters are designed for:",
    options: ["Orchard harvesting under trees in plant breeding", "Harvesting tall sorghum for crop improvement", "Wet paddy fields where wheeled combines would sink or slip", "Dry upland wheat harvesting in variety development"],
    correct: 2,
    explanation: "Track-type (crawler) combine harvesters distribute the machine weight over a large track area, preventing sinking in wet, muddy paddy fields. They are widely used in West Bengal, Eastern India and Southeast Asia for wet paddy harvesting."
  },
  {
    id: "d151l_143",
    subject: "da-151",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Groundnut combine (digger-shaker-windrower) does which operation first?",
    options: ["Picks pods from the soil and threshes on the spot in plant breeding", "Digs the groundnut plants from the soil, shakes off soil and lays them in windrows for drying", "Broadcasts seeds for the next crop in variety development according to plant breeding and genetics science principles", "Sprays fungicide on pods according to plant breeding and genetics science principles"],
    correct: 1,
    explanation: "A groundnut digger-shaker-windrower first uses blades/shares to dig the plant out of soil, then shakers remove loose soil from roots and pods, and the machine winrows the dug plants for field drying before pod stripping."
  },
  {
    id: "d151l_144",
    subject: "da-151",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The purpose of a straw chopper/spreader on a combine harvester is:",
    options: ["To separate straw from grain in the cleaning unit in plant breeding", "To load straw directly into a trailer for crop improvement", "To collect straw in a bundle for sale in variety development", "To chop and uniformly spread straw on the field for mulching or incorporation"],
    correct: 3,
    explanation: "The straw chopper attachment behind the straw walkers of a combine chops the straw into short pieces and spreads it uniformly across the field width. This facilitates faster decomposition, acts as mulch, and improves organic matter over time."
  },

  // ── Lecture 10: Farm Safety & Maintenance ───────────────────────────────────
  {
    id: "d151l_145",
    subject: "da-151",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "A PTO safety guard (shield) is mandatory because:",
    options: ["It prevents clothing or body parts from getting entangled in the rotating PTO shaft", "It protects the PTO shaft from rain and rust", "It improves PTO power transmission efficiency in plant breeding", "It increases PTO speed according to plant breeding and genetics science principles"],
    correct: 0,
    explanation: "The rotating PTO shaft (540 RPM) is an extremely dangerous entanglement hazard. Loose clothing, hair or limbs caught in an unguarded PTO shaft cause severe injuries. The plastic or metal shield covers the shaft and universal joints completely."
  },
  {
    id: "d151l_146",
    subject: "da-151",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "ROPS stands for:",
    options: ["Rear Operations Protection Shield", "Roll-Over Protective Structure", "Rotating Overhead Protection System", "Remote Operated Power System"],
    correct: 1,
    explanation: "ROPS (Roll-Over Protective Structure) is a safety frame or cab fitted to tractors to protect the operator from being crushed if the tractor overturns. A seat belt must always be worn with a ROPS-equipped tractor."
  },
  {
    id: "d151l_147",
    subject: "da-151",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The most common cause of tractor rollover (overturning) is:",
    options: ["Travelling at low speed on level ground for crop improvement", "Parking on flat ground in plant breeding", "Operating on steep slopes, turning too fast", "Operating in soft soil at low speed in variety development"],
    correct: 2,
    explanation: "Tractor rollovers occur due to: side slopes, sharp turns at speed, sudden steering on hills, rear rearing when a drawbar load is too heavy (attached too high), and front end rearing when front implements are lifted too high. Side rollovers are most common."
  },
  {
    id: "d151l_148",
    subject: "da-151",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Engine oil in a farm tractor should typically be changed after every:",
    options: ["10 hours of operation", "50 hours of operation", "1000 hours of operation", "200–250 hours of operation"],
    correct: 3,
    explanation: "Engine oil should be changed every 200–250 hours of operation (or per manufacturer's recommendation), along with the oil filter. More frequent changes (100 hrs) are needed in dusty conditions. Daily checks of oil level are essential."
  },
  {
    id: "d151l_149",
    subject: "da-151",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Which of the following is a daily (every-shift) maintenance check for a tractor?",
    options: ["Changing engine oil and filter in plant breeding according to plant breeding and genetics science principles", "Replacing clutch disc according to plant breeding and genetics science principles", "Checking engine oil level, radiator coolant level, tyre pressure, air cleaner and fuel level", "Overhauling the fuel injection pump in variety development according to plant breeding and genetics science principles"],
    correct: 2,
    explanation: "Daily maintenance (before each shift) includes: checking engine oil level on the dipstick, radiator coolant level, fuel level, air cleaner (clean if dusty), tyre pressure, battery electrolyte and all fluid levels. These prevent breakdowns."
  },
  {
    id: "d151l_150",
    subject: "da-151",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "A farm machinery log book (machine record) is maintained to:",
    options: ["Record hours of operation, maintenance done, repairs, fuel consumption and field operations", "Track rainfall data in plant breeding according to plant breeding and genetics science principles", "Record labour wages only for crop improvement", "List crop varieties grown on the farm in variety development"],
    correct: 0,
    explanation: "A machinery log book records: date of operation, field worked, hours operated, fuel consumed, maintenance performed (oil change, filter change), repairs needed/done, and operator name. This helps schedule preventive maintenance and calculate machinery costs."
  },
  {
    id: "d151l_151",
    subject: "da-151",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Before transporting an implement on a public road, the operator should:",
    options: ["Remove all lubricants from the implement in plant breeding", "Raise and lock the implement in transport position and attach safety SMV emblem", "Leave the PTO engaged for fast travel for crop improvement", "Keep the implement in the lowest position and at full working depth"],
    correct: 1,
    explanation: "Before road travel, mounted implements must be raised and locked in transport position (top link adjusted, transport locks engaged), PTO disengaged, and a Slow-Moving Vehicle (SMV) emblem and lights attached for road safety."
  },
  {
    id: "d151l_152",
    subject: "da-151",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The air cleaner on a tractor engine must be serviced regularly because:",
    options: ["It cools the engine oil in plant breeding", "It removes water from diesel fuel for crop improvement", "Dust and debris block airflow, causing rich mixture", "It slows down the engine to save fuel in variety development"],
    correct: 2,
    explanation: "The air cleaner prevents abrasive dust from entering the engine. In dusty farm conditions, it clogs rapidly, restricting air intake. This causes incomplete combustion, loss of power, increased fuel consumption and severe cylinder/piston wear if neglected."
  },
  {
    id: "d151l_153",
    subject: "da-151",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Greasing (lubricating) of tractor and implement bearing points should be done:",
    options: ["Every 8–10 operating hours (daily or as per manufacturer schedule)", "Every 500 hours in plant breeding", "Once a year during off-season for crop improvement", "Only when the bearing squeaks in variety development"],
    correct: 0,
    explanation: "Bearing greasing should be done every 8–10 hours (daily). Grease gun is used to inject grease through Zerk/grease fittings at all pivot points, bearings, joints and moving parts. Neglected greasing causes rapid bearing failure."
  },
  {
    id: "d151l_154",
    subject: "da-151",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "When should a tractor's valve clearances (tappet clearances) be adjusted?",
    options: ["Every 2000 hours or never in plant breeding", "Every 250–500 hours or when engine becomes noisy (tapping sound)", "Every 50 hours for crop improvement", "Only at initial assembly in variety development"],
    correct: 1,
    explanation: "Valve (tappet) clearances are checked and adjusted every 250–500 hours of operation or when a characteristic ticking/tapping sound is heard. Incorrect clearances cause poor engine performance, overheating and valve burning."
  },
  {
    id: "d151l_155",
    subject: "da-151",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The fuel filter in a diesel tractor must be replaced periodically to:",
    options: ["Add cetane improver to the fuel for crop improvement as recommended by ICAR guidelines", "Increase fuel injection pressure in plant breeding according to plant breeding and genetics science principles", "Remove water and particles from diesel before it reaches the injection pump, preventing costly damage", "Warm the fuel in cold weather in variety development as recommended by ICAR guidelines"],
    correct: 2,
    explanation: "Diesel fuel often contains water and fine particles. The fuel filter removes these before diesel reaches the high-precision fuel injection pump. Water and sediment in the FIP cause accelerated wear and failure of the injectors and pump, which are very expensive to repair."
  },
  {
    id: "d151l_156",
    subject: "da-151",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "A Slow Moving Vehicle (SMV) emblem fitted to farm equipment is:",
    options: ["A green light indicating the engine is running in plant breeding", "A speed limit sign for the driver for crop improvement", "A red triangular reflective sign warning road users that the vehicle travels at <40 km/h", "A regulatory plate showing the engine HP in variety development"],
    correct: 2,
    explanation: "The SMV (Slow Moving Vehicle) emblem is a distinctive fluorescent orange-red equilateral triangle with retro-reflective border, mounted on the rear of tractors and machinery to warn road traffic that the vehicle moves at less than 40 km/h."
  },
  {
    id: "d151l_157",
    subject: "da-151",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "To winterise (long-term storage) a tractor, the operator should:",
    options: ["Leave the fuel tank empty to prevent fuel degradation only in plant breeding", "Fill the fuel tank completely and leave the engine unlubricated for crop improvement", "Just remove the battery and leave everything else in variety development", "Drain coolant, add antifreeze, change oil, lubricate all points, coat exposed metal, charge battery and store under cover"],
    correct: 3,
    explanation: "Long-term storage winterisation includes: draining and replacing engine oil, adding antifreeze to the cooling system, lubing all grease points, protecting exposed metal with rust preventive, disconnecting/charging the battery and storing under a protective cover."
  },



  // ── BATCH 2: Additional 100 questions from PJTSAU DA-151 Theory Notes ──
  {
    id: "d151x_001",
    subject: "da-151",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "On an average, a man develops nearly how much horse power?",
    options: ["0.1 hp", "0.2 hp", "0.5 hp", "0.05 hp"],
    correct: 0,
    explanation: "As per DA-151 notes: On an average, a man develops nearly 0.1 horse power (hp)."
  },
  {
    id: "d151x_002",
    subject: "da-151",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "India has how many crore cattle, which is the highest in the world?",
    options: ["17.68 crore", "22.68 crore", "30 crore", "12.68 crore"],
    correct: 1,
    explanation: "As per DA-151 notes: India has 22.68 crore cattle, which is the highest in the World."
  },
  {
    id: "d151x_003",
    subject: "da-151",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Power developed by an average pair of bullocks is about",
    options: ["2 hp", "3 hp", "1 hp", "0.5 hp"],
    correct: 2,
    explanation: "As per DA-151 notes: Power developed by an average pair of bullocks is about 1 hp for usual farm work."
  },
  {
    id: "d151x_004",
    subject: "da-151",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Nearly what percentage of total draft power used in world agriculture is still provided by animals?",
    options: ["90%", "60%", "80%", "40%"],
    correct: 2,
    explanation: "As per DA-151 notes: Nearly 80% of the total draft power used in agriculture throughout the World is still provided by animals."
  },
  {
    id: "d151x_005",
    subject: "da-151",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Wind turbines require minimum wind speed of how many km per hour to operate?",
    options: ["15-20 km/h", "8-10 km/h", "3-5 km/h", "25-30 km/h"],
    correct: 1,
    explanation: "As per DA-151 notes: Wind speeds must be 8 to 10 km per hour to operate the wind turbines."
  },
  {
    id: "d151x_006",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Thermal efficiency of diesel engine varies from",
    options: ["20-25%", "40-50%", "25-32%", "32-38%"],
    correct: 3,
    explanation: "As per DA-151 notes: Thermal efficiency of diesel engine varies from 32 to 38 per cent."
  },
  {
    id: "d151x_007",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Thermal efficiency of petrol engine varies from",
    options: ["32-38%", "40-50%", "25-32%", "15-20%"],
    correct: 2,
    explanation: "As per DA-151 notes: Thermal efficiency of petrol engine varies from 25 to 32 per cent."
  },
  {
    id: "d151x_008",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "In a four stroke cycle engine, the cycle is completed in how many revolutions of the crankshaft?",
    options: ["2", "3", "1", "4"],
    correct: 0,
    explanation: "As per DA-151 notes: When the cycle is completed in two revolutions of the crankshaft, it is called four stroke cycle engines."
  },
  {
    id: "d151x_009",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "In two stroke cycle engine, gas movement takes place through",
    options: ["manifolds", "ports", "valves", "filters"],
    correct: 1,
    explanation: "As per DA-151 notes: There is no valve in two stroke engine - gas movement takes place through holes called ports in the cylinder."
  },
  {
    id: "d151x_010",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Piston rings are usually made of",
    options: ["cast iron or pressed steel alloy", "copper in plant breeding", "drop forged steel", "aluminum alloy for crop improvement"],
    correct: 0,
    explanation: "As per DA-151 notes: Piston rings are usually made of cast iron or pressed steel alloy."
  },
  {
    id: "d151x_011",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The piston pin is also called",
    options: ["gudgeon pin", "connecting pin", "crank pin", "main journal"],
    correct: 0,
    explanation: "As per DA-151 notes: Piston pin is also called wrist pin or gudgeon pin, used to join the connecting rod to the piston."
  },
  {
    id: "d151x_012",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The crankshaft is usually made of",
    options: ["cast iron in plant breeding", "aluminum alloy for crop improvement", "copper alloy in variety development", "drop forged steel or cast steel"],
    correct: 3,
    explanation: "As per DA-151 notes: Usually the crankshaft is made of drop forged steel or cast steel."
  },
  {
    id: "d151x_013",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The flywheel is made of",
    options: ["copper", "drop forged steel", "aluminum", "cast iron"],
    correct: 3,
    explanation: "As per DA-151 notes: Fly wheel is made of cast iron."
  },
  {
    id: "d151x_014",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The camshaft speed is exactly half the speed of the crankshaft in",
    options: ["two stroke engine", "four stroke engine", "diesel engine only", "petrol engine only"],
    correct: 1,
    explanation: "As per DA-151 notes: The speed of the camshaft is exactly half the speed of the crankshaft in four stroke engine."
  },
  {
    id: "d151x_015",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Timing gear is also called Half time gear because",
    options: ["it is half the size in plant breeding", "it works for half time for crop improvement", "camshaft gear has twice as many teeth as crankshaft gear", "it has half efficiency in variety development"],
    correct: 2,
    explanation: "As per DA-151 notes: Camshaft gear has twice as many teeth as crankshaft gear, hence commonly called Half time gear."
  },
  {
    id: "d151x_016",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "In a four stroke engine, out of four strokes, power strokes are",
    options: ["three", "two", "one", "four"],
    correct: 2,
    explanation: "As per DA-151 notes: Out of four strokes, there is only one power stroke and three idle strokes."
  },
  {
    id: "d151x_017",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "During the suction stroke of a four stroke engine, which valve remains closed?",
    options: ["Inlet valve", "Exhaust valve", "Neither valve", "Both valves"],
    correct: 1,
    explanation: "As per DA-151 notes: During suction stroke, inlet valve remains open while exhaust valve remains closed."
  },
  {
    id: "d151x_018",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "During power stroke of four stroke engine, the condition of valves is",
    options: ["both closed", "inlet closed, exhaust open", "inlet open, exhaust closed", "both open"],
    correct: 0,
    explanation: "As per DA-151 notes: Both valves are closed during power stroke."
  },
  {
    id: "d151x_019",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Scavenging in IC engines refers to",
    options: ["cooling of cylinder in plant breeding", "introduction of fresh fuel", "removal of burnt exhaust gases from cylinder", "lubrication of parts for crop improvement"],
    correct: 2,
    explanation: "As per DA-151 notes: Scavenging is the process of removal of burnt or exhaust gases from the engine cylinder."
  },
  {
    id: "d151x_020",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Compression ratio of diesel engine varies from",
    options: ["8:1 to 12:1", "20:1 to 25:1", "5:1 to 8:1", "14:1 to 20:1"],
    correct: 3,
    explanation: "As per DA-151 notes: Compression ratio of diesel engine varies from 14:1 to 20:1."
  },
  {
    id: "d151x_021",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Compression ratio of petrol engine varies from",
    options: ["8:1 to 12:1", "20:1 to 25:1", "5:1 to 8:1", "14:1 to 20:1"],
    correct: 2,
    explanation: "As per DA-151 notes: Compression ratio of petrol engine varies from 5:1 to 8:1."
  },
  {
    id: "d151x_022",
    subject: "da-151",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Which fuel has the highest calorific value (kcal/kg)?",
    options: ["Petrol", "High speed diesel oil", "Power kerosene", "Light diesel oil"],
    correct: 0,
    explanation: "As per DA-151 notes: Petrol has the highest calorific value of 11,100 kcal/kg."
  },
  {
    id: "d151x_023",
    subject: "da-151",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Octane number is a standard measure for which fuel property?",
    options: ["Volatility", "Calorific value", "Knock characteristics", "Viscosity"],
    correct: 2,
    explanation: "As per DA-151 notes: Octane number is standard yardstick for measuring knock characteristics of fuels."
  },
  {
    id: "d151x_024",
    subject: "da-151",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Cetane number is the measure of which property?",
    options: ["Viscosity in plant breeding", "Calorific value", "Interval between injection and auto-ignition", "Boiling point"],
    correct: 2,
    explanation: "As per DA-151 notes: Cetane number is the relative measure of the interval between beginning of injection and auto-ignition of fuel."
  },
  {
    id: "d151x_025",
    subject: "da-151",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The fuel injection pump creates pressure varying from",
    options: ["10-50 kg/cm2", "50-100 kg/cm2", "120-300 kg/cm2", "400-500 kg/cm2"],
    correct: 2,
    explanation: "As per DA-151 notes: Fuel injection pump is used to create pressure varying from 120 kg/cm2 to 300 kg/cm2."
  },
  {
    id: "d151x_026",
    subject: "da-151",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The primary fuel filter in diesel engine removes",
    options: ["carbon deposits", "fine dust particles", "only water", "coarse materials, water and dust"],
    correct: 3,
    explanation: "As per DA-151 notes: Primary filter removes coarse materials, water and dust while secondary filter removes fine dust particles."
  },
  {
    id: "d151x_027",
    subject: "da-151",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Lubrication produces which effects in IC engine?",
    options: ["Cooling, Heating, Sealing, Filtering", "Reducing friction, Cooling, Sealing, Heating", "Reducing friction, Cooling, Sealing, Cleaning", "Reducing friction, Heating, Sealing, Cooling"],
    correct: 2,
    explanation: "As per DA-151 notes: Lubrication produces: (a) Reducing frictional effect (b) Cooling effect (c) Sealing effect (d) Cleaning effect."
  },
  {
    id: "d151x_028",
    subject: "da-151",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "In the splash lubrication system, the oil is splashed using",
    options: ["an oil pump in plant breeding", "a dipper at the lower end of connecting rod", "an oil fan for crop improvement", "a spray nozzle in variety development"],
    correct: 1,
    explanation: "As per DA-151 notes: A dipper is provided at the lower end of the connecting rod, which dips into the oil trough and splashes oil."
  },
  {
    id: "d151x_029",
    subject: "da-151",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "The forced feed lubrication system is commonly used on",
    options: ["single cylinder engines", "two stroke engines", "high speed multi-cylinder engines in tractors", "air cooled engines"],
    correct: 2,
    explanation: "As per DA-151 notes: Forced feed system is commonly used on high speed multi-cylinder engine in tractors, trucks and automobiles."
  },
  {
    id: "d151x_030",
    subject: "da-151",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Low oil pressure in lubrication system can result from",
    options: ["clogged oil line", "strong valve spring", "stuck relief valve", "worn oil pump"],
    correct: 3,
    explanation: "As per DA-151 notes: Low oil pressure can result from weak relief valve spring, worn oil pump, cracked oil line, obstruction in oil lines, very thin oil and worn out bearings."
  },
  {
    id: "d151x_031",
    subject: "da-151",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Temperature during power stroke of IC engine can be as high as",
    options: ["1600°C", "2000°C", "800°C", "1000°C"],
    correct: 0,
    explanation: "As per DA-151 notes: Temperature produced on the power stroke of an engine can be as high as 1600°C."
  },
  {
    id: "d151x_032",
    subject: "da-151",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "What percentage of total heat produced in IC engine is used for producing useful power?",
    options: ["30%", "10%", "20%", "40%"],
    correct: 0,
    explanation: "As per DA-151 notes: Only about 30% of total heat produced is used to produce useful power; 40% via exhaust, 30% removed by cooling system."
  },
  {
    id: "d151x_033",
    subject: "da-151",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Best operating temperature of IC engine lies between",
    options: ["200-250°F", "80-100°F", "140-200°F", "100-120°F"],
    correct: 2,
    explanation: "As per DA-151 notes: Best operating temperature of IC engine lies between 140°F to 200°F."
  },
  {
    id: "d151x_034",
    subject: "da-151",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "In air cooled engines, cylinders have fins to",
    options: ["prevent rusting in plant breeding", "increase area of contact of air for speedy cooling", "reduce weight for crop improvement", "strengthen the cylinder in variety development"],
    correct: 1,
    explanation: "As per DA-151 notes: The cylinder of an air cooled engine has fins to increase the area of contact of air for speedy cooling."
  },
  {
    id: "d151x_035",
    subject: "da-151",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "The sheet metal casing enclosing air cooled engine cylinder is called",
    options: ["cowling", "shroud", "baffle", "cooling jacket"],
    correct: 0,
    explanation: "As per DA-151 notes: The cylinder is normally enclosed in a sheet metal casing called Cowling in air cooled engines."
  },
  {
    id: "d151x_036",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "In a diesel engine, fuel ignition takes place due to",
    options: ["chemical reaction", "catalytic conversion", "high pressure and temperature", "electric spark"],
    correct: 2,
    explanation: "As per DA-151 notes: In diesel engine, fuel is injected into superheated air and ignition takes place due to high pressure and temperature."
  },
  {
    id: "d151x_037",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "External combustion engine examples include",
    options: ["Motor car engine", "Diesel engine", "Oil engine", "Railway engine and steam engine"],
    correct: 3,
    explanation: "As per DA-151 notes: External combustion engine examples are railway engine and steam engine."
  },
  {
    id: "d151x_038",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Cylinders in IC engines are usually made of",
    options: ["aluminum alloy", "copper", "high grade cast-iron", "stainless steel"],
    correct: 2,
    explanation: "As per DA-151 notes: Cylinders are usually made of high grade cast-iron."
  },
  {
    id: "d151x_039",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Wet cylinder liner comes in contact with",
    options: ["combustion gases", "lubricating oil", "only piston", "cooling water"],
    correct: 3,
    explanation: "As per DA-151 notes: Wet liners come in contact with the cooling water, whereas dry liners do not come in contact with cooling water."
  },
  {
    id: "d151x_040",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Two stroke cycle engine produces how much more power than 4-stroke engine for same cylinder volume?",
    options: ["About 3 times more", "About 1.5 times more", "About 2 times more", "Same power"],
    correct: 1,
    explanation: "As per DA-151 notes: Two stroke engine produces large power - about 1.5 times of 4 stroke for same cylinder volume."
  },
  {
    id: "d151x_041",
    subject: "da-151",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "High speed diesel oil (HSD) is used in",
    options: ["low speed engines", "high speed engine vehicles", "marine engines", "stationary engines only"],
    correct: 1,
    explanation: "As per DA-151 notes: High speed diesel oil is used in high speed engine vehicles and it is lighter weight than LDO."
  },
  {
    id: "d151x_042",
    subject: "da-151",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Air venting of diesel fuel system is done through",
    options: ["main filter in plant breeding", "overflow valve for crop improvement", "priming pump through bleeding holes of injection pump", "fuel lift pump in variety development"],
    correct: 2,
    explanation: "As per DA-151 notes: Air is removed by the priming pump through the bleeding holes of the injection pump."
  },
  {
    id: "d151x_043",
    subject: "da-151",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "The lubricating oil pump type commonly used in forced feed system is",
    options: ["centrifugal or impeller type", "diaphragm type", "piston type", "gear type or vane type"],
    correct: 3,
    explanation: "As per DA-151 notes: Lubricating oil pump is a positive displacement pump, usually gear type or vane type."
  },
  {
    id: "d151x_044",
    subject: "da-151",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "About what fraction of total electrical power generated in India is used for farm work?",
    options: ["1/10", "1/15", "1/20", "1/5"],
    correct: 0,
    explanation: "As per DA-151 notes: About 1/10th of the total electrical power generated in India is consumed for farm work (approximately 4600 megawatt)."
  },
  {
    id: "d151x_045",
    subject: "da-151",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Biomass energy can be converted into producer gas using which process?",
    options: ["Pyrolysis", "Gasification", "Fermentation", "Distillation"],
    correct: 1,
    explanation: "As per DA-151 notes: Biomass energy - Gasifiers produce producer gas, pyrolysis produces liquid fuels, Biogas etc."
  },
  {
    id: "d151x_046",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The connecting rod is usually made of",
    options: ["cast iron", "drop forged steel", "copper", "aluminum alloy"],
    correct: 1,
    explanation: "As per DA-151 notes: The connecting rod is usually made of drop forged steel."
  },
  {
    id: "d151x_047",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The gasket inserted between cylinder and cylinder head is made of",
    options: ["rubber", "neoprene", "leather", "asbestos or copper sheet"],
    correct: 3,
    explanation: "As per DA-151 notes: A gasket made of copper sheet or asbestos is inserted between the cylinder and the cylinder head."
  },
  {
    id: "d151x_048",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Piston is preferred to be made of aluminum and its alloys mainly due to",
    options: ["high strength", "heat resistance", "low cost", "lightness"],
    correct: 3,
    explanation: "As per DA-151 notes: Aluminum and its alloys are preferred mainly due to its lightness for pistons."
  },
  {
    id: "d151x_049",
    subject: "da-151",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Specific fuel consumption of diesel engine is about",
    options: ["0.2 kg/BHP/hour", "0.15 kg/BHP/hour", "0.29 kg/BHP/hour", "0.35 kg/BHP/hour"],
    correct: 0,
    explanation: "As per DA-151 notes: Specific fuel consumption of diesel engine is about 0.2 kg per BHP per hour."
  },
  {
    id: "d151x_050",
    subject: "da-151",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Specific fuel consumption of petrol engine is about",
    options: ["0.15 kg/BHP/hour", "0.29 kg/BHP/hour", "0.2 kg/BHP/hour", "0.35 kg/BHP/hour"],
    correct: 1,
    explanation: "As per DA-151 notes: Specific fuel consumption of petrol engine is about 0.29 kg per BHP per hour."
  },
  {
    id: "d151x_051",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "During exhaust stroke of four stroke engine, which valve is open?",
    options: ["Inlet valve", "Exhaust valve", "Neither valve", "Both valves"],
    correct: 1,
    explanation: "As per DA-151 notes: During exhaust stroke, exhaust gases go out through exhaust valves; inlet valve is closed."
  },
  {
    id: "d151x_052",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The piston in petrol engine is preferred to be made of cast iron due to its",
    options: ["low cost only", "conductivity in plant breeding", "lightness for crop improvement", "high compressive strength and low expansion"],
    correct: 3,
    explanation: "As per DA-151 notes: Cast iron is chosen for pistons due to high compressive strength, low coefficient of expansion, resistance to high temperature, ease of casting and low cost."
  },
  {
    id: "d151x_053",
    subject: "da-151",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Sealing effect of lubrication prevents",
    options: ["overheating in plant breeding", "dirt accumulation for crop improvement", "leakage of gases from engine cylinder", "friction in variety development"],
    correct: 2,
    explanation: "As per DA-151 notes: Sealing effect - lubricant enters gap between cylinder liner, piston and piston rings, preventing leakage of gases from engine cylinder."
  },
  {
    id: "d151x_054",
    subject: "da-151",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Excessive oil pressure in lubrication system can be caused by",
    options: ["thin oil", "stuck relief valve", "weak relief valve spring", "worn oil pump"],
    correct: 1,
    explanation: "As per DA-151 notes: Excessive oil pressure may result due to stuck relief valve, strong valve spring, clogged oil line and very heavy oil."
  },
  {
    id: "d151x_055",
    subject: "da-151",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "About what percentage of total heat in IC engine is passed to atmosphere via exhaust?",
    options: ["20%", "30%", "40%", "50%"],
    correct: 2,
    explanation: "As per DA-151 notes: About 40% of total heat produced is passed to the atmosphere via exhaust."
  },
  {
    id: "d151x_056",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Two stroke engine has how much more fuel consumption compared to four stroke?",
    options: ["15% more", "5% more", "20% more", "10% more"],
    correct: 0,
    explanation: "As per DA-151 notes: Fuel consumption of two stroke engine is about 15% more than four stroke engine."
  },
  {
    id: "d151x_057",
    subject: "da-151",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Human power is described as which type of power in comparison to other sources?",
    options: ["Costliest", "Cheapest", "Most efficient", "Fastest"],
    correct: 0,
    explanation: "As per DA-151 notes: Human power disadvantage - Costliest power compared to all other forms of power."
  },
  {
    id: "d151x_058",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "In carburetor type petrol engine, air-fuel ratio is approximately",
    options: ["15:1", "20:1", "25:1", "10:1"],
    correct: 0,
    explanation: "As per DA-151 notes: In petrol engine, air and fuel are almost always in the ratio of 15:1."
  },
  {
    id: "d151x_059",
    subject: "da-151",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "With diesel engine, 4.5 litres of fuel is sufficient for nearly how many hp-hours?",
    options: ["20", "15", "25", "10"],
    correct: 0,
    explanation: "As per DA-151 notes: 4.5 litres of diesel fuel is sufficient for nearly 20 hp hours."
  },
  {
    id: "d151x_060",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The function of flywheel in IC engine includes storing energy during power stroke and",
    options: ["lubricating parts in plant breeding", "providing uniform rotary motion by virtue of its inertia", "cooling the engine in variety development", "pumping fuel for crop improvement"],
    correct: 1,
    explanation: "As per DA-151 notes: Flywheel stores energy during power stroke and returns same energy during idle strokes, providing uniform rotary motion by virtue of its inertia."
  },
  {
    id: "d151x_061",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The crankcase provides a reservoir for",
    options: ["lubricating oil", "cooling water", "compressed air", "fuel"],
    correct: 0,
    explanation: "As per DA-151 notes: The crankcase provides a reservoir for the lubricating oil of the engine."
  },
  {
    id: "d151x_062",
    subject: "da-151",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Fuels with low cetane numbers result in",
    options: ["difficult starting, noise and exhaust smoke", "better fuel economy", "reduced power output", "easy starting in plant breeding"],
    correct: 0,
    explanation: "As per DA-151 notes: Fuels with low cetane numbers will result in difficult starting, noise and exhaust smoke."
  },
  {
    id: "d151x_063",
    subject: "da-151",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Over-cooling of IC engine is undesirable because",
    options: ["it creates noise in plant breeding as recommended by ICAR guidelines", "it wastes water for crop improvement", "it increases fuel consumption only as recommended by ICAR guidelines", "neither overheating nor over-cooling is desirable for satisfactory performance"],
    correct: 3,
    explanation: "As per DA-151 notes: For satisfactory performance, neither overheating nor over-cooling is desirable."
  },
  {
    id: "d151x_064",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Which statement about two stroke engine is correct?",
    options: ["Has valve mechanism", "Simple and cheap construction", "Has independent lubricating oil circuit", "Complicated and expensive"],
    correct: 1,
    explanation: "As per DA-151 notes: Two stroke engine - Simple, cheap construction (vs four stroke - complicated and expensive)."
  },
  {
    id: "d151x_065",
    subject: "da-151",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "India has 329 m ha of land but the cultivable percentage is",
    options: ["very high", "very less", "75%", "50%"],
    correct: 1,
    explanation: "As per DA-151 notes: India has 329 m ha of land but very less per cent of land is cultivable."
  },
  {
    id: "d151x_066",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Engine timing marks are usually stamped on the",
    options: ["crankshaft", "flywheel", "cylinder head", "connecting rod"],
    correct: 1,
    explanation: "As per DA-151 notes: Engine timing marks are usually stamped on the flywheel, which helps in adjusting the timing of the engine."
  },
  {
    id: "d151x_067",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The small end of the connecting rod fits over",
    options: ["the gudgeon pin", "the crank pin", "the camshaft", "the main journal"],
    correct: 0,
    explanation: "As per DA-151 notes: The end of the connecting rod which fits over the gudgeon pin is called small end of the connecting rod."
  },
  {
    id: "d151x_068",
    subject: "da-151",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Pre-ignition of fuel mixture in IC engine causes",
    options: ["increased efficiency in plant breeding", "engine knocking and loss of power", "better cooling for crop improvement", "lower exhaust emissions"],
    correct: 1,
    explanation: "As per DA-151 notes: Pre-ignition of fuel mixture would cause engine knocking as well as loss of power - a bad effect of high temperature."
  },
  {
    id: "d151x_069",
    subject: "da-151",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "About what percentage of total rural population in India is involved for farm work?",
    options: ["50%", "30%", "10%", "20%"],
    correct: 1,
    explanation: "As per DA-151 notes: Of the total rural population in India, only 30% are involved for farm work."
  },
  {
    id: "d151x_070",
    subject: "da-151",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "In India, what percentage of population depends on agriculture as main employment?",
    options: ["55-65%", "45-55%", "75-85%", "65-75%"],
    correct: 3,
    explanation: "As per DA-151 notes: 65 to 75% population in India depends on agriculture as main employment."
  },
  {
    id: "d151x_071",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Assertion (A): Diesel engines are more fuel efficient than petrol engines.\nReason (R): Diesel engines have thermal efficiency of 32-38% versus 25-32% for petrol engines.",
    options: ["A is false but R is true", "A is true but R is false", "Both A and R are true but R is not the correct explanation of A", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "As per DA-151 notes: Diesel engine thermal efficiency 32-38%, petrol engine 25-32%."
  },
  {
    id: "d151x_072",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Assertion (A): Petrol engines start more easily than diesel engines in cold weather.\nReason (R): Petrol vaporizes quicker than diesel oil in the engine cylinder.",
    options: ["Both A and R are true and R is the correct explanation of A", "A is false but R is true", "Both A and R are true but R is not the correct explanation of A", "A is true but R is false"],
    correct: 0,
    explanation: "As per DA-151 notes: Petrol vaporizes quicker than diesel oil in the engine cylinder, helping easy starting of petrol engines."
  },
  {
    id: "d151x_073",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Assertion (A): Two stroke engines produce about 1.5 times more power than four stroke for same cylinder size.\nReason (R): Two stroke engine completes a power stroke in every revolution of crankshaft.",
    options: ["A is false but R is true", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is not the correct explanation of A", "A is true but R is false"],
    correct: 1,
    explanation: "As per DA-151 notes: Two stroke engine has one power stroke per revolution while four stroke has one per two revolutions, giving 1.5 times more power."
  },
  {
    id: "d151x_074",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Assertion (A): Flywheel provides uniform rotary motion in IC engine.\nReason (R): Flywheel stores energy during power stroke and returns it during idle strokes.",
    options: ["A is false but R is true", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is not the correct explanation of A", "A is true but R is false"],
    correct: 1,
    explanation: "As per DA-151 notes: Flywheel stores energy during power stroke and returns same energy during idle strokes, providing uniform rotary motion by virtue of its inertia."
  },
  {
    id: "d151x_075",
    subject: "da-151",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Assertion (A): Lubrication oil has a cleaning effect on the engine.\nReason (R): Lubrication keeps the engine clean by removing dirt or carbon from inside of the engine along with the oil.",
    options: ["A is false but R is true", "A is true but R is false", "Both A and R are true but R is not the correct explanation of A", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "As per DA-151 notes: Lubrication keeps the engine clean by removing dirt or carbon from inside of the engine along with the oil - cleaning effect."
  },
  {
    id: "d151x_076",
    subject: "da-151",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Assertion (A): Only 30% of heat in IC engine is used for useful power.\nReason (R): 40% of heat is lost via exhaust gases and 30% is removed by the cooling system.",
    options: ["A is false but R is true", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is not the correct explanation of A", "A is true but R is false"],
    correct: 1,
    explanation: "As per DA-151 notes: 40% of total heat produced is passed to atmosphere via exhaust, 30% removed by cooling system and only 30% used to produce useful power."
  },
  {
    id: "d151x_077",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Assertion (A): Compression rings are placed in grooves nearest to the piston head.\nReason (R): They prevent leakage of gases from the cylinder and help increasing compression pressure.",
    options: ["A is false but R is true", "Both A and R are true but R is not the correct explanation of A", "Both A and R are true and R is the correct explanation of A", "A is true but R is false"],
    correct: 2,
    explanation: "As per DA-151 notes: Compression rings are always placed in grooves of piston nearest to the piston head; they prevent leakage and help increasing compression pressure."
  },
  {
    id: "d151x_078",
    subject: "da-151",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Assertion (A): Diesel engine develops more torque when heavily loaded.\nReason (R): This characteristic is not present in carburetor/petrol engines.",
    options: ["Both A and R are true and R is the correct explanation of A", "A is false but R is true", "Both A and R are true but R is not the correct explanation of A", "A is true but R is false"],
    correct: 0,
    explanation: "As per DA-151 notes: Diesel engine develops more torque when heavily loaded; this characteristic is not present in carburetor engines."
  },
  {
    id: "d151x_079",
    subject: "da-151",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Assertion (A): Animal power is most important farm power source particularly in India.\nReason (R): 80% of total draft power in world agriculture is still provided by animals.",
    options: ["A is false but R is true", "A is true but R is false", "Both A and R are true but R is not the correct explanation of A", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "As per DA-151 notes: Animal is the most important source of power on farm and nearly 80% of total draft power in agriculture throughout World is still provided by animals."
  },
  {
    id: "d151x_080",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Assertion (A): In diesel engine, only air is taken in during suction stroke.\nReason (R): Fuel is injected separately into the compressed hot air at the end of compression stroke.",
    options: ["Both A and R are true and R is the correct explanation of A", "A is false but R is true", "Both A and R are true but R is not the correct explanation of A", "A is true but R is false"],
    correct: 0,
    explanation: "As per DA-151 notes: In diesel engine, air alone is taken in during suction stroke; fuel is injected through fuel injectors and ignited by heat of compression."
  },
  {
    id: "d151x_081",
    subject: "da-151",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Assertion (A): High temperature in IC engine can cause piston seizure.\nReason (R): Cylinder and piston may expand to such an extent that piston seizes in cylinder.",
    options: ["A is false but R is true", "A is true but R is false", "Both A and R are true but R is not the correct explanation of A", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "As per DA-151 notes: Cylinder and piston may expand to such an extent that piston would seize in the cylinder and stop the engine - a bad effect of high temperature."
  },
  {
    id: "d151x_082",
    subject: "da-151",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Assertion (A): Forced feed lubrication system is used in tractors and trucks.\nReason (R): This system is suitable for high speed multi-cylinder engines.",
    options: ["A is false but R is true", "A is true but R is false", "Both A and R are true but R is not the correct explanation of A", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "As per DA-151 notes: Forced feed system is commonly used on high speed multi-cylinder engine in tractors, trucks and automobiles."
  },
  {
    id: "d151x_083",
    subject: "da-151",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Assertion (A): Higher cetane number fuels have better combustibility.\nReason (R): Higher cetane number means shorter delay interval between injection and auto-ignition.",
    options: ["A is false but R is true", "Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is not the correct explanation of A", "A is true but R is false"],
    correct: 1,
    explanation: "As per DA-151 notes: The higher the cetane number, the shorter the delay interval and the greater its combustibility."
  },
  {
    id: "d151x_084",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Assertion (A): Camshaft gear is called half time gear.\nReason (R): The camshaft gear has twice as many teeth as the crankshaft gear.",
    options: ["A is false but R is true", "A is true but R is false", "Both A and R are true but R is not the correct explanation of A", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "As per DA-151 notes: Camshaft gear is bigger and has twice as many teeth as crankshaft gear, hence called Half time gear."
  },
  {
    id: "d151x_085",
    subject: "da-151",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Assertion (A): Air cooled engines use fins on cylinders.\nReason (R): Fins increase the area of contact with air for speedy cooling of the cylinder.",
    options: ["A is false but R is true", "Both A and R are true but R is not the correct explanation of A", "Both A and R are true and R is the correct explanation of A", "A is true but R is false"],
    correct: 2,
    explanation: "As per DA-151 notes: The cylinder of an air cooled engine has fins to increase the area of contact of air for speedy cooling."
  },
  {
    id: "d151x_086",
    subject: "da-151",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Match the farm power source with advantage:\nA-Human power, B-Animal power, C-Mechanical power\n1-Not affected by weather, 2-Easily available for all work, 3-Supplies manure to field",
    options: ["A-2, B-1, C-3", "A-2, B-3, C-1", "A-3, B-2, C-1", "A-1, B-3, C-2"],
    correct: 1,
    explanation: "As per DA-151 notes: Human power - easily available for all types of work; Animal power - supplies manure to field and lives on farm produce; Mechanical power - not affected by weather."
  },
  {
    id: "d151x_087",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Match the engine with ignition type:\nA-Petrol engine, B-Diesel engine, C-Steam engine\n1-External combustion, 2-Compression ignition, 3-Spark ignition",
    options: ["A-1, B-2, C-3", "A-2, B-3, C-1", "A-3, B-1, C-2", "A-3, B-2, C-1"],
    correct: 3,
    explanation: "As per DA-151 notes: Petrol engine-spark ignition, Diesel engine-compression ignition, Steam engine-external combustion."
  },
  {
    id: "d151x_088",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Match the engine component with function:\nA-Cylinder, B-Crankshaft, C-Camshaft\n1-Raises and lowers valves, 2-Converts reciprocating to rotary motion, 3-Confines expanding gases",
    options: ["A-1, B-2, C-3", "A-3, B-2, C-1", "A-3, B-1, C-2", "A-2, B-3, C-1"],
    correct: 1,
    explanation: "As per DA-151 notes: Cylinder-confines expanding gases, Crankshaft-converts reciprocating to rotary motion, Camshaft-raises and lowers inlet and exhaust valves."
  },
  {
    id: "d151x_089",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Match the IC engine stroke with valve status:\nA-Suction, B-Compression, C-Power\n1-Both valves closed, 2-Exhaust closed inlet open, 3-Both valves closed",
    options: ["A-1, B-2, C-3", "A-3, B-1, C-2", "A-2, B-1, C-3", "A-2, B-3, C-1"],
    correct: 2,
    explanation: "As per DA-151 notes: Suction stroke-inlet open, exhaust closed; Compression stroke-both valves closed; Power stroke-both valves closed."
  },
  {
    id: "d151x_090",
    subject: "da-151",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Match the fuel with calorific value:\nA-Petrol, B-Power kerosene, C-High speed diesel oil\n1-10,550 kcal/kg, 2-11,100 kcal/kg, 3-10,850 kcal/kg",
    options: ["A-2, B-3, C-1", "A-1, B-2, C-3", "A-3, B-2, C-1", "A-2, B-1, C-3"],
    correct: 0,
    explanation: "As per DA-151 notes: Petrol-11,100 kcal/kg, Power kerosene-10,850 kcal/kg, HSD oil-10,550 kcal/kg."
  },
  {
    id: "d151x_091",
    subject: "da-151",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Match the lubrication effect with description:\nA-Reducing friction, B-Sealing effect, C-Cleaning effect\n1-Removes dirt and carbon, 2-Prevents gas leakage, 3-Forms oil film between surfaces",
    options: ["A-1, B-2, C-3", "A-2, B-3, C-1", "A-3, B-1, C-2", "A-3, B-2, C-1"],
    correct: 3,
    explanation: "As per DA-151 notes: Reducing friction - forms oil film between surfaces; Sealing - prevents gas leakage from cylinder; Cleaning - removes dirt and carbon."
  },
  {
    id: "d151x_092",
    subject: "da-151",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Match the heat distribution in IC engine with percentage:\nA-Exhaust heat loss, B-Cooling system removal, C-Useful power\n1-30%, 2-40%, 3-30%",
    options: ["A-3, B-2, C-1", "A-1, B-2, C-3", "A-2, B-3, C-1", "A-2, B-1, C-3"],
    correct: 2,
    explanation: "As per DA-151 notes: 40% via exhaust, 30% removed by cooling system, only 30% used to produce useful power."
  },
  {
    id: "d151x_093",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Match the engine type with fuel consumption characteristic:\nA-Four stroke, B-Two stroke, C-Diesel vs petrol\n1-Diesel uses less fuel than petrol, 2-Little fuel consumption, 3-High fuel consumption (15% more)",
    options: ["A-2, B-1, C-3", "A-1, B-2, C-3", "A-3, B-2, C-1", "A-2, B-3, C-1"],
    correct: 3,
    explanation: "As per DA-151 notes: Four stroke-little fuel consumption, Two stroke-high (15% more), Diesel-less fuel than petrol."
  },
  {
    id: "d151x_094",
    subject: "da-151",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Match the diesel fuel system component with function:\nA-Fuel lift pump, B-Fuel injection pump, C-Fuel injector\n1-Delivers atomized fuel to combustion chamber, 2-Supplies high pressure fuel to injectors, 3-Transfers fuel from tank to injection pump",
    options: ["A-1, B-2, C-3", "A-3, B-1, C-2", "A-3, B-2, C-1", "A-2, B-3, C-1"],
    correct: 2,
    explanation: "As per DA-151 notes: Fuel lift pump-transfers fuel from tank to injection pump, Injection pump-supplies high pressure fuel, Fuel injector-delivers atomized fuel to combustion chamber."
  },
  {
    id: "d151x_095",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Match the piston ring type with function:\nA-Compression ring, B-Oil ring, C-Both ring types\n1-Controls oil distribution, 2-Prevents gas leakage, 3-Placed in piston grooves",
    options: ["A-1, B-2, C-3", "A-3, B-1, C-2", "A-2, B-1, C-3", "A-2, B-3, C-1"],
    correct: 2,
    explanation: "As per DA-151 notes: Compression ring-prevents gas leakage from cylinder; Oil ring-controls distribution of lubricating oil; Both types placed in piston grooves."
  },
  {
    id: "d151x_096",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Match the engine parameter with diesel vs petrol comparison:\nA-Compression ratio, B-Engine weight/hp, C-Operating cost\n1-High for diesel, low for petrol, 2-High for petrol, low for diesel, 3-Low for diesel, high for petrol",
    options: ["A-1, B-2, C-3", "A-1, B-1, C-3", "A-2, B-1, C-3", "A-3, B-2, C-1"],
    correct: 1,
    explanation: "As per DA-151 notes: Compression ratio-diesel 14:1-20:1 (high), petrol 5:1-8:1 (low); Engine weight/hp-diesel high, petrol low; Operating cost-diesel low, petrol high."
  },
  {
    id: "d151x_097",
    subject: "da-151",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Match the renewable energy source with application:\nA-Solar energy, B-Wind energy, C-Biogas\n1-Domestic cooking and lighting, 2-Solar dryers and cooker, 3-Water pumping and electricity",
    options: ["A-1, B-2, C-3", "A-2, B-3, C-1", "A-3, B-2, C-1", "A-2, B-1, C-3"],
    correct: 1,
    explanation: "As per DA-151 notes: Solar energy-solar dryers, lantern, cooker; Wind energy-water pumping, electricity generation; Biomass/Biogas-gasification, cooking and lighting."
  },
  {
    id: "d151x_098",
    subject: "da-151",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Match the oil pressure problem with cause:\nA-Low oil pressure, B-Excessive oil pressure, C-Excessive oil consumption\n1-Oil entering combustion chamber, 2-Stuck relief valve, 3-Worn oil pump",
    options: ["A-1, B-2, C-3", "A-2, B-3, C-1", "A-3, B-1, C-2", "A-3, B-2, C-1"],
    correct: 3,
    explanation: "As per DA-151 notes: Low oil pressure-worn oil pump; Excessive oil pressure-stuck relief valve; Excessive oil consumption-oil entering combustion chamber."
  },
  {
    id: "d151x_099",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Match the engine classification basis with types:\nA-Based on fuel, B-Based on cooling, C-Based on combustion\n1-Internal and external, 2-Diesel, petrol, gas, 3-Air cooled and water cooled",
    options: ["A-3, B-2, C-1", "A-1, B-2, C-3", "A-2, B-3, C-1", "A-2, B-1, C-3"],
    correct: 2,
    explanation: "As per DA-151 notes: Based on fuel-diesel/petrol/gas engines; Based on cooling-air cooled and water cooled; Based on combustion-internal and external combustion."
  },
  {
    id: "d151x_100",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Match the engine component with material:\nA-Connecting rod, B-Piston rings, C-Flywheel\n1-Cast iron, 2-Drop forged steel, 3-Cast iron or pressed steel alloy",
    options: ["A-2, B-3, C-1", "A-1, B-2, C-3", "A-3, B-2, C-1", "A-2, B-1, C-3"],
    correct: 0,
    explanation: "As per DA-151 notes: Connecting rod-drop forged steel; Piston rings-cast iron or pressed steel alloy; Flywheel-cast iron."
  },
  {
    id: "d151l_158",
    subject: "da-151",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The power developed by an average pair of bullocks for usual farm work is about:",
    options: ["1 hp", "10 hp", "0.1 hp", "5 hp"],
    correct: 0,
    explanation: "As per DA-151 notes: The power developed by an average pair of bullocks is about 1 hp for usual farm work."
  },
  {
    id: "d151l_159",
    subject: "da-151",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "An engine in which the working cycle is completed in two revolutions of the crankshaft is called a:",
    options: ["Two stroke cycle engine", "Four stroke cycle engine", "External combustion engine", "Rotary engine"],
    correct: 1,
    explanation: "As per DA-151 notes: When the cycle is completed in two revolutions of the crankshaft it is called a four stroke cycle engine; in one revolution it is a two stroke cycle engine."
  },
  {
    id: "d151l_160",
    subject: "da-151",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The process of removal of burnt or exhaust gases from the engine cylinder is known as:",
    options: ["Combustion", "Compression", "Scavenging", "Ignition"],
    correct: 2,
    explanation: "As per DA-151 notes: The process of removal of burnt or exhaust gases from the engine cylinder is known as scavenging."
  },
  {
    id: "d151l_161",
    subject: "da-151",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The complete path of power transmission from the engine to the wheels of a tractor is called the:",
    options: ["Drawbar", "Clutch", "Differential", "Power train"],
    correct: 3,
    explanation: "As per DA-151 notes: The complete path of power from the engine to the wheels is called the power train."
  },
  {
    id: "d151l_162",
    subject: "da-151",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The word 'tractor' first appeared on record in a patent in the year:",
    options: ["1890", "1906", "1936", "1960"],
    correct: 0,
    explanation: "As per DA-151 notes: In 1890 the word tractor appeared first on record in a patent issued for a tractor invented by George H. Harris of Chicago."
  },
  {
    id: "d151l_163",
    subject: "da-151",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Tractor manufacturing in India was started in 1960-61 by the first manufacturer:",
    options: ["Escorts Ltd", "M/s Eicher Good Earth", "Mahindra & Mahindra", "TAFE"],
    correct: 1,
    explanation: "As per DA-151 notes: In 1960-61, tractor manufacturing was started in India by the first manufacturer M/s Eicher Good Earth."
  },
  {
    id: "d151l_164",
    subject: "da-151",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Two-wheel tractors used for small farms, hilly areas and gardening are also called:",
    options: ["Crawler tractors", "Garden tractors", "Power tillers", "Walking ploughs"],
    correct: 2,
    explanation: "As per DA-151 notes: Two-wheel tractors are used for small farms, hilly areas and gardening purposes and are called power tillers."
  },
  {
    id: "d151l_165",
    subject: "da-151",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "The amount of heat liberated by the complete combustion of a fuel is known as its:",
    options: ["Flash point", "Octane number", "Viscosity", "Calorific value"],
    correct: 3,
    explanation: "As per DA-151 notes: The heat liberated by combustion of a fuel is known as the calorific value or heat value of the fuel."
  },
  {
    id: "d151l_166",
    subject: "da-151",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "An engine in which the working cycle is completed in one revolution of the crankshaft is a:",
    options: ["Two stroke cycle engine", "Four stroke cycle engine", "Diesel four stroke engine", "External combustion engine"],
    correct: 0,
    explanation: "As per DA-151 notes: When the cycle is completed in one revolution of the crankshaft it is called a two stroke cycle engine."
  }
];
