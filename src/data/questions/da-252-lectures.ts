import { Question } from "@/types";

export const da252LectureQuestions: Question[] = [
  // ── LECTURE 1: Introduction to Surveying ─────────────────────────────────
  {
    id: "d252l_001", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "Surveying is defined as the art of:",
    options: ["Designing buildings", "Determining positions of points and measuring distances, angles, and elevations on the earth's surface", "Soil testing", "Preparing maps only"],
    correct: 1,
    explanation: "Surveying involves determining the relative positions of points on or near the earth's surface through measurements.",
    difficulty: "easy"
  },
  {
    id: "d252l_002", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "Plane surveying assumes the earth's surface to be:",
    options: ["Spherical", "Irregular", "Cylindrical", "Flat (plane)"],
    correct: 3,
    explanation: "Plane surveying ignores earth's curvature — suitable for areas up to about 260 km².",
    difficulty: "easy"
  },
  {
    id: "d252l_003", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "Geodetic surveying accounts for:",
    options: ["The curvature of the earth (for large areas)", "Only horizontal distances", "Only vertical measurements", "Only angles"],
    correct: 0,
    explanation: "Geodetic surveying considers the curvature of the earth and is used for large-scale national surveys.",
    difficulty: "medium"
  },
  {
    id: "d252l_004", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "The primary aim of surveying in agriculture is:",
    options: ["Crop yield estimation", "Measurement and recording of land for planning and development", "Weather prediction", "Soil nutrient analysis"],
    correct: 1,
    explanation: "Surveying in agriculture is done to measure land areas, plan irrigation systems, and prepare farm maps.",
    difficulty: "easy"
  },
  {
    id: "d252l_005", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "The basic principle of surveying is to work from:",
    options: ["Parts to whole", "Left to right", "Whole to parts (general to specific)", "North to south"],
    correct: 2,
    explanation: "Surveying follows the principle of 'working from the whole to the part' to minimize error accumulation.",
    difficulty: "medium"
  },
  {
    id: "d252l_006", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "A datum in surveying is:",
    options: ["A chain length", "A survey instrument", "A reference level or surface from which elevations are measured", "A type of map"],
    correct: 2,
    explanation: "Datum is an assumed or defined reference surface (often mean sea level) from which vertical measurements are made.",
    difficulty: "medium"
  },
  {
    id: "d252l_007", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "MSL (Mean Sea Level) in India is determined at:",
    options: ["Karachi", "Kolkata", "Chennai", "Mumbai"],
    correct: 3,
    explanation: "The MSL datum for India is determined at the Mumbai tidal gauge station.",
    difficulty: "medium"
  },
  {
    id: "d252l_008", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "Scale on a map is the ratio of:",
    options: ["Map distance to actual distance", "Actual distance to map distance", "Volume to area", "Area to perimeter"],
    correct: 0,
    explanation: "Map scale = Map distance / Actual distance on ground (or its representation as RF).",
    difficulty: "easy"
  },
  {
    id: "d252l_009", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "A large-scale map shows:",
    options: ["Less area with more detail", "More area with less detail", "Equal area and detail", "Only rivers"],
    correct: 0,
    explanation: "Large-scale maps (1:1000, 1:5000) cover smaller areas but show more detail than small-scale maps.",
    difficulty: "medium"
  },
  {
    id: "d252l_010", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "RF (Representative Fraction) of 1:50,000 means:",
    options: ["1 m on ground = 50,000 m on map", "1 cm on map = 500 m on ground", "1:50,000 is a large scale", "1 cm on map = 50,000 m on ground"],
    correct: 1,
    explanation: "1:50,000 means 1 unit on map = 50,000 units on ground (1 cm = 50,000 cm = 500 m).",
    difficulty: "medium"
  },
  {
    id: "d252l_011", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "Which of the following is NOT a survey instrument?",
    options: ["Level", "Piezometer", "Theodolite", "Chain"],
    correct: 1,
    explanation: "Piezometer measures water pressure/depth; it is a hydrological instrument, not a surveying tool.",
    difficulty: "medium"
  },
  {
    id: "d252l_012", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "Bearing in surveying is the angle measured from:",
    options: ["East direction", "North (or South) direction, clockwise or counter-clockwise", "Vertical downward", "The horizon"],
    correct: 1,
    explanation: "Bearing is the horizontal angle of a survey line measured clockwise from north (whole circle bearing) or from N/S.",
    difficulty: "medium"
  },

  // ── LECTURE 2: Chain Surveying ────────────────────────────────────────────
  {
    id: "d252l_013", subject: "da-252", lecture: "lecture-2", lectureNo: 2,
    question: "Standard chain length used in India is:",
    options: ["20 m (Gunter's chain = 66 ft)", "10 m", "50 m", "30 m (metric chain)"],
    correct: 3,
    explanation: "The standard metric chain used in India is 30 m long (divided into 150 links of 20 cm each).",
    difficulty: "medium"
  },
  {
    id: "d252l_014", subject: "da-252", lecture: "lecture-2", lectureNo: 2,
    question: "A Gunter's chain is _____ long:",
    options: ["100 m", "50 feet", "20 m / 66 feet", "30 m"],
    correct: 2,
    explanation: "Gunter's chain is 66 feet (20.12 m) long with 100 links, useful for area measurement in acres.",
    difficulty: "medium"
  },
  {
    id: "d252l_015", subject: "da-252", lecture: "lecture-2", lectureNo: 2,
    question: "In chain surveying, the main lines form a:",
    options: ["Circle", "Network of well-conditioned triangles", "Spiral", "Grid"],
    correct: 1,
    explanation: "Chain surveying is based on a framework of triangles that are 'well-conditioned' (angles 30°–120°).",
    difficulty: "medium"
  },
  {
    id: "d252l_016", subject: "da-252", lecture: "lecture-2", lectureNo: 2,
    question: "An offset in chain surveying is:",
    options: ["The length of the chain", "A measurement along the chain line", "The angle between two chain lines", "A perpendicular (or oblique) measurement from the chain line to a detail point"],
    correct: 3,
    explanation: "Offsets are lateral measurements from the chain line to locate features not on the line.",
    difficulty: "medium"
  },
  {
    id: "d252l_017", subject: "da-252", lecture: "lecture-2", lectureNo: 2,
    question: "The instrument used to set out right angles in chain surveying is:",
    options: ["Theodolite", "Compass", "Cross-staff or optical square", "Level"],
    correct: 2,
    explanation: "Cross-staff and optical square are simple instruments used to set perpendicular offsets in chain surveying.",
    difficulty: "medium"
  },
  {
    id: "d252l_018", subject: "da-252", lecture: "lecture-2", lectureNo: 2,
    question: "A check line in chain surveying is used to:",
    options: ["Verify the accuracy of field work by checking closure", "Measure the main line", "Set up the chain", "Measure offsets"],
    correct: 0,
    explanation: "Check lines connect known points to verify that the framework of triangles has been accurately measured.",
    difficulty: "medium"
  },
  {
    id: "d252l_019", subject: "da-252", lecture: "lecture-2", lectureNo: 2,
    question: "A tie line in chain surveying connects:",
    options: ["Two subsidiary points to provide additional checks", "End points of the survey", "Two main stations on the main line", "Two benchmarks"],
    correct: 0,
    explanation: "Tie lines join subsidiary (detail) points and help locate more detail features near the main framework.",
    difficulty: "medium"
  },
  {
    id: "d252l_020", subject: "da-252", lecture: "lecture-2", lectureNo: 2,
    question: "Ranging in chain surveying means:",
    options: ["Taking offsets", "Plotting the chain survey", "Establishing intermediate points on a straight line between two stations", "Measuring distances"],
    correct: 2,
    explanation: "Ranging is the process of establishing a series of intermediate points on a straight line.",
    difficulty: "medium"
  },
  {
    id: "d252l_021", subject: "da-252", lecture: "lecture-2", lectureNo: 2,
    question: "Obstacles to chaining over ponds or rivers are overcome by:",
    options: ["Geometric methods using similar triangles or Pythagoras theorem", "Stopping the survey", "Moving the survey line", "Ignoring the obstacle"],
    correct: 0,
    explanation: "Obstacles to chaining are overcome using geometric methods such as erecting perpendiculars and using similar triangles.",
    difficulty: "medium"
  },
  {
    id: "d252l_022", subject: "da-252", lecture: "lecture-2", lectureNo: 2,
    question: "The area of a farm measured by chain surveying is recorded in the field book in:",
    options: ["Square feet only", "Hectares only", "Chains and links, later converted to hectares", "Gunter's units only"],
    correct: 2,
    explanation: "Field measurements are recorded in chains and links; area is calculated from the plotted map.",
    difficulty: "medium"
  },

  // ── LECTURE 3: Compass Surveying ──────────────────────────────────────────
  {
    id: "d252l_023", subject: "da-252", lecture: "lecture-3", lectureNo: 3,
    question: "A prismatic compass measures:",
    options: ["Horizontal angles (bearings) using a magnetic needle", "Vertical angles", "Distances", "Elevations"],
    correct: 0,
    explanation: "A prismatic compass measures horizontal bearings (directions) using a freely suspended magnetic needle.",
    difficulty: "easy"
  },
  {
    id: "d252l_024", subject: "da-252", lecture: "lecture-3", lectureNo: 3,
    question: "Magnetic declination is the angle between:",
    options: ["Magnetic north and south", "Magnetic east and true east", "True north and magnetic north", "True north and geographic east"],
    correct: 2,
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
    options: ["Bearings from east", "N/S angle E/W (e.g., N 45° E, S 30° W)", "0°–360° from north", "Only in degrees"],
    correct: 1,
    explanation: "Quadrantal bearing specifies direction as angle from north or south toward east or west (0°–90° range).",
    difficulty: "medium"
  },
  {
    id: "d252l_027", subject: "da-252", lecture: "lecture-3", lectureNo: 3,
    question: "Back bearing = fore bearing ±:",
    options: ["45°", "180°", "360°", "90°"],
    correct: 1,
    explanation: "Back bearing = fore bearing + 180° (if FB < 180°) or fore bearing − 180° (if FB > 180°).",
    difficulty: "medium"
  },
  {
    id: "d252l_028", subject: "da-252", lecture: "lecture-3", lectureNo: 3,
    question: "Local attraction in compass surveying is caused by:",
    options: ["Atmospheric pressure", "Presence of magnetic materials (iron, electric cables) near the compass", "Earth's rotation", "Sun's gravity"],
    correct: 1,
    explanation: "Local attraction deflects the magnetic needle due to nearby iron objects, steel structures, or power lines.",
    difficulty: "medium"
  },
  {
    id: "d252l_029", subject: "da-252", lecture: "lecture-3", lectureNo: 3,
    question: "Traversing in compass survey involves:",
    options: ["Measuring a series of connected lines with distances and bearings", "Plotting only", "Only measuring distances", "Only measuring bearings"],
    correct: 0,
    explanation: "A traverse is a series of connected survey lines; both distances and bearings are measured.",
    difficulty: "medium"
  },
  {
    id: "d252l_030", subject: "da-252", lecture: "lecture-3", lectureNo: 3,
    question: "Closing error in a compass traverse is due to:",
    options: ["Correct scale selection", "Correct measurements", "Magnetic north alignment", "Accumulation of errors in measurement and plotting"],
    correct: 3,
    explanation: "Closing error is the gap between the starting and ending point of a closed traverse, due to accumulated measurement errors.",
    difficulty: "medium"
  },
  {
    id: "d252l_031", subject: "da-252", lecture: "lecture-3", lectureNo: 3,
    question: "Bowditch's rule (compass rule) for traverse adjustment distributes the closing error:",
    options: ["Randomly", "Only to the longest side", "Proportional to the length of each traverse side", "Equally to all sides"],
    correct: 2,
    explanation: "Bowditch's rule distributes the closing error in proportion to the length of each line in the traverse.",
    difficulty: "hard"
  },
  {
    id: "d252l_032", subject: "da-252", lecture: "lecture-3", lectureNo: 3,
    question: "The angle of dip is the angle between:",
    options: ["Horizontal plane and direction of earth's total magnetic field", "True north and magnetic north", "Magnetic needle and vertical", "Two traverse lines"],
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
    options: ["Level staff", "Compass", "Cross-staff", "Alidade"],
    correct: 3,
    explanation: "Alidade is a sighting device placed on the plane table to draw rays toward survey points.",
    difficulty: "medium"
  },
  {
    id: "d252l_035", subject: "da-252", lecture: "lecture-4", lectureNo: 4,
    question: "Radiation method in plane table surveying is used when:",
    options: ["Points are in multiple locations requiring traversing", "Underground surveys are done", "All points are visible from one station", "Levelling is needed"],
    correct: 2,
    explanation: "Radiation method: all detail points are sighted from a single instrument station — suitable for small open areas.",
    difficulty: "medium"
  },
  {
    id: "d252l_036", subject: "da-252", lecture: "lecture-4", lectureNo: 4,
    question: "Intersection method in plane table surveying requires:",
    options: ["Two or more instrument stations with intersecting rays to locate points", "A compass", "One instrument station", "A level"],
    correct: 0,
    explanation: "Intersection locates a point by intersecting rays from two or more instrument stations — useful when direct access is impossible.",
    difficulty: "medium"
  },
  {
    id: "d252l_037", subject: "da-252", lecture: "lecture-4", lectureNo: 4,
    question: "Theodolite is used for measuring:",
    options: ["Elevations only", "Distances only", "Both horizontal and vertical angles precisely", "Magnetic bearings"],
    correct: 2,
    explanation: "Theodolite is a precision optical instrument for measuring both horizontal and vertical angles.",
    difficulty: "easy"
  },
  {
    id: "d252l_038", subject: "da-252", lecture: "lecture-4", lectureNo: 4,
    question: "Verniers in a theodolite are used to:",
    options: ["Measure distances", "Read fractional parts of the main scale divisions (increase precision)", "Set the instrument level", "Measure magnetic north"],
    correct: 1,
    explanation: "Vernier scales allow reading of angles to fractions of a degree on the main graduated circle.",
    difficulty: "medium"
  },
  {
    id: "d252l_039", subject: "da-252", lecture: "lecture-4", lectureNo: 4,
    question: "Deflection angle is measured from:",
    options: ["Vertical axis", "Extension of the previous survey line", "North", "Magnetic south"],
    correct: 1,
    explanation: "Deflection angle is the angle between the extension of the preceding line and the following line.",
    difficulty: "medium"
  },
  {
    id: "d252l_040", subject: "da-252", lecture: "lecture-4", lectureNo: 4,
    question: "Tacheometry is a surveying method for:",
    options: ["Underground surveys", "Soil profiling", "Rapid determination of distances and elevations using stadia hairs in telescope", "Magnetic measurements"],
    correct: 2,
    explanation: "Tacheometry uses the stadia method to determine distances and elevations from staff readings without chaining.",
    difficulty: "hard"
  },

  // ── LECTURE 5: Levelling Principles and Methods ───────────────────────────
  {
    id: "d252l_041", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "Levelling is the process of determining:",
    options: ["Areas of fields", "Relative heights (elevations) of points on the earth's surface", "Horizontal distances", "Magnetic bearings"],
    correct: 1,
    explanation: "Levelling finds the difference in elevation between points to establish levels for engineering and agricultural works.",
    difficulty: "easy"
  },
  {
    id: "d252l_042", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "A Bench Mark (BM) is:",
    options: ["A farm boundary marker", "A temporary marker", "A chain length marker", "A permanent reference point of known elevation"],
    correct: 3,
    explanation: "Benchmark is a permanent fixed point of known elevation (height above MSL) used as reference for levelling.",
    difficulty: "easy"
  },
  {
    id: "d252l_043", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "Back Sight (BS) in levelling is the reading taken on:",
    options: ["A forward point", "The last point", "The first staff position (at known point/BM) after setting up instrument", "Any point"],
    correct: 2,
    explanation: "Back sight is taken on a point of known elevation (BM or change point) immediately after instrument setup.",
    difficulty: "medium"
  },
  {
    id: "d252l_044", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "Height of Instrument (HI) = RL of BM +:",
    options: ["Staff height", "Foresight reading", "Intermediate sight", "Back sight reading"],
    correct: 3,
    explanation: "HI (Instrument Height) = RL of point + Back sight reading on that point.",
    difficulty: "medium"
  },
  {
    id: "d252l_045", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "Rise and Fall method in levelling calculates RL by:",
    options: ["Compass readings", "Comparing consecutive staff readings (rise = previous IS/FS > current reading)", "Triangulation", "HI method"],
    correct: 1,
    explanation: "Rise and Fall method finds rises or falls between consecutive readings and applies them to successive RLs.",
    difficulty: "medium"
  },
  {
    id: "d252l_046", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "Arithmetic check in levelling (HI method): Sum of BS – Sum of FS =",
    options: ["Sum of all RLs", "Zero always", "Sum of IS", "Last RL – First RL"],
    correct: 3,
    explanation: "Arithmetic check: ΣBS − ΣFS = Last RL − First RL. This verifies the arithmetic but not field accuracy.",
    difficulty: "medium"
  },
  {
    id: "d252l_047", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "Reciprocal levelling is used when:",
    options: ["The area is flat", "The distance is short", "There are many intermediate points", "A large obstacle (river, valley) prevents direct levelling"],
    correct: 3,
    explanation: "Reciprocal levelling takes readings from both banks of an obstacle to eliminate errors from curvature and refraction.",
    difficulty: "medium"
  },
  {
    id: "d252l_048", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "Curvature correction in levelling is:",
    options: ["–0.0785 D² (subtractive)", "–D/4", "+0.0785 D² (additive)", "+D/2"],
    correct: 0,
    explanation: "Curvature makes staff readings too high; curvature correction C = −0.0785D² (m) where D is in km, so it is subtracted.",
    difficulty: "hard"
  },
  {
    id: "d252l_049", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "The permissible closing error for ordinary levelling is:",
    options: ["6√K mm", "Zero", "12√K mm", "24√K mm"],
    correct: 3,
    explanation: "Permissible closing error for ordinary levelling = 24√K mm (where K = distance in km).",
    difficulty: "hard"
  },
  {
    id: "d252l_050", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "A change point (CP) in levelling is a point where:",
    options: ["Both foresight and backsight readings are taken (instrument is shifted)", "Only one reading is taken", "The staff is held vertically", "The survey ends"],
    correct: 0,
    explanation: "Change point is where the instrument is moved: foresight on it from old position, then backsight from new position.",
    difficulty: "medium"
  },
  {
    id: "d252l_051", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "Dumpy level is preferred over tilting level because:",
    options: ["It works without a staff", "It measures horizontal distances", "It measures angles", "It has a simpler construction and is more stable for ordinary levelling"],
    correct: 3,
    explanation: "Dumpy level has a simple, robust construction suitable for ordinary levelling work.",
    difficulty: "medium"
  },

  // ── LECTURE 6: Contouring ─────────────────────────────────────────────────
  {
    id: "d252l_052", subject: "da-252", lecture: "lecture-6", lectureNo: 6,
    question: "Contour lines are lines joining points:",
    options: ["Of equal slope", "Of equal soil depth", "Of equal horizontal distance", "Of equal elevation (height) above a datum"],
    correct: 3,
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
    options: ["Steep slope", "Uniform slope", "Flat terrain", "Gentle slope"],
    correct: 0,
    explanation: "Close contour lines = steep slope; widely spaced contours = gentle/flat slope.",
    difficulty: "easy"
  },
  {
    id: "d252l_055", subject: "da-252", lecture: "lecture-6", lectureNo: 6,
    question: "Contour lines NEVER:",
    options: ["Cross each other (except for overhangs)", "Curve around valleys", "Close on themselves", "Bend around ridges"],
    correct: 0,
    explanation: "Contour lines never cross each other because a point cannot have two different elevations (except cliffs/overhangs which is rare).",
    difficulty: "medium"
  },
  {
    id: "d252l_056", subject: "da-252", lecture: "lecture-6", lectureNo: 6,
    question: "Contours bend upstream (uphill) when crossing a:",
    options: ["Ridge", "Valley / stream", "Hill top", "Plateau"],
    correct: 1,
    explanation: "Contour lines form a V-shape pointing upstream when crossing a valley or stream.",
    difficulty: "medium"
  },
  {
    id: "d252l_057", subject: "da-252", lecture: "lecture-6", lectureNo: 6,
    question: "Contour maps are useful in agriculture for:",
    options: ["Irrigation system design, soil conservation planning, drainage layout", "Fertilizer recommendations", "Pest scouting", "Planting decisions only"],
    correct: 0,
    explanation: "Contour maps guide terrace design, field levelling, irrigation channel layout, and soil conservation measures.",
    difficulty: "easy"
  },
  {
    id: "d252l_058", subject: "da-252", lecture: "lecture-6", lectureNo: 6,
    question: "The method of contouring by indirect method involves:",
    options: ["Eye sketching only", "Grid/section levelling and interpolating contour positions", "Direct spot height measurement on contour", "Aerial photography"],
    correct: 1,
    explanation: "Indirect contouring: spot heights are taken on a grid; contour lines are interpolated between these points.",
    difficulty: "medium"
  },
  {
    id: "d252l_059", subject: "da-252", lecture: "lecture-6", lectureNo: 6,
    question: "Gradient in agricultural land development refers to:",
    options: ["Crop growth rate", "The slope or rate of change of elevation (rise/horizontal distance)", "Water pH", "Soil fertility level"],
    correct: 1,
    explanation: "Gradient (slope) = vertical rise / horizontal distance, expressed as ratio, percentage, or angle.",
    difficulty: "easy"
  },
  {
    id: "d252l_060", subject: "da-252", lecture: "lecture-6", lectureNo: 6,
    question: "A contour interval suitable for a flat agricultural terrain (slope < 1%) would be:",
    options: ["25 m", "0.5 m", "100 m", "5 m"],
    correct: 1,
    explanation: "Small contour intervals (0.25–0.5 m) are used for flat land; large intervals for hilly terrain.",
    difficulty: "medium"
  },

  // ── LECTURE 7: Area Measurement ───────────────────────────────────────────
  {
    id: "d252l_061", subject: "da-252", lecture: "lecture-7", lectureNo: 7,
    question: "Area of a triangle by surveying field notes is calculated by:",
    options: ["Side²", "½ × Base × Perpendicular height", "½ × diagonal × sum of offsets", "Both A and B depending on shape"],
    correct: 1,
    explanation: "Area of triangle = ½ × base × perpendicular height. For complex shapes, offsets and mid-ordinates are used.",
    difficulty: "easy"
  },
  {
    id: "d252l_062", subject: "da-252", lecture: "lecture-7", lectureNo: 7,
    question: "Mid-ordinate rule for area calculation uses:",
    options: ["End ordinates only", "Average of end ordinates", "Ordinates at mid-points of each division", "Diagonal lengths"],
    correct: 2,
    explanation: "Mid-ordinate rule: Area = Width of strip × sum of mid-ordinates.",
    difficulty: "medium"
  },
  {
    id: "d252l_063", subject: "da-252", lecture: "lecture-7", lectureNo: 7,
    question: "Simpson's rule for area computation requires the number of ordinates to be:",
    options: ["Any number", "At least 10", "Odd", "Even"],
    correct: 2,
    explanation: "Simpson's rule requires an odd number of ordinates (even number of equal divisions).",
    difficulty: "medium"
  },
  {
    id: "d252l_064", subject: "da-252", lecture: "lecture-7", lectureNo: 7,
    question: "Planimeter is an instrument used to:",
    options: ["Measure elevations", "Measure distances", "Measure angles", "Measure areas of irregular figures on a map/plan"],
    correct: 3,
    explanation: "A planimeter (amsler or digital) traces the boundary of an irregular figure to determine its area.",
    difficulty: "medium"
  },
  {
    id: "d252l_065", subject: "da-252", lecture: "lecture-7", lectureNo: 7,
    question: "1 hectare equals:",
    options: ["1,000 m²", "100,000 m²", "10,000 m²", "100 m²"],
    correct: 2,
    explanation: "1 hectare = 10,000 m² (100 m × 100 m).",
    difficulty: "easy"
  },
  {
    id: "d252l_066", subject: "da-252", lecture: "lecture-7", lectureNo: 7,
    question: "1 acre equals approximately:",
    options: ["10,000 m²", "1,000 m²", "4,047 m²", "2,000 m²"],
    correct: 2,
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
    options: ["Chain lengths only", "X and Y coordinates of boundary points (surveyor's formula)", "Contour data", "Compass bearings only"],
    correct: 1,
    explanation: "The coordinate method uses X, Y coordinates of vertices to compute area using the surveyor's formula.",
    difficulty: "medium"
  },

  // ── LECTURE 8: Modern Surveying and Land Records ──────────────────────────
  {
    id: "d252l_069", subject: "da-252", lecture: "lecture-8", lectureNo: 8,
    question: "GPS (Global Positioning System) in surveying provides:",
    options: ["Elevation only", "Magnetic bearings only", "Precise 3D position (latitude, longitude, elevation) anywhere on earth", "Distance measurement only"],
    correct: 2,
    explanation: "GPS uses satellite signals to provide accurate 3D positioning for surveying and mapping.",
    difficulty: "easy"
  },
  {
    id: "d252l_070", subject: "da-252", lecture: "lecture-8", lectureNo: 8,
    question: "Total Station in surveying is an electronic instrument that:",
    options: ["Only levels the instrument", "Measures magnetic bearings", "Measures only angles", "Measures both horizontal/vertical angles and distances simultaneously"],
    correct: 3,
    explanation: "Total Station is an electronic theodolite integrated with EDM (Electronic Distance Measurement) for simultaneous angle and distance measurement.",
    difficulty: "medium"
  },
  {
    id: "d252l_071", subject: "da-252", lecture: "lecture-8", lectureNo: 8,
    question: "GIS (Geographic Information System) is used to:",
    options: ["Only store maps", "Replace surveyors", "Measure gravity", "Capture, store, analyze, and display geographic/spatial data"],
    correct: 3,
    explanation: "GIS integrates hardware, software, and data to manage and analyze geographic information for decision making.",
    difficulty: "medium"
  },
  {
    id: "d252l_072", subject: "da-252", lecture: "lecture-8", lectureNo: 8,
    question: "Remote sensing in agriculture uses:",
    options: ["Magnetic instruments", "Ground-based instruments only", "Chemical sensors in soil", "Satellite/aerial sensors to gather information about land features without direct contact"],
    correct: 3,
    explanation: "Remote sensing acquires information about earth's surface using sensors on satellites or aircraft.",
    difficulty: "medium"
  },
  {
    id: "d252l_073", subject: "da-252", lecture: "lecture-8", lectureNo: 8,
    question: "Adangal (or Pahani) is a land record document that contains:",
    options: ["Field-wise crop cultivation details, ownership, area, and irrigation source", "Fertilizer use data", "Soil survey reports", "Village revenue maps"],
    correct: 0,
    explanation: "Adangal/Pahani is the annual crop register maintained by village revenue officials showing field-wise agricultural data.",
    difficulty: "medium"
  },
  {
    id: "d252l_074", subject: "da-252", lecture: "lecture-8", lectureNo: 8,
    question: "Cadastral survey is conducted for:",
    options: ["Soil classification only", "Topographic mapping", "Weather mapping", "Fixing land boundaries, ownership, and area for legal/revenue purposes"],
    correct: 3,
    explanation: "Cadastral surveys determine land ownership boundaries and areas for revenue and legal purposes.",
    difficulty: "medium"
  },
  {
    id: "d252l_075", subject: "da-252", lecture: "lecture-8", lectureNo: 8,
    question: "Drone (UAV) surveying in agriculture is used for:",
    options: ["Only entertainment", "Underground surveys", "Weather forecasting", "Crop monitoring, area mapping, and precision agriculture applications"],
    correct: 3,
    explanation: "Agricultural drones equipped with cameras and sensors are used for crop health monitoring, field mapping, and precision application.",
    difficulty: "easy"
  },


  {
    id: "d252l_076", subject: "da-252", lecture: "lecture-16", lectureNo: 16,
    question: "The 'Base Period' in irrigation is defined as the time period between:",
    options: ["First watering during sowing to last watering before harvesting", "Start of the irrigation season to end of the season", "Canal opening to canal closure", "Sowing to harvesting of a crop"],
    correct: 0,
    explanation: "As per DA-252 notes: Base Period is the time period between the first watering of the crop during sowing to last watering before harvesting. It is expressed in days.",
    difficulty: "medium"
  },
  {
    id: "d252l_077", subject: "da-252", lecture: "lecture-16", lectureNo: 16,
    question: "'Delta' in irrigation terminology refers to:",
    options: ["Total area irrigated by one cumec", "Volume of water stored in a reservoir", "Total depth of water required by a crop during the entire base period", "Width of irrigation canal"],
    correct: 2,
    explanation: "As per DA-252 notes: Delta is the total depth of water required by a crop during its entire base period. Formula: Delta (Δ) = Volume of water / Total irrigated area.",
    difficulty: "medium"
  },
  {
    id: "d252l_078", subject: "da-252", lecture: "lecture-16", lectureNo: 16,
    question: "The relationship between Delta (Δ), Duty (D) and Base Period (B) is:",
    options: ["Delta = B/D x 10", "Delta = D x B", "Delta = 8.64 x B/D meters", "Delta = D/(8.64 x B)"],
    correct: 2,
    explanation: "As per DA-252 notes: Delta = 8.64B/D meters, where B is base period in days and D is duty in ha/cumec.",
    difficulty: "hard"
  },
  {
    id: "d252l_079", subject: "da-252", lecture: "lecture-15", lectureNo: 15,
    question: "The process of soil erosion by wind that accounts for 50 to 70% of total wind erosion movement is:",
    options: ["Surface creep", "Suspension", "Deflation", "Saltation"],
    correct: 3,
    explanation: "As per DA-252 notes: Saltation (short bounces/jumps of soil particles along ground surface) accounts for 50 to 70% of total movement in wind erosion. Suspension accounts for up to 15%.",
    difficulty: "medium"
  },
  {
    id: "d252l_080", subject: "da-252", lecture: "lecture-15", lectureNo: 15,
    question: "The minimum wind velocity at a height of 30.5 cm necessary for initiating movement of most erodible soil particles (0.1 mm diameter) is approximately:",
    options: ["16 km/hr", "35 km/hr", "25 km/hr", "8 km/hr"],
    correct: 0,
    explanation: "As per DA-252 notes: Minimum wind velocity necessary for initiating movement of most erodible soil particles (about 0.1 mm diameter) is about 16 km/hr at height of 30.5 cm.",
    difficulty: "hard"
  },
  {
    id: "d252l_081", subject: "da-252", lecture: "lecture-18", lectureNo: 18,
    question: "Irrigation projects with Culturable Command Area (CCA) between 2000 to 10,000 ha are classified as:",
    options: ["Minor irrigation projects", "Medium irrigation projects", "Major irrigation projects", "Micro irrigation projects"],
    correct: 1,
    explanation: "As per DA-252 notes: Medium irrigation projects have CCA between 2000 to 10,000 ha. Major: > 10,000 ha. Minor: < 2,000 ha.",
    difficulty: "easy"
  },
  {
    id: "d252l_082", subject: "da-252", lecture: "lecture-18", lectureNo: 18,
    question: "The Check Basin method of surface irrigation is most commonly used for which crops?",
    options: ["Wheat, barley and berseem", "Rice, sugarcane and maize", "Groundnut, finger millet, sorghum and vegetables", "Cotton, potato and citrus"],
    correct: 2,
    explanation: "As per DA-252 notes: Check basin method is most commonly used for irrigating crops like groundnut, finger millet, sorghum and vegetable crops. Also used for leaching salts in saline soil reclamation.",
    difficulty: "medium"
  },
  {
    id: "d252l_083", subject: "da-252", lecture: "lecture-18", lectureNo: 18,
    question: "The Border Strip method of irrigation is suitable for which crops?",
    options: ["Sparsely grown orchard crops", "Close growing crops like wheat, barley, groundnut and berseem", "Only rice fields", "Potato, sugarcane, maize and cotton"],
    correct: 1,
    explanation: "As per DA-252 notes: Border strip method is suitable for irrigating close growing crops such as wheat, barley, groundnut, bajra and berseem. Ring basin method is for orchard crops.",
    difficulty: "medium"
  },
  {
    id: "d252l_084", subject: "da-252", lecture: "lecture-19", lectureNo: 19,
    question: "In sprinkler irrigation, water is conveyed under which pressure range?",
    options: ["10 to 15 kg/cm2", "0.5 to 1 kg/cm2", "7 to 10 kg/cm2", "2 to 5 kg/cm2"],
    correct: 3,
    explanation: "As per DA-252 notes: In sprinkler irrigation, water is conveyed under pressure of 2 to 5 kg/cm2 developed by a pump through a network of pipes to laterals and sprinkler nozzles.",
    difficulty: "medium"
  },
  {
    id: "d252l_085", subject: "da-252", lecture: "lecture-19", lectureNo: 19,
    question: "A major limitation of sprinkler irrigation is:",
    options: ["Suitable only for paddy fields", "Cannot be used on undulated lands", "Cannot be used with fertilizers", "Uneven water distribution due to high wind velocities"],
    correct: 3,
    explanation: "As per DA-252 notes: Uneven distribution of water due to high wind velocities (particularly during summer) is a major limitation of sprinkler irrigation.",
    difficulty: "medium"
  },
  {
    id: "d252l_086", subject: "da-252", lecture: "lecture-20", lectureNo: 20,
    question: "Drip irrigation technology was first patented by Symcha Blass in:",
    options: ["1972", "1955", "1945", "1964"],
    correct: 3,
    explanation: "As per DA-252 notes: Current drip irrigation technology dates back to the work of Symcha Blass (1964), based on his observation that a large tree near a leaking faucet showed more vigorous growth.",
    difficulty: "medium"
  },
  {
    id: "d252l_087", subject: "da-252", lecture: "lecture-20", lectureNo: 20,
    question: "In surface drip irrigation, the discharge rate for single outlet emitters is:",
    options: ["Less than 16 L/h", "Less than 8 L/h", "Less than 2 L/h", "Less than 4 L/h"],
    correct: 1,
    explanation: "As per DA-252 notes: Surface drip irrigation applies water through emitters with discharge rate for point-source (single outlet) emitters less than 8 L/h; line-source emitters less than 4 L/h.",
    difficulty: "hard"
  },
  {
    id: "d252l_088", subject: "da-252", lecture: "lecture-21", lectureNo: 21,
    question: "Priming in a centrifugal pump refers to:",
    options: ["Adding lubricant to the impeller bearings", "Filling water in the suction pipe to remove air before starting", "Testing the pump discharge capacity", "Starting the pump without water"],
    correct: 1,
    explanation: "As per DA-252 notes: Priming is the process of removing air from pump casing and suction pipe by filling water. The centrifugal pump will not work if there is any air left in the suction pipe.",
    difficulty: "easy"
  },
  {
    id: "d252l_089", subject: "da-252", lecture: "lecture-21", lectureNo: 21,
    question: "Assertion (A): A closed impeller centrifugal pump is most suitable for handling clear irrigation water.\nReason (R): Closed impellers have shrouds on both sides of vanes and are suitable for non-viscous liquids free from foreign materials.",
    options: ["Both A and R are true but R is NOT the correct explanation of A", "A is false but R is true", "A is true but R is false", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "As per DA-252 notes: All ordinary centrifugal pumps used to pump clear irrigation water have closed impellers. Closed impeller has side walls on both sides and is suitable for non-viscous liquids free from foreign materials.",
    difficulty: "medium"
  },
  {
    id: "d252l_090", subject: "da-252", lecture: "lecture-22", lectureNo: 22,
    question: "Assertion (A): Submersible pumps can be used in very deep tube wells where a long shaft would not be practical.\nReason (R): In submersible pumps, both motor and pump are installed inside the well, fully submerged.",
    options: ["Both A and R are true but R is NOT the correct explanation of A", "A is false but R is true", "A is true but R is false", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
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
    options: ["A-2-ii, B-1-i,  C-4-iv,  D-3-iii", "A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-4-iv, B-3-iii, C-2-ii, D-1-i", "A-1-iii, B-2-i, C-3-ii,  D-4-iv"],
    correct: 1,
    explanation: "As per DA-252 notes: Check basin (square/rectangular plots) for groundnut/vegetables; Ring basin (circular bund) for orchards/cucurbits; Border strip (long parallel strips) for wheat/barley; Furrow method (ridges and furrows) for potato/sugarcane/maize.",
    difficulty: "medium"
  },
  {
    id: "d252l_093", subject: "da-252", lecture: "lecture-18", lectureNo: 18,
    question: "Match the following irrigation types with their description:\n     Column-I (Type)          |  Column-II (Definition)               |  Column-III (Energy source)\nA.  Flow irrigation          |  1.  Water flows by gravity from canal  |  i.   No lifting needed\nB.  Lift irrigation          |  2.  Water must be lifted before use    |  ii.  Pump required\nC.  Sub-surface irrigation   |  3.  Applied below soil surface         |  iii. Capillary action\nD.  Wild flooding            |  4.  No bunds, abundant water           |  iv.  Gravity, uncontrolled",
    options: ["A-2-ii, B-1-i,  C-4-iv,  D-3-iii", "A-1-ii, B-2-i,  C-3-iv,  D-4-iii", "A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-3-i,  B-4-ii,  C-1-iii,  D-2-iv"],
    correct: 2,
    explanation: "As per DA-252 notes: Flow irrigation - water flows by gravity from canal (no lifting); Lift irrigation - water must be lifted by pump; Sub-surface irrigation - applied below soil surface using capillary action; Wild flooding - uncontrolled, no bunds.",
    difficulty: "medium"
  },
  {
    id: "d252l_094", subject: "da-252", lecture: "lecture-16", lectureNo: 16,
    question: "Duty of irrigation water increases as one moves downstream from the head of the main canal because:",
    options: ["More water is available downstream", "Crops downstream need less water", "Transmission losses in channels reduce the water volume", "Transmission losses reduce effective delivery"],
    correct: 2,
    explanation: "As per DA-252 notes: Duty varies from point to point. It increases as one moves downstream from head of main canal to head of branches due to transmission losses in channels (water lost in transit reduces effective supply).",
    difficulty: "hard"
  },
  {
    id: "d252l_095", subject: "da-252", lecture: "lecture-20", lectureNo: 20,
    question: "In drip irrigation, screen filter aperture size should be between:",
    options: ["Equal to the orifice size", "1/3 to 1/5 of orifice size of emission device", "1/7 to 1/10 of orifice size of emission device", "1/2 to 1/3 of orifice size of emission device"],
    correct: 2,
    explanation: "As per DA-252 notes: The aperture size of the screen filter opening should be between 1/7th and 1/10th of the orifice size of the emission device to properly filter impurities.",
    difficulty: "hard"
  },
  {
    id: "d252l_096", subject: "da-252", lecture: "lecture-21", lectureNo: 21,
    question: "An open impeller centrifugal pump is most suitable for:",
    options: ["Pumping viscous liquids like molasses", "Pumping water mixed with sand, gravel and other solid materials", "Pumping clear irrigation water", "High-pressure deep well applications"],
    correct: 1,
    explanation: "As per DA-252 notes: Open impeller (no side wall/shroud) is used to handle water mixed with sand, gravel, clay, pebbles and other solid materials. It is made of forged steel but has a short life. Suitable for dredging works.",
    difficulty: "medium"
  },
  {
    id: "d252l_097", subject: "da-252", lecture: "lecture-15", lectureNo: 15,
    question: "In wind erosion, 'Surface creep' involves movement of soil particles of diameter:",
    options: ["0.1 to 0.5 mm", "0.5 to 2.0 mm", "Less than 0.1 mm", "Greater than 2.0 mm"],
    correct: 1,
    explanation: "As per DA-252 notes: Surface creep involves rolling and sliding of coarse particles 0.5 to 2.0 mm in diameter along ground surface due to impact of descending particles in saltation. Accounts for 5-25% of total movement.",
    difficulty: "hard"
  },
  {
    id: "d252l_098", subject: "da-252", lecture: "lecture-18", lectureNo: 18,
    question: "The Furrow method of irrigation is commonly used for which crops?",
    options: ["Wheat, barley, groundnut and berseem", "Groundnut, finger millet and sorghum", "Only paddy fields", "Potato, sugarcane, maize, cotton, melons and vegetables"],
    correct: 3,
    explanation: "As per DA-252 notes: Furrow method is commonly used for irrigating crops like potato, sugarcane, maize, cotton, melons, sugar beets and vegetables like lettuce.",
    difficulty: "easy"
  },
  {
    id: "d252l_099", subject: "da-252", lecture: "lecture-20", lectureNo: 20,
    question: "The largest area under drip irrigation globally (as of 2008 data) is found in which two countries?",
    options: ["Australia and South Africa", "Israel and India", "China and Brazil", "USA and Spain (1.5 million ha each)"],
    correct: 3,
    explanation: "As per DA-252 notes: At present (2008 data), the largest area under drip irrigation is in USA and Spain (1.5 million ha each), followed by India (1.43 million ha). Total world coverage increased from 4000 ha in 1972 to over 8 million ha in 2008.",
    difficulty: "medium"
  },
  {
    id: "d252l_100", subject: "da-252", lecture: "lecture-22", lectureNo: 22,
    question: "A key advantage of submersible pumps over centrifugal pumps is that:",
    options: ["They can be used in very deep tube wells where a long shaft is impractical", "They do not require any power source", "They are cheaper to install", "They are suitable only for shallow wells"],
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
    options: ["Only vertical distances", "Horizontal distances, differences in elevation, directions, angles, locations, areas and volumes", "Only areas and volumes", "Only horizontal distances"],
    correct: 1,
    explanation: "Surveying involves measurement and recording of horizontal distances, differences in elevation, directions, angles, locations, areas and volumes on or near the earth's surface."
  },
  {
    id: "d252x_002",
    subject: "da-252",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Which type of survey takes into account the curvature of the earth?",
    options: ["Compass surveying", "Chain surveying", "Plane surveying", "Geodetic surveying"],
    correct: 3,
    explanation: "Geodetic surveying (also called trigonometrical surveying) takes into account the curvature of the earth as it covers large distances and areas."
  },
  {
    id: "d252x_003",
    subject: "da-252",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "In plane surveying, the earth's surface is considered as:",
    options: ["A sphere", "A curved surface", "An ellipsoid", "A plane"],
    correct: 3,
    explanation: "In plane surveying, the earth's surface is considered as a plane and the curvature of the earth is not taken into account, as the surveys extend only to small areas."
  },
  {
    id: "d252x_004",
    subject: "da-252",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Which classification of surveys is based on the nature of the field of survey?",
    options: ["Chain, theodolite and compass surveys", "Land, marine and astronomical surveys", "Triangulation and traverse surveys", "Archaeological, geological and mine surveys"],
    correct: 1,
    explanation: "Classification based on the nature of the field includes: Land Surveys, Marine or Navigation Surveys, and Astronomical Surveys."
  },
  {
    id: "d252x_005",
    subject: "da-252",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Agricultural surveying is a form of which type of surveying?",
    options: ["Marine surveying", "Geodetic surveying", "Astronomical surveying", "Simple plane surveying"],
    correct: 3,
    explanation: "Agricultural surveying is a simple plane surveying that includes laying out contour lines, terrace lines, drainage lines, and computing field and farm areas."
  },
  {
    id: "d252x_006",
    subject: "da-252",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Which of the following is the most accurate method of measuring distance in surveying?",
    options: ["Chaining", "Judging distance", "Odometer method", "Pacing"],
    correct: 0,
    explanation: "Chaining (measuring distance with chain or tape) is the most accurate of all direct methods of measuring distance and is commonly used in surveying."
  },
  {
    id: "d252x_007",
    subject: "da-252",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "A passometer is a watch-like instrument used in surveying primarily to:",
    options: ["Measure number of wheel revolutions", "Measure vertical distances", "Record the number of paces automatically", "Set right angles in the field"],
    correct: 2,
    explanation: "The passometer is carried in a person's pocket or tied on the leg. It records paces automatically, overcoming the monotony and strain of counting manually."
  },
  {
    id: "d252x_008",
    subject: "da-252",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "An odometer in surveying measures:",
    options: ["The number of revolutions of a wheel", "The number of paces of the surveyor", "The horizontal angle between two lines", "The vertical height of terrain"],
    correct: 0,
    explanation: "An odometer measures the number of revolutions of a wheel. The number of revolutions multiplied by the circumference of the wheel gives the distance covered."
  },
  {
    id: "d252x_009",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "A metric chain as per IS 1492-1956 is made in lengths of:",
    options: ["50 and 100 meters", "20 and 30 meters", "10 and 20 meters", "30 and 50 meters"],
    correct: 1,
    explanation: "IS 1492-1956 specifies that chains are made in lengths of 20 and 30 meters. A 20m chain has 100 links and a 30m chain has 150 links."
  },
  {
    id: "d252x_010",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The length of each link in a 20m metric chain is:",
    options: ["0.2 m (20 cm)", "0.1 m (10 cm)", "0.3 m (30 cm)", "0.5 m (50 cm)"],
    correct: 0,
    explanation: "In a 20m metric chain with 100 links, the length of each link is 0.2 m (20 cm). A 30m chain has 150 links with the same 0.2m link length."
  },
  {
    id: "d252x_011",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Gunter's chain is also called:",
    options: ["Engineer's chain", "Steel band", "Revenue chain", "Surveyor's chain"],
    correct: 3,
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
    options: ["33 ft with 16 links", "100 ft with 100 links", "20 m with 100 links", "66 ft with 100 links"],
    correct: 0,
    explanation: "The Revenue chain is 33 ft long and divided into 16 links. It is commonly used for measuring fields in cadastral survey."
  },
  {
    id: "d252x_014",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The Engineer's chain is used on all engineering surveys and has dimensions of:",
    options: ["33 ft, 16 links", "20 m, 100 links", "100 ft, 100 links", "66 ft, 100 links"],
    correct: 2,
    explanation: "The Engineer's chain is 100 ft long and divided into 100 links (each link = 1 ft). Distances measured with it are recorded in feet and decimals."
  },
  {
    id: "d252x_015",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The invar tape used for high-precision surveys is made of an alloy of:",
    options: ["Stainless steel (90%) and chromium (10%)", "Iron (70%) and zinc (30%)", "Steel (80%) and copper (20%)", "Steel (64%) and nickel (36%)"],
    correct: 3,
    explanation: "The invar tape is made of an alloy of steel (64%) and nickel (36%). It has a very low coefficient of thermal expansion (0.6×10⁻⁴ per °C) making it ideal for precision work."
  },
  {
    id: "d252x_016",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Ranging rods are made in two sizes, namely:",
    options: ["5 m and 10 m", "3 m and 5 m", "2 m and 3 m", "1 m and 2 m"],
    correct: 2,
    explanation: "Ranging rods are made in two sizes: 2 m and 3 m. They are divided into equal parts of 0.2 m and painted alternately red and white (or black and white) to make them visible."
  },
  {
    id: "d252x_017",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Arrows (chain pins) in chain surveying are used to:",
    options: ["Mark contour lines", "Mark right angles", "Mark the position of the compass", "Mark the end of each chain length during chaining"],
    correct: 3,
    explanation: "Arrows (chain pins) are used to mark the end of each chain during the process of chaining. Each chain comes with 10 arrows, made of 4 mm (8 s.w.g.) metallic wire, 400 mm long."
  },
  {
    id: "d252x_018",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "How many arrows accompany each chain in chain surveying?",
    options: ["5", "10", "8", "12"],
    correct: 1,
    explanation: "Accompanying each chain are 10 arrows (also called marking or chaining pins). They are made of 4 mm diameter metallic wire, 400 mm in length."
  },
  {
    id: "d252x_019",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "A plumb bob in surveying is used primarily to:",
    options: ["Range lines over obstacles", "Locate points directly below or above another point", "Measure offsets from the chain line", "Measure angles between lines"],
    correct: 1,
    explanation: "A plumb bob consists of a metal weight (brass) with a pointed end suspended by a string. It is used to locate points directly below or above another point and for centering instruments."
  },
  {
    id: "d252x_020",
    subject: "da-252",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "A cross-staff in chain surveying is used for:",
    options: ["Measuring angles between two chain lines", "Measuring the length of chain lines", "Setting out right angles to a chain line", "Recording the number of chains measured"],
    correct: 2,
    explanation: "A cross-staff is used for setting out right angles (perpendicular offsets) to a chain line. Types include open cross-staff and French cross-staff."
  },
  {
    id: "d252x_021",
    subject: "da-252",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "An optical square is a surveying instrument used for:",
    options: ["Setting out right angles more precisely than a cross-staff", "Measuring vertical angles", "Measuring distances by optical means", "Drawing plans in the office"],
    correct: 0,
    explanation: "An optical square is used for setting out right angles to a chain line. It is more precise than a cross-staff and uses the principle of double reflection by two mirrors at 45° to each other."
  },
  {
    id: "d252x_022",
    subject: "da-252",
    lecture: "lecture-12",
    lectureNo: 12,
    question: "The prismatic compass in surveying is used for measuring:",
    options: ["Right-angle offsets", "Distance along a chain line", "Vertical angles and elevations", "Magnetic bearings of survey lines"],
    correct: 3,
    explanation: "The prismatic compass is used for measuring the magnetic bearings of survey lines. It allows the surveyor to read the bearing directly through a prism while sighting the object."
  },
  {
    id: "d252x_023",
    subject: "da-252",
    lecture: "lecture-13",
    lectureNo: 13,
    question: "In compass surveying, the bearing of a line measured from the north in a clockwise direction is called:",
    options: ["Fore bearing", "Reduced bearing", "Back bearing", "Whole circle bearing"],
    correct: 3,
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
    options: ["Preventing erosion and conserving moisture for sustainable agriculture", "Increasing groundwater extraction", "Increasing rainfall in dry areas", "Draining excess water from waterlogged areas only"],
    correct: 0,
    explanation: "Soil and water conservation aims to prevent soil erosion, conserve moisture, maintain soil fertility, and ensure sustainable agricultural productivity."
  },
  {
    id: "d252x_026",
    subject: "da-252",
    lecture: "lecture-18",
    lectureNo: 18,
    question: "Which irrigation method involves applying water directly to the soil surface in channels or borders?",
    options: ["Sprinkler irrigation", "Drip irrigation", "Sub-surface irrigation", "Surface irrigation"],
    correct: 3,
    explanation: "Surface irrigation involves applying water directly to the soil surface through channels, borders, basins, or furrows. It is the most traditional and widely used irrigation method."
  },
  {
    id: "d252x_027",
    subject: "da-252",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "In sprinkler irrigation, water is applied in the form of drops of size:",
    options: ["0.05 to 0.25 mm", "4 to 10 mm", "0.5 to 4 mm", "10 to 20 mm"],
    correct: 2,
    explanation: "In sprinkler irrigation, water is applied in the form of drops of 0.5 to 4 mm size, similar to rainfall. The operating pressure is typically 2 to 5 kg/cm²."
  },
  {
    id: "d252x_028",
    subject: "da-252",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "The operating pressure required for sprinkler irrigation systems is typically:",
    options: ["2 to 5 kg/cm²", "0.5 to 1.0 kg/cm²", "10 to 15 kg/cm²", "0.2 to 0.5 kg/cm²"],
    correct: 0,
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
    options: ["William Shockley in 1955", "Dr. M.S. Swaminathan in 1970", "Dr. Norman Borlaug in 1960", "Symcha Blass in 1964"],
    correct: 3,
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
    options: ["Filter sediment from irrigation water", "Deliver a constant flow rate regardless of pressure variations", "Increase water pressure in the main line", "Rotate to distribute water over a wide area"],
    correct: 1,
    explanation: "Online pressure-compensating emitters deliver a constant flow rate regardless of pressure variations along the lateral line, ensuring uniform water distribution."
  },
  {
    id: "d252x_033",
    subject: "da-252",
    lecture: "lecture-21",
    lectureNo: 21,
    question: "The working principle of a centrifugal pump involves:",
    options: ["Impeller rotation imparting kinetic energy to water", "Reciprocating pistons creating positive displacement", "Air pressure forcing water upward", "Gravity flow from an elevated tank"],
    correct: 0,
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
    options: ["Adjusting the impeller speed", "Connecting the discharge pipe to the motor", "Adding oil to the pump bearings", "Filling the pump casing with water before starting"],
    correct: 3,
    explanation: "Priming involves filling the pump casing and suction pipe with water before starting. Centrifugal pumps cannot self-prime (unlike positive displacement pumps) and require priming."
  },
  {
    id: "d252x_036",
    subject: "da-252",
    lecture: "lecture-22",
    lectureNo: 22,
    question: "In a submersible pump, both the motor and pump are:",
    options: ["Submerged in the water being pumped", "Located in a separate pump house near the well", "Connected by a long shaft from the surface", "Placed above ground level on a platform"],
    correct: 0,
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
    options: ["Size of the greenhouse", "Type of crops grown", "Covering material used", "Shape of the structure"],
    correct: 3,
    explanation: "Lean-to, even span, uneven span, ridge-and-furrow, saw-tooth, and quonset greenhouses are all classified based on the shape of the structure."
  },
  {
    id: "d252x_040",
    subject: "da-252",
    lecture: "lecture-27",
    lectureNo: 27,
    question: "Which greenhouse type is formed by joining two or more even span or uneven span greenhouses along their sides?",
    options: ["Lean-to", "Quonset", "Saw-tooth", "Ridge-and-furrow (Gutter-connected)"],
    correct: 3,
    explanation: "Ridge-and-furrow (also called gutter-connected) greenhouses are formed by joining two or more even span or uneven span units along their sides, sharing gutters/eaves for drainage."
  },
  {
    id: "d252x_041",
    subject: "da-252",
    lecture: "lecture-28",
    lectureNo: 28,
    question: "The ambient concentration of carbon dioxide (CO₂) in the atmosphere is approximately:",
    options: ["500 ppm", "200 ppm", "280 ppm", "345 ppm"],
    correct: 3,
    explanation: "The ambient (outside) concentration of CO₂ in the atmosphere is approximately 345 ppm. During active photosynthesis, plants draw greenhouse CO₂ down to below 200 ppm."
  },
  {
    id: "d252x_042",
    subject: "da-252",
    lecture: "lecture-30",
    lectureNo: 30,
    question: "The optimal CO₂ enrichment level in greenhouses for maximum plant growth is:",
    options: ["1000-1200 ppm", "345 ppm (ambient level)", "2000-3000 ppm", "500-700 ppm"],
    correct: 0,
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
    options: ["Lux", "Foot-candles per hour", "Watts per square meter", "Candela"],
    correct: 0,
    explanation: "Light intensity in greenhouse horticulture is measured in Lux. Most greenhouse crops saturate at approximately 32,200 Lux (32.2 klux). Visible light for photosynthesis spans 400-700 nm."
  },
  {
    id: "d252x_045",
    subject: "da-252",
    lecture: "lecture-29",
    lectureNo: 29,
    question: "The wavelength range of visible light used in photosynthesis is:",
    options: ["1000-1200 nm", "400-700 nm", "200-400 nm", "700-1000 nm"],
    correct: 1,
    explanation: "Photosynthetically active radiation (PAR) spans the visible light range of 400-700 nm (nanometers). Blue light (400-500 nm) and red light (600-700 nm) are most effective."
  },
  {
    id: "d252x_046",
    subject: "da-252",
    lecture: "lecture-29",
    lectureNo: 29,
    question: "Which greenhouse crop requires the highest night temperature of approximately 21-22°C?",
    options: ["Carnation", "Chrysanthemum and Poinsettia", "Primula and Mathiola", "African violet"],
    correct: 3,
    explanation: "African violet requires the highest night temperature of 21-22°C. In contrast: Primula/Mathiola need 7°C, Carnation 10°C, Rose 16°C, and Chrysanthemum/Poinsettia 17-18°C."
  },
  {
    id: "d252x_047",
    subject: "da-252",
    lecture: "lecture-29",
    lectureNo: 29,
    question: "Which greenhouse crop requires the lowest night temperature of approximately 7°C?",
    options: ["Rose", "Carnation", "Primula and Mathiola", "African violet"],
    correct: 2,
    explanation: "Primula and Mathiola require the lowest night temperature of approximately 7°C. Most other crops require higher temperatures (carnation 10°C, rose 16°C, chrysanthemum 17-18°C)."
  },
  {
    id: "d252x_048",
    subject: "da-252",
    lecture: "lecture-30",
    lectureNo: 30,
    question: "Assertion (A): CO₂ enrichment in greenhouses significantly enhances crop yield and quality.\nReason (R): During active photosynthesis, plants can draw down greenhouse CO₂ levels to below 200 ppm, which is limiting for growth.",
    options: ["Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "CO₂ enrichment boosts yield because plants actively deplete greenhouse CO₂ below 200 ppm (limiting level) during photosynthesis. Supplementing to 1000-1200 ppm overcomes this limitation."
  },
  {
    id: "d252x_049",
    subject: "da-252",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "Assertion (A): Sprinkler irrigation is more efficient than surface irrigation in undulating terrain.\nReason (R): Sprinkler systems distribute water uniformly regardless of land slope without requiring land leveling.",
    options: ["Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "Sprinkler irrigation is efficient in undulating terrain because it distributes water uniformly without needing land leveling. Surface irrigation requires leveled land for uniform water distribution."
  },
  {
    id: "d252x_050",
    subject: "da-252",
    lecture: "lecture-21",
    lectureNo: 21,
    question: "Assertion (A): Centrifugal pumps require priming before operation.\nReason (R): Centrifugal pumps cannot develop suction lift if the casing is filled with air instead of water.",
    options: ["Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true", "Both A and R are true and R is the correct explanation of A"],
    correct: 3,
    explanation: "Centrifugal pumps require priming because an air-filled casing cannot develop the suction needed to lift water. The impeller must be surrounded by water to function effectively."
  },
  {
    id: "d252x_051",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Match the following chains with their lengths:\n     Column-I (Chain Type)  |  Column-II (Length)  |  Column-III (Links)\nA.  Gunter's Chain  |  1.  33 ft  |  i.  100 links\nB.  Revenue Chain  |  2.  100 ft  |  ii.  16 links\nC.  Engineer's Chain  |  3.  66 ft  |  iii.  100 links",
    options: ["A-3-i, B-1-ii, C-2-iii", "A-1-i, B-3-ii, C-2-iii", "A-3-iii, B-2-ii, C-1-i", "A-2-iii, B-1-ii, C-3-i"],
    correct: 0,
    explanation: "Gunter's Chain: 66 ft, 100 links. Revenue Chain: 33 ft, 16 links. Engineer's Chain: 100 ft, 100 links."
  },
  {
    id: "d252x_052",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Match the following tapes with their characteristics:\n     Column-I (Tape Type)  |  Column-II (Material)  |  Column-III (Use)\nA.  Cloth tape  |  1.  Steel (64%) + Nickel (36%)  |  i.  Subsidiary measurements/offsets\nB.  Invar tape  |  2.  Varnished woven linen  |  ii.  Highest precision base lines\nC.  Steel tape  |  3.  Steel ribbon/stainless steel  |  iii.  Precise measurements, checking chains",
    options: ["A-2-iii, B-3-ii, C-1-i", "A-1-ii, B-2-i, C-3-iii", "A-2-i, B-1-ii, C-3-iii", "A-3-iii, B-1-ii, C-2-i"],
    correct: 2,
    explanation: "Cloth tape: varnished linen, used for subsidiary measurements. Invar tape: steel+nickel alloy, for highest precision base line measurements. Steel tape: stainless steel, for precise work."
  },
  {
    id: "d252x_053",
    subject: "da-252",
    lecture: "lecture-27",
    lectureNo: 27,
    question: "Match the following greenhouse types with their descriptions:\n     Column-I (Type)  |  Column-II (Description)\nA.  Lean-to  |  1.  Two or more spans joined at gutters\nB.  Even span  |  2.  Built against a wall, one sloping roof\nC.  Ridge-and-furrow  |  3.  Both sides of equal pitch and width\nD.  Quonset  |  4.  Semicircular (hoop) cross-section",
    options: ["A-2, B-3, C-1, D-4", "A-1, B-2, C-3, D-4", "A-4, B-3, C-2, D-1", "A-3, B-2, C-4, D-1"],
    correct: 0,
    explanation: "Lean-to: built against a wall with one sloping roof. Even span: both sides equal pitch. Ridge-and-furrow: multiple spans joined at gutters. Quonset: semicircular hoop design."
  },
  {
    id: "d252x_054",
    subject: "da-252",
    lecture: "lecture-29",
    lectureNo: 29,
    question: "Match the following greenhouse crops with their required night temperature:\n     Column-I (Crop)  |  Column-II (Night Temp)\nA.  Carnation  |  1.  21-22°C\nB.  African violet  |  2.  16°C\nC.  Rose  |  3.  10°C\nD.  Primula  |  4.  7°C",
    options: ["A-4, B-3, C-2, D-1", "A-3, B-1, C-2, D-4", "A-2, B-1, C-4, D-3", "A-1, B-2, C-3, D-4"],
    correct: 1,
    explanation: "Carnation: 10°C. African violet: 21-22°C. Rose: 16°C. Primula: 7°C (also Mathiola). Chrysanthemum and Poinsettia: 17-18°C."
  },
  {
    id: "d252x_055",
    subject: "da-252",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Which of the following surveys uses artificial earth satellites for determining positions?",
    options: ["Compass surveying", "Chain surveying", "Plane surveying", "Geodetic surveying"],
    correct: 3,
    explanation: "Geodetic surveying uses artificial earth satellites (GPS) for determining precise positions of widely distant points on the earth's surface, taking into account earth's curvature."
  },
  {
    id: "d252x_056",
    subject: "da-252",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "The pacing technique in surveying is mostly employed in:",
    options: ["Triangulation surveys", "Preliminary surveys and explorations", "Cadastral surveys", "Final detailed surveys"],
    correct: 1,
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
    options: ["Improve its visibility in the field", "Make it electrically conductive for safety", "Increase its weight for stability", "Prevent stretching of fibres"],
    correct: 3,
    explanation: "The metallic tape is made from cotton or linen reinforced with fine brass or copper wires to prevent stretching of fibres, making it better than simple linen tapes."
  },
  {
    id: "d252x_059",
    subject: "da-252",
    lecture: "lecture-22",
    lectureNo: 22,
    question: "Which advantage does a submersible pump have over a surface centrifugal pump?",
    options: ["No need for priming as both pump and motor are submerged", "Lower initial cost", "Higher maintenance requirement", "Suitable for very shallow wells only"],
    correct: 0,
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
    options: ["5 metre", "1 metre", "10 metre", "2 metre"],
    correct: 0,
    explanation: "In metric chains, tallies are fixed at every 5-metre length to enable quick reading of fractions. Small brass rings are provided at every metre length except where tallies are attached."
  },
  {
    id: "d252x_062",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Ranging rods are painted alternately to improve visibility. The typical colour combinations used are:",
    options: ["Red and white, or red, white and black, or black and white", "Silver and gold, or red and yellow", "Orange and purple, or blue and white", "Blue and green, or yellow and black"],
    correct: 0,
    explanation: "Ranging rods are painted alternately black and white, or red and white, or red, white and black successively, each division being 0.2 m long, to make them visible at distance."
  },
  {
    id: "d252x_063",
    subject: "da-252",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "Which of the following best describes the advantage of drip irrigation over sprinkler irrigation?",
    options: ["Drip irrigation is more suitable for large grain crops", "Drip irrigation covers a wider area per unit time", "Drip irrigation requires higher operating pressure", "Drip irrigation applies water directly to the root zone, minimizing evaporation losses"],
    correct: 3,
    explanation: "Drip irrigation applies water directly to the root zone through emitters, minimizing evaporation, runoff, and deep percolation losses. It is highly efficient, especially for row crops and orchards."
  },
  {
    id: "d252x_064",
    subject: "da-252",
    lecture: "lecture-21",
    lectureNo: 21,
    question: "In a centrifugal pump, which type of impeller is used for pumping clear water without any suspended solids?",
    options: ["Open impeller", "Closed impeller", "Mixed-flow impeller", "Semi-open impeller"],
    correct: 1,
    explanation: "Closed impellers are used for pumping clear water without any suspended solids. Open impellers are for sand/gravel/dredging, and semi-open impellers for moderately dirty water."
  },
  {
    id: "d252x_065",
    subject: "da-252",
    lecture: "lecture-27",
    lectureNo: 27,
    question: "Which greenhouse type has a semicircular cross-section and is generally the most economical to construct?",
    options: ["Lean-to", "Quonset", "Even span", "Saw-tooth"],
    correct: 1,
    explanation: "Quonset greenhouses have a semicircular (hoop) cross-section. They are generally the most economical to construct as they require minimal structural framing material."
  },
  {
    id: "d252x_066",
    subject: "da-252",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The two main parts of survey work are:",
    options: ["Chaining and offsetting", "Triangulation and traversing", "Field work (taking measurements) and office work (computing and drawing)", "Ranging and chaining"],
    correct: 2,
    explanation: "The process of survey is divided into two parts: (a) Field work — taking measurements, and (b) Office work — computing and drawing (preparing plans and maps)."
  },
  {
    id: "d252x_067",
    subject: "da-252",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "A representation to some scale of the ground and objects upon it as projected on a horizontal plane is called:",
    options: ["A plan (if scale is large) or a map (if scale is small)", "A map (if scale is large)", "A profile", "A plan (if scale is small)"],
    correct: 0,
    explanation: "The representation is called a plan if the scale is large, and a map if the scale is small. Plans show only horizontal distances. Both are results of surveying."
  },
  {
    id: "d252x_068",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The Steel Band (band chain) is preferred over an ordinary chain for accurate work because:",
    options: ["It has more links per unit length", "It does not need to be lubricated", "It is heavier and more robust", "It is practically unalterable in length, lighter and easier to handle"],
    correct: 3,
    explanation: "The steel band (band chain) is preferred for accurate work as it is practically unalterable in length, lighter, and easier to handle. It must be protected from rust by cleaning and oiling."
  },
  {
    id: "d252x_069",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The synthetic tape for surveying is manufactured of glass fibre with PVC coating. It is graduated every:",
    options: ["1 mm with figures at every 10 mm", "20 mm with figures at every 200 mm", "10 mm with figures at every 100 mm", "5 mm with figures at every 50 mm"],
    correct: 2,
    explanation: "The synthetic tape is graduated every 10 mm and figured every 100 mm, with metric figures shown in red at every metre. They maintain their lengths well for short measurements."
  },
  {
    id: "d252x_070",
    subject: "da-252",
    lecture: "lecture-29",
    lectureNo: 29,
    question: "Light saturation point for most greenhouse crops is approximately:",
    options: ["100,000 Lux", "32,200 Lux (32.2 klux)", "15,000 Lux", "5,000 Lux"],
    correct: 1,
    explanation: "Most greenhouse crops have a light saturation point of approximately 32,200 Lux (32.2 klux). Above this, additional light does not increase photosynthesis (photoinhibition may occur)."
  },
  {
    id: "d252x_071",
    subject: "da-252",
    lecture: "lecture-26",
    lectureNo: 26,
    question: "Which of the following is NOT a characteristic advantage of greenhouse cultivation?",
    options: ["Elimination of all labour costs", "Effective pest management", "Growing crops out of season", "Production of superior quality products"],
    correct: 0,
    explanation: "Greenhouse cultivation does not eliminate labour costs — it may actually require more skilled labour. Key advantages are quality produce, off-season production, pest control, and computer automation."
  },
  {
    id: "d252x_072",
    subject: "da-252",
    lecture: "lecture-30",
    lectureNo: 30,
    question: "Ventilation in greenhouses can be of two types, which are:",
    options: ["Overhead and side ventilation only", "Natural and forced (mechanical) ventilation", "Active and passive ventilation", "Wet-wall and dry ventilation"],
    correct: 1,
    explanation: "Greenhouse ventilation can be natural (using ridge vents, side vents, and stack effect) or forced/mechanical (using fans and blowers). Both help control temperature and humidity."
  },
  {
    id: "d252x_073",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Chain links are made of 4 mm diameter galvanized mild steel wire. The ends of each link are bent into a loop and connected by:",
    options: ["Three oval rings", "Welded joints only", "Two oval rings", "Four connecting bolts"],
    correct: 0,
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
    options: ["1.0 million hectares", "0.5 million hectares", "1.43 million hectares", "2.5 million hectares"],
    correct: 2,
    explanation: "India has approximately 1.43 million hectares under drip irrigation, placing it behind USA and Spain (1.5 million ha each) globally."
  },
  {
    id: "d252x_076",
    subject: "da-252",
    lecture: "lecture-15",
    lectureNo: 15,
    question: "Which of the following soil and water conservation measures is used to slow down runoff and allow water infiltration on slopes?",
    options: ["Tube well installation", "Contour bunding and terracing", "Canal lining", "Field drainage"],
    correct: 1,
    explanation: "Contour bunding and terracing are key soil and water conservation measures that slow runoff, prevent erosion, and allow rainwater to infiltrate the soil on sloping land."
  },
  {
    id: "d252x_077",
    subject: "da-252",
    lecture: "lecture-16",
    lectureNo: 16,
    question: "Crop water requirement (ETc) is the product of:",
    options: ["Rainfall and irrigation water applied", "Root zone depth and soil moisture holding capacity", "Pan evaporation and soil moisture deficit", "Reference evapotranspiration (ET₀) and crop coefficient (Kc)"],
    correct: 3,
    explanation: "Crop water requirement (ETc = ET₀ × Kc) is calculated as the product of reference evapotranspiration (ET₀) and the crop-specific coefficient (Kc) that varies with growth stage."
  },
  {
    id: "d252x_078",
    subject: "da-252",
    lecture: "lecture-25",
    lectureNo: 25,
    question: "A Parshall flume is a water measuring device used in irrigation to measure:",
    options: ["Soil moisture content", "Groundwater level in wells", "Pump discharge pressure", "Flow velocity in open channels and canals"],
    correct: 3,
    explanation: "A Parshall flume is a fixed hydraulic structure used to measure the flow rate (discharge) in open channels, canals, and irrigation systems."
  },
  {
    id: "d252x_079",
    subject: "da-252",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "In chain surveying, the main line is the:",
    options: ["Line connecting two offset points", "Line parallel to the boundary of the field", "Shortest line joining two survey stations", "Longest line passing through the centre of the area"],
    correct: 3,
    explanation: "The main line in chain surveying is the longest line passing through the centre of the area. It forms the backbone of the survey from which offsets are taken to locate details."
  },
  {
    id: "d252x_080",
    subject: "da-252",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "An offset in chain surveying is a measurement taken:",
    options: ["Along the main chain line", "Along a diagonal to the main line", "Parallel to the boundary of the survey area", "Perpendicular (or nearly so) to the main chain line to locate a detail point"],
    correct: 3,
    explanation: "An offset is a lateral measurement taken perpendicular (or oblique) to the main chain line to locate detail points (boundaries, objects) that are away from the chain line."
  },
  {
    id: "d252x_081",
    subject: "da-252",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Invar tape has a very low coefficient of thermal expansion of:",
    options: ["0.06 × 10⁻⁴ per °C", "6.0 × 10⁻⁴ per °C", "0.6 × 10⁻⁴ per °C", "60 × 10⁻⁴ per °C"],
    correct: 2,
    explanation: "Invar tape has a very low coefficient of thermal expansion of 0.6 × 10⁻⁴ per °C (compared to ~1.2 × 10⁻⁵ for steel), making it ideal for base line measurements in triangulation."
  },
  {
    id: "d252x_082",
    subject: "da-252",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Triangulation survey involves dividing the survey area into a series of:",
    options: ["Parallel strips", "Triangles whose vertices are survey stations", "Rectangular grids", "Concentric circles"],
    correct: 1,
    explanation: "Triangulation survey divides the area into a network of triangles. By measuring the angles of each triangle and one base line, all distances can be calculated trigonometrically."
  },
  {
    id: "d252x_083",
    subject: "da-252",
    lecture: "lecture-27",
    lectureNo: 27,
    question: "Shade nets used in horticulture are classified based on:",
    options: ["The percentage of shade they provide", "The type of irrigation used under them", "The material of the frame structure", "The height of the structure"],
    correct: 0,
    explanation: "Shade nets are classified based on the percentage of light they block (e.g., 25%, 35%, 50%, 75% shade). Different crops require different shade levels depending on their light requirements."
  },
  {
    id: "d252x_084",
    subject: "da-252",
    lecture: "lecture-31",
    lectureNo: 31,
    question: "In greenhouse climate control, the pad-and-fan system is used for:",
    options: ["Summer cooling through evaporative cooling", "CO₂ enrichment", "Humidity reduction in winter", "Winter heating of the greenhouse"],
    correct: 0,
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
    options: ["The direction of true north (geographic north)", "The direction of the survey line", "A line perpendicular to the survey line", "The direction indicated by a freely suspended magnetic needle"],
    correct: 3,
    explanation: "The magnetic meridian is the direction indicated by a freely suspended and balanced magnetic needle at a given place. It generally differs from the true (geographic) meridian."
  },
  {
    id: "d252x_087",
    subject: "da-252",
    lecture: "lecture-21",
    lectureNo: 21,
    question: "Which component of a centrifugal pump converts velocity energy (kinetic energy) to pressure energy?",
    options: ["Priming valve", "Volute casing", "Impeller", "Suction pipe"],
    correct: 1,
    explanation: "In a centrifugal pump, the impeller imparts velocity to water, and the volute casing (or diffuser) converts this velocity/kinetic energy into pressure energy."
  },
  {
    id: "d252x_088",
    subject: "da-252",
    lecture: "lecture-19",
    lectureNo: 19,
    question: "Which crop type is most suitable for sprinkler irrigation?",
    options: ["Aquatic plants", "Closely spaced field crops, vegetables, and orchards on undulating terrain", "Paddy (flooded field crops)", "Crops requiring waterlogged conditions"],
    correct: 1,
    explanation: "Sprinkler irrigation is most suitable for closely spaced field crops, vegetables, orchards, and crops on undulating terrain where surface irrigation is impractical."
  },
  {
    id: "d252x_089",
    subject: "da-252",
    lecture: "lecture-26",
    lectureNo: 26,
    question: "Computer automation in greenhouses is used primarily for:",
    options: ["Processing harvested produce", "Operating farm machinery in open fields", "Managing farm accounts and billing", "Controlling temperature, humidity, CO₂, irrigation, and lighting automatically"],
    correct: 3,
    explanation: "Computers in greenhouses automate the control of all environmental parameters — temperature, humidity, CO₂ levels, irrigation scheduling, and artificial lighting for optimal crop growth."
  },
  {
    id: "d252x_090",
    subject: "da-252",
    lecture: "lecture-27",
    lectureNo: 27,
    question: "An uneven span greenhouse differs from an even span greenhouse in that:",
    options: ["It is always attached to another building", "It has no roof ventilation", "One side (south-facing) has a steeper pitch to maximize solar radiation capture", "It has both sides of equal pitch and width"],
    correct: 2,
    explanation: "In an uneven span greenhouse, one side (usually south-facing) has a steeper pitch to maximize solar radiation capture in winter. An even span has both sides of equal pitch and width."
  },
  {
    id: "d252x_091",
    subject: "da-252",
    lecture: "lecture-28",
    lectureNo: 28,
    question: "The saw-tooth greenhouse design is advantageous because it provides:",
    options: ["Better natural ventilation and more uniform light distribution", "The cheapest construction cost per unit area", "Maximum structural stability in high winds", "Maximum growing area with minimum shading"],
    correct: 0,
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
    options: ["Store digital survey data", "Record all measurements systematically for office computation and drawing", "Are used only for legal disputes", "Replace the need to visit the field again"],
    correct: 1,
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
    options: ["Self-cleaning mechanism for clogging prevention", "Uniform discharge at varying pressures", "Higher discharge rates at all times", "Lower cost and simplicity"],
    correct: 3,
    explanation: "Non-pressure-compensating emitters are simpler and less expensive than pressure-compensating types. They are suitable for flat land where pressure variation along laterals is minimal."
  },
  {
    id: "d252x_096",
    subject: "da-252",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The area of a trapezoid with parallel sides 'a' and 'b' and height 'h' is:",
    options: ["(a × b) / h", "(a + b) × h", "a × b × h", "(a + b) / 2 × h"],
    correct: 3,
    explanation: "The area of a trapezoid = ½ × (sum of parallel sides) × height = (a + b)/2 × h. This formula is also applied in offset surveying (trapezoidal rule) to calculate irregular field areas."
  },
  {
    id: "d252x_097",
    subject: "da-252",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The volume of a right circular cylinder with radius 'r' and height 'h' is:",
    options: ["2πr²h", "4/3 πr³", "πr²h", "πrh"],
    correct: 2,
    explanation: "Volume of a right circular cylinder = πr²h, where r is the radius of the base and h is the height. This formula is used in irrigation water volume calculations."
  },
  {
    id: "d252x_098",
    subject: "da-252",
    lecture: "lecture-25",
    lectureNo: 25,
    question: "A current meter is an irrigation water measuring device used to measure:",
    options: ["Pump discharge pressure", "Flow velocity in open channels", "Soil moisture content", "Water table depth"],
    correct: 1,
    explanation: "A current meter (velocity meter) is used to measure the velocity of water flow in open channels and rivers. Combined with cross-sectional area, it gives the discharge (flow rate)."
  },
  {
    id: "d252x_099",
    subject: "da-252",
    lecture: "lecture-22",
    lectureNo: 22,
    question: "The major difference between a centrifugal pump and a submersible pump installation is:",
    options: ["Centrifugal pumps cannot be used with electricity", "Centrifugal pumps work at higher pressures than submersible pumps", "In centrifugal pumps the motor is on the surface while in submersible pumps both motor and pump are submerged", "Submersible pumps can only be used for surface water"],
    correct: 2,
    explanation: "In centrifugal pump installations, the motor is on the surface connected via a long shaft. In submersible pumps, both the motor and pump unit are submerged in the water source."
  },
  {
    id: "d252x_100",
    subject: "da-252",
    lecture: "lecture-28",
    lectureNo: 28,
    question: "Which covering material for greenhouses provides the best light transmission and UV resistance but is also the most expensive?",
    options: ["Fiberglass reinforced plastic (FRP)", "Polycarbonate (double wall)", "Polyethylene film (PE)", "Glass"],
    correct: 3,
    explanation: "Glass provides the best long-term light transmission (90%+), is UV resistant, and maintains optical clarity, but it is the most expensive, heaviest, and most fragile covering material."
  }
];
