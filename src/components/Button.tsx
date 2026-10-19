import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface Props {
  href: string;
  variant?: 'primary' | 'glass';
  size?: 'md' | 'sm';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  children: ReactNode;
}

const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pill font-normal tracking-[0.02em] transition-[background-color,border-color,transform] duration-300 ease-out-cubic active:scale-[0.98]';
const sizes = { md: 'h-btn px-7 text-[15px]', sm: 'h-11 px-6 text-sm' };
const variants = {
  primary: 'bg-fg text-bg hover:bg-fg/85',
  glass: 'glass glass-link text-fg',
};

/** Pill button (52px high, 28px padding). Internal paths use next/link; mailto/http use <a>. */
export default function Button({ href, variant = 'primary', size = 'md', className, type = 'button', disabled = false, children }: Props) {
  const cls = cn(base, sizes[size], variants[variant], disabled && 'cursor-not-allowed opacity-60', className);
  if (type === 'submit' || type === 'reset') {
    return <button type={type} className={cls} disabled={disabled}>{children}</button>;
  }
  return href.startsWith('/') ? (
    <Link href={href} className={cls}>{children}</Link>
  ) : href.startsWith('#') ? (
    <a href={href} className={cls}>{children}</a>
  ) : <a href={href} className={cls}>{children}</a>;
}
