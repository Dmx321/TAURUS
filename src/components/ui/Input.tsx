import React, { ComponentPropsWithoutRef } from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label?: string;
  error?: string;
  className?: string;
  placeholder?: string;
  type?: string;
}

export const Input = ({ label, error, className = "", ...props }: InputProps) => {
  return (
    <div className="w-full mb-4">
      {label && (
        <label className="block text-xs font-mono uppercase tracking-widest text-taurus-dark/60 mb-2">
          {label}
        </label>
      )}
      <input
        className={`w-full bg-transparent border-b-2 border-taurus-dark/20 py-3 focus:border-taurus-dark outline-none transition-colors font-sans ${className} ${error ? 'border-red-500' : ''}`}
        {...props}
      />
      {error && <p className="text-red-500 text-[10px] mt-1 font-mono uppercase">{error}</p>}
    </div>
  );
};
