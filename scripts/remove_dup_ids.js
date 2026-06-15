/**
 * Removes specific question IDs from question files (for deduplication).
 * Each ID to remove is the later/duplicate entry.
 */
const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "../src/data/questions");

function removeById(file, id) {
  const content = fs.readFileSync(file, "utf8");
  const lines = content.split("\n");
  const idPattern = `id: "${id}"`;
  const idx = lines.findIndex(l => l.includes(idPattern));
  if (idx === -1) { console.log(`  NOT FOUND: ${id} in ${file}`); return; }

  // Find start of this question object (look back for '{')
  let start = idx;
  for (let k = idx - 1; k >= Math.max(0, idx - 3); k--) {
    if (lines[k].trim() === "{") { start = k; break; }
  }

  // Find end of this question object (look forward for '},')
  let end = idx;
  let depth = 0;
  for (let k = start; k < Math.min(lines.length, start + 30); k++) {
    for (const ch of lines[k]) {
      if (ch === "{") depth++;
      if (ch === "}") depth--;
    }
    if (depth === 0) { end = k; break; }
  }

  const removed = lines.splice(start, end - start + 1);
  fs.writeFileSync(file, lines.join("\n"), "utf8");
  console.log(`  Removed [${id}] (lines ${start + 1}-${end + 1}) from ${path.basename(file)}`);
}

// da-282.ts duplicates (same question text as earlier ones, different IDs)
const da282File = path.join(dir, "da-282.ts");
console.log("=== da-282.ts ===");
for (const id of ["d282_031", "d282_036", "d282_046", "d282_058",
                   "d282_104", "d282_105", "d282_108", "d282_118",
                   "d282_148", "d282_183"]) {
  removeById(da282File, id);
}

// da-241.ts
console.log("\n=== da-241.ts ===");
removeById(path.join(dir, "da-241.ts"), "d241_036");

// da-281-lectures.ts
console.log("\n=== da-281-lectures.ts ===");
removeById(path.join(dir, "da-281-lectures.ts"), "d281l_167");

// da-282-lectures.ts
console.log("\n=== da-282-lectures.ts ===");
removeById(path.join(dir, "da-282-lectures.ts"), "d282l_168");

// da-171.ts
console.log("\n=== da-171.ts ===");
removeById(path.join(dir, "da-171.ts"), "d171x_038");

// da-132.ts
console.log("\n=== da-132.ts ===");
removeById(path.join(dir, "da-132.ts"), "d132x_010");

// da-262 duplicates
console.log("\n=== da-262-lectures.ts ===");
removeById(path.join(dir, "da-262-lectures.ts"), "d262l_098");
removeById(path.join(dir, "da-262-lectures.ts"), "d262x_039");

console.log("\n=== da-262.ts ===");
removeById(path.join(dir, "da-262.ts"), "d262_098");
removeById(path.join(dir, "da-262.ts"), "d262c_039");

// da-201.ts: d201x_053 duplicates d201_022
console.log("\n=== da-201.ts ===");
removeById(path.join(dir, "da-201.ts"), "d201x_053");

// da-101 duplicates
console.log("\n=== da-101-lectures.ts ===");
removeById(path.join(dir, "da-101-lectures.ts"), "d101x_028");
removeById(path.join(dir, "da-101-lectures.ts"), "d101x_046");

console.log("\n=== da-101.ts ===");
removeById(path.join(dir, "da-101.ts"), "d101x_005");
removeById(path.join(dir, "da-101.ts"), "d101x_007");

// da-102.ts duplicates
console.log("\n=== da-102.ts ===");
removeById(path.join(dir, "da-102.ts"), "d102x_014");
removeById(path.join(dir, "da-102.ts"), "d102x_022");
removeById(path.join(dir, "da-102.ts"), "d102x_034");

// da-111.ts duplicates
console.log("\n=== da-111.ts ===");
removeById(path.join(dir, "da-111.ts"), "d111x_001");
removeById(path.join(dir, "da-111.ts"), "d111x_002");
removeById(path.join(dir, "da-111.ts"), "d111x_029");

console.log("\nDone.");
