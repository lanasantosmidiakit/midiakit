import type { ReactNode } from "react";
import { mediaKit } from "@/data/media-kit";
import { MediaImage } from "@/components/ui/MediaImage";
import { MediaVideo } from "@/components/ui/MediaVideo";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { PlayIcon } from "@/components/ui/PlayIcon";
import { ContactButton } from "@/components/ui/ContactButton";
import { Container, Section, SplitHeading } from "@/components/ui/Section";
import type { Deliverable, ImageAsset } from "@/types/media-kit";

function DeliverableTitle({ title, onDark }: { title: string; onDark: boolean }) {
  const words = title.trim().split(" ");
  const last = words.pop();

  return (
    <h3 className="font-serif text-4xl leading-[0.95] md:text-5xl">
      {words.length > 0 ? `${words.join(" ")} ` : null}
      <span
        className={`italic font-normal ${onDark ? "text-rose-gold" : "text-wine"}`}
      >
        {last}
      </span>
    </h3>
  );
}

function PhoneFrame({
  children,
  featured = false,
}: {
  children: ReactNode;
  featured?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.55rem] bg-coffee shadow-[0_16px_36px_rgba(107,33,54,0.16)] ring-1 ring-black/10 ${
        featured ? "w-[240px] lg:w-[280px]" : "w-[152px]"
      }`}
    >
      {children}
    </div>
  );
}

function DeliverableVisual({
  image,
  featured = false,
}: {
  image: ImageAsset;
  featured?: boolean;
}) {
  const media =
    image.kind === "video" ? (
      <MediaVideo {...image} className="rounded-none" />
    ) : (
      <MediaImage
        {...image}
        className="rounded-none"
        sizes={featured ? "(min-width: 1024px) 280px, 240px" : "152px"}
      />
    );

  const framed = <PhoneFrame featured={featured}>{media}</PhoneFrame>;

  if (image.kind === "video" || !image.href) {
    return framed;
  }

  return (
    <a
      href={image.href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block w-fit"
      aria-label={`Assistir ${image.alt}`}
    >
      {framed}
      <span className="absolute inset-0 flex items-center justify-center rounded-[1.55rem] bg-black/20">
        <PlayIcon size="sm" />
      </span>
    </a>
  );
}

function DeliverableMedia({
  item,
  featured = false,
}: {
  item: Deliverable;
  featured?: boolean;
}) {
  if (item.gallery === "carousel") {
    return <ImageCarousel images={item.images} tone={item.tone} />;
  }

  return (
    <div className="flex justify-center">
      {item.images.map((image) => (
        <DeliverableVisual
          key={image.src ?? image.alt}
          image={image}
          featured={featured}
        />
      ))}
    </div>
  );
}

function DeliverableBlock({
  item,
  showDivider,
}: {
  item: Deliverable;
  showDivider: boolean;
}) {
  const onDark = item.tone === "dark";
  const breakout = onDark;

  return (
    <article
      className={`overflow-visible ${
        onDark ? "bg-coffee text-cream" : "bg-cream text-coffee"
      } ${breakout ? "relative z-10" : ""}`}
    >
      <Container
        className={`py-14 md:py-16 ${
          showDivider ? "border-t border-coffee/15" : ""
        }`}
      >
        {onDark ? (
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_auto] lg:gap-16">
            <div>
              <DeliverableTitle title={item.title} onDark />
              <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-rose-gold">
                {item.tags}
              </p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg">
                {item.body}
              </p>
            </div>
            <div className="relative z-10 mx-auto w-fit lg:mx-0 lg:h-full lg:w-[280px]">
              <div className="lg:absolute lg:left-0 lg:top-1/2 lg:w-[280px] lg:-translate-y-1/2">
                <DeliverableMedia item={item} featured />
              </div>
            </div>
          </div>
        ) : (
          <div
            className={`grid items-center gap-8 lg:gap-12 ${
              item.gallery === "carousel"
                ? "lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.1fr)_minmax(280px,340px)]"
                : "lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)_auto]"
            }`}
          >
            <div>
              <DeliverableTitle title={item.title} onDark={false} />
              <p className="mt-4 text-[11px] uppercase tracking-[0.2em] opacity-50">
                {item.tags}
              </p>
            </div>
            <p className="max-w-xl text-sm leading-relaxed md:text-base">
              {item.body}
            </p>
            <div className="flex min-w-0 w-full justify-center">
              <DeliverableMedia item={item} />
            </div>
          </div>
        )}
      </Container>
    </article>
  );
}

export function Deliverables() {
  const { deliverables } = mediaKit;

  return (
    <Section id="formatos" tone="light" className="overflow-visible">
      <Container className="pt-8 pb-8 md:pt-12 md:pb-8">
        <SplitHeading title={deliverables.title} />
      </Container>
      {deliverables.items.map((item, index) => {
        const previous = deliverables.items[index - 1];
        const showDivider =
          index > 0 && item.tone !== "dark" && previous?.tone !== "dark";

        return (
          <DeliverableBlock
            key={item.id}
            item={item}
            showDivider={showDivider}
          />
        );
      })}
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
