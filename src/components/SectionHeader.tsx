import { motion } from "motion/react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export const SectionHeader = ({ title, subtitle, align = "left" }: SectionHeaderProps) => {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-taurus-lime bg-taurus-dark px-3 py-1 text-xs font-mono uppercase tracking-widest rounded-sm mb-4 inline-block"
      >
        {subtitle || "Section"}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-6xl font-serif leading-tight"
      >
        {title}
      </motion.h2>
    </div>
  );
};
