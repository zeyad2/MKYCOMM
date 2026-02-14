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
import BackgroundImageSection from '@/components/sections/BackgroundImageSection';
import CTAImageSection from '@/components/sections/CTAImageSection';
import CTATextSection from '@/components/sections/CTATextSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <div className="relative">
        <Navbar />
        <HeroSection />
      </div>
      <VideoSection />
      <BackgroundImageSection />
      {/* <JourneySection /> */}
      <CreatorsSection />
      <ServicesSection />
      <BrandStatementSection />
      <WorkSection />
      <BlogsSliderSection />
      <CTATextSection />
      <CTAImageSection />
      <FooterSection />
    </main>
  );
}
