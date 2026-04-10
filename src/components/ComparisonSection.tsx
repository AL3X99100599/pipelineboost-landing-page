import { Phone, Zap, ArrowRight, XCircle, CheckCircle, UserX, Banknote, MessageSquareOff } from "lucide-react";

const telefonistPoints = [
  "Fixkosten jeden Monat, auch wenn nichts zurückkommt",
  "Erreicht nur, wer gerade rangeht",
  "Kapazität hängt an einer Person",
  "Urlaub, Krankheit, Fluktuation, Einarbeitung",
  "Alte Leads rutschen im Alltag oft wieder nach hinten",
  "Nachfassen muss intern immer wieder angestoßen werden",
];

const pipelinePoints = [
  "Keine Setup-Fee, kein Retainer, nur bei Ergebnis",
  "SMS wird gesehen, auch wenn niemand rangeht",
  "Ganze Lead-Segmente parallel aktivierbar",
  "Läuft konsistent nach definiertem Prozess",
  "Alte Leads werden systematisch reaktiviert",
  "Transparentes Reporting über Antworten, Qualifizierung und Termine",
];

const ComparisonSection = () => {
  const scrollToCalendly = () => {
    document.getElementById("calendly")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Badge */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glow-border bg-primary/5">
            <Phone className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Warum nicht einfach ein Telefonist?</span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-5">
            Warum das nicht einfach <span className="text-gradient">ein Telefonist</span> ist
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ein Telefonist kann alte Leads anrufen. Aber er bleibt ein fixer Kostenblock — und alte Leads werden trotzdem oft unregelmäßig bearbeitet.
            <br className="hidden sm:block" /><br className="hidden sm:block" />
            PipelineBoost setzt alte Leads strukturiert per SMS wieder in Bewegung, macht Antworten sichtbar und bringt nur qualifizierte Gespräche zurück in den Kalender.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
          {/* Telefonist */}
          <div className="glass-card rounded-2xl p-8 border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold">Telefonist</h3>
            </div>
            <ul className="space-y-4">
              {telefonistPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive/70 mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* PipelineBoost */}
          <div className="glass-card rounded-2xl p-8 glow-border glow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">PipelineBoost</h3>
            </div>
            <ul className="space-y-4">
              {pipelinePoints.map((point, i) => (
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
            <p className="text-lg sm:text-xl font-semibold mb-1">
              Ein guter Telefonist kostet jeden Monat fix.
            </p>
            <p className="text-lg sm:text-xl font-semibold text-gradient mb-6">
              PipelineBoost kostet erst dann, wenn qualifizierte Termine zurückkommen.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { icon: UserX, text: "Kein Recruiting" },
                { icon: Banknote, text: "Keine Fixkosten" },
                { icon: MessageSquareOff, text: 'Kein \u201Ewir müssten die Alt-Leads mal wieder anfassen\u201C' },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <Icon className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing Copy */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <p className="text-muted-foreground leading-relaxed mb-4">
            Das Problem ist selten, dass niemand telefonieren kann.
            <br />
            Das Problem ist, dass alte Leads im Alltag immer wieder nach hinten rutschen.
          </p>
          <p className="text-foreground font-medium leading-relaxed">
            Ein Telefonist arbeitet Listen ab.
            <br />
            PipelineBoost holt planbar Umsatz aus liegengebliebenen Chancen zurück.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={scrollToCalendly}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:brightness-110 transition-all text-lg"
          >
            Potenzial besprechen
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
