'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/components/icons/Logo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: Array<{ label: string; href: string }>;
}

const locations = [
  { code: 'CAI', color: '#F5C842' }, // Yellow
  { code: 'RYD', color: '#000FFF' }, // Blue
  { code: 'LDN', color: '#F5C842' }, // Yellow
  { code: 'NY', color: '#000FFF' },  // Blue
];

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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />

          {/* Menu Panel - Matches Figma exactly */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[300px] bg-black shadow-[-30px_0px_70px_#0F0F0F] z-[110] p-6 flex flex-col gap-6"
          >
            {/* Top: Close button + Logo */}
            <div className="flex items-center gap-2.5">
              <div className="flex-1 flex items-start">
                <button
                  onClick={onClose}
                  className="text-white"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-[21.44px] h-[19.653px]"
                    viewBox="0 0 22 21"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.68}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1 1L21 20" />
                    <path d="M21 1L1 20" />
                  </svg>
                </button>
              </div>
              <Logo small />
            </div>

            {/* Content area with flex-1 to take remaining space */}
            <div className="flex flex-col flex-1 gap-12 min-h-0">
              {/* Nav Items - 16px Montserrat Regular with 12px gap */}
              <nav className="flex flex-col gap-3">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="font-montserrat font-normal text-base leading-[1.5] text-white/80 hover:text-white/80 transition-colors"
                    onClick={onClose}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              {/* Bottom section - pushed to bottom with gap-12 */}
              <div className="mt-auto flex flex-col gap-12">
                {/* Location Indicators */}
                <div className="flex flex-col gap-3">
                  <p className="font-montserrat font-medium text-base leading-[1.05] text-white">
                    We are Located At
                  </p>
                  <div className="flex gap-3">
                    {locations.map((location) => (
                      <div key={location.code} className="flex items-center gap-2">
                        <div
                          className="w-3.5 h-3.5 rounded-full"
                          style={{ backgroundColor: location.color }}
                        />
                        <p className="font-montserrat font-normal text-xs leading-[1.5] text-white">
                          {location.code}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Info */}
                <div className="flex flex-col gap-2 font-montserrat font-thin text-xs leading-normal text-white/60">
                  <p>© 2026 MKYCOMM. All right reserved</p>
                  <p>Privacy Policy</p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
