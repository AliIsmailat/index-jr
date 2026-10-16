import { useSite } from "../../content/i18n/lang";
import { Icon } from "../ui/Icons";
import { SectionHeading } from "../ui/SectionHeading";

export function About() {
  const { about } = useSite();
  return (
    <section id="om-mig" aria-labelledby="om-mig-rubrik" className="bg-page py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div>
          <SectionHeading id="om-mig-rubrik" eyebrow={about.eyebrow} title={about.title} />
          <div className="mt-8 grid max-w-xl gap-4 text-lg text-muted">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="self-start rounded-card bg-lime p-7 text-on-lime sm:p-8">
          <h3 className="text-2xl">{about.factsTitle}</h3>
          <ul role="list" className="mt-5 grid gap-3">
            {about.facts.map((fact) => (
              <li key={fact} className="flex items-start gap-3 font-semibold">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-on-lime text-lime">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
