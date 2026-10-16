import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";
import { imagetools } from "vite-imagetools";
import { faviconSvg } from "./src/lib/brand.ts";
import { theme } from "./src/content/content.ts";
import { sv } from "./src/content/i18n/sv.ts";

const escapeHtml = (value: string) =>
  value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");

const fonts = Object.values(theme.fonts);

const fontCss = fonts
  .map((font) => {
    const { sizeAdjust, ascent, descent } = font.fallback;
    const metrics = `size-adjust:${sizeAdjust}%;ascent-override:${ascent}%;descent-override:${descent}%;line-gap-override:0%`;
    return (
      `@font-face{font-family:"${font.family}";src:url(/fonts/${font.file}) format("woff2");font-weight:${font.range};font-display:swap}` +
      `@font-face{font-family:"${font.family} Fallback";src:local("Arial");font-weight:400;${metrics}}` +
      `@font-face{font-family:"${font.family} Fallback";src:local("Arial Bold"),local("Arial-BoldMT");font-weight:500 800;${metrics}}`
    );
  })
  .join("");

const fontPreloads = fonts
  .map(
    (font) =>
      `<link rel="preload" href="/fonts/${font.file}" as="font" type="font/woff2" crossorigin />`,
  )
  .join("");

const toRgb = (hex: string) =>
  [1, 3, 5].map((index) => parseInt(hex.slice(index, index + 2), 16)).join(" ");

const kebab = (name: string) => name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

const declarations = (colors: Record<string, string>) =>
  Object.entries(colors)
    .map(([name, hex]) => `--${kebab(name)}:${toRgb(hex)};`)
    .join("");

const themeCss =
  `:root{${declarations(theme.colors.light)}--lime:${toRgb(theme.colors.lime)};--on-lime:${toRgb(theme.colors.onLime)};color-scheme:light}` +
  `:root[data-theme='dark']{${declarations(theme.colors.dark)}color-scheme:dark}`;

const favicon = faviconSvg(theme.colors.lime, theme.colors.onLime);

const faviconFromTheme = (): Plugin => ({
  name: "favicon-from-theme",
  configureServer(server) {
    server.middlewares.use("/favicon.svg", (_request, response) => {
      response.setHeader("Content-Type", "image/svg+xml");
      response.end(favicon);
    });
  },
  generateBundle() {
    this.emitFile({ type: "asset", fileName: "favicon.svg", source: favicon });
  },
});

const htmlFromContent = (): Plugin => {
  const values: Record<string, string> = {
    title: sv.meta.title,
    description: sv.meta.description,
    themeColorLight: theme.colors.light.page,
    themeColorDark: theme.colors.dark.page,
  };

  return {
    name: "html-from-content",
    transformIndexHtml: {
      order: "pre",
      handler: (html) =>
        html
          .replace("/*themeCss*/", themeCss + fontCss)
          .replace("{{fontPreloads}}", fontPreloads)
          .replace(/\{\{(\w+)\}\}/g, (match, key: string) =>
            key in values ? escapeHtml(values[key]) : match,
          ),
    },
  };
};

export default defineConfig({
  plugins: [
    react(),
    imagetools({ include: /^[^?]+\.(avif|gif|heif|jpeg|jpg|png|tiff|webp)(\?.*)?$/i }),
    htmlFromContent(),
    faviconFromTheme(),
  ],
});
