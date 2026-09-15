import type { AspectRatio } from "@/types/media-kit";

export const ASPECT_CLASS: Record<AspectRatio, string> = {
  square: "aspect-square",
  story: "aspect-[9/16]",
  portrait: "aspect-[3/4]",
  landscape: "aspect-video",
  wide: "aspect-[21/9]",
  hero: "aspect-[4/5] md:aspect-[16/10] lg:aspect-[16/9]",
  feedback: "aspect-[1206/1260]",
  poster: "aspect-[2400/3600]",
  about: "aspect-[2400/1400]",
  measures: "aspect-[2400/2388]",
};

export const ASPECT_PIXELS: Record<AspectRatio, { width: number; height: number }> = {
  square: { width: 800, height: 800 },
  story: { width: 540, height: 960 },
  portrait: { width: 900, height: 1200 },
  landscape: { width: 1600, height: 900 },
  wide: { width: 1920, height: 823 },
  hero: { width: 1920, height: 1080 },
  feedback: { width: 1206, height: 1260 },
  poster: { width: 2400, height: 3600 },
  about: { width: 2400, height: 1400 },
  measures: { width: 2400, height: 2388 },
};

const PLACEHOLDER_BG = "6B2136";
const PLACEHOLDER_FG = "C68A94";

export function placeholderUrl(aspect: AspectRatio, label?: string) {
  const { width, height } = ASPECT_PIXELS[aspect];
  const text = encodeURIComponent(label ?? `${width}×${height}`);
  return `https://placehold.co/${width}x${height}/${PLACEHOLDER_BG}/${PLACEHOLDER_FG}/png?text=${text}`;
}

export function isRemoteImage(src: string) {
  return src.startsWith("http://") || src.startsWith("https://");
}
