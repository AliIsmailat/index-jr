import { useSite } from "../../content/i18n/lang";
import { Icon } from "../ui/Icons";
import { SectionHeading } from "../ui/SectionHeading";

export function Services() {
  const { services } = useSite();
  return (
    <section id="tjanster" aria-labelledby="tjanster-rubrik" className="bg-page py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="tjanster-rubrik" eyebrow={services.eyebrow} title={services.title} />
        <ul role="list" className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.items.map((item) => (
            <li key={item.name} className="rounded-card border border-line bg-surface p-7">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-lime text-on-lime">
                <Icon name={item.icon} className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-2xl">{item.name}</h3>
              <p className="mt-2 text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
