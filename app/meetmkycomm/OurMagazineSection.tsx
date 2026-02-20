import Image from 'next/image';

export default function OurMagazineSection() {
  return (
    <section className="bg-black">

      {/* ── Desktop (lg+) ── */}
      <div className="hidden lg:block">
        <div className="mx-auto max-w-[1440px] px-[120px] py-[56px]">

          {/* Header */}
          <div className="flex gap-[12px] items-center mb-[32px]">
            <span
              className="rounded-full shrink-0 bg-[#FFE70B]"
              style={{ width: 33, height: 32 }}
              aria-hidden="true"
            />
            <h2 className="font-montserrat font-bold text-[36px] leading-[1.05] text-white m-0">
              Our Magazine
            </h2>
          </div>

          {/* Card */}
          <div
            className="relative rounded-[16px] overflow-hidden"
            style={{ height: 310 }}
          >
            {/* Background image — silhouette on the right */}
            <Image
              src="/magazine-bg.png"
              alt=""
              fill
              className="object-cover object-right"
              aria-hidden="true"
            />

            {/* Gradient overlay — vivid blue on left, dark on right + top-right glow */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(ellipse 40% 140% at 95% -5%, rgba(0,0,255,0.35) 0%, transparent 100%),
                  linear-gradient(to right, #0000ff 0%, #0000c0 12%, #000080 25%, #12124a 40%, rgba(23,23,23,0.9) 58%, rgba(23,23,23,0) 80%)
                `,
              }}
              aria-hidden="true"
            />

            {/* Card content */}
            <div className="relative z-10 flex flex-col justify-between h-full pt-[36px] pb-[24px] px-[36px]">

              {/* Magazine artboard – POC People of Cairo logo */}
              <div style={{ width: 270, height: 141.75 }} className="relative">
                <Image
                  src="/magazine-artboard.png"
                  alt="POC – People of Cairo magazine"
                  fill
                  className="object-contain object-left"
                />
              </div>

              {/* Learn more */}
              <div className="flex justify-end">
                <button className="font-montserrat font-medium text-[16px] text-white bg-transparent border-none px-[20px] py-[16px] cursor-pointer hover:opacity-70 transition-opacity">
                  Learn more
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Mobile (< lg) ── */}
      <div className="lg:hidden px-[24px] py-[36px]">

        {/* Header */}
        <div className="flex gap-[4px] items-center mb-[24px]">
          <span
            className="rounded-full shrink-0 bg-[#FFE70B]"
            style={{ width: 10, height: 10 }}
            aria-hidden="true"
          />
          <h2 className="font-montserrat font-bold text-[18px] leading-[1.05] text-white m-0">
            Our Magazine
          </h2>
        </div>

        {/* Card */}
        <div
          className="relative rounded-[16px] overflow-hidden"
          style={{ height: 265 }}
        >
          {/* Background image */}
          <Image
            src="/magazine-bg.png"
            alt=""
            fill
            className="object-cover object-right"
            aria-hidden="true"
          />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 55% 110% at 95% -5%, rgba(0,0,255,0.3) 0%, transparent 100%),
                linear-gradient(to right, #0000ff 0%, #0000c0 15%, #000080 30%, #12124a 48%, rgba(23,23,23,0.75) 65%, rgba(23,23,23,0) 85%)
              `,
            }}
            aria-hidden="true"
          />

          {/* Card content */}
          <div className="relative z-10 flex flex-col justify-between h-full pt-[36px] pb-[16px] px-[24px]">

            {/* Magazine artboard */}
            <div style={{ width: 200, height: 105 }} className="relative">
              <Image
                src="/magazine-artboard.png"
                alt="POC – People of Cairo magazine"
                fill
                className="object-contain object-left"
              />
            </div>

            {/* Learn more */}
            <div className="flex justify-end">
              <button className="font-montserrat font-medium text-[16px] text-white bg-transparent border-none px-[20px] py-[16px] cursor-pointer hover:opacity-70 transition-opacity">
                Learn more
              </button>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
