import { Question } from "@/types";

export const da252LectureQuestions: Question[] = [
  // ── LECTURE 1: Introduction to Surveying ─────────────────────────────────
  {
    id: "d252l_001", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "Surveying is defined as the art of:",
    options: ["Designing buildings in soil management in agriculture", "Determining positions of points and measuring distances, angles, and elevations on the earth's surface", "Soil testing under field conditions", "Preparing maps only for soil fertility under field conditions"],
    correct: 1,
    explanation: "Surveying involves determining the relative positions of points on or near the earth's surface through measurements.",
    difficulty: "easy"
  },
  {
    id: "d252l_002", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "Plane surveying assumes the earth's surface to be:",
    options: ["Spherical", "Flat (plane)", "Irregular", "Cylindrical"],
    correct: 1,
    explanation: "Plane surveying ignores earth's curvature — suitable for areas up to about 260 km².",
    difficulty: "easy"
  },
  {
    id: "d252l_003", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "Geodetic surveying accounts for:",
    options: ["Only horizontal distances in soil management", "Only vertical measurements under field conditions", "The curvature of the earth (for large areas)", "Only angles for soil fertility"],
    correct: 2,
    explanation: "Geodetic surveying considers the curvature of the earth and is used for large-scale national surveys.",
    difficulty: "medium"
  },
  {
    id: "d252l_004", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "The primary aim of surveying in agriculture is:",
    options: ["Weather prediction under field conditions", "Crop yield estimation in soil management", "Measurement and recording of land for planning and development", "Soil nutrient analysis for soil fertility"],
    correct: 2,
    explanation: "Surveying in agriculture is done to measure land areas, plan irrigation systems, and prepare farm maps.",
    difficulty: "easy"
  },
  {
    id: "d252l_005", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "The basic principle of surveying is to work from:",
    options: ["Whole to parts (general to specific)", "Parts to whole", "Left to right", "North to south"],
    correct: 0,
    explanation: "Surveying follows the principle of 'working from the whole to the part' to minimize error accumulation.",
    difficulty: "medium"
  },
  {
    id: "d252l_006", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "A datum in surveying is:",
    options: ["A chain length in soil management in agriculture", "A reference level or surface from which elevations are measured", "A survey instrument under field conditions", "A type of map for soil fertility"],
    correct: 1,
    explanation: "Datum is an assumed or defined reference surface (often mean sea level) from which vertical measurements are made.",
    difficulty: "medium"
  },
  {
    id: "d252l_007", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "MSL (Mean Sea Level) in India is determined at:",
    options: ["Chennai", "Kolkata", "Mumbai", "Karachi"],
    correct: 2,
    explanation: "The MSL datum for India is determined at the Mumbai tidal gauge station.",
    difficulty: "medium"
  },
  {
    id: "d252l_008", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "Scale on a map is the ratio of:",
    options: ["Area to perimeter", "Actual distance to map distance", "Volume to area", "Map distance to actual distance"],
    correct: 3,
    explanation: "Map scale = Map distance / Actual distance on ground (or its representation as RF).",
    difficulty: "easy"
  },
  {
    id: "d252l_009", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "A large-scale map shows:",
    options: ["More area with less detail", "Only rivers", "Less area with more detail", "Equal area and detail"],
    correct: 2,
    explanation: "Large-scale maps (1:1000, 1:5000) cover smaller areas but show more detail than small-scale maps.",
    difficulty: "medium"
  },
  {
    id: "d252l_010", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "RF (Representative Fraction) of 1:50,000 means:",
    options: ["1 cm on map = 50,000 m on ground", "1 m on ground = 50,000 m on map", "1:50,000 is a large scale", "1 cm on map = 500 m on ground"],
    correct: 3,
    explanation: "1:50,000 means 1 unit on map = 50,000 units on ground (1 cm = 50,000 cm = 500 m).",
    difficulty: "medium"
  },
  {
    id: "d252l_011", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "Which of the following is NOT a survey instrument?",
    options: ["Chain", "Theodolite", "Level", "Piezometer"],
    correct: 3,
    explanation: "Piezometer measures water pressure/depth; it is a hydrological instrument, not a surveying tool.",
    difficulty: "medium"
  },
  {
    id: "d252l_012", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "Bearing in surveying is the angle measured from:",
    options: ["East direction in soil management", "The horizon for soil fertility", "Vertical downward under field conditions", "North (or South) direction, clockwise or counter-clockwise"],
    correct: 3,
    explanation: "Bearing is the horizontal angle of a survey line measured clockwise from north (whole circle bearing) or from N/S.",
    difficulty: "medium"
  },

  // ── LECTURE 2: Chain Surveying ────────────────────────────────────────────
  {
    id: "d252l_013", subject: "da-252", lecture: "lecture-2", lectureNo: 2,
    question: "Standard chain length used in India is:",
    options: ["20 m (Gunter's chain = 66 ft)", "30 m (metric chain)", "50 m", "10 m"],
    correct: 1,
    explanation: "The standard metric chain used in India is 30 m long (divided into 150 links of 20 cm each).",
    difficulty: "medium"
  },
  {
    id: "d252l_014", subject: "da-252", lecture: "lecture-2", lectureNo: 2,
    question: "A Gunter's chain is _____ long:",
    options: ["100 m", "20 m / 66 feet", "50 feet", "30 m"],
    correct: 1,
    explanation: "Gunter's chain is 66 feet (20.12 m) long with 100 links, useful for area measurement in acres.",
    difficulty: "medium"
  },
  {
    id: "d252l_015", subject: "da-252", lecture: "lecture-2", lectureNo: 2,
    question: "In chain surveying, the main lines form a:",
    options: ["Circle", "Grid", "Spiral", "Network of well-conditioned triangles"],
    correct: 3,
    explanation: "Chain surveying is based on a framework of triangles that are 'well-conditioned' (angles 30°–120°).",
    difficulty: "medium"
  },
  {
    id: "d252l_016", subject: "da-252", lecture: "lecture-2", lectureNo: 2,
    question: "An offset in chain surveying is:",
    options: ["A perpendicular (or oblique) measurement from the chain line to a detail point", "A measurement along the chain line under field conditions", "The angle between two chain lines for soil fertility", "The length of the chain in soil management"],
    correct: 0,
    explanation: "Offsets are lateral measurements from the chain line to locate features not on the line.",
    difficulty: "medium"
  },
  {
    id: "d252l_017", subject: "da-252", lecture: "lecture-2", lectureNo: 2,
    question: "The instrument used to set out right angles in chain surveying is:",
    options: ["Compass", "Cross-staff or optical square", "Theodolite", "Level"],
    correct: 1,
    explanation: "Cross-staff and optical square are simple instruments used to set perpendicular offsets in chain surveying.",
    difficulty: "medium"
  },
  {
    id: "d252l_018", subject: "da-252", lecture: "lecture-2", lectureNo: 2,
    question: "A check line in chain surveying is used to:",
    options: ["Set up the chain under field conditions", "Measure the main line in soil management", "Verify the accuracy of field work by checking closure", "Measure offsets for soil fertility"],
    correct: 2,
    explanation: "Check lines connect known points to verify that the framework of triangles has been accurately measured.",
    difficulty: "medium"
  },
  {
    id: "d252l_019", subject: "da-252", lecture: "lecture-2", lectureNo: 2,
    question: "A tie line in chain surveying connects:",
    options: ["End points of the survey", "Two main stations on the main line", "Two benchmarks", "Two subsidiary points to provide additional checks"],
    correct: 3,
    explanation: "Tie lines join subsidiary (detail) points and help locate more detail features near the main framework.",
    difficulty: "medium"
  },
  {
    id: "d252l_020", subject: "da-252", lecture: "lecture-2", lectureNo: 2,
    question: "Ranging in chain surveying means:",
    options: ["Establishing intermediate points on a straight line between two stations", "Taking offsets in soil management in agriculture", "Measuring distances for soil fertility under field conditions", "Plotting the chain survey under field conditions"],
    correct: 0,
    explanation: "Ranging is the process of establishing a series of intermediate points on a straight line.",
    difficulty: "medium"
  },
  {
    id: "d252l_021", subject: "da-252", lecture: "lecture-2", lectureNo: 2,
    question: "Obstacles to chaining over ponds or rivers are overcome by:",
    options: ["Moving the survey line under field conditions", "Stopping the survey in soil management", "Geometric methods using similar triangles or Pythagoras theorem", "Ignoring the obstacle for soil fertility"],
    correct: 2,
    explanation: "Obstacles to chaining are overcome using geometric methods such as erecting perpendiculars and using similar triangles.",
    difficulty: "medium"
  },
  {
    id: "d252l_022", subject: "da-252", lecture: "lecture-2", lectureNo: 2,
    question: "The area of a farm measured by chain surveying is recorded in the field book in:",
    options: ["Gunter's units only for soil fertility", "Hectares only under field conditions", "Square feet only in soil management", "Chains and links, later converted to hectares"],
    correct: 3,
    explanation: "Field measurements are recorded in chains and links; area is calculated from the plotted map.",
    difficulty: "medium"
  },

  // ── LECTURE 3: Compass Surveying ──────────────────────────────────────────
  {
    id: "d252l_023", subject: "da-252", lecture: "lecture-3", lectureNo: 3,
    question: "A prismatic compass measures:",
    options: ["Distances under field conditions", "Vertical angles in soil management", "Horizontal angles (bearings) using a magnetic needle", "Elevations for soil fertility"],
    correct: 2,
    explanation: "A prismatic compass measures horizontal bearings (directions) using a freely suspended magnetic needle.",
    difficulty: "easy"
  },
  {
    id: "d252l_024", subject: "da-252", lecture: "lecture-3", lectureNo: 3,
    question: "Magnetic declination is the angle between:",
    options: ["Magnetic north and south", "Magnetic east and true east", "True north and geographic east", "True north and magnetic north"],
    correct: 3,
    explanation: "Magnetic declination = horizontal angle between true geographic north and magnetic north at a location.",
    difficulty: "medium"
  },
  {
    id: "d252l_025", subject: "da-252", lecture: "lecture-3", lectureNo: 3,
    question: "Whole Circle Bearing (WCB) is measured:",
    options: ["From any direction", "From south only", "From north, clockwise, 0°–360°", "From east, counter-clockwise"],
    correct: 2,
    explanation: "WCB (azimuth) is measured from north in a clockwise direction from 0° to 360°.",
    difficulty: "medium"
  },
  {
    id: "d252l_026", subject: "da-252", lecture: "lecture-3", lectureNo: 3,
    question: "Quadrantal Bearing (QB) is expressed as:",
    options: ["Only in degrees", "Bearings from east", "N/S angle E/W", "0°–360° from north"],
    correct: 2,
    explanation: "Quadrantal bearing specifies direction as angle from north or south toward east or west (0°–90° range).",
    difficulty: "medium"
  },
  {
    id: "d252l_027", subject: "da-252", lecture: "lecture-3", lectureNo: 3,
    question: "Back bearing = fore bearing ±:",
    options: ["45°", "90°", "180°", "360°"],
    correct: 2,
    explanation: "Back bearing = fore bearing + 180° (if FB < 180°) or fore bearing − 180° (if FB > 180°).",
    difficulty: "medium"
  },
  {
    id: "d252l_028", subject: "da-252", lecture: "lecture-3", lectureNo: 3,
    question: "Local attraction in compass surveying is caused by:",
    options: ["Earth's rotation under field conditions", "Atmospheric pressure in soil management in agriculture", "Sun's gravity for soil fertility under field conditions", "Presence of magnetic materials (iron, electric cables) near the compass"],
    correct: 3,
    explanation: "Local attraction deflects the magnetic needle due to nearby iron objects, steel structures, or power lines.",
    difficulty: "medium"
  },
  {
    id: "d252l_029", subject: "da-252", lecture: "lecture-3", lectureNo: 3,
    question: "Traversing in compass survey involves:",
    options: ["Only measuring bearings for soil fertility under field conditions", "Measuring a series of connected lines with distances and bearings", "Only measuring distances under field conditions", "Plotting only in soil management in agriculture"],
    correct: 1,
    explanation: "A traverse is a series of connected survey lines; both distances and bearings are measured.",
    difficulty: "medium"
  },
  {
    id: "d252l_030", subject: "da-252", lecture: "lecture-3", lectureNo: 3,
    question: "Closing error in a compass traverse is due to:",
    options: ["Correct scale selection in soil management", "Accumulation of errors in measurement and plotting", "Correct measurements under field conditions", "Magnetic north alignment for soil fertility"],
    correct: 1,
    explanation: "Closing error is the gap between the starting and ending point of a closed traverse, due to accumulated measurement errors.",
    difficulty: "medium"
  },
  {
    id: "d252l_031", subject: "da-252", lecture: "lecture-3", lectureNo: 3,
    question: "Bowditch's rule (compass rule) for traverse adjustment distributes the closing error:",
    options: ["Proportional to the length of each traverse side", "Only to the longest side", "Randomly in soil management", "Equally to all sides under field conditions"],
    correct: 0,
    explanation: "Bowditch's rule distributes the closing error in proportion to the length of each line in the traverse.",
    difficulty: "hard"
  },
  {
    id: "d252l_032", subject: "da-252", lecture: "lecture-3", lectureNo: 3,
    question: "The angle of dip is the angle between:",
    options: ["Horizontal plane and direction of earth's total magnetic field", "True north and magnetic north in soil management", "Magnetic needle and vertical under field conditions", "Two traverse lines for soil fertility"],
    correct: 0,
    explanation: "Angle of dip (magnetic inclination) is the angle that the earth's magnetic field makes with the horizontal.",
    difficulty: "hard"
  },

  // ── LECTURE 4: Plane Table and Theodolite Surveying ───────────────────────
  {
    id: "d252l_033", subject: "da-252", lecture: "lecture-4", lectureNo: 4,
    question: "Plane table surveying combines:",
    options: ["Compass and level work", "Distance and elevation measurement", "Field measurement and map drawing simultaneously", "Chaining and levelling"],
    correct: 2,
    explanation: "Plane table surveying allows direct plotting of the survey map in the field as measurements are taken.",
    difficulty: "easy"
  },
  {
    id: "d252l_034", subject: "da-252", lecture: "lecture-4", lectureNo: 4,
    question: "The instrument used for sighting in plane table surveying is:",
    options: ["Cross-staff", "Compass", "Alidade", "Level staff"],
    correct: 2,
    explanation: "Alidade is a sighting device placed on the plane table to draw rays toward survey points.",
    difficulty: "medium"
  },
  {
    id: "d252l_035", subject: "da-252", lecture: "lecture-4", lectureNo: 4,
    question: "Radiation method in plane table surveying is used when:",
    options: ["All points are visible from one station", "Underground surveys are done", "Levelling is needed", "Points are in multiple locations requiring traversing"],
    correct: 0,
    explanation: "Radiation method: all detail points are sighted from a single instrument station — suitable for small open areas.",
    difficulty: "medium"
  },
  {
    id: "d252l_036", subject: "da-252", lecture: "lecture-4", lectureNo: 4,
    question: "Intersection method in plane table surveying requires:",
    options: ["A compass in soil management in agriculture", "Two or more instrument stations with intersecting rays to locate points", "One instrument station under field conditions", "A level for soil fertility under field conditions"],
    correct: 1,
    explanation: "Intersection locates a point by intersecting rays from two or more instrument stations — useful when direct access is impossible.",
    difficulty: "medium"
  },
  {
    id: "d252l_037", subject: "da-252", lecture: "lecture-4", lectureNo: 4,
    question: "Theodolite is used for measuring:",
    options: ["Elevations only in soil management", "Distances only under field conditions", "Both horizontal and vertical angles precisely", "Magnetic bearings for soil fertility"],
    correct: 2,
    explanation: "Theodolite is a precision optical instrument for measuring both horizontal and vertical angles.",
    difficulty: "easy"
  },
  {
    id: "d252l_038", subject: "da-252", lecture: "lecture-4", lectureNo: 4,
    question: "Verniers in a theodolite are used to:",
    options: ["Measure distances in soil management in agriculture", "Set the instrument level under field conditions", "Read fractional parts of the main scale divisions (increase precision)", "Measure magnetic north for soil fertility under field conditions"],
    correct: 2,
    explanation: "Vernier scales allow reading of angles to fractions of a degree on the main graduated circle.",
    difficulty: "medium"
  },
  {
    id: "d252l_039", subject: "da-252", lecture: "lecture-4", lectureNo: 4,
    question: "Deflection angle is measured from:",
    options: ["Vertical axis in soil management", "North under field conditions", "Extension of the previous survey line", "Magnetic south for soil fertility"],
    correct: 2,
    explanation: "Deflection angle is the angle between the extension of the preceding line and the following line.",
    difficulty: "medium"
  },
  {
    id: "d252l_040", subject: "da-252", lecture: "lecture-4", lectureNo: 4,
    question: "Tacheometry is a surveying method for:",
    options: ["Soil profiling under field conditions", "Rapid determination of distances and elevations using stadia hairs in telescope", "Underground surveys in soil management in agriculture", "Magnetic measurements for soil fertility under field conditions"],
    correct: 1,
    explanation: "Tacheometry uses the stadia method to determine distances and elevations from staff readings without chaining.",
    difficulty: "hard"
  },

  // ── LECTURE 5: Levelling Principles and Methods ───────────────────────────
  {
    id: "d252l_041", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "Levelling is the process of determining:",
    options: ["Areas of fields in soil management", "Magnetic bearings for soil fertility in agriculture", "Horizontal distances under field conditions", "Relative heights (elevations) of points on the earth's surface"],
    correct: 3,
    explanation: "Levelling finds the difference in elevation between points to establish levels for engineering and agricultural works.",
    difficulty: "easy"
  },
  {
    id: "d252l_042", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "A Bench Mark (BM) is:",
    options: ["A farm boundary marker", "A temporary marker in soil management", "A permanent reference point of known elevation", "A chain length marker"],
    correct: 2,
    explanation: "Benchmark is a permanent fixed point of known elevation (height above MSL) used as reference for levelling.",
    difficulty: "easy"
  },
  {
    id: "d252l_043", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "Back Sight (BS) in levelling is the reading taken on:",
    options: ["The first staff position (at known point/BM) after setting up instrument", "The last point under field conditions", "A forward point in soil management in agriculture", "Any point for soil fertility under field conditions"],
    correct: 0,
    explanation: "Back sight is taken on a point of known elevation (BM or change point) immediately after instrument setup.",
    difficulty: "medium"
  },
  {
    id: "d252l_044", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "Height of Instrument (HI) = RL of BM +:",
    options: ["Staff height", "Back sight reading", "Foresight reading", "Intermediate sight"],
    correct: 1,
    explanation: "HI (Instrument Height) = RL of point + Back sight reading on that point.",
    difficulty: "medium"
  },
  {
    id: "d252l_045", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "Rise and Fall method in levelling calculates RL by:",
    options: ["Comparing consecutive staff readings (rise = previous IS/FS > current reading)", "Compass readings in soil management in agriculture", "Triangulation under field conditions", "HI method for soil fertility under field conditions"],
    correct: 0,
    explanation: "Rise and Fall method finds rises or falls between consecutive readings and applies them to successive RLs.",
    difficulty: "medium"
  },
  {
    id: "d252l_046", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "Arithmetic check in levelling (HI method): Sum of BS – Sum of FS =",
    options: ["Last RL – First RL", "Zero always", "Sum of IS", "Sum of all RLs"],
    correct: 0,
    explanation: "Arithmetic check: ΣBS − ΣFS = Last RL − First RL. This verifies the arithmetic but not field accuracy.",
    difficulty: "medium"
  },
  {
    id: "d252l_047", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "Reciprocal levelling is used when:",
    options: ["The area is flat in soil management", "The distance is short under field conditions", "There are many intermediate points", "A large obstacle (river, valley) prevents direct levelling"],
    correct: 3,
    explanation: "Reciprocal levelling takes readings from both banks of an obstacle to eliminate errors from curvature and refraction.",
    difficulty: "medium"
  },
  {
    id: "d252l_048", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "Curvature correction in levelling is:",
    options: ["+D/2", "–D/4", "+0.0785 D² (additive)", "–0.0785 D² (subtractive)"],
    correct: 3,
    explanation: "Curvature makes staff readings too high; curvature correction C = −0.0785D² (m) where D is in km, so it is subtracted.",
    difficulty: "hard"
  },
  {
    id: "d252l_049", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "The permissible closing error for ordinary levelling is:",
    options: ["6√K mm", "Zero", "24√K mm", "12√K mm"],
    correct: 2,
    explanation: "Permissible closing error for ordinary levelling = 24√K mm (where K = distance in km).",
    difficulty: "hard"
  },
  {
    id: "d252l_050", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "A change point (CP) in levelling is a point where:",
    options: ["The staff is held vertically under field conditions", "Only one reading is taken in soil management", "Both foresight and backsight readings are taken (instrument is shifted)", "The survey ends for soil fertility"],
    correct: 2,
    explanation: "Change point is where the instrument is moved: foresight on it from old position, then backsight from new position.",
    difficulty: "medium"
  },
  {
    id: "d252l_051", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "Dumpy level is preferred over tilting level because:",
    options: ["It works without a staff in soil management in agriculture", "It has a simpler construction and is more stable for ordinary levelling", "It measures angles for soil fertility under field conditions", "It measures horizontal distances under field conditions"],
    correct: 1,
    explanation: "Dumpy level has a simple, robust construction suitable for ordinary levelling work.",
    difficulty: "medium"
  },

  // ── LECTURE 6: Contouring ─────────────────────────────────────────────────
  {
    id: "d252l_052", subject: "da-252", lecture: "lecture-6", lectureNo: 6,
    question: "Contour lines are lines joining points:",
    options: ["Of equal slope in soil management", "Of equal elevation (height) above a datum", "Of equal horizontal distance", "Of equal soil depth"],
    correct: 1,
    explanation: "A contour line connects all points of the same elevation above a datum (sea level).",
    difficulty: "easy"
  },
  {
    id: "d252l_053", subject: "da-252", lecture: "lecture-6", lectureNo: 6,
    question: "Contour interval is:",
    options: ["Scale of the map", "Vertical difference in elevation between successive contour lines", "Number of contours on map", "Distance between contour lines on map"],
    correct: 1,
    explanation: "Contour interval is the fixed vertical height difference between consecutive contour lines.",
    difficulty: "easy"
  },
  {
    id: "d252l_054", subject: "da-252", lecture: "lecture-6", lectureNo: 6,
    question: "Closely spaced contour lines indicate:",
    options: ["Gentle slope", "Uniform slope", "Steep slope", "Flat terrain"],
    correct: 2,
    explanation: "Close contour lines = steep slope; widely spaced contours = gentle/flat slope.",
    difficulty: "easy"
  },
  {
    id: "d252l_055", subject: "da-252", lecture: "lecture-6", lectureNo: 6,
    question: "Contour lines NEVER:",
    options: ["Bend around ridges", "Curve around valleys", "Cross each other (except for overhangs)", "Close on themselves"],
    correct: 2,
    explanation: "Contour lines never cross each other because a point cannot have two different elevations (except cliffs/overhangs which is rare).",
    difficulty: "medium"
  },
  {
    id: "d252l_056", subject: "da-252", lecture: "lecture-6", lectureNo: 6,
    question: "Contours bend upstream (uphill) when crossing a:",
    options: ["Ridge", "Plateau", "Hill top", "Valley / stream"],
    correct: 3,
    explanation: "Contour lines form a V-shape pointing upstream when crossing a valley or stream.",
    difficulty: "medium"
  },
  {
    id: "d252l_057", subject: "da-252", lecture: "lecture-6", lectureNo: 6,
    question: "Contour maps are useful in agriculture for:",
    options: ["Fertilizer recommendations in soil management", "Planting decisions only for soil fertility", "Pest scouting under field conditions", "Irrigation system design, soil conservation planning, drainage layout"],
    correct: 3,
    explanation: "Contour maps guide terrace design, field levelling, irrigation channel layout, and soil conservation measures.",
    difficulty: "easy"
  },
  {
    id: "d252l_058", subject: "da-252", lecture: "lecture-6", lectureNo: 6,
    question: "The method of contouring by indirect method involves:",
    options: ["Eye sketching only", "Direct spot height measurement on contour", "Grid/section levelling and interpolating contour positions", "Aerial photography"],
    correct: 2,
    explanation: "Indirect contouring: spot heights are taken on a grid; contour lines are interpolated between these points.",
    difficulty: "medium"
  },
  {
    id: "d252l_059", subject: "da-252", lecture: "lecture-6", lectureNo: 6,
    question: "Gradient in agricultural land development refers to:",
    options: ["The slope or rate of change of elevation (rise/horizontal distance)", "Crop growth rate in soil management in agriculture", "Water pH under field conditions", "Soil fertility level for soil fertility under field conditions"],
    correct: 0,
    explanation: "Gradient (slope) = vertical rise / horizontal distance, expressed as ratio, percentage, or angle.",
    difficulty: "easy"
  },
  {
    id: "d252l_060", subject: "da-252", lecture: "lecture-6", lectureNo: 6,
    question: "A contour interval suitable for a flat agricultural terrain (slope < 1%) would be:",
    options: ["0.5 m", "25 m", "100 m", "5 m"],
    correct: 0,
    explanation: "Small contour intervals (0.25–0.5 m) are used for flat land; large intervals for hilly terrain.",
    difficulty: "medium"
  },

  // ── LECTURE 7: Area Measurement ───────────────────────────────────────────
  {
    id: "d252l_061", subject: "da-252", lecture: "lecture-7", lectureNo: 7,
    question: "Area of a triangle by surveying field notes is calculated by:",
    options: ["Side²", "Both A and B depending on shape", "½ × Base × Perpendicular height", "½ × diagonal × sum of offsets"],
    correct: 2,
    explanation: "Area of triangle = ½ × base × perpendicular height. For complex shapes, offsets and mid-ordinates are used.",
    difficulty: "easy"
  },
  {
    id: "d252l_062", subject: "da-252", lecture: "lecture-7", lectureNo: 7,
    question: "Mid-ordinate rule for area calculation uses:",
    options: ["End ordinates only", "Ordinates at mid-points of each division", "Average of end ordinates", "Diagonal lengths"],
    correct: 1,
    explanation: "Mid-ordinate rule: Area = Width of strip × sum of mid-ordinates.",
    difficulty: "medium"
  },
  {
    id: "d252l_063", subject: "da-252", lecture: "lecture-7", lectureNo: 7,
    question: "Simpson's rule for area computation requires the number of ordinates to be:",
    options: ["Odd", "Even", "At least 10", "Any number"],
    correct: 0,
    explanation: "Simpson's rule requires an odd number of ordinates (even number of equal divisions).",
    difficulty: "medium"
  },
  {
    id: "d252l_064", subject: "da-252", lecture: "lecture-7", lectureNo: 7,
    question: "Planimeter is an instrument used to:",
    options: ["Measure elevations in soil management", "Measure angles for soil fertility", "Measure areas of irregular figures on a map/plan", "Measure distances under field conditions"],
    correct: 2,
    explanation: "A planimeter (amsler or digital) traces the boundary of an irregular figure to determine its area.",
    difficulty: "medium"
  },
  {
    id: "d252l_065", subject: "da-252", lecture: "lecture-7", lectureNo: 7,
    question: "1 hectare equals:",
    options: ["10,000 m²", "100,000 m²", "100 m²", "1,000 m²"],
    correct: 0,
    explanation: "1 hectare = 10,000 m² (100 m × 100 m).",
    difficulty: "easy"
  },
  {
    id: "d252l_066", subject: "da-252", lecture: "lecture-7", lectureNo: 7,
    question: "1 acre equals approximately:",
    options: ["2,000 m²", "10,000 m²", "1,000 m²", "4,047 m²"],
    correct: 3,
    explanation: "1 acre = 4,047 m² (or 43,560 sq.ft). 1 hectare ≈ 2.47 acres.",
    difficulty: "easy"
  },
  {
    id: "d252l_067", subject: "da-252", lecture: "lecture-7", lectureNo: 7,
    question: "The trapezoidal rule for area calculation assumes:",
    options: ["Straight line between consecutive ordinates", "No variation between ordinates", "Parabolic boundary between ordinates", "Circular boundary"],
    correct: 0,
    explanation: "Trapezoidal rule assumes the boundary between adjacent ordinates is a straight line (forming trapezoids).",
    difficulty: "medium"
  },
  {
    id: "d252l_068", subject: "da-252", lecture: "lecture-7", lectureNo: 7,
    question: "Coordinates method for area calculation uses:",
    options: ["X and Y coordinates of boundary points (surveyor's formula)", "Contour data under field conditions", "Chain lengths only in soil management", "Compass bearings only for soil fertility"],
    correct: 0,
    explanation: "The coordinate method uses X, Y coordinates of vertices to compute area using the surveyor's formula.",
    difficulty: "medium"
  },

  // ── LECTURE 8: Modern Surveying and Land Records ──────────────────────────
  {
    id: "d252l_069", subject: "da-252", lecture: "lecture-8", lectureNo: 8,
    question: "GPS (Global Positioning System) in surveying provides:",
    options: ["Precise 3D position (latitude, longitude, elevation) anywhere on earth", "Elevation only in soil management in agriculture", "Magnetic bearings only under field conditions", "Distance measurement only for soil fertility"],
    correct: 0,
    explanation: "GPS uses satellite signals to provide accurate 3D positioning for surveying and mapping.",
    difficulty: "easy"
  },
  {
    id: "d252l_070", subject: "da-252", lecture: "lecture-8", lectureNo: 8,
    question: "Total Station in surveying is an electronic instrument that:",
    options: ["Measures both horizontal/vertical angles and distances simultaneously", "Measures only angles under field conditions", "Only levels the instrument", "Measures magnetic bearings in soil management"],
    correct: 0,
    explanation: "Total Station is an electronic theodolite integrated with EDM (Electronic Distance Measurement) for simultaneous angle and distance measurement.",
    difficulty: "medium"
  },
  {
    id: "d252l_071", subject: "da-252", lecture: "lecture-8", lectureNo: 8,
    question: "GIS (Geographic Information System) is used to:",
    options: ["Measure gravity for soil fertility", "Replace surveyors under field conditions", "Only store maps in soil management", "Capture, store, analyze, and display geographic/spatial data"],
    correct: 3,
    explanation: "GIS integrates hardware, software, and data to manage and analyze geographic information for decision making.",
    difficulty: "medium"
  },
  {
    id: "d252l_072", subject: "da-252", lecture: "lecture-8", lectureNo: 8,
    question: "Remote sensing in agriculture uses:",
    options: ["Satellite/aerial sensors to gather information about land features without direct contact", "Ground-based instruments only under field conditions", "Magnetic instruments in soil management in agriculture", "Chemical sensors in soil for soil fertility under field conditions"],
    correct: 0,
    explanation: "Remote sensing acquires information about earth's surface using sensors on satellites or aircraft.",
    difficulty: "medium"
  },
  {
    id: "d252l_073", subject: "da-252", lecture: "lecture-8", lectureNo: 8,
    question: "Adangal (or Pahani) is a land record document that contains:",
    options: ["Soil survey reports under field conditions", "Field-wise crop cultivation details, ownership, area, and irrigation source", "Fertilizer use data in soil management", "Village revenue maps for soil fertility"],
    correct: 1,
    explanation: "Adangal/Pahani is the annual crop register maintained by village revenue officials showing field-wise agricultural data.",
    difficulty: "medium"
  },
  {
    id: "d252l_074", subject: "da-252", lecture: "lecture-8", lectureNo: 8,
    question: "Cadastral survey is conducted for:",
    options: ["Fixing land boundaries, ownership, and area for legal/revenue purposes", "Topographic mapping under field conditions", "Soil classification only in soil management", "Weather mapping for soil fertility in agriculture"],
    correct: 0,
    explanation: "Cadastral surveys determine land ownership boundaries and areas for revenue and legal purposes.",
    difficulty: "medium"
  },
  {
    id: "d252l_075", subject: "da-252", lecture: "lecture-8", lectureNo: 8,
    question: "Drone (UAV) surveying in agriculture is used for:",
    options: ["Crop monitoring, area mapping, and precision agriculture applications", "Underground surveys under field conditions", "Weather forecasting for soil fertility", "Only entertainment in soil management"],
    correct: 0,
    explanation: "Agricultural drones equipped with cameras and sensors are used for crop health monitoring, field mapping, and precision application.",
    difficulty: "easy"
  },


  {
    id: "d252l_076", subject: "da-252", lecture: "lecture-16", lectureNo: 16,
    question: "The 'Base Period' in irrigation is defined as the time period between:",
    options: ["Canal opening to canal closure", "Sowing to harvesting of a crop", "Start of the irrigation season to end of the season", "First watering during sowing to last watering before harvesting"],
    correct: 3,
    explanation: "As per DA-252 notes: Base Period is the time period between the first watering of the crop during sowing to last watering before harvesting. It is expressed in days.",
    difficulty: "medium"
  },
  {
    id: "d252l_077", subject: "da-252", lecture: "lecture-16", lectureNo: 16,
    question: "'Delta' in irrigation terminology refers to:",
    options: ["Total area irrigated by one cumec in soil management", "Volume of water stored in a reservoir under field conditions", "Total depth of water required by a crop during the entire base period", "Width of irrigation canal for soil fertility"],
    correct: 2,
    explanation: "As per DA-252 notes: Delta is the total depth of water required by a crop during its entire base period. Formula: Delta (Δ) = Volume of water / Total irrigated area.",
    difficulty: "medium"
  },
  {
    id: "d252l_078", subject: "da-252", lecture: "lecture-16", lectureNo: 16,
    question: "The relationship between Delta (Δ), Duty (D) and Base Period (B) is:",
    options: ["Delta = D/(8.64 x B)", "Delta = D x B", "Delta = 8.64 x B/D meters", "Delta = B/D x 10"],
    correct: 2,
    explanation: "As per DA-252 notes: Delta = 8.64B/D meters, where B is base period in days and D is duty in ha/cumec.",
    difficulty: "hard"
  },
  {
    id: "d252l_079", subject: "da-252", lecture: "lecture-15", lectureNo: 15,
    question: "The process of soil erosion by wind that accounts for 50 to 70% of total wind erosion movement is:",
    options: ["Surface creep", "Suspension", "Saltation", "Deflation"],
    correct: 2,
    explanation: "As per DA-252 notes: Saltation (short bounces/jumps of soil particles along ground surface) accounts for 50 to 70% of total movement in wind erosion. Suspension accounts for up to 15%.",
    difficulty: "medium"
  },
  {
    id: "d252l_080", subject: "da-252", lecture: "lecture-15", lectureNo: 15,
    question: "The minimum wind velocity at a height of 30.5 cm necessary for initiating movement of most erodible soil particles (0.1 mm diameter) is approximately:",
    options: ["35 km/hr", "25 km/hr", "16 km/hr", "8 km/hr"],
    correct: 2,
    explanation: "As per DA-252 notes: Minimum wind velocity necessary for initiating movement of most erodible soil particles (about 0.1 mm diameter) is about 16 km/hr at height of 30.5 cm.",
    difficulty: "hard"
  },
  {
    id: "d252l_081", subject: "da-252", lecture: "lecture-18", lectureNo: 18,
    question: "Irrigation projects with Culturable Command Area (CCA) between 2000 to 10,000 ha are classified as:",
    options: ["Minor irrigation projects", "Medium irrigation projects", "Micro irrigation projects", "Major irrigation projects"],
    correct: 1,
    explanation: "As per DA-252 notes: Medium irrigation projects have CCA between 2000 to 10,000 ha. Major: > 10,000 ha. Minor: < 2,000 ha.",
    difficulty: "easy"
  },
  {
    id: "d252l_082", subject: "da-252", lecture: "lecture-18", lectureNo: 18,
    question: "The Check Basin method of surface irrigation is most commonly used for which crops?",
    options: ["Rice, sugarcane and maize", "Cotton, potato and citrus", "Wheat, barley and berseem", "Groundnut, finger millet, sorghum and vegetables"],
    correct: 3,
    explanation: "As per DA-252 notes: Check basin method is most commonly used for irrigating crops like groundnut, finger millet, sorghum and vegetable crops. Also used for leaching salts in saline soil reclamation.",
    difficulty: "medium"
  },
  {
    id: "d252l_083", subject: "da-252", lecture: "lecture-18", lectureNo: 18,
    question: "The Border Strip method of irrigation is suitable for which crops?",
    options: ["Close growing crops like wheat, barley, groundnut and berseem", "Only rice fields under field conditions", "Sparsely grown orchard crops in soil management", "Potato, sugarcane, maize and cotton for soil fertility"],
    correct: 0,
    explanation: "As per DA-252 notes: Border strip method is suitable for irrigating close growing crops such as wheat, barley, groundnut, bajra and berseem. Ring basin method is for orchard crops.",
    difficulty: "medium"
  },
  {
    id: "d252l_084", subject: "da-252", lecture: "lecture-19", lectureNo: 19,
    question: "In sprinkler irrigation, water is conveyed under which pressure range?",
    options: ["2 to 5 kg/cm2", "0.5 to 1 kg/cm2", "7 to 10 kg/cm2", "10 to 15 kg/cm2"],
    correct: 0,
    explanation: "As per DA-252 notes: In sprinkler irrigation, water is conveyed under pressure of 2 to 5 kg/cm2 developed by a pump through a network of pipes to laterals and sprinkler nozzles.",
    difficulty: "medium"
  },
  {
    id: "d252l_085", subject: "da-252", lecture: "lecture-19", lectureNo: 19,
    question: "A major limitation of sprinkler irrigation is:",
    options: ["Uneven water distribution due to high wind velocities", "Cannot be used on undulated lands", "Suitable only for paddy fields", "Cannot be used with fertilizers"],
    correct: 0,
    explanation: "As per DA-252 notes: Uneven distribution of water due to high wind velocities (particularly during summer) is a major limitation of sprinkler irrigation.",
    difficulty: "medium"
  },
  {
    id: "d252l_086", subject: "da-252", lecture: "lecture-20", lectureNo: 20,
    question: "Drip irrigation technology was first patented by Symcha Blass in:",
    options: ["1945", "1955", "1964", "1972"],
    correct: 2,
    explanation: "As per DA-252 notes: Current drip irrigation technology dates back to the work of Symcha Blass (1964), based on his observation that a large tree near a leaking faucet showed more vigorous growth.",
    difficulty: "medium"
  },
  {
    id: "d252l_087", subject: "da-252", lecture: "lecture-20", lectureNo: 20,
    question: "In surface drip irrigation, the discharge rate for single outlet emitters is:",
    options: ["Less than 8 L/h", "Less than 16 L/h", "Less than 2 L/h", "Less than 4 L/h"],
    correct: 0,
    explanation: "As per DA-252 notes: Surface drip irrigation applies water through emitters with discharge rate for point-source (single outlet) emitters less than 8 L/h; line-source emitters less than 4 L/h.",
    difficulty: "hard"
  },
  {
    id: "d252l_088", subject: "da-252", lecture: "lecture-21", lectureNo: 21,
    question: "Priming in a centrifugal pump refers to:",
    options: ["Adding lubricant to the impeller bearings in soil management", "Filling water in the suction pipe to remove air before starting", "Testing the pump discharge capacity under field conditions", "Starting the pump without water for soil fertility"],
    correct: 1,
    explanation: "As per DA-252 notes: Priming is the process of removing air from pump casing and suction pipe by filling water. The centrifugal pump will not work if there is any air left in the suction pipe.",
    difficulty: "easy"
  },
  {
    id: "d252l_089", subject: "da-252", lecture: "lecture-21", lectureNo: 21,
    question: "Assertion (A): A closed impeller centrifugal pump is most suitable for handling clear irrigation water.\nReason (R): Closed impellers have shrouds on both sides of vanes and are suitable for non-viscous liquids free from foreign materials.",
    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true but R is NOT the correct explanation of A", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "As per DA-252 notes: All ordinary centrifugal pumps used to pump clear irrigation water have closed impellers. Closed impeller has side walls on both sides and is suitable for non-viscous liquids free from foreign materials.",
    difficulty: "medium"
  },
  {
    id: "d252l_090", subject: "da-252", lecture: "lecture-22", lectureNo: 22,
    question: "Assertion (A): Submersible pumps can be used in very deep tube wells where a long shaft would not be practical.\nReason (R): In submersible pumps, both motor and pump are installed inside the well, fully submerged.",
    options: ["A is true but R is false", "Both A and R are true but R is NOT the correct explanation of A", "Both A and R are true and R is the correct explanation of A", "A is false but R is true"],
    correct: 2,
    explanation: "As per DA-252 notes: The principal advantage of submersible pump is that it can be used in very deep tube wells. Both pump and motor operate entirely submerged, making a long shaft unnecessary.",
    difficulty: "medium"
  },
  {
    id: "d252l_091", subject: "da-252", lecture: "lecture-15", lectureNo: 15,
    question: "Match the following forms of water erosion:\n     Column-I (Type)       |  Column-II (Description)                     |  Column-III (Stage)\nA.  Sheet erosion        |  1.  Uniform removal of surface soil in thin layers |  i.   First/least conspicuous\nB.  Rill erosion         |  2.  Small channels removable by tillage           |  ii.  Second stage\nC.  Gully erosion        |  3.  Deep channels that cannot be tilled           |  iii. Advanced stage\nD.  Ravine              |  4.  Deep wide manifestation in alluvial soils      |  iv.  Most advanced",
    options: ["A-3-iii, B-1-i, C-2-ii,  D-4-iv", "A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-2-i,  B-1-ii,  C-4-iii,  D-3-iv", "A-1-ii, B-2-i,  C-4-iv,  D-3-iii"],
    correct: 1,
    explanation: "As per DA-252 notes: Sheet erosion (first stage) - uniform thin layer removal; Rill erosion (second stage) - small channels removable by tillage; Gully erosion (advanced stage) - deep channels; Ravines (most advanced) - deep wide gullies in alluvial soils.",
    difficulty: "medium"
  },
  {
    id: "d252l_092", subject: "da-252", lecture: "lecture-19", lectureNo: 19,
    question: "Match the following surface irrigation methods with their suitable conditions:\n     Column-I (Method)     |  Column-II (Crop type)                |  Column-III (Key feature)\nA.  Check basin          |  1.  Groundnut, vegetables            |  i.   Square/rectangular plots\nB.  Ring basin           |  2.  Orchard/cucurbit crops           |  ii.  Circular bund per plant\nC.  Border strip         |  3.  Wheat, barley, berseem           |  iii. Long parallel strips\nD.  Furrow method        |  4.  Potato, sugarcane, maize         |  iv.  Ridges and furrows",
    options: ["A-2-ii, B-1-i,  C-4-iv,  D-3-iii", "A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-1-iii, B-2-i, C-3-ii,  D-4-iv", "A-4-iv, B-3-iii, C-2-ii, D-1-i"],
    correct: 1,
    explanation: "As per DA-252 notes: Check basin (square/rectangular plots) for groundnut/vegetables; Ring basin (circular bund) for orchards/cucurbits; Border strip (long parallel strips) for wheat/barley; Furrow method (ridges and furrows) for potato/sugarcane/maize.",
    difficulty: "medium"
  },
  {
    id: "d252l_093", subject: "da-252", lecture: "lecture-18", lectureNo: 18,
    question: "Match the following irrigation types with their description:\n     Column-I (Type)          |  Column-II (Definition)               |  Column-III (Energy source)\nA.  Flow irrigation          |  1.  Water flows by gravity from canal  |  i.   No lifting needed\nB.  Lift irrigation          |  2.  Water must be lifted before use    |  ii.  Pump required\nC.  Sub-surface irrigation   |  3.  Applied below soil surface         |  iii. Capillary action\nD.  Wild flooding            |  4.  No bunds, abundant water           |  iv.  Gravity, uncontrolled",
    options: ["A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-1-ii, B-2-i,  C-3-iv,  D-4-iii", "A-2-ii, B-1-i,  C-4-iv,  D-3-iii", "A-3-i,  B-4-ii,  C-1-iii,  D-2-iv"],
    correct: 0,
    explanation: "As per DA-252 notes: Flow irrigation - water flows by gravity from canal (no lifting); Lift irrigation - water must be lifted by pump; Sub-surface irrigation - applied below soil surface using capillary action; Wild flooding - uncontrolled, no bunds.",
    difficulty: "medium"
  },
  {
    id: "d252l_094", subject: "da-252", lecture: "lecture-16", lectureNo: 16,
    question: "Duty of irrigation water increases as one moves downstream from the head of the main canal because:",
    options: ["Crops downstream need less water", "More water is available downstream", "Transmission losses in channels reduce the water volume", "Transmission losses reduce effective delivery"],
    correct: 2,
    explanation: "As per DA-252 notes: Duty varies from point to point. It increases as one moves downstream from head of main canal to head of branches due to transmission losses in channels (water lost in transit reduces effective supply).",
    difficulty: "hard"
  },
  {
    id: "d252l_095", subject: "da-252", lecture: "lecture-20", lectureNo: 20,
    question: "In drip irrigation, screen filter aperture size should be between:",
    options: ["Equal to the orifice size", "1/3 to 1/5 of orifice size of emission device", "1/2 to 1/3 of orifice size of emission device", "1/7 to 1/10 of orifice size of emission device"],
    correct: 3,
    explanation: "As per DA-252 notes: The aperture size of the screen filter opening should be between 1/7th and 1/10th of the orifice size of the emission device to properly filter impurities.",
    difficulty: "hard"
  },
  {
    id: "d252l_096", subject: "da-252", lecture: "lecture-21", lectureNo: 21,
    question: "An open impeller centrifugal pump is most suitable for:",
    options: ["High-pressure deep well applications for soil fertility", "Pumping clear irrigation water under field conditions", "Pumping viscous liquids like molasses in soil management", "Pumping water mixed with sand, gravel and other solid materials"],
    correct: 3,
    explanation: "As per DA-252 notes: Open impeller (no side wall/shroud) is used to handle water mixed with sand, gravel, clay, pebbles and other solid materials. It is made of forged steel but has a short life. Suitable for dredging works.",
    difficulty: "medium"
  },
  {
    id: "d252l_097", subject: "da-252", lecture: "lecture-15", lectureNo: 15,
    question: "In wind erosion, 'Surface creep' involves movement of soil particles of diameter:",
    options: ["0.1 to 0.5 mm", "Greater than 2.0 mm", "Less than 0.1 mm", "0.5 to 2.0 mm"],
    correct: 3,
    explanation: "As per DA-252 notes: Surface creep involves rolling and sliding of coarse particles 0.5 to 2.0 mm in diameter along ground surface due to impact of descending particles in saltation. Accounts for 5-25% of total movement.",
    difficulty: "hard"
  },
  {
    id: "d252l_098", subject: "da-252", lecture: "lecture-18", lectureNo: 18,
    question: "The Furrow method of irrigation is commonly used for which crops?",
    options: ["Wheat, barley, groundnut and berseem", "Potato, sugarcane, maize, cotton, melons and vegetables", "Only paddy fields", "Groundnut, finger millet and sorghum"],
    correct: 1,
    explanation: "As per DA-252 notes: Furrow method is commonly used for irrigating crops like potato, sugarcane, maize, cotton, melons, sugar beets and vegetables like lettuce.",
    difficulty: "easy"
  },
  {
    id: "d252l_099", subject: "da-252", lecture: "lecture-20", lectureNo: 20,
    question: "The largest area under drip irrigation globally (as of 2008 data) is found in which two countries?",
    options: ["Australia and South Africa", "China and Brazil under field conditions", "USA and Spain (1.5 million ha each)", "Israel and India in soil management"],
    correct: 2,
    explanation: "As per DA-252 notes: At present (2008 data), the largest area under drip irrigation is in USA and Spain (1.5 million ha each), followed by India (1.43 million ha). Total world coverage increased from 4000 ha in 1972 to over 8 million ha in 2008.",
    difficulty: "medium"
  },
  {
    id: "d252l_100", subject: "da-252", lecture: "lecture-22", lectureNo: 22,
    question: "A key advantage of submersible pumps over centrifugal pumps is that:",
    options: ["They can be used in very deep tube wells where a long shaft is impractical", "They do not require any power source in soil management in agriculture", "They are suitable only for shallow wells for soil fertility under field conditions", "They are cheaper to install under field conditions"],
    correct: 0,
    explanation: "As per DA-252 notes: The principal advantage of submersible pump is it can be used in very deep tube wells where a long shaft would not be practical. It also has special advantage where theft is a problem since it has no above-ground working parts.",
    difficulty: "easy"
  },


  {
    id: "d252x_001",
    subject: "da-252",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Surveying is defined as the art of determination of which of the following on or near the surface of the earth?",
    options: ["Only vertical distances in soil management in agriculture", "Horizontal distances, differences in elevation, directions, angles, locations, areas and volumes", "Only areas and volumes under field conditions", "Only horizontal distances for soil fertility under field conditions"],
    correct: 1,
    explanation: "Surveying involves measurement and recording of horizontal distances, differences in elevation, directions, angles, locations, areas and volumes on or near the earth's surface."
  },
  {
    id: "d252x_002",
    subject: "da-252",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Which type of survey takes into account the curvature of the earth?",
    options: ["Compass surveying", "Chain surveying", "Geodetic surveying", "Plane surveying"],
    correct: 2,
    explanation: "Geodetic surveying (also called trigonometrical surveying) takes into account the curvature of the earth as it covers large distances and areas."
  },
  {
    id: "d252x_003",
    subject: "da-252",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "In plane surveying, the earth's surface is considered as:",
    options: ["A curved surface", "A plane", "An ellipsoid", "A sphere"],
    correct: 1,
    explanation: "In plane surveying, the earth's surface is considered as a plane and the curvature of the earth is not taken into account, as the surveys extend only to small areas."
  },
  {
    id: "d252x_004",
    subject: "da-252",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Which classification of surveys is based on the nature of the field of survey?",
    options: ["Archaeological, geological and mine surveys", "Chain, theodolite and compass surveys", "Triangulation and traverse surveys", "Land, marine and astronomical surveys"],
    correct: 3,
    explanation: "Classification based on the nature of the field includes: Land Surveys, Marine or Navigation Surveys, and Astronomical Surveys."
  },
  {
    id: "d252x_005",
    subject: "da-252",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Agricultural surveying is a form of which type of surveying?",
    options: ["Simple plane surveying", "Marine surveying", "Astronomical surveying", "Geodetic surveying"],
    correct: 0,
    explanation: "Agricultural surveying is a simple plane surveying that includes laying out contour lines, terrace lines, drainage lines, and computing field and farm areas."
  },
  {
    id: "d252x_006",
    subject: "da-252",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Which of the following is the most accurate method of measuring distance in surveying?",
    options: ["Chaining", "Odometer method", "Judging distance", "Pacing"],
    correct: 0,
    explanation: "Chaining (measuring distance with chain or tape) is the most accurate of all direct methods of measuring distance and is commonly used in surveying."
  },
  {
    id: "d252x_007",
    subject: "da-252",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "A passometer is a watch-like instrument used in surveying primarily to:",
    options: ["Record the number of paces automatically", "Measure vertical distances", "Measure number of wheel revolutions", "Set right angles in the field"],
    correct: 0,
    explanation: "The passometer is carried in a person's pocket or tied on the leg. It records paces automatically, overcoming the monotony and strain of counting manually."
  },
  {
    id: "d252x_008",
    subject: "da-252",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "An odometer in surveying measures:",
    options: ["The number of paces of the surveyor", "The vertical height of terrain", "The number of revolutions of a wheel", "The horizontal angle between two lines"],
    correct: 2,
    explanation: "An odometer measures the number of revolutions of a wheel. The number of revolutions multiplied by the circumference of the wheel gives the distance covered."
  },
  {
    id: "d252x_009",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "A metric chain as per IS 1492-1956 is made in lengths of:",
    options: ["20 and 30 meters", "30 and 50 meters", "50 and 100 meters", "10 and 20 meters"],
    correct: 0,
    explanation: "IS 1492-1956 specifies that chains are made in lengths of 20 and 30 meters. A 20m chain has 100 links and a 30m chain has 150 links."
  },
  {
    id: "d252x_010",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The length of each link in a 20m metric chain is:",
    options: ["0.3 m (30 cm)", "0.1 m (10 cm)", "0.2 m (20 cm)", "0.5 m (50 cm)"],
    correct: 2,
    explanation: "In a 20m metric chain with 100 links, the length of each link is 0.2 m (20 cm). A 30m chain has 150 links with the same 0.2m link length."
  },
  {
    id: "d252x_011",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Gunter's chain is also called:",
    options: ["Steel band", "Surveyor's chain", "Engineer's chain", "Revenue chain"],
    correct: 1,
    explanation: "Gunter's chain is also called the surveyor's chain. It is 66 ft long and divided into 100 links. It is convenient for measuring distances in miles and furlongs."
  },
  {
    id: "d252x_012",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The Gunter's chain is used in which area measurement where 10 square Gunter's chains equal one acre?",
    options: ["Cadastral survey", "Mile-furlong-acre system", "Metric system", "Engineering survey"],
    correct: 1,
    explanation: "Gunter's chain (66 ft, 100 links) has a simple relation to the mile (80 chains = 1 mile, 10 chains = 1 furlong) and acre (10 square chains = 1 acre)."
  },
  {
    id: "d252x_013",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The Revenue chain is commonly used for measuring fields in cadastral survey. Its length is:",
    options: ["100 ft with 100 links", "66 ft with 100 links", "20 m with 100 links", "33 ft with 16 links"],
    correct: 3,
    explanation: "The Revenue chain is 33 ft long and divided into 16 links. It is commonly used for measuring fields in cadastral survey."
  },
  {
    id: "d252x_014",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The Engineer's chain is used on all engineering surveys and has dimensions of:",
    options: ["66 ft, 100 links", "20 m, 100 links", "100 ft, 100 links", "33 ft, 16 links"],
    correct: 2,
    explanation: "The Engineer's chain is 100 ft long and divided into 100 links (each link = 1 ft). Distances measured with it are recorded in feet and decimals."
  },
  {
    id: "d252x_015",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The invar tape used for high-precision surveys is made of an alloy of:",
    options: ["Stainless steel (90%) and chromium (10%)", "Steel (64%) and nickel (36%)", "Steel (80%) and copper (20%)", "Iron (70%) and zinc (30%)"],
    correct: 1,
    explanation: "The invar tape is made of an alloy of steel (64%) and nickel (36%). It has a very low coefficient of thermal expansion (0.6×10⁻⁴ per °C) making it ideal for precision work."
  },
  {
    id: "d252x_016",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Ranging rods are made in two sizes, namely:",
    options: ["2 m and 3 m", "3 m and 5 m", "5 m and 10 m", "1 m and 2 m"],
    correct: 0,
    explanation: "Ranging rods are made in two sizes: 2 m and 3 m. They are divided into equal parts of 0.2 m and painted alternately red and white (or black and white) to make them visible."
  },
  {
    id: "d252x_017",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Arrows (chain pins) in chain surveying are used to:",
    options: ["Mark contour lines in soil management", "Mark right angles under field conditions", "Mark the end of each chain length during chaining", "Mark the position of the compass"],
    correct: 2,
    explanation: "Arrows (chain pins) are used to mark the end of each chain during the process of chaining. Each chain comes with 10 arrows, made of 4 mm (8 s.w.g.) metallic wire, 400 mm long."
  },
  {
    id: "d252x_018",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "How many arrows accompany each chain in chain surveying?",
    options: ["5", "12", "10", "8"],
    correct: 2,
    explanation: "Accompanying each chain are 10 arrows (also called marking or chaining pins). They are made of 4 mm diameter metallic wire, 400 mm in length."
  },
  {
    id: "d252x_019",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "A plumb bob in surveying is used primarily to:",
    options: ["Range lines over obstacles in soil management", "Measure angles between lines under field conditions", "Measure offsets from the chain line", "Locate points directly below or above another point"],
    correct: 3,
    explanation: "A plumb bob consists of a metal weight (brass) with a pointed end suspended by a string. It is used to locate points directly below or above another point and for centering instruments."
  },
  {
    id: "d252x_020",
    subject: "da-252",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "A cross-staff in chain surveying is used for:",
    options: ["Measuring angles between two chain lines", "Measuring the length of chain lines", "Recording the number of chains measured", "Setting out right angles to a chain line"],
    correct: 3,
    explanation: "A cross-staff is used for setting out right angles (perpendicular offsets) to a chain line. Types include open cross-staff and French cross-staff."
  },
  {
    id: "d252x_021",
    subject: "da-252",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "An optical square is a surveying instrument used for:",
    options: ["Measuring vertical angles in soil management", "Measuring distances by optical means under field conditions", "Drawing plans in the office for soil fertility", "Setting out right angles more precisely than a cross-staff"],
    correct: 3,
    explanation: "An optical square is used for setting out right angles to a chain line. It is more precise than a cross-staff and uses the principle of double reflection by two mirrors at 45° to each other."
  },
  {
    id: "d252x_022",
    subject: "da-252",
    lecture: "lecture-12",
    lectureNo: 12,
    question: "The prismatic compass in surveying is used for measuring:",
    options: ["Vertical angles and elevations", "Distance along a chain line", "Magnetic bearings of survey lines", "Right-angle offsets"],
    correct: 2,
    explanation: "The prismatic compass is used for measuring the magnetic bearings of survey lines. It allows the surveyor to read the bearing directly through a prism while sighting the object."
  },
  {
    id: "d252x_023",
    subject: "da-252",
    lecture: "lecture-13",
    lectureNo: 13,
    question: "In compass surveying, the bearing of a line measured from the north in a clockwise direction is called:",
    options: ["Whole circle bearing", "Fore bearing", "Back bearing", "Reduced bearing"],
    correct: 0,
    explanation: "A whole circle bearing (WCB) is the angle measured from the North direction in a clockwise direction, ranging from 0° to 360°. Reduced bearing is measured from N or S towards E or W."
  },
  {
    id: "d252x_024",
    subject: "da-252",
    lecture: "lecture-13",
    lectureNo: 13,
    question: "The fore bearing and back bearing of a line differ by:",
    options: ["180°", "360°", "45°", "90°"],
    correct: 0,
    explanation: "The back bearing of a line differs from the fore bearing by exactly 180°. If the fore bearing is θ, then the back bearing is (θ + 180°) if θ < 180°, or (θ - 180°) if θ > 180°."
  },
  {
    id: "d252x_025",
    subject: "da-252",
    lecture: "lecture-15",
    lectureNo: 15,
    question: "Soil and water conservation practices are primarily aimed at:",
    options: ["Increasing groundwater extraction", "Preventing erosion and conserving moisture for sustainable agriculture", "Increasing rainfall in dry areas", "Draining excess water from waterlogged areas only"],
    correct: 1,
    explanation: "Soil and water conservation aims to prevent soil erosion, conserve moisture, maintain soil fertility, and ensure sustainable agricultural productivity."
  },
  {
    id: "d252x_026",
    subject: "da-252",
    lecture: "lecture-18",
    lectureNo: 18,
    question: "Which irrigation method involves applying water directly to the soil surface in channels or borders?",
    options: ["Sprinkler irrigation", "Surface irrigation", "Sub-surface irrigation", "Drip irrigation"],
    correct: 1,
    explanation: "Surface irrigation involves applying water directly to the soil surface through channels, borders, basins, or furrows. It is the most traditional and widely used irrigation method."
  },
  {
    id: "d252x_027",
    subject: "da-252",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "In sprinkler irrigation, water is applied in the form of drops of size:",
    options: ["10 to 20 mm", "4 to 10 mm", "0.5 to 4 mm", "0.05 to 0.25 mm"],
    correct: 2,
    explanation: "In sprinkler irrigation, water is applied in the form of drops of 0.5 to 4 mm size, similar to rainfall. The operating pressure is typically 2 to 5 kg/cm²."
  },
  {
    id: "d252x_028",
    subject: "da-252",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "The operating pressure required for sprinkler irrigation systems is typically:",
    options: ["0.2 to 0.5 kg/cm²", "2 to 5 kg/cm²", "10 to 15 kg/cm²", "0.5 to 1.0 kg/cm²"],
    correct: 1,
    explanation: "Sprinkler irrigation systems require an operating pressure of 2 to 5 kg/cm² to propel water through nozzles and form the fine droplet spray pattern."
  },
  {
    id: "d252x_029",
    subject: "da-252",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "Which of the following is NOT a component of a sprinkler irrigation system?",
    options: ["Main line and sub-main line", "Pump", "Emitters and drippers", "Lateral pipes with sprinkler nozzles"],
    correct: 2,
    explanation: "Emitters and drippers are components of drip irrigation, not sprinkler irrigation. Sprinkler systems consist of pump, main line, sub-main line, lateral pipes, and sprinkler nozzles."
  },
  {
    id: "d252x_030",
    subject: "da-252",
    lecture: "lecture-20",
    lectureNo: 20,
    question: "Drip irrigation was developed by:",
    options: ["Dr. M.S. Swaminathan in 1970", "Dr. Norman Borlaug in 1960", "Symcha Blass in 1964", "William Shockley in 1955"],
    correct: 2,
    explanation: "Drip irrigation (trickle irrigation) was developed by Symcha Blass in 1964. It involves applying water directly to the root zone through emitters at low pressure."
  },
  {
    id: "d252x_031",
    subject: "da-252",
    lecture: "lecture-20",
    lectureNo: 20,
    question: "Which two countries have the largest area under drip irrigation in the world at approximately 1.5 million hectares each?",
    options: ["China and India", "Brazil and Mexico", "USA and Spain", "Israel and Australia"],
    correct: 2,
    explanation: "USA and Spain each have approximately 1.5 million hectares under drip irrigation, making them the top two countries globally. India has about 1.43 million hectares."
  },
  {
    id: "d252x_032",
    subject: "da-252",
    lecture: "lecture-20",
    lectureNo: 20,
    question: "Online pressure-compensating emitters in drip irrigation are designed to:",
    options: ["Filter sediment from irrigation water", "Increase water pressure in the main line", "Deliver a constant flow rate regardless of pressure variations", "Rotate to distribute water over a wide area"],
    correct: 2,
    explanation: "Online pressure-compensating emitters deliver a constant flow rate regardless of pressure variations along the lateral line, ensuring uniform water distribution."
  },
  {
    id: "d252x_033",
    subject: "da-252",
    lecture: "lecture-21",
    lectureNo: 21,
    question: "The working principle of a centrifugal pump involves:",
    options: ["Gravity flow from an elevated tank", "Reciprocating pistons creating positive displacement", "Air pressure forcing water upward", "Impeller rotation imparting kinetic energy to water"],
    correct: 3,
    explanation: "A centrifugal pump works by an impeller rotating inside a casing. The impeller imparts kinetic energy to water, which is then converted to pressure energy in the casing."
  },
  {
    id: "d252x_034",
    subject: "da-252",
    lecture: "lecture-21",
    lectureNo: 21,
    question: "Which type of centrifugal pump impeller is most suitable for pumping water containing sand and gravel (dredging)?",
    options: ["Open impeller", "Semi-open impeller", "Closed impeller", "Mixed-flow impeller"],
    correct: 0,
    explanation: "Open impellers are most suitable for pumping water containing sand, gravel, or debris (dredging). Closed impellers are used for clear water, and semi-open for moderately dirty water."
  },
  {
    id: "d252x_035",
    subject: "da-252",
    lecture: "lecture-21",
    lectureNo: 21,
    question: "Priming of a centrifugal pump refers to:",
    options: ["Adjusting the impeller speed", "Connecting the discharge pipe to the motor", "Filling the pump casing with water before starting", "Adding oil to the pump bearings"],
    correct: 2,
    explanation: "Priming involves filling the pump casing and suction pipe with water before starting. Centrifugal pumps cannot self-prime (unlike positive displacement pumps) and require priming."
  },
  {
    id: "d252x_036",
    subject: "da-252",
    lecture: "lecture-22",
    lectureNo: 22,
    question: "In a submersible pump, both the motor and pump are:",
    options: ["Located in a separate pump house near the well", "Connected by a long shaft from the surface", "Submerged in the water being pumped", "Placed above ground level on a platform"],
    correct: 2,
    explanation: "In a submersible pump, both the motor and the pump are submerged in the water being pumped. This eliminates priming problems and makes it suitable for deep tube wells."
  },
  {
    id: "d252x_037",
    subject: "da-252",
    lecture: "lecture-22",
    lectureNo: 22,
    question: "The minimum diameter of a tube well required to accommodate a submersible pump is:",
    options: ["50 mm", "75 mm", "150 mm", "100 mm"],
    correct: 3,
    explanation: "Submersible pumps require a minimum tube well diameter of 100 mm (10 cm) to be accommodated. They are suitable for deep tube wells and high lift applications."
  },
  {
    id: "d252x_038",
    subject: "da-252",
    lecture: "lecture-26",
    lectureNo: 26,
    question: "Which of the following is an advantage of greenhouse cultivation?",
    options: ["Only one crop can be grown per year", "Lower initial investment compared to open field", "4 to 5 crops can be grown per year", "Requires no environmental control systems"],
    correct: 2,
    explanation: "Greenhouse cultivation allows 4 to 5 crops per year (compared to 1-2 in open field), produces superior quality produce, enables pest control, and allows computer automation."
  },
  {
    id: "d252x_039",
    subject: "da-252",
    lecture: "lecture-27",
    lectureNo: 27,
    question: "A lean-to greenhouse is a type classified based on:",
    options: ["Shape of the structure", "Size of the greenhouse", "Type of crops grown", "Covering material used"],
    correct: 0,
    explanation: "Lean-to, even span, uneven span, ridge-and-furrow, saw-tooth, and quonset greenhouses are all classified based on the shape of the structure."
  },
  {
    id: "d252x_040",
    subject: "da-252",
    lecture: "lecture-27",
    lectureNo: 27,
    question: "Which greenhouse type is formed by joining two or more even span or uneven span greenhouses along their sides?",
    options: ["Ridge-and-furrow (Gutter-connected)", "Lean-to", "Quonset", "Saw-tooth"],
    correct: 0,
    explanation: "Ridge-and-furrow (also called gutter-connected) greenhouses are formed by joining two or more even span or uneven span units along their sides, sharing gutters/eaves for drainage."
  },
  {
    id: "d252x_041",
    subject: "da-252",
    lecture: "lecture-28",
    lectureNo: 28,
    question: "The ambient concentration of carbon dioxide (CO₂) in the atmosphere is approximately:",
    options: ["500 ppm", "345 ppm", "280 ppm", "200 ppm"],
    correct: 1,
    explanation: "The ambient (outside) concentration of CO₂ in the atmosphere is approximately 345 ppm. During active photosynthesis, plants draw greenhouse CO₂ down to below 200 ppm."
  },
  {
    id: "d252x_042",
    subject: "da-252",
    lecture: "lecture-30",
    lectureNo: 30,
    question: "The optimal CO₂ enrichment level in greenhouses for maximum plant growth is:",
    options: ["345 ppm (ambient level)", "500-700 ppm", "2000-3000 ppm", "1000-1200 ppm"],
    correct: 3,
    explanation: "The optimal CO₂ enrichment level for greenhouse plant growth is 1000-1200 ppm. Plants can draw CO₂ down below 200 ppm during photosynthesis, so enrichment boosts yield."
  },
  {
    id: "d252x_043",
    subject: "da-252",
    lecture: "lecture-29",
    lectureNo: 29,
    question: "The acceptable range of relative humidity inside a greenhouse for most crops is:",
    options: ["95-100%", "80-95%", "50-80%", "20-40%"],
    correct: 2,
    explanation: "The acceptable range of relative humidity (RH) inside a greenhouse is 50-80%. Too high RH promotes fungal diseases; too low increases plant water stress."
  },
  {
    id: "d252x_044",
    subject: "da-252",
    lecture: "lecture-29",
    lectureNo: 29,
    question: "Light intensity in greenhouse horticulture is measured in:",
    options: ["Candela", "Foot-candles per hour", "Watts per square meter", "Lux"],
    correct: 3,
    explanation: "Light intensity in greenhouse horticulture is measured in Lux. Most greenhouse crops saturate at approximately 32,200 Lux (32.2 klux). Visible light for photosynthesis spans 400-700 nm."
  },
  {
    id: "d252x_045",
    subject: "da-252",
    lecture: "lecture-29",
    lectureNo: 29,
    question: "The wavelength range of visible light used in photosynthesis is:",
    options: ["1000-1200 nm", "700-1000 nm", "200-400 nm", "400-700 nm"],
    correct: 3,
    explanation: "Photosynthetically active radiation (PAR) spans the visible light range of 400-700 nm (nanometers). Blue light (400-500 nm) and red light (600-700 nm) are most effective."
  },
  {
    id: "d252x_046",
    subject: "da-252",
    lecture: "lecture-29",
    lectureNo: 29,
    question: "Which greenhouse crop requires the highest night temperature of approximately 21-22°C?",
    options: ["Carnation", "African violet", "Primula and Mathiola", "Chrysanthemum and Poinsettia"],
    correct: 1,
    explanation: "African violet requires the highest night temperature of 21-22°C. In contrast: Primula/Mathiola need 7°C, Carnation 10°C, Rose 16°C, and Chrysanthemum/Poinsettia 17-18°C."
  },
  {
    id: "d252x_047",
    subject: "da-252",
    lecture: "lecture-29",
    lectureNo: 29,
    question: "Which greenhouse crop requires the lowest night temperature of approximately 7°C?",
    options: ["Carnation", "Primula and Mathiola", "Rose", "African violet"],
    correct: 1,
    explanation: "Primula and Mathiola require the lowest night temperature of approximately 7°C. Most other crops require higher temperatures (carnation 10°C, rose 16°C, chrysanthemum 17-18°C)."
  },
  {
    id: "d252x_048",
    subject: "da-252",
    lecture: "lecture-30",
    lectureNo: 30,
    question: "Assertion (A): CO₂ enrichment in greenhouses significantly enhances crop yield and quality.\nReason (R): During active photosynthesis, plants can draw down greenhouse CO₂ levels to below 200 ppm, which is limiting for growth.",
    options: ["A is true but R is false", "Both A and R are true and R is the correct explanation of A", "A is false but R is true", "Both A and R are true but R is NOT the correct explanation of A"],
    correct: 1,
    explanation: "CO₂ enrichment boosts yield because plants actively deplete greenhouse CO₂ below 200 ppm (limiting level) during photosynthesis. Supplementing to 1000-1200 ppm overcomes this limitation."
  },
  {
    id: "d252x_049",
    subject: "da-252",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "Assertion (A): Sprinkler irrigation is more efficient than surface irrigation in undulating terrain.\nReason (R): Sprinkler systems distribute water uniformly regardless of land slope without requiring land leveling.",
    options: ["A is false but R is true", "A is true but R is false", "Both A and R are true but R is NOT the correct explanation of A", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "Sprinkler irrigation is efficient in undulating terrain because it distributes water uniformly without needing land leveling. Surface irrigation requires leveled land for uniform water distribution."
  },
  {
    id: "d252x_050",
    subject: "da-252",
    lecture: "lecture-21",
    lectureNo: 21,
    question: "Assertion (A): Centrifugal pumps require priming before operation.\nReason (R): Centrifugal pumps cannot develop suction lift if the casing is filled with air instead of water.",
    options: ["Both A and R are true but R is NOT the correct explanation of A", "A is false but R is true", "A is true but R is false", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "Centrifugal pumps require priming because an air-filled casing cannot develop the suction needed to lift water. The impeller must be surrounded by water to function effectively."
  },
  {
    id: "d252x_051",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Match the following chains with their lengths:\n     Column-I (Chain Type)  |  Column-II (Length)  |  Column-III (Links)\nA.  Gunter's Chain  |  1.  33 ft  |  i.  100 links\nB.  Revenue Chain  |  2.  100 ft  |  ii.  16 links\nC.  Engineer's Chain  |  3.  66 ft  |  iii.  100 links",
    options: ["A-3-iii, B-2-ii, C-1-i", "A-3-i, B-1-ii, C-2-iii", "A-1-i, B-3-ii, C-2-iii", "A-2-iii, B-1-ii, C-3-i"],
    correct: 1,
    explanation: "Gunter's Chain: 66 ft, 100 links. Revenue Chain: 33 ft, 16 links. Engineer's Chain: 100 ft, 100 links."
  },
  {
    id: "d252x_052",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Match the following tapes with their characteristics:\n     Column-I (Tape Type)  |  Column-II (Material)  |  Column-III (Use)\nA.  Cloth tape  |  1.  Steel (64%) + Nickel (36%)  |  i.  Subsidiary measurements/offsets\nB.  Invar tape  |  2.  Varnished woven linen  |  ii.  Highest precision base lines\nC.  Steel tape  |  3.  Steel ribbon/stainless steel  |  iii.  Precise measurements, checking chains",
    options: ["A-2-i, B-1-ii, C-3-iii", "A-1-ii, B-2-i, C-3-iii", "A-2-iii, B-3-ii, C-1-i", "A-3-iii, B-1-ii, C-2-i"],
    correct: 0,
    explanation: "Cloth tape: varnished linen, used for subsidiary measurements. Invar tape: steel+nickel alloy, for highest precision base line measurements. Steel tape: stainless steel, for precise work."
  },
  {
    id: "d252x_053",
    subject: "da-252",
    lecture: "lecture-27",
    lectureNo: 27,
    question: "Match the following greenhouse types with their descriptions:\n     Column-I (Type)  |  Column-II (Description)\nA.  Lean-to  |  1.  Two or more spans joined at gutters\nB.  Even span  |  2.  Built against a wall, one sloping roof\nC.  Ridge-and-furrow  |  3.  Both sides of equal pitch and width\nD.  Quonset  |  4.  Semicircular (hoop) cross-section",
    options: ["A-2, B-3, C-1, D-4", "A-1, B-2, C-3, D-4", "A-3, B-2, C-4, D-1", "A-4, B-3, C-2, D-1"],
    correct: 0,
    explanation: "Lean-to: built against a wall with one sloping roof. Even span: both sides equal pitch. Ridge-and-furrow: multiple spans joined at gutters. Quonset: semicircular hoop design."
  },
  {
    id: "d252x_054",
    subject: "da-252",
    lecture: "lecture-29",
    lectureNo: 29,
    question: "Match the following greenhouse crops with their required night temperature:\n     Column-I (Crop)  |  Column-II (Night Temp)\nA.  Carnation  |  1.  21-22°C\nB.  African violet  |  2.  16°C\nC.  Rose  |  3.  10°C\nD.  Primula  |  4.  7°C",
    options: ["A-4, B-3, C-2, D-1", "A-1, B-2, C-3, D-4", "A-2, B-1, C-4, D-3", "A-3, B-1, C-2, D-4"],
    correct: 3,
    explanation: "Carnation: 10°C. African violet: 21-22°C. Rose: 16°C. Primula: 7°C (also Mathiola). Chrysanthemum and Poinsettia: 17-18°C."
  },
  {
    id: "d252x_055",
    subject: "da-252",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Which of the following surveys uses artificial earth satellites for determining positions?",
    options: ["Geodetic surveying", "Chain surveying", "Compass surveying", "Plane surveying"],
    correct: 0,
    explanation: "Geodetic surveying uses artificial earth satellites (GPS) for determining precise positions of widely distant points on the earth's surface, taking into account earth's curvature."
  },
  {
    id: "d252x_056",
    subject: "da-252",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The pacing technique in surveying is mostly employed in:",
    options: ["Final detailed surveys", "Triangulation surveys", "Cadastral surveys", "Preliminary surveys and explorations"],
    correct: 3,
    explanation: "The pacing technique is mostly used in preliminary surveys and explorations where a quick rough survey is needed. It is not used for precise measurements."
  },
  {
    id: "d252x_057",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Which tape type should NOT be used when the ground is wet as it shrinks and stretches easily?",
    options: ["Invar tape", "Steel tape", "Metallic tape", "Cloth or linen tape"],
    correct: 3,
    explanation: "Cloth or linen tape shrinks when wet, stretches easily, and twists and tangles. It must not be wound up wet. It is only used for subsidiary measurements like offsets."
  },
  {
    id: "d252x_058",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The metallic tape is reinforced with fine brass or copper wires to:",
    options: ["Prevent stretching of fibres", "Make it electrically conductive for safety", "Increase its weight for stability", "Improve its visibility in the field"],
    correct: 0,
    explanation: "The metallic tape is made from cotton or linen reinforced with fine brass or copper wires to prevent stretching of fibres, making it better than simple linen tapes."
  },
  {
    id: "d252x_059",
    subject: "da-252",
    lecture: "lecture-22",
    lectureNo: 22,
    question: "Which advantage does a submersible pump have over a surface centrifugal pump?",
    options: ["Higher maintenance requirement under field conditions", "No need for priming as both pump and motor are submerged", "Lower initial cost in soil management in agriculture", "Suitable for very shallow wells only for soil fertility"],
    correct: 1,
    explanation: "Since both the motor and pump are submerged in the water, submersible pumps do not require priming. They are suitable for deep tube wells and have lower noise levels."
  },
  {
    id: "d252x_060",
    subject: "da-252",
    lecture: "lecture-20",
    lectureNo: 20,
    question: "In drip irrigation, in-line drippers are different from online drippers in that they are:",
    options: ["Integrated directly within the lateral tube", "Placed above the lateral pipe", "Used only in high-pressure systems", "Installed at the end of the lateral line"],
    correct: 0,
    explanation: "In-line drippers are integrated directly within (inside) the lateral tube during manufacturing. Online drippers are inserted into holes punched in the lateral pipe surface."
  },
  {
    id: "d252x_061",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Tallies in a metric chain are fixed at every:",
    options: ["2 metre", "1 metre", "10 metre", "5 metre"],
    correct: 3,
    explanation: "In metric chains, tallies are fixed at every 5-metre length to enable quick reading of fractions. Small brass rings are provided at every metre length except where tallies are attached."
  },
  {
    id: "d252x_062",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Ranging rods are painted alternately to improve visibility. The typical colour combinations used are:",
    options: ["Orange and purple, or blue and white under field conditions", "Silver and gold, or red and yellow in soil management", "Red and white, or red, white and black, or black and white", "Blue and green, or yellow and black for soil fertility"],
    correct: 2,
    explanation: "Ranging rods are painted alternately black and white, or red and white, or red, white and black successively, each division being 0.2 m long, to make them visible at distance."
  },
  {
    id: "d252x_063",
    subject: "da-252",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "Which of the following best describes the advantage of drip irrigation over sprinkler irrigation?",
    options: ["Drip irrigation covers a wider area per unit time", "Drip irrigation applies water directly to the root zone, minimizing evaporation losses", "Drip irrigation requires higher operating pressure", "Drip irrigation is more suitable for large grain crops"],
    correct: 1,
    explanation: "Drip irrigation applies water directly to the root zone through emitters, minimizing evaporation, runoff, and deep percolation losses. It is highly efficient, especially for row crops and orchards."
  },
  {
    id: "d252x_064",
    subject: "da-252",
    lecture: "lecture-21",
    lectureNo: 21,
    question: "In a centrifugal pump, which type of impeller is used for pumping clear water without any suspended solids?",
    options: ["Open impeller", "Mixed-flow impeller", "Closed impeller", "Semi-open impeller"],
    correct: 2,
    explanation: "Closed impellers are used for pumping clear water without any suspended solids. Open impellers are for sand/gravel/dredging, and semi-open impellers for moderately dirty water."
  },
  {
    id: "d252x_065",
    subject: "da-252",
    lecture: "lecture-27",
    lectureNo: 27,
    question: "Which greenhouse type has a semicircular cross-section and is generally the most economical to construct?",
    options: ["Saw-tooth", "Lean-to", "Even span", "Quonset"],
    correct: 3,
    explanation: "Quonset greenhouses have a semicircular (hoop) cross-section. They are generally the most economical to construct as they require minimal structural framing material."
  },
  {
    id: "d252x_066",
    subject: "da-252",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The two main parts of survey work are:",
    options: ["Chaining and offsetting in soil management in agriculture", "Field work (taking measurements) and office work (computing and drawing)", "Triangulation and traversing under field conditions", "Ranging and chaining for soil fertility under field conditions"],
    correct: 1,
    explanation: "The process of survey is divided into two parts: (a) Field work — taking measurements, and (b) Office work — computing and drawing (preparing plans and maps)."
  },
  {
    id: "d252x_067",
    subject: "da-252",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "A representation to some scale of the ground and objects upon it as projected on a horizontal plane is called:",
    options: ["A plan (if scale is large) or a map (if scale is small)", "A map (if scale is large) in soil management", "A plan (if scale is small) for soil fertility", "A profile under field conditions"],
    correct: 0,
    explanation: "The representation is called a plan if the scale is large, and a map if the scale is small. Plans show only horizontal distances. Both are results of surveying."
  },
  {
    id: "d252x_068",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The Steel Band (band chain) is preferred over an ordinary chain for accurate work because:",
    options: ["It has more links per unit length in soil management", "It does not need to be lubricated under field conditions", "It is practically unalterable in length, lighter and easier to handle", "It is heavier and more robust for soil fertility"],
    correct: 2,
    explanation: "The steel band (band chain) is preferred for accurate work as it is practically unalterable in length, lighter, and easier to handle. It must be protected from rust by cleaning and oiling."
  },
  {
    id: "d252x_069",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The synthetic tape for surveying is manufactured of glass fibre with PVC coating. It is graduated every:",
    options: ["1 mm with figures at every 10 mm", "10 mm with figures at every 100 mm", "5 mm with figures at every 50 mm", "20 mm with figures at every 200 mm"],
    correct: 1,
    explanation: "The synthetic tape is graduated every 10 mm and figured every 100 mm, with metric figures shown in red at every metre. They maintain their lengths well for short measurements."
  },
  {
    id: "d252x_070",
    subject: "da-252",
    lecture: "lecture-29",
    lectureNo: 29,
    question: "Light saturation point for most greenhouse crops is approximately:",
    options: ["100,000 Lux", "5,000 Lux", "15,000 Lux", "32,200 Lux (32.2 klux)"],
    correct: 3,
    explanation: "Most greenhouse crops have a light saturation point of approximately 32,200 Lux (32.2 klux). Above this, additional light does not increase photosynthesis (photoinhibition may occur)."
  },
  {
    id: "d252x_071",
    subject: "da-252",
    lecture: "lecture-26",
    lectureNo: 26,
    question: "Which of the following is NOT a characteristic advantage of greenhouse cultivation?",
    options: ["Elimination of all labour costs", "Growing crops out of season", "Effective pest management", "Production of superior quality products"],
    correct: 0,
    explanation: "Greenhouse cultivation does not eliminate labour costs — it may actually require more skilled labour. Key advantages are quality produce, off-season production, pest control, and computer automation."
  },
  {
    id: "d252x_072",
    subject: "da-252",
    lecture: "lecture-30",
    lectureNo: 30,
    question: "Ventilation in greenhouses can be of two types, which are:",
    options: ["Overhead and side ventilation only", "Active and passive ventilation", "Wet-wall and dry ventilation", "Natural and forced (mechanical) ventilation"],
    correct: 3,
    explanation: "Greenhouse ventilation can be natural (using ridge vents, side vents, and stack effect) or forced/mechanical (using fans and blowers). Both help control temperature and humidity."
  },
  {
    id: "d252x_073",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Chain links are made of 4 mm diameter galvanized mild steel wire. The ends of each link are bent into a loop and connected by:",
    options: ["Two oval rings", "Welded joints only", "Four connecting bolts", "Three oval rings"],
    correct: 3,
    explanation: "The ends of each chain link are bent into a loop and connected by three oval rings, which provide flexibility to the chain and make it less liable to become kinked."
  },
  {
    id: "d252x_074",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Arrows (chain pins) used in chain surveying are made of wire with a minimum tensile strength of:",
    options: ["1000 N/mm²", "700 N/mm²", "500 N/mm²", "300 N/mm²"],
    correct: 1,
    explanation: "Arrows are made of good quality metallic wires of 4 mm (8 s.w.g.) diameter with a minimum tensile strength of 700 N/mm². They are black enameled and 400 mm long."
  },
  {
    id: "d252x_075",
    subject: "da-252",
    lecture: "lecture-20",
    lectureNo: 20,
    question: "India's area under drip irrigation is approximately:",
    options: ["0.5 million hectares", "1.43 million hectares", "1.0 million hectares", "2.5 million hectares"],
    correct: 1,
    explanation: "India has approximately 1.43 million hectares under drip irrigation, placing it behind USA and Spain (1.5 million ha each) globally."
  },
  {
    id: "d252x_076",
    subject: "da-252",
    lecture: "lecture-15",
    lectureNo: 15,
    question: "Which of the following soil and water conservation measures is used to slow down runoff and allow water infiltration on slopes?",
    options: ["Tube well installation", "Contour bunding and terracing", "Field drainage", "Canal lining"],
    correct: 1,
    explanation: "Contour bunding and terracing are key soil and water conservation measures that slow runoff, prevent erosion, and allow rainwater to infiltrate the soil on sloping land."
  },
  {
    id: "d252x_077",
    subject: "da-252",
    lecture: "lecture-16",
    lectureNo: 16,
    question: "Crop water requirement (ETc) is the product of:",
    options: ["Reference evapotranspiration (ET₀) and crop coefficient (Kc)", "Root zone depth and soil moisture holding capacity", "Pan evaporation and soil moisture deficit", "Rainfall and irrigation water applied"],
    correct: 0,
    explanation: "Crop water requirement (ETc = ET₀ × Kc) is calculated as the product of reference evapotranspiration (ET₀) and the crop-specific coefficient (Kc) that varies with growth stage."
  },
  {
    id: "d252x_078",
    subject: "da-252",
    lecture: "lecture-25",
    lectureNo: 25,
    question: "A Parshall flume is a water measuring device used in irrigation to measure:",
    options: ["Groundwater level in wells", "Soil moisture content in soil management", "Pump discharge pressure under field conditions", "Flow velocity in open channels and canals"],
    correct: 3,
    explanation: "A Parshall flume is a fixed hydraulic structure used to measure the flow rate (discharge) in open channels, canals, and irrigation systems."
  },
  {
    id: "d252x_079",
    subject: "da-252",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "In chain surveying, the main line is the:",
    options: ["Longest line passing through the centre of the area", "Line parallel to the boundary of the field", "Shortest line joining two survey stations", "Line connecting two offset points"],
    correct: 0,
    explanation: "The main line in chain surveying is the longest line passing through the centre of the area. It forms the backbone of the survey from which offsets are taken to locate details."
  },
  {
    id: "d252x_080",
    subject: "da-252",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "An offset in chain surveying is a measurement taken:",
    options: ["Along the main chain line in soil management", "Along a diagonal to the main line under field conditions", "Parallel to the boundary of the survey area for soil fertility", "Perpendicular (or nearly so) to the main chain line to locate a detail point"],
    correct: 3,
    explanation: "An offset is a lateral measurement taken perpendicular (or oblique) to the main chain line to locate detail points (boundaries, objects) that are away from the chain line."
  },
  {
    id: "d252x_081",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Invar tape has a very low coefficient of thermal expansion of:",
    options: ["0.06 × 10⁻⁴ per °C", "0.6 × 10⁻⁴ per °C", "60 × 10⁻⁴ per °C", "6.0 × 10⁻⁴ per °C"],
    correct: 1,
    explanation: "Invar tape has a very low coefficient of thermal expansion of 0.6 × 10⁻⁴ per °C (compared to ~1.2 × 10⁻⁵ for steel), making it ideal for base line measurements in triangulation."
  },
  {
    id: "d252x_082",
    subject: "da-252",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Triangulation survey involves dividing the survey area into a series of:",
    options: ["Parallel strips in soil management", "Rectangular grids under field conditions", "Concentric circles for soil fertility", "Triangles whose vertices are survey stations"],
    correct: 3,
    explanation: "Triangulation survey divides the area into a network of triangles. By measuring the angles of each triangle and one base line, all distances can be calculated trigonometrically."
  },
  {
    id: "d252x_083",
    subject: "da-252",
    lecture: "lecture-27",
    lectureNo: 27,
    question: "Shade nets used in horticulture are classified based on:",
    options: ["The height of the structure", "The type of irrigation used under them", "The material of the frame structure", "The percentage of shade they provide"],
    correct: 3,
    explanation: "Shade nets are classified based on the percentage of light they block (e.g., 25%, 35%, 50%, 75% shade). Different crops require different shade levels depending on their light requirements."
  },
  {
    id: "d252x_084",
    subject: "da-252",
    lecture: "lecture-31",
    lectureNo: 31,
    question: "In greenhouse climate control, the pad-and-fan system is used for:",
    options: ["CO₂ enrichment", "Summer cooling through evaporative cooling", "Humidity reduction in winter", "Winter heating of the greenhouse"],
    correct: 1,
    explanation: "The pad-and-fan system (evaporative cooling) is used for summer cooling. Hot outside air passes through water-saturated pads and is cooled by evaporation before entering the greenhouse."
  },
  {
    id: "d252x_085",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "A plumb bob is typically made of which material?",
    options: ["Plastic with a rubber tip", "Aluminium with a blunt end", "Brass with a pointed end", "Wood with an iron tip"],
    correct: 2,
    explanation: "A plumb bob consists of a metal weight made of brass with a pointed end, suspended by a string. It is used to locate points directly below or above another point."
  },
  {
    id: "d252x_086",
    subject: "da-252",
    lecture: "lecture-13",
    lectureNo: 13,
    question: "The magnetic meridian in compass surveying refers to:",
    options: ["The direction indicated by a freely suspended magnetic needle", "The direction of the survey line", "A line perpendicular to the survey line", "The direction of true north (geographic north)"],
    correct: 0,
    explanation: "The magnetic meridian is the direction indicated by a freely suspended and balanced magnetic needle at a given place. It generally differs from the true (geographic) meridian."
  },
  {
    id: "d252x_087",
    subject: "da-252",
    lecture: "lecture-21",
    lectureNo: 21,
    question: "Which component of a centrifugal pump converts velocity energy (kinetic energy) to pressure energy?",
    options: ["Volute casing", "Priming valve", "Impeller", "Suction pipe"],
    correct: 0,
    explanation: "In a centrifugal pump, the impeller imparts velocity to water, and the volute casing (or diffuser) converts this velocity/kinetic energy into pressure energy."
  },
  {
    id: "d252x_088",
    subject: "da-252",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "Which crop type is most suitable for sprinkler irrigation?",
    options: ["Paddy (flooded field crops) under field conditions", "Closely spaced field crops, vegetables, and orchards on undulating terrain", "Aquatic plants in soil management in agriculture", "Crops requiring waterlogged conditions for soil fertility"],
    correct: 1,
    explanation: "Sprinkler irrigation is most suitable for closely spaced field crops, vegetables, orchards, and crops on undulating terrain where surface irrigation is impractical."
  },
  {
    id: "d252x_089",
    subject: "da-252",
    lecture: "lecture-26",
    lectureNo: 26,
    question: "Computer automation in greenhouses is used primarily for:",
    options: ["Processing harvested produce in soil management", "Operating farm machinery in open fields", "Managing farm accounts and billing", "Controlling temperature, humidity, CO₂, irrigation, and lighting automatically"],
    correct: 3,
    explanation: "Computers in greenhouses automate the control of all environmental parameters — temperature, humidity, CO₂ levels, irrigation scheduling, and artificial lighting for optimal crop growth."
  },
  {
    id: "d252x_090",
    subject: "da-252",
    lecture: "lecture-27",
    lectureNo: 27,
    question: "An uneven span greenhouse differs from an even span greenhouse in that:",
    options: ["It is always attached to another building in soil management", "It has both sides of equal pitch and width", "It has no roof ventilation under field conditions", "One side (south-facing) has a steeper pitch to maximize solar radiation capture"],
    correct: 3,
    explanation: "In an uneven span greenhouse, one side (usually south-facing) has a steeper pitch to maximize solar radiation capture in winter. An even span has both sides of equal pitch and width."
  },
  {
    id: "d252x_091",
    subject: "da-252",
    lecture: "lecture-28",
    lectureNo: 28,
    question: "The saw-tooth greenhouse design is advantageous because it provides:",
    options: ["Maximum growing area with minimum shading", "The cheapest construction cost per unit area", "Better natural ventilation and more uniform light distribution", "Maximum structural stability in high winds"],
    correct: 2,
    explanation: "The saw-tooth greenhouse design provides better natural ventilation (through the vertical faces) and more uniform light distribution, especially suited for tropical and subtropical climates."
  },
  {
    id: "d252x_092",
    subject: "da-252",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Errors in chaining are of two types: compensating (random) and cumulative (systematic). Which of the following is a cumulative error?",
    options: ["Accidental omission of an arrow", "Improper ranging causing zigzag measurement", "Chain consistently longer or shorter than its standard length", "Wrong marking of chain length due to wind"],
    correct: 2,
    explanation: "A chain that is consistently longer or shorter than its standard length causes a cumulative (systematic) error. This type of error accumulates in one direction and can be corrected."
  },
  {
    id: "d252x_093",
    subject: "da-252",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Field notes (field book) in surveying are important because they:",
    options: ["Record all measurements systematically for office computation and drawing", "Store digital survey data", "Are used only for legal disputes", "Replace the need to visit the field again"],
    correct: 0,
    explanation: "Field notes (recorded in a field book) systematically record all measurements taken in the field, providing the data needed for office computation, plan drawing, and reference."
  },
  {
    id: "d252x_094",
    subject: "da-252",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The area of an irregular field in offset surveying is calculated using the:",
    options: ["Pythagoras theorem alone", "Simpson's rule and trapezoidal rule", "Only chain length measurements", "Only trigonometric formulae"],
    correct: 1,
    explanation: "In offset surveying, the area of irregular fields is calculated using the trapezoidal rule or Simpson's one-third rule, which approximate the irregular boundary between offset points."
  },
  {
    id: "d252x_095",
    subject: "da-252",
    lecture: "lecture-20",
    lectureNo: 20,
    question: "The main advantage of non-pressure-compensating emitters in drip irrigation is:",
    options: ["Self-cleaning mechanism for clogging prevention", "Uniform discharge at varying pressures", "Lower cost and simplicity", "Higher discharge rates at all times"],
    correct: 2,
    explanation: "Non-pressure-compensating emitters are simpler and less expensive than pressure-compensating types. They are suitable for flat land where pressure variation along laterals is minimal."
  },
  {
    id: "d252x_096",
    subject: "da-252",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The area of a trapezoid with parallel sides 'a' and 'b' and height 'h' is:",
    options: ["(a × b) / h", "(a + b) / 2 × h", "a × b × h", "(a + b) × h"],
    correct: 1,
    explanation: "The area of a trapezoid = ½ × (sum of parallel sides) × height = (a + b)/2 × h. This formula is also applied in offset surveying (trapezoidal rule) to calculate irregular field areas."
  },
  {
    id: "d252x_097",
    subject: "da-252",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The volume of a right circular cylinder with radius 'r' and height 'h' is:",
    options: ["2πr²h", "πr²h", "4/3 πr³", "πrh"],
    correct: 1,
    explanation: "Volume of a right circular cylinder = πr²h, where r is the radius of the base and h is the height. This formula is used in irrigation water volume calculations."
  },
  {
    id: "d252x_098",
    subject: "da-252",
    lecture: "lecture-25",
    lectureNo: 25,
    question: "A current meter is an irrigation water measuring device used to measure:",
    options: ["Pump discharge pressure", "Water table depth", "Soil moisture content", "Flow velocity in open channels"],
    correct: 3,
    explanation: "A current meter (velocity meter) is used to measure the velocity of water flow in open channels and rivers. Combined with cross-sectional area, it gives the discharge (flow rate)."
  },
  {
    id: "d252x_099",
    subject: "da-252",
    lecture: "lecture-22",
    lectureNo: 22,
    question: "The major difference between a centrifugal pump and a submersible pump installation is:",
    options: ["Centrifugal pumps cannot be used with electricity in soil management in agriculture", "In centrifugal pumps the motor is on the surface while in submersible pumps both motor and pump are submerged", "Submersible pumps can only be used for surface water for soil fertility under field conditions", "Centrifugal pumps work at higher pressures than submersible pumps under field conditions"],
    correct: 1,
    explanation: "In centrifugal pump installations, the motor is on the surface connected via a long shaft. In submersible pumps, both the motor and pump unit are submerged in the water source."
  },
  {
    id: "d252x_100",
    subject: "da-252",
    lecture: "lecture-28",
    lectureNo: 28,
    question: "Which covering material for greenhouses provides the best light transmission and UV resistance but is also the most expensive?",
    options: ["Glass", "Fiberglass reinforced plastic (FRP)", "Polyethylene film (PE)", "Polycarbonate (double wall)"],
    correct: 0,
    explanation: "Glass provides the best long-term light transmission (90%+), is UV resistant, and maintains optical clarity, but it is the most expensive, heaviest, and most fragile covering material."
  },
  {
    id: "d252y_001",
    subject: "da-252",
    lecture: "lecture-32",
    lectureNo: 32,
    question: "The term 'consumptive use' in water engineering refers to:",
    options: ["Water consumed by evapotranspiration from crops and soil", "Total water applied to a field", "Water used for irrigation only", "Water stored in soil profile"],
    correct: 0,
    explanation: "Consumptive use is the amount of water consumed by evapotranspiration (evaporation from soil + transpiration by plants) during a given period. It is used to calculate crop water requirements."
  },
  {
    id: "d252y_002",
    subject: "da-252",
    lecture: "lecture-32",
    lectureNo: 32,
    question: "Delta of a crop is defined as:",
    options: ["The total depth of water required by crop during entire growing period", "The difference between inflow and outflow of water", "Water use efficiency of a crop", "The area of land irrigated"],
    correct: 0,
    explanation: "Delta of a crop (Δ) is the total depth of water required by the crop during its entire growing period from sowing to harvesting, expressed in mm or cm."
  },
  {
    id: "d252y_003",
    subject: "da-252",
    lecture: "lecture-32",
    lectureNo: 32,
    question: "Duty of water is defined as the area of land that can be irrigated by a unit discharge of water flowing continuously for the entire base period. Its unit is:",
    options: ["litres per second", "hectares per cumec", "cubic metres per hectare", "mm per day"],
    correct: 1,
    explanation: "Duty (D) is expressed as hectares per cumec (ha/cumec), meaning the number of hectares that can be irrigated by one cumec (1 m³/s) of water flowing for the entire base period."
  },
  {
    id: "d252y_004",
    subject: "da-252",
    lecture: "lecture-32",
    lectureNo: 32,
    question: "The relationship between duty (D), delta (Δ), and base period (B) is:",
    options: ["D = 8.64 × B / Δ", "D = Δ × B / 8.64", "D = 8.64 / (B × Δ)", "D = B / (8.64 × Δ)"],
    correct: 0,
    explanation: "The standard relation is D = 8.64 × B / Δ, where D = duty (ha/cumec), B = base period (days), Δ = delta (m). The constant 8.64 comes from unit conversion (86400 sec/day ÷ 10000 m²/ha)."
  },
  {
    id: "d252y_005",
    subject: "da-252",
    lecture: "lecture-33",
    lectureNo: 33,
    question: "A weir is a hydraulic structure used to:",
    options: ["Store large volumes of water underground", "Measure and control flow in open channels", "Filter suspended solids from water", "Pump water from rivers to fields"],
    correct: 1,
    explanation: "A weir is a notch or overflow structure placed in an open channel to measure discharge and control water levels. The relationship between head and discharge is well-established for standard weir types."
  },
  {
    id: "d252y_006",
    subject: "da-252",
    lecture: "lecture-33",
    lectureNo: 33,
    question: "For a rectangular weir, the discharge formula is Q = C × L × H^(3/2). What does 'H' represent?",
    options: ["Head of water over the weir crest", "Depth of water in the channel", "Height of weir from channel bed", "Width of the weir crest"],
    correct: 0,
    explanation: "In the rectangular weir formula, H is the head of water measured above the weir crest (the still-water surface elevation above the crest level). L is the length of the crest and C is the discharge coefficient."
  },
  {
    id: "d252y_007",
    subject: "da-252",
    lecture: "lecture-33",
    lectureNo: 33,
    question: "A Parshall flume is preferred over a weir for irrigation flow measurement because:",
    options: ["It is cheaper to construct", "It measures groundwater flow", "It requires no calibration", "It works accurately with high sediment loads and low head loss"],
    correct: 3,
    explanation: "Parshall flumes handle sediment-laden flows without clogging, operate with minimal head loss, and maintain accuracy over a wide flow range. They are widely used in irrigation canals and on-farm water management."
  },
  {
    id: "d252y_008",
    subject: "da-252",
    lecture: "lecture-33",
    lectureNo: 33,
    question: "The V-notch (triangular) weir is most suitable for measuring:",
    options: ["Sedimented canal flows", "Small and variable low discharges", "Large flood discharges", "Sub-surface drainage flow"],
    correct: 1,
    explanation: "The V-notch (triangular) weir is most accurate for small and variable discharges because even a small change in head produces a proportional change in the narrow water prism, giving good sensitivity at low flows."
  },
  {
    id: "d252y_009",
    subject: "da-252",
    lecture: "lecture-34",
    lectureNo: 34,
    question: "Drip irrigation is also known as:",
    options: ["Trickle irrigation", "Sprinkler irrigation", "Furrow irrigation", "Basin irrigation"],
    correct: 0,
    explanation: "Drip irrigation is also called trickle irrigation because water is applied drop by drop or in a slow trickle directly to the root zone through emitters, minimizing evaporation and runoff losses."
  },
  {
    id: "d252y_010",
    subject: "da-252",
    lecture: "lecture-34",
    lectureNo: 34,
    question: "Water application efficiency in drip irrigation is typically:",
    options: ["40–50%", "70–80%", "90–95%", "55–65%"],
    correct: 2,
    explanation: "Drip irrigation achieves 90–95% water application efficiency because water is delivered directly to the root zone with minimal evaporation, deep percolation, or surface runoff losses."
  },
  {
    id: "d252y_011",
    subject: "da-252",
    lecture: "lecture-34",
    lectureNo: 34,
    question: "The component of a drip irrigation system that regulates flow to individual plants is called:",
    options: ["Sub-main", "Emitter (dripper)", "Lateral", "Main line"],
    correct: 1,
    explanation: "The emitter (dripper) is the critical component that delivers water at a controlled, slow rate (usually 2–8 L/hr) directly to each plant's root zone. Emitters are installed on laterals running along the crop rows."
  },
  {
    id: "d252y_012",
    subject: "da-252",
    lecture: "lecture-34",
    lectureNo: 34,
    question: "Fertigation in drip irrigation refers to:",
    options: ["Composting organic matter for drip application", "Foliar spraying of fertilizers", "Applying fertilizer to soil before irrigation", "Injecting fertilizers directly into the irrigation water"],
    correct: 3,
    explanation: "Fertigation is the technique of injecting soluble fertilizers directly into the irrigation water supply. In drip systems, this delivers nutrients precisely to the root zone, improving nutrient use efficiency significantly."
  },
  {
    id: "d252y_013",
    subject: "da-252",
    lecture: "lecture-35",
    lectureNo: 35,
    question: "Sprinkler irrigation is most suitable for which type of crops and terrain?",
    options: ["Close-growing crops and uneven terrain where surface irrigation is difficult", "Row crops on flat heavy-clay soils only", "Paddy cultivation in waterlogged conditions", "Deep-rooted trees in sandy soils only"],
    correct: 0,
    explanation: "Sprinkler irrigation suits close-growing crops (wheat, groundnut, vegetables) and undulating terrains where surface irrigation is impractical. It can be used on varying soil types and slopes up to 5–12%."
  },
  {
    id: "d252y_014",
    subject: "da-252",
    lecture: "lecture-35",
    lectureNo: 35,
    question: "The precipitation rate of a sprinkler system should not exceed the:",
    options: ["Wilting point of the soil", "Hydraulic conductivity of the subsoil", "Field capacity of the soil", "Infiltration rate of the soil"],
    correct: 3,
    explanation: "The application rate of sprinklers must not exceed the soil's infiltration rate; otherwise, water ponds on the surface and causes runoff, erosion, and non-uniform distribution."
  },
  {
    id: "d252y_015",
    subject: "da-252",
    lecture: "lecture-35",
    lectureNo: 35,
    question: "Distribution uniformity (DU) in a sprinkler system is used to measure:",
    options: ["Pump pressure uniformity", "Fertilizer distribution in the field", "Soil moisture uniformity before irrigation", "How evenly water is distributed over the irrigated area"],
    correct: 3,
    explanation: "Distribution uniformity (DU) is the ratio of the lowest quarter average depth applied to the overall average depth. A DU of 80% or higher is generally considered acceptable for sprinkler systems."
  },
  {
    id: "d252y_016",
    subject: "da-252",
    lecture: "lecture-36",
    lectureNo: 36,
    question: "Sub-surface drainage is used in agricultural fields primarily to:",
    options: ["Increase surface runoff for reuse", "Improve soil structural aggregation", "Store groundwater for dry season use", "Remove excess water from the root zone to prevent waterlogging"],
    correct: 3,
    explanation: "Sub-surface drainage (tile drains, mole drains, perforated pipes) removes excess water from the root zone, lowering the water table to prevent waterlogging, which causes anaerobic conditions harmful to crop roots."
  },
  {
    id: "d252y_017",
    subject: "da-252",
    lecture: "lecture-36",
    lectureNo: 36,
    question: "The spacing between parallel sub-surface drain pipes depends primarily on:",
    options: ["Crop type and fertilizer requirement", "Annual rainfall intensity only", "Soil hydraulic conductivity and desired water table depth", "Distance from the main canal"],
    correct: 2,
    explanation: "Drain spacing is determined using the Hooghoudt equation, which relates drain spacing to soil hydraulic conductivity, drain depth, water table height midway between drains, and drainage coefficient."
  },
  {
    id: "d252y_018",
    subject: "da-252",
    lecture: "lecture-36",
    lectureNo: 36,
    question: "Drainage coefficient in sub-surface drainage design refers to:",
    options: ["The ratio of surface runoff to rainfall", "The rate of water removal needed to lower the water table within a given time", "The hydraulic conductivity of drain pipe material", "The ratio of drained area to total area"],
    correct: 1,
    explanation: "The drainage coefficient (q) is the depth of water (mm/day) that must be removed from the field to maintain the water table below the critical depth within a specified time frame, typically based on crop tolerance."
  },
  {
    id: "d252y_019",
    subject: "da-252",
    lecture: "lecture-37",
    lectureNo: 37,
    question: "Watershed management aims to:",
    options: ["Conserve soil and water, reduce erosion, and improve productivity of land and water resources", "Increase surface runoff for hydropower generation only", "Drain excess water from paddy fields", "Maximize fertilizer application in rain-fed areas"],
    correct: 0,
    explanation: "Watershed management integrates soil and water conservation practices (check dams, contour bunds, vegetative barriers) to reduce erosion, improve groundwater recharge, enhance productivity, and ensure sustainable land use."
  },
  {
    id: "d252y_020",
    subject: "da-252",
    lecture: "lecture-37",
    lectureNo: 37,
    question: "A check dam is constructed across a stream or drainage channel primarily to:",
    options: ["Measure stream discharge", "Generate electricity from streamflow", "Slow runoff velocity, trap sediment, and recharge groundwater", "Divert water to main irrigation canals"],
    correct: 2,
    explanation: "Check dams are small barriers built across drainage lines to reduce runoff velocity, trap eroded sediment, raise local water tables through percolation, and store water for dry-season use by cattle and crops."
  },
  {
    id: "d252y_021",
    subject: "da-252",
    lecture: "lecture-37",
    lectureNo: 37,
    question: "Contour bunds are constructed:",
    options: ["Along the maximum slope direction", "Around individual trees in orchards", "Along drainage lines to channel excess water", "Across the slope following contour lines to intercept runoff"],
    correct: 3,
    explanation: "Contour bunds (earthen embankments) are constructed along contour lines (perpendicular to the slope direction) to intercept surface runoff, reduce flow velocity, encourage infiltration, and prevent soil erosion on sloping land."
  },
  {
    id: "d252y_022",
    subject: "da-252",
    lecture: "lecture-38",
    lectureNo: 38,
    question: "Rainwater harvesting through farm ponds is beneficial because:",
    options: ["It increases evaporation losses from the catchment", "It raises the water table only in sandy soils", "It eliminates the need for any other irrigation source", "It stores runoff water for use during dry periods, supplementing irrigation"],
    correct: 3,
    explanation: "Farm ponds harvest surface runoff during rains for supplemental irrigation during dry spells. They also recharge groundwater, support fish culture, and provide water for livestock, improving overall farm productivity."
  },
  {
    id: "d252y_023",
    subject: "da-252",
    lecture: "lecture-38",
    lectureNo: 38,
    question: "The catchment efficiency in rainwater harvesting refers to:",
    options: ["Ratio of pond depth to catchment area", "Total area of the pond surface", "Percent of total rainfall converted to usable runoff collected in the storage", "Fraction of water lost to evaporation"],
    correct: 2,
    explanation: "Catchment efficiency (or runoff coefficient) is the proportion of total rainfall from the catchment area that is actually collected as runoff and stored in the pond. It depends on soil type, slope, and land cover."
  },
  {
    id: "d252y_024",
    subject: "da-252",
    lecture: "lecture-38",
    lectureNo: 38,
    question: "Which is the most important factor determining the storage capacity needed for a farm pond?",
    options: ["Colour of the soil in the catchment", "Crop water requirement during the dry period and expected runoff", "Soil pH of the watershed", "Distance of the pond from the field"],
    correct: 1,
    explanation: "Farm pond capacity is designed based on crop water demand during dry periods and the expected seasonal runoff from the catchment. Insufficient capacity means water shortage; excess capacity increases construction cost."
  },
  {
    id: "d252y_025",
    subject: "da-252",
    lecture: "lecture-39",
    lectureNo: 39,
    question: "The hydraulic radius (R) of an irrigation canal cross-section is defined as:",
    options: ["Top width divided by wetted perimeter", "Width divided by depth of flow", "Cross-sectional area of flow divided by wetted perimeter", "Hydraulic depth times flow velocity"],
    correct: 2,
    explanation: "Hydraulic radius R = A/P, where A is the cross-sectional area of flow and P is the wetted perimeter. It is a key parameter in Manning's and Chezy's equations for open channel flow design."
  },
  {
    id: "d252y_026",
    subject: "da-252",
    lecture: "lecture-39",
    lectureNo: 39,
    question: "Manning's roughness coefficient 'n' for an irrigation canal lined with concrete is approximately:",
    options: ["0.025–0.030", "0.100–0.150", "0.040–0.060", "0.010–0.014"],
    correct: 3,
    explanation: "Manning's n for concrete-lined canals is 0.011–0.014. Unlined earth canals have n = 0.025–0.030. Higher n values indicate rougher surfaces causing slower flow for the same slope and hydraulic radius."
  },
  {
    id: "d252y_027",
    subject: "da-252",
    lecture: "lecture-39",
    lectureNo: 39,
    question: "The trapezoidal cross-section is preferred for earthen irrigation canals because:",
    options: ["It is the easiest shape to excavate with any machine", "It eliminates the need for canal lining", "It allows the highest velocity without scouring", "It provides stable side slopes and is hydraulically efficient"],
    correct: 3,
    explanation: "Trapezoidal cross-sections are stable in earthen materials (side slopes resist collapse), hydraulically efficient (approach semi-circular section), and easy to construct with standard equipment, making them standard for irrigation canals."
  },
  {
    id: "d252y_028",
    subject: "da-252",
    lecture: "lecture-40",
    lectureNo: 40,
    question: "A greenhouse is a structure used primarily to:",
    options: ["Store harvested crops at ambient temperature", "Grow plants under controlled environmental conditions", "Dry agricultural produce using solar energy", "House farm equipment and machinery"],
    correct: 1,
    explanation: "A greenhouse (glasshouse or polyhouse) is an enclosed structure where temperature, humidity, light, and CO₂ can be controlled to grow plants year-round, extend growing seasons, or cultivate crops not suited to local outdoor conditions."
  },
  {
    id: "d252y_029",
    subject: "da-252",
    lecture: "lecture-40",
    lectureNo: 40,
    question: "The greenhouse effect inside a polyhouse occurs because:",
    options: ["Plants release heat during photosynthesis", "The covering material traps long-wave radiation emitted by the soil and plants", "The enclosed space prevents wind cooling", "Artificial lights add heat to the structure"],
    correct: 1,
    explanation: "Short-wave solar radiation passes through the glazing material and is absorbed by plants and soil. The soil re-emits long-wave infrared radiation, which the covering material does not transmit, trapping heat inside — the greenhouse effect."
  },
  {
    id: "d252y_030",
    subject: "da-252",
    lecture: "lecture-40",
    lectureNo: 40,
    question: "In India, the most commonly used covering material for low-cost polyhouses is:",
    options: ["Glass panes", "Polyethylene (PE) film", "Fiberglass panels", "Polycarbonate sheets"],
    correct: 1,
    explanation: "Polyethylene (PE) film (200–800 micron UV-stabilized) is the most widely used covering material for low-cost polyhouses in India due to its low cost, light weight, ease of installation, and adequate light transmission (85–90%)."
  },
  {
    id: "d252y_031",
    subject: "da-252",
    lecture: "lecture-40",
    lectureNo: 40,
    question: "The orientation of a greenhouse ridge (long axis) in the tropics should ideally be:",
    options: ["East-West to maximize solar radiation in winter months", "Any direction since orientation does not matter in tropics", "Northeast-Southwest at 45° to the prevailing wind", "North-South to maximize morning and afternoon sun exposure"],
    correct: 3,
    explanation: "In tropical regions, a North-South orientation allows both the east and west walls to receive sunlight throughout the day, giving more uniform light distribution compared to East-West orientation which favors one wall in the morning and another in the afternoon."
  },
  {
    id: "d252y_032",
    subject: "da-252",
    lecture: "lecture-41",
    lectureNo: 41,
    question: "In greenhouse technology, the term 'photoperiod' refers to:",
    options: ["The daily duration of light exposure affecting plant flowering", "The total light intensity (lux) received per day", "The wavelength of light used for photosynthesis", "The number of days between planting and flowering"],
    correct: 0,
    explanation: "Photoperiod is the number of hours of light per day that triggers flowering in photoperiodic plants. Short-day plants flower when nights are long; long-day plants flower when days are long. Greenhouses can manipulate photoperiod artificially."
  },
  {
    id: "d252y_033",
    subject: "da-252",
    lecture: "lecture-41",
    lectureNo: 41,
    question: "Ventilation in a greenhouse is necessary primarily to:",
    options: ["Control temperature and humidity and replenish CO₂", "Increase carbon dioxide concentration for faster growth", "Prevent insects from entering the structure", "Reduce light intensity during summer months"],
    correct: 0,
    explanation: "Ventilation controls temperature (prevents overheating), regulates humidity (reduces disease risk), and replenishes CO₂ consumed by photosynthesis. Natural ventilation uses roof vents and side openings; forced ventilation uses exhaust fans with cooling pads."
  },
  {
    id: "d252y_034",
    subject: "da-252",
    lecture: "lecture-41",
    lectureNo: 41,
    question: "Pad and fan cooling system in a greenhouse works on the principle of:",
    options: ["Refrigeration using freon gas", "Compression and expansion of air through vents", "Evaporative cooling — dry hot air passes through wet cellulose pads", "Solar-powered Peltier cooling modules"],
    correct: 2,
    explanation: "The pad-and-fan system draws outside hot dry air through water-wetted cellulose pads. Evaporation of water absorbs heat (latent heat), cooling the air by 5–12°C before it enters the greenhouse. It is effective in hot, arid climates."
  },
  {
    id: "d252y_035",
    subject: "da-252",
    lecture: "lecture-41",
    lectureNo: 41,
    question: "Relative humidity inside a greenhouse should ideally be maintained between:",
    options: ["50–70%", "20–40%", "80–100%", "10–20%"],
    correct: 0,
    explanation: "Optimal RH for most greenhouse crops is 50–70%. Above 80–85%, fungal diseases (Botrytis, powdery mildew) proliferate. Below 40%, plants experience stomatal stress and water loss through transpiration increases excessively."
  },
  {
    id: "d252y_036",
    subject: "da-252",
    lecture: "lecture-42",
    lectureNo: 42,
    question: "Hydroponics is defined as growing plants:",
    options: ["In high-humidity tropical environments outdoors", "Using only organic composts without chemical fertilizers", "Without soil, with roots in nutrient solution or inert media", "In submerged paddy fields with controlled water levels"],
    correct: 2,
    explanation: "Hydroponics is soilless cultivation where plant roots grow either directly in a nutrient solution (NFT, DWC) or in an inert growing medium (rockwool, perlite, coco coir) with nutrients supplied through the irrigation water."
  },
  {
    id: "d252y_037",
    subject: "da-252",
    lecture: "lecture-42",
    lectureNo: 42,
    question: "In the Nutrient Film Technique (NFT) hydroponic system:",
    options: ["Plants are grown in deep pools of nutrient solution", "Nutrient solution is sprayed as mist onto suspended roots", "A thin film of nutrient solution continuously flows over bare roots in channels", "Plants are grown in inert media with periodic flooding and draining"],
    correct: 2,
    explanation: "In NFT, a thin (2–3 mm) stream of nutrient solution flows continuously over bare plant roots lying in slightly sloped channels (gutters). The upper roots are in air (aerobic) while lower roots absorb nutrients from the film."
  },
  {
    id: "d252y_038",
    subject: "da-252",
    lecture: "lecture-42",
    lectureNo: 42,
    question: "The main advantage of hydroponics over soil cultivation is:",
    options: ["Faster plant growth, higher yields per unit area, and year-round production", "No need for any water or nutrients", "Lower initial investment than conventional farming", "No requirement for pest or disease management"],
    correct: 0,
    explanation: "Hydroponics provides optimized nutrients directly to roots, allowing 30–50% faster growth, 3–10× higher yields per unit area, year-round production in controlled environments, and significantly reduced pesticide use."
  },
  {
    id: "d252y_039",
    subject: "da-252",
    lecture: "lecture-42",
    lectureNo: 42,
    question: "Aeroponic cultivation differs from hydroponics in that:",
    options: ["Roots are suspended in air and nutrient solution is sprayed as a fine mist", "Plants float on the surface of a deep water tank", "Plants are grown in soil with nutrient supplementation", "Only organic nutrients dissolved in water are used"],
    correct: 0,
    explanation: "In aeroponics, plant roots hang in an enclosed air/mist environment and are periodically sprayed with fine nutrient mist (every 1–5 minutes). This maximizes oxygen at the root zone, promoting rapid growth and very high yields."
  },
  {
    id: "d252y_040",
    subject: "da-252",
    lecture: "lecture-43",
    lectureNo: 43,
    question: "Shade nets used in protected cultivation are primarily used to:",
    options: ["Reduce incoming solar radiation and temperature to protect sensitive crops", "Increase temperature inside the structure", "Prevent groundwater contamination", "Store water on the net surface for plant use"],
    correct: 0,
    explanation: "Shade nets (25–75% shade factor) reduce incident solar radiation and temperature inside, protecting crops like vegetables, flowers, and nursery plants from heat stress, sunburn, and hail damage in summer or high-altitude conditions."
  },
  {
    id: "d252y_041",
    subject: "da-252",
    lecture: "lecture-43",
    lectureNo: 43,
    question: "Anti-insect nets used in protected cultivation have mesh size typically of:",
    options: ["50–100 mm openings", "0.4–1.0 mm openings (50–100 mesh)", "0.1–0.3 mm (microfiltration)", "10–25 mm openings"],
    correct: 1,
    explanation: "Anti-insect nets have fine mesh of 50–100 mesh (0.4–1.0 mm openings) to exclude thrips, aphids, whiteflies, and other small vectors while still allowing adequate airflow, light, and CO₂ exchange for the crop."
  },
  {
    id: "d252y_042",
    subject: "da-252",
    lecture: "lecture-43",
    lectureNo: 43,
    question: "Mulching in protected horticulture serves all of the following purposes EXCEPT:",
    options: ["Conserving soil moisture", "Reducing soil-borne disease splash", "Increasing soil temperature uniformly across all seasons", "Controlling weeds"],
    correct: 2,
    explanation: "Mulching conserves moisture, suppresses weeds, reduces disease splash, and modifies soil temperature — but black plastic mulch increases soil temperature in cool conditions while silver/white mulch reflects radiation in summer. It does not uniformly increase temperature across all seasons."
  },
  {
    id: "d252y_043",
    subject: "da-252",
    lecture: "lecture-44",
    lectureNo: 44,
    question: "The growth medium 'Rockwool' used in hydroponic systems is made from:",
    options: ["Clay expanded into lightweight aggregates", "Crushed granite rock and organic compost", "Melted and spun basalt rock and chalk fibres", "Compressed coconut coir and perlite"],
    correct: 2,
    explanation: "Rockwool (stonewool) is made by melting basalt rock and chalk at 1600°C, then spinning the molten material into fibres. It has high water retention (80%), good air porosity (15%), is sterile, and has a neutral pH — ideal for hydroponics."
  },
  {
    id: "d252y_044",
    subject: "da-252",
    lecture: "lecture-44",
    lectureNo: 44,
    question: "Coco peat (cocopeat) as a growing medium is preferred because:",
    options: ["It has a very low pH making it suitable for alkaline-loving crops", "It is completely sterile and has zero water retention", "It supplies all major nutrients to the plant roots", "It is a renewable by-product of coconut with good water retention and aeration"],
    correct: 3,
    explanation: "Coco peat (coir pith) is a renewable by-product of coconut husk processing. It has excellent water retention (8–9× its weight), good porosity, neutral to slightly acidic pH (5.8–6.5), and good cation exchange capacity, making it ideal as a soilless growing medium."
  },
  {
    id: "d252y_045",
    subject: "da-252",
    lecture: "lecture-44",
    lectureNo: 44,
    question: "EC (Electrical Conductivity) of the nutrient solution in a hydroponic system is monitored to:",
    options: ["Measure dissolved oxygen levels at the root zone", "Assess the total dissolved salt (nutrient) concentration in the solution", "Monitor water temperature for optimal root function", "Detect pathogen contamination in the water supply"],
    correct: 1,
    explanation: "EC is a proxy for total dissolved nutrient concentration. Low EC = nutrient deficiency; high EC = salt stress. Most vegetable crops require EC 1.5–3.5 mS/cm. EC is monitored continuously with sensors and adjusted by adding water or concentrate."
  },
  {
    id: "d252y_046",
    subject: "da-252",
    lecture: "lecture-45",
    lectureNo: 45,
    question: "Integrated pest management (IPM) in greenhouses uses all of the following EXCEPT:",
    options: ["Biological control agents (parasitoids, predators)", "Sticky yellow traps for monitoring and mass trapping", "Crop scouting and threshold-based interventions", "Continuous prophylactic spraying of broad-spectrum pesticides"],
    correct: 3,
    explanation: "IPM integrates biological control, physical traps, scouting, and targeted chemical use only when pest populations exceed economic thresholds. Continuous broad-spectrum spraying is contrary to IPM principles — it kills natural enemies and encourages resistance."
  },
  {
    id: "d252y_047",
    subject: "da-252",
    lecture: "lecture-45",
    lectureNo: 45,
    question: "Which beneficial insect is commercially released in greenhouses for biological control of whiteflies?",
    options: ["Encarsia formosa (parasitic wasp)", "Coccinella septempunctata (ladybird beetle)", "Apis mellifera (honey bee)", "Chrysoperla carnea (green lacewing)"],
    correct: 0,
    explanation: "Encarsia formosa is a tiny parasitic wasp (1–1.5 mm) that parasitizes greenhouse whitefly (Trialeurodes vaporariorum) nymphs. It is widely used commercially in tomato and cucumber greenhouses as a highly effective biological control agent."
  },
  {
    id: "d252y_048",
    subject: "da-252",
    lecture: "lecture-45",
    lectureNo: 45,
    question: "The main advantage of biological control over chemical pesticides in greenhouses is:",
    options: ["Selectivity, no chemical residues, and sustainability without resistance development in pests", "Effectiveness against all pest and disease problems simultaneously", "Faster knockdown of large pest populations", "Lower cost per application"],
    correct: 0,
    explanation: "Biological control agents are selective (target specific pests), leave no chemical residues (important for export crops), do not contribute to pesticide resistance, and can establish self-sustaining populations — providing long-term, sustainable pest suppression."
  },
  {
    id: "d252y_049",
    subject: "da-252",
    lecture: "lecture-46",
    lectureNo: 46,
    question: "For greenhouse tomato production, the recommended day/night temperature regime is approximately:",
    options: ["10°C/5°C", "40°C day / 35°C night", "30–35°C day / 25–28°C night", "18–24°C day / 13–17°C night"],
    correct: 3,
    explanation: "Greenhouse tomatoes grow optimally at 18–24°C during the day and 13–17°C at night. The day-night differential (DIF) influences internodal elongation and plant architecture. Temperatures above 35°C or below 10°C impair pollination and fruit set."
  },
  {
    id: "d252y_050",
    subject: "da-252",
    lecture: "lecture-46",
    lectureNo: 46,
    question: "CO₂ enrichment in greenhouses is carried out to:",
    options: ["Replace oxygen in the structure during night hours", "Sterilize the growing media before planting", "Cool the greenhouse by absorbing solar radiation", "Enhance photosynthesis rates and improve crop yield and quality"],
    correct: 3,
    explanation: "Ambient CO₂ (~420 ppm) is often the limiting factor in closed greenhouses. Enrichment to 800–1200 ppm increases photosynthesis by 20–30%, improving yield, fruit quality, and dry matter accumulation, especially in well-lit, well-managed polyhouse systems."
  },
  {
    id: "d252z_001", subject: "da-252", lecture: "lecture-11", lectureNo: 11,
    question: "The theodolite is primarily used in surveying to measure:",
    options: ["Distances along a chain line", "Elevations using a levelling staff only", "Areas of irregular plots using planimeter", "Horizontal and vertical angles precisely"],
    correct: 3,
    explanation: "A theodolite is an optical instrument designed to measure horizontal angles (between survey lines) and vertical angles (for trigonometric levelling or slope measurement) with high precision."
  },
  {
    id: "d252z_002", subject: "da-252", lecture: "lecture-11", lectureNo: 11,
    question: "The 'temporary adjustments' of a theodolite include all of the following EXCEPT:",
    options: ["Centring over the station", "Levelling the instrument with plate bubble", "Adjustment of the line of collimation", "Elimination of parallax"],
    correct: 2,
    explanation: "Temporary adjustments (done at each setup): centring (plumb bob/optical plummet over peg), levelling (plate bubble), and parallax elimination (focussing). Adjustment of the line of collimation is a permanent (fundamental) adjustment."
  },
  {
    id: "d252z_003", subject: "da-252", lecture: "lecture-11", lectureNo: 11,
    question: "In a transit theodolite, the telescope can be rotated through 180° about the horizontal axis. This operation is called:",
    options: ["Swinging the telescope", "Changing face", "Transiting (plunging) the telescope", "Traversing the theodolite"],
    correct: 2,
    explanation: "Transiting (plunging) is rotating the telescope 180° about the trunnion (horizontal) axis. It is used to obtain the back bearing of a line and to eliminate instrumental errors (line of collimation error) by face-left and face-right observations."
  },
  {
    id: "d252z_004", subject: "da-252", lecture: "lecture-11", lectureNo: 11,
    question: "The method of measuring horizontal angles by reiteration (repetition) is preferred because:",
    options: ["It eliminates the need to level the instrument at each station", "It reduces errors by accumulating the angle multiple times and dividing by number of repetitions", "It allows simultaneous measurement of horizontal and vertical angles", "It does not require centering over the survey station"],
    correct: 1,
    explanation: "In the repetition method, the angle is measured and re-measured n times (accumulating on the vernier) then divided by n. This averages out reading errors and improves precision, especially for small angles."
  },
  {
    id: "d252z_005", subject: "da-252", lecture: "lecture-11", lectureNo: 11,
    question: "Trigonometric levelling using a theodolite finds the difference in elevation between two points by observing:",
    options: ["Staff readings and staff intercept using stadia lines", "Vertical angle and horizontal distance (or slope distance) between the two points", "Fore bearing and back bearing of the line joining the points", "The bubble displacement on the altitude bubble tube"],
    correct: 1,
    explanation: "In trigonometric levelling: h = D × tan(θ) + hi − hr, where D = horizontal distance, θ = vertical angle of elevation/depression, hi = instrument height, hr = target height. Used where ordinary levelling is impractical (hills, ravines)."
  },
  {
    id: "d252z_006", subject: "da-252", lecture: "lecture-11", lectureNo: 11,
    question: "The 'Vernier' on a theodolite is used to:",
    options: ["Read fractional parts of the smallest graduation on the main scale", "Level the instrument on uneven ground", "Measure distances without a chain by optical means", "Centre the instrument over the survey peg"],
    correct: 0,
    explanation: "The vernier is an auxiliary scale that slides alongside the main circle scale, allowing readings to fractions (1′ or 20″) of the least count of the main scale. Modern theodolites use optical micrometers or digital encoders instead."
  },
  {
    id: "d252z_007", subject: "da-252", lecture: "lecture-14", lectureNo: 14,
    question: "Setting out in construction surveying refers to:",
    options: ["Recording survey data in a field book during traversing", "Transferring a design (plan) onto the ground so construction can proceed accurately", "Calculating reduced levels of benchmark stations", "Measuring cross-sections for earthwork volume calculation"],
    correct: 1,
    explanation: "Setting out (layout surveying) transfers the positions, angles, and levels of structures from drawings onto the ground using survey instruments. It is the reverse of mapping — it places design points in the field."
  },
  {
    id: "d252z_008", subject: "da-252", lecture: "lecture-14", lectureNo: 14,
    question: "A 'simple circular curve' in road or canal surveying connects two intersecting straights. The angle of intersection (I) and the angle of deflection (Δ) are related by:",
    options: ["Δ = I", "Δ = 180° − I", "Δ = 90° − I", "Δ = 2I"],
    correct: 1,
    explanation: "The deflection angle Δ (also called the angle of deviation or curve angle) = 180° − I, where I is the angle of intersection (the angle between the two straights). The curve deflects traffic through angle Δ."
  },
  {
    id: "d252z_009", subject: "da-252", lecture: "lecture-14", lectureNo: 14,
    question: "In setting out a simple curve by the 'Rankine's deflection angle method', the curve is set out using:",
    options: ["A chain and offset only from the long chord", "Level staff and sight rails from the centre of the curve", "A theodolite at the point of curvature (PC) and a tape to measure chord lengths", "GPS coordinates of each peg on the curve"],
    correct: 2,
    explanation: "In Rankine's method, the theodolite is set at the PC (point of curvature). The curve is set out by cumulative deflection angles (half the subtended central angle for each chord) and measured chord lengths with a tape."
  },
  {
    id: "d252z_010", subject: "da-252", lecture: "lecture-14", lectureNo: 14,
    question: "The 'sight rail' used in pipeline and drain construction surveys is a horizontal board set at a fixed height above the proposed invert level to:",
    options: ["Guide the depth of excavation using a traveller (boning rod)", "Mark the boundary of the excavation trench width", "Measure the slope of the pipeline using a clinometer", "Mark the centre line of the pipeline on the surface"],
    correct: 0,
    explanation: "Sight rails are horizontal boards set at a known height above the design formation level. A traveller (T-shaped rod) of known height is used between two sight rails; when the top of the traveller aligns with both sight rails, the excavation is at the correct design level."
  },
  {
    id: "d252z_011", subject: "da-252", lecture: "lecture-14", lectureNo: 14,
    question: "A 'transition curve' (easement curve) is provided between a straight and a circular curve in road design to:",
    options: ["Increase the radius of the circular curve gradually for structural strength", "Reduce the length of the curve to minimize earthwork", "Gradually introduce centrifugal force and superelevation to improve driving safety", "Provide a straight section within the curve for sighting distances"],
    correct: 2,
    explanation: "A transition (spiral/clothoid) curve is inserted between a straight and a circular curve to allow gradual change of curvature from ∞ (straight) to R (circular), introducing centrifugal acceleration slowly and allowing smooth superelevation runoff."
  },
  {
    id: "d252z_012", subject: "da-252", lecture: "lecture-17", lectureNo: 17,
    question: "The 'available water capacity' (AWC) of soil is defined as the water held between:",
    options: ["Saturation point and field capacity", "Field capacity and permanent wilting point", "Permanent wilting point and oven-dry condition", "Field capacity and saturation point"],
    correct: 1,
    explanation: "AWC = Field Capacity (FC) − Permanent Wilting Point (PWP). This is the water available to plants. FC is at −0.33 bar tension; PWP is at −15 bar. Water below PWP is too tightly held for plants to extract."
  },
  {
    id: "d252z_013", subject: "da-252", lecture: "lecture-17", lectureNo: 17,
    question: "The 'depletion factor' (p) used in irrigation scheduling represents:",
    options: ["The fraction of total soil water lost to deep percolation per irrigation", "The fraction of available water that can be depleted before stress affects yield", "The ratio of actual evapotranspiration to reference evapotranspiration", "The fraction of irrigation water that reaches the root zone"],
    correct: 1,
    explanation: "The depletion factor (p) is the fraction of AWC that a crop can extract before experiencing water stress. Irrigation is triggered when soil water drops below (1−p) × AWC. Shallow-rooted or sensitive crops have p ≈ 0.35; drought-tolerant deep-rooted crops p ≈ 0.65."
  },
  {
    id: "d252z_014", subject: "da-252", lecture: "lecture-17", lectureNo: 17,
    question: "Reference evapotranspiration (ET₀) is calculated by the FAO Penman-Monteith method using:",
    options: ["Only air temperature and sunshine hours", "Net radiation, temperature, wind speed, and humidity data for a hypothetical reference crop", "Soil water content and crop leaf area index only", "Pan evaporation multiplied by pan coefficient"],
    correct: 1,
    explanation: "The FAO-56 Penman-Monteith equation calculates ET₀ for a hypothetical short grass reference crop using four weather parameters: net radiation (Rn), mean temperature (T), wind speed (u₂), and vapour pressure deficit (VPD). It is the global standard for crop water requirement estimation."
  },
  {
    id: "d252z_015", subject: "da-252", lecture: "lecture-17", lectureNo: 17,
    question: "The crop coefficient (Kc) in crop water requirement calculations is used to:",
    options: ["Convert reference ET₀ to actual crop evapotranspiration (ETc = Kc × ET₀)", "Convert pan evaporation to soil evaporation for bare soil", "Measure the efficiency of the irrigation system", "Estimate deep percolation losses below the root zone"],
    correct: 0,
    explanation: "ETc = Kc × ET₀. The crop coefficient Kc accounts for differences between the reference grass and the actual crop in terms of crop height, aerodynamic resistance, albedo, and stomatal properties. Kc varies by crop growth stage (initial, mid, late)."
  },
  {
    id: "d252z_016", subject: "da-252", lecture: "lecture-17", lectureNo: 17,
    question: "In irrigation scheduling, the Net Irrigation Requirement (NIR) is calculated as:",
    options: ["Gross irrigation requirement minus conveyance losses", "Available water capacity minus current soil water content", "Total water applied minus deep percolation losses", "Crop water requirement minus effective rainfall"],
    correct: 3,
    explanation: "NIR = ETc − Pe, where ETc is crop evapotranspiration and Pe is effective precipitation (usable rainfall). NIR represents the minimum depth of water that must be applied to meet crop needs. Gross Irrigation Requirement = NIR / Field Application Efficiency."
  },
  {
    id: "d252z_017", subject: "da-252", lecture: "lecture-17", lectureNo: 17,
    question: "The critical growth stages for irrigation in rice (paddy) are:",
    options: ["Germination and fruit filling only", "Only transplanting and grain filling stages", "Tillering, panicle initiation, and flowering (heading)", "Root development and senescence"],
    correct: 2,
    explanation: "In paddy, the most sensitive stages to water deficit are: active tillering, panicle initiation (PI), and flowering/anthesis. Water stress at these stages causes significant yield loss. A 2–5 cm standing water is maintained during most of the vegetative and reproductive phases."
  },
  {
    id: "d252z_018", subject: "da-252", lecture: "lecture-23", lectureNo: 23,
    question: "Kennedy's theory of canal design is based on the principle that:",
    options: ["Stable canal sections have a critical velocity that keeps sediment in suspension without silting or scouring", "Canal discharge is determined only by the bed slope and channel geometry", "Canal cross-section should have the maximum hydraulic radius for given area", "The side slopes of a canal must equal the angle of repose of the soil"],
    correct: 0,
    explanation: "Kennedy (1895) proposed that a canal is in 'regime' (neither silting nor scouring) when the mean velocity equals the critical velocity Vc = C × y^0.64, where y = depth of flow and C is a site-specific constant (0.53–0.84). This velocity keeps silt in suspension."
  },
  {
    id: "d252z_019", subject: "da-252", lecture: "lecture-23", lectureNo: 23,
    question: "Lacey's regime theory improved over Kennedy's theory by additionally accounting for:",
    options: ["Both silt factor (f) and tractive force, giving equations for area, velocity, slope, and hydraulic radius simultaneously", "The slope of the canal in determining stable cross-sections", "The type of lining material used in canal construction", "Groundwater seepage losses from canal beds"],
    correct: 0,
    explanation: "Lacey's regime theory (1930) gives a complete set of equations relating discharge Q, wetted perimeter P, hydraulic radius R, slope S, and silt factor f = 1.76√(d), where d is median grain size. It determines all dimensions simultaneously unlike Kennedy's single-equation approach."
  },
  {
    id: "d252z_020", subject: "da-252", lecture: "lecture-23", lectureNo: 23,
    question: "Canal lining is done primarily to:",
    options: ["Reduce seepage losses, prevent weed growth, and allow higher velocity for given slope", "Increase the roughness coefficient to reduce velocity and prevent scour", "Increase the wetted perimeter for better heat exchange with soil", "Allow the canal to carry water during frost conditions only"],
    correct: 0,
    explanation: "Canal lining reduces seepage losses (60–70% of losses in unlined canals), increases velocity (lower Manning's n), prevents weed growth and bank erosion, reduces waterlogging of adjacent land, and reduces maintenance cost."
  },
  {
    id: "d252z_021", subject: "da-252", lecture: "lecture-23", lectureNo: 23,
    question: "The most common lining material used for irrigation canals in India is:",
    options: ["Brick masonry with cement plaster", "Concrete (cement concrete or shotcrete)", "Polyethylene geomembrane", "Compacted bentonite clay"],
    correct: 3,
    explanation: "Concrete lining (cement concrete, M15 or M20 grade) is the most widely used lining material in India for irrigation canals due to its durability, low Manning's n (0.011–0.014), negligible seepage, and relatively low maintenance cost.",
    difficulty: "medium"
  },
  {
    id: "d252z_022", subject: "da-252", lecture: "lecture-23", lectureNo: 23,
    question: "The 'most efficient hydraulic section' for an open channel of trapezoidal cross-section occurs when:",
    options: ["The bottom width equals the depth of flow", "The side slopes are vertical (m = 0)", "The top width equals twice the bottom width", "The hydraulic radius equals half the depth of flow (R = y/2)"],
    correct: 3,
    explanation: "For any channel cross-section, the most hydraulically efficient section has R = y/2 (hydraulic radius equals half the depth). For a trapezoid, this is achieved when it is a half-hexagon with side slopes m = 1/√3 (≈ 30° to vertical) and B = 2y/√3."
  },
  {
    id: "d252z_023", subject: "da-252", lecture: "lecture-24", lectureNo: 24,
    question: "A 'head regulator' in canal irrigation is a structure located at:",
    options: ["The junction of a distributary with a minor canal", "Each field outlet to regulate flow to individual plots", "The end of the canal to dispose of surplus water", "The head (offtake point) of a branch or distributary canal from the main canal"],
    correct: 3,
    explanation: "A head regulator is a control structure at the point where a branch canal or distributary takes off from a main canal or reservoir. It regulates the quantity of water entering the offtake channel and prevents flooding."
  },
  {
    id: "d252z_024", subject: "da-252", lecture: "lecture-24", lectureNo: 24,
    question: "A 'cross regulator' in a canal system is constructed to:",
    options: ["Regulate flow at the crossing of two canals", "Raise the water level in the main canal upstream to allow flow into offtake channels when discharge is low", "Measure the total discharge passing through the canal", "Prevent backflow from the distributary to the main canal"],
    correct: 1,
    explanation: "A cross regulator (or cross-head regulator) is built across the main canal downstream of an offtake. By raising the water level upstream, it ensures sufficient head for the offtake to receive its designed discharge even during low-flow periods."
  },
  {
    id: "d252z_025", subject: "da-252", lecture: "lecture-24", lectureNo: 24,
    question: "An 'aqueduct' in canal engineering is a structure where:",
    options: ["A natural stream passes over the canal in an elevated channel", "The canal passes over a natural drainage (nala/river) on a bridge-like structure", "The canal passes under a road or railway through a culvert", "Surplus canal water is disposed of into a drain"],
    correct: 1,
    explanation: "An aqueduct carries the canal over a natural drainage (stream or river) on a bridge. The canal water flows in a trough (flume) while the natural stream flows below. If the natural stream passes over the canal, it is called a 'super passage'."
  },
  {
    id: "d252z_026", subject: "da-252", lecture: "lecture-24", lectureNo: 24,
    question: "A 'syphon aqueduct' differs from an aqueduct in that:",
    options: ["The canal trough is elevated above the drainage on piers", "The drainage water passes through a syphon under the canal bed under pressure", "The canal water is syphoned through pipes under the drainage channel", "It is used only for groundwater recharge structures"],
    correct: 1,
    explanation: "In a syphon aqueduct, the drainage (stream) passes under the canal bed through a barrel/culvert under full pressure (syphonic action). This is used when the drainage HFL is above the canal bed level, unlike a normal aqueduct where drainage flows freely below the canal trough."
  },
  {
    id: "d252z_027", subject: "da-252", lecture: "lecture-24", lectureNo: 24,
    question: "A 'canal fall' (drop structure) is provided in canal design when:",
    options: ["The natural ground slope is less than the designed canal bed slope", "The canal crosses a road and must reduce velocity for safety", "The canal changes direction at a bend by more than 45°", "The natural ground slope is steeper than the designed canal bed slope, requiring the canal to descend in steps"],
    correct: 3,
    explanation: "When the natural ground slope exceeds the design canal bed slope, the canal would cut below ground level. A fall (drop structure) dissipates excess head in a controlled manner, maintaining the canal at or near ground level and preventing scour downstream."
  }
];
