'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { gradients } from '@/lib/data';

const portfolioDetails = {
  1: {
    id: 1,
    title: 'TechCorp Website',
    category: 'Web Design',
    client: 'TechCorp Inc.',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
    color: '#FF6B35',
    description: 'A modern, responsive website redesign for TechCorp that increased conversions by 150%. We created a clean, professional design that showcases their innovative technology solutions.',
    challenge: 'TechCorp needed a website that could effectively communicate their complex technology solutions to both technical and non-technical audiences while maintaining a modern, innovative feel.',
    solution: 'We developed a clean, minimalist design with strategic use of whitespace, interactive elements, and clear CTAs. The result was a 150% increase in lead conversions.',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1481487484168-9b995ecc168d?w=800&h=600&fit=crop',
    ],
    tools: ['Figma', 'React', 'Next.js', 'Tailwind CSS'],
    services: ['UI/UX Design', 'Frontend Development', 'Brand Integration'],
  },
  2: {
    id: 2,
    title: 'Brand Identity',
    category: 'Branding',
    client: 'StartupXYZ',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1200&h=800&fit=crop',
    color: '#FF4D94',
    description: 'Complete brand identity overhaul for StartupXYZ, including logo, color palette, typography, and brand guidelines.',
    challenge: 'StartupXYZ needed a distinctive brand identity that would help them stand out in a crowded market and appeal to their target Gen-Z audience.',
    solution: 'We created a bold, playful brand identity with vibrant colors, custom illustrations, and a memorable logo system.',
    images: [
      'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=600&fit=crop',
    ],
    tools: ['Adobe Illustrator', 'Figma', 'After Effects'],
    services: ['Logo Design', 'Brand Strategy', 'Visual Identity'],
  },
  3: {
    id: 3,
    title: 'Social Campaign',
    category: 'Social Media',
    client: 'FashionBrand',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&h=800&fit=crop',
    color: '#8B5CF6',
    description: 'A viral social media campaign for FashionBrand that generated 10M+ impressions and 500K+ engagements.',
    challenge: 'FashionBrand wanted to increase their social media presence and engage with younger audiences during fashion week.',
    solution: 'We created a series of eye-catching social media posts, stories, and reels that went viral, generating massive engagement.',
    images: [
      'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop',
    ],
    tools: ['Adobe Photoshop', 'After Effects', 'Canva'],
    services: ['Social Media Strategy', 'Content Creation', 'Community Management'],
  },
  4: {
    id: 4,
    title: 'App Interface',
    category: 'UI/UX',
    client: 'HealthTech',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop',
    color: '#06B6D4',
    description: 'User-friendly mobile app interface for HealthTech that improved user retention by 80%.',
    challenge: 'HealthTech needed an intuitive mobile app design that would make health tracking easy and engaging for users of all ages.',
    solution: 'We designed a clean, accessible interface with clear navigation, helpful animations, and personalized health insights.',
    images: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
    ],
    tools: ['Figma', 'Principle', 'Framer'],
    services: ['UI Design', 'UX Research', 'Prototyping'],
  },
  5: {
    id: 5,
    title: 'Product Launch',
    category: 'Motion',
    client: 'TechGiant',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop',
    color: '#FBBF24',
    description: 'Dynamic motion graphics and animated explainer video for TechGiant product launch.',
    challenge: 'TechGiant needed an engaging way to explain their complex new product to potential customers.',
    solution: 'We created stunning motion graphics and a 2-minute explainer video that clearly communicated the product benefits.',
    images: [
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
    ],
    tools: ['After Effects', 'Cinema 4D', 'Adobe Premiere'],
    services: ['Motion Design', 'Animation', 'Video Editing'],
  },
  6: {
    id: 6,
    title: 'E-commerce Redesign',
    category: 'Web Design',
    client: 'ShopOnline',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
    color: '#10B981',
    description: 'Complete e-commerce website redesign that boosted sales by 200% and improved user experience.',
    challenge: 'ShopOnline had a dated website that was difficult to navigate and was losing customers to competitors.',
    solution: 'We redesigned their entire e-commerce experience with modern design, streamlined checkout, and mobile-first approach.',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    ],
    tools: ['Shopify', 'Figma', 'Webflow'],
    services: ['E-commerce Design', 'UX Optimization', 'Conversion Optimization'],
  },
};

export default function PortfolioDetail() {
  const params = useParams();
  const id = parseInt(params?.id as string) || 1;
  const project = portfolioDetails[id as keyof typeof portfolioDetails] || portfolioDetails[1];

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <nav className="bg-white/80 backdrop-blur-md border-b border-[#E5E0D8] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xl"
              style={{ background: gradients.hero }}
            >
              P
            </div>
            <span className="text-xl font-bold text-[#1A1A2E]">Pixcelvane</span>
          </Link>
          <Link 
            href="/#portfolio" 
            className="flex items-center gap-2 text-[#6B7280] hover:text-[#7A1E2C] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </Link>
        </div>
      </nav>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[60vh] overflow-hidden"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0"
          style={{ 
            background: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)`,
          }}
        />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span 
                className="inline-block px-4 py-1 rounded-full text-sm font-medium text-white mb-4"
                style={{ background: project.color }}
              >
                {project.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{project.title}</h1>
              <div className="flex items-center gap-6 text-white/80">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {project.client}
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {project.year}
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute -bottom-4 -right-4 w-64 h-64 rounded-full opacity-30 blur-3xl"
          style={{ background: project.color }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">Overview</h2>
              <p className="text-lg text-[#6B7280] leading-relaxed">{project.description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">The Challenge</h2>
              <p className="text-lg text-[#6B7280] leading-relaxed">{project.challenge}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">The Solution</h2>
              <p className="text-lg text-[#6B7280] leading-relaxed">{project.solution}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-6">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.images.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="rounded-2xl overflow-hidden shadow-lg"
                  >
                    <img src={img} alt={`Project ${i + 1}`} className="w-full h-48 object-cover" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-3xl p-6 shadow-lg border border-[#E5E0D8]"
            >
              <h3 className="text-xl font-bold text-[#1A1A2E] mb-4">Tools Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 rounded-full text-sm font-medium"
                    style={{ background: `${project.color}20`, color: project.color }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-3xl p-6 shadow-lg border border-[#E5E0D8]"
            >
              <h3 className="text-xl font-bold text-[#1A1A2E] mb-4">Services</h3>
              <ul className="space-y-3">
                {project.services.map((service, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#6B7280]">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ background: `${project.color}20` }}
                    >
                      <svg 
                        className="w-3 h-3" 
                        style={{ color: project.color }}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="rounded-3xl overflow-hidden shadow-lg"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div 
                className="p-4"
                style={{ background: project.color }}
              >
                <p className="text-white font-semibold text-center">Ready to start your project?</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <section className="py-16" style={{ background: gradients.hero }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Like what you see?</h2>
          <p className="text-white/80 mb-8">Let us help you create something amazing for your brand.</p>
          <Link 
            href="/#pricing"
            className="inline-block px-8 py-4 bg-white text-[#7A1E2C] rounded-full font-semibold transition-all hover:scale-105 hover:shadow-xl"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
