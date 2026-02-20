'use client';

import { useState } from 'react';

const YELLOW = '#FFE70B';
const BLUE = '#000FFF';
const GREY = '#797979';

const achievements = [
  {
    id: 1,
    title: 'We Created',
    circleColor: 'yellow' as const,
    description:
      'more than a 100 original productions'
  },
  {
    id: 2,
    title: 'We Dominated',
    circleColor: 'blue' as const,
    description:
      'the west of cairo through every available gossip'
  },
  {
    id: 3,
    title: 'We Created',
    circleColor: 'yellow' as const,
    description:
      'an 80% Brand Recall'
  },
];

type CircleColor = 'yellow' | 'blue';

function circleHex(color: CircleColor) {
  return color === 'yellow' ? YELLOW : BLUE;
}
function invertedColor(color: CircleColor): CircleColor {
  return color === 'yellow' ? 'blue' : 'yellow';
}

/* ── Desktop card ──────────────────────────────────────────────────────────── */
function DesktopCard({
  achievement,
}: {
  achievement: (typeof achievements)[0];
}) {
  const [hovered, setHovered] = useState(false);
  const dotColor = hovered
    ? invertedColor(achievement.circleColor)
    : achievement.circleColor;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: 1,
        minWidth: 0,
        backgroundColor: hovered ? '#262626' : '#181818',
        borderRadius: 16,
        padding: 16,
        cursor: 'default',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'background-color 0.3s ease, transform 0.3s ease',
      }}
    >
      {/* Header row */}
      <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
        {/* Circle */}
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: '50%',
            backgroundColor: circleHex(dotColor),
            flexShrink: 0,
            marginTop: 2,
            transition: 'background-color 0.3s ease',
          }}
        />
        <p
          style={{
            fontFamily: 'var(--font-montserrat), sans-serif',
            fontSize: 24,
            fontWeight: 400,
            color: '#ffffff',
            lineHeight: 1.05,
            margin: 0,
          }}
        >
          {achievement.title}
        </p>
      </div>

      {/* Description — slides down then fades in */}
      <div
        style={{
          maxHeight: hovered ? 160 : 0,
          overflow: 'hidden',
          opacity: hovered ? 1 : 0,
          transition: 'max-height 0.55s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease 0.12s',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-montserrat), sans-serif',
            fontSize: 16,
            fontWeight: 400,
            color: GREY,
            lineHeight: 1.5,
            margin: 0,
            paddingTop: 16,
          }}
        >
          {achievement.description}
        </p>
      </div>
    </div>
  );
}

/* ── Mobile card (accordion) ───────────────────────────────────────────────── */
function MobileCard({
  achievement,
}: {
  achievement: (typeof achievements)[0];
}) {
  const [open, setOpen] = useState(false);
  const dotColor = open
    ? invertedColor(achievement.circleColor)
    : achievement.circleColor;

  return (
    <div
      style={{
        backgroundColor: '#181818',
        borderRadius: 8,
        padding: 16,
        width: '100%',
      }}
    >
      {/* Trigger row */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex',
          gap: 8,
          alignItems: 'center',
          width: '100%',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
        }}
      >
        {/* Small circle */}
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            backgroundColor: circleHex(dotColor),
            flexShrink: 0,
            transition: 'background-color 0.3s ease',
          }}
        />

        <span
          style={{
            fontFamily: 'var(--font-montserrat), sans-serif',
            fontSize: 16,
            fontWeight: 400,
            color: '#ffffff',
            lineHeight: 1.05,
            flex: 1,
            textAlign: 'left',
          }}
        >
          {achievement.title}
        </span>

        {/* Chevron */}
        <div
          style={{
            padding: 4,
            flexShrink: 0,
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.25s ease',
          }}
        >
          <svg
            width="17"
            height="10"
            viewBox="0 0 17 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L8.5 8.5L16 1"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      {/* Description — animated */}
      <div
        style={{
          display: 'grid',
          gridTemplateRows: open ? '1fr' : '0fr',
          transition: 'grid-template-rows 0.35s ease',
        }}
      >
        <div style={{ overflow: 'hidden' }}>
          <p
            style={{
              fontFamily: 'var(--font-montserrat), sans-serif',
              fontSize: 14,
              fontWeight: 400,
              color: GREY,
              lineHeight: 1.5,
              margin: 0,
              paddingTop: 16,
            }}
          >
            {achievement.description}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Section ───────────────────────────────────────────────────────────────── */
export default function OurAchievementsSection() {
  return (
    <section style={{ backgroundColor: '#000000', width: '100%' }}>
      {/* ── Desktop (≥ 1024px) ── */}
      <div className="hidden lg:block" style={{ paddingTop: 48, paddingBottom: 56 }}>
        {/* Heading */}
        <div style={{ paddingLeft: '8.333%', paddingRight: '8.333%', marginBottom: 56 }}>
          <h2
            style={{
              fontFamily: 'var(--font-montserrat), sans-serif',
              fontSize: 36,
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            Our Achievements
          </h2>
        </div>

        {/* Cards row — matches the 8.333% side padding used by the heading */}
        <div
          style={{
            paddingLeft: '8.333%',
            paddingRight: '8.333%',
            display: 'flex',
            gap: 24,
            alignItems: 'flex-start',
          }}
        >
          {achievements.map((a) => (
            <DesktopCard key={a.id} achievement={a} />
          ))}
        </div>
      </div>

      {/* ── Mobile (< 1024px) ── */}
      <div className="lg:hidden" style={{ padding: 24 }}>
        {/* Heading */}
        <h2
          style={{
            fontFamily: 'var(--font-montserrat), sans-serif',
            fontSize: 18,
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.05,
            margin: 0,
            marginBottom: 24,
          }}
        >
          Our Achievements
        </h2>

        {/* Accordion cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {achievements.map((a) => (
            <MobileCard key={a.id} achievement={a} />
          ))}
        </div>
      </div>
    </section>
  );
}
