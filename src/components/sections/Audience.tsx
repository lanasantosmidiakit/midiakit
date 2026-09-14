import { mediaKit } from "@/data/media-kit";
import { AudienceChannels } from "@/components/sections/AudienceChannels";
import { ContactButton } from "@/components/ui/ContactButton";
import {
  Container,
  Eyebrow,
  Section,
  SplitHeading,
} from "@/components/ui/Section";

export function Audience() {
  const { audience } = mediaKit;

  return (
    <Section id="audiencia" tone="light">
      <Container className="py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <Eyebrow>{audience.eyebrow}</Eyebrow>
            <SplitHeading title={audience.title} highlight={audience.highlight} />
          </div>
          <div className="flex flex-col gap-6 text-base leading-relaxed md:text-lg">
            {audience.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <AudienceChannels channels={audience.channels} />

        {/* <div className="mt-14 grid gap-12 md:grid-cols-2">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.18em] opacity-60">
              Localização
            </p>
            <BarChart items={audience.locations} />
          </div>
          <p className="self-end text-sm uppercase tracking-[0.14em] opacity-60">
            {audience.classes}
          </p>
        </div> */}

        <div className="mt-16 flex flex-col gap-8 border-t border-coffee/10 pt-10 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl text-sm leading-relaxed opacity-60">
            Quem não é meu público: {audience.whoIsNot}
          </p>
          <ContactButton />
        </div>
      </Container>
    </Section>
  );
}
