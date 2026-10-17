import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";
import { siteUrl } from "../content/content";
import { LangProvider } from "../content/i18n/LangProvider";
import { pageMeta, sites, type Lang, type Page } from "../content/i18n/lang";

export const url = siteUrl;

export const getMeta = (lang: Lang, page: Page) => pageMeta(sites[lang], page);

export const render = (lang: Lang, page: Page) =>
  renderToString(
    <StrictMode>
      <LangProvider initialLang={lang} page={page}>
        <App page={page} />
      </LangProvider>
    </StrictMode>,
  );
