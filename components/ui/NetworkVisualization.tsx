export default function NetworkVisualization() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 837.5 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Network lines - yellow connecting lines */}
      <path
        d="M 18 104.5 L 565 13.5 L 706 139.5 L 819 150.5"
        stroke="#FFE70B"
        strokeWidth="1"
        fill="none"
      />

      {/* Blue nodes */}
      <circle cx="18" cy="104.5" r="13" fill="#3B82F6" opacity="0.8" />
      <circle cx="565" cy="13.5" r="13" fill="#3B82F6" opacity="0.8" />
      <circle cx="819" cy="150.5" r="13" fill="#3B82F6" opacity="0.8" />

      {/* Yellow center node */}
      <circle cx="706" cy="139.5" r="13" fill="#FFE70B" />

      {/* Glow effects */}
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <circle cx="18" cy="104.5" r="13" fill="#3B82F6" filter="url(#glow)" />
      <circle cx="565" cy="13.5" r="13" fill="#3B82F6" filter="url(#glow)" />
      <circle cx="819" cy="150.5" r="13" fill="#3B82F6" filter="url(#glow)" />
      <circle cx="706" cy="139.5" r="13" fill="#FFE70B" filter="url(#glow)" />
    </svg>
  );
}
