import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  isLast?: boolean;
}

export default function ServiceCard({
  title,
  description,
  imageSrc,
  imageAlt,
  isLast = false,
}: ServiceCardProps) {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-8 lg:gap-12 py-12 ${
        !isLast ? 'border-b border-white/10' : ''
      }`}
    >
      {/* Image */}
      <div className="w-full lg:w-1/3 h-[250px] lg:h-[300px] relative rounded-lg overflow-hidden flex-shrink-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center gap-4">
        <h3 className="text-2xl lg:text-3xl font-semibold text-white leading-tight">
          {title}
        </h3>
        <p className="text-base lg:text-lg text-white/70 leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>
    </div>
  );
}
