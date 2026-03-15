'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { gradients } from '@/lib/data';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAF7F2]">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: `radial-gradient(circle, ${gradients.orangePink} 0%, transparent 70%)`,
            top: '-200px',
            right: '-200px',
            filter: 'blur(60px)',
          }}
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-[500px] h-[500px] rounded-full opacity-25"
          style={{
            background: `radial-gradient(circle, ${gradients.hero} 0%, transparent 70%)`,
            bottom: '-150px',
            left: '-150px',
            filter: 'blur(60px)',
          }}
        />
        
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 100 + 20,
              height: Math.random() * 100 + 20,
              background: i % 2 === 0 
                ? 'linear-gradient(135deg, #FF6B35, #FF4D94)'
                : 'linear-gradient(135deg, #8B5CF6, #06B6D4)',
              opacity: 0.15,
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-5 py-2 rounded-full text-sm font-medium mb-8"
            style={{
              background: 'linear-gradient(135deg, rgba(255,107,53,0.1), rgba(255,77,148,0.1))',
              color: '#7A1E2C',
              border: '1px solid rgba(122,30,44,0.2)',
            }}
          >
            ✨ Unlimited Design. One Subscription.
          </motion.span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          style={{ fontFamily: 'Clash Display, sans-serif' }}
        >
          Transform Your Brand{' '}
          <span 
            className="block"
            style={{
              background: gradients.hero,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            With Stunning Design
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-[#6B7280] max-w-2xl mx-auto mb-10"
          style={{ fontFamily: 'Satoshi, sans-serif' }}
        >
          Get premium design services on demand. Fast turnaround, unlimited revisions, and world-class quality—all in one subscription.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/register"
            className="px-8 py-4 rounded-full text-white font-semibold text-lg transition-all hover:scale-105 hover:shadow-2xl"
            style={{ background: gradients.hero }}
          >
            Start Creating
          </Link>
          <Link
            href="/#portfolio"
            className="px-8 py-4 rounded-full font-semibold text-lg transition-all border-2 border-[#7A1E2C] text-[#7A1E2C] hover:bg-[#7A1E2C] hover:text-white"
          >
            See Our Work
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16 flex justify-center gap-8"
        >
          {[
            { value: '450+', label: 'Clients' },
            { value: '1200+', label: 'Designs' },
            { value: '98%', label: 'Satisfaction' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div 
                className="text-3xl md:text-4xl font-bold"
                style={{
                  background: gradients.hero,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-[#6B7280]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-[#7A1E2C] flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0], y: [0, 10] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-[#7A1E2C]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
