'use client';

import { motion } from 'framer-motion';
import { gradients } from '@/lib/data';

const steps = [
  {
    number: '01',
    title: 'Subscribe',
    description: 'Choose a plan that fits your needs and subscribe in minutes. Get instant access to unlimited design requests.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    accent: '#FF6B35',
  },
  {
    number: '02',
    title: 'Submit Request',
    description: 'Tell us what you need through our simple request form. Share your vision and we will bring it to life.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400&h=300&fit=crop',
    accent: '#FF4D94',
  },
  {
    number: '03',
    title: 'Receive Design',
    description: 'Get your stunning design delivered within hours, not weeks. Unlimited revisions until perfect.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    accent: '#8B5CF6',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A1A2E]">
            How It Works
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Get started in minutes and transform your brand with our simple process
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[180px] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#7A1E2C] to-transparent opacity-20" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#E5E0D8] group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div 
                      className="absolute inset-0 opacity-80"
                      style={{ background: `linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 100%)` }}
                    />
                    <div className="absolute bottom-4 left-4">
                      <span 
                        className="text-5xl font-bold text-white"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        {step.number}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div 
                      className="w-12 h-1 mb-4 rounded-full"
                      style={{ background: `linear-gradient(90deg, ${step.accent}, ${step.accent}80)` }}
                    />
                    <h3 className="text-2xl font-bold mb-3 text-[#1A1A2E]">{step.title}</h3>
                    <p className="text-[#6B7280] leading-relaxed">{step.description}</p>
                  </div>

                  <motion.div
                    className="absolute -bottom-2 -right-2 w-24 h-24 rounded-full opacity-20 blur-xl"
                    style={{ background: step.accent }}
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                    <motion.div
                      animate={{ x: [0, 8, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                      style={{ background: gradients.hero }}
                    >
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
