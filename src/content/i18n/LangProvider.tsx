import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { LangContext, langFromPath, pageMeta, routes, sites, type Lang, type Page } from "./lang";

interface LangProviderProps {
  initialLang: Lang;
  page: Page;
  children: ReactNode;
}

export function LangProvider({ initialLang, page, children }: LangProviderProps) {
  const [lang, setLangState] = useState<Lang>(initialLang);
  const site = sites[lang];
  const meta = pageMeta(site, page);

  useEffect(() => {
    const onPop = () => setLangState(langFromPath());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    if (page === "notfound") setLangState(langFromPath());
  }, [page]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
  }, [lang, meta]);

  const setLang = (next: Lang) => {
    if (page !== "notfound") {
      window.history.pushState(null, "", `${routes[next][page]}${window.location.hash}`);
    }
    setLangState(next);
  };

  return <LangContext.Provider value={{ lang, site, setLang }}>{children}</LangContext.Provider>;
}
