import { ShieldCheck, FileText, TrendingUp, AlertCircle } from "lucide-react";

const points = [
  {
    icon: TrendingUp,
    title: "Wir nutzen das System selbst",
    desc: "Bevor wir es anderen anbieten, haben wir unsere eigene Lead-Datenbank reaktiviert. Ergebnis: €10.000–€30.000 zusätzlicher Umsatz aus Kontakten, die sonst nie wieder angesprochen worden wären.",
  },
  {
    icon: ShieldCheck,
    title: "Kein Ergebnis — keine Rechnung",
    desc: "Sie zahlen nur für gebuchte, qualifizierte Termine. Kein Retainer, kein Setup-Fee, keine versteckten Kosten. Wenn wir nichts liefern, verdienen wir nichts.",
  },
  {
    icon: FileText,
    title: "Transparentes Reporting",
    desc: "Sie sehen jederzeit, wie viele Leads angesprochen wurden, wie viele geantwortet haben und wie viele Termine gebucht wurden. Keine Black Box.",
  },
  {
    icon: AlertCircle,
    title: "Keine falschen Versprechen",
    desc: "Die Ergebnisse hängen von Ihrer Datenqualität ab. Das kommunizieren wir offen — darum prüfen wir Ihre Daten vor dem Start und geben Ihnen eine ehrliche Einschätzung.",
  },
];

const TrustSection = () => (
  <section className="py-20 sm:py-28 bg-secondary/30">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Kein Risiko, volle Transparenz —{" "}
          <span className="text-gradient">so arbeiten wir</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Wir verkaufen keine Luftschlösser. Wir zeigen, was funktioniert — und fangen bei uns selbst an.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
        {points.map((p, i) => (
          <div key={i} className="glass-card rounded-2xl p-8 glow-border">
            <p.icon className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
