import { useEffect, useRef, useState } from "react";
import type { ProjectData } from "../../../content/content";
import { useSite } from "../../../content/i18n/lang";
import { Picture } from "../../ui/Picture";

interface ProjectPreviewProps {
  media: NonNullable<ProjectData["media"]>;
  alt: string;
  sizes: string;
}

const phoneSizes = "(min-width: 1024px) 200px, 26vw";
const lift =
  "motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out";
const containerClass =
  "select-none overflow-hidden bg-gradient-to-br from-band-surface to-band";

function Restart() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path d="M3 12a9 9 0 1 0 3-6.7" />
      <path d="M3 4v5h5" />
    </svg>
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path d={direction === "left" ? "m15 5-7 7 7 7" : "m9 5 7 7-7 7"} />
    </svg>
  );
}

export function ProjectPreview({ media, alt, sizes }: ProjectPreviewProps) {
  const { projects } = useSite();
  const desktopRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const [steps, setSteps] = useState(1);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const nodes = [desktopRef.current, mobileRef.current].filter(
      (node): node is HTMLDivElement => node !== null,
    );
    const measure = () => {
      const counts = nodes.map((node) =>
        Math.ceil(node.scrollHeight / node.clientHeight - 0.02),
      );
      setSteps(Math.max(1, ...counts));
    };
    const observer = new ResizeObserver(measure);
    nodes.forEach((node) => {
      observer.observe(node);
      if (node.firstElementChild) observer.observe(node.firstElementChild);
    });
    return () => observer.disconnect();
  }, []);

  const current = Math.min(step, steps - 1);
  const atEnd = current === steps - 1;

  const goTo = (index: number) => {
    const target = Math.min(Math.max(index, 0), steps - 1);
    setStep(target);
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches
      ? "auto"
      : "smooth";
    for (const node of [desktopRef.current, mobileRef.current]) {
      if (!node) continue;
      const distance = node.scrollHeight - node.clientHeight;
      node.scrollTo({
        top: steps > 1 ? (distance * target) / (steps - 1) : 0,
        behavior,
      });
    }
  };

  const arrow =
    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime disabled:pointer-events-none disabled:opacity-0";

  return (
    <div className={containerClass}>
      <div className="flex items-end justify-center gap-[5%] px-[3%] pb-[3%] pt-[6%]">
        <div
          className={`w-[68%] ${lift} motion-safe:group-hover:-translate-y-1`}
        >
          <div className="relative rounded-t-[0.7rem] border border-white/20 bg-[#0b0c0e] p-[1.6%] pt-[2.6%] shadow-2xl">
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-[0.9%] h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-white/25"
            />
            <div className="overflow-hidden rounded-[2px] bg-black">
              <div
                ref={desktopRef}
                className="pointer-events-none aspect-[16/10] overflow-hidden"
              >
                <Picture
                  image={{ file: media.desktop, alt }}
                  sizes={sizes}
                  natural
                  width={1600}
                  height={3700}
                />
              </div>
            </div>
          </div>
          <div className="relative -mx-[3%] aspect-[48/1] [border-radius:0_0_50%_50%/0_0_100%_100%] bg-gradient-to-b from-[#b4b6bc] to-[#6d6f76] shadow-[0_8px_16px_rgba(0,0,0,0.45)]">
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-0 h-[45%] w-[16%] -translate-x-1/2 rounded-b-md bg-black/30"
            />
          </div>
        </div>

        <div
          className={`w-[24%] ${lift} motion-safe:group-hover:-translate-y-2`}
        >
          <div className="relative rounded-[18%/8.3%] border border-white/25 bg-[#0b0c0e] p-[4.5%] pt-[11%] shadow-2xl">
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-[1.5%] h-[2.8%] w-[28%] -translate-x-1/2 rounded-full bg-white/15"
            />
            <span
              aria-hidden="true"
              className="absolute -left-[2.2%] top-[16%] h-[6%] w-[2.2%] rounded-l-sm bg-[#3a3c42]"
            />
            <span
              aria-hidden="true"
              className="absolute -left-[2.2%] top-[25%] h-[9%] w-[2.2%] rounded-l-sm bg-[#3a3c42]"
            />
            <span
              aria-hidden="true"
              className="absolute -right-[2.2%] top-[22%] h-[13%] w-[2.2%] rounded-r-sm bg-[#3a3c42]"
            />
            <div className="relative overflow-hidden [border-radius:4%_4%_14.8%_14.8%/2%_2%_6.5%_6.5%] bg-black">
              <div
                ref={mobileRef}
                className="pointer-events-none aspect-[9/18] overflow-hidden"
              >
                <Picture
                  image={{ file: media.mobile, alt: "" }}
                  sizes={phoneSizes}
                  natural
                  width={750}
                  height={4800}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex min-h-12 items-center gap-2 px-3 pb-3">
        {steps > 1 && (
          <>
            <button
              type="button"
              className={arrow}
              onClick={() => goTo(current - 1)}
              disabled={current === 0}
              aria-label={projects.previewPrev}
            >
              <Chevron direction="left" />
            </button>
            <div className="flex flex-1 flex-wrap justify-center">
              {Array.from({ length: steps }, (_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`${projects.previewGoTo} ${index + 1}`}
                  aria-current={index === current ? "true" : undefined}
                  className="group/dot flex h-6 w-6 items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime"
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full transition-all group-hover/dot:scale-150 ${index === current ? "bg-lime" : "bg-white/30 group-hover/dot:bg-white/70"}`}
                  />
                </button>
              ))}
            </div>
            <button
              type="button"
              className={arrow}
              onClick={() => goTo(atEnd ? 0 : current + 1)}
              aria-label={
                atEnd ? projects.previewRestart : projects.previewNext
              }
            >
              {atEnd ? <Restart /> : <Chevron direction="right" />}
            </button>
            <p className="sr-only" aria-live="polite">
              {projects.previewStep} {current + 1} {projects.previewOf} {steps}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
