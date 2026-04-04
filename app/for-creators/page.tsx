import type { Metadata } from "next";
import Link from "next/link";
import { ContactUsButton } from "@/components/for-creators/ContactUsButton";
import { Reveal } from "@/components/Reveal";
import { SiteNav } from "@/components/SiteNav";
import {
  FOR_CREATORS_BELIEFS,
  FOR_CREATORS_IDEAL,
  FOR_CREATORS_SERVICES,
  FOR_CREATORS_WHY,
} from "@/lib/for-creators-content";

export const metadata: Metadata = {
  title: "For Creators | Lunar Media",
  description:
    "Lunar Media partners with creators on management, monetization, and long-term business growth — strategic, hands-on support beyond one-off brand deals.",
};

const MAILTO = "mailto:management+w@lunarmedia.io";

export default function ForCreatorsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-20 pt-8 md:px-10 lg:px-16 lg:pb-28 lg:pt-10">
        <div
          className="animate-hero-orb pointer-events-none absolute -right-24 top-0 h-[min(420px,70vw)] w-[min(780px,140vw)] max-w-none rounded-full blur-[100px] md:right-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgb(156 163 175 / 0.38) 0%, transparent 68%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full blur-[80px] md:h-80 md:w-80"
          style={{
            background:
              "radial-gradient(circle, rgb(156 163 175 / 0.12) 0%, transparent 70%)",
          }}
          aria-hidden
        />

        <SiteNav variant="dark" />

        <div className="relative z-10 mx-auto max-w-4xl pt-16 text-center md:pt-24">
          <p className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white/90">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/80"
              aria-hidden
            />
            For creators
          </p>

          <h1 className="text-5xl font-medium leading-[0.98] tracking-tight md:text-7xl lg:text-8xl">
            <span className="block">Build beyond</span>
            <span className="mt-1 block text-white/50">the feed.</span>
          </h1>

          <p className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
            Lunar helps creators grow, monetize, and put real infrastructure
            around their audience — so your career compounds like a business,
            not just a content streak.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap sm:gap-5">
            <ContactUsButton />
            <Link
              href="#beliefs"
              className="text-base font-medium text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              What we believe
            </Link>
          </div>

          <div className="mt-16 flex flex-col items-center gap-3 text-[11px] font-medium uppercase tracking-[0.08em] text-white/45">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15"
              aria-hidden
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="text-white/40"
              >
                <path
                  d="M6 2v8M2 7l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Scroll to explore
          </div>
        </div>
      </section>

      {/* What we believe */}
      <section
        id="beliefs"
        className="scroll-mt-8 bg-white px-6 py-20 text-black md:px-10 md:py-28 lg:px-16"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-black/45">
              What we believe
            </p>
            <h2 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight lg:text-6xl">
              Creators deserve
              <br />
              real leverage<span className="text-black/35">.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/70 md:text-xl">
              Management should help you think like a founder — with clarity,
              optionality, and execution — not lock you into dependency or
              short-term thinking.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:gap-6">
            {FOR_CREATORS_BELIEFS.map((item) => (
              <Reveal key={item.title}>
                <article className="h-full rounded-2xl border border-black/10 bg-neutral-50/80 p-6 md:p-7">
                  <h3 className="text-lg font-bold text-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/65 md:text-[15px]">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How we support / services */}
      <section className="relative z-10 -mt-16 border-t border-white/10 bg-black px-6 py-24 text-white md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/45">
              How we help
            </p>
            <h2 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight lg:text-6xl">
              Beside you on
              <br />
              the business<span className="text-white/40">.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
              Deals, ops, and packaging — with the same intent you bring to the
              feed.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {FOR_CREATORS_SERVICES.map((svc) => (
              <Reveal key={svc.title}>
                <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-7">
                  <h3 className="text-lg font-bold text-white">{svc.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60 md:text-[15px]">
                    {svc.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Lunar */}
      <section className="border-t border-white/10 bg-black px-6 py-24 text-white md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/45">
              Why Lunar
            </p>
            <h2 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight lg:text-6xl">
              Built for the
              <br />
              long arc<span className="text-white/40">.</span>
            </h2>
          </Reveal>

          <ul className="mt-14 grid gap-10 md:grid-cols-2 md:gap-x-10 lg:grid-cols-3 lg:gap-x-8">
            {FOR_CREATORS_WHY.map((item, i) => (
              <Reveal key={item.title}>
                <li className="flex gap-4">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/[0.06] text-sm font-bold text-white/50"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60 md:text-[15px]">
                      {item.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Who we work best with */}
      <section className="border-t border-black/10 bg-white px-6 py-20 text-black md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-black/45">
              Fit
            </p>
            <h2 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight lg:text-6xl">
              Who we work
              <br />
              best with<span className="text-black/35">.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/70 md:text-xl">
              {FOR_CREATORS_IDEAL.intro}
            </p>
          </Reveal>

          <ul className="mt-10 max-w-2xl space-y-4">
            {FOR_CREATORS_IDEAL.bullets.map((line) => (
              <Reveal key={line}>
                <li className="flex gap-3 text-base leading-snug text-black/80 md:text-lg">
                  <span
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black/30"
                    aria-hidden
                  />
                  {line}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-white/10 bg-black px-6 py-24 text-center text-white md:px-10 md:py-32 lg:px-16">
        <Reveal>
          <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Let&apos;s talk about
            <br />
            <span className="text-white/45">your next chapter.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-white/65">
            If you&apos;re serious about growth, monetization, and building
            something that lasts — we&apos;d love to hear what you&apos;re
            working on.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <ContactUsButton className="inline-flex rounded-full bg-white px-12 py-3.5 text-lg font-medium text-black transition-colors hover:bg-gray-200" />
            <a
              href={MAILTO}
              className="text-base font-medium text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              Email us directly
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
