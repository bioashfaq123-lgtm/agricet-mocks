"""Third pass — targets remaining stubborn files with long topic-specific qualifiers."""
import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')
BASE = r"C:\Users\bioas\Agricet Mock Test Series\src\data\questions"
AR_MARKERS = ["both a and r", "a is true", "a is false", "r is true", "r is false"]
def is_ar(opts): return sum(1 for o in opts if any(m in o.lower() for m in AR_MARKERS)) >= 2
def wc(s): return len(s.split())
def biased(opts, ci):
    cl = wc(opts[ci]); dl = [wc(opts[i]) for i in range(4) if i != ci]; avg = sum(dl)/3
    return cl > avg*1.5 and cl-avg > 3, avg

QUALS = {
    "extension.ts": [
        "according to extension education theory",
        "as per rural development methodology",
        "in the context of agricultural extension",
        "under the community development approach",
        "as defined by extension education science",
    ],
    "farm-machinery.ts": [
        "according to agricultural engineering standards",
        "as per farm machinery operation norms",
        "in the context of mechanized agriculture",
        "under field operational conditions",
        "as per tractor and implement standards",
    ],
    "crop-physiology.ts": [
        "according to plant physiology principles",
        "as per crop science and agronomy",
        "in the context of plant growth studies",
        "under controlled crop growth conditions",
        "as defined in plant science research",
    ],
    "seed-technology.ts": [
        "according to seed certification norms",
        "as per ISTA seed testing standards",
        "in the context of seed quality management",
        "under seed processing plant conditions",
        "as per Seed Act and Rules in India",
    ],
    "english-communication.ts": [
        "according to communication science principles",
        "as per formal English language standards",
        "in the context of academic communication",
        "under formal language learning contexts",
        "as defined in rhetoric and linguistics",
    ],
    "meteorology.ts": [
        "according to standard meteorological practice",
        "as per World Meteorological Organization norms",
        "in the context of crop weather analysis",
        "under standard atmospheric measurement conditions",
        "as per agro-meteorological guidelines",
    ],
    "computer-applications.ts": [
        "according to standard computing principles",
        "as per IT and software documentation",
        "in the context of digital information systems",
        "under standard computer operation protocols",
        "as per modern computing and software norms",
    ],
    "irrigation.ts": [
        "according to irrigation engineering norms",
        "as per water management and distribution rules",
        "in the context of field water application",
        "under command area development standards",
        "as per IS codes for irrigation design",
    ],
}

def fix_line(line, quals):
    om = re.search(r'(options:\s*\[)(.+?)(\])', line)
    cm = re.search(r'correct:\s*(\d+)', line)
    if not om or not cm: return line, False
    ci = int(cm.group(1)); sect = om.group(2)
    opts = re.findall(r'"((?:[^"\\]|\\.)*)"', sect)
    if len(opts) != 4 or not (0 <= ci <= 3): return line, False
    if is_ar(opts): return line, False
    is_b, avg = biased(opts, ci)
    if not is_b: return line, False
    target = max(int(wc(opts[ci]) * 0.65), int(avg) + 5)
    new_opts = list(opts); qc = 0
    for idx in range(4):
        if idx == ci: continue
        if wc(new_opts[idx]) < target:
            q = quals[qc % len(quals)]
            if not new_opts[idx].endswith(q.strip()):
                new_opts[idx] += " " + q; qc += 1
    if new_opts == list(opts): return line, False
    new_line = line
    for old, new in zip(opts, new_opts):
        if old != new:
            nm = re.search(r'(options:\s*\[)(.+?)(\])', new_line)
            if nm:
                s = nm.group(2)
                if '"'+old+'"' in s:
                    ns = s.replace('"'+old+'"', '"'+new+'"', 1)
                    new_line = new_line[:nm.start(2)]+ns+new_line[nm.end(2):]
    return new_line, new_line != line

total = 0
for fname, quals in QUALS.items():
    fpath = os.path.join(BASE, fname)
    if not os.path.exists(fpath): continue
    with open(fpath, encoding='utf-8') as f: lines = f.readlines()
    new_lines = []; fixes = 0
    for line in lines:
        nl, ch = fix_line(line.rstrip('\n'), quals)
        new_lines.append(nl)
        if ch: fixes += 1
    if fixes:
        with open(fpath, 'w', encoding='utf-8') as f: f.write('\n'.join(new_lines))
        print(f"  {fname}: {fixes}")
    total += fixes
print(f"\nThird pass: {total}")
