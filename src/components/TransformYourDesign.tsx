'use client';

import { motion } from 'framer-motion';
import { gradients } from '@/lib/data';

const designTypes = [
  {
    id: 1,
    title: 'Website Design',
    description: 'Stunning websites that convert',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 15h18M8 9h8M8 12h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    color: '#FF6B35',
    gradient: 'from-orange-400 to-red-500',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
  },
  {
    id: 2,
    title: 'Brand Identity',
    description: 'Build a powerful brand',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    color: '#FF4D94',
    gradient: 'from-pink-400 to-rose-500',
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=400&h=300&fit=crop',
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'Create intuitive experiences',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 4v2M12 18v2M4 12h2M18 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    color: '#8B5CF6',
    gradient: 'from-purple-400 to-violet-600',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
  },
  {
    id: 4,
    title: 'Social Media',
    description: 'Engaging visual content',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="8" cy="10" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 16c0-2 2-4 4-4h12c2 0 4 2 4 4" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    color: '#06B6D4',
    gradient: 'from-cyan-400 to-blue-500',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
  },
  {
    id: 5,
    title: 'Motion Graphics',
    description: 'Bring your brand to life',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <polygon points="5,3 19,12 5,21" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M12 3v18" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2"/>
      </svg>
    ),
    color: '#FBBF24',
    gradient: 'from-yellow-400 to-amber-500',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop',
  },
  {
    id: 6,
    title: 'Illustrations',
    description: 'Unique custom artwork',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 14c2-2 4-2 6 0M8 10c2 2 4 2 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="9" cy="9" r="1" fill="currentColor"/>
        <circle cx="15" cy="9" r="1" fill="currentColor"/>
      </svg>
    ),
    color: '#10B981',
    gradient: 'from-emerald-400 to-teal-500',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop',
  },
];

export default function TransformYourDesign() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A1A2E]">
            Transform Your Design Process
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Unlimited design services for every need. One subscription. Create without limits.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designTypes.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div 
                  className="absolute inset-0"
                  style={{ 
                    background: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)`,
                  }}
                />
                
                <motion.div
                  className="absolute top-4 left-4 w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg"
                  style={{ background: item.color }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {item.icon}
                </motion.div>

                <motion.div
                  className="absolute -right-4 -bottom-4 w-32 h-32 rounded-full opacity-30 blur-2xl"
                  style={{ background: item.color }}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.description}</p>
                
                <motion.div
                  className="mt-4 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <span>Explore</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </div>

              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${item.color}20 0%, transparent 50%)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button 
            className="px-8 py-4 rounded-full text-white font-semibold transition-all hover:scale-105 hover:shadow-2xl"
            style={{ background: gradients.hero }}
          >
            View All Services
          </button>
        </motion.div>
      </div>
    </section>
  );
}
