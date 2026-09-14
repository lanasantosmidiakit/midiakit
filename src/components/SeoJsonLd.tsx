import { mediaKit } from "@/data/media-kit";
import { siteImage, siteUrl } from "@/lib/site";

export function SeoJsonLd() {
  const { site, contact, hero } = mediaKit;
  const logo = `${siteUrl}${siteImage.favicon}`;

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lana Santos",
    alternateName: ["lanasancost", "bylanasantos"],
    description: site.description,
    image: logo,
    jobTitle: "Brazilian Beauty & Fashion Creator",
    email: contact.email,
    telephone: "+55-91-98492-2999",
    url: siteUrl,
    sameAs: contact.socials.map((social) => social.href),
    knowsAbout: ["beleza", "moda", "UGC", "conteúdo para marcas"],
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: site.title,
    description: site.description,
    url: siteUrl,
    inLanguage: "pt-BR",
    headline: hero.headline.join(" "),
    primaryImageOfPage: logo,
    mainEntity: {
      "@type": "Person",
      name: "Lana Santos",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
    </>
  );
}
