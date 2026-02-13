import { motion } from "framer-motion";
import { Flame, Paintbrush, Scissors, CircleDot, Wrench, Settings, Factory } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08 },
  }),
};

const services = [
  { icon: Flame, name: "Galvanização" },
  { icon: Paintbrush, name: "Pintura eletrostática" },
  { icon: Paintbrush, name: "Pintura líquida" },
  { icon: Scissors, name: "Oxicorte" },
  { icon: CircleDot, name: "Corte a plasma" },
  { icon: Scissors, name: "Corte e dobra" },
  { icon: Settings, name: "Calandra" },
  { icon: Wrench, name: "Usinagem de precisão" },
  { icon: Factory, name: "Caldeiraria" },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} custom={0} className="text-accent font-heading text-sm uppercase tracking-[0.3em]">
            O que fazemos
          </motion.span>
          <motion.h2 variants={fadeInUp} custom={1} className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3">
            Serviços
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              variants={fadeInUp}
              custom={i}
              className="flex items-center gap-4 bg-card rounded-lg p-5 shadow-card border border-border hover:shadow-elevated hover:border-accent/30 hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-md gradient-accent flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <s.icon className="text-accent-foreground" size={28} />
              </div>
              <span className="font-heading text-2xl font-bold text-foreground">{s.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
