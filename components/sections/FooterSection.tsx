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

const companyLinks = [
  'MeetMKYCOMM',
  'Our Work',
  "Let's Talk",
  'Our Savvy',
  'Careers',
];

export default function FooterSection() {
  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Mobile Footer - 390px */}
      <div className="xl:hidden w-full">
        <div className="w-full px-6 pt-10 pb-0 flex flex-col gap-6">
          {/* Logo and description */}
          <div className="flex flex-col gap-4">
            {/* Logo with eye */}
            <div className="relative h-[72px] w-full">
              <div className="absolute left-0 top-[-13.48px] flex gap-[9.085px] items-end py-[18.17px] w-[141.955px]">
                <p
                  className="font-bold text-white whitespace-pre-line leading-[normal]"
                  style={{
                    fontFamily: 'var(--font-josefin), Josefin Sans, sans-serif',
                    fontSize: '24.446px',
                  }}
                >
                  {`MKY\nCOMM`}
                </p>
                <div
                  className="w-[7.904px] h-[7.99px] rounded-full shrink-0"
                  style={{ backgroundColor: '#FFE70B' }}
                />
              </div>
              <div className="absolute left-[124.92px] top-[-44px] w-[187.08px] h-[146.695px] flex items-center justify-center">
                <div className="rotate-[-17.33deg] flex-none">
                  <Image
                    src="/Artboard.png"
                    alt=""
                    width={164}
                    height={103}
                    className="object-contain w-[163.992px] h-[102.495px]"
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <p
              className="text-[#797979] font-normal leading-[150%] w-full"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '12px',
              }}
            >
              MKYCOMM Where strategic brilliance meets creative force.
              Elevating brands with unmatched precision and insight.
            </p>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-white/10" />

          {/* Company and Social */}
          <div className="flex gap-4 items-start text-white w-full">
            {/* Company */}
            <div className="flex-1 flex flex-col gap-3">
              <h4
                className="font-medium leading-[105%]"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '16px',
                }}
              >
                Company
              </h4>
              <div className="grid grid-cols-2 gap-x-[6px] gap-y-[6px] h-[57px]">
                {companyLinks.map((link) => (
                  <p
                    key={link}
                    className="font-normal leading-[150%]"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '10px',
                    }}
                  >
                    {link}
                  </p>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="flex flex-col gap-3 items-end">
              <h4
                className="font-medium leading-[105%]"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '16px',
                }}
              >
                Social
              </h4>
              <div className="flex flex-col gap-[6px] items-start">
                {socialLinks.map((link) => (
                  <p
                    key={link.label}
                    className="font-normal leading-[150%]"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '10px',
                    }}
                  >
                    {link.label}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-3">
            <h4
              className="text-white font-medium leading-[105%]"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '16px',
              }}
            >
              We are Located At
            </h4>
            <div className="flex gap-3 items-start">
              {locations.map((loc) => (
                <div key={loc.code} className="flex gap-2 items-center">
                  <div
                    className="w-[10px] h-[10px] rounded-full shrink-0"
                    style={{ backgroundColor: loc.color }}
                  />
                  <p
                    className="text-white font-normal leading-[150%]"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '10px',
                    }}
                  >
                    {loc.code}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-white/10" />

          {/* Copyright */}
          <div
            className="flex flex-col gap-2 text-white"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '12px',
              fontWeight: 100,
              lineHeight: 'normal',
            }}
          >
            <p>&copy; 2026 MKYCOMM. All right reserved</p>
            <p>Privacy Policy</p>
          </div>

          {/* Bottom watermark */}
          <div className="h-5 overflow-hidden w-full relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 flex items-end">
              <p
                className="font-bold text-white leading-[normal] whitespace-pre-wrap"
                style={{
                  fontFamily: 'var(--font-josefin), Josefin Sans, sans-serif',
                  fontSize: '54.292px',
                  width: '312px',
                  height: '40.9px',
                }}
              >
                MKYCOMM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Footer - 1440px */}
      <div className="hidden xl:block">
        <div className="relative h-[662px] w-full">
          {/* Footer content wrapper */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1440px] pt-24 pb-[140px] flex items-center justify-center">
            <div className="w-[1152px] flex flex-col gap-[56px]">
              {/* Top section: Logo+Description | Company+Social */}
              <div className="flex gap-8">
                {/* Left: Logo & Description */}
                <div className="flex-1 flex flex-col gap-5">
                  {/* Logo with dot */}
                  <p
                    className="font-bold text-white whitespace-pre-line leading-[normal]"
                    style={{
                      fontFamily: 'var(--font-josefin), Josefin Sans, sans-serif',
                      fontSize: '54.446px',
                    }}
                  >
                    MKY{'\n'}COMM
                    <span 
                      className="inline-block ml-1 w-[11.615px] h-[11.615px] rounded-full "
                      style={{ backgroundColor: '#FFE70B' }}
                    />
                  </p>

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
                    <div className="flex-1 grid grid-cols-2 grid-rows-3 gap-x-4 gap-y-4 h-[122px]">
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

                    {/* Social links */}
                    <div className="flex flex-col gap-4 items-end w-[107px]">
                      {socialLinks.map((link) => (
                        <p
                          key={link.label}
                          className="text-white font-normal leading-[150%] w-full text-right"
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
                <div className="flex gap-4 w-full items-start">
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
                          className="w-[32.972px] h-8 rounded-full shrink-0"
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
                <div className="flex flex-col h-10 justify-between">
                  {/* Divider line */}
                  <div className="w-full border-t border-white/10" />

                  {/* Policy row */}
                  <div
                    className="flex items-center justify-between w-[1152px] text-white"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '20px',
                      fontWeight: 100,
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
          <div className="absolute left-1/2 -translate-x-1/2 top-[530px] flex items-end">
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
          <div className="absolute left-[600px] top-[34px] w-[263.577px] h-[206.679px] flex items-center justify-center">
            <div className="rotate-[-10.33deg] flex-none">
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
      </div>
    </footer>
  );
}
