'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { gradients } from '@/lib/data';

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0" style={{ background: gradients.hero }} />
      
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, 30, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Join 450+ companies already creating stunning designs with Pixcelvane. 
            Start your free trial today.
          </p>
          <Link
            href="/register"
            className="inline-block px-10 py-5 rounded-full bg-white text-[#7A1E2C] font-bold text-lg transition-all hover:scale-105 hover:shadow-2xl"
          >
            Get Started Now
          </Link>
          <p className="mt-6 text-white/60 text-sm">
            No credit card required. 7-day free trial.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
