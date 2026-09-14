import { mediaKit } from "@/data/media-kit";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { Container } from "@/components/ui/Section";

export function Hero() {
  const { hero } = mediaKit;

  return (
    <section id="hero" className="bg-coffee text-cream">
      <HeroVisual />
      <Container className="grid gap-8 py-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-end md:py-16">
        <p className="max-w-xl font-serif text-3xl leading-tight md:text-5xl">
          {hero.headline[0]}
          <br />
          <span className="italic text-rose-gold">{hero.headline[1]}</span>
        </p>
        <p className="max-w-md text-sm leading-relaxed text-cream/80 md:ml-auto md:text-base">
          {hero.tagline}
        </p>
        <p className="text-[10px] uppercase tracking-[0.16em] text-cream/45 md:col-span-2">
          {hero.legal}
        </p>
      </Container>
    </section>
  );
}
