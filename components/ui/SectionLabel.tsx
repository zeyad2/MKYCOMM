interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="w-8 h-8 rounded-full bg-[#FFE70B]" />
      <span className="text-4xl font-bold text-white">{children}</span>
    </div>
  );
}
