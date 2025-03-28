/**
 * Image loader function for Next.js Image component.
 * @param src - The source URL of the image.
 * @returns The source URL of the image.
 */

export default function imageLoader({ src }: { src: string }) {
  // If it's a local file path, return as is
  if (src.startsWith('file://') || src.startsWith('/')) {
    return src;
  }

  // For remote URLs, return as is
  return src;
}
