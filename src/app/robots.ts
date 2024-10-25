import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
    const URL = "https://minima-mauve.vercel.app"
  return {
    rules: {
      userAgent: '*',
      allow: ['/','/projects','/about'],
      disallow: '/private/',
    },
    sitemap: `${URL}/sitemap.xml`,
  }
}