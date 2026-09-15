import { LinkInBio } from "@/components/sections/LinkInBio";
import { SeoJsonLd } from "@/components/SeoJsonLd";

export default function Home() {
  return (
    <>
      <SeoJsonLd page="home" />
      <LinkInBio />
    </>
  );
}
