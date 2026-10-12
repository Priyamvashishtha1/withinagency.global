import type { ElementType, HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

interface Props extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  /** Lift + border brighten + sheen sweep on hover. */
  interactive?: boolean;
}

export default function GlassCard({ as: Tag = 'div', interactive = true, className, children, ...rest }: Props) {
  return (
    <Tag data-interactive={interactive} className={cn('glass glass-card', className)} {...rest}>
      {children}
    </Tag>
  );
}
