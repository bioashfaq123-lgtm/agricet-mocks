"""
Fix non-standard AR option texts in da-291.ts.
The correct answer index is already right - only distractor text needs fixing.
"""
import sys, re
sys.stdout.reconfigure(encoding='utf-8')

fpath = r"C:\Users\bioas\Agricet Mock Test Series\src\data\questions\da-291.ts"
with open(fpath, encoding='utf-8') as f:
    content = f.read()

# Fix d291_116: replace 'Both A and R are false' with standard option
# Options: ["A is true but R is false", "A is false but R is true", "Both A and R are false", "Both A and R are true and R is the correct explanation of A"]
# Need: replace "Both A and R are false" -> "Both A and R are true but R is not the correct explanation of A"
content = content.replace(
    'id: "d291_116", subject: "Agricultural Extension Education",\n    question: "Assertion (A): Lecture is the best extension teaching method to teach new practical skills to farmers.\nReason (R): Method demonstration is described as the best extension teaching method to teach people.",\n    options: ["A is true but R is false", "A is false but R is true", "Both A and R are false", "Both A and R are true and R is the correct explanation of A"],\n    correct: 1,',
    'id: "d291_116", subject: "Agricultural Extension Education",\n    question: "Assertion (A): Lecture is the best extension teaching method to teach new practical skills to farmers.\nReason (R): Method demonstration is described as the best extension teaching method to teach people.",\n    options: ["A is true but R is false", "A is false but R is true", "Both A and R are true but R is not the correct explanation of A", "Both A and R are true and R is the correct explanation of A"],\n    correct: 1,'
)

# Fix d291_138, d291_155, d291_160, d291_178, d291_193:
# Options: ["Both A and R are false", "A is true but R is false", "Both A and R are true", "A is false but R is true"]
# Replace: "Both A and R are false" -> "Both A and R are true and R is the correct explanation of A"
#          "Both A and R are true" -> "Both A and R are true but R is not the correct explanation of A"
# correct: 1 (A is true but R is false) - stays correct

bad_opts = '"Both A and R are false", "A is true but R is false", "Both A and R are true", "A is false but R is true"'
good_opts = '"Both A and R are true and R is the correct explanation of A", "A is true but R is false", "Both A and R are true but R is not the correct explanation of A", "A is false but R is true"'

count = content.count(bad_opts)
content = content.replace(bad_opts, good_opts)

with open(fpath, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Fixed d291_116: replaced 'Both A and R are false' with standard option")
print(f"Fixed {count} questions with ['Both A and R are false', ..., 'Both A and R are true', ...] pattern")
print("Done!")
