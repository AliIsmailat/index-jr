import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "../styles/index.css";
import App from "./App";
import { LangProvider } from "../content/i18n/LangProvider";
import { langFromPath, pageFromPath } from "../content/i18n/lang";

const root = document.getElementById("root")!;

const page = pageFromPath();

const tree = (
  <StrictMode>
    <LangProvider initialLang={page === "notfound" ? "sv" : langFromPath()} page={page}>
      <App page={page} />
    </LangProvider>
  </StrictMode>
);

if (root.hasChildNodes()) hydrateRoot(root, tree);
else createRoot(root).render(tree);
