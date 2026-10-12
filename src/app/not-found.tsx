import Button from '@/components/Button';
import Container from '@/components/Container';

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center">
      <Container className="text-center">
        <h1 className="text-display font-light uppercase">Not found</h1>
        <p className="mx-auto mt-6 max-w-[40ch] text-body text-muted">That page does not exist. Head back to the main site.</p>
        <div className="mt-10 flex justify-center"><Button href="/">Back to Within Global</Button></div>
      </Container>
    </section>
  );
}
