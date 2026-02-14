'use client';

import Image from 'next/image';
import { useState } from 'react';

interface WorkCardProps {
  imageSrc: string;
  logoSrc?: string;
  imageAlt: string;
  year: string;
  location: string;
  title: string;
}

export default function WorkCard({
  imageSrc,
  logoSrc,
  imageAlt,
  year,
  location,
  title,
}: WorkCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Image Container */}
      <div
        className="relative w-full aspect-[400/300] rounded-lg lg:rounded-2xl overflow-hidden group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Image */}
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
        />

        {/* Logo Overlay (always visible) */}


        {/* Dark Overlay on Hover - Completely dark */}
        <div
          className="absolute inset-0 bg-black z-20 transition-opacity duration-[4600ms] ease-in-out"
          style={{
            opacity: isHovered ? 1 : 0,
            pointerEvents: 'none' // Ensures the overlay doesn't block the hover trigger
          }}
        />
        {/* Circular View Button on Hover */}
        <div
          className={`absolute inset-0 flex items-center justify-center z-30 ${isHovered ? 'opacity-100 ' : 'opacity-0 '
            }`}

        >
          <button className="w-7 h-7 bg-[#000FFF] text-white font-montserrat text-[10px] rounded-full flex items-center justify-center">
            View
          </button>
        </div>
      </div>

      {/* Metadata */}
      <div className="flex flex-col gap-1">
        {/* Year & Location */}
        <div className="flex gap-1 items-center">
          <p className="font-montserrat font-normal text-[10px] lg:text-base text-[#797979] leading-[1.05]">
            {year}
          </p>
          <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full bg-[#797979]" />
          <p className="font-montserrat font-normal text-[10px] lg:text-base text-[#797979] leading-[1.05]">
            {location}
          </p>
        </div>

        {/* Project Title */}
        <p className="font-montserrat font-medium text-[16px] lg:text-xl text-white leading-[1.05]">
          {title}
        </p>
      </div>
    </div>
  );
}
