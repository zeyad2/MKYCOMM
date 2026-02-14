import Image from 'next/image';

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
      {/* Main footer container - height 662px as per Figma */}
      <div className="relative h-[662px] w-full">
        {/* Footer content wrapper */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1440px] pt-24 pb-[140px] flex items-center justify-center">
          <div className="w-[1152px] flex flex-col gap-[56px]">
            {/* Top section: Logo+Description | Company+Social */}
            <div className="flex gap-8">
              {/* Left: Logo & Description */}
              <div className="flex-1 flex flex-col gap-5">
                {/* Logo with dot */}
                <div className="relative inline-block">
                  <div
                    className="absolute left-[188.38px] top-[83.85px] w-[11.615px] h-[11.615px] rounded-full z-10"
                    style={{ backgroundColor: '#FFE70B' }}
                  />
                  <p
                    className="font-bold text-white whitespace-pre-line leading-[normal]"
                    style={{
                      fontFamily: 'var(--font-josefin), Josefin Sans, sans-serif',
                      fontSize: '54.446px',
                    }}
                  >
                    {`MKY\nCOMM`}
                  </p>
                </div>

                {/* Description */}
                <p
                  className="text-[#797979] font-normal leading-[150%]"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '20px',
                    maxWidth: '466.706px',
                  }}
                >
                  MKYCOMM Where strategic brilliance meets creative force.
                  Elevating brands with unmatched precision and insight.
                </p>
              </div>

              {/* Right: Company & Social links */}
              <div className="flex-1 flex flex-col gap-4">
                {/* Headers row */}
                <div className="flex gap-20 items-center w-full">
                  <div className="flex-1">
                    <h4
                      className="text-white font-medium leading-[105%]"
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '36px',
                      }}
                    >
                      Company
                    </h4>
                  </div>
                  <div className="flex-1 flex justify-end">
                    <h4
                      className="text-white font-medium leading-[105%]"
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '36px',
                      }}
                    >
                      Social
                    </h4>
                  </div>
                </div>

                {/* Links row */}
                <div className="flex gap-[55px] w-full items-start">
                  {/* Company links - 2x3 grid */}
                  <div className="flex-1 grid grid-cols-2 grid-rows-3 gap-x-4 gap-y-4">
                    <p
                      className="text-white font-normal leading-[150%] col-start-1 row-start-1"
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '20px',
                      }}
                    >
                      MeetMKYCOMM
                    </p>
                    <p
                      className="text-white font-normal leading-[150%] col-start-1 row-start-2"
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '20px',
                      }}
                    >
                      Our Work
                    </p>
                    <p
                      className="text-white font-normal leading-[150%] col-start-1 row-start-3"
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '20px',
                      }}
                    >
                      Let&apos;s Talk
                    </p>
                    <p
                      className="text-white font-normal leading-[150%] col-start-2 row-start-2"
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '20px',
                      }}
                    >
                      Our Savvy
                    </p>
                    <p
                      className="text-white font-normal leading-[150%] col-start-2 row-start-3"
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '20px',
                      }}
                    >
                      Careers
                    </p>
                  </div>

                  {/* Social links - matching grid structure */}
                  <div className="grid grid-rows-3 gap-y-4 items-start w-[107px]">
                    {socialLinks.map((link) => (
                      <p
                        key={link.label}
                        className="text-white font-normal leading-[150%] text-right"
                        style={{
                          fontFamily: 'Montserrat, sans-serif',
                          fontSize: '20px',
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
            <div className="flex flex-col gap-8">
              {/* Location row */}
              <div className="flex gap-4 w-full">
                <div className="flex-1">
                  <h4
                    className="text-white font-medium leading-[105%]"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '36px',
                    }}
                  >
                    We are Located At
                  </h4>
                </div>
                <div className="flex gap-4 items-center h-20">
                  {locations.map((loc) => (
                    <div key={loc.code} className="flex gap-2 items-center">
                      <div
                        className="w-[33px] h-8 rounded-full shrink-0"
                        style={{ backgroundColor: loc.color }}
                      />
                      <p
                        className="text-white font-normal leading-[150%]"
                        style={{
                          fontFamily: 'Montserrat, sans-serif',
                          fontSize: '20px',
                        }}
                      >
                        {loc.code}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Copyright section */}
              <div className="flex flex-col gap-0">
                {/* Divider line */}
                <div className="w-full border-t border-white/10 mb-5" />

                {/* Policy row */}
                <div
                  className="flex items-center justify-between w-full text-white"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '20px',
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

        {/* Large watermark text */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[575px] flex items-end">
          <p
            className="font-bold text-white whitespace-pre-wrap leading-[normal] h-[174.923px] w-[1334.368px]"
            style={{
              fontFamily: 'var(--font-josefin), Josefin Sans, sans-serif',
              fontSize: '232.199px',
            }}
          >
            MKYCOMM
          </p>
        </div>

        {/* Artboard image */}
        <div
          className="absolute left-[317px] top-[34px] w-[263.577px] h-[206.679px] flex items-center justify-center"
        >
          <div className="rotate-[-17.33deg] flex-none">
            <Image
              src="/Artboard.png"
              alt=""
              width={231}
              height={144}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
