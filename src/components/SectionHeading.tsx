import { cn } from '@/lib/cn';

interface Props {
  title: string;
  description?: string;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2' | 'h3';
  id?: string;
  className?: string;
}

export default function SectionHeading({ title, description, align = 'left', as: Tag = 'h2', id, className }: Props) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      <Tag id={id} className="text-h2 font-light uppercase text-balance">{title}</Tag>
      {description && <p className={cn('mt-6 max-w-[60ch] text-body text-muted', align === 'center' && 'mx-auto')}>{description}</p>}
    </div>
  );
}
