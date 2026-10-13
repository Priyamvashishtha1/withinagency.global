import type { DivisionSlug } from '@/lib/divisions';

/** Abstract glass geometry, one per division. Decorative only. */
export default function GlassShape({ variant, className = '' }: { variant: DivisionSlug; className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none relative aspect-square ${className}`}>
      {variant === 'capital' &&
        [100, 72, 44].map((s) => (
          <div key={s} className="glass absolute left-1/2 top-1/2 rounded-full" style={{ width: `${s}%`, height: `${s}%`, transform: 'translate(-50%, -50%)' }} />
        ))}
      {variant === 'partnerships' && (
        <>
          <div className="glass absolute left-0 top-[17%] h-[66%] w-[66%] rounded-full" />
          <div className="glass absolute right-0 top-[17%] h-[66%] w-[66%] rounded-full" />
        </>
      )}
      {variant === 'media' &&
        [0, 1, 2].map((i) => (
          <div
            key={i}
            className="glass absolute h-[58%] w-[58%] rounded-panel"
            style={{ left: `${i * 14}%`, top: `${i * 14}%` }}
          />
        ))}
      {variant === 'new-luxury' &&
        [0, 1, 2].map((i) => (
          <div
            key={i}
            className="glass absolute h-[62%] w-[62%] rounded-full"
            style={{ left: `${19 + i * 5}%`, top: `${i * 12}%` }}
          />
        ))}
    </div>
  );
}
