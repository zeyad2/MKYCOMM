import Navbar from '@/components/navigation/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import VideoSection from '@/components/sections/VideoSection';
import BackgroundImageSection from '@/components/sections/BackgroundImageSection';
import JourneySection from '@/components/sections/JourneySection';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <VideoSection />
      <BackgroundImageSection />
      <JourneySection />
    </main>
  );
}
