import { Question } from "@/types";

export const irrigationQuestions: Question[] = [
  {
    id: "irr001",
    subject: "irrigation",
    question: "Which method of irrigation has the highest water use efficiency?",
    options: ["Flood irrigation", "Furrow irrigation", "Sprinkler irrigation", "Drip irrigation"],
    correct: 3,
    explanation: "Drip irrigation has the highest water use efficiency (90-95%) as water is delivered directly to the root zone, minimizing evaporation and runoff losses."
  },
  {
    id: "irr002",
    subject: "irrigation",
    question: "The term 'Delta' in irrigation refers to:",
    options: ["Total area irrigated in irrigation management", "Depth of water applied per irrigation for water application", "Water lost through evaporation under field conditions", "Total depth of water required by crop during entire growing period"],
    correct: 3,
    explanation: "Delta is the total depth of water (in cm) required by a crop during its entire growing period from sowing to harvest."
  },
  {
    id: "irr003",
    subject: "irrigation",
    question: "Duty of water is defined as:",
    options: ["Frequency of irrigation as per irrigation engineering and water management norms", "Volume of water required per hectare in irrigation management in irrigation", "Depth of water applied per irrigation for water application for water management", "Area of land irrigated by unit discharge of water flowing continuously for entire base period"],
    correct: 3,
    explanation: "Duty is the area of land (in hectares) that can be irrigated by one cumec (1 m³/s) of water flowing continuously throughout the base period of the crop."
  },
  {
    id: "irr004",
    subject: "irrigation",
    question: "The relationship between Duty (D), Delta (Δ) and Base period (B) is:",
    options: ["D = Δ/8.64B", "D = 8.64B/Δ", "D = B/Δ", "D = 8.64Δ/B"],
    correct: 1,
    explanation: "The relationship is D = 8.64B/Δ, where D is in hectares/cumec, B is base period in days, and Δ is delta in meters."
  },
  {
    id: "irr005",
    subject: "irrigation",
    question: "Critical period of irrigation for rice is:",
    options: ["Tillering stage", "Panicle initiation to flowering", "Harvesting stage", "Germination stage"],
    correct: 1,
    explanation: "The critical period for rice is from panicle initiation to flowering (heading stage) when water stress severely affects grain formation and yield."
  },
  {
    id: "irr006",
    subject: "irrigation",
    question: "Soil Moisture Tension (SMT) is measured by:",
    options: ["Gravimetric method", "Neutron probe", "Tensiometer", "Gypsum block"],
    correct: 2,
    explanation: "Tensiometer measures soil moisture tension (suction) directly. It consists of a porous ceramic cup connected to a vacuum gauge and is suitable for tensions up to 0.85 bar."
  },
  {
    id: "irr007",
    subject: "irrigation",
    question: "Field Capacity (FC) is the moisture content of soil when:",
    options: ["Soil is completely saturated", "Downward drainage has essentially stopped after saturation", "Plants start wilting", "Soil has no available water"],
    correct: 1,
    explanation: "Field capacity is the amount of water held in soil after excess water has drained away and the rate of downward movement has decreased. It represents the upper limit of plant available water."
  },
  {
    id: "irr008",
    subject: "irrigation",
    question: "Permanent Wilting Point (PWP) is the soil moisture content at which:",
    options: ["Plants wilt temporarily in irrigation management", "Maximum plant growth occurs under field conditions", "Soil drainage stops for water application", "Plants wilt permanently and cannot recover even with water"],
    correct: 3,
    explanation: "Permanent Wilting Point is the soil moisture content at which plants wilt permanently and cannot recover even when placed in a humid atmosphere. It is approximately -15 bar soil moisture tension."
  },
  {
    id: "irr009",
    subject: "irrigation",
    question: "Available Water Capacity (AWC) is calculated as:",
    options: ["FC - PWP", "FC + PWP", "FC × PWP", "FC / PWP"],
    correct: 0,
    explanation: "Available Water Capacity = Field Capacity - Permanent Wilting Point. This represents the water available for plant uptake stored in the soil."
  },
  {
    id: "irr010",
    subject: "irrigation",
    question: "Which crop is most sensitive to water stress at flowering stage?",
    options: ["Wheat", "Sorghum", "Rice", "Maize"],
    correct: 3,
    explanation: "Maize (corn) is extremely sensitive to water stress at the tasseling and silking (flowering) stage. Water stress during this period can cause failure of pollination and severe yield loss."
  },
  {
    id: "irr011",
    subject: "irrigation",
    question: "Drip irrigation is also known as:",
    options: ["Sprinkler irrigation", "Flood irrigation", "Trickle irrigation", "Subsurface irrigation"],
    correct: 2,
    explanation: "Drip irrigation is also called trickle irrigation because water is applied slowly in drops or small streams directly to the root zone of plants."
  },
  {
    id: "irr012",
    subject: "irrigation",
    question: "The optimum soil moisture for most field crops is maintained between:",
    options: ["FC and PWP", "25-50% of available water capacity", "50-75% of available water capacity", "Saturation and FC"],
    correct: 2,
    explanation: "For most field crops, soil moisture is maintained between 50-75% depletion of available water capacity for optimum growth, ensuring neither water stress nor waterlogging."
  },
  {
    id: "irr013",
    subject: "irrigation",
    question: "IW/CPE ratio method is used to determine:",
    options: ["Soil moisture content", "Water quality", "Irrigation scheduling", "Drainage requirement"],
    correct: 2,
    explanation: "IW/CPE (Irrigation Water/Cumulative Pan Evaporation) ratio method is used for irrigation scheduling. It helps determine when and how much water to apply based on crop water requirements."
  },
  {
    id: "irr014",
    subject: "irrigation",
    question: "The most common method of irrigation used in India is:",
    options: ["Surface/flood irrigation", "Sprinkler irrigation", "Drip irrigation", "Sub-surface irrigation"],
    correct: 0,
    explanation: "Surface/flood irrigation is the most widely used method in India, covering about 95% of irrigated area, though it is less efficient compared to drip and sprinkler methods."
  },
  {
    id: "irr015",
    subject: "irrigation",
    question: "Evapotranspiration (ET) is the combination of:",
    options: ["Infiltration + Drainage under field conditions", "Rainfall + Irrigation in irrigation management", "Runoff + Percolation for water application", "Evaporation from soil + Transpiration from plants"],
    correct: 3,
    explanation: "Evapotranspiration is the total water lost from a cropped surface through evaporation from soil and transpiration from plant leaves combined."
  },
  {
    id: "irr016",
    subject: "irrigation",
    question: "Penman-Monteith equation is used to calculate:",
    options: ["Soil moisture tension", "Drainage coefficient", "Irrigation water quality", "Reference evapotranspiration"],
    correct: 3,
    explanation: "The Penman-Monteith equation is the FAO recommended method for calculating reference evapotranspiration (ET₀), which is then used to estimate crop water requirements."
  },
  {
    id: "irr017",
    subject: "irrigation",
    question: "Critical period of irrigation for wheat is:",
    options: ["Crown root initiation (CRI) stage", "Germination in irrigation management", "Tillering only", "Maturity for water application"],
    correct: 0,
    explanation: "The most critical irrigation for wheat is at the Crown Root Initiation (CRI) stage, which occurs 20-25 days after sowing. Missing irrigation at this stage causes severe yield reduction."
  },
  {
    id: "irr018",
    subject: "irrigation",
    question: "Waterlogging in irrigated land is caused by:",
    options: ["Rise of water table above the root zone due to excessive irrigation/poor drainage", "Excess rainfall only in irrigation management in irrigation", "Drought conditions for water application for water management", "Saline water use as per irrigation engineering and water management norms"],
    correct: 0,
    explanation: "Waterlogging occurs when the water table rises above the root zone due to excessive irrigation, seepage from canals, poor drainage, or low permeability soils, restricting oxygen supply to roots."
  },
  {
    id: "irr019",
    subject: "irrigation",
    question: "Saline water can be used for irrigation if EC is less than:",
    options: ["0.7 dS/m", "4 dS/m", "2 dS/m", "8 dS/m"],
    correct: 2,
    explanation: "Irrigation water with EC less than 0.7 dS/m is considered excellent, while water up to 2 dS/m can be used with proper management for most crops without significant yield reduction."
  },
  {
    id: "irr020",
    subject: "irrigation",
    question: "The method of measuring soil moisture by weight is called:",
    options: ["Volumetric method", "Neutron moderation method", "Tensiometric method", "Gravimetric method"],
    correct: 3,
    explanation: "The gravimetric method measures soil moisture by weighing soil before and after oven drying at 105°C. It is the standard reference method for soil moisture measurement."
  },
  {
    id: "irr021",
    subject: "irrigation",
    question: "Sprinkler irrigation is most suitable for:",
    options: ["Undulating lands with sandy soils and row crops", "Rice and sugarcane in irrigation management", "Heavy clay soils for water application", "Lowland paddy under field conditions"],
    correct: 0,
    explanation: "Sprinkler irrigation is ideal for undulating lands, sandy and light-textured soils where surface irrigation is difficult, and for row crops, vegetables, and orchards."
  },
  {
    id: "irr022",
    subject: "irrigation",
    question: "Conveyance efficiency is the ratio of:",
    options: ["Water used by crop / Water applied to field", "Water delivered to field / Water released at source", "Rainfall / Irrigation water", "Deep percolation / Total water applied"],
    correct: 1,
    explanation: "Conveyance efficiency = (Water delivered to the field / Water released at the canal head) × 100. It accounts for losses during conveyance through canals and channels."
  },
  {
    id: "irr023",
    subject: "irrigation",
    question: "Water use efficiency (WUE) is defined as:",
    options: ["Crop yield per unit area in irrigation management", "Evapotranspiration / Rainfall under field conditions", "Total water applied per crop for water application", "Crop yield per unit of water consumed or applied"],
    correct: 3,
    explanation: "Water Use Efficiency = Crop yield / Water consumed (ET) or water applied. It measures how efficiently water is converted to crop biomass or yield."
  },
  {
    id: "irr024",
    subject: "irrigation",
    question: "The minimum depth of water table to avoid capillary rise affecting root zone for loamy soil is:",
    options: ["1.0-1.5 m", "0.5 m", "2.0-3.0 m", "5.0 m"],
    correct: 0,
    explanation: "For loamy soils, the water table should be at least 1.0-1.5 m below the root zone to prevent capillary rise from causing waterlogging or salt accumulation in the root zone."
  },
  {
    id: "irr025",
    subject: "irrigation",
    question: "Border strip irrigation is suitable for:",
    options: ["Vegetable crops on beds", "Rice cultivation in irrigation management", "Tree crops and orchards with slopes", "Dryland farming for water application"],
    correct: 2,
    explanation: "Border strip irrigation is suitable for close-growing crops, small grains, fodder crops, and orchards on gentle, uniform slopes. Water flows in strips between parallel ridges (borders)."
  },
  {
    id: "irr026",
    subject: "irrigation",
    question: "Furrow irrigation is best suited for:",
    options: ["Wheat broadcasting for water application", "Paddy rice in irrigation management", "Row crops like maize, sugarcane, cotton, vegetables", "Orchards on flat land"],
    correct: 2,
    explanation: "Furrow irrigation is ideal for row crops such as maize, sugarcane, cotton, potatoes, and vegetables where water flows in small channels (furrows) between crop rows."
  },
  {
    id: "irr027",
    subject: "irrigation",
    question: "The unit of discharge used in Indian irrigation is:",
    options: ["Both B and C", "Cusec (cubic feet per second)", "Cumec (cubic meter per second)", "Litre/second"],
    correct: 0,
    explanation: "In Indian irrigation, discharge is measured in cusec (cubic feet per second) as a traditional unit and cumec (m³/s) as the SI unit. Both are widely used in irrigation engineering."
  },
  {
    id: "irr028",
    subject: "irrigation",
    question: "Sub-surface drip irrigation (SDI) places emitters:",
    options: ["Above the canopy in irrigation management", "Below the soil surface in the root zone", "At soil surface for water application", "In overhead pipes under field conditions"],
    correct: 1,
    explanation: "Sub-surface drip irrigation places drip emitters/laterals below the soil surface (15-45 cm depth) directly in the root zone, reducing evaporation losses and allowing farming operations without moving the system."
  },
  {
    id: "irr029",
    subject: "irrigation",
    question: "Fertigation refers to:",
    options: ["Application of fertilizers through irrigation water", "Soil fertility testing", "Fermentation in soil", "Organic matter decomposition"],
    correct: 0,
    explanation: "Fertigation is the application of fertilizers dissolved in irrigation water, usually through drip or sprinkler systems. It improves nutrient use efficiency and reduces labor costs."
  },
  {
    id: "irr030",
    subject: "irrigation",
    question: "The critical growth stage of groundnut for irrigation is:",
    options: ["Germination", "Vegetative stage", "Pegging and pod development", "Maturity"],
    correct: 2,
    explanation: "The most critical stages for groundnut irrigation are pegging (peg penetration into soil) and pod development. Water stress during these stages severely reduces pod filling and oil content."
  },
  {
    id: "irr031",
    subject: "irrigation",
    question: "Waterlogging leads to which type of soil degradation?",
    options: ["Soil erosion", "Soil salinity and alkalinity", "Soil compaction", "Acidification"],
    correct: 1,
    explanation: "Waterlogging leads to soil salinity and alkalinity due to capillary rise of saline groundwater and accumulation of soluble salts at the soil surface through evaporation."
  },
  {
    id: "irr032",
    subject: "irrigation",
    question: "Micro-irrigation includes:",
    options: ["Flood and furrow", "Basin and border", "Drip and micro-sprinkler", "Canal and well irrigation"],
    correct: 2,
    explanation: "Micro-irrigation includes drip (trickle) irrigation and micro-sprinklers which apply water at low flow rates directly to or near the plant root zone."
  },
  {
    id: "irr033",
    subject: "irrigation",
    question: "The recommended IW/CPE ratio for most field crops in India is:",
    options: ["0.3-0.5", "0.6-1.0", "1.5-2.0", "2.5-3.0"],
    correct: 1,
    explanation: "The recommended IW/CPE ratio for most field crops ranges from 0.6 to 1.0. This means irrigation is applied when cumulative pan evaporation reaches a certain level."
  },
  {
    id: "irr034",
    subject: "irrigation",
    question: "Lysimeter is an instrument used to measure:",
    options: ["Actual evapotranspiration", "Soil pH", "Soil nitrogen content", "Irrigation water quality"],
    correct: 0,
    explanation: "A lysimeter is a device used to measure actual evapotranspiration from a crop by monitoring water inputs (rainfall, irrigation) and outputs (drainage) from an isolated soil block with growing crops."
  },
  {
    id: "irr035",
    subject: "irrigation",
    question: "Check basin method of irrigation is commonly used for:",
    options: ["Orchards and vegetables on slopes", "Wheat and paddy on flat lands", "Sugarcane in furrows", "Dryland crops"],
    correct: 1,
    explanation: "Check basin method divides the field into small plots (basins) enclosed by earthen bunds and is suitable for flat lands growing wheat, paddy, and other cereal crops."
  },
  {
    id: "irr036",
    subject: "irrigation",
    question: "Sodic (alkali) soils are reclaimed by applying:",
    options: ["Lime (CaCO₃)", "Common salt (NaCl)", "Sulfur", "Gypsum (CaSO₄·2H₂O)"],
    correct: 3,
    explanation: "Sodic soils with high exchangeable sodium are reclaimed by applying gypsum (calcium sulfate). Calcium replaces sodium on exchange sites, and sodium sulfate formed is leached out with irrigation water."
  },
  {
    id: "irr037",
    subject: "irrigation",
    question: "Leaching requirement in saline soils refers to:",
    options: ["Extra water needed beyond ET to leach excess salts below root zone", "Total irrigation water needed in irrigation management in irrigation", "Fertilizer requirement for water application for water management", "Drainage capacity as per irrigation engineering and water management norms"],
    correct: 0,
    explanation: "Leaching requirement is the fraction of irrigation water that must pass through the root zone to maintain soil salinity at acceptable levels by leaching excess salts below the root zone."
  },
  {
    id: "irr038",
    subject: "irrigation",
    question: "The most critical stage for cotton irrigation is:",
    options: ["Germination", "Boll formation and development", "Vegetative stage", "Squaring"],
    correct: 1,
    explanation: "Cotton is most sensitive to water stress during boll formation and development (boll setting stage). Water stress at this stage causes boll shedding and reduces lint yield significantly."
  },
  {
    id: "irr039",
    subject: "irrigation",
    question: "Net irrigation requirement (NIR) is calculated as:",
    options: ["Gross irrigation requirement - rainfall", "Both B and C", "Total ET - rainfall", "Crop water requirement - effective rainfall"],
    correct: 3,
    explanation: "Net Irrigation Requirement = Crop water requirement (ET) - Effective rainfall. This is the amount of water that must be applied through irrigation to meet crop needs not fulfilled by rainfall."
  },
  {
    id: "irr040",
    subject: "irrigation",
    question: "Which state in India has the highest area under drip irrigation?",
    options: ["Punjab", "Andhra Pradesh", "Maharashtra", "Gujarat"],
    correct: 1,
    explanation: "Andhra Pradesh (including Telangana) has the largest area under drip irrigation in India, followed by Maharashtra and Karnataka. India has the largest drip irrigation area in the world."
  },
  {
    id: "irr041",
    subject: "irrigation",
    question: "Infiltration rate of soil is highest in:",
    options: ["Clay soil", "Sandy soil", "Loam soil", "Silty soil"],
    correct: 1,
    explanation: "Sandy soils have the highest infiltration rate due to large pore spaces between particles. Clay soils have the lowest infiltration rate due to fine particles and swelling when wet."
  },
  {
    id: "irr042",
    subject: "irrigation",
    question: "The efficiency of surface irrigation methods ranges from:",
    options: ["10-20%", "30-50%", "60-70%", "80-90%"],
    correct: 1,
    explanation: "Surface irrigation methods (flood, furrow, border) have an efficiency of 30-50%, meaning only 30-50% of applied water is used by the crop; rest is lost through deep percolation, runoff, and evaporation."
  },
  {
    id: "irr043",
    subject: "irrigation",
    question: "Crop coefficient (Kc) is used to:",
    options: ["Measure soil moisture in irrigation management", "Calculate irrigation duration for water application", "Convert reference ET (ET₀) to crop ET (ETc)", "Determine fertilizer dose under field conditions"],
    correct: 2,
    explanation: "Crop coefficient (Kc) relates reference evapotranspiration (ET₀) to actual crop evapotranspiration (ETc = Kc × ET₀). It varies with crop type and growth stage."
  },
  {
    id: "irr044",
    subject: "irrigation",
    question: "Tile drainage uses:",
    options: ["Open ditches to remove surface water", "Bunds to divert water for water application", "Pumps to lower water table in irrigation management", "Perforated pipes buried in soil to remove excess water"],
    correct: 3,
    explanation: "Tile drainage uses perforated clay, concrete, or plastic pipes (tiles) buried in the soil at regular intervals to collect and remove excess water from the root zone."
  },
  {
    id: "irr045",
    subject: "irrigation",
    question: "Soil moisture depletion (SMD) at which irrigation should be applied for most crops is:",
    options: ["10-20% of AWC", "75-80% of AWC", "25-50% of AWC", "100% of AWC"],
    correct: 2,
    explanation: "For most field crops, irrigation is applied when soil moisture depletion reaches 25-50% of available water capacity (AWC). This prevents water stress while maximizing efficiency."
  },
  {
    id: "irr046",
    subject: "irrigation",
    question: "The main advantage of sprinkler irrigation over surface irrigation is:",
    options: ["Lower initial cost in irrigation management as per irrigation engineering and water management norms", "No power requirement as per irrigation engineering and water management norms", "Requires less water pressure for water application for water management", "Suitable for all soil types including sandy soils, undulating terrain, and reduces deep percolation"],
    correct: 3,
    explanation: "Sprinkler irrigation works on all soil types including sandy soils, is suitable for undulating terrain, reduces deep percolation losses, and gives uniform water distribution."
  },
  {
    id: "irr047",
    subject: "irrigation",
    question: "Optimal water table depth for crop production in most soils is:",
    options: ["1.5-3.0 m", "0.5-1.0 m", "0-0.5 m", "More than 5 m"],
    correct: 0,
    explanation: "A water table depth of 1.5-3.0 m is generally optimal for most crops. This allows capillary contribution to the root zone without causing waterlogging or anaerobic conditions."
  },
  {
    id: "irr048",
    subject: "irrigation",
    question: "Rain gun is a type of:",
    options: ["High pressure rotating sprinkler for large areas", "Drip emitter in irrigation management", "Micro-sprinkler for water application", "Subsurface irrigator under field conditions"],
    correct: 0,
    explanation: "A rain gun is a high-pressure, large-diameter rotating sprinkler that can cover a large area (up to 80m radius). It is used for sugarcane, paddy, and other field crops."
  },
  {
    id: "irr049",
    subject: "irrigation",
    question: "Critical irrigation for sugarcane is required during:",
    options: ["Grand growth period (tillering to elongation)", "Germination period in irrigation management", "Maturity for water application", "Harvesting under field conditions"],
    correct: 0,
    explanation: "The grand growth period (tillering to cane elongation) is the critical stage for sugarcane irrigation. This period requires maximum water for cell elongation and sucrose accumulation."
  },
  {
    id: "irr050",
    subject: "irrigation",
    question: "Hargreaves method and Thornthwaite method are used to estimate:",
    options: ["Soil permeability", "Rainfall erosivity", "Potential evapotranspiration", "Crop yield"],
    correct: 2,
    explanation: "Hargreaves and Thornthwaite methods are empirical methods used to estimate potential evapotranspiration (PET) based on temperature and other climatic parameters when limited data is available."
  },
];
