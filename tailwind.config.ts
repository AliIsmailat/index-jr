import type { Config } from "tailwindcss";
import { theme } from "./src/content/content.ts";

const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        page: token("page"),
        surface: token("surface"),
        text: token("text"),
        muted: token("muted"),
        line: token("line"),
        band: token("band"),
        "band-surface": token("band-surface"),
        "band-muted": token("band-muted"),
        "logo-accent": token("logo-accent"),
        lime: token("lime"),
        "on-lime": token("on-lime"),
      },
      fontFamily: {
        display: [
          `"${theme.fonts.display.family}"`,
          `"${theme.fonts.display.family} Fallback"`,
          "system-ui",
          "sans-serif",
        ],
        sans: [
          `"${theme.fonts.body.family}"`,
          `"${theme.fonts.body.family} Fallback"`,
          "system-ui",
          "sans-serif",
        ],
      },
      borderRadius: {
        card: theme.radius.card,
      },
    },
  },
} satisfies Config;
