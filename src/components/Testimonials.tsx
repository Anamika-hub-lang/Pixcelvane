'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { testimonials, gradients } from '@/lib/data';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const next = prev + newDirection;
      if (next < 0) return testimonials.length - 1;
      if (next >= testimonials.length) return 0;
      return next;
    });
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 -top-20 -bottom-20" style={{ background: gradients.hero }} />
      
      <div className="absolute inset-0 -top-20 -bottom-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            animate={{
              y: [0, -20, 0],
              x: [0, 15, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              width: Math.random() * 150 + 40,
              height: Math.random() * 150 + 40,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
            What Our Clients Say
          </h2>
          <p className="text-lg text-white/70">
            Join hundreds of satisfied clients
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-6xl text-white/10 font-serif">"</div>
          
          <div className="relative h-52">
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-[#FAF7F2] rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto border border-[#E5E0D8]">
                  <div className="flex flex-col items-center text-center">
                    <p className="text-base md:text-lg text-[#1A1A2E] mb-4 leading-relaxed">
                      {testimonials[currentIndex].quote}
                    </p>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-[#7A1E2C]/20"
                      />
                      <div className="text-left">
                        <p className="font-bold text-[#1A1A2E]">{testimonials[currentIndex].name}</p>
                        <p className="text-[#6B7280]">{testimonials[currentIndex].company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-10' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                style={{ 
                  background: index === currentIndex ? '#FF6B35' : undefined 
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
