interface SectionHeadingProps {
  id: string
  eyebrow: string
  title: string
  tone?: 'light' | 'dark'
}

export function SectionHeading({ id, eyebrow, title, tone = 'light' }: SectionHeadingProps) {
  const dark = tone === 'dark'
  return (
    <div>
      <p
        className={`flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] ${dark ? 'text-band-muted' : 'text-muted'}`}
      >
        <span aria-hidden="true" className="h-3 w-3 rounded-full bg-lime ring-2 ring-text/10" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-4 text-[clamp(2rem,9vw,3rem)] leading-[1.02] sm:text-6xl ${dark ? 'text-white' : 'text-text'}`}
      >
        {title}
      </h2>
    </div>
  )
}
