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
    <section className="py-24 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A1A2E]">
            What Our Clients Say
          </h2>
          <p className="text-xl text-[#6B7280]">
            Join hundreds of satisfied clients who have transformed their brands
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-8xl text-[#7A1E2C] opacity-10 font-serif">"</div>
          
          <div className="relative h-[300px]">
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
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg max-w-2xl mx-auto">
                  <div className="flex flex-col items-center text-center">
                    <p className="text-xl md:text-2xl text-[#1A1A2E] mb-8 leading-relaxed">
                      {testimonials[currentIndex].quote}
                    </p>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="w-14 h-14 rounded-full object-cover"
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
                    ? 'w-8' 
                    : 'bg-[#E5E0D8] hover:bg-[#7A1E2C]/30'
                }`}
                style={{ 
                  background: index === currentIndex ? gradients.hero : undefined 
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
