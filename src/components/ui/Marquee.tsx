type MarqueeProps = {
  label: string;
  className?: string;
};

export function Marquee({ label, className = "" }: MarqueeProps) {
  const items = Array.from({ length: 12 }, () => label.toUpperCase());

  return (
    <div
      className={`overflow-hidden border-y border-current/10 py-4 md:py-5 ${className}`}
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee gap-8">
        {[0, 1].map((copy) => (
          <p
            key={copy}
            className="flex shrink-0 items-center gap-8 font-sans text-sm font-medium uppercase tracking-[0.22em] md:text-base"
          >
            {items.map((item, index) => (
              <span key={`${copy}-${index}`} className="flex items-center gap-8">
                {item}
                <span className="text-rose-gold">·</span>
              </span>
            ))}
          </p>
        ))}
      </div>
    </div>
  );
}
