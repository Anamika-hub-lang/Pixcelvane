'use client';

import { motion } from 'framer-motion';
import { gradients } from '@/lib/data';

const creativeWorks = [
  {
    id: 1,
    title: 'Logo Designs',
    description: 'Unique brand identities that make lasting impressions',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=500&fit=crop',
    color: '#FF6B35',
  },
  {
    id: 2,
    title: 'Presentation Designs',
    description: 'Impactful slides that captivate your audience',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=500&fit=crop',
    color: '#8B5CF6',
  },
  {
    id: 3,
    title: 'Print Designs',
    description: 'Premium print materials for your brand',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=500&fit=crop',
    color: '#FF4D94',
  },
  {
    id: 4,
    title: 'Social Media Creatives',
    description: 'Engaging posts that boost your social presence',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=500&fit=crop',
    color: '#06B6D4',
  },
  {
    id: 5,
    title: 'Web Designs',
    description: 'Modern websites that convert visitors to customers',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=500&fit=crop',
    color: '#10B981',
  },
  {
    id: 6,
    title: 'Brand Guidelines',
    description: 'Comprehensive brand systems and style guides',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=500&fit=crop',
    color: '#FBBF24',
  },
  {
    id: 7,
    title: 'Packaging Designs',
    description: 'Eye-catching packaging that sells products',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=500&fit=crop',
    color: '#EC4899',
  },
  {
    id: 8,
    title: 'Illustration Art',
    description: 'Custom illustrations that tell your story',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=500&fit=crop',
    color: '#6366F1',
  },
];

export default function CreativeShowcase() {
  return (
    <section id="portfolio" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A1A2E]">
            Our Creative Work
          </h2>
          <p className="text-xl text-[#6B7280]">
            Explore our diverse portfolio of design projects
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
        
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: [0, -50 * 200] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
            whileHover={{ animationPlayState: 'paused' }}
            style={{ animationPlayState: 'running' }}
          >
            {[...creativeWorks, ...creativeWorks, ...creativeWorks].map((work, index) => (
              <motion.div
                key={`${work.id}-${index}`}
                className="flex-shrink-0 w-72 md:w-80 group cursor-pointer"
                whileHover={{ y: -10 }}
              >
                <div className="bg-white rounded-[20px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5E0D8]">
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div
                      className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-20 blur-2xl"
                      style={{ background: work.color }}
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-[#1A1A2E] mb-2">{work.title}</h3>
                    <p className="text-sm text-[#6B7280]">{work.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <button 
          className="px-8 py-4 rounded-full text-white font-semibold transition-all hover:scale-105 hover:shadow-2xl"
          style={{ background: gradients.hero }}
        >
          View All Projects
        </button>
      </motion.div>
    </section>
  );
}
