import Image from 'next/image';

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-end gap-1 ${className}`}>
      <Image
        src="/MKY COMM.png"
        alt="MKYCOMM"
        width={80}
        height={40}
        priority
        className="object-contain w-auto h-auto"
      />
      <div className="w-2 h-2 rounded-full bg-blue-500 mb-1" />
    </div>
  );
}
