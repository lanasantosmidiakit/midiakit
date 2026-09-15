import { mediaKit } from "@/data/media-kit";
import { ContactButton } from "@/components/ui/ContactButton";
import { Container, Section } from "@/components/ui/Section";

const SIZE_IDS = new Set(["height", "top", "bottom", "shoes"]);

function hasValue(value: string) {
  return value.trim() !== "" && value !== "—";
}

export function ModelStats() {
  const { modelStats } = mediaKit;
  const filled = modelStats.items.filter((item) => hasValue(item.value));
  const sizes = filled.filter((item) => SIZE_IDS.has(item.id));
  const beauty = filled.filter((item) => !SIZE_IDS.has(item.id));

  return (
    <Section id="medidas" tone="light">
      <Container className="py-16 md:py-24">
        <h2 className="font-serif text-4xl md:text-6xl">
          {modelStats.title}
        </h2>

        {sizes.length > 0 ? (
          <ul className="mt-12 grid grid-cols-2 bg-coffee text-cream md:grid-cols-4">
            {sizes.map((item) => (
              <li
                key={item.id}
                className="flex flex-col items-center justify-center border-cream/10 px-4 py-10 text-center odd:border-r [&:nth-child(-n+2)]:border-b md:border-r md:border-b-0 md:last:border-r-0 md:py-14"
              >
                <p className="font-serif text-4xl leading-none md:text-6xl">
                  {item.value}
                </p>
                <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-rose-gold">
                  {item.label}
                </p>
              </li>
            ))}
          </ul>
        ) : null}

        {beauty.length > 0 ? (
          <ul className="mt-2 border-y border-coffee/10">
            {beauty.map((item) => (
              <li
                key={item.id}
                className="grid gap-2 border-b border-coffee/10 py-8 last:border-b-0 md:grid-cols-[minmax(0,0.4fr)_minmax(0,1fr)] md:items-end md:gap-10"
              >
                <p className="text-[11px] uppercase tracking-[0.2em] opacity-50">
                  {item.label}
                </p>
                <p className="font-serif text-2xl leading-snug md:text-4xl">
                  {item.value}
                </p>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-10 max-w-xl">
          <p className="text-sm opacity-60">{modelStats.note}</p>
          <p className="mt-3 text-base leading-relaxed md:text-lg">
            {modelStats.shipping}
          </p>
        </div>
        <div className="mt-12 flex justify-center">
          <ContactButton />
        </div>
      </Container>
    </Section>
  );
}
