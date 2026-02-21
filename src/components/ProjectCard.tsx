import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Project } from "../types";

export const ProjectCard = ({ project, index }: { project: Project; index: number; key?: string | number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-taurus-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <button className="bg-taurus-lime text-taurus-dark px-6 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            View Case Study <ArrowRight size={18} />
          </button>
        </div>
      </div>
      <div className="p-6">
        <span className="text-xs font-mono uppercase tracking-widest text-taurus-green/60 mb-2 block">
          {project.category}
        </span>
        <h3 className="text-2xl font-serif mb-2 group-hover:text-taurus-green transition-colors">
          {project.title}
        </h3>
        <p className="text-taurus-dark/70 text-sm line-clamp-2">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};
