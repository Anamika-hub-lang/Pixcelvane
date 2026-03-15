'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { gradients } from '@/lib/data';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#FAF7F2]">
      {/* Background gradient circles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Orange to pink gradient */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-[700px] h-[700px] rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle, #FF6B35 0%, #FF4D94 70%, transparent 100%)',
            top: '-250px',
            right: '-150px',
            filter: 'blur(80px)',
          }}
        />
        
        {/* Maroon to peach gradient */}
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #7A1E2C 0%, #FFB085 70%, transparent 100%)',
            bottom: '-200px',
            left: '-150px',
            filter: 'blur(80px)',
          }}
        />
        
        {/* Soft purple to pink gradient */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, #8B5CF6 0%, #FF7EB5 70%, transparent 100%)',
            top: '30%',
            left: '20%',
            filter: 'blur(60px)',
          }}
        />
        
        {/* Cyan accent */}
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-[300px] h-[300px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, #06B6D4 0%, #8B5CF6 70%, transparent 100%)',
            top: '50%',
            right: '25%',
            filter: 'blur(50px)',
          }}
        />
        
        {/* Small floating circles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 60 + 10,
              height: Math.random() * 60 + 10,
              background: i % 3 === 0 
                ? 'linear-gradient(135deg, #FF6B35, #FF4D94)'
                : i % 3 === 1
                ? 'linear-gradient(135deg, #8B5CF6, #FF7EB5)'
                : 'linear-gradient(135deg, #7A1E2C, #FFB085)',
              opacity: 0.1 + Math.random() * 0.1,
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-5 py-2 rounded-full text-sm font-medium mb-6"
              style={{
                background: 'linear-gradient(135deg, rgba(255,107,53,0.15), rgba(255,77,148,0.15))',
                color: '#7A1E2C',
                border: '1px solid rgba(122,30,44,0.2)',
              }}
            >
              ✨ Unlimited Design. One Subscription.
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
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
              className="text-lg md:text-xl text-[#6B7280] mb-8 max-w-xl"
              style={{ fontFamily: 'Satoshi, sans-serif' }}
            >
              Get premium design services on demand. Fast turnaround, unlimited revisions, and world-class quality—all in one subscription.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/register"
                className="px-8 py-4 rounded-full text-white font-semibold text-lg transition-all hover:scale-105 hover:shadow-2xl text-center"
                style={{ background: gradients.hero }}
              >
                Get Started
              </Link>
              <Link
                href="/#pricing"
                className="px-8 py-4 rounded-full font-semibold text-lg transition-all border-2 border-[#7A1E2C] text-[#7A1E2C] hover:bg-[#7A1E2C] hover:text-white text-center"
              >
                View Pricing
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-12 flex gap-8"
            >
              {[
                { value: '450+', label: 'Clients' },
                { value: '1200+', label: 'Designs' },
                { value: '98%', label: 'Satisfaction' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div 
                    className="text-2xl md:text-3xl font-bold"
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
          </motion.div>

          {/* Right Column - Creative Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main design mockup image */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="relative z-10"
              >
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#E5E0D8]">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                    alt="Design Mockup"
                    className="w-full h-auto"
                  />
                  
                  {/* Floating design elements overlay */}
                  <motion.div
                    className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl overflow-hidden shadow-xl"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    style={{
                      background: 'linear-gradient(135deg, #FF6B35, #FF4D94)',
                    }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl overflow-hidden shadow-xl"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    style={{
                      background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)',
                    }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Decorative gradient orbs behind */}
              <motion.div
                className="absolute -top-8 -right-8 w-40 h-40 rounded-full opacity-30 blur-xl"
                style={{ background: 'linear-gradient(135deg, #FF6B35, #FF4D94)' }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full opacity-25 blur-xl"
                style={{ background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)' }}
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
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
