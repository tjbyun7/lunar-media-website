import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SiteNav } from "@/components/SiteNav";
import { VideoMarquee } from "@/components/VideoMarquee";
import DigitalSerenityAnimatedLandingPage from "@/components/ui/digital-serenity-animated-landing-page";
import { lunarLogoUrl, partnerLogos } from "@/lib/lunarmedia-assets";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Section 1 — Hero */}
      <section className="relative flex min-h-screen flex-col overflow-hidden bg-black">
        <div className="relative z-20 w-full shrink-0 px-6 pt-10 md:px-10 lg:px-16">
          <SiteNav variant="dark" />
        </div>
        <DigitalSerenityAnimatedLandingPage />
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
              <div className="space-y-6">
                <p className="text-2xl leading-snug text-white/90">
                  Ready to launch your next campaign?
                </p>
                <Link
                  href="/brand-partnerships"
                  className="inline-flex rounded-full bg-white px-8 py-2.5 text-lg font-medium text-black transition-colors duration-200 hover:bg-gray-200"
                >
                  Brand partnerships
                </Link>
              </div>
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
                      width={partner.width ?? 200}
                      height={partner.height ?? 200}
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
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-14 lg:flex-row lg:items-center lg:gap-20">
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

          <Reveal className="mt-8 md:mt-10">
            <div className="space-y-5">
              <p className="text-2xl leading-snug text-black/90">
                Ready to take your content career to the next level?
              </p>
                <Link
                  href="/for-creators"
                  className="inline-flex rounded-full bg-black px-8 py-2.5 text-lg font-medium text-white transition-colors duration-200 hover:bg-neutral-800"
                >
                  Learn More
                </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
