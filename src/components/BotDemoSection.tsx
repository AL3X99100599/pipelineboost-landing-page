import { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, Bot, User, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface Message {
  role: "assistant" | "user";
  content: string;
}

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/bot-chat`;

const INITIAL_BOT_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hi, ist das Tom?\n\nDu hattest vor einiger Zeit bei XY Firma wegen einer Solaranlage angefragt.\n\nIch wollte nur kurz nachfragen:\n\nHast du das Projekt inzwischen schon umgesetzt?",
};

const MAX_USER_MESSAGES = 4;

const DEMO_END_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hey, du bist am Ende der Demo angekommen!\n\nWenn dich das überzeugt hat, buch dir gern ein kurzes 15-minütiges Gespräch über den Link weiter unten.\n\nWir freuen uns auf dich!",
};

const BotDemoSection = () => {
  const [messages, setMessages] = useState<Message[]>([INITIAL_BOT_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const userMessageCount = messages.filter((m) => m.role === "user").length;
  const demoEnded = userMessageCount >= MAX_USER_MESSAGES;

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading || demoEnded) return;

    const userMsg: Message = { role: "user", content: text.trim() };
    const updatedMessages = [...messages, userMsg];
    const newUserCount = userMessageCount + 1;
    setMessages(updatedMessages);
    setInput("");

    if (newUserCount >= MAX_USER_MESSAGES) {
      // Demo limit reached — show closing message instead of calling API
      setTimeout(() => {
        setMessages((prev) => [...prev, DEMO_END_MESSAGE]);
      }, 800);
      return;
    }

    setIsLoading(true);

    let assistantContent = "";

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!resp.ok) {
        const err = await resp.json().catch(() => ({ error: "Fehler" }));
        toast.error(err.error || "Ein Fehler ist aufgetreten.");
        setIsLoading(false);
        return;
      }

      if (!resp.body) throw new Error("No response body");

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);

          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") break;

          try {
            const parsed = JSON.parse(jsonStr);
            const delta = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (delta) {
              assistantContent += delta;
              setMessages((prev) => {
                const last = prev[prev.length - 1];
                if (last?.role === "assistant" && prev.length > 1 && prev[prev.length - 2]?.role === "user") {
                  return prev.map((m, i) =>
                    i === prev.length - 1 ? { ...m, content: assistantContent } : m
                  );
                }
                return [...prev, { role: "assistant", content: assistantContent }];
              });
            }
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }
    } catch (e) {
      console.error("Bot chat error:", e);
      toast.error("Verbindungsfehler. Bitte versuchen Sie es erneut.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <section id="demo" className="py-20 sm:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glow-border bg-primary/5 mb-6">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Live Demo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Erleben Sie den Bot <span className="text-gradient">in Aktion</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            So spricht Anna Ihre alten Leads an — persönlich, intelligent, auf den Punkt. Testen Sie es selbst.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="glass-card rounded-2xl overflow-hidden glow-border glow-card">
            {/* Chat header */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-sm font-medium">Anna · Ihre nette Mitarbeiterin</span>
            </div>

            {/* Messages */}
            <div className="p-6 space-y-4 min-h-[320px] max-h-[420px] overflow-y-auto">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && (
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
                    {msg.content.split("\n").map((line, idx) => (
                      <span key={idx}>
                        {line}
                        {idx < msg.content.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      <User className="w-4 h-4 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && messages[messages.length - 1]?.role === "user" && (
                <div className="flex gap-3 justify-start">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                  <div className="bg-secondary text-secondary-foreground px-4 py-3 rounded-2xl rounded-bl-md text-sm">
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* Suggestions */}
            {showSuggestions && (
              <div className="px-6 pb-3 space-y-2">
                {SUGGESTIONS.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(s)}
                    className="w-full flex items-center justify-between gap-2 px-4 py-3 rounded-xl glow-border bg-primary/5 hover:bg-primary/10 transition-all text-sm font-medium text-foreground"
                  >
                    {s}
                    <Send className="w-4 h-4 text-primary shrink-0" />
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSubmit} className="px-6 pb-6 pt-2">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ihre Nachricht…"
                  disabled={isLoading}
                  className="flex-1 bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="px-4 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>

            {/* Reset */}
            {messages.length > 2 && !isLoading && (
              <div className="text-center pb-4">
                <button
                  onClick={() => {
                    setMessages([INITIAL_BOT_MESSAGE]);
                    setInput("");
                  }}
                  className="text-xs text-muted-foreground hover:text-foreground underline"
                >
                  Gespräch neu starten
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BotDemoSection;
