import { Question } from "@/types";

export const meteorologyQuestions: Question[] = [
  {
    id: "met001",
    subject: "meteorology",
    question: "Meteorology is the science that deals with:",
    options: ["Soil study", "Study of atmosphere and its phenomena including weather and climate", "Water bodies", "Crop production"],
    correct: 1,
    explanation: "Meteorology is the scientific study of the atmosphere, atmospheric phenomena, and weather patterns. Agricultural meteorology applies these principles to crop production."
  },
  {
    id: "met002",
    subject: "meteorology",
    question: "The standard instrument shelter used to house thermometers is called:",
    options: ["Barometer screen", "Stevenson screen", "Hygrometer box", "Rain gauge shelter"],
    correct: 1,
    explanation: "The Stevenson screen is a standardized white louvred wooden box that houses thermometers and other instruments. It protects instruments from direct sunlight while allowing air circulation."
  },
  {
    id: "met003",
    subject: "meteorology",
    question: "Relative Humidity (RH) is defined as:",
    options: ["Actual water vapor in air", "Ratio of actual vapor pressure to saturated vapor pressure at same temperature × 100", "Dew point temperature", "Total rainfall per year"],
    correct: 1,
    explanation: "Relative Humidity = (Actual vapor pressure / Saturated vapor pressure at same temperature) × 100. It expresses the percentage of moisture in air compared to maximum it can hold at that temperature."
  },
  {
    id: "met004",
    subject: "meteorology",
    question: "The instrument used to measure rainfall is:",
    options: ["Barometer", "Hygrometer", "Rain gauge", "Anemometer"],
    correct: 2,
    explanation: "A rain gauge (pluviometer) measures the amount of rainfall (precipitation) in millimeters. The standard Indian Meteorological Department rain gauge has a 127mm (5 inch) diameter funnel."
  },
  {
    id: "met005",
    subject: "meteorology",
    question: "The wet bulb depression is used to calculate:",
    options: ["Rainfall", "Relative humidity and dew point temperature", "Wind speed", "Solar radiation"],
    correct: 1,
    explanation: "Wet bulb depression = (Dry bulb temperature - Wet bulb temperature). This difference is used with psychrometric tables to determine relative humidity and dew point temperature."
  },
  {
    id: "met006",
    subject: "meteorology",
    question: "Class A pan evaporimeter measures:",
    options: ["Rainfall", "Open water evaporation", "Transpiration", "Soil moisture"],
    correct: 1,
    explanation: "Class A pan evaporimeter (1.21m diameter, 25.4cm deep) measures open water (pan) evaporation. Pan evaporation × pan coefficient gives reference evapotranspiration."
  },
  {
    id: "met007",
    subject: "meteorology",
    question: "Normal Indian monsoon brings rainfall from:",
    options: ["October to February", "June to September (Southwest monsoon)", "March to May", "Year-round"],
    correct: 1,
    explanation: "The Southwest monsoon (June-September) brings 75-80% of India's annual rainfall. The Northeast monsoon (October-December) brings rainfall to southeastern India."
  },
  {
    id: "met008",
    subject: "meteorology",
    question: "Average annual rainfall of India is approximately:",
    options: ["500 mm", "1000 mm", "1197 mm", "2000 mm"],
    correct: 2,
    explanation: "India's average annual rainfall is approximately 1197 mm, but distribution is highly uneven - ranging from less than 100 mm in western Rajasthan to over 11,000 mm in Cherrapunji, Meghalaya."
  },
  {
    id: "met009",
    subject: "meteorology",
    question: "Soil temperature is measured using:",
    options: ["Stevenson screen thermometer", "Soil thermometers buried at different depths (5, 10, 20, 30 cm)", "Wet bulb thermometer", "Maximum-minimum thermometer"],
    correct: 1,
    explanation: "Soil temperature is measured using special soil thermometers buried at various depths (5, 10, 20, 30, 60 cm) or with mercury-in-glass or platinum resistance thermometers."
  },
  {
    id: "met010",
    subject: "meteorology",
    question: "The Bowen ratio in energy balance studies is the ratio of:",
    options: ["Rainfall to evaporation", "Sensible heat flux to latent heat flux", "Incoming to outgoing radiation", "Day temperature to night temperature"],
    correct: 1,
    explanation: "Bowen Ratio (β) = Sensible heat flux (H) / Latent heat flux (LE). It indicates the partitioning of available energy between sensible and latent heat. Lower β indicates more energy used for evapotranspiration."
  },
  {
    id: "met011",
    subject: "meteorology",
    question: "The lapse rate of temperature in the troposphere is approximately:",
    options: ["1°C per 1000 m", "6.5°C per 1000 m (Environmental Lapse Rate)", "10°C per 100 m", "0.5°C per km"],
    correct: 1,
    explanation: "The Environmental Lapse Rate (ELR) is approximately 6.5°C per 1000 m altitude increase in the troposphere. Temperature decreases with increasing altitude."
  },
  {
    id: "met012",
    subject: "meteorology",
    question: "Wind speed is measured by:",
    options: ["Barometer", "Anemometer", "Hygrometer", "Thermometer"],
    correct: 1,
    explanation: "An anemometer measures wind speed. Cup anemometers (3 or 4 cups on horizontal axis) are most common. Wind direction is measured by a wind vane (weather vane)."
  },
  {
    id: "met013",
    subject: "meteorology",
    question: "The Beaufort scale measures:",
    options: ["Rainfall intensity", "Wind force/speed from 0 (calm) to 12 (hurricane)", "Temperature range", "Humidity"],
    correct: 1,
    explanation: "The Beaufort scale is a empirical measure of wind intensity based on observable conditions. Scale 0 = calm (< 1 km/h) to Scale 12 = hurricane force (> 118 km/h)."
  },
  {
    id: "met014",
    subject: "meteorology",
    question: "Dew point temperature is the temperature at which:",
    options: ["Maximum temperature occurs", "Air becomes saturated and condensation begins when cooled", "Evaporation stops", "Frost forms"],
    correct: 1,
    explanation: "Dew point is the temperature to which air must be cooled (at constant pressure and water vapor content) for saturation to occur. Below dew point, dew or frost forms."
  },
  {
    id: "met015",
    subject: "meteorology",
    question: "Insolation refers to:",
    options: ["Soil insulation", "Incoming solar radiation received on a unit horizontal surface", "Night temperature", "Wind patterns"],
    correct: 1,
    explanation: "Insolation (INcoming SOLar radiATION) is the solar radiation energy received on a unit horizontal area on Earth's surface. It is expressed in MJ/m²/day or Langleys."
  },
  {
    id: "met016",
    subject: "meteorology",
    question: "The atmosphere layer where weather phenomena occur is called:",
    options: ["Stratosphere", "Mesosphere", "Troposphere", "Thermosphere"],
    correct: 2,
    explanation: "The troposphere (0-12 km altitude) is where all weather phenomena occur. It contains 75% of atmospheric mass and most water vapor. Temperature decreases with altitude."
  },
  {
    id: "met017",
    subject: "meteorology",
    question: "In India, IMD stands for:",
    options: ["Indian Meteorological Data", "India Meteorological Department", "Integrated Monsoon Data", "Indian Monitoring of Droughts"],
    correct: 1,
    explanation: "IMD - India Meteorological Department (headquartered in Pune) is responsible for weather observation, forecasting, and research in India. It was established in 1875."
  },
  {
    id: "met018",
    subject: "meteorology",
    question: "The greenhouse effect in the atmosphere is caused by:",
    options: ["Ozone only", "CO₂, CH₄, N₂O, and water vapor absorbing outgoing longwave radiation", "Solar radiation directly", "Wind patterns"],
    correct: 1,
    explanation: "Greenhouse gases (CO₂, CH₄, N₂O, H₂O vapor, CFCs) absorb outgoing longwave (infrared) radiation from Earth's surface and re-emit it, warming the lower atmosphere."
  },
  {
    id: "met019",
    subject: "meteorology",
    question: "Soil heat flux is maximum in which soil condition?",
    options: ["Wet soil", "Dry sandy soil (high conductivity when dry)", "Clay soil", "Organic matter rich soil"],
    correct: 1,
    explanation: "Dry sandy soils have relatively higher thermal conductivity per unit heat than wet soils. However, moist soils generally have higher thermal conductivity than dry soils. Bare soils have higher flux than vegetated."
  },
  {
    id: "met020",
    subject: "meteorology",
    question: "The annual rainfall pattern that divides India into arid, semi-arid, and humid regions uses which threshold?",
    options: ["< 250 mm = arid, 250-750 mm = semi-arid, > 750 mm = humid", "< 500 mm = arid, 500-1000 mm = semi-arid, > 1000 mm = humid", "< 100 mm = arid, 100-400 mm = semi-arid, > 400 mm = humid", "Regional standards apply"],
    correct: 0,
    explanation: "Classification: < 250 mm = Arid/Desert, 250-500 mm = Semi-arid (dryland), 500-750 mm = Sub-humid, 750-2000 mm = Humid, > 2000 mm = Per-humid regions."
  },
  {
    id: "met021",
    subject: "meteorology",
    question: "Albedo of a surface is:",
    options: ["Total solar radiation received", "Fraction of incoming solar radiation reflected by the surface", "Night temperature", "Soil thermal capacity"],
    correct: 1,
    explanation: "Albedo is the reflectivity of a surface - the ratio of reflected to incident solar radiation. Fresh snow has albedo 0.80-0.90; forest 0.10-0.20; crop land 0.15-0.25; water 0.05-0.10."
  },
  {
    id: "met022",
    subject: "meteorology",
    question: "The ENSO phenomenon refers to:",
    options: ["Eastern North Sea Oscillation", "El Niño Southern Oscillation - Pacific Ocean temperature anomaly affecting global weather", "Equatorial North South Oscillation", "Environmental Neutral Solar Output"],
    correct: 1,
    explanation: "ENSO (El Niño Southern Oscillation) is irregular warming (El Niño) or cooling (La Niña) of the Pacific Ocean near the equator, significantly affecting global weather including Indian monsoon rainfall."
  },
  {
    id: "met023",
    subject: "meteorology",
    question: "Thermal infrared radiation from Earth is also called:",
    options: ["Shortwave radiation", "Longwave or terrestrial radiation", "UV radiation", "Visible light"],
    correct: 1,
    explanation: "Earth emits longwave (terrestrial/infrared) radiation in wavelengths of 4-100 μm. The Sun emits shortwave radiation (0.15-4 μm). This difference drives the greenhouse effect."
  },
  {
    id: "met024",
    subject: "meteorology",
    question: "The crop water stress index (CWSI) is determined using:",
    options: ["Rainfall data", "Canopy temperature compared to non-water-stressed baseline", "Soil moisture sensors", "Root zone temperature"],
    correct: 1,
    explanation: "CWSI uses infrared thermometry to measure canopy temperature. Stressed plants have higher canopy temperature due to reduced transpiration. CWSI = (Tc - Tref_dry) / (Tref_wet - Tref_dry)."
  },
  {
    id: "met025",
    subject: "meteorology",
    question: "Agrometeorological advisory service (AAS) provided to farmers includes:",
    options: ["Only rainfall data", "Weather-based advisories on sowing time, irrigation, crop protection, and harvest", "Soil analysis", "Fertilizer recommendations only"],
    correct: 1,
    explanation: "AAS provides weather-based farm advisory on optimal sowing window, irrigation scheduling, pest and disease warnings, spray timing, and harvest/post-harvest operations based on weather forecasts."
  },
  {
    id: "met026",
    subject: "meteorology",
    question: "A Lysimeter is used to measure:",
    options: ["Rainfall", "Actual evapotranspiration from a vegetated soil surface", "Wind speed", "Solar radiation"],
    correct: 1,
    explanation: "A lysimeter is an enclosed soil block with growing plants used to measure actual evapotranspiration by monitoring all water inputs (rain, irrigation) and outputs (drainage, soil moisture change)."
  },
  {
    id: "met027",
    subject: "meteorology",
    question: "The concept of Growing Degree Days (GDD) is used to:",
    options: ["Predict rainfall", "Predict crop developmental stages and maturity based on heat accumulation", "Measure humidity", "Calculate solar radiation"],
    correct: 1,
    explanation: "GDD accumulates daily mean temperatures above a base temperature to predict crop development stages. GDD = Σ(Tmean - Tbase). Each crop has specific GDD requirements for each phenological stage."
  },
  {
    id: "met028",
    subject: "meteorology",
    question: "The atmospheric pressure at sea level is approximately:",
    options: ["760 mm Hg (1013.25 mb)", "500 mm Hg", "1500 mb", "250 mb"],
    correct: 0,
    explanation: "Standard atmospheric pressure at sea level is 1013.25 mb (millibar) = 101.325 kPa = 760 mm Hg = 29.92 inches Hg. It decreases with altitude."
  },
  {
    id: "met029",
    subject: "meteorology",
    question: "Frost damage to crops occurs when air temperature falls below:",
    options: ["5°C", "0°C (freezing point of water)", "10°C", "15°C"],
    correct: 1,
    explanation: "Frost occurs when temperature drops to 0°C or below, causing ice crystal formation in plant tissues. Tender plants can be damaged by radiation frost (clear nights) or advection frost (cold winds)."
  },
  {
    id: "met030",
    subject: "meteorology",
    question: "Hailstorm damage to crops is primarily caused by:",
    options: ["Strong winds", "Ice pellets (hail) falling at high velocity causing physical damage to plants", "Lightning", "Heavy rainfall"],
    correct: 1,
    explanation: "Hailstorms cause severe physical damage to crops through impact of ice balls (hailstones) ranging from 5mm to over 100mm diameter, destroying leaves, breaking stems, and bruising fruits."
  },
  {
    id: "met031",
    subject: "meteorology",
    question: "The net radiation (Rn) in energy balance equation is:",
    options: ["Only incoming solar radiation", "Rn = (Incoming shortwave - Reflected shortwave) + (Incoming longwave - Outgoing longwave)", "Rainfall energy", "Wind energy"],
    correct: 1,
    explanation: "Net Radiation = (Rs↓ - Rs↑) + (RL↓ - RL↑) = Net shortwave + Net longwave. It is the balance of all incoming and outgoing radiation and drives evapotranspiration and crop growth."
  },
  {
    id: "met032",
    subject: "meteorology",
    question: "Phenology in agriculture studies:",
    options: ["Soil properties", "Timing of periodic biological events in crops relative to weather and climate", "Plant nutrition", "Pest management"],
    correct: 1,
    explanation: "Agricultural phenology studies the timing of periodic plant developmental events (germination, flowering, fruiting, maturity) and their relationships with seasonal weather patterns."
  },
  {
    id: "met033",
    subject: "meteorology",
    question: "A cyclone in the northern hemisphere rotates:",
    options: ["Clockwise", "Counter-clockwise (anticlockwise) due to Coriolis effect", "Varies by season", "Straight line"],
    correct: 1,
    explanation: "In the northern hemisphere, cyclones (low pressure systems) rotate counterclockwise due to the Coriolis effect. In southern hemisphere they rotate clockwise."
  },
  {
    id: "met034",
    subject: "meteorology",
    question: "The normal onset date of Southwest monsoon over Kerala is:",
    options: ["April 15", "June 1", "July 15", "August 1"],
    correct: 1,
    explanation: "The normal onset date of the Southwest monsoon over Kerala (southernmost landmass) is June 1. It then progresses northward, reaching Delhi by around July 1 and covering entire India by July 15."
  },
  {
    id: "met035",
    subject: "meteorology",
    question: "Heat index (apparent temperature) accounts for:",
    options: ["Only temperature", "Combined effect of air temperature and humidity on human/crop thermal comfort", "Wind speed only", "Solar radiation only"],
    correct: 1,
    explanation: "Heat index combines air temperature and relative humidity to estimate the 'feels like' temperature. High humidity reduces evaporative cooling, making hot weather more stressful for crops and humans."
  },
  {
    id: "met036",
    subject: "meteorology",
    question: "Orographic rainfall occurs when:",
    options: ["Hot air rises in flat areas", "Moist air is forced to rise over mountains, cooling and precipitating", "Sea breeze brings rain", "Cold fronts meet warm fronts"],
    correct: 1,
    explanation: "Orographic (relief) rainfall occurs when moisture-laden winds are forced to rise over mountains. As air rises, it cools, condenses, and produces heavy rainfall on the windward side, while the leeward side is dry (rain shadow)."
  },
  {
    id: "met037",
    subject: "meteorology",
    question: "IMD classifies drought in India based on:",
    options: ["Only temperature", "Meteorological drought when rainfall deficiency is ≥25% of normal", "Only soil moisture", "Crop yield only"],
    correct: 1,
    explanation: "IMD defines meteorological drought when rainfall deficiency from normal is 26-50% (moderate drought) or > 50% (severe drought). Hydrological and agricultural droughts are also classified."
  },
  {
    id: "met038",
    subject: "meteorology",
    question: "The daily temperature range (diurnal range) is greatest in:",
    options: ["Coastal areas", "Desert and arid areas with clear skies and low humidity", "Humid tropical areas", "Mountainous areas"],
    correct: 1,
    explanation: "Deserts and arid areas have the greatest diurnal temperature range because clear skies allow intense solar heating during day and rapid radiative cooling at night, with low humidity moderating neither extreme."
  },
  {
    id: "met039",
    subject: "meteorology",
    question: "The crop season Kharif in India corresponds to:",
    options: ["November to March", "June to November (summer monsoon season)", "March to June", "All year"],
    correct: 1,
    explanation: "Kharif season crops are sown in June-July with the onset of monsoon and harvested in September-November. Major crops: rice, sorghum, maize, cotton, groundnut, soybean."
  },
  {
    id: "met040",
    subject: "meteorology",
    question: "Agroclimate classification of India identifies how many agroclimatic zones?",
    options: ["5", "10", "15", "20"],
    correct: 2,
    explanation: "The Planning Commission of India identified 15 agroclimatic zones based on physiography, climate, and soils. ICAR also has a 127 agroclimatic sub-zone classification for agricultural planning."
  },
  {
    id: "met041",
    subject: "meteorology",
    question: "The Normalized Difference Vegetation Index (NDVI) uses:",
    options: ["Only visible light", "Near-infrared (NIR) and red band reflectance to assess vegetation density and health", "Thermal infrared only", "Microwave radiation"],
    correct: 1,
    explanation: "NDVI = (NIR - Red) / (NIR + Red). Healthy green vegetation has high NIR reflectance and low red reflectance, giving NDVI values of 0.6-0.9. Used in remote sensing to monitor crop growth."
  },
  {
    id: "met042",
    subject: "meteorology",
    question: "Fog formation requires:",
    options: ["High wind speed", "Near-saturated air (high RH) with cooling at low levels, calm conditions", "High temperature", "Low humidity"],
    correct: 1,
    explanation: "Fog forms when air near the surface is cooled to its dew point, causing water vapor to condense into tiny droplets. It requires high relative humidity, gentle winds, and suitable cooling mechanisms."
  },
  {
    id: "met043",
    subject: "meteorology",
    question: "The Stefan-Boltzmann law states that radiation emitted by a body is proportional to:",
    options: ["Temperature (T)", "T⁴ (fourth power of absolute temperature)", "T²", "1/T"],
    correct: 1,
    explanation: "Stefan-Boltzmann law: E = σT⁴, where E is energy emitted per unit area, σ = 5.67 × 10⁻⁸ W/m²K⁴ (Stefan-Boltzmann constant), and T = absolute temperature in Kelvin."
  },
  {
    id: "met044",
    subject: "meteorology",
    question: "Percolation of water in soil is affected by:",
    options: ["Only rainfall intensity", "Soil texture, structure, porosity, organic matter, and prior moisture content", "Temperature only", "Crop type"],
    correct: 1,
    explanation: "Soil water percolation depends on texture (sandy soils faster), structure (aggregate stability), porosity, organic matter content, and antecedent soil moisture. These determine infiltration rate."
  },
  {
    id: "met045",
    subject: "meteorology",
    question: "The wind rose diagram shows:",
    options: ["Wind speed only", "Frequency and speed of wind from different directions over a period", "Rainfall patterns", "Temperature variation"],
    correct: 1,
    explanation: "A wind rose diagram shows the statistical distribution of wind speed and direction at a location, indicating the most prevalent wind directions and their associated speeds for climate analysis."
  },
  {
    id: "met046",
    subject: "meteorology",
    question: "Photosynthetically Active Radiation (PAR) is in the wavelength range of:",
    options: ["100-300 nm (UV)", "400-700 nm (visible light)", "700-1000 nm (near IR)", "1000-3000 nm"],
    correct: 1,
    explanation: "PAR is radiation in the 400-700 nm wavelength range (visible spectrum) that plants use for photosynthesis. It includes blue light (400-500 nm) and red light (600-700 nm)."
  },
  {
    id: "met047",
    subject: "meteorology",
    question: "Agrometeorological stations record all EXCEPT:",
    options: ["Rainfall and temperature", "Soil temperature and evaporation", "Crop prices and market data", "Solar radiation and humidity"],
    correct: 2,
    explanation: "Agrometeorological stations record weather parameters: rainfall, min/max temperature, soil temperature at depths, evaporation, sunshine hours, humidity, wind speed, and solar radiation. Not market prices."
  },
  {
    id: "met048",
    subject: "meteorology",
    question: "Cloud seeding is done using which material to induce artificial rainfall?",
    options: ["Common salt (NaCl)", "Silver iodide (AgI) and dry ice (solid CO₂)", "Urea", "Calcium carbide"],
    correct: 1,
    explanation: "Cloud seeding uses silver iodide (AgI) or dry ice (solid CO₂) dispersed into clouds to provide condensation nuclei. AgI has a crystal structure similar to ice and promotes ice crystal formation."
  },
  {
    id: "met049",
    subject: "meteorology",
    question: "The sunshine recorder used in meteorology is called:",
    options: ["Pyranometer", "Campbell-Stokes sunshine recorder", "Pyrheliometer", "Actinometer"],
    correct: 1,
    explanation: "The Campbell-Stokes sunshine recorder uses a glass sphere to focus sunlight onto a paper card, burning a trace during sunshine hours. The length of burnt trace gives daily sunshine hours."
  },
  {
    id: "met050",
    subject: "meteorology",
    question: "The water balance equation for agriculture is:",
    options: ["P = ET + R + D ± ΔS (Precipitation = Evapotranspiration + Runoff + Deep percolation ± Change in soil moisture)", "P = ET only", "Rainfall = Irrigation", "ET = Rainfall - Runoff"],
    correct: 0,
    explanation: "Water Balance: P (Precipitation) + I (Irrigation) = ET (Evapotranspiration) + R (Runoff) + D (Deep percolation/drainage) ± ΔS (Change in soil water storage). Used for irrigation scheduling."
  },
];
