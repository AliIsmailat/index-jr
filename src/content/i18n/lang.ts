import { createContext, useContext } from "react";
import { en } from "./en";
import { sv, type Site } from "./sv";

export type Lang = "sv" | "en";
export type Page = "home" | "legal";

export const routes: Record<Lang, Record<Page, string>> = {
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
  return path === routes.sv.legal || path === routes.en.legal ? "legal" : "home";
};

export const useSite = () => useContext(LangContext).site;
export const useLang = () => useContext(LangContext);
