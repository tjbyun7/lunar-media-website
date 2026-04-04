"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { lunarLogoUrl } from "@/lib/lunarmedia-assets";

const MAILTO = "mailto:management+w@lunarmedia.io";

export function SiteNav({
  variant = "dark",
}: {
  variant?: "dark" | "light";
}) {
  const pathname = usePathname();
  const isDark = variant === "dark";
  const linkClass = (active: boolean) =>
    [
      "text-sm font-medium md:text-base transition-colors",
      isDark
        ? active
          ? "text-white"
          : "text-white/80 hover:text-white"
        : active
          ? "text-black"
          : "text-black/70 hover:text-black",
      active ? "underline underline-offset-4" : "",
    ].join(" ");

  const ctaClass = isDark
    ? "rounded-full bg-white px-6 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-200 md:px-8 md:text-base"
    : "rounded-full bg-black px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800 md:px-8 md:text-base";

  return (
    <header
      className={`relative z-20 flex flex-wrap items-center justify-between gap-4 ${isDark ? "" : "border-b border-black/10 pb-6"}`}
    >
      <Link
        href="/"
        className="flex items-center gap-3 transition-opacity hover:opacity-90"
      >
        <Image
          src={lunarLogoUrl}
          alt=""
          width={160}
          height={160}
          className={`h-8 w-auto shrink-0 object-contain md:h-9 ${isDark ? "" : "brightness-0"}`}
          priority={isDark}
        />
        <span
          className={`text-2xl font-light tracking-tight md:text-3xl ${isDark ? "text-white" : "text-black"}`}
        >
          lunar media
        </span>
      </Link>

      <nav
        className="flex flex-wrap items-center gap-x-4 gap-y-2 md:gap-x-6 lg:gap-x-10"
        aria-label="Main"
      >
        <Link
          href="/"
          className={linkClass(pathname === "/")}
          aria-current={pathname === "/" ? "page" : undefined}
        >
          Home
        </Link>
        <Link
          href="/for-creators"
          className={linkClass(pathname === "/for-creators")}
          aria-current={pathname === "/for-creators" ? "page" : undefined}
        >
          For Creators
        </Link>
        <Link
          href="/music-marketing-clients"
          className={linkClass(pathname === "/music-marketing-clients")}
          aria-current={
            pathname === "/music-marketing-clients" ? "page" : undefined
          }
        >
          Music Marketing
        </Link>
        <Link
          href="/brand-partnerships"
          className={linkClass(pathname === "/brand-partnerships")}
          aria-current={
            pathname === "/brand-partnerships" ? "page" : undefined
          }
        >
          Brand Partnerships
        </Link>
        <a href={MAILTO} className={ctaClass}>
          Get in touch
        </a>
      </nav>
    </header>
  );
}
