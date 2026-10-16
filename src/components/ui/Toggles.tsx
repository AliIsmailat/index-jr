import { useSyncExternalStore } from "react";
import { useLang, useSite } from "../../content/i18n/lang";
import { MoonIcon, SunIcon } from "./Icons";

type Theme = "light" | "dark";

const subscribeTheme = (notify: () => void) => {
  const observer = new MutationObserver(notify);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
};

const getTheme = (): Theme =>
  document.documentElement.dataset.theme === "dark" ? "dark" : "light";

interface ToggleProps {
  showLabel?: boolean;
  onDark?: boolean;
}

const toggleBase =
  "inline-flex h-11 items-center justify-center gap-2 rounded-full border-2 px-3 font-semibold transition-colors";

const toggleTone = {
  default:
    "border-text text-text [@media(hover:hover)]:hover:bg-text [@media(hover:hover)]:hover:text-page",
  dark: "border-white text-white [@media(hover:hover)]:hover:bg-white [@media(hover:hover)]:hover:text-band",
} as const;

const toggleClass = (onDark: boolean) => `${toggleBase} ${toggleTone[onDark ? "dark" : "default"]}`;

export function ThemeToggle({ showLabel = false, onDark = false }: ToggleProps) {
  const site = useSite();
  const theme = useSyncExternalStore(subscribeTheme, getTheme, () => "light" as Theme);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      return;
    }
  };

  const label = theme === "dark" ? site.ui.toLight : site.ui.toDark;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={showLabel ? undefined : label}
      className={`${toggleClass(onDark)} ${showLabel ? "" : "w-11 px-0"}`}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      {showLabel && <span>{label}</span>}
    </button>
  );
}

export function LanguageToggle({ showLabel = false, onDark = false }: ToggleProps) {
  const { lang, site, setLang } = useLang();

  return (
    <button
      type="button"
      onClick={() => setLang(lang === "sv" ? "en" : "sv")}
      aria-label={site.ui.langAria}
      lang={site.ui.langCodeLang}
      className={`${toggleClass(onDark)} ${showLabel ? "" : "min-w-11"}`}
    >
      <span aria-hidden="true">{showLabel ? site.ui.langName : site.ui.langCode}</span>
    </button>
  );
}
