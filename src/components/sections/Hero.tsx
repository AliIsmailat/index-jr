import { useSite } from "../../content/i18n/lang";
import { CtaButton } from "../ui/CtaButton";

export function Hero() {
  const { hero } = useSite();
  const [before, after] = hero.title.split(hero.highlight);

  return (
    <section id="top" aria-labelledby="hero-rubrik" className="bg-page">
      <div className="mx-auto max-w-6xl px-4 pb-14 pt-12 sm:px-6 sm:pb-20 sm:pt-20">
        <h1
          id="hero-rubrik"
          className="max-w-4xl text-[clamp(2.25rem,10.5vw,5.5rem)] leading-[0.98]"
        >
          {before}
          <span className="rounded-card bg-lime px-2 text-on-lime [-webkit-box-decoration-break:clone] [box-decoration-break:clone]">
            {hero.highlight}
          </span>
          {after}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted sm:text-xl">
          {hero.text}
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <CtaButton className="w-full sm:w-auto" />
          <a
            href="#projekt"
            className="text-center font-semibold underline underline-offset-4 hover:text-muted sm:text-left"
          >
            {hero.projectsLabel}
          </a>
        </div>

        <dl className="mt-14 grid gap-6 border-t border-line pt-8 sm:grid-cols-3">
          {hero.proof.map((item) => (
            <div key={item.label} className="flex flex-col-reverse">
              <dt className="mt-1 text-muted">{item.label}</dt>
              <dd className="font-display text-5xl font-extrabold leading-none">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
