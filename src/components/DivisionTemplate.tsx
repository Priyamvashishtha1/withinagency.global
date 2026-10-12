import Link from 'next/link';
import { otherDivisions, type Division } from '@/lib/divisions';
import Container from './Container';
import CTABand from './CTABand';
import DivisionCard from './DivisionCard';
import GlassCard from './GlassCard';
import GlassShape from './GlassShape';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { ArrowLeft } from './icons';

const sectionTop = 'pt-section lg:pt-section-lg';

/** One template for /capital, /partnerships and /media. Copy lives in lib/divisions.ts. */
export default function DivisionTemplate({ division: d }: { division: Division }) {
  return (
    <>
      {/* 1. Hero */}
      <section aria-labelledby="hero-heading" className="relative flex min-h-[100svh] flex-col overflow-x-clip pb-16 pt-[calc(72px+48px)] lg:pb-24">
        <GlassShape variant={d.slug} className="absolute -right-[14vw] top-[22%] w-[min(64vw,720px)] md:-right-[6vw]" />
        <Container className="relative z-10 flex flex-1 flex-col">
          <Link href="/" className="inline-flex w-fit items-center gap-2 text-label text-muted transition-colors hover:text-fg">
            <ArrowLeft /> Within Global
          </Link>
          <div className="mt-auto pt-24">
            <h1 id="hero-heading" className="max-w-full text-balance text-display font-light uppercase">{d.title}</h1>
            <p className="mt-6 text-label lowercase text-muted">{d.url}</p>
            <p className="mt-8 max-w-[40ch] text-body text-muted">{d.tagline}</p>
          </div>
        </Container>
      </section>

      {/* 2. Overview */}
      <section aria-labelledby="overview-heading" className={sectionTop}>
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-6">
            <Reveal className="lg:col-span-6">
              <SectionHeading id="overview-heading" title={d.overview.heading} />
              <div className="mt-8 space-y-5">
                {d.overview.body.map((p) => (
                  <p key={p} className="max-w-[60ch] text-body text-muted">{p}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
              <GlassCard className="flex min-h-card flex-col p-8 lg:p-10">
                <h3 className="text-h3 font-light uppercase">{d.overview.feature.title}</h3>
                <p className="mt-4 text-body text-muted">{d.overview.feature.text}</p>
                <ul className="mt-auto pt-10">
                  {d.overview.feature.points.map((pt) => (
                    <li key={pt} className="border-t border-[var(--glass-border)] py-4 text-[15px]">{pt}</li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 3. Capabilities: 3 × 2 grid */}
      <section aria-labelledby="services-heading" className={sectionTop}>
        <Container>
          <Reveal>
            <SectionHeading id="services-heading" title="Capabilities" description={`What Within ${d.name} brings to every engagement.`} />
          </Reveal>
          <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {d.services.map((s, i) => (
              <li key={s.title}>
                <Reveal delay={(i % 3) * 0.08} className="h-full">
                  <GlassCard className="flex h-full min-h-[300px] flex-col p-8 lg:min-h-card lg:p-10">
                    <h3 className="text-h3 font-light uppercase">{s.title}</h3>
                    <p className="mt-auto pt-10 text-body text-muted">{s.text}</p>
                  </GlassCard>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 4. Process: horizontal 4-step timeline */}
      <section aria-labelledby="process-heading" className={sectionTop}>
        <Container>
          <Reveal>
            <SectionHeading id="process-heading" title="How it works" description="A clear four-step path from first conversation to lasting results." />
          </Reveal>
          <ol className="mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
            {d.process.map((step, i) => (
              <li key={step.title}>
                <Reveal delay={i * 0.08}>
                  <div className="flex items-center gap-3">
                    <span className="glass inline-flex h-btn items-center gap-3 rounded-pill px-6">
                      <span className="text-label text-muted">{String(i + 1).padStart(2, '0')}</span>
                      <span className="font-light uppercase tracking-[0.04em]">{step.title}</span>
                    </span>
                    {i < d.process.length - 1 && <span aria-hidden="true" className="hidden h-px flex-1 bg-line md:block" />}
                  </div>
                  <p className="mt-5 max-w-[32ch] text-[15px] leading-relaxed text-muted">{step.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* 5. Cross-links */}
      <section aria-labelledby="explore-heading" className={sectionTop}>
        <Container>
          <Reveal>
            <SectionHeading id="explore-heading" title="Explore the group" description="Two more divisions, one shared point of view." />
          </Reveal>
          <ul className="mt-14 grid gap-6 md:grid-cols-2">
            {otherDivisions(d.slug).map((o, i) => (
              <li key={o.slug}>
                <Reveal delay={i * 0.08} className="h-full">
                  <DivisionCard division={o} />
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 6. CTA */}
      <CTABand title={d.cta.title} text={d.cta.text} subject={`Enquiry for ${d.title}`} />
    </>
  );
}
