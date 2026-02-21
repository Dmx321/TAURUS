import { motion } from "motion/react";

export const Skeleton = ({ className = "" }: { className?: string }) => {
  return (
    <motion.div
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      className={`bg-taurus-dark/10 rounded-md ${className}`}
    />
  );
};
