'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionLabel from '@/components/ui/SectionLabel';
import ServiceCard from '@/components/ui/ServiceCard';

const services = [
  {
    title: 'Marketing Development & Management',
    description:
      'Strategic brand development and positioning to create distinctive market presence and drive sustainable growth.',
    imageSrc: '/services-1.jpg',
    imageAlt: 'Marketing and branding visualization',
  },
  {
    title: 'Integrated Marketing Communications & Management',
    description:
      'Data-driven marketing strategies and impactful communications that resonate with your target audience.',
    imageSrc: '/services-2.jpg',
    imageAlt: 'Marketing communications',
  },
  {
    title: 'Reputation & Public Opinion Management',
    description:
      'Proactive reputation strategies and public narrative shaping to build trust and credibility.',
    imageSrc: '/services-3.jpg',
    imageAlt: 'Reputation management',
  },
  {
    title: 'Web Design & Development',
    description:
      'Modern, responsive websites with seamless user experiences and ongoing technical support.',
    imageSrc: '/services-4.jpg',
    imageAlt: 'Web development',
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative bg-black py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <SectionLabel>Our Services</SectionLabel>
        </motion.div>

        {/* Service Cards */}
        <div>
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
