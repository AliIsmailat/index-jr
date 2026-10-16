import { useSite } from "../../../content/i18n/lang";
import { ArrowLeftCircleIcon } from "../../ui/Icons";
import { SectionHeading } from "../../ui/SectionHeading";

export function Legal() {
  const site = useSite();
  const { legal } = site;
  const blocks = [legal.privacy, legal.terms];

  return (
    <section aria-labelledby="integritet-rubrik" className="bg-page py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <a
          href={site.nav.home}
          className="inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4 hover:text-muted"
        >
          <ArrowLeftCircleIcon className="h-5 w-5" />
          {legal.back}
        </a>
        <div className="mt-8">
          <SectionHeading
            id="integritet-rubrik"
            eyebrow={legal.eyebrow}
            title={legal.title}
            as="h1"
          />
        </div>
        <p className="mt-4 text-sm text-muted">{legal.updated}</p>
        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {blocks.map((block) => (
            <div key={block.title}>
              <h3 className="text-2xl">{block.title}</h3>
              <div className="mt-6 grid gap-5">
                {block.items.map((item) => (
                  <div key={item.title}>
                    <h4 className="text-lg">{item.title}</h4>
                    <p className="mt-1 text-muted">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
