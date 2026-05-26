"""Show remaining biased questions in stubborn files."""
import sys, os, re
sys.stdout.reconfigure(encoding='utf-8')
BASE = r"C:\Users\bioas\Agricet Mock Test Series\src\data\questions"
AR_MARKERS = ["both a and r", "a is true", "a is false", "r is true", "r is false"]
def is_ar(opts): return sum(1 for o in opts if any(m in o.lower() for m in AR_MARKERS)) >= 2
def wc(s): return len(s.split())
def is_biased(opts, ci):
    cl = wc(opts[ci]); dl = [wc(opts[i]) for i in range(4) if i != ci]; avg = sum(dl)/3
    return cl > avg*1.5 and cl-avg > 3

TARGET_FILES = ["extension.ts","seed-technology.ts","crop-physiology.ts","farm-machinery.ts",
                "english-communication.ts","computer-applications.ts","meteorology.ts"]

for fname in TARGET_FILES:
    fpath = os.path.join(BASE, fname)
    with open(fpath, encoding='utf-8') as f:
        lines = f.readlines()
    print(f"\n{'='*70}\n{fname}\n{'='*70}")
    shown = 0
    for line in lines:
        om = re.search(r'options:\s*\[(.+?)\]', line)
        cm = re.search(r'correct:\s*(\d+)', line)
        qm = re.search(r'question:\s*"((?:[^"\\]|\\.)*)"', line)
        if not om or not cm or not qm: continue
        ci = int(cm.group(1))
        opts = re.findall(r'"((?:[^"\\]|\\.)*)"', om.group(1))
        if len(opts) != 4 or not (0 <= ci <= 3): continue
        if is_ar(opts): continue
        if not is_biased(opts, ci): continue
        print(f"\nQ: {qm.group(1)[:80]}")
        for i, o in enumerate(opts):
            m = "✓" if i == ci else " "
            print(f"  {m}[{i}]({wc(o)}w) {o}")
        shown += 1
        if shown >= 5: break
