'use client';

import { motion } from 'framer-motion';
import { gradients } from '@/lib/data';

const benefits = [
  {
    id: 1,
    title: 'Save Time',
    subtitle: 'Focus on growing your business while we handle the design work.',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    color: '#FF6B35',
    gradient: 'from-orange-400 to-red-500',
  },
  {
    id: 2,
    title: 'Save Money',
    subtitle: '80% more affordable than hiring in-house or working with agencies.',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    color: '#10B981',
    gradient: 'from-emerald-400 to-teal-500',
  },
  {
    id: 3,
    title: 'Scale Faster',
    subtitle: 'Launch more campaigns, create more content without hiring more staff.',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <path d="M23 6l-9.5 9.5-5-5L1 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 6h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="18" r="4" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    color: '#8B5CF6',
    gradient: 'from-purple-400 to-violet-600',
  },
  {
    id: 4,
    title: 'Brand Consistency',
    subtitle: 'Keep your visual identity consistent across every touchpoint and platform.',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    color: '#FF4D94',
    gradient: 'from-pink-400 to-rose-500',
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

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#7A1E2C] to-transparent -translate-y-1/2 opacity-20" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E5E0D8] group h-full">
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      className="w-24 h-24 rounded-3xl flex items-center justify-center mb-6 text-white shadow-lg"
                      style={{ background: benefit.color }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {benefit.icon}
                    </motion.div>

                    <h3 
                      className="text-2xl font-bold mb-3 text-[#1A1A2E]"
                      style={{ fontFamily: 'Clash Display, sans-serif' }}
                    >
                      {benefit.title}
                    </h3>
                    
                    <p className="text-[#6B7280] leading-relaxed">
                      {benefit.subtitle}
                    </p>
                  </div>

                  <motion.div
                    className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-20 blur-2xl"
                    style={{ background: benefit.color }}
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

                {index < benefits.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <motion.div
                      animate={{ x: [0, 6, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ background: gradients.hero }}
                    >
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-[#FAF7F2] rounded-full">
            <span className="text-[#6B7280]">Ready to transform?</span>
            <button 
              className="px-6 py-2 rounded-full text-white font-semibold transition-all hover:scale-105"
              style={{ background: gradients.hero }}
            >
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
