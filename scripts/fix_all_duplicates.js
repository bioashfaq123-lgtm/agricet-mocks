/**
 * Comprehensive fix for all duplicate IDs across all question files.
 * For each duplicate: extracts the SECOND occurrence, removes it,
 * and re-inserts it at the end of the file with a new unique ID.
 */
const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "../src/data/questions");

function extractQuestionBlock(content, id, occurrence = 1) {
  let count = 0;
  let searchFrom = 0;
  while (true) {
    const idx = content.indexOf(`id: "${id}"`, searchFrom);
    if (idx === -1) return null;
    count++;
    if (count === occurrence) {
      // Find start of block (look back for '{' at line start)
      let lineStart = content.lastIndexOf("\n", idx) + 1;
      let blockStart = lineStart;
      // Look back a few lines for the opening '{'
      for (let k = 0; k < 5; k++) {
        const prevLine = content.lastIndexOf("\n", blockStart - 2);
        const candidate = content.substring(prevLine + 1, blockStart).trim();
        if (candidate === "{") {
          blockStart = prevLine + 1;
          break;
        }
        blockStart = prevLine + 1;
      }

      // Find end of block: track braces from blockStart
      let depth = 0, blockEnd = -1;
      for (let i = blockStart; i < content.length; i++) {
        if (content[i] === "{") depth++;
        if (content[i] === "}") {
          depth--;
          if (depth === 0) {
            // Include trailing comma if present
            let end = i;
            if (content[end + 1] === ",") end++;
            blockEnd = end;
            break;
          }
        }
      }
      if (blockEnd === -1) return null;
      return { start: blockStart, end: blockEnd, text: content.substring(blockStart, blockEnd + 1) };
    }
    searchFrom = idx + 1;
  }
}

function removeBlock(content, block) {
  // Also remove leading blank line if present
  let removeStart = block.start;
  if (content[removeStart - 1] === "\n" && content[removeStart - 2] === "\n") {
    removeStart--;
  }
  return content.substring(0, removeStart) + content.substring(block.end + 1);
}

function insertAtEnd(content, newBlock) {
  // Find closing bracket of array
  let closeIdx = content.lastIndexOf("] as Question[];");
  if (closeIdx === -1) closeIdx = content.lastIndexOf("];");
  if (closeIdx === -1) return content;

  let prefix = content.substring(0, closeIdx).trimEnd();
  if (prefix.endsWith("}") && !prefix.endsWith("},")) {
    prefix += ",";
  }
  return prefix + "\n" + newBlock + "\n" + content.substring(closeIdx);
}

function renameId(blockText, oldId, newId) {
  return blockText.replace(`id: "${oldId}"`, `id: "${newId}"`);
}

// Process a file: remove 2nd occurrence of each id and re-add with new ID
function fixFile(filename, idRenames) {
  const filepath = path.join(dir, filename);
  if (!fs.existsSync(filepath)) {
    console.log(`  SKIP: ${filename} not found`);
    return 0;
  }
  let content = fs.readFileSync(filepath, "utf8");
  let fixCount = 0;
  const insertBlocks = [];

  for (const [oldId, newId] of idRenames) {
    const block = extractQuestionBlock(content, oldId, 2);
    if (!block) {
      console.log(`  [${oldId}] No second occurrence found in ${filename}`);
      continue;
    }
    // Extract question preview for logging
    const qMatch = block.text.match(/question:\s*"((?:[^"\\]|\\.)*)"/);
    const qPreview = qMatch ? qMatch[1].substring(0, 60) : "?";

    // Save block for re-insertion with new ID
    const newBlock = renameId(block.text, oldId, newId);
    insertBlocks.push(newBlock);

    // Remove from current position
    content = removeBlock(content, block);
    console.log(`  Removed [${oldId}] 2nd occurrence: "${qPreview}"`);
    fixCount++;
  }

  // Insert all blocks at end
  for (const block of insertBlocks) {
    // Find what the new ID is
    const idMatch = block.match(/id:\s*"([^"]+)"/);
    const newId = idMatch ? idMatch[1] : "?";
    content = insertAtEnd(content, block);
    console.log(`  Inserted [${newId}] at end`);
  }

  fs.writeFileSync(filepath, content, "utf8");
  console.log(`  => Saved ${filename}\n`);
  return fixCount;
}

// ============================================================
// da-101.ts and da-101-lectures.ts
// ============================================================
console.log("=== da-101.ts ===");
fixFile("da-101.ts", [
  ["d101x_048", "d101x_104"],
  ["d101x_049", "d101x_105"],
]);

console.log("=== da-101-lectures.ts ===");
fixFile("da-101-lectures.ts", [
  ["d101x_048", "d101x_104"],
  ["d101x_049", "d101x_105"],
]);

// ============================================================
// da-102.ts
// ============================================================
console.log("=== da-102.ts ===");
fixFile("da-102.ts", [
  ["d102x_072", "d102x_104"],
  ["d102x_073", "d102x_105"],
  ["d102x_074", "d102x_106"],
]);

// ============================================================
// da-122-lectures.ts (Copper sulphate question)
// ============================================================
console.log("=== da-122-lectures.ts ===");
fixFile("da-122-lectures.ts", [
  ["d122x_070", "d122x_104"],
]);

// ============================================================
// da-132.ts
// ============================================================
console.log("=== da-132.ts ===");
fixFile("da-132.ts", [
  ["d132x_011", "d132x_104"],
]);

// ============================================================
// da-171.ts
// ============================================================
console.log("=== da-171.ts ===");
fixFile("da-171.ts", [
  ["d171x_039", "d171x_104"],
]);

// ============================================================
// da-262-lectures.ts
// ============================================================
console.log("=== da-262-lectures.ts ===");
fixFile("da-262-lectures.ts", [
  ["d262x_040", "d262x_104"],
  ["d262x_041", "d262x_105"],
]);

// ============================================================
// da-281-lectures.ts
// ============================================================
console.log("=== da-281-lectures.ts ===");
fixFile("da-281-lectures.ts", [
  ["d281l_168", "d281l_200"],
]);

// ============================================================
// da-282-lectures.ts
// ============================================================
console.log("=== da-282-lectures.ts ===");
fixFile("da-282-lectures.ts", [
  ["d282l_169", "d282l_201"],
]);

console.log("Done.");
