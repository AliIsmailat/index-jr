import { wordmark } from "../../lib/brand";

interface WordmarkProps {
  className?: string;
  tone?: "auto" | "dark";
}

export function Wordmark({ className = "", tone = "auto" }: WordmarkProps) {
  const onDark = tone === "dark";
  return (
    <svg
      viewBox={`0 0 ${wordmark.width} ${wordmark.height}`}
      width={wordmark.width}
      height={wordmark.height}
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path className={onDark ? "fill-white" : "fill-text"} d={wordmark.name} />
      <path className={onDark ? "fill-lime" : "fill-logo-accent"} d={wordmark.accent} />
    </svg>
  );
}
