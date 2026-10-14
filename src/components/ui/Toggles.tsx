import { useSyncExternalStore } from "react";
import { useLang, useSite } from "../../content/i18n/lang";

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
}

const toggleClass =
  "inline-flex h-11 items-center justify-center gap-2 rounded-full border-2 border-text px-3 font-semibold text-text transition-colors hover:bg-text hover:text-page";

export function ThemeToggle({ showLabel = false }: ToggleProps) {
  const site = useSite();
  const theme = useSyncExternalStore(
    subscribeTheme,
    getTheme,
    () => "light" as Theme,
  );

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
      className={`${toggleClass} ${showLabel ? "" : "w-11 px-0"}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {theme === "dark" ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4" />
          </>
        ) : (
          <path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z" />
        )}
      </svg>
      {showLabel && <span>{label}</span>}
    </button>
  );
}

export function LanguageToggle({ showLabel = false }: ToggleProps) {
  const { lang, site, setLang } = useLang();

  return (
    <button
      type="button"
      onClick={() => setLang(lang === "sv" ? "en" : "sv")}
      aria-label={site.ui.langAria}
      lang={site.ui.langCodeLang}
      className={`${toggleClass} ${showLabel ? "" : "min-w-11"}`}
    >
      <span aria-hidden="true">
        {showLabel ? site.ui.langName : site.ui.langCode}
      </span>
    </button>
  );
}
