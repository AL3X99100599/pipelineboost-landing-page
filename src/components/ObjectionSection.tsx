import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const objections = [
  {
    q: "Wir haben die Leads schon mehrfach kontaktiert — das bringt nichts mehr.",
    a: "Die meisten Unternehmen haben ihre alten Leads per E-Mail oder Telefon kontaktiert — oft ohne Personalisierung und ohne Timing-Intelligenz. Unser KI-Bot spricht Leads individuell an, zur richtigen Zeit, mit dem richtigen Kontext. Das ist ein komplett anderer Kanal.",
  },
  {
    q: "Was, wenn die Datenqualität schlecht ist?",
    a: "Wir sind offen: Ergebnisse hängen direkt von der Datenqualität ab. Deshalb prüfen wir vor dem Start die Struktur Ihrer Daten und geben Ihnen eine ehrliche Einschätzung. Kein Setup-Fee bedeutet auch: kein Risiko, es auszuprobieren.",
  },
  {
    q: "Wie unterscheidet sich das von einem Callcenter?",
    a: "Ein Callcenter ruft kalt an und kostet Sie pro Stunde — unabhängig vom Ergebnis. Wir reaktivieren per KI-gestütztem Messaging, personalisiert und skalierbar. Und Sie zahlen nur bei gebuchtem Termin.",
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
    a: "Nein. Sie exportieren einfach eine Liste Ihrer Kontakte — als CSV oder Excel. Keine API-Anbindung, keine technische Integration nötig.",
  },
];

const ObjectionSection = () => (
  <section className="py-20 sm:py-28">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Häufige <span className="text-gradient">Fragen</span>
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
