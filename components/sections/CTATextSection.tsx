import Image from 'next/image';

export default function CTATextSection() {
  return (
    <section className="relative w-full bg-black py-16 md:py-24" data-node-id="8001:10077">
      <div className="relative max-w-[1200px] mx-auto px-6">
        {/* Main Heading with Embedded Image */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center leading-[1.3]">
          <span className="block mb-2">Ready to communicate</span>
          <span className="inline-flex items-center gap-4">
            <span>with</span>

            {/* Embedded Image */}
            <span className="relative inline-block w-[80px] h-[50px] md:w-[100px] md:h-[64px] overflow-hidden rounded">
              <Image
                src="/clarity-small.jpg"
                alt=""
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute left-0 w-full" style={{ height: '243.74%', top: '-62.79%' }}>
                  <Image
                    src="/clarity-overlay.png"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </span>

            <span>clarity?</span>
          </span>
        </h2>
      </div>
    </section>
  );
}
