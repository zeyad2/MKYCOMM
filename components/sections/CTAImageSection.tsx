import Image from 'next/image';

export default function CTAImageSection() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden" data-node-id="8001:10082">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/cta-background.jpg"
          alt="Dynamic motion background"
          fill
          className="object-cover"
          priority={false}
        />
      </div>

      {/* Overlay Images */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 w-full" style={{ height: '351.12%', top: '-102.67%' }}>
          <Image
            src="/cta-overlay-1.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
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
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 67.498%),
            linear-gradient(237.99998926491784deg, rgba(0, 0, 0, 0) 61.762%, rgba(0, 0, 0, 0.16) 67.827%, rgba(0, 0, 0, 0.18) 72.309%, rgba(0, 0, 0, 0.2) 80.483%),
            linear-gradient(91.79927991275018deg, rgba(0, 0, 0, 0) 25.759%, rgba(0, 0, 0, 0.175) 44.943%, rgba(0, 0, 0, 0.14) 54.697%, rgba(0, 0, 0, 0.315) 72.255%, rgba(0, 0, 0, 0.35) 82.595%, rgba(0, 0, 0, 0.35) 90.789%)
          `
        }}
      />
    </section>
  );
}
