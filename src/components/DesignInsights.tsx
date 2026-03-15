'use client';

import { motion } from 'framer-motion';
import { gradients } from '@/lib/data';

const insights = [
  {
    id: 1,
    title: '7 Signs Your Business Needs to Outsource Graphic Design',
    category: 'Unlimited Graphic Design',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
    excerpt: 'If your team is stuck doing design work, campaigns are launching late, or your brand looks inconsistent, your business has likely outgrown DIY design.',
    color: '#FF6B35',
    icon: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=100&fit=crop',
  },
  {
    id: 2,
    title: 'Unlimited Graphic Design for Real Estate',
    category: 'Unlimited Graphic Design',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    excerpt: 'You have 3 seconds. That\'s how long buyers look at your listing before scrolling to the next one. Professional design sells 32% faster.',
    color: '#8B5CF6',
    icon: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=100&h=100&fit=crop',
  },
  {
    id: 3,
    title: 'Unlimited Graphic Design for Ecommerce',
    category: 'Unlimited Graphic Design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    excerpt: 'Ecommerce brands don\'t fail because of bad products. They fail because of weak visuals. Every image matters. Every banner counts.',
    color: '#FF4D94',
    icon: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop',
  },
];

export default function DesignInsights() {
  return (
    <section id="insights" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A1A2E]">
            Design Insights & Inspiration
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Practical tips, trends, and strategies to elevate your brand and marketing efforts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <motion.article
              key={insight.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5E0D8] h-full flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div 
                    className="absolute inset-0"
                    style={{ 
                      background: `linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)`,
                    }}
                  />
                  
                  <motion.div
                    className="absolute top-4 left-4 w-14 h-14 rounded-2xl overflow-hidden shadow-lg border-2 border-white"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <img
                      src={insight.icon}
                      alt="Icon"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full opacity-20 blur-3xl"
                    style={{ background: insight.color }}
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

                <div className="p-6 flex-1 flex flex-col">
                  <span 
                    className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white mb-3 self-start"
                    style={{ background: insight.color }}
                  >
                    {insight.category}
                  </span>
                  
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-3 group-hover:text-[#7A1E2C] transition-colors">
                    {insight.title}
                  </h3>
                  
                  <p className="text-[#6B7280] mb-4 flex-1 leading-relaxed">
                    {insight.excerpt}
                  </p>

                  <motion.div
                    className="flex items-center gap-2 font-medium"
                    whileHover={{ x: 5 }}
                  >
                    <span style={{ color: insight.color }}>View all</span>
                    <svg 
                      className="w-4 h-4" 
                      style={{ color: insight.color }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
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
            View All Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
}
