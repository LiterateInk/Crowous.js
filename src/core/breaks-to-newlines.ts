const REGEX = /<br\/>/gi;

/**
 * Replaces every `<br/>` to `\n`.
 */
export function breaksToNewlines(str: string): string {
  return str.replace(REGEX, "\n");
}
