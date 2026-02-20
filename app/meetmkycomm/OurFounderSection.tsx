import Image from 'next/image';

export default function OurFounderSection() {
  return (
    <section className="bg-[#0F0F0F]">

      {/* ── Desktop (lg+) ──
          Total: 665px | pt: 56px | label: 38px | gap: 32px
          Content: 483px | pb: 56px
      */}
      <div className="hidden lg:block pt-[56px] pb-[56px]">
        <div className="mx-auto px-[120px] max-w-[1440px]">

          {/* "Our Founder" — right-aligned, blue dot */}
          <div className="flex justify-end mb-8">
            <div className="flex items-center gap-3">
              <span className="w-[33px] h-[32px] rounded-full bg-[#000FFF] flex-shrink-0" />
              <span className="font-montserrat font-bold text-[32px] leading-[1.19] text-white">
                Our Founder
              </span>
            </div>
          </div>

          {/*
            Three-column layout (1200px total):
              Col A: 368px  — name & title, top-aligned
              Gap:    32px
              Col B: 368px  — photo, full 483px height
              Gap:    32px
              Col C: 400px  — description, starts at y=213 (lower half)
          */}
          <div className="flex" style={{ height: 483 }}>

            {/* Col A – Name / Title */}
            <div style={{ width: 368, minWidth: 368 }}>
              <h3 className="font-montserrat font-bold text-[32px] leading-[1.19] text-white m-0">
                Mahmoud Youssef
              </h3>
              <p className="font-montserrat font-normal text-[14px] leading-[2.14] text-[#A3A3A3] mt-1">
                Managing Director
              </p>
            </div>

            {/* Gap */}
            <div style={{ width: 32, flexShrink: 0 }} />

            {/* Col B – Photo */}
            <div
              className="rounded-xl overflow-hidden flex-shrink-0"
              style={{ width: 368, height: 483 }}
            >
              <Image
                src="/our-founder-img.png"
                alt="Mahmoud Youssef – Managing Director, MKYCOMM"
                width={368}
                height={483}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>

            {/* Gap */}
            <div style={{ width: 32, flexShrink: 0 }} />

            {/* Col C – Description (offset 213px from top to match Figma) */}
            <div className="flex-1" style={{ paddingTop: 213 }}>
              <p className="font-montserrat font-normal text-[15px] leading-[1.8] text-[#A3A3A3]">
                Under Mahmoud Youssef&apos;s leadership, MKYCOMM grew into a multi-national,
                growth-focused agency known for cultural intelligence, clarity-driven design,
                and strategic depth. What began as a personal vision has become a collective
                discipline. A team dedicated to building brands with meaning, humility, and
                long-term relevance.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ── Mobile (< lg) ──
          Total: 454px | px/pt/pb: 24px
          Photo: 342×202px | Name y=218 | Description y=273
      */}
      <div className="lg:hidden px-6 pt-6 pb-6">

        {/* "Our Founder" — right-aligned, blue dot */}
        <div className="flex justify-end mb-5">
          <div className="flex items-center gap-[6px]">
            <span className="w-[10px] h-[10px] rounded-full bg-[#000FFF] flex-shrink-0" />
            <span className="font-montserrat font-bold text-[14px] leading-[1.19] text-white">
              Our Founder
            </span>
          </div>
        </div>

        {/* Photo — 342×202 */}
        <div className="w-full rounded-xl overflow-hidden" style={{ height: 202 }}>
          <Image
            src="/founder.png"
            alt="Mahmoud Youssef – Managing Director, MKYCOMM"
            width={342}
            height={202}
            className="w-full h-full object-cover object-top"
            priority
          />
        </div>

        {/* Name + Title (16px below photo = 218 − 202) */}
        <div className="mt-4">
          <h3 className="font-montserrat font-bold text-[17px] leading-[1.19] text-white">
            Mahmoud Youssef
          </h3>
          <p className="font-montserrat font-normal text-[13px] leading-[1.5] text-[#A3A3A3] mt-[3px]">
            Managing Director
          </p>
        </div>

        {/* Description (16px below title = 273 − 257) */}
        <p className="font-montserrat font-normal text-[12px] leading-[1.75] text-[#A3A3A3] mt-4">
          Under Mahmoud Youssef&apos;s leadership, MKYCOMM grew into a multi-national,
          growth-focused agency known for cultural intelligence, clarity-driven design,
          and strategic depth. What began as a personal vision has become a collective
          discipline. A team dedicated to building brands with meaning, humility, and
          long-term relevance.
        </p>

      </div>
    </section>
  );
}
