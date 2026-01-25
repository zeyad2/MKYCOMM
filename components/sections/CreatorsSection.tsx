'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';

export default function CreatorsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-32 px-6 bg-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center gap-4"
        >
          <SectionLabel>MKY Creators</SectionLabel>
          <div className="flex items-center gap-2 text-sm font-bold text-white">
            <span className="text-2xl">⚡</span>
            <span>MKY</span>
          </div>
        </motion.div>

        {/* Main Gradient Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6]" />

            {/* Content */}
            <div className="relative z-10 p-8 md:p-12 lg:p-16">
              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              >
                Welcome to
                <br />
                MKY Creators
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl"
              >
                MKY Creators connects content creators with top brands looking
                for authentic partnerships.
              </motion.p>

              {/* Interactive Options Label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-4"
              >
                <p className="text-white/80 text-sm font-medium">If you are</p>
              </motion.div>

              {/* Button Group */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="flex-1 sm:flex-none"
                >
                  Content Creator
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 sm:flex-none"
                >
                  Looking for a Content creator
                </Button>
              </motion.div>

              {/* Explore Link */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <a
                  href="#explore"
                  className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors group"
                >
                  <span className="font-medium">Explore Creators</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-0" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl -z-0" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
