import { useState } from "react";
import { useSite } from "../../content/i18n/lang";
import { Wordmark } from "../ui/Wordmark";
import { social } from "../../content/content.ts";
import { InstagramIcon } from "../ui/Icons";

export function Footer() {
  const site = useSite();
  const [year] = useState(() => new Date().getFullYear());

  return (
    <footer className="border-t border-white/15 bg-band py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 sm:px-6">
        <p>
          <Wordmark onBand className="h-8 w-auto" />
          <span className="sr-only">{site.brand}</span>
        </p>{" "}
        <p className="text-band-muted">{site.footerText}</p>
        <p className="mt-2">
          <a
            href={social.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-lime"
          >
            <InstagramIcon className="h-5 w-5" />
            <span className="sr-only">Instagram: </span>@
            {social.instagram.handle}
            <span className="sr-only">, {site.projects.newTabLabel}</span>
          </a>
        </p>
        <p className="mt-4 text-sm text-band-muted">
          &copy; <span suppressHydrationWarning>{year}</span> {site.owner}
        </p>
      </div>
    </footer>
  );
}
