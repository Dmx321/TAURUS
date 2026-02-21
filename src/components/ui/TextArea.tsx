import React, { ComponentPropsWithoutRef } from "react";

interface TextAreaProps extends ComponentPropsWithoutRef<"textarea"> {
  label?: string;
  error?: string;
  className?: string;
  placeholder?: string;
}

export const TextArea = ({ label, error, className = "", ...props }: TextAreaProps) => {
  return (
    <div className="w-full mb-4">
      {label && (
        <label className="block text-xs font-mono uppercase tracking-widest text-taurus-dark/60 mb-2">
          {label}
        </label>
      )}
      <textarea
        className={`w-full bg-transparent border-b-2 border-taurus-dark/20 py-3 focus:border-taurus-dark outline-none transition-colors font-sans min-h-[120px] resize-none ${className} ${error ? 'border-red-500' : ''}`}
        {...props}
      />
      {error && <p className="text-red-500 text-[10px] mt-1 font-mono uppercase">{error}</p>}
    </div>
  );
};
