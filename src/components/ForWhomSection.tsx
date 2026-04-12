import { Check, X } from "lucide-react";

const ForWhomSection = () => {
  const fits = [
    "Sie investieren €50–€500 pro Lead — und ein Großteil davon hat nie gekauft",
    "Ihr Vertrieb ist auf Neuabschlüsse fokussiert, nicht auf das Nachfassen alter Kontakte",
    "Sie haben 1.000+ Kontakte im CRM, die seit Wochen oder Monaten unberührt liegen",
    "Sie wollen planbaren Umsatz aus bestehenden Daten — ohne neue Leadkosten",
  ];

  const noFits = [
    "Sie haben weniger als 500 verwertbare Kontakte",
    "Sie haben kein CRM und keine strukturierten Kontaktdaten",
    "Sie suchen eine Full-Service-Agentur für Neukundengewinnung",
    "Sie erwarten Ergebnisse ohne brauchbare Datengrundlage",
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Gebaut für Vertriebsteams, die{" "}
          <span className="text-gradient">zu viel für Leads zahlen</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          …und zu wenig daraus machen.
        </p>

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
