import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-festini.png";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Mercados", href: "#mercados" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-elevated"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#inicio">
          <img src={logo} alt="Festini Aços" className="h-12" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-primary-foreground/80 hover:text-accent font-medium text-sm uppercase tracking-wider transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5511972591429"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-accent text-accent-foreground px-5 py-2.5 rounded-md font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Orçamento
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="lg:hidden bg-primary/95 backdrop-blur-md border-t border-primary-foreground/10 px-4 pb-6" aria-label="Navegação mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-primary-foreground/80 hover:text-accent font-medium text-sm uppercase tracking-wider transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5511972591429"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 gradient-accent text-accent-foreground text-center px-5 py-2.5 rounded-md font-semibold text-sm uppercase tracking-wider"
          >
            Orçamento
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
