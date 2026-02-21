import { motion } from "motion/react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-mono uppercase tracking-widest transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-taurus-lime focus:ring-offset-2";
  
  const variants = {
    primary: "bg-taurus-lime text-taurus-dark hover:bg-taurus-dark hover:text-taurus-lime",
    secondary: "bg-taurus-dark text-taurus-cream hover:bg-taurus-green",
    outline: "border-2 border-taurus-dark text-taurus-dark hover:bg-taurus-dark hover:text-taurus-cream",
    ghost: "text-taurus-dark hover:bg-taurus-dark/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </motion.button>
  );
};
