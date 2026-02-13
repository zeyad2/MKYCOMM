'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionLabel from '@/components/ui/SectionLabel';
import WorkCard from '@/components/ui/WorkCard';

const projects = [
  {
    imageSrc: '/work-1.png',
    imageAlt: 'Luxury branding project',
    categories: ['branding', 'luxury'],
  },
  {
    imageSrc: '/work-2.png',
    imageAlt: 'Architecture project',
    categories: ['branding'],
  },
  {
    imageSrc: '/work-3.png',
    imageAlt: 'Urban photography',
    categories: ['branding', 'social media'],
  },
  {
    imageSrc: '/work-4.png',
    imageAlt: 'Interior design',
    categories: ['branding'],
  },
  {
    imageSrc: '/work-5.png',
    imageAlt: 'Product showcase',
    categories: ['branding', 'luxury'],
  },
  {
    imageSrc: '/work-6.png',
    imageAlt: 'Architectural interior',
    categories: ['branding'],
  },
];

export default function WorkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative bg-black py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <SectionLabel>Our Work</SectionLabel>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.imageSrc}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            >
              <WorkCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
