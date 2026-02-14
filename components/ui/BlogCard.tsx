interface BlogCardProps {
  tag: string;
  title: string;
  date: string;
  description: string;
  href?: string;
}

export default function BlogCard({
  tag,
  title,
  date,
  description,
  href = '#',
}: BlogCardProps) {
  return (
    <div className="flex flex-col justify-center items-start p-4 gap-4 w-[346px] min-w-[346px] bg-[#181818] rounded-2xl flex-shrink-0">
      {/* Image area with gradient overlay */}
      <div className="relative w-full h-[332px] rounded-[15px] overflow-hidden bg-[#444444]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,15,255,0.6)]" />

        {/* Tag badge */}
        <div className="absolute top-3 left-3 px-4 py-2.5 bg-white/10 rounded-full backdrop-blur-sm">
          <span className="text-white text-base font-medium leading-[105%] font-montserrat">
            {tag}
          </span>
        </div>

        {/* Title overlaid on image */}
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-2xl font-medium text-white leading-[105%] font-montserrat">
            {title}
          </h3>
        </div>
      </div>

      {/* Date */}
      <span className="text-xs text-[#747474] leading-[150%] font-montserrat">{date}</span>

      {/* Title below */}
      <h4 className="text-2xl font-medium text-white leading-[105%] font-montserrat">
        {title}
      </h4>

      {/* Description */}
      <p className="text-xs text-[#797979] leading-[105%] self-stretch font-montserrat">
        {description}
      </p>

      {/* Read more link */}
      <a
        href={href}
        className="text-base text-[#797979] leading-[150%] underline hover:text-white/70 transition-colors font-montserrat"
      >
        Read more
      </a>
    </div>
  );
}
