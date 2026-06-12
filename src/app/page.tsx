import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { HeroSection } from "../components/sections/HeroSection";
import { JourneySection } from "../components/sections/JourneySection";
import { ShowcaseSection } from "../components/sections/ShowcaseSection";
import { ImpactSection } from "../components/sections/ImpactSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { CTASection } from "../components/sections/CTASection";
import { AnimatedBackground } from "../components/ui/AnimatedBackground";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10 flex-1 pt-20">
        <HeroSection />
        <JourneySection />
        <ShowcaseSection />
        <ImpactSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
}
