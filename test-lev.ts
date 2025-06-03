// test-lev.ts
import { levenshteinDistance } from "./dist/index";

console.log(levenshteinDistance("kitten", "sitting")); // expected 3
console.log(levenshteinDistance("flaw", "lawn"));      // expected 2
console.log(levenshteinDistance("saturday", "sunday")); // expected 3
