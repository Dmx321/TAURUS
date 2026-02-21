import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-taurus-dark/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-taurus-cream rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-serif">{title}</h3>
                <button onClick={onClose} className="p-2 hover:bg-taurus-dark/5 rounded-full transition-colors">
                  <X size={24} />
                </button>
              </div>
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
