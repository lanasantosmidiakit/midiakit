"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { mediaKit } from "@/data/media-kit";
import { MediaImage } from "@/components/ui/MediaImage";
import type { Metric } from "@/types/media-kit";

function MetricItem({
  metric,
  from,
  delay,
}: {
  metric: Metric;
  from: "left" | "right";
  delay: number;
}) {
  return (
    <motion.li
      className="relative z-10 border-t border-cream/15 pt-5"
      initial={{ opacity: 0, x: from === "left" ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ type: "spring", stiffness: 70, damping: 20, delay }}
    >
      <p className="font-serif text-3xl leading-none md:text-4xl">{metric.value}</p>
      <p className="mt-2.5 text-[10px] uppercase tracking-[0.18em] text-rose">
        {metric.label}
      </p>
      <p className="mt-1 text-xs text-cream/55">{metric.hint}</p>
    </motion.li>
  );
}

export function ProfileShowcase() {
  const { profile } = mediaKit;
  const rootRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(rootRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start end", "end start"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 28,
    mass: 0.55,
  });

  const ySide = useTransform(smooth, [0, 0.5, 1], [24, 8, 0]);
  const yCenter = useTransform(smooth, [0, 0.5, 1], [18, -4, -16]);
  const rotateLeft = useTransform(smooth, [0, 0.5, 1], [-2, -3.5, -2]);
  const rotateRight = useTransform(smooth, [0, 0.5, 1], [2, 3.5, 2]);

  const metrics = profile.metrics.filter(
    (metric) => metric.value.trim() !== "" && !metric.value.includes("—"),
  );
  const split = Math.ceil(metrics.length / 2);
  const left = metrics.slice(0, split);
  const right = metrics.slice(split);

  const phones = [
    { y: ySide, rotate: rotateLeft, width: "32%" },
    { y: yCenter, rotate: 0, width: "40%" },
    { y: ySide, rotate: rotateRight, width: "32%" },
  ];

  return (
    <div
      ref={rootRef}
      className="mt-14 grid items-start gap-8 lg:grid-cols-[minmax(9.5rem,0.72fr)_minmax(0,2fr)_minmax(9.5rem,0.72fr)] lg:gap-6"
    >
      <ul className="relative z-10 order-2 flex min-w-0 flex-col gap-10 lg:order-1">
        {left.map((metric, index) => (
          <MetricItem
            key={metric.id}
            metric={metric}
            from="left"
            delay={0.08 + index * 0.08}
          />
        ))}
      </ul>

      <div className="relative z-0 order-1 mx-auto flex w-full max-w-[52rem] items-end justify-center gap-2 sm:gap-3 lg:order-2 lg:max-w-none">
        {profile.phones.map((phone, index) => {
          const item = phones[index];

          return (
            <motion.div
              key={phone.alt}
              className="relative aspect-[9/16] overflow-hidden rounded-xl border border-cream/20 shadow-[0_18px_40px_rgba(0,0,0,0.28)]"
              style={{
                width: item.width,
                y: reduceMotion ? 0 : item.y,
                rotate: reduceMotion ? 0 : item.rotate,
              }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0.35 }}
              transition={{ type: "spring", stiffness: 60, damping: 18, delay: index * 0.08 }}
            >
              <MediaImage
                {...phone}
                unconstrained
                unoptimized
                imgClassName="object-contain object-top"
                className="h-full w-full bg-wine"
                sizes="(min-width: 1024px) 340px, 42vw"
              />
            </motion.div>
          );
        })}
      </div>

      <ul className="relative z-10 order-3 flex min-w-0 flex-col gap-10">
        {right.map((metric, index) => (
          <MetricItem
            key={metric.id}
            metric={metric}
            from="right"
            delay={0.12 + index * 0.08}
          />
        ))}
      </ul>
    </div>
  );
}
