import { marked } from 'marked';
import DOMPurify from 'dompurify';

/**
 * Safely renders markdown to sanitized HTML
 * Prevents XSS attacks by sanitizing the HTML output
 */
export const renderMarkdown = (markdown: string): string => {
  if (!markdown) return '';

  try {
    const rawHtml = marked(markdown, {
      breaks: true,
      gfm: true,
    });

    const sanitizedHtml = DOMPurify.sanitize(rawHtml as string, {
      ALLOWED_TAGS: [
        'p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'ul', 'ol', 'li', 'blockquote', 'code', 'pre', 'a', 'img'
      ],
      ALLOWED_ATTR: ['href', 'target', 'rel', 'src', 'alt', 'class'],
      ALLOW_DATA_ATTR: false,
    });

    return sanitizedHtml;
  } catch (error) {
    return '';
  }
};

/**
 * Creates a safe props object for rendering HTML
 */
export const createMarkupProps = (markdown: string) => {
  return { __html: renderMarkdown(markdown) };
};
