'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { divisions } from '@/lib/divisions';
import { site } from '@/lib/site';
import { cn } from '@/lib/cn';
import Button from './Button';
import Container from './Container';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import { CloseIcon, MenuIcon } from './icons';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isCapitalPage = pathname === '/capital';
  const capitalPath = isCapitalPage ? '' : '/capital';
  const navigation = [
    { label: 'WHAT WE OFFER', href: `${capitalPath}#what-we-offer` },
    { label: 'How it works', href: `${capitalPath}#how-it-works` },
    { label: 'Why Within Capital', href: `${capitalPath}#why-within-capital` },
    { label: 'About us', href: `${capitalPath}#about-us` },
  ];
  const contact = isCapitalPage ? '#introduction' : `mailto:${site.email}`;

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="glass-bar sticky top-0 z-50 h-header">
      <Container className="relative flex h-full items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Primary" className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
          <ul className="flex items-center gap-10">
            {isCapitalPage
              ? navigation.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm tracking-[0.04em] text-muted transition-colors duration-300 hover:text-fg">
                      {item.label}
                    </Link>
                  </li>
                ))
              : divisions.map((division) => {
                  const active = pathname === division.path;
                  return (
                    <li key={division.slug}>
                      <Link
                        href={division.path}
                        aria-current={active ? 'page' : undefined}
                        className={cn('text-sm tracking-[0.04em] transition-colors duration-300 hover:text-fg', active ? 'text-fg' : 'text-muted')}
                      >
                        {division.name}
                      </Link>
                    </li>
                  );
                })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button href={contact} size="sm" className="hidden md:inline-flex">Contact us</Button>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className="glass glass-link grid h-11 w-11 place-items-center rounded-full lg:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.215, 0.61, 0.355, 1] }}
            className="absolute inset-x-0 top-full px-4 pt-2 lg:hidden"
          >
            <nav aria-label="Mobile" className="glass rounded-card bg-surface/90 p-3">
              <ul>
                {isCapitalPage
                  ? navigation.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-4 text-lg font-light uppercase tracking-[0.04em]">
                          {item.label}
                        </Link>
                      </li>
                    ))
                  : divisions.map((division) => (
                      <li key={division.slug}>
                        <Link href={division.path} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-4 text-lg font-light uppercase tracking-[0.04em]">
                          {division.title}
                        </Link>
                      </li>
                    ))}
              </ul>
              <Button href={contact} className="mt-2 w-full md:hidden">Contact us</Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
