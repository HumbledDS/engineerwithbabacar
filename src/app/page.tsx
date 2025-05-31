import { HeroSection } from '@/components/sections/HeroSection';
import { ExpertiseSection } from '@/components/sections/ExpertiseSection';
import { FeaturedProjectsSection } from '@/components/sections/FeaturedProjectsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { LatestContentSection } from '@/components/sections/LatestContentSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExpertiseSection />
      <FeaturedProjectsSection />
      <TestimonialsSection />
      <LatestContentSection />
      <FinalCTASection />
    </>
  );
}
