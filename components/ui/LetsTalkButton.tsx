'use client';

import { useRef, useState } from 'react';

interface LetsTalkButtonProps {
  className?: string;
}

export default function LetsTalkButton({ className }: LetsTalkButtonProps) {
  const [active, setActive] = useState(false);
  const isTouch = useRef(false);

  // Wrapper: creates layout space so text shifts right.
  // Dot: slides in from the right (from inside the text) to its resting position.
  const wrapperStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    overflow: 'hidden',
    width: active ? '0.6em' : '0',
    marginRight: active ? '0.2em' : '0',
    flexShrink: 0,
    transition: 'width 0.5s cubic-bezier(0.22,1,0.36,1), margin-right 0.5s cubic-bezier(0.22,1,0.36,1)',
  };

  // Dot stays at its natural size always; it slides in from translateX(100%)
  // (i.e. from where the text starts) to translateX(0).
  const dotStyle: React.CSSProperties = {
    display: 'block',
    width: '0.5em',
    height: '0.5em',
    borderRadius: '50%',
    backgroundColor: 'currentColor',
    flexShrink: 0,
    transform: active ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1)',
  };

  return (
    <button
      type="button"
      className={`ltalk-btn${className ? ` ${className}` : ''}`}
      style={{
        color: active ? '#797979' : undefined,
        transition: 'color 0.4s ease-out',
      }}
      onTouchStart={() => { isTouch.current = true; }}
      onMouseEnter={() => { if (!isTouch.current) setActive(true); }}
      onMouseLeave={() => { if (!isTouch.current) setActive(false); }}
      onClick={() => { if (isTouch.current) setActive(v => !v); }}
    >
      <span aria-hidden="true" style={wrapperStyle}>
        <span style={dotStyle} />
      </span>
      Let&apos;s Talk
    </button>
  );
}
