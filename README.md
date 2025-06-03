# FizzMatch

FizzMatch: A TypeScript package for fuzzy string search, implemented from scratch.

## Overview

FizzMatch is a lightweight TypeScript module for fuzzy string search, implemented from scratch using Levenshtein distance. Perfect for auto-complete, typo-tolerant lookup, and search-as-you-type features.

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

## Links

GitHub Repo: [https://github.com/savant-realms/fizzmatch](https://github.com/savant-realms/fizzmatch)

NPM package: [https://www.npmjs.com/package/@savant-realms/fizzmatch](https://www.npmjs.com/package/@savant-realms/fizzmatch)
