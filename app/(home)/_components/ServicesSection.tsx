'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import ServiceCard from '@/components/ui/ServiceCard';

const services = [
  {
    title: 'Branding Development & Management',
    description:
      'We are the gurus of powerful brands! Your brand is an experience and our branding services go beyond aesthetics.',
    imageSrc: '/services-1.png',
    imageAlt: 'Branding Development',
  },
  {
    title: 'Integrated Marketing Communications & Management',
    description:
      'We are the leaders of communication! Your brand\'s success relies on an integrated communication strategy. We deliver full-scope plans, merging digital media, traditional advertising, and public relations to effectively tell your story and reach your target audience.',
    imageSrc: '/services-2.png',
    imageAlt: 'Marketing Communications',
  },
  {
    title: 'Reputation & Public Opinion Management',
    description:
      'We are the gurus of powerful brands! Your brand is an experience, not just aesthetics. We develop a brand identity that reflects your values, delivering the best experience for your audience. We craft your story, ensuring successful impact from initial development onward.',
    imageSrc: '/services-3.png',
    imageAlt: 'Reputation Management',
  },
  {
    title: 'Web Design & Development',
    description:
      'We are the architects of the site! We build  custom-coded websites that load fast, feel seamless, and move your brand forward. Designed with purpose, our sites are user-friendly, brand-aligned, and optimized for performance. Secure, scalable, and built to drive results.',
    imageSrc: '/services-4.png',
    imageAlt: 'Web Development',
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative bg-black py-14 lg:py-20">
      <div className=" mx-auto px-6 sm:px-8 md:px-12 lg:px-[120px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-3"
        >
          <div
            className="h-8 w-[33px] rounded-full"
            style={{ background: 'rgba(255, 231, 11, 1)' }}
          />
          <h2 className="font-montserrat text-[36px] font-[700] leading-[105%] tracking-[0%] text-white">
            Our Services
          </h2>
        </motion.div>

        {/* Service Cards */}
        <div className="flex flex-col gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            >
              <ServiceCard
                {...service}
                isLast={index === services.length - 1}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
