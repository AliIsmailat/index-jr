import { useEffect, useState } from "react";
import { Wordmark } from "../ui/Wordmark";
import { useSite } from "../../content/i18n/lang";
import { CtaButton } from "../ui/CtaButton";
import { LanguageToggle, ThemeToggle } from "../ui/Toggles";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      {open ? <path d="M6 6L18 18M18 6L6 18" /> : <path d="M4 8H20M4 16H20" />}
    </svg>
  );
}

export function Header() {
  const site = useSite();
  const { nav } = site;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (desktop.matches) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onChange);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onChange);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-line bg-page">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-4 sm:gap-4 sm:px-6">
          <a
            href="#top"
            className="flex min-w-0 items-center gap-3"
            aria-label={site.logoAlt}
            onClick={() => setOpen(false)}
          >
            <Wordmark className="h-6 w-auto md:h-7" />
          </a>

          <nav aria-label={nav.label} className="hidden lg:block">
            <ul role="list" className="flex items-center gap-8">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="font-semibold hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden items-center gap-2 sm:flex">
              <LanguageToggle />
              <ThemeToggle />
            </div>
            <div className="hidden min-[360px]:block">
              <CtaButton size="sm" />
            </div>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobilmeny"
              aria-label={open ? nav.closeLabel : nav.openLabel}
              onClick={() => setOpen((current) => !current)}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-text text-text transition-colors hover:bg-text hover:text-page lg:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
      </header>

      <nav
        id="mobilmeny"
        aria-label={nav.label}
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[calc(4rem+1px)] z-20 overflow-y-auto bg-band lg:hidden"
      >
        <ul role="list" className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          {nav.links.map((link) => (
            <li key={link.href} className="border-b border-white/15">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-5 font-display text-4xl font-extrabold text-white transition-colors hover:text-lime"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mx-auto flex max-w-6xl flex-wrap gap-3 px-4 pb-10 pt-4 sm:hidden">
          <div
            className="w-full min-[360px]:hidden"
            onClick={() => setOpen(false)}
          >
            <CtaButton variant="lime" className="w-full" />
          </div>
          <div className="rounded-full bg-page">
            <LanguageToggle showLabel />
          </div>
          <div className="rounded-full bg-page">
            <ThemeToggle showLabel />
          </div>
        </div>
      </nav>
    </>
  );
}
