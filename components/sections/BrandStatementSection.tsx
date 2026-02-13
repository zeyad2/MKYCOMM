'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function BrandStatementSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative bg-black py-20 md:py-28 lg:py-36">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
        >
          We help brands grow and tell their stories{' '}
          <span className="inline-block" aria-label="globe">
            🌍
          </span>{' '}
          to the World
        </motion.h2>
      </div>
    </section>
  );
}
