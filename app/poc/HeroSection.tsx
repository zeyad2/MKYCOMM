import Image from 'next/image';

export default function POCHeroSection() {
  return (
    <section className="bg-black w-full overflow-hidden">

      {/* ── Desktop (≥ 1024px) ── */}
      <div className="hidden lg:block">

      
        <div className="px-[120px] pt-[200px] pb-[56px]">
          <Image
            src="/poc/Artboard.png"
            alt="People of Cairo"
            width={270}
            height={142}
            priority
          />
        </div>

     
       
        <div
          className="flex items-start"
          style={{ paddingBottom: '5.42%' }}
        >
          <Image
            src="/poc/left-img.png"
            alt=""
            width={635}
            height={321}
            style={{
              width: '44.10%',
              height: 'auto',
              marginLeft: '3.54%',
              marginTop: '1.39%',
              flexShrink: 0,
            }}
          />

          {/* Wrapper needed only for the horizontal mirror transform */}
          <div
            style={{
              width: '24.58%',
              marginLeft: '18.33%',
              marginTop: '2.92%',
              flexShrink: 0,
              transform: 'scaleX(-1)',
            }}
          >
            <Image
              src="/poc/right-img.png"
              alt=""
              width={354}
              height={474}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>

      </div>

      {/* ── Mobile (< 1024px) ── */}
  
   
      <div
        className="lg:hidden flex flex-col overflow-hidden"
        style={{ height: 842, paddingTop: 126 }}
      >
        <Image
          src="/poc/left-img.png"
          alt=""
          width={305}
          height={154}
          style={{ marginTop: 13, marginLeft: 11, flexShrink: 0 }}
        />

        <div style={{ marginTop: 54, alignSelf: 'center', flexShrink: 0 }}>
          <Image
            src="/poc/Artboard.png"
            alt="People of Cairo"
            width={150}
            height={78}
            priority
          />
        </div>

        <Image
          src="/poc/right-img.png"
          alt=""
          width={243}
          height={324}
          style={{ marginTop: 109, marginLeft: 69, flexShrink: 0 }}
        />
      </div>

    </section>
  );
}
