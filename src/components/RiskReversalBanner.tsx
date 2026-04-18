import { Shield } from "lucide-react";

const RiskReversalBanner = () => (
  <section className="py-16 sm:py-20">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center glass-card rounded-2xl p-10 sm:p-14 glow-border glow-card">
        <Shield className="w-12 h-12 text-primary mx-auto mb-6" />
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Kein Ergebnis? <span className="text-gradient">Keine Rechnung.</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Sie tragen kein finanzielles Risiko. Kein Setup-Fee, kein Retainer, keine Vorabkosten.
          Die ersten 5 Termine sind kostenlos zum Testen. Danach zahlen Sie nur bei Ergebnis:
          zwischen €100 und €200 pro Termin, je nach Datenqualität und Qualifikationsaufwand.
        </p>
      </div>
    </div>
  </section>
);

export default RiskReversalBanner;
