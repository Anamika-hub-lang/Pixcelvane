'use client';

import { motion } from 'framer-motion';
import { gradients } from '@/lib/data';

const benefits = [
  {
    id: 1,
    title: 'Save Time',
    subtitle: 'Focus on growing your business while we handle the design work.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=300&fit=crop',
    color: '#FF6B35',
  },
  {
    id: 2,
    title: 'Save Money',
    subtitle: '80% more affordable than hiring in-house or working with agencies.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=300&fit=crop',
    color: '#10B981',
  },
  {
    id: 3,
    title: 'Scale Faster',
    subtitle: 'Launch more campaigns, create more content without hiring more staff.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=300&fit=crop',
    color: '#8B5CF6',
  },
  {
    id: 4,
    title: 'Brand Consistency',
    subtitle: 'Keep your visual identity consistent across every touchpoint and platform.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=300&h=300&fit=crop',
    color: '#FF4D94',
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
                <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E5E0D8] group h-full flex flex-col items-center">
                  <div className="relative mb-6">
                    <motion.div
                      className="w-32 h-32 rounded-full overflow-hidden shadow-xl border-4"
                      style={{ borderColor: benefit.color }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <img
                        src={benefit.image}
                        alt={benefit.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    
                    <motion.div
                      className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg"
                      style={{ background: benefit.color }}
                    >
                      {index + 1}
                    </motion.div>
                  </div>

                  <div className="text-center flex-1 flex flex-col">
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
