/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceCategory, Project, TeamMember, Testimonial, StatItem } from './types';

export const companyDetails = {
  name: 'Siltawi Digital Marketing',
  tagline: 'Strategic growth through creative digital solutions.',
  description: 'A forward-thinking digital marketing and creative agency based in Addis Ababa, Ethiopia. We empower brands with strategic, innovative, and data-driven solutions that engage audiences and accelerate growth.',
  history: 'Founded in 2023, Siltawi Digital Marketing was established with a singular vision: to bridge the gap between creative craftsmanship and digital marketing execution in East Africa. Siltawi (meaning "Strategic" in Amharic) represents our core methodology—combining detailed analytic planning with high-fidelity creative content. In a short span, we have grown from a small passionate studio to a full-service creative agency powering leading enterprises and fast-growing startups across the region.',
  mission: 'To empower businesses with innovative digital marketing solutions that drive growth, enhance brand visibility, and create meaningful customer connections.',
  vision: 'To become one of Africa\'s leading digital marketing agencies by delivering creative, data-driven, and results-oriented digital solutions.',
  yearFounded: 2023,
  address: 'Bole Road, Around Friendship Building, Addis Ababa, Ethiopia',
  email: 'info@siltawi.com',
  phone: '+251 900 000 000',
  website: 'www.siltawi.com',
  hours: 'Monday – Friday: 8:30 AM – 5:30 PM | Saturday: 9:00 AM – 1:00 PM',
};

export const statsData: StatItem[] = [
  { value: 100, suffix: '+', label: 'Projects Completed' },
  { value: 50, suffix: '+', label: 'Active Clients' },
  { value: 15, suffix: '', label: 'Team Members' },
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 95, suffix: '%', label: 'Client Satisfaction Rate' },
];

export const coreValues = [
  {
    title: 'Innovation',
    description: 'Embracing next-generation platforms, progressive machine learning integrations, and experimental technologies to keep clients ahead of emerging digital trends.',
    icon: 'Sparkles',
  },
  {
    title: 'Creativity',
    description: 'Fusing bespoke high-fidelity designs, bold typography pairings, and compelling storytelling frameworks that demand customer attention.',
    icon: 'Palette',
  },
  {
    title: 'Transparency',
    description: 'Providing comprehensive, unvarnished analytical reports, open communication channels, and clear project pricing with zero hidden costs.',
    icon: 'Eye',
  },
  {
    title: 'Excellence',
    description: 'Striving for pixel-perfect execution, sub-second web performance, and conversion-optimized visual flows that exceed expectations.',
    icon: 'Award',
  },
  {
    title: 'Customer Success',
    description: 'Aligning our milestones directly with your bottom-line metrics, treating your revenue growth and brand equity as our ultimate yardsticks.',
    icon: 'TrendingUp',
  },
  {
    title: 'Continuous Learning',
    description: 'Constantly training our strategists on algorithmic updates, platform policy shifts, and cutting-edge digital frameworks to secure future-proof results.',
    icon: 'BookOpen',
  },
];

export const whyChooseSiltawi = [
  {
    title: 'Experienced Digital Team',
    description: 'Our specialists have spent years managing large-scale national ad accounts and deploying high-performance applications.',
    icon: 'Users',
  },
  {
    title: 'Creative & Modern Designs',
    description: 'We reject standard cookie-cutter layouts, crafting bespoke visual identities that reflect your unique core values.',
    icon: 'Workflow',
  },
  {
    title: 'Affordable Pricing',
    description: 'We structure flexible, ROI-justified pricing models tailored to both hyper-growth startups and established corporations.',
    icon: 'CircleDollarSign',
  },
  {
    title: 'Fast Project Delivery',
    description: 'We keep our production schedules lean and run agile sprints, reliably launching web platforms in record time.',
    icon: 'Zap',
  },
  {
    title: 'Data-Driven Marketing Strategies',
    description: 'We back up our creative decisions with real-time conversion metrics, heatmaps, and exhaustive A/B testing analytics.',
    icon: 'BarChart3',
  },
  {
    title: 'Ongoing Support & Consultation',
    description: 'Our relationship doesn\'t end at launch; we carry out active web maintenance, security monitoring, and marketing audits.',
    icon: 'HeartHandshake',
  },
];

export const servicesData: ServiceCategory[] = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Maximize your digital reach and convert high-intent prospective buyers into long-term loyal advocates.',
    icon: 'Megaphone',
    items: [
      { name: 'Social Media Marketing', description: 'Curating targeted interactive campaigns on Facebook, Instagram, LinkedIn, and TikTok.' },
      { name: 'Facebook & Instagram Ads', description: 'Deploying highly optimized ad sets leveraging demographic interest segments and pixel retargeting.' },
      { name: 'Google Ads Management', description: 'Bidding strategically on commercial search intent keywords and high-impact Display Network slots.' },
      { name: 'Email Marketing', description: 'Designing personalized conversion flows, monthly newsletters, and fully automated retention drips.' },
      { name: 'Influencer Marketing', description: 'Partnering with prominent local tastemakers and micro-influencers to authentically introduce your catalog.' },
    ],
  },
  {
    id: 'web-development',
    title: 'Website Development',
    description: 'Secure interactive, state-of-the-art web properties engineered for outstanding speed and pixel-perfect responsiveness.',
    icon: 'Code2',
    items: [
      { name: 'Company Profile Websites', description: 'Building fast, engaging company frontpages with optimized content that convert visitors into inbound B2B leads.' },
      { name: 'E-Commerce Websites', description: 'Creating fully comprehensive e-shops with clean shopping carts, regional checkout options, and admin tracking dashboards.' },
      { name: 'Landing Pages', description: 'Crafting highly focused, fast-loading, single-action sales pitches engineered to maximize conversion coefficients.' },
      { name: 'Portfolio Websites', description: 'Constructing modern creative showrooms with fluid transition states to spotlight specialized talent or products.' },
      { name: 'Website Maintenance', description: 'Performing vital software patching, theme updates, daily backups, and robust uptime monitoring.' },
    ],
  },
  {
    id: 'branding-design',
    title: 'Branding & Design',
    description: 'Inject your brand with a memorable, distinctive voice and high-contrast, beautiful visual systems.',
    icon: 'Palette',
    items: [
      { name: 'Logo Design', description: 'Forging iconic, timeless vector logos that look spectacular on app icons, giant billboards, and stationary.' },
      { name: 'Brand Identity Design', description: 'Establishing consistent typography pairings, brand color theories, and full corporate representation guides.' },
      { name: 'Marketing Materials', description: 'Designing brochure templates, pitch decks, exhibition backdrops, and ready-to-print flyers.' },
      { name: 'UI/UX Design', description: 'Mapping low-fidelity user flows and beautiful high-fidelity prototypes using modern digital wireframes.' },
    ],
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    description: 'Captivate prospects with professional photography, premium edits, and engaging commercial copy.',
    icon: 'PenTool',
    items: [
      { name: 'Social Media Content', description: 'Developing calendar templates, interactive stories, and weekly graphics keeping feeds energized and fresh.' },
      { name: 'Video Production', description: 'Filming, editing, and pacing short-form social reels, corporate promotional reels, and animated explainers.' },
      { name: 'Photography', description: 'Directing studio product shoots, high-resolution lifestyle setups, and professional corporate portrait sessions.' },
      { name: 'Copywriting', description: 'Drafting clear, SEO-friendly articles, persuasive advertising taglines, and highly professional corporate profiles.' },
    ],
  },
  {
    id: 'seo-services',
    title: 'SEO Services',
    description: 'Boost organic reach, conquer the front page of search engines, and dominate localized market directories.',
    icon: 'SearchCode',
    items: [
      { name: 'On-Page SEO', description: 'Optimizing meta tags, cleaning heading hierarchies, and seamlessly integrating relevant commercial search intent keywords.' },
      { name: 'Technical SEO', description: 'Refining XML sitemaps, streamlining core web vitals, compressing massive assets, and establishing micro-markups.' },
      { name: 'Local SEO', description: 'Configuring dominant Google Business Profiles, managing local citations, and building high-authority local map listings.' },
      { name: 'SEO Audits', description: 'Generating granular crawling logs, checking keyword ranks, detailing backlink health, and laying clear action plans.' },
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: 'proj-1',
    title: 'Safisha E-Commerce Platform',
    category: 'Website Development',
    client: 'Safisha Logistics & Retail',
    description: 'A custom, lightning-fast React and Node.js e-commerce portal integrated with local payment options (Chapa / Telebirr) and regional dispatch coordinates. Achieved a sub-second load time and streamlined mobile checkout flow.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'TypeScript', 'Tailwind', 'Telebirr Integration'],
    metrics: '+240% Order Volume',
    year: '2024',
  },
  {
    id: 'proj-2',
    title: 'Chala Beverage Launch Strategy',
    category: 'Social Media Campaigns',
    client: 'Chala Agro-Processor Ltd.',
    description: 'An immersive social media campaign utilizing custom animated TikTok assets and Facebook ads to introduce a new beverage line. Focused heavily on high-energy video content and local micro-influencer product placements.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    tags: ['TikTok Marketing', 'Video Production', 'Facebook Ads'],
    metrics: '1.8M Video Views',
    year: '2024',
  },
  {
    id: 'proj-3',
    title: 'Zemen Import Export Corporate Identity',
    category: 'Branding Projects',
    client: 'Zemen Trading Ethiopia',
    description: 'A complete branding overhaul starting with a sleek typographic logo, rich stationery suites, responsive brand guidelines, and a sleek corporate profile deck designed to engage premium international agricultural buyers.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    tags: ['Logo Design', 'Brand Identity', 'Marketing Collateral'],
    metrics: 'Unified Global Image',
    year: '2023',
  },
  {
    id: 'proj-4',
    title: 'Gebeya Pay Fintech Wireframes',
    category: 'UI/UX Projects',
    client: 'Gebeya Tech Holdings',
    description: 'Designed highly polished user flows and component wireframes for a peer-to-peer mobile wallet application. Conducted rigorous user testing with localized focus groups to ensure maximum demographic accessibility.',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=800&q=80',
    tags: ['Figma', 'Prototyping', 'User Testing', 'Fintech UI'],
    metrics: '94% Task Completion Rate',
    year: '2024',
  },
  {
    id: 'proj-5',
    title: 'Abyssinia Premium Coffee Campaign',
    category: 'Marketing Campaigns',
    client: 'Abyssinia Coffee Roasters',
    description: 'A comprehensive, multi-channel holiday campaign matching localized organic SEO pages, google shopping catalog expansions, and strategic holiday discounts that drove massive coffee bag subscriptions.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    tags: ['Google Ads', 'Local SEO', 'PPC Management'],
    metrics: '+310% Online Subs',
    year: '2023',
  },
  {
    id: 'proj-6',
    title: 'Yene Delivery Application Web Portal',
    category: 'Website Development',
    client: 'Yene Logistics PLC',
    description: 'A modern, real-time map-enabled landing ecosystem and restaurant merchant on-boarding funnel that reduced onboarding drag and optimized dispatch agent registrations.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    tags: ['NextJS', 'Google Maps API', 'Lead Funnels'],
    metrics: '5-Min Merchant Setup',
    year: '2024',
  },
];

export const teamData: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Dagmawi Siltawi',
    position: 'CEO & Founder',
    role: 'CEO & Founder',
    bio: 'Dagmawi is a visionary digital strategist with over 10 years of experience launching software products and digital corporate identities across East Africa. He leads Siltawi\'s core corporate strategy, brand relationships, and business development efforts.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400&q=80',
    socials: {
      linkedin: 'https://linkedin.com/in/dagmawi-siltawi',
      twitter: 'https://twitter.com/dagmawi_siltawi',
      instagram: 'https://instagram.com/dagmawi',
    },
  },
  {
    id: 'team-2',
    name: 'Amira Yusuf',
    position: 'Marketing Manager',
    role: 'Marketing Manager',
    bio: 'Amira is a creative dynamo specialized in user acquisition and brand pacing. Having managed multi-million Birr performance advertising budgets, she oversees our entire marketing campaign output and guarantees stellar client returns.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80',
    socials: {
      linkedin: 'https://linkedin.com/in/amira-yusuf',
      instagram: 'https://instagram.com/amira_mktg',
    },
  },
  {
    id: 'team-3',
    name: 'Yohannes Bekele',
    position: 'Lead Web Engineer',
    role: 'Web Development Team',
    bio: 'Yohannes is a full-stack engineer who values clean code, sub-second responses, and solid type systems. He leads our web development department, ensuring all React, Next.js, and e-commerce deployments are robust and scalable.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80',
    socials: {
      linkedin: 'https://linkedin.com/in/yohannes-bek',
      twitter: 'https://twitter.com/yohannes_dev',
    },
  },
  {
    id: 'team-4',
    name: 'Tsion Girma',
    position: 'Senior Graphic Designer',
    role: 'Graphic Design Team',
    bio: 'Tsion is an award-winning creative designer who believes that design should speak before it explains. She coordinates all brand identity guides, logo generations, and high-fidelity wireframing tasks at the agency.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80',
    socials: {
      instagram: 'https://instagram.com/tsion_designs',
      linkedin: 'https://linkedin.com/in/tsion-girma',
    },
  },
  {
    id: 'team-5',
    name: 'Naod Tesfaye',
    position: 'Director of Content',
    role: 'Content Creation Team',
    bio: 'Naod is a filmmaker and professional copywriter who captures the soul of products through striking lenses and concise prose. He runs our video, photography, and scriptwriting teams with precision.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80',
    socials: {
      instagram: 'https://instagram.com/naod_creative',
      facebook: 'https://facebook.com/naod.tesfaye',
    },
  },
  {
    id: 'team-6',
    name: 'Helen Hailu',
    position: 'SEO Specialist',
    role: 'SEO Specialists',
    bio: 'Helen helps businesses conquer search parameters and command localized brand visibility. She analyzes crawling logs, cleans core web vitals, and builds robust content maps that drive valuable organic inbound traffic.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=400&q=80',
    socials: {
      linkedin: 'https://linkedin.com/in/helen-hailu',
    },
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Siltawi helped us increase our online sales by 200% within six months. Their strategic performance marketing and custom dashboard integration completely revolutionized how we process customer journeys.',
    author: 'Kidus Wolde',
    role: 'Business Owner',
    company: 'Safisha Logistics & Retail',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80',
  },
  {
    id: 'test-2',
    quote: 'Their website design and marketing services transformed our brand presence. Within three weeks of launching our new product line with Siltawi\'s creative campaigns, we experienced unprecedented organic reach across all key channels.',
    author: 'Saron Abera',
    role: 'Startup Founder',
    company: 'Lucy Cosmetics',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
  },
  {
    id: 'test-3',
    quote: 'The depth of content and strategic rigor that Siltawi injected into our agricultural import-export portal was exemplary. They captured our values perfectly and presented them beautifully to our world-wide commercial partners.',
    author: 'Bekele Assefa',
    role: 'Managing Director',
    company: 'Zemen Trading PLC',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80',
  },
  {
    id: 'test-4',
    quote: 'Siltawi is unlike any other agency in Africa. They combine technical engineering agility (clean, ultra-fast React portals) with high-fidelity creative artwork. Their transparent pricing models made scaling highly straightforward.',
    author: 'Lydia Daniel',
    role: 'Product Owner',
    company: 'Gebeya Tech Holdings',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
  },
];
