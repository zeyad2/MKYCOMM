import Navbar from '@/components/navigation/Navbar';
import FooterSection from '@/components/sections/FooterSection';
import MeetMKYCOMMHeroSection from './HeroSection';
import ValuesSection from './ValuesSection';
import AwardsSection from './AwardsSection';
import OurFounderSection from './OurFounderSection';
import OurPeopleSection from './OurPeopleSection';
import OurClientsSection from './OurClientsSection';
import OurMagazineSection from './OurMagazineSection';
import OurStorySection from './OurStorySection';
import LetsTalkSection from './LetsTalkSection';

export const metadata = {
  title: 'Meet MKYCOMM - Where clarity becomes culture',
  description: 'We are a new-generation communications agency built on principle, driven by meaning, and dedicated to helping brands move with intelligence and intention.',
};

export default function MeetMKYCOMM() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <div className="relative overflow-x-hidden">
        <Navbar />
        <MeetMKYCOMMHeroSection />
      </div>
      <ValuesSection />
      <OurStorySection />
      <OurFounderSection />
      <AwardsSection />
      <OurPeopleSection />
      <OurClientsSection />
      <OurMagazineSection />
      <LetsTalkSection />
      <FooterSection />
    </main>
  );
}
