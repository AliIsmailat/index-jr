import { useEffect, useState } from "react";
import { Wordmark } from "../ui/Wordmark";
import { useSite } from "../../content/i18n/lang";
import { Icon, MenuIcon } from "../ui/Icons";
import { LanguageToggle, ThemeToggle } from "../ui/Toggles";

export function Header() {
  const site = useSite();
  const { nav } = site;
  const [open, setOpen] = useState(false);
  const contactLabel = nav.links.find((link) => link.href.endsWith("#kontakt"))?.label ?? "";

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
            href={nav.home}
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
            <a
              href={site.cta.href}
              onClick={() => setOpen(false)}
              aria-label={contactLabel}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-lime font-display font-bold text-on-lime transition-colors min-[381px]:w-auto min-[381px]:px-4 [@media(hover:hover)]:hover:bg-text [@media(hover:hover)]:hover:text-page lg:hidden"
            >
              <Icon name="mail" className="h-5 w-5" />
              <span className="hidden min-[381px]:inline">{contactLabel}</span>
            </a>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobilmeny"
              aria-label={open ? nav.closeLabel : nav.openLabel}
              onClick={() => setOpen((current) => !current)}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-text text-text transition-colors [@media(hover:hover)]:hover:bg-text [@media(hover:hover)]:hover:text-page lg:hidden"
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
        <div className="mx-auto max-w-6xl px-4 pt-5 sm:px-6">
          <a
            href={site.legal.href}
            onClick={() => setOpen(false)}
            className="inline-block py-2 text-lg font-semibold text-band-muted underline underline-offset-4 hover:text-lime"
          >
            {site.legal.footerLink}
          </a>
        </div>
        <div className="mx-auto flex max-w-6xl flex-wrap gap-3 px-4 pb-10 pt-4 sm:hidden">
          <LanguageToggle showLabel onDark />
          <ThemeToggle showLabel onDark />
        </div>
      </nav>
    </>
  );
}
