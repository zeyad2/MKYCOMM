'use client';

import { useRef, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import BlogCard from '@/components/ui/BlogCard';

interface BlogPost {
  tag: string;
  title: string;
  date: string;
  description: string;
  href?: string;
}

interface BlogsSliderSectionProps {
  posts?: BlogPost[];
}

const defaultPosts: BlogPost[] = [
  {
    tag: 'Last week',
    title: 'Top Marketing Trends for 2024',
    date: 'September 8, 2024',
    description:
      'Stay ahead of the curve with our roundup of the most impactful marketing trends to watch this year.',
    href: '#',
  },
  {
    tag: 'Last week',
    title: 'Top Marketing Trends for 2024',
    date: 'September 8, 2024',
    description:
      'Stay ahead of the curve with our roundup of the most impactful marketing trends to watch this year.',
    href: '#',
  },
  {
    tag: 'Last week',
    title: 'Top Marketing Trends for 2024',
    date: 'September 8, 2024',
    description:
      'Stay ahead of the curve with our roundup of the most impactful marketing trends to watch this year.',
    href: '#',
  },
  {
    tag: 'Last week',
    title: 'Top Marketing Trends for 2024',
    date: 'September 8, 2024',
    description:
      'Stay ahead of the curve with our roundup of the most impactful marketing trends to watch this year.',
    href: '#',
  },
  {
    tag: 'Last week',
    title: 'Top Marketing Trends for 2024',
    date: 'September 8, 2024',
    description:
      'Stay ahead of the curve with our roundup of the most impactful marketing trends to watch this year.',
    href: '#',
  },
  {
    tag: 'Last week',
    title: 'Top Marketing Trends for 2024',
    date: 'September 8, 2024',
    description:
      'Stay ahead of the curve with our roundup of the most impactful marketing trends to watch this year.',
    href: '#',
  },
];

export default function BlogsSliderSection({
  posts = defaultPosts,
}: BlogsSliderSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 410; // card width + gap
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-black overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row items-start pl-6 md:pl-[120px] gap-8">
        {/* Left column: header + nav arrows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-4 w-[275px] min-w-[275px] shrink-0"
        >
          {/* Section label */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#FFE70B]" />
              <h2 className="text-4xl font-bold text-white leading-[105%]">
                Blogs
              </h2>
            </div>
            <p className="text-xl text-[#797979] leading-[105%]">
              You may also be interested in these Blogs
            </p>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-end gap-9 mt-auto pt-48 lg:pt-64">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll blogs left"
              className="p-3 group"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-[#262626] group-hover:text-white transition-colors"
              >
                <path
                  d="M19 12H5M5 12L12 19M5 12L12 5"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll blogs right"
              className="p-3 group"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white group-hover:text-[#797979] transition-colors"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Scrollable cards container */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex-1 overflow-hidden min-w-0"
        >
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide pr-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {posts.map((post, index) => (
              <BlogCard
                key={index}
                tag={post.tag}
                title={post.title}
                date={post.date}
                description={post.description}
                href={post.href}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
