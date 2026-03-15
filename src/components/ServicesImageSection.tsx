'use client';

import { motion } from 'framer-motion';

export default function ServicesImageSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden shadow-lg border border-[#E5E0D8]"
        >
          <img
            src="https://assets.kiloapps.io/user_e4ceaa1b-2815-43be-b86f-9ec1dc576ef4/d90aa4c1-c544-481c-9ac4-0c948894625b/48afcaf8-bc1f-4cc5-b8f4-c06b0e0fa76a.png"
            alt="Design Process"
            className="w-full h-auto"
            style={{ maxHeight: '600px', objectFit: 'cover' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
