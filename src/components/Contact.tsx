import { motion } from "framer-motion";
import { Phone, Mail, Clock, Instagram, Linkedin, Facebook } from "lucide-react";

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
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
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
              <div className="space-y-1 text-muted-foreground text-base">
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
          className="mt-16"
        >
          <motion.h3 variants={fadeInUp} custom={0} className="font-heading text-2xl font-bold text-foreground text-center mb-6">
            Siga-nos nas redes sociais
          </motion.h3>
          <div className="flex justify-center gap-5">
            {[
              { icon: Instagram, href: "https://www.instagram.com/festiniacos", label: "Instagram" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/festini-a%C3%A7os/", label: "LinkedIn" },
              { icon: Facebook, href: "https://www.facebook.com/share/1H5N4gy2Em/", label: "Facebook" },
            ].map((social, i) => (
              <motion.a
                key={social.label}
                variants={fadeInUp}
                custom={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-14 h-14 rounded-full gradient-accent flex items-center justify-center shadow-elevated hover:scale-110 transition-transform duration-300"
                aria-label={social.label}
              >
                <social.icon className="text-accent-foreground" size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
