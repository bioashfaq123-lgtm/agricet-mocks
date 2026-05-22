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
    options: ["Flat (plane)", "Spherical", "Irregular", "Cylindrical"],
    correct: 0,
    explanation: "Plane surveying ignores earth's curvature — suitable for areas up to about 260 km².",
    difficulty: "easy"
  },
  {
    id: "d252l_003", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "Geodetic surveying accounts for:",
    options: ["The curvature of the earth (for large areas)", "Only horizontal distances", "Only angles", "Only vertical measurements"],
    correct: 0,
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
    options: ["North to south", "Left to right", "Whole to parts (general to specific)", "Parts to whole"],
    correct: 2,
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
    options: ["Kolkata", "Mumbai", "Karachi", "Chennai"],
    correct: 1,
    explanation: "The MSL datum for India is determined at the Mumbai tidal gauge station.",
    difficulty: "medium"
  },
  {
    id: "d252l_008", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "Scale on a map is the ratio of:",
    options: ["Actual distance to map distance", "Volume to area", "Area to perimeter", "Map distance to actual distance"],
    correct: 3,
    explanation: "Map scale = Map distance / Actual distance on ground (or its representation as RF).",
    difficulty: "easy"
  },
  {
    id: "d252l_009", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "A large-scale map shows:",
    options: ["Equal area and detail", "More area with less detail", "Less area with more detail", "Only rivers"],
    correct: 2,
    explanation: "Large-scale maps (1:1000, 1:5000) cover smaller areas but show more detail than small-scale maps.",
    difficulty: "medium"
  },
  {
    id: "d252l_010", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "RF (Representative Fraction) of 1:50,000 means:",
    options: ["1 m on ground = 50,000 m on map", "1 cm on map = 50,000 m on ground", "1 cm on map = 500 m on ground", "1:50,000 is a large scale"],
    correct: 2,
    explanation: "1:50,000 means 1 unit on map = 50,000 units on ground (1 cm = 50,000 cm = 500 m).",
    difficulty: "medium"
  },
  {
    id: "d252l_011", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "Which of the following is NOT a survey instrument?",
    options: ["Piezometer", "Chain", "Theodolite", "Level"],
    correct: 0,
    explanation: "Piezometer measures water pressure/depth; it is a hydrological instrument, not a surveying tool.",
    difficulty: "medium"
  },
  {
    id: "d252l_012", subject: "da-252", lecture: "lecture-1", lectureNo: 1,
    question: "Bearing in surveying is the angle measured from:",
    options: ["East direction", "The horizon", "North (or South) direction, clockwise or counter-clockwise", "Vertical downward"],
    correct: 2,
    explanation: "Bearing is the horizontal angle of a survey line measured clockwise from north (whole circle bearing) or from N/S.",
    difficulty: "medium"
  },

  // ── LECTURE 2: Chain Surveying ────────────────────────────────────────────
  {
    id: "d252l_013", subject: "da-252", lecture: "lecture-2", lectureNo: 2,
    question: "Standard chain length used in India is:",
    options: ["50 m", "20 m (Gunter's chain = 66 ft)", "30 m (metric chain)", "10 m"],
    correct: 2,
    explanation: "The standard metric chain used in India is 30 m long (divided into 150 links of 20 cm each).",
    difficulty: "medium"
  },
  {
    id: "d252l_014", subject: "da-252", lecture: "lecture-2", lectureNo: 2,
    question: "A Gunter's chain is _____ long:",
    options: ["30 m", "100 m", "50 feet", "20 m / 66 feet"],
    correct: 3,
    explanation: "Gunter's chain is 66 feet (20.12 m) long with 100 links, useful for area measurement in acres.",
    difficulty: "medium"
  },
  {
    id: "d252l_015", subject: "da-252", lecture: "lecture-2", lectureNo: 2,
    question: "In chain surveying, the main lines form a:",
    options: ["Spiral", "Circle", "Grid", "Network of well-conditioned triangles"],
    correct: 3,
    explanation: "Chain surveying is based on a framework of triangles that are 'well-conditioned' (angles 30°–120°).",
    difficulty: "medium"
  },
  {
    id: "d252l_016", subject: "da-252", lecture: "lecture-2", lectureNo: 2,
    question: "An offset in chain surveying is:",
    options: ["The angle between two chain lines", "The length of the chain", "A perpendicular (or oblique) measurement from the chain line to a detail point", "A measurement along the chain line"],
    correct: 2,
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
    options: ["Measure the main line", "Measure offsets", "Set up the chain", "Verify the accuracy of field work by checking closure"],
    correct: 3,
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
    options: ["Taking offsets", "Establishing intermediate points on a straight line between two stations", "Measuring distances", "Plotting the chain survey"],
    correct: 1,
    explanation: "Ranging is the process of establishing a series of intermediate points on a straight line.",
    difficulty: "medium"
  },
  {
    id: "d252l_021", subject: "da-252", lecture: "lecture-2", lectureNo: 2,
    question: "Obstacles to chaining over ponds or rivers are overcome by:",
    options: ["Geometric methods using similar triangles or Pythagoras theorem", "Stopping the survey", "Ignoring the obstacle", "Moving the survey line"],
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
    options: ["Vertical angles", "Elevations", "Distances", "Horizontal angles (bearings) using a magnetic needle"],
    correct: 3,
    explanation: "A prismatic compass measures horizontal bearings (directions) using a freely suspended magnetic needle.",
    difficulty: "easy"
  },
  {
    id: "d252l_024", subject: "da-252", lecture: "lecture-3", lectureNo: 3,
    question: "Magnetic declination is the angle between:",
    options: ["True north and geographic east", "True north and magnetic north", "Magnetic east and true east", "Magnetic north and south"],
    correct: 1,
    explanation: "Magnetic declination = horizontal angle between true geographic north and magnetic north at a location.",
    difficulty: "medium"
  },
  {
    id: "d252l_025", subject: "da-252", lecture: "lecture-3", lectureNo: 3,
    question: "Whole Circle Bearing (WCB) is measured:",
    options: ["From east, counter-clockwise", "From south only", "From any direction", "From north, clockwise, 0°–360°"],
    correct: 3,
    explanation: "WCB (azimuth) is measured from north in a clockwise direction from 0° to 360°.",
    difficulty: "medium"
  },
  {
    id: "d252l_026", subject: "da-252", lecture: "lecture-3", lectureNo: 3,
    question: "Quadrantal Bearing (QB) is expressed as:",
    options: ["0°–360° from north", "Bearings from east", "Only in degrees", "N/S angle E/W (e.g., N 45° E, S 30° W)"],
    correct: 3,
    explanation: "Quadrantal bearing specifies direction as angle from north or south toward east or west (0°–90° range).",
    difficulty: "medium"
  },
  {
    id: "d252l_027", subject: "da-252", lecture: "lecture-3", lectureNo: 3,
    question: "Back bearing = fore bearing ±:",
    options: ["90°", "45°", "180°", "360°"],
    correct: 2,
    explanation: "Back bearing = fore bearing + 180° (if FB < 180°) or fore bearing − 180° (if FB > 180°).",
    difficulty: "medium"
  },
  {
    id: "d252l_028", subject: "da-252", lecture: "lecture-3", lectureNo: 3,
    question: "Local attraction in compass surveying is caused by:",
    options: ["Earth's rotation", "Atmospheric pressure", "Sun's gravity", "Presence of magnetic materials (iron, electric cables) near the compass"],
    correct: 3,
    explanation: "Local attraction deflects the magnetic needle due to nearby iron objects, steel structures, or power lines.",
    difficulty: "medium"
  },
  {
    id: "d252l_029", subject: "da-252", lecture: "lecture-3", lectureNo: 3,
    question: "Traversing in compass survey involves:",
    options: ["Only measuring bearings", "Only measuring distances", "Measuring a series of connected lines with distances and bearings", "Plotting only"],
    correct: 2,
    explanation: "A traverse is a series of connected survey lines; both distances and bearings are measured.",
    difficulty: "medium"
  },
  {
    id: "d252l_030", subject: "da-252", lecture: "lecture-3", lectureNo: 3,
    question: "Closing error in a compass traverse is due to:",
    options: ["Magnetic north alignment", "Correct scale selection", "Accumulation of errors in measurement and plotting", "Correct measurements"],
    correct: 2,
    explanation: "Closing error is the gap between the starting and ending point of a closed traverse, due to accumulated measurement errors.",
    difficulty: "medium"
  },
  {
    id: "d252l_031", subject: "da-252", lecture: "lecture-3", lectureNo: 3,
    question: "Bowditch's rule (compass rule) for traverse adjustment distributes the closing error:",
    options: ["Randomly", "Equally to all sides", "Only to the longest side", "Proportional to the length of each traverse side"],
    correct: 3,
    explanation: "Bowditch's rule distributes the closing error in proportion to the length of each line in the traverse.",
    difficulty: "hard"
  },
  {
    id: "d252l_032", subject: "da-252", lecture: "lecture-3", lectureNo: 3,
    question: "The angle of dip is the angle between:",
    options: ["Two traverse lines", "Horizontal plane and direction of earth's total magnetic field", "True north and magnetic north", "Magnetic needle and vertical"],
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
    options: ["Level staff", "Cross-staff", "Compass", "Alidade"],
    correct: 3,
    explanation: "Alidade is a sighting device placed on the plane table to draw rays toward survey points.",
    difficulty: "medium"
  },
  {
    id: "d252l_035", subject: "da-252", lecture: "lecture-4", lectureNo: 4,
    question: "Radiation method in plane table surveying is used when:",
    options: ["Points are in multiple locations requiring traversing", "Levelling is needed", "Underground surveys are done", "All points are visible from one station"],
    correct: 3,
    explanation: "Radiation method: all detail points are sighted from a single instrument station — suitable for small open areas.",
    difficulty: "medium"
  },
  {
    id: "d252l_036", subject: "da-252", lecture: "lecture-4", lectureNo: 4,
    question: "Intersection method in plane table surveying requires:",
    options: ["A level", "A compass", "One instrument station", "Two or more instrument stations with intersecting rays to locate points"],
    correct: 3,
    explanation: "Intersection locates a point by intersecting rays from two or more instrument stations — useful when direct access is impossible.",
    difficulty: "medium"
  },
  {
    id: "d252l_037", subject: "da-252", lecture: "lecture-4", lectureNo: 4,
    question: "Theodolite is used for measuring:",
    options: ["Magnetic bearings", "Elevations only", "Both horizontal and vertical angles precisely", "Distances only"],
    correct: 2,
    explanation: "Theodolite is a precision optical instrument for measuring both horizontal and vertical angles.",
    difficulty: "easy"
  },
  {
    id: "d252l_038", subject: "da-252", lecture: "lecture-4", lectureNo: 4,
    question: "Verniers in a theodolite are used to:",
    options: ["Measure magnetic north", "Read fractional parts of the main scale divisions (increase precision)", "Measure distances", "Set the instrument level"],
    correct: 1,
    explanation: "Vernier scales allow reading of angles to fractions of a degree on the main graduated circle.",
    difficulty: "medium"
  },
  {
    id: "d252l_039", subject: "da-252", lecture: "lecture-4", lectureNo: 4,
    question: "Deflection angle is measured from:",
    options: ["North", "Magnetic south", "Extension of the previous survey line", "Vertical axis"],
    correct: 2,
    explanation: "Deflection angle is the angle between the extension of the preceding line and the following line.",
    difficulty: "medium"
  },
  {
    id: "d252l_040", subject: "da-252", lecture: "lecture-4", lectureNo: 4,
    question: "Tacheometry is a surveying method for:",
    options: ["Magnetic measurements", "Soil profiling", "Underground surveys", "Rapid determination of distances and elevations using stadia hairs in telescope"],
    correct: 3,
    explanation: "Tacheometry uses the stadia method to determine distances and elevations from staff readings without chaining.",
    difficulty: "hard"
  },

  // ── LECTURE 5: Levelling Principles and Methods ───────────────────────────
  {
    id: "d252l_041", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "Levelling is the process of determining:",
    options: ["Horizontal distances", "Magnetic bearings", "Areas of fields", "Relative heights (elevations) of points on the earth's surface"],
    correct: 3,
    explanation: "Levelling finds the difference in elevation between points to establish levels for engineering and agricultural works.",
    difficulty: "easy"
  },
  {
    id: "d252l_042", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "A Bench Mark (BM) is:",
    options: ["A temporary marker", "A chain length marker", "A permanent reference point of known elevation", "A farm boundary marker"],
    correct: 2,
    explanation: "Benchmark is a permanent fixed point of known elevation (height above MSL) used as reference for levelling.",
    difficulty: "easy"
  },
  {
    id: "d252l_043", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "Back Sight (BS) in levelling is the reading taken on:",
    options: ["The first staff position (at known point/BM) after setting up instrument", "The last point", "A forward point", "Any point"],
    correct: 0,
    explanation: "Back sight is taken on a point of known elevation (BM or change point) immediately after instrument setup.",
    difficulty: "medium"
  },
  {
    id: "d252l_044", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "Height of Instrument (HI) = RL of BM +:",
    options: ["Staff height", "Intermediate sight", "Foresight reading", "Back sight reading"],
    correct: 3,
    explanation: "HI (Instrument Height) = RL of point + Back sight reading on that point.",
    difficulty: "medium"
  },
  {
    id: "d252l_045", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "Rise and Fall method in levelling calculates RL by:",
    options: ["Compass readings", "HI method", "Triangulation", "Comparing consecutive staff readings (rise = previous IS/FS > current reading)"],
    correct: 3,
    explanation: "Rise and Fall method finds rises or falls between consecutive readings and applies them to successive RLs.",
    difficulty: "medium"
  },
  {
    id: "d252l_046", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "Arithmetic check in levelling (HI method): Sum of BS – Sum of FS =",
    options: ["Zero always", "Last RL – First RL", "Sum of IS", "Sum of all RLs"],
    correct: 1,
    explanation: "Arithmetic check: ΣBS − ΣFS = Last RL − First RL. This verifies the arithmetic but not field accuracy.",
    difficulty: "medium"
  },
  {
    id: "d252l_047", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "Reciprocal levelling is used when:",
    options: ["There are many intermediate points", "The area is flat", "The distance is short", "A large obstacle (river, valley) prevents direct levelling"],
    correct: 3,
    explanation: "Reciprocal levelling takes readings from both banks of an obstacle to eliminate errors from curvature and refraction.",
    difficulty: "medium"
  },
  {
    id: "d252l_048", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "Curvature correction in levelling is:",
    options: ["+0.0785 D² (additive)", "–0.0785 D² (subtractive)", "–D/4", "+D/2"],
    correct: 1,
    explanation: "Curvature makes staff readings too high; curvature correction C = −0.0785D² (m) where D is in km, so it is subtracted.",
    difficulty: "hard"
  },
  {
    id: "d252l_049", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "The permissible closing error for ordinary levelling is:",
    options: ["12√K mm", "Zero", "24√K mm", "6√K mm"],
    correct: 2,
    explanation: "Permissible closing error for ordinary levelling = 24√K mm (where K = distance in km).",
    difficulty: "hard"
  },
  {
    id: "d252l_050", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "A change point (CP) in levelling is a point where:",
    options: ["The survey ends", "Both foresight and backsight readings are taken (instrument is shifted)", "The staff is held vertically", "Only one reading is taken"],
    correct: 1,
    explanation: "Change point is where the instrument is moved: foresight on it from old position, then backsight from new position.",
    difficulty: "medium"
  },
  {
    id: "d252l_051", subject: "da-252", lecture: "lecture-5", lectureNo: 5,
    question: "Dumpy level is preferred over tilting level because:",
    options: ["It measures angles", "It works without a staff", "It has a simpler construction and is more stable for ordinary levelling", "It measures horizontal distances"],
    correct: 2,
    explanation: "Dumpy level has a simple, robust construction suitable for ordinary levelling work.",
    difficulty: "medium"
  },

  // ── LECTURE 6: Contouring ─────────────────────────────────────────────────
  {
    id: "d252l_052", subject: "da-252", lecture: "lecture-6", lectureNo: 6,
    question: "Contour lines are lines joining points:",
    options: ["Of equal horizontal distance", "Of equal soil depth", "Of equal elevation (height) above a datum", "Of equal slope"],
    correct: 2,
    explanation: "A contour line connects all points of the same elevation above a datum (sea level).",
    difficulty: "easy"
  },
  {
    id: "d252l_053", subject: "da-252", lecture: "lecture-6", lectureNo: 6,
    question: "Contour interval is:",
    options: ["Distance between contour lines on map", "Scale of the map", "Number of contours on map", "Vertical difference in elevation between successive contour lines"],
    correct: 3,
    explanation: "Contour interval is the fixed vertical height difference between consecutive contour lines.",
    difficulty: "easy"
  },
  {
    id: "d252l_054", subject: "da-252", lecture: "lecture-6", lectureNo: 6,
    question: "Closely spaced contour lines indicate:",
    options: ["Gentle slope", "Flat terrain", "Steep slope", "Uniform slope"],
    correct: 2,
    explanation: "Close contour lines = steep slope; widely spaced contours = gentle/flat slope.",
    difficulty: "easy"
  },
  {
    id: "d252l_055", subject: "da-252", lecture: "lecture-6", lectureNo: 6,
    question: "Contour lines NEVER:",
    options: ["Cross each other (except for overhangs)", "Bend around ridges", "Curve around valleys", "Close on themselves"],
    correct: 0,
    explanation: "Contour lines never cross each other because a point cannot have two different elevations (except cliffs/overhangs which is rare).",
    difficulty: "medium"
  },
  {
    id: "d252l_056", subject: "da-252", lecture: "lecture-6", lectureNo: 6,
    question: "Contours bend upstream (uphill) when crossing a:",
    options: ["Valley / stream", "Plateau", "Hill top", "Ridge"],
    correct: 0,
    explanation: "Contour lines form a V-shape pointing upstream when crossing a valley or stream.",
    difficulty: "medium"
  },
  {
    id: "d252l_057", subject: "da-252", lecture: "lecture-6", lectureNo: 6,
    question: "Contour maps are useful in agriculture for:",
    options: ["Fertilizer recommendations", "Irrigation system design, soil conservation planning, drainage layout", "Planting decisions only", "Pest scouting"],
    correct: 1,
    explanation: "Contour maps guide terrace design, field levelling, irrigation channel layout, and soil conservation measures.",
    difficulty: "easy"
  },
  {
    id: "d252l_058", subject: "da-252", lecture: "lecture-6", lectureNo: 6,
    question: "The method of contouring by indirect method involves:",
    options: ["Aerial photography", "Eye sketching only", "Grid/section levelling and interpolating contour positions", "Direct spot height measurement on contour"],
    correct: 2,
    explanation: "Indirect contouring: spot heights are taken on a grid; contour lines are interpolated between these points.",
    difficulty: "medium"
  },
  {
    id: "d252l_059", subject: "da-252", lecture: "lecture-6", lectureNo: 6,
    question: "Gradient in agricultural land development refers to:",
    options: ["Water pH", "Soil fertility level", "The slope or rate of change of elevation (rise/horizontal distance)", "Crop growth rate"],
    correct: 2,
    explanation: "Gradient (slope) = vertical rise / horizontal distance, expressed as ratio, percentage, or angle.",
    difficulty: "easy"
  },
  {
    id: "d252l_060", subject: "da-252", lecture: "lecture-6", lectureNo: 6,
    question: "A contour interval suitable for a flat agricultural terrain (slope < 1%) would be:",
    options: ["25 m", "100 m", "5 m", "0.5 m"],
    correct: 3,
    explanation: "Small contour intervals (0.25–0.5 m) are used for flat land; large intervals for hilly terrain.",
    difficulty: "medium"
  },

  // ── LECTURE 7: Area Measurement ───────────────────────────────────────────
  {
    id: "d252l_061", subject: "da-252", lecture: "lecture-7", lectureNo: 7,
    question: "Area of a triangle by surveying field notes is calculated by:",
    options: ["Both A and B depending on shape", "½ × diagonal × sum of offsets", "Side²", "½ × Base × Perpendicular height"],
    correct: 3,
    explanation: "Area of triangle = ½ × base × perpendicular height. For complex shapes, offsets and mid-ordinates are used.",
    difficulty: "easy"
  },
  {
    id: "d252l_062", subject: "da-252", lecture: "lecture-7", lectureNo: 7,
    question: "Mid-ordinate rule for area calculation uses:",
    options: ["Ordinates at mid-points of each division", "Average of end ordinates", "Diagonal lengths", "End ordinates only"],
    correct: 0,
    explanation: "Mid-ordinate rule: Area = Width of strip × sum of mid-ordinates.",
    difficulty: "medium"
  },
  {
    id: "d252l_063", subject: "da-252", lecture: "lecture-7", lectureNo: 7,
    question: "Simpson's rule for area computation requires the number of ordinates to be:",
    options: ["Even", "Any number", "Odd", "At least 10"],
    correct: 2,
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
    options: ["100 m²", "10,000 m²", "100,000 m²", "1,000 m²"],
    correct: 1,
    explanation: "1 hectare = 10,000 m² (100 m × 100 m).",
    difficulty: "easy"
  },
  {
    id: "d252l_066", subject: "da-252", lecture: "lecture-7", lectureNo: 7,
    question: "1 acre equals approximately:",
    options: ["1,000 m²", "4,047 m²", "10,000 m²", "2,000 m²"],
    correct: 1,
    explanation: "1 acre = 4,047 m² (or 43,560 sq.ft). 1 hectare ≈ 2.47 acres.",
    difficulty: "easy"
  },
  {
    id: "d252l_067", subject: "da-252", lecture: "lecture-7", lectureNo: 7,
    question: "The trapezoidal rule for area calculation assumes:",
    options: ["Straight line between consecutive ordinates", "Parabolic boundary between ordinates", "No variation between ordinates", "Circular boundary"],
    correct: 0,
    explanation: "Trapezoidal rule assumes the boundary between adjacent ordinates is a straight line (forming trapezoids).",
    difficulty: "medium"
  },
  {
    id: "d252l_068", subject: "da-252", lecture: "lecture-7", lectureNo: 7,
    question: "Coordinates method for area calculation uses:",
    options: ["Contour data", "Compass bearings only", "Chain lengths only", "X and Y coordinates of boundary points (surveyor's formula)"],
    correct: 3,
    explanation: "The coordinate method uses X, Y coordinates of vertices to compute area using the surveyor's formula.",
    difficulty: "medium"
  },

  // ── LECTURE 8: Modern Surveying and Land Records ──────────────────────────
  {
    id: "d252l_069", subject: "da-252", lecture: "lecture-8", lectureNo: 8,
    question: "GPS (Global Positioning System) in surveying provides:",
    options: ["Distance measurement only", "Magnetic bearings only", "Precise 3D position (latitude, longitude, elevation) anywhere on earth", "Elevation only"],
    correct: 2,
    explanation: "GPS uses satellite signals to provide accurate 3D positioning for surveying and mapping.",
    difficulty: "easy"
  },
  {
    id: "d252l_070", subject: "da-252", lecture: "lecture-8", lectureNo: 8,
    question: "Total Station in surveying is an electronic instrument that:",
    options: ["Only levels the instrument", "Measures both horizontal/vertical angles and distances simultaneously", "Measures only angles", "Measures magnetic bearings"],
    correct: 1,
    explanation: "Total Station is an electronic theodolite integrated with EDM (Electronic Distance Measurement) for simultaneous angle and distance measurement.",
    difficulty: "medium"
  },
  {
    id: "d252l_071", subject: "da-252", lecture: "lecture-8", lectureNo: 8,
    question: "GIS (Geographic Information System) is used to:",
    options: ["Measure gravity", "Only store maps", "Replace surveyors", "Capture, store, analyze, and display geographic/spatial data"],
    correct: 3,
    explanation: "GIS integrates hardware, software, and data to manage and analyze geographic information for decision making.",
    difficulty: "medium"
  },
  {
    id: "d252l_072", subject: "da-252", lecture: "lecture-8", lectureNo: 8,
    question: "Remote sensing in agriculture uses:",
    options: ["Satellite/aerial sensors to gather information about land features without direct contact", "Chemical sensors in soil", "Magnetic instruments", "Ground-based instruments only"],
    correct: 0,
    explanation: "Remote sensing acquires information about earth's surface using sensors on satellites or aircraft.",
    difficulty: "medium"
  },
  {
    id: "d252l_073", subject: "da-252", lecture: "lecture-8", lectureNo: 8,
    question: "Adangal (or Pahani) is a land record document that contains:",
    options: ["Village revenue maps", "Soil survey reports", "Fertilizer use data", "Field-wise crop cultivation details, ownership, area, and irrigation source"],
    correct: 3,
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
    options: ["Underground surveys", "Crop monitoring, area mapping, and precision agriculture applications", "Weather forecasting", "Only entertainment"],
    correct: 1,
    explanation: "Agricultural drones equipped with cameras and sensors are used for crop health monitoring, field mapping, and precision application.",
    difficulty: "easy"
  },


  {
    id: "d252l_076", subject: "da-252", lecture: "lecture-16", lectureNo: 16,
    question: "The 'Base Period' in irrigation is defined as the time period between:",
    options: ["Sowing to harvesting of a crop", "Canal opening to canal closure", "First watering during sowing to last watering before harvesting", "Start of the irrigation season to end of the season"],
    correct: 2,
    explanation: "As per DA-252 notes: Base Period is the time period between the first watering of the crop during sowing to last watering before harvesting. It is expressed in days.",
    difficulty: "medium"
  },
  {
    id: "d252l_077", subject: "da-252", lecture: "lecture-16", lectureNo: 16,
    question: "'Delta' in irrigation terminology refers to:",
    options: ["Total depth of water required by a crop during the entire base period", "Width of irrigation canal", "Volume of water stored in a reservoir", "Total area irrigated by one cumec"],
    correct: 0,
    explanation: "As per DA-252 notes: Delta is the total depth of water required by a crop during its entire base period. Formula: Delta (Δ) = Volume of water / Total irrigated area.",
    difficulty: "medium"
  },
  {
    id: "d252l_078", subject: "da-252", lecture: "lecture-16", lectureNo: 16,
    question: "The relationship between Delta (Δ), Duty (D) and Base Period (B) is:",
    options: ["Delta = B/D x 10", "Delta = 8.64 x B/D meters", "Delta = D x B", "Delta = D/(8.64 x B)"],
    correct: 1,
    explanation: "As per DA-252 notes: Delta = 8.64B/D meters, where B is base period in days and D is duty in ha/cumec.",
    difficulty: "hard"
  },
  {
    id: "d252l_079", subject: "da-252", lecture: "lecture-15", lectureNo: 15,
    question: "The process of soil erosion by wind that accounts for 50 to 70% of total wind erosion movement is:",
    options: ["Surface creep", "Saltation", "Suspension", "Deflation"],
    correct: 1,
    explanation: "As per DA-252 notes: Saltation (short bounces/jumps of soil particles along ground surface) accounts for 50 to 70% of total movement in wind erosion. Suspension accounts for up to 15%.",
    difficulty: "medium"
  },
  {
    id: "d252l_080", subject: "da-252", lecture: "lecture-15", lectureNo: 15,
    question: "The minimum wind velocity at a height of 30.5 cm necessary for initiating movement of most erodible soil particles (0.1 mm diameter) is approximately:",
    options: ["8 km/hr", "16 km/hr", "35 km/hr", "25 km/hr"],
    correct: 1,
    explanation: "As per DA-252 notes: Minimum wind velocity necessary for initiating movement of most erodible soil particles (about 0.1 mm diameter) is about 16 km/hr at height of 30.5 cm.",
    difficulty: "hard"
  },
  {
    id: "d252l_081", subject: "da-252", lecture: "lecture-18", lectureNo: 18,
    question: "Irrigation projects with Culturable Command Area (CCA) between 2000 to 10,000 ha are classified as:",
    options: ["Medium irrigation projects", "Micro irrigation projects", "Major irrigation projects", "Minor irrigation projects"],
    correct: 0,
    explanation: "As per DA-252 notes: Medium irrigation projects have CCA between 2000 to 10,000 ha. Major: > 10,000 ha. Minor: < 2,000 ha.",
    difficulty: "easy"
  },
  {
    id: "d252l_082", subject: "da-252", lecture: "lecture-18", lectureNo: 18,
    question: "The Check Basin method of surface irrigation is most commonly used for which crops?",
    options: ["Rice, sugarcane and maize", "Wheat, barley and berseem", "Cotton, potato and citrus", "Groundnut, finger millet, sorghum and vegetables"],
    correct: 3,
    explanation: "As per DA-252 notes: Check basin method is most commonly used for irrigating crops like groundnut, finger millet, sorghum and vegetable crops. Also used for leaching salts in saline soil reclamation.",
    difficulty: "medium"
  },
  {
    id: "d252l_083", subject: "da-252", lecture: "lecture-18", lectureNo: 18,
    question: "The Border Strip method of irrigation is suitable for which crops?",
    options: ["Sparsely grown orchard crops", "Potato, sugarcane, maize and cotton", "Only rice fields", "Close growing crops like wheat, barley, groundnut and berseem"],
    correct: 3,
    explanation: "As per DA-252 notes: Border strip method is suitable for irrigating close growing crops such as wheat, barley, groundnut, bajra and berseem. Ring basin method is for orchard crops.",
    difficulty: "medium"
  },
  {
    id: "d252l_084", subject: "da-252", lecture: "lecture-19", lectureNo: 19,
    question: "In sprinkler irrigation, water is conveyed under which pressure range?",
    options: ["0.5 to 1 kg/cm2", "2 to 5 kg/cm2", "10 to 15 kg/cm2", "7 to 10 kg/cm2"],
    correct: 1,
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
    options: ["1972", "1945", "1964", "1955"],
    correct: 2,
    explanation: "As per DA-252 notes: Current drip irrigation technology dates back to the work of Symcha Blass (1964), based on his observation that a large tree near a leaking faucet showed more vigorous growth.",
    difficulty: "medium"
  },
  {
    id: "d252l_087", subject: "da-252", lecture: "lecture-20", lectureNo: 20,
    question: "In surface drip irrigation, the discharge rate for single outlet emitters is:",
    options: ["Less than 4 L/h", "Less than 8 L/h", "Less than 2 L/h", "Less than 16 L/h"],
    correct: 1,
    explanation: "As per DA-252 notes: Surface drip irrigation applies water through emitters with discharge rate for point-source (single outlet) emitters less than 8 L/h; line-source emitters less than 4 L/h.",
    difficulty: "hard"
  },
  {
    id: "d252l_088", subject: "da-252", lecture: "lecture-21", lectureNo: 21,
    question: "Priming in a centrifugal pump refers to:",
    options: ["Filling water in the suction pipe to remove air before starting", "Testing the pump discharge capacity", "Starting the pump without water", "Adding lubricant to the impeller bearings"],
    correct: 0,
    explanation: "As per DA-252 notes: Priming is the process of removing air from pump casing and suction pipe by filling water. The centrifugal pump will not work if there is any air left in the suction pipe.",
    difficulty: "easy"
  },
  {
    id: "d252l_089", subject: "da-252", lecture: "lecture-21", lectureNo: 21,
    question: "Assertion (A): A closed impeller centrifugal pump is most suitable for handling clear irrigation water.\nReason (R): Closed impellers have shrouds on both sides of vanes and are suitable for non-viscous liquids free from foreign materials.",
    options: ["Both A and R are true and R is the correct explanation of A", "A is true but R is false", "A is false but R is true", "Both A and R are true but R is NOT the correct explanation of A"],
    correct: 0,
    explanation: "As per DA-252 notes: All ordinary centrifugal pumps used to pump clear irrigation water have closed impellers. Closed impeller has side walls on both sides and is suitable for non-viscous liquids free from foreign materials.",
    difficulty: "medium"
  },
  {
    id: "d252l_090", subject: "da-252", lecture: "lecture-22", lectureNo: 22,
    question: "Assertion (A): Submersible pumps can be used in very deep tube wells where a long shaft would not be practical.\nReason (R): In submersible pumps, both motor and pump are installed inside the well, fully submerged.",
    options: ["Both A and R are true and R is the correct explanation of A", "A is true but R is false", "A is false but R is true", "Both A and R are true but R is NOT the correct explanation of A"],
    correct: 0,
    explanation: "As per DA-252 notes: The principal advantage of submersible pump is that it can be used in very deep tube wells. Both pump and motor operate entirely submerged, making a long shaft unnecessary.",
    difficulty: "medium"
  },
  {
    id: "d252l_091", subject: "da-252", lecture: "lecture-15", lectureNo: 15,
    question: "Match the following forms of water erosion:\n     Column-I (Type)       |  Column-II (Description)                     |  Column-III (Stage)\nA.  Sheet erosion        |  1.  Uniform removal of surface soil in thin layers |  i.   First/least conspicuous\nB.  Rill erosion         |  2.  Small channels removable by tillage           |  ii.  Second stage\nC.  Gully erosion        |  3.  Deep channels that cannot be tilled           |  iii. Advanced stage\nD.  Ravine              |  4.  Deep wide manifestation in alluvial soils      |  iv.  Most advanced",
    options: ["A-1-ii, B-2-i,  C-4-iv,  D-3-iii", "A-3-iii, B-1-i, C-2-ii,  D-4-iv", "A-2-i,  B-1-ii,  C-4-iii,  D-3-iv", "A-1-i,  B-2-ii,  C-3-iii,  D-4-iv"],
    correct: 3,
    explanation: "As per DA-252 notes: Sheet erosion (first stage) - uniform thin layer removal; Rill erosion (second stage) - small channels removable by tillage; Gully erosion (advanced stage) - deep channels; Ravines (most advanced) - deep wide gullies in alluvial soils.",
    difficulty: "medium"
  },
  {
    id: "d252l_092", subject: "da-252", lecture: "lecture-19", lectureNo: 19,
    question: "Match the following surface irrigation methods with their suitable conditions:\n     Column-I (Method)     |  Column-II (Crop type)                |  Column-III (Key feature)\nA.  Check basin          |  1.  Groundnut, vegetables            |  i.   Square/rectangular plots\nB.  Ring basin           |  2.  Orchard/cucurbit crops           |  ii.  Circular bund per plant\nC.  Border strip         |  3.  Wheat, barley, berseem           |  iii. Long parallel strips\nD.  Furrow method        |  4.  Potato, sugarcane, maize         |  iv.  Ridges and furrows",
    options: ["A-1-iii, B-2-i, C-3-ii,  D-4-iv", "A-2-ii, B-1-i,  C-4-iv,  D-3-iii", "A-4-iv, B-3-iii, C-2-ii, D-1-i", "A-1-i,  B-2-ii,  C-3-iii,  D-4-iv"],
    correct: 3,
    explanation: "As per DA-252 notes: Check basin (square/rectangular plots) for groundnut/vegetables; Ring basin (circular bund) for orchards/cucurbits; Border strip (long parallel strips) for wheat/barley; Furrow method (ridges and furrows) for potato/sugarcane/maize.",
    difficulty: "medium"
  },
  {
    id: "d252l_093", subject: "da-252", lecture: "lecture-18", lectureNo: 18,
    question: "Match the following irrigation types with their description:\n     Column-I (Type)          |  Column-II (Definition)               |  Column-III (Energy source)\nA.  Flow irrigation          |  1.  Water flows by gravity from canal  |  i.   No lifting needed\nB.  Lift irrigation          |  2.  Water must be lifted before use    |  ii.  Pump required\nC.  Sub-surface irrigation   |  3.  Applied below soil surface         |  iii. Capillary action\nD.  Wild flooding            |  4.  No bunds, abundant water           |  iv.  Gravity, uncontrolled",
    options: ["A-1-ii, B-2-i,  C-3-iv,  D-4-iii", "A-2-ii, B-1-i,  C-4-iv,  D-3-iii", "A-3-i,  B-4-ii,  C-1-iii,  D-2-iv", "A-1-i,  B-2-ii,  C-3-iii,  D-4-iv"],
    correct: 3,
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
    options: ["1/2 to 1/3 of orifice size of emission device", "Equal to the orifice size", "1/7 to 1/10 of orifice size of emission device", "1/3 to 1/5 of orifice size of emission device"],
    correct: 2,
    explanation: "As per DA-252 notes: The aperture size of the screen filter opening should be between 1/7th and 1/10th of the orifice size of the emission device to properly filter impurities.",
    difficulty: "hard"
  },
  {
    id: "d252l_096", subject: "da-252", lecture: "lecture-21", lectureNo: 21,
    question: "An open impeller centrifugal pump is most suitable for:",
    options: ["Pumping clear irrigation water", "Pumping water mixed with sand, gravel and other solid materials", "High-pressure deep well applications", "Pumping viscous liquids like molasses"],
    correct: 1,
    explanation: "As per DA-252 notes: Open impeller (no side wall/shroud) is used to handle water mixed with sand, gravel, clay, pebbles and other solid materials. It is made of forged steel but has a short life. Suitable for dredging works.",
    difficulty: "medium"
  },
  {
    id: "d252l_097", subject: "da-252", lecture: "lecture-15", lectureNo: 15,
    question: "In wind erosion, 'Surface creep' involves movement of soil particles of diameter:",
    options: ["0.1 to 0.5 mm", "Greater than 2.0 mm", "0.5 to 2.0 mm", "Less than 0.1 mm"],
    correct: 2,
    explanation: "As per DA-252 notes: Surface creep involves rolling and sliding of coarse particles 0.5 to 2.0 mm in diameter along ground surface due to impact of descending particles in saltation. Accounts for 5-25% of total movement.",
    difficulty: "hard"
  },
  {
    id: "d252l_098", subject: "da-252", lecture: "lecture-18", lectureNo: 18,
    question: "The Furrow method of irrigation is commonly used for which crops?",
    options: ["Only paddy fields", "Groundnut, finger millet and sorghum", "Wheat, barley, groundnut and berseem", "Potato, sugarcane, maize, cotton, melons and vegetables"],
    correct: 3,
    explanation: "As per DA-252 notes: Furrow method is commonly used for irrigating crops like potato, sugarcane, maize, cotton, melons, sugar beets and vegetables like lettuce.",
    difficulty: "easy"
  },
  {
    id: "d252l_099", subject: "da-252", lecture: "lecture-20", lectureNo: 20,
    question: "The largest area under drip irrigation globally (as of 2008 data) is found in which two countries?",
    options: ["Israel and India", "China and Brazil", "Australia and South Africa", "USA and Spain (1.5 million ha each)"],
    correct: 3,
    explanation: "As per DA-252 notes: At present (2008 data), the largest area under drip irrigation is in USA and Spain (1.5 million ha each), followed by India (1.43 million ha). Total world coverage increased from 4000 ha in 1972 to over 8 million ha in 2008.",
    difficulty: "medium"
  },
  {
    id: "d252l_100", subject: "da-252", lecture: "lecture-22", lectureNo: 22,
    question: "A key advantage of submersible pumps over centrifugal pumps is that:",
    options: ["They are cheaper to install", "They are suitable only for shallow wells", "They can be used in very deep tube wells where a long shaft is impractical", "They do not require any power source"],
    correct: 2,
    explanation: "As per DA-252 notes: The principal advantage of submersible pump is it can be used in very deep tube wells where a long shaft would not be practical. It also has special advantage where theft is a problem since it has no above-ground working parts.",
    difficulty: "easy"
  },

];
