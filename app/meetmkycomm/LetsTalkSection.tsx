import Image from 'next/image';

export default function LetsTalkSection() {
  return (
    <section className="bg-black">

      {/* ── Part 1: Headline + inline thumbnail ──────────────────────────────
          Desktop 1440 px → 1440 × 180 px | 64 px text | image 124.8 × 64 px
          Mobile  390 px  → 390  × 62 px  | 24 px text | image 47.776 × 24.5 px
      ─────────────────────────────────────────────────────────────────────── */}
      <div className="relative w-full bg-black overflow-hidden">
        <div className="w-full flex items-center justify-center ltalk-text-section">
          <h2 className="font-montserrat font-bold text-white text-center ltalk-heading">
            <span className="block">Ready for a partner who</span>
            <span className="flex items-center justify-center ltalk-line">
              <span className="whitespace-nowrap">thinks in&nbsp;</span>
              <span className="relative inline-block overflow-hidden flex-shrink-0 ltalk-img-wrapper">
                <Image
                  src="/small-lets-talk-img.png"
                  alt=""
                  fill
                  className="object-cover"
                  aria-hidden="true"
                />
              </span>
              <span className="whitespace-nowrap">&nbsp;systems?</span>
            </span>
          </h2>
        </div>
      </div>

      {/* ── Part 2: Background image + "Let's Talk" ──────────────────────────
          Desktop 1440 px → 1440 × 810 px | "Let's Talk" 64 px centered
          Mobile  390 px  → 390  × 220 px | "Let's Talk" 18 px centered
      ─────────────────────────────────────────────────────────────────────── */}
      <div className="relative w-full overflow-hidden ltalk-bg-container">

        {/* Background image */}
        <Image
          src="/let's-talk-img.png"
          alt=""
          fill
          className="object-cover object-center"
          aria-hidden="true"
        />

        {/* Gradient overlay — exact values from Figma */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: [
              'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 67.498%)',
              'linear-gradient(237.999deg, rgba(0,0,0,0) 61.762%, rgba(0,0,0,0.16) 67.827%, rgba(0,0,0,0.18) 72.309%, rgba(0,0,0,0.2) 80.483%)',
              'linear-gradient(91.799deg, rgba(0,0,0,0) 25.759%, rgba(0,0,0,0.175) 44.943%, rgba(0,0,0,0.14) 54.697%, rgba(0,0,0,0.315) 72.255%, rgba(0,0,0,0.35) 82.595%, rgba(0,0,0,0.35) 90.789%)',
            ].join(', '),
          }}
          aria-hidden="true"
        />

        {/* "Let's Talk" — centered (Figma metadata: 50 % / 50 % of section) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-montserrat font-bold text-white text-center m-0 ltalk-cta-text">
            Let&apos;s Talk
          </p>
        </div>
      </div>

      {/* ── Responsive styles ── */}
      <style dangerouslySetInnerHTML={{ __html: `

        /* Part 1 – fluid between 390 px and 1440 px */
        .ltalk-text-section {
          padding-top: 7.29px;
          padding-bottom: 7.29px;
        }
        .ltalk-heading {
          font-size: clamp(24px, 4.44vw, 64px);
          line-height: 1.3;
        }
        .ltalk-img-wrapper {
          width:  clamp(47.776px, 12.25vw, 124.8px);
          height: clamp(24.501px,  6.28vw,  64px);
        }

        /* Part 2 – height proportional (56.25 vw matches both targets exactly) */
        .ltalk-bg-container {
          height: clamp(220px, 56.25vw, 810px);
        }
        .ltalk-cta-text {
          font-size: clamp(18px, 4.44vw, 64px);
          line-height: 1.7;
        }

        /* Pixel-perfect at 1440 px */
        @media (min-width: 1440px) {
          .ltalk-heading      { font-size: 64px; }
          .ltalk-img-wrapper  { width: 124.8px; height: 64px; }
          .ltalk-bg-container { height: 810px; }
          .ltalk-cta-text     { font-size: 64px; }
        }

        /* Pixel-perfect at 390 px */
        @media (max-width: 390px) {
          .ltalk-heading      { font-size: 24px; }
          .ltalk-img-wrapper  { width: 47.776px; height: 24.501px; }
          .ltalk-bg-container { height: 220px; }
          .ltalk-cta-text     { font-size: 18px; }
        }

      ` }} />
    </section>
  );
}
