import Link from 'next/link';
import { LogoMark } from './icons';

export default function Logo() {
  return (
    <Link href="/" aria-label="Within Global, home" className="inline-flex items-center gap-3">
      <LogoMark />
      <span className="text-[15px] font-light uppercase tracking-[0.2em]">
        Within <span className="text-muted">Global</span>
      </span>
    </Link>
  );
}
