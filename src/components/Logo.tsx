import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" aria-label="Within Global, home" className="inline-flex items-center gap-3">
      <Image src="/brand-assets/within-mark.png" alt="" width={68} height={34} priority className="within-logo-mark" />
      <span className="text-[15px] font-light uppercase tracking-[0.2em]">
        Within <span className="text-muted">Global</span>
      </span>
    </Link>
  );
}
