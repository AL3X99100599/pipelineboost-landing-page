import { useState, useMemo } from "react";
import { Calculator, TrendingUp, ArrowRight } from "lucide-react";

const CalculatorSection = () => {
  const [kontakte, setKontakte] = useState(5000);
  const [nichtkaeufer, setNichtkaeufer] = useState(80);
  const [bestellwert, setBestellwert] = useState(18000);
  const [antwortrate, setAntwortrate] = useState(12);
  const [konversionsrate, setKonversionsrate] = useState(5);

  const results = useMemo(() => {
    const nichtkaeuferKontakte = Math.round(kontakte * (nichtkaeufer / 100));
    const antworten = Math.round(nichtkaeuferKontakte * (antwortrate / 100));
    const kaeufer = Math.round(antworten * (konversionsrate / 100));
    const umsatz = kaeufer * bestellwert;
    return { nichtkaeuferKontakte, antworten, kaeufer, umsatz };
  }, [kontakte, nichtkaeufer, bestellwert, antwortrate, konversionsrate]);

  const formatEur = (n: number) =>
    new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

  const scrollToCalendly = () => {
    document.getElementById("calendly")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="rechner" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glow-border bg-primary/5 mb-6">
            <Calculator className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Revenue Recovery Rechner</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Wie viel Umsatz steckt in <span className="text-gradient">Ihrem CRM?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Schätzen Sie das Potenzial, das in Ihren ungenutzten Leads schlummert.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="glass-card rounded-2xl p-8 space-y-6 glow-border">
            <h3 className="text-lg font-semibold mb-2">Ihre Daten</h3>

            <InputSlider
              label="Kontakte gesamt"
              value={kontakte}
              onChange={setKontakte}
              min={500}
              max={50000}
              step={500}
              format={(v) => v.toLocaleString("de-DE")}
            />
            <InputSlider
              label="% Nichtkäufer"
              value={nichtkaeufer}
              onChange={setNichtkaeufer}
              min={30}
              max={95}
              step={1}
              format={(v) => `${v}%`}
            />
            <InputSlider
              label="Ø Bestellwert (€)"
              value={bestellwert}
              onChange={setBestellwert}
              min={5000}
              max={40000}
              step={1000}
              format={(v) => formatEur(v)}
            />
            <InputSlider
              label="Erwartete Antwortrate (%)"
              value={antwortrate}
              onChange={setAntwortrate}
              min={2}
              max={30}
              step={1}
              format={(v) => `${v}%`}
            />
            <InputSlider
              label="Erwartete Konversionsrate (%)"
              value={konversionsrate}
              onChange={setKonversionsrate}
              min={1}
              max={20}
              step={1}
              format={(v) => `${v}%`}
            />
          </div>

          {/* Results */}
          <div className="flex flex-col gap-4">
            <div className="glass-card rounded-2xl p-8 glow-border glow-card flex-1">
              <h3 className="text-lg font-semibold mb-6">Geschätztes Potenzial</h3>
              <div className="space-y-5">
                <ResultRow label="Nichtkäufer-Kontakte" value={results.nichtkaeuferKontakte.toLocaleString("de-DE")} />
                <ResultRow label="Erwartete Antworten" value={results.antworten.toLocaleString("de-DE")} />
                <ResultRow label="Erwartete Käufer" value={results.kaeufer.toLocaleString("de-DE")} />
                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Geschätzter freigesetzter Umsatz</span>
                    <span className="text-3xl sm:text-4xl font-bold text-gradient glow-text">
                      {formatEur(results.umsatz)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={scrollToCalendly}
              className="group w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:brightness-110 transition-all text-lg"
            >
              <TrendingUp className="w-5 h-5" />
              Potenzial besprechen
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-xs text-muted-foreground text-center">
              * Schätzwerte. Tatsächliche Ergebnisse hängen von Datenqualität und Angebotsrelevanz ab.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const InputSlider = ({
  label, value, onChange, min, max, step, format,
}: {
  label: string; value: number; onChange: (v: number) => void;
  min: number; max: number; step: number; format: (v: number) => string;
}) => (
  <div>
    <div className="flex justify-between mb-2">
      <label className="text-sm text-muted-foreground">{label}</label>
      <span className="text-sm font-semibold text-foreground">{format(value)}</span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full h-2 rounded-full appearance-none cursor-pointer bg-secondary accent-primary [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-lg"
    />
  </div>
);

const ResultRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between items-center">
    <span className="text-muted-foreground">{label}</span>
    <span className="text-xl font-semibold text-foreground">{value}</span>
  </div>
);

export default CalculatorSection;
