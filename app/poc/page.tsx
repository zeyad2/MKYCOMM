import Navbar from '@/components/navigation/Navbar';
import FooterSection from '@/components/sections/FooterSection';
import POCHeroSection from './HeroSection';
import OurAchievementsSection from './OurAchievementsSection';
import OurMagazineSection from './OurMagazineSection';
import OurVisionSection from './OurVisionSection';
import LetsTalkSection from '@/app/meetmkycomm/LetsTalkSection';

export const metadata = {
  title: 'POC — People of Cairo | MKYCOMM',
  description: 'People of Cairo — a proof of concept by MKYCOMM.',
};

export default function POCPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <div className="relative overflow-x-hidden">
        <Navbar />
        <POCHeroSection />
      </div>
      <OurAchievementsSection />
      {/* <OurMagazineSection /> */}
      <OurVisionSection />
      <LetsTalkSection />
      <FooterSection />
    </main>
  );
}
