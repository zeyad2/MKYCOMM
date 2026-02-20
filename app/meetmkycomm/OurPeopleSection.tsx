import Image from 'next/image';

type Person = {
  id: number;
  name: string;
  role: string;
  bio: string;
};

// Images are numbered row-first (left→right across 4 cols, then next row down)
// Row 1: 1,2,3,4 | Row 2: 5,6,7,8 | Row 3: 9,10,11,12 | Row 4: 13,14,15,16
const col1: Person[] = [
  {
    id: 1,
    name: 'Mahmoud Youssef',
    role: 'Managing Director',
    bio: 'Awarded with passion and enthusiasm, I lead with utter vision to foster creativity, consistency, and great sense of responsibility, aiming to build a true family with one objective, reshape the media scene.',
  },
  {
    id: 5,
    name: 'Khaled Talaat',
    role: 'Media Buyer',
    bio: 'Driven by data and creativity, I craft media strategies that maximize reach and deliver real results for our clients.',
  },
  {
    id: 9,
    name: 'Osama Tunkar',
    role: 'GCC Lead',
    bio: 'Bridging cultures and markets across the Gulf, I build meaningful connections that help brands thrive in the region.',
  },
  {
    id: 13,
    name: 'Waheed Khaled',
    role: 'Full Stack Developer',
    bio: 'Turning ideas into seamless digital experiences, I build the technology that powers our team and our clients.',
  },
];

const col2: Person[] = [
  {
    id: 2,
    name: 'Mohamed Ismail',
    role: 'Senior Graphic Designer',
    bio: 'I translate complex ideas into bold visual narratives, blending artistry with strategic thinking to make brands unforgettable.',
  },
  {
    id: 6,
    name: 'Mohamed Elkerdany',
    role: 'Account Manager',
    bio: 'The bridge between vision and execution, I ensure every client partnership is built on trust, clarity, and results.',
  },
  {
    id: 10,
    name: 'Mariam Mesbah',
    role: 'Account Manager',
    bio: 'I champion our clients\' goals with dedication, turning strategy into stories that resonate and campaigns that convert.',
  },
  {
    id: 14,
    name: 'Gergs Amen',
    role: 'Accountant',
    bio: 'Behind every great campaign is a solid financial foundation — I keep our numbers sharp so creativity can flourish.',
  },
];

const col3: Person[] = [
  {
    id: 3,
    name: 'Ahmed Elmontaser',
    role: 'Senior Graphic Designer',
    bio: 'Design is my language. I craft visuals that speak louder than words and leave lasting impressions on every audience.',
  },
  {
    id: 7,
    name: 'Salma Ibrahim',
    role: 'Graphic Designer',
    bio: 'With an eye for detail and a heart full of creativity, I design experiences that connect brands to people.',
  },
  {
    id: 11,
    name: 'Omar Hashad',
    role: 'UI/UX Designer',
    bio: 'I design interfaces that feel intuitive and look beautiful — where user needs and brand identity meet seamlessly.',
  },
  {
    id: 15,
    name: 'Mariam ElShabrawy',
    role: 'UI/UX Designer',
    bio: 'I believe great design solves real problems. Every pixel I place is purposeful, human-centred, and built to last.',
  },
];

const col4: Person[] = [
  {
    id: 4,
    name: 'Esraa Osama',
    role: 'HR Manager',
    bio: 'People are the heart of everything we do. I nurture our culture, grow our talent, and keep the family strong.',
  },
  {
    id: 8,
    name: 'Gina Shawqi',
    role: 'Social Media Specialist',
    bio: 'I live and breathe social media — crafting content that sparks conversations, builds communities, and drives engagement.',
  },
  {
    id: 12,
    name: 'Saif Mousa',
    role: 'Graphic Designer',
    bio: 'Every design tells a story. I make sure ours are captivating, consistent, and crafted with intention.',
  },
  {
    id: 16,
    name: 'Sandy El Sharabasy',
    role: 'Video Editor',
    bio: 'I shape raw footage into compelling narratives — blending rhythm, motion, and emotion into every frame.',
  },
];

// Flat list for mobile — in row-first order (matches file numbering 1→16)
const allPeople: Person[] = [
  col1[0], col2[0], col3[0], col4[0],
  col1[1], col2[1], col3[1], col4[1],
  col1[2], col2[2], col3[2], col4[2],
  col1[3], col2[3], col3[3], col4[3],
];

function PersonCard({ id, name, role, bio }: Person) {
  return (
    <div className="group flex flex-col gap-[16px] shrink-0 w-full cursor-pointer">
      {/* Image with hover overlay */}
      <div className="h-[300px] relative rounded-[16px] w-full overflow-hidden">
        <Image
          src={`/people-images/person-${id}.png`}
          alt={name}
          fill
          className="object-cover object-top transition-[filter] duration-300 group-hover:brightness-50"
          sizes="(max-width: 1024px) 282px, 25vw"
        />

        {/* Dark overlay — rgba(15,15,15,0.85) per Figma */}
        <div
          className="absolute inset-0 rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'rgba(15, 15, 15, 0.85)' }}
          aria-hidden="true"
        />

        {/* Bio text — centred over the image on hover */}
        <div className="absolute inset-0 flex items-center justify-center p-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="font-montserrat font-normal text-[14px] leading-[1.2] text-white text-center m-0">
            {bio}
          </p>
        </div>
      </div>

      {/* Name & role */}
      <div className="flex flex-col gap-[4px]">
        <p className="font-montserrat font-normal text-[16px] leading-[1.05] text-[#797979] m-0 transition-colors duration-300">
          {role}
        </p>
        <p className="font-montserrat font-medium text-[20px] leading-[1.05] text-white m-0">
          {name}
        </p>
      </div>
    </div>
  );
}

export default function OurPeopleSection() {
  return (
    <section className="bg-black">

      {/* ── Desktop (lg+) ── */}
      <div className="hidden lg:block">
        <div className="mx-auto max-w-[1440px] px-[120px] py-[56px]">

          {/* Section header */}
          <div className="flex flex-col gap-[32px]">
            <div className="flex gap-[12px] items-center">
              <div
                className="rounded-full shrink-0 bg-[#000FFF]"
                style={{ width: 33, height: 32 }}
                aria-hidden="true"
              />
              <h2 className="font-montserrat font-bold text-[36px] leading-[1.05] text-white m-0">
                Our People
              </h2>
            </div>

            <p className="font-montserrat font-normal text-[20px] leading-[1.5] text-[#797979] m-0">
              Meet the heartbeat of each step along the way! A family of diverse talents and
              storytellers. Bounded with passion and love, birthing life into narratives.
            </p>
          </div>

          {/* 4-column masonry grid */}
          <div className="flex gap-[24px] items-start mt-[32px]">

            {/* Column 1 — no top offset */}
            <div className="flex-1 flex flex-col gap-[32px]">
              {col1.map(p => <PersonCard key={p.id} {...p} />)}
            </div>

            {/* Column 2 — 80px top offset */}
            <div className="flex-1 flex flex-col gap-[32px] pt-[80px]">
              {col2.map(p => <PersonCard key={p.id} {...p} />)}
            </div>

            {/* Column 3 — no top offset */}
            <div className="flex-1 flex flex-col gap-[32px]">
              {col3.map(p => <PersonCard key={p.id} {...p} />)}
            </div>

            {/* Column 4 — 80px top offset */}
            <div className="flex-1 flex flex-col gap-[32px] pt-[80px]">
              {col4.map(p => <PersonCard key={p.id} {...p} />)}
            </div>

          </div>
        </div>
      </div>

      {/* ── Mobile (< lg) ── */}
      {/* Simple CSS horizontal scroll — to be upgraded to a carousel library once chosen */}
      <div className="lg:hidden py-[24px]">

        {/* Header */}
        <div className="flex flex-col gap-[16px] px-[24px] mb-[24px]">
          <div className="flex gap-[12px] items-center">
            <div
              className="rounded-full shrink-0 bg-[#000FFF]"
              style={{ width: 10, height: 10 }}
              aria-hidden="true"
            />
            <h2 className="font-montserrat font-bold text-[18px] leading-[1.05] text-white m-0">
              Our People
            </h2>
          </div>
          <p className="font-montserrat font-normal text-[10px] leading-[1.5] text-[#797979] m-0">
            Meet the heartbeat of each step along the way! A family of diverse talents and
            storytellers. Bounded with passion and love, birthing life into narratives.
          </p>
        </div>

        {/* Scroll track with fade edges */}
        <div className="relative" style={{ height: 358 }}>

          {/* Left fade */}
          <div
            className="absolute inset-y-0 left-0 z-10 pointer-events-none"
            style={{ width: 120, background: 'linear-gradient(to right, #000000 0%, rgba(0,0,0,0) 100%)' }}
            aria-hidden="true"
          />

          {/* Right fade */}
          <div
            className="absolute inset-y-0 right-0 z-10 pointer-events-none"
            style={{ width: 120, background: 'linear-gradient(to left, #000000 0%, rgba(0,0,0,0) 100%)' }}
            aria-hidden="true"
          />

          {/* Horizontally scrollable row */}
          <div
            className="overflow-x-auto scrollbar-hide flex gap-[16px] items-center px-[24px] h-full"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' } as React.CSSProperties}
          >
            {allPeople.map(p => (
              <div key={p.id} className="group shrink-0 flex flex-col gap-[16px]" style={{ width: 282 }}>
                <div className="relative rounded-[16px] overflow-hidden" style={{ width: 282, height: 300 }}>
                  <Image
                    src={`/people-images/person-${p.id}.png`}
                    alt={p.name}
                    fill
                    className="object-cover object-top transition-[filter] duration-300 group-hover:brightness-50"
                    sizes="282px"
                  />
                  <div
                    className="absolute inset-0 rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'rgba(15, 15, 15, 0.85)' }}
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 flex items-center justify-center p-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-montserrat font-normal text-[14px] leading-[1.2] text-white text-center m-0">
                      {p.bio}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <p className="font-montserrat font-normal text-[16px] leading-[1.05] text-[#797979] m-0">
                    {p.role}
                  </p>
                  <p className="font-montserrat font-medium text-[20px] leading-[1.05] text-white m-0">
                    {p.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
