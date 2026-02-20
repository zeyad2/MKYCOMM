'use client';

import { useRef, useCallback, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const CARD_WIDTH = 346;
  const GAP = 32;
  const CARD_WITH_GAP = CARD_WIDTH + GAP;
  const CARDS_PER_VIEW = 2; // Scroll by 2 cards at a time

  // Update scroll button states
  const updateScrollState = useCallback(() => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px threshold
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    updateScrollState();
    scrollContainer.addEventListener('scroll', updateScrollState);
    window.addEventListener('resize', updateScrollState);

    return () => {
      scrollContainer.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const currentScroll = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;

    let scrollAmount: number;

    if (direction === 'right') {
      // Calculate scroll to show next 2 cards
      scrollAmount = CARDS_PER_VIEW * CARD_WITH_GAP;

      // On last slide, scroll to end (showing only full cards)
      const newScroll = currentScroll + scrollAmount;
      if (newScroll >= maxScroll - CARD_WIDTH / 2) {
        scrollAmount = maxScroll - currentScroll;
      }

      setCurrentIndex(prev => Math.min(prev + CARDS_PER_VIEW, posts.length - 1));
    } else {
      // Scroll left by 2 cards
      scrollAmount = CARDS_PER_VIEW * CARD_WITH_GAP;
      setCurrentIndex(prev => Math.max(prev - CARDS_PER_VIEW, 0));
    }

    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  }, [posts.length]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-black overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start pl-6 md:pl-[120px] gap-8">
          {/* Left column: header + nav arrows */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start gap-3 pb-6 w-[275px] min-w-[275px] shrink-0 self-stretch"
          >
            {/* Section label */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#FFE70B]" />
                <h2 className="text-4xl font-bold text-white leading-[105%] font-montserrat">
                  Blogs
                </h2>
              </div>
              <p className="text-xl text-[#797979] leading-[105%] font-montserrat">
                You may also be interested in these Blogs
              </p>
            </div>

            {/* Navigation arrows - positioned at bottom */}
            <div className="flex items-end gap-9 flex-1 px-0.5">
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                aria-label="Scroll blogs left"
                className={`transition-all duration-300 ${
                  canScrollLeft
                    ? 'opacity-100 hover:opacity-70 cursor-pointer'
                    : 'opacity-30 cursor-not-allowed'
                }`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M19 12H5M5 12L12 19M5 12L12 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                aria-label="Scroll blogs right"
                className={`transition-all duration-300 ${
                  canScrollRight
                    ? 'opacity-100 hover:opacity-70 cursor-pointer'
                    : 'opacity-30 cursor-not-allowed'
                }`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
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
            className="relative h-[511px] w-full lg:max-w-[1006px] overflow-hidden"
          >
            <div
              ref={scrollRef}
              className="flex gap-8 overflow-x-scroll scrollbar-hide h-full items-start"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {posts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <BlogCard
                    tag={post.tag}
                    title={post.title}
                    date={post.date}
                    description={post.description}
                    href={post.href}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
