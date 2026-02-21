import { ReactNode } from "react";

export const Grid = ({ 
  children, 
  cols = 1, 
  md = 2, 
  lg = 3, 
  gap = 8, 
  className = "" 
}: { 
  children: ReactNode; 
  cols?: number; 
  md?: number; 
  lg?: number; 
  gap?: number;
  className?: string;
}) => {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
  };

  const mdCols = {
    1: "md:grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  };

  const lgCols = {
    1: "lg:grid-cols-1",
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
  };

  return (
    <div className={`grid ${gridCols[cols as keyof typeof gridCols]} ${mdCols[md as keyof typeof mdCols]} ${lgCols[lg as keyof typeof lgCols]} gap-${gap} ${className}`}>
      {children}
    </div>
  );
};
