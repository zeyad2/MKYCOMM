import Image from 'next/image';

interface WorkCardProps {
  imageSrc: string;
  imageAlt: string;
  categories: string[];
}

export default function WorkCard({
  imageSrc,
  imageAlt,
  categories,
}: WorkCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-black/50 aspect-square">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />

      {/* Categories */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <span
              key={category}
              className="text-xs font-medium px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
