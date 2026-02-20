import Image from 'next/image';

export default function CTATextSection() {
  return (
    <section className="relative w-full bg-black overflow-hidden" data-node-id="8001:10077">
      <div className="relative w-full h-auto">
        {/* Desktop: 1440px viewport - Text: 64px, Width: 985px, Image: 124.8px x 64px */}
        {/* Mobile: 390px viewport - Text: 24px, Width: 322px, Image: 47.776px x 24.501px */}
        <div className="relative w-full flex items-center justify-center pt-[7.29px] pb-[40px] lg:pt-[7.29px] lg:pb-[80px]">
          <h2 className="font-montserrat font-bold text-white text-center cta-text-heading">
            <span className="block">Ready to communicate</span>
            <span className="block relative inline-flex items-center justify-center cta-text-line">
              <span className="inline-block whitespace-nowrap cta-with-word">with</span>

              {/* Embedded Image - Growth */}
              <span className="relative inline-block overflow-hidden cta-image-wrapper">
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

              <span className="inline-block whitespace-nowrap">clarity?</span>
            </span>
          </h2>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .cta-text-heading {
          font-size: clamp(24px, 6.15vw, 64px);
          line-height: 1.3;
          width: min(322px, 90vw);
        }
        .cta-text-line {
          gap: 8px;
        }
        .cta-with-word {
          margin-left: -20px;
        }
        .cta-image-wrapper {
          width: clamp(47.776px, 12.25vw, 124.8px);
          height: clamp(24.501px, 6.28vw, 64px);
        }

        /* Pixel-perfect for 1440px */
        @media (min-width: 1440px) {
          .cta-text-heading {
            font-size: 64px;
            width: 985px;
          }
          .cta-text-line {
            gap: 12px;
          }
          .cta-with-word {
            margin-left: -40px;
          }
          .cta-image-wrapper {
            width: 124.8px;
            height: 64px;
          }
        }

        /* Pixel-perfect for 390px */
        @media (max-width: 390px) {
          .cta-text-heading {
            font-size: 24px;
            width: 322px;
          }
          .cta-text-line {
            gap: 8px;
          }
          .cta-with-word {
            margin-left: -20px;
          }
          .cta-image-wrapper {
            width: 47.776px;
            height: 24.501px;
          }
        }
      `}} />
    </section>
  );
}
