import type { ThemeTone } from "@/types/media-kit";

type SectionProps = {
  id: string;
  tone?: ThemeTone;
  children: React.ReactNode;
  className?: string;
};

const toneClass: Record<ThemeTone, string> = {
  light: "bg-cream text-coffee",
  dark: "bg-coffee text-cream",
};

export function Section({
  id,
  tone = "light",
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`${toneClass[tone]} ${className}`}>
      {children}
    </section>
  );
}

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 md:px-8 ${className}`}>
      {children}
    </div>
  );
}

type EyebrowProps = {
  children: string;
  className?: string;
};

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <p
      className={`text-xs font-medium uppercase tracking-[0.22em] opacity-70 ${className}`}
    >
      {children}
    </p>
  );
}

type CopyProps = {
  children: string;
  className?: string;
};

export function Copy({ children, className = "" }: CopyProps) {
  if (!children) {
    return (
      <p className={`italic opacity-40 ${className}`}>Texto a definir</p>
    );
  }

  return <p className={className}>{children}</p>;
}

type SplitHeadingProps = {
  title: string;
  highlight?: string;
  className?: string;
};

export function SplitHeading({
  title,
  highlight,
  className = "",
}: SplitHeadingProps) {
  return (
    <h2
      className={`mt-4 font-serif text-4xl leading-[0.95] md:text-6xl lg:text-7xl ${className}`}
    >
      {title}
      {highlight ? (
        <>
          <br />
          <span className="italic font-normal">{highlight}</span>
        </>
      ) : null}
    </h2>
  );
}
