'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const CARDS = [
  {
    title: "What's POC",
    text: "People of Cairo is where we get to say what we all want to say. POC is a lifestyle magazine, speaking to those who believe they don't belong, living on the bright streets of Cairo.",
    image: '/poc/img1.png',
    color: '#FFE70B'
  },
  {
    title: 'Why we exist?',
    text: "MKYCOMM was built by nomads, and having absolutely no power or control, we came to build our channel to speak up and let people know what we seek to achieve.",
    image: '/poc/img2.png',
    color: '#000FFF'
  },
  {
    title: 'What we Bring You',
    text: "We discuss everything we see worth looking at, with our people in mind. Mainly around music, business, fashion, food, and ideologies.",
    image: '/poc/img3.png',
    color: '#FFE70B'
  },
];

export default function OurMagazineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"] // Animation starts when section top hits viewport top
  });

  // Card Settings
  const CARD_HEIGHT = 500;
  const STACK_GAP = 80; // How much of the title bar stays visible

  // Mapping the scroll:
  // Card 1 stays static.
  // Card 2: Moves from 100% down to STACK_GAP during the first half of scroll
  const card2Y = useTransform(scrollYProgress, [0.1, 0.45], ["100vh", `${STACK_GAP}px`]);
  
  // Card 3: Moves from 100% down to STACK_GAP * 2 during the second half
  const card3Y = useTransform(scrollYProgress, [0.55, 0.9], ["100vh", `${STACK_GAP * 2}px`]);

  // Optional: Scale down background cards slightly as they get covered
  const card1Scale = useTransform(scrollYProgress, [0.1, 0.45], [1, 0.95]);
  const card2Scale = useTransform(scrollYProgress, [0.55, 0.9], [1, 0.95]);

  return (
    <section 
      ref={containerRef} 
      className="relative bg-black" 
      style={{ height: '400vh' }} // Increased height = slower/more controlled scroll
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-5xl h-[600px] mx-auto px-4">
          
          {/* CARD 1 (Bottom-most) */}
          <motion.div 
            style={{ scale: card1Scale, zIndex: 1 }}
            className="absolute inset-0 bg-[#141414] rounded-3xl border border-white/10 p-8 flex gap-8"
          >
            <CardLayout card={CARDS[0]} />
          </motion.div>

          {/* CARD 2 */}
          <motion.div 
            style={{ y: card2Y, scale: card2Scale, zIndex: 2 }}
            className="absolute inset-0 bg-[#141414] rounded-3xl border border-white/10 p-8 flex gap-8 shadow-[-20px_-20px_50px_rgba(0,0,0,0.8)]"
          >
            <CardLayout card={CARDS[1]} />
          </motion.div>

          {/* CARD 3 (Top-most) */}
          <motion.div 
            style={{ y: card3Y, zIndex: 3 }}
            className="absolute inset-0 bg-[#141414] rounded-3xl border border-white/10 p-8 flex gap-8 shadow-[-20px_-20px_50px_rgba(0,0,0,0.8)]"
          >
            <CardLayout card={CARDS[2]} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function CardLayout({ card }: { card: typeof CARDS[0] }) {
  return (
    <div className="flex w-full h-full gap-8">
      <div className="w-1/2 flex flex-col justify-between py-4">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: card.color }} />
            <h2 className="text-4xl font-bold text-white">{card.title}</h2>
          </div>
          <p className="text-zinc-400 leading-relaxed text-lg">{card.text}</p>
        </div>
      </div>
      <div className="w-1/2 relative rounded-2xl overflow-hidden bg-zinc-800">
        <Image src={card.image} alt={card.title} fill className="object-cover" />
      </div>
    </div>
  );
}