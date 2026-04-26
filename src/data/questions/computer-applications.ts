import { Question } from "@/types";

export const computerApplicationsQuestions: Question[] = [
  {
    id: "ca001",
    subject: "computer-applications",
    question: "A computer is defined as an electronic device that can perform activities involving:",
    options: ["Only mathematical operations", "Mathematical, logical and graphical manipulations", "Only data storage", "Only printing operations"],
    correct: 1,
    explanation: "As per the DA-262 course material, a computer is an electronic device that can perform activities involving Mathematical, Logical and graphical manipulations. It receives data, processes it, and provides output."
  },
  {
    id: "ca002",
    subject: "computer-applications",
    question: "Which of the following is the correct sequence of operations performed by a computer?",
    options: ["Process → Input → Output", "Input → Output → Process", "Input → Process → Output", "Output → Process → Input"],
    correct: 2,
    explanation: "A computer performs operations in this sequence: 1. Receives data and instructions (Input), 2. Processes data as per instructions, 3. Provides result in desired form (Output)."
  },
  {
    id: "ca003",
    subject: "computer-applications",
    question: "What is 'data' in computer terminology?",
    options: ["Processed and organized information", "Collection of raw facts, figures and symbols", "A set of instructions", "Results produced by computer"],
    correct: 1,
    explanation: "Data is the collection of raw facts, figures and symbols. For example, names of students and their marks listed in random order is data. When organized, it becomes information."
  },
  {
    id: "ca004",
    subject: "computer-applications",
    question: "The 'brain' of the computer is the:",
    options: ["Monitor", "Keyboard", "Central Processing Unit (CPU)", "Hard disk"],
    correct: 2,
    explanation: "The CPU (Central Processing Unit) is called the 'brain' of the computer. It reads and executes program instructions and consists of the Memory Unit, ALU, and Control Unit."
  },
  {
    id: "ca005",
    subject: "computer-applications",
    question: "Which unit of CPU performs arithmetic and logical operations?",
    options: ["Control Unit (CU)", "Memory Unit", "Arithmetic Logic Unit (ALU)", "Input Unit"],
    correct: 2,
    explanation: "The Arithmetic Logic Unit (ALU) performs arithmetic operations (addition, subtraction) and logical operations (comparison). It is one of the three main components of the CPU."
  },
  {
    id: "ca006",
    subject: "computer-applications",
    question: "The Control Unit (CU) in a computer:",
    options: ["Stores data permanently", "Interprets program instructions and controls input/output devices", "Performs calculations", "Displays output"],
    correct: 1,
    explanation: "The Control Unit acts as the central nervous system of the computer. It interprets program instructions, ensures correct sequence of execution, and coordinates all input and output devices."
  },
  {
    id: "ca007",
    subject: "computer-applications",
    question: "Which of the following is NOT an input device?",
    options: ["Keyboard", "Mouse", "Scanner", "Monitor"],
    correct: 3,
    explanation: "Monitor is an output device (it displays results). Input devices include Keyboard, Mouse, Scanner, MICR, Web camera, and Microphone. They provide data and instructions to the computer."
  },
  {
    id: "ca008",
    subject: "computer-applications",
    question: "MICR stands for:",
    options: ["Magnetic Ink Character Recognition", "Micro Integrated Circuit Receiver", "Multiple Input Character Register", "Magnetic Input Current Reader"],
    correct: 0,
    explanation: "MICR (Magnetic Ink Character Recognition) is used primarily by banking industry to process cheques. Characters are printed in special magnetic ink and can be read at about 2600 cheques per minute."
  },
  {
    id: "ca009",
    subject: "computer-applications",
    question: "VDU stands for:",
    options: ["Variable Data Unit", "Visual Display Unit", "Video Drive Utility", "Virtual Device Uploader"],
    correct: 1,
    explanation: "VDU stands for Visual Display Unit, which is another name for the monitor/terminal. It displays the output from the computer and can be monochrome (black & white) or colour."
  },
  {
    id: "ca010",
    subject: "computer-applications",
    question: "The basic unit of memory in a computer is:",
    options: ["Byte", "Kilobyte", "Bit (binary digit)", "Megabyte"],
    correct: 2,
    explanation: "The basic unit of memory is a Bit (binary digit), which is either 0 or 1. 8 bits = 1 Byte. The computer stores characters in binary (0,1) mechanism."
  },
  {
    id: "ca011",
    subject: "computer-applications",
    question: "How many bytes make one Kilobyte (KB)?",
    options: ["100 bytes", "512 bytes", "1000 bytes", "1024 bytes"],
    correct: 3,
    explanation: "1 Kilobyte = 2¹⁰ = 1024 bytes. Similarly, 1024 KB = 1 MB, and 1024 MB = 1 GB. The computer memory hierarchy uses powers of 2."
  },
  {
    id: "ca012",
    subject: "computer-applications",
    question: "ROM (Read Only Memory) is:",
    options: ["Volatile memory that loses data when power is off", "Non-volatile memory that retains data without power supply", "Used for temporary data storage", "An input device"],
    correct: 1,
    explanation: "ROM (Read Only Memory) is non-volatile memory — it retains data even without power. It stores basic input-output instructions (BIOS) put by the manufacturer. Data in ROM is permanent and cannot be easily changed."
  },
  {
    id: "ca013",
    subject: "computer-applications",
    question: "RAM (Random Access Memory) is also called:",
    options: ["Secondary memory", "Permanent memory", "Primary storage or main memory", "Read-only memory"],
    correct: 2,
    explanation: "RAM is called Primary storage or main memory. It temporarily stores data, program instructions, and results during processing. It is volatile — loses data when power is switched off."
  },
  {
    id: "ca014",
    subject: "computer-applications",
    question: "What is the storage capacity of a standard CD-ROM?",
    options: ["100 MB", "270 MB", "650-700 MB", "4.7 GB"],
    correct: 2,
    explanation: "The storage capacity of most CD-ROMs is approximately 650 MB or 700 MB. DVD has larger capacity starting from 4.7 GB. CD-ROM stands for Compact Disk-Read Only Memory."
  },
  {
    id: "ca015",
    subject: "computer-applications",
    question: "DVD stands for:",
    options: ["Digital Video Disc only", "Digital Versatile Disc", "Data Viewing Device", "Disk Video Display"],
    correct: 1,
    explanation: "DVD stands for Digital Versatile Disc. It is similar to CD-ROM but stores more data — minimum 4.7 GB up to 17 GB. Used for large multimedia presentations, movies with high quality sound and graphics."
  },
  {
    id: "ca016",
    subject: "computer-applications",
    question: "A pen drive is also known as:",
    options: ["Hard disk", "CD-ROM", "Flash drive", "Floppy disk"],
    correct: 2,
    explanation: "A pen drive is a Flash drive — a small, portable device used to store, access and transfer data. Due to its small size, it is commonly called pen drive. It uses flash memory technology."
  },
  {
    id: "ca017",
    subject: "computer-applications",
    question: "Software is defined as:",
    options: ["Physical components of computer", "Program or set of instructions that causes hardware to function in a desired way", "Only the operating system", "Input and output devices"],
    correct: 1,
    explanation: "Software is a program or set of instructions that causes the Hardware to function in a desired way. Without software, hardware is a dead machine — like a TV without TV studio programs."
  },
  {
    id: "ca018",
    subject: "computer-applications",
    question: "The Operating System (OS) acts as:",
    options: ["Only a word processor", "Interface between hardware and user programs, managing computer resources", "Only an antivirus program", "A spreadsheet application"],
    correct: 1,
    explanation: "The Operating System is a bridge (interface) between the user and the hardware. It manages processor, memory, input/output operations, and file management to facilitate program execution."
  },
  {
    id: "ca019",
    subject: "computer-applications",
    question: "GUI stands for:",
    options: ["General User Interface", "Graphical User Interface", "Global Utility Input", "General Utility Index"],
    correct: 1,
    explanation: "GUI stands for Graphical User Interface. Windows OS converts the character-based interface of DOS into a GUI with pictures, symbols, and words controlled by the mouse."
  },
  {
    id: "ca020",
    subject: "computer-applications",
    question: "Which of the following is an example of system software?",
    options: ["MS Word", "MS Excel", "Operating System (Windows/DOS)", "Tally"],
    correct: 2,
    explanation: "Operating Systems (Windows, DOS, Linux) are system software. MS Word, MS Excel are application software. The OS manages hardware resources and provides platform for application software."
  },
  {
    id: "ca021",
    subject: "computer-applications",
    question: "MS-DOS is a:",
    options: ["Multi-user, multi-programming OS", "Single user, single programming environment", "Graphical user interface", "Internet browser"],
    correct: 1,
    explanation: "MS-DOS (Microsoft Disk Operating System) is a single user, single programming environment. It uses command-line interface (CUI). It organizes and manages information stored on disks."
  },
  {
    id: "ca022",
    subject: "computer-applications",
    question: "In DOS, the command to display the list of files in a directory is:",
    options: ["COPY", "FORMAT", "DIR", "DEL"],
    correct: 2,
    explanation: "DIR command in DOS displays the directory of file names, file size, date and time of creation. DIR/P pauses after each screen; DIR/W displays in five-column format."
  },
  {
    id: "ca023",
    subject: "computer-applications",
    question: "The FORMAT command in DOS is used to:",
    options: ["Display file directory", "Copy files", "Prepare a disk to receive data by organizing it into tracks and sectors", "Delete files"],
    correct: 2,
    explanation: "The FORMAT command prepares a disk (floppy or hard disk) to receive data by organizing it into tracks and sectors. It also checks for defective sectors. It erases all existing data."
  },
  {
    id: "ca024",
    subject: "computer-applications",
    question: "Booting a computer means:",
    options: ["Shutting down the computer", "Activating the computer by loading the operating system into memory", "Formatting the hard disk", "Installing software"],
    correct: 1,
    explanation: "Booting means activating the computer for working. When switched on, the BIOS transfers the OS from disk to primary memory (RAM). After booting, the computer is ready to accept commands."
  },
  {
    id: "ca025",
    subject: "computer-applications",
    question: "BIOS stands for:",
    options: ["Basic Input Output System", "Binary Integrated Operating Software", "Basic Internal Operating System", "Boot Input Output Standard"],
    correct: 0,
    explanation: "BIOS (Basic Input Output System) is software stored in ROM chip that initiates the booting process. It searches for the operating system on disk and loads it into RAM when computer is switched on."
  },
  {
    id: "ca026",
    subject: "computer-applications",
    question: "In Windows, the Recycle Bin is used to:",
    options: ["Store important files permanently", "Temporarily store deleted files which can be restored if needed", "Speed up the computer", "Clean up the hard disk"],
    correct: 1,
    explanation: "The Recycle Bin is a folder that temporarily stores all files and folders deleted from Windows. Deleted files can be restored from Recycle Bin if needed, or permanently deleted to free space."
  },
  {
    id: "ca027",
    subject: "computer-applications",
    question: "The keyboard shortcut to COPY selected text/file in Windows is:",
    options: ["Ctrl + X", "Ctrl + V", "Ctrl + C", "Ctrl + Z"],
    correct: 2,
    explanation: "Ctrl + C copies selected text/file to clipboard. Ctrl + X cuts (moves) it. Ctrl + V pastes from clipboard. Ctrl + Z is Undo. These are standard Windows shortcut keys."
  },
  {
    id: "ca028",
    subject: "computer-applications",
    question: "MS Word is used for:",
    options: ["Creating spreadsheets", "Database management", "Word processing — creating, editing, formatting and printing documents", "Creating presentations"],
    correct: 2,
    explanation: "MS Word is a word processor used for creating, editing, formatting, and printing documents. The extension of MS Word files is .doc or .docx. It allows inserting pictures, tables, and charts."
  },
  {
    id: "ca029",
    subject: "computer-applications",
    question: "The file extension of MS Word documents is:",
    options: [".xls", ".ppt", ".doc", ".mdb"],
    correct: 2,
    explanation: "MS Word documents have .doc (or .docx in newer versions) extension. .xls is MS Excel, .ppt is PowerPoint, .mdb is MS Access database file."
  },
  {
    id: "ca030",
    subject: "computer-applications",
    question: "In MS Word, Spell Check facility is available under which menu?",
    options: ["File menu", "Format menu", "Tools menu", "Insert menu"],
    correct: 2,
    explanation: "Spell Check (spelling and grammar) is available under the Tools menu in MS Word. It checks spelling and grammar of the document and suggests corrections."
  },
  {
    id: "ca031",
    subject: "computer-applications",
    question: "MS Excel is an electronic:",
    options: ["Word processor", "Spreadsheet application for data analysis and calculation", "Presentation software", "Database management system"],
    correct: 1,
    explanation: "MS Excel is an electronic spreadsheet application used for creating, editing, and saving spreadsheets. It is used for data analysis, calculations using formulas, and creating graphs."
  },
  {
    id: "ca032",
    subject: "computer-applications",
    question: "In MS Excel, the SUM function is used to:",
    options: ["Find average", "Add all numbers in a specified range", "Count cells", "Find maximum value"],
    correct: 1,
    explanation: "The SUM function in MS Excel adds all numbers in a specified range. Example: =SUM(A1:A10) adds all values from A1 to A10. AVERAGE calculates mean, COUNT counts cells."
  },
  {
    id: "ca033",
    subject: "computer-applications",
    question: "A computer virus is:",
    options: ["A biological organism", "A set of instructions/program prepared to destroy data and packages", "A hardware malfunction", "A type of printer error"],
    correct: 1,
    explanation: "A computer virus is a set of instructions (program) prepared to destroy data and program packages. Viruses reside in executable files and spread to other programs when those files are executed."
  },
  {
    id: "ca034",
    subject: "computer-applications",
    question: "Which of the following computers is the smallest general purpose processing system?",
    options: ["Mainframe computer", "Super computer", "Mini computer", "Micro computer (Personal Computer)"],
    correct: 3,
    explanation: "Micro computers (also called personal computers or PCs) are the smallest general purpose processing systems. They are self-contained, cheap, and easy to use. Available as PC, PC-XT, and PC-AT."
  },
  {
    id: "ca035",
    subject: "computer-applications",
    question: "ASCII stands for:",
    options: ["American Standard Code for Information Interchange", "Advanced Standard Computer Input Interface", "Automatic Standard Code for Internet Indexing", "American Software Code for Integrated Interface"],
    correct: 0,
    explanation: "ASCII (American Standard Code for Information Interchange) assigns numeric values to characters. A=65, Z=90, a=97. These numbers can be converted to binary form for computer storage."
  },
  {
    id: "ca036",
    subject: "computer-applications",
    question: "Windows Explorer is used to:",
    options: ["Browse the internet", "View and manage files, folders, and drives on your computer", "Play music files", "Send emails"],
    correct: 1,
    explanation: "Windows Explorer provides detailed information about files, folders, and drives. It displays directory structure hierarchically in two panes — left shows drives/folders, right shows contents."
  },
  {
    id: "ca037",
    subject: "computer-applications",
    question: "A computer program is defined as:",
    options: ["Hardware component", "Set of instructions that enables a computer to perform a given task", "Operating system only", "Input data"],
    correct: 1,
    explanation: "A program is a set of instructions that enables a computer to perform a given task. Programs are written in programming languages and must be translated to machine language for execution."
  },
  {
    id: "ca038",
    subject: "computer-applications",
    question: "Which type of computers operate by 'counting'?",
    options: ["Analog computers", "Hybrid computers", "Digital computers", "Super computers"],
    correct: 2,
    explanation: "Digital computers operate by 'counting' — all quantities are expressed as discrete digits or numbers in binary (0 or 1). Analog computers operate by 'measuring'. Hybrid computers combine both."
  },
  {
    id: "ca039",
    subject: "computer-applications",
    question: "The Clipboard in Windows is:",
    options: ["A permanent storage location", "A temporary storage location where copied or cut information is stored", "The desktop background", "The taskbar area"],
    correct: 1,
    explanation: "The Clipboard is a temporary storage area where information you copy (Ctrl+C) or cut (Ctrl+X) is stored. The stored information can then be pasted (Ctrl+V) at the desired location."
  },
  {
    id: "ca040",
    subject: "computer-applications",
    question: "The Taskbar in Windows is:",
    options: ["The title bar of a window", "A horizontal bar at the bottom of screen with Start menu on left", "The menu bar of applications", "The scroll bar on right side"],
    correct: 1,
    explanation: "The Taskbar is a rectangular bar that runs horizontally across the bottom of the Windows screen. It has the START menu on the left and the system clock/notification area on the right."
  },
  {
    id: "ca041",
    subject: "computer-applications",
    question: "In MS Excel, to calculate the average of values in cells A1 to A10, you would use:",
    options: ["=SUM(A1:A10)", "=AVERAGE(A1:A10)", "=COUNT(A1:A10)", "=MAX(A1:A10)"],
    correct: 1,
    explanation: "=AVERAGE(A1:A10) calculates the arithmetic mean of values from A1 to A10. SUM adds values, COUNT counts cells with numbers, MAX finds maximum value, MIN finds minimum value."
  },
  {
    id: "ca042",
    subject: "computer-applications",
    question: "Secondary memory (storage) is also referred to as:",
    options: ["Primary storage", "Cache memory", "Auxiliary or backup storage", "Register memory"],
    correct: 2,
    explanation: "Secondary memory is also called auxiliary or backup storage. It stores large volumes of data permanently (hard disk, CD, DVD, pen drive). Data is transferred to primary memory (RAM) when needed for processing."
  },
  {
    id: "ca043",
    subject: "computer-applications",
    question: "Which DOS command is used to make a new directory?",
    options: ["DIR", "CD", "MD", "DEL"],
    correct: 2,
    explanation: "MD (Make Directory) creates a new directory/folder in DOS. CD (Change Directory) is used to navigate between directories. DIR lists files. DEL deletes files."
  },
  {
    id: "ca044",
    subject: "computer-applications",
    question: "SPSS is an example of which type of software?",
    options: ["Operating System", "Word processing software", "Data Analysis (Statistical Package for Social Science)", "Web browser"],
    correct: 2,
    explanation: "SPSS (Statistical Package for Social Science) is a data analysis software. Other examples include SAS, MSTAT, GENSTAT. MS-Excel also has data analysis tools for correlation, regression, and significance tests."
  },
  {
    id: "ca045",
    subject: "computer-applications",
    question: "The difference between a Compiler and Interpreter is that:",
    options: ["Compiler is faster at writing programs", "Compiler translates whole program before execution; Interpreter translates one statement at a time", "Interpreter produces machine code; Compiler produces source code", "Both work identically"],
    correct: 1,
    explanation: "A Compiler translates the complete program to machine code before execution and gives a full error list at end. An Interpreter translates and executes one statement at a time, making error correction easier but execution slower."
  },
  {
    id: "ca046",
    subject: "computer-applications",
    question: "Which generation of programming languages uses binary codes (0,1)?",
    options: ["High-level languages (3rd generation)", "Assembly languages (2nd generation)", "Machine languages (1st generation)", "4th generation languages"],
    correct: 2,
    explanation: "Machine Languages (1st generation) use binary codes (0 and 1). They are machine dependent. Assembly Languages (2nd generation) use mnemonic codes. High-level languages (3rd gen) are English-like."
  },
  {
    id: "ca047",
    subject: "computer-applications",
    question: "MS Access is used for:",
    options: ["Word processing", "Spreadsheet calculations", "Database management — creating and managing databases", "Presentations"],
    correct: 2,
    explanation: "MS Access is a database management system (DBMS) used for creating databases, structuring with different types of fields, and using Query facility for accessing information. Extension is .mdb."
  },
  {
    id: "ca048",
    subject: "computer-applications",
    question: "The Internet is best described as:",
    options: ["A single large computer", "A global network of interconnected computers sharing information", "A type of software", "An operating system"],
    correct: 1,
    explanation: "The Internet is a global network of interconnected computers that share information. Internet Explorer is an application used to browse the internet using search engines."
  },
  {
    id: "ca049",
    subject: "computer-applications",
    question: "In a personal computer, the floppy disk drive is typically assigned which drive letter?",
    options: ["C:", "D:", "A:", "E:"],
    correct: 2,
    explanation: "In a PC, the Floppy Disk Drive is assigned drive letter A: (or B: if there are two floppy drives). Hard Disk is C:. Additional drives, CD-ROM etc. get letters D:, E:, F: and so on."
  },
  {
    id: "ca050",
    subject: "computer-applications",
    question: "Which of the following is an advantage of computers mentioned in DA-262 course?",
    options: ["Computers can think creatively", "High speed, accuracy, large storage capacity, automation and diligence", "Computers can replace all human activities", "Computers are inexpensive to manufacture"],
    correct: 1,
    explanation: "Advantages of computers as per course material: High speed (millions of calculations/second), Accuracy, large Storage capacity, Automation (performing complex tasks automatically), and Diligence (no fatigue)."
  },
];
