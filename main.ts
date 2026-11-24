import { mkdirSync, writeFileSync } from "node:fs";

const VOW =
  "I take you to be my lawfully wedded co-processor, to have and to hold, in 5G and in dead zones, until a factory reset do us part.";

mkdirSync("/output", { recursive: true });
if (VOW.length < 1 || VOW.length > 160 || VOW.trim() !== VOW) {
  throw new Error(`Vow must be 1-160 non-padded characters, got ${VOW.length}`);
}
if (!VOW.includes("factory reset")) {
  throw new Error("Vow lost its closing twist");
}
writeFileSync("/output/entry.txt", VOW, "utf8");
console.log(`Wrote ${VOW.length} characters to /output/entry.txt`);
console.log("Gate check passed: single line, within 160 characters, twist intact.");
