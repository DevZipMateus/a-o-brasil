import { motion } from "framer-motion";
import {
  Sprout, Flame, Building2, Zap, Ship, Columns3,
  Cog, Wrench, TrainFront, Tractor, Settings, HardHat,
  Factory, Mountain, TreePine, Truck, ShieldAlert, Thermometer,
  CircleDot, MoreHorizontal,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.04 },
  }),
};

const markets: { name: string; icon: LucideIcon }[] = [
  { name: "Agrícola", icon: Sprout },
  { name: "Caldeirarias", icon: Flame },
  { name: "Construção civil", icon: Building2 },
  { name: "Energia e mineração", icon: Zap },
  { name: "Estaleiros (indústria naval)", icon: Ship },
  { name: "Estruturas metálicas", icon: Columns3 },
  { name: "Fabricantes de máquinas e equipamentos", icon: Cog },
  { name: "Ferramentaria", icon: Wrench },
  { name: "Ferroviária", icon: TrainFront },
  { name: "Implementos agrícolas", icon: Tractor },
  { name: "Indústria mecânica", icon: Settings },
  { name: "Manutenção industrial", icon: HardHat },
  { name: "Metalúrgicas", icon: Factory },
  { name: "Mineração", icon: Mountain },
  { name: "Papel e celulose", icon: TreePine },
  { name: "Rodoviária", icon: Truck },
  { name: "Sistemas de combate a incêndio", icon: ShieldAlert },
  { name: "Trocadores de calor", icon: Thermometer },
  { name: "Usinagem e caldeiraria", icon: CircleDot },
  { name: "Entre outros", icon: MoreHorizontal },
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
              key={m.name}
              variants={fadeInUp}
              custom={i}
              className="flex items-center gap-3 py-2.5 border-b border-primary-foreground/10 break-inside-avoid group cursor-default"
            >
              <m.icon className="text-accent shrink-0 group-hover:scale-125 transition-transform duration-200" size={16} />
              <span className="text-primary-foreground/70 text-sm font-medium group-hover:text-accent transition-colors duration-200">
                {m.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Markets;
