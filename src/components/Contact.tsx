import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
};

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} custom={0} className="text-accent font-heading text-sm uppercase tracking-[0.3em]">
            Fale conosco
          </motion.span>
          <motion.h2 variants={fadeInUp} custom={1} className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3">
            Contato
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
        >
          {[
            {
              icon: Phone,
              title: "Telefones",
              lines: [
                <a key="1" href="https://wa.me/5511972591429" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">(11) 97259-1429</a>,
                <a key="2" href="https://wa.me/5511970164597" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">(11) 97016-4597</a>,
              ],
            },
            {
              icon: Mail,
              title: "E-mail",
              lines: [
                <a key="e" href="mailto:diego@festiniacos.com.br" className="hover:text-accent transition-colors break-all">diego@festiniacos.com.br</a>,
              ],
            },
            {
              icon: MapPin,
              title: "Endereço",
              lines: [
                <span key="a">Av. Fabio Ferraz Bicudo, 894</span>,
                <span key="b">Jd. Res. Dona Lucila</span>,
                <span key="c">Indaiatuba / SP</span>,
              ],
            },
            {
              icon: Clock,
              title: "Horário",
              lines: [
                <span key="h1">Seg. a Qui.: 8h às 18h</span>,
                <span key="h2">Sexta: 8h às 17h</span>,
              ],
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              custom={i}
              className="bg-card rounded-lg p-8 shadow-card border border-border text-center"
            >
              <div className="w-14 h-14 rounded-md gradient-accent flex items-center justify-center mx-auto mb-5">
                <item.icon className="text-accent-foreground" size={26} />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <div className="space-y-1 text-muted-foreground text-sm">
                {item.lines.map((line, j) => (
                  <div key={j}>{line}</div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mt-12"
        >
          <motion.a
            variants={fadeInUp}
            custom={0}
            href="https://www.instagram.com/festiniacos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors font-medium"
          >
            <Instagram size={20} />
            @festiniacos
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
