import { buttonClasses, type ButtonSize, type ButtonVariant } from "../../lib/buttonStyles";
import { useSite } from "../../content/i18n/lang";

interface CtaButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

export function CtaButton({ variant = "solid", size = "lg", className = "" }: CtaButtonProps) {
  const site = useSite();
  return (
    <a href={site.cta.href} className={`${buttonClasses(variant, size)} ${className}`}>
      {site.cta.label}
    </a>
  );
}
