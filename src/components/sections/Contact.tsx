import { mediaKit } from "@/data/media-kit";
import { ContactButton } from "@/components/ui/ContactButton";
import {
  Container,
  Eyebrow,
  Section,
  SplitHeading,
} from "@/components/ui/Section";

export function Contact() {
  const { footer, contact } = mediaKit;

  return (
    <Section id="contato" tone="dark">
      <Container className="py-20 md:py-28">
        <Eyebrow>{footer.eyebrow}</Eyebrow>
        <SplitHeading
          title={footer.title}
          highlight={footer.highlight}
          className="md:text-7xl lg:text-8xl"
        />
        <p className="mt-8 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg">
          {footer.body}
        </p>

        <dl className="mt-12 grid gap-8 sm:grid-cols-2">
          <div>
            <dt className="text-[11px] uppercase tracking-[0.18em] text-rose-gold">
              E-mail
            </dt>
            <dd className="mt-2">
              <a
                href={`mailto:${contact.email}`}
                className="text-lg underline-offset-4 hover:underline"
              >
                {contact.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-[11px] uppercase tracking-[0.18em] text-rose-gold">
              WhatsApp
            </dt>
            <dd className="mt-2">
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg underline-offset-4 hover:underline"
              >
                {contact.phone}
              </a>
            </dd>
          </div>
          {contact.socials.map((social) => (
            <div key={social.id}>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-rose-gold">
                {social.label}
              </dt>
              <dd className="mt-2">
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg underline-offset-4 hover:underline"
                >
                  {social.handle}
                </a>
              </dd>
            </div>
          ))}
        </dl>

        <ContactButton tone="dark" className="mt-12" />

        <p className="mt-20 text-[11px] uppercase tracking-[0.16em] text-cream/40">
          {footer.legal}
        </p>
      </Container>
    </Section>
  );
}
