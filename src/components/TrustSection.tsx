import { ShieldCheck, FileText, Ban, Target } from "lucide-react";

const points = [
  {
    icon: ShieldCheck,
    title: "Kein Ergebnis, keine Rechnung",
    desc: "Sie zahlen nur für erreichte, qualifizierte Termine. Kein Retainer, kein Setup-Fee, keine versteckten Kosten.",
  },
  {
    icon: FileText,
    title: "Transparentes Reporting",
    desc: "Sie sehen jederzeit, wie viele Leads angesprochen wurden, wie viele geantwortet haben, und wie viele Termine gebucht wurden.",
  },
  {
    icon: Ban,
    title: "Keine falschen Versprechen",
    desc: "Wir zeigen keine gefälschten Case Studies und keine erfundenen Logos. Die Ergebnisse hängen von Ihrer Datenqualität ab — das kommunizieren wir offen.",
  },
  {
    icon: Target,
    title: "Spezialisiert auf Solar",
    desc: "Kein Bauchladen. Wir konzentrieren uns auf Datenreaktivierung für den deutschen Solarmarkt.",
  },
];

const TrustSection = () => (
  <section className="py-20 sm:py-28 bg-secondary/30">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Warum Unternehmen <span className="text-gradient">uns vertrauen</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Vertrauen entsteht durch Klarheit, nicht durch bunte Logos.
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
