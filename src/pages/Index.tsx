import StickyNav from "@/components/StickyNav";
import BotDemoSection from "@/components/BotDemoSection";
import CalendlySection from "@/components/CalendlySection";
import ForWhomSection from "@/components/ForWhomSection";
import ComparisonSection from "@/components/ComparisonSection";
import CalculatorSection from "@/components/CalculatorSection";
import ProcessSection from "@/components/ProcessSection";
import RiskReversalBanner from "@/components/RiskReversalBanner";
import TrustSection from "@/components/TrustSection";
import ObjectionSection from "@/components/ObjectionSection";
import FooterSection from "@/components/FooterSection";
import SectionCTA from "@/components/SectionCTA";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <StickyNav />
    <BotDemoSection />
    <CalendlySection />
    <ForWhomSection />
    <SectionCTA />
    <ComparisonSection />
    <CalculatorSection />
    <ProcessSection />
    <RiskReversalBanner />
    <SectionCTA text="Potenzial besprechen" />
    <TrustSection />
    <SectionCTA />
    <ObjectionSection />
    <SectionCTA text="Jetzt Erstgespräch buchen" />
    <FooterSection />
  </div>
);

export default Index;
