"use client";
import { useState } from "react";
import { BookOpen, Lock, Download, CheckCircle, ChevronDown, ChevronUp, Star } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import toast from "react-hot-toast";

// ─── DA-121 Answer Key (1-indexed) ────────────────────────────────────────────
const ANSWER_KEY: Record<number, string> = {
  1:"B",2:"B",3:"C",4:"D",5:"C",6:"B",7:"B",8:"B",9:"A",10:"A",
  11:"B",12:"A",13:"C",14:"B",15:"D",16:"C",17:"C",18:"B",19:"D",20:"B",
  21:"A",22:"B",23:"B",24:"C",25:"C",26:"B",27:"C",28:"C",29:"B",30:"B",
  31:"C",32:"B",33:"D",34:"A",35:"D",36:"C",37:"C",38:"B",39:"B",40:"C",
  41:"D",42:"C",43:"C",44:"B",45:"B",46:"C",47:"C",48:"B",49:"A",50:"B",
  51:"B",52:"C",53:"B",54:"D",55:"C",56:"B",57:"B",58:"C",59:"A",60:"D",
  61:"C",62:"B",63:"C",64:"B",65:"D",66:"D",67:"C",68:"C",69:"C",70:"A",
  71:"B",72:"B",73:"C",74:"A",75:"D",76:"C",77:"B",78:"B",79:"D",80:"B",
  81:"C",82:"C",83:"B",84:"C",85:"C",86:"D",87:"C",88:"C",89:"D",90:"C",
  91:"C",92:"C",93:"B",94:"C",95:"B",96:"C",97:"D",98:"C",99:"C",100:"B",
  101:"C",102:"C",103:"C",104:"B",105:"A",106:"D",107:"C",108:"C",109:"A",110:"B",
  111:"D",112:"B",113:"B",114:"D",115:"D",116:"A",117:"A",118:"C",119:"C",120:"B",
  121:"D",122:"B",123:"C",124:"C",125:"B",126:"B",127:"B",128:"C",129:"A",130:"A",
  131:"C",132:"C",133:"B",134:"C",135:"A",136:"C",137:"C",138:"C",139:"C",140:"D",
  141:"C",142:"A",143:"A",144:"C",145:"C",146:"C",147:"B",148:"A",149:"C",150:"A",
};

type Question = { id: number; q: string; opts: string[] };

const QUESTIONS: Question[] = [
  // ── Topic 1: Introduction to Soil Science & Soil Composition ──────────────
  {id:1,  q:"Three dimensional body having length, breadth and depth is:", opts:["Colloid","Soil","Bulk density","Pore space"]},
  {id:2,  q:"The latin word 'solum' means:", opts:["Air","Floor or ground","Water","Mineral"]},
  {id:3,  q:"The person who is known as Father of Soil Science is:", opts:["Emil Traug","Thomas Way","Dokuchaev","Jenny"]},
  {id:4,  q:"The percentage of mineral matter in a representative loam soil is:", opts:["25%","5%","80%","45%"]},
  {id:5,  q:"The percentage of organic matter in a representative loam soil is:", opts:["45%","25%","5%","80%"]},
  {id:6,  q:"The percentage of water in a representative loam soil is:", opts:["45%","25%","5%","80%"]},
  {id:7,  q:"The percentage of air present in a representative loam soil is:", opts:["45%","25%","80%","5%"]},
  {id:8,  q:"Soil particle which can be visible only through an electron microscope is:", opts:["Sand","Clay","Silt","Coarse sand"]},
  {id:9,  q:"Size of the soil clay particle is:", opts:["<0.002 mm","2 mm","<0.002 cm","<0.02 cm"]},
  {id:10, q:"Size of silt particle ranges from:", opts:["0.002–0.02 mm","0.02–2.0 mm","<0.002 mm",">2.0 mm"]},
  {id:11, q:"Size of fine sand particles ranges from:", opts:["0.002–0.02 mm","0.1–0.25 mm","0.25–0.5 mm","0.5–1.0 mm"]},
  {id:12, q:"Range of size of gravel or pebble is:", opts:["2.0–75.0 mm",">250.0 mm","75.0–250.0 mm",">800 mm"]},
  {id:13, q:"Rock fragments of size >250 mm are called:", opts:["Gravel","Cobbles","Stones or Boulders","Pebbles"]},
  {id:14, q:"Inert sand and silt fractions are referred as:", opts:["Flesh of the soil","Skeleton of the soil","Head of the soil","Leg of the soil"]},
  {id:15, q:"Nitrogen percentage present in atmospheric air is:", opts:["0.033","0.50","20.97","79.00"]},
  {id:16, q:"Oxygen percentage present in atmospheric air is:", opts:["79.00","0.033","20.97","0.50"]},
  {id:17, q:"Carbon dioxide content in soil air is:", opts:["0.033%","20.97%","0.50%","79.00%"]},
  {id:18, q:"Which method gives accurate results for estimation of soil texture?", opts:["Bouyoucos hydrometer method","Robinson pipette method","Particle density method","Feel method"]},
  {id:19, q:"By using which method can soil texture be estimated in field conditions?", opts:["Bouyoucos hydrometer method","Robinson pipette method","Particle density method","Feel method"]},
  {id:20, q:"Robinson's pipette method works on the principle of:", opts:["Continuous decrease in density of soil suspension","Sedimentation","Formation of gritters","Deflocculation"]},
  {id:21, q:"Bouyoucos Hydrometer is used for estimation of the:", opts:["Soil texture","Soil structure","Soil colour","Soil temperature"]},
  {id:22, q:"Feel method of soil texture estimation is also called as:", opts:["Lab method","Field method","Pipette method","Hydrometer method"]},
  {id:23, q:"The most reactive soil particle is:", opts:["Sand","Clay","Silt","Coarse sand"]},
  {id:24, q:"Permanent property of soil is:", opts:["Soil structure","Soil plasticity","Soil texture","Soil colour"]},
  {id:25, q:"Which of the following soil type has the lowest total porosity?", opts:["Clay soil","Deep clay soil","Sandy soil","Loamy soil"]},
  // ── Topic 2: Soil Physical Properties — Structure, Bulk Density & Porosity ──
  {id:26, q:"Arrangement of sand, silt and clay under field conditions is called:", opts:["Soil texture","Soil structure","Soil colour","Soil temperature"]},
  {id:27, q:"Natural aggregates present in soil are called:", opts:["Fragments","Clods","Peds","Concretions"]},
  {id:28, q:"The broken peds are known as:", opts:["Concretions","Clods","Fragments","Aggregates"]},
  {id:29, q:"In soil structural classification, the term 'Type' refers to the:", opts:["Size of the peds","Shape and arrangement of aggregates","Distinctness and durability","Soil texture"]},
  {id:30, q:"In soil structural classification, 'Class' refers to:", opts:["Shape of aggregates","Size of peds","Durability of peds","Soil texture"]},
  {id:31, q:"In soil structural classification, 'Grade' refers to:", opts:["Shape of aggregates","Size of peds","Distinctness and durability of peds","Soil texture"]},
  {id:32, q:"Predominant soil structure found in arid and semi-arid regions of Rajasthan is:", opts:["Block like","Prism like","Plate like","Spheroidal"]},
  {id:33, q:"Which of the following soil structure is most porous in nature?", opts:["Plate like","Prism like","Block like","Spheroidal"]},
  {id:34, q:"A coherent mass formed within the soil by precipitation of chemicals in percolating water is called:", opts:["Concretion","Fragment","Ped","Clod"]},
  {id:35, q:"Bulk density of sand dominated soils is:", opts:["0.5 Mgm⁻³","2.0 Mgm⁻³","1.0 Mgm⁻³","1.7 Mgm⁻³"]},
  {id:36, q:"Bulk density of organic peat soils is:", opts:["2.0 Mgm⁻³","1.7 Mgm⁻³","0.5 Mgm⁻³","1.0 Mgm⁻³"]},
  {id:37, q:"Bulk density of compacted sub soils is:", opts:["1.7 Mgm⁻³","0.5 Mgm⁻³","2.0 Mgm⁻³","1.0 Mgm⁻³"]},
  {id:38, q:"By long term intense tillage practice, bulk density of soil will:", opts:["Decrease","Increase","Remain same","Decrease 2 times"]},
  {id:39, q:"Addition of organic matter to the soil leads to:", opts:["Increase in bulk density","Decrease in bulk density","No change in bulk density","Decrease in porosity"]},
  {id:40, q:"Particle density of soils is always ________ than the bulk density:", opts:["Lower","Equal","Higher","Variable"]},
  {id:41, q:"Porosity percentage seen in deep clay soils is:", opts:["50","45","30","66"]},
  {id:42, q:"Porosity percentage of sandy soil is:", opts:["66","45","30","50"]},
  {id:43, q:"Porosity percentage of deep black soil is:", opts:["30","66","45","40"]},
  {id:44, q:"Pores existing between sand-sized granules that allow air and water movement are:", opts:["Micropores","Macropores","Capillary pores","Sandy pores"]},
  {id:45, q:"At field capacity only ________ pores are filled with water:", opts:["Macropores","Micropores","Capillary","Both macro and micro"]},
  {id:46, q:"Macropores are defined as pores with diameter greater than:", opts:["0.002 mm","0.02 mm","0.06 mm","0.2 mm"]},
  {id:47, q:"Which of these soils has the lowest bulk density?", opts:["Sandy soils","Loamy soil","Clayey soils","Sandy loams"]},
  {id:48, q:"Soils containing more than 15% of colloidal clay exhibit:", opts:["Elasticity","Plasticity","Adhesion","Deflocculation"]},
  {id:49, q:"Shrinkage and swelling are more pronounced in:", opts:["Montmorillonite clays","Kaolinite clays","Illite clays","Laterite clays"]},
  {id:50, q:"Total porosity is more in:", opts:["Sandy soil","Clayey soil","Loamy soil","Sandy loam"]},
  // ── Topic 3: Soil Water — Types, Constants & Movement ─────────────────────
  {id:51, q:"Soil moisture potential at field capacity is:", opts:["-31 bars","-1/3 bars","-1000 bars","-10000 bars"]},
  {id:52, q:"Soil water held at a moisture potential of -31 bars is known as:", opts:["Available water","Permanent wilting point","Hygroscopic coefficient","Dried soil"]},
  {id:53, q:"Permanent wilting point is expressed as:", opts:["-1/3 bars","-15 bars","-31 bars","-1000 bars"]},
  {id:54, q:"The equilibrium tension of moisture in oven-dried soil is:", opts:["-1/3 bars","-1000 bars","-31 bars","-10000 bars"]},
  {id:55, q:"Water retained between field capacity and permanent wilting point is called:", opts:["Hygroscopic water","Gravitational water","Available water","Capillary water"]},
  {id:56, q:"The downward movement of water through soil is called:", opts:["Percolation","Infiltration","Permeability","Runoff"]},
  {id:57, q:"Downward movement of water below the root zone depth is known as:", opts:["Permeability","Percolation","Seepage","Runoff"]},
  {id:58, q:"The ease with which water passes through a bulk mass of soil is called:", opts:["Infiltration","Percolation","Permeability","Seepage"]},
  {id:59, q:"Loss of water from soil to atmosphere in the form of water vapour is:", opts:["Evaporation","Water holding capacity","Transpiration","Mineralization"]},
  {id:60, q:"In deep black soil, porosity percentage is:", opts:["40","66","50","45"]},
  {id:61, q:"Which soil type has the highest water holding capacity?", opts:["Sandy soil","Sandy loam","Clay soil","Loamy soil"]},
  {id:62, q:"Doruvu technology is practiced in ________ type of soils:", opts:["Red soils","Coastal sands","Black soils","Laterite soils"]},
  {id:63, q:"Saturation condition of soil corresponds to soil moisture potential of:", opts:["-1/3 bars","-15 bars","0 bars","-1000 bars"]},
  {id:64, q:"Wilting coefficient is expressed as:", opts:["-1/3 bars","-15 bars","-31 bars","-1000 bars"]},
  {id:65, q:"Air dry soil corresponds to moisture potential of:", opts:["-1/3 bars","-15 bars","-31 bars","-1000 bars"]},
  {id:66, q:"Which type of soil water is not available to plants?", opts:["Capillary water","Available water","Gravitational water","Hygroscopic water"]},
  {id:67, q:"Broad Bed and Furrow (BBF) method is used in management of ________ soils:", opts:["Red soils","Alluvial soils","Black soils","Laterite soils"]},
  {id:68, q:"Reduced iron imparts ________ colour to the soil:", opts:["Red","White","Blue green","Grey"]},
  {id:69, q:"Soil colour in humid temperate regions is:", opts:["Red","Yellow","Grey","Black"]},
  {id:70, q:"Red colour of soils is due to:", opts:["Iron oxides","Quartz","Reduced iron","Humus"]},
  {id:71, q:"The presence of humus imparts ________ colour to the soil:", opts:["Red","Dark brown","Yellow","White"]},
  {id:72, q:"Two or three colours occurring in patches in soil is known as:", opts:["Grade","Mottling","Type","Soil colour"]},
  {id:73, q:"Capillary pores in soil are pores with diameter:", opts:[">0.06 mm","0.06–0.2 mm","<0.06 mm","0.2–2.0 mm"]},
  {id:74, q:"Which instrument is used to measure soil moisture tension?", opts:["Tensiometer","Barometer","Hygrometer","Anemometer"]},
  {id:75, q:"The Laterite type of soil is present in Zaheerabad of Telangana:", opts:["Red soil","Black soil","Alluvial soil","Laterite soil"]},
  // ── Topic 4: Soil Colloids, CEC & Ion Exchange ─────────────────────────────
  {id:76, q:"Size of colloidal particle is:", opts:["<0.001 cm","<0.002 cm","<0.001 mm","<0.002 mm"]},
  {id:77, q:"The continuous rapid zigzag movement of a colloidal particle in dispersion medium is called:", opts:["Ion exchange","Brownian movement","Flocculation","Deflocculation"]},
  {id:78, q:"Aggregation or clumping together of individual tiny soil particles is called:", opts:["Deflocculation","Flocculation","Mineralization","Immobilization"]},
  {id:79, q:"Which of the following is NOT a property of soil colloids?", opts:["Plasticity","Swelling and shrinkage","Brownian movement","Size of >0.001 mm"]},
  {id:80, q:"The concept of Cation Exchange Capacity of soils was given by:", opts:["Dokuchaev","Thomas Way","Arnon","Mendel"]},
  {id:81, q:"The percentage of total CEC satisfied with basic cations is termed as:", opts:["Ion exchange","Buffering capacity","Base saturation","CEC"]},
  {id:82, q:"Base saturation of highly fertile soils is:", opts:["<50%","50–80%",">80%","30–50%"]},
  {id:83, q:"Base saturation of medium fertile soils is:", opts:["30–50%","50–80%","80–100%","<50%"]},
  {id:84, q:"Correct order of cations to flocculate soil colloids is:", opts:["Na⁺>Ca²⁺>Al³⁺>Mg²⁺>K⁺>H⁺","K⁺>Ca²⁺>Al³⁺>Mg²⁺>Na⁺>H⁺","Al³⁺>Ca²⁺>H⁺>Mg²⁺>K⁺>Na⁺","Al³⁺>Ca²⁺>Na⁺>Mg²⁺>K⁺>H⁺"]},
  {id:85, q:"Presence of which cation causes deflocculation of soil particles?", opts:["Ca","Al","Na","Zn"]},
  {id:86, q:"Which element promotes flocculation of soil particles?", opts:["Magnesium","Potassium","Sodium","Calcium"]},
  {id:87, q:"In strong acid soils, which may act as dominant exchangeable ion?", opts:["Na⁺","Cl⁻","Al(OH)²⁺","Ca²⁺"]},
  {id:88, q:"CEC (me/100g of soil) of Kaolinite clay minerals is:", opts:["100–150","10–33","3–15",">43"]},
  {id:89, q:"AEC (me/100g of soil) of Kaolinite clay minerals is:", opts:[">5",">10",">20",">43"]},
  {id:90, q:"Anionic Exchange Capacity (AEC) is greater in:", opts:["Montmorillonite","Illite","Kaolinite","All the above"]},
  {id:91, q:"Plasticity order of clay minerals is:", opts:["Illite>Montmorillonite>Kaolinite","Kaolinite>Montmorillonite>Illite","Montmorillonite>Illite>Kaolinite","Illite>Kaolinite>Montmorillonite"]},
  {id:92, q:"Which of the following statement is NOT correct regarding soil colloids?", opts:["All soil colloids are clay soils","Some clay soils may be soil colloids","All clay soils are soil colloids","Colloidal soils have less size than clay soils"]},
  {id:93, q:"Desorption is a phenomenon by which:", opts:["Adsorption of ions occurs","Replacement or release of adsorbed ion species occurs","Flocculation occurs","Brownian movement stops"]},
  {id:94, q:"Ion exchange property may NOT be seen in:", opts:["Clay soils","Silty soils","Sandy soils","Soils with high organic matter"]},
  {id:95, q:"The ability of soil to resist pH changes is called:", opts:["Base saturation","Buffering capacity","Liming","Ion exchange"]},
  {id:96, q:"Kaolinite crystals are:", opts:["Rod shaped","Flake shaped","Hexagonal","Tubular"]},
  {id:97, q:"Montmorillonite crystals are:", opts:["Hexagonal","Rod shaped","Tubular","Flake shaped"]},
  {id:98, q:"Which clay mineral shows maximum shrink-swell property?", opts:["Kaolinite","Illite","Montmorillonite","Halloysite"]},
  {id:99, q:"The capacity of soil to resist pH change (buffering capacity) is highest in soils rich in:", opts:["Sand","Silt","Clay and organic matter","Gravel"]},
  {id:100,q:"Soil pH is defined as:", opts:["Positive logarithm of H⁺ concentration","Negative logarithm of H⁺ concentration","Ratio of H⁺ to OH⁻","Amount of lime in soil"]},
  // ── Topic 5: Soil Organic Matter & C:N Ratio ───────────────────────────────
  {id:101,q:"The C:N ratio of humus is:", opts:["60–80:1","150–500:1","10–12:1","13–25:1"]},
  {id:102,q:"C:N ratio of forest waste is:", opts:["13–25:1","10–12:1","150–500:1","60–80:1"]},
  {id:103,q:"C:N ratio for cereal residues and straws is:", opts:["10–12:1","13–25:1","60–80:1","150–500:1"]},
  {id:104,q:"C:N ratio for legume residues and green manures is:", opts:["10–12:1","13–25:1","60–80:1","150–500:1"]},
  {id:105,q:"C:N ratio of sewage and sludge is:", opts:["5–14:1","10–12:1","60–80:1","150–500:1"]},
  {id:106,q:"C:N ratio is very low in:", opts:["Cereal straw","Forest wastes","Legume residues","Sewage and sludge"]},
  {id:107,q:"Mineralization takes place at C:N ratio of:", opts:[">30:1",">20:1","<20:1","<10:1"]},
  {id:108,q:"Immobilization takes place at C:N ratio of:", opts:["<20:1",">20:1",">30:1","<30:1"]},
  {id:109,q:"The conversion of organic forms of C, N, P and S to inorganic forms as a result of microbial decomposition is called:", opts:["Mineralization","Immobilization","Hydrolysis","Decomposition"]},
  {id:110,q:"The conversion of element from inorganic to organic form in microbial tissues is called:", opts:["Mineralization","Immobilization","Denitrification","Nitrification"]},
  {id:111,q:"Which of the following is a rapidly decomposed organic residue?", opts:["Lignins","Fats","Waxes","Sugars"]},
  {id:112,q:"Weight of organisms per unit weight of soil is known as:", opts:["Soil fauna","Biomass","Soil flora","Microbes"]},
  {id:113,q:"Microbial reduction of nitrate to molecular nitrogen is called:", opts:["Nitrification","Denitrification","Mineralization","Immobilization"]},
  {id:114,q:"Addition of humus to soils causes:", opts:["Increase in bulk density","Increase in porosity","Decrease in bulk density","Both increase in porosity and decrease in bulk density"]},
  {id:115,q:"Example for soil fauna is:", opts:["Bacteria","Blue Green Algae","Actinomycetes","Snails"]},
  {id:116,q:"Example for soil flora is:", opts:["Algae","Nematodes","Protozoa","Earthworms"]},
  {id:117,q:"The process of enrichment of surface water bodies with nutrients is called:", opts:["Eutrophication","Denitrification","Leaching","Salinization"]},
  {id:118,q:"Largest contributing source of greenhouse gas is:", opts:["Paddy fields","Deforestation","Burning of fossil fuels","Livestock"]},
  {id:119,q:"Gas released from rice fields that causes greenhouse effect is:", opts:["CO₂","N₂O","Methane","SO₂"]},
  {id:120,q:"Gases responsible for acid rain are:", opts:["CO₂ and CH₄","NO₂ and SO₂","NH₃ and CO₂","CFC and O₃"]},
  {id:121,q:"The natural radioactive material among the following is:", opts:["Strontium-90","Cesium-137","Nitrogen-28","Potassium-40"]},
  {id:122,q:"Consumption of water with high nitrate levels causes ________ in infants:", opts:["Fluorosis","Blue baby syndrome","Hypothyroidism","Arrhythmias"]},
  {id:123,q:"High concentration of ________ in groundwater causes Blue Baby syndrome:", opts:["Fluoride","Phosphorous","Nitrate","Cadmium"]},
  {id:124,q:"WHO standard for drinking water nitrate-N level is:", opts:["23 mg/L","32 mg/L","10 mg/L","22 mg/L"]},
  {id:125,q:"C:N ratio of microbial tissues is:", opts:["5–14:1","6–12:1","10–12:1","13–25:1"]},
  // ── Topic 6: Soil pH, Problem Soils & Classification ──────────────────────
  {id:126,q:"Presence of excess soluble salts of Ca, Mg and Na is characteristic of:", opts:["Alkali soils","Saline soils","Acid soils","Laterite soils"]},
  {id:127,q:"Soil amendment used for reclamation of alkaline soils is:", opts:["Lime","Gypsum","Dolomite","Basic slag"]},
  {id:128,q:"Removal of calcium carbonate present in soil can be achieved by treating with:", opts:["Gypsum","NaOH","Diluted HCl","H₂SO₄"]},
  {id:129,q:"When soils have >15% ESP and pH >8.5, these soils are called:", opts:["Alkali soils","Saline soils","Acid soils","Solon chalks"]},
  {id:130,q:"The electrical conductivity of saline-alkali soils is:", opts:[">4 dSm⁻¹","<4 dSm⁻¹","=4 dSm⁻¹","0 dSm⁻¹"]},
  {id:131,q:"Critical value for EC (dSm⁻¹) is:", opts:["0–2","2","4","6"]},
  {id:132,q:"Availability of phosphorus is high when soil pH is between:", opts:["4.0–5.5","5.5–6.0","6.0–7.5","7.5–9.0"]},
  {id:133,q:"The availability of molybdenum increases under ________ condition:", opts:["Acidic","Alkaline","Neutral","Waterlogged"]},
  {id:134,q:"Liming is applied to neutralize the effect of:", opts:["Alkaline soils","Saline soils","Acid soils","Laterite soils"]},
  {id:135,q:"Which of the following is NOT a liming material?", opts:["Calcium sulphate","Calcium carbonate","Calcium hydroxide","Calcium oxide"]},
  {id:136,q:"Which is the source for both calcium and magnesium?", opts:["Magnesium sulphate","Basic slag","Dolomite","Lime"]},
  {id:137,q:"Quantity of lime required for strongly acidic soils is:", opts:["1–1.5 tonnes/acre","2–4 tonnes/acre","3–6 tonnes/acre","4–6 tonnes/acre"]},
  {id:138,q:"Phosphatic fertilizer suitable for highly acidic soils is:", opts:["SSP","DAP","Rock phosphate","TSP"]},
  {id:139,q:"Hypomagnesemia in cattle is due to consumption of forage:", opts:["Low in calcium","High in calcium","Low in magnesium","High in magnesium"]},
  {id:140,q:"Which of the following is NOT a problematic soil?", opts:["Acid soils","Waterlogged soils","Basic soils","Neutral soils"]},
  {id:141,q:"Main reason for identifying saline soils as problematic is:", opts:["High nitrogen","Hardness of soil","High salt content","High zinc content"]},
  {id:142,q:"The inherent capacity of soil to provide nutrients in adequate amounts is called:", opts:["Soil fertility","Soil plasticity","Soil nutrition","Soil density"]},
  {id:143,q:"Doruvu technology can be followed in ________ soils:", opts:["Coastal sands","Laterite soils","Red soils","Black soils"]},
  {id:144,q:"Deep black cotton soils with depth >120 cm occur in:", opts:["Karimnagar and Adilabad","Nizamabad and Nalgonda","Mahbubnagar and Khammam","Warangal and Khammam"]},
  {id:145,q:"Which of the following Telangana soil type is suitable for BBF technology?", opts:["Red soils","Laterite soils","Black cotton soils","Alluvial soils"]},
  {id:146,q:"Sustainable agriculture is the practice of farming using principles of:", opts:["Intensive cultivation","Shifting cultivation","Ecology","Economics"]},
  {id:147,q:"Practice of farming a small area with limited resources to produce just enough food for family needs is:", opts:["Sustainable agriculture","Subsistence farming","Intensive farming","Extensive farming"]},
  {id:148,q:"Shifting cultivation is also called:", opts:["Jhum cultivation","Intensive farming","Terrace farming","Organic farming"]},
  {id:149,q:"Nitrification bacteria are active when the soil pH is between:", opts:["5.0–5.5","<6.0","6.5–7.5","<8.5"]},
  {id:150,q:"Which of these is an example of soil formation factor?", opts:["Parent material","Organic matter","Microorganisms","Fertilizers"]},
];

const TOPICS = [
  { label: "Topic 1: Introduction to Soil Science & Soil Composition", from: 1,   to: 25  },
  { label: "Topic 2: Soil Physical Properties — Structure, Bulk Density & Porosity", from: 26, to: 50 },
  { label: "Topic 3: Soil Water — Types, Constants & Movement", from: 51,  to: 75  },
  { label: "Topic 4: Soil Colloids, CEC & Ion Exchange",        from: 76,  to: 100 },
  { label: "Topic 5: Soil Organic Matter & C:N Ratio",          from: 101, to: 125 },
  { label: "Topic 6: Soil pH, Problem Soils & Classification",  from: 126, to: 150 },
];

declare global {
  interface Window {
    Razorpay: new (opts: Record<string, unknown>) => { open: () => void };
  }
}
const loadRazorpay = () =>
  new Promise<boolean>((resolve) => {
    if (typeof window !== "undefined" && window.Razorpay) { resolve(true); return; }
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.onload = () => resolve(true); s.onerror = () => resolve(false);
    document.body.appendChild(s);
  });

export default function BookPage() {
  const { user, userData, refreshUserData } = useAuth();
  const isBookPaid = userData?.isBookPaid === true;

  const [selected, setSelected]       = useState<Record<number, number>>({});
  const [showAnswers, setShowAnswers]  = useState(false);
  const [openTopics, setOpenTopics]   = useState<Record<number, boolean>>({ 0: true });
  const [paying, setPaying]           = useState(false);
  const [downloading, setDownloading] = useState(false);

  const toggleTopic = (i: number) => setOpenTopics(t => ({ ...t, [i]: !t[i] }));

  const score    = QUESTIONS.filter(q => ["A","B","C","D"][selected[q.id] ?? -1] === ANSWER_KEY[q.id]).length;
  const attempted = Object.keys(selected).length;

  const handleBookPayment = async () => {
    if (!user) { toast.error("Please login to purchase the book."); return; }
    setPaying(true);
    const ok = await loadRazorpay();
    if (!ok) { toast.error("Payment SDK failed to load."); setPaying(false); return; }

    let orderId: string, amount: number, currency: string;
    try {
      const res = await fetch("/api/create-book-order", { method: "POST" });
      if (!res.ok) throw new Error();
      const data = await res.json();
      orderId = data.orderId; amount = data.amount; currency = data.currency;
    } catch {
      toast.error("Could not initiate payment. Please try again.");
      setPaying(false); return;
    }

    const rzp = new window.Razorpay({
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      order_id: orderId, amount, currency,
      name: "AGRICET MOCKS",
      description: "AGRICET Objective Book – All 17 Subjects + PYQ Papers",
      prefill: { name: userData?.name ?? "", email: user.email ?? "" },
      theme: { color: "#16a34a" },
      retry: { enabled: true, max_count: 4 },
      notes: { user_id: user.uid, type: "book" },
      handler: async (response: { razorpay_payment_id: string; razorpay_order_id: string; razorpay_signature: string }) => {
        try {
          const vr = await fetch("/api/verify-book-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              userId: user.uid,
            }),
          });
          const vd = await vr.json();
          if (!vd.success) {
            toast.error(`Verification failed. Call +91 90593 36236 (ID: ${response.razorpay_payment_id})`);
            setPaying(false); return;
          }
          await refreshUserData();
          toast.success("🎉 Book unlocked! Download the full PDF below.");
        } catch {
          toast.error("Payment ok but access failed. Call +91 90593 36236");
        }
        setPaying(false);
      },
      modal: { ondismiss: () => setPaying(false), confirm_close: true, escape: false, animation: true },
    });
    rzp.open();
  };

  const handleDownload = async () => {
    if (!user) return;
    setDownloading(true);
    try {
      const res = await fetch(`/api/download-book?userId=${user.uid}`);
      if (!res.ok) throw new Error();
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = "AGRICET_Objective_Book.pdf"; a.click();
      URL.revokeObjectURL(url);
      toast.success("Download started!");
    } catch {
      toast.error("Download failed. Call +91 90593 36236");
    }
    setDownloading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-green-800 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-10 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-400 text-amber-900 font-bold text-xs px-3 py-1 rounded-full mb-4">
            <Star className="w-3 h-3" /> DA 121 — Soil Chemistry &amp; Fertility
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-2">Free Practice — 150 Questions</h1>
          <p className="text-green-100 text-sm">
            Attempt all 150 MCQs from DA 121 · Check answers instantly · Zero cost
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">

        {/* ── Quiz Section ── */}
        <section>
          <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <div>
              <h2 className="text-xl font-bold text-gray-900">DA 121: Soil Chemistry &amp; Fertility</h2>
              <p className="text-sm text-gray-500 mt-0.5">150 questions · 6 topics · Answer key included</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {attempted > 0 && (
                <span className="text-sm bg-green-50 text-green-700 border border-green-200 px-3 py-1.5 rounded-lg font-medium">
                  {attempted}/150 attempted · {score} correct
                </span>
              )}
              <button onClick={() => setShowAnswers(!showAnswers)}
                className="text-sm bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1.5 rounded-lg font-medium hover:bg-amber-100 transition-colors">
                {showAnswers ? "Hide Answers" : "Show Answer Key"}
              </button>
              <button onClick={() => { setSelected({}); setShowAnswers(false); }}
                className="text-sm bg-gray-100 text-gray-600 border border-gray-200 px-3 py-1.5 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                Reset
              </button>
            </div>
          </div>

          {attempted > 0 && (
            <div className="mb-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full transition-all" style={{ width: `${(attempted / 150) * 100}%` }} />
              </div>
              <p className="text-xs text-gray-400 mt-1">{150 - attempted} questions remaining</p>
            </div>
          )}

          {TOPICS.map((topic, ti) => {
            const topicQs = QUESTIONS.filter(q => q.id >= topic.from && q.id <= topic.to);
            const isOpen  = openTopics[ti] ?? false;
            return (
              <div key={ti} className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-4 overflow-hidden">
                <button onClick={() => toggleTopic(ti)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-gray-800 text-sm">{topic.label}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-gray-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 space-y-5 border-t border-gray-50">
                    {topicQs.map(q => {
                      const correctIdx = ["A","B","C","D"].indexOf(ANSWER_KEY[q.id]);
                      return (
                        <div key={q.id} className="pt-4">
                          <p className="text-sm font-medium text-gray-800 mb-3">
                            <span className="text-green-600 font-bold mr-1">{q.id}.</span>{q.q}
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {q.opts.map((opt, oi) => {
                              const isSel   = selected[q.id] === oi;
                              const isRight = showAnswers && oi === correctIdx;
                              const isWrong = showAnswers && isSel && oi !== correctIdx;
                              return (
                                <button key={oi} onClick={() => setSelected(s => ({ ...s, [q.id]: oi }))}
                                  className={`text-left text-sm px-3 py-2.5 rounded-xl border transition-all ${
                                    isRight ? "bg-green-50 border-green-400 text-green-800 font-medium"
                                    : isWrong ? "bg-red-50 border-red-300 text-red-700"
                                    : isSel  ? "bg-primary-50 border-primary-400 text-primary-800 font-medium"
                                    : "bg-gray-50 border-gray-200 text-gray-700 hover:border-primary-300 hover:bg-primary-50"
                                  }`}>
                                  <span className="font-bold mr-1.5">{["A","B","C","D"][oi]}.</span>{opt}
                                </button>
                              );
                            })}
                          </div>
                          {showAnswers && (
                            <p className="text-xs text-green-700 mt-2 font-medium flex items-center gap-1">
                              <CheckCircle className="w-3 h-3" /> Answer: {ANSWER_KEY[q.id]}) {q.opts[correctIdx]}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </section>

        {/* ── Book Paywall ── */}
        <section className="bg-gradient-to-br from-green-700 to-green-800 rounded-3xl overflow-hidden shadow-xl">
          <div className="p-8 text-center text-white">
            {isBookPaid ? (
              <>
                <div className="inline-flex items-center gap-2 bg-green-500 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                  <CheckCircle className="w-4 h-4" /> Full Access Unlocked
                </div>
                <h3 className="text-2xl font-black mb-2">You own the complete book!</h3>
                <p className="text-green-200 mb-6 text-sm">Download the full 125-page PDF — all 17 subjects + PYQ papers</p>
                <button onClick={handleDownload} disabled={downloading}
                  className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-amber-900 font-bold px-8 py-3.5 rounded-2xl transition-all hover:scale-105 disabled:opacity-60">
                  <Download className="w-5 h-5" />
                  {downloading ? "Downloading..." : "Download Full PDF"}
                </button>
              </>
            ) : (
              <>
                <div className="inline-flex items-center gap-2 bg-amber-400 text-amber-900 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                  <Lock className="w-4 h-4" /> Full Book – ₹100 One-time
                </div>
                <h3 className="text-2xl font-black mb-2">Get the Complete AGRICET Objective Book</h3>
                <p className="text-green-200 mb-6 text-sm max-w-lg mx-auto">
                  All 17 diploma subjects (DA 101–DA 291) + Previous Year Papers 2023, 2024 &amp; 2025 — download the full 125-page PDF forever.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 text-left">
                  {[
                    { icon: "📚", title: "All 17 Subjects", desc: "3,400+ MCQs from DA 101 to DA 291" },
                    { icon: "📅", title: "PYQ Papers",      desc: "Complete 2023, 2024 & 2025 papers" },
                    { icon: "⬇️", title: "PDF Download",    desc: "Download once, study offline forever" },
                  ].map(f => (
                    <div key={f.title} className="bg-white/10 rounded-xl p-4">
                      <div className="text-2xl mb-1">{f.icon}</div>
                      <div className="font-bold text-sm">{f.title}</div>
                      <div className="text-green-200 text-xs mt-0.5">{f.desc}</div>
                    </div>
                  ))}
                </div>
                {user ? (
                  <div className="space-y-3">
                    <button onClick={handleBookPayment} disabled={paying}
                      className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-amber-900 font-bold px-10 py-3.5 rounded-2xl text-lg transition-all hover:scale-105 disabled:opacity-60 shadow-lg">
                      <BookOpen className="w-5 h-5" />
                      {paying ? "Processing..." : "Unlock Full Book – ₹100"}
                    </button>
                    <p className="text-green-300 text-xs">
                      Payment issues? Call{" "}
                      <a href="tel:+919059336236" className="text-amber-300 underline font-medium">+91 90593 36236</a>
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <p className="text-green-200 text-sm mb-3">Login to unlock the full book</p>
                    <a href="/login" className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-amber-900 font-bold px-8 py-3 rounded-2xl transition-all hover:scale-105">
                      Login to Purchase – ₹100
                    </a>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

      </div>
    </div>
  );
}
