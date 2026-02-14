import Image from 'next/image';
import styles from './FooterSection.module.css';

const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'LinkedIn', href: '#' },
];

const locations = [
  { code: 'CAI', color: '#FFE70B' },
  { code: 'RYD', color: '#0000FF' },
  { code: 'LDN', color: '#FFE70B' },
  { code: 'NY', color: '#0000FF' },
];

export default function FooterSection() {
  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large watermark text - positioned at bottom, partially cut off */}
        <div className={styles.watermarkContainer}>
          <p
            className={styles.watermarkText}
            style={{
              fontFamily: 'var(--font-josefin), Josefin Sans, sans-serif',
            }}
          >
            MKYCOMM
          </p>
        </div>

        <div className={styles.artboardContainer}>
          <div className="rotate-[-3deg]">
            <Image
              src="/Artboard.png"
              alt=""
              width={231}
              height={144}
              className={styles.artboardImage}
            />
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        <div className="w-full max-w-[1152px] mx-auto flex flex-col gap-8 sm:gap-12 md:gap-14">
          {/* Top section: Logo+Description | Company+Social */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left: Logo & Description */}
            <div className="flex-1 flex flex-col gap-4 sm:gap-5">
              {/* Logo with dot */}
              <div className="flex gap-2 items-end">
                <p
                  className="font-bold text-white leading-none"
                  style={{
                    fontFamily: 'var(--font-josefin), Josefin Sans, sans-serif',
                    fontSize: 'clamp(32px, 4vw, 54.446px)',
                  }}
                >
                  MKY
                  <br />
                  COMM
                      <span
                  className="inline-block rounded-full shrink-0 mb-0.5"
                  style={{
                    backgroundColor: '#FFE70B',
                    width: 'clamp(8px, 0.8vw, 11.615px)',
                    height: 'clamp(8px, 0.8vw, 11.615px)',
                  }}
                />
                </p>
            
              </div>

              {/* Description */}
              <p
                className="text-[#797979] font-normal leading-[1.5] max-w-[466px]"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(12px, 1.4vw, 20px)',
                }}
              >
                MKYCOMM Where strategic brilliance meets creative force.
                Elevating brands with unmatched precision and insight.
              </p>
            </div>

            {/* Right: Company & Social links */}
            <div className="flex-1 flex flex-col gap-3 sm:gap-4">
              {/* Headers row */}
              <div className="flex gap-8 sm:gap-12 lg:gap-20 items-center w-full">
                <div className="flex-1">
                  <h4
                    className="text-white font-medium leading-[1.05]"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 'clamp(18px, 2.5vw, 36px)',
                    }}
                  >
                    Company
                  </h4>
                </div>
                <div className="flex-1 flex justify-end">
                  <h4
                    className="text-white font-medium leading-[1.05]"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 'clamp(18px, 2.5vw, 36px)',
                    }}
                  >
                    Social
                  </h4>
                </div>
              </div>

              {/* Links row */}
              <div className="flex gap-4 sm:gap-8 lg:gap-[55px] w-full items-start">
                {/* Company links - 2 column grid */}
                <div className="flex-1 grid grid-cols-2 gap-2 sm:gap-4 auto-rows-auto">
                  <p
                    className="text-white font-normal leading-[1.5]"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 'clamp(11px, 1.4vw, 20px)',
                    }}
                  >
                    MeetMKYCOMM
                  </p>
                  <p
                    className="text-white font-normal leading-[1.5]"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 'clamp(11px, 1.4vw, 20px)',
                    }}
                  >
                    Our Savvy
                  </p>
                  <p
                    className="text-white font-normal leading-[1.5]"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 'clamp(11px, 1.4vw, 20px)',
                    }}
                  >
                    Our Work
                  </p>
                  <p
                    className="text-white font-normal leading-[1.5]"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 'clamp(11px, 1.4vw, 20px)',
                    }}
                  >
                    Careers
                  </p>
                  <p
                    className="text-white font-normal leading-[1.5]"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 'clamp(11px, 1.4vw, 20px)',
                    }}
                  >
                    Let&apos;s Talk
                  </p>
                </div>

                {/* Social links */}
                <div className="flex flex-col gap-2 sm:gap-4 items-end min-w-[80px] sm:min-w-[100px]">
                  {socialLinks.map((link) => (
                    <p
                      key={link.label}
                      className="text-white font-normal leading-[1.5] w-full text-right"
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: 'clamp(11px, 1.4vw, 20px)',
                      }}
                    >
                      {link.label}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Location row */}
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 w-full items-start">
              <div className="flex-1">
                <h4
                  className="text-white font-medium leading-[1.05]"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 'clamp(18px, 2.5vw, 36px)',
                  }}
                >
                  We are Located At
                </h4>
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-4 items-center">
                {locations.map((loc) => (
                  <div key={loc.code} className="flex gap-2 items-center">
                    <div
                      className="rounded-full shrink-0"
                      style={{
                        backgroundColor: loc.color,
                        width: 'clamp(20px, 2.2vw, 32px)',
                        height: 'clamp(20px, 2.2vw, 32px)',
                      }}
                    />
                    <p
                      className="text-white font-normal leading-[1.5]"
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: 'clamp(11px, 1.4vw, 20px)',
                      }}
                    >
                      {loc.code}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Copyright section */}
            <div className="flex flex-col gap-3 sm:gap-4">
              {/* Divider line */}
              <div className="w-full border-t border-white/10" />

              {/* Policy row */}
              <div
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-white"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(10px, 1.4vw, 20px)',
                  fontWeight: 300,
                  opacity: 0.3,
                  lineHeight: 'normal',
                }}
              >
                <p>&copy; 2026 MKYCOMM. All right reserved</p>
                <p>Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
