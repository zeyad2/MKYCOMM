'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Hero Content Container - accounts for header height + gap */}
      <div className="flex flex-col items-center px-6 lg:px-[120px] pt-[180px] relative">
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
