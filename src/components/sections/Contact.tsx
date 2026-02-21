import { motion } from "motion/react";
import { Container } from "../common/Container";
import { ContactForm } from "./Contact/ContactForm";
import { SocialLinks } from "./Contact/SocialLinks";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-taurus-lime text-taurus-dark">
      <Container className="text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl font-serif mb-12"
        >
          Let's build <br /> something <span className="italic">great</span>.
        </motion.h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
          <a href="mailto:hello@taures.design" className="text-2xl md:text-4xl font-serif border-b-2 border-taurus-dark hover:text-taurus-green hover:border-taurus-green transition-all">
            hello@taures.design
          </a>
          <div className="hidden md:block w-px h-12 bg-taurus-dark/20" />
          <a href="tel:+251986711080" className="text-2xl md:text-4xl font-serif border-b-2 border-taurus-dark hover:text-taurus-green hover:border-taurus-green transition-all">
            +251 986 711 080
          </a>
        </div>

        <div className="mb-24">
          <h3 className="text-xs font-mono uppercase tracking-[0.3em] mb-12">Send a Direct Message</h3>
          <ContactForm />
        </div>

        <SocialLinks />
      </Container>
    </section>
  );
};
