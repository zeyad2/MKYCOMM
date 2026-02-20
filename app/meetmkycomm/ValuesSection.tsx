export default function ValuesSection() {
  return (
    <section className="bg-black overflow-hidden">

      {/* ── Desktop (lg+) ── */}
      <div className="hidden lg:block">
        <div className="mx-auto px-[120px] max-w-[1440px] py-[80px]">
          <div className="flex gap-[24px] items-start">

            <div className="flex-1 flex flex-col gap-[32px] pt-[80px]">

              {/* Card: Amplification with Intention */}
              <div className="relative h-[650px] overflow-hidden rounded-[16px] bg-[#000FFF]">
             
                <img
                  src="/meetmky-vectors/vector1.png"
                  alt=""
                  aria-hidden="true"
                  style={{ position: 'absolute', left: -25, top: 247, width: 265, height: 633 }}
                />
               
                <p
                  className="absolute font-montserrat font-bold text-[36px] leading-[1.05] text-white m-0"
                  style={{ top: 40, left: 36, right: 43 }}
                >
                  Amplification<br />with Intention
                </p>
              </div>

              {/* Card: Principle Before Aesthetics */}
              <div className="relative h-[650px] overflow-hidden rounded-[16px] bg-[#000FFF]">
           
                <div style={{ position: 'absolute', left: 105, top: 39, width: 457, height: 618 }}>
                  <img
                    src="/meetmky-vectors/vector4.png"
                    alt=""
                    aria-hidden="true"
                    className="block w-full h-full"
                  />
                </div>
               
                <p
                  className="absolute font-montserrat font-bold text-[36px] leading-[1.05] text-white m-0"
                  style={{ bottom: 40, left: 36, right: 43 }}
                >
                  Principle Before<br />Aesthetics
                </p>
              </div>

            </div>

            {/* Middle column – no vertical offset */}
            <div className="flex-1 flex flex-col gap-[32px]">

              {/* Card: Culture Intelligence */}
              <div className="relative h-[650px] overflow-hidden rounded-[16px] bg-[#000FFF]">
              
                <img
                  src="/meetmky-vectors/vector2.png"
                  alt=""
                  aria-hidden="true"
                  style={{ position: 'absolute', left: 39, top: 259, width: 305, height: 658 }}
                />
                <p
                  className="absolute font-montserrat font-bold text-[36px] leading-[1.05] text-white m-0"
                  style={{ top: 40, left: 36, right: 43 }}
                >
                  Culture<br />Intelligence
                </p>
              </div>

              {/* Card: Legacy Through Clarity */}
              <div className="relative h-[650px] overflow-hidden rounded-[16px] bg-[#000FFF]">
             
                <img
                  src="/meetmky-vectors/vector5.png"
                  alt=""
                  aria-hidden="true"
                  style={{ position: 'absolute', left: 113, top: 251, width: 271, height: 467 }}
                />
                <p
                  className="absolute font-montserrat font-bold text-[36px] leading-[1.05] text-white m-0"
                  style={{ top: 40, left: 36, right: 43 }}
                >
                  Legacy Through<br />Clarity
                </p>
              </div>

            </div>

            {/* Right column – offset 80 px down */}
            <div className="flex-1 flex flex-col gap-[32px] pt-[80px]">

              {/* Card: People-Centric Craft */}
              <div className="relative h-[650px] overflow-hidden rounded-[16px] bg-[#000FFF]">
              
                <div style={{ position: 'absolute', left: -84, top: -105, width: 447, height: 514 }}>
                  <img
                    src="/meetmky-vectors/vector3.png"
                    alt=""
                    aria-hidden="true"
                    className="block w-full h-full"
                  />
                </div>
              
                <p
                  className="absolute font-montserrat font-bold text-[36px] leading-[1.05] text-white m-0"
                  style={{ bottom: 40, left: 36, right: 43 }}
                >
                  People-Centric<br />Craft
                </p>
              </div>

              {/* Card: Trusted Leadership */}
              <div className="relative h-[650px] overflow-hidden rounded-[16px] bg-[#000FFF]">
            
                <img
                  src="/meetmky-vectors/vector6.png"
                  alt=""
                  aria-hidden="true"
                  style={{ position: 'absolute', left: 147, top: 363, width: 299, height: 400 }}
                />
                <p
                  className="absolute font-montserrat font-bold text-[36px] leading-[1.05] text-white m-0"
                  style={{ top: 40, left: 36, right: 43 }}
                >
                  Trusted<br />Leadership
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* ── Mobile (< lg) ── */}
      <div className="lg:hidden flex gap-[16px] items-start px-[24px] py-[24px]">

        {/* Left column – offset 32 px down */}
        <div className="flex-1 flex flex-col gap-[16px] pt-[32px]">

          {/* Card: Amplification with Intention */}
          <div className="relative h-[302px] overflow-hidden bg-[#000FFF]" style={{ borderRadius: 7.429 }}>
            {/*
              vector1: lollipop plant
              Figma: left-[-11.61px] top-[114.68px] w-[123.036px] h-[293.893px]
            */}
            <img
              src="/meetmky-vectors/vector1.png"
              alt=""
              aria-hidden="true"
              style={{ position: 'absolute', left: -11.61, top: 114.68, width: 123.036, height: 293.893 }}
            />
            {/*
              Text inset: [6.29% top, 11.04% right, 75.83% bottom, 9.2% left]
              302×163 → top≈19 left≈15 right≈18
            */}
            <p
              className="absolute font-montserrat font-bold text-[18px] leading-[1.05] text-white m-0"
              style={{ top: 19, left: 15, right: 18 }}
            >
              Amplification with Intention
            </p>
          </div>

          {/* Card: Principle Before Aesthetics */}
          <div className="relative h-[302px] overflow-hidden bg-[#000FFF]" style={{ borderRadius: 7.429 }}>
            {/*
              vector2: branch with oval leaves
              Figma inner container: left-[48.75px] top-[18.11px] w-[212.151px] h-[286.724px]
              Inner image: inset-[0_0_0_-8.32%] → x offset = -8.32%×212.151 = -17.65px
              Effective from card left: 48.75 - 17.65 = 31.1px
              Effective width: 212.151 + 17.65 = 229.8px
            */}
            <img
              src="/meetmky-vectors/vector4.png"
              alt=""
              aria-hidden="true"
              style={{ position: 'absolute', left: 31, top: 18, width: 230, height: 287 }}
            />
            {/*
              Text inset: [77.81% top, 5.15% right, 3.31% bottom, 7.98% left]
              → top≈235 left≈13 right≈8 bottom≈10
            */}
            <p
              className="absolute font-montserrat font-bold text-[18px] leading-[1.05] text-white m-0"
              style={{ bottom: 10, left: 13, right: 8 }}
            >
              Principle Before Aesthetics
            </p>
          </div>

          {/* Card: People-Centric Craft */}
          <div className="relative h-[302px] overflow-hidden bg-[#000FFF]" style={{ borderRadius: 7.429 }}>
      
            <div style={{ position: 'absolute', left: -55, top: -53.86, width: 207.536, height: 238.643 }}>
              <img
                src="/meetmky-vectors/vector3.png"
                alt=""
                aria-hidden="true"
                className="block w-full h-full"
              />
            </div>
        
            <p
              className="absolute font-montserrat font-bold text-[18px] leading-[1.05] text-white m-0"
              style={{ bottom: 18, left: 15, right: 18 }}
            >
              People-Centric Craft
            </p>
          </div>

        </div>

        {/* Right column – no vertical offset */}
        <div className="flex-1 flex flex-col gap-[16px]">

          {/* Card: Culture Intelligence */}
          <div className="relative h-[302px] overflow-hidden bg-[#000FFF]" style={{ borderRadius: 7.429 }}>
        
            <img
              src="/meetmky-vectors/vector2.png"
              alt=""
              aria-hidden="true"
              style={{ position: 'absolute', left: 11, top: 120, width: 141.607, height: 305.5 }}
            />
           
            <p
              className="absolute font-montserrat font-bold text-[18px] leading-[1.05] text-white m-0"
              style={{ top: 19, left: 15, right: 18 }}
            >
              Culture Intelligence
            </p>
          </div>

          {/* Card: Legacy Through Clarity */}
          <div className="relative h-[302px] overflow-hidden bg-[#000FFF]" style={{ borderRadius: 7.429 }}>
            {/*
              vector5: plant with large leaves + circles
              Figma: left-[37px] top-[114.14px] w-[125.821px] h-[216.821px]
              Overflows bottom – clipped
            */}
            <img
              src="/meetmky-vectors/vector5.png"
              alt=""
              aria-hidden="true"
              style={{ position: 'absolute', left: 37, top: 114, width: 125.821, height: 216.821 }}
            />
            {/*
              Text inset: [5.96% top, 11.04% right, 74.83% bottom, 9.2% left]
              → top≈18 left≈15 right≈18
            */}
            <p
              className="absolute font-montserrat font-bold text-[18px] leading-[1.05] text-white m-0"
              style={{ top: 18, left: 15, right: 8 }}
            >
              Legacy Through Clarity
            </p>
          </div>

          {/* Card: Trusted Leadership */}
          <div className="relative h-[302px] overflow-hidden bg-[#000FFF]" style={{ borderRadius: 7.429 }}>
            {/*
              vector6: small plant with circles
              Figma: left-[53px] top-[165.29px] w-[138.821px] h-[185.714px]
              Overflows bottom slightly – clipped
            */}
            <img
              src="/meetmky-vectors/vector6.png"
              alt=""
              aria-hidden="true"
              style={{ position: 'absolute', left: 53, top: 165, width: 138.821, height: 185.714 }}
            />
            {/*
              Text inset: [6.15% top, 11.2% right, 81.92% bottom, 9.38% left]
              → top≈19 left≈15 right≈18
            */}
            <p
              className="absolute font-montserrat font-bold text-[18px] leading-[1.05] text-white m-0"
              style={{ top: 19, left: 15, right: 18 }}
            >
              Trusted Leadership
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
