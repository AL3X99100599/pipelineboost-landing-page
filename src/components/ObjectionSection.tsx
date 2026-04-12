import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const objections = [
  {
    q: "Wir haben die Leads schon mehrfach kontaktiert — das bringt nichts mehr.",
    a: "Wahrscheinlich per Telefon oder E-Mail — oft ohne Personalisierung und ohne Timing-Strategie. SMS ist ein komplett anderer Kanal: über 90 % Öffnungsrate, keine Warteschleife, keine verpassten Anrufe. Unser KI-Bot spricht jeden Kontakt individuell an, zur richtigen Zeit, mit dem richtigen Kontext. Das ist nicht dasselbe wie \"nochmal anrufen\".",
  },
  {
    q: "Unser Vertrieb kann das doch selbst machen.",
    a: "Kann er — aber tut er es? Vertriebsteams sind auf Neuabschlüsse fokussiert. Alte Kontakte systematisch nachzufassen ist Fleißarbeit, die im Tagesgeschäft immer nach hinten rutscht. Unser System übernimmt genau diesen Teil — Ihr Vertrieb bekommt fertige Termine und kann sich auf das konzentrieren, was er am besten kann: abschließen.",
  },
  {
    q: "Was, wenn die Datenqualität schlecht ist?",
    a: "Dann sind wir ehrlich zu Ihnen. Wir prüfen vor dem Start die Struktur und Qualität Ihrer Daten und geben Ihnen eine realistische Einschätzung. Kein Setup-Fee bedeutet auch: kein Risiko, es mit einem ersten Segment auszuprobieren.",
  },
  {
    q: "Was kostet mich das, wenn es nicht funktioniert?",
    a: "Nichts. Kein Setup-Fee, kein Retainer, keine Vorabkosten. Wenn kein qualifizierter Termin zustande kommt, zahlen Sie keinen Cent. Das volle Risiko liegt bei uns.",
  },
  {
    q: "Wie lange dauert es, bis wir Ergebnisse sehen?",
    a: "Erste Nachrichten gehen innerhalb von 72 Stunden raus. Innerhalb von 96 Stunden können die ersten Termine gebucht sein. Die tatsächliche Geschwindigkeit hängt vom Datenvolumen und der Antwortbereitschaft Ihrer Kontakte ab.",
  },
  {
    q: "Brauchen wir technische Integration oder ein bestimmtes CRM?",
    a: "Nein. Sie exportieren einfach eine Liste Ihrer Kontakte — als CSV oder Excel. Keine API-Anbindung, keine technische Integration nötig. Das dauert in der Regel 10 Minuten.",
  },
  {
    q: "Wie viele Kontakte brauchen wir mindestens?",
    a: "Ab 500 Kontakten wird es interessant. Je mehr verwertbare Daten vorhanden sind, desto besser die Ergebnisse. Die meisten unserer Partner starten mit 2.000–10.000 Kontakten.",
  },
];

const ObjectionSection = () => (
  <section className="py-20 sm:py-28">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Was Vertriebsleiter uns fragen —{" "}
          <span className="text-gradient">bevor sie starten</span>
        </h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {objections.map((obj, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="glass-card rounded-xl px-6 border-border"
            >
              <AccordionTrigger className="text-left text-base font-medium py-5 hover:no-underline">
                {obj.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                {obj.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default ObjectionSection;
