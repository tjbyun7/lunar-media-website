/**
 * Static images: source of truth `site-assets/images/` → synced to `public/site-assets/images/`
 * (run `npm run sync-assets`). Remote URLs: site-assets/lunarmedia-links.md
 */
export const LUNARMEDIA_ORIGIN = "https://www.lunarmedia.io";

const IMG = "/site-assets/images";

export const lunarLogoUrl = `${IMG}/lunarnobg.png`;

export const faviconUrl = `${IMG}/favicon.ico`;

/** Optional intrinsic dimensions help `next/image` preserve aspect ratio for wide logos. */
export type PartnerLogo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export const partnerLogos: readonly PartnerLogo[] = [
  {
    src: `${IMG}/landing-client-ikea.svg`,
    alt: "IKEA",
  },
  {
    src: `${IMG}/landing-client-timberland.png`,
    alt: "Timberland",
  },
  {
    src: `${IMG}/landing-client-arencia.webp`,
    alt: "Arencia",
  },
  {
    src: `${IMG}/landing-client-icon.webp`,
    alt: "Brand partner",
  },
  {
    src: `${IMG}/landing-client-media.jpg`,
    alt: "Brand partner",
  },
  {
    /** GIF asset; use `.gif` extension (bytes were mislabeled `.png` in source). */
    src: `${IMG}/landing-client-forever-21.gif`,
    alt: "Forever 21",
    width: 240,
    height: 240,
  },
];

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
