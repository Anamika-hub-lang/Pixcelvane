'use client';

import { motion } from 'framer-motion';
import { gradients } from '@/lib/data';

const portfolioItems = [
  {
    id: 1,
    title: 'TechCorp Website',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=500&fit=crop',
    color: '#FF6B35',
  },
  {
    id: 2,
    title: 'Brand Identity',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&h=500&fit=crop',
    color: '#FF4D94',
  },
  {
    id: 3,
    title: 'Social Campaign',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=500&fit=crop',
    color: '#8B5CF6',
  },
  {
    id: 4,
    title: 'App Interface',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=500&fit=crop',
    color: '#06B6D4',
  },
  {
    id: 5,
    title: 'Product Launch',
    category: 'Motion',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=500&fit=crop',
    color: '#FBBF24',
  },
  {
    id: 6,
    title: 'E-commerce Redesign',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=500&fit=crop',
    color: '#10B981',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A1A2E]">
            Our Work
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Explore our latest projects and see how we have helped brands transform their visual identity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[4/5] cursor-pointer">
                <motion.div
                  className="absolute inset-0 z-10"
                  style={{ 
                    background: `linear-gradient(to top, ${item.color}dd 0%, ${item.color}44 50%, transparent 100%)`,
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />

                <motion.div
                  className="absolute top-4 right-4 z-20"
                  initial={{ scale: 0, rotate: -180 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg"
                    style={{ background: item.color }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </motion.div>

                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span 
                      className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white mb-2"
                      style={{ background: item.color }}
                    >
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 text-white/80 text-sm font-medium hover:text-white"
                    >
                      View Project
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.button>
                  </motion.div>
                </div>

                <motion.div
                  className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full opacity-30 blur-3xl"
                  style={{ background: item.color }}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button 
            className="px-8 py-4 rounded-full text-white font-semibold transition-all hover:scale-105 hover:shadow-2xl"
            style={{ background: gradients.hero }}
          >
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
