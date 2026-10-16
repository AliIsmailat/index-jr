import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { useSite } from "../../../content/i18n/lang";
import { glyphs, type Point } from "./glyphs";
import { PauseIcon, PlayIcon } from "../../ui/Icons";

type Segment = [number, number, number, number];

const query = "(prefers-reduced-motion: reduce)";

const subscribeMotion = (notify: () => void) => {
  const media = window.matchMedia(query);
  media.addEventListener("change", notify);
  return () => media.removeEventListener("change", notify);
};

const getReducedMotion = () => window.matchMedia(query).matches;

const width = 160;
const height = 100;
const glyphWidth = 4;
const glyphHeight = 6;
const glyphGap = 1.5;
const ballRadius = 4;
const speed = 34;
const start = { x: 22, y: 18, vx: speed * 0.78, vy: speed * 0.62 };

function buildText(label: string) {
  const words = label.toUpperCase().split(" ").filter(Boolean);
  const longest = Math.max(...words.map((word) => word.length));
  const longestWidth = longest * glyphWidth + (longest - 1) * glyphGap;
  const scale = Math.min(2.4, 128 / longestWidth);
  const lineHeight = glyphHeight * scale;
  const lineGap = 3 * scale;
  const top = (height - (words.length * lineHeight + (words.length - 1) * lineGap)) / 2;
  const paths: string[] = [];
  const segments: Segment[] = [];

  words.forEach((word, row) => {
    const rowWidth = (word.length * glyphWidth + (word.length - 1) * glyphGap) * scale;
    const left = (width - rowWidth) / 2;
    const y0 = top + row * (lineHeight + lineGap);
    [...word].forEach((letter, column) => {
      const x0 = left + column * (glyphWidth + glyphGap) * scale;
      for (const stroke of glyphs[letter] ?? []) {
        const points = stroke.map(([x, y]): Point => [x0 + x * scale, y0 + y * scale]);
        paths.push(`M${points.map(([x, y]) => `${x.toFixed(2)} ${y.toFixed(2)}`).join("L")}`);
        for (let i = 1; i < points.length; i++) {
          segments.push([points[i - 1][0], points[i - 1][1], points[i][0], points[i][1]]);
        }
      }
    });
  });

  return { paths, segments, strokeWidth: scale };
}

export function ConstructionPreview({ alt }: { alt: string }) {
  const { projects } = useSite();
  const rootRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<SVGCircleElement>(null);
  const ball = useRef({ ...start });
  const reducedMotion = useSyncExternalStore(subscribeMotion, getReducedMotion, () => false);
  const [userPaused, setUserPaused] = useState<boolean | null>(null);
  const [visible, setVisible] = useState(false);
  const paused = userPaused ?? reducedMotion;
  const text = useMemo(() => buildText(projects.wipLabel), [projects.wipLabel]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused || !visible) return;
    const reach = ballRadius + text.strokeWidth / 2;
    const state = ball.current;

    const bounce = (nx: number, ny: number) => {
      const dot = state.vx * nx + state.vy * ny;
      if (dot >= 0) return;
      state.vx -= 2 * dot * nx;
      state.vy -= 2 * dot * ny;
      const minimum = speed * 0.25;
      if (Math.abs(state.vx) < minimum) state.vx = Math.sign(state.vx || 1) * minimum;
      if (Math.abs(state.vy) < minimum) state.vy = Math.sign(state.vy || 1) * minimum;
      const scale = speed / Math.hypot(state.vx, state.vy);
      state.vx *= scale;
      state.vy *= scale;
    };

    const advance = (dt: number) => {
      state.x += state.vx * dt;
      state.y += state.vy * dt;
      if (state.x < ballRadius) {
        state.x = ballRadius;
        bounce(1, 0);
      } else if (state.x > width - ballRadius) {
        state.x = width - ballRadius;
        bounce(-1, 0);
      }
      if (state.y < ballRadius) {
        state.y = ballRadius;
        bounce(0, 1);
      } else if (state.y > height - ballRadius) {
        state.y = height - ballRadius;
        bounce(0, -1);
      }
      for (const [x1, y1, x2, y2] of text.segments) {
        const dx = x2 - x1;
        const dy = y2 - y1;
        const t = Math.max(
          0,
          Math.min(1, ((state.x - x1) * dx + (state.y - y1) * dy) / (dx * dx + dy * dy)),
        );
        const px = x1 + t * dx;
        const py = y1 + t * dy;
        const gapX = state.x - px;
        const gapY = state.y - py;
        const distance = Math.hypot(gapX, gapY);
        if (distance >= reach) continue;
        const nx = distance === 0 ? -state.vx / speed : gapX / distance;
        const ny = distance === 0 ? -state.vy / speed : gapY / distance;
        state.x = px + nx * reach;
        state.y = py + ny * reach;
        bounce(nx, ny);
      }
    };

    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const steps = Math.max(1, Math.ceil((speed * dt) / 1.5));
      for (let i = 0; i < steps; i++) advance(dt / steps);
      ballRef.current?.setAttribute("cx", state.x.toFixed(2));
      ballRef.current?.setAttribute("cy", state.y.toFixed(2));
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [paused, visible, text]);

  return (
    <div
      ref={rootRef}
      className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-band-surface to-band"
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label={alt}
        className="absolute inset-0 h-full w-full"
      >
        <g
          fill="none"
          strokeWidth={text.strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-white"
        >
          {text.paths.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
        <circle ref={ballRef} cx={start.x} cy={start.y} r={ballRadius} className="fill-lime" />
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
