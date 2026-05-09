/**
 * Locale-independent uppercase. Browsers map CSS `text-transform: uppercase`
 * using the document's language, which produces the dotted Turkish "İ" for
 * lowercase "i" when `<html lang="tr">`. JavaScript's String.prototype.toUpperCase
 * uses the Unicode default case mapping (locale-independent), so "i" → "I"
 * (no dot) regardless of the active locale. We pre-uppercase strings via JS
 * and drop the CSS class to keep eyebrows / labels readable in both EN and TR.
 */
export const uc = (s: string): string => s.toUpperCase();
