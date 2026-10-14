import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { useSite } from "../../../content/i18n/lang";

const query = "(prefers-reduced-motion: reduce)";

const subscribeMotion = (notify: () => void) => {
  const media = window.matchMedia(query);
  media.addEventListener("change", notify);
  return () => media.removeEventListener("change", notify);
};

const getReducedMotion = () => window.matchMedia(query).matches;

function PauseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <rect x="6" y="5" width="4" height="14" rx="1" />
      <rect x="14" y="5" width="4" height="14" rx="1" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" />
    </svg>
  );
}

export function ConstructionPreview({ alt }: { alt: string }) {
  const { projects } = useSite();
  const svgRef = useRef<SVGSVGElement>(null);
  const reducedMotion = useSyncExternalStore(
    subscribeMotion,
    getReducedMotion,
    () => false,
  );
  const [userPaused, setUserPaused] = useState<boolean | null>(null);
  const paused = userPaused ?? reducedMotion;

  useEffect(() => {
    if (paused) svgRef.current?.pauseAnimations();
    else svgRef.current?.unpauseAnimations();
  }, [paused]);

  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-band-surface to-band">
      <svg
        ref={svgRef}
        fill="none"
        viewBox="-130 -110 1210 1210"
        role="img"
        aria-label={alt}
        className="absolute inset-0 h-full w-full"
      >
        <g>
          <g transform="translate(565,578)">
            <g transform="rotate(0)">
              <animateTransform
                repeatCount="indefinite"
                type="rotate"
                attributeName="transform"
                dur="2.002s"
                begin="0s"
                calcMode="spline"
                values="0; 0; -83; -50; -90; 0; 0"
                keyTimes="0; 0.166667; 0.333333; 0.45; 0.566667; 0.666667; 1"
                keySplines="0.333 0 0.667 1; 0.333 0 0.667 1; 0.333 0 0.667 1; 0.333 0 0.667 1; 0.333 0 0.667 1; 0 0 1 1"
                fill="freeze"
              />
              <g transform="scale(11.118,11.118) translate(-22.5,-32)">
                <g transform="matrix(1,0,0,1,22.174,32.241)">
                  <path
                    className="fill-lime"
                    fillRule="evenodd"
                    d="M-21.222,-30.775C-20.602,-31.402,-19.775,-31.751,-18.868,-31.756C-18.868,-31.756,-17.385,-31.748,-17.385,-31.748C-17.378,-31.748,-17.372,-31.748,-17.366,-31.748C-16.337,-31.748,-15.347,-31.372,-14.575,-30.684C-14.575,-30.684,-11.968,-28.348,-11.968,-28.348C-11.857,-28.248,-11.69,-28.248,-11.577,-28.349C-11.577,-28.349,-8.914,-30.708,-8.914,-30.708C-8.145,-31.379,-7.16,-31.751,-6.132,-31.756C-6.132,-31.756,5.704,-31.759,5.704,-31.759C11.248,-31.754,16.573,-29.404,20.316,-25.31C20.316,-25.31,21.567,-23.935,21.567,-23.935C21.994,-23.453,22.208,-22.833,22.169,-22.19C22.129,-21.547,21.843,-20.959,21.362,-20.533C20.928,-20.149,20.37,-19.933,19.774,-19.927C19.774,-19.927,6.253,-19.929,6.253,-19.929C6.253,-19.929,6.26,-15.86,6.26,-15.86C6.257,-14.868,5.642,-14.013,4.771,-13.652C4.771,-13.652,4.793,26.257,4.793,26.257C4.794,29.289,2.328,31.758,-0.706,31.759C-0.706,31.759,-1.635,31.759,-1.635,31.759C-1.636,31.759,-1.637,31.759,-1.638,31.759C-4.669,31.759,-7.136,29.292,-7.137,26.261C-7.137,26.261,-7.159,-13.487,-7.159,-13.487C-7.649,-13.549,-8.104,-13.752,-8.445,-14.074C-8.445,-14.074,-11.566,-16.865,-11.566,-16.865C-11.677,-16.963,-11.843,-16.965,-11.959,-16.862C-11.959,-16.862,-14.6,-14.535,-14.6,-14.535C-15.343,-13.855,-16.304,-13.462,-17.365,-13.428C-17.365,-13.428,-18.876,-13.433,-18.876,-13.433C-20.692,-13.436,-22.17,-14.917,-22.17,-16.732C-22.17,-16.732,-22.174,-28.436,-22.174,-28.436C-22.179,-29.317,-21.841,-30.148,-21.222,-30.775ZM-4.137,26.259C-4.136,27.637,-3.016,28.759,-1.637,28.759C-1.637,28.759,-1.636,28.759,-1.636,28.759C-1.636,28.759,-0.706,28.759,-0.706,28.759C0.672,28.758,1.793,27.636,1.793,26.258C1.793,26.258,1.771,-13.407,1.771,-13.407C1.771,-13.407,-4.159,-13.405,-4.159,-13.405C-4.159,-13.405,-4.137,26.259,-4.137,26.259ZM-19.17,-16.733C-19.17,-16.568,-19.035,-16.434,-18.868,-16.433C-18.868,-16.433,-17.41,-16.427,-17.41,-16.427C-17.12,-16.437,-16.842,-16.551,-16.605,-16.767C-16.605,-16.767,-13.947,-19.107,-13.947,-19.107C-13.323,-19.664,-12.541,-19.941,-11.76,-19.941C-10.974,-19.941,-10.188,-19.66,-9.564,-19.099C-9.564,-19.099,-6.613,-16.459,-6.613,-16.459C-6.613,-16.459,3.259,-16.466,3.259,-16.466C3.259,-16.466,3.251,-21.426,3.251,-21.426C3.251,-21.824,3.408,-22.207,3.689,-22.489C3.971,-22.771,4.353,-22.929,4.751,-22.929C4.751,-22.929,18.428,-22.927,18.428,-22.927C18.428,-22.927,18.1,-23.288,18.1,-23.288C14.925,-26.76,10.406,-28.755,5.703,-28.759C5.703,-28.759,-6.124,-28.756,-6.124,-28.756C-6.425,-28.755,-6.715,-28.644,-6.934,-28.454C-6.934,-28.454,-9.586,-26.105,-9.586,-26.105C-10.838,-24.99,-12.723,-24.995,-13.971,-26.115C-13.971,-26.115,-16.574,-28.447,-16.574,-28.447C-16.794,-28.643,-17.101,-28.744,-17.386,-28.748C-17.386,-28.748,-18.876,-28.756,-18.876,-28.756C-18.979,-28.755,-19.047,-28.707,-19.087,-28.667C-19.127,-28.626,-19.175,-28.556,-19.174,-28.445C-19.174,-28.445,-19.17,-16.733,-19.17,-16.733Z"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
        <g transform="matrix(1.053,0,0,0.825,604.295,532.999)">
          <g transform="matrix(0.894,0,0,1.353,-375.261,414)">
            <rect
              ry="60"
              rx="60"
              height="32"
              width="390"
              y="-16"
              x="-195"
              className="fill-white/25"
            />
          </g>
        </g>
        <g>
          <animate
            repeatCount="indefinite"
            attributeName="opacity"
            dur="2.002s"
            begin="0s"
            fill="freeze"
            values="1; 1; 0; 0"
            keyTimes="0; 0.666667; 0.733333; 1"
            keySplines="0 0 1 1; 0 0 1 1; 0 0 1 1"
            calcMode="spline"
          />
          <g transform="translate(311,820)">
            <animateTransform
              repeatCount="indefinite"
              type="translate"
              attributeName="transform"
              dur="2.002s"
              begin="0s"
              calcMode="spline"
              values="311 820; 311 820; 311 847; 311 847; 311 881; 311 881; 522 881; 522 881"
              keyTimes="0; 0.283333; 0.333333; 0.55; 0.6; 0.666667; 0.816667; 1"
              keySplines="0 0 1 1; 0.333 0 0.667 1; 0 0 1 1; 0.333 0 0.667 1; 0 0 1 1; 0.333 0 0.667 1; 0 0 1 1"
              fill="freeze"
            />
            <g transform="scale(1,0.96) translate(285,-373.061)">
              <g transform="matrix(1,0,0,1,-285.5,379.916)">
                <rect
                  height="70"
                  width="25"
                  y="-35"
                  x="-12.5"
                  className="fill-white"
                >
                  <animate
                    repeatCount="indefinite"
                    attributeName="y"
                    dur="2.002s"
                    begin="0s"
                    fill="freeze"
                    values="-35; -35; -62; -62"
                    keyTimes="0; 0.55; 0.6; 1"
                    keySplines="0 0 1 1; 0.333 0 0.667 1; 0 0 1 1"
                    calcMode="spline"
                  />
                  <animate
                    repeatCount="indefinite"
                    attributeName="height"
                    dur="2.002s"
                    begin="0s"
                    fill="freeze"
                    values="70; 70; 70; 25; 25"
                    keyTimes="0; 0.333333; 0.55; 0.6; 1"
                    keySplines="0 0 1 1; 0.333 0 0.667 1; 0.333 0 0.667 1; 0 0 1 1"
                    calcMode="spline"
                  />
                </rect>
              </g>
              <g transform="matrix(1,0,0,1,-285,335.25)">
                <rect
                  ry="30"
                  rx="30"
                  height="26.5"
                  width="64"
                  y="-13.25"
                  x="-32"
                  className="fill-white"
                />
              </g>
            </g>
          </g>
        </g>
        <g>
          <g transform="translate(100,820)">
            <animateTransform
              repeatCount="indefinite"
              type="translate"
              attributeName="transform"
              dur="2.002s"
              begin="0s"
              calcMode="spline"
              values="100 820; 100 820; 311 820; 311 820; 311 847; 311 847; 311 881"
              keyTimes="0; 0.666667; 0.816667; 1; 1; 1; 1"
              keySplines="0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1"
              fill="freeze"
            />
            <g transform="scale(1,0.96) translate(285,-373.061)">
              <g transform="matrix(1,0,0,1,-285.5,379.916)">
                <rect
                  height="70"
                  width="25"
                  y="-35"
                  x="-12.5"
                  className="fill-white"
                >
                  <animate
                    repeatCount="indefinite"
                    attributeName="y"
                    dur="2.002s"
                    begin="0s"
                    fill="freeze"
                    values="-35; -35; -62"
                    keyTimes="0; 1; 1"
                    keySplines="0 0 1 1; 0 0 1 1"
                    calcMode="spline"
                  />
                  <animate
                    repeatCount="indefinite"
                    attributeName="height"
                    dur="2.002s"
                    begin="0s"
                    fill="freeze"
                    values="70; 70; 70; 25"
                    keyTimes="0; 1; 1; 1"
                    keySplines="0 0 1 1; 0 0 1 1; 0 0 1 1"
                    calcMode="spline"
                  />
                </rect>
              </g>
              <g transform="matrix(1,0,0,1,-285,335.25)">
                <rect
                  ry="30"
                  rx="30"
                  height="26.5"
                  width="64"
                  y="-13.25"
                  x="-32"
                  className="fill-white"
                />
              </g>
            </g>
          </g>
        </g>
        <g opacity="0">
          <animate
            repeatCount="indefinite"
            attributeName="opacity"
            dur="2.002s"
            begin="0s"
            fill="freeze"
            values="0; 0; 1; 1"
            keyTimes="0; 0.75; 0.816667; 1"
            keySplines="0 0 1 1; 0 0 1 1; 0 0 1 1"
            calcMode="spline"
          />
          <g transform="translate(-121,820)">
            <animateTransform
              repeatCount="indefinite"
              type="translate"
              attributeName="transform"
              dur="2.002s"
              begin="0s"
              calcMode="spline"
              values="-121 820; -121 820; 100 819.531; 100 819.531"
              keyTimes="0; 0.666667; 0.816667; 1"
              keySplines="0 0 1 1; 0 0 1 1; 0 0 1 1"
              fill="freeze"
            />
            <g transform="scale(1,0.96) translate(285,-373.061)">
              <g transform="matrix(1,0,0,1,-285.5,379.916)">
                <rect
                  height="70"
                  width="25"
                  y="-35"
                  x="-12.5"
                  className="fill-white"
                />
              </g>
              <g transform="matrix(1,0,0,1,-285,335.25)">
                <rect
                  ry="30"
                  rx="30"
                  height="26.5"
                  width="64"
                  y="-13.25"
                  x="-32"
                  className="fill-white"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
      <button
        type="button"
        onClick={() => setUserPaused(!paused)}
        aria-label={paused ? projects.animationPlay : projects.animationPause}
        className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
      >
        {paused ? <PlayIcon /> : <PauseIcon />}
      </button>
    </div>
  );
}
