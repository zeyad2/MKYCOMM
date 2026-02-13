import Image from 'next/image';

export default function Logo({
  className = '',
  small = false,
  width,
  height,
  dotSize,
  dotColor,
}: {
  className?: string;
  small?: boolean;
  width?: number;
  height?: number;
  dotSize?: number;
  dotColor?: string;
}) {
  const w = width ?? (small ? 70 : 110);
  const h = height ?? (small ? 38 : 60);
  const dot = dotSize ?? (small ? 4.5 : 7);

  return (
    <div
      className={`group flex items-end ${small ? 'py-2.5 gap-[5px]' : 'py-4 gap-2'} ${className}`}
    >
      <Image
        src="/MKYLogo.svg"
        alt="MKYCOMM"
        width={w}
        height={h}
        priority
        className="object-contain"
      />
      <div
        className={`rounded-full transition-colors ${dotColor ? '' : 'bg-accent-blue group-hover:bg-accent-yellow-hover'}`}
        style={{ width: `${dot}px`, height: `${dot}px`, ...(dotColor ? { background: dotColor } : {}) }}
      />
    </div>
  );
}
