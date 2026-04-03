import { useState, useEffect } from "react";
import { Zap, ArrowRight, Menu, X } from "lucide-react";

const StickyNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <Zap className="w-5 h-5 text-primary" />
          <span className="font-bold text-lg">ReActivate</span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <button onClick={() => scrollTo("demo")} className="hover:text-foreground transition-colors">Demo</button>
          <button onClick={() => scrollTo("rechner")} className="hover:text-foreground transition-colors">Rechner</button>
          <button onClick={() => scrollTo("calendly")} className="hover:text-foreground transition-colors">Kontakt</button>
          <button
            onClick={() => scrollTo("calendly")}
            className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:brightness-110 transition-all text-sm"
          >
            Termin buchen
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass-card border-t border-border px-4 py-6 space-y-4">
          <button onClick={() => scrollTo("demo")} className="block w-full text-left text-foreground py-2">Demo</button>
          <button onClick={() => scrollTo("rechner")} className="block w-full text-left text-foreground py-2">Rechner</button>
          <button
            onClick={() => scrollTo("calendly")}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-primary-foreground font-semibold rounded-lg"
          >
            Termin buchen
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </nav>
  );
};

export default StickyNav;
