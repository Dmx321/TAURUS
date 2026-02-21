import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

export const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <section ref={targetRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-taurus-dark text-taurus-cream">
      <motion.div 
        style={{ opacity, scale, y }}
        className="container mx-auto px-6 z-10 text-center"
      >
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-taurus-lime font-mono text-sm uppercase tracking-[0.3em] mb-6 block"
        >
          Creative Portfolio 2026
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-[10vw] font-serif leading-[0.9] mb-8"
        >
          GROUNDED <br />
          <span className="italic text-stroke">CREATIVITY</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-xl mx-auto text-lg md:text-xl text-taurus-cream/60 font-light"
        >
          Solving complex problems through minimalist design, accessibility, and user-centered thinking.
        </motion.p>
      </motion.div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-taurus-green organic-shape blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-taurus-lime organic-shape blur-3xl animate-pulse delay-1000" />
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-taurus-lime"
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
};
