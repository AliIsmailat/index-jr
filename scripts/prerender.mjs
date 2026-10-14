import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = path.resolve(import.meta.dirname, '..')
const dist = path.join(root, 'dist')
const server = await import(
  pathToFileURL(path.join(root, 'dist-server', 'entry-server.js')).href
)

const escapeHtml = (value) =>
  value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;')

const base = server.url.replace(/\/$/, '')
const template = await readFile(path.join(dist, 'index.html'), 'utf8')

const pages = [
  { lang: 'sv', file: 'index.html', route: '/', locale: 'sv_SE' },
  { lang: 'en', file: path.join('en', 'index.html'), route: '/en/', locale: 'en_US' },
]

const alternates = base
  ? [
      `<link rel="alternate" hreflang="sv" href="${base}/" />`,
      `<link rel="alternate" hreflang="en" href="${base}/en/" />`,
      `<link rel="alternate" hreflang="x-default" href="${base}/" />`,
    ]
  : []

for (const page of pages) {
  const meta = server.getMeta(page.lang)
  const title = escapeHtml(meta.title)
  const description = escapeHtml(meta.description)

  const head = [
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:locale" content="${page.locale}" />`,
    `<meta name="twitter:card" content="summary" />`,
    ...(base
      ? [
          `<link rel="canonical" href="${base}${page.route}" />`,
          `<meta property="og:url" content="${base}${page.route}" />`,
          ...alternates,
        ]
      : []),
  ].join('\n    ')

  const html = template
    .replace('<html lang="sv">', () => `<html lang="${page.lang}">`)
    .replace(/<title>.*?<\/title>/, () => `<title>${title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, (_, open, close) => `${open}${description}${close}`)
    .replace('</head>', () => `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', () => `<div id="root">${server.render(page.lang)}</div>`)

  const target = path.join(dist, page.file)
  await mkdir(path.dirname(target), { recursive: true })
  await writeFile(target, html)
}

const robots = ['User-agent: *', 'Allow: /', ...(base ? [`Sitemap: ${base}/sitemap.xml`] : [])]
await writeFile(path.join(dist, 'robots.txt'), `${robots.join('\n')}\n`)

if (base) {
  const urls = pages
    .map(
      (page) =>
        `  <url>\n    <loc>${base}${page.route}</loc>\n${pages
          .map(
            (other) =>
              `    <xhtml:link rel="alternate" hreflang="${other.lang}" href="${base}${other.route}" />`,
          )
          .join('\n')}\n  </url>`,
    )
    .join('\n')
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`
  await writeFile(path.join(dist, 'sitemap.xml'), sitemap)
}
