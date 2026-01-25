'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative bg-black overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full h-screen relative overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/Group 246.png"
          className="w-full h-full object-cover"
          suppressHydrationWarning
        >
          <source src="/Home page video.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </section>
  );
}
