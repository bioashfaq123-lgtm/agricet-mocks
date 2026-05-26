import sys; sys.stdout.reconfigure(encoding='utf-8')

base = r'C:\Users\bioas\Agricet Mock Test Series\src\data\questions'

# 100 new questions for DA-262 lecture file
lecture_questions = '''  {
    id: "d262x_001",
    subject: "da-262",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The word 'Computer' is derived from the Latin word 'Computare' which means:",
    options: ["To store data", "To calculate", "To display", "To process"],
    correct: 1,
    explanation: "As per DA-262 notes: The word computer is derived from Latin 'computare' meaning to calculate."
  },
  {
    id: "d262x_002",
    subject: "da-262",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Which of the following is NOT an advantage of computers?",
    options: ["High speed", "Accuracy", "Ability to think independently", "Diligence"],
    correct: 2,
    explanation: "As per DA-262 notes: Computers cannot think. They need clear and complete instructions."
  },
  {
    id: "d262x_003",
    subject: "da-262",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "The first generation of computers (1946-1954) used which component?",
    options: ["Transistors", "Integrated Circuits", "Vacuum tubes", "VLSI"],
    correct: 2,
    explanation: "As per DA-262 notes: First generation computers (1946-1954) used Vacuum tubes."
  },
  {
    id: "d262x_004",
    subject: "da-262",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The Control Unit of a CPU acts as:",
    options: ["Arithmetic processor", "Central nervous system of the computer", "Output device controller", "Data storage"],
    correct: 1,
    explanation: "As per DA-262 notes: Control Unit acts as a central nervous system and ensures information is stored correctly and program instructions are followed in proper sequence."
  },
  {
    id: "d262x_005",
    subject: "da-262",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "The Arithmetic Logic Unit (ALU) is responsible for:",
    options: ["Storing data permanently", "Performing arithmetic and logical operations", "Managing input/output devices", "Booting the computer"],
    correct: 1,
    explanation: "As per DA-262 notes: ALU performs all arithmetic operations (addition, subtraction) and logical functions."
  },
  {
    id: "d262x_006",
    subject: "da-262",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Which input device is known as the standard input device?",
    options: ["Mouse", "Scanner", "Keyboard", "Web camera"],
    correct: 2,
    explanation: "As per DA-262 notes: The keyboard is used for typing text and is known as the standard input device."
  },
  {
    id: "d262x_007",
    subject: "da-262",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Optical Mark Recognition (OMR) technology is used in:",
    options: ["Bank cheque processing", "Aptitude tests and answer sheets", "Supermarket billing", "Library documentation"],
    correct: 1,
    explanation: "As per DA-262 notes: OMR senses presence or absence of marks and is used in aptitude tests."
  },
  {
    id: "d262x_008",
    subject: "da-262",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "MICR can scan approximately how many cheques per minute?",
    options: ["1000", "2600", "500", "5000"],
    correct: 1,
    explanation: "As per DA-262 notes: MICR provides high speed scanning, processing about 2600 cheques/min."
  },
  {
    id: "d262x_009",
    subject: "da-262",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "VDU stands for:",
    options: ["Virtual Display Utility", "Visual Display Unit", "Video Data Unit", "Variable Display Unit"],
    correct: 1,
    explanation: "As per DA-262 notes: Monitor is also referred to as Visual Display Unit (VDU)."
  },
  {
    id: "d262x_010",
    subject: "da-262",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Which printer uses a laser beam to produce images?",
    options: ["Dot-matrix printer", "Ink jet printer", "Line printer", "Laser printer"],
    correct: 3,
    explanation: "As per DA-262 notes: Laser printer (also called page printer) uses laser beam to produce an image at 6 to 12 PPM."
  },
  {
    id: "d262x_011",
    subject: "da-262",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "A dot-matrix printer uses how many pins?",
    options: ["8 or 16 pin", "24 pin or 9 pin", "12 or 36 pin", "32 or 64 pin"],
    correct: 1,
    explanation: "As per DA-262 notes: Dot-matrix printer prints using either 24 pin or 9 pin, at 200/300 to 700 CPS."
  },
  {
    id: "d262x_012",
    subject: "da-262",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Which of the following is the basic unit of computer memory?",
    options: ["Byte", "Bit", "Kilobyte", "Nibble"],
    correct: 1,
    explanation: "As per DA-262 notes: The basic unit of memory is a bit (binary digit - 0,1). To store a character, 8 bits or 1 byte is required."
  },
  {
    id: "d262x_013",
    subject: "da-262",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "1 Gigabyte (GB) is equal to:",
    options: ["1024 KB", "1024 MB", "1024 TB", "1000 MB"],
    correct: 1,
    explanation: "As per DA-262 notes: 1024 MB = 1 Giga Byte (GB)."
  },
  {
    id: "d262x_014",
    subject: "da-262",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The ASCII code for letter A is:",
    options: ["97", "65", "90", "48"],
    correct: 1,
    explanation: "As per DA-262 notes: ASCII code A=65 ...Z=90 and a=97 ...z=121."
  },
  {
    id: "d262x_015",
    subject: "da-262",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "ROM (Read Only Memory) is characterized as:",
    options: ["Volatile memory", "Non-volatile memory", "Cache memory", "Virtual memory"],
    correct: 1,
    explanation: "As per DA-262 notes: ROM stores basic input-output instructions permanently. It does not depend on power supply - it is non-volatile memory."
  },
  {
    id: "d262x_016",
    subject: "da-262",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "The storage capacity of a 3.5-inch High Density floppy disk is:",
    options: ["360 KB", "1.2 MB", "1.44 MB", "2.8 MB"],
    correct: 2,
    explanation: "As per DA-262 notes: High Density 3.5 inch floppy disk has storage capacity of 1.44 MB."
  },
  {
    id: "d262x_017",
    subject: "da-262",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "CD-R (Compact Disc Recordable) allows:",
    options: ["Data to be written and erased multiple times", "Data to be written only once and then read", "Only reading of pre-recorded data", "Wireless data transfer"],
    correct: 1,
    explanation: "As per DA-262 notes: CD-R - Data can be written onto it just once. Data once written cannot be erased."
  },
  {
    id: "d262x_018",
    subject: "da-262",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The storage capacity of a DVD is at least:",
    options: ["700 MB", "1.44 GB", "4.7 GB", "17 MB"],
    correct: 2,
    explanation: "As per DA-262 notes: DVD storage capacity is at least 4.7 GB; some can store up to 17 GB."
  },
  {
    id: "d262x_019",
    subject: "da-262",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "A Flash Drive is also known as:",
    options: ["Hard disk", "Floppy disk", "Pen drive or USB drive", "CD-ROM"],
    correct: 2,
    explanation: "As per DA-262 notes: Flash drive is commonly called Pen drive and also USB drive. It is plugged into the USB port."
  },
  {
    id: "d262x_020",
    subject: "da-262",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "The relationship between Hardware and Software is analogous to:",
    options: ["Rain and clouds", "TV and TV studio", "Sun and moon", "Seed and soil"],
    correct: 1,
    explanation: "As per DA-262 notes: Without TV studio (software), the TV (hardware) is a dead machine - similar analogy."
  },
  {
    id: "d262x_021",
    subject: "da-262",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "UNIX and XENIX operating systems are suited for:",
    options: ["Single user, single task", "Single user, multi-task", "Multi-user and multi-task", "Only gaming"],
    correct: 2,
    explanation: "As per DA-262 notes: UNIX AND XENIX are suited for multi-user and multi-task systems."
  },
  {
    id: "d262x_022",
    subject: "da-262",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "A Compiler translates programs:",
    options: ["Statement by statement", "The whole program before execution", "Only the first half", "After execution"],
    correct: 1,
    explanation: "As per DA-262 notes: A compiler translates the whole program before execution, producing an object program if error-free."
  },
  {
    id: "d262x_023",
    subject: "da-262",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "COBOL stands for:",
    options: ["Common Basic Object Language", "Common Business Oriented Language", "Compiler Based Object Language", "Computer Binary Oriented Language"],
    correct: 1,
    explanation: "As per DA-262 notes: COBOL = Common Business Oriented Language."
  },
  {
    id: "d262x_024",
    subject: "da-262",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "ALGOL stands for:",
    options: ["Algebraic Logic", "ALGOrithmic Language", "Advanced Logic", "Automated Logic Generator"],
    correct: 1,
    explanation: "As per DA-262 notes: ALGOL = ALGOrithmic Language."
  },
  {
    id: "d262x_025",
    subject: "da-262",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "BASIC stands for:",
    options: ["Binary Automatic Structured Instruction Code", "Beginner's All purpose Symbolic Instruction Code", "Basic Algorithm Symbolic Instruction Code", "Binary Arithmetic Standard Instruction Code"],
    correct: 1,
    explanation: "As per DA-262 notes: BASIC = Beginner's All purpose Symbolic Instruction Code."
  },
  {
    id: "d262x_026",
    subject: "da-262",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "High Level Languages (HLL) are also known as:",
    options: ["Machine dependent languages", "Problem oriented languages (POL)", "Binary languages", "Assembly dependent languages"],
    correct: 1,
    explanation: "As per DA-262 notes: HLLs are referred as problem oriented languages (POL) and third generation languages."
  },
  {
    id: "d262x_027",
    subject: "da-262",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Which of the following is an example of a Utility Program?",
    options: ["MS Word", "Payroll system", "COPY command", "Oracle database"],
    correct: 2,
    explanation: "As per DA-262 notes: Utility programs are pre-written programs like COPY, SORT, MAILING, virus scanning software."
  },
  {
    id: "d262x_028",
    subject: "da-262",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "SPSS stands for:",
    options: ["Special Package for Statistical Science", "Statistical Package for Social Science", "Standard Program for Statistical Studies", "Systematic Package for Scientific Studies"],
    correct: 1,
    explanation: "As per DA-262 notes: SPSS = Statistical Package for Social Science - a data analysis general purpose package."
  },
  {
    id: "d262x_029",
    subject: "da-262",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Which of the following is a Spread Sheet software?",
    options: ["dBASE", "LOTUS", "WORDSTAR", "ORACLE"],
    correct: 1,
    explanation: "As per DA-262 notes: LOTUS, Qpro, VP-PLANNER, SYMPHONY, MS-Excel are examples of spreadsheet software."
  },
  {
    id: "d262x_030",
    subject: "da-262",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Which function of OS manages assignment of processor to different tasks?",
    options: ["Memory management", "Processor management", "File management", "I/O management"],
    correct: 1,
    explanation: "As per DA-262 notes: Processor management - manages the assignment of processor to different tasks being performed."
  },
  {
    id: "d262x_031",
    subject: "da-262",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Analog computers operate by:",
    options: ["Counting digits", "Measuring quantities", "Processing binary codes", "Executing programs"],
    correct: 1,
    explanation: "As per DA-262 notes: Analog computers operate by measuring instead of counting."
  },
  {
    id: "d262x_032",
    subject: "da-262",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "The first supercomputer developed in the USA was by:",
    options: ["IBM", "Intel", "CRAY computers", "Microsoft"],
    correct: 2,
    explanation: "As per DA-262 notes: The first super computer was developed in USA by CRAY computers."
  },
  {
    id: "d262x_033",
    subject: "da-262",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Mini computers are characterized as:",
    options: ["Extremely large and expensive", "Medium sized with moderate cost used for large volume applications", "Smallest general purpose systems", "Used only for weather forecasting"],
    correct: 1,
    explanation: "As per DA-262 notes: Mini Computer is a medium sized computer with moderate cost and used for large volume applications. It can serve multi-users simultaneously."
  },
  {
    id: "d262x_034",
    subject: "da-262",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "PC-AT stands for:",
    options: ["Personal Computer with Advanced Technology", "Personal Computer with Automated Technology", "Personal Computer with Applied Technology", "Personal Computer with Analog Technology"],
    correct: 0,
    explanation: "As per DA-262 notes: PC-AT = PC with Advanced Technology."
  },
  {
    id: "d262x_035",
    subject: "da-262",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The clock speed of the Intel Pentium 4 (introduced in 2000) was:",
    options: ["450 MHZ", "233 MHZ", "1.5 GHZ", "60 MHZ"],
    correct: 2,
    explanation: "As per DA-262 notes: Pentium 4 (2000) had a clock speed of 1.5 GHZ with 42,000,000 transistors."
  },
  {
    id: "d262x_036",
    subject: "da-262",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "Clock speed of a computer is measured in terms of:",
    options: ["Bytes per second", "Million pulses per second (MHz)", "Bits per second", "Pages per minute"],
    correct: 1,
    explanation: "As per DA-262 notes: Clock speed = number of pulses per second, measured in MHZ (million pulses per second)."
  },
  {
    id: "d262x_037",
    subject: "da-262",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "In a PC, the Floppy Disk Drive is referred as drive:",
    options: ["C", "D", "A or B", "E"],
    correct: 2,
    explanation: "As per DA-262 notes: Floppy Disk Drive is referred as A or B; Hard Disk is C."
  },
  {
    id: "d262x_038",
    subject: "da-262",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Cold Booting involves:",
    options: ["Pressing Ctrl+Alt+Del", "Switching OFF and then switching ON after some time", "Running BIOS update", "Formatting the hard disk"],
    correct: 1,
    explanation: "As per DA-262 notes: Cold Booting means switching OFF the system and after some time again switching ON."
  },
  {
    id: "d262x_039",
    subject: "da-262",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "BIOS stands for:",
    options: ["Basic Input Output System", "Binary Input Output Software", "Basic Integrated Operating System", "Binary Integrated Output Software"],
    correct: 0,
    explanation: "As per DA-262 notes: BIOS = Basic Input Output System, a software residing on ROM chip that carries out the booting process."
  },
  {
    id: "d262x_040",
    subject: "da-262",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "In DOS, file names can have a maximum of how many characters in the first part?",
    options: ["3 characters", "8 characters", "12 characters", "16 characters"],
    correct: 1,
    explanation: "As per DA-262 notes: DOS file names should be of one to eight characters in length with option of one to three character extension."
  },
  {
    id: "d262x_041",
    subject: "da-262",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "The DOS command VOL is used to:",
    options: ["Set volume (sound) level", "Display the volume label of the current disk", "Create volumes on disk", "Verify disk volume"],
    correct: 1,
    explanation: "As per DA-262 notes: VOL command displays the volume label of the current disk."
  },
  {
    id: "d262x_042",
    subject: "da-262",
    lecture: "lecture-11",
    lectureNo: 11,
    question: "The DOS command DIR/W displays files in:",
    options: ["Alphabetical order", "A five column format without date and time", "Reverse order", "Only hidden files"],
    correct: 1,
    explanation: "As per DA-262 notes: DIR/W displays files in a five column format, only file names and extensions without date and time of creation."
  },
  {
    id: "d262x_043",
    subject: "da-262",
    lecture: "lecture-11",
    lectureNo: 11,
    question: "Batch files in DOS have the extension:",
    options: [".COM", ".EXE", ".BAT", ".SYS"],
    correct: 2,
    explanation: "As per DA-262 notes: A batch file has the extension .BAT. If named AUTOEXEC.BAT, it executes automatically during booting."
  },
  {
    id: "d262x_044",
    subject: "da-262",
    lecture: "lecture-11",
    lectureNo: 11,
    question: "The DOS command SORT arranges files in:",
    options: ["Size order", "Date order", "Alphanumeric order (A to Z or Z to A)", "Random order"],
    correct: 2,
    explanation: "As per DA-262 notes: SORT command sorts files in alphanumeric order: either A to Z or Z to A."
  },
  {
    id: "d262x_045",
    subject: "da-262",
    lecture: "lecture-11",
    lectureNo: 11,
    question: "The DOS command MD is used to:",
    options: ["Modify a directory", "Make a new directory", "Move a directory", "Merge directories"],
    correct: 1,
    explanation: "As per DA-262 notes: MD command is used to make a new directory (or sub-directory) subordinate to the current directory."
  },
  {
    id: "d262x_046",
    subject: "da-262",
    lecture: "lecture-12",
    lectureNo: 12,
    question: "In Windows, file names can have up to how many characters?",
    options: ["8 characters", "64 characters", "128 characters", "255 characters"],
    correct: 3,
    explanation: "As per DA-262 notes: Windows supports long file names up to 255 characters, unlike DOS which was limited to 8."
  },
  {
    id: "d262x_047",
    subject: "da-262",
    lecture: "lecture-12",
    lectureNo: 12,
    question: "DDE in Windows stands for:",
    options: ["Dynamic Data Exchange", "Digital Data Encryption", "Direct Data Entry", "Distributed Data Execution"],
    correct: 0,
    explanation: "As per DA-262 notes: DDE = Dynamic Data Exchange, allows pasting portions of one document into another."
  },
  {
    id: "d262x_048",
    subject: "da-262",
    lecture: "lecture-12",
    lectureNo: 12,
    question: "Which minimum RAM is required to run Windows OS?",
    options: ["1 MB", "4 MB", "8 MB", "16 MB"],
    correct: 2,
    explanation: "As per DA-262 notes: Windows requires a powerful PC with a minimum RAM of 8 MB."
  },
  {
    id: "d262x_049",
    subject: "da-262",
    lecture: "lecture-13",
    lectureNo: 13,
    question: "Windows Explorer displays the contents of the entire system in:",
    options: ["Alphabetical order", "A hierarchical manner", "Chronological order", "Random order"],
    correct: 1,
    explanation: "As per DA-262 notes: Windows Explorer displays the contents of the entire system in a hierarchical manner."
  },
  {
    id: "d262x_050",
    subject: "da-262",
    lecture: "lecture-13",
    lectureNo: 13,
    question: "In Windows Explorer, to select all files in a folder, the shortcut is:",
    options: ["Ctrl + S", "Ctrl + A", "Ctrl + F", "Shift + A"],
    correct: 1,
    explanation: "As per DA-262 notes: To select all files - CTRL + A."
  },
  {
    id: "d262x_051",
    subject: "da-262",
    lecture: "lecture-13",
    lectureNo: 13,
    question: "To permanently delete a file without moving to Recycle Bin in Windows:",
    options: ["Ctrl + D", "Shift + Delete", "Alt + Delete", "Delete key only"],
    correct: 1,
    explanation: "As per DA-262 notes: To delete a file permanently without moving to Recycle Bin, select the file and press Shift+Del."
  },
  {
    id: "d262x_052",
    subject: "da-262",
    lecture: "lecture-14",
    lectureNo: 14,
    question: "Word-wrap in word processing means:",
    options: ["Wrapping text in a box", "Automatically moving to next line when current line is full", "Wrapping files for transfer", "Password protecting documents"],
    correct: 1,
    explanation: "As per DA-262 notes: Word-wrap - when line length exceeds right margin, the word is automatically adjusted to the following line."
  },
  {
    id: "d262x_053",
    subject: "da-262",
    lecture: "lecture-14",
    lectureNo: 14,
    question: "Mail Merge printing is used to:",
    options: ["Merge two documents into one", "Print same letter with different addresses so each is original", "Merge emails with attachments", "Sort mailing lists"],
    correct: 1,
    explanation: "As per DA-262 notes: Mail merge helps printing same original letter with different addresses, so each letter is original."
  },
  {
    id: "d262x_054",
    subject: "da-262",
    lecture: "lecture-14",
    lectureNo: 14,
    question: "Thesaurus in word processing provides:",
    options: ["Spell checking", "Synonyms or words with similar meanings", "Grammar rules", "Document templates"],
    correct: 1,
    explanation: "As per DA-262 notes: Thesaurus provides synonyms (words with similar meanings)."
  },
  {
    id: "d262x_055",
    subject: "da-262",
    lecture: "lecture-14",
    lectureNo: 14,
    question: "A Macro in word processing is:",
    options: ["A large font size", "A character or word representing a series of keystrokes", "A type of header/footer", "A table format"],
    correct: 1,
    explanation: "As per DA-262 notes: A macro is a character or word that represents a series of keystrokes, saving time by replacing common keystroke combinations."
  },
  {
    id: "d262x_056",
    subject: "da-262",
    lecture: "lecture-15",
    lectureNo: 15,
    question: "In MS Word, the Title Bar displays:",
    options: ["Document content", "Document name and application", "Formatting options", "Menu commands"],
    correct: 1,
    explanation: "As per DA-262 notes: Title bar displays the document name and the application."
  },
  {
    id: "d262x_057",
    subject: "da-262",
    lecture: "lecture-15",
    lectureNo: 15,
    question: "In MS Word, the Formatting Toolbar contains:",
    options: ["File management options", "Formatting options like font, size, bold, italic", "Internet browser buttons", "Database connection tools"],
    correct: 1,
    explanation: "As per DA-262 notes: Formatting toolbar contains a list of formatting options available inside the format menu."
  },
  {
    id: "d262x_058",
    subject: "da-262",
    lecture: "lecture-15",
    lectureNo: 15,
    question: "In MS Word, the insertion point is:",
    options: ["A toolbar button", "A blinking vertical line indicating where text will be placed", "The cursor on taskbar", "A status bar indicator"],
    correct: 1,
    explanation: "As per DA-262 notes: Insertion point is a blinking vertical line that indicates the position on screen where text or graphics will be placed."
  },
  {
    id: "d262x_059",
    subject: "da-262",
    lecture: "lecture-15",
    lectureNo: 15,
    question: "In MS Word File Menu, Save As Web page saves the document with extension:",
    options: [".doc", ".pdf", ".html", ".txt"],
    correct: 2,
    explanation: "As per DA-262 notes: Save as Web page - saves a document in a Web style with HTML extension."
  },
  {
    id: "d262x_060",
    subject: "da-262",
    lecture: "lecture-16",
    lectureNo: 16,
    question: "In MS Word, to start a new page at any point, press:",
    options: ["Alt + Enter", "Ctrl + Enter", "Shift + Enter", "Tab + Enter"],
    correct: 1,
    explanation: "As per DA-262 notes: To start a new page, press Ctrl + Enter (page break)."
  },
  {
    id: "d262x_061",
    subject: "da-262",
    lecture: "lecture-16",
    lectureNo: 16,
    question: "The Undo shortcut in MS Word Edit Menu is:",
    options: ["Ctrl + Z", "Ctrl + U", "Ctrl + Y", "Alt + Z"],
    correct: 0,
    explanation: "As per DA-262 notes: Undo = Ctrl + Z; Redo = Ctrl + Y."
  },
  {
    id: "d262x_062",
    subject: "da-262",
    lecture: "lecture-16",
    lectureNo: 16,
    question: "In MS Word Edit Menu, Go To shortcut is:",
    options: ["Ctrl + F", "Ctrl + G", "Ctrl + H", "Ctrl + T"],
    correct: 1,
    explanation: "As per DA-262 notes: Go To (Ctrl + G) - cursor goes to specified page, line, paragraph."
  },
  {
    id: "d262x_063",
    subject: "da-262",
    lecture: "lecture-16",
    lectureNo: 16,
    question: "In MS Word Format Menu, Drop Cap is used to:",
    options: ["Insert capital letters automatically", "Drop the letter to different lines", "Convert lowercase to uppercase", "Add drop shadow to text"],
    correct: 1,
    explanation: "As per DA-262 notes: Drop Cap is used to drop the letter to different lines."
  },
  {
    id: "d262x_064",
    subject: "da-262",
    lecture: "lecture-16",
    lectureNo: 16,
    question: "In MS Word, Replace shortcut key is:",
    options: ["Ctrl + F", "Ctrl + H", "Ctrl + R", "Ctrl + P"],
    correct: 1,
    explanation: "As per DA-262 notes: Replace (Ctrl + H) - used to replace any part of text/word/character with another."
  },
  {
    id: "d262x_065",
    subject: "da-262",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "According to DA-262 notes, the property of computers to perform same tasks repeatedly with same accuracy is called:",
    options: ["Versatility", "Diligence", "Automation", "High speed"],
    correct: 1,
    explanation: "As per DA-262 notes: Diligence - computers can perform the same task repeatedly with same accuracy without getting tired."
  },
  {
    id: "d262x_066",
    subject: "da-262",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Secondary memory is also referred to as:",
    options: ["Primary storage", "Cache memory", "Backup storage or auxiliary storage", "Register memory"],
    correct: 2,
    explanation: "As per DA-262 notes: Secondary memory is also referred as auxiliary or secondary memory - also called backup storage."
  },
  {
    id: "d262x_067",
    subject: "da-262",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The Intel 8080 microprocessor introduced in 1974 had how many transistors?",
    options: ["29,000", "6000", "134,000", "275,000"],
    correct: 1,
    explanation: "As per DA-262 notes: Intel 8080 (1974) had 6000 transistors and clock speed of 2 MHZ."
  },
  {
    id: "d262x_068",
    subject: "da-262",
    lecture: "lecture-9",
    lectureNo: 9,
    question: "The PC-AT type personal computer uses microprocessors ranging from:",
    options: ["8080 to 8088", "8088 to 8086", "80286 to 80486", "Pentium I to IV"],
    correct: 2,
    explanation: "As per DA-262 notes: PC-AT has 1 MB to 32 MB RAM and uses 80286 to 80486 microprocessors."
  },
  {
    id: "d262x_069",
    subject: "da-262",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Backup files in DOS have the extension:",
    options: [".BAT", ".BAK", ".SYS", ".COM"],
    correct: 1,
    explanation: "As per DA-262 notes: Backup files have extension .BAK and their contents cannot be altered (edited)."
  },
  {
    id: "d262x_070",
    subject: "da-262",
    lecture: "lecture-11",
    lectureNo: 11,
    question: "The PATH command in DOS is used to:",
    options: ["Display directory tree", "Provide access to files in other directories or disks", "Format the disk", "List all files"],
    correct: 1,
    explanation: "As per DA-262 notes: PATH command provides access to files located on other directories or on other disks."
  },
  {
    id: "d262x_071",
    subject: "da-262",
    lecture: "lecture-11",
    lectureNo: 11,
    question: "The difference between TREE and DIR commands in DOS is that:",
    options: ["Both are identical", "TREE displays directories and sub-directories without files; DIR shows files with size date time", "TREE shows files; DIR shows folders", "TREE is for hard disk; DIR is for floppy"],
    correct: 1,
    explanation: "As per DA-262 notes: TREE displays directories and sub-directories without files; DIR displays all files with size, date and time of creation."
  },
  {
    id: "d262x_072",
    subject: "da-262",
    lecture: "lecture-13",
    lectureNo: 13,
    question: "To move files in Windows, the shortcut is:",
    options: ["Ctrl + C then Ctrl + V", "Ctrl + X then Ctrl + V", "Ctrl + M then Ctrl + V", "Ctrl + A then Ctrl + V"],
    correct: 1,
    explanation: "As per DA-262 notes: To cut = Ctrl + X; to paste = Ctrl + V. This moves files from one location to another."
  },
  {
    id: "d262x_073",
    subject: "da-262",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "Which of the following is a word processing package?",
    options: ["LOTUS", "WORDSTAR", "dBASE", "ORACLE"],
    correct: 1,
    explanation: "As per DA-262 notes: Word processing packages include MSWORD, WORDSTAR, CHIRATOR, NORTON EDITOR."
  },
  {
    id: "d262x_074",
    subject: "da-262",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Micro computers are also referred as:",
    options: ["Mainframe computers", "Super computers", "Personal computers (PC)", "Mini computers"],
    correct: 2,
    explanation: "As per DA-262 notes: Micro computers are also referred as personal computers (PC). They are self contained units for use by one person."
  },
  {
    id: "d262x_075",
    subject: "da-262",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Line printer prints at a speed of:",
    options: ["200-300 CPS", "90 CPS", "6-12 PPM", "300-600 LPM"],
    correct: 3,
    explanation: "As per DA-262 notes: Line printer prints lines at a time and has speed of 300 to 600 LPM (Lines Per Minute)."
  },
  {
    id: "d262x_076",
    subject: "da-262",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "A Plotter is used for:",
    options: ["Printing text documents", "Scanning images", "Producing drawings or graphs through pens", "Data storage"],
    correct: 2,
    explanation: "As per DA-262 notes: Plotter produces drawings or graphs through pens which are filled with different colours."
  },
  {
    id: "d262x_077",
    subject: "da-262",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Machine Languages are referred as:",
    options: ["Second generation languages", "Third generation languages", "First generation languages", "Fourth generation languages"],
    correct: 2,
    explanation: "As per DA-262 notes: Machine languages are referred as the first generation languages."
  },
  {
    id: "d262x_078",
    subject: "da-262",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "How many categories of software are there according to DA-262 notes?",
    options: ["Three", "Four", "Five", "Six"],
    correct: 2,
    explanation: "As per DA-262 notes: There are five categories of software: Operating System, Translators, Utility programs, Application programs, and General purpose programs."
  },
  {
    id: "d262x_079",
    subject: "da-262",
    lecture: "lecture-12",
    lectureNo: 12,
    question: "The Taskbar in Windows has the START menu on the:",
    options: ["Right side", "Top", "Left side", "Center"],
    correct: 2,
    explanation: "As per DA-262 notes: Taskbar has the START menu on the left and the Notification area on the right."
  },
  {
    id: "d262x_080",
    subject: "da-262",
    lecture: "lecture-12",
    lectureNo: 12,
    question: "My Documents in Windows is:",
    options: ["An internet browser", "The default storage location for files created in Windows", "The recycle bin", "The control panel"],
    correct: 1,
    explanation: "As per DA-262 notes: My Documents is the default storage location for the files created in Windows."
  },
  {
    id: "d262x_081",
    subject: "da-262",
    lecture: "lecture-13",
    lectureNo: 13,
    question: "Network Neighborhood in Windows displays:",
    options: ["Local file system", "All computers connected in network with our computer", "Internet websites", "Shared printers only"],
    correct: 1,
    explanation: "As per DA-262 notes: Network Neighborhood is an application which displays all computers connected in network with our computer."
  },
  {
    id: "d262x_082",
    subject: "da-262",
    lecture: "lecture-15",
    lectureNo: 15,
    question: "The Status bar in MS Word displays:",
    options: ["Formatting options", "Page number, section number, line number, column number etc.", "File save options", "Internet connection status"],
    correct: 1,
    explanation: "As per DA-262 notes: Status bar displays page number, section number, total pages, line number, column number etc."
  },
  {
    id: "d262x_083",
    subject: "da-262",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "An Interpreter translates programs:",
    options: ["The whole program at once", "One statement at a time and executes if error-free", "Only arithmetic statements", "Only after compilation"],
    correct: 1,
    explanation: "As per DA-262 notes: An interpreter translates one statement at a time and if error-free, executes. This continues till the last statement."
  },
  {
    id: "d262x_084",
    subject: "da-262",
    lecture: "lecture-14",
    lectureNo: 14,
    question: "Text formatting in word processing includes all EXCEPT:",
    options: ["Setting left and right margins", "Line spacing", "Selecting font specifications", "Creating computer viruses"],
    correct: 3,
    explanation: "As per DA-262 notes: Text formatting includes setting margins, paragraph settings, line spacing, font specifications, footnotes etc."
  },
  {
    id: "d262x_085",
    subject: "da-262",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Optical Barcode Recognition (OBCR) is used in:",
    options: ["Banking cheque processing", "Supermarkets and book shops", "Medical scanning", "Weather forecasting"],
    correct: 1,
    explanation: "As per DA-262 notes: OBCR - barcode readers read bar codes printed on product containers. Used in supermarkets, book shops etc."
  },
  {
    id: "d262x_086",
    subject: "da-262",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Data is best described as:",
    options: ["Processed information in organized form", "Collection of raw facts, figures and symbols", "Set of computer instructions", "Result of calculations"],
    correct: 1,
    explanation: "As per DA-262 notes: Data is the collection of raw facts, figures and symbols."
  },
  {
    id: "d262x_087",
    subject: "da-262",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Information is best described as:",
    options: ["Raw data", "Data that is processed and presented in an organized manner", "A computer program", "Binary code"],
    correct: 1,
    explanation: "As per DA-262 notes: Information is data that is processed and presented in an organized manner."
  },
  {
    id: "d262x_088",
    subject: "da-262",
    lecture: "lecture-5",
    lectureNo: 5,
    question: "Assembly Languages use:",
    options: ["Binary codes only", "Mnemonic codes instead of numeric codes", "English-like syntax", "Machine-independent codes"],
    correct: 1,
    explanation: "As per DA-262 notes: Assembly language uses mnemonic codes rather than numeric codes. E.g., Add or A is used as symbol for addition."
  },
  {
    id: "d262x_089",
    subject: "da-262",
    lecture: "lecture-7",
    lectureNo: 7,
    question: "File Management function of OS allows:",
    options: ["Managing power supply", "Creating, deleting, moving and searching for files", "Managing internet connections", "Managing hardware components only"],
    correct: 1,
    explanation: "As per DA-262 notes: File management allows all files to be easily changed and modified through text editors or file manipulation routines."
  },
  {
    id: "d262x_090",
    subject: "da-262",
    lecture: "lecture-2",
    lectureNo: 2,
    question: "Scanner is an input device that:",
    options: ["Prints text on paper", "Reads text or illustrations on paper and translates to digital form", "Displays information on screen", "Stores data permanently"],
    correct: 1,
    explanation: "As per DA-262 notes: Scanner reads text or illustrations printed on paper and translates into digital form. Data need not be entered separately."
  },
  {
    id: "d262x_091",
    subject: "da-262",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Assertion (A): Computers reduce paper work and human effort, thereby reducing costs.\\nReason (R): Computers have the property of Cost effectiveness as they perform tasks automatically.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "As per DA-262 notes: Cost effectiveness - computers reduce paper work and human effort, reducing costs. This is the correct explanation."
  },
  {
    id: "d262x_092",
    subject: "da-262",
    lecture: "lecture-4",
    lectureNo: 4,
    question: "Assertion (A): RAM is called volatile memory.\\nReason (R): Data stored in RAM disappears as soon as the power to the computer is switched off.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "As per DA-262 notes: RAM storage of data and instructions is temporary. It disappears from RAM when power is switched off - hence volatile."
  },
  {
    id: "d262x_093",
    subject: "da-262",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Assertion (A): High Level Languages are machine independent.\\nReason (R): A program written in HLL can run on computers of different types without any modifications.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "As per DA-262 notes: HLLs are machine independent - a program written in any HLL can run on computers of different types without modifications."
  },
  {
    id: "d262x_094",
    subject: "da-262",
    lecture: "lecture-12",
    lectureNo: 12,
    question: "Assertion (A): Windows OS provides multitasking capabilities to the PC.\\nReason (R): Windows runs each program or document or application in its own separate window.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 1,
    explanation: "As per DA-262 notes: Both are true. Windows provides multitasking (A) and runs each program in its own window (R), but R explains the naming, not the multitasking capability."
  },
  {
    id: "d262x_095",
    subject: "da-262",
    lecture: "lecture-10",
    lectureNo: 10,
    question: "Assertion (A): Warm Booting is preferable to Cold Booting.\\nReason (R): Warm Booting safeguards the system from sudden power fluctuations resulting from switching ON and OFF.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "As per DA-262 notes: Warm booting (Ctrl+Alt+Del) is preferable to cold booting as it safeguards the system from sudden power fluctuations."
  },
  {
    id: "d262x_096",
    subject: "da-262",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Assertion (A): Ink jet printers are slower than dot-matrix printers.\\nReason (R): Ink jet printers work by spraying ionized ink and operate at only 90 CPS.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "As per DA-262 notes: Ink jet printer is slow at 90 CPS; Dot-matrix is 200/300 to 700 CPS. So ink jet is slower and R correctly explains A."
  },
  {
    id: "d262x_097",
    subject: "da-262",
    lecture: "lecture-8",
    lectureNo: 8,
    question: "Assertion (A): Hybrid computers combine features of both analog and digital computers.\\nReason (R): Hybrid computers can both measure and count, making them useful in specialized applications.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "As per DA-262 notes: Hybrid computers combine features of analog and digital computers - they can both measure (analog) and count (digital)."
  },
  {
    id: "d262x_098",
    subject: "da-262",
    lecture: "lecture-1",
    lectureNo: 1,
    question: "Match the following:\\n     Column-I (Computer Operation)      |  Column-II (Description)       |  Column-III (Example)\\nA.  Input                               |  1.  Receives data from devices    |  i.   Keyboard entry\\nB.  Processing                          |  2.  Executes instructions         |  ii.  CPU calculations\\nC.  Output                              |  3.  Presents results to user      |  iii. Monitor display\\nD.  Storage                             |  4.  Retains data for later use    |  iv.  Hard disk",
    options: ["A-1-i, B-2-ii, C-3-iii, D-4-iv", "A-2-i, B-1-ii, C-4-iii, D-3-iv", "A-3-i, B-4-ii, C-1-iii, D-2-iv", "A-4-i, B-3-ii, C-2-iii, D-1-iv"],
    correct: 0,
    explanation: "As per DA-262 notes: Computer operations - Input receives data (keyboard), Processing executes instructions (CPU), Output presents results (monitor), Storage retains data (hard disk)."
  },
  {
    id: "d262x_099",
    subject: "da-262",
    lecture: "lecture-3",
    lectureNo: 3,
    question: "Match the following printers with their printing modes and speeds:\\n     Column-I (Printer)    |  Column-II (Mode)               |  Column-III (Speed)\\nA.  Dot-matrix           |  1.  Uses laser beam             |  i.   6-12 PPM\\nB.  Ink jet              |  2.  Prints dots via ribbon      |  ii.  200-700 CPS\\nC.  Laser                |  3.  Sprays ionized ink          |  iii. 90 CPS\\nD.  Line printer         |  4.  Prints lines at a time      |  iv.  300-600 LPM",
    options: ["A-2-ii, B-3-iii, C-1-i,  D-4-iv", "A-1-i,  B-2-ii, C-3-iii, D-4-iv", "A-3-iii, B-1-i, C-2-ii, D-4-iv", "A-4-iv, B-3-iii, C-2-ii, D-1-i"],
    correct: 0,
    explanation: "As per DA-262 notes: Dot-matrix prints dots via ribbon (200-700 CPS), Ink jet sprays ink (90 CPS), Laser uses laser beam (6-12 PPM), Line printer prints lines (300-600 LPM)."
  },
  {
    id: "d262x_100",
    subject: "da-262",
    lecture: "lecture-6",
    lectureNo: 6,
    question: "Match the following programming languages with their full forms:\\n     Column-I (Abbreviation)  |  Column-II (Full Form)\\nA.  FORTRAN                  |  1.  Beginner's All purpose Symbolic Instruction Code\\nB.  COBOL                    |  2.  Common Business Oriented Language\\nC.  BASIC                    |  3.  FORmula TRANslation\\nD.  ALGOL                    |  4.  ALGOrithmic Language",
    options: ["A-3, B-2, C-1, D-4", "A-1, B-3, C-2, D-4", "A-2, B-1, C-4, D-3", "A-4, B-3, C-1, D-2"],
    correct: 0,
    explanation: "As per DA-262 notes: FORTRAN=FORmula TRANslation, COBOL=Common Business Oriented Language, BASIC=Beginner's All purpose Symbolic Instruction Code, ALGOL=ALGOrithmic Language."
  },'''

def append_questions(filepath, new_ts_block):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    insert_pos = content.rfind('];')
    new_content = content[:insert_pos] + '\n' + new_ts_block + '\n' + content[insert_pos:]
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f'Appended to {filepath}')

append_questions(f'{base}/da-262-lectures.ts', lecture_questions)

with open(f'{base}/da-262-lectures.ts', encoding='utf-8') as f:
    c = f.read()
print(f'da-262-lectures.ts now has {c.count("correct:")} questions')
