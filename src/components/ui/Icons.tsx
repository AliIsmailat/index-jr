import type { IconName } from "../../content/content";

const paths: Record<IconName, string[]> = {
  window: ["M3 5h18v14H3z", "M3 9h18", "M6.5 7h.01"],
  calendar: ["M4 6h16v14H4z", "M4 10h16", "M8 3v4", "M16 3v4"],
  gauge: ["M4 18a8 8 0 1 1 16 0", "M12 18l4-6"],
  phone: ["M7 3h10v18H7z", "M11 18h2"],
  mail: ["M3 6h18v12H3z", "M3 7l9 7 9-7"],
  pin: [
    "M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z",
    "M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  ],
  check: ["M5 12l5 5 9-10"],
  arrow: ["M7 17 17 7", "M8 7h9v9"],
};

interface IconProps {
  name: IconName;
  className?: string;
}

export function Icon({ name, className = "h-6 w-6" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {paths[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
const instagramPaths = [
  "M22.3,8.4c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4C23.7,9,23.1,8.4,22.3,8.4z",
  "M16,10.2c-3.3,0-5.9,2.7-5.9,5.9s2.7,5.9,5.9,5.9s5.9-2.7,5.9-5.9S19.3,10.2,16,10.2z M16,19.9c-2.1,0-3.8-1.7-3.8-3.8c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C19.8,18.2,18.1,19.9,16,19.9z",
  "M20.8,4h-9.5C7.2,4,4,7.2,4,11.2v9.5c0,4,3.2,7.2,7.2,7.2h9.5c4,0,7.2-3.2,7.2-7.2v-9.5C28,7.2,24.8,4,20.8,4z M25.7,20.8c0,2.7-2.2,5-5,5h-9.5c-2.7,0-5-2.2-5-5v-9.5c0-2.7,2.2-5,5-5h9.5c2.7,0,5,2.2,5,5V20.8z",
];

export function InstagramIcon({
  className = "h-6 w-6",
}: {
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
    >
      {instagramPaths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
