import { ReactNode } from "react";

export const Container = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return (
    <div className={`container mx-auto px-6 ${className}`}>
      {children}
    </div>
  );
};
