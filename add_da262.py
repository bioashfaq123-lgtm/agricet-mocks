import sys; sys.stdout.reconfigure(encoding='utf-8')
import re, os

new_questions_lec = '''
  {
    id: "d262l_071", subject: "da-262", lecture: "lecture-8", lectureNo: 8,
    question: "The generations of computers and their corresponding components are correctly matched as:",
    options: ["First Generation - Transistors; Second Generation - Vacuum Tubes", "First Generation - Vacuum Tubes; Second Generation - Transistors; Third Generation - ICs", "First Generation - ICs; Second Generation - Vacuum Tubes; Third Generation - Transistors", "First Generation - Microprocessor; Second Generation - Transistors; Third Generation - ICs"],
    correct: 1,
    explanation: "As per DA-262 notes: First Generation (1946-1954): Vacuum tubes; Second Generation (1955-1965): Transistors; Third Generation (1968-1975): Integrated Circuits (IC); Fourth Generation: VLSI; Fifth Generation: ULSI/Microprocessor.",
    difficulty: "medium"
  },
  {
    id: "d262l_072", subject: "da-262", lecture: "lecture-8", lectureNo: 8,
    question: "The standard keyboard used with personal computers has how many keys?",
    options: ["84 keys", "96 keys", "101 keys", "104 keys"],
    correct: 3,
    explanation: "As per DA-262 notes: The most commonly available computer keyboard has 104 keys. It includes alphanumeric keys, punctuation keys, special keys (arrow, control, function keys F1-F12, HOME, END).",
    difficulty: "easy"
  },
  {
    id: "d262l_073", subject: "da-262", lecture: "lecture-8", lectureNo: 8,
    question: "MICR technology is primarily used in which industry?",
    options: ["Supermarkets for barcode scanning", "Banking for processing cheques", "Libraries for cataloguing books", "Railways for ticketing"],
    correct: 1,
    explanation: "As per DA-262 notes: MICR (Magnetic Ink Character Recognition) is a character recognition technology used primarily by the banking industry to facilitate the processing of cheques. It can scan about 2600 cheques per minute.",
    difficulty: "easy"
  },
  {
    id: "d262l_074", subject: "da-262", lecture: "lecture-8", lectureNo: 8,
    question: "RAM (Random Access Memory) is called volatile memory because:",
    options: ["It can read but not write data", "It stores data permanently without power", "Data disappears from RAM as soon as power is switched off", "It requires a battery to maintain data"],
    correct: 2,
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
    options: ["1969", "1974", "1979", "1985"],
    correct: 1,
    explanation: "As per DA-262 notes: Intel 8080 was introduced in 1974 with 6000 transistors and 2 MHz clock speed.",
    difficulty: "medium"
  },
  {
    id: "d262l_077", subject: "da-262", lecture: "lecture-9", lectureNo: 9,
    question: "The AUTOEXEC.BAT file in DOS is special because:",
    options: ["It cannot be deleted or modified", "It is automatically executed when the computer is switched on or during booting", "It stores all user passwords", "It contains antivirus programs"],
    correct: 1,
    explanation: "As per DA-262 notes: If a batch file is given the special name AUTOEXEC.BAT, it is automatically executed when the computer is switched on or during booting.",
    difficulty: "medium"
  },
  {
    id: "d262l_078", subject: "da-262", lecture: "lecture-9", lectureNo: 9,
    question: "In Windows, the 'Recycle Bin' is used for:",
    options: ["Storing temporary internet files", "Storing all files and folders deleted from Windows temporarily, which can be restored", "Organizing downloaded files", "Storing system backup files"],
    correct: 1,
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
    options: ["Copies all files to drive A", "Lists all files on drive A", "Organizes disk A into magnetic tracks and sectors readable by DOS", "Renames the drive A label"],
    correct: 2,
    explanation: "As per DA-262 notes: FORMAT a: organizes the disk in drive A into magnetic tracks and sectors that are readable by DOS. Warning: formatting an old disk erases all existing files on it.",
    difficulty: "medium"
  },
  {
    id: "d262l_081", subject: "da-262", lecture: "lecture-10", lectureNo: 10,
    question: "The DOS command 'TREE' displays:",
    options: ["All files with size, date and time", "Directories and sub-directories in a drive without files", "Files in alphabetical order", "Only hidden files"],
    correct: 1,
    explanation: "As per DA-262 notes: TREE displays directories and sub-directories in a drive WITHOUT files. DIR command displays all files with size, date and time, and shows directories with <DIR> symbol.",
    difficulty: "medium"
  },
  {
    id: "d262l_082", subject: "da-262", lecture: "lecture-10", lectureNo: 10,
    question: "Assertion (A): Computer viruses reside in executable files (.COM or .EXE).\\nReason (R): When the PC is switched on, the virus enters RAM through COMMAND.COM and starts destructive work.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "As per DA-262 notes: Viruses reside in executable files (.COM or .EXE). When PC is switched on, virus enters RAM through .COM file and starts destroying data and program files.",
    difficulty: "medium"
  },
  {
    id: "d262l_083", subject: "da-262", lecture: "lecture-10", lectureNo: 10,
    question: "Assertion (A): Windows OS supports file names up to 255 characters long.\\nReason (R): MS-DOS was limited to 8 characters with 3-character extension (8:3 format), which Windows overcame.",
    options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is NOT the correct explanation of A", "A is true but R is false", "A is false but R is true"],
    correct: 0,
    explanation: "As per DA-262 notes: Windows supports long file names up to 255 characters long, unlike DOS which was limited to 8:3 (8 character name + 3 character extension) format.",
    difficulty: "medium"
  },
  {
    id: "d262l_084", subject: "da-262", lecture: "lecture-11", lectureNo: 11,
    question: "Match the following computer generations with their components:\\n     Column-I (Generation)  |  Column-II (Component)    |  Column-III (Years)\\nA.  First Generation      |  1.  Vacuum Tubes         |  i.   1946-1954\\nB.  Second Generation     |  2.  Transistors           |  ii.  1955-1965\\nC.  Third Generation      |  3.  Integrated Circuits   |  iii. 1968-1975\\nD.  Fourth Generation     |  4.  VLSI                  |  iv.  1976-1980",
    options: ["A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-2-i,  B-1-ii,  C-4-iii,  D-3-iv", "A-1-ii, B-2-i,  C-3-iv,  D-4-iii", "A-3-i,  B-4-ii,  C-1-iii,  D-2-iv"],
    correct: 0,
    explanation: "As per DA-262 notes: First Gen (1946-1954) - Vacuum tubes; Second Gen (1955-1965) - Transistors; Third Gen (1968-1975) - ICs; Fourth Gen (1976-1980) - VLSI; Fifth Gen (1980-today) - ULSI/Microprocessor.",
    difficulty: "medium"
  },
  {
    id: "d262l_085", subject: "da-262", lecture: "lecture-11", lectureNo: 11,
    question: "Match the following types of printers with their printing speeds:\\n     Column-I (Printer type)  |  Column-II (Speed)     |  Column-III (Mechanism)\\nA.  Dot Matrix printer     |  1.  200-700 CPS       |  i.   24-pin or 9-pin through ribbon\\nB.  Ink Jet printer        |  2.  Slow, 90 CPS      |  ii.  Sprays ionized ink\\nC.  Laser printer          |  3.  6-12 PPM          |  iii. Uses laser beam\\nD.  Line printer           |  4.  300-600 LPM       |  iv.  Prints lines at a time",
    options: ["A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-2-ii, B-1-i,  C-4-iv,  D-3-iii", "A-1-iii, B-2-i, C-3-ii,  D-4-iv", "A-3-iii, B-1-i, C-2-ii,  D-4-iv"],
    correct: 0,
    explanation: "As per DA-262 notes: Dot matrix: 200-700 CPS (24-pin/9-pin through ribbon); Ink jet: slow 90 CPS (sprays ionized ink); Laser: 6-12 PPM (laser beam); Line printer: 300-600 LPM (prints lines at a time).",
    difficulty: "medium"
  },
  {
    id: "d262l_086", subject: "da-262", lecture: "lecture-12", lectureNo: 12,
    question: "Match the following memory units and their storage capacities:\\n     Column-I (Unit)   |  Column-II (Equivalent)       |  Column-III (Abbreviation)\\nA.  8 bits             |  1.  1 Byte                   |  i.   B\\nB.  1024 Bytes         |  2.  1 Kilobyte               |  ii.  KB\\nC.  1024 KB            |  3.  1 Megabyte               |  iii. MB\\nD.  1024 MB            |  4.  1 Gigabyte               |  iv.  GB",
    options: ["A-1-i,  B-2-ii,  C-3-iii,  D-4-iv", "A-2-i,  B-1-ii,  C-4-iii,  D-3-iv", "A-1-iii, B-2-ii, C-3-i,  D-4-iv", "A-4-i,  B-3-ii,  C-2-iii,  D-1-iv"],
    correct: 0,
    explanation: "As per DA-262 notes: 8 bits = 1 Byte; 1024 Bytes = 1 KB; 1024 KB = 1 MB; 1024 MB = 1 GB.",
    difficulty: "easy"
  },
  {
    id: "d262l_087", subject: "da-262", lecture: "lecture-12", lectureNo: 12,
    question: "The Windows Explorer is divided into two panes. What does the left pane display?",
    options: ["The contents of selected files", "The list of drives and folders on the computer", "The recently opened documents", "The control panel settings"],
    correct: 1,
    explanation: "As per DA-262 notes: Windows Explorer is divided into 2 panes. The left pane displays the list of drives and folders on the computer. The right pane displays the contents of the selected drive or folder.",
    difficulty: "easy"
  },
  {
    id: "d262l_088", subject: "da-262", lecture: "lecture-13", lectureNo: 13,
    question: "FORTRAN stands for:",
    options: ["Formal Translation", "Formula Translation", "Forward Transfer", "Function Translation"],
    correct: 1,
    explanation: "As per DA-262 notes: FORTRAN stands for FORmula TRANslation. Other programming languages: COBOL (Common Business Oriented Language), BASIC (Beginner's All purpose Symbolic Instruction Code), ALGOL (ALGOrithmic Language).",
    difficulty: "easy"
  },
  {
    id: "d262l_089", subject: "da-262", lecture: "lecture-13", lectureNo: 13,
    question: "The key difference between a Compiler and an Interpreter is:",
    options: ["Compiler works only with BASIC; Interpreter works with all languages", "Compiler translates the whole program before execution; Interpreter translates one statement at a time", "Compiler is faster; Interpreter is slower because it compiles twice", "There is no difference; both do the same work"],
    correct: 1,
    explanation: "As per DA-262 notes: A compiler translates the whole program before execution and produces a list of all errors at the end. An interpreter translates one statement at a time and executes it immediately if error-free.",
    difficulty: "medium"
  },
  {
    id: "d262l_090", subject: "da-262", lecture: "lecture-13", lectureNo: 13,
    question: "DVD stands for:",
    options: ["Digital Video Display", "Digital Versatile Disc", "Data Video Drive", "Direct Video Disk"],
    correct: 1,
    explanation: "As per DA-262 notes: DVD stands for Digital Versatile Disc. Storage capacity is at least 4.7 GB, with DVDs storing up to 17 GB available. Used for large multimedia presentations and movies.",
    difficulty: "easy"
  },
  {
    id: "d262l_091", subject: "da-262", lecture: "lecture-14", lectureNo: 14,
    question: "Which type of computer operates by 'measuring' instead of 'counting'?",
    options: ["Digital computers", "Hybrid computers", "Analog computers", "Super computers"],
    correct: 2,
    explanation: "As per DA-262 notes: Analog computers operate by 'measuring' instead of 'counting'. The name is derived from Greek word 'analog' meaning similarity. They are powerful tools for solving differential equations.",
    difficulty: "medium"
  },
  {
    id: "d262l_092", subject: "da-262", lecture: "lecture-14", lectureNo: 14,
    question: "India's indigenous super computer was developed under the name:",
    options: ["CRAY", "PARAM", "TITAN", "JAGUAR"],
    correct: 1,
    explanation: "As per DA-262 notes: The first super computer was developed in USA by CRAY computers. In India, the indigenous super computer was developed under the name PARAM.",
    difficulty: "easy"
  },
  {
    id: "d262l_093", subject: "da-262", lecture: "lecture-15", lectureNo: 15,
    question: "The DOS command 'REN' is used to:",
    options: ["Remove a directory", "Rename an old file with another name", "Run an executable file", "Restore deleted files"],
    correct: 1,
    explanation: "As per DA-262 notes: The REN command is used to rename the old file with another name. Example: C:\\> REN MATHS.TXT RESULT.TXT renames MATHS.TXT to RESULT.TXT.",
    difficulty: "easy"
  },
  {
    id: "d262l_094", subject: "da-262", lecture: "lecture-15", lectureNo: 15,
    question: "ASCII stands for:",
    options: ["Advanced Standard Code for Information Interchange", "American Standard Code for Information Interchange", "Automatic System Code for Integrated Information", "Applied Standard Code for International Interchange"],
    correct: 1,
    explanation: "As per DA-262 notes: ASCII stands for American Standard Code for Information Interchange. In ASCII, A=65, Z=90, a=97, z=121. These codes convert alphabets to digital and binary form.",
    difficulty: "easy"
  },
  {
    id: "d262l_095", subject: "da-262", lecture: "lecture-15", lectureNo: 15,
    question: "The Windows feature 'Object Linking and Embedding (OLE)' allows:",
    options: ["Creating hyperlinks to websites", "Pasting a portion of one document into another with advanced document linking", "Embedding antivirus protection", "Linking hardware components to the OS"],
    correct: 1,
    explanation: "As per DA-262 notes: Windows provides advanced document linking features called Dynamic Data Exchange (DDE) and Object Linking and Embedding (OLE), which allow pasting portions of one document into another.",
    difficulty: "medium"
  },
  {
    id: "d262l_096", subject: "da-262", lecture: "lecture-16", lectureNo: 16,
    question: "MS-DOS was developed by Bill Gates at what age?",
    options: ["14 years", "17 years", "19 years", "21 years"],
    correct: 2,
    explanation: "As per DA-262 notes: MS-DOS (Disk Operating System) was developed as early as 1980 by Bill Gates at the age of 19. It is suited for personal computers and is a single user, single task operating system.",
    difficulty: "medium"
  },
  {
    id: "d262l_097", subject: "da-262", lecture: "lecture-16", lectureNo: 16,
    question: "In DOS, the command 'DIR/P' is used for:",
    options: ["Displaying files in parallel/side-by-side format", "Printing the directory listing", "Pausing the listing whenever the screen is full", "Displaying files sorted alphabetically"],
    correct: 2,
    explanation: "As per DA-262 notes: DIR/P pauses the listing of the directory whenever the screen is full. The next screen load of files can be displayed by pressing any key. DIR/W displays files in a five-column format.",
    difficulty: "medium"
  },
  {
    id: "d262l_098", subject: "da-262", lecture: "lecture-16", lectureNo: 16,
    question: "BIOS stands for:",
    options: ["Binary Input Output System", "Basic Input Output System", "Basic Integrated Operating System", "Binary Integrated Output System"],
    correct: 1,
    explanation: "As per DA-262 notes: BIOS stands for Basic Input Output System. It is a software residing on ROM chip that carries out the booting of the computer. When PC is switched on, BIOS searches for the operating system.",
    difficulty: "easy"
  },
  {
    id: "d262l_099", subject: "da-262", lecture: "lecture-16", lectureNo: 16,
    question: "Which of the following is NOT a General Purpose data analysis software package?",
    options: ["SPSS (Statistical Package for Social Science)", "MSTAT", "GENSTAT", "WORDSTAR"],
    correct: 3,
    explanation: "As per DA-262 notes: SPSS, MSTAT, MICROSTAT, GENSTAT, SAS are Data Analysis packages. WORDSTAR is a Word Processing package along with WORD PERFECT, MS-Word, etc.",
    difficulty: "medium"
  },
  {
    id: "d262l_100", subject: "da-262", lecture: "lecture-16", lectureNo: 16,
    question: "The Windows feature 'Taskbar' is characterized by:",
    options: ["A vertical bar on the left side of the screen", "A horizontal bar at the bottom of screen with START menu on left and Notification area on right", "A floating toolbar that can be moved anywhere", "A toolbar that appears only when the mouse hovers over it"],
    correct: 1,
    explanation: "As per DA-262 notes: Taskbar is the rectangular bar that runs horizontally across the bottom of the screen. It has the START menu on the left and the Notification area on the right. All open applications are shown on the Taskbar.",
    difficulty: "easy"
  },
'''

# Now create the combined da-262.ts file based on da-201.ts structure
base_path = r'C:\Users\bioas\Agricet Mock Test Series\src\data\questions'

# Read da-201.ts to understand the structure
with open(os.path.join(base_path, 'da-201.ts'), encoding='utf-8') as f:
    template = f.read()

# Read all questions from lectures file
with open(os.path.join(base_path, 'da-262-lectures.ts'), encoding='utf-8') as f:
    lec_content = f.read()

# Extract all question objects
questions = re.findall(r'\{[^{}]*id:\s*"d262l_\d+"[^{}]*\}', lec_content, re.DOTALL)
print(f"Found {len(questions)} lecture questions")

# Build combined file from all lecture questions + new ones
# But first append to lectures
def append_questions(filepath, new_ts_block):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    insert_pos = content.rfind('];')
    new_content = content[:insert_pos] + '\n' + new_ts_block + '\n' + content[insert_pos:]
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f'Appended to {filepath}')

append_questions(os.path.join(base_path, 'da-262-lectures.ts'), new_questions_lec)
print("Lectures updated")

# Now create da-262.ts with 100 questions from lectures (d262l_ -> d262_)
with open(os.path.join(base_path, 'da-262-lectures.ts'), encoding='utf-8') as f:
    lec_content = f.read()

# Get all question blocks
all_q = re.findall(r'(\{[^{}]*id:\s*"d262l_\d+"[^{}]*\})', lec_content, re.DOTALL)
print(f"Total lecture questions after append: {len(all_q)}")

# Take first 100 and create combined file with d262_ IDs
combined_questions = []
for i, q in enumerate(all_q[:100], 1):
    # Replace id format d262l_XXX -> d262_XXX
    new_q = re.sub(r'id:\s*"d262l_(\d+)"', f'id: "d262_{i:03d}"', q)
    # Remove difficulty field for combined file
    new_q = re.sub(r',\s*\n\s*difficulty:\s*"[^"]*"', '', new_q)
    # Remove lecture and lectureNo fields
    new_q = re.sub(r',?\s*\n?\s*lecture:\s*"[^"]*"', '', new_q)
    new_q = re.sub(r',?\s*\n?\s*lectureNo:\s*\d+', '', new_q)
    combined_questions.append(new_q)

# Create the new file
header = '''import { Question } from '../types';

export const da262Questions: Question[] = [
'''

questions_block = ',\n'.join(combined_questions)
footer = '\n];\n'

combined_content = header + questions_block + footer

with open(os.path.join(base_path, 'da-262.ts'), 'w', encoding='utf-8') as f:
    f.write(combined_content)
print(f"Created da-262.ts with {len(combined_questions)} questions")
