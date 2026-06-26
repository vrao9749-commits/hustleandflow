export const NAV_LINKS = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Case Studies', href: '/work' },
];

export const SERVICES = [
  {
    slug: 'meta-ads',
    title: 'Meta Ads',
    short: 'High-converting Facebook and Instagram campaigns built for scalable ROAS.',
    description:
      'We build full-funnel Meta campaigns — creative-first, structured for scale, and optimised against the metrics that actually move revenue. From cold audience testing to retargeting sequences, every campaign is built around unit economics, not impressions.',
    deliverables: ['Creative testing pipelines', 'Audience & campaign structuring', 'Advantage+ & scaling strategy', 'Weekly performance optimisation'],
  },
  {
    slug: 'google-ads',
    title: 'Google Ads',
    short: 'Capture high-intent demand through search, shopping, display, and YouTube.',
    description:
      'Search, Performance Max, Shopping, and YouTube — engineered around intent capture and a profitable CAC. We obsess over search term hygiene, bid strategy, and conversion tracking so every rupee of spend is accountable.',
    deliverables: ['Search & PMax campaigns', 'Shopping feed optimisation', 'Conversion tracking & GA4 setup', 'Bid strategy & budget pacing'],
  },
  {
    slug: 'seo',
    title: 'SEO Optimization',
    short: 'Long-term organic growth powered by technical, on-page, and content SEO.',
    description:
      'Organic growth compounds — and we build it properly. Technical audits, on-page architecture, and content built around real search demand, so your brand owns the searches that bring in customers for years, not just this campaign cycle.',
    deliverables: ['Technical SEO audits', 'On-page & content strategy', 'Link building', 'Local & marketplace SEO'],
  },
  {
    slug: 'amazon-ads',
    title: 'Amazon Ads',
    short: "Launch and scale your D2C brand on India's leading marketplace.",
    description:
      'Sponsored Products, Brands, and Display campaigns built to win the buy box and scale share of voice — paired with the listing and catalog work that makes the ad spend actually convert.',
    deliverables: ['Sponsored Ads management', 'Bid & budget optimisation', 'Keyword & ASIN targeting', 'Brand store setup'],
  },
  {
    slug: 'amazon-marketplace',
    title: 'Amazon Marketplace',
    short: 'Listing optimization, A+ content, storefronts, and full account management.',
    description:
      "Beyond ads — we manage the full marketplace presence. Listing optimisation, A+ content, storefront design, and catalog health, so organic and paid traffic both convert at the rate they should.",
    deliverables: ['Listing & A+ content optimisation', 'Brand storefront design', 'Catalog & inventory health', 'Review & rating strategy'],
  },
  {
    slug: 'flipkart-ads',
    title: 'Flipkart Ads',
    short: 'Marketplace-specific strategies to dominate visibility and conversions.',
    description:
      "Flipkart has its own algorithm, its own buyer behaviour, and its own playbook. We run marketplace-specific strategies tuned for Flipkart's ad formats and ranking signals.",
    deliverables: ['Flipkart Ads management', 'Listing optimisation', 'Catalog strategy', 'Performance reporting'],
  },
  {
    slug: 'growth-marketing',
    title: 'Growth Marketing',
    short: 'Full-funnel experimentation across acquisition, activation, and retention.',
    description:
      'We run growth like a system, not a campaign — structured experimentation across every funnel stage, with weekly hypotheses, tests, and a backlog prioritised by expected revenue impact.',
    deliverables: ['Growth audits & roadmaps', 'Full-funnel experimentation', 'Channel mix strategy', 'Weekly growth reporting'],
  },
  {
    slug: 'youtube-ads',
    title: 'YouTube Ads',
    short: 'Video-first campaigns optimized for awareness, consideration, and scale.',
    description:
      'YouTube done right is a brand-building and performance channel at once. We plan, produce direction for, and run video campaigns engineered for both awareness and bottom-funnel conversion.',
    deliverables: ['YouTube campaign strategy', 'Video ad direction', 'Audience & placement targeting', 'Performance reporting'],
  },
  {
    slug: 'retention-marketing',
    title: 'Retention Marketing',
    short: 'Email, WhatsApp, SMS, and lifecycle flows to maximize LTV.',
    description:
      'Acquisition is half the game — retention is where the margin lives. We build lifecycle flows across email, WhatsApp, and SMS that turn first-time buyers into repeat revenue.',
    deliverables: ['Lifecycle flow design', 'Email & WhatsApp automation', 'Segmentation strategy', 'LTV & cohort reporting'],
  },
  {
    slug: 'analytics-reporting',
    title: 'Analytics & Reporting',
    short: 'Custom dashboards, GA4, attribution modeling, and performance insights.',
    description:
      "If it can't be measured, it didn't happen. We set up clean tracking infrastructure — GA4, server-side tagging, attribution modelling — and build dashboards that show real ROI, not vanity metrics.",
    deliverables: ['GA4 & server-side tracking', 'Custom dashboards', 'Attribution modelling', 'Weekly performance reviews'],
  },
  {
    slug: 'marketing-automation',
    title: 'Marketing Automation',
    short: 'CRM workflows, integrations, lead scoring, and funnel automation systems.',
    description:
      'We connect your ads, CRM, and commerce stack into one automated system — n8n and Zapier workflows that handle lead scoring, follow-ups, and reporting without manual busywork.',
    deliverables: ['CRM workflow design', 'Lead scoring & routing', 'Tool integrations (n8n/Zapier)', 'Funnel automation systems'],
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    short: 'High-performance websites optimized for UX, speed, and conversions.',
    description:
      'Fast, conversion-first storefronts and landing pages, built with performance and UX as first-class requirements — not an afterthought bolted on after launch.',
    deliverables: ['Marketing & landing pages', 'Storefront builds', 'Speed & Core Web Vitals optimisation', 'Conversion rate optimisation'],
  },
  {
    slug: 'creative-design-analysis',
    title: 'Creative Design Analysis',
    short: 'Ad creative diagnostics, CRO insights, and performance-led design direction.',
    description:
      'We diagnose why creative is or isn’t working — hook strength, angle mining, UGC frameworks — and turn that into a creative direction that wins attention and holds it.',
    deliverables: ['Creative performance audits', 'Hook & angle testing', 'UGC strategy', 'CRO-led design direction'],
  },
];

export const CASE_STUDIES = [
  {
    slug: 'baked-beauty',
    client: 'Baked Beauty',
    category: 'D2C Beauty',
    headline: '55% growth in first-time users',
    summary: 'Rebuilt acquisition campaigns to drive a surge of new-to-brand customers without inflating CAC.',
    metrics: [
      { label: 'New user growth', value: '55%' },
      { label: 'Category', value: 'Beauty' },
      { label: 'Channel', value: 'Meta + Web' },
    ],
    color: '#E43636',
  },
  {
    slug: 'inkarto',
    client: 'Inkarto',
    category: 'D2C',
    headline: '9% growth in average order value',
    summary: 'Optimised merchandising and creative to lift AOV across the funnel without sacrificing conversion rate.',
    metrics: [
      { label: 'AOV growth', value: '9%' },
      { label: 'Category', value: 'D2C' },
      { label: 'Channel', value: 'Meta + SEO' },
    ],
    color: '#E2DDB4',
  },
  {
    slug: 'lunaer-world',
    client: 'Lunaer World',
    category: 'D2C Skincare',
    headline: '170% increase in ROAS',
    summary: 'Restructured the paid media stack and creative testing pipeline to nearly triple return on ad spend.',
    metrics: [
      { label: 'ROAS increase', value: '170%' },
      { label: 'Category', value: 'Skincare' },
      { label: 'Channel', value: 'Meta + Google' },
    ],
    color: '#E43636',
  },
];

export const TESTIMONIALS = [
  {
    quote: 'They completely transformed our online presence. The ROI was immediate and substantial.',
    name: 'Vipin Parihar',
    role: 'Head of Marketing, Xneeti OneOS',
  },
  {
    quote: 'Minimalist, effective, and straight to the point. Exactly what we needed for our brand launch.',
    name: 'Vaishali Patil',
    role: 'Founder, Nidhii Skincare',
  },
  {
    quote: 'The team understood our vision perfectly. The communication was seamless throughout.',
    name: 'Vijay Chhabra',
    role: 'Founder, Baked Beauty',
  },
  {
    quote: 'Incredible attention to detail. The new website is converting at 3x our previous rate.',
    name: 'Kritikaa Chhabra',
    role: 'Founder, Label Moni K',
  },
  {
    quote: 'Incredible attention to detail and ownership. They run our account like it’s their own.',
    name: 'Shashank Jain',
    role: 'Founder, Lunaer World',
  },
  {
    quote: 'Sharp execution, honest reporting, and a team that actually understands D2C.',
    name: 'Harsh Shah',
    role: 'Founder, Inkarto',
  },
];

export const CLIENT_LOGOS = [
  'Inkarto', 'Pilgrim', 'Merapashu', 'Xneeti', 'Lunaer World', 'Sarva', 'Nidhii', 'Monik', 'Baked Beauty', 'PT Skincare', 'Candico',
];

export const TEAM = [
  { name: 'Sawan Kumar', role: 'Founder & Growth Lead', exp: '10+ Yrs', bio: '10M+ ad spend managed, obsessed with unit economics and creative testing.' },
  { name: 'Amit Atteri', role: 'Tech & Creative Lead', exp: '10+ Yrs', bio: '10M+ ad spend managed, obsessed with unit economics and creative testing.' },
  { name: 'Ayush Sharma', role: 'Lead Campaign Strategist', exp: '5+ Yrs', bio: 'Developing multi-channel growth maps, scaling ad spend, and optimizing funnel performance.' },
  { name: 'Arpit Bhardwaj', role: 'Performance Strategist', exp: '4+ Yrs', bio: 'Specializing in search engine marketing, audience segmentation, and ROI-driven scaling.' },
  { name: 'P Prithvi', role: 'Data Analytics & Tech', exp: '4+ Yrs', bio: "Tracking nerd. If it can't be measured, it didn't happen." },
  { name: 'Vandana Kumari', role: 'Campaign Manager', exp: '3+ Yrs', bio: 'Turns brand stories into scroll-stopping systems that convert.' },
  { name: 'Vishal Rao', role: 'Campaign Executive', exp: '3+ Yrs', bio: 'Well-versed in Google Ads, Meta Ads & Amazon Ads.' },
  { name: 'Ravneesh Kumar', role: 'Campaign Executive', exp: '3+ Yrs', bio: 'Well-versed in Google Ads, Meta Ads & Data Analytics.' },
  { name: 'Pawan', role: 'Campaign Strategist', exp: '3+ Yrs', bio: 'Analyzing user behavior, identifying friction points, and running A/B tests.' },
];

export const BLOG_POSTS = [
  {
    slug: 'stop-setting-fire-to-your-own-budget',
    category: 'Analytics',
    title: 'Media Buying Tracking Infrastructure',
    excerpt: 'How to stop setting fire to your own budget with broken attribution and tracking gaps.',
  },
  {
    slug: 'why-minimalism-still-wins',
    category: 'Design',
    title: 'Why Minimalism Still Wins',
    excerpt: 'A deep dive into why high-conversion websites are moving toward cleaner, faster layouts.',
  },
  {
    slug: 'scaling-your-brand-globally',
    category: 'Strategy',
    title: 'Scaling Your Brand Globally',
    excerpt: 'How to take a local hero brand and introduce it to international markets effectively.',
  },
  {
    slug: 'performance-optimization-tips',
    category: 'Tech',
    title: 'Performance Optimization Tips',
    excerpt: 'Everything you need to know about page speed and its direct impact on your ROI.',
  },
];

export const CONTACT_INFO = {
  phone: '+91 84482 21558',
  email: 'contact@hustleandflow.in',
  address: 'Aravali Koral by CS Reality, Plot no. - B2, Flat O4, UGF, Chattarpur, New Delhi - 110047',
  calendly: 'https://calendly.com/kashyap-sawanjha',
};
