export type IconName =
  "window" | "calendar" | "gauge" | "phone" | "mail" | "pin" | "check" | "arrow";

export type ProjectId = "cafe" | "pizzeria" | "barber" | "nordkant" | "memory";

export interface ProjectData {
  url: string;
  status: "live" | "wip";
  media?: { desktop: string; mobile: string };
}

export const projectData: Record<ProjectId, ProjectData> = {
  cafe: {
    url: "https://cafekardemumma.netlify.app/",
    status: "live",
    media: { desktop: "cafe-desktop", mobile: "cafe-mobil" },
  },
  pizzeria: {
    url: "https://pizzeria-bella-nova.netlify.app/",
    status: "live",
    media: { desktop: "pizzeria-desktop", mobile: "pizzeria-mobil" },
  },
  barber: {
    url: "https://skarp-barber.netlify.app/",
    status: "live",
    media: { desktop: "barber-desktop", mobile: "barber-mobil" },
  },
  nordkant: {
    url: "https://nordkant-installation.netlify.app/",
    status: "live",
    media: { desktop: "nordkant-desktop", mobile: "nordkant-mobil" },
  },
  memory: {
    url: "https://memory-game-test-lol.netlify.app/",
    status: "wip",
  },
};

export const siteUrl = "https://indexjr.com";
export const social = {
  instagram: { url: "https://www.instagram.com/index.jr/", handle: "index.jr" },
  github: { url: "https://github.com/AliIsmailat", handle: "AliIsmailat" },
  linkedin: { url: "https://www.linkedin.com/in/ali-ismailat-b21401231/", handle: "Ali Ismailat" },
};

export const theme = {
  colors: {
    light: {
      page: "#F4F3EF",
      surface: "#FFFFFF",
      text: "#111214",
      muted: "#55575C",
      line: "#DAD8D0",
      band: "#111214",
      bandSurface: "#1C1E22",
      bandMuted: "#A9ACB3",
      logoAccent: "#5F7A00",
    },
    dark: {
      page: "#111214",
      surface: "#1C1E22",
      text: "#F4F3EF",
      muted: "#A9ACB3",
      line: "#2E3036",
      band: "#0A0B0C",
      bandSurface: "#17191C",
      bandMuted: "#A9ACB3",
      logoAccent: "#C8F169",
    },
    lime: "#C8F169",
    onLime: "#111214",
  },
  fonts: {
    display: {
      family: "Bricolage Grotesque",
      file: "bricolage-grotesque-latin-wght-normal.woff2",
      range: "200 800",
      fallback: { sizeAdjust: 104.13, ascent: 89.32, descent: 25.93 },
    },
    body: {
      family: "Instrument Sans",
      file: "instrument-sans-latin-wght-normal.woff2",
      range: "400 700",
      fallback: { sizeAdjust: 103.86, ascent: 93.39, descent: 24.07 },
    },
  },
  radius: { card: "20px" },
};
