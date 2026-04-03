import { Upload, Cpu, CalendarCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Daten exportieren",
    desc: "Sie exportieren die Kontakte aus Ihrem CRM, die noch nicht gekauft haben. Mehr brauchen wir nicht.",
    time: "Tag 1",
  },
  {
    icon: Cpu,
    title: "Bot wird konfiguriert",
    desc: "Wir richten den KI-Bot auf Ihre Angebote und Zielgruppe ein. Erste Nachrichten gehen innerhalb von 72 Stunden raus.",
    time: "Tag 1–3",
  },
  {
    icon: CalendarCheck,
    title: "Termine kommen rein",
    desc: "Innerhalb von 96 Stunden können die ersten qualifizierten Termine in Ihrem Kalender stehen.",
    time: "Tag 4+",
  },
];

const ProcessSection = () => {
  const scrollToCalendly = () => {
    document.getElementById("calendly")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Von Daten zu Terminen in <span className="text-gradient">unter 4 Tagen</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Kein kompliziertes Onboarding. Kein wochenlanges Setup. Drei Schritte — fertig.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8 text-center glow-border hover:glow-card transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-3 group-hover:bg-primary/20 transition-colors">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-4 block">{step.time}</span>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={scrollToCalendly}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:brightness-110 transition-all text-lg"
          >
            Jetzt starten
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
