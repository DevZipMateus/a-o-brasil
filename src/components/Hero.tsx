import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

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
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/65 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-wider mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
        >
          FESTINI <span className="text-accent">AÇOS</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-4 font-light drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
        >
          Soluções completas em tubos e materiais de aço para a indústria brasileira — com mais de 25 anos de experiência no mercado.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-accent font-heading text-base md:text-lg tracking-widest uppercase mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
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
