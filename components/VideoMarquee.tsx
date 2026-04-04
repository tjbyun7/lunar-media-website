"use client";

import Marquee from "react-fast-marquee";
import { creatorVideoUrls } from "@/lib/lunarmedia-assets";

function VideoCard({ src }: { src: string }) {
  return (
    <div className="mx-3 inline-flex w-[min(17rem,72vw)] shrink-0 overflow-hidden rounded-2xl bg-black shadow-lg ring-1 ring-black/5">
      <video
        className="aspect-[9/16] h-auto w-full object-cover"
        src={src}
        muted
        loop
        autoPlay
        playsInline
        preload="metadata"
      />
    </div>
  );
}

export function VideoMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-10">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent"
        aria-hidden
      />
      <Marquee speed={42} gradient={false} pauseOnHover>
        {creatorVideoUrls.map((src) => (
          <VideoCard key={src} src={src} />
        ))}
      </Marquee>
    </div>
  );
}
