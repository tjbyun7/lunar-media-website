import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SiteNav } from "@/components/SiteNav";
import { VideoMarquee } from "@/components/VideoMarquee";
import { lunarLogoUrl, partnerLogos } from "@/lib/lunarmedia-assets";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Section 1 — Hero */}
      <section className="relative flex min-h-[80vh] flex-col overflow-hidden bg-black px-6 pb-16 pt-10 md:px-10 lg:px-16">
        <div
          className="animate-hero-orb pointer-events-none absolute -right-32 top-1/4 h-[450px] w-[825px] max-w-[120vw] -translate-y-1/4 rounded-full blur-[100px] md:right-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgb(156 163 175 / 0.42) 0%, transparent 68%)",
          }}
          aria-hidden
        />

        <div className="relative z-10 mb-auto w-full">
          <SiteNav variant="dark" />
        </div>

        <div className="relative z-10 mt-16 flex flex-1 flex-col justify-center md:mt-24 lg:mt-0 lg:max-w-5xl">
          <h1 className="text-5xl font-medium leading-[1.05] tracking-tight text-white lg:text-8xl">
            <span className="block animate-fade-up">Representing the next-gen</span>
            <span className="animation-delay-100 block animate-fade-up">
              of creators shaping
            </span>
            <span className="animation-delay-200 mt-1 block animate-fade-up">
              the future{" "}
              <span className="text-white/45">of media.</span>
            </span>
          </h1>

          <div className="animation-delay-400 mt-12 animate-fade-up md:mt-14">
            <a
              href="mailto:management+w@lunarmedia.io"
              className="inline-flex rounded-full bg-white px-12 py-2 text-xl font-medium text-black transition-colors duration-200 hover:bg-gray-200"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* Section 2 — About */}
      <section className="min-h-screen bg-white px-6 pb-24 pt-20 text-black md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-5xl font-bold leading-[1.08] tracking-tight lg:text-6xl">
              Where technology meets talent
              <br />
              for unmatched impact.
            </h2>
          </Reveal>

          <Reveal className="mt-12 space-y-8 md:mt-14">
            <p className="text-2xl leading-snug text-black/90">
              Founded by Gen-Z for Gen-Z, we provide a personalized approach to
              campaign execution, marketing strategy ideation, and full-service
              creator management.
            </p>
            <p className="text-2xl leading-snug text-black/90">
              Our founders are Stanford dropouts and creator managers with years
              of music &amp; brand marketing experience.
            </p>
            <p className="flex flex-wrap gap-x-8 gap-y-3 pt-4">
              <Link
                href="/for-creators"
                className="text-xl font-medium text-black underline-offset-[6px] transition-opacity hover:opacity-70 hover:underline"
              >
                For creators →
              </Link>
              <Link
                href="/music-marketing-clients"
                className="text-xl font-medium text-black underline-offset-[6px] transition-opacity hover:opacity-70 hover:underline"
              >
                Music marketing →
              </Link>
              <Link
                href="/brand-partnerships"
                className="text-xl font-medium text-black underline-offset-[6px] transition-opacity hover:opacity-70 hover:underline"
              >
                Brand partnerships →
              </Link>
            </p>
          </Reveal>
        </div>

        <div className="mt-16 md:mt-20">
          <VideoMarquee />
        </div>
      </section>

      {/* Section 3 — Brands / AI */}
      <section className="relative z-10 -mt-32 bg-black px-6 py-40 text-white md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 lg:flex-row lg:items-start lg:gap-20">
          <div className="lg:w-2/5 lg:shrink-0">
            <Reveal>
              <h2 className="text-5xl font-bold leading-[1.08] tracking-tight lg:text-6xl">
                We help brands go viral...
              </h2>
            </Reveal>
            <Reveal className="mt-10 space-y-8">
              <p className="text-2xl leading-snug text-white/90">
                We leverage AI to create a remarkably smooth and operationally
                efficient experience for our creator, brand, and label
                partners.
              </p>
              <p className="text-2xl leading-snug text-white/90">
                Our roster has a{" "}
                <b className="font-bold text-white">reach of 20M+</b> with
                campaign results that redefine what clients can and should
                expect from management partners.
              </p>
            </Reveal>
          </div>

          <div className="flex-1">
            <Reveal>
              <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
                {partnerLogos.map((partner) => (
                  <div
                    key={partner.src}
                    className="flex h-36 items-center justify-center rounded-xl bg-white p-4 shadow-sm ring-1 ring-white/10 transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      width={200}
                      height={200}
                      className="max-h-[7.5rem] w-auto max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 4 — Creators */}
      <section className="bg-white px-6 py-24 text-black md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-14 lg:flex-row lg:items-center lg:gap-20">
          <div className="lg:w-3/5">
            <Reveal>
              <h2 className="text-5xl font-bold leading-[1.08] tracking-tight lg:text-6xl">
                ...and help creators grow
                <br />
                their influence
              </h2>
            </Reveal>
            <Reveal className="mt-10">
              <p className="text-2xl leading-snug text-black/90">
                We&apos;ve grown our own personal online brands to a sizeable
                following, enabling us to take a creator first approach to our
                management. As creators ourselves, we know what creators want
                and how to get it.
              </p>
            </Reveal>
          </div>

          <div className="relative hidden flex-1 justify-center lg:flex">
            <div
              className="flex h-72 w-72 items-center justify-center rounded-full blur-2xl"
              style={{
                background:
                  "radial-gradient(circle, rgb(156 163 175 / 0.35) 0%, transparent 70%)",
              }}
              aria-hidden
            />
            <Image
              src={lunarLogoUrl}
              alt=""
              width={220}
              height={220}
              className="absolute h-44 w-auto max-w-[min(100%,16rem)] object-contain opacity-[0.07]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
