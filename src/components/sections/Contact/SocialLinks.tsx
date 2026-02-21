import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

export const SocialLinks = () => {
  return (
    <div className="flex justify-center gap-8">
      {[
        { icon: <Linkedin />, label: "LinkedIn" },
        { icon: <Instagram />, label: "Instagram" },
        { icon: <Github />, label: "GitHub" },
        { icon: <Mail />, label: "Email" }
      ].map((social) => (
        <motion.a
          key={social.label}
          whileHover={{ y: -5 }}
          href="#"
          className="w-12 h-12 rounded-full border border-taurus-dark flex items-center justify-center hover:bg-taurus-dark hover:text-taurus-lime transition-all"
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};
