import Navbar from '@/components/navigation/Navbar';
import HeroSection from './_components/HeroSection';
import VideoSection from './_components/VideoSection';
import CreatorsSection from './_components/CreatorsSection';
import ServicesSection from './_components/ServicesSection';
import BrandStatementSection from './_components/BrandStatementSection';
import WorkSection from './_components/WorkSection';
import FooterSection from '@/components/sections/FooterSection';
import BlogsSliderSection from './_components/BlogsSliderSection';
import BackgroundImageSection from './_components/BackgroundImageSection';
import CTAImageSection from './_components/CTAImageSection';
import CTATextSection from './_components/CTATextSection';
import OurPulloffsSection from './_components/OurPulloffsSection';

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
