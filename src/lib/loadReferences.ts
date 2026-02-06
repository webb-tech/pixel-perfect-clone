// Define types for reference items
export type ReferenceItem = {
    slug: string;
    title: string;
    img: string;
    description: string;
    content: string;
    published?: boolean;
};

// Load all markdown files from the references directory
// The markdown plugin transforms these into JSON at build time
const modules = import.meta.glob("/src/content/references/*.md", {
    eager: true,
}) as Record<string, { default: ReferenceItem }>;

/**
 * Load and parse all reference articles from Markdown files
 * @returns Array of reference items sorted alphabetically by title
 */
export function loadReferences(): ReferenceItem[] {
    const items = Object.values(modules).map((mod) => mod.default);

    // Filter only published items and sort by title
    return items
        .filter((item) => item.published !== false)
        .sort((a, b) => a.title.localeCompare(b.title, "sv"));
}

/**
 * Find a single reference by slug
 * @param slug - The reference slug
 * @returns The reference item or undefined if not found
 */
export function findReferenceBySlug(slug: string): ReferenceItem | undefined {
    const allReferences = loadReferences();
    return allReferences.find((item) => item.slug === slug);
}
