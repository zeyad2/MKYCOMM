import Image from 'next/image';

export default function OurStorySection() {
  return (
    <section className="bg-black overflow-hidden">

      {/* ── Desktop (lg+) ── */}
      <div className="hidden lg:block">
        <div className="mx-auto px-[120px] max-w-[1440px] py-[56px]">

          {/* Section Header */}
          <div className="flex gap-[12px] items-center mb-[32px]">
            <span className="w-[33px] h-[32px] rounded-full bg-[#FFE70B] flex-shrink-0" />
            <p className="font-montserrat font-bold text-[36px] leading-[1.05] text-white m-0">
              Our Story
            </p>
          </div>

          {/* Images Row */}
          <div className="flex gap-[24px] items-start mb-[32px]">

            {/* Left column – no vertical offset */}
            <div className="flex-1">
              <div className="h-[650px] rounded-[16px] overflow-hidden relative">
                <Image
                  src="/our-story1.png"
                  alt="Our Story – Image 1"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Middle column – 80px offset */}
            <div className="flex-1 pt-[80px]">
              <div className="h-[650px] rounded-[16px] overflow-hidden relative">
                <Image
                  src="/our-story-2.png"
                  alt="Our Story – Image 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right column – no vertical offset */}
            <div className="flex-1">
              <div className="h-[650px] rounded-[16px] overflow-hidden relative">
                <Image
                  src="/our-story-3.png"
                  alt="Our Story – Image 3"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>

          {/* Stats + Body Text Row */}
          <div className="flex gap-[24px] items-start">

            {/* Left – stats */}
            <div className="flex-1">
              <div className="flex items-start">
                <div className="flex-1 flex flex-col gap-[4px]">
                  <p className="font-montserrat font-normal text-[16px] leading-[1.05] text-[#797979] m-0">
                    Founded in
                  </p>
                  <p className="font-montserrat font-medium text-[20px] leading-[1.05] text-white m-0">
                    2019
                  </p>
                </div>
                <div className="flex-1 flex flex-col gap-[4px]">
                  <p className="font-montserrat font-normal text-[16px] leading-[1.05] text-[#797979] m-0">
                    Location
                  </p>
                  <p className="font-montserrat font-medium text-[20px] leading-[1.05] text-white m-0">
                    Cairo, Egypt
                  </p>
                </div>
              </div>
            </div>

            {/* Right – body text */}
            <div className="w-[800px] shrink-0 flex flex-col gap-0">
              <p className="font-montserrat font-normal text-[20px] leading-[1.5] text-[#797979] m-0">
                In 2019, MKYCOMM took its first true step. Grounded in a belief that brands should be understood before they are styled, and that communication must be native, nuanced, and rooted in real context.
              </p>
              <p className="font-montserrat font-normal text-[20px] leading-[1.5] text-[#797979] m-0">
                We began by studying industries, crafting identities, and testing systems until our philosophy became clear:<br />
                principle before aesthetics, clarity before noise, structure before scale.
              </p>
              <p className="font-montserrat font-normal text-[20px] leading-[1.5] text-[#797979] m-0">
                From branding to integrated marketing communications to public opinion management, our work grew from execution into strategy, from strategy into leadership. Today, MKYCOMM partners with clients across regions and sectors: founders, institutions, creators, and brands who understand that presence isn&apos;t built by chance; it&apos;s built by design.
              </p>
              <p className="font-montserrat font-normal text-[20px] leading-[1.5] text-[#797979] m-0">
                Our story is still being written, guided by depth, discipline, and a responsibility to move culture forward.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* ── Mobile (< lg) ── */}
      <div className="lg:hidden p-[24px]">

        {/* Section Header */}
        <div className="flex gap-[4px] items-center mb-[24px]">
          <span className="w-[10px] h-[10px] rounded-full bg-[#FFE70B] flex-shrink-0" />
          <p className="font-montserrat font-bold text-[18px] leading-[1.05] text-white m-0">
            Our Story
          </p>
        </div>

        {/* Images Row – two columns */}
        <div className="flex gap-[16px] items-start mb-[24px]">

          {/* Left – 32px offset */}
          <div className="flex-1 pt-[32px]">
            <div className="h-[280px] rounded-[8px] overflow-hidden relative">
              <Image
                src="/our-story1.png"
                alt="Our Story – Image 1"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right – no offset */}
          <div className="flex-1">
            <div className="h-[280px] rounded-[8px] overflow-hidden relative">
              <Image
                src="/our-story-2.png"
                alt="Our Story – Image 2"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>

        {/* Stats */}
        <div className="flex items-start mb-[16px] w-[216px]">
          <div className="flex-1 flex flex-col gap-[4px]">
            <p className="font-montserrat font-normal text-[10px] leading-[1.05] text-[#797979] m-0">
              Founded in
            </p>
            <p className="font-montserrat font-medium text-[10px] leading-[1.05] text-white m-0">
              2019
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-[4px]">
            <p className="font-montserrat font-normal text-[10px] leading-[1.05] text-[#797979] m-0">
              Location
            </p>
            <p className="font-montserrat font-medium text-[10px] leading-[1.05] text-white m-0">
              Cairo, Egypt
            </p>
          </div>
        </div>

        {/* Body Text */}
        <div className="flex flex-col gap-0">
          <p className="font-montserrat font-normal text-[10px] leading-[1.5] text-[#797979] m-0">
            In 2019, MKYCOMM took its first true step. Grounded in a belief that brands should be understood before they are styled, and that communication must be native, nuanced, and rooted in real context.
          </p>
          <p className="font-montserrat font-normal text-[10px] leading-[1.5] text-[#797979] m-0">
            We began by studying industries, crafting identities, and testing systems until our philosophy became clear:<br />
            principle before aesthetics, clarity before noise, structure before scale.
          </p>
          <p className="font-montserrat font-normal text-[10px] leading-[1.5] text-[#797979] m-0">
            From branding to integrated marketing communications to public opinion management, our work grew from execution into strategy, from strategy into leadership. Today, MKYCOMM partners with clients across regions and sectors: founders, institutions, creators, and brands who understand that presence isn&apos;t built by chance; it&apos;s built by design.
          </p>
          <p className="font-montserrat font-normal text-[10px] leading-[1.5] text-[#797979] m-0">
            Our story is still being written, guided by depth, discipline, and a responsibility to move culture forward.
          </p>
        </div>

      </div>

    </section>
  );
}
