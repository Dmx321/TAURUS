import { motion } from "motion/react";

export const HeroContent = () => {
  return (
    <div className="container mx-auto px-6 z-10 text-center">
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
    </div>
  );
};
