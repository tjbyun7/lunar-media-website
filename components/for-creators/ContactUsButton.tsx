/** Creator inquiries — same mailto as site-wide; subject helps triage inbox */
const CONTACT_CREATORS_MAIL =
  "mailto:management+w@lunarmedia.io?subject=Creator%20inquiry%20%2F%20management";

export function ContactUsButton({
  className = "inline-flex rounded-full bg-white px-10 py-3.5 text-base font-medium text-black transition-colors hover:bg-gray-200 md:px-12",
}: {
  className?: string;
}) {
  return (
    <a href={CONTACT_CREATORS_MAIL} className={className}>
      Contact us
    </a>
  );
}
