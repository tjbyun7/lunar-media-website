import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SiteNav } from "@/components/SiteNav";
import { clientLogos } from "@/lib/client-logos";

export const metadata: Metadata = {
  title: "Music Marketing | Lunar Media",
  description:
    "High-volume organic creator campaigns for music on TikTok and Instagram — volume at scale, UGC ignition, and full reporting. Case studies available on request.",
};

const MAILTO = "mailto:prospects@lunarmedia.io";
const CASE_STUDY_MAIL =
  "mailto:prospects@lunarmedia.io?subject=Music%20marketing%20case%20study%20request";

const STEPS = [
  {
    title: "Creator matching & campaign launch",
    body: "We identify and brief creators whose content style and audience align with your sound's energy, then activate them in a tight posting window — flooding TikTok and Instagram simultaneously to trigger algorithmic momentum.",
  },
  {
    title: "UGC ignition",
    body: "Volume creates velocity. When dozens of creators use your sound at once, the algorithm takes notice — driving organic reposts, duets, and stitches that expand reach beyond the campaign itself.",
  },
  {
    title: "Full campaign reporting",
    body: "Every video, every creator, every metric — delivered in a detailed breakdown with insights to scale your next release further.",
  },
] as const;

export default function MusicMarketingClientsPage() {
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
            Influencer music marketing
          </p>

          <h1 className="text-5xl font-medium leading-[0.98] tracking-tight md:text-7xl lg:text-8xl">
            <span className="block">Ignite your</span>
            <span className="mt-1 block text-white/50">sound.</span>
          </h1>

          <p className="mx-auto mt-10 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
            High-volume organic creator campaigns that flood TikTok and
            Instagram with your sound — igniting authentic UGC and turning
            releases into cultural moments.
          </p>

          <div className="mt-14 flex flex-col items-center gap-3 text-[11px] font-medium uppercase tracking-[0.08em] text-white/45">
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

      {/* Process + mockup */}
      <section className="bg-white px-6 py-20 text-black md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-black/45">
                The process
              </p>
              <h2 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight lg:text-6xl">
                Volume at scale<span className="text-black/35">.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-black/70 md:text-xl">
                Fully managed, high-volume creator campaigns built to ignite UGC.
                Hand us the track — we activate the ecosystem.
              </p>
            </Reveal>

            <ul className="mt-12 space-y-8">
              {STEPS.map((step, i) => (
                <Reveal key={step.title}>
                  <li className="flex gap-4">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-black/10 bg-black/[0.03] text-sm font-bold text-black/50"
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-black">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-black/65 md:text-[15px]">
                        {step.body}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-neutral-100 shadow-sm">
              <div
                className="pointer-events-none absolute -left-1/4 -top-1/4 h-[140%] w-[140%]"
                style={{
                  background:
                    "radial-gradient(ellipse at 60% 40%, rgb(156 163 175 / 0.25) 0%, transparent 55%)",
                }}
                aria-hidden
              />
              <div className="relative border-b border-black/10 px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex-1 rounded-md bg-black/[0.06] py-1.5 text-center text-[11px] text-black/45">
                    lunarmedia.io / campaign
                  </div>
                </div>
              </div>
              <div className="relative space-y-5 p-6">
                <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-black/40">
                  Campaign performance — live view
                </p>
                <div
                  className="space-y-3.5 pt-1"
                  role="img"
                  aria-label="Illustrative performance visualization. Creator identities are obscured."
                >
                  {[
                    { bar: 100, labelPx: 52, valPx: 36 },
                    { bar: 55, labelPx: 44, valPx: 28 },
                    { bar: 39, labelPx: 48, valPx: 32 },
                    { bar: 30, labelPx: 40, valPx: 30 },
                    { bar: 22, labelPx: 36, valPx: 40 },
                  ].map((row, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 md:gap-4"
                    >
                      {/* Obscured “label” — blurred pill, no readable handles */}
                      <div
                        className="flex w-[4.75rem] shrink-0 justify-end md:w-[5.25rem]"
                        aria-hidden
                      >
                        <div
                          className="h-2.5 max-w-full rounded-full bg-black/[0.18] blur-[5px]"
                          style={{ width: row.labelPx }}
                        />
                      </div>
                      <div className="relative h-3 flex-1 overflow-hidden rounded-full bg-black/[0.08]">
                        <div
                          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-neutral-500/90 via-neutral-400/80 to-neutral-300/60 opacity-90"
                          style={{ width: `${row.bar}%` }}
                        />
                        <div
                          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/25 to-transparent"
                          aria-hidden
                        />
                      </div>
                      {/* Obscured value — visual weight only */}
                      <div
                        className="flex w-12 shrink-0 justify-start md:w-14"
                        aria-hidden
                      >
                        <div
                          className="h-2.5 rounded-full bg-black/[0.14] blur-[4px]"
                          style={{ width: row.valPx }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-2.5 pt-2">
                  <div className="rounded-lg bg-black/[0.05] p-3">
                    <p className="text-[9px] font-semibold uppercase tracking-wide text-black/40">
                      Total views
                    </p>
                    <p className="mt-1 text-base font-bold text-black">
                      2.98M
                    </p>
                  </div>
                  <div className="rounded-lg bg-black/[0.05] p-3">
                    <p className="text-[9px] font-semibold uppercase tracking-wide text-black/40">
                      Videos
                    </p>
                    <p className="mt-1 text-base font-bold text-black">13</p>
                  </div>
                  <div className="rounded-lg bg-black/[0.05] p-3">
                    <p className="text-[9px] font-semibold uppercase tracking-wide text-black/40">
                      Platform
                    </p>
                    <p className="mt-1 text-xs font-bold leading-snug text-black pt-0.5">
                      TT + IG
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Case studies */}
      <section className="relative z-10 -mt-16 border-t border-white/10 bg-black px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/45">
              Proven results
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Case studies by request
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
              We&apos;ve executed volume campaigns that have driven millions of
              organic views for independent artists across TikTok and Instagram.
              Full breakdowns are available to qualified clients — request the
              one that fits your release.
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-12 md:mt-14">
              <a
                href={CASE_STUDY_MAIL}
                className="inline-flex rounded-full bg-white px-10 py-3.5 text-base font-medium text-black transition-colors hover:bg-gray-200 md:px-12 md:text-lg"
              >
                Request case studies
              </a>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-20 border-t border-white/10 pt-16 md:mt-24 md:pt-20">
              <h3 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Trusted by
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/55 md:text-base">
                Labels and partners we&apos;ve worked with across music marketing
                campaigns.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {clientLogos.map((logo) => (
                  <div
                    key={logo.src}
                    className="flex h-32 items-center justify-center rounded-xl bg-white p-6 shadow-sm ring-1 ring-white/10 transition-transform duration-200 hover:-translate-y-0.5 md:h-36"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={200}
                      height={120}
                      className="max-h-16 w-auto max-w-full object-contain md:max-h-[4.5rem]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-black/10 bg-white px-6 py-24 text-center text-black md:px-10 md:py-32 lg:px-16">
        <Reveal>
          <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Ready to ignite
            <br />
            <span className="text-black/40">your release?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-black/65">
            Let&apos;s flood the feed with your sound. Reach out and we&apos;ll
            build the volume campaign your track deserves.
          </p>
          <a
            href={MAILTO}
            className="mt-10 inline-flex rounded-full bg-black px-12 py-3 text-lg font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Get in touch
          </a>
        </Reveal>
      </section>
    </div>
  );
}
