import { ArrowRight } from "lucide-react";

const SectionCTA = ({ text = "Erstgespräch buchen" }: { text?: string }) => {
  const scrollToCalendly = () => {
    document.getElementById("calendly")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="text-center py-8">
      <button
        onClick={scrollToCalendly}
        className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:brightness-110 transition-all text-lg"
      >
        {text}
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
      <p className="text-xs text-muted-foreground mt-3">
        ✓ Kein Setup-Fee · ✓ Die ersten 5 Termine kostenlos · ✓ Danach €100–€200 je nach Qualität
      </p>
    </div>
  );
};

export default SectionCTA;
