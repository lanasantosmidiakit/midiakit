"use client";

import { useRef, useState } from "react";
import type { ResultItem } from "@/types/media-kit";
import { MediaImage } from "@/components/ui/MediaImage";
import { PlayIcon } from "@/components/ui/PlayIcon";

export function ResultCarousel({ results }: { results: ResultItem[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function updateActive() {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const card = scroller.firstElementChild as HTMLElement | null;
    const step = (card?.offsetWidth ?? scroller.clientWidth) + 16;
    setActive(Math.round(scroller.scrollLeft / step));
  }

  return (
    <div>
      <div
        ref={scrollerRef}
        onScroll={updateActive}
        className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-4 md:overflow-visible"
      >
        {results.map((result) => (
          <article
            key={result.id}
            className="w-full shrink-0 snap-start overflow-hidden rounded-xl bg-coffee-soft/40 md:min-w-0"
          >
            {result.href ? (
              <a
                href={result.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block"
                aria-label={`Assistir ${result.title}`}
              >
                <MediaImage
                  {...result.image}
                  unoptimized
                  sizes="(min-width: 768px) 220px, 90vw"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <PlayIcon />
                </span>
              </a>
            ) : (
              <MediaImage
                {...result.image}
                sizes="(min-width: 768px) 220px, 90vw"
              />
            )}
            <div className="p-4">
              <p className="text-[10px] uppercase tracking-[0.18em] text-rose-gold">
                {result.tag}
              </p>
              <h4 className="mt-2 font-serif text-xl leading-snug">
                {result.title}
              </h4>
              {result.views ? (
                <p className="mt-3 font-serif text-2xl">{result.views}</p>
              ) : null}
              {result.stats ? (
                <p className="mt-1 text-xs text-cream/60">{result.stats}</p>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-5 flex justify-center gap-2 md:hidden">
        {results.map((result, index) => (
          <button
            key={result.id}
            type="button"
            aria-label={`Ver ${result.title}`}
            aria-current={index === active}
            className={`size-2 rounded-full transition ${
              index === active ? "bg-rose-gold" : "bg-cream/30"
            }`}
            onClick={() => {
              const card = scrollerRef.current?.children[index] as
                | HTMLElement
                | undefined;
              card?.scrollIntoView({
                behavior: "smooth",
                inline: "start",
                block: "nearest",
              });
            }}
          />
        ))}
      </div>
    </div>
  );
}
