import type { Metadata, Viewport } from "next";
import { Open_Sans, Playfair_Display } from "next/font/google";
import { mediaKit } from "@/data/media-kit";
import { siteImage, siteUrl } from "@/lib/site";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const title = mediaKit.linkInBio.name;
const description =
  "Lana Santos, Brazilian Beauty & Fashion Creator. Instagram, TikTok, mídia kit e contato.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Lana Santos",
  },
  description,
  keywords: [
    "Lana Santos",
    "lanasancost",
    "criadora de conteúdo",
    "beleza",
    "moda",
  ],
  applicationName: "Lana Santos",
  authors: [{ name: "Lana Santos", url: siteUrl }],
  creator: "Lana Santos",
  publisher: "Lana Santos",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: siteImage.favicon, type: "image/webp" },
    ],
    apple: siteImage.favicon,
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    url: siteUrl,
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

export const viewport: Viewport = {
  themeColor: "#6B2136",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${openSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream font-sans text-coffee">
        {children}
      </body>
    </html>
  );
}
