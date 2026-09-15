import { mediaKit } from "@/data/media-kit";
import { mediaKitUrl, siteImage, siteUrl } from "@/lib/site";

type SeoJsonLdProps = {
  page?: "home" | "midiakit";
};

export function SeoJsonLd({ page = "home" }: SeoJsonLdProps) {
  const { site, contact, hero, linkInBio } = mediaKit;
  const logo = `${siteUrl}${siteImage.favicon}`;
  const isMediaKit = page === "midiakit";

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lana Santos",
    alternateName: ["lanasancost", "bylanasantos"],
    description: isMediaKit ? site.description : linkInBio.tagline,
    image: logo,
    jobTitle: "Brazilian Beauty & Fashion Creator",
    email: contact.email,
    telephone: "+55-91-98492-2999",
    url: siteUrl,
    sameAs: contact.socials.map((social) => social.href),
    knowsAbout: ["beleza", "moda", "UGC", "conteúdo para marcas"],
  };

  const webPage = isMediaKit
    ? {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        name: site.title,
        description: site.description,
        url: mediaKitUrl,
        inLanguage: "pt-BR",
        headline: hero.headline.join(" "),
        primaryImageOfPage: logo,
        mainEntity: {
          "@type": "Person",
          name: "Lana Santos",
        },
      }
    : {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: linkInBio.name,
        description: linkInBio.tagline,
        url: siteUrl,
        inLanguage: "pt-BR",
        publisher: {
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
