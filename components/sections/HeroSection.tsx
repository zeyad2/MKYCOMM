'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black">
   
      {/* Mobile Hero - Matches Figma mobile design */}
      <div className="lg:hidden flex flex-col items-center px-5 py-[257px] relative z-10">
        <div className="flex flex-col gap-4 items-center relative w-full">
          {/* Mobile Headline Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full flex justify-center"
          >
            <div className="relative h-[100.535px] w-[304px]">
              {/* Video positioned in text */}
              <div className="absolute right-[161.76px] top-[37.45px] w-[51.194px] h-[26.35px]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  suppressHydrationWarning
                >
                  <source src="/Home page video.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Mobile Title - 26px */}
              <h1 className="absolute left-1/2 top-[-7.69px] -translate-x-1/2 font-montserrat font-bold text-[26px] leading-[1.51] text-center text-white w-[333px] whitespace-pre-wrap">
                {`With amplification and           culture        intelligence, comes MKYCOMM.`}
              </h1>
            </div>
          </motion.div>

          {/* Mobile Subheading - 12px */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-montserrat font-normal text-[12px] leading-[1.5] text-center text-white w-full whitespace-pre-wrap"
          >
            We are a dynamic and innovative marketing communications agency dedicated to crafting cutting-edge solutions for global brands. Aiming at making every client a market leader, with an indelible impact in the market.
          </motion.p>
        </div>
      </div>

      {/* Desktop Hero - Original design */}
      <div className="hidden lg:flex flex-col items-center px-[120px] pt-[180px] relative z-10">
        <div className="flex flex-col gap-[60px] items-center pb-[144px] relative w-full max-w-[1200px]">
          {/* Headline Container - matches Figma layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full flex justify-center"
          >
            <div className="relative h-[292px] w-[808px]">
              {/* Video positioned absolutely as in Figma */}
              <div className="absolute right-[434px] top-[93.29px] w-[136px] h-[70px]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  suppressHydrationWarning
                >
                  <source src="/Home page video.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Title with exact Figma specs */}
              <h1 className="absolute left-1/2 top-[-34.71px] -translate-x-1/2 font-montserrat font-bold text-[72px] leading-[1.51] text-center text-white w-[1095px] whitespace-pre-wrap">
                {`With amplification and           culture        intelligence, comes MKYCOMM.`}
              </h1>
            </div>
          </motion.div>

          {/* Subheading - full width as in Figma */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-montserrat font-normal text-[20px] leading-[1.5]  text-center text-white/80 w-full whitespace-pre-wrap"
          >
            We are a dynamic and innovative marketing communications agency dedicated to crafting cutting-edge solutions for global brands. Aiming at making every client a market leader, with an indelible impact in the market.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
