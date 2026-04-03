import { ArrowRight, Zap, Shield, Clock } from "lucide-react";

const HeroSection = () => {
  const scrollToCalendly = () => {
    document.getElementById("calendly")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-20 sm:py-32">
        <div className="max-w-4xl mx-auto">
          {/* Tag */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full glow-border bg-primary/5 mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Performance-basiert · Kein Risiko</span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up-delay-1 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight mb-6">
            Ihre alten Leads sind{" "}
            <span className="text-gradient">bares Geld</span>.
            <br />
            <span className="text-muted-foreground">Wir holen es zurück.</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-up-delay-2 text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Wir reaktivieren Ihre ungenutzten CRM-Kontakte — vollautomatisch per KI-Bot.
            Sie zahlen nur für gebuchte, qualifizierte Termine.
            Kein Setup-Fee. Kein Retainer. Kein Risiko.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 mb-16">
            <button
              onClick={scrollToCalendly}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:brightness-110 transition-all duration-200 text-lg"
            >
              Erstgespräch buchen
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById("rechner")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 glass-card font-semibold rounded-lg hover:bg-secondary transition-all duration-200 text-lg text-foreground"
            >
              Umsatzpotenzial berechnen
            </button>
          </div>

          {/* Trust pills */}
          <div className="animate-fade-up-delay-3 flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>Keine Setupkosten</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>In 72h live</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              <span>Nur zahlen bei Ergebnis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
