import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Background from '@/components/Background';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Providers from '@/components/Providers';
import { divisions } from '@/lib/divisions';
import { site } from '@/lib/site';

const inter = localFont({
  src: './fonts/Inter-latin-wght.woff2',
  variable: '--font-inter',
  weight: '100 900',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.fullTitle, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
  colorScheme: 'dark light',
};

// Runs before first paint so the saved theme never flashes. Dark is the default.
const themeScript = `(function(){try{var t=localStorage.getItem('wg-theme');document.documentElement.dataset.theme=t==='light'?'light':'dark'}catch(e){}})()`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  url: site.url,
  description: site.description,
  subOrganization: divisions.map((d) => ({ '@type': 'Organization', name: d.title, url: `${site.url}${d.path}` })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning className={inter.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Background />
        <Providers>
          <Header />
          <main id="main" className="overflow-x-clip">{children}</main>
          <Footer />
        </Providers>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
