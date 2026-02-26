import { motion } from "framer-motion";
import productTubos from "@/assets/product-tubos.jpg";
import productEletrodutos from "@/assets/product-eletrodutos.jpg";
import productChapas from "@/assets/product-chapas.jpg";

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
    image: productTubos,
  },
  {
    title: "Eletrodutos",
    desc: "Nas normas NBR-5597 e NBR-5598 — Pré-zincado, galvanizado eletrolítico e galvanizado à fogo.",
    image: productEletrodutos,
  },
  {
    title: "Chapas",
    desc: "Chapas de aço em diversas especificações para atender projetos industriais e estruturais.",
    image: productChapas,
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
              className="group border border-primary-foreground/10 rounded-lg overflow-hidden hover:border-accent/40 transition-colors duration-300 relative min-h-[320px] flex flex-col justify-end"
            >
              <img
                src={p.image}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
              <div className="relative z-10 p-8">
                <span className="absolute top-0 left-0 w-1 h-full bg-accent rounded-r" />
                <span className="text-accent font-heading text-xs uppercase tracking-[0.2em] mb-2 block">0{i + 1}</span>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">{p.title}</h3>
                <p className="text-white/80 leading-relaxed break-words text-lg">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
