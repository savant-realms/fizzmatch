// test-top.ts
import { topMatch, topNMatches } from "./dist/index";

const data = ["cat", "car", "cart", "dog", "door"];

console.log("Top match for 'caa':", topMatch("caa", data, { threshold: 2 }));
console.log("Top 3 matches for 'do':", topNMatches("do", data, 3));
