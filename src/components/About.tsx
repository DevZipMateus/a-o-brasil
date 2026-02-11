import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} custom={0} className="text-accent font-heading text-sm uppercase tracking-[0.3em]">
            Quem somos
          </motion.span>
          <motion.h2 variants={fadeInUp} custom={1} className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3">
            Sobre a Festini Aços
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto space-y-6 text-muted-foreground text-lg leading-relaxed mb-20"
        >
          <motion.p variants={fadeInUp} custom={0}>
            A Festini Aços nasceu da experiência, da vivência e da convicção de quem dedicou mais de 25 anos à área comercial, aprendendo que negócios verdadeiros são construídos com confiança, palavra cumprida e relacionamento de longo prazo.
          </motion.p>
          <motion.p variants={fadeInUp} custom={1}>
            Fundada por Diego Festini, a empresa carrega em seu nome a responsabilidade de honrar cada compromisso assumido. Mais do que comercializar aço, a Festini Aços foi criada com o propósito de oferecer segurança, transparência e parceria em cada negociação.
          </motion.p>
          <motion.p variants={fadeInUp} custom={2}>
            Acreditamos que crescimento não acontece sozinho — ele é resultado de trabalho constante, respeito às pessoas e decisões tomadas com integridade. A Festini Aços é a continuidade de uma trajetória marcada por experiência, maturidade e compromisso com resultados.
          </motion.p>
        </motion.div>

        {/* Mission, Vision, Values */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Target,
              title: "Missão",
              text: "Atender nossos clientes com respeito, agilidade e responsabilidade, oferecendo soluções em aço que gerem segurança e tranquilidade em cada projeto.",
            },
            {
              icon: Eye,
              title: "Visão",
              text: "Ser reconhecida como uma empresa parceira, próxima e confiável, que valoriza pessoas, honra compromissos e cresce junto com seus clientes e colaboradores.",
            },
            {
              icon: Heart,
              title: "Valores",
              text: "Respeito às pessoas, transparência nas relações, compromisso com a entrega, parceria de longo prazo, trabalho com dedicação e evolução constante.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              custom={i}
              className="bg-card rounded-lg p-8 shadow-card border border-border hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-md gradient-accent flex items-center justify-center mb-6">
                <item.icon className="text-accent-foreground" size={28} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
