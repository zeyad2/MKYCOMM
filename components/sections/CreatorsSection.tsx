'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function CreatorsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative py-14 px-6 lg:px-[120px] bg-black overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-12 items-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex gap-4 md:gap-8 items-start w-full"
        >
          <div className="relative w-12 h-16 md:w-16 md:h-20 flex-shrink-0">
            <Image
              src="/mkycreators.png"
              alt="MKY Creators Icon"
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-[1.05] text-white font-[family-name:var(--font-sans)]">
            MKY Creators
          </h2>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-[1200px]"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/creators-background.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>

            {/* Overlay with blend mode */}
            <div className="absolute inset-0 opacity-20 mix-blend-plus-lighter overflow-hidden">
              <img
                src="/creators-overlay.png"
                alt=""
                className="absolute max-w-none"
                style={{
                  left: '-16.57%',
                  top: '-15.07%',
                  width: '77.99%',
                  height: '137.82%',
                }}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 md:p-10 lg:p-12">
              <div className="flex flex-col gap-12 md:gap-16 lg:gap-[72px]">
                {/* Text Content */}
                <div className="flex flex-col gap-8 text-white">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-[48px] md:text-[64px] lg:text-[80px] leading-none font-[family-name:var(--font-coolvetica)]"
                  >
                    Welcome to
                    <br />
                    MKY Creators
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-base md:text-lg lg:text-[20px] leading-[1.5] w-full max-w-[598px] font-[family-name:var(--font-poppins)]"
                  >
                    MKY Creators connects content creators with top brands looking for authentic partnerships.
                  </motion.p>
                </div>

                {/* Interactive Section */}
                <div className="flex flex-col gap-8">
                  {/* "If you are" Label */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex gap-2 md:gap-3 items-center"
                  >
                    <div className="relative w-5 h-8 md:w-7 md:h-10 flex-shrink-0  scale-y-[-1]">
                      <Image
                        src="/mkycreators-2.svg"
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-[40px] md:text-[52px] lg:text-[64px] leading-[1.05] text-white italic font-[family-name:var(--font-coolvetica)]">
                      If you are
                    </p>
                  </motion.div>

                  {/* Options Row */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="flex flex-col lg:flex-row gap-6 lg:gap-3 items-start lg:items-center lg:justify-between w-full"
                  >
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 lg:gap-[149px] items-start sm:items-center">
                      {/* Content Creator */}
                      <div className="flex flex-col items-start sm:items-center justify-center">
                        <p className="text-[24px] md:text-[28px] lg:text-[32px] leading-[1.2] md:leading-[30px] text-white capitalize italic font-[family-name:var(--font-coolvetica)]">
                          Content
                          <br />
                          Creator
                        </p>
                      </div>

                      {/* Looking for a Content creator */}
                      <div className="flex flex-col items-start sm:items-center justify-center">
                        <p className="text-[24px] md:text-[28px] lg:text-[32px] leading-[1.2] md:leading-[30px] text-white capitalize italic font-[family-name:var(--font-coolvetica)]">
                          Looking for a
                          <br />
                          Content creator
                        </p>
                      </div>
                    </div>

                    {/* Back to Creators Button */}
                    <div className="flex items-end justify-end lg:flex-1 w-full lg:w-auto">
                      <button className="bg-[#000fff] hover:bg-[#000dd8] transition-colors px-6 md:px-8 py-3 md:py-4 rounded-full w-full sm:w-auto">
                        <span className="text-white font-bold text-sm md:text-base tracking-[-0.25px] font-[family-name:var(--font-sans)]">
                         Explore Creators
                        </span>
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
