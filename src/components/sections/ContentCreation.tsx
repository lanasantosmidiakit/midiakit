import { mediaKit } from "@/data/media-kit";
import { MediaImage } from "@/components/ui/MediaImage";
import { ContactButton } from "@/components/ui/ContactButton";
import { ResultCarousel } from "@/components/sections/ResultCarousel";
import {
  Container,
  Eyebrow,
  Section,
  SplitHeading,
} from "@/components/ui/Section";

export function ContentCreation() {
  const { contentCreation } = mediaKit;

  return (
    <Section id="conteudo" tone="dark">
      <Container className="pt-16 pb-8 md:pt-24 md:pb-12">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.7fr)]">
          <div>
            <Eyebrow>{contentCreation.eyebrow}</Eyebrow>
            <SplitHeading
              title={contentCreation.title}
              highlight={contentCreation.highlight}
            />
            <p className="mt-4 tracking-[0.2em] text-rose-gold">
              {contentCreation.rating}
            </p>
            <div className="mt-8 flex max-w-xl flex-col gap-5 text-base leading-relaxed text-cream/80 md:text-lg">
              {contentCreation.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div
            className={
              contentCreation.frames.length === 1
                ? "mx-auto w-full max-w-sm lg:ml-auto"
                : "grid grid-cols-3 gap-3 md:gap-5"
            }
          >
            {contentCreation.frames.map((frame, index) => (
              <div
                key={frame.alt}
                className={
                  contentCreation.frames.length > 1 && index === 1
                    ? "translate-y-6 md:translate-y-10"
                    : ""
                }
              >
                <MediaImage
                  {...frame}
                  className="rounded-2xl"
                  sizes={
                    contentCreation.frames.length === 1
                      ? "(min-width: 1024px) 384px, 90vw"
                      : "(min-width: 768px) 180px, 30vw"
                  }
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-cream/10 pt-16">
          <h3 className="font-serif text-3xl md:text-5xl">
            {contentCreation.resultsTitle}
          </h3>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/70 md:text-lg">
            {contentCreation.resultsBody}
          </p>
          <ResultCarousel results={contentCreation.results} />
          <ContactButton tone="dark" className="mt-12" />
        </div>
      </Container>
    </Section>
  );
}
