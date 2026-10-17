import { buttonClasses } from "../../../lib/buttonStyles";
import { useSite } from "../../../content/i18n/lang";
import { SectionHeading } from "../../ui/SectionHeading";

export function NotFound() {
  const site = useSite();
  const { notFound } = site;

  return (
    <section
      aria-labelledby="404-rubrik"
      className="flex min-h-[60vh] items-center bg-page py-16 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading id="404-rubrik" eyebrow={notFound.eyebrow} title={notFound.title} as="h1" />
        <p className="mt-6 max-w-xl text-lg text-muted sm:text-xl">{notFound.text}</p>
        <a href={site.nav.home} className={`${buttonClasses()} mt-8 w-full sm:w-auto`}>
          {notFound.cta}
        </a>
      </div>
    </section>
  );
}
