interface JourneyNodeProps {
  color?: 'yellow' | 'blue';
  className?: string;
}

export default function JourneyNode({ color = 'yellow', className = '' }: JourneyNodeProps) {
  const fillColor = color === 'yellow' ? '#F5C842' : '#3B82F6';

  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer glow */}
      <circle
        cx="13"
        cy="13"
        r="13"
        fill={fillColor}
        opacity="0.2"
      />
      {/* Main node */}
      <circle
        cx="13"
        cy="13"
        r="8"
        fill={fillColor}
      />
      {/* Inner highlight */}
      <circle
        cx="13"
        cy="13"
        r="4"
        fill="white"
        opacity="0.3"
      />
    </svg>
  );
}
