import { Phone, Zap, ArrowRight, XCircle, CheckCircle, BarChart3 } from "lucide-react";

const manualPoints = [
  "60–80 Anrufe pro Tag, pro Person. Bei 5.000 Kontakten dauert eine Runde Monate.",
  "Erreichbarkeit: 15–25 %. Der Rest geht nicht ran — und wird selten erneut versucht.",
  "Fixkosten: €3.000–€4.500/Monat — unabhängig davon, ob Termine rauskommen.",
  "Nach 2 Wochen schleicht sich Routine ein. Motivation und Gesprächsqualität sinken.",
  "Urlaub, Krankheit, Kündigung — und der Prozess steht still.",
  "Ihr Vertriebsteam soll Neukunden abschließen, nicht alte Listen abtelefonieren.",
];

const automatedPoints = [
  "Alle Kontakte werden parallel angesprochen — in Tagen, nicht Monaten.",
  "SMS wird gelesen, auch wenn niemand rangeht. Öffnungsrate: über 90 %.",
  "Keine Fixkosten. Sie zahlen nur, wenn qualifizierte Termine gebucht werden.",
  "Konsistente Qualität — rund um die Uhr, ohne Motivationstief.",
  "Kein Recruiting, keine Einarbeitung, keine Fluktuation.",
  "Ihr Vertrieb bekommt fertige Termine — und macht das, was er am besten kann: abschließen.",
];

const ComparisonSection = () => {
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Badge */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glow-border bg-primary/5">
            <BarChart3 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Die Zahlen sprechen für sich</span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-5">
            Warum <span className="text-gradient">90 % der alten Leads</span> nie wieder kontaktiert werden
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ihr Vertriebsteam schließt Neukunden ab — das ist ihr Job.
            Alte Kontakte nachzutelefonieren steht selten auf der Prioritätenliste.
            Und selbst wenn doch: Die Realität sieht ernüchternd aus.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
          {/* Manual */}
          <div className="glass-card rounded-2xl p-8 border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold">Manuelles Nachtelefonieren</h3>
            </div>
            <ul className="space-y-4">
              {manualPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive/70 mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Automated */}
          <div className="glass-card rounded-2xl p-8 glow-border glow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">KI-gestützte Reaktivierung</h3>
            </div>
            <ul className="space-y-4">
              {automatedPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary/80 mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Highlight Callout */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="rounded-2xl p-8 bg-primary/5 glow-border text-center">
            <p className="text-lg sm:text-xl font-semibold mb-2">
              Wenn jeder Lead Sie €50–€500 gekostet hat und 70–90 % nie gekauft haben:
            </p>
            <p className="text-lg sm:text-xl font-semibold text-gradient">
              Wie viel Investition liegt in Ihrem CRM, die niemand anfasst?
            </p>
          </div>
        </div>

        {/* CTA → Calculator */}
        <div className="text-center">
          <button
            onClick={() => document.getElementById("rechner")?.scrollIntoView({ behavior: "smooth" })}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:brightness-110 transition-all text-lg"
          >
            Potenzial berechnen
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-xs text-muted-foreground mt-3">
            ✓ Kein Risiko · ✓ Keine Fixkosten · ✓ Erste Termine in 96h
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
