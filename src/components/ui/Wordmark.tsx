import { wordmark } from "../../lib/brand";

export function Wordmark({
  className = "",
  onBand = false,
}: {
  className?: string;
  onBand?: boolean;
}) {
  return (
    <svg
      viewBox={`0 0 ${wordmark.width} ${wordmark.height}`}
      width={wordmark.width}
      height={wordmark.height}
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path className={onBand ? "fill-white" : "fill-text"} d={wordmark.name} />
      <path
        className={onBand ? "fill-lime" : "fill-logo-accent"}
        d={wordmark.accent}
      />
    </svg>
  );
}
