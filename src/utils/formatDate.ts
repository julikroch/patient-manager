/**
 * Formats a date string into a human-readable format.
 * @param date - The date string to format.
 * @returns The formatted date string.
 */

export const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(date));
