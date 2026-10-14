import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";
import { siteUrl } from "../content/content";
import { LangProvider } from "../content/i18n/LangProvider";
import { sites, type Lang } from "../content/i18n/lang";

export const url = siteUrl;

export const getMeta = (lang: Lang) => sites[lang].meta;

export const render = (lang: Lang) =>
  renderToString(
    <StrictMode>
      <LangProvider initialLang={lang}>
        <App />
      </LangProvider>
    </StrictMode>,
  );
