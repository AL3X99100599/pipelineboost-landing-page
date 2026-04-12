import StickyNav from "@/components/StickyNav";
import HeroSection from "@/components/HeroSection";
import BotDemoSection from "@/components/BotDemoSection";
import ComparisonSection from "@/components/ComparisonSection";
import ForWhomSection from "@/components/ForWhomSection";
import CalculatorSection from "@/components/CalculatorSection";
import ProcessSection from "@/components/ProcessSection";
import TrustSection from "@/components/TrustSection";
import RiskReversalBanner from "@/components/RiskReversalBanner";
import ObjectionSection from "@/components/ObjectionSection";
import CalendlySection from "@/components/CalendlySection";
import FooterSection from "@/components/FooterSection";
import SectionCTA from "@/components/SectionCTA";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <StickyNav />
    <HeroSection />
    <BotDemoSection />
    <ComparisonSection />
    <ForWhomSection />
    <SectionCTA />
    <CalculatorSection />
    <ProcessSection />
    <TrustSection />
    <RiskReversalBanner />
    <SectionCTA text="Potenzial besprechen" />
    <ObjectionSection />
    <CalendlySection />
    <FooterSection />
  </div>
);

export default Index;
