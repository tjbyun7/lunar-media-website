"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { lunarLogoUrl } from "@/lib/lunarmedia-assets";

const MAILTO = "mailto:prospects@lunarmedia.io";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/for-creators", label: "For Creators" },
  { href: "/music-marketing-clients", label: "Music Marketing" },
  { href: "/brand-partnerships", label: "Brand Partnerships" },
] as const;

export function SiteNav({
  variant = "dark",
}: {
  variant?: "dark" | "light";
}) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const isDark = variant === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const linkClass = (active: boolean) =>
    [
      "text-sm font-medium transition-colors md:text-base",
      isDark
        ? active
          ? "text-white"
          : "text-white/80 hover:text-white"
        : active
          ? "text-black"
          : "text-black/70 hover:text-black",
      active ? "underline underline-offset-4" : "",
    ].join(" ");

  const mobileLinkClass = (active: boolean) =>
    [
      "block rounded-lg px-2 py-3.5 text-lg font-medium transition-colors",
      isDark
        ? active
          ? "bg-white/10 text-white"
          : "text-white/90 hover:bg-white/5 hover:text-white"
        : active
          ? "bg-black/5 text-black"
          : "text-black/80 hover:bg-black/[0.04] hover:text-black",
    ].join(" ");

  const ctaClass = isDark
    ? "inline-flex rounded-full bg-white px-6 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-200 md:px-8 md:text-base"
    : "inline-flex rounded-full bg-black px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800 md:px-8 md:text-base";

  const mobileCtaClass = isDark
    ? "mt-6 inline-flex w-full justify-center rounded-full bg-white py-3.5 text-center text-base font-medium text-black transition-colors hover:bg-gray-200"
    : "mt-6 inline-flex w-full justify-center rounded-full bg-black py-3.5 text-center text-base font-medium text-white transition-colors hover:bg-neutral-800";

  const menuBg = isDark ? "bg-black" : "bg-white";
  const menuBorder = isDark ? "border-white/10" : "border-black/10";

  return (
    <>
      <header
        className={`relative z-20 flex w-full items-center justify-between gap-4 ${isDark ? "" : "border-b border-black/10 pb-6"}`}
      >
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2 transition-opacity hover:opacity-90 sm:gap-3"
          onClick={() => setMobileOpen(false)}
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
            className={`truncate text-xl font-light tracking-tight sm:text-2xl md:text-3xl ${isDark ? "text-white" : "text-black"}`}
          >
            lunar media
          </span>
        </Link>

        <button
          type="button"
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border transition-colors lg:hidden ${isDark ? "border-white/15 text-white hover:bg-white/10" : "border-black/15 text-black hover:bg-black/5"}`}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>

        <nav
          className="hidden items-center gap-x-6 lg:flex xl:gap-x-10"
          aria-label="Main"
        >
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={linkClass(pathname === item.href)}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <a href={MAILTO} className={ctaClass}>
            Get in touch
          </a>
        </nav>
      </header>

      {mounted &&
        mobileOpen &&
        createPortal(
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Main navigation"
            className={`fixed inset-0 z-[9999] flex min-h-[100dvh] flex-col lg:hidden ${menuBg}`}
            style={{
              paddingTop: "max(0.75rem, env(safe-area-inset-top))",
              paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))",
            }}
          >
            <div
              className={`flex shrink-0 items-center justify-between border-b px-4 py-3 sm:px-6 ${menuBorder}`}
            >
              <Link
                href="/"
                className="flex min-w-0 items-center gap-2"
                onClick={() => setMobileOpen(false)}
              >
                <Image
                  src={lunarLogoUrl}
                  alt=""
                  width={160}
                  height={160}
                  className={`h-8 w-auto shrink-0 object-contain ${isDark ? "" : "brightness-0"}`}
                />
                <span
                  className={`truncate text-xl font-light tracking-tight ${isDark ? "text-white" : "text-black"}`}
                >
                  lunar media
                </span>
              </Link>
              <button
                type="button"
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border transition-colors ${isDark ? "border-white/15 text-white hover:bg-white/10" : "border-black/15 text-black hover:bg-black/5"}`}
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav
              className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4 py-6 sm:px-6"
              aria-label="Main"
            >
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={mobileLinkClass(pathname === item.href)}
                  aria-current={pathname === item.href ? "page" : undefined}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={MAILTO}
                className={mobileCtaClass}
                onClick={() => setMobileOpen(false)}
              >
                Get in touch
              </a>
            </nav>
          </div>,
          document.body,
        )}
    </>
  );
}
