import { motion } from "motion/react";
import { SectionHeader } from "../SectionHeader";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-taurus-cream">
      <div className="container mx-auto px-6">
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
            <p className="text-lg text-taurus-dark/80 mb-8 leading-relaxed">
              I am a multi-disciplinary designer specializing in building digital products that are as functional as they are beautiful. My approach combines the reliability of traditional design principles with the forward-thinking energy of modern tech.
            </p>
            <div className="flex flex-wrap gap-4">
              {["Material Design", "Accessibility", "Data Viz", "Branding", "React", "Figma"].map(skill => (
                <span key={skill} className="px-4 py-2 bg-taurus-dark text-taurus-cream rounded-full text-xs font-mono uppercase tracking-widest">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
