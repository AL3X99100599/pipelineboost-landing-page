import StickyNav from "@/components/StickyNav";
import HeroSection from "@/components/HeroSection";
import ForWhomSection from "@/components/ForWhomSection";
import BotDemoSection from "@/components/BotDemoSection";
import CalculatorSection from "@/components/CalculatorSection";
import ProcessSection from "@/components/ProcessSection";
import RiskReversalBanner from "@/components/RiskReversalBanner";
import TrustSection from "@/components/TrustSection";
import ObjectionSection from "@/components/ObjectionSection";
import CalendlySection from "@/components/CalendlySection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <StickyNav />
    <BotDemoSection />
    <CalendlySection />
    <HeroSection />
    <ForWhomSection />
    <CalculatorSection />
    <ProcessSection />
    <RiskReversalBanner />
    <TrustSection />
    <ObjectionSection />
    <FooterSection />
  </div>
);

export default Index;
