interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: string;
  tone?: "light" | "dark";
  as?: "h1" | "h2";
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  tone = "light",
  as: Heading = "h2",
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div>
      <p
        className={`flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] ${dark ? "text-band-muted" : "text-muted"}`}
      >
        <span aria-hidden="true" className="h-3 w-3 rounded-full bg-lime ring-2 ring-text/10" />
        {eyebrow}
      </p>
      <Heading
        id={id}
        className={`mt-4 text-[clamp(2rem,9vw,3rem)] leading-[1.02] sm:text-6xl ${dark ? "text-white" : "text-text"}`}
      >
        {title}
      </Heading>
    </div>
  );
}
