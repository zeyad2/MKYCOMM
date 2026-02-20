'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

const STATS = [
  {
    number: '15+',
    label: 'Countries',
    description: 'Serving Across 15 Countries',
  },
  {
    number: '70+',
    label: 'Brands',
    description: 'Crafted more than 70 brands',
  },
  {
    number: '100+',
    label: 'Million People',
    description: 'Reaching 100 millions a day',
  },
];

const BLUE_DOT_ICON = "https://www.figma.com/api/mcp/asset/b63465f7-7acb-4132-874b-838c2b194bc3";

// Animation timing controls
const CYCLE_INTERVAL = 1000;  // How long each stat displays (in milliseconds)
const FADE_DURATION = .2;     // How fast the fade animation is (in seconds)

export default function OurPulloffsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cycle through stats
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % STATS.length);
    }, CYCLE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const currentStat = STATS[currentIndex];

  return (
    <section ref={ref} className="relative bg-black">
      {/* Desktop: 1440px with 120px padding = 1200px content width */}
      {/* Mobile: 390px with 24px padding = 342px content width */}
      <div className="w-full px-6 md:px-[120px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="w-full md:max-w-[1200px] md:mx-auto"
        >
          <div className="border-b border-[#696666] pb-6">
            {/* Title: Our Pull Offs - Top Right */}
            <div className="flex items-center justify-end gap-3 mb-6 md:mb-12">
              {/* Blue Dot Icon - 10px mobile, 32px desktop */}
              <div className="relative w-[10px] h-[10px] md:w-8 md:h-8 flex-shrink-0">
                <Image
                  src={BLUE_DOT_ICON}
                  alt=""
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              {/* Title - 16px mobile, 36px desktop */}
              <h2 className="font-montserrat font-bold text-white text-base md:text-[36px] leading-[1.05]">
                Our Pull Offs
              </h2>
            </div>

            {/* Content Row - 32px gap */}
            <div className="flex items-center justify-center gap-8">
              {/* Left Side - Label and Description */}
              <div className="flex-1 flex flex-col gap-2">
                {/* Label - 14px mobile, 32px desktop */}
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`label-${currentIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: FADE_DURATION }}
                    className="font-montserrat font-medium text-white text-sm md:text-[32px] leading-[1.05]"
                  >
                    {currentStat.label}
                  </motion.p>
                </AnimatePresence>
                {/* Description - 10px mobile, 20px desktop */}
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`desc-${currentIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: FADE_DURATION }}
                    className="font-montserrat font-normal text-[#797979] text-[10px] md:text-[20px] leading-[1.5]"
                  >
                    {currentStat.description}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Right Side - Number - 48px mobile, 96px desktop */}
              <div className="flex-1 flex flex-col items-end">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`number-${currentIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: FADE_DURATION }}
                    className="font-montserrat font-bold text-white text-[48px] md:text-[96px] leading-[1.05] text-right"
                  >
                    {currentStat.number}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
