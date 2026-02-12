import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const products = [
  {
    title: "Tubos de condução",
    desc: "Com e sem costura, atendendo normas API 5L, NBR 5580/5590/6591/8261, ASTM A106/A178/A179/A333/A335/A671/A672, tubos calandrados e outros sob consulta.",
  },
  {
    title: "Eletrodutos",
    desc: "Nas normas NBR-5597 e NBR-5598 — Pré-zincado, galvanizado eletrolítico e galvanizado à fogo.",
  },
  {
    title: "Chapas",
    desc: "Chapas de aço em diversas especificações para atender projetos industriais e estruturais.",
  },
];

const Products = () => {
  return (
    <section id="produtos" className="py-24 gradient-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} custom={0} className="text-accent font-heading text-sm uppercase tracking-[0.3em]">
            Nosso portfólio
          </motion.span>
          <motion.h2 variants={fadeInUp} custom={1} className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-3">
            Produtos
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeInUp}
              custom={i}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-8 hover:border-accent/40 transition-colors duration-300"
            >
              <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4">{p.title}</h3>
              <p className="text-primary-foreground/60 leading-relaxed break-words">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
