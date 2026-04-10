import { Check, X } from "lucide-react";

const ForWhomSection = () => {
  const fits = [
    "Sie haben mind. 1.000 Kontakte im CRM, die nicht gekauft haben",
    "Sie verkaufen Solaranlagen im deutschen Markt",
    "Sie wollen Umsatz aus bestehenden Daten — ohne neue Leadkosten",
    "Sie sind bereit, einen strukturierten Datenexport bereitzustellen",
  ];

  const noFits = [
    "Sie haben weniger als 1.000 Kontakte",
    "Sie verkaufen keine Solarprodukte",
    "Sie suchen eine Full-Service-Agentur",
    "Sie erwarten Wunder ohne Datenqualität",
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          Für wen ist das <span className="text-gradient">gedacht?</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Fit */}
          <div className="glass-card rounded-2xl p-8 glow-border">
            <h3 className="text-xl font-semibold mb-6 text-primary">Das passt ✓</h3>
            <ul className="space-y-4">
              {fits.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-secondary-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* No fit */}
          <div className="glass-card rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-semibold mb-6 text-muted-foreground">Nicht das Richtige ✕</h3>
            <ul className="space-y-4">
              {noFits.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhomSection;
