'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/components/icons/Logo';
import LocationIndicators from '@/components/ui/LocationIndicators';
import FooterInfo from '@/components/ui/FooterInfo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: Array<{ label: string; href: string }>;
}

export default function MobileMenu({
  isOpen,
  onClose,
  navItems,
}: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55]"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[300px] bg-black shadow-[-30px_0px_70px_#0F0F0F] z-[60] p-6 flex flex-col gap-6"
          >
            {/* Top: Close button + Logo */}
            <div className="flex items-center justify-between">
              <button
                onClick={onClose}
                className="text-white"
                aria-label="Close menu"
              >
                <svg
                  className="w-[21px] h-[20px]"
                  viewBox="0 0 21 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.68}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 1L20 19" />
                  <path d="M20 1L1 19" />
                </svg>
              </button>
              <Logo small />
            </div>

            {/* Content area */}
            <div className="flex flex-col flex-1 gap-12">
              {/* Nav Items */}
              <nav className="flex flex-col gap-3">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="text-base font-normal leading-[150%] text-white hover:text-white/80 transition-colors"
                    onClick={onClose}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              {/* Bottom section - pushed to bottom */}
              <div className="mt-auto flex flex-col gap-12">
                <LocationIndicators />
                <FooterInfo />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
