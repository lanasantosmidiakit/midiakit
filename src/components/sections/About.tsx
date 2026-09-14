import { mediaKit } from "@/data/media-kit";
import { Container, Eyebrow, Section } from "@/components/ui/Section";
import { Marquee } from "@/components/ui/Marquee";
import { ContactButton } from "@/components/ui/ContactButton";

export function About() {
  const { about } = mediaKit;

  return (
    <>
      <Marquee label={about.marquee} className="bg-cream text-coffee" />
      <Section id="sobre" tone="light">
        <Container className="py-16 md:py-24">
          <Eyebrow>{about.eyebrow}</Eyebrow>
          <p className="mt-6 text-sm uppercase tracking-[0.2em] opacity-60">
            {about.greeting}
          </p>
          <h2 className="mt-2 font-serif text-5xl md:text-7xl">{about.title}</h2>

          <ul className="mt-12 grid gap-8 border-y border-coffee/10 py-10 sm:grid-cols-3">
            {about.anchors.map((anchor) => (
              <li key={anchor.id}>
                <p className="text-[11px] uppercase tracking-[0.18em] opacity-50">
                  {anchor.label}
                </p>
                <p className="mt-2 font-serif text-4xl">{anchor.value}</p>
                <p className="mt-1 text-sm opacity-70">{anchor.hint}</p>
              </li>
            ))}
          </ul>

          <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col gap-6 text-base leading-relaxed md:text-lg">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="flex flex-col justify-between gap-8">
              <p className="font-serif text-3xl italic leading-snug md:text-4xl">
                {about.close}
              </p>
              <ContactButton />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
