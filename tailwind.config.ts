import type { Config } from 'tailwindcss';

/** Theme-aware colours are CSS variables (see globals.css) so one class works in both themes. */
const themed = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1536px' },
    extend: {
      colors: {
        // Static brand palette (monochrome only)
        black: '#000000',
        'near-black': '#0A0A0A',
        white: '#FFFFFF',
        'off-white': '#F5F5F5',
        grey: { muted: '#A1A1A1', divider: '#3A3A3A', elevated: '#1A1A1A' },
        // Semantic, theme-aware tokens
        bg: themed('bg'),
        surface: themed('surface'),
        elevated: themed('elevated'),
        fg: themed('fg'),
        muted: themed('muted'),
        line: themed('line'),
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(40px, 7vw, 112px)', { lineHeight: '1.05', letterSpacing: '0.02em', fontWeight: '300' }],
        h2: ['clamp(28px, 4vw, 56px)', { lineHeight: '1.05', letterSpacing: '0.02em', fontWeight: '300' }],
        h3: ['clamp(22px, 2.3vw, 32px)', { lineHeight: '1.1', letterSpacing: '0.02em', fontWeight: '300' }],
        body: ['clamp(16px, 1.1vw + 0.5rem, 18px)', { lineHeight: '1.6', fontWeight: '400' }],
        label: ['14px', { lineHeight: '1.4', letterSpacing: '0.04em', fontWeight: '400' }],
      },
      borderRadius: { card: '24px', panel: '32px', pill: '999px' },
      boxShadow: { glass: '0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.25)' },
      backdropBlur: { glass: '24px', bar: '20px' },
      maxWidth: { content: '1280px', page: '1440px' },
      minHeight: { card: '360px' },
      spacing: { header: '72px', btn: '52px', section: '96px', 'section-lg': '140px' },
      transitionTimingFunction: { 'out-cubic': 'cubic-bezier(0.215, 0.61, 0.355, 1)' },
    },
  },
  plugins: [],
};

export default config;
