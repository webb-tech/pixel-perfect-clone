// Define types for news items
export type NewsItem = {
    slug: string;
    title: string;
    date: string;
    thumbnailImg: string;
    excerpt: string;
    content: string;
    published?: boolean;
};

// Load all markdown files from the news directory
// The markdown plugin transforms these into JSON at build time
const modules = import.meta.glob("/src/content/news/*.md", {
    eager: true,
}) as Record<string, { default: NewsItem }>;

/**
 * Load and parse all news articles from Markdown files
 * @returns Array of news items sorted by date (newest first)
 */
export function loadNews(): NewsItem[] {
    const items = Object.values(modules).map((mod) => mod.default);

    // Filter only published items and sort by date (newest first)
    return items
        .filter((item) => item.published !== false)
        .sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            return dateB - dateA;
        });
}

/**
 * Find a single news article by slug
 * @param slug - The article slug
 * @returns The news item or undefined if not found
 */
export function findNewsBySlug(slug: string): NewsItem | undefined {
    const allNews = loadNews();
    return allNews.find((item) => item.slug === slug);
}
