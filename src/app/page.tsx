import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import CompatibilitySection from "@/components/sections/compatibility-section";
import FeaturesSection from "@/components/sections/features-section";
import HeroSection from "@/components/sections/hero-section";
import RequirementsSection from "@/components/sections/requirements-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CompatibilitySection />
        <RequirementsSection />
      </main>
      <Footer />
    </div>
  );
}
