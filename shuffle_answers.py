import re, random, sys
sys.stdout.reconfigure(encoding='utf-8')

def shuffle_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    pattern = re.compile(r'(options:\s*\[)(.*?)(\],\s*\n\s*correct:\s*)(\d)', re.DOTALL)
    def replacer(m):
        opts = re.findall(r'"((?:[^"\\]|\\.)*)"', m.group(2))
        if len(opts) != 4: return m.group(0)
        correct_text = opts[int(m.group(4))]
        rng = random.Random(abs(hash(m.group(2))) % (2**31))
        shuffled = opts[:]
        rng.shuffle(shuffled)
        new_correct = shuffled.index(correct_text)
        new_opts = ', '.join('"' + o + '"' for o in shuffled)
        return m.group(1) + new_opts + m.group(3) + str(new_correct)
    new_content = pattern.sub(replacer, content)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    counts = {0:0, 1:0, 2:0, 3:0}
    for m in pattern.finditer(open(filepath, encoding='utf-8').read()):
        idx = int(m.group(4))
        counts[idx] = counts.get(idx, 0) + 1
    print(f'Shuffled {filepath}')
    print(f'  A:{counts[0]} B:{counts[1]} C:{counts[2]} D:{counts[3]}')

if len(sys.argv) > 1:
    for fp in sys.argv[1:]:
        shuffle_file(fp)
else:
    print("Usage: python shuffle_answers.py <filepath1> [filepath2] ...")
