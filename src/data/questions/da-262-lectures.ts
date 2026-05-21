import { Question } from "@/types";

export const da262LectureQuestions: Question[] = [
  // ── LECTURE 1: Introduction to Computers ─────────────────────────────────
  {
    id: "d262l_001", subject: "computer-applications", lecture: "lecture-1", lectureNo: 1,
    question: "A computer is an electronic device that:",
    options: ["Only stores data", "Only plays games", "Only prints documents", "Processes data according to instructions and produces output"],
    correct: 3,
    explanation: "A computer accepts input data, processes it according to stored instructions (programs), and produces output.",
    difficulty: "easy"
  },
  {
    id: "d262l_002", subject: "computer-applications", lecture: "lecture-1", lectureNo: 1,
    question: "The full form of CPU is:",
    options: ["Central Program Unit", "Core Processing Unit", "Central Processing Unit", "Computer Processing Unit"],
    correct: 2,
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
    options: ["0 and 1", "0–9", "0–7", "A–F"],
    correct: 0,
    explanation: "Binary (base-2) uses only two digits: 0 and 1. All computer data is ultimately represented in binary.",
    difficulty: "easy"
  },
  {
    id: "d262l_006", subject: "computer-applications", lecture: "lecture-1", lectureNo: 1,
    question: "1 byte =",
    options: ["16 bits", "4 bits", "1024 bits", "8 bits"],
    correct: 3,
    explanation: "1 byte = 8 bits. Bit is the smallest unit; byte is the basic unit of storage.",
    difficulty: "easy"
  },
  {
    id: "d262l_007", subject: "computer-applications", lecture: "lecture-1", lectureNo: 1,
    question: "1 KB (Kilobyte) =",
    options: ["1,024 bytes", "10,000 bytes", "100 bytes", "1,000 bytes"],
    correct: 0,
    explanation: "1 KB = 1,024 bytes (2¹⁰). 1 MB = 1,024 KB; 1 GB = 1,024 MB.",
    difficulty: "easy"
  },
  {
    id: "d262l_008", subject: "computer-applications", lecture: "lecture-1", lectureNo: 1,
    question: "ROM stands for:",
    options: ["Read Only Memory", "Removable Output Module", "Random Output Memory", "Rapid Operating Memory"],
    correct: 0,
    explanation: "ROM (Read Only Memory) stores permanent data that cannot be modified during normal computer operation.",
    difficulty: "easy"
  },
  {
    id: "d262l_009", subject: "computer-applications", lecture: "lecture-1", lectureNo: 1,
    question: "Which of the following is an input device?",
    options: ["Keyboard", "Printer", "Speaker", "Monitor"],
    correct: 0,
    explanation: "Keyboard is an input device. Monitor, printer, and speaker are output devices.",
    difficulty: "easy"
  },
  {
    id: "d262l_010", subject: "computer-applications", lecture: "lecture-1", lectureNo: 1,
    question: "Which of the following is an output device?",
    options: ["Mouse", "Scanner", "Monitor", "Keyboard"],
    correct: 2,
    explanation: "Monitor (VDU) is an output device that displays processed information.",
    difficulty: "easy"
  },
  {
    id: "d262l_011", subject: "computer-applications", lecture: "lecture-1", lectureNo: 1,
    question: "The motherboard of a computer is:",
    options: ["The power supply unit", "The hard disk", "The CPU only", "The main circuit board connecting all components"],
    correct: 3,
    explanation: "Motherboard is the main PCB (Printed Circuit Board) that connects and allows communication among all computer components.",
    difficulty: "easy"
  },
  {
    id: "d262l_012", subject: "computer-applications", lecture: "lecture-1", lectureNo: 1,
    question: "BIOS stands for:",
    options: ["Basic Input Output System", "Basic Integrated Operating System", "Binary Input Output System", "Basic Input Output Software"],
    correct: 0,
    explanation: "BIOS (Basic Input Output System) is firmware stored in ROM that initializes hardware during startup.",
    difficulty: "medium"
  },

  // ── LECTURE 2: Operating System and Software ──────────────────────────────
  {
    id: "d262l_013", subject: "computer-applications", lecture: "lecture-2", lectureNo: 2,
    question: "An operating system is:",
    options: ["An application program", "System software that manages computer hardware and provides services to programs", "A type of memory", "A hardware component"],
    correct: 1,
    explanation: "OS (Operating System) is system software that manages hardware resources and provides a platform for application software.",
    difficulty: "easy"
  },
  {
    id: "d262l_014", subject: "computer-applications", lecture: "lecture-2", lectureNo: 2,
    question: "Which is NOT an operating system?",
    options: ["Linux", "Windows", "MS Excel", "MS-DOS"],
    correct: 2,
    explanation: "MS Excel is an application (spreadsheet) program. Windows, Linux, and MS-DOS are operating systems.",
    difficulty: "easy"
  },
  {
    id: "d262l_015", subject: "computer-applications", lecture: "lecture-2", lectureNo: 2,
    question: "GUI stands for:",
    options: ["General User Interface", "Global User Interface", "Graphical User Interface", "Generated Utility Interface"],
    correct: 2,
    explanation: "GUI (Graphical User Interface) allows users to interact with computers using icons, menus, and windows instead of text commands.",
    difficulty: "easy"
  },
  {
    id: "d262l_016", subject: "computer-applications", lecture: "lecture-2", lectureNo: 2,
    question: "Which of the following is an application software?",
    options: ["Ubuntu", "Linux", "Windows 10", "MS Word"],
    correct: 3,
    explanation: "MS Word is application software for word processing. Windows 10, Ubuntu, and Linux are operating systems.",
    difficulty: "easy"
  },
  {
    id: "d262l_017", subject: "computer-applications", lecture: "lecture-2", lectureNo: 2,
    question: "Open source software means:",
    options: ["Software that has no purpose", "Software that is free to use and whose source code is openly available", "Paid proprietary software", "Software for outdoor activities"],
    correct: 1,
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
    options: ["Malicious software that replicates and damages files/systems", "A system driver", "A beneficial program", "An antivirus program"],
    correct: 0,
    explanation: "Computer virus is malware that attaches to programs/files, replicates itself, and may destroy data.",
    difficulty: "easy"
  },
  {
    id: "d262l_020", subject: "computer-applications", lecture: "lecture-2", lectureNo: 2,
    question: "Antivirus software is used to:",
    options: ["Detect, prevent, and remove malicious software", "Speed up the computer", "Create documents", "Connect to the internet"],
    correct: 0,
    explanation: "Antivirus software scans, detects, and removes malware (viruses, trojans, worms, spyware).",
    difficulty: "easy"
  },
  {
    id: "d262l_021", subject: "computer-applications", lecture: "lecture-2", lectureNo: 2,
    question: "Booting a computer means:",
    options: ["Starting the computer and loading the operating system", "Shutting down the computer", "Deleting files", "Installing software"],
    correct: 0,
    explanation: "Booting is the process of starting a computer and loading the operating system into RAM.",
    difficulty: "easy"
  },
  {
    id: "d262l_022", subject: "computer-applications", lecture: "lecture-2", lectureNo: 2,
    question: "Multitasking in an operating system means:",
    options: ["Multiple programs run simultaneously (concurrent execution)", "The computer runs at multiple speeds", "Only one program runs at a time", "Multiple users can log in"],
    correct: 0,
    explanation: "Multitasking allows multiple programs to run concurrently by rapidly switching CPU time between them.",
    difficulty: "medium"
  },

  // ── LECTURE 3: MS Word ────────────────────────────────────────────────────
  {
    id: "d262l_023", subject: "computer-applications", lecture: "lecture-3", lectureNo: 3,
    question: "MS Word is primarily used for:",
    options: ["Graphic design", "Database management", "Creating spreadsheets", "Word processing (creating, editing, formatting text documents)"],
    correct: 3,
    explanation: "MS Word is a word processor for creating letters, reports, essays, and other text-based documents.",
    difficulty: "easy"
  },
  {
    id: "d262l_024", subject: "computer-applications", lecture: "lecture-3", lectureNo: 3,
    question: "The default file extension for MS Word 2016 documents is:",
    options: [".docx", ".txt", ".doc", ".pdf"],
    correct: 0,
    explanation: "MS Word 2007 and later saves files in .docx format (XML-based). Older versions used .doc.",
    difficulty: "easy"
  },
  {
    id: "d262l_025", subject: "computer-applications", lecture: "lecture-3", lectureNo: 3,
    question: "The shortcut key for 'Save' in MS Word is:",
    options: ["Ctrl + P", "Ctrl + O", "Ctrl + S", "Alt + S"],
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
    options: ["Merging two documents into one", "Combining cells in a table", "Merging footnotes", "Creating personalized letters for multiple recipients using a data source"],
    correct: 3,
    explanation: "Mail Merge combines a template document with a data source (Excel, Access) to produce personalized mass mailings.",
    difficulty: "medium"
  },
  {
    id: "d262l_028", subject: "computer-applications", lecture: "lecture-3", lectureNo: 3,
    question: "The shortcut key for 'Bold' in MS Word is:",
    options: ["Ctrl + I", "Ctrl + D", "Ctrl + U", "Ctrl + B"],
    correct: 3,
    explanation: "Ctrl + B applies bold formatting in MS Word (Ctrl + I = Italic, Ctrl + U = Underline).",
    difficulty: "easy"
  },
  {
    id: "d262l_029", subject: "computer-applications", lecture: "lecture-3", lectureNo: 3,
    question: "Which feature in MS Word checks spelling and grammar?",
    options: ["Track Changes", "AutoCorrect only", "AutoFit", "Spelling & Grammar (F7)"],
    correct: 3,
    explanation: "Spelling & Grammar check (F7 shortcut) reviews text for errors in MS Word.",
    difficulty: "easy"
  },
  {
    id: "d262l_030", subject: "computer-applications", lecture: "lecture-3", lectureNo: 3,
    question: "Print Preview in MS Word allows:",
    options: ["Printing immediately", "Editing the document", "Viewing how the document will look when printed before printing", "Saving the document"],
    correct: 2,
    explanation: "Print Preview shows an on-screen representation of the printed page layout.",
    difficulty: "easy"
  },
  {
    id: "d262l_031", subject: "computer-applications", lecture: "lecture-3", lectureNo: 3,
    question: "Track Changes feature in MS Word is used to:",
    options: ["Track the time spent on a document", "Monitor file size changes", "Record and show changes made by multiple authors for review", "Track printing"],
    correct: 2,
    explanation: "Track Changes records all edits (insertions, deletions) so authors or reviewers can see and accept/reject changes.",
    difficulty: "medium"
  },
  {
    id: "d262l_032", subject: "computer-applications", lecture: "lecture-3", lectureNo: 3,
    question: "The maximum font size available in MS Word font size box is:",
    options: ["400 pt", "100 pt", "1638 pt", "72 pt"],
    correct: 2,
    explanation: "MS Word allows font sizes from 1 to 1638 points (you can type the size directly).",
    difficulty: "hard"
  },

  // ── LECTURE 4: MS Excel ───────────────────────────────────────────────────
  {
    id: "d262l_033", subject: "computer-applications", lecture: "lecture-4", lectureNo: 4,
    question: "MS Excel is primarily used for:",
    options: ["Creating, organizing, and analyzing data in spreadsheets", "Email communication", "Presentation design", "Word processing"],
    correct: 0,
    explanation: "MS Excel is a spreadsheet application used for data entry, calculations, charts, and data analysis.",
    difficulty: "easy"
  },
  {
    id: "d262l_034", subject: "computer-applications", lecture: "lecture-4", lectureNo: 4,
    question: "The default file extension for MS Excel 2016 is:",
    options: [".csv", ".xls", ".xlsx", ".xlm"],
    correct: 2,
    explanation: "Excel 2007 and later uses .xlsx format (XML-based). Older versions used .xls.",
    difficulty: "easy"
  },
  {
    id: "d262l_035", subject: "computer-applications", lecture: "lecture-4", lectureNo: 4,
    question: "A cell in Excel is identified by:",
    options: ["Row number only", "Cell name only", "Column letter followed by row number (e.g., A1, B5)", "Only row and column numbers"],
    correct: 2,
    explanation: "Cell address = Column letter + Row number (e.g., A1, C15). Used in formulas and navigation.",
    difficulty: "easy"
  },
  {
    id: "d262l_036", subject: "computer-applications", lecture: "lecture-4", lectureNo: 4,
    question: "In Excel, a formula must start with:",
    options: ["=", "#", "!", "@"],
    correct: 0,
    explanation: "All Excel formulas begin with '=' to distinguish them from regular text/data.",
    difficulty: "easy"
  },
  {
    id: "d262l_037", subject: "computer-applications", lecture: "lecture-4", lectureNo: 4,
    question: "The function =SUM(A1:A10) calculates:",
    options: ["Sum of values in cells A1 through A10", "Count of cells", "Average of A1 to A10", "Maximum value"],
    correct: 0,
    explanation: "=SUM(A1:A10) adds all values in the range A1 to A10.",
    difficulty: "easy"
  },
  {
    id: "d262l_038", subject: "computer-applications", lecture: "lecture-4", lectureNo: 4,
    question: "The function =AVERAGE(B1:B5) computes:",
    options: ["Arithmetic mean of values in B1 to B5", "Number of cells", "Sum of B1 to B5", "Minimum value"],
    correct: 0,
    explanation: "=AVERAGE() calculates the arithmetic mean (sum ÷ count) of specified cells.",
    difficulty: "easy"
  },
  {
    id: "d262l_039", subject: "computer-applications", lecture: "lecture-4", lectureNo: 4,
    question: "Absolute cell reference in Excel is written as:",
    options: ["Both B and C", "$A$1", "A1", "A$1"],
    correct: 1,
    explanation: "$A$1 is an absolute reference — the column (A) and row (1) are locked and don't change when the formula is copied.",
    difficulty: "medium"
  },
  {
    id: "d262l_040", subject: "computer-applications", lecture: "lecture-4", lectureNo: 4,
    question: "VLOOKUP function in Excel is used to:",
    options: ["Look up a value in a column and return a value from another column in the same row", "Validate data", "Create vertical charts", "Calculate vertical sums"],
    correct: 0,
    explanation: "VLOOKUP searches vertically in the first column of a table and returns a value from a specified column in the same row.",
    difficulty: "medium"
  },
  {
    id: "d262l_041", subject: "computer-applications", lecture: "lecture-4", lectureNo: 4,
    question: "Pivot Table in Excel is used for:",
    options: ["Inserting images", "Summarizing, analyzing, and presenting large data sets interactively", "Rotating the worksheet", "Setting print margins"],
    correct: 1,
    explanation: "Pivot Tables allow interactive summarization and cross-tabulation of large data sets for analysis.",
    difficulty: "medium"
  },
  {
    id: "d262l_042", subject: "computer-applications", lecture: "lecture-4", lectureNo: 4,
    question: "Conditional Formatting in Excel highlights cells based on:",
    options: ["Random selection", "User-defined rules (cell value, text, date criteria)", "File size", "Font type only"],
    correct: 1,
    explanation: "Conditional Formatting automatically applies color or format to cells meeting specified conditions.",
    difficulty: "medium"
  },

  // ── LECTURE 5: MS PowerPoint and Internet ────────────────────────────────
  {
    id: "d262l_043", subject: "computer-applications", lecture: "lecture-5", lectureNo: 5,
    question: "MS PowerPoint is used for:",
    options: ["Database management", "Word processing", "Spreadsheet calculations", "Creating slide-based presentations"],
    correct: 3,
    explanation: "PowerPoint creates slide show presentations for lectures, meetings, and demonstrations.",
    difficulty: "easy"
  },
  {
    id: "d262l_044", subject: "computer-applications", lecture: "lecture-5", lectureNo: 5,
    question: "The default file format of MS PowerPoint 2016 is:",
    options: [".pptx", ".pps", ".pot", ".ppt"],
    correct: 0,
    explanation: "PowerPoint 2007 and later uses .pptx format. Older format is .ppt.",
    difficulty: "easy"
  },
  {
    id: "d262l_045", subject: "computer-applications", lecture: "lecture-5", lectureNo: 5,
    question: "Slide Transition in PowerPoint refers to:",
    options: ["The design template", "The visual effect when moving from one slide to the next", "The animation of objects within a slide", "The slide master"],
    correct: 1,
    explanation: "Slide transition is the animation/effect applied when switching between slides during a presentation.",
    difficulty: "easy"
  },
  {
    id: "d262l_046", subject: "computer-applications", lecture: "lecture-5", lectureNo: 5,
    question: "Internet is best described as:",
    options: ["A type of software", "A single computer", "A local area network", "A global network of interconnected computers and devices"],
    correct: 3,
    explanation: "The Internet is a global system of interconnected computer networks that communicate via TCP/IP protocol.",
    difficulty: "easy"
  },
  {
    id: "d262l_047", subject: "computer-applications", lecture: "lecture-5", lectureNo: 5,
    question: "WWW stands for:",
    options: ["World Wide Wire", "Web World Wide", "World Wide Web", "Wide Web Works"],
    correct: 2,
    explanation: "WWW (World Wide Web) is a system of interconnected hypertext documents accessible via the Internet.",
    difficulty: "easy"
  },
  {
    id: "d262l_048", subject: "computer-applications", lecture: "lecture-5", lectureNo: 5,
    question: "HTTP stands for:",
    options: ["Hyperlink Text Transport Protocol", "HyperText Transmission Program", "HyperText Transfer Protocol", "High Transfer Text Protocol"],
    correct: 2,
    explanation: "HTTP (HyperText Transfer Protocol) is the protocol for transmitting web pages on the internet.",
    difficulty: "easy"
  },
  {
    id: "d262l_049", subject: "computer-applications", lecture: "lecture-5", lectureNo: 5,
    question: "URL stands for:",
    options: ["Uniform Resource Locator", "Unified Resource Language", "Universal Resource Locator", "Universal Remote Link"],
    correct: 0,
    explanation: "URL (Uniform Resource Locator) is the web address used to locate resources on the internet.",
    difficulty: "easy"
  },
  {
    id: "d262l_050", subject: "computer-applications", lecture: "lecture-5", lectureNo: 5,
    question: "Email stands for:",
    options: ["Extended Mail", "Electrical Mail", "Express Mail", "Electronic Mail"],
    correct: 3,
    explanation: "Email (Electronic Mail) is a method of exchanging digital messages over computer networks.",
    difficulty: "easy"
  },
  {
    id: "d262l_051", subject: "computer-applications", lecture: "lecture-5", lectureNo: 5,
    question: "A browser is software used to:",
    options: ["Access and display web pages on the internet", "Design websites", "Store files", "Manage email"],
    correct: 0,
    explanation: "Web browsers (Chrome, Firefox, Edge, Safari) retrieve and display web pages from the internet.",
    difficulty: "easy"
  },
  {
    id: "d262l_052", subject: "computer-applications", lecture: "lecture-5", lectureNo: 5,
    question: "LAN stands for:",
    options: ["Large Access Network", "Linked Area Node", "Local Area Network", "Long Area Network"],
    correct: 2,
    explanation: "LAN (Local Area Network) connects computers within a limited area like a building or campus.",
    difficulty: "easy"
  },

  // ── LECTURE 6: Database and Computer in Agriculture ───────────────────────
  {
    id: "d262l_053", subject: "computer-applications", lecture: "lecture-6", lectureNo: 6,
    question: "A database is:",
    options: ["An operating system", "A programming language", "An organized collection of structured data stored electronically", "A type of computer"],
    correct: 2,
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
    options: ["System Query Logic", "Standard Query List", "Structured Query Language", "Simple Query Language"],
    correct: 2,
    explanation: "SQL (Structured Query Language) is the standard language for managing relational databases.",
    difficulty: "medium"
  },
  {
    id: "d262l_056", subject: "computer-applications", lecture: "lecture-6", lectureNo: 6,
    question: "Which of the following is a popular DBMS?",
    options: ["MS Word", "Adobe Photoshop", "MySQL", "VLC Media Player"],
    correct: 2,
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
    options: ["Seed selection", "Weather forecasting", "Pest identification", "Optimizing irrigation scheduling"],
    correct: 3,
    explanation: "Soil moisture sensors provide real-time data to trigger irrigation only when needed, saving water.",
    difficulty: "easy"
  },
  {
    id: "d262l_059", subject: "computer-applications", lecture: "lecture-6", lectureNo: 6,
    question: "e-Crop advisory services in agriculture provide:",
    options: ["Direct loans", "Real-time crop production advice, pest alerts, and weather updates to farmers", "Government job notifications", "Free seeds"],
    correct: 1,
    explanation: "e-Crop advisory services (via apps, SMS, internet) give farmers timely advice on crop management and market prices.",
    difficulty: "easy"
  },
  {
    id: "d262l_060", subject: "computer-applications", lecture: "lecture-6", lectureNo: 6,
    question: "GIS in agriculture is used for:",
    options: ["Mapping soil variability, crop health, land use, and planning irrigation", "Playing games", "Accounting", "Word processing"],
    correct: 0,
    explanation: "GIS (Geographic Information System) integrates spatial data for precision farming, land use planning, and resource management.",
    difficulty: "medium"
  },
  {
    id: "d262l_061", subject: "computer-applications", lecture: "lecture-6", lectureNo: 6,
    question: "Cloud computing allows farmers to:",
    options: ["Avoid using computers", "Access data, apps, and services over the internet from anywhere", "Store data on local hard disks only", "Work without electricity"],
    correct: 1,
    explanation: "Cloud computing provides internet-based storage, software, and services accessible from any device.",
    difficulty: "medium"
  },

  // ── LECTURE 7: Digital India and Smart Farming ────────────────────────────
  {
    id: "d262l_062", subject: "computer-applications", lecture: "lecture-7", lectureNo: 7,
    question: "Digital India programme was launched in:",
    options: ["2010", "2005", "2015", "2020"],
    correct: 2,
    explanation: "Digital India was launched by the Government of India on 1 July 2015 to transform India into a digitally empowered society.",
    difficulty: "easy"
  },
  {
    id: "d262l_063", subject: "computer-applications", lecture: "lecture-7", lectureNo: 7,
    question: "UPI (Unified Payments Interface) enables:",
    options: ["Television broadcasting", "Internet browsing", "Satellite communication", "Instant real-time bank transfers using mobile phones"],
    correct: 3,
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
    options: ["Make rural households digitally literate across India", "Provide rural electricity", "Build rural roads", "Provide free computers to farmers"],
    correct: 0,
    explanation: "PMGDISHA aims to provide digital literacy skills to six crore rural households to enable them to use digital devices.",
    difficulty: "medium"
  },
  {
    id: "d262l_066", subject: "computer-applications", lecture: "lecture-7", lectureNo: 7,
    question: "mKisan (Mobile for Agriculture) portal provides:",
    options: ["SMS-based crop advisory, weather alerts, and market prices to farmers", "Mobile banking only", "Mobile games", "Social media access"],
    correct: 0,
    explanation: "mKisan portal delivers agricultural information directly to farmers' mobile phones via SMS in local languages.",
    difficulty: "medium"
  },
  {
    id: "d262l_067", subject: "computer-applications", lecture: "lecture-7", lectureNo: 7,
    question: "IoT (Internet of Things) in agriculture refers to:",
    options: ["Only internet browsing on farm", "Traditional farming methods", "Connected sensors, devices, and systems that collect and exchange data for smart farming", "International trade of crops"],
    correct: 2,
    explanation: "Agricultural IoT connects field sensors, weather stations, and drones to collect and analyze farm data in real time.",
    difficulty: "medium"
  },
  {
    id: "d262l_068", subject: "computer-applications", lecture: "lecture-7", lectureNo: 7,
    question: "Artificial Intelligence (AI) in agriculture can help with:",
    options: ["Manual weeding only", "Manual irrigation", "Removing insects by hand", "Crop disease detection, yield prediction, and automated machinery"],
    correct: 3,
    explanation: "AI enables image-based disease diagnosis, yield forecasting, robotic harvesting, and smart irrigation management.",
    difficulty: "medium"
  },
  {
    id: "d262l_069", subject: "computer-applications", lecture: "lecture-7", lectureNo: 7,
    question: "Blockchain technology in agriculture can improve:",
    options: ["Weather prediction", "Water quality", "Soil fertility", "Traceability and transparency in food supply chain and transactions"],
    correct: 3,
    explanation: "Blockchain provides an immutable record of transactions, enabling traceability from farm to consumer in food supply chains.",
    difficulty: "hard"
  },
  {
    id: "d262l_070", subject: "computer-applications", lecture: "lecture-7", lectureNo: 7,
    question: "Agri-Stack is an initiative in India to create:",
    options: ["A federated farmers' database and digital infrastructure for agricultural services", "Grain storage stacks", "Fertilizer stacking guidelines", "Agricultural building codes"],
    correct: 0,
    explanation: "Agri-Stack is a digital public infrastructure to create a digital identity and data layer for farmers to access services.",
    difficulty: "hard"
  },
];
