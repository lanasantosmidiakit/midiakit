"use client";

import { useRef, useState } from "react";
import type { ImageAsset, ThemeTone } from "@/types/media-kit";
import { MediaImage } from "@/components/ui/MediaImage";

type ImageCarouselProps = {
  images: ImageAsset[];
  tone?: ThemeTone;
};

function ArrowIcon({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`size-4 ${direction === "prev" ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M9 5.5 16 12l-7 6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ImageCarousel({ images, tone = "light" }: ImageCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const onDark = tone === "dark";
  const visible = 3;
  const maxIndex = Math.max(0, images.length - visible);

  function goTo(index: number) {
    const scroller = scrollerRef.current;
    if (!scroller || images.length === 0) return;
    const next = Math.min(Math.max(index, 0), maxIndex);
    const card = scroller.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 8 : 0;
    scroller.scrollTo({ left: next * step, behavior: "smooth" });
    setActive(next);
  }

  function updateActive() {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const card = scroller.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 8 : 1;
    setActive(Math.min(Math.round(scroller.scrollLeft / step), maxIndex));
  }

  const arrowClass = `absolute top-1/2 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded-full border bg-cream/90 shadow-sm backdrop-blur-sm transition disabled:pointer-events-none disabled:opacity-30 ${
    onDark
      ? "border-cream/20 bg-coffee/80 text-cream hover:bg-coffee"
      : "border-coffee/15 text-coffee hover:bg-coffee hover:text-cream"
  }`;

  return (
    <div className="relative mx-auto w-full min-w-0 max-w-[316px]">
      <div
        ref={scrollerRef}
        onScroll={updateActive}
        className="flex min-w-0 snap-x snap-mandatory gap-2 overflow-x-auto px-1 [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((image) => (
          <div
            key={image.src ?? image.alt}
            className="w-[100px] shrink-0 snap-start"
          >
            <MediaImage
              {...image}
              className="rounded-lg"
              sizes="100px"
            />
          </div>
        ))}
      </div>

      {images.length > visible ? (
        <>
          <button
            type="button"
            aria-label="Fotos anteriores"
            className={`${arrowClass} -left-3`}
            disabled={active <= 0}
            onClick={() => goTo(active - 1)}
          >
            <ArrowIcon direction="prev" />
          </button>
          <button
            type="button"
            aria-label="Próximas fotos"
            className={`${arrowClass} -right-3`}
            disabled={active >= maxIndex}
            onClick={() => goTo(active + 1)}
          >
            <ArrowIcon direction="next" />
          </button>
        </>
      ) : null}
    </div>
  );
}
