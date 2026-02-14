'use client';

import { useState } from 'react';
import Logo from '@/components/icons/Logo';
import MobileMenu from './MobileMenu';

const navItems = [
  { label: 'MeetMKYCOMM', href: '#meet' },
  { label: 'Our Work', href: '#work' },
  { label: 'Our Savvy', href: '#savvy' },
  { label: 'Careers', href: '#careers' },
  { label: 'Blogs', href: '#blogs' },
  { label: "Let's Talk", href: '#letstalk' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Unified Header - responsive layout */}
      <header className="absolute top-0 left-0 right-0 z-50">
        {/* Mobile Header - visible below 1024px */}
        <div className="block lg:hidden bg-black p-6">
          <div className="flex items-center justify-between">
            <a href="#" className="flex gap-[5.12px] items-end py-[10.24px] w-20">
              <Logo small />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              className="text-white p-2 -m-2"
            >
              <svg
                className="w-6 h-[18.695px]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Header - visible at 1024px and above */}
        <div className="hidden lg:block bg-transparent">
          <div className="flex flex-col items-center justify-center px-[120px] py-[10px]">
            <div className="w-full flex flex-col items-start">
              <a href="#" className="inline-flex py-[16px]">
                <Logo />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Desktop Navigation - fixed just below hero text, stays as you scroll */}
      <nav className="hidden lg:flex fixed top-[680px] left-1/2 -translate-x-1/2 z-30">
        <div className="flex items-center rounded-[71px] px-6 h-[52px] bg-nav-bg backdrop-blur-sm">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group flex items-center justify-center gap-2 px-5 py-4 text-base font-medium leading-5 text-white/40 text-center whitespace-nowrap hover:text-white hover:-translate-y-[1px] transition-all duration-200"
            >
              <span className="w-[5px] h-[5px] rounded-full bg-current opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200" />
              {item.label}
            </a>
          ))}
        </div>
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
