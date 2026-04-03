import { useEffect } from "react";
import { CalendarCheck, ArrowDown } from "lucide-react";

const CalendlySection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="calendly" className="py-20 sm:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glow-border bg-primary/5 mb-6">
            <CalendarCheck className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Erstgespräch buchen</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Lassen Sie uns sprechen — <span className="text-gradient">unverbindlich</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-2">
            15 Minuten. Wir prüfen gemeinsam, ob Ihre Daten Potenzial haben.
            Kein Pitch, kein Druck.
          </p>
          <ArrowDown className="w-5 h-5 text-primary mx-auto mt-4 animate-bounce" />
        </div>

        <div className="max-w-3xl mx-auto glass-card rounded-2xl overflow-hidden glow-border glow-card">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/alex99100599/video-call?hide_gdpr_banner=1&background_color=151a23&text_color=e0e4eb&primary_color=34d399"
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default CalendlySection;
