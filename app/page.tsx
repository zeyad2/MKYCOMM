import Navbar from '@/components/navigation/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import VideoSection from '@/components/sections/VideoSection';
import CreatorsSection from '@/components/sections/CreatorsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import BrandStatementSection from '@/components/sections/BrandStatementSection';
import WorkSection from '@/components/sections/WorkSection';
import FooterSection from '@/components/sections/FooterSection';
import BlogsSliderSection from '@/components/sections/BlogsSliderSection';
import BackgroundImageSection from '@/components/sections/BackgroundImageSection';
import CTAImageSection from '@/components/sections/CTAImageSection';
import CTATextSection from '@/components/sections/CTATextSection';
import OurPulloffsSection from '@/components/sections/OurPulloffsSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <div className="relative overflow-x-hidden">
        <Navbar />
        <HeroSection />
      </div>
      <VideoSection />
      <BackgroundImageSection />
      <OurPulloffsSection />
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
