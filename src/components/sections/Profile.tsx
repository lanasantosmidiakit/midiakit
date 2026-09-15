import { mediaKit } from "@/data/media-kit";
import { BarChart } from "@/components/ui/BarChart";
import { ProfileShowcase } from "@/components/sections/ProfileShowcase";
import { ContactButton } from "@/components/ui/ContactButton";
import { Container, Section, SplitHeading } from "@/components/ui/Section";

export function Profile() {
  const { profile } = mediaKit;

  return (
    <Section id="perfil" tone="dark" className="overflow-hidden">
      <Container className="max-w-7xl py-16 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <SplitHeading
            title={profile.title}
            highlight={profile.highlight}
            className="md:text-7xl"
          />
          <p className="mt-5 text-sm text-cream/65 md:text-base">
            {profile.subtitle}
          </p>
        </div>

        <ProfileShowcase />

        <div className="mx-auto mt-20 max-w-xl">
          <p className="mb-2 text-center text-xs uppercase tracking-[0.18em] text-rose">
            {profile.mixTitle}
          </p>
          <p className="mb-8 text-center text-sm text-cream/60">
            {profile.mixNote}
          </p>
          <BarChart items={profile.mix} />
        </div>

        <p className="mx-auto mt-16 max-w-3xl text-center text-base leading-relaxed text-cream/80 md:text-lg">
          {profile.body}
        </p>
        <p className="mx-auto mt-6 max-w-3xl text-center text-sm italic text-cream/60">
          {profile.caseNote}
        </p>
        <div className="mt-12 flex justify-center">
          <ContactButton tone="dark" />
        </div>
      </Container>
    </Section>
  );
}
