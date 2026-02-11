import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo-festini.png";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Ambiente industrial com corte de aço e faíscas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <img src={logo} alt="Festini Aços" className="h-28 md:h-40 mx-auto" />
          <h1 className="sr-only">Festini Aços</h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-lg md:text-xl lg:text-2xl text-primary-foreground/80 max-w-3xl mx-auto mb-4 font-light"
        >
          Soluções completas em tubos e materiais de aço para a indústria brasileira — com mais de 25 anos de experiência no mercado.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-accent font-heading text-base md:text-lg tracking-widest uppercase mb-10"
        >
          Proteção que preserva o aço. Confiança que preserva relações.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/5511972591429"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-accent text-accent-foreground px-8 py-4 rounded-md font-heading text-lg uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Solicitar orçamento
          </a>
          <a
            href="#sobre"
            className="border border-primary-foreground/40 text-primary-foreground px-8 py-4 rounded-md font-heading text-lg uppercase tracking-wider hover:bg-primary-foreground/10 transition-colors"
          >
            Conheça a empresa
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
