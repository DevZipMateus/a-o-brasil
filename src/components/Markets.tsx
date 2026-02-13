import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.04 },
  }),
};

const markets = [
  "Agrícola", "Caldeirarias", "Construção civil", "Energia e mineração",
  "Estaleiros (indústria naval)", "Estruturas metálicas",
  "Fabricantes de máquinas e equipamentos", "Ferramentaria", "Ferroviária",
  "Implementos agrícolas", "Indústria mecânica", "Manutenção industrial",
  "Metalúrgicas", "Mineração", "Papel e celulose", "Rodoviária",
  "Sistemas de combate a incêndio", "Trocadores de calor",
  "Usinagem e caldeiraria", "Entre outros",
];

const Markets = () => {
  return (
    <section id="mercados" className="py-24 gradient-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} custom={0} className="text-accent font-heading text-sm uppercase tracking-[0.3em]">
            Onde atuamos
          </motion.span>
          <motion.h2 variants={fadeInUp} custom={1} className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-3">
            Mercados atendidos
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="columns-2 md:columns-3 lg:columns-4 gap-x-8 gap-y-0 max-w-5xl mx-auto"
        >
          {markets.map((m, i) => (
            <motion.div
              key={m}
              variants={fadeInUp}
              custom={i}
              className="flex items-center gap-3 py-2.5 border-b border-primary-foreground/10 break-inside-avoid group cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 group-hover:scale-150 transition-transform duration-200" />
              <span className="text-primary-foreground/70 text-sm font-medium group-hover:text-accent transition-colors duration-200">
                {m}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Markets;
