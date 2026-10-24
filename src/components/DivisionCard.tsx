import type { Division } from '@/lib/divisions';
import GlassCard from './GlassCard';
import { ArrowRight } from './icons';

/** Whole card is clickable through a single stretched link on the arrow button. */
export default function DivisionCard({ division, compact = false }: { division: Division; compact?: boolean }) {
  const isNewLuxury = division.slug === 'new-luxury';
  const isAvailable = division.slug === 'capital';

  return (
    <GlassCard data-division={division.slug} className={`group flex h-full min-h-card flex-col p-8 ${compact ? 'xl:p-6' : 'lg:p-10'}`}>
      <h3 className="text-h3 font-light uppercase text-[var(--division-text,var(--fg))]">
        Within <span className={isNewLuxury ? 'block whitespace-nowrap' : 'block'}>{division.name}</span>
      </h3>
      <p className={`${isNewLuxury ? 'mt-3 whitespace-nowrap' : 'mt-3'} text-label lowercase text-[var(--division-small,var(--division-text,var(--muted)))]`}>{division.url}</p>
      <p className="mt-6 text-body text-[var(--division-text,var(--muted))]">{division.short}</p>
      {isAvailable ? (
        <a
          href={division.path}
          aria-label={`Explore ${division.title}`}
          className="mt-auto ml-auto pt-10 after:absolute after:inset-0 after:content-['']"
        >
          <span className="division-card-action glass glass-link grid h-btn w-btn place-items-center rounded-full">
            <ArrowRight className="transition-transform duration-500 ease-out-cubic group-hover:translate-x-1" />
          </span>
        </a>
      ) : (
        <span aria-hidden="true" className="mt-auto ml-auto pt-10">
        {/* <span className="division-card-action glass glass-link grid h-btn w-btn place-items-center rounded-full">
          <ArrowRight />
        </span> */}
        <span aria-hidden="true" className="mt-auto ml-auto pt-10">
  <span className="division-card-action glass glass-link grid h-btn w-btn place-items-center rounded-full">
    <ArrowRight />
  </span>
  <span className="mt-2 block text-center text-xs">Coming soon</span>
</span>
        </span>
      )}
    </GlassCard>
  );
}
