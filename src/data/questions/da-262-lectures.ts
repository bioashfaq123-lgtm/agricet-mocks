import { Question } from "@/types";

export const da262LectureQuestions: Question[] = [
  // ── LECTURE 1: Introduction to Computers ─────────────────────────────────
  {
    id: "d262l_001", subject: "computer-applications", lecture: "lecture-1", lectureNo: 1,
    question: "A computer is an electronic device that:",
    options: ["Only plays games", "Processes data according to instructions and produces output", "Only prints documents", "Only stores data"],
    correct: 1,
    explanation: "A computer accepts input data, processes it according to stored instructions (programs), and produces output.",
    difficulty: "easy"
  },
  {
    id: "d262l_002", subject: "computer-applications", lecture: "lecture-1", lectureNo: 1,
    question: "The full form of CPU is:",
    options: ["Central Program Unit", "Core Processing Unit", "Computer Processing Unit", "Central Processing Unit"],
    correct: 3,
    explanation: "CPU (Central Processing Unit) is the brain of the computer that executes instructions.",
    difficulty: "easy"
  },
  {
    id: "d262l_003", subject: "computer-applications", lecture: "lecture-1", lectureNo: 1,
    question: "RAM stands for:",
    options: ["Rapid Access Module", "Random Access Memory", "Read All Memory", "Remote Access Memory"],
    correct: 1,
    explanation: "RAM (Random Access Memory) is the primary working memory where data and programs are stored temporarily.",
    difficulty: "easy"
  },
  {
    id: "d262l_004", subject: "computer-applications", lecture: "lecture-1", lectureNo: 1,
    question: "Which generation of computers used transistors?",
    options: ["Fourth generation", "Second generation", "First generation", "Third generation"],
    correct: 1,
    explanation: "Second generation computers (1955–1964) used transistors, replacing vacuum tubes of the first generation.",
    difficulty: "medium"
  },
  {
    id: "d262l_005", subject: "computer-applications", lecture: "lecture-1", lectureNo: 1,
    question: "The binary number system uses digits:",
    options: ["0 and 1", "0–7", "A–F", "0–9"],
    correct: 0,
    explanation: "Binary (base-2) uses only two digits: 0 and 1. All computer data is ultimately represented in binary.",
    difficulty: "easy"
  },
  {
    id: "d262l_006", subject: "computer-applications", lecture: "lecture-1", lectureNo: 1,
    question: "1 byte =",
    options: ["1024 bits", "8 bits", "4 bits", "16 bits"],
    correct: 1,
    explanation: "1 byte = 8 bits. Bit is the smallest unit; byte is the basic unit of storage.",
    difficulty: "easy"
  },
  {
    id: "d262l_007", subject: "computer-applications", lecture: "lecture-1", lectureNo: 1,
    question: "1 KB (Kilobyte) =",
    options: ["100 bytes", "1,024 bytes", "10,000 bytes", "1,000 bytes"],
    correct: 1,
    explanation: "1 KB = 1,024 bytes (2¹⁰). 1 MB = 1,024 KB; 1 GB = 1,024 MB.",
    difficulty: "easy"
  },
  {
    id: "d262l_008", subject: "computer-applications", lecture: "lecture-1", lectureNo: 1,
    question: "ROM stands for:",
    options: ["Random Output Memory", "Rapid Operating Memory", "Removable Output Module", "Read Only Memory"],
    correct: 3,
    explanation: "ROM (Read Only Memory) stores permanent data that cannot be modified during normal computer operation.",
    difficulty: "easy"
  },
  {
    id: "d262l_009", subject: "computer-applications", lecture: "lecture-1", lectureNo: 1,
    question: "Which of the following is an input device?",
    options: ["Speaker", "Monitor", "Printer", "Keyboard"],
    correct: 3,
    explanation: "Keyboard is an input device. Monitor, printer, and speaker are output devices.",
    difficulty: "easy"
  },
  {
    id: "d262l_010", subject: "computer-applications", lecture: "lecture-1", lectureNo: 1,
    question: "Which of the following is an output device?",
    options: ["Keyboard", "Scanner", "Mouse", "Monitor"],
    correct: 3,
    explanation: "Monitor (VDU) is an output device that displays processed information.",
    difficulty: "easy"
  },
  {
    id: "d262l_011", subject: "computer-applications", lecture: "lecture-1", lectureNo: 1,
    question: "The motherboard of a computer is:",
    options: ["The main circuit board connecting all components", "The power supply unit", "The CPU only", "The hard disk"],
    correct: 0,
    explanation: "Motherboard is the main PCB (Printed Circuit Board) that connects and allows communication among all computer components.",
    difficulty: "easy"
  },
  {
    id: "d262l_012", subject: "computer-applications", lecture: "lecture-1", lectureNo: 1,
    question: "BIOS stands for:",
    options: ["Binary Input Output System", "Basic Input Output System", "Basic Input Output Software", "Basic Integrated Operating System"],
    correct: 1,
    explanation: "BIOS (Basic Input Output System) is firmware stored in ROM that initializes hardware during startup.",
    difficulty: "medium"
  },

  // ── LECTURE 2: Operating System and Software ──────────────────────────────
  {
    id: "d262l_013", subject: "computer-applications", lecture: "lecture-2", lectureNo: 2,
    question: "An operating system is:",
    options: ["System software that manages computer hardware and provides services to programs", "An application program", "A hardware component", "A type of memory"],
    correct: 0,
    explanation: "OS (Operating System) is system software that manages hardware resources and provides a platform for application software.",
    difficulty: "easy"
  },
  {
    id: "d262l_014", subject: "computer-applications", lecture: "lecture-2", lectureNo: 2,
    question: "Which is NOT an operating system?",
    options: ["Linux", "Windows", "MS-DOS", "MS Excel"],
    correct: 3,
    explanation: "MS Excel is an application (spreadsheet) program. Windows, Linux, and MS-DOS are operating systems.",
    difficulty: "easy"
  },
  {
    id: "d262l_015", subject: "computer-applications", lecture: "lecture-2", lectureNo: 2,
    question: "GUI stands for:",
    options: ["General User Interface", "Generated Utility Interface", "Graphical User Interface", "Global User Interface"],
    correct: 2,
    explanation: "GUI (Graphical User Interface) allows users to interact with computers using icons, menus, and windows instead of text commands.",
    difficulty: "easy"
  },
  {
    id: "d262l_016", subject: "computer-applications", lecture: "lecture-2", lectureNo: 2,
    question: "Which of the following is an application software?",
    options: ["Ubuntu", "Windows 10", "MS Word", "Linux"],
    correct: 2,
    explanation: "MS Word is application software for word processing. Windows 10, Ubuntu, and Linux are operating systems.",
    difficulty: "easy"
  },
  {
    id: "d262l_017", subject: "computer-applications", lecture: "lecture-2", lectureNo: 2,
    question: "Open source software means:",
    options: ["Software that is free to use and whose source code is openly available", "Software for outdoor activities", "Paid proprietary software", "Software that has no purpose"],
    correct: 0,
    explanation: "Open source software has publicly available source code that can be freely used, modified, and distributed.",
    difficulty: "easy"
  },
  {
    id: "d262l_018", subject: "computer-applications", lecture: "lecture-2", lectureNo: 2,
    question: "Android is an operating system designed for:",
    options: ["Supercomputers", "Mobile devices (smartphones and tablets)", "Servers only", "Desktop computers only"],
    correct: 1,
    explanation: "Android is an open-source operating system developed by Google for mobile devices.",
    difficulty: "easy"
  },
  {
    id: "d262l_019", subject: "computer-applications", lecture: "lecture-2", lectureNo: 2,
    question: "A virus in computer terms is:",
    options: ["An antivirus program", "A system driver", "Malicious software that replicates and damages files/systems", "A beneficial program"],
    correct: 2,
    explanation: "Computer virus is malware that attaches to programs/files, replicates itself, and may destroy data.",
    difficulty: "easy"
  },
  {
    id: "d262l_020", subject: "computer-applications", lecture: "lecture-2", lectureNo: 2,
    question: "Antivirus software is used to:",
    options: ["Create documents", "Speed up the computer", "Detect, prevent, and remove malicious software", "Connect to the internet"],
    correct: 2,
    explanation: "Antivirus software scans, detects, and removes malware (viruses, trojans, worms, spyware).",
    difficulty: "easy"
  },
  {
    id: "d262l_021", subject: "computer-applications", lecture: "lecture-2", lectureNo: 2,
    question: "Booting a computer means:",
    options: ["Deleting files", "Installing software", "Shutting down the computer", "Starting the computer and loading the operating system"],
    correct: 3,
    explanation: "Booting is the process of starting a computer and loading the operating system into RAM.",
    difficulty: "easy"
  },
  {
    id: "d262l_022", subject: "computer-applications", lecture: "lecture-2", lectureNo: 2,
    question: "Multitasking in an operating system means:",
    options: ["The computer runs at multiple speeds", "Only one program runs at a time", "Multiple programs run simultaneously (concurrent execution)", "Multiple users can log in"],
    correct: 2,
    explanation: "Multitasking allows multiple programs to run concurrently by rapidly switching CPU time between them.",
    difficulty: "medium"
  },

  // ── LECTURE 3: MS Word ────────────────────────────────────────────────────
  {
    id: "d262l_023", subject: "computer-applications", lecture: "lecture-3", lectureNo: 3,
    question: "MS Word is primarily used for:",
    options: ["Creating spreadsheets", "Graphic design", "Word processing (creating, editing, formatting text documents)", "Database management"],
    correct: 2,
    explanation: "MS Word is a word processor for creating letters, reports, essays, and other text-based documents.",
    difficulty: "easy"
  },
  {
    id: "d262l_024", subject: "computer-applications", lecture: "lecture-3", lectureNo: 3,
    question: "The default file extension for MS Word 2016 documents is:",
    options: [".txt", ".doc", ".docx", ".pdf"],
    correct: 2,
    explanation: "MS Word 2007 and later saves files in .docx format (XML-based). Older versions used .doc.",
    difficulty: "easy"
  },
  {
    id: "d262l_025", subject: "computer-applications", lecture: "lecture-3", lectureNo: 3,
    question: "The shortcut key for 'Save' in MS Word is:",
    options: ["Alt + S", "Ctrl + O", "Ctrl + S", "Ctrl + P"],
    correct: 2,
    explanation: "Ctrl + S saves the current document in MS Word.",
    difficulty: "easy"
  },
  {
    id: "d262l_026", subject: "computer-applications", lecture: "lecture-3", lectureNo: 3,
    question: "Which tab in MS Word contains font formatting options?",
    options: ["Page Layout", "Insert", "Home", "View"],
    correct: 2,
    explanation: "The Home tab contains the Font and Paragraph groups for text formatting in MS Word.",
    difficulty: "easy"
  },
  {
    id: "d262l_027", subject: "computer-applications", lecture: "lecture-3", lectureNo: 3,
    question: "Mail Merge in MS Word is used for:",
    options: ["Merging two documents into one", "Creating personalized letters for multiple recipients using a data source", "Merging footnotes", "Combining cells in a table"],
    correct: 1,
    explanation: "Mail Merge combines a template document with a data source (Excel, Access) to produce personalized mass mailings.",
    difficulty: "medium"
  },
  {
    id: "d262l_028", subject: "computer-applications", lecture: "lecture-3", lectureNo: 3,
    question: "The shortcut key for 'Bold' in MS Word is:",
    options: ["Ctrl + B", "Ctrl + U", "Ctrl + D", "Ctrl + I"],
    correct: 0,
    explanation: "Ctrl + B applies bold formatting in MS Word (Ctrl + I = Italic, Ctrl + U = Underline).",
    difficulty: "easy"
  },
  {
    id: "d262l_029", subject: "computer-applications", lecture: "lecture-3", lectureNo: 3,
    question: "Which feature in MS Word checks spelling and grammar?",
    options: ["Track Changes", "AutoCorrect only", "Spelling & Grammar (F7)", "AutoFit"],
    correct: 2,
    explanation: "Spelling & Grammar check (F7 shortcut) reviews text for errors in MS Word.",
    difficulty: "easy"
  },
  {
    id: "d262l_030", subject: "computer-applications", lecture: "lecture-3", lectureNo: 3,
    question: "Print Preview in MS Word allows:",
    options: ["Printing immediately", "Viewing how the document will look when printed before printing", "Editing the document", "Saving the document"],
    correct: 1,
    explanation: "Print Preview shows an on-screen representation of the printed page layout.",
    difficulty: "easy"
  },
  {
    id: "d262l_031", subject: "computer-applications", lecture: "lecture-3", lectureNo: 3,
    question: "Track Changes feature in MS Word is used to:",
    options: ["Monitor file size changes", "Track printing", "Record and show changes made by multiple authors for review", "Track the time spent on a document"],
    correct: 2,
    explanation: "Track Changes records all edits (insertions, deletions) so authors or reviewers can see and accept/reject changes.",
    difficulty: "medium"
  },
  {
    id: "d262l_032", subject: "computer-applications", lecture: "lecture-3", lectureNo: 3,
    question: "The maximum font size available in MS Word font size box is:",
    options: ["100 pt", "1638 pt", "72 pt", "400 pt"],
    correct: 1,
    explanation: "MS Word allows font sizes from 1 to 1638 points (you can type the size directly).",
    difficulty: "hard"
  },

  // ── LECTURE 4: MS Excel ───────────────────────────────────────────────────
  {
    id: "d262l_033", subject: "computer-applications", lecture: "lecture-4", lectureNo: 4,
    question: "MS Excel is primarily used for:",
    options: ["Creating, organizing, and analyzing data in spreadsheets", "Presentation design", "Word processing", "Email communication"],
    correct: 0,
    explanation: "MS Excel is a spreadsheet application used for data entry, calculations, charts, and data analysis.",
    difficulty: "easy"
  },
  {
    id: "d262l_034", subject: "computer-applications", lecture: "lecture-4", lectureNo: 4,
    question: "The default file extension for MS Excel 2016 is:",
    options: [".xlm", ".xls", ".csv", ".xlsx"],
    correct: 3,
    explanation: "Excel 2007 and later uses .xlsx format (XML-based). Older versions used .xls.",
    difficulty: "easy"
  },
  {
    id: "d262l_035", subject: "computer-applications", lecture: "lecture-4", lectureNo: 4,
    question: "A cell in Excel is identified by:",
    options: ["Column letter followed by row number (e.g., A1, B5)", "Only row and column numbers", "Cell name only", "Row number only"],
    correct: 0,
    explanation: "Cell address = Column letter + Row number (e.g., A1, C15). Used in formulas and navigation.",
    difficulty: "easy"
  },
  {
    id: "d262l_036", subject: "computer-applications", lecture: "lecture-4", lectureNo: 4,
    question: "In Excel, a formula must start with:",
    options: ["@", "!", "=", "#"],
    correct: 2,
    explanation: "All Excel formulas begin with '=' to distinguish them from regular text/data.",
    difficulty: "easy"
  },
  {
    id: "d262l_037", subject: "computer-applications", lecture: "lecture-4", lectureNo: 4,
    question: "The function =SUM(A1:A10) calculates:",
    options: ["Count of cells", "Maximum value", "Average of A1 to A10", "Sum of values in cells A1 through A10"],
    correct: 3,
    explanation: "=SUM(A1:A10) adds all values in the range A1 to A10.",
    difficulty: "easy"
  },
  {
    id: "d262l_038", subject: "computer-applications", lecture: "lecture-4", lectureNo: 4,
    question: "The function =AVERAGE(B1:B5) computes:",
    options: ["Number of cells", "Minimum value", "Sum of B1 to B5", "Arithmetic mean of values in B1 to B5"],
    correct: 3,
    explanation: "=AVERAGE() calculates the arithmetic mean (sum ÷ count) of specified cells.",
    difficulty: "easy"
  },
  {
    id: "d262l_039", subject: "computer-applications", lecture: "lecture-4", lectureNo: 4,
    question: "Absolute cell reference in Excel is written as:",
    options: ["A1", "$A$1", "Both B and C", "A$1"],
    correct: 1,
    explanation: "$A$1 is an absolute reference — the column (A) and row (1) are locked and don't change when the formula is copied.",
    difficulty: "medium"
  },
  {
    id: "d262l_040", subject: "computer-applications", lecture: "lecture-4", lectureNo: 4,
    question: "VLOOKUP function in Excel is used to:",
    options: ["Validate data", "Calculate vertical sums", "Look up a value in a column and return a value from another column in the same row", "Create vertical charts"],
    correct: 2,
    explanation: "VLOOKUP searches vertically in the first column of a table and returns a value from a specified column in the same row.",
    difficulty: "medium"
  },
  {
    id: "d262l_041", subject: "computer-applications", lecture: "lecture-4", lectureNo: 4,
    question: "Pivot Table in Excel is used for:",
    options: ["Setting print margins", "Summarizing, analyzing, and presenting large data sets interactively", "Rotating the worksheet", "Inserting images"],
    correct: 1,
    explanation: "Pivot Tables allow interactive summarization and cross-tabulation of large data sets for analysis.",
    difficulty: "medium"
  },
  {
    id: "d262l_042", subject: "computer-applications", lecture: "lecture-4", lectureNo: 4,
    question: "Conditional Formatting in Excel highlights cells based on:",
    options: ["User-defined rules (cell value, text, date criteria)", "Random selection", "Font type only", "File size"],
    correct: 0,
    explanation: "Conditional Formatting automatically applies color or format to cells meeting specified conditions.",
    difficulty: "medium"
  },

  // ── LECTURE 5: MS PowerPoint and Internet ────────────────────────────────
  {
    id: "d262l_043", subject: "computer-applications", lecture: "lecture-5", lectureNo: 5,
    question: "MS PowerPoint is used for:",
    options: ["Spreadsheet calculations", "Word processing", "Database management", "Creating slide-based presentations"],
    correct: 3,
    explanation: "PowerPoint creates slide show presentations for lectures, meetings, and demonstrations.",
    difficulty: "easy"
  },
  {
    id: "d262l_044", subject: "computer-applications", lecture: "lecture-5", lectureNo: 5,
    question: "The default file format of MS PowerPoint 2016 is:",
    options: [".pps", ".pptx", ".ppt", ".pot"],
    correct: 1,
    explanation: "PowerPoint 2007 and later uses .pptx format. Older format is .ppt.",
    difficulty: "easy"
  },
  {
    id: "d262l_045", subject: "computer-applications", lecture: "lecture-5", lectureNo: 5,
    question: "Slide Transition in PowerPoint refers to:",
    options: ["The animation of objects within a slide", "The design template", "The slide master", "The visual effect when moving from one slide to the next"],
    correct: 3,
    explanation: "Slide transition is the animation/effect applied when switching between slides during a presentation.",
    difficulty: "easy"
  },
  {
    id: "d262l_046", subject: "computer-applications", lecture: "lecture-5", lectureNo: 5,
    question: "Internet is best described as:",
    options: ["A global network of interconnected computers and devices", "A local area network", "A single computer", "A type of software"],
    correct: 0,
    explanation: "The Internet is a global system of interconnected computer networks that communicate via TCP/IP protocol.",
    difficulty: "easy"
  },
  {
    id: "d262l_047", subject: "computer-applications", lecture: "lecture-5", lectureNo: 5,
    question: "WWW stands for:",
    options: ["Web World Wide", "Wide Web Works", "World Wide Web", "World Wide Wire"],
    correct: 2,
    explanation: "WWW (World Wide Web) is a system of interconnected hypertext documents accessible via the Internet.",
    difficulty: "easy"
  },
  {
    id: "d262l_048", subject: "computer-applications", lecture: "lecture-5", lectureNo: 5,
    question: "HTTP stands for:",
    options: ["HyperText Transmission Program", "Hyperlink Text Transport Protocol", "HyperText Transfer Protocol", "High Transfer Text Protocol"],
    correct: 2,
    explanation: "HTTP (HyperText Transfer Protocol) is the protocol for transmitting web pages on the internet.",
    difficulty: "easy"
  },
  {
    id: "d262l_049", subject: "computer-applications", lecture: "lecture-5", lectureNo: 5,
    question: "URL stands for:",
    options: ["Universal Remote Link", "Universal Resource Locator", "Unified Resource Language", "Uniform Resource Locator"],
    correct: 3,
    explanation: "URL (Uniform Resource Locator) is the web address used to locate resources on the internet.",
    difficulty: "easy"
  },
  {
    id: "d262l_050", subject: "computer-applications", lecture: "lecture-5", lectureNo: 5,
    question: "Email stands for:",
    options: ["Express Mail", "Electrical Mail", "Electronic Mail", "Extended Mail"],
    correct: 2,
    explanation: "Email (Electronic Mail) is a method of exchanging digital messages over computer networks.",
    difficulty: "easy"
  },
  {
    id: "d262l_051", subject: "computer-applications", lecture: "lecture-5", lectureNo: 5,
    question: "A browser is software used to:",
    options: ["Manage email", "Access and display web pages on the internet", "Store files", "Design websites"],
    correct: 1,
    explanation: "Web browsers (Chrome, Firefox, Edge, Safari) retrieve and display web pages from the internet.",
    difficulty: "easy"
  },
  {
    id: "d262l_052", subject: "computer-applications", lecture: "lecture-5", lectureNo: 5,
    question: "LAN stands for:",
    options: ["Local Area Network", "Large Access Network", "Linked Area Node", "Long Area Network"],
    correct: 0,
    explanation: "LAN (Local Area Network) connects computers within a limited area like a building or campus.",
    difficulty: "easy"
  },

  // ── LECTURE 6: Database and Computer in Agriculture ───────────────────────
  {
    id: "d262l_053", subject: "computer-applications", lecture: "lecture-6", lectureNo: 6,
    question: "A database is:",
    options: ["An organized collection of structured data stored electronically", "A type of computer", "A programming language", "An operating system"],
    correct: 0,
    explanation: "A database is an organized collection of data that can be easily accessed, managed, and updated.",
    difficulty: "easy"
  },
  {
    id: "d262l_054", subject: "computer-applications", lecture: "lecture-6", lectureNo: 6,
    question: "DBMS stands for:",
    options: ["Database Management Software", "Digital Base Management System", "Data Based Management Service", "Database Management System"],
    correct: 3,
    explanation: "DBMS (Database Management System) software manages databases, controls access, and handles queries.",
    difficulty: "easy"
  },
  {
    id: "d262l_055", subject: "computer-applications", lecture: "lecture-6", lectureNo: 6,
    question: "SQL stands for:",
    options: ["Standard Query List", "Structured Query Language", "System Query Logic", "Simple Query Language"],
    correct: 1,
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
    options: ["Reducing farm area", "Manual observation only", "Variable rate application of inputs based on spatial variability in fields", "One-size-fits-all farming"],
    correct: 2,
    explanation: "Precision agriculture uses GPS, sensors, and GIS to optimize input application according to field variability.",
    difficulty: "medium"
  },
  {
    id: "d262l_058", subject: "computer-applications", lecture: "lecture-6", lectureNo: 6,
    question: "Soil moisture sensors in precision agriculture help in:",
    options: ["Optimizing irrigation scheduling", "Pest identification", "Weather forecasting", "Seed selection"],
    correct: 0,
    explanation: "Soil moisture sensors provide real-time data to trigger irrigation only when needed, saving water.",
    difficulty: "easy"
  },
  {
    id: "d262l_059", subject: "computer-applications", lecture: "lecture-6", lectureNo: 6,
    question: "e-Crop advisory services in agriculture provide:",
    options: ["Government job notifications", "Free seeds", "Real-time crop production advice, pest alerts, and weather updates to farmers", "Direct loans"],
    correct: 2,
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
    options: ["2020", "2005", "2010", "2015"],
    correct: 3,
    explanation: "Digital India was launched by the Government of India on 1 July 2015 to transform India into a digitally empowered society.",
    difficulty: "easy"
  },
  {
    id: "d262l_063", subject: "computer-applications", lecture: "lecture-7", lectureNo: 7,
    question: "UPI (Unified Payments Interface) enables:",
    options: ["Television broadcasting", "Instant real-time bank transfers using mobile phones", "Satellite communication", "Internet browsing"],
    correct: 1,
    explanation: "UPI is a payment system that facilitates instant inter-bank transactions via smartphones, developed by NPCI.",
    difficulty: "easy"
  },
  {
    id: "d262l_064", subject: "computer-applications", lecture: "lecture-7", lectureNo: 7,
    question: "Aadhaar is a:",
    options: ["Voter ID", "Bank account", "12-digit unique biometric identity number issued to Indian residents", "Passport number"],
    correct: 2,
    explanation: "Aadhaar is India's biometric UID (Unique Identification) 12-digit number issued by UIDAI.",
    difficulty: "easy"
  },
  {
    id: "d262l_065", subject: "computer-applications", lecture: "lecture-7", lectureNo: 7,
    question: "PMGDISHA (Pradhan Mantri Gramin Digital Saksharta Abhiyan) aims to:",
    options: ["Provide rural electricity", "Make rural households digitally literate across India", "Build rural roads", "Provide free computers to farmers"],
    correct: 1,
    explanation: "PMGDISHA aims to provide digital literacy skills to six crore rural households to enable them to use digital devices.",
    difficulty: "medium"
  },
  {
    id: "d262l_066", subject: "computer-applications", lecture: "lecture-7", lectureNo: 7,
    question: "mKisan (Mobile for Agriculture) portal provides:",
    options: ["Mobile banking only", "Mobile games", "SMS-based crop advisory, weather alerts, and market prices to farmers", "Social media access"],
    correct: 2,
    explanation: "mKisan portal delivers agricultural information directly to farmers' mobile phones via SMS in local languages.",
    difficulty: "medium"
  },
  {
    id: "d262l_067", subject: "computer-applications", lecture: "lecture-7", lectureNo: 7,
    question: "IoT (Internet of Things) in agriculture refers to:",
    options: ["Traditional farming methods", "International trade of crops", "Connected sensors, devices, and systems that collect and exchange data for smart farming", "Only internet browsing on farm"],
    correct: 2,
    explanation: "Agricultural IoT connects field sensors, weather stations, and drones to collect and analyze farm data in real time.",
    difficulty: "medium"
  },
  {
    id: "d262l_068", subject: "computer-applications", lecture: "lecture-7", lectureNo: 7,
    question: "Artificial Intelligence (AI) in agriculture can help with:",
    options: ["Crop disease detection, yield prediction, and automated machinery", "Manual weeding only", "Manual irrigation", "Removing insects by hand"],
    correct: 0,
    explanation: "AI enables image-based disease diagnosis, yield forecasting, robotic harvesting, and smart irrigation management.",
    difficulty: "medium"
  },
  {
    id: "d262l_069", subject: "computer-applications", lecture: "lecture-7", lectureNo: 7,
    question: "Blockchain technology in agriculture can improve:",
    options: ["Traceability and transparency in food supply chain and transactions", "Weather prediction", "Water quality", "Soil fertility"],
    correct: 0,
    explanation: "Blockchain provides an immutable record of transactions, enabling traceability from farm to consumer in food supply chains.",
    difficulty: "hard"
  },
  {
    id: "d262l_070", subject: "computer-applications", lecture: "lecture-7", lectureNo: 7,
    question: "Agri-Stack is an initiative in India to create:",
    options: ["Agricultural building codes", "Fertilizer stacking guidelines", "Grain storage stacks", "A federated farmers' database and digital infrastructure for agricultural services"],
    correct: 3,
    explanation: "Agri-Stack is a digital public infrastructure to create a digital identity and data layer for farmers to access services.",
    difficulty: "hard"
  },


  {
    id: "d262l_071", subject: "da-262", lecture: "lecture-8", lectureNo: 8,
    question: "The generations of computers and their corresponding components are correctly matched as:",
    options: ["First Generation - Vacuum Tubes; Second Generation - Transistors; Third Generation - ICs", "First Generation - Transistors; Second Generation - Vacuum Tubes", "First Generation - ICs; Second Generation - Vacuum Tubes; Third Generation - Transistors", "First Generation - Microprocessor; Second Generation - Transistors; Third Generation - ICs"],
    correct: 0,
    explanation: "As per DA-262 notes: First Generation (1946-1954): Vacuum tubes; Second Generation (1955-1965): Transistors; Third Generation (1968-1975): Integrated Circuits (IC); Fourth Generation: VLSI; Fifth Generation: ULSI/Microprocessor.",
    difficulty: "medium"
  },
  {
    id: "d262l_072", subject: "da-262", lecture: "lecture-8", lectureNo: 8,
    question: "The standard keyboard used with personal computers has how many keys?",
    options: ["104 keys", "101 keys", "96 keys", "84 keys"],
    correct: 0,
    explanation: "As per DA-262 notes: The most commonly available computer keyboard has 104 keys. It includes alphanumeric keys, punctuation keys, special keys (arrow, control, function keys F1-F12, HOME, END).",
    difficulty: "easy"
  },
  {
    id: "d262l_073", subject: "da-262", lecture: "lecture-8", lectureNo: 8,
    question: "MICR technology is primarily used in which industry?",
    options: ["Libraries for cataloguing books", "Banking for processing cheques", "Railways for ticketing", "Supermarkets for barcode scanning"],
    correct: 1,
    explanation: "As per DA-262 notes: MICR (Magnetic Ink Character Recognition) is a character recognition technology used primarily by the banking industry to facilitate the processing of cheques. It can scan about 2600 cheques per minute.",
    difficulty: "easy"
  },
  {
    id: "d262l_074", subject: "da-262", lecture: "lecture-8", lectureNo: 8,
    question: "RAM (Random Access Memory) is called volatile memory because:",
    options: ["It requires a battery to maintain data", "It stores data permanently without power", "It can read but not write data", "Data disappears from RAM as soon as power is switched off"],
    correct: 3,
    explanation: "As per DA-262 notes: RAM is volatile memory - storage of data and instructions in RAM is temporary, till the time the computer is running. It disappears from RAM as soon as power is switched off.",
    difficulty: "easy"
  },
  {
    id: "d262l_075", subject: "da-262", lecture: "lecture-8", lectureNo: 8,
    question: "The storage capacity of a standard CD-ROM is approximately:",
    options: ["50 to 100 MB", "250 to 350 MB", "650 to 700 MB", "1.5 to 2 GB"],
    correct: 2,
    explanation: "As per DA-262 notes: The storage capacity of most CD-ROMs is approximately 650 MB or 700 MB.",
    difficulty: "easy"
  },
  {
    id: "d262l_076", subject: "da-262", lecture: "lecture-9", lectureNo: 9,
    question: "The first Intel microprocessor (8080) was introduced in which year?",
    options: ["1979", "1974", "1985", "1969"],
    correct: 1,
    explanation: "As per DA-262 notes: Intel 8080 was introduced in 1974 with 6000 transistors and 2 MHz clock speed.",
    difficulty: "medium"
  },
  {
    id: "d262l_077", subject: "da-262", lecture: "lecture-9", lectureNo: 9,
    question: "The AUTOEXEC.BAT file in DOS is special because:",
    options: ["It is automatically executed when the computer is switched on or during booting", "It stores all user passwords", "It cannot be deleted or modified", "It contains antivirus programs"],
    correct: 0,
    explanation: "As per DA-262 notes: If a batch file is given the special name AUTOEXEC.BAT, it is automatically executed when the computer is switched on or during booting.",
    difficulty: "medium"
  },
  {
    id: "d262l_078", subject: "da-262", lecture: "lecture-9", lectureNo: 9,
    question: "In Windows, the 'Recycle Bin' is used for:",
    options: ["Organizing downloaded files", "Storing system backup files", "Storing all files and folders deleted from Windows temporarily, which can be restored", "Storing temporary internet files"],
    correct: 2,
    explanation: "As per DA-262 notes: Recycle Bin is a folder that stores all the files and folders deleted from Windows temporarily, which can be restored again if needed.",
    difficulty: "easy"
  },
  {
    id: "d262l_079", subject: "da-262", lecture: "lecture-9", lectureNo: 9,
    question: "Warm Booting of a computer is done by pressing which key combination?",
    options: ["Alt + F4", "Ctrl + Alt + Del", "Ctrl + Shift + Esc", "Win + R"],
    correct: 1,
    explanation: "As per DA-262 notes: Warm Booting is carried out by pressing Ctrl + Alt + Del simultaneously. It is preferable to cold booting as it safeguards the system from sudden power fluctuations.",
    difficulty: "easy"
  },
  {
    id: "d262l_080", subject: "da-262", lecture: "lecture-10", lectureNo: 10,
    question: "What does the DOS command 'FORMAT a:' do?",
    options: ["Lists all files on drive A", "Copies all files to drive A", "Organizes disk A into magnetic tracks and sectors readable by DOS", "Renames the drive A label"],
    correct: 2,
    explanation: "As per DA-262 notes: FORMAT a: organizes the disk in drive A into magnetic tracks and sectors that are readable by DOS. Warning: formatting an old disk erases all existing files on it.",
    difficulty: "medium"
  },
  {
    id: "d262l_081", subject: "da-262", lecture: "lecture-10", lectureNo: 10,
    question: "The DOS command 'TREE' displays:",
    options: ["Only hidden files", "Files in alphabetical order", "All files with size, date and time", "Directories and sub-directories in a drive without files"],
    correct: 3,
    explanation: "As per DA-262 notes: TREE displays directories and sub-directories in a drive WITHOUT files. DIR command displays all files with size, date and time, and shows directories with <DIR> symbol.",
    difficulty: "medium"
  },
  {
    id: "d262l_082", subject: "da-262", lecture: "lecture-10", lectureNo: 10,
    question: "Assertion (A): Computer viruses reside in executable files (.COM or .EXE).\nReason (R): When the PC is switched on, the virus enters RAM through COMMAND.COM and starts destructive work.",
    options: ["Both A and R are true and R is the correct explanation of A", "A is true but R is false", "A is false but R is true", "Both A and R are true but R is NOT the correct explanation of A"],
    correct: 0,
    explanation: "As per DA-262 notes: Viruses reside in executable files (.COM or .EXE). When PC is switched on, virus enters RAM through .COM file and starts destroying data and program files.",
    difficulty: "medium"
  },
  {
    id: "d262l_083", subject: "da-262", lecture: "lecture-10", lectureNo: 10,
    question: "Assertion (A): Windows OS supports file names up to 255 characters long.\nReason (R): MS-DOS was limited to 8 characters with 3-character extension (8:3 format), which Windows overcame.",
    options: ["Both A and R are true and R is the correct explanation of A", "A is true but R is false", "A is false but R is true", "Both A and R are true but R is NOT the correct explanation of A"],
    correct: 0,
    explanation: "As per DA-262 notes: Windows supports long file names up to 255 characters long, unlike DOS which was limited to 8:3 (8 character name + 3 character extension) format.",
    difficulty: "medium"
  },
  {
    id: "d262l_084", subject: "da-262", lecture: "lecture-11", lectureNo: 11,
    question: "Match the following computer generations with their components:\n     Column-I (Generation)  |  Column-II (Component)    |  Column-III (Years)\nA.  First Generation      |  1.  Vacuum Tubes         |  i.   1946-1954\nB.  Second Generation     |  2.  Transistors           |  ii.  1955-1965\nC.  Third Generation      |  3.  Integrated Circuits   |  iii. 1968-1975\nD.  Fourth Generation     |  4.  VLSI                  |  iv.  1976-1980",
    options: ["A-1-ii, B-2-i,  C-3-iv,  D-4-iii", "A-2-i,  B-1-ii,  C-4-iii,  D-3-iv", "A-3-i,  B-4-ii,  C-1-iii,  D-2-iv", "A-1-i,  B-2-ii,  C-3-iii,  D-4-iv"],
    correct: 3,
    explanation: "As per DA-262 notes: First Gen (1946-1954) - Vacuum tubes; Second Gen (1955-1965) - Transistors; Third Gen (1968-1975) - ICs; Fourth Gen (1976-1980) - VLSI; Fifth Gen (1980-today) - ULSI/Microprocessor.",
    difficulty: "medium"
  },
  {
    id: "d262l_085", subject: "da-262", lecture: "lecture-11", lectureNo: 11,
    question: "Match the following types of printers with their printing speeds:\n     Column-I (Printer type)  |  Column-II (Speed)     |  Column-III (Mechanism)\nA.  Dot Matrix printer     |  1.  200-700 CPS       |  i.   24-pin or 9-pin through ribbon\nB.  Ink Jet printer        |  2.  Slow, 90 CPS      |  ii.  Sprays ionized ink\nC.  Laser printer          |  3.  6-12 PPM          |  iii. Uses laser beam\nD.  Line printer           |  4.  300-600 LPM       |  iv.  Prints lines at a time",
    options: ["A-1-iii, B-2-i, C-3-ii,  D-4-iv", "A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-3-iii, B-1-i, C-2-ii,  D-4-iv", "A-2-ii, B-1-i,  C-4-iv,  D-3-iii"],
    correct: 1,
    explanation: "As per DA-262 notes: Dot matrix: 200-700 CPS (24-pin/9-pin through ribbon); Ink jet: slow 90 CPS (sprays ionized ink); Laser: 6-12 PPM (laser beam); Line printer: 300-600 LPM (prints lines at a time).",
    difficulty: "medium"
  },
  {
    id: "d262l_086", subject: "da-262", lecture: "lecture-12", lectureNo: 12,
    question: "Match the following memory units and their storage capacities:\n     Column-I (Unit)   |  Column-II (Equivalent)       |  Column-III (Abbreviation)\nA.  8 bits             |  1.  1 Byte                   |  i.   B\nB.  1024 Bytes         |  2.  1 Kilobyte               |  ii.  KB\nC.  1024 KB            |  3.  1 Megabyte               |  iii. MB\nD.  1024 MB            |  4.  1 Gigabyte               |  iv.  GB",
    options: ["A-2-i,  B-1-ii,  C-4-iii,  D-3-iv", "A-1-iii, B-2-ii, C-3-i,  D-4-iv", "A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-4-i,  B-3-ii,  C-2-iii,  D-1-iv"],
    correct: 2,
    explanation: "As per DA-262 notes: 8 bits = 1 Byte; 1024 Bytes = 1 KB; 1024 KB = 1 MB; 1024 MB = 1 GB.",
    difficulty: "easy"
  },
  {
    id: "d262l_087", subject: "da-262", lecture: "lecture-12", lectureNo: 12,
    question: "The Windows Explorer is divided into two panes. What does the left pane display?",
    options: ["The recently opened documents", "The contents of selected files", "The list of drives and folders on the computer", "The control panel settings"],
    correct: 2,
    explanation: "As per DA-262 notes: Windows Explorer is divided into 2 panes. The left pane displays the list of drives and folders on the computer. The right pane displays the contents of the selected drive or folder.",
    difficulty: "easy"
  },
  {
    id: "d262l_088", subject: "da-262", lecture: "lecture-13", lectureNo: 13,
    question: "FORTRAN stands for:",
    options: ["Forward Transfer", "Formula Translation", "Function Translation", "Formal Translation"],
    correct: 1,
    explanation: "As per DA-262 notes: FORTRAN stands for FORmula TRANslation. Other programming languages: COBOL (Common Business Oriented Language), BASIC (Beginner's All purpose Symbolic Instruction Code), ALGOL (ALGOrithmic Language).",
    difficulty: "easy"
  },
  {
    id: "d262l_089", subject: "da-262", lecture: "lecture-13", lectureNo: 13,
    question: "The key difference between a Compiler and an Interpreter is:",
    options: ["Compiler works only with BASIC; Interpreter works with all languages", "Compiler is faster; Interpreter is slower because it compiles twice", "There is no difference; both do the same work", "Compiler translates the whole program before execution; Interpreter translates one statement at a time"],
    correct: 3,
    explanation: "As per DA-262 notes: A compiler translates the whole program before execution and produces a list of all errors at the end. An interpreter translates one statement at a time and executes it immediately if error-free.",
    difficulty: "medium"
  },
  {
    id: "d262l_090", subject: "da-262", lecture: "lecture-13", lectureNo: 13,
    question: "DVD stands for:",
    options: ["Data Video Drive", "Direct Video Disk", "Digital Video Display", "Digital Versatile Disc"],
    correct: 3,
    explanation: "As per DA-262 notes: DVD stands for Digital Versatile Disc. Storage capacity is at least 4.7 GB, with DVDs storing up to 17 GB available. Used for large multimedia presentations and movies.",
    difficulty: "easy"
  },
  {
    id: "d262l_091", subject: "da-262", lecture: "lecture-14", lectureNo: 14,
    question: "Which type of computer operates by 'measuring' instead of 'counting'?",
    options: ["Hybrid computers", "Digital computers", "Analog computers", "Super computers"],
    correct: 2,
    explanation: "As per DA-262 notes: Analog computers operate by 'measuring' instead of 'counting'. The name is derived from Greek word 'analog' meaning similarity. They are powerful tools for solving differential equations.",
    difficulty: "medium"
  },
  {
    id: "d262l_092", subject: "da-262", lecture: "lecture-14", lectureNo: 14,
    question: "India's indigenous super computer was developed under the name:",
    options: ["PARAM", "CRAY", "TITAN", "JAGUAR"],
    correct: 0,
    explanation: "As per DA-262 notes: The first super computer was developed in USA by CRAY computers. In India, the indigenous super computer was developed under the name PARAM.",
    difficulty: "easy"
  },
  {
    id: "d262l_093", subject: "da-262", lecture: "lecture-15", lectureNo: 15,
    question: "The DOS command 'REN' is used to:",
    options: ["Rename an old file with another name", "Run an executable file", "Remove a directory", "Restore deleted files"],
    correct: 0,
    explanation: "As per DA-262 notes: The REN command is used to rename the old file with another name. Example: C:\> REN MATHS.TXT RESULT.TXT renames MATHS.TXT to RESULT.TXT.",
    difficulty: "easy"
  },
  {
    id: "d262l_094", subject: "da-262", lecture: "lecture-15", lectureNo: 15,
    question: "ASCII stands for:",
    options: ["American Standard Code for Information Interchange", "Applied Standard Code for International Interchange", "Automatic System Code for Integrated Information", "Advanced Standard Code for Information Interchange"],
    correct: 0,
    explanation: "As per DA-262 notes: ASCII stands for American Standard Code for Information Interchange. In ASCII, A=65, Z=90, a=97, z=121. These codes convert alphabets to digital and binary form.",
    difficulty: "easy"
  },
  {
    id: "d262l_095", subject: "da-262", lecture: "lecture-15", lectureNo: 15,
    question: "The Windows feature 'Object Linking and Embedding (OLE)' allows:",
    options: ["Creating hyperlinks to websites", "Pasting a portion of one document into another with advanced document linking", "Linking hardware components to the OS", "Embedding antivirus protection"],
    correct: 1,
    explanation: "As per DA-262 notes: Windows provides advanced document linking features called Dynamic Data Exchange (DDE) and Object Linking and Embedding (OLE), which allow pasting portions of one document into another.",
    difficulty: "medium"
  },
  {
    id: "d262l_096", subject: "da-262", lecture: "lecture-16", lectureNo: 16,
    question: "MS-DOS was developed by Bill Gates at what age?",
    options: ["17 years", "14 years", "19 years", "21 years"],
    correct: 2,
    explanation: "As per DA-262 notes: MS-DOS (Disk Operating System) was developed as early as 1980 by Bill Gates at the age of 19. It is suited for personal computers and is a single user, single task operating system.",
    difficulty: "medium"
  },
  {
    id: "d262l_097", subject: "da-262", lecture: "lecture-16", lectureNo: 16,
    question: "In DOS, the command 'DIR/P' is used for:",
    options: ["Pausing the listing whenever the screen is full", "Displaying files sorted alphabetically", "Printing the directory listing", "Displaying files in parallel/side-by-side format"],
    correct: 0,
    explanation: "As per DA-262 notes: DIR/P pauses the listing of the directory whenever the screen is full. The next screen load of files can be displayed by pressing any key. DIR/W displays files in a five-column format.",
    difficulty: "medium"
  },
  {
    id: "d262l_098", subject: "da-262", lecture: "lecture-16", lectureNo: 16,
    question: "BIOS stands for:",
    options: ["Basic Integrated Operating System", "Binary Input Output System", "Basic Input Output System", "Binary Integrated Output System"],
    correct: 2,
    explanation: "As per DA-262 notes: BIOS stands for Basic Input Output System. It is a software residing on ROM chip that carries out the booting of the computer. When PC is switched on, BIOS searches for the operating system.",
    difficulty: "easy"
  },
  {
    id: "d262l_099", subject: "da-262", lecture: "lecture-16", lectureNo: 16,
    question: "Which of the following is NOT a General Purpose data analysis software package?",
    options: ["GENSTAT", "SPSS (Statistical Package for Social Science)", "WORDSTAR", "MSTAT"],
    correct: 2,
    explanation: "As per DA-262 notes: SPSS, MSTAT, MICROSTAT, GENSTAT, SAS are Data Analysis packages. WORDSTAR is a Word Processing package along with WORD PERFECT, MS-Word, etc.",
    difficulty: "medium"
  },
  {
    id: "d262l_100", subject: "da-262", lecture: "lecture-16", lectureNo: 16,
    question: "The Windows feature 'Taskbar' is characterized by:",
    options: ["A toolbar that appears only when the mouse hovers over it", "A floating toolbar that can be moved anywhere", "A horizontal bar at the bottom of screen with START menu on left and Notification area on right", "A vertical bar on the left side of the screen"],
    correct: 2,
    explanation: "As per DA-262 notes: Taskbar is the rectangular bar that runs horizontally across the bottom of the screen. It has the START menu on the left and the Notification area on the right. All open applications are shown on the Taskbar.",
    difficulty: "easy"
  },

];
