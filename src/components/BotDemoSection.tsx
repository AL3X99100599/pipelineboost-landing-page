import { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, Bot, User } from "lucide-react";

interface Message {
  role: "bot" | "user";
  text: string;
}

const demoFlow: { trigger?: string; bot: string }[] = [
  {
    bot: "Hallo! Hier ist ein kurzes Beispiel, wie unser KI-Bot Ihre alten CRM-Leads anspricht. Klicken Sie auf eine der Antwortoptionen, um den Dialog zu erleben.",
  },
  {
    trigger: "Ja, grundsätzlich schon interessant",
    bot: "Freut mich! Darf ich fragen, ob sich seit Ihrem letzten Kontakt etwas verändert hat — z.B. bei den Stromkosten oder der Dachsituation?",
  },
  {
    trigger: "Ja, die Stromkosten sind nochmal gestiegen",
    bot: "Verstehe ich gut — das hören wir derzeit häufig. Hätten Sie Interesse an einem kurzen, unverbindlichen Beratungsgespräch, um Ihre aktuelle Situation zu prüfen? Dauert nur 15 Minuten.",
  },
  {
    trigger: "Ja, können wir machen",
    bot: "Perfekt! Ich leite Sie direkt an einen unserer Solarberater weiter. — Genau so einfach wird aus einem alten Lead ein neuer Termin. 🎯",
  },
];

const BotDemoSection = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: demoFlow[0].bot },
  ]);
  const [step, setStep] = useState(1);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleReply = (triggerText: string) => {
    if (step >= demoFlow.length) return;
    const entry = demoFlow[step];
    setMessages((prev) => [
      ...prev,
      { role: "user", text: triggerText },
    ]);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: entry.bot },
      ]);
      setStep((s) => s + 1);
    }, 800);
  };

  const isComplete = step >= demoFlow.length;
  const currentOptions = !isComplete && demoFlow[step].trigger ? [demoFlow[step].trigger!] : [];

  return (
    <section id="demo" className="py-20 sm:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glow-border bg-primary/5 mb-6">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Live Bot-Demo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Erleben Sie den Bot <span className="text-gradient">in Aktion</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            So spricht unser KI-Bot Ihre alten Leads an — persönlich, intelligent, auf den Punkt.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="glass-card rounded-2xl overflow-hidden glow-border glow-card">
            {/* Chat header */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-sm font-medium">KI-Assistent · Live-Demo</span>
            </div>

            {/* Messages */}
            <div className="p-6 space-y-4 min-h-[320px] max-h-[420px] overflow-y-auto">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "bot" && (
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-secondary text-secondary-foreground rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      <User className="w-4 h-4 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
              <div ref={endRef} />
            </div>

            {/* Reply options */}
            <div className="px-6 pb-6">
              {currentOptions.length > 0 ? (
                <div className="space-y-2">
                  {currentOptions.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleReply(opt)}
                      className="w-full flex items-center justify-between gap-2 px-4 py-3 rounded-xl glow-border bg-primary/5 hover:bg-primary/10 transition-all text-sm font-medium text-foreground"
                    >
                      {opt}
                      <Send className="w-4 h-4 text-primary shrink-0" />
                    </button>
                  ))}
                </div>
              ) : isComplete ? (
                <div className="text-center py-3">
                  <p className="text-sm text-primary font-medium">✓ Demo abgeschlossen</p>
                  <button
                    onClick={() => {
                      setMessages([{ role: "bot", text: demoFlow[0].bot }]);
                      setStep(1);
                    }}
                    className="text-xs text-muted-foreground hover:text-foreground mt-2 underline"
                  >
                    Nochmal starten
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BotDemoSection;
