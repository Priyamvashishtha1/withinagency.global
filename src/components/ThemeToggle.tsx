'use client';

import { Moon, Sun } from './icons';

export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = next;
    try { localStorage.setItem('wg-theme', next); } catch {}
  };
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      className="glass glass-link grid h-11 w-11 place-items-center rounded-full"
    >
      <Sun className="hidden dark:block" />
      <Moon className="block dark:hidden" />
    </button>
  );
}
