import Image from 'next/image';

export default function BackgroundImageSection() {
  return (
    <section className="relative w-full h-[60vh] bg-black mt-24">
      <div className="relative w-full h-full">
        {/* Background image */}
        <Image
          src="/bg-img.png"
          alt="Background visual"
          fill
          className="object-cover"
          priority={false}
          quality={90}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Vector in the center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[700px] h-[300px] max-w-[90vw]">
            <Image
              src="/Vector 1.png"
              alt="Vector design"
              fill
              className="object-contain"
              priority={false}
            />

            {/* Ellipse at left vertex */}
            <div className="absolute top-1/2 left-[2%] w-12 h-12 -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/Ellipse 14.png"
                alt=""
                fill
                className="object-contain"
                priority={false}
              />
            </div>

            {/* Ellipse at top-right vertex */}
            <div className="absolute top-[25%] right-[1%] w-12 h-12 translate-x-1/2 -translate-y-1/2">
              <Image
                src="/Ellipse 14.png"
                alt=""
                fill
                className="object-contain"
                priority={false}
              />
            </div>

            {/* Ellipse at bottom-right vertex */}
            <div className="absolute bottom-[25%] right-[1%] w-12 h-12 translate-x-1/2 translate-y-1/2">
              <Image
                src="/Ellipse 14.png"
                alt=""
                fill
                className="object-contain"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
