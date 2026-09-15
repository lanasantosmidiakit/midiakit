export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

export const mediaKitPath = "/midiakit";
export const mediaKitUrl = `${siteUrl}${mediaKitPath}`;

export const siteImage = {
  favicon: "/media/logo.webp",
  share: "/media/logo.webp",
};
