import { mediaKit } from "@/data/media-kit";
import { MediaImage } from "@/components/ui/MediaImage";
import { Container, Section, SplitHeading } from "@/components/ui/Section";

export function Contact() {
  const { footer, contact } = mediaKit;

  return (
    <Section id="contato" tone="dark">
      <Container className="pt-20 pb-10 md:pt-28 md:pb-12">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.7fr)]">
          <div>
            <SplitHeading
              title={footer.title}
              highlight={footer.highlight}
              className="md:text-7xl lg:text-8xl"
            />
            <p className="mt-8 max-w-xl whitespace-pre-line text-base leading-relaxed text-cream/80 md:text-lg">
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
          </div>

          <div className="mx-auto w-full max-w-sm lg:ml-auto">
            <MediaImage
              {...footer.image}
              className="rounded-2xl"
              sizes="(min-width: 1024px) 384px, 90vw"
            />
          </div>
        </div>
      </Container>
      <p className="px-5 pb-6 pt-8 text-center text-[11px] uppercase tracking-[0.16em] text-cream/40 md:px-8">
        {footer.legal}
      </p>
    </Section>
  );
}
