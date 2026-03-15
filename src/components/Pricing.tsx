'use client';

import { motion } from 'framer-motion';
import { pricingPlans, gradients } from '@/lib/data';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A1A2E]">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Choose the perfect plan for your design needs. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-[#7A1E2C] to-[#5A1520] text-white scale-105 shadow-2xl' 
                  : 'bg-white border border-[#E5E0D8] hover:border-[#FF6B35]'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#FF6B35] to-[#FF4D94] text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-[#1A1A2E]'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? 'text-white/70' : 'text-[#6B7280]'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="text-center mb-8">
                <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-[#1A1A2E]'}`}>
                  ${plan.price}
                </span>
                <span className={`text-lg ${plan.popular ? 'text-white/70' : 'text-[#6B7280]'}`}>
                  /{plan.period}
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.popular ? 'bg-white/20' : 'bg-[#FF6B35]/10'
                    }`}>
                      <svg className={`w-3 h-3 ${plan.popular ? 'text-white' : 'text-[#FF6B35]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className={plan.popular ? 'text-white/90' : 'text-[#1A1A2E]'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-full font-semibold transition-all hover:scale-105 ${
                  plan.popular
                    ? 'bg-white text-[#7A1E2C] hover:shadow-lg'
                    : 'bg-gradient-to-r from-[#FF6B35] to-[#FF4D94] text-white hover:shadow-lg'
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
