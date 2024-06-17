import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const URL = "https://minima-mauve.vercel.app"
  return [
    {
      url: `${URL}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${URL}/es`,
          en: `${URL}/en`,
        },
      },
    },
    {
      url: `${URL}/about`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${URL}/es/about`,
          en: `${URL}/en/about`,
        },
      },
    },
    {
      url: `${URL}/projects`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${URL}/es/projects`,
          en: `${URL}/en/projects`,
        },
      },
    },
  ]
}