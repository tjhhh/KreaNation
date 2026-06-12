import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { HeroSection } from "../components/sections/HeroSection";
import { JourneySection } from "../components/sections/JourneySection";
import { ShowcaseSection } from "../components/sections/ShowcaseSection";
import { ImpactSection } from "../components/sections/ImpactSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { CTASection } from "../components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-20">
        <HeroSection />
        <JourneySection />
        <ShowcaseSection />
        <ImpactSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
