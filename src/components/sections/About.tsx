import { motion } from "motion/react";
import { SectionHeader } from "../SectionHeader";
import { Container } from "../common/Container";
import { Bio } from "./About/Bio";
import { Skills } from "./About/Skills";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-taurus-cream">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/designer/800/800" 
                alt="Designer Portrait" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-taurus-lime rounded-full flex items-center justify-center text-taurus-dark font-bold animate-spin-slow">
              <div className="text-center text-[10px] font-mono leading-tight">
                AVAILABLE FOR <br /> PROJECTS 2026
              </div>
            </div>
          </motion.div>
          
          <div>
            <SectionHeader 
              title="Grounded in Design, Driven by Impact." 
              subtitle="About Me"
            />
            <Bio />
            <Skills />
          </div>
        </div>
      </Container>
    </section>
  );
};
