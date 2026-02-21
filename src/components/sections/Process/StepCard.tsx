import { Accessibility, Layout, BarChart3, Share2 } from "lucide-react";
import { PROCESS_STEPS } from "../../../data/portfolioData";
import { motion } from "motion/react";

const ICON_MAP = {
  Accessibility: <Accessibility className="text-taurus-lime" />,
  Layout: <Layout className="text-taurus-lime" />,
  BarChart3: <BarChart3 className="text-taurus-lime" />,
  Share2: <Share2 className="text-taurus-lime" />
};

export const StepCard = ({ step, index }: { step: any; index: number; key?: string | number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors group"
    >
      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-taurus-lime/20 transition-colors">
        {ICON_MAP[step.iconName as keyof typeof ICON_MAP]}
      </div>
      <h3 className="text-xl font-serif mb-4">{step.title}</h3>
      <p className="text-sm text-taurus-cream/60 leading-relaxed">
        {step.description}
      </p>
      <div className="mt-6 text-xs font-mono text-taurus-lime opacity-0 group-hover:opacity-100 transition-opacity">
        0{index + 1}
      </div>
    </motion.div>
  );
};
