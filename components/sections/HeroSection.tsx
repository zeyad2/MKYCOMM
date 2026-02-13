'use client';



import { motion } from 'framer-motion';
export default function HeroSection() {
  return (
    <section className="relative h-[756px] overflow-hidden bg-black">
      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-0 pt-[200px]">
        {/* Headline — constrained to ~808px, centered */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-[808px] mx-auto text-3xl md:text-4xl lg:text-[3.5rem] xl:text-[4rem] font-bold leading-[1.5] text-center"
        >
          <div className="mb-2">With amplification and</div>
          <div className="mb-2 flex items-center justify-center gap-4">
            <span>culture</span>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="inline-block w-[136px] h-[70px] md:w-[120px] md:h-[62px] lg:w-[136px] lg:h-[70px] object-cover"
              suppressHydrationWarning
            >
              <source src="/Home page video.mp4" type="video/mp4" />
            </video>
            <span className="relative inline-block">
              <span className="relative z-10">intelligence,</span>
              <span className="absolute bottom-1 left-0 right-0 h-2 md:h-3 -z-10" />
            </span>
          </div>
          <div>comes MKYCOMM.</div>
        </motion.h1>

        {/* Subheading — full container width */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-[60px] w-full max-w-[1200px] text-xl font-normal leading-[150%] text-white text-center self-stretch"
        >
          We are a dynamic and innovative marketing communications agency
          dedicated to crafting cutting-edge solutions for global brands. Aiming
          at making every client a market leader, with an indelible impact in the
          market.
        </motion.p>
      </div>
    </section>
  );
}
