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
  { title: 'On-the-ground expertise', text: 'Our partners have teams across India and in Dubai, Singapore and London.' },
  // { title: 'Curated, not crowded', text: 'We show you fewer, better opportunities.' },
  { title: 'Curated, not crowded', text: 'We focus on fewer, better opportunities.'  },
  {
  title: 'Proven scale',
  text: 'Our wealth partners have served international and NRI families since 2014. They oversee more than US$5 billion in assets, with over 200 professionals across Singapore, Dubai, India and London.',
},
{
  title: 'Regulated at every step',
  text: 'Every partner we introduce is licensed in its own market. Between them, our partners are licensed by SEBI and AMFI in India, the DFSA in Dubai, MAS in Singapore and the FCA in the UK.',
},
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
        <div className="mt-auto max-w-5xl pt-8">
          {/* <p className="capital-kicker mb-7">Within Capital <span>·</span> India &amp; UAE</p> */}
           <p className="capital-kicker mb-7">Within Capital <span>·</span> Since 2022</p>
          <h1 id="hero-heading" className="max-w-5xl text-balance text-[clamp(3.3rem,9vw,8.5rem)] font-light leading-[0.96] tracking-[-0.065em] text-[var(--capital-ivory)]">Capital that<br className="hidden sm:block" /> crosses borders<span className="text-[var(--capital-gold)]">.</span></h1>
          <div className="mt-8 h-px w-24 bg-[var(--capital-gold)]" />
          <p className="capital-hero-description mt-8 max-w-[54ch] text-lg leading-relaxed lg:text-xl">We connect international investors with trusted, regulated partners for funds, private companies and real estate in two of the world’s most dynamic markets.</p>
          
<div className="mt-8 w-full">       
  <div className="mb-6 h-px w-12 bg-[var(--capital-gold)]/70" />
  <p className="max-w-6xl text-left text-label uppercase tracking-[0.1em] leading-relaxed text-[var(--capital-ivory)]/60">
    Backed by partners with 75+ years of combined experience and more than
    US$5 billion in client assets, with teams regulated in India, the UAE,
    Singapore and the UK.
  </p>
</div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#introduction" className="!bg-[var(--capital-ivory)] !text-[var(--capital-emerald)] hover:!bg-white">Request an introduction <span aria-hidden="true">↗</span></Button>
            <Button href="#how-it-works" variant="glass" className="!border-white/20 !text-[var(--capital-ivory)]">How we work</Button>
          </div>
        </div>
        {/* <div className="mt-20 flex items-center gap-4 text-label uppercase tracking-[0.18em] text-[var(--capital-ivory)]/45"><span className="h-px w-12 bg-[var(--capital-gold)]/70" />Backed by partners with 75+ years of combined experience and more than US$5 billion in client assets, with teams regulated in India, the UAE, Singapore and the UK.</div> */}
        
       



      </Container>
    </section>

    <section aria-labelledby="markets-heading" className="capital-markets-section capital-content-section pt-20 lg:pt-28">
      <Container>
        <Reveal><SectionHeading id="markets-heading" title="Why India and the UAE" description="Two dynamic markets. One trusted relationship." /></Reveal>
        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-12">
          {markets.map((item, i) => <li key={item.title}><Reveal delay={i * .1}><article className="capital-panel relative min-h-[290px] overflow-hidden rounded-3xl p-8 lg:p-12"><span className="absolute right-8 top-8 text-label tracking-[0.2em] text-[var(--capital-gold)]">{item.code}</span><div className="mb-12 h-px w-12 bg-[var(--capital-gold)]" /><h3 className="text-4xl font-light tracking-tight">{item.title}<span className="text-[var(--capital-gold)]">.</span></h3><p className="mt-5 max-w-[45ch] text-body text-muted">{item.text}</p></article></Reveal></li>)}
        </ul>
        {/* <Reveal><p className="mt-8 text-center text-label italic tracking-wide text-muted">Two markets. One trusted relationship.</p></Reveal> */}
      </Container>
    </section>

    <section id="what-we-offer" aria-labelledby="offer-heading" className="capital-emerald-section scroll-mt-header py-16 lg:py-24">
      <Container><div className="capital-glass-panel rounded-3xl p-6 sm:p-9 lg:p-12">
        <Reveal><SectionHeading id="offer-heading" title="What we offer" description="A focused introduction to opportunities selected around your goals." /></Reveal>
        <ul className="mt-10 grid items-stretch gap-4 md:grid-cols-3 lg:mt-12">
        {offers.map((item, i) => <li key={item.title} className="h-full"><Reveal delay={i * .08} className="h-full"><GlassCard className="flex h-full min-h-[280px] flex-col p-6 lg:p-8"><span className="capital-icon" aria-hidden="true">{item.icon}</span><h3 className="mt-9 text-h3 font-light">{item.title}</h3><p className="mt-4 text-body text-muted">{item.text}</p><span className="mt-auto pt-6 text-label uppercase tracking-[0.16em] text-[var(--capital-gold)]">India <span className="px-2">·</span> UAE</span></GlassCard></Reveal></li>)}
        </ul>
        <p className="mt-7 text-sm leading-relaxed text-muted">All products and services are provided by specialist partners, who are regulated in their own markets.</p>
      </div></Container>
    </section>

    <section id="about-us" aria-labelledby="clients-heading" className="capital-content-section scroll-mt-header py-16 lg:py-24">
      <Container><div className="capital-soft rounded-3xl p-8 lg:p-14">
        <Reveal><SectionHeading id="clients-heading" title="About us" description="Within Capital builds considered relationships between international investors and trusted partners across India and the UAE." /></Reveal>
        <ul className="mt-10 grid gap-x-10 sm:grid-cols-2">{clients.map((client, i) => <li key={client}><Reveal delay={i * .06}><div className="flex min-h-20 items-center gap-4 border-t border-[var(--glass-border)] py-5"><span className="text-[var(--capital-gold)]">✳</span><span className="text-base leading-relaxed">{client}</span></div></Reveal></li>)}</ul>
      </div></Container>
    </section>

    <section id="how-it-works" aria-labelledby="process-heading" className="capital-emerald-section scroll-mt-header py-16 lg:py-24">
      <Container><div className="capital-glass-panel rounded-3xl p-6 sm:p-9 lg:p-12">
        <Reveal><SectionHeading id="process-heading" title="How it works" description="A clear, personal process from first conversation to ongoing support." /></Reveal>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">{steps.map((step, i) => <li key={step.title}><Reveal delay={i * .08} className="h-full"><div className="capital-glass-item h-full rounded-2xl p-5 lg:p-6"><span className="font-light text-4xl tracking-tight text-[var(--capital-gold)]">0{i + 1}</span><h3 className="mt-6 text-xl font-light">{step.title}</h3><p className="mt-3 text-[15px] leading-relaxed text-muted">{step.text}</p></div></Reveal></li>)}</ol>
      </div></Container>
    </section>

    <section id="why-within-capital" aria-labelledby="why-heading" className="capital-emerald-section scroll-mt-header py-16 lg:py-24">
      <Container><div className="capital-glass-panel rounded-3xl p-6 sm:p-9 lg:p-12">
        <Reveal><SectionHeading id="why-heading" title="Why Within Capital" description="A thoughtful first step, backed by people who understand both markets." /></Reveal>
<ul className="mt-10 grid gap-4 md:grid-cols-3 lg:mt-12">{reasons.map((item, i) => <li key={item.title}><Reveal delay={i * .08} className="h-full"><div className="capital-glass-item flex h-full gap-4 rounded-2xl p-5 lg:p-6"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--capital-gold)]" /><div><h3 className="text-2xl font-light lg:text-3xl">{item.title}</h3><p className="mt-3 text-body text-muted">{item.text}</p></div></div></Reveal></li>)}</ul>      </div></Container>
    </section>

    <section id="introduction" aria-labelledby="introduction-heading" className="capital-content-section scroll-mt-header py-16 lg:py-24">
      <Container>
        <div className="capital-cta-grid grid min-w-0 items-start gap-12 rounded-3xl p-5 sm:p-8 lg:grid-cols-12 lg:gap-8 lg:p-14">
          <Reveal className="lg:col-span-5"><p className="capital-kicker mb-5">Start a conversation</p><SectionHeading id="introduction-heading" title="Request an introduction" description="Share a few details and we’ll be in touch within two working days." /></Reveal>
          <Reveal delay={.1} className="w-full min-w-0 lg:col-span-6 lg:col-start-7"><div className="w-full min-w-0 rounded-2xl bg-bg/80 p-5 sm:p-8"><IntroductionForm disclaimer={disclaimer} /></div></Reveal>
        </div>
      </Container>
    </section>

    <section aria-labelledby="disclaimer-heading" className="capital-emerald-section py-16 lg:py-24">
      <Container><div className="capital-glass-panel capital-disclosure-card rounded-3xl p-6 sm:p-9 lg:p-12"><Reveal><SectionHeading id="disclaimer-heading" title="Important information" /><div className="capital-disclosure-copy mt-6 max-w-[78ch] space-y-4 text-[15px] leading-7 text-muted">{disclaimer.split(/(?<=[.!?])\s+/).reduce<string[][]>((groups, sentence, index) => { const groupIndex = Math.floor(index / 3); groups[groupIndex] ??= []; groups[groupIndex].push(sentence); return groups; }, []).map((group, index) => <p key={index}>{group.join(' ')}</p>)}</div><div className="mt-8 grid gap-2 border-t border-[var(--glass-border)] pt-6 text-sm leading-relaxed text-muted sm:grid-cols-2"><p><span className="text-fg">Partnered with:</span>  AMFI-registered mutual fund distributor (ARN-324453), India · Lighthouse Canton, regulated by MAS (Singapore), DFSA (Dubai), SEBI (India) and FCA (UK).</p><p className="sm:col-span-2"><span className="text-fg">UK Company number:</span> 14042521</p><p className="sm:col-span-2"><span className="text-fg">Registered office:</span> 128 City Road, London, United Kingdom, EC1V 2NX</p></div></Reveal></div></Container>
    </section>
  </main>;
}
