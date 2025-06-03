# FizzMatch

FizzMatch: A TypeScript package for fuzzy string search, implemented from scratch.

## Installation

```bash
npm install fizzmatch
```

## Usage

```typescrip
import { search, topMatch } from "fizzmatch";

const items = ["apple", "banana", "orange"];
console.log(search("appl", items));       // [ { item: 'apple', distance: 1 }, … ]
console.log(topMatch("banan", items));    // { item: 'banana', distance: 1 }
```

## Building Locally

```bash
npm install
npm run build
```
