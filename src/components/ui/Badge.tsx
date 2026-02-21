import React from "react";

export const Badge = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <span className={`px-3 py-1 bg-taurus-dark text-taurus-cream rounded-full text-[10px] font-mono uppercase tracking-widest ${className}`}>
      {children}
    </span>
  );
};
