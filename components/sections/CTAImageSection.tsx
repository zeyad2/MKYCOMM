import Image from 'next/image';

export default function CTAImageSection() {
  return (
    <section className="relative w-full overflow-hidden" data-node-id="8001:10081">
      {/* Desktop: 600px height, 64px text at left: 276.49px, top: 160.15px */}
      {/* Mobile: 320px height, 18px text at left: 40.5px, top: 43.29px */}
      <div className="relative w-full cta-image-container">
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/cta-background.jpg"
            alt=""
            fill
            className="object-cover"
            priority={false}
          />
        </div>

        {/* Overlay Images */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-0 w-full" style={{ height: '351.12%', top: '-102.67%' }}>
            <Image
              src="/cta-overlay-1.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-0 w-full" style={{ height: '222.21%', top: '-52.75%' }}>
            <Image
              src="/cta-overlay-2.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Gradient Overlays */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 67.498%),
              linear-gradient(237.99998926491784deg, rgba(0, 0, 0, 0) 61.762%, rgba(0, 0, 0, 0.16) 67.827%, rgba(0, 0, 0, 0.18) 72.309%, rgba(0, 0, 0, 0.2) 80.483%),
              linear-gradient(91.79927991275018deg, rgba(0, 0, 0, 0) 25.759%, rgba(0, 0, 0, 0.175) 44.943%, rgba(0, 0, 0, 0.14) 54.697%, rgba(0, 0, 0, 0.315) 72.255%, rgba(0, 0, 0, 0.35) 82.595%, rgba(0, 0, 0, 0.35) 90.789%)
            `
          }}
        />

        {/* "Let's Talk" Text */}
        <div className="absolute flex items-center justify-center p-[10px] cta-lets-talk-wrapper">
          <p className="font-montserrat font-bold text-white text-center shrink-0 cta-lets-talk-text">
            Let's Talk
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .cta-image-container {
          height: clamp(320px, 83.08vw, 600px);
        }
        .cta-lets-talk-wrapper {
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        .cta-lets-talk-text {
          font-size: clamp(18px, 4.62vw, 64px);
          line-height: 1.7;
        }

        /* Pixel-perfect for 1440px */
        @media (min-width: 1440px) {
          .cta-image-container {
            height: 600px;
          }
          .cta-lets-talk-text {
            font-size: 64px;
          }
        }

        /* Pixel-perfect for 390px */
        @media (max-width: 390px) {
          .cta-image-container {
            height: 320px;
          }
          .cta-lets-talk-text {
            font-size: 18px;
          }
        }
      `}} />
    </section>
  );
}
