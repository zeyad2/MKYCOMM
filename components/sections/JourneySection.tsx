'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function JourneySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative bg-black py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Our Journey */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left Column - Yellow Dot + Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#F5C842] flex-shrink-0" />
              <h2 className="text-lg md:text-xl font-bold text-white whitespace-nowrap">
                Our Journey
              </h2>
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-9 space-y-4"
          >
            <p className="text-xs md:text-sm text-white/80 leading-relaxed">
              Born from a single conviction in 2018, MKYCOMM began as an answer
              to a market drowning in noise and starving for clarity. What
              started as a one-person pursuit quickly became a principle-led
              house, where strategy guides creativity, and cultural fluency
              shapes every message.
            </p>

            <p className="text-xs md:text-sm text-white/80 leading-relaxed">
              By January 1st, 2019, the agency took form: building systems,
              studying industries, shaping voices, and learning how brands truly
              grow. Today, MKYCOMM stands at the intersection of global logic and
              regional nuance, partnering with people and institutions across
              borders.
            </p>

            <p className="text-xs md:text-sm text-white/80 leading-relaxed">
              Our journey is not built on volume.
            </p>

            <p className="text-xs md:text-sm font-semibold text-white leading-relaxed">
              It&apos;s built on vision, discipline, and a commitment to creating
              work that lasts.
            </p>
          </motion.div>
        </div>

        {/* Our Pull Offs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24 md:mt-32"
        >
          <div className="flex items-end justify-between pb-5 border-b border-white/20">
            {/* Left Side - Countries */}
            <div>
              <div className="text-xs md:text-sm mb-1.5 font-bold">Countries</div>
              <div className="text-[10px] md:text-xs text-white/50">Serving Across 15 Countries</div>
            </div>

            {/* Right Side - Pull Offs + Number */}
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 flex-shrink-0" />
                <h2 className="text-lg md:text-xl font-bold text-white whitespace-nowrap">
                  Our Pull Offs

                </h2>
              </div>
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none">
                15+
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

