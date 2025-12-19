import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/theme-toggle";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    // use passive listener for better scroll performance
    const opts: AddEventListenerOptions = { passive: true };
    window.addEventListener("scroll", handleScroll, opts);
    return () => window.removeEventListener("scroll", handleScroll, opts);
  }, []);

  // Close mobile menu when pressing Escape
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a
          href="#"
          className={`text-xl font-semibold transition-colors ${
            isScrolled ? "text-foreground" : "text-primary-foreground"
          }`}
          aria-label="Go to top"
        >
          Bhogireddy Sai Venkat Akshay
        </a>

        <div className="flex items-center gap-3">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" role="navigation" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isScrolled
                    ? "text-muted-foreground hover:text-foreground hover:bg-muted"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <ThemeToggle />

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav id="mobile-navigation" className="md:hidden absolute top-full left-0 right-0 bg-card shadow-lg py-4 animate-fade-in" role="navigation" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-6 py-3 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="px-6 pt-2">
            <ThemeToggle />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
