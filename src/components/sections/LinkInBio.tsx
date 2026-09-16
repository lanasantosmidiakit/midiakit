"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { mediaKit } from "@/data/media-kit";
import { MediaImage } from "@/components/ui/MediaImage";
import type { BioCoupon, ImageAsset } from "@/types/media-kit";

type BannerCard = {
  id: string;
  title: string;
  summary: string;
  image: ImageAsset;
  href?: string;
  coupon?: string;
};

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden="true">
      <path d="M14.2 3v11.1a3.2 3.2 0 1 1-2.7-3.16V8.2a6.5 6.5 0 1 0 5.5 6.4V8.7A8.4 8.4 0 0 0 21 10.1V6.8a8.3 8.3 0 0 1-4.3-1.6A8.4 8.4 0 0 1 14.2 3Z" />
    </svg>
  );
}

function CouponModal({
  coupon,
  onClose,
}: {
  coupon: BioCoupon;
  onClose: () => void;
}) {
  const titleId = useId();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  async function copyCoupon() {
    await navigator.clipboard.writeText(coupon.coupon);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-coffee/75 p-5"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="w-full max-w-sm bg-cream p-8 text-coffee shadow-[0_20px_50px_rgba(107,33,54,0.28)]"
        onClick={(event) => event.stopPropagation()}
      >
        <p className="text-[11px] uppercase tracking-[0.2em] text-wine/50">
          Cupom
        </p>
        <h2 id={titleId} className="mt-2 font-serif text-3xl leading-none">
          {coupon.title}
        </h2>
        <p className="mt-6 border border-coffee/15 bg-cream-dark/40 px-4 py-4 text-center font-serif text-2xl tracking-wide">
          {coupon.coupon}
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <button
            type="button"
            onClick={copyCoupon}
            className="border border-coffee px-5 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-coffee transition hover:bg-coffee hover:text-cream"
          >
            {copied ? "Cupom copiado" : "Copiar cupom"}
          </button>
          <a
            href={coupon.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-coffee bg-coffee px-5 py-3 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-cream transition hover:bg-transparent hover:text-coffee"
          >
            Ir para o site
          </a>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="mt-5 w-full text-[11px] uppercase tracking-[0.18em] text-coffee/45 transition hover:text-coffee"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}

function BioBannerCard({
  item,
  reversed,
  onOpenCoupon,
}: {
  item: BannerCard;
  reversed: boolean;
  onOpenCoupon?: () => void;
}) {
  const buttonClass =
    "mt-3 inline-flex w-fit border border-cream/35 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-cream transition hover:border-cream hover:bg-cream hover:text-coffee";

  return (
    <article
      className={`flex h-[168px] overflow-hidden rounded-2xl bg-cream/8 ring-1 ring-cream/12 ${
        reversed ? "flex-row-reverse" : ""
      }`}
    >
      <div className="flex min-w-0 flex-1 flex-col justify-center px-5 py-4">
        <h2 className="truncate font-serif text-2xl leading-tight">
          {item.title}
        </h2>
        <p className="mt-1 line-clamp-2 text-sm leading-snug text-cream/70">
          {item.summary}
        </p>
        {item.coupon && onOpenCoupon ? (
          <button type="button" onClick={onOpenCoupon} className={buttonClass}>
            Saiba mais
          </button>
        ) : (
          <Link href={item.href ?? "/midiakit"} className={buttonClass}>
            Saiba mais
          </Link>
        )}
      </div>
      <div className="relative w-[42%] shrink-0 overflow-hidden">
        <MediaImage
          {...item.image}
          unconstrained
          className="absolute inset-0 h-full w-full"
          sizes="220px"
        />
      </div>
    </article>
  );
}

export function LinkInBio() {
  const { linkInBio, contact } = mediaKit;
  const [activeCoupon, setActiveCoupon] = useState<BioCoupon | null>(null);

  const cards: BannerCard[] = linkInBio.coupons.map((coupon) => ({
    id: coupon.id,
    title: coupon.title,
    summary: coupon.summary,
    image: coupon.image,
    href: coupon.href,
    coupon: coupon.coupon,
  }));

  return (
    <main className="flex min-h-dvh flex-col bg-coffee text-cream">
      <div className="mx-auto w-full max-w-lg">
        <MediaImage
          {...linkInBio.image}
          className="w-full"
          sizes="(min-width: 512px) 512px, 100vw"
          priority
        />
        <h1 className="sr-only">{linkInBio.name}</h1>

        <div className="flex flex-col items-center px-5 pt-8 pb-14">
          <ul className="flex items-center gap-4">
            {contact.socials.map((social) => (
              <li key={social.id}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex size-12 items-center justify-center rounded-full border border-cream/25 text-cream transition hover:border-cream hover:bg-cream/10"
                >
                  {social.id === "instagram" ? <InstagramIcon /> : <TikTokIcon />}
                </a>
              </li>
            ))}
          </ul>

          <ul className="mt-10 flex w-full flex-col gap-4">
            <li>
              <BioBannerCard item={linkInBio.banner} reversed={false} />
            </li>
          </ul>

          <div className="mt-12 w-full text-center">
            <p className="text-[11px] uppercase tracking-[0.28em] text-rose-gold">
              {linkInBio.couponsEyebrow}
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-none">
              {linkInBio.couponsTitle.replace(/\s+\S+$/, " ")}
              <span className="italic font-normal">
                {linkInBio.couponsTitle.trim().split(" ").pop()}
              </span>
            </h2>
            <div className="mx-auto mt-5 h-px w-16 bg-cream/25" />
          </div>

          <ul className="mt-8 flex w-full flex-col gap-4">
            {cards.map((item, index) => {
              const coupon = linkInBio.coupons.find(
                (entry) => entry.id === item.id,
              );

              return (
                <li key={item.id}>
                  <BioBannerCard
                    item={item}
                    reversed={index % 2 === 0}
                    onOpenCoupon={
                      coupon ? () => setActiveCoupon(coupon) : undefined
                    }
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <p className="px-6 pb-8 text-center text-[10px] uppercase tracking-[0.16em] text-cream/40">
        © 2026 Lana Santos
      </p>

      {activeCoupon ? (
        <CouponModal
          coupon={activeCoupon}
          onClose={() => setActiveCoupon(null)}
        />
      ) : null}
    </main>
  );
}
