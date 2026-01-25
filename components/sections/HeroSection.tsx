'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-8"
        >
          <div className="mb-2">With amplification and</div>
          <div className="mb-2 flex items-center justify-center gap-4">
            <span>culture</span>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="inline-block w-24 h-16 md:w-32 md:h-20 lg:w-40 lg:h-24 object-cover rounded-lg"
              suppressHydrationWarning
            >
              <source src="/Home page video.mp4" type="video/mp4" />
            </video>
            <span className="relative inline-block">
              <span className="relative z-10">intelligence,</span>
              <span className="absolute bottom-1 left-0 right-0 h-2 md:h-3  -z-10" />
            </span>
          </div>
          <div>comes MKYCOMM.</div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm md:text-base lg:text-lg text-[#A3A3A3] max-w-6xl mx-auto leading-relaxed text-center"
        >
          We are a dynamic and innovative marketing communications agency
          dedicated to crafting cutting-edge solutions for global brands. Aiming
          at making every client a market leader, with an indelible impact in the
          market.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-white/50 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
