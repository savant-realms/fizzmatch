// test-search.ts
import { search } from "./dist/index";

const data = [
    "apple",
    "application",
    "banana",
    "bandana",
    "orange",
    "grape",
    "pineapple",
];

console.log("Search for 'appl':");
console.table(search("appl", data, { threshold: 3 }));

console.log("\nSearch for 'banan':");
console.table(search("banan", data, { threshold: 2 }));
