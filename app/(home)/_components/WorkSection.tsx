'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import WorkCard from '@/components/ui/WorkCard';

const projects = {
  column1: [
    {
      imageSrc: '/work-1.png',
      imageAlt: 'WeComm - Building commercial communities',
      year: '2024',
      location: 'India',
      title: 'WeComm',
    },
    {
      imageSrc: '/work-6.png',
      imageAlt: 'Mono&Co - Cairo',
      year: '2024',
      location: 'India',
      title: 'Mono&Co',
    },
  ],
  column2: [
    {
      imageSrc: '/work-22.png',
      imageAlt: 'Naturals - Organic care brand',
      year: '2024',
      location: 'India',
      title: 'Naturals',
    },
    {
      imageSrc: '/work-5.png',
      imageAlt: 'Microcare',
      year: '2024',
      location: 'India',
      title: 'Microcare',
    },
  ],
  column3: [
    {
      imageSrc: '/work-1.png',
      imageAlt: 'WeComm - Building commercial communities',
      year: '2024',
      location: 'India',
      title: 'WeComm',
    },
    {
      imageSrc: '/work-6.png',
      imageAlt: 'Mono&Co - Cairo',
      year: '2024',
      location: 'India',
      title: 'Mono&Co',
    },
  ],
};

export default function WorkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative bg-black py-8 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 xl:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6 lg:mb-8"
        >
          <div className="flex gap-1 lg:gap-3 items-center">
            <div className="w-[10px] h-[10px] lg:w-8 lg:h-8 rounded-full bg-[#000FFF] flex items-center justify-center flex-shrink-0" />
            <h2 className="font-montserrat font-bold text-[18px] lg:text-4xl text-white leading-[1.05]">
              Our Work
            </h2>
          </div>
        </motion.div>

        {/* Portfolio Masonry Grid */}
        <div className="flex gap-4 lg:gap-6 items-start">
          {/* Column 1 */}
          <div className="flex-1 flex flex-col gap-4 lg:gap-8">
            {projects.column1.map((project, index) => (
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

          {/* Column 2 - Offset */}
          <div className="flex-1 flex flex-col gap-4 lg:gap-8 pt-14 lg:pt-20">
            {projects.column2.map((project, index) => (
              <motion.div
                key={project.imageSrc}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * (index + 3) }}
              >
                <WorkCard {...project} />
              </motion.div>
            ))}
          </div>

          {/* Column 3 - Hidden on mobile */}
          <div className="hidden lg:flex flex-1 flex-col gap-8">
            {projects.column3.map((project, index) => (
              <motion.div
                key={project.imageSrc}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * (index + 5) }}
              >
                <WorkCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
