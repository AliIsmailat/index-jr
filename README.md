# Index JR

Portfolio and business site for Index JR, a one-person web studio in Malmö building fast, accessible websites for local businesses. Swedish and English, light and dark theme.

**Live:** https://indexjr.com

## Highlights

- **Static prerendering without a framework.** React 19 is rendered to HTML at build time for every route and language (`/`, `/en/`, `/integritet/`, `/en/privacy/`) and hydrated in the browser. No router library, no runtime server.
- **Typed i18n.** Swedish is the source of truth (`sv.ts`), English must match its type (`Site`), so a missing translation fails the build.
- **Design tokens in one place.** Colors, fonts and metrics live in `content.ts` and feed both Tailwind and the generated CSS variables for light and dark mode.
- **Self-hosted variable fonts** with metric-matched fallbacks, preloaded and cached immutably, for stable layout and no third-party requests.
- **Contact form with its own backend.** The form posts JSON to a Netlify Function (`netlify/functions/contact.ts`) that validates the input on the server with the same rules as the client, drops honeypot hits, enforces length limits and sends the message through the Resend API. The API key and recipient live in environment variables, not in the repository. The form itself has accessible validation (error summary, focus management, `aria-describedby`).
- **Accessibility first.** Semantic landmarks, skip link, visible focus, reduced-motion support, keyboard-friendly mobile menu.
- **SEO.** Per-page canonical and `hreflang` tags, sitemap, Open Graph metadata and `llms.txt`, all generated at build time.
- **No cookies, no analytics.** The theme choice is the only thing stored, in the browser's `localStorage`.

Lighthouse (mobile, production): Performance 99, Accessibility 100, Best Practices 100, SEO 100.

## Tech stack

React 19, TypeScript, Vite, Tailwind CSS 3, vite-imagetools, oxlint, Prettier. Hosted on Netlify, with one Netlify Function for the contact form and Resend for email delivery.

## Getting started

Requires Node.js 22.

```bash
npm install
npm run dev
```

| Script                 | What it does                                          |
| ---------------------- | ----------------------------------------------------- |
| `npm run dev`          | Start the Vite dev server                             |
| `npm run build`        | Type-check, build client and server, prerender routes |
| `npm run preview`      | Serve the production build locally                    |
| `npm run lint`         | Lint with oxlint                                      |
| `npm run format`       | Format the codebase with Prettier                     |
| `npm run format:check` | Check formatting without changing files               |

## Project structure

```
scripts/prerender.mjs      Renders every route and language to static HTML, sitemap and robots.txt
netlify/functions/         Serverless function for the contact form (POST /api/contact)
src/
  app/                     App shell, client entry and server entry
  components/
    layout/                Header and Footer
    sections/              Page sections (hero, projects, services, process, about, contact, legal)
    ui/                    Reusable pieces (icons, buttons, toggles, picture, wordmark)
  content/
    content.ts             Site data and design tokens
    i18n/                  Swedish and English copy, language context and routes
  lib/                     Shared helpers (button styles, brand)
  styles/                  Global CSS
```

## How the prerendering works

`vite build` produces the client bundle, `vite build --ssr` produces `entry-server`, and `scripts/prerender.mjs` calls its `render(lang, page)` for every route, injects the markup and page metadata into the HTML template and writes one `index.html` per route. The same `App` runs on the client and hydrates the markup.

## Deployment

Pushing to `main` deploys on Netlify (`npm run build`, publish directory `dist`). Cache headers are in `public/_headers`.

The contact function needs these environment variables in Netlify:

| Variable             | Purpose                                                                            |
| -------------------- | ---------------------------------------------------------------------------------- |
| `RESEND_API_KEY`     | Resend API key (mark as secret)                                                    |
| `CONTACT_TO_EMAIL`   | Address that receives the enquiries                                                |
| `CONTACT_FROM_EMAIL` | Sender on the verified Resend domain, for example `Index JR <noreply@indexjr.com>` |

Netlify Forms was replaced because email notifications for it require a paid plan.

## Licensing and credits

The source code is released under the MIT license (see `LICENSE`). The Index JR name, logo, copy and project screenshots are not covered by it.

Fonts are used under the SIL Open Font License 1.1: [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque) and [Instrument Sans](https://fonts.google.com/specimen/Instrument+Sans).
