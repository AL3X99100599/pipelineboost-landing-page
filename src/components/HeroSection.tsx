import { ArrowRight, Zap, Shield, Clock, TrendingUp } from "lucide-react";

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
            Jeder Lead hat Sie{" "}
            <span className="text-gradient">€50–€500</span> gekostet.
            <br />
            <span className="text-muted-foreground">Wir reaktivieren die, die nie gekauft haben.</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-up-delay-2 text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Ihr Vertrieb schließt Neukunden ab. Alte CRM-Kontakte bleiben liegen.
            Unser KI-System macht aus diesen Kontakten gebuchte, qualifizierte Termine —
            ohne Fixkosten, ohne Setup-Fee. Sie zahlen nur bei Ergebnis.
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
              <TrendingUp className="w-4 h-4 text-primary" />
              <span>€10k–€30k Mehrumsatz aus eigenem CRM</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>Erste Termine in 96h</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>Nur zahlen bei Ergebnis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
