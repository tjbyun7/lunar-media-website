export function MoonLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M16 2C8.82 2 3 7.82 3 15s5.82 13 13 13c1.66 0 3.25-.31 4.71-.88A11 11 0 0 1 8 15C8 8.92 12.92 4 19 4c.68 0 1.34.06 1.99.18A10.98 10.98 0 0 0 16 2Z"
        fill="currentColor"
      />
    </svg>
  );
}
