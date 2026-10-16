import { useSite } from "../../content/i18n/lang";
import { SectionHeading } from "../ui/SectionHeading";

export function Process() {
  const { process } = useSite();
  return (
    <section id="process" aria-labelledby="process-rubrik" className="bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="process-rubrik" eyebrow={process.eyebrow} title={process.title} />
        <ol role="list" className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, index) => (
            <li key={step.title} className="border-t-2 border-text pt-5">
              <p aria-hidden="true" className="font-display text-5xl font-extrabold">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-2xl">
                <span className="sr-only">
                  {process.stepLabel} {index + 1}:{" "}
                </span>
                {step.title}
              </h3>
              <p className="mt-2 text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
