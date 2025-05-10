// lib/markdown.ts
import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";

// Initialize and configure markdown parser
const configureMarkdown = () => {
  marked.setOptions({
    gfm: true, // GitHub Flavored Markdown
    breaks: true, // Convert \n to <br>
    headerIds: true, // Generate IDs for headers (useful for TOC)
    mangle: false, // Don't escape HTML
    smartLists: true, // Use smarter list behavior
    smartypants: true, // Use "smart" typographic punctuation
  });

  // Add any custom renderers or extensions here if needed
  // For example:
  /*
  const renderer = new marked.Renderer();
  renderer.link = (href, title, text) => {
    const isExternal = href && href.startsWith('http');
    const target = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';
    return `<a href="${href}"${target}>${text}</a>`;
  };
  marked.use({ renderer });
  */

  return marked;
};

// Create a configured markdown parser
const markdownParser = configureMarkdown();

/**
 * Parse markdown content to HTML and sanitize it
 * @param markdown The markdown content to parse
 * @returns Sanitized HTML
 */
export async function parseMarkdown(markdown: string): Promise<string> {
  try {
    // Parse the markdown content to HTML
    const html = await markdownParser(markdown);

    // Sanitize the HTML to prevent XSS
    const sanitizedHtml = DOMPurify.sanitize(html, {
      ADD_TAGS: ["iframe"], // Allow iframe if necessary (e.g., for embedded videos)
      ADD_ATTR: ["allow", "allowfullscreen", "frameborder", "scrolling"], // Add attributes for iframes
    });

    return sanitizedHtml;
  } catch (error) {
    console.error("Error parsing markdown:", error);
    return `<p>Error rendering content. Please try again later.</p>`;
  }
}
