import { useState } from "react";
import { social } from "../../content/content";
import { useLang, useSite } from "../../content/i18n/lang";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "../ui/Icons";
import { Wordmark } from "../ui/Wordmark";

const linkClass = "inline-flex items-center gap-2 text-white hover:text-lime";

export function Footer() {
  const site = useSite();
  const { lang } = useLang();
  const [year] = useState(() => new Date().getFullYear());
  const newTab = `, ${site.projects.newTabLabel}`;

  return (
    <footer className="border-t border-white/15 bg-band py-10 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-[1fr_auto] md:gap-16">
        <div className="flex flex-col gap-2">
          <p>
            <Wordmark tone="dark" className="h-7 w-auto" />
            <span className="sr-only">{site.brand}</span>
          </p>
          <p className="text-band-muted">{site.footerText}</p>
          <p className="mt-2">
            <a
              href={social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <InstagramIcon className="h-5 w-5" />
              <span className="sr-only">Instagram: </span>@{social.instagram.handle}
              <span className="sr-only">{newTab}</span>
            </a>
          </p>
        </div>

        <div className="flex flex-col gap-2 md:border-l md:border-white/15 md:pl-16">
          <p className="border-b border-white/15 pb-3 text-sm font-semibold uppercase tracking-[0.15em] text-band-muted">
            {site.footerPersonal}
          </p>
          <ul role="list" className="mt-3 grid gap-2">
            <li>
              <a
                href={social.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                <GithubIcon className="h-5 w-5" />
                GitHub
                <span className="sr-only">{newTab}</span>
              </a>
            </li>
            <li>
              <a
                href={social.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                <LinkedinIcon className="h-5 w-5" />
                LinkedIn
                <span className="sr-only">{newTab}</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2 text-sm text-band-muted md:col-span-2">
          <a href={site.legal.href} className="w-fit underline underline-offset-4 hover:text-lime">
            {site.legal.footerLink}
          </a>
          <p>
            &copy; <span suppressHydrationWarning>{year}</span> {site.brand}.{" "}
            {lang === "sv" ? "Alla rättigheter förbehållna." : "All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
}
