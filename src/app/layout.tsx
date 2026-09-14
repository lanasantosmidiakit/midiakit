import type { Metadata } from "next";
import { Open_Sans, Playfair_Display } from "next/font/google";
import { mediaKit } from "@/data/media-kit";
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

export const metadata: Metadata = {
  title: mediaKit.site.title,
  description: mediaKit.site.description,
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
