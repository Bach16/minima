
export default function sitemap(){
  const BASE_URL = "https://minima-mauve.vercel.app";
  return [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${BASE_URL}/es`,
          en: `${BASE_URL}/en`,
        },
      },
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${BASE_URL}/es/projects`,
          en: `${BASE_URL}/en/projects`,
        },
      },
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${BASE_URL}/es/about`,
          en: `${BASE_URL}/en/about`,
        },
      },
    },
  ];
}
