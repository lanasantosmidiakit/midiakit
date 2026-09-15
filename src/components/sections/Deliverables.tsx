import { mediaKit } from "@/data/media-kit";
import { MediaImage } from "@/components/ui/MediaImage";
import { MediaVideo } from "@/components/ui/MediaVideo";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { PlayIcon } from "@/components/ui/PlayIcon";
import { ContactButton } from "@/components/ui/ContactButton";
import { Container, Section } from "@/components/ui/Section";
import type { Deliverable, ImageAsset } from "@/types/media-kit";

function DeliverableVisual({ image }: { image: ImageAsset }) {
  if (image.kind === "video") {
    return <MediaVideo {...image} className="rounded-xl" />;
  }

  const frame = (
    <MediaImage
      {...image}
      className="rounded-xl"
      sizes="(min-width: 768px) 240px, 90vw"
    />
  );

  if (!image.href) {
    return frame;
  }

  return (
    <a
      href={image.href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block"
      aria-label={`Assistir ${image.alt}`}
    >
      {frame}
      <span className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/20">
        <PlayIcon />
      </span>
    </a>
  );
}

function DeliverableBlock({ item }: { item: Deliverable }) {
  const imageFirst = item.layout === "image-left";
  const onDark = item.tone === "dark";

  return (
    <article className={onDark ? "bg-coffee text-cream" : "bg-cream text-coffee"}>
      <Container className="flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between md:gap-14 md:py-24">
        <div className={`max-w-xl ${imageFirst ? "md:order-2" : ""}`}>
          <p
            className={`text-[11px] uppercase tracking-[0.2em] ${
              onDark ? "text-rose-gold" : "opacity-50"
            }`}
          >
            {item.tags}
          </p>
          <h3 className="mt-3 font-serif text-3xl md:text-5xl">{item.title}</h3>
          <p
            className={`mt-6 text-base leading-relaxed md:text-lg ${
              onDark ? "text-cream/80" : ""
            }`}
          >
            {item.body}
          </p>
        </div>
        <div
          className={`w-full shrink-0 ${
            item.gallery === "carousel" ? "max-w-sm" : "max-w-xs"
          } ${imageFirst ? "md:order-1" : ""}`}
        >
          {item.gallery === "carousel" ? (
            <ImageCarousel images={item.images} tone={item.tone} />
          ) : (
            <div
              className={`grid gap-3 ${
                item.images.length > 2
                  ? "grid-cols-3"
                  : item.images.length === 2
                    ? "grid-cols-2"
                    : "grid-cols-1"
              }`}
            >
              {item.images.map((image) => (
                <DeliverableVisual
                  key={image.src ?? image.alt}
                  image={image}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </article>
  );
}

export function Deliverables() {
  const { deliverables } = mediaKit;

  return (
    <Section id="formatos" tone="light">
      <Container className="py-16 md:pb-8 md:pt-24">
        <h2 className="font-serif text-4xl uppercase tracking-[0.08em] md:text-6xl">
          {deliverables.title}
        </h2>
      </Container>
      {deliverables.items.map((item) => (
        <DeliverableBlock key={item.id} item={item} />
      ))}
      <Container className="py-16 md:py-20">
        <p className="max-w-3xl text-sm leading-relaxed opacity-60">
          {deliverables.footerNote}
        </p>
        <p className="mt-6 max-w-3xl font-serif text-2xl italic leading-snug md:text-3xl">
          {deliverables.expectation}
        </p>
        <div className="mt-12 flex justify-center">
          <ContactButton />
        </div>
      </Container>
    </Section>
  );
}
