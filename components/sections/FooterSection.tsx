import Image from 'next/image';
import Logo from '@/components/icons/Logo';

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
    <footer className="bg-black pt-24 pb-0 overflow-hidden">
      <div className="mx-auto max-w-[1152px] px-6 lg:px-0 flex flex-col gap-14">
        {/* Top row: Logo+Desc | Company+Social */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Logo & Description */}
          <div className="flex-1 flex flex-col gap-5">
            <Logo width={200} height={108} dotSize={12} dotColor="#FFE70B" />
            <p className="text-xl font-normal leading-[150%] text-[#797979] max-w-[467px]">
              MKYCOMM Where strategic brilliance meets creative force. Elevating
              brands with unmatched precision and insight.
            </p>
          </div>

          {/* Right: Company & Social links */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Headers row */}
            <div className="w-full flex items-center">
              <div className="flex-1">
                <h4 className="text-[36px] font-medium leading-[105%] text-white">
                  Company
                </h4>
              </div>
              <div className="flex justify-end">
                <h4 className="text-[36px] font-medium leading-[105%] text-white">
                  Social
                </h4>
              </div>
            </div>

            {/* Links row */}
            <div className="w-full flex gap-[55px]">
              {/* Company links */}
              <div className="flex-1 flex flex-col gap-4">
                <a
                  href="#"
                  className="text-xl font-normal leading-[150%] text-white hover:text-white/80 transition-colors"
                >
                  MeetMKYCOMM
                </a>
                <div className="grid grid-cols-2 gap-x-[67px] gap-y-4">
                  <a
                    href="#"
                    className="text-xl font-normal leading-[150%] text-white hover:text-white/80 transition-colors"
                  >
                    Our Work
                  </a>
                  <a
                    href="#"
                    className="text-xl font-normal leading-[150%] text-white hover:text-white/80 transition-colors"
                  >
                    Our Savvy
                  </a>
                  <a
                    href="#"
                    className="text-xl font-normal leading-[150%] text-white hover:text-white/80 transition-colors"
                  >
                    Let&apos;s Talk
                  </a>
                  <a
                    href="#"
                    className="text-xl font-normal leading-[150%] text-white hover:text-white/80 transition-colors"
                  >
                    Careers
                  </a>
                </div>
              </div>

              {/* Social links */}
              <div className="flex flex-col items-end gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-xl font-normal leading-[150%] text-white hover:text-white/80 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col gap-8">
          {/* Location row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <h4 className="text-[36px] font-medium leading-[105%] text-white">
                We are Located At
              </h4>
            </div>
            <div className="flex items-center gap-4">
              {locations.map((loc) => (
                <div key={loc.code} className="flex items-center gap-2">
                  <div
                    className="w-[33px] h-[32px] rounded-full shrink-0"
                    style={{ background: loc.color }}
                  />
                  <span className="text-xl font-normal leading-[150%] text-white">
                    {loc.code}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Copyright area */}
          <div className="flex flex-col gap-4">
            {/* Divider */}
            <div className="h-px bg-white/10" />

            {/* Policy row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <span
                className="text-xl leading-[24px] text-white"
                style={{ fontWeight: 250 }}
              >
                &copy; 2026 MKYCOMM. All right reserved
              </span>
              <a
                href="#"
                className="text-xl leading-[24px] text-white hover:text-white/80 transition-colors"
                style={{ fontWeight: 250 }}
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Large watermark text */}
      <div className="relative w-full overflow-hidden mt-8" aria-hidden="true">
        <div className="relative flex justify-center">
          <span
            className="font-bold whitespace-nowrap text-white translate-y-[30%]"
            style={{
              fontSize: '232px',
              lineHeight: '232px',
              fontFamily: 'var(--font-josefin), Josefin Sans, sans-serif',
            }}
          >
            MKYCOMM
          </span>
          <Image
            src="/Artboard.png"
            alt=""
            width={231}
            height={144}
            className="absolute pointer-events-none"
            style={{
              left: 'calc(50% - 667px + 317px)',
              top: '34px',
              transform: 'rotate(-17.33deg)',
            }}
          />
        </div>
      </div>
    </footer>
  );
}
