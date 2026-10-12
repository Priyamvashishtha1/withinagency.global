import type { SVGProps } from 'react';

type P = SVGProps<SVGSVGElement>;
const base: P = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };

export const ArrowRight = (p: P) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const ArrowLeft = (p: P) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
);
export const Sun = (p: P) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
);
export const Moon = (p: P) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
);
export const MenuIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}><path d="M4 8h16M4 16h16" /></svg>
);
export const CloseIcon = (p: P) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}><path d="M6 6l12 12M18 6L6 18" /></svg>
);
export const LogoMark = (p: P) => (
  <svg viewBox="0 0 32 32" width="28" height="28" fill="none" aria-hidden="true" {...p}>
    <circle cx="16" cy="16" r="14.5" stroke="currentColor" strokeWidth="1.25" />
    <circle cx="16" cy="16" r="6.5" stroke="currentColor" strokeWidth="1.25" />
    <circle cx="16" cy="16" r="1.75" fill="currentColor" />
  </svg>
);
