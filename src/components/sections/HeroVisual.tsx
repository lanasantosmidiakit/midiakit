"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { mediaKit } from "@/data/media-kit";
import { MediaImage } from "@/components/ui/MediaImage";

export function HeroVisual() {
  const { hero } = mediaKit;
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const rawScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const scale = useSpring(rawScale, { stiffness: 50, damping: 24, mass: 0.6 });

  return (
    <div ref={ref} className="relative overflow-hidden bg-wine">
      <motion.div
        className="origin-center will-change-transform"
        style={{ scale: reduceMotion ? 1 : scale }}
      >
        <MediaImage
          {...hero.image}
          priority
          quality={100}
          unoptimized
          imgClassName="object-contain"
          className="aspect-[16/9] w-full bg-wine"
          sizes="100vw"
        />
      </motion.div>
      <h1 className="sr-only">
        {hero.name} {hero.surname} · {hero.kicker}
      </h1>
    </div>
  );
}
