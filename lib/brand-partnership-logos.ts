/**
 * Brand partnerships — “Previous clients” logos.
 * Source: site-assets/brand-partnership-logos/ (synced to public via npm run sync-assets).
 */
export const brandPartnershipLogos = [
  {
    src: "/site-assets/brand-partnership-logos/amazon-prime-video.png",
    alt: "Amazon Prime Video",
  },
  {
    src: "/site-assets/brand-partnership-logos/amazon-music.png",
    alt: "Amazon Music",
  },
  {
    src: "/site-assets/brand-partnership-logos/c4-energy.jpg",
    alt: "C4 Energy",
  },
  {
    src: "/site-assets/brand-partnership-logos/coach.png",
    alt: "Coach",
  },
  {
    src: "/site-assets/brand-partnership-logos/biodance.webp",
    alt: "Biodance",
  },
  {
    src: "/site-assets/brand-partnership-logos/case.webp",
    alt: "CASE",
  },
  {
    src: "/site-assets/brand-partnership-logos/brand-client.png",
    alt: "Brand client",
  },
  {
    src: "/site-assets/brand-partnership-logos/match-group.png",
    alt: "Match Group",
    /** White / light artwork: use a dark tile so it reads on the light section */
    tileClass:
      "border-neutral-800 bg-neutral-950 ring-neutral-800 hover:border-neutral-700",
  },
] as const;
