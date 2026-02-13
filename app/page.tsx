import Navbar from '@/components/navigation/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import VideoSection from '@/components/sections/VideoSection';
import JourneySection from '@/components/sections/JourneySection';
import CreatorsSection from '@/components/sections/CreatorsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import BrandStatementSection from '@/components/sections/BrandStatementSection';
import WorkSection from '@/components/sections/WorkSection';
import FooterSection from '@/components/sections/FooterSection';
import BlogsSliderSection from '@/components/sections/BlogsSliderSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <div className="relative">
        <Navbar />
        <HeroSection />
      </div>
      <VideoSection />
      <JourneySection />
      <CreatorsSection />
      <ServicesSection />
      <BrandStatementSection />
      <WorkSection />
      <BlogsSliderSection />
      <FooterSection />
    </main>
  );
}
