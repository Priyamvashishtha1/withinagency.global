import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

/** Side padding 24 / 48 / 80px; content capped at 1280px. */
export default function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('mx-auto w-full max-w-page px-6 md:px-12 lg:px-20', className)}>{children}</div>;
}
