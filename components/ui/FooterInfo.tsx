export default function FooterInfo() {
  return (
    <div className="flex flex-col gap-3 text-sm">
      <a
        href="mailto:hello@mkycomm.com"
        className="text-white/70 hover:text-white transition-colors"
      >
        hello@mkycomm.com
      </a>
      <a
        href="tel:+1234567890"
        className="text-white/70 hover:text-white transition-colors"
      >
        +1 (234) 567-890
      </a>
    </div>
  );
}
