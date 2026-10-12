import Link from 'next/link';
import type { Division } from '@/lib/divisions';
import GlassCard from './GlassCard';
import { ArrowRight } from './icons';

/** Whole card is clickable through a single stretched link on the arrow button. */
export default function DivisionCard({ division }: { division: Division }) {
  return (
    <GlassCard className="group flex h-full min-h-card flex-col p-8 lg:p-10">
      <h3 className="text-h3 font-light uppercase">
        Within <span className="block">{division.name}</span>
      </h3>
      <p className="mt-3 text-label lowercase text-muted">{division.url}</p>
      <p className="mt-6 text-body text-muted">{division.short}</p>
      <Link
        href={division.path}
        aria-label={`Explore ${division.title}`}
        className="mt-auto ml-auto pt-10 after:absolute after:inset-0 after:content-['']"
      >
        <span className="glass glass-link grid h-btn w-btn place-items-center rounded-full">
          <ArrowRight className="transition-transform duration-500 ease-out-cubic group-hover:translate-x-1" />
        </span>
      </Link>
    </GlassCard>
  );
}
