import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import { HeroContent } from "./Hero/HeroContent";
import { HeroBackground } from "./Hero/HeroBackground";

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
      <motion.div style={{ opacity, scale, y }} className="z-10 w-full">
        <HeroContent />
      </motion.div>
      <HeroBackground />
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
