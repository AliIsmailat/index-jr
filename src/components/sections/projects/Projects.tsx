import { projectData } from "../../../content/content";
import { useSite } from "../../../content/i18n/lang";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "../../ui/SectionHeading";

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

        <ul role="list" className="mt-12 grid gap-6">
          {projects.items.map((item, index) => (
            <li key={item.id} className="flex">
              <ProjectCard
                project={{
                  ...projectData[item.id as keyof typeof projectData],
                  ...item,
                }}
                reverse={index % 2 === 1}
                sizes="(min-width: 1024px) 430px, 62vw"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
