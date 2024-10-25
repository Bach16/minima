import { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const baseUrl = "https://minima-mauve.vercel.app"

  // Example routes for localization
  const routes = [
    { path: '/', priority: 1.0 },
    { path: '/about', priority: 0.8 },
    { path: '/projects', priority: 0.8 },
  ];
  const locales = ['en', 'es'];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:xhtml="http://www.w3.org/1999/xhtml">
    ${routes
      .map((route) =>
        locales
          .map((locale) => {
            const localePath = locale === 'en' ? '' : `/${locale}`;
            return `
              <url>
                <loc>${baseUrl}${localePath}${route.path}</loc>
                <xhtml:link
                  rel="alternate"
                  hreflang="${locale}"
                  href="${baseUrl}${localePath}${route.path}"
                />
                <priority>${route.priority}</priority>
              </url>
            `;
          })
          .join('')
      )
      .join('')}
  </urlset>`;

  res?.setHeader('Content-Type', 'application/xml');
  res?.status(200).send(sitemap);
}