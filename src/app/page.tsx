import Container from '@/components/Container';
import CTABand from '@/components/CTABand';
import DivisionCard from '@/components/DivisionCard';
import Reveal from '@/components/Reveal';
// import SectionHeading from '@/components/SectionHeading';
import { divisions } from '@/lib/divisions';
import { pageMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = pageMetadata({ description: site.description, path: '/' });


export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <section
           aria-labelledby="hero-heading"
           className="relative flex min-h-[55svh] flex-col items-center px-6 pt-24 pb-12 text-center md:px-12 lg:px-20">
        <h1
          id="hero-heading"
          className="max-w-full text-balance bg-gradient-to-b from-fg via-fg to-fg/50 bg-clip-text text-display font-light uppercase text-transparent"
        >
          Within Global
        </h1>
        <Reveal delay={0.15}>
          <p className="mt-6 text-label lowercase text-muted">{site.domain}</p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mx-auto mt-8 max-w-[64ch] text-body text-muted">{site.tagline}</p>
        </Reveal>
      </section>

      {/* 2. Divisions */}
      <section id="divisions" aria-labelledby="divisions-heading" className="scroll-mt-0">
        <Container>
          <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {divisions.map((d, i) => (
              <li key={d.slug}>
                <Reveal delay={i * 0.1} className="h-full">
                  <DivisionCard division={d} compact />
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 3. About strip */}
      {/* <section aria-labelledby="about-heading" className="pt-section lg:pt-section-lg">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-6">
            <Reveal className="lg:col-span-7">
              <SectionHeading
                id="about-heading"
                title="One group. Three ways forward."
                description="Within Global brings capital, partnerships and media together under a single point of view: lasting growth is built from the inside out. Each division works independently, and all three work as one when it matters."
              />
            </Reveal>
            <ul className="space-y-4 lg:col-span-4 lg:col-start-9">
              {site.stats.map((s, i) => (
                <li key={s.label}>
                  <Reveal delay={i * 0.1}>
                    <div className="glass flex items-baseline justify-between gap-6 rounded-pill px-8 py-5">
                      <span className="text-3xl font-light tracking-[0.02em]">{s.value}</span>
                      <span className="text-right text-label text-muted">{s.label}</span>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section> */}

      {/* 4. CTA band */}
      <CTABand />
    </>
  );
}
