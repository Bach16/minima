import { NextResponse } from 'next/server';
 
export async function GET() {
  try {
    const baseUrl = "https://minima-mauve.vercel.app";

    // Example routes for localization
    const routes = [
      { path: '/', priority: 1.0 },
      { path: '/about', priority: 0.8 },
      { path: '/projects', priority: 0.8 },
    ];
    
    const locales = ['en', 'es'];
    
    // Create timestamp for lastmod
    const lastmod = new Date().toISOString();

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
                  ${locales
                    .map(
                      (altLocale) => `
                      <xhtml:link 
                        rel="alternate"
                        hreflang="${altLocale}"
                        href="${baseUrl}${altLocale === 'en' ? '' : `/${altLocale}`}${route.path}"
                      />`
                    )
                    .join('')}
                  <lastmod>${lastmod}</lastmod>
                  <priority>${route.priority}</priority>
                </url>
              `;
            })
            .join('')
        )
        .join('')}
    </urlset>`;

    // Return the XML with proper headers
    return new NextResponse(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new NextResponse('Error generating sitemap', { status: 500 });
  }
}