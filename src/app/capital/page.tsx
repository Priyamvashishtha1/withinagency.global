import Button from '@/components/Button';
import Container from '@/components/Container';
import GlassCard from '@/components/GlassCard';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import IntroductionForm from '@/components/IntroductionForm';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Within Capital',
  description: 'We connect international investors with trusted, regulated partners for funds, private companies and real estate in India and the UAE.',
  path: '/capital',
});

const disclaimer = 'Within Capital is an introduction service. We do not provide investment, financial, tax or legal advice, and we do not arrange, manage or hold investments or client money. All investment products and services are provided by independent third parties who are responsible for their own regulatory compliance. We may receive a fee from partners for introductions. Investing involves risk: the value of investments can fall as well as rise, and you may get back less than you invest. Past performance is not a guide to future returns. Overseas investments carry additional risks, including currency movements and changes in local law and tax. Please seek independent advice before making any investment decision.';
const markets = [
  { title: 'India', code: '01', text: 'A large, fast-growing economy with opportunities across listed funds, private businesses and property.' },
  { title: 'The UAE', code: '02', text: 'An international hub with a well-established framework for overseas investors and a dynamic real estate market.' },
];
const offers = [
  { title: 'Funds', icon: '◉', text: 'Access to selected investment funds in India, chosen for quality and fit with your goals.' },
  { title: 'Private companies', icon: '⌘', text: 'Introductions to high-growth businesses raising capital, from established companies to promising founders.' },
  { title: 'Real estate', icon: '⌂', text: 'Land, residential and commercial property opportunities in India and the UAE.' },
];
const clients = ['High-net-worth individuals and family offices', 'Indians living abroad (NRIs)', 'International businesses expanding into India or the Gulf', 'Founders and promoters'];
const steps = [
  { title: 'A private conversation', text: 'We take time to understand your goals and what matters to you.' },
  { title: 'The right introduction', text: 'We connect you with the partner best suited to your needs.' },
  { title: 'Your partner’s expertise', text: 'Your partner carries out its own checks and gives you its advice and options directly.' },
  { title: 'Ongoing support', text: 'We remain your point of contact throughout the relationship.' },
];
const reasons = [
  { title: 'Trusted network', text: 'Partners we know and have worked with.' },
  { title: 'On-the-ground expertise', text: 'Our partners have offices across six Indian cities and across two UAE offices.' },
  { title: 'Curated, not crowded', text: 'We show you fewer, better opportunities.' },
];

export default function Page() {
  return <main className="capital-page">
<section
  aria-labelledby="hero-heading" className="capital-hero relative flex min-h-[88svh] flex-col overflow-hidden pb-16 pt-[40spx] lg:min-h-[92svh] lg:pb-24">      <div className="capital-glow" aria-hidden="true" />
      <Container className="relative z-10 flex flex-1 flex-col">
          <a href="/" className="inline-flex w-fit items-center gap-3 pt-[40px] text-label text-[var(--capital-ivory)]/70 transition-colors hover:text-[var(--capital-ivory)]">
          <span className="h-px w-8 bg-[var(--capital-gold)]" aria-hidden="true" />
          <span>Within Global</span>
        </a>
        {/* CHANGES RELATED TO GAP ON TOP */}
        <div className="mt-auto max-w-5xl pt-[2rem]">
          <p className="capital-kicker mb-7">Within Capital <span>·</span> India &amp; UAE</p>
          <h1 id="hero-heading" className="max-w-5xl text-balance text-[clamp(3.3rem,9vw,8.5rem)] font-light leading-[0.96] tracking-[-0.065em] text-[var(--capital-ivory)]">Capital that<br className="hidden sm:block" /> crosses borders<span className="text-[var(--capital-gold)]">.</span></h1>
          <div className="mt-8 h-px w-24 bg-[var(--capital-gold)]" />
          <p className="capital-hero-description mt-8 max-w-[54ch] text-lg leading-relaxed lg:text-xl">We connect international investors with trusted, regulated partners for funds, private companies and real estate in two of the world’s most dynamic markets.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#introduction" className="!bg-[var(--capital-ivory)] !text-[var(--capital-emerald)] hover:!bg-white">Request an introduction <span aria-hidden="true">↗</span></Button>
            <Button href="#how-it-works" variant="glass" className="!border-white/20 !text-[var(--capital-ivory)]">How we work</Button>
          </div>
        </div>
        <div className="mt-20 flex items-center gap-4 text-label uppercase tracking-[0.18em] text-[var(--capital-ivory)]/45"><span className="h-px w-12 bg-[var(--capital-gold)]/70" />A considered connection between markets</div>
      </Container>
    </section>

    <section aria-labelledby="markets-heading" className="pt-section lg:pt-section-lg">
      <Container>
        <Reveal><SectionHeading id="markets-heading" title="Why India and the UAE" description="Two dynamic markets. One trusted relationship." /></Reveal>
        <ul className="mt-14 grid gap-5 md:grid-cols-2">
          {markets.map((item, i) => <li key={item.title}><Reveal delay={i * .1}><article className="capital-panel relative min-h-[290px] overflow-hidden rounded-3xl p-8 lg:p-12"><span className="absolute right-8 top-8 text-label tracking-[0.2em] text-[var(--capital-gold)]">{item.code}</span><div className="mb-12 h-px w-12 bg-[var(--capital-gold)]" /><h3 className="text-4xl font-light tracking-tight">{item.title}<span className="text-[var(--capital-gold)]">.</span></h3><p className="mt-5 max-w-[45ch] text-body text-muted">{item.text}</p></article></Reveal></li>)}
        </ul>
        {/* <Reveal><p className="mt-8 text-center text-label italic tracking-wide text-muted">Two markets. One trusted relationship.</p></Reveal> */}
      </Container>
    </section>

    <section id="what-we-offer" aria-labelledby="offer-heading" className="pt-section lg:pt-section-lg">
      <Container>
        <Reveal><SectionHeading id="offer-heading" title="What we offer" description="A focused introduction to opportunities selected around your goals." /></Reveal>
        <ul className="mt-14 grid items-stretch gap-5 md:grid-cols-3">
        {offers.map((item, i) => <li key={item.title} className="h-full"><Reveal delay={i * .08} className="h-full"><GlassCard className="flex h-full min-h-[330px] flex-col p-8 lg:p-10"><span className="capital-icon" aria-hidden="true">{item.icon}</span><h3 className="mt-12 text-h3 font-light">{item.title}</h3><p className="mt-5 text-body text-muted">{item.text}</p><span className="mt-auto pt-8 text-label uppercase tracking-[0.16em] text-[var(--capital-gold)]">India <span className="px-2">·</span> UAE</span></GlassCard></Reveal></li>)}
        </ul>
        <p className="mt-7 text-sm leading-relaxed text-muted">All products and services are provided by specialist partners, who are regulated in their own markets.</p>
      </Container>
    </section>

    <section aria-labelledby="clients-heading" className="pt-section lg:pt-section-lg">
      <Container><div className="capital-soft rounded-3xl p-8 lg:p-14">
        <Reveal><SectionHeading id="clients-heading" title="Who we work with" description="A private, considered relationship for people and businesses with a cross-border outlook." /></Reveal>
        <ul className="mt-10 grid gap-x-10 sm:grid-cols-2">{clients.map((client, i) => <li key={client}><Reveal delay={i * .06}><div className="flex min-h-20 items-center gap-4 border-t border-[var(--glass-border)] py-5"><span className="text-[var(--capital-gold)]">✳</span><span className="text-base leading-relaxed">{client}</span></div></Reveal></li>)}</ul>
      </div></Container>
    </section>

    <section id="how-it-works" aria-labelledby="process-heading" className="pt-section lg:pt-section-lg">
      <Container>
        <Reveal><SectionHeading id="process-heading" title="How it works" description="A clear, personal process from first conversation to ongoing support." /></Reveal>
        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{steps.map((step, i) => <li key={step.title}><Reveal delay={i * .08}><div className="border-t border-[var(--capital-gold)]/50 pt-5"><span className="font-light text-4xl tracking-tight text-[var(--capital-gold)]">0{i + 1}</span><h3 className="mt-8 text-xl font-light">{step.title}</h3><p className="mt-4 text-[15px] leading-relaxed text-muted">{step.text}</p></div></Reveal></li>)}</ol>
      </Container>
    </section>

    <section aria-labelledby="why-heading" className="pt-section lg:pt-section-lg">
      <Container>
        <Reveal><SectionHeading id="why-heading" title="Why Within Capital" description="A thoughtful first step, backed by people who understand both markets." /></Reveal>
<ul className="mt-14 grid gap-8 md:grid-cols-3">{reasons.map((item, i) => <li key={item.title}><Reveal delay={i * .08}><div className="flex h-full gap-5"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--capital-gold)]" /><div><h3 className="text-3xl font-light">{item.title}</h3><p className="mt-4 text-body text-muted">{item.text}</p></div></div></Reveal></li>)}</ul>      </Container>
    </section>

    <section id="introduction" aria-labelledby="introduction-heading" className="pt-section lg:pt-section-lg">
      <Container>
        <div className="capital-cta-grid grid min-w-0 items-start gap-12 rounded-3xl p-5 sm:p-8 lg:grid-cols-12 lg:gap-8 lg:p-14">
          <Reveal className="lg:col-span-5"><p className="capital-kicker mb-5">Start a conversation</p><SectionHeading id="introduction-heading" title="Request an introduction" description="Share a few details and we’ll be in touch within two working days." /></Reveal>
          <Reveal delay={.1} className="w-full min-w-0 lg:col-span-6 lg:col-start-7"><div className="w-full min-w-0 rounded-2xl bg-bg/80 p-5 sm:p-8"><IntroductionForm disclaimer={disclaimer} /></div></Reveal>
        </div>
      </Container>
    </section>

    <section aria-labelledby="disclaimer-heading" className="py-section lg:py-section-lg">
      <Container><Reveal><SectionHeading id="disclaimer-heading" title="Important information" /><p className="mt-6 max-w-[100ch] text-sm leading-relaxed text-muted">{disclaimer}</p><div className="mt-8 space-y-2 border-t border-[var(--glass-border)] pt-6 text-sm leading-relaxed text-muted"><p><span className="text-fg">Partnered with:</span> Count Infinity Services Pvt. Ltd., an AMFI-registered (ARN-324453), India.</p><p>UK Company number: 14042521</p><p>Registered office address: 128 City Road, London, United Kingdom, EC1V 2NX</p></div></Reveal></Container>
    </section>
  </main>;
}
