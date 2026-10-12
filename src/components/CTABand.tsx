import { site } from '@/lib/site';
import Button from './Button';
import Container from './Container';
import GlassCard from './GlassCard';
import Reveal from './Reveal';

interface Props { title?: string; text?: string; subject?: string }

export default function CTABand({
  title = 'Ready to build from the inside out?',
  text = 'Tell us what you are working on. We will connect you with the right team across the group.',
  subject = 'New enquiry',
}: Props) {
  return (
    <section aria-labelledby="cta-heading" className="py-section lg:py-section-lg">
      <Container>
        <Reveal>
          <GlassCard interactive={false} className="rounded-panel px-6 py-16 text-center md:px-16 md:py-24">
            <h2 id="cta-heading" className="mx-auto max-w-[18ch] text-h2 font-light uppercase text-balance">{title}</h2>
            <p className="mx-auto mt-6 max-w-[48ch] text-body text-muted">{text}</p>
            <div className="mt-10 flex justify-center">
              <Button href={`mailto:${site.email}?subject=${encodeURIComponent(subject)}`}>Start a conversation</Button>
            </div>
          </GlassCard>
        </Reveal>
      </Container>
    </section>
  );
}
