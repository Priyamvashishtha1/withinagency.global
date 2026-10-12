export type DivisionSlug = 'capital' | 'partnerships' | 'media';

export interface Division {
  slug: DivisionSlug;
  name: string;
  title: string;
  url: string;
  path: string;
  short: string;
  tagline: string;
  metaDescription: string;
  overview: {
    heading: string;
    body: string[];
    feature: { title: string; text: string; points: string[] };
  };
  services: { title: string; text: string }[];
  process: { title: string; text: string }[];
  cta: { title: string; text: string };
}

// All copy below is placeholder text. Replace freely.
export const divisions: Division[] = [
  {
    slug: 'capital',
    name: 'Capital',
    title: 'Within Capital',
    url: 'withinagency.global/capital',
    path: '/capital',
    short: 'Strategic capital and advisory for companies ready to scale with conviction.',
    tagline: 'Patient capital and sharp advisory for ambitious companies.',
    metaDescription:
      'Within Capital provides growth capital, strategic advisory, M&A support and structured financing for ambitious companies.',
    overview: {
      heading: 'Capital with conviction.',
      body: [
        'Within Capital partners with founders, family offices and growth-stage companies to structure, raise and deploy capital with clarity. We pair rigorous financial thinking with the operating experience of the wider Within Global group.',
        'Whether you are funding expansion, preparing a transaction or rethinking your balance sheet, you get one accountable team from the first conversation to close.',
      ],
      feature: {
        title: 'What you can expect',
        text: 'A focused team and a clear point of view on every mandate.',
        points: [
          'Senior attention on every engagement',
          'Transparent structures and aligned incentives',
          'Access to the Within Global network',
        ],
      },
    },
    services: [
      { title: 'Growth Capital', text: 'Flexible funding structures for companies entering their next phase of expansion.' },
      { title: 'Strategic Advisory', text: 'Independent counsel on strategy, valuation and long-term capital planning.' },
      { title: 'M&A Support', text: 'End-to-end guidance on acquisitions, divestitures and strategic combinations.' },
      { title: 'Portfolio Strategy', text: 'Active frameworks for allocating, monitoring and rebalancing investments.' },
      { title: 'Investor Relations', text: 'Clear narratives, reporting and communication for current and prospective investors.' },
      { title: 'Structured Financing', text: 'Bespoke debt and hybrid solutions designed around your cash-flow profile.' },
    ],
    process: [
      { title: 'Understand', text: 'We learn your business, goals and constraints before proposing anything.' },
      { title: 'Structure', text: 'We design the capital strategy and the terms that support it.' },
      { title: 'Execute', text: 'We run the process, manage counterparties and drive to close.' },
      { title: 'Steward', text: 'We stay engaged to monitor performance and plan what comes next.' },
    ],
    cta: {
      title: 'Plan your next raise.',
      text: 'Tell us where you are headed and we will outline how Within Capital can help.',
    },
  },
  {
    slug: 'partnerships',
    name: 'Partnerships',
    title: 'Within Partnerships',
    url: 'withinagency.global/partnerships',
    path: '/partnerships',
    short: 'Alliances, channels and joint ventures that open new markets and compound growth.',
    tagline: 'Alliances built to last, in markets worth entering.',
    metaDescription:
      'Within Partnerships designs and manages strategic alliances, channel programmes and joint ventures that open new markets.',
    overview: {
      heading: 'Better together.',
      body: [
        'Within Partnerships designs and manages the relationships that extend your reach: strategic alliances, channel programmes, joint ventures and ecosystem collaborations.',
        'We start with commercial logic, then do the careful work of aligning teams, incentives and governance so a partnership delivers well beyond the announcement.',
      ],
      feature: {
        title: 'How we work',
        text: 'We treat every partnership as a shared product with an owner, a roadmap and clear measures.',
        points: [
          'Defined ownership on both sides',
          'Shared goals and transparent reporting',
          'Playbooks that scale across markets',
        ],
      },
    },
    services: [
      { title: 'Partner Strategy', text: 'Define which partners, models and markets will move your business furthest.' },
      { title: 'Alliance Development', text: 'Negotiate, structure and launch strategic alliances with clear governance.' },
      { title: 'Channel Programmes', text: 'Build reseller, referral and distribution programmes that partners want to join.' },
      { title: 'Joint Ventures', text: 'Form and operate joint ventures with aligned incentives and exit clarity.' },
      { title: 'Co-Marketing', text: 'Plan and run shared campaigns that bring both brands to new audiences.' },
      { title: 'Ecosystem Management', text: 'Coordinate networks of partners with shared tooling, data and reporting.' },
    ],
    process: [
      { title: 'Map', text: 'We identify the partners and markets with the strongest strategic fit.' },
      { title: 'Align', text: 'We agree on value, roles, governance and success measures.' },
      { title: 'Launch', text: 'We activate the partnership with joint plans and shared resources.' },
      { title: 'Scale', text: 'We refine, expand and replicate what works across new regions.' },
    ],
    cta: {
      title: 'Find your next partner.',
      text: 'Share your goals and we will show you where a partnership can take you.',
    },
  },
  {
    slug: 'media',
    name: 'Media',
    title: 'Within Media',
    url: 'withinagency.global/media',
    path: '/media',
    short: 'Brand storytelling, content and distribution that earns attention and holds it.',
    tagline: 'Stories and channels designed to be remembered.',
    metaDescription:
      'Within Media is the creative and content arm of Within Global: brand storytelling, content production, audience strategy and distribution.',
    overview: {
      heading: 'Built to be noticed.',
      body: [
        'Within Media is the group’s creative and content arm. We shape brand narratives, produce original content and plan the distribution that puts it in front of the right audience.',
        'Strategy, production and measurement sit in one team, so every idea is built to perform from the first brief.',
      ],
      feature: {
        title: 'What is included',
        text: 'A full-service studio model with a single creative lead.',
        points: [
          'Creative direction from brief to delivery',
          'Production across film, audio and digital',
          'Distribution planned before the first frame',
        ],
      },
    },
    services: [
      { title: 'Brand Storytelling', text: 'Narratives and messaging frameworks that make your brand easy to remember.' },
      { title: 'Content Production', text: 'Film, photography, audio and written content produced to a consistent standard.' },
      { title: 'Creative Direction', text: 'A single creative point of view across every channel and format.' },
      { title: 'Audience Strategy', text: 'Research-led planning that decides who to reach, where and how often.' },
      { title: 'Paid and Owned Media', text: 'Channel plans and activation across social, search, email and your own platforms.' },
      { title: 'Analytics and Insight', text: 'Reporting that connects content performance to business outcomes.' },
    ],
    process: [
      { title: 'Discover', text: 'We study your brand, audience and market to find the sharpest angle.' },
      { title: 'Create', text: 'We develop the concept and produce the work in-house.' },
      { title: 'Distribute', text: 'We launch across the channels where your audience already is.' },
      { title: 'Measure', text: 'We track results and feed what we learn into the next cycle.' },
    ],
    cta: {
      title: 'Tell your story.',
      text: 'Send us a brief, or just an idea. We will take it from there.',
    },
  },
];

export function getDivision(slug: DivisionSlug): Division {
  const d = divisions.find((x) => x.slug === slug);
  if (!d) throw new Error(`Unknown division: ${slug}`);
  return d;
}

export function otherDivisions(slug: DivisionSlug): Division[] {
  return divisions.filter((d) => d.slug !== slug);
}
