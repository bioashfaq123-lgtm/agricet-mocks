import { Question } from "@/types";

export const da252LectureQuestions: Question[] = [
  // ── LECTURE 1: Introduction to Surveying ─────────────────────────────────
  {
    id: "d252l_001", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "Surveying is defined as the art of:",
    options: ["Designing buildings", "Determining positions of points and measuring distances, angles, and elevations on the earth's surface", "Preparing maps only", "Soil testing"],
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
    options: ["Only horizontal distances", "The curvature of the earth (for large areas)", "Only vertical measurements", "Only angles"],
    correct: 1,
    explanation: "Geodetic surveying considers the curvature of the earth and is used for large-scale national surveys.",
    difficulty: "medium"
  },
  {
    id: "d252l_004", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "The primary aim of surveying in agriculture is:",
    options: ["Weather prediction", "Measurement and recording of land for planning and development", "Crop yield estimation", "Soil nutrient analysis"],
    correct: 1,
    explanation: "Surveying in agriculture is done to measure land areas, plan irrigation systems, and prepare farm maps.",
    difficulty: "easy"
  },
  {
    id: "d252l_005", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "The basic principle of surveying is to work from:",
    options: ["Parts to whole", "Whole to parts (general to specific)", "Left to right", "North to south"],
    correct: 1,
    explanation: "Surveying follows the principle of 'working from the whole to the part' to minimize error accumulation.",
    difficulty: "medium"
  },
  {
    id: "d252l_006", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "A datum in surveying is:",
    options: ["A survey instrument", "A reference level or surface from which elevations are measured", "A type of map", "A chain length"],
    correct: 1,
    explanation: "Datum is an assumed or defined reference surface (often mean sea level) from which vertical measurements are made.",
    difficulty: "medium"
  },
  {
    id: "d252l_007", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "MSL (Mean Sea Level) in India is determined at:",
    options: ["Mumbai", "Chennai", "Karachi", "Kolkata"],
    correct: 0,
    explanation: "The MSL datum for India is determined at the Mumbai tidal gauge station.",
    difficulty: "medium"
  },
  {
    id: "d252l_008", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "Scale on a map is the ratio of:",
    options: ["Map distance to actual distance", "Actual distance to map distance", "Area to perimeter", "Volume to area"],
    correct: 0,
    explanation: "Map scale = Map distance / Actual distance on ground (or its representation as RF).",
    difficulty: "easy"
  },
  {
    id: "d252l_009", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "A large-scale map shows:",
    options: ["More area with less detail", "Less area with more detail", "Equal area and detail", "Only rivers"],
    correct: 1,
    explanation: "Large-scale maps (1:1000, 1:5000) cover smaller areas but show more detail than small-scale maps.",
    difficulty: "medium"
  },
  {
    id: "d252l_010", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "RF (Representative Fraction) of 1:50,000 means:",
    options: ["1 cm on map = 500 m on ground", "1 cm on map = 50,000 m on ground", "1 m on ground = 50,000 m on map", "1:50,000 is a large scale"],
    correct: 0,
    explanation: "1:50,000 means 1 unit on map = 50,000 units on ground (1 cm = 50,000 cm = 500 m).",
    difficulty: "medium"
  },
  {
    id: "d252l_011", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "Which of the following is NOT a survey instrument?",
    options: ["Theodolite", "Chain", "Piezometer", "Level"],
    correct: 2,
    explanation: "Piezometer measures water pressure/depth; it is a hydrological instrument, not a surveying tool.",
    difficulty: "medium"
  },
  {
    id: "d252l_012", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "Bearing in surveying is the angle measured from:",
    options: ["Vertical downward", "North (or South) direction, clockwise or counter-clockwise", "East direction", "The horizon"],
    correct: 1,
    explanation: "Bearing is the horizontal angle of a survey line measured clockwise from north (whole circle bearing) or from N/S.",
    difficulty: "medium"
  },

  // ── LECTURE 2: Chain Surveying ────────────────────────────────────────────
  {
    id: "d252l_013", subject: "da-252", lecture: "lecture-2", lectureNo: 2,
    question: "Standard chain length used in India is:",
    options: ["10 m", "20 m (Gunter's chain = 66 ft)", "30 m (metric chain)", "50 m"],
    correct: 2,
    explanation: "The standard metric chain used in India is 30 m long (divided into 150 links of 20 cm each).",
    difficulty: "medium"
  },
  {
    id: "d252l_014", subject: "da-252", lecture: "lecture-2", lectureNo: 2,
    question: "A Gunter's chain is _____ long:",
    options: ["30 m", "20 m / 66 feet", "100 m", "50 feet"],
    correct: 1,
    explanation: "Gunter's chain is 66 feet (20.12 m) long with 100 links, useful for area measurement in acres.",
    difficulty: "medium"
  },
  {
    id: "d252l_015", subject: "da-252", lecture: "lecture-2", lectureNo: 2,
    question: "In chain surveying, the main lines form a:",
    options: ["Circle", "Network of well-conditioned triangles", "Grid", "Spiral"],
    correct: 1,
    explanation: "Chain surveying is based on a framework of triangles that are 'well-conditioned' (angles 30°–120°).",
    difficulty: "medium"
  },
  {
    id: "d252l_016", subject: "da-252", lecture: "lecture-2", lectureNo: 2,
    question: "An offset in chain surveying is:",
    options: ["A measurement along the chain line", "A perpendicular (or oblique) measurement from the chain line to a detail point", "The angle between two chain lines", "The length of the chain"],
    correct: 1,
    explanation: "Offsets are lateral measurements from the chain line to locate features not on the line.",
    difficulty: "medium"
  },
  {
    id: "d252l_017", subject: "da-252", lecture: "lecture-2", lectureNo: 2,
    question: "The instrument used to set out right angles in chain surveying is:",
    options: ["Theodolite", "Cross-staff or optical square", "Level", "Compass"],
    correct: 1,
    explanation: "Cross-staff and optical square are simple instruments used to set perpendicular offsets in chain surveying.",
    difficulty: "medium"
  },
  {
    id: "d252l_018", subject: "da-252", lecture: "lecture-2", lectureNo: 2,
    question: "A check line in chain surveying is used to:",
    options: ["Measure the main line", "Verify the accuracy of field work by checking closure", "Measure offsets", "Set up the chain"],
    correct: 1,
    explanation: "Check lines connect known points to verify that the framework of triangles has been accurately measured.",
    difficulty: "medium"
  },
  {
    id: "d252l_019", subject: "da-252", lecture: "lecture-2", lectureNo: 2,
    question: "A tie line in chain surveying connects:",
    options: ["Two main stations on the main line", "Two subsidiary points to provide additional checks", "End points of the survey", "Two benchmarks"],
    correct: 1,
    explanation: "Tie lines join subsidiary (detail) points and help locate more detail features near the main framework.",
    difficulty: "medium"
  },
  {
    id: "d252l_020", subject: "da-252", lecture: "lecture-2", lectureNo: 2,
    question: "Ranging in chain surveying means:",
    options: ["Measuring distances", "Establishing intermediate points on a straight line between two stations", "Taking offsets", "Plotting the chain survey"],
    correct: 1,
    explanation: "Ranging is the process of establishing a series of intermediate points on a straight line.",
    difficulty: "medium"
  },
  {
    id: "d252l_021", subject: "da-252", lecture: "lecture-2", lectureNo: 2,
    question: "Obstacles to chaining over ponds or rivers are overcome by:",
    options: ["Ignoring the obstacle", "Geometric methods using similar triangles or Pythagoras theorem", "Moving the survey line", "Stopping the survey"],
    correct: 1,
    explanation: "Obstacles to chaining are overcome using geometric methods such as erecting perpendiculars and using similar triangles.",
    difficulty: "medium"
  },
  {
    id: "d252l_022", subject: "da-252", lecture: "lecture-2", lectureNo: 2,
    question: "The area of a farm measured by chain surveying is recorded in the field book in:",
    options: ["Hectares only", "Chains and links, later converted to hectares", "Square feet only", "Gunter's units only"],
    correct: 1,
    explanation: "Field measurements are recorded in chains and links; area is calculated from the plotted map.",
    difficulty: "medium"
  },

  // ── LECTURE 3: Compass Surveying ──────────────────────────────────────────
  {
    id: "d252l_023", subject: "da-252", lecture: "lecture-3", lectureNo: 3,
    question: "A prismatic compass measures:",
    options: ["Vertical angles", "Horizontal angles (bearings) using a magnetic needle", "Elevations", "Distances"],
    correct: 1,
    explanation: "A prismatic compass measures horizontal bearings (directions) using a freely suspended magnetic needle.",
    difficulty: "easy"
  },
  {
    id: "d252l_024", subject: "da-252", lecture: "lecture-3", lectureNo: 3,
    question: "Magnetic declination is the angle between:",
    options: ["True north and magnetic north", "Magnetic north and south", "True north and geographic east", "Magnetic east and true east"],
    correct: 0,
    explanation: "Magnetic declination = horizontal angle between true geographic north and magnetic north at a location.",
    difficulty: "medium"
  },
  {
    id: "d252l_025", subject: "da-252", lecture: "lecture-3", lectureNo: 3,
    question: "Whole Circle Bearing (WCB) is measured:",
    options: ["From south only", "From north, clockwise, 0°–360°", "From east, counter-clockwise", "From any direction"],
    correct: 1,
    explanation: "WCB (azimuth) is measured from north in a clockwise direction from 0° to 360°.",
    difficulty: "medium"
  },
  {
    id: "d252l_026", subject: "da-252", lecture: "lecture-3", lectureNo: 3,
    question: "Quadrantal Bearing (QB) is expressed as:",
    options: ["0°–360° from north", "N/S angle E/W (e.g., N 45° E, S 30° W)", "Only in degrees", "Bearings from east"],
    correct: 1,
    explanation: "Quadrantal bearing specifies direction as angle from north or south toward east or west (0°–90° range).",
    difficulty: "medium"
  },
  {
    id: "d252l_027", subject: "da-252", lecture: "lecture-3", lectureNo: 3,
    question: "Back bearing = fore bearing ±:",
    options: ["90°", "180°", "360°", "45°"],
    correct: 1,
    explanation: "Back bearing = fore bearing + 180° (if FB < 180°) or fore bearing − 180° (if FB > 180°).",
    difficulty: "medium"
  },
  {
    id: "d252l_028", subject: "da-252", lecture: "lecture-3", lectureNo: 3,
    question: "Local attraction in compass surveying is caused by:",
    options: ["Sun's gravity", "Presence of magnetic materials (iron, electric cables) near the compass", "Earth's rotation", "Atmospheric pressure"],
    correct: 1,
    explanation: "Local attraction deflects the magnetic needle due to nearby iron objects, steel structures, or power lines.",
    difficulty: "medium"
  },
  {
    id: "d252l_029", subject: "da-252", lecture: "lecture-3", lectureNo: 3,
    question: "Traversing in compass survey involves:",
    options: ["Only measuring distances", "Measuring a series of connected lines with distances and bearings", "Only measuring bearings", "Plotting only"],
    correct: 1,
    explanation: "A traverse is a series of connected survey lines; both distances and bearings are measured.",
    difficulty: "medium"
  },
  {
    id: "d252l_030", subject: "da-252", lecture: "lecture-3", lectureNo: 3,
    question: "Closing error in a compass traverse is due to:",
    options: ["Correct measurements", "Accumulation of errors in measurement and plotting", "Correct scale selection", "Magnetic north alignment"],
    correct: 1,
    explanation: "Closing error is the gap between the starting and ending point of a closed traverse, due to accumulated measurement errors.",
    difficulty: "medium"
  },
  {
    id: "d252l_031", subject: "da-252", lecture: "lecture-3", lectureNo: 3,
    question: "Bowditch's rule (compass rule) for traverse adjustment distributes the closing error:",
    options: ["Equally to all sides", "Proportional to the length of each traverse side", "Only to the longest side", "Randomly"],
    correct: 1,
    explanation: "Bowditch's rule distributes the closing error in proportion to the length of each line in the traverse.",
    difficulty: "hard"
  },
  {
    id: "d252l_032", subject: "da-252", lecture: "lecture-3", lectureNo: 3,
    question: "The angle of dip is the angle between:",
    options: ["True north and magnetic north", "Horizontal plane and direction of earth's total magnetic field", "Two traverse lines", "Magnetic needle and vertical"],
    correct: 1,
    explanation: "Angle of dip (magnetic inclination) is the angle that the earth's magnetic field makes with the horizontal.",
    difficulty: "hard"
  },

  // ── LECTURE 4: Plane Table and Theodolite Surveying ───────────────────────
  {
    id: "d252l_033", subject: "da-252", lecture: "lecture-4", lectureNo: 4,
    question: "Plane table surveying combines:",
    options: ["Chaining and levelling", "Field measurement and map drawing simultaneously", "Compass and level work", "Distance and elevation measurement"],
    correct: 1,
    explanation: "Plane table surveying allows direct plotting of the survey map in the field as measurements are taken.",
    difficulty: "easy"
  },
  {
    id: "d252l_034", subject: "da-252", lecture: "lecture-4", lectureNo: 4,
    question: "The instrument used for sighting in plane table surveying is:",
    options: ["Compass", "Alidade", "Level staff", "Cross-staff"],
    correct: 1,
    explanation: "Alidade is a sighting device placed on the plane table to draw rays toward survey points.",
    difficulty: "medium"
  },
  {
    id: "d252l_035", subject: "da-252", lecture: "lecture-4", lectureNo: 4,
    question: "Radiation method in plane table surveying is used when:",
    options: ["All points are visible from one station", "Points are in multiple locations requiring traversing", "Levelling is needed", "Underground surveys are done"],
    correct: 0,
    explanation: "Radiation method: all detail points are sighted from a single instrument station — suitable for small open areas.",
    difficulty: "medium"
  },
  {
    id: "d252l_036", subject: "da-252", lecture: "lecture-4", lectureNo: 4,
    question: "Intersection method in plane table surveying requires:",
    options: ["One instrument station", "Two or more instrument stations with intersecting rays to locate points", "A compass", "A level"],
    correct: 1,
    explanation: "Intersection locates a point by intersecting rays from two or more instrument stations — useful when direct access is impossible.",
    difficulty: "medium"
  },
  {
    id: "d252l_037", subject: "da-252", lecture: "lecture-4", lectureNo: 4,
    question: "Theodolite is used for measuring:",
    options: ["Distances only", "Both horizontal and vertical angles precisely", "Elevations only", "Magnetic bearings"],
    correct: 1,
    explanation: "Theodolite is a precision optical instrument for measuring both horizontal and vertical angles.",
    difficulty: "easy"
  },
  {
    id: "d252l_038", subject: "da-252", lecture: "lecture-4", lectureNo: 4,
    question: "Verniers in a theodolite are used to:",
    options: ["Measure distances", "Read fractional parts of the main scale divisions (increase precision)", "Measure magnetic north", "Set the instrument level"],
    correct: 1,
    explanation: "Vernier scales allow reading of angles to fractions of a degree on the main graduated circle.",
    difficulty: "medium"
  },
  {
    id: "d252l_039", subject: "da-252", lecture: "lecture-4", lectureNo: 4,
    question: "Deflection angle is measured from:",
    options: ["North", "Extension of the previous survey line", "Vertical axis", "Magnetic south"],
    correct: 1,
    explanation: "Deflection angle is the angle between the extension of the preceding line and the following line.",
    difficulty: "medium"
  },
  {
    id: "d252l_040", subject: "da-252", lecture: "lecture-4", lectureNo: 4,
    question: "Tacheometry is a surveying method for:",
    options: ["Underground surveys", "Rapid determination of distances and elevations using stadia hairs in telescope", "Magnetic measurements", "Soil profiling"],
    correct: 1,
    explanation: "Tacheometry uses the stadia method to determine distances and elevations from staff readings without chaining.",
    difficulty: "hard"
  },

  // ── LECTURE 5: Levelling Principles and Methods ───────────────────────────
  {
    id: "d252l_041", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "Levelling is the process of determining:",
    options: ["Horizontal distances", "Relative heights (elevations) of points on the earth's surface", "Magnetic bearings", "Areas of fields"],
    correct: 1,
    explanation: "Levelling finds the difference in elevation between points to establish levels for engineering and agricultural works.",
    difficulty: "easy"
  },
  {
    id: "d252l_042", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "A Bench Mark (BM) is:",
    options: ["A temporary marker", "A permanent reference point of known elevation", "A farm boundary marker", "A chain length marker"],
    correct: 1,
    explanation: "Benchmark is a permanent fixed point of known elevation (height above MSL) used as reference for levelling.",
    difficulty: "easy"
  },
  {
    id: "d252l_043", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "Back Sight (BS) in levelling is the reading taken on:",
    options: ["A forward point", "The first staff position (at known point/BM) after setting up instrument", "Any point", "The last point"],
    correct: 1,
    explanation: "Back sight is taken on a point of known elevation (BM or change point) immediately after instrument setup.",
    difficulty: "medium"
  },
  {
    id: "d252l_044", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "Height of Instrument (HI) = RL of BM +:",
    options: ["Foresight reading", "Back sight reading", "Intermediate sight", "Staff height"],
    correct: 1,
    explanation: "HI (Instrument Height) = RL of point + Back sight reading on that point.",
    difficulty: "medium"
  },
  {
    id: "d252l_045", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "Rise and Fall method in levelling calculates RL by:",
    options: ["HI method", "Comparing consecutive staff readings (rise = previous IS/FS > current reading)", "Compass readings", "Triangulation"],
    correct: 1,
    explanation: "Rise and Fall method finds rises or falls between consecutive readings and applies them to successive RLs.",
    difficulty: "medium"
  },
  {
    id: "d252l_046", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "Arithmetic check in levelling (HI method): Sum of BS – Sum of FS =",
    options: ["Sum of IS", "Last RL – First RL", "Zero always", "Sum of all RLs"],
    correct: 1,
    explanation: "Arithmetic check: ΣBS − ΣFS = Last RL − First RL. This verifies the arithmetic but not field accuracy.",
    difficulty: "medium"
  },
  {
    id: "d252l_047", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "Reciprocal levelling is used when:",
    options: ["The area is flat", "A large obstacle (river, valley) prevents direct levelling", "There are many intermediate points", "The distance is short"],
    correct: 1,
    explanation: "Reciprocal levelling takes readings from both banks of an obstacle to eliminate errors from curvature and refraction.",
    difficulty: "medium"
  },
  {
    id: "d252l_048", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "Curvature correction in levelling is:",
    options: ["+0.0785 D² (additive)", "–0.0785 D² (subtractive)", "+D/2", "–D/4"],
    correct: 1,
    explanation: "Curvature makes staff readings too high; curvature correction C = −0.0785D² (m) where D is in km, so it is subtracted.",
    difficulty: "hard"
  },
  {
    id: "d252l_049", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "The permissible closing error for ordinary levelling is:",
    options: ["24√K mm", "12√K mm", "6√K mm", "Zero"],
    correct: 0,
    explanation: "Permissible closing error for ordinary levelling = 24√K mm (where K = distance in km).",
    difficulty: "hard"
  },
  {
    id: "d252l_050", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "A change point (CP) in levelling is a point where:",
    options: ["Only one reading is taken", "Both foresight and backsight readings are taken (instrument is shifted)", "The survey ends", "The staff is held vertically"],
    correct: 1,
    explanation: "Change point is where the instrument is moved: foresight on it from old position, then backsight from new position.",
    difficulty: "medium"
  },
  {
    id: "d252l_051", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "Dumpy level is preferred over tilting level because:",
    options: ["It measures angles", "It has a simpler construction and is more stable for ordinary levelling", "It works without a staff", "It measures horizontal distances"],
    correct: 1,
    explanation: "Dumpy level has a simple, robust construction suitable for ordinary levelling work.",
    difficulty: "medium"
  },

  // ── LECTURE 6: Contouring ─────────────────────────────────────────────────
  {
    id: "d252l_052", subject: "da-252", lecture: "lecture-6", lectureNo: 6,
    question: "Contour lines are lines joining points:",
    options: ["Of equal horizontal distance", "Of equal elevation (height) above a datum", "Of equal slope", "Of equal soil depth"],
    correct: 1,
    explanation: "A contour line connects all points of the same elevation above a datum (sea level).",
    difficulty: "easy"
  },
  {
    id: "d252l_053", subject: "da-252", lecture: "lecture-6", lectureNo: 6,
    question: "Contour interval is:",
    options: ["Distance between contour lines on map", "Vertical difference in elevation between successive contour lines", "Number of contours on map", "Scale of the map"],
    correct: 1,
    explanation: "Contour interval is the fixed vertical height difference between consecutive contour lines.",
    difficulty: "easy"
  },
  {
    id: "d252l_054", subject: "da-252", lecture: "lecture-6", lectureNo: 6,
    question: "Closely spaced contour lines indicate:",
    options: ["Flat terrain", "Gentle slope", "Steep slope", "Uniform slope"],
    correct: 2,
    explanation: "Close contour lines = steep slope; widely spaced contours = gentle/flat slope.",
    difficulty: "easy"
  },
  {
    id: "d252l_055", subject: "da-252", lecture: "lecture-6", lectureNo: 6,
    question: "Contour lines NEVER:",
    options: ["Bend around ridges", "Cross each other (except for overhangs)", "Close on themselves", "Curve around valleys"],
    correct: 1,
    explanation: "Contour lines never cross each other because a point cannot have two different elevations (except cliffs/overhangs which is rare).",
    difficulty: "medium"
  },
  {
    id: "d252l_056", subject: "da-252", lecture: "lecture-6", lectureNo: 6,
    question: "Contours bend upstream (uphill) when crossing a:",
    options: ["Ridge", "Valley / stream", "Plateau", "Hill top"],
    correct: 1,
    explanation: "Contour lines form a V-shape pointing upstream when crossing a valley or stream.",
    difficulty: "medium"
  },
  {
    id: "d252l_057", subject: "da-252", lecture: "lecture-6", lectureNo: 6,
    question: "Contour maps are useful in agriculture for:",
    options: ["Planting decisions only", "Irrigation system design, soil conservation planning, drainage layout", "Fertilizer recommendations", "Pest scouting"],
    correct: 1,
    explanation: "Contour maps guide terrace design, field levelling, irrigation channel layout, and soil conservation measures.",
    difficulty: "easy"
  },
  {
    id: "d252l_058", subject: "da-252", lecture: "lecture-6", lectureNo: 6,
    question: "The method of contouring by indirect method involves:",
    options: ["Direct spot height measurement on contour", "Grid/section levelling and interpolating contour positions", "Eye sketching only", "Aerial photography"],
    correct: 1,
    explanation: "Indirect contouring: spot heights are taken on a grid; contour lines are interpolated between these points.",
    difficulty: "medium"
  },
  {
    id: "d252l_059", subject: "da-252", lecture: "lecture-6", lectureNo: 6,
    question: "Gradient in agricultural land development refers to:",
    options: ["Crop growth rate", "The slope or rate of change of elevation (rise/horizontal distance)", "Soil fertility level", "Water pH"],
    correct: 1,
    explanation: "Gradient (slope) = vertical rise / horizontal distance, expressed as ratio, percentage, or angle.",
    difficulty: "easy"
  },
  {
    id: "d252l_060", subject: "da-252", lecture: "lecture-6", lectureNo: 6,
    question: "A contour interval suitable for a flat agricultural terrain (slope < 1%) would be:",
    options: ["0.5 m", "5 m", "25 m", "100 m"],
    correct: 0,
    explanation: "Small contour intervals (0.25–0.5 m) are used for flat land; large intervals for hilly terrain.",
    difficulty: "medium"
  },

  // ── LECTURE 7: Area Measurement ───────────────────────────────────────────
  {
    id: "d252l_061", subject: "da-252", lecture: "lecture-7", lectureNo: 7,
    question: "Area of a triangle by surveying field notes is calculated by:",
    options: ["½ × Base × Perpendicular height", "½ × diagonal × sum of offsets", "Both A and B depending on shape", "Side²"],
    correct: 0,
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
    options: ["Odd", "Even", "Any number", "At least 10"],
    correct: 0,
    explanation: "Simpson's rule requires an odd number of ordinates (even number of equal divisions).",
    difficulty: "medium"
  },
  {
    id: "d252l_064", subject: "da-252", lecture: "lecture-7", lectureNo: 7,
    question: "Planimeter is an instrument used to:",
    options: ["Measure angles", "Measure areas of irregular figures on a map/plan", "Measure distances", "Measure elevations"],
    correct: 1,
    explanation: "A planimeter (amsler or digital) traces the boundary of an irregular figure to determine its area.",
    difficulty: "medium"
  },
  {
    id: "d252l_065", subject: "da-252", lecture: "lecture-7", lectureNo: 7,
    question: "1 hectare equals:",
    options: ["1,000 m²", "10,000 m²", "100,000 m²", "100 m²"],
    correct: 1,
    explanation: "1 hectare = 10,000 m² (100 m × 100 m).",
    difficulty: "easy"
  },
  {
    id: "d252l_066", subject: "da-252", lecture: "lecture-7", lectureNo: 7,
    question: "1 acre equals approximately:",
    options: ["2,000 m²", "4,047 m²", "10,000 m²", "1,000 m²"],
    correct: 1,
    explanation: "1 acre = 4,047 m² (or 43,560 sq.ft). 1 hectare ≈ 2.47 acres.",
    difficulty: "easy"
  },
  {
    id: "d252l_067", subject: "da-252", lecture: "lecture-7", lectureNo: 7,
    question: "The trapezoidal rule for area calculation assumes:",
    options: ["Parabolic boundary between ordinates", "Straight line between consecutive ordinates", "No variation between ordinates", "Circular boundary"],
    correct: 1,
    explanation: "Trapezoidal rule assumes the boundary between adjacent ordinates is a straight line (forming trapezoids).",
    difficulty: "medium"
  },
  {
    id: "d252l_068", subject: "da-252", lecture: "lecture-7", lectureNo: 7,
    question: "Coordinates method for area calculation uses:",
    options: ["Chain lengths only", "X and Y coordinates of boundary points (surveyor's formula)", "Compass bearings only", "Contour data"],
    correct: 1,
    explanation: "The coordinate method uses X, Y coordinates of vertices to compute area using the surveyor's formula.",
    difficulty: "medium"
  },

  // ── LECTURE 8: Modern Surveying and Land Records ──────────────────────────
  {
    id: "d252l_069", subject: "da-252", lecture: "lecture-8", lectureNo: 8,
    question: "GPS (Global Positioning System) in surveying provides:",
    options: ["Magnetic bearings only", "Precise 3D position (latitude, longitude, elevation) anywhere on earth", "Distance measurement only", "Elevation only"],
    correct: 1,
    explanation: "GPS uses satellite signals to provide accurate 3D positioning for surveying and mapping.",
    difficulty: "easy"
  },
  {
    id: "d252l_070", subject: "da-252", lecture: "lecture-8", lectureNo: 8,
    question: "Total Station in surveying is an electronic instrument that:",
    options: ["Measures only angles", "Measures both horizontal/vertical angles and distances simultaneously", "Only levels the instrument", "Measures magnetic bearings"],
    correct: 1,
    explanation: "Total Station is an electronic theodolite integrated with EDM (Electronic Distance Measurement) for simultaneous angle and distance measurement.",
    difficulty: "medium"
  },
  {
    id: "d252l_071", subject: "da-252", lecture: "lecture-8", lectureNo: 8,
    question: "GIS (Geographic Information System) is used to:",
    options: ["Only store maps", "Capture, store, analyze, and display geographic/spatial data", "Replace surveyors", "Measure gravity"],
    correct: 1,
    explanation: "GIS integrates hardware, software, and data to manage and analyze geographic information for decision making.",
    difficulty: "medium"
  },
  {
    id: "d252l_072", subject: "da-252", lecture: "lecture-8", lectureNo: 8,
    question: "Remote sensing in agriculture uses:",
    options: ["Ground-based instruments only", "Satellite/aerial sensors to gather information about land features without direct contact", "Chemical sensors in soil", "Magnetic instruments"],
    correct: 1,
    explanation: "Remote sensing acquires information about earth's surface using sensors on satellites or aircraft.",
    difficulty: "medium"
  },
  {
    id: "d252l_073", subject: "da-252", lecture: "lecture-8", lectureNo: 8,
    question: "Adangal (or Pahani) is a land record document that contains:",
    options: ["Village revenue maps", "Field-wise crop cultivation details, ownership, area, and irrigation source", "Soil survey reports", "Fertilizer use data"],
    correct: 1,
    explanation: "Adangal/Pahani is the annual crop register maintained by village revenue officials showing field-wise agricultural data.",
    difficulty: "medium"
  },
  {
    id: "d252l_074", subject: "da-252", lecture: "lecture-8", lectureNo: 8,
    question: "Cadastral survey is conducted for:",
    options: ["Topographic mapping", "Fixing land boundaries, ownership, and area for legal/revenue purposes", "Weather mapping", "Soil classification only"],
    correct: 1,
    explanation: "Cadastral surveys determine land ownership boundaries and areas for revenue and legal purposes.",
    difficulty: "medium"
  },
  {
    id: "d252l_075", subject: "da-252", lecture: "lecture-8", lectureNo: 8,
    question: "Drone (UAV) surveying in agriculture is used for:",
    options: ["Only entertainment", "Crop monitoring, area mapping, and precision agriculture applications", "Weather forecasting", "Underground surveys"],
    correct: 1,
    explanation: "Agricultural drones equipped with cameras and sensors are used for crop health monitoring, field mapping, and precision application.",
    difficulty: "easy"
  },
];
