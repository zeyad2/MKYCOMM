interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-2 text-sm font-medium ${className}`}>
      <span className="w-2 h-2 rounded-full bg-[#F5C842]" />
      <span className="text-white/90">{children}</span>
    </div>
  );
}
