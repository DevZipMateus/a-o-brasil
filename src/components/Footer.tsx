import logo from "@/assets/logo-festini.png";

const Footer = () => {
  return (
    <footer className="gradient-dark py-12 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <img src={logo} alt="Festini Aços" className="h-14 mb-2 md:mx-0 mx-auto rounded-lg" />
            <p className="text-primary-foreground/50 text-sm leading-relaxed">
              Proteção que preserva o aço.<br />
              Confiança que preserva relações.
            </p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-primary-foreground mb-3">Contato</h3>
            <div className="space-y-1 text-primary-foreground/50 text-sm">
              <p><a href="https://wa.me/5511972591429" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">(11) 97259-1429</a></p>
              <p><a href="https://wa.me/5511970164597" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">(11) 97016-4597</a></p>
              <p><a href="mailto:diego@festiniacos.com.br" className="hover:text-accent transition-colors">diego@festiniacos.com.br</a></p>
            </div>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-primary-foreground mb-3">Endereço</h3>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">
              Av. Fabio Ferraz Bicudo, 894<br />
              Jd. Res. Dona Lucila<br />
              Indaiatuba / SP
            </p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center">
          <p className="text-primary-foreground/30 text-xs">
            © {new Date().getFullYear()} Festini Aços Ltda — CNPJ: 65.059.221/0001-80. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
