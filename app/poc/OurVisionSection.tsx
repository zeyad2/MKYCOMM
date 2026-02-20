const YELLOW = '#FFE70B';
const BLUE = '#000FFF';
const GREY = '#797979';
const FONT = 'var(--font-montserrat), sans-serif';

export default function OurVisionSection() {
  return (
    <section style={{ backgroundColor: '#000000', width: '100%' }} className="mt-16">

      {/* ── Desktop (≥ 1024px) ── */}
      <div
        className="hidden lg:block"
        style={{ paddingLeft: '8.333%', paddingRight: '8.333%', paddingTop: 56, paddingBottom: 56 }}
      >
        <div
          style={{
            maxWidth: 1200,
            width: '100%',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 32,
          }}
        >
          {/* Our Vision — left-aligned, up to 666px wide */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 32,
              alignItems: 'flex-start',
              maxWidth: 666,
              width: '100%',
            }}
          >
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <div
                style={{
                  width: 33,
                  height: 32,
                  borderRadius: '50%',
                  backgroundColor: YELLOW,
                  flexShrink: 0,
                }}
              />
              <p
                style={{
                  fontFamily: FONT,
                  fontSize: 36,
                  fontWeight: 700,
                  color: '#ffffff',
                  lineHeight: 1.05,
                  margin: 0,
                }}
              >
                Our Vision
              </p>
            </div>

            <div
              style={{
                fontFamily: FONT,
                fontSize: 20,
                fontWeight: 400,
                color: GREY,
                lineHeight: 1.5,
              }}
            >
              <p style={{ margin: 0 }}>We Do Media Right</p>
              <p style={{ margin: 0 }}>Be the destination for the hotspots From every perspective</p>
            </div>
          </div>

          {/* Our Community — right-aligned */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 32,
              alignItems: 'flex-end',
              width: '100%',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 32,
                maxWidth: 680,
                width: '100%',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  gap: 12,
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    width: 33,
                    height: 32,
                    borderRadius: '50%',
                    backgroundColor: BLUE,
                    flexShrink: 0,
                  }}
                />
                <p
                  style={{
                    fontFamily: FONT,
                    fontSize: 36,
                    fontWeight: 700,
                    color: '#ffffff',
                    lineHeight: 1.05,
                    margin: 0,
                  }}
                >
                  Our Community
                </p>
              </div>

              <div
                style={{
                  fontFamily: FONT,
                  fontSize: 20,
                  fontWeight: 400,
                  color: GREY,
                  lineHeight: 1.5,
                  textAlign: 'right',
                  width: '100%',
                }}
              >
                <p style={{ margin: 0 }}>Our community lives where culture, people, and ambition intersect.</p>
                <p style={{ margin: 0 }}>We build relationships rooted in nuance, respect, and shared purpose.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile (< 1024px) ── */}
      <div
        className="lg:hidden flex flex-col"
        style={{
          padding: 24,
          gap: 32,
        }}
      >
        {/* Our Vision — left-aligned */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: YELLOW,
                flexShrink: 0,
              }}
            />
            <p
              style={{
                fontFamily: FONT,
                fontSize: 18,
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.05,
                margin: 0,
              }}
            >
              Our Vision
            </p>
          </div>

          <div
            style={{
              fontFamily: FONT,
              fontSize: 12,
              fontWeight: 400,
              color: GREY,
              lineHeight: 1.5,
            }}
          >
            <p style={{ margin: 0 }}>We Do Media Right</p>
            <p style={{ margin: 0 }}>Be the destination for the hotspots From every perspective</p>
          </div>
        </div>

        {/* Our Community — right-aligned */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            alignItems: 'flex-end',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: 12,
              alignItems: 'center',
              justifyContent: 'flex-end',
              width: '100%',
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: BLUE,
                flexShrink: 0,
              }}
            />
            <p
              style={{
                fontFamily: FONT,
                fontSize: 18,
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.05,
                margin: 0,
              }}
            >
              Our Community
            </p>
          </div>

          <div
            style={{
              fontFamily: FONT,
              fontSize: 12,
              fontWeight: 400,
              color: GREY,
              lineHeight: 1.5,
              textAlign: 'right',
              width: '100%',
            }}
          >
            <p style={{ margin: 0 }}>Our community lives where culture, people, and ambition intersect.</p>
            <p style={{ margin: 0 }}>We build relationships rooted in nuance, respect, and shared purpose.</p>
          </div>
        </div>
      </div>

    </section>
  );
}
