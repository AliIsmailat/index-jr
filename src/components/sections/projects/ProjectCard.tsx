import { buttonClasses } from "../../../lib/buttonStyles";
import type { ProjectData } from "../../../content/content";
import { useSite } from "../../../content/i18n/lang";
import { Icon } from "../../ui/Icons";
import { ConstructionPreview } from "./ConstructionPreview";
import { ProjectPreview } from "./ProjectPreview";

export interface ProjectView extends ProjectData {
  name: string;
  category: string;
  summary: string;
  tags: string[];
  alt: string;
}

interface ProjectCardProps {
  project: ProjectView;
  sizes: string;
  featured?: boolean;
}

export function ProjectCard({
  project,
  sizes,
  featured = false,
}: ProjectCardProps) {
  const { projects } = useSite();
  const wip = project.status === "wip";

  return (
    <article
      className={`group flex w-full flex-col overflow-hidden rounded-card bg-band-surface ${featured ? "lg:flex-row" : ""}`}
    >
      <div className={featured ? "lg:w-[58%] lg:shrink-0" : ""}>
        {project.media ? (
          <ProjectPreview
            media={project.media}
            alt={project.alt}
            sizes={sizes}
          />
        ) : (
          <ConstructionPreview alt={project.alt} />
        )}
      </div>

      <div
        className={`flex flex-1 flex-col p-6 sm:p-7 ${featured ? "lg:justify-center lg:p-10" : ""}`}
      >
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-band-muted">
            {project.category}
          </p>
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${wip ? "bg-lime text-on-lime" : "bg-white/10 text-white"}`}
          >
            {wip ? projects.wipLabel : projects.liveLabel}
          </span>
        </div>

        <h3
          className={`mt-3 text-2xl text-white sm:text-3xl ${featured ? "lg:text-4xl" : ""}`}
        >
          {project.name}
        </h3>
        <p className="mt-3 text-band-muted">{project.summary}</p>

        <ul role="list" className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-white/20 px-3 py-1 text-sm text-white"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className={featured ? "mt-8" : "mt-auto pt-6"}>
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses("lime", "sm")}
            >
              {projects.openLabel}
              <span className="sr-only">
                {" "}
                {project.name}, {projects.newTabLabel}
              </span>
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          ) : (
            <p className="text-sm text-band-muted">
              {wip ? projects.soonLabel : projects.noLinkLabel}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
