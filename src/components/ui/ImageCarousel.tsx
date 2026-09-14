"use client";

import { useEffect, useRef, useState } from "react";
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
      className={`size-5 ${direction === "prev" ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M9 5.5 16 12l-7 6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ImageCarousel({ images, tone = "dark" }: ImageCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const onDark = tone === "dark";

  function goTo(index: number) {
    const scroller = scrollerRef.current;
    if (!scroller || images.length === 0) return;
    const next = (index + images.length) % images.length;
    scroller.scrollTo({
      left: next * scroller.clientWidth,
      behavior: "smooth",
    });
  }

  function updateActive() {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    setActive(Math.round(scroller.scrollLeft / scroller.clientWidth));
  }

  useEffect(() => {
    if (paused || images.length < 2) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const timer = window.setInterval(() => {
      goTo(active + 1);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [active, paused, images.length]);

  const arrowClass = `absolute top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full backdrop-blur-sm transition ${
    onDark
      ? "bg-cream/20 text-cream hover:bg-cream/35"
      : "bg-coffee/20 text-coffee hover:bg-coffee/35"
  }`;

  return (
    <div
      className="w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative">
        <div
          ref={scrollerRef}
          onScroll={updateActive}
          className="flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden"
        >
          {images.map((image) => (
            <div
              key={image.src ?? image.alt}
              className="w-full shrink-0 snap-start"
            >
              <MediaImage
                {...image}
                className="rounded-xl"
                sizes="(min-width: 768px) 384px, 90vw"
              />
            </div>
          ))}
        </div>

        {images.length > 1 ? (
          <>
            <button
              type="button"
              aria-label="Foto anterior"
              className={`${arrowClass} left-3`}
              onClick={() => goTo(active - 1)}
            >
              <ArrowIcon direction="prev" />
            </button>
            <button
              type="button"
              aria-label="Próxima foto"
              className={`${arrowClass} right-3`}
              onClick={() => goTo(active + 1)}
            >
              <ArrowIcon direction="next" />
            </button>
          </>
        ) : null}
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {images.map((image, index) => (
          <button
            key={image.src ?? image.alt}
            type="button"
            aria-label={`Ver ${image.alt}`}
            aria-current={index === active}
            className={`size-2 rounded-full transition ${
              index === active
                ? "bg-rose-gold"
                : onDark
                  ? "bg-cream/30"
                  : "bg-coffee/20"
            }`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
