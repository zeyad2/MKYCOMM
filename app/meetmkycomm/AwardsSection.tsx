'use client';

import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

const logos = [
  { src: '/logos-slider/imgi_33_Ad Awards-D3Q1Nid4 2.png',            alt: 'Ad World Masters',          dw: 102, dh: 60, mw: 46, mh: 27 },
  { src: '/logos-slider/imgi_34_designrush-new-logo 2-CiLeE4m_.png',  alt: 'DesignRush',                dw: 152, dh: 38, mw: 69, mh: 17 },
  { src: '/logos-slider/Frame 1000001790 1.png',                       alt: 'TIA MKY Communications',    dw: 90,  dh: 60, mw: 40, mh: 27 },
  { src: '/logos-slider/imgi_37_African Excellence-DXn59QDu (1).png', alt: 'African Excellence Awards', dw: 110, dh: 60, mw: 50, mh: 27 },
  { src: '/logos-slider/imgi_32_global-brands-BwttwYFV (1).png',      alt: 'Global Brands',             dw: 160, dh: 36, mw: 72, mh: 16 },
];

// Triplicate so the loop always has enough slides to fill the viewport
const loopedLogos = [...logos, ...logos, ...logos];

export default function AwardsSection() {
  const [desktopRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: 'start', watchDrag: false },
    [AutoScroll({ speed: 4, stopOnInteraction: false, stopOnMouseEnter: false, stopOnFocusIn: false })]
  );

  const [mobileRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: 'start', watchDrag: false },
    [AutoScroll({ speed: 2, stopOnInteraction: false, stopOnMouseEnter: false, stopOnFocusIn: false })]
  );

  return (
    <section className="bg-black overflow-hidden">

      {/* ── Desktop (lg+) ── */}
      <div className="hidden lg:block">
        <div className="mx-auto px-[120px] max-w-[1440px] pt-[56px]">

          {/* Yellow dot + heading */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-[33px] h-[32px] rounded-full bg-[#F5C842] flex-shrink-0" />
            <span className="font-montserrat font-bold text-[32px] leading-[1.19] text-white">
              Awards
            </span>
          </div>

          {/* Description */}
          <p className="font-montserrat font-normal text-[15px] leading-[2] text-[#A3A3A3]">
            Meet the heartbeat of each step along the way! A family of diverse talents and
            storytellers. Bounded with passion and love, breathing life into narratives.
          </p>
        </div>

        {/* Logo strip — full bleed, 99px tall */}
        <div className="mt-8" style={{ height: 99 }}>
          <div ref={desktopRef} className="overflow-hidden h-full">
            <div className="flex h-full">
              {loopedLogos.map((logo, i) => (
                <div
                  key={i}
                  className="flex-none flex items-center justify-center mx-10"
                  style={{ height: 99 }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.dw}
                    height={logo.dh}
                    className="object-contain"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pb-[56px]" />
      </div>

      {/* ── Mobile (< lg) ── */}
      <div className="lg:hidden">
        <div className="px-6 pt-6">

          {/* Yellow dot + heading */}
          <div className="flex items-center gap-[6px] mb-4">
            <span className="w-[10px] h-[10px] rounded-full bg-[#F5C842] flex-shrink-0" />
            <span className="font-montserrat font-bold text-[16px] leading-[1.19] text-white">
              Awards
            </span>
          </div>

          {/* Description */}
          <p className="font-montserrat font-normal text-[12px] leading-[1.75] text-[#A3A3A3]">
            Meet the heartbeat of each step along the way! A family of diverse talents and
            storytellers. Bounded with passion and love, breathing life into narratives.
          </p>
        </div>

        {/* Logo strip — full bleed, 27px tall */}
        <div className="mt-4" style={{ height: 27 }}>
          <div ref={mobileRef} className="overflow-hidden h-full">
            <div className="flex h-full">
              {loopedLogos.map((logo, i) => (
                <div
                  key={i}
                  className="flex-none flex items-center justify-center mx-5"
                  style={{ height: 27 }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.mw}
                    height={logo.mh}
                    className="object-contain"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pb-6" />
      </div>

    </section>
  );
}
