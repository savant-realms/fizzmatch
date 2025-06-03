/**
 * Optimized Levenshtein distance using only two rows.
 */
export function levenshteinDistance(a: string, b: string): number {
    let m = a.length;
    let n = b.length;

    // Ensure n <= m to use less space
    if (n > m) {
        [a, b] = [b, a];
        [m, n] = [n, m];
    }

    let previousRow: number[] = Array.from({ length: n + 1 }, (_, i) => i);
    let currentRow: number[] = Array(n + 1).fill(0);

    for (let i = 1; i <= m; i++) {
        currentRow[0] = i;
        for (let j = 1; j <= n; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            currentRow[j] = Math.min(
                previousRow[j] + 1,       // deletion
                currentRow[j - 1] + 1,    // insertion
                previousRow[j - 1] + cost // substitution
            );
        }
        [previousRow, currentRow] = [currentRow, previousRow];
    }

    return previousRow[n];
}

/**
 * Search options.
 */
export interface SearchOptions {
    threshold?: number; // maximum distance allowed
    ignoreCase?: boolean; // compare without case
}

/**
 * A search result entry.
 */
export interface SearchResult {
    item: string;
    distance: number;
}

/**
 * Perform fuzzy search on a list of strings.
 * Returns matches sorted by ascending distance.
 */
export function search(
    query: string,
    list: string[],
    options: SearchOptions = {}
): SearchResult[] {
    const { threshold = Infinity, ignoreCase = true } = options;
    const results: SearchResult[] = [];

    // Normalize query if ignoring case
    const normQuery = ignoreCase ? query.toLowerCase() : query;

    for (const item of list) {
        const target = ignoreCase ? item.toLowerCase() : item;
        const dist = levenshteinDistance(normQuery, target);
        if (dist <= threshold) {
            results.push({ item, distance: dist });
        }
    }

    // Sort by distance (lower is better), then alphabetically
    return results.sort((a, b) => {
        if (a.distance === b.distance) {
            return a.item.localeCompare(b.item);
        }
        return a.distance - b.distance;
    });
}
