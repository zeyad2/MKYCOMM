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
      className="flex flex-col lg:flex-row gap-8 items-end justify-center pb-6 border-b border-[#797979]">
      {/* Content */}
      <div className="flex-1 flex flex-col gap-2 justify-end min-w-0">
        <h3 className="text-xl lg:text-[24px] font-medium text-white leading-[1.05] max-w-[346px]">
          {title}
        </h3>
        <p className="text-[12px] text-[#696666] font-[400] leading-[1.5]">
          {description}
        </p>
      </div>

      {/* Image */}
      <div className="w-full lg:w-[638px] h-[150px] p-[24px] relative rounded-[16px] overflow-hidden flex-shrink-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
