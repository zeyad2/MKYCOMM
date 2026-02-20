import Image from 'next/image';

type Logo = {
  src: string;
  alt: string;
  dw: number; // desktop width (px)
  dh: number; // desktop height (px)
  mw: number; // mobile width (px)
  mh: number; // mobile height (px)
  dim?: boolean; // opacity-50
  contain?: boolean; // object-contain instead of object-cover
};

// Three groups — each group is a desktop row AND a mobile column (same logos, different axis)
const group1: Logo[] = [
  { src: '/clients/IBM 1.png',             alt: 'IBM',                   dw: 100, dh: 40, mw: 64, mh: 26, dim: true },
  { src: '/clients/Arabiat 1.png',         alt: 'Arabiat',               dw: 100, dh: 19, mw: 64, mh: 12 },
  { src: '/clients/Audi 2.png',            alt: 'Audi',                  dw:  72, dh: 44, mw: 46, mh: 29 },
  { src: '/clients/esaal 1.png',           alt: 'esaal',                 dw: 100, dh: 33, mw: 64, mh: 22 },
  { src: '/clients/Health Extension 1.png',alt: 'Health Extension',      dw: 100, dh: 48, mw: 64, mh: 31 },
  { src: '/clients/Repair.png',            alt: 'iRepair',               dw: 132, dh: 47, mw: 85, mh: 30 },
];

const group2: Logo[] = [
  { src: '/clients/WECOMM.png',       alt: 'WeComm',                dw: 115, dh: 26, mw: 74, mh: 17 },
  { src: '/clients/Mekyal.png',       alt: 'Mekyal',                dw: 100, dh: 57, mw: 64, mh: 37 },
  { src: '/clients/Franchise me.png', alt: 'FranchiseME',           dw:  70, dh: 58, mw: 45, mh: 38 },
  { src: '/clients/9.png',            alt: 'Client',                dw:  65, dh: 60, mw: 42, mh: 38 },
  { src: '/clients/gsms.png',         alt: 'GSMS',                  dw: 115, dh: 24, mw: 74, mh: 16 },
  { src: '/clients/Misr Italya 1.png',alt: 'Misr Italia Properties',dw: 132, dh: 26, mw: 85, mh: 16 },
];

const group3: Logo[] = [
  { src: '/clients/join.png',                    alt: 'JoinU',                dw: 103, dh: 35, mw: 66, mh: 23 },
  { src: '/clients/microcare.png',               alt: 'Microcare',            dw: 103, dh: 24, mw: 66, mh: 16 },
  { src: '/clients/flowmade.png',                alt: 'Flowmade',             dw: 103, dh: 23, mw: 66, mh: 15 },
  { src: '/clients/snapchat.png',                alt: 'Snapchat',             dw:  65, dh: 63, mw: 42, mh: 41 },
  { src: '/clients/Ministry of transport.png',   alt: 'Ministry of Transport',dw: 103, dh: 81, mw: 66, mh: 52, contain: true },
  { src: '/clients/maria.png',                   alt: 'Maria Philip',         dw: 103, dh: 26, mw: 66, mh: 16 },
];

const groups = [group1, group2, group3];

export default function OurClientsSection() {
  return (
    <section style={{ backgroundColor: '#0f0f0f' }} className="mt-[100px]">

      {/* ── Desktop (lg+) ── */}
      <div className="hidden lg:block ">
        <div className="mx-auto max-w-[1440px] px-[120px] py-[56px]">
          <div className="flex gap-[40px] items-start">

            {/* Left — title + description */}
            <div className="flex-1 flex flex-col gap-[32px] min-w-0">
              <div className="flex gap-[12px] items-center">
                <div
                  className="rounded-full shrink-0 bg-[#000FFF]"
                  style={{ width: 33, height: 32 }}
                  aria-hidden="true"
                />
                <h2 className="font-montserrat font-bold text-[36px] leading-[1.05] text-white m-0">
                  Clients
                </h2>
              </div>
              <p className="font-montserrat font-normal text-[20px] leading-[1.5] text-[#797979] m-0">
                MKYCOMM clients are our partners in our success journey. Expressing their vision
                to the world is what keeps us on top.
              </p>
            </div>

            {/* Right — logo grid: 3 rows × 6 logos */}
            <div className="w-[858px] shrink-0 flex flex-col gap-[48px]">
              {groups.map((group, gi) => (
                <div key={gi} className="flex items-center justify-between h-[88px] w-full">
                  {group.map((logo) => (
                    <div
                      key={logo.alt}
                      className="relative shrink-0 flex items-center justify-center"
                      style={{ width: logo.dw, height: logo.dh }}
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.dw}
                        height={logo.dh}
                        className={`pointer-events-none w-full h-full ${logo.contain ? 'object-contain' : 'object-cover'} ${logo.dim ? 'opacity-50' : ''}`}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ── Mobile (< lg) ── */}
      <div className="lg:hidden px-[24px] py-[36px]">

        {/* Header */}
        <div className="flex flex-col gap-[16px] mb-[24px]">
          <div className="flex gap-[4px] items-center">
            <div
              className="rounded-full shrink-0 bg-[#000FFF]"
              style={{ width: 10, height: 10 }}
              aria-hidden="true"
            />
            <h2 className="font-montserrat font-bold text-[18px] leading-[1.05] text-white m-0">
              Clients
            </h2>
          </div>
          <p className="font-montserrat font-normal text-[10px] leading-[1.5] text-[#797979] m-0">
            MKYCOMM clients are our partners in our success journey. Expressing their vision
            to the world is what keeps us on top.
          </p>
        </div>

        {/* 3 columns × 6 logos */}
        <div className="flex gap-[24px] items-start">
          {groups.map((group, gi) => (
            <div key={gi} className="flex-1 flex flex-col gap-[31px] items-center min-w-0">
              {group.map((logo) => (
                <div
                  key={logo.alt}
                  className="relative shrink-0 flex items-center justify-center"
                  style={{ width: logo.mw, height: logo.mh }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.mw}
                    height={logo.mh}
                    className={`pointer-events-none w-full h-full ${logo.contain ? 'object-contain' : 'object-cover'} ${logo.dim ? 'opacity-50' : ''}`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
