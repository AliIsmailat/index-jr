import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { LangContext, langFromPath, sites, type Lang } from "./lang";

interface LangProviderProps {
  initialLang: Lang;
  children: ReactNode;
}

export function LangProvider({ initialLang, children }: LangProviderProps) {
  const [lang, setLangState] = useState<Lang>(initialLang);
  const site = sites[lang];

  useEffect(() => {
    const onPop = () => setLangState(langFromPath());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = site.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", site.meta.description);
  }, [lang, site]);

  const setLang = (next: Lang) => {
    const path = next === "en" ? "/en/" : "/";
    window.history.pushState(null, "", `${path}${window.location.hash}`);
    setLangState(next);
  };

  return (
    <LangContext.Provider value={{ lang, site, setLang }}>
      {children}
    </LangContext.Provider>
  );
}
