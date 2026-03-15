'use client';

import { motion } from 'framer-motion';
import { trustedCompanies } from '@/lib/data';

export default function TrustedBy() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#6B7280] font-medium">Trusted by 450+ innovative companies</p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [0, -50 * 128] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="flex gap-16 whitespace-nowrap"
          >
            {[...trustedCompanies, ...trustedCompanies, ...trustedCompanies].map((company, i) => (
              <div
                key={`${company.name}-${i}`}
                className="flex items-center gap-2"
              >
                <div 
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#7A1E2C] to-[#FF6B35] flex items-center justify-center text-white font-bold"
                >
                  {company.name.charAt(0)}
                </div>
                <span className="text-xl font-semibold text-[#1A1A2E]">{company.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
