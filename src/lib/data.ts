export const colors = {
  maroon: '#7A1E2C',
  maroonDark: '#5A1520',
  beige: '#FAF7F2',
  textDark: '#1A1A2E',
  textMuted: '#6B7280',
  borderLight: '#E5E0D8',
  accentPurple: '#8B5CF6',
  accentCyan: '#06B6D4',
  accentYellow: '#FBBF24',
  orange: '#FF6B35',
  orangeLight: '#F7931E',
  pink: '#FF4D94',
  pinkLight: '#FF7EB5',
};

export const gradients = {
  hero: `linear-gradient(135deg, ${colors.maroon} 0%, ${colors.orange} 50%, ${colors.pink} 100%)`,
  card: `linear-gradient(135deg, rgba(255,107,53,0.05) 0%, rgba(255,77,148,0.05) 100%)`,
  pricing: `linear-gradient(180deg, ${colors.maroon} 0%, ${colors.maroonDark} 100%)`,
  orangePink: `linear-gradient(135deg, ${colors.orange} 0%, ${colors.pink} 100%)`,
};

export const services = [
  {
    id: 'website',
    title: 'Website Design',
    description: 'Stunning websites that convert visitors into customers.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=800&fit=crop',
  },
  {
    id: 'branding',
    title: 'Branding',
    description: 'Build a powerful brand identity that stands out.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=800&fit=crop',
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    description: 'Create intuitive and beautiful user experiences.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=800&fit=crop',
  },
  {
    id: 'social',
    title: 'Social Media Creatives',
    description: 'Engaging visuals that boost your social presence.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=800&fit=crop',
  },
  {
    id: 'motion',
    title: 'Motion Graphics',
    description: 'Dynamic animations that bring your brand to life.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=800&fit=crop',
  },
];

export const portfolioItems = [
  {
    id: 1,
    title: 'TechCorp Website',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    title: 'Brand Identity',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    title: 'Social Campaign',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    title: 'App Interface',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
  },
  {
    id: 5,
    title: 'Product Launch',
    category: 'Motion',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
  },
  {
    id: 6,
    title: 'E-commerce Redesign',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  },
];

export const pricingPlans = [
  {
    name: 'Starter',
    price: 299,
    period: 'month',
    description: 'Perfect for small businesses',
    features: [
      '5 Design Requests',
      '24hr Delivery',
      'Commercial License',
      'Standard Support',
      'PNG & JPG Files',
    ],
    popular: false,
  },
  {
    name: 'Growth',
    price: 499,
    period: 'month',
    description: 'Best for growing companies',
    features: [
      '15 Design Requests',
      '12hr Delivery',
      'Priority Support',
      'Unlimited Revisions',
      'All File Formats',
      'Source Files Included',
    ],
    popular: true,
  },
  {
    name: 'Unlimited',
    price: 899,
    period: 'month',
    description: 'For enterprises with high volume needs',
    features: [
      'Unlimited Requests',
      '6hr Delivery',
      'Dedicated Manager',
      '24/7 Priority Support',
      'All File Formats',
      'Source Files Included',
      'API Access',
    ],
    popular: false,
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    company: 'TechStartup Inc.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    quote: 'Pixcelvane has transformed our brand completely. The quality of designs and fast turnaround time is incredible. Best investment we made!',
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    company: 'GrowthLabs',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    quote: 'The subscription model is a game-changer. We can submit unlimited requests and get professional designs done in hours, not weeks.',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    company: 'BrandCo',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    quote: 'Our social media engagement increased by 300% after working with Pixcelvane. The designs are consistently stunning and on-brand.',
  },
  {
    id: 4,
    name: 'David Kim',
    company: 'InnovateTech',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    quote: 'The best design agency we have ever worked with. Professional, creative, and always delivers beyond expectations.',
  },
];

export const faqs = [
  {
    question: 'How does the subscription work?',
    answer: 'Simply choose a plan that fits your needs, subscribe, and start submitting design requests. Our team will work on your designs and deliver them within the specified timeframe.',
  },
  {
    question: 'What file formats will I receive?',
    answer: 'You will receive all standard file formats including PNG, JPG, SVG, PDF, and source files (AI, PSD, Figma) depending on your plan.',
  },
  {
    question: 'How long does each design take?',
    answer: 'Delivery times vary by plan: Starter (24hr), Growth (12hr), and Unlimited (6hr). Complex projects may take slightly longer.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can cancel your subscription at any time. There are no cancellation fees or hidden charges.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We offer a 7-day money-back guarantee. If you are not satisfied with our service, contact us for a full refund.',
  },
  {
    question: 'What if I am not satisfied with the design?',
    answer: 'We offer unlimited revisions on all plans. Simply provide feedback and our team will revise the design until you are satisfied.',
  },
];

export const stats = [
  { value: 450, suffix: '+', label: 'Clients' },
  { value: 1200, suffix: '+', label: 'Designs Delivered' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 98, suffix: '%', label: 'Satisfaction Rate' },
];

export const trustedCompanies = [
  { name: 'Stripe', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg', color: '#635BFF' },
  { name: 'Notion', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png', color: '#000000' },
  { name: 'Slack', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg', color: '#4A154B' },
  { name: 'Figma', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg', color: '#F24E1E' },
  { name: 'Webflow', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Webflow_Logo.svg', color: '#146EF5' },
  { name: 'Framer', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Framer_Logo.png', color: '#000000' },
  { name: 'Dribbble', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Dribbble_Logo.png', color: '#EA4C89' },
  { name: 'InVision', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Invision_Logo.png', color: '#FF3366' },
];
