import React from "react";
import { motion } from "motion/react";

export const Tooltip = ({ text, children }: { text: string; children: React.ReactNode }) => {
  return (
    <div className="group relative inline-block">
      {children}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-taurus-dark text-taurus-cream text-[10px] font-mono uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        {text}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-taurus-dark" />
      </div>
    </div>
  );
};
