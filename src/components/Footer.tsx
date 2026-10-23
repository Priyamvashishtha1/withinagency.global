import Link from 'next/link';
import { divisions } from '@/lib/divisions';
import { site } from '@/lib/site';
import Container from './Container';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--glass-border)]">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-6 max-w-[34ch] text-body text-muted">{site.tagline}</p>
            <address className="mt-6 space-y-2 text-sm not-italic text-muted">
              <p>Within Capital connects investors with independent third-party providers. Provider details and regulatory status are shared directly during an introduction.</p>
            </address>
          </div>
          <nav aria-label="Divisions" className="md:col-span-3 md:col-start-8">
            <p className="text-label text-muted">Divisions</p>
            <ul className="mt-5 space-y-3">
              {divisions.map((d) => (
                <li key={d.slug}>
                  <Link href={d.path} className="font-light uppercase tracking-[0.04em] transition-colors hover:text-muted">{d.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Legal" className="md:col-span-2">
            <p className="text-label text-muted">Legal</p>
            <ul className="mt-5 space-y-3">
              {site.legal.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-muted transition-colors hover:text-fg">{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-2 border-t border-[var(--glass-border)] pt-8 text-label text-muted sm:flex-row">
          {/* <p>© {new Date().getFullYear()} Within Global. All rights reserved.</p> */}
          <p>© 2026 Within Global. All rights reserved.</p>
          <p className="lowercase">withinagency.global</p>
        </div>
      </Container>
    </footer>
  );
}
