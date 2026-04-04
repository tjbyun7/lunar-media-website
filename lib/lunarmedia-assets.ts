/**
 * Static images: source of truth `site-assets/images/` → synced to `public/site-assets/images/`
 * (run `npm run sync-assets`). Remote URLs: site-assets/lunarmedia-links.md
 */
export const LUNARMEDIA_ORIGIN = "https://www.lunarmedia.io";

const IMG = "/site-assets/images";

export const lunarLogoUrl = `${IMG}/lunarnobg.png`;

export const faviconUrl = `${IMG}/favicon.ico`;

export const partnerLogos = [
  {
    src: `${IMG}/88rising_logo.png`,
    alt: "88rising",
  },
  {
    src: `${IMG}/margiela.png`,
    alt: "Maison Margiela",
  },
  {
    src: `${IMG}/case.png`,
    alt: "CASE",
  },
  {
    src: `${IMG}/tuzu.jpeg`,
    alt: "Tuzu",
  },
  {
    src: `${IMG}/mediheal.webp`,
    alt: "Mediheal",
  },
  {
    src: `${IMG}/galactic.svg`,
    alt: "Galactic",
  },
] as const;

/** Hosted on production; swap to local `/site-assets/videos/…` if you add files + sync */
export const creatorVideoUrls = [
  `${LUNARMEDIA_ORIGIN}/videos/cat.mp4`,
  `${LUNARMEDIA_ORIGIN}/videos/peachy_case.mp4`,
  `${LUNARMEDIA_ORIGIN}/videos/ruby_medi.mp4`,
  `${LUNARMEDIA_ORIGIN}/videos/ryan.mp4`,
  `${LUNARMEDIA_ORIGIN}/videos/sophie_case.mp4`,
  `${LUNARMEDIA_ORIGIN}/videos/catyuzu.mp4`,
  `${LUNARMEDIA_ORIGIN}/videos/tsubasa.mp4`,
  `${LUNARMEDIA_ORIGIN}/videos/yuna_yuzu.mp4`,
] as const;
