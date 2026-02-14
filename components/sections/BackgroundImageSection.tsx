import Image from 'next/image';

export default function BackgroundImageSection() {
  return (
    <section className="relative w-full bg-black overflow-hidden" style={{ height: '1240px' }}>
      {/* Background world map with gradient overlay */}
      <div className="absolute left-0 top-[-78.71px] w-[1984px] h-[1319.059px]">
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/journey-map-background.png"
            alt=""
            fill
            className="object-cover mix-blend-luminosity"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 10.576%, #000000 61.294%)'
            }}
          />
        </div>
      </div>

      {/* Network visualization */}
      <div className="absolute left-[341px] top-[229.5px] w-[837.5px] h-[138px]">
        <div className="absolute" style={{ inset: '-0.67% 0.76% -0.23% 2.19%' }}>
          <Image
            src="/journey-network-lines.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Network nodes */}
      <div className="absolute left-[1160px] top-[353px] w-[26px] h-[26px]">
        <div className="absolute" style={{ inset: '-111.54%' }}>
          <Image
            src="/journey-node-blue.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="absolute left-[906px] top-[216px] w-[26px] h-[26px]">
        <div className="absolute" style={{ inset: '-111.54%' }}>
          <Image
            src="/journey-node-blue-2.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="absolute left-[359px] top-[307px] w-[26px] h-[26px]">
        <div className="absolute" style={{ inset: '-111.54%' }}>
          <Image
            src="/journey-node-blue.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="absolute left-[1047px] top-[342px] w-[26px] h-[26px]">
        <div className="absolute" style={{ inset: '-111.54%' }}>
          <Image
            src="/journey-node-yellow.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Our Journey Section */}
      <div className="absolute left-1/2 top-[808.29px] w-[1200px] -translate-x-1/2 flex items-start justify-between">
        {/* Left: Heading */}
        <div className="flex items-center gap-3 flex-1">
          <div className="relative w-[32.972px] h-[32px] shrink-0">
            <Image
              src="/journey-dot-icon.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-white text-[36px] font-bold leading-[1.05] shrink-0 font-montserrat">
            Our Journey
          </h2>
        </div>

        {/* Right: Content */}
        <div className="w-[789px] shrink-0">
          <div className="text-white/90 text-[20px] font-normal leading-[1.5] whitespace-pre-wrap font-montserrat">
            <p className="mb-0">Born from a single conviction in 2018, MKYCOMM began as an answer to a market drowning in noise and starving for clarity. What started as a one-person pursuit quickly became a principle-led house, where strategy guides creativity, and cultural fluency shapes every message.</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">By January 1st, 2019, the agency took form: building systems, studying industries, shaping voices, and learning how brands truly grow. Today, MKYCOMM stands at the intersection of global logic and regional nuance, partnering with people and institutions across borders.</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">Our journey is not built on volume.</p>
            <p className="mb-0">It's built on vision, discipline, and a commitment to creating work that lasts.</p>
            <p>&nbsp;</p>
          </div>
        </div>
      </div>
    </section>
  );
}
