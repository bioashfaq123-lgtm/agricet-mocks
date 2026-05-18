import { Question } from "@/types";

export const da262LectureQuestions: Question[] = [
  // ── LECTURE 1: Introduction to Computers ─────────────────────────────────
  {
    id: "d262l_001", subject: "computer-applications", lecture: "lecture-1", lectureNo: 1,
    question: "A computer is an electronic device that:",
    options: ["Only stores data", "Processes data according to instructions and produces output", "Only prints documents", "Only plays games"],
    correct: 1,
    explanation: "A computer accepts input data, processes it according to stored instructions (programs), and produces output.",
    difficulty: "easy"
  },
  {
    id: "d262l_002", subject: "computer-applications", lecture: "lecture-1", lectureNo: 1,
    question: "The full form of CPU is:",
    options: ["Computer Processing Unit", "Central Processing Unit", "Core Processing Unit", "Central Program Unit"],
    correct: 1,
    explanation: "CPU (Central Processing Unit) is the brain of the computer that executes instructions.",
    difficulty: "easy"
  },
  {
    id: "d262l_003", subject: "computer-applications", lecture: "lecture-1", lectureNo: 1,
    question: "RAM stands for:",
    options: ["Read All Memory", "Random Access Memory", "Remote Access Memory", "Rapid Access Module"],
    correct: 1,
    explanation: "RAM (Random Access Memory) is the primary working memory where data and programs are stored temporarily.",
    difficulty: "easy"
  },
  {
    id: "d262l_004", subject: "computer-applications", lecture: "lecture-1", lectureNo: 1,
    question: "Which generation of computers used transistors?",
    options: ["First generation", "Second generation", "Third generation", "Fourth generation"],
    correct: 1,
    explanation: "Second generation computers (1955–1964) used transistors, replacing vacuum tubes of the first generation.",
    difficulty: "medium"
  },
  {
    id: "d262l_005", subject: "computer-applications", lecture: "lecture-1", lectureNo: 1,
    question: "The binary number system uses digits:",
    options: ["0–9", "0–7", "0 and 1", "A–F"],
    correct: 2,
    explanation: "Binary (base-2) uses only two digits: 0 and 1. All computer data is ultimately represented in binary.",
    difficulty: "easy"
  },
  {
    id: "d262l_006", subject: "computer-applications", lecture: "lecture-1", lectureNo: 1,
    question: "1 byte =",
    options: ["4 bits", "8 bits", "16 bits", "1024 bits"],
    correct: 1,
    explanation: "1 byte = 8 bits. Bit is the smallest unit; byte is the basic unit of storage.",
    difficulty: "easy"
  },
  {
    id: "d262l_007", subject: "computer-applications", lecture: "lecture-1", lectureNo: 1,
    question: "1 KB (Kilobyte) =",
    options: ["100 bytes", "1,000 bytes", "1,024 bytes", "10,000 bytes"],
    correct: 2,
    explanation: "1 KB = 1,024 bytes (2¹⁰). 1 MB = 1,024 KB; 1 GB = 1,024 MB.",
    difficulty: "easy"
  },
  {
    id: "d262l_008", subject: "computer-applications", lecture: "lecture-1", lectureNo: 1,
    question: "ROM stands for:",
    options: ["Random Output Memory", "Read Only Memory", "Removable Output Module", "Rapid Operating Memory"],
    correct: 1,
    explanation: "ROM (Read Only Memory) stores permanent data that cannot be modified during normal computer operation.",
    difficulty: "easy"
  },
  {
    id: "d262l_009", subject: "computer-applications", lecture: "lecture-1", lectureNo: 1,
    question: "Which of the following is an input device?",
    options: ["Monitor", "Printer", "Keyboard", "Speaker"],
    correct: 2,
    explanation: "Keyboard is an input device. Monitor, printer, and speaker are output devices.",
    difficulty: "easy"
  },
  {
    id: "d262l_010", subject: "computer-applications", lecture: "lecture-1", lectureNo: 1,
    question: "Which of the following is an output device?",
    options: ["Scanner", "Mouse", "Monitor", "Keyboard"],
    correct: 2,
    explanation: "Monitor (VDU) is an output device that displays processed information.",
    difficulty: "easy"
  },
  {
    id: "d262l_011", subject: "computer-applications", lecture: "lecture-1", lectureNo: 1,
    question: "The motherboard of a computer is:",
    options: ["The power supply unit", "The main circuit board connecting all components", "The CPU only", "The hard disk"],
    correct: 1,
    explanation: "Motherboard is the main PCB (Printed Circuit Board) that connects and allows communication among all computer components.",
    difficulty: "easy"
  },
  {
    id: "d262l_012", subject: "computer-applications", lecture: "lecture-1", lectureNo: 1,
    question: "BIOS stands for:",
    options: ["Basic Input Output Software", "Basic Input Output System", "Binary Input Output System", "Basic Integrated Operating System"],
    correct: 1,
    explanation: "BIOS (Basic Input Output System) is firmware stored in ROM that initializes hardware during startup.",
    difficulty: "medium"
  },

  // ── LECTURE 2: Operating System and Software ──────────────────────────────
  {
    id: "d262l_013", subject: "computer-applications", lecture: "lecture-2", lectureNo: 2,
    question: "An operating system is:",
    options: ["A hardware component", "System software that manages computer hardware and provides services to programs", "An application program", "A type of memory"],
    correct: 1,
    explanation: "OS (Operating System) is system software that manages hardware resources and provides a platform for application software.",
    difficulty: "easy"
  },
  {
    id: "d262l_014", subject: "computer-applications", lecture: "lecture-2", lectureNo: 2,
    question: "Which is NOT an operating system?",
    options: ["Windows", "Linux", "MS-DOS", "MS Excel"],
    correct: 3,
    explanation: "MS Excel is an application (spreadsheet) program. Windows, Linux, and MS-DOS are operating systems.",
    difficulty: "easy"
  },
  {
    id: "d262l_015", subject: "computer-applications", lecture: "lecture-2", lectureNo: 2,
    question: "GUI stands for:",
    options: ["General User Interface", "Graphical User Interface", "Global User Interface", "Generated Utility Interface"],
    correct: 1,
    explanation: "GUI (Graphical User Interface) allows users to interact with computers using icons, menus, and windows instead of text commands.",
    difficulty: "easy"
  },
  {
    id: "d262l_016", subject: "computer-applications", lecture: "lecture-2", lectureNo: 2,
    question: "Which of the following is an application software?",
    options: ["Windows 10", "Ubuntu", "MS Word", "Linux"],
    correct: 2,
    explanation: "MS Word is application software for word processing. Windows 10, Ubuntu, and Linux are operating systems.",
    difficulty: "easy"
  },
  {
    id: "d262l_017", subject: "computer-applications", lecture: "lecture-2", lectureNo: 2,
    question: "Open source software means:",
    options: ["Software that is free to use and whose source code is openly available", "Software for outdoor activities", "Software that has no purpose", "Paid proprietary software"],
    correct: 0,
    explanation: "Open source software has publicly available source code that can be freely used, modified, and distributed.",
    difficulty: "easy"
  },
  {
    id: "d262l_018", subject: "computer-applications", lecture: "lecture-2", lectureNo: 2,
    question: "Android is an operating system designed for:",
    options: ["Desktop computers only", "Mobile devices (smartphones and tablets)", "Servers only", "Supercomputers"],
    correct: 1,
    explanation: "Android is an open-source operating system developed by Google for mobile devices.",
    difficulty: "easy"
  },
  {
    id: "d262l_019", subject: "computer-applications", lecture: "lecture-2", lectureNo: 2,
    question: "A virus in computer terms is:",
    options: ["A beneficial program", "Malicious software that replicates and damages files/systems", "An antivirus program", "A system driver"],
    correct: 1,
    explanation: "Computer virus is malware that attaches to programs/files, replicates itself, and may destroy data.",
    difficulty: "easy"
  },
  {
    id: "d262l_020", subject: "computer-applications", lecture: "lecture-2", lectureNo: 2,
    question: "Antivirus software is used to:",
    options: ["Speed up the computer", "Detect, prevent, and remove malicious software", "Create documents", "Connect to the internet"],
    correct: 1,
    explanation: "Antivirus software scans, detects, and removes malware (viruses, trojans, worms, spyware).",
    difficulty: "easy"
  },
  {
    id: "d262l_021", subject: "computer-applications", lecture: "lecture-2", lectureNo: 2,
    question: "Booting a computer means:",
    options: ["Shutting down the computer", "Starting the computer and loading the operating system", "Installing software", "Deleting files"],
    correct: 1,
    explanation: "Booting is the process of starting a computer and loading the operating system into RAM.",
    difficulty: "easy"
  },
  {
    id: "d262l_022", subject: "computer-applications", lecture: "lecture-2", lectureNo: 2,
    question: "Multitasking in an operating system means:",
    options: ["Only one program runs at a time", "Multiple programs run simultaneously (concurrent execution)", "The computer runs at multiple speeds", "Multiple users can log in"],
    correct: 1,
    explanation: "Multitasking allows multiple programs to run concurrently by rapidly switching CPU time between them.",
    difficulty: "medium"
  },

  // ── LECTURE 3: MS Word ────────────────────────────────────────────────────
  {
    id: "d262l_023", subject: "computer-applications", lecture: "lecture-3", lectureNo: 3,
    question: "MS Word is primarily used for:",
    options: ["Creating spreadsheets", "Word processing (creating, editing, formatting text documents)", "Database management", "Graphic design"],
    correct: 1,
    explanation: "MS Word is a word processor for creating letters, reports, essays, and other text-based documents.",
    difficulty: "easy"
  },
  {
    id: "d262l_024", subject: "computer-applications", lecture: "lecture-3", lectureNo: 3,
    question: "The default file extension for MS Word 2016 documents is:",
    options: [".doc", ".docx", ".txt", ".pdf"],
    correct: 1,
    explanation: "MS Word 2007 and later saves files in .docx format (XML-based). Older versions used .doc.",
    difficulty: "easy"
  },
  {
    id: "d262l_025", subject: "computer-applications", lecture: "lecture-3", lectureNo: 3,
    question: "The shortcut key for 'Save' in MS Word is:",
    options: ["Ctrl + S", "Ctrl + P", "Ctrl + O", "Alt + S"],
    correct: 0,
    explanation: "Ctrl + S saves the current document in MS Word.",
    difficulty: "easy"
  },
  {
    id: "d262l_026", subject: "computer-applications", lecture: "lecture-3", lectureNo: 3,
    question: "Which tab in MS Word contains font formatting options?",
    options: ["Insert", "Home", "View", "Page Layout"],
    correct: 1,
    explanation: "The Home tab contains the Font and Paragraph groups for text formatting in MS Word.",
    difficulty: "easy"
  },
  {
    id: "d262l_027", subject: "computer-applications", lecture: "lecture-3", lectureNo: 3,
    question: "Mail Merge in MS Word is used for:",
    options: ["Merging two documents into one", "Creating personalized letters for multiple recipients using a data source", "Combining cells in a table", "Merging footnotes"],
    correct: 1,
    explanation: "Mail Merge combines a template document with a data source (Excel, Access) to produce personalized mass mailings.",
    difficulty: "medium"
  },
  {
    id: "d262l_028", subject: "computer-applications", lecture: "lecture-3", lectureNo: 3,
    question: "The shortcut key for 'Bold' in MS Word is:",
    options: ["Ctrl + B", "Ctrl + I", "Ctrl + U", "Ctrl + D"],
    correct: 0,
    explanation: "Ctrl + B applies bold formatting in MS Word (Ctrl + I = Italic, Ctrl + U = Underline).",
    difficulty: "easy"
  },
  {
    id: "d262l_029", subject: "computer-applications", lecture: "lecture-3", lectureNo: 3,
    question: "Which feature in MS Word checks spelling and grammar?",
    options: ["AutoFit", "Spelling & Grammar (F7)", "Track Changes", "AutoCorrect only"],
    correct: 1,
    explanation: "Spelling & Grammar check (F7 shortcut) reviews text for errors in MS Word.",
    difficulty: "easy"
  },
  {
    id: "d262l_030", subject: "computer-applications", lecture: "lecture-3", lectureNo: 3,
    question: "Print Preview in MS Word allows:",
    options: ["Printing immediately", "Viewing how the document will look when printed before printing", "Saving the document", "Editing the document"],
    correct: 1,
    explanation: "Print Preview shows an on-screen representation of the printed page layout.",
    difficulty: "easy"
  },
  {
    id: "d262l_031", subject: "computer-applications", lecture: "lecture-3", lectureNo: 3,
    question: "Track Changes feature in MS Word is used to:",
    options: ["Track the time spent on a document", "Record and show changes made by multiple authors for review", "Monitor file size changes", "Track printing"],
    correct: 1,
    explanation: "Track Changes records all edits (insertions, deletions) so authors or reviewers can see and accept/reject changes.",
    difficulty: "medium"
  },
  {
    id: "d262l_032", subject: "computer-applications", lecture: "lecture-3", lectureNo: 3,
    question: "The maximum font size available in MS Word font size box is:",
    options: ["72 pt", "400 pt", "1638 pt", "100 pt"],
    correct: 2,
    explanation: "MS Word allows font sizes from 1 to 1638 points (you can type the size directly).",
    difficulty: "hard"
  },

  // ── LECTURE 4: MS Excel ───────────────────────────────────────────────────
  {
    id: "d262l_033", subject: "computer-applications", lecture: "lecture-4", lectureNo: 4,
    question: "MS Excel is primarily used for:",
    options: ["Word processing", "Creating, organizing, and analyzing data in spreadsheets", "Presentation design", "Email communication"],
    correct: 1,
    explanation: "MS Excel is a spreadsheet application used for data entry, calculations, charts, and data analysis.",
    difficulty: "easy"
  },
  {
    id: "d262l_034", subject: "computer-applications", lecture: "lecture-4", lectureNo: 4,
    question: "The default file extension for MS Excel 2016 is:",
    options: [".xls", ".xlsx", ".csv", ".xlm"],
    correct: 1,
    explanation: "Excel 2007 and later uses .xlsx format (XML-based). Older versions used .xls.",
    difficulty: "easy"
  },
  {
    id: "d262l_035", subject: "computer-applications", lecture: "lecture-4", lectureNo: 4,
    question: "A cell in Excel is identified by:",
    options: ["Row number only", "Column letter followed by row number (e.g., A1, B5)", "Cell name only", "Only row and column numbers"],
    correct: 1,
    explanation: "Cell address = Column letter + Row number (e.g., A1, C15). Used in formulas and navigation.",
    difficulty: "easy"
  },
  {
    id: "d262l_036", subject: "computer-applications", lecture: "lecture-4", lectureNo: 4,
    question: "In Excel, a formula must start with:",
    options: ["#", "@", "=", "!"],
    correct: 2,
    explanation: "All Excel formulas begin with '=' to distinguish them from regular text/data.",
    difficulty: "easy"
  },
  {
    id: "d262l_037", subject: "computer-applications", lecture: "lecture-4", lectureNo: 4,
    question: "The function =SUM(A1:A10) calculates:",
    options: ["Average of A1 to A10", "Sum of values in cells A1 through A10", "Count of cells", "Maximum value"],
    correct: 1,
    explanation: "=SUM(A1:A10) adds all values in the range A1 to A10.",
    difficulty: "easy"
  },
  {
    id: "d262l_038", subject: "computer-applications", lecture: "lecture-4", lectureNo: 4,
    question: "The function =AVERAGE(B1:B5) computes:",
    options: ["Sum of B1 to B5", "Arithmetic mean of values in B1 to B5", "Minimum value", "Number of cells"],
    correct: 1,
    explanation: "=AVERAGE() calculates the arithmetic mean (sum ÷ count) of specified cells.",
    difficulty: "easy"
  },
  {
    id: "d262l_039", subject: "computer-applications", lecture: "lecture-4", lectureNo: 4,
    question: "Absolute cell reference in Excel is written as:",
    options: ["A1", "$A$1", "A$1", "Both B and C"],
    correct: 1,
    explanation: "$A$1 is an absolute reference — the column (A) and row (1) are locked and don't change when the formula is copied.",
    difficulty: "medium"
  },
  {
    id: "d262l_040", subject: "computer-applications", lecture: "lecture-4", lectureNo: 4,
    question: "VLOOKUP function in Excel is used to:",
    options: ["Look up a value in a column and return a value from another column in the same row", "Calculate vertical sums", "Create vertical charts", "Validate data"],
    correct: 0,
    explanation: "VLOOKUP searches vertically in the first column of a table and returns a value from a specified column in the same row.",
    difficulty: "medium"
  },
  {
    id: "d262l_041", subject: "computer-applications", lecture: "lecture-4", lectureNo: 4,
    question: "Pivot Table in Excel is used for:",
    options: ["Rotating the worksheet", "Summarizing, analyzing, and presenting large data sets interactively", "Inserting images", "Setting print margins"],
    correct: 1,
    explanation: "Pivot Tables allow interactive summarization and cross-tabulation of large data sets for analysis.",
    difficulty: "medium"
  },
  {
    id: "d262l_042", subject: "computer-applications", lecture: "lecture-4", lectureNo: 4,
    question: "Conditional Formatting in Excel highlights cells based on:",
    options: ["User-defined rules (cell value, text, date criteria)", "Random selection", "File size", "Font type only"],
    correct: 0,
    explanation: "Conditional Formatting automatically applies color or format to cells meeting specified conditions.",
    difficulty: "medium"
  },

  // ── LECTURE 5: MS PowerPoint and Internet ────────────────────────────────
  {
    id: "d262l_043", subject: "computer-applications", lecture: "lecture-5", lectureNo: 5,
    question: "MS PowerPoint is used for:",
    options: ["Spreadsheet calculations", "Creating slide-based presentations", "Database management", "Word processing"],
    correct: 1,
    explanation: "PowerPoint creates slide show presentations for lectures, meetings, and demonstrations.",
    difficulty: "easy"
  },
  {
    id: "d262l_044", subject: "computer-applications", lecture: "lecture-5", lectureNo: 5,
    question: "The default file format of MS PowerPoint 2016 is:",
    options: [".ppt", ".pptx", ".pps", ".pot"],
    correct: 1,
    explanation: "PowerPoint 2007 and later uses .pptx format. Older format is .ppt.",
    difficulty: "easy"
  },
  {
    id: "d262l_045", subject: "computer-applications", lecture: "lecture-5", lectureNo: 5,
    question: "Slide Transition in PowerPoint refers to:",
    options: ["The animation of objects within a slide", "The visual effect when moving from one slide to the next", "The design template", "The slide master"],
    correct: 1,
    explanation: "Slide transition is the animation/effect applied when switching between slides during a presentation.",
    difficulty: "easy"
  },
  {
    id: "d262l_046", subject: "computer-applications", lecture: "lecture-5", lectureNo: 5,
    question: "Internet is best described as:",
    options: ["A single computer", "A global network of interconnected computers and devices", "A local area network", "A type of software"],
    correct: 1,
    explanation: "The Internet is a global system of interconnected computer networks that communicate via TCP/IP protocol.",
    difficulty: "easy"
  },
  {
    id: "d262l_047", subject: "computer-applications", lecture: "lecture-5", lectureNo: 5,
    question: "WWW stands for:",
    options: ["World Wide Web", "World Wide Wire", "Wide Web Works", "Web World Wide"],
    correct: 0,
    explanation: "WWW (World Wide Web) is a system of interconnected hypertext documents accessible via the Internet.",
    difficulty: "easy"
  },
  {
    id: "d262l_048", subject: "computer-applications", lecture: "lecture-5", lectureNo: 5,
    question: "HTTP stands for:",
    options: ["HyperText Transfer Protocol", "High Transfer Text Protocol", "HyperText Transmission Program", "Hyperlink Text Transport Protocol"],
    correct: 0,
    explanation: "HTTP (HyperText Transfer Protocol) is the protocol for transmitting web pages on the internet.",
    difficulty: "easy"
  },
  {
    id: "d262l_049", subject: "computer-applications", lecture: "lecture-5", lectureNo: 5,
    question: "URL stands for:",
    options: ["Universal Resource Locator", "Uniform Resource Locator", "Universal Remote Link", "Unified Resource Language"],
    correct: 1,
    explanation: "URL (Uniform Resource Locator) is the web address used to locate resources on the internet.",
    difficulty: "easy"
  },
  {
    id: "d262l_050", subject: "computer-applications", lecture: "lecture-5", lectureNo: 5,
    question: "Email stands for:",
    options: ["Electronic Mail", "Express Mail", "Extended Mail", "Electrical Mail"],
    correct: 0,
    explanation: "Email (Electronic Mail) is a method of exchanging digital messages over computer networks.",
    difficulty: "easy"
  },
  {
    id: "d262l_051", subject: "computer-applications", lecture: "lecture-5", lectureNo: 5,
    question: "A browser is software used to:",
    options: ["Store files", "Access and display web pages on the internet", "Manage email", "Design websites"],
    correct: 1,
    explanation: "Web browsers (Chrome, Firefox, Edge, Safari) retrieve and display web pages from the internet.",
    difficulty: "easy"
  },
  {
    id: "d262l_052", subject: "computer-applications", lecture: "lecture-5", lectureNo: 5,
    question: "LAN stands for:",
    options: ["Long Area Network", "Local Area Network", "Linked Area Node", "Large Access Network"],
    correct: 1,
    explanation: "LAN (Local Area Network) connects computers within a limited area like a building or campus.",
    difficulty: "easy"
  },

  // ── LECTURE 6: Database and Computer in Agriculture ───────────────────────
  {
    id: "d262l_053", subject: "computer-applications", lecture: "lecture-6", lectureNo: 6,
    question: "A database is:",
    options: ["A type of computer", "An organized collection of structured data stored electronically", "A programming language", "An operating system"],
    correct: 1,
    explanation: "A database is an organized collection of data that can be easily accessed, managed, and updated.",
    difficulty: "easy"
  },
  {
    id: "d262l_054", subject: "computer-applications", lecture: "lecture-6", lectureNo: 6,
    question: "DBMS stands for:",
    options: ["Database Management Software", "Database Management System", "Data Based Management Service", "Digital Base Management System"],
    correct: 1,
    explanation: "DBMS (Database Management System) software manages databases, controls access, and handles queries.",
    difficulty: "easy"
  },
  {
    id: "d262l_055", subject: "computer-applications", lecture: "lecture-6", lectureNo: 6,
    question: "SQL stands for:",
    options: ["Structured Query Language", "Standard Query List", "System Query Logic", "Simple Query Language"],
    correct: 0,
    explanation: "SQL (Structured Query Language) is the standard language for managing relational databases.",
    difficulty: "medium"
  },
  {
    id: "d262l_056", subject: "computer-applications", lecture: "lecture-6", lectureNo: 6,
    question: "Which of the following is a popular DBMS?",
    options: ["MS Word", "MySQL", "Adobe Photoshop", "VLC Media Player"],
    correct: 1,
    explanation: "MySQL is a popular open-source relational database management system.",
    difficulty: "easy"
  },
  {
    id: "d262l_057", subject: "computer-applications", lecture: "lecture-6", lectureNo: 6,
    question: "Precision agriculture uses technology for:",
    options: ["One-size-fits-all farming", "Variable rate application of inputs based on spatial variability in fields", "Reducing farm area", "Manual observation only"],
    correct: 1,
    explanation: "Precision agriculture uses GPS, sensors, and GIS to optimize input application according to field variability.",
    difficulty: "medium"
  },
  {
    id: "d262l_058", subject: "computer-applications", lecture: "lecture-6", lectureNo: 6,
    question: "Soil moisture sensors in precision agriculture help in:",
    options: ["Pest identification", "Optimizing irrigation scheduling", "Weather forecasting", "Seed selection"],
    correct: 1,
    explanation: "Soil moisture sensors provide real-time data to trigger irrigation only when needed, saving water.",
    difficulty: "easy"
  },
  {
    id: "d262l_059", subject: "computer-applications", lecture: "lecture-6", lectureNo: 6,
    question: "e-Crop advisory services in agriculture provide:",
    options: ["Free seeds", "Real-time crop production advice, pest alerts, and weather updates to farmers", "Direct loans", "Government job notifications"],
    correct: 1,
    explanation: "e-Crop advisory services (via apps, SMS, internet) give farmers timely advice on crop management and market prices.",
    difficulty: "easy"
  },
  {
    id: "d262l_060", subject: "computer-applications", lecture: "lecture-6", lectureNo: 6,
    question: "GIS in agriculture is used for:",
    options: ["Playing games", "Mapping soil variability, crop health, land use, and planning irrigation", "Word processing", "Accounting"],
    correct: 1,
    explanation: "GIS (Geographic Information System) integrates spatial data for precision farming, land use planning, and resource management.",
    difficulty: "medium"
  },
  {
    id: "d262l_061", subject: "computer-applications", lecture: "lecture-6", lectureNo: 6,
    question: "Cloud computing allows farmers to:",
    options: ["Store data on local hard disks only", "Access data, apps, and services over the internet from anywhere", "Work without electricity", "Avoid using computers"],
    correct: 1,
    explanation: "Cloud computing provides internet-based storage, software, and services accessible from any device.",
    difficulty: "medium"
  },

  // ── LECTURE 7: Digital India and Smart Farming ────────────────────────────
  {
    id: "d262l_062", subject: "computer-applications", lecture: "lecture-7", lectureNo: 7,
    question: "Digital India programme was launched in:",
    options: ["2010", "2015", "2020", "2005"],
    correct: 1,
    explanation: "Digital India was launched by the Government of India on 1 July 2015 to transform India into a digitally empowered society.",
    difficulty: "easy"
  },
  {
    id: "d262l_063", subject: "computer-applications", lecture: "lecture-7", lectureNo: 7,
    question: "UPI (Unified Payments Interface) enables:",
    options: ["Satellite communication", "Instant real-time bank transfers using mobile phones", "Internet browsing", "Television broadcasting"],
    correct: 1,
    explanation: "UPI is a payment system that facilitates instant inter-bank transactions via smartphones, developed by NPCI.",
    difficulty: "easy"
  },
  {
    id: "d262l_064", subject: "computer-applications", lecture: "lecture-7", lectureNo: 7,
    question: "Aadhaar is a:",
    options: ["Bank account", "12-digit unique biometric identity number issued to Indian residents", "Passport number", "Voter ID"],
    correct: 1,
    explanation: "Aadhaar is India's biometric UID (Unique Identification) 12-digit number issued by UIDAI.",
    difficulty: "easy"
  },
  {
    id: "d262l_065", subject: "computer-applications", lecture: "lecture-7", lectureNo: 7,
    question: "PMGDISHA (Pradhan Mantri Gramin Digital Saksharta Abhiyan) aims to:",
    options: ["Provide free computers to farmers", "Make rural households digitally literate across India", "Build rural roads", "Provide rural electricity"],
    correct: 1,
    explanation: "PMGDISHA aims to provide digital literacy skills to six crore rural households to enable them to use digital devices.",
    difficulty: "medium"
  },
  {
    id: "d262l_066", subject: "computer-applications", lecture: "lecture-7", lectureNo: 7,
    question: "mKisan (Mobile for Agriculture) portal provides:",
    options: ["Mobile games", "SMS-based crop advisory, weather alerts, and market prices to farmers", "Mobile banking only", "Social media access"],
    correct: 1,
    explanation: "mKisan portal delivers agricultural information directly to farmers' mobile phones via SMS in local languages.",
    difficulty: "medium"
  },
  {
    id: "d262l_067", subject: "computer-applications", lecture: "lecture-7", lectureNo: 7,
    question: "IoT (Internet of Things) in agriculture refers to:",
    options: ["Only internet browsing on farm", "Connected sensors, devices, and systems that collect and exchange data for smart farming", "International trade of crops", "Traditional farming methods"],
    correct: 1,
    explanation: "Agricultural IoT connects field sensors, weather stations, and drones to collect and analyze farm data in real time.",
    difficulty: "medium"
  },
  {
    id: "d262l_068", subject: "computer-applications", lecture: "lecture-7", lectureNo: 7,
    question: "Artificial Intelligence (AI) in agriculture can help with:",
    options: ["Manual weeding only", "Crop disease detection, yield prediction, and automated machinery", "Removing insects by hand", "Manual irrigation"],
    correct: 1,
    explanation: "AI enables image-based disease diagnosis, yield forecasting, robotic harvesting, and smart irrigation management.",
    difficulty: "medium"
  },
  {
    id: "d262l_069", subject: "computer-applications", lecture: "lecture-7", lectureNo: 7,
    question: "Blockchain technology in agriculture can improve:",
    options: ["Weather prediction", "Traceability and transparency in food supply chain and transactions", "Soil fertility", "Water quality"],
    correct: 1,
    explanation: "Blockchain provides an immutable record of transactions, enabling traceability from farm to consumer in food supply chains.",
    difficulty: "hard"
  },
  {
    id: "d262l_070", subject: "computer-applications", lecture: "lecture-7", lectureNo: 7,
    question: "Agri-Stack is an initiative in India to create:",
    options: ["Grain storage stacks", "A federated farmers' database and digital infrastructure for agricultural services", "Fertilizer stacking guidelines", "Agricultural building codes"],
    correct: 1,
    explanation: "Agri-Stack is a digital public infrastructure to create a digital identity and data layer for farmers to access services.",
    difficulty: "hard"
  },
];
