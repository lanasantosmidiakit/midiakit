import { mediaKit } from "@/data/media-kit";
import { ContactButton } from "@/components/ui/ContactButton";
import { MediaImage } from "@/components/ui/MediaImage";
import { Container, Section, SplitHeading } from "@/components/ui/Section";

export function ModelStats() {
  const { modelStats } = mediaKit;

  return (
    <Section id="medidas" tone="light">
      <Container className="pt-8 pb-8 md:pt-12 md:pb-12">
        <SplitHeading title={modelStats.title} />

        <div className="mx-auto mt-12 w-full max-w-4xl">
          <MediaImage
            {...modelStats.image}
            className="rounded-2xl !bg-transparent"
            sizes="(min-width: 768px) 896px, 90vw"
            quality={100}
          />
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center text-base leading-relaxed md:text-lg">
          {modelStats.shipping}
        </p>
        <div className="mt-12 flex justify-center">
          <ContactButton />
        </div>
      </Container>
    </Section>
  );
}
