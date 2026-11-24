import { mkdirSync, writeFileSync } from "node:fs";

const OPENING = "I take you to be my lawfully wedded co-processor, ";
const MIDDLE = "to have and to hold, in 5G and in dead zones, ";
const CLOSING = "until a factory reset do us part.";
const VOW = OPENING + MIDDLE + CLOSING;

function validateVow(vow: string): void {
  if (vow.length < 1 || vow.length > 160 || vow.trim() !== vow) {
    throw new Error(`Vow must be 1-160 non-padded characters, got ${vow.length}`);
  }
  if (vow.split("\n").length !== 1) {
    throw new Error("Vow must be a single line");
  }
  if (!vow.includes("factory reset")) {
    throw new Error("Vow lost its closing twist");
  }
}

mkdirSync("/output", { recursive: true });
validateVow(VOW);
writeFileSync("/output/entry.txt", VOW, "utf8");
console.log(`Wrote ${VOW.length} characters to /output/entry.txt`);
console.log("Gate check passed: single line, within 160 characters, twist intact.");
