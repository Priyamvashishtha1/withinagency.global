import type { Metadata } from 'next';
import { site } from './site';

export function pageMetadata({
  title,
  description,
  path,
}: {
  title?: string;
  description: string;
  path: string;
}): Metadata {
  const ogTitle = title ? `${title} | ${site.name}` : site.fullTitle;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description,
      url: path,
      siteName: site.name,
      type: 'website',
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: site.name }],
    },
    twitter: { card: 'summary_large_image', title: ogTitle, description, images: ['/opengraph-image'] },
  };
}
