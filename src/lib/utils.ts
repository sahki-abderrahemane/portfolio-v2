/**
 * Minimal cn() — merges class name strings, filtering falsy values.
 * Drop-in replacement for clsx/tailwind-merge without extra dependencies.
 */
export function cn(...inputs: (string | undefined | null | false | 0)[]): string {
  return inputs.filter(Boolean).join(' ');
}
