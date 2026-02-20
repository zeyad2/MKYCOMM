'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';


export default function BrandStatementSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative bg-black py-20 px-6 md:px-[124px]">
      <div className="sm:w-[350px] md:w-auto md:max-w-[888px] mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-[24px] md:text-[64px] font-montserrat font-bold text-white leading-[1.3]"
        >
          We help brands grow and tell their stories{' '}
              <Image
                  src="/services-44.png"
                  alt="services-44"
                  width={124.8}
                  height={64}
                  priority
                  className="object-contain inline-block w-[49.189px] h-[25.225px] md:w-[124.8px] md:h-16"
                />
          &nbsp; to the World
        </motion.h2>
      </div>
    </section>
  );
}
