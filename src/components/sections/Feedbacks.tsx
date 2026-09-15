import { mediaKit } from "@/data/media-kit";
import { MediaImage } from "@/components/ui/MediaImage";
import { ContactButton } from "@/components/ui/ContactButton";
import { Container, Section } from "@/components/ui/Section";

export function Feedbacks() {
  const { feedbacks } = mediaKit;

  return (
    <Section id="feedbacks" tone="light">
      <Container className="py-16 md:py-24">
        <h2 className="font-serif text-4xl uppercase tracking-[0.12em] md:text-6xl">
          {feedbacks.title}
        </h2>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {feedbacks.items.map((item) => (
            <li key={item.id}>
              {item.image ? (
                <MediaImage
                  {...item.image}
                  className="rounded-xl"
                  sizes="(min-width: 768px) 360px, 90vw"
                />
              ) : item.quote ? (
                <p className="font-serif text-xl italic leading-snug md:text-2xl">
                  “{item.quote}”
                </p>
              ) : null}
              <p className="mt-4 text-xs uppercase tracking-[0.18em] opacity-50">
                {item.author}
              </p>
            </li>
          ))}
        </ul>
        <ContactButton className="mt-10" />
      </Container>
    </Section>
  );
}
