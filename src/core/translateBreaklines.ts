const REGEX = /<br\/>/gi;

/**
 * Replaces every `<br/>` to `\n`.
 */
export default function translateBreaklines(str: string): string {
  return str.replace(REGEX, "\n");
}
