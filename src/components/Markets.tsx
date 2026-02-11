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
          className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto"
        >
          {markets.map((m, i) => (
            <motion.span
              key={m}
              variants={fadeInUp}
              custom={i}
              className="bg-primary-foreground/5 border border-primary-foreground/15 text-primary-foreground/80 px-5 py-2.5 rounded-full text-sm font-medium hover:border-accent/50 hover:text-accent transition-colors duration-200"
            >
              {m}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Markets;
