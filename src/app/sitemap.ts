import type { MetadataRoute } from 'next';
import { divisions } from '@/lib/divisions';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: site.url, lastModified, changeFrequency: 'monthly', priority: 1 },
    ...divisions.map((d) => ({
      url: `${site.url}${d.path}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
