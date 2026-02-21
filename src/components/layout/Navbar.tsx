import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export const Navbar = ({ isMenuOpen, setIsMenuOpen }: NavbarProps) => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference text-white">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-serif font-bold tracking-tighter flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-taurus-lime rounded-sm flex items-center justify-center text-taurus-dark text-xs font-black">TC</div>
          TAURES<span className="text-taurus-lime">CREATIVE</span>
        </motion.div>
        
        <div className="hidden md:flex gap-12 text-sm font-mono uppercase tracking-widest">
          {["Work", "Process", "About", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-taurus-lime transition-colors">
              {item}
            </a>
          ))}
        </div>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 bg-taurus-dark z-40 flex flex-col items-center justify-center gap-8 text-white"
        >
          {["Work", "Process", "About", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsMenuOpen(false)}
              className="text-4xl font-serif hover:text-taurus-lime transition-colors"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </>
  );
};
