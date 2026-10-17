import { createContext, useContext } from "react";
import { en } from "./en";
import { sv, type Site } from "./sv";

export type Lang = "sv" | "en";
export type RoutedPage = "home" | "legal";
export type Page = RoutedPage | "notfound";

export const routes: Record<Lang, Record<RoutedPage, string>> = {
  sv: { home: "/", legal: "/integritet/" },
  en: { home: "/en/", legal: "/en/privacy/" },
};

export const sites: Record<Lang, Site> = { sv, en };

export interface LangValue {
  lang: Lang;
  site: Site;
  setLang: (lang: Lang) => void;
}

export const LangContext = createContext<LangValue>({
  lang: "sv",
  site: sv,
  setLang: () => undefined,
});

export const langFromPath = (): Lang => (window.location.pathname.startsWith("/en") ? "en" : "sv");

export const pageFromPath = (): Page => {
  const path = window.location.pathname.replace(/\/?$/, "/");
  if (path === routes.sv.legal || path === routes.en.legal) return "legal";
  if (path === routes.sv.home || path === routes.en.home) return "home";
  return "notfound";
};

export const pageMeta = (site: Site, page: Page) => {
  if (page === "legal") return site.legal.meta;
  if (page === "notfound") return site.notFound.meta;
  return site.meta;
};

export const useSite = () => useContext(LangContext).site;
export const useLang = () => useContext(LangContext);
