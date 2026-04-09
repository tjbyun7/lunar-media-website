"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { MeshBackgroundSvg } from "@/components/ui/mesh-background-svg";

type Ripple = { id: number; x: number; y: number };

const MAILTO = "mailto:prospects@lunarmedia.io";

/**
 * Animated hero shell: grid, mouse glow, ripples, word stagger, floating dots.
 * Copy and colors match the Lunar Media homepage hero (see app/page.tsx).
 */
export default function DigitalSerenityAnimatedLandingPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [mouseGradientStyle, setMouseGradientStyle] = useState({
    left: "0px",
    top: "0px",
    opacity: 0,
  });
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [scrolled, setScrolled] = useState(false);

  const runWordAnimation = useCallback(() => {
    const root = rootRef.current;
    if (!root) return;
    const wordElements = root.querySelectorAll<HTMLElement>(".word-animate");
    wordElements.forEach((word) => {
      const delay = parseInt(word.getAttribute("data-delay") ?? "0", 10);
      window.setTimeout(() => {
        word.style.animation = "ds-word-appear 0.8s ease-out forwards";
      }, delay);
    });
  }, []);

  useEffect(() => {
    const t = window.setTimeout(runWordAnimation, 500);
    return () => window.clearTimeout(t);
  }, [runWordAnimation]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMouseGradientStyle({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`,
        opacity: 1,
      });
    };
    const handleMouseLeave = () => {
      setMouseGradientStyle((prev) => ({ ...prev, opacity: 0 }));
    };

    root.addEventListener("mousemove", handleMouseMove);
    root.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      root.removeEventListener("mousemove", handleMouseMove);
      root.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const handleClick = (e: MouseEvent) => {
      const newRipple: Ripple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setRipples((prev) => [...prev, newRipple]);
      window.setTimeout(
        () => setRipples((prev) => prev.filter((r) => r.id !== newRipple.id)),
        1000,
      );
    };

    root.addEventListener("click", handleClick);
    return () => root.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const wordElements = root.querySelectorAll<HTMLElement>(".word-animate");
    const handleWordEnter = (e: Event) => {
      const t = e.target as HTMLElement;
      t.style.textShadow = "0 0 20px rgb(255 255 255 / 0.35)";
    };
    const handleWordLeave = (e: Event) => {
      const t = e.target as HTMLElement;
      t.style.textShadow = "none";
    };
    wordElements.forEach((word) => {
      word.addEventListener("mouseenter", handleWordEnter);
      word.addEventListener("mouseleave", handleWordLeave);
    });
    return () => {
      wordElements.forEach((word) => {
        word.removeEventListener("mouseenter", handleWordEnter);
        word.removeEventListener("mouseleave", handleWordLeave);
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const root = rootRef.current;
      if (!root || scrolled) return;
      setScrolled(true);
      const elements = root.querySelectorAll<HTMLElement>(
        ".floating-element-animate",
      );
      elements.forEach((el, index) => {
        const delayMs =
          (parseFloat(el.style.animationDelay || "0") || 0) * 1000 + index * 100;
        window.setTimeout(() => {
          el.style.animationPlayState = "running";
          el.style.opacity = "";
        }, delayMs);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <div
      ref={rootRef}
      id="digital-serenity-root"
      className="relative flex min-h-0 flex-1 flex-col overflow-hidden bg-black font-sans text-white"
    >
      <MeshBackgroundSvg variant="dark" idPrefix="hero" />

      <div
        className="floating-element-animate"
        style={{ top: "25%", left: "15%", animationDelay: "0.5s" }}
      />
      <div
        className="floating-element-animate"
        style={{ top: "60%", left: "85%", animationDelay: "1s" }}
      />
      <div
        className="floating-element-animate"
        style={{ top: "40%", left: "10%", animationDelay: "1.5s" }}
      />
      <div
        className="floating-element-animate"
        style={{ top: "75%", left: "90%", animationDelay: "2s" }}
      />

      <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-between px-6 py-10 sm:px-8 sm:py-12 md:px-16 md:py-16">
        {/* [BRAND REVIEW: original hero has no separate top tagline; decorative rule only] */}
        <div className="text-center" aria-hidden>
          <div className="mx-auto mt-2 h-px w-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-60 sm:w-16" />
        </div>

        <div className="relative mx-auto max-w-5xl text-center">
          <h1 className="text-decoration-animate text-5xl font-medium leading-[1.05] tracking-tight text-white lg:text-8xl">
            <div className="mb-4 md:mb-6">
              <span className="word-animate" data-delay="700">
                Representing
              </span>{" "}
              <span className="word-animate" data-delay="850">
                the
              </span>{" "}
              <span className="word-animate" data-delay="1000">
                next-gen
              </span>
            </div>
            <div className="mb-4 md:mb-6">
              <span className="word-animate" data-delay="1200">
                of
              </span>{" "}
              <span className="word-animate" data-delay="1350">
                creators
              </span>{" "}
              <span className="word-animate" data-delay="1500">
                shaping
              </span>
            </div>
            <div className="text-5xl font-medium leading-[1.05] tracking-tight lg:text-8xl">
              <span className="word-animate" data-delay="1700">
                the
              </span>{" "}
              <span className="word-animate" data-delay="1850">
                future
              </span>{" "}
              <span className="word-animate text-white/45" data-delay="2000">
                of media.
              </span>
            </div>
          </h1>
          <div
            className="absolute -left-6 top-1/2 hidden h-px w-3 -translate-y-1/2 bg-white/40 opacity-0 sm:-left-8 sm:block sm:w-4"
            style={{
              animation: "ds-word-appear 1s ease-out forwards",
              animationDelay: "3.2s",
            }}
          />
          <div
            className="absolute -right-6 top-1/2 hidden h-px w-3 -translate-y-1/2 bg-white/40 opacity-0 sm:-right-8 sm:block sm:w-4"
            style={{
              animation: "ds-word-appear 1s ease-out forwards",
              animationDelay: "3.4s",
            }}
          />
        </div>

        <div className="text-center">
          <div className="mx-auto mb-4 h-px w-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-60 sm:w-16" />
          <div
            className="opacity-0"
            style={{
              animation: "ds-word-appear 1s ease-out forwards",
              animationDelay: "4.2s",
            }}
          >
            <a
              href={MAILTO}
              className="inline-flex rounded-full bg-white px-12 py-2 text-xl font-medium text-black transition-colors duration-200 hover:bg-gray-200"
            >
              Get in touch
            </a>
          </div>
          <div
            className="mt-6 flex justify-center space-x-4 opacity-0"
            style={{
              animation: "ds-word-appear 1s ease-out forwards",
              animationDelay: "4.5s",
            }}
            aria-hidden
          >
            <div className="h-1 w-1 rounded-full bg-white/40" />
            <div className="h-1 w-1 rounded-full bg-white/60" />
            <div className="h-1 w-1 rounded-full bg-white/40" />
          </div>
        </div>
      </div>

      <div
        id="mouse-gradient-lunar"
        className="pointer-events-none fixed z-[5] h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(156_163_175/0.12),rgb(107_114_128/0.08),transparent_70%)] blur-xl sm:h-80 sm:w-80 sm:blur-2xl md:h-96 md:w-96 md:blur-3xl"
        style={{
          left: mouseGradientStyle.left,
          top: mouseGradientStyle.top,
          opacity: mouseGradientStyle.opacity,
          transition:
            "left 70ms linear, top 70ms linear, opacity 300ms ease-out",
          willChange: "left, top, opacity",
        }}
      />

      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="ds-ripple-effect pointer-events-none fixed z-[15]"
          style={{ left: `${ripple.x}px`, top: `${ripple.y}px` }}
        />
      ))}
    </div>
  );
}
