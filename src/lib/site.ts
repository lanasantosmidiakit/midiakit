export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

export const siteImage = {
  favicon: "/media/logo.jpg",
  share: "/media/logo.jpg",
};
