import matter from "gray-matter";
import { Plugin } from "vite";

/**
 * Vite plugin to transform markdown files into JSON at build time
 * This avoids the need for browser polyfills
 */
export function markdownPlugin(): Plugin {
    return {
        name: "vite-plugin-markdown",
        transform(code, id) {
            if (!id.endsWith(".md")) {
                return null;
            }

            try {
                const { data, content } = matter(code);

                // Extract slug from filename if not in frontmatter
                const slug =
                    data.slug || id.split("/").pop()?.replace(".md", "") || "";

                const result = {
                    ...data,
                    slug,
                    content: content.trim(),
                };

                return {
                    code: `export default ${JSON.stringify(result)}`,
                    map: null,
                };
            } catch (e) {
                this.error(`Failed to parse markdown file: ${id}\n${e}`);
            }
        },
    };
}
