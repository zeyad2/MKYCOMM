import { p } from "framer-motion/client";

export default function MeetMKYCOMMHeroSection() {
  return (
    <section className="relative w-full bg-black">
      {/* Desktop Hero - visible at 1024px+ */}
      <div className="hidden lg:flex flex-col items-start w-full px-8 xl:px-[120px] pt-[190px] xl:items-center">
        <div className="flex items-start w-full xl:w-[1200px] gap-[60px] h-[478px] pb-16">
          {/* Left Column - Heading with embedded video */}
          <div className="shrink-0 w-[55%] xl:w-[680px] h-[414px]">
            <h1 className="font-montserrat font-bold text-white m-0 p-0 text-[62px] xl:text-[72px] leading-[1.51]">
              Meet MKYCOMM,
              <br />
              Where{' '}
              <span className="inline-block relative overflow-hidden align-middle w-[166px] h-[67px] xl:w-[191px] xl:h-[77px] mx-3">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  style={{ position: 'absolute', inset: 0 }}
                >
                  <source src="/MeetMKY page video.mp4" type="video/mp4" />
                </video>
              </span>
              <br />
              clarity becomes culture.
            </h1>
          </div>

          {/* Right Column - Description */}
          <div className="flex flex-1 h-full items-end">
            <p className="font-montserrat font-normal text-white m-0 text-[20px] leading-[1.5]">
              We are a new-generation communications agency built on principle, driven by meaning, and dedicated to helping brands move with intelligence and intention.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Hero - visible below 1024px */}
      <div className="flex lg:hidden flex-col items-start w-full px-6 pt-[320px] pb-[206px]">
        <div className="flex flex-col items-start w-full gap-8 pb-5">
          {/* Heading with embedded video */}
          <h1 className="font-montserrat font-bold text-white m-0 p-0 text-[26px] leading-[1.51] w-[253px]">
            Meet MKYCOMM,
            <br />
            Where{' '}
            <span className="inline-block relative overflow-hidden rounded align-middle w-[71px] h-[29px] mx-1">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                style={{ position: 'absolute', inset: 0 }}
              >
                <source src="/MeetMKY page video.mp4" type="video/mp4" />
              </video>
            </span>
            <br />
            clarity becomes culture.
          </h1>

          {/* Description */}
          <p className="font-montserrat font-normal text-white m-0 text-xs leading-[1.5]">
            We are a new-generation communications agency built on principle, driven by meaning, and dedicated to helping brands move with intelligence and intention.
          </p>
        </div>
      </div>
    </section>
  );
}
