import type { Metadata } from "next";
import { mediaKit } from "@/data/media-kit";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { mediaKitPath, mediaKitUrl, siteImage } from "@/lib/site";

const title = mediaKit.site.title;
const description = mediaKit.site.description;

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  keywords: mediaKit.site.keywords,
  category: "media kit",
  alternates: {
    canonical: mediaKitPath,
  },
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    url: mediaKitUrl,
    siteName: "Lana Santos",
    title,
    description,
    images: [
      {
        url: siteImage.share,
        alt: "Lana Santos, Brazilian Beauty & Fashion Creator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [siteImage.share],
  },
};

export default function MediaKitLayout({ children }: LayoutProps<"/midiakit">) {
  return (
    <>
      <SeoJsonLd page="midiakit" />
      {children}
    </>
  );
}
