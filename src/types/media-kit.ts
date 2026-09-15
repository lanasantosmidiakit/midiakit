export type AspectRatio =
  | "square"
  | "story"
  | "portrait"
  | "landscape"
  | "wide"
  | "hero"
  | "feedback"
  | "poster"
  | "about"
  | "measures"
  | "tile"
  | "bio";

export type ThemeTone = "light" | "dark";

export type ImageAsset = {
  alt: string;
  aspect: AspectRatio;
  src?: string;
  label?: string;
  kind?: "image" | "video";
  href?: string;
};

export type SocialLink = {
  id: "instagram" | "tiktok";
  label: string;
  handle: string;
  href: string;
};

export type Contact = {
  email: string;
  phone: string;
  whatsappHref: string;
  socials: SocialLink[];
};

export type BioBanner = {
  id: string;
  title: string;
  summary: string;
  href: string;
  image: ImageAsset;
};

export type BioCoupon = {
  id: string;
  title: string;
  summary: string;
  coupon: string;
  href: string;
  image: ImageAsset;
};

export type LinkInBioContent = {
  name: string;
  handle: string;
  tagline: string;
  image: ImageAsset;
  banner: BioBanner;
  coupons: BioCoupon[];
};

export type Metric = {
  id: string;
  label: string;
  value: string;
  hint: string;
};

export type BarDatum = {
  id: string;
  label: string;
  value: number;
  suffix?: string;
};

export type HeroContent = {
  kicker: string;
  name: string;
  surname: string;
  headline: string[];
  tagline: string;
  legal: string;
  image: ImageAsset;
};

export type AboutContent = {
  marquee: string;
  eyebrow: string;
  greeting: string;
  title: string;
  anchors: Metric[];
  paragraphs: string[];
  close: string;
  image: ImageAsset;
};

export type ProfileContent = {
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle: string;
  body: string;
  caseNote: string;
  mixTitle: string;
  mixNote: string;
  mix: BarDatum[];
  metrics: Metric[];
  phones: ImageAsset[];
};

export type AudienceChannel = {
  id: "instagram" | "tiktok";
  label: string;
  gender: BarDatum[];
  age: BarDatum[];
};

export type AudienceContent = {
  eyebrow: string;
  title: string;
  highlight: string;
  paragraphs: string[];
  whoIsNot: string;
  classes: string;
  channels: AudienceChannel[];
  locations: BarDatum[];
};

export type ResultItem = {
  id: string;
  title: string;
  tag: string;
  views?: string;
  stats?: string;
  href?: string;
  image: ImageAsset;
};

export type ContentCreationContent = {
  eyebrow: string;
  title: string;
  highlight: string;
  rating: string;
  paragraphs: string[];
  frames: ImageAsset[];
  resultsTitle: string;
  resultsBody: string;
  results: ResultItem[];
};

export type Brand = {
  id: string;
  name: string;
  logo: ImageAsset;
};

export type BrandsContent = {
  eyebrow: string;
  title: string;
  highlight: string;
  intro: string;
  items: Brand[];
};

export type Feedback = {
  id: string;
  quote?: string;
  author: string;
  image?: ImageAsset;
};

export type FeedbacksContent = {
  eyebrow: string;
  title: string;
  items: Feedback[];
};

export type ModelStatsContent = {
  eyebrow: string;
  title: string;
  shipping: string;
  image: ImageAsset;
};

export type Deliverable = {
  id: string;
  title: string;
  tags: string;
  price: string;
  body: string;
  layout: "image-right" | "image-left";
  tone: ThemeTone;
  gallery?: "grid" | "carousel";
  images: ImageAsset[];
};

export type DeliverablesContent = {
  eyebrow: string;
  title: string;
  footerNote: string;
  expectation: string;
  items: Deliverable[];
};

export type FooterContent = {
  eyebrow: string;
  title: string;
  highlight: string;
  body: string;
  legal: string;
  image: ImageAsset;
};

export type SiteMeta = {
  title: string;
  description: string;
  keywords: string[];
};

export type MediaKit = {
  site: SiteMeta;
  linkInBio: LinkInBioContent;
  contact: Contact;
  hero: HeroContent;
  about: AboutContent;
  profile: ProfileContent;
  audience: AudienceContent;
  contentCreation: ContentCreationContent;
  brands: BrandsContent;
  feedbacks: FeedbacksContent;
  modelStats: ModelStatsContent;
  deliverables: DeliverablesContent;
  footer: FooterContent;
};
