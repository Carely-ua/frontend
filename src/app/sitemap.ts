import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://carely.com.ua',
      lastModified: new Date(),
    },
    {
      url: 'https://carely.com.ua/clinics',
      lastModified: new Date(),
    },
    {
      url: 'https://carely.com.ua/labs',
      lastModified: new Date(),
    },
    {
      url: 'https://carely.com.ua/analyzes',
      lastModified: new Date(),
    },
    {
      url: 'https://carely.com.ua/consultations',
      lastModified: new Date(),
    },
    {
      url: 'https://carely.com.ua/diagnostics',
      lastModified: new Date(),
    },
  ];
}
