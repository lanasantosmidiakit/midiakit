import { mediaKit } from "@/data/media-kit";
import type { ThemeTone } from "@/types/media-kit";

type ContactButtonProps = {
  tone?: ThemeTone;
  className?: string;
};

export function ContactButton({
  tone = "light",
  className = "",
}: ContactButtonProps) {
  const palette =
    tone === "dark"
      ? "border-cream/40 text-cream hover:border-cream hover:bg-cream/10"
      : "border-coffee/25 text-coffee hover:border-coffee hover:bg-coffee hover:text-cream";

  return (
    <a
      href={mediaKit.contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center border px-5 py-3 text-[11px] font-medium uppercase tracking-[0.2em] transition ${palette} ${className}`}
    >
      Entre em contato
    </a>
  );
}
