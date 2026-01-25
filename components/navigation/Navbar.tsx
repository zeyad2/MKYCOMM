'use client';

import { useState, useEffect } from 'react';
import Logo from '@/components/icons/Logo';
import MobileMenu from './MobileMenu';

const navItems = [
  { label: 'MeetMKYCOMM', href: '#meet' },
  { label: 'Our Work', href: '#work' },
  { label: 'Our Savvy', href: '#savvy' },
  { label: 'Careers', href: '#careers' },
  { label: 'Blogs', href: '#blogs' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // When scroll position is greater than viewport height - 200px, stick to top
      const scrollThreshold = window.innerHeight - 200;
      setIsAtTop(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Logo - Top Left */}
      <div className="fixed top-6 left-6 z-50">
        <a href="#" className="z-10">
          <Logo />
        </a>
      </div>

      {/* Navigation - Sticky Bottom to Top */}
      <nav
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
          isAtTop ? 'top-8' : 'bottom-8'
        }`}
      >
        <div
          className="hidden lg:flex items-center gap-8 backdrop-blur-md border border-white/10 rounded-full px-8 py-4 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          style={{ backgroundColor: '#6966664D' }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white backdrop-blur-md border border-white/10 rounded-full p-4 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          style={{ backgroundColor: '#6966664D' }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
      />
    </>
  );
}
