import { projectData } from "../../../content/content";
import { useSite } from "../../../content/i18n/lang";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "../../ui/SectionHeading";

const spans = [
  "md:col-span-2 lg:col-span-6",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-3",
];

export function Projects() {
  const { projects } = useSite();
  return (
    <section
      id="projekt"
      aria-labelledby="projekt-rubrik"
      className="bg-band py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="projekt-rubrik"
          eyebrow={projects.eyebrow}
          title={projects.title}
          tone="dark"
        />
        <p className="mt-6 max-w-2xl text-lg text-band-muted">
          {projects.intro}
        </p>

        <ul
          role="list"
          className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6"
        >
          {projects.items.map((item, index) => (
            <li
              key={item.id}
              className={`flex ${spans[index] ?? "lg:col-span-2"}`}
            >
              <ProjectCard
                project={{
                  ...projectData[item.id as keyof typeof projectData],
                  ...item,
                }}
                featured={index === 0}
                sizes={
                  index === 0
                    ? "(min-width: 1024px) 670px, (min-width: 768px) 700px, calc(100vw - 2rem)"
                    : "(min-width: 1024px) 560px, (min-width: 768px) 340px, calc(100vw - 2rem)"
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
