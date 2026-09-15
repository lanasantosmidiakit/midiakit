import Image from "next/image";
import { mediaKit } from "@/data/media-kit";
import { Container, Section, SplitHeading } from "@/components/ui/Section";

export function Brands() {
  const { brands } = mediaKit;
  const track = [...brands.items, ...brands.items];

  return (
    <Section id="marcas" tone="dark">
      <Container className="pt-8 pb-16 md:pt-12 md:pb-24">
        <SplitHeading title={brands.title} highlight={brands.highlight} />
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/75 md:text-lg">
          {brands.intro}
        </p>
      </Container>

      <div
        className="overflow-hidden pb-16 md:pb-24"
        role="region"
        aria-label="Marcas parceiras"
      >
        <ul className="flex w-max animate-marquee-slow hover:[animation-play-state:paused] motion-reduce:animate-none">
          {track.map((brand, index) => (
            <li
              key={`${brand.id}-${index}`}
              className="flex h-32 shrink-0 items-center px-10 md:px-14"
              aria-hidden={index >= brands.items.length}
            >
              <Image
                src={brand.logo.src ?? ""}
                alt={index < brands.items.length ? brand.logo.alt : ""}
                width={360}
                height={140}
                quality={100}
                className="h-24 w-auto object-contain invert mix-blend-screen"
              />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
