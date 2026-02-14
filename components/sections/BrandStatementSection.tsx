'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';


export default function BrandStatementSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative bg-black py-20 md:px-[124px] ">
      <div className="w-[888px] h-[249px] mx-auto sm:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-[64px]  font-bold text-white leading-[1.3] w-[888px] mx-auto"
        >
          We help brands grow and tell their stories{' '}
              <Image
                  src="/services-44.png"
                  alt="services-44"
                  width={124.8}
                  height={64}
                  priority
                  className="object-contain inline-block"
                />
          &nbsp; to the World
        </motion.h2>
      </div>
    </section>
  );
}
