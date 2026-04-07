import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { TrustedBySection } from "@/components/brand-partnerships/TrustedBySection";
import { SiteNav } from "@/components/SiteNav";
import { brandPartnershipLogos } from "@/lib/brand-partnership-logos";
import {
  BRAND_PARTNERSHIPS_CAPABILITIES,
  BRAND_PARTNERSHIPS_IDEAL,
  BRAND_PARTNERSHIPS_PROCESS,
  BRAND_PARTNERSHIPS_WHY,
} from "@/lib/brand-partnerships-content";

export const metadata: Metadata = {
  title: "Brand Partnerships | Lunar Media",
  description:
    "Lunar Media partners with brands on creator-led campaigns and influencer marketing — strategy, sourcing, execution, and reporting with an execution-first team.",
};

const MAILTO = "mailto:prospects@lunarmedia.io";
const INQUIRY_MAIL =
  "mailto:prospects@lunarmedia.io?subject=Brand%20partnership%20inquiry";

export default function BrandPartnershipsPage() {
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
            Brand partnerships
          </p>

          <h1 className="text-5xl font-medium leading-[0.98] tracking-tight md:text-7xl lg:text-8xl">
            <span className="block">Campaigns that</span>
            <span className="mt-1 block text-white/50">earn attention.</span>
          </h1>

          <p className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
            We help brands work with creators to drive awareness, relevance,
            and performance — with strategy, speed, and taste. Not a marketplace.
            A team that runs the work.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap sm:gap-5">
            <a
              href={INQUIRY_MAIL}
              className="inline-flex rounded-full bg-white px-10 py-3.5 text-base font-medium text-black transition-colors hover:bg-gray-200 md:px-12"
            >
              Start a campaign
            </a>
            <Link
              href="#capabilities"
              className="text-base font-medium text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              See capabilities
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

      {/* What we do */}
      <section
        id="capabilities"
        className="scroll-mt-8 bg-white px-6 py-20 text-black md:px-10 md:py-28 lg:px-16"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-black/45">
              What we do
            </p>
            <h2 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight lg:text-6xl">
              Creator marketing,
              <br />
              end to end<span className="text-black/35">.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/70 md:text-xl">
              From first brief to final reporting — we build campaigns that
              feel native to creators and clear for your brand team.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {BRAND_PARTNERSHIPS_CAPABILITIES.map((cap) => (
              <Reveal key={cap.title}>
                <article className="flex h-full flex-col rounded-2xl border border-black/10 bg-neutral-50/80 p-6 md:p-7">
                  <h3 className="text-lg font-bold text-black">{cap.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/65 md:text-[15px]">
                    {cap.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Lunar */}
      <section className="relative z-10 -mt-16 border-t border-white/10 bg-black px-6 py-24 text-white md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/45">
              Why Lunar
            </p>
            <h2 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight lg:text-6xl">
              Built for operators<span className="text-white/40">.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65 md:text-xl">
              We&apos;re a modern creator marketing partner — sharp on culture,
              disciplined on execution, and direct in how we work with you.
            </p>
          </Reveal>

          <ul className="mt-14 grid gap-10 md:grid-cols-2 md:gap-x-14 md:gap-y-12">
            {BRAND_PARTNERSHIPS_WHY.map((item, i) => (
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

      {/* Trusted by */}
      <section className="bg-white px-6 py-20 text-black md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <TrustedBySection logos={brandPartnershipLogos} variant="light" />
        </div>
      </section>

      {/* How we work */}
      <section className="border-t border-white/10 bg-black px-6 py-24 text-white md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/45">
              How we work
            </p>
            <h2 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight lg:text-6xl">
              Three moves<span className="text-white/40">.</span>
            </h2>
          </Reveal>

          <ol className="mt-14 grid list-none gap-8 md:grid-cols-3 md:gap-6">
            {BRAND_PARTNERSHIPS_PROCESS.map((step, i) => (
              <Reveal key={step.title}>
                <li className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-8">
                  <span
                    className="mb-5 text-3xl font-medium tabular-nums leading-none text-white/30"
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60 md:text-[15px]">
                    {step.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Ideal partners */}
      <section className="border-t border-black/10 bg-white px-6 py-20 text-black md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-black/45">
              Who this is for
            </p>
            <h2 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight lg:text-6xl">
              Ideal partners<span className="text-black/35">.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/70 md:text-xl">
              {BRAND_PARTNERSHIPS_IDEAL.intro}
            </p>
          </Reveal>

          <ul className="mt-10 max-w-2xl space-y-4">
            {BRAND_PARTNERSHIPS_IDEAL.bullets.map((line) => (
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
            Ready to brief
            <br />
            <span className="text-white/45">a campaign?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-white/65">
            Tell us what you&apos;re building. We&apos;ll come back with a clear
            point of view on creators, scope, and next steps.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <a
              href={INQUIRY_MAIL}
              className="inline-flex rounded-full bg-white px-12 py-3.5 text-lg font-medium text-black transition-colors hover:bg-gray-200"
            >
              Work with Lunar
            </a>
            <a
              href={MAILTO}
              className="text-base font-medium text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              Get in touch
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
