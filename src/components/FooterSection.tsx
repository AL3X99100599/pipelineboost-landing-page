const FooterSection = () => (
  <footer className="py-12 border-t border-border">
    <div className="container mx-auto px-4 sm:px-6 text-center">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} · Datenreaktivierung für Solarunternehmen · Alle Rechte vorbehalten
      </p>
    </div>
  </footer>
);

export default FooterSection;
