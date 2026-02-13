'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const pullOffStats = [
  { number: '15+', label: 'Countries', subtext: 'Serving Across 15 Countries' },
  { number: '70+', label: 'Brands', subtext: 'Crafted More Than 70 Brands' },
  { number: '100+', label: 'Million People', subtext: 'Reaching 100 Millions A Day' },
];

export default function JourneySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % pullOffStats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section ref={ref} className="relative bg-black py-14 md:py-20 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-0">
        {/* Our Journey */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
          {/* Left Column - Yellow Dot + Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-[411px] flex-shrink-0 lg:flex-grow"
          >
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 md:w-[33px] md:h-[32px] rounded-full bg-[#FFE70B] flex-shrink-0" />
              <h2 className="text-2xl md:text-[36px] font-bold text-white whitespace-nowrap leading-[105%]">
                Our Journey
              </h2>
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:w-[789px] flex-shrink-0"
          >
            <p className="text-sm md:text-[20px] text-white font-normal leading-[150%]">
              Born from a single conviction in 2018, MKYCOMM began as an answer
              to a market drowning in noise and starving for clarity. What
              started as a one-person pursuit quickly became a principle-led
              house, where strategy guides creativity, and cultural fluency
              shapes every message.
              <br />  <br /> 
              By January 1st, 2019, the agency took form: building systems,
              studying industries, shaping voices, and learning how brands truly
              grow. Today, MKYCOMM stands at the intersection of global logic and
              regional nuance, partnering with people and institutions across
              borders.
              <br /> <br />
              Our journey is not built on volume.
              <br />
              It&apos;s built on vision, discipline, and a commitment to creating
              work that lasts.
            </p>
          </motion.div>
        </div>

        {/* Our Pull Offs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="mt-24 md:mt-32"
        >
          <div className="flex flex-col gap-6 md:gap-12 pb-6 border-b border-[#696666]">
            {/* Top Row - "Our Pull Offs" label, right-aligned */}
            <div className="flex justify-end items-center gap-3">
              <div className="w-[32.97px] h-[32px] rounded-full bg-[#000FFF] flex-shrink-0" />
              <h2 className="text-xl md:text-[36px] font-[700] text-white whitespace-nowrap leading-[105%]">
                Our Pull Offs
              </h2>
            </div>

            {/* Bottom Row - Label/Subtext + Number */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
              {/* Left Side - Label + Subtext */}
              <div className="flex-1 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-2"
                  >
                    <div className="text-xl md:text-[32px] font-[500] text-white leading-[105%]">
                      {pullOffStats[activeIndex].label}
                    </div>
                    <div className="text-sm md:text-[20px] font-normal text-[#797979] leading-[150%]">
                      {pullOffStats[activeIndex].subtext}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Side - Number */}
              <div className="flex-1 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-6xl md:text-[96px] font-bold text-white leading-[105%] text-right"
                  >
                    {pullOffStats[activeIndex].number}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
