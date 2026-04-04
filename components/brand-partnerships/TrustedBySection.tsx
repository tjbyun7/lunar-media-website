import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { brandPartnershipLogos } from "@/lib/brand-partnership-logos";

type LogoEntry = (typeof brandPartnershipLogos)[number];

function logoCardClass(logo: LogoEntry, cardClass: string) {
  const shell =
    "flex h-32 items-center justify-center rounded-xl border p-6 md:h-36";
  if ("tileClass" in logo && logo.tileClass) {
    return `${shell} ${logo.tileClass} transition-transform duration-200 hover:-translate-y-0.5`;
  }
  return `${shell} ${cardClass}`;
}

export function TrustedBySection({
  logos,
  variant,
}: {
  logos: readonly LogoEntry[];
  variant: "light" | "dark";
}) {
  if (logos.length === 0) return null;

  const isDark = variant === "dark";
  const headingClass = isDark ? "text-white" : "text-black";
  const subClass = isDark ? "text-white/55" : "text-black/55";
  const cardClass = isDark
    ? "border-white/10 bg-white/[0.06] ring-1 ring-white/10 transition-colors hover:border-white/20"
    : "border-black/10 bg-white shadow-sm ring-1 ring-black/5 transition-transform duration-200 hover:-translate-y-0.5";

  return (
    <Reveal>
      <div>
        <h2 className={`text-3xl font-bold tracking-tight md:text-4xl ${headingClass}`}>
          Previous Clients
        </h2>
        <p className={`mt-3 max-w-lg text-sm leading-relaxed md:text-base ${subClass}`}>
          Brands we&apos;ve supported on creator-led campaigns and influencer
          partnerships.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {logos.map((logo) => (
            <div key={logo.src} className={logoCardClass(logo, cardClass)}>
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
  );
}
